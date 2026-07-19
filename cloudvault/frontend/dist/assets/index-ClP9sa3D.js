(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function Sm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cf={exports:{}},Es={},df={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),_m=Symbol.for("react.portal"),Cm=Symbol.for("react.fragment"),Em=Symbol.for("react.strict_mode"),Im=Symbol.for("react.profiler"),jm=Symbol.for("react.provider"),Tm=Symbol.for("react.context"),Rm=Symbol.for("react.forward_ref"),Nm=Symbol.for("react.suspense"),Pm=Symbol.for("react.memo"),Am=Symbol.for("react.lazy"),dd=Symbol.iterator;function Om(e){return e===null||typeof e!="object"?null:(e=dd&&e[dd]||e["@@iterator"],typeof e=="function"?e:null)}var uf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ff=Object.assign,pf={};function Un(e,t,r){this.props=e,this.context=t,this.refs=pf,this.updater=r||uf}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hf(){}hf.prototype=Un.prototype;function Wl(e,t,r){this.props=e,this.context=t,this.refs=pf,this.updater=r||uf}var $l=Wl.prototype=new hf;$l.constructor=Wl;ff($l,Un.prototype);$l.isPureReactComponent=!0;var ud=Array.isArray,gf=Object.prototype.hasOwnProperty,Vl={current:null},mf={key:!0,ref:!0,__self:!0,__source:!0};function vf(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)gf.call(t,n)&&!mf.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)i[n]===void 0&&(i[n]=c[n]);return{$$typeof:Vi,type:e,key:o,ref:a,props:i,_owner:Vl.current}}function Lm(e,t){return{$$typeof:Vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vi}function zm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var fd=/\/+/g;function ra(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zm(""+e.key):t.toString(36)}function To(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Vi:case _m:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+ra(a,0):n,ud(i)?(r="",e!=null&&(r=e.replace(fd,"$&/")+"/"),To(i,t,r,"",function(d){return d})):i!=null&&(Hl(i)&&(i=Lm(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(fd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",ud(e))for(var c=0;c<e.length;c++){o=e[c];var l=n+ra(o,c);a+=To(o,t,r,l,i)}else if(l=Om(e),typeof l=="function")for(e=l.call(e),c=0;!(o=e.next()).done;)o=o.value,l=n+ra(o,c++),a+=To(o,t,r,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function lo(e,t,r){if(e==null)return e;var n=[],i=0;return To(e,n,"","",function(o){return t.call(r,o,i++)}),n}function Mm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Ro={transition:null},Dm={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:Vl};function yf(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:lo,forEach:function(e,t,r){lo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return lo(e,function(){t++}),t},toArray:function(e){return lo(e,function(t){return t})||[]},only:function(e){if(!Hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Un;W.Fragment=Cm;W.Profiler=Im;W.PureComponent=Wl;W.StrictMode=Em;W.Suspense=Nm;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dm;W.act=yf;W.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ff({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Vl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)gf.call(t,l)&&!mf.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];n.children=c}return{$$typeof:Vi,type:e.type,key:i,ref:o,props:n,_owner:a}};W.createContext=function(e){return e={$$typeof:Tm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jm,_context:e},e.Consumer=e};W.createElement=vf;W.createFactory=function(e){var t=vf.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Rm,render:e}};W.isValidElement=Hl;W.lazy=function(e){return{$$typeof:Am,_payload:{_status:-1,_result:e},_init:Mm}};W.memo=function(e,t){return{$$typeof:Pm,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Ro.transition;Ro.transition={};try{e()}finally{Ro.transition=t}};W.unstable_act=yf;W.useCallback=function(e,t){return Fe.current.useCallback(e,t)};W.useContext=function(e){return Fe.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};W.useEffect=function(e,t){return Fe.current.useEffect(e,t)};W.useId=function(){return Fe.current.useId()};W.useImperativeHandle=function(e,t,r){return Fe.current.useImperativeHandle(e,t,r)};W.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Fe.current.useMemo(e,t)};W.useReducer=function(e,t,r){return Fe.current.useReducer(e,t,r)};W.useRef=function(e){return Fe.current.useRef(e)};W.useState=function(e){return Fe.current.useState(e)};W.useSyncExternalStore=function(e,t,r){return Fe.current.useSyncExternalStore(e,t,r)};W.useTransition=function(){return Fe.current.useTransition()};W.version="18.3.1";df.exports=W;var y=df.exports;const me=Sm(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm=y,Um=Symbol.for("react.element"),Bm=Symbol.for("react.fragment"),Wm=Object.prototype.hasOwnProperty,$m=Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vm={key:!0,ref:!0,__self:!0,__source:!0};function xf(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Wm.call(t,n)&&!Vm.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Um,type:e,key:o,ref:a,props:i,_owner:$m.current}}Es.Fragment=Bm;Es.jsx=xf;Es.jsxs=xf;cf.exports=Es;var s=cf.exports,wf={exports:{}},Xe={},bf={exports:{}},kf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,L){var M=N.length;N.push(L);e:for(;0<M;){var K=M-1>>>1,te=N[K];if(0<i(te,L))N[K]=L,N[M]=te,M=K;else break e}}function r(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var L=N[0],M=N.pop();if(M!==L){N[0]=M;e:for(var K=0,te=N.length,ft=te>>>1;K<ft;){var je=2*(K+1)-1,pt=N[je],et=je+1,Te=N[et];if(0>i(pt,M))et<te&&0>i(Te,pt)?(N[K]=Te,N[et]=M,K=et):(N[K]=pt,N[je]=M,K=je);else if(et<te&&0>i(Te,M))N[K]=Te,N[et]=M,K=et;else break e}}return L}function i(N,L){var M=N.sortIndex-L.sortIndex;return M!==0?M:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var l=[],d=[],u=1,f=null,p=3,x=!1,v=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var L=r(d);L!==null;){if(L.callback===null)n(d);else if(L.startTime<=N)n(d),L.sortIndex=L.expirationTime,t(l,L);else break;L=r(d)}}function k(N){if(b=!1,g(N),!v)if(r(l)!==null)v=!0,pe(S);else{var L=r(d);L!==null&&Se(k,L.startTime-N)}}function S(N,L){v=!1,b&&(b=!1,m(R),R=-1),x=!0;var M=p;try{for(g(L),f=r(l);f!==null&&(!(f.expirationTime>L)||N&&!D());){var K=f.callback;if(typeof K=="function"){f.callback=null,p=f.priorityLevel;var te=K(f.expirationTime<=L);L=e.unstable_now(),typeof te=="function"?f.callback=te:f===r(l)&&n(l),g(L)}else n(l);f=r(l)}if(f!==null)var ft=!0;else{var je=r(d);je!==null&&Se(k,je.startTime-L),ft=!1}return ft}finally{f=null,p=M,x=!1}}var C=!1,I=null,R=-1,F=5,j=-1;function D(){return!(e.unstable_now()-j<F)}function Z(){if(I!==null){var N=e.unstable_now();j=N;var L=!0;try{L=I(!0,N)}finally{L?xe():(C=!1,I=null)}}else C=!1}var xe;if(typeof h=="function")xe=function(){h(Z)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,ge=Ie.port2;Ie.port1.onmessage=Z,xe=function(){ge.postMessage(null)}}else xe=function(){_(Z,0)};function pe(N){I=N,C||(C=!0,xe())}function Se(N,L){R=_(function(){N(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,pe(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var M=p;p=L;try{return N()}finally{p=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=p;p=N;try{return L()}finally{p=M}},e.unstable_scheduleCallback=function(N,L,M){var K=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?K+M:K):M=K,N){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=M+te,N={id:u++,callback:L,priorityLevel:N,startTime:M,expirationTime:te,sortIndex:-1},M>K?(N.sortIndex=M,t(d,N),r(l)===null&&N===r(d)&&(b?(m(R),R=-1):b=!0,Se(k,M-K))):(N.sortIndex=te,t(l,N),v||x||(v=!0,pe(S))),N},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(N){var L=p;return function(){var M=p;p=L;try{return N.apply(this,arguments)}finally{p=M}}}})(kf);bf.exports=kf;var Hm=bf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm=y,Je=Hm;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sf=new Set,_i={};function Xr(e,t){Rn(e,t),Rn(e+"Capture",t)}function Rn(e,t){for(_i[e]=t,e=0;e<t.length;e++)Sf.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fa=Object.prototype.hasOwnProperty,Ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pd={},hd={};function Qm(e){return Fa.call(hd,e)?!0:Fa.call(pd,e)?!1:Ym.test(e)?hd[e]=!0:(pd[e]=!0,!1)}function Km(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qm(e,t,r,n){if(t===null||typeof t>"u"||Km(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gl=/[\-:]([a-z])/g;function Yl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gl,Yl);Ee[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gl,Yl);Ee[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gl,Yl);Ee[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ql(e,t,r,n){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qm(t,r,i,n)&&(r=null),n||i===null?Qm(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Zt=Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),an=Symbol.for("react.portal"),ln=Symbol.for("react.fragment"),Kl=Symbol.for("react.strict_mode"),Ua=Symbol.for("react.profiler"),_f=Symbol.for("react.provider"),Cf=Symbol.for("react.context"),ql=Symbol.for("react.forward_ref"),Ba=Symbol.for("react.suspense"),Wa=Symbol.for("react.suspense_list"),Jl=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),Ef=Symbol.for("react.offscreen"),gd=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=gd&&e[gd]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,na;function li(e){if(na===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);na=t&&t[1]||""}return`
`+na+e}var ia=!1;function oa(e,t){if(!e||ia)return"";ia=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,c=o.length-1;1<=a&&0<=c&&i[a]!==o[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==o[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==o[c]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=c);break}}}finally{ia=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?li(e):""}function Jm(e){switch(e.tag){case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return e=oa(e.type,!1),e;case 11:return e=oa(e.type.render,!1),e;case 1:return e=oa(e.type,!0),e;default:return""}}function $a(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ln:return"Fragment";case an:return"Portal";case Ua:return"Profiler";case Kl:return"StrictMode";case Ba:return"Suspense";case Wa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cf:return(e.displayName||"Context")+".Consumer";case _f:return(e._context.displayName||"Context")+".Provider";case ql:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jl:return t=e.displayName||null,t!==null?t:$a(e.type)||"Memo";case nr:t=e._payload,e=e._init;try{return $a(e(t))}catch{}}return null}function Xm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $a(t);case 8:return t===Kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function If(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zm(e){var t=If(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function uo(e){e._valueTracker||(e._valueTracker=Zm(e))}function jf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=If(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Va(e,t){var r=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function md(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=kr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tf(e,t){t=t.checked,t!=null&&Ql(e,"checked",t,!1)}function Ha(e,t){Tf(e,t);var r=kr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ga(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ga(e,t.type,kr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vd(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ga(e,t,r){(t!=="number"||Go(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ci=Array.isArray;function wn(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+kr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ya(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yd(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(ci(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:kr(r)}}function Rf(e,t){var r=kr(t.value),n=kr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function xd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fo,Pf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ci(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ev=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){ev.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function Af(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function Of(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Af(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var tv=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ka(e,t){if(t){if(tv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function qa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ja=null;function Xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xa=null,bn=null,kn=null;function wd(e){if(e=Yi(e)){if(typeof Xa!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Ns(t),Xa(e.stateNode,e.type,t))}}function Lf(e){bn?kn?kn.push(e):kn=[e]:bn=e}function zf(){if(bn){var e=bn,t=kn;if(kn=bn=null,wd(e),t)for(e=0;e<t.length;e++)wd(t[e])}}function Mf(e,t){return e(t)}function Df(){}var sa=!1;function Ff(e,t,r){if(sa)return e(t,r);sa=!0;try{return Mf(e,t,r)}finally{sa=!1,(bn!==null||kn!==null)&&(Df(),zf())}}function Ei(e,t){var r=e.stateNode;if(r===null)return null;var n=Ns(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var Za=!1;if(Gt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Za=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Za=!1}function rv(e,t,r,n,i,o,a,c,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(u){this.onError(u)}}var pi=!1,Yo=null,Qo=!1,el=null,nv={onError:function(e){pi=!0,Yo=e}};function iv(e,t,r,n,i,o,a,c,l){pi=!1,Yo=null,rv.apply(nv,arguments)}function ov(e,t,r,n,i,o,a,c,l){if(iv.apply(this,arguments),pi){if(pi){var d=Yo;pi=!1,Yo=null}else throw Error(E(198));Qo||(Qo=!0,el=d)}}function Zr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Uf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bd(e){if(Zr(e)!==e)throw Error(E(188))}function sv(e){var t=e.alternate;if(!t){if(t=Zr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return bd(i),e;if(o===n)return bd(i),t;o=o.sibling}throw Error(E(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,c=i.child;c;){if(c===r){a=!0,r=i,n=o;break}if(c===n){a=!0,n=i,r=o;break}c=c.sibling}if(!a){for(c=o.child;c;){if(c===r){a=!0,r=o,n=i;break}if(c===n){a=!0,n=o,r=i;break}c=c.sibling}if(!a)throw Error(E(189))}}if(r.alternate!==n)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function Bf(e){return e=sv(e),e!==null?Wf(e):null}function Wf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wf(e);if(t!==null)return t;e=e.sibling}return null}var $f=Je.unstable_scheduleCallback,kd=Je.unstable_cancelCallback,av=Je.unstable_shouldYield,lv=Je.unstable_requestPaint,fe=Je.unstable_now,cv=Je.unstable_getCurrentPriorityLevel,Zl=Je.unstable_ImmediatePriority,Vf=Je.unstable_UserBlockingPriority,Ko=Je.unstable_NormalPriority,dv=Je.unstable_LowPriority,Hf=Je.unstable_IdlePriority,Is=null,Rt=null;function uv(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Is,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:hv,fv=Math.log,pv=Math.LN2;function hv(e){return e>>>=0,e===0?32:31-(fv(e)/pv|0)|0}var po=64,ho=4194304;function di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qo(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var c=a&~i;c!==0?n=di(c):(o&=a,o!==0&&(n=di(o)))}else a=r&~i,a!==0?n=di(a):o!==0&&(n=di(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-bt(t),i=1<<r,n|=e[r],t&=~i;return n}function gv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mv(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-bt(o),c=1<<a,l=i[a];l===-1?(!(c&r)||c&n)&&(i[a]=gv(c,t)):l<=t&&(e.expiredLanes|=c),o&=~c}}function tl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gf(){var e=po;return po<<=1,!(po&4194240)&&(po=64),e}function aa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Hi(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=r}function vv(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-bt(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function ec(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-bt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var X=0;function Yf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qf,tc,Kf,qf,Jf,rl=!1,go=[],fr=null,pr=null,hr=null,Ii=new Map,ji=new Map,or=[],yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sd(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(t.pointerId)}}function Zn(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Yi(t),t!==null&&tc(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xv(e,t,r,n,i){switch(t){case"focusin":return fr=Zn(fr,e,t,r,n,i),!0;case"dragenter":return pr=Zn(pr,e,t,r,n,i),!0;case"mouseover":return hr=Zn(hr,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Ii.set(o,Zn(Ii.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,ji.set(o,Zn(ji.get(o)||null,e,t,r,n,i)),!0}return!1}function Xf(e){var t=Dr(e.target);if(t!==null){var r=Zr(t);if(r!==null){if(t=r.tag,t===13){if(t=Uf(r),t!==null){e.blockedOn=t,Jf(e.priority,function(){Kf(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ja=n,r.target.dispatchEvent(n),Ja=null}else return t=Yi(r),t!==null&&tc(t),e.blockedOn=r,!1;t.shift()}return!0}function _d(e,t,r){No(e)&&r.delete(t)}function wv(){rl=!1,fr!==null&&No(fr)&&(fr=null),pr!==null&&No(pr)&&(pr=null),hr!==null&&No(hr)&&(hr=null),Ii.forEach(_d),ji.forEach(_d)}function ei(e,t){e.blockedOn===t&&(e.blockedOn=null,rl||(rl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,wv)))}function Ti(e){function t(i){return ei(i,e)}if(0<go.length){ei(go[0],e);for(var r=1;r<go.length;r++){var n=go[r];n.blockedOn===e&&(n.blockedOn=null)}}for(fr!==null&&ei(fr,e),pr!==null&&ei(pr,e),hr!==null&&ei(hr,e),Ii.forEach(t),ji.forEach(t),r=0;r<or.length;r++)n=or[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<or.length&&(r=or[0],r.blockedOn===null);)Xf(r),r.blockedOn===null&&or.shift()}var Sn=Zt.ReactCurrentBatchConfig,Jo=!0;function bv(e,t,r,n){var i=X,o=Sn.transition;Sn.transition=null;try{X=1,rc(e,t,r,n)}finally{X=i,Sn.transition=o}}function kv(e,t,r,n){var i=X,o=Sn.transition;Sn.transition=null;try{X=4,rc(e,t,r,n)}finally{X=i,Sn.transition=o}}function rc(e,t,r,n){if(Jo){var i=nl(e,t,r,n);if(i===null)va(e,t,n,Xo,r),Sd(e,n);else if(xv(i,e,t,r,n))n.stopPropagation();else if(Sd(e,n),t&4&&-1<yv.indexOf(e)){for(;i!==null;){var o=Yi(i);if(o!==null&&Qf(o),o=nl(e,t,r,n),o===null&&va(e,t,n,Xo,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else va(e,t,n,null,r)}}var Xo=null;function nl(e,t,r,n){if(Xo=null,e=Xl(n),e=Dr(e),e!==null)if(t=Zr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Uf(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xo=e,null}function Zf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cv()){case Zl:return 1;case Vf:return 4;case Ko:case dv:return 16;case Hf:return 536870912;default:return 16}default:return 16}}var cr=null,nc=null,Po=null;function ep(){if(Po)return Po;var e,t=nc,r=t.length,n,i="value"in cr?cr.value:cr.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return Po=i.slice(e,1<n?1-n:void 0)}function Ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mo(){return!0}function Cd(){return!1}function Ze(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?mo:Cd,this.isPropagationStopped=Cd,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=Ze(Bn),Gi=ce({},Bn,{view:0,detail:0}),Sv=Ze(Gi),la,ca,ti,js=ce({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(la=e.screenX-ti.screenX,ca=e.screenY-ti.screenY):ca=la=0,ti=e),la)},movementY:function(e){return"movementY"in e?e.movementY:ca}}),Ed=Ze(js),_v=ce({},js,{dataTransfer:0}),Cv=Ze(_v),Ev=ce({},Gi,{relatedTarget:0}),da=Ze(Ev),Iv=ce({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Ze(Iv),Tv=ce({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rv=Ze(Tv),Nv=ce({},Bn,{data:0}),Id=Ze(Nv),Pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ov[e])?!!t[e]:!1}function oc(){return Lv}var zv=ce({},Gi,{key:function(e){if(e.key){var t=Pv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Av[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(e){return e.type==="keypress"?Ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mv=Ze(zv),Dv=ce({},js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=Ze(Dv),Fv=ce({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),Uv=Ze(Fv),Bv=ce({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=Ze(Bv),$v=ce({},js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=Ze($v),Hv=[9,13,27,32],sc=Gt&&"CompositionEvent"in window,hi=null;Gt&&"documentMode"in document&&(hi=document.documentMode);var Gv=Gt&&"TextEvent"in window&&!hi,tp=Gt&&(!sc||hi&&8<hi&&11>=hi),Td=" ",Rd=!1;function rp(e,t){switch(e){case"keyup":return Hv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function Yv(e,t){switch(e){case"compositionend":return np(t);case"keypress":return t.which!==32?null:(Rd=!0,Td);case"textInput":return e=t.data,e===Td&&Rd?null:e;default:return null}}function Qv(e,t){if(cn)return e==="compositionend"||!sc&&rp(e,t)?(e=ep(),Po=nc=cr=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tp&&t.locale!=="ko"?null:t.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kv[e.type]:t==="textarea"}function ip(e,t,r,n){Lf(n),t=Zo(t,"onChange"),0<t.length&&(r=new ic("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var gi=null,Ri=null;function qv(e){gp(e,0)}function Ts(e){var t=fn(e);if(jf(t))return e}function Jv(e,t){if(e==="change")return t}var op=!1;if(Gt){var ua;if(Gt){var fa="oninput"in document;if(!fa){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),fa=typeof Pd.oninput=="function"}ua=fa}else ua=!1;op=ua&&(!document.documentMode||9<document.documentMode)}function Ad(){gi&&(gi.detachEvent("onpropertychange",sp),Ri=gi=null)}function sp(e){if(e.propertyName==="value"&&Ts(Ri)){var t=[];ip(t,Ri,e,Xl(e)),Ff(qv,t)}}function Xv(e,t,r){e==="focusin"?(Ad(),gi=t,Ri=r,gi.attachEvent("onpropertychange",sp)):e==="focusout"&&Ad()}function Zv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ts(Ri)}function e0(e,t){if(e==="click")return Ts(t)}function t0(e,t){if(e==="input"||e==="change")return Ts(t)}function r0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:r0;function Ni(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Fa.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function Od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ld(e,t){var r=Od(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Od(r)}}function ap(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ap(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lp(){for(var e=window,t=Go();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Go(e.document)}return t}function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function n0(e){var t=lp(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ap(r.ownerDocument.documentElement,r)){if(n!==null&&ac(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=Ld(r,o);var a=Ld(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var i0=Gt&&"documentMode"in document&&11>=document.documentMode,dn=null,il=null,mi=null,ol=!1;function zd(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ol||dn==null||dn!==Go(n)||(n=dn,"selectionStart"in n&&ac(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),mi&&Ni(mi,n)||(mi=n,n=Zo(il,"onSelect"),0<n.length&&(t=new ic("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=dn)))}function vo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var un={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},pa={},cp={};Gt&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete un.animationend.animation,delete un.animationiteration.animation,delete un.animationstart.animation),"TransitionEvent"in window||delete un.transitionend.transition);function Rs(e){if(pa[e])return pa[e];if(!un[e])return e;var t=un[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in cp)return pa[e]=t[r];return e}var dp=Rs("animationend"),up=Rs("animationiteration"),fp=Rs("animationstart"),pp=Rs("transitionend"),hp=new Map,Md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(e,t){hp.set(e,t),Xr(t,[e])}for(var ha=0;ha<Md.length;ha++){var ga=Md[ha],o0=ga.toLowerCase(),s0=ga[0].toUpperCase()+ga.slice(1);_r(o0,"on"+s0)}_r(dp,"onAnimationEnd");_r(up,"onAnimationIteration");_r(fp,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(pp,"onTransitionEnd");Rn("onMouseEnter",["mouseout","mouseover"]);Rn("onMouseLeave",["mouseout","mouseover"]);Rn("onPointerEnter",["pointerout","pointerover"]);Rn("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function Dd(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,ov(n,t,void 0,e),e.currentTarget=null}function gp(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var c=n[a],l=c.instance,d=c.currentTarget;if(c=c.listener,l!==o&&i.isPropagationStopped())break e;Dd(i,c,d),o=l}else for(a=0;a<n.length;a++){if(c=n[a],l=c.instance,d=c.currentTarget,c=c.listener,l!==o&&i.isPropagationStopped())break e;Dd(i,c,d),o=l}}}if(Qo)throw e=el,Qo=!1,el=null,e}function ne(e,t){var r=t[dl];r===void 0&&(r=t[dl]=new Set);var n=e+"__bubble";r.has(n)||(mp(t,e,2,!1),r.add(n))}function ma(e,t,r){var n=0;t&&(n|=4),mp(r,e,n,t)}var yo="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[yo]){e[yo]=!0,Sf.forEach(function(r){r!=="selectionchange"&&(a0.has(r)||ma(r,!1,e),ma(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yo]||(t[yo]=!0,ma("selectionchange",!1,t))}}function mp(e,t,r,n){switch(Zf(t)){case 1:var i=bv;break;case 4:i=kv;break;default:i=rc}r=i.bind(null,t,r,e),i=void 0,!Za||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function va(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var c=n.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;c!==null;){if(a=Dr(c),a===null)return;if(l=a.tag,l===5||l===6){n=o=a;continue e}c=c.parentNode}}n=n.return}Ff(function(){var d=o,u=Xl(r),f=[];e:{var p=hp.get(e);if(p!==void 0){var x=ic,v=e;switch(e){case"keypress":if(Ao(r)===0)break e;case"keydown":case"keyup":x=Mv;break;case"focusin":v="focus",x=da;break;case"focusout":v="blur",x=da;break;case"beforeblur":case"afterblur":x=da;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Uv;break;case dp:case up:case fp:x=jv;break;case pp:x=Wv;break;case"scroll":x=Sv;break;case"wheel":x=Vv;break;case"copy":case"cut":case"paste":x=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=jd}var b=(t&4)!==0,_=!b&&e==="scroll",m=b?p!==null?p+"Capture":null:p;b=[];for(var h=d,g;h!==null;){g=h;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,m!==null&&(k=Ei(h,m),k!=null&&b.push(Ai(h,k,g)))),_)break;h=h.return}0<b.length&&(p=new x(p,v,null,r,u),f.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&r!==Ja&&(v=r.relatedTarget||r.fromElement)&&(Dr(v)||v[Yt]))break e;if((x||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,x?(v=r.relatedTarget||r.toElement,x=d,v=v?Dr(v):null,v!==null&&(_=Zr(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=d),x!==v)){if(b=Ed,k="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(b=jd,k="onPointerLeave",m="onPointerEnter",h="pointer"),_=x==null?p:fn(x),g=v==null?p:fn(v),p=new b(k,h+"leave",x,r,u),p.target=_,p.relatedTarget=g,k=null,Dr(u)===d&&(b=new b(m,h+"enter",v,r,u),b.target=g,b.relatedTarget=_,k=b),_=k,x&&v)t:{for(b=x,m=v,h=0,g=b;g;g=on(g))h++;for(g=0,k=m;k;k=on(k))g++;for(;0<h-g;)b=on(b),h--;for(;0<g-h;)m=on(m),g--;for(;h--;){if(b===m||m!==null&&b===m.alternate)break t;b=on(b),m=on(m)}b=null}else b=null;x!==null&&Fd(f,p,x,b,!1),v!==null&&_!==null&&Fd(f,_,v,b,!0)}}e:{if(p=d?fn(d):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var S=Jv;else if(Nd(p))if(op)S=t0;else{S=Zv;var C=Xv}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=e0);if(S&&(S=S(e,d))){ip(f,S,r,u);break e}C&&C(e,p,d),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Ga(p,"number",p.value)}switch(C=d?fn(d):window,e){case"focusin":(Nd(C)||C.contentEditable==="true")&&(dn=C,il=d,mi=null);break;case"focusout":mi=il=dn=null;break;case"mousedown":ol=!0;break;case"contextmenu":case"mouseup":case"dragend":ol=!1,zd(f,r,u);break;case"selectionchange":if(i0)break;case"keydown":case"keyup":zd(f,r,u)}var I;if(sc)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else cn?rp(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(tp&&r.locale!=="ko"&&(cn||R!=="onCompositionStart"?R==="onCompositionEnd"&&cn&&(I=ep()):(cr=u,nc="value"in cr?cr.value:cr.textContent,cn=!0)),C=Zo(d,R),0<C.length&&(R=new Id(R,e,null,r,u),f.push({event:R,listeners:C}),I?R.data=I:(I=np(r),I!==null&&(R.data=I)))),(I=Gv?Yv(e,r):Qv(e,r))&&(d=Zo(d,"onBeforeInput"),0<d.length&&(u=new Id("onBeforeInput","beforeinput",null,r,u),f.push({event:u,listeners:d}),u.data=I))}gp(f,t)})}function Ai(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Zo(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ei(e,r),o!=null&&n.unshift(Ai(e,o,i)),o=Ei(e,t),o!=null&&n.push(Ai(e,o,i))),e=e.return}return n}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fd(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var c=r,l=c.alternate,d=c.stateNode;if(l!==null&&l===n)break;c.tag===5&&d!==null&&(c=d,i?(l=Ei(r,o),l!=null&&a.unshift(Ai(r,l,c))):i||(l=Ei(r,o),l!=null&&a.push(Ai(r,l,c)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var l0=/\r\n?/g,c0=/\u0000|\uFFFD/g;function Ud(e){return(typeof e=="string"?e:""+e).replace(l0,`
`).replace(c0,"")}function xo(e,t,r){if(t=Ud(t),Ud(e)!==t&&r)throw Error(E(425))}function es(){}var sl=null,al=null;function ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cl=typeof setTimeout=="function"?setTimeout:void 0,d0=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,u0=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(e){return Bd.resolve(null).then(e).catch(f0)}:cl;function f0(e){setTimeout(function(){throw e})}function ya(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Ti(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ti(t)}function gr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),jt="__reactFiber$"+Wn,Oi="__reactProps$"+Wn,Yt="__reactContainer$"+Wn,dl="__reactEvents$"+Wn,p0="__reactListeners$"+Wn,h0="__reactHandles$"+Wn;function Dr(e){var t=e[jt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Yt]||r[jt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Wd(e);e!==null;){if(r=e[jt])return r;e=Wd(e)}return t}e=r,r=e.parentNode}return null}function Yi(e){return e=e[jt]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ns(e){return e[Oi]||null}var ul=[],pn=-1;function Cr(e){return{current:e}}function ie(e){0>pn||(e.current=ul[pn],ul[pn]=null,pn--)}function re(e,t){pn++,ul[pn]=e.current,e.current=t}var Sr={},Oe=Cr(Sr),$e=Cr(!1),Gr=Sr;function Nn(e,t){var r=e.type.contextTypes;if(!r)return Sr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(e){return e=e.childContextTypes,e!=null}function ts(){ie($e),ie(Oe)}function $d(e,t,r){if(Oe.current!==Sr)throw Error(E(168));re(Oe,t),re($e,r)}function vp(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(E(108,Xm(e)||"Unknown",i));return ce({},r,n)}function rs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,Gr=Oe.current,re(Oe,e),re($e,$e.current),!0}function Vd(e,t,r){var n=e.stateNode;if(!n)throw Error(E(169));r?(e=vp(e,t,Gr),n.__reactInternalMemoizedMergedChildContext=e,ie($e),ie(Oe),re(Oe,e)):ie($e),re($e,r)}var Mt=null,Ps=!1,xa=!1;function yp(e){Mt===null?Mt=[e]:Mt.push(e)}function g0(e){Ps=!0,yp(e)}function Er(){if(!xa&&Mt!==null){xa=!0;var e=0,t=X;try{var r=Mt;for(X=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Mt=null,Ps=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(e+1)),$f(Zl,Er),i}finally{X=t,xa=!1}}return null}var hn=[],gn=0,ns=null,is=0,ot=[],st=0,Yr=null,Bt=1,Wt="";function Lr(e,t){hn[gn++]=is,hn[gn++]=ns,ns=e,is=t}function xp(e,t,r){ot[st++]=Bt,ot[st++]=Wt,ot[st++]=Yr,Yr=e;var n=Bt;e=Wt;var i=32-bt(n)-1;n&=~(1<<i),r+=1;var o=32-bt(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,Bt=1<<32-bt(t)+i|r<<i|n,Wt=o+e}else Bt=1<<o|r<<i|n,Wt=e}function lc(e){e.return!==null&&(Lr(e,1),xp(e,1,0))}function cc(e){for(;e===ns;)ns=hn[--gn],hn[gn]=null,is=hn[--gn],hn[gn]=null;for(;e===Yr;)Yr=ot[--st],ot[st]=null,Wt=ot[--st],ot[st]=null,Bt=ot[--st],ot[st]=null}var qe=null,Ke=null,oe=!1,xt=null;function wp(e,t){var r=at(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Hd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ke=gr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Yr!==null?{id:Bt,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=at(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,qe=e,Ke=null,!0):!1;default:return!1}}function fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pl(e){if(oe){var t=Ke;if(t){var r=t;if(!Hd(e,t)){if(fl(e))throw Error(E(418));t=gr(r.nextSibling);var n=qe;t&&Hd(e,t)?wp(n,r):(e.flags=e.flags&-4097|2,oe=!1,qe=e)}}else{if(fl(e))throw Error(E(418));e.flags=e.flags&-4097|2,oe=!1,qe=e}}}function Gd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function wo(e){if(e!==qe)return!1;if(!oe)return Gd(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ll(e.type,e.memoizedProps)),t&&(t=Ke)){if(fl(e))throw bp(),Error(E(418));for(;t;)wp(e,t),t=gr(t.nextSibling)}if(Gd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ke=gr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=qe?gr(e.stateNode.nextSibling):null;return!0}function bp(){for(var e=Ke;e;)e=gr(e.nextSibling)}function Pn(){Ke=qe=null,oe=!1}function dc(e){xt===null?xt=[e]:xt.push(e)}var m0=Zt.ReactCurrentBatchConfig;function ri(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var n=r.stateNode}if(!n)throw Error(E(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var c=i.refs;a===null?delete c[o]:c[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function bo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yd(e){var t=e._init;return t(e._payload)}function kp(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function r(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function n(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=xr(m,h),m.index=0,m.sibling=null,m}function o(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,h,g,k){return h===null||h.tag!==6?(h=Ea(g,m.mode,k),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,k){var S=g.type;return S===ln?u(m,h,g.props.children,k,g.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nr&&Yd(S)===h.type)?(k=i(h,g.props),k.ref=ri(m,h,g),k.return=m,k):(k=Uo(g.type,g.key,g.props,null,m.mode,k),k.ref=ri(m,h,g),k.return=m,k)}function d(m,h,g,k){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Ia(g,m.mode,k),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function u(m,h,g,k,S){return h===null||h.tag!==7?(h=$r(g,m.mode,k,S),h.return=m,h):(h=i(h,g),h.return=m,h)}function f(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ea(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case co:return g=Uo(h.type,h.key,h.props,null,m.mode,g),g.ref=ri(m,null,h),g.return=m,g;case an:return h=Ia(h,m.mode,g),h.return=m,h;case nr:var k=h._init;return f(m,k(h._payload),g)}if(ci(h)||Jn(h))return h=$r(h,m.mode,g,null),h.return=m,h;bo(m,h)}return null}function p(m,h,g,k){var S=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:c(m,h,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case co:return g.key===S?l(m,h,g,k):null;case an:return g.key===S?d(m,h,g,k):null;case nr:return S=g._init,p(m,h,S(g._payload),k)}if(ci(g)||Jn(g))return S!==null?null:u(m,h,g,k,null);bo(m,g)}return null}function x(m,h,g,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(g)||null,c(h,m,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case co:return m=m.get(k.key===null?g:k.key)||null,l(h,m,k,S);case an:return m=m.get(k.key===null?g:k.key)||null,d(h,m,k,S);case nr:var C=k._init;return x(m,h,g,C(k._payload),S)}if(ci(k)||Jn(k))return m=m.get(g)||null,u(h,m,k,S,null);bo(h,k)}return null}function v(m,h,g,k){for(var S=null,C=null,I=h,R=h=0,F=null;I!==null&&R<g.length;R++){I.index>R?(F=I,I=null):F=I.sibling;var j=p(m,I,g[R],k);if(j===null){I===null&&(I=F);break}e&&I&&j.alternate===null&&t(m,I),h=o(j,h,R),C===null?S=j:C.sibling=j,C=j,I=F}if(R===g.length)return r(m,I),oe&&Lr(m,R),S;if(I===null){for(;R<g.length;R++)I=f(m,g[R],k),I!==null&&(h=o(I,h,R),C===null?S=I:C.sibling=I,C=I);return oe&&Lr(m,R),S}for(I=n(m,I);R<g.length;R++)F=x(I,m,R,g[R],k),F!==null&&(e&&F.alternate!==null&&I.delete(F.key===null?R:F.key),h=o(F,h,R),C===null?S=F:C.sibling=F,C=F);return e&&I.forEach(function(D){return t(m,D)}),oe&&Lr(m,R),S}function b(m,h,g,k){var S=Jn(g);if(typeof S!="function")throw Error(E(150));if(g=S.call(g),g==null)throw Error(E(151));for(var C=S=null,I=h,R=h=0,F=null,j=g.next();I!==null&&!j.done;R++,j=g.next()){I.index>R?(F=I,I=null):F=I.sibling;var D=p(m,I,j.value,k);if(D===null){I===null&&(I=F);break}e&&I&&D.alternate===null&&t(m,I),h=o(D,h,R),C===null?S=D:C.sibling=D,C=D,I=F}if(j.done)return r(m,I),oe&&Lr(m,R),S;if(I===null){for(;!j.done;R++,j=g.next())j=f(m,j.value,k),j!==null&&(h=o(j,h,R),C===null?S=j:C.sibling=j,C=j);return oe&&Lr(m,R),S}for(I=n(m,I);!j.done;R++,j=g.next())j=x(I,m,R,j.value,k),j!==null&&(e&&j.alternate!==null&&I.delete(j.key===null?R:j.key),h=o(j,h,R),C===null?S=j:C.sibling=j,C=j);return e&&I.forEach(function(Z){return t(m,Z)}),oe&&Lr(m,R),S}function _(m,h,g,k){if(typeof g=="object"&&g!==null&&g.type===ln&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case co:e:{for(var S=g.key,C=h;C!==null;){if(C.key===S){if(S=g.type,S===ln){if(C.tag===7){r(m,C.sibling),h=i(C,g.props.children),h.return=m,m=h;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nr&&Yd(S)===C.type){r(m,C.sibling),h=i(C,g.props),h.ref=ri(m,C,g),h.return=m,m=h;break e}r(m,C);break}else t(m,C);C=C.sibling}g.type===ln?(h=$r(g.props.children,m.mode,k,g.key),h.return=m,m=h):(k=Uo(g.type,g.key,g.props,null,m.mode,k),k.ref=ri(m,h,g),k.return=m,m=k)}return a(m);case an:e:{for(C=g.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){r(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{r(m,h);break}else t(m,h);h=h.sibling}h=Ia(g,m.mode,k),h.return=m,m=h}return a(m);case nr:return C=g._init,_(m,h,C(g._payload),k)}if(ci(g))return v(m,h,g,k);if(Jn(g))return b(m,h,g,k);bo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(r(m,h.sibling),h=i(h,g),h.return=m,m=h):(r(m,h),h=Ea(g,m.mode,k),h.return=m,m=h),a(m)):r(m,h)}return _}var An=kp(!0),Sp=kp(!1),os=Cr(null),ss=null,mn=null,uc=null;function fc(){uc=mn=ss=null}function pc(e){var t=os.current;ie(os),e._currentValue=t}function hl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function _n(e,t){ss=e,uc=mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(uc!==e)if(e={context:e,memoizedValue:t,next:null},mn===null){if(ss===null)throw Error(E(308));mn=e,ss.dependencies={lanes:0,firstContext:e}}else mn=mn.next=e;return t}var Fr=null;function hc(e){Fr===null?Fr=[e]:Fr.push(e)}function _p(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,hc(t)):(r.next=i.next,i.next=r),t.interleaved=r,Qt(e,n)}function Qt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ir=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,H&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Qt(e,r)}return i=n.interleaved,i===null?(t.next=t,hc(n)):(t.next=i.next,i.next=t),n.interleaved=t,Qt(e,r)}function Oo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ec(e,r)}}function Qd(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function as(e,t,r,n){var i=e.updateQueue;ir=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var l=c,d=l.next;l.next=null,a===null?o=d:a.next=d,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==a&&(c===null?u.firstBaseUpdate=d:c.next=d,u.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,u=d=l=null,c=o;do{var p=c.lane,x=c.eventTime;if((n&p)===p){u!==null&&(u=u.next={eventTime:x,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var v=e,b=c;switch(p=t,x=r,b.tag){case 1:if(v=b.payload,typeof v=="function"){f=v.call(x,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,p=typeof v=="function"?v.call(x,f,p):v,p==null)break e;f=ce({},f,p);break e;case 2:ir=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[c]:p.push(c))}else x={eventTime:x,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(d=u=x,l=f):u=u.next=x,a|=p;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;p=c,c=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Kr|=a,e.lanes=a,e.memoizedState=f}}function Kd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(E(191,i));i.call(n)}}}var Qi={},Nt=Cr(Qi),Li=Cr(Qi),zi=Cr(Qi);function Ur(e){if(e===Qi)throw Error(E(174));return e}function mc(e,t){switch(re(zi,t),re(Li,e),re(Nt,Qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qa(t,e)}ie(Nt),re(Nt,t)}function On(){ie(Nt),ie(Li),ie(zi)}function Ep(e){Ur(zi.current);var t=Ur(Nt.current),r=Qa(t,e.type);t!==r&&(re(Li,e),re(Nt,r))}function vc(e){Li.current===e&&(ie(Nt),ie(Li))}var ae=Cr(0);function ls(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wa=[];function yc(){for(var e=0;e<wa.length;e++)wa[e]._workInProgressVersionPrimary=null;wa.length=0}var Lo=Zt.ReactCurrentDispatcher,ba=Zt.ReactCurrentBatchConfig,Qr=0,le=null,ve=null,be=null,cs=!1,vi=!1,Mi=0,v0=0;function Re(){throw Error(E(321))}function xc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!_t(e[r],t[r]))return!1;return!0}function wc(e,t,r,n,i,o){if(Qr=o,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lo.current=e===null||e.memoizedState===null?b0:k0,e=r(n,i),vi){o=0;do{if(vi=!1,Mi=0,25<=o)throw Error(E(301));o+=1,be=ve=null,t.updateQueue=null,Lo.current=S0,e=r(n,i)}while(vi)}if(Lo.current=ds,t=ve!==null&&ve.next!==null,Qr=0,be=ve=le=null,cs=!1,t)throw Error(E(300));return e}function bc(){var e=Mi!==0;return Mi=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?le.memoizedState=be=e:be=be.next=e,be}function dt(){if(ve===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=be===null?le.memoizedState:be.next;if(t!==null)be=t,ve=e;else{if(e===null)throw Error(E(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},be===null?le.memoizedState=be=e:be=be.next=e}return be}function Di(e,t){return typeof t=="function"?t(e):t}function ka(e){var t=dt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=ve,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var c=a=null,l=null,d=o;do{var u=d.lane;if((Qr&u)===u)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(c=l=f,a=n):l=l.next=f,le.lanes|=u,Kr|=u}d=d.next}while(d!==null&&d!==o);l===null?a=n:l.next=c,_t(n,t.memoizedState)||(We=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,le.lanes|=o,Kr|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Sa(e){var t=dt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);_t(o,t.memoizedState)||(We=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Ip(){}function jp(e,t){var r=le,n=dt(),i=t(),o=!_t(n.memoizedState,i);if(o&&(n.memoizedState=i,We=!0),n=n.queue,kc(Np.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||be!==null&&be.memoizedState.tag&1){if(r.flags|=2048,Fi(9,Rp.bind(null,r,n,i,t),void 0,null),ke===null)throw Error(E(349));Qr&30||Tp(r,t,i)}return i}function Tp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Rp(e,t,r,n){t.value=r,t.getSnapshot=n,Pp(t)&&Ap(e)}function Np(e,t,r){return r(function(){Pp(t)&&Ap(e)})}function Pp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!_t(e,r)}catch{return!0}}function Ap(e){var t=Qt(e,1);t!==null&&kt(t,e,1,-1)}function qd(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t.queue=e,e=e.dispatch=w0.bind(null,le,e),[t.memoizedState,e]}function Fi(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Op(){return dt().memoizedState}function zo(e,t,r,n){var i=It();le.flags|=e,i.memoizedState=Fi(1|t,r,void 0,n===void 0?null:n)}function As(e,t,r,n){var i=dt();n=n===void 0?null:n;var o=void 0;if(ve!==null){var a=ve.memoizedState;if(o=a.destroy,n!==null&&xc(n,a.deps)){i.memoizedState=Fi(t,r,o,n);return}}le.flags|=e,i.memoizedState=Fi(1|t,r,o,n)}function Jd(e,t){return zo(8390656,8,e,t)}function kc(e,t){return As(2048,8,e,t)}function Lp(e,t){return As(4,2,e,t)}function zp(e,t){return As(4,4,e,t)}function Mp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dp(e,t,r){return r=r!=null?r.concat([e]):null,As(4,4,Mp.bind(null,t,e),r)}function Sc(){}function Fp(e,t){var r=dt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&xc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Up(e,t){var r=dt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&xc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Bp(e,t,r){return Qr&21?(_t(r,t)||(r=Gf(),le.lanes|=r,Kr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=r)}function y0(e,t){var r=X;X=r!==0&&4>r?r:4,e(!0);var n=ba.transition;ba.transition={};try{e(!1),t()}finally{X=r,ba.transition=n}}function Wp(){return dt().memoizedState}function x0(e,t,r){var n=yr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},$p(e))Vp(t,r);else if(r=_p(e,t,r,n),r!==null){var i=Me();kt(r,e,n,i),Hp(r,t,n)}}function w0(e,t,r){var n=yr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if($p(e))Vp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,c=o(a,r);if(i.hasEagerState=!0,i.eagerState=c,_t(c,a)){var l=t.interleaved;l===null?(i.next=i,hc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=_p(e,t,i,n),r!==null&&(i=Me(),kt(r,e,n,i),Hp(r,t,n))}}function $p(e){var t=e.alternate;return e===le||t!==null&&t===le}function Vp(e,t){vi=cs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Hp(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ec(e,r)}}var ds={readContext:ct,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},b0={readContext:ct,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Jd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,zo(4194308,4,Mp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return zo(4,2,e,t)},useMemo:function(e,t){var r=It();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=It();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=x0.bind(null,le,e),[n.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:qd,useDebugValue:Sc,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=qd(!1),t=e[0];return e=y0.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=le,i=It();if(oe){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),ke===null)throw Error(E(349));Qr&30||Tp(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Jd(Np.bind(null,n,o,e),[e]),n.flags|=2048,Fi(9,Rp.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=It(),t=ke.identifierPrefix;if(oe){var r=Wt,n=Bt;r=(n&~(1<<32-bt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Mi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=v0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},k0={readContext:ct,useCallback:Fp,useContext:ct,useEffect:kc,useImperativeHandle:Dp,useInsertionEffect:Lp,useLayoutEffect:zp,useMemo:Up,useReducer:ka,useRef:Op,useState:function(){return ka(Di)},useDebugValue:Sc,useDeferredValue:function(e){var t=dt();return Bp(t,ve.memoizedState,e)},useTransition:function(){var e=ka(Di)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Ip,useSyncExternalStore:jp,useId:Wp,unstable_isNewReconciler:!1},S0={readContext:ct,useCallback:Fp,useContext:ct,useEffect:kc,useImperativeHandle:Dp,useInsertionEffect:Lp,useLayoutEffect:zp,useMemo:Up,useReducer:Sa,useRef:Op,useState:function(){return Sa(Di)},useDebugValue:Sc,useDeferredValue:function(e){var t=dt();return ve===null?t.memoizedState=e:Bp(t,ve.memoizedState,e)},useTransition:function(){var e=Sa(Di)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Ip,useSyncExternalStore:jp,useId:Wp,unstable_isNewReconciler:!1};function vt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function gl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ce({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Os={isMounted:function(e){return(e=e._reactInternals)?Zr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Me(),i=yr(e),o=Ht(n,i);o.payload=t,r!=null&&(o.callback=r),t=mr(e,o,i),t!==null&&(kt(t,e,i,n),Oo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Me(),i=yr(e),o=Ht(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=mr(e,o,i),t!==null&&(kt(t,e,i,n),Oo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Me(),n=yr(e),i=Ht(r,n);i.tag=2,t!=null&&(i.callback=t),t=mr(e,i,n),t!==null&&(kt(t,e,n,r),Oo(t,e,n))}};function Xd(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ni(r,n)||!Ni(i,o):!0}function Gp(e,t,r){var n=!1,i=Sr,o=t.contextType;return typeof o=="object"&&o!==null?o=ct(o):(i=Ve(t)?Gr:Oe.current,n=t.contextTypes,o=(n=n!=null)?Nn(e,i):Sr),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Os,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zd(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Os.enqueueReplaceState(t,t.state,null)}function ml(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},gc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ct(o):(o=Ve(t)?Gr:Oe.current,i.context=Nn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(gl(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Os.enqueueReplaceState(i,i.state,null),as(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ln(e,t){try{var r="",n=t;do r+=Jm(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _a(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function vl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var _0=typeof WeakMap=="function"?WeakMap:Map;function Yp(e,t,r){r=Ht(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){fs||(fs=!0,Il=n),vl(e,t)},r}function Qp(e,t,r){r=Ht(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){vl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){vl(e,t),typeof n!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function eu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new _0;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=D0.bind(null,e,t,r),t.then(e,e))}function tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ru(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ht(-1,1),t.tag=2,mr(r,t,1))),r.lanes|=1),e)}var C0=Zt.ReactCurrentOwner,We=!1;function ze(e,t,r,n){t.child=e===null?Sp(t,null,r,n):An(t,e.child,r,n)}function nu(e,t,r,n,i){r=r.render;var o=t.ref;return _n(t,i),n=wc(e,t,r,n,o,i),r=bc(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(oe&&r&&lc(t),t.flags|=1,ze(e,t,n,i),t.child)}function iu(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Nc(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Kp(e,t,o,n,i)):(e=Uo(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:Ni,r(a,n)&&e.ref===t.ref)return Kt(e,t,i)}return t.flags|=1,e=xr(o,n),e.ref=t.ref,e.return=t,t.child=e}function Kp(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(Ni(o,n)&&e.ref===t.ref)if(We=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Kt(e,t,i)}return yl(e,t,r,n,i)}function qp(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(yn,Qe),Qe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(yn,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,re(yn,Qe),Qe|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,re(yn,Qe),Qe|=n;return ze(e,t,i,r),t.child}function Jp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function yl(e,t,r,n,i){var o=Ve(r)?Gr:Oe.current;return o=Nn(t,o),_n(t,i),r=wc(e,t,r,n,o,i),n=bc(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(oe&&n&&lc(t),t.flags|=1,ze(e,t,r,i),t.child)}function ou(e,t,r,n,i){if(Ve(r)){var o=!0;rs(t)}else o=!1;if(_n(t,i),t.stateNode===null)Mo(e,t),Gp(t,r,n),ml(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var l=a.context,d=r.contextType;typeof d=="object"&&d!==null?d=ct(d):(d=Ve(r)?Gr:Oe.current,d=Nn(t,d));var u=r.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==n||l!==d)&&Zd(t,a,n,d),ir=!1;var p=t.memoizedState;a.state=p,as(t,n,a,i),l=t.memoizedState,c!==n||p!==l||$e.current||ir?(typeof u=="function"&&(gl(t,r,u,n),l=t.memoizedState),(c=ir||Xd(t,r,c,n,p,l,d))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=d,n=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Cp(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:vt(t.type,c),a.props=d,f=t.pendingProps,p=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=ct(l):(l=Ve(r)?Gr:Oe.current,l=Nn(t,l));var x=r.getDerivedStateFromProps;(u=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==f||p!==l)&&Zd(t,a,n,l),ir=!1,p=t.memoizedState,a.state=p,as(t,n,a,i);var v=t.memoizedState;c!==f||p!==v||$e.current||ir?(typeof x=="function"&&(gl(t,r,x,n),v=t.memoizedState),(d=ir||Xd(t,r,d,n,p,v,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),a.props=n,a.state=v,a.context=l,n=d):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return xl(e,t,r,n,o,i)}function xl(e,t,r,n,i,o){Jp(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&Vd(t,r,!1),Kt(e,t,o);n=t.stateNode,C0.current=t;var c=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=An(t,e.child,null,o),t.child=An(t,null,c,o)):ze(e,t,c,o),t.memoizedState=n.state,i&&Vd(t,r,!0),t.child}function Xp(e){var t=e.stateNode;t.pendingContext?$d(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$d(e,t.context,!1),mc(e,t.containerInfo)}function su(e,t,r,n,i){return Pn(),dc(i),t.flags|=256,ze(e,t,r,n),t.child}var wl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zp(e,t,r){var n=t.pendingProps,i=ae.current,o=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(ae,i&1),e===null)return pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ms(a,n,0,null),e=$r(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=bl(r),t.memoizedState=wl,e):_c(t,a));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return E0(e,t,a,n,c,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,c=i.sibling;var l={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=xr(i,l),n.subtreeFlags=i.subtreeFlags&14680064),c!==null?o=xr(c,o):(o=$r(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?bl(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=wl,n}return o=e.child,e=o.sibling,n=xr(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function _c(e,t){return t=Ms({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ko(e,t,r,n){return n!==null&&dc(n),An(t,e.child,null,r),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function E0(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=_a(Error(E(422))),ko(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Ms({mode:"visible",children:n.children},i,0,null),o=$r(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&An(t,e.child,null,a),t.child.memoizedState=bl(a),t.memoizedState=wl,o);if(!(t.mode&1))return ko(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var c=n.dgst;return n=c,o=Error(E(419)),n=_a(o,n,void 0),ko(e,t,a,n)}if(c=(a&e.childLanes)!==0,We||c){if(n=ke,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qt(e,i),kt(n,e,i,-1))}return Rc(),n=_a(Error(E(421))),ko(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=F0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ke=gr(i.nextSibling),qe=t,oe=!0,xt=null,e!==null&&(ot[st++]=Bt,ot[st++]=Wt,ot[st++]=Yr,Bt=e.id,Wt=e.overflow,Yr=t),t=_c(t,n.children),t.flags|=4096,t)}function au(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),hl(e.return,t,r)}function Ca(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function eh(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(ze(e,t,n.children,r),n=ae.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&au(e,r,t);else if(e.tag===19)au(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(re(ae,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&ls(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Ca(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ls(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Ca(t,!0,r,null,o);break;case"together":Ca(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Kr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=xr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=xr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function I0(e,t,r){switch(t.tag){case 3:Xp(t),Pn();break;case 5:Ep(t);break;case 1:Ve(t.type)&&rs(t);break;case 4:mc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;re(os,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(re(ae,ae.current&1),t.flags|=128,null):r&t.child.childLanes?Zp(e,t,r):(re(ae,ae.current&1),e=Kt(e,t,r),e!==null?e.sibling:null);re(ae,ae.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return eh(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ae,ae.current),n)break;return null;case 22:case 23:return t.lanes=0,qp(e,t,r)}return Kt(e,t,r)}var th,kl,rh,nh;th=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};kl=function(){};rh=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Ur(Nt.current);var o=null;switch(r){case"input":i=Va(e,i),n=Va(e,n),o=[];break;case"select":i=ce({},i,{value:void 0}),n=ce({},n,{value:void 0}),o=[];break;case"textarea":i=Ya(e,i),n=Ya(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=es)}Ka(r,n);var a;r=null;for(d in i)if(!n.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(a in c)c.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(_i.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in n){var l=n[d];if(c=i!=null?i[d]:void 0,n.hasOwnProperty(d)&&l!==c&&(l!=null||c!=null))if(d==="style")if(c){for(a in c)!c.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&c[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(o||(o=[]),o.push(d,r)),r=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(_i.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&ne("scroll",e),o||c===l||(o=[])):(o=o||[]).push(d,l))}r&&(o=o||[]).push("style",r);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};nh=function(e,t,r,n){r!==n&&(t.flags|=4)};function ni(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function j0(e,t,r){var n=t.pendingProps;switch(cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ve(t.type)&&ts(),Ne(t),null;case 3:return n=t.stateNode,On(),ie($e),ie(Oe),yc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(Rl(xt),xt=null))),kl(e,t),Ne(t),null;case 5:vc(t);var i=Ur(zi.current);if(r=t.type,e!==null&&t.stateNode!=null)rh(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(E(166));return Ne(t),null}if(e=Ur(Nt.current),wo(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[jt]=t,n[Oi]=o,e=(t.mode&1)!==0,r){case"dialog":ne("cancel",n),ne("close",n);break;case"iframe":case"object":case"embed":ne("load",n);break;case"video":case"audio":for(i=0;i<ui.length;i++)ne(ui[i],n);break;case"source":ne("error",n);break;case"img":case"image":case"link":ne("error",n),ne("load",n);break;case"details":ne("toggle",n);break;case"input":md(n,o),ne("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},ne("invalid",n);break;case"textarea":yd(n,o),ne("invalid",n)}Ka(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="children"?typeof c=="string"?n.textContent!==c&&(o.suppressHydrationWarning!==!0&&xo(n.textContent,c,e),i=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&xo(n.textContent,c,e),i=["children",""+c]):_i.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&ne("scroll",n)}switch(r){case"input":uo(n),vd(n,o,!0);break;case"textarea":uo(n),xd(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=es)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nf(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[jt]=t,e[Oi]=n,th(e,t,!1,!1),t.stateNode=e;e:{switch(a=qa(r,n),r){case"dialog":ne("cancel",e),ne("close",e),i=n;break;case"iframe":case"object":case"embed":ne("load",e),i=n;break;case"video":case"audio":for(i=0;i<ui.length;i++)ne(ui[i],e);i=n;break;case"source":ne("error",e),i=n;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=n;break;case"details":ne("toggle",e),i=n;break;case"input":md(e,n),i=Va(e,n),ne("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=ce({},n,{value:void 0}),ne("invalid",e);break;case"textarea":yd(e,n),i=Ya(e,n),ne("invalid",e);break;default:i=n}Ka(r,i),c=i;for(o in c)if(c.hasOwnProperty(o)){var l=c[o];o==="style"?Of(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Pf(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ci(e,l):typeof l=="number"&&Ci(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_i.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ne("scroll",e):l!=null&&Ql(e,o,l,a))}switch(r){case"input":uo(e),vd(e,n,!1);break;case"textarea":uo(e),xd(e);break;case"option":n.value!=null&&e.setAttribute("value",""+kr(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?wn(e,!!n.multiple,o,!1):n.defaultValue!=null&&wn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=es)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)nh(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(E(166));if(r=Ur(zi.current),Ur(Nt.current),wo(t)){if(n=t.stateNode,r=t.memoizedProps,n[jt]=t,(o=n.nodeValue!==r)&&(e=qe,e!==null))switch(e.tag){case 3:xo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xo(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[jt]=t,t.stateNode=n}return Ne(t),null;case 13:if(ie(ae),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ke!==null&&t.mode&1&&!(t.flags&128))bp(),Pn(),t.flags|=98560,o=!1;else if(o=wo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[jt]=t}else Pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),o=!1}else xt!==null&&(Rl(xt),xt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?ye===0&&(ye=3):Rc())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return On(),kl(e,t),e===null&&Pi(t.stateNode.containerInfo),Ne(t),null;case 10:return pc(t.type._context),Ne(t),null;case 17:return Ve(t.type)&&ts(),Ne(t),null;case 19:if(ie(ae),o=t.memoizedState,o===null)return Ne(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)ni(o,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ls(e),a!==null){for(t.flags|=128,ni(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return re(ae,ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&fe()>zn&&(t.flags|=128,n=!0,ni(o,!1),t.lanes=4194304)}else{if(!n)if(e=ls(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ni(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!oe)return Ne(t),null}else 2*fe()-o.renderingStartTime>zn&&r!==1073741824&&(t.flags|=128,n=!0,ni(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=fe(),t.sibling=null,r=ae.current,re(ae,n?r&1|2:r&1),t):(Ne(t),null);case 22:case 23:return Tc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Qe&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function T0(e,t){switch(cc(t),t.tag){case 1:return Ve(t.type)&&ts(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),ie($e),ie(Oe),yc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vc(t),null;case 13:if(ie(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ae),null;case 4:return On(),null;case 10:return pc(t.type._context),null;case 22:case 23:return Tc(),null;case 24:return null;default:return null}}var So=!1,Pe=!1,R0=typeof WeakSet=="function"?WeakSet:Set,A=null;function vn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ue(e,t,n)}else r.current=null}function Sl(e,t,r){try{r()}catch(n){ue(e,t,n)}}var lu=!1;function N0(e,t){if(sl=Jo,e=lp(),ac(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,c=-1,l=-1,d=0,u=0,f=e,p=null;t:for(;;){for(var x;f!==r||i!==0&&f.nodeType!==3||(c=a+i),f!==o||n!==0&&f.nodeType!==3||(l=a+n),f.nodeType===3&&(a+=f.nodeValue.length),(x=f.firstChild)!==null;)p=f,f=x;for(;;){if(f===e)break t;if(p===r&&++d===i&&(c=a),p===o&&++u===n&&(l=a),(x=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=x}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(al={focusedElem:e,selectionRange:r},Jo=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,_=v.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:vt(t.type,b),_);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(k){ue(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=lu,lu=!1,v}function yi(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Sl(t,r,o)}i=i.next}while(i!==n)}}function Ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function _l(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function ih(e){var t=e.alternate;t!==null&&(e.alternate=null,ih(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[Oi],delete t[dl],delete t[p0],delete t[h0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function oh(e){return e.tag===5||e.tag===3||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=es));else if(n!==4&&(e=e.child,e!==null))for(Cl(e,t,r),e=e.sibling;e!==null;)Cl(e,t,r),e=e.sibling}function El(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(El(e,t,r),e=e.sibling;e!==null;)El(e,t,r),e=e.sibling}var _e=null,yt=!1;function tr(e,t,r){for(r=r.child;r!==null;)sh(e,t,r),r=r.sibling}function sh(e,t,r){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Is,r)}catch{}switch(r.tag){case 5:Pe||vn(r,t);case 6:var n=_e,i=yt;_e=null,tr(e,t,r),_e=n,yt=i,_e!==null&&(yt?(e=_e,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):_e.removeChild(r.stateNode));break;case 18:_e!==null&&(yt?(e=_e,r=r.stateNode,e.nodeType===8?ya(e.parentNode,r):e.nodeType===1&&ya(e,r),Ti(e)):ya(_e,r.stateNode));break;case 4:n=_e,i=yt,_e=r.stateNode.containerInfo,yt=!0,tr(e,t,r),_e=n,yt=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Sl(r,t,a),i=i.next}while(i!==n)}tr(e,t,r);break;case 1:if(!Pe&&(vn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(c){ue(r,t,c)}tr(e,t,r);break;case 21:tr(e,t,r);break;case 22:r.mode&1?(Pe=(n=Pe)||r.memoizedState!==null,tr(e,t,r),Pe=n):tr(e,t,r);break;default:tr(e,t,r)}}function du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new R0),t.forEach(function(n){var i=U0.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function mt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:_e=c.stateNode,yt=!1;break e;case 3:_e=c.stateNode.containerInfo,yt=!0;break e;case 4:_e=c.stateNode.containerInfo,yt=!0;break e}c=c.return}if(_e===null)throw Error(E(160));sh(o,a,i),_e=null,yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){ue(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ah(t,e),t=t.sibling}function ah(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),Et(e),n&4){try{yi(3,e,e.return),Ls(3,e)}catch(b){ue(e,e.return,b)}try{yi(5,e,e.return)}catch(b){ue(e,e.return,b)}}break;case 1:mt(t,e),Et(e),n&512&&r!==null&&vn(r,r.return);break;case 5:if(mt(t,e),Et(e),n&512&&r!==null&&vn(r,r.return),e.flags&32){var i=e.stateNode;try{Ci(i,"")}catch(b){ue(e,e.return,b)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&Tf(i,o),qa(c,a);var d=qa(c,o);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?Of(i,f):u==="dangerouslySetInnerHTML"?Pf(i,f):u==="children"?Ci(i,f):Ql(i,u,f,d)}switch(c){case"input":Ha(i,o);break;case"textarea":Rf(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?wn(i,!!o.multiple,x,!1):p!==!!o.multiple&&(o.defaultValue!=null?wn(i,!!o.multiple,o.defaultValue,!0):wn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Oi]=o}catch(b){ue(e,e.return,b)}}break;case 6:if(mt(t,e),Et(e),n&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){ue(e,e.return,b)}}break;case 3:if(mt(t,e),Et(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(b){ue(e,e.return,b)}break;case 4:mt(t,e),Et(e);break;case 13:mt(t,e),Et(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ic=fe())),n&4&&du(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(Pe=(d=Pe)||u,mt(t,e),Pe=d):mt(t,e),Et(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(A=e,u=e.child;u!==null;){for(f=A=u;A!==null;){switch(p=A,x=p.child,p.tag){case 0:case 11:case 14:case 15:yi(4,p,p.return);break;case 1:vn(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){ue(n,r,b)}}break;case 5:vn(p,p.return);break;case 22:if(p.memoizedState!==null){fu(f);continue}}x!==null?(x.return=p,A=x):fu(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=Af("display",a))}catch(b){ue(e,e.return,b)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(b){ue(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:mt(t,e),Et(e),n&4&&du(e);break;case 21:break;default:mt(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(oh(r)){var n=r;break e}r=r.return}throw Error(E(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Ci(i,""),n.flags&=-33);var o=cu(e);El(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,c=cu(e);Cl(e,c,a);break;default:throw Error(E(161))}}catch(l){ue(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function P0(e,t,r){A=e,lh(e)}function lh(e,t,r){for(var n=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||So;if(!a){var c=i.alternate,l=c!==null&&c.memoizedState!==null||Pe;c=So;var d=Pe;if(So=a,(Pe=l)&&!d)for(A=i;A!==null;)a=A,l=a.child,a.tag===22&&a.memoizedState!==null?pu(i):l!==null?(l.return=a,A=l):pu(i);for(;o!==null;)A=o,lh(o),o=o.sibling;A=i,So=c,Pe=d}uu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):uu(e)}}function uu(e){for(;A!==null;){var t=A;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||Ls(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Pe)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:vt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Kd(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Kd(t,a,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ti(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Pe||t.flags&512&&_l(t)}catch(p){ue(t,t.return,p)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function fu(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function pu(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ls(4,t)}catch(l){ue(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){ue(t,i,l)}}var o=t.return;try{_l(t)}catch(l){ue(t,o,l)}break;case 5:var a=t.return;try{_l(t)}catch(l){ue(t,a,l)}}}catch(l){ue(t,t.return,l)}if(t===e){A=null;break}var c=t.sibling;if(c!==null){c.return=t.return,A=c;break}A=t.return}}var A0=Math.ceil,us=Zt.ReactCurrentDispatcher,Cc=Zt.ReactCurrentOwner,lt=Zt.ReactCurrentBatchConfig,H=0,ke=null,he=null,Ce=0,Qe=0,yn=Cr(0),ye=0,Ui=null,Kr=0,zs=0,Ec=0,xi=null,Be=null,Ic=0,zn=1/0,zt=null,fs=!1,Il=null,vr=null,_o=!1,dr=null,ps=0,wi=0,jl=null,Do=-1,Fo=0;function Me(){return H&6?fe():Do!==-1?Do:Do=fe()}function yr(e){return e.mode&1?H&2&&Ce!==0?Ce&-Ce:m0.transition!==null?(Fo===0&&(Fo=Gf()),Fo):(e=X,e!==0||(e=window.event,e=e===void 0?16:Zf(e.type)),e):1}function kt(e,t,r,n){if(50<wi)throw wi=0,jl=null,Error(E(185));Hi(e,r,n),(!(H&2)||e!==ke)&&(e===ke&&(!(H&2)&&(zs|=r),ye===4&&sr(e,Ce)),He(e,n),r===1&&H===0&&!(t.mode&1)&&(zn=fe()+500,Ps&&Er()))}function He(e,t){var r=e.callbackNode;mv(e,t);var n=qo(e,e===ke?Ce:0);if(n===0)r!==null&&kd(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&kd(r),t===1)e.tag===0?g0(hu.bind(null,e)):yp(hu.bind(null,e)),u0(function(){!(H&6)&&Er()}),r=null;else{switch(Yf(n)){case 1:r=Zl;break;case 4:r=Vf;break;case 16:r=Ko;break;case 536870912:r=Hf;break;default:r=Ko}r=mh(r,ch.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ch(e,t){if(Do=-1,Fo=0,H&6)throw Error(E(327));var r=e.callbackNode;if(Cn()&&e.callbackNode!==r)return null;var n=qo(e,e===ke?Ce:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=hs(e,n);else{t=n;var i=H;H|=2;var o=uh();(ke!==e||Ce!==t)&&(zt=null,zn=fe()+500,Wr(e,t));do try{z0();break}catch(c){dh(e,c)}while(!0);fc(),us.current=o,H=i,he!==null?t=0:(ke=null,Ce=0,t=ye)}if(t!==0){if(t===2&&(i=tl(e),i!==0&&(n=i,t=Tl(e,i))),t===1)throw r=Ui,Wr(e,0),sr(e,n),He(e,fe()),r;if(t===6)sr(e,n);else{if(i=e.current.alternate,!(n&30)&&!O0(i)&&(t=hs(e,n),t===2&&(o=tl(e),o!==0&&(n=o,t=Tl(e,o))),t===1))throw r=Ui,Wr(e,0),sr(e,n),He(e,fe()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(E(345));case 2:zr(e,Be,zt);break;case 3:if(sr(e,n),(n&130023424)===n&&(t=Ic+500-fe(),10<t)){if(qo(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=cl(zr.bind(null,e,Be,zt),t);break}zr(e,Be,zt);break;case 4:if(sr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-bt(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=fe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*A0(n/1960))-n,10<n){e.timeoutHandle=cl(zr.bind(null,e,Be,zt),n);break}zr(e,Be,zt);break;case 5:zr(e,Be,zt);break;default:throw Error(E(329))}}}return He(e,fe()),e.callbackNode===r?ch.bind(null,e):null}function Tl(e,t){var r=xi;return e.current.memoizedState.isDehydrated&&(Wr(e,t).flags|=256),e=hs(e,t),e!==2&&(t=Be,Be=r,t!==null&&Rl(t)),e}function Rl(e){Be===null?Be=e:Be.push.apply(Be,e)}function O0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!_t(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~Ec,t&=~zs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-bt(t),n=1<<r;e[r]=-1,t&=~n}}function hu(e){if(H&6)throw Error(E(327));Cn();var t=qo(e,0);if(!(t&1))return He(e,fe()),null;var r=hs(e,t);if(e.tag!==0&&r===2){var n=tl(e);n!==0&&(t=n,r=Tl(e,n))}if(r===1)throw r=Ui,Wr(e,0),sr(e,t),He(e,fe()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zr(e,Be,zt),He(e,fe()),null}function jc(e,t){var r=H;H|=1;try{return e(t)}finally{H=r,H===0&&(zn=fe()+500,Ps&&Er())}}function qr(e){dr!==null&&dr.tag===0&&!(H&6)&&Cn();var t=H;H|=1;var r=lt.transition,n=X;try{if(lt.transition=null,X=1,e)return e()}finally{X=n,lt.transition=r,H=t,!(H&6)&&Er()}}function Tc(){Qe=yn.current,ie(yn)}function Wr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,d0(r)),he!==null)for(r=he.return;r!==null;){var n=r;switch(cc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ts();break;case 3:On(),ie($e),ie(Oe),yc();break;case 5:vc(n);break;case 4:On();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:pc(n.type._context);break;case 22:case 23:Tc()}r=r.return}if(ke=e,he=e=xr(e.current,null),Ce=Qe=t,ye=0,Ui=null,Ec=zs=Kr=0,Be=xi=null,Fr!==null){for(t=0;t<Fr.length;t++)if(r=Fr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}Fr=null}return e}function dh(e,t){do{var r=he;try{if(fc(),Lo.current=ds,cs){for(var n=le.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}cs=!1}if(Qr=0,be=ve=le=null,vi=!1,Mi=0,Cc.current=null,r===null||r.return===null){ye=1,Ui=t,he=null;break}e:{var o=e,a=r.return,c=r,l=t;if(t=Ce,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,u=c,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var x=tu(a);if(x!==null){x.flags&=-257,ru(x,a,c,o,t),x.mode&1&&eu(o,d,t),t=x,l=d;var v=t.updateQueue;if(v===null){var b=new Set;b.add(l),t.updateQueue=b}else v.add(l);break e}else{if(!(t&1)){eu(o,d,t),Rc();break e}l=Error(E(426))}}else if(oe&&c.mode&1){var _=tu(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),ru(_,a,c,o,t),dc(Ln(l,c));break e}}o=l=Ln(l,c),ye!==4&&(ye=2),xi===null?xi=[o]:xi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Yp(o,l,t);Qd(o,m);break e;case 1:c=l;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(vr===null||!vr.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Qp(o,c,t);Qd(o,k);break e}}o=o.return}while(o!==null)}ph(r)}catch(S){t=S,he===r&&r!==null&&(he=r=r.return);continue}break}while(!0)}function uh(){var e=us.current;return us.current=ds,e===null?ds:e}function Rc(){(ye===0||ye===3||ye===2)&&(ye=4),ke===null||!(Kr&268435455)&&!(zs&268435455)||sr(ke,Ce)}function hs(e,t){var r=H;H|=2;var n=uh();(ke!==e||Ce!==t)&&(zt=null,Wr(e,t));do try{L0();break}catch(i){dh(e,i)}while(!0);if(fc(),H=r,us.current=n,he!==null)throw Error(E(261));return ke=null,Ce=0,ye}function L0(){for(;he!==null;)fh(he)}function z0(){for(;he!==null&&!av();)fh(he)}function fh(e){var t=gh(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?ph(e):he=t,Cc.current=null}function ph(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=T0(r,t),r!==null){r.flags&=32767,he=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,he=null;return}}else if(r=j0(r,t,Qe),r!==null){he=r;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ye===0&&(ye=5)}function zr(e,t,r){var n=X,i=lt.transition;try{lt.transition=null,X=1,M0(e,t,r,n)}finally{lt.transition=i,X=n}return null}function M0(e,t,r,n){do Cn();while(dr!==null);if(H&6)throw Error(E(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(vv(e,o),e===ke&&(he=ke=null,Ce=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||_o||(_o=!0,mh(Ko,function(){return Cn(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=lt.transition,lt.transition=null;var a=X;X=1;var c=H;H|=4,Cc.current=null,N0(e,r),ah(r,e),n0(al),Jo=!!sl,al=sl=null,e.current=r,P0(r),lv(),H=c,X=a,lt.transition=o}else e.current=r;if(_o&&(_o=!1,dr=e,ps=i),o=e.pendingLanes,o===0&&(vr=null),uv(r.stateNode),He(e,fe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(fs)throw fs=!1,e=Il,Il=null,e;return ps&1&&e.tag!==0&&Cn(),o=e.pendingLanes,o&1?e===jl?wi++:(wi=0,jl=e):wi=0,Er(),null}function Cn(){if(dr!==null){var e=Yf(ps),t=lt.transition,r=X;try{if(lt.transition=null,X=16>e?16:e,dr===null)var n=!1;else{if(e=dr,dr=null,ps=0,H&6)throw Error(E(331));var i=H;for(H|=4,A=e.current;A!==null;){var o=A,a=o.child;if(A.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var d=c[l];for(A=d;A!==null;){var u=A;switch(u.tag){case 0:case 11:case 15:yi(8,u,o)}var f=u.child;if(f!==null)f.return=u,A=f;else for(;A!==null;){u=A;var p=u.sibling,x=u.return;if(ih(u),u===d){A=null;break}if(p!==null){p.return=x,A=p;break}A=x}}}var v=o.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}A=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,A=a;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:yi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,A=m;break e}A=o.return}}var h=e.current;for(A=h;A!==null;){a=A;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,A=g;else e:for(a=h;A!==null;){if(c=A,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Ls(9,c)}}catch(S){ue(c,c.return,S)}if(c===a){A=null;break e}var k=c.sibling;if(k!==null){k.return=c.return,A=k;break e}A=c.return}}if(H=i,Er(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Is,e)}catch{}n=!0}return n}finally{X=r,lt.transition=t}}return!1}function gu(e,t,r){t=Ln(r,t),t=Yp(e,t,1),e=mr(e,t,1),t=Me(),e!==null&&(Hi(e,1,t),He(e,t))}function ue(e,t,r){if(e.tag===3)gu(e,e,r);else for(;t!==null;){if(t.tag===3){gu(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(vr===null||!vr.has(n))){e=Ln(r,e),e=Qp(t,e,1),t=mr(t,e,1),e=Me(),t!==null&&(Hi(t,1,e),He(t,e));break}}t=t.return}}function D0(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&r,ke===e&&(Ce&r)===r&&(ye===4||ye===3&&(Ce&130023424)===Ce&&500>fe()-Ic?Wr(e,0):Ec|=r),He(e,t)}function hh(e,t){t===0&&(e.mode&1?(t=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):t=1);var r=Me();e=Qt(e,t),e!==null&&(Hi(e,t,r),He(e,r))}function F0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),hh(e,r)}function U0(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(t),hh(e,r)}var gh;gh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)We=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return We=!1,I0(e,t,r);We=!!(e.flags&131072)}else We=!1,oe&&t.flags&1048576&&xp(t,is,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Mo(e,t),e=t.pendingProps;var i=Nn(t,Oe.current);_n(t,r),i=wc(null,t,n,e,i,r);var o=bc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(n)?(o=!0,rs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gc(t),i.updater=Os,t.stateNode=i,i._reactInternals=t,ml(t,n,e,r),t=xl(null,t,n,!0,o,r)):(t.tag=0,oe&&o&&lc(t),ze(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Mo(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=W0(n),e=vt(n,e),i){case 0:t=yl(null,t,n,e,r);break e;case 1:t=ou(null,t,n,e,r);break e;case 11:t=nu(null,t,n,e,r);break e;case 14:t=iu(null,t,n,vt(n.type,e),r);break e}throw Error(E(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:vt(n,i),yl(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:vt(n,i),ou(e,t,n,i,r);case 3:e:{if(Xp(t),e===null)throw Error(E(387));n=t.pendingProps,o=t.memoizedState,i=o.element,Cp(e,t),as(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ln(Error(E(423)),t),t=su(e,t,n,r,i);break e}else if(n!==i){i=Ln(Error(E(424)),t),t=su(e,t,n,r,i);break e}else for(Ke=gr(t.stateNode.containerInfo.firstChild),qe=t,oe=!0,xt=null,r=Sp(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Pn(),n===i){t=Kt(e,t,r);break e}ze(e,t,n,r)}t=t.child}return t;case 5:return Ep(t),e===null&&pl(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ll(n,i)?a=null:o!==null&&ll(n,o)&&(t.flags|=32),Jp(e,t),ze(e,t,a,r),t.child;case 6:return e===null&&pl(t),null;case 13:return Zp(e,t,r);case 4:return mc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=An(t,null,n,r):ze(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:vt(n,i),nu(e,t,n,i,r);case 7:return ze(e,t,t.pendingProps,r),t.child;case 8:return ze(e,t,t.pendingProps.children,r),t.child;case 12:return ze(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,re(os,n._currentValue),n._currentValue=a,o!==null)if(_t(o.value,a)){if(o.children===i.children&&!$e.current){t=Kt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){a=o.child;for(var l=c.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=Ht(-1,r&-r),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?l.next=l:(l.next=u.next,u.next=l),d.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),hl(o.return,r,t),c.lanes|=r;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(E(341));a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),hl(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ze(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,_n(t,r),i=ct(i),n=n(i),t.flags|=1,ze(e,t,n,r),t.child;case 14:return n=t.type,i=vt(n,t.pendingProps),i=vt(n.type,i),iu(e,t,n,i,r);case 15:return Kp(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:vt(n,i),Mo(e,t),t.tag=1,Ve(n)?(e=!0,rs(t)):e=!1,_n(t,r),Gp(t,n,i),ml(t,n,i,r),xl(null,t,n,!0,e,r);case 19:return eh(e,t,r);case 22:return qp(e,t,r)}throw Error(E(156,t.tag))};function mh(e,t){return $f(e,t)}function B0(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,r,n){return new B0(e,t,r,n)}function Nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function W0(e){if(typeof e=="function")return Nc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ql)return 11;if(e===Jl)return 14}return 2}function xr(e,t){var r=e.alternate;return r===null?(r=at(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Uo(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")Nc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ln:return $r(r.children,i,o,t);case Kl:a=8,i|=8;break;case Ua:return e=at(12,r,t,i|2),e.elementType=Ua,e.lanes=o,e;case Ba:return e=at(13,r,t,i),e.elementType=Ba,e.lanes=o,e;case Wa:return e=at(19,r,t,i),e.elementType=Wa,e.lanes=o,e;case Ef:return Ms(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _f:a=10;break e;case Cf:a=9;break e;case ql:a=11;break e;case Jl:a=14;break e;case nr:a=16,n=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=at(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function $r(e,t,r,n){return e=at(7,e,n,t),e.lanes=r,e}function Ms(e,t,r,n){return e=at(22,e,n,t),e.elementType=Ef,e.lanes=r,e.stateNode={isHidden:!1},e}function Ea(e,t,r){return e=at(6,e,null,t),e.lanes=r,e}function Ia(e,t,r){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $0(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pc(e,t,r,n,i,o,a,c,l){return e=new $0(e,t,r,c,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=at(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},gc(o),e}function V0(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:an,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function vh(e){if(!e)return Sr;e=e._reactInternals;e:{if(Zr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(Ve(r))return vp(e,r,t)}return t}function yh(e,t,r,n,i,o,a,c,l){return e=Pc(r,n,!0,e,i,o,a,c,l),e.context=vh(null),r=e.current,n=Me(),i=yr(r),o=Ht(n,i),o.callback=t??null,mr(r,o,i),e.current.lanes=i,Hi(e,i,n),He(e,n),e}function Ds(e,t,r,n){var i=t.current,o=Me(),a=yr(i);return r=vh(r),t.context===null?t.context=r:t.pendingContext=r,t=Ht(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=mr(i,t,a),e!==null&&(kt(e,i,a,o),Oo(e,i,a)),a}function gs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ac(e,t){mu(e,t),(e=e.alternate)&&mu(e,t)}function H0(){return null}var xh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oc(e){this._internalRoot=e}Fs.prototype.render=Oc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ds(e,t,null,null)};Fs.prototype.unmount=Oc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qr(function(){Ds(null,e,null,null)}),t[Yt]=null}};function Fs(e){this._internalRoot=e}Fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=qf();e={blockedOn:null,target:e,priority:t};for(var r=0;r<or.length&&t!==0&&t<or[r].priority;r++);or.splice(r,0,e),r===0&&Xf(e)}};function Lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vu(){}function G0(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var d=gs(a);o.call(d)}}var a=yh(t,n,e,0,null,!1,!1,"",vu);return e._reactRootContainer=a,e[Yt]=a.current,Pi(e.nodeType===8?e.parentNode:e),qr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var c=n;n=function(){var d=gs(l);c.call(d)}}var l=Pc(e,0,!1,null,null,!1,!1,"",vu);return e._reactRootContainer=l,e[Yt]=l.current,Pi(e.nodeType===8?e.parentNode:e),qr(function(){Ds(t,l,r,n)}),l}function Bs(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var c=i;i=function(){var l=gs(a);c.call(l)}}Ds(t,a,e,i)}else a=G0(r,t,e,i,n);return gs(a)}Qf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=di(t.pendingLanes);r!==0&&(ec(t,r|1),He(t,fe()),!(H&6)&&(zn=fe()+500,Er()))}break;case 13:qr(function(){var n=Qt(e,1);if(n!==null){var i=Me();kt(n,e,1,i)}}),Ac(e,1)}};tc=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var r=Me();kt(t,e,134217728,r)}Ac(e,134217728)}};Kf=function(e){if(e.tag===13){var t=yr(e),r=Qt(e,t);if(r!==null){var n=Me();kt(r,e,t,n)}Ac(e,t)}};qf=function(){return X};Jf=function(e,t){var r=X;try{return X=e,t()}finally{X=r}};Xa=function(e,t,r){switch(t){case"input":if(Ha(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Ns(n);if(!i)throw Error(E(90));jf(n),Ha(n,i)}}}break;case"textarea":Rf(e,r);break;case"select":t=r.value,t!=null&&wn(e,!!r.multiple,t,!1)}};Mf=jc;Df=qr;var Y0={usingClientEntryPoint:!1,Events:[Yi,fn,Ns,Lf,zf,jc]},ii={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q0={bundleType:ii.bundleType,version:ii.version,rendererPackageName:ii.rendererPackageName,rendererConfig:ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bf(e),e===null?null:e.stateNode},findFiberByHostInstance:ii.findFiberByHostInstance||H0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{Is=Co.inject(Q0),Rt=Co}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0;Xe.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lc(t))throw Error(E(200));return V0(e,t,null,r)};Xe.createRoot=function(e,t){if(!Lc(e))throw Error(E(299));var r=!1,n="",i=xh;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pc(e,1,!1,null,null,r,!1,n,i),e[Yt]=t.current,Pi(e.nodeType===8?e.parentNode:e),new Oc(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Bf(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return qr(e)};Xe.hydrate=function(e,t,r){if(!Us(t))throw Error(E(200));return Bs(null,e,t,!0,r)};Xe.hydrateRoot=function(e,t,r){if(!Lc(e))throw Error(E(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=xh;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=yh(t,null,e,1,r??null,i,!1,o,a),e[Yt]=t.current,Pi(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Fs(t)};Xe.render=function(e,t,r){if(!Us(t))throw Error(E(200));return Bs(null,e,t,!1,r)};Xe.unmountComponentAtNode=function(e){if(!Us(e))throw Error(E(40));return e._reactRootContainer?(qr(function(){Bs(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};Xe.unstable_batchedUpdates=jc;Xe.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Us(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Bs(e,t,r,!1,n)};Xe.version="18.3.1-next-f1338f8080-20240426";function wh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wh)}catch(e){console.error(e)}}wh(),wf.exports=Xe;var K0=wf.exports,bh,yu=K0;bh=yu.createRoot,yu.hydrateRoot;const q0="modulepreload",J0=function(e){return"/"+e},xu={},en=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(r.map(l=>{if(l=J0(l),l in xu)return;xu[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":q0,d||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((p,x)=>{f.addEventListener("load",p),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})},ut="https://cloudvault.co.in/api/v1",we={name:"CloudVault",logo:"CV",logoImage:"/cloudvault-logo.svg",logoVideo:"/calovaultlogo.mp4"};async function X0(){var r;const e=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");if(!e)return null;const t=localStorage.getItem("cv_refreshToken")?localStorage:sessionStorage;try{const n=await fetch(`${ut}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:e})});if(!n.ok)return null;const i=await n.json(),o=((r=i.data)==null?void 0:r.accessToken)||i.accessToken;return o?(t.setItem("cv_token",o),window.dispatchEvent(new CustomEvent("cv-token-refreshed",{detail:{token:o}})),o):null}catch{return null}}function zc(e){return new Error(`Cannot reach the server at ${ut}${e}. Make sure the backend is running (npm start in project root).`)}const it=async(e,t={},r,n=!1)=>{const i={...t.headers||{}};r&&(i.Authorization=`Bearer ${r}`),t.body instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json");let o;try{o=await fetch(`${ut}${e}`,{...t,headers:i})}catch{throw zc(e)}if(o.status===401&&r&&!n){const l=await X0();if(l)return it(e,t,l,!0);throw new Error("Session expired. Please log in again.")}if(!o.ok){const l=await o.json().catch(()=>({error:"Unknown error"})),d=l.message||l.error||"",u=d.toLowerCase().includes("token")?"Something went wrong. Please try again.":d||`Request failed (${o.status})`;throw new Error(u)}if(!(o.headers.get("content-type")||"").includes("application/json"))return o;const c=await o.json();return c.success?c.data:c},Ar=(e,t)=>Array.isArray(e)?e:(e==null?void 0:e[t])||[];async function Mc(e,t,{onProgress:r,disposition:n="download"}={}){const i=n==="preview"?`/files/${e}/preview`:`/files/${e}/download`;let o;try{o=await fetch(`${ut}${i}`,{headers:{Authorization:`Bearer ${t}`}})}catch{throw zc(i)}if(!o.ok){const c=await o.json().catch(()=>({error:"Download failed"}));throw new Error(c.error||c.message||"Download failed")}const a=Number(o.headers.get("content-length"))||0;return Z0(o,a,r)}async function Z0(e,t,r){if(!e.body||!t){const a=await e.blob();return r==null||r(100),a}const n=e.body.getReader(),i=[];let o=0;for(;;){const{done:a,value:c}=await n.read();if(a)break;i.push(c),o+=c.length,r&&t>0&&r(Math.min(99,Math.round(o/t*100)))}return r==null||r(100),new Blob(i,{type:e.headers.get("content-type")||"application/octet-stream"})}function kh(e,t){const r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=t,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(r)}function ey(e,t,r,n){return new Promise((i,o)=>{const a=new XMLHttpRequest;a.open("POST",`${ut}${e}`),a.setRequestHeader("Authorization",`Bearer ${r}`),a.upload.onprogress=c=>{c.lengthComputable&&n&&n(Math.round(c.loaded/c.total*100))},a.onload=()=>{try{const c=JSON.parse(a.responseText);a.status>=200&&a.status<300?i(c.success?c.data:c):o(new Error(c.message||c.error||"Upload failed"))}catch{a.status>=200&&a.status<300?i({}):o(new Error("Upload failed"))}},a.onerror=()=>o(zc(e)),a.send(t)})}const Ae=e=>{if(e===0)return"0 B";const t=1024,r=["B","KB","MB","GB"],n=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**n).toFixed(1)} ${r[n]}`},Ki=e=>{const t=Math.floor((Date.now()-new Date(e))/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`},qi=(e="")=>e.startsWith("image/")?"🖼️":e==="application/pdf"?"📄":e.startsWith("video/")?"🎬":e.startsWith("audio/")?"🎵":e.includes("zip")||e.includes("archive")?"🗜️":e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")?"📝":"📁",ty=["image/","video/","audio/"],ry=new Set(["application/pdf","text/plain","text/markdown","application/json"]),ms=(e="")=>{const t=(e||"").toLowerCase();return ry.has(t)?!0:ty.some(r=>t.startsWith(r))},ny=(e="")=>{const t=(e||"").toLowerCase();return t.startsWith("image/")?"image":t==="application/pdf"?"pdf":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("text/")||t==="application/json"?"text":null},wu=[{key:"all",label:"All",icon:"📋",test:()=>!0},{key:"images",label:"Images",icon:"🖼️",test:e=>e.startsWith("image/")},{key:"documents",label:"Docs",icon:"📄",test:e=>e.includes("pdf")||e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")},{key:"videos",label:"Videos",icon:"🎬",test:e=>e.startsWith("video/")},{key:"audio",label:"Audio",icon:"🎵",test:e=>e.startsWith("audio/")},{key:"archives",label:"Archives",icon:"🗜️",test:e=>e.includes("zip")||e.includes("archive")||e.includes("tar")||e.includes("rar")}],Vr=`
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
`,iy=[{id:"free",name:"Free",price:"₹0",period:"/mo",storage:"5 GB",features:["Standard uploads","Basic sharing","Web preview"]},{id:"pro",name:"Pro",price:"₹749",period:"/mo",storage:"100 GB",features:["Faster uploads","File version history","Priority support"],highlight:!0},{id:"premium",name:"Premium",price:"₹1,599",period:"/mo",storage:"1 TB",features:["Team sharing","Advanced analytics","Custom branding"]},{id:"team",name:"Team",price:"₹3,999",period:"/mo",storage:"2 TB",features:["Shared workspaces","Admin controls","SSO ready"]}],I2=[{id:"50gb",label:"+50 GB",price:"₹399"},{id:"100gb",label:"+100 GB",price:"₹749"},{id:"500gb",label:"+500 GB",price:"₹2,499"},{id:"1tb",label:"+1 TB",price:"₹3,999"}],oy=[{title:"Cloud storage",desc:"10 GB of free storage. Store files of any size, back up folders, sync across devices, and share with full control.",icon:"☁"},{title:"Private sharing",desc:"Share files and folders with anyone — even without an account. Set passwords, expiration dates, and permissions.",icon:"🔗"},{title:"Smart search",desc:"Find anything instantly with filters, tags, and full-text search across your entire drive.",icon:"🔍"},{title:"Enterprise security",desc:"Encrypted storage, activity logs, and role-based access. Your data stays private by default.",icon:"🛡"}],sy=[{title:"Never run out of space",desc:"Start with 10 GB free. Upgrade anytime for more storage when you need it."},{title:"Share with anyone",desc:"Give read-only or full access. Set passwords or create expiring links."},{title:"Be in control",desc:"Your data is in your hands. Manage permissions and access at every level."},{title:"Works everywhere",desc:"Access your files through the web on desktop, tablet, and mobile."}],ay=[{q:"Is CloudVault free to use?",a:"Yes. Every account includes 10 GB of free storage with no credit card required."},{q:"How secure are my files?",a:"Files are encrypted in transit and at rest. Share links support passwords and expiration dates."},{q:"Can I share files with people outside my team?",a:"Absolutely. Create public or protected links with view, download, or edit permissions."},{q:"Can I cancel or change my plan?",a:"Plans are flexible. Upgrade, downgrade, or cancel from billing settings anytime."}],ly=[{label:"Products",href:"#products"},{label:"Security",href:"#security"},{label:"Pricing",href:"#pricing"},{label:"FAQ",href:"#faq"}];function cy(){y.useEffect(()=>{const e=document.querySelectorAll(".scroll-reveal"),t=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&(n.target.classList.add("visible"),t.unobserve(n.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});return e.forEach(r=>t.observe(r)),()=>t.disconnect()},[])}function dy({onGetStarted:e,onLogin:t,onSignUp:r}){const[n,i]=y.useState({filesStored:0,activeUsers:0,storageUsed:0,storageCapacity:0xa0000000000}),o=y.useRef(null);return cy(),y.useEffect(()=>{fetch(`${ut}/public/stats`).then(a=>a.json()).then(a=>{a.success&&a.data&&i(a.data)}).catch(()=>{})},[]),y.useEffect(()=>{const a=()=>{o.current&&(o.current.style.background=window.scrollY>40?"rgba(0,0,0,.95)":"rgba(0,0,0,.85)")};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),s.jsxs("div",{className:"marketing-shell",children:[s.jsx("style",{children:Vr}),s.jsxs("header",{className:"landing-header",ref:o,children:[s.jsxs("button",{type:"button",className:"brand-lockup",onClick:e,"aria-label":`${we.name} home`,children:[s.jsx("span",{className:"brand-mark",children:s.jsx("img",{src:we.logoImage,alt:""})}),s.jsx("span",{children:we.name})]}),s.jsx("nav",{className:"landing-links","aria-label":"Primary",children:ly.map(a=>s.jsx("a",{href:a.href,children:a.label},a.href))}),s.jsxs("div",{className:"landing-nav",children:[s.jsx("button",{type:"button",className:"btn-ghost",onClick:t,children:"Log in"}),s.jsx("button",{type:"button",className:"btn-mega-red",onClick:r,children:"Sign up free"})]})]}),s.jsxs("main",{children:[s.jsxs("section",{className:"hero-section",children:[s.jsx("div",{className:"hero-glow hero-glow-green","aria-hidden":"true"}),s.jsx("div",{className:"hero-glow hero-glow-blue","aria-hidden":"true"}),s.jsxs("div",{className:"hero-copy",children:[s.jsxs("div",{className:"eyebrow",children:[s.jsx("span",{"aria-hidden":"true"})," Secure cloud storage by default"]}),s.jsxs("h1",{children:["Online privacy for everyone —",s.jsx("span",{children:"your intelligent cloud drive."})]}),s.jsxs("p",{children:["Privacy is not an option with ",we.name,"; it's standard. Store, organize, and securely share your files from one place — on any device."]}),s.jsxs("div",{className:"hero-actions animate-fade-up delay-1",children:[s.jsx("button",{type:"button",className:"btn-primary btn-hero-dark",onClick:e,children:"Sign up for 10 GB free"}),s.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"Log in"})]}),s.jsx("div",{className:"hero-note",children:"No credit card required · 10 GB free forever"})]}),s.jsxs("div",{className:"dashboard-preview animate-fade-up delay-2","aria-label":"CloudVault preview",children:[s.jsx("div",{className:"hero-video-orbit","aria-hidden":"true",children:s.jsx("video",{src:we.logoVideo,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata"})}),s.jsxs("div",{className:"preview-panel",children:[s.jsxs("div",{className:"preview-top-bar",children:[s.jsx("span",{className:"brand-mark small",children:s.jsx("img",{src:we.logoImage,alt:""})}),s.jsx("div",{className:"preview-search",children:"🔍 Search Cloud drive"})]}),s.jsxs("div",{className:"preview-body",children:[s.jsxs("aside",{className:"preview-sidebar",children:[s.jsxs("div",{className:"preview-logo",children:[s.jsx("span",{className:"brand-mark small",children:s.jsx("img",{src:we.logoImage,alt:""})}),s.jsx("strong",{children:"Drive"})]}),["Cloud drive","Recent","Starred","Shared","Trash"].map((a,c)=>s.jsx("div",{className:`preview-nav-item${c===0?" active":""}`,children:a},a)),s.jsxs("div",{className:"preview-usage",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Free"}),s.jsx("strong",{children:"4.5 GB / 10 GB"})]}),s.jsx("div",{className:"preview-bar",children:s.jsx("span",{})})]})]}),s.jsxs("section",{className:"preview-files",children:[s.jsxs("div",{className:"preview-topline",children:[s.jsx("h3",{children:"Cloud drive"}),s.jsx("button",{type:"button","aria-hidden":"true",tabIndex:-1,children:"↑ Upload"})]}),[["Project Alpha","1.2 GB · Last edited 2h ago"],["Q3 Financials.xlsx","2.4 MB · Last edited 2h ago"],["Campaign Banner.png","4.1 MB · Last edited 2h ago"]].map(([a,c],l)=>s.jsxs("div",{className:"preview-file",style:{animationDelay:`${l*.1}s`},children:[s.jsx("div",{className:"preview-file-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h4",{children:a}),s.jsx("p",{children:c})]})]},a))]})]})]})]})]}),s.jsx("section",{id:"products",className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsx("p",{className:"section-kicker",children:"All in one place"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 44px)",fontWeight:800,lineHeight:1.15,marginBottom:12},children:"Store and share files. Browse and protect."}),s.jsxs("p",{style:{color:"#b3b3b3",fontSize:17,maxWidth:640,lineHeight:1.6},children:[we.name," combines secure cloud storage with powerful tools to upload, download, and manage your files with confidence."]}),s.jsx("div",{className:"mega-product-grid",children:oy.map((a,c)=>s.jsxs("article",{className:`mega-product-card scroll-reveal delay-${c+1}`,children:[s.jsx("div",{className:"mega-product-icon","aria-hidden":"true",children:a.icon}),s.jsx("h3",{children:a.title}),s.jsx("p",{children:a.desc})]},a.title))})]})}),s.jsx("section",{id:"security",className:"mega-section",children:s.jsxs("div",{className:"mega-security-block scroll-reveal",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Security that's always on"}),s.jsx("h2",{children:"Your data stays encrypted and private."}),s.jsx("p",{children:"We protect your data with encryption in transit and at rest — the highest level of online security. Only you and people you authorize can access your files."}),s.jsx("button",{type:"button",className:"btn-mega-red",style:{marginTop:28},onClick:e,children:"Learn more"})]}),s.jsx("div",{className:"mega-shield","aria-hidden":"true",children:"🔐"})]})}),s.jsx("section",{className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsxs("p",{className:"section-kicker",children:["Why choose ",we.name,"?"]}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800,marginBottom:40},children:"Built for how you work today."}),s.jsx("div",{className:"mega-product-grid",children:sy.map((a,c)=>s.jsxs("article",{className:`mega-product-card scroll-reveal delay-${c+1}`,children:[s.jsx("h3",{children:a.title}),s.jsx("p",{children:a.desc})]},a.title))})]})}),s.jsxs("section",{className:"stats-band scroll-reveal","aria-label":"Platform statistics",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24,textAlign:"center",borderTop:"1px solid rgba(255,255,255,.06)",borderBottom:"1px solid rgba(255,255,255,.06)"},children:[s.jsxs("div",{className:"stat-mini scroll-reveal delay-1",children:[s.jsxs("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:[n.filesStored.toLocaleString(),"+"]}),s.jsx("span",{style:{color:"#737373"},children:"Files stored"})]}),s.jsxs("div",{className:"stat-mini scroll-reveal delay-2",children:[s.jsx("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:Ae(n.storageCapacity)}),s.jsx("span",{style:{color:"#737373"},children:"Storage capacity"})]}),s.jsxs("div",{className:"stat-mini scroll-reveal delay-3",children:[s.jsxs("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:[n.activeUsers.toLocaleString(),"+"]}),s.jsx("span",{style:{color:"#737373"},children:"Active users"})]})]}),s.jsxs("section",{id:"pricing",className:"mega-section",children:[s.jsxs("div",{className:"scroll-reveal section-center",children:[s.jsx("p",{className:"section-kicker",children:"Pricing"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800},children:"Simple plans for everyone."}),s.jsx("p",{className:"section-subtitle",style:{color:"#b3b3b3",marginTop:12},children:"Start free. Scale when you need more."})]}),s.jsx("div",{className:"pricing-grid scroll-reveal delay-1",children:iy.map(a=>s.jsxs("article",{className:`plan-card${a.highlight?" highlight":""}`,children:[a.highlight&&s.jsx("span",{className:"plan-badge",children:"Most popular"}),s.jsx("h3",{children:a.name}),s.jsxs("div",{className:"plan-price",children:[a.price,s.jsx("span",{children:a.period})]}),s.jsxs("p",{children:[a.storage," storage"]}),s.jsx("ul",{className:"plan-features",children:(a.features||[]).slice(0,4).map(c=>s.jsx("li",{children:c},c))}),s.jsxs("button",{type:"button",className:a.highlight?"btn-mega-red":"btn-secondary",onClick:e,children:["Choose ",a.name]})]},a.id))})]}),s.jsx("section",{id:"faq",className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsxs("div",{className:"section-center",children:[s.jsx("p",{className:"section-kicker",children:"FAQ"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800},children:"Questions? We have answers."})]}),s.jsx("div",{className:"faq-list",children:ay.map(a=>s.jsxs("details",{className:"faq-item scroll-reveal",children:[s.jsx("summary",{children:a.q}),s.jsx("p",{children:a.a})]},a.q))})]})}),s.jsxs("section",{className:"cta-band scroll-reveal",children:[s.jsx("h2",{children:"Millions trust secure cloud storage."}),s.jsx("p",{children:"Join users who store and protect their data in the cloud."}),s.jsxs("div",{className:"hero-actions",children:[s.jsx("button",{type:"button",className:"btn-mega-red",onClick:e,children:"Sign up for free"}),s.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"Log in"})]})]})]}),s.jsxs("footer",{className:"landing-footer",children:[s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx("span",{className:"brand-mark",children:s.jsx("img",{src:we.logoImage,alt:""})}),s.jsx("strong",{children:we.name}),s.jsx("p",{children:"Secure cloud storage for individuals and teams."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Product"}),s.jsx("a",{href:"#products",children:"Products"}),s.jsx("a",{href:"#pricing",children:"Pricing"}),s.jsx("a",{href:"#faq",children:"FAQ"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Company"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"About"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Contact"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Legal"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Privacy"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Terms"})]})]}),s.jsx("div",{className:"footer-bottom",children:s.jsxs("span",{children:["© ",new Date().getFullYear()," ",we.name,". All rights reserved."]})})]})]})}const uy=()=>{};var bu={};/**
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
 */const Sh=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===55296&&n+1<e.length&&(e.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++n)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t},fy=function(e){const t=[];let r=0,n=0;for(;r<e.length;){const i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[r++];t[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[r++],a=e[r++],c=e[r++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const o=e[r++],a=e[r++];t[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},_h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,c=a?e[i+1]:0,l=i+2<e.length,d=l?e[i+2]:0,u=o>>2,f=(o&3)<<4|c>>4;let p=(c&15)<<2|d>>6,x=d&63;l||(x=64,a||(p=64)),n.push(r[u],r[f],r[p],r[x])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Sh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):fy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){const o=r[e.charAt(i++)],c=i<e.length?r[e.charAt(i)]:0;++i;const d=i<e.length?r[e.charAt(i)]:64;++i;const f=i<e.length?r[e.charAt(i)]:64;if(++i,o==null||c==null||d==null||f==null)throw new py;const p=o<<2|c>>4;if(n.push(p),d!==64){const x=c<<4&240|d>>2;if(n.push(x),f!==64){const v=d<<6&192|f;n.push(v)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class py extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hy=function(e){const t=Sh(e);return _h.encodeByteArray(t,!0)},Ch=function(e){return hy(e).replace(/\./g,"")},Eh=function(e){try{return _h.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function gy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const my=()=>gy().__FIREBASE_DEFAULTS__,vy=()=>{if(typeof process>"u"||typeof bu>"u")return;const e=bu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},yy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Eh(e[1]);return t&&JSON.parse(t)},Dc=()=>{try{return uy()||my()||vy()||yy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},xy=e=>{var t,r;return(r=(t=Dc())===null||t===void 0?void 0:t.emulatorHosts)===null||r===void 0?void 0:r[e]},Ih=()=>{var e;return(e=Dc())===null||e===void 0?void 0:e.config},jh=e=>{var t;return(t=Dc())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class wy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,n))}}}/**
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
 */function Ws(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function by(e){return(await fetch(e,{credentials:"include"})).ok}const bi={};function ky(){const e={prod:[],emulator:[]};for(const t of Object.keys(bi))bi[t]?e.emulator.push(t):e.prod.push(t);return e}function Sy(e){let t=document.getElementById(e),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),r=!0),{created:r,element:t}}let ku=!1;function _y(e,t){if(typeof window>"u"||typeof document>"u"||!Ws(window.location.host)||bi[e]===t||bi[e]||ku)return;bi[e]=t;function r(p){return`__firebase__banner__${p}`}const n="__firebase__banner",o=ky().prod.length>0;function a(){const p=document.getElementById(n);p&&p.remove()}function c(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,x){p.setAttribute("width","24"),p.setAttribute("id",x),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function d(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{ku=!0,a()},p}function u(p,x){p.setAttribute("id",x),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=Sy(n),x=r("text"),v=document.getElementById(x)||document.createElement("span"),b=r("learnmore"),_=document.getElementById(b)||document.createElement("a"),m=r("preprendIcon"),h=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const g=p.element;c(g),u(_,b);const k=d();l(h,m),g.append(h,v,_,k),document.body.appendChild(g)}o?(v.innerText="Preview backend disconnected.",h.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Ey(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Iy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function jy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ty(){const e=De();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ry(){try{return typeof indexedDB=="object"}catch{return!1}}function Ny(){return new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(r){t(r)}})}/**
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
 */const Py="FirebaseError";class Ir extends Error{constructor(t,r,n){super(r),this.code=t,this.customData=n,this.name=Py,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(t,r,n){this.service=t,this.serviceName=r,this.errors=n}create(t,...r){const n=r[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Ay(o,n):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Ir(i,c,n)}}function Ay(e,t){return e.replace(Oy,(r,n)=>{const i=t[n];return i!=null?String(i):`<${n}?>`})}const Oy=/\{\$([^}]+)}/g;function Ly(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Mn(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const i of r){if(!n.includes(i))return!1;const o=e[i],a=t[i];if(Su(o)&&Su(a)){if(!Mn(o,a))return!1}else if(o!==a)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function Su(e){return e!==null&&typeof e=="object"}/**
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
 */function Xi(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(i=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function zy(e,t){const r=new My(e,t);return r.subscribe.bind(r)}class My{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(n=>{this.error(n)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,n){let i;if(t===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");Dy(t,["next","error","complete"])?i=t:i={next:t,error:r,complete:n},i.next===void 0&&(i.next=ja),i.error===void 0&&(i.error=ja),i.complete===void 0&&(i.complete=ja);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dy(e,t){if(typeof e!="object"||e===null)return!1;for(const r of t)if(r in e&&typeof e[r]=="function")return!0;return!1}function ja(){}/**
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
 */function $n(e){return e&&e._delegate?e._delegate:e}class Dn{constructor(t,r,n){this.name=t,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Fy{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const n=new wy;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){var r;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(r=t==null?void 0:t.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(By(t))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(t=Mr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mr){return this.instances.has(t)}getOptions(t=Mr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&a.resolve(i)}return i}onInit(t,r){var n;const i=this.normalizeInstanceIdentifier(r),o=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Uy(t),options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Mr){return this.component?this.component.multipleInstances?t:Mr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uy(e){return e===Mr?void 0:e}function By(e){return e.instantiationMode==="EAGER"}/**
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
 */class Wy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new Fy(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ee||(ee={}));const $y={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Vy=ee.INFO,Hy={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Gy=(e,t,...r)=>{if(t<e.logLevel)return;const n=new Date().toISOString(),i=Hy[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Th{constructor(t){this.name=t,this._logLevel=Vy,this._logHandler=Gy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ee))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$y[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...t),this._logHandler(this,ee.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...t),this._logHandler(this,ee.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...t),this._logHandler(this,ee.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...t),this._logHandler(this,ee.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...t),this._logHandler(this,ee.ERROR,...t)}}const Yy=(e,t)=>t.some(r=>e instanceof r);let _u,Cu;function Qy(){return _u||(_u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ky(){return Cu||(Cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rh=new WeakMap,Nl=new WeakMap,Nh=new WeakMap,Ta=new WeakMap,Fc=new WeakMap;function qy(e){const t=new Promise((r,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{r(wr(e.result)),i()},a=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(r=>{r instanceof IDBCursor&&Rh.set(r,e)}).catch(()=>{}),Fc.set(t,e),t}function Jy(e){if(Nl.has(e))return;const t=new Promise((r,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{r(),i()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Nl.set(e,t)}let Pl={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return Nl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Nh.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return wr(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Xy(e){Pl=e(Pl)}function Zy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const n=e.call(Ra(this),t,...r);return Nh.set(n,t.sort?t.sort():[t]),wr(n)}:Ky().includes(e)?function(...t){return e.apply(Ra(this),t),wr(Rh.get(this))}:function(...t){return wr(e.apply(Ra(this),t))}}function e1(e){return typeof e=="function"?Zy(e):(e instanceof IDBTransaction&&Jy(e),Yy(e,Qy())?new Proxy(e,Pl):e)}function wr(e){if(e instanceof IDBRequest)return qy(e);if(Ta.has(e))return Ta.get(e);const t=e1(e);return t!==e&&(Ta.set(e,t),Fc.set(t,e)),t}const Ra=e=>Fc.get(e);function t1(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),c=wr(a);return n&&a.addEventListener("upgradeneeded",l=>{n(wr(a.result),l.oldVersion,l.newVersion,wr(a.transaction),l)}),r&&a.addEventListener("blocked",l=>r(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const r1=["get","getKey","getAll","getAllKeys","count"],n1=["put","add","delete","clear"],Na=new Map;function Eu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Na.get(t))return Na.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,i=n1.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||r1.includes(r)))return;const o=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[r](...c),i&&l.done]))[0]};return Na.set(t,o),o}Xy(e=>({...e,get:(t,r,n)=>Eu(t,r)||e.get(t,r,n),has:(t,r)=>!!Eu(t,r)||e.has(t,r)}));/**
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
 */class i1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(o1(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function o1(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Al="@firebase/app",Iu="0.13.2";/**
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
 */const qt=new Th("@firebase/app"),s1="@firebase/app-compat",a1="@firebase/analytics-compat",l1="@firebase/analytics",c1="@firebase/app-check-compat",d1="@firebase/app-check",u1="@firebase/auth",f1="@firebase/auth-compat",p1="@firebase/database",h1="@firebase/data-connect",g1="@firebase/database-compat",m1="@firebase/functions",v1="@firebase/functions-compat",y1="@firebase/installations",x1="@firebase/installations-compat",w1="@firebase/messaging",b1="@firebase/messaging-compat",k1="@firebase/performance",S1="@firebase/performance-compat",_1="@firebase/remote-config",C1="@firebase/remote-config-compat",E1="@firebase/storage",I1="@firebase/storage-compat",j1="@firebase/firestore",T1="@firebase/ai",R1="@firebase/firestore-compat",N1="firebase",P1="11.10.0";/**
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
 */const Ol="[DEFAULT]",A1={[Al]:"fire-core",[s1]:"fire-core-compat",[l1]:"fire-analytics",[a1]:"fire-analytics-compat",[d1]:"fire-app-check",[c1]:"fire-app-check-compat",[u1]:"fire-auth",[f1]:"fire-auth-compat",[p1]:"fire-rtdb",[h1]:"fire-data-connect",[g1]:"fire-rtdb-compat",[m1]:"fire-fn",[v1]:"fire-fn-compat",[y1]:"fire-iid",[x1]:"fire-iid-compat",[w1]:"fire-fcm",[b1]:"fire-fcm-compat",[k1]:"fire-perf",[S1]:"fire-perf-compat",[_1]:"fire-rc",[C1]:"fire-rc-compat",[E1]:"fire-gcs",[I1]:"fire-gcs-compat",[j1]:"fire-fst",[R1]:"fire-fst-compat",[T1]:"fire-vertex","fire-js":"fire-js",[N1]:"fire-js-all"};/**
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
 */const vs=new Map,O1=new Map,Ll=new Map;function ju(e,t){try{e.container.addComponent(t)}catch(r){qt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function Bi(e){const t=e.name;if(Ll.has(t))return qt.debug(`There were multiple attempts to register component ${t}.`),!1;Ll.set(t,e);for(const r of vs.values())ju(r,e);for(const r of O1.values())ju(r,e);return!0}function Ph(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Tt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const L1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new Ji("app","Firebase",L1);/**
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
 */class z1{constructor(t,r,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const Zi=P1;function Ah(e,t={}){let r=e;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Ol,automaticDataCollectionEnabled:!0},t),i=n.name;if(typeof i!="string"||!i)throw br.create("bad-app-name",{appName:String(i)});if(r||(r=Ih()),!r)throw br.create("no-options");const o=vs.get(i);if(o){if(Mn(r,o.options)&&Mn(n,o.config))return o;throw br.create("duplicate-app",{appName:i})}const a=new Wy(i);for(const l of Ll.values())a.addComponent(l);const c=new z1(r,n,a);return vs.set(i,c),c}function M1(e=Ol){const t=vs.get(e);if(!t&&e===Ol&&Ih())return Ah();if(!t)throw br.create("no-app",{appName:e});return t}function En(e,t,r){var n;let i=(n=A1[e])!==null&&n!==void 0?n:e;r&&(i+=`-${r}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qt.warn(c.join(" "));return}Bi(new Dn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const D1="firebase-heartbeat-database",F1=1,Wi="firebase-heartbeat-store";let Pa=null;function Oh(){return Pa||(Pa=t1(D1,F1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Wi)}catch(r){console.warn(r)}}}}).catch(e=>{throw br.create("idb-open",{originalErrorMessage:e.message})})),Pa}async function U1(e){try{const r=(await Oh()).transaction(Wi),n=await r.objectStore(Wi).get(Lh(e));return await r.done,n}catch(t){if(t instanceof Ir)qt.warn(t.message);else{const r=br.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qt.warn(r.message)}}}async function Tu(e,t){try{const n=(await Oh()).transaction(Wi,"readwrite");await n.objectStore(Wi).put(t,Lh(e)),await n.done}catch(r){if(r instanceof Ir)qt.warn(r.message);else{const n=br.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});qt.warn(n.message)}}}function Lh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const B1=1024,W1=30;class $1{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new H1(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ru();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>W1){const a=G1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){qt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Ru(),{heartbeatsToSend:n,unsentEntries:i}=V1(this._heartbeatsCache.heartbeats),o=Ch(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(r){return qt.warn(r),""}}}function Ru(){return new Date().toISOString().substring(0,10)}function V1(e,t=B1){const r=[];let n=e.slice();for(const i of e){const o=r.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Nu(r)>t){o.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Nu(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class H1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ry()?Ny().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await U1(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Nu(e){return Ch(JSON.stringify({version:2,heartbeats:e})).length}function G1(e){if(e.length===0)return-1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}/**
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
 */function Y1(e){Bi(new Dn("platform-logger",t=>new i1(t),"PRIVATE")),Bi(new Dn("heartbeat",t=>new $1(t),"PRIVATE")),En(Al,Iu,e),En(Al,Iu,"esm2017"),En("fire-js","")}Y1("");var Q1="firebase",K1="11.10.0";/**
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
 */En(Q1,K1,"app");function Uc(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function zh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q1=zh,Mh=new Ji("auth","Firebase",zh());/**
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
 */const ys=new Th("@firebase/auth");function J1(e,...t){ys.logLevel<=ee.WARN&&ys.warn(`Auth (${Zi}): ${e}`,...t)}function Bo(e,...t){ys.logLevel<=ee.ERROR&&ys.error(`Auth (${Zi}): ${e}`,...t)}/**
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
 */function At(e,...t){throw Wc(e,...t)}function St(e,...t){return Wc(e,...t)}function Bc(e,t,r){const n=Object.assign(Object.assign({},q1()),{[t]:r});return new Ji("auth","Firebase",n).create(t,{appName:e.name})}function Hr(e){return Bc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function X1(e,t,r){const n=r;if(!(t instanceof n))throw n.name!==t.constructor.name&&At(e,"argument-error"),Bc(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wc(e,...t){if(typeof e!="string"){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return Mh.create(e,...t)}function z(e,t,...r){if(!e)throw Wc(t,...r)}function $t(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Bo(t),new Error(t)}function Jt(e,t){e||$t(t)}/**
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
 */function zl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Z1(){return Pu()==="http:"||Pu()==="https:"}function Pu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function ex(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Z1()||Iy()||"connection"in navigator)?navigator.onLine:!0}function tx(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class eo{constructor(t,r){this.shortDelay=t,this.longDelay=r,Jt(r>t,"Short delay should be less than long delay!"),this.isMobile=Cy()||jy()}get(){return ex()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $c(e,t){Jt(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
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
 */class Dh{static initialize(t,r,n){this.fetchImpl=t,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ix=new eo(3e4,6e4);function Vc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Vn(e,t,r,n,i={}){return Fh(e,i,async()=>{let o={},a={};n&&(t==="GET"?a=n:o={body:JSON.stringify(n)});const c=Xi(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const d=Object.assign({method:t,headers:l},o);return Ey()||(d.referrerPolicy="no-referrer"),e.emulatorConfig&&Ws(e.emulatorConfig.host)&&(d.credentials="include"),Dh.fetch()(await Uh(e,e.config.apiHost,r,c),d)})}async function Fh(e,t,r){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},rx),t);try{const i=new sx(e),o=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Eo(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Eo(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw Eo(e,"user-disabled",a);const u=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Bc(e,u,d);At(e,u)}}catch(i){if(i instanceof Ir)throw i;At(e,"network-request-failed",{message:String(i)})}}async function ox(e,t,r,n,i={}){const o=await Vn(e,t,r,n,i);return"mfaPendingCredential"in o&&At(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function Uh(e,t,r,n){const i=`${t}${r}?${n}`,o=e,a=o.config.emulator?$c(e.config,i):`${e.config.apiScheme}://${i}`;return nx.includes(r)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class sx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(St(this.auth,"network-request-failed")),ix.get())})}}function Eo(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=St(e,t,n);return i.customData._tokenResponse=r,i}/**
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
 */async function ax(e,t){return Vn(e,"POST","/v1/accounts:delete",t)}async function xs(e,t){return Vn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ki(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function lx(e,t=!1){const r=$n(e),n=await r.getIdToken(t),i=Hc(n);z(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:n,authTime:ki(Aa(i.auth_time)),issuedAtTime:ki(Aa(i.iat)),expirationTime:ki(Aa(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Aa(e){return Number(e)*1e3}function Hc(e){const[t,r,n]=e.split(".");if(t===void 0||r===void 0||n===void 0)return Bo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Eh(r);return i?JSON.parse(i):(Bo("Failed to decode base64 JWT payload"),null)}catch(i){return Bo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Au(e){const t=Hc(e);return z(t,"internal-error"),z(typeof t.exp<"u","internal-error"),z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function $i(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof Ir&&cx(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}function cx({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class dx{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var r;if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ml{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ws(e){var t;const r=e.auth,n=await e.getIdToken(),i=await $i(e,xs(r,{idToken:n}));z(i==null?void 0:i.users.length,r,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Bh(o.providerUserInfo):[],c=fx(e.providerData,a),l=e.isAnonymous,d=!(e.email&&o.passwordHash)&&!(c!=null&&c.length),u=l?d:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Ml(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function ux(e){const t=$n(e);await ws(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function fx(e,t){return[...e.filter(n=>!t.some(i=>i.providerId===n.providerId)),...t]}function Bh(e){return e.map(t=>{var{providerId:r}=t,n=Uc(t,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function px(e,t){const r=await Fh(e,{},async()=>{const n=Xi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=await Uh(e,i,"/v1/token",`key=${o}`),c=await e._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:n};return e.emulatorConfig&&Ws(e.emulatorConfig.host)&&(l.credentials="include"),Dh.fetch()(a,l)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function hx(e,t){return Vn(e,"POST","/v2/accounts:revokeToken",Vc(e,t))}/**
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
 */class In{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){z(t.idToken,"internal-error"),z(typeof t.idToken<"u","internal-error"),z(typeof t.refreshToken<"u","internal-error");const r="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Au(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}updateFromIdToken(t){z(t.length!==0,"internal-error");const r=Au(t);this.updateTokensAndExpiration(t,null,r)}async getToken(t,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:n,refreshToken:i,expiresIn:o}=await px(t,r);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(t,r,n){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,r){const{refreshToken:n,accessToken:i,expirationTime:o}=r,a=new In;return n&&(z(typeof n=="string","internal-error",{appName:t}),a.refreshToken=n),i&&(z(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(z(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new In,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
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
 */function rr(e,t){z(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class wt{constructor(t){var{uid:r,auth:n,stsTokenManager:i}=t,o=Uc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ml(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const r=await $i(this,this.stsTokenManager.getToken(this.auth,t));return z(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return lx(this,t)}reload(){return ux(this)}_assign(t){this!==t&&(z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>Object.assign({},r)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const r=new wt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(t){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),r&&await ws(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(Hr(this.auth));const t=await this.getIdToken();return await $i(this,ax(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){var n,i,o,a,c,l,d,u;const f=(n=r.displayName)!==null&&n!==void 0?n:void 0,p=(i=r.email)!==null&&i!==void 0?i:void 0,x=(o=r.phoneNumber)!==null&&o!==void 0?o:void 0,v=(a=r.photoURL)!==null&&a!==void 0?a:void 0,b=(c=r.tenantId)!==null&&c!==void 0?c:void 0,_=(l=r._redirectEventId)!==null&&l!==void 0?l:void 0,m=(d=r.createdAt)!==null&&d!==void 0?d:void 0,h=(u=r.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:k,isAnonymous:S,providerData:C,stsTokenManager:I}=r;z(g&&I,t,"internal-error");const R=In.fromJSON(this.name,I);z(typeof g=="string",t,"internal-error"),rr(f,t.name),rr(p,t.name),z(typeof k=="boolean",t,"internal-error"),z(typeof S=="boolean",t,"internal-error"),rr(x,t.name),rr(v,t.name),rr(b,t.name),rr(_,t.name),rr(m,t.name),rr(h,t.name);const F=new wt({uid:g,auth:t,email:p,emailVerified:k,displayName:f,isAnonymous:S,photoURL:v,phoneNumber:x,tenantId:b,stsTokenManager:R,createdAt:m,lastLoginAt:h});return C&&Array.isArray(C)&&(F.providerData=C.map(j=>Object.assign({},j))),_&&(F._redirectEventId=_),F}static async _fromIdTokenResponse(t,r,n=!1){const i=new In;i.updateFromServerResponse(r);const o=new wt({uid:r.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await ws(o),o}static async _fromGetAccountInfoResponse(t,r,n){const i=r.users[0];z(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Bh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new In;c.updateFromIdToken(n);const l=new wt({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ml(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,d),l}}/**
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
 */const Ou=new Map;function Vt(e){Jt(e instanceof Function,"Expected a class definition");let t=Ou.get(e);return t?(Jt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ou.set(e,t),t)}/**
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
 */class Wh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}Wh.type="NONE";const Lu=Wh;/**
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
 */function Wo(e,t,r){return`firebase:${e}:${t}:${r}`}class jn{constructor(t,r,n){this.persistence=t,this.auth=r,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=Wo(this.userKey,i.apiKey,o),this.fullPersistenceKey=Wo("persistence",i.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const r=await xs(this.auth,{idToken:t}).catch(()=>{});return r?wt._fromGetAccountInfoResponse(this.auth,r,t):null}return wt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,n="authUser"){if(!r.length)return new jn(Vt(Lu),t,n);const i=(await Promise.all(r.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Vt(Lu);const a=Wo(n,t.config.apiKey,t.name);let c=null;for(const d of r)try{const u=await d._get(a);if(u){let f;if(typeof u=="string"){const p=await xs(t,{idToken:u}).catch(()=>{});if(!p)break;f=await wt._fromGetAccountInfoResponse(t,p,u)}else f=wt._fromJSON(t,u);d!==o&&(c=f),o=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new jn(o,t,n):(o=l[0],c&&await o._set(a,c.toJSON()),await Promise.all(r.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new jn(o,t,n))}}/**
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
 */function zu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Gh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if($h(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Qh(t))return"Blackberry";if(Kh(t))return"Webos";if(Vh(t))return"Safari";if((t.includes("chrome/")||Hh(t))&&!t.includes("edge/"))return"Chrome";if(Yh(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function $h(e=De()){return/firefox\//i.test(e)}function Vh(e=De()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Hh(e=De()){return/crios\//i.test(e)}function Gh(e=De()){return/iemobile/i.test(e)}function Yh(e=De()){return/android/i.test(e)}function Qh(e=De()){return/blackberry/i.test(e)}function Kh(e=De()){return/webos/i.test(e)}function Gc(e=De()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function gx(e=De()){var t;return Gc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function mx(){return Ty()&&document.documentMode===10}function qh(e=De()){return Gc(e)||Yh(e)||Kh(e)||Qh(e)||/windows phone/i.test(e)||Gh(e)}/**
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
 */function Jh(e,t=[]){let r;switch(e){case"Browser":r=zu(De());break;case"Worker":r=`${zu(De())}-${e}`;break;default:r=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${Zi}/${n}`}/**
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
 */class vx{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const n=o=>new Promise((a,c)=>{try{const l=t(o);a(l)}catch(l){c(l)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const r=[];try{for(const n of this.queue)await n(t),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function yx(e,t={}){return Vn(e,"GET","/v2/passwordPolicy",Vc(e,t))}/**
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
 */const xx=6;class wx{constructor(t){var r,n,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=a.minPasswordLength)!==null&&r!==void 0?r:xx,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=t.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var r,n,i,o,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(r=l.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(t,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=t.length>=n),i&&(r.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<t.length;i++)n=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,r,n,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class bx{constructor(t,r,n,i){this.app=t,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mu(this),this.idTokenSubscription=new Mu(this),this.beforeStateQueue=new vx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=Vt(r)),this._initializationPromise=this.queue(async()=>{var n,i,o;if(!this._deleted&&(this.persistenceManager=await jn.create(this,t),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const r=await xs(this,{idToken:t}),n=await wt._fromGetAccountInfoResponse(this,r,t);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(Tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===c)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await ws(t)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=tx()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Tt(this.app))return Promise.reject(Hr(this));const r=t?$n(t):null;return r&&z(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(Hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Tt(this.app)?Promise.reject(Hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await yx(this),r=new wx(t);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ji("auth","Firebase",t())}onAuthStateChanged(t,r,n){return this.registerStateListener(this.authStateSubscription,t,r,n)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,n){return this.registerStateListener(this.idTokenSubscription,t,r,n)}authStateReady(){return new Promise((t,r)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged(()=>{n(),t()},r)}})}async revokeAccessToken(t){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await hx(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,r){const n=await this.getOrInitRedirectPersistenceManager(r);return t===null?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&Vt(t)||this._popupRedirectResolver;z(r,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[Vt(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===t?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,n,i){if(this._deleted)return()=>{};const o=typeof r=="function"?r:r.next.bind(r);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof r=="function"){const l=t.addObserver(r,n,i);return()=>{a=!0,l()}}else{const l=t.addObserver(r);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Jh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var t;if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const r=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return r!=null&&r.error&&J1(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function $s(e){return $n(e)}class Mu{constructor(t){this.auth=t,this.observer=null,this.addObserver=zy(r=>this.observer=r)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kx(e){Yc=e}function Sx(e){return Yc.loadJS(e)}function _x(){return Yc.gapiScript}function Cx(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Ex(e,t){const r=Ph(e,"auth");if(r.isInitialized()){const i=r.getImmediate(),o=r.getOptions();if(Mn(o,t??{}))return i;At(i,"already-initialized")}return r.initialize({options:t})}function Ix(e,t){const r=(t==null?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Vt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,t==null?void 0:t.popupRedirectResolver)}function jx(e,t,r){const n=$s(e);z(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const i=!1,o=Xh(t),{host:a,port:c}=Tx(t),l=c===null?"":`:${c}`,d={url:`${o}//${a}${l}/`},u=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){z(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),z(Mn(d,n.config.emulator)&&Mn(u,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=u,n.settings.appVerificationDisabledForTesting=!0,Ws(a)?(by(`${o}//${a}${l}`),_y("Auth",!0)):Rx()}function Xh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Tx(e){const t=Xh(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const o=i[1];return{host:o,port:Du(n.substr(o.length+1))}}else{const[o,a]=n.split(":");return{host:o,port:Du(a)}}}function Du(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Rx(){function e(){const t=document.createElement("p"),r=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Zh{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return $t("not implemented")}_getIdTokenResponse(t){return $t("not implemented")}_linkToIdToken(t,r){return $t("not implemented")}_getReauthenticationResolver(t){return $t("not implemented")}}/**
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
 */async function Tn(e,t){return ox(e,"POST","/v1/accounts:signInWithIdp",Vc(e,t))}/**
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
 */const Nx="http://localhost";class Xt extends Zh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new Xt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):At("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:n,signInMethod:i}=r,o=Uc(r,["providerId","signInMethod"]);if(!n||!i)return null;const a=new Xt(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const r=this.buildRequest();return Tn(t,r)}_linkToIdToken(t,r){const n=this.buildRequest();return n.idToken=r,Tn(t,n)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,Tn(t,r)}buildRequest(){const t={requestUri:Nx,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=Xi(r)}return t}}/**
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
 */class Qc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hn extends Qc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class Si extends Hn{static credentialFromJSON(t){const r=typeof t=="string"?JSON.parse(t):t;return z("providerId"in r&&"signInMethod"in r,"argument-error"),Xt._fromParams(r)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return z(t.idToken||t.accessToken,"argument-error"),Xt._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return Si.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return Si.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:o,nonce:a,providerId:c}=t;if(!n&&!i&&!r&&!o||!c)return null;try{return new Si(c)._credential({idToken:r,accessToken:n,nonce:a,pendingToken:o})}catch{return null}}}/**
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
 */class ar extends Hn{constructor(){super("facebook.com")}static credential(t){return Xt._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ar.credentialFromTaggedObject(t)}static credentialFromError(t){return ar.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ar.credential(t.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
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
 */class Dt extends Hn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return Xt._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:n}=t;if(!r&&!n)return null;try{return Dt.credential(r,n)}catch{return null}}}Dt.GOOGLE_SIGN_IN_METHOD="google.com";Dt.PROVIDER_ID="google.com";/**
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
 */class Ft extends Hn{constructor(){super("github.com")}static credential(t){return Xt._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ft.credential(t.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
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
 */class lr extends Hn{constructor(){super("twitter.com")}static credential(t,r){return Xt._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return lr.credentialFromTaggedObject(t)}static credentialFromError(t){return lr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=t;if(!r||!n)return null;try{return lr.credential(r,n)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */class Fn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,n,i=!1){const o=await wt._fromIdTokenResponse(t,n,i),a=Fu(n);return new Fn({user:o,providerId:a,_tokenResponse:n,operationType:r})}static async _forOperation(t,r,n){await t._updateTokensIfNecessary(n,!0);const i=Fu(n);return new Fn({user:t,providerId:i,_tokenResponse:n,operationType:r})}}function Fu(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class bs extends Ir{constructor(t,r,n,i){var o;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,bs.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,r,n,i){return new bs(t,r,n,i)}}function eg(e,t,r,n){return(t==="reauthenticate"?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?bs._fromErrorAndOperation(e,o,t,n):o})}async function Px(e,t,r=!1){const n=await $i(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return Fn._forOperation(e,"link",n)}/**
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
 */async function Ax(e,t,r=!1){const{auth:n}=e;if(Tt(n.app))return Promise.reject(Hr(n));const i="reauthenticate";try{const o=await $i(e,eg(n,i,t,e),r);z(o.idToken,n,"internal-error");const a=Hc(o.idToken);z(a,n,"internal-error");const{sub:c}=a;return z(e.uid===c,n,"user-mismatch"),Fn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&At(n,"user-mismatch"),o}}/**
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
 */async function Ox(e,t,r=!1){if(Tt(e.app))return Promise.reject(Hr(e));const n="signIn",i=await eg(e,n,t),o=await Fn._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(o.user),o}function Lx(e,t,r,n){return $n(e).onIdTokenChanged(t,r,n)}function zx(e,t,r){return $n(e).beforeAuthStateChanged(t,r)}const ks="__sak";/**
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
 */class tg{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(ks,"1"),this.storage.removeItem(ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Mx=1e3,Dx=10;class rg extends tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&t(r,i,n)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const n=t.key;r?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!r&&this.localCache[n]===a||this.notifyListeners(n,a)},o=this.storage.getItem(n);mx()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Dx):i()}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:n}),!0)})},Mx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}rg.type="LOCAL";const Fx=rg;/**
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
 */class ng extends tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}ng.type="SESSION";const ig=ng;/**
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
 */function Ux(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Vs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(i=>i.isListeningto(t));if(r)return r;const n=new Vs(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:n,eventType:i,data:o}=r.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(a).map(async d=>d(r.origin,o)),l=await Ux(c);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vs.receivers=[];/**
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
 */function Kc(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(Math.random()*10);return e+r}/**
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
 */class Bx{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,l)=>{const d=Kc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===d)switch(p.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(p.data.response);break;default:clearTimeout(u),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:r},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Pt(){return window}function Wx(e){Pt().location.href=e}/**
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
 */function og(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function $x(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vx(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Hx(){return og()?self:null}/**
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
 */const sg="firebaseLocalStorageDb",Gx=1,Ss="firebaseLocalStorage",ag="fbase_key";class to{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Hs(e,t){return e.transaction([Ss],t?"readwrite":"readonly").objectStore(Ss)}function Yx(){const e=indexedDB.deleteDatabase(sg);return new to(e).toPromise()}function Dl(){const e=indexedDB.open(sg,Gx);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const n=e.result;try{n.createObjectStore(Ss,{keyPath:ag})}catch(i){r(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Ss)?t(n):(n.close(),await Yx(),t(await Dl()))})})}async function Uu(e,t,r){const n=Hs(e,!0).put({[ag]:t,value:r});return new to(n).toPromise()}async function Qx(e,t){const r=Hs(e,!1).get(t),n=await new to(r).toPromise();return n===void 0?null:n.value}function Bu(e,t){const r=Hs(e,!0).delete(t);return new to(r).toPromise()}const Kx=800,qx=3;class lg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dl(),this.db)}async _withRetries(t){let r=0;for(;;)try{const n=await this._openDb();return await t(n)}catch(n){if(r++>qx)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vs._getInstance(Hx()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await $x(),!this.activeServiceWorker)return;this.sender=new Bx(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((t=n[0])===null||t===void 0)&&t.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Vx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Dl();return await Uu(t,ks,"1"),await Bu(t,ks),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uu(n,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(n=>Qx(n,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bu(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Hs(i,!1).getAll();return new to(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lg.type="LOCAL";const Jx=lg;new eo(3e4,6e4);/**
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
 */function cg(e,t){return t?Vt(t):(z(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class qc extends Zh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Tn(t,this._buildIdpRequest())}_linkToIdToken(t,r){return Tn(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return Tn(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function Xx(e){return Ox(e.auth,new qc(e),e.bypassAuthState)}function Zx(e){const{auth:t,user:r}=e;return z(r,t,"internal-error"),Ax(r,new qc(e),e.bypassAuthState)}async function ew(e){const{auth:t,user:r}=e;return z(r,t,"internal-error"),Px(r,new qc(e),e.bypassAuthState)}/**
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
 */class dg{constructor(t,r,n,i,o=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:n,postBody:i,tenantId:o,error:a,type:c}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:r,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Xx;case"linkViaPopup":case"linkViaRedirect":return ew;case"reauthViaPopup":case"reauthViaRedirect":return Zx;default:At(this.auth,"internal-error")}}resolve(t){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tw=new eo(2e3,1e4);async function rw(e,t,r){if(Tt(e.app))return Promise.reject(St(e,"operation-not-supported-in-this-environment"));const n=$s(e);X1(e,t,Qc);const i=cg(n,r);return new Br(n,"signInViaPopup",t,i).executeNotNull()}class Br extends dg{constructor(t,r,n,i,o){super(t,r,i,o),this.provider=n,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return z(t,this.auth,"internal-error"),t}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const t=Kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const t=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,tw.get())};t()}}Br.currentPopupAction=null;/**
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
 */const nw="pendingRedirect",$o=new Map;class iw extends dg{constructor(t,r,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let t=$o.get(this.auth._key());if(!t){try{const n=await ow(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(r){t=()=>Promise.reject(r)}$o.set(this.auth._key(),t)}return this.bypassAuthState||$o.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ow(e,t){const r=lw(t),n=aw(e);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function sw(e,t){$o.set(e._key(),t)}function aw(e){return Vt(e._redirectPersistence)}function lw(e){return Wo(nw,e.config.apiKey,e.name)}async function cw(e,t,r=!1){if(Tt(e.app))return Promise.reject(Hr(e));const n=$s(e),i=cg(n,t),a=await new iw(n,i,r).execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}/**
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
 */const dw=10*60*1e3;class uw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(r=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!fw(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){var n;if(t.error&&!ug(t)){const i=((n=t.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(St(this.auth,i))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const n=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=dw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wu(t))}saveEventToCache(t){this.cachedEventUids.add(Wu(t)),this.lastProcessedEventTime=Date.now()}}function Wu(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ug({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function fw(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ug(e);default:return!1}}/**
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
 */async function pw(e,t={}){return Vn(e,"GET","/v1/projects",t)}/**
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
 */const hw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gw=/^https?/;async function mw(e){if(e.config.emulator)return;const{authorizedDomains:t}=await pw(e);for(const r of t)try{if(vw(r))return}catch{}At(e,"unauthorized-domain")}function vw(e){const t=zl(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&n===""?r==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&a.hostname===n}if(!gw.test(r))return!1;if(hw.test(e))return n===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const yw=new eo(3e4,6e4);function $u(){const e=Pt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}function xw(e){return new Promise((t,r)=>{var n,i,o;function a(){$u(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$u(),r(St(e,"network-request-failed"))},timeout:yw.get()})}if(!((i=(n=Pt().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Pt().gapi)===null||o===void 0)&&o.load)a();else{const c=Cx("iframefcb");return Pt()[c]=()=>{gapi.load?a():r(St(e,"network-request-failed"))},Sx(`${_x()}?onload=${c}`).catch(l=>r(l))}}).catch(t=>{throw Vo=null,t})}let Vo=null;function ww(e){return Vo=Vo||xw(e),Vo}/**
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
 */const bw=new eo(5e3,15e3),kw="__/auth/iframe",Sw="emulator/auth/iframe",_w={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ew(e){const t=e.config;z(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?$c(t,Sw):`https://${e.config.authDomain}/${kw}`,n={apiKey:t.apiKey,appName:e.name,v:Zi},i=Cw.get(e.config.apiHost);i&&(n.eid=i);const o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${Xi(n).slice(1)}`}async function Iw(e){const t=await ww(e),r=Pt().gapi;return z(r,e,"internal-error"),t.open({where:document.body,url:Ew(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_w,dontclear:!0},n=>new Promise(async(i,o)=>{await n.restyle({setHideOnLeave:!1});const a=St(e,"network-request-failed"),c=Pt().setTimeout(()=>{o(a)},bw.get());function l(){Pt().clearTimeout(c),i(n)}n.ping(l).then(l,()=>{o(a)})}))}/**
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
 */const jw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tw=500,Rw=600,Nw="_blank",Pw="http://localhost";class Vu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Aw(e,t,r,n=Tw,i=Rw){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},jw),{width:n.toString(),height:i.toString(),top:o,left:a}),d=De().toLowerCase();r&&(c=Hh(d)?Nw:r),$h(d)&&(t=t||Pw,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[x,v])=>`${p}${x}=${v},`,"");if(gx(d)&&c!=="_self")return Ow(t||"",c),new Vu(null);const f=window.open(t||"",c,u);z(f,e,"popup-blocked");try{f.focus()}catch{}return new Vu(f)}function Ow(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const Lw="__/auth/handler",zw="emulator/auth/handler",Mw=encodeURIComponent("fac");async function Hu(e,t,r,n,i,o){z(e.config.authDomain,e,"auth-domain-config-required"),z(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:Zi,eventId:i};if(t instanceof Qc){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Ly(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))a[u]=f}if(t instanceof Hn){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const c=a;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await e._getAppCheckToken(),d=l?`#${Mw}=${encodeURIComponent(l)}`:"";return`${Dw(e)}?${Xi(c).slice(1)}${d}`}function Dw({config:e}){return e.emulator?$c(e,zw):`https://${e.authDomain}/${Lw}`}/**
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
 */const Oa="webStorageSupport";class Fw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ig,this._completeRedirectFn=cw,this._overrideRedirectResult=sw}async _openPopup(t,r,n,i){var o;Jt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Hu(t,r,n,zl(),i);return Aw(t,a,Kc())}async _openRedirect(t,r,n,i){await this._originValidation(t);const o=await Hu(t,r,n,zl(),i);return Wx(o),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:i,promise:o}=this.eventManagers[r];return i?Promise.resolve(i):(Jt(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(t);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(t){const r=await Iw(t),n=new uw(t);return r.register("authEvent",i=>(z(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=r,n}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(Oa,{type:Oa},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Oa];a!==void 0&&r(!!a),At(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=mw(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return qh()||Vh()||Gc()}}const Uw=Fw;var Gu="@firebase/auth",Yu="1.10.8";/**
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
 */class Bw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(n=>{t((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);r&&(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ww(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $w(e){Bi(new Dn("auth",(t,{options:r})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=n.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:a,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jh(e)},d=new bx(n,i,o,l);return Ix(d,r),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,n)=>{t.getProvider("auth-internal").initialize()})),Bi(new Dn("auth-internal",t=>{const r=$s(t.getProvider("auth").getImmediate());return(n=>new Bw(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Gu,Yu,Ww(e)),En(Gu,Yu,"esm2017")}/**
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
 */const Vw=5*60,Hw=jh("authIdTokenMaxAge")||Vw;let Qu=null;const Gw=e=>async t=>{const r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>Hw)return;const i=r==null?void 0:r.token;Qu!==i&&(Qu=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yw(e=M1()){const t=Ph(e,"auth");if(t.isInitialized())return t.getImmediate();const r=Ex(e,{popupRedirectResolver:Uw,persistence:[Jx,Fx,ig]}),n=jh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const a=Gw(o.toString());zx(r,a,()=>a(r.currentUser)),Lx(r,c=>a(c))}}const i=xy("auth");return i&&jx(r,`http://${i}`),r}function Qw(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}kx({loadJS(e){return new Promise((t,r)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=i=>{const o=St("internal-error");o.customData=i,r(o)},n.type="text/javascript",n.charset="UTF-8",Qw().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$w("Browser");const fg={apiKey:"AIzaSyCNsYDBSfYMJUxqbkC3Cb_w6CYGtW4Xf20",authDomain:"cloudvault-58446.firebaseapp.com",projectId:"cloudvault-58446",storageBucket:"cloudvault-58446.firebasestorage.app",messagingSenderId:"378535306521",appId:"1:378535306521:web:2e5fe57db925753d0f5188"},Kw=["google","github","microsoft"];let La=null,Ku=null;function qw(){return _s()?(La||(La=Ah(fg),Ku=Yw(La)),Ku):null}function _s(){return!0}function Jw(){const e=Object.entries(fg).filter(([,t])=>!t).map(([t])=>t);return{configured:_s(),providers:Kw.map(t=>({id:t,configured:_s()})),missingEnv:e}}async function Xw(e){const t=qw();if(!t)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env variables.");const n={google:new Dt,github:new Ft,microsoft:new Si("microsoft.com")}[e];if(!n)throw new Error("Unknown provider");const i=await rw(t,n),o=await i.user.getIdToken(),a=await fetch(`${ut}/auth/firebase`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:o,email:i.user.email,fullName:i.user.displayName,avatarUrl:i.user.photoURL,provider:e})}),c=await a.json();if(!a.ok)throw new Error(c.error||c.message||"Firebase login failed");return c.success?c.data:c}function Zw({onVerified:e,onError:t,onExpire:r,theme:n="auto",size:i="normal"}){const o=y.useRef(null),a=y.useRef(null),[c,l]=y.useState(!1),[d,u]=y.useState(!0),[f,p]=y.useState(null);y.useEffect(()=>{if(window.turnstile)l(!0),u(!1);else{const v=document.querySelector('script[data-cv-turnstile="true"]'),b=v||document.createElement("script");b.src="https://challenges.cloudflare.com/turnstile/v0/api.js",b.async=!0,b.defer=!0,b.dataset.cvTurnstile="true",b.onload=()=>{l(!0),u(!1),console.log("TURNSTILE: Script loaded")},b.onerror=()=>{p("Failed to load Turnstile"),u(!1),t==null||t("Failed to load Turnstile")},v||document.head.appendChild(b)}return()=>{if(a.current&&window.turnstile)try{window.turnstile.remove(a.current),a.current=null}catch(v){console.error("TURNSTILE: Error removing widget:",v)}}},[]),y.useEffect(()=>{if(c&&o.current&&window.turnstile&&!a.current){const v="0x4AAAAAADkh2aePP5UGcXcH",b=["localhost","127.0.0.1","::1"].includes(window.location.hostname);if((v==null?void 0:v.startsWith("1x"))&&!b){const m="Turnstile production site key is not configured";p(m),t==null||t(m),u(!1);return}console.log("TURNSTILE: Rendering widget with site key:",v);try{a.current=window.turnstile.render(o.current,{sitekey:v,theme:n,size:i,callback:m=>{console.log("TURNSTILE: Verification successful"),p(null),e==null||e(m)},"error-callback":m=>{console.error("TURNSTILE: Verification error:",m);const h="Verification failed. For local testing, use the Turnstile test site key; for production, make sure this hostname is allowed in Cloudflare.";p(h),t==null||t(h)},"expired-callback":()=>{console.log("TURNSTILE: Token expired"),p("Verification expired. Please try again."),r==null||r()}})}catch(m){console.error("TURNSTILE: Error rendering widget:",m),p("Failed to render Turnstile widget"),t==null||t("Failed to render Turnstile widget")}}},[c,n,i,e,t,r]);const x=()=>{if(a.current&&window.turnstile)try{window.turnstile.reset(a.current),p(null)}catch(v){console.error("TURNSTILE: Error resetting widget:",v)}};return y.useEffect(()=>{o.current&&(o.current.reset=x)},[]),d?s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",background:"var(--bg-secondary)",borderRadius:"var(--radius)",border:"1px solid var(--border)"},children:s.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid var(--border)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})}):f?s.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"var(--radius)",border:"1px solid var(--danger)",color:"var(--danger)",fontSize:"13px",textAlign:"center"},children:[f,s.jsx("button",{type:"button",onClick:x,style:{marginTop:"8px",padding:"6px 12px",background:"var(--danger)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px"},children:"Retry"})]}):s.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",minHeight:i==="compact"?140:70,overflow:"hidden"},children:s.jsx("div",{ref:o})})}const Or=(e="")=>{const t=e.toLowerCase();return t.includes("failed to fetch")||t.includes("cannot reach")||t.includes("networkerror")?"Unable to reach CloudVault. Please check your connection.":t.includes("firebase")||t.includes("oauth")||t.includes("access token")?"Social login failed. Please try again.":e||"Something went wrong. Please try again."},za=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),qu=e=>e.length>=8&&/[A-Z]/.test(e)&&/[a-z]/.test(e)&&/\d/.test(e);function eb({size:e=20}){return s.jsx("span",{style:{display:"inline-block",width:e,height:e,border:"2.5px solid rgba(255,255,255,0.25)",borderTopColor:"#fff",borderRadius:"50%",animation:"cv-spin 0.7s linear infinite"}})}function tb({size:e=42}){return s.jsx("span",{style:{width:e,height:e,borderRadius:"50%",background:"var(--mega-red, #d90007)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(217,0,7,.35)",flexShrink:0,overflow:"hidden"},children:s.jsx("img",{src:we.logoImage,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function Io({label:e,type:t="text",value:r,onChange:n,placeholder:i,autoFocus:o,error:a}){const[c,l]=y.useState(!1),d=r&&r.length>0;return s.jsxs("div",{style:{position:"relative",marginBottom:4},children:[s.jsx("label",{style:{position:"absolute",left:16,top:c||d?8:"50%",transform:c||d?"translateY(0) scale(0.82)":"translateY(-50%)",transformOrigin:"left top",fontSize:c||d?11:14,fontWeight:600,color:c?"var(--cv-accent)":a?"var(--cv-danger)":"var(--cv-text-muted)",transition:"all 0.18s cubic-bezier(0.4,0,0.2,1)",pointerEvents:"none",zIndex:1,letterSpacing:c||d?"0.04em":"0",textTransform:c||d?"uppercase":"none"},children:e}),s.jsx("input",{type:t,value:r,onChange:n,onFocus:()=>l(!0),onBlur:()=>l(!1),autoFocus:o,placeholder:c?i:"",style:{width:"100%",padding:"28px 16px 10px",background:"var(--cv-bg-card)",border:`1.5px solid ${a?"var(--cv-danger)":c?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:"var(--cv-radius-lg)",color:"var(--cv-text)",fontSize:15,outline:"none",transition:"border-color 0.18s ease, box-shadow 0.18s ease",boxShadow:c?`0 0 0 3px ${a?"rgba(239,68,68,0.12)":"rgba(99,102,241,0.12)"}`:"none"}}),a&&s.jsx("div",{style:{fontSize:12,color:"var(--cv-danger)",marginTop:4,paddingLeft:4,fontWeight:500},children:a})]})}function rb({value:e,onChange:t}){const r=[y.useRef(),y.useRef(),y.useRef(),y.useRef(),y.useRef(),y.useRef()],n=(e+"      ").slice(0,6).split(""),i=(a,c)=>{var l,d;if(c.key==="Backspace"){if(n[a]!==" "){const u=n.map((f,p)=>p===a?" ":f).join("").trimEnd();t(u)}else if(a>0){(l=r[a-1].current)==null||l.focus();const u=n.map((f,p)=>p===a-1?" ":f).join("").trimEnd();t(u)}}else if(c.key>="0"&&c.key<="9"){c.preventDefault();const u=n.map((f,p)=>p===a?c.key:f).join("").replace(/ /g,"");t(u.slice(0,6)),a<5&&((d=r[a+1].current)==null||d.focus())}},o=a=>{var l;const c=a.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);c&&(t(c),(l=r[Math.min(c.length,5)].current)==null||l.focus())};return s.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",margin:"8px 0"},children:r.map((a,c)=>{var l,d,u,f;return s.jsx("input",{ref:a,type:"text",inputMode:"numeric",maxLength:1,value:((l=n[c])==null?void 0:l.trim())||"",onKeyDown:p=>i(c,p),onPaste:o,onChange:()=>{},style:{width:52,height:60,textAlign:"center",fontSize:24,fontWeight:800,background:"var(--cv-bg-card)",border:`2px solid ${(d=n[c])!=null&&d.trim()?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:14,color:"var(--cv-text)",outline:"none",transition:"border-color 0.18s ease, transform 0.1s ease",transform:(u=n[c])!=null&&u.trim()?"scale(1.05)":"scale(1)",boxShadow:(f=n[c])!=null&&f.trim()?"0 0 0 3px rgba(99,102,241,0.15)":"none"}},c)})})}function nb({label:e,icon:t,onClick:r,disabled:n}){const[i,o]=y.useState(!1);return s.jsxs("button",{type:"button",onClick:r,disabled:n,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,width:"100%",padding:"12px 16px",minHeight:48,background:i?"rgba(0,183,79,.08)":"var(--bg-card)",border:i?"1px solid rgba(0,183,79,.35)":"1px solid var(--border)",borderRadius:14,cursor:n?"not-allowed":"pointer",color:"var(--text)",fontSize:14,fontWeight:700,transition:"all 0.2s ease",opacity:n?.5:1,boxShadow:i?"0 12px 28px rgba(0,0,0,.08)":"none"},children:[s.jsx("span",{style:{display:"flex",alignItems:"center"},children:t}),s.jsxs("span",{children:["Continue with ",e]})]})}function ib({password:e}){if(!e)return null;const t=[{label:"8+ chars",ok:e.length>=8},{label:"Uppercase",ok:/[A-Z]/.test(e)},{label:"Lowercase",ok:/[a-z]/.test(e)},{label:"Number",ok:/\d/.test(e)}],r=t.filter(i=>i.ok).length,n=["var(--cv-danger)","var(--cv-danger)","#f59e0b","#10b981"];return s.jsxs("div",{style:{marginTop:6},children:[s.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:[0,1,2,3].map(i=>s.jsx("div",{style:{flex:1,height:3,borderRadius:99,background:i<r?n[r-1]:"var(--cv-border)",transition:"background 0.3s ease"}},i))}),s.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:t.map(i=>s.jsxs("span",{style:{fontSize:11,color:i.ok?"#10b981":"var(--cv-text-muted)",fontWeight:500},children:[i.ok?"✓":"○"," ",i.label]},i.label))})]})}const O={LOGIN:"login",REGISTER:"register",FORGOT:"forgot",VERIFY_OTP:"verify_otp",RESET_PASSWORD:"reset_password"};function ob({onAuth:e,onBack:t,onNeedsVerification:r,initialMode:n="login"}){const[i,o]=y.useState(n==="login"?O.LOGIN:O.REGISTER),[a,c]=y.useState(!1),[l,d]=y.useState(""),[u,f]=y.useState(""),[p,x]=y.useState("forward"),[v,b]=y.useState(""),[_,m]=y.useState(""),[h,g]=y.useState(""),[k,S]=y.useState(""),[C,I]=y.useState(""),[R,F]=y.useState(""),[j,D]=y.useState(!0),[Z,xe]=y.useState(!1),[Ie,ge]=y.useState(!1),[pe,Se]=y.useState(0),[N,L]=y.useState(null),[M,K]=y.useState(!1),[te,ft]=y.useState(0),je="0x4AAAAAADkh2aePP5UGcXcH",pt=typeof window<"u"&&["localhost","127.0.0.1","::1"].includes(window.location.hostname),Te=!!(!(je==null?void 0:je.startsWith("1x"))||pt),ro=_s();Jw();const[tt,Ge]=y.useState({});y.useEffect(()=>{if(pe<=0)return;const T=setTimeout(()=>Se(se=>se-1),1e3);return()=>clearTimeout(T)},[pe]);const Ct=T=>{x("forward"),d(""),f(""),Ge({}),o(T)},Ye=()=>{x("back"),d(""),f(""),Ge({}),i===O.REGISTER||i===O.FORGOT?o(O.LOGIN):i===O.VERIFY_OTP?o(O.FORGOT):i===O.RESET_PASSWORD?o(O.VERIFY_OTP):t==null||t()},tn=()=>{L(null),K(!1),ft(T=>T+1)},er=async()=>{var se,Rr;const T={};if(za(v)||(T.email="Enter a valid email address"),_||(T.password="Password is required"),Object.keys(T).length){Ge(T);return}if(Te&&!M){d("Please complete the security check");return}c(!0),d("");try{const Y=await it("/auth/login",{method:"POST",body:JSON.stringify({email:v,password:_,rememberMe:j,...Te&&{turnstileToken:N}})});if(!(Y!=null&&Y.accessToken))throw new Error("Login failed. Please try again.");const Yn=j?localStorage:sessionStorage;Yn.setItem("cv_token",Y.accessToken),Y.refreshToken&&Yn.setItem("cv_refreshToken",Y.refreshToken),Yn.setItem("cv_user",((se=Y.user)==null?void 0:se.fullName)||v),e(Y.accessToken,Y.refreshToken,((Rr=Y.user)==null?void 0:Rr.fullName)||v,Y.user,j)}catch(Y){d(Or(Y.message)),tn()}c(!1)},Ys=async()=>{const T={};if((!k||k.trim().length<2)&&(T.fullName="Full name must be at least 2 characters"),za(v)||(T.email="Enter a valid email address"),qu(_)||(T.password="Password must be 8+ chars with uppercase, lowercase, and number"),_!==h&&(T.confirmPassword="Passwords do not match"),Object.keys(T).length){Ge(T);return}if(Te&&!M){d("Please complete the security check");return}c(!0),d("");try{await it("/auth/register",{method:"POST",body:JSON.stringify({email:v,password:_,fullName:k,...Te&&{turnstileToken:N}})}),f("Account created! Check your email to verify your account, then sign in."),Ct(O.LOGIN)}catch(se){d(Or(se.message)),tn()}c(!1)},Ot=async()=>{if(!za(v)){Ge({email:"Enter a valid email address"});return}if(Te&&!M){d("Please complete the security check");return}c(!0),d("");try{await it("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:v,...Te&&{turnstileToken:N}})}),Se(60),Ct(O.VERIFY_OTP),f("A 6-digit OTP has been sent to your email.")}catch(T){d(Or(T.message)),tn()}c(!1)},no=async()=>{if(!(pe>0)){c(!0),d("");try{await it("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:v})}),Se(60),f("A new OTP has been sent.")}catch(T){d(Or(T.message))}c(!1)}},jr=async()=>{if(C.length!==6){d("Enter the 6-digit code from your email");return}c(!0),d("");try{const T=await it("/auth/verify-otp",{method:"POST",body:JSON.stringify({email:v,otp:C})});F(T.resetToken),Ct(O.RESET_PASSWORD)}catch(T){d(Or(T.message)),I("")}c(!1)},ht=async()=>{const T={};if(qu(_)||(T.password="Password must be 8+ chars with uppercase, lowercase, and number"),_!==h&&(T.confirmPassword="Passwords do not match"),Object.keys(T).length){Ge(T);return}c(!0),d("");try{await it("/auth/reset-password",{method:"POST",body:JSON.stringify({token:R,newPassword:_})}),f("Password reset successfully! Please sign in."),m(""),g(""),Ct(O.LOGIN)}catch(se){d(Or(se.message))}c(!1)},Gn=async T=>{var se,Rr;if(!ro){d("Social login is not available. Please use email and password.");return}c(!0),d("");try{const Y=await Xw(T);if(!(Y!=null&&Y.accessToken))throw new Error("Social login failed.");localStorage.setItem("cv_token",Y.accessToken),Y.refreshToken&&localStorage.setItem("cv_refreshToken",Y.refreshToken),localStorage.setItem("cv_user",((se=Y.user)==null?void 0:se.fullName)||v),e(Y.accessToken,Y.refreshToken,((Rr=Y.user)==null?void 0:Rr.fullName)||v,Y.user,!0)}catch(Y){d(Or(Y.message))}c(!1)},Tr={[O.LOGIN]:{title:"Welcome back",sub:`Sign in to ${we.name}`},[O.REGISTER]:{title:"Create account",sub:"Start your CloudVault journey"},[O.FORGOT]:{title:"Forgot password?",sub:"We'll send a code to your email"},[O.VERIFY_OTP]:{title:"Enter your code",sub:`Sent to ${v||"your email"}`},[O.RESET_PASSWORD]:{title:"New password",sub:"Choose a strong password"}},rt=!a&&(!Te||M||i===O.VERIFY_OTP||i===O.RESET_PASSWORD),rn=()=>{i===O.LOGIN?er():i===O.REGISTER?Ys():i===O.FORGOT?Ot():i===O.VERIFY_OTP?jr():i===O.RESET_PASSWORD&&ht()},J={[O.LOGIN]:"Sign in",[O.REGISTER]:"Create account",[O.FORGOT]:"Send code",[O.VERIFY_OTP]:"Verify code",[O.RESET_PASSWORD]:"Reset password"}[i];return s.jsxs("div",{className:"auth-splash",children:[s.jsx("style",{children:Vr}),s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"auth-cloud-logo",style:{marginBottom:48},children:[s.jsx("div",{className:"auth-cloud-bg"}),s.jsx("div",{className:"auth-mega-mark",children:s.jsx("div",{className:"auth-mega-circle",children:s.jsx("img",{src:we.logoImage,alt:""})})})]}),s.jsxs("div",{className:"cv-auth-card",style:{width:"100%",maxWidth:440,background:"rgba(20, 20, 20, .96)",borderRadius:20,border:"1px solid rgba(255,255,255,.08)",boxShadow:"0 32px 80px rgba(0,0,0,0.55)",overflow:"hidden",position:"relative"},children:[s.jsx("div",{style:{height:3,background:"var(--cv-accent)",position:"absolute",top:0,left:0,right:0}}),s.jsxs("div",{style:{padding:"36px 32px 32px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:28,justifyContent:"center"},children:[s.jsx(tb,{size:36}),s.jsx("div",{style:{fontSize:18,fontWeight:800,color:"var(--cv-text)",letterSpacing:"-0.02em"},children:we.name})]}),i!==O.LOGIN&&s.jsx("button",{type:"button",onClick:Ye,style:{display:"flex",alignItems:"center",gap:6,marginBottom:24,background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,padding:"4px 0",transition:"color 0.15s"},onMouseEnter:T=>T.currentTarget.style.color="var(--text)",onMouseLeave:T=>T.currentTarget.style.color="var(--text-muted)",children:"← Back"}),s.jsxs("div",{className:"cv-auth-step",style:{marginBottom:28},children:[s.jsx("h1",{style:{fontSize:26,fontWeight:800,color:"var(--text)",letterSpacing:"-0.03em",margin:"0 0 4px"},children:Tr[i].title}),s.jsx("p",{style:{fontSize:14,color:"var(--text-muted)",margin:0,fontWeight:500},children:Tr[i].sub})]}),(i===O.LOGIN||i===O.REGISTER)&&s.jsx("div",{style:{display:"flex",gap:4,background:"var(--surface-raised)",borderRadius:14,padding:4,marginBottom:24,border:"1px solid var(--border)"},children:[O.LOGIN,O.REGISTER].map(T=>s.jsx("button",{type:"button",onClick:()=>Ct(T),style:{flex:1,padding:"9px 12px",borderRadius:10,border:"none",background:i===T?"var(--bg-card)":"transparent",color:i===T?"var(--text)":"var(--text-muted)",fontSize:14,fontWeight:i===T?700:500,cursor:"pointer",boxShadow:i===T?"0 2px 8px rgba(0,0,0,0.08)":"none",transition:"all 0.18s ease"},children:T===O.LOGIN?"Sign In":"Sign Up"},T))}),s.jsxs("div",{className:"cv-auth-step",style:{display:"flex",flexDirection:"column",gap:14},children:[i===O.REGISTER&&s.jsx(Io,{label:"Full Name",value:k,onChange:T=>{S(T.target.value),Ge(se=>({...se,fullName:""}))},placeholder:"Jane Smith",autoFocus:!0,error:tt.fullName}),[O.LOGIN,O.REGISTER,O.FORGOT].includes(i)&&s.jsx(Io,{label:"Email Address",type:"email",value:v,onChange:T=>{b(T.target.value),Ge(se=>({...se,email:""}))},placeholder:"you@example.com",autoFocus:i===O.LOGIN||i===O.FORGOT,error:tt.email}),[O.LOGIN,O.REGISTER,O.RESET_PASSWORD].includes(i)&&s.jsxs("div",{children:[s.jsxs("div",{style:{position:"relative"},children:[s.jsx(Io,{label:"Password",type:Z?"text":"password",value:_,onChange:T=>{m(T.target.value),Ge(se=>({...se,password:""}))},placeholder:i===O.LOGIN?"Your password":"Min 8 chars, A-Z, 0-9",autoFocus:i===O.RESET_PASSWORD,error:tt.password}),s.jsx("button",{type:"button",onClick:()=>xe(T=>!T),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:tt.password?-10:0},children:Z?"Hide":"Show"})]}),(i===O.REGISTER||i===O.RESET_PASSWORD)&&s.jsx(ib,{password:_})]}),[O.REGISTER,O.RESET_PASSWORD].includes(i)&&s.jsxs("div",{style:{position:"relative"},children:[s.jsx(Io,{label:"Confirm Password",type:Ie?"text":"password",value:h,onChange:T=>{g(T.target.value),Ge(se=>({...se,confirmPassword:""}))},placeholder:"Repeat your password",error:tt.confirmPassword}),s.jsx("button",{type:"button",onClick:()=>ge(T=>!T),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:tt.confirmPassword?-10:0},children:Ie?"Hide":"Show"})]}),i===O.VERIFY_OTP&&s.jsxs("div",{children:[s.jsx(rb,{value:C,onChange:I}),s.jsxs("div",{style:{textAlign:"center",marginTop:12},children:[s.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:["Didn't get the code?"," "]}),s.jsx("button",{type:"button",onClick:no,disabled:pe>0||a,style:{background:"none",border:"none",cursor:pe>0?"default":"pointer",color:pe>0?"var(--text-muted)":"var(--accent-blue)",fontSize:13,fontWeight:600},children:pe>0?`Resend in ${pe}s`:"Resend"})]})]}),i===O.LOGIN&&s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},children:[s.jsx("input",{type:"checkbox",checked:j,onChange:T=>D(T.target.checked),style:{width:16,height:16,accentColor:"var(--accent-blue)"}}),s.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:500},children:"Remember me"})]}),s.jsx("button",{type:"button",onClick:()=>Ct(O.FORGOT),style:{background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:13,fontWeight:600},children:"Forgot password?"})]})]}),l&&s.jsxs("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:12,color:"#ef4444",fontSize:13,fontWeight:500,lineHeight:1.5},children:[l,l.includes("verify your email")&&s.jsx("button",{type:"button",onClick:async()=>{try{await it("/auth/resend-verification",{method:"POST",body:JSON.stringify({email:v})}),f("Verification email resent. Check your inbox."),d("")}catch{}},style:{display:"block",marginTop:8,background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:12,fontWeight:600},children:"Resend verification email →"})]}),u&&s.jsx("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:12,color:"#10b981",fontSize:13,fontWeight:500,lineHeight:1.5},children:u}),Te&&[O.LOGIN,O.REGISTER,O.FORGOT].includes(i)&&s.jsx("div",{style:{marginTop:16},children:s.jsx(Zw,{onVerified:T=>{L(T),K(!0)},onError:T=>{d(T||"Security check failed. Please refresh."),K(!1)},onExpire:()=>{L(null),K(!1)}},te)}),s.jsx("button",{type:"button",onClick:rn,disabled:!rt,style:{width:"100%",marginTop:20,padding:"14px 20px",background:rt?"var(--cv-accent)":"var(--surface-raised)",color:rt?"#fff":"var(--text-muted)",border:"none",borderRadius:14,fontSize:15,fontWeight:700,cursor:rt?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"all 0.2s ease",boxShadow:rt?"0 16px 34px rgba(217,0,7,0.28)":"none",transform:"translateY(0)"},onMouseEnter:T=>{rt&&(T.currentTarget.style.transform="translateY(-1px)")},onMouseLeave:T=>{T.currentTarget.style.transform="translateY(0)"},children:a?s.jsx(eb,{}):J}),[O.LOGIN,O.REGISTER].includes(i)&&s.jsxs("div",{style:{marginTop:20},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:"or"}),s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[{id:"google",label:"Google",icon:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),s.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),s.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),s.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})},{id:"github",label:"GitHub",icon:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})})},{id:"microsoft",label:"Microsoft",icon:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M10 0H0v10h10V0z",fill:"#F25022"}),s.jsx("path",{d:"M21 0H11v10h10V0z",fill:"#7FBA00"}),s.jsx("path",{d:"M10 11H0v10h10V11z",fill:"#00A4EF"}),s.jsx("path",{d:"M21 11H11v10h10V11z",fill:"#FFB900"})]})}].map(T=>s.jsx(nb,{label:T.label,icon:T.icon,disabled:a||!ro,onClick:()=>Gn(T.id)},T.id))})]}),i===O.LOGIN&&s.jsx("div",{style:{textAlign:"center",marginTop:20},children:s.jsx("button",{type:"button",onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:500},children:"← Back to home"})})]})]})]})}function sb({size:e=22}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function pg({file:e,token:t,onClose:r,customFetchBlob:n}){const[i,o]=y.useState(null),[a,c]=y.useState(""),[l,d]=y.useState(!0),[u,f]=y.useState(""),[p,x]=y.useState(1),[v,b]=y.useState(0),[_,m]=y.useState(!1),h=ny(e.mimeType);y.useEffect(()=>{let S=null,C=!1;return(async()=>{d(!0),f("");try{const I=n?await n():await Mc(e.id,t,{disposition:"preview"});if(C)return;if(h==="text"){const R=await I.text();c(R)}else S=URL.createObjectURL(I),o(S)}catch(I){C||f(I.message||"Preview failed")}finally{C||d(!1)}})(),()=>{C=!0,S&&URL.revokeObjectURL(S)}},[e.id,t,h]);const g=(S,C,I=!1)=>s.jsx("button",{type:"button",onClick:C,disabled:I,style:{padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",cursor:I?"not-allowed":"pointer",fontFamily:"var(--font)",fontSize:12,fontWeight:600},children:S}),k=()=>l?s.jsx("div",{style:{padding:48,textAlign:"center"},children:s.jsx(sb,{size:32})}):u?s.jsx("p",{style:{color:"var(--danger)",padding:24,textAlign:"center"},children:u}):h==="image"&&i?s.jsx("img",{src:i,alt:e.name,style:{maxWidth:_?"96vw":"80vw",maxHeight:_?"90vh":"70vh",borderRadius:12,transform:`scale(${p}) rotate(${v}deg)`,transition:"transform .2s ease"}}):h==="pdf"&&i?s.jsx("iframe",{src:i,title:e.name,style:{width:"75vw",height:"75vh",border:"none",borderRadius:12}}):h==="video"&&i?s.jsx("video",{src:i,controls:!0,style:{maxWidth:"80vw",maxHeight:"75vh",borderRadius:12}}):h==="audio"&&i?s.jsx("audio",{src:i,controls:!0,style:{width:"min(480px, 80vw)"}}):h==="text"?s.jsx("pre",{style:{maxWidth:"80vw",maxHeight:"70vh",overflow:"auto",padding:16,background:"var(--bg-card)",borderRadius:12,color:"var(--text)",fontSize:13,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:a}):s.jsx("p",{style:{padding:24,color:"var(--text-muted)"},children:"Preview not available for this file type."});return s.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:1e3,background:_?"#000":"rgba(0,0,0,.88)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)",animation:"fadeIn .2s ease"},children:s.jsxs("div",{onClick:S=>S.stopPropagation(),style:{background:_?"transparent":"var(--bg-primary)",borderRadius:_?0:20,border:_?"none":"1.5px solid var(--border)",maxWidth:_?"100vw":"95vw",maxHeight:_?"100vh":"95vh",width:_?"100%":void 0,height:_?"100%":void 0,overflow:"auto",padding:_?16:24,boxShadow:_?"none":"var(--shadow)",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:12},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:700,fontSize:16,flex:1,overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),h==="image"&&s.jsxs("div",{style:{display:"flex",gap:6},children:[g("−",()=>x(S=>Math.max(.25,S-.25))),g("+",()=>x(S=>Math.min(4,S+.25))),g("↻",()=>b(S=>(S+90)%360)),g(_?"⊡":"⛶",()=>m(S=>!S))]}),s.jsx("button",{type:"button",onClick:r,style:{background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:8,color:"var(--text-secondary)",cursor:"pointer",width:32,height:32},children:"✕"})]}),s.jsx("div",{style:{display:"flex",justifyContent:"center"},children:k()})]})})}function ab({fileId:e,token:t,alt:r,mimeType:n}){const[i,o]=y.useState(null),[a,c]=y.useState(!1);return y.useEffect(()=>{if(!e||!t||!(n!=null&&n.startsWith("image/")))return;let l=null,d=!1;return Mc(e,t,{disposition:"preview"}).then(u=>{d||(l=URL.createObjectURL(u),o(l))}).catch(()=>{d||c(!0)}),()=>{d=!0,l&&URL.revokeObjectURL(l)}},[e,t,n]),!(n!=null&&n.startsWith("image/"))||a?s.jsx("div",{style:{fontSize:44,display:"flex"},children:qi(n)}):i?s.jsx("img",{src:i,alt:r,style:{width:"100%",height:"100%",objectFit:"cover"},onError:()=>c(!0)}):s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite"}})}function lb({trashedFiles:e,trashedFolders:t,loading:r,onRestoreFile:n,onRestoreFolder:i,onPermanentDelete:o,onEmptyTrash:a,onBack:c}){return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:c,style:cb,children:"← Back to My Cloud"}),s.jsx("h2",{style:{color:"var(--text)",fontWeight:800,fontSize:22,marginTop:8},children:"Trash"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"Items in trash still count toward storage until permanently deleted."})]}),(e.length>0||t.length>0)&&s.jsx("button",{type:"button",onClick:a,style:db,children:"Empty trash"})]}),r?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading trash…"}):e.length===0&&t.length===0?s.jsxs("div",{style:{textAlign:"center",padding:64,color:"var(--text-muted)",border:"1px dashed var(--border)",borderRadius:16},children:[s.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🗑️"}),s.jsx("div",{style:{fontWeight:700},children:"Trash is empty"})]}):s.jsxs(s.Fragment,{children:[t.length>0&&s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FOLDERS"}),t.map(l=>s.jsx(Ju,{icon:"📁",name:l.name,meta:"Folder",onRestore:()=>i(l.id)},l.id))]}),e.length>0&&s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FILES"}),e.map(l=>s.jsx(Ju,{icon:qi(l.mimeType),name:l.name,meta:`${Ae(l.size)} · ${Ki(l.trashedAt||l.deletedAt)}`,onRestore:()=>n(l.id),onDelete:()=>o(l)},l.id))]})]})]})}function Ju({icon:e,name:t,meta:r,onRestore:n,onDelete:i}){return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,marginBottom:8},children:[s.jsx("span",{style:{fontSize:24},children:e}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:r})]}),s.jsx("button",{type:"button",onClick:n,style:Xu,children:"Restore"}),i&&s.jsx("button",{type:"button",onClick:i,style:{...Xu,color:"var(--danger)"},children:"Delete forever"})]})}const cb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"},db={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontFamily:"var(--font)"},Xu={padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--font)"};function ub({file:e,mode:t,folders:r,currentFolderId:n,onConfirm:i,onCancel:o}){const[a,c]=y.useState(n||""),[l,d]=y.useState(e.name),u=hg(r);return s.jsx("div",{onClick:o,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:f=>f.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(420px, 92vw)",animation:"scaleIn .2s ease"},children:[s.jsxs("h3",{style:{color:"var(--text)",fontWeight:700,fontSize:18,marginBottom:8},children:[t==="move"?"Move":"Copy"," file"]}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:20},children:e.name}),s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"Destination folder"}),s.jsxs("select",{value:a,onChange:f=>c(f.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"},children:[s.jsx("option",{value:"",children:"My Cloud (root)"}),u.map(f=>s.jsxs("option",{value:f.id,disabled:f.id===e.folderId,children:["—".repeat(f.depth)," ",f.name]},f.id))]}),t==="copy"&&s.jsxs(s.Fragment,{children:[s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"New name (optional)"}),s.jsx("input",{value:l,onChange:f=>d(f.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"}})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:o,style:gg,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>i({targetFolderId:a||null,newName:t==="copy"?l:void 0}),style:fb,children:t==="move"?"Move":"Copy"})]})]})})}function hg(e,t=0){var n;const r=[];for(const i of e)r.push({...i,depth:t}),(n=i.children)!=null&&n.length&&r.push(...hg(i.children,t+1));return r}const gg={padding:"10px 20px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},fb={...gg,border:"none",background:"var(--accent)",color:"#fff"};function pb({file:e,allTags:t,onSave:r,onCancel:n}){const[i,o]=y.useState(e.tags||[]),[a,c]=y.useState(""),l=d=>{const u=d.trim().toLowerCase();!u||i.includes(u)||i.length>=20||(o([...i,u]),c(""))};return s.jsx("div",{onClick:n,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:d=>d.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(440px, 92vw)"},children:[s.jsx("h3",{style:{color:"var(--text)",fontWeight:700,marginBottom:4},children:"Edit tags"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:16},children:e.name}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12},children:i.map(d=>s.jsxs("span",{style:{background:"rgba(240,22,58,.15)",color:"var(--accent)",padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[d,s.jsx("button",{type:"button",onClick:()=>o(i.filter(u=>u!==d)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:"×"})]},d))}),s.jsx("input",{value:a,onChange:d=>c(d.target.value),onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),l(a))},placeholder:"Add tag and press Enter",style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",marginBottom:12}}),t.length>0&&s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6},children:"Suggestions"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:t.filter(d=>!i.includes(d)).slice(0,12).map(d=>s.jsxs("button",{type:"button",onClick:()=>l(d),style:{padding:"4px 10px",borderRadius:20,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",fontSize:12,cursor:"pointer"},children:["+ ",d]},d))})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:n,style:mg,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>r(i),style:hb,children:"Save tags"})]})]})})}const mg={padding:"10px 18px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},hb={...mg,border:"none",background:"var(--accent)",color:"#fff"};var gb=Object.defineProperty,Cs=Object.getOwnPropertySymbols,vg=Object.prototype.hasOwnProperty,yg=Object.prototype.propertyIsEnumerable,Zu=(e,t,r)=>t in e?gb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Fl=(e,t)=>{for(var r in t||(t={}))vg.call(t,r)&&Zu(e,r,t[r]);if(Cs)for(var r of Cs(t))yg.call(t,r)&&Zu(e,r,t[r]);return e},Ul=(e,t)=>{var r={};for(var n in e)vg.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Cs)for(var n of Cs(e))t.indexOf(n)<0&&yg.call(e,n)&&(r[n]=e[n]);return r};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Jr;(e=>{const t=class B{constructor(l,d,u,f){if(this.version=l,this.errorCorrectionLevel=d,this.modules=[],this.isFunction=[],l<B.MIN_VERSION||l>B.MAX_VERSION)throw new RangeError("Version value out of range");if(f<-1||f>7)throw new RangeError("Mask value out of range");this.size=l*4+17;let p=[];for(let v=0;v<this.size;v++)p.push(!1);for(let v=0;v<this.size;v++)this.modules.push(p.slice()),this.isFunction.push(p.slice());this.drawFunctionPatterns();const x=this.addEccAndInterleave(u);if(this.drawCodewords(x),f==-1){let v=1e9;for(let b=0;b<8;b++){this.applyMask(b),this.drawFormatBits(b);const _=this.getPenaltyScore();_<v&&(f=b,v=_),this.applyMask(b)}}i(0<=f&&f<=7),this.mask=f,this.applyMask(f),this.drawFormatBits(f),this.isFunction=[]}static encodeText(l,d){const u=e.QrSegment.makeSegments(l);return B.encodeSegments(u,d)}static encodeBinary(l,d){const u=e.QrSegment.makeBytes(l);return B.encodeSegments([u],d)}static encodeSegments(l,d,u=1,f=40,p=-1,x=!0){if(!(B.MIN_VERSION<=u&&u<=f&&f<=B.MAX_VERSION)||p<-1||p>7)throw new RangeError("Invalid value");let v,b;for(v=u;;v++){const g=B.getNumDataCodewords(v,d)*8,k=a.getTotalBits(l,v);if(k<=g){b=k;break}if(v>=f)throw new RangeError("Data too long")}for(const g of[B.Ecc.MEDIUM,B.Ecc.QUARTILE,B.Ecc.HIGH])x&&b<=B.getNumDataCodewords(v,g)*8&&(d=g);let _=[];for(const g of l){r(g.mode.modeBits,4,_),r(g.numChars,g.mode.numCharCountBits(v),_);for(const k of g.getData())_.push(k)}i(_.length==b);const m=B.getNumDataCodewords(v,d)*8;i(_.length<=m),r(0,Math.min(4,m-_.length),_),r(0,(8-_.length%8)%8,_),i(_.length%8==0);for(let g=236;_.length<m;g^=253)r(g,8,_);let h=[];for(;h.length*8<_.length;)h.push(0);return _.forEach((g,k)=>h[k>>>3]|=g<<7-(k&7)),new B(v,d,h,p)}getModule(l,d){return 0<=l&&l<this.size&&0<=d&&d<this.size&&this.modules[d][l]}getModules(){return this.modules}drawFunctionPatterns(){for(let u=0;u<this.size;u++)this.setFunctionModule(6,u,u%2==0),this.setFunctionModule(u,6,u%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const l=this.getAlignmentPatternPositions(),d=l.length;for(let u=0;u<d;u++)for(let f=0;f<d;f++)u==0&&f==0||u==0&&f==d-1||u==d-1&&f==0||this.drawAlignmentPattern(l[u],l[f]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(l){const d=this.errorCorrectionLevel.formatBits<<3|l;let u=d;for(let p=0;p<10;p++)u=u<<1^(u>>>9)*1335;const f=(d<<10|u)^21522;i(f>>>15==0);for(let p=0;p<=5;p++)this.setFunctionModule(8,p,n(f,p));this.setFunctionModule(8,7,n(f,6)),this.setFunctionModule(8,8,n(f,7)),this.setFunctionModule(7,8,n(f,8));for(let p=9;p<15;p++)this.setFunctionModule(14-p,8,n(f,p));for(let p=0;p<8;p++)this.setFunctionModule(this.size-1-p,8,n(f,p));for(let p=8;p<15;p++)this.setFunctionModule(8,this.size-15+p,n(f,p));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let l=this.version;for(let u=0;u<12;u++)l=l<<1^(l>>>11)*7973;const d=this.version<<12|l;i(d>>>18==0);for(let u=0;u<18;u++){const f=n(d,u),p=this.size-11+u%3,x=Math.floor(u/3);this.setFunctionModule(p,x,f),this.setFunctionModule(x,p,f)}}drawFinderPattern(l,d){for(let u=-4;u<=4;u++)for(let f=-4;f<=4;f++){const p=Math.max(Math.abs(f),Math.abs(u)),x=l+f,v=d+u;0<=x&&x<this.size&&0<=v&&v<this.size&&this.setFunctionModule(x,v,p!=2&&p!=4)}}drawAlignmentPattern(l,d){for(let u=-2;u<=2;u++)for(let f=-2;f<=2;f++)this.setFunctionModule(l+f,d+u,Math.max(Math.abs(f),Math.abs(u))!=1)}setFunctionModule(l,d,u){this.modules[d][l]=u,this.isFunction[d][l]=!0}addEccAndInterleave(l){const d=this.version,u=this.errorCorrectionLevel;if(l.length!=B.getNumDataCodewords(d,u))throw new RangeError("Invalid argument");const f=B.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][d],p=B.ECC_CODEWORDS_PER_BLOCK[u.ordinal][d],x=Math.floor(B.getNumRawDataModules(d)/8),v=f-x%f,b=Math.floor(x/f);let _=[];const m=B.reedSolomonComputeDivisor(p);for(let g=0,k=0;g<f;g++){let S=l.slice(k,k+b-p+(g<v?0:1));k+=S.length;const C=B.reedSolomonComputeRemainder(S,m);g<v&&S.push(0),_.push(S.concat(C))}let h=[];for(let g=0;g<_[0].length;g++)_.forEach((k,S)=>{(g!=b-p||S>=v)&&h.push(k[g])});return i(h.length==x),h}drawCodewords(l){if(l.length!=Math.floor(B.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let d=0;for(let u=this.size-1;u>=1;u-=2){u==6&&(u=5);for(let f=0;f<this.size;f++)for(let p=0;p<2;p++){const x=u-p,b=(u+1&2)==0?this.size-1-f:f;!this.isFunction[b][x]&&d<l.length*8&&(this.modules[b][x]=n(l[d>>>3],7-(d&7)),d++)}}i(d==l.length*8)}applyMask(l){if(l<0||l>7)throw new RangeError("Mask value out of range");for(let d=0;d<this.size;d++)for(let u=0;u<this.size;u++){let f;switch(l){case 0:f=(u+d)%2==0;break;case 1:f=d%2==0;break;case 2:f=u%3==0;break;case 3:f=(u+d)%3==0;break;case 4:f=(Math.floor(u/3)+Math.floor(d/2))%2==0;break;case 5:f=u*d%2+u*d%3==0;break;case 6:f=(u*d%2+u*d%3)%2==0;break;case 7:f=((u+d)%2+u*d%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[d][u]&&f&&(this.modules[d][u]=!this.modules[d][u])}}getPenaltyScore(){let l=0;for(let p=0;p<this.size;p++){let x=!1,v=0,b=[0,0,0,0,0,0,0];for(let _=0;_<this.size;_++)this.modules[p][_]==x?(v++,v==5?l+=B.PENALTY_N1:v>5&&l++):(this.finderPenaltyAddHistory(v,b),x||(l+=this.finderPenaltyCountPatterns(b)*B.PENALTY_N3),x=this.modules[p][_],v=1);l+=this.finderPenaltyTerminateAndCount(x,v,b)*B.PENALTY_N3}for(let p=0;p<this.size;p++){let x=!1,v=0,b=[0,0,0,0,0,0,0];for(let _=0;_<this.size;_++)this.modules[_][p]==x?(v++,v==5?l+=B.PENALTY_N1:v>5&&l++):(this.finderPenaltyAddHistory(v,b),x||(l+=this.finderPenaltyCountPatterns(b)*B.PENALTY_N3),x=this.modules[_][p],v=1);l+=this.finderPenaltyTerminateAndCount(x,v,b)*B.PENALTY_N3}for(let p=0;p<this.size-1;p++)for(let x=0;x<this.size-1;x++){const v=this.modules[p][x];v==this.modules[p][x+1]&&v==this.modules[p+1][x]&&v==this.modules[p+1][x+1]&&(l+=B.PENALTY_N2)}let d=0;for(const p of this.modules)d=p.reduce((x,v)=>x+(v?1:0),d);const u=this.size*this.size,f=Math.ceil(Math.abs(d*20-u*10)/u)-1;return i(0<=f&&f<=9),l+=f*B.PENALTY_N4,i(0<=l&&l<=2568888),l}getAlignmentPatternPositions(){if(this.version==1)return[];{const l=Math.floor(this.version/7)+2,d=this.version==32?26:Math.ceil((this.version*4+4)/(l*2-2))*2;let u=[6];for(let f=this.size-7;u.length<l;f-=d)u.splice(1,0,f);return u}}static getNumRawDataModules(l){if(l<B.MIN_VERSION||l>B.MAX_VERSION)throw new RangeError("Version number out of range");let d=(16*l+128)*l+64;if(l>=2){const u=Math.floor(l/7)+2;d-=(25*u-10)*u-55,l>=7&&(d-=36)}return i(208<=d&&d<=29648),d}static getNumDataCodewords(l,d){return Math.floor(B.getNumRawDataModules(l)/8)-B.ECC_CODEWORDS_PER_BLOCK[d.ordinal][l]*B.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][l]}static reedSolomonComputeDivisor(l){if(l<1||l>255)throw new RangeError("Degree out of range");let d=[];for(let f=0;f<l-1;f++)d.push(0);d.push(1);let u=1;for(let f=0;f<l;f++){for(let p=0;p<d.length;p++)d[p]=B.reedSolomonMultiply(d[p],u),p+1<d.length&&(d[p]^=d[p+1]);u=B.reedSolomonMultiply(u,2)}return d}static reedSolomonComputeRemainder(l,d){let u=d.map(f=>0);for(const f of l){const p=f^u.shift();u.push(0),d.forEach((x,v)=>u[v]^=B.reedSolomonMultiply(x,p))}return u}static reedSolomonMultiply(l,d){if(l>>>8||d>>>8)throw new RangeError("Byte out of range");let u=0;for(let f=7;f>=0;f--)u=u<<1^(u>>>7)*285,u^=(d>>>f&1)*l;return i(u>>>8==0),u}finderPenaltyCountPatterns(l){const d=l[1];i(d<=this.size*3);const u=d>0&&l[2]==d&&l[3]==d*3&&l[4]==d&&l[5]==d;return(u&&l[0]>=d*4&&l[6]>=d?1:0)+(u&&l[6]>=d*4&&l[0]>=d?1:0)}finderPenaltyTerminateAndCount(l,d,u){return l&&(this.finderPenaltyAddHistory(d,u),d=0),d+=this.size,this.finderPenaltyAddHistory(d,u),this.finderPenaltyCountPatterns(u)}finderPenaltyAddHistory(l,d){d[0]==0&&(l+=this.size),d.pop(),d.unshift(l)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;function r(c,l,d){if(l<0||l>31||c>>>l)throw new RangeError("Value out of range");for(let u=l-1;u>=0;u--)d.push(c>>>u&1)}function n(c,l){return(c>>>l&1)!=0}function i(c){if(!c)throw new Error("Assertion error")}const o=class de{constructor(l,d,u){if(this.mode=l,this.numChars=d,this.bitData=u,d<0)throw new RangeError("Invalid argument");this.bitData=u.slice()}static makeBytes(l){let d=[];for(const u of l)r(u,8,d);return new de(de.Mode.BYTE,l.length,d)}static makeNumeric(l){if(!de.isNumeric(l))throw new RangeError("String contains non-numeric characters");let d=[];for(let u=0;u<l.length;){const f=Math.min(l.length-u,3);r(parseInt(l.substring(u,u+f),10),f*3+1,d),u+=f}return new de(de.Mode.NUMERIC,l.length,d)}static makeAlphanumeric(l){if(!de.isAlphanumeric(l))throw new RangeError("String contains unencodable characters in alphanumeric mode");let d=[],u;for(u=0;u+2<=l.length;u+=2){let f=de.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u))*45;f+=de.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u+1)),r(f,11,d)}return u<l.length&&r(de.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u)),6,d),new de(de.Mode.ALPHANUMERIC,l.length,d)}static makeSegments(l){return l==""?[]:de.isNumeric(l)?[de.makeNumeric(l)]:de.isAlphanumeric(l)?[de.makeAlphanumeric(l)]:[de.makeBytes(de.toUtf8ByteArray(l))]}static makeEci(l){let d=[];if(l<0)throw new RangeError("ECI assignment value out of range");if(l<128)r(l,8,d);else if(l<16384)r(2,2,d),r(l,14,d);else if(l<1e6)r(6,3,d),r(l,21,d);else throw new RangeError("ECI assignment value out of range");return new de(de.Mode.ECI,0,d)}static isNumeric(l){return de.NUMERIC_REGEX.test(l)}static isAlphanumeric(l){return de.ALPHANUMERIC_REGEX.test(l)}getData(){return this.bitData.slice()}static getTotalBits(l,d){let u=0;for(const f of l){const p=f.mode.numCharCountBits(d);if(f.numChars>=1<<p)return 1/0;u+=4+p+f.bitData.length}return u}static toUtf8ByteArray(l){l=encodeURI(l);let d=[];for(let u=0;u<l.length;u++)l.charAt(u)!="%"?d.push(l.charCodeAt(u)):(d.push(parseInt(l.substring(u+1,u+3),16)),u+=2);return d}};o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let a=o;e.QrSegment=o})(Jr||(Jr={}));(e=>{(t=>{const r=class{constructor(i,o){this.ordinal=i,this.formatBits=o}};r.LOW=new r(0,1),r.MEDIUM=new r(1,0),r.QUARTILE=new r(2,3),r.HIGH=new r(3,2),t.Ecc=r})(e.QrCode||(e.QrCode={}))})(Jr||(Jr={}));(e=>{(t=>{const r=class{constructor(i,o){this.modeBits=i,this.numBitsCharCount=o}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};r.NUMERIC=new r(1,[10,12,14]),r.ALPHANUMERIC=new r(2,[9,11,13]),r.BYTE=new r(4,[8,16,16]),r.KANJI=new r(8,[8,10,12]),r.ECI=new r(7,[0,0,0]),t.Mode=r})(e.QrSegment||(e.QrSegment={}))})(Jr||(Jr={}));var xn=Jr;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var mb={L:xn.QrCode.Ecc.LOW,M:xn.QrCode.Ecc.MEDIUM,Q:xn.QrCode.Ecc.QUARTILE,H:xn.QrCode.Ecc.HIGH},xg=128,wg="L",bg="#FFFFFF",kg="#000000",Sg=!1,_g=1,vb=4,yb=0,xb=.1;function Cg(e,t=0){const r=[];return e.forEach(function(n,i){let o=null;n.forEach(function(a,c){if(!a&&o!==null){r.push(`M${o+t} ${i+t}h${c-o}v1H${o+t}z`),o=null;return}if(c===n.length-1){if(!a)return;o===null?r.push(`M${c+t},${i+t} h1v1H${c+t}z`):r.push(`M${o+t},${i+t} h${c+1-o}v1H${o+t}z`);return}a&&o===null&&(o=c)})}),r.join("")}function Eg(e,t){return e.slice().map((r,n)=>n<t.y||n>=t.y+t.h?r:r.map((i,o)=>o<t.x||o>=t.x+t.w?i:!1))}function wb(e,t,r,n){if(n==null)return null;const i=e.length+r*2,o=Math.floor(t*xb),a=i/t,c=(n.width||o)*a,l=(n.height||o)*a,d=n.x==null?e.length/2-c/2:n.x*a,u=n.y==null?e.length/2-l/2:n.y*a,f=n.opacity==null?1:n.opacity;let p=null;if(n.excavate){let v=Math.floor(d),b=Math.floor(u),_=Math.ceil(c+d-v),m=Math.ceil(l+u-b);p={x:v,y:b,w:_,h:m}}const x=n.crossOrigin;return{x:d,y:u,h:l,w:c,excavation:p,opacity:f,crossOrigin:x}}function bb(e,t){return t!=null?Math.max(Math.floor(t),0):e?vb:yb}function Ig({value:e,level:t,minVersion:r,includeMargin:n,marginSize:i,imageSettings:o,size:a,boostLevel:c}){let l=me.useMemo(()=>{const v=(Array.isArray(e)?e:[e]).reduce((b,_)=>(b.push(...xn.QrSegment.makeSegments(_)),b),[]);return xn.QrCode.encodeSegments(v,mb[t],r,void 0,void 0,c)},[e,t,r,c]);const{cells:d,margin:u,numCells:f,calculatedImageSettings:p}=me.useMemo(()=>{let x=l.getModules();const v=bb(n,i),b=x.length+v*2,_=wb(x,a,v,o);return{cells:x,margin:v,numCells:b,calculatedImageSettings:_}},[l,a,o,n,i]);return{qrcode:l,margin:u,cells:d,numCells:f,calculatedImageSettings:p}}var kb=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),Sb=me.forwardRef(function(t,r){const n=t,{value:i,size:o=xg,level:a=wg,bgColor:c=bg,fgColor:l=kg,includeMargin:d=Sg,minVersion:u=_g,boostLevel:f,marginSize:p,imageSettings:x}=n,b=Ul(n,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:_}=b,m=Ul(b,["style"]),h=x==null?void 0:x.src,g=me.useRef(null),k=me.useRef(null),S=me.useCallback(Ie=>{g.current=Ie,typeof r=="function"?r(Ie):r&&(r.current=Ie)},[r]),[C,I]=me.useState(!1),{margin:R,cells:F,numCells:j,calculatedImageSettings:D}=Ig({value:i,level:a,minVersion:u,boostLevel:f,includeMargin:d,marginSize:p,imageSettings:x,size:o});me.useEffect(()=>{if(g.current!=null){const Ie=g.current,ge=Ie.getContext("2d");if(!ge)return;let pe=F;const Se=k.current,N=D!=null&&Se!==null&&Se.complete&&Se.naturalHeight!==0&&Se.naturalWidth!==0;N&&D.excavation!=null&&(pe=Eg(F,D.excavation));const L=window.devicePixelRatio||1;Ie.height=Ie.width=o*L;const M=o/j*L;ge.scale(M,M),ge.fillStyle=c,ge.fillRect(0,0,j,j),ge.fillStyle=l,kb?ge.fill(new Path2D(Cg(pe,R))):F.forEach(function(K,te){K.forEach(function(ft,je){ft&&ge.fillRect(je+R,te+R,1,1)})}),D&&(ge.globalAlpha=D.opacity),N&&ge.drawImage(Se,D.x+R,D.y+R,D.w,D.h)}}),me.useEffect(()=>{I(!1)},[h]);const Z=Fl({height:o,width:o},_);let xe=null;return h!=null&&(xe=me.createElement("img",{src:h,key:h,style:{display:"none"},onLoad:()=>{I(!0)},ref:k,crossOrigin:D==null?void 0:D.crossOrigin})),me.createElement(me.Fragment,null,me.createElement("canvas",Fl({style:Z,height:o,width:o,ref:S,role:"img"},m)),xe)});Sb.displayName="QRCodeCanvas";var jg=me.forwardRef(function(t,r){const n=t,{value:i,size:o=xg,level:a=wg,bgColor:c=bg,fgColor:l=kg,includeMargin:d=Sg,minVersion:u=_g,boostLevel:f,title:p,marginSize:x,imageSettings:v}=n,b=Ul(n,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:_,cells:m,numCells:h,calculatedImageSettings:g}=Ig({value:i,level:a,minVersion:u,boostLevel:f,includeMargin:d,marginSize:x,imageSettings:v,size:o});let k=m,S=null;v!=null&&g!=null&&(g.excavation!=null&&(k=Eg(m,g.excavation)),S=me.createElement("image",{href:v.src,height:g.h,width:g.w,x:g.x+_,y:g.y+_,preserveAspectRatio:"none",opacity:g.opacity,crossOrigin:g.crossOrigin}));const C=Cg(k,_);return me.createElement("svg",Fl({height:o,width:o,viewBox:`0 0 ${h} ${h}`,ref:r,role:"img"},b),!!p&&me.createElement("title",null,p),me.createElement("path",{fill:c,d:`M0,0 h${h}v${h}H0z`,shapeRendering:"crispEdges"}),me.createElement("path",{fill:l,d:C,shapeRendering:"crispEdges"}),S)});jg.displayName="QRCodeSVG";/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=e=>{const t=Cb(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ma={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Ib=y.createContext({}),jb=()=>y.useContext(Ib),Tb=y.forwardRef(({color:e,size:t,strokeWidth:r,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...c},l)=>{const{size:d=24,strokeWidth:u=2,absoluteStrokeWidth:f=!1,color:p="currentColor",className:x=""}=jb()??{},v=n??f?Number(r??u)*24/Number(t??d):r??u;return y.createElement("svg",{ref:l,...Ma,width:t??d??Ma.width,height:t??d??Ma.height,stroke:e??p,strokeWidth:v,className:Tg("lucide",x,i),...!o&&!Eb(c)&&{"aria-hidden":"true"},...c},[...a.map(([b,_])=>y.createElement(b,_)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=(e,t)=>{const r=y.forwardRef(({className:n,...i},o)=>y.createElement(Tb,{ref:o,iconNode:t,className:Tg(`lucide-${_b(ef(e))}`,`lucide-${e}`,n),...i}));return r.displayName=ef(e),r};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Nb=Gs("check",Rb);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ab=Gs("copy",Pb);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Lb=Gs("mail",Ob);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Mb=Gs("x",zb),Db=()=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"}),s.jsx("path",{d:"M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"})]}),Fb=()=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"})}),Ub=()=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),s.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),s.jsx("circle",{cx:"4",cy:"4",r:"2"})]});function Bb({file:e,onShare:t,onCancel:r}){const[n,i]=y.useState("link"),[o,a]=y.useState("view"),[c,l]=y.useState(""),[d,u]=y.useState(""),[f,p]=y.useState(""),[x,v]=y.useState(""),[b,_]=y.useState(!1),[m,h]=y.useState(""),[g,k]=y.useState(!1),[S,C]=y.useState("settings"),I=async()=>{var j;_(!0);try{const D={shareType:n,permission:o,visibility:"protected",...d&&{password:d},...f&&{expiresAt:new Date(f).toISOString()},...x&&{maxViews:Number(x)},...n==="email"&&{recipientEmail:c,email:c}},Z=await t(D),xe=(Z==null?void 0:Z.shareUrl)||((j=Z==null?void 0:Z.data)==null?void 0:j.shareUrl);xe&&h(xe)}finally{_(!1)}},R=async()=>{var j;m&&(await((j=navigator.clipboard)==null?void 0:j.writeText(m)),k(!0),setTimeout(()=>k(!1),2e3))},F=j=>{if(!m)return;const D=encodeURIComponent(`Check out this file on CloudVault: ${e.name}`),Z=encodeURIComponent(m),xe={twitter:`https://twitter.com/intent/tweet?text=${D}&url=${Z}`,whatsapp:`https://wa.me/?text=${D}%20${Z}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${Z}`,email:`mailto:?subject=${encodeURIComponent(`Shared File: ${e.name}`)}&body=${D}%0A${Z}`};window.open(xe[j],"_blank")};return s.jsx("div",{className:"share-modal-backdrop",onClick:r,style:{display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",zIndex:1e3},children:s.jsxs("div",{onClick:j=>j.stopPropagation(),style:{background:"var(--surface)",borderRadius:24,width:"100%",maxWidth:500,overflow:"hidden",boxShadow:"0 24px 80px rgba(0,0,0,0.4)",border:"1px solid var(--border)"},children:[s.jsxs("div",{style:{padding:"24px 32px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(255,255,255,0.02)"},children:[s.jsxs("div",{children:[s.jsxs("h3",{style:{margin:0,fontSize:20,fontWeight:700,color:"var(--text)"},children:['Share "',e.name,'"']}),s.jsx("p",{style:{margin:"4px 0 0",fontSize:13,color:"var(--text-muted)"},children:"Securely distribute this file"})]}),s.jsx("button",{onClick:r,style:{background:"transparent",border:"none",color:"var(--text-muted)",cursor:"pointer",padding:8,borderRadius:50},children:s.jsx(Mb,{size:20})})]}),s.jsx("div",{style:{padding:"32px"},children:m?s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",gap:16,marginBottom:24},children:[s.jsx("button",{onClick:()=>C("settings"),style:{flex:1,padding:"10px",borderRadius:12,background:S==="settings"?"var(--accent-blue)":"transparent",color:S==="settings"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:S==="settings"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Link"}),s.jsx("button",{onClick:()=>C("qr"),style:{flex:1,padding:"10px",borderRadius:12,background:S==="qr"?"var(--accent-blue)":"transparent",color:S==="qr"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:S==="qr"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"QR Code"}),s.jsx("button",{onClick:()=>C("social"),style:{flex:1,padding:"10px",borderRadius:12,background:S==="social"?"var(--accent-blue)":"transparent",color:S==="social"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:S==="social"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Social"})]}),S==="settings"&&s.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[s.jsxs("div",{style:{padding:20,background:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",borderRadius:16,marginBottom:24},children:[s.jsx("p",{style:{margin:"0 0 12px",fontSize:13,fontWeight:700,color:"var(--accent-blue)",textTransform:"uppercase",letterSpacing:.5},children:"Share Link Created"}),s.jsx("div",{style:{fontSize:14,wordBreak:"break-all",color:"var(--text)",lineHeight:1.5,marginBottom:16},children:m}),s.jsxs("button",{onClick:R,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",padding:14,borderRadius:12,background:g?"#10b981":"var(--accent-blue)",color:"#fff",border:"none",fontWeight:700,cursor:"pointer",transition:"0.2s"},children:[g?s.jsx(Nb,{size:18}):s.jsx(Ab,{size:18}),g?"Copied to Clipboard":"Copy Link"]})]}),s.jsx("button",{onClick:()=>h(""),style:{width:"100%",padding:14,background:"transparent",color:"var(--text)",border:"1px solid var(--border)",borderRadius:12,fontWeight:600,cursor:"pointer"},children:"Create another share"})]}),S==="qr"&&s.jsxs("div",{style:{animation:"fadeIn 0.3s ease",textAlign:"center"},children:[s.jsx("div",{style:{display:"inline-block",background:"#fff",padding:24,borderRadius:24,marginBottom:24,boxShadow:"0 10px 40px rgba(0,0,0,0.1)"},children:s.jsx(jg,{value:m,size:200,level:"H",includeMargin:!1})}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,margin:0},children:"Scan this code to instantly open the shared file on your mobile device."})]}),S==="social"&&s.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:24,textAlign:"center"},children:"Share directly to your favorite platforms"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsxs("button",{onClick:()=>F("twitter"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(29, 161, 242, 0.1)",color:"#1da1f2",border:"1px solid rgba(29, 161, 242, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(Fb,{})," Twitter"]}),s.jsxs("button",{onClick:()=>F("whatsapp"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(37, 211, 102, 0.1)",color:"#25d366",border:"1px solid rgba(37, 211, 102, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(Db,{})," WhatsApp"]}),s.jsxs("button",{onClick:()=>F("linkedin"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(0, 119, 181, 0.1)",color:"#0077b5",border:"1px solid rgba(0, 119, 181, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(Ub,{})," LinkedIn"]}),s.jsxs("button",{onClick:()=>F("email"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(255, 255, 255, 0.05)",color:"var(--text)",border:"1px solid var(--border)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(Lb,{size:20})," Email App"]})]})]})]}):s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Share Method"}),s.jsxs("div",{style:{display:"flex",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,padding:4},children:[s.jsx("button",{onClick:()=>i("link"),style:{flex:1,padding:"8px",background:n==="link"?"var(--surface)":"transparent",color:n==="link"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:n==="link"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Link"}),s.jsx("button",{onClick:()=>i("email"),style:{flex:1,padding:"8px",background:n==="email"?"var(--surface)":"transparent",color:n==="email"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:n==="email"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Email"})]})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Permission"}),s.jsxs("select",{value:o,onChange:j=>a(j.target.value),style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"},children:[s.jsx("option",{value:"view",children:"View only"}),s.jsx("option",{value:"download",children:"View & Download"}),s.jsx("option",{value:"edit",children:"Edit metadata"})]})]})]}),n==="email"&&s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Recipient Email"}),s.jsx("input",{type:"email",value:c,onChange:j=>l(j.target.value),placeholder:"colleague@company.com",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Password Protection"}),s.jsx("input",{type:"password",value:d,onChange:j=>u(j.target.value),placeholder:"Optional",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"},autoComplete:"new-password"})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"View Limit"}),s.jsx("input",{type:"number",min:"1",value:x,onChange:j=>v(j.target.value),placeholder:"Unlimited",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Expiration Date"}),s.jsx("input",{type:"datetime-local",value:f,onChange:j=>p(j.target.value),style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),s.jsx("div",{style:{marginTop:8},children:s.jsx("button",{onClick:I,disabled:b||n==="email"&&!c,style:{width:"100%",padding:"16px",background:"var(--accent-blue)",color:"#fff",border:"none",borderRadius:14,fontWeight:700,fontSize:16,cursor:b||n==="email"&&!c?"not-allowed":"pointer",opacity:b||n==="email"&&!c?.6:1,transition:"0.2s"},children:b?"Generating Secure Link...":n==="email"?"Send Email Invitation":"Create Share Link"})})]})})]})})}function Wb({stats:e,usage:t,onBack:r}){const n=(t==null?void 0:t.breakdown)||{},i=Object.values(n).reduce((c,l)=>c+l,0)||1,o=e.storageQuota>0?Math.min(100,Math.round(e.storageUsed/e.storageQuota*100)):0,a=[{key:"images",label:"Images",color:"#22c55e"},{key:"videos",label:"Videos",color:"#2563eb"},{key:"documents",label:"Documents",color:"#f59e0b"},{key:"audio",label:"Audio",color:"#a78bfa"},{key:"other",label:"Other",color:"#94a3b8"}];return s.jsxs("div",{style:{animation:"fadeIn .3s ease"},children:[s.jsx("button",{type:"button",onClick:r,className:"page-back-btn",children:"← Back to My Drive"}),s.jsx("h2",{style:{fontWeight:900,fontSize:26,margin:"12px 0 8px",color:"var(--text)"},children:"Storage dashboard"}),s.jsxs("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:28},children:[o,"% of your storage is in use"]}),s.jsxs("div",{className:"dashboard-stat-grid",children:[s.jsx(jo,{label:"Total files",value:e.totalFiles}),s.jsx(jo,{label:"Total folders",value:e.totalFolders}),s.jsx(jo,{label:"Storage used",value:Ae(e.storageUsed)}),s.jsx(jo,{label:"Storage remaining",value:Ae(Math.max(0,e.storageQuota-e.storageUsed))})]}),s.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)",marginBottom:24},children:[s.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"Storage breakdown"}),s.jsx("div",{style:{height:14,borderRadius:99,overflow:"hidden",display:"flex",background:"var(--border)"},children:a.map(c=>{const l=(n[c.key]||0)/i*100;return l<.5?null:s.jsx("div",{title:`${c.label}: ${Ae(n[c.key]||0)}`,style:{width:`${l}%`,background:c.color,transition:"width .4s ease"}},c.key)})}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,marginTop:16},children:a.map(c=>s.jsxs("span",{style:{fontSize:13,color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{width:10,height:10,borderRadius:99,background:c.color,flexShrink:0}}),c.label,": ",Ae(n[c.key]||0)]},c.key))})]}),s.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)"},children:[s.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"File type distribution"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:a.map(c=>{const l=n[c.key]||0,d=Math.round(l/i*100);return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[s.jsx("span",{style:{color:"var(--text-secondary)",fontWeight:600},children:c.label}),s.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:700},children:[d,"%"]})]}),s.jsx("div",{style:{height:8,background:"var(--border)",borderRadius:99,overflow:"hidden"},children:s.jsx("div",{style:{width:`${d}%`,height:"100%",background:c.color,borderRadius:99,transition:"width .4s ease"}})})]},c.key)})})]})]})}function jo({label:e,value:t}){return s.jsxs("div",{className:"dashboard-stat-card",children:[s.jsx("div",{className:"label",children:e}),s.jsx("div",{className:"value",children:t})]})}function $b({users:e,systemHealth:t,loading:r,onBack:n}){return s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:n,style:Vb,children:"← Back to My Cloud"}),s.jsx("h2",{style:{fontWeight:800,fontSize:22,margin:"12px 0 8px"},children:"Admin panel"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:24},children:"User management and system overview"}),t&&s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:28},children:[s.jsx(oi,{label:"Total users",value:t.totalUsers??"—"}),s.jsx(oi,{label:"Active users",value:t.activeUsers??"—"}),s.jsx(oi,{label:"Total files",value:t.totalFiles??"—"}),s.jsx(oi,{label:"Storage used",value:t.totalStorageUsed!=null?Ae(t.totalStorageUsed):"—"}),s.jsx(oi,{label:"Uploads today",value:t.uploadsToday??"—"})]}),s.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"Users"}),r?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading…"}):s.jsxs("div",{style:{overflowX:"auto",border:"1px solid var(--border)",borderRadius:12},children:[s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"var(--bg-card)",textAlign:"left"},children:[s.jsx("th",{style:si,children:"Email"}),s.jsx("th",{style:si,children:"Name"}),s.jsx("th",{style:si,children:"Role"}),s.jsx("th",{style:si,children:"Storage"}),s.jsx("th",{style:si,children:"Status"})]})}),s.jsx("tbody",{children:e.map(i=>s.jsxs("tr",{style:{borderTop:"1px solid var(--border)"},children:[s.jsx("td",{style:ai,children:i.email}),s.jsx("td",{style:ai,children:i.fullName||"—"}),s.jsx("td",{style:ai,children:i.role}),s.jsxs("td",{style:ai,children:[Ae(i.storageUsed)," / ",Ae(i.storageQuota)]}),s.jsx("td",{style:ai,children:i.isActive?"Active":"Inactive"})]},i.id))})]}),e.length===0&&s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)"},children:"No users found"})]})]})}function oi({label:e,value:t}){return s.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:14},children:[s.jsx("div",{style:{fontWeight:800,fontSize:20},children:t}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:e})]})}const si={padding:"12px 14px",color:"var(--text-muted)",fontWeight:600},ai={padding:"12px 14px",color:"var(--text-secondary)"},Vb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"};function Rg({file:e,onMove:t,onCopy:r,onTags:n,onDelete:i}){const[o,a]=y.useState(!1),c=y.useRef(null);y.useEffect(()=>{const d=u=>{c.current&&!c.current.contains(u.target)&&a(!1)};return o&&document.addEventListener("click",d),()=>document.removeEventListener("click",d)},[o]);const l=[{cue:"#",label:"Tags",onClick:()=>n(e)},{cue:"Move",label:"Move",onClick:()=>t(e)},{cue:"Copy",label:"Copy file",onClick:()=>r(e)},{cue:"Del",label:"Delete",onClick:()=>i(e),danger:!0}];return s.jsxs("div",{ref:c,style:{position:"relative"},children:[s.jsx("button",{type:"button",title:"More actions",onClick:d=>{d.stopPropagation(),a(u=>!u)},style:Hb,children:"..."}),o&&s.jsx("div",{style:Gb,children:l.map(d=>s.jsxs("button",{type:"button",onClick:u=>{u.stopPropagation(),a(!1),d.onClick()},style:{...Yb,color:d.danger?"var(--danger)":"var(--text)"},children:[s.jsx("span",{style:{...Qb,color:d.danger?"var(--danger)":"var(--accent-blue)"},children:d.cue}),s.jsx("span",{children:d.label})]},d.label))})]})}const Hb={width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"rgba(255,255,255,.08)",color:"var(--text)",cursor:"pointer",fontSize:18,fontWeight:900,transition:"var(--transition)"},Gb={position:"absolute",right:0,top:"100%",marginTop:6,minWidth:190,background:"var(--surface-raised)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"var(--shadow)",zIndex:50,overflow:"hidden",padding:6,animation:"floatIn .16s ease"},Yb={display:"flex",alignItems:"center",gap:10,width:"100%",padding:"11px 12px",border:"none",borderRadius:10,background:"transparent",textAlign:"left",cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"var(--font)"},Qb={width:34,opacity:.78,fontSize:11,fontWeight:900,textTransform:"uppercase"};function sn({width:e="100%",height:t=16,radius:r=8,style:n={}}){return s.jsx("div",{style:{width:e,height:t,borderRadius:r,background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite",...n}})}function Kb({count:e=6,grid:t=!1}){return t?s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:12},children:Array.from({length:e}).map((r,n)=>s.jsxs("div",{style:{borderRadius:16,overflow:"hidden",border:"1px solid var(--border)"},children:[s.jsx(sn,{height:140,radius:0}),s.jsxs("div",{style:{padding:12},children:[s.jsx(sn,{height:12,width:"80%"}),s.jsx(sn,{height:10,width:"50%",style:{marginTop:8}})]})]},n))}):s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Array.from({length:e}).map((r,n)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:"var(--bg-card)",borderRadius:12,border:"1px solid var(--border)"},children:[s.jsx(sn,{width:36,height:36,radius:8}),s.jsxs("div",{style:{flex:1},children:[s.jsx(sn,{height:14,width:"40%"}),s.jsx(sn,{height:10,width:"25%",style:{marginTop:8}})]})]},n))})}function qb(e,t=400){const[r,n]=y.useState(e);return y.useEffect(()=>{const i=setTimeout(()=>n(e),t);return()=>clearTimeout(i)},[e,t]),r}async function Jb(e,{createFolder:t,uploadFile:r,baseFolderId:n,onProgress:i}){const o=Array.from(e),a=new Map([["",n??null]]),c=d=>{const u=d.webkitRelativePath||d.name,f=u.split("/").filter(Boolean),p=f.pop();return{segments:f,fileName:p,rel:u}};o.sort((d,u)=>c(d).rel.localeCompare(c(u).rel));let l=0;for(const d of o){const{segments:u}=c(d);let f=n??null,p="";for(const x of u){if(p=p?`${p}/${x}`:x,!a.has(p)){const v=await t(x,f);a.set(p,v.id)}f=a.get(p)}await r(d,f),l+=1,i==null||i(Math.round(l/o.length*100))}}function Xb(e){const t=new Map(e.map(n=>[n.id,{...n,children:[]}])),r=[];for(const n of e){const i=t.get(n.id);n.parentId&&t.has(n.parentId)?t.get(n.parentId).children.push(i):r.push(i)}return r}const Ng=y.createContext(null);function Zb({token:e,children:t}){const[r,n]=y.useState(null),[i,o]=y.useState([]),[a,c]=y.useState(0),[l,d]=y.useState(!0),u=y.useCallback(async()=>{if(e)try{const v=await it("/account",{},e);n(v)}catch{const v=await it("/users/me",{},e).catch(()=>null);v&&n(v)}},[e]),f=y.useCallback(async()=>{},[]),p=y.useCallback(async()=>{d(!0),await Promise.all([u(),f()]),d(!1)},[u,f]);y.useEffect(()=>{p()},[e]);const x=async()=>{};return s.jsx(Ng.Provider,{value:{account:r,loading:l,notifications:i,unreadCount:a,refreshAccount:u,refreshNotifications:f,refreshAll:p,markAllRead:x},children:t})}function Pg(){const e=y.useContext(Ng);if(!e)throw new Error("useAccount must be used within AccountProvider");return e}function e2({account:e,onNavigate:t,onSignOut:r}){var d;const[n,i]=y.useState(!1),o=y.useRef(null);y.useEffect(()=>{const u=f=>{o.current&&!o.current.contains(f.target)&&i(!1)};return n&&document.addEventListener("click",u),()=>document.removeEventListener("click",u)},[n]);const a=[{id:"profile",label:"My Profile"},{id:"settings",label:"Settings"},{id:"security",label:"Security"},{id:"dashboard",label:"Storage"},{id:"billing",label:"Billing"},{id:"billing",label:"Upgrade Plan",accent:!0},{id:"help",label:"Help Center"}],c=e==null?void 0:e.avatarUrl,l=((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"?").slice(0,1).toUpperCase();return s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(u=>!u),style:{display:"flex",alignItems:"center",gap:8,padding:"4px 10px 4px 4px",borderRadius:999,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontFamily:"var(--font)"},children:[s.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:c?`url(${c}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:14},children:!c&&l}),s.jsx("span",{style:{color:"var(--text-secondary)",fontSize:13,fontWeight:600},children:"▾"})]}),n&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",minWidth:200,background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300,overflow:"hidden",animation:"fadeIn .15s ease"},children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontWeight:700,fontSize:14,color:"var(--text)"},children:(e==null?void 0:e.fullName)||"Account"}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:e==null?void 0:e.email}),s.jsxs("div",{style:{fontSize:11,color:"var(--accent)",marginTop:6,fontWeight:600,textTransform:"capitalize"},children:[((d=e==null?void 0:e.planDetails)==null?void 0:d.name)||(e==null?void 0:e.plan)," plan"]})]}),a.map((u,f)=>s.jsx("button",{type:"button",onClick:()=>{i(!1),t(u.id==="dashboard"?"dashboard":u.id)},style:{display:"block",width:"100%",padding:"11px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,fontWeight:u.accent?700:500,color:u.accent?"var(--accent)":"var(--text-secondary)"},children:u.label},`${u.id}-${f}`)),s.jsx("div",{style:{borderTop:"1px solid var(--border)"},children:s.jsx("button",{type:"button",onClick:()=>{i(!1),r()},style:{display:"block",width:"100%",padding:"12px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,color:"var(--danger)",fontWeight:600},children:"Sign Out"})})]})]})}function t2({account:e,onUpgrade:t}){if(!(e!=null&&e.onTrial))return null;const r=e.trialDaysLeft??0;return s.jsxs("div",{style:{background:"linear-gradient(90deg, rgba(240,22,58,.12), rgba(64,144,255,.1))",borderBottom:"1px solid var(--border)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--text)"},children:"Pro trial"})," — ",r," day",r!==1?"s":""," left · ",Ae(e.storageUsed)," used"]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Upgrade"})]})}function r2({account:e,onOpenSettings:t}){return!(e!=null&&e.emailVerificationRequired)||(e==null?void 0:e.isVerified)!==!1?null:s.jsxs("div",{style:{background:"rgba(240, 22, 58, 0.12)",borderBottom:"1px solid rgba(240, 22, 58, 0.35)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--danger)"},children:"Email not verified"})," — ","Uploads are disabled until you verify. Check your inbox or resend the link."]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Verify email"})]})}function tf({email:e,token:t,onVerified:r,onBack:n}){const[i,o]=y.useState(e||""),[a,c]=y.useState(!!t),[l,d]=y.useState(""),[u,f]=y.useState(""),[p,x]=y.useState(!1);y.useEffect(()=>{t&&v(t)},[t]);const v=async _=>{c(!0),d("");try{const m=await fetch(`${ut}/auth/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:_})}),h=await m.json();if(!m.ok||!h.success)throw new Error(h.message||"Verification failed");x(!0),setTimeout(()=>r==null?void 0:r(),1200)}catch{d("This verification link is invalid or expired. Request a fresh email and try again.")}finally{c(!1)}},b=async()=>{if(!i){d("Enter your email address first.");return}c(!0),d(""),f("");try{const _=await fetch(`${ut}/auth/resend-verification`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}),m=await _.json();if(!_.ok||!m.success)throw new Error(m.message||"Failed to send verification email");f("A fresh verification email is on its way. Open the link in your inbox to continue.")}catch{d("Something went wrong. Please try again.")}finally{c(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:Vr}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:p?"Email verified":t?"Verifying your email":"Check your inbox"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:p?"Your account is ready. You can now log in with your email and password.":t?"Hold tight while we confirm your CloudVault account.":"Open the verification link we sent after registration. You only need to do this once."}),!t&&!p&&s.jsxs(s.Fragment,{children:[s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:"Email address"}),s.jsx("input",{className:"input-field",type:"email",value:i,onChange:_=>o(_.target.value),placeholder:"you@company.com",style:{marginTop:6}})]}),s.jsx("button",{type:"button",onClick:b,disabled:a,className:"btn-primary",style:{width:"100%"},children:a?"Sending...":"Resend verification email"})]}),a&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,marginTop:14},children:"Working on it..."}),l&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginTop:14},children:l}),u&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,lineHeight:1.5,marginTop:14},children:u}),s.jsx("button",{type:"button",onClick:n,className:"btn-secondary",style:{width:"100%",marginTop:14},children:"Back to login"})]})]})}function n2({notifications:e,unreadCount:t,onMarkAllRead:r}){const[n,i]=y.useState(!1),o=y.useRef(null);return y.useEffect(()=>{const a=c=>{o.current&&!o.current.contains(c.target)&&i(!1)};return n&&document.addEventListener("click",a),()=>document.removeEventListener("click",a)},[n]),s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(a=>!a),style:{width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontSize:18,position:"relative"},title:"Notifications",children:["🔔",t>0&&s.jsx("span",{style:{position:"absolute",top:4,right:4,minWidth:16,height:16,borderRadius:99,background:"var(--accent)",color:"#fff",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"},children:t>9?"9+":t})]}),n&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",width:320,maxHeight:400,overflow:"auto",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300},children:[s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontWeight:700,fontSize:14},children:"Notifications"}),t>0&&s.jsx("button",{type:"button",onClick:r,style:i2,children:"Mark all read"})]}),e.length===0?s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)",fontSize:13},children:"Nothing new"}):e.map(a=>s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",background:a.read?"transparent":"rgba(240,22,58,.06)"},children:[s.jsx("div",{style:{fontWeight:600,fontSize:13},children:a.title}),a.body&&s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:a.body}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:6},children:Ki(a.createdAt)})]},a.id))]})]})}const i2={background:"none",border:"none",color:"var(--accent-blue)",fontSize:12,cursor:"pointer",fontWeight:600};function rf({token:e,onBack:t,onSuccess:r}){const[n,i]=y.useState(""),[o,a]=y.useState(""),[c,l]=y.useState(!1),[d,u]=y.useState(""),[f,p]=y.useState(!1),x=async v=>{if(v.preventDefault(),u(""),!e)return u("This reset link is invalid. Please request a new one.");if(n!==o)return u("Passwords do not match.");if(n.length<8)return u("Password must be at least 8 characters.");if(!/[a-z]/.test(n)||!/[A-Z]/.test(n)||!/\d/.test(n))return u("Use at least one uppercase letter, one lowercase letter, and one number.");l(!0);try{const b=await fetch(`${ut}/auth/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,newPassword:n})}),_=await b.json();if(!b.ok||!_.success)throw new Error(_.message||"Failed to reset password");p(!0),setTimeout(()=>{var m;return(m=r||t)==null?void 0:m()},1400)}catch{u("Something went wrong. Please try again.")}finally{l(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:Vr}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:f?"Password updated":"Set a new password"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:f?"You can now log in with your new password.":"Choose a strong password to secure your CloudVault account."}),!f&&s.jsxs("form",{onSubmit:x,children:[s.jsx(nf,{label:"New password",value:n,onChange:i}),s.jsx(nf,{label:"Confirm password",value:o,onChange:a}),d&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginBottom:14},children:d}),s.jsx("button",{type:"submit",disabled:c,className:"btn-primary",style:{width:"100%"},children:c?"Updating...":"Update password"})]}),f&&s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{width:"100%"},children:"Continue to login"}),s.jsx("button",{type:"button",onClick:t,className:"btn-secondary",style:{width:"100%",marginTop:12},children:"Back to login"})]})]})}function nf({label:e,value:t,onChange:r}){return s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:e}),s.jsx("input",{className:"input-field",type:"password",value:t,onChange:n=>r(n.target.value),required:!0,minLength:8,style:{marginTop:6}})]})}const of={drive:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V8H4V6.5Z",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M4 8h16v9.5A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5V8Z",stroke:"currentColor",strokeWidth:"1.8"})]}),recent:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"12",cy:"12",r:"8.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),starred:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M12 4.5l2.2 4.5 4.9.7-3.5 3.4.8 4.9L12 15.8l-4.4 2.2.8-4.9-3.5-3.4 4.9-.7L12 4.5Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"})}),shared:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"18",cy:"5",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("circle",{cx:"6",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("circle",{cx:"18",cy:"19",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M8.3 10.8l7.4-4.1M8.3 13.2l7.4 4.1",stroke:"currentColor",strokeWidth:"1.8"})]}),usage:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M5 19V10M10 19V5M15 19v-7M20 19V8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}),trash:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M9 4h6M5 7h14l-1.2 12.5a1.5 1.5 0 0 1-1.5 1.5H7.7a1.5 1.5 0 0 1-1.5-1.5L5 7Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 10v6M14 10v6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),activity:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M6 5h12v14H6V5Z",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M9 9h6M9 12h4M9 15h5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),admin:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),s.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"})]})};function o2({name:e,active:t=!1}){return s.jsx("span",{className:`nav-icon${t?" active":""}`,"aria-hidden":"true",children:of[e]||of.drive})}function s2({token:e}){var R,F;const[t,r]=y.useState(!0),[n,i]=y.useState(null),[o,a]=y.useState(null),[c,l]=y.useState(""),[d,u]=y.useState(!1),[f,p]=y.useState(!1),[x,v]=y.useState(0),[b,_]=y.useState(!1),m=async(j="")=>{r(!0),a(null);try{const D=`/share/${e}${j?`?password=${encodeURIComponent(j)}`:""}`,Z=await it(D,{},null);i(Z),u(!1)}catch(D){D.message.toLowerCase().includes("password required")||D.message.toLowerCase().includes("invalid password")||D.message.toLowerCase().includes("forbidden")||D.message.toLowerCase().includes("session expired")?(u(!0),j&&a("Invalid password")):a(D.message||"Failed to load shared link.")}finally{r(!1)}};y.useEffect(()=>{m()},[e]);const h=async()=>{if(!(!n||f)){p(!0);try{const j=`/share/${e}/download${c?`?password=${encodeURIComponent(c)}`:""}`,D=await fetch(`${ut}${j}`);if(!D.ok)throw new Error("Download failed");const Z=await D.blob();kh(Z,n.file.name)}catch(j){a(j.message)}finally{p(!1),v(0)}}},g=async()=>{const j=`/share/${e}/download${c?`?password=${encodeURIComponent(c)}`:""}`,D=await fetch(`${ut}${j}`);if(!D.ok)throw new Error("Failed to load preview");return await D.blob()};if(t)return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"var(--bg)",color:"var(--text)"},children:s.jsx("div",{className:"spinner",style:{width:32,height:32,border:"3px solid var(--border)",borderTopColor:"var(--accent-blue)",borderRadius:"50%",animation:"spin 1s linear infinite"}})});if(d&&!n)return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"var(--bg)",padding:20},children:s.jsxs("div",{style:{background:"var(--surface)",padding:40,borderRadius:24,border:"1px solid var(--border)",maxWidth:400,width:"100%",textAlign:"center"},children:[s.jsx("div",{style:{fontSize:48,marginBottom:16},children:"🔒"}),s.jsx("h2",{style:{color:"var(--text)",margin:"0 0 8px",fontSize:24,fontWeight:700},children:"Password Required"}),s.jsx("p",{style:{color:"var(--text-muted)",margin:"0 0 24px"},children:"This shared file is protected."}),s.jsxs("form",{onSubmit:j=>{j.preventDefault(),m(c)},children:[s.jsx("input",{type:"password",placeholder:"Enter password",value:c,onChange:j=>l(j.target.value),style:{width:"100%",padding:"12px 16px",borderRadius:12,border:"1px solid var(--border)",background:"rgba(255,255,255,0.05)",color:"var(--text)",marginBottom:16},autoFocus:!0}),o&&s.jsx("p",{style:{color:"var(--danger)",margin:"0 0 16px",fontSize:14},children:o}),s.jsx("button",{type:"submit",style:{width:"100%",padding:"12px",background:"var(--accent-blue)",color:"#fff",border:"none",borderRadius:12,fontWeight:600,cursor:"pointer"},children:"Unlock"})]})]})});if(o&&!n)return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"var(--bg)",padding:20},children:s.jsxs("div",{style:{background:"var(--surface)",padding:40,borderRadius:24,border:"1px solid var(--border)",maxWidth:400,width:"100%",textAlign:"center"},children:[s.jsx("div",{style:{fontSize:48,marginBottom:16},children:"⚠️"}),s.jsx("h2",{style:{color:"var(--text)",margin:"0 0 8px",fontSize:24,fontWeight:700},children:"Link Unavailable"}),s.jsx("p",{style:{color:"var(--text-muted)",margin:0},children:o})]})});const{file:k,sharedBy:S,permission:C,expiresAt:I}=n;return s.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",background:"var(--bg)",color:"var(--text)"},children:[s.jsxs("header",{style:{padding:"20px 32px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[s.jsx("div",{style:{width:32,height:32,background:"linear-gradient(135deg, #6366f1, #8b5cf6)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18},children:"☁️"}),s.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]}),s.jsx("div",{style:{color:"var(--text-muted)",fontSize:14},children:"Shared securely"})]}),s.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:20},children:s.jsxs("div",{style:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:24,padding:40,maxWidth:480,width:"100%",textAlign:"center",boxShadow:"0 24px 80px rgba(0,0,0,0.2)"},children:[s.jsx("div",{style:{fontSize:64,marginBottom:24},children:qi(k.mimeType)}),s.jsx("h1",{style:{margin:"0 0 8px",fontSize:24,fontWeight:700,wordBreak:"break-word"},children:k.name}),s.jsxs("p",{style:{margin:"0 0 24px",color:"var(--text-muted)",fontSize:15},children:[Ae(k.size)," • ",k.mimeType||"Unknown type"]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:32,padding:"12px",background:"rgba(255,255,255,0.03)",borderRadius:12},children:[s.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"var(--accent-blue)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:14,color:"#fff"},children:((R=S==null?void 0:S.fullName)==null?void 0:R.charAt(0))||((F=S==null?void 0:S.email)==null?void 0:F.charAt(0))||"U"}),s.jsxs("div",{style:{textAlign:"left"},children:[s.jsx("div",{style:{fontSize:13,fontWeight:600},children:(S==null?void 0:S.fullName)||"A user"}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:"shared this file with you"})]})]}),s.jsxs("div",{style:{display:"flex",gap:12},children:[ms(k)&&s.jsx("button",{onClick:()=>_(!0),style:{flex:1,padding:"14px",background:"var(--surface)",color:"var(--text)",border:"1px solid var(--border)",borderRadius:12,fontWeight:600,fontSize:15,cursor:"pointer",transition:"all 0.2s"},children:"Preview"}),C==="download"||C==="edit"?s.jsx("button",{onClick:h,disabled:f,style:{flex:1,padding:"14px",background:"var(--accent-blue)",color:"#fff",border:"none",borderRadius:12,fontWeight:600,fontSize:15,cursor:f?"not-allowed":"pointer",opacity:f?.7:1,transition:"all 0.2s"},children:f?"Downloading...":"Download File"}):!ms(k)&&s.jsx("div",{style:{flex:1,padding:"14px",background:"rgba(255,255,255,0.05)",color:"var(--text-muted)",border:"none",borderRadius:12,fontWeight:600,fontSize:15},children:"View Only"})]}),I&&s.jsxs("p",{style:{margin:"24px 0 0",fontSize:13,color:"var(--text-muted)"},children:["Link expires on ",new Date(I).toLocaleDateString()]})]})}),b&&s.jsx(pg,{file:k,token:null,onClose:()=>_(!1),customFetchBlob:g})]})}const a2=y.lazy(()=>en(()=>import("./ProfilePage-BzDSIzbW.js"),[])),l2=y.lazy(()=>en(()=>import("./SettingsPage-CwFY2x6q.js"),[])),c2=y.lazy(()=>en(()=>import("./SecurityPage-D4_zw9Yb.js"),[])),d2=y.lazy(()=>en(()=>import("./BillingPage-Dtwo9EEa.js"),[])),u2=y.lazy(()=>en(()=>import("./HelpPage-BQEzW-NY.js"),[])),f2=y.lazy(()=>en(()=>import("./ActivityPage-D8stnIVU.js"),[])),Da=y.lazy(()=>en(()=>import("./FileListPage-DwDnPXWg.js"),[]));function Ut(){return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:48},children:s.jsx(Bl,{size:28})})}function p2({msg:e,type:t,onClose:r}){y.useEffect(()=>{const i=setTimeout(r,3500);return()=>clearTimeout(i)},[r]);const n=t==="error"?"var(--danger)":t==="success"?"var(--accent)":"var(--accent-blue)";return s.jsxs("div",{className:"toast",role:"alert","aria-live":"polite",style:{position:"fixed",bottom:32,right:32,zIndex:9999,background:n,color:"#fff",padding:"14px 24px",borderRadius:"var(--radius)",fontFamily:"var(--font)",fontWeight:600,fontSize:14,boxShadow:"var(--shadow)",animation:"slideUp .3s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10,maxWidth:420},children:[s.jsx("span",{children:t==="error"?"✕":t==="success"?"✓":"ℹ"}),s.jsx("span",{style:{flex:1},children:e}),s.jsx("span",{onClick:r,style:{cursor:"pointer",opacity:.7,fontSize:18,lineHeight:1},children:"×"})]})}function Bl({size:e=22,color:t="var(--accent)"}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:t,borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Ho({value:e}){const t=e>85?"var(--danger)":e>60?"var(--accent-amber)":"var(--accent)";return s.jsx("div",{style:{background:"var(--border)",borderRadius:99,height:6,overflow:"hidden",width:"100%"},children:s.jsx("div",{style:{width:`${e}%`,height:"100%",background:t,borderRadius:99,transition:"width .5s ease"}})})}function sf({size:e=44}){return s.jsx("span",{style:{width:e,height:e,borderRadius:"50%",background:"var(--mega-red)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px var(--mega-red-glow)",flexShrink:0,overflow:"hidden",animation:"softPulse 3s ease infinite"},children:s.jsx("img",{src:we.logoImage,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function h2({jobs:e,history:t}){return!e.length&&!t.length?null:s.jsxs("div",{className:"transfer-panel",children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("strong",{style:{fontSize:13},children:"Transfers"}),s.jsx("span",{style:{fontSize:11,background:"var(--mega-red)",color:"#fff",padding:"2px 8px",borderRadius:99,fontWeight:700},children:e.filter(r=>r.status==="downloading").length})]}),s.jsxs("div",{style:{maxHeight:260,overflow:"auto",padding:12},children:[e.map(r=>s.jsxs("div",{style:{marginBottom:12},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:12,marginBottom:6},children:[s.jsx("span",{style:{color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.name}),s.jsx("span",{style:{color:r.status==="failed"?"var(--danger)":"var(--accent-blue)",fontWeight:800},children:r.status==="failed"?"Failed":`${r.percent}%`})]}),s.jsx(Ho,{value:r.percent})]},r.id)),t.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",fontWeight:800,margin:"10px 0 8px",textTransform:"uppercase"},children:"Recent downloads"}),t.slice(0,4).map(r=>s.jsxs("div",{style:{padding:"8px 0",borderTop:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.name}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:Ki(r.downloadedAt)})]},r.id))]})]})]})}function g2({title:e,message:t,onConfirm:r,onCancel:n,danger:i=!1}){return s.jsx("div",{className:"modal-backdrop",onClick:n,children:s.jsxs("div",{className:"modal-card",onClick:o=>o.stopPropagation(),children:[s.jsx("div",{style:{fontSize:36,textAlign:"center",marginBottom:16},children:i?"⚠️":"❓"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:8},children:e}),s.jsx("p",{style:{color:"var(--text-secondary)",fontFamily:"var(--font)",fontSize:14,textAlign:"center",marginBottom:28,lineHeight:1.5},children:t}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:n,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:r,className:"btn-primary",style:i?{background:"var(--danger)",boxShadow:"0 10px 28px rgba(248,113,113,.25)"}:void 0,children:i?"Delete":"Confirm"})]})]})})}function m2({file:e,onRename:t,onCancel:r}){const[n,i]=y.useState(e.name),o=y.useRef(null);return y.useEffect(()=>{var a;(a=o.current)==null||a.select()},[]),s.jsx("div",{className:"modal-backdrop",onClick:r,children:s.jsxs("div",{className:"modal-card",onClick:a=>a.stopPropagation(),children:[s.jsx("div",{style:{fontSize:32,textAlign:"center",marginBottom:12},children:"✏️"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:20},children:"Rename File"}),s.jsx("input",{ref:o,value:n,onChange:a=>i(a.target.value),onKeyDown:a=>a.key==="Enter"&&t(n),className:"input-field",style:{marginBottom:20}}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:r,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>t(n),className:"btn-primary",children:"Rename"})]})]})})}function Ag({tags:e}){return e!=null&&e.length?s.jsx("div",{style:{display:"flex",gap:4,marginTop:4,flexWrap:"wrap"},children:e.slice(0,3).map(t=>s.jsx("span",{style:{fontSize:10,padding:"2px 6px",borderRadius:6,background:"rgba(240,22,58,.12)",color:"var(--accent)",fontWeight:600},children:t},t))}):null}function ur({label:e,onClick:t,tone:r="neutral",disabled:n=!1}){const i=r==="accent"?"accent":r==="blue"?"blue":"";return s.jsx("button",{type:"button",className:`quick-action-btn ${i}`.trim(),title:e,disabled:n,onClick:o=>{o.stopPropagation(),n||t()},children:e})}function v2({file:e,onDelete:t,onShare:r,onPreview:n,onRename:i,onDownload:o,onMove:a,onCopy:c,onTags:l}){return s.jsxs("div",{className:"file-list-card",children:[s.jsx("div",{style:{fontSize:34,flexShrink:0,width:48,height:48,borderRadius:14,background:"rgba(56,189,248,.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:qi(e.mimeType)}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:16,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:12,marginTop:3},children:[Ae(e.size)," · ",Ki(e.createdAt)]}),s.jsx(Ag,{tags:e.tags})]}),s.jsxs("div",{className:"file-list-actions",children:[s.jsx(ur,{label:"Preview",disabled:!ms(e.mimeType),onClick:()=>n(e),tone:"blue"}),s.jsx(ur,{label:"Download",onClick:()=>o(e)}),s.jsx(ur,{label:"Share",onClick:()=>r(e),tone:"accent"}),s.jsx(ur,{label:"Rename",onClick:()=>i(e)}),s.jsx(Rg,{file:e,onMove:a,onCopy:c,onTags:l,onDelete:t})]})]})}function y2({file:e,token:t,onDelete:r,onShare:n,onPreview:i,onRename:o,onDownload:a,onMove:c,onCopy:l,onTags:d}){var f;const u=(f=e.mimeType)==null?void 0:f.startsWith("image/");return s.jsxs("div",{className:"glass-card mega-file-card",style:{borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{height:170,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(217,0,7,.08), rgba(20,20,20,.95))",borderBottom:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[u?s.jsx(ab,{fileId:e.id,token:t,alt:e.name,mimeType:e.mimeType}):s.jsx("div",{style:{fontSize:56,display:"flex"},children:qi(e.mimeType)}),s.jsx("div",{style:{position:"absolute",right:8,bottom:8,fontSize:10,fontWeight:700,background:"#111827",color:"#fff",padding:"2px 6px",borderRadius:6},children:Ae(e.size)}),s.jsx("div",{style:{position:"absolute",right:10,top:10},children:s.jsx(Rg,{file:e,onMove:c,onCopy:l,onTags:d,onDelete:r})})]}),s.jsxs("div",{style:{padding:"14px"},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:5},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:11},children:[Ae(e.size)," · ",Ki(e.createdAt)]}),s.jsx(Ag,{tags:e.tags}),s.jsxs("div",{className:"grid-actions",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[s.jsx(ur,{label:"Preview",disabled:!ms(e.mimeType),onClick:()=>i(e),tone:"blue"}),s.jsx(ur,{label:"Share",onClick:()=>n(e),tone:"accent"}),s.jsx(ur,{label:"Download",onClick:()=>a(e)}),s.jsx(ur,{label:"Rename",onClick:()=>o(e)})]})]})]})}function x2({account:e,onManage:t}){if(!(e!=null&&e.storageWarning))return null;const r=e.storageWarning==="critical";return s.jsxs("div",{style:{padding:"10px 20px",background:r?"rgba(255,77,77,.12)":"rgba(246,179,71,.12)",borderBottom:`1px solid ${r?"var(--danger)":"var(--accent-amber)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap",fontSize:13,fontFamily:"var(--font)"},children:[s.jsx("span",{children:r?"Storage almost full (95%+).":"Storage over 80% full."}),s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{padding:"6px 14px",fontSize:13},children:"Manage storage"})]})}function w2({username:e,stats:t,storagePercent:r,onUpload:n,onNewFolder:i}){return s.jsxs("div",{className:"mega-drive-header",children:[s.jsx("h1",{style:{fontSize:28,fontWeight:800,color:"var(--text)",marginBottom:20},children:"Cloud drive"}),s.jsxs("div",{className:"mega-drive-actions",children:[s.jsx("button",{type:"button",className:"btn-primary mega-upload-btn",onClick:n,children:"↑ Upload"}),s.jsx("button",{type:"button",className:"btn-secondary mega-folder-btn",onClick:i,children:"+ New folder"})]}),s.jsxs("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:8},children:[t.totalFiles," files · ",t.totalFolders," folders · ",Math.round(r),"% storage used",e?` · @${e}`:""]})]})}function b2({children:e,onNavigate:t,onSignOut:r,onUpgrade:n}){const{account:i,notifications:o,unreadCount:a,markAllRead:c}=Pg();return s.jsxs(s.Fragment,{children:[s.jsx(r2,{account:i,onOpenSettings:()=>t("settings")}),s.jsx(t2,{account:i,onUpgrade:n}),s.jsx(x2,{account:i,onManage:()=>t("billing")}),s.jsxs("header",{className:"account-header mega-top-bar",style:{position:"sticky",top:0,zIndex:90,borderBottom:"1px solid var(--border)",background:"rgba(0,0,0,.92)",backdropFilter:"blur(16px)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,padding:"0 24px 0 280px"},children:[s.jsx(n2,{notifications:o,unreadCount:a,onMarkAllRead:c}),s.jsx(e2,{account:i,onNavigate:t,onSignOut:r})]}),e]})}function k2(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?new URLSearchParams(window.location.search).get("token"):null}function af(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/reset-password")?new URLSearchParams(window.location.search).get("token"):null}function lf(){const e=window.location.pathname.replace(/\/+$/,"")||"/";if(e.startsWith("/share/")){const t=e.split("/");if(t.length>=3)return t[2]}return null}function S2(){const[e,t]=y.useState(()=>window.innerWidth);return y.useEffect(()=>{const r=()=>t(window.innerWidth);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),{width:e,isMobile:e<=768,isSmall:e<=520}}function _2(){const[e,t]=y.useState(k2),[r,n]=y.useState(af),[i,o]=y.useState(lf),[a,c]=y.useState(()=>{const w=localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token"),P=af(),U=lf();return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?"verify-email":P?"reset-password":U?"shared-link":w?"app":"landing"}),[l,d]=y.useState("login"),[u,f]=y.useState(()=>localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token")||""),[p,x]=y.useState(()=>localStorage.getItem("cv_user")||sessionStorage.getItem("cv_user")||""),[v,b]=y.useState(null),[_,m]=y.useState([]),[h,g]=y.useState([]),[k,S]=y.useState({totalFiles:0,storageUsed:0,storageQuota:1024*1024*1024,totalFolders:0}),[C,I]=y.useState(null),[R,F]=y.useState([]),[j,D]=y.useState(""),[Z,xe]=y.useState(!1),[Ie,ge]=y.useState(0),[pe,Se]=y.useState(null),[N,L]=y.useState([]),[M,K]=y.useState(()=>{try{return JSON.parse(localStorage.getItem("cv_downloadHistory")||"[]")}catch{return[]}}),[te,ft]=y.useState(null),[je,pt]=y.useState(null),[et,Te]=y.useState(""),[ro,tt]=y.useState(!1),[Ge,Ct]=y.useState(!1),[Ye,tn]=y.useState(()=>localStorage.getItem("cv_viewMode")||"list"),[er,Ys]=y.useState("all"),[Ot,no]=y.useState(()=>localStorage.getItem("cv_theme")||"dark"),[jr,ht]=y.useState(null),[Gn,Tr]=y.useState(null),[rt,rn]=y.useState(!1),[J,T]=y.useState("drive"),[se,Rr]=y.useState("createdAt"),[Y,Yn]=y.useState("desc"),[io,Og]=y.useState(""),[Qs,Lg]=y.useState([]),[zg,Mg]=y.useState(1),[Dg,Fg]=y.useState(!1),[oo,Qn]=y.useState(!1),[Ug,Bg]=y.useState([]),[Wg,$g]=y.useState([]),[Vg,Hg]=y.useState([]),[Jc,Gg]=y.useState(null),[nn,Kn]=y.useState(null),[Ks,Xc]=y.useState(null),[qs,Js]=y.useState(null),[Zc,Yg]=y.useState("user"),[ed,Qg]=y.useState([]),[td,Kg]=y.useState(null),[Lt,Nr]=y.useState(null),[qg,Jg]=y.useState([]),[Xg,Zg]=y.useState([]),[em,tm]=y.useState([]),Xs=qb(j,400),{isMobile:so,isSmall:rm}=S2(),qn=y.useRef(),rd=y.useRef(),q=y.useCallback((w,P="info")=>ft({msg:w,type:P}),[]),G=y.useCallback((w,P)=>it(w,P,u),[u]),Le=y.useCallback(async(w=1,P=!1)=>{var U,$;if(u){Qn(!0);try{if(J==="trash"){const nt=await G("/trash");$g(Ar(nt,"files")),Hg(Ar(nt,"folders")),Qn(!1);return}if(J==="admin"){const[nt,km]=await Promise.all([G("/admin/users?limit=50"),G("/admin/analytics").catch(()=>null)]);Qg(Ar(nt,"users")),Kg(km),Qn(!1);return}if(J==="dashboard"){const nt=await G("/storage/usage");Gg(nt),S({totalFiles:nt.fileCount??0,storageUsed:nt.storageUsed??0,storageQuota:nt.storageQuota??1024*1024*1024,totalFolders:nt.folderCount??0}),Qn(!1);return}const V=new URLSearchParams;C&&V.set("folderId",C),Xs&&V.set("search",Xs),io&&V.set("tag",io),V.set("sortBy",se),V.set("sortOrder",Y),V.set("page",String(w)),V.set("limit","30");const[Q,gt,Pr,ea,bm]=await Promise.all([G(`/files?${V}`),G(`/folders?${C?`parentId=${C}`:""}`),G("/storage/usage"),G("/files/tags").catch(()=>({tags:[]})),G("/folders?all=true").catch(()=>({folders:[]}))]),ta=Ar(Q,"files"),cd=Ar(gt,"folders");m(P?nt=>[...nt,...ta]:ta),g(cd),Lg((ea==null?void 0:ea.tags)||[]),Bg(Ar(bm,"folders")),Fg((((U=Q==null?void 0:Q.pagination)==null?void 0:U.page)||1)<((($=Q==null?void 0:Q.pagination)==null?void 0:$.totalPages)||1)),Mg(w),S({totalFiles:Pr.fileCount??ta.length,storageUsed:Pr.storageUsed??0,storageQuota:Pr.storageQuota??1024*1024*1024,totalFolders:Pr.folderCount??cd.length})}catch(V){console.error("Refresh failed:",V);const Q=V.message.toLowerCase();Q.includes("credential")||Q.includes("unauthorized")||Q.includes("token")?(localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),f(""),x(""),c("landing")):q(V.message,"error")}Qn(!1)}},[u,C,Xs,io,se,Y,J,G,q]);y.useEffect(()=>{Le(1,!1)},[Le]),y.useEffect(()=>{G("/users/me").then(w=>Yg((w==null?void 0:w.role)||"user")).catch(()=>{})},[u,G]),y.useEffect(()=>{if(!u||J==="drive"||J==="trash"||J==="dashboard"||J==="admin")return;(async()=>{try{if(J==="recent"){const P=await G("/dashboard");Jg(P.recentFiles||[])}else if(J==="starred"){const P=await G("/files?isStarred=true&limit=50");Zg(Ar(P,"files"))}else if(J==="shared"){const P=await G("/dashboard"),U=[...P.sharedWithMe||[],...P.sharedByMe||[]].map($=>$.file||$);tm(U.filter(Boolean))}}catch{}})()},[u,J,G]);const nm=w=>{Nr(w),w==="dashboard"&&T("dashboard"),w==="billing"&&Nr("billing")};y.useEffect(()=>{localStorage.setItem("cv_viewMode",Ye)},[Ye]),y.useEffect(()=>{localStorage.setItem("cv_theme",Ot)},[Ot]),y.useEffect(()=>{const w=P=>{var U;(U=P.detail)!=null&&U.token&&f(P.detail.token)};return window.addEventListener("cv-token-refreshed",w),()=>window.removeEventListener("cv-token-refreshed",w)},[]);const im=(w,P,U,$,V=!0)=>{if(!w&&($!=null&&$.email)){b($),c("verify-email");return}if(!w)return;const Q=V?localStorage:sessionStorage,gt=V?sessionStorage:localStorage;Q.setItem("cv_token",w),gt.removeItem("cv_token"),P&&Q.setItem("cv_refreshToken",P),gt.removeItem("cv_refreshToken");const Pr=typeof U=="string"?U:($==null?void 0:$.fullName)||($==null?void 0:$.email);Q.setItem("cv_user",Pr||""),gt.removeItem("cv_user"),$!=null&&$.avatarUrl&&Q.setItem("cv_avatar",$.avatarUrl),f(w),x(Pr||""),c("app")},om=async w=>{const P=`${w.id}-${Date.now()}`;Se({name:w.name,percent:0}),L(U=>[{id:P,name:w.name,percent:0,status:"downloading"},...U].slice(0,6));try{const U=await Mc(w.id,u,{onProgress:V=>{Se({name:w.name,percent:V}),L(Q=>Q.map(gt=>gt.id===P?{...gt,percent:V}:gt))}});kh(U,w.name);const $={id:P,name:w.name,size:w.size,downloadedAt:new Date().toISOString()};K(V=>{const Q=[$,...V].slice(0,12);return localStorage.setItem("cv_downloadHistory",JSON.stringify(Q)),Q}),L(V=>V.map(Q=>Q.id===P?{...Q,percent:100,status:"complete"}:Q)),q(`Downloaded "${w.name}"`,"success")}catch(U){L($=>$.map(V=>V.id===P?{...V,status:"failed"}:V)),q(U.message,"error")}Se(null)},nd=async()=>{try{const w=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");await G("/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:w})})}catch{}localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),f(""),x(""),c("landing")},id=async(w,P,U)=>{if(!u)throw new Error("Authentication token missing. Please log in again.");const $=new FormData;return $.append("file",w),P&&$.append("folderId",P),ey("/files/upload",$,u,U)},sm=async(w,P)=>G("/folders",{method:"POST",body:JSON.stringify({name:w,parentId:P||null})}),Zs=async(w,P=!1)=>{if(!u){q("Please log in again to upload files.","error");return}const U=Array.from(w||[]);if(!U.length)return;xe(!0),ge(0);let $=0;try{if(P&&U.some(V=>V.webkitRelativePath))await Jb(U,{baseFolderId:C,createFolder:sm,uploadFile:async(V,Q)=>{await id(V,Q,ge),$++},onProgress:ge});else for(let V=0;V<U.length;V++)try{await id(U[V],C,Q=>{const gt=Math.round((V+Q/100)/U.length*100);ge(gt)}),$++}catch(Q){q(`Failed to upload "${U[V].name}": ${Q.message}`,"error")}}finally{xe(!1),ge(0),Le(1,!1),$>0&&q(`${$} file(s) uploaded successfully!`,"success")}},am=w=>{ht({title:"Delete File",message:`Move "${w.name}" to trash? You can restore it later from the Trash view.`,danger:!0,onConfirm:async()=>{ht(null);try{await G(`/files/${w.id}`,{method:"DELETE"}),Le(),q("File deleted","success")}catch(P){q(P.message,"error")}}})},lm=w=>{ht({title:"Delete Folder",message:`Delete folder "${w.name}" and all its contents? This cannot be undone.`,danger:!0,onConfirm:async()=>{ht(null);try{await G(`/folders/${w.id}`,{method:"DELETE"}),Le(),q("Folder deleted","success")}catch(P){q(P.message,"error")}}})},cm=async(w,P)=>G(`/files/${w.id}/share`,{method:"POST",body:JSON.stringify(P)}),dm=async(w,{targetFolderId:P})=>{try{await G(`/files/${w.id}/move`,{method:"POST",body:JSON.stringify({targetFolderId:P})}),Kn(null),Le(1,!1),q("File moved","success")}catch(U){q(U.message,"error")}},um=async(w,{targetFolderId:P,newName:U})=>{try{await G(`/files/${w.id}/copy`,{method:"POST",body:JSON.stringify({targetFolderId:P,newName:U!==w.name?U:void 0})}),Kn(null),Le(1,!1),q("File copied","success")}catch($){q($.message,"error")}},fm=async(w,P)=>{try{await G(`/files/${w.id}`,{method:"PUT",body:JSON.stringify({tags:P})}),Js(null),Le(1,!1),q("Tags updated","success")}catch(U){q(U.message,"error")}},pm=async w=>{try{await G(`/trash/files/${w}/restore`,{method:"POST"}),Le(1,!1),q("File restored","success")}catch(P){q(P.message,"error")}},hm=async w=>{try{await G(`/trash/folders/${w}/restore`,{method:"POST"}),Le(1,!1),q("Folder restored","success")}catch(P){q(P.message,"error")}},gm=w=>{ht({title:"Delete forever",message:`"${w.name}" will be permanently deleted. This cannot be undone.`,danger:!0,onConfirm:async()=>{ht(null);try{await G(`/files/${w.id}/permanent`,{method:"DELETE"}),Le(1,!1),q("File permanently deleted","success")}catch(P){q(P.message,"error")}}})},mm=()=>{ht({title:"Empty trash",message:"All items in trash will be permanently deleted.",danger:!0,onConfirm:async()=>{ht(null);try{await G("/trash/empty",{method:"POST"}),Le(1,!1),q("Trash emptied","success")}catch(w){q(w.message,"error")}}})},vm=async(w,P)=>{if(!P.trim()||P===w.name){Tr(null);return}try{await G(`/files/${w.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:P})}),Le(),q("File renamed","success")}catch(U){q(U.message,"error")}Tr(null)},od=async()=>{if(et.trim()){try{await G("/folders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:et,parentId:C})}),Le(),q("Folder created!","success")}catch(w){q(w.message,"error")}Te(""),tt(!1)}},ym=w=>{I(w.id),F(P=>[...P,w]),rn(!1)},sd=w=>{w===-1?(I(null),F([])):(I(R[w].id),F(P=>P.slice(0,w+1)))},xm=w=>{w.preventDefault(),Ct(!1),w.dataTransfer.files.length>0&&Zs(w.dataTransfer.files)},ao=y.useMemo(()=>{const w=wu.find(P=>P.key===er);return!w||w.key==="all"?_:_.filter(P=>w.test(P.mimeType||""))},[_,er]),ad=k.storageQuota||1024*1024*1024,ld=Math.min(100,k.storageUsed/ad*100);if(e)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Vr}),s.jsx(tf,{token:e,onVerified:()=>{t(null),window.history.replaceState({},"","/"),c("auth"),d("login")},onBack:()=>{t(null),window.history.replaceState({},"","/"),c("auth"),d("login")}})]});if(r)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Vr}),s.jsx(rf,{token:r,onBack:()=>{n(null),window.history.replaceState({},"","/"),c("auth"),d("login")}})]});if(a==="landing"&&!u)return s.jsx(dy,{onGetStarted:()=>{d("register"),c("auth")},onLogin:()=>{d("login"),c("auth")},onSignUp:()=>{d("register"),c("auth")}});if(a==="auth"&&!u)return s.jsx(ob,{initialMode:l,onAuth:im,onNeedsVerification:w=>{b(w),c("verify-email")},onBack:()=>c("landing")});if(a==="verify-email"&&!u)return s.jsx(tf,{email:v==null?void 0:v.email,onVerified:()=>{b(null),c("auth"),d("login")},onBack:()=>{b(null),c("auth"),d("login")}});if(a==="reset-password"&&!u)return s.jsx(rf,{token:r,onSuccess:()=>{n(null),window.history.replaceState({},"","/"),c("auth"),d("login")},onBack:()=>{n(null),c("auth"),d("login")}});if(a==="shared-link")return s.jsx("div",{"data-theme":Ot,className:"app-shell",style:{display:"flex",flexDirection:"column",minHeight:"100vh",background:"var(--bg)",color:"var(--text)"},children:s.jsx(s2,{token:i})});const wm=Ye==="grid"?y2:v2;return s.jsx(Zb,{token:u,children:s.jsx(b2,{onNavigate:w=>{Nr(null),nm(w)},onSignOut:nd,onUpgrade:()=>{Nr("billing"),T("drive")},children:s.jsxs("div",{"data-theme":Ot,className:"app-shell",children:[s.jsx("style",{children:Vr}),s.jsx("button",{type:"button",className:"mobile-menu-button","aria-label":"Open navigation menu","aria-expanded":rt,onClick:()=>rn(w=>!w),style:{display:"none",position:"fixed",top:16,left:16,zIndex:200,background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:10,width:40,height:40,alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--text)",fontSize:20,...so?{display:"flex"}:{}},children:"☰"}),rt&&so&&s.jsx("div",{onClick:()=>rn(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:99}}),s.jsxs("div",{className:`sidebar ${rt?"open":""}`,style:{position:"fixed",left:0,top:0,bottom:0,width:260,background:"var(--bg-sidebar)",borderRight:"1px solid var(--border)",padding:"16px 12px",display:"flex",flexDirection:"column",gap:4,zIndex:100,transition:"transform .35s cubic-bezier(.4,0,.2,1)",...so?{transform:rt?"translateX(0)":"translateX(-100%)"}:{}},children:[s.jsxs("div",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:10,padding:"4px 8px"},children:[s.jsx(sf,{size:40}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:20,fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em"},children:"Drive"}),s.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:1},children:["@",p]})]})]}),s.jsx("button",{type:"button",onClick:()=>{var w;return(w=qn.current)==null?void 0:w.click()},className:"btn-primary",style:{minHeight:48,borderRadius:999,fontSize:15,justifyContent:"center",display:"flex",alignItems:"center",gap:8,margin:"0 0 16px"},children:"+ New"}),[{id:"drive",icon:"drive",label:"My Drive"},{id:"recent",icon:"recent",label:"Recent"},{id:"starred",icon:"starred",label:"Starred"},{id:"shared",icon:"shared",label:"Shared"},{id:"dashboard",icon:"usage",label:"Storage"},{id:"trash",icon:"trash",label:"Trash"},{id:"activity",icon:"activity",label:"Activity"},...Zc==="admin"||Zc==="super_admin"?[{id:"admin",icon:"admin",label:"Admin"}]:[]].map(w=>s.jsxs("button",{type:"button",className:`nav-item${J===w.id?" active":""}`,"aria-current":J===w.id?"page":void 0,onClick:()=>{Nr(null),T(w.id),rn(!1),w.id==="drive"&&(I(null),F([]))},children:[s.jsx(o2,{name:w.icon,active:J===w.id}),s.jsx("span",{children:w.label})]},w.id)),s.jsx("div",{style:{borderTop:"1px solid var(--border)",margin:"12px 0 8px"}}),s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1px",marginBottom:8,paddingLeft:4},children:"OVERVIEW"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16},children:[s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:k.totalFiles}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Files"})]}),s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:k.totalFolders}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Folders"})]})]}),s.jsxs("div",{style:{marginTop:"auto"},children:[s.jsxs("div",{style:{marginBottom:16,background:"var(--surface-raised)",borderRadius:14,padding:"14px",border:"1px solid var(--border)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:[s.jsx("span",{style:{fontWeight:600},children:"Free"}),s.jsxs("span",{children:[Ae(k.storageUsed)," of ",Ae(ad)," used"]})]}),s.jsx(Ho,{value:ld}),s.jsx("button",{type:"button",onClick:()=>Nr("billing"),className:"btn-secondary",style:{width:"100%",marginTop:12,minHeight:40,borderRadius:999},children:"Upgrade"})]}),s.jsx("button",{type:"button",onClick:nd,className:"btn-danger",children:"Sign Out"})]})]}),s.jsxs("div",{className:"main-content",style:{marginLeft:so?0:260,padding:"20px 32px",minHeight:"100vh"},children:[s.jsx(C2,{appPage:Lt,setAppPage:Nr,api:G,token:u,notify:q,stats:k,usageDetail:Jc,adminUsers:ed,systemHealth:td,loading:oo,onRefreshAccount:()=>{},theme:Ot,setTheme:no}),!Lt&&J==="recent"&&s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(Da,{title:"Recent files",files:qg,emptyMessage:"No recent files yet.",onBack:()=>T("drive"),onOpen:pt})}),!Lt&&J==="starred"&&s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(Da,{title:"Starred",files:Xg,emptyMessage:"Star files to see them here.",onBack:()=>T("drive"),onOpen:pt})}),!Lt&&J==="shared"&&s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(Da,{title:"Shared with you",files:em,emptyMessage:"Nothing shared yet.",onBack:()=>T("drive"),onOpen:pt})}),!Lt&&J==="activity"&&s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(f2,{api:G,onBack:()=>T("drive")})}),!Lt&&J==="trash"&&s.jsx(lb,{trashedFiles:Wg,trashedFolders:Vg,loading:oo,onRestoreFile:pm,onRestoreFolder:hm,onPermanentDelete:gm,onEmptyTrash:mm,onBack:()=>T("drive")}),!Lt&&J==="dashboard"&&s.jsx(Wb,{stats:k,usage:Jc,onBack:()=>T("drive")}),!Lt&&J==="admin"&&s.jsx($b,{users:ed,systemHealth:td,loading:oo,onBack:()=>T("drive")}),!Lt&&J==="drive"&&s.jsxs(s.Fragment,{children:[s.jsx(w2,{username:p,stats:k,storagePercent:ld,onUpload:()=>{var w;return(w=qn.current)==null?void 0:w.click()},onNewFolder:()=>tt(!0)}),s.jsxs("div",{className:"drive-toolbar",style:{flexDirection:"column",alignItems:"stretch",gap:16},children:[s.jsxs("div",{className:"mega-search-bar drive-search",children:[s.jsx("span",{className:"search-icon","aria-hidden":"true",children:"🔍"}),s.jsx("input",{className:"input-field",placeholder:"Search Cloud drive...",value:j,onChange:w=>D(w.target.value),style:{width:"100%",padding:"12px 20px 12px 44px",borderRadius:999,background:"var(--bg-card)",border:"1px solid var(--border)"}})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"icon-btn",title:Ot==="dark"?"Light mode":"Dark mode",onClick:()=>no(w=>w==="dark"?"light":"dark"),children:Ot==="dark"?"☀":"🌙"}),s.jsxs("div",{className:"view-toggle",children:[s.jsx("button",{type:"button",onClick:()=>tn("list"),className:`view-toggle-btn${Ye==="list"?" active":""}`,children:"☰"}),s.jsx("button",{type:"button",onClick:()=>tn("grid"),className:`view-toggle-btn${Ye==="grid"?" active":""}`,children:"▦"})]}),J==="drive"&&s.jsxs("div",{className:"drive-actions",style:{marginLeft:"auto"},children:[s.jsx("button",{type:"button",onClick:()=>tt(w=>!w),className:"btn-secondary mega-folder-btn",children:"New folder"}),s.jsx("button",{type:"button",onClick:()=>{var w;return(w=qn.current)==null?void 0:w.click()},className:"btn-primary mega-upload-btn",children:"Upload"}),s.jsx("button",{type:"button",onClick:()=>{var w;return(w=rd.current)==null?void 0:w.click()},className:"btn-secondary",children:"Folder"}),s.jsx("input",{ref:qn,type:"file",multiple:!0,hidden:!0,onChange:w=>{Zs(w.target.files),w.target.value=""}}),s.jsx("input",{ref:rd,type:"file",multiple:!0,webkitdirectory:"",hidden:!0,onChange:w=>{Zs(w.target.files,!0),w.target.value=""}})]})]})]}),J==="drive"&&s.jsxs("div",{className:"drive-sortbar",children:[s.jsxs("select",{value:se,onChange:w=>Rr(w.target.value),className:"select-field",children:[s.jsx("option",{value:"createdAt",children:"Date"}),s.jsx("option",{value:"name",children:"Name"}),s.jsx("option",{value:"size",children:"Size"}),s.jsx("option",{value:"updatedAt",children:"Modified"})]}),s.jsxs("select",{value:Y,onChange:w=>Yn(w.target.value),className:"select-field",children:[s.jsx("option",{value:"desc",children:"Descending"}),s.jsx("option",{value:"asc",children:"Ascending"})]}),Qs.length>0&&s.jsxs("select",{value:io,onChange:w=>Og(w.target.value),className:"select-field",style:{gridColumn:rm?"1 / -1":void 0},children:[s.jsx("option",{value:"",children:"All tags"}),Qs.map(w=>s.jsx("option",{value:w,children:w},w))]})]}),J==="drive"&&s.jsx("div",{className:"filter-chips",children:wu.map(w=>s.jsxs("button",{type:"button",onClick:()=>Ys(w.key),className:`filter-chip${er===w.key?" active":""}`,children:[s.jsx("span",{children:w.icon})," ",w.label]},w.key))}),J==="drive"&&ro&&s.jsxs("div",{className:"new-folder-row",style:{display:"flex",gap:10,marginBottom:20,animation:"fadeIn .2s ease"},children:[s.jsx("input",{className:"input-field",placeholder:"Folder name…",value:et,onChange:w=>Te(w.target.value),onKeyDown:w=>w.key==="Enter"&&od(),style:{width:260},autoFocus:!0}),s.jsx("button",{type:"button",onClick:od,className:"btn-primary",children:"Create"}),s.jsx("button",{type:"button",onClick:()=>tt(!1),className:"btn-secondary",children:"Cancel"})]}),s.jsxs("div",{className:"breadcrumb-row",style:{alignItems:"center",gap:8,marginBottom:20,fontSize:14,color:"var(--text-muted)"},children:[s.jsxs("span",{onClick:()=>sd(-1),className:"breadcrumb-link",style:{color:C?"var(--text-secondary)":"var(--accent)"},children:[we.logo," Home"]}),R.map((w,P)=>s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--text-muted)"},children:"›"}),s.jsx("span",{onClick:()=>sd(P),className:"breadcrumb-link",style:{color:P===R.length-1?"var(--accent)":"var(--text-secondary)"},children:w.name})]},w.id))]}),Z&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(240,22,58,.24)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(Bl,{size:14})," Uploading…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent)"},children:[Ie,"%"]})]}),s.jsx(Ho,{value:Ie})]}),pe&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(64,144,255,.3)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(Bl,{size:14,color:"var(--accent-blue)"})," Downloading ",pe.name,"…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent-blue)"},children:[pe.percent,"%"]})]}),s.jsx(Ho,{value:pe.percent})]}),s.jsx("div",{onDragOver:w=>{w.preventDefault(),Ct(!0)},onDragLeave:()=>Ct(!1),onDrop:xm,className:`drop-zone${Ge?" drag-over":""}`,children:Ge?s.jsx("span",{style:{color:"var(--accent)",fontWeight:700,fontSize:16},children:"⬇ Drop files here to upload"}):s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:32,marginBottom:8},children:"📤"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:700,marginBottom:4},children:"Drag & drop files or folders"}),s.jsx("div",{style:{fontSize:13},children:"or use the Upload button above"})]})}),h.length>0&&s.jsxs("div",{style:{marginBottom:28},children:[s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px",marginBottom:12},children:"FOLDERS"}),s.jsx("div",{className:"folder-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:h.map(w=>s.jsx(E2,{folder:w,onOpen:ym,onDelete:lm},w.id))})]}),s.jsxs("div",{children:[s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:s.jsxs("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px"},children:["FILES ",ao.length>0&&s.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:500},children:["(",ao.length,")"]})]})}),oo?s.jsx(Kb,{count:6,grid:Ye==="grid"}):ao.length===0?s.jsxs("div",{className:"glass-card empty-state",style:{textAlign:"center",padding:"72px 32px",borderRadius:"var(--radius-lg)",border:"1.5px dashed var(--border)",animation:"fadeIn .3s ease"},children:[s.jsx("div",{style:{width:88,height:88,margin:"0 auto 20px",borderRadius:24,background:"var(--gradient-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"var(--glow)"},children:s.jsx(sf,{size:48})}),s.jsx("div",{style:{fontWeight:800,fontSize:20,marginBottom:8,color:"var(--text)"},children:er!=="all"?"No matching files":"No files in My Drive yet"}),s.jsx("div",{style:{fontSize:14,color:"var(--text-muted)",marginBottom:24,maxWidth:360,margin:"0 auto 24px"},children:er!=="all"?"Try a different filter or upload new files.":"Upload photos, documents, and more. Everything stays secure in your drive."}),er==="all"&&s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"btn-primary",onClick:()=>{var w;return(w=qn.current)==null?void 0:w.click()},children:"Upload your first file"}),s.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>tt(!0),children:"Create folder"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`file-grid${Ye==="grid"?" grid-view":""}`,style:{display:Ye==="grid"?"grid":"flex",gridTemplateColumns:Ye==="grid"?"repeat(auto-fill, minmax(250px, 1fr))":void 0,flexDirection:Ye==="list"?"column":void 0,gap:Ye==="grid"?12:8},children:ao.map(w=>s.jsx(wm,{file:w,token:u,onDelete:am,onShare:P=>Xc(P),onPreview:pt,onRename:Tr,onDownload:om,onMove:P=>Kn({file:P,mode:"move"}),onCopy:P=>Kn({file:P,mode:"copy"}),onTags:Js},w.id))}),Dg&&s.jsx("button",{type:"button",onClick:()=>Le(zg+1,!0),className:"load-more-btn",children:"Load more files"})]})]})]})]}),je&&s.jsx(pg,{file:je,token:u,onClose:()=>pt(null)}),nn&&s.jsx(ub,{file:nn.file,mode:nn.mode,folders:Xb(Ug),currentFolderId:C,onCancel:()=>Kn(null),onConfirm:w=>nn.mode==="move"?dm(nn.file,w):um(nn.file,w)}),qs&&s.jsx(pb,{file:qs,allTags:Qs,onCancel:()=>Js(null),onSave:w=>fm(qs,w)}),Ks&&s.jsx(Bb,{file:Ks,onCancel:()=>Xc(null),onShare:w=>cm(Ks,w)}),jr&&s.jsx(g2,{title:jr.title,message:jr.message,danger:jr.danger,onConfirm:jr.onConfirm,onCancel:()=>ht(null)}),Gn&&s.jsx(m2,{file:Gn,onRename:w=>vm(Gn,w),onCancel:()=>Tr(null)}),s.jsx(h2,{jobs:N,history:M}),te&&s.jsx(p2,{msg:te.msg,type:te.type,onClose:()=>ft(null)})]})})})}function C2({appPage:e,setAppPage:t,api:r,notify:n,stats:i,usageDetail:o,adminUsers:a,systemHealth:c,loading:l,onRefreshAccount:d,theme:u,setTheme:f}){const{account:p,refreshAll:x}=Pg();if(!e)return null;const v=()=>t(null);return e==="profile"?s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(a2,{account:p,onBack:v})}):e==="settings"?s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(l2,{account:p,api:r,onBack:v,onUpdated:()=>x(),notify:n,theme:u,onThemeChange:f})}):e==="security"?s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(c2,{api:r,account:p,onBack:v,notify:n})}):e==="billing"?s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(d2,{account:p,api:r,onBack:v,notify:n,onUpdated:()=>x()})}):e==="help"?s.jsx(y.Suspense,{fallback:s.jsx(Ut,{}),children:s.jsx(u2,{onBack:v})}):null}function E2({folder:e,onOpen:t,onDelete:r}){const[n,i]=y.useState(!1);return s.jsxs("div",{className:"folder-card",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>t(e),children:[s.jsx("span",{style:{fontSize:24},children:"📁"}),s.jsx("div",{style:{flex:1,minWidth:0},children:s.jsx("div",{style:{fontWeight:600,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},children:e.name})}),s.jsx("button",{onClick:o=>{o.stopPropagation(),r(e)},style:{background:"none",border:"none",color:"rgba(255,100,100,.3)",cursor:"pointer",fontSize:14,padding:4,borderRadius:6,opacity:n?1:0,transition:"opacity .15s"},children:"🗑"})]})}bh(document.getElementById("root")).render(s.jsx(y.StrictMode,{children:s.jsx(_2,{})}));export{we as B,iy as P,I2 as S,Ae as a,qi as f,s as j,y as r,Ki as t};
