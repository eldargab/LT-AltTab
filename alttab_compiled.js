if(!lt.util.load.provided_QMARK_('alt-tab')) {
goog.provide('alt_tab');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.objs.tabs');
goog.require('lt.objs.workspace');
goog.require('lt.objs.context');
goog.require('lt.util.dom');
goog.require('lt.objs.workspace');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');

alt_tab.__BEH__track_active = (function __BEH__track_active(this$){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("alt-tab","last-activated","alt-tab/last-activated",4426581655),(new Date())], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("alt-tab","track-active","alt-tab/track-active",2357406501),new cljs.core.Keyword(null,"reaction","reaction",4441361819),alt_tab.__BEH__track_active,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",1017433711),null], null), null),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222),null], null), null));

alt_tab.current_tabs = (function current_tabs(){var temp__4090__auto__ = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return cljs.core.sort.call(null,(function (o1,o2){var t1 = (function (){var or__6797__auto__ = new cljs.core.Keyword("alt-tab","last-activated","alt-tab/last-activated",4426581655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o1));if(cljs.core.truth_(or__6797__auto__))
{return or__6797__auto__;
} else
{return 0;
}
})();var t2 = (function (){var or__6797__auto__ = new cljs.core.Keyword("alt-tab","last-activated","alt-tab/last-activated",4426581655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o2));if(cljs.core.truth_(or__6797__auto__))
{return or__6797__auto__;
} else
{return 0;
}
})();return (t2 - t1);
}),new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts)));
} else
{return null;
}
});

alt_tab.relative = (function relative(from,to){return lt.objs.files.fpath.relative(from,to);
});

alt_tab.trim_ws_dir = (function trim_ws_dir(path){var folders = new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws));var folder = cljs.core.first.call(null,cljs.core.filter.call(null,((function (folders){
return (function (p1__9659_SHARP_){return path.startsWith(p1__9659_SHARP_);
});})(folders))
,folders));if(cljs.core.truth_(folder))
{if(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,folders)))
{return alt_tab.relative.call(null,folder,path);
} else
{return alt_tab.relative.call(null,lt.objs.files.parent.call(null,folder),path);
}
} else
{return path;
}
});

alt_tab.trim_home_dir = (function trim_home_dir(path){if(cljs.core.truth_(path.startsWith(lt.objs.files.home.call(null))))
{return [cljs.core.str("~"),cljs.core.str(lt.objs.files.separator),cljs.core.str(alt_tab.relative.call(null,lt.objs.files.home.call(null),path))].join('');
} else
{return path;
}
});

alt_tab.normalize_path = (function normalize_path(path){return alt_tab.trim_home_dir.call(null,alt_tab.trim_ws_dir.call(null,path));
});

alt_tab.item = (function item(obj){var e__8137__auto__ = crate.core.html.call(null,(function (){var name = lt.objs.tabs.__GT_name.call(null,obj);var path = lt.objs.tabs.__GT_path.call(null,obj);var dir = lt.objs.files.parent.call(null,path);var dirty_QMARK_ = new cljs.core.Keyword(null,"dirty","dirty",1109497668).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.AltTab-align-right.AltTab-pad","td.AltTab-align-right.AltTab-pad",724122497),alt_tab.normalize_path.call(null,dir)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.AltTab-align-right.AltTab-pad","td.AltTab-align-right.AltTab-pad",724122497),lt.objs.files.without_ext.call(null,name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.AltTab-pad","td.AltTab-pad",3194235458),[cljs.core.str("."),cljs.core.str(lt.objs.files.ext.call(null,name))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(dirty_QMARK_)?"*":"")], null)], null);
})());var seq__9666_9692 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9667_9693 = null;var count__9668_9694 = 0;var i__9669_9695 = 0;while(true){
if((i__9669_9695 < count__9668_9694))
{var vec__9670_9696 = cljs.core._nth.call(null,chunk__9667_9693,i__9669_9695);var ev__8138__auto___9697 = cljs.core.nth.call(null,vec__9670_9696,0,null);var func__8139__auto___9698 = cljs.core.nth.call(null,vec__9670_9696,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___9697,func__8139__auto___9698);
{
var G__9699 = seq__9666_9692;
var G__9700 = chunk__9667_9693;
var G__9701 = count__9668_9694;
var G__9702 = (i__9669_9695 + 1);
seq__9666_9692 = G__9699;
chunk__9667_9693 = G__9700;
count__9668_9694 = G__9701;
i__9669_9695 = G__9702;
continue;
}
} else
{var temp__4092__auto___9703 = cljs.core.seq.call(null,seq__9666_9692);if(temp__4092__auto___9703)
{var seq__9666_9704__$1 = temp__4092__auto___9703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9666_9704__$1))
{var c__7526__auto___9705 = cljs.core.chunk_first.call(null,seq__9666_9704__$1);{
var G__9706 = cljs.core.chunk_rest.call(null,seq__9666_9704__$1);
var G__9707 = c__7526__auto___9705;
var G__9708 = cljs.core.count.call(null,c__7526__auto___9705);
var G__9709 = 0;
seq__9666_9692 = G__9706;
chunk__9667_9693 = G__9707;
count__9668_9694 = G__9708;
i__9669_9695 = G__9709;
continue;
}
} else
{var vec__9671_9710 = cljs.core.first.call(null,seq__9666_9704__$1);var ev__8138__auto___9711 = cljs.core.nth.call(null,vec__9671_9710,0,null);var func__8139__auto___9712 = cljs.core.nth.call(null,vec__9671_9710,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___9711,func__8139__auto___9712);
{
var G__9713 = cljs.core.next.call(null,seq__9666_9704__$1);
var G__9714 = null;
var G__9715 = 0;
var G__9716 = 0;
seq__9666_9692 = G__9713;
chunk__9667_9693 = G__9714;
count__9668_9694 = G__9715;
i__9669_9695 = G__9716;
continue;
}
}
} else
{}
}
break;
}
return e__8137__auto__;
});

