if(!lt.util.load.provided_QMARK_('alt-tab')) {
goog.provide('alt_tab');
goog.require('cljs.core');
goog.require('lt.util.js');
goog.require('lt.objs.files');
goog.require('lt.util.js');
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

/**
* Find an object position in a seq
*/
alt_tab.__GT_index = (function __GT_index(lst,obj){var lst__$1 = lst;var idx = 0;while(true){
if(cljs.core.seq.call(null,lst__$1))
{if((cljs.core.first.call(null,lst__$1) === obj))
{return idx;
} else
{{
var G__8989 = cljs.core.next.call(null,lst__$1);
var G__8990 = (idx + 1);
lst__$1 = G__8989;
idx = G__8990;
continue;
}
}
} else
{return null;
}
break;
}
});

alt_tab.relative = (function relative(from,to){return lt.objs.files.fpath.relative(from,to);
});

alt_tab.trim_ws_dir = (function trim_ws_dir(path){var folders = new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws));var folder = cljs.core.first.call(null,cljs.core.filter.call(null,((function (folders){
return (function (p1__8943_SHARP_){return path.startsWith(p1__8943_SHARP_);
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

alt_tab.print_dir = (function print_dir(path){if(cljs.core.seq.call(null,path))
{return [cljs.core.str(lt.objs.files.parent.call(null,alt_tab.trim_home_dir.call(null,alt_tab.trim_ws_dir.call(null,path)))),cljs.core.str(lt.objs.files.separator)].join('');
} else
{return "";
}
});

alt_tab.item = (function item(dialog,obj){var e__8137__auto__ = crate.core.html.call(null,(function (){var name = lt.objs.tabs.__GT_name.call(null,obj);var path = lt.objs.tabs.__GT_path.call(null,obj);var dirty_QMARK_ = new cljs.core.Keyword(null,"dirty","dirty",1109497668).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dir","span.dir",3069879131),alt_tab.print_dir.call(null,path)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.name","span.name",4619873825),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",1014018496),(cljs.core.truth_(dirty_QMARK_)?"*":"")], null)], null);
})());var seq__8950_8991 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),(function (){return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"select.object","select.object",1219802083),obj);
}),new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),(function (){return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"done","done",1016993524));
})], null)));var chunk__8951_8992 = null;var count__8952_8993 = 0;var i__8953_8994 = 0;while(true){
if((i__8953_8994 < count__8952_8993))
{var vec__8954_8995 = cljs.core._nth.call(null,chunk__8951_8992,i__8953_8994);var ev__8138__auto___8996 = cljs.core.nth.call(null,vec__8954_8995,0,null);var func__8139__auto___8997 = cljs.core.nth.call(null,vec__8954_8995,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___8996,func__8139__auto___8997);
{
var G__8998 = seq__8950_8991;
var G__8999 = chunk__8951_8992;
var G__9000 = count__8952_8993;
var G__9001 = (i__8953_8994 + 1);
seq__8950_8991 = G__8998;
chunk__8951_8992 = G__8999;
count__8952_8993 = G__9000;
i__8953_8994 = G__9001;
continue;
}
} else
{var temp__4092__auto___9002 = cljs.core.seq.call(null,seq__8950_8991);if(temp__4092__auto___9002)
{var seq__8950_9003__$1 = temp__4092__auto___9002;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8950_9003__$1))
{var c__7526__auto___9004 = cljs.core.chunk_first.call(null,seq__8950_9003__$1);{
var G__9005 = cljs.core.chunk_rest.call(null,seq__8950_9003__$1);
var G__9006 = c__7526__auto___9004;
var G__9007 = cljs.core.count.call(null,c__7526__auto___9004);
var G__9008 = 0;
seq__8950_8991 = G__9005;
chunk__8951_8992 = G__9006;
count__8952_8993 = G__9007;
i__8953_8994 = G__9008;
continue;
}
} else
{var vec__8955_9009 = cljs.core.first.call(null,seq__8950_9003__$1);var ev__8138__auto___9010 = cljs.core.nth.call(null,vec__8955_9009,0,null);var func__8139__auto___9011 = cljs.core.nth.call(null,vec__8955_9009,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___9010,func__8139__auto___9011);
{
var G__9012 = cljs.core.next.call(null,seq__8950_9003__$1);
var G__9013 = null;
var G__9014 = 0;
var G__9015 = 0;
seq__8950_8991 = G__9012;
chunk__8951_8992 = G__9013;
count__8952_8993 = G__9014;
i__8953_8994 = G__9015;
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

alt_tab.dialog = (function dialog(this$){var e__8137__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.AltTab","div.AltTab",1366092987),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7495__auto__ = (function iter__8967(s__8968){return (new cljs.core.LazySeq(null,(function (){var s__8968__$1 = s__8968;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8968__$1);if(temp__4092__auto__)
{var s__8968__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8968__$2))
{var c__7493__auto__ = cljs.core.chunk_first.call(null,s__8968__$2);var size__7494__auto__ = cljs.core.count.call(null,c__7493__auto__);var b__8970 = cljs.core.chunk_buffer.call(null,size__7494__auto__);if((function (){var i__8969 = 0;while(true){
if((i__8969 < size__7494__auto__))
{var obj = cljs.core._nth.call(null,c__7493__auto__,i__8969);cljs.core.chunk_append.call(null,b__8970,alt_tab.item.call(null,this$,obj));
{
var G__9016 = (i__8969 + 1);
i__8969 = G__9016;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8970),iter__8967.call(null,cljs.core.chunk_rest.call(null,s__8968__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8970),null);
}
} else
{var obj = cljs.core.first.call(null,s__8968__$2);return cljs.core.cons.call(null,alt_tab.item.call(null,this$,obj),iter__8967.call(null,cljs.core.rest.call(null,s__8968__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7495__auto__.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__8971_9017 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (p1__8956_SHARP_){if(cljs.core._EQ_.call(null,"Control",p1__8956_SHARP_.keyIdentifier))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"done","done",1016993524));
} else
{return null;
}
})], null)));var chunk__8972_9018 = null;var count__8973_9019 = 0;var i__8974_9020 = 0;while(true){
if((i__8974_9020 < count__8973_9019))
{var vec__8975_9021 = cljs.core._nth.call(null,chunk__8972_9018,i__8974_9020);var ev__8138__auto___9022 = cljs.core.nth.call(null,vec__8975_9021,0,null);var func__8139__auto___9023 = cljs.core.nth.call(null,vec__8975_9021,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___9022,func__8139__auto___9023);
{
var G__9024 = seq__8971_9017;
var G__9025 = chunk__8972_9018;
var G__9026 = count__8973_9019;
var G__9027 = (i__8974_9020 + 1);
seq__8971_9017 = G__9024;
chunk__8972_9018 = G__9025;
count__8973_9019 = G__9026;
i__8974_9020 = G__9027;
continue;
}
} else
{var temp__4092__auto___9028 = cljs.core.seq.call(null,seq__8971_9017);if(temp__4092__auto___9028)
{var seq__8971_9029__$1 = temp__4092__auto___9028;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8971_9029__$1))
{var c__7526__auto___9030 = cljs.core.chunk_first.call(null,seq__8971_9029__$1);{
var G__9031 = cljs.core.chunk_rest.call(null,seq__8971_9029__$1);
var G__9032 = c__7526__auto___9030;
var G__9033 = cljs.core.count.call(null,c__7526__auto___9030);
var G__9034 = 0;
seq__8971_9017 = G__9031;
chunk__8972_9018 = G__9032;
count__8973_9019 = G__9033;
i__8974_9020 = G__9034;
continue;
}
} else
{var vec__8976_9035 = cljs.core.first.call(null,seq__8971_9029__$1);var ev__8138__auto___9036 = cljs.core.nth.call(null,vec__8976_9035,0,null);var func__8139__auto___9037 = cljs.core.nth.call(null,vec__8976_9035,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___9036,func__8139__auto___9037);
{
var G__9038 = cljs.core.next.call(null,seq__8971_9029__$1);
var G__9039 = null;
var G__9040 = 0;
var G__9041 = 0;
seq__8971_9017 = G__9038;
chunk__8972_9018 = G__9039;
count__8973_9019 = G__9040;
i__8974_9020 = G__9041;
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

lt.object.object_STAR_.call(null,new cljs.core.Keyword("alt-tab","dialog","alt-tab/dialog",2847197349),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("alt-tab","dialog","alt-tab/dialog",2847197349),null], null), null),new cljs.core.Keyword(null,"selected","selected",2205476365),null,new cljs.core.Keyword(null,"closed","closed",3951351006),false,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,tabs){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabs","tabs",1017456368),cljs.core.vec.call(null,tabs)], null));
return alt_tab.dialog.call(null,this$);
}));

alt_tab.select = (function select(this$,obj,idx){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),obj], null));
var seq__8983 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,lt.util.dom.$$.call(null,"li",lt.object.__GT_content.call(null,this$))));var chunk__8984 = null;var count__8985 = 0;var i__8986 = 0;while(true){
if((i__8986 < count__8985))
{var vec__8987 = cljs.core._nth.call(null,chunk__8984,i__8986);var i = cljs.core.nth.call(null,vec__8987,0,null);var li = cljs.core.nth.call(null,vec__8987,1,null);if(cljs.core._EQ_.call(null,idx,i))
{lt.util.dom.add_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
} else
{lt.util.dom.remove_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
}
{
var G__9042 = seq__8983;
var G__9043 = chunk__8984;
var G__9044 = count__8985;
var G__9045 = (i__8986 + 1);
seq__8983 = G__9042;
chunk__8984 = G__9043;
count__8985 = G__9044;
i__8986 = G__9045;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8983);if(temp__4092__auto__)
{var seq__8983__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8983__$1))
{var c__7526__auto__ = cljs.core.chunk_first.call(null,seq__8983__$1);{
var G__9046 = cljs.core.chunk_rest.call(null,seq__8983__$1);
var G__9047 = c__7526__auto__;
var G__9048 = cljs.core.count.call(null,c__7526__auto__);
var G__9049 = 0;
seq__8983 = G__9046;
chunk__8984 = G__9047;
count__8985 = G__9048;
i__8986 = G__9049;
continue;
}
} else
{var vec__8988 = cljs.core.first.call(null,seq__8983__$1);var i = cljs.core.nth.call(null,vec__8988,0,null);var li = cljs.core.nth.call(null,vec__8988,1,null);if(cljs.core._EQ_.call(null,idx,i))
{lt.util.dom.add_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
} else
{lt.util.dom.remove_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
}
{
var G__9050 = cljs.core.next.call(null,seq__8983__$1);
var G__9051 = null;
var G__9052 = 0;
var G__9053 = 0;
seq__8983 = G__9050;
chunk__8984 = G__9051;
count__8985 = G__9052;
i__8986 = G__9053;
continue;
}
}
} else
{return null;
}
}
break;
}
});

