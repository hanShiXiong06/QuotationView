(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-web-view-web-view"],{"25e6":function(e,n,t){"use strict";t.r(n);var u=t("ea4a"),a=t("d889");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);var r,o=t("f0c5"),c=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,"0d1ddc5d",null,!1,u["a"],r);n["default"]=c.exports},d889:function(e,n,t){"use strict";t.r(n);var u=t("ef4a"),a=t.n(u);for(var i in u)"default"!==i&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=a.a},ea4a:function(e,n,t){"use strict";var u;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return u}));var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("v-uni-web-view",{attrs:{src:e.url},on:{message:function(n){arguments[0]=n=e.$handleEvent(n),e.getMessage.apply(void 0,arguments)}}})],1)},i=[]},ef4a:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{url:"https://uniapp.dcloud.io/static/web-view.html"}},onLoad:function(e){e&&e.url&&(this.url=e.url)},methods:{getMessage:function(e){uni.showModal({content:JSON.stringify(e.detail),showCancel:!1})}}};n.default=u}}]);