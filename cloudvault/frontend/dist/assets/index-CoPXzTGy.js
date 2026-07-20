(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function Lm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wf={exports:{}},Rs={},bf={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),zm=Symbol.for("react.portal"),Mm=Symbol.for("react.fragment"),Dm=Symbol.for("react.strict_mode"),Fm=Symbol.for("react.profiler"),Um=Symbol.for("react.provider"),Bm=Symbol.for("react.context"),Wm=Symbol.for("react.forward_ref"),$m=Symbol.for("react.suspense"),Vm=Symbol.for("react.memo"),Hm=Symbol.for("react.lazy"),xd=Symbol.iterator;function Gm(e){return e===null||typeof e!="object"?null:(e=xd&&e[xd]||e["@@iterator"],typeof e=="function"?e:null)}var kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sf=Object.assign,_f={};function Bn(e,t,r){this.props=e,this.context=t,this.refs=_f,this.updater=r||kf}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ef(){}Ef.prototype=Bn.prototype;function ql(e,t,r){this.props=e,this.context=t,this.refs=_f,this.updater=r||kf}var Jl=ql.prototype=new Ef;Jl.constructor=ql;Sf(Jl,Bn.prototype);Jl.isPureReactComponent=!0;var wd=Array.isArray,Cf=Object.prototype.hasOwnProperty,Xl={current:null},jf={key:!0,ref:!0,__self:!0,__source:!0};function If(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Cf.call(t,n)&&!jf.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)i[n]===void 0&&(i[n]=c[n]);return{$$typeof:Hi,type:e,key:o,ref:a,props:i,_owner:Xl.current}}function Ym(e,t){return{$$typeof:Hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hi}function Qm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var bd=/\/+/g;function sa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qm(""+e.key):t.toString(36)}function Ro(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Hi:case zm:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+sa(a,0):n,wd(i)?(r="",e!=null&&(r=e.replace(bd,"$&/")+"/"),Ro(i,t,r,"",function(d){return d})):i!=null&&(Zl(i)&&(i=Ym(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(bd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",wd(e))for(var c=0;c<e.length;c++){o=e[c];var l=n+sa(o,c);a+=Ro(o,t,r,l,i)}else if(l=Gm(e),typeof l=="function")for(e=l.call(e),c=0;!(o=e.next()).done;)o=o.value,l=n+sa(o,c++),a+=Ro(o,t,r,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function co(e,t,r){if(e==null)return e;var n=[],i=0;return Ro(e,n,"","",function(o){return t.call(r,o,i++)}),n}function Km(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},No={transition:null},qm={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:No,ReactCurrentOwner:Xl};function Tf(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:co,forEach:function(e,t,r){co(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return co(e,function(){t++}),t},toArray:function(e){return co(e,function(t){return t})||[]},only:function(e){if(!Zl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Bn;$.Fragment=Mm;$.Profiler=Fm;$.PureComponent=ql;$.StrictMode=Dm;$.Suspense=$m;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qm;$.act=Tf;$.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Sf({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Xl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)Cf.call(t,l)&&!jf.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];n.children=c}return{$$typeof:Hi,type:e.type,key:i,ref:o,props:n,_owner:a}};$.createContext=function(e){return e={$$typeof:Bm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Um,_context:e},e.Consumer=e};$.createElement=If;$.createFactory=function(e){var t=If.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Wm,render:e}};$.isValidElement=Zl;$.lazy=function(e){return{$$typeof:Hm,_payload:{_status:-1,_result:e},_init:Km}};$.memo=function(e,t){return{$$typeof:Vm,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=No.transition;No.transition={};try{e()}finally{No.transition=t}};$.unstable_act=Tf;$.useCallback=function(e,t){return Fe.current.useCallback(e,t)};$.useContext=function(e){return Fe.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};$.useEffect=function(e,t){return Fe.current.useEffect(e,t)};$.useId=function(){return Fe.current.useId()};$.useImperativeHandle=function(e,t,r){return Fe.current.useImperativeHandle(e,t,r)};$.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Fe.current.useMemo(e,t)};$.useReducer=function(e,t,r){return Fe.current.useReducer(e,t,r)};$.useRef=function(e){return Fe.current.useRef(e)};$.useState=function(e){return Fe.current.useState(e)};$.useSyncExternalStore=function(e,t,r){return Fe.current.useSyncExternalStore(e,t,r)};$.useTransition=function(){return Fe.current.useTransition()};$.version="18.3.1";bf.exports=$;var y=bf.exports;const ye=Lm(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm=y,Xm=Symbol.for("react.element"),Zm=Symbol.for("react.fragment"),e0=Object.prototype.hasOwnProperty,t0=Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r0={key:!0,ref:!0,__self:!0,__source:!0};function Rf(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)e0.call(t,n)&&!r0.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Xm,type:e,key:o,ref:a,props:i,_owner:t0.current}}Rs.Fragment=Zm;Rs.jsx=Rf;Rs.jsxs=Rf;wf.exports=Rs;var s=wf.exports,Nf={exports:{}},Xe={},Pf={exports:{}},Af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,L){var M=R.length;R.push(L);e:for(;0<M;){var q=M-1>>>1,re=R[q];if(0<i(re,L))R[q]=L,R[M]=re,M=q;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var L=R[0],M=R.pop();if(M!==L){R[0]=M;e:for(var q=0,re=R.length,ft=re>>>1;q<ft;){var Ie=2*(q+1)-1,pt=R[Ie],et=Ie+1,Te=R[et];if(0>i(pt,M))et<re&&0>i(Te,pt)?(R[q]=Te,R[et]=M,q=et):(R[q]=pt,R[Ie]=M,q=Ie);else if(et<re&&0>i(Te,M))R[q]=Te,R[et]=M,q=et;else break e}}return L}function i(R,L){var M=R.sortIndex-L.sortIndex;return M!==0?M:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var l=[],d=[],u=1,f=null,p=3,x=!1,v=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var L=r(d);L!==null;){if(L.callback===null)n(d);else if(L.startTime<=R)n(d),L.sortIndex=L.expirationTime,t(l,L);else break;L=r(d)}}function k(R){if(b=!1,g(R),!v)if(r(l)!==null)v=!0,ge(_);else{var L=r(d);L!==null&&_e(k,L.startTime-R)}}function _(R,L){v=!1,b&&(b=!1,m(T),T=-1),x=!0;var M=p;try{for(g(L),f=r(l);f!==null&&(!(f.expirationTime>L)||R&&!U());){var q=f.callback;if(typeof q=="function"){f.callback=null,p=f.priorityLevel;var re=q(f.expirationTime<=L);L=e.unstable_now(),typeof re=="function"?f.callback=re:f===r(l)&&n(l),g(L)}else n(l);f=r(l)}if(f!==null)var ft=!0;else{var Ie=r(d);Ie!==null&&_e(k,Ie.startTime-L),ft=!1}return ft}finally{f=null,p=M,x=!1}}var E=!1,j=null,T=-1,D=5,N=-1;function U(){return!(e.unstable_now()-N<D)}function F(){if(j!==null){var R=e.unstable_now();N=R;var L=!0;try{L=j(!0,R)}finally{L?X():(E=!1,j=null)}}else E=!1}var X;if(typeof h=="function")X=function(){h(F)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ve=ie.port2;ie.port1.onmessage=F,X=function(){ve.postMessage(null)}}else X=function(){S(F,0)};function ge(R){j=R,E||(E=!0,X())}function _e(R,L){T=S(function(){R(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,ge(_))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var M=p;p=L;try{return R()}finally{p=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var M=p;p=R;try{return L()}finally{p=M}},e.unstable_scheduleCallback=function(R,L,M){var q=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?q+M:q):M=q,R){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=M+re,R={id:u++,callback:L,priorityLevel:R,startTime:M,expirationTime:re,sortIndex:-1},M>q?(R.sortIndex=M,t(d,R),r(l)===null&&R===r(d)&&(b?(m(T),T=-1):b=!0,_e(k,M-q))):(R.sortIndex=re,t(l,R),v||x||(v=!0,ge(_))),R},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(R){var L=p;return function(){var M=p;p=L;try{return R.apply(this,arguments)}finally{p=M}}}})(Af);Pf.exports=Af;var n0=Pf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0=y,Je=n0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Of=new Set,Ei={};function Xr(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(Ei[e]=t,e=0;e<t.length;e++)Of.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ya=Object.prototype.hasOwnProperty,o0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kd={},Sd={};function s0(e){return Ya.call(Sd,e)?!0:Ya.call(kd,e)?!1:o0.test(e)?Sd[e]=!0:(kd[e]=!0,!1)}function a0(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function l0(e,t,r,n){if(t===null||typeof t>"u"||a0(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var ec=/[\-:]([a-z])/g;function tc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ec,tc);je[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ec,tc);je[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ec,tc);je[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function rc(e,t,r,n){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(l0(t,r,i,n)&&(r=null),n||i===null?s0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Zt=i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),an=Symbol.for("react.portal"),ln=Symbol.for("react.fragment"),nc=Symbol.for("react.strict_mode"),Qa=Symbol.for("react.profiler"),Lf=Symbol.for("react.provider"),zf=Symbol.for("react.context"),ic=Symbol.for("react.forward_ref"),Ka=Symbol.for("react.suspense"),qa=Symbol.for("react.suspense_list"),oc=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),Mf=Symbol.for("react.offscreen"),_d=Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=_d&&e[_d]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,aa;function ci(e){if(aa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);aa=t&&t[1]||""}return`
`+aa+e}var la=!1;function ca(e,t){if(!e||la)return"";la=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,c=o.length-1;1<=a&&0<=c&&i[a]!==o[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==o[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==o[c]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=c);break}}}finally{la=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ci(e):""}function c0(e){switch(e.tag){case 5:return ci(e.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 2:case 15:return e=ca(e.type,!1),e;case 11:return e=ca(e.type.render,!1),e;case 1:return e=ca(e.type,!0),e;default:return""}}function Ja(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ln:return"Fragment";case an:return"Portal";case Qa:return"Profiler";case nc:return"StrictMode";case Ka:return"Suspense";case qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zf:return(e.displayName||"Context")+".Consumer";case Lf:return(e._context.displayName||"Context")+".Provider";case ic:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oc:return t=e.displayName||null,t!==null?t:Ja(e.type)||"Memo";case nr:t=e._payload,e=e._init;try{return Ja(e(t))}catch{}}return null}function d0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ja(t);case 8:return t===nc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Df(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function u0(e){var t=Df(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fo(e){e._valueTracker||(e._valueTracker=u0(e))}function Ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Df(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xa(e,t){var r=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ed(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=kr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uf(e,t){t=t.checked,t!=null&&rc(e,"checked",t,!1)}function Za(e,t){Uf(e,t);var r=kr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?el(e,t.type,r):t.hasOwnProperty("defaultValue")&&el(e,t.type,kr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cd(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function el(e,t,r){(t!=="number"||qo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var di=Array.isArray;function bn(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+kr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jd(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(C(92));if(di(r)){if(1<r.length)throw Error(C(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:kr(r)}}function Bf(e,t){var r=kr(t.value),n=kr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Id(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,$f=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ci(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f0=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(e){f0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pi[t]=pi[e]})});function Vf(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||pi.hasOwnProperty(e)&&pi[e]?(""+t).trim():t+"px"}function Hf(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Vf(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var p0=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(e,t){if(t){if(p0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ol=null;function sc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,kn=null,Sn=null;function Td(e){if(e=Qi(e)){if(typeof sl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Ls(t),sl(e.stateNode,e.type,t))}}function Gf(e){kn?Sn?Sn.push(e):Sn=[e]:kn=e}function Yf(){if(kn){var e=kn,t=Sn;if(Sn=kn=null,Td(e),t)for(e=0;e<t.length;e++)Td(t[e])}}function Qf(e,t){return e(t)}function Kf(){}var da=!1;function qf(e,t,r){if(da)return e(t,r);da=!0;try{return Qf(e,t,r)}finally{da=!1,(kn!==null||Sn!==null)&&(Kf(),Yf())}}function ji(e,t){var r=e.stateNode;if(r===null)return null;var n=Ls(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(C(231,t,typeof r));return r}var al=!1;if(Gt)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){al=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{al=!1}function h0(e,t,r,n,i,o,a,c,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(u){this.onError(u)}}var hi=!1,Jo=null,Xo=!1,ll=null,g0={onError:function(e){hi=!0,Jo=e}};function m0(e,t,r,n,i,o,a,c,l){hi=!1,Jo=null,h0.apply(g0,arguments)}function v0(e,t,r,n,i,o,a,c,l){if(m0.apply(this,arguments),hi){if(hi){var d=Jo;hi=!1,Jo=null}else throw Error(C(198));Xo||(Xo=!0,ll=d)}}function Zr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Jf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rd(e){if(Zr(e)!==e)throw Error(C(188))}function y0(e){var t=e.alternate;if(!t){if(t=Zr(e),t===null)throw Error(C(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Rd(i),e;if(o===n)return Rd(i),t;o=o.sibling}throw Error(C(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,c=i.child;c;){if(c===r){a=!0,r=i,n=o;break}if(c===n){a=!0,n=i,r=o;break}c=c.sibling}if(!a){for(c=o.child;c;){if(c===r){a=!0,r=o,n=i;break}if(c===n){a=!0,n=o,r=i;break}c=c.sibling}if(!a)throw Error(C(189))}}if(r.alternate!==n)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?e:t}function Xf(e){return e=y0(e),e!==null?Zf(e):null}function Zf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zf(e);if(t!==null)return t;e=e.sibling}return null}var ep=Je.unstable_scheduleCallback,Nd=Je.unstable_cancelCallback,x0=Je.unstable_shouldYield,w0=Je.unstable_requestPaint,he=Je.unstable_now,b0=Je.unstable_getCurrentPriorityLevel,ac=Je.unstable_ImmediatePriority,tp=Je.unstable_UserBlockingPriority,Zo=Je.unstable_NormalPriority,k0=Je.unstable_LowPriority,rp=Je.unstable_IdlePriority,Ns=null,Rt=null;function S0(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ns,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:C0,_0=Math.log,E0=Math.LN2;function C0(e){return e>>>=0,e===0?32:31-(_0(e)/E0|0)|0}var ho=64,go=4194304;function ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function es(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var c=a&~i;c!==0?n=ui(c):(o&=a,o!==0&&(n=ui(o)))}else a=r&~i,a!==0?n=ui(a):o!==0&&(n=ui(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-bt(t),i=1<<r,n|=e[r],t&=~i;return n}function j0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I0(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-bt(o),c=1<<a,l=i[a];l===-1?(!(c&r)||c&n)&&(i[a]=j0(c,t)):l<=t&&(e.expiredLanes|=c),o&=~c}}function cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function np(){var e=ho;return ho<<=1,!(ho&4194240)&&(ho=64),e}function ua(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Gi(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=r}function T0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-bt(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function lc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-bt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ee=0;function ip(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var op,cc,sp,ap,lp,dl=!1,mo=[],fr=null,pr=null,hr=null,Ii=new Map,Ti=new Map,or=[],R0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pd(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(t.pointerId)}}function ei(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Qi(t),t!==null&&cc(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function N0(e,t,r,n,i){switch(t){case"focusin":return fr=ei(fr,e,t,r,n,i),!0;case"dragenter":return pr=ei(pr,e,t,r,n,i),!0;case"mouseover":return hr=ei(hr,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Ii.set(o,ei(Ii.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Ti.set(o,ei(Ti.get(o)||null,e,t,r,n,i)),!0}return!1}function cp(e){var t=Dr(e.target);if(t!==null){var r=Zr(t);if(r!==null){if(t=r.tag,t===13){if(t=Jf(r),t!==null){e.blockedOn=t,lp(e.priority,function(){sp(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);ol=n,r.target.dispatchEvent(n),ol=null}else return t=Qi(r),t!==null&&cc(t),e.blockedOn=r,!1;t.shift()}return!0}function Ad(e,t,r){Po(e)&&r.delete(t)}function P0(){dl=!1,fr!==null&&Po(fr)&&(fr=null),pr!==null&&Po(pr)&&(pr=null),hr!==null&&Po(hr)&&(hr=null),Ii.forEach(Ad),Ti.forEach(Ad)}function ti(e,t){e.blockedOn===t&&(e.blockedOn=null,dl||(dl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,P0)))}function Ri(e){function t(i){return ti(i,e)}if(0<mo.length){ti(mo[0],e);for(var r=1;r<mo.length;r++){var n=mo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(fr!==null&&ti(fr,e),pr!==null&&ti(pr,e),hr!==null&&ti(hr,e),Ii.forEach(t),Ti.forEach(t),r=0;r<or.length;r++)n=or[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<or.length&&(r=or[0],r.blockedOn===null);)cp(r),r.blockedOn===null&&or.shift()}var _n=Zt.ReactCurrentBatchConfig,ts=!0;function A0(e,t,r,n){var i=ee,o=_n.transition;_n.transition=null;try{ee=1,dc(e,t,r,n)}finally{ee=i,_n.transition=o}}function O0(e,t,r,n){var i=ee,o=_n.transition;_n.transition=null;try{ee=4,dc(e,t,r,n)}finally{ee=i,_n.transition=o}}function dc(e,t,r,n){if(ts){var i=ul(e,t,r,n);if(i===null)ba(e,t,n,rs,r),Pd(e,n);else if(N0(i,e,t,r,n))n.stopPropagation();else if(Pd(e,n),t&4&&-1<R0.indexOf(e)){for(;i!==null;){var o=Qi(i);if(o!==null&&op(o),o=ul(e,t,r,n),o===null&&ba(e,t,n,rs,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else ba(e,t,n,null,r)}}var rs=null;function ul(e,t,r,n){if(rs=null,e=sc(n),e=Dr(e),e!==null)if(t=Zr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Jf(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rs=e,null}function dp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b0()){case ac:return 1;case tp:return 4;case Zo:case k0:return 16;case rp:return 536870912;default:return 16}default:return 16}}var cr=null,uc=null,Ao=null;function up(){if(Ao)return Ao;var e,t=uc,r=t.length,n,i="value"in cr?cr.value:cr.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return Ao=i.slice(e,1<n?1-n:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vo(){return!0}function Od(){return!1}function Ze(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vo:Od,this.isPropagationStopped=Od,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=Ze(Wn),Yi=ue({},Wn,{view:0,detail:0}),L0=Ze(Yi),fa,pa,ri,Ps=ue({},Yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(fa=e.screenX-ri.screenX,pa=e.screenY-ri.screenY):pa=fa=0,ri=e),fa)},movementY:function(e){return"movementY"in e?e.movementY:pa}}),Ld=Ze(Ps),z0=ue({},Ps,{dataTransfer:0}),M0=Ze(z0),D0=ue({},Yi,{relatedTarget:0}),ha=Ze(D0),F0=ue({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),U0=Ze(F0),B0=ue({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W0=Ze(B0),$0=ue({},Wn,{data:0}),zd=Ze($0),V0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=G0[e])?!!t[e]:!1}function pc(){return Y0}var Q0=ue({},Yi,{key:function(e){if(e.key){var t=V0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?H0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K0=Ze(Q0),q0=ue({},Ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=Ze(q0),J0=ue({},Yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),X0=Ze(J0),Z0=ue({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ev=Ze(Z0),tv=ue({},Ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rv=Ze(tv),nv=[9,13,27,32],hc=Gt&&"CompositionEvent"in window,gi=null;Gt&&"documentMode"in document&&(gi=document.documentMode);var iv=Gt&&"TextEvent"in window&&!gi,fp=Gt&&(!hc||gi&&8<gi&&11>=gi),Dd=" ",Fd=!1;function pp(e,t){switch(e){case"keyup":return nv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function ov(e,t){switch(e){case"compositionend":return hp(t);case"keypress":return t.which!==32?null:(Fd=!0,Dd);case"textInput":return e=t.data,e===Dd&&Fd?null:e;default:return null}}function sv(e,t){if(cn)return e==="compositionend"||!hc&&pp(e,t)?(e=up(),Ao=uc=cr=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fp&&t.locale!=="ko"?null:t.data;default:return null}}var av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!av[e.type]:t==="textarea"}function gp(e,t,r,n){Gf(n),t=ns(t,"onChange"),0<t.length&&(r=new fc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var mi=null,Ni=null;function lv(e){Cp(e,0)}function As(e){var t=fn(e);if(Ff(t))return e}function cv(e,t){if(e==="change")return t}var mp=!1;if(Gt){var ga;if(Gt){var ma="oninput"in document;if(!ma){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),ma=typeof Bd.oninput=="function"}ga=ma}else ga=!1;mp=ga&&(!document.documentMode||9<document.documentMode)}function Wd(){mi&&(mi.detachEvent("onpropertychange",vp),Ni=mi=null)}function vp(e){if(e.propertyName==="value"&&As(Ni)){var t=[];gp(t,Ni,e,sc(e)),qf(lv,t)}}function dv(e,t,r){e==="focusin"?(Wd(),mi=t,Ni=r,mi.attachEvent("onpropertychange",vp)):e==="focusout"&&Wd()}function uv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return As(Ni)}function fv(e,t){if(e==="click")return As(t)}function pv(e,t){if(e==="input"||e==="change")return As(t)}function hv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:hv;function Pi(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Ya.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function $d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,t){var r=$d(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=$d(r)}}function yp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xp(){for(var e=window,t=qo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=qo(e.document)}return t}function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gv(e){var t=xp(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&yp(r.ownerDocument.documentElement,r)){if(n!==null&&gc(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=Vd(r,o);var a=Vd(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mv=Gt&&"documentMode"in document&&11>=document.documentMode,dn=null,fl=null,vi=null,pl=!1;function Hd(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;pl||dn==null||dn!==qo(n)||(n=dn,"selectionStart"in n&&gc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),vi&&Pi(vi,n)||(vi=n,n=ns(fl,"onSelect"),0<n.length&&(t=new fc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=dn)))}function yo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var un={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},va={},wp={};Gt&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete un.animationend.animation,delete un.animationiteration.animation,delete un.animationstart.animation),"TransitionEvent"in window||delete un.transitionend.transition);function Os(e){if(va[e])return va[e];if(!un[e])return e;var t=un[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in wp)return va[e]=t[r];return e}var bp=Os("animationend"),kp=Os("animationiteration"),Sp=Os("animationstart"),_p=Os("transitionend"),Ep=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(e,t){Ep.set(e,t),Xr(t,[e])}for(var ya=0;ya<Gd.length;ya++){var xa=Gd[ya],vv=xa.toLowerCase(),yv=xa[0].toUpperCase()+xa.slice(1);_r(vv,"on"+yv)}_r(bp,"onAnimationEnd");_r(kp,"onAnimationIteration");_r(Sp,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(_p,"onTransitionEnd");Nn("onMouseEnter",["mouseout","mouseover"]);Nn("onMouseLeave",["mouseout","mouseover"]);Nn("onPointerEnter",["pointerout","pointerover"]);Nn("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));function Yd(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,v0(n,t,void 0,e),e.currentTarget=null}function Cp(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var c=n[a],l=c.instance,d=c.currentTarget;if(c=c.listener,l!==o&&i.isPropagationStopped())break e;Yd(i,c,d),o=l}else for(a=0;a<n.length;a++){if(c=n[a],l=c.instance,d=c.currentTarget,c=c.listener,l!==o&&i.isPropagationStopped())break e;Yd(i,c,d),o=l}}}if(Xo)throw e=ll,Xo=!1,ll=null,e}function oe(e,t){var r=t[yl];r===void 0&&(r=t[yl]=new Set);var n=e+"__bubble";r.has(n)||(jp(t,e,2,!1),r.add(n))}function wa(e,t,r){var n=0;t&&(n|=4),jp(r,e,n,t)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Ai(e){if(!e[xo]){e[xo]=!0,Of.forEach(function(r){r!=="selectionchange"&&(xv.has(r)||wa(r,!1,e),wa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xo]||(t[xo]=!0,wa("selectionchange",!1,t))}}function jp(e,t,r,n){switch(dp(t)){case 1:var i=A0;break;case 4:i=O0;break;default:i=dc}r=i.bind(null,t,r,e),i=void 0,!al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function ba(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var c=n.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;c!==null;){if(a=Dr(c),a===null)return;if(l=a.tag,l===5||l===6){n=o=a;continue e}c=c.parentNode}}n=n.return}qf(function(){var d=o,u=sc(r),f=[];e:{var p=Ep.get(e);if(p!==void 0){var x=fc,v=e;switch(e){case"keypress":if(Oo(r)===0)break e;case"keydown":case"keyup":x=K0;break;case"focusin":v="focus",x=ha;break;case"focusout":v="blur",x=ha;break;case"beforeblur":case"afterblur":x=ha;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=X0;break;case bp:case kp:case Sp:x=U0;break;case _p:x=ev;break;case"scroll":x=L0;break;case"wheel":x=rv;break;case"copy":case"cut":case"paste":x=W0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Md}var b=(t&4)!==0,S=!b&&e==="scroll",m=b?p!==null?p+"Capture":null:p;b=[];for(var h=d,g;h!==null;){g=h;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,m!==null&&(k=ji(h,m),k!=null&&b.push(Oi(h,k,g)))),S)break;h=h.return}0<b.length&&(p=new x(p,v,null,r,u),f.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&r!==ol&&(v=r.relatedTarget||r.fromElement)&&(Dr(v)||v[Yt]))break e;if((x||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,x?(v=r.relatedTarget||r.toElement,x=d,v=v?Dr(v):null,v!==null&&(S=Zr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=d),x!==v)){if(b=Ld,k="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(b=Md,k="onPointerLeave",m="onPointerEnter",h="pointer"),S=x==null?p:fn(x),g=v==null?p:fn(v),p=new b(k,h+"leave",x,r,u),p.target=S,p.relatedTarget=g,k=null,Dr(u)===d&&(b=new b(m,h+"enter",v,r,u),b.target=g,b.relatedTarget=S,k=b),S=k,x&&v)t:{for(b=x,m=v,h=0,g=b;g;g=on(g))h++;for(g=0,k=m;k;k=on(k))g++;for(;0<h-g;)b=on(b),h--;for(;0<g-h;)m=on(m),g--;for(;h--;){if(b===m||m!==null&&b===m.alternate)break t;b=on(b),m=on(m)}b=null}else b=null;x!==null&&Qd(f,p,x,b,!1),v!==null&&S!==null&&Qd(f,S,v,b,!0)}}e:{if(p=d?fn(d):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var _=cv;else if(Ud(p))if(mp)_=pv;else{_=uv;var E=dv}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=fv);if(_&&(_=_(e,d))){gp(f,_,r,u);break e}E&&E(e,p,d),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&el(p,"number",p.value)}switch(E=d?fn(d):window,e){case"focusin":(Ud(E)||E.contentEditable==="true")&&(dn=E,fl=d,vi=null);break;case"focusout":vi=fl=dn=null;break;case"mousedown":pl=!0;break;case"contextmenu":case"mouseup":case"dragend":pl=!1,Hd(f,r,u);break;case"selectionchange":if(mv)break;case"keydown":case"keyup":Hd(f,r,u)}var j;if(hc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else cn?pp(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(fp&&r.locale!=="ko"&&(cn||T!=="onCompositionStart"?T==="onCompositionEnd"&&cn&&(j=up()):(cr=u,uc="value"in cr?cr.value:cr.textContent,cn=!0)),E=ns(d,T),0<E.length&&(T=new zd(T,e,null,r,u),f.push({event:T,listeners:E}),j?T.data=j:(j=hp(r),j!==null&&(T.data=j)))),(j=iv?ov(e,r):sv(e,r))&&(d=ns(d,"onBeforeInput"),0<d.length&&(u=new zd("onBeforeInput","beforeinput",null,r,u),f.push({event:u,listeners:d}),u.data=j))}Cp(f,t)})}function Oi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ns(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ji(e,r),o!=null&&n.unshift(Oi(e,o,i)),o=ji(e,t),o!=null&&n.push(Oi(e,o,i))),e=e.return}return n}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qd(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var c=r,l=c.alternate,d=c.stateNode;if(l!==null&&l===n)break;c.tag===5&&d!==null&&(c=d,i?(l=ji(r,o),l!=null&&a.unshift(Oi(r,l,c))):i||(l=ji(r,o),l!=null&&a.push(Oi(r,l,c)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var wv=/\r\n?/g,bv=/\u0000|\uFFFD/g;function Kd(e){return(typeof e=="string"?e:""+e).replace(wv,`
`).replace(bv,"")}function wo(e,t,r){if(t=Kd(t),Kd(e)!==t&&r)throw Error(C(425))}function is(){}var hl=null,gl=null;function ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,kv=typeof clearTimeout=="function"?clearTimeout:void 0,qd=typeof Promise=="function"?Promise:void 0,Sv=typeof queueMicrotask=="function"?queueMicrotask:typeof qd<"u"?function(e){return qd.resolve(null).then(e).catch(_v)}:vl;function _v(e){setTimeout(function(){throw e})}function ka(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Ri(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ri(t)}function gr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var $n=Math.random().toString(36).slice(2),It="__reactFiber$"+$n,Li="__reactProps$"+$n,Yt="__reactContainer$"+$n,yl="__reactEvents$"+$n,Ev="__reactListeners$"+$n,Cv="__reactHandles$"+$n;function Dr(e){var t=e[It];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Yt]||r[It]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Jd(e);e!==null;){if(r=e[It])return r;e=Jd(e)}return t}e=r,r=e.parentNode}return null}function Qi(e){return e=e[It]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ls(e){return e[Li]||null}var xl=[],pn=-1;function Er(e){return{current:e}}function se(e){0>pn||(e.current=xl[pn],xl[pn]=null,pn--)}function ne(e,t){pn++,xl[pn]=e.current,e.current=t}var Sr={},Oe=Er(Sr),$e=Er(!1),Gr=Sr;function Pn(e,t){var r=e.type.contextTypes;if(!r)return Sr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(e){return e=e.childContextTypes,e!=null}function os(){se($e),se(Oe)}function Xd(e,t,r){if(Oe.current!==Sr)throw Error(C(168));ne(Oe,t),ne($e,r)}function Ip(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(C(108,d0(e)||"Unknown",i));return ue({},r,n)}function ss(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,Gr=Oe.current,ne(Oe,e),ne($e,$e.current),!0}function Zd(e,t,r){var n=e.stateNode;if(!n)throw Error(C(169));r?(e=Ip(e,t,Gr),n.__reactInternalMemoizedMergedChildContext=e,se($e),se(Oe),ne(Oe,e)):se($e),ne($e,r)}var Mt=null,zs=!1,Sa=!1;function Tp(e){Mt===null?Mt=[e]:Mt.push(e)}function jv(e){zs=!0,Tp(e)}function Cr(){if(!Sa&&Mt!==null){Sa=!0;var e=0,t=ee;try{var r=Mt;for(ee=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Mt=null,zs=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(e+1)),ep(ac,Cr),i}finally{ee=t,Sa=!1}}return null}var hn=[],gn=0,as=null,ls=0,ot=[],st=0,Yr=null,Bt=1,Wt="";function Lr(e,t){hn[gn++]=ls,hn[gn++]=as,as=e,ls=t}function Rp(e,t,r){ot[st++]=Bt,ot[st++]=Wt,ot[st++]=Yr,Yr=e;var n=Bt;e=Wt;var i=32-bt(n)-1;n&=~(1<<i),r+=1;var o=32-bt(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,Bt=1<<32-bt(t)+i|r<<i|n,Wt=o+e}else Bt=1<<o|r<<i|n,Wt=e}function mc(e){e.return!==null&&(Lr(e,1),Rp(e,1,0))}function vc(e){for(;e===as;)as=hn[--gn],hn[gn]=null,ls=hn[--gn],hn[gn]=null;for(;e===Yr;)Yr=ot[--st],ot[st]=null,Wt=ot[--st],ot[st]=null,Bt=ot[--st],ot[st]=null}var qe=null,Ke=null,ae=!1,xt=null;function Np(e,t){var r=at(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function eu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ke=gr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Yr!==null?{id:Bt,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=at(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,qe=e,Ke=null,!0):!1;default:return!1}}function wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bl(e){if(ae){var t=Ke;if(t){var r=t;if(!eu(e,t)){if(wl(e))throw Error(C(418));t=gr(r.nextSibling);var n=qe;t&&eu(e,t)?Np(n,r):(e.flags=e.flags&-4097|2,ae=!1,qe=e)}}else{if(wl(e))throw Error(C(418));e.flags=e.flags&-4097|2,ae=!1,qe=e}}}function tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function bo(e){if(e!==qe)return!1;if(!ae)return tu(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ml(e.type,e.memoizedProps)),t&&(t=Ke)){if(wl(e))throw Pp(),Error(C(418));for(;t;)Np(e,t),t=gr(t.nextSibling)}if(tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ke=gr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=qe?gr(e.stateNode.nextSibling):null;return!0}function Pp(){for(var e=Ke;e;)e=gr(e.nextSibling)}function An(){Ke=qe=null,ae=!1}function yc(e){xt===null?xt=[e]:xt.push(e)}var Iv=Zt.ReactCurrentBatchConfig;function ni(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(C(309));var n=r.stateNode}if(!n)throw Error(C(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var c=i.refs;a===null?delete c[o]:c[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!r._owner)throw Error(C(290,e))}return e}function ko(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ru(e){var t=e._init;return t(e._payload)}function Ap(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function r(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function n(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=xr(m,h),m.index=0,m.sibling=null,m}function o(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,h,g,k){return h===null||h.tag!==6?(h=Ra(g,m.mode,k),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,k){var _=g.type;return _===ln?u(m,h,g.props.children,k,g.key):h!==null&&(h.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===nr&&ru(_)===h.type)?(k=i(h,g.props),k.ref=ni(m,h,g),k.return=m,k):(k=Bo(g.type,g.key,g.props,null,m.mode,k),k.ref=ni(m,h,g),k.return=m,k)}function d(m,h,g,k){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Na(g,m.mode,k),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function u(m,h,g,k,_){return h===null||h.tag!==7?(h=$r(g,m.mode,k,_),h.return=m,h):(h=i(h,g),h.return=m,h)}function f(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ra(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case uo:return g=Bo(h.type,h.key,h.props,null,m.mode,g),g.ref=ni(m,null,h),g.return=m,g;case an:return h=Na(h,m.mode,g),h.return=m,h;case nr:var k=h._init;return f(m,k(h._payload),g)}if(di(h)||Xn(h))return h=$r(h,m.mode,g,null),h.return=m,h;ko(m,h)}return null}function p(m,h,g,k){var _=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:c(m,h,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case uo:return g.key===_?l(m,h,g,k):null;case an:return g.key===_?d(m,h,g,k):null;case nr:return _=g._init,p(m,h,_(g._payload),k)}if(di(g)||Xn(g))return _!==null?null:u(m,h,g,k,null);ko(m,g)}return null}function x(m,h,g,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(g)||null,c(h,m,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case uo:return m=m.get(k.key===null?g:k.key)||null,l(h,m,k,_);case an:return m=m.get(k.key===null?g:k.key)||null,d(h,m,k,_);case nr:var E=k._init;return x(m,h,g,E(k._payload),_)}if(di(k)||Xn(k))return m=m.get(g)||null,u(h,m,k,_,null);ko(h,k)}return null}function v(m,h,g,k){for(var _=null,E=null,j=h,T=h=0,D=null;j!==null&&T<g.length;T++){j.index>T?(D=j,j=null):D=j.sibling;var N=p(m,j,g[T],k);if(N===null){j===null&&(j=D);break}e&&j&&N.alternate===null&&t(m,j),h=o(N,h,T),E===null?_=N:E.sibling=N,E=N,j=D}if(T===g.length)return r(m,j),ae&&Lr(m,T),_;if(j===null){for(;T<g.length;T++)j=f(m,g[T],k),j!==null&&(h=o(j,h,T),E===null?_=j:E.sibling=j,E=j);return ae&&Lr(m,T),_}for(j=n(m,j);T<g.length;T++)D=x(j,m,T,g[T],k),D!==null&&(e&&D.alternate!==null&&j.delete(D.key===null?T:D.key),h=o(D,h,T),E===null?_=D:E.sibling=D,E=D);return e&&j.forEach(function(U){return t(m,U)}),ae&&Lr(m,T),_}function b(m,h,g,k){var _=Xn(g);if(typeof _!="function")throw Error(C(150));if(g=_.call(g),g==null)throw Error(C(151));for(var E=_=null,j=h,T=h=0,D=null,N=g.next();j!==null&&!N.done;T++,N=g.next()){j.index>T?(D=j,j=null):D=j.sibling;var U=p(m,j,N.value,k);if(U===null){j===null&&(j=D);break}e&&j&&U.alternate===null&&t(m,j),h=o(U,h,T),E===null?_=U:E.sibling=U,E=U,j=D}if(N.done)return r(m,j),ae&&Lr(m,T),_;if(j===null){for(;!N.done;T++,N=g.next())N=f(m,N.value,k),N!==null&&(h=o(N,h,T),E===null?_=N:E.sibling=N,E=N);return ae&&Lr(m,T),_}for(j=n(m,j);!N.done;T++,N=g.next())N=x(j,m,T,N.value,k),N!==null&&(e&&N.alternate!==null&&j.delete(N.key===null?T:N.key),h=o(N,h,T),E===null?_=N:E.sibling=N,E=N);return e&&j.forEach(function(F){return t(m,F)}),ae&&Lr(m,T),_}function S(m,h,g,k){if(typeof g=="object"&&g!==null&&g.type===ln&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case uo:e:{for(var _=g.key,E=h;E!==null;){if(E.key===_){if(_=g.type,_===ln){if(E.tag===7){r(m,E.sibling),h=i(E,g.props.children),h.return=m,m=h;break e}}else if(E.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===nr&&ru(_)===E.type){r(m,E.sibling),h=i(E,g.props),h.ref=ni(m,E,g),h.return=m,m=h;break e}r(m,E);break}else t(m,E);E=E.sibling}g.type===ln?(h=$r(g.props.children,m.mode,k,g.key),h.return=m,m=h):(k=Bo(g.type,g.key,g.props,null,m.mode,k),k.ref=ni(m,h,g),k.return=m,m=k)}return a(m);case an:e:{for(E=g.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){r(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{r(m,h);break}else t(m,h);h=h.sibling}h=Na(g,m.mode,k),h.return=m,m=h}return a(m);case nr:return E=g._init,S(m,h,E(g._payload),k)}if(di(g))return v(m,h,g,k);if(Xn(g))return b(m,h,g,k);ko(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(r(m,h.sibling),h=i(h,g),h.return=m,m=h):(r(m,h),h=Ra(g,m.mode,k),h.return=m,m=h),a(m)):r(m,h)}return S}var On=Ap(!0),Op=Ap(!1),cs=Er(null),ds=null,mn=null,xc=null;function wc(){xc=mn=ds=null}function bc(e){var t=cs.current;se(cs),e._currentValue=t}function kl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function En(e,t){ds=e,xc=mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(xc!==e)if(e={context:e,memoizedValue:t,next:null},mn===null){if(ds===null)throw Error(C(308));mn=e,ds.dependencies={lanes:0,firstContext:e}}else mn=mn.next=e;return t}var Fr=null;function kc(e){Fr===null?Fr=[e]:Fr.push(e)}function Lp(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,kc(t)):(r.next=i.next,i.next=r),t.interleaved=r,Qt(e,n)}function Qt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ir=!1;function Sc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,G&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Qt(e,r)}return i=n.interleaved,i===null?(t.next=t,kc(n)):(t.next=i.next,i.next=t),n.interleaved=t,Qt(e,r)}function Lo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,lc(e,r)}}function nu(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function us(e,t,r,n){var i=e.updateQueue;ir=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var l=c,d=l.next;l.next=null,a===null?o=d:a.next=d,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==a&&(c===null?u.firstBaseUpdate=d:c.next=d,u.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,u=d=l=null,c=o;do{var p=c.lane,x=c.eventTime;if((n&p)===p){u!==null&&(u=u.next={eventTime:x,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var v=e,b=c;switch(p=t,x=r,b.tag){case 1:if(v=b.payload,typeof v=="function"){f=v.call(x,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,p=typeof v=="function"?v.call(x,f,p):v,p==null)break e;f=ue({},f,p);break e;case 2:ir=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[c]:p.push(c))}else x={eventTime:x,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(d=u=x,l=f):u=u.next=x,a|=p;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;p=c,c=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Kr|=a,e.lanes=a,e.memoizedState=f}}function iu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(C(191,i));i.call(n)}}}var Ki={},Nt=Er(Ki),zi=Er(Ki),Mi=Er(Ki);function Ur(e){if(e===Ki)throw Error(C(174));return e}function _c(e,t){switch(ne(Mi,t),ne(zi,e),ne(Nt,Ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rl(t,e)}se(Nt),ne(Nt,t)}function Ln(){se(Nt),se(zi),se(Mi)}function Mp(e){Ur(Mi.current);var t=Ur(Nt.current),r=rl(t,e.type);t!==r&&(ne(zi,e),ne(Nt,r))}function Ec(e){zi.current===e&&(se(Nt),se(zi))}var ce=Er(0);function fs(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _a=[];function Cc(){for(var e=0;e<_a.length;e++)_a[e]._workInProgressVersionPrimary=null;_a.length=0}var zo=Zt.ReactCurrentDispatcher,Ea=Zt.ReactCurrentBatchConfig,Qr=0,de=null,xe=null,ke=null,ps=!1,yi=!1,Di=0,Tv=0;function Re(){throw Error(C(321))}function jc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!_t(e[r],t[r]))return!1;return!0}function Ic(e,t,r,n,i,o){if(Qr=o,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zo.current=e===null||e.memoizedState===null?Av:Ov,e=r(n,i),yi){o=0;do{if(yi=!1,Di=0,25<=o)throw Error(C(301));o+=1,ke=xe=null,t.updateQueue=null,zo.current=Lv,e=r(n,i)}while(yi)}if(zo.current=hs,t=xe!==null&&xe.next!==null,Qr=0,ke=xe=de=null,ps=!1,t)throw Error(C(300));return e}function Tc(){var e=Di!==0;return Di=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?de.memoizedState=ke=e:ke=ke.next=e,ke}function dt(){if(xe===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=ke===null?de.memoizedState:ke.next;if(t!==null)ke=t,xe=e;else{if(e===null)throw Error(C(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},ke===null?de.memoizedState=ke=e:ke=ke.next=e}return ke}function Fi(e,t){return typeof t=="function"?t(e):t}function Ca(e){var t=dt(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=xe,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var c=a=null,l=null,d=o;do{var u=d.lane;if((Qr&u)===u)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(c=l=f,a=n):l=l.next=f,de.lanes|=u,Kr|=u}d=d.next}while(d!==null&&d!==o);l===null?a=n:l.next=c,_t(n,t.memoizedState)||(We=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,de.lanes|=o,Kr|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ja(e){var t=dt(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);_t(o,t.memoizedState)||(We=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Dp(){}function Fp(e,t){var r=de,n=dt(),i=t(),o=!_t(n.memoizedState,i);if(o&&(n.memoizedState=i,We=!0),n=n.queue,Rc(Wp.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||ke!==null&&ke.memoizedState.tag&1){if(r.flags|=2048,Ui(9,Bp.bind(null,r,n,i,t),void 0,null),Se===null)throw Error(C(349));Qr&30||Up(r,t,i)}return i}function Up(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Bp(e,t,r,n){t.value=r,t.getSnapshot=n,$p(t)&&Vp(e)}function Wp(e,t,r){return r(function(){$p(t)&&Vp(e)})}function $p(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!_t(e,r)}catch{return!0}}function Vp(e){var t=Qt(e,1);t!==null&&kt(t,e,1,-1)}function ou(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},t.queue=e,e=e.dispatch=Pv.bind(null,de,e),[t.memoizedState,e]}function Ui(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Hp(){return dt().memoizedState}function Mo(e,t,r,n){var i=jt();de.flags|=e,i.memoizedState=Ui(1|t,r,void 0,n===void 0?null:n)}function Ms(e,t,r,n){var i=dt();n=n===void 0?null:n;var o=void 0;if(xe!==null){var a=xe.memoizedState;if(o=a.destroy,n!==null&&jc(n,a.deps)){i.memoizedState=Ui(t,r,o,n);return}}de.flags|=e,i.memoizedState=Ui(1|t,r,o,n)}function su(e,t){return Mo(8390656,8,e,t)}function Rc(e,t){return Ms(2048,8,e,t)}function Gp(e,t){return Ms(4,2,e,t)}function Yp(e,t){return Ms(4,4,e,t)}function Qp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kp(e,t,r){return r=r!=null?r.concat([e]):null,Ms(4,4,Qp.bind(null,t,e),r)}function Nc(){}function qp(e,t){var r=dt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&jc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Jp(e,t){var r=dt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&jc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Xp(e,t,r){return Qr&21?(_t(r,t)||(r=np(),de.lanes|=r,Kr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=r)}function Rv(e,t){var r=ee;ee=r!==0&&4>r?r:4,e(!0);var n=Ea.transition;Ea.transition={};try{e(!1),t()}finally{ee=r,Ea.transition=n}}function Zp(){return dt().memoizedState}function Nv(e,t,r){var n=yr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},eh(e))th(t,r);else if(r=Lp(e,t,r,n),r!==null){var i=Me();kt(r,e,n,i),rh(r,t,n)}}function Pv(e,t,r){var n=yr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(eh(e))th(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,c=o(a,r);if(i.hasEagerState=!0,i.eagerState=c,_t(c,a)){var l=t.interleaved;l===null?(i.next=i,kc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=Lp(e,t,i,n),r!==null&&(i=Me(),kt(r,e,n,i),rh(r,t,n))}}function eh(e){var t=e.alternate;return e===de||t!==null&&t===de}function th(e,t){yi=ps=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function rh(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,lc(e,r)}}var hs={readContext:ct,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Av={readContext:ct,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:su,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Mo(4194308,4,Qp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mo(4,2,e,t)},useMemo:function(e,t){var r=jt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=jt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Nv.bind(null,de,e),[n.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:ou,useDebugValue:Nc,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=ou(!1),t=e[0];return e=Rv.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=de,i=jt();if(ae){if(r===void 0)throw Error(C(407));r=r()}else{if(r=t(),Se===null)throw Error(C(349));Qr&30||Up(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,su(Wp.bind(null,n,o,e),[e]),n.flags|=2048,Ui(9,Bp.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=jt(),t=Se.identifierPrefix;if(ae){var r=Wt,n=Bt;r=(n&~(1<<32-bt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Di++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Tv++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ov={readContext:ct,useCallback:qp,useContext:ct,useEffect:Rc,useImperativeHandle:Kp,useInsertionEffect:Gp,useLayoutEffect:Yp,useMemo:Jp,useReducer:Ca,useRef:Hp,useState:function(){return Ca(Fi)},useDebugValue:Nc,useDeferredValue:function(e){var t=dt();return Xp(t,xe.memoizedState,e)},useTransition:function(){var e=Ca(Fi)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Dp,useSyncExternalStore:Fp,useId:Zp,unstable_isNewReconciler:!1},Lv={readContext:ct,useCallback:qp,useContext:ct,useEffect:Rc,useImperativeHandle:Kp,useInsertionEffect:Gp,useLayoutEffect:Yp,useMemo:Jp,useReducer:ja,useRef:Hp,useState:function(){return ja(Fi)},useDebugValue:Nc,useDeferredValue:function(e){var t=dt();return xe===null?t.memoizedState=e:Xp(t,xe.memoizedState,e)},useTransition:function(){var e=ja(Fi)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Dp,useSyncExternalStore:Fp,useId:Zp,unstable_isNewReconciler:!1};function vt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Sl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ue({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ds={isMounted:function(e){return(e=e._reactInternals)?Zr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Me(),i=yr(e),o=Ht(n,i);o.payload=t,r!=null&&(o.callback=r),t=mr(e,o,i),t!==null&&(kt(t,e,i,n),Lo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Me(),i=yr(e),o=Ht(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=mr(e,o,i),t!==null&&(kt(t,e,i,n),Lo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Me(),n=yr(e),i=Ht(r,n);i.tag=2,t!=null&&(i.callback=t),t=mr(e,i,n),t!==null&&(kt(t,e,n,r),Lo(t,e,n))}};function au(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!Pi(r,n)||!Pi(i,o):!0}function nh(e,t,r){var n=!1,i=Sr,o=t.contextType;return typeof o=="object"&&o!==null?o=ct(o):(i=Ve(t)?Gr:Oe.current,n=t.contextTypes,o=(n=n!=null)?Pn(e,i):Sr),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ds,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function lu(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ds.enqueueReplaceState(t,t.state,null)}function _l(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Sc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ct(o):(o=Ve(t)?Gr:Oe.current,i.context=Pn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Sl(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ds.enqueueReplaceState(i,i.state,null),us(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zn(e,t){try{var r="",n=t;do r+=c0(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ia(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function El(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var zv=typeof WeakMap=="function"?WeakMap:Map;function ih(e,t,r){r=Ht(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ms||(ms=!0,Ll=n),El(e,t)},r}function oh(e,t,r){r=Ht(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){El(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){El(e,t),typeof n!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function cu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new zv;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=qv.bind(null,e,t,r),t.then(e,e))}function du(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function uu(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ht(-1,1),t.tag=2,mr(r,t,1))),r.lanes|=1),e)}var Mv=Zt.ReactCurrentOwner,We=!1;function ze(e,t,r,n){t.child=e===null?Op(t,null,r,n):On(t,e.child,r,n)}function fu(e,t,r,n,i){r=r.render;var o=t.ref;return En(t,i),n=Ic(e,t,r,n,o,i),r=Tc(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(ae&&r&&mc(t),t.flags|=1,ze(e,t,n,i),t.child)}function pu(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Fc(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,sh(e,t,o,n,i)):(e=Bo(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:Pi,r(a,n)&&e.ref===t.ref)return Kt(e,t,i)}return t.flags|=1,e=xr(o,n),e.ref=t.ref,e.return=t,t.child=e}function sh(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(Pi(o,n)&&e.ref===t.ref)if(We=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Kt(e,t,i)}return Cl(e,t,r,n,i)}function ah(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(yn,Qe),Qe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(yn,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,ne(yn,Qe),Qe|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,ne(yn,Qe),Qe|=n;return ze(e,t,i,r),t.child}function lh(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,r,n,i){var o=Ve(r)?Gr:Oe.current;return o=Pn(t,o),En(t,i),r=Ic(e,t,r,n,o,i),n=Tc(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(ae&&n&&mc(t),t.flags|=1,ze(e,t,r,i),t.child)}function hu(e,t,r,n,i){if(Ve(r)){var o=!0;ss(t)}else o=!1;if(En(t,i),t.stateNode===null)Do(e,t),nh(t,r,n),_l(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var l=a.context,d=r.contextType;typeof d=="object"&&d!==null?d=ct(d):(d=Ve(r)?Gr:Oe.current,d=Pn(t,d));var u=r.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==n||l!==d)&&lu(t,a,n,d),ir=!1;var p=t.memoizedState;a.state=p,us(t,n,a,i),l=t.memoizedState,c!==n||p!==l||$e.current||ir?(typeof u=="function"&&(Sl(t,r,u,n),l=t.memoizedState),(c=ir||au(t,r,c,n,p,l,d))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=d,n=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,zp(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:vt(t.type,c),a.props=d,f=t.pendingProps,p=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=ct(l):(l=Ve(r)?Gr:Oe.current,l=Pn(t,l));var x=r.getDerivedStateFromProps;(u=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==f||p!==l)&&lu(t,a,n,l),ir=!1,p=t.memoizedState,a.state=p,us(t,n,a,i);var v=t.memoizedState;c!==f||p!==v||$e.current||ir?(typeof x=="function"&&(Sl(t,r,x,n),v=t.memoizedState),(d=ir||au(t,r,d,n,p,v,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),a.props=n,a.state=v,a.context=l,n=d):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return jl(e,t,r,n,o,i)}function jl(e,t,r,n,i,o){lh(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&Zd(t,r,!1),Kt(e,t,o);n=t.stateNode,Mv.current=t;var c=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=On(t,e.child,null,o),t.child=On(t,null,c,o)):ze(e,t,c,o),t.memoizedState=n.state,i&&Zd(t,r,!0),t.child}function ch(e){var t=e.stateNode;t.pendingContext?Xd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xd(e,t.context,!1),_c(e,t.containerInfo)}function gu(e,t,r,n,i){return An(),yc(i),t.flags|=256,ze(e,t,r,n),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function dh(e,t,r){var n=t.pendingProps,i=ce.current,o=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(ce,i&1),e===null)return bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Bs(a,n,0,null),e=$r(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Tl(r),t.memoizedState=Il,e):Pc(t,a));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return Dv(e,t,a,n,c,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,c=i.sibling;var l={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=xr(i,l),n.subtreeFlags=i.subtreeFlags&14680064),c!==null?o=xr(c,o):(o=$r(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?Tl(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=Il,n}return o=e.child,e=o.sibling,n=xr(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Pc(e,t){return t=Bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,r,n){return n!==null&&yc(n),On(t,e.child,null,r),e=Pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dv(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=Ia(Error(C(422))),So(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Bs({mode:"visible",children:n.children},i,0,null),o=$r(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&On(t,e.child,null,a),t.child.memoizedState=Tl(a),t.memoizedState=Il,o);if(!(t.mode&1))return So(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var c=n.dgst;return n=c,o=Error(C(419)),n=Ia(o,n,void 0),So(e,t,a,n)}if(c=(a&e.childLanes)!==0,We||c){if(n=Se,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qt(e,i),kt(n,e,i,-1))}return Dc(),n=Ia(Error(C(421))),So(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Jv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ke=gr(i.nextSibling),qe=t,ae=!0,xt=null,e!==null&&(ot[st++]=Bt,ot[st++]=Wt,ot[st++]=Yr,Bt=e.id,Wt=e.overflow,Yr=t),t=Pc(t,n.children),t.flags|=4096,t)}function mu(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),kl(e.return,t,r)}function Ta(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function uh(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(ze(e,t,n.children,r),n=ce.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,r,t);else if(e.tag===19)mu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ne(ce,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&fs(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Ta(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fs(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Ta(t,!0,r,null,o);break;case"together":Ta(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Do(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Kr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,r=xr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=xr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Fv(e,t,r){switch(t.tag){case 3:ch(t),An();break;case 5:Mp(t);break;case 1:Ve(t.type)&&ss(t);break;case 4:_c(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ne(cs,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ne(ce,ce.current&1),t.flags|=128,null):r&t.child.childLanes?dh(e,t,r):(ne(ce,ce.current&1),e=Kt(e,t,r),e!==null?e.sibling:null);ne(ce,ce.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return uh(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(ce,ce.current),n)break;return null;case 22:case 23:return t.lanes=0,ah(e,t,r)}return Kt(e,t,r)}var fh,Rl,ph,hh;fh=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Rl=function(){};ph=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Ur(Nt.current);var o=null;switch(r){case"input":i=Xa(e,i),n=Xa(e,n),o=[];break;case"select":i=ue({},i,{value:void 0}),n=ue({},n,{value:void 0}),o=[];break;case"textarea":i=tl(e,i),n=tl(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=is)}nl(r,n);var a;r=null;for(d in i)if(!n.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(a in c)c.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ei.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in n){var l=n[d];if(c=i!=null?i[d]:void 0,n.hasOwnProperty(d)&&l!==c&&(l!=null||c!=null))if(d==="style")if(c){for(a in c)!c.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&c[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(o||(o=[]),o.push(d,r)),r=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ei.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&oe("scroll",e),o||c===l||(o=[])):(o=o||[]).push(d,l))}r&&(o=o||[]).push("style",r);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};hh=function(e,t,r,n){r!==n&&(t.flags|=4)};function ii(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Uv(e,t,r){var n=t.pendingProps;switch(vc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ve(t.type)&&os(),Ne(t),null;case 3:return n=t.stateNode,Ln(),se($e),se(Oe),Cc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(bo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(Dl(xt),xt=null))),Rl(e,t),Ne(t),null;case 5:Ec(t);var i=Ur(Mi.current);if(r=t.type,e!==null&&t.stateNode!=null)ph(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(C(166));return Ne(t),null}if(e=Ur(Nt.current),bo(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[It]=t,n[Li]=o,e=(t.mode&1)!==0,r){case"dialog":oe("cancel",n),oe("close",n);break;case"iframe":case"object":case"embed":oe("load",n);break;case"video":case"audio":for(i=0;i<fi.length;i++)oe(fi[i],n);break;case"source":oe("error",n);break;case"img":case"image":case"link":oe("error",n),oe("load",n);break;case"details":oe("toggle",n);break;case"input":Ed(n,o),oe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},oe("invalid",n);break;case"textarea":jd(n,o),oe("invalid",n)}nl(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="children"?typeof c=="string"?n.textContent!==c&&(o.suppressHydrationWarning!==!0&&wo(n.textContent,c,e),i=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&wo(n.textContent,c,e),i=["children",""+c]):Ei.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&oe("scroll",n)}switch(r){case"input":fo(n),Cd(n,o,!0);break;case"textarea":fo(n),Id(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=is)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wf(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[It]=t,e[Li]=n,fh(e,t,!1,!1),t.stateNode=e;e:{switch(a=il(r,n),r){case"dialog":oe("cancel",e),oe("close",e),i=n;break;case"iframe":case"object":case"embed":oe("load",e),i=n;break;case"video":case"audio":for(i=0;i<fi.length;i++)oe(fi[i],e);i=n;break;case"source":oe("error",e),i=n;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=n;break;case"details":oe("toggle",e),i=n;break;case"input":Ed(e,n),i=Xa(e,n),oe("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=ue({},n,{value:void 0}),oe("invalid",e);break;case"textarea":jd(e,n),i=tl(e,n),oe("invalid",e);break;default:i=n}nl(r,i),c=i;for(o in c)if(c.hasOwnProperty(o)){var l=c[o];o==="style"?Hf(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$f(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ci(e,l):typeof l=="number"&&Ci(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ei.hasOwnProperty(o)?l!=null&&o==="onScroll"&&oe("scroll",e):l!=null&&rc(e,o,l,a))}switch(r){case"input":fo(e),Cd(e,n,!1);break;case"textarea":fo(e),Id(e);break;case"option":n.value!=null&&e.setAttribute("value",""+kr(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?bn(e,!!n.multiple,o,!1):n.defaultValue!=null&&bn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=is)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)hh(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(C(166));if(r=Ur(Mi.current),Ur(Nt.current),bo(t)){if(n=t.stateNode,r=t.memoizedProps,n[It]=t,(o=n.nodeValue!==r)&&(e=qe,e!==null))switch(e.tag){case 3:wo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wo(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[It]=t,t.stateNode=n}return Ne(t),null;case 13:if(se(ce),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ke!==null&&t.mode&1&&!(t.flags&128))Pp(),An(),t.flags|=98560,o=!1;else if(o=bo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[It]=t}else An(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),o=!1}else xt!==null&&(Dl(xt),xt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?we===0&&(we=3):Dc())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Ln(),Rl(e,t),e===null&&Ai(t.stateNode.containerInfo),Ne(t),null;case 10:return bc(t.type._context),Ne(t),null;case 17:return Ve(t.type)&&os(),Ne(t),null;case 19:if(se(ce),o=t.memoizedState,o===null)return Ne(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)ii(o,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=fs(e),a!==null){for(t.flags|=128,ii(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ne(ce,ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>Mn&&(t.flags|=128,n=!0,ii(o,!1),t.lanes=4194304)}else{if(!n)if(e=fs(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ii(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ae)return Ne(t),null}else 2*he()-o.renderingStartTime>Mn&&r!==1073741824&&(t.flags|=128,n=!0,ii(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,r=ce.current,ne(ce,n?r&1|2:r&1),t):(Ne(t),null);case 22:case 23:return Mc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Qe&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Bv(e,t){switch(vc(t),t.tag){case 1:return Ve(t.type)&&os(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(),se($e),se(Oe),Cc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ec(t),null;case 13:if(se(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ce),null;case 4:return Ln(),null;case 10:return bc(t.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var _o=!1,Pe=!1,Wv=typeof WeakSet=="function"?WeakSet:Set,A=null;function vn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){pe(e,t,n)}else r.current=null}function Nl(e,t,r){try{r()}catch(n){pe(e,t,n)}}var vu=!1;function $v(e,t){if(hl=ts,e=xp(),gc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,c=-1,l=-1,d=0,u=0,f=e,p=null;t:for(;;){for(var x;f!==r||i!==0&&f.nodeType!==3||(c=a+i),f!==o||n!==0&&f.nodeType!==3||(l=a+n),f.nodeType===3&&(a+=f.nodeValue.length),(x=f.firstChild)!==null;)p=f,f=x;for(;;){if(f===e)break t;if(p===r&&++d===i&&(c=a),p===o&&++u===n&&(l=a),(x=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=x}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(gl={focusedElem:e,selectionRange:r},ts=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,S=v.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:vt(t.type,b),S);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(k){pe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=vu,vu=!1,v}function xi(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Nl(t,r,o)}i=i.next}while(i!==n)}}function Fs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Pl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function gh(e){var t=e.alternate;t!==null&&(e.alternate=null,gh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Li],delete t[yl],delete t[Ev],delete t[Cv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mh(e){return e.tag===5||e.tag===3||e.tag===4}function yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=is));else if(n!==4&&(e=e.child,e!==null))for(Al(e,t,r),e=e.sibling;e!==null;)Al(e,t,r),e=e.sibling}function Ol(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ol(e,t,r),e=e.sibling;e!==null;)Ol(e,t,r),e=e.sibling}var Ee=null,yt=!1;function tr(e,t,r){for(r=r.child;r!==null;)vh(e,t,r),r=r.sibling}function vh(e,t,r){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ns,r)}catch{}switch(r.tag){case 5:Pe||vn(r,t);case 6:var n=Ee,i=yt;Ee=null,tr(e,t,r),Ee=n,yt=i,Ee!==null&&(yt?(e=Ee,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ee.removeChild(r.stateNode));break;case 18:Ee!==null&&(yt?(e=Ee,r=r.stateNode,e.nodeType===8?ka(e.parentNode,r):e.nodeType===1&&ka(e,r),Ri(e)):ka(Ee,r.stateNode));break;case 4:n=Ee,i=yt,Ee=r.stateNode.containerInfo,yt=!0,tr(e,t,r),Ee=n,yt=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Nl(r,t,a),i=i.next}while(i!==n)}tr(e,t,r);break;case 1:if(!Pe&&(vn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(c){pe(r,t,c)}tr(e,t,r);break;case 21:tr(e,t,r);break;case 22:r.mode&1?(Pe=(n=Pe)||r.memoizedState!==null,tr(e,t,r),Pe=n):tr(e,t,r);break;default:tr(e,t,r)}}function xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Wv),t.forEach(function(n){var i=Xv.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function mt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:Ee=c.stateNode,yt=!1;break e;case 3:Ee=c.stateNode.containerInfo,yt=!0;break e;case 4:Ee=c.stateNode.containerInfo,yt=!0;break e}c=c.return}if(Ee===null)throw Error(C(160));vh(o,a,i),Ee=null,yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){pe(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yh(t,e),t=t.sibling}function yh(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),Ct(e),n&4){try{xi(3,e,e.return),Fs(3,e)}catch(b){pe(e,e.return,b)}try{xi(5,e,e.return)}catch(b){pe(e,e.return,b)}}break;case 1:mt(t,e),Ct(e),n&512&&r!==null&&vn(r,r.return);break;case 5:if(mt(t,e),Ct(e),n&512&&r!==null&&vn(r,r.return),e.flags&32){var i=e.stateNode;try{Ci(i,"")}catch(b){pe(e,e.return,b)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&Uf(i,o),il(c,a);var d=il(c,o);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?Hf(i,f):u==="dangerouslySetInnerHTML"?$f(i,f):u==="children"?Ci(i,f):rc(i,u,f,d)}switch(c){case"input":Za(i,o);break;case"textarea":Bf(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?bn(i,!!o.multiple,x,!1):p!==!!o.multiple&&(o.defaultValue!=null?bn(i,!!o.multiple,o.defaultValue,!0):bn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Li]=o}catch(b){pe(e,e.return,b)}}break;case 6:if(mt(t,e),Ct(e),n&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){pe(e,e.return,b)}}break;case 3:if(mt(t,e),Ct(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ri(t.containerInfo)}catch(b){pe(e,e.return,b)}break;case 4:mt(t,e),Ct(e);break;case 13:mt(t,e),Ct(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Lc=he())),n&4&&xu(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(Pe=(d=Pe)||u,mt(t,e),Pe=d):mt(t,e),Ct(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(A=e,u=e.child;u!==null;){for(f=A=u;A!==null;){switch(p=A,x=p.child,p.tag){case 0:case 11:case 14:case 15:xi(4,p,p.return);break;case 1:vn(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){pe(n,r,b)}}break;case 5:vn(p,p.return);break;case 22:if(p.memoizedState!==null){bu(f);continue}}x!==null?(x.return=p,A=x):bu(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=Vf("display",a))}catch(b){pe(e,e.return,b)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(b){pe(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:mt(t,e),Ct(e),n&4&&xu(e);break;case 21:break;default:mt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(mh(r)){var n=r;break e}r=r.return}throw Error(C(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Ci(i,""),n.flags&=-33);var o=yu(e);Ol(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,c=yu(e);Al(e,c,a);break;default:throw Error(C(161))}}catch(l){pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vv(e,t,r){A=e,xh(e)}function xh(e,t,r){for(var n=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||_o;if(!a){var c=i.alternate,l=c!==null&&c.memoizedState!==null||Pe;c=_o;var d=Pe;if(_o=a,(Pe=l)&&!d)for(A=i;A!==null;)a=A,l=a.child,a.tag===22&&a.memoizedState!==null?ku(i):l!==null?(l.return=a,A=l):ku(i);for(;o!==null;)A=o,xh(o),o=o.sibling;A=i,_o=c,Pe=d}wu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):wu(e)}}function wu(e){for(;A!==null;){var t=A;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||Fs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Pe)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:vt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&iu(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}iu(t,a,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ri(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Pe||t.flags&512&&Pl(t)}catch(p){pe(t,t.return,p)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function bu(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function ku(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Fs(4,t)}catch(l){pe(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){pe(t,i,l)}}var o=t.return;try{Pl(t)}catch(l){pe(t,o,l)}break;case 5:var a=t.return;try{Pl(t)}catch(l){pe(t,a,l)}}}catch(l){pe(t,t.return,l)}if(t===e){A=null;break}var c=t.sibling;if(c!==null){c.return=t.return,A=c;break}A=t.return}}var Hv=Math.ceil,gs=Zt.ReactCurrentDispatcher,Ac=Zt.ReactCurrentOwner,lt=Zt.ReactCurrentBatchConfig,G=0,Se=null,me=null,Ce=0,Qe=0,yn=Er(0),we=0,Bi=null,Kr=0,Us=0,Oc=0,wi=null,Be=null,Lc=0,Mn=1/0,zt=null,ms=!1,Ll=null,vr=null,Eo=!1,dr=null,vs=0,bi=0,zl=null,Fo=-1,Uo=0;function Me(){return G&6?he():Fo!==-1?Fo:Fo=he()}function yr(e){return e.mode&1?G&2&&Ce!==0?Ce&-Ce:Iv.transition!==null?(Uo===0&&(Uo=np()),Uo):(e=ee,e!==0||(e=window.event,e=e===void 0?16:dp(e.type)),e):1}function kt(e,t,r,n){if(50<bi)throw bi=0,zl=null,Error(C(185));Gi(e,r,n),(!(G&2)||e!==Se)&&(e===Se&&(!(G&2)&&(Us|=r),we===4&&sr(e,Ce)),He(e,n),r===1&&G===0&&!(t.mode&1)&&(Mn=he()+500,zs&&Cr()))}function He(e,t){var r=e.callbackNode;I0(e,t);var n=es(e,e===Se?Ce:0);if(n===0)r!==null&&Nd(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Nd(r),t===1)e.tag===0?jv(Su.bind(null,e)):Tp(Su.bind(null,e)),Sv(function(){!(G&6)&&Cr()}),r=null;else{switch(ip(n)){case 1:r=ac;break;case 4:r=tp;break;case 16:r=Zo;break;case 536870912:r=rp;break;default:r=Zo}r=jh(r,wh.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function wh(e,t){if(Fo=-1,Uo=0,G&6)throw Error(C(327));var r=e.callbackNode;if(Cn()&&e.callbackNode!==r)return null;var n=es(e,e===Se?Ce:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ys(e,n);else{t=n;var i=G;G|=2;var o=kh();(Se!==e||Ce!==t)&&(zt=null,Mn=he()+500,Wr(e,t));do try{Qv();break}catch(c){bh(e,c)}while(!0);wc(),gs.current=o,G=i,me!==null?t=0:(Se=null,Ce=0,t=we)}if(t!==0){if(t===2&&(i=cl(e),i!==0&&(n=i,t=Ml(e,i))),t===1)throw r=Bi,Wr(e,0),sr(e,n),He(e,he()),r;if(t===6)sr(e,n);else{if(i=e.current.alternate,!(n&30)&&!Gv(i)&&(t=ys(e,n),t===2&&(o=cl(e),o!==0&&(n=o,t=Ml(e,o))),t===1))throw r=Bi,Wr(e,0),sr(e,n),He(e,he()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(C(345));case 2:zr(e,Be,zt);break;case 3:if(sr(e,n),(n&130023424)===n&&(t=Lc+500-he(),10<t)){if(es(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vl(zr.bind(null,e,Be,zt),t);break}zr(e,Be,zt);break;case 4:if(sr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-bt(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=he()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Hv(n/1960))-n,10<n){e.timeoutHandle=vl(zr.bind(null,e,Be,zt),n);break}zr(e,Be,zt);break;case 5:zr(e,Be,zt);break;default:throw Error(C(329))}}}return He(e,he()),e.callbackNode===r?wh.bind(null,e):null}function Ml(e,t){var r=wi;return e.current.memoizedState.isDehydrated&&(Wr(e,t).flags|=256),e=ys(e,t),e!==2&&(t=Be,Be=r,t!==null&&Dl(t)),e}function Dl(e){Be===null?Be=e:Be.push.apply(Be,e)}function Gv(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!_t(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~Oc,t&=~Us,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-bt(t),n=1<<r;e[r]=-1,t&=~n}}function Su(e){if(G&6)throw Error(C(327));Cn();var t=es(e,0);if(!(t&1))return He(e,he()),null;var r=ys(e,t);if(e.tag!==0&&r===2){var n=cl(e);n!==0&&(t=n,r=Ml(e,n))}if(r===1)throw r=Bi,Wr(e,0),sr(e,t),He(e,he()),r;if(r===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zr(e,Be,zt),He(e,he()),null}function zc(e,t){var r=G;G|=1;try{return e(t)}finally{G=r,G===0&&(Mn=he()+500,zs&&Cr())}}function qr(e){dr!==null&&dr.tag===0&&!(G&6)&&Cn();var t=G;G|=1;var r=lt.transition,n=ee;try{if(lt.transition=null,ee=1,e)return e()}finally{ee=n,lt.transition=r,G=t,!(G&6)&&Cr()}}function Mc(){Qe=yn.current,se(yn)}function Wr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,kv(r)),me!==null)for(r=me.return;r!==null;){var n=r;switch(vc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&os();break;case 3:Ln(),se($e),se(Oe),Cc();break;case 5:Ec(n);break;case 4:Ln();break;case 13:se(ce);break;case 19:se(ce);break;case 10:bc(n.type._context);break;case 22:case 23:Mc()}r=r.return}if(Se=e,me=e=xr(e.current,null),Ce=Qe=t,we=0,Bi=null,Oc=Us=Kr=0,Be=wi=null,Fr!==null){for(t=0;t<Fr.length;t++)if(r=Fr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}Fr=null}return e}function bh(e,t){do{var r=me;try{if(wc(),zo.current=hs,ps){for(var n=de.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ps=!1}if(Qr=0,ke=xe=de=null,yi=!1,Di=0,Ac.current=null,r===null||r.return===null){we=1,Bi=t,me=null;break}e:{var o=e,a=r.return,c=r,l=t;if(t=Ce,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,u=c,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var x=du(a);if(x!==null){x.flags&=-257,uu(x,a,c,o,t),x.mode&1&&cu(o,d,t),t=x,l=d;var v=t.updateQueue;if(v===null){var b=new Set;b.add(l),t.updateQueue=b}else v.add(l);break e}else{if(!(t&1)){cu(o,d,t),Dc();break e}l=Error(C(426))}}else if(ae&&c.mode&1){var S=du(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),uu(S,a,c,o,t),yc(zn(l,c));break e}}o=l=zn(l,c),we!==4&&(we=2),wi===null?wi=[o]:wi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=ih(o,l,t);nu(o,m);break e;case 1:c=l;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(vr===null||!vr.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=oh(o,c,t);nu(o,k);break e}}o=o.return}while(o!==null)}_h(r)}catch(_){t=_,me===r&&r!==null&&(me=r=r.return);continue}break}while(!0)}function kh(){var e=gs.current;return gs.current=hs,e===null?hs:e}function Dc(){(we===0||we===3||we===2)&&(we=4),Se===null||!(Kr&268435455)&&!(Us&268435455)||sr(Se,Ce)}function ys(e,t){var r=G;G|=2;var n=kh();(Se!==e||Ce!==t)&&(zt=null,Wr(e,t));do try{Yv();break}catch(i){bh(e,i)}while(!0);if(wc(),G=r,gs.current=n,me!==null)throw Error(C(261));return Se=null,Ce=0,we}function Yv(){for(;me!==null;)Sh(me)}function Qv(){for(;me!==null&&!x0();)Sh(me)}function Sh(e){var t=Ch(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?_h(e):me=t,Ac.current=null}function _h(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Bv(r,t),r!==null){r.flags&=32767,me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,me=null;return}}else if(r=Uv(r,t,Qe),r!==null){me=r;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);we===0&&(we=5)}function zr(e,t,r){var n=ee,i=lt.transition;try{lt.transition=null,ee=1,Kv(e,t,r,n)}finally{lt.transition=i,ee=n}return null}function Kv(e,t,r,n){do Cn();while(dr!==null);if(G&6)throw Error(C(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(T0(e,o),e===Se&&(me=Se=null,Ce=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Eo||(Eo=!0,jh(Zo,function(){return Cn(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=lt.transition,lt.transition=null;var a=ee;ee=1;var c=G;G|=4,Ac.current=null,$v(e,r),yh(r,e),gv(gl),ts=!!hl,gl=hl=null,e.current=r,Vv(r),w0(),G=c,ee=a,lt.transition=o}else e.current=r;if(Eo&&(Eo=!1,dr=e,vs=i),o=e.pendingLanes,o===0&&(vr=null),S0(r.stateNode),He(e,he()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(ms)throw ms=!1,e=Ll,Ll=null,e;return vs&1&&e.tag!==0&&Cn(),o=e.pendingLanes,o&1?e===zl?bi++:(bi=0,zl=e):bi=0,Cr(),null}function Cn(){if(dr!==null){var e=ip(vs),t=lt.transition,r=ee;try{if(lt.transition=null,ee=16>e?16:e,dr===null)var n=!1;else{if(e=dr,dr=null,vs=0,G&6)throw Error(C(331));var i=G;for(G|=4,A=e.current;A!==null;){var o=A,a=o.child;if(A.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var d=c[l];for(A=d;A!==null;){var u=A;switch(u.tag){case 0:case 11:case 15:xi(8,u,o)}var f=u.child;if(f!==null)f.return=u,A=f;else for(;A!==null;){u=A;var p=u.sibling,x=u.return;if(gh(u),u===d){A=null;break}if(p!==null){p.return=x,A=p;break}A=x}}}var v=o.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}A=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,A=a;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,A=m;break e}A=o.return}}var h=e.current;for(A=h;A!==null;){a=A;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,A=g;else e:for(a=h;A!==null;){if(c=A,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Fs(9,c)}}catch(_){pe(c,c.return,_)}if(c===a){A=null;break e}var k=c.sibling;if(k!==null){k.return=c.return,A=k;break e}A=c.return}}if(G=i,Cr(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ns,e)}catch{}n=!0}return n}finally{ee=r,lt.transition=t}}return!1}function _u(e,t,r){t=zn(r,t),t=ih(e,t,1),e=mr(e,t,1),t=Me(),e!==null&&(Gi(e,1,t),He(e,t))}function pe(e,t,r){if(e.tag===3)_u(e,e,r);else for(;t!==null;){if(t.tag===3){_u(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(vr===null||!vr.has(n))){e=zn(r,e),e=oh(t,e,1),t=mr(t,e,1),e=Me(),t!==null&&(Gi(t,1,e),He(t,e));break}}t=t.return}}function qv(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&r,Se===e&&(Ce&r)===r&&(we===4||we===3&&(Ce&130023424)===Ce&&500>he()-Lc?Wr(e,0):Oc|=r),He(e,t)}function Eh(e,t){t===0&&(e.mode&1?(t=go,go<<=1,!(go&130023424)&&(go=4194304)):t=1);var r=Me();e=Qt(e,t),e!==null&&(Gi(e,t,r),He(e,r))}function Jv(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Eh(e,r)}function Xv(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(t),Eh(e,r)}var Ch;Ch=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)We=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return We=!1,Fv(e,t,r);We=!!(e.flags&131072)}else We=!1,ae&&t.flags&1048576&&Rp(t,ls,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Do(e,t),e=t.pendingProps;var i=Pn(t,Oe.current);En(t,r),i=Ic(null,t,n,e,i,r);var o=Tc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(n)?(o=!0,ss(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sc(t),i.updater=Ds,t.stateNode=i,i._reactInternals=t,_l(t,n,e,r),t=jl(null,t,n,!0,o,r)):(t.tag=0,ae&&o&&mc(t),ze(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Do(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=e1(n),e=vt(n,e),i){case 0:t=Cl(null,t,n,e,r);break e;case 1:t=hu(null,t,n,e,r);break e;case 11:t=fu(null,t,n,e,r);break e;case 14:t=pu(null,t,n,vt(n.type,e),r);break e}throw Error(C(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:vt(n,i),Cl(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:vt(n,i),hu(e,t,n,i,r);case 3:e:{if(ch(t),e===null)throw Error(C(387));n=t.pendingProps,o=t.memoizedState,i=o.element,zp(e,t),us(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=zn(Error(C(423)),t),t=gu(e,t,n,r,i);break e}else if(n!==i){i=zn(Error(C(424)),t),t=gu(e,t,n,r,i);break e}else for(Ke=gr(t.stateNode.containerInfo.firstChild),qe=t,ae=!0,xt=null,r=Op(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(An(),n===i){t=Kt(e,t,r);break e}ze(e,t,n,r)}t=t.child}return t;case 5:return Mp(t),e===null&&bl(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ml(n,i)?a=null:o!==null&&ml(n,o)&&(t.flags|=32),lh(e,t),ze(e,t,a,r),t.child;case 6:return e===null&&bl(t),null;case 13:return dh(e,t,r);case 4:return _c(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=On(t,null,n,r):ze(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:vt(n,i),fu(e,t,n,i,r);case 7:return ze(e,t,t.pendingProps,r),t.child;case 8:return ze(e,t,t.pendingProps.children,r),t.child;case 12:return ze(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ne(cs,n._currentValue),n._currentValue=a,o!==null)if(_t(o.value,a)){if(o.children===i.children&&!$e.current){t=Kt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){a=o.child;for(var l=c.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=Ht(-1,r&-r),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?l.next=l:(l.next=u.next,u.next=l),d.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),kl(o.return,r,t),c.lanes|=r;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(C(341));a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),kl(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ze(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,En(t,r),i=ct(i),n=n(i),t.flags|=1,ze(e,t,n,r),t.child;case 14:return n=t.type,i=vt(n,t.pendingProps),i=vt(n.type,i),pu(e,t,n,i,r);case 15:return sh(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:vt(n,i),Do(e,t),t.tag=1,Ve(n)?(e=!0,ss(t)):e=!1,En(t,r),nh(t,n,i),_l(t,n,i,r),jl(null,t,n,!0,e,r);case 19:return uh(e,t,r);case 22:return ah(e,t,r)}throw Error(C(156,t.tag))};function jh(e,t){return ep(e,t)}function Zv(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,r,n){return new Zv(e,t,r,n)}function Fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function e1(e){if(typeof e=="function")return Fc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ic)return 11;if(e===oc)return 14}return 2}function xr(e,t){var r=e.alternate;return r===null?(r=at(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Bo(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")Fc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ln:return $r(r.children,i,o,t);case nc:a=8,i|=8;break;case Qa:return e=at(12,r,t,i|2),e.elementType=Qa,e.lanes=o,e;case Ka:return e=at(13,r,t,i),e.elementType=Ka,e.lanes=o,e;case qa:return e=at(19,r,t,i),e.elementType=qa,e.lanes=o,e;case Mf:return Bs(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lf:a=10;break e;case zf:a=9;break e;case ic:a=11;break e;case oc:a=14;break e;case nr:a=16,n=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=at(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function $r(e,t,r,n){return e=at(7,e,n,t),e.lanes=r,e}function Bs(e,t,r,n){return e=at(22,e,n,t),e.elementType=Mf,e.lanes=r,e.stateNode={isHidden:!1},e}function Ra(e,t,r){return e=at(6,e,null,t),e.lanes=r,e}function Na(e,t,r){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function t1(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uc(e,t,r,n,i,o,a,c,l){return e=new t1(e,t,r,c,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=at(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(o),e}function r1(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:an,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Ih(e){if(!e)return Sr;e=e._reactInternals;e:{if(Zr(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var r=e.type;if(Ve(r))return Ip(e,r,t)}return t}function Th(e,t,r,n,i,o,a,c,l){return e=Uc(r,n,!0,e,i,o,a,c,l),e.context=Ih(null),r=e.current,n=Me(),i=yr(r),o=Ht(n,i),o.callback=t??null,mr(r,o,i),e.current.lanes=i,Gi(e,i,n),He(e,n),e}function Ws(e,t,r,n){var i=t.current,o=Me(),a=yr(i);return r=Ih(r),t.context===null?t.context=r:t.pendingContext=r,t=Ht(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=mr(i,t,a),e!==null&&(kt(e,i,a,o),Lo(e,i,a)),a}function xs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Eu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Bc(e,t){Eu(e,t),(e=e.alternate)&&Eu(e,t)}function n1(){return null}var Rh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wc(e){this._internalRoot=e}$s.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ws(e,t,null,null)};$s.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qr(function(){Ws(null,e,null,null)}),t[Yt]=null}};function $s(e){this._internalRoot=e}$s.prototype.unstable_scheduleHydration=function(e){if(e){var t=ap();e={blockedOn:null,target:e,priority:t};for(var r=0;r<or.length&&t!==0&&t<or[r].priority;r++);or.splice(r,0,e),r===0&&cp(e)}};function $c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cu(){}function i1(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var d=xs(a);o.call(d)}}var a=Th(t,n,e,0,null,!1,!1,"",Cu);return e._reactRootContainer=a,e[Yt]=a.current,Ai(e.nodeType===8?e.parentNode:e),qr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var c=n;n=function(){var d=xs(l);c.call(d)}}var l=Uc(e,0,!1,null,null,!1,!1,"",Cu);return e._reactRootContainer=l,e[Yt]=l.current,Ai(e.nodeType===8?e.parentNode:e),qr(function(){Ws(t,l,r,n)}),l}function Hs(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var c=i;i=function(){var l=xs(a);c.call(l)}}Ws(t,a,e,i)}else a=i1(r,t,e,i,n);return xs(a)}op=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ui(t.pendingLanes);r!==0&&(lc(t,r|1),He(t,he()),!(G&6)&&(Mn=he()+500,Cr()))}break;case 13:qr(function(){var n=Qt(e,1);if(n!==null){var i=Me();kt(n,e,1,i)}}),Bc(e,1)}};cc=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var r=Me();kt(t,e,134217728,r)}Bc(e,134217728)}};sp=function(e){if(e.tag===13){var t=yr(e),r=Qt(e,t);if(r!==null){var n=Me();kt(r,e,t,n)}Bc(e,t)}};ap=function(){return ee};lp=function(e,t){var r=ee;try{return ee=e,t()}finally{ee=r}};sl=function(e,t,r){switch(t){case"input":if(Za(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Ls(n);if(!i)throw Error(C(90));Ff(n),Za(n,i)}}}break;case"textarea":Bf(e,r);break;case"select":t=r.value,t!=null&&bn(e,!!r.multiple,t,!1)}};Qf=zc;Kf=qr;var o1={usingClientEntryPoint:!1,Events:[Qi,fn,Ls,Gf,Yf,zc]},oi={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s1={bundleType:oi.bundleType,version:oi.version,rendererPackageName:oi.rendererPackageName,rendererConfig:oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xf(e),e===null?null:e.stateNode},findFiberByHostInstance:oi.findFiberByHostInstance||n1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{Ns=Co.inject(s1),Rt=Co}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o1;Xe.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$c(t))throw Error(C(200));return r1(e,t,null,r)};Xe.createRoot=function(e,t){if(!$c(e))throw Error(C(299));var r=!1,n="",i=Rh;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Uc(e,1,!1,null,null,r,!1,n,i),e[Yt]=t.current,Ai(e.nodeType===8?e.parentNode:e),new Wc(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Xf(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return qr(e)};Xe.hydrate=function(e,t,r){if(!Vs(t))throw Error(C(200));return Hs(null,e,t,!0,r)};Xe.hydrateRoot=function(e,t,r){if(!$c(e))throw Error(C(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=Rh;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=Th(t,null,e,1,r??null,i,!1,o,a),e[Yt]=t.current,Ai(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new $s(t)};Xe.render=function(e,t,r){if(!Vs(t))throw Error(C(200));return Hs(null,e,t,!1,r)};Xe.unmountComponentAtNode=function(e){if(!Vs(e))throw Error(C(40));return e._reactRootContainer?(qr(function(){Hs(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};Xe.unstable_batchedUpdates=zc;Xe.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Vs(r))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Hs(e,t,r,!1,n)};Xe.version="18.3.1-next-f1338f8080-20240426";function Nh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nh)}catch(e){console.error(e)}}Nh(),Nf.exports=Xe;var a1=Nf.exports,Ph,ju=a1;Ph=ju.createRoot,ju.hydrateRoot;const l1="modulepreload",c1=function(e){return"/"+e},Iu={},en=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(r.map(l=>{if(l=c1(l),l in Iu)return;Iu[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":l1,d||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((p,x)=>{f.addEventListener("load",p),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})},ut="https://cloudvault.co.in/api/v1",be={name:"CloudVault",logo:"CV",logoImage:"/cloudvault-logo.svg",logoVideo:"/calovaultlogo.mp4"};async function d1(){var r;const e=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");if(!e)return null;const t=localStorage.getItem("cv_refreshToken")?localStorage:sessionStorage;try{const n=await fetch(`${ut}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:e})});if(!n.ok)return null;const i=await n.json(),o=((r=i.data)==null?void 0:r.accessToken)||i.accessToken;return o?(t.setItem("cv_token",o),window.dispatchEvent(new CustomEvent("cv-token-refreshed",{detail:{token:o}})),o):null}catch{return null}}function Vc(e){return new Error(`Cannot reach the server at ${ut}${e}. Make sure the backend is running (npm start in project root).`)}const it=async(e,t={},r,n=!1)=>{const i={...t.headers||{}};r&&(i.Authorization=`Bearer ${r}`),t.body instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json");let o;try{o=await fetch(`${ut}${e}`,{...t,headers:i})}catch{throw Vc(e)}if(o.status===401&&r&&!n){const l=await d1();if(l)return it(e,t,l,!0);throw new Error("Session expired. Please log in again.")}if(!o.ok){const l=await o.json().catch(()=>({error:"Unknown error"})),d=l.message||l.error||"",u=d.toLowerCase().includes("token")?"Something went wrong. Please try again.":d||`Request failed (${o.status})`;throw new Error(u)}if(!(o.headers.get("content-type")||"").includes("application/json"))return o;const c=await o.json();return c.success?c.data:c},Ar=(e,t)=>Array.isArray(e)?e:(e==null?void 0:e[t])||[];async function Hc(e,t,{onProgress:r,disposition:n="download"}={}){const i=n==="preview"?`/files/${e}/preview`:`/files/${e}/download`;let o;try{o=await fetch(`${ut}${i}`,{headers:{Authorization:`Bearer ${t}`}})}catch{throw Vc(i)}if(!o.ok){const c=await o.json().catch(()=>({error:"Download failed"}));throw new Error(c.error||c.message||"Download failed")}const a=Number(o.headers.get("content-length"))||0;return u1(o,a,r)}async function u1(e,t,r){if(!e.body||!t){const a=await e.blob();return r==null||r(100),a}const n=e.body.getReader(),i=[];let o=0;for(;;){const{done:a,value:c}=await n.read();if(a)break;i.push(c),o+=c.length,r&&t>0&&r(Math.min(99,Math.round(o/t*100)))}return r==null||r(100),new Blob(i,{type:e.headers.get("content-type")||"application/octet-stream"})}function Ah(e,t){const r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=t,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(r)}function f1(e,t,r,n){return new Promise((i,o)=>{const a=new XMLHttpRequest;a.open("POST",`${ut}${e}`),a.setRequestHeader("Authorization",`Bearer ${r}`),a.upload.onprogress=c=>{c.lengthComputable&&n&&n(Math.round(c.loaded/c.total*100))},a.onload=()=>{try{const c=JSON.parse(a.responseText);a.status>=200&&a.status<300?i(c.success?c.data:c):o(new Error(c.message||c.error||"Upload failed"))}catch{a.status>=200&&a.status<300?i({}):o(new Error("Upload failed"))}},a.onerror=()=>o(Vc(e)),a.send(t)})}const Ae=e=>{if(e===0)return"0 B";const t=1024,r=["B","KB","MB","GB"],n=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**n).toFixed(1)} ${r[n]}`},qi=e=>{const t=Math.floor((Date.now()-new Date(e))/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`},Ji=(e="")=>e.startsWith("image/")?"🖼️":e==="application/pdf"?"📄":e.startsWith("video/")?"🎬":e.startsWith("audio/")?"🎵":e.includes("zip")||e.includes("archive")?"🗜️":e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")?"📝":"📁",p1=["image/","video/","audio/"],h1=new Set(["application/pdf","text/plain","text/markdown","application/json"]),Gc=(e="")=>{const t=(e||"").toLowerCase();return h1.has(t)?!0:p1.some(r=>t.startsWith(r))},g1=(e="")=>{const t=(e||"").toLowerCase();return t.startsWith("image/")?"image":t==="application/pdf"?"pdf":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("text/")||t==="application/json"?"text":null},Tu=[{key:"all",label:"All",icon:"📋",test:()=>!0},{key:"images",label:"Images",icon:"🖼️",test:e=>e.startsWith("image/")},{key:"documents",label:"Docs",icon:"📄",test:e=>e.includes("pdf")||e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")},{key:"videos",label:"Videos",icon:"🎬",test:e=>e.startsWith("video/")},{key:"audio",label:"Audio",icon:"🎵",test:e=>e.startsWith("audio/")},{key:"archives",label:"Archives",icon:"🗜️",test:e=>e.includes("zip")||e.includes("archive")||e.includes("tar")||e.includes("rar")}],Vr=`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --mega-red: #d90007;
    --mega-red-hover: #ff1a1a;
    --mega-red-glow: rgba(217, 0, 7, 0.35);
    --bg-primary: #000000;
    --bg-secondary: #0a0a0a;
    --bg-card: #141414;
    --bg-card-hover: #1e1e1e;
    --bg-sidebar: #0d0d0d;
    --surface-raised: #1a1a1a;
    --border: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(217, 0, 7, 0.45);
    --text: #ffffff;
    --text-secondary: #b3b3b3;
    --text-muted: #737373;
    --accent: #d90007;
    --accent-strong: #ffffff;
    --accent-blue: #3b82f6;
    --accent-amber: #fbbf24;
    --danger: #ef4444;
    --gradient: linear-gradient(135deg, #d90007 0%, #ff3333 100%);
    --gradient-soft: linear-gradient(180deg, rgba(217,0,7,.08), rgba(0,0,0,0));
    --radius: 10px;
    --radius-lg: 16px;
    --shadow: 0 24px 64px rgba(0, 0, 0, 0.55);
    --glow: 0 12px 40px rgba(217, 0, 7, 0.2);
    --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  [data-theme="dark"] {
    --bg-primary: #000000;
    --bg-secondary: #0a0a0a;
    --bg-card: #141414;
    --bg-card-hover: #1e1e1e;
    --bg-sidebar: #0d0d0d;
    --surface-raised: #1a1a1a;
    --border: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(217, 0, 7, 0.45);
    --text: #ffffff;
    --text-secondary: #b3b3b3;
    --text-muted: #737373;
    --shadow: 0 24px 64px rgba(0,0,0,.55);
  }

  [data-theme="light"] {
    --bg-primary: #f8fafc;
    --bg-secondary: #ffffff;
    --bg-card: #ffffff;
    --bg-card-hover: #f8fafc;
    --bg-sidebar: rgba(255, 255, 255, 0.96);
    --border: rgba(15, 23, 42, 0.1);
    --border-hover: rgba(15, 23, 42, 0.22);
    --text: #0f172a;
    --text-secondary: #334155;
    --text-muted: #64748b;
  }

  [data-theme="midnight"] {
    --bg-primary: #07111f;
    --bg-secondary: #0d1b2f;
    --bg-card: rgba(15, 30, 52, 0.9);
    --bg-card-hover: rgba(24, 45, 76, 0.95);
    --bg-sidebar: rgba(6, 17, 32, 0.96);
    --border: rgba(125, 169, 217, 0.16);
    --border-hover: rgba(96, 165, 250, 0.5);
    --text: #f8fbff;
    --text-secondary: #c8d7ea;
    --text-muted: #86a3c3;
    --accent: #5eead4;
    --accent-blue: #60a5fa;
    --accent-strong: #f472b6;
    --gradient: linear-gradient(135deg, #00b74f 0%, #00d4a1 55%, #60a5fa 100%);
    --gradient-soft: linear-gradient(135deg, rgba(0,183,79,.18), rgba(96,165,250,.14));
  }

  [data-theme="purple"] {
    --bg-primary: #110f1a;
    --bg-secondary: #191528;
    --bg-card: rgba(30, 25, 46, 0.9);
    --bg-card-hover: rgba(43, 35, 65, 0.96);
    --bg-sidebar: rgba(18, 15, 28, 0.96);
    --border: rgba(196, 181, 253, 0.16);
    --border-hover: rgba(167, 139, 250, 0.5);
    --text: #fbfaff;
    --text-secondary: #ddd6fe;
    --text-muted: #a99bc8;
    --accent: #a78bfa;
    --accent-blue: #67e8f9;
    --accent-strong: #fb7185;
    --gradient: linear-gradient(135deg, #a78bfa 0%, #67e8f9 48%, #fb7185 100%);
    --gradient-soft: linear-gradient(135deg, rgba(167,139,250,.18), rgba(103,232,249,.1));
  }

  body {
    background: var(--bg-primary);
    font-family: var(--font);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }
  @keyframes slideDown { from { opacity:0; transform:translateY(-12px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
  @keyframes scaleIn { from { opacity:0; transform:scale(.95) } to { opacity:1; transform:scale(1) } }
  @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
  @keyframes floatIn { from { opacity:0; transform:translateY(10px) scale(.985) } to { opacity:1; transform:translateY(0) scale(1) } }
  @keyframes softPulse { 0%, 100% { box-shadow: 0 0 0 rgba(217,0,7,0) } 50% { box-shadow: 0 0 40px rgba(217,0,7,.25) } }
  @keyframes glowBorder { 0%, 100% { border-color: rgba(217,0,7,.25) } 50% { border-color: rgba(217,0,7,.6) } }
  @keyframes megaPulse { 0%, 100% { transform: scale(1); opacity: 1 } 50% { transform: scale(1.04); opacity: 0.92 } }
  @keyframes cloudFloat { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
  @keyframes heroVideoDrift { 0%, 100% { transform: translate3d(-50%, -50%, 0) rotate(-2deg) scale(1) } 50% { transform: translate3d(-50%, -56%, 0) rotate(2deg) scale(1.04) } }
  @keyframes orbitRing { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }
  @keyframes progressFill { from { width: 0 } }
  @keyframes cardPop { 0% { transform: scale(1) } 40% { transform: scale(1.03) } 100% { transform: scale(1) } }
  @keyframes navSlideIn { from { opacity: 0; transform: translateX(-8px) } to { opacity: 1; transform: translateX(0) } }
  @keyframes revealUp { from { opacity: 0; transform: translateY(40px) } to { opacity: 1; transform: translateY(0) } }
  @keyframes redBarGrow { from { transform: scaleY(0) } to { transform: scaleY(1) } }

  .glass-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow);
  }

  .btn-primary {
    padding: 12px 22px;
    border-radius: 999px;
    border: none;
    background: #ffffff;
    color: #000000;
    font-family: var(--font);
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(255,255,255,.12);
    transition: var(--transition);
  }

  .btn-primary:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 32px rgba(255,255,255,.18);
  }

  .btn-mega-red {
    padding: 12px 28px;
    border-radius: 999px;
    border: none;
    background: var(--mega-red);
    color: #fff;
    font-family: var(--font);
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    transition: var(--transition);
  }

  .btn-mega-red:hover {
    background: var(--mega-red-hover);
    transform: translateY(-2px);
    box-shadow: var(--glow);
  }

  .btn-secondary {
    padding: 10px 18px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-secondary);
    font-family: var(--font);
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    transition: var(--transition);
  }

  .btn-secondary:hover {
    border-color: rgba(255,255,255,.25);
    color: var(--text);
    background: rgba(255,255,255,.06);
    transform: translateY(-2px);
  }

  .btn-ghost {
    padding: 11px 22px;
    border-radius: 12px;
    border: 1px solid transparent;
    background: transparent;
    color: var(--text-secondary);
    font-family: var(--font);
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: var(--transition);
  }

  .btn-ghost:hover {
    border-color: var(--border-hover);
    color: var(--text);
    background: rgba(255,255,255,.05);
    transform: translateY(-2px);
  }

  .btn-danger {
    width: 100%;
    padding: 10px;
    border-radius: var(--radius);
    border: 1px solid rgba(248,113,113,.2);
    background: rgba(248,113,113,.06);
    color: rgba(248,113,113,.85);
    cursor: pointer;
    font-family: var(--font);
    font-weight: 600;
    font-size: 13px;
    transition: var(--transition);
  }

  .btn-danger:hover {
    background: rgba(248,113,113,.14);
    border-color: rgba(248,113,113,.35);
    color: #fca5a5;
  }

  .icon-btn {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-secondary);
    cursor: pointer;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    flex-shrink: 0;
  }

  .icon-btn:hover {
    border-color: var(--border-hover);
    color: var(--text);
    background: rgba(56,189,248,.1);
    transform: rotate(8deg) scale(1.05);
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 14px;
    border-radius: 8px;
    border: 1px solid transparent;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    font-family: var(--font);
    font-weight: 600;
    font-size: 14px;
    text-align: left;
    width: 100%;
    transition: var(--transition);
    position: relative;
    animation: navSlideIn .35s ease both;
  }

  .nav-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scaleY(0);
    width: 3px;
    height: 60%;
    background: var(--mega-red);
    border-radius: 0 2px 2px 0;
    transition: transform .25s cubic-bezier(.4,0,.2,1);
  }

  .nav-item:hover {
    background: rgba(255,255,255,.05);
    color: var(--text);
    transform: translateX(2px);
  }

  .nav-item.active {
    background: rgba(255,255,255,.08);
    color: var(--text);
    box-shadow: none;
  }

  .nav-item.active::before {
    transform: translateY(-50%) scaleY(1);
    animation: redBarGrow .3s ease;
  }

  .nav-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(148,163,184,.12);
    color: var(--text-muted);
    flex-shrink: 0;
    transition: var(--transition);
  }

  .nav-icon.active {
    background: rgba(217,0,7,.18);
    color: var(--mega-red);
  }

  .nav-item:hover .nav-icon:not(.active) {
    background: rgba(255,255,255,.08);
    color: var(--text-secondary);
  }

  .stat-mini {
    background: var(--surface-raised);
    border-radius: var(--radius);
    padding: 12px;
    border: 1px solid var(--border);
    transition: var(--transition);
  }

  .stat-mini:hover {
    border-color: var(--border-hover);
    transform: translateY(-2px);
    box-shadow: var(--glow);
  }

  .view-toggle {
    display: flex;
    background: var(--bg-card);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    overflow: hidden;
    flex-shrink: 0;
  }

  .view-toggle-btn {
    padding: 10px 14px;
    border: none;
    cursor: pointer;
    background: transparent;
    color: var(--text-muted);
    font-size: 16px;
    transition: var(--transition);
  }

  .view-toggle-btn.active {
    background: rgba(45,212,191,.16);
    color: var(--accent);
  }

  .view-toggle-btn:hover:not(.active) {
    background: rgba(255,255,255,.05);
    color: var(--text-secondary);
  }

  .filter-chip {
    padding: 7px 16px;
    border-radius: 20px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    font-family: var(--font);
    font-weight: 600;
    font-size: 12px;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
  }

  .filter-chip:hover {
    border-color: var(--border-hover);
    color: var(--text-secondary);
    transform: translateY(-1px);
  }

  .filter-chip.active {
    border-color: rgba(0,183,79,.28);
    background: rgba(0,183,79,.14);
    color: var(--accent);
    box-shadow: none;
  }

  .folder-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 14px 16px;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .folder-card:hover {
    background: var(--bg-card-hover);
    border-color: rgba(0,183,79,.35);
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0,183,79,.08);
  }

  .file-list-card {
    display: flex;
    align-items: center;
    gap: 16px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 16px 18px;
    transition: var(--transition);
    cursor: default;
  }

  .file-list-card:hover {
    background: var(--bg-card-hover);
    border-color: var(--border-hover);
    box-shadow: var(--glow);
    transform: translateY(-2px);
  }

  .file-list-actions {
    flex-shrink: 0;
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .quick-action-btn {
    padding: 9px 12px;
    min-height: 38px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: rgba(255,255,255,.06);
    color: var(--text-secondary);
    cursor: pointer;
    font-family: var(--font);
    font-size: 12px;
    font-weight: 800;
    transition: var(--transition);
  }

  .quick-action-btn:hover:not(:disabled) {
    border-color: var(--border-hover);
    background: rgba(56,189,248,.12);
    transform: translateY(-1px);
  }

  .quick-action-btn.accent { color: var(--accent); }
  .quick-action-btn.blue { color: var(--accent-blue); }
  .quick-action-btn:disabled { opacity: 0.45; cursor: not-allowed; }

  .drop-zone {
    border: 2px dashed var(--border);
    border-radius: var(--radius-lg);
    padding: 28px 22px;
    margin-bottom: 28px;
    text-align: center;
    color: var(--text-muted);
    font-size: 14;
    transition: var(--transition);
    background: var(--gradient-soft);
    font-weight: 500;
  }

  .drop-zone:hover:not(.drag-over) {
    border-color: var(--border-hover);
    background: rgba(56,189,248,.06);
  }

  .load-more-btn {
    margin-top: 20px;
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-secondary);
    font-weight: 600;
    cursor: pointer;
    font-family: var(--font);
    transition: var(--transition);
  }

  .load-more-btn:hover {
    border-color: var(--border-hover);
    color: var(--text);
    background: rgba(56,189,248,.08);
  }

  .breadcrumb-link {
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
  }

  .breadcrumb-link:hover {
    color: var(--accent) !important;
  }

  .select-field {
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text);
    font-family: var(--font);
    font-size: 13px;
    transition: var(--transition);
    cursor: pointer;
  }

  .select-field:hover {
    border-color: var(--border-hover);
  }

  .download-panel {
    position: fixed;
    right: 18px;
    bottom: 18px;
    z-index: 1200;
    width: min(360px, calc(100vw - 32px));
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: 16px;
    box-shadow: var(--shadow);
    overflow: hidden;
    animation: slideUp .2s ease;
  }

  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 2000;
    background: rgba(0,0,0,.72);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(8px);
    animation: fadeIn .2s ease;
  }

  .modal-card {
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 32px;
    max-width: 420px;
    width: 90%;
    animation: scaleIn .22s cubic-bezier(.4,0,.2,1);
    box-shadow: var(--shadow);
  }

  .auth-screen {
    min-height: 100vh;
    background:
      radial-gradient(circle at 86% 12%, rgba(187,247,208,.75), transparent 28%),
      radial-gradient(circle at 12% 26%, rgba(219,234,254,.75), transparent 26%),
      var(--bg-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font);
    padding: 24px 16px;
  }

  .auth-card {
    width: min(400px, calc(100vw - 28px));
    padding: 34px 30px;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 24px;
    box-shadow: var(--shadow);
    animation: floatIn .35s ease;
    backdrop-filter: blur(12px);
  }

  .auth-tab {
    flex: 1;
    padding: 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background: transparent;
    color: var(--text-muted);
    font-weight: 700;
    font-size: 13px;
    transition: var(--transition);
    font-family: var(--font);
  }

  .auth-tab.active {
    background: #111827;
    color: #fff;
  }

  .auth-tab:hover:not(.active) {
    color: var(--text);
    background: #f9fafb;
  }

  .input-field {
    width: 100%;
    padding: 11px 14px;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--text);
    font-family: var(--font);
    font-size: 14px;
    transition: var(--transition);
  }

  .input-field:hover {
    border-color: var(--border-hover);
  }

  .landing-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 40px;
    border-bottom: 1px solid rgba(255,255,255,.06);
    position: fixed;
    width: 100%;
    top: 0;
    background: rgba(0,0,0,.85);
    backdrop-filter: blur(20px);
    z-index: 50;
    gap: 16px;
    flex-wrap: wrap;
    transition: background .3s ease, border-color .3s ease;
  }

  .landing-nav {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .marketing-shell {
    min-height: 100vh;
    background: #000000;
    color: var(--text);
    font-family: var(--font);
    overflow-x: hidden;
  }

  .brand-lockup {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border: 0;
    background: transparent;
    color: #ffffff;
    font: 800 22px/1 var(--font);
    cursor: pointer;
    transition: var(--transition);
  }

  .brand-lockup:hover {
    opacity: 0.85;
  }

  .brand-mark {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--mega-red);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0;
    box-shadow: 0 8px 24px var(--mega-red-glow);
    flex: 0 0 auto;
    animation: softPulse 3s ease infinite;
    overflow: hidden;
  }

  .brand-mark img,
  .auth-mega-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .brand-mark.small {
    width: 28px;
    height: 28px;
    border-radius: 9px;
    font-size: 9px;
  }

  .landing-links {
    display: flex;
    align-items: center;
    gap: 34px;
  }

  .landing-links a {
    color: #b3b3b3;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
  }

  .landing-links a:hover {
    color: #ffffff;
  }

  .hero-section {
    position: relative;
    overflow: hidden;
    padding: 160px 24px 100px;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
  }

  .hero-copy {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 999px;
    padding: 10px 18px;
    color: #b3b3b3;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 32px;
    animation: slideDown .6s ease both;
  }

  .eyebrow span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--mega-red);
    animation: softPulse 2s ease infinite;
  }

  .hero-copy h1 {
    color: #ffffff;
    font-size: clamp(40px, 6vw, 72px);
    line-height: 1.08;
    letter-spacing: -0.03em;
    font-weight: 800;
    margin-bottom: 28px;
    animation: revealUp .7s ease both;
  }

  .hero-copy h1 span {
    color: var(--mega-red);
    display: block;
  }

  .hero-copy p {
    max-width: 680px;
    margin: 0 auto 40px;
    color: #b3b3b3;
    font-size: clamp(17px, 2vw, 22px);
    line-height: 1.6;
    animation: revealUp .7s .1s ease both;
  }

  .hero-actions {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 18px;
  }

  .btn-hero-dark {
    background: #ffffff;
    color: #000000;
    min-height: 56px;
    padding: 0 32px;
    border-radius: 999px;
    font-size: 16px;
    box-shadow: 0 8px 32px rgba(255,255,255,.15);
  }

  .btn-hero-light {
    min-height: 56px;
    padding: 0 32px;
    border-radius: 999px;
    color: #ffffff;
    font-size: 16px;
    border: 1px solid rgba(255,255,255,.2);
    background: transparent;
  }

  .hero-note {
    color: #737373;
    font-size: 14px;
    font-weight: 500;
  }

  .hero-glow {
    position: absolute;
    border-radius: 999px;
    filter: blur(80px);
    pointer-events: none;
  }

  .hero-glow-green {
    width: 500px;
    height: 500px;
    right: -200px;
    top: -100px;
    background: rgba(217,0,7,.12);
    animation: cloudFloat 6s ease infinite;
  }

  .hero-glow-blue {
    width: 400px;
    height: 400px;
    left: -150px;
    top: 200px;
    background: rgba(217,0,7,.06);
    animation: cloudFloat 8s ease infinite reverse;
  }

  .dashboard-preview {
    position: relative;
    z-index: 2;
    margin: 74px auto 0;
    max-width: 980px;
  }

  .hero-video-orbit {
    position: absolute;
    left: 50%;
    top: 46%;
    width: min(520px, 82vw);
    aspect-ratio: 16 / 9;
    transform: translate(-50%, -50%);
    border-radius: 28px;
    overflow: hidden;
    opacity: .48;
    filter: saturate(1.08);
    box-shadow: 0 42px 110px rgba(217,0,7,.32);
    animation: heroVideoDrift 7s ease-in-out infinite;
    pointer-events: none;
  }

  .hero-video-orbit::before {
    content: "";
    position: absolute;
    inset: -22%;
    border: 1px solid rgba(255,255,255,.22);
    border-left-color: rgba(217,0,7,.58);
    border-radius: 45%;
    animation: orbitRing 18s linear infinite;
    z-index: 1;
  }

  .hero-video-orbit video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .preview-panel {
    background: #0a0a0a;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 20px;
    box-shadow: 0 40px 90px rgba(0,0,0,.72), 0 0 0 1px rgba(217,0,7,.08);
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: floatIn .8s .2s ease both;
    position: relative;
    z-index: 2;
    backdrop-filter: blur(18px);
  }

  .preview-top-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(255,255,255,.06);
    background: #0d0d0d;
  }

  .preview-search {
    flex: 1;
    background: #1a1a1a;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 999px;
    padding: 12px 20px 12px 44px;
    color: #737373;
    font-size: 14px;
    position: relative;
  }

  .preview-body {
    display: flex;
    min-height: 360px;
  }

  .preview-sidebar {
    background: #0d0d0d;
    border-right: 1px solid rgba(255,255,255,.06);
    padding: 16px 12px;
    width: 220px;
    flex-shrink: 0;
  }

  .preview-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #ffffff;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .preview-nav-item {
    padding: 10px 12px;
    border-radius: 8px;
    color: #b3b3b3;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 2px;
    transition: var(--transition);
    position: relative;
  }

  .preview-nav-item.active {
    background: rgba(255,255,255,.08);
    color: #ffffff;
  }

  .preview-nav-item.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 50%;
    background: var(--mega-red);
    border-radius: 0 2px 2px 0;
  }

  .preview-usage {
    margin-top: auto;
    padding-top: 20px;
    color: #737373;
    font-size: 11px;
  }

  .preview-usage div:first-child {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
  }

  .preview-bar {
    height: 6px;
    border-radius: 999px;
    background: rgba(255,255,255,.1);
    overflow: hidden;
  }

  .preview-bar span {
    display: block;
    width: 45%;
    height: 100%;
    background: var(--mega-red);
    border-radius: inherit;
    animation: progressFill 1.5s ease both;
  }

  .preview-files {
    background: #000000;
    flex: 1;
    padding: 20px;
  }

  .preview-topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 20px;
  }

  .preview-topline h3 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
  }

  .preview-topline button {
    border: 0;
    border-radius: 999px;
    background: #ffffff;
    color: #000;
    padding: 10px 20px;
    font-weight: 700;
    font-size: 13px;
  }

  .preview-file {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 8px;
    transition: var(--transition);
    animation: fadeIn .5s ease both;
  }

  .preview-file:hover {
    background: rgba(255,255,255,.05);
    transform: translateX(4px);
  }

  .preview-file-icon {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(217,0,7,.2), rgba(217,0,7,.05));
    flex-shrink: 0;
  }

  .preview-file h4 {
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  .preview-file p {
    color: #737373;
    font-size: 12px;
  }

  .mega-section {
    padding: 100px 24px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .mega-section-dark {
    background: #0a0a0a;
    max-width: none;
    padding: 100px 24px;
  }

  .mega-section-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .mega-product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 48px;
  }

  .mega-product-card {
    background: #141414;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 16px;
    padding: 32px 28px;
    transition: var(--transition);
    cursor: default;
  }

  .mega-product-card:hover {
    border-color: rgba(217,0,7,.3);
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0,0,0,.4);
  }

  .mega-product-card h3 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin: 16px 0 10px;
  }

  .mega-product-card p {
    color: #b3b3b3;
    font-size: 15px;
    line-height: 1.6;
  }

  .mega-product-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(217,0,7,.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
  }

  .mega-security-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .mega-security-block h2 {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 20px;
  }

  .mega-security-block p {
    color: #b3b3b3;
    font-size: 17px;
    line-height: 1.7;
  }

  .mega-shield {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(217,0,7,.2), transparent 70%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    margin: 0 auto;
    animation: megaPulse 4s ease infinite;
  }

  .scroll-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity .7s ease, transform .7s cubic-bezier(.4,0,.2,1);
  }

  .scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .scroll-reveal.delay-1 { transition-delay: .1s; }
  .scroll-reveal.delay-2 { transition-delay: .2s; }
  .scroll-reveal.delay-3 { transition-delay: .3s; }
  .scroll-reveal.delay-4 { transition-delay: .4s; }

  .mega-file-card {
    border-radius: 12px;
    overflow: hidden;
    transition: var(--transition);
    animation: fadeIn .4s ease both;
  }

  .mega-file-card:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: var(--glow);
    border-color: rgba(217,0,7,.3) !important;
  }

  .mega-top-bar {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 24px;
    border-bottom: 1px solid var(--border);
    background: rgba(0,0,0,.92);
    backdrop-filter: blur(16px);
    position: sticky;
    top: 0;
    z-index: 95;
  }

  .mega-search-bar {
    flex: 1;
    max-width: 640px;
    position: relative;
  }

  .mega-search-bar input {
    width: 100%;
    padding: 12px 20px 12px 44px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text);
    font-size: 14px;
    transition: var(--transition);
  }

  .mega-search-bar input:focus {
    border-color: rgba(217,0,7,.4);
    box-shadow: 0 0 0 3px rgba(217,0,7,.12);
  }

  .mega-search-bar .search-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    font-size: 16px;
  }

  .mega-drive-header {
    padding: 24px 0 20px;
    animation: slideDown .4s ease;
  }

  .mega-drive-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .mega-upload-btn {
    background: #ffffff !important;
    color: #000000 !important;
    border-radius: 999px !important;
    padding: 12px 24px !important;
    font-weight: 700 !important;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .mega-folder-btn {
    background: transparent !important;
    color: #ffffff !important;
    border: 1px solid rgba(255,255,255,.2) !important;
    border-radius: 999px !important;
    padding: 12px 24px !important;
  }

  .transfer-panel {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 1200;
    width: min(380px, calc(100vw - 40px));
    background: rgba(20,20,20,.95);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 16px;
    box-shadow: 0 24px 64px rgba(0,0,0,.5);
    overflow: hidden;
    animation: slideUp .35s cubic-bezier(.4,0,.2,1);
    backdrop-filter: blur(12px);
  }

  .auth-splash {
    min-height: 100vh;
    background: #212121;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .auth-cloud-logo {
    width: 120px;
    height: 120px;
    position: relative;
    animation: cloudFloat 4s ease infinite;
  }

  .auth-cloud-bg {
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,.06);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    filter: blur(1px);
  }

  .auth-mega-mark {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .auth-mega-circle {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--mega-red);
    color: #fff;
    font-weight: 900;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 32px var(--mega-red-glow);
    animation: softPulse 3s ease infinite;
    overflow: hidden;
  }

  .logo-strip {
    text-align: center;
    color: #737373;
    border-top: 1px solid rgba(255,255,255,.06);
    border-bottom: 1px solid rgba(255,255,255,.06);
    background: #0a0a0a;
  }

  .logo-strip div {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    gap: 42px;
    flex-wrap: wrap;
    color: #525252;
    font-weight: 800;
    font-size: 18px;
  }

  .split-section {
    display: grid;
    grid-template-columns: minmax(0, .9fr) minmax(0, 1fr);
    gap: 56px;
    align-items: end;
  }

  .logo-strip,
  .content-section,
  .stats-band {
    max-width: 1120px;
    margin: 0 auto;
    padding: 64px 24px;
  }

  .section-kicker {
    color: var(--mega-red);
    font-weight: 800;
    font-size: 13px;
    margin-bottom: 14px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .content-section h2,
  .section-center h2 {
    color: #ffffff;
    font-size: clamp(32px, 4vw, 48px);
    line-height: 1.12;
    font-weight: 800;
  }

  .content-section > p,
  .split-section > p {
    color: #b3b3b3;
    font-size: 18px;
    line-height: 1.7;
  }

  .feature-grid,
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }

  .feature-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 20px;
    padding: 28px;
    transition: var(--transition);
    box-shadow: 0 1px 3px rgba(15,23,42,.06);
  }

  .feature-card:hover {
    border-color: #bbf7d0;
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(15,23,42,.08);
  }

  .feature-dot {
    width: 42px;
    height: 42px;
    border-radius: 14px;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    margin-bottom: 18px;
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
  }

  .feature-card h3 {
    color: #111827;
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 10px;
  }

  .feature-card p {
    color: #64748b;
    font-size: 15px;
    line-height: 1.6;
  }

  .plan-card {
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 16px;
    padding: 30px;
    transition: var(--transition);
    background: #141414;
    color: #fff;
  }

  .plan-card:hover {
    transform: translateY(-6px);
    border-color: rgba(217,0,7,.3);
    box-shadow: var(--glow);
  }

  .plan-card.highlight {
    background: var(--mega-red);
    border-color: var(--mega-red);
    color: #fff;
    transform: scale(1.02);
  }

  .plan-card.highlight p,
  .plan-card.highlight .plan-price span {
    color: #d1d5db;
  }

  .plan-price {
    color: inherit;
    font-size: 38px;
    font-weight: 900;
    margin: 16px 0 8px;
  }

  .plan-price span {
    color: #64748b;
    font-size: 14px;
    font-weight: 600;
    margin-left: 4px;
  }

  .pricing-section .section-center {
    text-align: center;
    margin-bottom: 32px;
  }

  .stats-band {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .stats-band .stat-mini {
    text-align: center;
    padding: 28px;
  }

  .stats-band .stat-mini strong {
    display: block;
    color: #111827;
    font-size: 34px;
    font-weight: 900;
    margin-bottom: 8px;
  }

  .stats-band .stat-mini span {
    color: #64748b;
    font-weight: 600;
  }

  .plan-card.highlight:hover {
    transform: scale(1.02) translateY(-4px);
  }

  .testimonial-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 24px;
    margin: 0;
    transition: var(--transition);
  }

  .testimonial-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-3px);
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .testimonial-quote {
    color: #374151;
    font-size: 16px;
    line-height: 1.65;
    margin-bottom: 20px;
  }

  .testimonial-card footer {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .testimonial-card footer strong {
    color: #111827;
    font-size: 14px;
  }

  .testimonial-card footer span {
    color: #64748b;
    font-size: 13px;
  }

  .section-subtitle {
    color: #64748b;
    font-size: 17px;
    margin-top: 12px;
  }

  .plan-badge {
    display: inline-block;
    background: rgba(34,197,94,.2);
    color: #86efac;
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .06em;
    padding: 4px 10px;
    border-radius: 999px;
    margin-bottom: 12px;
  }

  .plan-features {
    list-style: none;
    margin: 16px 0 24px;
    padding: 0;
  }

  .plan-features li {
    color: inherit;
    font-size: 14px;
    padding: 6px 0;
    padding-left: 20px;
    position: relative;
  }

  .plan-features li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #22c55e;
    font-weight: 800;
  }

  .plan-card.highlight .plan-features li::before {
    color: #86efac;
  }

  .faq-list {
    max-width: 720px;
    margin: 0 auto;
  }

  .faq-item {
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 12px;
    margin-bottom: 10px;
    background: #141414;
    overflow: hidden;
    transition: var(--transition);
  }

  .faq-item:hover {
    border-color: rgba(217,0,7,.25);
  }

  .faq-item summary {
    padding: 18px 22px;
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .faq-item summary::-webkit-details-marker { display: none; }

  .faq-item summary::after {
    content: "+";
    font-size: 20px;
    color: var(--mega-red);
    font-weight: 400;
    transition: transform .2s ease;
  }

  .faq-item[open] summary::after {
    transform: rotate(45deg);
  }

  .faq-item p {
    padding: 0 22px 18px;
    color: #b3b3b3;
    font-size: 15px;
    line-height: 1.65;
  }

  .cta-band {
    max-width: 900px;
    margin: 0 auto 80px;
    padding: 72px 40px;
    text-align: center;
    background: #141414;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 20px;
    color: #fff;
  }

  .cta-band h2 {
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 800;
    margin-bottom: 12px;
  }

  .cta-band p {
    color: #b3b3b3;
    font-size: 17px;
    margin-bottom: 28px;
  }

  .landing-footer {
    background: #0a0a0a;
    color: #737373;
    padding: 64px 24px 32px;
    border-top: 1px solid rgba(255,255,255,.06);
  }

  .footer-grid {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    gap: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255,255,255,.08);
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .footer-brand strong {
    color: #fff;
    font-size: 20px;
  }

  .footer-brand p {
    font-size: 14px;
    line-height: 1.6;
    max-width: 260px;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .footer-links h4 {
    color: #fff;
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .06em;
    margin-bottom: 6px;
  }

  .footer-links a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 14px;
    transition: var(--transition);
  }

  .footer-links a:hover {
    color: #fff;
  }

  .footer-bottom {
    max-width: 1120px;
    margin: 24px auto 0;
    font-size: 13px;
    text-align: center;
  }

  .animate-fade-up {
    animation: revealUp .7s ease both;
  }

  .animate-fade-up.delay-1 {
    animation-delay: .15s;
  }

  .animate-fade-up.delay-2 {
    animation-delay: .3s;
  }

  .share-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 2000;
    background: rgba(1,6,12,.78);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(14px);
    padding: 18px;
    animation: fadeIn .2s ease;
  }

  .share-modal-panel {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 20px;
    width: min(720px, 96vw);
    max-height: 92vh;
    overflow: auto;
    box-shadow: var(--shadow);
    animation: scaleIn .2s ease;
  }

  .share-modal-hero {
    padding: 28px 30px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    gap: 16px;
    background: var(--gradient-soft);
  }

  .share-modal-body {
    padding: 24px 30px 30px;
  }

  .share-modal-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 14px;
  }

  .share-segmented {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    background: var(--bg-card);
  }

  .share-segment-btn {
    border: none;
    padding: 12px 14px;
    cursor: pointer;
    font-weight: 700;
    font-family: var(--font);
    transition: var(--transition);
    font-size: 14px;
    background: transparent;
    color: var(--text-secondary);
  }

  .share-segment-btn.active {
    background: var(--accent);
    color: #fff;
  }

  .share-summary-box {
    margin-top: 8px;
    padding: 16px;
    border: 1px solid rgba(56,189,248,.25);
    border-radius: 14px;
    background: rgba(56,189,248,.08);
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: var(--text-secondary);
    font-size: 14px;
  }

  .share-result-box {
    margin-top: 16px;
    padding: 16px;
    background: var(--surface-raised);
    border-radius: 14px;
    border: 1px solid var(--border);
  }

  .share-modal-footer {
    display: flex;
    gap: 10px;
    margin-top: 24px;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  .dashboard-stat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 14px;
    margin-bottom: 28px;
  }

  .dashboard-stat-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 20px;
    transition: var(--transition);
  }

  .dashboard-stat-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-2px);
    box-shadow: var(--glow);
  }

  .dashboard-stat-card .label {
    font-size: 12px;
    font-weight: 700;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: .04em;
    margin-bottom: 8px;
  }

  .dashboard-stat-card .value {
    font-size: 24px;
    font-weight: 900;
    color: var(--text);
  }

  .hero-visual {
    height: 320px;
    border-radius: 24px;
    background: var(--gradient-soft);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 120px;
    animation: scaleIn .4s ease, softPulse 4s ease infinite;
  }

  .page-back-btn {
    background: none;
    border: none;
    color: var(--accent-blue);
    cursor: pointer;
    font-weight: 600;
    margin-bottom: 12px;
    font-family: var(--font);
    transition: var(--transition);
    padding: 4px 0;
  }

  .page-back-btn:hover {
    color: var(--accent);
    transform: translateX(-3px);
  }

  input::placeholder { color: var(--text-muted); }
  input:focus, select:focus, button:focus-visible {
    outline: none;
    border-color: var(--accent-blue) !important;
    box-shadow: 0 0 0 3px rgba(56,189,248,.16);
  }
  button:hover:not(:disabled) { transform: translateY(-1px); }
  button:active:not(:disabled) { transform: translateY(0) scale(.98); }
  ::-webkit-scrollbar { width: 8px; height: 8px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
  .drag-over {
    border-color: var(--accent) !important;
    background: rgba(45,212,191,.1) !important;
    animation: glowBorder 1.4s ease infinite;
  }

  .app-shell {
    min-height: 100vh;
    background: var(--bg-primary);
    color: var(--text);
    font-family: var(--font);
    background-image: none;
    display: flex;
    flex-direction: column;
  }

  .sidebar {
    transition: transform .35s cubic-bezier(.4,0,.2,1), width .3s ease;
  }

  .mobile-menu-button {
    display: none;
  }

  .drive-toolbar,
  .drive-sortbar,
  .filter-chips,
  .new-folder-row,
  .breadcrumb-row {
    display: flex;
    flex-wrap: wrap;
  }

  .drive-toolbar {
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .drive-sortbar {
    gap: 10px;
    margin-bottom: 16px;
    align-items: center;
  }

  .filter-chips {
    gap: 6px;
    margin-bottom: 20px;
  }

  .file-grid {
    animation: fadeIn .3s ease;
  }

  .file-grid.grid-view {
    display: grid;
  }

  .auth-card, .simple-page-card {
    width: min(400px, calc(100vw - 28px));
  }

  @media (max-width: 768px) {
    .landing-header {
      position: sticky;
      display: grid;
      grid-template-columns: 1fr;
      justify-items: stretch;
      gap: 12px;
      padding: 16px !important;
    }
    .brand-lockup {
      justify-self: start;
      font-size: 22px;
    }
    .landing-links {
      display: none;
    }
    .landing-nav {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .hero-section {
      padding: 56px 16px 42px !important;
    }
    .hero-copy h1 {
      font-size: 44px;
    }
    .hero-copy p {
      font-size: 18px;
    }
    .hero-actions {
      display: grid;
      grid-template-columns: 1fr;
      max-width: 260px;
      margin-left: auto;
      margin-right: auto;
    }
    .dashboard-preview {
      margin-top: 54px;
      max-width: 100%;
      overflow: hidden;
    }
    .preview-panel {
      grid-template-columns: 1fr;
      padding: 16px;
      border-radius: 24px;
    }
    .preview-sidebar {
      width: 100%;
    }
    .split-section,
    .stats-band {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .share-modal-footer {
      flex-direction: column;
    }
    .share-modal-footer button {
      width: 100%;
    }
    .footer-grid {
      grid-template-columns: 1fr;
    }
    .cta-band {
      margin: 0 16px 48px;
      padding: 48px 24px;
      border-radius: 20px;
    }
    .logo-strip div {
      gap: 20px;
    }
    .sidebar { transform: translateX(-100%); }
    .sidebar.open { transform: translateX(0); }
    .main-content {
      margin-left: 0 !important;
      padding: 14px !important;
      padding-top: 12px !important;
    }
    .account-header {
      height: 56px !important;
      padding: 0 12px 0 64px !important;
      justify-content: flex-end !important;
      gap: 8px !important;
    }
    .mobile-menu-button {
      display: flex !important;
      position: fixed;
      top: 10px;
      left: 12px;
      z-index: 220;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      width: 44px;
      height: 44px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--text);
      font-size: 20px;
      box-shadow: var(--shadow);
    }
    .sidebar {
      width: min(86vw, 304px) !important;
      padding: 16px 14px !important;
    }
    .drive-hero {
      padding: 18px !important;
      margin-bottom: 18px !important;
      border-radius: 18px !important;
      gap: 14px !important;
    }
    .drive-hero h1 {
      font-size: 22px !important;
    }
    .drive-hero-actions {
      width: 100%;
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      gap: 10px !important;
    }
    .drive-hero-actions button,
    .drive-toolbar button,
    .new-folder-row button {
      min-height: 44px;
    }
    .drive-toolbar {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 10px;
      align-items: stretch;
    }
    .drive-search {
      grid-column: 1 / -1;
      min-width: 0 !important;
      width: 100%;
    }
    .drive-actions {
      grid-column: 1 / -1;
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      gap: 10px !important;
      width: 100%;
    }
    .drive-actions button,
    .drive-actions .btn-primary,
    .drive-actions .btn-secondary {
      width: 100%;
      justify-content: center;
    }
    .drive-sortbar {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .drive-sortbar select {
      width: 100%;
      min-height: 42px;
    }
    .filter-chips {
      flex-wrap: nowrap;
      overflow-x: auto;
      padding-bottom: 4px;
      margin-right: -14px;
    }
    .filter-chips button {
      white-space: nowrap;
      min-height: 38px;
    }
    .new-folder-row {
      display: grid !important;
      grid-template-columns: 1fr;
    }
    .new-folder-row input {
      width: 100% !important;
    }
    .breadcrumb-row {
      overflow-x: auto;
      white-space: nowrap;
      padding-bottom: 4px;
    }
    .drop-zone {
      display: none;
    }
    .folder-grid,
    .file-grid {
      grid-template-columns: 1fr !important;
    }
    .file-list-card {
      display: grid !important;
      grid-template-columns: 44px minmax(0, 1fr);
      gap: 12px !important;
      padding: 14px !important;
      transform: none !important;
    }
    .file-list-actions {
      grid-column: 1 / -1;
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      width: 100%;
    }
    .file-list-actions button {
      width: 100%;
      min-height: 40px;
    }
    .empty-state {
      padding: 42px 18px !important;
    }
    .toast {
      left: 14px !important;
      right: 14px !important;
      bottom: 14px !important;
      max-width: none !important;
    }
    .stats-row {
      grid-template-columns: 1fr !important;
      gap: 16px !important;
    }
    .auth-screen {
      align-items: flex-start;
      padding-top: 56px;
    }
    .file-grid.grid-view {
      grid-template-columns: 1fr !important;
    }
    .grid-actions {
      grid-template-columns: 1fr 1fr !important;
    }
  }

  @media (max-width: 520px) {
    .drive-sortbar {
      grid-template-columns: 1fr;
    }
    .drive-hero-actions,
    .drive-actions,
    .file-list-actions {
      grid-template-columns: 1fr;
    }
    .landing-header {
      padding: 14px 16px;
    }
    .landing-nav {
      width: 100%;
    }
    .landing-nav button {
      flex: 1;
      min-height: 44px;
    }
    .hero-section {
      padding: 48px 16px !important;
    }
    .section-pad {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`,m1=[{id:"free",name:"Free",price:"₹0",period:"/mo",storage:"5 GB",features:["Standard uploads","Basic sharing","Web preview"]},{id:"pro",name:"Pro",price:"₹749",period:"/mo",storage:"100 GB",features:["Faster uploads","File version history","Priority support"],highlight:!0},{id:"premium",name:"Premium",price:"₹1,599",period:"/mo",storage:"1 TB",features:["Team sharing","Advanced analytics","Custom branding"]},{id:"team",name:"Team",price:"₹3,999",period:"/mo",storage:"2 TB",features:["Shared workspaces","Admin controls","SSO ready"]}],J2=[{id:"50gb",label:"+50 GB",price:"₹399"},{id:"100gb",label:"+100 GB",price:"₹749"},{id:"500gb",label:"+500 GB",price:"₹2,499"},{id:"1tb",label:"+1 TB",price:"₹3,999"}],v1=[{title:"Cloud storage",desc:"10 GB of free storage. Store files of any size, back up folders, sync across devices, and share with full control.",icon:"☁"},{title:"Private sharing",desc:"Share files and folders with anyone — even without an account. Set passwords, expiration dates, and permissions.",icon:"🔗"},{title:"Smart search",desc:"Find anything instantly with filters, tags, and full-text search across your entire drive.",icon:"🔍"},{title:"Enterprise security",desc:"Encrypted storage, activity logs, and role-based access. Your data stays private by default.",icon:"🛡"}],y1=[{title:"Never run out of space",desc:"Start with 10 GB free. Upgrade anytime for more storage when you need it."},{title:"Share with anyone",desc:"Give read-only or full access. Set passwords or create expiring links."},{title:"Be in control",desc:"Your data is in your hands. Manage permissions and access at every level."},{title:"Works everywhere",desc:"Access your files through the web on desktop, tablet, and mobile."}],x1=[{q:"Is CloudVault free to use?",a:"Yes. Every account includes 10 GB of free storage with no credit card required."},{q:"How secure are my files?",a:"Files are encrypted in transit and at rest. Share links support passwords and expiration dates."},{q:"Can I share files with people outside my team?",a:"Absolutely. Create public or protected links with view, download, or edit permissions."},{q:"Can I cancel or change my plan?",a:"Plans are flexible. Upgrade, downgrade, or cancel from billing settings anytime."}],w1=[{label:"Products",href:"#products"},{label:"Security",href:"#security"},{label:"Pricing",href:"#pricing"},{label:"FAQ",href:"#faq"}];function b1(){y.useEffect(()=>{const e=document.querySelectorAll(".scroll-reveal"),t=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&(n.target.classList.add("visible"),t.unobserve(n.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});return e.forEach(r=>t.observe(r)),()=>t.disconnect()},[])}function k1({onGetStarted:e,onLogin:t,onSignUp:r}){const[n,i]=y.useState({filesStored:0,activeUsers:0,storageUsed:0,storageCapacity:0xa0000000000}),o=y.useRef(null);return b1(),y.useEffect(()=>{fetch(`${ut}/public/stats`).then(a=>a.json()).then(a=>{a.success&&a.data&&i(a.data)}).catch(()=>{})},[]),y.useEffect(()=>{const a=()=>{o.current&&(o.current.style.background=window.scrollY>40?"rgba(0,0,0,.95)":"rgba(0,0,0,.85)")};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),s.jsxs("div",{className:"marketing-shell",children:[s.jsx("style",{children:Vr}),s.jsxs("header",{className:"landing-header",ref:o,children:[s.jsxs("button",{type:"button",className:"brand-lockup",onClick:e,"aria-label":`${be.name} home`,children:[s.jsx("span",{className:"brand-mark",children:s.jsx("img",{src:be.logoImage,alt:""})}),s.jsx("span",{children:be.name})]}),s.jsx("nav",{className:"landing-links","aria-label":"Primary",children:w1.map(a=>s.jsx("a",{href:a.href,children:a.label},a.href))}),s.jsxs("div",{className:"landing-nav",children:[s.jsx("button",{type:"button",className:"btn-ghost",onClick:t,children:"Log in"}),s.jsx("button",{type:"button",className:"btn-mega-red",onClick:r,children:"Sign up free"})]})]}),s.jsxs("main",{children:[s.jsxs("section",{className:"hero-section",children:[s.jsx("div",{className:"hero-glow hero-glow-green","aria-hidden":"true"}),s.jsx("div",{className:"hero-glow hero-glow-blue","aria-hidden":"true"}),s.jsxs("div",{className:"hero-copy",children:[s.jsxs("div",{className:"eyebrow",children:[s.jsx("span",{"aria-hidden":"true"})," Secure cloud storage by default"]}),s.jsxs("h1",{children:["Online privacy for everyone —",s.jsx("span",{children:"your intelligent cloud drive."})]}),s.jsxs("p",{children:["Privacy is not an option with ",be.name,"; it's standard. Store, organize, and securely share your files from one place — on any device."]}),s.jsxs("div",{className:"hero-actions animate-fade-up delay-1",children:[s.jsx("button",{type:"button",className:"btn-primary btn-hero-dark",onClick:e,children:"Sign up for 10 GB free"}),s.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"Log in"})]}),s.jsx("div",{className:"hero-note",children:"No credit card required · 10 GB free forever"})]}),s.jsxs("div",{className:"dashboard-preview animate-fade-up delay-2","aria-label":"CloudVault preview",children:[s.jsx("div",{className:"hero-video-orbit","aria-hidden":"true",children:s.jsx("video",{src:be.logoVideo,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata"})}),s.jsxs("div",{className:"preview-panel",children:[s.jsxs("div",{className:"preview-top-bar",children:[s.jsx("span",{className:"brand-mark small",children:s.jsx("img",{src:be.logoImage,alt:""})}),s.jsx("div",{className:"preview-search",children:"🔍 Search Cloud drive"})]}),s.jsxs("div",{className:"preview-body",children:[s.jsxs("aside",{className:"preview-sidebar",children:[s.jsxs("div",{className:"preview-logo",children:[s.jsx("span",{className:"brand-mark small",children:s.jsx("img",{src:be.logoImage,alt:""})}),s.jsx("strong",{children:"Drive"})]}),["Cloud drive","Recent","Starred","Shared","Trash"].map((a,c)=>s.jsx("div",{className:`preview-nav-item${c===0?" active":""}`,children:a},a)),s.jsxs("div",{className:"preview-usage",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Free"}),s.jsx("strong",{children:"4.5 GB / 10 GB"})]}),s.jsx("div",{className:"preview-bar",children:s.jsx("span",{})})]})]}),s.jsxs("section",{className:"preview-files",children:[s.jsxs("div",{className:"preview-topline",children:[s.jsx("h3",{children:"Cloud drive"}),s.jsx("button",{type:"button","aria-hidden":"true",tabIndex:-1,children:"↑ Upload"})]}),[["Project Alpha","1.2 GB · Last edited 2h ago"],["Q3 Financials.xlsx","2.4 MB · Last edited 2h ago"],["Campaign Banner.png","4.1 MB · Last edited 2h ago"]].map(([a,c],l)=>s.jsxs("div",{className:"preview-file",style:{animationDelay:`${l*.1}s`},children:[s.jsx("div",{className:"preview-file-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h4",{children:a}),s.jsx("p",{children:c})]})]},a))]})]})]})]})]}),s.jsx("section",{id:"products",className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsx("p",{className:"section-kicker",children:"All in one place"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 44px)",fontWeight:800,lineHeight:1.15,marginBottom:12},children:"Store and share files. Browse and protect."}),s.jsxs("p",{style:{color:"#b3b3b3",fontSize:17,maxWidth:640,lineHeight:1.6},children:[be.name," combines secure cloud storage with powerful tools to upload, download, and manage your files with confidence."]}),s.jsx("div",{className:"mega-product-grid",children:v1.map((a,c)=>s.jsxs("article",{className:`mega-product-card scroll-reveal delay-${c+1}`,children:[s.jsx("div",{className:"mega-product-icon","aria-hidden":"true",children:a.icon}),s.jsx("h3",{children:a.title}),s.jsx("p",{children:a.desc})]},a.title))})]})}),s.jsx("section",{id:"security",className:"mega-section",children:s.jsxs("div",{className:"mega-security-block scroll-reveal",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Security that's always on"}),s.jsx("h2",{children:"Your data stays encrypted and private."}),s.jsx("p",{children:"We protect your data with encryption in transit and at rest — the highest level of online security. Only you and people you authorize can access your files."}),s.jsx("button",{type:"button",className:"btn-mega-red",style:{marginTop:28},onClick:e,children:"Learn more"})]}),s.jsx("div",{className:"mega-shield","aria-hidden":"true",children:"🔐"})]})}),s.jsx("section",{className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsxs("p",{className:"section-kicker",children:["Why choose ",be.name,"?"]}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800,marginBottom:40},children:"Built for how you work today."}),s.jsx("div",{className:"mega-product-grid",children:y1.map((a,c)=>s.jsxs("article",{className:`mega-product-card scroll-reveal delay-${c+1}`,children:[s.jsx("h3",{children:a.title}),s.jsx("p",{children:a.desc})]},a.title))})]})}),s.jsxs("section",{className:"stats-band scroll-reveal","aria-label":"Platform statistics",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24,textAlign:"center",borderTop:"1px solid rgba(255,255,255,.06)",borderBottom:"1px solid rgba(255,255,255,.06)"},children:[s.jsxs("div",{className:"stat-mini scroll-reveal delay-1",children:[s.jsxs("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:[n.filesStored.toLocaleString(),"+"]}),s.jsx("span",{style:{color:"#737373"},children:"Files stored"})]}),s.jsxs("div",{className:"stat-mini scroll-reveal delay-2",children:[s.jsx("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:Ae(n.storageCapacity)}),s.jsx("span",{style:{color:"#737373"},children:"Storage capacity"})]}),s.jsxs("div",{className:"stat-mini scroll-reveal delay-3",children:[s.jsxs("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:[n.activeUsers.toLocaleString(),"+"]}),s.jsx("span",{style:{color:"#737373"},children:"Active users"})]})]}),s.jsxs("section",{id:"pricing",className:"mega-section",children:[s.jsxs("div",{className:"scroll-reveal section-center",children:[s.jsx("p",{className:"section-kicker",children:"Pricing"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800},children:"Simple plans for everyone."}),s.jsx("p",{className:"section-subtitle",style:{color:"#b3b3b3",marginTop:12},children:"Start free. Scale when you need more."})]}),s.jsx("div",{className:"pricing-grid scroll-reveal delay-1",children:m1.map(a=>s.jsxs("article",{className:`plan-card${a.highlight?" highlight":""}`,children:[a.highlight&&s.jsx("span",{className:"plan-badge",children:"Most popular"}),s.jsx("h3",{children:a.name}),s.jsxs("div",{className:"plan-price",children:[a.price,s.jsx("span",{children:a.period})]}),s.jsxs("p",{children:[a.storage," storage"]}),s.jsx("ul",{className:"plan-features",children:(a.features||[]).slice(0,4).map(c=>s.jsx("li",{children:c},c))}),s.jsxs("button",{type:"button",className:a.highlight?"btn-mega-red":"btn-secondary",onClick:e,children:["Choose ",a.name]})]},a.id))})]}),s.jsx("section",{id:"faq",className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsxs("div",{className:"section-center",children:[s.jsx("p",{className:"section-kicker",children:"FAQ"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800},children:"Questions? We have answers."})]}),s.jsx("div",{className:"faq-list",children:x1.map(a=>s.jsxs("details",{className:"faq-item scroll-reveal",children:[s.jsx("summary",{children:a.q}),s.jsx("p",{children:a.a})]},a.q))})]})}),s.jsxs("section",{className:"cta-band scroll-reveal",children:[s.jsx("h2",{children:"Millions trust secure cloud storage."}),s.jsx("p",{children:"Join users who store and protect their data in the cloud."}),s.jsxs("div",{className:"hero-actions",children:[s.jsx("button",{type:"button",className:"btn-mega-red",onClick:e,children:"Sign up for free"}),s.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"Log in"})]})]})]}),s.jsxs("footer",{className:"landing-footer",children:[s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx("span",{className:"brand-mark",children:s.jsx("img",{src:be.logoImage,alt:""})}),s.jsx("strong",{children:be.name}),s.jsx("p",{children:"Secure cloud storage for individuals and teams."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Product"}),s.jsx("a",{href:"#products",children:"Products"}),s.jsx("a",{href:"#pricing",children:"Pricing"}),s.jsx("a",{href:"#faq",children:"FAQ"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Company"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"About"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Contact"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Legal"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Privacy"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Terms"})]})]}),s.jsx("div",{className:"footer-bottom",children:s.jsxs("span",{children:["© ",new Date().getFullYear()," ",be.name,". All rights reserved."]})})]})]})}const S1=()=>{};var Ru={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===55296&&n+1<e.length&&(e.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++n)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t},_1=function(e){const t=[];let r=0,n=0;for(;r<e.length;){const i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[r++];t[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[r++],a=e[r++],c=e[r++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const o=e[r++],a=e[r++];t[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,c=a?e[i+1]:0,l=i+2<e.length,d=l?e[i+2]:0,u=o>>2,f=(o&3)<<4|c>>4;let p=(c&15)<<2|d>>6,x=d&63;l||(x=64,a||(p=64)),n.push(r[u],r[f],r[p],r[x])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Oh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):_1(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){const o=r[e.charAt(i++)],c=i<e.length?r[e.charAt(i)]:0;++i;const d=i<e.length?r[e.charAt(i)]:64;++i;const f=i<e.length?r[e.charAt(i)]:64;if(++i,o==null||c==null||d==null||f==null)throw new E1;const p=o<<2|c>>4;if(n.push(p),d!==64){const x=c<<4&240|d>>2;if(n.push(x),f!==64){const v=d<<6&192|f;n.push(v)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class E1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C1=function(e){const t=Oh(e);return Lh.encodeByteArray(t,!0)},zh=function(e){return C1(e).replace(/\./g,"")},Mh=function(e){try{return Lh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=()=>j1().__FIREBASE_DEFAULTS__,T1=()=>{if(typeof process>"u"||typeof Ru>"u")return;const e=Ru.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},R1=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Mh(e[1]);return t&&JSON.parse(t)},Yc=()=>{try{return S1()||I1()||T1()||R1()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},N1=e=>{var t,r;return(r=(t=Yc())===null||t===void 0?void 0:t.emulatorHosts)===null||r===void 0?void 0:r[e]},Dh=()=>{var e;return(e=Yc())===null||e===void 0?void 0:e.config},Fh=e=>{var t;return(t=Yc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function A1(e){return(await fetch(e,{credentials:"include"})).ok}const ki={};function O1(){const e={prod:[],emulator:[]};for(const t of Object.keys(ki))ki[t]?e.emulator.push(t):e.prod.push(t);return e}function L1(e){let t=document.getElementById(e),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),r=!0),{created:r,element:t}}let Nu=!1;function z1(e,t){if(typeof window>"u"||typeof document>"u"||!Gs(window.location.host)||ki[e]===t||ki[e]||Nu)return;ki[e]=t;function r(p){return`__firebase__banner__${p}`}const n="__firebase__banner",o=O1().prod.length>0;function a(){const p=document.getElementById(n);p&&p.remove()}function c(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,x){p.setAttribute("width","24"),p.setAttribute("id",x),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function d(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Nu=!0,a()},p}function u(p,x){p.setAttribute("id",x),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=L1(n),x=r("text"),v=document.getElementById(x)||document.createElement("span"),b=r("learnmore"),S=document.getElementById(b)||document.createElement("a"),m=r("preprendIcon"),h=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const g=p.element;c(g),u(S,b);const k=d();l(h,m),g.append(h,v,S,k),document.body.appendChild(g)}o?(v.innerText="Preview backend disconnected.",h.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(h.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function M1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function D1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function F1(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function U1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function B1(){const e=De();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function W1(){try{return typeof indexedDB=="object"}catch{return!1}}function $1(){return new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(r){t(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="FirebaseError";class jr extends Error{constructor(t,r,n){super(r),this.code=t,this.customData=n,this.name=V1,Object.setPrototypeOf(this,jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(t,r,n){this.service=t,this.serviceName=r,this.errors=n}create(t,...r){const n=r[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?H1(o,n):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new jr(i,c,n)}}function H1(e,t){return e.replace(G1,(r,n)=>{const i=t[n];return i!=null?String(i):`<${n}?>`})}const G1=/\{\$([^}]+)}/g;function Y1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Dn(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const i of r){if(!n.includes(i))return!1;const o=e[i],a=t[i];if(Pu(o)&&Pu(a)){if(!Dn(o,a))return!1}else if(o!==a)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function Pu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(i=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function Q1(e,t){const r=new K1(e,t);return r.subscribe.bind(r)}class K1{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(n=>{this.error(n)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,n){let i;if(t===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");q1(t,["next","error","complete"])?i=t:i={next:t,error:r,complete:n},i.next===void 0&&(i.next=Pa),i.error===void 0&&(i.error=Pa),i.complete===void 0&&(i.complete=Pa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q1(e,t){if(typeof e!="object"||e===null)return!1;for(const r of t)if(r in e&&typeof e[r]=="function")return!0;return!1}function Pa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(e){return e&&e._delegate?e._delegate:e}class Fn{constructor(t,r,n){this.name=t,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const n=new P1;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){var r;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(r=t==null?void 0:t.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Z1(t))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(t=Mr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mr){return this.instances.has(t)}getOptions(t=Mr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&a.resolve(i)}return i}onInit(t,r){var n;const i=this.normalizeInstanceIdentifier(r),o=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:X1(t),options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Mr){return this.component?this.component.multipleInstances?t:Mr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function X1(e){return e===Mr?void 0:e}function Z1(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new J1(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(te||(te={}));const ty={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},ry=te.INFO,ny={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},iy=(e,t,...r)=>{if(t<e.logLevel)return;const n=new Date().toISOString(),i=ny[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Uh{constructor(t){this.name=t,this._logLevel=ry,this._logHandler=iy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in te))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ty[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...t),this._logHandler(this,te.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...t),this._logHandler(this,te.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,te.INFO,...t),this._logHandler(this,te.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,te.WARN,...t),this._logHandler(this,te.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...t),this._logHandler(this,te.ERROR,...t)}}const oy=(e,t)=>t.some(r=>e instanceof r);let Au,Ou;function sy(){return Au||(Au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ay(){return Ou||(Ou=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bh=new WeakMap,Fl=new WeakMap,Wh=new WeakMap,Aa=new WeakMap,Qc=new WeakMap;function ly(e){const t=new Promise((r,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{r(wr(e.result)),i()},a=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(r=>{r instanceof IDBCursor&&Bh.set(r,e)}).catch(()=>{}),Qc.set(t,e),t}function cy(e){if(Fl.has(e))return;const t=new Promise((r,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{r(),i()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Fl.set(e,t)}let Ul={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return Fl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Wh.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return wr(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dy(e){Ul=e(Ul)}function uy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const n=e.call(Oa(this),t,...r);return Wh.set(n,t.sort?t.sort():[t]),wr(n)}:ay().includes(e)?function(...t){return e.apply(Oa(this),t),wr(Bh.get(this))}:function(...t){return wr(e.apply(Oa(this),t))}}function fy(e){return typeof e=="function"?uy(e):(e instanceof IDBTransaction&&cy(e),oy(e,sy())?new Proxy(e,Ul):e)}function wr(e){if(e instanceof IDBRequest)return ly(e);if(Aa.has(e))return Aa.get(e);const t=fy(e);return t!==e&&(Aa.set(e,t),Qc.set(t,e)),t}const Oa=e=>Qc.get(e);function py(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),c=wr(a);return n&&a.addEventListener("upgradeneeded",l=>{n(wr(a.result),l.oldVersion,l.newVersion,wr(a.transaction),l)}),r&&a.addEventListener("blocked",l=>r(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const hy=["get","getKey","getAll","getAllKeys","count"],gy=["put","add","delete","clear"],La=new Map;function Lu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(La.get(t))return La.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,i=gy.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||hy.includes(r)))return;const o=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[r](...c),i&&l.done]))[0]};return La.set(t,o),o}dy(e=>({...e,get:(t,r,n)=>Lu(t,r)||e.get(t,r,n),has:(t,r)=>!!Lu(t,r)||e.has(t,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(vy(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function vy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Bl="@firebase/app",zu="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Uh("@firebase/app"),yy="@firebase/app-compat",xy="@firebase/analytics-compat",wy="@firebase/analytics",by="@firebase/app-check-compat",ky="@firebase/app-check",Sy="@firebase/auth",_y="@firebase/auth-compat",Ey="@firebase/database",Cy="@firebase/data-connect",jy="@firebase/database-compat",Iy="@firebase/functions",Ty="@firebase/functions-compat",Ry="@firebase/installations",Ny="@firebase/installations-compat",Py="@firebase/messaging",Ay="@firebase/messaging-compat",Oy="@firebase/performance",Ly="@firebase/performance-compat",zy="@firebase/remote-config",My="@firebase/remote-config-compat",Dy="@firebase/storage",Fy="@firebase/storage-compat",Uy="@firebase/firestore",By="@firebase/ai",Wy="@firebase/firestore-compat",$y="firebase",Vy="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="[DEFAULT]",Hy={[Bl]:"fire-core",[yy]:"fire-core-compat",[wy]:"fire-analytics",[xy]:"fire-analytics-compat",[ky]:"fire-app-check",[by]:"fire-app-check-compat",[Sy]:"fire-auth",[_y]:"fire-auth-compat",[Ey]:"fire-rtdb",[Cy]:"fire-data-connect",[jy]:"fire-rtdb-compat",[Iy]:"fire-fn",[Ty]:"fire-fn-compat",[Ry]:"fire-iid",[Ny]:"fire-iid-compat",[Py]:"fire-fcm",[Ay]:"fire-fcm-compat",[Oy]:"fire-perf",[Ly]:"fire-perf-compat",[zy]:"fire-rc",[My]:"fire-rc-compat",[Dy]:"fire-gcs",[Fy]:"fire-gcs-compat",[Uy]:"fire-fst",[Wy]:"fire-fst-compat",[By]:"fire-vertex","fire-js":"fire-js",[$y]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Map,Gy=new Map,$l=new Map;function Mu(e,t){try{e.container.addComponent(t)}catch(r){qt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function Wi(e){const t=e.name;if($l.has(t))return qt.debug(`There were multiple attempts to register component ${t}.`),!1;$l.set(t,e);for(const r of ws.values())Mu(r,e);for(const r of Gy.values())Mu(r,e);return!0}function $h(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Tt(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new Xi("app","Firebase",Yy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(t,r,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=Vy;function Vh(e,t={}){let r=e;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Wl,automaticDataCollectionEnabled:!0},t),i=n.name;if(typeof i!="string"||!i)throw br.create("bad-app-name",{appName:String(i)});if(r||(r=Dh()),!r)throw br.create("no-options");const o=ws.get(i);if(o){if(Dn(r,o.options)&&Dn(n,o.config))return o;throw br.create("duplicate-app",{appName:i})}const a=new ey(i);for(const l of $l.values())a.addComponent(l);const c=new Qy(r,n,a);return ws.set(i,c),c}function Ky(e=Wl){const t=ws.get(e);if(!t&&e===Wl&&Dh())return Vh();if(!t)throw br.create("no-app",{appName:e});return t}function jn(e,t,r){var n;let i=(n=Hy[e])!==null&&n!==void 0?n:e;r&&(i+=`-${r}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qt.warn(c.join(" "));return}Wi(new Fn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="firebase-heartbeat-database",Jy=1,$i="firebase-heartbeat-store";let za=null;function Hh(){return za||(za=py(qy,Jy,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore($i)}catch(r){console.warn(r)}}}}).catch(e=>{throw br.create("idb-open",{originalErrorMessage:e.message})})),za}async function Xy(e){try{const r=(await Hh()).transaction($i),n=await r.objectStore($i).get(Gh(e));return await r.done,n}catch(t){if(t instanceof jr)qt.warn(t.message);else{const r=br.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qt.warn(r.message)}}}async function Du(e,t){try{const n=(await Hh()).transaction($i,"readwrite");await n.objectStore($i).put(t,Gh(e)),await n.done}catch(r){if(r instanceof jr)qt.warn(r.message);else{const n=br.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});qt.warn(n.message)}}}function Gh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=1024,ex=30;class tx{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new nx(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Fu();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>ex){const a=ix(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){qt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Fu(),{heartbeatsToSend:n,unsentEntries:i}=rx(this._heartbeatsCache.heartbeats),o=zh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(r){return qt.warn(r),""}}}function Fu(){return new Date().toISOString().substring(0,10)}function rx(e,t=Zy){const r=[];let n=e.slice();for(const i of e){const o=r.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Uu(r)>t){o.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Uu(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class nx{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W1()?$1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Xy(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Du(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Du(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Uu(e){return zh(JSON.stringify({version:2,heartbeats:e})).length}function ix(e){if(e.length===0)return-1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(e){Wi(new Fn("platform-logger",t=>new my(t),"PRIVATE")),Wi(new Fn("heartbeat",t=>new tx(t),"PRIVATE")),jn(Bl,zu,e),jn(Bl,zu,"esm2017"),jn("fire-js","")}ox("");var sx="firebase",ax="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(sx,ax,"app");function Kc(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function Yh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lx=Yh,Qh=new Xi("auth","Firebase",Yh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new Uh("@firebase/auth");function cx(e,...t){bs.logLevel<=te.WARN&&bs.warn(`Auth (${eo}): ${e}`,...t)}function Wo(e,...t){bs.logLevel<=te.ERROR&&bs.error(`Auth (${eo}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e,...t){throw Jc(e,...t)}function St(e,...t){return Jc(e,...t)}function qc(e,t,r){const n=Object.assign(Object.assign({},lx()),{[t]:r});return new Xi("auth","Firebase",n).create(t,{appName:e.name})}function Hr(e){return qc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dx(e,t,r){const n=r;if(!(t instanceof n))throw n.name!==t.constructor.name&&At(e,"argument-error"),qc(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jc(e,...t){if(typeof e!="string"){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return Qh.create(e,...t)}function z(e,t,...r){if(!e)throw Jc(t,...r)}function $t(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Wo(t),new Error(t)}function Jt(e,t){e||$t(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function ux(){return Bu()==="http:"||Bu()==="https:"}function Bu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ux()||F1()||"connection"in navigator)?navigator.onLine:!0}function px(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t,r){this.shortDelay=t,this.longDelay=r,Jt(r>t,"Short delay should be less than long delay!"),this.isMobile=M1()||U1()}get(){return fx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(e,t){Jt(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{static initialize(t,r,n){this.fetchImpl=t,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mx=new to(3e4,6e4);function Zc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Hn(e,t,r,n,i={}){return qh(e,i,async()=>{let o={},a={};n&&(t==="GET"?a=n:o={body:JSON.stringify(n)});const c=Zi(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const d=Object.assign({method:t,headers:l},o);return D1()||(d.referrerPolicy="no-referrer"),e.emulatorConfig&&Gs(e.emulatorConfig.host)&&(d.credentials="include"),Kh.fetch()(await Jh(e,e.config.apiHost,r,c),d)})}async function qh(e,t,r){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},hx),t);try{const i=new yx(e),o=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw jo(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw jo(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw jo(e,"user-disabled",a);const u=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw qc(e,u,d);At(e,u)}}catch(i){if(i instanceof jr)throw i;At(e,"network-request-failed",{message:String(i)})}}async function vx(e,t,r,n,i={}){const o=await Hn(e,t,r,n,i);return"mfaPendingCredential"in o&&At(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function Jh(e,t,r,n){const i=`${t}${r}?${n}`,o=e,a=o.config.emulator?Xc(e.config,i):`${e.config.apiScheme}://${i}`;return gx.includes(r)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class yx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(St(this.auth,"network-request-failed")),mx.get())})}}function jo(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=St(e,t,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(e,t){return Hn(e,"POST","/v1/accounts:delete",t)}async function ks(e,t){return Hn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function wx(e,t=!1){const r=Vn(e),n=await r.getIdToken(t),i=ed(n);z(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:n,authTime:Si(Ma(i.auth_time)),issuedAtTime:Si(Ma(i.iat)),expirationTime:Si(Ma(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ma(e){return Number(e)*1e3}function ed(e){const[t,r,n]=e.split(".");if(t===void 0||r===void 0||n===void 0)return Wo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Mh(r);return i?JSON.parse(i):(Wo("Failed to decode base64 JWT payload"),null)}catch(i){return Wo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wu(e){const t=ed(e);return z(t,"internal-error"),z(typeof t.exp<"u","internal-error"),z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof jr&&bx(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}function bx({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var r;if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(e){var t;const r=e.auth,n=await e.getIdToken(),i=await Vi(e,ks(r,{idToken:n}));z(i==null?void 0:i.users.length,r,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Xh(o.providerUserInfo):[],c=_x(e.providerData,a),l=e.isAnonymous,d=!(e.email&&o.passwordHash)&&!(c!=null&&c.length),u=l?d:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Hl(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function Sx(e){const t=Vn(e);await Ss(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _x(e,t){return[...e.filter(n=>!t.some(i=>i.providerId===n.providerId)),...t]}function Xh(e){return e.map(t=>{var{providerId:r}=t,n=Kc(t,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ex(e,t){const r=await qh(e,{},async()=>{const n=Zi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=await Jh(e,i,"/v1/token",`key=${o}`),c=await e._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:n};return e.emulatorConfig&&Gs(e.emulatorConfig.host)&&(l.credentials="include"),Kh.fetch()(a,l)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Cx(e,t){return Hn(e,"POST","/v2/accounts:revokeToken",Zc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){z(t.idToken,"internal-error"),z(typeof t.idToken<"u","internal-error"),z(typeof t.refreshToken<"u","internal-error");const r="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Wu(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}updateFromIdToken(t){z(t.length!==0,"internal-error");const r=Wu(t);this.updateTokensAndExpiration(t,null,r)}async getToken(t,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:n,refreshToken:i,expiresIn:o}=await Ex(t,r);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(t,r,n){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,r){const{refreshToken:n,accessToken:i,expirationTime:o}=r,a=new In;return n&&(z(typeof n=="string","internal-error",{appName:t}),a.refreshToken=n),i&&(z(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(z(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new In,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e,t){z(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class wt{constructor(t){var{uid:r,auth:n,stsTokenManager:i}=t,o=Kc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Hl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const r=await Vi(this,this.stsTokenManager.getToken(this.auth,t));return z(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return wx(this,t)}reload(){return Sx(this)}_assign(t){this!==t&&(z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>Object.assign({},r)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const r=new wt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(t){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),r&&await Ss(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(Hr(this.auth));const t=await this.getIdToken();return await Vi(this,xx(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){var n,i,o,a,c,l,d,u;const f=(n=r.displayName)!==null&&n!==void 0?n:void 0,p=(i=r.email)!==null&&i!==void 0?i:void 0,x=(o=r.phoneNumber)!==null&&o!==void 0?o:void 0,v=(a=r.photoURL)!==null&&a!==void 0?a:void 0,b=(c=r.tenantId)!==null&&c!==void 0?c:void 0,S=(l=r._redirectEventId)!==null&&l!==void 0?l:void 0,m=(d=r.createdAt)!==null&&d!==void 0?d:void 0,h=(u=r.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:k,isAnonymous:_,providerData:E,stsTokenManager:j}=r;z(g&&j,t,"internal-error");const T=In.fromJSON(this.name,j);z(typeof g=="string",t,"internal-error"),rr(f,t.name),rr(p,t.name),z(typeof k=="boolean",t,"internal-error"),z(typeof _=="boolean",t,"internal-error"),rr(x,t.name),rr(v,t.name),rr(b,t.name),rr(S,t.name),rr(m,t.name),rr(h,t.name);const D=new wt({uid:g,auth:t,email:p,emailVerified:k,displayName:f,isAnonymous:_,photoURL:v,phoneNumber:x,tenantId:b,stsTokenManager:T,createdAt:m,lastLoginAt:h});return E&&Array.isArray(E)&&(D.providerData=E.map(N=>Object.assign({},N))),S&&(D._redirectEventId=S),D}static async _fromIdTokenResponse(t,r,n=!1){const i=new In;i.updateFromServerResponse(r);const o=new wt({uid:r.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Ss(o),o}static async _fromGetAccountInfoResponse(t,r,n){const i=r.users[0];z(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Xh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new In;c.updateFromIdToken(n);const l=new wt({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Hl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=new Map;function Vt(e){Jt(e instanceof Function,"Expected a class definition");let t=$u.get(e);return t?(Jt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$u.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}Zh.type="NONE";const Vu=Zh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(e,t,r){return`firebase:${e}:${t}:${r}`}class Tn{constructor(t,r,n){this.persistence=t,this.auth=r,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=$o(this.userKey,i.apiKey,o),this.fullPersistenceKey=$o("persistence",i.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const r=await ks(this.auth,{idToken:t}).catch(()=>{});return r?wt._fromGetAccountInfoResponse(this.auth,r,t):null}return wt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,n="authUser"){if(!r.length)return new Tn(Vt(Vu),t,n);const i=(await Promise.all(r.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Vt(Vu);const a=$o(n,t.config.apiKey,t.name);let c=null;for(const d of r)try{const u=await d._get(a);if(u){let f;if(typeof u=="string"){const p=await ks(t,{idToken:u}).catch(()=>{});if(!p)break;f=await wt._fromGetAccountInfoResponse(t,p,u)}else f=wt._fromJSON(t,u);d!==o&&(c=f),o=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Tn(o,t,n):(o=l[0],c&&await o._set(a,c.toJSON()),await Promise.all(r.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Tn(o,t,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ng(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(eg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(og(t))return"Blackberry";if(sg(t))return"Webos";if(tg(t))return"Safari";if((t.includes("chrome/")||rg(t))&&!t.includes("edge/"))return"Chrome";if(ig(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function eg(e=De()){return/firefox\//i.test(e)}function tg(e=De()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function rg(e=De()){return/crios\//i.test(e)}function ng(e=De()){return/iemobile/i.test(e)}function ig(e=De()){return/android/i.test(e)}function og(e=De()){return/blackberry/i.test(e)}function sg(e=De()){return/webos/i.test(e)}function td(e=De()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function jx(e=De()){var t;return td(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Ix(){return B1()&&document.documentMode===10}function ag(e=De()){return td(e)||ig(e)||sg(e)||og(e)||/windows phone/i.test(e)||ng(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(e,t=[]){let r;switch(e){case"Browser":r=Hu(De());break;case"Worker":r=`${Hu(De())}-${e}`;break;default:r=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${eo}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const n=o=>new Promise((a,c)=>{try{const l=t(o);a(l)}catch(l){c(l)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const r=[];try{for(const n of this.queue)await n(t),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rx(e,t={}){return Hn(e,"GET","/v2/passwordPolicy",Zc(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=6;class Px{constructor(t){var r,n,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=a.minPasswordLength)!==null&&r!==void 0?r:Nx,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=t.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var r,n,i,o,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(r=l.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(t,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=t.length>=n),i&&(r.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<t.length;i++)n=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,r,n,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(t,r,n,i){this.app=t,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gu(this),this.idTokenSubscription=new Gu(this),this.beforeStateQueue=new Tx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=Vt(r)),this._initializationPromise=this.queue(async()=>{var n,i,o;if(!this._deleted&&(this.persistenceManager=await Tn.create(this,t),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const r=await ks(this,{idToken:t}),n=await wt._fromGetAccountInfoResponse(this,r,t);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(Tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===c)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await Ss(t)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=px()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Tt(this.app))return Promise.reject(Hr(this));const r=t?Vn(t):null;return r&&z(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(Hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Tt(this.app)?Promise.reject(Hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Rx(this),r=new Px(t);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Xi("auth","Firebase",t())}onAuthStateChanged(t,r,n){return this.registerStateListener(this.authStateSubscription,t,r,n)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,n){return this.registerStateListener(this.idTokenSubscription,t,r,n)}authStateReady(){return new Promise((t,r)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged(()=>{n(),t()},r)}})}async revokeAccessToken(t){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await Cx(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,r){const n=await this.getOrInitRedirectPersistenceManager(r);return t===null?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&Vt(t)||this._popupRedirectResolver;z(r,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[Vt(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===t?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,n,i){if(this._deleted)return()=>{};const o=typeof r=="function"?r:r.next.bind(r);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof r=="function"){const l=t.addObserver(r,n,i);return()=>{a=!0,l()}}else{const l=t.addObserver(r);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=lg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var t;if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const r=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return r!=null&&r.error&&cx(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Ys(e){return Vn(e)}class Gu{constructor(t){this.auth=t,this.observer=null,this.addObserver=Q1(r=>this.observer=r)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ox(e){rd=e}function Lx(e){return rd.loadJS(e)}function zx(){return rd.gapiScript}function Mx(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(e,t){const r=$h(e,"auth");if(r.isInitialized()){const i=r.getImmediate(),o=r.getOptions();if(Dn(o,t??{}))return i;At(i,"already-initialized")}return r.initialize({options:t})}function Fx(e,t){const r=(t==null?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Vt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,t==null?void 0:t.popupRedirectResolver)}function Ux(e,t,r){const n=Ys(e);z(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const i=!1,o=cg(t),{host:a,port:c}=Bx(t),l=c===null?"":`:${c}`,d={url:`${o}//${a}${l}/`},u=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){z(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),z(Dn(d,n.config.emulator)&&Dn(u,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=u,n.settings.appVerificationDisabledForTesting=!0,Gs(a)?(A1(`${o}//${a}${l}`),z1("Auth",!0)):Wx()}function cg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Bx(e){const t=cg(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const o=i[1];return{host:o,port:Yu(n.substr(o.length+1))}}else{const[o,a]=n.split(":");return{host:o,port:Yu(a)}}}function Yu(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Wx(){function e(){const t=document.createElement("p"),r=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return $t("not implemented")}_getIdTokenResponse(t){return $t("not implemented")}_linkToIdToken(t,r){return $t("not implemented")}_getReauthenticationResolver(t){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(e,t){return vx(e,"POST","/v1/accounts:signInWithIdp",Zc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="http://localhost";class Xt extends dg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new Xt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):At("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:n,signInMethod:i}=r,o=Kc(r,["providerId","signInMethod"]);if(!n||!i)return null;const a=new Xt(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const r=this.buildRequest();return Rn(t,r)}_linkToIdToken(t,r){const n=this.buildRequest();return n.idToken=r,Rn(t,n)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,Rn(t,r)}buildRequest(){const t={requestUri:$x,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=Zi(r)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends nd{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class _i extends Gn{static credentialFromJSON(t){const r=typeof t=="string"?JSON.parse(t):t;return z("providerId"in r&&"signInMethod"in r,"argument-error"),Xt._fromParams(r)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return z(t.idToken||t.accessToken,"argument-error"),Xt._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return _i.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return _i.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:o,nonce:a,providerId:c}=t;if(!n&&!i&&!r&&!o||!c)return null;try{return new _i(c)._credential({idToken:r,accessToken:n,nonce:a,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Gn{constructor(){super("facebook.com")}static credential(t){return Xt._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ar.credentialFromTaggedObject(t)}static credentialFromError(t){return ar.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ar.credential(t.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Gn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return Xt._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:n}=t;if(!r&&!n)return null;try{return Dt.credential(r,n)}catch{return null}}}Dt.GOOGLE_SIGN_IN_METHOD="google.com";Dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Gn{constructor(){super("github.com")}static credential(t){return Xt._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ft.credential(t.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Gn{constructor(){super("twitter.com")}static credential(t,r){return Xt._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return lr.credentialFromTaggedObject(t)}static credentialFromError(t){return lr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=t;if(!r||!n)return null;try{return lr.credential(r,n)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,n,i=!1){const o=await wt._fromIdTokenResponse(t,n,i),a=Qu(n);return new Un({user:o,providerId:a,_tokenResponse:n,operationType:r})}static async _forOperation(t,r,n){await t._updateTokensIfNecessary(n,!0);const i=Qu(n);return new Un({user:t,providerId:i,_tokenResponse:n,operationType:r})}}function Qu(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends jr{constructor(t,r,n,i){var o;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,_s.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,r,n,i){return new _s(t,r,n,i)}}function ug(e,t,r,n){return(t==="reauthenticate"?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?_s._fromErrorAndOperation(e,o,t,n):o})}async function Vx(e,t,r=!1){const n=await Vi(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return Un._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hx(e,t,r=!1){const{auth:n}=e;if(Tt(n.app))return Promise.reject(Hr(n));const i="reauthenticate";try{const o=await Vi(e,ug(n,i,t,e),r);z(o.idToken,n,"internal-error");const a=ed(o.idToken);z(a,n,"internal-error");const{sub:c}=a;return z(e.uid===c,n,"user-mismatch"),Un._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&At(n,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(e,t,r=!1){if(Tt(e.app))return Promise.reject(Hr(e));const n="signIn",i=await ug(e,n,t),o=await Un._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(o.user),o}function Yx(e,t,r,n){return Vn(e).onIdTokenChanged(t,r,n)}function Qx(e,t,r){return Vn(e).beforeAuthStateChanged(t,r)}const Es="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Es,"1"),this.storage.removeItem(Es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=1e3,qx=10;class pg extends fg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ag(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&t(r,i,n)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const n=t.key;r?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!r&&this.localCache[n]===a||this.notifyListeners(n,a)},o=this.storage.getItem(n);Ix()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,qx):i()}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:n}),!0)})},Kx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}pg.type="LOCAL";const Jx=pg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg extends fg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}hg.type="SESSION";const gg=hg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(i=>i.isListeningto(t));if(r)return r;const n=new Qs(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:n,eventType:i,data:o}=r.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(a).map(async d=>d(r.origin,o)),l=await Xx(c);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(Math.random()*10);return e+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,l)=>{const d=id("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===d)switch(p.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(p.data.response);break;default:clearTimeout(u),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:r},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function ew(e){Pt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function tw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function nw(){return mg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="firebaseLocalStorageDb",iw=1,Cs="firebaseLocalStorage",yg="fbase_key";class ro{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Ks(e,t){return e.transaction([Cs],t?"readwrite":"readonly").objectStore(Cs)}function ow(){const e=indexedDB.deleteDatabase(vg);return new ro(e).toPromise()}function Gl(){const e=indexedDB.open(vg,iw);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const n=e.result;try{n.createObjectStore(Cs,{keyPath:yg})}catch(i){r(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Cs)?t(n):(n.close(),await ow(),t(await Gl()))})})}async function Ku(e,t,r){const n=Ks(e,!0).put({[yg]:t,value:r});return new ro(n).toPromise()}async function sw(e,t){const r=Ks(e,!1).get(t),n=await new ro(r).toPromise();return n===void 0?null:n.value}function qu(e,t){const r=Ks(e,!0).delete(t);return new ro(r).toPromise()}const aw=800,lw=3;class xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gl(),this.db)}async _withRetries(t){let r=0;for(;;)try{const n=await this._openDb();return await t(n)}catch(n){if(r++>lw)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qs._getInstance(nw()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await tw(),!this.activeServiceWorker)return;this.sender=new Zx(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((t=n[0])===null||t===void 0)&&t.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||rw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Gl();return await Ku(t,Es,"1"),await qu(t,Es),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ku(n,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(n=>sw(n,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>qu(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ks(i,!1).getAll();return new ro(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xg.type="LOCAL";const cw=xg;new to(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(e,t){return t?Vt(t):(z(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od extends dg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Rn(t,this._buildIdpRequest())}_linkToIdToken(t,r){return Rn(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return Rn(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function dw(e){return Gx(e.auth,new od(e),e.bypassAuthState)}function uw(e){const{auth:t,user:r}=e;return z(r,t,"internal-error"),Hx(r,new od(e),e.bypassAuthState)}async function fw(e){const{auth:t,user:r}=e;return z(r,t,"internal-error"),Vx(r,new od(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(t,r,n,i,o=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:n,postBody:i,tenantId:o,error:a,type:c}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:r,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return dw;case"linkViaPopup":case"linkViaRedirect":return fw;case"reauthViaPopup":case"reauthViaRedirect":return uw;default:At(this.auth,"internal-error")}}resolve(t){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=new to(2e3,1e4);async function hw(e,t,r){if(Tt(e.app))return Promise.reject(St(e,"operation-not-supported-in-this-environment"));const n=Ys(e);dx(e,t,nd);const i=wg(n,r);return new Br(n,"signInViaPopup",t,i).executeNotNull()}class Br extends bg{constructor(t,r,n,i,o){super(t,r,i,o),this.provider=n,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return z(t,this.auth,"internal-error"),t}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const t=id();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const t=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,pw.get())};t()}}Br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="pendingRedirect",Vo=new Map;class mw extends bg{constructor(t,r,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let t=Vo.get(this.auth._key());if(!t){try{const n=await vw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(r){t=()=>Promise.reject(r)}Vo.set(this.auth._key(),t)}return this.bypassAuthState||Vo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vw(e,t){const r=ww(t),n=xw(e);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function yw(e,t){Vo.set(e._key(),t)}function xw(e){return Vt(e._redirectPersistence)}function ww(e){return $o(gw,e.config.apiKey,e.name)}async function bw(e,t,r=!1){if(Tt(e.app))return Promise.reject(Hr(e));const n=Ys(e),i=wg(n,t),a=await new mw(n,i,r).execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=10*60*1e3;class Sw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(r=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!_w(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){var n;if(t.error&&!kg(t)){const i=((n=t.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(St(this.auth,i))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const n=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=kw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ju(t))}saveEventToCache(t){this.cachedEventUids.add(Ju(t)),this.lastProcessedEventTime=Date.now()}}function Ju(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function kg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function _w(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kg(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(e,t={}){return Hn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jw=/^https?/;async function Iw(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ew(e);for(const r of t)try{if(Tw(r))return}catch{}At(e,"unauthorized-domain")}function Tw(e){const t=Vl(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&n===""?r==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&a.hostname===n}if(!jw.test(r))return!1;if(Cw.test(e))return n===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new to(3e4,6e4);function Xu(){const e=Pt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}function Nw(e){return new Promise((t,r)=>{var n,i,o;function a(){Xu(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Xu(),r(St(e,"network-request-failed"))},timeout:Rw.get()})}if(!((i=(n=Pt().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Pt().gapi)===null||o===void 0)&&o.load)a();else{const c=Mx("iframefcb");return Pt()[c]=()=>{gapi.load?a():r(St(e,"network-request-failed"))},Lx(`${zx()}?onload=${c}`).catch(l=>r(l))}}).catch(t=>{throw Ho=null,t})}let Ho=null;function Pw(e){return Ho=Ho||Nw(e),Ho}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=new to(5e3,15e3),Ow="__/auth/iframe",Lw="emulator/auth/iframe",zw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dw(e){const t=e.config;z(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?Xc(t,Lw):`https://${e.config.authDomain}/${Ow}`,n={apiKey:t.apiKey,appName:e.name,v:eo},i=Mw.get(e.config.apiHost);i&&(n.eid=i);const o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${Zi(n).slice(1)}`}async function Fw(e){const t=await Pw(e),r=Pt().gapi;return z(r,e,"internal-error"),t.open({where:document.body,url:Dw(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zw,dontclear:!0},n=>new Promise(async(i,o)=>{await n.restyle({setHideOnLeave:!1});const a=St(e,"network-request-failed"),c=Pt().setTimeout(()=>{o(a)},Aw.get());function l(){Pt().clearTimeout(c),i(n)}n.ping(l).then(l,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bw=500,Ww=600,$w="_blank",Vw="http://localhost";class Zu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hw(e,t,r,n=Bw,i=Ww){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Uw),{width:n.toString(),height:i.toString(),top:o,left:a}),d=De().toLowerCase();r&&(c=rg(d)?$w:r),eg(d)&&(t=t||Vw,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[x,v])=>`${p}${x}=${v},`,"");if(jx(d)&&c!=="_self")return Gw(t||"",c),new Zu(null);const f=window.open(t||"",c,u);z(f,e,"popup-blocked");try{f.focus()}catch{}return new Zu(f)}function Gw(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="__/auth/handler",Qw="emulator/auth/handler",Kw=encodeURIComponent("fac");async function ef(e,t,r,n,i,o){z(e.config.authDomain,e,"auth-domain-config-required"),z(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:eo,eventId:i};if(t instanceof nd){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Y1(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))a[u]=f}if(t instanceof Gn){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const c=a;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await e._getAppCheckToken(),d=l?`#${Kw}=${encodeURIComponent(l)}`:"";return`${qw(e)}?${Zi(c).slice(1)}${d}`}function qw({config:e}){return e.emulator?Xc(e,Qw):`https://${e.authDomain}/${Yw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="webStorageSupport";class Jw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gg,this._completeRedirectFn=bw,this._overrideRedirectResult=yw}async _openPopup(t,r,n,i){var o;Jt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await ef(t,r,n,Vl(),i);return Hw(t,a,id())}async _openRedirect(t,r,n,i){await this._originValidation(t);const o=await ef(t,r,n,Vl(),i);return ew(o),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:i,promise:o}=this.eventManagers[r];return i?Promise.resolve(i):(Jt(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(t);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(t){const r=await Fw(t),n=new Sw(t);return r.register("authEvent",i=>(z(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=r,n}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(Da,{type:Da},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Da];a!==void 0&&r(!!a),At(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Iw(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return ag()||tg()||td()}}const Xw=Jw;var tf="@firebase/auth",rf="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(n=>{t((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);r&&(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tb(e){Wi(new Fn("auth",(t,{options:r})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=n.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:a,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lg(e)},d=new Ax(n,i,o,l);return Fx(d,r),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,n)=>{t.getProvider("auth-internal").initialize()})),Wi(new Fn("auth-internal",t=>{const r=Ys(t.getProvider("auth").getImmediate());return(n=>new Zw(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(tf,rf,eb(e)),jn(tf,rf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=5*60,nb=Fh("authIdTokenMaxAge")||rb;let nf=null;const ib=e=>async t=>{const r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>nb)return;const i=r==null?void 0:r.token;nf!==i&&(nf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ob(e=Ky()){const t=$h(e,"auth");if(t.isInitialized())return t.getImmediate();const r=Dx(e,{popupRedirectResolver:Xw,persistence:[cw,Jx,gg]}),n=Fh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const a=ib(o.toString());Qx(r,a,()=>a(r.currentUser)),Yx(r,c=>a(c))}}const i=N1("auth");return i&&Ux(r,`http://${i}`),r}function sb(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Ox({loadJS(e){return new Promise((t,r)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=i=>{const o=St("internal-error");o.customData=i,r(o)},n.type="text/javascript",n.charset="UTF-8",sb().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tb("Browser");const Sg={apiKey:"AIzaSyCNsYDBSfYMJUxqbkC3Cb_w6CYGtW4Xf20",authDomain:"cloudvault-58446.firebaseapp.com",projectId:"cloudvault-58446",storageBucket:"cloudvault-58446.firebasestorage.app",messagingSenderId:"378535306521",appId:"1:378535306521:web:2e5fe57db925753d0f5188"},ab=["google","github","microsoft"];let Fa=null,of=null;function lb(){return js()?(Fa||(Fa=Vh(Sg),of=ob(Fa)),of):null}function js(){return!0}function cb(){const e=Object.entries(Sg).filter(([,t])=>!t).map(([t])=>t);return{configured:js(),providers:ab.map(t=>({id:t,configured:js()})),missingEnv:e}}async function db(e){const t=lb();if(!t)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env variables.");const n={google:new Dt,github:new Ft,microsoft:new _i("microsoft.com")}[e];if(!n)throw new Error("Unknown provider");const i=await hw(t,n),o=await i.user.getIdToken(),a=await fetch(`${ut}/auth/firebase`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:o,email:i.user.email,fullName:i.user.displayName,avatarUrl:i.user.photoURL,provider:e})}),c=await a.json();if(!a.ok)throw new Error(c.error||c.message||"Firebase login failed");return c.success?c.data:c}function ub({onVerified:e,onError:t,onExpire:r,theme:n="auto",size:i="normal"}){const o=y.useRef(null),a=y.useRef(null),[c,l]=y.useState(!1),[d,u]=y.useState(!0),[f,p]=y.useState(null);y.useEffect(()=>{if(window.turnstile)l(!0),u(!1);else{const v=document.querySelector('script[data-cv-turnstile="true"]'),b=v||document.createElement("script");b.src="https://challenges.cloudflare.com/turnstile/v0/api.js",b.async=!0,b.defer=!0,b.dataset.cvTurnstile="true",b.onload=()=>{l(!0),u(!1),console.log("TURNSTILE: Script loaded")},b.onerror=()=>{p("Failed to load Turnstile"),u(!1),t==null||t("Failed to load Turnstile")},v||document.head.appendChild(b)}return()=>{if(a.current&&window.turnstile)try{window.turnstile.remove(a.current),a.current=null}catch(v){console.error("TURNSTILE: Error removing widget:",v)}}},[]),y.useEffect(()=>{if(c&&o.current&&window.turnstile&&!a.current){const v="0x4AAAAAADkh2aePP5UGcXcH",b=["localhost","127.0.0.1","::1"].includes(window.location.hostname);if((v==null?void 0:v.startsWith("1x"))&&!b){const m="Turnstile production site key is not configured";p(m),t==null||t(m),u(!1);return}console.log("TURNSTILE: Rendering widget with site key:",v);try{a.current=window.turnstile.render(o.current,{sitekey:v,theme:n,size:i,callback:m=>{console.log("TURNSTILE: Verification successful"),p(null),e==null||e(m)},"error-callback":m=>{console.error("TURNSTILE: Verification error:",m);const h="Verification failed. For local testing, use the Turnstile test site key; for production, make sure this hostname is allowed in Cloudflare.";p(h),t==null||t(h)},"expired-callback":()=>{console.log("TURNSTILE: Token expired"),p("Verification expired. Please try again."),r==null||r()}})}catch(m){console.error("TURNSTILE: Error rendering widget:",m),p("Failed to render Turnstile widget"),t==null||t("Failed to render Turnstile widget")}}},[c,n,i,e,t,r]);const x=()=>{if(a.current&&window.turnstile)try{window.turnstile.reset(a.current),p(null)}catch(v){console.error("TURNSTILE: Error resetting widget:",v)}};return y.useEffect(()=>{o.current&&(o.current.reset=x)},[]),d?s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",background:"var(--bg-secondary)",borderRadius:"var(--radius)",border:"1px solid var(--border)"},children:s.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid var(--border)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})}):f?s.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"var(--radius)",border:"1px solid var(--danger)",color:"var(--danger)",fontSize:"13px",textAlign:"center"},children:[f,s.jsx("button",{type:"button",onClick:x,style:{marginTop:"8px",padding:"6px 12px",background:"var(--danger)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px"},children:"Retry"})]}):s.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",minHeight:i==="compact"?140:70,overflow:"hidden"},children:s.jsx("div",{ref:o})})}const Or=(e="")=>{const t=e.toLowerCase();return t.includes("failed to fetch")||t.includes("cannot reach")||t.includes("networkerror")?"Unable to reach CloudVault. Please check your connection.":t.includes("firebase")||t.includes("oauth")||t.includes("access token")?"Social login failed. Please try again.":e||"Something went wrong. Please try again."},Ua=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),sf=e=>e.length>=8&&/[A-Z]/.test(e)&&/[a-z]/.test(e)&&/\d/.test(e);function fb({size:e=20}){return s.jsx("span",{style:{display:"inline-block",width:e,height:e,border:"2.5px solid rgba(255,255,255,0.25)",borderTopColor:"#fff",borderRadius:"50%",animation:"cv-spin 0.7s linear infinite"}})}function pb({size:e=42}){return s.jsx("span",{style:{width:e,height:e,borderRadius:"50%",background:"var(--mega-red, #d90007)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(217,0,7,.35)",flexShrink:0,overflow:"hidden"},children:s.jsx("img",{src:be.logoImage,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function Io({label:e,type:t="text",value:r,onChange:n,placeholder:i,autoFocus:o,error:a}){const[c,l]=y.useState(!1),d=r&&r.length>0;return s.jsxs("div",{style:{position:"relative",marginBottom:4},children:[s.jsx("label",{style:{position:"absolute",left:16,top:c||d?8:"50%",transform:c||d?"translateY(0) scale(0.82)":"translateY(-50%)",transformOrigin:"left top",fontSize:c||d?11:14,fontWeight:600,color:c?"var(--cv-accent)":a?"var(--cv-danger)":"var(--cv-text-muted)",transition:"all 0.18s cubic-bezier(0.4,0,0.2,1)",pointerEvents:"none",zIndex:1,letterSpacing:c||d?"0.04em":"0",textTransform:c||d?"uppercase":"none"},children:e}),s.jsx("input",{type:t,value:r,onChange:n,onFocus:()=>l(!0),onBlur:()=>l(!1),autoFocus:o,placeholder:c?i:"",style:{width:"100%",padding:"28px 16px 10px",background:"var(--cv-bg-card)",border:`1.5px solid ${a?"var(--cv-danger)":c?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:"var(--cv-radius-lg)",color:"var(--cv-text)",fontSize:15,outline:"none",transition:"border-color 0.18s ease, box-shadow 0.18s ease",boxShadow:c?`0 0 0 3px ${a?"rgba(239,68,68,0.12)":"rgba(99,102,241,0.12)"}`:"none"}}),a&&s.jsx("div",{style:{fontSize:12,color:"var(--cv-danger)",marginTop:4,paddingLeft:4,fontWeight:500},children:a})]})}function hb({value:e,onChange:t}){const r=[y.useRef(),y.useRef(),y.useRef(),y.useRef(),y.useRef(),y.useRef()],n=(e+"      ").slice(0,6).split(""),i=(a,c)=>{var l,d;if(c.key==="Backspace"){if(n[a]!==" "){const u=n.map((f,p)=>p===a?" ":f).join("").trimEnd();t(u)}else if(a>0){(l=r[a-1].current)==null||l.focus();const u=n.map((f,p)=>p===a-1?" ":f).join("").trimEnd();t(u)}}else if(c.key>="0"&&c.key<="9"){c.preventDefault();const u=n.map((f,p)=>p===a?c.key:f).join("").replace(/ /g,"");t(u.slice(0,6)),a<5&&((d=r[a+1].current)==null||d.focus())}},o=a=>{var l;const c=a.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);c&&(t(c),(l=r[Math.min(c.length,5)].current)==null||l.focus())};return s.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",margin:"8px 0"},children:r.map((a,c)=>{var l,d,u,f;return s.jsx("input",{ref:a,type:"text",inputMode:"numeric",maxLength:1,value:((l=n[c])==null?void 0:l.trim())||"",onKeyDown:p=>i(c,p),onPaste:o,onChange:()=>{},style:{width:52,height:60,textAlign:"center",fontSize:24,fontWeight:800,background:"var(--cv-bg-card)",border:`2px solid ${(d=n[c])!=null&&d.trim()?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:14,color:"var(--cv-text)",outline:"none",transition:"border-color 0.18s ease, transform 0.1s ease",transform:(u=n[c])!=null&&u.trim()?"scale(1.05)":"scale(1)",boxShadow:(f=n[c])!=null&&f.trim()?"0 0 0 3px rgba(99,102,241,0.15)":"none"}},c)})})}function gb({label:e,icon:t,onClick:r,disabled:n}){const[i,o]=y.useState(!1);return s.jsxs("button",{type:"button",onClick:r,disabled:n,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,width:"100%",padding:"12px 16px",minHeight:48,background:i?"rgba(0,183,79,.08)":"var(--bg-card)",border:i?"1px solid rgba(0,183,79,.35)":"1px solid var(--border)",borderRadius:14,cursor:n?"not-allowed":"pointer",color:"var(--text)",fontSize:14,fontWeight:700,transition:"all 0.2s ease",opacity:n?.5:1,boxShadow:i?"0 12px 28px rgba(0,0,0,.08)":"none"},children:[s.jsx("span",{style:{display:"flex",alignItems:"center"},children:t}),s.jsxs("span",{children:["Continue with ",e]})]})}function mb({password:e}){if(!e)return null;const t=[{label:"8+ chars",ok:e.length>=8},{label:"Uppercase",ok:/[A-Z]/.test(e)},{label:"Lowercase",ok:/[a-z]/.test(e)},{label:"Number",ok:/\d/.test(e)}],r=t.filter(i=>i.ok).length,n=["var(--cv-danger)","var(--cv-danger)","#f59e0b","#10b981"];return s.jsxs("div",{style:{marginTop:6},children:[s.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:[0,1,2,3].map(i=>s.jsx("div",{style:{flex:1,height:3,borderRadius:99,background:i<r?n[r-1]:"var(--cv-border)",transition:"background 0.3s ease"}},i))}),s.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:t.map(i=>s.jsxs("span",{style:{fontSize:11,color:i.ok?"#10b981":"var(--cv-text-muted)",fontWeight:500},children:[i.ok?"✓":"○"," ",i.label]},i.label))})]})}const O={LOGIN:"login",REGISTER:"register",FORGOT:"forgot",VERIFY_OTP:"verify_otp",RESET_PASSWORD:"reset_password"};function vb({onAuth:e,onBack:t,onNeedsVerification:r,initialMode:n="login"}){const[i,o]=y.useState(n==="login"?O.LOGIN:O.REGISTER),[a,c]=y.useState(!1),[l,d]=y.useState(""),[u,f]=y.useState(""),[p,x]=y.useState("forward"),[v,b]=y.useState(""),[S,m]=y.useState(""),[h,g]=y.useState(""),[k,_]=y.useState(""),[E,j]=y.useState(""),[T,D]=y.useState(""),[N,U]=y.useState(!0),[F,X]=y.useState(!1),[ie,ve]=y.useState(!1),[ge,_e]=y.useState(0),[R,L]=y.useState(null),[M,q]=y.useState(!1),[re,ft]=y.useState(0),Ie="0x4AAAAAADkh2aePP5UGcXcH",pt=typeof window<"u"&&["localhost","127.0.0.1","::1"].includes(window.location.hostname),Te=!!(!(Ie==null?void 0:Ie.startsWith("1x"))||pt),no=js();cb();const[tt,Ge]=y.useState({});y.useEffect(()=>{if(ge<=0)return;const I=setTimeout(()=>_e(le=>le-1),1e3);return()=>clearTimeout(I)},[ge]);const Et=I=>{x("forward"),d(""),f(""),Ge({}),o(I)},Ye=()=>{x("back"),d(""),f(""),Ge({}),i===O.REGISTER||i===O.FORGOT?o(O.LOGIN):i===O.VERIFY_OTP?o(O.FORGOT):i===O.RESET_PASSWORD?o(O.VERIFY_OTP):t==null||t()},tn=()=>{L(null),q(!1),ft(I=>I+1)},er=async()=>{var le,Rr;const I={};if(Ua(v)||(I.email="Enter a valid email address"),S||(I.password="Password is required"),Object.keys(I).length){Ge(I);return}if(Te&&!M){d("Please complete the security check");return}c(!0),d("");try{const Q=await it("/auth/login",{method:"POST",body:JSON.stringify({email:v,password:S,rememberMe:N,...Te&&{turnstileToken:R}})});if(!(Q!=null&&Q.accessToken))throw new Error("Login failed. Please try again.");const Qn=N?localStorage:sessionStorage;Qn.setItem("cv_token",Q.accessToken),Q.refreshToken&&Qn.setItem("cv_refreshToken",Q.refreshToken),Qn.setItem("cv_user",((le=Q.user)==null?void 0:le.fullName)||v),e(Q.accessToken,Q.refreshToken,((Rr=Q.user)==null?void 0:Rr.fullName)||v,Q.user,N)}catch(Q){d(Or(Q.message)),tn()}c(!1)},Js=async()=>{const I={};if((!k||k.trim().length<2)&&(I.fullName="Full name must be at least 2 characters"),Ua(v)||(I.email="Enter a valid email address"),sf(S)||(I.password="Password must be 8+ chars with uppercase, lowercase, and number"),S!==h&&(I.confirmPassword="Passwords do not match"),Object.keys(I).length){Ge(I);return}if(Te&&!M){d("Please complete the security check");return}c(!0),d("");try{await it("/auth/register",{method:"POST",body:JSON.stringify({email:v,password:S,fullName:k,...Te&&{turnstileToken:R}})}),f("Account created! Check your email to verify your account, then sign in."),Et(O.LOGIN)}catch(le){d(Or(le.message)),tn()}c(!1)},Ot=async()=>{if(!Ua(v)){Ge({email:"Enter a valid email address"});return}if(Te&&!M){d("Please complete the security check");return}c(!0),d("");try{await it("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:v,...Te&&{turnstileToken:R}})}),_e(60),Et(O.VERIFY_OTP),f("A 6-digit OTP has been sent to your email.")}catch(I){d(Or(I.message)),tn()}c(!1)},io=async()=>{if(!(ge>0)){c(!0),d("");try{await it("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:v})}),_e(60),f("A new OTP has been sent.")}catch(I){d(Or(I.message))}c(!1)}},Ir=async()=>{if(E.length!==6){d("Enter the 6-digit code from your email");return}c(!0),d("");try{const I=await it("/auth/verify-otp",{method:"POST",body:JSON.stringify({email:v,otp:E})});D(I.resetToken),Et(O.RESET_PASSWORD)}catch(I){d(Or(I.message)),j("")}c(!1)},ht=async()=>{const I={};if(sf(S)||(I.password="Password must be 8+ chars with uppercase, lowercase, and number"),S!==h&&(I.confirmPassword="Passwords do not match"),Object.keys(I).length){Ge(I);return}c(!0),d("");try{await it("/auth/reset-password",{method:"POST",body:JSON.stringify({token:T,newPassword:S})}),f("Password reset successfully! Please sign in."),m(""),g(""),Et(O.LOGIN)}catch(le){d(Or(le.message))}c(!1)},Yn=async I=>{var le,Rr;if(!no){d("Social login is not available. Please use email and password.");return}c(!0),d("");try{const Q=await db(I);if(!(Q!=null&&Q.accessToken))throw new Error("Social login failed.");localStorage.setItem("cv_token",Q.accessToken),Q.refreshToken&&localStorage.setItem("cv_refreshToken",Q.refreshToken),localStorage.setItem("cv_user",((le=Q.user)==null?void 0:le.fullName)||v),e(Q.accessToken,Q.refreshToken,((Rr=Q.user)==null?void 0:Rr.fullName)||v,Q.user,!0)}catch(Q){d(Or(Q.message))}c(!1)},Tr={[O.LOGIN]:{title:"Welcome back",sub:`Sign in to ${be.name}`},[O.REGISTER]:{title:"Create account",sub:"Start your CloudVault journey"},[O.FORGOT]:{title:"Forgot password?",sub:"We'll send a code to your email"},[O.VERIFY_OTP]:{title:"Enter your code",sub:`Sent to ${v||"your email"}`},[O.RESET_PASSWORD]:{title:"New password",sub:"Choose a strong password"}},rt=!a&&(!Te||M||i===O.VERIFY_OTP||i===O.RESET_PASSWORD),rn=()=>{i===O.LOGIN?er():i===O.REGISTER?Js():i===O.FORGOT?Ot():i===O.VERIFY_OTP?Ir():i===O.RESET_PASSWORD&&ht()},Z={[O.LOGIN]:"Sign in",[O.REGISTER]:"Create account",[O.FORGOT]:"Send code",[O.VERIFY_OTP]:"Verify code",[O.RESET_PASSWORD]:"Reset password"}[i];return s.jsxs("div",{className:"auth-splash",children:[s.jsx("style",{children:Vr}),s.jsx("style",{children:`
        :root {
          --cv-bg-card: #141414;
          --cv-surface-raised: #1a1a1a;
          --cv-border: rgba(255,255,255,.08);
          --cv-border-strong: rgba(217,0,7,.4);
          --cv-text: #ffffff;
          --cv-text-muted: #737373;
          --cv-accent: #d90007;
          --cv-danger: #ef4444;
          --cv-radius-lg: 14px;
        }
        @keyframes cv-spin { to { transform: rotate(360deg); } }
        @keyframes cv-slide-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes cv-fade { from { opacity: 0; } to { opacity: 1; } }
        .cv-auth-card { animation: cv-slide-in 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .cv-auth-step { animation: cv-fade 0.3s ease; }
      `}),s.jsxs("div",{className:"auth-cloud-logo",style:{marginBottom:48},children:[s.jsx("div",{className:"auth-cloud-bg"}),s.jsx("div",{className:"auth-mega-mark",children:s.jsx("div",{className:"auth-mega-circle",children:s.jsx("img",{src:be.logoImage,alt:""})})})]}),s.jsxs("div",{className:"cv-auth-card",style:{width:"100%",maxWidth:440,background:"rgba(20, 20, 20, .96)",borderRadius:20,border:"1px solid rgba(255,255,255,.08)",boxShadow:"0 32px 80px rgba(0,0,0,0.55)",overflow:"hidden",position:"relative"},children:[s.jsx("div",{style:{height:3,background:"var(--cv-accent)",position:"absolute",top:0,left:0,right:0}}),s.jsxs("div",{style:{padding:"36px 32px 32px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:28,justifyContent:"center"},children:[s.jsx(pb,{size:36}),s.jsx("div",{style:{fontSize:18,fontWeight:800,color:"var(--cv-text)",letterSpacing:"-0.02em"},children:be.name})]}),i!==O.LOGIN&&s.jsx("button",{type:"button",onClick:Ye,style:{display:"flex",alignItems:"center",gap:6,marginBottom:24,background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,padding:"4px 0",transition:"color 0.15s"},onMouseEnter:I=>I.currentTarget.style.color="var(--text)",onMouseLeave:I=>I.currentTarget.style.color="var(--text-muted)",children:"← Back"}),s.jsxs("div",{className:"cv-auth-step",style:{marginBottom:28},children:[s.jsx("h1",{style:{fontSize:26,fontWeight:800,color:"var(--text)",letterSpacing:"-0.03em",margin:"0 0 4px"},children:Tr[i].title}),s.jsx("p",{style:{fontSize:14,color:"var(--text-muted)",margin:0,fontWeight:500},children:Tr[i].sub})]}),(i===O.LOGIN||i===O.REGISTER)&&s.jsx("div",{style:{display:"flex",gap:4,background:"var(--surface-raised)",borderRadius:14,padding:4,marginBottom:24,border:"1px solid var(--border)"},children:[O.LOGIN,O.REGISTER].map(I=>s.jsx("button",{type:"button",onClick:()=>Et(I),style:{flex:1,padding:"9px 12px",borderRadius:10,border:"none",background:i===I?"var(--bg-card)":"transparent",color:i===I?"var(--text)":"var(--text-muted)",fontSize:14,fontWeight:i===I?700:500,cursor:"pointer",boxShadow:i===I?"0 2px 8px rgba(0,0,0,0.08)":"none",transition:"all 0.18s ease"},children:I===O.LOGIN?"Sign In":"Sign Up"},I))}),s.jsxs("div",{className:"cv-auth-step",style:{display:"flex",flexDirection:"column",gap:14},children:[i===O.REGISTER&&s.jsx(Io,{label:"Full Name",value:k,onChange:I=>{_(I.target.value),Ge(le=>({...le,fullName:""}))},placeholder:"Jane Smith",autoFocus:!0,error:tt.fullName}),[O.LOGIN,O.REGISTER,O.FORGOT].includes(i)&&s.jsx(Io,{label:"Email Address",type:"email",value:v,onChange:I=>{b(I.target.value),Ge(le=>({...le,email:""}))},placeholder:"you@example.com",autoFocus:i===O.LOGIN||i===O.FORGOT,error:tt.email}),[O.LOGIN,O.REGISTER,O.RESET_PASSWORD].includes(i)&&s.jsxs("div",{children:[s.jsxs("div",{style:{position:"relative"},children:[s.jsx(Io,{label:"Password",type:F?"text":"password",value:S,onChange:I=>{m(I.target.value),Ge(le=>({...le,password:""}))},placeholder:i===O.LOGIN?"Your password":"Min 8 chars, A-Z, 0-9",autoFocus:i===O.RESET_PASSWORD,error:tt.password}),s.jsx("button",{type:"button",onClick:()=>X(I=>!I),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:tt.password?-10:0},children:F?"Hide":"Show"})]}),(i===O.REGISTER||i===O.RESET_PASSWORD)&&s.jsx(mb,{password:S})]}),[O.REGISTER,O.RESET_PASSWORD].includes(i)&&s.jsxs("div",{style:{position:"relative"},children:[s.jsx(Io,{label:"Confirm Password",type:ie?"text":"password",value:h,onChange:I=>{g(I.target.value),Ge(le=>({...le,confirmPassword:""}))},placeholder:"Repeat your password",error:tt.confirmPassword}),s.jsx("button",{type:"button",onClick:()=>ve(I=>!I),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:tt.confirmPassword?-10:0},children:ie?"Hide":"Show"})]}),i===O.VERIFY_OTP&&s.jsxs("div",{children:[s.jsx(hb,{value:E,onChange:j}),s.jsxs("div",{style:{textAlign:"center",marginTop:12},children:[s.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:["Didn't get the code?"," "]}),s.jsx("button",{type:"button",onClick:io,disabled:ge>0||a,style:{background:"none",border:"none",cursor:ge>0?"default":"pointer",color:ge>0?"var(--text-muted)":"var(--accent-blue)",fontSize:13,fontWeight:600},children:ge>0?`Resend in ${ge}s`:"Resend"})]})]}),i===O.LOGIN&&s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},children:[s.jsx("input",{type:"checkbox",checked:N,onChange:I=>U(I.target.checked),style:{width:16,height:16,accentColor:"var(--accent-blue)"}}),s.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:500},children:"Remember me"})]}),s.jsx("button",{type:"button",onClick:()=>Et(O.FORGOT),style:{background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:13,fontWeight:600},children:"Forgot password?"})]})]}),l&&s.jsxs("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:12,color:"#ef4444",fontSize:13,fontWeight:500,lineHeight:1.5},children:[l,l.includes("verify your email")&&s.jsx("button",{type:"button",onClick:async()=>{try{await it("/auth/resend-verification",{method:"POST",body:JSON.stringify({email:v})}),f("Verification email resent. Check your inbox."),d("")}catch{}},style:{display:"block",marginTop:8,background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:12,fontWeight:600},children:"Resend verification email →"})]}),u&&s.jsx("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:12,color:"#10b981",fontSize:13,fontWeight:500,lineHeight:1.5},children:u}),Te&&[O.LOGIN,O.REGISTER,O.FORGOT].includes(i)&&s.jsx("div",{style:{marginTop:16},children:s.jsx(ub,{onVerified:I=>{L(I),q(!0)},onError:I=>{d(I||"Security check failed. Please refresh."),q(!1)},onExpire:()=>{L(null),q(!1)}},re)}),s.jsx("button",{type:"button",onClick:rn,disabled:!rt,style:{width:"100%",marginTop:20,padding:"14px 20px",background:rt?"var(--cv-accent)":"var(--surface-raised)",color:rt?"#fff":"var(--text-muted)",border:"none",borderRadius:14,fontSize:15,fontWeight:700,cursor:rt?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"all 0.2s ease",boxShadow:rt?"0 16px 34px rgba(217,0,7,0.28)":"none",transform:"translateY(0)"},onMouseEnter:I=>{rt&&(I.currentTarget.style.transform="translateY(-1px)")},onMouseLeave:I=>{I.currentTarget.style.transform="translateY(0)"},children:a?s.jsx(fb,{}):Z}),[O.LOGIN,O.REGISTER].includes(i)&&s.jsxs("div",{style:{marginTop:20},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:"or"}),s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[{id:"google",label:"Google",icon:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),s.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),s.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),s.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})},{id:"github",label:"GitHub",icon:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})})},{id:"microsoft",label:"Microsoft",icon:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M10 0H0v10h10V0z",fill:"#F25022"}),s.jsx("path",{d:"M21 0H11v10h10V0z",fill:"#7FBA00"}),s.jsx("path",{d:"M10 11H0v10h10V11z",fill:"#00A4EF"}),s.jsx("path",{d:"M21 11H11v10h10V11z",fill:"#FFB900"})]})}].map(I=>s.jsx(gb,{label:I.label,icon:I.icon,disabled:a||!no,onClick:()=>Yn(I.id)},I.id))})]}),i===O.LOGIN&&s.jsx("div",{style:{textAlign:"center",marginTop:20},children:s.jsx("button",{type:"button",onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:500},children:"← Back to home"})})]})]})]})}function yb({size:e=22}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function _g({file:e,token:t,onClose:r,customFetchBlob:n}){const[i,o]=y.useState(null),[a,c]=y.useState(""),[l,d]=y.useState(!0),[u,f]=y.useState(""),[p,x]=y.useState(1),[v,b]=y.useState(0),[S,m]=y.useState(!1),h=g1(e.mimeType);y.useEffect(()=>{let _=null,E=!1;return(async()=>{d(!0),f("");try{const j=n?await n():await Hc(e.id,t,{disposition:"preview"});if(E)return;if(h==="text"){const T=await j.text();c(T)}else _=URL.createObjectURL(j),o(_)}catch(j){E||f(j.message||"Preview failed")}finally{E||d(!1)}})(),()=>{E=!0,_&&URL.revokeObjectURL(_)}},[e.id,t,h]);const g=(_,E,j=!1)=>s.jsx("button",{type:"button",onClick:E,disabled:j,style:{padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",cursor:j?"not-allowed":"pointer",fontFamily:"var(--font)",fontSize:12,fontWeight:600},children:_}),k=()=>l?s.jsx("div",{style:{padding:48,textAlign:"center"},children:s.jsx(yb,{size:32})}):u?s.jsx("p",{style:{color:"var(--danger)",padding:24,textAlign:"center"},children:u}):h==="image"&&i?s.jsx("img",{src:i,alt:e.name,style:{maxWidth:S?"96vw":"80vw",maxHeight:S?"90vh":"70vh",borderRadius:12,transform:`scale(${p}) rotate(${v}deg)`,transition:"transform .2s ease"}}):h==="pdf"&&i?s.jsx("iframe",{src:i,title:e.name,style:{width:"75vw",height:"75vh",border:"none",borderRadius:12}}):h==="video"&&i?s.jsx("video",{src:i,controls:!0,style:{maxWidth:"80vw",maxHeight:"75vh",borderRadius:12}}):h==="audio"&&i?s.jsx("audio",{src:i,controls:!0,style:{width:"min(480px, 80vw)"}}):h==="text"?s.jsx("pre",{style:{maxWidth:"80vw",maxHeight:"70vh",overflow:"auto",padding:16,background:"var(--bg-card)",borderRadius:12,color:"var(--text)",fontSize:13,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:a}):s.jsx("p",{style:{padding:24,color:"var(--text-muted)"},children:"Preview not available for this file type."});return s.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:1e3,background:S?"#000":"rgba(0,0,0,.88)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)",animation:"fadeIn .2s ease"},children:s.jsxs("div",{onClick:_=>_.stopPropagation(),style:{background:S?"transparent":"var(--bg-primary)",borderRadius:S?0:20,border:S?"none":"1.5px solid var(--border)",maxWidth:S?"100vw":"95vw",maxHeight:S?"100vh":"95vh",width:S?"100%":void 0,height:S?"100%":void 0,overflow:"auto",padding:S?16:24,boxShadow:S?"none":"var(--shadow)",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:12},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:700,fontSize:16,flex:1,overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),h==="image"&&s.jsxs("div",{style:{display:"flex",gap:6},children:[g("−",()=>x(_=>Math.max(.25,_-.25))),g("+",()=>x(_=>Math.min(4,_+.25))),g("↻",()=>b(_=>(_+90)%360)),g(S?"⊡":"⛶",()=>m(_=>!_))]}),s.jsx("button",{type:"button",onClick:r,style:{background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:8,color:"var(--text-secondary)",cursor:"pointer",width:32,height:32},children:"✕"})]}),s.jsx("div",{style:{display:"flex",justifyContent:"center"},children:k()})]})})}function xb({fileId:e,token:t,alt:r,mimeType:n}){const[i,o]=y.useState(null),[a,c]=y.useState(!1);return y.useEffect(()=>{if(!e||!t||!(n!=null&&n.startsWith("image/")))return;let l=null,d=!1;return Hc(e,t,{disposition:"preview"}).then(u=>{d||(l=URL.createObjectURL(u),o(l))}).catch(()=>{d||c(!0)}),()=>{d=!0,l&&URL.revokeObjectURL(l)}},[e,t,n]),!(n!=null&&n.startsWith("image/"))||a?s.jsx("div",{style:{fontSize:44,display:"flex"},children:Ji(n)}):i?s.jsx("img",{src:i,alt:r,style:{width:"100%",height:"100%",objectFit:"cover"},onError:()=>c(!0)}):s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite"}})}function wb({trashedFiles:e,trashedFolders:t,loading:r,onRestoreFile:n,onRestoreFolder:i,onPermanentDelete:o,onEmptyTrash:a,onBack:c}){return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:c,style:bb,children:"← Back to My Cloud"}),s.jsx("h2",{style:{color:"var(--text)",fontWeight:800,fontSize:22,marginTop:8},children:"Trash"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"Items in trash still count toward storage until permanently deleted."})]}),(e.length>0||t.length>0)&&s.jsx("button",{type:"button",onClick:a,style:kb,children:"Empty trash"})]}),r?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading trash…"}):e.length===0&&t.length===0?s.jsxs("div",{style:{textAlign:"center",padding:64,color:"var(--text-muted)",border:"1px dashed var(--border)",borderRadius:16},children:[s.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🗑️"}),s.jsx("div",{style:{fontWeight:700},children:"Trash is empty"})]}):s.jsxs(s.Fragment,{children:[t.length>0&&s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FOLDERS"}),t.map(l=>s.jsx(af,{icon:"📁",name:l.name,meta:"Folder",onRestore:()=>i(l.id)},l.id))]}),e.length>0&&s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FILES"}),e.map(l=>s.jsx(af,{icon:Ji(l.mimeType),name:l.name,meta:`${Ae(l.size)} · ${qi(l.trashedAt||l.deletedAt)}`,onRestore:()=>n(l.id),onDelete:()=>o(l)},l.id))]})]})]})}function af({icon:e,name:t,meta:r,onRestore:n,onDelete:i}){return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,marginBottom:8},children:[s.jsx("span",{style:{fontSize:24},children:e}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:r})]}),s.jsx("button",{type:"button",onClick:n,style:lf,children:"Restore"}),i&&s.jsx("button",{type:"button",onClick:i,style:{...lf,color:"var(--danger)"},children:"Delete forever"})]})}const bb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"},kb={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontFamily:"var(--font)"},lf={padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--font)"};function Sb({file:e,mode:t,folders:r,currentFolderId:n,onConfirm:i,onCancel:o}){const[a,c]=y.useState(n||""),[l,d]=y.useState(e.name),u=Eg(r);return s.jsx("div",{onClick:o,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:f=>f.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(420px, 92vw)",animation:"scaleIn .2s ease"},children:[s.jsxs("h3",{style:{color:"var(--text)",fontWeight:700,fontSize:18,marginBottom:8},children:[t==="move"?"Move":"Copy"," file"]}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:20},children:e.name}),s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"Destination folder"}),s.jsxs("select",{value:a,onChange:f=>c(f.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"},children:[s.jsx("option",{value:"",children:"My Cloud (root)"}),u.map(f=>s.jsxs("option",{value:f.id,disabled:f.id===e.folderId,children:["—".repeat(f.depth)," ",f.name]},f.id))]}),t==="copy"&&s.jsxs(s.Fragment,{children:[s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"New name (optional)"}),s.jsx("input",{value:l,onChange:f=>d(f.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"}})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:o,style:Cg,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>i({targetFolderId:a||null,newName:t==="copy"?l:void 0}),style:_b,children:t==="move"?"Move":"Copy"})]})]})})}function Eg(e,t=0){var n;const r=[];for(const i of e)r.push({...i,depth:t}),(n=i.children)!=null&&n.length&&r.push(...Eg(i.children,t+1));return r}const Cg={padding:"10px 20px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},_b={...Cg,border:"none",background:"var(--accent)",color:"#fff"};function Eb({file:e,allTags:t,onSave:r,onCancel:n}){const[i,o]=y.useState(e.tags||[]),[a,c]=y.useState(""),l=d=>{const u=d.trim().toLowerCase();!u||i.includes(u)||i.length>=20||(o([...i,u]),c(""))};return s.jsx("div",{onClick:n,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:d=>d.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(440px, 92vw)"},children:[s.jsx("h3",{style:{color:"var(--text)",fontWeight:700,marginBottom:4},children:"Edit tags"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:16},children:e.name}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12},children:i.map(d=>s.jsxs("span",{style:{background:"rgba(240,22,58,.15)",color:"var(--accent)",padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[d,s.jsx("button",{type:"button",onClick:()=>o(i.filter(u=>u!==d)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:"×"})]},d))}),s.jsx("input",{value:a,onChange:d=>c(d.target.value),onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),l(a))},placeholder:"Add tag and press Enter",style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",marginBottom:12}}),t.length>0&&s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6},children:"Suggestions"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:t.filter(d=>!i.includes(d)).slice(0,12).map(d=>s.jsxs("button",{type:"button",onClick:()=>l(d),style:{padding:"4px 10px",borderRadius:20,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",fontSize:12,cursor:"pointer"},children:["+ ",d]},d))})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:n,style:jg,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>r(i),style:Cb,children:"Save tags"})]})]})})}const jg={padding:"10px 18px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},Cb={...jg,border:"none",background:"var(--accent)",color:"#fff"};var jb=Object.defineProperty,Is=Object.getOwnPropertySymbols,Ig=Object.prototype.hasOwnProperty,Tg=Object.prototype.propertyIsEnumerable,cf=(e,t,r)=>t in e?jb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Yl=(e,t)=>{for(var r in t||(t={}))Ig.call(t,r)&&cf(e,r,t[r]);if(Is)for(var r of Is(t))Tg.call(t,r)&&cf(e,r,t[r]);return e},Ql=(e,t)=>{var r={};for(var n in e)Ig.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Is)for(var n of Is(e))t.indexOf(n)<0&&Tg.call(e,n)&&(r[n]=e[n]);return r};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Jr;(e=>{const t=class W{constructor(l,d,u,f){if(this.version=l,this.errorCorrectionLevel=d,this.modules=[],this.isFunction=[],l<W.MIN_VERSION||l>W.MAX_VERSION)throw new RangeError("Version value out of range");if(f<-1||f>7)throw new RangeError("Mask value out of range");this.size=l*4+17;let p=[];for(let v=0;v<this.size;v++)p.push(!1);for(let v=0;v<this.size;v++)this.modules.push(p.slice()),this.isFunction.push(p.slice());this.drawFunctionPatterns();const x=this.addEccAndInterleave(u);if(this.drawCodewords(x),f==-1){let v=1e9;for(let b=0;b<8;b++){this.applyMask(b),this.drawFormatBits(b);const S=this.getPenaltyScore();S<v&&(f=b,v=S),this.applyMask(b)}}i(0<=f&&f<=7),this.mask=f,this.applyMask(f),this.drawFormatBits(f),this.isFunction=[]}static encodeText(l,d){const u=e.QrSegment.makeSegments(l);return W.encodeSegments(u,d)}static encodeBinary(l,d){const u=e.QrSegment.makeBytes(l);return W.encodeSegments([u],d)}static encodeSegments(l,d,u=1,f=40,p=-1,x=!0){if(!(W.MIN_VERSION<=u&&u<=f&&f<=W.MAX_VERSION)||p<-1||p>7)throw new RangeError("Invalid value");let v,b;for(v=u;;v++){const g=W.getNumDataCodewords(v,d)*8,k=a.getTotalBits(l,v);if(k<=g){b=k;break}if(v>=f)throw new RangeError("Data too long")}for(const g of[W.Ecc.MEDIUM,W.Ecc.QUARTILE,W.Ecc.HIGH])x&&b<=W.getNumDataCodewords(v,g)*8&&(d=g);let S=[];for(const g of l){r(g.mode.modeBits,4,S),r(g.numChars,g.mode.numCharCountBits(v),S);for(const k of g.getData())S.push(k)}i(S.length==b);const m=W.getNumDataCodewords(v,d)*8;i(S.length<=m),r(0,Math.min(4,m-S.length),S),r(0,(8-S.length%8)%8,S),i(S.length%8==0);for(let g=236;S.length<m;g^=253)r(g,8,S);let h=[];for(;h.length*8<S.length;)h.push(0);return S.forEach((g,k)=>h[k>>>3]|=g<<7-(k&7)),new W(v,d,h,p)}getModule(l,d){return 0<=l&&l<this.size&&0<=d&&d<this.size&&this.modules[d][l]}getModules(){return this.modules}drawFunctionPatterns(){for(let u=0;u<this.size;u++)this.setFunctionModule(6,u,u%2==0),this.setFunctionModule(u,6,u%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const l=this.getAlignmentPatternPositions(),d=l.length;for(let u=0;u<d;u++)for(let f=0;f<d;f++)u==0&&f==0||u==0&&f==d-1||u==d-1&&f==0||this.drawAlignmentPattern(l[u],l[f]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(l){const d=this.errorCorrectionLevel.formatBits<<3|l;let u=d;for(let p=0;p<10;p++)u=u<<1^(u>>>9)*1335;const f=(d<<10|u)^21522;i(f>>>15==0);for(let p=0;p<=5;p++)this.setFunctionModule(8,p,n(f,p));this.setFunctionModule(8,7,n(f,6)),this.setFunctionModule(8,8,n(f,7)),this.setFunctionModule(7,8,n(f,8));for(let p=9;p<15;p++)this.setFunctionModule(14-p,8,n(f,p));for(let p=0;p<8;p++)this.setFunctionModule(this.size-1-p,8,n(f,p));for(let p=8;p<15;p++)this.setFunctionModule(8,this.size-15+p,n(f,p));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let l=this.version;for(let u=0;u<12;u++)l=l<<1^(l>>>11)*7973;const d=this.version<<12|l;i(d>>>18==0);for(let u=0;u<18;u++){const f=n(d,u),p=this.size-11+u%3,x=Math.floor(u/3);this.setFunctionModule(p,x,f),this.setFunctionModule(x,p,f)}}drawFinderPattern(l,d){for(let u=-4;u<=4;u++)for(let f=-4;f<=4;f++){const p=Math.max(Math.abs(f),Math.abs(u)),x=l+f,v=d+u;0<=x&&x<this.size&&0<=v&&v<this.size&&this.setFunctionModule(x,v,p!=2&&p!=4)}}drawAlignmentPattern(l,d){for(let u=-2;u<=2;u++)for(let f=-2;f<=2;f++)this.setFunctionModule(l+f,d+u,Math.max(Math.abs(f),Math.abs(u))!=1)}setFunctionModule(l,d,u){this.modules[d][l]=u,this.isFunction[d][l]=!0}addEccAndInterleave(l){const d=this.version,u=this.errorCorrectionLevel;if(l.length!=W.getNumDataCodewords(d,u))throw new RangeError("Invalid argument");const f=W.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][d],p=W.ECC_CODEWORDS_PER_BLOCK[u.ordinal][d],x=Math.floor(W.getNumRawDataModules(d)/8),v=f-x%f,b=Math.floor(x/f);let S=[];const m=W.reedSolomonComputeDivisor(p);for(let g=0,k=0;g<f;g++){let _=l.slice(k,k+b-p+(g<v?0:1));k+=_.length;const E=W.reedSolomonComputeRemainder(_,m);g<v&&_.push(0),S.push(_.concat(E))}let h=[];for(let g=0;g<S[0].length;g++)S.forEach((k,_)=>{(g!=b-p||_>=v)&&h.push(k[g])});return i(h.length==x),h}drawCodewords(l){if(l.length!=Math.floor(W.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let d=0;for(let u=this.size-1;u>=1;u-=2){u==6&&(u=5);for(let f=0;f<this.size;f++)for(let p=0;p<2;p++){const x=u-p,b=(u+1&2)==0?this.size-1-f:f;!this.isFunction[b][x]&&d<l.length*8&&(this.modules[b][x]=n(l[d>>>3],7-(d&7)),d++)}}i(d==l.length*8)}applyMask(l){if(l<0||l>7)throw new RangeError("Mask value out of range");for(let d=0;d<this.size;d++)for(let u=0;u<this.size;u++){let f;switch(l){case 0:f=(u+d)%2==0;break;case 1:f=d%2==0;break;case 2:f=u%3==0;break;case 3:f=(u+d)%3==0;break;case 4:f=(Math.floor(u/3)+Math.floor(d/2))%2==0;break;case 5:f=u*d%2+u*d%3==0;break;case 6:f=(u*d%2+u*d%3)%2==0;break;case 7:f=((u+d)%2+u*d%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[d][u]&&f&&(this.modules[d][u]=!this.modules[d][u])}}getPenaltyScore(){let l=0;for(let p=0;p<this.size;p++){let x=!1,v=0,b=[0,0,0,0,0,0,0];for(let S=0;S<this.size;S++)this.modules[p][S]==x?(v++,v==5?l+=W.PENALTY_N1:v>5&&l++):(this.finderPenaltyAddHistory(v,b),x||(l+=this.finderPenaltyCountPatterns(b)*W.PENALTY_N3),x=this.modules[p][S],v=1);l+=this.finderPenaltyTerminateAndCount(x,v,b)*W.PENALTY_N3}for(let p=0;p<this.size;p++){let x=!1,v=0,b=[0,0,0,0,0,0,0];for(let S=0;S<this.size;S++)this.modules[S][p]==x?(v++,v==5?l+=W.PENALTY_N1:v>5&&l++):(this.finderPenaltyAddHistory(v,b),x||(l+=this.finderPenaltyCountPatterns(b)*W.PENALTY_N3),x=this.modules[S][p],v=1);l+=this.finderPenaltyTerminateAndCount(x,v,b)*W.PENALTY_N3}for(let p=0;p<this.size-1;p++)for(let x=0;x<this.size-1;x++){const v=this.modules[p][x];v==this.modules[p][x+1]&&v==this.modules[p+1][x]&&v==this.modules[p+1][x+1]&&(l+=W.PENALTY_N2)}let d=0;for(const p of this.modules)d=p.reduce((x,v)=>x+(v?1:0),d);const u=this.size*this.size,f=Math.ceil(Math.abs(d*20-u*10)/u)-1;return i(0<=f&&f<=9),l+=f*W.PENALTY_N4,i(0<=l&&l<=2568888),l}getAlignmentPatternPositions(){if(this.version==1)return[];{const l=Math.floor(this.version/7)+2,d=this.version==32?26:Math.ceil((this.version*4+4)/(l*2-2))*2;let u=[6];for(let f=this.size-7;u.length<l;f-=d)u.splice(1,0,f);return u}}static getNumRawDataModules(l){if(l<W.MIN_VERSION||l>W.MAX_VERSION)throw new RangeError("Version number out of range");let d=(16*l+128)*l+64;if(l>=2){const u=Math.floor(l/7)+2;d-=(25*u-10)*u-55,l>=7&&(d-=36)}return i(208<=d&&d<=29648),d}static getNumDataCodewords(l,d){return Math.floor(W.getNumRawDataModules(l)/8)-W.ECC_CODEWORDS_PER_BLOCK[d.ordinal][l]*W.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][l]}static reedSolomonComputeDivisor(l){if(l<1||l>255)throw new RangeError("Degree out of range");let d=[];for(let f=0;f<l-1;f++)d.push(0);d.push(1);let u=1;for(let f=0;f<l;f++){for(let p=0;p<d.length;p++)d[p]=W.reedSolomonMultiply(d[p],u),p+1<d.length&&(d[p]^=d[p+1]);u=W.reedSolomonMultiply(u,2)}return d}static reedSolomonComputeRemainder(l,d){let u=d.map(f=>0);for(const f of l){const p=f^u.shift();u.push(0),d.forEach((x,v)=>u[v]^=W.reedSolomonMultiply(x,p))}return u}static reedSolomonMultiply(l,d){if(l>>>8||d>>>8)throw new RangeError("Byte out of range");let u=0;for(let f=7;f>=0;f--)u=u<<1^(u>>>7)*285,u^=(d>>>f&1)*l;return i(u>>>8==0),u}finderPenaltyCountPatterns(l){const d=l[1];i(d<=this.size*3);const u=d>0&&l[2]==d&&l[3]==d*3&&l[4]==d&&l[5]==d;return(u&&l[0]>=d*4&&l[6]>=d?1:0)+(u&&l[6]>=d*4&&l[0]>=d?1:0)}finderPenaltyTerminateAndCount(l,d,u){return l&&(this.finderPenaltyAddHistory(d,u),d=0),d+=this.size,this.finderPenaltyAddHistory(d,u),this.finderPenaltyCountPatterns(u)}finderPenaltyAddHistory(l,d){d[0]==0&&(l+=this.size),d.pop(),d.unshift(l)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;function r(c,l,d){if(l<0||l>31||c>>>l)throw new RangeError("Value out of range");for(let u=l-1;u>=0;u--)d.push(c>>>u&1)}function n(c,l){return(c>>>l&1)!=0}function i(c){if(!c)throw new Error("Assertion error")}const o=class fe{constructor(l,d,u){if(this.mode=l,this.numChars=d,this.bitData=u,d<0)throw new RangeError("Invalid argument");this.bitData=u.slice()}static makeBytes(l){let d=[];for(const u of l)r(u,8,d);return new fe(fe.Mode.BYTE,l.length,d)}static makeNumeric(l){if(!fe.isNumeric(l))throw new RangeError("String contains non-numeric characters");let d=[];for(let u=0;u<l.length;){const f=Math.min(l.length-u,3);r(parseInt(l.substring(u,u+f),10),f*3+1,d),u+=f}return new fe(fe.Mode.NUMERIC,l.length,d)}static makeAlphanumeric(l){if(!fe.isAlphanumeric(l))throw new RangeError("String contains unencodable characters in alphanumeric mode");let d=[],u;for(u=0;u+2<=l.length;u+=2){let f=fe.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u))*45;f+=fe.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u+1)),r(f,11,d)}return u<l.length&&r(fe.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u)),6,d),new fe(fe.Mode.ALPHANUMERIC,l.length,d)}static makeSegments(l){return l==""?[]:fe.isNumeric(l)?[fe.makeNumeric(l)]:fe.isAlphanumeric(l)?[fe.makeAlphanumeric(l)]:[fe.makeBytes(fe.toUtf8ByteArray(l))]}static makeEci(l){let d=[];if(l<0)throw new RangeError("ECI assignment value out of range");if(l<128)r(l,8,d);else if(l<16384)r(2,2,d),r(l,14,d);else if(l<1e6)r(6,3,d),r(l,21,d);else throw new RangeError("ECI assignment value out of range");return new fe(fe.Mode.ECI,0,d)}static isNumeric(l){return fe.NUMERIC_REGEX.test(l)}static isAlphanumeric(l){return fe.ALPHANUMERIC_REGEX.test(l)}getData(){return this.bitData.slice()}static getTotalBits(l,d){let u=0;for(const f of l){const p=f.mode.numCharCountBits(d);if(f.numChars>=1<<p)return 1/0;u+=4+p+f.bitData.length}return u}static toUtf8ByteArray(l){l=encodeURI(l);let d=[];for(let u=0;u<l.length;u++)l.charAt(u)!="%"?d.push(l.charCodeAt(u)):(d.push(parseInt(l.substring(u+1,u+3),16)),u+=2);return d}};o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let a=o;e.QrSegment=o})(Jr||(Jr={}));(e=>{(t=>{const r=class{constructor(i,o){this.ordinal=i,this.formatBits=o}};r.LOW=new r(0,1),r.MEDIUM=new r(1,0),r.QUARTILE=new r(2,3),r.HIGH=new r(3,2),t.Ecc=r})(e.QrCode||(e.QrCode={}))})(Jr||(Jr={}));(e=>{(t=>{const r=class{constructor(i,o){this.modeBits=i,this.numBitsCharCount=o}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};r.NUMERIC=new r(1,[10,12,14]),r.ALPHANUMERIC=new r(2,[9,11,13]),r.BYTE=new r(4,[8,16,16]),r.KANJI=new r(8,[8,10,12]),r.ECI=new r(7,[0,0,0]),t.Mode=r})(e.QrSegment||(e.QrSegment={}))})(Jr||(Jr={}));var xn=Jr;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Ib={L:xn.QrCode.Ecc.LOW,M:xn.QrCode.Ecc.MEDIUM,Q:xn.QrCode.Ecc.QUARTILE,H:xn.QrCode.Ecc.HIGH},Rg=128,Ng="L",Pg="#FFFFFF",Ag="#000000",Og=!1,Lg=1,Tb=4,Rb=0,Nb=.1;function zg(e,t=0){const r=[];return e.forEach(function(n,i){let o=null;n.forEach(function(a,c){if(!a&&o!==null){r.push(`M${o+t} ${i+t}h${c-o}v1H${o+t}z`),o=null;return}if(c===n.length-1){if(!a)return;o===null?r.push(`M${c+t},${i+t} h1v1H${c+t}z`):r.push(`M${o+t},${i+t} h${c+1-o}v1H${o+t}z`);return}a&&o===null&&(o=c)})}),r.join("")}function Mg(e,t){return e.slice().map((r,n)=>n<t.y||n>=t.y+t.h?r:r.map((i,o)=>o<t.x||o>=t.x+t.w?i:!1))}function Pb(e,t,r,n){if(n==null)return null;const i=e.length+r*2,o=Math.floor(t*Nb),a=i/t,c=(n.width||o)*a,l=(n.height||o)*a,d=n.x==null?e.length/2-c/2:n.x*a,u=n.y==null?e.length/2-l/2:n.y*a,f=n.opacity==null?1:n.opacity;let p=null;if(n.excavate){let v=Math.floor(d),b=Math.floor(u),S=Math.ceil(c+d-v),m=Math.ceil(l+u-b);p={x:v,y:b,w:S,h:m}}const x=n.crossOrigin;return{x:d,y:u,h:l,w:c,excavation:p,opacity:f,crossOrigin:x}}function Ab(e,t){return t!=null?Math.max(Math.floor(t),0):e?Tb:Rb}function Dg({value:e,level:t,minVersion:r,includeMargin:n,marginSize:i,imageSettings:o,size:a,boostLevel:c}){let l=ye.useMemo(()=>{const v=(Array.isArray(e)?e:[e]).reduce((b,S)=>(b.push(...xn.QrSegment.makeSegments(S)),b),[]);return xn.QrCode.encodeSegments(v,Ib[t],r,void 0,void 0,c)},[e,t,r,c]);const{cells:d,margin:u,numCells:f,calculatedImageSettings:p}=ye.useMemo(()=>{let x=l.getModules();const v=Ab(n,i),b=x.length+v*2,S=Pb(x,a,v,o);return{cells:x,margin:v,numCells:b,calculatedImageSettings:S}},[l,a,o,n,i]);return{qrcode:l,margin:u,cells:d,numCells:f,calculatedImageSettings:p}}var Ob=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),Lb=ye.forwardRef(function(t,r){const n=t,{value:i,size:o=Rg,level:a=Ng,bgColor:c=Pg,fgColor:l=Ag,includeMargin:d=Og,minVersion:u=Lg,boostLevel:f,marginSize:p,imageSettings:x}=n,b=Ql(n,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:S}=b,m=Ql(b,["style"]),h=x==null?void 0:x.src,g=ye.useRef(null),k=ye.useRef(null),_=ye.useCallback(ie=>{g.current=ie,typeof r=="function"?r(ie):r&&(r.current=ie)},[r]),[E,j]=ye.useState(!1),{margin:T,cells:D,numCells:N,calculatedImageSettings:U}=Dg({value:i,level:a,minVersion:u,boostLevel:f,includeMargin:d,marginSize:p,imageSettings:x,size:o});ye.useEffect(()=>{if(g.current!=null){const ie=g.current,ve=ie.getContext("2d");if(!ve)return;let ge=D;const _e=k.current,R=U!=null&&_e!==null&&_e.complete&&_e.naturalHeight!==0&&_e.naturalWidth!==0;R&&U.excavation!=null&&(ge=Mg(D,U.excavation));const L=window.devicePixelRatio||1;ie.height=ie.width=o*L;const M=o/N*L;ve.scale(M,M),ve.fillStyle=c,ve.fillRect(0,0,N,N),ve.fillStyle=l,Ob?ve.fill(new Path2D(zg(ge,T))):D.forEach(function(q,re){q.forEach(function(ft,Ie){ft&&ve.fillRect(Ie+T,re+T,1,1)})}),U&&(ve.globalAlpha=U.opacity),R&&ve.drawImage(_e,U.x+T,U.y+T,U.w,U.h)}}),ye.useEffect(()=>{j(!1)},[h]);const F=Yl({height:o,width:o},S);let X=null;return h!=null&&(X=ye.createElement("img",{src:h,key:h,style:{display:"none"},onLoad:()=>{j(!0)},ref:k,crossOrigin:U==null?void 0:U.crossOrigin})),ye.createElement(ye.Fragment,null,ye.createElement("canvas",Yl({style:F,height:o,width:o,ref:_,role:"img"},m)),X)});Lb.displayName="QRCodeCanvas";var Fg=ye.forwardRef(function(t,r){const n=t,{value:i,size:o=Rg,level:a=Ng,bgColor:c=Pg,fgColor:l=Ag,includeMargin:d=Og,minVersion:u=Lg,boostLevel:f,title:p,marginSize:x,imageSettings:v}=n,b=Ql(n,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:S,cells:m,numCells:h,calculatedImageSettings:g}=Dg({value:i,level:a,minVersion:u,boostLevel:f,includeMargin:d,marginSize:x,imageSettings:v,size:o});let k=m,_=null;v!=null&&g!=null&&(g.excavation!=null&&(k=Mg(m,g.excavation)),_=ye.createElement("image",{href:v.src,height:g.h,width:g.w,x:g.x+S,y:g.y+S,preserveAspectRatio:"none",opacity:g.opacity,crossOrigin:g.crossOrigin}));const E=zg(k,S);return ye.createElement("svg",Yl({height:o,width:o,viewBox:`0 0 ${h} ${h}`,ref:r,role:"img"},b),!!p&&ye.createElement("title",null,p),ye.createElement("path",{fill:c,d:`M0,0 h${h}v${h}H0z`,shapeRendering:"crispEdges"}),ye.createElement("path",{fill:l,d:E,shapeRendering:"crispEdges"}),_)});Fg.displayName="QRCodeSVG";/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=e=>{const t=Mb(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ba={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Fb=y.createContext({}),Ub=()=>y.useContext(Fb),Bb=y.forwardRef(({color:e,size:t,strokeWidth:r,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...c},l)=>{const{size:d=24,strokeWidth:u=2,absoluteStrokeWidth:f=!1,color:p="currentColor",className:x=""}=Ub()??{},v=n??f?Number(r??u)*24/Number(t??d):r??u;return y.createElement("svg",{ref:l,...Ba,width:t??d??Ba.width,height:t??d??Ba.height,stroke:e??p,strokeWidth:v,className:Ug("lucide",x,i),...!o&&!Db(c)&&{"aria-hidden":"true"},...c},[...a.map(([b,S])=>y.createElement(b,S)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=(e,t)=>{const r=y.forwardRef(({className:n,...i},o)=>y.createElement(Bb,{ref:o,iconNode:t,className:Ug(`lucide-${zb(df(e))}`,`lucide-${e}`,n),...i}));return r.displayName=df(e),r};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],$b=qs("check",Wb);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Hb=qs("copy",Vb);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Yb=qs("mail",Gb);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Kb=qs("x",Qb),qb=()=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"}),s.jsx("path",{d:"M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"})]}),Jb=()=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"})}),Xb=()=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),s.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),s.jsx("circle",{cx:"4",cy:"4",r:"2"})]});function Zb({file:e,onShare:t,onCancel:r}){const[n,i]=y.useState("link"),[o,a]=y.useState("view"),[c,l]=y.useState(""),[d,u]=y.useState(""),[f,p]=y.useState(""),[x,v]=y.useState(""),[b,S]=y.useState(!1),[m,h]=y.useState(""),[g,k]=y.useState(!1),[_,E]=y.useState("settings"),j=async()=>{var N;S(!0);try{const U={shareType:n,permission:o,visibility:"protected",...d&&{password:d},...f&&{expiresAt:new Date(f).toISOString()},...x&&{maxViews:Number(x)},...n==="email"&&{recipientEmail:c,email:c}},F=await t(U),X=(F==null?void 0:F.shareUrl)||((N=F==null?void 0:F.data)==null?void 0:N.shareUrl);X&&h(X)}finally{S(!1)}},T=async()=>{var N;m&&(await((N=navigator.clipboard)==null?void 0:N.writeText(m)),k(!0),setTimeout(()=>k(!1),2e3))},D=N=>{if(!m)return;const U=encodeURIComponent(`Check out this file on CloudVault: ${e.name}`),F=encodeURIComponent(m),X={twitter:`https://twitter.com/intent/tweet?text=${U}&url=${F}`,whatsapp:`https://wa.me/?text=${U}%20${F}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${F}`,email:`mailto:?subject=${encodeURIComponent(`Shared File: ${e.name}`)}&body=${U}%0A${F}`};window.open(X[N],"_blank")};return s.jsx("div",{className:"share-modal-backdrop",onClick:r,style:{display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",zIndex:1e3},children:s.jsxs("div",{onClick:N=>N.stopPropagation(),style:{background:"var(--surface)",borderRadius:24,width:"100%",maxWidth:500,overflow:"hidden",boxShadow:"0 24px 80px rgba(0,0,0,0.4)",border:"1px solid var(--border)"},children:[s.jsxs("div",{style:{padding:"24px 32px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(255,255,255,0.02)"},children:[s.jsxs("div",{children:[s.jsxs("h3",{style:{margin:0,fontSize:20,fontWeight:700,color:"var(--text)"},children:['Share "',e.name,'"']}),s.jsx("p",{style:{margin:"4px 0 0",fontSize:13,color:"var(--text-muted)"},children:"Securely distribute this file"})]}),s.jsx("button",{onClick:r,style:{background:"transparent",border:"none",color:"var(--text-muted)",cursor:"pointer",padding:8,borderRadius:50},children:s.jsx(Kb,{size:20})})]}),s.jsx("div",{style:{padding:"32px"},children:m?s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",gap:16,marginBottom:24},children:[s.jsx("button",{onClick:()=>E("settings"),style:{flex:1,padding:"10px",borderRadius:12,background:_==="settings"?"var(--accent-blue)":"transparent",color:_==="settings"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:_==="settings"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Link"}),s.jsx("button",{onClick:()=>E("qr"),style:{flex:1,padding:"10px",borderRadius:12,background:_==="qr"?"var(--accent-blue)":"transparent",color:_==="qr"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:_==="qr"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"QR Code"}),s.jsx("button",{onClick:()=>E("social"),style:{flex:1,padding:"10px",borderRadius:12,background:_==="social"?"var(--accent-blue)":"transparent",color:_==="social"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:_==="social"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Social"})]}),_==="settings"&&s.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[s.jsxs("div",{style:{padding:20,background:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",borderRadius:16,marginBottom:24},children:[s.jsx("p",{style:{margin:"0 0 12px",fontSize:13,fontWeight:700,color:"var(--accent-blue)",textTransform:"uppercase",letterSpacing:.5},children:"Share Link Created"}),s.jsx("div",{style:{fontSize:14,wordBreak:"break-all",color:"var(--text)",lineHeight:1.5,marginBottom:16},children:m}),s.jsxs("button",{onClick:T,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",padding:14,borderRadius:12,background:g?"#10b981":"var(--accent-blue)",color:"#fff",border:"none",fontWeight:700,cursor:"pointer",transition:"0.2s"},children:[g?s.jsx($b,{size:18}):s.jsx(Hb,{size:18}),g?"Copied to Clipboard":"Copy Link"]})]}),s.jsx("button",{onClick:()=>h(""),style:{width:"100%",padding:14,background:"transparent",color:"var(--text)",border:"1px solid var(--border)",borderRadius:12,fontWeight:600,cursor:"pointer"},children:"Create another share"})]}),_==="qr"&&s.jsxs("div",{style:{animation:"fadeIn 0.3s ease",textAlign:"center"},children:[s.jsx("div",{style:{display:"inline-block",background:"#fff",padding:24,borderRadius:24,marginBottom:24,boxShadow:"0 10px 40px rgba(0,0,0,0.1)"},children:s.jsx(Fg,{value:m,size:200,level:"H",includeMargin:!1})}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,margin:0},children:"Scan this code to instantly open the shared file on your mobile device."})]}),_==="social"&&s.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:24,textAlign:"center"},children:"Share directly to your favorite platforms"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsxs("button",{onClick:()=>D("twitter"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(29, 161, 242, 0.1)",color:"#1da1f2",border:"1px solid rgba(29, 161, 242, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(Jb,{})," Twitter"]}),s.jsxs("button",{onClick:()=>D("whatsapp"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(37, 211, 102, 0.1)",color:"#25d366",border:"1px solid rgba(37, 211, 102, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(qb,{})," WhatsApp"]}),s.jsxs("button",{onClick:()=>D("linkedin"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(0, 119, 181, 0.1)",color:"#0077b5",border:"1px solid rgba(0, 119, 181, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(Xb,{})," LinkedIn"]}),s.jsxs("button",{onClick:()=>D("email"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(255, 255, 255, 0.05)",color:"var(--text)",border:"1px solid var(--border)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(Yb,{size:20})," Email App"]})]})]})]}):s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Share Method"}),s.jsxs("div",{style:{display:"flex",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,padding:4},children:[s.jsx("button",{onClick:()=>i("link"),style:{flex:1,padding:"8px",background:n==="link"?"var(--surface)":"transparent",color:n==="link"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:n==="link"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Link"}),s.jsx("button",{onClick:()=>i("email"),style:{flex:1,padding:"8px",background:n==="email"?"var(--surface)":"transparent",color:n==="email"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:n==="email"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Email"})]})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Permission"}),s.jsxs("select",{value:o,onChange:N=>a(N.target.value),style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"},children:[s.jsx("option",{value:"view",children:"View only"}),s.jsx("option",{value:"download",children:"View & Download"}),s.jsx("option",{value:"edit",children:"Edit metadata"})]})]})]}),n==="email"&&s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Recipient Email"}),s.jsx("input",{type:"email",value:c,onChange:N=>l(N.target.value),placeholder:"colleague@company.com",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Password Protection"}),s.jsx("input",{type:"password",value:d,onChange:N=>u(N.target.value),placeholder:"Optional",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"},autoComplete:"new-password"})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"View Limit"}),s.jsx("input",{type:"number",min:"1",value:x,onChange:N=>v(N.target.value),placeholder:"Unlimited",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Expiration Date"}),s.jsx("input",{type:"datetime-local",value:f,onChange:N=>p(N.target.value),style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),s.jsx("div",{style:{marginTop:8},children:s.jsx("button",{onClick:j,disabled:b||n==="email"&&!c,style:{width:"100%",padding:"16px",background:"var(--accent-blue)",color:"#fff",border:"none",borderRadius:14,fontWeight:700,fontSize:16,cursor:b||n==="email"&&!c?"not-allowed":"pointer",opacity:b||n==="email"&&!c?.6:1,transition:"0.2s"},children:b?"Generating Secure Link...":n==="email"?"Send Email Invitation":"Create Share Link"})})]})})]})})}function e2({stats:e,usage:t,onBack:r}){const n=(t==null?void 0:t.breakdown)||{},i=Object.values(n).reduce((c,l)=>c+l,0)||1,o=e.storageQuota>0?Math.min(100,Math.round(e.storageUsed/e.storageQuota*100)):0,a=[{key:"images",label:"Images",color:"#22c55e"},{key:"videos",label:"Videos",color:"#2563eb"},{key:"documents",label:"Documents",color:"#f59e0b"},{key:"audio",label:"Audio",color:"#a78bfa"},{key:"other",label:"Other",color:"#94a3b8"}];return s.jsxs("div",{style:{animation:"fadeIn .3s ease"},children:[s.jsx("button",{type:"button",onClick:r,className:"page-back-btn",children:"← Back to My Drive"}),s.jsx("h2",{style:{fontWeight:900,fontSize:26,margin:"12px 0 8px",color:"var(--text)"},children:"Storage dashboard"}),s.jsxs("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:28},children:[o,"% of your storage is in use"]}),s.jsxs("div",{className:"dashboard-stat-grid",children:[s.jsx(To,{label:"Total files",value:e.totalFiles}),s.jsx(To,{label:"Total folders",value:e.totalFolders}),s.jsx(To,{label:"Storage used",value:Ae(e.storageUsed)}),s.jsx(To,{label:"Storage remaining",value:Ae(Math.max(0,e.storageQuota-e.storageUsed))})]}),s.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)",marginBottom:24},children:[s.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"Storage breakdown"}),s.jsx("div",{style:{height:14,borderRadius:99,overflow:"hidden",display:"flex",background:"var(--border)"},children:a.map(c=>{const l=(n[c.key]||0)/i*100;return l<.5?null:s.jsx("div",{title:`${c.label}: ${Ae(n[c.key]||0)}`,style:{width:`${l}%`,background:c.color,transition:"width .4s ease"}},c.key)})}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,marginTop:16},children:a.map(c=>s.jsxs("span",{style:{fontSize:13,color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{width:10,height:10,borderRadius:99,background:c.color,flexShrink:0}}),c.label,": ",Ae(n[c.key]||0)]},c.key))})]}),s.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)"},children:[s.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"File type distribution"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:a.map(c=>{const l=n[c.key]||0,d=Math.round(l/i*100);return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[s.jsx("span",{style:{color:"var(--text-secondary)",fontWeight:600},children:c.label}),s.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:700},children:[d,"%"]})]}),s.jsx("div",{style:{height:8,background:"var(--border)",borderRadius:99,overflow:"hidden"},children:s.jsx("div",{style:{width:`${d}%`,height:"100%",background:c.color,borderRadius:99,transition:"width .4s ease"}})})]},c.key)})})]})]})}function To({label:e,value:t}){return s.jsxs("div",{className:"dashboard-stat-card",children:[s.jsx("div",{className:"label",children:e}),s.jsx("div",{className:"value",children:t})]})}function t2({users:e,systemHealth:t,loading:r,onBack:n}){return s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:n,style:r2,children:"← Back to My Cloud"}),s.jsx("h2",{style:{fontWeight:800,fontSize:22,margin:"12px 0 8px"},children:"Admin panel"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:24},children:"User management and system overview"}),t&&s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:28},children:[s.jsx(si,{label:"Total users",value:t.totalUsers??"—"}),s.jsx(si,{label:"Active users",value:t.activeUsers??"—"}),s.jsx(si,{label:"Total files",value:t.totalFiles??"—"}),s.jsx(si,{label:"Storage used",value:t.totalStorageUsed!=null?Ae(t.totalStorageUsed):"—"}),s.jsx(si,{label:"Uploads today",value:t.uploadsToday??"—"})]}),s.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"Users"}),r?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading…"}):s.jsxs("div",{style:{overflowX:"auto",border:"1px solid var(--border)",borderRadius:12},children:[s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"var(--bg-card)",textAlign:"left"},children:[s.jsx("th",{style:ai,children:"Email"}),s.jsx("th",{style:ai,children:"Name"}),s.jsx("th",{style:ai,children:"Role"}),s.jsx("th",{style:ai,children:"Storage"}),s.jsx("th",{style:ai,children:"Status"})]})}),s.jsx("tbody",{children:e.map(i=>s.jsxs("tr",{style:{borderTop:"1px solid var(--border)"},children:[s.jsx("td",{style:li,children:i.email}),s.jsx("td",{style:li,children:i.fullName||"—"}),s.jsx("td",{style:li,children:i.role}),s.jsxs("td",{style:li,children:[Ae(i.storageUsed)," / ",Ae(i.storageQuota)]}),s.jsx("td",{style:li,children:i.isActive?"Active":"Inactive"})]},i.id))})]}),e.length===0&&s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)"},children:"No users found"})]})]})}function si({label:e,value:t}){return s.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:14},children:[s.jsx("div",{style:{fontWeight:800,fontSize:20},children:t}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:e})]})}const ai={padding:"12px 14px",color:"var(--text-muted)",fontWeight:600},li={padding:"12px 14px",color:"var(--text-secondary)"},r2={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"};function Bg({file:e,onMove:t,onCopy:r,onTags:n,onDelete:i}){const[o,a]=y.useState(!1),c=y.useRef(null);y.useEffect(()=>{const d=u=>{c.current&&!c.current.contains(u.target)&&a(!1)};return o&&document.addEventListener("click",d),()=>document.removeEventListener("click",d)},[o]);const l=[{cue:"#",label:"Tags",onClick:()=>n(e)},{cue:"Move",label:"Move",onClick:()=>t(e)},{cue:"Copy",label:"Copy file",onClick:()=>r(e)},{cue:"Del",label:"Delete",onClick:()=>i(e),danger:!0}];return s.jsxs("div",{ref:c,style:{position:"relative"},children:[s.jsx("button",{type:"button",title:"More actions",onClick:d=>{d.stopPropagation(),a(u=>!u)},style:n2,children:"..."}),o&&s.jsx("div",{style:i2,children:l.map(d=>s.jsxs("button",{type:"button",onClick:u=>{u.stopPropagation(),a(!1),d.onClick()},style:{...o2,color:d.danger?"var(--danger)":"var(--text)"},children:[s.jsx("span",{style:{...s2,color:d.danger?"var(--danger)":"var(--accent-blue)"},children:d.cue}),s.jsx("span",{children:d.label})]},d.label))})]})}const n2={width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"rgba(255,255,255,.08)",color:"var(--text)",cursor:"pointer",fontSize:18,fontWeight:900,transition:"var(--transition)"},i2={position:"absolute",right:0,top:"100%",marginTop:6,minWidth:190,background:"var(--surface-raised)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"var(--shadow)",zIndex:50,overflow:"hidden",padding:6,animation:"floatIn .16s ease"},o2={display:"flex",alignItems:"center",gap:10,width:"100%",padding:"11px 12px",border:"none",borderRadius:10,background:"transparent",textAlign:"left",cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"var(--font)"},s2={width:34,opacity:.78,fontSize:11,fontWeight:900,textTransform:"uppercase"};function sn({width:e="100%",height:t=16,radius:r=8,style:n={}}){return s.jsx("div",{style:{width:e,height:t,borderRadius:r,background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite",...n}})}function a2({count:e=6,grid:t=!1}){return t?s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:12},children:Array.from({length:e}).map((r,n)=>s.jsxs("div",{style:{borderRadius:16,overflow:"hidden",border:"1px solid var(--border)"},children:[s.jsx(sn,{height:140,radius:0}),s.jsxs("div",{style:{padding:12},children:[s.jsx(sn,{height:12,width:"80%"}),s.jsx(sn,{height:10,width:"50%",style:{marginTop:8}})]})]},n))}):s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Array.from({length:e}).map((r,n)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:"var(--bg-card)",borderRadius:12,border:"1px solid var(--border)"},children:[s.jsx(sn,{width:36,height:36,radius:8}),s.jsxs("div",{style:{flex:1},children:[s.jsx(sn,{height:14,width:"40%"}),s.jsx(sn,{height:10,width:"25%",style:{marginTop:8}})]})]},n))})}function l2(e,t=400){const[r,n]=y.useState(e);return y.useEffect(()=>{const i=setTimeout(()=>n(e),t);return()=>clearTimeout(i)},[e,t]),r}async function c2(e,{createFolder:t,uploadFile:r,baseFolderId:n,onProgress:i}){const o=Array.from(e),a=new Map([["",n??null]]),c=d=>{const u=d.webkitRelativePath||d.name,f=u.split("/").filter(Boolean),p=f.pop();return{segments:f,fileName:p,rel:u}};o.sort((d,u)=>c(d).rel.localeCompare(c(u).rel));let l=0;for(const d of o){const{segments:u}=c(d);let f=n??null,p="";for(const x of u){if(p=p?`${p}/${x}`:x,!a.has(p)){const v=await t(x,f);a.set(p,v.id)}f=a.get(p)}await r(d,f),l+=1,i==null||i(Math.round(l/o.length*100))}}function d2(e){const t=new Map(e.map(n=>[n.id,{...n,children:[]}])),r=[];for(const n of e){const i=t.get(n.id);n.parentId&&t.has(n.parentId)?t.get(n.parentId).children.push(i):r.push(i)}return r}const Wg=y.createContext(null);function u2({token:e,children:t}){const[r,n]=y.useState(null),[i,o]=y.useState([]),[a,c]=y.useState(0),[l,d]=y.useState(!0),u=y.useCallback(async()=>{if(e)try{const v=await it("/account",{},e);n(v)}catch{const v=await it("/users/me",{},e).catch(()=>null);v&&n(v)}},[e]),f=y.useCallback(async()=>{},[]),p=y.useCallback(async()=>{d(!0),await Promise.all([u(),f()]),d(!1)},[u,f]);y.useEffect(()=>{p()},[e]);const x=async()=>{};return s.jsx(Wg.Provider,{value:{account:r,loading:l,notifications:i,unreadCount:a,refreshAccount:u,refreshNotifications:f,refreshAll:p,markAllRead:x},children:t})}function $g(){const e=y.useContext(Wg);if(!e)throw new Error("useAccount must be used within AccountProvider");return e}function f2({account:e,onNavigate:t,onSignOut:r}){var d;const[n,i]=y.useState(!1),o=y.useRef(null);y.useEffect(()=>{const u=f=>{o.current&&!o.current.contains(f.target)&&i(!1)};return n&&document.addEventListener("click",u),()=>document.removeEventListener("click",u)},[n]);const a=[{id:"profile",label:"My Profile"},{id:"settings",label:"Settings"},{id:"security",label:"Security"},{id:"dashboard",label:"Storage"},{id:"billing",label:"Billing"},{id:"billing",label:"Upgrade Plan",accent:!0},{id:"help",label:"Help Center"}],c=e==null?void 0:e.avatarUrl,l=((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"?").slice(0,1).toUpperCase();return s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(u=>!u),style:{display:"flex",alignItems:"center",gap:8,padding:"4px 10px 4px 4px",borderRadius:999,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontFamily:"var(--font)"},children:[s.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:c?`url(${c}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:14},children:!c&&l}),s.jsx("span",{style:{color:"var(--text-secondary)",fontSize:13,fontWeight:600},children:"▾"})]}),n&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",minWidth:200,background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300,overflow:"hidden",animation:"fadeIn .15s ease"},children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontWeight:700,fontSize:14,color:"var(--text)"},children:(e==null?void 0:e.fullName)||"Account"}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:e==null?void 0:e.email}),s.jsxs("div",{style:{fontSize:11,color:"var(--accent)",marginTop:6,fontWeight:600,textTransform:"capitalize"},children:[((d=e==null?void 0:e.planDetails)==null?void 0:d.name)||(e==null?void 0:e.plan)," plan"]})]}),a.map((u,f)=>s.jsx("button",{type:"button",onClick:()=>{i(!1),t(u.id==="dashboard"?"dashboard":u.id)},style:{display:"block",width:"100%",padding:"11px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,fontWeight:u.accent?700:500,color:u.accent?"var(--accent)":"var(--text-secondary)"},children:u.label},`${u.id}-${f}`)),s.jsx("div",{style:{borderTop:"1px solid var(--border)"},children:s.jsx("button",{type:"button",onClick:()=>{i(!1),r()},style:{display:"block",width:"100%",padding:"12px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,color:"var(--danger)",fontWeight:600},children:"Sign Out"})})]})]})}function p2({account:e,onUpgrade:t}){if(!(e!=null&&e.onTrial))return null;const r=e.trialDaysLeft??0;return s.jsxs("div",{style:{background:"linear-gradient(90deg, rgba(240,22,58,.12), rgba(64,144,255,.1))",borderBottom:"1px solid var(--border)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--text)"},children:"Pro trial"})," — ",r," day",r!==1?"s":""," left · ",Ae(e.storageUsed)," used"]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Upgrade"})]})}function h2({account:e,onOpenSettings:t}){return!(e!=null&&e.emailVerificationRequired)||(e==null?void 0:e.isVerified)!==!1?null:s.jsxs("div",{style:{background:"rgba(240, 22, 58, 0.12)",borderBottom:"1px solid rgba(240, 22, 58, 0.35)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--danger)"},children:"Email not verified"})," — ","Uploads are disabled until you verify. Check your inbox or resend the link."]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Verify email"})]})}function uf({email:e,token:t,onVerified:r,onBack:n}){const[i,o]=y.useState(e||""),[a,c]=y.useState(!!t),[l,d]=y.useState(""),[u,f]=y.useState(""),[p,x]=y.useState(!1);y.useEffect(()=>{t&&v(t)},[t]);const v=async S=>{c(!0),d("");try{const m=await fetch(`${ut}/auth/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:S})}),h=await m.json();if(!m.ok||!h.success)throw new Error(h.message||"Verification failed");x(!0),setTimeout(()=>r==null?void 0:r(),1200)}catch{d("This verification link is invalid or expired. Request a fresh email and try again.")}finally{c(!1)}},b=async()=>{if(!i){d("Enter your email address first.");return}c(!0),d(""),f("");try{const S=await fetch(`${ut}/auth/resend-verification`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}),m=await S.json();if(!S.ok||!m.success)throw new Error(m.message||"Failed to send verification email");f("A fresh verification email is on its way. Open the link in your inbox to continue.")}catch{d("Something went wrong. Please try again.")}finally{c(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:Vr}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:p?"Email verified":t?"Verifying your email":"Check your inbox"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:p?"Your account is ready. You can now log in with your email and password.":t?"Hold tight while we confirm your CloudVault account.":"Open the verification link we sent after registration. You only need to do this once."}),!t&&!p&&s.jsxs(s.Fragment,{children:[s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:"Email address"}),s.jsx("input",{className:"input-field",type:"email",value:i,onChange:S=>o(S.target.value),placeholder:"you@company.com",style:{marginTop:6}})]}),s.jsx("button",{type:"button",onClick:b,disabled:a,className:"btn-primary",style:{width:"100%"},children:a?"Sending...":"Resend verification email"})]}),a&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,marginTop:14},children:"Working on it..."}),l&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginTop:14},children:l}),u&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,lineHeight:1.5,marginTop:14},children:u}),s.jsx("button",{type:"button",onClick:n,className:"btn-secondary",style:{width:"100%",marginTop:14},children:"Back to login"})]})]})}function g2({notifications:e,unreadCount:t,onMarkAllRead:r}){const[n,i]=y.useState(!1),o=y.useRef(null);return y.useEffect(()=>{const a=c=>{o.current&&!o.current.contains(c.target)&&i(!1)};return n&&document.addEventListener("click",a),()=>document.removeEventListener("click",a)},[n]),s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(a=>!a),style:{width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontSize:18,position:"relative"},title:"Notifications",children:["🔔",t>0&&s.jsx("span",{style:{position:"absolute",top:4,right:4,minWidth:16,height:16,borderRadius:99,background:"var(--accent)",color:"#fff",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"},children:t>9?"9+":t})]}),n&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",width:320,maxHeight:400,overflow:"auto",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300},children:[s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontWeight:700,fontSize:14},children:"Notifications"}),t>0&&s.jsx("button",{type:"button",onClick:r,style:m2,children:"Mark all read"})]}),e.length===0?s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)",fontSize:13},children:"Nothing new"}):e.map(a=>s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",background:a.read?"transparent":"rgba(240,22,58,.06)"},children:[s.jsx("div",{style:{fontWeight:600,fontSize:13},children:a.title}),a.body&&s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:a.body}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:6},children:qi(a.createdAt)})]},a.id))]})]})}const m2={background:"none",border:"none",color:"var(--accent-blue)",fontSize:12,cursor:"pointer",fontWeight:600};function ff({token:e,onBack:t,onSuccess:r}){const[n,i]=y.useState(""),[o,a]=y.useState(""),[c,l]=y.useState(!1),[d,u]=y.useState(""),[f,p]=y.useState(!1),x=async v=>{if(v.preventDefault(),u(""),!e)return u("This reset link is invalid. Please request a new one.");if(n!==o)return u("Passwords do not match.");if(n.length<8)return u("Password must be at least 8 characters.");if(!/[a-z]/.test(n)||!/[A-Z]/.test(n)||!/\d/.test(n))return u("Use at least one uppercase letter, one lowercase letter, and one number.");l(!0);try{const b=await fetch(`${ut}/auth/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,newPassword:n})}),S=await b.json();if(!b.ok||!S.success)throw new Error(S.message||"Failed to reset password");p(!0),setTimeout(()=>{var m;return(m=r||t)==null?void 0:m()},1400)}catch{u("Something went wrong. Please try again.")}finally{l(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:Vr}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:f?"Password updated":"Set a new password"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:f?"You can now log in with your new password.":"Choose a strong password to secure your CloudVault account."}),!f&&s.jsxs("form",{onSubmit:x,children:[s.jsx(pf,{label:"New password",value:n,onChange:i}),s.jsx(pf,{label:"Confirm password",value:o,onChange:a}),d&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginBottom:14},children:d}),s.jsx("button",{type:"submit",disabled:c,className:"btn-primary",style:{width:"100%"},children:c?"Updating...":"Update password"})]}),f&&s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{width:"100%"},children:"Continue to login"}),s.jsx("button",{type:"button",onClick:t,className:"btn-secondary",style:{width:"100%",marginTop:12},children:"Back to login"})]})]})}function pf({label:e,value:t,onChange:r}){return s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:e}),s.jsx("input",{className:"input-field",type:"password",value:t,onChange:n=>r(n.target.value),required:!0,minLength:8,style:{marginTop:6}})]})}const hf={drive:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V8H4V6.5Z",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M4 8h16v9.5A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5V8Z",stroke:"currentColor",strokeWidth:"1.8"})]}),recent:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"12",cy:"12",r:"8.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),starred:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M12 4.5l2.2 4.5 4.9.7-3.5 3.4.8 4.9L12 15.8l-4.4 2.2.8-4.9-3.5-3.4 4.9-.7L12 4.5Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"})}),shared:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"18",cy:"5",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("circle",{cx:"6",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("circle",{cx:"18",cy:"19",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M8.3 10.8l7.4-4.1M8.3 13.2l7.4 4.1",stroke:"currentColor",strokeWidth:"1.8"})]}),usage:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M5 19V10M10 19V5M15 19v-7M20 19V8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}),trash:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M9 4h6M5 7h14l-1.2 12.5a1.5 1.5 0 0 1-1.5 1.5H7.7a1.5 1.5 0 0 1-1.5-1.5L5 7Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 10v6M14 10v6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),activity:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M6 5h12v14H6V5Z",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M9 9h6M9 12h4M9 15h5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),admin:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),s.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"})]})};function v2({name:e,active:t=!1}){return s.jsx("span",{className:`nav-icon${t?" active":""}`,"aria-hidden":"true",children:hf[e]||hf.drive})}const Go={display:"flex",flexDirection:"column",minHeight:"100vh",background:"var(--bg-primary)",color:"var(--text)",fontFamily:"var(--font)",position:"relative",overflow:"hidden"},wn=(e,t,r,n=420)=>({position:"fixed",top:e,left:t,width:n,height:n,borderRadius:"50%",background:r,filter:"blur(140px)",opacity:.12,pointerEvents:"none",zIndex:0}),Yo={padding:"16px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid var(--border)",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",position:"relative",zIndex:10},Wa={width:34,height:34,background:"var(--gradient)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,boxShadow:"0 4px 16px rgba(217,0,7,0.25)"},Qo={background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:20,padding:"48px 40px 40px",maxWidth:480,width:"100%",textAlign:"center",boxShadow:"0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset",position:"relative",zIndex:5,animation:"floatIn 0.5s ease-out both"},$a={width:80,height:80,borderRadius:20,background:"var(--gradient-soft)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:38,margin:"0 auto 24px"},Va={margin:0,fontSize:22,fontWeight:700,letterSpacing:"-0.3px",lineHeight:1.35,wordBreak:"break-word",color:"var(--text)"},Ha={margin:"8px 0 0",color:"var(--text-muted)",fontSize:14,fontWeight:500,letterSpacing:"0.2px"},Ts={width:"100%",height:1,background:"var(--border)",margin:"24px 0",border:"none"},y2={display:"flex",alignItems:"center",gap:12,padding:"14px 16px",background:"var(--bg-card-hover)",borderRadius:14,border:"1px solid var(--border)"},x2={width:40,height:40,borderRadius:"50%",objectFit:"cover",flexShrink:0},w2={width:40,height:40,borderRadius:"50%",background:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:16,color:"#fff",flexShrink:0},b2={textAlign:"left",flex:1,minWidth:0},k2={fontSize:14,fontWeight:600,color:"var(--text)",lineHeight:1.3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},S2={fontSize:12,color:"var(--text-muted)",fontWeight:500,lineHeight:1.4,marginTop:2},_2=(e,t)=>({display:"inline-flex",alignItems:"center",gap:5,padding:"5px 12px",borderRadius:999,fontSize:12,fontWeight:600,background:e,color:t,letterSpacing:"0.3px"}),Vg={flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"14px 20px",borderRadius:12,fontWeight:600,fontSize:15,fontFamily:"var(--font)",cursor:"pointer",transition:"all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",border:"none",outline:"none",letterSpacing:"-0.2px"},gf={...Vg,background:"var(--bg-card-hover)",color:"var(--text)",border:"1px solid var(--border)"},mf={...Vg,background:"var(--gradient)",color:"#fff",boxShadow:"0 8px 24px rgba(217,0,7,0.25)"},E2={opacity:.6,cursor:"not-allowed"},C2={margin:"20px 0 0",fontSize:12,color:"var(--text-muted)",fontWeight:500,display:"flex",alignItems:"center",justifyContent:"center",gap:6},j2={padding:"16px 28px",borderTop:"1px solid var(--border)",textAlign:"center",fontSize:12,color:"var(--text-muted)",fontWeight:500,background:"rgba(0,0,0,0.3)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",position:"relative",zIndex:10};function I2(){const e={background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.8s ease infinite",borderRadius:10};return s.jsxs("div",{style:Go,children:[s.jsx("div",{style:wn("-120px","-100px","rgba(217,0,7,0.3)")}),s.jsx("div",{style:wn("60%","70%","rgba(59,130,246,0.2)",350)}),s.jsxs("header",{style:Yo,children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[s.jsx("div",{style:{...e,width:34,height:34,borderRadius:10}}),s.jsx("div",{style:{...e,width:100,height:18}})]}),s.jsx("div",{style:{...e,width:130,height:16}})]}),s.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:s.jsxs("div",{style:{...Qo,animation:"none"},children:[s.jsx("div",{style:{...e,width:80,height:80,borderRadius:20,margin:"0 auto 24px"}}),s.jsx("div",{style:{...e,width:"70%",height:22,margin:"0 auto 12px"}}),s.jsx("div",{style:{...e,width:"45%",height:14,margin:"0 auto 24px"}}),s.jsx("div",{style:Ts}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",background:"var(--bg-card-hover)",borderRadius:14},children:[s.jsx("div",{style:{...e,width:40,height:40,borderRadius:"50%"}}),s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{...e,width:"60%",height:14,marginBottom:6}}),s.jsx("div",{style:{...e,width:"80%",height:12}})]})]}),s.jsx("div",{style:{...Ts,margin:"24px 0 20px"}}),s.jsxs("div",{style:{display:"flex",gap:12},children:[s.jsx("div",{style:{...e,flex:1,height:48,borderRadius:12}}),s.jsx("div",{style:{...e,flex:1,height:48,borderRadius:12}})]})]})})]})}function T2({avatarUrl:e,name:t}){const[r,n]=y.useState(!1),i=(t||"U").charAt(0).toUpperCase();return e&&!r?s.jsx("img",{src:e,alt:t||"User",style:x2,onError:()=>n(!0)}):s.jsx("div",{style:w2,children:i})}function R2({token:e}){const[t,r]=y.useState(!0),[n,i]=y.useState(null),[o,a]=y.useState(null),[c,l]=y.useState(""),[d,u]=y.useState(!1),[f,p]=y.useState(!1),[x,v]=y.useState(!1),[b,S]=y.useState(!1),[m,h]=y.useState(!1),g=async(F="")=>{r(!0),a(null);try{const X=`/share/${e}${F?`?password=${encodeURIComponent(F)}`:""}`,ie=await it(X,{},null);i(ie),u(!1)}catch(X){const ie=(X.message||"").toLowerCase();ie.includes("password required")||ie.includes("invalid password")||ie.includes("forbidden")||ie.includes("session expired")?(u(!0),F&&a("Invalid password")):a(X.message||"Failed to load shared link.")}finally{r(!1)}};y.useEffect(()=>{g()},[e]);const k=async()=>{if(!(!n||f)){p(!0);try{const F=`/share/${e}/download${c?`?password=${encodeURIComponent(c)}`:""}`,X=await fetch(`${ut}${F}`);if(!X.ok)throw new Error("Download failed");const ie=await X.blob();Ah(ie,n.file.name)}catch(F){a(F.message)}finally{p(!1)}}},_=async()=>{const F=`/share/${e}/download${c?`?password=${encodeURIComponent(c)}`:""}`,X=await fetch(`${ut}${F}`);if(!X.ok)throw new Error("Failed to load preview");return await X.blob()};if(t)return s.jsx(I2,{});if(d&&!n)return s.jsxs("div",{style:Go,children:[s.jsx("div",{style:wn("-120px","-100px","rgba(217,0,7,0.3)")}),s.jsx("header",{style:Yo,children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[s.jsx("div",{style:Wa,children:"☁️"}),s.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]})}),s.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:s.jsxs("div",{style:{...Qo,maxWidth:420},children:[s.jsx("div",{style:{...$a,background:"rgba(217,0,7,0.1)",border:"1px solid rgba(217,0,7,0.2)"},children:"🔒"}),s.jsx("h2",{style:{...Va,fontSize:22,marginBottom:8},children:"Password Protected"}),s.jsx("p",{style:{...Ha,marginBottom:28},children:"Enter the password to access this shared file."}),s.jsxs("form",{onSubmit:F=>{F.preventDefault(),g(c)},children:[s.jsx("input",{type:"password",placeholder:"Enter password",value:c,onChange:F=>l(F.target.value),autoFocus:!0,style:{width:"100%",padding:"14px 18px",borderRadius:12,border:"1px solid var(--border)",background:"var(--bg-card-hover)",color:"var(--text)",fontFamily:"var(--font)",fontSize:15,fontWeight:500,outline:"none",transition:"border-color 0.2s",marginBottom:16,boxSizing:"border-box"},onFocus:F=>F.target.style.borderColor="var(--accent)",onBlur:F=>F.target.style.borderColor="var(--border)"}),o&&s.jsx("p",{style:{color:"var(--danger)",margin:"0 0 16px",fontSize:13,fontWeight:600},children:o}),s.jsx("button",{type:"submit",style:{...mf,width:"100%",flex:"none"},children:"Unlock File"})]})]})})]});if(o&&!n)return s.jsxs("div",{style:Go,children:[s.jsx("div",{style:wn("-120px","-100px","rgba(217,0,7,0.3)")}),s.jsx("header",{style:Yo,children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[s.jsx("div",{style:Wa,children:"☁️"}),s.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]})}),s.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:s.jsxs("div",{style:{...Qo,maxWidth:420},children:[s.jsx("div",{style:{...$a,background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.2)"},children:"⚠️"}),s.jsx("h2",{style:{...Va,fontSize:22,marginBottom:8},children:"Link Unavailable"}),s.jsx("p",{style:{...Ha,marginBottom:0},children:o})]})})]});const{file:E,sharedBy:j,permission:T,expiresAt:D}=n,N=Gc(E.mimeType),U=T==="download"||T==="edit";return s.jsxs("div",{style:Go,children:[s.jsx("div",{style:wn("-120px","-100px","rgba(217,0,7,0.3)")}),s.jsx("div",{style:wn("60%","70%","rgba(59,130,246,0.2)",350)}),s.jsxs("header",{style:Yo,children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[s.jsx("div",{style:Wa,children:"☁️"}),s.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--text-muted)",fontSize:13,fontWeight:500},children:[s.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,color:"var(--accent)"},children:[s.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),s.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),"Encrypted"]}),s.jsx("span",{children:"•"}),s.jsx("span",{children:"Shared securely"})]})]}),s.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24,position:"relative",zIndex:5},children:s.jsxs("div",{style:Qo,children:[s.jsx("div",{style:$a,children:Ji(E.mimeType)}),s.jsx("h1",{style:Va,children:E.name}),s.jsxs("p",{style:Ha,children:[Ae(E.size),s.jsx("span",{style:{margin:"0 8px",opacity:.4},children:"•"}),E.mimeType||"Unknown type"]}),s.jsx("div",{style:Ts}),s.jsxs("div",{style:y2,children:[s.jsx(T2,{avatarUrl:j==null?void 0:j.avatarUrl,name:j==null?void 0:j.fullName}),s.jsxs("div",{style:b2,children:[s.jsx("div",{style:k2,children:(j==null?void 0:j.fullName)||"A user"}),s.jsx("div",{style:S2,children:"shared this file with you"})]}),s.jsx("div",{style:_2(U?"rgba(34,197,94,0.12)":"rgba(59,130,246,0.12)",U?"#22c55e":"#3b82f6"),children:U?"📥 Download":"👁 View only"})]}),s.jsx("div",{style:{...Ts,margin:"24px 0 20px"}}),s.jsxs("div",{style:{display:"flex",gap:12},children:[N&&s.jsxs("button",{onClick:()=>v(!0),onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),style:{...gf,transform:b?"translateY(-2px)":"none",borderColor:b?"var(--border-hover)":"var(--border)",boxShadow:b?"0 8px 24px rgba(0,0,0,0.2)":"none"},children:[s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),s.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Preview"]}),U&&s.jsxs("button",{onClick:k,disabled:f,onMouseEnter:()=>!f&&h(!0),onMouseLeave:()=>h(!1),style:{...mf,...f?E2:{},transform:m&&!f?"translateY(-2px)":"none",boxShadow:m&&!f?"0 12px 32px rgba(217,0,7,0.35)":"0 8px 24px rgba(217,0,7,0.25)"},children:[s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"7 10 12 15 17 10"}),s.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),f?"Downloading…":"Download"]}),!U&&!N&&s.jsx("div",{style:{...gf,cursor:"default",justifyContent:"center",opacity:.6},children:"👁 View Only"})]}),D&&s.jsxs("div",{style:C2,children:[s.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("polyline",{points:"12 6 12 12 16 14"})]}),"Expires ",new Date(D).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]})]})}),s.jsxs("footer",{style:j2,children:["Powered by ",s.jsx("strong",{style:{color:"var(--text)",fontWeight:700},children:"CloudVault"})," · End-to-end secure file sharing"]}),x&&s.jsx(_g,{file:E,token:null,onClose:()=>v(!1),customFetchBlob:_})]})}const N2=y.lazy(()=>en(()=>import("./ProfilePage-amWG_TRH.js"),[])),P2=y.lazy(()=>en(()=>import("./SettingsPage-BgRk2e1P.js"),[])),A2=y.lazy(()=>en(()=>import("./SecurityPage-GRU13Cia.js"),[])),O2=y.lazy(()=>en(()=>import("./BillingPage-S7sb0Vm0.js"),[])),L2=y.lazy(()=>en(()=>import("./HelpPage-BxgmSOnR.js"),[])),z2=y.lazy(()=>en(()=>import("./ActivityPage-D4p1Ol04.js"),[])),Ga=y.lazy(()=>en(()=>import("./FileListPage-rcigx-Ow.js"),[]));function Ut(){return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:48},children:s.jsx(Kl,{size:28})})}function M2({msg:e,type:t,onClose:r}){y.useEffect(()=>{const i=setTimeout(r,3500);return()=>clearTimeout(i)},[r]);const n=t==="error"?"var(--danger)":t==="success"?"var(--accent)":"var(--accent-blue)";return s.jsxs("div",{className:"toast",role:"alert","aria-live":"polite",style:{position:"fixed",bottom:32,right:32,zIndex:9999,background:n,color:"#fff",padding:"14px 24px",borderRadius:"var(--radius)",fontFamily:"var(--font)",fontWeight:600,fontSize:14,boxShadow:"var(--shadow)",animation:"slideUp .3s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10,maxWidth:420},children:[s.jsx("span",{children:t==="error"?"✕":t==="success"?"✓":"ℹ"}),s.jsx("span",{style:{flex:1},children:e}),s.jsx("span",{onClick:r,style:{cursor:"pointer",opacity:.7,fontSize:18,lineHeight:1},children:"×"})]})}function Kl({size:e=22,color:t="var(--accent)"}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:t,borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Ko({value:e}){const t=e>85?"var(--danger)":e>60?"var(--accent-amber)":"var(--accent)";return s.jsx("div",{style:{background:"var(--border)",borderRadius:99,height:6,overflow:"hidden",width:"100%"},children:s.jsx("div",{style:{width:`${e}%`,height:"100%",background:t,borderRadius:99,transition:"width .5s ease"}})})}function vf({size:e=44}){return s.jsx("span",{style:{width:e,height:e,borderRadius:"50%",background:"var(--mega-red)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px var(--mega-red-glow)",flexShrink:0,overflow:"hidden",animation:"softPulse 3s ease infinite"},children:s.jsx("img",{src:be.logoImage,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function D2({jobs:e,history:t}){return!e.length&&!t.length?null:s.jsxs("div",{className:"transfer-panel",children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("strong",{style:{fontSize:13},children:"Transfers"}),s.jsx("span",{style:{fontSize:11,background:"var(--mega-red)",color:"#fff",padding:"2px 8px",borderRadius:99,fontWeight:700},children:e.filter(r=>r.status==="downloading").length})]}),s.jsxs("div",{style:{maxHeight:260,overflow:"auto",padding:12},children:[e.map(r=>s.jsxs("div",{style:{marginBottom:12},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:12,marginBottom:6},children:[s.jsx("span",{style:{color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.name}),s.jsx("span",{style:{color:r.status==="failed"?"var(--danger)":"var(--accent-blue)",fontWeight:800},children:r.status==="failed"?"Failed":`${r.percent}%`})]}),s.jsx(Ko,{value:r.percent})]},r.id)),t.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",fontWeight:800,margin:"10px 0 8px",textTransform:"uppercase"},children:"Recent downloads"}),t.slice(0,4).map(r=>s.jsxs("div",{style:{padding:"8px 0",borderTop:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.name}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:qi(r.downloadedAt)})]},r.id))]})]})]})}function F2({title:e,message:t,onConfirm:r,onCancel:n,danger:i=!1}){return s.jsx("div",{className:"modal-backdrop",onClick:n,children:s.jsxs("div",{className:"modal-card",onClick:o=>o.stopPropagation(),children:[s.jsx("div",{style:{fontSize:36,textAlign:"center",marginBottom:16},children:i?"⚠️":"❓"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:8},children:e}),s.jsx("p",{style:{color:"var(--text-secondary)",fontFamily:"var(--font)",fontSize:14,textAlign:"center",marginBottom:28,lineHeight:1.5},children:t}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:n,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:r,className:"btn-primary",style:i?{background:"var(--danger)",boxShadow:"0 10px 28px rgba(248,113,113,.25)"}:void 0,children:i?"Delete":"Confirm"})]})]})})}function U2({file:e,onRename:t,onCancel:r}){const[n,i]=y.useState(e.name),o=y.useRef(null);return y.useEffect(()=>{var a;(a=o.current)==null||a.select()},[]),s.jsx("div",{className:"modal-backdrop",onClick:r,children:s.jsxs("div",{className:"modal-card",onClick:a=>a.stopPropagation(),children:[s.jsx("div",{style:{fontSize:32,textAlign:"center",marginBottom:12},children:"✏️"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:20},children:"Rename File"}),s.jsx("input",{ref:o,value:n,onChange:a=>i(a.target.value),onKeyDown:a=>a.key==="Enter"&&t(n),className:"input-field",style:{marginBottom:20}}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:r,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>t(n),className:"btn-primary",children:"Rename"})]})]})})}function Hg({tags:e}){return e!=null&&e.length?s.jsx("div",{style:{display:"flex",gap:4,marginTop:4,flexWrap:"wrap"},children:e.slice(0,3).map(t=>s.jsx("span",{style:{fontSize:10,padding:"2px 6px",borderRadius:6,background:"rgba(240,22,58,.12)",color:"var(--accent)",fontWeight:600},children:t},t))}):null}function ur({label:e,onClick:t,tone:r="neutral",disabled:n=!1}){const i=r==="accent"?"accent":r==="blue"?"blue":"";return s.jsx("button",{type:"button",className:`quick-action-btn ${i}`.trim(),title:e,disabled:n,onClick:o=>{o.stopPropagation(),n||t()},children:e})}function B2({file:e,onDelete:t,onShare:r,onPreview:n,onRename:i,onDownload:o,onMove:a,onCopy:c,onTags:l}){return s.jsxs("div",{className:"file-list-card",children:[s.jsx("div",{style:{fontSize:34,flexShrink:0,width:48,height:48,borderRadius:14,background:"rgba(56,189,248,.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:Ji(e.mimeType)}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:16,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:12,marginTop:3},children:[Ae(e.size)," · ",qi(e.createdAt)]}),s.jsx(Hg,{tags:e.tags})]}),s.jsxs("div",{className:"file-list-actions",children:[s.jsx(ur,{label:"Preview",disabled:!Gc(e.mimeType),onClick:()=>n(e),tone:"blue"}),s.jsx(ur,{label:"Download",onClick:()=>o(e)}),s.jsx(ur,{label:"Share",onClick:()=>r(e),tone:"accent"}),s.jsx(ur,{label:"Rename",onClick:()=>i(e)}),s.jsx(Bg,{file:e,onMove:a,onCopy:c,onTags:l,onDelete:t})]})]})}function W2({file:e,token:t,onDelete:r,onShare:n,onPreview:i,onRename:o,onDownload:a,onMove:c,onCopy:l,onTags:d}){var f;const u=(f=e.mimeType)==null?void 0:f.startsWith("image/");return s.jsxs("div",{className:"glass-card mega-file-card",style:{borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{height:170,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(217,0,7,.08), rgba(20,20,20,.95))",borderBottom:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[u?s.jsx(xb,{fileId:e.id,token:t,alt:e.name,mimeType:e.mimeType}):s.jsx("div",{style:{fontSize:56,display:"flex"},children:Ji(e.mimeType)}),s.jsx("div",{style:{position:"absolute",right:8,bottom:8,fontSize:10,fontWeight:700,background:"#111827",color:"#fff",padding:"2px 6px",borderRadius:6},children:Ae(e.size)}),s.jsx("div",{style:{position:"absolute",right:10,top:10},children:s.jsx(Bg,{file:e,onMove:c,onCopy:l,onTags:d,onDelete:r})})]}),s.jsxs("div",{style:{padding:"14px"},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:5},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:11},children:[Ae(e.size)," · ",qi(e.createdAt)]}),s.jsx(Hg,{tags:e.tags}),s.jsxs("div",{className:"grid-actions",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[s.jsx(ur,{label:"Preview",disabled:!Gc(e.mimeType),onClick:()=>i(e),tone:"blue"}),s.jsx(ur,{label:"Share",onClick:()=>n(e),tone:"accent"}),s.jsx(ur,{label:"Download",onClick:()=>a(e)}),s.jsx(ur,{label:"Rename",onClick:()=>o(e)})]})]})]})}function $2({account:e,onManage:t}){if(!(e!=null&&e.storageWarning))return null;const r=e.storageWarning==="critical";return s.jsxs("div",{style:{padding:"10px 20px",background:r?"rgba(255,77,77,.12)":"rgba(246,179,71,.12)",borderBottom:`1px solid ${r?"var(--danger)":"var(--accent-amber)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap",fontSize:13,fontFamily:"var(--font)"},children:[s.jsx("span",{children:r?"Storage almost full (95%+).":"Storage over 80% full."}),s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{padding:"6px 14px",fontSize:13},children:"Manage storage"})]})}function V2({username:e,stats:t,storagePercent:r,onUpload:n,onNewFolder:i}){return s.jsxs("div",{className:"mega-drive-header",children:[s.jsx("h1",{style:{fontSize:28,fontWeight:800,color:"var(--text)",marginBottom:20},children:"Cloud drive"}),s.jsxs("div",{className:"mega-drive-actions",children:[s.jsx("button",{type:"button",className:"btn-primary mega-upload-btn",onClick:n,children:"↑ Upload"}),s.jsx("button",{type:"button",className:"btn-secondary mega-folder-btn",onClick:i,children:"+ New folder"})]}),s.jsxs("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:8},children:[t.totalFiles," files · ",t.totalFolders," folders · ",Math.round(r),"% storage used",e?` · @${e}`:""]})]})}function H2({children:e,onNavigate:t,onSignOut:r,onUpgrade:n}){const{account:i,notifications:o,unreadCount:a,markAllRead:c}=$g();return s.jsxs(s.Fragment,{children:[s.jsx(h2,{account:i,onOpenSettings:()=>t("settings")}),s.jsx(p2,{account:i,onUpgrade:n}),s.jsx($2,{account:i,onManage:()=>t("billing")}),s.jsxs("header",{className:"account-header mega-top-bar",style:{position:"sticky",top:0,zIndex:90,borderBottom:"1px solid var(--border)",background:"rgba(0,0,0,.92)",backdropFilter:"blur(16px)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,padding:"0 24px 0 280px"},children:[s.jsx(g2,{notifications:o,unreadCount:a,onMarkAllRead:c}),s.jsx(f2,{account:i,onNavigate:t,onSignOut:r})]}),e]})}function G2(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?new URLSearchParams(window.location.search).get("token"):null}function yf(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/reset-password")?new URLSearchParams(window.location.search).get("token"):null}function xf(){const e=window.location.pathname.replace(/\/+$/,"")||"/";if(e.startsWith("/share/")){const t=e.split("/");if(t.length>=3)return t[2]}return null}function Y2(){const[e,t]=y.useState(()=>window.innerWidth);return y.useEffect(()=>{const r=()=>t(window.innerWidth);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),{width:e,isMobile:e<=768,isSmall:e<=520}}function Q2(){const[e,t]=y.useState(G2),[r,n]=y.useState(yf),[i,o]=y.useState(xf),[a,c]=y.useState(()=>{const w=localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token"),P=yf(),B=xf();return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?"verify-email":P?"reset-password":B?"shared-link":w?"app":"landing"}),[l,d]=y.useState("login"),[u,f]=y.useState(()=>localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token")||""),[p,x]=y.useState(()=>localStorage.getItem("cv_user")||sessionStorage.getItem("cv_user")||""),[v,b]=y.useState(null),[S,m]=y.useState([]),[h,g]=y.useState([]),[k,_]=y.useState({totalFiles:0,storageUsed:0,storageQuota:1024*1024*1024,totalFolders:0}),[E,j]=y.useState(null),[T,D]=y.useState([]),[N,U]=y.useState(""),[F,X]=y.useState(!1),[ie,ve]=y.useState(0),[ge,_e]=y.useState(null),[R,L]=y.useState([]),[M,q]=y.useState(()=>{try{return JSON.parse(localStorage.getItem("cv_downloadHistory")||"[]")}catch{return[]}}),[re,ft]=y.useState(null),[Ie,pt]=y.useState(null),[et,Te]=y.useState(""),[no,tt]=y.useState(!1),[Ge,Et]=y.useState(!1),[Ye,tn]=y.useState(()=>localStorage.getItem("cv_viewMode")||"list"),[er,Js]=y.useState("all"),[Ot,io]=y.useState(()=>localStorage.getItem("cv_theme")||"dark"),[Ir,ht]=y.useState(null),[Yn,Tr]=y.useState(null),[rt,rn]=y.useState(!1),[Z,I]=y.useState("drive"),[le,Rr]=y.useState("createdAt"),[Q,Qn]=y.useState("desc"),[oo,Gg]=y.useState(""),[Xs,Yg]=y.useState([]),[Qg,Kg]=y.useState(1),[qg,Jg]=y.useState(!1),[so,Kn]=y.useState(!1),[Xg,Zg]=y.useState([]),[em,tm]=y.useState([]),[rm,nm]=y.useState([]),[sd,im]=y.useState(null),[nn,qn]=y.useState(null),[Zs,ad]=y.useState(null),[ea,ta]=y.useState(null),[ld,om]=y.useState("user"),[cd,sm]=y.useState([]),[dd,am]=y.useState(null),[Lt,Nr]=y.useState(null),[lm,cm]=y.useState([]),[dm,um]=y.useState([]),[fm,pm]=y.useState([]),ra=l2(N,400),{isMobile:ao,isSmall:hm}=Y2(),Jn=y.useRef(),ud=y.useRef(),J=y.useCallback((w,P="info")=>ft({msg:w,type:P}),[]),Y=y.useCallback((w,P)=>it(w,P,u),[u]),Le=y.useCallback(async(w=1,P=!1)=>{var B,V;if(u){Kn(!0);try{if(Z==="trash"){const nt=await Y("/trash");tm(Ar(nt,"files")),nm(Ar(nt,"folders")),Kn(!1);return}if(Z==="admin"){const[nt,Om]=await Promise.all([Y("/admin/users?limit=50"),Y("/admin/analytics").catch(()=>null)]);sm(Ar(nt,"users")),am(Om),Kn(!1);return}if(Z==="dashboard"){const nt=await Y("/storage/usage");im(nt),_({totalFiles:nt.fileCount??0,storageUsed:nt.storageUsed??0,storageQuota:nt.storageQuota??1024*1024*1024,totalFolders:nt.folderCount??0}),Kn(!1);return}const H=new URLSearchParams;E&&H.set("folderId",E),ra&&H.set("search",ra),oo&&H.set("tag",oo),H.set("sortBy",le),H.set("sortOrder",Q),H.set("page",String(w)),H.set("limit","30");const[K,gt,Pr,ia,Am]=await Promise.all([Y(`/files?${H}`),Y(`/folders?${E?`parentId=${E}`:""}`),Y("/storage/usage"),Y("/files/tags").catch(()=>({tags:[]})),Y("/folders?all=true").catch(()=>({folders:[]}))]),oa=Ar(K,"files"),yd=Ar(gt,"folders");m(P?nt=>[...nt,...oa]:oa),g(yd),Yg((ia==null?void 0:ia.tags)||[]),Zg(Ar(Am,"folders")),Jg((((B=K==null?void 0:K.pagination)==null?void 0:B.page)||1)<(((V=K==null?void 0:K.pagination)==null?void 0:V.totalPages)||1)),Kg(w),_({totalFiles:Pr.fileCount??oa.length,storageUsed:Pr.storageUsed??0,storageQuota:Pr.storageQuota??1024*1024*1024,totalFolders:Pr.folderCount??yd.length})}catch(H){console.error("Refresh failed:",H);const K=H.message.toLowerCase();K.includes("credential")||K.includes("unauthorized")||K.includes("token")?(localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),f(""),x(""),c("landing")):J(H.message,"error")}Kn(!1)}},[u,E,ra,oo,le,Q,Z,Y,J]);y.useEffect(()=>{Le(1,!1)},[Le]),y.useEffect(()=>{Y("/users/me").then(w=>om((w==null?void 0:w.role)||"user")).catch(()=>{})},[u,Y]),y.useEffect(()=>{if(!u||Z==="drive"||Z==="trash"||Z==="dashboard"||Z==="admin")return;(async()=>{try{if(Z==="recent"){const P=await Y("/dashboard");cm(P.recentFiles||[])}else if(Z==="starred"){const P=await Y("/files?isStarred=true&limit=50");um(Ar(P,"files"))}else if(Z==="shared"){const P=await Y("/dashboard"),B=[...P.sharedWithMe||[],...P.sharedByMe||[]].map(V=>V.file||V);pm(B.filter(Boolean))}}catch{}})()},[u,Z,Y]);const gm=w=>{Nr(w),w==="dashboard"&&I("dashboard"),w==="billing"&&Nr("billing")};y.useEffect(()=>{localStorage.setItem("cv_viewMode",Ye)},[Ye]),y.useEffect(()=>{localStorage.setItem("cv_theme",Ot)},[Ot]),y.useEffect(()=>{const w=P=>{var B;(B=P.detail)!=null&&B.token&&f(P.detail.token)};return window.addEventListener("cv-token-refreshed",w),()=>window.removeEventListener("cv-token-refreshed",w)},[]);const mm=(w,P,B,V,H=!0)=>{if(!w&&(V!=null&&V.email)){b(V),c("verify-email");return}if(!w)return;const K=H?localStorage:sessionStorage,gt=H?sessionStorage:localStorage;K.setItem("cv_token",w),gt.removeItem("cv_token"),P&&K.setItem("cv_refreshToken",P),gt.removeItem("cv_refreshToken");const Pr=typeof B=="string"?B:(V==null?void 0:V.fullName)||(V==null?void 0:V.email);K.setItem("cv_user",Pr||""),gt.removeItem("cv_user"),V!=null&&V.avatarUrl&&K.setItem("cv_avatar",V.avatarUrl),f(w),x(Pr||""),c("app")},vm=async w=>{const P=`${w.id}-${Date.now()}`;_e({name:w.name,percent:0}),L(B=>[{id:P,name:w.name,percent:0,status:"downloading"},...B].slice(0,6));try{const B=await Hc(w.id,u,{onProgress:H=>{_e({name:w.name,percent:H}),L(K=>K.map(gt=>gt.id===P?{...gt,percent:H}:gt))}});Ah(B,w.name);const V={id:P,name:w.name,size:w.size,downloadedAt:new Date().toISOString()};q(H=>{const K=[V,...H].slice(0,12);return localStorage.setItem("cv_downloadHistory",JSON.stringify(K)),K}),L(H=>H.map(K=>K.id===P?{...K,percent:100,status:"complete"}:K)),J(`Downloaded "${w.name}"`,"success")}catch(B){L(V=>V.map(H=>H.id===P?{...H,status:"failed"}:H)),J(B.message,"error")}_e(null)},fd=async()=>{try{const w=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");await Y("/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:w})})}catch{}localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),f(""),x(""),c("landing")},pd=async(w,P,B)=>{if(!u)throw new Error("Authentication token missing. Please log in again.");const V=new FormData;return V.append("file",w),P&&V.append("folderId",P),f1("/files/upload",V,u,B)},ym=async(w,P)=>Y("/folders",{method:"POST",body:JSON.stringify({name:w,parentId:P||null})}),na=async(w,P=!1)=>{if(!u){J("Please log in again to upload files.","error");return}const B=Array.from(w||[]);if(!B.length)return;X(!0),ve(0);let V=0;try{if(P&&B.some(H=>H.webkitRelativePath))await c2(B,{baseFolderId:E,createFolder:ym,uploadFile:async(H,K)=>{await pd(H,K,ve),V++},onProgress:ve});else for(let H=0;H<B.length;H++)try{await pd(B[H],E,K=>{const gt=Math.round((H+K/100)/B.length*100);ve(gt)}),V++}catch(K){J(`Failed to upload "${B[H].name}": ${K.message}`,"error")}}finally{X(!1),ve(0),Le(1,!1),V>0&&J(`${V} file(s) uploaded successfully!`,"success")}},xm=w=>{ht({title:"Delete File",message:`Move "${w.name}" to trash? You can restore it later from the Trash view.`,danger:!0,onConfirm:async()=>{ht(null);try{await Y(`/files/${w.id}`,{method:"DELETE"}),Le(),J("File deleted","success")}catch(P){J(P.message,"error")}}})},wm=w=>{ht({title:"Delete Folder",message:`Delete folder "${w.name}" and all its contents? This cannot be undone.`,danger:!0,onConfirm:async()=>{ht(null);try{await Y(`/folders/${w.id}`,{method:"DELETE"}),Le(),J("Folder deleted","success")}catch(P){J(P.message,"error")}}})},bm=async(w,P)=>Y(`/files/${w.id}/share`,{method:"POST",body:JSON.stringify(P)}),km=async(w,{targetFolderId:P})=>{try{await Y(`/files/${w.id}/move`,{method:"POST",body:JSON.stringify({targetFolderId:P})}),qn(null),Le(1,!1),J("File moved","success")}catch(B){J(B.message,"error")}},Sm=async(w,{targetFolderId:P,newName:B})=>{try{await Y(`/files/${w.id}/copy`,{method:"POST",body:JSON.stringify({targetFolderId:P,newName:B!==w.name?B:void 0})}),qn(null),Le(1,!1),J("File copied","success")}catch(V){J(V.message,"error")}},_m=async(w,P)=>{try{await Y(`/files/${w.id}`,{method:"PUT",body:JSON.stringify({tags:P})}),ta(null),Le(1,!1),J("Tags updated","success")}catch(B){J(B.message,"error")}},Em=async w=>{try{await Y(`/trash/files/${w}/restore`,{method:"POST"}),Le(1,!1),J("File restored","success")}catch(P){J(P.message,"error")}},Cm=async w=>{try{await Y(`/trash/folders/${w}/restore`,{method:"POST"}),Le(1,!1),J("Folder restored","success")}catch(P){J(P.message,"error")}},jm=w=>{ht({title:"Delete forever",message:`"${w.name}" will be permanently deleted. This cannot be undone.`,danger:!0,onConfirm:async()=>{ht(null);try{await Y(`/files/${w.id}/permanent`,{method:"DELETE"}),Le(1,!1),J("File permanently deleted","success")}catch(P){J(P.message,"error")}}})},Im=()=>{ht({title:"Empty trash",message:"All items in trash will be permanently deleted.",danger:!0,onConfirm:async()=>{ht(null);try{await Y("/trash/empty",{method:"POST"}),Le(1,!1),J("Trash emptied","success")}catch(w){J(w.message,"error")}}})},Tm=async(w,P)=>{if(!P.trim()||P===w.name){Tr(null);return}try{await Y(`/files/${w.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:P})}),Le(),J("File renamed","success")}catch(B){J(B.message,"error")}Tr(null)},hd=async()=>{if(et.trim()){try{await Y("/folders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:et,parentId:E})}),Le(),J("Folder created!","success")}catch(w){J(w.message,"error")}Te(""),tt(!1)}},Rm=w=>{j(w.id),D(P=>[...P,w]),rn(!1)},gd=w=>{w===-1?(j(null),D([])):(j(T[w].id),D(P=>P.slice(0,w+1)))},Nm=w=>{w.preventDefault(),Et(!1),w.dataTransfer.files.length>0&&na(w.dataTransfer.files)},lo=y.useMemo(()=>{const w=Tu.find(P=>P.key===er);return!w||w.key==="all"?S:S.filter(P=>w.test(P.mimeType||""))},[S,er]),md=k.storageQuota||1024*1024*1024,vd=Math.min(100,k.storageUsed/md*100);if(e)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Vr}),s.jsx(uf,{token:e,onVerified:()=>{t(null),window.history.replaceState({},"","/"),c("auth"),d("login")},onBack:()=>{t(null),window.history.replaceState({},"","/"),c("auth"),d("login")}})]});if(r)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Vr}),s.jsx(ff,{token:r,onBack:()=>{n(null),window.history.replaceState({},"","/"),c("auth"),d("login")}})]});if(a==="landing"&&!u)return s.jsx(k1,{onGetStarted:()=>{d("register"),c("auth")},onLogin:()=>{d("login"),c("auth")},onSignUp:()=>{d("register"),c("auth")}});if(a==="auth"&&!u)return s.jsx(vb,{initialMode:l,onAuth:mm,onNeedsVerification:w=>{b(w),c("verify-email")},onBack:()=>c("landing")});if(a==="verify-email"&&!u)return s.jsx(uf,{email:v==null?void 0:v.email,onVerified:()=>{b(null),c("auth"),d("login")},onBack:()=>{b(null),c("auth"),d("login")}});if(a==="reset-password"&&!u)return s.jsx(ff,{token:r,onSuccess:()=>{n(null),window.history.replaceState({},"","/"),c("auth"),d("login")},onBack:()=>{n(null),c("auth"),d("login")}});if(a==="shared-link")return s.jsx("div",{"data-theme":Ot,className:"app-shell",style:{display:"flex",flexDirection:"column",minHeight:"100vh",background:"var(--bg)",color:"var(--text)"},children:s.jsx(R2,{token:i})});const Pm=Ye==="grid"?W2:B2;return s.jsx(u2,{token:u,children:s.jsx(H2,{onNavigate:w=>{Nr(null),gm(w)},onSignOut:fd,onUpgrade:()=>{Nr("billing"),I("drive")},children:s.jsxs("div",{"data-theme":Ot,className:"app-shell",children:[s.jsx("style",{children:Vr}),s.jsx("button",{type:"button",className:"mobile-menu-button","aria-label":"Open navigation menu","aria-expanded":rt,onClick:()=>rn(w=>!w),style:{display:"none",position:"fixed",top:16,left:16,zIndex:200,background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:10,width:40,height:40,alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--text)",fontSize:20,...ao?{display:"flex"}:{}},children:"☰"}),rt&&ao&&s.jsx("div",{onClick:()=>rn(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:99}}),s.jsxs("div",{className:`sidebar ${rt?"open":""}`,style:{position:"fixed",left:0,top:0,bottom:0,width:260,background:"var(--bg-sidebar)",borderRight:"1px solid var(--border)",padding:"16px 12px",display:"flex",flexDirection:"column",gap:4,zIndex:100,transition:"transform .35s cubic-bezier(.4,0,.2,1)",...ao?{transform:rt?"translateX(0)":"translateX(-100%)"}:{}},children:[s.jsxs("div",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:10,padding:"4px 8px"},children:[s.jsx(vf,{size:40}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:20,fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em"},children:"Drive"}),s.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:1},children:["@",p]})]})]}),s.jsx("button",{type:"button",onClick:()=>{var w;return(w=Jn.current)==null?void 0:w.click()},className:"btn-primary",style:{minHeight:48,borderRadius:999,fontSize:15,justifyContent:"center",display:"flex",alignItems:"center",gap:8,margin:"0 0 16px"},children:"+ New"}),[{id:"drive",icon:"drive",label:"My Drive"},{id:"recent",icon:"recent",label:"Recent"},{id:"starred",icon:"starred",label:"Starred"},{id:"shared",icon:"shared",label:"Shared"},{id:"dashboard",icon:"usage",label:"Storage"},{id:"trash",icon:"trash",label:"Trash"},{id:"activity",icon:"activity",label:"Activity"},...ld==="admin"||ld==="super_admin"?[{id:"admin",icon:"admin",label:"Admin"}]:[]].map(w=>s.jsxs("button",{type:"button",className:`nav-item${Z===w.id?" active":""}`,"aria-current":Z===w.id?"page":void 0,onClick:()=>{Nr(null),I(w.id),rn(!1),w.id==="drive"&&(j(null),D([]))},children:[s.jsx(v2,{name:w.icon,active:Z===w.id}),s.jsx("span",{children:w.label})]},w.id)),s.jsx("div",{style:{borderTop:"1px solid var(--border)",margin:"12px 0 8px"}}),s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1px",marginBottom:8,paddingLeft:4},children:"OVERVIEW"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16},children:[s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:k.totalFiles}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Files"})]}),s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:k.totalFolders}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Folders"})]})]}),s.jsxs("div",{style:{marginTop:"auto"},children:[s.jsxs("div",{style:{marginBottom:16,background:"var(--surface-raised)",borderRadius:14,padding:"14px",border:"1px solid var(--border)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:[s.jsx("span",{style:{fontWeight:600},children:"Free"}),s.jsxs("span",{children:[Ae(k.storageUsed)," of ",Ae(md)," used"]})]}),s.jsx(Ko,{value:vd}),s.jsx("button",{type:"button",onClick:()=>Nr("billing"),className:"btn-secondary",style:{width:"100%",marginTop:12,minHeight:40,borderRadius:999},children:"Upgrade"})]}),s.jsx("button",{type:"button",onClick:fd,className:"btn-danger",children:"Sign Out"})]})]}),s.jsxs("div",{className:"main-content",style:{marginLeft:ao?0:260,padding:"20px 32px",minHeight:"100vh"},children:[s.jsx(K2,{appPage:Lt,setAppPage:Nr,api:Y,token:u,notify:J,stats:k,usageDetail:sd,adminUsers:cd,systemHealth:dd,loading:so,onRefreshAccount:()=>{},theme:Ot,setTheme:io}),!Lt&&Z==="recent"&&s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(Ga,{title:"Recent files",files:lm,emptyMessage:"No recent files yet.",onBack:()=>I("drive"),onOpen:pt})}),!Lt&&Z==="starred"&&s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(Ga,{title:"Starred",files:dm,emptyMessage:"Star files to see them here.",onBack:()=>I("drive"),onOpen:pt})}),!Lt&&Z==="shared"&&s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(Ga,{title:"Shared with you",files:fm,emptyMessage:"Nothing shared yet.",onBack:()=>I("drive"),onOpen:pt})}),!Lt&&Z==="activity"&&s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(z2,{api:Y,onBack:()=>I("drive")})}),!Lt&&Z==="trash"&&s.jsx(wb,{trashedFiles:em,trashedFolders:rm,loading:so,onRestoreFile:Em,onRestoreFolder:Cm,onPermanentDelete:jm,onEmptyTrash:Im,onBack:()=>I("drive")}),!Lt&&Z==="dashboard"&&s.jsx(e2,{stats:k,usage:sd,onBack:()=>I("drive")}),!Lt&&Z==="admin"&&s.jsx(t2,{users:cd,systemHealth:dd,loading:so,onBack:()=>I("drive")}),!Lt&&Z==="drive"&&s.jsxs(s.Fragment,{children:[s.jsx(V2,{username:p,stats:k,storagePercent:vd,onUpload:()=>{var w;return(w=Jn.current)==null?void 0:w.click()},onNewFolder:()=>tt(!0)}),s.jsxs("div",{className:"drive-toolbar",style:{flexDirection:"column",alignItems:"stretch",gap:16},children:[s.jsxs("div",{className:"mega-search-bar drive-search",children:[s.jsx("span",{className:"search-icon","aria-hidden":"true",children:"🔍"}),s.jsx("input",{className:"input-field",placeholder:"Search Cloud drive...",value:N,onChange:w=>U(w.target.value),style:{width:"100%",padding:"12px 20px 12px 44px",borderRadius:999,background:"var(--bg-card)",border:"1px solid var(--border)"}})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"icon-btn",title:Ot==="dark"?"Light mode":"Dark mode",onClick:()=>io(w=>w==="dark"?"light":"dark"),children:Ot==="dark"?"☀":"🌙"}),s.jsxs("div",{className:"view-toggle",children:[s.jsx("button",{type:"button",onClick:()=>tn("list"),className:`view-toggle-btn${Ye==="list"?" active":""}`,children:"☰"}),s.jsx("button",{type:"button",onClick:()=>tn("grid"),className:`view-toggle-btn${Ye==="grid"?" active":""}`,children:"▦"})]}),Z==="drive"&&s.jsxs("div",{className:"drive-actions",style:{marginLeft:"auto"},children:[s.jsx("button",{type:"button",onClick:()=>tt(w=>!w),className:"btn-secondary mega-folder-btn",children:"New folder"}),s.jsx("button",{type:"button",onClick:()=>{var w;return(w=Jn.current)==null?void 0:w.click()},className:"btn-primary mega-upload-btn",children:"Upload"}),s.jsx("button",{type:"button",onClick:()=>{var w;return(w=ud.current)==null?void 0:w.click()},className:"btn-secondary",children:"Folder"}),s.jsx("input",{ref:Jn,type:"file",multiple:!0,hidden:!0,onChange:w=>{na(w.target.files),w.target.value=""}}),s.jsx("input",{ref:ud,type:"file",multiple:!0,webkitdirectory:"",hidden:!0,onChange:w=>{na(w.target.files,!0),w.target.value=""}})]})]})]}),Z==="drive"&&s.jsxs("div",{className:"drive-sortbar",children:[s.jsxs("select",{value:le,onChange:w=>Rr(w.target.value),className:"select-field",children:[s.jsx("option",{value:"createdAt",children:"Date"}),s.jsx("option",{value:"name",children:"Name"}),s.jsx("option",{value:"size",children:"Size"}),s.jsx("option",{value:"updatedAt",children:"Modified"})]}),s.jsxs("select",{value:Q,onChange:w=>Qn(w.target.value),className:"select-field",children:[s.jsx("option",{value:"desc",children:"Descending"}),s.jsx("option",{value:"asc",children:"Ascending"})]}),Xs.length>0&&s.jsxs("select",{value:oo,onChange:w=>Gg(w.target.value),className:"select-field",style:{gridColumn:hm?"1 / -1":void 0},children:[s.jsx("option",{value:"",children:"All tags"}),Xs.map(w=>s.jsx("option",{value:w,children:w},w))]})]}),Z==="drive"&&s.jsx("div",{className:"filter-chips",children:Tu.map(w=>s.jsxs("button",{type:"button",onClick:()=>Js(w.key),className:`filter-chip${er===w.key?" active":""}`,children:[s.jsx("span",{children:w.icon})," ",w.label]},w.key))}),Z==="drive"&&no&&s.jsxs("div",{className:"new-folder-row",style:{display:"flex",gap:10,marginBottom:20,animation:"fadeIn .2s ease"},children:[s.jsx("input",{className:"input-field",placeholder:"Folder name…",value:et,onChange:w=>Te(w.target.value),onKeyDown:w=>w.key==="Enter"&&hd(),style:{width:260},autoFocus:!0}),s.jsx("button",{type:"button",onClick:hd,className:"btn-primary",children:"Create"}),s.jsx("button",{type:"button",onClick:()=>tt(!1),className:"btn-secondary",children:"Cancel"})]}),s.jsxs("div",{className:"breadcrumb-row",style:{alignItems:"center",gap:8,marginBottom:20,fontSize:14,color:"var(--text-muted)"},children:[s.jsxs("span",{onClick:()=>gd(-1),className:"breadcrumb-link",style:{color:E?"var(--text-secondary)":"var(--accent)"},children:[be.logo," Home"]}),T.map((w,P)=>s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--text-muted)"},children:"›"}),s.jsx("span",{onClick:()=>gd(P),className:"breadcrumb-link",style:{color:P===T.length-1?"var(--accent)":"var(--text-secondary)"},children:w.name})]},w.id))]}),F&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(240,22,58,.24)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(Kl,{size:14})," Uploading…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent)"},children:[ie,"%"]})]}),s.jsx(Ko,{value:ie})]}),ge&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(64,144,255,.3)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(Kl,{size:14,color:"var(--accent-blue)"})," Downloading ",ge.name,"…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent-blue)"},children:[ge.percent,"%"]})]}),s.jsx(Ko,{value:ge.percent})]}),s.jsx("div",{onDragOver:w=>{w.preventDefault(),Et(!0)},onDragLeave:()=>Et(!1),onDrop:Nm,className:`drop-zone${Ge?" drag-over":""}`,children:Ge?s.jsx("span",{style:{color:"var(--accent)",fontWeight:700,fontSize:16},children:"⬇ Drop files here to upload"}):s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:32,marginBottom:8},children:"📤"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:700,marginBottom:4},children:"Drag & drop files or folders"}),s.jsx("div",{style:{fontSize:13},children:"or use the Upload button above"})]})}),h.length>0&&s.jsxs("div",{style:{marginBottom:28},children:[s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px",marginBottom:12},children:"FOLDERS"}),s.jsx("div",{className:"folder-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:h.map(w=>s.jsx(q2,{folder:w,onOpen:Rm,onDelete:wm},w.id))})]}),s.jsxs("div",{children:[s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:s.jsxs("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px"},children:["FILES ",lo.length>0&&s.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:500},children:["(",lo.length,")"]})]})}),so?s.jsx(a2,{count:6,grid:Ye==="grid"}):lo.length===0?s.jsxs("div",{className:"glass-card empty-state",style:{textAlign:"center",padding:"72px 32px",borderRadius:"var(--radius-lg)",border:"1.5px dashed var(--border)",animation:"fadeIn .3s ease"},children:[s.jsx("div",{style:{width:88,height:88,margin:"0 auto 20px",borderRadius:24,background:"var(--gradient-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"var(--glow)"},children:s.jsx(vf,{size:48})}),s.jsx("div",{style:{fontWeight:800,fontSize:20,marginBottom:8,color:"var(--text)"},children:er!=="all"?"No matching files":"No files in My Drive yet"}),s.jsx("div",{style:{fontSize:14,color:"var(--text-muted)",marginBottom:24,maxWidth:360,margin:"0 auto 24px"},children:er!=="all"?"Try a different filter or upload new files.":"Upload photos, documents, and more. Everything stays secure in your drive."}),er==="all"&&s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"btn-primary",onClick:()=>{var w;return(w=Jn.current)==null?void 0:w.click()},children:"Upload your first file"}),s.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>tt(!0),children:"Create folder"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`file-grid${Ye==="grid"?" grid-view":""}`,style:{display:Ye==="grid"?"grid":"flex",gridTemplateColumns:Ye==="grid"?"repeat(auto-fill, minmax(250px, 1fr))":void 0,flexDirection:Ye==="list"?"column":void 0,gap:Ye==="grid"?12:8},children:lo.map(w=>s.jsx(Pm,{file:w,token:u,onDelete:xm,onShare:P=>ad(P),onPreview:pt,onRename:Tr,onDownload:vm,onMove:P=>qn({file:P,mode:"move"}),onCopy:P=>qn({file:P,mode:"copy"}),onTags:ta},w.id))}),qg&&s.jsx("button",{type:"button",onClick:()=>Le(Qg+1,!0),className:"load-more-btn",children:"Load more files"})]})]})]})]}),Ie&&s.jsx(_g,{file:Ie,token:u,onClose:()=>pt(null)}),nn&&s.jsx(Sb,{file:nn.file,mode:nn.mode,folders:d2(Xg),currentFolderId:E,onCancel:()=>qn(null),onConfirm:w=>nn.mode==="move"?km(nn.file,w):Sm(nn.file,w)}),ea&&s.jsx(Eb,{file:ea,allTags:Xs,onCancel:()=>ta(null),onSave:w=>_m(ea,w)}),Zs&&s.jsx(Zb,{file:Zs,onCancel:()=>ad(null),onShare:w=>bm(Zs,w)}),Ir&&s.jsx(F2,{title:Ir.title,message:Ir.message,danger:Ir.danger,onConfirm:Ir.onConfirm,onCancel:()=>ht(null)}),Yn&&s.jsx(U2,{file:Yn,onRename:w=>Tm(Yn,w),onCancel:()=>Tr(null)}),s.jsx(D2,{jobs:R,history:M}),re&&s.jsx(M2,{msg:re.msg,type:re.type,onClose:()=>ft(null)})]})})})}function K2({appPage:e,setAppPage:t,api:r,notify:n,stats:i,usageDetail:o,adminUsers:a,systemHealth:c,loading:l,onRefreshAccount:d,theme:u,setTheme:f}){const{account:p,refreshAll:x}=$g();if(!e)return null;const v=()=>t(null);return e==="profile"?s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(N2,{account:p,onBack:v})}):e==="settings"?s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(P2,{account:p,api:r,onBack:v,onUpdated:()=>x(),notify:n,theme:u,onThemeChange:f})}):e==="security"?s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(A2,{api:r,account:p,onBack:v,notify:n})}):e==="billing"?s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(O2,{account:p,api:r,onBack:v,notify:n,onUpdated:()=>x()})}):e==="help"?s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(L2,{onBack:v})}):null}function q2({folder:e,onOpen:t,onDelete:r}){const[n,i]=y.useState(!1);return s.jsxs("div",{className:"folder-card",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>t(e),children:[s.jsx("span",{style:{fontSize:24},children:"📁"}),s.jsx("div",{style:{flex:1,minWidth:0},children:s.jsx("div",{style:{fontWeight:600,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},children:e.name})}),s.jsx("button",{onClick:o=>{o.stopPropagation(),r(e)},style:{background:"none",border:"none",color:"rgba(255,100,100,.3)",cursor:"pointer",fontSize:14,padding:4,borderRadius:6,opacity:n?1:0,transition:"opacity .15s"},children:"🗑"})]})}Ph(document.getElementById("root")).render(s.jsx(y.StrictMode,{children:s.jsx(Q2,{})}));export{be as B,m1 as P,J2 as S,Ae as a,Ji as f,s as j,y as r,qi as t};
