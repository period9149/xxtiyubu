(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-282ed29d"],{"098f":function(t,e,r){},"1db1":function(t,e,r){"use strict";var n=r("098f"),a=r.n(n);a.a},a674:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.group?r("div",{staticClass:"page-article"},[r("div",{staticClass:"d-flex py-3 px-2 border-bottom",staticStyle:{width:"700px"}},[r("strong",{staticClass:"flex-1 fs-xxl text-center"},[t._v(" "+t._s(t.group.name)+" ")]),r("div",{staticClass:"text-grey fs-xs mt-4 mx-5"},[t._v(" "+t._s(t._f("date")(t.group.createdAt))+" ")])]),r("div",{staticClass:"px-3 m-body mt-3",domProps:{innerHTML:t._s(t.group.body)}})]):t._e()},a=[],s=(r("96cf"),r("1da1")),c=r("5a0c"),i=r.n(c),o={name:"GroupDetails",filters:{date:function(t){return i()(t).format("YYYY-MM-DD")}},props:{id:{required:!0}},data:function(){return{group:{}}},methods:{fetch:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("groups/".concat(t.id));case 2:r=e.sent,t.group=r.data;case 4:case"end":return e.stop()}}),e)})))()}},watch:{id:"fetch"},created:function(){this.fetch()}},u=o,d=(r("1db1"),r("2877")),p=Object(d["a"])(u,n,a,!1,null,"86b4cdc2",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-282ed29d.93d7768e.js.map