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
var G__8610 = cljs.core.next.call(null,lst__$1);
var G__8611 = (idx + 1);
lst__$1 = G__8610;
idx = G__8611;
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
return (function (p1__8564_SHARP_){return path.startsWith(p1__8564_SHARP_);
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
})());var seq__8571_8612 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),(function (){return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"select.object","select.object",1219802083),obj);
}),new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),(function (){return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"done","done",1016993524));
})], null)));var chunk__8572_8613 = null;var count__8573_8614 = 0;var i__8574_8615 = 0;while(true){
if((i__8574_8615 < count__8573_8614))
{var vec__8575_8616 = cljs.core._nth.call(null,chunk__8572_8613,i__8574_8615);var ev__8138__auto___8617 = cljs.core.nth.call(null,vec__8575_8616,0,null);var func__8139__auto___8618 = cljs.core.nth.call(null,vec__8575_8616,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___8617,func__8139__auto___8618);
{
var G__8619 = seq__8571_8612;
var G__8620 = chunk__8572_8613;
var G__8621 = count__8573_8614;
var G__8622 = (i__8574_8615 + 1);
seq__8571_8612 = G__8619;
chunk__8572_8613 = G__8620;
count__8573_8614 = G__8621;
i__8574_8615 = G__8622;
continue;
}
} else
{var temp__4092__auto___8623 = cljs.core.seq.call(null,seq__8571_8612);if(temp__4092__auto___8623)
{var seq__8571_8624__$1 = temp__4092__auto___8623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8571_8624__$1))
{var c__7526__auto___8625 = cljs.core.chunk_first.call(null,seq__8571_8624__$1);{
var G__8626 = cljs.core.chunk_rest.call(null,seq__8571_8624__$1);
var G__8627 = c__7526__auto___8625;
var G__8628 = cljs.core.count.call(null,c__7526__auto___8625);
var G__8629 = 0;
seq__8571_8612 = G__8626;
chunk__8572_8613 = G__8627;
count__8573_8614 = G__8628;
i__8574_8615 = G__8629;
continue;
}
} else
{var vec__8576_8630 = cljs.core.first.call(null,seq__8571_8624__$1);var ev__8138__auto___8631 = cljs.core.nth.call(null,vec__8576_8630,0,null);var func__8139__auto___8632 = cljs.core.nth.call(null,vec__8576_8630,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___8631,func__8139__auto___8632);
{
var G__8633 = cljs.core.next.call(null,seq__8571_8624__$1);
var G__8634 = null;
var G__8635 = 0;
var G__8636 = 0;
seq__8571_8612 = G__8633;
chunk__8572_8613 = G__8634;
count__8573_8614 = G__8635;
i__8574_8615 = G__8636;
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

alt_tab.dialog = (function dialog(this$){var e__8137__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.AltTab","div.AltTab",1366092987),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabindex","tabindex",4410954191),-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7495__auto__ = (function iter__8588(s__8589){return (new cljs.core.LazySeq(null,(function (){var s__8589__$1 = s__8589;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8589__$1);if(temp__4092__auto__)
{var s__8589__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8589__$2))
{var c__7493__auto__ = cljs.core.chunk_first.call(null,s__8589__$2);var size__7494__auto__ = cljs.core.count.call(null,c__7493__auto__);var b__8591 = cljs.core.chunk_buffer.call(null,size__7494__auto__);if((function (){var i__8590 = 0;while(true){
if((i__8590 < size__7494__auto__))
{var obj = cljs.core._nth.call(null,c__7493__auto__,i__8590);cljs.core.chunk_append.call(null,b__8591,alt_tab.item.call(null,this$,obj));
{
var G__8637 = (i__8590 + 1);
i__8590 = G__8637;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8591),iter__8588.call(null,cljs.core.chunk_rest.call(null,s__8589__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8591),null);
}
} else
{var obj = cljs.core.first.call(null,s__8589__$2);return cljs.core.cons.call(null,alt_tab.item.call(null,this$,obj),iter__8588.call(null,cljs.core.rest.call(null,s__8589__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7495__auto__.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__8592_8638 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (p1__8577_SHARP_){if(cljs.core._EQ_.call(null,"Control",p1__8577_SHARP_.keyIdentifier))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"done","done",1016993524));
} else
{return null;
}
})], null)));var chunk__8593_8639 = null;var count__8594_8640 = 0;var i__8595_8641 = 0;while(true){
if((i__8595_8641 < count__8594_8640))
{var vec__8596_8642 = cljs.core._nth.call(null,chunk__8593_8639,i__8595_8641);var ev__8138__auto___8643 = cljs.core.nth.call(null,vec__8596_8642,0,null);var func__8139__auto___8644 = cljs.core.nth.call(null,vec__8596_8642,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___8643,func__8139__auto___8644);
{
var G__8645 = seq__8592_8638;
var G__8646 = chunk__8593_8639;
var G__8647 = count__8594_8640;
var G__8648 = (i__8595_8641 + 1);
seq__8592_8638 = G__8645;
chunk__8593_8639 = G__8646;
count__8594_8640 = G__8647;
i__8595_8641 = G__8648;
continue;
}
} else
{var temp__4092__auto___8649 = cljs.core.seq.call(null,seq__8592_8638);if(temp__4092__auto___8649)
{var seq__8592_8650__$1 = temp__4092__auto___8649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8592_8650__$1))
{var c__7526__auto___8651 = cljs.core.chunk_first.call(null,seq__8592_8650__$1);{
var G__8652 = cljs.core.chunk_rest.call(null,seq__8592_8650__$1);
var G__8653 = c__7526__auto___8651;
var G__8654 = cljs.core.count.call(null,c__7526__auto___8651);
var G__8655 = 0;
seq__8592_8638 = G__8652;
chunk__8593_8639 = G__8653;
count__8594_8640 = G__8654;
i__8595_8641 = G__8655;
continue;
}
} else
{var vec__8597_8656 = cljs.core.first.call(null,seq__8592_8650__$1);var ev__8138__auto___8657 = cljs.core.nth.call(null,vec__8597_8656,0,null);var func__8139__auto___8658 = cljs.core.nth.call(null,vec__8597_8656,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___8657,func__8139__auto___8658);
{
var G__8659 = cljs.core.next.call(null,seq__8592_8650__$1);
var G__8660 = null;
var G__8661 = 0;
var G__8662 = 0;
seq__8592_8638 = G__8659;
chunk__8593_8639 = G__8660;
count__8594_8640 = G__8661;
i__8595_8641 = G__8662;
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
var seq__8604 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,lt.util.dom.$$.call(null,"li",lt.object.__GT_content.call(null,this$))));var chunk__8605 = null;var count__8606 = 0;var i__8607 = 0;while(true){
if((i__8607 < count__8606))
{var vec__8608 = cljs.core._nth.call(null,chunk__8605,i__8607);var i = cljs.core.nth.call(null,vec__8608,0,null);var li = cljs.core.nth.call(null,vec__8608,1,null);if(cljs.core._EQ_.call(null,idx,i))
{lt.util.dom.add_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
} else
{lt.util.dom.remove_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
}
{
var G__8663 = seq__8604;
var G__8664 = chunk__8605;
var G__8665 = count__8606;
var G__8666 = (i__8607 + 1);
seq__8604 = G__8663;
chunk__8605 = G__8664;
count__8606 = G__8665;
i__8607 = G__8666;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8604);if(temp__4092__auto__)
{var seq__8604__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8604__$1))
{var c__7526__auto__ = cljs.core.chunk_first.call(null,seq__8604__$1);{
var G__8667 = cljs.core.chunk_rest.call(null,seq__8604__$1);
var G__8668 = c__7526__auto__;
var G__8669 = cljs.core.count.call(null,c__7526__auto__);
var G__8670 = 0;
seq__8604 = G__8667;
chunk__8605 = G__8668;
count__8606 = G__8669;
i__8607 = G__8670;
continue;
}
} else
{var vec__8609 = cljs.core.first.call(null,seq__8604__$1);var i = cljs.core.nth.call(null,vec__8609,0,null);var li = cljs.core.nth.call(null,vec__8609,1,null);if(cljs.core._EQ_.call(null,idx,i))
{lt.util.dom.add_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
} else
{lt.util.dom.remove_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
}
{
var G__8671 = cljs.core.next.call(null,seq__8604__$1);
var G__8672 = null;
var G__8673 = 0;
var G__8674 = 0;
seq__8604 = G__8671;
chunk__8605 = G__8672;
count__8606 = G__8673;
i__8607 = G__8674;
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
return lt.util.js.wait.call(null,300,(function (){return lt.object.destroy_BANG_.call(null,this$);
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