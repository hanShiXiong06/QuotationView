(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-file-file"],{"31c9":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".image[data-v-2592387d]{width:100%;height:%?360?%}.btn-savefile[data-v-2592387d]{background-color:#007aff;color:#fff}",""]),t.exports=e},"381e":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return n}));var n={pageHead:a("829c").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t.tempFilePath?[a("v-uni-image",{staticClass:"image",attrs:{src:t.tempFilePath,mode:"aspectFit"}})]:t._e(),!t.tempFilePath&&t.savedFilePath?[a("v-uni-image",{staticClass:"image",attrs:{src:t.savedFilePath,mode:"aspectFit"}})]:t._e(),t.tempFilePath||t.savedFilePath?t._e():[a("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}},[t._v("+ 请选择文件")])],a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{staticClass:"btn-savefile",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveFile.apply(void 0,arguments)}}},[t._v("保存文件")]),a("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._v("删除文件")])],1),a("v-uni-view",{staticClass:"btn-area"},[a("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDocument.apply(void 0,arguments)}}},[t._v("打开pdf文件")])],1)],2)],1)},c=[]},"39a6":function(t,e,a){"use strict";var n=a("6e9a"),i=a.n(n);i.a},"6e9a":function(t,e,a){var n=a("31c9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("0162b9c8",n,!0,{sourceMap:!1,shadowMode:!1})},"74d0":function(t,e,a){"use strict";a.r(e);var n=a("381e"),i=a("c79f");for(var c in i)"default"!==c&&function(t){a.d(e,t,(function(){return i[t]}))}(c);a("39a6");var s,o=a("f0c5"),l=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"2592387d",null,!1,n["a"],s);e["default"]=l.exports},"8eb2":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"saveFile",tempFilePath:"",savedFilePath:""}},onLoad:function(){this.savedFilePath=uni.getStorageSync("savedFilePath")},methods:{chooseImage:function(){var t=this;uni.chooseImage({count:1,success:function(e){t.tempFilePath=e.tempFilePaths[0]},fail:function(t){}})},saveFile:function(){var t=this;this.tempFilePath.length>0?uni.saveFile({tempFilePath:this.tempFilePath,success:function(e){t.savedFilePath=e.savedFilePath,uni.setStorageSync("savedFilePath",e.savedFilePath),uni.showModal({title:"保存成功",content:"下次进入页面时，此文件仍可用",showCancel:!1})},fail:function(t){uni.showModal({title:"保存失败",content:"失败原因: "+JSON.stringify(t),showCancel:!1})}}):uni.showModal({content:"请选择文件",showCancel:!1})},clear:function(){uni.setStorageSync("savedFilePath",""),this.tempFilePath="",this.savedFilePath=""},openDocument:function(){uni.downloadFile({url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b3f1d0b0-5168-11eb-bd01-97bc1429a9ff.pdf",success:function(t){uni.openDocument({filePath:t.tempFilePath,success:function(){console.log("打开文档成功")}})}})}}};e.default=n},c79f:function(t,e,a){"use strict";a.r(e);var n=a("8eb2"),i=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a}}]);