alt_tab.__BEH__select_by_object = (function __BEH__select_by_object(this$,obj){var idx = alt_tab.__GT_index.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),obj);return alt_tab.select.call(null,this$,obj,idx);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("alt-tab","select-by-object","alt-tab/select-by-object",3788233473),new cljs.core.Keyword(null,"reaction","reaction",4441361819),alt_tab.__BEH__select_by_object,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select.object","select.object",1219802083),null], null), null));

alt_tab.__BEH__select_by_index = (function __BEH__select_by_index(this$,idx){var tabs = new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var max_idx = (cljs.core.count.call(null,tabs) - 1);var idx__$1 = (((idx > max_idx))?0:(((0 > idx))?max_idx:((new cljs.core.Keyword(null,"else","else",1017020587))?idx:null)));var obj = cljs.core.nth.call(null,tabs,idx__$1);return alt_tab.select.call(null,this$,obj,idx__$1);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("alt-tab","select-by-index","alt-tab/select-by-index",4447248460),new cljs.core.Keyword(null,"reaction","reaction",4441361819),alt_tab.__BEH__select_by_index,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select.index","select.index",1985188050),null], null), null));

alt_tab.__BEH__select_next = (function __BEH__select_next(this$){var idx = alt_tab.__GT_index.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"select.index","select.index",1985188050),(idx + 1));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("alt-tab","select-next","alt-tab/select-next",1865416641),new cljs.core.Keyword(null,"reaction","reaction",4441361819),alt_tab.__BEH__select_next,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select.next","select.next",1183924247),null], null), null));

alt_tab.__BEH__select_prev = (function __BEH__select_prev(this$){var idx = alt_tab.__GT_index.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"select.index","select.index",1985188050),(idx - 1));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("alt-tab","select-prev","alt-tab/select-prev",1865513345),new cljs.core.Keyword(null,"reaction","reaction",4441361819),alt_tab.__BEH__select_prev,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select.prev","select.prev",1183995735),null], null), null));

alt_tab.__BEH__done = (function __BEH__done(this$){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close","close",1108660586));
var temp__4092__auto__ = (function (){var or__6797__auto__ = new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6797__auto__))
{return or__6797__auto__;
} else
{return cljs.core.second.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var obj = temp__4092__auto__;if(cljs.core.truth_(alt_tab.__GT_index.call(null,alt_tab.current_tabs.call(null),obj)))
{return lt.objs.tabs.active_BANG_.call(null,obj);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("alt-tab","done","alt-tab/done",2034962015),new cljs.core.Keyword(null,"reaction","reaction",4441361819),alt_tab.__BEH__done,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"done","done",1016993524),null], null), null));

alt_tab.__BEH__close = (function __BEH__close(this$){lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword("alt-tab","dialog","alt-tab/dialog",2847197349));
lt.util.dom.add_class.call(null,lt.object.__GT_content.call(null,this$),new cljs.core.Keyword(null,"AltTab-hidden","AltTab-hidden",2691154109));
return lt.util.js.wait.call(null,1000,(function (){return lt.object.destroy_BANG_.call(null,this$);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("alt-tab","close","alt-tab/close",2059455221),new cljs.core.Keyword(null,"reaction","reaction",4441361819),alt_tab.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));

alt_tab.__BEH__show = (function __BEH__show(this$){lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword("alt-tab","dialog","alt-tab/dialog",2847197349),this$);
var el = lt.object.__GT_content.call(null,this$);lt.util.dom.add_class.call(null,el,new cljs.core.Keyword(null,"AltTab-hidden","AltTab-hidden",2691154109));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"select.index","select.index",1985188050),1);
lt.util.dom.append.call(null,lt.util.dom.$.call(null,"body"),el);
lt.util.dom.focus.call(null,el);
return lt.util.dom.remove_class.call(null,el,new cljs.core.Keyword(null,"AltTab-hidden","AltTab-hidden",2691154109));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("alt-tab","show","alt-tab/show",2035344860),new cljs.core.Keyword(null,"reaction","reaction",4441361819),alt_tab.__BEH__show,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",1017433711),null], null), null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("alt-tab","prev","alt-tab/prev",2035257266),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabs: Go to previously used tab",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = cljs.core.second.call(null,alt_tab.current_tabs.call(null));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.tabs.active_BANG_.call(null,ed);
} else
{return null;
}
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("alt-tab","alt-tab","alt-tab/alt-tab",2937814128),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabs: Do Alt-Tabbing",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4090__auto__ = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword("alt-tab","dialog","alt-tab/dialog",2847197349));if(cljs.core.truth_(temp__4090__auto__))
{var dialog = temp__4090__auto__;return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"select.next","select.next",1183924247));
} else
{var tabs = alt_tab.current_tabs.call(null);if((cljs.core.count.call(null,tabs) > 0))
{return lt.object.raise.call(null,lt.object.create.call(null,new cljs.core.Keyword("alt-tab","dialog","alt-tab/dialog",2847197349),tabs),new cljs.core.Keyword(null,"show","show",1017433711));
} else
{return null;
}
}
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("alt-tab","select-prev","alt-tab/select-prev",1865513345),new cljs.core.Keyword(null,"desc","desc",1016984067),"AltTab: Select previous item",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword("alt-tab","dialog","alt-tab/dialog",2847197349));if(cljs.core.truth_(temp__4092__auto__))
{var dialog = temp__4092__auto__;return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"select.prev","select.prev",1183995735));
} else
{return null;
}
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("alt-tab","select-next","alt-tab/select-next",1865416641),new cljs.core.Keyword(null,"desc","desc",1016984067),"AltTab: Select next item",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword("alt-tab","dialog","alt-tab/dialog",2847197349));if(cljs.core.truth_(temp__4092__auto__))
{var dialog = temp__4092__auto__;return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"select.next","select.next",1183924247));
} else
{return null;
}
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("alt-tab","close-current-tab-and-go-to-previously-used","alt-tab/close-current-tab-and-go-to-previously-used",3830367007),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabs: Close current tab and go to previously used",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var next_tab = cljs.core.second.call(null,alt_tab.current_tabs.call(null));lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close","tabs.close",4150844154));
if(cljs.core.truth_(next_tab))
{return lt.objs.tabs.active_BANG_.call(null,next_tab);
} else
{return null;
}
})], null));

}

//# sourceMappingURL=