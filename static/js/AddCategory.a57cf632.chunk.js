"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[206],{4620:function(e,t,n){n.d(t,{Mm:function(){return i},UC:function(){return c}});var r="Button_btnWrapper__qLkFf",a="Button_btn__EDhOk",o=n(184),i=function(e){var t=e.text;return(0,o.jsx)("div",{className:r,children:(0,o.jsx)("button",{type:"submit",className:a,children:t})})},c=function(e){var t=e.text,n=e.onClick,i=e.disabled;return(0,o.jsx)("div",{className:r,children:(0,o.jsx)("button",{type:"button",className:a,onClick:n,disabled:i,children:t})})}},355:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(1413),a=n(5861),o=n(7757),i=n.n(o),c="AddCategory_loginContainer__48jVe",s="AddCategory_title__ig8eV",u="AddCategory_label__PVbNJ",d="AddCategory_input__IItX5",l="AddCategory_LoginInner__SzoZM",f="AddCategory_error__Dv6j5",m=n(6871),g=n(2434),h=n(5705),p=n(132),_=n(6960),C=(n(5462),n(8909)),v=n(2791),x=n(4620),y=n(184);_.Am.configure();var b=function(e){var t=e.isLoggedIn,n=(0,m.s0)();(0,v.useEffect)((function(){t||n("/login")}),[]);var o=p.Ry().shape({name:p.Z_().min(2,"At least two characters").max(50,"At least 50 characters").required("Required")}),b=function(){var e=(0,a.Z)(i().mark((function e(t,r){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Yc.addCategory(t.name);case 3:a=e.sent,_.Am.success(a.message,{position:"top-center"}),r.resetForm(),n("/categories"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),_.Am.error(e.t0.message,{position:"top-center"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),A=(0,h.TA)({initialValues:{name:""},validationSchema:o,onSubmit:b});return(0,y.jsx)(C.Z,{children:(0,y.jsx)("div",{className:c,children:(0,y.jsxs)("form",{onSubmit:A.handleSubmit,children:[(0,y.jsxs)("div",{className:l,children:[(0,y.jsx)("h1",{className:s,children:"New category"}),(0,y.jsx)("label",{htmlFor:"login",className:u,children:"Category"}),(0,y.jsx)("input",(0,r.Z)({className:d,id:"name",name:"name",type:"text",placeholder:"name"},A.getFieldProps("name"))),A.touched.name&&A.errors.name?(0,y.jsx)("p",{className:f,children:A.errors.name}):null]}),(0,y.jsx)(x.Mm,{text:"Add category",disabled:!(A.dirty&&A.isValid),className:"submitButton"})]})})})}},2434:function(e,t,n){n.d(t,{Yc:function(){return o},BG:function(){return s}});var r=n(4569),a=n.n(r),o={addCategory:function(e){return a().post("/Catigories/add/".concat(e)).then((function(e){return e.data}))},removeCategory:function(e){return a().delete("/Catigories/delete/".concat(e))},editCategory:function(e,t){return a().post("Catigories/changeName/".concat(t,"?newName=").concat(e)).then((function(e){return e.data}))},getCategories:function(){return a().get("/Catigories/GetAll").then((function(e){return e.data}))}},i=function(e){a().defaults.headers.common.Authorization="Bearer ".concat(e)},c={userRegister:function(e){return a().post("/User/register",e).then((function(e){return e.data}))},userLogin:function(e){return a().post("/User/login",e).then((function(e){var t=e.data;return i(t.token),t}))},deleteUser:function(e){return a().delete("/User/delete/".concat(e)).then((function(e){return e.data}))},addUserCash:function(e,t){return a().post("/User/addcashformonth/".concat(t),e).then((function(e){return e.data}))},getAllUserMoney:function(e){return a().get("User/getAllUserMoney/".concat(e)).then((function(e){return e.data}))},getAllUsers:function(){return a().get("User/getAllUsers").then((function(e){return e.data}))},editLogin:function(e,t){return a().post("User/editLogin/".concat(e,"?newLogin=").concat(t)).then((function(e){return e.data}))}},s=c}}]);
//# sourceMappingURL=AddCategory.a57cf632.chunk.js.map