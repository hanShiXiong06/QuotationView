(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-location-get-location"],{"10d1":function(t,e,n){"use strict";var i,r=n("da84"),o=n("e2cc"),a=n("f183"),u=n("6d61"),c=n("acac"),s=n("861d"),f=n("69f3").enforce,l=n("7f9a"),p=!r.ActiveXObject&&"ActiveXObject"in r,d=Object.isExtensible,v=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},h=t.exports=u("WeakMap",v,c);if(l&&p){i=c.getConstructor(v,"WeakMap",!0),a.REQUIRED=!0;var g=h.prototype,b=g["delete"],m=g.has,w=g.get,y=g.set;o(g,{delete:function(t){if(s(t)&&!d(t)){var e=f(this);return e.frozen||(e.frozen=new i),b.call(this,t)||e.frozen["delete"](t)}return b.call(this,t)},has:function(t){if(s(t)&&!d(t)){var e=f(this);return e.frozen||(e.frozen=new i),m.call(this,t)||e.frozen.has(t)}return m.call(this,t)},get:function(t){if(s(t)&&!d(t)){var e=f(this);return e.frozen||(e.frozen=new i),m.call(this,t)?w.call(this,t):e.frozen.get(t)}return w.call(this,t)},set:function(t,e){if(s(t)&&!d(t)){var n=f(this);n.frozen||(n.frozen=new i),m.call(this,t)?y.call(this,t,e):n.frozen.set(t,e)}else y.call(this,t,e);return this}})}},"29b6":function(t,e,n){"use strict";var i=n("dbce"),r=n("4ea4");n("c975"),n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=r(n("1da1")),a=i(n("b521")),u=a.formatLocation,c={data:function(){return{title:"getLocation",hasLocation:!1,location:{},type:""}},methods:{togglePopup:function(t){this.type=t},showConfirm:function(){this.type="showpopup"},hideConfirm:function(){this.type=""},getLocation:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.doGetLocation();case 1:case"end":return e.stop()}}),e)})))()},doGetLocation:function(){var t=this;uni.getLocation({success:function(e){t.hasLocation=!0,t.location=u(e.longitude,e.latitude)},fail:function(t){t.errMsg.indexOf("auth deny")>=0?uni.showToast({title:"访问位置被拒绝"}):uni.showToast({title:t.errMsg})}})},getSetting:function(){return new Promise((function(t,e){uni.getSetting({success:function(e){void 0!==e.authSetting["scope.userLocation"]?e.authSetting["scope.userLocation"]?t(1):t(2):t(0)}})}))},openSetting:function(){var t=this;this.hideConfirm(),uni.openSetting({success:function(e){e.authSetting&&e.authSetting["scope.userLocation"]&&t.doGetLocation()},fail:function(t){}})},checkPermission:function(){return(0,o.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!permision.isIOS){t.next=6;break}return t.next=3,permision.requestIOS("location");case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,permision.requestAndroid("android.permission.ACCESS_FINE_LOCATION");case 8:t.t0=t.sent;case 9:return e=t.t0,null===e||1===e?e=1:2===e?uni.showModal({content:"系统定位已关闭",confirmText:"确定",showCancel:!1,success:function(t){}}):e.code?uni.showModal({content:e.message}):uni.showModal({content:"需要定位权限",confirmText:"设置",success:function(t){t.confirm&&permision.gotoAppSetting()}}),t.abrupt("return",e);case 12:case"end":return t.stop()}}),t)})))()},clear:function(){this.hasLocation=!1}}};e.default=c},3230:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={pageHead:n("829c").default,uniPopup:n("6fcd").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40rpx"}},[n("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("当前位置经纬度")]),!1===t.hasLocation?[n("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未获取")])]:t._e(),!0===t.hasLocation?[n("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[n("v-uni-text",[t._v("E: "+t._s(t.location.longitude[0])+"°"+t._s(t.location.longitude[1])+"′")]),n("v-uni-text",[t._v("\\nN: "+t._s(t.location.latitude[0])+"°"+t._s(t.location.latitude[1])+"′")])],1)]:t._e()],2),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getLocation.apply(void 0,arguments)}}},[t._v("获取位置")]),n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._v("清空")])],1)],1),n("uni-popup",{attrs:{show:"showpopup"===t.type,mode:"fixed"},on:{hidePopup:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("")}}},[n("v-uni-view",{staticClass:"popup-view"},[n("v-uni-text",{staticClass:"popup-title"},[t._v("需要用户授权位置权限")]),n("v-uni-view",{staticClass:"uni-flex popup-buttons"},[n("v-uni-button",{staticClass:"uni-flex-item",attrs:{type:"primary","open-type":"openSetting"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openSetting.apply(void 0,arguments)}}},[t._v("设置")]),n("v-uni-button",{staticClass:"uni-flex-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("")}}},[t._v("取消")])],1)],1)],1)],1)},o=[]},"6d61":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("94ca"),a=n("6eeb"),u=n("f183"),c=n("2266"),s=n("19aa"),f=n("861d"),l=n("d039"),p=n("1c7e"),d=n("d44e"),v=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),b=h?"set":"add",m=r[t],w=m&&m.prototype,y=m,x={},S=function(t){var e=w[t];a(w,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!f(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof m||!(g||w.forEach&&!l((function(){(new m).entries().next()})))))y=n.getConstructor(e,t,h,b),u.REQUIRED=!0;else if(o(t,!0)){var O=new y,_=O[b](g?{}:-0,1)!=O,k=l((function(){O.has(1)})),E=p((function(t){new m(t)})),C=!g&&l((function(){var t=new m,e=5;while(e--)t[b](e,e);return!t.has(-0)}));E||(y=e((function(e,n){s(e,y,t);var i=v(new m,e,y);return void 0!=n&&c(n,i[b],i,h),i})),y.prototype=w,w.constructor=y),(k||C)&&(S("delete"),S("has"),h&&S("get")),(C||_)&&S(b),g&&w.clear&&delete w.clear}return x[t]=y,i({global:!0,forced:y!=m},x),d(y,t),g||n.setStrong(y,t,h),y}},7037:function(t,e,n){function i(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=i=function(t){return typeof t}:t.exports=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(e)}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),t.exports=i},a7ed:function(t,e,n){var i=n("b37b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("485be56c",i,!0,{sourceMap:!1,shadowMode:!1})},acac:function(t,e,n){"use strict";var i=n("e2cc"),r=n("f183").getWeakData,o=n("825a"),a=n("861d"),u=n("19aa"),c=n("2266"),s=n("b727"),f=n("5135"),l=n("69f3"),p=l.set,d=l.getterFor,v=s.find,h=s.findIndex,g=0,b=function(t){return t.frozen||(t.frozen=new m)},m=function(){this.entries=[]},w=function(t,e){return v(t.entries,(function(t){return t[0]===e}))};m.prototype={get:function(t){var e=w(this,t);if(e)return e[1]},has:function(t){return!!w(this,t)},set:function(t,e){var n=w(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=h(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,s){var l=t((function(t,i){u(t,l,e),p(t,{type:e,id:g++,frozen:void 0}),void 0!=i&&c(i,t[s],t,n)})),v=d(e),h=function(t,e,n){var i=v(t),a=r(o(e),!0);return!0===a?b(i).set(e,n):a[i.id]=n,t};return i(l.prototype,{delete:function(t){var e=v(this);if(!a(t))return!1;var n=r(t);return!0===n?b(e)["delete"](t):n&&f(n,e.id)&&delete n[e.id]},has:function(t){var e=v(this);if(!a(t))return!1;var n=r(t);return!0===n?b(e).has(t):n&&f(n,e.id)}}),i(l.prototype,n?{get:function(t){var e=v(this);if(a(t)){var n=r(t);return!0===n?b(e).get(t):n?n[e.id]:void 0}},set:function(t,e){return h(this,t,e)}}:{add:function(t){return h(this,t,!0)}}),l}}},af93:function(t,e,n){"use strict";n.r(e);var i=n("29b6"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},b37b:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".popup-view[data-v-7a7c9a86]{width:%?500?%}.popup-title[data-v-7a7c9a86]{display:block;font-size:16px;line-height:3;margin-bottom:10px;text-align:center}.popup-buttons uni-button[data-v-7a7c9a86]{margin-left:4px;margin-right:4px}",""]),t.exports=e},b521:function(t,e,n){"use strict";function i(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var n=parseInt(t/60);t%=60;var i=t;return[e,n,i].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function r(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}n("d81d"),n("d3b7"),n("acd8"),n("e25e"),n("ac1f"),n("25f0"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.formatTime=i,e.formatLocation=r,e.dateUtils=void 0;var o={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var n in this.UNITS)if(t>=this.UNITS[n]){e=Math.floor(t/this.UNITS[n])+n+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),n=Date.now()-e.getTime();if(n<this.UNITS["天"])return this.humanize(n);var i=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+i(e.getMonth()+1)+"/"+i(e.getDate())+"-"+i(e.getHours())+":"+i(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};e.dateUtils=o},bb2f:function(t,e,n){var i=n("d039");t.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d48d:function(t,e,n){"use strict";var i=n("a7ed"),r=n.n(i);r.a},dbce:function(t,e,n){n("e439"),n("d3b7"),n("3ca3"),n("10d1"),n("ddb0");var i=n("7037");function r(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}function o(t){if(t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!==typeof t)return{default:t};var e=r();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var u=o?Object.getOwnPropertyDescriptor(t,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=t[a]}return n["default"]=t,e&&e.set(t,n),n}t.exports=o},f00f:function(t,e,n){"use strict";n.r(e);var i=n("3230"),r=n("af93");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("d48d");var a,u=n("f0c5"),c=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"7a7c9a86",null,!1,i["a"],a);e["default"]=c.exports},f183:function(t,e,n){var i=n("d012"),r=n("861d"),o=n("5135"),a=n("9bf2").f,u=n("90e3"),c=n("bb2f"),s=u("meta"),f=0,l=Object.isExtensible||function(){return!0},p=function(t){a(t,s,{value:{objectID:"O"+ ++f,weakData:{}}})},d=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,s)){if(!l(t))return"F";if(!e)return"E";p(t)}return t[s].objectID},v=function(t,e){if(!o(t,s)){if(!l(t))return!0;if(!e)return!1;p(t)}return t[s].weakData},h=function(t){return c&&g.REQUIRED&&l(t)&&!o(t,s)&&p(t),t},g=t.exports={REQUIRED:!1,fastKey:d,getWeakData:v,onFreeze:h};i[s]=!0}}]);