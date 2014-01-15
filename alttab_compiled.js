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
var G__13833 = cljs.core.next.call(null,lst__$1);
var G__13834 = (idx + 1);
lst__$1 = G__13833;
idx = G__13834;
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
return (function (p1__13788_SHARP_){return path.startsWith(p1__13788_SHARP_);
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
})());var seq__13795_13835 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),(function (){return lt.object.raise.call(null,dialog,new cljs.core.Keyword(null,"select.object","select.object",1219802083),obj);
})], null)));var chunk__13796_13836 = null;var count__13797_13837 = 0;var i__13798_13838 = 0;while(true){
if((i__13798_13838 < count__13797_13837))
{var vec__13799_13839 = cljs.core._nth.call(null,chunk__13796_13836,i__13798_13838);var ev__8138__auto___13840 = cljs.core.nth.call(null,vec__13799_13839,0,null);var func__8139__auto___13841 = cljs.core.nth.call(null,vec__13799_13839,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___13840,func__8139__auto___13841);
{
var G__13842 = seq__13795_13835;
var G__13843 = chunk__13796_13836;
var G__13844 = count__13797_13837;
var G__13845 = (i__13798_13838 + 1);
seq__13795_13835 = G__13842;
chunk__13796_13836 = G__13843;
count__13797_13837 = G__13844;
i__13798_13838 = G__13845;
continue;
}
} else
{var temp__4092__auto___13846 = cljs.core.seq.call(null,seq__13795_13835);if(temp__4092__auto___13846)
{var seq__13795_13847__$1 = temp__4092__auto___13846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13795_13847__$1))
{var c__7526__auto___13848 = cljs.core.chunk_first.call(null,seq__13795_13847__$1);{
var G__13849 = cljs.core.chunk_rest.call(null,seq__13795_13847__$1);
var G__13850 = c__7526__auto___13848;
var G__13851 = cljs.core.count.call(null,c__7526__auto___13848);
var G__13852 = 0;
seq__13795_13835 = G__13849;
chunk__13796_13836 = G__13850;
count__13797_13837 = G__13851;
i__13798_13838 = G__13852;
continue;
}
} else
{var vec__13800_13853 = cljs.core.first.call(null,seq__13795_13847__$1);var ev__8138__auto___13854 = cljs.core.nth.call(null,vec__13800_13853,0,null);var func__8139__auto___13855 = cljs.core.nth.call(null,vec__13800_13853,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___13854,func__8139__auto___13855);
{
var G__13856 = cljs.core.next.call(null,seq__13795_13847__$1);
var G__13857 = null;
var G__13858 = 0;
var G__13859 = 0;
seq__13795_13835 = G__13856;
chunk__13796_13836 = G__13857;
count__13797_13837 = G__13858;
i__13798_13838 = G__13859;
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

alt_tab.dialog = (function dialog(this$){var e__8137__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.AltTab","div.AltTab",1366092987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7495__auto__ = (function iter__13811(s__13812){return (new cljs.core.LazySeq(null,(function (){var s__13812__$1 = s__13812;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13812__$1);if(temp__4092__auto__)
{var s__13812__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13812__$2))
{var c__7493__auto__ = cljs.core.chunk_first.call(null,s__13812__$2);var size__7494__auto__ = cljs.core.count.call(null,c__7493__auto__);var b__13814 = cljs.core.chunk_buffer.call(null,size__7494__auto__);if((function (){var i__13813 = 0;while(true){
if((i__13813 < size__7494__auto__))
{var obj = cljs.core._nth.call(null,c__7493__auto__,i__13813);cljs.core.chunk_append.call(null,b__13814,alt_tab.item.call(null,this$,obj));
{
var G__13860 = (i__13813 + 1);
i__13813 = G__13860;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13814),iter__13811.call(null,cljs.core.chunk_rest.call(null,s__13812__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13814),null);
}
} else
{var obj = cljs.core.first.call(null,s__13812__$2);return cljs.core.cons.call(null,alt_tab.item.call(null,this$,obj),iter__13811.call(null,cljs.core.rest.call(null,s__13812__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7495__auto__.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__13815_13861 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"done","done",1016993524));
})], null)));var chunk__13816_13862 = null;var count__13817_13863 = 0;var i__13818_13864 = 0;while(true){
if((i__13818_13864 < count__13817_13863))
{var vec__13819_13865 = cljs.core._nth.call(null,chunk__13816_13862,i__13818_13864);var ev__8138__auto___13866 = cljs.core.nth.call(null,vec__13819_13865,0,null);var func__8139__auto___13867 = cljs.core.nth.call(null,vec__13819_13865,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___13866,func__8139__auto___13867);
{
var G__13868 = seq__13815_13861;
var G__13869 = chunk__13816_13862;
var G__13870 = count__13817_13863;
var G__13871 = (i__13818_13864 + 1);
seq__13815_13861 = G__13868;
chunk__13816_13862 = G__13869;
count__13817_13863 = G__13870;
i__13818_13864 = G__13871;
continue;
}
} else
{var temp__4092__auto___13872 = cljs.core.seq.call(null,seq__13815_13861);if(temp__4092__auto___13872)
{var seq__13815_13873__$1 = temp__4092__auto___13872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13815_13873__$1))
{var c__7526__auto___13874 = cljs.core.chunk_first.call(null,seq__13815_13873__$1);{
var G__13875 = cljs.core.chunk_rest.call(null,seq__13815_13873__$1);
var G__13876 = c__7526__auto___13874;
var G__13877 = cljs.core.count.call(null,c__7526__auto___13874);
var G__13878 = 0;
seq__13815_13861 = G__13875;
chunk__13816_13862 = G__13876;
count__13817_13863 = G__13877;
i__13818_13864 = G__13878;
continue;
}
} else
{var vec__13820_13879 = cljs.core.first.call(null,seq__13815_13873__$1);var ev__8138__auto___13880 = cljs.core.nth.call(null,vec__13820_13879,0,null);var func__8139__auto___13881 = cljs.core.nth.call(null,vec__13820_13879,1,null);lt.util.dom.on.call(null,e__8137__auto__,ev__8138__auto___13880,func__8139__auto___13881);
{
var G__13882 = cljs.core.next.call(null,seq__13815_13873__$1);
var G__13883 = null;
var G__13884 = 0;
var G__13885 = 0;
seq__13815_13861 = G__13882;
chunk__13816_13862 = G__13883;
count__13817_13863 = G__13884;
i__13818_13864 = G__13885;
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
var seq__13827 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,lt.util.dom.$$.call(null,"li",lt.object.__GT_content.call(null,this$))));var chunk__13828 = null;var count__13829 = 0;var i__13830 = 0;while(true){
if((i__13830 < count__13829))
{var vec__13831 = cljs.core._nth.call(null,chunk__13828,i__13830);var i = cljs.core.nth.call(null,vec__13831,0,null);var li = cljs.core.nth.call(null,vec__13831,1,null);if(cljs.core._EQ_.call(null,idx,i))
{lt.util.dom.add_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
} else
{lt.util.dom.remove_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
}
{
var G__13886 = seq__13827;
var G__13887 = chunk__13828;
var G__13888 = count__13829;
var G__13889 = (i__13830 + 1);
seq__13827 = G__13886;
chunk__13828 = G__13887;
count__13829 = G__13888;
i__13830 = G__13889;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13827);if(temp__4092__auto__)
{var seq__13827__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13827__$1))
{var c__7526__auto__ = cljs.core.chunk_first.call(null,seq__13827__$1);{
var G__13890 = cljs.core.chunk_rest.call(null,seq__13827__$1);
var G__13891 = c__7526__auto__;
var G__13892 = cljs.core.count.call(null,c__7526__auto__);
var G__13893 = 0;
seq__13827 = G__13890;
chunk__13828 = G__13891;
count__13829 = G__13892;
i__13830 = G__13893;
continue;
}
} else
{var vec__13832 = cljs.core.first.call(null,seq__13827__$1);var i = cljs.core.nth.call(null,vec__13832,0,null);var li = cljs.core.nth.call(null,vec__13832,1,null);if(cljs.core._EQ_.call(null,idx,i))
{lt.util.dom.add_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
} else
{lt.util.dom.remove_class.call(null,li,new cljs.core.Keyword(null,"selected","selected",2205476365));
}
{
var G__13894 = cljs.core.next.call(null,seq__13827__$1);
var G__13895 = null;
var G__13896 = 0;
var G__13897 = 0;
seq__13827 = G__13894;
chunk__13828 = G__13895;
count__13829 = G__13896;
i__13830 = G__13897;
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

alt_tab.__BEH__select_by_index = (function __BEH__select_by_index(this$,idx){var tabs = new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var max_idx = cljs.core.count.call(null,tabs);var idx__$1 = (((idx > max_idx))?0:(((0 > idx))?max_idx:((new cljs.core.Keyword(null,"else","else",1017020587))?idx:null)));var obj = cljs.core.nth.call(null,tabs,idx__$1);return alt_tab.select.call(null,this$,obj,idx__$1);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("alt-tab","select-by-index","alt-tab/select-by-index",4447248460),new cljs.core.Keyword(null,"reaction","reaction",4441361819),alt_tab.__BEH__select_by_index,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select.index","select.index",1985188050),null], null), null));

alt_tab.__BEH__done = (function __BEH__done(this$){var temp__4090__auto___13898 = (function (){var or__6797__auto__ = new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6797__auto__))
{return or__6797__auto__;
} else
{return cljs.core.second.call(null,new cljs.core.Keyword(null,"tabs","tabs",1017456368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
})();if(cljs.core.truth_(temp__4090__auto___13898))
{var obj_13899 = temp__4090__auto___13898;lt.objs.tabs.active_BANG_.call(null,obj_13899);
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close","close",1108660586));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("alt-tab","done","alt-tab/done",2034962015),new cljs.core.Keyword(null,"reaction","reaction",4441361819),alt_tab.__BEH__done,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"done","done",1016993524),null], null), null));

alt_tab.__BEH__close = (function __BEH__close(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",3951351006),true], null));
lt.util.dom.add_class.call(null,lt.object.__GT_content.call(null,this$),new cljs.core.Keyword(null,"AltTab-hidden","AltTab-hidden",2691154109));
return lt.util.js.wait.call(null,500,(function (){return lt.object.destroy_BANG_.call(null,this$);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("alt-tab","close","alt-tab/close",2059455221),new cljs.core.Keyword(null,"reaction","reaction",4441361819),alt_tab.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));

alt_tab.__BEH__show = (function __BEH__show(this$){if(cljs.core.not.call(null,new cljs.core.Keyword(null,"closed","closed",3951351006).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{var el = lt.object.__GT_content.call(null,this$);lt.util.dom.add_class.call(null,el,new cljs.core.Keyword(null,"AltTab-hidden","AltTab-hidden",2691154109));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"select.index","select.index",1985188050),1);
lt.util.dom.append.call(null,lt.util.dom.$.call(null,"body"),el);
lt.util.dom.remove_class.call(null,el,new cljs.core.Keyword(null,"AltTab-hidden","AltTab-hidden",2691154109));
return lt.util.dom.focus.call(null,el);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("alt-tab","show","alt-tab/show",2035344860),new cljs.core.Keyword(null,"throttle","throttle",2497347228),300,new cljs.core.Keyword(null,"reaction","reaction",4441361819),alt_tab.__BEH__show,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",1017433711),null], null), null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("alt-tab","prev","alt-tab/prev",2035257266),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabs: Go to previously used tab",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = cljs.core.second.call(null,alt_tab.current_tabs.call(null));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.tabs.active_BANG_.call(null,ed);
} else
{return null;
}
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("alt-tab","call","alt-tab/call",2034911099),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabs: Start AltTab dialog",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.object.create.call(null,new cljs.core.Keyword("alt-tab","dialog","alt-tab/dialog",2847197349),alt_tab.current_tabs.call(null)),new cljs.core.Keyword(null,"show","show",1017433711));
})], null));

}

//# sourceMappingURL=