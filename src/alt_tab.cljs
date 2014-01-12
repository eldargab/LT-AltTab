(ns alt-tab
  (:require [lt.object :as object]
            [lt.objs.context :as ctx]
            [lt.objs.command :as cmd]
            [lt.objs.tabs :as tabs])
  (:require-macros [lt.macros :refer [behavior]]))

(behavior ::track-active
          :for #{:editor}
          :triggers #{:active}
          :reaction (fn [this]
                      (object/merge! this {::activation-time (new js/Date)})))


(defn current-editors []
  (if-let [ts (ctx/->obj :tabset)]
    (sort (fn [e1 e2]
            (let [t1 (or (::activation-time @e1) 0)
                  t2 (or (::activation-time @e2) 0)]
              (- t2 t1)))
          (:objs @ts))))

(defn last-active []
  (second (current-editors)))


(cmd/command {:command ::prev
              :desc "Go to previously used tab"
              :exec (fn []
                      (when-let [ed (last-active)]
                        (tabs/active! ed)))})