(function(t){function e(e){for(var r,l,i=e[0],s=e[1],c=e[2],d=0,p=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},n={app:0},o=[];function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/oceanland/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1199:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("h2",[t._v(" Culculation Sheets ")])]),a("v-spacer"),a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({attrs:{color:"darkgrey lighten-2",dark:"",large:""}},"v-icon",n,!1),r),[t._v(" mdi-information-outline ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v(" 本計算シートについて ")]),a("v-card-text",[t._v(" 標高は国土地理院にて提供されるDEMデータから標高を求めるAPI「"),a("a",{attrs:{href:"https://maps.gsi.go.jp/development/elevation_s.html"}},[t._v("サーバサイドで経緯度から標高を求めるプログラム")]),t._v("」を用いている。 海率は海岸線データを平成十四年国土交通省告示第九号に定める"),a("a",{attrs:{href:"https://www.gsi.go.jp/LAW/heimencho.html"}},[t._v("平面直角座標系")]),t._v("に基づく投影方法にて投影し、算定したものである。なお、採用する平面座標系は告示別表の地域別ではなく簡単のため計算地点に最も近い座標系を採用する。 ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" OK ")])],1)],1)],1)],1),a("v-main",[a("router-view")],1)],1)},o=[],l={name:"App",components:{},data:function(){return{dialog:!1}}},i=l,s=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),p=a("40dc"),f=a("8336"),v=a("b0af"),m=a("99d9"),h=a("169a"),g=a("ce7e"),b=a("132d"),x=a("f6c4"),y=a("2fa4"),_=Object(s["a"])(i,n,o,!1,null,null,null),w=_.exports;u()(_,{VApp:d["a"],VAppBar:p["a"],VBtn:f["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VDialog:h["a"],VDivider:g["a"],VIcon:b["a"],VMain:x["a"],VSpacer:y["a"]});var V=a("f309");r["a"].use(V["a"]);var k=new V["a"]({}),C=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" 海率計算 ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" 積雪荷重計算のための任意地点から任意半径内の円の面積に対する海の面積の比率(海率)を計算する。 ")])])],1),a("v-row",[a("v-col",{staticClass:"mapplot pa-3",attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[t.loaded?a("v-img",{attrs:{"max-height":"450px",src:t.plot_src,contain:""}}):a("v-progress-circular",{attrs:{indeterminate:""}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",xs:"12",sm:"6",md:"3",lg:"3"}},[a("v-text-field",{attrs:{type:"number",label:"緯度",placeholder:"Longitude",suffix:"°"},model:{value:t.longitude,callback:function(e){t.longitude=e},expression:"longitude"}})],1),a("v-col",{attrs:{cols:"12",xs:"12",sm:"6",md:"3",lg:"3"}},[a("v-text-field",{attrs:{type:"number",label:"経度",placeholder:"Latitude",suffix:"°"},model:{value:t.latitude,callback:function(e){t.latitude=e},expression:"latitude"}})],1),a("v-col",{attrs:{cols:"12",xs:"12",sm:"6",md:"3",lg:"3"}},[a("v-text-field",{attrs:{type:"number",label:"半径",placeholder:"Radious",suffix:"km"},model:{value:t.radious,callback:function(e){t.radious=e},expression:"radious"}})],1),a("v-col",{attrs:{cols:"12",xs:"12",sm:"6",md:"3",lg:"3"}},[a("v-btn",{attrs:{elevation:"2"},on:{click:t.calculate}},[t._v(" calculate ")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{value:t.height,label:"海抜",suffix:"m",readonly:""}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{value:(100*t.rate).toFixed(5),label:"海率",suffix:"%",readonly:"",autofocus:"false"}})],1)],1)],1)],1)],1)],1)],1)},j=[],T=a("bc3a"),S=a.n(T),P={name:"HelloWorld",data:function(){return{loaded:!0,longitude:139.7454329,latitude:35.6585805,radious:40,height:0,rate:0,plot_src:"",apiurl:"https://fast-brushlands-96070.herokuapp.com/"}},mounted:function(){this.calculate()},methods:{calculate:function(){var t=this;this.loaded=!1,S.a.post(this.apiurl+"pos",{lon:String(this.longitude),lat:String(this.latitude),rad:String(this.radious)}).then((function(e){t.loaded=!0,t.height=e.data.elevation,t.rate=e.data.sea_ratio,t.plot_src="data:image/png;base64,"+e.data.image_src,console.log(e.data)}))}}},A=P,M=(a("6a9a"),a("62ad")),E=a("a523"),B=a("4bd4"),$=a("adda"),D=a("490a"),F=a("0fd9"),I=a("8654"),L=Object(s["a"])(A,O,j,!1,null,"e6a4fd76",null),J=L.exports;u()(L,{VBtn:f["a"],VCol:M["a"],VContainer:E["a"],VForm:B["a"],VImg:$["a"],VProgressCircular:D["a"],VRow:F["a"],VTextField:I["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",[a("v-textarea",{attrs:{name:"input-7-1",filled:"",label:"入力テキスト","auto-grow":""},model:{value:t.str,callback:function(e){t.str=e},expression:"str"}}),a("v-textarea",{attrs:{name:"input-7-1",filled:"",label:"変換テキスト","auto-grow":"",readonly:"true"},model:{value:t.fixed,callback:function(e){t.fixed=e},expression:"fixed"}}),a("v-btn",{attrs:{block:""},on:{click:t.copyText}},[t._v(" Copy Text ")])],1)])},W=[],H=(a("ac1f"),a("1276"),a("d3b7"),a("159b"),a("498a"),a("fb6a"),a("c7cd"),{name:"TextTransform",data:function(){return{str:"hel\nlo"}},computed:{fixed:function(){var t=this.str.split(/\n/),e="";return t.forEach((function(t){var a=t.trim();"-"==a[a.length-1]?e+=a.slice(0,a.length-2):(e+=" ",e+=a)})),e}},methods:{copyText:function(){navigator.clipboard.writeText(this.fixed)}}}),K=H,q=a("a844"),z=Object(s["a"])(K,R,W,!1,null,null,null),G=z.exports;u()(z,{VBtn:f["a"],VContainer:E["a"],VTextarea:q["a"]}),r["a"].use(C["a"]);var N=new C["a"]({mode:"history",routes:[{path:"/",name:"home",component:J},{path:"/text",name:"text",component:G}]});r["a"].config.productionTip=!1,new r["a"]({router:N,vuetify:k,render:function(t){return t(w)}}).$mount("#app")},"6a9a":function(t,e,a){"use strict";a("1199")}});
//# sourceMappingURL=app.094ef9da.js.map