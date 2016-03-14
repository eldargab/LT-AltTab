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
{var ts = temp__4090__auto__;return cljs.core.sort.call(null,((function (ts,temp__4090__auto__){
return (function (o1,o2){var t1 = (function (){var or__4884__auto__ = new cljs.core.Keyword("lt.plugins.alt-tab","last-activated","lt.plugins.alt-tab/last-activated",3680726776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o1));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return 0;
}
})();var t2 = (function (){var or__4884__auto__ = new cljs.core.Keyword("lt.plugins.alt-tab","last-activated","lt.plugins.alt-tab/last-activated",3680726776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o2));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return 0;
}
})();return (t2 - t1);
});})(ts,temp__4090__auto__))
,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts)));
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
var G__6408 = cljs.core.next.call(null,lst__$1);
var G__6409 = (idx + 1);
lst__$1 = G__6408;
idx = G__6409;
continue;
}
}
} else
{return null;
}
break;
}
});
lt.plugins.alt_tab.not_closed_QMARK_ = (function not_closed_QMARK_(tab){return lt.plugins.alt_tab.__GT_index.call(null,lt.plugins.alt_tab.current_tabs.call(null),tab);
});
lt.plugins.alt_tab.activate_BANG_ = (function activate_BANG_(tab){if(cljs.core.truth_(lt.plugins.alt_tab.not_closed_QMARK_.call(null,tab)))
{return lt.objs.tabs.active_BANG_.call(null,tab);
} else
{return null;
}
});
lt.plugins.alt_tab.close_BANG_ = (function close_BANG_(tab){if(cljs.core.truth_(lt.plugins.alt_tab.not_closed_QMARK_.call(null,tab)))
{try{return lt.object.raise.call(null,tab,new cljs.core.Keyword(null,"close","close",1108660586));
}catch (e6360){if((e6360 instanceof Error))
{var e = e6360;return lt.objs.console.error(e);
} else
{if((e6360 instanceof global.Error))
{var e = e6360;return lt.objs.console.error(e);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6360;
} else
{return null;
}
}
}
}} else
{return null;
}
});
lt.plugins.alt_tab.relative = (function relative(from,to){return lt.objs.files.fpath.relative(from,to);
});
lt.plugins.alt_tab.trim_ws_dir = (function trim_ws_dir(path){var folders = new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws));var folder = cljs.core.first.call(null,cljs.core.filter.call(null,((function (folders){
return (function (p1__6361_SHARP_){return path.startsWith(p1__6361_SHARP_);
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
{return (function (p1__6362_SHARP_){if(cljs.core._EQ_.call(null,".",p1__6362_SHARP_))
{return "";
} else
{return [cljs.core.str(p1__6362_SHARP_),cljs.core.str(lt.objs.files.separator)].join('');
}
}).call(null,lt.objs.files.parent.call(null,lt.plugins.alt_tab.trim_home_dir.call(null,lt.plugins.alt_tab.trim_ws_dir.call(null,path))));
} else
{return "";
}
});
lt.plugins.alt_tab.item = (function item(dialog,obj){var e__6275__auto__ = crate.core.html.call(null,(function (){var name = lt.objs.tabs.__GT_name.call(null,obj);var path = lt.objs.tabs.__GT_path.call(null,obj);var dirty_QMARK_ = new cljs.core.Keyword(null,"dirty","dirty",1109497668).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dir","span.dir",3069879131),lt.plugins.alt_tab.print_dir.call(null,path)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.name","span.name",4619873825),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",1014018496),(cljs.core.truth_(dirty_QMARK_)?"*":"")], null)], null);
})());var seq__6370_6410 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),((function (e__6275__auto__){
return (function (){return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"select.object","select.object",1219802083),obj);
});})(e__6275__auto__))
,new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),((function (e__6275__auto__){
return (function (p1__6363_SHARP_){if(cljs.core._EQ_.call(null,2,p1__6363_SHARP_.button))
{return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"delete.selected","delete.selected",3740173040));
} else
{return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"done","done",1016993524));
}
});})(e__6275__auto__))
], null)));var chunk__6371_6411 = null;var count__6372_6412 = 0;var i__6373_6413 = 0;while(true){
if((i__6373_6413 < count__6372_6412))
{var vec__6374_6414 = cljs.core._nth.call(null,chunk__6371_6411,i__6373_6413);var ev__6276__auto___6415 = cljs.core.nth.call(null,vec__6374_6414,0,null);var func__6277__auto___6416 = cljs.core.nth.call(null,vec__6374_6414,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6415,func__6277__auto___6416);
{
var G__6417 = seq__6370_6410;
var G__6418 = chunk__6371_6411;
var G__6419 = count__6372_6412;
var G__6420 = (i__6373_6413 + 1);
seq__6370_6410 = G__6417;
chunk__6371_6411 = G__6418;
count__6372_6412 = G__6419;
i__6373_6413 = G__6420;
continue;
}
} else
{var temp__4092__auto___6421 = cljs.core.seq.call(null,seq__6370_6410);if(temp__4092__auto___6421)
{var seq__6370_6422__$1 = temp__4092__auto___6421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6370_6422__$1))
{var c__5632__auto___6423 = cljs.core.chunk_first.call(null,seq__6370_6422__$1);{
var G__6424 = cljs.core.chunk_rest.call(null,seq__6370_6422__$1);
var G__6425 = c__5632__auto___6423;
var G__6426 = cljs.core.count.call(null,c__5632__auto___6423);
var G__6427 = 0;
seq__6370_6410 = G__6424;
chunk__6371_6411 = G__6425;
count__6372_6412 = G__6426;
i__6373_6413 = G__6427;
continue;
}
} else
{var vec__6375_6428 = cljs.core.first.call(null,seq__6370_6422__$1);var ev__6276__auto___6429 = cljs.core.nth.call(null,vec__6375_6428,0,null);var func__6277__auto___6430 = cljs.core.nth.call(null,vec__6375_6428,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6429,func__6277__auto___6430);
{
var G__6431 = cljs.core.next.call(null,seq__6370_6422__$1);
var G__6432 = null;
var G__6433 = 0;
var G__6434 = 0;
seq__6370_6410 = G__6431;
chunk__6371_6411 = G__6432;
count__6372_6412 = G__6433;
i__6373_6413 = G__6434;
continue;
}
}
} else
{}
}
break;
}
return e__6275__auto__;
});
lt.plugins.alt_tab.dialog = (function dialog(this$){var e__6275__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.AltTab","div.AltTab",1366092987),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__5601__auto__ = (function iter__6387(s__6388){return (new cljs.core.LazySeq(null,(function (){var s__6388__$1 = s__6388;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6388__$1);if(temp__4092__auto__)
{var s__6388__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6388__$2))
{var c__5599__auto__ = cljs.core.chunk_first.call(null,s__6388__$2);var size__5600__auto__ = cljs.core.count.call(null,c__5599__auto__);var b__6390 = cljs.core.chunk_buffer.call(null,size__5600__auto__);if((function (){var i__6389 = 0;while(true){
if((i__6389 < size__5600__auto__))
{var obj = cljs.core._nth.call(null,c__5599__auto__,i__6389);cljs.core.chunk_append.call(null,b__6390,lt.plugins.alt_tab.item.call(null,this$,obj));
{
var G__6435 = (i__6389 + 1);
i__6389 = G__6435;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6390),iter__6387.call(null,cljs.core.chunk_rest.call(null,s__6388__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6390),null);
}
} else
{var obj = cljs.core.first.call(null,s__6388__$2);return cljs.core.cons.call(null,lt.plugins.alt_tab.item.call(null,this$,obj),iter__6387.call(null,cljs.core.rest.call(null,s__6388__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5601__auto__.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__6391_6436 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),((function (e__6275__auto__){
return (function (p1__6376_SHARP_){if(cljs.core._EQ_.call(null,17,p1__6376_SHARP_.keyCode))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"done","done",1016993524));
} else
{return null;
}
});})(e__6275__auto__))
], null)));var chunk__6392_6437 = null;var count__6393_6438 = 0;var i__6394_6439 = 0;while(true){
if((i__6394_6439 < count__6393_6438))
{var vec__6395_6440 = cljs.core._nth.call(null,chunk__6392_6437,i__6394_6439);var ev__6276__auto___6441 = cljs.core.nth.call(null,vec__6395_6440,0,null);var func__6277__auto___6442 = cljs.core.nth.call(null,vec__6395_6440,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6441,func__6277__auto___6442);
{
var G__6443 = seq__6391_6436;
var G__6444 = chunk__6392_6437;
var G__6445 = count__6393_6438;
var G__6446 = (i__6394_6439 + 1);
seq__6391_6436 = G__6443;
chunk__6392_6437 = G__6444;
count__6393_6438 = G__6445;
i__6394_6439 = G__6446;
continue;
}
} else
{var temp__4092__auto___6447 = cljs.core.seq.call(null,seq__6391_6436);if(temp__4092__auto___6447)
{var seq__6391_6448__$1 = temp__4092__auto___6447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6391_6448__$1))
{var c__5632__auto___6449 = cljs.core.chunk_first.call(null,seq__6391_6448__$1);{
var G__6450 = cljs.core.chunk_rest.call(null,seq__6391_6448__$1);
var G__6451 = c__5632__auto___6449;
var G__6452 = cljs.core.count.call(null,c__5632__auto___6449);
var G__6453 = 0;
seq__6391_6436 = G__6450;
chunk__6392_6437 = G__6451;
count__6393_6438 = G__6452;
i__6394_6439 = G__6453;
continue;
}
} else
{var vec__6396_6454 = cljs.core.first.call(null,seq__6391_6448__$1);var ev__6276__auto___6455 = cljs.core.nth.call(null,vec__6396_6454,0,null);var func__6277__auto___6456 = cljs.core.nth.call(null,vec__6396_6454,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6455,func__6277__auto___6456);
{
var G__6457 = cljs.core.next.call(null,seq__6391_6448__$1);
var G__6458 = null;
var G__6459 = 0;
var G__6460 = 0;
seq__6391_6436 = G__6457;
chunk__6392_6437 = G__6458;
count__6393_6438 = G__6459;
i__6394_6439 = G__6460;
continue;
}
}
} else
{}
}
break;
}
return e__6275__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","dialog","lt.plugins.alt-tab/dialog",1593897350),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.alt-tab","dialog","lt.plugins.alt-tab/dialog",1593897350),null], null), null),new cljs.core.Keyword(null,"selected","selected",2205476365),null,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,tabs){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabs","tabs",1017456368),cljs.core.vec.call(null,tabs)], null));
return lt.plugins.alt_tab.dialog.call(null,this$);
}));
lt.plugins.alt_tab.for_each_item = (function for_each_item(this$,f){var i = 0;var els = lt.util.dom.$$.call(null,"li",lt.object.__GT_content.call(null,this$));while(true){
var temp__4092__auto__ = cljs.core.first.call(null,els);if(cljs.core.truth_(temp__4092__auto__))
{var el = temp__4092__auto__;f.call(null,i,el);
{
var G__6461 = (i + 1);
var G__6462 = cljs.core.next.call(null,els);
i = G__6461;
els = G__6462;
continue;
}
} else
{return null;
}
break;
}
});
lt.plugins.alt_tab.select_BANG_ = (function select_BANG_(this$,obj,idx){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),obj], null));
return lt.plugins.alt_tab.for_each_item.call(null,this$,(function (i,el){if(cljs.core._EQ_.call(null,idx,i))
{return lt.util.dom.add_class.call(null,el,new cljs.core.Keyword(null,"selected","selected",2205476365));
} else
{return lt.util.dom.remove_class.call(null,el,new cljs.core.Keyword(null,"selected","selected",2205476365));
}
}));
});
lt.plugins.alt_tab.remove_BANG_ = (function remove_BANG_(this$,obj,idx){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",1017456368)], null),(function (p1__6397_SHARP_){return cljs.core.filterv.call(null,cljs.core.identity,cljs.core.map_indexed.call(null,(function (i,o){if(cljs.core.not_EQ_.call(null,i,idx))
{return o;
} else
{return null;
}
}),p1__6397_SHARP_));
}));
lt.plugins.alt_tab.for_each_item.call(null,this$,(function (i,el){if(cljs.core._EQ_.call(null,i,idx))
{return lt.util.dom.remove.call(null,el);
} else
{return null;
}
}));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"select.index","select.index",1985188050),idx);
lt.plugins.alt_tab.close_BANG_.call(null,obj);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),lt.objs.tabs.active_tab.call(null)))
{} else
{lt.plugins.alt_tab.activate_BANG_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
}
return lt.util.dom.focus.call(null,lt.object.__GT_content.call(null,this$));
});
lt.plugins.alt_tab.__GT_selected_idx = (function __GT_selected_idx(this$){return lt.plugins.alt_tab.__GT_index.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.alt_tab.__BEH__select_by_object = (function __BEH__select_by_object(this$,obj){var temp__4090__auto__ = lt.plugins.alt_tab.__GT_index.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),obj);if(cljs.core.truth_(temp__4090__auto__))
{var idx = temp__4090__auto__;return lt.plugins.alt_tab.select_BANG_.call(null,this$,obj,idx);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","select-by-object","lt.plugins.alt-tab/select-by-object",3042908778),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.alt_tab.__BEH__select_by_object,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select.object","select.object",1219802083),null], null), null));
lt.plugins.alt_tab.__BEH__select_by_index = (function __BEH__select_by_index(this$,idx){var tabs = new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var max_idx = (cljs.core.count.call(null,tabs) - 1);var idx__$1 = (((idx > max_idx))?0:(((0 > idx))?max_idx:((new cljs.core.Keyword(null,"else","else",1017020587))?idx:null)));if((max_idx >= 0))
{return lt.plugins.alt_tab.select_BANG_.call(null,this$,cljs.core.nth.call(null,tabs,idx__$1),idx__$1);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","select-by-index","lt.plugins.alt-tab/select-by-index",3198642369),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.alt_tab.__BEH__select_by_index,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select.index","select.index",1985188050),null], null), null));
lt.plugins.alt_tab.__BEH__select_next = (function __BEH__select_next(this$){var temp__4090__auto__ = lt.plugins.alt_tab.__GT_selected_idx.call(null,this$);if(cljs.core.truth_(temp__4090__auto__))
{var idx = temp__4090__auto__;return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"select.index","select.index",1985188050),(idx + 1));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","select-next","lt.plugins.alt-tab/select-next",1148897706),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.alt_tab.__BEH__select_next,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select.next","select.next",1183924247),null], null), null));
lt.plugins.alt_tab.__BEH__select_prev = (function __BEH__select_prev(this$){var temp__4090__auto__ = lt.plugins.alt_tab.__GT_selected_idx.call(null,this$);if(cljs.core.truth_(temp__4090__auto__))
{var idx = temp__4090__auto__;return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"select.index","select.index",1985188050),(idx - 1));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","select-prev","lt.plugins.alt-tab/select-prev",1148821482),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.alt_tab.__BEH__select_prev,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select.prev","select.prev",1183995735),null], null), null));
lt.plugins.alt_tab.__BEH__delete_selected = (function __BEH__delete_selected(this$){var temp__4092__auto__ = new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var obj = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword(null,"dirty","dirty",1109497668).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj))))
{return null;
} else
{lt.plugins.alt_tab.remove_BANG_.call(null,this$,obj,lt.plugins.alt_tab.__GT_selected_idx.call(null,this$));
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close","close",1108660586));
} else
{return null;
}
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","delete-selected","lt.plugins.alt-tab/delete-selected",1088408529),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.alt_tab.__BEH__delete_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete.selected","delete.selected",3740173040),null], null), null));
lt.plugins.alt_tab.__BEH__done = (function __BEH__done(this$){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close","close",1108660586));
var temp__4092__auto__ = (function (){var or__4884__auto__ = new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.second.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var obj = temp__4092__auto__;return lt.plugins.alt_tab.activate_BANG_.call(null,obj);
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.alt-tab","delete-selected","lt.plugins.alt-tab/delete-selected",1088408529),new cljs.core.Keyword(null,"desc","desc",1016984067),"AltTab: Close selected item",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword("lt.plugins.alt-tab","dialog","lt.plugins.alt-tab/dialog",1593897350));if(cljs.core.truth_(temp__4092__auto__))
{var dialog = temp__4092__auto__;return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"delete.selected","delete.selected",3740173040));
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

//# sourceMappingURL=alttab_compiled.js.map