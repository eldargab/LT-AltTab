if(!lt.util.load.provided_QMARK_('lt.plugins.alt-tab')) {
goog.provide('lt.plugins.alt_tab');
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

lt.plugins.alt_tab.__BEH__track_active = (function __BEH__track_active(this$){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.alt-tab","last-activated","lt.plugins.alt-tab/last-activated",3680726776),(new Date())], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","track-active","lt.plugins.alt-tab/track-active",1546907910),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.alt_tab.__BEH__track_active,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",1017433711),null], null), null),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222),null], null), null));

lt.plugins.alt_tab.current_tabs = (function current_tabs(){var temp__4090__auto__ = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return cljs.core.sort.call(null,(function (o1,o2){var t1 = (function (){var or__6741__auto__ = new cljs.core.Keyword("lt.plugins.alt-tab","last-activated","lt.plugins.alt-tab/last-activated",3680726776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o1));if(cljs.core.truth_(or__6741__auto__))
{return or__6741__auto__;
} else
{return 0;
}
})();var t2 = (function (){var or__6741__auto__ = new cljs.core.Keyword("lt.plugins.alt-tab","last-activated","lt.plugins.alt-tab/last-activated",3680726776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o2));if(cljs.core.truth_(or__6741__auto__))
{return or__6741__auto__;
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
lt.plugins.alt_tab.__GT_index = (function __GT_index(lst,obj){var lst__$1 = lst;var idx = 0;while(true){
if(cljs.core.seq.call(null,lst__$1))
{if((cljs.core.first.call(null,lst__$1) === obj))
{return idx;
} else
{{
var G__9160 = cljs.core.next.call(null,lst__$1);
var G__9161 = (idx + 1);
lst__$1 = G__9160;
idx = G__9161;
continue;
}
}
} else
{return null;
}
break;
}
});

lt.plugins.alt_tab.relative = (function relative(from,to){return lt.objs.files.fpath.relative(from,to);
});

lt.plugins.alt_tab.trim_ws_dir = (function trim_ws_dir(path){var folders = new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws));var folder = cljs.core.first.call(null,cljs.core.filter.call(null,((function (folders){
return (function (p1__9113_SHARP_){return path.startsWith(p1__9113_SHARP_);
});})(folders))
,folders));if(cljs.core.truth_(folder))
{if(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,folders)))
{return lt.plugins.alt_tab.relative.call(null,folder,path);
} else
{return lt.plugins.alt_tab.relative.call(null,lt.objs.files.parent.call(null,folder),path);
}
} else
{return path;
}
});

lt.plugins.alt_tab.trim_home_dir = (function trim_home_dir(path){if(cljs.core.truth_(path.startsWith(lt.objs.files.home.call(null))))
{return [cljs.core.str("~"),cljs.core.str(lt.objs.files.separator),cljs.core.str(lt.plugins.alt_tab.relative.call(null,lt.objs.files.home.call(null),path))].join('');
} else
{return path;
}
});

lt.plugins.alt_tab.print_dir = (function print_dir(path){if(cljs.core.seq.call(null,path))
{return (function (p1__9114_SHARP_){if(cljs.core._EQ_.call(null,".",p1__9114_SHARP_))
{return "";
} else
{return [cljs.core.str(p1__9114_SHARP_),cljs.core.str(lt.objs.files.separator)].join('');
}
}).call(null,lt.objs.files.parent.call(null,lt.plugins.alt_tab.trim_home_dir.call(null,lt.plugins.alt_tab.trim_ws_dir.call(null,path))));
} else
{return "";
}
});

lt.plugins.alt_tab.item = (function item(dialog,obj){var e__8081__auto__ = crate.core.html.call(null,(function (){var name = lt.objs.tabs.__GT_name.call(null,obj);var path = lt.objs.tabs.__GT_path.call(null,obj);var dirty_QMARK_ = new cljs.core.Keyword(null,"dirty","dirty",1109497668).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dir","span.dir",3069879131),lt.plugins.alt_tab.print_dir.call(null,path)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.name","span.name",4619873825),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",1014018496),(cljs.core.truth_(dirty_QMARK_)?"*":"")], null)], null);
})());var seq__9121_9162 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),(function (){return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"select.object","select.object",1219802083),obj);
}),new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),(function (){return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"done","done",1016993524));
})], null)));var chunk__9122_9163 = null;var count__9123_9164 = 0;var i__9124_9165 = 0;while(true){
if((i__9124_9165 < count__9123_9164))
{var vec__9125_9166 = cljs.core._nth.call(null,chunk__9122_9163,i__9124_9165);var ev__8082__auto___9167 = cljs.core.nth.call(null,vec__9125_9166,0,null);var func__8083__auto___9168 = cljs.core.nth.call(null,vec__9125_9166,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___9167,func__8083__auto___9168);
{
var G__9169 = seq__9121_9162;
var G__9170 = chunk__9122_9163;
var G__9171 = count__9123_9164;
var G__9172 = (i__9124_9165 + 1);
seq__9121_9162 = G__9169;
chunk__9122_9163 = G__9170;
count__9123_9164 = G__9171;
i__9124_9165 = G__9172;
continue;
}
} else
{var temp__4092__auto___9173 = cljs.core.seq.call(null,seq__9121_9162);if(temp__4092__auto___9173)
{var seq__9121_9174__$1 = temp__4092__auto___9173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9121_9174__$1))
{var c__7470__auto___9175 = cljs.core.chunk_first.call(null,seq__9121_9174__$1);{
var G__9176 = cljs.core.chunk_rest.call(null,seq__9121_9174__$1);
var G__9177 = c__7470__auto___9175;
var G__9178 = cljs.core.count.call(null,c__7470__auto___9175);
var G__9179 = 0;
seq__9121_9162 = G__9176;
chunk__9122_9163 = G__9177;
count__9123_9164 = G__9178;
i__9124_9165 = G__9179;
continue;
}
} else
{var vec__9126_9180 = cljs.core.first.call(null,seq__9121_9174__$1);var ev__8082__auto___9181 = cljs.core.nth.call(null,vec__9126_9180,0,null);var func__8083__auto___9182 = cljs.core.nth.call(null,vec__9126_9180,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___9181,func__8083__auto___9182);
{
var G__9183 = cljs.core.next.call(null,seq__9121_9174__$1);
var G__9184 = null;
var G__9185 = 0;
var G__9186 = 0;
seq__9121_9162 = G__9183;
chunk__9122_9163 = G__9184;
count__9123_9164 = G__9185;
i__9124_9165 = G__9186;
continue;
}
}
} else
{}
}
break;
}
return e__8081__auto__;
});

