(this["webpackJsonp@devtri/ami-reservation"]=this["webpackJsonp@devtri/ami-reservation"]||[]).push([[27],{628:function(e,t,n){"use strict";var a=n(3),r=n(2),c=n(28),o=n(4),l=n(9),i=n(10),u=n(11),s=n(12),d=n(0),f=n.n(d),p=n(6),v=n.n(p),b=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:Object(o.a)(Object(o.a)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return Object(i.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,l=t.style,i=t.name,u=t.id,s=t.type,d=t.disabled,p=t.readOnly,b=t.tabIndex,y=t.onClick,O=t.onFocus,h=t.onBlur,m=t.onKeyDown,g=t.onKeyPress,C=t.onKeyUp,j=t.autoFocus,k=t.value,x=t.required,E=Object(c.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(E).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=E[t]),e}),{}),w=this.state.checked,N=v()(n,o,(e={},Object(r.a)(e,"".concat(n,"-checked"),w),Object(r.a)(e,"".concat(n,"-disabled"),d),e));return f.a.createElement("span",{className:N,style:l},f.a.createElement("input",Object(a.a)({name:i,id:u,type:s,required:x,readOnly:p,disabled:d,tabIndex:b,className:"".concat(n,"-input"),checked:!!w,onClick:y,onFocus:O,onBlur:h,onKeyUp:C,onKeyDown:m,onKeyPress:g,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:k},P)),f.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(o.a)(Object(o.a)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);b.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.a=b},638:function(e,t,n){"use strict";n(84),n(743)},642:function(e,t,n){"use strict";n(84),n(682)},646:function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(0),o=n(6),l=n.n(o),i=n(628),u=n(52),s=n(8),d=n(24),f=n(219),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=c.createContext(null),b=function(e){var t=e.defaultValue,n=e.children,o=e.options,i=void 0===o?[]:o,b=e.prefixCls,y=e.className,O=e.style,h=e.onChange,m=p(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),g=c.useContext(f.b),j=g.getPrefixCls,k=g.direction,x=c.useState(m.value||t||[]),E=Object(s.a)(x,2),P=E[0],w=E[1],N=c.useState([]),K=Object(s.a)(N,2),S=K[0],I=K[1];c.useEffect((function(){"value"in m&&w(m.value||[])}),[m.value]);var D=function(){return i.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},F=j("checkbox",b),V="".concat(F,"-group"),M=Object(d.a)(m,["value","disabled"]);i&&i.length>0&&(n=D().map((function(e){return c.createElement(C,{prefixCls:F,key:e.value.toString(),disabled:"disabled"in e?e.disabled:m.disabled,value:e.value,checked:-1!==P.indexOf(e.value),onChange:e.onChange,className:"".concat(V,"-item"),style:e.style},e.label)})));var B={toggleOption:function(e){var t=P.indexOf(e.value),n=Object(u.a)(P);if(-1===t?n.push(e.value):n.splice(t,1),"value"in m||w(n),h){var a=D();h(n.filter((function(e){return-1!==S.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))}},value:P,disabled:m.disabled,name:m.name,registerValue:function(e){I((function(t){return[].concat(Object(u.a)(t),[e])}))},cancelValue:function(e){I((function(t){return t.filter((function(t){return t!==e}))}))}},L=l()(V,Object(a.a)({},"".concat(V,"-rtl"),"rtl"===k),y);return c.createElement("div",Object(r.a)({className:L,style:O},M),c.createElement(v.Provider,{value:B},n))},y=c.memo(b),O=n(64),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},m=function(e,t){var n,o=e.prefixCls,u=e.className,s=e.children,d=e.indeterminate,p=void 0!==d&&d,b=e.style,y=e.onMouseEnter,m=e.onMouseLeave,g=e.skipGroup,C=void 0!==g&&g,j=h(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),k=c.useContext(f.b),x=k.getPrefixCls,E=k.direction,P=c.useContext(v),w=c.useRef(j.value);c.useEffect((function(){null===P||void 0===P||P.registerValue(j.value),Object(O.a)("checked"in j||!!P||!("value"in j),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),c.useEffect((function(){if(!C)return j.value!==w.current&&(null===P||void 0===P||P.cancelValue(w.current),null===P||void 0===P||P.registerValue(j.value)),function(){return null===P||void 0===P?void 0:P.cancelValue(j.value)}}),[j.value]);var N=x("checkbox",o),K=Object(r.a)({},j);P&&!C&&(K.onChange=function(){j.onChange&&j.onChange.apply(j,arguments),P.toggleOption&&P.toggleOption({label:s,value:j.value})},K.name=P.name,K.checked=-1!==P.value.indexOf(j.value),K.disabled=j.disabled||P.disabled);var S=l()((n={},Object(a.a)(n,"".concat(N,"-wrapper"),!0),Object(a.a)(n,"".concat(N,"-rtl"),"rtl"===E),Object(a.a)(n,"".concat(N,"-wrapper-checked"),K.checked),Object(a.a)(n,"".concat(N,"-wrapper-disabled"),K.disabled),n),u),I=l()(Object(a.a)({},"".concat(N,"-indeterminate"),p));return c.createElement("label",{className:S,style:b,onMouseEnter:y,onMouseLeave:m},c.createElement(i.a,Object(r.a)({},K,{prefixCls:N,className:I,ref:t})),void 0!==s&&c.createElement("span",null,s))},g=c.forwardRef(m);g.displayName="Checkbox";var C=g,j=C;j.Group=y,j.__ANT_CHECKBOX=!0;t.a=j},649:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n(214),o=n(219),l=function(e){return e?"function"===typeof e?e():e:null},i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},u=r.forwardRef((function(e,t){var n=e.prefixCls,u=e.title,s=e.content,d=i(e,["prefixCls","title","content"]),f=(0,r.useContext(o.b).getPrefixCls)("popover",n);return r.createElement(c.a,Object(a.a)({},d,{prefixCls:f,ref:t,overlay:function(e){return r.createElement(r.Fragment,null,u&&r.createElement("div",{className:"".concat(e,"-title")},l(u)),r.createElement("div",{className:"".concat(e,"-inner-content")},l(s)))}(f)}))}));u.displayName="Popover",u.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};t.a=u},682:function(e,t,n){},743:function(e,t,n){}}]);
//# sourceMappingURL=27.8837ca2c.chunk.js.map