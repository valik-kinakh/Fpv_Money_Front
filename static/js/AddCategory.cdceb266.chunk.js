/*! For license information please see AddCategory.cdceb266.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[206],{5501:function(t,e,n){n.d(e,{Lw:function(){return s},Mm:function(){return a},UC:function(){return u}});var r="Button_btnWrapper__qLkFf",o="Button_btn__EDhOk",c=n(184),a=function(t){var e=t.text;return(0,c.jsx)("div",{className:r,children:(0,c.jsx)("button",{type:"submit",className:o,children:e})})},u=function(t){var e=t.text,n=t.onClick,a=t.disabled;return(0,c.jsx)("div",{className:r,children:(0,c.jsx)("button",{type:"button",className:o,onClick:n,disabled:a,children:e})})},i="CancelButton_btnWrapper__A2FYZ",f="CancelButton_btn__8Kg8l",s=function(t){var e=t.text,n=t.onClick,r=t.disabled;return(0,c.jsx)("div",{className:i,children:(0,c.jsx)("button",{type:"button",className:f,onClick:n,disabled:r,children:e})})}},355:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(1413),o=n(5861),c=n(885),a=n(7757),u=n.n(a),i="AddCategory_loginContainer__48jVe",f="AddCategory_loaderWrapper__gCJdD",s="AddCategory_title__ig8eV",l="AddCategory_label__PVbNJ",d="AddCategory_input__IItX5",p="AddCategory_LoginInner__SzoZM",y="AddCategory_error__Dv6j5",m=n(6871),b=n(7175),g=n(5705),h=n(132),v=n(6960),j=(n(5462),n(8909)),P=n(2791),C=n(5501),S=n(6153),w=n(184);v.Am.configure();var _=function(t){var e=t.isLoggedIn,n=(0,m.s0)(),a=(0,P.useState)(!1),_=(0,c.Z)(a,2),x=_[0],O=_[1];(0,P.useEffect)((function(){e||n("/login")}),[]);var $=h.Ry().shape({name:h.Z_().min(2,"At least two characters").max(50,"At least 50 characters").required("Required")}),A=function(){var t=(0,o.Z)(u().mark((function t(e,r){var o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,O(!0),t.next=4,b.Yc.addCategory(e.name);case 4:o=t.sent,v.Am.success(o.message,{position:"top-center"}),O(!1),r.resetForm(),n("/categories"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),O(!1),v.Am.error(t.t0.message,{position:"top-center"});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}(),Z=(0,g.TA)({initialValues:{name:""},validationSchema:$,onSubmit:A});return(0,w.jsx)(j.Z,{children:(0,w.jsx)("div",{className:i,children:(0,w.jsxs)("form",{onSubmit:Z.handleSubmit,children:[(0,w.jsxs)("div",{className:p,children:[(0,w.jsx)("h1",{className:s,children:"New category"}),(0,w.jsx)("label",{htmlFor:"login",className:l,children:"Category"}),(0,w.jsx)("input",(0,r.Z)({className:d,id:"name",name:"name",type:"text",placeholder:"name"},Z.getFieldProps("name"))),Z.touched.name&&Z.errors.name?(0,w.jsx)("p",{className:y,children:Z.errors.name}):null]}),x?(0,w.jsx)("div",{className:f,children:(0,w.jsx)(S.Z,{type:"Circles",color:"#ff8614",height:40,width:40})}):(0,w.jsx)(C.Mm,{text:"Add category",disabled:!(Z.dirty&&Z.isValid),className:"submitButton"})]})})})}},7175:function(t,e,n){n.d(e,{Yc:function(){return c},m5:function(){return l},fi:function(){return u},BG:function(){return s}});var r=n(4569),o=n.n(r),c={addCategory:function(t){return o().post("/Catigories/add/".concat(t)).then((function(t){return t.data}))},removeCategory:function(t){return o().delete("/Catigories/delete/".concat(t))},editCategory:function(t,e){return o().post("Catigories/changeName/".concat(e,"?newName=").concat(t)).then((function(t){return t.data}))},getCategories:function(){return o().get("/Catigories/GetAllCategories").then((function(t){return t.data}))},getProductsByCategoryId:function(t,e){return o().get("/Catigories/GetProductsFromCategory?id=".concat(t,"&state=").concat(e)).then((function(t){return t.data}))}},a={addProduct:function(t){return o().post("/Product/add",t).then((function(t){return t.data}))},deleteProduct:function(t){return o().delete("/Product/delete/".concat(t))},getProducts:function(t){return o().get("/Product/GetAll?state=".concat(t)).then((function(t){return t.data}))},changeProductName:function(t,e){return o().post("Product/changeProductName/".concat(t,"?name=").concat(e)).then((function(t){return t.data}))},changeProductCategory:function(t,e){return o().post("Product/moveToCategory/".concat(t,"?categoryName=").concat(e)).then((function(t){return t.data}))},changeSellingPrice:function(t,e){return o().post("Product/addSallingPrice/".concat(t,"?price=").concat(e)).then((function(t){return t.data}))},addSellingDate:function(t,e){return o().post("Product/addSallingDate/".concat(t,"?time=").concat(e)).then((function(t){return t.data}))}},u=a,i=function(t){o().defaults.headers.common.Authorization="Bearer ".concat(t)},f={userRegister:function(t){return o().post("/User/register",t).then((function(t){return t.data}))},userLogin:function(t){return o().post("/User/login",t).then((function(t){var e=t.data;return i(e.token),e}))},deleteUser:function(t){return o().delete("/User/delete/".concat(t)).then((function(t){return t.data}))},addUserCash:function(t,e){return o().post("/User/addcashformonth/".concat(e),t).then((function(t){return t.data}))},getAllUserMoney:function(t){return o().get("User/getAllUserMoney/".concat(t)).then((function(t){return t.data}))},getAllUsers:function(){return o().get("User/getAllUsers").then((function(t){return t.data}))},editLogin:function(t,e){return o().post("User/editLogin/".concat(t,"?newLogin=").concat(e)).then((function(t){return t.data}))}},s=f,l={generateExel:function(){return o().get("/Common/generateExcel").then((function(t){return t.data}))},getCashFlow:function(){return o().get("/Common/chashFlow").then((function(t){return t.data}))},convertMoney:function(t){return o().get("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/".concat(t,".json")).then((function(t){return t.data}))}}},2110:function(t,e,n){var r=n(8309),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function i(t){return r.isMemo(t)?a:u[t.$$typeof]||o}u[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[r.Memo]=a;var f=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;t.exports=function t(e,n,r){if("string"!==typeof n){if(y){var o=p(n);o&&o!==y&&t(e,o,r)}var a=s(n);l&&(a=a.concat(l(n)));for(var u=i(e),m=i(n),b=0;b<a.length;++b){var g=a[b];if(!c[g]&&(!r||!r[g])&&(!m||!m[g])&&(!u||!u[g])){var h=d(n,g);try{f(e,g,h)}catch(v){}}}}return e}},746:function(t,e){var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,h=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,j=n?Symbol.for("react.scope"):60119;function P(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case s:case l:case c:case u:case a:case p:return t;default:switch(t=t&&t.$$typeof){case f:case d:case b:case m:case i:return t;default:return e}}case o:return e}}}function C(t){return P(t)===l}e.AsyncMode=s,e.ConcurrentMode=l,e.ContextConsumer=f,e.ContextProvider=i,e.Element=r,e.ForwardRef=d,e.Fragment=c,e.Lazy=b,e.Memo=m,e.Portal=o,e.Profiler=u,e.StrictMode=a,e.Suspense=p,e.isAsyncMode=function(t){return C(t)||P(t)===s},e.isConcurrentMode=C,e.isContextConsumer=function(t){return P(t)===f},e.isContextProvider=function(t){return P(t)===i},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return P(t)===d},e.isFragment=function(t){return P(t)===c},e.isLazy=function(t){return P(t)===b},e.isMemo=function(t){return P(t)===m},e.isPortal=function(t){return P(t)===o},e.isProfiler=function(t){return P(t)===u},e.isStrictMode=function(t){return P(t)===a},e.isSuspense=function(t){return P(t)===p},e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===c||t===l||t===u||t===a||t===p||t===y||"object"===typeof t&&null!==t&&(t.$$typeof===b||t.$$typeof===m||t.$$typeof===i||t.$$typeof===f||t.$$typeof===d||t.$$typeof===h||t.$$typeof===v||t.$$typeof===j||t.$$typeof===g)},e.typeOf=P},8309:function(t,e,n){t.exports=n(746)},7326:function(t,e,n){function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return r}})},5671:function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},3144:function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:function(){return o}})},3668:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(1120),o=n(8814);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}var a=n(7326);function u(t,e){if(e&&("object"===c(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,a.Z)(t)}function i(t){var e=(0,o.Z)();return function(){var n,o=(0,r.Z)(t);if(e){var c=(0,r.Z)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return u(this,n)}}},4942:function(t,e,n){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return r}})},1120:function(t,e,n){function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}n.d(e,{Z:function(){return r}})},136:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(9611);function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,r.Z)(t,e)}},8814:function(t,e,n){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}n.d(e,{Z:function(){return r}})},1413:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(4942);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},2982:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(907);var o=n(181);function c(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=AddCategory.cdceb266.chunk.js.map