(ns alt-tab
  (:require [lt.object :as object]
            [lt.objs.context :as ctx]
            [lt.objs.command :as cmd]
            [lt.objs.tabs :as tabs])
  (:require-macros [lt.macros :refer [behavior]]))

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

(cmd/command {:command ::prev
              :desc "Tabs: Go to previously used tab"
              :exec (fn []
                      (when-let [ed (second (current-tabs))]
                        (tabs/active! ed)))})