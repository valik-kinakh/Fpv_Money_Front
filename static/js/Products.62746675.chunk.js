"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[326],{2246:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var o=n(1413),i=n(2982),r=n(5861),a=n(885),s=n(7757),l=n.n(s),d="Products_wrapper__aniuN",c="Products_loaderWrapper__cHCzJ",u="Products_selectWrapper__AtyoL",p="Products_select__NVaeX",h="Products_warning__Ty0bg",v="Products_moneyInfo__Qmsps",m="Products_optionsWrapper__NkICO",f=n(6871),g=n(2791),b=n(8909),y=n(7751),Z=n(4043),x=n(1603),w=n(3915),C=n(6960),k=(n(5462),n(7175)),j=n(5795),I=[{id:2,name:"All"},{id:0,name:"Available"},{id:1,name:"Sold"}],S=n(6153),P=n(4037),_=n(9891),E=n(184);C.Am.configure();var N=function(e,t){return e+t},O=function(e){var t=e.isLoggedIn,n=(0,f.s0)(),s=(0,g.useState)([]),O=(0,a.Z)(s,2),L=O[0],T=O[1],M=(0,g.useState)([]),F=(0,a.Z)(M,2),W=F[0],A=F[1],V=(0,g.useState)([]),z=(0,a.Z)(V,2),B=z[0],G=z[1],K=(0,g.useState)(!1),R=(0,a.Z)(K,2),D=R[0],q=R[1],H=(0,g.useState)(!1),X=(0,a.Z)(H,2),J=(X[0],X[1]),Q=(0,g.useState)(2),U=(0,a.Z)(Q,2),Y=U[0],$=U[1];(0,g.useEffect)((function(){t||n("/login")}),[t]),(0,g.useEffect)((function(){return q(!0),ee().then((function(){q(!1)})),function(){J(!0)}}),[Y]);var ee=function(){var e=(0,r.Z)(l().mark((function e(){var t,n,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.fi.getProducts(Y);case 3:t=e.sent,T(t),n=(0,i.Z)(t).map((function(e){return e.price.purchasePrice})),o=(0,i.Z)(t).map((function(e){return e.price.sallingPrice?e.price.sallingPrice-e.price.purchasePrice:0})),A(o),G(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),C.Am.error(e.t0.response.data.message,{position:"top-center"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return(0,E.jsx)(b.Z,{children:D?(0,E.jsx)("div",{className:c,children:(0,E.jsx)(S.Z,{type:"Bars",color:"#ff8614",height:200,width:200})}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{className:m,children:[(0,E.jsxs)("div",{className:u,children:[(0,E.jsx)("p",{children:"Filter: "}),(0,E.jsx)(P.Z,{onChange:function(e){$(e.target.value)},value:Y,className:p,children:I.map((function(e){return(0,E.jsx)(_.Z,{value:e.id,children:e.name},e.id)}))})]}),(0,E.jsx)("div",{className:u,children:(0,E.jsx)(w.Z,{dateAdapter:y.Z,children:(0,E.jsx)(Z.Z,{disableFuture:!0,label:"Start date",openTo:"day",value:null,onChange:function(e){},renderInput:function(e){return(0,E.jsx)(x.Z,(0,o.Z)({},e))}})})}),(0,E.jsx)("div",{className:u,children:(0,E.jsx)(w.Z,{dateAdapter:y.Z,children:(0,E.jsx)(Z.Z,{disableFuture:!0,label:"End date",openTo:"day",value:null,onChange:function(e){},renderInput:function(e){return(0,E.jsx)(x.Z,(0,o.Z)({},e))}})})})]}),(0,E.jsxs)("div",{className:v,children:[(0,E.jsxs)("h2",{children:["Money spend: ",B.length>0?Math.round(B.reduce(N)):0]}),(0,E.jsxs)("h2",{children:["Money earned: ",W.length>0?Math.round(W.reduce(N)):0]})]}),(0,E.jsx)("div",{className:d,children:L.length>0&&L.map((function(e){return(0,E.jsx)(j.Z,{product:e,fetchCategories:ee},e.id)}))}),!D&&0===L.length&&(0,E.jsx)("div",{className:h,children:(0,E.jsx)("p",{children:"No items found"})})]})})}},9891:function(e,t,n){n.d(t,{Z:function(){return I}});var o=n(4942),i=n(3366),r=n(7462),a=n(2791),s=n(8182),l=n(767),d=n(2065),c=n(5255),u=n(3736),p=n(9480),h=n(4051),v=n(162),m=n(2071),f=n(208);var g=(0,f.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var b=(0,f.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var y=(0,f.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Z=n(6597);function x(e){return(0,Z.Z)("MuiMenuItem",e)}var w=(0,f.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),C=n(184),k=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],j=(0,c.ZP)(h.Z,{shouldForwardProp:function(e){return(0,c.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,i=e.ownerState;return(0,r.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!i.disableGutters&&{paddingLeft:16,paddingRight:16},i.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,o.Z)(t,"&.".concat(w.selected),(0,o.Z)({backgroundColor:(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(w.focusVisible),{backgroundColor:(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,o.Z)(t,"&.".concat(w.selected,":hover"),{backgroundColor:(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,o.Z)(t,"&.".concat(w.focusVisible),{backgroundColor:n.palette.action.focus}),(0,o.Z)(t,"&.".concat(w.disabled),{opacity:n.palette.action.disabledOpacity}),(0,o.Z)(t,"& + .".concat(g.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,o.Z)(t,"& + .".concat(g.inset),{marginLeft:52}),(0,o.Z)(t,"& .".concat(y.root),{marginTop:0,marginBottom:0}),(0,o.Z)(t,"& .".concat(y.inset),{paddingLeft:36}),(0,o.Z)(t,"& .".concat(b.root),{minWidth:36}),t),!i.dense&&(0,o.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),i.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,o.Z)({},"& .".concat(b.root," svg"),{fontSize:"1.25rem"})))})),I=a.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMenuItem"}),o=n.autoFocus,d=void 0!==o&&o,c=n.component,h=void 0===c?"li":c,f=n.dense,g=void 0!==f&&f,b=n.divider,y=void 0!==b&&b,Z=n.disableGutters,w=void 0!==Z&&Z,I=n.focusVisibleClassName,S=n.role,P=void 0===S?"menuitem":S,_=n.tabIndex,E=(0,i.Z)(n,k),N=a.useContext(p.Z),O={dense:g||N.dense||!1,disableGutters:w},L=a.useRef(null);(0,v.Z)((function(){d&&L.current&&L.current.focus()}),[d]);var T,M=(0,r.Z)({},n,{dense:O.dense,divider:y,disableGutters:w}),F=function(e){var t=e.disabled,n=e.dense,o=e.divider,i=e.disableGutters,a=e.selected,s=e.classes,d={root:["root",n&&"dense",t&&"disabled",!i&&"gutters",o&&"divider",a&&"selected"]},c=(0,l.Z)(d,x,s);return(0,r.Z)({},s,c)}(n),W=(0,m.Z)(L,t);return n.disabled||(T=void 0!==_?_:-1),(0,C.jsx)(p.Z.Provider,{value:O,children:(0,C.jsx)(j,(0,r.Z)({ref:W,role:P,tabIndex:T,component:h,focusVisibleClassName:(0,s.Z)(F.focusVisible,I)},E,{ownerState:M,classes:F}))})}))},8062:function(e,t,n){n.d(t,{d:function(){return p}});var o=n(2791),i=n(4164),r=function(){return r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},a=function(){return"undefined"!==typeof window&&!!window.document&&!!window.document.createElement},s=new(function(){function e(){var e=this;this.handleWheel=function(e){e.preventDefault()},this.handleScroll=function(){window.scrollTo.apply(window,e.lockToScrollPos)},this.handleKeydown=function(t){var n=e.options.keyboardKeys;["INPUT","TEXTAREA"].includes(t.target.tagName)&&(n=n.filter((function(t){return!e.options.authorizedInInputs.includes(t)}))),n.includes(t.keyCode)&&t.preventDefault()},this.element=null,this.lockToScrollPos=[0,0],this.options={authorizedInInputs:[32,37,38,39,40],disableKeys:!0,disableScroll:!0,disableWheel:!0,keyboardKeys:[32,33,34,35,36,37,38,39,40]},a()&&(this.element=document.scrollingElement)}return e.prototype.on=function(e,t){var n,o,i,s;if(a()){this.element=e||this.element,this.options=r(r({},this.options),t);var l=this.options,d=l.disableKeys,c=l.disableScroll;l.disableWheel&&(document.addEventListener("wheel",this.handleWheel,{passive:!1}),document.addEventListener("touchmove",this.handleWheel,{passive:!1})),c&&(this.lockToScrollPos=[null!==(o=null===(n=this.element)||void 0===n?void 0:n.scrollLeft)&&void 0!==o?o:0,null!==(s=null===(i=this.element)||void 0===i?void 0:i.scrollTop)&&void 0!==s?s:0],document.addEventListener("scroll",this.handleScroll,{passive:!1})),d&&document.addEventListener("keydown",this.handleKeydown,{passive:!1})}},e.prototype.off=function(){a()&&(document.removeEventListener("wheel",this.handleWheel),document.removeEventListener("touchmove",this.handleWheel),document.removeEventListener("scroll",this.handleScroll),document.removeEventListener("keydown",this.handleKeydown))},e}()),l={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},d={position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1e5},c={position:"relative",zIndex:100001},u=function(e){var t=e.children,n=e.isOpen,r=e.elementId,a=void 0===r?"root":r;return!1===(void 0!==n&&n)?null:(0,i.createPortal)(o.createElement("div",{style:l},o.createElement("div",{style:d,onClick:e.onOverlayClick}),o.createElement("div",{style:c},t)),document.getElementById(a))},p=function(e,t){void 0===e&&(e="root"),void 0===t&&(t={});var n=t.preventScroll,i=void 0!==n&&n,r=t.closeOnOverlayClick,a=void 0===r||r,l=(0,o.useState)(!1),d=l[0],c=l[1],p=(0,o.useCallback)((function(){c(!0),i&&s.on()}),[c,i]),h=(0,o.useCallback)((function(){c(!1),i&&s.off()}),[c,i]),v=(0,o.useCallback)((function(e){e.stopPropagation(),a&&h()}),[a,h]);return[(0,o.useCallback)((function(t){return o.createElement(u,{isOpen:d,onOverlayClick:v,elementId:e},t.children)}),[d,h,e]),p,h,d]}}}]);
//# sourceMappingURL=Products.62746675.chunk.js.map