lt.plugins.alt_tab.dialog = (function dialog(this$){var e__8081__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.AltTab","div.AltTab",1366092987),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7439__auto__ = (function iter__9138(s__9139){return (new cljs.core.LazySeq(null,(function (){var s__9139__$1 = s__9139;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9139__$1);if(temp__4092__auto__)
{var s__9139__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9139__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__9139__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__9141 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__9140 = 0;while(true){
if((i__9140 < size__7438__auto__))
{var obj = cljs.core._nth.call(null,c__7437__auto__,i__9140);cljs.core.chunk_append.call(null,b__9141,lt.plugins.alt_tab.item.call(null,this$,obj));
{
var G__9187 = (i__9140 + 1);
i__9140 = G__9187;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9141),iter__9138.call(null,cljs.core.chunk_rest.call(null,s__9139__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9141),null);
}
} else
{var obj = cljs.core.first.call(null,s__9139__$2);return cljs.core.cons.call(null,lt.plugins.alt_tab.item.call(null,this$,obj),iter__9138.call(null,cljs.core.rest.call(null,s__9139__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7439__auto__.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__9142_9188 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (p1__9127_SHARP_){if(cljs.core._EQ_.call(null,"Control",p1__9127_SHARP_.keyIdentifier))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"done","done",1016993524));
} else
{return null;
}
})], null)));var chunk__9143_9189 = null;var count__9144_9190 = 0;var i__9145_9191 = 0;while(true){
if((i__9145_9191 < count__9144_9190))
{var vec__9146_9192 = cljs.core._nth.call(null,chunk__9143_9189,i__9145_9191);var ev__8082__auto___9193 = cljs.core.nth.call(null,vec__9146_9192,0,null);var func__8083__auto___9194 = cljs.core.nth.call(null,vec__9146_9192,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___9193,func__8083__auto___9194);
{
var G__9195 = seq__9142_9188;
var G__9196 = chunk__9143_9189;
var G__9197 = count__9144_9190;
var G__9198 = (i__9145_9191 + 1);
seq__9142_9188 = G__9195;
chunk__9143_9189 = G__9196;
count__9144_9190 = G__9197;
i__9145_9191 = G__9198;
continue;
}
} else
{var temp__4092__auto___9199 = cljs.core.seq.call(null,seq__9142_9188);if(temp__4092__auto___9199)
{var seq__9142_9200__$1 = temp__4092__auto___9199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9142_9200__$1))
{var c__7470__auto___9201 = cljs.core.chunk_first.call(null,seq__9142_9200__$1);{
var G__9202 = cljs.core.chunk_rest.call(null,seq__9142_9200__$1);
var G__9203 = c__7470__auto___9201;
var G__9204 = cljs.core.count.call(null,c__7470__auto___9201);
var G__9205 = 0;
seq__9142_9188 = G__9202;
chunk__9143_9189 = G__9203;
count__9144_9190 = G__9204;
i__9145_9191 = G__9205;
continue;
}
} else
{var vec__9147_9206 = cljs.core.first.call(null,seq__9142_9200__$1);var ev__8082__auto___9207 = cljs.core.nth.call(null,vec__9147_9206,0,null);var func__8083__auto___9208 = cljs.core.nth.call(null,vec__9147_9206,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___9207,func__8083__auto___9208);
{
var G__9209 = cljs.core.next.call(null,seq__9142_9200__$1);
var G__9210 = null;
var G__9211 = 0;
var G__9212 = 0;
seq__9142_9188 = G__9209;
chunk__9143_9189 = G__9210;
count__9144_9190 = G__9211;
i__9145_9191 = G__9212;
continue;
}
}
} else
{}
}
break;
}
return e__8081__auto__;
});

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","dialog","lt.plugins.alt-tab/dialog",1593897350),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.alt-tab","dialog","lt.plugins.alt-tab/dialog",1593897350),null], null), null),new cljs.core.Keyword(null,"selected","selected",2205476365),null,new cljs.core.Keyword(null,"closed","closed",3951351006),false,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,tabs){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabs","tabs",1017456368),cljs.core.vec.call(null,tabs)], null));
return lt.plugins.alt_tab.dialog.call(null,this$);
}));

