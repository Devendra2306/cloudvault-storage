var Qm=Object.defineProperty;var Xm=(e,t,r)=>t in e?Qm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ae=(e,t,r)=>Xm(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function qm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Af={exports:{}},Ls={},Of={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=Symbol.for("react.element"),Jm=Symbol.for("react.portal"),Zm=Symbol.for("react.fragment"),e0=Symbol.for("react.strict_mode"),t0=Symbol.for("react.profiler"),r0=Symbol.for("react.provider"),n0=Symbol.for("react.context"),i0=Symbol.for("react.forward_ref"),o0=Symbol.for("react.suspense"),s0=Symbol.for("react.memo"),a0=Symbol.for("react.lazy"),Rd=Symbol.iterator;function l0(e){return e===null||typeof e!="object"?null:(e=Rd&&e[Rd]||e["@@iterator"],typeof e=="function"?e:null)}var Df={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lf=Object.assign,zf={};function Gn(e,t,r){this.props=e,this.context=t,this.refs=zf,this.updater=r||Df}Gn.prototype.isReactComponent={};Gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mf(){}Mf.prototype=Gn.prototype;function sc(e,t,r){this.props=e,this.context=t,this.refs=zf,this.updater=r||Df}var ac=sc.prototype=new Mf;ac.constructor=sc;Lf(ac,Gn.prototype);ac.isPureReactComponent=!0;var Pd=Array.isArray,Ff=Object.prototype.hasOwnProperty,lc={current:null},Uf={key:!0,ref:!0,__self:!0,__source:!0};function Bf(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ff.call(t,n)&&!Uf.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)i[n]===void 0&&(i[n]=c[n]);return{$$typeof:Ji,type:e,key:o,ref:a,props:i,_owner:lc.current}}function c0(e,t){return{$$typeof:Ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ji}function d0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Nd=/\/+/g;function pa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?d0(""+e.key):t.toString(36)}function Lo(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ji:case Jm:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+pa(a,0):n,Pd(i)?(r="",e!=null&&(r=e.replace(Nd,"$&/")+"/"),Lo(i,t,r,"",function(d){return d})):i!=null&&(cc(i)&&(i=c0(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Nd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",Pd(e))for(var c=0;c<e.length;c++){o=e[c];var l=n+pa(o,c);a+=Lo(o,t,r,l,i)}else if(l=l0(e),typeof l=="function")for(e=l.call(e),c=0;!(o=e.next()).done;)o=o.value,l=n+pa(o,c++),a+=Lo(o,t,r,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function mo(e,t,r){if(e==null)return e;var n=[],i=0;return Lo(e,n,"","",function(o){return t.call(r,o,i++)}),n}function u0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},zo={transition:null},f0={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:zo,ReactCurrentOwner:lc};function Wf(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:mo,forEach:function(e,t,r){mo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return mo(e,function(){t++}),t},toArray:function(e){return mo(e,function(t){return t})||[]},only:function(e){if(!cc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Gn;Y.Fragment=Zm;Y.Profiler=t0;Y.PureComponent=sc;Y.StrictMode=e0;Y.Suspense=o0;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f0;Y.act=Wf;Y.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Lf({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=lc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)Ff.call(t,l)&&!Uf.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];n.children=c}return{$$typeof:Ji,type:e.type,key:i,ref:o,props:n,_owner:a}};Y.createContext=function(e){return e={$$typeof:n0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:r0,_context:e},e.Consumer=e};Y.createElement=Bf;Y.createFactory=function(e){var t=Bf.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:i0,render:e}};Y.isValidElement=cc;Y.lazy=function(e){return{$$typeof:a0,_payload:{_status:-1,_result:e},_init:u0}};Y.memo=function(e,t){return{$$typeof:s0,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=zo.transition;zo.transition={};try{e()}finally{zo.transition=t}};Y.unstable_act=Wf;Y.useCallback=function(e,t){return We.current.useCallback(e,t)};Y.useContext=function(e){return We.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return We.current.useDeferredValue(e)};Y.useEffect=function(e,t){return We.current.useEffect(e,t)};Y.useId=function(){return We.current.useId()};Y.useImperativeHandle=function(e,t,r){return We.current.useImperativeHandle(e,t,r)};Y.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return We.current.useMemo(e,t)};Y.useReducer=function(e,t,r){return We.current.useReducer(e,t,r)};Y.useRef=function(e){return We.current.useRef(e)};Y.useState=function(e){return We.current.useState(e)};Y.useSyncExternalStore=function(e,t,r){return We.current.useSyncExternalStore(e,t,r)};Y.useTransition=function(){return We.current.useTransition()};Y.version="18.3.1";Of.exports=Y;var m=Of.exports;const U=qm(m);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0=m,p0=Symbol.for("react.element"),g0=Symbol.for("react.fragment"),m0=Object.prototype.hasOwnProperty,v0=h0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y0={key:!0,ref:!0,__self:!0,__source:!0};function $f(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)m0.call(t,n)&&!y0.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:p0,type:e,key:o,ref:a,props:i,_owner:v0.current}}Ls.Fragment=g0;Ls.jsx=$f;Ls.jsxs=$f;Af.exports=Ls;var s=Af.exports,Hf={exports:{}},it={},Vf={exports:{}},Yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,L){var z=N.length;N.push(L);e:for(;0<z;){var Q=z-1>>>1,ee=N[Q];if(0<i(ee,L))N[Q]=L,N[z]=ee,z=Q;else break e}}function r(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var L=N[0],z=N.pop();if(z!==L){N[0]=z;e:for(var Q=0,ee=N.length,qe=ee>>>1;Q<qe;){var _e=2*(Q+1)-1,He=N[_e],Ve=_e+1,we=N[Ve];if(0>i(He,z))Ve<ee&&0>i(we,He)?(N[Q]=we,N[Ve]=z,Q=Ve):(N[Q]=He,N[_e]=z,Q=_e);else if(Ve<ee&&0>i(we,z))N[Q]=we,N[Ve]=z,Q=Ve;else break e}}return L}function i(N,L){var z=N.sortIndex-L.sortIndex;return z!==0?z:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var l=[],d=[],u=1,f=null,h=3,x=!1,p=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var L=r(d);L!==null;){if(L.callback===null)n(d);else if(L.startTime<=N)n(d),L.sortIndex=L.expirationTime,t(l,L);else break;L=r(d)}}function k(N){if(w=!1,y(N),!p)if(r(l)!==null)p=!0,de(C);else{var L=r(d);L!==null&&me(k,L.startTime-N)}}function C(N,L){p=!1,w&&(w=!1,v(I),I=-1),x=!0;var z=h;try{for(y(L),f=r(l);f!==null&&(!(f.expirationTime>L)||N&&!W());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,h=f.priorityLevel;var ee=Q(f.expirationTime<=L);L=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===r(l)&&n(l),y(L)}else n(l);f=r(l)}if(f!==null)var qe=!0;else{var _e=r(d);_e!==null&&me(k,_e.startTime-L),qe=!1}return qe}finally{f=null,h=z,x=!1}}var E=!1,_=null,I=-1,D=5,R=-1;function W(){return!(e.unstable_now()-R<D)}function B(){if(_!==null){var N=e.unstable_now();R=N;var L=!0;try{L=_(!0,N)}finally{L?M():(E=!1,_=null)}}else E=!1}var M;if(typeof g=="function")M=function(){g(B)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ie=H.port2;H.port1.onmessage=B,M=function(){ie.postMessage(null)}}else M=function(){S(B,0)};function de(N){_=N,E||(E=!0,M())}function me(N,L){I=S(function(){N(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){p||x||(p=!0,de(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var z=h;h=L;try{return N()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=h;h=N;try{return L()}finally{h=z}},e.unstable_scheduleCallback=function(N,L,z){var Q=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Q+z:Q):z=Q,N){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=z+ee,N={id:u++,callback:L,priorityLevel:N,startTime:z,expirationTime:ee,sortIndex:-1},z>Q?(N.sortIndex=z,t(d,N),r(l)===null&&N===r(d)&&(w?(v(I),I=-1):w=!0,me(k,z-Q))):(N.sortIndex=ee,t(l,N),p||x||(p=!0,de(C))),N},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(N){var L=h;return function(){var z=h;h=L;try{return N.apply(this,arguments)}finally{h=z}}}})(Yf);Vf.exports=Yf;var x0=Vf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=m,nt=x0;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gf=new Set,Ni={};function rn(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(Ni[e]=t,e=0;e<t.length;e++)Gf.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nl=Object.prototype.hasOwnProperty,b0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ad={},Od={};function k0(e){return nl.call(Od,e)?!0:nl.call(Ad,e)?!1:b0.test(e)?Od[e]=!0:(Ad[e]=!0,!1)}function S0(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function C0(e,t,r,n){if(t===null||typeof t>"u"||S0(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var dc=/[\-:]([a-z])/g;function uc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dc,uc);Ne[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dc,uc);Ne[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dc,uc);Ne[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function fc(e,t,r,n){var i=Ne.hasOwnProperty(t)?Ne[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(C0(t,r,i,n)&&(r=null),n||i===null?k0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var rr=w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),hn=Symbol.for("react.portal"),pn=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),il=Symbol.for("react.profiler"),Kf=Symbol.for("react.provider"),Qf=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),sl=Symbol.for("react.suspense_list"),gc=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),Xf=Symbol.for("react.offscreen"),Dd=Symbol.iterator;function oi(e){return e===null||typeof e!="object"?null:(e=Dd&&e[Dd]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,ga;function mi(e){if(ga===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ga=t&&t[1]||""}return`
`+ga+e}var ma=!1;function va(e,t){if(!e||ma)return"";ma=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,c=o.length-1;1<=a&&0<=c&&i[a]!==o[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==o[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==o[c]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=c);break}}}finally{ma=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?mi(e):""}function _0(e){switch(e.tag){case 5:return mi(e.type);case 16:return mi("Lazy");case 13:return mi("Suspense");case 19:return mi("SuspenseList");case 0:case 2:case 15:return e=va(e.type,!1),e;case 11:return e=va(e.type.render,!1),e;case 1:return e=va(e.type,!0),e;default:return""}}function al(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pn:return"Fragment";case hn:return"Portal";case il:return"Profiler";case hc:return"StrictMode";case ol:return"Suspense";case sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qf:return(e.displayName||"Context")+".Consumer";case Kf:return(e._context.displayName||"Context")+".Provider";case pc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gc:return t=e.displayName||null,t!==null?t:al(e.type)||"Memo";case sr:t=e._payload,e=e._init;try{return al(e(t))}catch{}}return null}function E0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return al(t);case 8:return t===hc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Er(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function j0(e){var t=qf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yo(e){e._valueTracker||(e._valueTracker=j0(e))}function Jf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=qf(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ll(e,t){var r=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ld(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Er(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zf(e,t){t=t.checked,t!=null&&fc(e,"checked",t,!1)}function cl(e,t){Zf(e,t);var r=Er(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dl(e,t.type,r):t.hasOwnProperty("defaultValue")&&dl(e,t.type,Er(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zd(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function dl(e,t,r){(t!=="number"||rs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var vi=Array.isArray;function jn(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Er(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Md(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(j(92));if(vi(r)){if(1<r.length)throw Error(j(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Er(r)}}function eh(e,t){var r=Er(t.value),n=Er(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Fd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function th(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?th(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xo,rh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ai(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I0=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(e){I0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wi[t]=wi[e]})});function nh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||wi.hasOwnProperty(e)&&wi[e]?(""+t).trim():t+"px"}function ih(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=nh(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var T0=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hl(e,t){if(t){if(T0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,In=null,Tn=null;function Ud(e){if(e=to(e)){if(typeof ml!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Bs(t),ml(e.stateNode,e.type,t))}}function oh(e){In?Tn?Tn.push(e):Tn=[e]:In=e}function sh(){if(In){var e=In,t=Tn;if(Tn=In=null,Ud(e),t)for(e=0;e<t.length;e++)Ud(t[e])}}function ah(e,t){return e(t)}function lh(){}var ya=!1;function ch(e,t,r){if(ya)return e(t,r);ya=!0;try{return ah(e,t,r)}finally{ya=!1,(In!==null||Tn!==null)&&(lh(),sh())}}function Oi(e,t){var r=e.stateNode;if(r===null)return null;var n=Bs(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(j(231,t,typeof r));return r}var vl=!1;if(Qt)try{var si={};Object.defineProperty(si,"passive",{get:function(){vl=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{vl=!1}function R0(e,t,r,n,i,o,a,c,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(u){this.onError(u)}}var bi=!1,ns=null,is=!1,yl=null,P0={onError:function(e){bi=!0,ns=e}};function N0(e,t,r,n,i,o,a,c,l){bi=!1,ns=null,R0.apply(P0,arguments)}function A0(e,t,r,n,i,o,a,c,l){if(N0.apply(this,arguments),bi){if(bi){var d=ns;bi=!1,ns=null}else throw Error(j(198));is||(is=!0,yl=d)}}function nn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function dh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bd(e){if(nn(e)!==e)throw Error(j(188))}function O0(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Bd(i),e;if(o===n)return Bd(i),t;o=o.sibling}throw Error(j(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,c=i.child;c;){if(c===r){a=!0,r=i,n=o;break}if(c===n){a=!0,n=i,r=o;break}c=c.sibling}if(!a){for(c=o.child;c;){if(c===r){a=!0,r=o,n=i;break}if(c===n){a=!0,n=o,r=i;break}c=c.sibling}if(!a)throw Error(j(189))}}if(r.alternate!==n)throw Error(j(190))}if(r.tag!==3)throw Error(j(188));return r.stateNode.current===r?e:t}function uh(e){return e=O0(e),e!==null?fh(e):null}function fh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fh(e);if(t!==null)return t;e=e.sibling}return null}var hh=nt.unstable_scheduleCallback,Wd=nt.unstable_cancelCallback,D0=nt.unstable_shouldYield,L0=nt.unstable_requestPaint,be=nt.unstable_now,z0=nt.unstable_getCurrentPriorityLevel,vc=nt.unstable_ImmediatePriority,ph=nt.unstable_UserBlockingPriority,os=nt.unstable_NormalPriority,M0=nt.unstable_LowPriority,gh=nt.unstable_IdlePriority,zs=null,At=null;function F0(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(zs,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:W0,U0=Math.log,B0=Math.LN2;function W0(e){return e>>>=0,e===0?32:31-(U0(e)/B0|0)|0}var wo=64,bo=4194304;function yi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ss(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var c=a&~i;c!==0?n=yi(c):(o&=a,o!==0&&(n=yi(o)))}else a=r&~i,a!==0?n=yi(a):o!==0&&(n=yi(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-St(t),i=1<<r,n|=e[r],t&=~i;return n}function $0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H0(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-St(o),c=1<<a,l=i[a];l===-1?(!(c&r)||c&n)&&(i[a]=$0(c,t)):l<=t&&(e.expiredLanes|=c),o&=~c}}function xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mh(){var e=wo;return wo<<=1,!(wo&4194240)&&(wo=64),e}function xa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Zi(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=r}function V0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-St(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function yc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-St(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ne=0;function vh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yh,xc,xh,wh,bh,wl=!1,ko=[],mr=null,vr=null,yr=null,Di=new Map,Li=new Map,cr=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $d(e,t){switch(e){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(t.pointerId)}}function ai(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=to(t),t!==null&&xc(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function G0(e,t,r,n,i){switch(t){case"focusin":return mr=ai(mr,e,t,r,n,i),!0;case"dragenter":return vr=ai(vr,e,t,r,n,i),!0;case"mouseover":return yr=ai(yr,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Di.set(o,ai(Di.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Li.set(o,ai(Li.get(o)||null,e,t,r,n,i)),!0}return!1}function kh(e){var t=Wr(e.target);if(t!==null){var r=nn(t);if(r!==null){if(t=r.tag,t===13){if(t=dh(r),t!==null){e.blockedOn=t,bh(e.priority,function(){xh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);gl=n,r.target.dispatchEvent(n),gl=null}else return t=to(r),t!==null&&xc(t),e.blockedOn=r,!1;t.shift()}return!0}function Hd(e,t,r){Mo(e)&&r.delete(t)}function K0(){wl=!1,mr!==null&&Mo(mr)&&(mr=null),vr!==null&&Mo(vr)&&(vr=null),yr!==null&&Mo(yr)&&(yr=null),Di.forEach(Hd),Li.forEach(Hd)}function li(e,t){e.blockedOn===t&&(e.blockedOn=null,wl||(wl=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,K0)))}function zi(e){function t(i){return li(i,e)}if(0<ko.length){li(ko[0],e);for(var r=1;r<ko.length;r++){var n=ko[r];n.blockedOn===e&&(n.blockedOn=null)}}for(mr!==null&&li(mr,e),vr!==null&&li(vr,e),yr!==null&&li(yr,e),Di.forEach(t),Li.forEach(t),r=0;r<cr.length;r++)n=cr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<cr.length&&(r=cr[0],r.blockedOn===null);)kh(r),r.blockedOn===null&&cr.shift()}var Rn=rr.ReactCurrentBatchConfig,as=!0;function Q0(e,t,r,n){var i=ne,o=Rn.transition;Rn.transition=null;try{ne=1,wc(e,t,r,n)}finally{ne=i,Rn.transition=o}}function X0(e,t,r,n){var i=ne,o=Rn.transition;Rn.transition=null;try{ne=4,wc(e,t,r,n)}finally{ne=i,Rn.transition=o}}function wc(e,t,r,n){if(as){var i=bl(e,t,r,n);if(i===null)Ta(e,t,n,ls,r),$d(e,n);else if(G0(i,e,t,r,n))n.stopPropagation();else if($d(e,n),t&4&&-1<Y0.indexOf(e)){for(;i!==null;){var o=to(i);if(o!==null&&yh(o),o=bl(e,t,r,n),o===null&&Ta(e,t,n,ls,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Ta(e,t,n,null,r)}}var ls=null;function bl(e,t,r,n){if(ls=null,e=mc(n),e=Wr(e),e!==null)if(t=nn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=dh(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ls=e,null}function Sh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z0()){case vc:return 1;case ph:return 4;case os:case M0:return 16;case gh:return 536870912;default:return 16}default:return 16}}var hr=null,bc=null,Fo=null;function Ch(){if(Fo)return Fo;var e,t=bc,r=t.length,n,i="value"in hr?hr.value:hr.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return Fo=i.slice(e,1<n?1-n:void 0)}function Uo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function So(){return!0}function Vd(){return!1}function ot(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?So:Vd,this.isPropagationStopped=Vd,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=ot(Kn),eo=ge({},Kn,{view:0,detail:0}),q0=ot(eo),wa,ba,ci,Ms=ge({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(wa=e.screenX-ci.screenX,ba=e.screenY-ci.screenY):ba=wa=0,ci=e),wa)},movementY:function(e){return"movementY"in e?e.movementY:ba}}),Yd=ot(Ms),J0=ge({},Ms,{dataTransfer:0}),Z0=ot(J0),ev=ge({},eo,{relatedTarget:0}),ka=ot(ev),tv=ge({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),rv=ot(tv),nv=ge({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iv=ot(nv),ov=ge({},Kn,{data:0}),Gd=ot(ov),sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lv[e])?!!t[e]:!1}function Sc(){return cv}var dv=ge({},eo,{key:function(e){if(e.key){var t=sv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?av[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(e){return e.type==="keypress"?Uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uv=ot(dv),fv=ge({},Ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=ot(fv),hv=ge({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),pv=ot(hv),gv=ge({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),mv=ot(gv),vv=ge({},Ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yv=ot(vv),xv=[9,13,27,32],Cc=Qt&&"CompositionEvent"in window,ki=null;Qt&&"documentMode"in document&&(ki=document.documentMode);var wv=Qt&&"TextEvent"in window&&!ki,_h=Qt&&(!Cc||ki&&8<ki&&11>=ki),Qd=" ",Xd=!1;function Eh(e,t){switch(e){case"keyup":return xv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function bv(e,t){switch(e){case"compositionend":return jh(t);case"keypress":return t.which!==32?null:(Xd=!0,Qd);case"textInput":return e=t.data,e===Qd&&Xd?null:e;default:return null}}function kv(e,t){if(gn)return e==="compositionend"||!Cc&&Eh(e,t)?(e=Ch(),Fo=bc=hr=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _h&&t.locale!=="ko"?null:t.data;default:return null}}var Sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sv[e.type]:t==="textarea"}function Ih(e,t,r,n){oh(n),t=cs(t,"onChange"),0<t.length&&(r=new kc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Si=null,Mi=null;function Cv(e){Fh(e,0)}function Fs(e){var t=yn(e);if(Jf(t))return e}function _v(e,t){if(e==="change")return t}var Th=!1;if(Qt){var Sa;if(Qt){var Ca="oninput"in document;if(!Ca){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),Ca=typeof Jd.oninput=="function"}Sa=Ca}else Sa=!1;Th=Sa&&(!document.documentMode||9<document.documentMode)}function Zd(){Si&&(Si.detachEvent("onpropertychange",Rh),Mi=Si=null)}function Rh(e){if(e.propertyName==="value"&&Fs(Mi)){var t=[];Ih(t,Mi,e,mc(e)),ch(Cv,t)}}function Ev(e,t,r){e==="focusin"?(Zd(),Si=t,Mi=r,Si.attachEvent("onpropertychange",Rh)):e==="focusout"&&Zd()}function jv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fs(Mi)}function Iv(e,t){if(e==="click")return Fs(t)}function Tv(e,t){if(e==="input"||e==="change")return Fs(t)}function Rv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Rv;function Fi(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!nl.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tu(e,t){var r=eu(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=eu(r)}}function Ph(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ph(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nh(){for(var e=window,t=rs();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=rs(e.document)}return t}function _c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pv(e){var t=Nh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ph(r.ownerDocument.documentElement,r)){if(n!==null&&_c(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=tu(r,o);var a=tu(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nv=Qt&&"documentMode"in document&&11>=document.documentMode,mn=null,kl=null,Ci=null,Sl=!1;function ru(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Sl||mn==null||mn!==rs(n)||(n=mn,"selectionStart"in n&&_c(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ci&&Fi(Ci,n)||(Ci=n,n=cs(kl,"onSelect"),0<n.length&&(t=new kc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=mn)))}function Co(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var vn={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},_a={},Ah={};Qt&&(Ah=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function Us(e){if(_a[e])return _a[e];if(!vn[e])return e;var t=vn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ah)return _a[e]=t[r];return e}var Oh=Us("animationend"),Dh=Us("animationiteration"),Lh=Us("animationstart"),zh=Us("transitionend"),Mh=new Map,nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(e,t){Mh.set(e,t),rn(t,[e])}for(var Ea=0;Ea<nu.length;Ea++){var ja=nu[Ea],Av=ja.toLowerCase(),Ov=ja[0].toUpperCase()+ja.slice(1);Ir(Av,"on"+Ov)}Ir(Oh,"onAnimationEnd");Ir(Dh,"onAnimationIteration");Ir(Lh,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(zh,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dv=new Set("cancel close invalid load scroll toggle".split(" ").concat(xi));function iu(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,A0(n,t,void 0,e),e.currentTarget=null}function Fh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var c=n[a],l=c.instance,d=c.currentTarget;if(c=c.listener,l!==o&&i.isPropagationStopped())break e;iu(i,c,d),o=l}else for(a=0;a<n.length;a++){if(c=n[a],l=c.instance,d=c.currentTarget,c=c.listener,l!==o&&i.isPropagationStopped())break e;iu(i,c,d),o=l}}}if(is)throw e=yl,is=!1,yl=null,e}function le(e,t){var r=t[Il];r===void 0&&(r=t[Il]=new Set);var n=e+"__bubble";r.has(n)||(Uh(t,e,2,!1),r.add(n))}function Ia(e,t,r){var n=0;t&&(n|=4),Uh(r,e,n,t)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Ui(e){if(!e[_o]){e[_o]=!0,Gf.forEach(function(r){r!=="selectionchange"&&(Dv.has(r)||Ia(r,!1,e),Ia(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_o]||(t[_o]=!0,Ia("selectionchange",!1,t))}}function Uh(e,t,r,n){switch(Sh(t)){case 1:var i=Q0;break;case 4:i=X0;break;default:i=wc}r=i.bind(null,t,r,e),i=void 0,!vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ta(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var c=n.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;c!==null;){if(a=Wr(c),a===null)return;if(l=a.tag,l===5||l===6){n=o=a;continue e}c=c.parentNode}}n=n.return}ch(function(){var d=o,u=mc(r),f=[];e:{var h=Mh.get(e);if(h!==void 0){var x=kc,p=e;switch(e){case"keypress":if(Uo(r)===0)break e;case"keydown":case"keyup":x=uv;break;case"focusin":p="focus",x=ka;break;case"focusout":p="blur",x=ka;break;case"beforeblur":case"afterblur":x=ka;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=pv;break;case Oh:case Dh:case Lh:x=rv;break;case zh:x=mv;break;case"scroll":x=q0;break;case"wheel":x=yv;break;case"copy":case"cut":case"paste":x=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Kd}var w=(t&4)!==0,S=!w&&e==="scroll",v=w?h!==null?h+"Capture":null:h;w=[];for(var g=d,y;g!==null;){y=g;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,v!==null&&(k=Oi(g,v),k!=null&&w.push(Bi(g,k,y)))),S)break;g=g.return}0<w.length&&(h=new x(h,p,null,r,u),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&r!==gl&&(p=r.relatedTarget||r.fromElement)&&(Wr(p)||p[Xt]))break e;if((x||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,x?(p=r.relatedTarget||r.toElement,x=d,p=p?Wr(p):null,p!==null&&(S=nn(p),p!==S||p.tag!==5&&p.tag!==6)&&(p=null)):(x=null,p=d),x!==p)){if(w=Yd,k="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=Kd,k="onPointerLeave",v="onPointerEnter",g="pointer"),S=x==null?h:yn(x),y=p==null?h:yn(p),h=new w(k,g+"leave",x,r,u),h.target=S,h.relatedTarget=y,k=null,Wr(u)===d&&(w=new w(v,g+"enter",p,r,u),w.target=y,w.relatedTarget=S,k=w),S=k,x&&p)t:{for(w=x,v=p,g=0,y=w;y;y=cn(y))g++;for(y=0,k=v;k;k=cn(k))y++;for(;0<g-y;)w=cn(w),g--;for(;0<y-g;)v=cn(v),y--;for(;g--;){if(w===v||v!==null&&w===v.alternate)break t;w=cn(w),v=cn(v)}w=null}else w=null;x!==null&&ou(f,h,x,w,!1),p!==null&&S!==null&&ou(f,S,p,w,!0)}}e:{if(h=d?yn(d):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var C=_v;else if(qd(h))if(Th)C=Tv;else{C=jv;var E=Ev}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Iv);if(C&&(C=C(e,d))){Ih(f,C,r,u);break e}E&&E(e,h,d),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&dl(h,"number",h.value)}switch(E=d?yn(d):window,e){case"focusin":(qd(E)||E.contentEditable==="true")&&(mn=E,kl=d,Ci=null);break;case"focusout":Ci=kl=mn=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,ru(f,r,u);break;case"selectionchange":if(Nv)break;case"keydown":case"keyup":ru(f,r,u)}var _;if(Cc)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else gn?Eh(e,r)&&(I="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(I="onCompositionStart");I&&(_h&&r.locale!=="ko"&&(gn||I!=="onCompositionStart"?I==="onCompositionEnd"&&gn&&(_=Ch()):(hr=u,bc="value"in hr?hr.value:hr.textContent,gn=!0)),E=cs(d,I),0<E.length&&(I=new Gd(I,e,null,r,u),f.push({event:I,listeners:E}),_?I.data=_:(_=jh(r),_!==null&&(I.data=_)))),(_=wv?bv(e,r):kv(e,r))&&(d=cs(d,"onBeforeInput"),0<d.length&&(u=new Gd("onBeforeInput","beforeinput",null,r,u),f.push({event:u,listeners:d}),u.data=_))}Fh(f,t)})}function Bi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function cs(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Oi(e,r),o!=null&&n.unshift(Bi(e,o,i)),o=Oi(e,t),o!=null&&n.push(Bi(e,o,i))),e=e.return}return n}function cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ou(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var c=r,l=c.alternate,d=c.stateNode;if(l!==null&&l===n)break;c.tag===5&&d!==null&&(c=d,i?(l=Oi(r,o),l!=null&&a.unshift(Bi(r,l,c))):i||(l=Oi(r,o),l!=null&&a.push(Bi(r,l,c)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var Lv=/\r\n?/g,zv=/\u0000|\uFFFD/g;function su(e){return(typeof e=="string"?e:""+e).replace(Lv,`
`).replace(zv,"")}function Eo(e,t,r){if(t=su(t),su(e)!==t&&r)throw Error(j(425))}function ds(){}var Cl=null,_l=null;function El(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,Mv=typeof clearTimeout=="function"?clearTimeout:void 0,au=typeof Promise=="function"?Promise:void 0,Fv=typeof queueMicrotask=="function"?queueMicrotask:typeof au<"u"?function(e){return au.resolve(null).then(e).catch(Uv)}:jl;function Uv(e){setTimeout(function(){throw e})}function Ra(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),zi(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);zi(t)}function xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Qn,Wi="__reactProps$"+Qn,Xt="__reactContainer$"+Qn,Il="__reactEvents$"+Qn,Bv="__reactListeners$"+Qn,Wv="__reactHandles$"+Qn;function Wr(e){var t=e[Pt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Xt]||r[Pt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=lu(e);e!==null;){if(r=e[Pt])return r;e=lu(e)}return t}e=r,r=e.parentNode}return null}function to(e){return e=e[Pt]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Bs(e){return e[Wi]||null}var Tl=[],xn=-1;function Tr(e){return{current:e}}function ce(e){0>xn||(e.current=Tl[xn],Tl[xn]=null,xn--)}function se(e,t){xn++,Tl[xn]=e.current,e.current=t}var jr={},ze=Tr(jr),Ke=Tr(!1),Xr=jr;function Mn(e,t){var r=e.type.contextTypes;if(!r)return jr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(e){return e=e.childContextTypes,e!=null}function us(){ce(Ke),ce(ze)}function cu(e,t,r){if(ze.current!==jr)throw Error(j(168));se(ze,t),se(Ke,r)}function Bh(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(j(108,E0(e)||"Unknown",i));return ge({},r,n)}function fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jr,Xr=ze.current,se(ze,e),se(Ke,Ke.current),!0}function du(e,t,r){var n=e.stateNode;if(!n)throw Error(j(169));r?(e=Bh(e,t,Xr),n.__reactInternalMemoizedMergedChildContext=e,ce(Ke),ce(ze),se(ze,e)):ce(Ke),se(Ke,r)}var Ut=null,Ws=!1,Pa=!1;function Wh(e){Ut===null?Ut=[e]:Ut.push(e)}function $v(e){Ws=!0,Wh(e)}function Rr(){if(!Pa&&Ut!==null){Pa=!0;var e=0,t=ne;try{var r=Ut;for(ne=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ut=null,Ws=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),hh(vc,Rr),i}finally{ne=t,Pa=!1}}return null}var wn=[],bn=0,hs=null,ps=0,ct=[],dt=0,qr=null,Ht=1,Vt="";function Fr(e,t){wn[bn++]=ps,wn[bn++]=hs,hs=e,ps=t}function $h(e,t,r){ct[dt++]=Ht,ct[dt++]=Vt,ct[dt++]=qr,qr=e;var n=Ht;e=Vt;var i=32-St(n)-1;n&=~(1<<i),r+=1;var o=32-St(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,Ht=1<<32-St(t)+i|r<<i|n,Vt=o+e}else Ht=1<<o|r<<i|n,Vt=e}function Ec(e){e.return!==null&&(Fr(e,1),$h(e,1,0))}function jc(e){for(;e===hs;)hs=wn[--bn],wn[bn]=null,ps=wn[--bn],wn[bn]=null;for(;e===qr;)qr=ct[--dt],ct[dt]=null,Vt=ct[--dt],ct[dt]=null,Ht=ct[--dt],ct[dt]=null}var rt=null,tt=null,ue=!1,bt=null;function Hh(e,t){var r=ut(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function uu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,tt=xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=qr!==null?{id:Ht,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ut(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,rt=e,tt=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pl(e){if(ue){var t=tt;if(t){var r=t;if(!uu(e,t)){if(Rl(e))throw Error(j(418));t=xr(r.nextSibling);var n=rt;t&&uu(e,t)?Hh(n,r):(e.flags=e.flags&-4097|2,ue=!1,rt=e)}}else{if(Rl(e))throw Error(j(418));e.flags=e.flags&-4097|2,ue=!1,rt=e}}}function fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function jo(e){if(e!==rt)return!1;if(!ue)return fu(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!El(e.type,e.memoizedProps)),t&&(t=tt)){if(Rl(e))throw Vh(),Error(j(418));for(;t;)Hh(e,t),t=xr(t.nextSibling)}if(fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){tt=xr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=rt?xr(e.stateNode.nextSibling):null;return!0}function Vh(){for(var e=tt;e;)e=xr(e.nextSibling)}function Fn(){tt=rt=null,ue=!1}function Ic(e){bt===null?bt=[e]:bt.push(e)}var Hv=rr.ReactCurrentBatchConfig;function di(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(j(309));var n=r.stateNode}if(!n)throw Error(j(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var c=i.refs;a===null?delete c[o]:c[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!r._owner)throw Error(j(290,e))}return e}function Io(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hu(e){var t=e._init;return t(e._payload)}function Yh(e){function t(v,g){if(e){var y=v.deletions;y===null?(v.deletions=[g],v.flags|=16):y.push(g)}}function r(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function n(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=Sr(v,g),v.index=0,v.sibling=null,v}function o(v,g,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<g?(v.flags|=2,g):y):(v.flags|=2,g)):(v.flags|=1048576,g)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function c(v,g,y,k){return g===null||g.tag!==6?(g=Ma(y,v.mode,k),g.return=v,g):(g=i(g,y),g.return=v,g)}function l(v,g,y,k){var C=y.type;return C===pn?u(v,g,y.props.children,k,y.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===sr&&hu(C)===g.type)?(k=i(g,y.props),k.ref=di(v,g,y),k.return=v,k):(k=Go(y.type,y.key,y.props,null,v.mode,k),k.ref=di(v,g,y),k.return=v,k)}function d(v,g,y,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Fa(y,v.mode,k),g.return=v,g):(g=i(g,y.children||[]),g.return=v,g)}function u(v,g,y,k,C){return g===null||g.tag!==7?(g=Gr(y,v.mode,k,C),g.return=v,g):(g=i(g,y),g.return=v,g)}function f(v,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ma(""+g,v.mode,y),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vo:return y=Go(g.type,g.key,g.props,null,v.mode,y),y.ref=di(v,null,g),y.return=v,y;case hn:return g=Fa(g,v.mode,y),g.return=v,g;case sr:var k=g._init;return f(v,k(g._payload),y)}if(vi(g)||oi(g))return g=Gr(g,v.mode,y,null),g.return=v,g;Io(v,g)}return null}function h(v,g,y,k){var C=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:c(v,g,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vo:return y.key===C?l(v,g,y,k):null;case hn:return y.key===C?d(v,g,y,k):null;case sr:return C=y._init,h(v,g,C(y._payload),k)}if(vi(y)||oi(y))return C!==null?null:u(v,g,y,k,null);Io(v,y)}return null}function x(v,g,y,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return v=v.get(y)||null,c(g,v,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case vo:return v=v.get(k.key===null?y:k.key)||null,l(g,v,k,C);case hn:return v=v.get(k.key===null?y:k.key)||null,d(g,v,k,C);case sr:var E=k._init;return x(v,g,y,E(k._payload),C)}if(vi(k)||oi(k))return v=v.get(y)||null,u(g,v,k,C,null);Io(g,k)}return null}function p(v,g,y,k){for(var C=null,E=null,_=g,I=g=0,D=null;_!==null&&I<y.length;I++){_.index>I?(D=_,_=null):D=_.sibling;var R=h(v,_,y[I],k);if(R===null){_===null&&(_=D);break}e&&_&&R.alternate===null&&t(v,_),g=o(R,g,I),E===null?C=R:E.sibling=R,E=R,_=D}if(I===y.length)return r(v,_),ue&&Fr(v,I),C;if(_===null){for(;I<y.length;I++)_=f(v,y[I],k),_!==null&&(g=o(_,g,I),E===null?C=_:E.sibling=_,E=_);return ue&&Fr(v,I),C}for(_=n(v,_);I<y.length;I++)D=x(_,v,I,y[I],k),D!==null&&(e&&D.alternate!==null&&_.delete(D.key===null?I:D.key),g=o(D,g,I),E===null?C=D:E.sibling=D,E=D);return e&&_.forEach(function(W){return t(v,W)}),ue&&Fr(v,I),C}function w(v,g,y,k){var C=oi(y);if(typeof C!="function")throw Error(j(150));if(y=C.call(y),y==null)throw Error(j(151));for(var E=C=null,_=g,I=g=0,D=null,R=y.next();_!==null&&!R.done;I++,R=y.next()){_.index>I?(D=_,_=null):D=_.sibling;var W=h(v,_,R.value,k);if(W===null){_===null&&(_=D);break}e&&_&&W.alternate===null&&t(v,_),g=o(W,g,I),E===null?C=W:E.sibling=W,E=W,_=D}if(R.done)return r(v,_),ue&&Fr(v,I),C;if(_===null){for(;!R.done;I++,R=y.next())R=f(v,R.value,k),R!==null&&(g=o(R,g,I),E===null?C=R:E.sibling=R,E=R);return ue&&Fr(v,I),C}for(_=n(v,_);!R.done;I++,R=y.next())R=x(_,v,I,R.value,k),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?I:R.key),g=o(R,g,I),E===null?C=R:E.sibling=R,E=R);return e&&_.forEach(function(B){return t(v,B)}),ue&&Fr(v,I),C}function S(v,g,y,k){if(typeof y=="object"&&y!==null&&y.type===pn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case vo:e:{for(var C=y.key,E=g;E!==null;){if(E.key===C){if(C=y.type,C===pn){if(E.tag===7){r(v,E.sibling),g=i(E,y.props.children),g.return=v,v=g;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===sr&&hu(C)===E.type){r(v,E.sibling),g=i(E,y.props),g.ref=di(v,E,y),g.return=v,v=g;break e}r(v,E);break}else t(v,E);E=E.sibling}y.type===pn?(g=Gr(y.props.children,v.mode,k,y.key),g.return=v,v=g):(k=Go(y.type,y.key,y.props,null,v.mode,k),k.ref=di(v,g,y),k.return=v,v=k)}return a(v);case hn:e:{for(E=y.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){r(v,g.sibling),g=i(g,y.children||[]),g.return=v,v=g;break e}else{r(v,g);break}else t(v,g);g=g.sibling}g=Fa(y,v.mode,k),g.return=v,v=g}return a(v);case sr:return E=y._init,S(v,g,E(y._payload),k)}if(vi(y))return p(v,g,y,k);if(oi(y))return w(v,g,y,k);Io(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(r(v,g.sibling),g=i(g,y),g.return=v,v=g):(r(v,g),g=Ma(y,v.mode,k),g.return=v,v=g),a(v)):r(v,g)}return S}var Un=Yh(!0),Gh=Yh(!1),gs=Tr(null),ms=null,kn=null,Tc=null;function Rc(){Tc=kn=ms=null}function Pc(e){var t=gs.current;ce(gs),e._currentValue=t}function Nl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Pn(e,t){ms=e,Tc=kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(Tc!==e)if(e={context:e,memoizedValue:t,next:null},kn===null){if(ms===null)throw Error(j(308));kn=e,ms.dependencies={lanes:0,firstContext:e}}else kn=kn.next=e;return t}var $r=null;function Nc(e){$r===null?$r=[e]:$r.push(e)}function Kh(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Nc(t)):(r.next=i.next,i.next=r),t.interleaved=r,qt(e,n)}function qt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ar=!1;function Ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,X&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,qt(e,r)}return i=n.interleaved,i===null?(t.next=t,Nc(n)):(t.next=i.next,i.next=t),n.interleaved=t,qt(e,r)}function Bo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,yc(e,r)}}function pu(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function vs(e,t,r,n){var i=e.updateQueue;ar=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var l=c,d=l.next;l.next=null,a===null?o=d:a.next=d,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==a&&(c===null?u.firstBaseUpdate=d:c.next=d,u.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,u=d=l=null,c=o;do{var h=c.lane,x=c.eventTime;if((n&h)===h){u!==null&&(u=u.next={eventTime:x,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var p=e,w=c;switch(h=t,x=r,w.tag){case 1:if(p=w.payload,typeof p=="function"){f=p.call(x,f,h);break e}f=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=w.payload,h=typeof p=="function"?p.call(x,f,h):p,h==null)break e;f=ge({},f,h);break e;case 2:ar=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[c]:h.push(c))}else x={eventTime:x,lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(d=u=x,l=f):u=u.next=x,a|=h;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;h=c,c=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Zr|=a,e.lanes=a,e.memoizedState=f}}function gu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(j(191,i));i.call(n)}}}var ro={},Ot=Tr(ro),$i=Tr(ro),Hi=Tr(ro);function Hr(e){if(e===ro)throw Error(j(174));return e}function Oc(e,t){switch(se(Hi,t),se($i,e),se(Ot,ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fl(t,e)}ce(Ot),se(Ot,t)}function Bn(){ce(Ot),ce($i),ce(Hi)}function Xh(e){Hr(Hi.current);var t=Hr(Ot.current),r=fl(t,e.type);t!==r&&(se($i,e),se(Ot,r))}function Dc(e){$i.current===e&&(ce(Ot),ce($i))}var he=Tr(0);function ys(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Na=[];function Lc(){for(var e=0;e<Na.length;e++)Na[e]._workInProgressVersionPrimary=null;Na.length=0}var Wo=rr.ReactCurrentDispatcher,Aa=rr.ReactCurrentBatchConfig,Jr=0,pe=null,Se=null,je=null,xs=!1,_i=!1,Vi=0,Vv=0;function Oe(){throw Error(j(321))}function zc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Et(e[r],t[r]))return!1;return!0}function Mc(e,t,r,n,i,o){if(Jr=o,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wo.current=e===null||e.memoizedState===null?Qv:Xv,e=r(n,i),_i){o=0;do{if(_i=!1,Vi=0,25<=o)throw Error(j(301));o+=1,je=Se=null,t.updateQueue=null,Wo.current=qv,e=r(n,i)}while(_i)}if(Wo.current=ws,t=Se!==null&&Se.next!==null,Jr=0,je=Se=pe=null,xs=!1,t)throw Error(j(300));return e}function Fc(){var e=Vi!==0;return Vi=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?pe.memoizedState=je=e:je=je.next=e,je}function pt(){if(Se===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=je===null?pe.memoizedState:je.next;if(t!==null)je=t,Se=e;else{if(e===null)throw Error(j(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},je===null?pe.memoizedState=je=e:je=je.next=e}return je}function Yi(e,t){return typeof t=="function"?t(e):t}function Oa(e){var t=pt(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var n=Se,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var c=a=null,l=null,d=o;do{var u=d.lane;if((Jr&u)===u)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(c=l=f,a=n):l=l.next=f,pe.lanes|=u,Zr|=u}d=d.next}while(d!==null&&d!==o);l===null?a=n:l.next=c,Et(n,t.memoizedState)||(Ge=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,pe.lanes|=o,Zr|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Da(e){var t=pt(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Et(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function qh(){}function Jh(e,t){var r=pe,n=pt(),i=t(),o=!Et(n.memoizedState,i);if(o&&(n.memoizedState=i,Ge=!0),n=n.queue,Uc(tp.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(r.flags|=2048,Gi(9,ep.bind(null,r,n,i,t),void 0,null),Te===null)throw Error(j(349));Jr&30||Zh(r,t,i)}return i}function Zh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ep(e,t,r,n){t.value=r,t.getSnapshot=n,rp(t)&&np(e)}function tp(e,t,r){return r(function(){rp(t)&&np(e)})}function rp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Et(e,r)}catch{return!0}}function np(e){var t=qt(e,1);t!==null&&Ct(t,e,1,-1)}function mu(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},t.queue=e,e=e.dispatch=Kv.bind(null,pe,e),[t.memoizedState,e]}function Gi(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function ip(){return pt().memoizedState}function $o(e,t,r,n){var i=Tt();pe.flags|=e,i.memoizedState=Gi(1|t,r,void 0,n===void 0?null:n)}function $s(e,t,r,n){var i=pt();n=n===void 0?null:n;var o=void 0;if(Se!==null){var a=Se.memoizedState;if(o=a.destroy,n!==null&&zc(n,a.deps)){i.memoizedState=Gi(t,r,o,n);return}}pe.flags|=e,i.memoizedState=Gi(1|t,r,o,n)}function vu(e,t){return $o(8390656,8,e,t)}function Uc(e,t){return $s(2048,8,e,t)}function op(e,t){return $s(4,2,e,t)}function sp(e,t){return $s(4,4,e,t)}function ap(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lp(e,t,r){return r=r!=null?r.concat([e]):null,$s(4,4,ap.bind(null,t,e),r)}function Bc(){}function cp(e,t){var r=pt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&zc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function dp(e,t){var r=pt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&zc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function up(e,t,r){return Jr&21?(Et(r,t)||(r=mh(),pe.lanes|=r,Zr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=r)}function Yv(e,t){var r=ne;ne=r!==0&&4>r?r:4,e(!0);var n=Aa.transition;Aa.transition={};try{e(!1),t()}finally{ne=r,Aa.transition=n}}function fp(){return pt().memoizedState}function Gv(e,t,r){var n=kr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},hp(e))pp(t,r);else if(r=Kh(e,t,r,n),r!==null){var i=Ue();Ct(r,e,n,i),gp(r,t,n)}}function Kv(e,t,r){var n=kr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(hp(e))pp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,c=o(a,r);if(i.hasEagerState=!0,i.eagerState=c,Et(c,a)){var l=t.interleaved;l===null?(i.next=i,Nc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=Kh(e,t,i,n),r!==null&&(i=Ue(),Ct(r,e,n,i),gp(r,t,n))}}function hp(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function pp(e,t){_i=xs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function gp(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,yc(e,r)}}var ws={readContext:ht,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Qv={readContext:ht,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:vu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,$o(4194308,4,ap.bind(null,t,e),r)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var r=Tt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Tt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Gv.bind(null,pe,e),[n.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:mu,useDebugValue:Bc,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=mu(!1),t=e[0];return e=Yv.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=pe,i=Tt();if(ue){if(r===void 0)throw Error(j(407));r=r()}else{if(r=t(),Te===null)throw Error(j(349));Jr&30||Zh(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,vu(tp.bind(null,n,o,e),[e]),n.flags|=2048,Gi(9,ep.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=Tt(),t=Te.identifierPrefix;if(ue){var r=Vt,n=Ht;r=(n&~(1<<32-St(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Vi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Vv++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xv={readContext:ht,useCallback:cp,useContext:ht,useEffect:Uc,useImperativeHandle:lp,useInsertionEffect:op,useLayoutEffect:sp,useMemo:dp,useReducer:Oa,useRef:ip,useState:function(){return Oa(Yi)},useDebugValue:Bc,useDeferredValue:function(e){var t=pt();return up(t,Se.memoizedState,e)},useTransition:function(){var e=Oa(Yi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:qh,useSyncExternalStore:Jh,useId:fp,unstable_isNewReconciler:!1},qv={readContext:ht,useCallback:cp,useContext:ht,useEffect:Uc,useImperativeHandle:lp,useInsertionEffect:op,useLayoutEffect:sp,useMemo:dp,useReducer:Da,useRef:ip,useState:function(){return Da(Yi)},useDebugValue:Bc,useDeferredValue:function(e){var t=pt();return Se===null?t.memoizedState=e:up(t,Se.memoizedState,e)},useTransition:function(){var e=Da(Yi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:qh,useSyncExternalStore:Jh,useId:fp,unstable_isNewReconciler:!1};function xt(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Al(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ge({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Hs={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ue(),i=kr(e),o=Kt(n,i);o.payload=t,r!=null&&(o.callback=r),t=wr(e,o,i),t!==null&&(Ct(t,e,i,n),Bo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ue(),i=kr(e),o=Kt(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=wr(e,o,i),t!==null&&(Ct(t,e,i,n),Bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ue(),n=kr(e),i=Kt(r,n);i.tag=2,t!=null&&(i.callback=t),t=wr(e,i,n),t!==null&&(Ct(t,e,n,r),Bo(t,e,n))}};function yu(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!Fi(r,n)||!Fi(i,o):!0}function mp(e,t,r){var n=!1,i=jr,o=t.contextType;return typeof o=="object"&&o!==null?o=ht(o):(i=Qe(t)?Xr:ze.current,n=t.contextTypes,o=(n=n!=null)?Mn(e,i):jr),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hs,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function xu(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Ol(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Ac(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ht(o):(o=Qe(t)?Xr:ze.current,i.context=Mn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Al(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Hs.enqueueReplaceState(i,i.state,null),vs(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var r="",n=t;do r+=_0(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function La(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Dl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Jv=typeof WeakMap=="function"?WeakMap:Map;function vp(e,t,r){r=Kt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ks||(ks=!0,Vl=n),Dl(e,t)},r}function yp(e,t,r){r=Kt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Dl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Dl(e,t),typeof n!="function"&&(br===null?br=new Set([this]):br.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function wu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Jv;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=fy.bind(null,e,t,r),t.then(e,e))}function bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ku(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Kt(-1,1),t.tag=2,wr(r,t,1))),r.lanes|=1),e)}var Zv=rr.ReactCurrentOwner,Ge=!1;function Me(e,t,r,n){t.child=e===null?Gh(t,null,r,n):Un(t,e.child,r,n)}function Su(e,t,r,n,i){r=r.render;var o=t.ref;return Pn(t,i),n=Mc(e,t,r,n,o,i),r=Fc(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(ue&&r&&Ec(t),t.flags|=1,Me(e,t,n,i),t.child)}function Cu(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Qc(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,xp(e,t,o,n,i)):(e=Go(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:Fi,r(a,n)&&e.ref===t.ref)return Jt(e,t,i)}return t.flags|=1,e=Sr(o,n),e.ref=t.ref,e.return=t,t.child=e}function xp(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(Fi(o,n)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Jt(e,t,i)}return Ll(e,t,r,n,i)}function wp(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Cn,et),et|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Cn,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,se(Cn,et),et|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,se(Cn,et),et|=n;return Me(e,t,i,r),t.child}function bp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ll(e,t,r,n,i){var o=Qe(r)?Xr:ze.current;return o=Mn(t,o),Pn(t,i),r=Mc(e,t,r,n,o,i),n=Fc(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(ue&&n&&Ec(t),t.flags|=1,Me(e,t,r,i),t.child)}function _u(e,t,r,n,i){if(Qe(r)){var o=!0;fs(t)}else o=!1;if(Pn(t,i),t.stateNode===null)Ho(e,t),mp(t,r,n),Ol(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var l=a.context,d=r.contextType;typeof d=="object"&&d!==null?d=ht(d):(d=Qe(r)?Xr:ze.current,d=Mn(t,d));var u=r.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==n||l!==d)&&xu(t,a,n,d),ar=!1;var h=t.memoizedState;a.state=h,vs(t,n,a,i),l=t.memoizedState,c!==n||h!==l||Ke.current||ar?(typeof u=="function"&&(Al(t,r,u,n),l=t.memoizedState),(c=ar||yu(t,r,c,n,h,l,d))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=d,n=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Qh(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:xt(t.type,c),a.props=d,f=t.pendingProps,h=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=ht(l):(l=Qe(r)?Xr:ze.current,l=Mn(t,l));var x=r.getDerivedStateFromProps;(u=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==f||h!==l)&&xu(t,a,n,l),ar=!1,h=t.memoizedState,a.state=h,vs(t,n,a,i);var p=t.memoizedState;c!==f||h!==p||Ke.current||ar?(typeof x=="function"&&(Al(t,r,x,n),p=t.memoizedState),(d=ar||yu(t,r,d,n,h,p,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=p),a.props=n,a.state=p,a.context=l,n=d):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return zl(e,t,r,n,o,i)}function zl(e,t,r,n,i,o){bp(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&du(t,r,!1),Jt(e,t,o);n=t.stateNode,Zv.current=t;var c=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Un(t,e.child,null,o),t.child=Un(t,null,c,o)):Me(e,t,c,o),t.memoizedState=n.state,i&&du(t,r,!0),t.child}function kp(e){var t=e.stateNode;t.pendingContext?cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cu(e,t.context,!1),Oc(e,t.containerInfo)}function Eu(e,t,r,n,i){return Fn(),Ic(i),t.flags|=256,Me(e,t,r,n),t.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sp(e,t,r){var n=t.pendingProps,i=he.current,o=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),se(he,i&1),e===null)return Pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Gs(a,n,0,null),e=Gr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fl(r),t.memoizedState=Ml,e):Wc(t,a));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return ey(e,t,a,n,c,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,c=i.sibling;var l={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Sr(i,l),n.subtreeFlags=i.subtreeFlags&14680064),c!==null?o=Sr(c,o):(o=Gr(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?Fl(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=Ml,n}return o=e.child,e=o.sibling,n=Sr(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Wc(e,t){return t=Gs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function To(e,t,r,n){return n!==null&&Ic(n),Un(t,e.child,null,r),e=Wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ey(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=La(Error(j(422))),To(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Gs({mode:"visible",children:n.children},i,0,null),o=Gr(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Un(t,e.child,null,a),t.child.memoizedState=Fl(a),t.memoizedState=Ml,o);if(!(t.mode&1))return To(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var c=n.dgst;return n=c,o=Error(j(419)),n=La(o,n,void 0),To(e,t,a,n)}if(c=(a&e.childLanes)!==0,Ge||c){if(n=Te,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,qt(e,i),Ct(n,e,i,-1))}return Kc(),n=La(Error(j(421))),To(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,tt=xr(i.nextSibling),rt=t,ue=!0,bt=null,e!==null&&(ct[dt++]=Ht,ct[dt++]=Vt,ct[dt++]=qr,Ht=e.id,Vt=e.overflow,qr=t),t=Wc(t,n.children),t.flags|=4096,t)}function ju(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Nl(e.return,t,r)}function za(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Cp(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(Me(e,t,n.children,r),n=he.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ju(e,r,t);else if(e.tag===19)ju(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(se(he,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&ys(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),za(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ys(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}za(t,!0,r,null,o);break;case"together":za(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Zr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,r=Sr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Sr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function ty(e,t,r){switch(t.tag){case 3:kp(t),Fn();break;case 5:Xh(t);break;case 1:Qe(t.type)&&fs(t);break;case 4:Oc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;se(gs,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(se(he,he.current&1),t.flags|=128,null):r&t.child.childLanes?Sp(e,t,r):(se(he,he.current&1),e=Jt(e,t,r),e!==null?e.sibling:null);se(he,he.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Cp(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(he,he.current),n)break;return null;case 22:case 23:return t.lanes=0,wp(e,t,r)}return Jt(e,t,r)}var _p,Ul,Ep,jp;_p=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ul=function(){};Ep=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Hr(Ot.current);var o=null;switch(r){case"input":i=ll(e,i),n=ll(e,n),o=[];break;case"select":i=ge({},i,{value:void 0}),n=ge({},n,{value:void 0}),o=[];break;case"textarea":i=ul(e,i),n=ul(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ds)}hl(r,n);var a;r=null;for(d in i)if(!n.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(a in c)c.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ni.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in n){var l=n[d];if(c=i!=null?i[d]:void 0,n.hasOwnProperty(d)&&l!==c&&(l!=null||c!=null))if(d==="style")if(c){for(a in c)!c.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&c[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(o||(o=[]),o.push(d,r)),r=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ni.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&le("scroll",e),o||c===l||(o=[])):(o=o||[]).push(d,l))}r&&(o=o||[]).push("style",r);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};jp=function(e,t,r,n){r!==n&&(t.flags|=4)};function ui(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function ry(e,t,r){var n=t.pendingProps;switch(jc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return Qe(t.type)&&us(),De(t),null;case 3:return n=t.stateNode,Bn(),ce(Ke),ce(ze),Lc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(Kl(bt),bt=null))),Ul(e,t),De(t),null;case 5:Dc(t);var i=Hr(Hi.current);if(r=t.type,e!==null&&t.stateNode!=null)Ep(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(j(166));return De(t),null}if(e=Hr(Ot.current),jo(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Pt]=t,n[Wi]=o,e=(t.mode&1)!==0,r){case"dialog":le("cancel",n),le("close",n);break;case"iframe":case"object":case"embed":le("load",n);break;case"video":case"audio":for(i=0;i<xi.length;i++)le(xi[i],n);break;case"source":le("error",n);break;case"img":case"image":case"link":le("error",n),le("load",n);break;case"details":le("toggle",n);break;case"input":Ld(n,o),le("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},le("invalid",n);break;case"textarea":Md(n,o),le("invalid",n)}hl(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="children"?typeof c=="string"?n.textContent!==c&&(o.suppressHydrationWarning!==!0&&Eo(n.textContent,c,e),i=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&Eo(n.textContent,c,e),i=["children",""+c]):Ni.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&le("scroll",n)}switch(r){case"input":yo(n),zd(n,o,!0);break;case"textarea":yo(n),Fd(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=ds)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=th(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Pt]=t,e[Wi]=n,_p(e,t,!1,!1),t.stateNode=e;e:{switch(a=pl(r,n),r){case"dialog":le("cancel",e),le("close",e),i=n;break;case"iframe":case"object":case"embed":le("load",e),i=n;break;case"video":case"audio":for(i=0;i<xi.length;i++)le(xi[i],e);i=n;break;case"source":le("error",e),i=n;break;case"img":case"image":case"link":le("error",e),le("load",e),i=n;break;case"details":le("toggle",e),i=n;break;case"input":Ld(e,n),i=ll(e,n),le("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=ge({},n,{value:void 0}),le("invalid",e);break;case"textarea":Md(e,n),i=ul(e,n),le("invalid",e);break;default:i=n}hl(r,i),c=i;for(o in c)if(c.hasOwnProperty(o)){var l=c[o];o==="style"?ih(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rh(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ai(e,l):typeof l=="number"&&Ai(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ni.hasOwnProperty(o)?l!=null&&o==="onScroll"&&le("scroll",e):l!=null&&fc(e,o,l,a))}switch(r){case"input":yo(e),zd(e,n,!1);break;case"textarea":yo(e),Fd(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Er(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?jn(e,!!n.multiple,o,!1):n.defaultValue!=null&&jn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ds)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return De(t),null;case 6:if(e&&t.stateNode!=null)jp(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(j(166));if(r=Hr(Hi.current),Hr(Ot.current),jo(t)){if(n=t.stateNode,r=t.memoizedProps,n[Pt]=t,(o=n.nodeValue!==r)&&(e=rt,e!==null))switch(e.tag){case 3:Eo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Eo(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Pt]=t,t.stateNode=n}return De(t),null;case 13:if(ce(he),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&tt!==null&&t.mode&1&&!(t.flags&128))Vh(),Fn(),t.flags|=98560,o=!1;else if(o=jo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Pt]=t}else Fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),o=!1}else bt!==null&&(Kl(bt),bt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?Ce===0&&(Ce=3):Kc())),t.updateQueue!==null&&(t.flags|=4),De(t),null);case 4:return Bn(),Ul(e,t),e===null&&Ui(t.stateNode.containerInfo),De(t),null;case 10:return Pc(t.type._context),De(t),null;case 17:return Qe(t.type)&&us(),De(t),null;case 19:if(ce(he),o=t.memoizedState,o===null)return De(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)ui(o,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ys(e),a!==null){for(t.flags|=128,ui(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return se(he,he.current&1|2),t.child}e=e.sibling}o.tail!==null&&be()>$n&&(t.flags|=128,n=!0,ui(o,!1),t.lanes=4194304)}else{if(!n)if(e=ys(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ui(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ue)return De(t),null}else 2*be()-o.renderingStartTime>$n&&r!==1073741824&&(t.flags|=128,n=!0,ui(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=be(),t.sibling=null,r=he.current,se(he,n?r&1|2:r&1),t):(De(t),null);case 22:case 23:return Gc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?et&1073741824&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function ny(e,t){switch(jc(t),t.tag){case 1:return Qe(t.type)&&us(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),ce(Ke),ce(ze),Lc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Dc(t),null;case 13:if(ce(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(he),null;case 4:return Bn(),null;case 10:return Pc(t.type._context),null;case 22:case 23:return Gc(),null;case 24:return null;default:return null}}var Ro=!1,Le=!1,iy=typeof WeakSet=="function"?WeakSet:Set,A=null;function Sn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){xe(e,t,n)}else r.current=null}function Bl(e,t,r){try{r()}catch(n){xe(e,t,n)}}var Iu=!1;function oy(e,t){if(Cl=as,e=Nh(),_c(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,c=-1,l=-1,d=0,u=0,f=e,h=null;t:for(;;){for(var x;f!==r||i!==0&&f.nodeType!==3||(c=a+i),f!==o||n!==0&&f.nodeType!==3||(l=a+n),f.nodeType===3&&(a+=f.nodeValue.length),(x=f.firstChild)!==null;)h=f,f=x;for(;;){if(f===e)break t;if(h===r&&++d===i&&(c=a),h===o&&++u===n&&(l=a),(x=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=x}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(_l={focusedElem:e,selectionRange:r},as=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var w=p.memoizedProps,S=p.memoizedState,v=t.stateNode,g=v.getSnapshotBeforeUpdate(t.elementType===t.type?w:xt(t.type,w),S);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(k){xe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return p=Iu,Iu=!1,p}function Ei(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Bl(t,r,o)}i=i.next}while(i!==n)}}function Vs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Wl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ip(e){var t=e.alternate;t!==null&&(e.alternate=null,Ip(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[Wi],delete t[Il],delete t[Bv],delete t[Wv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tp(e){return e.tag===5||e.tag===3||e.tag===4}function Tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $l(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ds));else if(n!==4&&(e=e.child,e!==null))for($l(e,t,r),e=e.sibling;e!==null;)$l(e,t,r),e=e.sibling}function Hl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Hl(e,t,r),e=e.sibling;e!==null;)Hl(e,t,r),e=e.sibling}var Re=null,wt=!1;function ir(e,t,r){for(r=r.child;r!==null;)Rp(e,t,r),r=r.sibling}function Rp(e,t,r){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(zs,r)}catch{}switch(r.tag){case 5:Le||Sn(r,t);case 6:var n=Re,i=wt;Re=null,ir(e,t,r),Re=n,wt=i,Re!==null&&(wt?(e=Re,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Re.removeChild(r.stateNode));break;case 18:Re!==null&&(wt?(e=Re,r=r.stateNode,e.nodeType===8?Ra(e.parentNode,r):e.nodeType===1&&Ra(e,r),zi(e)):Ra(Re,r.stateNode));break;case 4:n=Re,i=wt,Re=r.stateNode.containerInfo,wt=!0,ir(e,t,r),Re=n,wt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Bl(r,t,a),i=i.next}while(i!==n)}ir(e,t,r);break;case 1:if(!Le&&(Sn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(c){xe(r,t,c)}ir(e,t,r);break;case 21:ir(e,t,r);break;case 22:r.mode&1?(Le=(n=Le)||r.memoizedState!==null,ir(e,t,r),Le=n):ir(e,t,r);break;default:ir(e,t,r)}}function Ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new iy),t.forEach(function(n){var i=py.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function yt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:Re=c.stateNode,wt=!1;break e;case 3:Re=c.stateNode.containerInfo,wt=!0;break e;case 4:Re=c.stateNode.containerInfo,wt=!0;break e}c=c.return}if(Re===null)throw Error(j(160));Rp(o,a,i),Re=null,wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){xe(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pp(t,e),t=t.sibling}function Pp(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),It(e),n&4){try{Ei(3,e,e.return),Vs(3,e)}catch(w){xe(e,e.return,w)}try{Ei(5,e,e.return)}catch(w){xe(e,e.return,w)}}break;case 1:yt(t,e),It(e),n&512&&r!==null&&Sn(r,r.return);break;case 5:if(yt(t,e),It(e),n&512&&r!==null&&Sn(r,r.return),e.flags&32){var i=e.stateNode;try{Ai(i,"")}catch(w){xe(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&Zf(i,o),pl(c,a);var d=pl(c,o);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?ih(i,f):u==="dangerouslySetInnerHTML"?rh(i,f):u==="children"?Ai(i,f):fc(i,u,f,d)}switch(c){case"input":cl(i,o);break;case"textarea":eh(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?jn(i,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?jn(i,!!o.multiple,o.defaultValue,!0):jn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Wi]=o}catch(w){xe(e,e.return,w)}}break;case 6:if(yt(t,e),It(e),n&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){xe(e,e.return,w)}}break;case 3:if(yt(t,e),It(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(w){xe(e,e.return,w)}break;case 4:yt(t,e),It(e);break;case 13:yt(t,e),It(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Vc=be())),n&4&&Ru(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(Le=(d=Le)||u,yt(t,e),Le=d):yt(t,e),It(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(A=e,u=e.child;u!==null;){for(f=A=u;A!==null;){switch(h=A,x=h.child,h.tag){case 0:case 11:case 14:case 15:Ei(4,h,h.return);break;case 1:Sn(h,h.return);var p=h.stateNode;if(typeof p.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(w){xe(n,r,w)}}break;case 5:Sn(h,h.return);break;case 22:if(h.memoizedState!==null){Nu(f);continue}}x!==null?(x.return=h,A=x):Nu(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=nh("display",a))}catch(w){xe(e,e.return,w)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(w){xe(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:yt(t,e),It(e),n&4&&Ru(e);break;case 21:break;default:yt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Tp(r)){var n=r;break e}r=r.return}throw Error(j(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Ai(i,""),n.flags&=-33);var o=Tu(e);Hl(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,c=Tu(e);$l(e,c,a);break;default:throw Error(j(161))}}catch(l){xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sy(e,t,r){A=e,Np(e)}function Np(e,t,r){for(var n=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||Ro;if(!a){var c=i.alternate,l=c!==null&&c.memoizedState!==null||Le;c=Ro;var d=Le;if(Ro=a,(Le=l)&&!d)for(A=i;A!==null;)a=A,l=a.child,a.tag===22&&a.memoizedState!==null?Au(i):l!==null?(l.return=a,A=l):Au(i);for(;o!==null;)A=o,Np(o),o=o.sibling;A=i,Ro=c,Le=d}Pu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):Pu(e)}}function Pu(e){for(;A!==null;){var t=A;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||Vs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Le)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:xt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gu(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}gu(t,a,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&zi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Le||t.flags&512&&Wl(t)}catch(h){xe(t,t.return,h)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function Nu(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function Au(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Vs(4,t)}catch(l){xe(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){xe(t,i,l)}}var o=t.return;try{Wl(t)}catch(l){xe(t,o,l)}break;case 5:var a=t.return;try{Wl(t)}catch(l){xe(t,a,l)}}}catch(l){xe(t,t.return,l)}if(t===e){A=null;break}var c=t.sibling;if(c!==null){c.return=t.return,A=c;break}A=t.return}}var ay=Math.ceil,bs=rr.ReactCurrentDispatcher,$c=rr.ReactCurrentOwner,ft=rr.ReactCurrentBatchConfig,X=0,Te=null,ke=null,Pe=0,et=0,Cn=Tr(0),Ce=0,Ki=null,Zr=0,Ys=0,Hc=0,ji=null,Ye=null,Vc=0,$n=1/0,Ft=null,ks=!1,Vl=null,br=null,Po=!1,pr=null,Ss=0,Ii=0,Yl=null,Vo=-1,Yo=0;function Ue(){return X&6?be():Vo!==-1?Vo:Vo=be()}function kr(e){return e.mode&1?X&2&&Pe!==0?Pe&-Pe:Hv.transition!==null?(Yo===0&&(Yo=mh()),Yo):(e=ne,e!==0||(e=window.event,e=e===void 0?16:Sh(e.type)),e):1}function Ct(e,t,r,n){if(50<Ii)throw Ii=0,Yl=null,Error(j(185));Zi(e,r,n),(!(X&2)||e!==Te)&&(e===Te&&(!(X&2)&&(Ys|=r),Ce===4&&dr(e,Pe)),Xe(e,n),r===1&&X===0&&!(t.mode&1)&&($n=be()+500,Ws&&Rr()))}function Xe(e,t){var r=e.callbackNode;H0(e,t);var n=ss(e,e===Te?Pe:0);if(n===0)r!==null&&Wd(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Wd(r),t===1)e.tag===0?$v(Ou.bind(null,e)):Wh(Ou.bind(null,e)),Fv(function(){!(X&6)&&Rr()}),r=null;else{switch(vh(n)){case 1:r=vc;break;case 4:r=ph;break;case 16:r=os;break;case 536870912:r=gh;break;default:r=os}r=Up(r,Ap.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Ap(e,t){if(Vo=-1,Yo=0,X&6)throw Error(j(327));var r=e.callbackNode;if(Nn()&&e.callbackNode!==r)return null;var n=ss(e,e===Te?Pe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Cs(e,n);else{t=n;var i=X;X|=2;var o=Dp();(Te!==e||Pe!==t)&&(Ft=null,$n=be()+500,Yr(e,t));do try{dy();break}catch(c){Op(e,c)}while(!0);Rc(),bs.current=o,X=i,ke!==null?t=0:(Te=null,Pe=0,t=Ce)}if(t!==0){if(t===2&&(i=xl(e),i!==0&&(n=i,t=Gl(e,i))),t===1)throw r=Ki,Yr(e,0),dr(e,n),Xe(e,be()),r;if(t===6)dr(e,n);else{if(i=e.current.alternate,!(n&30)&&!ly(i)&&(t=Cs(e,n),t===2&&(o=xl(e),o!==0&&(n=o,t=Gl(e,o))),t===1))throw r=Ki,Yr(e,0),dr(e,n),Xe(e,be()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(j(345));case 2:Ur(e,Ye,Ft);break;case 3:if(dr(e,n),(n&130023424)===n&&(t=Vc+500-be(),10<t)){if(ss(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jl(Ur.bind(null,e,Ye,Ft),t);break}Ur(e,Ye,Ft);break;case 4:if(dr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-St(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=be()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ay(n/1960))-n,10<n){e.timeoutHandle=jl(Ur.bind(null,e,Ye,Ft),n);break}Ur(e,Ye,Ft);break;case 5:Ur(e,Ye,Ft);break;default:throw Error(j(329))}}}return Xe(e,be()),e.callbackNode===r?Ap.bind(null,e):null}function Gl(e,t){var r=ji;return e.current.memoizedState.isDehydrated&&(Yr(e,t).flags|=256),e=Cs(e,t),e!==2&&(t=Ye,Ye=r,t!==null&&Kl(t)),e}function Kl(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function ly(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Et(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~Hc,t&=~Ys,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-St(t),n=1<<r;e[r]=-1,t&=~n}}function Ou(e){if(X&6)throw Error(j(327));Nn();var t=ss(e,0);if(!(t&1))return Xe(e,be()),null;var r=Cs(e,t);if(e.tag!==0&&r===2){var n=xl(e);n!==0&&(t=n,r=Gl(e,n))}if(r===1)throw r=Ki,Yr(e,0),dr(e,t),Xe(e,be()),r;if(r===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ur(e,Ye,Ft),Xe(e,be()),null}function Yc(e,t){var r=X;X|=1;try{return e(t)}finally{X=r,X===0&&($n=be()+500,Ws&&Rr())}}function en(e){pr!==null&&pr.tag===0&&!(X&6)&&Nn();var t=X;X|=1;var r=ft.transition,n=ne;try{if(ft.transition=null,ne=1,e)return e()}finally{ne=n,ft.transition=r,X=t,!(X&6)&&Rr()}}function Gc(){et=Cn.current,ce(Cn)}function Yr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Mv(r)),ke!==null)for(r=ke.return;r!==null;){var n=r;switch(jc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&us();break;case 3:Bn(),ce(Ke),ce(ze),Lc();break;case 5:Dc(n);break;case 4:Bn();break;case 13:ce(he);break;case 19:ce(he);break;case 10:Pc(n.type._context);break;case 22:case 23:Gc()}r=r.return}if(Te=e,ke=e=Sr(e.current,null),Pe=et=t,Ce=0,Ki=null,Hc=Ys=Zr=0,Ye=ji=null,$r!==null){for(t=0;t<$r.length;t++)if(r=$r[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}$r=null}return e}function Op(e,t){do{var r=ke;try{if(Rc(),Wo.current=ws,xs){for(var n=pe.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}xs=!1}if(Jr=0,je=Se=pe=null,_i=!1,Vi=0,$c.current=null,r===null||r.return===null){Ce=1,Ki=t,ke=null;break}e:{var o=e,a=r.return,c=r,l=t;if(t=Pe,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,u=c,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var x=bu(a);if(x!==null){x.flags&=-257,ku(x,a,c,o,t),x.mode&1&&wu(o,d,t),t=x,l=d;var p=t.updateQueue;if(p===null){var w=new Set;w.add(l),t.updateQueue=w}else p.add(l);break e}else{if(!(t&1)){wu(o,d,t),Kc();break e}l=Error(j(426))}}else if(ue&&c.mode&1){var S=bu(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ku(S,a,c,o,t),Ic(Wn(l,c));break e}}o=l=Wn(l,c),Ce!==4&&(Ce=2),ji===null?ji=[o]:ji.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=vp(o,l,t);pu(o,v);break e;case 1:c=l;var g=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(br===null||!br.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=yp(o,c,t);pu(o,k);break e}}o=o.return}while(o!==null)}zp(r)}catch(C){t=C,ke===r&&r!==null&&(ke=r=r.return);continue}break}while(!0)}function Dp(){var e=bs.current;return bs.current=ws,e===null?ws:e}function Kc(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Te===null||!(Zr&268435455)&&!(Ys&268435455)||dr(Te,Pe)}function Cs(e,t){var r=X;X|=2;var n=Dp();(Te!==e||Pe!==t)&&(Ft=null,Yr(e,t));do try{cy();break}catch(i){Op(e,i)}while(!0);if(Rc(),X=r,bs.current=n,ke!==null)throw Error(j(261));return Te=null,Pe=0,Ce}function cy(){for(;ke!==null;)Lp(ke)}function dy(){for(;ke!==null&&!D0();)Lp(ke)}function Lp(e){var t=Fp(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?zp(e):ke=t,$c.current=null}function zp(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=ny(r,t),r!==null){r.flags&=32767,ke=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,ke=null;return}}else if(r=ry(r,t,et),r!==null){ke=r;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ce===0&&(Ce=5)}function Ur(e,t,r){var n=ne,i=ft.transition;try{ft.transition=null,ne=1,uy(e,t,r,n)}finally{ft.transition=i,ne=n}return null}function uy(e,t,r,n){do Nn();while(pr!==null);if(X&6)throw Error(j(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(V0(e,o),e===Te&&(ke=Te=null,Pe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Po||(Po=!0,Up(os,function(){return Nn(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=ft.transition,ft.transition=null;var a=ne;ne=1;var c=X;X|=4,$c.current=null,oy(e,r),Pp(r,e),Pv(_l),as=!!Cl,_l=Cl=null,e.current=r,sy(r),L0(),X=c,ne=a,ft.transition=o}else e.current=r;if(Po&&(Po=!1,pr=e,Ss=i),o=e.pendingLanes,o===0&&(br=null),F0(r.stateNode),Xe(e,be()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(ks)throw ks=!1,e=Vl,Vl=null,e;return Ss&1&&e.tag!==0&&Nn(),o=e.pendingLanes,o&1?e===Yl?Ii++:(Ii=0,Yl=e):Ii=0,Rr(),null}function Nn(){if(pr!==null){var e=vh(Ss),t=ft.transition,r=ne;try{if(ft.transition=null,ne=16>e?16:e,pr===null)var n=!1;else{if(e=pr,pr=null,Ss=0,X&6)throw Error(j(331));var i=X;for(X|=4,A=e.current;A!==null;){var o=A,a=o.child;if(A.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var d=c[l];for(A=d;A!==null;){var u=A;switch(u.tag){case 0:case 11:case 15:Ei(8,u,o)}var f=u.child;if(f!==null)f.return=u,A=f;else for(;A!==null;){u=A;var h=u.sibling,x=u.return;if(Ip(u),u===d){A=null;break}if(h!==null){h.return=x,A=h;break}A=x}}}var p=o.alternate;if(p!==null){var w=p.child;if(w!==null){p.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}A=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,A=a;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ei(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,A=v;break e}A=o.return}}var g=e.current;for(A=g;A!==null;){a=A;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,A=y;else e:for(a=g;A!==null;){if(c=A,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Vs(9,c)}}catch(C){xe(c,c.return,C)}if(c===a){A=null;break e}var k=c.sibling;if(k!==null){k.return=c.return,A=k;break e}A=c.return}}if(X=i,Rr(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(zs,e)}catch{}n=!0}return n}finally{ne=r,ft.transition=t}}return!1}function Du(e,t,r){t=Wn(r,t),t=vp(e,t,1),e=wr(e,t,1),t=Ue(),e!==null&&(Zi(e,1,t),Xe(e,t))}function xe(e,t,r){if(e.tag===3)Du(e,e,r);else for(;t!==null;){if(t.tag===3){Du(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(br===null||!br.has(n))){e=Wn(r,e),e=yp(t,e,1),t=wr(t,e,1),e=Ue(),t!==null&&(Zi(t,1,e),Xe(t,e));break}}t=t.return}}function fy(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&r,Te===e&&(Pe&r)===r&&(Ce===4||Ce===3&&(Pe&130023424)===Pe&&500>be()-Vc?Yr(e,0):Hc|=r),Xe(e,t)}function Mp(e,t){t===0&&(e.mode&1?(t=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):t=1);var r=Ue();e=qt(e,t),e!==null&&(Zi(e,t,r),Xe(e,r))}function hy(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Mp(e,r)}function py(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(j(314))}n!==null&&n.delete(t),Mp(e,r)}var Fp;Fp=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ge=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ge=!1,ty(e,t,r);Ge=!!(e.flags&131072)}else Ge=!1,ue&&t.flags&1048576&&$h(t,ps,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ho(e,t),e=t.pendingProps;var i=Mn(t,ze.current);Pn(t,r),i=Mc(null,t,n,e,i,r);var o=Fc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(n)?(o=!0,fs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ac(t),i.updater=Hs,t.stateNode=i,i._reactInternals=t,Ol(t,n,e,r),t=zl(null,t,n,!0,o,r)):(t.tag=0,ue&&o&&Ec(t),Me(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ho(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=my(n),e=xt(n,e),i){case 0:t=Ll(null,t,n,e,r);break e;case 1:t=_u(null,t,n,e,r);break e;case 11:t=Su(null,t,n,e,r);break e;case 14:t=Cu(null,t,n,xt(n.type,e),r);break e}throw Error(j(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:xt(n,i),Ll(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:xt(n,i),_u(e,t,n,i,r);case 3:e:{if(kp(t),e===null)throw Error(j(387));n=t.pendingProps,o=t.memoizedState,i=o.element,Qh(e,t),vs(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Wn(Error(j(423)),t),t=Eu(e,t,n,r,i);break e}else if(n!==i){i=Wn(Error(j(424)),t),t=Eu(e,t,n,r,i);break e}else for(tt=xr(t.stateNode.containerInfo.firstChild),rt=t,ue=!0,bt=null,r=Gh(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Fn(),n===i){t=Jt(e,t,r);break e}Me(e,t,n,r)}t=t.child}return t;case 5:return Xh(t),e===null&&Pl(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,El(n,i)?a=null:o!==null&&El(n,o)&&(t.flags|=32),bp(e,t),Me(e,t,a,r),t.child;case 6:return e===null&&Pl(t),null;case 13:return Sp(e,t,r);case 4:return Oc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Un(t,null,n,r):Me(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:xt(n,i),Su(e,t,n,i,r);case 7:return Me(e,t,t.pendingProps,r),t.child;case 8:return Me(e,t,t.pendingProps.children,r),t.child;case 12:return Me(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,se(gs,n._currentValue),n._currentValue=a,o!==null)if(Et(o.value,a)){if(o.children===i.children&&!Ke.current){t=Jt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){a=o.child;for(var l=c.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=Kt(-1,r&-r),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?l.next=l:(l.next=u.next,u.next=l),d.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Nl(o.return,r,t),c.lanes|=r;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Nl(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Me(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Pn(t,r),i=ht(i),n=n(i),t.flags|=1,Me(e,t,n,r),t.child;case 14:return n=t.type,i=xt(n,t.pendingProps),i=xt(n.type,i),Cu(e,t,n,i,r);case 15:return xp(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:xt(n,i),Ho(e,t),t.tag=1,Qe(n)?(e=!0,fs(t)):e=!1,Pn(t,r),mp(t,n,i),Ol(t,n,i,r),zl(null,t,n,!0,e,r);case 19:return Cp(e,t,r);case 22:return wp(e,t,r)}throw Error(j(156,t.tag))};function Up(e,t){return hh(e,t)}function gy(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,r,n){return new gy(e,t,r,n)}function Qc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function my(e){if(typeof e=="function")return Qc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pc)return 11;if(e===gc)return 14}return 2}function Sr(e,t){var r=e.alternate;return r===null?(r=ut(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Go(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")Qc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case pn:return Gr(r.children,i,o,t);case hc:a=8,i|=8;break;case il:return e=ut(12,r,t,i|2),e.elementType=il,e.lanes=o,e;case ol:return e=ut(13,r,t,i),e.elementType=ol,e.lanes=o,e;case sl:return e=ut(19,r,t,i),e.elementType=sl,e.lanes=o,e;case Xf:return Gs(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kf:a=10;break e;case Qf:a=9;break e;case pc:a=11;break e;case gc:a=14;break e;case sr:a=16,n=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=ut(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Gr(e,t,r,n){return e=ut(7,e,n,t),e.lanes=r,e}function Gs(e,t,r,n){return e=ut(22,e,n,t),e.elementType=Xf,e.lanes=r,e.stateNode={isHidden:!1},e}function Ma(e,t,r){return e=ut(6,e,null,t),e.lanes=r,e}function Fa(e,t,r){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vy(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xa(0),this.expirationTimes=xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xc(e,t,r,n,i,o,a,c,l){return e=new vy(e,t,r,c,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ac(o),e}function yy(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Bp(e){if(!e)return jr;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var r=e.type;if(Qe(r))return Bh(e,r,t)}return t}function Wp(e,t,r,n,i,o,a,c,l){return e=Xc(r,n,!0,e,i,o,a,c,l),e.context=Bp(null),r=e.current,n=Ue(),i=kr(r),o=Kt(n,i),o.callback=t??null,wr(r,o,i),e.current.lanes=i,Zi(e,i,n),Xe(e,n),e}function Ks(e,t,r,n){var i=t.current,o=Ue(),a=kr(i);return r=Bp(r),t.context===null?t.context=r:t.pendingContext=r,t=Kt(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=wr(i,t,a),e!==null&&(Ct(e,i,a,o),Bo(e,i,a)),a}function _s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function qc(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}function xy(){return null}var $p=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jc(e){this._internalRoot=e}Qs.prototype.render=Jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Ks(e,t,null,null)};Qs.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;en(function(){Ks(null,e,null,null)}),t[Xt]=null}};function Qs(e){this._internalRoot=e}Qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=wh();e={blockedOn:null,target:e,priority:t};for(var r=0;r<cr.length&&t!==0&&t<cr[r].priority;r++);cr.splice(r,0,e),r===0&&kh(e)}};function Zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zu(){}function wy(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var d=_s(a);o.call(d)}}var a=Wp(t,n,e,0,null,!1,!1,"",zu);return e._reactRootContainer=a,e[Xt]=a.current,Ui(e.nodeType===8?e.parentNode:e),en(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var c=n;n=function(){var d=_s(l);c.call(d)}}var l=Xc(e,0,!1,null,null,!1,!1,"",zu);return e._reactRootContainer=l,e[Xt]=l.current,Ui(e.nodeType===8?e.parentNode:e),en(function(){Ks(t,l,r,n)}),l}function qs(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var c=i;i=function(){var l=_s(a);c.call(l)}}Ks(t,a,e,i)}else a=wy(r,t,e,i,n);return _s(a)}yh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=yi(t.pendingLanes);r!==0&&(yc(t,r|1),Xe(t,be()),!(X&6)&&($n=be()+500,Rr()))}break;case 13:en(function(){var n=qt(e,1);if(n!==null){var i=Ue();Ct(n,e,1,i)}}),qc(e,1)}};xc=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var r=Ue();Ct(t,e,134217728,r)}qc(e,134217728)}};xh=function(e){if(e.tag===13){var t=kr(e),r=qt(e,t);if(r!==null){var n=Ue();Ct(r,e,t,n)}qc(e,t)}};wh=function(){return ne};bh=function(e,t){var r=ne;try{return ne=e,t()}finally{ne=r}};ml=function(e,t,r){switch(t){case"input":if(cl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Bs(n);if(!i)throw Error(j(90));Jf(n),cl(n,i)}}}break;case"textarea":eh(e,r);break;case"select":t=r.value,t!=null&&jn(e,!!r.multiple,t,!1)}};ah=Yc;lh=en;var by={usingClientEntryPoint:!1,Events:[to,yn,Bs,oh,sh,Yc]},fi={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ky={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uh(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{zs=No.inject(ky),At=No}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=by;it.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zc(t))throw Error(j(200));return yy(e,t,null,r)};it.createRoot=function(e,t){if(!Zc(e))throw Error(j(299));var r=!1,n="",i=$p;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xc(e,1,!1,null,null,r,!1,n,i),e[Xt]=t.current,Ui(e.nodeType===8?e.parentNode:e),new Jc(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=uh(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return en(e)};it.hydrate=function(e,t,r){if(!Xs(t))throw Error(j(200));return qs(null,e,t,!0,r)};it.hydrateRoot=function(e,t,r){if(!Zc(e))throw Error(j(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=$p;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=Wp(t,null,e,1,r??null,i,!1,o,a),e[Xt]=t.current,Ui(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Qs(t)};it.render=function(e,t,r){if(!Xs(t))throw Error(j(200));return qs(null,e,t,!1,r)};it.unmountComponentAtNode=function(e){if(!Xs(e))throw Error(j(40));return e._reactRootContainer?(en(function(){qs(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};it.unstable_batchedUpdates=Yc;it.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Xs(r))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return qs(e,t,r,!1,n)};it.version="18.3.1-next-f1338f8080-20240426";function Hp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hp)}catch(e){console.error(e)}}Hp(),Hf.exports=it;var Sy=Hf.exports,Vp,Mu=Sy;Vp=Mu.createRoot,Mu.hydrateRoot;const Cy="modulepreload",_y=function(e){return"/"+e},Fu={},on=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(r.map(l=>{if(l=_y(l),l in Fu)return;Fu[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Cy,d||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((h,x)=>{f.addEventListener("load",h),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})},gt="https://cloudvault.co.in/api/v1",Ee={name:"CloudVault",logo:"CV",logoImage:"/cloudvault-logo.svg",logoVideo:"/calovaultlogo.mp4"};async function Ey(){var r;const e=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");if(!e)return null;const t=localStorage.getItem("cv_refreshToken")?localStorage:sessionStorage;try{const n=await fetch(`${gt}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:e})});if(!n.ok)return null;const i=await n.json(),o=((r=i.data)==null?void 0:r.accessToken)||i.accessToken;return o?(t.setItem("cv_token",o),window.dispatchEvent(new CustomEvent("cv-token-refreshed",{detail:{token:o}})),o):null}catch{return null}}function ed(e){return new Error(`Cannot reach the server at ${gt}${e}. Make sure the backend is running (npm start in project root).`)}const Fe=async(e,t={},r,n=!1)=>{const i={...t.headers||{}};r&&(i.Authorization=`Bearer ${r}`),t.body instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json");let o;try{o=await fetch(`${gt}${e}`,{...t,headers:i})}catch{throw ed(e)}if(o.status===401&&r&&!n){const l=await Ey();if(l)return Fe(e,t,l,!0);throw new Error("Session expired. Please log in again.")}if(!o.ok){const l=await o.json().catch(()=>({error:"Unknown error"})),d=l.message||l.error||"",u=d.toLowerCase().includes("token")?"Something went wrong. Please try again.":d||`Request failed (${o.status})`;throw new Error(u)}if(!(o.headers.get("content-type")||"").includes("application/json"))return o;const c=await o.json();return c.success?c.data:c},zr=(e,t)=>Array.isArray(e)?e:(e==null?void 0:e[t])||[];async function Js(e,t,{onProgress:r,disposition:n="download"}={}){const i=n==="preview"?`/files/${e}/preview`:`/files/${e}/download`;let o;try{o=await fetch(`${gt}${i}`,{headers:{Authorization:`Bearer ${t}`}})}catch{throw ed(i)}if(!o.ok){const c=await o.json().catch(()=>({error:"Download failed"}));throw new Error(c.error||c.message||"Download failed")}const a=Number(o.headers.get("content-length"))||0;return jy(o,a,r)}async function jy(e,t,r){if(!e.body||!t){const a=await e.blob();return r==null||r(100),a}const n=e.body.getReader(),i=[];let o=0;for(;;){const{done:a,value:c}=await n.read();if(a)break;i.push(c),o+=c.length,r&&t>0&&r(Math.min(99,Math.round(o/t*100)))}return r==null||r(100),new Blob(i,{type:e.headers.get("content-type")||"application/octet-stream"})}function Yp(e,t){const r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=t,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(r)}function Gp(e,t,r,n){return new Promise((i,o)=>{const a=new XMLHttpRequest;a.open("POST",`${gt}${e}`),a.setRequestHeader("Authorization",`Bearer ${r}`),a.upload.onprogress=c=>{c.lengthComputable&&n&&n(Math.round(c.loaded/c.total*100))},a.onload=()=>{try{const c=JSON.parse(a.responseText);a.status>=200&&a.status<300?i(c.success?c.data:c):o(new Error(c.message||c.error||"Upload failed"))}catch{a.status>=200&&a.status<300?i({}):o(new Error("Upload failed"))}},a.onerror=()=>o(ed(e)),a.send(t)})}const Ie=e=>{if(e===0)return"0 B";const t=1024,r=["B","KB","MB","GB"],n=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**n).toFixed(1)} ${r[n]}`},Xn=e=>{const t=Math.floor((Date.now()-new Date(e))/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`},no=(e="")=>e.startsWith("image/")?"🖼️":e==="application/pdf"?"📄":e.startsWith("video/")?"🎬":e.startsWith("audio/")?"🎵":e.includes("zip")||e.includes("archive")?"🗜️":e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")?"📝":"📁",Iy=["image/","video/","audio/"],Ty=new Set(["application/pdf","text/plain","text/markdown","application/json"]),td=(e="")=>{const t=(e||"").toLowerCase();return Ty.has(t)?!0:Iy.some(r=>t.startsWith(r))},Ry=(e="")=>{const t=(e||"").toLowerCase();return t.startsWith("image/")?"image":t==="application/pdf"?"pdf":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("text/")||t==="application/json"?"text":null},Uu=[{key:"all",label:"All",icon:"📋",test:()=>!0},{key:"images",label:"Images",icon:"🖼️",test:e=>e.startsWith("image/")},{key:"documents",label:"Docs",icon:"📄",test:e=>e.includes("pdf")||e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")},{key:"videos",label:"Videos",icon:"🎬",test:e=>e.startsWith("video/")},{key:"audio",label:"Audio",icon:"🎵",test:e=>e.startsWith("audio/")},{key:"archives",label:"Archives",icon:"🗜️",test:e=>e.includes("zip")||e.includes("archive")||e.includes("tar")||e.includes("rar")}],Kr=`
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

  /* Focus rings for accessibility and polish */
  input:focus-visible, textarea:focus-visible, button:focus-visible, select:focus-visible, [tabindex]:focus-visible {
    outline: 2px solid var(--accent-blue);
    outline-offset: 2px;
  }

  input:focus, textarea:focus, select:focus {
    border-color: var(--accent-blue) !important;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }

  /* Fix native select/option for dark themes */
  select option {
    background: var(--bg-card);
    color: var(--text);
  }

  .select-field option {
    background: var(--bg-card);
    color: var(--text);
    padding: 8px 12px;
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

  .search-input-animated:focus {
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2), 0 8px 24px rgba(0, 0, 0, 0.1) !important;
    transform: translateY(-1px);
    background: var(--surface-raised) !important;
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
`,Py=[{id:"free",name:"Free",price:"₹0",period:"/mo",storage:"5 GB",features:["Standard uploads","Basic sharing","Web preview"]},{id:"pro",name:"Pro",price:"₹749",period:"/mo",storage:"100 GB",features:["Faster uploads","File version history","Priority support"],highlight:!0},{id:"premium",name:"Premium",price:"₹1,599",period:"/mo",storage:"1 TB",features:["Team sharing","Advanced analytics","Custom branding"]},{id:"team",name:"Team",price:"₹3,999",period:"/mo",storage:"2 TB",features:["Shared workspaces","Admin controls","SSO ready"]}],_k=[{id:"50gb",label:"+50 GB",price:"₹399"},{id:"100gb",label:"+100 GB",price:"₹749"},{id:"500gb",label:"+500 GB",price:"₹2,499"},{id:"1tb",label:"+1 TB",price:"₹3,999"}],Ny=[{title:"Cloud storage",desc:"10 GB of free storage. Store files of any size, back up folders, sync across devices, and share with full control.",icon:"☁"},{title:"Private sharing",desc:"Share files and folders with anyone — even without an account. Set passwords, expiration dates, and permissions.",icon:"🔗"},{title:"Smart search",desc:"Find anything instantly with filters, tags, and full-text search across your entire drive.",icon:"🔍"},{title:"Enterprise security",desc:"Encrypted storage, activity logs, and role-based access. Your data stays private by default.",icon:"🛡"}],Ay=[{title:"Never run out of space",desc:"Start with 10 GB free. Upgrade anytime for more storage when you need it."},{title:"Share with anyone",desc:"Give read-only or full access. Set passwords or create expiring links."},{title:"Be in control",desc:"Your data is in your hands. Manage permissions and access at every level."},{title:"Works everywhere",desc:"Access your files through the web on desktop, tablet, and mobile."}],Oy=[{q:"Is CloudVault free to use?",a:"Yes. Every account includes 10 GB of free storage with no credit card required."},{q:"How secure are my files?",a:"Files are encrypted in transit and at rest. Share links support passwords and expiration dates."},{q:"Can I share files with people outside my team?",a:"Absolutely. Create public or protected links with view, download, or edit permissions."},{q:"Can I cancel or change my plan?",a:"Plans are flexible. Upgrade, downgrade, or cancel from billing settings anytime."}],Dy=[{label:"Products",href:"#products"},{label:"Security",href:"#security"},{label:"Pricing",href:"#pricing"},{label:"FAQ",href:"#faq"}];function Ly(){m.useEffect(()=>{const e=document.querySelectorAll(".scroll-reveal"),t=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&(n.target.classList.add("visible"),t.unobserve(n.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});return e.forEach(r=>t.observe(r)),()=>t.disconnect()},[])}function zy({onGetStarted:e,onLogin:t,onSignUp:r}){const[n,i]=m.useState({filesStored:0,activeUsers:0,storageUsed:0,storageCapacity:0xa0000000000}),o=m.useRef(null);return Ly(),m.useEffect(()=>{fetch(`${gt}/public/stats`).then(a=>a.json()).then(a=>{a.success&&a.data&&i(a.data)}).catch(()=>{})},[]),m.useEffect(()=>{const a=()=>{o.current&&(o.current.style.background=window.scrollY>40?"rgba(0,0,0,.95)":"rgba(0,0,0,.85)")};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),s.jsxs("div",{className:"marketing-shell",children:[s.jsx("style",{children:Kr}),s.jsxs("header",{className:"landing-header",ref:o,children:[s.jsxs("button",{type:"button",className:"brand-lockup",onClick:e,"aria-label":`${Ee.name} home`,children:[s.jsx("span",{className:"brand-mark",children:s.jsx("img",{src:Ee.logoImage,alt:""})}),s.jsx("span",{children:Ee.name})]}),s.jsx("nav",{className:"landing-links","aria-label":"Primary",children:Dy.map(a=>s.jsx("a",{href:a.href,children:a.label},a.href))}),s.jsxs("div",{className:"landing-nav",children:[s.jsx("button",{type:"button",className:"btn-ghost",onClick:t,children:"Log in"}),s.jsx("button",{type:"button",className:"btn-mega-red",onClick:r,children:"Sign up free"})]})]}),s.jsxs("main",{children:[s.jsxs("section",{className:"hero-section",children:[s.jsx("div",{className:"hero-glow hero-glow-green","aria-hidden":"true"}),s.jsx("div",{className:"hero-glow hero-glow-blue","aria-hidden":"true"}),s.jsxs("div",{className:"hero-copy",children:[s.jsxs("div",{className:"eyebrow",children:[s.jsx("span",{"aria-hidden":"true"})," Secure cloud storage by default"]}),s.jsxs("h1",{children:["Online privacy for everyone —",s.jsx("span",{children:"your intelligent cloud drive."})]}),s.jsxs("p",{children:["Privacy is not an option with ",Ee.name,"; it's standard. Store, organize, and securely share your files from one place — on any device."]}),s.jsxs("div",{className:"hero-actions animate-fade-up delay-1",children:[s.jsx("button",{type:"button",className:"btn-primary btn-hero-dark",onClick:e,children:"Sign up for 10 GB free"}),s.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"Log in"})]}),s.jsx("div",{className:"hero-note",children:"No credit card required · 10 GB free forever"})]}),s.jsxs("div",{className:"dashboard-preview animate-fade-up delay-2","aria-label":"CloudVault preview",children:[s.jsx("div",{className:"hero-video-orbit","aria-hidden":"true",children:s.jsx("video",{src:Ee.logoVideo,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata"})}),s.jsxs("div",{className:"preview-panel",children:[s.jsxs("div",{className:"preview-top-bar",children:[s.jsx("span",{className:"brand-mark small",children:s.jsx("img",{src:Ee.logoImage,alt:""})}),s.jsx("div",{className:"preview-search",children:"🔍 Search Cloud drive"})]}),s.jsxs("div",{className:"preview-body",children:[s.jsxs("aside",{className:"preview-sidebar",children:[s.jsxs("div",{className:"preview-logo",children:[s.jsx("span",{className:"brand-mark small",children:s.jsx("img",{src:Ee.logoImage,alt:""})}),s.jsx("strong",{children:"Drive"})]}),["Cloud drive","Recent","Starred","Shared","Trash"].map((a,c)=>s.jsx("div",{className:`preview-nav-item${c===0?" active":""}`,children:a},a)),s.jsxs("div",{className:"preview-usage",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Free"}),s.jsx("strong",{children:"4.5 GB / 10 GB"})]}),s.jsx("div",{className:"preview-bar",children:s.jsx("span",{})})]})]}),s.jsxs("section",{className:"preview-files",children:[s.jsxs("div",{className:"preview-topline",children:[s.jsx("h3",{children:"Cloud drive"}),s.jsx("button",{type:"button","aria-hidden":"true",tabIndex:-1,children:"↑ Upload"})]}),[["Project Alpha","1.2 GB · Last edited 2h ago"],["Q3 Financials.xlsx","2.4 MB · Last edited 2h ago"],["Campaign Banner.png","4.1 MB · Last edited 2h ago"]].map(([a,c],l)=>s.jsxs("div",{className:"preview-file",style:{animationDelay:`${l*.1}s`},children:[s.jsx("div",{className:"preview-file-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h4",{children:a}),s.jsx("p",{children:c})]})]},a))]})]})]})]})]}),s.jsx("section",{id:"products",className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsx("p",{className:"section-kicker",children:"All in one place"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 44px)",fontWeight:800,lineHeight:1.15,marginBottom:12},children:"Store and share files. Browse and protect."}),s.jsxs("p",{style:{color:"#b3b3b3",fontSize:17,maxWidth:640,lineHeight:1.6},children:[Ee.name," combines secure cloud storage with powerful tools to upload, download, and manage your files with confidence."]}),s.jsx("div",{className:"mega-product-grid",children:Ny.map((a,c)=>s.jsxs("article",{className:`mega-product-card scroll-reveal delay-${c+1}`,children:[s.jsx("div",{className:"mega-product-icon","aria-hidden":"true",children:a.icon}),s.jsx("h3",{children:a.title}),s.jsx("p",{children:a.desc})]},a.title))})]})}),s.jsx("section",{id:"security",className:"mega-section",children:s.jsxs("div",{className:"mega-security-block scroll-reveal",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Security that's always on"}),s.jsx("h2",{children:"Your data stays encrypted and private."}),s.jsx("p",{children:"We protect your data with encryption in transit and at rest — the highest level of online security. Only you and people you authorize can access your files."}),s.jsx("button",{type:"button",className:"btn-mega-red",style:{marginTop:28},onClick:e,children:"Learn more"})]}),s.jsx("div",{className:"mega-shield","aria-hidden":"true",children:"🔐"})]})}),s.jsx("section",{className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsxs("p",{className:"section-kicker",children:["Why choose ",Ee.name,"?"]}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800,marginBottom:40},children:"Built for how you work today."}),s.jsx("div",{className:"mega-product-grid",children:Ay.map((a,c)=>s.jsxs("article",{className:`mega-product-card scroll-reveal delay-${c+1}`,children:[s.jsx("h3",{children:a.title}),s.jsx("p",{children:a.desc})]},a.title))})]})}),s.jsxs("section",{className:"stats-band scroll-reveal","aria-label":"Platform statistics",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24,textAlign:"center",borderTop:"1px solid rgba(255,255,255,.06)",borderBottom:"1px solid rgba(255,255,255,.06)"},children:[s.jsxs("div",{className:"stat-mini scroll-reveal delay-1",children:[s.jsxs("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:[n.filesStored.toLocaleString(),"+"]}),s.jsx("span",{style:{color:"#737373"},children:"Files stored"})]}),s.jsxs("div",{className:"stat-mini scroll-reveal delay-2",children:[s.jsx("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:Ie(n.storageCapacity)}),s.jsx("span",{style:{color:"#737373"},children:"Storage capacity"})]}),s.jsxs("div",{className:"stat-mini scroll-reveal delay-3",children:[s.jsxs("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:[n.activeUsers.toLocaleString(),"+"]}),s.jsx("span",{style:{color:"#737373"},children:"Active users"})]})]}),s.jsxs("section",{id:"pricing",className:"mega-section",children:[s.jsxs("div",{className:"scroll-reveal section-center",children:[s.jsx("p",{className:"section-kicker",children:"Pricing"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800},children:"Simple plans for everyone."}),s.jsx("p",{className:"section-subtitle",style:{color:"#b3b3b3",marginTop:12},children:"Start free. Scale when you need more."})]}),s.jsx("div",{className:"pricing-grid scroll-reveal delay-1",children:Py.map(a=>s.jsxs("article",{className:`plan-card${a.highlight?" highlight":""}`,children:[a.highlight&&s.jsx("span",{className:"plan-badge",children:"Most popular"}),s.jsx("h3",{children:a.name}),s.jsxs("div",{className:"plan-price",children:[a.price,s.jsx("span",{children:a.period})]}),s.jsxs("p",{children:[a.storage," storage"]}),s.jsx("ul",{className:"plan-features",children:(a.features||[]).slice(0,4).map(c=>s.jsx("li",{children:c},c))}),s.jsxs("button",{type:"button",className:a.highlight?"btn-mega-red":"btn-secondary",onClick:e,children:["Choose ",a.name]})]},a.id))})]}),s.jsx("section",{id:"faq",className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsxs("div",{className:"section-center",children:[s.jsx("p",{className:"section-kicker",children:"FAQ"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800},children:"Questions? We have answers."})]}),s.jsx("div",{className:"faq-list",children:Oy.map(a=>s.jsxs("details",{className:"faq-item scroll-reveal",children:[s.jsx("summary",{children:a.q}),s.jsx("p",{children:a.a})]},a.q))})]})}),s.jsxs("section",{className:"cta-band scroll-reveal",children:[s.jsx("h2",{children:"Millions trust secure cloud storage."}),s.jsx("p",{children:"Join users who store and protect their data in the cloud."}),s.jsxs("div",{className:"hero-actions",children:[s.jsx("button",{type:"button",className:"btn-mega-red",onClick:e,children:"Sign up for free"}),s.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"Log in"})]})]})]}),s.jsxs("footer",{className:"landing-footer",children:[s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx("span",{className:"brand-mark",children:s.jsx("img",{src:Ee.logoImage,alt:""})}),s.jsx("strong",{children:Ee.name}),s.jsx("p",{children:"Secure cloud storage for individuals and teams."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Product"}),s.jsx("a",{href:"#products",children:"Products"}),s.jsx("a",{href:"#pricing",children:"Pricing"}),s.jsx("a",{href:"#faq",children:"FAQ"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Company"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"About"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Contact"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Legal"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Privacy"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Terms"})]})]}),s.jsx("div",{className:"footer-bottom",children:s.jsxs("span",{children:["© ",new Date().getFullYear()," ",Ee.name,". All rights reserved."]})})]})]})}const My=()=>{};var Bu={};/**
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
 */const Kp=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===55296&&n+1<e.length&&(e.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++n)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t},Fy=function(e){const t=[];let r=0,n=0;for(;r<e.length;){const i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[r++];t[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[r++],a=e[r++],c=e[r++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const o=e[r++],a=e[r++];t[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Qp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,c=a?e[i+1]:0,l=i+2<e.length,d=l?e[i+2]:0,u=o>>2,f=(o&3)<<4|c>>4;let h=(c&15)<<2|d>>6,x=d&63;l||(x=64,a||(h=64)),n.push(r[u],r[f],r[h],r[x])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Kp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Fy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){const o=r[e.charAt(i++)],c=i<e.length?r[e.charAt(i)]:0;++i;const d=i<e.length?r[e.charAt(i)]:64;++i;const f=i<e.length?r[e.charAt(i)]:64;if(++i,o==null||c==null||d==null||f==null)throw new Uy;const h=o<<2|c>>4;if(n.push(h),d!==64){const x=c<<4&240|d>>2;if(n.push(x),f!==64){const p=d<<6&192|f;n.push(p)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Uy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const By=function(e){const t=Kp(e);return Qp.encodeByteArray(t,!0)},Xp=function(e){return By(e).replace(/\./g,"")},qp=function(e){try{return Qp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Wy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $y=()=>Wy().__FIREBASE_DEFAULTS__,Hy=()=>{if(typeof process>"u"||typeof Bu>"u")return;const e=Bu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Vy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&qp(e[1]);return t&&JSON.parse(t)},rd=()=>{try{return My()||$y()||Hy()||Vy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Yy=e=>{var t,r;return(r=(t=rd())===null||t===void 0?void 0:t.emulatorHosts)===null||r===void 0?void 0:r[e]},Jp=()=>{var e;return(e=rd())===null||e===void 0?void 0:e.config},Zp=e=>{var t;return(t=rd())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Gy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,n))}}}/**
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
 */function Zs(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ky(e){return(await fetch(e,{credentials:"include"})).ok}const Ti={};function Qy(){const e={prod:[],emulator:[]};for(const t of Object.keys(Ti))Ti[t]?e.emulator.push(t):e.prod.push(t);return e}function Xy(e){let t=document.getElementById(e),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),r=!0),{created:r,element:t}}let Wu=!1;function qy(e,t){if(typeof window>"u"||typeof document>"u"||!Zs(window.location.host)||Ti[e]===t||Ti[e]||Wu)return;Ti[e]=t;function r(h){return`__firebase__banner__${h}`}const n="__firebase__banner",o=Qy().prod.length>0;function a(){const h=document.getElementById(n);h&&h.remove()}function c(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,x){h.setAttribute("width","24"),h.setAttribute("id",x),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function d(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{Wu=!0,a()},h}function u(h,x){h.setAttribute("id",x),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=Xy(n),x=r("text"),p=document.getElementById(x)||document.createElement("span"),w=r("learnmore"),S=document.getElementById(w)||document.createElement("a"),v=r("preprendIcon"),g=document.getElementById(v)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const y=h.element;c(y),u(S,w);const k=d();l(g,v),y.append(g,p,S,k),document.body.appendChild(y)}o?(p.innerText="Preview backend disconnected.",g.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(g.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,p.innerText="Preview backend running in this workspace."),p.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function Zy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function e1(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function t1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r1(){const e=Be();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function n1(){try{return typeof indexedDB=="object"}catch{return!1}}function i1(){return new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(r){t(r)}})}/**
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
 */const o1="FirebaseError";class Pr extends Error{constructor(t,r,n){super(r),this.code=t,this.customData=n,this.name=o1,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(t,r,n){this.service=t,this.serviceName=r,this.errors=n}create(t,...r){const n=r[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?s1(o,n):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Pr(i,c,n)}}function s1(e,t){return e.replace(a1,(r,n)=>{const i=t[n];return i!=null?String(i):`<${n}?>`})}const a1=/\{\$([^}]+)}/g;function l1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Hn(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const i of r){if(!n.includes(i))return!1;const o=e[i],a=t[i];if($u(o)&&$u(a)){if(!Hn(o,a))return!1}else if(o!==a)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function $u(e){return e!==null&&typeof e=="object"}/**
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
 */function oo(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(i=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function c1(e,t){const r=new d1(e,t);return r.subscribe.bind(r)}class d1{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(n=>{this.error(n)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,n){let i;if(t===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");u1(t,["next","error","complete"])?i=t:i={next:t,error:r,complete:n},i.next===void 0&&(i.next=Ua),i.error===void 0&&(i.error=Ua),i.complete===void 0&&(i.complete=Ua);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function u1(e,t){if(typeof e!="object"||e===null)return!1;for(const r of t)if(r in e&&typeof e[r]=="function")return!0;return!1}function Ua(){}/**
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
 */function qn(e){return e&&e._delegate?e._delegate:e}class Vn{constructor(t,r,n){this.name=t,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Br="[DEFAULT]";/**
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
 */class f1{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const n=new Gy;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){var r;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(r=t==null?void 0:t.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(p1(t))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(t=Br){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Br){return this.instances.has(t)}getOptions(t=Br){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&a.resolve(i)}return i}onInit(t,r){var n;const i=this.normalizeInstanceIdentifier(r),o=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:h1(t),options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Br){return this.component?this.component.multipleInstances?t:Br:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function h1(e){return e===Br?void 0:e}function p1(e){return e.instantiationMode==="EAGER"}/**
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
 */class g1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new f1(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(oe||(oe={}));const m1={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},v1=oe.INFO,y1={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},x1=(e,t,...r)=>{if(t<e.logLevel)return;const n=new Date().toISOString(),i=y1[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eg{constructor(t){this.name=t,this._logLevel=v1,this._logHandler=x1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in oe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?m1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...t),this._logHandler(this,oe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...t),this._logHandler(this,oe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...t),this._logHandler(this,oe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...t),this._logHandler(this,oe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...t),this._logHandler(this,oe.ERROR,...t)}}const w1=(e,t)=>t.some(r=>e instanceof r);let Hu,Vu;function b1(){return Hu||(Hu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k1(){return Vu||(Vu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tg=new WeakMap,Ql=new WeakMap,rg=new WeakMap,Ba=new WeakMap,nd=new WeakMap;function S1(e){const t=new Promise((r,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{r(Cr(e.result)),i()},a=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(r=>{r instanceof IDBCursor&&tg.set(r,e)}).catch(()=>{}),nd.set(t,e),t}function C1(e){if(Ql.has(e))return;const t=new Promise((r,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{r(),i()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Ql.set(e,t)}let Xl={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return Ql.get(e);if(t==="objectStoreNames")return e.objectStoreNames||rg.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Cr(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _1(e){Xl=e(Xl)}function E1(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const n=e.call(Wa(this),t,...r);return rg.set(n,t.sort?t.sort():[t]),Cr(n)}:k1().includes(e)?function(...t){return e.apply(Wa(this),t),Cr(tg.get(this))}:function(...t){return Cr(e.apply(Wa(this),t))}}function j1(e){return typeof e=="function"?E1(e):(e instanceof IDBTransaction&&C1(e),w1(e,b1())?new Proxy(e,Xl):e)}function Cr(e){if(e instanceof IDBRequest)return S1(e);if(Ba.has(e))return Ba.get(e);const t=j1(e);return t!==e&&(Ba.set(e,t),nd.set(t,e)),t}const Wa=e=>nd.get(e);function I1(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),c=Cr(a);return n&&a.addEventListener("upgradeneeded",l=>{n(Cr(a.result),l.oldVersion,l.newVersion,Cr(a.transaction),l)}),r&&a.addEventListener("blocked",l=>r(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const T1=["get","getKey","getAll","getAllKeys","count"],R1=["put","add","delete","clear"],$a=new Map;function Yu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if($a.get(t))return $a.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,i=R1.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||T1.includes(r)))return;const o=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[r](...c),i&&l.done]))[0]};return $a.set(t,o),o}_1(e=>({...e,get:(t,r,n)=>Yu(t,r)||e.get(t,r,n),has:(t,r)=>!!Yu(t,r)||e.has(t,r)}));/**
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
 */class P1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(N1(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function N1(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ql="@firebase/app",Gu="0.13.2";/**
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
 */const Zt=new eg("@firebase/app"),A1="@firebase/app-compat",O1="@firebase/analytics-compat",D1="@firebase/analytics",L1="@firebase/app-check-compat",z1="@firebase/app-check",M1="@firebase/auth",F1="@firebase/auth-compat",U1="@firebase/database",B1="@firebase/data-connect",W1="@firebase/database-compat",$1="@firebase/functions",H1="@firebase/functions-compat",V1="@firebase/installations",Y1="@firebase/installations-compat",G1="@firebase/messaging",K1="@firebase/messaging-compat",Q1="@firebase/performance",X1="@firebase/performance-compat",q1="@firebase/remote-config",J1="@firebase/remote-config-compat",Z1="@firebase/storage",ex="@firebase/storage-compat",tx="@firebase/firestore",rx="@firebase/ai",nx="@firebase/firestore-compat",ix="firebase",ox="11.10.0";/**
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
 */const Jl="[DEFAULT]",sx={[ql]:"fire-core",[A1]:"fire-core-compat",[D1]:"fire-analytics",[O1]:"fire-analytics-compat",[z1]:"fire-app-check",[L1]:"fire-app-check-compat",[M1]:"fire-auth",[F1]:"fire-auth-compat",[U1]:"fire-rtdb",[B1]:"fire-data-connect",[W1]:"fire-rtdb-compat",[$1]:"fire-fn",[H1]:"fire-fn-compat",[V1]:"fire-iid",[Y1]:"fire-iid-compat",[G1]:"fire-fcm",[K1]:"fire-fcm-compat",[Q1]:"fire-perf",[X1]:"fire-perf-compat",[q1]:"fire-rc",[J1]:"fire-rc-compat",[Z1]:"fire-gcs",[ex]:"fire-gcs-compat",[tx]:"fire-fst",[nx]:"fire-fst-compat",[rx]:"fire-vertex","fire-js":"fire-js",[ix]:"fire-js-all"};/**
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
 */const Es=new Map,ax=new Map,Zl=new Map;function Ku(e,t){try{e.container.addComponent(t)}catch(r){Zt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function Qi(e){const t=e.name;if(Zl.has(t))return Zt.debug(`There were multiple attempts to register component ${t}.`),!1;Zl.set(t,e);for(const r of Es.values())Ku(r,e);for(const r of ax.values())Ku(r,e);return!0}function ng(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Nt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const lx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new io("app","Firebase",lx);/**
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
 */class cx{constructor(t,r,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
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
 */const so=ox;function ig(e,t={}){let r=e;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Jl,automaticDataCollectionEnabled:!0},t),i=n.name;if(typeof i!="string"||!i)throw _r.create("bad-app-name",{appName:String(i)});if(r||(r=Jp()),!r)throw _r.create("no-options");const o=Es.get(i);if(o){if(Hn(r,o.options)&&Hn(n,o.config))return o;throw _r.create("duplicate-app",{appName:i})}const a=new g1(i);for(const l of Zl.values())a.addComponent(l);const c=new cx(r,n,a);return Es.set(i,c),c}function dx(e=Jl){const t=Es.get(e);if(!t&&e===Jl&&Jp())return ig();if(!t)throw _r.create("no-app",{appName:e});return t}function An(e,t,r){var n;let i=(n=sx[e])!==null&&n!==void 0?n:e;r&&(i+=`-${r}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zt.warn(c.join(" "));return}Qi(new Vn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const ux="firebase-heartbeat-database",fx=1,Xi="firebase-heartbeat-store";let Ha=null;function og(){return Ha||(Ha=I1(ux,fx,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Xi)}catch(r){console.warn(r)}}}}).catch(e=>{throw _r.create("idb-open",{originalErrorMessage:e.message})})),Ha}async function hx(e){try{const r=(await og()).transaction(Xi),n=await r.objectStore(Xi).get(sg(e));return await r.done,n}catch(t){if(t instanceof Pr)Zt.warn(t.message);else{const r=_r.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Zt.warn(r.message)}}}async function Qu(e,t){try{const n=(await og()).transaction(Xi,"readwrite");await n.objectStore(Xi).put(t,sg(e)),await n.done}catch(r){if(r instanceof Pr)Zt.warn(r.message);else{const n=_r.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Zt.warn(n.message)}}}function sg(e){return`${e.name}!${e.options.appId}`}/**
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
 */const px=1024,gx=30;class mx{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new yx(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Xu();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>gx){const a=xx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Zt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Xu(),{heartbeatsToSend:n,unsentEntries:i}=vx(this._heartbeatsCache.heartbeats),o=Xp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(r){return Zt.warn(r),""}}}function Xu(){return new Date().toISOString().substring(0,10)}function vx(e,t=px){const r=[];let n=e.slice();for(const i of e){const o=r.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),qu(r)>t){o.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),qu(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class yx{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return n1()?i1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await hx(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qu(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qu(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function qu(e){return Xp(JSON.stringify({version:2,heartbeats:e})).length}function xx(e){if(e.length===0)return-1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}/**
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
 */function wx(e){Qi(new Vn("platform-logger",t=>new P1(t),"PRIVATE")),Qi(new Vn("heartbeat",t=>new mx(t),"PRIVATE")),An(ql,Gu,e),An(ql,Gu,"esm2017"),An("fire-js","")}wx("");var bx="firebase",kx="11.10.0";/**
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
 */An(bx,kx,"app");function id(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function ag(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sx=ag,lg=new io("auth","Firebase",ag());/**
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
 */const js=new eg("@firebase/auth");function Cx(e,...t){js.logLevel<=oe.WARN&&js.warn(`Auth (${so}): ${e}`,...t)}function Ko(e,...t){js.logLevel<=oe.ERROR&&js.error(`Auth (${so}): ${e}`,...t)}/**
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
 */function Lt(e,...t){throw sd(e,...t)}function _t(e,...t){return sd(e,...t)}function od(e,t,r){const n=Object.assign(Object.assign({},Sx()),{[t]:r});return new io("auth","Firebase",n).create(t,{appName:e.name})}function Qr(e){return od(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _x(e,t,r){const n=r;if(!(t instanceof n))throw n.name!==t.constructor.name&&Lt(e,"argument-error"),od(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sd(e,...t){if(typeof e!="string"){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return lg.create(e,...t)}function F(e,t,...r){if(!e)throw sd(t,...r)}function Yt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ko(t),new Error(t)}function er(e,t){e||Yt(t)}/**
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
 */function ec(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Ex(){return Ju()==="http:"||Ju()==="https:"}function Ju(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function jx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ex()||e1()||"connection"in navigator)?navigator.onLine:!0}function Ix(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ao{constructor(t,r){this.shortDelay=t,this.longDelay=r,er(r>t,"Short delay should be less than long delay!"),this.isMobile=Jy()||t1()}get(){return jx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ad(e,t){er(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
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
 */class cg{static initialize(t,r,n){this.fetchImpl=t,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Tx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Rx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Px=new ao(3e4,6e4);function ld(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Jn(e,t,r,n,i={}){return dg(e,i,async()=>{let o={},a={};n&&(t==="GET"?a=n:o={body:JSON.stringify(n)});const c=oo(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const d=Object.assign({method:t,headers:l},o);return Zy()||(d.referrerPolicy="no-referrer"),e.emulatorConfig&&Zs(e.emulatorConfig.host)&&(d.credentials="include"),cg.fetch()(await ug(e,e.config.apiHost,r,c),d)})}async function dg(e,t,r){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},Tx),t);try{const i=new Ax(e),o=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Ao(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ao(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ao(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ao(e,"user-disabled",a);const u=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw od(e,u,d);Lt(e,u)}}catch(i){if(i instanceof Pr)throw i;Lt(e,"network-request-failed",{message:String(i)})}}async function Nx(e,t,r,n,i={}){const o=await Jn(e,t,r,n,i);return"mfaPendingCredential"in o&&Lt(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function ug(e,t,r,n){const i=`${t}${r}?${n}`,o=e,a=o.config.emulator?ad(e.config,i):`${e.config.apiScheme}://${i}`;return Rx.includes(r)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class Ax{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(_t(this.auth,"network-request-failed")),Px.get())})}}function Ao(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=_t(e,t,n);return i.customData._tokenResponse=r,i}/**
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
 */async function Ox(e,t){return Jn(e,"POST","/v1/accounts:delete",t)}async function Is(e,t){return Jn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ri(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Dx(e,t=!1){const r=qn(e),n=await r.getIdToken(t),i=cd(n);F(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:n,authTime:Ri(Va(i.auth_time)),issuedAtTime:Ri(Va(i.iat)),expirationTime:Ri(Va(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Va(e){return Number(e)*1e3}function cd(e){const[t,r,n]=e.split(".");if(t===void 0||r===void 0||n===void 0)return Ko("JWT malformed, contained fewer than 3 sections"),null;try{const i=qp(r);return i?JSON.parse(i):(Ko("Failed to decode base64 JWT payload"),null)}catch(i){return Ko("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zu(e){const t=cd(e);return F(t,"internal-error"),F(typeof t.exp<"u","internal-error"),F(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function qi(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof Pr&&Lx(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}function Lx({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class zx{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var r;if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tc{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ts(e){var t;const r=e.auth,n=await e.getIdToken(),i=await qi(e,Is(r,{idToken:n}));F(i==null?void 0:i.users.length,r,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?fg(o.providerUserInfo):[],c=Fx(e.providerData,a),l=e.isAnonymous,d=!(e.email&&o.passwordHash)&&!(c!=null&&c.length),u=l?d:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new tc(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function Mx(e){const t=qn(e);await Ts(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Fx(e,t){return[...e.filter(n=>!t.some(i=>i.providerId===n.providerId)),...t]}function fg(e){return e.map(t=>{var{providerId:r}=t,n=id(t,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Ux(e,t){const r=await dg(e,{},async()=>{const n=oo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=await ug(e,i,"/v1/token",`key=${o}`),c=await e._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:n};return e.emulatorConfig&&Zs(e.emulatorConfig.host)&&(l.credentials="include"),cg.fetch()(a,l)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Bx(e,t){return Jn(e,"POST","/v2/accounts:revokeToken",ld(e,t))}/**
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
 */class On{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){F(t.idToken,"internal-error"),F(typeof t.idToken<"u","internal-error"),F(typeof t.refreshToken<"u","internal-error");const r="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Zu(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}updateFromIdToken(t){F(t.length!==0,"internal-error");const r=Zu(t);this.updateTokensAndExpiration(t,null,r)}async getToken(t,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:n,refreshToken:i,expiresIn:o}=await Ux(t,r);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(t,r,n){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,r){const{refreshToken:n,accessToken:i,expirationTime:o}=r,a=new On;return n&&(F(typeof n=="string","internal-error",{appName:t}),a.refreshToken=n),i&&(F(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(F(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new On,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
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
 */function or(e,t){F(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class kt{constructor(t){var{uid:r,auth:n,stsTokenManager:i}=t,o=id(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new tc(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const r=await qi(this,this.stsTokenManager.getToken(this.auth,t));return F(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return Dx(this,t)}reload(){return Mx(this)}_assign(t){this!==t&&(F(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>Object.assign({},r)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const r=new kt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(t){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),r&&await Ts(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(Qr(this.auth));const t=await this.getIdToken();return await qi(this,Ox(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){var n,i,o,a,c,l,d,u;const f=(n=r.displayName)!==null&&n!==void 0?n:void 0,h=(i=r.email)!==null&&i!==void 0?i:void 0,x=(o=r.phoneNumber)!==null&&o!==void 0?o:void 0,p=(a=r.photoURL)!==null&&a!==void 0?a:void 0,w=(c=r.tenantId)!==null&&c!==void 0?c:void 0,S=(l=r._redirectEventId)!==null&&l!==void 0?l:void 0,v=(d=r.createdAt)!==null&&d!==void 0?d:void 0,g=(u=r.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:k,isAnonymous:C,providerData:E,stsTokenManager:_}=r;F(y&&_,t,"internal-error");const I=On.fromJSON(this.name,_);F(typeof y=="string",t,"internal-error"),or(f,t.name),or(h,t.name),F(typeof k=="boolean",t,"internal-error"),F(typeof C=="boolean",t,"internal-error"),or(x,t.name),or(p,t.name),or(w,t.name),or(S,t.name),or(v,t.name),or(g,t.name);const D=new kt({uid:y,auth:t,email:h,emailVerified:k,displayName:f,isAnonymous:C,photoURL:p,phoneNumber:x,tenantId:w,stsTokenManager:I,createdAt:v,lastLoginAt:g});return E&&Array.isArray(E)&&(D.providerData=E.map(R=>Object.assign({},R))),S&&(D._redirectEventId=S),D}static async _fromIdTokenResponse(t,r,n=!1){const i=new On;i.updateFromServerResponse(r);const o=new kt({uid:r.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Ts(o),o}static async _fromGetAccountInfoResponse(t,r,n){const i=r.users[0];F(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?fg(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new On;c.updateFromIdToken(n);const l=new kt({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new tc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,d),l}}/**
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
 */const ef=new Map;function Gt(e){er(e instanceof Function,"Expected a class definition");let t=ef.get(e);return t?(er(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ef.set(e,t),t)}/**
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
 */class hg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}hg.type="NONE";const tf=hg;/**
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
 */function Qo(e,t,r){return`firebase:${e}:${t}:${r}`}class Dn{constructor(t,r,n){this.persistence=t,this.auth=r,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=Qo(this.userKey,i.apiKey,o),this.fullPersistenceKey=Qo("persistence",i.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const r=await Is(this.auth,{idToken:t}).catch(()=>{});return r?kt._fromGetAccountInfoResponse(this.auth,r,t):null}return kt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,n="authUser"){if(!r.length)return new Dn(Gt(tf),t,n);const i=(await Promise.all(r.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Gt(tf);const a=Qo(n,t.config.apiKey,t.name);let c=null;for(const d of r)try{const u=await d._get(a);if(u){let f;if(typeof u=="string"){const h=await Is(t,{idToken:u}).catch(()=>{});if(!h)break;f=await kt._fromGetAccountInfoResponse(t,h,u)}else f=kt._fromJSON(t,u);d!==o&&(c=f),o=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Dn(o,t,n):(o=l[0],c&&await o._set(a,c.toJSON()),await Promise.all(r.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Dn(o,t,n))}}/**
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
 */function rf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(pg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xg(t))return"Blackberry";if(wg(t))return"Webos";if(gg(t))return"Safari";if((t.includes("chrome/")||mg(t))&&!t.includes("edge/"))return"Chrome";if(yg(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function pg(e=Be()){return/firefox\//i.test(e)}function gg(e=Be()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function mg(e=Be()){return/crios\//i.test(e)}function vg(e=Be()){return/iemobile/i.test(e)}function yg(e=Be()){return/android/i.test(e)}function xg(e=Be()){return/blackberry/i.test(e)}function wg(e=Be()){return/webos/i.test(e)}function dd(e=Be()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Wx(e=Be()){var t;return dd(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function $x(){return r1()&&document.documentMode===10}function bg(e=Be()){return dd(e)||yg(e)||wg(e)||xg(e)||/windows phone/i.test(e)||vg(e)}/**
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
 */function kg(e,t=[]){let r;switch(e){case"Browser":r=rf(Be());break;case"Worker":r=`${rf(Be())}-${e}`;break;default:r=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${so}/${n}`}/**
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
 */class Hx{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const n=o=>new Promise((a,c)=>{try{const l=t(o);a(l)}catch(l){c(l)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const r=[];try{for(const n of this.queue)await n(t),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function Vx(e,t={}){return Jn(e,"GET","/v2/passwordPolicy",ld(e,t))}/**
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
 */const Yx=6;class Gx{constructor(t){var r,n,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=a.minPasswordLength)!==null&&r!==void 0?r:Yx,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=t.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var r,n,i,o,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(r=l.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(t,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=t.length>=n),i&&(r.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<t.length;i++)n=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,r,n,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class Kx{constructor(t,r,n,i){this.app=t,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nf(this),this.idTokenSubscription=new nf(this),this.beforeStateQueue=new Hx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=Gt(r)),this._initializationPromise=this.queue(async()=>{var n,i,o;if(!this._deleted&&(this.persistenceManager=await Dn.create(this,t),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const r=await Is(this,{idToken:t}),n=await kt._fromGetAccountInfoResponse(this,r,t);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(Nt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===c)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await Ts(t)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Ix()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nt(this.app))return Promise.reject(Qr(this));const r=t?qn(t):null;return r&&F(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&F(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(Qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nt(this.app)?Promise.reject(Qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Vx(this),r=new Gx(t);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new io("auth","Firebase",t())}onAuthStateChanged(t,r,n){return this.registerStateListener(this.authStateSubscription,t,r,n)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,n){return this.registerStateListener(this.idTokenSubscription,t,r,n)}authStateReady(){return new Promise((t,r)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged(()=>{n(),t()},r)}})}async revokeAccessToken(t){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await Bx(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,r){const n=await this.getOrInitRedirectPersistenceManager(r);return t===null?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&Gt(t)||this._popupRedirectResolver;F(r,this,"argument-error"),this.redirectPersistenceManager=await Dn.create(this,[Gt(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===t?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,n,i){if(this._deleted)return()=>{};const o=typeof r=="function"?r:r.next.bind(r);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof r=="function"){const l=t.addObserver(r,n,i);return()=>{a=!0,l()}}else{const l=t.addObserver(r);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var t;if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const r=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return r!=null&&r.error&&Cx(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function ea(e){return qn(e)}class nf{constructor(t){this.auth=t,this.observer=null,this.addObserver=c1(r=>this.observer=r)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ud={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qx(e){ud=e}function Xx(e){return ud.loadJS(e)}function qx(){return ud.gapiScript}function Jx(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Zx(e,t){const r=ng(e,"auth");if(r.isInitialized()){const i=r.getImmediate(),o=r.getOptions();if(Hn(o,t??{}))return i;Lt(i,"already-initialized")}return r.initialize({options:t})}function ew(e,t){const r=(t==null?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Gt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,t==null?void 0:t.popupRedirectResolver)}function tw(e,t,r){const n=ea(e);F(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const i=!1,o=Sg(t),{host:a,port:c}=rw(t),l=c===null?"":`:${c}`,d={url:`${o}//${a}${l}/`},u=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){F(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),F(Hn(d,n.config.emulator)&&Hn(u,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=u,n.settings.appVerificationDisabledForTesting=!0,Zs(a)?(Ky(`${o}//${a}${l}`),qy("Auth",!0)):nw()}function Sg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function rw(e){const t=Sg(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const o=i[1];return{host:o,port:of(n.substr(o.length+1))}}else{const[o,a]=n.split(":");return{host:o,port:of(a)}}}function of(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function nw(){function e(){const t=document.createElement("p"),r=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Cg{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return Yt("not implemented")}_getIdTokenResponse(t){return Yt("not implemented")}_linkToIdToken(t,r){return Yt("not implemented")}_getReauthenticationResolver(t){return Yt("not implemented")}}/**
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
 */async function Ln(e,t){return Nx(e,"POST","/v1/accounts:signInWithIdp",ld(e,t))}/**
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
 */const iw="http://localhost";class tr extends Cg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new tr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):Lt("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:n,signInMethod:i}=r,o=id(r,["providerId","signInMethod"]);if(!n||!i)return null;const a=new tr(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const r=this.buildRequest();return Ln(t,r)}_linkToIdToken(t,r){const n=this.buildRequest();return n.idToken=r,Ln(t,n)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,Ln(t,r)}buildRequest(){const t={requestUri:iw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=oo(r)}return t}}/**
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
 */class fd{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zn extends fd{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class Pi extends Zn{static credentialFromJSON(t){const r=typeof t=="string"?JSON.parse(t):t;return F("providerId"in r&&"signInMethod"in r,"argument-error"),tr._fromParams(r)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return F(t.idToken||t.accessToken,"argument-error"),tr._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return Pi.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return Pi.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:o,nonce:a,providerId:c}=t;if(!n&&!i&&!r&&!o||!c)return null;try{return new Pi(c)._credential({idToken:r,accessToken:n,nonce:a,pendingToken:o})}catch{return null}}}/**
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
 */class ur extends Zn{constructor(){super("facebook.com")}static credential(t){return tr._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ur.credentialFromTaggedObject(t)}static credentialFromError(t){return ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ur.credential(t.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
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
 */class Bt extends Zn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return tr._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:n}=t;if(!r&&!n)return null;try{return Bt.credential(r,n)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
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
 */class Wt extends Zn{constructor(){super("github.com")}static credential(t){return tr._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
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
 */class fr extends Zn{constructor(){super("twitter.com")}static credential(t,r){return tr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return fr.credentialFromTaggedObject(t)}static credentialFromError(t){return fr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=t;if(!r||!n)return null;try{return fr.credential(r,n)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
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
 */class Yn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,n,i=!1){const o=await kt._fromIdTokenResponse(t,n,i),a=sf(n);return new Yn({user:o,providerId:a,_tokenResponse:n,operationType:r})}static async _forOperation(t,r,n){await t._updateTokensIfNecessary(n,!0);const i=sf(n);return new Yn({user:t,providerId:i,_tokenResponse:n,operationType:r})}}function sf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Rs extends Pr{constructor(t,r,n,i){var o;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Rs.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,r,n,i){return new Rs(t,r,n,i)}}function _g(e,t,r,n){return(t==="reauthenticate"?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Rs._fromErrorAndOperation(e,o,t,n):o})}async function ow(e,t,r=!1){const n=await qi(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return Yn._forOperation(e,"link",n)}/**
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
 */async function sw(e,t,r=!1){const{auth:n}=e;if(Nt(n.app))return Promise.reject(Qr(n));const i="reauthenticate";try{const o=await qi(e,_g(n,i,t,e),r);F(o.idToken,n,"internal-error");const a=cd(o.idToken);F(a,n,"internal-error");const{sub:c}=a;return F(e.uid===c,n,"user-mismatch"),Yn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Lt(n,"user-mismatch"),o}}/**
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
 */async function aw(e,t,r=!1){if(Nt(e.app))return Promise.reject(Qr(e));const n="signIn",i=await _g(e,n,t),o=await Yn._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(o.user),o}function lw(e,t,r,n){return qn(e).onIdTokenChanged(t,r,n)}function cw(e,t,r){return qn(e).beforeAuthStateChanged(t,r)}const Ps="__sak";/**
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
 */class Eg{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Ps,"1"),this.storage.removeItem(Ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dw=1e3,uw=10;class jg extends Eg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&t(r,i,n)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const n=t.key;r?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!r&&this.localCache[n]===a||this.notifyListeners(n,a)},o=this.storage.getItem(n);$x()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,uw):i()}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:n}),!0)})},dw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}jg.type="LOCAL";const fw=jg;/**
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
 */class Ig extends Eg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}Ig.type="SESSION";const Tg=Ig;/**
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
 */function hw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class ta{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(i=>i.isListeningto(t));if(r)return r;const n=new ta(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:n,eventType:i,data:o}=r.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(a).map(async d=>d(r.origin,o)),l=await hw(c);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
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
 */function hd(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(Math.random()*10);return e+r}/**
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
 */class pw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,l)=>{const d=hd("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===d)switch(h.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(h.data.response);break;default:clearTimeout(u),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:r},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Dt(){return window}function gw(e){Dt().location.href=e}/**
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
 */function Rg(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function mw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function yw(){return Rg()?self:null}/**
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
 */const Pg="firebaseLocalStorageDb",xw=1,Ns="firebaseLocalStorage",Ng="fbase_key";class lo{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function ra(e,t){return e.transaction([Ns],t?"readwrite":"readonly").objectStore(Ns)}function ww(){const e=indexedDB.deleteDatabase(Pg);return new lo(e).toPromise()}function rc(){const e=indexedDB.open(Pg,xw);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const n=e.result;try{n.createObjectStore(Ns,{keyPath:Ng})}catch(i){r(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Ns)?t(n):(n.close(),await ww(),t(await rc()))})})}async function af(e,t,r){const n=ra(e,!0).put({[Ng]:t,value:r});return new lo(n).toPromise()}async function bw(e,t){const r=ra(e,!1).get(t),n=await new lo(r).toPromise();return n===void 0?null:n.value}function lf(e,t){const r=ra(e,!0).delete(t);return new lo(r).toPromise()}const kw=800,Sw=3;class Ag{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rc(),this.db)}async _withRetries(t){let r=0;for(;;)try{const n=await this._openDb();return await t(n)}catch(n){if(r++>Sw)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(yw()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await mw(),!this.activeServiceWorker)return;this.sender=new pw(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((t=n[0])===null||t===void 0)&&t.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||vw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await rc();return await af(t,Ps,"1"),await lf(t,Ps),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>af(n,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(n=>bw(n,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>lf(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=ra(i,!1).getAll();return new lo(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ag.type="LOCAL";const Cw=Ag;new ao(3e4,6e4);/**
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
 */function Og(e,t){return t?Gt(t):(F(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class pd extends Cg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ln(t,this._buildIdpRequest())}_linkToIdToken(t,r){return Ln(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return Ln(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function _w(e){return aw(e.auth,new pd(e),e.bypassAuthState)}function Ew(e){const{auth:t,user:r}=e;return F(r,t,"internal-error"),sw(r,new pd(e),e.bypassAuthState)}async function jw(e){const{auth:t,user:r}=e;return F(r,t,"internal-error"),ow(r,new pd(e),e.bypassAuthState)}/**
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
 */class Dg{constructor(t,r,n,i,o=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:n,postBody:i,tenantId:o,error:a,type:c}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:r,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return _w;case"linkViaPopup":case"linkViaRedirect":return jw;case"reauthViaPopup":case"reauthViaRedirect":return Ew;default:Lt(this.auth,"internal-error")}}resolve(t){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Iw=new ao(2e3,1e4);async function Tw(e,t,r){if(Nt(e.app))return Promise.reject(_t(e,"operation-not-supported-in-this-environment"));const n=ea(e);_x(e,t,fd);const i=Og(n,r);return new Vr(n,"signInViaPopup",t,i).executeNotNull()}class Vr extends Dg{constructor(t,r,n,i,o){super(t,r,i,o),this.provider=n,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return F(t,this.auth,"internal-error"),t}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const t=hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Iw.get())};t()}}Vr.currentPopupAction=null;/**
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
 */const Rw="pendingRedirect",Xo=new Map;class Pw extends Dg{constructor(t,r,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let t=Xo.get(this.auth._key());if(!t){try{const n=await Nw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(r){t=()=>Promise.reject(r)}Xo.set(this.auth._key(),t)}return this.bypassAuthState||Xo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nw(e,t){const r=Dw(t),n=Ow(e);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function Aw(e,t){Xo.set(e._key(),t)}function Ow(e){return Gt(e._redirectPersistence)}function Dw(e){return Qo(Rw,e.config.apiKey,e.name)}async function Lw(e,t,r=!1){if(Nt(e.app))return Promise.reject(Qr(e));const n=ea(e),i=Og(n,t),a=await new Pw(n,i,r).execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}/**
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
 */const zw=10*60*1e3;class Mw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(r=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Fw(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){var n;if(t.error&&!Lg(t)){const i=((n=t.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(_t(this.auth,i))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const n=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=zw&&this.cachedEventUids.clear(),this.cachedEventUids.has(cf(t))}saveEventToCache(t){this.cachedEventUids.add(cf(t)),this.lastProcessedEventTime=Date.now()}}function cf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Lg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Fw(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lg(e);default:return!1}}/**
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
 */async function Uw(e,t={}){return Jn(e,"GET","/v1/projects",t)}/**
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
 */const Bw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ww=/^https?/;async function $w(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Uw(e);for(const r of t)try{if(Hw(r))return}catch{}Lt(e,"unauthorized-domain")}function Hw(e){const t=ec(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&n===""?r==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&a.hostname===n}if(!Ww.test(r))return!1;if(Bw.test(e))return n===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const Vw=new ao(3e4,6e4);function df(){const e=Dt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}function Yw(e){return new Promise((t,r)=>{var n,i,o;function a(){df(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{df(),r(_t(e,"network-request-failed"))},timeout:Vw.get()})}if(!((i=(n=Dt().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Dt().gapi)===null||o===void 0)&&o.load)a();else{const c=Jx("iframefcb");return Dt()[c]=()=>{gapi.load?a():r(_t(e,"network-request-failed"))},Xx(`${qx()}?onload=${c}`).catch(l=>r(l))}}).catch(t=>{throw qo=null,t})}let qo=null;function Gw(e){return qo=qo||Yw(e),qo}/**
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
 */const Kw=new ao(5e3,15e3),Qw="__/auth/iframe",Xw="emulator/auth/iframe",qw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zw(e){const t=e.config;F(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?ad(t,Xw):`https://${e.config.authDomain}/${Qw}`,n={apiKey:t.apiKey,appName:e.name,v:so},i=Jw.get(e.config.apiHost);i&&(n.eid=i);const o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${oo(n).slice(1)}`}async function eb(e){const t=await Gw(e),r=Dt().gapi;return F(r,e,"internal-error"),t.open({where:document.body,url:Zw(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qw,dontclear:!0},n=>new Promise(async(i,o)=>{await n.restyle({setHideOnLeave:!1});const a=_t(e,"network-request-failed"),c=Dt().setTimeout(()=>{o(a)},Kw.get());function l(){Dt().clearTimeout(c),i(n)}n.ping(l).then(l,()=>{o(a)})}))}/**
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
 */const tb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rb=500,nb=600,ib="_blank",ob="http://localhost";class uf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sb(e,t,r,n=rb,i=nb){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},tb),{width:n.toString(),height:i.toString(),top:o,left:a}),d=Be().toLowerCase();r&&(c=mg(d)?ib:r),pg(d)&&(t=t||ob,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[x,p])=>`${h}${x}=${p},`,"");if(Wx(d)&&c!=="_self")return ab(t||"",c),new uf(null);const f=window.open(t||"",c,u);F(f,e,"popup-blocked");try{f.focus()}catch{}return new uf(f)}function ab(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const lb="__/auth/handler",cb="emulator/auth/handler",db=encodeURIComponent("fac");async function ff(e,t,r,n,i,o){F(e.config.authDomain,e,"auth-domain-config-required"),F(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:so,eventId:i};if(t instanceof fd){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",l1(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))a[u]=f}if(t instanceof Zn){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const c=a;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await e._getAppCheckToken(),d=l?`#${db}=${encodeURIComponent(l)}`:"";return`${ub(e)}?${oo(c).slice(1)}${d}`}function ub({config:e}){return e.emulator?ad(e,cb):`https://${e.authDomain}/${lb}`}/**
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
 */const Ya="webStorageSupport";class fb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tg,this._completeRedirectFn=Lw,this._overrideRedirectResult=Aw}async _openPopup(t,r,n,i){var o;er((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await ff(t,r,n,ec(),i);return sb(t,a,hd())}async _openRedirect(t,r,n,i){await this._originValidation(t);const o=await ff(t,r,n,ec(),i);return gw(o),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:i,promise:o}=this.eventManagers[r];return i?Promise.resolve(i):(er(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(t);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(t){const r=await eb(t),n=new Mw(t);return r.register("authEvent",i=>(F(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=r,n}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(Ya,{type:Ya},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ya];a!==void 0&&r(!!a),Lt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=$w(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return bg()||gg()||dd()}}const hb=fb;var hf="@firebase/auth",pf="1.10.8";/**
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
 */class pb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(n=>{t((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);r&&(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mb(e){Qi(new Vn("auth",(t,{options:r})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=n.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:a,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kg(e)},d=new Kx(n,i,o,l);return ew(d,r),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,n)=>{t.getProvider("auth-internal").initialize()})),Qi(new Vn("auth-internal",t=>{const r=ea(t.getProvider("auth").getImmediate());return(n=>new pb(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(hf,pf,gb(e)),An(hf,pf,"esm2017")}/**
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
 */const vb=5*60,yb=Zp("authIdTokenMaxAge")||vb;let gf=null;const xb=e=>async t=>{const r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>yb)return;const i=r==null?void 0:r.token;gf!==i&&(gf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wb(e=dx()){const t=ng(e,"auth");if(t.isInitialized())return t.getImmediate();const r=Zx(e,{popupRedirectResolver:hb,persistence:[Cw,fw,Tg]}),n=Zp("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const a=xb(o.toString());cw(r,a,()=>a(r.currentUser)),lw(r,c=>a(c))}}const i=Yy("auth");return i&&tw(r,`http://${i}`),r}function bb(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Qx({loadJS(e){return new Promise((t,r)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=i=>{const o=_t("internal-error");o.customData=i,r(o)},n.type="text/javascript",n.charset="UTF-8",bb().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mb("Browser");const zg={apiKey:"AIzaSyCNsYDBSfYMJUxqbkC3Cb_w6CYGtW4Xf20",authDomain:"cloudvault-58446.firebaseapp.com",projectId:"cloudvault-58446",storageBucket:"cloudvault-58446.firebasestorage.app",messagingSenderId:"378535306521",appId:"1:378535306521:web:2e5fe57db925753d0f5188"},kb=["google","github","microsoft"];let Ga=null,mf=null;function Sb(){return As()?(Ga||(Ga=ig(zg),mf=wb(Ga)),mf):null}function As(){return!0}function Cb(){const e=Object.entries(zg).filter(([,t])=>!t).map(([t])=>t);return{configured:As(),providers:kb.map(t=>({id:t,configured:As()})),missingEnv:e}}async function _b(e){const t=Sb();if(!t)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env variables.");const n={google:new Bt,github:new Wt,microsoft:new Pi("microsoft.com")}[e];if(!n)throw new Error("Unknown provider");const i=await Tw(t,n),o=await i.user.getIdToken(),a=await fetch(`${gt}/auth/firebase`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:o,email:i.user.email,fullName:i.user.displayName,avatarUrl:i.user.photoURL,provider:e})}),c=await a.json();if(!a.ok)throw new Error(c.error||c.message||"Firebase login failed");return c.success?c.data:c}function Eb({onVerified:e,onError:t,onExpire:r,theme:n="auto",size:i="normal"}){const o=m.useRef(null),a=m.useRef(null),[c,l]=m.useState(!1),[d,u]=m.useState(!0),[f,h]=m.useState(null);m.useEffect(()=>{if(window.turnstile)l(!0),u(!1);else{const p=document.querySelector('script[data-cv-turnstile="true"]'),w=p||document.createElement("script");w.src="https://challenges.cloudflare.com/turnstile/v0/api.js",w.async=!0,w.defer=!0,w.dataset.cvTurnstile="true",w.onload=()=>{l(!0),u(!1),console.log("TURNSTILE: Script loaded")},w.onerror=()=>{h("Failed to load Turnstile"),u(!1),t==null||t("Failed to load Turnstile")},p||document.head.appendChild(w)}return()=>{if(a.current&&window.turnstile)try{window.turnstile.remove(a.current),a.current=null}catch(p){console.error("TURNSTILE: Error removing widget:",p)}}},[]),m.useEffect(()=>{if(c&&o.current&&window.turnstile&&!a.current){const p="0x4AAAAAADkh2aePP5UGcXcH",w=["localhost","127.0.0.1","::1"].includes(window.location.hostname);if((p==null?void 0:p.startsWith("1x"))&&!w){const v="Turnstile production site key is not configured";h(v),t==null||t(v),u(!1);return}console.log("TURNSTILE: Rendering widget with site key:",p);try{a.current=window.turnstile.render(o.current,{sitekey:p,theme:n,size:i,callback:v=>{console.log("TURNSTILE: Verification successful"),h(null),e==null||e(v)},"error-callback":v=>{console.error("TURNSTILE: Verification error:",v);const g="Verification failed. For local testing, use the Turnstile test site key; for production, make sure this hostname is allowed in Cloudflare.";h(g),t==null||t(g)},"expired-callback":()=>{console.log("TURNSTILE: Token expired"),h("Verification expired. Please try again."),r==null||r()}})}catch(v){console.error("TURNSTILE: Error rendering widget:",v),h("Failed to render Turnstile widget"),t==null||t("Failed to render Turnstile widget")}}},[c,n,i,e,t,r]);const x=()=>{if(a.current&&window.turnstile)try{window.turnstile.reset(a.current),h(null)}catch(p){console.error("TURNSTILE: Error resetting widget:",p)}};return m.useEffect(()=>{o.current&&(o.current.reset=x)},[]),d?s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",background:"var(--bg-secondary)",borderRadius:"var(--radius)",border:"1px solid var(--border)"},children:s.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid var(--border)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})}):f?s.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"var(--radius)",border:"1px solid var(--danger)",color:"var(--danger)",fontSize:"13px",textAlign:"center"},children:[f,s.jsx("button",{type:"button",onClick:x,style:{marginTop:"8px",padding:"6px 12px",background:"var(--danger)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px"},children:"Retry"})]}):s.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",minHeight:i==="compact"?140:70,overflow:"hidden"},children:s.jsx("div",{ref:o})})}const Mr=(e="")=>{const t=e.toLowerCase();return t.includes("failed to fetch")||t.includes("cannot reach")||t.includes("networkerror")?"Unable to reach CloudVault. Please check your connection.":t.includes("firebase")||t.includes("oauth")||t.includes("access token")?"Social login failed. Please try again.":e||"Something went wrong. Please try again."},Ka=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),vf=e=>e.length>=8&&/[A-Z]/.test(e)&&/[a-z]/.test(e)&&/\d/.test(e);function jb({size:e=20}){return s.jsx("span",{style:{display:"inline-block",width:e,height:e,border:"2.5px solid rgba(255,255,255,0.25)",borderTopColor:"#fff",borderRadius:"50%",animation:"cv-spin 0.7s linear infinite"}})}function Ib({size:e=42}){return s.jsx("span",{style:{width:e,height:e,borderRadius:"50%",background:"var(--mega-red, #d90007)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(217,0,7,.35)",flexShrink:0,overflow:"hidden"},children:s.jsx("img",{src:Ee.logoImage,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function Oo({label:e,type:t="text",value:r,onChange:n,placeholder:i,autoFocus:o,error:a}){const[c,l]=m.useState(!1),d=r&&r.length>0;return s.jsxs("div",{style:{position:"relative",marginBottom:4},children:[s.jsx("label",{style:{position:"absolute",left:16,top:c||d?8:"50%",transform:c||d?"translateY(0) scale(0.82)":"translateY(-50%)",transformOrigin:"left top",fontSize:c||d?11:14,fontWeight:600,color:c?"var(--cv-accent)":a?"var(--cv-danger)":"var(--cv-text-muted)",transition:"all 0.18s cubic-bezier(0.4,0,0.2,1)",pointerEvents:"none",zIndex:1,letterSpacing:c||d?"0.04em":"0",textTransform:c||d?"uppercase":"none"},children:e}),s.jsx("input",{type:t,value:r,onChange:n,onFocus:()=>l(!0),onBlur:()=>l(!1),autoFocus:o,placeholder:c?i:"",style:{width:"100%",padding:"28px 16px 10px",background:"var(--cv-bg-card)",border:`1.5px solid ${a?"var(--cv-danger)":c?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:"var(--cv-radius-lg)",color:"var(--cv-text)",fontSize:15,outline:"none",transition:"border-color 0.18s ease, box-shadow 0.18s ease",boxShadow:c?`0 0 0 3px ${a?"rgba(239,68,68,0.12)":"rgba(99,102,241,0.12)"}`:"none"}}),a&&s.jsx("div",{style:{fontSize:12,color:"var(--cv-danger)",marginTop:4,paddingLeft:4,fontWeight:500},children:a})]})}function Tb({value:e,onChange:t}){const r=[m.useRef(),m.useRef(),m.useRef(),m.useRef(),m.useRef(),m.useRef()],n=(e+"      ").slice(0,6).split(""),i=(a,c)=>{var l,d;if(c.key==="Backspace"){if(n[a]!==" "){const u=n.map((f,h)=>h===a?" ":f).join("").trimEnd();t(u)}else if(a>0){(l=r[a-1].current)==null||l.focus();const u=n.map((f,h)=>h===a-1?" ":f).join("").trimEnd();t(u)}}else if(c.key>="0"&&c.key<="9"){c.preventDefault();const u=n.map((f,h)=>h===a?c.key:f).join("").replace(/ /g,"");t(u.slice(0,6)),a<5&&((d=r[a+1].current)==null||d.focus())}},o=a=>{var l;const c=a.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);c&&(t(c),(l=r[Math.min(c.length,5)].current)==null||l.focus())};return s.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",margin:"8px 0"},children:r.map((a,c)=>{var l,d,u,f;return s.jsx("input",{ref:a,type:"text",inputMode:"numeric",maxLength:1,value:((l=n[c])==null?void 0:l.trim())||"",onKeyDown:h=>i(c,h),onPaste:o,onChange:()=>{},style:{width:52,height:60,textAlign:"center",fontSize:24,fontWeight:800,background:"var(--cv-bg-card)",border:`2px solid ${(d=n[c])!=null&&d.trim()?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:14,color:"var(--cv-text)",outline:"none",transition:"border-color 0.18s ease, transform 0.1s ease",transform:(u=n[c])!=null&&u.trim()?"scale(1.05)":"scale(1)",boxShadow:(f=n[c])!=null&&f.trim()?"0 0 0 3px rgba(99,102,241,0.15)":"none"}},c)})})}function Rb({label:e,icon:t,onClick:r,disabled:n}){const[i,o]=m.useState(!1);return s.jsxs("button",{type:"button",onClick:r,disabled:n,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,width:"100%",padding:"12px 16px",minHeight:48,background:i?"rgba(0,183,79,.08)":"var(--bg-card)",border:i?"1px solid rgba(0,183,79,.35)":"1px solid var(--border)",borderRadius:14,cursor:n?"not-allowed":"pointer",color:"var(--text)",fontSize:14,fontWeight:700,transition:"all 0.2s ease",opacity:n?.5:1,boxShadow:i?"0 12px 28px rgba(0,0,0,.08)":"none"},children:[s.jsx("span",{style:{display:"flex",alignItems:"center"},children:t}),s.jsxs("span",{children:["Continue with ",e]})]})}function Pb({password:e}){if(!e)return null;const t=[{label:"8+ chars",ok:e.length>=8},{label:"Uppercase",ok:/[A-Z]/.test(e)},{label:"Lowercase",ok:/[a-z]/.test(e)},{label:"Number",ok:/\d/.test(e)}],r=t.filter(i=>i.ok).length,n=["var(--cv-danger)","var(--cv-danger)","#f59e0b","#10b981"];return s.jsxs("div",{style:{marginTop:6},children:[s.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:[0,1,2,3].map(i=>s.jsx("div",{style:{flex:1,height:3,borderRadius:99,background:i<r?n[r-1]:"var(--cv-border)",transition:"background 0.3s ease"}},i))}),s.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:t.map(i=>s.jsxs("span",{style:{fontSize:11,color:i.ok?"#10b981":"var(--cv-text-muted)",fontWeight:500},children:[i.ok?"✓":"○"," ",i.label]},i.label))})]})}const O={LOGIN:"login",REGISTER:"register",FORGOT:"forgot",VERIFY_OTP:"verify_otp",RESET_PASSWORD:"reset_password"};function Nb({onAuth:e,onBack:t,onNeedsVerification:r,initialMode:n="login"}){const[i,o]=m.useState(n==="login"?O.LOGIN:O.REGISTER),[a,c]=m.useState(!1),[l,d]=m.useState(""),[u,f]=m.useState(""),[h,x]=m.useState("forward"),[p,w]=m.useState(""),[S,v]=m.useState(""),[g,y]=m.useState(""),[k,C]=m.useState(""),[E,_]=m.useState(""),[I,D]=m.useState(""),[R,W]=m.useState(!0),[B,M]=m.useState(!1),[H,ie]=m.useState(!1),[de,me]=m.useState(0),[N,L]=m.useState(null),[z,Q]=m.useState(!1),[ee,qe]=m.useState(0),_e="0x4AAAAAADkh2aePP5UGcXcH",He=typeof window<"u"&&["localhost","127.0.0.1","::1"].includes(window.location.hostname),we=!!(!(_e==null?void 0:_e.startsWith("1x"))||He),co=As();Cb();const[st,Je]=m.useState({});m.useEffect(()=>{if(de<=0)return;const T=setTimeout(()=>me(fe=>fe-1),1e3);return()=>clearTimeout(T)},[de]);const jt=T=>{x("forward"),d(""),f(""),Je({}),o(T)},Ze=()=>{x("back"),d(""),f(""),Je({}),i===O.REGISTER||i===O.FORGOT?o(O.LOGIN):i===O.VERIFY_OTP?o(O.FORGOT):i===O.RESET_PASSWORD?o(O.VERIFY_OTP):t==null||t()},sn=()=>{L(null),Q(!1),qe(T=>T+1)},nr=async()=>{var fe,Or;const T={};if(Ka(p)||(T.email="Enter a valid email address"),S||(T.password="Password is required"),Object.keys(T).length){Je(T);return}if(we&&!z){d("Please complete the security check");return}c(!0),d("");try{const J=await Fe("/auth/login",{method:"POST",body:JSON.stringify({email:p,password:S,rememberMe:R,...we&&{turnstileToken:N}})});if(!(J!=null&&J.accessToken))throw new Error("Login failed. Please try again.");const ti=R?localStorage:sessionStorage;ti.setItem("cv_token",J.accessToken),J.refreshToken&&ti.setItem("cv_refreshToken",J.refreshToken),ti.setItem("cv_user",((fe=J.user)==null?void 0:fe.fullName)||p),e(J.accessToken,J.refreshToken,((Or=J.user)==null?void 0:Or.fullName)||p,J.user,R)}catch(J){d(Mr(J.message)),sn()}c(!1)},ia=async()=>{const T={};if((!k||k.trim().length<2)&&(T.fullName="Full name must be at least 2 characters"),Ka(p)||(T.email="Enter a valid email address"),vf(S)||(T.password="Password must be 8+ chars with uppercase, lowercase, and number"),S!==g&&(T.confirmPassword="Passwords do not match"),Object.keys(T).length){Je(T);return}if(we&&!z){d("Please complete the security check");return}c(!0),d("");try{await Fe("/auth/register",{method:"POST",body:JSON.stringify({email:p,password:S,fullName:k,...we&&{turnstileToken:N}})}),f("Account created! Check your email to verify your account, then sign in."),jt(O.LOGIN)}catch(fe){d(Mr(fe.message)),sn()}c(!1)},zt=async()=>{if(!Ka(p)){Je({email:"Enter a valid email address"});return}if(we&&!z){d("Please complete the security check");return}c(!0),d("");try{await Fe("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:p,...we&&{turnstileToken:N}})}),me(60),jt(O.VERIFY_OTP),f("A 6-digit OTP has been sent to your email.")}catch(T){d(Mr(T.message)),sn()}c(!1)},uo=async()=>{if(!(de>0)){c(!0),d("");try{await Fe("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:p})}),me(60),f("A new OTP has been sent.")}catch(T){d(Mr(T.message))}c(!1)}},Nr=async()=>{if(E.length!==6){d("Enter the 6-digit code from your email");return}c(!0),d("");try{const T=await Fe("/auth/verify-otp",{method:"POST",body:JSON.stringify({email:p,otp:E})});D(T.resetToken),jt(O.RESET_PASSWORD)}catch(T){d(Mr(T.message)),_("")}c(!1)},mt=async()=>{const T={};if(vf(S)||(T.password="Password must be 8+ chars with uppercase, lowercase, and number"),S!==g&&(T.confirmPassword="Passwords do not match"),Object.keys(T).length){Je(T);return}c(!0),d("");try{await Fe("/auth/reset-password",{method:"POST",body:JSON.stringify({token:I,newPassword:S})}),f("Password reset successfully! Please sign in."),v(""),y(""),jt(O.LOGIN)}catch(fe){d(Mr(fe.message))}c(!1)},ei=async T=>{var fe,Or;if(!co){d("Social login is not available. Please use email and password.");return}c(!0),d("");try{const J=await _b(T);if(!(J!=null&&J.accessToken))throw new Error("Social login failed.");localStorage.setItem("cv_token",J.accessToken),J.refreshToken&&localStorage.setItem("cv_refreshToken",J.refreshToken),localStorage.setItem("cv_user",((fe=J.user)==null?void 0:fe.fullName)||p),e(J.accessToken,J.refreshToken,((Or=J.user)==null?void 0:Or.fullName)||p,J.user,!0)}catch(J){d(Mr(J.message))}c(!1)},Ar={[O.LOGIN]:{title:"Welcome back",sub:`Sign in to ${Ee.name}`},[O.REGISTER]:{title:"Create account",sub:"Start your CloudVault journey"},[O.FORGOT]:{title:"Forgot password?",sub:"We'll send a code to your email"},[O.VERIFY_OTP]:{title:"Enter your code",sub:`Sent to ${p||"your email"}`},[O.RESET_PASSWORD]:{title:"New password",sub:"Choose a strong password"}},at=!a&&(!we||z||i===O.VERIFY_OTP||i===O.RESET_PASSWORD),an=()=>{i===O.LOGIN?nr():i===O.REGISTER?ia():i===O.FORGOT?zt():i===O.VERIFY_OTP?Nr():i===O.RESET_PASSWORD&&mt()},re={[O.LOGIN]:"Sign in",[O.REGISTER]:"Create account",[O.FORGOT]:"Send code",[O.VERIFY_OTP]:"Verify code",[O.RESET_PASSWORD]:"Reset password"}[i];return s.jsxs("div",{className:"auth-splash",children:[s.jsx("style",{children:Kr}),s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"auth-cloud-logo",style:{marginBottom:48},children:[s.jsx("div",{className:"auth-cloud-bg"}),s.jsx("div",{className:"auth-mega-mark",children:s.jsx("div",{className:"auth-mega-circle",children:s.jsx("img",{src:Ee.logoImage,alt:""})})})]}),s.jsxs("div",{className:"cv-auth-card",style:{width:"100%",maxWidth:440,background:"rgba(20, 20, 20, .96)",borderRadius:20,border:"1px solid rgba(255,255,255,.08)",boxShadow:"0 32px 80px rgba(0,0,0,0.55)",overflow:"hidden",position:"relative"},children:[s.jsx("div",{style:{height:3,background:"var(--cv-accent)",position:"absolute",top:0,left:0,right:0}}),s.jsxs("div",{style:{padding:"36px 32px 32px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:28,justifyContent:"center"},children:[s.jsx(Ib,{size:36}),s.jsx("div",{style:{fontSize:18,fontWeight:800,color:"var(--cv-text)",letterSpacing:"-0.02em"},children:Ee.name})]}),i!==O.LOGIN&&s.jsx("button",{type:"button",onClick:Ze,style:{display:"flex",alignItems:"center",gap:6,marginBottom:24,background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,padding:"4px 0",transition:"color 0.15s"},onMouseEnter:T=>T.currentTarget.style.color="var(--text)",onMouseLeave:T=>T.currentTarget.style.color="var(--text-muted)",children:"← Back"}),s.jsxs("div",{className:"cv-auth-step",style:{marginBottom:28},children:[s.jsx("h1",{style:{fontSize:26,fontWeight:800,color:"var(--text)",letterSpacing:"-0.03em",margin:"0 0 4px"},children:Ar[i].title}),s.jsx("p",{style:{fontSize:14,color:"var(--text-muted)",margin:0,fontWeight:500},children:Ar[i].sub})]}),(i===O.LOGIN||i===O.REGISTER)&&s.jsx("div",{style:{display:"flex",gap:4,background:"var(--surface-raised)",borderRadius:14,padding:4,marginBottom:24,border:"1px solid var(--border)"},children:[O.LOGIN,O.REGISTER].map(T=>s.jsx("button",{type:"button",onClick:()=>jt(T),style:{flex:1,padding:"9px 12px",borderRadius:10,border:"none",background:i===T?"var(--bg-card)":"transparent",color:i===T?"var(--text)":"var(--text-muted)",fontSize:14,fontWeight:i===T?700:500,cursor:"pointer",boxShadow:i===T?"0 2px 8px rgba(0,0,0,0.08)":"none",transition:"all 0.18s ease"},children:T===O.LOGIN?"Sign In":"Sign Up"},T))}),s.jsxs("div",{className:"cv-auth-step",style:{display:"flex",flexDirection:"column",gap:14},children:[i===O.REGISTER&&s.jsx(Oo,{label:"Full Name",value:k,onChange:T=>{C(T.target.value),Je(fe=>({...fe,fullName:""}))},placeholder:"Jane Smith",autoFocus:!0,error:st.fullName}),[O.LOGIN,O.REGISTER,O.FORGOT].includes(i)&&s.jsx(Oo,{label:"Email Address",type:"email",value:p,onChange:T=>{w(T.target.value),Je(fe=>({...fe,email:""}))},placeholder:"you@example.com",autoFocus:i===O.LOGIN||i===O.FORGOT,error:st.email}),[O.LOGIN,O.REGISTER,O.RESET_PASSWORD].includes(i)&&s.jsxs("div",{children:[s.jsxs("div",{style:{position:"relative"},children:[s.jsx(Oo,{label:"Password",type:B?"text":"password",value:S,onChange:T=>{v(T.target.value),Je(fe=>({...fe,password:""}))},placeholder:i===O.LOGIN?"Your password":"Min 8 chars, A-Z, 0-9",autoFocus:i===O.RESET_PASSWORD,error:st.password}),s.jsx("button",{type:"button",onClick:()=>M(T=>!T),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:st.password?-10:0},children:B?"Hide":"Show"})]}),(i===O.REGISTER||i===O.RESET_PASSWORD)&&s.jsx(Pb,{password:S})]}),[O.REGISTER,O.RESET_PASSWORD].includes(i)&&s.jsxs("div",{style:{position:"relative"},children:[s.jsx(Oo,{label:"Confirm Password",type:H?"text":"password",value:g,onChange:T=>{y(T.target.value),Je(fe=>({...fe,confirmPassword:""}))},placeholder:"Repeat your password",error:st.confirmPassword}),s.jsx("button",{type:"button",onClick:()=>ie(T=>!T),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:st.confirmPassword?-10:0},children:H?"Hide":"Show"})]}),i===O.VERIFY_OTP&&s.jsxs("div",{children:[s.jsx(Tb,{value:E,onChange:_}),s.jsxs("div",{style:{textAlign:"center",marginTop:12},children:[s.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:["Didn't get the code?"," "]}),s.jsx("button",{type:"button",onClick:uo,disabled:de>0||a,style:{background:"none",border:"none",cursor:de>0?"default":"pointer",color:de>0?"var(--text-muted)":"var(--accent-blue)",fontSize:13,fontWeight:600},children:de>0?`Resend in ${de}s`:"Resend"})]})]}),i===O.LOGIN&&s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},children:[s.jsx("input",{type:"checkbox",checked:R,onChange:T=>W(T.target.checked),style:{width:16,height:16,accentColor:"var(--accent-blue)"}}),s.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:500},children:"Remember me"})]}),s.jsx("button",{type:"button",onClick:()=>jt(O.FORGOT),style:{background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:13,fontWeight:600},children:"Forgot password?"})]})]}),l&&s.jsxs("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:12,color:"#ef4444",fontSize:13,fontWeight:500,lineHeight:1.5},children:[l,l.includes("verify your email")&&s.jsx("button",{type:"button",onClick:async()=>{try{await Fe("/auth/resend-verification",{method:"POST",body:JSON.stringify({email:p})}),f("Verification email resent. Check your inbox."),d("")}catch{}},style:{display:"block",marginTop:8,background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:12,fontWeight:600},children:"Resend verification email →"})]}),u&&s.jsx("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:12,color:"#10b981",fontSize:13,fontWeight:500,lineHeight:1.5},children:u}),we&&[O.LOGIN,O.REGISTER,O.FORGOT].includes(i)&&s.jsx("div",{style:{marginTop:16},children:s.jsx(Eb,{onVerified:T=>{L(T),Q(!0)},onError:T=>{d(T||"Security check failed. Please refresh."),Q(!1)},onExpire:()=>{L(null),Q(!1)}},ee)}),s.jsx("button",{type:"button",onClick:an,disabled:!at,style:{width:"100%",marginTop:20,padding:"14px 20px",background:at?"var(--cv-accent)":"var(--surface-raised)",color:at?"#fff":"var(--text-muted)",border:"none",borderRadius:14,fontSize:15,fontWeight:700,cursor:at?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"all 0.2s ease",boxShadow:at?"0 16px 34px rgba(217,0,7,0.28)":"none",transform:"translateY(0)"},onMouseEnter:T=>{at&&(T.currentTarget.style.transform="translateY(-1px)")},onMouseLeave:T=>{T.currentTarget.style.transform="translateY(0)"},children:a?s.jsx(jb,{}):re}),[O.LOGIN,O.REGISTER].includes(i)&&s.jsxs("div",{style:{marginTop:20},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:"or"}),s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[{id:"google",label:"Google",icon:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),s.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),s.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),s.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})},{id:"github",label:"GitHub",icon:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})})},{id:"microsoft",label:"Microsoft",icon:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M10 0H0v10h10V0z",fill:"#F25022"}),s.jsx("path",{d:"M21 0H11v10h10V0z",fill:"#7FBA00"}),s.jsx("path",{d:"M10 11H0v10h10V11z",fill:"#00A4EF"}),s.jsx("path",{d:"M21 11H11v10h10V11z",fill:"#FFB900"})]})}].map(T=>s.jsx(Rb,{label:T.label,icon:T.icon,disabled:a||!co,onClick:()=>ei(T.id)},T.id))})]}),i===O.LOGIN&&s.jsx("div",{style:{textAlign:"center",marginTop:20},children:s.jsx("button",{type:"button",onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:500},children:"← Back to home"})})]})]})]})}function Ab({file:e,token:t}){const[r,n]=m.useState([]),[i,o]=m.useState(!0),[a,c]=m.useState(""),[l,d]=m.useState(!1),[u,f]=m.useState(""),h=async()=>{try{const w=await Fe(`/comments/${e.id}`,{},t);n(w.data||[])}catch{f("Failed to load comments")}finally{o(!1)}};m.useEffect(()=>{h()},[e.id]);const x=async w=>{if(w.preventDefault(),!!a.trim()){d(!0);try{const S=await Fe(`/comments/${e.id}`,{method:"POST",body:JSON.stringify({content:a})},t);n([S.data,...r]),c("")}catch{f("Failed to post comment")}finally{d(!1)}}},p=async w=>{if(window.confirm("Delete this comment?"))try{await Fe(`/comments/${w}`,{method:"DELETE"},t),n(r.filter(S=>S.id!==w))}catch{alert("Failed to delete comment")}};return localStorage.getItem("cv_userId")||sessionStorage.getItem("cv_userId"),s.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",width:320,borderLeft:"1px solid var(--border)",background:"var(--bg-card)"},children:[s.jsx("div",{style:{padding:"16px",borderBottom:"1px solid var(--border)"},children:s.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:700},children:"Comments"})}),s.jsx("div",{style:{flex:1,overflowY:"auto",padding:"16px"},children:i?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading comments..."}):r.length===0?s.jsx("p",{style:{color:"var(--text-muted)",textAlign:"center",marginTop:20},children:"No comments yet. Be the first to start the discussion!"}):s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:r.map(w=>{var S,v,g,y,k,C,E;return s.jsxs("div",{style:{display:"flex",gap:12},children:[s.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"var(--accent)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:"bold"},children:((v=(S=w.user)==null?void 0:S.fullName)==null?void 0:v[0])||((k=(y=(g=w.user)==null?void 0:g.email)==null?void 0:y[0])==null?void 0:k.toUpperCase())||"?"}),s.jsxs("div",{style:{flex:1},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[s.jsx("span",{style:{fontWeight:600,fontSize:13},children:((C=w.user)==null?void 0:C.fullName)||((E=w.user)==null?void 0:E.email.split("@")[0])}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:Xn(w.createdAt)})]}),s.jsx("p",{style:{fontSize:13,marginTop:4,marginBottom:4,lineHeight:1.4,wordBreak:"break-word"},children:w.content}),s.jsx("button",{onClick:()=>p(w.id),style:{background:"none",border:"none",color:"var(--danger)",fontSize:11,cursor:"pointer",padding:0,opacity:.7},children:"Delete"})]})]},w.id)})})}),s.jsxs("div",{style:{padding:"16px",borderTop:"1px solid var(--border)"},children:[u&&s.jsx("p",{style:{color:"var(--danger)",fontSize:12,marginBottom:8},children:u}),s.jsxs("form",{onSubmit:x,style:{display:"flex",flexDirection:"column",gap:8},children:[s.jsx("textarea",{value:a,onChange:w=>c(w.target.value),placeholder:"Add a comment...",style:{width:"100%",minHeight:80,padding:12,borderRadius:8,background:"var(--bg-primary)",border:"1px solid var(--border)",color:"var(--text)",resize:"none",fontFamily:"var(--font)"}}),s.jsx("button",{type:"submit",disabled:l||!a.trim(),className:"btn-primary",style:{padding:"8px 16px",alignSelf:"flex-end",opacity:l||!a.trim()?.5:1},children:l?"Posting...":"Post"})]})]})]})}function Ob({size:e=22}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Mg({file:e,token:t,onClose:r,customFetchBlob:n}){const[i,o]=m.useState(null),[a,c]=m.useState(""),[l,d]=m.useState(!0),[u,f]=m.useState(""),[h,x]=m.useState(1),[p,w]=m.useState(0),[S,v]=m.useState(!1),[g,y]=m.useState(!1),k=Ry(e.mimeType);m.useEffect(()=>{let _=null,I=!1;return(async()=>{d(!0),f("");try{const D=n?await n():await Js(e.id,t,{disposition:"preview"});if(I)return;if(k==="text"){const R=await D.text();c(R)}else _=URL.createObjectURL(D),o(_)}catch(D){I||f(D.message||"Preview failed")}finally{I||d(!1)}})(),()=>{I=!0,_&&URL.revokeObjectURL(_)}},[e.id,t,k]);const C=(_,I,D=!1)=>s.jsx("button",{type:"button",onClick:I,disabled:D,style:{padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",cursor:D?"not-allowed":"pointer",fontFamily:"var(--font)",fontSize:12,fontWeight:600},children:_}),E=()=>l?s.jsx("div",{style:{padding:48,textAlign:"center"},children:s.jsx(Ob,{size:32})}):u?s.jsx("p",{style:{color:"var(--danger)",padding:24,textAlign:"center"},children:u}):k==="image"&&i?s.jsx("img",{src:i,alt:e.name,style:{maxWidth:S?"96vw":"80vw",maxHeight:S?"90vh":"70vh",borderRadius:12,transform:`scale(${h}) rotate(${p}deg)`,transition:"transform .2s ease"}}):k==="pdf"&&i?s.jsx("iframe",{src:i,title:e.name,style:{width:"75vw",height:"75vh",border:"none",borderRadius:12}}):k==="video"&&i?s.jsx("video",{src:i,controls:!0,style:{maxWidth:"80vw",maxHeight:"75vh",borderRadius:12}}):k==="audio"&&i?s.jsx("audio",{src:i,controls:!0,style:{width:"min(480px, 80vw)"}}):k==="text"?s.jsx("pre",{style:{maxWidth:"80vw",maxHeight:"70vh",overflow:"auto",padding:16,background:"var(--bg-card)",borderRadius:12,color:"var(--text)",fontSize:13,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:a}):s.jsx("p",{style:{padding:24,color:"var(--text-muted)"},children:"Preview not available for this file type."});return s.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:1e3,background:S?"#000":"rgba(0,0,0,.88)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)",animation:"fadeIn .2s ease"},children:s.jsxs("div",{onClick:_=>_.stopPropagation(),style:{background:S?"transparent":"var(--bg-primary)",borderRadius:S?0:20,border:S?"none":"1.5px solid var(--border)",maxWidth:S?"100vw":"95vw",maxHeight:S?"100vh":"95vh",width:S?"100%":void 0,height:S?"100%":void 0,overflow:"auto",padding:S?16:24,boxShadow:S?"none":"var(--shadow)",display:"flex",flexDirection:"row"},children:[s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",padding:S?16:24,overflow:"hidden"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:12},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:700,fontSize:16,flex:1,overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),k==="image"&&s.jsxs("div",{style:{display:"flex",gap:6},children:[C("−",()=>x(_=>Math.max(.25,_-.25))),C("+",()=>x(_=>Math.min(4,_+.25))),C("↻",()=>w(_=>(_+90)%360)),C(S?"⊡":"⛶",()=>v(_=>!_))]}),C("💬 Comments",()=>y(_=>!_)),s.jsx("button",{type:"button",onClick:r,style:{background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:8,color:"var(--text-secondary)",cursor:"pointer",width:32,height:32},children:"✕"})]}),s.jsx("div",{style:{display:"flex",justifyContent:"center",flex:1,overflow:"auto"},children:E()})]}),g&&!S&&s.jsx(Ab,{file:e,token:t})]})})}function Db({fileId:e,token:t,alt:r,mimeType:n}){const[i,o]=m.useState(null),[a,c]=m.useState(!1);return m.useEffect(()=>{if(!e||!t||!(n!=null&&n.startsWith("image/")))return;let l=null,d=!1;return Js(e,t,{disposition:"preview"}).then(u=>{d||(l=URL.createObjectURL(u),o(l))}).catch(()=>{d||c(!0)}),()=>{d=!0,l&&URL.revokeObjectURL(l)}},[e,t,n]),!(n!=null&&n.startsWith("image/"))||a?s.jsx("div",{style:{fontSize:44,display:"flex"},children:no(n)}):i?s.jsx("img",{src:i,alt:r,style:{width:"100%",height:"100%",objectFit:"cover"},onError:()=>c(!0)}):s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite"}})}function Lb({trashedFiles:e,trashedFolders:t,loading:r,onRestoreFile:n,onRestoreFolder:i,onPermanentDelete:o,onEmptyTrash:a,onBack:c}){return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:c,style:zb,children:"← Back to My Cloud"}),s.jsx("h2",{style:{color:"var(--text)",fontWeight:800,fontSize:22,marginTop:8},children:"Trash"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"Items in trash still count toward storage until permanently deleted."})]}),(e.length>0||t.length>0)&&s.jsx("button",{type:"button",onClick:a,style:Mb,children:"Empty trash"})]}),r?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading trash…"}):e.length===0&&t.length===0?s.jsxs("div",{style:{textAlign:"center",padding:64,color:"var(--text-muted)",border:"1px dashed var(--border)",borderRadius:16},children:[s.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🗑️"}),s.jsx("div",{style:{fontWeight:700},children:"Trash is empty"})]}):s.jsxs(s.Fragment,{children:[t.length>0&&s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FOLDERS"}),t.map(l=>s.jsx(yf,{icon:"📁",name:l.name,meta:"Folder",onRestore:()=>i(l.id)},l.id))]}),e.length>0&&s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FILES"}),e.map(l=>s.jsx(yf,{icon:no(l.mimeType),name:l.name,meta:`${Ie(l.size)} · ${Xn(l.trashedAt||l.deletedAt)}`,onRestore:()=>n(l.id),onDelete:()=>o(l)},l.id))]})]})]})}function yf({icon:e,name:t,meta:r,onRestore:n,onDelete:i}){return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,marginBottom:8},children:[s.jsx("span",{style:{fontSize:24},children:e}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:r})]}),s.jsx("button",{type:"button",onClick:n,style:xf,children:"Restore"}),i&&s.jsx("button",{type:"button",onClick:i,style:{...xf,color:"var(--danger)"},children:"Delete forever"})]})}const zb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"},Mb={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontFamily:"var(--font)"},xf={padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--font)"};function Fb({value:e,onChange:t,folders:r,disabledId:n}){const[i,o]=m.useState(!1),a=r.find(l=>l.id===e),c=a?"—".repeat(a.depth)+" "+a.name:"My Cloud (root)";return s.jsxs("div",{style:{position:"relative",marginTop:6,marginBottom:16},children:[s.jsxs("button",{type:"button",onClick:()=>o(!i),style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)",fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",textAlign:"left"},children:[s.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:c}),s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{flexShrink:0,transform:i?"rotate(180deg)":"none",transition:"0.2s",opacity:.5},children:s.jsx("path",{d:"M6 9l6 6 6-6"})})]}),i&&s.jsxs(s.Fragment,{children:[s.jsx("div",{onClick:()=>o(!1),style:{position:"fixed",inset:0,zIndex:90}}),s.jsxs("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,maxHeight:220,overflowY:"auto",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"0 12px 40px rgba(0,0,0,0.35)",zIndex:91,animation:"fadeIn 0.15s ease"},children:[s.jsxs("button",{onClick:()=>{t(""),o(!1)},style:{display:"block",width:"100%",padding:"10px 14px",border:"none",background:e===""?"rgba(59,130,246,0.12)":"transparent",color:"var(--text)",fontFamily:"var(--font)",fontSize:13,fontWeight:e===""?600:500,cursor:"pointer",textAlign:"left"},children:["📁 My Cloud (root)",e===""&&s.jsx("span",{style:{marginLeft:8,color:"var(--accent-blue)"},children:"✓"})]}),r.map(l=>s.jsxs("button",{disabled:l.id===n,onClick:()=>{t(l.id),o(!1)},style:{display:"block",width:"100%",padding:"10px 14px",paddingLeft:14+l.depth*16,border:"none",background:l.id===e?"rgba(59,130,246,0.12)":"transparent",color:l.id===n?"var(--text-muted)":"var(--text)",fontFamily:"var(--font)",fontSize:13,fontWeight:l.id===e?600:500,cursor:l.id===n?"not-allowed":"pointer",textAlign:"left",opacity:l.id===n?.4:1},children:["📁 ","—".repeat(l.depth)," ",l.name,l.id===e&&s.jsx("span",{style:{marginLeft:8,color:"var(--accent-blue)"},children:"✓"})]},l.id))]})]})]})}function Ub({file:e,mode:t,folders:r,currentFolderId:n,onConfirm:i,onCancel:o}){const[a,c]=m.useState(n||""),[l,d]=m.useState(e.name),u=Fg(r);return s.jsx("div",{onClick:o,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:f=>f.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(420px, 92vw)",animation:"scaleIn .2s ease"},children:[s.jsxs("h3",{style:{color:"var(--text)",fontWeight:700,fontSize:18,marginBottom:8},children:[t==="move"?"Move":"Copy"," file"]}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:20},children:e.name}),s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"Destination folder"}),s.jsx(Fb,{value:a,onChange:c,folders:u,disabledId:e.folderId}),t==="copy"&&s.jsxs(s.Fragment,{children:[s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"New name (optional)"}),s.jsx("input",{value:l,onChange:f=>d(f.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"}})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:o,style:Ug,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>i({targetFolderId:a||null,newName:t==="copy"?l:void 0}),style:Bb,children:t==="move"?"Move":"Copy"})]})]})})}function Fg(e,t=0){var n;const r=[];for(const i of e)r.push({...i,depth:t}),(n=i.children)!=null&&n.length&&r.push(...Fg(i.children,t+1));return r}const Ug={padding:"10px 20px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},Bb={...Ug,border:"none",background:"var(--accent)",color:"#fff"};function Wb({file:e,allTags:t,onSave:r,onCancel:n}){const[i,o]=m.useState(e.tags||[]),[a,c]=m.useState(""),l=d=>{const u=d.trim().toLowerCase();!u||i.includes(u)||i.length>=20||(o([...i,u]),c(""))};return s.jsx("div",{onClick:n,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:d=>d.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(440px, 92vw)"},children:[s.jsx("h3",{style:{color:"var(--text)",fontWeight:700,marginBottom:4},children:"Edit tags"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:16},children:e.name}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12},children:i.map(d=>s.jsxs("span",{style:{background:"rgba(240,22,58,.15)",color:"var(--accent)",padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[d,s.jsx("button",{type:"button",onClick:()=>o(i.filter(u=>u!==d)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:"×"})]},d))}),s.jsx("input",{value:a,onChange:d=>c(d.target.value),onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),l(a))},placeholder:"Add tag and press Enter",style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",marginBottom:12}}),t.length>0&&s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6},children:"Suggestions"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:t.filter(d=>!i.includes(d)).slice(0,12).map(d=>s.jsxs("button",{type:"button",onClick:()=>l(d),style:{padding:"4px 10px",borderRadius:20,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",fontSize:12,cursor:"pointer"},children:["+ ",d]},d))})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:n,style:Bg,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>r(i),style:$b,children:"Save tags"})]})]})})}const Bg={padding:"10px 18px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},$b={...Bg,border:"none",background:"var(--accent)",color:"#fff"};var Hb=Object.defineProperty,Os=Object.getOwnPropertySymbols,Wg=Object.prototype.hasOwnProperty,$g=Object.prototype.propertyIsEnumerable,wf=(e,t,r)=>t in e?Hb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,nc=(e,t)=>{for(var r in t||(t={}))Wg.call(t,r)&&wf(e,r,t[r]);if(Os)for(var r of Os(t))$g.call(t,r)&&wf(e,r,t[r]);return e},ic=(e,t)=>{var r={};for(var n in e)Wg.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Os)for(var n of Os(e))t.indexOf(n)<0&&$g.call(e,n)&&(r[n]=e[n]);return r};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var tn;(e=>{const t=class V{constructor(l,d,u,f){if(this.version=l,this.errorCorrectionLevel=d,this.modules=[],this.isFunction=[],l<V.MIN_VERSION||l>V.MAX_VERSION)throw new RangeError("Version value out of range");if(f<-1||f>7)throw new RangeError("Mask value out of range");this.size=l*4+17;let h=[];for(let p=0;p<this.size;p++)h.push(!1);for(let p=0;p<this.size;p++)this.modules.push(h.slice()),this.isFunction.push(h.slice());this.drawFunctionPatterns();const x=this.addEccAndInterleave(u);if(this.drawCodewords(x),f==-1){let p=1e9;for(let w=0;w<8;w++){this.applyMask(w),this.drawFormatBits(w);const S=this.getPenaltyScore();S<p&&(f=w,p=S),this.applyMask(w)}}i(0<=f&&f<=7),this.mask=f,this.applyMask(f),this.drawFormatBits(f),this.isFunction=[]}static encodeText(l,d){const u=e.QrSegment.makeSegments(l);return V.encodeSegments(u,d)}static encodeBinary(l,d){const u=e.QrSegment.makeBytes(l);return V.encodeSegments([u],d)}static encodeSegments(l,d,u=1,f=40,h=-1,x=!0){if(!(V.MIN_VERSION<=u&&u<=f&&f<=V.MAX_VERSION)||h<-1||h>7)throw new RangeError("Invalid value");let p,w;for(p=u;;p++){const y=V.getNumDataCodewords(p,d)*8,k=a.getTotalBits(l,p);if(k<=y){w=k;break}if(p>=f)throw new RangeError("Data too long")}for(const y of[V.Ecc.MEDIUM,V.Ecc.QUARTILE,V.Ecc.HIGH])x&&w<=V.getNumDataCodewords(p,y)*8&&(d=y);let S=[];for(const y of l){r(y.mode.modeBits,4,S),r(y.numChars,y.mode.numCharCountBits(p),S);for(const k of y.getData())S.push(k)}i(S.length==w);const v=V.getNumDataCodewords(p,d)*8;i(S.length<=v),r(0,Math.min(4,v-S.length),S),r(0,(8-S.length%8)%8,S),i(S.length%8==0);for(let y=236;S.length<v;y^=253)r(y,8,S);let g=[];for(;g.length*8<S.length;)g.push(0);return S.forEach((y,k)=>g[k>>>3]|=y<<7-(k&7)),new V(p,d,g,h)}getModule(l,d){return 0<=l&&l<this.size&&0<=d&&d<this.size&&this.modules[d][l]}getModules(){return this.modules}drawFunctionPatterns(){for(let u=0;u<this.size;u++)this.setFunctionModule(6,u,u%2==0),this.setFunctionModule(u,6,u%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const l=this.getAlignmentPatternPositions(),d=l.length;for(let u=0;u<d;u++)for(let f=0;f<d;f++)u==0&&f==0||u==0&&f==d-1||u==d-1&&f==0||this.drawAlignmentPattern(l[u],l[f]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(l){const d=this.errorCorrectionLevel.formatBits<<3|l;let u=d;for(let h=0;h<10;h++)u=u<<1^(u>>>9)*1335;const f=(d<<10|u)^21522;i(f>>>15==0);for(let h=0;h<=5;h++)this.setFunctionModule(8,h,n(f,h));this.setFunctionModule(8,7,n(f,6)),this.setFunctionModule(8,8,n(f,7)),this.setFunctionModule(7,8,n(f,8));for(let h=9;h<15;h++)this.setFunctionModule(14-h,8,n(f,h));for(let h=0;h<8;h++)this.setFunctionModule(this.size-1-h,8,n(f,h));for(let h=8;h<15;h++)this.setFunctionModule(8,this.size-15+h,n(f,h));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let l=this.version;for(let u=0;u<12;u++)l=l<<1^(l>>>11)*7973;const d=this.version<<12|l;i(d>>>18==0);for(let u=0;u<18;u++){const f=n(d,u),h=this.size-11+u%3,x=Math.floor(u/3);this.setFunctionModule(h,x,f),this.setFunctionModule(x,h,f)}}drawFinderPattern(l,d){for(let u=-4;u<=4;u++)for(let f=-4;f<=4;f++){const h=Math.max(Math.abs(f),Math.abs(u)),x=l+f,p=d+u;0<=x&&x<this.size&&0<=p&&p<this.size&&this.setFunctionModule(x,p,h!=2&&h!=4)}}drawAlignmentPattern(l,d){for(let u=-2;u<=2;u++)for(let f=-2;f<=2;f++)this.setFunctionModule(l+f,d+u,Math.max(Math.abs(f),Math.abs(u))!=1)}setFunctionModule(l,d,u){this.modules[d][l]=u,this.isFunction[d][l]=!0}addEccAndInterleave(l){const d=this.version,u=this.errorCorrectionLevel;if(l.length!=V.getNumDataCodewords(d,u))throw new RangeError("Invalid argument");const f=V.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][d],h=V.ECC_CODEWORDS_PER_BLOCK[u.ordinal][d],x=Math.floor(V.getNumRawDataModules(d)/8),p=f-x%f,w=Math.floor(x/f);let S=[];const v=V.reedSolomonComputeDivisor(h);for(let y=0,k=0;y<f;y++){let C=l.slice(k,k+w-h+(y<p?0:1));k+=C.length;const E=V.reedSolomonComputeRemainder(C,v);y<p&&C.push(0),S.push(C.concat(E))}let g=[];for(let y=0;y<S[0].length;y++)S.forEach((k,C)=>{(y!=w-h||C>=p)&&g.push(k[y])});return i(g.length==x),g}drawCodewords(l){if(l.length!=Math.floor(V.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let d=0;for(let u=this.size-1;u>=1;u-=2){u==6&&(u=5);for(let f=0;f<this.size;f++)for(let h=0;h<2;h++){const x=u-h,w=(u+1&2)==0?this.size-1-f:f;!this.isFunction[w][x]&&d<l.length*8&&(this.modules[w][x]=n(l[d>>>3],7-(d&7)),d++)}}i(d==l.length*8)}applyMask(l){if(l<0||l>7)throw new RangeError("Mask value out of range");for(let d=0;d<this.size;d++)for(let u=0;u<this.size;u++){let f;switch(l){case 0:f=(u+d)%2==0;break;case 1:f=d%2==0;break;case 2:f=u%3==0;break;case 3:f=(u+d)%3==0;break;case 4:f=(Math.floor(u/3)+Math.floor(d/2))%2==0;break;case 5:f=u*d%2+u*d%3==0;break;case 6:f=(u*d%2+u*d%3)%2==0;break;case 7:f=((u+d)%2+u*d%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[d][u]&&f&&(this.modules[d][u]=!this.modules[d][u])}}getPenaltyScore(){let l=0;for(let h=0;h<this.size;h++){let x=!1,p=0,w=[0,0,0,0,0,0,0];for(let S=0;S<this.size;S++)this.modules[h][S]==x?(p++,p==5?l+=V.PENALTY_N1:p>5&&l++):(this.finderPenaltyAddHistory(p,w),x||(l+=this.finderPenaltyCountPatterns(w)*V.PENALTY_N3),x=this.modules[h][S],p=1);l+=this.finderPenaltyTerminateAndCount(x,p,w)*V.PENALTY_N3}for(let h=0;h<this.size;h++){let x=!1,p=0,w=[0,0,0,0,0,0,0];for(let S=0;S<this.size;S++)this.modules[S][h]==x?(p++,p==5?l+=V.PENALTY_N1:p>5&&l++):(this.finderPenaltyAddHistory(p,w),x||(l+=this.finderPenaltyCountPatterns(w)*V.PENALTY_N3),x=this.modules[S][h],p=1);l+=this.finderPenaltyTerminateAndCount(x,p,w)*V.PENALTY_N3}for(let h=0;h<this.size-1;h++)for(let x=0;x<this.size-1;x++){const p=this.modules[h][x];p==this.modules[h][x+1]&&p==this.modules[h+1][x]&&p==this.modules[h+1][x+1]&&(l+=V.PENALTY_N2)}let d=0;for(const h of this.modules)d=h.reduce((x,p)=>x+(p?1:0),d);const u=this.size*this.size,f=Math.ceil(Math.abs(d*20-u*10)/u)-1;return i(0<=f&&f<=9),l+=f*V.PENALTY_N4,i(0<=l&&l<=2568888),l}getAlignmentPatternPositions(){if(this.version==1)return[];{const l=Math.floor(this.version/7)+2,d=this.version==32?26:Math.ceil((this.version*4+4)/(l*2-2))*2;let u=[6];for(let f=this.size-7;u.length<l;f-=d)u.splice(1,0,f);return u}}static getNumRawDataModules(l){if(l<V.MIN_VERSION||l>V.MAX_VERSION)throw new RangeError("Version number out of range");let d=(16*l+128)*l+64;if(l>=2){const u=Math.floor(l/7)+2;d-=(25*u-10)*u-55,l>=7&&(d-=36)}return i(208<=d&&d<=29648),d}static getNumDataCodewords(l,d){return Math.floor(V.getNumRawDataModules(l)/8)-V.ECC_CODEWORDS_PER_BLOCK[d.ordinal][l]*V.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][l]}static reedSolomonComputeDivisor(l){if(l<1||l>255)throw new RangeError("Degree out of range");let d=[];for(let f=0;f<l-1;f++)d.push(0);d.push(1);let u=1;for(let f=0;f<l;f++){for(let h=0;h<d.length;h++)d[h]=V.reedSolomonMultiply(d[h],u),h+1<d.length&&(d[h]^=d[h+1]);u=V.reedSolomonMultiply(u,2)}return d}static reedSolomonComputeRemainder(l,d){let u=d.map(f=>0);for(const f of l){const h=f^u.shift();u.push(0),d.forEach((x,p)=>u[p]^=V.reedSolomonMultiply(x,h))}return u}static reedSolomonMultiply(l,d){if(l>>>8||d>>>8)throw new RangeError("Byte out of range");let u=0;for(let f=7;f>=0;f--)u=u<<1^(u>>>7)*285,u^=(d>>>f&1)*l;return i(u>>>8==0),u}finderPenaltyCountPatterns(l){const d=l[1];i(d<=this.size*3);const u=d>0&&l[2]==d&&l[3]==d*3&&l[4]==d&&l[5]==d;return(u&&l[0]>=d*4&&l[6]>=d?1:0)+(u&&l[6]>=d*4&&l[0]>=d?1:0)}finderPenaltyTerminateAndCount(l,d,u){return l&&(this.finderPenaltyAddHistory(d,u),d=0),d+=this.size,this.finderPenaltyAddHistory(d,u),this.finderPenaltyCountPatterns(u)}finderPenaltyAddHistory(l,d){d[0]==0&&(l+=this.size),d.pop(),d.unshift(l)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;function r(c,l,d){if(l<0||l>31||c>>>l)throw new RangeError("Value out of range");for(let u=l-1;u>=0;u--)d.push(c>>>u&1)}function n(c,l){return(c>>>l&1)!=0}function i(c){if(!c)throw new Error("Assertion error")}const o=class ve{constructor(l,d,u){if(this.mode=l,this.numChars=d,this.bitData=u,d<0)throw new RangeError("Invalid argument");this.bitData=u.slice()}static makeBytes(l){let d=[];for(const u of l)r(u,8,d);return new ve(ve.Mode.BYTE,l.length,d)}static makeNumeric(l){if(!ve.isNumeric(l))throw new RangeError("String contains non-numeric characters");let d=[];for(let u=0;u<l.length;){const f=Math.min(l.length-u,3);r(parseInt(l.substring(u,u+f),10),f*3+1,d),u+=f}return new ve(ve.Mode.NUMERIC,l.length,d)}static makeAlphanumeric(l){if(!ve.isAlphanumeric(l))throw new RangeError("String contains unencodable characters in alphanumeric mode");let d=[],u;for(u=0;u+2<=l.length;u+=2){let f=ve.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u))*45;f+=ve.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u+1)),r(f,11,d)}return u<l.length&&r(ve.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u)),6,d),new ve(ve.Mode.ALPHANUMERIC,l.length,d)}static makeSegments(l){return l==""?[]:ve.isNumeric(l)?[ve.makeNumeric(l)]:ve.isAlphanumeric(l)?[ve.makeAlphanumeric(l)]:[ve.makeBytes(ve.toUtf8ByteArray(l))]}static makeEci(l){let d=[];if(l<0)throw new RangeError("ECI assignment value out of range");if(l<128)r(l,8,d);else if(l<16384)r(2,2,d),r(l,14,d);else if(l<1e6)r(6,3,d),r(l,21,d);else throw new RangeError("ECI assignment value out of range");return new ve(ve.Mode.ECI,0,d)}static isNumeric(l){return ve.NUMERIC_REGEX.test(l)}static isAlphanumeric(l){return ve.ALPHANUMERIC_REGEX.test(l)}getData(){return this.bitData.slice()}static getTotalBits(l,d){let u=0;for(const f of l){const h=f.mode.numCharCountBits(d);if(f.numChars>=1<<h)return 1/0;u+=4+h+f.bitData.length}return u}static toUtf8ByteArray(l){l=encodeURI(l);let d=[];for(let u=0;u<l.length;u++)l.charAt(u)!="%"?d.push(l.charCodeAt(u)):(d.push(parseInt(l.substring(u+1,u+3),16)),u+=2);return d}};o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let a=o;e.QrSegment=o})(tn||(tn={}));(e=>{(t=>{const r=class{constructor(i,o){this.ordinal=i,this.formatBits=o}};r.LOW=new r(0,1),r.MEDIUM=new r(1,0),r.QUARTILE=new r(2,3),r.HIGH=new r(3,2),t.Ecc=r})(e.QrCode||(e.QrCode={}))})(tn||(tn={}));(e=>{(t=>{const r=class{constructor(i,o){this.modeBits=i,this.numBitsCharCount=o}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};r.NUMERIC=new r(1,[10,12,14]),r.ALPHANUMERIC=new r(2,[9,11,13]),r.BYTE=new r(4,[8,16,16]),r.KANJI=new r(8,[8,10,12]),r.ECI=new r(7,[0,0,0]),t.Mode=r})(e.QrSegment||(e.QrSegment={}))})(tn||(tn={}));var _n=tn;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Vb={L:_n.QrCode.Ecc.LOW,M:_n.QrCode.Ecc.MEDIUM,Q:_n.QrCode.Ecc.QUARTILE,H:_n.QrCode.Ecc.HIGH},Hg=128,Vg="L",Yg="#FFFFFF",Gg="#000000",Kg=!1,Qg=1,Yb=4,Gb=0,Kb=.1;function Xg(e,t=0){const r=[];return e.forEach(function(n,i){let o=null;n.forEach(function(a,c){if(!a&&o!==null){r.push(`M${o+t} ${i+t}h${c-o}v1H${o+t}z`),o=null;return}if(c===n.length-1){if(!a)return;o===null?r.push(`M${c+t},${i+t} h1v1H${c+t}z`):r.push(`M${o+t},${i+t} h${c+1-o}v1H${o+t}z`);return}a&&o===null&&(o=c)})}),r.join("")}function qg(e,t){return e.slice().map((r,n)=>n<t.y||n>=t.y+t.h?r:r.map((i,o)=>o<t.x||o>=t.x+t.w?i:!1))}function Qb(e,t,r,n){if(n==null)return null;const i=e.length+r*2,o=Math.floor(t*Kb),a=i/t,c=(n.width||o)*a,l=(n.height||o)*a,d=n.x==null?e.length/2-c/2:n.x*a,u=n.y==null?e.length/2-l/2:n.y*a,f=n.opacity==null?1:n.opacity;let h=null;if(n.excavate){let p=Math.floor(d),w=Math.floor(u),S=Math.ceil(c+d-p),v=Math.ceil(l+u-w);h={x:p,y:w,w:S,h:v}}const x=n.crossOrigin;return{x:d,y:u,h:l,w:c,excavation:h,opacity:f,crossOrigin:x}}function Xb(e,t){return t!=null?Math.max(Math.floor(t),0):e?Yb:Gb}function Jg({value:e,level:t,minVersion:r,includeMargin:n,marginSize:i,imageSettings:o,size:a,boostLevel:c}){let l=U.useMemo(()=>{const p=(Array.isArray(e)?e:[e]).reduce((w,S)=>(w.push(..._n.QrSegment.makeSegments(S)),w),[]);return _n.QrCode.encodeSegments(p,Vb[t],r,void 0,void 0,c)},[e,t,r,c]);const{cells:d,margin:u,numCells:f,calculatedImageSettings:h}=U.useMemo(()=>{let x=l.getModules();const p=Xb(n,i),w=x.length+p*2,S=Qb(x,a,p,o);return{cells:x,margin:p,numCells:w,calculatedImageSettings:S}},[l,a,o,n,i]);return{qrcode:l,margin:u,cells:d,numCells:f,calculatedImageSettings:h}}var qb=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),Jb=U.forwardRef(function(t,r){const n=t,{value:i,size:o=Hg,level:a=Vg,bgColor:c=Yg,fgColor:l=Gg,includeMargin:d=Kg,minVersion:u=Qg,boostLevel:f,marginSize:h,imageSettings:x}=n,w=ic(n,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:S}=w,v=ic(w,["style"]),g=x==null?void 0:x.src,y=U.useRef(null),k=U.useRef(null),C=U.useCallback(H=>{y.current=H,typeof r=="function"?r(H):r&&(r.current=H)},[r]),[E,_]=U.useState(!1),{margin:I,cells:D,numCells:R,calculatedImageSettings:W}=Jg({value:i,level:a,minVersion:u,boostLevel:f,includeMargin:d,marginSize:h,imageSettings:x,size:o});U.useEffect(()=>{if(y.current!=null){const H=y.current,ie=H.getContext("2d");if(!ie)return;let de=D;const me=k.current,N=W!=null&&me!==null&&me.complete&&me.naturalHeight!==0&&me.naturalWidth!==0;N&&W.excavation!=null&&(de=qg(D,W.excavation));const L=window.devicePixelRatio||1;H.height=H.width=o*L;const z=o/R*L;ie.scale(z,z),ie.fillStyle=c,ie.fillRect(0,0,R,R),ie.fillStyle=l,qb?ie.fill(new Path2D(Xg(de,I))):D.forEach(function(Q,ee){Q.forEach(function(qe,_e){qe&&ie.fillRect(_e+I,ee+I,1,1)})}),W&&(ie.globalAlpha=W.opacity),N&&ie.drawImage(me,W.x+I,W.y+I,W.w,W.h)}}),U.useEffect(()=>{_(!1)},[g]);const B=nc({height:o,width:o},S);let M=null;return g!=null&&(M=U.createElement("img",{src:g,key:g,style:{display:"none"},onLoad:()=>{_(!0)},ref:k,crossOrigin:W==null?void 0:W.crossOrigin})),U.createElement(U.Fragment,null,U.createElement("canvas",nc({style:B,height:o,width:o,ref:C,role:"img"},v)),M)});Jb.displayName="QRCodeCanvas";var Zg=U.forwardRef(function(t,r){const n=t,{value:i,size:o=Hg,level:a=Vg,bgColor:c=Yg,fgColor:l=Gg,includeMargin:d=Kg,minVersion:u=Qg,boostLevel:f,title:h,marginSize:x,imageSettings:p}=n,w=ic(n,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:S,cells:v,numCells:g,calculatedImageSettings:y}=Jg({value:i,level:a,minVersion:u,boostLevel:f,includeMargin:d,marginSize:x,imageSettings:p,size:o});let k=v,C=null;p!=null&&y!=null&&(y.excavation!=null&&(k=qg(v,y.excavation)),C=U.createElement("image",{href:p.src,height:y.h,width:y.w,x:y.x+S,y:y.y+S,preserveAspectRatio:"none",opacity:y.opacity,crossOrigin:y.crossOrigin}));const E=Xg(k,S);return U.createElement("svg",nc({height:o,width:o,viewBox:`0 0 ${g} ${g}`,ref:r,role:"img"},w),!!h&&U.createElement("title",null,h),U.createElement("path",{fill:c,d:`M0,0 h${g}v${g}H0z`,shapeRendering:"crispEdges"}),U.createElement("path",{fill:l,d:E,shapeRendering:"crispEdges"}),C)});Zg.displayName="QRCodeSVG";/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=e=>{const t=e2(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},r2=m.createContext({}),n2=()=>m.useContext(r2),i2=m.forwardRef(({color:e,size:t,strokeWidth:r,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...c},l)=>{const{size:d=24,strokeWidth:u=2,absoluteStrokeWidth:f=!1,color:h="currentColor",className:x=""}=n2()??{},p=n??f?Number(r??u)*24/Number(t??d):r??u;return m.createElement("svg",{ref:l,...Qa,width:t??d??Qa.width,height:t??d??Qa.height,stroke:e??h,strokeWidth:p,className:em("lucide",x,i),...!o&&!t2(c)&&{"aria-hidden":"true"},...c},[...a.map(([w,S])=>m.createElement(w,S)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=(e,t)=>{const r=m.forwardRef(({className:n,...i},o)=>m.createElement(i2,{ref:o,iconNode:t,className:em(`lucide-${Zb(bf(e))}`,`lucide-${e}`,n),...i}));return r.displayName=bf(e),r};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],s2=na("check",o2);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],l2=na("copy",a2);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],d2=na("mail",c2);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],f2=na("x",u2),h2=()=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"}),s.jsx("path",{d:"M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"})]}),p2=()=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"})}),g2=()=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),s.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),s.jsx("circle",{cx:"4",cy:"4",r:"2"})]});function m2(e){if(!e)return"Untitled";const t=e.match(/name=['"](.*?)['"]/);return t?t[1]:(e.startsWith("[")&&e.includes("("),e)}const Xa=[{value:"view",label:"View only",icon:"👁"},{value:"download",label:"View & Download",icon:"📥"},{value:"edit",label:"Edit metadata",icon:"✏️"}];function v2({value:e,onChange:t}){const[r,n]=m.useState(!1),i=Xa.find(o=>o.value===e)||Xa[0];return s.jsxs("div",{style:{position:"relative"},children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Permission"}),s.jsxs("button",{type:"button",onClick:()=>n(!r),style:{width:"100%",padding:"12px 14px",background:"var(--bg-card-hover, rgba(255,255,255,0.05))",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:"var(--font, inherit)",fontSize:14,fontWeight:500,textAlign:"left"},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{children:i.icon}),s.jsx("span",{children:i.label})]}),s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{transform:r?"rotate(180deg)":"none",transition:"0.2s"},children:s.jsx("path",{d:"M6 9l6 6 6-6"})})]}),r&&s.jsxs(s.Fragment,{children:[s.jsx("div",{onClick:()=>n(!1),style:{position:"fixed",inset:0,zIndex:50}}),s.jsx("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,right:0,background:"var(--bg-card, #1a1a1a)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"0 16px 48px rgba(0,0,0,0.4)",zIndex:51,overflow:"hidden",animation:"fadeIn 0.15s ease"},children:Xa.map(o=>s.jsxs("button",{onClick:()=>{t(o.value),n(!1)},style:{display:"flex",alignItems:"center",gap:10,width:"100%",padding:"13px 16px",border:"none",background:o.value===e?"rgba(59,130,246,0.12)":"transparent",color:"var(--text)",fontFamily:"var(--font, inherit)",fontSize:14,fontWeight:o.value===e?600:500,cursor:"pointer",textAlign:"left",transition:"background 0.15s"},onMouseEnter:a=>{o.value!==e&&(a.currentTarget.style.background="rgba(255,255,255,0.06)")},onMouseLeave:a=>{a.currentTarget.style.background=o.value===e?"rgba(59,130,246,0.12)":"transparent"},children:[s.jsx("span",{style:{fontSize:16},children:o.icon}),s.jsx("span",{children:o.label}),o.value===e&&s.jsx("span",{style:{marginLeft:"auto",color:"var(--accent-blue, #3b82f6)"},children:"✓"})]},o.value))})]})]})}function y2({file:e,onShare:t,onCancel:r}){const[n,i]=m.useState("link"),[o,a]=m.useState("view"),[c,l]=m.useState(""),[d,u]=m.useState(""),[f,h]=m.useState(""),[x,p]=m.useState(""),[w,S]=m.useState(!1),[v,g]=m.useState(""),[y,k]=m.useState(!1),[C,E]=m.useState("settings"),_=async()=>{var R;S(!0);try{const W={shareType:n,permission:o,visibility:"protected",...d&&{password:d},...f&&{expiresAt:new Date(f).toISOString()},...x&&{maxViews:Number(x)},...n==="email"&&{recipientEmail:c,email:c}},B=await t(W),M=(B==null?void 0:B.shareUrl)||((R=B==null?void 0:B.data)==null?void 0:R.shareUrl);M&&g(M)}finally{S(!1)}},I=async()=>{var R;v&&(await((R=navigator.clipboard)==null?void 0:R.writeText(v)),k(!0),setTimeout(()=>k(!1),2e3))},D=R=>{if(!v)return;const W=encodeURIComponent(`Check out this file on CloudVault: ${e.name}`),B=encodeURIComponent(v),M={twitter:`https://twitter.com/intent/tweet?text=${W}&url=${B}`,whatsapp:`https://wa.me/?text=${W}%20${B}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${B}`,email:`mailto:?subject=${encodeURIComponent(`Shared File: ${e.name}`)}&body=${W}%0A${B}`};window.open(M[R],"_blank")};return s.jsx("div",{className:"share-modal-backdrop",onClick:r,style:{display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",zIndex:1e3},children:s.jsxs("div",{onClick:R=>R.stopPropagation(),style:{background:"var(--surface)",borderRadius:24,width:"100%",maxWidth:500,overflow:"hidden",boxShadow:"0 24px 80px rgba(0,0,0,0.4)",border:"1px solid var(--border)"},children:[s.jsxs("div",{style:{padding:"24px 32px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(255,255,255,0.02)"},children:[s.jsxs("div",{style:{minWidth:0,flex:1},children:[s.jsxs("h3",{style:{margin:0,fontSize:18,fontWeight:700,color:"var(--text)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:['Share "',m2(e.name),'"']}),s.jsx("p",{style:{margin:"4px 0 0",fontSize:13,color:"var(--text-muted)"},children:"Securely distribute this file"})]}),s.jsx("button",{onClick:r,style:{background:"transparent",border:"none",color:"var(--text-muted)",cursor:"pointer",padding:8,borderRadius:50},children:s.jsx(f2,{size:20})})]}),s.jsx("div",{style:{padding:"32px"},children:v?s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",gap:16,marginBottom:24},children:[s.jsx("button",{onClick:()=>E("settings"),style:{flex:1,padding:"10px",borderRadius:12,background:C==="settings"?"var(--accent-blue)":"transparent",color:C==="settings"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:C==="settings"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Link"}),s.jsx("button",{onClick:()=>E("qr"),style:{flex:1,padding:"10px",borderRadius:12,background:C==="qr"?"var(--accent-blue)":"transparent",color:C==="qr"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:C==="qr"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"QR Code"}),s.jsx("button",{onClick:()=>E("social"),style:{flex:1,padding:"10px",borderRadius:12,background:C==="social"?"var(--accent-blue)":"transparent",color:C==="social"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:C==="social"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Social"})]}),C==="settings"&&s.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[s.jsxs("div",{style:{padding:20,background:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",borderRadius:16,marginBottom:24},children:[s.jsx("p",{style:{margin:"0 0 12px",fontSize:13,fontWeight:700,color:"var(--accent-blue)",textTransform:"uppercase",letterSpacing:.5},children:"Share Link Created"}),s.jsx("div",{style:{fontSize:14,wordBreak:"break-all",color:"var(--text)",lineHeight:1.5,marginBottom:16},children:v}),s.jsxs("button",{onClick:I,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",padding:14,borderRadius:12,background:y?"#10b981":"var(--accent-blue)",color:"#fff",border:"none",fontWeight:700,cursor:"pointer",transition:"0.2s"},children:[y?s.jsx(s2,{size:18}):s.jsx(l2,{size:18}),y?"Copied to Clipboard":"Copy Link"]})]}),s.jsx("button",{onClick:()=>g(""),style:{width:"100%",padding:14,background:"transparent",color:"var(--text)",border:"1px solid var(--border)",borderRadius:12,fontWeight:600,cursor:"pointer"},children:"Create another share"})]}),C==="qr"&&s.jsxs("div",{style:{animation:"fadeIn 0.3s ease",textAlign:"center"},children:[s.jsx("div",{style:{display:"inline-block",background:"#fff",padding:24,borderRadius:24,marginBottom:24,boxShadow:"0 10px 40px rgba(0,0,0,0.1)"},children:s.jsx(Zg,{value:v,size:200,level:"H",includeMargin:!1})}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,margin:0},children:"Scan this code to instantly open the shared file on your mobile device."})]}),C==="social"&&s.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:24,textAlign:"center"},children:"Share directly to your favorite platforms"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsxs("button",{onClick:()=>D("twitter"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(29, 161, 242, 0.1)",color:"#1da1f2",border:"1px solid rgba(29, 161, 242, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(p2,{})," Twitter"]}),s.jsxs("button",{onClick:()=>D("whatsapp"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(37, 211, 102, 0.1)",color:"#25d366",border:"1px solid rgba(37, 211, 102, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(h2,{})," WhatsApp"]}),s.jsxs("button",{onClick:()=>D("linkedin"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(0, 119, 181, 0.1)",color:"#0077b5",border:"1px solid rgba(0, 119, 181, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(g2,{})," LinkedIn"]}),s.jsxs("button",{onClick:()=>D("email"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(255, 255, 255, 0.05)",color:"var(--text)",border:"1px solid var(--border)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[s.jsx(d2,{size:20})," Email App"]})]})]})]}):s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Share Method"}),s.jsxs("div",{style:{display:"flex",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,padding:4},children:[s.jsx("button",{onClick:()=>i("link"),style:{flex:1,padding:"8px",background:n==="link"?"var(--surface)":"transparent",color:n==="link"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:n==="link"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Link"}),s.jsx("button",{onClick:()=>i("email"),style:{flex:1,padding:"8px",background:n==="email"?"var(--surface)":"transparent",color:n==="email"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:n==="email"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Email"})]})]}),s.jsx(v2,{value:o,onChange:a})]}),n==="email"&&s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Recipient Email"}),s.jsx("input",{type:"email",value:c,onChange:R=>l(R.target.value),placeholder:"colleague@company.com",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Password Protection"}),s.jsx("input",{type:"password",value:d,onChange:R=>u(R.target.value),placeholder:"Optional",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"},autoComplete:"new-password"})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"View Limit"}),s.jsx("input",{type:"number",min:"1",value:x,onChange:R=>p(R.target.value),placeholder:"Unlimited",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Expiration Date"}),s.jsx("input",{type:"datetime-local",value:f,onChange:R=>h(R.target.value),style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),s.jsx("div",{style:{marginTop:8},children:s.jsx("button",{onClick:_,disabled:w||n==="email"&&!c,style:{width:"100%",padding:"16px",background:"var(--accent-blue)",color:"#fff",border:"none",borderRadius:14,fontWeight:700,fontSize:16,cursor:w||n==="email"&&!c?"not-allowed":"pointer",opacity:w||n==="email"&&!c?.6:1,transition:"0.2s"},children:w?"Generating Secure Link...":n==="email"?"Send Email Invitation":"Create Share Link"})})]})})]})})}function x2({stats:e,usage:t,onBack:r}){const n=(t==null?void 0:t.breakdown)||{},i=Object.values(n).reduce((c,l)=>c+l,0)||1,o=e.storageQuota>0?Math.min(100,Math.round(e.storageUsed/e.storageQuota*100)):0,a=[{key:"images",label:"Images",color:"#22c55e"},{key:"videos",label:"Videos",color:"#2563eb"},{key:"documents",label:"Documents",color:"#f59e0b"},{key:"audio",label:"Audio",color:"#a78bfa"},{key:"other",label:"Other",color:"#94a3b8"}];return s.jsxs("div",{style:{animation:"fadeIn .3s ease"},children:[s.jsx("button",{type:"button",onClick:r,className:"page-back-btn",children:"← Back to My Drive"}),s.jsx("h2",{style:{fontWeight:900,fontSize:26,margin:"12px 0 8px",color:"var(--text)"},children:"Storage dashboard"}),s.jsxs("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:28},children:[o,"% of your storage is in use"]}),s.jsxs("div",{className:"dashboard-stat-grid",children:[s.jsx(Do,{label:"Total files",value:e.totalFiles}),s.jsx(Do,{label:"Total folders",value:e.totalFolders}),s.jsx(Do,{label:"Storage used",value:Ie(e.storageUsed)}),s.jsx(Do,{label:"Storage remaining",value:Ie(Math.max(0,e.storageQuota-e.storageUsed))})]}),s.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)",marginBottom:24},children:[s.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"Storage breakdown"}),s.jsx("div",{style:{height:14,borderRadius:99,overflow:"hidden",display:"flex",background:"var(--border)"},children:a.map(c=>{const l=(n[c.key]||0)/i*100;return l<.5?null:s.jsx("div",{title:`${c.label}: ${Ie(n[c.key]||0)}`,style:{width:`${l}%`,background:c.color,transition:"width .4s ease"}},c.key)})}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,marginTop:16},children:a.map(c=>s.jsxs("span",{style:{fontSize:13,color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{width:10,height:10,borderRadius:99,background:c.color,flexShrink:0}}),c.label,": ",Ie(n[c.key]||0)]},c.key))})]}),s.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)"},children:[s.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"File type distribution"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:a.map(c=>{const l=n[c.key]||0,d=Math.round(l/i*100);return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[s.jsx("span",{style:{color:"var(--text-secondary)",fontWeight:600},children:c.label}),s.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:700},children:[d,"%"]})]}),s.jsx("div",{style:{height:8,background:"var(--border)",borderRadius:99,overflow:"hidden"},children:s.jsx("div",{style:{width:`${d}%`,height:"100%",background:c.color,borderRadius:99,transition:"width .4s ease"}})})]},c.key)})})]})]})}function Do({label:e,value:t}){return s.jsxs("div",{className:"dashboard-stat-card",children:[s.jsx("div",{className:"label",children:e}),s.jsx("div",{className:"value",children:t})]})}var gd={x:0,y:0,width:0,height:0,unit:"px"},dn=(e,t,r)=>Math.min(Math.max(e,t),r),w2=(...e)=>e.filter(t=>t&&typeof t=="string").join(" "),kf=(e,t)=>e===t||e.width===t.width&&e.height===t.height&&e.x===t.x&&e.y===t.y&&e.unit===t.unit;function b2(e,t,r,n){let i=Rt(e,r,n);return e.width&&(i.height=i.width/t),e.height&&(i.width=i.height*t),i.y+i.height>n&&(i.height=n-i.y,i.width=i.height*t),i.x+i.width>r&&(i.width=r-i.x,i.height=i.width/t),e.unit==="%"?lr(i,r,n):i}function k2(e,t,r){let n=Rt(e,t,r);return n.x=(t-n.width)/2,n.y=(r-n.height)/2,e.unit==="%"?lr(n,t,r):n}function lr(e,t,r){return e.unit==="%"?{...gd,...e,unit:"%"}:{unit:"%",x:e.x?e.x/t*100:0,y:e.y?e.y/r*100:0,width:e.width?e.width/t*100:0,height:e.height?e.height/r*100:0}}function Rt(e,t,r){return!e.unit||e.unit==="px"?{...gd,...e,unit:"px"}:{unit:"px",x:e.x?e.x*t/100:0,y:e.y?e.y*r/100:0,width:e.width?e.width*t/100:0,height:e.height?e.height*r/100:0}}function Sf(e,t,r,n,i,o=0,a=0,c=n,l=i){let d={...e},u=Math.min(o,n),f=Math.min(a,i),h=Math.min(c,n),x=Math.min(l,i);t&&(t>1?(u=a?a*t:u,f=u/t,h=c*t):(f=o?o/t:f,u=f*t,x=l/t)),d.y<0&&(d.height=Math.max(d.height+d.y,f),d.y=0),d.x<0&&(d.width=Math.max(d.width+d.x,u),d.x=0);let p=n-(d.x+d.width);p<0&&(d.x=Math.min(d.x,n-u),d.width+=p);let w=i-(d.y+d.height);if(w<0&&(d.y=Math.min(d.y,i-f),d.height+=w),d.width<u&&((r==="sw"||r=="nw")&&(d.x-=u-d.width),d.width=u),d.height<f&&((r==="nw"||r=="ne")&&(d.y-=f-d.height),d.height=f),d.width>h&&((r==="sw"||r=="nw")&&(d.x-=h-d.width),d.width=h),d.height>x&&((r==="nw"||r=="ne")&&(d.y-=x-d.height),d.height=x),t){let S=d.width/d.height;if(S<t){let v=Math.max(d.width/t,f);(r==="nw"||r=="ne")&&(d.y-=v-d.height),d.height=v}else if(S>t){let v=Math.max(d.height*t,u);(r==="sw"||r=="nw")&&(d.x-=v-d.width),d.width=v}}return d}function S2(e,t,r,n){let i={...e};return t==="ArrowLeft"?n==="nw"?(i.x-=r,i.y-=r,i.width+=r,i.height+=r):n==="w"?(i.x-=r,i.width+=r):n==="sw"?(i.x-=r,i.width+=r,i.height+=r):n==="ne"?(i.y+=r,i.width-=r,i.height-=r):n==="e"?i.width-=r:n==="se"&&(i.width-=r,i.height-=r):t==="ArrowRight"&&(n==="nw"?(i.x+=r,i.y+=r,i.width-=r,i.height-=r):n==="w"?(i.x+=r,i.width-=r):n==="sw"?(i.x+=r,i.width-=r,i.height-=r):n==="ne"?(i.y-=r,i.width+=r,i.height+=r):n==="e"?i.width+=r:n==="se"&&(i.width+=r,i.height+=r)),t==="ArrowUp"?n==="nw"?(i.x-=r,i.y-=r,i.width+=r,i.height+=r):n==="n"?(i.y-=r,i.height+=r):n==="ne"?(i.y-=r,i.width+=r,i.height+=r):n==="sw"?(i.x+=r,i.width-=r,i.height-=r):n==="s"?i.height-=r:n==="se"&&(i.width-=r,i.height-=r):t==="ArrowDown"&&(n==="nw"?(i.x+=r,i.y+=r,i.width-=r,i.height-=r):n==="n"?(i.y+=r,i.height-=r):n==="ne"?(i.y+=r,i.width-=r,i.height-=r):n==="sw"?(i.x-=r,i.width+=r,i.height+=r):n==="s"?i.height+=r:n==="se"&&(i.width+=r,i.height+=r)),i}var un={capture:!0,passive:!1},C2=0,ye,_2=(ye=class extends m.PureComponent{constructor(){super(...arguments);ae(this,"docMoveBound",!1);ae(this,"mouseDownOnCrop",!1);ae(this,"dragStarted",!1);ae(this,"evData",{startClientX:0,startClientY:0,startCropX:0,startCropY:0,clientX:0,clientY:0,isResize:!0});ae(this,"componentRef",m.createRef());ae(this,"mediaRef",m.createRef());ae(this,"resizeObserver");ae(this,"initChangeCalled",!1);ae(this,"instanceId",`rc-${C2++}`);ae(this,"state",{cropIsActive:!1,newCropIsBeingDrawn:!1});ae(this,"onCropPointerDown",r=>{let{crop:n,disabled:i}=this.props,o=this.getBox();if(!n)return;let a=Rt(n,o.width,o.height);if(i)return;r.cancelable&&r.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let c=r.target.dataset.ord,l=!!c,d=r.clientX,u=r.clientY,f=a.x,h=a.y;if(c){let x=r.clientX-o.x,p=r.clientY-o.y,w=0,S=0;c==="ne"||c=="e"?(w=x-(a.x+a.width),S=p-a.y,f=a.x,h=a.y+a.height):c==="se"||c==="s"?(w=x-(a.x+a.width),S=p-(a.y+a.height),f=a.x,h=a.y):c==="sw"||c=="w"?(w=x-a.x,S=p-(a.y+a.height),f=a.x+a.width,h=a.y):(c==="nw"||c=="n")&&(w=x-a.x,S=p-a.y,f=a.x+a.width,h=a.y+a.height),d=f+o.x+w,u=h+o.y+S}this.evData={startClientX:d,startClientY:u,startCropX:f,startCropY:h,clientX:r.clientX,clientY:r.clientY,isResize:l,ord:c},this.mouseDownOnCrop=!0,this.setState({cropIsActive:!0})});ae(this,"onComponentPointerDown",r=>{let{crop:n,disabled:i,locked:o,keepSelection:a,onChange:c}=this.props,l=this.getBox();if(i||o||a&&n)return;r.cancelable&&r.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let d=r.clientX-l.x,u=r.clientY-l.y,f={unit:"px",x:d,y:u,width:0,height:0};this.evData={startClientX:r.clientX,startClientY:r.clientY,startCropX:d,startCropY:u,clientX:r.clientX,clientY:r.clientY,isResize:!0},this.mouseDownOnCrop=!0,c(Rt(f,l.width,l.height),lr(f,l.width,l.height)),this.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})});ae(this,"onDocPointerMove",r=>{let{crop:n,disabled:i,onChange:o,onDragStart:a}=this.props,c=this.getBox();if(i||!n||!this.mouseDownOnCrop)return;r.cancelable&&r.preventDefault(),this.dragStarted||(this.dragStarted=!0,a&&a(r));let{evData:l}=this;l.clientX=r.clientX,l.clientY=r.clientY;let d;d=l.isResize?this.resizeCrop():this.dragCrop(),kf(n,d)||o(Rt(d,c.width,c.height),lr(d,c.width,c.height))});ae(this,"onComponentKeyDown",r=>{let{crop:n,disabled:i,onChange:o,onComplete:a}=this.props;if(i)return;let c=r.key,l=!1;if(!n)return;let d=this.getBox(),u=this.makePixelCrop(d),f=(navigator.platform.match("Mac")?r.metaKey:r.ctrlKey)?ye.nudgeStepLarge:r.shiftKey?ye.nudgeStepMedium:ye.nudgeStep;if(c==="ArrowLeft"?(u.x-=f,l=!0):c==="ArrowRight"?(u.x+=f,l=!0):c==="ArrowUp"?(u.y-=f,l=!0):c==="ArrowDown"&&(u.y+=f,l=!0),l){r.cancelable&&r.preventDefault(),u.x=dn(u.x,0,d.width-u.width),u.y=dn(u.y,0,d.height-u.height);let h=Rt(u,d.width,d.height),x=lr(u,d.width,d.height);o(h,x),a&&a(h,x)}});ae(this,"onHandlerKeyDown",(r,n)=>{let{aspect:i=0,crop:o,disabled:a,minWidth:c=0,minHeight:l=0,maxWidth:d,maxHeight:u,onChange:f,onComplete:h}=this.props,x=this.getBox();if(a||!o)return;if(r.key==="ArrowUp"||r.key==="ArrowDown"||r.key==="ArrowLeft"||r.key==="ArrowRight")r.stopPropagation(),r.preventDefault();else return;let p=(navigator.platform.match("Mac")?r.metaKey:r.ctrlKey)?ye.nudgeStepLarge:r.shiftKey?ye.nudgeStepMedium:ye.nudgeStep,w=Sf(S2(Rt(o,x.width,x.height),r.key,p,n),i,n,x.width,x.height,c,l,d,u);if(!kf(o,w)){let S=lr(w,x.width,x.height);f(w,S),h&&h(w,S)}});ae(this,"onDocPointerDone",r=>{let{crop:n,disabled:i,onComplete:o,onDragEnd:a}=this.props,c=this.getBox();this.unbindDocMove(),!(i||!n)&&this.mouseDownOnCrop&&(this.mouseDownOnCrop=!1,this.dragStarted=!1,a&&a(r),o&&o(Rt(n,c.width,c.height),lr(n,c.width,c.height)),this.setState({cropIsActive:!1,newCropIsBeingDrawn:!1}))});ae(this,"onDragFocus",()=>{var r;(r=this.componentRef.current)==null||r.scrollTo(0,0)})}get document(){return document}getBox(){let r=this.mediaRef.current;if(!r)return{x:0,y:0,width:0,height:0};let{x:n,y:i,width:o,height:a}=r.getBoundingClientRect();return{x:n,y:i,width:o,height:a}}componentDidUpdate(r){let{crop:n,onComplete:i}=this.props;if(i&&!r.crop&&n){let{width:o,height:a}=this.getBox();o&&a&&i(Rt(n,o,a),lr(n,o,a))}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect(),this.unbindDocMove()}bindDocMove(){this.docMoveBound||(this.docMoveBound=(this.document.addEventListener("pointermove",this.onDocPointerMove,un),this.document.addEventListener("pointerup",this.onDocPointerDone,un),this.document.addEventListener("pointercancel",this.onDocPointerDone,un),!0))}unbindDocMove(){this.docMoveBound&&(this.docMoveBound=(this.document.removeEventListener("pointermove",this.onDocPointerMove,un),this.document.removeEventListener("pointerup",this.onDocPointerDone,un),this.document.removeEventListener("pointercancel",this.onDocPointerDone,un),!1))}getCropStyle(){let{crop:r}=this.props;if(r)return{top:`${r.y}${r.unit}`,left:`${r.x}${r.unit}`,width:`${r.width}${r.unit}`,height:`${r.height}${r.unit}`}}dragCrop(){let{evData:r}=this,n=this.getBox(),i=this.makePixelCrop(n),o=r.clientX-r.startClientX,a=r.clientY-r.startClientY;return i.x=dn(r.startCropX+o,0,n.width-i.width),i.y=dn(r.startCropY+a,0,n.height-i.height),i}getPointRegion(r,n,i,o){let{evData:a}=this,c=a.clientX-r.x,l=a.clientY-r.y,d;d=o&&n?n==="nw"||n==="n"||n==="ne":l<a.startCropY;let u;return u=i&&n?n==="nw"||n==="w"||n==="sw":c<a.startCropX,u?d?"nw":"sw":d?"ne":"se"}resolveMinDimensions(r,n,i=0,o=0){let a=Math.min(i,r.width),c=Math.min(o,r.height);return!n||!a&&!c?[a,c]:n>1?a?[a,a/n]:[c*n,c]:c?[c*n,c]:[a,a/n]}resizeCrop(){let{evData:r}=this,{aspect:n=0,maxWidth:i,maxHeight:o}=this.props,a=this.getBox(),[c,l]=this.resolveMinDimensions(a,n,this.props.minWidth,this.props.minHeight),d=this.makePixelCrop(a),u=this.getPointRegion(a,r.ord,c,l),f=r.ord||u,h=r.clientX-r.startClientX,x=r.clientY-r.startClientY;(c&&f==="nw"||f==="w"||f==="sw")&&(h=Math.min(h,-c)),(l&&f==="nw"||f==="n"||f==="ne")&&(x=Math.min(x,-l));let p={unit:"px",x:0,y:0,width:0,height:0};u==="ne"?(p.x=r.startCropX,p.width=h,n?(p.height=p.width/n,p.y=r.startCropY-p.height):(p.height=Math.abs(x),p.y=r.startCropY-p.height)):u==="se"?(p.x=r.startCropX,p.y=r.startCropY,p.width=h,n?p.height=p.width/n:p.height=x):u==="sw"?(p.x=r.startCropX+h,p.y=r.startCropY,p.width=Math.abs(h),n?p.height=p.width/n:p.height=x):u==="nw"&&(p.x=r.startCropX+h,p.width=Math.abs(h),n?(p.height=p.width/n,p.y=r.startCropY-p.height):(p.height=Math.abs(x),p.y=r.startCropY+x));let w=Sf(p,n,u,a.width,a.height,c,l,i,o);return n||ye.xyOrds.indexOf(f)>-1?d=w:ye.xOrds.indexOf(f)>-1?(d.x=w.x,d.width=w.width):ye.yOrds.indexOf(f)>-1&&(d.y=w.y,d.height=w.height),d.x=dn(d.x,0,a.width-d.width),d.y=dn(d.y,0,a.height-d.height),d}renderCropSelection(){let{ariaLabels:r=ye.defaultProps.ariaLabels,disabled:n,locked:i,renderSelectionAddon:o,ruleOfThirds:a,crop:c}=this.props,l=this.getCropStyle();if(c)return U.createElement("div",{style:l,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown,"aria-label":r.cropArea,tabIndex:0,onKeyDown:this.onComponentKeyDown,role:"group"},!n&&!i&&U.createElement("div",{className:"ReactCrop__drag-elements",onFocus:this.onDragFocus},U.createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),U.createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),U.createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),U.createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),U.createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw",tabIndex:0,"aria-label":r.nwDragHandle,onKeyDown:d=>this.onHandlerKeyDown(d,"nw"),role:"button"}),U.createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n",tabIndex:0,"aria-label":r.nDragHandle,onKeyDown:d=>this.onHandlerKeyDown(d,"n"),role:"button"}),U.createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne",tabIndex:0,"aria-label":r.neDragHandle,onKeyDown:d=>this.onHandlerKeyDown(d,"ne"),role:"button"}),U.createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e",tabIndex:0,"aria-label":r.eDragHandle,onKeyDown:d=>this.onHandlerKeyDown(d,"e"),role:"button"}),U.createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se",tabIndex:0,"aria-label":r.seDragHandle,onKeyDown:d=>this.onHandlerKeyDown(d,"se"),role:"button"}),U.createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s",tabIndex:0,"aria-label":r.sDragHandle,onKeyDown:d=>this.onHandlerKeyDown(d,"s"),role:"button"}),U.createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw",tabIndex:0,"aria-label":r.swDragHandle,onKeyDown:d=>this.onHandlerKeyDown(d,"sw"),role:"button"}),U.createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w",tabIndex:0,"aria-label":r.wDragHandle,onKeyDown:d=>this.onHandlerKeyDown(d,"w"),role:"button"})),o&&U.createElement("div",{className:"ReactCrop__selection-addon",onPointerDown:d=>d.stopPropagation()},o(this.state)),a&&U.createElement(U.Fragment,null,U.createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),U.createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}makePixelCrop(r){return Rt({...gd,...this.props.crop||{}},r.width,r.height)}render(){let{aspect:r,children:n,circularCrop:i,className:o,crop:a,disabled:c,locked:l,style:d,ruleOfThirds:u}=this.props,{cropIsActive:f,newCropIsBeingDrawn:h}=this.state,x=a?this.renderCropSelection():null,p=w2("ReactCrop",o,f&&"ReactCrop--active",c&&"ReactCrop--disabled",l&&"ReactCrop--locked",h&&"ReactCrop--new-crop",a&&r&&"ReactCrop--fixed-aspect",a&&i&&"ReactCrop--circular-crop",a&&u&&"ReactCrop--rule-of-thirds",!this.dragStarted&&a&&!a.width&&!a.height&&"ReactCrop--invisible-crop",i&&"ReactCrop--no-animate");return U.createElement("div",{ref:this.componentRef,className:p,style:d},U.createElement("div",{ref:this.mediaRef,className:"ReactCrop__child-wrapper",onPointerDown:this.onComponentPointerDown},n),a?U.createElement("svg",{className:"ReactCrop__crop-mask",width:"100%",height:"100%"},U.createElement("defs",null,U.createElement("mask",{id:`hole-${this.instanceId}`},U.createElement("rect",{width:"100%",height:"100%",fill:"white"}),i?U.createElement("ellipse",{cx:`${a.x+a.width/2}${a.unit}`,cy:`${a.y+a.height/2}${a.unit}`,rx:`${a.width/2}${a.unit}`,ry:`${a.height/2}${a.unit}`,fill:"black"}):U.createElement("rect",{x:`${a.x}${a.unit}`,y:`${a.y}${a.unit}`,width:`${a.width}${a.unit}`,height:`${a.height}${a.unit}`,fill:"black"}))),U.createElement("rect",{fill:"black",fillOpacity:.5,width:"100%",height:"100%",mask:`url(#hole-${this.instanceId})`})):void 0,x)}},ae(ye,"xOrds",["e","w"]),ae(ye,"yOrds",["n","s"]),ae(ye,"xyOrds",["nw","ne","se","sw"]),ae(ye,"nudgeStep",1),ae(ye,"nudgeStepMedium",10),ae(ye,"nudgeStepLarge",100),ae(ye,"defaultProps",{ariaLabels:{cropArea:"Use the arrow keys to move the crop selection area",nwDragHandle:"Use the arrow keys to move the north west drag handle to change the crop selection area",nDragHandle:"Use the up and down arrow keys to move the north drag handle to change the crop selection area",neDragHandle:"Use the arrow keys to move the north east drag handle to change the crop selection area",eDragHandle:"Use the up and down arrow keys to move the east drag handle to change the crop selection area",seDragHandle:"Use the arrow keys to move the south east drag handle to change the crop selection area",sDragHandle:"Use the up and down arrow keys to move the south drag handle to change the crop selection area",swDragHandle:"Use the arrow keys to move the south west drag handle to change the crop selection area",wDragHandle:"Use the up and down arrow keys to move the west drag handle to change the crop selection area"}}),ye);function E2(e,t,r){return k2(b2({unit:"%",width:90},r,e,t),e,t)}function j2({file:e,token:t,onClose:r,onUploadComplete:n}){const[i,o]=m.useState(""),a=m.useRef(null),[c,l]=m.useState(),[d,u]=m.useState(),[f,h]=m.useState(1),[x,p]=m.useState(0),[w,S]=m.useState(0),[v,g]=m.useState(0),[y,k]=m.useState(.8),[C,E]=m.useState(!0),[_,I]=m.useState(!1),[D,R]=m.useState("");m.useEffect(()=>{let M=null;return(async()=>{try{E(!0);const H=await Js(e.id,t,{disposition:"preview"});M=URL.createObjectURL(H),o(M)}catch{R("Failed to load image for editing.")}finally{E(!1)}})(),()=>{M&&URL.revokeObjectURL(M)}},[e.id,t]);const W=M=>{const{width:H,height:ie}=M.currentTarget;S(H),g(ie),l(E2(H,ie,H/ie))},B=async()=>{if(!(!d||!a.current)){I(!0);try{const M=document.createElement("canvas"),H=M.getContext("2d");if(!H)throw new Error("No 2d context");const ie=a.current.naturalWidth/a.current.width,de=a.current.naturalHeight/a.current.height,me=window.devicePixelRatio;M.width=Math.floor(d.width*ie*me),M.height=Math.floor(d.height*de*me),H.scale(me,me),H.imageSmoothingQuality="high";const N=d.x*ie,L=d.y*de,z=d.width*ie,Q=d.height*de;H.drawImage(a.current,N,L,z,Q,0,0,z,Q);const ee=e.mimeType||"image/jpeg",qe=ee.split("/")[1]||"jpg",_e=`edited_${e.name.replace(/\.[^/.]+$/,"")}.${qe}`;M.toBlob(async He=>{if(!He){R("Canvas is empty"),I(!1);return}const Ve=new File([He],_e,{type:ee});try{const we=new FormData;we.append("files",Ve),e.folderId&&we.append("folderId",e.folderId),await Gp("/files/upload",we,t,()=>{}),n(),r()}catch{R("Failed to save edited image"),I(!1)}},ee,parseFloat(y))}catch(M){R(M.message),I(!1)}}};return s.jsx("div",{style:{position:"fixed",inset:0,zIndex:1100,background:"rgba(0,0,0,.9)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)"},children:s.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:20,border:"1.5px solid var(--border)",width:"90vw",height:"90vh",display:"flex",flexDirection:"column",overflow:"hidden"},children:[s.jsxs("div",{style:{padding:"16px 24px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("h2",{style:{fontSize:18,fontWeight:600,margin:0},children:["Edit Image: ",e.name]}),s.jsx("button",{onClick:r,style:{background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:20},children:"✕"})]}),s.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[s.jsx("div",{style:{flex:1,padding:24,display:"flex",alignItems:"center",justifyContent:"center",background:"#000",overflow:"auto"},children:C?s.jsx("p",{children:"Loading image..."}):D&&!i?s.jsx("p",{style:{color:"var(--danger)"},children:D}):s.jsx(_2,{crop:c,onChange:(M,H)=>l(H),onComplete:M=>u(M),children:s.jsx("img",{ref:a,alt:"Crop me",src:i,style:{transform:`scale(${f}) rotate(${x}deg)`,maxHeight:"70vh"},onLoad:W})})}),s.jsxs("div",{style:{width:300,borderLeft:"1px solid var(--border)",padding:24,display:"flex",flexDirection:"column",gap:24,background:"var(--bg-card)"},children:[s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:600,color:"var(--text-secondary)",marginBottom:8},children:"ZOOM"}),s.jsx("input",{type:"range",min:.1,max:3,step:.1,value:f,onChange:M=>h(Number(M.target.value)),style:{width:"100%"}})]}),s.jsxs("div",{children:[s.jsxs("label",{style:{display:"block",fontSize:12,fontWeight:600,color:"var(--text-secondary)",marginBottom:8},children:["COMPRESSION QUALITY (",(y*100).toFixed(0),"%)"]}),s.jsx("input",{type:"range",min:.1,max:1,step:.1,value:y,onChange:M=>k(Number(M.target.value)),style:{width:"100%"}}),s.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Lower quality reduces file size."})]}),D&&s.jsx("p",{style:{color:"var(--danger)",fontSize:13},children:D}),s.jsx("div",{style:{marginTop:"auto"},children:s.jsx("button",{onClick:B,disabled:_||!d,className:"btn-primary",style:{width:"100%",padding:"12px",borderRadius:8,fontWeight:600,border:"none",cursor:"pointer",opacity:_?.7:1},children:_?"Saving Copy...":"Save as New Copy"})})]})]})]})})}function I2({users:e,systemHealth:t,loading:r,onBack:n}){return s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:n,style:T2,children:"← Back to My Cloud"}),s.jsx("h2",{style:{fontWeight:800,fontSize:22,margin:"12px 0 8px"},children:"Admin panel"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:24},children:"User management and system overview"}),t&&s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:28},children:[s.jsx(hi,{label:"Total users",value:t.totalUsers??"—"}),s.jsx(hi,{label:"Active users",value:t.activeUsers??"—"}),s.jsx(hi,{label:"Total files",value:t.totalFiles??"—"}),s.jsx(hi,{label:"Storage used",value:t.totalStorageUsed!=null?Ie(t.totalStorageUsed):"—"}),s.jsx(hi,{label:"Uploads today",value:t.uploadsToday??"—"})]}),s.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"Users"}),r?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading…"}):s.jsxs("div",{style:{overflowX:"auto",border:"1px solid var(--border)",borderRadius:12},children:[s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"var(--bg-card)",textAlign:"left"},children:[s.jsx("th",{style:pi,children:"Email"}),s.jsx("th",{style:pi,children:"Name"}),s.jsx("th",{style:pi,children:"Role"}),s.jsx("th",{style:pi,children:"Storage"}),s.jsx("th",{style:pi,children:"Status"})]})}),s.jsx("tbody",{children:e.map(i=>s.jsxs("tr",{style:{borderTop:"1px solid var(--border)"},children:[s.jsx("td",{style:gi,children:i.email}),s.jsx("td",{style:gi,children:i.fullName||"—"}),s.jsx("td",{style:gi,children:i.role}),s.jsxs("td",{style:gi,children:[Ie(i.storageUsed)," / ",Ie(i.storageQuota)]}),s.jsx("td",{style:gi,children:i.isActive?"Active":"Inactive"})]},i.id))})]}),e.length===0&&s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)"},children:"No users found"})]})]})}function hi({label:e,value:t}){return s.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:14},children:[s.jsx("div",{style:{fontWeight:800,fontSize:20},children:t}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:e})]})}const pi={padding:"12px 14px",color:"var(--text-muted)",fontWeight:600},gi={padding:"12px 14px",color:"var(--text-secondary)"},T2={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"};function tm({file:e,onMove:t,onCopy:r,onTags:n,onEdit:i,onDelete:o}){var f;const[a,c]=m.useState(!1),l=m.useRef(null);m.useEffect(()=>{const h=x=>{l.current&&!l.current.contains(x.target)&&c(!1)};return a&&document.addEventListener("click",h),()=>document.removeEventListener("click",h)},[a]);const u=[...((f=e==null?void 0:e.mimeType)==null?void 0:f.startsWith("image/"))?[{cue:"Edit",label:"Edit image",onClick:()=>i&&i(e)}]:[],{cue:"#",label:"Tags",onClick:()=>n(e)},{cue:"Move",label:"Move",onClick:()=>t(e)},{cue:"Copy",label:"Copy file",onClick:()=>r(e)},{cue:"Del",label:"Delete",onClick:()=>o(e),danger:!0}];return s.jsxs("div",{ref:l,style:{position:"relative"},children:[s.jsx("button",{type:"button",title:"More actions",onClick:h=>{h.stopPropagation(),c(x=>!x)},style:R2,children:"..."}),a&&s.jsx("div",{style:P2,children:u.map(h=>s.jsxs("button",{type:"button",onClick:x=>{x.stopPropagation(),c(!1),h.onClick()},style:{...N2,color:h.danger?"var(--danger)":"var(--text)"},children:[s.jsx("span",{style:{...A2,color:h.danger?"var(--danger)":"var(--accent-blue)"},children:h.cue}),s.jsx("span",{children:h.label})]},h.label))})]})}const R2={width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"rgba(255,255,255,.08)",color:"var(--text)",cursor:"pointer",fontSize:18,fontWeight:900,transition:"var(--transition)"},P2={position:"absolute",right:0,top:"100%",marginTop:6,minWidth:190,background:"var(--surface-raised)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"var(--shadow)",zIndex:50,overflow:"hidden",padding:6,animation:"floatIn .16s ease"},N2={display:"flex",alignItems:"center",gap:10,width:"100%",padding:"11px 12px",border:"none",borderRadius:10,background:"transparent",textAlign:"left",cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"var(--font)"},A2={width:34,opacity:.78,fontSize:11,fontWeight:900,textTransform:"uppercase"};function fn({width:e="100%",height:t=16,radius:r=8,style:n={}}){return s.jsx("div",{style:{width:e,height:t,borderRadius:r,background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite",...n}})}function O2({count:e=6,grid:t=!1}){return t?s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:12},children:Array.from({length:e}).map((r,n)=>s.jsxs("div",{style:{borderRadius:16,overflow:"hidden",border:"1px solid var(--border)"},children:[s.jsx(fn,{height:140,radius:0}),s.jsxs("div",{style:{padding:12},children:[s.jsx(fn,{height:12,width:"80%"}),s.jsx(fn,{height:10,width:"50%",style:{marginTop:8}})]})]},n))}):s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Array.from({length:e}).map((r,n)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:"var(--bg-card)",borderRadius:12,border:"1px solid var(--border)"},children:[s.jsx(fn,{width:36,height:36,radius:8}),s.jsxs("div",{style:{flex:1},children:[s.jsx(fn,{height:14,width:"40%"}),s.jsx(fn,{height:10,width:"25%",style:{marginTop:8}})]})]},n))})}function D2(e,t=400){const[r,n]=m.useState(e);return m.useEffect(()=>{const i=setTimeout(()=>n(e),t);return()=>clearTimeout(i)},[e,t]),r}async function L2(e,{createFolder:t,uploadFile:r,baseFolderId:n,onProgress:i}){const o=Array.from(e),a=new Map([["",n??null]]),c=d=>{const u=d.webkitRelativePath||d.name,f=u.split("/").filter(Boolean),h=f.pop();return{segments:f,fileName:h,rel:u}};o.sort((d,u)=>c(d).rel.localeCompare(c(u).rel));let l=0;for(const d of o){const{segments:u}=c(d);let f=n??null,h="";for(const x of u){if(h=h?`${h}/${x}`:x,!a.has(h)){const p=await t(x,f);a.set(h,p.id)}f=a.get(h)}await r(d,f),l+=1,i==null||i(Math.round(l/o.length*100))}}function z2(e){const t=new Map(e.map(n=>[n.id,{...n,children:[]}])),r=[];for(const n of e){const i=t.get(n.id);n.parentId&&t.has(n.parentId)?t.get(n.parentId).children.push(i):r.push(i)}return r}const rm=m.createContext(null);function M2({token:e,children:t}){const[r,n]=m.useState(null),[i,o]=m.useState([]),[a,c]=m.useState(0),[l,d]=m.useState(!0),u=m.useCallback(async()=>{if(e)try{const p=await Fe("/account",{},e);n(p)}catch{const p=await Fe("/users/me",{},e).catch(()=>null);p&&n(p)}},[e]),f=m.useCallback(async()=>{},[]),h=m.useCallback(async()=>{d(!0),await Promise.all([u(),f()]),d(!1)},[u,f]);m.useEffect(()=>{h()},[e]);const x=async()=>{};return s.jsx(rm.Provider,{value:{account:r,loading:l,notifications:i,unreadCount:a,refreshAccount:u,refreshNotifications:f,refreshAll:h,markAllRead:x},children:t})}function nm(){const e=m.useContext(rm);if(!e)throw new Error("useAccount must be used within AccountProvider");return e}function F2({account:e,onNavigate:t,onSignOut:r}){var d;const[n,i]=m.useState(!1),o=m.useRef(null);m.useEffect(()=>{const u=f=>{o.current&&!o.current.contains(f.target)&&i(!1)};return n&&document.addEventListener("click",u),()=>document.removeEventListener("click",u)},[n]);const a=[{id:"profile",label:"My Profile"},{id:"settings",label:"Settings"},{id:"security",label:"Security"},{id:"dashboard",label:"Storage"},{id:"billing",label:"Billing"},{id:"billing",label:"Upgrade Plan",accent:!0},{id:"help",label:"Help Center"}],c=e==null?void 0:e.avatarUrl,l=((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"?").slice(0,1).toUpperCase();return s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(u=>!u),style:{display:"flex",alignItems:"center",gap:8,padding:"4px 10px 4px 4px",borderRadius:999,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontFamily:"var(--font)"},children:[s.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:c?`url(${c}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:14},children:!c&&l}),s.jsx("span",{style:{color:"var(--text-secondary)",fontSize:13,fontWeight:600},children:"▾"})]}),n&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",minWidth:200,background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300,overflow:"hidden",animation:"fadeIn .15s ease"},children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontWeight:700,fontSize:14,color:"var(--text)"},children:(e==null?void 0:e.fullName)||"Account"}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:e==null?void 0:e.email}),s.jsxs("div",{style:{fontSize:11,color:"var(--accent)",marginTop:6,fontWeight:600,textTransform:"capitalize"},children:[((d=e==null?void 0:e.planDetails)==null?void 0:d.name)||(e==null?void 0:e.plan)," plan"]})]}),a.map((u,f)=>s.jsx("button",{type:"button",onClick:()=>{i(!1),t(u.id==="dashboard"?"dashboard":u.id)},style:{display:"block",width:"100%",padding:"11px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,fontWeight:u.accent?700:500,color:u.accent?"var(--accent)":"var(--text-secondary)"},children:u.label},`${u.id}-${f}`)),s.jsx("div",{style:{borderTop:"1px solid var(--border)"},children:s.jsx("button",{type:"button",onClick:()=>{i(!1),r()},style:{display:"block",width:"100%",padding:"12px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,color:"var(--danger)",fontWeight:600},children:"Sign Out"})})]})]})}function U2({account:e,onUpgrade:t}){if(!(e!=null&&e.onTrial))return null;const r=e.trialDaysLeft??0;return s.jsxs("div",{style:{background:"linear-gradient(90deg, rgba(240,22,58,.12), rgba(64,144,255,.1))",borderBottom:"1px solid var(--border)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--text)"},children:"Pro trial"})," — ",r," day",r!==1?"s":""," left · ",Ie(e.storageUsed)," used"]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Upgrade"})]})}function B2({account:e,onOpenSettings:t}){return!(e!=null&&e.emailVerificationRequired)||(e==null?void 0:e.isVerified)!==!1?null:s.jsxs("div",{style:{background:"rgba(240, 22, 58, 0.12)",borderBottom:"1px solid rgba(240, 22, 58, 0.35)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--danger)"},children:"Email not verified"})," — ","Uploads are disabled until you verify. Check your inbox or resend the link."]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Verify email"})]})}function Cf({email:e,token:t,onVerified:r,onBack:n}){const[i,o]=m.useState(e||""),[a,c]=m.useState(!!t),[l,d]=m.useState(""),[u,f]=m.useState(""),[h,x]=m.useState(!1);m.useEffect(()=>{t&&p(t)},[t]);const p=async S=>{c(!0),d("");try{const v=await fetch(`${gt}/auth/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:S})}),g=await v.json();if(!v.ok||!g.success)throw new Error(g.message||"Verification failed");x(!0),setTimeout(()=>r==null?void 0:r(),1200)}catch{d("This verification link is invalid or expired. Request a fresh email and try again.")}finally{c(!1)}},w=async()=>{if(!i){d("Enter your email address first.");return}c(!0),d(""),f("");try{const S=await fetch(`${gt}/auth/resend-verification`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}),v=await S.json();if(!S.ok||!v.success)throw new Error(v.message||"Failed to send verification email");f("A fresh verification email is on its way. Open the link in your inbox to continue.")}catch{d("Something went wrong. Please try again.")}finally{c(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:Kr}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:h?"Email verified":t?"Verifying your email":"Check your inbox"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:h?"Your account is ready. You can now log in with your email and password.":t?"Hold tight while we confirm your CloudVault account.":"Open the verification link we sent after registration. You only need to do this once."}),!t&&!h&&s.jsxs(s.Fragment,{children:[s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:"Email address"}),s.jsx("input",{className:"input-field",type:"email",value:i,onChange:S=>o(S.target.value),placeholder:"you@company.com",style:{marginTop:6}})]}),s.jsx("button",{type:"button",onClick:w,disabled:a,className:"btn-primary",style:{width:"100%"},children:a?"Sending...":"Resend verification email"})]}),a&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,marginTop:14},children:"Working on it..."}),l&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginTop:14},children:l}),u&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,lineHeight:1.5,marginTop:14},children:u}),s.jsx("button",{type:"button",onClick:n,className:"btn-secondary",style:{width:"100%",marginTop:14},children:"Back to login"})]})]})}function W2({notifications:e,unreadCount:t,onMarkAllRead:r}){const[n,i]=m.useState(!1),o=m.useRef(null);return m.useEffect(()=>{const a=c=>{o.current&&!o.current.contains(c.target)&&i(!1)};return n&&document.addEventListener("click",a),()=>document.removeEventListener("click",a)},[n]),s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(a=>!a),style:{width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontSize:18,position:"relative"},title:"Notifications",children:["🔔",t>0&&s.jsx("span",{style:{position:"absolute",top:4,right:4,minWidth:16,height:16,borderRadius:99,background:"var(--accent)",color:"#fff",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"},children:t>9?"9+":t})]}),n&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",width:320,maxHeight:400,overflow:"auto",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300},children:[s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontWeight:700,fontSize:14},children:"Notifications"}),t>0&&s.jsx("button",{type:"button",onClick:r,style:$2,children:"Mark all read"})]}),e.length===0?s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)",fontSize:13},children:"Nothing new"}):e.map(a=>s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",background:a.read?"transparent":"rgba(240,22,58,.06)"},children:[s.jsx("div",{style:{fontWeight:600,fontSize:13},children:a.title}),a.body&&s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:a.body}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:6},children:Xn(a.createdAt)})]},a.id))]})]})}const $2={background:"none",border:"none",color:"var(--accent-blue)",fontSize:12,cursor:"pointer",fontWeight:600};function _f({token:e,onBack:t,onSuccess:r}){const[n,i]=m.useState(""),[o,a]=m.useState(""),[c,l]=m.useState(!1),[d,u]=m.useState(""),[f,h]=m.useState(!1),x=async p=>{if(p.preventDefault(),u(""),!e)return u("This reset link is invalid. Please request a new one.");if(n!==o)return u("Passwords do not match.");if(n.length<8)return u("Password must be at least 8 characters.");if(!/[a-z]/.test(n)||!/[A-Z]/.test(n)||!/\d/.test(n))return u("Use at least one uppercase letter, one lowercase letter, and one number.");l(!0);try{const w=await fetch(`${gt}/auth/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,newPassword:n})}),S=await w.json();if(!w.ok||!S.success)throw new Error(S.message||"Failed to reset password");h(!0),setTimeout(()=>{var v;return(v=r||t)==null?void 0:v()},1400)}catch{u("Something went wrong. Please try again.")}finally{l(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:Kr}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:f?"Password updated":"Set a new password"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:f?"You can now log in with your new password.":"Choose a strong password to secure your CloudVault account."}),!f&&s.jsxs("form",{onSubmit:x,children:[s.jsx(Ef,{label:"New password",value:n,onChange:i}),s.jsx(Ef,{label:"Confirm password",value:o,onChange:a}),d&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginBottom:14},children:d}),s.jsx("button",{type:"submit",disabled:c,className:"btn-primary",style:{width:"100%"},children:c?"Updating...":"Update password"})]}),f&&s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{width:"100%"},children:"Continue to login"}),s.jsx("button",{type:"button",onClick:t,className:"btn-secondary",style:{width:"100%",marginTop:12},children:"Back to login"})]})]})}function Ef({label:e,value:t,onChange:r}){return s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:e}),s.jsx("input",{className:"input-field",type:"password",value:t,onChange:n=>r(n.target.value),required:!0,minLength:8,style:{marginTop:6}})]})}const jf={drive:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V8H4V6.5Z",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M4 8h16v9.5A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5V8Z",stroke:"currentColor",strokeWidth:"1.8"})]}),recent:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"12",cy:"12",r:"8.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),starred:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M12 4.5l2.2 4.5 4.9.7-3.5 3.4.8 4.9L12 15.8l-4.4 2.2.8-4.9-3.5-3.4 4.9-.7L12 4.5Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"})}),shared:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"18",cy:"5",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("circle",{cx:"6",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("circle",{cx:"18",cy:"19",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M8.3 10.8l7.4-4.1M8.3 13.2l7.4 4.1",stroke:"currentColor",strokeWidth:"1.8"})]}),usage:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M5 19V10M10 19V5M15 19v-7M20 19V8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}),trash:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M9 4h6M5 7h14l-1.2 12.5a1.5 1.5 0 0 1-1.5 1.5H7.7a1.5 1.5 0 0 1-1.5-1.5L5 7Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 10v6M14 10v6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),activity:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M6 5h12v14H6V5Z",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M9 9h6M9 12h4M9 15h5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),admin:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),s.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"})]})};function H2({name:e,active:t=!1}){return s.jsx("span",{className:`nav-icon${t?" active":""}`,"aria-hidden":"true",children:jf[e]||jf.drive})}const Jo={display:"flex",flexDirection:"column",minHeight:"100vh",background:"var(--bg-primary)",color:"var(--text)",fontFamily:"var(--font)",position:"relative",overflow:"hidden"},En=(e,t,r,n=420)=>({position:"fixed",top:e,left:t,width:n,height:n,borderRadius:"50%",background:r,filter:"blur(140px)",opacity:.12,pointerEvents:"none",zIndex:0}),Zo={padding:"16px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid var(--border)",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",position:"relative",zIndex:10},qa={width:34,height:34,background:"var(--gradient)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,boxShadow:"0 4px 16px rgba(217,0,7,0.25)"},es={background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:20,padding:"48px 40px 40px",maxWidth:480,width:"100%",textAlign:"center",boxShadow:"0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset",position:"relative",zIndex:5,animation:"floatIn 0.5s ease-out both"},Ja={width:80,height:80,borderRadius:20,background:"var(--gradient-soft)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:38,margin:"0 auto 24px"},Za={margin:0,fontSize:22,fontWeight:700,letterSpacing:"-0.3px",lineHeight:1.35,wordBreak:"break-word",color:"var(--text)"},el={margin:"8px 0 0",color:"var(--text-muted)",fontSize:14,fontWeight:500,letterSpacing:"0.2px"},Ds={width:"100%",height:1,background:"var(--border)",margin:"24px 0",border:"none"},V2={display:"flex",alignItems:"center",gap:12,padding:"14px 16px",background:"var(--bg-card-hover)",borderRadius:14,border:"1px solid var(--border)"},Y2={width:40,height:40,borderRadius:"50%",objectFit:"cover",flexShrink:0},G2={width:40,height:40,borderRadius:"50%",background:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:16,color:"#fff",flexShrink:0},K2={textAlign:"left",flex:1,minWidth:0},Q2={fontSize:14,fontWeight:600,color:"var(--text)",lineHeight:1.3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},X2={fontSize:12,color:"var(--text-muted)",fontWeight:500,lineHeight:1.4,marginTop:2},q2=(e,t)=>({display:"inline-flex",alignItems:"center",gap:5,padding:"5px 12px",borderRadius:999,fontSize:12,fontWeight:600,background:e,color:t,letterSpacing:"0.3px"}),im={flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"14px 20px",borderRadius:12,fontWeight:600,fontSize:15,fontFamily:"var(--font)",cursor:"pointer",transition:"all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",border:"none",outline:"none",letterSpacing:"-0.2px"},If={...im,background:"var(--bg-card-hover)",color:"var(--text)",border:"1px solid var(--border)"},Tf={...im,background:"var(--gradient)",color:"#fff",boxShadow:"0 8px 24px rgba(217,0,7,0.25)"},J2={opacity:.6,cursor:"not-allowed"},Z2={margin:"20px 0 0",fontSize:12,color:"var(--text-muted)",fontWeight:500,display:"flex",alignItems:"center",justifyContent:"center",gap:6},ek={padding:"16px 28px",borderTop:"1px solid var(--border)",textAlign:"center",fontSize:12,color:"var(--text-muted)",fontWeight:500,background:"rgba(0,0,0,0.3)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",position:"relative",zIndex:10};function tk(){const e={background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.8s ease infinite",borderRadius:10};return s.jsxs("div",{style:Jo,children:[s.jsx("div",{style:En("-120px","-100px","rgba(217,0,7,0.3)")}),s.jsx("div",{style:En("60%","70%","rgba(59,130,246,0.2)",350)}),s.jsxs("header",{style:Zo,children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[s.jsx("div",{style:{...e,width:34,height:34,borderRadius:10}}),s.jsx("div",{style:{...e,width:100,height:18}})]}),s.jsx("div",{style:{...e,width:130,height:16}})]}),s.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:s.jsxs("div",{style:{...es,animation:"none"},children:[s.jsx("div",{style:{...e,width:80,height:80,borderRadius:20,margin:"0 auto 24px"}}),s.jsx("div",{style:{...e,width:"70%",height:22,margin:"0 auto 12px"}}),s.jsx("div",{style:{...e,width:"45%",height:14,margin:"0 auto 24px"}}),s.jsx("div",{style:Ds}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",background:"var(--bg-card-hover)",borderRadius:14},children:[s.jsx("div",{style:{...e,width:40,height:40,borderRadius:"50%"}}),s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{...e,width:"60%",height:14,marginBottom:6}}),s.jsx("div",{style:{...e,width:"80%",height:12}})]})]}),s.jsx("div",{style:{...Ds,margin:"24px 0 20px"}}),s.jsxs("div",{style:{display:"flex",gap:12},children:[s.jsx("div",{style:{...e,flex:1,height:48,borderRadius:12}}),s.jsx("div",{style:{...e,flex:1,height:48,borderRadius:12}})]})]})})]})}function rk({avatarUrl:e,name:t}){const[r,n]=m.useState(!1),i=(t||"U").charAt(0).toUpperCase();return e&&!r?s.jsx("img",{src:e,alt:t||"User",style:Y2,onError:()=>n(!0)}):s.jsx("div",{style:G2,children:i})}function nk({token:e}){const[t,r]=m.useState(!0),[n,i]=m.useState(null),[o,a]=m.useState(null),[c,l]=m.useState(""),[d,u]=m.useState(!1),[f,h]=m.useState(!1),[x,p]=m.useState(!1),[w,S]=m.useState(!1),[v,g]=m.useState(!1),y=async(B="")=>{r(!0),a(null);try{const M=`/share/${e}${B?`?password=${encodeURIComponent(B)}`:""}`,H=await Fe(M,{},null);i(H),u(!1)}catch(M){const H=(M.message||"").toLowerCase();H.includes("password required")||H.includes("invalid password")||H.includes("forbidden")||H.includes("session expired")?(u(!0),B&&a("Invalid password")):a(M.message||"Failed to load shared link.")}finally{r(!1)}};m.useEffect(()=>{y()},[e]);const k=async()=>{if(!(!n||f)){h(!0);try{const B=`/share/${e}/download${c?`?password=${encodeURIComponent(c)}`:""}`,M=await fetch(`${gt}${B}`);if(!M.ok)throw new Error("Download failed");const H=await M.blob();Yp(H,n.file.name)}catch(B){a(B.message)}finally{h(!1)}}},C=async()=>{const B=`/share/${e}/preview${c?`?password=${encodeURIComponent(c)}`:""}`,M=await fetch(`${gt}${B}`);if(!M.ok)throw new Error("Failed to load preview");return await M.blob()};if(t)return s.jsx(tk,{});if(d&&!n)return s.jsxs("div",{style:Jo,children:[s.jsx("div",{style:En("-120px","-100px","rgba(217,0,7,0.3)")}),s.jsx("header",{style:Zo,children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[s.jsx("div",{style:qa,children:"☁️"}),s.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]})}),s.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:s.jsxs("div",{style:{...es,maxWidth:420},children:[s.jsx("div",{style:{...Ja,background:"rgba(217,0,7,0.1)",border:"1px solid rgba(217,0,7,0.2)"},children:"🔒"}),s.jsx("h2",{style:{...Za,fontSize:22,marginBottom:8},children:"Password Protected"}),s.jsx("p",{style:{...el,marginBottom:28},children:"Enter the password to access this shared file."}),s.jsxs("form",{onSubmit:B=>{B.preventDefault(),y(c)},children:[s.jsx("input",{type:"password",placeholder:"Enter password",value:c,onChange:B=>l(B.target.value),autoFocus:!0,style:{width:"100%",padding:"14px 18px",borderRadius:12,border:"1px solid var(--border)",background:"var(--bg-card-hover)",color:"var(--text)",fontFamily:"var(--font)",fontSize:15,fontWeight:500,outline:"none",transition:"border-color 0.2s",marginBottom:16,boxSizing:"border-box"},onFocus:B=>B.target.style.borderColor="var(--accent)",onBlur:B=>B.target.style.borderColor="var(--border)"}),o&&s.jsx("p",{style:{color:"var(--danger)",margin:"0 0 16px",fontSize:13,fontWeight:600},children:o}),s.jsx("button",{type:"submit",style:{...Tf,width:"100%",flex:"none"},children:"Unlock File"})]})]})})]});if(o&&!n)return s.jsxs("div",{style:Jo,children:[s.jsx("div",{style:En("-120px","-100px","rgba(217,0,7,0.3)")}),s.jsx("header",{style:Zo,children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[s.jsx("div",{style:qa,children:"☁️"}),s.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]})}),s.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:s.jsxs("div",{style:{...es,maxWidth:420},children:[s.jsx("div",{style:{...Ja,background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.2)"},children:"⚠️"}),s.jsx("h2",{style:{...Za,fontSize:22,marginBottom:8},children:"Link Unavailable"}),s.jsx("p",{style:{...el,marginBottom:0},children:o})]})})]});const{file:E,sharedBy:_,permission:I,expiresAt:D}=n,R=td(E.mimeType),W=I==="download"||I==="edit";return s.jsxs("div",{style:Jo,children:[s.jsx("div",{style:En("-120px","-100px","rgba(217,0,7,0.3)")}),s.jsx("div",{style:En("60%","70%","rgba(59,130,246,0.2)",350)}),s.jsxs("header",{style:Zo,children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[s.jsx("div",{style:qa,children:"☁️"}),s.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--text-muted)",fontSize:13,fontWeight:500},children:[s.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,color:"var(--accent)"},children:[s.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),s.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),"Encrypted"]}),s.jsx("span",{children:"•"}),s.jsx("span",{children:"Shared securely"})]})]}),s.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24,position:"relative",zIndex:5},children:s.jsxs("div",{style:es,children:[s.jsx("div",{style:Ja,children:no(E.mimeType)}),s.jsx("h1",{style:Za,children:E.name}),s.jsxs("p",{style:el,children:[Ie(E.size),s.jsx("span",{style:{margin:"0 8px",opacity:.4},children:"•"}),E.mimeType||"Unknown type"]}),s.jsx("div",{style:Ds}),s.jsxs("div",{style:V2,children:[s.jsx(rk,{avatarUrl:_==null?void 0:_.avatarUrl,name:_==null?void 0:_.fullName}),s.jsxs("div",{style:K2,children:[s.jsx("div",{style:Q2,children:(_==null?void 0:_.fullName)||"A user"}),s.jsx("div",{style:X2,children:"shared this file with you"})]}),s.jsx("div",{style:q2(W?"rgba(34,197,94,0.12)":"rgba(59,130,246,0.12)",W?"#22c55e":"#3b82f6"),children:W?"📥 Download":"👁 View only"})]}),s.jsx("div",{style:{...Ds,margin:"24px 0 20px"}}),s.jsxs("div",{style:{display:"flex",gap:12},children:[R&&s.jsxs("button",{onClick:()=>p(!0),onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),style:{...If,transform:w?"translateY(-2px)":"none",borderColor:w?"var(--border-hover)":"var(--border)",boxShadow:w?"0 8px 24px rgba(0,0,0,0.2)":"none"},children:[s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),s.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Preview"]}),W&&s.jsxs("button",{onClick:k,disabled:f,onMouseEnter:()=>!f&&g(!0),onMouseLeave:()=>g(!1),style:{...Tf,...f?J2:{},transform:v&&!f?"translateY(-2px)":"none",boxShadow:v&&!f?"0 12px 32px rgba(217,0,7,0.35)":"0 8px 24px rgba(217,0,7,0.25)"},children:[s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"7 10 12 15 17 10"}),s.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),f?"Downloading…":"Download"]}),!W&&!R&&s.jsx("div",{style:{...If,cursor:"default",justifyContent:"center",opacity:.6},children:"👁 View Only"})]}),D&&s.jsxs("div",{style:Z2,children:[s.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("polyline",{points:"12 6 12 12 16 14"})]}),"Expires ",new Date(D).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]})]})}),s.jsxs("footer",{style:ek,children:["Powered by ",s.jsx("strong",{style:{color:"var(--text)",fontWeight:700},children:"CloudVault"})," · End-to-end secure file sharing"]}),x&&s.jsx(Mg,{file:E,token:null,onClose:()=>p(!1),customFetchBlob:C})]})}const ik=m.lazy(()=>on(()=>import("./ProfilePage-DkTLKoRh.js"),[])),ok=m.lazy(()=>on(()=>import("./SettingsPage-B2B3-aFD.js"),[])),sk=m.lazy(()=>on(()=>import("./SecurityPage-oQZMyE0y.js"),[])),ak=m.lazy(()=>on(()=>import("./BillingPage-5qP9Fn9n.js"),[])),lk=m.lazy(()=>on(()=>import("./HelpPage-DPCBJ8ph.js"),[])),ck=m.lazy(()=>on(()=>import("./ActivityPage-DyrEdXQp.js"),[])),tl=m.lazy(()=>on(()=>import("./FileListPage-BE-BGX8M.js"),[]));function $t(){return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:48},children:s.jsx(oc,{size:28})})}function dk({msg:e,type:t,onClose:r}){m.useEffect(()=>{const i=setTimeout(r,3500);return()=>clearTimeout(i)},[r]);const n=t==="error"?"var(--danger)":t==="success"?"var(--accent)":"var(--accent-blue)";return s.jsxs("div",{className:"toast",role:"alert","aria-live":"polite",style:{position:"fixed",bottom:32,right:32,zIndex:9999,background:n,color:"#fff",padding:"14px 24px",borderRadius:"var(--radius)",fontFamily:"var(--font)",fontWeight:600,fontSize:14,boxShadow:"var(--shadow)",animation:"slideUp .3s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10,maxWidth:420},children:[s.jsx("span",{children:t==="error"?"✕":t==="success"?"✓":"ℹ"}),s.jsx("span",{style:{flex:1},children:e}),s.jsx("span",{onClick:r,style:{cursor:"pointer",opacity:.7,fontSize:18,lineHeight:1},children:"×"})]})}function oc({size:e=22,color:t="var(--accent)"}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:t,borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function ts({value:e}){const t=e>85?"var(--danger)":e>60?"var(--accent-amber)":"var(--accent)";return s.jsx("div",{style:{background:"var(--border)",borderRadius:99,height:6,overflow:"hidden",width:"100%"},children:s.jsx("div",{style:{width:`${e}%`,height:"100%",background:t,borderRadius:99,transition:"width .5s ease"}})})}function Rf({size:e=44}){return s.jsx("span",{style:{width:e,height:e,borderRadius:"50%",background:"var(--mega-red)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px var(--mega-red-glow)",flexShrink:0,overflow:"hidden",animation:"softPulse 3s ease infinite"},children:s.jsx("img",{src:Ee.logoImage,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function uk({jobs:e,history:t}){return!e.length&&!t.length?null:s.jsxs("div",{className:"transfer-panel",children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("strong",{style:{fontSize:13},children:"Transfers"}),s.jsx("span",{style:{fontSize:11,background:"var(--mega-red)",color:"#fff",padding:"2px 8px",borderRadius:99,fontWeight:700},children:e.filter(r=>r.status==="downloading").length})]}),s.jsxs("div",{style:{maxHeight:260,overflow:"auto",padding:12},children:[e.map(r=>s.jsxs("div",{style:{marginBottom:12},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:12,marginBottom:6},children:[s.jsx("span",{style:{color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.name}),s.jsx("span",{style:{color:r.status==="failed"?"var(--danger)":"var(--accent-blue)",fontWeight:800},children:r.status==="failed"?"Failed":`${r.percent}%`})]}),s.jsx(ts,{value:r.percent})]},r.id)),t.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",fontWeight:800,margin:"10px 0 8px",textTransform:"uppercase"},children:"Recent downloads"}),t.slice(0,4).map(r=>s.jsxs("div",{style:{padding:"8px 0",borderTop:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.name}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:Xn(r.downloadedAt)})]},r.id))]})]})]})}function fk({title:e,message:t,onConfirm:r,onCancel:n,danger:i=!1}){return s.jsx("div",{className:"modal-backdrop",onClick:n,children:s.jsxs("div",{className:"modal-card",onClick:o=>o.stopPropagation(),children:[s.jsx("div",{style:{fontSize:36,textAlign:"center",marginBottom:16},children:i?"⚠️":"❓"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:8},children:e}),s.jsx("p",{style:{color:"var(--text-secondary)",fontFamily:"var(--font)",fontSize:14,textAlign:"center",marginBottom:28,lineHeight:1.5},children:t}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:n,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:r,className:"btn-primary",style:i?{background:"var(--danger)",boxShadow:"0 10px 28px rgba(248,113,113,.25)"}:void 0,children:i?"Delete":"Confirm"})]})]})})}function hk({file:e,onRename:t,onCancel:r}){const[n,i]=m.useState(e.name),o=m.useRef(null);return m.useEffect(()=>{var a;(a=o.current)==null||a.select()},[]),s.jsx("div",{className:"modal-backdrop",onClick:r,children:s.jsxs("div",{className:"modal-card",onClick:a=>a.stopPropagation(),children:[s.jsx("div",{style:{fontSize:32,textAlign:"center",marginBottom:12},children:"✏️"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:20},children:"Rename File"}),s.jsx("input",{ref:o,value:n,onChange:a=>i(a.target.value),onKeyDown:a=>a.key==="Enter"&&t(n),className:"input-field",style:{marginBottom:20}}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:r,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>t(n),className:"btn-primary",children:"Rename"})]})]})})}function om({tags:e}){return e!=null&&e.length?s.jsx("div",{style:{display:"flex",gap:4,marginTop:4,flexWrap:"wrap"},children:e.slice(0,3).map(t=>s.jsx("span",{style:{fontSize:10,padding:"2px 6px",borderRadius:6,background:"rgba(240,22,58,.12)",color:"var(--accent)",fontWeight:600},children:t},t))}):null}function gr({label:e,onClick:t,tone:r="neutral",disabled:n=!1}){const i=r==="accent"?"accent":r==="blue"?"blue":"";return s.jsx("button",{type:"button",className:`quick-action-btn ${i}`.trim(),title:e,disabled:n,onClick:o=>{o.stopPropagation(),n||t()},children:e})}function pk({file:e,onDelete:t,onShare:r,onPreview:n,onRename:i,onDownload:o,onMove:a,onCopy:c,onTags:l,onEdit:d}){return s.jsxs("div",{className:"file-list-card",children:[s.jsx("div",{style:{fontSize:34,flexShrink:0,width:48,height:48,borderRadius:14,background:"rgba(56,189,248,.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:no(e.mimeType)}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:16,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:12,marginTop:3},children:[Ie(e.size)," · ",Xn(e.createdAt)]}),s.jsx(om,{tags:e.tags})]}),s.jsxs("div",{className:"file-list-actions",children:[s.jsx(gr,{label:"Preview",disabled:!td(e.mimeType),onClick:()=>n(e),tone:"blue"}),s.jsx(gr,{label:"Download",onClick:()=>o(e)}),s.jsx(gr,{label:"Share",onClick:()=>r(e),tone:"accent"}),s.jsx(gr,{label:"Rename",onClick:()=>i(e)}),s.jsx(tm,{file:e,onMove:a,onCopy:c,onTags:l,onEdit:d,onDelete:t})]})]})}function gk({file:e,token:t,onDelete:r,onShare:n,onPreview:i,onRename:o,onDownload:a,onMove:c,onCopy:l,onTags:d,onEdit:u}){var h;const f=(h=e.mimeType)==null?void 0:h.startsWith("image/");return s.jsxs("div",{className:"glass-card mega-file-card",style:{borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{height:170,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(217,0,7,.08), rgba(20,20,20,.95))",borderBottom:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[f?s.jsx(Db,{fileId:e.id,token:t,alt:e.name,mimeType:e.mimeType}):s.jsx("div",{style:{fontSize:56,display:"flex"},children:no(e.mimeType)}),s.jsx("div",{style:{position:"absolute",right:8,bottom:8,fontSize:10,fontWeight:700,background:"var(--bg-card)",color:"var(--text)",padding:"2px 6px",borderRadius:6},children:Ie(e.size)}),s.jsx("div",{style:{position:"absolute",right:10,top:10},children:s.jsx(tm,{file:e,onMove:c,onCopy:l,onTags:d,onEdit:u,onDelete:r})})]}),s.jsxs("div",{style:{padding:"14px"},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:5},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:11},children:[Ie(e.size)," · ",Xn(e.createdAt)]}),s.jsx(om,{tags:e.tags}),s.jsxs("div",{className:"grid-actions",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[s.jsx(gr,{label:"Preview",disabled:!td(e.mimeType),onClick:()=>i(e),tone:"blue"}),s.jsx(gr,{label:"Share",onClick:()=>n(e),tone:"accent"}),s.jsx(gr,{label:"Download",onClick:()=>a(e)}),s.jsx(gr,{label:"Rename",onClick:()=>o(e)})]})]})]})}function mk({account:e,onManage:t}){if(!(e!=null&&e.storageWarning))return null;const r=e.storageWarning==="critical";return s.jsxs("div",{style:{padding:"10px 20px",background:r?"rgba(255,77,77,.12)":"rgba(246,179,71,.12)",borderBottom:`1px solid ${r?"var(--danger)":"var(--accent-amber)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap",fontSize:13,fontFamily:"var(--font)"},children:[s.jsx("span",{children:r?"Storage almost full (95%+).":"Storage over 80% full."}),s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{padding:"6px 14px",fontSize:13},children:"Manage storage"})]})}function vk({username:e,stats:t,storagePercent:r,onUpload:n,onNewFolder:i}){return s.jsxs("div",{className:"mega-drive-header",children:[s.jsx("h1",{style:{fontSize:28,fontWeight:800,color:"var(--text)",marginBottom:20},children:"Cloud drive"}),s.jsxs("div",{className:"mega-drive-actions",children:[s.jsx("button",{type:"button",className:"btn-primary mega-upload-btn",onClick:n,children:"↑ Upload"}),s.jsx("button",{type:"button",className:"btn-secondary mega-folder-btn",onClick:i,children:"+ New folder"})]}),s.jsxs("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:8},children:[t.totalFiles," files · ",t.totalFolders," folders · ",Math.round(r),"% storage used",e?` · @${e}`:""]})]})}function yk({children:e,onNavigate:t,onSignOut:r,onUpgrade:n}){const{account:i,notifications:o,unreadCount:a,markAllRead:c}=nm();return s.jsxs(s.Fragment,{children:[s.jsx(B2,{account:i,onOpenSettings:()=>t("settings")}),s.jsx(U2,{account:i,onUpgrade:n}),s.jsx(mk,{account:i,onManage:()=>t("billing")}),s.jsxs("header",{className:"account-header mega-top-bar",style:{position:"sticky",top:0,zIndex:90,borderBottom:"1px solid var(--border)",background:"rgba(0,0,0,.92)",backdropFilter:"blur(16px)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,padding:"0 24px 0 280px"},children:[s.jsx(W2,{notifications:o,unreadCount:a,onMarkAllRead:c}),s.jsx(F2,{account:i,onNavigate:t,onSignOut:r})]}),e]})}function xk(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?new URLSearchParams(window.location.search).get("token"):null}function Pf(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/reset-password")?new URLSearchParams(window.location.search).get("token"):null}function Nf(){const e=window.location.pathname.replace(/\/+$/,"")||"/";if(e.startsWith("/share/")){const t=e.split("/");if(t.length>=3)return t[2]}return null}function wk(){const[e,t]=m.useState(()=>window.innerWidth);return m.useEffect(()=>{const r=()=>t(window.innerWidth);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),{width:e,isMobile:e<=768,isSmall:e<=520}}function rl({value:e,onChange:t,options:r,style:n}){var c;const[i,o]=m.useState(!1),a=((c=r.find(l=>l.value===e))==null?void 0:c.label)||e;return s.jsxs("div",{style:{position:"relative",...n},children:[s.jsxs("button",{type:"button",onClick:()=>o(!i),className:"select-field",style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,width:"100%"},children:[s.jsx("span",{children:a}),s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{transform:i?"rotate(180deg)":"none",transition:"0.2s",opacity:.5},children:s.jsx("path",{d:"M6 9l6 6 6-6"})})]}),i&&s.jsxs(s.Fragment,{children:[s.jsx("div",{onClick:()=>o(!1),style:{position:"fixed",inset:0,zIndex:90}}),s.jsx("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,minWidth:"100%",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"0 12px 40px rgba(0,0,0,0.35)",zIndex:91,overflow:"hidden",animation:"fadeIn 0.15s ease"},children:r.map(l=>s.jsxs("button",{onClick:()=>{t(l.value),o(!1)},style:{display:"block",width:"100%",padding:"10px 14px",border:"none",background:l.value===e?"rgba(59,130,246,0.12)":"transparent",color:"var(--text)",fontFamily:"var(--font)",fontSize:13,fontWeight:l.value===e?600:500,cursor:"pointer",textAlign:"left",transition:"background 0.15s",whiteSpace:"nowrap"},onMouseEnter:d=>{l.value!==e&&(d.currentTarget.style.background="rgba(255,255,255,0.06)")},onMouseLeave:d=>{d.currentTarget.style.background=l.value===e?"rgba(59,130,246,0.12)":"transparent"},children:[l.label,l.value===e&&s.jsx("span",{style:{marginLeft:8,color:"var(--accent-blue)"},children:"✓"})]},l.value))})]})]})}function bk(){const[e,t]=m.useState(xk),[r,n]=m.useState(Pf),[i,o]=m.useState(Nf),[a,c]=m.useState(()=>{const b=localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token"),P=Pf(),$=Nf();return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?"verify-email":P?"reset-password":$?"shared-link":b?"app":"landing"}),[l,d]=m.useState("login"),[u,f]=m.useState(()=>localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token")||""),[h,x]=m.useState(()=>localStorage.getItem("cv_user")||sessionStorage.getItem("cv_user")||""),[p,w]=m.useState(null),[S,v]=m.useState([]),[g,y]=m.useState([]),[k,C]=m.useState({totalFiles:0,storageUsed:0,storageQuota:1024*1024*1024,totalFolders:0}),[E,_]=m.useState(null),[I,D]=m.useState([]),[R,W]=m.useState(""),[B,M]=m.useState(!1),[H,ie]=m.useState(0),[de,me]=m.useState(null),[N,L]=m.useState([]),[z,Q]=m.useState(()=>{try{return JSON.parse(localStorage.getItem("cv_downloadHistory")||"[]")}catch{return[]}}),[ee,qe]=m.useState(null),[_e,He]=m.useState(null),[Ve,we]=m.useState(""),[co,st]=m.useState(!1),[Je,jt]=m.useState(!1),[Ze,sn]=m.useState(()=>localStorage.getItem("cv_viewMode")||"list"),[nr,ia]=m.useState("all"),[zt,uo]=m.useState(()=>localStorage.getItem("cv_theme")||"dark"),[Nr,mt]=m.useState(null),[ei,Ar]=m.useState(null),[at,an]=m.useState(!1),[re,T]=m.useState("drive"),[fe,Or]=m.useState("createdAt"),[J,ti]=m.useState("desc"),[fo,sm]=m.useState(""),[oa,am]=m.useState([]),[lm,cm]=m.useState(1),[dm,um]=m.useState(!1),[ho,ri]=m.useState(!1),[fm,hm]=m.useState([]),[pm,gm]=m.useState([]),[mm,vm]=m.useState([]),[md,ym]=m.useState(null),[ln,ni]=m.useState(null),[sa,vd]=m.useState(null),[aa,la]=m.useState(null),[yd,xd]=m.useState(null),[wd,xm]=m.useState("user"),[bd,wm]=m.useState([]),[kd,bm]=m.useState(null),[Mt,Dr]=m.useState(null),[km,Sm]=m.useState([]),[Cm,_m]=m.useState([]),[Em,jm]=m.useState([]),ca=D2(R,400),{isMobile:po,isSmall:Im}=wk(),ii=m.useRef(),Sd=m.useRef(),te=m.useCallback((b,P="info")=>qe({msg:b,type:P}),[]),q=m.useCallback((b,P)=>Fe(b,P,u),[u]),Ae=m.useCallback(async(b=1,P=!1)=>{var $,G;if(u){ri(!0);try{if(re==="trash"){const lt=await q("/trash");gm(zr(lt,"files")),vm(zr(lt,"folders")),ri(!1);return}if(re==="admin"){const[lt,Km]=await Promise.all([q("/admin/users?limit=50"),q("/admin/analytics").catch(()=>null)]);wm(zr(lt,"users")),bm(Km),ri(!1);return}if(re==="dashboard"){const lt=await q("/storage/usage");ym(lt),C({totalFiles:lt.fileCount??0,storageUsed:lt.storageUsed??0,storageQuota:lt.storageQuota??1024*1024*1024,totalFolders:lt.folderCount??0}),ri(!1);return}const K=new URLSearchParams;E&&K.set("folderId",E),ca&&K.set("search",ca),fo&&K.set("tag",fo),K.set("sortBy",fe),K.set("sortOrder",J),K.set("page",String(b)),K.set("limit","30");const[Z,vt,Lr,fa,Gm]=await Promise.all([q(`/files?${K}`),q(`/folders?${E?`parentId=${E}`:""}`),q("/storage/usage"),q("/files/tags").catch(()=>({tags:[]})),q("/folders?all=true").catch(()=>({folders:[]}))]),ha=zr(Z,"files"),Td=zr(vt,"folders");v(P?lt=>[...lt,...ha]:ha),y(Td),am((fa==null?void 0:fa.tags)||[]),hm(zr(Gm,"folders")),um(((($=Z==null?void 0:Z.pagination)==null?void 0:$.page)||1)<(((G=Z==null?void 0:Z.pagination)==null?void 0:G.totalPages)||1)),cm(b),C({totalFiles:Lr.fileCount??ha.length,storageUsed:Lr.storageUsed??0,storageQuota:Lr.storageQuota??1024*1024*1024,totalFolders:Lr.folderCount??Td.length})}catch(K){console.error("Refresh failed:",K);const Z=K.message.toLowerCase();Z.includes("credential")||Z.includes("unauthorized")||Z.includes("token")?(localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),f(""),x(""),c("landing")):te(K.message,"error")}ri(!1)}},[u,E,ca,fo,fe,J,re,q,te]);m.useEffect(()=>{Ae(1,!1)},[Ae]),m.useEffect(()=>{q("/users/me").then(b=>xm((b==null?void 0:b.role)||"user")).catch(()=>{})},[u,q]),m.useEffect(()=>{if(!u||re==="drive"||re==="trash"||re==="dashboard"||re==="admin")return;(async()=>{try{if(re==="recent"){const P=await q("/dashboard");Sm(P.recentFiles||[])}else if(re==="starred"){const P=await q("/files?isStarred=true&limit=50");_m(zr(P,"files"))}else if(re==="shared"){const P=await q("/dashboard"),$=[...P.sharedWithMe||[],...P.sharedByMe||[]].map(G=>G.file||G);jm($.filter(Boolean))}}catch{}})()},[u,re,q]);const Tm=b=>{Dr(b),b==="dashboard"&&T("dashboard"),b==="billing"&&Dr("billing")};m.useEffect(()=>{localStorage.setItem("cv_viewMode",Ze)},[Ze]),m.useEffect(()=>{localStorage.setItem("cv_theme",zt)},[zt]),m.useEffect(()=>{const b=P=>{if((P.metaKey||P.ctrlKey)&&P.key==="k"){P.preventDefault();const $=document.querySelector(".search-input-animated");$&&$.focus()}};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[]),m.useEffect(()=>{const b=P=>{var $;($=P.detail)!=null&&$.token&&f(P.detail.token)};return window.addEventListener("cv-token-refreshed",b),()=>window.removeEventListener("cv-token-refreshed",b)},[]);const Rm=(b,P,$,G,K=!0)=>{if(!b&&(G!=null&&G.email)){w(G),c("verify-email");return}if(!b)return;const Z=K?localStorage:sessionStorage,vt=K?sessionStorage:localStorage;Z.setItem("cv_token",b),vt.removeItem("cv_token"),P&&Z.setItem("cv_refreshToken",P),vt.removeItem("cv_refreshToken");const Lr=typeof $=="string"?$:(G==null?void 0:G.fullName)||(G==null?void 0:G.email);Z.setItem("cv_user",Lr||""),vt.removeItem("cv_user"),G!=null&&G.avatarUrl&&Z.setItem("cv_avatar",G.avatarUrl),f(b),x(Lr||""),c("app")},Pm=async b=>{const P=`${b.id}-${Date.now()}`;me({name:b.name,percent:0}),L($=>[{id:P,name:b.name,percent:0,status:"downloading"},...$].slice(0,6));try{const $=await Js(b.id,u,{onProgress:K=>{me({name:b.name,percent:K}),L(Z=>Z.map(vt=>vt.id===P?{...vt,percent:K}:vt))}});Yp($,b.name);const G={id:P,name:b.name,size:b.size,downloadedAt:new Date().toISOString()};Q(K=>{const Z=[G,...K].slice(0,12);return localStorage.setItem("cv_downloadHistory",JSON.stringify(Z)),Z}),L(K=>K.map(Z=>Z.id===P?{...Z,percent:100,status:"complete"}:Z)),te(`Downloaded "${b.name}"`,"success")}catch($){L(G=>G.map(K=>K.id===P?{...K,status:"failed"}:K)),te($.message,"error")}me(null)},Cd=async()=>{try{const b=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");await q("/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:b})})}catch{}localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),f(""),x(""),c("landing")},_d=async(b,P,$)=>{if(!u)throw new Error("Authentication token missing. Please log in again.");const G=new FormData;return G.append("file",b),P&&G.append("folderId",P),Gp("/files/upload",G,u,$)},Nm=async(b,P)=>q("/folders",{method:"POST",body:JSON.stringify({name:b,parentId:P||null})}),da=async(b,P=!1)=>{if(!u){te("Please log in again to upload files.","error");return}const $=Array.from(b||[]);if(!$.length)return;M(!0),ie(0);let G=0;try{if(P&&$.some(K=>K.webkitRelativePath))await L2($,{baseFolderId:E,createFolder:Nm,uploadFile:async(K,Z)=>{await _d(K,Z,ie),G++},onProgress:ie});else for(let K=0;K<$.length;K++)try{await _d($[K],E,Z=>{const vt=Math.round((K+Z/100)/$.length*100);ie(vt)}),G++}catch(Z){te(`Failed to upload "${$[K].name}": ${Z.message}`,"error")}}finally{M(!1),ie(0),Ae(1,!1),G>0&&te(`${G} file(s) uploaded successfully!`,"success")}},Am=b=>{mt({title:"Delete File",message:`Move "${b.name}" to trash? You can restore it later from the Trash view.`,danger:!0,onConfirm:async()=>{mt(null);try{await q(`/files/${b.id}`,{method:"DELETE"}),Ae(),te("File deleted","success")}catch(P){te(P.message,"error")}}})},Om=b=>{mt({title:"Delete Folder",message:`Delete folder "${b.name}" and all its contents? This cannot be undone.`,danger:!0,onConfirm:async()=>{mt(null);try{await q(`/folders/${b.id}`,{method:"DELETE"}),Ae(),te("Folder deleted","success")}catch(P){te(P.message,"error")}}})},Dm=async(b,P)=>q(`/files/${b.id}/share`,{method:"POST",body:JSON.stringify(P)}),Lm=async(b,{targetFolderId:P})=>{try{await q(`/files/${b.id}/move`,{method:"POST",body:JSON.stringify({targetFolderId:P})}),ni(null),Ae(1,!1),te("File moved","success")}catch($){te($.message,"error")}},zm=async(b,{targetFolderId:P,newName:$})=>{try{await q(`/files/${b.id}/copy`,{method:"POST",body:JSON.stringify({targetFolderId:P,newName:$!==b.name?$:void 0})}),ni(null),Ae(1,!1),te("File copied","success")}catch(G){te(G.message,"error")}},Mm=async(b,P)=>{try{await q(`/files/${b.id}`,{method:"PUT",body:JSON.stringify({tags:P})}),la(null),Ae(1,!1),te("Tags updated","success")}catch($){te($.message,"error")}},Fm=async b=>{try{await q(`/trash/files/${b}/restore`,{method:"POST"}),Ae(1,!1),te("File restored","success")}catch(P){te(P.message,"error")}},Um=async b=>{try{await q(`/trash/folders/${b}/restore`,{method:"POST"}),Ae(1,!1),te("Folder restored","success")}catch(P){te(P.message,"error")}},Bm=b=>{mt({title:"Delete forever",message:`"${b.name}" will be permanently deleted. This cannot be undone.`,danger:!0,onConfirm:async()=>{mt(null);try{await q(`/files/${b.id}/permanent`,{method:"DELETE"}),Ae(1,!1),te("File permanently deleted","success")}catch(P){te(P.message,"error")}}})},Wm=()=>{mt({title:"Empty trash",message:"All items in trash will be permanently deleted.",danger:!0,onConfirm:async()=>{mt(null);try{await q("/trash/empty",{method:"POST"}),Ae(1,!1),te("Trash emptied","success")}catch(b){te(b.message,"error")}}})},$m=async(b,P)=>{if(!P.trim()||P===b.name){Ar(null);return}try{await q(`/files/${b.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:P})}),Ae(),te("File renamed","success")}catch($){te($.message,"error")}Ar(null)},Ed=async()=>{if(Ve.trim()){try{await q("/folders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Ve,parentId:E})}),Ae(),te("Folder created!","success")}catch(b){te(b.message,"error")}we(""),st(!1)}},Hm=b=>{_(b.id),D(P=>[...P,b]),an(!1)},jd=b=>{b===-1?(_(null),D([])):(_(I[b].id),D(P=>P.slice(0,b+1)))},Vm=b=>{b.preventDefault(),jt(!1),b.dataTransfer.files.length>0&&da(b.dataTransfer.files)},go=m.useMemo(()=>{const b=Uu.find(P=>P.key===nr);return!b||b.key==="all"?S:S.filter(P=>b.test(P.mimeType||""))},[S,nr]),ua=k.storageQuota||1024*1024*1024,Id=Math.min(100,k.storageUsed/ua*100);if(e)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Kr}),s.jsx(Cf,{token:e,onVerified:()=>{t(null),window.history.replaceState({},"","/"),c("auth"),d("login")},onBack:()=>{t(null),window.history.replaceState({},"","/"),c("auth"),d("login")}})]});if(r)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Kr}),s.jsx(_f,{token:r,onBack:()=>{n(null),window.history.replaceState({},"","/"),c("auth"),d("login")}})]});if(a==="landing"&&!u)return s.jsx(zy,{onGetStarted:()=>{d("register"),c("auth")},onLogin:()=>{d("login"),c("auth")},onSignUp:()=>{d("register"),c("auth")}});if(a==="auth"&&!u)return s.jsx(Nb,{initialMode:l,onAuth:Rm,onNeedsVerification:b=>{w(b),c("verify-email")},onBack:()=>c("landing")});if(a==="verify-email"&&!u)return s.jsx(Cf,{email:p==null?void 0:p.email,onVerified:()=>{w(null),c("auth"),d("login")},onBack:()=>{w(null),c("auth"),d("login")}});if(a==="reset-password"&&!u)return s.jsx(_f,{token:r,onSuccess:()=>{n(null),window.history.replaceState({},"","/"),c("auth"),d("login")},onBack:()=>{n(null),c("auth"),d("login")}});if(a==="shared-link")return s.jsx("div",{"data-theme":zt,className:"app-shell",children:s.jsx(nk,{token:i})});const Ym=Ze==="grid"?gk:pk;return s.jsx(M2,{token:u,children:s.jsx(yk,{onNavigate:b=>{Dr(null),Tm(b)},onSignOut:Cd,onUpgrade:()=>{Dr("billing"),T("drive")},children:s.jsxs("div",{"data-theme":zt,className:"app-shell",children:[s.jsx("style",{children:Kr}),s.jsx("button",{type:"button",className:"mobile-menu-button","aria-label":"Open navigation menu","aria-expanded":at,onClick:()=>an(b=>!b),style:{display:"none",position:"fixed",top:16,left:16,zIndex:200,background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:10,width:40,height:40,alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--text)",fontSize:20,...po?{display:"flex"}:{}},children:"☰"}),at&&po&&s.jsx("div",{onClick:()=>an(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:99}}),s.jsxs("div",{className:`sidebar ${at?"open":""}`,style:{position:"fixed",left:0,top:0,bottom:0,width:260,background:"var(--bg-sidebar)",borderRight:"1px solid var(--border)",padding:"16px 12px",display:"flex",flexDirection:"column",gap:4,zIndex:100,transition:"transform .35s cubic-bezier(.4,0,.2,1)",...po?{transform:at?"translateX(0)":"translateX(-100%)"}:{}},children:[s.jsxs("div",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:10,padding:"4px 8px"},children:[s.jsx(Rf,{size:40}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:20,fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em"},children:"Drive"}),s.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:1},children:["@",h]})]})]}),s.jsx("button",{type:"button",onClick:()=>{var b;return(b=ii.current)==null?void 0:b.click()},className:"btn-primary",style:{minHeight:48,borderRadius:999,fontSize:15,justifyContent:"center",display:"flex",alignItems:"center",gap:8,margin:"0 0 16px"},children:"+ New"}),[{id:"drive",icon:"drive",label:"My Drive"},{id:"recent",icon:"recent",label:"Recent"},{id:"starred",icon:"starred",label:"Starred"},{id:"shared",icon:"shared",label:"Shared"},{id:"dashboard",icon:"usage",label:"Storage"},{id:"trash",icon:"trash",label:"Trash"},{id:"activity",icon:"activity",label:"Activity"},...wd==="admin"||wd==="super_admin"?[{id:"admin",icon:"admin",label:"Admin"}]:[]].map(b=>s.jsxs("button",{type:"button",className:`nav-item${re===b.id?" active":""}`,"aria-current":re===b.id?"page":void 0,onClick:()=>{Dr(null),T(b.id),an(!1),b.id==="drive"&&(_(null),D([]))},children:[s.jsx(H2,{name:b.icon,active:re===b.id}),s.jsx("span",{children:b.label})]},b.id)),s.jsx("div",{style:{borderTop:"1px solid var(--border)",margin:"12px 0 8px"}}),s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1px",marginBottom:8,paddingLeft:4},children:"OVERVIEW"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16},children:[s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:k.totalFiles}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Files"})]}),s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:k.totalFolders}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Folders"})]})]}),s.jsxs("div",{style:{marginTop:"auto"},children:[s.jsxs("div",{style:{marginBottom:16,background:"var(--surface-raised)",borderRadius:14,padding:"14px",border:"1px solid var(--border)"},title:`${Ie(k.storageUsed)} of ${Ie(ua)} used`,children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:[s.jsx("span",{style:{fontWeight:600},children:"Free"}),s.jsxs("span",{children:[Ie(k.storageUsed)," of ",Ie(ua)," used"]})]}),s.jsx(ts,{value:Id}),s.jsx("button",{type:"button",onClick:()=>Dr("billing"),className:"btn-mega-red",style:{width:"100%",marginTop:12,minHeight:40,animation:"softPulse 3s ease infinite"},children:"Upgrade"})]}),s.jsx("button",{type:"button",onClick:Cd,className:"btn-danger",children:"Sign Out"})]})]}),s.jsxs("div",{className:"main-content",style:{marginLeft:po?0:260,padding:"20px 32px",minHeight:"100vh"},children:[s.jsx(kk,{appPage:Mt,setAppPage:Dr,api:q,token:u,notify:te,stats:k,usageDetail:md,adminUsers:bd,systemHealth:kd,loading:ho,onRefreshAccount:()=>{},theme:zt,setTheme:uo}),!Mt&&re==="recent"&&s.jsx(m.Suspense,{fallback:s.jsx($t,{}),children:s.jsx(tl,{title:"Recent files",files:km,emptyMessage:"No recent files yet.",onBack:()=>T("drive"),onOpen:He})}),!Mt&&re==="starred"&&s.jsx(m.Suspense,{fallback:s.jsx($t,{}),children:s.jsx(tl,{title:"Starred",files:Cm,emptyMessage:"Star files to see them here.",onBack:()=>T("drive"),onOpen:He})}),!Mt&&re==="shared"&&s.jsx(m.Suspense,{fallback:s.jsx($t,{}),children:s.jsx(tl,{title:"Shared with you",files:Em,emptyMessage:"Nothing shared yet.",onBack:()=>T("drive"),onOpen:He})}),!Mt&&re==="activity"&&s.jsx(m.Suspense,{fallback:s.jsx($t,{}),children:s.jsx(ck,{api:q,onBack:()=>T("drive")})}),!Mt&&re==="trash"&&s.jsx(Lb,{trashedFiles:pm,trashedFolders:mm,loading:ho,onRestoreFile:Fm,onRestoreFolder:Um,onPermanentDelete:Bm,onEmptyTrash:Wm,onBack:()=>T("drive")}),!Mt&&re==="dashboard"&&s.jsx(x2,{stats:k,usage:md,onBack:()=>T("drive")}),!Mt&&re==="admin"&&s.jsx(I2,{users:bd,systemHealth:kd,loading:ho,onBack:()=>T("drive")}),!Mt&&re==="drive"&&s.jsxs(s.Fragment,{children:[s.jsx(vk,{username:h,stats:k,storagePercent:Id,onUpload:()=>{var b;return(b=ii.current)==null?void 0:b.click()},onNewFolder:()=>st(!0)}),s.jsxs("div",{className:"drive-toolbar",style:{flexDirection:"column",alignItems:"stretch",gap:16},children:[s.jsxs("div",{className:"mega-search-bar drive-search",style:{position:"relative"},children:[s.jsx("span",{className:"search-icon","aria-hidden":"true",style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:"var(--text-muted)",pointerEvents:"none"},children:"🔍"}),s.jsx("input",{className:"input-field search-input-animated",placeholder:"Search Cloud drive...",value:R,onChange:b=>W(b.target.value),style:{width:"100%",padding:"12px 60px 12px 44px",borderRadius:999,background:"var(--bg-card)",border:"1px solid var(--border)",transition:"all .2s ease"}}),s.jsx("div",{style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"rgba(255,255,255,.08)",padding:"2px 6px",borderRadius:6,fontSize:11,fontWeight:700,color:"var(--text-muted)",pointerEvents:"none",border:"1px solid var(--border)"},children:"⌘K"})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"icon-btn",title:zt==="dark"?"Light mode":"Dark mode",onClick:()=>uo(b=>b==="dark"?"light":"dark"),children:zt==="dark"?"☀":"🌙"}),s.jsxs("div",{className:"view-toggle",children:[s.jsx("button",{type:"button",onClick:()=>sn("list"),className:`view-toggle-btn${Ze==="list"?" active":""}`,children:"☰"}),s.jsx("button",{type:"button",onClick:()=>sn("grid"),className:`view-toggle-btn${Ze==="grid"?" active":""}`,children:"▦"})]}),re==="drive"&&s.jsxs("div",{className:"drive-actions",style:{marginLeft:"auto"},children:[s.jsx("button",{type:"button",onClick:()=>st(b=>!b),className:"btn-secondary mega-folder-btn",children:"New folder"}),s.jsx("button",{type:"button",onClick:()=>{var b;return(b=ii.current)==null?void 0:b.click()},className:"btn-primary mega-upload-btn",children:"Upload"}),s.jsx("button",{type:"button",onClick:()=>{var b;return(b=Sd.current)==null?void 0:b.click()},className:"btn-secondary",children:"Folder"}),s.jsx("input",{ref:ii,type:"file",multiple:!0,hidden:!0,onChange:b=>{da(b.target.files),b.target.value=""}}),s.jsx("input",{ref:Sd,type:"file",multiple:!0,webkitdirectory:"",hidden:!0,onChange:b=>{da(b.target.files,!0),b.target.value=""}})]})]})]}),re==="drive"&&s.jsxs("div",{className:"drive-sortbar",children:[s.jsx(rl,{value:fe,onChange:Or,options:[{value:"createdAt",label:"Date"},{value:"name",label:"Name"},{value:"size",label:"Size"},{value:"updatedAt",label:"Modified"}]}),s.jsx(rl,{value:J,onChange:ti,options:[{value:"desc",label:"Descending"},{value:"asc",label:"Ascending"}]}),oa.length>0&&s.jsx(rl,{value:fo,onChange:sm,options:[{value:"",label:"All tags"},...oa.map(b=>({value:b,label:b}))],style:{gridColumn:Im?"1 / -1":void 0}})]}),re==="drive"&&s.jsx("div",{className:"filter-chips",children:Uu.map(b=>s.jsxs("button",{type:"button",onClick:()=>ia(b.key),className:`filter-chip${nr===b.key?" active":""}`,children:[s.jsx("span",{children:b.icon})," ",b.label]},b.key))}),re==="drive"&&co&&s.jsxs("div",{className:"new-folder-row",style:{display:"flex",gap:10,marginBottom:20,animation:"fadeIn .2s ease"},children:[s.jsx("input",{className:"input-field",placeholder:"Folder name…",value:Ve,onChange:b=>we(b.target.value),onKeyDown:b=>b.key==="Enter"&&Ed(),style:{width:260},autoFocus:!0}),s.jsx("button",{type:"button",onClick:Ed,className:"btn-primary",children:"Create"}),s.jsx("button",{type:"button",onClick:()=>st(!1),className:"btn-secondary",children:"Cancel"})]}),s.jsxs("div",{className:"breadcrumb-row",style:{alignItems:"center",gap:8,marginBottom:20,fontSize:14,color:"var(--text-muted)"},children:[s.jsxs("span",{onClick:()=>jd(-1),className:"breadcrumb-link",style:{color:E?"var(--text-secondary)":"var(--accent)"},children:[Ee.logo," Home"]}),I.map((b,P)=>s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--text-muted)"},children:"›"}),s.jsx("span",{onClick:()=>jd(P),className:"breadcrumb-link",style:{color:P===I.length-1?"var(--accent)":"var(--text-secondary)"},children:b.name})]},b.id))]}),B&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(240,22,58,.24)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(oc,{size:14})," Uploading…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent)"},children:[H,"%"]})]}),s.jsx(ts,{value:H})]}),de&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(64,144,255,.3)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(oc,{size:14,color:"var(--accent-blue)"})," Downloading ",de.name,"…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent-blue)"},children:[de.percent,"%"]})]}),s.jsx(ts,{value:de.percent})]}),s.jsx("div",{onDragOver:b=>{b.preventDefault(),jt(!0)},onDragLeave:()=>jt(!1),onDrop:Vm,className:`drop-zone${Je?" drag-over":""}`,children:Je?s.jsx("span",{style:{color:"var(--accent)",fontWeight:700,fontSize:16},children:"⬇ Drop files here to upload"}):s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:32,marginBottom:8},children:"📤"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:700,marginBottom:4},children:"Drag & drop files or folders"}),s.jsx("div",{style:{fontSize:13},children:"or use the Upload button above"})]})}),g.length>0&&s.jsxs("div",{style:{marginBottom:28},children:[s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px",marginBottom:12},children:"FOLDERS"}),s.jsx("div",{className:"folder-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:g.map(b=>s.jsx(Sk,{folder:b,onOpen:Hm,onDelete:Om},b.id))})]}),s.jsxs("div",{children:[s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:s.jsxs("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px"},children:["FILES ",go.length>0&&s.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:500},children:["(",go.length,")"]})]})}),ho?s.jsx(O2,{count:6,grid:Ze==="grid"}):go.length===0?s.jsxs("div",{className:"glass-card empty-state",style:{textAlign:"center",padding:"72px 32px",borderRadius:"var(--radius-lg)",border:"1.5px dashed var(--border)",animation:"fadeIn .3s ease"},children:[s.jsx("div",{style:{width:88,height:88,margin:"0 auto 20px",borderRadius:24,background:"var(--gradient-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"var(--glow)"},children:s.jsx(Rf,{size:48})}),s.jsx("div",{style:{fontWeight:800,fontSize:20,marginBottom:8,color:"var(--text)"},children:nr!=="all"?"No matching files":"No files in My Drive yet"}),s.jsx("div",{style:{fontSize:14,color:"var(--text-muted)",marginBottom:24,maxWidth:360,margin:"0 auto 24px"},children:nr!=="all"?"Try a different filter or upload new files.":"Upload photos, documents, and more. Everything stays secure in your drive."}),nr==="all"&&s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"btn-primary",onClick:()=>{var b;return(b=ii.current)==null?void 0:b.click()},children:"Upload your first file"}),s.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>st(!0),children:"Create folder"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`file-grid${Ze==="grid"?" grid-view":""}`,style:{display:Ze==="grid"?"grid":"flex",gridTemplateColumns:Ze==="grid"?"repeat(auto-fill, minmax(250px, 1fr))":void 0,flexDirection:Ze==="list"?"column":void 0,gap:Ze==="grid"?12:8},children:go.map(b=>s.jsx(Ym,{file:b,token:u,onDelete:Am,onShare:P=>vd(P),onPreview:He,onRename:Ar,onDownload:Pm,onMove:P=>ni({file:P,mode:"move"}),onCopy:P=>ni({file:P,mode:"copy"}),onTags:la,onEdit:xd},b.id))}),dm&&s.jsx("button",{type:"button",onClick:()=>Ae(lm+1,!0),className:"load-more-btn",children:"Load more files"})]})]})]})]}),_e&&s.jsx(Mg,{file:_e,token:u,onClose:()=>He(null)}),ln&&s.jsx(Ub,{file:ln.file,mode:ln.mode,folders:z2(fm),currentFolderId:E,onCancel:()=>ni(null),onConfirm:b=>ln.mode==="move"?Lm(ln.file,b):zm(ln.file,b)}),aa&&s.jsx(Wb,{file:aa,allTags:oa,onCancel:()=>la(null),onSave:b=>Mm(aa,b)}),sa&&s.jsx(y2,{file:sa,onCancel:()=>vd(null),onShare:b=>Dm(sa,b)}),yd&&s.jsx(j2,{file:yd,token:u,onClose:()=>xd(null),onUploadComplete:()=>Ae(1,!1)}),Nr&&s.jsx(fk,{title:Nr.title,message:Nr.message,danger:Nr.danger,onConfirm:Nr.onConfirm,onCancel:()=>mt(null)}),ei&&s.jsx(hk,{file:ei,onRename:b=>$m(ei,b),onCancel:()=>Ar(null)}),s.jsx(uk,{jobs:N,history:z}),ee&&s.jsx(dk,{msg:ee.msg,type:ee.type,onClose:()=>qe(null)})]})})})}function kk({appPage:e,setAppPage:t,api:r,notify:n,stats:i,usageDetail:o,adminUsers:a,systemHealth:c,loading:l,onRefreshAccount:d,theme:u,setTheme:f}){const{account:h,refreshAll:x}=nm();if(!e)return null;const p=()=>t(null);return e==="profile"?s.jsx(m.Suspense,{fallback:s.jsx($t,{}),children:s.jsx(ik,{account:h,onBack:p})}):e==="settings"?s.jsx(m.Suspense,{fallback:s.jsx($t,{}),children:s.jsx(ok,{account:h,api:r,onBack:p,onUpdated:()=>x(),notify:n,theme:u,onThemeChange:f})}):e==="security"?s.jsx(m.Suspense,{fallback:s.jsx($t,{}),children:s.jsx(sk,{api:r,account:h,onBack:p,notify:n})}):e==="billing"?s.jsx(m.Suspense,{fallback:s.jsx($t,{}),children:s.jsx(ak,{account:h,api:r,onBack:p,notify:n,onUpdated:()=>x()})}):e==="help"?s.jsx(m.Suspense,{fallback:s.jsx($t,{}),children:s.jsx(lk,{onBack:p})}):null}function Sk({folder:e,onOpen:t,onDelete:r}){const[n,i]=m.useState(!1);return s.jsxs("div",{className:"folder-card",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>t(e),children:[s.jsx("span",{style:{fontSize:24},children:"📁"}),s.jsx("div",{style:{flex:1,minWidth:0},children:s.jsx("div",{style:{fontWeight:600,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},children:e.name})}),s.jsx("button",{onClick:o=>{o.stopPropagation(),r(e)},style:{background:"none",border:"none",color:"rgba(255,100,100,.3)",cursor:"pointer",fontSize:14,padding:4,borderRadius:6,opacity:n?1:0,transition:"opacity .15s"},children:"🗑"})]})}Vp(document.getElementById("root")).render(s.jsx(m.StrictMode,{children:s.jsx(bk,{})}));export{Ee as B,Py as P,_k as S,Ie as a,no as f,s as j,m as r,Xn as t};
