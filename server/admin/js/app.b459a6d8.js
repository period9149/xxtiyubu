(function(e){function t(t){for(var n,s,l=t[0],i=t[1],c=t[2],p=0,m=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/admin/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"08f0":function(e,t){},"1e1f":function(e,t,r){"use strict";var n=r("d780"),a=r.n(n);a.a},"22de":function(e,t,r){"use strict";var n=r("8319"),a=r.n(n);a.a},2692:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],s=(r("034f"),r("2877")),l={},i=Object(s["a"])(l,a,o,!1,null,null,null),c=i.exports,u=r("5c96"),p=r.n(u);r("0fae");n["default"].use(p.a);var m=r("8c4f"),d=r("cd56"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("el-card",{staticClass:"logn-card",attrs:{header:"请先登录"}},[r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",{attrs:{label:""}},[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("登录")])],1)],1)],1)],1)},h=[],v=(r("96cf"),r("1da1")),b={data:function(){return{model:{}}},methods:{login:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("login",e.model);case 2:r=t.sent,localStorage.token=r.data.token,e.$router.push("/"),e.$message({type:"success",message:"登录成功"});case 6:case"end":return t.stop()}}),t)})))()}}},g=b,x=(r("1e1f"),Object(s["a"])(g,f,h,!1,null,"abc38222",null)),w=x.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"管理员")]),r("el-form",[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"text"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)],1)},$=[],k={props:{id:{}},data:function(){return{model:{}}},methods:{save:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/admin_users/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/admin_users",e.model);case 7:e.$router.push("/admin_users/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_users/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},y=k,R=Object(s["a"])(y,_,$,!1,null,null,null),O=R.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("管理员列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),r("el-table-column",{attrs:{prop:"username",label:"用户名"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/admin_users/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},S=[],E={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_users");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确定要删除?"'.concat(e.username,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/admin_users/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},B=E,T=Object(s["a"])(B,j,S,!1,null,null,null),I=T.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"about"}},[r("h1",[e._v("活动列表")]),r("el-table",{attrs:{data:e.activities}},[r("el-table-column",{attrs:{prop:"name",label:"活动名",width:"500"}}),r("el-table-column",{attrs:{prop:"type",label:"活动类型",width:"500"}}),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/activities/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},C=[],z=(r("b0c0"),{data:function(){return{activities:[]}},methods:{fetch:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/activities");case 2:r=t.sent,e.activities=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确定要删除活动?"'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/activities/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}}),Q=z,U=Object(s["a"])(Q,P,C,!1,null,"3f294acc",null),A=U.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"活动")]),r("el-form",{attrs:{"label-width":"120px"}},[r("el-form-item",{attrs:{label:"活动名"}},[r("el-input",{attrs:{placeholder:"请输入活动名..."},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"职位"}},[r("el-select",{attrs:{placeholder:"请选择活动类型"},model:{value:e.model.type,callback:function(t){e.$set(e.model,"type",t)},expression:"model.type"}},[r("el-option",{attrs:{label:"校级活动",value:"校级活动"}},[e._v("校级活动")]),r("el-option",{attrs:{label:"院级活动",value:"院级活动"}},[e._v("院级活动")])],1)],1),r("el-form-item",{attrs:{label:"详情"}},[r("br"),r("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.model.body,callback:function(t){e.$set(e.model,"body",t)},expression:"model.body"}})],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)],1)},D=[],L=r("5873"),M={props:{id:{}},components:{VueEditor:L["a"]},data:function(){return{model:{}}},methods:{save:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.model),e.id){t.next=6;break}return t.next=4,e.$http.post("rest/activities",e.model);case 4:t.next=8;break;case 6:return t.next=8,e.$http.put("rest/activities/".concat(e.id),e.model);case 8:e.$router.push("/activities/list"),e.$message({type:"success",message:"保存成功"});case 10:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/activities/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},afterUpload:function(e){console.log(e),this.$set(this.model,"image",e.url),this.model.image=e.url},handleImageAdded:function(e,t,r,n){var a=this;return Object(v["a"])(regeneratorRuntime.mark((function o(){var s,l;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return s=new FormData,s.append("file",e),o.next=4,a.$http.post("upload",s);case 4:l=o.sent,t.insertEmbed(r,"image",l.data.url),n();case 7:case"end":return o.stop()}}),o)})))()}},created:function(){this.id&&this.fetch()}},V=M,H=Object(s["a"])(V,N,D,!1,null,null,null),q=H.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"about"}},[r("h1",[e._v("团建列表")]),r("el-table",{attrs:{data:e.groups}},[r("el-table-column",{attrs:{prop:"name",label:"事件名",width:"200"}}),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/groups/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},J=[],G={data:function(){return{groups:[]}},methods:{fetch:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/groups");case 2:r=t.sent,e.groups=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确定要删除活动?"'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/groups/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},K=G,W=Object(s["a"])(K,F,J,!1,null,null,null),X=W.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新增")+"团建")]),r("el-form",{attrs:{"label-width":"120px"}},[r("el-form-item",{attrs:{label:"事件名"}},[r("el-input",{attrs:{placeholder:"请输入事件名..."},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"详情"}},[r("br"),r("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.model.body,callback:function(t){e.$set(e.model,"body",t)},expression:"model.body"}})],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)],1)},Z=[],ee={props:{id:{}},components:{VueEditor:L["a"]},data:function(){return{model:{}}},methods:{save:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.model),e.id){t.next=6;break}return t.next=4,e.$http.post("rest/groups",e.model);case 4:t.next=8;break;case 6:return t.next=8,e.$http.put("rest/groups/".concat(e.id),e.model);case 8:e.$router.push("/groups/list"),e.$message({type:"success",message:"保存成功"});case 10:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/groups/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},afterUpload:function(e){console.log(e),this.$set(this.model,"image",e.url),this.model.image=e.url},handleImageAdded:function(e,t,r,n){var a=this;return Object(v["a"])(regeneratorRuntime.mark((function o(){var s,l;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return s=new FormData,s.append("file",e),o.next=4,a.$http.post("upload",s);case 4:l=o.sent,t.insertEmbed(r,"image",l.data.url),n();case 7:case"end":return o.stop()}}),o)})))()}},created:function(){this.id&&this.fetch()}},te=ee,re=Object(s["a"])(te,Y,Z,!1,null,null,null),ne=re.exports,ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"about"}},[r("h1",[e._v("人员列表")]),r("el-table",{attrs:{data:e.people}},[r("el-table-column",{attrs:{prop:"peopleName",label:"姓名",width:"280"}}),r("el-table-column",{attrs:{prop:"peopleTask",label:"职务",width:"280"}}),r("el-table-column",{attrs:{prop:"peopleImage",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3em"},attrs:{src:e.row.peopleImage}})]}}])}),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/people/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},oe=[],se={data:function(){return{people:[]}},methods:{fetch:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/people");case 2:r=t.sent,e.people=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确定要删除成员?"'.concat(e.PeopleName,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/people/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},le=se,ie=Object(s["a"])(le,ae,oe,!1,null,"7fd4a9c0",null),ce=ie.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"人员")]),r("el-form",{attrs:{"label-width":"120px"}},[r("el-form-item",{attrs:{label:"姓名"}},[r("el-input",{attrs:{placeholder:"请输入姓名..."},model:{value:e.model.peopleName,callback:function(t){e.$set(e.model,"peopleName",t)},expression:"model.peopleName"}})],1),r("el-form-item",{attrs:{label:"职位"}},[r("el-select",{attrs:{placeholder:"请选择职位"},model:{value:e.model.peopleTask,callback:function(t){e.$set(e.model,"peopleTask",t)},expression:"model.peopleTask"}},[r("el-option",{attrs:{label:"负责人",value:"负责人"}},[e._v("负责人")]),r("el-option",{attrs:{label:"工作人员",value:"工作人员"}},[e._v("工作人员")]),r("el-option",{attrs:{label:"志愿者",value:"志愿者"}},[e._v("志愿者")]),r("el-option",{attrs:{label:"球队队长",value:"球队队长"}},[e._v("球队队长")])],1)],1),r("el-form-item",{attrs:{label:"生日"}},[r("el-input",{attrs:{placeholder:"请输入日期,如2000/1/1..."},model:{value:e.model.peopleBirthday,callback:function(t){e.$set(e.model,"peopleBirthday",t)},expression:"model.peopleBirthday"}})],1),r("el-form-item",{attrs:{label:"来自"}},[r("el-input",{attrs:{placeholder:"请输入地名,如湖北武汉..."},model:{value:e.model.peopleBirthplace,callback:function(t){e.$set(e.model,"peopleBirthplace",t)},expression:"model.peopleBirthplace"}})],1),r("el-form-item",{attrs:{label:"介绍"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入人物简介..."},model:{value:e.model.peopleIntroduce,callback:function(t){e.$set(e.model,"peopleIntroduce",t)},expression:"model.peopleIntroduce"}})],1),r("el-form-item",{attrs:{label:"QQ"}},[r("el-input",{attrs:{placeholder:"请输入QQ..."},model:{value:e.model.peopleQQ,callback:function(t){e.$set(e.model,"peopleQQ",t)},expression:"model.peopleQQ"}})],1),r("el-form-item",{attrs:{label:"照片"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":e.afterUpload}},[e.model.peopleImage?r("img",{staticClass:"avatar",attrs:{src:e.model.peopleImage}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)],1)},pe=[],me={props:{id:{}},data:function(){return{model:{peopleName:"",peopleTask:"",peopleBirthday:"",peopleBirthplace:"",peopleIntroduce:"",peopleQQ:""}}},methods:{save:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.id){t.next=5;break}return t.next=3,e.$http.post("rest/people",e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.put("rest/people/".concat(e.id),e.model);case 7:e.$router.push("/people/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/people/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},afterUpload:function(e){console.log(e),this.$set(this.model,"peopleImage",e.url),this.model.peopleImage=e.url}},created:function(){this.id&&this.fetch()}},de=me,fe=(r("9b1f"),Object(s["a"])(de,ue,pe,!1,null,null,null)),he=fe.exports,ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"about"}},[r("h1",[e._v("球队列表")]),r("el-table",{attrs:{data:e.teams}},[r("el-table-column",{attrs:{prop:"name",label:"球队名",width:"200"}}),r("el-table-column",{attrs:{prop:"leader.peopleName",label:"队长名",width:"200"}}),r("el-table-column",{attrs:{prop:"introduction",label:"介绍"}}),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/teams/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},be=[],ge={data:function(){return{teams:[]}},methods:{fetch:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/teams");case 2:r=t.sent,e.teams=r.data,console.log(r.data);case 5:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确定要删除球队?"'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/teams/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},xe=ge,we=Object(s["a"])(xe,ve,be,!1,null,"74f538be",null),_e=we.exports,$e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"球队")]),r("el-form",{attrs:{"label-width":"120px"}},[r("el-form-item",{attrs:{label:"球队名称"}},[r("el-input",{attrs:{placeholder:"请输入球队名称..."},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"队长"}},[r("el-select",{attrs:{placeholder:"请选择队长"},model:{value:e.model.leader,callback:function(t){e.$set(e.model,"leader",t)},expression:"model.leader"}},e._l(e.people,(function(e){return r("el-option",{key:e._id,attrs:{label:e.peopleName,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"介绍"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入人物简介..."},model:{value:e.model.introduction,callback:function(t){e.$set(e.model,"introduction",t)},expression:"model.introduction"}})],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)],1)},ke=[],ye=(r("4de4"),{props:{id:{}},data:function(){return{model:{},people:[]}},methods:{save:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.id){t.next=5;break}return t.next=3,e.$http.post("rest/teams",e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.put("rest/teams/".concat(e.id),e.model);case 7:e.$router.push("/teams/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/teams/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchPeople:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/people");case 2:r=t.sent,e.people=r.data.filter((function(e){return"球队队长"===e.peopleTask}));case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchPeople(),this.id&&this.fetch()}}),Re=ye,Oe=Object(s["a"])(Re,$e,ke,!1,null,null,null),je=Oe.exports;n["default"].use(m["a"]);var Se=[{path:"/login",name:"login",component:w,meta:{isPublic:!0}},{path:"/",name:"Main",component:d["default"],children:[{path:"/people/list",component:ce},{path:"/people/edit/:id",component:he,props:!0},{path:"/people/add",component:he},{path:"/teams/list",component:_e},{path:"/teams/edit/:id",component:je,props:!0},{path:"/teams/add",component:je},{path:"/groups/list",component:X},{path:"/groups/edit/:id",component:ne,props:!0},{path:"/groups/add",component:ne},{path:"/activities/list",component:A},{path:"/activities/edit/:id",component:q,props:!0},{path:"/activities/add",component:q},{path:"/admin_users/list",component:I},{path:"/admin_users/edit/:id",component:O,props:!0},{path:"/admin_users/add",component:O}]}],Ee=new m["a"]({routes:Se});Ee.beforeEach((function(e,t,r){if(!e.meta.isPublic&&!localStorage.token)return r("/login");r()}));var Be=Ee,Te=(r("d3b7"),r("bc3a")),Ie=r.n(Te),Pe=Ie.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_API_URL||"/admin/api"});Pe.interceptors.request.use((function(e){return localStorage.token&&(e.headers.Authorization="Bearer "+(localStorage.token||"")),e}),(function(e){return Promise.reject(e)})),Pe.interceptors.response.use((function(e){return e}),(function(e){return e.response.data.message&&(n["default"].prototype.$message({type:"error",message:e.response.data.message}),401===e.response.status&&Be.push("/login")),Promise.reject(e)}));var Ce=Pe;n["default"].config.productionTip=!1,n["default"].prototype.$http=Ce,n["default"].mixin({methods:{getAuthHeaders:function(){return{Authorization:"Bearer ".concat(localStorage.token||"")}}},computed:{uploadUrl:function(){return this.$http.defaults.baseURL+"/upload"}}}),new n["default"]({router:Be,render:function(e){return e(c)}}).$mount("#app")},8319:function(e,t,r){},"85ec":function(e,t,r){},"9b1f":function(e,t,r){"use strict";var n=r("2692"),a=r.n(n);a.a},cd56:function(e,t,r){"use strict";var n=r("f034"),a=r("eca4"),o=(r("22de"),r("2877")),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},d780:function(e,t,r){},eca4:function(e,t,r){"use strict";var n=r("08f0"),a=r.n(n);t["default"]=a.a},f034:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticStyle:{height:"100vh",border:"1px solid #eee"}},[r("el-aside",{staticStyle:{"background-color":"snow"},attrs:{width:"200px"}},[r("el-menu",{attrs:{router:"","unique-opened":"","default-active":e.$route.path}},[r("el-submenu",{attrs:{index:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("信息中心")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("人员信息")]),r("el-menu-item",{attrs:{index:"/people/list"}},[e._v("人员列表")]),r("el-menu-item",{attrs:{index:"/people/add"}},[e._v("新增人员")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("球队信息")]),r("el-menu-item",{attrs:{index:"/teams/list"}},[e._v("球队列表")]),r("el-menu-item",{attrs:{index:"/teams/add"}},[e._v("新增球队")])],2)],2),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-menu"}),e._v("活动中心")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("团建")]),r("el-menu-item",{attrs:{index:"/groups/list"}},[e._v("团建列表")]),r("el-menu-item",{attrs:{index:"/groups/add"}},[e._v("新增团建")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("活动")]),r("el-menu-item",{attrs:{index:"/activities/list"}},[e._v("活动列表")]),r("el-menu-item",{attrs:{index:"/activities/add"}},[e._v("新增活动")])],2)],2),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-setting"}),e._v("系统设置")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("管理员")]),r("el-menu-item",{attrs:{index:"/admin_users/list"}},[e._v("管理员列表")]),r("el-menu-item",{attrs:{index:"/admin_users/add"}},[e._v("新增管理员")])],2)],2)],1)],1),r("el-container",[r("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}}),r("el-main",[r("router-view",{key:e.$route.path})],1)],1)],1)},a=[];r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}))}});
//# sourceMappingURL=app.b459a6d8.js.map