lt.plugins.alt_tab.select = (function select(this$,obj,idx){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),obj], null));
var seq__9154 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,lt.util.dom.$$.call(null,"li",lt.object.__GT_content.call(null,this$))));var chunk__9155 = null;var count__9156 = 0;var i__9157 = 0;while(true){
if((i__9157 < count__9156))
{var vec__9158 = cljs.core._nth.call(null,chunk__9155,i__9157);var i = cljs.core.nth.call(null,vec__9158,0,null);var li = cljs.core.nth.call(null,vec__9158,1,null);if(cljs.core._EQ_.call(null,idx,i))
{lt.util.dom.add_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
} else
{lt.util.dom.remove_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
}
{
var G__9213 = seq__9154;
var G__9214 = chunk__9155;
var G__9215 = count__9156;
var G__9216 = (i__9157 + 1);
seq__9154 = G__9213;
chunk__9155 = G__9214;
count__9156 = G__9215;
i__9157 = G__9216;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9154);if(temp__4092__auto__)
{var seq__9154__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9154__$1))
{var c__7470__auto__ = cljs.core.chunk_first.call(null,seq__9154__$1);{
var G__9217 = cljs.core.chunk_rest.call(null,seq__9154__$1);
var G__9218 = c__7470__auto__;
var G__9219 = cljs.core.count.call(null,c__7470__auto__);
var G__9220 = 0;
seq__9154 = G__9217;
chunk__9155 = G__9218;
count__9156 = G__9219;
i__9157 = G__9220;
continue;
}
} else
{var vec__9159 = cljs.core.first.call(null,seq__9154__$1);var i = cljs.core.nth.call(null,vec__9159,0,null);var li = cljs.core.nth.call(null,vec__9159,1,null);if(cljs.core._EQ_.call(null,idx,i))
{lt.util.dom.add_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
} else
{lt.util.dom.remove_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
}
{
var G__9221 = cljs.core.next.call(null,seq__9154__$1);
var G__9222 = null;
var G__9223 = 0;
var G__9224 = 0;
seq__9154 = G__9221;
chunk__9155 = G__9222;
count__9156 = G__9223;
i__9157 = G__9224;
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

lt.plugins.alt_tab.__BEH__select_by_object = (function __BEH__select_by_object(this$,obj){var idx = lt.plugins.alt_tab.__GT_index.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),obj);return lt.plugins.alt_tab.select.call(null,this$,obj,idx);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","select-by-object","lt.plugins.alt-tab/select-by-object",3042908778),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.alt_tab.__BEH__select_by_object,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select.object","select.object",1219802083),null], null), null));

lt.plugins.alt_tab.__BEH__select_by_index = (function __BEH__select_by_index(this$,idx){var tabs = new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var max_idx = (cljs.core.count.call(null,tabs) - 1);var idx__$1 = (((idx > max_idx))?0:(((0 > idx))?max_idx:((new cljs.core.Keyword(null,"else","else",1017020587))?idx:null)));var obj = cljs.core.nth.call(null,tabs,idx__$1);return lt.plugins.alt_tab.select.call(null,this$,obj,idx__$1);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","select-by-index","lt.plugins.alt-tab/select-by-index",3198642369),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.alt_tab.__BEH__select_by_index,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select.index","select.index",1985188050),null], null), null));

lt.plugins.alt_tab.__BEH__select_next = (function __BEH__select_next(this$){var idx = lt.plugins.alt_tab.__GT_index.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"select.index","select.index",1985188050),(idx + 1));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","select-next","lt.plugins.alt-tab/select-next",1148897706),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.alt_tab.__BEH__select_next,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select.next","select.next",1183924247),null], null), null));

