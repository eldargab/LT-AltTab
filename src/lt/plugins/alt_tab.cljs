(ns lt.plugins.alt-tab
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

(defn not-closed? [tab]
  (->index (current-tabs) tab))

(defn activate! [tab]
  (when (not-closed? tab)
    (tabs/active! tab)))

(defn close! [tab]
  (when (not-closed? tab)
    (try
      (object/raise tab :close)
      (catch js/Error e
        (js/lt.objs.console.error e))
      (catch js/global.Error e
        (js/lt.objs.console.error e)))))

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
        (#(if (= "." %) "" (str % files/separator))))
    ""))

(defui item [dialog obj]
  (let [name (tabs/->name obj)
        path (tabs/->path obj)
        dirty? (:dirty @obj)]
    [:li
     [:span.dir (print-dir path)]
     [:span.name name]
     [:sup (if dirty? "*" "")]])
  :mouseover #(object/raise dialog :select.object obj)
  ;; TODO: for some reason click event is not fired when Ctrl is still pressed
  :mouseup #(if (= 2 (.-button %))
              (object/raise dialog :delete.selected)
              (object/raise dialog :done)))

(defui dialog [this]
  [:div.AltTab {:tabindex -1}
   [:ul
    (for [obj (:tabs @this)]
      (item this obj))]]
  :keyup #(when (= 17 (.-keyCode %))
            (object/raise this :done)))

(object/object* ::dialog
                :tags #{::dialog}
                :selected nil
                :init (fn [this tabs]
                        (object/merge! this {:tabs (vec tabs)})
                        (dialog this)))

(defn for-each-item [this f]
  (loop [i 0 els (dom/$$ "li" (object/->content this))]
    (when-let [el (first els)]
      (f i el)
      (recur (inc i) (next els)))))

(defn select! [this obj idx]
  (object/merge! this {:selected obj})
  (for-each-item this (fn [i el]
                        (if (= idx i)
                          (dom/add-class el :selected)
                          (dom/remove-class el :selected)))))

(defn remove! [this obj idx]
  (object/update! this [:tabs] #(->> %
                                     (map-indexed (fn [i o] (if (not= i idx) o)))
                                     (filterv identity)))
  (for-each-item this (fn [i el]
                        (when (= i idx)
                          (dom/remove el))))
  (object/raise this :select.index idx)
  (close! obj)
  (when-not (= (-> @this :tabs first) (tabs/active-tab))
    (activate! (-> @this :tabs first)))
  (dom/focus (object/->content this)))

(defn ->selected-idx [this]
  (->index (:tabs @this) (:selected @this)))

(behavior ::select-by-object
          :triggers #{:select.object}
          :reaction (fn [this obj]
                      (if-let [idx (->index (:tabs @this) obj)]
                        (select! this obj idx))))

(behavior ::select-by-index
          :triggers #{:select.index}
          :reaction (fn [this idx]
                      (let [tabs (:tabs @this)
                            max-idx (dec (count tabs))
                            idx (cond (> idx max-idx) 0
                                      (> 0 idx) max-idx
                                      :else idx)]
                        (when (>= max-idx 0)
                          (select! this (nth tabs idx) idx)))))

(behavior ::select-next
          :triggers #{:select.next}
          :reaction (fn [this]
                      (if-let [idx (->selected-idx this)]
                        (object/raise this :select.index (inc idx)))))

(behavior ::select-prev
          :triggers #{:select.prev}
          :reaction (fn [this]
                      (if-let [idx (->selected-idx this)]
                        (object/raise this :select.index (dec idx)))))

(behavior ::delete-selected
          :triggers #{:delete.selected}
          :reaction (fn [this]
                      (when-let [obj (:selected @this)]
                        (when-not (:dirty @obj)
                          (remove! this obj (->selected-idx this))
                          (when (empty? (:tabs @this))
                            (object/raise this :close))))))
(behavior ::done
          :triggers #{:done}
          :reaction (fn [this]
                      (object/raise this :close)
                      (when-let [obj (or (:selected @this) (-> @this :tabs second))]
                        (activate! obj))))

(behavior ::close
          :triggers #{:close}
          :reaction (fn [this]
                      (ctx/out! ::dialog)
                      (dom/add-class (object/->content this) :AltTab-hidden)
                      (wait 300 #(object/destroy! this))))

(behavior ::show
          :triggers #{:show}
          :reaction (fn [this]
                      (ctx/in! ::dialog this)
                      (let [el (object/->content this)]
                        (dom/add-class el :AltTab-hidden)
                        (object/raise this :select.index 1)
                        (dom/append (dom/$ "body") el)
                        (dom/focus el)
                        (dom/remove-class el :AltTab-hidden))))

(cmd/command {:command ::prev
              :desc "Tabs: Go to previously used tab"
              :exec (fn []
                      (when-let [ed (second (current-tabs))]
                        (tabs/active! ed)))})

(cmd/command {:command ::alt-tab
              :desc "Tabs: Do Alt-Tabbing"
              :hidden true
              :exec (fn []
                      (if-let [dialog (ctx/->obj ::dialog)]
                        (object/raise dialog :select.next)
                        (let [tabs (current-tabs)]
                          (if (> (count tabs) 0)
                            (-> (object/create ::dialog tabs)
                                (object/raise :show))))))})

(cmd/command {:command ::select-prev
              :desc "AltTab: Select previous item"
              :hidden true
              :exec (fn []
                      (when-let [dialog (ctx/->obj ::dialog)]
                        (object/raise dialog :select.prev)))})

(cmd/command {:command ::select-next
              :desc "AltTab: Select next item"
              :hidden true
              :exec (fn []
                      (when-let [dialog (ctx/->obj ::dialog)]
                        (object/raise dialog :select.next)))})

(cmd/command {:command ::delete-selected
              :desc "AltTab: Close selected item"
              :hidden true
              :exec (fn []
                      (when-let [dialog (ctx/->obj ::dialog)]
                        (object/raise dialog :delete.selected)))})

(cmd/command {:command ::close-current-tab-and-go-to-previously-used
              :desc "Tabs: Close current tab and go to previously used"
              :exec (fn []
                      (let [next-tab (second (current-tabs))]
                        (cmd/exec! :tabs.close)
                        (if next-tab
                          (tabs/active! next-tab))))})
