webpackJsonp([3],{"+W1Z":function(t,e){},"4FU0":function(t,e){},"8Z9+":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"scrollimg",function(){return E}),n.d(i,"spikeGoods",function(){return I});var s={};n.d(s,"loadImg",function(){return H}),n.d(s,"spikeimg",function(){return N}),n.d(s,"splikeTime",function(){return A}),n.d(s,"quantityCount",function(){return D}),n.d(s,"handlePay",function(){return U});var o={};n.d(o,"spikeHours",function(){return V}),n.d(o,"spikeMinutes",function(){return B}),n.d(o,"spikeSeconds",function(){return T});var a=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=n("VU/8")({name:"App"},r,!1,function(t){n("8Z9+")},null,null).exports,u=n("zL8q"),l=n.n(u),d=(n("tvR6"),n("/ocq")),p=n("mvHQ"),g=n.n(p),m=window.localStorage,f={data:function(){return{loginMSG:{},rules:{accoutNum:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{handleLogin:function(){var t=this;this.$refs.ruleForm.validate(function(e){if(!e)return!1;t.$message.success("登陆成功！"),m.setItem("SaveAccount",g()(t.loginMSG)),t.$router.push({path:"/"})})},handleRegister:function(){this.$message.info("暂时未开发...")}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content"},[n("div",{staticClass:"logo"},[n("h3",[t._v("欢迎登陆")]),t._v(" "),t._m(0),t._v(" "),n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.loginMSG,rules:t.rules}},[n("el-form-item",{attrs:{prop:"accoutNum"}},[n("el-input",{model:{value:t.loginMSG.accoutNum,callback:function(e){t.$set(t.loginMSG,"accoutNum","string"==typeof e?e.trim():e)},expression:"loginMSG.accoutNum"}},[n("template",{slot:"prepend"},[t._v("会员账号：")])],2)],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{model:{value:t.loginMSG.password,callback:function(e){t.$set(t.loginMSG,"password","string"==typeof e?e.trim():e)},expression:"loginMSG.password"}},[n("template",{slot:"prepend"},[t._v("会员密码：")])],2)],1)],1),t._v(" "),n("div",{staticStyle:{"text-align":"right"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small",round:""},on:{click:t.handleRegister}},[t._v("注册")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small",round:""},on:{click:t.handleLogin}},[t._v("登陆")])],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logoImg"},[e("img",{attrs:{src:n("Z2Ou"),widht:"408",height:"75"}})])}]};var v=n("VU/8")(f,h,!1,function(t){n("+W1Z")},"data-v-64c16194",null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    4564\n")])},staticRenderFns:[]},y=n("VU/8")({data:function(){return{}}},_,!1,null,null,null).exports,w=n("teIl"),k=n("Dd8w"),b=n.n(k),x=n("NYxO"),S={data:function(){return{timeObj:null,list:[]}},created:function(){this.scrollimg(),this.spikeGoods()},mounted:function(){var t=this;this.timeObj=setInterval(function(){t.splikeTime()},1e3)},computed:b()({},Object(x.e)(["goodsList","spikeList","countdown"]),Object(x.c)(["spikeHours","spikeMinutes","spikeSeconds"])),methods:b()({},Object(x.b)(["scrollimg","spikeGoods"]),Object(x.d)(["splikeTime","quantityCount","handlePay"]),{handleAddList:function(t,e,n){if("加入购物车"!=n.target.innerText)return!1;this.$refs.btn[e].$el.innerText="已加入购物车",this.list.push(t),this.quantityCount(this.list),this.handlePay(t)}}),destroyed:function(){clearInterval(this.timeObj)}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shoppingList"},[n("el-carousel",{staticClass:"banner",attrs:{height:"340px",direction:"vertical"}},t._l(t.goodsList,function(t,e){return n("el-carousel-item",{key:e},[n("img",{attrs:{src:t.img,width:"790",height:"340"}})])}),1),t._v(" "),n("div",{staticClass:"spike"},[n("el-row",{staticStyle:{height:"42px","line-height":"42px",background:"#409EFF",padding:"0 20px",color:"#fff","margin-bottom":"20px"}},[n("el-col",{attrs:{span:6}},[n("h3",{staticStyle:{"font-size":"24px"}},[t._v("限时秒杀"),n("span",{staticStyle:{display:"inline-block","font-weight":"normal","padding-left":"6px"}},[t._v("想要你就来！")])])]),t._v(" "),n("el-col",{staticClass:"spikeStyle",attrs:{span:18,align:"right"}},[t._v("\n                倒计时 "),n("span",[t._v(t._s(t.spikeHours))]),t._v(":"),n("span",[t._v(t._s(t.spikeMinutes))]),t._v(":"),n("span",[t._v(t._s(t.spikeSeconds))])])],1),t._v(" "),n("el-row",{staticStyle:{display:"flex","flex-wrap":"wrap",overflow:"hidden"}},t._l(t.spikeList,function(e,i){return n("el-col",{key:i,staticStyle:{margin:"12px 22px"},attrs:{span:5}},[n("el-card",{attrs:{"body-style":{padding:"0px"}}},[n("img",{staticClass:"image",attrs:{src:e.img}}),t._v(" "),n("div",{staticStyle:{padding:"10px"}},[n("span",{staticStyle:{display:"block",height:"40px","font-size":"12px"}},[t._v(t._s(e.info))]),t._v(" "),n("div",{staticClass:"txtStyle"},[n("el-button",{staticStyle:{color:"red"},attrs:{type:"text"}},[t._v("￥"+t._s(e.price))]),t._v(" "),n("el-button",{ref:"btn",refInFor:!0,staticStyle:{"margin-left":"55px"},attrs:{type:"text",icon:"el-icon-shopping-cart-full"},nativeOn:{click:function(n){return n.preventDefault(),t.handleAddList(e,i,n)}}},[t._v("加入购物车")])],1)])])],1)}),1)],1)],1)},staticRenderFns:[]};var $=n("VU/8")(S,L,!1,function(t){n("eQEw")},"data-v-dad0b36c",null).exports,j={data:function(){return{}},components:{Header:w.a,MainCon:$}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header",{staticStyle:{margin:"0 0 20px 0"}}),this._v(" "),e("MainCon"),this._v(" "),e("el-backtop")],1)},staticRenderFns:[]},M=n("VU/8")(j,F,!1,null,null,null).exports;a.default.use(d.a);var C=[{path:"/",name:"MainIndex",component:M,children:[]},{path:"/GoodsDetail",name:"GoodsDetail",component:function(t){return n.e(0).then(function(){var e=[n("B7tt")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/FeedBack",name:"FeedBack",component:function(t){return n.e(1).then(function(){var e=[n("/2YP")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/Login",name:"Login",component:v},{path:"/Register",name:"Register",component:y}],G=new d.a({mode:"hash",routes:C}),O=n("mtWM"),P=n.n(O),R=n("//Fk"),q=n.n(R),E=function(t){var e=t.commit;return new q.a(function(t,n){e("loadImg",[{img:"static/images/banner1.jpg"},{img:"static/images/banner2.jpg"},{img:"static/images/banner3.jpg"},{img:"static/images/banner4.jpg"},{img:"static/images/banner5.jpg"}])})},I=function(t){var e=t.commit;return new q.a(function(t,n){var i=new Date;i.getHours(),i.getMinutes(),i.getSeconds();e("spikeimg",[[{id:1,img:"static/images/1.jpg",info:"形象美马油滋润护手霜补水滋润防干裂 冬季手部护理保湿手霜30g 零售云精选",price:5.5,discountPrice:3.5},{id:2,img:"static/images/2.jpg",info:"20只蓝泡泡环保清新无异味强效杀菌蓝泡泡洁厕宝02",price:5.2,discountPrice:3.8},{id:3,img:"static/images/3.jpg",info:"形象美维生素E乳温和滋养补水细腻美肌身体乳液100ml",price:5,discountPrice:3.5},{id:4,img:"static/images/4.jpg",info:"同碗福干脆面掌心脆20包",price:5.9,discountPrice:3},{id:5,img:"static/images/5.jpg",info:"倩滋小黑裙香水沐浴露500ml",price:9.7,discountPrice:3.9},{id:6,img:"static/images/6.jpg",info:"倩保税日本Esthe Dew伊诗露化妆水500ml*2 保湿美白胎盘素爽肤水",price:145,discountPrice:3.9},{id:7,img:"static/images/7.jpg",info:"Puma/彪马男运动鞋法拉利赛车鞋低帮透气logo耐磨美国直邮",price:1288,discountPrice:3.9},{id:8,img:"static/images/8.png",info:"DAS Mivolis德国多种矿物质泡腾片 无糖型*2 海外本土原版",price:39.9,discountPrice:3.9}],{hours:13,minutes:14,seconds:0}])})},H=function(t,e){t.goodsList=e},N=function(t,e){t.spikeList=e[0],t.countdown=e[1]},A=function(t){t.countdown.seconds--,-1===t.countdown.seconds&&(t.countdown.seconds=59,t.countdown.minutes--,-1===t.countdown.minutes&&(t.countdown.minutes=59,t.countdown.hours--))},D=function(t,e){Array.isArray(e)?t.quantity=e.length:t.quantity=e},U=function(t,e){t.shoppingList.push(e)},V=function(t){return t.countdown.hours<10?"0"+t.countdown.hours:t.countdown.hours},B=function(t){return t.countdown.minutes<10?"0"+t.countdown.minutes:t.countdown.minutes},T=function(t){return t.countdown.seconds<10?"0"+t.countdown.seconds:t.countdown.seconds};a.default.use(x.a);var Z=new x.a.Store({state:{goodsList:[],spikeList:[],countdown:{hours:0,minutes:0,seconds:0},quantity:0,shoppingList:[]},getters:o,actions:i,mutations:s}),z=(n("4FU0"),window.localStorage);G.beforeEach(function(t,e,n){"/Login"==t.path?n():JSON.parse(z.getItem("SaveAccount"))?n():n({path:"/Login"})}),a.default.use(x.a),a.default.use(l.a),a.default.config.productionTip=!1,a.default.prototype.$axios=P.a,new a.default({el:"#app",router:G,store:Z,components:{App:c},template:"<App/>"})},Z2Ou:function(t,e,n){t.exports=n.p+"static/img/logo.4865ef7.png"},dKVH:function(t,e){},eQEw:function(t,e){},teIl:function(t,e,n){"use strict";var i=n("Dd8w"),s=n.n(i),o=n("NYxO"),a={data:function(){return{shoppingNum:1}},computed:s()({},Object(o.e)(["quantity"])),methods:{handleRegister:function(){this.$notify({message:"注册页面还未开发..."})},handelFeedback:function(){this.$router.push("/FeedBack")},handleBack:function(){if("MainIndex"==this.$route.name)return this.$message.info("您已在商城首页！"),!1;this.$router.push({path:"/"})},handleList:function(){this.$router.push("/GoodsDetail")}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("el-row",[n("el-col",{attrs:{span:3,align:"right"}},[n("h3",[t._v("惠心商城")])]),t._v(" "),n("el-col",{attrs:{span:21,align:"right"}},[0===t.quantity?n("el-button",{attrs:{type:"text"},on:{click:t.handleList}},[n("i",{staticClass:"el-icon-shopping-cart-2"}),t._v("购物车")]):n("el-badge",{staticClass:"item",attrs:{value:t.quantity}},[n("el-button",{attrs:{type:"text"},on:{click:t.handleList}},[n("i",{staticClass:"el-icon-shopping-cart-2"}),t._v("购物车")])],1),t._v(" "),n("span",[t._v(" ")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:t.handleRegister}},[t._v("免费注册")]),n("span",[t._v(" ")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:t.handelFeedback}},[t._v("意见反馈")]),n("span",[t._v(" ")]),t._v(" "),n("el-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"text"},on:{click:t.handleBack}},[t._v("商城首页")])],1)],1)],1)},staticRenderFns:[]};var c=n("VU/8")(a,r,!1,function(t){n("dKVH")},"data-v-eefc8980",null);e.a=c.exports},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7bf2121fdc49d94430f0.js.map