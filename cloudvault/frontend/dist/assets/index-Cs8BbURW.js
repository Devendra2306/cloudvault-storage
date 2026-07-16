(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function ym(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sf={exports:{}},_s={},af={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),xm=Symbol.for("react.portal"),wm=Symbol.for("react.fragment"),bm=Symbol.for("react.strict_mode"),km=Symbol.for("react.profiler"),Sm=Symbol.for("react.provider"),_m=Symbol.for("react.context"),Em=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),Im=Symbol.for("react.memo"),jm=Symbol.for("react.lazy"),lu=Symbol.iterator;function Tm(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var lf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cf=Object.assign,uf={};function Fn(e,t,r){this.props=e,this.context=t,this.refs=uf,this.updater=r||lf}Fn.prototype.isReactComponent={};Fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function df(){}df.prototype=Fn.prototype;function Ul(e,t,r){this.props=e,this.context=t,this.refs=uf,this.updater=r||lf}var Bl=Ul.prototype=new df;Bl.constructor=Ul;cf(Bl,Fn.prototype);Bl.isPureReactComponent=!0;var cu=Array.isArray,ff=Object.prototype.hasOwnProperty,Wl={current:null},pf={key:!0,ref:!0,__self:!0,__source:!0};function hf(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ff.call(t,n)&&!pf.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)i[n]===void 0&&(i[n]=c[n]);return{$$typeof:Gi,type:e,key:o,ref:a,props:i,_owner:Wl.current}}function Rm(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $l(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function Nm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var uu=/\/+/g;function ea(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nm(""+e.key):t.toString(36)}function jo(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Gi:case xm:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+ea(a,0):n,cu(i)?(r="",e!=null&&(r=e.replace(uu,"$&/")+"/"),jo(i,t,r,"",function(u){return u})):i!=null&&($l(i)&&(i=Rm(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(uu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",cu(e))for(var c=0;c<e.length;c++){o=e[c];var l=n+ea(o,c);a+=jo(o,t,r,l,i)}else if(l=Tm(e),typeof l=="function")for(e=l.call(e),c=0;!(o=e.next()).done;)o=o.value,l=n+ea(o,c++),a+=jo(o,t,r,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ao(e,t,r){if(e==null)return e;var n=[],i=0;return jo(e,n,"","",function(o){return t.call(r,o,i++)}),n}function Pm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},To={transition:null},Am={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:To,ReactCurrentOwner:Wl};function gf(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:ao,forEach:function(e,t,r){ao(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ao(e,function(){t++}),t},toArray:function(e){return ao(e,function(t){return t})||[]},only:function(e){if(!$l(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Fn;U.Fragment=wm;U.Profiler=km;U.PureComponent=Ul;U.StrictMode=bm;U.Suspense=Cm;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Am;U.act=gf;U.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=cf({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Wl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)ff.call(t,l)&&!pf.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];n.children=c}return{$$typeof:Gi,type:e.type,key:i,ref:o,props:n,_owner:a}};U.createContext=function(e){return e={$$typeof:_m,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sm,_context:e},e.Consumer=e};U.createElement=hf;U.createFactory=function(e){var t=hf.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Em,render:e}};U.isValidElement=$l;U.lazy=function(e){return{$$typeof:jm,_payload:{_status:-1,_result:e},_init:Pm}};U.memo=function(e,t){return{$$typeof:Im,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=To.transition;To.transition={};try{e()}finally{To.transition=t}};U.unstable_act=gf;U.useCallback=function(e,t){return Ue.current.useCallback(e,t)};U.useContext=function(e){return Ue.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};U.useEffect=function(e,t){return Ue.current.useEffect(e,t)};U.useId=function(){return Ue.current.useId()};U.useImperativeHandle=function(e,t,r){return Ue.current.useImperativeHandle(e,t,r)};U.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Ue.current.useMemo(e,t)};U.useReducer=function(e,t,r){return Ue.current.useReducer(e,t,r)};U.useRef=function(e){return Ue.current.useRef(e)};U.useState=function(e){return Ue.current.useState(e)};U.useSyncExternalStore=function(e,t,r){return Ue.current.useSyncExternalStore(e,t,r)};U.useTransition=function(){return Ue.current.useTransition()};U.version="18.3.1";af.exports=U;var y=af.exports;const ve=ym(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om=y,Lm=Symbol.for("react.element"),Mm=Symbol.for("react.fragment"),zm=Object.prototype.hasOwnProperty,Dm=Om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fm={key:!0,ref:!0,__self:!0,__source:!0};function mf(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)zm.call(t,n)&&!Fm.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Lm,type:e,key:o,ref:a,props:i,_owner:Dm.current}}_s.Fragment=Mm;_s.jsx=mf;_s.jsxs=mf;sf.exports=_s;var s=sf.exports,vf={exports:{}},Xe={},yf={exports:{}},xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var M=T.length;T.push(L);e:for(;0<M;){var K=M-1>>>1,re=T[K];if(0<i(re,L))T[K]=L,T[M]=re,M=K;else break e}}function r(T){return T.length===0?null:T[0]}function n(T){if(T.length===0)return null;var L=T[0],M=T.pop();if(M!==L){T[0]=M;e:for(var K=0,re=T.length,We=re>>>1;K<We;){var Ie=2*(K+1)-1,Jt=T[Ie],wt=Ie+1,me=T[wt];if(0>i(Jt,M))wt<re&&0>i(me,Jt)?(T[K]=me,T[wt]=M,K=wt):(T[K]=Jt,T[Ie]=M,K=Ie);else if(wt<re&&0>i(me,M))T[K]=me,T[wt]=M,K=wt;else break e}}return L}function i(T,L){var M=T.sortIndex-L.sortIndex;return M!==0?M:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var l=[],u=[],d=1,f=null,p=3,x=!1,v=!1,k=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var L=r(u);L!==null;){if(L.callback===null)n(u);else if(L.startTime<=T)n(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=r(u)}}function b(T){if(k=!1,m(T),!v)if(r(l)!==null)v=!0,Ce(_);else{var L=r(u);L!==null&&be(b,L.startTime-T)}}function _(T,L){v=!1,k&&(k=!1,g(N),N=-1),x=!0;var M=p;try{for(m(L),f=r(l);f!==null&&(!(f.expirationTime>L)||T&&!H());){var K=f.callback;if(typeof K=="function"){f.callback=null,p=f.priorityLevel;var re=K(f.expirationTime<=L);L=e.unstable_now(),typeof re=="function"?f.callback=re:f===r(l)&&n(l),m(L)}else n(l);f=r(l)}if(f!==null)var We=!0;else{var Ie=r(u);Ie!==null&&be(b,Ie.startTime-L),We=!1}return We}finally{f=null,p=M,x=!1}}var C=!1,I=null,N=-1,D=5,P=-1;function H(){return!(e.unstable_now()-P<D)}function te(){if(I!==null){var T=e.unstable_now();P=T;var L=!0;try{L=I(!0,T)}finally{L?pe():(C=!1,I=null)}}else C=!1}var pe;if(typeof h=="function")pe=function(){h(te)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,Ee=we.port2;we.port1.onmessage=te,pe=function(){Ee.postMessage(null)}}else pe=function(){S(te,0)};function Ce(T){I=T,C||(C=!0,pe())}function be(T,L){N=S(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,Ce(_))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var M=p;p=L;try{return T()}finally{p=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=p;p=T;try{return L()}finally{p=M}},e.unstable_scheduleCallback=function(T,L,M){var K=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?K+M:K):M=K,T){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=M+re,T={id:d++,callback:L,priorityLevel:T,startTime:M,expirationTime:re,sortIndex:-1},M>K?(T.sortIndex=M,t(u,T),r(l)===null&&T===r(u)&&(k?(g(N),N=-1):k=!0,be(b,M-K))):(T.sortIndex=re,t(l,T),v||x||(v=!0,Ce(_))),T},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(T){var L=p;return function(){var M=p;p=L;try{return T.apply(this,arguments)}finally{p=M}}}})(xf);yf.exports=xf;var Um=yf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm=y,Je=Um;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wf=new Set,Ci={};function Jr(e,t){Tn(e,t),Tn(e+"Capture",t)}function Tn(e,t){for(Ci[e]=t,e=0;e<t.length;e++)wf.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),za=Object.prototype.hasOwnProperty,Wm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,du={},fu={};function $m(e){return za.call(fu,e)?!0:za.call(du,e)?!1:Wm.test(e)?fu[e]=!0:(du[e]=!0,!1)}function Vm(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hm(e,t,r,n){if(t===null||typeof t>"u"||Vm(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vl=/[\-:]([a-z])/g;function Hl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vl,Hl);Re[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vl,Hl);Re[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vl,Hl);Re[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gl(e,t,r,n){var i=Re.hasOwnProperty(t)?Re[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hm(t,r,i,n)&&(r=null),n||i===null?$m(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var qt=Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lo=Symbol.for("react.element"),sn=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),Da=Symbol.for("react.profiler"),bf=Symbol.for("react.provider"),kf=Symbol.for("react.context"),Ql=Symbol.for("react.forward_ref"),Fa=Symbol.for("react.suspense"),Ua=Symbol.for("react.suspense_list"),Kl=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),Sf=Symbol.for("react.offscreen"),pu=Symbol.iterator;function Zn(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,ta;function ui(e){if(ta===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ta=t&&t[1]||""}return`
`+ta+e}var ra=!1;function na(e,t){if(!e||ra)return"";ra=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,c=o.length-1;1<=a&&0<=c&&i[a]!==o[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==o[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==o[c]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=c);break}}}finally{ra=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ui(e):""}function Gm(e){switch(e.tag){case 5:return ui(e.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return e=na(e.type,!1),e;case 11:return e=na(e.type.render,!1),e;case 1:return e=na(e.type,!0),e;default:return""}}function Ba(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case an:return"Fragment";case sn:return"Portal";case Da:return"Profiler";case Yl:return"StrictMode";case Fa:return"Suspense";case Ua:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kf:return(e.displayName||"Context")+".Consumer";case bf:return(e._context.displayName||"Context")+".Provider";case Ql:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Kl:return t=e.displayName||null,t!==null?t:Ba(e.type)||"Memo";case rr:t=e._payload,e=e._init;try{return Ba(e(t))}catch{}}return null}function Ym(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ba(t);case 8:return t===Yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function br(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qm(e){var t=_f(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function co(e){e._valueTracker||(e._valueTracker=Qm(e))}function Ef(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=_f(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wa(e,t){var r=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function hu(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=br(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cf(e,t){t=t.checked,t!=null&&Gl(e,"checked",t,!1)}function $a(e,t){Cf(e,t);var r=br(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Va(e,t.type,r):t.hasOwnProperty("defaultValue")&&Va(e,t.type,br(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gu(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Va(e,t,r){(t!=="number"||Ho(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var di=Array.isArray;function xn(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+br(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(di(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:br(r)}}function If(e,t){var r=br(t.value),n=br(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function vu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ga(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var uo,Tf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ii(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Km=["Webkit","ms","Moz","O"];Object.keys(hi).forEach(function(e){Km.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hi[t]=hi[e]})});function Rf(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||hi.hasOwnProperty(e)&&hi[e]?(""+t).trim():t+"px"}function Nf(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Rf(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var qm=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ya(e,t){if(t){if(qm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Qa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ka=null;function ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,wn=null,bn=null;function yu(e){if(e=Ki(e)){if(typeof qa!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Ts(t),qa(e.stateNode,e.type,t))}}function Pf(e){wn?bn?bn.push(e):bn=[e]:wn=e}function Af(){if(wn){var e=wn,t=bn;if(bn=wn=null,yu(e),t)for(e=0;e<t.length;e++)yu(t[e])}}function Of(e,t){return e(t)}function Lf(){}var ia=!1;function Mf(e,t,r){if(ia)return e(t,r);ia=!0;try{return Of(e,t,r)}finally{ia=!1,(wn!==null||bn!==null)&&(Lf(),Af())}}function ji(e,t){var r=e.stateNode;if(r===null)return null;var n=Ts(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var Ja=!1;if($t)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{Ja=!1}function Jm(e,t,r,n,i,o,a,c,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var gi=!1,Go=null,Yo=!1,Xa=null,Xm={onError:function(e){gi=!0,Go=e}};function Zm(e,t,r,n,i,o,a,c,l){gi=!1,Go=null,Jm.apply(Xm,arguments)}function ev(e,t,r,n,i,o,a,c,l){if(Zm.apply(this,arguments),gi){if(gi){var u=Go;gi=!1,Go=null}else throw Error(E(198));Yo||(Yo=!0,Xa=u)}}function Xr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function zf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xu(e){if(Xr(e)!==e)throw Error(E(188))}function tv(e){var t=e.alternate;if(!t){if(t=Xr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return xu(i),e;if(o===n)return xu(i),t;o=o.sibling}throw Error(E(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,c=i.child;c;){if(c===r){a=!0,r=i,n=o;break}if(c===n){a=!0,n=i,r=o;break}c=c.sibling}if(!a){for(c=o.child;c;){if(c===r){a=!0,r=o,n=i;break}if(c===n){a=!0,n=o,r=i;break}c=c.sibling}if(!a)throw Error(E(189))}}if(r.alternate!==n)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function Df(e){return e=tv(e),e!==null?Ff(e):null}function Ff(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ff(e);if(t!==null)return t;e=e.sibling}return null}var Uf=Je.unstable_scheduleCallback,wu=Je.unstable_cancelCallback,rv=Je.unstable_shouldYield,nv=Je.unstable_requestPaint,he=Je.unstable_now,iv=Je.unstable_getCurrentPriorityLevel,Jl=Je.unstable_ImmediatePriority,Bf=Je.unstable_UserBlockingPriority,Qo=Je.unstable_NormalPriority,ov=Je.unstable_LowPriority,Wf=Je.unstable_IdlePriority,Es=null,Ct=null;function sv(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Es,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:cv,av=Math.log,lv=Math.LN2;function cv(e){return e>>>=0,e===0?32:31-(av(e)/lv|0)|0}var fo=64,po=4194304;function fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ko(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var c=a&~i;c!==0?n=fi(c):(o&=a,o!==0&&(n=fi(o)))}else a=r&~i,a!==0?n=fi(a):o!==0&&(n=fi(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-mt(t),i=1<<r,n|=e[r],t&=~i;return n}function uv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dv(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-mt(o),c=1<<a,l=i[a];l===-1?(!(c&r)||c&n)&&(i[a]=uv(c,t)):l<=t&&(e.expiredLanes|=c),o&=~c}}function Za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $f(){var e=fo;return fo<<=1,!(fo&4194240)&&(fo=64),e}function oa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Yi(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=r}function fv(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-mt(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function Xl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-mt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var X=0;function Vf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hf,Zl,Gf,Yf,Qf,el=!1,ho=[],dr=null,fr=null,pr=null,Ti=new Map,Ri=new Map,ir=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bu(e,t){switch(e){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(t.pointerId)}}function ti(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Zl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function hv(e,t,r,n,i){switch(t){case"focusin":return dr=ti(dr,e,t,r,n,i),!0;case"dragenter":return fr=ti(fr,e,t,r,n,i),!0;case"mouseover":return pr=ti(pr,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Ti.set(o,ti(Ti.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Ri.set(o,ti(Ri.get(o)||null,e,t,r,n,i)),!0}return!1}function Kf(e){var t=zr(e.target);if(t!==null){var r=Xr(t);if(r!==null){if(t=r.tag,t===13){if(t=zf(r),t!==null){e.blockedOn=t,Qf(e.priority,function(){Gf(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ro(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=tl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ka=n,r.target.dispatchEvent(n),Ka=null}else return t=Ki(r),t!==null&&Zl(t),e.blockedOn=r,!1;t.shift()}return!0}function ku(e,t,r){Ro(e)&&r.delete(t)}function gv(){el=!1,dr!==null&&Ro(dr)&&(dr=null),fr!==null&&Ro(fr)&&(fr=null),pr!==null&&Ro(pr)&&(pr=null),Ti.forEach(ku),Ri.forEach(ku)}function ri(e,t){e.blockedOn===t&&(e.blockedOn=null,el||(el=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,gv)))}function Ni(e){function t(i){return ri(i,e)}if(0<ho.length){ri(ho[0],e);for(var r=1;r<ho.length;r++){var n=ho[r];n.blockedOn===e&&(n.blockedOn=null)}}for(dr!==null&&ri(dr,e),fr!==null&&ri(fr,e),pr!==null&&ri(pr,e),Ti.forEach(t),Ri.forEach(t),r=0;r<ir.length;r++)n=ir[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<ir.length&&(r=ir[0],r.blockedOn===null);)Kf(r),r.blockedOn===null&&ir.shift()}var kn=qt.ReactCurrentBatchConfig,qo=!0;function mv(e,t,r,n){var i=X,o=kn.transition;kn.transition=null;try{X=1,ec(e,t,r,n)}finally{X=i,kn.transition=o}}function vv(e,t,r,n){var i=X,o=kn.transition;kn.transition=null;try{X=4,ec(e,t,r,n)}finally{X=i,kn.transition=o}}function ec(e,t,r,n){if(qo){var i=tl(e,t,r,n);if(i===null)ga(e,t,n,Jo,r),bu(e,n);else if(hv(i,e,t,r,n))n.stopPropagation();else if(bu(e,n),t&4&&-1<pv.indexOf(e)){for(;i!==null;){var o=Ki(i);if(o!==null&&Hf(o),o=tl(e,t,r,n),o===null&&ga(e,t,n,Jo,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else ga(e,t,n,null,r)}}var Jo=null;function tl(e,t,r,n){if(Jo=null,e=ql(n),e=zr(e),e!==null)if(t=Xr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=zf(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jo=e,null}function qf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iv()){case Jl:return 1;case Bf:return 4;case Qo:case ov:return 16;case Wf:return 536870912;default:return 16}default:return 16}}var lr=null,tc=null,No=null;function Jf(){if(No)return No;var e,t=tc,r=t.length,n,i="value"in lr?lr.value:lr.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return No=i.slice(e,1<n?1-n:void 0)}function Po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function Su(){return!1}function Ze(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?go:Su,this.isPropagationStopped=Su,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Ze(Un),Qi=ce({},Un,{view:0,detail:0}),yv=Ze(Qi),sa,aa,ni,Cs=ce({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?(sa=e.screenX-ni.screenX,aa=e.screenY-ni.screenY):aa=sa=0,ni=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:aa}}),_u=Ze(Cs),xv=ce({},Cs,{dataTransfer:0}),wv=Ze(xv),bv=ce({},Qi,{relatedTarget:0}),la=Ze(bv),kv=ce({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),Sv=Ze(kv),_v=ce({},Un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ev=Ze(_v),Cv=ce({},Un,{data:0}),Eu=Ze(Cv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tv[e])?!!t[e]:!1}function nc(){return Rv}var Nv=ce({},Qi,{key:function(e){if(e.key){var t=Iv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(e){return e.type==="keypress"?Po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pv=Ze(Nv),Av=ce({},Cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=Ze(Av),Ov=ce({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),Lv=Ze(Ov),Mv=ce({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=Ze(Mv),Dv=ce({},Cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=Ze(Dv),Uv=[9,13,27,32],ic=$t&&"CompositionEvent"in window,mi=null;$t&&"documentMode"in document&&(mi=document.documentMode);var Bv=$t&&"TextEvent"in window&&!mi,Xf=$t&&(!ic||mi&&8<mi&&11>=mi),Iu=" ",ju=!1;function Zf(e,t){switch(e){case"keyup":return Uv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ln=!1;function Wv(e,t){switch(e){case"compositionend":return ep(t);case"keypress":return t.which!==32?null:(ju=!0,Iu);case"textInput":return e=t.data,e===Iu&&ju?null:e;default:return null}}function $v(e,t){if(ln)return e==="compositionend"||!ic&&Zf(e,t)?(e=Jf(),No=tc=lr=null,ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xf&&t.locale!=="ko"?null:t.data;default:return null}}var Vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vv[e.type]:t==="textarea"}function tp(e,t,r,n){Pf(n),t=Xo(t,"onChange"),0<t.length&&(r=new rc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var vi=null,Pi=null;function Hv(e){fp(e,0)}function Is(e){var t=dn(e);if(Ef(t))return e}function Gv(e,t){if(e==="change")return t}var rp=!1;if($t){var ca;if($t){var ua="oninput"in document;if(!ua){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),ua=typeof Ru.oninput=="function"}ca=ua}else ca=!1;rp=ca&&(!document.documentMode||9<document.documentMode)}function Nu(){vi&&(vi.detachEvent("onpropertychange",np),Pi=vi=null)}function np(e){if(e.propertyName==="value"&&Is(Pi)){var t=[];tp(t,Pi,e,ql(e)),Mf(Hv,t)}}function Yv(e,t,r){e==="focusin"?(Nu(),vi=t,Pi=r,vi.attachEvent("onpropertychange",np)):e==="focusout"&&Nu()}function Qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Is(Pi)}function Kv(e,t){if(e==="click")return Is(t)}function qv(e,t){if(e==="input"||e==="change")return Is(t)}function Jv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Jv;function Ai(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!za.call(t,i)||!xt(e[i],t[i]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,t){var r=Pu(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Pu(r)}}function ip(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ip(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function op(){for(var e=window,t=Ho();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ho(e.document)}return t}function oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xv(e){var t=op(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ip(r.ownerDocument.documentElement,r)){if(n!==null&&oc(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=Au(r,o);var a=Au(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zv=$t&&"documentMode"in document&&11>=document.documentMode,cn=null,rl=null,yi=null,nl=!1;function Ou(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;nl||cn==null||cn!==Ho(n)||(n=cn,"selectionStart"in n&&oc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),yi&&Ai(yi,n)||(yi=n,n=Xo(rl,"onSelect"),0<n.length&&(t=new rc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=cn)))}function mo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var un={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},da={},sp={};$t&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete un.animationend.animation,delete un.animationiteration.animation,delete un.animationstart.animation),"TransitionEvent"in window||delete un.transitionend.transition);function js(e){if(da[e])return da[e];if(!un[e])return e;var t=un[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in sp)return da[e]=t[r];return e}var ap=js("animationend"),lp=js("animationiteration"),cp=js("animationstart"),up=js("transitionend"),dp=new Map,Lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(e,t){dp.set(e,t),Jr(t,[e])}for(var fa=0;fa<Lu.length;fa++){var pa=Lu[fa],e0=pa.toLowerCase(),t0=pa[0].toUpperCase()+pa.slice(1);Sr(e0,"on"+t0)}Sr(ap,"onAnimationEnd");Sr(lp,"onAnimationIteration");Sr(cp,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(up,"onTransitionEnd");Tn("onMouseEnter",["mouseout","mouseover"]);Tn("onMouseLeave",["mouseout","mouseover"]);Tn("onPointerEnter",["pointerout","pointerover"]);Tn("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));function Mu(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,ev(n,t,void 0,e),e.currentTarget=null}function fp(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var c=n[a],l=c.instance,u=c.currentTarget;if(c=c.listener,l!==o&&i.isPropagationStopped())break e;Mu(i,c,u),o=l}else for(a=0;a<n.length;a++){if(c=n[a],l=c.instance,u=c.currentTarget,c=c.listener,l!==o&&i.isPropagationStopped())break e;Mu(i,c,u),o=l}}}if(Yo)throw e=Xa,Yo=!1,Xa=null,e}function ne(e,t){var r=t[ll];r===void 0&&(r=t[ll]=new Set);var n=e+"__bubble";r.has(n)||(pp(t,e,2,!1),r.add(n))}function ha(e,t,r){var n=0;t&&(n|=4),pp(r,e,n,t)}var vo="_reactListening"+Math.random().toString(36).slice(2);function Oi(e){if(!e[vo]){e[vo]=!0,wf.forEach(function(r){r!=="selectionchange"&&(r0.has(r)||ha(r,!1,e),ha(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vo]||(t[vo]=!0,ha("selectionchange",!1,t))}}function pp(e,t,r,n){switch(qf(t)){case 1:var i=mv;break;case 4:i=vv;break;default:i=ec}r=i.bind(null,t,r,e),i=void 0,!Ja||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function ga(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var c=n.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;c!==null;){if(a=zr(c),a===null)return;if(l=a.tag,l===5||l===6){n=o=a;continue e}c=c.parentNode}}n=n.return}Mf(function(){var u=o,d=ql(r),f=[];e:{var p=dp.get(e);if(p!==void 0){var x=rc,v=e;switch(e){case"keypress":if(Po(r)===0)break e;case"keydown":case"keyup":x=Pv;break;case"focusin":v="focus",x=la;break;case"focusout":v="blur",x=la;break;case"beforeblur":case"afterblur":x=la;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=_u;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Lv;break;case ap:case lp:case cp:x=Sv;break;case up:x=zv;break;case"scroll":x=yv;break;case"wheel":x=Fv;break;case"copy":case"cut":case"paste":x=Ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Cu}var k=(t&4)!==0,S=!k&&e==="scroll",g=k?p!==null?p+"Capture":null:p;k=[];for(var h=u,m;h!==null;){m=h;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,g!==null&&(b=ji(h,g),b!=null&&k.push(Li(h,b,m)))),S)break;h=h.return}0<k.length&&(p=new x(p,v,null,r,d),f.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&r!==Ka&&(v=r.relatedTarget||r.fromElement)&&(zr(v)||v[Vt]))break e;if((x||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,x?(v=r.relatedTarget||r.toElement,x=u,v=v?zr(v):null,v!==null&&(S=Xr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(k=_u,b="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(k=Cu,b="onPointerLeave",g="onPointerEnter",h="pointer"),S=x==null?p:dn(x),m=v==null?p:dn(v),p=new k(b,h+"leave",x,r,d),p.target=S,p.relatedTarget=m,b=null,zr(d)===u&&(k=new k(g,h+"enter",v,r,d),k.target=m,k.relatedTarget=S,b=k),S=b,x&&v)t:{for(k=x,g=v,h=0,m=k;m;m=nn(m))h++;for(m=0,b=g;b;b=nn(b))m++;for(;0<h-m;)k=nn(k),h--;for(;0<m-h;)g=nn(g),m--;for(;h--;){if(k===g||g!==null&&k===g.alternate)break t;k=nn(k),g=nn(g)}k=null}else k=null;x!==null&&zu(f,p,x,k,!1),v!==null&&S!==null&&zu(f,S,v,k,!0)}}e:{if(p=u?dn(u):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var _=Gv;else if(Tu(p))if(rp)_=qv;else{_=Qv;var C=Yv}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=Kv);if(_&&(_=_(e,u))){tp(f,_,r,d);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Va(p,"number",p.value)}switch(C=u?dn(u):window,e){case"focusin":(Tu(C)||C.contentEditable==="true")&&(cn=C,rl=u,yi=null);break;case"focusout":yi=rl=cn=null;break;case"mousedown":nl=!0;break;case"contextmenu":case"mouseup":case"dragend":nl=!1,Ou(f,r,d);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":Ou(f,r,d)}var I;if(ic)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ln?Zf(e,r)&&(N="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(Xf&&r.locale!=="ko"&&(ln||N!=="onCompositionStart"?N==="onCompositionEnd"&&ln&&(I=Jf()):(lr=d,tc="value"in lr?lr.value:lr.textContent,ln=!0)),C=Xo(u,N),0<C.length&&(N=new Eu(N,e,null,r,d),f.push({event:N,listeners:C}),I?N.data=I:(I=ep(r),I!==null&&(N.data=I)))),(I=Bv?Wv(e,r):$v(e,r))&&(u=Xo(u,"onBeforeInput"),0<u.length&&(d=new Eu("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:u}),d.data=I))}fp(f,t)})}function Li(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Xo(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ji(e,r),o!=null&&n.unshift(Li(e,o,i)),o=ji(e,t),o!=null&&n.push(Li(e,o,i))),e=e.return}return n}function nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zu(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var c=r,l=c.alternate,u=c.stateNode;if(l!==null&&l===n)break;c.tag===5&&u!==null&&(c=u,i?(l=ji(r,o),l!=null&&a.unshift(Li(r,l,c))):i||(l=ji(r,o),l!=null&&a.push(Li(r,l,c)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var n0=/\r\n?/g,i0=/\u0000|\uFFFD/g;function Du(e){return(typeof e=="string"?e:""+e).replace(n0,`
`).replace(i0,"")}function yo(e,t,r){if(t=Du(t),Du(e)!==t&&r)throw Error(E(425))}function Zo(){}var il=null,ol=null;function sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var al=typeof setTimeout=="function"?setTimeout:void 0,o0=typeof clearTimeout=="function"?clearTimeout:void 0,Fu=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof Fu<"u"?function(e){return Fu.resolve(null).then(e).catch(a0)}:al;function a0(e){setTimeout(function(){throw e})}function ma(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Ni(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ni(t)}function hr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),_t="__reactFiber$"+Bn,Mi="__reactProps$"+Bn,Vt="__reactContainer$"+Bn,ll="__reactEvents$"+Bn,l0="__reactListeners$"+Bn,c0="__reactHandles$"+Bn;function zr(e){var t=e[_t];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Vt]||r[_t]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Uu(e);e!==null;){if(r=e[_t])return r;e=Uu(e)}return t}e=r,r=e.parentNode}return null}function Ki(e){return e=e[_t]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ts(e){return e[Mi]||null}var cl=[],fn=-1;function _r(e){return{current:e}}function ie(e){0>fn||(e.current=cl[fn],cl[fn]=null,fn--)}function ee(e,t){fn++,cl[fn]=e.current,e.current=t}var kr={},Oe=_r(kr),He=_r(!1),Hr=kr;function Rn(e,t){var r=e.type.contextTypes;if(!r)return kr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(e){return e=e.childContextTypes,e!=null}function es(){ie(He),ie(Oe)}function Bu(e,t,r){if(Oe.current!==kr)throw Error(E(168));ee(Oe,t),ee(He,r)}function hp(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(E(108,Ym(e)||"Unknown",i));return ce({},r,n)}function ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kr,Hr=Oe.current,ee(Oe,e),ee(He,He.current),!0}function Wu(e,t,r){var n=e.stateNode;if(!n)throw Error(E(169));r?(e=hp(e,t,Hr),n.__reactInternalMemoizedMergedChildContext=e,ie(He),ie(Oe),ee(Oe,e)):ie(He),ee(He,r)}var Ot=null,Rs=!1,va=!1;function gp(e){Ot===null?Ot=[e]:Ot.push(e)}function u0(e){Rs=!0,gp(e)}function Er(){if(!va&&Ot!==null){va=!0;var e=0,t=X;try{var r=Ot;for(X=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ot=null,Rs=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(e+1)),Uf(Jl,Er),i}finally{X=t,va=!1}}return null}var pn=[],hn=0,rs=null,ns=0,rt=[],nt=0,Gr=null,Dt=1,Ft="";function Or(e,t){pn[hn++]=ns,pn[hn++]=rs,rs=e,ns=t}function mp(e,t,r){rt[nt++]=Dt,rt[nt++]=Ft,rt[nt++]=Gr,Gr=e;var n=Dt;e=Ft;var i=32-mt(n)-1;n&=~(1<<i),r+=1;var o=32-mt(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,Dt=1<<32-mt(t)+i|r<<i|n,Ft=o+e}else Dt=1<<o|r<<i|n,Ft=e}function sc(e){e.return!==null&&(Or(e,1),mp(e,1,0))}function ac(e){for(;e===rs;)rs=pn[--hn],pn[hn]=null,ns=pn[--hn],pn[hn]=null;for(;e===Gr;)Gr=rt[--nt],rt[nt]=null,Ft=rt[--nt],rt[nt]=null,Dt=rt[--nt],rt[nt]=null}var qe=null,Ke=null,oe=!1,ht=null;function vp(e,t){var r=it(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function $u(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ke=hr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Gr!==null?{id:Dt,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=it(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,qe=e,Ke=null,!0):!1;default:return!1}}function ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function dl(e){if(oe){var t=Ke;if(t){var r=t;if(!$u(e,t)){if(ul(e))throw Error(E(418));t=hr(r.nextSibling);var n=qe;t&&$u(e,t)?vp(n,r):(e.flags=e.flags&-4097|2,oe=!1,qe=e)}}else{if(ul(e))throw Error(E(418));e.flags=e.flags&-4097|2,oe=!1,qe=e}}}function Vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function xo(e){if(e!==qe)return!1;if(!oe)return Vu(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sl(e.type,e.memoizedProps)),t&&(t=Ke)){if(ul(e))throw yp(),Error(E(418));for(;t;)vp(e,t),t=hr(t.nextSibling)}if(Vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ke=hr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=qe?hr(e.stateNode.nextSibling):null;return!0}function yp(){for(var e=Ke;e;)e=hr(e.nextSibling)}function Nn(){Ke=qe=null,oe=!1}function lc(e){ht===null?ht=[e]:ht.push(e)}var d0=qt.ReactCurrentBatchConfig;function ii(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var n=r.stateNode}if(!n)throw Error(E(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var c=i.refs;a===null?delete c[o]:c[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function wo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hu(e){var t=e._init;return t(e._payload)}function xp(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function r(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function n(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=yr(g,h),g.index=0,g.sibling=null,g}function o(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function c(g,h,m,b){return h===null||h.tag!==6?(h=_a(m,g.mode,b),h.return=g,h):(h=i(h,m),h.return=g,h)}function l(g,h,m,b){var _=m.type;return _===an?d(g,h,m.props.children,b,m.key):h!==null&&(h.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===rr&&Hu(_)===h.type)?(b=i(h,m.props),b.ref=ii(g,h,m),b.return=g,b):(b=Fo(m.type,m.key,m.props,null,g.mode,b),b.ref=ii(g,h,m),b.return=g,b)}function u(g,h,m,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Ea(m,g.mode,b),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function d(g,h,m,b,_){return h===null||h.tag!==7?(h=Wr(m,g.mode,b,_),h.return=g,h):(h=i(h,m),h.return=g,h)}function f(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=_a(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case lo:return m=Fo(h.type,h.key,h.props,null,g.mode,m),m.ref=ii(g,null,h),m.return=g,m;case sn:return h=Ea(h,g.mode,m),h.return=g,h;case rr:var b=h._init;return f(g,b(h._payload),m)}if(di(h)||Zn(h))return h=Wr(h,g.mode,m,null),h.return=g,h;wo(g,h)}return null}function p(g,h,m,b){var _=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:c(g,h,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case lo:return m.key===_?l(g,h,m,b):null;case sn:return m.key===_?u(g,h,m,b):null;case rr:return _=m._init,p(g,h,_(m._payload),b)}if(di(m)||Zn(m))return _!==null?null:d(g,h,m,b,null);wo(g,m)}return null}function x(g,h,m,b,_){if(typeof b=="string"&&b!==""||typeof b=="number")return g=g.get(m)||null,c(h,g,""+b,_);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case lo:return g=g.get(b.key===null?m:b.key)||null,l(h,g,b,_);case sn:return g=g.get(b.key===null?m:b.key)||null,u(h,g,b,_);case rr:var C=b._init;return x(g,h,m,C(b._payload),_)}if(di(b)||Zn(b))return g=g.get(m)||null,d(h,g,b,_,null);wo(h,b)}return null}function v(g,h,m,b){for(var _=null,C=null,I=h,N=h=0,D=null;I!==null&&N<m.length;N++){I.index>N?(D=I,I=null):D=I.sibling;var P=p(g,I,m[N],b);if(P===null){I===null&&(I=D);break}e&&I&&P.alternate===null&&t(g,I),h=o(P,h,N),C===null?_=P:C.sibling=P,C=P,I=D}if(N===m.length)return r(g,I),oe&&Or(g,N),_;if(I===null){for(;N<m.length;N++)I=f(g,m[N],b),I!==null&&(h=o(I,h,N),C===null?_=I:C.sibling=I,C=I);return oe&&Or(g,N),_}for(I=n(g,I);N<m.length;N++)D=x(I,g,N,m[N],b),D!==null&&(e&&D.alternate!==null&&I.delete(D.key===null?N:D.key),h=o(D,h,N),C===null?_=D:C.sibling=D,C=D);return e&&I.forEach(function(H){return t(g,H)}),oe&&Or(g,N),_}function k(g,h,m,b){var _=Zn(m);if(typeof _!="function")throw Error(E(150));if(m=_.call(m),m==null)throw Error(E(151));for(var C=_=null,I=h,N=h=0,D=null,P=m.next();I!==null&&!P.done;N++,P=m.next()){I.index>N?(D=I,I=null):D=I.sibling;var H=p(g,I,P.value,b);if(H===null){I===null&&(I=D);break}e&&I&&H.alternate===null&&t(g,I),h=o(H,h,N),C===null?_=H:C.sibling=H,C=H,I=D}if(P.done)return r(g,I),oe&&Or(g,N),_;if(I===null){for(;!P.done;N++,P=m.next())P=f(g,P.value,b),P!==null&&(h=o(P,h,N),C===null?_=P:C.sibling=P,C=P);return oe&&Or(g,N),_}for(I=n(g,I);!P.done;N++,P=m.next())P=x(I,g,N,P.value,b),P!==null&&(e&&P.alternate!==null&&I.delete(P.key===null?N:P.key),h=o(P,h,N),C===null?_=P:C.sibling=P,C=P);return e&&I.forEach(function(te){return t(g,te)}),oe&&Or(g,N),_}function S(g,h,m,b){if(typeof m=="object"&&m!==null&&m.type===an&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case lo:e:{for(var _=m.key,C=h;C!==null;){if(C.key===_){if(_=m.type,_===an){if(C.tag===7){r(g,C.sibling),h=i(C,m.props.children),h.return=g,g=h;break e}}else if(C.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===rr&&Hu(_)===C.type){r(g,C.sibling),h=i(C,m.props),h.ref=ii(g,C,m),h.return=g,g=h;break e}r(g,C);break}else t(g,C);C=C.sibling}m.type===an?(h=Wr(m.props.children,g.mode,b,m.key),h.return=g,g=h):(b=Fo(m.type,m.key,m.props,null,g.mode,b),b.ref=ii(g,h,m),b.return=g,g=b)}return a(g);case sn:e:{for(C=m.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){r(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{r(g,h);break}else t(g,h);h=h.sibling}h=Ea(m,g.mode,b),h.return=g,g=h}return a(g);case rr:return C=m._init,S(g,h,C(m._payload),b)}if(di(m))return v(g,h,m,b);if(Zn(m))return k(g,h,m,b);wo(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(r(g,h.sibling),h=i(h,m),h.return=g,g=h):(r(g,h),h=_a(m,g.mode,b),h.return=g,g=h),a(g)):r(g,h)}return S}var Pn=xp(!0),wp=xp(!1),is=_r(null),os=null,gn=null,cc=null;function uc(){cc=gn=os=null}function dc(e){var t=is.current;ie(is),e._currentValue=t}function fl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Sn(e,t){os=e,cc=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(cc!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(os===null)throw Error(E(308));gn=e,os.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var Dr=null;function fc(e){Dr===null?Dr=[e]:Dr.push(e)}function bp(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,fc(t)):(r.next=i.next,i.next=r),t.interleaved=r,Ht(e,n)}function Ht(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var nr=!1;function pc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,G&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Ht(e,r)}return i=n.interleaved,i===null?(t.next=t,fc(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ht(e,r)}function Ao(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Xl(e,r)}}function Gu(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ss(e,t,r,n){var i=e.updateQueue;nr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var l=c,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,c=d.lastBaseUpdate,c!==a&&(c===null?d.firstBaseUpdate=u:c.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,d=u=l=null,c=o;do{var p=c.lane,x=c.eventTime;if((n&p)===p){d!==null&&(d=d.next={eventTime:x,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var v=e,k=c;switch(p=t,x=r,k.tag){case 1:if(v=k.payload,typeof v=="function"){f=v.call(x,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,p=typeof v=="function"?v.call(x,f,p):v,p==null)break e;f=ce({},f,p);break e;case 2:nr=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[c]:p.push(c))}else x={eventTime:x,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},d===null?(u=d=x,l=f):d=d.next=x,a|=p;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;p=c,c=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Qr|=a,e.lanes=a,e.memoizedState=f}}function Yu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(E(191,i));i.call(n)}}}var qi={},It=_r(qi),zi=_r(qi),Di=_r(qi);function Fr(e){if(e===qi)throw Error(E(174));return e}function hc(e,t){switch(ee(Di,t),ee(zi,e),ee(It,qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ga(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ga(t,e)}ie(It),ee(It,t)}function An(){ie(It),ie(zi),ie(Di)}function Sp(e){Fr(Di.current);var t=Fr(It.current),r=Ga(t,e.type);t!==r&&(ee(zi,e),ee(It,r))}function gc(e){zi.current===e&&(ie(It),ie(zi))}var ae=_r(0);function as(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=[];function mc(){for(var e=0;e<ya.length;e++)ya[e]._workInProgressVersionPrimary=null;ya.length=0}var Oo=qt.ReactCurrentDispatcher,xa=qt.ReactCurrentBatchConfig,Yr=0,le=null,ye=null,Se=null,ls=!1,xi=!1,Fi=0,f0=0;function Ne(){throw Error(E(321))}function vc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!xt(e[r],t[r]))return!1;return!0}function yc(e,t,r,n,i,o){if(Yr=o,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?m0:v0,e=r(n,i),xi){o=0;do{if(xi=!1,Fi=0,25<=o)throw Error(E(301));o+=1,Se=ye=null,t.updateQueue=null,Oo.current=y0,e=r(n,i)}while(xi)}if(Oo.current=cs,t=ye!==null&&ye.next!==null,Yr=0,Se=ye=le=null,ls=!1,t)throw Error(E(300));return e}function xc(){var e=Fi!==0;return Fi=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?le.memoizedState=Se=e:Se=Se.next=e,Se}function at(){if(ye===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Se===null?le.memoizedState:Se.next;if(t!==null)Se=t,ye=e;else{if(e===null)throw Error(E(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Se===null?le.memoizedState=Se=e:Se=Se.next=e}return Se}function Ui(e,t){return typeof t=="function"?t(e):t}function wa(e){var t=at(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=ye,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var c=a=null,l=null,u=o;do{var d=u.lane;if((Yr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,a=n):l=l.next=f,le.lanes|=d,Qr|=d}u=u.next}while(u!==null&&u!==o);l===null?a=n:l.next=c,xt(n,t.memoizedState)||(Ve=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,le.lanes|=o,Qr|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ba(e){var t=at(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);xt(o,t.memoizedState)||(Ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function _p(){}function Ep(e,t){var r=le,n=at(),i=t(),o=!xt(n.memoizedState,i);if(o&&(n.memoizedState=i,Ve=!0),n=n.queue,wc(jp.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(r.flags|=2048,Bi(9,Ip.bind(null,r,n,i,t),void 0,null),_e===null)throw Error(E(349));Yr&30||Cp(r,t,i)}return i}function Cp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ip(e,t,r,n){t.value=r,t.getSnapshot=n,Tp(t)&&Rp(e)}function jp(e,t,r){return r(function(){Tp(t)&&Rp(e)})}function Tp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!xt(e,r)}catch{return!0}}function Rp(e){var t=Ht(e,1);t!==null&&vt(t,e,1,-1)}function Qu(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},t.queue=e,e=e.dispatch=g0.bind(null,le,e),[t.memoizedState,e]}function Bi(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Np(){return at().memoizedState}function Lo(e,t,r,n){var i=St();le.flags|=e,i.memoizedState=Bi(1|t,r,void 0,n===void 0?null:n)}function Ns(e,t,r,n){var i=at();n=n===void 0?null:n;var o=void 0;if(ye!==null){var a=ye.memoizedState;if(o=a.destroy,n!==null&&vc(n,a.deps)){i.memoizedState=Bi(t,r,o,n);return}}le.flags|=e,i.memoizedState=Bi(1|t,r,o,n)}function Ku(e,t){return Lo(8390656,8,e,t)}function wc(e,t){return Ns(2048,8,e,t)}function Pp(e,t){return Ns(4,2,e,t)}function Ap(e,t){return Ns(4,4,e,t)}function Op(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lp(e,t,r){return r=r!=null?r.concat([e]):null,Ns(4,4,Op.bind(null,t,e),r)}function bc(){}function Mp(e,t){var r=at();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&vc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function zp(e,t){var r=at();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&vc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Dp(e,t,r){return Yr&21?(xt(r,t)||(r=$f(),le.lanes|=r,Qr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=r)}function p0(e,t){var r=X;X=r!==0&&4>r?r:4,e(!0);var n=xa.transition;xa.transition={};try{e(!1),t()}finally{X=r,xa.transition=n}}function Fp(){return at().memoizedState}function h0(e,t,r){var n=vr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Up(e))Bp(t,r);else if(r=bp(e,t,r,n),r!==null){var i=De();vt(r,e,n,i),Wp(r,t,n)}}function g0(e,t,r){var n=vr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Up(e))Bp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,c=o(a,r);if(i.hasEagerState=!0,i.eagerState=c,xt(c,a)){var l=t.interleaved;l===null?(i.next=i,fc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=bp(e,t,i,n),r!==null&&(i=De(),vt(r,e,n,i),Wp(r,t,n))}}function Up(e){var t=e.alternate;return e===le||t!==null&&t===le}function Bp(e,t){xi=ls=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Wp(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Xl(e,r)}}var cs={readContext:st,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},m0={readContext:st,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Ku,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Lo(4194308,4,Op.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var r=St();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=St();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=h0.bind(null,le,e),[n.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:Qu,useDebugValue:bc,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=Qu(!1),t=e[0];return e=p0.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=le,i=St();if(oe){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),_e===null)throw Error(E(349));Yr&30||Cp(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Ku(jp.bind(null,n,o,e),[e]),n.flags|=2048,Bi(9,Ip.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=St(),t=_e.identifierPrefix;if(oe){var r=Ft,n=Dt;r=(n&~(1<<32-mt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Fi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=f0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},v0={readContext:st,useCallback:Mp,useContext:st,useEffect:wc,useImperativeHandle:Lp,useInsertionEffect:Pp,useLayoutEffect:Ap,useMemo:zp,useReducer:wa,useRef:Np,useState:function(){return wa(Ui)},useDebugValue:bc,useDeferredValue:function(e){var t=at();return Dp(t,ye.memoizedState,e)},useTransition:function(){var e=wa(Ui)[0],t=at().memoizedState;return[e,t]},useMutableSource:_p,useSyncExternalStore:Ep,useId:Fp,unstable_isNewReconciler:!1},y0={readContext:st,useCallback:Mp,useContext:st,useEffect:wc,useImperativeHandle:Lp,useInsertionEffect:Pp,useLayoutEffect:Ap,useMemo:zp,useReducer:ba,useRef:Np,useState:function(){return ba(Ui)},useDebugValue:bc,useDeferredValue:function(e){var t=at();return ye===null?t.memoizedState=e:Dp(t,ye.memoizedState,e)},useTransition:function(){var e=ba(Ui)[0],t=at().memoizedState;return[e,t]},useMutableSource:_p,useSyncExternalStore:Ep,useId:Fp,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function pl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ce({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ps={isMounted:function(e){return(e=e._reactInternals)?Xr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=De(),i=vr(e),o=Wt(n,i);o.payload=t,r!=null&&(o.callback=r),t=gr(e,o,i),t!==null&&(vt(t,e,i,n),Ao(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=De(),i=vr(e),o=Wt(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=gr(e,o,i),t!==null&&(vt(t,e,i,n),Ao(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=De(),n=vr(e),i=Wt(r,n);i.tag=2,t!=null&&(i.callback=t),t=gr(e,i,n),t!==null&&(vt(t,e,n,r),Ao(t,e,n))}};function qu(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ai(r,n)||!Ai(i,o):!0}function $p(e,t,r){var n=!1,i=kr,o=t.contextType;return typeof o=="object"&&o!==null?o=st(o):(i=Ge(t)?Hr:Oe.current,n=t.contextTypes,o=(n=n!=null)?Rn(e,i):kr),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ps,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ju(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ps.enqueueReplaceState(t,t.state,null)}function hl(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},pc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=st(o):(o=Ge(t)?Hr:Oe.current,i.context=Rn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(pl(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ps.enqueueReplaceState(i,i.state,null),ss(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function On(e,t){try{var r="",n=t;do r+=Gm(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ka(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function gl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var x0=typeof WeakMap=="function"?WeakMap:Map;function Vp(e,t,r){r=Wt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ds||(ds=!0,El=n),gl(e,t)},r}function Hp(e,t,r){r=Wt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){gl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){gl(e,t),typeof n!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Xu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new x0;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=A0.bind(null,e,t,r),t.then(e,e))}function Zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ed(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Wt(-1,1),t.tag=2,gr(r,t,1))),r.lanes|=1),e)}var w0=qt.ReactCurrentOwner,Ve=!1;function Me(e,t,r,n){t.child=e===null?wp(t,null,r,n):Pn(t,e.child,r,n)}function td(e,t,r,n,i){r=r.render;var o=t.ref;return Sn(t,i),n=yc(e,t,r,n,o,i),r=xc(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(oe&&r&&sc(t),t.flags|=1,Me(e,t,n,i),t.child)}function rd(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Tc(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Gp(e,t,o,n,i)):(e=Fo(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:Ai,r(a,n)&&e.ref===t.ref)return Gt(e,t,i)}return t.flags|=1,e=yr(o,n),e.ref=t.ref,e.return=t,t.child=e}function Gp(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(Ai(o,n)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Gt(e,t,i)}return ml(e,t,r,n,i)}function Yp(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(vn,Qe),Qe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(vn,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,ee(vn,Qe),Qe|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,ee(vn,Qe),Qe|=n;return Me(e,t,i,r),t.child}function Qp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ml(e,t,r,n,i){var o=Ge(r)?Hr:Oe.current;return o=Rn(t,o),Sn(t,i),r=yc(e,t,r,n,o,i),n=xc(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(oe&&n&&sc(t),t.flags|=1,Me(e,t,r,i),t.child)}function nd(e,t,r,n,i){if(Ge(r)){var o=!0;ts(t)}else o=!1;if(Sn(t,i),t.stateNode===null)Mo(e,t),$p(t,r,n),hl(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var l=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=st(u):(u=Ge(r)?Hr:Oe.current,u=Rn(t,u));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==n||l!==u)&&Ju(t,a,n,u),nr=!1;var p=t.memoizedState;a.state=p,ss(t,n,a,i),l=t.memoizedState,c!==n||p!==l||He.current||nr?(typeof d=="function"&&(pl(t,r,d,n),l=t.memoizedState),(c=nr||qu(t,r,c,n,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=u,n=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,kp(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:dt(t.type,c),a.props=u,f=t.pendingProps,p=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=st(l):(l=Ge(r)?Hr:Oe.current,l=Rn(t,l));var x=r.getDerivedStateFromProps;(d=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==f||p!==l)&&Ju(t,a,n,l),nr=!1,p=t.memoizedState,a.state=p,ss(t,n,a,i);var v=t.memoizedState;c!==f||p!==v||He.current||nr?(typeof x=="function"&&(pl(t,r,x,n),v=t.memoizedState),(u=nr||qu(t,r,u,n,p,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),a.props=n,a.state=v,a.context=l,n=u):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return vl(e,t,r,n,o,i)}function vl(e,t,r,n,i,o){Qp(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&Wu(t,r,!1),Gt(e,t,o);n=t.stateNode,w0.current=t;var c=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Pn(t,e.child,null,o),t.child=Pn(t,null,c,o)):Me(e,t,c,o),t.memoizedState=n.state,i&&Wu(t,r,!0),t.child}function Kp(e){var t=e.stateNode;t.pendingContext?Bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bu(e,t.context,!1),hc(e,t.containerInfo)}function id(e,t,r,n,i){return Nn(),lc(i),t.flags|=256,Me(e,t,r,n),t.child}var yl={dehydrated:null,treeContext:null,retryLane:0};function xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function qp(e,t,r){var n=t.pendingProps,i=ae.current,o=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ae,i&1),e===null)return dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ls(a,n,0,null),e=Wr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=xl(r),t.memoizedState=yl,e):kc(t,a));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return b0(e,t,a,n,c,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,c=i.sibling;var l={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=yr(i,l),n.subtreeFlags=i.subtreeFlags&14680064),c!==null?o=yr(c,o):(o=Wr(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?xl(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=yl,n}return o=e.child,e=o.sibling,n=yr(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function kc(e,t){return t=Ls({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bo(e,t,r,n){return n!==null&&lc(n),Pn(t,e.child,null,r),e=kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function b0(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=ka(Error(E(422))),bo(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Ls({mode:"visible",children:n.children},i,0,null),o=Wr(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Pn(t,e.child,null,a),t.child.memoizedState=xl(a),t.memoizedState=yl,o);if(!(t.mode&1))return bo(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var c=n.dgst;return n=c,o=Error(E(419)),n=ka(o,n,void 0),bo(e,t,a,n)}if(c=(a&e.childLanes)!==0,Ve||c){if(n=_e,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ht(e,i),vt(n,e,i,-1))}return jc(),n=ka(Error(E(421))),bo(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=O0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ke=hr(i.nextSibling),qe=t,oe=!0,ht=null,e!==null&&(rt[nt++]=Dt,rt[nt++]=Ft,rt[nt++]=Gr,Dt=e.id,Ft=e.overflow,Gr=t),t=kc(t,n.children),t.flags|=4096,t)}function od(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),fl(e.return,t,r)}function Sa(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Jp(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(Me(e,t,n.children,r),n=ae.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&od(e,r,t);else if(e.tag===19)od(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ee(ae,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&as(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Sa(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&as(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Sa(t,!0,r,null,o);break;case"together":Sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Qr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=yr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=yr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function k0(e,t,r){switch(t.tag){case 3:Kp(t),Nn();break;case 5:Sp(t);break;case 1:Ge(t.type)&&ts(t);break;case 4:hc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ee(is,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ee(ae,ae.current&1),t.flags|=128,null):r&t.child.childLanes?qp(e,t,r):(ee(ae,ae.current&1),e=Gt(e,t,r),e!==null?e.sibling:null);ee(ae,ae.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Jp(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ae,ae.current),n)break;return null;case 22:case 23:return t.lanes=0,Yp(e,t,r)}return Gt(e,t,r)}var Xp,wl,Zp,eh;Xp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};wl=function(){};Zp=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Fr(It.current);var o=null;switch(r){case"input":i=Wa(e,i),n=Wa(e,n),o=[];break;case"select":i=ce({},i,{value:void 0}),n=ce({},n,{value:void 0}),o=[];break;case"textarea":i=Ha(e,i),n=Ha(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Zo)}Ya(r,n);var a;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var c=i[u];for(a in c)c.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ci.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var l=n[u];if(c=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u==="style")if(c){for(a in c)!c.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&c[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(o||(o=[]),o.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ci.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",e),o||c===l||(o=[])):(o=o||[]).push(u,l))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};eh=function(e,t,r,n){r!==n&&(t.flags|=4)};function oi(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function S0(e,t,r){var n=t.pendingProps;switch(ac(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Ge(t.type)&&es(),Pe(t),null;case 3:return n=t.stateNode,An(),ie(He),ie(Oe),mc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(jl(ht),ht=null))),wl(e,t),Pe(t),null;case 5:gc(t);var i=Fr(Di.current);if(r=t.type,e!==null&&t.stateNode!=null)Zp(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(E(166));return Pe(t),null}if(e=Fr(It.current),xo(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[_t]=t,n[Mi]=o,e=(t.mode&1)!==0,r){case"dialog":ne("cancel",n),ne("close",n);break;case"iframe":case"object":case"embed":ne("load",n);break;case"video":case"audio":for(i=0;i<pi.length;i++)ne(pi[i],n);break;case"source":ne("error",n);break;case"img":case"image":case"link":ne("error",n),ne("load",n);break;case"details":ne("toggle",n);break;case"input":hu(n,o),ne("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},ne("invalid",n);break;case"textarea":mu(n,o),ne("invalid",n)}Ya(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="children"?typeof c=="string"?n.textContent!==c&&(o.suppressHydrationWarning!==!0&&yo(n.textContent,c,e),i=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&yo(n.textContent,c,e),i=["children",""+c]):Ci.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&ne("scroll",n)}switch(r){case"input":co(n),gu(n,o,!0);break;case"textarea":co(n),vu(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Zo)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jf(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[_t]=t,e[Mi]=n,Xp(e,t,!1,!1),t.stateNode=e;e:{switch(a=Qa(r,n),r){case"dialog":ne("cancel",e),ne("close",e),i=n;break;case"iframe":case"object":case"embed":ne("load",e),i=n;break;case"video":case"audio":for(i=0;i<pi.length;i++)ne(pi[i],e);i=n;break;case"source":ne("error",e),i=n;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=n;break;case"details":ne("toggle",e),i=n;break;case"input":hu(e,n),i=Wa(e,n),ne("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=ce({},n,{value:void 0}),ne("invalid",e);break;case"textarea":mu(e,n),i=Ha(e,n),ne("invalid",e);break;default:i=n}Ya(r,i),c=i;for(o in c)if(c.hasOwnProperty(o)){var l=c[o];o==="style"?Nf(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tf(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ii(e,l):typeof l=="number"&&Ii(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ci.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ne("scroll",e):l!=null&&Gl(e,o,l,a))}switch(r){case"input":co(e),gu(e,n,!1);break;case"textarea":co(e),vu(e);break;case"option":n.value!=null&&e.setAttribute("value",""+br(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?xn(e,!!n.multiple,o,!1):n.defaultValue!=null&&xn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zo)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)eh(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(E(166));if(r=Fr(Di.current),Fr(It.current),xo(t)){if(n=t.stateNode,r=t.memoizedProps,n[_t]=t,(o=n.nodeValue!==r)&&(e=qe,e!==null))switch(e.tag){case 3:yo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yo(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[_t]=t,t.stateNode=n}return Pe(t),null;case 13:if(ie(ae),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ke!==null&&t.mode&1&&!(t.flags&128))yp(),Nn(),t.flags|=98560,o=!1;else if(o=xo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[_t]=t}else Nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),o=!1}else ht!==null&&(jl(ht),ht=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?xe===0&&(xe=3):jc())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return An(),wl(e,t),e===null&&Oi(t.stateNode.containerInfo),Pe(t),null;case 10:return dc(t.type._context),Pe(t),null;case 17:return Ge(t.type)&&es(),Pe(t),null;case 19:if(ie(ae),o=t.memoizedState,o===null)return Pe(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)oi(o,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=as(e),a!==null){for(t.flags|=128,oi(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ee(ae,ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>Ln&&(t.flags|=128,n=!0,oi(o,!1),t.lanes=4194304)}else{if(!n)if(e=as(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),oi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!oe)return Pe(t),null}else 2*he()-o.renderingStartTime>Ln&&r!==1073741824&&(t.flags|=128,n=!0,oi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,r=ae.current,ee(ae,n?r&1|2:r&1),t):(Pe(t),null);case 22:case 23:return Ic(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Qe&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function _0(e,t){switch(ac(t),t.tag){case 1:return Ge(t.type)&&es(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return An(),ie(He),ie(Oe),mc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gc(t),null;case 13:if(ie(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ae),null;case 4:return An(),null;case 10:return dc(t.type._context),null;case 22:case 23:return Ic(),null;case 24:return null;default:return null}}var ko=!1,Ae=!1,E0=typeof WeakSet=="function"?WeakSet:Set,A=null;function mn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){fe(e,t,n)}else r.current=null}function bl(e,t,r){try{r()}catch(n){fe(e,t,n)}}var sd=!1;function C0(e,t){if(il=qo,e=op(),oc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,c=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var x;f!==r||i!==0&&f.nodeType!==3||(c=a+i),f!==o||n!==0&&f.nodeType!==3||(l=a+n),f.nodeType===3&&(a+=f.nodeValue.length),(x=f.firstChild)!==null;)p=f,f=x;for(;;){if(f===e)break t;if(p===r&&++u===i&&(c=a),p===o&&++d===n&&(l=a),(x=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=x}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(ol={focusedElem:e,selectionRange:r},qo=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,S=v.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?k:dt(t.type,k),S);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(b){fe(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=sd,sd=!1,v}function wi(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&bl(t,r,o)}i=i.next}while(i!==n)}}function As(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function kl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function th(e){var t=e.alternate;t!==null&&(e.alternate=null,th(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[Mi],delete t[ll],delete t[l0],delete t[c0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rh(e){return e.tag===5||e.tag===3||e.tag===4}function ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Zo));else if(n!==4&&(e=e.child,e!==null))for(Sl(e,t,r),e=e.sibling;e!==null;)Sl(e,t,r),e=e.sibling}function _l(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(_l(e,t,r),e=e.sibling;e!==null;)_l(e,t,r),e=e.sibling}var je=null,ft=!1;function er(e,t,r){for(r=r.child;r!==null;)nh(e,t,r),r=r.sibling}function nh(e,t,r){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Es,r)}catch{}switch(r.tag){case 5:Ae||mn(r,t);case 6:var n=je,i=ft;je=null,er(e,t,r),je=n,ft=i,je!==null&&(ft?(e=je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):je.removeChild(r.stateNode));break;case 18:je!==null&&(ft?(e=je,r=r.stateNode,e.nodeType===8?ma(e.parentNode,r):e.nodeType===1&&ma(e,r),Ni(e)):ma(je,r.stateNode));break;case 4:n=je,i=ft,je=r.stateNode.containerInfo,ft=!0,er(e,t,r),je=n,ft=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&bl(r,t,a),i=i.next}while(i!==n)}er(e,t,r);break;case 1:if(!Ae&&(mn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(c){fe(r,t,c)}er(e,t,r);break;case 21:er(e,t,r);break;case 22:r.mode&1?(Ae=(n=Ae)||r.memoizedState!==null,er(e,t,r),Ae=n):er(e,t,r);break;default:er(e,t,r)}}function ld(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new E0),t.forEach(function(n){var i=L0.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function ut(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:je=c.stateNode,ft=!1;break e;case 3:je=c.stateNode.containerInfo,ft=!0;break e;case 4:je=c.stateNode.containerInfo,ft=!0;break e}c=c.return}if(je===null)throw Error(E(160));nh(o,a,i),je=null,ft=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ih(t,e),t=t.sibling}function ih(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),kt(e),n&4){try{wi(3,e,e.return),As(3,e)}catch(k){fe(e,e.return,k)}try{wi(5,e,e.return)}catch(k){fe(e,e.return,k)}}break;case 1:ut(t,e),kt(e),n&512&&r!==null&&mn(r,r.return);break;case 5:if(ut(t,e),kt(e),n&512&&r!==null&&mn(r,r.return),e.flags&32){var i=e.stateNode;try{Ii(i,"")}catch(k){fe(e,e.return,k)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&Cf(i,o),Qa(c,a);var u=Qa(c,o);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?Nf(i,f):d==="dangerouslySetInnerHTML"?Tf(i,f):d==="children"?Ii(i,f):Gl(i,d,f,u)}switch(c){case"input":$a(i,o);break;case"textarea":If(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?xn(i,!!o.multiple,x,!1):p!==!!o.multiple&&(o.defaultValue!=null?xn(i,!!o.multiple,o.defaultValue,!0):xn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Mi]=o}catch(k){fe(e,e.return,k)}}break;case 6:if(ut(t,e),kt(e),n&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){fe(e,e.return,k)}}break;case 3:if(ut(t,e),kt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(k){fe(e,e.return,k)}break;case 4:ut(t,e),kt(e);break;case 13:ut(t,e),kt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ec=he())),n&4&&ld(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Ae=(u=Ae)||d,ut(t,e),Ae=u):ut(t,e),kt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(A=e,d=e.child;d!==null;){for(f=A=d;A!==null;){switch(p=A,x=p.child,p.tag){case 0:case 11:case 14:case 15:wi(4,p,p.return);break;case 1:mn(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){fe(n,r,k)}}break;case 5:mn(p,p.return);break;case 22:if(p.memoizedState!==null){ud(f);continue}}x!==null?(x.return=p,A=x):ud(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=Rf("display",a))}catch(k){fe(e,e.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(k){fe(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ut(t,e),kt(e),n&4&&ld(e);break;case 21:break;default:ut(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(rh(r)){var n=r;break e}r=r.return}throw Error(E(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Ii(i,""),n.flags&=-33);var o=ad(e);_l(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,c=ad(e);Sl(e,c,a);break;default:throw Error(E(161))}}catch(l){fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function I0(e,t,r){A=e,oh(e)}function oh(e,t,r){for(var n=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||ko;if(!a){var c=i.alternate,l=c!==null&&c.memoizedState!==null||Ae;c=ko;var u=Ae;if(ko=a,(Ae=l)&&!u)for(A=i;A!==null;)a=A,l=a.child,a.tag===22&&a.memoizedState!==null?dd(i):l!==null?(l.return=a,A=l):dd(i);for(;o!==null;)A=o,oh(o),o=o.sibling;A=i,ko=c,Ae=u}cd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):cd(e)}}function cd(e){for(;A!==null;){var t=A;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||As(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ae)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:dt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Yu(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Yu(t,a,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ni(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ae||t.flags&512&&kl(t)}catch(p){fe(t,t.return,p)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function ud(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function dd(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{As(4,t)}catch(l){fe(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){fe(t,i,l)}}var o=t.return;try{kl(t)}catch(l){fe(t,o,l)}break;case 5:var a=t.return;try{kl(t)}catch(l){fe(t,a,l)}}}catch(l){fe(t,t.return,l)}if(t===e){A=null;break}var c=t.sibling;if(c!==null){c.return=t.return,A=c;break}A=t.return}}var j0=Math.ceil,us=qt.ReactCurrentDispatcher,Sc=qt.ReactCurrentOwner,ot=qt.ReactCurrentBatchConfig,G=0,_e=null,ge=null,Te=0,Qe=0,vn=_r(0),xe=0,Wi=null,Qr=0,Os=0,_c=0,bi=null,$e=null,Ec=0,Ln=1/0,At=null,ds=!1,El=null,mr=null,So=!1,cr=null,fs=0,ki=0,Cl=null,zo=-1,Do=0;function De(){return G&6?he():zo!==-1?zo:zo=he()}function vr(e){return e.mode&1?G&2&&Te!==0?Te&-Te:d0.transition!==null?(Do===0&&(Do=$f()),Do):(e=X,e!==0||(e=window.event,e=e===void 0?16:qf(e.type)),e):1}function vt(e,t,r,n){if(50<ki)throw ki=0,Cl=null,Error(E(185));Yi(e,r,n),(!(G&2)||e!==_e)&&(e===_e&&(!(G&2)&&(Os|=r),xe===4&&or(e,Te)),Ye(e,n),r===1&&G===0&&!(t.mode&1)&&(Ln=he()+500,Rs&&Er()))}function Ye(e,t){var r=e.callbackNode;dv(e,t);var n=Ko(e,e===_e?Te:0);if(n===0)r!==null&&wu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&wu(r),t===1)e.tag===0?u0(fd.bind(null,e)):gp(fd.bind(null,e)),s0(function(){!(G&6)&&Er()}),r=null;else{switch(Vf(n)){case 1:r=Jl;break;case 4:r=Bf;break;case 16:r=Qo;break;case 536870912:r=Wf;break;default:r=Qo}r=ph(r,sh.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function sh(e,t){if(zo=-1,Do=0,G&6)throw Error(E(327));var r=e.callbackNode;if(_n()&&e.callbackNode!==r)return null;var n=Ko(e,e===_e?Te:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ps(e,n);else{t=n;var i=G;G|=2;var o=lh();(_e!==e||Te!==t)&&(At=null,Ln=he()+500,Br(e,t));do try{N0();break}catch(c){ah(e,c)}while(!0);uc(),us.current=o,G=i,ge!==null?t=0:(_e=null,Te=0,t=xe)}if(t!==0){if(t===2&&(i=Za(e),i!==0&&(n=i,t=Il(e,i))),t===1)throw r=Wi,Br(e,0),or(e,n),Ye(e,he()),r;if(t===6)or(e,n);else{if(i=e.current.alternate,!(n&30)&&!T0(i)&&(t=ps(e,n),t===2&&(o=Za(e),o!==0&&(n=o,t=Il(e,o))),t===1))throw r=Wi,Br(e,0),or(e,n),Ye(e,he()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(E(345));case 2:Lr(e,$e,At);break;case 3:if(or(e,n),(n&130023424)===n&&(t=Ec+500-he(),10<t)){if(Ko(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){De(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=al(Lr.bind(null,e,$e,At),t);break}Lr(e,$e,At);break;case 4:if(or(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-mt(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=he()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*j0(n/1960))-n,10<n){e.timeoutHandle=al(Lr.bind(null,e,$e,At),n);break}Lr(e,$e,At);break;case 5:Lr(e,$e,At);break;default:throw Error(E(329))}}}return Ye(e,he()),e.callbackNode===r?sh.bind(null,e):null}function Il(e,t){var r=bi;return e.current.memoizedState.isDehydrated&&(Br(e,t).flags|=256),e=ps(e,t),e!==2&&(t=$e,$e=r,t!==null&&jl(t)),e}function jl(e){$e===null?$e=e:$e.push.apply($e,e)}function T0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!xt(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function or(e,t){for(t&=~_c,t&=~Os,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-mt(t),n=1<<r;e[r]=-1,t&=~n}}function fd(e){if(G&6)throw Error(E(327));_n();var t=Ko(e,0);if(!(t&1))return Ye(e,he()),null;var r=ps(e,t);if(e.tag!==0&&r===2){var n=Za(e);n!==0&&(t=n,r=Il(e,n))}if(r===1)throw r=Wi,Br(e,0),or(e,t),Ye(e,he()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lr(e,$e,At),Ye(e,he()),null}function Cc(e,t){var r=G;G|=1;try{return e(t)}finally{G=r,G===0&&(Ln=he()+500,Rs&&Er())}}function Kr(e){cr!==null&&cr.tag===0&&!(G&6)&&_n();var t=G;G|=1;var r=ot.transition,n=X;try{if(ot.transition=null,X=1,e)return e()}finally{X=n,ot.transition=r,G=t,!(G&6)&&Er()}}function Ic(){Qe=vn.current,ie(vn)}function Br(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,o0(r)),ge!==null)for(r=ge.return;r!==null;){var n=r;switch(ac(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&es();break;case 3:An(),ie(He),ie(Oe),mc();break;case 5:gc(n);break;case 4:An();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:dc(n.type._context);break;case 22:case 23:Ic()}r=r.return}if(_e=e,ge=e=yr(e.current,null),Te=Qe=t,xe=0,Wi=null,_c=Os=Qr=0,$e=bi=null,Dr!==null){for(t=0;t<Dr.length;t++)if(r=Dr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}Dr=null}return e}function ah(e,t){do{var r=ge;try{if(uc(),Oo.current=cs,ls){for(var n=le.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ls=!1}if(Yr=0,Se=ye=le=null,xi=!1,Fi=0,Sc.current=null,r===null||r.return===null){xe=1,Wi=t,ge=null;break}e:{var o=e,a=r.return,c=r,l=t;if(t=Te,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Zu(a);if(x!==null){x.flags&=-257,ed(x,a,c,o,t),x.mode&1&&Xu(o,u,t),t=x,l=u;var v=t.updateQueue;if(v===null){var k=new Set;k.add(l),t.updateQueue=k}else v.add(l);break e}else{if(!(t&1)){Xu(o,u,t),jc();break e}l=Error(E(426))}}else if(oe&&c.mode&1){var S=Zu(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ed(S,a,c,o,t),lc(On(l,c));break e}}o=l=On(l,c),xe!==4&&(xe=2),bi===null?bi=[o]:bi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Vp(o,l,t);Gu(o,g);break e;case 1:c=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mr===null||!mr.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Hp(o,c,t);Gu(o,b);break e}}o=o.return}while(o!==null)}uh(r)}catch(_){t=_,ge===r&&r!==null&&(ge=r=r.return);continue}break}while(!0)}function lh(){var e=us.current;return us.current=cs,e===null?cs:e}function jc(){(xe===0||xe===3||xe===2)&&(xe=4),_e===null||!(Qr&268435455)&&!(Os&268435455)||or(_e,Te)}function ps(e,t){var r=G;G|=2;var n=lh();(_e!==e||Te!==t)&&(At=null,Br(e,t));do try{R0();break}catch(i){ah(e,i)}while(!0);if(uc(),G=r,us.current=n,ge!==null)throw Error(E(261));return _e=null,Te=0,xe}function R0(){for(;ge!==null;)ch(ge)}function N0(){for(;ge!==null&&!rv();)ch(ge)}function ch(e){var t=fh(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?uh(e):ge=t,Sc.current=null}function uh(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=_0(r,t),r!==null){r.flags&=32767,ge=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,ge=null;return}}else if(r=S0(r,t,Qe),r!==null){ge=r;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);xe===0&&(xe=5)}function Lr(e,t,r){var n=X,i=ot.transition;try{ot.transition=null,X=1,P0(e,t,r,n)}finally{ot.transition=i,X=n}return null}function P0(e,t,r,n){do _n();while(cr!==null);if(G&6)throw Error(E(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(fv(e,o),e===_e&&(ge=_e=null,Te=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||So||(So=!0,ph(Qo,function(){return _n(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=ot.transition,ot.transition=null;var a=X;X=1;var c=G;G|=4,Sc.current=null,C0(e,r),ih(r,e),Xv(ol),qo=!!il,ol=il=null,e.current=r,I0(r),nv(),G=c,X=a,ot.transition=o}else e.current=r;if(So&&(So=!1,cr=e,fs=i),o=e.pendingLanes,o===0&&(mr=null),sv(r.stateNode),Ye(e,he()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(ds)throw ds=!1,e=El,El=null,e;return fs&1&&e.tag!==0&&_n(),o=e.pendingLanes,o&1?e===Cl?ki++:(ki=0,Cl=e):ki=0,Er(),null}function _n(){if(cr!==null){var e=Vf(fs),t=ot.transition,r=X;try{if(ot.transition=null,X=16>e?16:e,cr===null)var n=!1;else{if(e=cr,cr=null,fs=0,G&6)throw Error(E(331));var i=G;for(G|=4,A=e.current;A!==null;){var o=A,a=o.child;if(A.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:wi(8,d,o)}var f=d.child;if(f!==null)f.return=d,A=f;else for(;A!==null;){d=A;var p=d.sibling,x=d.return;if(th(d),d===u){A=null;break}if(p!==null){p.return=x,A=p;break}A=x}}}var v=o.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var S=k.sibling;k.sibling=null,k=S}while(k!==null)}}A=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,A=a;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,A=g;break e}A=o.return}}var h=e.current;for(A=h;A!==null;){a=A;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,A=m;else e:for(a=h;A!==null;){if(c=A,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:As(9,c)}}catch(_){fe(c,c.return,_)}if(c===a){A=null;break e}var b=c.sibling;if(b!==null){b.return=c.return,A=b;break e}A=c.return}}if(G=i,Er(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Es,e)}catch{}n=!0}return n}finally{X=r,ot.transition=t}}return!1}function pd(e,t,r){t=On(r,t),t=Vp(e,t,1),e=gr(e,t,1),t=De(),e!==null&&(Yi(e,1,t),Ye(e,t))}function fe(e,t,r){if(e.tag===3)pd(e,e,r);else for(;t!==null;){if(t.tag===3){pd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(mr===null||!mr.has(n))){e=On(r,e),e=Hp(t,e,1),t=gr(t,e,1),e=De(),t!==null&&(Yi(t,1,e),Ye(t,e));break}}t=t.return}}function A0(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&r,_e===e&&(Te&r)===r&&(xe===4||xe===3&&(Te&130023424)===Te&&500>he()-Ec?Br(e,0):_c|=r),Ye(e,t)}function dh(e,t){t===0&&(e.mode&1?(t=po,po<<=1,!(po&130023424)&&(po=4194304)):t=1);var r=De();e=Ht(e,t),e!==null&&(Yi(e,t,r),Ye(e,r))}function O0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),dh(e,r)}function L0(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(t),dh(e,r)}var fh;fh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Ve=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ve=!1,k0(e,t,r);Ve=!!(e.flags&131072)}else Ve=!1,oe&&t.flags&1048576&&mp(t,ns,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Mo(e,t),e=t.pendingProps;var i=Rn(t,Oe.current);Sn(t,r),i=yc(null,t,n,e,i,r);var o=xc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(n)?(o=!0,ts(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pc(t),i.updater=Ps,t.stateNode=i,i._reactInternals=t,hl(t,n,e,r),t=vl(null,t,n,!0,o,r)):(t.tag=0,oe&&o&&sc(t),Me(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Mo(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=z0(n),e=dt(n,e),i){case 0:t=ml(null,t,n,e,r);break e;case 1:t=nd(null,t,n,e,r);break e;case 11:t=td(null,t,n,e,r);break e;case 14:t=rd(null,t,n,dt(n.type,e),r);break e}throw Error(E(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:dt(n,i),ml(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:dt(n,i),nd(e,t,n,i,r);case 3:e:{if(Kp(t),e===null)throw Error(E(387));n=t.pendingProps,o=t.memoizedState,i=o.element,kp(e,t),ss(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=On(Error(E(423)),t),t=id(e,t,n,r,i);break e}else if(n!==i){i=On(Error(E(424)),t),t=id(e,t,n,r,i);break e}else for(Ke=hr(t.stateNode.containerInfo.firstChild),qe=t,oe=!0,ht=null,r=wp(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Nn(),n===i){t=Gt(e,t,r);break e}Me(e,t,n,r)}t=t.child}return t;case 5:return Sp(t),e===null&&dl(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,sl(n,i)?a=null:o!==null&&sl(n,o)&&(t.flags|=32),Qp(e,t),Me(e,t,a,r),t.child;case 6:return e===null&&dl(t),null;case 13:return qp(e,t,r);case 4:return hc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Pn(t,null,n,r):Me(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:dt(n,i),td(e,t,n,i,r);case 7:return Me(e,t,t.pendingProps,r),t.child;case 8:return Me(e,t,t.pendingProps.children,r),t.child;case 12:return Me(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ee(is,n._currentValue),n._currentValue=a,o!==null)if(xt(o.value,a)){if(o.children===i.children&&!He.current){t=Gt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){a=o.child;for(var l=c.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=Wt(-1,r&-r),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),fl(o.return,r,t),c.lanes|=r;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(E(341));a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),fl(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Me(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Sn(t,r),i=st(i),n=n(i),t.flags|=1,Me(e,t,n,r),t.child;case 14:return n=t.type,i=dt(n,t.pendingProps),i=dt(n.type,i),rd(e,t,n,i,r);case 15:return Gp(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:dt(n,i),Mo(e,t),t.tag=1,Ge(n)?(e=!0,ts(t)):e=!1,Sn(t,r),$p(t,n,i),hl(t,n,i,r),vl(null,t,n,!0,e,r);case 19:return Jp(e,t,r);case 22:return Yp(e,t,r)}throw Error(E(156,t.tag))};function ph(e,t){return Uf(e,t)}function M0(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,r,n){return new M0(e,t,r,n)}function Tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function z0(e){if(typeof e=="function")return Tc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ql)return 11;if(e===Kl)return 14}return 2}function yr(e,t){var r=e.alternate;return r===null?(r=it(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Fo(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")Tc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case an:return Wr(r.children,i,o,t);case Yl:a=8,i|=8;break;case Da:return e=it(12,r,t,i|2),e.elementType=Da,e.lanes=o,e;case Fa:return e=it(13,r,t,i),e.elementType=Fa,e.lanes=o,e;case Ua:return e=it(19,r,t,i),e.elementType=Ua,e.lanes=o,e;case Sf:return Ls(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bf:a=10;break e;case kf:a=9;break e;case Ql:a=11;break e;case Kl:a=14;break e;case rr:a=16,n=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=it(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Wr(e,t,r,n){return e=it(7,e,n,t),e.lanes=r,e}function Ls(e,t,r,n){return e=it(22,e,n,t),e.elementType=Sf,e.lanes=r,e.stateNode={isHidden:!1},e}function _a(e,t,r){return e=it(6,e,null,t),e.lanes=r,e}function Ea(e,t,r){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function D0(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rc(e,t,r,n,i,o,a,c,l){return e=new D0(e,t,r,c,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=it(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},pc(o),e}function F0(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function hh(e){if(!e)return kr;e=e._reactInternals;e:{if(Xr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(Ge(r))return hp(e,r,t)}return t}function gh(e,t,r,n,i,o,a,c,l){return e=Rc(r,n,!0,e,i,o,a,c,l),e.context=hh(null),r=e.current,n=De(),i=vr(r),o=Wt(n,i),o.callback=t??null,gr(r,o,i),e.current.lanes=i,Yi(e,i,n),Ye(e,n),e}function Ms(e,t,r,n){var i=t.current,o=De(),a=vr(i);return r=hh(r),t.context===null?t.context=r:t.pendingContext=r,t=Wt(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=gr(i,t,a),e!==null&&(vt(e,i,a,o),Ao(e,i,a)),a}function hs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Nc(e,t){hd(e,t),(e=e.alternate)&&hd(e,t)}function U0(){return null}var mh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pc(e){this._internalRoot=e}zs.prototype.render=Pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ms(e,t,null,null)};zs.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kr(function(){Ms(null,e,null,null)}),t[Vt]=null}};function zs(e){this._internalRoot=e}zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yf();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ir.length&&t!==0&&t<ir[r].priority;r++);ir.splice(r,0,e),r===0&&Kf(e)}};function Ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gd(){}function B0(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=hs(a);o.call(u)}}var a=gh(t,n,e,0,null,!1,!1,"",gd);return e._reactRootContainer=a,e[Vt]=a.current,Oi(e.nodeType===8?e.parentNode:e),Kr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var c=n;n=function(){var u=hs(l);c.call(u)}}var l=Rc(e,0,!1,null,null,!1,!1,"",gd);return e._reactRootContainer=l,e[Vt]=l.current,Oi(e.nodeType===8?e.parentNode:e),Kr(function(){Ms(t,l,r,n)}),l}function Fs(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var c=i;i=function(){var l=hs(a);c.call(l)}}Ms(t,a,e,i)}else a=B0(r,t,e,i,n);return hs(a)}Hf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=fi(t.pendingLanes);r!==0&&(Xl(t,r|1),Ye(t,he()),!(G&6)&&(Ln=he()+500,Er()))}break;case 13:Kr(function(){var n=Ht(e,1);if(n!==null){var i=De();vt(n,e,1,i)}}),Nc(e,1)}};Zl=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var r=De();vt(t,e,134217728,r)}Nc(e,134217728)}};Gf=function(e){if(e.tag===13){var t=vr(e),r=Ht(e,t);if(r!==null){var n=De();vt(r,e,t,n)}Nc(e,t)}};Yf=function(){return X};Qf=function(e,t){var r=X;try{return X=e,t()}finally{X=r}};qa=function(e,t,r){switch(t){case"input":if($a(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Ts(n);if(!i)throw Error(E(90));Ef(n),$a(n,i)}}}break;case"textarea":If(e,r);break;case"select":t=r.value,t!=null&&xn(e,!!r.multiple,t,!1)}};Of=Cc;Lf=Kr;var W0={usingClientEntryPoint:!1,Events:[Ki,dn,Ts,Pf,Af,Cc]},si={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$0={bundleType:si.bundleType,version:si.version,rendererPackageName:si.rendererPackageName,rendererConfig:si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Df(e),e===null?null:e.stateNode},findFiberByHostInstance:si.findFiberByHostInstance||U0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Es=_o.inject($0),Ct=_o}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W0;Xe.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(t))throw Error(E(200));return F0(e,t,null,r)};Xe.createRoot=function(e,t){if(!Ac(e))throw Error(E(299));var r=!1,n="",i=mh;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Rc(e,1,!1,null,null,r,!1,n,i),e[Vt]=t.current,Oi(e.nodeType===8?e.parentNode:e),new Pc(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Df(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Kr(e)};Xe.hydrate=function(e,t,r){if(!Ds(t))throw Error(E(200));return Fs(null,e,t,!0,r)};Xe.hydrateRoot=function(e,t,r){if(!Ac(e))throw Error(E(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=mh;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=gh(t,null,e,1,r??null,i,!1,o,a),e[Vt]=t.current,Oi(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new zs(t)};Xe.render=function(e,t,r){if(!Ds(t))throw Error(E(200));return Fs(null,e,t,!1,r)};Xe.unmountComponentAtNode=function(e){if(!Ds(e))throw Error(E(40));return e._reactRootContainer?(Kr(function(){Fs(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1};Xe.unstable_batchedUpdates=Cc;Xe.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ds(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Fs(e,t,r,!1,n)};Xe.version="18.3.1-next-f1338f8080-20240426";function vh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vh)}catch(e){console.error(e)}}vh(),vf.exports=Xe;var V0=vf.exports,yh,md=V0;yh=md.createRoot,md.hydrateRoot;const H0="modulepreload",G0=function(e){return"/"+e},vd={},Zr=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(r.map(l=>{if(l=G0(l),l in vd)return;vd[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":H0,u||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((p,x)=>{f.addEventListener("load",p),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})},Tt="https://cloudvault.co.in/api/v1",ke={name:"CloudVault",logo:"CV",logoImage:"/cloudvault-logo.svg",logoVideo:"/calovaultlogo.mp4"};async function Y0(){var r;const e=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");if(!e)return null;const t=localStorage.getItem("cv_refreshToken")?localStorage:sessionStorage;try{const n=await fetch(`${Tt}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:e})});if(!n.ok)return null;const i=await n.json(),o=((r=i.data)==null?void 0:r.accessToken)||i.accessToken;return o?(t.setItem("cv_token",o),window.dispatchEvent(new CustomEvent("cv-token-refreshed",{detail:{token:o}})),o):null}catch{return null}}function Oc(e){return new Error(`Cannot reach the server at ${Tt}${e}. Make sure the backend is running (npm start in project root).`)}const pt=async(e,t={},r,n=!1)=>{const i={...t.headers||{}};r&&(i.Authorization=`Bearer ${r}`),t.body instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json");let o;try{o=await fetch(`${Tt}${e}`,{...t,headers:i})}catch{throw Oc(e)}if(o.status===401&&r&&!n){const l=await Y0();if(l)return pt(e,t,l,!0);throw new Error("Session expired. Please log in again.")}if(!o.ok){const l=await o.json().catch(()=>({error:"Unknown error"})),u=l.message||l.error||"",d=u.toLowerCase().includes("token")?"Something went wrong. Please try again.":u||`Request failed (${o.status})`;throw new Error(d)}if(!(o.headers.get("content-type")||"").includes("application/json"))return o;const c=await o.json();return c.success?c.data:c},Pr=(e,t)=>Array.isArray(e)?e:(e==null?void 0:e[t])||[];async function Lc(e,t,{onProgress:r,disposition:n="download"}={}){const i=n==="preview"?`/files/${e}/preview`:`/files/${e}/download`;let o;try{o=await fetch(`${Tt}${i}`,{headers:{Authorization:`Bearer ${t}`}})}catch{throw Oc(i)}if(!o.ok){const c=await o.json().catch(()=>({error:"Download failed"}));throw new Error(c.error||c.message||"Download failed")}const a=Number(o.headers.get("content-length"))||0;return Q0(o,a,r)}async function Q0(e,t,r){if(!e.body||!t){const a=await e.blob();return r==null||r(100),a}const n=e.body.getReader(),i=[];let o=0;for(;;){const{done:a,value:c}=await n.read();if(a)break;i.push(c),o+=c.length,r&&t>0&&r(Math.min(99,Math.round(o/t*100)))}return r==null||r(100),new Blob(i,{type:e.headers.get("content-type")||"application/octet-stream"})}function K0(e,t){const r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=t,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(r)}function q0(e,t,r,n){return new Promise((i,o)=>{const a=new XMLHttpRequest;a.open("POST",`${Tt}${e}`),a.setRequestHeader("Authorization",`Bearer ${r}`),a.upload.onprogress=c=>{c.lengthComputable&&n&&n(Math.round(c.loaded/c.total*100))},a.onload=()=>{try{const c=JSON.parse(a.responseText);a.status>=200&&a.status<300?i(c.success?c.data:c):o(new Error(c.message||c.error||"Upload failed"))}catch{a.status>=200&&a.status<300?i({}):o(new Error("Upload failed"))}},a.onerror=()=>o(Oc(e)),a.send(t)})}const ze=e=>{if(e===0)return"0 B";const t=1024,r=["B","KB","MB","GB"],n=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**n).toFixed(1)} ${r[n]}`},Ji=e=>{const t=Math.floor((Date.now()-new Date(e))/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`},Us=(e="")=>e.startsWith("image/")?"🖼️":e==="application/pdf"?"📄":e.startsWith("video/")?"🎬":e.startsWith("audio/")?"🎵":e.includes("zip")||e.includes("archive")?"🗜️":e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")?"📝":"📁",J0=["image/","video/","audio/"],X0=new Set(["application/pdf","text/plain","text/markdown","application/json"]),xh=(e="")=>{const t=(e||"").toLowerCase();return X0.has(t)?!0:J0.some(r=>t.startsWith(r))},Z0=(e="")=>{const t=(e||"").toLowerCase();return t.startsWith("image/")?"image":t==="application/pdf"?"pdf":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("text/")||t==="application/json"?"text":null},yd=[{key:"all",label:"All",icon:"📋",test:()=>!0},{key:"images",label:"Images",icon:"🖼️",test:e=>e.startsWith("image/")},{key:"documents",label:"Docs",icon:"📄",test:e=>e.includes("pdf")||e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")},{key:"videos",label:"Videos",icon:"🎬",test:e=>e.startsWith("video/")},{key:"audio",label:"Audio",icon:"🎵",test:e=>e.startsWith("audio/")},{key:"archives",label:"Archives",icon:"🗜️",test:e=>e.includes("zip")||e.includes("archive")||e.includes("tar")||e.includes("rar")}],$r=`
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
`,ey=[{id:"free",name:"Free",price:"₹0",period:"/mo",storage:"5 GB",features:["Standard uploads","Basic sharing","Web preview"]},{id:"pro",name:"Pro",price:"₹749",period:"/mo",storage:"100 GB",features:["Faster uploads","File version history","Priority support"],highlight:!0},{id:"premium",name:"Premium",price:"₹1,599",period:"/mo",storage:"1 TB",features:["Team sharing","Advanced analytics","Custom branding"]},{id:"team",name:"Team",price:"₹3,999",period:"/mo",storage:"2 TB",features:["Shared workspaces","Admin controls","SSO ready"]}],S2=[{id:"50gb",label:"+50 GB",price:"₹399"},{id:"100gb",label:"+100 GB",price:"₹749"},{id:"500gb",label:"+500 GB",price:"₹2,499"},{id:"1tb",label:"+1 TB",price:"₹3,999"}],ty=[{title:"Cloud storage",desc:"10 GB of free storage. Store files of any size, back up folders, sync across devices, and share with full control.",icon:"☁"},{title:"Private sharing",desc:"Share files and folders with anyone — even without an account. Set passwords, expiration dates, and permissions.",icon:"🔗"},{title:"Smart search",desc:"Find anything instantly with filters, tags, and full-text search across your entire drive.",icon:"🔍"},{title:"Enterprise security",desc:"Encrypted storage, activity logs, and role-based access. Your data stays private by default.",icon:"🛡"}],ry=[{title:"Never run out of space",desc:"Start with 10 GB free. Upgrade anytime for more storage when you need it."},{title:"Share with anyone",desc:"Give read-only or full access. Set passwords or create expiring links."},{title:"Be in control",desc:"Your data is in your hands. Manage permissions and access at every level."},{title:"Works everywhere",desc:"Access your files through the web on desktop, tablet, and mobile."}],ny=[{q:"Is CloudVault free to use?",a:"Yes. Every account includes 10 GB of free storage with no credit card required."},{q:"How secure are my files?",a:"Files are encrypted in transit and at rest. Share links support passwords and expiration dates."},{q:"Can I share files with people outside my team?",a:"Absolutely. Create public or protected links with view, download, or edit permissions."},{q:"Can I cancel or change my plan?",a:"Plans are flexible. Upgrade, downgrade, or cancel from billing settings anytime."}],iy=[{label:"Products",href:"#products"},{label:"Security",href:"#security"},{label:"Pricing",href:"#pricing"},{label:"FAQ",href:"#faq"}];function oy(){y.useEffect(()=>{const e=document.querySelectorAll(".scroll-reveal"),t=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&(n.target.classList.add("visible"),t.unobserve(n.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});return e.forEach(r=>t.observe(r)),()=>t.disconnect()},[])}function sy({onGetStarted:e,onLogin:t,onSignUp:r}){const[n,i]=y.useState({filesStored:0,activeUsers:0,storageUsed:0,storageCapacity:0xa0000000000}),o=y.useRef(null);return oy(),y.useEffect(()=>{fetch(`${Tt}/public/stats`).then(a=>a.json()).then(a=>{a.success&&a.data&&i(a.data)}).catch(()=>{})},[]),y.useEffect(()=>{const a=()=>{o.current&&(o.current.style.background=window.scrollY>40?"rgba(0,0,0,.95)":"rgba(0,0,0,.85)")};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),s.jsxs("div",{className:"marketing-shell",children:[s.jsx("style",{children:$r}),s.jsxs("header",{className:"landing-header",ref:o,children:[s.jsxs("button",{type:"button",className:"brand-lockup",onClick:e,"aria-label":`${ke.name} home`,children:[s.jsx("span",{className:"brand-mark",children:s.jsx("img",{src:ke.logoImage,alt:""})}),s.jsx("span",{children:ke.name})]}),s.jsx("nav",{className:"landing-links","aria-label":"Primary",children:iy.map(a=>s.jsx("a",{href:a.href,children:a.label},a.href))}),s.jsxs("div",{className:"landing-nav",children:[s.jsx("button",{type:"button",className:"btn-ghost",onClick:t,children:"Log in"}),s.jsx("button",{type:"button",className:"btn-mega-red",onClick:r,children:"Sign up free"})]})]}),s.jsxs("main",{children:[s.jsxs("section",{className:"hero-section",children:[s.jsx("div",{className:"hero-glow hero-glow-green","aria-hidden":"true"}),s.jsx("div",{className:"hero-glow hero-glow-blue","aria-hidden":"true"}),s.jsxs("div",{className:"hero-copy",children:[s.jsxs("div",{className:"eyebrow",children:[s.jsx("span",{"aria-hidden":"true"})," Secure cloud storage by default"]}),s.jsxs("h1",{children:["Online privacy for everyone —",s.jsx("span",{children:"your intelligent cloud drive."})]}),s.jsxs("p",{children:["Privacy is not an option with ",ke.name,"; it's standard. Store, organize, and securely share your files from one place — on any device."]}),s.jsxs("div",{className:"hero-actions animate-fade-up delay-1",children:[s.jsx("button",{type:"button",className:"btn-primary btn-hero-dark",onClick:e,children:"Sign up for 10 GB free"}),s.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"Log in"})]}),s.jsx("div",{className:"hero-note",children:"No credit card required · 10 GB free forever"})]}),s.jsxs("div",{className:"dashboard-preview animate-fade-up delay-2","aria-label":"CloudVault preview",children:[s.jsx("div",{className:"hero-video-orbit","aria-hidden":"true",children:s.jsx("video",{src:ke.logoVideo,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata"})}),s.jsxs("div",{className:"preview-panel",children:[s.jsxs("div",{className:"preview-top-bar",children:[s.jsx("span",{className:"brand-mark small",children:s.jsx("img",{src:ke.logoImage,alt:""})}),s.jsx("div",{className:"preview-search",children:"🔍 Search Cloud drive"})]}),s.jsxs("div",{className:"preview-body",children:[s.jsxs("aside",{className:"preview-sidebar",children:[s.jsxs("div",{className:"preview-logo",children:[s.jsx("span",{className:"brand-mark small",children:s.jsx("img",{src:ke.logoImage,alt:""})}),s.jsx("strong",{children:"Drive"})]}),["Cloud drive","Recent","Starred","Shared","Trash"].map((a,c)=>s.jsx("div",{className:`preview-nav-item${c===0?" active":""}`,children:a},a)),s.jsxs("div",{className:"preview-usage",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Free"}),s.jsx("strong",{children:"4.5 GB / 10 GB"})]}),s.jsx("div",{className:"preview-bar",children:s.jsx("span",{})})]})]}),s.jsxs("section",{className:"preview-files",children:[s.jsxs("div",{className:"preview-topline",children:[s.jsx("h3",{children:"Cloud drive"}),s.jsx("button",{type:"button","aria-hidden":"true",tabIndex:-1,children:"↑ Upload"})]}),[["Project Alpha","1.2 GB · Last edited 2h ago"],["Q3 Financials.xlsx","2.4 MB · Last edited 2h ago"],["Campaign Banner.png","4.1 MB · Last edited 2h ago"]].map(([a,c],l)=>s.jsxs("div",{className:"preview-file",style:{animationDelay:`${l*.1}s`},children:[s.jsx("div",{className:"preview-file-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h4",{children:a}),s.jsx("p",{children:c})]})]},a))]})]})]})]})]}),s.jsx("section",{id:"products",className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsx("p",{className:"section-kicker",children:"All in one place"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 44px)",fontWeight:800,lineHeight:1.15,marginBottom:12},children:"Store and share files. Browse and protect."}),s.jsxs("p",{style:{color:"#b3b3b3",fontSize:17,maxWidth:640,lineHeight:1.6},children:[ke.name," combines secure cloud storage with powerful tools to upload, download, and manage your files with confidence."]}),s.jsx("div",{className:"mega-product-grid",children:ty.map((a,c)=>s.jsxs("article",{className:`mega-product-card scroll-reveal delay-${c+1}`,children:[s.jsx("div",{className:"mega-product-icon","aria-hidden":"true",children:a.icon}),s.jsx("h3",{children:a.title}),s.jsx("p",{children:a.desc})]},a.title))})]})}),s.jsx("section",{id:"security",className:"mega-section",children:s.jsxs("div",{className:"mega-security-block scroll-reveal",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Security that's always on"}),s.jsx("h2",{children:"Your data stays encrypted and private."}),s.jsx("p",{children:"We protect your data with encryption in transit and at rest — the highest level of online security. Only you and people you authorize can access your files."}),s.jsx("button",{type:"button",className:"btn-mega-red",style:{marginTop:28},onClick:e,children:"Learn more"})]}),s.jsx("div",{className:"mega-shield","aria-hidden":"true",children:"🔐"})]})}),s.jsx("section",{className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsxs("p",{className:"section-kicker",children:["Why choose ",ke.name,"?"]}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800,marginBottom:40},children:"Built for how you work today."}),s.jsx("div",{className:"mega-product-grid",children:ry.map((a,c)=>s.jsxs("article",{className:`mega-product-card scroll-reveal delay-${c+1}`,children:[s.jsx("h3",{children:a.title}),s.jsx("p",{children:a.desc})]},a.title))})]})}),s.jsxs("section",{className:"stats-band scroll-reveal","aria-label":"Platform statistics",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24,textAlign:"center",borderTop:"1px solid rgba(255,255,255,.06)",borderBottom:"1px solid rgba(255,255,255,.06)"},children:[s.jsxs("div",{className:"stat-mini scroll-reveal delay-1",children:[s.jsxs("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:[n.filesStored.toLocaleString(),"+"]}),s.jsx("span",{style:{color:"#737373"},children:"Files stored"})]}),s.jsxs("div",{className:"stat-mini scroll-reveal delay-2",children:[s.jsx("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:ze(n.storageCapacity)}),s.jsx("span",{style:{color:"#737373"},children:"Storage capacity"})]}),s.jsxs("div",{className:"stat-mini scroll-reveal delay-3",children:[s.jsxs("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:[n.activeUsers.toLocaleString(),"+"]}),s.jsx("span",{style:{color:"#737373"},children:"Active users"})]})]}),s.jsxs("section",{id:"pricing",className:"mega-section",children:[s.jsxs("div",{className:"scroll-reveal section-center",children:[s.jsx("p",{className:"section-kicker",children:"Pricing"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800},children:"Simple plans for everyone."}),s.jsx("p",{className:"section-subtitle",style:{color:"#b3b3b3",marginTop:12},children:"Start free. Scale when you need more."})]}),s.jsx("div",{className:"pricing-grid scroll-reveal delay-1",children:ey.map(a=>s.jsxs("article",{className:`plan-card${a.highlight?" highlight":""}`,children:[a.highlight&&s.jsx("span",{className:"plan-badge",children:"Most popular"}),s.jsx("h3",{children:a.name}),s.jsxs("div",{className:"plan-price",children:[a.price,s.jsx("span",{children:a.period})]}),s.jsxs("p",{children:[a.storage," storage"]}),s.jsx("ul",{className:"plan-features",children:(a.features||[]).slice(0,4).map(c=>s.jsx("li",{children:c},c))}),s.jsxs("button",{type:"button",className:a.highlight?"btn-mega-red":"btn-secondary",onClick:e,children:["Choose ",a.name]})]},a.id))})]}),s.jsx("section",{id:"faq",className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsxs("div",{className:"section-center",children:[s.jsx("p",{className:"section-kicker",children:"FAQ"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800},children:"Questions? We have answers."})]}),s.jsx("div",{className:"faq-list",children:ny.map(a=>s.jsxs("details",{className:"faq-item scroll-reveal",children:[s.jsx("summary",{children:a.q}),s.jsx("p",{children:a.a})]},a.q))})]})}),s.jsxs("section",{className:"cta-band scroll-reveal",children:[s.jsx("h2",{children:"Millions trust secure cloud storage."}),s.jsx("p",{children:"Join users who store and protect their data in the cloud."}),s.jsxs("div",{className:"hero-actions",children:[s.jsx("button",{type:"button",className:"btn-mega-red",onClick:e,children:"Sign up for free"}),s.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"Log in"})]})]})]}),s.jsxs("footer",{className:"landing-footer",children:[s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx("span",{className:"brand-mark",children:s.jsx("img",{src:ke.logoImage,alt:""})}),s.jsx("strong",{children:ke.name}),s.jsx("p",{children:"Secure cloud storage for individuals and teams."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Product"}),s.jsx("a",{href:"#products",children:"Products"}),s.jsx("a",{href:"#pricing",children:"Pricing"}),s.jsx("a",{href:"#faq",children:"FAQ"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Company"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"About"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Contact"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Legal"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Privacy"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Terms"})]})]}),s.jsx("div",{className:"footer-bottom",children:s.jsxs("span",{children:["© ",new Date().getFullYear()," ",ke.name,". All rights reserved."]})})]})]})}const ay=()=>{};var xd={};/**
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
 */const wh=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===55296&&n+1<e.length&&(e.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++n)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t},ly=function(e){const t=[];let r=0,n=0;for(;r<e.length;){const i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[r++];t[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[r++],a=e[r++],c=e[r++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const o=e[r++],a=e[r++];t[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},bh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,c=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,f=(o&3)<<4|c>>4;let p=(c&15)<<2|u>>6,x=u&63;l||(x=64,a||(p=64)),n.push(r[d],r[f],r[p],r[x])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(wh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ly(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){const o=r[e.charAt(i++)],c=i<e.length?r[e.charAt(i)]:0;++i;const u=i<e.length?r[e.charAt(i)]:64;++i;const f=i<e.length?r[e.charAt(i)]:64;if(++i,o==null||c==null||u==null||f==null)throw new cy;const p=o<<2|c>>4;if(n.push(p),u!==64){const x=c<<4&240|u>>2;if(n.push(x),f!==64){const v=u<<6&192|f;n.push(v)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class cy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uy=function(e){const t=wh(e);return bh.encodeByteArray(t,!0)},kh=function(e){return uy(e).replace(/\./g,"")},Sh=function(e){try{return bh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function dy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fy=()=>dy().__FIREBASE_DEFAULTS__,py=()=>{if(typeof process>"u"||typeof xd>"u")return;const e=xd.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},hy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Sh(e[1]);return t&&JSON.parse(t)},Mc=()=>{try{return ay()||fy()||py()||hy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},gy=e=>{var t,r;return(r=(t=Mc())===null||t===void 0?void 0:t.emulatorHosts)===null||r===void 0?void 0:r[e]},_h=()=>{var e;return(e=Mc())===null||e===void 0?void 0:e.config},Eh=e=>{var t;return(t=Mc())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class my{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,n))}}}/**
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
 */function Bs(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vy(e){return(await fetch(e,{credentials:"include"})).ok}const Si={};function yy(){const e={prod:[],emulator:[]};for(const t of Object.keys(Si))Si[t]?e.emulator.push(t):e.prod.push(t);return e}function xy(e){let t=document.getElementById(e),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),r=!0),{created:r,element:t}}let wd=!1;function wy(e,t){if(typeof window>"u"||typeof document>"u"||!Bs(window.location.host)||Si[e]===t||Si[e]||wd)return;Si[e]=t;function r(p){return`__firebase__banner__${p}`}const n="__firebase__banner",o=yy().prod.length>0;function a(){const p=document.getElementById(n);p&&p.remove()}function c(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,x){p.setAttribute("width","24"),p.setAttribute("id",x),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{wd=!0,a()},p}function d(p,x){p.setAttribute("id",x),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=xy(n),x=r("text"),v=document.getElementById(x)||document.createElement("span"),k=r("learnmore"),S=document.getElementById(k)||document.createElement("a"),g=r("preprendIcon"),h=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const m=p.element;c(m),d(S,k);const b=u();l(h,g),m.append(h,v,S,b),document.body.appendChild(m)}o?(v.innerText="Preview backend disconnected.",h.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function by(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function ky(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function _y(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ey(){const e=Fe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Cy(){try{return typeof indexedDB=="object"}catch{return!1}}function Iy(){return new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(r){t(r)}})}/**
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
 */const jy="FirebaseError";class Cr extends Error{constructor(t,r,n){super(r),this.code=t,this.customData=n,this.name=jy,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(t,r,n){this.service=t,this.serviceName=r,this.errors=n}create(t,...r){const n=r[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Ty(o,n):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Cr(i,c,n)}}function Ty(e,t){return e.replace(Ry,(r,n)=>{const i=t[n];return i!=null?String(i):`<${n}?>`})}const Ry=/\{\$([^}]+)}/g;function Ny(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Mn(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const i of r){if(!n.includes(i))return!1;const o=e[i],a=t[i];if(bd(o)&&bd(a)){if(!Mn(o,a))return!1}else if(o!==a)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function bd(e){return e!==null&&typeof e=="object"}/**
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
 */function Zi(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(i=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function Py(e,t){const r=new Ay(e,t);return r.subscribe.bind(r)}class Ay{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(n=>{this.error(n)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,n){let i;if(t===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");Oy(t,["next","error","complete"])?i=t:i={next:t,error:r,complete:n},i.next===void 0&&(i.next=Ca),i.error===void 0&&(i.error=Ca),i.complete===void 0&&(i.complete=Ca);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Oy(e,t){if(typeof e!="object"||e===null)return!1;for(const r of t)if(r in e&&typeof e[r]=="function")return!0;return!1}function Ca(){}/**
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
 */function Wn(e){return e&&e._delegate?e._delegate:e}class zn{constructor(t,r,n){this.name=t,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Ly{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const n=new my;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){var r;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(r=t==null?void 0:t.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zy(t))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(t=Mr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mr){return this.instances.has(t)}getOptions(t=Mr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&a.resolve(i)}return i}onInit(t,r){var n;const i=this.normalizeInstanceIdentifier(r),o=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:My(t),options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Mr){return this.component?this.component.multipleInstances?t:Mr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function My(e){return e===Mr?void 0:e}function zy(e){return e.instantiationMode==="EAGER"}/**
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
 */class Dy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new Ly(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Z||(Z={}));const Fy={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Uy=Z.INFO,By={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Wy=(e,t,...r)=>{if(t<e.logLevel)return;const n=new Date().toISOString(),i=By[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ch{constructor(t){this.name=t,this._logLevel=Uy,this._logHandler=Wy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Fy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const $y=(e,t)=>t.some(r=>e instanceof r);let kd,Sd;function Vy(){return kd||(kd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hy(){return Sd||(Sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ih=new WeakMap,Tl=new WeakMap,jh=new WeakMap,Ia=new WeakMap,zc=new WeakMap;function Gy(e){const t=new Promise((r,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{r(xr(e.result)),i()},a=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(r=>{r instanceof IDBCursor&&Ih.set(r,e)}).catch(()=>{}),zc.set(t,e),t}function Yy(e){if(Tl.has(e))return;const t=new Promise((r,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{r(),i()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Tl.set(e,t)}let Rl={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return Tl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||jh.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return xr(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Qy(e){Rl=e(Rl)}function Ky(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const n=e.call(ja(this),t,...r);return jh.set(n,t.sort?t.sort():[t]),xr(n)}:Hy().includes(e)?function(...t){return e.apply(ja(this),t),xr(Ih.get(this))}:function(...t){return xr(e.apply(ja(this),t))}}function qy(e){return typeof e=="function"?Ky(e):(e instanceof IDBTransaction&&Yy(e),$y(e,Vy())?new Proxy(e,Rl):e)}function xr(e){if(e instanceof IDBRequest)return Gy(e);if(Ia.has(e))return Ia.get(e);const t=qy(e);return t!==e&&(Ia.set(e,t),zc.set(t,e)),t}const ja=e=>zc.get(e);function Jy(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),c=xr(a);return n&&a.addEventListener("upgradeneeded",l=>{n(xr(a.result),l.oldVersion,l.newVersion,xr(a.transaction),l)}),r&&a.addEventListener("blocked",l=>r(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Xy=["get","getKey","getAll","getAllKeys","count"],Zy=["put","add","delete","clear"],Ta=new Map;function _d(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ta.get(t))return Ta.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,i=Zy.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Xy.includes(r)))return;const o=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(c.shift())),(await Promise.all([u[r](...c),i&&l.done]))[0]};return Ta.set(t,o),o}Qy(e=>({...e,get:(t,r,n)=>_d(t,r)||e.get(t,r,n),has:(t,r)=>!!_d(t,r)||e.has(t,r)}));/**
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
 */class e1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(t1(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function t1(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Nl="@firebase/app",Ed="0.13.2";/**
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
 */const Yt=new Ch("@firebase/app"),r1="@firebase/app-compat",n1="@firebase/analytics-compat",i1="@firebase/analytics",o1="@firebase/app-check-compat",s1="@firebase/app-check",a1="@firebase/auth",l1="@firebase/auth-compat",c1="@firebase/database",u1="@firebase/data-connect",d1="@firebase/database-compat",f1="@firebase/functions",p1="@firebase/functions-compat",h1="@firebase/installations",g1="@firebase/installations-compat",m1="@firebase/messaging",v1="@firebase/messaging-compat",y1="@firebase/performance",x1="@firebase/performance-compat",w1="@firebase/remote-config",b1="@firebase/remote-config-compat",k1="@firebase/storage",S1="@firebase/storage-compat",_1="@firebase/firestore",E1="@firebase/ai",C1="@firebase/firestore-compat",I1="firebase",j1="11.10.0";/**
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
 */const Pl="[DEFAULT]",T1={[Nl]:"fire-core",[r1]:"fire-core-compat",[i1]:"fire-analytics",[n1]:"fire-analytics-compat",[s1]:"fire-app-check",[o1]:"fire-app-check-compat",[a1]:"fire-auth",[l1]:"fire-auth-compat",[c1]:"fire-rtdb",[u1]:"fire-data-connect",[d1]:"fire-rtdb-compat",[f1]:"fire-fn",[p1]:"fire-fn-compat",[h1]:"fire-iid",[g1]:"fire-iid-compat",[m1]:"fire-fcm",[v1]:"fire-fcm-compat",[y1]:"fire-perf",[x1]:"fire-perf-compat",[w1]:"fire-rc",[b1]:"fire-rc-compat",[k1]:"fire-gcs",[S1]:"fire-gcs-compat",[_1]:"fire-fst",[C1]:"fire-fst-compat",[E1]:"fire-vertex","fire-js":"fire-js",[I1]:"fire-js-all"};/**
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
 */const gs=new Map,R1=new Map,Al=new Map;function Cd(e,t){try{e.container.addComponent(t)}catch(r){Yt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function $i(e){const t=e.name;if(Al.has(t))return Yt.debug(`There were multiple attempts to register component ${t}.`),!1;Al.set(t,e);for(const r of gs.values())Cd(r,e);for(const r of R1.values())Cd(r,e);return!0}function Th(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Et(e){return e==null?!1:e.settings!==void 0}/**
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
 */const N1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new Xi("app","Firebase",N1);/**
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
 */class P1{constructor(t,r,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
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
 */const eo=j1;function Rh(e,t={}){let r=e;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Pl,automaticDataCollectionEnabled:!0},t),i=n.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(r||(r=_h()),!r)throw wr.create("no-options");const o=gs.get(i);if(o){if(Mn(r,o.options)&&Mn(n,o.config))return o;throw wr.create("duplicate-app",{appName:i})}const a=new Dy(i);for(const l of Al.values())a.addComponent(l);const c=new P1(r,n,a);return gs.set(i,c),c}function A1(e=Pl){const t=gs.get(e);if(!t&&e===Pl&&_h())return Rh();if(!t)throw wr.create("no-app",{appName:e});return t}function En(e,t,r){var n;let i=(n=T1[e])!==null&&n!==void 0?n:e;r&&(i+=`-${r}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yt.warn(c.join(" "));return}$i(new zn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const O1="firebase-heartbeat-database",L1=1,Vi="firebase-heartbeat-store";let Ra=null;function Nh(){return Ra||(Ra=Jy(O1,L1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Vi)}catch(r){console.warn(r)}}}}).catch(e=>{throw wr.create("idb-open",{originalErrorMessage:e.message})})),Ra}async function M1(e){try{const r=(await Nh()).transaction(Vi),n=await r.objectStore(Vi).get(Ph(e));return await r.done,n}catch(t){if(t instanceof Cr)Yt.warn(t.message);else{const r=wr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Yt.warn(r.message)}}}async function Id(e,t){try{const n=(await Nh()).transaction(Vi,"readwrite");await n.objectStore(Vi).put(t,Ph(e)),await n.done}catch(r){if(r instanceof Cr)Yt.warn(r.message);else{const n=wr.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Yt.warn(n.message)}}}function Ph(e){return`${e.name}!${e.options.appId}`}/**
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
 */const z1=1024,D1=30;class F1{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new B1(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=jd();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>D1){const a=W1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Yt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=jd(),{heartbeatsToSend:n,unsentEntries:i}=U1(this._heartbeatsCache.heartbeats),o=kh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(r){return Yt.warn(r),""}}}function jd(){return new Date().toISOString().substring(0,10)}function U1(e,t=z1){const r=[];let n=e.slice();for(const i of e){const o=r.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Td(r)>t){o.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Td(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class B1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cy()?Iy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await M1(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Id(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Id(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Td(e){return kh(JSON.stringify({version:2,heartbeats:e})).length}function W1(e){if(e.length===0)return-1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}/**
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
 */function $1(e){$i(new zn("platform-logger",t=>new e1(t),"PRIVATE")),$i(new zn("heartbeat",t=>new F1(t),"PRIVATE")),En(Nl,Ed,e),En(Nl,Ed,"esm2017"),En("fire-js","")}$1("");var V1="firebase",H1="11.10.0";/**
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
 */En(V1,H1,"app");function Dc(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function Ah(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G1=Ah,Oh=new Xi("auth","Firebase",Ah());/**
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
 */const ms=new Ch("@firebase/auth");function Y1(e,...t){ms.logLevel<=Z.WARN&&ms.warn(`Auth (${eo}): ${e}`,...t)}function Uo(e,...t){ms.logLevel<=Z.ERROR&&ms.error(`Auth (${eo}): ${e}`,...t)}/**
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
 */function Rt(e,...t){throw Uc(e,...t)}function yt(e,...t){return Uc(e,...t)}function Fc(e,t,r){const n=Object.assign(Object.assign({},G1()),{[t]:r});return new Xi("auth","Firebase",n).create(t,{appName:e.name})}function Vr(e){return Fc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Q1(e,t,r){const n=r;if(!(t instanceof n))throw n.name!==t.constructor.name&&Rt(e,"argument-error"),Fc(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uc(e,...t){if(typeof e!="string"){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return Oh.create(e,...t)}function z(e,t,...r){if(!e)throw Uc(t,...r)}function Ut(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Uo(t),new Error(t)}function Qt(e,t){e||Ut(t)}/**
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
 */function Ol(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function K1(){return Rd()==="http:"||Rd()==="https:"}function Rd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function q1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(K1()||Sy()||"connection"in navigator)?navigator.onLine:!0}function J1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class to{constructor(t,r){this.shortDelay=t,this.longDelay=r,Qt(r>t,"Short delay should be less than long delay!"),this.isMobile=by()||_y()}get(){return q1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bc(e,t){Qt(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
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
 */class Lh{static initialize(t,r,n){this.fetchImpl=t,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const X1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Z1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ex=new to(3e4,6e4);function Wc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $n(e,t,r,n,i={}){return Mh(e,i,async()=>{let o={},a={};n&&(t==="GET"?a=n:o={body:JSON.stringify(n)});const c=Zi(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},o);return ky()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&Bs(e.emulatorConfig.host)&&(u.credentials="include"),Lh.fetch()(await zh(e,e.config.apiHost,r,c),u)})}async function Mh(e,t,r){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},X1),t);try{const i=new rx(e),o=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Eo(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Eo(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw Eo(e,"user-disabled",a);const d=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Fc(e,d,u);Rt(e,d)}}catch(i){if(i instanceof Cr)throw i;Rt(e,"network-request-failed",{message:String(i)})}}async function tx(e,t,r,n,i={}){const o=await $n(e,t,r,n,i);return"mfaPendingCredential"in o&&Rt(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function zh(e,t,r,n){const i=`${t}${r}?${n}`,o=e,a=o.config.emulator?Bc(e.config,i):`${e.config.apiScheme}://${i}`;return Z1.includes(r)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class rx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(yt(this.auth,"network-request-failed")),ex.get())})}}function Eo(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=yt(e,t,n);return i.customData._tokenResponse=r,i}/**
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
 */async function nx(e,t){return $n(e,"POST","/v1/accounts:delete",t)}async function vs(e,t){return $n(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function _i(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ix(e,t=!1){const r=Wn(e),n=await r.getIdToken(t),i=$c(n);z(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:n,authTime:_i(Na(i.auth_time)),issuedAtTime:_i(Na(i.iat)),expirationTime:_i(Na(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Na(e){return Number(e)*1e3}function $c(e){const[t,r,n]=e.split(".");if(t===void 0||r===void 0||n===void 0)return Uo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sh(r);return i?JSON.parse(i):(Uo("Failed to decode base64 JWT payload"),null)}catch(i){return Uo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Nd(e){const t=$c(e);return z(t,"internal-error"),z(typeof t.exp<"u","internal-error"),z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Hi(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof Cr&&ox(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}function ox({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class sx{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var r;if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ll{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ys(e){var t;const r=e.auth,n=await e.getIdToken(),i=await Hi(e,vs(r,{idToken:n}));z(i==null?void 0:i.users.length,r,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Dh(o.providerUserInfo):[],c=lx(e.providerData,a),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Ll(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,f)}async function ax(e){const t=Wn(e);await ys(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function lx(e,t){return[...e.filter(n=>!t.some(i=>i.providerId===n.providerId)),...t]}function Dh(e){return e.map(t=>{var{providerId:r}=t,n=Dc(t,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function cx(e,t){const r=await Mh(e,{},async()=>{const n=Zi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=await zh(e,i,"/v1/token",`key=${o}`),c=await e._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:n};return e.emulatorConfig&&Bs(e.emulatorConfig.host)&&(l.credentials="include"),Lh.fetch()(a,l)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function ux(e,t){return $n(e,"POST","/v2/accounts:revokeToken",Wc(e,t))}/**
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
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){z(t.idToken,"internal-error"),z(typeof t.idToken<"u","internal-error"),z(typeof t.refreshToken<"u","internal-error");const r="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Nd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}updateFromIdToken(t){z(t.length!==0,"internal-error");const r=Nd(t);this.updateTokensAndExpiration(t,null,r)}async getToken(t,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:n,refreshToken:i,expiresIn:o}=await cx(t,r);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(t,r,n){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,r){const{refreshToken:n,accessToken:i,expirationTime:o}=r,a=new Cn;return n&&(z(typeof n=="string","internal-error",{appName:t}),a.refreshToken=n),i&&(z(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(z(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
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
 */function tr(e,t){z(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class gt{constructor(t){var{uid:r,auth:n,stsTokenManager:i}=t,o=Dc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ll(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const r=await Hi(this,this.stsTokenManager.getToken(this.auth,t));return z(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return ix(this,t)}reload(){return ax(this)}_assign(t){this!==t&&(z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>Object.assign({},r)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const r=new gt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(t){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),r&&await ys(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(Vr(this.auth));const t=await this.getIdToken();return await Hi(this,nx(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){var n,i,o,a,c,l,u,d;const f=(n=r.displayName)!==null&&n!==void 0?n:void 0,p=(i=r.email)!==null&&i!==void 0?i:void 0,x=(o=r.phoneNumber)!==null&&o!==void 0?o:void 0,v=(a=r.photoURL)!==null&&a!==void 0?a:void 0,k=(c=r.tenantId)!==null&&c!==void 0?c:void 0,S=(l=r._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=r.createdAt)!==null&&u!==void 0?u:void 0,h=(d=r.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:b,isAnonymous:_,providerData:C,stsTokenManager:I}=r;z(m&&I,t,"internal-error");const N=Cn.fromJSON(this.name,I);z(typeof m=="string",t,"internal-error"),tr(f,t.name),tr(p,t.name),z(typeof b=="boolean",t,"internal-error"),z(typeof _=="boolean",t,"internal-error"),tr(x,t.name),tr(v,t.name),tr(k,t.name),tr(S,t.name),tr(g,t.name),tr(h,t.name);const D=new gt({uid:m,auth:t,email:p,emailVerified:b,displayName:f,isAnonymous:_,photoURL:v,phoneNumber:x,tenantId:k,stsTokenManager:N,createdAt:g,lastLoginAt:h});return C&&Array.isArray(C)&&(D.providerData=C.map(P=>Object.assign({},P))),S&&(D._redirectEventId=S),D}static async _fromIdTokenResponse(t,r,n=!1){const i=new Cn;i.updateFromServerResponse(r);const o=new gt({uid:r.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await ys(o),o}static async _fromGetAccountInfoResponse(t,r,n){const i=r.users[0];z(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Dh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new Cn;c.updateFromIdToken(n);const l=new gt({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ll(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
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
 */const Pd=new Map;function Bt(e){Qt(e instanceof Function,"Expected a class definition");let t=Pd.get(e);return t?(Qt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Pd.set(e,t),t)}/**
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
 */class Fh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}Fh.type="NONE";const Ad=Fh;/**
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
 */function Bo(e,t,r){return`firebase:${e}:${t}:${r}`}class In{constructor(t,r,n){this.persistence=t,this.auth=r,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=Bo(this.userKey,i.apiKey,o),this.fullPersistenceKey=Bo("persistence",i.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const r=await vs(this.auth,{idToken:t}).catch(()=>{});return r?gt._fromGetAccountInfoResponse(this.auth,r,t):null}return gt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,n="authUser"){if(!r.length)return new In(Bt(Ad),t,n);const i=(await Promise.all(r.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Bt(Ad);const a=Bo(n,t.config.apiKey,t.name);let c=null;for(const u of r)try{const d=await u._get(a);if(d){let f;if(typeof d=="string"){const p=await vs(t,{idToken:d}).catch(()=>{});if(!p)break;f=await gt._fromGetAccountInfoResponse(t,p,d)}else f=gt._fromJSON(t,d);u!==o&&(c=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new In(o,t,n):(o=l[0],c&&await o._set(a,c.toJSON()),await Promise.all(r.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new In(o,t,n))}}/**
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
 */function Od(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if($h(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Uh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hh(t))return"Blackberry";if(Gh(t))return"Webos";if(Bh(t))return"Safari";if((t.includes("chrome/")||Wh(t))&&!t.includes("edge/"))return"Chrome";if(Vh(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Uh(e=Fe()){return/firefox\//i.test(e)}function Bh(e=Fe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wh(e=Fe()){return/crios\//i.test(e)}function $h(e=Fe()){return/iemobile/i.test(e)}function Vh(e=Fe()){return/android/i.test(e)}function Hh(e=Fe()){return/blackberry/i.test(e)}function Gh(e=Fe()){return/webos/i.test(e)}function Vc(e=Fe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function dx(e=Fe()){var t;return Vc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function fx(){return Ey()&&document.documentMode===10}function Yh(e=Fe()){return Vc(e)||Vh(e)||Gh(e)||Hh(e)||/windows phone/i.test(e)||$h(e)}/**
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
 */function Qh(e,t=[]){let r;switch(e){case"Browser":r=Od(Fe());break;case"Worker":r=`${Od(Fe())}-${e}`;break;default:r=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${eo}/${n}`}/**
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
 */class px{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const n=o=>new Promise((a,c)=>{try{const l=t(o);a(l)}catch(l){c(l)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const r=[];try{for(const n of this.queue)await n(t),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function hx(e,t={}){return $n(e,"GET","/v2/passwordPolicy",Wc(e,t))}/**
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
 */const gx=6;class mx{constructor(t){var r,n,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=a.minPasswordLength)!==null&&r!==void 0?r:gx,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=t.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var r,n,i,o,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(r=l.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(t,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=t.length>=n),i&&(r.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<t.length;i++)n=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,r,n,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class vx{constructor(t,r,n,i){this.app=t,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ld(this),this.idTokenSubscription=new Ld(this),this.beforeStateQueue=new px(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=Bt(r)),this._initializationPromise=this.queue(async()=>{var n,i,o;if(!this._deleted&&(this.persistenceManager=await In.create(this,t),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const r=await vs(this,{idToken:t}),n=await gt._fromGetAccountInfoResponse(this,r,t);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(Et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===c)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await ys(t)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=J1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Et(this.app))return Promise.reject(Vr(this));const r=t?Wn(t):null;return r&&z(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(Vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Et(this.app)?Promise.reject(Vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await hx(this),r=new mx(t);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Xi("auth","Firebase",t())}onAuthStateChanged(t,r,n){return this.registerStateListener(this.authStateSubscription,t,r,n)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,n){return this.registerStateListener(this.idTokenSubscription,t,r,n)}authStateReady(){return new Promise((t,r)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged(()=>{n(),t()},r)}})}async revokeAccessToken(t){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await ux(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,r){const n=await this.getOrInitRedirectPersistenceManager(r);return t===null?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&Bt(t)||this._popupRedirectResolver;z(r,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[Bt(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===t?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,n,i){if(this._deleted)return()=>{};const o=typeof r=="function"?r:r.next.bind(r);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof r=="function"){const l=t.addObserver(r,n,i);return()=>{a=!0,l()}}else{const l=t.addObserver(r);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Qh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var t;if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const r=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return r!=null&&r.error&&Y1(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Ws(e){return Wn(e)}class Ld{constructor(t){this.auth=t,this.observer=null,this.addObserver=Py(r=>this.observer=r)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yx(e){Hc=e}function xx(e){return Hc.loadJS(e)}function wx(){return Hc.gapiScript}function bx(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function kx(e,t){const r=Th(e,"auth");if(r.isInitialized()){const i=r.getImmediate(),o=r.getOptions();if(Mn(o,t??{}))return i;Rt(i,"already-initialized")}return r.initialize({options:t})}function Sx(e,t){const r=(t==null?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Bt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,t==null?void 0:t.popupRedirectResolver)}function _x(e,t,r){const n=Ws(e);z(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const i=!1,o=Kh(t),{host:a,port:c}=Ex(t),l=c===null?"":`:${c}`,u={url:`${o}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){z(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),z(Mn(u,n.config.emulator)&&Mn(d,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=d,n.settings.appVerificationDisabledForTesting=!0,Bs(a)?(vy(`${o}//${a}${l}`),wy("Auth",!0)):Cx()}function Kh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ex(e){const t=Kh(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const o=i[1];return{host:o,port:Md(n.substr(o.length+1))}}else{const[o,a]=n.split(":");return{host:o,port:Md(a)}}}function Md(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Cx(){function e(){const t=document.createElement("p"),r=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class qh{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return Ut("not implemented")}_getIdTokenResponse(t){return Ut("not implemented")}_linkToIdToken(t,r){return Ut("not implemented")}_getReauthenticationResolver(t){return Ut("not implemented")}}/**
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
 */async function jn(e,t){return tx(e,"POST","/v1/accounts:signInWithIdp",Wc(e,t))}/**
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
 */const Ix="http://localhost";class Kt extends qh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new Kt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):Rt("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:n,signInMethod:i}=r,o=Dc(r,["providerId","signInMethod"]);if(!n||!i)return null;const a=new Kt(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const r=this.buildRequest();return jn(t,r)}_linkToIdToken(t,r){const n=this.buildRequest();return n.idToken=r,jn(t,n)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,jn(t,r)}buildRequest(){const t={requestUri:Ix,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=Zi(r)}return t}}/**
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
 */class Gc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vn extends Gc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class Ei extends Vn{static credentialFromJSON(t){const r=typeof t=="string"?JSON.parse(t):t;return z("providerId"in r&&"signInMethod"in r,"argument-error"),Kt._fromParams(r)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return z(t.idToken||t.accessToken,"argument-error"),Kt._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return Ei.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return Ei.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:o,nonce:a,providerId:c}=t;if(!n&&!i&&!r&&!o||!c)return null;try{return new Ei(c)._credential({idToken:r,accessToken:n,nonce:a,pendingToken:o})}catch{return null}}}/**
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
 */class sr extends Vn{constructor(){super("facebook.com")}static credential(t){return Kt._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return sr.credentialFromTaggedObject(t)}static credentialFromError(t){return sr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return sr.credential(t.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class Lt extends Vn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return Kt._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:n}=t;if(!r&&!n)return null;try{return Lt.credential(r,n)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
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
 */class Mt extends Vn{constructor(){super("github.com")}static credential(t){return Kt._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
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
 */class ar extends Vn{constructor(){super("twitter.com")}static credential(t,r){return Kt._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return ar.credentialFromTaggedObject(t)}static credentialFromError(t){return ar.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=t;if(!r||!n)return null;try{return ar.credential(r,n)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */class Dn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,n,i=!1){const o=await gt._fromIdTokenResponse(t,n,i),a=zd(n);return new Dn({user:o,providerId:a,_tokenResponse:n,operationType:r})}static async _forOperation(t,r,n){await t._updateTokensIfNecessary(n,!0);const i=zd(n);return new Dn({user:t,providerId:i,_tokenResponse:n,operationType:r})}}function zd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class xs extends Cr{constructor(t,r,n,i){var o;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,xs.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,r,n,i){return new xs(t,r,n,i)}}function Jh(e,t,r,n){return(t==="reauthenticate"?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?xs._fromErrorAndOperation(e,o,t,n):o})}async function jx(e,t,r=!1){const n=await Hi(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return Dn._forOperation(e,"link",n)}/**
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
 */async function Tx(e,t,r=!1){const{auth:n}=e;if(Et(n.app))return Promise.reject(Vr(n));const i="reauthenticate";try{const o=await Hi(e,Jh(n,i,t,e),r);z(o.idToken,n,"internal-error");const a=$c(o.idToken);z(a,n,"internal-error");const{sub:c}=a;return z(e.uid===c,n,"user-mismatch"),Dn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Rt(n,"user-mismatch"),o}}/**
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
 */async function Rx(e,t,r=!1){if(Et(e.app))return Promise.reject(Vr(e));const n="signIn",i=await Jh(e,n,t),o=await Dn._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(o.user),o}function Nx(e,t,r,n){return Wn(e).onIdTokenChanged(t,r,n)}function Px(e,t,r){return Wn(e).beforeAuthStateChanged(t,r)}const ws="__sak";/**
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
 */class Xh{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(ws,"1"),this.storage.removeItem(ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ax=1e3,Ox=10;class Zh extends Xh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&t(r,i,n)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const n=t.key;r?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!r&&this.localCache[n]===a||this.notifyListeners(n,a)},o=this.storage.getItem(n);fx()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Ox):i()}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:n}),!0)})},Ax)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}Zh.type="LOCAL";const Lx=Zh;/**
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
 */class eg extends Xh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}eg.type="SESSION";const tg=eg;/**
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
 */function Mx(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class $s{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(i=>i.isListeningto(t));if(r)return r;const n=new $s(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:n,eventType:i,data:o}=r.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(a).map(async u=>u(r.origin,o)),l=await Mx(c);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$s.receivers=[];/**
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
 */function Yc(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(Math.random()*10);return e+r}/**
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
 */class zx{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,l)=>{const u=Yc("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(p.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:r},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function jt(){return window}function Dx(e){jt().location.href=e}/**
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
 */function rg(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function Fx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ux(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Bx(){return rg()?self:null}/**
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
 */const ng="firebaseLocalStorageDb",Wx=1,bs="firebaseLocalStorage",ig="fbase_key";class ro{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Vs(e,t){return e.transaction([bs],t?"readwrite":"readonly").objectStore(bs)}function $x(){const e=indexedDB.deleteDatabase(ng);return new ro(e).toPromise()}function Ml(){const e=indexedDB.open(ng,Wx);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const n=e.result;try{n.createObjectStore(bs,{keyPath:ig})}catch(i){r(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(bs)?t(n):(n.close(),await $x(),t(await Ml()))})})}async function Dd(e,t,r){const n=Vs(e,!0).put({[ig]:t,value:r});return new ro(n).toPromise()}async function Vx(e,t){const r=Vs(e,!1).get(t),n=await new ro(r).toPromise();return n===void 0?null:n.value}function Fd(e,t){const r=Vs(e,!0).delete(t);return new ro(r).toPromise()}const Hx=800,Gx=3;class og{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ml(),this.db)}async _withRetries(t){let r=0;for(;;)try{const n=await this._openDb();return await t(n)}catch(n){if(r++>Gx)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$s._getInstance(Bx()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Fx(),!this.activeServiceWorker)return;this.sender=new zx(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((t=n[0])===null||t===void 0)&&t.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Ux()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ml();return await Dd(t,ws,"1"),await Fd(t,ws),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dd(n,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(n=>Vx(n,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fd(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Vs(i,!1).getAll();return new ro(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}og.type="LOCAL";const Yx=og;new to(3e4,6e4);/**
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
 */function sg(e,t){return t?Bt(t):(z(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Qc extends qh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return jn(t,this._buildIdpRequest())}_linkToIdToken(t,r){return jn(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return jn(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function Qx(e){return Rx(e.auth,new Qc(e),e.bypassAuthState)}function Kx(e){const{auth:t,user:r}=e;return z(r,t,"internal-error"),Tx(r,new Qc(e),e.bypassAuthState)}async function qx(e){const{auth:t,user:r}=e;return z(r,t,"internal-error"),jx(r,new Qc(e),e.bypassAuthState)}/**
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
 */class ag{constructor(t,r,n,i,o=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:n,postBody:i,tenantId:o,error:a,type:c}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:r,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Qx;case"linkViaPopup":case"linkViaRedirect":return qx;case"reauthViaPopup":case"reauthViaRedirect":return Kx;default:Rt(this.auth,"internal-error")}}resolve(t){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Jx=new to(2e3,1e4);async function Xx(e,t,r){if(Et(e.app))return Promise.reject(yt(e,"operation-not-supported-in-this-environment"));const n=Ws(e);Q1(e,t,Gc);const i=sg(n,r);return new Ur(n,"signInViaPopup",t,i).executeNotNull()}class Ur extends ag{constructor(t,r,n,i,o){super(t,r,i,o),this.provider=n,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return z(t,this.auth,"internal-error"),t}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const t=Yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const t=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Jx.get())};t()}}Ur.currentPopupAction=null;/**
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
 */const Zx="pendingRedirect",Wo=new Map;class ew extends ag{constructor(t,r,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let t=Wo.get(this.auth._key());if(!t){try{const n=await tw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(r){t=()=>Promise.reject(r)}Wo.set(this.auth._key(),t)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tw(e,t){const r=iw(t),n=nw(e);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function rw(e,t){Wo.set(e._key(),t)}function nw(e){return Bt(e._redirectPersistence)}function iw(e){return Bo(Zx,e.config.apiKey,e.name)}async function ow(e,t,r=!1){if(Et(e.app))return Promise.reject(Vr(e));const n=Ws(e),i=sg(n,t),a=await new ew(n,i,r).execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}/**
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
 */const sw=10*60*1e3;class aw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(r=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!lw(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){var n;if(t.error&&!lg(t)){const i=((n=t.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(yt(this.auth,i))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const n=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=sw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ud(t))}saveEventToCache(t){this.cachedEventUids.add(Ud(t)),this.lastProcessedEventTime=Date.now()}}function Ud(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function lg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function lw(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lg(e);default:return!1}}/**
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
 */async function cw(e,t={}){return $n(e,"GET","/v1/projects",t)}/**
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
 */const uw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dw=/^https?/;async function fw(e){if(e.config.emulator)return;const{authorizedDomains:t}=await cw(e);for(const r of t)try{if(pw(r))return}catch{}Rt(e,"unauthorized-domain")}function pw(e){const t=Ol(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&n===""?r==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&a.hostname===n}if(!dw.test(r))return!1;if(uw.test(e))return n===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const hw=new to(3e4,6e4);function Bd(){const e=jt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}function gw(e){return new Promise((t,r)=>{var n,i,o;function a(){Bd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bd(),r(yt(e,"network-request-failed"))},timeout:hw.get()})}if(!((i=(n=jt().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=jt().gapi)===null||o===void 0)&&o.load)a();else{const c=bx("iframefcb");return jt()[c]=()=>{gapi.load?a():r(yt(e,"network-request-failed"))},xx(`${wx()}?onload=${c}`).catch(l=>r(l))}}).catch(t=>{throw $o=null,t})}let $o=null;function mw(e){return $o=$o||gw(e),$o}/**
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
 */const vw=new to(5e3,15e3),yw="__/auth/iframe",xw="emulator/auth/iframe",ww={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kw(e){const t=e.config;z(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?Bc(t,xw):`https://${e.config.authDomain}/${yw}`,n={apiKey:t.apiKey,appName:e.name,v:eo},i=bw.get(e.config.apiHost);i&&(n.eid=i);const o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${Zi(n).slice(1)}`}async function Sw(e){const t=await mw(e),r=jt().gapi;return z(r,e,"internal-error"),t.open({where:document.body,url:kw(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ww,dontclear:!0},n=>new Promise(async(i,o)=>{await n.restyle({setHideOnLeave:!1});const a=yt(e,"network-request-failed"),c=jt().setTimeout(()=>{o(a)},vw.get());function l(){jt().clearTimeout(c),i(n)}n.ping(l).then(l,()=>{o(a)})}))}/**
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
 */const _w={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ew=500,Cw=600,Iw="_blank",jw="http://localhost";class Wd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tw(e,t,r,n=Ew,i=Cw){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},_w),{width:n.toString(),height:i.toString(),top:o,left:a}),u=Fe().toLowerCase();r&&(c=Wh(u)?Iw:r),Uh(u)&&(t=t||jw,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[x,v])=>`${p}${x}=${v},`,"");if(dx(u)&&c!=="_self")return Rw(t||"",c),new Wd(null);const f=window.open(t||"",c,d);z(f,e,"popup-blocked");try{f.focus()}catch{}return new Wd(f)}function Rw(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const Nw="__/auth/handler",Pw="emulator/auth/handler",Aw=encodeURIComponent("fac");async function $d(e,t,r,n,i,o){z(e.config.authDomain,e,"auth-domain-config-required"),z(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:eo,eventId:i};if(t instanceof Gc){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Ny(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries({}))a[d]=f}if(t instanceof Vn){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(a.scopes=d.join(","))}e.tenantId&&(a.tid=e.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await e._getAppCheckToken(),u=l?`#${Aw}=${encodeURIComponent(l)}`:"";return`${Ow(e)}?${Zi(c).slice(1)}${u}`}function Ow({config:e}){return e.emulator?Bc(e,Pw):`https://${e.authDomain}/${Nw}`}/**
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
 */const Pa="webStorageSupport";class Lw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tg,this._completeRedirectFn=ow,this._overrideRedirectResult=rw}async _openPopup(t,r,n,i){var o;Qt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await $d(t,r,n,Ol(),i);return Tw(t,a,Yc())}async _openRedirect(t,r,n,i){await this._originValidation(t);const o=await $d(t,r,n,Ol(),i);return Dx(o),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:i,promise:o}=this.eventManagers[r];return i?Promise.resolve(i):(Qt(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(t);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(t){const r=await Sw(t),n=new aw(t);return r.register("authEvent",i=>(z(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=r,n}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(Pa,{type:Pa},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Pa];a!==void 0&&r(!!a),Rt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=fw(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return Yh()||Bh()||Vc()}}const Mw=Lw;var Vd="@firebase/auth",Hd="1.10.8";/**
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
 */class zw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(n=>{t((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);r&&(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Dw(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fw(e){$i(new zn("auth",(t,{options:r})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=n.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:a,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qh(e)},u=new vx(n,i,o,l);return Sx(u,r),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,n)=>{t.getProvider("auth-internal").initialize()})),$i(new zn("auth-internal",t=>{const r=Ws(t.getProvider("auth").getImmediate());return(n=>new zw(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Vd,Hd,Dw(e)),En(Vd,Hd,"esm2017")}/**
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
 */const Uw=5*60,Bw=Eh("authIdTokenMaxAge")||Uw;let Gd=null;const Ww=e=>async t=>{const r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>Bw)return;const i=r==null?void 0:r.token;Gd!==i&&(Gd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $w(e=A1()){const t=Th(e,"auth");if(t.isInitialized())return t.getImmediate();const r=kx(e,{popupRedirectResolver:Mw,persistence:[Yx,Lx,tg]}),n=Eh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const a=Ww(o.toString());Px(r,a,()=>a(r.currentUser)),Nx(r,c=>a(c))}}const i=gy("auth");return i&&_x(r,`http://${i}`),r}function Vw(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}yx({loadJS(e){return new Promise((t,r)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=i=>{const o=yt("internal-error");o.customData=i,r(o)},n.type="text/javascript",n.charset="UTF-8",Vw().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fw("Browser");const cg={apiKey:"AIzaSyCNsYDBSfYMJUxqbkC3Cb_w6CYGtW4Xf20",authDomain:"cloudvault-58446.firebaseapp.com",projectId:"cloudvault-58446",storageBucket:"cloudvault-58446.firebasestorage.app",messagingSenderId:"378535306521",appId:"1:378535306521:web:2e5fe57db925753d0f5188"},Hw=["google","github","microsoft"];let Aa=null,Yd=null;function Gw(){return ks()?(Aa||(Aa=Rh(cg),Yd=$w(Aa)),Yd):null}function ks(){return!0}function Yw(){const e=Object.entries(cg).filter(([,t])=>!t).map(([t])=>t);return{configured:ks(),providers:Hw.map(t=>({id:t,configured:ks()})),missingEnv:e}}async function Qw(e){const t=Gw();if(!t)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env variables.");const n={google:new Lt,github:new Mt,microsoft:new Ei("microsoft.com")}[e];if(!n)throw new Error("Unknown provider");const i=await Xx(t,n),o=await i.user.getIdToken(),a=await fetch(`${Tt}/auth/firebase`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:o,email:i.user.email,fullName:i.user.displayName,avatarUrl:i.user.photoURL,provider:e})}),c=await a.json();if(!a.ok)throw new Error(c.error||c.message||"Firebase login failed");return c.success?c.data:c}function Kw({onVerified:e,onError:t,onExpire:r,theme:n="auto",size:i="normal"}){const o=y.useRef(null),a=y.useRef(null),[c,l]=y.useState(!1),[u,d]=y.useState(!0),[f,p]=y.useState(null);y.useEffect(()=>{if(window.turnstile)l(!0),d(!1);else{const v=document.querySelector('script[data-cv-turnstile="true"]'),k=v||document.createElement("script");k.src="https://challenges.cloudflare.com/turnstile/v0/api.js",k.async=!0,k.defer=!0,k.dataset.cvTurnstile="true",k.onload=()=>{l(!0),d(!1),console.log("TURNSTILE: Script loaded")},k.onerror=()=>{p("Failed to load Turnstile"),d(!1),t==null||t("Failed to load Turnstile")},v||document.head.appendChild(k)}return()=>{if(a.current&&window.turnstile)try{window.turnstile.remove(a.current),a.current=null}catch(v){console.error("TURNSTILE: Error removing widget:",v)}}},[]),y.useEffect(()=>{if(c&&o.current&&window.turnstile&&!a.current){const v="0x4AAAAAADkh2aePP5UGcXcH",k=["localhost","127.0.0.1","::1"].includes(window.location.hostname);if((v==null?void 0:v.startsWith("1x"))&&!k){const g="Turnstile production site key is not configured";p(g),t==null||t(g),d(!1);return}console.log("TURNSTILE: Rendering widget with site key:",v);try{a.current=window.turnstile.render(o.current,{sitekey:v,theme:n,size:i,callback:g=>{console.log("TURNSTILE: Verification successful"),p(null),e==null||e(g)},"error-callback":g=>{console.error("TURNSTILE: Verification error:",g);const h="Verification failed. For local testing, use the Turnstile test site key; for production, make sure this hostname is allowed in Cloudflare.";p(h),t==null||t(h)},"expired-callback":()=>{console.log("TURNSTILE: Token expired"),p("Verification expired. Please try again."),r==null||r()}})}catch(g){console.error("TURNSTILE: Error rendering widget:",g),p("Failed to render Turnstile widget"),t==null||t("Failed to render Turnstile widget")}}},[c,n,i,e,t,r]);const x=()=>{if(a.current&&window.turnstile)try{window.turnstile.reset(a.current),p(null)}catch(v){console.error("TURNSTILE: Error resetting widget:",v)}};return y.useEffect(()=>{o.current&&(o.current.reset=x)},[]),u?s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",background:"var(--bg-secondary)",borderRadius:"var(--radius)",border:"1px solid var(--border)"},children:s.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid var(--border)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})}):f?s.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"var(--radius)",border:"1px solid var(--danger)",color:"var(--danger)",fontSize:"13px",textAlign:"center"},children:[f,s.jsx("button",{type:"button",onClick:x,style:{marginTop:"8px",padding:"6px 12px",background:"var(--danger)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px"},children:"Retry"})]}):s.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",minHeight:i==="compact"?140:70,overflow:"hidden"},children:s.jsx("div",{ref:o})})}const Ar=(e="")=>{const t=e.toLowerCase();return t.includes("failed to fetch")||t.includes("cannot reach")||t.includes("networkerror")?"Unable to reach CloudVault. Please check your connection.":t.includes("firebase")||t.includes("oauth")||t.includes("access token")?"Social login failed. Please try again.":e||"Something went wrong. Please try again."},Oa=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),Qd=e=>e.length>=8&&/[A-Z]/.test(e)&&/[a-z]/.test(e)&&/\d/.test(e);function qw({size:e=20}){return s.jsx("span",{style:{display:"inline-block",width:e,height:e,border:"2.5px solid rgba(255,255,255,0.25)",borderTopColor:"#fff",borderRadius:"50%",animation:"cv-spin 0.7s linear infinite"}})}function Jw({size:e=42}){return s.jsx("span",{style:{width:e,height:e,borderRadius:"50%",background:"var(--mega-red, #d90007)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(217,0,7,.35)",flexShrink:0,overflow:"hidden"},children:s.jsx("img",{src:ke.logoImage,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function Co({label:e,type:t="text",value:r,onChange:n,placeholder:i,autoFocus:o,error:a}){const[c,l]=y.useState(!1),u=r&&r.length>0;return s.jsxs("div",{style:{position:"relative",marginBottom:4},children:[s.jsx("label",{style:{position:"absolute",left:16,top:c||u?8:"50%",transform:c||u?"translateY(0) scale(0.82)":"translateY(-50%)",transformOrigin:"left top",fontSize:c||u?11:14,fontWeight:600,color:c?"var(--cv-accent)":a?"var(--cv-danger)":"var(--cv-text-muted)",transition:"all 0.18s cubic-bezier(0.4,0,0.2,1)",pointerEvents:"none",zIndex:1,letterSpacing:c||u?"0.04em":"0",textTransform:c||u?"uppercase":"none"},children:e}),s.jsx("input",{type:t,value:r,onChange:n,onFocus:()=>l(!0),onBlur:()=>l(!1),autoFocus:o,placeholder:c?i:"",style:{width:"100%",padding:"28px 16px 10px",background:"var(--cv-bg-card)",border:`1.5px solid ${a?"var(--cv-danger)":c?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:"var(--cv-radius-lg)",color:"var(--cv-text)",fontSize:15,outline:"none",transition:"border-color 0.18s ease, box-shadow 0.18s ease",boxShadow:c?`0 0 0 3px ${a?"rgba(239,68,68,0.12)":"rgba(99,102,241,0.12)"}`:"none"}}),a&&s.jsx("div",{style:{fontSize:12,color:"var(--cv-danger)",marginTop:4,paddingLeft:4,fontWeight:500},children:a})]})}function Xw({value:e,onChange:t}){const r=[y.useRef(),y.useRef(),y.useRef(),y.useRef(),y.useRef(),y.useRef()],n=(e+"      ").slice(0,6).split(""),i=(a,c)=>{var l,u;if(c.key==="Backspace"){if(n[a]!==" "){const d=n.map((f,p)=>p===a?" ":f).join("").trimEnd();t(d)}else if(a>0){(l=r[a-1].current)==null||l.focus();const d=n.map((f,p)=>p===a-1?" ":f).join("").trimEnd();t(d)}}else if(c.key>="0"&&c.key<="9"){c.preventDefault();const d=n.map((f,p)=>p===a?c.key:f).join("").replace(/ /g,"");t(d.slice(0,6)),a<5&&((u=r[a+1].current)==null||u.focus())}},o=a=>{var l;const c=a.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);c&&(t(c),(l=r[Math.min(c.length,5)].current)==null||l.focus())};return s.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",margin:"8px 0"},children:r.map((a,c)=>{var l,u,d,f;return s.jsx("input",{ref:a,type:"text",inputMode:"numeric",maxLength:1,value:((l=n[c])==null?void 0:l.trim())||"",onKeyDown:p=>i(c,p),onPaste:o,onChange:()=>{},style:{width:52,height:60,textAlign:"center",fontSize:24,fontWeight:800,background:"var(--cv-bg-card)",border:`2px solid ${(u=n[c])!=null&&u.trim()?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:14,color:"var(--cv-text)",outline:"none",transition:"border-color 0.18s ease, transform 0.1s ease",transform:(d=n[c])!=null&&d.trim()?"scale(1.05)":"scale(1)",boxShadow:(f=n[c])!=null&&f.trim()?"0 0 0 3px rgba(99,102,241,0.15)":"none"}},c)})})}function Zw({label:e,icon:t,onClick:r,disabled:n}){const[i,o]=y.useState(!1);return s.jsxs("button",{type:"button",onClick:r,disabled:n,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,width:"100%",padding:"12px 16px",minHeight:48,background:i?"rgba(0,183,79,.08)":"var(--bg-card)",border:i?"1px solid rgba(0,183,79,.35)":"1px solid var(--border)",borderRadius:14,cursor:n?"not-allowed":"pointer",color:"var(--text)",fontSize:14,fontWeight:700,transition:"all 0.2s ease",opacity:n?.5:1,boxShadow:i?"0 12px 28px rgba(0,0,0,.08)":"none"},children:[s.jsx("span",{style:{display:"flex",alignItems:"center"},children:t}),s.jsxs("span",{children:["Continue with ",e]})]})}function eb({password:e}){if(!e)return null;const t=[{label:"8+ chars",ok:e.length>=8},{label:"Uppercase",ok:/[A-Z]/.test(e)},{label:"Lowercase",ok:/[a-z]/.test(e)},{label:"Number",ok:/\d/.test(e)}],r=t.filter(i=>i.ok).length,n=["var(--cv-danger)","var(--cv-danger)","#f59e0b","#10b981"];return s.jsxs("div",{style:{marginTop:6},children:[s.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:[0,1,2,3].map(i=>s.jsx("div",{style:{flex:1,height:3,borderRadius:99,background:i<r?n[r-1]:"var(--cv-border)",transition:"background 0.3s ease"}},i))}),s.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:t.map(i=>s.jsxs("span",{style:{fontSize:11,color:i.ok?"#10b981":"var(--cv-text-muted)",fontWeight:500},children:[i.ok?"✓":"○"," ",i.label]},i.label))})]})}const O={LOGIN:"login",REGISTER:"register",FORGOT:"forgot",VERIFY_OTP:"verify_otp",RESET_PASSWORD:"reset_password"};function tb({onAuth:e,onBack:t,onNeedsVerification:r,initialMode:n="login"}){const[i,o]=y.useState(n==="login"?O.LOGIN:O.REGISTER),[a,c]=y.useState(!1),[l,u]=y.useState(""),[d,f]=y.useState(""),[p,x]=y.useState("forward"),[v,k]=y.useState(""),[S,g]=y.useState(""),[h,m]=y.useState(""),[b,_]=y.useState(""),[C,I]=y.useState(""),[N,D]=y.useState(""),[P,H]=y.useState(!0),[te,pe]=y.useState(!1),[we,Ee]=y.useState(!1),[Ce,be]=y.useState(0),[T,L]=y.useState(null),[M,K]=y.useState(!1),[re,We]=y.useState(0),Ie="0x4AAAAAADkh2aePP5UGcXcH",Jt=typeof window<"u"&&["localhost","127.0.0.1","::1"].includes(window.location.hostname),me=!!(!(Ie==null?void 0:Ie.startsWith("1x"))||Jt),Hn=ks();Yw();const[bt,ue]=y.useState({});y.useEffect(()=>{if(Ce<=0)return;const j=setTimeout(()=>be(se=>se-1),1e3);return()=>clearTimeout(j)},[Ce]);const Nt=j=>{x("forward"),u(""),f(""),ue({}),o(j)},Xt=()=>{x("back"),u(""),f(""),ue({}),i===O.REGISTER||i===O.FORGOT?o(O.LOGIN):i===O.VERIFY_OTP?o(O.FORGOT):i===O.RESET_PASSWORD?o(O.VERIFY_OTP):t==null||t()},Gn=()=>{L(null),K(!1),We(j=>j+1)},Zt=async()=>{var se,Tr;const j={};if(Oa(v)||(j.email="Enter a valid email address"),S||(j.password="Password is required"),Object.keys(j).length){ue(j);return}if(me&&!M){u("Please complete the security check");return}c(!0),u("");try{const Y=await pt("/auth/login",{method:"POST",body:JSON.stringify({email:v,password:S,rememberMe:P,...me&&{turnstileToken:T}})});if(!(Y!=null&&Y.accessToken))throw new Error("Login failed. Please try again.");const Kn=P?localStorage:sessionStorage;Kn.setItem("cv_token",Y.accessToken),Y.refreshToken&&Kn.setItem("cv_refreshToken",Y.refreshToken),Kn.setItem("cv_user",((se=Y.user)==null?void 0:se.fullName)||v),e(Y.accessToken,Y.refreshToken,((Tr=Y.user)==null?void 0:Tr.fullName)||v,Y.user,P)}catch(Y){u(Ar(Y.message)),Gn()}c(!1)},no=async()=>{const j={};if((!b||b.trim().length<2)&&(j.fullName="Full name must be at least 2 characters"),Oa(v)||(j.email="Enter a valid email address"),Qd(S)||(j.password="Password must be 8+ chars with uppercase, lowercase, and number"),S!==h&&(j.confirmPassword="Passwords do not match"),Object.keys(j).length){ue(j);return}if(me&&!M){u("Please complete the security check");return}c(!0),u("");try{await pt("/auth/register",{method:"POST",body:JSON.stringify({email:v,password:S,fullName:b,...me&&{turnstileToken:T}})}),f("Account created! Check your email to verify your account, then sign in."),Nt(O.LOGIN)}catch(se){u(Ar(se.message)),Gn()}c(!1)},Ir=async()=>{if(!Oa(v)){ue({email:"Enter a valid email address"});return}if(me&&!M){u("Please complete the security check");return}c(!0),u("");try{await pt("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:v,...me&&{turnstileToken:T}})}),be(60),Nt(O.VERIFY_OTP),f("A 6-digit OTP has been sent to your email.")}catch(j){u(Ar(j.message)),Gn()}c(!1)},lt=async()=>{if(!(Ce>0)){c(!0),u("");try{await pt("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:v})}),be(60),f("A new OTP has been sent.")}catch(j){u(Ar(j.message))}c(!1)}},Yn=async()=>{if(C.length!==6){u("Enter the 6-digit code from your email");return}c(!0),u("");try{const j=await pt("/auth/verify-otp",{method:"POST",body:JSON.stringify({email:v,otp:C})});D(j.resetToken),Nt(O.RESET_PASSWORD)}catch(j){u(Ar(j.message)),I("")}c(!1)},en=async()=>{const j={};if(Qd(S)||(j.password="Password must be 8+ chars with uppercase, lowercase, and number"),S!==h&&(j.confirmPassword="Passwords do not match"),Object.keys(j).length){ue(j);return}c(!0),u("");try{await pt("/auth/reset-password",{method:"POST",body:JSON.stringify({token:N,newPassword:S})}),f("Password reset successfully! Please sign in."),g(""),m(""),Nt(O.LOGIN)}catch(se){u(Ar(se.message))}c(!1)},tn=async j=>{var se,Tr;if(!Hn){u("Social login is not available. Please use email and password.");return}c(!0),u("");try{const Y=await Qw(j);if(!(Y!=null&&Y.accessToken))throw new Error("Social login failed.");localStorage.setItem("cv_token",Y.accessToken),Y.refreshToken&&localStorage.setItem("cv_refreshToken",Y.refreshToken),localStorage.setItem("cv_user",((se=Y.user)==null?void 0:se.fullName)||v),e(Y.accessToken,Y.refreshToken,((Tr=Y.user)==null?void 0:Tr.fullName)||v,Y.user,!0)}catch(Y){u(Ar(Y.message))}c(!1)},jr={[O.LOGIN]:{title:"Welcome back",sub:`Sign in to ${ke.name}`},[O.REGISTER]:{title:"Create account",sub:"Start your CloudVault journey"},[O.FORGOT]:{title:"Forgot password?",sub:"We'll send a code to your email"},[O.VERIFY_OTP]:{title:"Enter your code",sub:`Sent to ${v||"your email"}`},[O.RESET_PASSWORD]:{title:"New password",sub:"Choose a strong password"}},$=!a&&(!me||M||i===O.VERIFY_OTP||i===O.RESET_PASSWORD),et=()=>{i===O.LOGIN?Zt():i===O.REGISTER?no():i===O.FORGOT?Ir():i===O.VERIFY_OTP?Yn():i===O.RESET_PASSWORD&&en()},Qn={[O.LOGIN]:"Sign in",[O.REGISTER]:"Create account",[O.FORGOT]:"Send code",[O.VERIFY_OTP]:"Verify code",[O.RESET_PASSWORD]:"Reset password"}[i];return s.jsxs("div",{className:"auth-splash",children:[s.jsx("style",{children:$r}),s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"auth-cloud-logo",style:{marginBottom:48},children:[s.jsx("div",{className:"auth-cloud-bg"}),s.jsx("div",{className:"auth-mega-mark",children:s.jsx("div",{className:"auth-mega-circle",children:s.jsx("img",{src:ke.logoImage,alt:""})})})]}),s.jsxs("div",{className:"cv-auth-card",style:{width:"100%",maxWidth:440,background:"rgba(20, 20, 20, .96)",borderRadius:20,border:"1px solid rgba(255,255,255,.08)",boxShadow:"0 32px 80px rgba(0,0,0,0.55)",overflow:"hidden",position:"relative"},children:[s.jsx("div",{style:{height:3,background:"var(--cv-accent)",position:"absolute",top:0,left:0,right:0}}),s.jsxs("div",{style:{padding:"36px 32px 32px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:28,justifyContent:"center"},children:[s.jsx(Jw,{size:36}),s.jsx("div",{style:{fontSize:18,fontWeight:800,color:"var(--cv-text)",letterSpacing:"-0.02em"},children:ke.name})]}),i!==O.LOGIN&&s.jsx("button",{type:"button",onClick:Xt,style:{display:"flex",alignItems:"center",gap:6,marginBottom:24,background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,padding:"4px 0",transition:"color 0.15s"},onMouseEnter:j=>j.currentTarget.style.color="var(--text)",onMouseLeave:j=>j.currentTarget.style.color="var(--text-muted)",children:"← Back"}),s.jsxs("div",{className:"cv-auth-step",style:{marginBottom:28},children:[s.jsx("h1",{style:{fontSize:26,fontWeight:800,color:"var(--text)",letterSpacing:"-0.03em",margin:"0 0 4px"},children:jr[i].title}),s.jsx("p",{style:{fontSize:14,color:"var(--text-muted)",margin:0,fontWeight:500},children:jr[i].sub})]}),(i===O.LOGIN||i===O.REGISTER)&&s.jsx("div",{style:{display:"flex",gap:4,background:"var(--surface-raised)",borderRadius:14,padding:4,marginBottom:24,border:"1px solid var(--border)"},children:[O.LOGIN,O.REGISTER].map(j=>s.jsx("button",{type:"button",onClick:()=>Nt(j),style:{flex:1,padding:"9px 12px",borderRadius:10,border:"none",background:i===j?"var(--bg-card)":"transparent",color:i===j?"var(--text)":"var(--text-muted)",fontSize:14,fontWeight:i===j?700:500,cursor:"pointer",boxShadow:i===j?"0 2px 8px rgba(0,0,0,0.08)":"none",transition:"all 0.18s ease"},children:j===O.LOGIN?"Sign In":"Sign Up"},j))}),s.jsxs("div",{className:"cv-auth-step",style:{display:"flex",flexDirection:"column",gap:14},children:[i===O.REGISTER&&s.jsx(Co,{label:"Full Name",value:b,onChange:j=>{_(j.target.value),ue(se=>({...se,fullName:""}))},placeholder:"Jane Smith",autoFocus:!0,error:bt.fullName}),[O.LOGIN,O.REGISTER,O.FORGOT].includes(i)&&s.jsx(Co,{label:"Email Address",type:"email",value:v,onChange:j=>{k(j.target.value),ue(se=>({...se,email:""}))},placeholder:"you@example.com",autoFocus:i===O.LOGIN||i===O.FORGOT,error:bt.email}),[O.LOGIN,O.REGISTER,O.RESET_PASSWORD].includes(i)&&s.jsxs("div",{children:[s.jsxs("div",{style:{position:"relative"},children:[s.jsx(Co,{label:"Password",type:te?"text":"password",value:S,onChange:j=>{g(j.target.value),ue(se=>({...se,password:""}))},placeholder:i===O.LOGIN?"Your password":"Min 8 chars, A-Z, 0-9",autoFocus:i===O.RESET_PASSWORD,error:bt.password}),s.jsx("button",{type:"button",onClick:()=>pe(j=>!j),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:bt.password?-10:0},children:te?"Hide":"Show"})]}),(i===O.REGISTER||i===O.RESET_PASSWORD)&&s.jsx(eb,{password:S})]}),[O.REGISTER,O.RESET_PASSWORD].includes(i)&&s.jsxs("div",{style:{position:"relative"},children:[s.jsx(Co,{label:"Confirm Password",type:we?"text":"password",value:h,onChange:j=>{m(j.target.value),ue(se=>({...se,confirmPassword:""}))},placeholder:"Repeat your password",error:bt.confirmPassword}),s.jsx("button",{type:"button",onClick:()=>Ee(j=>!j),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:bt.confirmPassword?-10:0},children:we?"Hide":"Show"})]}),i===O.VERIFY_OTP&&s.jsxs("div",{children:[s.jsx(Xw,{value:C,onChange:I}),s.jsxs("div",{style:{textAlign:"center",marginTop:12},children:[s.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:["Didn't get the code?"," "]}),s.jsx("button",{type:"button",onClick:lt,disabled:Ce>0||a,style:{background:"none",border:"none",cursor:Ce>0?"default":"pointer",color:Ce>0?"var(--text-muted)":"var(--accent-blue)",fontSize:13,fontWeight:600},children:Ce>0?`Resend in ${Ce}s`:"Resend"})]})]}),i===O.LOGIN&&s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},children:[s.jsx("input",{type:"checkbox",checked:P,onChange:j=>H(j.target.checked),style:{width:16,height:16,accentColor:"var(--accent-blue)"}}),s.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:500},children:"Remember me"})]}),s.jsx("button",{type:"button",onClick:()=>Nt(O.FORGOT),style:{background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:13,fontWeight:600},children:"Forgot password?"})]})]}),l&&s.jsxs("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:12,color:"#ef4444",fontSize:13,fontWeight:500,lineHeight:1.5},children:[l,l.includes("verify your email")&&s.jsx("button",{type:"button",onClick:async()=>{try{await pt("/auth/resend-verification",{method:"POST",body:JSON.stringify({email:v})}),f("Verification email resent. Check your inbox."),u("")}catch{}},style:{display:"block",marginTop:8,background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:12,fontWeight:600},children:"Resend verification email →"})]}),d&&s.jsx("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:12,color:"#10b981",fontSize:13,fontWeight:500,lineHeight:1.5},children:d}),me&&[O.LOGIN,O.REGISTER,O.FORGOT].includes(i)&&s.jsx("div",{style:{marginTop:16},children:s.jsx(Kw,{onVerified:j=>{L(j),K(!0)},onError:j=>{u(j||"Security check failed. Please refresh."),K(!1)},onExpire:()=>{L(null),K(!1)}},re)}),s.jsx("button",{type:"button",onClick:et,disabled:!$,style:{width:"100%",marginTop:20,padding:"14px 20px",background:$?"var(--cv-accent)":"var(--surface-raised)",color:$?"#fff":"var(--text-muted)",border:"none",borderRadius:14,fontSize:15,fontWeight:700,cursor:$?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"all 0.2s ease",boxShadow:$?"0 16px 34px rgba(217,0,7,0.28)":"none",transform:"translateY(0)"},onMouseEnter:j=>{$&&(j.currentTarget.style.transform="translateY(-1px)")},onMouseLeave:j=>{j.currentTarget.style.transform="translateY(0)"},children:a?s.jsx(qw,{}):Qn}),[O.LOGIN,O.REGISTER].includes(i)&&s.jsxs("div",{style:{marginTop:20},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:"or"}),s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[{id:"google",label:"Google",icon:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),s.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),s.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),s.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})},{id:"github",label:"GitHub",icon:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})})},{id:"microsoft",label:"Microsoft",icon:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M10 0H0v10h10V0z",fill:"#F25022"}),s.jsx("path",{d:"M21 0H11v10h10V0z",fill:"#7FBA00"}),s.jsx("path",{d:"M10 11H0v10h10V11z",fill:"#00A4EF"}),s.jsx("path",{d:"M21 11H11v10h10V11z",fill:"#FFB900"})]})}].map(j=>s.jsx(Zw,{label:j.label,icon:j.icon,disabled:a||!Hn,onClick:()=>tn(j.id)},j.id))})]}),i===O.LOGIN&&s.jsx("div",{style:{textAlign:"center",marginTop:20},children:s.jsx("button",{type:"button",onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:500},children:"← Back to home"})})]})]})]})}function rb({size:e=22}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function nb({file:e,token:t,onClose:r}){const[n,i]=y.useState(null),[o,a]=y.useState(""),[c,l]=y.useState(!0),[u,d]=y.useState(""),[f,p]=y.useState(1),[x,v]=y.useState(0),[k,S]=y.useState(!1),g=Z0(e.mimeType);y.useEffect(()=>{let b=null,_=!1;return(async()=>{l(!0),d("");try{const C=await Lc(e.id,t,{disposition:"preview"});if(_)return;if(g==="text"){const I=await C.text();a(I)}else b=URL.createObjectURL(C),i(b)}catch(C){_||d(C.message||"Preview failed")}finally{_||l(!1)}})(),()=>{_=!0,b&&URL.revokeObjectURL(b)}},[e.id,t,g]);const h=(b,_,C=!1)=>s.jsx("button",{type:"button",onClick:_,disabled:C,style:{padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",cursor:C?"not-allowed":"pointer",fontFamily:"var(--font)",fontSize:12,fontWeight:600},children:b}),m=()=>c?s.jsx("div",{style:{padding:48,textAlign:"center"},children:s.jsx(rb,{size:32})}):u?s.jsx("p",{style:{color:"var(--danger)",padding:24,textAlign:"center"},children:u}):g==="image"&&n?s.jsx("img",{src:n,alt:e.name,style:{maxWidth:k?"96vw":"80vw",maxHeight:k?"90vh":"70vh",borderRadius:12,transform:`scale(${f}) rotate(${x}deg)`,transition:"transform .2s ease"}}):g==="pdf"&&n?s.jsx("iframe",{src:n,title:e.name,style:{width:"75vw",height:"75vh",border:"none",borderRadius:12}}):g==="video"&&n?s.jsx("video",{src:n,controls:!0,style:{maxWidth:"80vw",maxHeight:"75vh",borderRadius:12}}):g==="audio"&&n?s.jsx("audio",{src:n,controls:!0,style:{width:"min(480px, 80vw)"}}):g==="text"?s.jsx("pre",{style:{maxWidth:"80vw",maxHeight:"70vh",overflow:"auto",padding:16,background:"var(--bg-card)",borderRadius:12,color:"var(--text)",fontSize:13,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:o}):s.jsx("p",{style:{padding:24,color:"var(--text-muted)"},children:"Preview not available for this file type."});return s.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:1e3,background:k?"#000":"rgba(0,0,0,.88)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)",animation:"fadeIn .2s ease"},children:s.jsxs("div",{onClick:b=>b.stopPropagation(),style:{background:k?"transparent":"var(--bg-primary)",borderRadius:k?0:20,border:k?"none":"1.5px solid var(--border)",maxWidth:k?"100vw":"95vw",maxHeight:k?"100vh":"95vh",width:k?"100%":void 0,height:k?"100%":void 0,overflow:"auto",padding:k?16:24,boxShadow:k?"none":"var(--shadow)",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:12},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:700,fontSize:16,flex:1,overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),g==="image"&&s.jsxs("div",{style:{display:"flex",gap:6},children:[h("−",()=>p(b=>Math.max(.25,b-.25))),h("+",()=>p(b=>Math.min(4,b+.25))),h("↻",()=>v(b=>(b+90)%360)),h(k?"⊡":"⛶",()=>S(b=>!b))]}),s.jsx("button",{type:"button",onClick:r,style:{background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:8,color:"var(--text-secondary)",cursor:"pointer",width:32,height:32},children:"✕"})]}),s.jsx("div",{style:{display:"flex",justifyContent:"center"},children:m()})]})})}function ib({fileId:e,token:t,alt:r,mimeType:n}){const[i,o]=y.useState(null),[a,c]=y.useState(!1);return y.useEffect(()=>{if(!e||!t||!(n!=null&&n.startsWith("image/")))return;let l=null,u=!1;return Lc(e,t,{disposition:"preview"}).then(d=>{u||(l=URL.createObjectURL(d),o(l))}).catch(()=>{u||c(!0)}),()=>{u=!0,l&&URL.revokeObjectURL(l)}},[e,t,n]),!(n!=null&&n.startsWith("image/"))||a?s.jsx("div",{style:{fontSize:44,display:"flex"},children:Us(n)}):i?s.jsx("img",{src:i,alt:r,style:{width:"100%",height:"100%",objectFit:"cover"},onError:()=>c(!0)}):s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite"}})}function ob({trashedFiles:e,trashedFolders:t,loading:r,onRestoreFile:n,onRestoreFolder:i,onPermanentDelete:o,onEmptyTrash:a,onBack:c}){return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:c,style:sb,children:"← Back to My Cloud"}),s.jsx("h2",{style:{color:"var(--text)",fontWeight:800,fontSize:22,marginTop:8},children:"Trash"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"Items in trash still count toward storage until permanently deleted."})]}),(e.length>0||t.length>0)&&s.jsx("button",{type:"button",onClick:a,style:ab,children:"Empty trash"})]}),r?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading trash…"}):e.length===0&&t.length===0?s.jsxs("div",{style:{textAlign:"center",padding:64,color:"var(--text-muted)",border:"1px dashed var(--border)",borderRadius:16},children:[s.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🗑️"}),s.jsx("div",{style:{fontWeight:700},children:"Trash is empty"})]}):s.jsxs(s.Fragment,{children:[t.length>0&&s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FOLDERS"}),t.map(l=>s.jsx(Kd,{icon:"📁",name:l.name,meta:"Folder",onRestore:()=>i(l.id)},l.id))]}),e.length>0&&s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FILES"}),e.map(l=>s.jsx(Kd,{icon:Us(l.mimeType),name:l.name,meta:`${ze(l.size)} · ${Ji(l.trashedAt||l.deletedAt)}`,onRestore:()=>n(l.id),onDelete:()=>o(l)},l.id))]})]})]})}function Kd({icon:e,name:t,meta:r,onRestore:n,onDelete:i}){return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,marginBottom:8},children:[s.jsx("span",{style:{fontSize:24},children:e}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:r})]}),s.jsx("button",{type:"button",onClick:n,style:qd,children:"Restore"}),i&&s.jsx("button",{type:"button",onClick:i,style:{...qd,color:"var(--danger)"},children:"Delete forever"})]})}const sb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"},ab={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontFamily:"var(--font)"},qd={padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--font)"};function lb({file:e,mode:t,folders:r,currentFolderId:n,onConfirm:i,onCancel:o}){const[a,c]=y.useState(n||""),[l,u]=y.useState(e.name),d=ug(r);return s.jsx("div",{onClick:o,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:f=>f.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(420px, 92vw)",animation:"scaleIn .2s ease"},children:[s.jsxs("h3",{style:{color:"var(--text)",fontWeight:700,fontSize:18,marginBottom:8},children:[t==="move"?"Move":"Copy"," file"]}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:20},children:e.name}),s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"Destination folder"}),s.jsxs("select",{value:a,onChange:f=>c(f.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"},children:[s.jsx("option",{value:"",children:"My Cloud (root)"}),d.map(f=>s.jsxs("option",{value:f.id,disabled:f.id===e.folderId,children:["—".repeat(f.depth)," ",f.name]},f.id))]}),t==="copy"&&s.jsxs(s.Fragment,{children:[s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"New name (optional)"}),s.jsx("input",{value:l,onChange:f=>u(f.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"}})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:o,style:dg,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>i({targetFolderId:a||null,newName:t==="copy"?l:void 0}),style:cb,children:t==="move"?"Move":"Copy"})]})]})})}function ug(e,t=0){var n;const r=[];for(const i of e)r.push({...i,depth:t}),(n=i.children)!=null&&n.length&&r.push(...ug(i.children,t+1));return r}const dg={padding:"10px 20px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},cb={...dg,border:"none",background:"var(--accent)",color:"#fff"};function ub({file:e,allTags:t,onSave:r,onCancel:n}){const[i,o]=y.useState(e.tags||[]),[a,c]=y.useState(""),l=u=>{const d=u.trim().toLowerCase();!d||i.includes(d)||i.length>=20||(o([...i,d]),c(""))};return s.jsx("div",{onClick:n,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:u=>u.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(440px, 92vw)"},children:[s.jsx("h3",{style:{color:"var(--text)",fontWeight:700,marginBottom:4},children:"Edit tags"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:16},children:e.name}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12},children:i.map(u=>s.jsxs("span",{style:{background:"rgba(240,22,58,.15)",color:"var(--accent)",padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[u,s.jsx("button",{type:"button",onClick:()=>o(i.filter(d=>d!==u)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:"×"})]},u))}),s.jsx("input",{value:a,onChange:u=>c(u.target.value),onKeyDown:u=>{u.key==="Enter"&&(u.preventDefault(),l(a))},placeholder:"Add tag and press Enter",style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",marginBottom:12}}),t.length>0&&s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6},children:"Suggestions"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:t.filter(u=>!i.includes(u)).slice(0,12).map(u=>s.jsxs("button",{type:"button",onClick:()=>l(u),style:{padding:"4px 10px",borderRadius:20,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",fontSize:12,cursor:"pointer"},children:["+ ",u]},u))})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:n,style:fg,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>r(i),style:db,children:"Save tags"})]})]})})}const fg={padding:"10px 18px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},db={...fg,border:"none",background:"var(--accent)",color:"#fff"};var fb=Object.defineProperty,Ss=Object.getOwnPropertySymbols,pg=Object.prototype.hasOwnProperty,hg=Object.prototype.propertyIsEnumerable,Jd=(e,t,r)=>t in e?fb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,zl=(e,t)=>{for(var r in t||(t={}))pg.call(t,r)&&Jd(e,r,t[r]);if(Ss)for(var r of Ss(t))hg.call(t,r)&&Jd(e,r,t[r]);return e},Dl=(e,t)=>{var r={};for(var n in e)pg.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Ss)for(var n of Ss(e))t.indexOf(n)<0&&hg.call(e,n)&&(r[n]=e[n]);return r};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var qr;(e=>{const t=class F{constructor(l,u,d,f){if(this.version=l,this.errorCorrectionLevel=u,this.modules=[],this.isFunction=[],l<F.MIN_VERSION||l>F.MAX_VERSION)throw new RangeError("Version value out of range");if(f<-1||f>7)throw new RangeError("Mask value out of range");this.size=l*4+17;let p=[];for(let v=0;v<this.size;v++)p.push(!1);for(let v=0;v<this.size;v++)this.modules.push(p.slice()),this.isFunction.push(p.slice());this.drawFunctionPatterns();const x=this.addEccAndInterleave(d);if(this.drawCodewords(x),f==-1){let v=1e9;for(let k=0;k<8;k++){this.applyMask(k),this.drawFormatBits(k);const S=this.getPenaltyScore();S<v&&(f=k,v=S),this.applyMask(k)}}i(0<=f&&f<=7),this.mask=f,this.applyMask(f),this.drawFormatBits(f),this.isFunction=[]}static encodeText(l,u){const d=e.QrSegment.makeSegments(l);return F.encodeSegments(d,u)}static encodeBinary(l,u){const d=e.QrSegment.makeBytes(l);return F.encodeSegments([d],u)}static encodeSegments(l,u,d=1,f=40,p=-1,x=!0){if(!(F.MIN_VERSION<=d&&d<=f&&f<=F.MAX_VERSION)||p<-1||p>7)throw new RangeError("Invalid value");let v,k;for(v=d;;v++){const m=F.getNumDataCodewords(v,u)*8,b=a.getTotalBits(l,v);if(b<=m){k=b;break}if(v>=f)throw new RangeError("Data too long")}for(const m of[F.Ecc.MEDIUM,F.Ecc.QUARTILE,F.Ecc.HIGH])x&&k<=F.getNumDataCodewords(v,m)*8&&(u=m);let S=[];for(const m of l){r(m.mode.modeBits,4,S),r(m.numChars,m.mode.numCharCountBits(v),S);for(const b of m.getData())S.push(b)}i(S.length==k);const g=F.getNumDataCodewords(v,u)*8;i(S.length<=g),r(0,Math.min(4,g-S.length),S),r(0,(8-S.length%8)%8,S),i(S.length%8==0);for(let m=236;S.length<g;m^=253)r(m,8,S);let h=[];for(;h.length*8<S.length;)h.push(0);return S.forEach((m,b)=>h[b>>>3]|=m<<7-(b&7)),new F(v,u,h,p)}getModule(l,u){return 0<=l&&l<this.size&&0<=u&&u<this.size&&this.modules[u][l]}getModules(){return this.modules}drawFunctionPatterns(){for(let d=0;d<this.size;d++)this.setFunctionModule(6,d,d%2==0),this.setFunctionModule(d,6,d%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const l=this.getAlignmentPatternPositions(),u=l.length;for(let d=0;d<u;d++)for(let f=0;f<u;f++)d==0&&f==0||d==0&&f==u-1||d==u-1&&f==0||this.drawAlignmentPattern(l[d],l[f]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(l){const u=this.errorCorrectionLevel.formatBits<<3|l;let d=u;for(let p=0;p<10;p++)d=d<<1^(d>>>9)*1335;const f=(u<<10|d)^21522;i(f>>>15==0);for(let p=0;p<=5;p++)this.setFunctionModule(8,p,n(f,p));this.setFunctionModule(8,7,n(f,6)),this.setFunctionModule(8,8,n(f,7)),this.setFunctionModule(7,8,n(f,8));for(let p=9;p<15;p++)this.setFunctionModule(14-p,8,n(f,p));for(let p=0;p<8;p++)this.setFunctionModule(this.size-1-p,8,n(f,p));for(let p=8;p<15;p++)this.setFunctionModule(8,this.size-15+p,n(f,p));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let l=this.version;for(let d=0;d<12;d++)l=l<<1^(l>>>11)*7973;const u=this.version<<12|l;i(u>>>18==0);for(let d=0;d<18;d++){const f=n(u,d),p=this.size-11+d%3,x=Math.floor(d/3);this.setFunctionModule(p,x,f),this.setFunctionModule(x,p,f)}}drawFinderPattern(l,u){for(let d=-4;d<=4;d++)for(let f=-4;f<=4;f++){const p=Math.max(Math.abs(f),Math.abs(d)),x=l+f,v=u+d;0<=x&&x<this.size&&0<=v&&v<this.size&&this.setFunctionModule(x,v,p!=2&&p!=4)}}drawAlignmentPattern(l,u){for(let d=-2;d<=2;d++)for(let f=-2;f<=2;f++)this.setFunctionModule(l+f,u+d,Math.max(Math.abs(f),Math.abs(d))!=1)}setFunctionModule(l,u,d){this.modules[u][l]=d,this.isFunction[u][l]=!0}addEccAndInterleave(l){const u=this.version,d=this.errorCorrectionLevel;if(l.length!=F.getNumDataCodewords(u,d))throw new RangeError("Invalid argument");const f=F.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][u],p=F.ECC_CODEWORDS_PER_BLOCK[d.ordinal][u],x=Math.floor(F.getNumRawDataModules(u)/8),v=f-x%f,k=Math.floor(x/f);let S=[];const g=F.reedSolomonComputeDivisor(p);for(let m=0,b=0;m<f;m++){let _=l.slice(b,b+k-p+(m<v?0:1));b+=_.length;const C=F.reedSolomonComputeRemainder(_,g);m<v&&_.push(0),S.push(_.concat(C))}let h=[];for(let m=0;m<S[0].length;m++)S.forEach((b,_)=>{(m!=k-p||_>=v)&&h.push(b[m])});return i(h.length==x),h}drawCodewords(l){if(l.length!=Math.floor(F.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let u=0;for(let d=this.size-1;d>=1;d-=2){d==6&&(d=5);for(let f=0;f<this.size;f++)for(let p=0;p<2;p++){const x=d-p,k=(d+1&2)==0?this.size-1-f:f;!this.isFunction[k][x]&&u<l.length*8&&(this.modules[k][x]=n(l[u>>>3],7-(u&7)),u++)}}i(u==l.length*8)}applyMask(l){if(l<0||l>7)throw new RangeError("Mask value out of range");for(let u=0;u<this.size;u++)for(let d=0;d<this.size;d++){let f;switch(l){case 0:f=(d+u)%2==0;break;case 1:f=u%2==0;break;case 2:f=d%3==0;break;case 3:f=(d+u)%3==0;break;case 4:f=(Math.floor(d/3)+Math.floor(u/2))%2==0;break;case 5:f=d*u%2+d*u%3==0;break;case 6:f=(d*u%2+d*u%3)%2==0;break;case 7:f=((d+u)%2+d*u%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[u][d]&&f&&(this.modules[u][d]=!this.modules[u][d])}}getPenaltyScore(){let l=0;for(let p=0;p<this.size;p++){let x=!1,v=0,k=[0,0,0,0,0,0,0];for(let S=0;S<this.size;S++)this.modules[p][S]==x?(v++,v==5?l+=F.PENALTY_N1:v>5&&l++):(this.finderPenaltyAddHistory(v,k),x||(l+=this.finderPenaltyCountPatterns(k)*F.PENALTY_N3),x=this.modules[p][S],v=1);l+=this.finderPenaltyTerminateAndCount(x,v,k)*F.PENALTY_N3}for(let p=0;p<this.size;p++){let x=!1,v=0,k=[0,0,0,0,0,0,0];for(let S=0;S<this.size;S++)this.modules[S][p]==x?(v++,v==5?l+=F.PENALTY_N1:v>5&&l++):(this.finderPenaltyAddHistory(v,k),x||(l+=this.finderPenaltyCountPatterns(k)*F.PENALTY_N3),x=this.modules[S][p],v=1);l+=this.finderPenaltyTerminateAndCount(x,v,k)*F.PENALTY_N3}for(let p=0;p<this.size-1;p++)for(let x=0;x<this.size-1;x++){const v=this.modules[p][x];v==this.modules[p][x+1]&&v==this.modules[p+1][x]&&v==this.modules[p+1][x+1]&&(l+=F.PENALTY_N2)}let u=0;for(const p of this.modules)u=p.reduce((x,v)=>x+(v?1:0),u);const d=this.size*this.size,f=Math.ceil(Math.abs(u*20-d*10)/d)-1;return i(0<=f&&f<=9),l+=f*F.PENALTY_N4,i(0<=l&&l<=2568888),l}getAlignmentPatternPositions(){if(this.version==1)return[];{const l=Math.floor(this.version/7)+2,u=this.version==32?26:Math.ceil((this.version*4+4)/(l*2-2))*2;let d=[6];for(let f=this.size-7;d.length<l;f-=u)d.splice(1,0,f);return d}}static getNumRawDataModules(l){if(l<F.MIN_VERSION||l>F.MAX_VERSION)throw new RangeError("Version number out of range");let u=(16*l+128)*l+64;if(l>=2){const d=Math.floor(l/7)+2;u-=(25*d-10)*d-55,l>=7&&(u-=36)}return i(208<=u&&u<=29648),u}static getNumDataCodewords(l,u){return Math.floor(F.getNumRawDataModules(l)/8)-F.ECC_CODEWORDS_PER_BLOCK[u.ordinal][l]*F.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][l]}static reedSolomonComputeDivisor(l){if(l<1||l>255)throw new RangeError("Degree out of range");let u=[];for(let f=0;f<l-1;f++)u.push(0);u.push(1);let d=1;for(let f=0;f<l;f++){for(let p=0;p<u.length;p++)u[p]=F.reedSolomonMultiply(u[p],d),p+1<u.length&&(u[p]^=u[p+1]);d=F.reedSolomonMultiply(d,2)}return u}static reedSolomonComputeRemainder(l,u){let d=u.map(f=>0);for(const f of l){const p=f^d.shift();d.push(0),u.forEach((x,v)=>d[v]^=F.reedSolomonMultiply(x,p))}return d}static reedSolomonMultiply(l,u){if(l>>>8||u>>>8)throw new RangeError("Byte out of range");let d=0;for(let f=7;f>=0;f--)d=d<<1^(d>>>7)*285,d^=(u>>>f&1)*l;return i(d>>>8==0),d}finderPenaltyCountPatterns(l){const u=l[1];i(u<=this.size*3);const d=u>0&&l[2]==u&&l[3]==u*3&&l[4]==u&&l[5]==u;return(d&&l[0]>=u*4&&l[6]>=u?1:0)+(d&&l[6]>=u*4&&l[0]>=u?1:0)}finderPenaltyTerminateAndCount(l,u,d){return l&&(this.finderPenaltyAddHistory(u,d),u=0),u+=this.size,this.finderPenaltyAddHistory(u,d),this.finderPenaltyCountPatterns(d)}finderPenaltyAddHistory(l,u){u[0]==0&&(l+=this.size),u.pop(),u.unshift(l)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;function r(c,l,u){if(l<0||l>31||c>>>l)throw new RangeError("Value out of range");for(let d=l-1;d>=0;d--)u.push(c>>>d&1)}function n(c,l){return(c>>>l&1)!=0}function i(c){if(!c)throw new Error("Assertion error")}const o=class de{constructor(l,u,d){if(this.mode=l,this.numChars=u,this.bitData=d,u<0)throw new RangeError("Invalid argument");this.bitData=d.slice()}static makeBytes(l){let u=[];for(const d of l)r(d,8,u);return new de(de.Mode.BYTE,l.length,u)}static makeNumeric(l){if(!de.isNumeric(l))throw new RangeError("String contains non-numeric characters");let u=[];for(let d=0;d<l.length;){const f=Math.min(l.length-d,3);r(parseInt(l.substring(d,d+f),10),f*3+1,u),d+=f}return new de(de.Mode.NUMERIC,l.length,u)}static makeAlphanumeric(l){if(!de.isAlphanumeric(l))throw new RangeError("String contains unencodable characters in alphanumeric mode");let u=[],d;for(d=0;d+2<=l.length;d+=2){let f=de.ALPHANUMERIC_CHARSET.indexOf(l.charAt(d))*45;f+=de.ALPHANUMERIC_CHARSET.indexOf(l.charAt(d+1)),r(f,11,u)}return d<l.length&&r(de.ALPHANUMERIC_CHARSET.indexOf(l.charAt(d)),6,u),new de(de.Mode.ALPHANUMERIC,l.length,u)}static makeSegments(l){return l==""?[]:de.isNumeric(l)?[de.makeNumeric(l)]:de.isAlphanumeric(l)?[de.makeAlphanumeric(l)]:[de.makeBytes(de.toUtf8ByteArray(l))]}static makeEci(l){let u=[];if(l<0)throw new RangeError("ECI assignment value out of range");if(l<128)r(l,8,u);else if(l<16384)r(2,2,u),r(l,14,u);else if(l<1e6)r(6,3,u),r(l,21,u);else throw new RangeError("ECI assignment value out of range");return new de(de.Mode.ECI,0,u)}static isNumeric(l){return de.NUMERIC_REGEX.test(l)}static isAlphanumeric(l){return de.ALPHANUMERIC_REGEX.test(l)}getData(){return this.bitData.slice()}static getTotalBits(l,u){let d=0;for(const f of l){const p=f.mode.numCharCountBits(u);if(f.numChars>=1<<p)return 1/0;d+=4+p+f.bitData.length}return d}static toUtf8ByteArray(l){l=encodeURI(l);let u=[];for(let d=0;d<l.length;d++)l.charAt(d)!="%"?u.push(l.charCodeAt(d)):(u.push(parseInt(l.substring(d+1,d+3),16)),d+=2);return u}};o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let a=o;e.QrSegment=o})(qr||(qr={}));(e=>{(t=>{const r=class{constructor(i,o){this.ordinal=i,this.formatBits=o}};r.LOW=new r(0,1),r.MEDIUM=new r(1,0),r.QUARTILE=new r(2,3),r.HIGH=new r(3,2),t.Ecc=r})(e.QrCode||(e.QrCode={}))})(qr||(qr={}));(e=>{(t=>{const r=class{constructor(i,o){this.modeBits=i,this.numBitsCharCount=o}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};r.NUMERIC=new r(1,[10,12,14]),r.ALPHANUMERIC=new r(2,[9,11,13]),r.BYTE=new r(4,[8,16,16]),r.KANJI=new r(8,[8,10,12]),r.ECI=new r(7,[0,0,0]),t.Mode=r})(e.QrSegment||(e.QrSegment={}))})(qr||(qr={}));var yn=qr;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var pb={L:yn.QrCode.Ecc.LOW,M:yn.QrCode.Ecc.MEDIUM,Q:yn.QrCode.Ecc.QUARTILE,H:yn.QrCode.Ecc.HIGH},gg=128,mg="L",vg="#FFFFFF",yg="#000000",xg=!1,wg=1,hb=4,gb=0,mb=.1;function bg(e,t=0){const r=[];return e.forEach(function(n,i){let o=null;n.forEach(function(a,c){if(!a&&o!==null){r.push(`M${o+t} ${i+t}h${c-o}v1H${o+t}z`),o=null;return}if(c===n.length-1){if(!a)return;o===null?r.push(`M${c+t},${i+t} h1v1H${c+t}z`):r.push(`M${o+t},${i+t} h${c+1-o}v1H${o+t}z`);return}a&&o===null&&(o=c)})}),r.join("")}function kg(e,t){return e.slice().map((r,n)=>n<t.y||n>=t.y+t.h?r:r.map((i,o)=>o<t.x||o>=t.x+t.w?i:!1))}function vb(e,t,r,n){if(n==null)return null;const i=e.length+r*2,o=Math.floor(t*mb),a=i/t,c=(n.width||o)*a,l=(n.height||o)*a,u=n.x==null?e.length/2-c/2:n.x*a,d=n.y==null?e.length/2-l/2:n.y*a,f=n.opacity==null?1:n.opacity;let p=null;if(n.excavate){let v=Math.floor(u),k=Math.floor(d),S=Math.ceil(c+u-v),g=Math.ceil(l+d-k);p={x:v,y:k,w:S,h:g}}const x=n.crossOrigin;return{x:u,y:d,h:l,w:c,excavation:p,opacity:f,crossOrigin:x}}function yb(e,t){return t!=null?Math.max(Math.floor(t),0):e?hb:gb}function Sg({value:e,level:t,minVersion:r,includeMargin:n,marginSize:i,imageSettings:o,size:a,boostLevel:c}){let l=ve.useMemo(()=>{const v=(Array.isArray(e)?e:[e]).reduce((k,S)=>(k.push(...yn.QrSegment.makeSegments(S)),k),[]);return yn.QrCode.encodeSegments(v,pb[t],r,void 0,void 0,c)},[e,t,r,c]);const{cells:u,margin:d,numCells:f,calculatedImageSettings:p}=ve.useMemo(()=>{let x=l.getModules();const v=yb(n,i),k=x.length+v*2,S=vb(x,a,v,o);return{cells:x,margin:v,numCells:k,calculatedImageSettings:S}},[l,a,o,n,i]);return{qrcode:l,margin:d,cells:u,numCells:f,calculatedImageSettings:p}}var xb=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),wb=ve.forwardRef(function(t,r){const n=t,{value:i,size:o=gg,level:a=mg,bgColor:c=vg,fgColor:l=yg,includeMargin:u=xg,minVersion:d=wg,boostLevel:f,marginSize:p,imageSettings:x}=n,k=Dl(n,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:S}=k,g=Dl(k,["style"]),h=x==null?void 0:x.src,m=ve.useRef(null),b=ve.useRef(null),_=ve.useCallback(we=>{m.current=we,typeof r=="function"?r(we):r&&(r.current=we)},[r]),[C,I]=ve.useState(!1),{margin:N,cells:D,numCells:P,calculatedImageSettings:H}=Sg({value:i,level:a,minVersion:d,boostLevel:f,includeMargin:u,marginSize:p,imageSettings:x,size:o});ve.useEffect(()=>{if(m.current!=null){const we=m.current,Ee=we.getContext("2d");if(!Ee)return;let Ce=D;const be=b.current,T=H!=null&&be!==null&&be.complete&&be.naturalHeight!==0&&be.naturalWidth!==0;T&&H.excavation!=null&&(Ce=kg(D,H.excavation));const L=window.devicePixelRatio||1;we.height=we.width=o*L;const M=o/P*L;Ee.scale(M,M),Ee.fillStyle=c,Ee.fillRect(0,0,P,P),Ee.fillStyle=l,xb?Ee.fill(new Path2D(bg(Ce,N))):D.forEach(function(K,re){K.forEach(function(We,Ie){We&&Ee.fillRect(Ie+N,re+N,1,1)})}),H&&(Ee.globalAlpha=H.opacity),T&&Ee.drawImage(be,H.x+N,H.y+N,H.w,H.h)}}),ve.useEffect(()=>{I(!1)},[h]);const te=zl({height:o,width:o},S);let pe=null;return h!=null&&(pe=ve.createElement("img",{src:h,key:h,style:{display:"none"},onLoad:()=>{I(!0)},ref:b,crossOrigin:H==null?void 0:H.crossOrigin})),ve.createElement(ve.Fragment,null,ve.createElement("canvas",zl({style:te,height:o,width:o,ref:_,role:"img"},g)),pe)});wb.displayName="QRCodeCanvas";var _g=ve.forwardRef(function(t,r){const n=t,{value:i,size:o=gg,level:a=mg,bgColor:c=vg,fgColor:l=yg,includeMargin:u=xg,minVersion:d=wg,boostLevel:f,title:p,marginSize:x,imageSettings:v}=n,k=Dl(n,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:S,cells:g,numCells:h,calculatedImageSettings:m}=Sg({value:i,level:a,minVersion:d,boostLevel:f,includeMargin:u,marginSize:x,imageSettings:v,size:o});let b=g,_=null;v!=null&&m!=null&&(m.excavation!=null&&(b=kg(g,m.excavation)),_=ve.createElement("image",{href:v.src,height:m.h,width:m.w,x:m.x+S,y:m.y+S,preserveAspectRatio:"none",opacity:m.opacity,crossOrigin:m.crossOrigin}));const C=bg(b,S);return ve.createElement("svg",zl({height:o,width:o,viewBox:`0 0 ${h} ${h}`,ref:r,role:"img"},k),!!p&&ve.createElement("title",null,p),ve.createElement("path",{fill:c,d:`M0,0 h${h}v${h}H0z`,shapeRendering:"crispEdges"}),ve.createElement("path",{fill:l,d:C,shapeRendering:"crispEdges"}),_)});_g.displayName="QRCodeSVG";/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=e=>{const t=kb(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var La={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},_b=y.createContext({}),Eb=()=>y.useContext(_b),Cb=y.forwardRef(({color:e,size:t,strokeWidth:r,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...c},l)=>{const{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:p="currentColor",className:x=""}=Eb()??{},v=n??f?Number(r??d)*24/Number(t??u):r??d;return y.createElement("svg",{ref:l,...La,width:t??u??La.width,height:t??u??La.height,stroke:e??p,strokeWidth:v,className:Eg("lucide",x,i),...!o&&!Sb(c)&&{"aria-hidden":"true"},...c},[...a.map(([k,S])=>y.createElement(k,S)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=(e,t)=>{const r=y.forwardRef(({className:n,...i},o)=>y.createElement(Cb,{ref:o,iconNode:t,className:Eg(`lucide-${bb(Xd(e))}`,`lucide-${e}`,n),...i}));return r.displayName=Xd(e),r};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],jb=Hs("check",Ib);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Rb=Hs("copy",Tb);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Pb=Hs("mail",Nb);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ob=Hs("x",Ab),Lb=()=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"}),s.jsx("path",{d:"M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"})]}),Mb=()=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"})}),zb=()=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),s.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),s.jsx("circle",{cx:"4",cy:"4",r:"2"})]});function Db({file:e,onShare:t,onCancel:r}){const[n,i]=y.useState("link"),[o,a]=y.useState("view"),[c,l]=y.useState(""),[u,d]=y.useState(""),[f,p]=y.useState(""),[x,v]=y.useState(""),[k,S]=y.useState(!1),[g,h]=y.useState(""),[m,b]=y.useState(!1),[_,C]=y.useState("settings"),I=async()=>{var P;S(!0);try{const H={shareType:n,permission:o,visibility:"protected",...u&&{password:u},...f&&{expiresAt:new Date(f).toISOString()},...x&&{maxViews:Number(x)},...n==="email"&&{recipientEmail:c,email:c}},te=await t(H),pe=(te==null?void 0:te.shareUrl)||((P=te==null?void 0:te.data)==null?void 0:P.shareUrl);pe&&h(pe)}finally{S(!1)}},N=async()=>{var P;g&&(await((P=navigator.clipboard)==null?void 0:P.writeText(g)),b(!0),setTimeout(()=>b(!1),2e3))},D=P=>{if(!g)return;const H=encodeURIComponent(`Check out this file on CloudVault: ${e.name}`),te=encodeURIComponent(g),pe={twitter:`https://twitter.com/intent/tweet?text=${H}&url=${te}`,whatsapp:`https://wa.me/?text=${H}%20${te}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${te}`,email:`mailto:?subject=${encodeURIComponent(`Shared File: ${e.name}`)}&body=${H}%0A${te}`};window.open(pe[P],"_blank")};return s.jsx("div",{className:"share-modal-backdrop",onClick:r,style:{display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",zIndex:1e3},children:s.jsxs("div",{onClick:P=>P.stopPropagation(),style:{background:"var(--surface)",borderRadius:24,width:"100%",maxWidth:500,overflow:"hidden",boxShadow:"0 24px 80px rgba(0,0,0,0.4)",border:"1px solid var(--border)"},children:[s.jsxs("div",{style:{padding:"24px 32px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(255,255,255,0.02)"},children:[s.jsxs("div",{children:[s.jsxs("h3",{style:{margin:0,fontSize:20,fontWeight:700,color:"var(--text)"},children:['Share "',e.name,'"']}),s.jsx("p",{style:{margin:"4px 0 0",fontSize:13,color:"var(--text-muted)"},children:"Securely distribute this file"})]}),s.jsx("button",{onClick:r,style:{background:"transparent",border:"none",color:"var(--text-muted)",cursor:"pointer",padding:8,borderRadius:50},children:s.jsx(Ob,{size:20})})]}),s.jsx("div",{style:{padding:"32px"},children:g?s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",gap:16,marginBottom:24},children:[s.jsx("button",{onClick:()=>C("settings"),style:{flex:1,padding:"10px",borderRadius:12,background:_==="settings"?"var(--accent-blue)":"transparent",color:_==="settings"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:_==="settings"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Link"}),s.jsx("button",{onClick:()=>C("qr"),style:{flex:1,padding:"10px",borderRadius:12,background:_==="qr"?"var(--accent-blue)":"transparent",color:_==="qr"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:_==="qr"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"QR Code"}),s.jsx("button",{onClick:()=>C("social"),style:{flex:1,padding:"10px",borderRadius:12,background:_==="social"?"var(--accent-blue)":"transparent",color:_==="social"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:_==="social"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Social"})]}),_==="settings"&&s.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[s.jsxs("div",{style:{padding:20,background:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",borderRadius:16,marginBottom:24},children:[s.jsx("p",{style:{margin:"0 0 12px",fontSize:13,fontWeight:700,color:"var(--accent-blue)",textTransform:"uppercase",letterSpacing:.5},children:"Share Link Created"}),s.jsx("div",{style:{fontSize:14,wordBreak:"break-all",color:"var(--text)",lineHeight:1.5,marginBottom:16},children:g}),s.jsxs("button",{onClick:N,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",padding:14,borderRadius:12,background:m?"#10b981":"var(--accent-blue)",color:"#fff",border:"none",fontWeight:700,cursor:"pointer",transition:"0.2s"},children:[m?s.jsx(jb,{size:18}):s.jsx(Rb,{size:18}),m?"Copied to Clipboard":"Copy Link"]})]}),s.jsx("button",{onClick:()=>h(""),style:{width:"100%",padding:14,background:"transparent",color:"var(--text)",border:"1px solid var(--border)",borderRadius:12,fontWeight:600,cursor:"pointer"},children:"Create another share"})]}),_==="qr"&&s.jsxs("div",{style:{animation:"fadeIn 0.3s ease",textAlign:"center"},children:[s.jsx("div",{style:{display:"inline-block",background:"#fff",padding:24,borderRadius:24,marginBottom:24,boxShadow:"0 10px 40px rgba(0,0,0,0.1)"},children:s.jsx(_g,{value:g,size:200,level:"H",includeMargin:!1})}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,margin:0},children:"Scan this code to instantly open the shared file on your mobile device."})]}),_==="social"&&s.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:24,textAlign:"center"},children:"Share directly to your favorite platforms"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsxs("button",{onClick:()=>D("twitter"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(29, 161, 242, 0.1)",color:"#1da1f2",border:"1px solid rgba(29, 161, 242, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(Mb,{})," Twitter"]}),s.jsxs("button",{onClick:()=>D("whatsapp"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(37, 211, 102, 0.1)",color:"#25d366",border:"1px solid rgba(37, 211, 102, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(Lb,{})," WhatsApp"]}),s.jsxs("button",{onClick:()=>D("linkedin"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(0, 119, 181, 0.1)",color:"#0077b5",border:"1px solid rgba(0, 119, 181, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(zb,{})," LinkedIn"]}),s.jsxs("button",{onClick:()=>D("email"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(255, 255, 255, 0.05)",color:"var(--text)",border:"1px solid var(--border)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(Pb,{size:20})," Email App"]})]})]})]}):s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Share Method"}),s.jsxs("div",{style:{display:"flex",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,padding:4},children:[s.jsx("button",{onClick:()=>i("link"),style:{flex:1,padding:"8px",background:n==="link"?"var(--surface)":"transparent",color:n==="link"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:n==="link"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Link"}),s.jsx("button",{onClick:()=>i("email"),style:{flex:1,padding:"8px",background:n==="email"?"var(--surface)":"transparent",color:n==="email"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:n==="email"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Email"})]})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Permission"}),s.jsxs("select",{value:o,onChange:P=>a(P.target.value),style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"},children:[s.jsx("option",{value:"view",children:"View only"}),s.jsx("option",{value:"download",children:"View & Download"}),s.jsx("option",{value:"edit",children:"Edit metadata"})]})]})]}),n==="email"&&s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Recipient Email"}),s.jsx("input",{type:"email",value:c,onChange:P=>l(P.target.value),placeholder:"colleague@company.com",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Password Protection"}),s.jsx("input",{type:"password",value:u,onChange:P=>d(P.target.value),placeholder:"Optional",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"},autoComplete:"new-password"})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"View Limit"}),s.jsx("input",{type:"number",min:"1",value:x,onChange:P=>v(P.target.value),placeholder:"Unlimited",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Expiration Date"}),s.jsx("input",{type:"datetime-local",value:f,onChange:P=>p(P.target.value),style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),s.jsx("div",{style:{marginTop:8},children:s.jsx("button",{onClick:I,disabled:k||n==="email"&&!c,style:{width:"100%",padding:"16px",background:"var(--accent-blue)",color:"#fff",border:"none",borderRadius:14,fontWeight:700,fontSize:16,cursor:k||n==="email"&&!c?"not-allowed":"pointer",opacity:k||n==="email"&&!c?.6:1,transition:"0.2s"},children:k?"Generating Secure Link...":n==="email"?"Send Email Invitation":"Create Share Link"})})]})})]})})}function Fb({stats:e,usage:t,onBack:r}){const n=(t==null?void 0:t.breakdown)||{},i=Object.values(n).reduce((c,l)=>c+l,0)||1,o=e.storageQuota>0?Math.min(100,Math.round(e.storageUsed/e.storageQuota*100)):0,a=[{key:"images",label:"Images",color:"#22c55e"},{key:"videos",label:"Videos",color:"#2563eb"},{key:"documents",label:"Documents",color:"#f59e0b"},{key:"audio",label:"Audio",color:"#a78bfa"},{key:"other",label:"Other",color:"#94a3b8"}];return s.jsxs("div",{style:{animation:"fadeIn .3s ease"},children:[s.jsx("button",{type:"button",onClick:r,className:"page-back-btn",children:"← Back to My Drive"}),s.jsx("h2",{style:{fontWeight:900,fontSize:26,margin:"12px 0 8px",color:"var(--text)"},children:"Storage dashboard"}),s.jsxs("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:28},children:[o,"% of your storage is in use"]}),s.jsxs("div",{className:"dashboard-stat-grid",children:[s.jsx(Io,{label:"Total files",value:e.totalFiles}),s.jsx(Io,{label:"Total folders",value:e.totalFolders}),s.jsx(Io,{label:"Storage used",value:ze(e.storageUsed)}),s.jsx(Io,{label:"Storage remaining",value:ze(Math.max(0,e.storageQuota-e.storageUsed))})]}),s.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)",marginBottom:24},children:[s.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"Storage breakdown"}),s.jsx("div",{style:{height:14,borderRadius:99,overflow:"hidden",display:"flex",background:"var(--border)"},children:a.map(c=>{const l=(n[c.key]||0)/i*100;return l<.5?null:s.jsx("div",{title:`${c.label}: ${ze(n[c.key]||0)}`,style:{width:`${l}%`,background:c.color,transition:"width .4s ease"}},c.key)})}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,marginTop:16},children:a.map(c=>s.jsxs("span",{style:{fontSize:13,color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{width:10,height:10,borderRadius:99,background:c.color,flexShrink:0}}),c.label,": ",ze(n[c.key]||0)]},c.key))})]}),s.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)"},children:[s.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"File type distribution"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:a.map(c=>{const l=n[c.key]||0,u=Math.round(l/i*100);return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[s.jsx("span",{style:{color:"var(--text-secondary)",fontWeight:600},children:c.label}),s.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:700},children:[u,"%"]})]}),s.jsx("div",{style:{height:8,background:"var(--border)",borderRadius:99,overflow:"hidden"},children:s.jsx("div",{style:{width:`${u}%`,height:"100%",background:c.color,borderRadius:99,transition:"width .4s ease"}})})]},c.key)})})]})]})}function Io({label:e,value:t}){return s.jsxs("div",{className:"dashboard-stat-card",children:[s.jsx("div",{className:"label",children:e}),s.jsx("div",{className:"value",children:t})]})}function Ub({users:e,systemHealth:t,loading:r,onBack:n}){return s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:n,style:Bb,children:"← Back to My Cloud"}),s.jsx("h2",{style:{fontWeight:800,fontSize:22,margin:"12px 0 8px"},children:"Admin panel"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:24},children:"User management and system overview"}),t&&s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:28},children:[s.jsx(ai,{label:"Total users",value:t.totalUsers??"—"}),s.jsx(ai,{label:"Active users",value:t.activeUsers??"—"}),s.jsx(ai,{label:"Total files",value:t.totalFiles??"—"}),s.jsx(ai,{label:"Storage used",value:t.totalStorageUsed!=null?ze(t.totalStorageUsed):"—"}),s.jsx(ai,{label:"Uploads today",value:t.uploadsToday??"—"})]}),s.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"Users"}),r?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading…"}):s.jsxs("div",{style:{overflowX:"auto",border:"1px solid var(--border)",borderRadius:12},children:[s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"var(--bg-card)",textAlign:"left"},children:[s.jsx("th",{style:li,children:"Email"}),s.jsx("th",{style:li,children:"Name"}),s.jsx("th",{style:li,children:"Role"}),s.jsx("th",{style:li,children:"Storage"}),s.jsx("th",{style:li,children:"Status"})]})}),s.jsx("tbody",{children:e.map(i=>s.jsxs("tr",{style:{borderTop:"1px solid var(--border)"},children:[s.jsx("td",{style:ci,children:i.email}),s.jsx("td",{style:ci,children:i.fullName||"—"}),s.jsx("td",{style:ci,children:i.role}),s.jsxs("td",{style:ci,children:[ze(i.storageUsed)," / ",ze(i.storageQuota)]}),s.jsx("td",{style:ci,children:i.isActive?"Active":"Inactive"})]},i.id))})]}),e.length===0&&s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)"},children:"No users found"})]})]})}function ai({label:e,value:t}){return s.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:14},children:[s.jsx("div",{style:{fontWeight:800,fontSize:20},children:t}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:e})]})}const li={padding:"12px 14px",color:"var(--text-muted)",fontWeight:600},ci={padding:"12px 14px",color:"var(--text-secondary)"},Bb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"};function Cg({file:e,onMove:t,onCopy:r,onTags:n,onDelete:i}){const[o,a]=y.useState(!1),c=y.useRef(null);y.useEffect(()=>{const u=d=>{c.current&&!c.current.contains(d.target)&&a(!1)};return o&&document.addEventListener("click",u),()=>document.removeEventListener("click",u)},[o]);const l=[{cue:"#",label:"Tags",onClick:()=>n(e)},{cue:"Move",label:"Move",onClick:()=>t(e)},{cue:"Copy",label:"Copy file",onClick:()=>r(e)},{cue:"Del",label:"Delete",onClick:()=>i(e),danger:!0}];return s.jsxs("div",{ref:c,style:{position:"relative"},children:[s.jsx("button",{type:"button",title:"More actions",onClick:u=>{u.stopPropagation(),a(d=>!d)},style:Wb,children:"..."}),o&&s.jsx("div",{style:$b,children:l.map(u=>s.jsxs("button",{type:"button",onClick:d=>{d.stopPropagation(),a(!1),u.onClick()},style:{...Vb,color:u.danger?"var(--danger)":"var(--text)"},children:[s.jsx("span",{style:{...Hb,color:u.danger?"var(--danger)":"var(--accent-blue)"},children:u.cue}),s.jsx("span",{children:u.label})]},u.label))})]})}const Wb={width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"rgba(255,255,255,.08)",color:"var(--text)",cursor:"pointer",fontSize:18,fontWeight:900,transition:"var(--transition)"},$b={position:"absolute",right:0,top:"100%",marginTop:6,minWidth:190,background:"var(--surface-raised)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"var(--shadow)",zIndex:50,overflow:"hidden",padding:6,animation:"floatIn .16s ease"},Vb={display:"flex",alignItems:"center",gap:10,width:"100%",padding:"11px 12px",border:"none",borderRadius:10,background:"transparent",textAlign:"left",cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"var(--font)"},Hb={width:34,opacity:.78,fontSize:11,fontWeight:900,textTransform:"uppercase"};function on({width:e="100%",height:t=16,radius:r=8,style:n={}}){return s.jsx("div",{style:{width:e,height:t,borderRadius:r,background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite",...n}})}function Gb({count:e=6,grid:t=!1}){return t?s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:12},children:Array.from({length:e}).map((r,n)=>s.jsxs("div",{style:{borderRadius:16,overflow:"hidden",border:"1px solid var(--border)"},children:[s.jsx(on,{height:140,radius:0}),s.jsxs("div",{style:{padding:12},children:[s.jsx(on,{height:12,width:"80%"}),s.jsx(on,{height:10,width:"50%",style:{marginTop:8}})]})]},n))}):s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Array.from({length:e}).map((r,n)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:"var(--bg-card)",borderRadius:12,border:"1px solid var(--border)"},children:[s.jsx(on,{width:36,height:36,radius:8}),s.jsxs("div",{style:{flex:1},children:[s.jsx(on,{height:14,width:"40%"}),s.jsx(on,{height:10,width:"25%",style:{marginTop:8}})]})]},n))})}function Yb(e,t=400){const[r,n]=y.useState(e);return y.useEffect(()=>{const i=setTimeout(()=>n(e),t);return()=>clearTimeout(i)},[e,t]),r}async function Qb(e,{createFolder:t,uploadFile:r,baseFolderId:n,onProgress:i}){const o=Array.from(e),a=new Map([["",n??null]]),c=u=>{const d=u.webkitRelativePath||u.name,f=d.split("/").filter(Boolean),p=f.pop();return{segments:f,fileName:p,rel:d}};o.sort((u,d)=>c(u).rel.localeCompare(c(d).rel));let l=0;for(const u of o){const{segments:d}=c(u);let f=n??null,p="";for(const x of d){if(p=p?`${p}/${x}`:x,!a.has(p)){const v=await t(x,f);a.set(p,v.id)}f=a.get(p)}await r(u,f),l+=1,i==null||i(Math.round(l/o.length*100))}}function Kb(e){const t=new Map(e.map(n=>[n.id,{...n,children:[]}])),r=[];for(const n of e){const i=t.get(n.id);n.parentId&&t.has(n.parentId)?t.get(n.parentId).children.push(i):r.push(i)}return r}const Ig=y.createContext(null);function qb({token:e,children:t}){const[r,n]=y.useState(null),[i,o]=y.useState([]),[a,c]=y.useState(0),[l,u]=y.useState(!0),d=y.useCallback(async()=>{if(e)try{const v=await pt("/account",{},e);n(v)}catch{const v=await pt("/users/me",{},e).catch(()=>null);v&&n(v)}},[e]),f=y.useCallback(async()=>{},[]),p=y.useCallback(async()=>{u(!0),await Promise.all([d(),f()]),u(!1)},[d,f]);y.useEffect(()=>{p()},[e]);const x=async()=>{};return s.jsx(Ig.Provider,{value:{account:r,loading:l,notifications:i,unreadCount:a,refreshAccount:d,refreshNotifications:f,refreshAll:p,markAllRead:x},children:t})}function jg(){const e=y.useContext(Ig);if(!e)throw new Error("useAccount must be used within AccountProvider");return e}function Jb({account:e,onNavigate:t,onSignOut:r}){var u;const[n,i]=y.useState(!1),o=y.useRef(null);y.useEffect(()=>{const d=f=>{o.current&&!o.current.contains(f.target)&&i(!1)};return n&&document.addEventListener("click",d),()=>document.removeEventListener("click",d)},[n]);const a=[{id:"profile",label:"My Profile"},{id:"settings",label:"Settings"},{id:"security",label:"Security"},{id:"dashboard",label:"Storage"},{id:"billing",label:"Billing"},{id:"billing",label:"Upgrade Plan",accent:!0},{id:"help",label:"Help Center"}],c=e==null?void 0:e.avatarUrl,l=((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"?").slice(0,1).toUpperCase();return s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(d=>!d),style:{display:"flex",alignItems:"center",gap:8,padding:"4px 10px 4px 4px",borderRadius:999,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontFamily:"var(--font)"},children:[s.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:c?`url(${c}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:14},children:!c&&l}),s.jsx("span",{style:{color:"var(--text-secondary)",fontSize:13,fontWeight:600},children:"▾"})]}),n&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",minWidth:200,background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300,overflow:"hidden",animation:"fadeIn .15s ease"},children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontWeight:700,fontSize:14,color:"var(--text)"},children:(e==null?void 0:e.fullName)||"Account"}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:e==null?void 0:e.email}),s.jsxs("div",{style:{fontSize:11,color:"var(--accent)",marginTop:6,fontWeight:600,textTransform:"capitalize"},children:[((u=e==null?void 0:e.planDetails)==null?void 0:u.name)||(e==null?void 0:e.plan)," plan"]})]}),a.map((d,f)=>s.jsx("button",{type:"button",onClick:()=>{i(!1),t(d.id==="dashboard"?"dashboard":d.id)},style:{display:"block",width:"100%",padding:"11px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,fontWeight:d.accent?700:500,color:d.accent?"var(--accent)":"var(--text-secondary)"},children:d.label},`${d.id}-${f}`)),s.jsx("div",{style:{borderTop:"1px solid var(--border)"},children:s.jsx("button",{type:"button",onClick:()=>{i(!1),r()},style:{display:"block",width:"100%",padding:"12px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,color:"var(--danger)",fontWeight:600},children:"Sign Out"})})]})]})}function Xb({account:e,onUpgrade:t}){if(!(e!=null&&e.onTrial))return null;const r=e.trialDaysLeft??0;return s.jsxs("div",{style:{background:"linear-gradient(90deg, rgba(240,22,58,.12), rgba(64,144,255,.1))",borderBottom:"1px solid var(--border)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--text)"},children:"Pro trial"})," — ",r," day",r!==1?"s":""," left · ",ze(e.storageUsed)," used"]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Upgrade"})]})}function Zb({account:e,onOpenSettings:t}){return!(e!=null&&e.emailVerificationRequired)||(e==null?void 0:e.isVerified)!==!1?null:s.jsxs("div",{style:{background:"rgba(240, 22, 58, 0.12)",borderBottom:"1px solid rgba(240, 22, 58, 0.35)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--danger)"},children:"Email not verified"})," — ","Uploads are disabled until you verify. Check your inbox or resend the link."]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Verify email"})]})}function Zd({email:e,token:t,onVerified:r,onBack:n}){const[i,o]=y.useState(e||""),[a,c]=y.useState(!!t),[l,u]=y.useState(""),[d,f]=y.useState(""),[p,x]=y.useState(!1);y.useEffect(()=>{t&&v(t)},[t]);const v=async S=>{c(!0),u("");try{const g=await fetch(`${Tt}/auth/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:S})}),h=await g.json();if(!g.ok||!h.success)throw new Error(h.message||"Verification failed");x(!0),setTimeout(()=>r==null?void 0:r(),1200)}catch{u("This verification link is invalid or expired. Request a fresh email and try again.")}finally{c(!1)}},k=async()=>{if(!i){u("Enter your email address first.");return}c(!0),u(""),f("");try{const S=await fetch(`${Tt}/auth/resend-verification`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}),g=await S.json();if(!S.ok||!g.success)throw new Error(g.message||"Failed to send verification email");f("A fresh verification email is on its way. Open the link in your inbox to continue.")}catch{u("Something went wrong. Please try again.")}finally{c(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:$r}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:p?"Email verified":t?"Verifying your email":"Check your inbox"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:p?"Your account is ready. You can now log in with your email and password.":t?"Hold tight while we confirm your CloudVault account.":"Open the verification link we sent after registration. You only need to do this once."}),!t&&!p&&s.jsxs(s.Fragment,{children:[s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:"Email address"}),s.jsx("input",{className:"input-field",type:"email",value:i,onChange:S=>o(S.target.value),placeholder:"you@company.com",style:{marginTop:6}})]}),s.jsx("button",{type:"button",onClick:k,disabled:a,className:"btn-primary",style:{width:"100%"},children:a?"Sending...":"Resend verification email"})]}),a&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,marginTop:14},children:"Working on it..."}),l&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginTop:14},children:l}),d&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,lineHeight:1.5,marginTop:14},children:d}),s.jsx("button",{type:"button",onClick:n,className:"btn-secondary",style:{width:"100%",marginTop:14},children:"Back to login"})]})]})}function e2({notifications:e,unreadCount:t,onMarkAllRead:r}){const[n,i]=y.useState(!1),o=y.useRef(null);return y.useEffect(()=>{const a=c=>{o.current&&!o.current.contains(c.target)&&i(!1)};return n&&document.addEventListener("click",a),()=>document.removeEventListener("click",a)},[n]),s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(a=>!a),style:{width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontSize:18,position:"relative"},title:"Notifications",children:["🔔",t>0&&s.jsx("span",{style:{position:"absolute",top:4,right:4,minWidth:16,height:16,borderRadius:99,background:"var(--accent)",color:"#fff",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"},children:t>9?"9+":t})]}),n&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",width:320,maxHeight:400,overflow:"auto",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300},children:[s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontWeight:700,fontSize:14},children:"Notifications"}),t>0&&s.jsx("button",{type:"button",onClick:r,style:t2,children:"Mark all read"})]}),e.length===0?s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)",fontSize:13},children:"Nothing new"}):e.map(a=>s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",background:a.read?"transparent":"rgba(240,22,58,.06)"},children:[s.jsx("div",{style:{fontWeight:600,fontSize:13},children:a.title}),a.body&&s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:a.body}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:6},children:Ji(a.createdAt)})]},a.id))]})]})}const t2={background:"none",border:"none",color:"var(--accent-blue)",fontSize:12,cursor:"pointer",fontWeight:600};function ef({token:e,onBack:t,onSuccess:r}){const[n,i]=y.useState(""),[o,a]=y.useState(""),[c,l]=y.useState(!1),[u,d]=y.useState(""),[f,p]=y.useState(!1),x=async v=>{if(v.preventDefault(),d(""),!e)return d("This reset link is invalid. Please request a new one.");if(n!==o)return d("Passwords do not match.");if(n.length<8)return d("Password must be at least 8 characters.");if(!/[a-z]/.test(n)||!/[A-Z]/.test(n)||!/\d/.test(n))return d("Use at least one uppercase letter, one lowercase letter, and one number.");l(!0);try{const k=await fetch(`${Tt}/auth/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,newPassword:n})}),S=await k.json();if(!k.ok||!S.success)throw new Error(S.message||"Failed to reset password");p(!0),setTimeout(()=>{var g;return(g=r||t)==null?void 0:g()},1400)}catch{d("Something went wrong. Please try again.")}finally{l(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:$r}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:f?"Password updated":"Set a new password"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:f?"You can now log in with your new password.":"Choose a strong password to secure your CloudVault account."}),!f&&s.jsxs("form",{onSubmit:x,children:[s.jsx(tf,{label:"New password",value:n,onChange:i}),s.jsx(tf,{label:"Confirm password",value:o,onChange:a}),u&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginBottom:14},children:u}),s.jsx("button",{type:"submit",disabled:c,className:"btn-primary",style:{width:"100%"},children:c?"Updating...":"Update password"})]}),f&&s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{width:"100%"},children:"Continue to login"}),s.jsx("button",{type:"button",onClick:t,className:"btn-secondary",style:{width:"100%",marginTop:12},children:"Back to login"})]})]})}function tf({label:e,value:t,onChange:r}){return s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:e}),s.jsx("input",{className:"input-field",type:"password",value:t,onChange:n=>r(n.target.value),required:!0,minLength:8,style:{marginTop:6}})]})}const rf={drive:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V8H4V6.5Z",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M4 8h16v9.5A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5V8Z",stroke:"currentColor",strokeWidth:"1.8"})]}),recent:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"12",cy:"12",r:"8.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),starred:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M12 4.5l2.2 4.5 4.9.7-3.5 3.4.8 4.9L12 15.8l-4.4 2.2.8-4.9-3.5-3.4 4.9-.7L12 4.5Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"})}),shared:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"18",cy:"5",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("circle",{cx:"6",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("circle",{cx:"18",cy:"19",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M8.3 10.8l7.4-4.1M8.3 13.2l7.4 4.1",stroke:"currentColor",strokeWidth:"1.8"})]}),usage:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M5 19V10M10 19V5M15 19v-7M20 19V8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}),trash:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M9 4h6M5 7h14l-1.2 12.5a1.5 1.5 0 0 1-1.5 1.5H7.7a1.5 1.5 0 0 1-1.5-1.5L5 7Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 10v6M14 10v6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),activity:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M6 5h12v14H6V5Z",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M9 9h6M9 12h4M9 15h5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),admin:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),s.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"})]})};function r2({name:e,active:t=!1}){return s.jsx("span",{className:`nav-icon${t?" active":""}`,"aria-hidden":"true",children:rf[e]||rf.drive})}const n2=y.lazy(()=>Zr(()=>import("./ProfilePage-DdnIbirA.js"),[])),i2=y.lazy(()=>Zr(()=>import("./SettingsPage-CDtbwP22.js"),[])),o2=y.lazy(()=>Zr(()=>import("./SecurityPage-bbKnV7v6.js"),[])),s2=y.lazy(()=>Zr(()=>import("./BillingPage-BKHCCxhR.js"),[])),a2=y.lazy(()=>Zr(()=>import("./HelpPage-BNrKhbtq.js"),[])),l2=y.lazy(()=>Zr(()=>import("./ActivityPage--5ECZJk5.js"),[])),Ma=y.lazy(()=>Zr(()=>import("./FileListPage-CyiE4mGj.js"),[]));function zt(){return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:48},children:s.jsx(Fl,{size:28})})}function c2({msg:e,type:t,onClose:r}){y.useEffect(()=>{const i=setTimeout(r,3500);return()=>clearTimeout(i)},[r]);const n=t==="error"?"var(--danger)":t==="success"?"var(--accent)":"var(--accent-blue)";return s.jsxs("div",{className:"toast",role:"alert","aria-live":"polite",style:{position:"fixed",bottom:32,right:32,zIndex:9999,background:n,color:"#fff",padding:"14px 24px",borderRadius:"var(--radius)",fontFamily:"var(--font)",fontWeight:600,fontSize:14,boxShadow:"var(--shadow)",animation:"slideUp .3s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10,maxWidth:420},children:[s.jsx("span",{children:t==="error"?"✕":t==="success"?"✓":"ℹ"}),s.jsx("span",{style:{flex:1},children:e}),s.jsx("span",{onClick:r,style:{cursor:"pointer",opacity:.7,fontSize:18,lineHeight:1},children:"×"})]})}function Fl({size:e=22,color:t="var(--accent)"}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:t,borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Vo({value:e}){const t=e>85?"var(--danger)":e>60?"var(--accent-amber)":"var(--accent)";return s.jsx("div",{style:{background:"var(--border)",borderRadius:99,height:6,overflow:"hidden",width:"100%"},children:s.jsx("div",{style:{width:`${e}%`,height:"100%",background:t,borderRadius:99,transition:"width .5s ease"}})})}function nf({size:e=44}){return s.jsx("span",{style:{width:e,height:e,borderRadius:"50%",background:"var(--mega-red)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px var(--mega-red-glow)",flexShrink:0,overflow:"hidden",animation:"softPulse 3s ease infinite"},children:s.jsx("img",{src:ke.logoImage,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function u2({jobs:e,history:t}){return!e.length&&!t.length?null:s.jsxs("div",{className:"transfer-panel",children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("strong",{style:{fontSize:13},children:"Transfers"}),s.jsx("span",{style:{fontSize:11,background:"var(--mega-red)",color:"#fff",padding:"2px 8px",borderRadius:99,fontWeight:700},children:e.filter(r=>r.status==="downloading").length})]}),s.jsxs("div",{style:{maxHeight:260,overflow:"auto",padding:12},children:[e.map(r=>s.jsxs("div",{style:{marginBottom:12},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:12,marginBottom:6},children:[s.jsx("span",{style:{color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.name}),s.jsx("span",{style:{color:r.status==="failed"?"var(--danger)":"var(--accent-blue)",fontWeight:800},children:r.status==="failed"?"Failed":`${r.percent}%`})]}),s.jsx(Vo,{value:r.percent})]},r.id)),t.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",fontWeight:800,margin:"10px 0 8px",textTransform:"uppercase"},children:"Recent downloads"}),t.slice(0,4).map(r=>s.jsxs("div",{style:{padding:"8px 0",borderTop:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.name}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:Ji(r.downloadedAt)})]},r.id))]})]})]})}function d2({title:e,message:t,onConfirm:r,onCancel:n,danger:i=!1}){return s.jsx("div",{className:"modal-backdrop",onClick:n,children:s.jsxs("div",{className:"modal-card",onClick:o=>o.stopPropagation(),children:[s.jsx("div",{style:{fontSize:36,textAlign:"center",marginBottom:16},children:i?"⚠️":"❓"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:8},children:e}),s.jsx("p",{style:{color:"var(--text-secondary)",fontFamily:"var(--font)",fontSize:14,textAlign:"center",marginBottom:28,lineHeight:1.5},children:t}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:n,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:r,className:"btn-primary",style:i?{background:"var(--danger)",boxShadow:"0 10px 28px rgba(248,113,113,.25)"}:void 0,children:i?"Delete":"Confirm"})]})]})})}function f2({file:e,onRename:t,onCancel:r}){const[n,i]=y.useState(e.name),o=y.useRef(null);return y.useEffect(()=>{var a;(a=o.current)==null||a.select()},[]),s.jsx("div",{className:"modal-backdrop",onClick:r,children:s.jsxs("div",{className:"modal-card",onClick:a=>a.stopPropagation(),children:[s.jsx("div",{style:{fontSize:32,textAlign:"center",marginBottom:12},children:"✏️"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:20},children:"Rename File"}),s.jsx("input",{ref:o,value:n,onChange:a=>i(a.target.value),onKeyDown:a=>a.key==="Enter"&&t(n),className:"input-field",style:{marginBottom:20}}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:r,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>t(n),className:"btn-primary",children:"Rename"})]})]})})}function Tg({tags:e}){return e!=null&&e.length?s.jsx("div",{style:{display:"flex",gap:4,marginTop:4,flexWrap:"wrap"},children:e.slice(0,3).map(t=>s.jsx("span",{style:{fontSize:10,padding:"2px 6px",borderRadius:6,background:"rgba(240,22,58,.12)",color:"var(--accent)",fontWeight:600},children:t},t))}):null}function ur({label:e,onClick:t,tone:r="neutral",disabled:n=!1}){const i=r==="accent"?"accent":r==="blue"?"blue":"";return s.jsx("button",{type:"button",className:`quick-action-btn ${i}`.trim(),title:e,disabled:n,onClick:o=>{o.stopPropagation(),n||t()},children:e})}function p2({file:e,onDelete:t,onShare:r,onPreview:n,onRename:i,onDownload:o,onMove:a,onCopy:c,onTags:l}){return s.jsxs("div",{className:"file-list-card",children:[s.jsx("div",{style:{fontSize:34,flexShrink:0,width:48,height:48,borderRadius:14,background:"rgba(56,189,248,.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:Us(e.mimeType)}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:16,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:12,marginTop:3},children:[ze(e.size)," · ",Ji(e.createdAt)]}),s.jsx(Tg,{tags:e.tags})]}),s.jsxs("div",{className:"file-list-actions",children:[s.jsx(ur,{label:"Preview",disabled:!xh(e.mimeType),onClick:()=>n(e),tone:"blue"}),s.jsx(ur,{label:"Download",onClick:()=>o(e)}),s.jsx(ur,{label:"Share",onClick:()=>r(e),tone:"accent"}),s.jsx(ur,{label:"Rename",onClick:()=>i(e)}),s.jsx(Cg,{file:e,onMove:a,onCopy:c,onTags:l,onDelete:t})]})]})}function h2({file:e,token:t,onDelete:r,onShare:n,onPreview:i,onRename:o,onDownload:a,onMove:c,onCopy:l,onTags:u}){var f;const d=(f=e.mimeType)==null?void 0:f.startsWith("image/");return s.jsxs("div",{className:"glass-card mega-file-card",style:{borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{height:170,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(217,0,7,.08), rgba(20,20,20,.95))",borderBottom:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[d?s.jsx(ib,{fileId:e.id,token:t,alt:e.name,mimeType:e.mimeType}):s.jsx("div",{style:{fontSize:56,display:"flex"},children:Us(e.mimeType)}),s.jsx("div",{style:{position:"absolute",right:8,bottom:8,fontSize:10,fontWeight:700,background:"#111827",color:"#fff",padding:"2px 6px",borderRadius:6},children:ze(e.size)}),s.jsx("div",{style:{position:"absolute",right:10,top:10},children:s.jsx(Cg,{file:e,onMove:c,onCopy:l,onTags:u,onDelete:r})})]}),s.jsxs("div",{style:{padding:"14px"},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:5},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:11},children:[ze(e.size)," · ",Ji(e.createdAt)]}),s.jsx(Tg,{tags:e.tags}),s.jsxs("div",{className:"grid-actions",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[s.jsx(ur,{label:"Preview",disabled:!xh(e.mimeType),onClick:()=>i(e),tone:"blue"}),s.jsx(ur,{label:"Share",onClick:()=>n(e),tone:"accent"}),s.jsx(ur,{label:"Download",onClick:()=>a(e)}),s.jsx(ur,{label:"Rename",onClick:()=>o(e)})]})]})]})}function g2({account:e,onManage:t}){if(!(e!=null&&e.storageWarning))return null;const r=e.storageWarning==="critical";return s.jsxs("div",{style:{padding:"10px 20px",background:r?"rgba(255,77,77,.12)":"rgba(246,179,71,.12)",borderBottom:`1px solid ${r?"var(--danger)":"var(--accent-amber)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap",fontSize:13,fontFamily:"var(--font)"},children:[s.jsx("span",{children:r?"Storage almost full (95%+).":"Storage over 80% full."}),s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{padding:"6px 14px",fontSize:13},children:"Manage storage"})]})}function m2({username:e,stats:t,storagePercent:r,onUpload:n,onNewFolder:i}){return s.jsxs("div",{className:"mega-drive-header",children:[s.jsx("h1",{style:{fontSize:28,fontWeight:800,color:"var(--text)",marginBottom:20},children:"Cloud drive"}),s.jsxs("div",{className:"mega-drive-actions",children:[s.jsx("button",{type:"button",className:"btn-primary mega-upload-btn",onClick:n,children:"↑ Upload"}),s.jsx("button",{type:"button",className:"btn-secondary mega-folder-btn",onClick:i,children:"+ New folder"})]}),s.jsxs("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:8},children:[t.totalFiles," files · ",t.totalFolders," folders · ",Math.round(r),"% storage used",e?` · @${e}`:""]})]})}function v2({children:e,onNavigate:t,onSignOut:r,onUpgrade:n}){const{account:i,notifications:o,unreadCount:a,markAllRead:c}=jg();return s.jsxs(s.Fragment,{children:[s.jsx(Zb,{account:i,onOpenSettings:()=>t("settings")}),s.jsx(Xb,{account:i,onUpgrade:n}),s.jsx(g2,{account:i,onManage:()=>t("billing")}),s.jsxs("header",{className:"account-header mega-top-bar",style:{position:"sticky",top:0,zIndex:90,borderBottom:"1px solid var(--border)",background:"rgba(0,0,0,.92)",backdropFilter:"blur(16px)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,padding:"0 24px 0 280px"},children:[s.jsx(e2,{notifications:o,unreadCount:a,onMarkAllRead:c}),s.jsx(Jb,{account:i,onNavigate:t,onSignOut:r})]}),e]})}function y2(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?new URLSearchParams(window.location.search).get("token"):null}function of(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/reset-password")?new URLSearchParams(window.location.search).get("token"):null}function x2(){const[e,t]=y.useState(()=>window.innerWidth);return y.useEffect(()=>{const r=()=>t(window.innerWidth);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),{width:e,isMobile:e<=768,isSmall:e<=520}}function w2(){const[e,t]=y.useState(y2),[r,n]=y.useState(of),[i,o]=y.useState(()=>{const w=localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token"),R=of();return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?"verify-email":R?"reset-password":w?"app":"landing"}),[a,c]=y.useState("login"),[l,u]=y.useState(()=>localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token")||""),[d,f]=y.useState(()=>localStorage.getItem("cv_user")||sessionStorage.getItem("cv_user")||""),[p,x]=y.useState(null),[v,k]=y.useState([]),[S,g]=y.useState([]),[h,m]=y.useState({totalFiles:0,storageUsed:0,storageQuota:1024*1024*1024,totalFolders:0}),[b,_]=y.useState(null),[C,I]=y.useState([]),[N,D]=y.useState(""),[P,H]=y.useState(!1),[te,pe]=y.useState(0),[we,Ee]=y.useState(null),[Ce,be]=y.useState([]),[T,L]=y.useState(()=>{try{return JSON.parse(localStorage.getItem("cv_downloadHistory")||"[]")}catch{return[]}}),[M,K]=y.useState(null),[re,We]=y.useState(null),[Ie,Jt]=y.useState(""),[wt,me]=y.useState(!1),[Hn,bt]=y.useState(!1),[ue,Nt]=y.useState(()=>localStorage.getItem("cv_viewMode")||"list"),[Xt,Gn]=y.useState("all"),[Zt,no]=y.useState(()=>localStorage.getItem("cv_theme")||"dark"),[Ir,lt]=y.useState(null),[Yn,en]=y.useState(null),[tn,jr]=y.useState(!1),[$,et]=y.useState("drive"),[Qn,j]=y.useState("createdAt"),[se,Tr]=y.useState("desc"),[Y,Kn]=y.useState(""),[Gs,Rg]=y.useState([]),[Ng,Pg]=y.useState(1),[Ag,Og]=y.useState(!1),[io,qn]=y.useState(!1),[Lg,Mg]=y.useState([]),[zg,Dg]=y.useState([]),[Fg,Ug]=y.useState([]),[Kc,Bg]=y.useState(null),[rn,Jn]=y.useState(null),[Ys,qc]=y.useState(null),[Qs,Ks]=y.useState(null),[Jc,Wg]=y.useState("user"),[Xc,$g]=y.useState([]),[Zc,Vg]=y.useState(null),[Pt,Rr]=y.useState(null),[Hg,Gg]=y.useState([]),[Yg,Qg]=y.useState([]),[Kg,qg]=y.useState([]),qs=Yb(N,400),{isMobile:oo,isSmall:Jg}=x2(),Xn=y.useRef(),eu=y.useRef(),J=y.useCallback((w,R="info")=>K({msg:w,type:R}),[]),Q=y.useCallback((w,R)=>pt(w,R,l),[l]),Le=y.useCallback(async(w=1,R=!1)=>{var B,V;if(l){qn(!0);try{if($==="trash"){const tt=await Q("/trash");Dg(Pr(tt,"files")),Ug(Pr(tt,"folders")),qn(!1);return}if($==="admin"){const[tt,vm]=await Promise.all([Q("/admin/users?limit=50"),Q("/admin/analytics").catch(()=>null)]);$g(Pr(tt,"users")),Vg(vm),qn(!1);return}if($==="dashboard"){const tt=await Q("/storage/usage");Bg(tt),m({totalFiles:tt.fileCount??0,storageUsed:tt.storageUsed??0,storageQuota:tt.storageQuota??1024*1024*1024,totalFolders:tt.folderCount??0}),qn(!1);return}const W=new URLSearchParams;b&&W.set("folderId",b),qs&&W.set("search",qs),Y&&W.set("tag",Y),W.set("sortBy",Qn),W.set("sortOrder",se),W.set("page",String(w)),W.set("limit","30");const[q,ct,Nr,Xs,mm]=await Promise.all([Q(`/files?${W}`),Q(`/folders?${b?`parentId=${b}`:""}`),Q("/storage/usage"),Q("/files/tags").catch(()=>({tags:[]})),Q("/folders?all=true").catch(()=>({folders:[]}))]),Zs=Pr(q,"files"),au=Pr(ct,"folders");k(R?tt=>[...tt,...Zs]:Zs),g(au),Rg((Xs==null?void 0:Xs.tags)||[]),Mg(Pr(mm,"folders")),Og((((B=q==null?void 0:q.pagination)==null?void 0:B.page)||1)<(((V=q==null?void 0:q.pagination)==null?void 0:V.totalPages)||1)),Pg(w),m({totalFiles:Nr.fileCount??Zs.length,storageUsed:Nr.storageUsed??0,storageQuota:Nr.storageQuota??1024*1024*1024,totalFolders:Nr.folderCount??au.length})}catch(W){console.error("Refresh failed:",W);const q=W.message.toLowerCase();q.includes("credential")||q.includes("unauthorized")||q.includes("token")?(localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),u(""),f(""),o("landing")):J(W.message,"error")}qn(!1)}},[l,b,qs,Y,Qn,se,$,Q,J]);y.useEffect(()=>{Le(1,!1)},[Le]),y.useEffect(()=>{Q("/users/me").then(w=>Wg((w==null?void 0:w.role)||"user")).catch(()=>{})},[l,Q]),y.useEffect(()=>{if(!l||$==="drive"||$==="trash"||$==="dashboard"||$==="admin")return;(async()=>{try{if($==="recent"){const R=await Q("/dashboard");Gg(R.recentFiles||[])}else if($==="starred"){const R=await Q("/files?isStarred=true&limit=50");Qg(Pr(R,"files"))}else if($==="shared"){const R=await Q("/dashboard"),B=[...R.sharedWithMe||[],...R.sharedByMe||[]].map(V=>V.file||V);qg(B.filter(Boolean))}}catch{}})()},[l,$,Q]);const Xg=w=>{Rr(w),w==="dashboard"&&et("dashboard"),w==="billing"&&Rr("billing")};y.useEffect(()=>{localStorage.setItem("cv_viewMode",ue)},[ue]),y.useEffect(()=>{localStorage.setItem("cv_theme",Zt)},[Zt]),y.useEffect(()=>{const w=R=>{var B;(B=R.detail)!=null&&B.token&&u(R.detail.token)};return window.addEventListener("cv-token-refreshed",w),()=>window.removeEventListener("cv-token-refreshed",w)},[]);const Zg=(w,R,B,V,W=!0)=>{if(!w&&(V!=null&&V.email)){x(V),o("verify-email");return}if(!w)return;const q=W?localStorage:sessionStorage,ct=W?sessionStorage:localStorage;q.setItem("cv_token",w),ct.removeItem("cv_token"),R&&q.setItem("cv_refreshToken",R),ct.removeItem("cv_refreshToken");const Nr=typeof B=="string"?B:(V==null?void 0:V.fullName)||(V==null?void 0:V.email);q.setItem("cv_user",Nr||""),ct.removeItem("cv_user"),V!=null&&V.avatarUrl&&q.setItem("cv_avatar",V.avatarUrl),u(w),f(Nr||""),o("app")},em=async w=>{const R=`${w.id}-${Date.now()}`;Ee({name:w.name,percent:0}),be(B=>[{id:R,name:w.name,percent:0,status:"downloading"},...B].slice(0,6));try{const B=await Lc(w.id,l,{onProgress:W=>{Ee({name:w.name,percent:W}),be(q=>q.map(ct=>ct.id===R?{...ct,percent:W}:ct))}});K0(B,w.name);const V={id:R,name:w.name,size:w.size,downloadedAt:new Date().toISOString()};L(W=>{const q=[V,...W].slice(0,12);return localStorage.setItem("cv_downloadHistory",JSON.stringify(q)),q}),be(W=>W.map(q=>q.id===R?{...q,percent:100,status:"complete"}:q)),J(`Downloaded "${w.name}"`,"success")}catch(B){be(V=>V.map(W=>W.id===R?{...W,status:"failed"}:W)),J(B.message,"error")}Ee(null)},tu=async()=>{try{const w=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");await Q("/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:w})})}catch{}localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),u(""),f(""),o("landing")},ru=async(w,R,B)=>{if(!l)throw new Error("Authentication token missing. Please log in again.");const V=new FormData;return V.append("file",w),R&&V.append("folderId",R),q0("/files/upload",V,l,B)},tm=async(w,R)=>Q("/folders",{method:"POST",body:JSON.stringify({name:w,parentId:R||null})}),Js=async(w,R=!1)=>{if(!l){J("Please log in again to upload files.","error");return}const B=Array.from(w||[]);if(!B.length)return;H(!0),pe(0);let V=0;try{if(R&&B.some(W=>W.webkitRelativePath))await Qb(B,{baseFolderId:b,createFolder:tm,uploadFile:async(W,q)=>{await ru(W,q,pe),V++},onProgress:pe});else for(let W=0;W<B.length;W++)try{await ru(B[W],b,q=>{const ct=Math.round((W+q/100)/B.length*100);pe(ct)}),V++}catch(q){J(`Failed to upload "${B[W].name}": ${q.message}`,"error")}}finally{H(!1),pe(0),Le(1,!1),V>0&&J(`${V} file(s) uploaded successfully!`,"success")}},rm=w=>{lt({title:"Delete File",message:`Move "${w.name}" to trash? You can restore it later from the Trash view.`,danger:!0,onConfirm:async()=>{lt(null);try{await Q(`/files/${w.id}`,{method:"DELETE"}),Le(),J("File deleted","success")}catch(R){J(R.message,"error")}}})},nm=w=>{lt({title:"Delete Folder",message:`Delete folder "${w.name}" and all its contents? This cannot be undone.`,danger:!0,onConfirm:async()=>{lt(null);try{await Q(`/folders/${w.id}`,{method:"DELETE"}),Le(),J("Folder deleted","success")}catch(R){J(R.message,"error")}}})},im=async(w,R)=>Q(`/files/${w.id}/share`,{method:"POST",body:JSON.stringify(R)}),om=async(w,{targetFolderId:R})=>{try{await Q(`/files/${w.id}/move`,{method:"POST",body:JSON.stringify({targetFolderId:R})}),Jn(null),Le(1,!1),J("File moved","success")}catch(B){J(B.message,"error")}},sm=async(w,{targetFolderId:R,newName:B})=>{try{await Q(`/files/${w.id}/copy`,{method:"POST",body:JSON.stringify({targetFolderId:R,newName:B!==w.name?B:void 0})}),Jn(null),Le(1,!1),J("File copied","success")}catch(V){J(V.message,"error")}},am=async(w,R)=>{try{await Q(`/files/${w.id}`,{method:"PUT",body:JSON.stringify({tags:R})}),Ks(null),Le(1,!1),J("Tags updated","success")}catch(B){J(B.message,"error")}},lm=async w=>{try{await Q(`/trash/files/${w}/restore`,{method:"POST"}),Le(1,!1),J("File restored","success")}catch(R){J(R.message,"error")}},cm=async w=>{try{await Q(`/trash/folders/${w}/restore`,{method:"POST"}),Le(1,!1),J("Folder restored","success")}catch(R){J(R.message,"error")}},um=w=>{lt({title:"Delete forever",message:`"${w.name}" will be permanently deleted. This cannot be undone.`,danger:!0,onConfirm:async()=>{lt(null);try{await Q(`/files/${w.id}/permanent`,{method:"DELETE"}),Le(1,!1),J("File permanently deleted","success")}catch(R){J(R.message,"error")}}})},dm=()=>{lt({title:"Empty trash",message:"All items in trash will be permanently deleted.",danger:!0,onConfirm:async()=>{lt(null);try{await Q("/trash/empty",{method:"POST"}),Le(1,!1),J("Trash emptied","success")}catch(w){J(w.message,"error")}}})},fm=async(w,R)=>{if(!R.trim()||R===w.name){en(null);return}try{await Q(`/files/${w.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R})}),Le(),J("File renamed","success")}catch(B){J(B.message,"error")}en(null)},nu=async()=>{if(Ie.trim()){try{await Q("/folders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Ie,parentId:b})}),Le(),J("Folder created!","success")}catch(w){J(w.message,"error")}Jt(""),me(!1)}},pm=w=>{_(w.id),I(R=>[...R,w]),jr(!1)},iu=w=>{w===-1?(_(null),I([])):(_(C[w].id),I(R=>R.slice(0,w+1)))},hm=w=>{w.preventDefault(),bt(!1),w.dataTransfer.files.length>0&&Js(w.dataTransfer.files)},so=y.useMemo(()=>{const w=yd.find(R=>R.key===Xt);return!w||w.key==="all"?v:v.filter(R=>w.test(R.mimeType||""))},[v,Xt]),ou=h.storageQuota||1024*1024*1024,su=Math.min(100,h.storageUsed/ou*100);if(e)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:$r}),s.jsx(Zd,{token:e,onVerified:()=>{t(null),window.history.replaceState({},"","/"),o("auth"),c("login")},onBack:()=>{t(null),window.history.replaceState({},"","/"),o("auth"),c("login")}})]});if(r)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:$r}),s.jsx(ef,{token:r,onBack:()=>{n(null),window.history.replaceState({},"","/"),o("auth"),c("login")}})]});if(i==="landing"&&!l)return s.jsx(sy,{onGetStarted:()=>{c("register"),o("auth")},onLogin:()=>{c("login"),o("auth")},onSignUp:()=>{c("register"),o("auth")}});if(i==="auth"&&!l)return s.jsx(tb,{initialMode:a,onAuth:Zg,onNeedsVerification:w=>{x(w),o("verify-email")},onBack:()=>o("landing")});if(i==="verify-email"&&!l)return s.jsx(Zd,{email:p==null?void 0:p.email,onVerified:()=>{x(null),o("auth"),c("login")},onBack:()=>{x(null),o("auth"),c("login")}});if(i==="reset-password"&&!l)return s.jsx(ef,{token:r,onSuccess:()=>{n(null),window.history.replaceState({},"","/"),o("auth"),c("login")},onBack:()=>{n(null),o("auth"),c("login")}});if(i==="shared-link")return s.jsx(SharedLinkPage,{token:shareToken});const gm=ue==="grid"?h2:p2;return s.jsx(qb,{token:l,children:s.jsx(v2,{onNavigate:w=>{Rr(null),Xg(w)},onSignOut:tu,onUpgrade:()=>{Rr("billing"),et("drive")},children:s.jsxs("div",{"data-theme":Zt,className:"app-shell",children:[s.jsx("style",{children:$r}),s.jsx("button",{type:"button",className:"mobile-menu-button","aria-label":"Open navigation menu","aria-expanded":tn,onClick:()=>jr(w=>!w),style:{display:"none",position:"fixed",top:16,left:16,zIndex:200,background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:10,width:40,height:40,alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--text)",fontSize:20,...oo?{display:"flex"}:{}},children:"☰"}),tn&&oo&&s.jsx("div",{onClick:()=>jr(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:99}}),s.jsxs("div",{className:`sidebar ${tn?"open":""}`,style:{position:"fixed",left:0,top:0,bottom:0,width:260,background:"var(--bg-sidebar)",borderRight:"1px solid var(--border)",padding:"16px 12px",display:"flex",flexDirection:"column",gap:4,zIndex:100,transition:"transform .35s cubic-bezier(.4,0,.2,1)",...oo?{transform:tn?"translateX(0)":"translateX(-100%)"}:{}},children:[s.jsxs("div",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:10,padding:"4px 8px"},children:[s.jsx(nf,{size:40}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:20,fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em"},children:"Drive"}),s.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:1},children:["@",d]})]})]}),s.jsx("button",{type:"button",onClick:()=>{var w;return(w=Xn.current)==null?void 0:w.click()},className:"btn-primary",style:{minHeight:48,borderRadius:999,fontSize:15,justifyContent:"center",display:"flex",alignItems:"center",gap:8,margin:"0 0 16px"},children:"+ New"}),[{id:"drive",icon:"drive",label:"My Drive"},{id:"recent",icon:"recent",label:"Recent"},{id:"starred",icon:"starred",label:"Starred"},{id:"shared",icon:"shared",label:"Shared"},{id:"dashboard",icon:"usage",label:"Storage"},{id:"trash",icon:"trash",label:"Trash"},{id:"activity",icon:"activity",label:"Activity"},...Jc==="admin"||Jc==="super_admin"?[{id:"admin",icon:"admin",label:"Admin"}]:[]].map(w=>s.jsxs("button",{type:"button",className:`nav-item${$===w.id?" active":""}`,"aria-current":$===w.id?"page":void 0,onClick:()=>{Rr(null),et(w.id),jr(!1),w.id==="drive"&&(_(null),I([]))},children:[s.jsx(r2,{name:w.icon,active:$===w.id}),s.jsx("span",{children:w.label})]},w.id)),s.jsx("div",{style:{borderTop:"1px solid var(--border)",margin:"12px 0 8px"}}),s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1px",marginBottom:8,paddingLeft:4},children:"OVERVIEW"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16},children:[s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:h.totalFiles}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Files"})]}),s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:h.totalFolders}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Folders"})]})]}),s.jsxs("div",{style:{marginTop:"auto"},children:[s.jsxs("div",{style:{marginBottom:16,background:"var(--surface-raised)",borderRadius:14,padding:"14px",border:"1px solid var(--border)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:[s.jsx("span",{style:{fontWeight:600},children:"Free"}),s.jsxs("span",{children:[ze(h.storageUsed)," of ",ze(ou)," used"]})]}),s.jsx(Vo,{value:su}),s.jsx("button",{type:"button",onClick:()=>Rr("billing"),className:"btn-secondary",style:{width:"100%",marginTop:12,minHeight:40,borderRadius:999},children:"Upgrade"})]}),s.jsx("button",{type:"button",onClick:tu,className:"btn-danger",children:"Sign Out"})]})]}),s.jsxs("div",{className:"main-content",style:{marginLeft:oo?0:260,padding:"20px 32px",minHeight:"100vh"},children:[s.jsx(b2,{appPage:Pt,setAppPage:Rr,api:Q,token:l,notify:J,stats:h,usageDetail:Kc,adminUsers:Xc,systemHealth:Zc,loading:io,onRefreshAccount:()=>{},theme:Zt,setTheme:no}),!Pt&&$==="recent"&&s.jsx(y.Suspense,{fallback:s.jsx(zt,{}),children:s.jsx(Ma,{title:"Recent files",files:Hg,emptyMessage:"No recent files yet.",onBack:()=>et("drive"),onOpen:We})}),!Pt&&$==="starred"&&s.jsx(y.Suspense,{fallback:s.jsx(zt,{}),children:s.jsx(Ma,{title:"Starred",files:Yg,emptyMessage:"Star files to see them here.",onBack:()=>et("drive"),onOpen:We})}),!Pt&&$==="shared"&&s.jsx(y.Suspense,{fallback:s.jsx(zt,{}),children:s.jsx(Ma,{title:"Shared with you",files:Kg,emptyMessage:"Nothing shared yet.",onBack:()=>et("drive"),onOpen:We})}),!Pt&&$==="activity"&&s.jsx(y.Suspense,{fallback:s.jsx(zt,{}),children:s.jsx(l2,{api:Q,onBack:()=>et("drive")})}),!Pt&&$==="trash"&&s.jsx(ob,{trashedFiles:zg,trashedFolders:Fg,loading:io,onRestoreFile:lm,onRestoreFolder:cm,onPermanentDelete:um,onEmptyTrash:dm,onBack:()=>et("drive")}),!Pt&&$==="dashboard"&&s.jsx(Fb,{stats:h,usage:Kc,onBack:()=>et("drive")}),!Pt&&$==="admin"&&s.jsx(Ub,{users:Xc,systemHealth:Zc,loading:io,onBack:()=>et("drive")}),!Pt&&$==="drive"&&s.jsxs(s.Fragment,{children:[s.jsx(m2,{username:d,stats:h,storagePercent:su,onUpload:()=>{var w;return(w=Xn.current)==null?void 0:w.click()},onNewFolder:()=>me(!0)}),s.jsxs("div",{className:"drive-toolbar",style:{flexDirection:"column",alignItems:"stretch",gap:16},children:[s.jsxs("div",{className:"mega-search-bar drive-search",children:[s.jsx("span",{className:"search-icon","aria-hidden":"true",children:"🔍"}),s.jsx("input",{className:"input-field",placeholder:"Search Cloud drive...",value:N,onChange:w=>D(w.target.value),style:{width:"100%",padding:"12px 20px 12px 44px",borderRadius:999,background:"var(--bg-card)",border:"1px solid var(--border)"}})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"icon-btn",title:Zt==="dark"?"Light mode":"Dark mode",onClick:()=>no(w=>w==="dark"?"light":"dark"),children:Zt==="dark"?"☀":"🌙"}),s.jsxs("div",{className:"view-toggle",children:[s.jsx("button",{type:"button",onClick:()=>Nt("list"),className:`view-toggle-btn${ue==="list"?" active":""}`,children:"☰"}),s.jsx("button",{type:"button",onClick:()=>Nt("grid"),className:`view-toggle-btn${ue==="grid"?" active":""}`,children:"▦"})]}),$==="drive"&&s.jsxs("div",{className:"drive-actions",style:{marginLeft:"auto"},children:[s.jsx("button",{type:"button",onClick:()=>me(w=>!w),className:"btn-secondary mega-folder-btn",children:"New folder"}),s.jsx("button",{type:"button",onClick:()=>{var w;return(w=Xn.current)==null?void 0:w.click()},className:"btn-primary mega-upload-btn",children:"Upload"}),s.jsx("button",{type:"button",onClick:()=>{var w;return(w=eu.current)==null?void 0:w.click()},className:"btn-secondary",children:"Folder"}),s.jsx("input",{ref:Xn,type:"file",multiple:!0,hidden:!0,onChange:w=>{Js(w.target.files),w.target.value=""}}),s.jsx("input",{ref:eu,type:"file",multiple:!0,webkitdirectory:"",hidden:!0,onChange:w=>{Js(w.target.files,!0),w.target.value=""}})]})]})]}),$==="drive"&&s.jsxs("div",{className:"drive-sortbar",children:[s.jsxs("select",{value:Qn,onChange:w=>j(w.target.value),className:"select-field",children:[s.jsx("option",{value:"createdAt",children:"Date"}),s.jsx("option",{value:"name",children:"Name"}),s.jsx("option",{value:"size",children:"Size"}),s.jsx("option",{value:"updatedAt",children:"Modified"})]}),s.jsxs("select",{value:se,onChange:w=>Tr(w.target.value),className:"select-field",children:[s.jsx("option",{value:"desc",children:"Descending"}),s.jsx("option",{value:"asc",children:"Ascending"})]}),Gs.length>0&&s.jsxs("select",{value:Y,onChange:w=>Kn(w.target.value),className:"select-field",style:{gridColumn:Jg?"1 / -1":void 0},children:[s.jsx("option",{value:"",children:"All tags"}),Gs.map(w=>s.jsx("option",{value:w,children:w},w))]})]}),$==="drive"&&s.jsx("div",{className:"filter-chips",children:yd.map(w=>s.jsxs("button",{type:"button",onClick:()=>Gn(w.key),className:`filter-chip${Xt===w.key?" active":""}`,children:[s.jsx("span",{children:w.icon})," ",w.label]},w.key))}),$==="drive"&&wt&&s.jsxs("div",{className:"new-folder-row",style:{display:"flex",gap:10,marginBottom:20,animation:"fadeIn .2s ease"},children:[s.jsx("input",{className:"input-field",placeholder:"Folder name…",value:Ie,onChange:w=>Jt(w.target.value),onKeyDown:w=>w.key==="Enter"&&nu(),style:{width:260},autoFocus:!0}),s.jsx("button",{type:"button",onClick:nu,className:"btn-primary",children:"Create"}),s.jsx("button",{type:"button",onClick:()=>me(!1),className:"btn-secondary",children:"Cancel"})]}),s.jsxs("div",{className:"breadcrumb-row",style:{alignItems:"center",gap:8,marginBottom:20,fontSize:14,color:"var(--text-muted)"},children:[s.jsxs("span",{onClick:()=>iu(-1),className:"breadcrumb-link",style:{color:b?"var(--text-secondary)":"var(--accent)"},children:[ke.logo," Home"]}),C.map((w,R)=>s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--text-muted)"},children:"›"}),s.jsx("span",{onClick:()=>iu(R),className:"breadcrumb-link",style:{color:R===C.length-1?"var(--accent)":"var(--text-secondary)"},children:w.name})]},w.id))]}),P&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(240,22,58,.24)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(Fl,{size:14})," Uploading…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent)"},children:[te,"%"]})]}),s.jsx(Vo,{value:te})]}),we&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(64,144,255,.3)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(Fl,{size:14,color:"var(--accent-blue)"})," Downloading ",we.name,"…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent-blue)"},children:[we.percent,"%"]})]}),s.jsx(Vo,{value:we.percent})]}),s.jsx("div",{onDragOver:w=>{w.preventDefault(),bt(!0)},onDragLeave:()=>bt(!1),onDrop:hm,className:`drop-zone${Hn?" drag-over":""}`,children:Hn?s.jsx("span",{style:{color:"var(--accent)",fontWeight:700,fontSize:16},children:"⬇ Drop files here to upload"}):s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:32,marginBottom:8},children:"📤"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:700,marginBottom:4},children:"Drag & drop files or folders"}),s.jsx("div",{style:{fontSize:13},children:"or use the Upload button above"})]})}),S.length>0&&s.jsxs("div",{style:{marginBottom:28},children:[s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px",marginBottom:12},children:"FOLDERS"}),s.jsx("div",{className:"folder-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:S.map(w=>s.jsx(k2,{folder:w,onOpen:pm,onDelete:nm},w.id))})]}),s.jsxs("div",{children:[s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:s.jsxs("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px"},children:["FILES ",so.length>0&&s.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:500},children:["(",so.length,")"]})]})}),io?s.jsx(Gb,{count:6,grid:ue==="grid"}):so.length===0?s.jsxs("div",{className:"glass-card empty-state",style:{textAlign:"center",padding:"72px 32px",borderRadius:"var(--radius-lg)",border:"1.5px dashed var(--border)",animation:"fadeIn .3s ease"},children:[s.jsx("div",{style:{width:88,height:88,margin:"0 auto 20px",borderRadius:24,background:"var(--gradient-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"var(--glow)"},children:s.jsx(nf,{size:48})}),s.jsx("div",{style:{fontWeight:800,fontSize:20,marginBottom:8,color:"var(--text)"},children:Xt!=="all"?"No matching files":"No files in My Drive yet"}),s.jsx("div",{style:{fontSize:14,color:"var(--text-muted)",marginBottom:24,maxWidth:360,margin:"0 auto 24px"},children:Xt!=="all"?"Try a different filter or upload new files.":"Upload photos, documents, and more. Everything stays secure in your drive."}),Xt==="all"&&s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"btn-primary",onClick:()=>{var w;return(w=Xn.current)==null?void 0:w.click()},children:"Upload your first file"}),s.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>me(!0),children:"Create folder"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`file-grid${ue==="grid"?" grid-view":""}`,style:{display:ue==="grid"?"grid":"flex",gridTemplateColumns:ue==="grid"?"repeat(auto-fill, minmax(250px, 1fr))":void 0,flexDirection:ue==="list"?"column":void 0,gap:ue==="grid"?12:8},children:so.map(w=>s.jsx(gm,{file:w,token:l,onDelete:rm,onShare:R=>qc(R),onPreview:We,onRename:en,onDownload:em,onMove:R=>Jn({file:R,mode:"move"}),onCopy:R=>Jn({file:R,mode:"copy"}),onTags:Ks},w.id))}),Ag&&s.jsx("button",{type:"button",onClick:()=>Le(Ng+1,!0),className:"load-more-btn",children:"Load more files"})]})]})]})]}),re&&s.jsx(nb,{file:re,token:l,onClose:()=>We(null)}),rn&&s.jsx(lb,{file:rn.file,mode:rn.mode,folders:Kb(Lg),currentFolderId:b,onCancel:()=>Jn(null),onConfirm:w=>rn.mode==="move"?om(rn.file,w):sm(rn.file,w)}),Qs&&s.jsx(ub,{file:Qs,allTags:Gs,onCancel:()=>Ks(null),onSave:w=>am(Qs,w)}),Ys&&s.jsx(Db,{file:Ys,onCancel:()=>qc(null),onShare:w=>im(Ys,w)}),Ir&&s.jsx(d2,{title:Ir.title,message:Ir.message,danger:Ir.danger,onConfirm:Ir.onConfirm,onCancel:()=>lt(null)}),Yn&&s.jsx(f2,{file:Yn,onRename:w=>fm(Yn,w),onCancel:()=>en(null)}),s.jsx(u2,{jobs:Ce,history:T}),M&&s.jsx(c2,{msg:M.msg,type:M.type,onClose:()=>K(null)})]})})})}function b2({appPage:e,setAppPage:t,api:r,notify:n,stats:i,usageDetail:o,adminUsers:a,systemHealth:c,loading:l,onRefreshAccount:u,theme:d,setTheme:f}){const{account:p,refreshAll:x}=jg();if(!e)return null;const v=()=>t(null);return e==="profile"?s.jsx(y.Suspense,{fallback:s.jsx(zt,{}),children:s.jsx(n2,{account:p,onBack:v})}):e==="settings"?s.jsx(y.Suspense,{fallback:s.jsx(zt,{}),children:s.jsx(i2,{account:p,api:r,onBack:v,onUpdated:()=>x(),notify:n,theme:d,onThemeChange:f})}):e==="security"?s.jsx(y.Suspense,{fallback:s.jsx(zt,{}),children:s.jsx(o2,{api:r,account:p,onBack:v,notify:n})}):e==="billing"?s.jsx(y.Suspense,{fallback:s.jsx(zt,{}),children:s.jsx(s2,{account:p,api:r,onBack:v,notify:n,onUpdated:()=>x()})}):e==="help"?s.jsx(y.Suspense,{fallback:s.jsx(zt,{}),children:s.jsx(a2,{onBack:v})}):null}function k2({folder:e,onOpen:t,onDelete:r}){const[n,i]=y.useState(!1);return s.jsxs("div",{className:"folder-card",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>t(e),children:[s.jsx("span",{style:{fontSize:24},children:"📁"}),s.jsx("div",{style:{flex:1,minWidth:0},children:s.jsx("div",{style:{fontWeight:600,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},children:e.name})}),s.jsx("button",{onClick:o=>{o.stopPropagation(),r(e)},style:{background:"none",border:"none",color:"rgba(255,100,100,.3)",cursor:"pointer",fontSize:14,padding:4,borderRadius:6,opacity:n?1:0,transition:"opacity .15s"},children:"🗑"})]})}yh(document.getElementById("root")).render(s.jsx(y.StrictMode,{children:s.jsx(w2,{})}));export{ke as B,ey as P,S2 as S,ze as a,Us as f,s as j,y as r,Ji as t};
