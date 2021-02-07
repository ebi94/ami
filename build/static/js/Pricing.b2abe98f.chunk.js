(this["webpackJsonp@devtri/ami-reservation"]=this["webpackJsonp@devtri/ami-reservation"]||[]).push([[15],{2652:function(n,e,t){"use strict";t.r(e);var a=t(42),l=t(0),i=t.n(l),c=t(20),r=t(16),o=t(5);function u(){const n=Object(c.a)(["\n  cursor: pointer;\n  min-width: 104px;\n  min-height: 37px;\n  border: 0;\n  font-size: 15px;\n  line-height: 18px;\n  font-weight: 700;\n  border-radius: 3px;\n  color: ",";\n  background-color: ",";\n  transition: background-color 0.25s ease;\n"]);return u=function(){return n},n}function m(){const n=Object(c.a)(["\n  padding: 30px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  background-color: ",";\n"]);return m=function(){return n},n}function s(){const n=Object(c.a)(["\n  margin: 0;\n  padding: 29px 30px 30px;\n  margin-bottom: 97px;\n\n  li {\n    margin-bottom: 14px;\n    color: ",";\n    font-size: 13px;\n    line-height: 18px;\n    > span {\n      margin-left: 15px;\n    }\n    .anticon-check-circle {\n      color: ",";\n    }\n    .anticon-close-circle {\n      color: ",";\n    }\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]);return s=function(){return n},n}function d(){const n=Object(c.a)(["\n  color: ",";\n  font-size: 15px;\n  line-height: 18px;\n  margin-bottom: 0;\n"]);return d=function(){return n},n}function p(){const n=Object(c.a)(["\n  color: ",";\n  font-size: 22px;\n  line-height: 1.2;\n  font-weight: 700;\n"]);return p=function(){return n},n}function g(){const n=Object(c.a)(["\n  padding: 27px 29px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  background-color: ",";\n"]);return g=function(){return n},n}function f(){const n=Object(c.a)(["\n  border-radius: 6px;\n  position: relative;\n  border: 1px solid ",";\n  transition: box-shadow 0.3s ease;\n\n  &:hover {\n    border-color: 0;\n    box-shadow: 0 0 30px ",";\n\n    button {\n      color: ",";\n      background-color: ",";\n    }\n  }\n"]);return f=function(){return n},n}const E=r.d.div(f(),Object(o.a)("border.3","#E6E6E6"),Object(o.a)("boxShadow.1","rgba(0, 0, 0, 0.16)"),Object(o.a)("color.1","#ffffff"),Object(o.a)("primary.0","#008489")),x=r.d.div(g(),Object(o.a)("color.2","#F7F7F7")),b=r.d.h2(p(),Object(o.a)("text.0","#2C2C2C")),h=r.d.p(d(),Object(o.a)("text.0","#2C2C2C")),y=r.d.ul(s(),Object(o.a)("text.0","#2C2C2C"),Object(o.a)("primary.0","#008489"),Object(o.a)("color.4","#FC5C63")),j=r.d.div(m(),Object(o.a)("color.1","#ffffff")),k=r.d.button(u(),Object(o.a)("text.0","#2C2C2C"),Object(o.a)("color.2","#F7F7F7"));var O=E;function v({className:n,data:e,buttonText:t}){let a,l;return"annually"===e.type?(a=12*Math.ceil(e.price),l="/per year"):(a=e.price,l="/per month"),i.a.createElement(O,{className:n},i.a.createElement(x,null,i.a.createElement(b,null,e.title),i.a.createElement(h,null,i.a.createElement("strong",null,"$",a," USD"),i.a.createElement("span",null,l))),i.a.createElement(y,null,e.features.map(n=>i.a.createElement("li",{key:n.title},n.icon,i.a.createElement("span",null,n.title)))),i.a.createElement(j,null,i.a.createElement(k,null,t)))}function C({plans:n}){return n.map(n=>i.a.createElement(v,{className:"price_card",data:n,key:n.title,buttonText:"Select Plan"}))}function w(){const n=Object(c.a)([""]);return w=function(){return n},n}function B(){const n=Object(c.a)(["\n  width: 244px;\n  min-height: 47px;\n  padding: 5px;\n  border-radius: 3px;\n  background-color: ",";\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n\n  button {\n    color: ",";\n    font-size: 15px;\n    min-width: 117px;\n    min-height: 37px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    background: none;\n    cursor: pointer;\n\n    &.active {\n      font-weight: 700;\n      border-radius: 3px;\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0.16);\n      background-color: ",";\n    }\n\n    &:hover,\n    &:focus {\n      text-decoration: none;\n      outline: none;\n    }\n  }\n"]);return B=function(){return n},n}function M(){const n=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -15px;\n\n  .price_card {\n    width: calc(100% / 3 - 30px);\n    margin: 0 15px;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      margin-bottom: 30px;\n    }\n  }\n"]);return M=function(){return n},n}function T(){const n=Object(c.a)(["\n  color: ",";\n  font-size: 15px;\n  line-height: 18px;\n  margin-bottom: 30px;\n"]);return T=function(){return n},n}function F(){const n=Object(c.a)(["\n  color: ",";\n  font-size: 25px;\n  font-weight: 700;\n  margin-bottom: 10px;\n"]);return F=function(){return n},n}function P(){const n=Object(c.a)(["\n  text-align: center;\n  padding: 60px 0;\n  @media only screen and (max-width: 480px) {\n    padding: 40px 0;\n  }\n"]);return P=function(){return n},n}function z(){const n=Object(c.a)(["\n  max-width: 1140px;\n  margin: 0 auto;\n  padding-bottom: 30px;\n\n  @media only screen and (max-width: 1200px) {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  @media only screen and (max-width: 480px) {\n    padding: 0 25px;\n  }\n"]);return z=function(){return n},n}const S=r.d.div(z()),R=r.d.div(P()),U=r.d.h2(F(),Object(o.a)("text.0","#2C2C2C")),N=r.d.p(T(),Object(o.a)("text.0","#2C2C2C")),J=r.d.div(M()),_=r.d.div(B(),Object(o.a)("color.2","#F7F7F7"),Object(o.a)("text.0","#2C2C2C"),Object(o.a)("color.1","#ffffff")),A=r.d.button(w());var D=S,H=t(752),L=t(218);const Y=[{title:"Basic Plan",price:"0.00",type:"monthly",features:[{title:"Ultimate campaigns",icon:i.a.createElement(H.a,null)},{title:"Basic donner data",icon:i.a.createElement(H.a,null)},{title:"Team fundraising",icon:i.a.createElement(H.a,null)},{title:"Multi tasking",icon:i.a.createElement(H.a,null)},{title:"Multi team tasking",icon:i.a.createElement(L.a,null)},{title:"Basic registration & Ticketing",icon:i.a.createElement(L.a,null)},{title:"Basic theming",icon:i.a.createElement(L.a,null)},{title:"Email Reciept",icon:i.a.createElement(L.a,null)},{title:"Expensive donor data",icon:i.a.createElement(L.a,null)}]},{title:"Standard Plan",price:"75.80",type:"monthly",features:[{title:"Ultimate campaigns",icon:i.a.createElement(H.a,null)},{title:"Basic donner data",icon:i.a.createElement(H.a,null)},{title:"Team fundraising",icon:i.a.createElement(H.a,null)},{title:"Multi tasking",icon:i.a.createElement(H.a,null)},{title:"Multi team tasking",icon:i.a.createElement(H.a,null)},{title:"Basic registration & Ticketing",icon:i.a.createElement(H.a,null)},{title:"Basic theming",icon:i.a.createElement(L.a,null)},{title:"Email Reciept",icon:i.a.createElement(L.a,null)},{title:"Expensive donor data",icon:i.a.createElement(L.a,null)}]},{title:"Premium Plan",price:"175.00",type:"monthly",features:[{title:"Ultimate campaigns",icon:i.a.createElement(H.a,null)},{title:"Basic donner data",icon:i.a.createElement(H.a,null)},{title:"Team fundraising",icon:i.a.createElement(H.a,null)},{title:"Multi tasking",icon:i.a.createElement(H.a,null)},{title:"Multi team tasking",icon:i.a.createElement(H.a,null)},{title:"Basic registration & Ticketing",icon:i.a.createElement(H.a,null)},{title:"Basic theming",icon:i.a.createElement(H.a,null)},{title:"Email Reciept",icon:i.a.createElement(H.a,null)},{title:"Expensive donor data",icon:i.a.createElement(H.a,null)}]}],$=[{title:"Basic Plan",price:"0.00",type:"annually",features:[{title:"Ultimate campaigns",icon:i.a.createElement(H.a,null)},{title:"Basic donner data",icon:i.a.createElement(H.a,null)},{title:"Team fundraising",icon:i.a.createElement(H.a,null)},{title:"Multi tasking",icon:i.a.createElement(H.a,null)},{title:"Multi team tasking",icon:i.a.createElement(L.a,null)},{title:"Basic registration & Ticketing",icon:i.a.createElement(L.a,null)},{title:"Basic theming",icon:i.a.createElement(L.a,null)},{title:"Email Reciept",icon:i.a.createElement(L.a,null)},{title:"Expensive donor data",icon:i.a.createElement(L.a,null)}]},{title:"Standard Plan",price:"50.80",type:"annually",features:[{title:"Ultimate campaigns",icon:i.a.createElement(H.a,null)},{title:"Basic donner data",icon:i.a.createElement(H.a,null)},{title:"Team fundraising",icon:i.a.createElement(H.a,null)},{title:"Multi tasking",icon:i.a.createElement(H.a,null)},{title:"Multi team tasking",icon:i.a.createElement(H.a,null)},{title:"Basic registration & Ticketing",icon:i.a.createElement(H.a,null)},{title:"Basic theming",icon:i.a.createElement(L.a,null)},{title:"Email Reciept",icon:i.a.createElement(L.a,null)},{title:"Expensive donor data",icon:i.a.createElement(L.a,null)}]},{title:"Premium Plan",price:"150.00",type:"annually",features:[{title:"Ultimate campaigns",icon:i.a.createElement(H.a,null)},{title:"Basic donner data",icon:i.a.createElement(H.a,null)},{title:"Team fundraising",icon:i.a.createElement(H.a,null)},{title:"Multi tasking",icon:i.a.createElement(H.a,null)},{title:"Multi team tasking",icon:i.a.createElement(H.a,null)},{title:"Basic registration & Ticketing",icon:i.a.createElement(H.a,null)},{title:"Basic theming",icon:i.a.createElement(H.a,null)},{title:"Email Reciept",icon:i.a.createElement(H.a,null)},{title:"Expensive donor data",icon:i.a.createElement(H.a,null)}]}];e.default=()=>{const n=Object(l.useState)("monthly"),e=Object(a.a)(n,2),t=e[0],c=e[1];let r=[];return"monthly"===t&&(r=Y),"annually"===t&&(r=$),i.a.createElement(D,null,i.a.createElement(R,null,i.a.createElement(U,null,"Select Your Pricing Plan"),i.a.createElement(N,null,"Simple Transparent pricing for everyone, whether you are local hotel owner or an agent."),i.a.createElement(_,null,i.a.createElement(A,{onClick:()=>c("monthly"),className:"monthly"===t?"active":null},"Monthly"),i.a.createElement(A,{onClick:()=>c("annually"),className:"annually"===t?"active":null},"Annually"))),i.a.createElement(J,null,i.a.createElement(C,{plans:r})))}},752:function(n,e,t){"use strict";var a=t(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},i=t(29),c=function(n,e){return a.createElement(i.a,Object.assign({},n,{ref:e,icon:l}))};c.displayName="CheckCircleFilled";e.a=a.forwardRef(c)}}]);
//# sourceMappingURL=Pricing.b2abe98f.chunk.js.map