(()=>{var t={257:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(144),r=new o["default"];const a=r},7396:(t,e,n)=>{"use strict";n(1822),n(1246),n(6108),n(6331),n(6997),n(851),n(5115),n(9865);var o=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[n("router-view")],1)],1)},a=[];const s={name:"app"},i=s;var l=n(8085),u=(0,l.Z)(i,r,a,!1,null,null,null);const c=u.exports;var d=n(8345),h=n(4104),f=n(629),p=n(4720),m=n.n(p),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container el-row"},[n("div",{staticClass:"header el-col el-col-24"},[n("div",{staticClass:"logo el-col el-col-10 logo-width"},[t._v(" vue-admin ")]),n("div",{staticClass:"userinfo el-col el-col-4"},[n("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleCommand}},[n("span",{staticClass:"el-dropdown-link userinfo-inner"},[n("img",{attrs:{src:"https://thirdwx.qlogo.cn/mmopen/vi_32/uHskAsnK1e3B4yf3BJ0yAG42FF3UEwDB1y3hlWMkiauzFNBI9I22wqvbfbBCOuL0gt01sRN0yYXj45sbkbBAsDw/132"}}),t._v(t._s(t.userInfo.username)+" ")]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("个人信息")]),n("el-dropdown-item",{attrs:{command:"logout",divided:""}},[t._v("退出登录")])],1)],1)],1)]),n("div",{staticClass:"main el-col el-col-24"},[n("aside",{staticClass:"menu-expanded"},[n("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"100%"},attrs:{"default-active":t.$route.path,"unique-opened":"",router:"","background-color":"#324157","text-color":"#fff","active-text-color":"#20a0ff",collapse:t.isCollapse},on:{open:t.handleOpen,close:t.handleClose,select:t.handleselect}},[t._l(t.$router.options.routes,(function(e,o){return e.hidden?t._e():[e.leaf?t._e():n("el-submenu",{attrs:{index:o+""}},[n("template",{slot:"title"},[n("i",{class:e.iconCls}),t._v(t._s(e.name))]),t._l(e.children,(function(e){return e.hidden?t._e():n("el-menu-item",{key:e.path,attrs:{index:e.path}},[t._v(t._s(e.name))])}))],2),e.leaf&&e.children.length>0?n("el-menu-item",{attrs:{index:e.children[0].path}},[n("i",{class:e.iconCls}),t._v(t._s(e.children[0].name))]):t._e()]}))],2)],1),n("div",{staticClass:"content-container"},[n("v-tags"),n("div",{staticClass:"content-wrapper el-col el-col-24",staticStyle:{padding:"10px 10px 20px 10px","overflow-y":"scroll",height:"100%","box-sizing":"border-box","overflow-x":"hidden",background:"#f0f0f0"}},["/"!=t.$route.path?n("div",{staticClass:"breadcrumb-container el-col el-col-24"},[n("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},t._l(t.$route.matched,(function(e){return n("el-breadcrumb-item",{key:e.path},[t._v(" "+t._s(e.name)+" ")])})),1)],1):t._e(),n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[n("router-view")],1)],1)],1)])])},v=[],b=(n(6059),n(3135)),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showTags?n("div",{staticClass:"tags"},[n("ul",t._l(t.tagsList,(function(e,o){return n("li",{key:o,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[n("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v(" "+t._s(e.title)+" ")]),n("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(o)}}},[n("i",{staticClass:"el-icon-close"})])],1)})),0),n("div",{staticClass:"tags-close-box"},[n("el-dropdown",{on:{command:t.handleTags}},[n("el-button",{attrs:{size:"mini",type:"primary"}},[t._v(" 标签选项"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),n("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},y=[],C=(n(6773),n(8837),n(257));const _={data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],n=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];n?e.path===this.$route.fullPath&&this.$router.push(n.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter((function(e){return e.path===t.$route.fullPath}));this.tagsList=e},setTags:function(t){var e=this.tagsList.some((function(e){return e.path===t.fullPath}));e||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.name,path:t.fullPath,name:t.matched[1].components.default.name})),this.$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){var t=this;this.setTags(this.$route),C.Z.$on("close_current_tags",(function(){for(var e=0,n=t.tagsList.length;e<n;e++){var o=t.tagsList[e];if(o.path===t.$route.fullPath){e<n-1?t.$router.push(t.tagsList[e+1].path):e>0?t.$router.push(t.tagsList[e-1].path):t.$router.push("/"),t.tagsList.splice(e,1);break}}}))}},L=_;var k=(0,l.Z)(L,w,y,!1,null,null,null);const $=k.exports;var x;const O=(0,b.Z)({data:function(){return{tagsList:[],isCollapse:!1}},components:{vTags:$},computed:{userInfo:function(){var t=this.$store.state.userInfo;return t?JSON.parse(t):{}}},created:function(){x=this,x.$on("tags",(function(t){for(var e=[],n=0,o=t.length;n<o;n++)t[n].name&&e.push(t[n].name);x.tagsList=e}))}},(0,f.OI)(["doLogout"]),{methods:{handleCommand:function(t){"logout"==t&&(x.$store.commit("doLogout"),x.$router.push("/login"))},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},handleselect:function(t,e){}}}),I=O;var S=(0,l.Z)(I,g,v,!1,null,null,null);const T=S.exports;var A=[{path:"/",name:"",component:T,iconCls:"el-icon-menu",leaf:!0,children:[{path:"/",component:function(){return n.e(122).then(n.bind(n,1122))},name:"首页"}],meta:{title:"首页"},hidden:!1},{path:"/",name:"表单管理",component:T,iconCls:"el-icon-menu",leaf:!1,children:[{path:"/form",component:function(){return n.e(254).then(n.bind(n,9254))},name:"表单管理"},{path:"/form/add",component:function(){return n.e(8).then(n.bind(n,3008))},name:"添加表单",hidden:!0},{path:"/form/designer",component:function(){return n.e(582).then(n.bind(n,9582))},name:"设计表单",hidden:!0}],meta:{title:"表单管理"},hidden:!1},{path:"/",name:"用户管理",component:T,iconCls:"el-icon-menu",leaf:!1,children:[{path:"/user",component:function(){return n.e(952).then(n.bind(n,4952))},name:"用户列表"},{path:"/user/add",component:function(){return n.e(989).then(n.bind(n,5989))},name:"添加用户",hidden:!0}],meta:{title:"用户管理"}},{path:"/login",name:"Login",component:function(){return n.e(372).then(n.bind(n,1372))},meta:{title:"登录"},hidden:!0},{path:"/",component:T,name:"日志管理",iconCls:"el-icon-menu",children:[{path:"/log",component:function(){return n.e(1).then(n.bind(n,9001))},name:"登录日志"}]},{path:"/404",component:function(){return n.e(899).then(n.bind(n,2899))},name:"",hidden:!0},{path:"*",hidden:!0,redirect:{path:"/404"}}];const E=A;o["default"].use(h.ZP),o["default"].use(d.Z),o["default"].use(f.ZP),o["default"].use(m(),{size:"small"}),o["default"].http.options.emulateJSON=!0,o["default"].prototype.base="http://www.form.com/api/v1",o["default"].prototype.getId=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return Number(Math.random().toString().substr(3,t)+Date.now()).toString(36)};var P=d.Z.prototype.push;d.Z.prototype.push=function(t){return P.call(this,t).catch((function(t){return t}))};var j=new d.Z({base:"./",mode:"hash",routes:E});j.beforeEach((function(t,e,n){if(t.meta.title&&(document.title=t.meta.title),"/login"===t.path)n();else{var o=localStorage.getItem("userInfo");null===o||""===o?n("/login"):n()}}));var Z=new f.ZP.Store({state:{count:0,userInfo:localStorage.getItem("userInfo")?localStorage.getItem("userInfo"):""},mutations:{increment:function(t){t.count++},saveUserInfo:function(t,e){t.userInfo=e,localStorage.setItem("userInfo",e)},doLogout:function(t){t.userInfo="",localStorage.removeItem("userInfo")}}});o["default"].config.productionTip=!1,new o["default"]({router:j,store:Z,render:function(t){return t(c)}}).$mount("#app")},6608:()=>{}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,(()=>{var t=[];n.O=(e,o,r,a)=>{if(!o){var s=1/0;for(c=0;c<t.length;c++){for(var[o,r,a]=t[c],i=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((t=>n.O[t](o[l])))?o.splice(l--,1):(i=!1,a<s&&(s=a));if(i){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[o,r,a]}})(),(()=>{n.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return n.d(e,{a:e}),e}})(),(()=>{n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}})(),(()=>{n.f={},n.e=t=>Promise.all(Object.keys(n.f).reduce(((e,o)=>(n.f[o](t,e),e)),[]))})(),(()=>{n.u=t=>"static/js/"+t+"."+{1:"af7e9e8d",8:"c5cc5915",122:"ad4f80cc",254:"a73def73",372:"7e3619c7",582:"14222faa",899:"6f262eed",952:"3b41eb16",989:"92f641df"}[t]+".js"})(),(()=>{n.miniCssF=t=>"static/css/"+t+"."+{122:"45388bf8",372:"addd0a16",582:"c1033373",899:"bfa2e2f0"}[t]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={},e="default:";n.l=(o,r,a,s)=>{if(t[o])t[o].push(r);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+a){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+a),i.src=o),t[o]=[r];var h=(e,n)=>{i.onerror=i.onload=null,clearTimeout(f);var r=t[o];if(delete t[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((t=>t(n))),e)return e(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{n.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{n.p=""})(),(()=>{var t=(t,e,n,o)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=a=>{if(r.onerror=r.onload=null,"load"===a.type)n();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,r.parentNode.removeChild(r),o(l)}};return r.onerror=r.onload=a,r.href=e,document.head.appendChild(r),r},e=(t,e)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===t||a===e))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],a=r.getAttribute("data-href");if(a===t||a===e)return r}},o=o=>new Promise(((r,a)=>{var s=n.miniCssF(o),i=n.p+s;if(e(s,i))return r();t(o,i,r,a)})),r={143:0};n.f.miniCss=(t,e)=>{var n={122:1,372:1,582:1,899:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((()=>{r[t]=0}),(e=>{throw delete r[t],e})))}})(),(()=>{var t={143:0};n.f.j=(e,o)=>{var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise(((n,o)=>r=t[e]=[n,o]));o.push(r[2]=a);var s=n.p+n.u(e),i=new Error,l=o=>{if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,r[1](i)}};n.l(s,l,"chunk-"+e,e)}},n.O.j=e=>0===t[e];var e=(e,o)=>{var r,a,[s,i,l]=o,u=0;if(s.some((e=>0!==t[e]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var c=l(n)}for(e&&e(o);u<s.length;u++)a=s[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},o=self["webpackChunkdefault"]=self["webpackChunkdefault"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var o=n.O(void 0,[998],(()=>n(7396)));o=n.O(o)})();
//# sourceMappingURL=app.86f0bea9.js.map