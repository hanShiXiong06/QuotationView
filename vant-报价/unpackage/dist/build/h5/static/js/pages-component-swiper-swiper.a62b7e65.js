(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-swiper-swiper"],{"0513":function(i,t,n){"use strict";n.r(t);var a=n("c4b8"),e=n.n(a);for(var s in a)"default"!==s&&function(i){n.d(t,i,(function(){return a[i]}))}(s);t["default"]=e.a},3974:function(i,t,n){"use strict";n.r(t);var a=n("c1e1"),e=n("0513");for(var s in e)"default"!==s&&function(i){n.d(t,i,(function(){return e[i]}))}(s);n("7eda");var u,o=n("f0c5"),r=Object(o["a"])(e["default"],a["b"],a["c"],!1,null,"600be188",null,!1,a["a"],u);t["default"]=r.exports},"7eda":function(i,t,n){"use strict";var a=n("92aa"),e=n.n(a);e.a},"92aa":function(i,t,n){var a=n("c317");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var e=n("4f06").default;e("581921fd",a,!0,{sourceMap:!1,shadowMode:!1})},c1e1:function(i,t,n){"use strict";n.d(t,"b",(function(){return e})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));var a={pageHead:n("829c").default},e=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:"swiper,可滑动视图"}}),n("v-uni-view",{staticClass:"uni-margin-wrap"},[n("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,"indicator-dots":i.indicatorDots,autoplay:i.autoplay,interval:i.interval,duration:i.duration}},[n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item uni-bg-red"},[i._v("A")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item uni-bg-green"},[i._v("B")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item uni-bg-blue"},[i._v("C")])],1)],1)],1),n("v-uni-view",{staticClass:"swiper-list"},[n("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"uni-list-cell-db"},[i._v("指示点")]),n("v-uni-switch",{attrs:{checked:i.indicatorDots},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.changeIndicatorDots.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"uni-list-cell-db"},[i._v("自动播放")]),n("v-uni-switch",{attrs:{checked:i.autoplay},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.changeAutoplay.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-text",[i._v("幻灯片切换时长(ms)")]),n("v-uni-text",{staticClass:"info"},[i._v(i._s(i.duration))])],1),n("v-uni-slider",{attrs:{value:i.duration,min:"500",max:"2000"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.durationChange.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-text",[i._v("自动播放间隔时长(ms)")]),n("v-uni-text",{staticClass:"info"},[i._v(i._s(i.interval))])],1),n("v-uni-slider",{attrs:{value:i.interval,min:"2000",max:"10000"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.intervalChange.apply(void 0,arguments)}}})],1)],1)},s=[]},c317:function(i,t,n){var a=n("24fb");t=a(!1),t.push([i.i,".uni-margin-wrap[data-v-600be188]{width:%?690?%;width:100%}.swiper[data-v-600be188]{height:%?300?%}.swiper-item[data-v-600be188]{display:block;height:%?300?%;line-height:%?300?%;text-align:center}.swiper-list[data-v-600be188]{margin-top:%?40?%;margin-bottom:0}.uni-common-mt[data-v-600be188]{margin-top:%?60?%;position:relative}.info[data-v-600be188]{position:absolute;right:%?20?%}.uni-padding-wrap[data-v-600be188]{width:%?550?%;padding:0 %?100?%}",""]),i.exports=t},c4b8:function(i,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{changeIndicatorDots:function(i){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(i){this.autoplay=!this.autoplay},intervalChange:function(i){this.interval=i.detail.value},durationChange:function(i){this.duration=i.detail.value}}};t.default=a}}]);