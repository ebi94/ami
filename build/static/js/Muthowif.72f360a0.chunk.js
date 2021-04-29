(this["webpackJsonp@devtri/ami-reservation"]=this["webpackJsonp@devtri/ami-reservation"]||[]).push([[13],{2677:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(75),i=(t(7),t(209),t(123)),c=(t(338),t(210)),l=t(26),d=t(632),s=t(620),p=t(55),u=(t(645),()=>{var n,e,t,o,u,m,b,h;const x=Object(a.useContext)(p.a),f=x.signUp,g=x.loggedIn,w=Object(d.b)({mode:"onChange"}),j=w.control,E=w.watch,O=w.errors,y=w.handleSubmit,v=E("password"),k=E("confirmPassword");return g?r.a.createElement(l.a,{to:{pathname:"/"}}):r.a.createElement("form",{onSubmit:y(n=>{f(n)})},r.a.createElement(s.a,{label:"Nama Lengkap",htmlFor:"namalengkap",error:O.username&&r.a.createElement(r.a.Fragment,null,"required"===(null===(n=O.username)||void 0===n?void 0:n.type)&&r.a.createElement("span",null,"This field is required!"))},r.a.createElement(d.a,{as:r.a.createElement(c.a,null),id:"namalengkap",name:"namalengkap",defaultValue:"",control:j,rules:{required:!0}})),r.a.createElement(s.a,{label:"Email",htmlFor:"email",error:O.email&&r.a.createElement(r.a.Fragment,null,"required"===(null===(e=O.email)||void 0===e?void 0:e.type)&&r.a.createElement("span",null,"This field is required!"),"pattern"===(null===(t=O.email)||void 0===t?void 0:t.type)&&r.a.createElement("span",null,"Please enter a valid email address!"))},r.a.createElement(d.a,{as:r.a.createElement(c.a,null),type:"email",id:"email",name:"email",defaultValue:"",control:j,rules:{required:!0,pattern:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/}})),r.a.createElement(s.a,{label:"No telepon",htmlFor:"telp",error:O.telp&&r.a.createElement(r.a.Fragment,null,"required"===(null===(o=O.telp)||void 0===o?void 0:o.type)&&r.a.createElement("span",null,"This field is required!"),"pattern"===(null===(u=O.telp)||void 0===u?void 0:u.type)&&r.a.createElement("span",null,"Please enter a valid email address!"))},r.a.createElement(d.a,{as:r.a.createElement(c.a,null),type:"telp",id:"telp",name:"telp",defaultValue:"",control:j,rules:{required:!0}})),r.a.createElement(s.a,{label:"Sandi",htmlFor:"password",error:O.password&&r.a.createElement(r.a.Fragment,null,"required"===(null===(m=O.password)||void 0===m?void 0:m.type)&&r.a.createElement("span",null,"This field is required!"),"minLength"===(null===(b=O.password)||void 0===b?void 0:b.type)&&r.a.createElement("span",null,"Password must be at lest 6 characters!"),"maxLength"===(null===(h=O.password)||void 0===h?void 0:h.type)&&r.a.createElement("span",null,"Password must not be longer than 20 characters!"))},r.a.createElement(d.a,{as:r.a.createElement(c.a.Password,null),defaultValue:"",control:j,id:"password",name:"password",rules:{required:!0,minLength:6,maxLength:20}})),r.a.createElement(s.a,{label:"Ulangi Sandi",htmlFor:"confirmPassword",error:k&&v!==k&&r.a.createElement("span",null,"Your password is not same!")},r.a.createElement(d.a,{as:r.a.createElement(c.a.Password,null),defaultValue:"",control:j,id:"confirmPassword",name:"confirmPassword"})),r.a.createElement(i.a,{className:"signin-btn",type:"primary",htmlType:"submit",size:"large",style:{width:"100%"}},"Daftar Sekarang"))}),m=t(20),b=t(15),h=t(5);function x(){const n=Object(m.a)(["\n  color: ",";\n  font-size: 25px;\n  line-height: 18px;\n  margin-bottom: 30px;\n"]);return x=function(){return n},n}function f(){const n=Object(m.a)(["\n  color: ",";\n  font-size: 35px;\n  font-weight: 700;\n  margin-bottom: 10px;\n"]);return f=function(){return n},n}function g(){const n=Object(m.a)(["\n  box-shadow: 1px 1px 5px -1px #a3a3a3;\n  padding: 10% 20%;\n  border-radius: 7px;\n}\n"]);return g=function(){return n},n}function w(){const n=Object(m.a)(["\n  text-align: center;\n  padding: 60px 0;\n  @media only screen and (max-width: 480px) {\n    padding: 40px 0;\n  }\n"]);return w=function(){return n},n}function j(){const n=Object(m.a)(["\n  max-width: 1140px;\n  margin: 0 auto;\n  padding-bottom: 30px;\n\n  @media only screen and (max-width: 1200px) {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  @media only screen and (max-width: 480px) {\n    padding: 0 25px;\n  }\n"]);return j=function(){return n},n}const E=b.d.div(j()),O=b.d.div(w()),y=b.d.div(g()),v=b.d.h2(f(),Object(h.a)("text.0","#2C2C2C")),k=b.d.p(x(),Object(h.a)("text.0","#2C2C2C"));var C=E,z=(t(655),t(109)),F=t.n(z);e.default=()=>r.a.createElement(C,null,r.a.createElement(O,null,r.a.createElement(o.a,{withLink:!0,linkTo:"/",src:F.a,title:"AMI"}),r.a.createElement(v,null,"Selamat Datang di AMI"),r.a.createElement(k,null,"Silahkan Daftar disini")),r.a.createElement(y,null,r.a.createElement(u,null)))},620:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(623),i=t(20),c=t(15),l=t(5);function d(){const n=Object(i.a)(["\n  margin-bottom: 24px;\n\n  .field-label {\n    display: block;\n    color: ",";\n    font-size: 15px;\n    line-height: 18px;\n    font-weight: 600;\n    margin-bottom: 15px;\n  }\n\n  .ant-input,\n  .ant-picker,\n  .ant-input-number,\n  .ant-input-password {\n    width: 100%;\n    min-height: 48px;\n    border-radius: 3px;\n    border-color: ",";\n    &:focus,\n    &.ant-input-focused,\n    &.ant-picker-focused,\n    &.ant-input-number-focused,\n    &.ant-input-password-focused {\n      box-shadow: 0 0 0 1px rgba(0, 132, 137, 0.2);\n    }\n  }\n\n  .ant-checkbox-wrapper {\n    .ant-checkbox {\n      + span {\n        font-size: 15px;\n        font-weight: 700;\n        color: ",";\n        line-height: 1;\n      }\n      .ant-checkbox-inner {\n        border-radius: 0;\n        border-color: ",";\n      }\n      &.ant-checkbox-checked {\n        .ant-checkbox-inner {\n          border-color: ",";\n          background-color: ",";\n        }\n      }\n    }\n  }\n\n  .ant-input-number {\n    max-width: 100px;\n    .ant-input-number-input {\n      min-height: 48px;\n    }\n    &:hover {\n      border-color: ",";\n    }\n  }\n  .ant-input-number-handler:hover {\n    .ant-input-number-handler-up-inner,\n    .ant-input-number-handler-down-inner {\n      color: ",";\n    }\n  }\n\n  .ant-picker {\n    &:hover {\n      border-color: ",";\n    }\n  }\n\n  .ant-select {\n    &.ant-select-single:not(.ant-select-customize-input) {\n      width: 100%;\n      .ant-select-selector {\n        border-radius: 3px;\n        border-color: ",";\n        min-height: 48px;\n        .ant-select-selection-search-input {\n          min-height: 48px;\n        }\n        .ant-select-selection-item {\n          display: flex;\n          align-items: center;\n        }\n      }\n    }\n    &.ant-select-focused {\n      &.ant-select-single:not(.ant-select-customize-input) {\n        .ant-select-selector {\n          box-shadow: 0 0 0 1px rgba(0, 132, 137, 0.2);\n        }\n      }\n    }\n  }\n\n  &.has-error {\n    .ant-input,\n    .ant-input-password {\n      border-color: ",";\n    }\n    .feedback {\n      color: ",";\n    }\n    .ant-input-password {\n      .ant-input {\n        border-color: transparent;\n      }\n    }\n  }\n\n  .ant-input-password {\n    .ant-input {\n      min-height: auto;\n      border-radius: initial;\n      border-color: transparent;\n      &:focus {\n        box-shadow: none;\n      }\n    }\n  }\n\n  .ant-radio-group-solid {\n    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {\n      border-color: ",";\n      background-color: ",";\n      &::before {\n        content: none;\n      }\n      &:hover {\n        color: #fff;\n        &::before {\n          content: none;\n        }\n      }\n    }\n    .ant-radio-button-wrapper {\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n\n  button[type='submit'] {\n    border-radius: 3px;\n    height: 47px;\n    border-color: ",";\n    background-color: ",";\n    font-size: 15px;\n    font-weight: 700;\n    text-transform: capitalize;\n    padding-left: 28px;\n    padding-right: 28px;\n    line-height: 1;\n\n    &::after {\n      content: none;\n    }\n  }\n"]);return d=function(){return n},n}var s=c.d.div(d(),Object(l.a)("text.0","#2C2C2C"),Object(l.a)("border.3","#E6E6E6"),Object(l.a)("text.0","#2C2C2C"),Object(l.a)("text.1","#909090"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"),Object(l.a)("border.3","#E6E6E6"),Object(l.a)("primary.0","#008489"),Object(l.a)("border.3","#E6E6E6"),Object(l.a)("border.3","#E6E6E6"),Object(l.a)("error.0","#F9503D"),Object(l.a)("error.0","#F9503D"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"),Object(l.a)("primary.0","#008489"));e.a=({className:n,label:e,labelTag:t,htmlFor:a,children:i,error:c})=>{const l=["form-control"];return c&&l.push("has-error"),n&&l.push(n),r.a.createElement(s,{className:l.join(" ")},e&&r.a.createElement(o.a,{className:"field-label",as:t,htmlFor:a,content:e}),i,c&&r.a.createElement("div",{className:"feedback"},c))}},623:function(n,e,t){"use strict";var a=t(88),r=t(0),o=t.n(r),i=t(15),c=t(13),l=t(89);const d=Object(i.d)("label")(l.a,c.k,c.m,c.x,c.q,c.p,Object(l.b)("Heading"));e.a=n=>{let e=n.htmlFor,t=n.content,r=Object(a.a)(n,["htmlFor","content"]);return o.a.createElement(d,Object.assign({htmlFor:e},r),t)}},645:function(n,e,t){"use strict";t.d(e,"c",(function(){return x})),t.d(e,"b",(function(){return f})),t.d(e,"e",(function(){return g})),t.d(e,"d",(function(){return w})),t.d(e,"g",(function(){return j})),t.d(e,"h",(function(){return E})),t.d(e,"f",(function(){return O})),t.d(e,"a",(function(){return y}));var a=t(20),r=t(15),o=t(5);function i(){const n=Object(a.a)(["\n  width: 57%;\n  @media only screen and (max-width: 1200px) {\n    width: 50%;\n  }\n  @media only screen and (max-width: 991px) {\n    display: none;\n  }\n  > div {\n    position: fixed;\n    width: 57%;\n    top: 0;\n    right: 0;\n\n    @media only screen and (max-width: 1200px) {\n      width: 50%;\n    }\n  }\n"]);return i=function(){return n},n}function c(){const n=Object(a.a)(["\n  text-align: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: ",";\n  line-height: 1;\n  a {\n    color: ",";\n    &:hover,\n    &:focus {\n      outline: none;\n      color: #008489d1;\n      text-decoration: none;\n    }\n  }\n"]);return c=function(){return n},n}function l(){const n=Object(a.a)(["\n  color: ",";\n  font-size: 25px;\n  line-height: 30px;\n  margin-bottom: 45px;\n  margin-top: 10px;\n  @media only screen and (max-width: 1600px) {\n    font-size: 22px;\n  }\n  @media only screen and (max-width: 1440px) {\n    font-size: 20px;\n  }\n  @media only screen and (max-width: 1440px) {\n    font-size: 18px;\n  }\n"]);return l=function(){return n},n}function d(){const n=Object(a.a)(["\n  color: ",";\n  font-size: 45px;\n  line-height: 54px;\n  font-weight: 700;\n  margin-bottom: 0;\n  margin-top: 58px;\n  @media only screen and (max-width: 1600px) {\n    font-size: 38px;\n    line-height: 48px;\n  }\n  @media only screen and (max-width: 1440px) {\n    font-size: 32px;\n    line-height: 42px;\n  }\n  @media only screen and (max-width: 1200px) {\n    font-size: 28px;\n    line-height: 32px;\n  }\n"]);return d=function(){return n},n}function s(){const n=Object(a.a)(["\n  font-size: 15px;\n  line-height: 1;\n  font-weight: 700;\n  color: ",";\n  padding: 0 8px;\n"]);return s=function(){return n},n}function p(){const n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n\n  .field-container {\n    .ant-form-item {\n      margin-bottom: 0;\n      margin-right: 10px;\n    }\n  }\n\n  .ant-switch {\n    min-width: 36px;\n    height: 21px;\n    &.ant-switch-checked {\n      background-color: ",";\n    }\n    &::after {\n      width: 17px;\n      height: 17px;\n    }\n    &:focus {\n      box-shadow: none;\n    }\n    .ant-click-animating-node {\n      display: none;\n    }\n  }\n"]);return p=function(){return n},n}function u(){const n=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  > a {\n    color: ",";\n    font-size: 15px;\n    font-weight: 700;\n    line-height: 1;\n    &:hover,\n    &:focus {\n      outline: none;\n      color: #008489d1;\n      text-decoration: none;\n    }\n  }\n"]);return u=function(){return n},n}function m(){const n=Object(a.a)(["\n  width: 43%;\n  padding: 81px;\n  @media only screen and (min-width: 1441px) {\n    padding: 130px;\n  }\n  @media only screen and (max-width: 1200px) {\n    width: 50%;\n  }\n  @media only screen and (max-width: 991px) {\n    padding: 56px;\n    width: 80%;\n    margin: 0 auto;\n  }\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n  @media only screen and (max-width: 480px) {\n    padding: 30px;\n  }\n\n  .signin-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n    height: 57px;\n    font-size: 17px;\n    font-weight: 700;\n    border-color: ",";\n    background-color: ",";\n    svg {\n      width: 18px;\n      height: 18px;\n      margin-right: 2px;\n    }\n    &::after {\n      content: none;\n    }\n    &:hover,\n    &:focus {\n      border-color: #008489d1;\n      background-color: #008489d1;\n    }\n  }\n\n  .ant-divider {\n    margin: 41px 0 !important;\n    .ant-divider-inner-text {\n      font-size: 15px;\n      font-weight: 700;\n      color: ",";\n    }\n  }\n\n  .ant-btn {\n    &.facebook-btn,\n    &.github-btn,\n    &.firebase-btn,\n    &.google-btn {\n      height: 57px;\n      border-radius: 3px;\n      font-size: 15px;\n      font-weight: 700;\n      &::after {\n        content: none;\n      }\n    }\n    &.facebook-btn {\n      border-color: ",";\n      background-color: ",";\n    }\n    &.github-btn {\n      border-color: ",";\n      background-color: ",";\n    }\n    &.firebase-btn {\n      border-color: ",";\n      background-color: ",";\n    }\n    &.google-btn {\n      border-color: ",";\n      background-color: ",";\n    }\n  }\n"]);return m=function(){return n},n}function b(){const n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n"]);return b=function(){return n},n}const h=r.d.div(b()),x=r.d.div(m(),Object(o.a)("primary.0","#008489"),Object(o.a)("primary.0","#008489"),Object(o.a)("text.2","#777777"),Object(o.a)("color.7","#3b5998"),Object(o.a)("color.7","#3b5998"),Object(o.a)("color.14","#00ACEE"),Object(o.a)("color.14","#00ACEE"),Object(o.a)("color","#FFCB2B"),Object(o.a)("color","#FFCB2B"),Object(o.a)("color.10","#dd4b39"),Object(o.a)("color.10","#dd4b39")),f=r.d.div(u(),Object(o.a)("primary.0","#008489")),g=r.d.div(p(),Object(o.a)("primary.0","#008489")),w=r.d.span(s(),Object(o.a)("text.0","#2C2C2C")),j=r.d.h2(d(),Object(o.a)("text.0","#2C2C2C")),E=r.d.p(l(),Object(o.a)("text.2","#777777")),O=r.d.p(c(),Object(o.a)("text.2","#777777"),Object(o.a)("primary.0","#008489")),y=r.d.div(i());e.i=h},655:function(n,e,t){n.exports=t.p+"static/media/login-page-bg.eea21cfc.jpg"}}]);
//# sourceMappingURL=Muthowif.72f360a0.chunk.js.map