"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[918],{4620:function(e,t,n){n.d(t,{Mm:function(){return a},UC:function(){return i}});var r="Button_btnWrapper__qLkFf",c="Button_btn__EDhOk",o=n(184),a=function(e){var t=e.text;return(0,o.jsx)("div",{className:r,children:(0,o.jsx)("button",{type:"submit",className:c,children:t})})},i=function(e){var t=e.text,n=e.onClick,a=e.disabled;return(0,o.jsx)("div",{className:r,children:(0,o.jsx)("button",{type:"button",className:c,onClick:n,disabled:a,children:t})})}},869:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(5861),c=n(885),o=n(7757),a=n.n(o),i="UserProfile_container__SeZs0",s="UserProfile_header__hjSjI",u="UserProfile_divInput__fRW6q",d="UserProfile_save__-Zgby",l="UserProfile_loaderWrapper__sCqao",f="UserProfile_editWrapper__u+28r",h="UserProfile_editInput__nnmvX",p="UserProfile_buttons__AfXmw",g="UserProfile_buttons2__v2gDO",x=n(8909),m=n(2791),v=n(3504),j=n(6871),C=n(7175),U=n(9944),_=n(6960),P=(n(5462),n(4620)),b=n(6153),y=n(184);_.Am.configure();var k=function(e){var t=e.isLoggedIn,n=e.id,o=e.login,k=e.logoutHandler,N=(0,j.s0)(),A=(0,m.useState)(!1),Z=(0,c.Z)(A,2),w=Z[0],S=Z[1],L=(0,m.useState)(o||""),B=(0,c.Z)(L,2),D=B[0],G=B[1],E=(0,m.useState)(0),I=(0,c.Z)(E,2),M=I[0],W=I[1],q=(0,m.useState)(!1),O=(0,c.Z)(q,2),R=O[0],F=O[1],X=(0,m.useState)(!1),z=(0,c.Z)(X,2),H=z[0],T=z[1],Y=(0,m.useState)(!1),J=(0,c.Z)(Y,2),K=(J[0],J[1]);(0,m.useEffect)((function(){t||N("/login")}),[t]),(0,m.useEffect)((function(){return o&&n&&Q(),function(){K(!0)}}),[o,n]);var Q=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(!0),e.next=4,C.BG.getAllUserMoney(n);case 4:t=e.sent,W(t),F(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),F(!1),_.Am.error(e.t0.response.data.message,{position:"top-center"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){S(!w)},$=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,C.BG.editLogin(n,D);case 4:_.Am.success("User successfully updated",{position:"top-center"}),S(!w),T(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),T(!1),_.Am.error(e.t0.message,{position:"top-center"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.BG.deleteUser(n);case 3:_.Am.success("Account successfully deleted",{position:"top-center"}),k(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),_.Am.error(e.t0.message,{position:"top-center"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,y.jsx)(x.Z,{children:R?(0,y.jsx)("div",{className:l,children:(0,y.jsx)(b.Z,{type:"Bars",color:"#ff8614",height:200,width:200})}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h1",{className:s,children:"User Profile"}),n&&o&&(0,y.jsxs)("div",{className:i,children:[w?(0,y.jsxs)("div",{className:u,children:[(0,y.jsx)("input",{type:"text",className:h,value:D,onChange:function(e){G(e.target.value)},maxLength:20}),(0,y.jsx)("div",{className:d,children:H?(0,y.jsx)("div",{className:f,children:(0,y.jsx)(b.Z,{type:"Circles",color:"#ff8614",height:30,width:30})}):(0,y.jsx)(P.UC,{text:"Save",disabled:!D,onClick:$})})]}):(0,y.jsx)("h2",{className:s,children:D}),(0,y.jsxs)("p",{className:s,children:["Invested money: ",M.contributionCount]}),w?(0,y.jsxs)("div",{className:g,children:[(0,y.jsx)("div",{children:(0,y.jsx)(P.UC,{text:w?"Cancel":"Edit profile",disabled:!1,onClick:V})}),(0,y.jsx)("div",{children:(0,y.jsx)(P.UC,{text:"Delete account",disabled:!1,onClick:ee})})]}):(0,y.jsxs)("div",{className:p,children:[(0,y.jsx)("div",{children:(0,y.jsx)(P.UC,{text:w?"Cancel":"Edit profile",disabled:!1,onClick:V})}),(0,y.jsx)("div",{children:(0,y.jsx)(P.UC,{text:"Logout",disabled:!1,onClick:k})}),(0,y.jsx)("div",{children:(0,y.jsx)(v.OL,{to:U.Z.moneyReport,children:(0,y.jsx)(P.UC,{text:"Add report"})})})]})]})]})})}},7175:function(e,t,n){n.d(t,{Yc:function(){return o},fi:function(){return i},BG:function(){return d}});var r=n(4569),c=n.n(r),o={addCategory:function(e){return c().post("/Catigories/add/".concat(e)).then((function(e){return e.data}))},removeCategory:function(e){return c().delete("/Catigories/delete/".concat(e))},editCategory:function(e,t){return c().post("Catigories/changeName/".concat(t,"?newName=").concat(e)).then((function(e){return e.data}))},getCategories:function(){return c().get("/Catigories/GetAll").then((function(e){return e.data}))}},a={addProduct:function(e){return c().post("/Product/add",e).then((function(e){return e.data}))},deleteProduct:function(e){return c().delete("/Product/delete/".concat(e))},getProducts:function(){return c().get("/Product/GetAll").then((function(e){return e.data}))},changeProductName:function(e,t){return c().post("Product/changeProductName/".concat(e,"?name=").concat(t)).then((function(e){return e.data}))},changeProductCategory:function(e,t){return c().post("Product/moveToCategory/".concat(e,"?categoryName=").concat(t)).then((function(e){return e.data}))},changeSellingPrice:function(e,t){return c().post("Product/addSallingPrice/".concat(e,"?price=").concat(t)).then((function(e){return e.data}))},addArrivalDate:function(e,t){return c().post("Product/addArrivalDate/".concat(e,"?time=").concat(t)).then((function(e){return e.data}))},addSellingDate:function(e,t){return c().post("Product/addSallingDate/".concat(e,"?time=").concat(t)).then((function(e){return e.data}))}},i=a,s=function(e){c().defaults.headers.common.Authorization="Bearer ".concat(e)},u={userRegister:function(e){return c().post("/User/register",e).then((function(e){return e.data}))},userLogin:function(e){return c().post("/User/login",e).then((function(e){var t=e.data;return s(t.token),t}))},deleteUser:function(e){return c().delete("/User/delete/".concat(e)).then((function(e){return e.data}))},addUserCash:function(e,t){return c().post("/User/addcashformonth/".concat(t),e).then((function(e){return e.data}))},getAllUserMoney:function(e){return c().get("User/getAllUserMoney/".concat(e)).then((function(e){return e.data}))},getAllUsers:function(){return c().get("User/getAllUsers").then((function(e){return e.data}))},editLogin:function(e,t){return c().post("User/editLogin/".concat(e,"?newLogin=").concat(t)).then((function(e){return e.data}))}},d=u}}]);
//# sourceMappingURL=UserProfile.1194ea71.chunk.js.map