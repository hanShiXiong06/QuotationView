(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-group-group"],{"00ea":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniGroup",emits:["click"],props:{title:{type:String,default:""},top:{type:[Number,String],default:10},mode:{type:String,default:"default"}},data:function(){return{margin:!1,border:!1}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},created:function(){this.form=this.getForm(),this.form&&(this.margin=!0,this.border=this.form.border)},methods:{getForm:function(){var t=this.$parent,e=t.$options.name;while("uniForms"!==e){if(t=t.$parent,!t)return!1;e=t.$options.name}return t},onClick:function(){this.$emit("click")}}};e.default=i},"096e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#333"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"0e08":function(t,e,n){"use strict";n.r(e);var i=n("096e"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"1ba5":function(t,e,n){"use strict";n.r(e);var i=n("85ae"),a=n("e049");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("458c");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"091fa34a",null,!1,i["a"],o);e["default"]=c.exports},"2e53":function(t,e,n){"use strict";n.r(e);var i=n("2fc1"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"2f7a":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-group",class:["uni-group--"+t.mode,t.margin?"group-margin":""],style:{marginTop:t.top+"px"}},[t._t("title",[t.title?n("v-uni-view",{staticClass:"uni-group__title",style:{"padding-left":t.border?"30px":"15px"}},[n("v-uni-text",{staticClass:"uni-group__title-text"},[t._v(t._s(t.title))])],1):t._e()]),n("v-uni-view",{staticClass:"uni-group__content",class:{"group-conent-padding":t.border}},[t._t("default")],2)],2)},r=[]},"2fc1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},data:function(){return{appear:!1,name:"",mobile:"139 9999 9999",weixin:"sskd",message:"",errorMessage:""}},onReady:function(){},methods:{}};e.default=i},"458c":function(t,e,n){"use strict";var i=n("f1db"),a=n.n(i);a.a},7337:function(t,e,n){var i=n("9587");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("62b8fac6",i,!0,{sourceMap:!1,shadowMode:!1})},"85ae":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?n("v-uni-view",{staticClass:"uni-card__cover"},[n("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?n("v-uni-view",{staticClass:"uni-card__header"},[n("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?n("v-uni-view",{staticClass:"uni-card__header-avatar"},[n("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),n("v-uni-view",{staticClass:"uni-card__header-content"},[n("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?n("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),n("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[n("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),n("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),n("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},"88c3":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniCard:n("1ba5").default,uniSection:n("ba3c").default,uniGroup:n("e2ff").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[n("v-uni-text",{staticClass:"uni-h6"},[t._v("分组组件可用于将组件分组，添加间隔，以产生明显的区块。")])],1),n("uni-section",{attrs:{title:"基础分组",type:"line"}},[n("uni-group",[n("v-uni-view",[t._v("分组内容")]),n("v-uni-view",[t._v("分组内容")]),n("v-uni-view",[t._v("分组内容")]),n("v-uni-view",[t._v("分组内容")])],1),n("uni-group",{attrs:{title:"基本模式","margin-top":"20"}},[n("v-uni-view",[t._v("分组内容")]),n("v-uni-view",[t._v("分组内容")]),n("v-uni-view",[t._v("分组内容")]),n("v-uni-view",[t._v("分组内容")])],1)],1),n("uni-section",{attrs:{title:"卡片分组",type:"line"}},[n("uni-group",{attrs:{mode:"card"}},[n("v-uni-view",[t._v("分组内容")]),n("v-uni-view",[t._v("分组内容")]),n("v-uni-view",[t._v("分组内容")]),n("v-uni-view",[t._v("分组内容")])],1),n("uni-group",{attrs:{title:"card 模式",mode:"card"}},[n("v-uni-view",[t._v("分组内容")]),n("v-uni-view",[t._v("分组内容")]),n("v-uni-view",[t._v("分组内容")]),n("v-uni-view",[t._v("分组内容")])],1)],1)],1)},r=[]},"89a9":function(t,e,n){"use strict";var i=n("ad63"),a=n.n(i);a.a},9587:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-wrap[data-v-978da922]{flex-direction:column;height:calc(100vh - 44px);flex:1}.scroll[data-v-978da922]{flex-direction:column;flex:1}.example-body[data-v-978da922]{padding:0;display:block}',""]),t.exports=e},"99d2":function(t,e,n){"use strict";n.r(e);var i=n("88c3"),a=n("2e53");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("b25c");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"978da922",null,!1,i["a"],o);e["default"]=c.exports},a474:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-card[data-v-091fa34a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-091fa34a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-091fa34a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-091fa34a]{display:flex;border-bottom:1px #ebeef5 solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-091fa34a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-091fa34a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-091fa34a]{flex:1;width:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-091fa34a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-091fa34a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-091fa34a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-091fa34a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-091fa34a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-091fa34a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-091fa34a]{font-size:12px}.uni-card--border[data-v-091fa34a]{border:1px solid #ebeef5}.uni-card--shadow[data-v-091fa34a]{position:relative;box-shadow:0 0 6px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-091fa34a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-091fa34a]:after{border-radius:0}.uni-ellipsis[data-v-091fa34a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},ad63:function(t,e,n){var i=n("f16f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4d2df202",i,!0,{sourceMap:!1,shadowMode:!1})},b25c:function(t,e,n){"use strict";var i=n("7337"),a=n.n(i);a.a},b42c:function(t,e,n){"use strict";var i=n("ec92"),a=n.n(i);a.a},ba3c:function(t,e,n){"use strict";n.r(e);var i=n("c48c"),a=n("0e08");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("89a9");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"0839e28e",null,!1,i["a"],o);e["default"]=c.exports},be99:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=i},c48c:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section"},[n("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle},style:{color:t.color}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),n("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},r=[]},e049:function(t,e,n){"use strict";n.r(e);var i=n("be99"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},e2ff:function(t,e,n){"use strict";n.r(e);var i=n("2f7a"),a=n("e9cf");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("b42c");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"bea39e20",null,!1,i["a"],o);e["default"]=c.exports},e9cf:function(t,e,n){"use strict";n.r(e);var i=n("00ea"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},ec92:function(t,e,n){var i=n("f5fd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("23c5bf0c",i,!0,{sourceMap:!1,shadowMode:!1})},f16f:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-section[data-v-0839e28e]{background-color:#fff;margin-top:10px}.uni-section-header[data-v-0839e28e]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-0839e28e]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-0839e28e]{height:12px;background-color:#2979ff;border-radius:10px;width:4px}.circle[data-v-0839e28e]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#2979ff}.uni-section__content[data-v-0839e28e]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-0839e28e]{font-size:14px;color:#2979ff}.distraction[data-v-0839e28e]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-0839e28e]{font-size:12px;color:#999;line-height:16px;margin-top:2px}',""]),t.exports=e},f1db:function(t,e,n){var i=n("a474");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6f514208",i,!0,{sourceMap:!1,shadowMode:!1})},f5fd:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-group[data-v-bea39e20]{background:#fff;margin-top:10px}.uni-group__title[data-v-bea39e20]{display:flex;flex-direction:row;align-items:center;padding-left:15px;height:40px;background-color:#f8f8f8;font-weight:400;color:#333}.uni-group__content[data-v-bea39e20]{padding:15px}.group-conent-padding[data-v-bea39e20]{padding:0 15px}.uni-group__title-text[data-v-bea39e20]{font-size:14px;color:#333}.distraction[data-v-bea39e20]{flex-direction:row;align-items:center}.uni-group--card[data-v-bea39e20]{margin:10px;border-radius:5px;overflow:hidden;box-shadow:0 0 5px 1px rgba(0,0,0,.08)}',""]),t.exports=e}}]);