alt_tab.dialog = (function dialog(){var e__8137__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.AltTab","div.AltTab",1366092987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7495__auto__ = (function iter__9682(s__9683){return (new cljs.core.LazySeq(null,(function (){var s__9683__$1 = s__9683;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9683__$1);if(temp__4092__auto__)
{var s__9683__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9683__$2))
{var c__7493__auto__ = cljs.core.chunk_first.call(null,s__9683__$2);var size__7494__auto__ = cljs.core.count.call(null,c__7493__auto__);var b__9685 = cljs.core.chunk_buffer.call(null,size__7494__auto__);if((function (){var i__9684 = 0;while(true){
if((i__9684 < size__7494__auto__))
{var obj = cljs.core._nth.call(null,c__7493__auto__,i__9684);cljs.core.chunk_append.call(null,b__9685,alt_tab.item.call(null,obj));
{
var G__9717 = (i__9684 + 1);
i__9684 = G__9717;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9685),iter__9682.call(null,cljs.core.chunk_rest.call(null,s__9683__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9685),null);
}
} else
{var obj = cljs.core.first.call(null,s__9683__$2);return cljs.core.cons.call(null,alt_tab.item.call(null,obj),iter__9682.call(null,cljs.core.rest.call(null,s__9683__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7495__auto__.call(null,alt_tab.current_tabs.call(null));
})()], null)], null));var seq__9686_9718 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){var this$ = this;return lt.util.dom.remove.call(null,this$);
})], null)));var chunk__9687_9719 = null;var count__9688_9720 = 0;var i__9689_9721 = 0;while(true){
if((i__9689_9721 < count__9688_9720))
{var vec__9690_9722 = cljs.core._nth.call(null,chunk__9687_9719,i__9689_9721);var ev__8138__auto___9723 = cljs.core.nth.call(null,vec__9690_9722,0,null);var func__8139__auto___9724 = cljs.core.nth.call(null,vec__9690_9722,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___9723,func__8139__auto___9724);
{
var G__9725 = seq__9686_9718;
var G__9726 = chunk__9687_9719;
var G__9727 = count__9688_9720;
var G__9728 = (i__9689_9721 + 1);
seq__9686_9718 = G__9725;
chunk__9687_9719 = G__9726;
count__9688_9720 = G__9727;
i__9689_9721 = G__9728;
continue;
}
} else
{var temp__4092__auto___9729 = cljs.core.seq.call(null,seq__9686_9718);if(temp__4092__auto___9729)
{var seq__9686_9730__$1 = temp__4092__auto___9729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9686_9730__$1))
{var c__7526__auto___9731 = cljs.core.chunk_first.call(null,seq__9686_9730__$1);{
var G__9732 = cljs.core.chunk_rest.call(null,seq__9686_9730__$1);
var G__9733 = c__7526__auto___9731;
var G__9734 = cljs.core.count.call(null,c__7526__auto___9731);
var G__9735 = 0;
seq__9686_9718 = G__9732;
chunk__9687_9719 = G__9733;
count__9688_9720 = G__9734;
i__9689_9721 = G__9735;
continue;
}
} else
{var vec__9691_9736 = cljs.core.first.call(null,seq__9686_9730__$1);var ev__8138__auto___9737 = cljs.core.nth.call(null,vec__9691_9736,0,null);var func__8139__auto___9738 = cljs.core.nth.call(null,vec__9691_9736,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___9737,func__8139__auto___9738);
{
var G__9739 = cljs.core.next.call(null,seq__9686_9730__$1);
var G__9740 = null;
var G__9741 = 0;
var G__9742 = 0;
seq__9686_9718 = G__9739;
chunk__9687_9719 = G__9740;
count__9688_9720 = G__9741;
i__9689_9721 = G__9742;
continue;
}
}
} else
{}
}
break;
}
return e__8137__auto__;
});

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("alt-tab","prev","alt-tab/prev",2035257266),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabs: Go to previously used tab",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = cljs.core.second.call(null,alt_tab.current_tabs.call(null));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.tabs.active_BANG_.call(null,ed);
} else
{return null;
}
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("alt-tab","call","alt-tab/call",2034911099),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabs: Start AltTab dialog",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.util.dom.append.call(null,lt.util.dom.$.call(null,"body"),alt_tab.dialog.call(null));
})], null));

}

//# sourceMappingURL=