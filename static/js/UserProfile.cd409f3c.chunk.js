"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[918],{5501:function(e,t,n){n.d(t,{Lw:function(){return d},Mm:function(){return a},UC:function(){return i}});var r="Button_btnWrapper__qLkFf",c="Button_btn__EDhOk",o=n(184),a=function(e){var t=e.text;return(0,o.jsx)("div",{className:r,children:(0,o.jsx)("button",{type:"submit",className:c,children:t})})},i=function(e){var t=e.text,n=e.onClick,a=e.disabled;return(0,o.jsx)("div",{className:r,children:(0,o.jsx)("button",{type:"button",className:c,onClick:n,disabled:a,children:t})})},s="CancelButton_btnWrapper__A2FYZ",u="CancelButton_btn__8Kg8l",d=function(e){var t=e.text,n=e.onClick,r=e.disabled;return(0,o.jsx)("div",{className:s,children:(0,o.jsx)("button",{type:"button",className:u,onClick:n,disabled:r,children:t})})}},869:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(5861),c=n(885),o=n(7757),a=n.n(o),i="UserProfile_container__SeZs0",s="UserProfile_header__hjSjI",u="UserProfile_divInput__fRW6q",d="UserProfile_save__-Zgby",l="UserProfile_loaderWrapper__sCqao",f="UserProfile_editWrapper__u+28r",h="UserProfile_editInput__nnmvX",p="UserProfile_buttons__AfXmw",g="UserProfile_buttons2__v2gDO",m=n(8909),x=n(2791),v=n(3504),C=n(6871),_=n(7175),j=n(9944),U=n(6960),b=(n(5462),n(5501)),P=n(6153),y=n(184);U.Am.configure();var k=function(e){var t=e.isLoggedIn,n=e.id,o=e.login,k=e.logoutHandler,N=(0,C.s0)(),A=(0,x.useState)(!1),w=(0,c.Z)(A,2),Z=w[0],S=w[1],L=(0,x.useState)(o||""),B=(0,c.Z)(L,2),D=B[0],E=B[1],G=(0,x.useState)(0),F=(0,c.Z)(G,2),I=F[0],M=F[1],W=(0,x.useState)(!1),q=(0,c.Z)(W,2),O=q[0],R=q[1],z=(0,x.useState)(!1),X=(0,c.Z)(z,2),Y=X[0],H=X[1],K=(0,x.useState)(!1),T=(0,c.Z)(K,2),J=(T[0],T[1]);(0,x.useEffect)((function(){t||N("/login")}),[t]),(0,x.useEffect)((function(){return o&&n&&Q(),function(){J(!0)}}),[o,n]);var Q=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(!0),e.next=4,_.BG.getAllUserMoney(n);case 4:t=e.sent,M(t),R(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),R(!1),U.Am.error(e.t0.response.data.message,{position:"top-center"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){S(!Z)},$=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,H(!0),e.next=4,_.BG.editLogin(n,D);case 4:U.Am.success("User successfully updated",{position:"top-center"}),S(!Z),H(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),H(!1),U.Am.error(e.t0.message,{position:"top-center"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.BG.deleteUser(n);case 3:U.Am.success("Account successfully deleted",{position:"top-center"}),k(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),U.Am.error(e.t0.message,{position:"top-center"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,y.jsx)(m.Z,{children:O?(0,y.jsx)("div",{className:l,children:(0,y.jsx)(P.Z,{type:"Bars",color:"#ff8614",height:200,width:200})}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h1",{className:s,children:"User Profile"}),n&&o&&(0,y.jsxs)("div",{className:i,children:[Z?(0,y.jsxs)("div",{className:u,children:[(0,y.jsx)("input",{type:"text",className:h,value:D,onChange:function(e){E(e.target.value)},maxLength:20}),(0,y.jsx)("div",{className:d,children:Y?(0,y.jsx)("div",{className:f,children:(0,y.jsx)(P.Z,{type:"Circles",color:"#ff8614",height:30,width:30})}):(0,y.jsx)(b.UC,{text:"Save",disabled:!D,onClick:$})})]}):(0,y.jsx)("h2",{className:s,children:D}),(0,y.jsxs)("p",{className:s,children:["Invested money: ",I.contributionCount]}),Z?(0,y.jsxs)("div",{className:g,children:[(0,y.jsx)("div",{children:(0,y.jsx)(b.UC,{text:Z?"Cancel":"Edit profile",disabled:!1,onClick:V})}),(0,y.jsx)("div",{children:(0,y.jsx)(b.UC,{text:"Delete account",disabled:!1,onClick:ee})})]}):(0,y.jsxs)("div",{className:p,children:[(0,y.jsx)("div",{children:(0,y.jsx)(b.UC,{text:Z?"Cancel":"Edit profile",disabled:!1,onClick:V})}),(0,y.jsx)("div",{children:(0,y.jsx)(b.UC,{text:"Logout",disabled:!1,onClick:k})}),(0,y.jsx)("div",{children:(0,y.jsx)(v.OL,{to:j.Z.moneyReport,children:(0,y.jsx)(b.UC,{text:"Add report"})})})]})]})]})})}},7175:function(e,t,n){n.d(t,{Yc:function(){return o},m5:function(){return l},fi:function(){return i},BG:function(){return d}});var r=n(4569),c=n.n(r),o={addCategory:function(e){return c().post("/Catigories/add/".concat(e)).then((function(e){return e.data}))},removeCategory:function(e){return c().delete("/Catigories/delete/".concat(e))},editCategory:function(e,t){return c().post("Catigories/changeName/".concat(t,"?newName=").concat(e)).then((function(e){return e.data}))},getCategories:function(){return c().get("/Catigories/GetAll").then((function(e){return e.data}))}},a={addProduct:function(e){return c().post("/Product/add",e).then((function(e){return e.data}))},deleteProduct:function(e){return c().delete("/Product/delete/".concat(e))},getProducts:function(e){return c().get("/Product/GetAll?state=".concat(e)).then((function(e){return e.data}))},changeProductName:function(e,t){return c().post("Product/changeProductName/".concat(e,"?name=").concat(t)).then((function(e){return e.data}))},changeProductCategory:function(e,t){return c().post("Product/moveToCategory/".concat(e,"?categoryName=").concat(t)).then((function(e){return e.data}))},changeSellingPrice:function(e,t){return c().post("Product/addSallingPrice/".concat(e,"?price=").concat(t)).then((function(e){return e.data}))},addArrivalDate:function(e,t){return c().post("Product/addArrivalDate/".concat(e,"?time=").concat(t)).then((function(e){return e.data}))},addSellingDate:function(e,t){return c().post("Product/addSallingDate/".concat(e,"?time=").concat(t)).then((function(e){return e.data}))}},i=a,s=function(e){c().defaults.headers.common.Authorization="Bearer ".concat(e)},u={userRegister:function(e){return c().post("/User/register",e).then((function(e){return e.data}))},userLogin:function(e){return c().post("/User/login",e).then((function(e){var t=e.data;return s(t.token),t}))},deleteUser:function(e){return c().delete("/User/delete/".concat(e)).then((function(e){return e.data}))},addUserCash:function(e,t){return c().post("/User/addcashformonth/".concat(t),e).then((function(e){return e.data}))},getAllUserMoney:function(e){return c().get("User/getAllUserMoney/".concat(e)).then((function(e){return e.data}))},getAllUsers:function(){return c().get("User/getAllUsers").then((function(e){return e.data}))},editLogin:function(e,t){return c().post("User/editLogin/".concat(e,"?newLogin=").concat(t)).then((function(e){return e.data}))}},d=u,l={generateExel:function(){return c().get("/Common/generateExcel").then((function(e){return e.data}))},getCashFlow:function(){return c().get("/Common/chashFlow").then((function(e){return e.data}))},convertMoney:function(e){return c().get("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/".concat(e,".json")).then((function(e){return e.data}))}}}}]);
//# sourceMappingURL=UserProfile.cd409f3c.chunk.js.map