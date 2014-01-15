(ns alt-tab
  (:require [lt.object :as object]
            [lt.objs.context :as ctx]
            [lt.objs.command :as cmd]
            [lt.objs.tabs :as tabs]
            [lt.objs.files :as files]
            [lt.objs.workspace :as ws]
            [lt.util.dom :as dom]
            [lt.util.js :refer [wait]])
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

(defn ->index
  "Find an object position in a seq"
  [lst obj]
  (loop [lst lst idx 0]
    (if (seq lst)
      (if (identical? (first lst) obj)
        idx
        (recur (next lst) (inc idx))))))

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

(defn print-dir [path]
  (if (seq path)
    (-> path
        (trim-ws-dir)
        (trim-home-dir)
        (files/parent)
        (str files/separator))
    ""))

(defui item [dialog obj]
  (let [name (tabs/->name obj)
        path (tabs/->path obj)
        dirty? (:dirty @obj)]
    [:li
     [:span.dir (print-dir path)]
     [:span.name name]
     [:sup (if dirty? "*" "")]])

  :mouseover #(object/raise dialog :select.object obj))

(defui dialog [this]
  [:div.AltTab
   [:ul
    (for [obj (:tabs @this)]
      (item this obj))]]

  :click #(object/raise this :done))

(object/object* ::dialog
                :tags #{::dialog}
                :selected nil
                :closed false
                :init (fn [this tabs]
                        (object/merge! this {:tabs (vec tabs)})
                        (dialog this)))

(defn select [this obj idx]
  (object/merge! this {:selected obj})
  (doseq [[i li] (map-indexed vector (dom/$$ "li" (object/->content this)))]
    (if (= idx i)
      (dom/add-class li :selected)
      (dom/remove-class li :selected))))

(behavior ::select-by-object
          :triggers #{:select.object}
          :reaction (fn [this obj]
                      (let [idx (->index (:tabs @this) obj)]
                        (select this obj idx))))

(behavior ::select-by-index
          :triggers #{:select.index}
          :reaction (fn [this idx]
                      (let [tabs (:tabs @this)
                            max-idx (count tabs)
                            idx (cond (> idx max-idx) 0
                                      (> 0 idx) max-idx
                                      :else idx)
                            obj (nth tabs idx)]
                        (select this obj idx))))

(behavior ::done
          :triggers #{:done}
          :reaction (fn [this]
                      (if-let [obj (or (:selected @this) (-> @this :tabs second))]
                        (tabs/active! obj)) ;; TODO: tab may be already closed at that point
                      (object/raise this :close)))

(behavior ::close
          :triggers #{:close}
          :reaction (fn [this]
                      (object/merge! this {:closed true})
                      (dom/add-class (object/->content this) :AltTab-hidden)
                      (wait 500 #(object/destroy! this))))

(behavior ::show
          :triggers #{:show}
          :throttle 300
          :reaction (fn [this]
                      (if-not (:closed @this)
                        (let [el (object/->content this)]
                          (dom/add-class el :AltTab-hidden)
                          (object/raise this :select.index 1)
                          (dom/append (dom/$ "body") el)
                          (dom/remove-class el :AltTab-hidden)
                          (dom/focus el)))))

(cmd/command {:command ::prev
              :desc "Tabs: Go to previously used tab"
              :exec (fn []
                      (when-let [ed (second (current-tabs))]
                        (tabs/active! ed)))})

(cmd/command {:command ::call
              :desc "Tabs: Start AltTab dialog"
              :exec (fn []
                      (-> (object/create ::dialog (current-tabs))
                          (object/raise :show)))})