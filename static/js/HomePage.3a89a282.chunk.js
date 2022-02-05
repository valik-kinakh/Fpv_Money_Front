"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[460],{2853:function(t,e,n){n.r(e),n.d(e,{default:function(){return j}});var r=n(2982),o=n(5861),a=n(885),c=n(7757),u=n.n(c),i=n(6871),s=n(2791),d=n(7179),l=n.n(d),f=n(2003),h=n.n(f),g=n(1192),p=n.n(g),m=n(184);p()(l());var v=function(t){var e=t.data,n={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:"Money invested in FPV-World"},tooltip:{pointFormat:"{series.name}: <b>{point.y:.1f} UAN</b>"},accessibility:{point:{valueSuffix:"%"}},credits:{enabled:!1},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer"}},series:[{name:"Money",colorByPoint:!0,data:(0,r.Z)(e)}]};return(0,m.jsx)("div",{children:(0,m.jsx)(h(),{highcharts:l(),options:n})})},y=n(9718),x=n.n(y),C=n(2690),P=n.n(C);p()(x()),P()(x());var U=function(t){var e=t.data,n={boost:{useGPUTranslations:!0,usePreallocated:!0},chart:{type:"spline"},title:{text:"Monthly money investing"},credits:{enabled:!1},xAxis:{labels:{enabled:!1},crosshair:!0,tickWidth:0,min:0,tickInterval:1,maxPadding:0},yAxis:{title:{text:"Money"},labels:{formatter:function(){return this.value}}},tooltip:{crosshairs:!0,headerFormat:"<b>{series.name}</b><br/>",pointFormatter:function(){return"".concat(this.date,"<br/>").concat(this.y,"UAN")}},plotOptions:{spline:{marker:{radius:4,lineColor:"#666666",lineWidth:1}}},series:(0,r.Z)(e)};return(0,m.jsx)(h(),{highcharts:x(),options:n})},b=n(6153),A="Home_loaderWrapper__mT37B",S="Home_moneyWrapper__FKkM8",Z=n(6960),w=(n(5462),n(7175)),M=n(2426),k=n.n(M);Z.Am.configure();var j=function(t){var e=t.isLoggedIn,n=(0,i.s0)(),c=(0,s.useState)([]),d=(0,a.Z)(c,2),l=d[0],f=d[1],h=(0,s.useState)([]),g=(0,a.Z)(h,2),p=g[0],y=g[1],x=(0,s.useState)("usd"),C=(0,a.Z)(x,2),P=C[0],M=(C[1],(0,s.useState)("uah")),j=(0,a.Z)(M,2),N=j[0],B=(j[1],(0,s.useState)(0)),F=(0,a.Z)(B,2),G=F[0],W=F[1],_=(0,s.useState)(0),D=(0,a.Z)(_,2),E=D[0],L=D[1],Y=(0,s.useState)(!1),I=(0,a.Z)(Y,2),T=I[0],z=I[1],H=(0,s.useState)(!1),O=(0,a.Z)(H,2),K=(O[0],O[1]),R=function(t,e){return t+e};(0,s.useEffect)((function(){e||n("/login")}),[e]),(0,s.useEffect)((function(){return q(),function(){K(!0)}}),[]),(0,s.useEffect)((function(){E>0&&V()}),[E]);var V=function(){var t=(0,o.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.m5.convertMoney(P);case 3:e=t.sent,n=e.usd[N],W(Math.round(E*n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),Z.Am.error("Convert service does not respond",{position:"top-center"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),q=function(){var t=(0,o.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,z(!0),t.next=4,w.BG.getAllUsers();case 4:return e=t.sent,t.next=7,w.m5.getCashFlow();case 7:n=t.sent,L(Math.round(n)),y((0,r.Z)(e).map((function(t){return{name:t.login,data:(0,r.Z)(t.money).map((function(t){return{y:t.count,date:k()(t.time).format("DD-MM-YYYY")}}))}}))),f((0,r.Z)(e).map((function(t){var e=t.money.map((function(t){return t.count})),n=e.length>0?e.reduce(R):0;return{name:t.login,y:n}}))),z(!1),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),z(!1),Z.Am.error(t.t0.response.data.message,{position:"top-center"});case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();return(0,m.jsxs)("div",{children:[!T&&(0,m.jsxs)("div",{className:S,children:[(0,m.jsxs)("h2",{children:["Money USD:",E]}),(0,m.jsxs)("h2",{children:["Money UAN: ",G]})]}),l.length>0&&!T&&(0,m.jsx)(v,{data:l}),l.length>0&&!T&&(0,m.jsx)(U,{data:p}),T&&(0,m.jsx)("div",{className:A,children:(0,m.jsx)(b.Z,{type:"Bars",color:"#ff8614",height:200,width:200})})]})}},7175:function(t,e,n){n.d(e,{Yc:function(){return a},m5:function(){return l},fi:function(){return u},BG:function(){return d}});var r=n(4569),o=n.n(r),a={addCategory:function(t){return o().post("/Catigories/add/".concat(t)).then((function(t){return t.data}))},removeCategory:function(t){return o().delete("/Catigories/delete/".concat(t))},editCategory:function(t,e){return o().post("Catigories/changeName/".concat(e,"?newName=").concat(t)).then((function(t){return t.data}))},getCategories:function(){return o().get("/Catigories/GetAllCategories").then((function(t){return t.data}))},getProductsByCategoryId:function(t,e){return o().get("/Catigories/GetProductsFromCategory?id=".concat(t,"&state=").concat(e)).then((function(t){return t.data}))}},c={addProduct:function(t){return o().post("/Product/add",t).then((function(t){return t.data}))},deleteProduct:function(t){return o().delete("/Product/delete/".concat(t))},getProducts:function(t){return o().get("/Product/GetAll?state=".concat(t)).then((function(t){return t.data}))},changeProductName:function(t,e){return o().post("Product/changeProductName/".concat(t,"?name=").concat(e)).then((function(t){return t.data}))},changeProductCategory:function(t,e){return o().post("Product/moveToCategory/".concat(t,"?categoryName=").concat(e)).then((function(t){return t.data}))},changeSellingPrice:function(t,e){return o().post("Product/addSallingPrice/".concat(t,"?price=").concat(e)).then((function(t){return t.data}))},addSellingDate:function(t,e){return o().post("Product/addSallingDate/".concat(t,"?time=").concat(e)).then((function(t){return t.data}))}},u=c,i=function(t){o().defaults.headers.common.Authorization="Bearer ".concat(t)},s={userRegister:function(t){return o().post("/User/register",t).then((function(t){return t.data}))},userLogin:function(t){return o().post("/User/login",t).then((function(t){var e=t.data;return i(e.token),e}))},deleteUser:function(t){return o().delete("/User/delete/".concat(t)).then((function(t){return t.data}))},addUserCash:function(t,e){return o().post("/User/addcashformonth/".concat(e),t).then((function(t){return t.data}))},getAllUserMoney:function(t){return o().get("User/getAllUserMoney/".concat(t)).then((function(t){return t.data}))},getAllUsers:function(){return o().get("User/getAllUsers").then((function(t){return t.data}))},editLogin:function(t,e){return o().post("User/editLogin/".concat(t,"?newLogin=").concat(e)).then((function(t){return t.data}))}},d=s,l={generateExel:function(){return o().get("/Common/generateExcel").then((function(t){return t.data}))},getCashFlow:function(){return o().get("/Common/chashFlow").then((function(t){return t.data}))},convertMoney:function(t){return o().get("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/".concat(t,".json")).then((function(t){return t.data}))}}}}]);
//# sourceMappingURL=HomePage.3a89a282.chunk.js.map