lt.plugins.alt_tab.__BEH__select_prev = (function __BEH__select_prev(this$){var idx = lt.plugins.alt_tab.__GT_index.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"select.index","select.index",1985188050),(idx - 1));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","select-prev","lt.plugins.alt-tab/select-prev",1148821482),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.alt_tab.__BEH__select_prev,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select.prev","select.prev",1183995735),null], null), null));

lt.plugins.alt_tab.__BEH__done = (function __BEH__done(this$){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close","close",1108660586));
var temp__4092__auto__ = (function (){var or__6741__auto__ = new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6741__auto__))
{return or__6741__auto__;
} else
{return cljs.core.second.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var obj = temp__4092__auto__;if(cljs.core.truth_(lt.plugins.alt_tab.__GT_index.call(null,lt.plugins.alt_tab.current_tabs.call(null),obj)))
{return lt.objs.tabs.active_BANG_.call(null,obj);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","done","lt.plugins.alt-tab/done",786159312),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.alt_tab.__BEH__done,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"done","done",1016993524),null], null), null));

lt.plugins.alt_tab.__BEH__close = (function __BEH__close(this$){lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","dialog","lt.plugins.alt-tab/dialog",1593897350));
lt.util.dom.add_class.call(null,lt.object.__GT_content.call(null,this$),new cljs.core.Keyword(null,"AltTab-hidden","AltTab-hidden",2691154109));
return lt.util.js.wait.call(null,300,(function (){return lt.object.destroy_BANG_.call(null,this$);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","close","lt.plugins.alt-tab/close",1214909014),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.alt_tab.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));

lt.plugins.alt_tab.__BEH__show = (function __BEH__show(this$){lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","dialog","lt.plugins.alt-tab/dialog",1593897350),this$);
var el = lt.object.__GT_content.call(null,this$);lt.util.dom.add_class.call(null,el,new cljs.core.Keyword(null,"AltTab-hidden","AltTab-hidden",2691154109));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"select.index","select.index",1985188050),1);
lt.util.dom.append.call(null,lt.util.dom.$.call(null,"body"),el);
lt.util.dom.focus.call(null,el);
return lt.util.dom.remove_class.call(null,el,new cljs.core.Keyword(null,"AltTab-hidden","AltTab-hidden",2691154109));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","show","lt.plugins.alt-tab/show",786042705),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.alt_tab.__BEH__show,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",1017433711),null], null), null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.alt-tab","prev","lt.plugins.alt-tab/prev",786126495),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabs: Go to previously used tab",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = cljs.core.second.call(null,lt.plugins.alt_tab.current_tabs.call(null));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.tabs.active_BANG_.call(null,ed);
} else
{return null;
}
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.alt-tab","alt-tab","lt.plugins.alt-tab/alt-tab",2223979741),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabs: Do Alt-Tabbing",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4090__auto__ = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","dialog","lt.plugins.alt-tab/dialog",1593897350));if(cljs.core.truth_(temp__4090__auto__))
{var dialog = temp__4090__auto__;return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"select.next","select.next",1183924247));
} else
{var tabs = lt.plugins.alt_tab.current_tabs.call(null);if((cljs.core.count.call(null,tabs) > 0))
{return lt.object.raise.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","dialog","lt.plugins.alt-tab/dialog",1593897350),tabs),new cljs.core.Keyword(null,"show","show",1017433711));
} else
{return null;
}
}
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.alt-tab","select-prev","lt.plugins.alt-tab/select-prev",1148821482),new cljs.core.Keyword(null,"desc","desc",1016984067),"AltTab: Select previous item",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","dialog","lt.plugins.alt-tab/dialog",1593897350));if(cljs.core.truth_(temp__4092__auto__))
{var dialog = temp__4092__auto__;return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"select.prev","select.prev",1183995735));
} else
{return null;
}
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.alt-tab","select-next","lt.plugins.alt-tab/select-next",1148897706),new cljs.core.Keyword(null,"desc","desc",1016984067),"AltTab: Select next item",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","dialog","lt.plugins.alt-tab/dialog",1593897350));if(cljs.core.truth_(temp__4092__auto__))
{var dialog = temp__4092__auto__;return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"select.next","select.next",1183924247));
} else
{return null;
}
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.alt-tab","close-current-tab-and-go-to-previously-used","lt.plugins.alt-tab/close-current-tab-and-go-to-previously-used",3017279760),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabs: Close current tab and go to previously used",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var next_tab = cljs.core.second.call(null,lt.plugins.alt_tab.current_tabs.call(null));lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close","tabs.close",4150844154));
if(cljs.core.truth_(next_tab))
{return lt.objs.tabs.active_BANG_.call(null,next_tab);
} else
{return null;
}
})], null));

}

//# sourceMappingURL=