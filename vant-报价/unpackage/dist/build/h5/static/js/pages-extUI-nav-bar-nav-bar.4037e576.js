(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-nav-bar-nav-bar"],{"1f90":function(t,n,i){"use strict";i.r(n);var e=i("6113"),a=i("b78c");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("8228");var c,s=i("f0c5"),l=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"f7744914",null,!1,e["a"],c);n["default"]=l.exports},6113:function(t,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var e={uniNavBar:i("3f2c").default,uniCard:i("1ba5").default,uniSection:i("ba3c").default,uniIcons:i("7790").default},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"container"},[i("uni-nav-bar",{attrs:{fixed:!0,color:"#ffffff","background-color":"#007AFF","status-bar":!0,"left-icon":"arrowleft","left-text":"返回",title:"uni-nav-bar 标题"},on:{clickLeft:function(n){arguments[0]=n=t.$handleEvent(n),t.back.apply(void 0,arguments)}}}),i("uni-card",{attrs:{"is-full":!0,isShadow:!1}},[i("v-uni-text",{staticClass:"uni-h6"},[t._v("本导航栏为自定义组件，并非原生导航栏。除非原生导航栏无法满足需求，否则不推荐使用自定义导航栏组件。具体参考https://ask.dcloud.net.cn/article/34921")])],1),i("uni-section",{staticStyle:{"margin-bottom":"3px"},attrs:{title:"基本用法",type:"line"}},[i("uni-nav-bar",{attrs:{"left-icon":"left",title:"标题"},on:{clickLeft:function(n){arguments[0]=n=t.$handleEvent(n),t.back.apply(void 0,arguments)}}})],1),i("uni-section",{staticStyle:{"margin-bottom":"3px"},attrs:{title:"左右显示文字",type:"line"}},[i("uni-nav-bar",{attrs:{"left-icon":"left","right-text":"菜单","left-text":"返回",title:"标题"},on:{clickLeft:function(n){arguments[0]=n=t.$handleEvent(n),t.back.apply(void 0,arguments)}}})],1),i("uni-section",{staticStyle:{"margin-bottom":"3px"},attrs:{title:"插入slot",type:"line"}},[i("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-icon":"scan"},on:{clickLeft:function(n){arguments[0]=n=t.$handleEvent(n),t.showCity.apply(void 0,arguments)},clickRight:function(n){arguments[0]=n=t.$handleEvent(n),t.scan.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"left"},slot:"left"},[i("v-uni-view",{staticClass:"city"},[i("v-uni-view",[i("v-uni-text",{staticClass:"uni-nav-bar-text"},[t._v(t._s(t.city))])],1),i("uni-icons",{attrs:{type:"arrowdown",color:"#333333",size:"22"}})],1)],1),i("v-uni-view",{staticClass:"input-view"},[i("uni-icons",{staticClass:"input-uni-icon",attrs:{type:"search",size:"18",color:"#999"}}),i("v-uni-input",{staticClass:"nav-bar-input",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.confirm.apply(void 0,arguments)}}})],1)],2)],1)],1)},o=[]},"6b5c":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={components:{},data:function(){return{city:"北京"}},methods:{back:function(){uni.navigateBack({delta:1})},showMenu:function(){uni.showToast({title:"菜单"})},clickLeft:function(){uni.showToast({title:"左侧按钮"})},search:function(){uni.showToast({title:"搜索"})},showCity:function(){uni.showToast({title:"选择城市"})},scan:function(){uni.showToast({title:"扫码"})},confirm:function(){uni.showToast({title:"搜索"})}},onPullDownRefresh:function(){console.log("onPullDownRefresh"),setTimeout((function(){uni.stopPullDownRefresh(),console.log("stopPullDownRefresh")}),1e3)}};n.default=e},8228:function(t,n,i){"use strict";var e=i("b6cd"),a=i.n(e);a.a},b6cd:function(t,n,i){var e=i("bbcd");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("3d32f8c4",e,!0,{sourceMap:!1,shadowMode:!1})},b78c:function(t,n,i){"use strict";i.r(n);var e=i("6b5c"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},bbcd:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-f7744914]{height:120%}.uni-nav-bar-text[data-v-f7744914]{font-size:12px}.city[data-v-f7744914]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin-left:4px}.input-view[data-v-f7744914]{display:flex;flex-direction:row;flex:1;background-color:#f8f8f8;height:30px;border-radius:15px;padding:0 15px;flex-wrap:nowrap;margin:7px 0;line-height:30px}.input-uni-icon[data-v-f7744914]{line-height:30px}.nav-bar-input[data-v-f7744914]{height:30px;line-height:30px;padding:0 5px;font-size:14px;background-color:#f8f8f8}.example-body[data-v-f7744914]{display:block;padding:0}',""]),t.exports=n}}]);