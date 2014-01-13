if(!lt.util.load.provided_QMARK_('alt-tab')) {
goog.provide('alt_tab');
goog.require('cljs.core');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.context');
goog.require('lt.objs.context');
goog.require('lt.object');
goog.require('lt.object');

alt_tab.__BEH__track_active = (function __BEH__track_active(this$){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("alt-tab","last-activated","alt-tab/last-activated",4426581655),(new Date())], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("alt-tab","track-active","alt-tab/track-active",2357406501),new cljs.core.Keyword(null,"reaction","reaction",4441361819),alt_tab.__BEH__track_active,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",1017433711),null], null), null),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222),null], null), null));

alt_tab.current_tabs = (function current_tabs(){var temp__4090__auto__ = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return cljs.core.sort.call(null,(function (o1,o2){var t1 = (function (){var or__8334__auto__ = new cljs.core.Keyword("alt-tab","last-activated","alt-tab/last-activated",4426581655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o1));if(cljs.core.truth_(or__8334__auto__))
{return or__8334__auto__;
} else
{return 0;
}
})();var t2 = (function (){var or__8334__auto__ = new cljs.core.Keyword("alt-tab","last-activated","alt-tab/last-activated",4426581655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o2));if(cljs.core.truth_(or__8334__auto__))
{return or__8334__auto__;
} else
{return 0;
}
})();return (t2 - t1);
}),new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts)));
} else
{return null;
}
});

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("alt-tab","prev","alt-tab/prev",2035257266),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabs: Go to previously used tab",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = cljs.core.second.call(null,alt_tab.current_tabs.call(null));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.tabs.active_BANG_.call(null,ed);
} else
{return null;
}
})], null));

}

//# sourceMappingURL=