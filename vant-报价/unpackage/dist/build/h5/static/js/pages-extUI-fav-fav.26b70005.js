(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-fav-fav"],{"0e3d":function(t){t.exports=JSON.parse('{"uni-fav.collect":"收藏","uni-fav.collected":"已收藏"}')},2983:function(t){t.exports=JSON.parse('{"uni-fav.collect":"收藏","uni-fav.collected":"已收藏"}')},"2e38":function(t,e,n){"use strict";var c=n("9cda"),a=n.n(c);a.a},"2eaf":function(t,e,n){"use strict";var c=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("37dc"),i=c(n("b64b5")),o=(0,a.initVueI18n)(i.default),r=o.t,l={name:"UniFav",emits:["click"],props:{star:{type:[Boolean,String],default:!0},bgColor:{type:String,default:"#eeeeee"},fgColor:{type:String,default:"#666666"},bgColorChecked:{type:String,default:"#007aff"},fgColorChecked:{type:String,default:"#FFFFFF"},circle:{type:[Boolean,String],default:!1},checked:{type:Boolean,default:!1},contentText:{type:Object,default:function(){return{contentDefault:"",contentFav:""}}}},computed:{contentDefault:function(){return this.contentText.contentDefault||r("uni-fav.collect")},contentFav:function(){return this.contentText.contentFav||r("uni-fav.collected")}},watch:{checked:function(){uni.report&&(this.checked?uni.report("收藏","收藏"):uni.report("取消收藏","取消收藏"))}},methods:{onClick:function(){this.$emit("click")}}};e.default=l},"31f3":function(t,e,n){"use strict";n.r(e);var c=n("e0e3"),a=n("a649");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("a13a");var o,r=n("f0c5"),l=Object(r["a"])(a["default"],c["b"],c["c"],!1,null,"b704cbf8",null,!1,c["a"],o);e["default"]=l.exports},"393dd":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return c}));var c={uniIcons:n("7790").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-fav",class:[!0===t.circle||"true"===t.circle?"uni-fav--circle":""],style:[{backgroundColor:t.checked?t.bgColorChecked:t.bgColor}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.checked||!0!==t.star&&"true"!==t.star?t._e():n("uni-icons",{staticClass:"uni-fav-star",style:{color:t.checked?t.fgColorChecked:t.fgColor},attrs:{color:t.fgColor,size:"14",type:"star-filled"}}),n("v-uni-text",{staticClass:"uni-fav-text",style:{color:t.checked?t.fgColorChecked:t.fgColor}},[t._v(t._s(t.checked?t.contentFav:t.contentDefault))])],1)},i=[]},"3e7b":function(t,e,n){var c=n("dddd");"string"===typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);var a=n("4f06").default;a("232118ac",c,!0,{sourceMap:!1,shadowMode:!1})},"5d3b":function(t,e,n){var c=n("24fb");e=c(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-fav[data-v-77247da2]{display:flex;flex-direction:row;align-items:center;justify-content:center;width:60px;height:25px;line-height:25px;text-align:center;border-radius:3px;cursor:pointer}.uni-fav--circle[data-v-77247da2]{border-radius:30px}.uni-fav-star[data-v-77247da2]{display:flex;height:25px;line-height:24px;margin-right:3px;align-items:center;justify-content:center}.uni-fav-text[data-v-77247da2]{display:flex;height:25px;line-height:25px;align-items:center;justify-content:center;font-size:12px}',""]),t.exports=e},"8f51":function(t,e,n){"use strict";n.r(e);var c=n("2eaf"),a=n.n(c);for(var i in c)"default"!==i&&function(t){n.d(e,t,(function(){return c[t]}))}(i);e["default"]=a.a},"98a0":function(t,e,n){"use strict";n.r(e);var c=n("393dd"),a=n("8f51");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("2e38");var o,r=n("f0c5"),l=Object(r["a"])(a["default"],c["b"],c["c"],!1,null,"77247da2",null,!1,c["a"],o);e["default"]=l.exports},"9cda":function(t,e,n){var c=n("5d3b");"string"===typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);var a=n("4f06").default;a("6f1c3db1",c,!0,{sourceMap:!1,shadowMode:!1})},a13a:function(t,e,n){"use strict";var c=n("3e7b"),a=n.n(c);a.a},a508:function(t){t.exports=JSON.parse('{"uni-fav.collect":"collect","uni-fav.collected":"collected"}')},a649:function(t,e,n){"use strict";n.r(e);var c=n("ff03"),a=n.n(c);for(var i in c)"default"!==i&&function(t){n.d(e,t,(function(){return c[t]}))}(i);e["default"]=a.a},b64b5:function(t,e,n){"use strict";var c=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("a508")),i=c(n("2983")),o=c(n("0e3d")),r={en:a.default,"zh-Hans":i.default,"zh-Hant":o.default};e.default=r},dddd:function(t,e,n){var c=n("24fb");e=c(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.example-body[data-v-b704cbf8]{display:flex;padding:10px 15px}.favBtn[data-v-b704cbf8]{margin:0 %?20?% %?20?% 0}.example-body-fullWidth[data-v-b704cbf8]{padding:%?32?% 0}.example-body-first[data-v-b704cbf8]{display:flex;flex-direction:row;justify-content:flex-start}',""]),t.exports=e},e0e3:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return c}));var c={uniCard:n("1ba5").default,uniSection:n("ba3c").default,uniFav:n("98a0").default,uniNavBar:n("3f2c").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("uni-card",{attrs:{"is-full":!0,"is-shadow":!1}},[n("v-uni-text",{staticClass:"uni-h6"},[t._v("用于收藏功能，可点击切换选中、不选中的状态。")])],1),n("uni-section",{attrs:{title:"基本用法",type:"line"}},[n("v-uni-view",{staticClass:"example-body"},[n("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[0]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(0)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[1],star:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(1)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[2],circle:!0,"bg-color":"#dd524d","bg-color-checked":"#007aff","fg-color":"#ffffff","fg-color-checked":"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(2)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[3],"bg-color":"#f8f8f8","bg-color-checked":"#eeeeee","fg-color":"#333333","fg-color-checked":"#333333"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(3)}}})],1)],1),n("uni-section",{attrs:{title:"自定义文字",type:"line"}},[n("v-uni-view",{staticClass:"example-body"},[n("uni-fav",{attrs:{checked:t.checkList[4],"content-text":t.contentText},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(4)}}})],1)],1),n("uni-section",{attrs:{title:"在自定义导航栏使用",type:"line"}},[n("uni-nav-bar",{staticStyle:{width:"100%"},attrs:{fixed:!1,"left-icon":"left",title:"标题",color:"#333333","background-color":"#FFFFFF"},scopedSlots:t._u([{key:"right",fn:function(){return[n("uni-fav",{attrs:{checked:t.checkList[5],circle:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(5)}}})]},proxy:!0}])})],1),n("v-uni-view",{staticClass:"example-body example-body-fullWidth"})],1)},i=[]},ff03:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c={components:{},data:function(){return{checkList:[!1,!1,!1,!1,!1,!1],contentText:{contentDefault:"追番",contentFav:"已追番"}}},methods:{favClick:function(t){this.checkList[t]=!this.checkList[t],console.log(this.checkList[t]),this.$forceUpdate()}}};e.default=c}}]);