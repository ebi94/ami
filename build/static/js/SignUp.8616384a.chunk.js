(this["webpackJsonp@devtri/ami-reservation"]=this["webpackJsonp@devtri/ami-reservation"]||[]).push([[15],{2689:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(17),o=t(77),c=t(7),l=(t(211),t(124)),s=(t(748),t(749)),d=(t(340),t(212)),p=t(44),u=t(28),m=t(656),b=t(639),h=t(55),f=t(685),g=()=>{var n,e,t,i,o,c,f,g;const x=Object(a.useContext)(h.a),w=x.signUp,y=x.loggedIn,E=Object(m.b)({mode:"onChange"}),O=E.control,j=E.watch,v=E.errors,k=E.handleSubmit,N=Object(a.useState)(!1),S=Object(p.a)(N,2),z=S[0],C=S[1],F=j("password"),P=j("confirmPassword");return y?r.a.createElement(u.a,{to:{pathname:"/"}}):r.a.createElement("form",{onSubmit:k(n=>{C(!0),w(n)})},r.a.createElement(b.a,{label:"Nama Lengkap",htmlFor:"namalengkap",error:v.username&&r.a.createElement(r.a.Fragment,null,"required"===(null===(n=v.username)||void 0===n?void 0:n.type)&&r.a.createElement("span",null,"This field is required!"))},r.a.createElement(m.a,{as:r.a.createElement(d.a,null),id:"namalengkap",name:"namalengkap",defaultValue:"",control:O,rules:{required:!0}})),r.a.createElement(b.a,{label:"Email",htmlFor:"email",error:v.email&&r.a.createElement(r.a.Fragment,null,"required"===(null===(e=v.email)||void 0===e?void 0:e.type)&&r.a.createElement("span",null,"This field is required!"),"pattern"===(null===(t=v.email)||void 0===t?void 0:t.type)&&r.a.createElement("span",null,"Please enter a valid email address!"))},r.a.createElement(m.a,{as:r.a.createElement(d.a,null),type:"email",id:"email",name:"email",defaultValue:"",control:O,rules:{required:!0,pattern:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/}})),r.a.createElement(b.a,{label:"No telepon",htmlFor:"telp",error:v.telp&&r.a.createElement(r.a.Fragment,null,"required"===(null===(i=v.telp)||void 0===i?void 0:i.type)&&r.a.createElement("span",null,"This field is required!"),"pattern"===(null===(o=v.telp)||void 0===o?void 0:o.type)&&r.a.createElement("span",null,"Please enter a valid email address!"))},r.a.createElement(m.a,{as:r.a.createElement(d.a,null),type:"telp",id:"telp",name:"telp",defaultValue:"",control:O,rules:{required:!0}})),r.a.createElement(b.a,{label:"Sandi",htmlFor:"password",error:v.password&&r.a.createElement(r.a.Fragment,null,"required"===(null===(c=v.password)||void 0===c?void 0:c.type)&&r.a.createElement("span",null,"This field is required!"),"minLength"===(null===(f=v.password)||void 0===f?void 0:f.type)&&r.a.createElement("span",null,"Password must be at lest 6 characters!"),"maxLength"===(null===(g=v.password)||void 0===g?void 0:g.type)&&r.a.createElement("span",null,"Password must not be longer than 20 characters!"))},r.a.createElement(m.a,{as:r.a.createElement(d.a.Password,null),defaultValue:"",control:O,id:"password",name:"password",rules:{required:!0,minLength:6,maxLength:20}})),r.a.createElement(b.a,{label:"Ulangi Sandi",htmlFor:"confirmPassword",error:P&&F!==P&&r.a.createElement("span",null,"Your password is not same!")},r.a.createElement(m.a,{as:r.a.createElement(d.a.Password,null),defaultValue:"",control:O,id:"confirmPassword",name:"confirmPassword"})),r.a.createElement(l.a,{className:"signin-btn",type:"primary",htmlType:"submit",size:"large",style:{width:"100%"},disabled:z},z?r.a.createElement(s.a,{size:"default"}):"Daftar Sekarang"))},x=(t(914),t(873)),w=t.n(x),y=t(111),E=t.n(y);e.default=()=>r.a.createElement(f.i,null,r.a.createElement(f.c,null,r.a.createElement(o.a,{withLink:!0,linkTo:"/",src:E.a,title:"AMI"}),r.a.createElement(f.g,null,"Selamat Datang di ",r.a.createElement("br",null),"Asosiasi Muthowif Indonesia"),r.a.createElement(f.h,null,"Silahkan Daftar Disini"),r.a.createElement(g,null),r.a.createElement("br",null),r.a.createElement(f.f,null,"Sudah Punya Akun ? \xa0",r.a.createElement(i.b,{to:c.n},"Masuk Disini"))),r.a.createElement(f.a,null,r.a.createElement("div",{style:{backgroundImage:"url(".concat(w.a,")"),backgroundPosition:"center center",height:"100vh",backgroundSize:"cover"}})))},639:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(653),o=t(21),c=t(16),l=t(5);function s(){const n=Object(o.a)(["\n  margin-bottom: 24px;\n\n  .field-label {\n    display: block;\n    color: ",";\n    font-size: 15px;\n    line-height: 18px;\n    font-weight: 600;\n    margin-bottom: 15px;\n  }\n\n  .ant-input,\n  .ant-picker,\n  .ant-input-number,\n  .ant-input-password {\n    width: 100%;\n    min-height: 48px;\n    border-radius: 3px;\n    border-color: ",";\n    &:focus,\n    &.ant-input-focused,\n    &.ant-picker-focused,\n    &.ant-input-number-focused,\n    &.ant-input-password-focused {\n      box-shadow: 0 0 0 1px rgba(0, 132, 137, 0.2);\n    }\n  }\n\n  .ant-checkbox-wrapper {\n    .ant-checkbox {\n      + span {\n        font-size: 15px;\n        font-weight: 700;\n        color: ",";\n        line-height: 1;\n      }\n      .ant-checkbox-inner {\n        border-radius: 0;\n        border-color: ",";\n      }\n      &.ant-checkbox-checked {\n        .ant-checkbox-inner {\n          border-color: ",";\n          background-color: ",";\n        }\n      }\n    }\n  }\n\n  .ant-input-number {\n    max-width: 100px;\n    .ant-input-number-input {\n      min-height: 48px;\n    }\n    &:hover {\n      border-color: ",";\n    }\n  }\n  .ant-input-number-handler:hover {\n    .ant-input-number-handler-up-inner,\n    .ant-input-number-handler-down-inner {\n      color: ",";\n    }\n  }\n\n  .ant-picker {\n    &:hover {\n      border-color: ",";\n    }\n  }\n\n  .ant-select {\n    &.ant-select-single:not(.ant-select-customize-input) {\n      width: 100%;\n      .ant-select-selector {\n        border-radius: 3px;\n        border-color: ",";\n        min-height: 48px;\n        .ant-select-selection-search-input {\n          min-height: 48px;\n        }\n        .ant-select-selection-item {\n          display: flex;\n          align-items: center;\n        }\n      }\n    }\n    &.ant-select-focused {\n      &.ant-select-single:not(.ant-select-customize-input) {\n        .ant-select-selector {\n          box-shadow: 0 0 0 1px rgba(0, 132, 137, 0.2);\n        }\n      }\n    }\n  }\n\n  &.has-error {\n    .ant-input,\n    .ant-input-password {\n      border-color: ",";\n    }\n    .feedback {\n      color: ",";\n    }\n    .ant-input-password {\n      .ant-input {\n        border-color: transparent;\n      }\n    }\n  }\n\n  .ant-input-password {\n    .ant-input {\n      min-height: auto;\n      border-radius: initial;\n      border-color: transparent;\n      &:focus {\n        box-shadow: none;\n      }\n    }\n  }\n\n  .ant-radio-group-solid {\n    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {\n      border-color: ",";\n      background-color: ",";\n      &::before {\n        content: none;\n      }\n      &:hover {\n        color: #fff;\n        &::before {\n          content: none;\n        }\n      }\n    }\n    .ant-radio-button-wrapper {\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n\n  button[type='submit'] {\n    border-radius: 3px;\n    height: 47px;\n    border-color: ",";\n    background-color: ",";\n    font-size: 15px;\n    font-weight: 700;\n    text-transform: capitalize;\n    padding-left: 28px;\n    padding-right: 28px;\n    line-height: 1;\n\n    &::after {\n      content: none;\n    }\n  }\n"]);return s=function(){return n},n}var d=c.d.div(s(),Object(l.a)("text.0","#2C2C2C"),Object(l.a)("border.3","#E6E6E6"),Object(l.a)("text.0","#2C2C2C"),Object(l.a)("text.1","#909090"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"),Object(l.a)("border.3","#E6E6E6"),Object(l.a)("primary.0","#008489"),Object(l.a)("border.3","#E6E6E6"),Object(l.a)("border.3","#E6E6E6"),Object(l.a)("error.0","#F9503D"),Object(l.a)("error.0","#F9503D"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"));e.a=({className:n,label:e,labelTag:t,htmlFor:a,children:o,error:c})=>{const l=["form-control"];return c&&l.push("has-error"),n&&l.push(n),r.a.createElement(d,{className:l.join(" ")},e&&r.a.createElement(i.a,{className:"field-label",as:t,htmlFor:a,content:e}),o,c&&r.a.createElement("div",{className:"feedback"},c))}},653:function(n,e,t){"use strict";var a=t(89),r=t(0),i=t.n(r),o=t(16),c=t(13),l=t(90);const s=Object(o.d)("label")(l.a,c.k,c.m,c.x,c.q,c.p,Object(l.b)("Heading"));e.a=n=>{let e=n.htmlFor,t=n.content,r=Object(a.a)(n,["htmlFor","content"]);return i.a.createElement(s,Object.assign({htmlFor:e},r),t)}},685:function(n,e,t){"use strict";t.d(e,"c",(function(){return f})),t.d(e,"b",(function(){return g})),t.d(e,"e",(function(){return x})),t.d(e,"d",(function(){return w})),t.d(e,"g",(function(){return y})),t.d(e,"h",(function(){return E})),t.d(e,"f",(function(){return O})),t.d(e,"a",(function(){return j}));var a=t(21),r=t(16),i=t(5);function o(){const n=Object(a.a)(["\n  width: 57%;\n  @media only screen and (max-width: 1200px) {\n    width: 50%;\n  }\n  @media only screen and (max-width: 991px) {\n    display: none;\n  }\n  > div {\n    position: fixed;\n    width: 57%;\n    top: 0;\n    right: 0;\n\n    @media only screen and (max-width: 1200px) {\n      width: 50%;\n    }\n  }\n"]);return o=function(){return n},n}function c(){const n=Object(a.a)(["\n  text-align: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: ",";\n  line-height: 1;\n  a {\n    color: ",";\n    &:hover,\n    &:focus {\n      outline: none;\n      color: #008489d1;\n      text-decoration: none;\n    }\n  }\n"]);return c=function(){return n},n}function l(){const n=Object(a.a)(["\n  color: ",";\n  font-size: 25px;\n  line-height: 30px;\n  margin-bottom: 45px;\n  margin-top: 10px;\n  @media only screen and (max-width: 1600px) {\n    font-size: 22px;\n  }\n  @media only screen and (max-width: 1440px) {\n    font-size: 20px;\n  }\n  @media only screen and (max-width: 1440px) {\n    font-size: 18px;\n  }\n"]);return l=function(){return n},n}function s(){const n=Object(a.a)(["\n  color: ",";\n  font-size: 45px;\n  line-height: 54px;\n  font-weight: 700;\n  margin-bottom: 0;\n  margin-top: 58px;\n  @media only screen and (max-width: 1600px) {\n    font-size: 38px;\n    line-height: 48px;\n  }\n  @media only screen and (max-width: 1440px) {\n    font-size: 32px;\n    line-height: 42px;\n  }\n  @media only screen and (max-width: 1200px) {\n    font-size: 28px;\n    line-height: 32px;\n  }\n"]);return s=function(){return n},n}function d(){const n=Object(a.a)(["\n  font-size: 15px;\n  line-height: 1;\n  font-weight: 700;\n  color: ",";\n  padding: 0 8px;\n"]);return d=function(){return n},n}function p(){const n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n\n  .field-container {\n    .ant-form-item {\n      margin-bottom: 0;\n      margin-right: 10px;\n    }\n  }\n\n  .ant-switch {\n    min-width: 36px;\n    height: 21px;\n    &.ant-switch-checked {\n      background-color: ",";\n    }\n    &::after {\n      width: 17px;\n      height: 17px;\n    }\n    &:focus {\n      box-shadow: none;\n    }\n    .ant-click-animating-node {\n      display: none;\n    }\n  }\n"]);return p=function(){return n},n}function u(){const n=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  > a {\n    color: ",";\n    font-size: 15px;\n    font-weight: 700;\n    line-height: 1;\n    &:hover,\n    &:focus {\n      outline: none;\n      color: #008489d1;\n      text-decoration: none;\n    }\n  }\n"]);return u=function(){return n},n}function m(){const n=Object(a.a)(["\n  width: 43%;\n  padding: 81px;\n  @media only screen and (min-width: 1441px) {\n    padding: 130px;\n  }\n  @media only screen and (max-width: 1200px) {\n    width: 50%;\n  }\n  @media only screen and (max-width: 991px) {\n    padding: 56px;\n    width: 80%;\n    margin: 0 auto;\n  }\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n  @media only screen and (max-width: 480px) {\n    padding: 30px;\n  }\n\n  .signin-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n    height: 57px;\n    font-size: 17px;\n    font-weight: 700;\n    border-color: ",";\n    background-color: ",";\n    svg {\n      width: 18px;\n      height: 18px;\n      margin-right: 2px;\n    }\n    &::after {\n      content: none;\n    }\n    &:hover,\n    &:focus {\n      border-color: #008489d1;\n      background-color: #008489d1;\n    }\n  }\n\n  .ant-divider {\n    margin: 41px 0 !important;\n    .ant-divider-inner-text {\n      font-size: 15px;\n      font-weight: 700;\n      color: ",";\n    }\n  }\n\n  .ant-btn {\n    &.facebook-btn,\n    &.github-btn,\n    &.firebase-btn,\n    &.google-btn {\n      height: 57px;\n      border-radius: 3px;\n      font-size: 15px;\n      font-weight: 700;\n      &::after {\n        content: none;\n      }\n    }\n    &.facebook-btn {\n      border-color: ",";\n      background-color: ",";\n    }\n    &.github-btn {\n      border-color: ",";\n      background-color: ",";\n    }\n    &.firebase-btn {\n      border-color: ",";\n      background-color: ",";\n    }\n    &.google-btn {\n      border-color: ",";\n      background-color: ",";\n    }\n  }\n"]);return m=function(){return n},n}function b(){const n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n"]);return b=function(){return n},n}const h=r.d.div(b()),f=r.d.div(m(),Object(i.a)("primary.0","#008489"),Object(i.a)("primary.0","#008489"),Object(i.a)("text.2","#777777"),Object(i.a)("color.7","#3b5998"),Object(i.a)("color.7","#3b5998"),Object(i.a)("color.14","#00ACEE"),Object(i.a)("color.14","#00ACEE"),Object(i.a)("color","#FFCB2B"),Object(i.a)("color","#FFCB2B"),Object(i.a)("color.10","#dd4b39"),Object(i.a)("color.10","#dd4b39")),g=r.d.div(u(),Object(i.a)("primary.0","#008489")),x=r.d.div(p(),Object(i.a)("primary.0","#008489")),w=r.d.span(d(),Object(i.a)("text.0","#2C2C2C")),y=r.d.h2(s(),Object(i.a)("text.0","#2C2C2C")),E=r.d.p(l(),Object(i.a)("text.2","#777777")),O=r.d.p(c(),Object(i.a)("text.2","#777777"),Object(i.a)("primary.0","#008489")),j=r.d.div(o());e.i=h},748:function(n,e,t){"use strict";t(88),t(874)},749:function(n,e,t){"use strict";var a=t(3),r=t(2),i=t(9),o=t(10),c=t(11),l=t(12),s=t(0),d=t(6),p=t.n(d),u=t(26),m=t(342),b=t.n(m),h=t(225),f=t(56),g=t(24),x=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(t[a[r]]=n[a[r]])}return t},w=(Object(f.a)("small","default","large"),null);var y=function(n){Object(c.a)(t,n);var e=Object(l.a)(t);function t(n){var o;Object(i.a)(this,t),(o=e.call(this,n)).debouncifyUpdateSpinning=function(n){var e=(n||o.props).delay;e&&(o.cancelExistingSpin(),o.updateSpinning=b()(o.originalUpdateSpinning,e))},o.updateSpinning=function(){var n=o.props.spinning;o.state.spinning!==n&&o.setState({spinning:n})},o.renderSpin=function(n){var e,t=n.getPrefixCls,i=n.direction,c=o.props,l=c.prefixCls,d=c.className,m=c.size,b=c.tip,h=c.wrapperClassName,f=c.style,y=x(c,["prefixCls","className","size","tip","wrapperClassName","style"]),E=o.state.spinning,O=t("spin",l),j=p()(O,(e={},Object(r.a)(e,"".concat(O,"-sm"),"small"===m),Object(r.a)(e,"".concat(O,"-lg"),"large"===m),Object(r.a)(e,"".concat(O,"-spinning"),E),Object(r.a)(e,"".concat(O,"-show-text"),!!b),Object(r.a)(e,"".concat(O,"-rtl"),"rtl"===i),e),d),v=Object(u.a)(y,["spinning","delay","indicator"]),k=s.createElement("div",Object(a.a)({},v,{style:f,className:j}),function(n,e){var t=e.indicator,a="".concat(n,"-dot");return null===t?null:Object(g.b)(t)?Object(g.a)(t,{className:p()(t.props.className,a)}):Object(g.b)(w)?Object(g.a)(w,{className:p()(w.props.className,a)}):s.createElement("span",{className:p()(a,"".concat(n,"-dot-spin"))},s.createElement("i",{className:"".concat(n,"-dot-item")}),s.createElement("i",{className:"".concat(n,"-dot-item")}),s.createElement("i",{className:"".concat(n,"-dot-item")}),s.createElement("i",{className:"".concat(n,"-dot-item")}))}(O,o.props),b?s.createElement("div",{className:"".concat(O,"-text")},b):null);if(o.isNestedPattern()){var N=p()("".concat(O,"-container"),Object(r.a)({},"".concat(O,"-blur"),E));return s.createElement("div",Object(a.a)({},v,{className:p()("".concat(O,"-nested-loading"),h)}),E&&s.createElement("div",{key:"loading"},k),s.createElement("div",{className:N,key:"container"},o.props.children))}return k};var c=n.spinning,l=function(n,e){return!!n&&!!e&&!isNaN(Number(e))}(c,n.delay);return o.state={spinning:c&&!l},o.originalUpdateSpinning=o.updateSpinning,o.debouncifyUpdateSpinning(n),o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return s.createElement(h.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(n){w=n}}]),t}(s.Component);y.defaultProps={spinning:!0,size:"default",wrapperClassName:""},e.a=y},873:function(n,e,t){n.exports=t.p+"static/media/bg4.0defde3c.jpg"},874:function(n,e,t){},914:function(n,e,t){"use strict";t(654),t(657),t(655),t(658),t(211),t(124),t(18),t(44),t(0),t(28),t(55)}}]);
//# sourceMappingURL=SignUp.8616384a.chunk.js.map