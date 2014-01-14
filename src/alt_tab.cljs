(ns alt-tab
  (:require [lt.object :as object]
            [lt.objs.context :as ctx]
            [lt.objs.command :as cmd]
            [lt.objs.tabs :as tabs]
            [lt.objs.files :as files]
            [lt.objs.workspace :as ws]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [behavior defui]]))

(behavior ::track-active
          :for #{:tabset.tab}
          :triggers #{:show}
          :reaction (fn [this]
                      (object/merge! this {::last-activated (new js/Date)})))

(defn current-tabs []
  (if-let [ts (ctx/->obj :tabset)]
    (->> (:objs @ts)
         (sort (fn [o1 o2]
                 (let [t1 (or (::last-activated @o1) 0)
                       t2 (or (::last-activated @o2) 0)]
                   (- t2 t1)))))))

(defn relative [from to]
  (.relative files/fpath from to))

(defn trim-ws-dir [path]
  (let [folders (:folders @ws/current-ws)
        folder (first (filter #(.startsWith path %) folders))]
    (if folder
      (if (= 1 (count folders))
        (relative folder path)
        (relative (files/parent folder) path))
      path)))

(defn trim-home-dir [path]
  (if (.startsWith path (files/home))
    (str "~" files/separator (relative (files/home) path))
    path))

(defn normalize-path [path]
  (-> path
      (trim-ws-dir)
      (trim-home-dir)))

(defui item [obj]
  (let [name (tabs/->name obj)
        path (tabs/->path obj)
        dir (files/parent path)
        dirty? (:dirty @obj)]
    [:tr
     [:td.AltTab-align-right.AltTab-pad (normalize-path dir)]
     [:td.AltTab-align-right.AltTab-pad (files/without-ext name)]
     [:td.AltTab-pad (str "." (files/ext name))]
     [:td (if dirty? "*" "")]]))

(defui dialog []
  [:div.AltTab
   [:table
    (for [obj (current-tabs)]
      (item obj))]]
  :click (fn []
           (this-as this (dom/remove this))))

(cmd/command {:command ::prev
              :desc "Tabs: Go to previously used tab"
              :exec (fn []
                      (when-let [ed (second (current-tabs))]
                        (tabs/active! ed)))})

(cmd/command {:command ::call
              :desc "Tabs: Start AltTab dialog"
              :exec (fn []
                      (dom/append (dom/$ "body") (dialog)))})