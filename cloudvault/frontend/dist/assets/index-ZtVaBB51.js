var qk=Object.defineProperty;var Xk=(e,t,n)=>t in e?qk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _e=(e,t,n)=>Xk(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xx={exports:{}},sc={},vx={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vs=Symbol.for("react.element"),Qk=Symbol.for("react.portal"),Jk=Symbol.for("react.fragment"),Zk=Symbol.for("react.strict_mode"),eS=Symbol.for("react.profiler"),tS=Symbol.for("react.provider"),nS=Symbol.for("react.context"),rS=Symbol.for("react.forward_ref"),iS=Symbol.for("react.suspense"),oS=Symbol.for("react.memo"),sS=Symbol.for("react.lazy"),cm=Symbol.iterator;function aS(e){return e===null||typeof e!="object"?null:(e=cm&&e[cm]||e["@@iterator"],typeof e=="function"?e:null)}var bx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wx=Object.assign,kx={};function yo(e,t,n){this.props=e,this.context=t,this.refs=kx,this.updater=n||bx}yo.prototype.isReactComponent={};yo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sx(){}Sx.prototype=yo.prototype;function qf(e,t,n){this.props=e,this.context=t,this.refs=kx,this.updater=n||bx}var Xf=qf.prototype=new Sx;Xf.constructor=qf;wx(Xf,yo.prototype);Xf.isPureReactComponent=!0;var um=Array.isArray,Cx=Object.prototype.hasOwnProperty,Qf={current:null},Ex={key:!0,ref:!0,__self:!0,__source:!0};function _x(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Cx.call(t,r)&&!Ex.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vs,type:e,key:o,ref:s,props:i,_owner:Qf.current}}function lS(e,t){return{$$typeof:Vs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vs}function cS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var dm=/\/+/g;function Gc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cS(""+e.key):t.toString(36)}function La(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Vs:case Qk:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Gc(s,0):r,um(i)?(n="",e!=null&&(n=e.replace(dm,"$&/")+"/"),La(i,t,n,"",function(c){return c})):i!=null&&(Jf(i)&&(i=lS(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(dm,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",um(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Gc(o,a);s+=La(o,t,n,l,i)}else if(l=aS(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Gc(o,a++),s+=La(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function sa(e,t,n){if(e==null)return e;var r=[],i=0;return La(e,r,"","",function(o){return t.call(n,o,i++)}),r}function uS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gt={current:null},Oa={transition:null},dS={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:Oa,ReactCurrentOwner:Qf};function Tx(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:sa,forEach:function(e,t,n){sa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sa(e,function(){t++}),t},toArray:function(e){return sa(e,function(t){return t})||[]},only:function(e){if(!Jf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=yo;se.Fragment=Jk;se.Profiler=eS;se.PureComponent=qf;se.StrictMode=Zk;se.Suspense=iS;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dS;se.act=Tx;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wx({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Qf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Cx.call(t,l)&&!Ex.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Vs,type:e.type,key:i,ref:o,props:r,_owner:s}};se.createContext=function(e){return e={$$typeof:nS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tS,_context:e},e.Consumer=e};se.createElement=_x;se.createFactory=function(e){var t=_x.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:rS,render:e}};se.isValidElement=Jf;se.lazy=function(e){return{$$typeof:sS,_payload:{_status:-1,_result:e},_init:uS}};se.memo=function(e,t){return{$$typeof:oS,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=Oa.transition;Oa.transition={};try{e()}finally{Oa.transition=t}};se.unstable_act=Tx;se.useCallback=function(e,t){return gt.current.useCallback(e,t)};se.useContext=function(e){return gt.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return gt.current.useDeferredValue(e)};se.useEffect=function(e,t){return gt.current.useEffect(e,t)};se.useId=function(){return gt.current.useId()};se.useImperativeHandle=function(e,t,n){return gt.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return gt.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return gt.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return gt.current.useMemo(e,t)};se.useReducer=function(e,t,n){return gt.current.useReducer(e,t,n)};se.useRef=function(e){return gt.current.useRef(e)};se.useState=function(e){return gt.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return gt.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return gt.current.useTransition()};se.version="18.3.1";vx.exports=se;var w=vx.exports;const Z=Kf(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fS=w,hS=Symbol.for("react.element"),pS=Symbol.for("react.fragment"),mS=Object.prototype.hasOwnProperty,gS=fS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yS={key:!0,ref:!0,__self:!0,__source:!0};function Ix(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)mS.call(t,r)&&!yS.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hS,type:e,key:o,ref:s,props:i,_owner:gS.current}}sc.Fragment=pS;sc.jsx=Ix;sc.jsxs=Ix;xx.exports=sc;var u=xx.exports,jx={exports:{}},Ft={},Px={exports:{}},Rx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,U){var S=M.length;M.push(U);e:for(;0<S;){var X=S-1>>>1,ne=M[X];if(0<i(ne,U))M[X]=U,M[S]=ne,S=X;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var U=M[0],S=M.pop();if(S!==U){M[0]=S;e:for(var X=0,ne=M.length,E=ne>>>1;X<E;){var ye=2*(X+1)-1,Pe=M[ye],de=ye+1,ve=M[de];if(0>i(Pe,S))de<ne&&0>i(ve,Pe)?(M[X]=ve,M[de]=S,X=de):(M[X]=Pe,M[ye]=S,X=ye);else if(de<ne&&0>i(ve,S))M[X]=ve,M[de]=S,X=de;else break e}}return U}function i(M,U){var S=M.sortIndex-U.sortIndex;return S!==0?S:M.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,f=null,h=3,p=!1,m=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var U=n(c);U!==null;){if(U.callback===null)r(c);else if(U.startTime<=M)r(c),U.sortIndex=U.expirationTime,t(l,U);else break;U=n(c)}}function k(M){if(y=!1,v(M),!m)if(n(l)!==null)m=!0,q(_);else{var U=n(c);U!==null&&re(k,U.startTime-M)}}function _(M,U){m=!1,y&&(y=!1,g(I),I=-1),p=!0;var S=h;try{for(v(U),f=n(l);f!==null&&(!(f.expirationTime>U)||M&&!N());){var X=f.callback;if(typeof X=="function"){f.callback=null,h=f.priorityLevel;var ne=X(f.expirationTime<=U);U=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(l)&&r(l),v(U)}else r(l);f=n(l)}if(f!==null)var E=!0;else{var ye=n(c);ye!==null&&re(k,ye.startTime-U),E=!1}return E}finally{f=null,h=S,p=!1}}var C=!1,T=null,I=-1,A=5,P=-1;function N(){return!(e.unstable_now()-P<A)}function D(){if(T!==null){var M=e.unstable_now();P=M;var U=!0;try{U=T(!0,M)}finally{U?F():(C=!1,T=null)}}else C=!1}var F;if(typeof x=="function")F=function(){x(D)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,H=$.port2;$.port1.onmessage=D,F=function(){H.postMessage(null)}}else F=function(){b(D,0)};function q(M){T=M,C||(C=!0,F())}function re(M,U){I=b(function(){M(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,q(_))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var S=h;h=U;try{return M()}finally{h=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,U){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var S=h;h=M;try{return U()}finally{h=S}},e.unstable_scheduleCallback=function(M,U,S){var X=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?X+S:X):S=X,M){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=S+ne,M={id:d++,callback:U,priorityLevel:M,startTime:S,expirationTime:ne,sortIndex:-1},S>X?(M.sortIndex=S,t(c,M),n(l)===null&&M===n(c)&&(y?(g(I),I=-1):y=!0,re(k,S-X))):(M.sortIndex=ne,t(l,M),m||p||(m=!0,q(_))),M},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(M){var U=h;return function(){var S=h;h=U;try{return M.apply(this,arguments)}finally{h=S}}}})(Rx);Px.exports=Rx;var xS=Px.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vS=w,zt=xS;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ax=new Set,gs={};function xi(e,t){io(e,t),io(e+"Capture",t)}function io(e,t){for(gs[e]=t,e=0;e<t.length;e++)Ax.add(t[e])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,bS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fm={},hm={};function wS(e){return ld.call(hm,e)?!0:ld.call(fm,e)?!1:bS.test(e)?hm[e]=!0:(fm[e]=!0,!1)}function kS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function SS(e,t,n,r){if(t===null||typeof t>"u"||kS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g;function eh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zf,eh);et[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zf,eh);et[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zf,eh);et[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function th(e,t,n,r){var i=et.hasOwnProperty(t)?et[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(SS(t,n,i,r)&&(n=null),r||i===null?wS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Zn=vS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,aa=Symbol.for("react.element"),ji=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Dx=Symbol.for("react.context"),rh=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),dd=Symbol.for("react.suspense_list"),ih=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),Mx=Symbol.for("react.offscreen"),pm=Symbol.iterator;function Ao(e){return e===null||typeof e!="object"?null:(e=pm&&e[pm]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Object.assign,Yc;function Go(e){if(Yc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yc=t&&t[1]||""}return`
`+Yc+e}var Kc=!1;function qc(e,t){if(!e||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Go(e):""}function CS(e){switch(e.tag){case 5:return Go(e.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return e=qc(e.type,!1),e;case 11:return e=qc(e.type.render,!1),e;case 1:return e=qc(e.type,!0),e;default:return""}}function fd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pi:return"Fragment";case ji:return"Portal";case cd:return"Profiler";case nh:return"StrictMode";case ud:return"Suspense";case dd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dx:return(e.displayName||"Context")+".Consumer";case Nx:return(e._context.displayName||"Context")+".Provider";case rh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ih:return t=e.displayName||null,t!==null?t:fd(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return fd(e(t))}catch{}}return null}function ES(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fd(t);case 8:return t===nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _S(e){var t=Lx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function la(e){e._valueTracker||(e._valueTracker=_S(e))}function Ox(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lx(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function hl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hd(e,t){var n=t.checked;return Ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zx(e,t){t=t.checked,t!=null&&th(e,"checked",t,!1)}function pd(e,t){zx(e,t);var n=jr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?md(e,t.type,n):t.hasOwnProperty("defaultValue")&&md(e,t.type,jr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function md(e,t,n){(t!=="number"||hl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yo=Array.isArray;function Gi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return Ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ym(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(Yo(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jr(n)}}function Fx(e,t){var n=jr(t.value),r=jr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bx(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bx(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ca,Vx=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ca=ca||document.createElement("div"),ca.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ca.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ys(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TS=["Webkit","ms","Moz","O"];Object.keys(Qo).forEach(function(e){TS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qo[t]=Qo[e]})});function Ux(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qo.hasOwnProperty(e)&&Qo[e]?(""+t).trim():t+"px"}function Wx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ux(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var IS=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xd(e,t){if(t){if(IS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function vd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=null;function oh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wd=null,Yi=null,Ki=null;function vm(e){if(e=$s(e)){if(typeof wd!="function")throw Error(L(280));var t=e.stateNode;t&&(t=dc(t),wd(e.stateNode,e.type,t))}}function $x(e){Yi?Ki?Ki.push(e):Ki=[e]:Yi=e}function Hx(){if(Yi){var e=Yi,t=Ki;if(Ki=Yi=null,vm(e),t)for(e=0;e<t.length;e++)vm(t[e])}}function Gx(e,t){return e(t)}function Yx(){}var Xc=!1;function Kx(e,t,n){if(Xc)return e(t,n);Xc=!0;try{return Gx(e,t,n)}finally{Xc=!1,(Yi!==null||Ki!==null)&&(Yx(),Hx())}}function xs(e,t){var n=e.stateNode;if(n===null)return null;var r=dc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var kd=!1;if(Gn)try{var No={};Object.defineProperty(No,"passive",{get:function(){kd=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{kd=!1}function jS(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Jo=!1,pl=null,ml=!1,Sd=null,PS={onError:function(e){Jo=!0,pl=e}};function RS(e,t,n,r,i,o,s,a,l){Jo=!1,pl=null,jS.apply(PS,arguments)}function AS(e,t,n,r,i,o,s,a,l){if(RS.apply(this,arguments),Jo){if(Jo){var c=pl;Jo=!1,pl=null}else throw Error(L(198));ml||(ml=!0,Sd=c)}}function vi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bm(e){if(vi(e)!==e)throw Error(L(188))}function NS(e){var t=e.alternate;if(!t){if(t=vi(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return bm(i),e;if(o===r)return bm(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Xx(e){return e=NS(e),e!==null?Qx(e):null}function Qx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qx(e);if(t!==null)return t;e=e.sibling}return null}var Jx=zt.unstable_scheduleCallback,wm=zt.unstable_cancelCallback,DS=zt.unstable_shouldYield,MS=zt.unstable_requestPaint,ze=zt.unstable_now,LS=zt.unstable_getCurrentPriorityLevel,sh=zt.unstable_ImmediatePriority,Zx=zt.unstable_UserBlockingPriority,gl=zt.unstable_NormalPriority,OS=zt.unstable_LowPriority,ev=zt.unstable_IdlePriority,ac=null,En=null;function zS(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ac,e,void 0,(e.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:VS,FS=Math.log,BS=Math.LN2;function VS(e){return e>>>=0,e===0?32:31-(FS(e)/BS|0)|0}var ua=64,da=4194304;function Ko(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ko(a):(o&=s,o!==0&&(r=Ko(o)))}else s=n&~i,s!==0?r=Ko(s):o!==0&&(r=Ko(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-un(t),i=1<<n,r|=e[n],t&=~i;return r}function US(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-un(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=US(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Cd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tv(){var e=ua;return ua<<=1,!(ua&4194240)&&(ua=64),e}function Qc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Us(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-un(t),e[t]=n}function $S(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-un(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ah(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-un(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xe=0;function nv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rv,lh,iv,ov,sv,Ed=!1,fa=[],vr=null,br=null,wr=null,vs=new Map,bs=new Map,dr=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function km(e,t){switch(e){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":vs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(t.pointerId)}}function Do(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=$s(t),t!==null&&lh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function GS(e,t,n,r,i){switch(t){case"focusin":return vr=Do(vr,e,t,n,r,i),!0;case"dragenter":return br=Do(br,e,t,n,r,i),!0;case"mouseover":return wr=Do(wr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return vs.set(o,Do(vs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,bs.set(o,Do(bs.get(o)||null,e,t,n,r,i)),!0}return!1}function av(e){var t=ei(e.target);if(t!==null){var n=vi(t);if(n!==null){if(t=n.tag,t===13){if(t=qx(n),t!==null){e.blockedOn=t,sv(e.priority,function(){iv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function za(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_d(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bd=r,n.target.dispatchEvent(r),bd=null}else return t=$s(n),t!==null&&lh(t),e.blockedOn=n,!1;t.shift()}return!0}function Sm(e,t,n){za(e)&&n.delete(t)}function YS(){Ed=!1,vr!==null&&za(vr)&&(vr=null),br!==null&&za(br)&&(br=null),wr!==null&&za(wr)&&(wr=null),vs.forEach(Sm),bs.forEach(Sm)}function Mo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ed||(Ed=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,YS)))}function ws(e){function t(i){return Mo(i,e)}if(0<fa.length){Mo(fa[0],e);for(var n=1;n<fa.length;n++){var r=fa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vr!==null&&Mo(vr,e),br!==null&&Mo(br,e),wr!==null&&Mo(wr,e),vs.forEach(t),bs.forEach(t),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)av(n),n.blockedOn===null&&dr.shift()}var qi=Zn.ReactCurrentBatchConfig,xl=!0;function KS(e,t,n,r){var i=xe,o=qi.transition;qi.transition=null;try{xe=1,ch(e,t,n,r)}finally{xe=i,qi.transition=o}}function qS(e,t,n,r){var i=xe,o=qi.transition;qi.transition=null;try{xe=4,ch(e,t,n,r)}finally{xe=i,qi.transition=o}}function ch(e,t,n,r){if(xl){var i=_d(e,t,n,r);if(i===null)au(e,t,r,vl,n),km(e,r);else if(GS(i,e,t,n,r))r.stopPropagation();else if(km(e,r),t&4&&-1<HS.indexOf(e)){for(;i!==null;){var o=$s(i);if(o!==null&&rv(o),o=_d(e,t,n,r),o===null&&au(e,t,r,vl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else au(e,t,r,null,n)}}var vl=null;function _d(e,t,n,r){if(vl=null,e=oh(r),e=ei(e),e!==null)if(t=vi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vl=e,null}function lv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LS()){case sh:return 1;case Zx:return 4;case gl:case OS:return 16;case ev:return 536870912;default:return 16}default:return 16}}var mr=null,uh=null,Fa=null;function cv(){if(Fa)return Fa;var e,t=uh,n=t.length,r,i="value"in mr?mr.value:mr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Fa=i.slice(e,1<r?1-r:void 0)}function Ba(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ha(){return!0}function Cm(){return!1}function Bt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ha:Cm,this.isPropagationStopped=Cm,this}return Ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),t}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=Bt(xo),Ws=Ne({},xo,{view:0,detail:0}),XS=Bt(Ws),Jc,Zc,Lo,lc=Ne({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lo&&(Lo&&e.type==="mousemove"?(Jc=e.screenX-Lo.screenX,Zc=e.screenY-Lo.screenY):Zc=Jc=0,Lo=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:Zc}}),Em=Bt(lc),QS=Ne({},lc,{dataTransfer:0}),JS=Bt(QS),ZS=Ne({},Ws,{relatedTarget:0}),eu=Bt(ZS),eC=Ne({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),tC=Bt(eC),nC=Ne({},xo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rC=Bt(nC),iC=Ne({},xo,{data:0}),_m=Bt(iC),oC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=aC[e])?!!t[e]:!1}function fh(){return lC}var cC=Ne({},Ws,{key:function(e){if(e.key){var t=oC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(e){return e.type==="keypress"?Ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uC=Bt(cC),dC=Ne({},lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Bt(dC),fC=Ne({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),hC=Bt(fC),pC=Ne({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),mC=Bt(pC),gC=Ne({},lc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yC=Bt(gC),xC=[9,13,27,32],hh=Gn&&"CompositionEvent"in window,Zo=null;Gn&&"documentMode"in document&&(Zo=document.documentMode);var vC=Gn&&"TextEvent"in window&&!Zo,uv=Gn&&(!hh||Zo&&8<Zo&&11>=Zo),Im=" ",jm=!1;function dv(e,t){switch(e){case"keyup":return xC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ri=!1;function bC(e,t){switch(e){case"compositionend":return fv(t);case"keypress":return t.which!==32?null:(jm=!0,Im);case"textInput":return e=t.data,e===Im&&jm?null:e;default:return null}}function wC(e,t){if(Ri)return e==="compositionend"||!hh&&dv(e,t)?(e=cv(),Fa=uh=mr=null,Ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uv&&t.locale!=="ko"?null:t.data;default:return null}}var kC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kC[e.type]:t==="textarea"}function hv(e,t,n,r){$x(r),t=bl(t,"onChange"),0<t.length&&(n=new dh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var es=null,ks=null;function SC(e){Cv(e,0)}function cc(e){var t=Di(e);if(Ox(t))return e}function CC(e,t){if(e==="change")return t}var pv=!1;if(Gn){var tu;if(Gn){var nu="oninput"in document;if(!nu){var Rm=document.createElement("div");Rm.setAttribute("oninput","return;"),nu=typeof Rm.oninput=="function"}tu=nu}else tu=!1;pv=tu&&(!document.documentMode||9<document.documentMode)}function Am(){es&&(es.detachEvent("onpropertychange",mv),ks=es=null)}function mv(e){if(e.propertyName==="value"&&cc(ks)){var t=[];hv(t,ks,e,oh(e)),Kx(SC,t)}}function EC(e,t,n){e==="focusin"?(Am(),es=t,ks=n,es.attachEvent("onpropertychange",mv)):e==="focusout"&&Am()}function _C(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cc(ks)}function TC(e,t){if(e==="click")return cc(t)}function IC(e,t){if(e==="input"||e==="change")return cc(t)}function jC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pn=typeof Object.is=="function"?Object.is:jC;function Ss(e,t){if(pn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ld.call(t,i)||!pn(e[i],t[i]))return!1}return!0}function Nm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dm(e,t){var n=Nm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nm(n)}}function gv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yv(){for(var e=window,t=hl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hl(e.document)}return t}function ph(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function PC(e){var t=yv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gv(n.ownerDocument.documentElement,n)){if(r!==null&&ph(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Dm(n,o);var s=Dm(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var RC=Gn&&"documentMode"in document&&11>=document.documentMode,Ai=null,Td=null,ts=null,Id=!1;function Mm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Id||Ai==null||Ai!==hl(r)||(r=Ai,"selectionStart"in r&&ph(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ts&&Ss(ts,r)||(ts=r,r=bl(Td,"onSelect"),0<r.length&&(t=new dh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ai)))}function pa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ni={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},ru={},xv={};Gn&&(xv=document.createElement("div").style,"AnimationEvent"in window||(delete Ni.animationend.animation,delete Ni.animationiteration.animation,delete Ni.animationstart.animation),"TransitionEvent"in window||delete Ni.transitionend.transition);function uc(e){if(ru[e])return ru[e];if(!Ni[e])return e;var t=Ni[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xv)return ru[e]=t[n];return e}var vv=uc("animationend"),bv=uc("animationiteration"),wv=uc("animationstart"),kv=uc("transitionend"),Sv=new Map,Lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Sv.set(e,t),xi(t,[e])}for(var iu=0;iu<Lm.length;iu++){var ou=Lm[iu],AC=ou.toLowerCase(),NC=ou[0].toUpperCase()+ou.slice(1);Nr(AC,"on"+NC)}Nr(vv,"onAnimationEnd");Nr(bv,"onAnimationIteration");Nr(wv,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(kv,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xi("onBeforeInput",["compositionend","keypress","textInput","paste"]);xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DC=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Om(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,AS(r,t,void 0,e),e.currentTarget=null}function Cv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Om(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Om(i,a,c),o=l}}}if(ml)throw e=Sd,ml=!1,Sd=null,e}function Te(e,t){var n=t[Nd];n===void 0&&(n=t[Nd]=new Set);var r=e+"__bubble";n.has(r)||(Ev(t,e,2,!1),n.add(r))}function su(e,t,n){var r=0;t&&(r|=4),Ev(n,e,r,t)}var ma="_reactListening"+Math.random().toString(36).slice(2);function Cs(e){if(!e[ma]){e[ma]=!0,Ax.forEach(function(n){n!=="selectionchange"&&(DC.has(n)||su(n,!1,e),su(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ma]||(t[ma]=!0,su("selectionchange",!1,t))}}function Ev(e,t,n,r){switch(lv(t)){case 1:var i=KS;break;case 4:i=qS;break;default:i=ch}n=i.bind(null,t,n,e),i=void 0,!kd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function au(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=ei(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Kx(function(){var c=o,d=oh(n),f=[];e:{var h=Sv.get(e);if(h!==void 0){var p=dh,m=e;switch(e){case"keypress":if(Ba(n)===0)break e;case"keydown":case"keyup":p=uC;break;case"focusin":m="focus",p=eu;break;case"focusout":m="blur",p=eu;break;case"beforeblur":case"afterblur":p=eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=JS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=hC;break;case vv:case bv:case wv:p=tC;break;case kv:p=mC;break;case"scroll":p=XS;break;case"wheel":p=yC;break;case"copy":case"cut":case"paste":p=rC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Tm}var y=(t&4)!==0,b=!y&&e==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var x=c,v;x!==null;){v=x;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,g!==null&&(k=xs(x,g),k!=null&&y.push(Es(x,k,v)))),b)break;x=x.return}0<y.length&&(h=new p(h,m,null,n,d),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==bd&&(m=n.relatedTarget||n.fromElement)&&(ei(m)||m[Yn]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?ei(m):null,m!==null&&(b=vi(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(y=Em,k="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(y=Tm,k="onPointerLeave",g="onPointerEnter",x="pointer"),b=p==null?h:Di(p),v=m==null?h:Di(m),h=new y(k,x+"leave",p,n,d),h.target=b,h.relatedTarget=v,k=null,ei(d)===c&&(y=new y(g,x+"enter",m,n,d),y.target=v,y.relatedTarget=b,k=y),b=k,p&&m)t:{for(y=p,g=m,x=0,v=y;v;v=Ci(v))x++;for(v=0,k=g;k;k=Ci(k))v++;for(;0<x-v;)y=Ci(y),x--;for(;0<v-x;)g=Ci(g),v--;for(;x--;){if(y===g||g!==null&&y===g.alternate)break t;y=Ci(y),g=Ci(g)}y=null}else y=null;p!==null&&zm(f,h,p,y,!1),m!==null&&b!==null&&zm(f,b,m,y,!0)}}e:{if(h=c?Di(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var _=CC;else if(Pm(h))if(pv)_=IC;else{_=_C;var C=EC}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=TC);if(_&&(_=_(e,c))){hv(f,_,n,d);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&md(h,"number",h.value)}switch(C=c?Di(c):window,e){case"focusin":(Pm(C)||C.contentEditable==="true")&&(Ai=C,Td=c,ts=null);break;case"focusout":ts=Td=Ai=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,Mm(f,n,d);break;case"selectionchange":if(RC)break;case"keydown":case"keyup":Mm(f,n,d)}var T;if(hh)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ri?dv(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(uv&&n.locale!=="ko"&&(Ri||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ri&&(T=cv()):(mr=d,uh="value"in mr?mr.value:mr.textContent,Ri=!0)),C=bl(c,I),0<C.length&&(I=new _m(I,e,null,n,d),f.push({event:I,listeners:C}),T?I.data=T:(T=fv(n),T!==null&&(I.data=T)))),(T=vC?bC(e,n):wC(e,n))&&(c=bl(c,"onBeforeInput"),0<c.length&&(d=new _m("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}Cv(f,t)})}function Es(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=xs(e,n),o!=null&&r.unshift(Es(e,o,i)),o=xs(e,t),o!=null&&r.push(Es(e,o,i))),e=e.return}return r}function Ci(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zm(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=xs(n,o),l!=null&&s.unshift(Es(n,l,a))):i||(l=xs(n,o),l!=null&&s.push(Es(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var MC=/\r\n?/g,LC=/\u0000|\uFFFD/g;function Fm(e){return(typeof e=="string"?e:""+e).replace(MC,`
`).replace(LC,"")}function ga(e,t,n){if(t=Fm(t),Fm(e)!==t&&n)throw Error(L(425))}function wl(){}var jd=null,Pd=null;function Rd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ad=typeof setTimeout=="function"?setTimeout:void 0,OC=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,zC=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(e){return Bm.resolve(null).then(e).catch(FC)}:Ad;function FC(e){setTimeout(function(){throw e})}function lu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ws(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ws(t)}function kr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vo=Math.random().toString(36).slice(2),kn="__reactFiber$"+vo,_s="__reactProps$"+vo,Yn="__reactContainer$"+vo,Nd="__reactEvents$"+vo,BC="__reactListeners$"+vo,VC="__reactHandles$"+vo;function ei(e){var t=e[kn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yn]||n[kn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vm(e);e!==null;){if(n=e[kn])return n;e=Vm(e)}return t}e=n,n=e.parentNode}return null}function $s(e){return e=e[kn]||e[Yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Di(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function dc(e){return e[_s]||null}var Dd=[],Mi=-1;function Dr(e){return{current:e}}function Ie(e){0>Mi||(e.current=Dd[Mi],Dd[Mi]=null,Mi--)}function Ce(e,t){Mi++,Dd[Mi]=e.current,e.current=t}var Pr={},st=Dr(Pr),Et=Dr(!1),fi=Pr;function oo(e,t){var n=e.type.contextTypes;if(!n)return Pr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _t(e){return e=e.childContextTypes,e!=null}function kl(){Ie(Et),Ie(st)}function Um(e,t,n){if(st.current!==Pr)throw Error(L(168));Ce(st,t),Ce(Et,n)}function _v(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,ES(e)||"Unknown",i));return Ne({},n,r)}function Sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pr,fi=st.current,Ce(st,e),Ce(Et,Et.current),!0}function Wm(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=_v(e,t,fi),r.__reactInternalMemoizedMergedChildContext=e,Ie(Et),Ie(st),Ce(st,e)):Ie(Et),Ce(Et,n)}var On=null,fc=!1,cu=!1;function Tv(e){On===null?On=[e]:On.push(e)}function UC(e){fc=!0,Tv(e)}function Mr(){if(!cu&&On!==null){cu=!0;var e=0,t=xe;try{var n=On;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}On=null,fc=!1}catch(i){throw On!==null&&(On=On.slice(e+1)),Jx(sh,Mr),i}finally{xe=t,cu=!1}}return null}var Li=[],Oi=0,Cl=null,El=0,Wt=[],$t=0,hi=null,Vn=1,Un="";function Kr(e,t){Li[Oi++]=El,Li[Oi++]=Cl,Cl=e,El=t}function Iv(e,t,n){Wt[$t++]=Vn,Wt[$t++]=Un,Wt[$t++]=hi,hi=e;var r=Vn;e=Un;var i=32-un(r)-1;r&=~(1<<i),n+=1;var o=32-un(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Vn=1<<32-un(t)+i|n<<i|r,Un=o+e}else Vn=1<<o|n<<i|r,Un=e}function mh(e){e.return!==null&&(Kr(e,1),Iv(e,1,0))}function gh(e){for(;e===Cl;)Cl=Li[--Oi],Li[Oi]=null,El=Li[--Oi],Li[Oi]=null;for(;e===hi;)hi=Wt[--$t],Wt[$t]=null,Un=Wt[--$t],Wt[$t]=null,Vn=Wt[--$t],Wt[$t]=null}var Lt=null,Dt=null,je=!1,ln=null;function jv(e,t){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $m(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Lt=e,Dt=kr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Lt=e,Dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hi!==null?{id:Vn,overflow:Un}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Lt=e,Dt=null,!0):!1;default:return!1}}function Md(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ld(e){if(je){var t=Dt;if(t){var n=t;if(!$m(e,t)){if(Md(e))throw Error(L(418));t=kr(n.nextSibling);var r=Lt;t&&$m(e,t)?jv(r,n):(e.flags=e.flags&-4097|2,je=!1,Lt=e)}}else{if(Md(e))throw Error(L(418));e.flags=e.flags&-4097|2,je=!1,Lt=e}}}function Hm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Lt=e}function ya(e){if(e!==Lt)return!1;if(!je)return Hm(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rd(e.type,e.memoizedProps)),t&&(t=Dt)){if(Md(e))throw Pv(),Error(L(418));for(;t;)jv(e,t),t=kr(t.nextSibling)}if(Hm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Dt=kr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Dt=null}}else Dt=Lt?kr(e.stateNode.nextSibling):null;return!0}function Pv(){for(var e=Dt;e;)e=kr(e.nextSibling)}function so(){Dt=Lt=null,je=!1}function yh(e){ln===null?ln=[e]:ln.push(e)}var WC=Zn.ReactCurrentBatchConfig;function Oo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function xa(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gm(e){var t=e._init;return t(e._payload)}function Rv(e){function t(g,x){if(e){var v=g.deletions;v===null?(g.deletions=[x],g.flags|=16):v.push(x)}}function n(g,x){if(!e)return null;for(;x!==null;)t(g,x),x=x.sibling;return null}function r(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function i(g,x){return g=_r(g,x),g.index=0,g.sibling=null,g}function o(g,x,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<x?(g.flags|=2,x):v):(g.flags|=2,x)):(g.flags|=1048576,x)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,x,v,k){return x===null||x.tag!==6?(x=gu(v,g.mode,k),x.return=g,x):(x=i(x,v),x.return=g,x)}function l(g,x,v,k){var _=v.type;return _===Pi?d(g,x,v.props.children,k,v.key):x!==null&&(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===lr&&Gm(_)===x.type)?(k=i(x,v.props),k.ref=Oo(g,x,v),k.return=g,k):(k=Ya(v.type,v.key,v.props,null,g.mode,k),k.ref=Oo(g,x,v),k.return=g,k)}function c(g,x,v,k){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=yu(v,g.mode,k),x.return=g,x):(x=i(x,v.children||[]),x.return=g,x)}function d(g,x,v,k,_){return x===null||x.tag!==7?(x=ai(v,g.mode,k,_),x.return=g,x):(x=i(x,v),x.return=g,x)}function f(g,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=gu(""+x,g.mode,v),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case aa:return v=Ya(x.type,x.key,x.props,null,g.mode,v),v.ref=Oo(g,null,x),v.return=g,v;case ji:return x=yu(x,g.mode,v),x.return=g,x;case lr:var k=x._init;return f(g,k(x._payload),v)}if(Yo(x)||Ao(x))return x=ai(x,g.mode,v,null),x.return=g,x;xa(g,x)}return null}function h(g,x,v,k){var _=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:a(g,x,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case aa:return v.key===_?l(g,x,v,k):null;case ji:return v.key===_?c(g,x,v,k):null;case lr:return _=v._init,h(g,x,_(v._payload),k)}if(Yo(v)||Ao(v))return _!==null?null:d(g,x,v,k,null);xa(g,v)}return null}function p(g,x,v,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(v)||null,a(x,g,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case aa:return g=g.get(k.key===null?v:k.key)||null,l(x,g,k,_);case ji:return g=g.get(k.key===null?v:k.key)||null,c(x,g,k,_);case lr:var C=k._init;return p(g,x,v,C(k._payload),_)}if(Yo(k)||Ao(k))return g=g.get(v)||null,d(x,g,k,_,null);xa(x,k)}return null}function m(g,x,v,k){for(var _=null,C=null,T=x,I=x=0,A=null;T!==null&&I<v.length;I++){T.index>I?(A=T,T=null):A=T.sibling;var P=h(g,T,v[I],k);if(P===null){T===null&&(T=A);break}e&&T&&P.alternate===null&&t(g,T),x=o(P,x,I),C===null?_=P:C.sibling=P,C=P,T=A}if(I===v.length)return n(g,T),je&&Kr(g,I),_;if(T===null){for(;I<v.length;I++)T=f(g,v[I],k),T!==null&&(x=o(T,x,I),C===null?_=T:C.sibling=T,C=T);return je&&Kr(g,I),_}for(T=r(g,T);I<v.length;I++)A=p(T,g,I,v[I],k),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?I:A.key),x=o(A,x,I),C===null?_=A:C.sibling=A,C=A);return e&&T.forEach(function(N){return t(g,N)}),je&&Kr(g,I),_}function y(g,x,v,k){var _=Ao(v);if(typeof _!="function")throw Error(L(150));if(v=_.call(v),v==null)throw Error(L(151));for(var C=_=null,T=x,I=x=0,A=null,P=v.next();T!==null&&!P.done;I++,P=v.next()){T.index>I?(A=T,T=null):A=T.sibling;var N=h(g,T,P.value,k);if(N===null){T===null&&(T=A);break}e&&T&&N.alternate===null&&t(g,T),x=o(N,x,I),C===null?_=N:C.sibling=N,C=N,T=A}if(P.done)return n(g,T),je&&Kr(g,I),_;if(T===null){for(;!P.done;I++,P=v.next())P=f(g,P.value,k),P!==null&&(x=o(P,x,I),C===null?_=P:C.sibling=P,C=P);return je&&Kr(g,I),_}for(T=r(g,T);!P.done;I++,P=v.next())P=p(T,g,I,P.value,k),P!==null&&(e&&P.alternate!==null&&T.delete(P.key===null?I:P.key),x=o(P,x,I),C===null?_=P:C.sibling=P,C=P);return e&&T.forEach(function(D){return t(g,D)}),je&&Kr(g,I),_}function b(g,x,v,k){if(typeof v=="object"&&v!==null&&v.type===Pi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case aa:e:{for(var _=v.key,C=x;C!==null;){if(C.key===_){if(_=v.type,_===Pi){if(C.tag===7){n(g,C.sibling),x=i(C,v.props.children),x.return=g,g=x;break e}}else if(C.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===lr&&Gm(_)===C.type){n(g,C.sibling),x=i(C,v.props),x.ref=Oo(g,C,v),x.return=g,g=x;break e}n(g,C);break}else t(g,C);C=C.sibling}v.type===Pi?(x=ai(v.props.children,g.mode,k,v.key),x.return=g,g=x):(k=Ya(v.type,v.key,v.props,null,g.mode,k),k.ref=Oo(g,x,v),k.return=g,g=k)}return s(g);case ji:e:{for(C=v.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(g,x.sibling),x=i(x,v.children||[]),x.return=g,g=x;break e}else{n(g,x);break}else t(g,x);x=x.sibling}x=yu(v,g.mode,k),x.return=g,g=x}return s(g);case lr:return C=v._init,b(g,x,C(v._payload),k)}if(Yo(v))return m(g,x,v,k);if(Ao(v))return y(g,x,v,k);xa(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(g,x.sibling),x=i(x,v),x.return=g,g=x):(n(g,x),x=gu(v,g.mode,k),x.return=g,g=x),s(g)):n(g,x)}return b}var ao=Rv(!0),Av=Rv(!1),_l=Dr(null),Tl=null,zi=null,xh=null;function vh(){xh=zi=Tl=null}function bh(e){var t=_l.current;Ie(_l),e._currentValue=t}function Od(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xi(e,t){Tl=e,xh=zi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ct=!0),e.firstContext=null)}function Xt(e){var t=e._currentValue;if(xh!==e)if(e={context:e,memoizedValue:t,next:null},zi===null){if(Tl===null)throw Error(L(308));zi=e,Tl.dependencies={lanes:0,firstContext:e}}else zi=zi.next=e;return t}var ti=null;function wh(e){ti===null?ti=[e]:ti.push(e)}function Nv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,wh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kn(e,r)}function Kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cr=!1;function kh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kn(e,n)}return i=r.interleaved,i===null?(t.next=t,wh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kn(e,n)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ah(e,n)}}function Ym(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Il(e,t,n,r){var i=e.updateQueue;cr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=c=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,y=a;switch(h=t,p=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){f=m.call(p,f,h);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,h=typeof m=="function"?m.call(p,f,h):m,h==null)break e;f=Ne({},f,h);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);mi|=s,e.lanes=s,e.memoizedState=f}}function Km(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Hs={},_n=Dr(Hs),Ts=Dr(Hs),Is=Dr(Hs);function ni(e){if(e===Hs)throw Error(L(174));return e}function Sh(e,t){switch(Ce(Is,t),Ce(Ts,e),Ce(_n,Hs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yd(t,e)}Ie(_n),Ce(_n,t)}function lo(){Ie(_n),Ie(Ts),Ie(Is)}function Mv(e){ni(Is.current);var t=ni(_n.current),n=yd(t,e.type);t!==n&&(Ce(Ts,e),Ce(_n,n))}function Ch(e){Ts.current===e&&(Ie(_n),Ie(Ts))}var Re=Dr(0);function jl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uu=[];function Eh(){for(var e=0;e<uu.length;e++)uu[e]._workInProgressVersionPrimary=null;uu.length=0}var Ua=Zn.ReactCurrentDispatcher,du=Zn.ReactCurrentBatchConfig,pi=0,Ae=null,He=null,Ye=null,Pl=!1,ns=!1,js=0,$C=0;function nt(){throw Error(L(321))}function _h(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pn(e[n],t[n]))return!1;return!0}function Th(e,t,n,r,i,o){if(pi=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ua.current=e===null||e.memoizedState===null?KC:qC,e=n(r,i),ns){o=0;do{if(ns=!1,js=0,25<=o)throw Error(L(301));o+=1,Ye=He=null,t.updateQueue=null,Ua.current=XC,e=n(r,i)}while(ns)}if(Ua.current=Rl,t=He!==null&&He.next!==null,pi=0,Ye=He=Ae=null,Pl=!1,t)throw Error(L(300));return e}function Ih(){var e=js!==0;return js=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ae.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Qt(){if(He===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Ye===null?Ae.memoizedState:Ye.next;if(t!==null)Ye=t,He=e;else{if(e===null)throw Error(L(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ye===null?Ae.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ps(e,t){return typeof t=="function"?t(e):t}function fu(e){var t=Qt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=He,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((pi&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,Ae.lanes|=d,mi|=d}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,pn(r,t.memoizedState)||(Ct=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ae.lanes|=o,mi|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hu(e){var t=Qt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);pn(o,t.memoizedState)||(Ct=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lv(){}function Ov(e,t){var n=Ae,r=Qt(),i=t(),o=!pn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ct=!0),r=r.queue,jh(Bv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Rs(9,Fv.bind(null,n,r,i,t),void 0,null),qe===null)throw Error(L(349));pi&30||zv(n,t,i)}return i}function zv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fv(e,t,n,r){t.value=n,t.getSnapshot=r,Vv(t)&&Uv(e)}function Bv(e,t,n){return n(function(){Vv(t)&&Uv(e)})}function Vv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pn(e,n)}catch{return!0}}function Uv(e){var t=Kn(e,1);t!==null&&dn(t,e,1,-1)}function qm(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:e},t.queue=e,e=e.dispatch=YC.bind(null,Ae,e),[t.memoizedState,e]}function Rs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wv(){return Qt().memoizedState}function Wa(e,t,n,r){var i=yn();Ae.flags|=e,i.memoizedState=Rs(1|t,n,void 0,r===void 0?null:r)}function hc(e,t,n,r){var i=Qt();r=r===void 0?null:r;var o=void 0;if(He!==null){var s=He.memoizedState;if(o=s.destroy,r!==null&&_h(r,s.deps)){i.memoizedState=Rs(t,n,o,r);return}}Ae.flags|=e,i.memoizedState=Rs(1|t,n,o,r)}function Xm(e,t){return Wa(8390656,8,e,t)}function jh(e,t){return hc(2048,8,e,t)}function $v(e,t){return hc(4,2,e,t)}function Hv(e,t){return hc(4,4,e,t)}function Gv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yv(e,t,n){return n=n!=null?n.concat([e]):null,hc(4,4,Gv.bind(null,t,e),n)}function Ph(){}function Kv(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_h(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qv(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_h(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xv(e,t,n){return pi&21?(pn(n,t)||(n=tv(),Ae.lanes|=n,mi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ct=!0),e.memoizedState=n)}function HC(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=du.transition;du.transition={};try{e(!1),t()}finally{xe=n,du.transition=r}}function Qv(){return Qt().memoizedState}function GC(e,t,n){var r=Er(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jv(e))Zv(t,n);else if(n=Nv(e,t,n,r),n!==null){var i=pt();dn(n,e,r,i),e1(n,t,r)}}function YC(e,t,n){var r=Er(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jv(e))Zv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,pn(a,s)){var l=t.interleaved;l===null?(i.next=i,wh(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Nv(e,t,i,r),n!==null&&(i=pt(),dn(n,e,r,i),e1(n,t,r))}}function Jv(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function Zv(e,t){ns=Pl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function e1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ah(e,n)}}var Rl={readContext:Xt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},KC={readContext:Xt,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:Xt,useEffect:Xm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wa(4194308,4,Gv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wa(4,2,e,t)},useMemo:function(e,t){var n=yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=GC.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:qm,useDebugValue:Ph,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=qm(!1),t=e[0];return e=HC.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=yn();if(je){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),qe===null)throw Error(L(349));pi&30||zv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Xm(Bv.bind(null,r,o,e),[e]),r.flags|=2048,Rs(9,Fv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yn(),t=qe.identifierPrefix;if(je){var n=Un,r=Vn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=js++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$C++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qC={readContext:Xt,useCallback:Kv,useContext:Xt,useEffect:jh,useImperativeHandle:Yv,useInsertionEffect:$v,useLayoutEffect:Hv,useMemo:qv,useReducer:fu,useRef:Wv,useState:function(){return fu(Ps)},useDebugValue:Ph,useDeferredValue:function(e){var t=Qt();return Xv(t,He.memoizedState,e)},useTransition:function(){var e=fu(Ps)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:Lv,useSyncExternalStore:Ov,useId:Qv,unstable_isNewReconciler:!1},XC={readContext:Xt,useCallback:Kv,useContext:Xt,useEffect:jh,useImperativeHandle:Yv,useInsertionEffect:$v,useLayoutEffect:Hv,useMemo:qv,useReducer:hu,useRef:Wv,useState:function(){return hu(Ps)},useDebugValue:Ph,useDeferredValue:function(e){var t=Qt();return He===null?t.memoizedState=e:Xv(t,He.memoizedState,e)},useTransition:function(){var e=hu(Ps)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:Lv,useSyncExternalStore:Ov,useId:Qv,unstable_isNewReconciler:!1};function sn(e,t){if(e&&e.defaultProps){t=Ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pc={isMounted:function(e){return(e=e._reactInternals)?vi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),i=Er(e),o=Hn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(dn(t,e,i,r),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),i=Er(e),o=Hn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(dn(t,e,i,r),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=Er(e),i=Hn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sr(e,i,r),t!==null&&(dn(t,e,r,n),Va(t,e,r))}};function Qm(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ss(n,r)||!Ss(i,o):!0}function t1(e,t,n){var r=!1,i=Pr,o=t.contextType;return typeof o=="object"&&o!==null?o=Xt(o):(i=_t(t)?fi:st.current,r=t.contextTypes,o=(r=r!=null)?oo(e,i):Pr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Jm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pc.enqueueReplaceState(t,t.state,null)}function Fd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},kh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Xt(o):(o=_t(t)?fi:st.current,i.context=oo(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(zd(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pc.enqueueReplaceState(i,i.state,null),Il(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function co(e,t){try{var n="",r=t;do n+=CS(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function pu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var QC=typeof WeakMap=="function"?WeakMap:Map;function n1(e,t,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Nl||(Nl=!0,Xd=r),Bd(e,t)},n}function r1(e,t,n){n=Hn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Bd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Bd(e,t),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Zm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new QC;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=dE.bind(null,e,t,n),t.then(e,e))}function eg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Hn(-1,1),t.tag=2,Sr(n,t,1))),n.lanes|=1),e)}var JC=Zn.ReactCurrentOwner,Ct=!1;function dt(e,t,n,r){t.child=e===null?Av(t,null,n,r):ao(t,e.child,n,r)}function ng(e,t,n,r,i){n=n.render;var o=t.ref;return Xi(t,i),r=Th(e,t,n,r,o,i),n=Ih(),e!==null&&!Ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(je&&n&&mh(t),t.flags|=1,dt(e,t,r,i),t.child)}function rg(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,i1(e,t,o,r,i)):(e=Ya(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ss,n(s,r)&&e.ref===t.ref)return qn(e,t,i)}return t.flags|=1,e=_r(o,r),e.ref=t.ref,e.return=t,t.child=e}function i1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ss(o,r)&&e.ref===t.ref)if(Ct=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ct=!0);else return t.lanes=e.lanes,qn(e,t,i)}return Vd(e,t,n,r,i)}function o1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Bi,Nt),Nt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(Bi,Nt),Nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ce(Bi,Nt),Nt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ce(Bi,Nt),Nt|=r;return dt(e,t,i,n),t.child}function s1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vd(e,t,n,r,i){var o=_t(n)?fi:st.current;return o=oo(t,o),Xi(t,i),n=Th(e,t,n,r,o,i),r=Ih(),e!==null&&!Ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(je&&r&&mh(t),t.flags|=1,dt(e,t,n,i),t.child)}function ig(e,t,n,r,i){if(_t(n)){var o=!0;Sl(t)}else o=!1;if(Xi(t,i),t.stateNode===null)$a(e,t),t1(t,n,r),Fd(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xt(c):(c=_t(n)?fi:st.current,c=oo(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Jm(t,s,r,c),cr=!1;var h=t.memoizedState;s.state=h,Il(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Et.current||cr?(typeof d=="function"&&(zd(t,n,d,r),l=t.memoizedState),(a=cr||Qm(t,n,a,r,h,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Dv(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:sn(t.type,a),s.props=c,f=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xt(l):(l=_t(n)?fi:st.current,l=oo(t,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Jm(t,s,r,l),cr=!1,h=t.memoizedState,s.state=h,Il(t,r,s,i);var m=t.memoizedState;a!==f||h!==m||Et.current||cr?(typeof p=="function"&&(zd(t,n,p,r),m=t.memoizedState),(c=cr||Qm(t,n,c,r,h,m,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ud(e,t,n,r,o,i)}function Ud(e,t,n,r,i,o){s1(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Wm(t,n,!1),qn(e,t,o);r=t.stateNode,JC.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ao(t,e.child,null,o),t.child=ao(t,null,a,o)):dt(e,t,a,o),t.memoizedState=r.state,i&&Wm(t,n,!0),t.child}function a1(e){var t=e.stateNode;t.pendingContext?Um(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Um(e,t.context,!1),Sh(e,t.containerInfo)}function og(e,t,n,r,i){return so(),yh(i),t.flags|=256,dt(e,t,n,r),t.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function $d(e){return{baseLanes:e,cachePool:null,transitions:null}}function l1(e,t,n){var r=t.pendingProps,i=Re.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ce(Re,i&1),e===null)return Ld(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=yc(s,r,0,null),e=ai(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$d(n),t.memoizedState=Wd,e):Rh(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ZC(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=_r(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=_r(a,o):(o=ai(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?$d(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Wd,r}return o=e.child,e=o.sibling,r=_r(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rh(e,t){return t=yc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function va(e,t,n,r){return r!==null&&yh(r),ao(t,e.child,null,n),e=Rh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ZC(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=pu(Error(L(422))),va(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=yc({mode:"visible",children:r.children},i,0,null),o=ai(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ao(t,e.child,null,s),t.child.memoizedState=$d(s),t.memoizedState=Wd,o);if(!(t.mode&1))return va(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(L(419)),r=pu(o,r,void 0),va(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ct||a){if(r=qe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kn(e,i),dn(r,e,i,-1))}return Oh(),r=pu(Error(L(421))),va(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fE.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Dt=kr(i.nextSibling),Lt=t,je=!0,ln=null,e!==null&&(Wt[$t++]=Vn,Wt[$t++]=Un,Wt[$t++]=hi,Vn=e.id,Un=e.overflow,hi=t),t=Rh(t,r.children),t.flags|=4096,t)}function sg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Od(e.return,t,n)}function mu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function c1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(dt(e,t,r.children,n),r=Re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sg(e,n,t);else if(e.tag===19)sg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&jl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),mu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&jl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}mu(t,!0,n,null,o);break;case"together":mu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $a(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=_r(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_r(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function eE(e,t,n){switch(t.tag){case 3:a1(t),so();break;case 5:Mv(t);break;case 1:_t(t.type)&&Sl(t);break;case 4:Sh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ce(_l,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Re,Re.current&1),t.flags|=128,null):n&t.child.childLanes?l1(e,t,n):(Ce(Re,Re.current&1),e=qn(e,t,n),e!==null?e.sibling:null);Ce(Re,Re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return c1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(Re,Re.current),r)break;return null;case 22:case 23:return t.lanes=0,o1(e,t,n)}return qn(e,t,n)}var u1,Hd,d1,f1;u1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hd=function(){};d1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ni(_n.current);var o=null;switch(n){case"input":i=hd(e,i),r=hd(e,r),o=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),o=[];break;case"textarea":i=gd(e,i),r=gd(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wl)}xd(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Te("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};f1=function(e,t,n,r){n!==r&&(t.flags|=4)};function zo(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tE(e,t,n){var r=t.pendingProps;switch(gh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return _t(t.type)&&kl(),rt(t),null;case 3:return r=t.stateNode,lo(),Ie(Et),Ie(st),Eh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ya(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ln!==null&&(Zd(ln),ln=null))),Hd(e,t),rt(t),null;case 5:Ch(t);var i=ni(Is.current);if(n=t.type,e!==null&&t.stateNode!=null)d1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return rt(t),null}if(e=ni(_n.current),ya(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kn]=t,r[_s]=o,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)Te(qo[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":mm(r,o),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Te("invalid",r);break;case"textarea":ym(r,o),Te("invalid",r)}xd(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ga(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ga(r.textContent,a,e),i=["children",""+a]):gs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Te("scroll",r)}switch(n){case"input":la(r),gm(r,o,!0);break;case"textarea":la(r),xm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=wl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bx(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[kn]=t,e[_s]=r,u1(e,t,!1,!1),t.stateNode=e;e:{switch(s=vd(n,r),n){case"dialog":Te("cancel",e),Te("close",e),i=r;break;case"iframe":case"object":case"embed":Te("load",e),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)Te(qo[i],e);i=r;break;case"source":Te("error",e),i=r;break;case"img":case"image":case"link":Te("error",e),Te("load",e),i=r;break;case"details":Te("toggle",e),i=r;break;case"input":mm(e,r),i=hd(e,r),Te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Te("invalid",e);break;case"textarea":ym(e,r),i=gd(e,r),Te("invalid",e);break;default:i=r}xd(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Wx(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vx(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ys(e,l):typeof l=="number"&&ys(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(gs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Te("scroll",e):l!=null&&th(e,o,l,s))}switch(n){case"input":la(e),gm(e,r,!1);break;case"textarea":la(e),xm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gi(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)f1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=ni(Is.current),ni(_n.current),ya(t)){if(r=t.stateNode,n=t.memoizedProps,r[kn]=t,(o=r.nodeValue!==n)&&(e=Lt,e!==null))switch(e.tag){case 3:ga(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ga(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=t,t.stateNode=r}return rt(t),null;case 13:if(Ie(Re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&Dt!==null&&t.mode&1&&!(t.flags&128))Pv(),so(),t.flags|=98560,o=!1;else if(o=ya(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[kn]=t}else so(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),o=!1}else ln!==null&&(Zd(ln),ln=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Re.current&1?Ge===0&&(Ge=3):Oh())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return lo(),Hd(e,t),e===null&&Cs(t.stateNode.containerInfo),rt(t),null;case 10:return bh(t.type._context),rt(t),null;case 17:return _t(t.type)&&kl(),rt(t),null;case 19:if(Ie(Re),o=t.memoizedState,o===null)return rt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)zo(o,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=jl(e),s!==null){for(t.flags|=128,zo(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Re,Re.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>uo&&(t.flags|=128,r=!0,zo(o,!1),t.lanes=4194304)}else{if(!r)if(e=jl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!je)return rt(t),null}else 2*ze()-o.renderingStartTime>uo&&n!==1073741824&&(t.flags|=128,r=!0,zo(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=Re.current,Ce(Re,r?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return Lh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Nt&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function nE(e,t){switch(gh(t),t.tag){case 1:return _t(t.type)&&kl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lo(),Ie(Et),Ie(st),Eh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ch(t),null;case 13:if(Ie(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));so()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Re),null;case 4:return lo(),null;case 10:return bh(t.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var ba=!1,ot=!1,rE=typeof WeakSet=="function"?WeakSet:Set,G=null;function Fi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function Gd(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var ag=!1;function iE(e,t){if(jd=xl,e=yv(),ph(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++c===i&&(a=s),h===o&&++d===r&&(l=s),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pd={focusedElem:e,selectionRange:n},xl=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,b=m.memoizedState,g=t.stateNode,x=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:sn(t.type,y),b);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(k){Oe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return m=ag,ag=!1,m}function rs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Gd(t,n,o)}i=i.next}while(i!==r)}}function mc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function h1(e){var t=e.alternate;t!==null&&(e.alternate=null,h1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kn],delete t[_s],delete t[Nd],delete t[BC],delete t[VC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function p1(e){return e.tag===5||e.tag===3||e.tag===4}function lg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||p1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wl));else if(r!==4&&(e=e.child,e!==null))for(Kd(e,t,n),e=e.sibling;e!==null;)Kd(e,t,n),e=e.sibling}function qd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qd(e,t,n),e=e.sibling;e!==null;)qd(e,t,n),e=e.sibling}var Xe=null,an=!1;function ir(e,t,n){for(n=n.child;n!==null;)m1(e,t,n),n=n.sibling}function m1(e,t,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 5:ot||Fi(n,t);case 6:var r=Xe,i=an;Xe=null,ir(e,t,n),Xe=r,an=i,Xe!==null&&(an?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(an?(e=Xe,n=n.stateNode,e.nodeType===8?lu(e.parentNode,n):e.nodeType===1&&lu(e,n),ws(e)):lu(Xe,n.stateNode));break;case 4:r=Xe,i=an,Xe=n.stateNode.containerInfo,an=!0,ir(e,t,n),Xe=r,an=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Gd(n,t,s),i=i.next}while(i!==r)}ir(e,t,n);break;case 1:if(!ot&&(Fi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,t,a)}ir(e,t,n);break;case 21:ir(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,ir(e,t,n),ot=r):ir(e,t,n);break;default:ir(e,t,n)}}function cg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rE),t.forEach(function(r){var i=hE.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Xe=a.stateNode,an=!1;break e;case 3:Xe=a.stateNode.containerInfo,an=!0;break e;case 4:Xe=a.stateNode.containerInfo,an=!0;break e}a=a.return}if(Xe===null)throw Error(L(160));m1(o,s,i),Xe=null,an=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Oe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)g1(t,e),t=t.sibling}function g1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nn(t,e),gn(e),r&4){try{rs(3,e,e.return),mc(3,e)}catch(y){Oe(e,e.return,y)}try{rs(5,e,e.return)}catch(y){Oe(e,e.return,y)}}break;case 1:nn(t,e),gn(e),r&512&&n!==null&&Fi(n,n.return);break;case 5:if(nn(t,e),gn(e),r&512&&n!==null&&Fi(n,n.return),e.flags&32){var i=e.stateNode;try{ys(i,"")}catch(y){Oe(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&zx(i,o),vd(a,s);var c=vd(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?Wx(i,f):d==="dangerouslySetInnerHTML"?Vx(i,f):d==="children"?ys(i,f):th(i,d,f,c)}switch(a){case"input":pd(i,o);break;case"textarea":Fx(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Gi(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?Gi(i,!!o.multiple,o.defaultValue,!0):Gi(i,!!o.multiple,o.multiple?[]:"",!1))}i[_s]=o}catch(y){Oe(e,e.return,y)}}break;case 6:if(nn(t,e),gn(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Oe(e,e.return,y)}}break;case 3:if(nn(t,e),gn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ws(t.containerInfo)}catch(y){Oe(e,e.return,y)}break;case 4:nn(t,e),gn(e);break;case 13:nn(t,e),gn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Dh=ze())),r&4&&cg(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(c=ot)||d,nn(t,e),ot=c):nn(t,e),gn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(f=G=d;G!==null;){switch(h=G,p=h.child,h.tag){case 0:case 11:case 14:case 15:rs(4,h,h.return);break;case 1:Fi(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){Oe(r,n,y)}}break;case 5:Fi(h,h.return);break;case 22:if(h.memoizedState!==null){dg(f);continue}}p!==null?(p.return=h,G=p):dg(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ux("display",s))}catch(y){Oe(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Oe(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:nn(t,e),gn(e),r&4&&cg(e);break;case 21:break;default:nn(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(p1(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ys(i,""),r.flags&=-33);var o=lg(e);qd(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=lg(e);Kd(e,a,s);break;default:throw Error(L(161))}}catch(l){Oe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function oE(e,t,n){G=e,y1(e)}function y1(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var i=G,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ba;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ot;a=ba;var c=ot;if(ba=s,(ot=l)&&!c)for(G=i;G!==null;)s=G,l=s.child,s.tag===22&&s.memoizedState!==null?fg(i):l!==null?(l.return=s,G=l):fg(i);for(;o!==null;)G=o,y1(o),o=o.sibling;G=i,ba=a,ot=c}ug(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,G=o):ug(e)}}function ug(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||mc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:sn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Km(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Km(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ws(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}ot||t.flags&512&&Yd(t)}catch(h){Oe(t,t.return,h)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function dg(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function fg(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mc(4,t)}catch(l){Oe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Oe(t,i,l)}}var o=t.return;try{Yd(t)}catch(l){Oe(t,o,l)}break;case 5:var s=t.return;try{Yd(t)}catch(l){Oe(t,s,l)}}}catch(l){Oe(t,t.return,l)}if(t===e){G=null;break}var a=t.sibling;if(a!==null){a.return=t.return,G=a;break}G=t.return}}var sE=Math.ceil,Al=Zn.ReactCurrentDispatcher,Ah=Zn.ReactCurrentOwner,Kt=Zn.ReactCurrentBatchConfig,ue=0,qe=null,Ue=null,Ze=0,Nt=0,Bi=Dr(0),Ge=0,As=null,mi=0,gc=0,Nh=0,is=null,St=null,Dh=0,uo=1/0,Ln=null,Nl=!1,Xd=null,Cr=null,wa=!1,gr=null,Dl=0,os=0,Qd=null,Ha=-1,Ga=0;function pt(){return ue&6?ze():Ha!==-1?Ha:Ha=ze()}function Er(e){return e.mode&1?ue&2&&Ze!==0?Ze&-Ze:WC.transition!==null?(Ga===0&&(Ga=tv()),Ga):(e=xe,e!==0||(e=window.event,e=e===void 0?16:lv(e.type)),e):1}function dn(e,t,n,r){if(50<os)throw os=0,Qd=null,Error(L(185));Us(e,n,r),(!(ue&2)||e!==qe)&&(e===qe&&(!(ue&2)&&(gc|=n),Ge===4&&fr(e,Ze)),Tt(e,r),n===1&&ue===0&&!(t.mode&1)&&(uo=ze()+500,fc&&Mr()))}function Tt(e,t){var n=e.callbackNode;WS(e,t);var r=yl(e,e===qe?Ze:0);if(r===0)n!==null&&wm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wm(n),t===1)e.tag===0?UC(hg.bind(null,e)):Tv(hg.bind(null,e)),zC(function(){!(ue&6)&&Mr()}),n=null;else{switch(nv(r)){case 1:n=sh;break;case 4:n=Zx;break;case 16:n=gl;break;case 536870912:n=ev;break;default:n=gl}n=E1(n,x1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function x1(e,t){if(Ha=-1,Ga=0,ue&6)throw Error(L(327));var n=e.callbackNode;if(Qi()&&e.callbackNode!==n)return null;var r=yl(e,e===qe?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ml(e,r);else{t=r;var i=ue;ue|=2;var o=b1();(qe!==e||Ze!==t)&&(Ln=null,uo=ze()+500,si(e,t));do try{cE();break}catch(a){v1(e,a)}while(!0);vh(),Al.current=o,ue=i,Ue!==null?t=0:(qe=null,Ze=0,t=Ge)}if(t!==0){if(t===2&&(i=Cd(e),i!==0&&(r=i,t=Jd(e,i))),t===1)throw n=As,si(e,0),fr(e,r),Tt(e,ze()),n;if(t===6)fr(e,r);else{if(i=e.current.alternate,!(r&30)&&!aE(i)&&(t=Ml(e,r),t===2&&(o=Cd(e),o!==0&&(r=o,t=Jd(e,o))),t===1))throw n=As,si(e,0),fr(e,r),Tt(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:qr(e,St,Ln);break;case 3:if(fr(e,r),(r&130023424)===r&&(t=Dh+500-ze(),10<t)){if(yl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ad(qr.bind(null,e,St,Ln),t);break}qr(e,St,Ln);break;case 4:if(fr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-un(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sE(r/1960))-r,10<r){e.timeoutHandle=Ad(qr.bind(null,e,St,Ln),r);break}qr(e,St,Ln);break;case 5:qr(e,St,Ln);break;default:throw Error(L(329))}}}return Tt(e,ze()),e.callbackNode===n?x1.bind(null,e):null}function Jd(e,t){var n=is;return e.current.memoizedState.isDehydrated&&(si(e,t).flags|=256),e=Ml(e,t),e!==2&&(t=St,St=n,t!==null&&Zd(t)),e}function Zd(e){St===null?St=e:St.push.apply(St,e)}function aE(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!pn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fr(e,t){for(t&=~Nh,t&=~gc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-un(t),r=1<<n;e[n]=-1,t&=~r}}function hg(e){if(ue&6)throw Error(L(327));Qi();var t=yl(e,0);if(!(t&1))return Tt(e,ze()),null;var n=Ml(e,t);if(e.tag!==0&&n===2){var r=Cd(e);r!==0&&(t=r,n=Jd(e,r))}if(n===1)throw n=As,si(e,0),fr(e,t),Tt(e,ze()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qr(e,St,Ln),Tt(e,ze()),null}function Mh(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(uo=ze()+500,fc&&Mr())}}function gi(e){gr!==null&&gr.tag===0&&!(ue&6)&&Qi();var t=ue;ue|=1;var n=Kt.transition,r=xe;try{if(Kt.transition=null,xe=1,e)return e()}finally{xe=r,Kt.transition=n,ue=t,!(ue&6)&&Mr()}}function Lh(){Nt=Bi.current,Ie(Bi)}function si(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,OC(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(gh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kl();break;case 3:lo(),Ie(Et),Ie(st),Eh();break;case 5:Ch(r);break;case 4:lo();break;case 13:Ie(Re);break;case 19:Ie(Re);break;case 10:bh(r.type._context);break;case 22:case 23:Lh()}n=n.return}if(qe=e,Ue=e=_r(e.current,null),Ze=Nt=t,Ge=0,As=null,Nh=gc=mi=0,St=is=null,ti!==null){for(t=0;t<ti.length;t++)if(n=ti[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ti=null}return e}function v1(e,t){do{var n=Ue;try{if(vh(),Ua.current=Rl,Pl){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pl=!1}if(pi=0,Ye=He=Ae=null,ns=!1,js=0,Ah.current=null,n===null||n.return===null){Ge=1,As=t,Ue=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=eg(s);if(p!==null){p.flags&=-257,tg(p,s,a,o,t),p.mode&1&&Zm(o,c,t),t=p,l=c;var m=t.updateQueue;if(m===null){var y=new Set;y.add(l),t.updateQueue=y}else m.add(l);break e}else{if(!(t&1)){Zm(o,c,t),Oh();break e}l=Error(L(426))}}else if(je&&a.mode&1){var b=eg(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),tg(b,s,a,o,t),yh(co(l,a));break e}}o=l=co(l,a),Ge!==4&&(Ge=2),is===null?is=[o]:is.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=n1(o,l,t);Ym(o,g);break e;case 1:a=l;var x=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Cr===null||!Cr.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=r1(o,a,t);Ym(o,k);break e}}o=o.return}while(o!==null)}k1(n)}catch(_){t=_,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function b1(){var e=Al.current;return Al.current=Rl,e===null?Rl:e}function Oh(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),qe===null||!(mi&268435455)&&!(gc&268435455)||fr(qe,Ze)}function Ml(e,t){var n=ue;ue|=2;var r=b1();(qe!==e||Ze!==t)&&(Ln=null,si(e,t));do try{lE();break}catch(i){v1(e,i)}while(!0);if(vh(),ue=n,Al.current=r,Ue!==null)throw Error(L(261));return qe=null,Ze=0,Ge}function lE(){for(;Ue!==null;)w1(Ue)}function cE(){for(;Ue!==null&&!DS();)w1(Ue)}function w1(e){var t=C1(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?k1(e):Ue=t,Ah.current=null}function k1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=nE(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,Ue=null;return}}else if(n=tE(n,t,Nt),n!==null){Ue=n;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Ge===0&&(Ge=5)}function qr(e,t,n){var r=xe,i=Kt.transition;try{Kt.transition=null,xe=1,uE(e,t,n,r)}finally{Kt.transition=i,xe=r}return null}function uE(e,t,n,r){do Qi();while(gr!==null);if(ue&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if($S(e,o),e===qe&&(Ue=qe=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,E1(gl,function(){return Qi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Kt.transition,Kt.transition=null;var s=xe;xe=1;var a=ue;ue|=4,Ah.current=null,iE(e,n),g1(n,e),PC(Pd),xl=!!jd,Pd=jd=null,e.current=n,oE(n),MS(),ue=a,xe=s,Kt.transition=o}else e.current=n;if(wa&&(wa=!1,gr=e,Dl=i),o=e.pendingLanes,o===0&&(Cr=null),zS(n.stateNode),Tt(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nl)throw Nl=!1,e=Xd,Xd=null,e;return Dl&1&&e.tag!==0&&Qi(),o=e.pendingLanes,o&1?e===Qd?os++:(os=0,Qd=e):os=0,Mr(),null}function Qi(){if(gr!==null){var e=nv(Dl),t=Kt.transition,n=xe;try{if(Kt.transition=null,xe=16>e?16:e,gr===null)var r=!1;else{if(e=gr,gr=null,Dl=0,ue&6)throw Error(L(331));var i=ue;for(ue|=4,G=e.current;G!==null;){var o=G,s=o.child;if(G.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(G=c;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:rs(8,d,o)}var f=d.child;if(f!==null)f.return=d,G=f;else for(;G!==null;){d=G;var h=d.sibling,p=d.return;if(h1(d),d===c){G=null;break}if(h!==null){h.return=p,G=h;break}G=p}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}G=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,G=s;else e:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:rs(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,G=g;break e}G=o.return}}var x=e.current;for(G=x;G!==null;){s=G;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,G=v;else e:for(s=x;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mc(9,a)}}catch(_){Oe(a,a.return,_)}if(a===s){G=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,G=k;break e}G=a.return}}if(ue=i,Mr(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ac,e)}catch{}r=!0}return r}finally{xe=n,Kt.transition=t}}return!1}function pg(e,t,n){t=co(n,t),t=n1(e,t,1),e=Sr(e,t,1),t=pt(),e!==null&&(Us(e,1,t),Tt(e,t))}function Oe(e,t,n){if(e.tag===3)pg(e,e,n);else for(;t!==null;){if(t.tag===3){pg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){e=co(n,e),e=r1(t,e,1),t=Sr(t,e,1),e=pt(),t!==null&&(Us(t,1,e),Tt(t,e));break}}t=t.return}}function dE(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(Ze&n)===n&&(Ge===4||Ge===3&&(Ze&130023424)===Ze&&500>ze()-Dh?si(e,0):Nh|=n),Tt(e,t)}function S1(e,t){t===0&&(e.mode&1?(t=da,da<<=1,!(da&130023424)&&(da=4194304)):t=1);var n=pt();e=Kn(e,t),e!==null&&(Us(e,t,n),Tt(e,n))}function fE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),S1(e,n)}function hE(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),S1(e,n)}var C1;C1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Et.current)Ct=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ct=!1,eE(e,t,n);Ct=!!(e.flags&131072)}else Ct=!1,je&&t.flags&1048576&&Iv(t,El,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$a(e,t),e=t.pendingProps;var i=oo(t,st.current);Xi(t,n),i=Th(null,t,r,e,i,n);var o=Ih();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_t(r)?(o=!0,Sl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kh(t),i.updater=pc,t.stateNode=i,i._reactInternals=t,Fd(t,r,e,n),t=Ud(null,t,r,!0,o,n)):(t.tag=0,je&&o&&mh(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($a(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=mE(r),e=sn(r,e),i){case 0:t=Vd(null,t,r,e,n);break e;case 1:t=ig(null,t,r,e,n);break e;case 11:t=ng(null,t,r,e,n);break e;case 14:t=rg(null,t,r,sn(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),Vd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),ig(e,t,r,i,n);case 3:e:{if(a1(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Dv(e,t),Il(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=co(Error(L(423)),t),t=og(e,t,r,n,i);break e}else if(r!==i){i=co(Error(L(424)),t),t=og(e,t,r,n,i);break e}else for(Dt=kr(t.stateNode.containerInfo.firstChild),Lt=t,je=!0,ln=null,n=Av(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),r===i){t=qn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return Mv(t),e===null&&Ld(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Rd(r,i)?s=null:o!==null&&Rd(r,o)&&(t.flags|=32),s1(e,t),dt(e,t,s,n),t.child;case 6:return e===null&&Ld(t),null;case 13:return l1(e,t,n);case 4:return Sh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ao(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),ng(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ce(_l,r._currentValue),r._currentValue=s,o!==null)if(pn(o.value,s)){if(o.children===i.children&&!Et.current){t=qn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Hn(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Od(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(L(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Od(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xi(t,n),i=Xt(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=sn(r,t.pendingProps),i=sn(r.type,i),rg(e,t,r,i,n);case 15:return i1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),$a(e,t),t.tag=1,_t(r)?(e=!0,Sl(t)):e=!1,Xi(t,n),t1(t,r,i),Fd(t,r,i,n),Ud(null,t,r,!0,e,n);case 19:return c1(e,t,n);case 22:return o1(e,t,n)}throw Error(L(156,t.tag))};function E1(e,t){return Jx(e,t)}function pE(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,n,r){return new pE(e,t,n,r)}function zh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mE(e){if(typeof e=="function")return zh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rh)return 11;if(e===ih)return 14}return 2}function _r(e,t){var n=e.alternate;return n===null?(n=Gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ya(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")zh(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Pi:return ai(n.children,i,o,t);case nh:s=8,i|=8;break;case cd:return e=Gt(12,n,t,i|2),e.elementType=cd,e.lanes=o,e;case ud:return e=Gt(13,n,t,i),e.elementType=ud,e.lanes=o,e;case dd:return e=Gt(19,n,t,i),e.elementType=dd,e.lanes=o,e;case Mx:return yc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nx:s=10;break e;case Dx:s=9;break e;case rh:s=11;break e;case ih:s=14;break e;case lr:s=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=Gt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ai(e,t,n,r){return e=Gt(7,e,r,t),e.lanes=n,e}function yc(e,t,n,r){return e=Gt(22,e,r,t),e.elementType=Mx,e.lanes=n,e.stateNode={isHidden:!1},e}function gu(e,t,n){return e=Gt(6,e,null,t),e.lanes=n,e}function yu(e,t,n){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gE(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qc(0),this.expirationTimes=Qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fh(e,t,n,r,i,o,s,a,l){return e=new gE(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Gt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(o),e}function yE(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ji,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _1(e){if(!e)return Pr;e=e._reactInternals;e:{if(vi(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(_t(n))return _v(e,n,t)}return t}function T1(e,t,n,r,i,o,s,a,l){return e=Fh(n,r,!0,e,i,o,s,a,l),e.context=_1(null),n=e.current,r=pt(),i=Er(n),o=Hn(r,i),o.callback=t??null,Sr(n,o,i),e.current.lanes=i,Us(e,i,r),Tt(e,r),e}function xc(e,t,n,r){var i=t.current,o=pt(),s=Er(i);return n=_1(n),t.context===null?t.context=n:t.pendingContext=n,t=Hn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sr(i,t,s),e!==null&&(dn(e,i,s,o),Va(e,i,s)),s}function Ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bh(e,t){mg(e,t),(e=e.alternate)&&mg(e,t)}function xE(){return null}var I1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vh(e){this._internalRoot=e}vc.prototype.render=Vh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));xc(e,t,null,null)};vc.prototype.unmount=Vh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gi(function(){xc(null,e,null,null)}),t[Yn]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var t=ov();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dr.length&&t!==0&&t<dr[n].priority;n++);dr.splice(n,0,e),n===0&&av(e)}};function Uh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gg(){}function vE(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ll(s);o.call(c)}}var s=T1(t,r,e,0,null,!1,!1,"",gg);return e._reactRootContainer=s,e[Yn]=s.current,Cs(e.nodeType===8?e.parentNode:e),gi(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ll(l);a.call(c)}}var l=Fh(e,0,!1,null,null,!1,!1,"",gg);return e._reactRootContainer=l,e[Yn]=l.current,Cs(e.nodeType===8?e.parentNode:e),gi(function(){xc(t,l,n,r)}),l}function wc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ll(s);a.call(l)}}xc(t,s,e,i)}else s=vE(n,t,e,i,r);return Ll(s)}rv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ko(t.pendingLanes);n!==0&&(ah(t,n|1),Tt(t,ze()),!(ue&6)&&(uo=ze()+500,Mr()))}break;case 13:gi(function(){var r=Kn(e,1);if(r!==null){var i=pt();dn(r,e,1,i)}}),Bh(e,1)}};lh=function(e){if(e.tag===13){var t=Kn(e,134217728);if(t!==null){var n=pt();dn(t,e,134217728,n)}Bh(e,134217728)}};iv=function(e){if(e.tag===13){var t=Er(e),n=Kn(e,t);if(n!==null){var r=pt();dn(n,e,t,r)}Bh(e,t)}};ov=function(){return xe};sv=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};wd=function(e,t,n){switch(t){case"input":if(pd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=dc(r);if(!i)throw Error(L(90));Ox(r),pd(r,i)}}}break;case"textarea":Fx(e,n);break;case"select":t=n.value,t!=null&&Gi(e,!!n.multiple,t,!1)}};Gx=Mh;Yx=gi;var bE={usingClientEntryPoint:!1,Events:[$s,Di,dc,$x,Hx,Mh]},Fo={findFiberByHostInstance:ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wE={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xx(e),e===null?null:e.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||xE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{ac=ka.inject(wE),En=ka}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bE;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uh(t))throw Error(L(200));return yE(e,t,null,n)};Ft.createRoot=function(e,t){if(!Uh(e))throw Error(L(299));var n=!1,r="",i=I1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fh(e,1,!1,null,null,n,!1,r,i),e[Yn]=t.current,Cs(e.nodeType===8?e.parentNode:e),new Vh(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Xx(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return gi(e)};Ft.hydrate=function(e,t,n){if(!bc(t))throw Error(L(200));return wc(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!Uh(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=I1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=T1(t,null,e,1,n??null,i,!1,o,s),e[Yn]=t.current,Cs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vc(t)};Ft.render=function(e,t,n){if(!bc(t))throw Error(L(200));return wc(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!bc(e))throw Error(L(40));return e._reactRootContainer?(gi(function(){wc(null,null,e,!1,function(){e._reactRootContainer=null,e[Yn]=null})}),!0):!1};Ft.unstable_batchedUpdates=Mh;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bc(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return wc(e,t,n,!1,r)};Ft.version="18.3.1-next-f1338f8080-20240426";function j1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j1)}catch(e){console.error(e)}}j1(),jx.exports=Ft;var kE=jx.exports,P1,yg=kE;P1=yg.createRoot,yg.hydrateRoot;const SE="modulepreload",CE=function(e){return"/"+e},xg={},bi=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=CE(l),l in xg)return;xg[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":SE,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},Jt="https://cloudvault.co.in/api/v1",kt={name:"CloudVault",logo:"CV",logoImage:"/cloudvault-logo.svg"};async function EE(){var n;const e=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");if(!e)return null;const t=localStorage.getItem("cv_refreshToken")?localStorage:sessionStorage;try{const r=await fetch(`${Jt}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:e})});if(!r.ok)return null;const i=await r.json(),o=((n=i.data)==null?void 0:n.accessToken)||i.accessToken;return o?(t.setItem("cv_token",o),window.dispatchEvent(new CustomEvent("cv-token-refreshed",{detail:{token:o}})),o):null}catch{return null}}function Wh(e){return new Error(`Cannot reach the server at ${Jt}${e}. Make sure the backend is running (npm start in project root).`)}const it=async(e,t={},n,r=!1)=>{const i={...t.headers||{}};n&&(i.Authorization=`Bearer ${n}`),t.body instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json");let o;try{o=await fetch(`${Jt}${e}`,{...t,headers:i})}catch{throw Wh(e)}if(o.status===401&&n&&!r){const l=await EE();if(l)return it(e,t,l,!0);throw new Error("Session expired. Please log in again.")}if(!o.ok){const l=await o.json().catch(()=>({error:"Unknown error"})),c=l.message||l.error||"",d=c.toLowerCase().includes("token")?"Something went wrong. Please try again.":c||`Request failed (${o.status})`;throw new Error(d)}if(!(o.headers.get("content-type")||"").includes("application/json"))return o;const a=await o.json();return a.success?a.data:a},Hr=(e,t)=>Array.isArray(e)?e:(e==null?void 0:e[t])||[];async function kc(e,t,{onProgress:n,disposition:r="download"}={}){const i=r==="preview"?`/files/${e}/preview`:`/files/${e}/download`;let o;try{o=await fetch(`${Jt}${i}`,{headers:{Authorization:`Bearer ${t}`}})}catch{throw Wh(i)}if(!o.ok){const a=await o.json().catch(()=>({error:"Download failed"}));throw new Error(a.error||a.message||"Download failed")}const s=Number(o.headers.get("content-length"))||0;return _E(o,s,n)}async function _E(e,t,n){if(!e.body||!t){const s=await e.blob();return n==null||n(100),s}const r=e.body.getReader(),i=[];let o=0;for(;;){const{done:s,value:a}=await r.read();if(s)break;i.push(a),o+=a.length,n&&t>0&&n(Math.min(99,Math.round(o/t*100)))}return n==null||n(100),new Blob(i,{type:e.headers.get("content-type")||"application/octet-stream"})}function R1(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function A1(e,t,n,r){return new Promise((i,o)=>{const s=new XMLHttpRequest;s.open("POST",`${Jt}${e}`),s.setRequestHeader("Authorization",`Bearer ${n}`),s.upload.onprogress=a=>{a.lengthComputable&&r&&r(Math.round(a.loaded/a.total*100))},s.onload=()=>{try{const a=JSON.parse(s.responseText);s.status>=200&&s.status<300?i(a.success?a.data:a):o(new Error(a.message||a.error||"Upload failed"))}catch{s.status>=200&&s.status<300?i({}):o(new Error("Upload failed"))}},s.onerror=()=>o(Wh(e)),s.send(t)})}const Ke=e=>{if(e===0)return"0 B";const t=1024,n=["B","KB","MB","GB"],r=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**r).toFixed(1)} ${n[r]}`},bo=e=>{const t=Math.floor((Date.now()-new Date(e))/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`},Gs=(e="")=>e.startsWith("image/")?"🖼️":e==="application/pdf"?"📄":e.startsWith("video/")?"🎬":e.startsWith("audio/")?"🎵":e.includes("zip")||e.includes("archive")?"🗜️":e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")?"📝":"📁",TE=["image/","video/","audio/"],IE=new Set(["application/pdf","text/plain","text/markdown","application/json"]),$h=(e="")=>{const t=(e||"").toLowerCase();return IE.has(t)?!0:TE.some(n=>t.startsWith(n))},jE=(e="")=>{const t=(e||"").toLowerCase();return t.startsWith("image/")?"image":t==="application/pdf"?"pdf":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("text/")||t==="application/json"?"text":null},vg=[{key:"all",label:"All",icon:"📋",test:()=>!0},{key:"images",label:"Images",icon:"🖼️",test:e=>e.startsWith("image/")},{key:"documents",label:"Docs",icon:"📄",test:e=>e.includes("pdf")||e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")},{key:"videos",label:"Videos",icon:"🎬",test:e=>e.startsWith("video/")},{key:"audio",label:"Audio",icon:"🎵",test:e=>e.startsWith("audio/")},{key:"archives",label:"Archives",icon:"🗜️",test:e=>e.includes("zip")||e.includes("archive")||e.includes("tar")||e.includes("rar")}],Ji=`
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
    --surface-raised: #ffffff;
    --border: rgba(15, 23, 42, 0.1);
    --border-hover: rgba(15, 23, 42, 0.22);
    --text: #0f172a;
    --text-secondary: #334155;
    --text-muted: #64748b;
    --shadow-color: rgba(0,0,0,.15);
    --shadow-color-hover: rgba(0,0,0,.25);
  }

  [data-theme="midnight"] {
    --bg-primary: #07111f;
    --bg-secondary: #0d1b2f;
    --bg-card: rgba(15, 30, 52, 0.9);
    --bg-card-hover: rgba(24, 45, 76, 0.95);
    --bg-sidebar: rgba(6, 17, 32, 0.96);
    --surface-raised: rgba(15, 30, 52, 0.9);
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
    --surface-raised: rgba(30, 25, 46, 0.9);
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

  html {
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: var(--bg-primary);
    font-family: var(--font);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
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
    box-shadow: var(--shadow);
  }

  .btn-primary,
  .btn-secondary,
  .btn-mega-red,
  .btn-ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    line-height: 1.2;
    user-select: none;
  }

  .btn-primary {
    padding: 12px 22px;
    border-radius: 999px;
    border: none;
    background: var(--text);
    color: var(--bg-primary);
    font-family: var(--font);
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 8px 24px var(--shadow-color, rgba(255,255,255,.12));
    transition: var(--transition);
  }

  .btn-primary:hover:not(:disabled) {
    filter: brightness(1.06);
    box-shadow: 0 10px 28px var(--shadow-color-hover, rgba(255,255,255,.16));
  }

  .btn-primary:active:not(:disabled) {
    filter: brightness(0.96);
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

  .btn-mega-red:hover:not(:disabled) {
    background: var(--mega-red-hover);
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

  .btn-secondary:hover:not(:disabled) {
    border-color: rgba(255,255,255,.25);
    color: var(--text);
    background: rgba(255,255,255,.06);
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

  .btn-ghost:hover:not(:disabled) {
    border-color: var(--border-hover);
    color: var(--text);
    background: rgba(255,255,255,.05);
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

  .icon-btn:hover:not(:disabled) {
    border-color: var(--border-hover);
    color: var(--text);
    background: rgba(56,189,248,.1);
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

  .filter-chip:hover:not(:disabled) {
    border-color: var(--border-hover);
    color: var(--text-secondary);
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
    background: rgba(0,0,0,.78);
    display: flex;
    align-items: center;
    justify-content: center;
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
    height: 56px;
    padding: 0 24px;
    margin-left: 260px;
    border-bottom: 1px solid var(--border);
    background: var(--bg-sidebar);
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
    color: var(--text) !important;
    border: 1px solid var(--border) !important;
    border-radius: 999px !important;
    padding: 12px 24px !important;
  }

  .transfer-panel {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 1200;
    width: min(380px, calc(100vw - 40px));
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    box-shadow: var(--shadow);
    overflow: hidden;
    animation: slideUp .35s cubic-bezier(.4,0,.2,1);
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
    background: rgba(1,6,12,.82);
    display: flex;
    align-items: center;
    justify-content: center;
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

  button {
    touch-action: manipulation;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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
  }

  .sidebar {
    transition: transform .35s cubic-bezier(.4,0,.2,1), width .3s ease;
    overflow-y: auto;
    overflow-x: hidden;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }

  .main-content {
    flex: 1;
    min-width: 0;
    overflow-x: hidden;
  }

  .account-header {
    justify-content: flex-end;
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .drive-toolbar-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    width: 100%;
  }

  .drive-toolbar-row .drive-actions {
    margin-left: auto;
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
    .account-header,
    .mega-top-bar {
      margin-left: 0 !important;
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
`,PE=[{id:"free",name:"Free",price:"₹0",period:"/mo",storage:"5 GB",features:["Standard uploads","Basic sharing","Web preview"]},{id:"pro",name:"Pro",price:"₹749",period:"/mo",storage:"100 GB",features:["Faster uploads","File version history","Priority support"],highlight:!0},{id:"premium",name:"Premium",price:"₹1,599",period:"/mo",storage:"1 TB",features:["Team sharing","Advanced analytics","Custom branding"]},{id:"team",name:"Team",price:"₹3,999",period:"/mo",storage:"2 TB",features:["Shared workspaces","Admin controls","SSO ready"]}],y8=[{id:"50gb",label:"+50 GB",price:"₹399"},{id:"100gb",label:"+100 GB",price:"₹749"},{id:"500gb",label:"+500 GB",price:"₹2,499"},{id:"1tb",label:"+1 TB",price:"₹3,999"}],RE=[{title:"Cloud Storage",desc:"5 GB of free, encrypted storage. Upload anything, access anywhere, sync across all your devices.",icon:u.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"})})},{title:"Private Sharing",desc:"Share with anyone — password-protected links, expiration dates, and granular permission controls.",icon:u.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),u.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]})},{title:"Smart Search",desc:"Find any file instantly with intelligent filters, tags, and full-text search across your entire drive.",icon:u.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("path",{d:"m21 21-4.3-4.3"})]})},{title:"Enterprise Security",desc:"AES-256 encryption, activity audit logs, role-based access, and zero-knowledge architecture.",icon:u.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}],AE=[{num:"01",title:"Never run out of space",desc:"Start with 5 GB free. Scale to terabytes when your needs grow."},{num:"02",title:"Share with anyone",desc:"Read-only, full access, password-protected, or expiring links — your choice."},{num:"03",title:"Total control",desc:"Your data, your rules. Manage every permission at every level."},{num:"04",title:"Works everywhere",desc:"Access from desktop, tablet, or mobile. No app install required."}],NE=[{q:"Is CloudVault free to use?",a:"Yes. Every account includes 5 GB of free storage with no credit card required. Upgrade anytime."},{q:"How secure are my files?",a:"Files are encrypted in transit (TLS 1.3) and at rest (AES-256). Share links support passwords and expiration."},{q:"Can I share with people outside my team?",a:"Absolutely. Create public or protected links with view, download, or edit permissions for anyone."},{q:"Can I cancel or change my plan?",a:"Plans are fully flexible. Upgrade, downgrade, or cancel from your billing settings at any time."}];function DE(){w.useEffect(()=>{const e=document.querySelectorAll(".lr-reveal");if(!e.length)return;const t=new IntersectionObserver(n=>n.forEach(r=>{r.isIntersecting&&(r.target.classList.add("lr-visible"),t.unobserve(r.target))}),{threshold:.08,rootMargin:"0px 0px -60px 0px"});return e.forEach(n=>t.observe(n)),()=>t.disconnect()},[])}function bg(e,t=2e3){const[n,r]=w.useState(0),i=w.useRef(null),o=w.useRef(!1);return w.useEffect(()=>{if(!i.current)return;const s=new IntersectionObserver(([a])=>{if(a.isIntersecting&&!o.current){o.current=!0;const l=performance.now(),c=d=>{const f=Math.min((d-l)/t,1),h=1-Math.pow(1-f,3);r(Math.floor(h*e)),f<1&&requestAnimationFrame(c)};requestAnimationFrame(c)}},{threshold:.3});return s.observe(i.current),()=>s.disconnect()},[e,t]),[n,i]}function ME({onGetStarted:e,onLogin:t,onSignUp:n}){const[r,i]=w.useState({filesStored:0,activeUsers:0,storageUsed:0,storageCapacity:0xa0000000000}),[o,s]=w.useState(!1),[a,l]=w.useState(null),c=w.useRef(null);DE(),w.useEffect(()=>{fetch(`${Jt}/public/stats`).then(y=>y.json()).then(y=>{y.success&&y.data&&i(y.data)}).catch(()=>{})},[]),w.useEffect(()=>{const y=()=>s(window.scrollY>30);return window.addEventListener("scroll",y,{passive:!0}),()=>window.removeEventListener("scroll",y)},[]);const[d,f]=bg(r.filesStored||1240,2200),[h,p]=bg(r.activeUsers||380,2e3),m=w.useRef(null);return w.useEffect(()=>{const y=m.current;if(!y)return;const b=y.getContext("2d");let g,x=[];const v=80,k=()=>{y.width=window.innerWidth,y.height=document.documentElement.scrollHeight};k(),window.addEventListener("resize",k);for(let C=0;C<v;C++)x.push({x:Math.random()*y.width,y:Math.random()*y.height,r:Math.random()*1.5+.3,dx:(Math.random()-.5)*.15,dy:(Math.random()-.5)*.12,opacity:Math.random()*.5+.1,pulse:Math.random()*Math.PI*2,pulseSpeed:Math.random()*.008+.003});const _=()=>{b.clearRect(0,0,y.width,y.height),x.forEach(C=>{C.x+=C.dx,C.y+=C.dy,C.pulse+=C.pulseSpeed;const T=C.opacity*(.6+.4*Math.sin(C.pulse));C.x<0&&(C.x=y.width),C.x>y.width&&(C.x=0),C.y<0&&(C.y=y.height),C.y>y.height&&(C.y=0),b.beginPath(),b.arc(C.x,C.y,C.r,0,Math.PI*2),b.fillStyle=`rgba(255,255,255,${T})`,b.fill()});for(let C=0;C<x.length;C++)for(let T=C+1;T<x.length;T++){const I=x[C].x-x[T].x,A=x[C].y-x[T].y,P=Math.sqrt(I*I+A*A);P<120&&(b.beginPath(),b.moveTo(x[C].x,x[C].y),b.lineTo(x[T].x,x[T].y),b.strokeStyle=`rgba(255,255,255,${.03*(1-P/120)})`,b.lineWidth=.5,b.stroke())}g=requestAnimationFrame(_)};return _(),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",k)}},[]),u.jsxs("div",{className:"lr-shell",children:[u.jsx("style",{children:LE}),u.jsxs("div",{className:"lr-bg","aria-hidden":"true",children:[u.jsx("canvas",{ref:m,className:"lr-bg__particles"}),u.jsx("div",{className:"lr-bg__aurora lr-bg__aurora--1"}),u.jsx("div",{className:"lr-bg__aurora lr-bg__aurora--2"}),u.jsx("div",{className:"lr-bg__aurora lr-bg__aurora--3"}),u.jsx("div",{className:"lr-bg__grid"})]}),u.jsx("header",{className:`lr-nav${o?" lr-nav--scrolled":""}`,ref:c,children:u.jsxs("div",{className:"lr-nav__inner",children:[u.jsxs("button",{type:"button",className:"lr-nav__brand",onClick:e,"aria-label":"CloudVault home",children:[u.jsx("span",{className:"lr-nav__logo",children:u.jsx("img",{src:kt.logoImage,alt:""})}),u.jsx("span",{className:"lr-nav__wordmark",children:kt.name})]}),u.jsx("nav",{className:"lr-nav__links",children:["Features","Security","Pricing","FAQ"].map(y=>u.jsx("a",{href:`#${y.toLowerCase()}`,children:y},y))}),u.jsxs("div",{className:"lr-nav__actions",children:[u.jsx("button",{type:"button",className:"lr-btn lr-btn--ghost",onClick:t,children:"Log in"}),u.jsx("button",{type:"button",className:"lr-btn lr-btn--primary",onClick:n,children:"Get started free"})]})]})}),u.jsxs("main",{children:[u.jsxs("section",{className:"lr-hero",children:[u.jsxs("div",{className:"lr-hero__ambient","aria-hidden":"true",children:[u.jsx("div",{className:"lr-hero__orb lr-hero__orb--1"}),u.jsx("div",{className:"lr-hero__orb lr-hero__orb--2"})]}),u.jsxs("div",{className:"lr-hero__content",children:[u.jsxs("div",{className:"lr-hero__badge-green lr-reveal",children:[u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M20 6 9 17l-5-5"})}),"Trusted by 500k+ users"]}),u.jsxs("h1",{className:"lr-hero__title lr-reveal",children:["CloudVault.",u.jsx("br",{}),"Your secure digital world."]}),u.jsx("p",{className:"lr-hero__sub lr-reveal",children:"Uncompromising privacy and performance."})]}),u.jsx("div",{className:"lr-hero__preview lr-reveal",children:u.jsxs("div",{className:"lr-preview",children:[u.jsx("div",{className:"lr-preview__glow","aria-hidden":"true"}),u.jsxs("div",{className:"lr-preview__body",children:[u.jsxs("aside",{className:"lr-preview__side-icons",children:[u.jsx("span",{className:"side-icon active",children:u.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"var(--accent)",stroke:"none",children:u.jsx("path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"})})}),u.jsx("span",{className:"side-icon",children:u.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})})}),u.jsx("span",{className:"side-icon",children:u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),u.jsx("line",{x1:"9",x2:"15",y1:"3",y2:"3"}),u.jsx("line",{x1:"9",x2:"15",y1:"21",y2:"21"}),u.jsx("path",{d:"M9 3v18"}),u.jsx("path",{d:"M15 3v18"})]})}),u.jsx("span",{className:"side-icon",children:u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),u.jsxs("div",{className:"lr-preview__main",children:[u.jsxs("div",{className:"lr-preview__header",children:[u.jsxs("div",{className:"lr-preview__search",children:[u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("path",{d:"m21 21-4.3-4.3"})]}),"Search"]}),u.jsxs("button",{className:"lr-preview__upload-btn",children:[u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),"Upload"]})]}),u.jsxs("div",{className:"lr-preview__grid",children:[u.jsxs("div",{className:"lr-preview__card folder",style:{animationDelay:"0.6s"},children:[u.jsx("div",{className:"lr-folder-icon"}),u.jsxs("div",{className:"lr-card-info",children:[u.jsx("h5",{children:"Project Alpha"}),u.jsx("span",{children:"Folder · 1.2 GB"})]})]}),u.jsx("div",{className:"lr-preview__card folder small-folder",style:{animationDelay:"0.7s"},children:u.jsx("div",{className:"lr-folder-icon"})}),u.jsx("div",{className:"lr-preview__card folder small-folder",style:{animationDelay:"0.8s"},children:u.jsx("div",{className:"lr-folder-icon"})}),u.jsxs("div",{className:"lr-preview__card file glass-file",style:{animationDelay:"0.9s"},children:[u.jsx("div",{className:"lr-file-icon excel",children:u.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),u.jsx("path",{d:"M3 9h18"}),u.jsx("path",{d:"M9 21V9"})]})}),u.jsxs("div",{className:"lr-card-info",children:[u.jsx("h5",{children:"Q3 Report.xlsx"}),u.jsx("span",{children:"Spreadsheet · 2.4 MB"})]})]})]}),u.jsxs("div",{className:"lr-preview__pagination",children:[u.jsx("span",{className:"dot active"}),u.jsx("span",{className:"dot"}),u.jsx("span",{className:"dot"})]})]})]})]})}),u.jsxs("div",{className:"lr-hero__ctas-centered lr-reveal",children:[u.jsx("button",{type:"button",className:"lr-btn lr-btn--mega-red",onClick:e,children:"Start Free – 5GB Included"}),u.jsx("a",{href:"#login",onClick:y=>{y.preventDefault(),t()},className:"lr-hero__login-link",children:"Log In"})]})]}),u.jsxs("section",{className:"lr-trust lr-reveal",children:[u.jsx("p",{children:"Secured with industry-leading technology"}),u.jsx("div",{className:"lr-trust__logos",children:["AES-256","TLS 1.3","SOC 2","GDPR"].map(y=>u.jsx("span",{className:"lr-trust__badge",children:y},y))})]}),u.jsx("section",{id:"features",className:"lr-section",children:u.jsxs("div",{className:"lr-section__inner",children:[u.jsxs("div",{className:"lr-section__header lr-reveal",children:[u.jsx("span",{className:"lr-kicker",children:"All-in-one platform"}),u.jsxs("h2",{children:["Everything you need to",u.jsx("br",{}),"store and share."]}),u.jsxs("p",{children:[kt.name," combines encrypted cloud storage with powerful tools to manage your digital life with confidence."]})]}),u.jsx("div",{className:"lr-features lr-reveal",children:RE.map((y,b)=>u.jsxs("article",{className:"lr-feature-card",style:{animationDelay:`${b*.1}s`},children:[u.jsx("div",{className:"lr-feature-card__icon",children:y.icon}),u.jsx("h3",{children:y.title}),u.jsx("p",{children:y.desc})]},y.title))})]})}),u.jsx("section",{id:"security",className:"lr-section lr-section--alt",children:u.jsx("div",{className:"lr-section__inner",children:u.jsxs("div",{className:"lr-security lr-reveal",children:[u.jsxs("div",{className:"lr-security__text",children:[u.jsx("span",{className:"lr-kicker",children:"Security first"}),u.jsx("h2",{children:"Your data stays encrypted and private."}),u.jsx("p",{children:"We protect your data with AES-256 encryption at rest and TLS 1.3 in transit. Only you — and the people you explicitly authorize — can access your files."}),u.jsxs("ul",{className:"lr-security__checks",children:[u.jsxs("li",{children:[u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#22c55e",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M20 6 9 17l-5-5"})}),"End-to-end encryption"]}),u.jsxs("li",{children:[u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#22c55e",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M20 6 9 17l-5-5"})}),"Activity audit logs"]}),u.jsxs("li",{children:[u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#22c55e",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M20 6 9 17l-5-5"})}),"Role-based access control"]}),u.jsxs("li",{children:[u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#22c55e",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M20 6 9 17l-5-5"})}),"Password-protected sharing"]})]}),u.jsx("button",{type:"button",className:"lr-btn lr-btn--primary",onClick:e,style:{marginTop:24},children:"Get started free"})]}),u.jsx("div",{className:"lr-security__visual","aria-hidden":"true",children:u.jsx("div",{className:"lr-shield",children:u.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),u.jsx("path",{d:"m9 12 2 2 4-4",stroke:"#22c55e",strokeWidth:"2"})]})})})]})})}),u.jsx("section",{className:"lr-section",children:u.jsxs("div",{className:"lr-section__inner",children:[u.jsxs("div",{className:"lr-section__header lr-reveal",children:[u.jsxs("span",{className:"lr-kicker",children:["Why ",kt.name,"?"]}),u.jsx("h2",{children:"Built for how you work today."})]}),u.jsx("div",{className:"lr-why lr-reveal",children:AE.map((y,b)=>u.jsxs("div",{className:"lr-why__item",style:{animationDelay:`${b*.08}s`},children:[u.jsx("span",{className:"lr-why__num",children:y.num}),u.jsxs("div",{children:[u.jsx("h3",{children:y.title}),u.jsx("p",{children:y.desc})]})]},y.num))})]})}),u.jsx("section",{className:"lr-stats lr-reveal",children:u.jsxs("div",{className:"lr-stats__inner",children:[u.jsxs("div",{className:"lr-stats__item",ref:f,children:[u.jsxs("strong",{children:[d.toLocaleString(),"+"]}),u.jsx("span",{children:"Files stored"})]}),u.jsx("div",{className:"lr-stats__divider"}),u.jsxs("div",{className:"lr-stats__item",children:[u.jsx("strong",{children:Ke(r.storageCapacity)}),u.jsx("span",{children:"Total capacity"})]}),u.jsx("div",{className:"lr-stats__divider"}),u.jsxs("div",{className:"lr-stats__item",ref:p,children:[u.jsxs("strong",{children:[h.toLocaleString(),"+"]}),u.jsx("span",{children:"Active users"})]})]})}),u.jsx("section",{id:"pricing",className:"lr-section lr-section--alt",children:u.jsxs("div",{className:"lr-section__inner",children:[u.jsx("div",{className:"lr-section__header lr-reveal",children:u.jsx("h2",{children:"Pricing"})}),u.jsx("div",{className:"lr-pricing lr-reveal",children:PE.map(y=>u.jsxs("article",{className:`lr-plan${y.highlight?" lr-plan--pop":""}`,children:[y.highlight&&u.jsx("span",{className:"lr-plan__badge",children:"Most popular"}),u.jsx("h3",{children:y.name}),u.jsxs("div",{className:"lr-plan__price",children:[y.price,u.jsx("span",{children:y.period})]}),u.jsxs("p",{className:"lr-plan__storage",children:[y.storage," storage"]}),u.jsx("ul",{children:(y.features||[]).map(b=>u.jsxs("li",{children:[u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M20 6 9 17l-5-5"})}),b]},b))}),u.jsxs("button",{type:"button",className:`lr-btn ${y.highlight?"lr-btn--mega-red":"lr-btn--outline"} lr-btn--full`,onClick:e,children:["Choose ",y.name]})]},y.id))})]})}),u.jsx("section",{id:"faq",className:"lr-section",children:u.jsxs("div",{className:"lr-section__inner",style:{maxWidth:720},children:[u.jsx("div",{className:"lr-section__header lr-reveal",children:u.jsx("h2",{children:"FAQ"})}),u.jsx("div",{className:"lr-faqs lr-reveal",children:NE.map((y,b)=>u.jsxs("div",{className:`lr-faq${a===b?" lr-faq--open":""}`,children:[u.jsxs("button",{type:"button",className:"lr-faq__q",onClick:()=>l(a===b?null:b),children:[y.q,u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lr-faq__chevron",children:u.jsx("path",{d:"m6 9 6 6 6-6"})})]}),u.jsx("div",{className:"lr-faq__a",children:u.jsx("p",{children:y.a})})]},b))})]})}),u.jsx("section",{className:"lr-cta lr-reveal",children:u.jsxs("div",{className:"lr-cta__inner",children:[u.jsx("h2",{children:"Ready to take control of your files?"}),u.jsxs("p",{children:["Join thousands who trust ",kt.name," with their most important data."]}),u.jsxs("div",{className:"lr-hero__ctas",children:[u.jsxs("button",{type:"button",className:"lr-btn lr-btn--primary lr-btn--lg",onClick:e,children:["Sign up for free",u.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M5 12h14"}),u.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),u.jsx("button",{type:"button",className:"lr-btn lr-btn--outline lr-btn--lg",onClick:t,children:"Log in"})]})]})})]}),u.jsx("footer",{className:"lr-footer",children:u.jsxs("div",{className:"lr-footer__inner",children:[u.jsxs("div",{className:"lr-footer__grid",children:[u.jsxs("div",{className:"lr-footer__brand",children:[u.jsxs("div",{className:"lr-footer__brand-lockup",children:[u.jsx("span",{className:"lr-nav__logo",children:u.jsx("img",{src:kt.logoImage,alt:""})}),u.jsx("strong",{children:kt.name})]}),u.jsx("p",{children:"Secure cloud storage for individuals and teams."})]}),u.jsxs("div",{className:"lr-footer__col",children:[u.jsx("h4",{children:"Product"}),u.jsx("a",{href:"#features",children:"Features"}),u.jsx("a",{href:"#pricing",children:"Pricing"}),u.jsx("a",{href:"#faq",children:"FAQ"})]}),u.jsxs("div",{className:"lr-footer__col",children:[u.jsx("h4",{children:"Company"}),u.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"About"}),u.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Contact"})]}),u.jsxs("div",{className:"lr-footer__col",children:[u.jsx("h4",{children:"Legal"}),u.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Privacy"}),u.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Terms"})]})]}),u.jsx("div",{className:"lr-footer__bottom",children:u.jsxs("span",{children:["© ",new Date().getFullYear()," ",kt.name,". All rights reserved."]})})]})})]})}const LE=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* ─── Reset & Base ─── */
.lr-shell {
  --bg: #050508;
  --bg-alt: #08080c;
  --surface: #101014;
  --surface-hover: #18181e;
  --border: rgba(255,255,255,.06);
  --border-hover: rgba(255,255,255,.12);
  --text: #fafafa;
  --text-secondary: #a1a1aa;
  --text-muted: #52525b;
  --accent: #d90007;
  --accent-hover: #ff1a22;
  --radius: 12px;
  --radius-lg: 20px;

  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  line-height: 1.6;
  position: relative;
}
.lr-shell *, .lr-shell *::before, .lr-shell *::after { box-sizing: border-box; margin: 0; padding: 0; }
.lr-shell img { max-width: 100%; display: block; }
.lr-shell a { color: var(--text-secondary); text-decoration: none; transition: color .2s; }
.lr-shell a:hover { color: var(--text); }

/* ─── Animated Background ─── */
.lr-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.lr-bg__particles {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* Aurora gradient blobs */
.lr-bg__aurora {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0;
  animation: lr-aurora-in 2s ease-out forwards;
}
.lr-bg__aurora--1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(217,0,7,.18) 0%, rgba(217,0,7,.04) 50%, transparent 70%);
  top: -10%; right: -5%;
  animation: lr-aurora-in 2s ease-out forwards, lr-aurora-drift-1 20s ease-in-out infinite 2s;
}
.lr-bg__aurora--2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(59,130,246,.12) 0%, rgba(59,130,246,.03) 50%, transparent 70%);
  top: 30%; left: -8%;
  animation: lr-aurora-in 2.5s ease-out forwards, lr-aurora-drift-2 25s ease-in-out infinite 2.5s;
}
.lr-bg__aurora--3 {
  width: 450px; height: 450px;
  background: radial-gradient(circle, rgba(139,92,246,.1) 0%, rgba(139,92,246,.02) 50%, transparent 70%);
  bottom: 10%; right: 15%;
  animation: lr-aurora-in 3s ease-out forwards, lr-aurora-drift-3 22s ease-in-out infinite 3s;
}

@keyframes lr-aurora-in {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes lr-aurora-drift-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-40px, 30px) scale(1.05); }
  50% { transform: translate(20px, -20px) scale(0.95); }
  75% { transform: translate(30px, 40px) scale(1.02); }
}
@keyframes lr-aurora-drift-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -30px) scale(1.08); }
  66% { transform: translate(-30px, 20px) scale(0.94); }
}
@keyframes lr-aurora-drift-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  30% { transform: translate(-40px, -40px) scale(1.06); }
  60% { transform: translate(30px, 30px) scale(0.96); }
}

/* Subtle dot grid overlay */
.lr-bg__grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,.03) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 70%);
}

/* Ensure all content floats above the background */
.lr-nav, .lr-hero, .lr-trust, .lr-section, .lr-stats, .lr-cta, .lr-footer, main {
  position: relative;
  z-index: 1;
}

/* ─── Scroll Reveal ─── */
.lr-reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
}
.lr-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Buttons ─── */
.lr-btn {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: inherit; font-weight: 600; font-size: 14px;
  padding: 10px 22px; border-radius: 10px;
  border: none; cursor: pointer; transition: all .2s ease;
  letter-spacing: -.01em; white-space: nowrap;
}
.lr-btn--primary {
  background: var(--accent); color: #fff;
  box-shadow: 0 1px 2px rgba(217,0,7,.3), inset 0 1px 0 rgba(255,255,255,.12);
}
.lr-btn--primary:hover { background: var(--accent-hover); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(217,0,7,.3); }
.lr-btn--outline {
  background: transparent; color: var(--text);
  border: 1px solid var(--border-hover);
}
.lr-btn--outline:hover { border-color: rgba(255,255,255,.25); background: rgba(255,255,255,.04); }
.lr-btn--ghost {
  background: transparent; color: var(--text-secondary);
}
.lr-btn--ghost:hover { color: var(--text); }
.lr-btn--lg { padding: 14px 28px; font-size: 15px; border-radius: 12px; }
.lr-btn--full { width: 100%; justify-content: center; }

/* ─── Nav ─── */
.lr-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 16px 0;
  background: rgba(5,5,5,.6);
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  border-bottom: 1px solid transparent;
  transition: all .3s ease;
}
.lr-nav--scrolled {
  background: rgba(5,5,5,.92);
  border-bottom-color: var(--border);
  padding: 10px 0;
}
.lr-nav__inner {
  max-width: 1200px; margin: 0 auto; padding: 0 24px;
  display: flex; align-items: center; justify-content: space-between;
}
.lr-nav__brand {
  display: flex; align-items: center; gap: 10px;
  background: none; border: none; cursor: pointer; color: var(--text);
}
.lr-nav__logo {
  width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;
}
.lr-nav__logo img { width: 100%; height: 100%; object-fit: contain; }
.lr-nav__wordmark { font-weight: 700; font-size: 18px; letter-spacing: -.03em; }
.lr-nav__links {
  display: flex; gap: 32px;
}
.lr-nav__links a {
  font-size: 14px; font-weight: 500; color: var(--text-secondary);
  position: relative; padding: 4px 0;
}
.lr-nav__links a::after {
  content: ''; position: absolute; bottom: -2px; left: 0; right: 0; height: 2px;
  background: var(--accent); transform: scaleX(0); transition: transform .25s ease;
  border-radius: 1px;
}
.lr-nav__links a:hover::after { transform: scaleX(1); }
.lr-nav__links a:hover { color: var(--text); }
.lr-nav__actions { display: flex; gap: 10px; align-items: center; }

/* ─── Hero ─── */
.lr-hero {
  position: relative;
  padding: 160px 24px 80px;
  text-align: center;
  overflow: hidden;
}
.lr-hero__ambient {
  position: absolute; inset: 0; pointer-events: none; overflow: hidden;
}
.lr-hero__orb {
  position: absolute; border-radius: 50%; filter: blur(100px); opacity: .35;
}
.lr-hero__orb--1 {
  width: 500px; height: 500px; background: radial-gradient(circle, rgba(217,0,7,.4), transparent 70%);
  top: -100px; right: -100px;
  animation: lr-float 12s ease-in-out infinite;
}
.lr-hero__orb--2 {
  width: 400px; height: 400px; background: radial-gradient(circle, rgba(59,130,246,.25), transparent 70%);
  bottom: 0; left: -80px;
  animation: lr-float 15s ease-in-out infinite reverse;
}
@keyframes lr-float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
}

.lr-hero__badge {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 13px; font-weight: 500; color: var(--text-secondary);
  padding: 6px 16px; border-radius: 100px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.03);
  margin-bottom: 32px;
}
.lr-hero__badge-dot {
  width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
  box-shadow: 0 0 8px rgba(34,197,94,.5);
  animation: lr-pulse 2s ease-in-out infinite;
}
@keyframes lr-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .4; } }

.lr-hero__title {
  font-size: clamp(40px, 7vw, 72px);
  font-weight: 800;
  letter-spacing: -.04em;
  line-height: 1.05;
  margin-bottom: 24px;
}
.lr-hero__title span { color: var(--accent); }
.lr-hero__sub {
  font-size: clamp(16px, 2vw, 19px);
  color: var(--text-secondary);
  max-width: 560px; margin: 0 auto 36px;
  line-height: 1.7;
}
.lr-hero__ctas { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.lr-hero__note {
  font-size: 13px; color: var(--text-muted); margin-top: 16px;
  letter-spacing: .02em;
}

/* ─── Dashboard Preview ─── */
.lr-hero__preview {
  max-width: 900px; margin: 64px auto 0; position: relative;
}
.lr-preview {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  overflow: hidden;
  box-shadow: 0 40px 80px -20px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.03);
}
.lr-preview__glow {
  position: absolute; top: -120px; left: 50%; transform: translateX(-50%);
  width: 600px; height: 300px;
  background: radial-gradient(ellipse, rgba(217,0,7,.1), transparent 70%);
  pointer-events: none;
}
.lr-preview__bar {
  display: flex; align-items: center; gap: 16px;
  padding: 12px 16px; border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,.02);
}
.lr-preview__dots { display: flex; gap: 6px; }
.lr-preview__dots span {
  width: 10px; height: 10px; border-radius: 50%;
  background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.06);
}
.lr-preview__search {
  flex: 1; display: flex; align-items: center; gap: 8px;
  padding: 7px 14px; border-radius: 8px;
  background: rgba(255,255,255,.04); color: var(--text-muted);
  font-size: 13px; border: 1px solid var(--border);
}
.lr-preview__body { display: flex; min-height: 260px; }
.lr-preview__side {
  width: 180px; padding: 14px; border-right: 1px solid var(--border);
  flex-shrink: 0; display: flex; flex-direction: column; gap: 2px;
}
.lr-preview__side-logo {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 12px; font-size: 14px;
}
.lr-preview__nav-item {
  font-size: 13px; padding: 7px 10px; border-radius: 7px;
  color: var(--text-secondary); transition: all .15s;
}
.lr-preview__nav-item.active {
  background: rgba(217,0,7,.1); color: var(--accent);
  font-weight: 500;
}
.lr-preview__storage { margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border); }
.lr-preview__storage-label {
  display: flex; justify-content: space-between; font-size: 11px;
  color: var(--text-muted); margin-bottom: 6px;
}
.lr-preview__storage-label strong { color: var(--text-secondary); }
.lr-preview__storage-bar {
  height: 4px; border-radius: 2px; background: rgba(255,255,255,.06);
}
.lr-preview__storage-bar div {
  height: 100%; width: 90%; border-radius: 2px;
  background: linear-gradient(90deg, var(--accent), #ff6b6b);
}
.lr-preview__main { flex: 1; padding: 16px; }
.lr-preview__heading {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 14px;
}
.lr-preview__heading h4 { font-size: 15px; font-weight: 600; }
.lr-preview__upload-btn {
  font-size: 12px; padding: 5px 12px; border-radius: 6px;
  background: var(--accent); color: #fff; font-weight: 500;
}
.lr-preview__file {
  display: flex; align-items: center; gap: 12px;
  padding: 10px 12px; border-radius: 8px;
  transition: background .15s; cursor: default;
  animation: lr-file-in .5s cubic-bezier(.16,1,.3,1) both;
}
.lr-preview__file:hover { background: rgba(255,255,255,.03); }
@keyframes lr-file-in {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}
.lr-preview__file-icon {
  width: 36px; height: 36px; border-radius: 8px;
  flex-shrink: 0;
}
.lr-preview__file strong { font-size: 13px; display: block; font-weight: 500; }
.lr-preview__file span { font-size: 11px; color: var(--text-muted); }

/* ─── Trust Bar ─── */
.lr-trust {
  text-align: center; padding: 48px 24px;
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
}
.lr-trust p { font-size: 13px; color: var(--text-muted); text-transform: uppercase; letter-spacing: .12em; margin-bottom: 20px; font-weight: 500; }
.lr-trust__logos { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
.lr-trust__badge {
  font-size: 12px; font-weight: 600; color: var(--text-secondary);
  padding: 8px 20px; border-radius: 8px;
  border: 1px solid var(--border); background: rgba(255,255,255,.02);
  letter-spacing: .06em;
}

/* ─── Sections ─── */
.lr-section { padding: 100px 24px; }
.lr-section--alt { background: var(--bg-alt); }
.lr-section__inner { max-width: 1100px; margin: 0 auto; }
.lr-section__header { text-align: center; margin-bottom: 56px; }
.lr-section__header h2 {
  font-size: clamp(28px, 4vw, 44px); font-weight: 800; letter-spacing: -.03em;
  line-height: 1.15; margin-bottom: 12px;
}
.lr-section__header p { color: var(--text-secondary); font-size: 17px; max-width: 560px; margin: 0 auto; line-height: 1.7; }
.lr-kicker {
  display: inline-block; font-size: 13px; font-weight: 600; color: var(--accent);
  text-transform: uppercase; letter-spacing: .1em; margin-bottom: 12px;
}

/* ─── Feature Cards ─── */
.lr-features {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
}
.lr-feature-card {
  padding: 32px 24px; border-radius: var(--radius);
  background: var(--surface); border: 1px solid var(--border);
  transition: all .3s ease;
}
.lr-feature-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -12px rgba(0,0,0,.4);
}
.lr-feature-card__icon {
  width: 48px; height: 48px; border-radius: 12px;
  background: rgba(217,0,7,.08); color: var(--accent);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 20px;
}
.lr-feature-card h3 { font-size: 17px; font-weight: 700; margin-bottom: 8px; letter-spacing: -.01em; }
.lr-feature-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.65; }

/* ─── Security ─── */
.lr-security {
  display: flex; align-items: center; gap: 60px;
}
.lr-security__text { flex: 1; }
.lr-security__text h2 { font-size: clamp(26px, 3.5vw, 38px); font-weight: 800; letter-spacing: -.03em; margin-bottom: 16px; line-height: 1.15; }
.lr-security__text p { color: var(--text-secondary); font-size: 16px; line-height: 1.7; margin-bottom: 24px; }
.lr-security__checks { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.lr-security__checks li {
  display: flex; align-items: center; gap: 10px;
  font-size: 15px; font-weight: 500; color: var(--text-secondary);
}
.lr-security__visual {
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
}
.lr-shield {
  width: 180px; height: 180px; border-radius: 50%;
  background: rgba(217,0,7,.05);
  border: 1px solid rgba(217,0,7,.12);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,.15);
  animation: lr-shield-pulse 4s ease-in-out infinite;
  box-shadow: 0 0 80px rgba(217,0,7,.08);
}
@keyframes lr-shield-pulse {
  0%, 100% { box-shadow: 0 0 60px rgba(217,0,7,.06); }
  50% { box-shadow: 0 0 100px rgba(217,0,7,.14); }
}

/* ─── Why Section ─── */
.lr-why {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;
}
.lr-why__item {
  display: flex; gap: 20px; padding: 28px;
  border-radius: var(--radius); background: var(--surface);
  border: 1px solid var(--border); transition: all .25s;
}
.lr-why__item:hover { border-color: var(--border-hover); }
.lr-why__num {
  font-size: 32px; font-weight: 800; color: rgba(255,255,255,.06);
  flex-shrink: 0; line-height: 1;
  font-variant-numeric: tabular-nums;
}
.lr-why__item h3 { font-size: 16px; font-weight: 700; margin-bottom: 6px; letter-spacing: -.01em; }
.lr-why__item p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

/* ─── Stats ─── */
.lr-stats {
  padding: 56px 24px;
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
}
.lr-stats__inner {
  max-width: 800px; margin: 0 auto;
  display: flex; align-items: center; justify-content: center; gap: 48px;
}
.lr-stats__item { text-align: center; }
.lr-stats__item strong {
  display: block; font-size: clamp(32px, 4vw, 48px); font-weight: 800;
  letter-spacing: -.03em; font-variant-numeric: tabular-nums;
}
.lr-stats__item span { font-size: 14px; color: var(--text-muted); }
.lr-stats__divider {
  width: 1px; height: 48px; background: var(--border);
}

/* ─── Pricing ─── */
.lr-pricing {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
}
.lr-plan {
  padding: 32px 24px; border-radius: var(--radius);
  background: var(--surface); border: 1px solid var(--border);
  display: flex; flex-direction: column; position: relative;
  transition: all .25s;
}
.lr-plan:hover { border-color: var(--border-hover); }
.lr-plan--pop {
  border-color: var(--accent);
  box-shadow: 0 0 40px rgba(217,0,7,.1);
}
.lr-plan__badge {
  position: absolute; top: -11px; left: 50%; transform: translateX(-50%);
  font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em;
  padding: 4px 16px; border-radius: 100px;
  background: var(--accent); color: #fff;
}
.lr-plan h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.lr-plan__price {
  font-size: 36px; font-weight: 800; letter-spacing: -.03em; margin-bottom: 4px;
}
.lr-plan__price span { font-size: 14px; font-weight: 500; color: var(--text-muted); }
.lr-plan__storage { font-size: 14px; color: var(--text-secondary); margin-bottom: 20px; }
.lr-plan ul { list-style: none; flex: 1; margin-bottom: 24px; }
.lr-plan li {
  display: flex; align-items: center; gap: 8px;
  font-size: 14px; color: var(--text-secondary); padding: 5px 0;
}
.lr-plan li svg { color: #22c55e; flex-shrink: 0; }

/* ─── FAQ ─── */
.lr-faqs { display: flex; flex-direction: column; gap: 8px; }
.lr-faq {
  border: 1px solid var(--border); border-radius: var(--radius);
  background: var(--surface); overflow: hidden;
  transition: border-color .2s;
}
.lr-faq:hover { border-color: var(--border-hover); }
.lr-faq--open { border-color: rgba(217,0,7,.2); }
.lr-faq__q {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  padding: 18px 20px; font-size: 15px; font-weight: 600; text-align: left;
  background: none; border: none; color: var(--text); cursor: pointer;
  font-family: inherit;
}
.lr-faq__chevron {
  transition: transform .25s ease; flex-shrink: 0;
  color: var(--text-muted);
}
.lr-faq--open .lr-faq__chevron { transform: rotate(180deg); color: var(--accent); }
.lr-faq__a {
  max-height: 0; overflow: hidden;
  transition: max-height .3s cubic-bezier(.16,1,.3,1), padding .3s ease;
  padding: 0 20px;
}
.lr-faq--open .lr-faq__a {
  max-height: 200px; padding: 0 20px 18px;
}
.lr-faq__a p { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }

/* ─── CTA ─── */
.lr-cta {
  padding: 100px 24px; text-align: center;
  position: relative; overflow: hidden;
}
.lr-cta__inner {
  max-width: 640px; margin: 0 auto; position: relative;
}
.lr-cta h2 {
  font-size: clamp(28px, 4vw, 40px); font-weight: 800; letter-spacing: -.03em;
  margin-bottom: 12px; line-height: 1.15;
}
.lr-cta p { color: var(--text-secondary); font-size: 17px; margin-bottom: 32px; line-height: 1.7; }

/* ─── Footer ─── */
.lr-footer {
  border-top: 1px solid var(--border); padding: 64px 24px 32px;
  background: var(--bg);
}
.lr-footer__inner { max-width: 1100px; margin: 0 auto; }
.lr-footer__grid {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px;
  margin-bottom: 48px;
}
.lr-footer__brand-lockup {
  display: flex; align-items: center; gap: 10px; margin-bottom: 12px;
}
.lr-footer__brand-lockup strong { font-size: 18px; font-weight: 700; }
.lr-footer__brand p { font-size: 14px; color: var(--text-muted); line-height: 1.6; max-width: 260px; }
.lr-footer__col { display: flex; flex-direction: column; gap: 10px; }
.lr-footer__col h4 { font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 4px; text-transform: uppercase; letter-spacing: .08em; }
.lr-footer__col a { font-size: 14px; color: var(--text-muted); }
.lr-footer__col a:hover { color: var(--text); }
.lr-footer__bottom {
  border-top: 1px solid var(--border); padding-top: 24px;
  text-align: center;
}
.lr-footer__bottom span { font-size: 13px; color: var(--text-muted); }

/* ─── Responsive ─── */
/* Custom Mesh Background tweaks (Aurora colors to orange/red) */
  .lr-bg__aurora--1 { background: radial-gradient(circle at 20% 0%, rgba(220, 38, 38, 0.15) 0%, transparent 60%); }
  .lr-bg__aurora--2 { background: radial-gradient(circle at 80% 40%, rgba(234, 88, 12, 0.12) 0%, transparent 60%); }
  .lr-bg__aurora--3 { background: radial-gradient(circle at 50% 100%, rgba(220, 38, 38, 0.08) 0%, transparent 50%); }

  /* Hero Content */
  .lr-hero__badge-green {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2);
    color: #10b981; font-size: 11px; font-weight: 600; text-transform: uppercase;
    padding: 6px 14px; border-radius: 99px; margin-bottom: 24px;
  }
  .lr-hero__title {
    font-size: clamp(48px, 6vw, 64px); font-weight: 800; line-height: 1.1;
    letter-spacing: -0.03em; margin-bottom: 16px; text-align: center;
  }
  .lr-hero__sub {
    font-size: clamp(16px, 2vw, 18px); color: var(--text-secondary); max-width: 600px; margin: 0 auto;
    text-align: center;
  }

  /* CTAs Centered */
  .lr-hero__ctas-centered {
    display: flex; flex-direction: column; align-items: center; gap: 16px;
    margin-top: 24px; margin-bottom: 60px;
  }
  .lr-btn--mega-red {
    background: linear-gradient(180deg, #f43f5e 0%, #be123c 100%);
    box-shadow: 0 4px 20px rgba(225, 29, 72, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.2);
    border: none; color: #fff; padding: 14px 32px; font-size: 16px; font-weight: 600;
    border-radius: 99px; cursor: pointer; transition: all 0.2s;
  }
  .lr-btn--mega-red:hover {
    box-shadow: 0 6px 24px rgba(225, 29, 72, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
  .lr-hero__login-link {
    color: var(--text); font-weight: 500; font-size: 15px; text-decoration: none; transition: color 0.2s;
  }
  .lr-hero__login-link:hover { color: #f43f5e; }

  /* Redesigned Glass Dashboard Mockup */
  .lr-preview {
    background: rgba(16, 16, 20, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    border-radius: 20px; overflow: hidden; width: 100%; max-width: 700px;
    margin: 40px auto 30px; position: relative;
    padding: 16px;
  }
  .lr-preview__body { display: flex; gap: 16px; height: 340px; }
  .lr-preview__side-icons {
    width: 60px; display: flex; flex-direction: column; align-items: center;
    gap: 20px; padding-top: 10px; border-right: 1px solid var(--border);
  }
  .side-icon {
    width: 36px; height: 36px; border-radius: 10px; display: flex;
    align-items: center; justify-content: center; color: var(--text-muted); cursor: pointer;
  }
  .side-icon.active { background: rgba(225, 29, 72, 0.1); color: #f43f5e; }
  
  .lr-preview__main { flex: 1; display: flex; flex-direction: column; }
  .lr-preview__header {
    display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;
  }
  .lr-preview__search {
    background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px; padding: 8px 16px; color: var(--text-muted); font-size: 13px;
    display: flex; align-items: center; gap: 8px; flex: 1; max-width: 200px;
  }
  .lr-preview__upload-btn {
    background: #f43f5e; color: #fff; border: none; padding: 8px 16px;
    border-radius: 8px; font-size: 13px; font-weight: 500; display: flex; align-items: center; gap: 6px;
  }
  
  .lr-preview__grid {
    display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 1fr);
    gap: 12px; flex: 1;
  }
  .lr-preview__card {
    background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px; padding: 16px; display: flex; flex-direction: column;
    justify-content: flex-end; position: relative; overflow: hidden;
  }
  .lr-folder-icon {
    position: absolute; top: 16px; left: 16px; width: 40px; height: 30px;
    background: #f43f5e; border-radius: 4px;
  }
  .lr-folder-icon::before {
    content: ''; position: absolute; top: -6px; left: 0; width: 16px; height: 6px;
    background: #e11d48; border-radius: 4px 4px 0 0;
  }
  .lr-preview__card.small-folder {
    grid-column: span 1; padding: 12px;
  }
  .lr-card-info h5 { margin: 0 0 4px 0; font-size: 14px; font-weight: 500; }
  .lr-card-info span { font-size: 11px; color: var(--text-secondary); }
  
  .glass-file {
    background: rgba(255, 255, 255, 0.08); border-top: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
    box-shadow: -10px 0 30px rgba(0,0,0,0.2);
    z-index: 10;
    grid-column: 2; grid-row: 1 / span 2;
  }
  .lr-file-icon.excel {
    position: absolute; top: 20px; left: 20px; color: #10b981;
    background: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 12px;
  }

  .lr-preview__pagination {
    display: flex; justify-content: center; gap: 6px; margin-top: 16px;
  }
  .lr-preview__pagination .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--border); }
  .lr-preview__pagination .dot.active { background: var(--text-muted); width: 16px; border-radius: 4px; }

  /* Pricing Cards Tweak */
  .lr-plan--pop {
    border-color: rgba(225, 29, 72, 0.4);
    box-shadow: 0 0 30px rgba(225, 29, 72, 0.15), inset 0 0 20px rgba(225, 29, 72, 0.05);
  }
  .lr-plan__badge { background: #e11d48; color: #fff; text-transform: uppercase; font-weight: 700; font-size: 11px; }

  /* === ULTRA PREMIUM ENHANCEMENTS === */
  
  /* Premium Metallic Gradient Text for Hero */
  .lr-hero__title {
    background: linear-gradient(180deg, #ffffff 20%, #a1a1aa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 10px 30px rgba(0,0,0,0.5);
  }

  /* Floating Animation for Dashboard Cards */
  @keyframes floatCard {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  .lr-preview__card { animation: floatCard 6s ease-in-out infinite; }
  .lr-preview__card:nth-child(1) { animation-delay: 0s; }
  .lr-preview__card:nth-child(2) { animation-delay: -1.5s; }
  .lr-preview__card:nth-child(3) { animation-delay: -3s; }
  
  /* Extra float & glow for the glass file */
  .glass-file { 
    animation: floatCard 5s ease-in-out infinite; 
    animation-delay: -2s; 
    border: 1px solid rgba(255,255,255,0.3);
    box-shadow: -10px 20px 40px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.4);
  }

  /* Sweeping Shine Effect on the Main CTA Button */
  .lr-btn--mega-red {
    position: relative; overflow: hidden;
  }
  .lr-btn--mega-red::after {
    content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
    transform: skewX(-20deg); animation: button-shine 4.5s infinite;
  }
  @keyframes button-shine {
    0% { left: -100%; }
    15%, 100% { left: 200%; }
  }

  /* 3D Scale and Pulse Glowing for Pricing Cards */
  .lr-plan {
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
  }
  .lr-plan:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 25px 50px rgba(0,0,0,0.6);
    z-index: 10;
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 30px rgba(225, 29, 72, 0.15), inset 0 0 20px rgba(225, 29, 72, 0.05); border-color: rgba(225, 29, 72, 0.4); }
    50% { box-shadow: 0 0 60px rgba(225, 29, 72, 0.4), inset 0 0 30px rgba(225, 29, 72, 0.2); border-color: rgba(225, 29, 72, 0.8); }
  }
  .lr-plan--pop { animation: pulse-glow 3.5s infinite; }

  /* VisionOS Style Depth on Dashboard Mockup */
  .lr-preview {
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 rgba(255,255,255,0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
  .lr-preview__upload-btn {
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .lr-preview__upload-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(244, 63, 94, 0.6);
  }

  /* FAQ Accordion Tweak */
  .lr-faq__chevron { color: #e11d48; }

@media (max-width: 900px) {
  .lr-features { grid-template-columns: repeat(2, 1fr); }
  .lr-pricing { grid-template-columns: repeat(2, 1fr); }
  .lr-why { grid-template-columns: 1fr; }
  .lr-security { flex-direction: column; text-align: center; }
  .lr-security__checks { align-items: center; }
  .lr-footer__grid { grid-template-columns: 1fr 1fr; }
  .lr-preview__side-icons { display: none; }
  .lr-nav__links { display: none; }
  }


@media (max-width: 600px) {
  .lr-hero { padding: 130px 20px 60px; }
  .lr-features { grid-template-columns: 1fr; }
  .lr-pricing { grid-template-columns: 1fr; }
  .lr-section { padding: 64px 20px; }
  .lr-hero__ctas { flex-direction: column; align-items: center; }
  .lr-btn--lg { width: 100%; justify-content: center; }
  .lr-stats__inner { flex-direction: column; gap: 28px; }
  .lr-stats__divider { width: 48px; height: 1px; }
  .lr-footer__grid { grid-template-columns: 1fr; gap: 28px; }
}
`,OE=()=>{};var wg={};/**
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
 */const N1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},zE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},D1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,d=o>>2,f=(o&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,s||(h=64)),r.push(n[d],n[f],n[h],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(N1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):zE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||c==null||f==null)throw new FE;const h=o<<2|a>>4;if(r.push(h),c!==64){const p=a<<4&240|c>>2;if(r.push(p),f!==64){const m=c<<6&192|f;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class FE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BE=function(e){const t=N1(e);return D1.encodeByteArray(t,!0)},M1=function(e){return BE(e).replace(/\./g,"")},L1=function(e){try{return D1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function VE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UE=()=>VE().__FIREBASE_DEFAULTS__,WE=()=>{if(typeof process>"u"||typeof wg>"u")return;const e=wg.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},$E=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&L1(e[1]);return t&&JSON.parse(t)},Hh=()=>{try{return OE()||UE()||WE()||$E()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},HE=e=>{var t,n;return(n=(t=Hh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},O1=()=>{var e;return(e=Hh())===null||e===void 0?void 0:e.config},z1=e=>{var t;return(t=Hh())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class GE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Sc(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function YE(e){return(await fetch(e,{credentials:"include"})).ok}const ss={};function KE(){const e={prod:[],emulator:[]};for(const t of Object.keys(ss))ss[t]?e.emulator.push(t):e.prod.push(t);return e}function qE(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let kg=!1;function XE(e,t){if(typeof window>"u"||typeof document>"u"||!Sc(window.location.host)||ss[e]===t||ss[e]||kg)return;ss[e]=t;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",o=KE().prod.length>0;function s(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,p){h.setAttribute("width","24"),h.setAttribute("id",p),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{kg=!0,s()},h}function d(h,p){h.setAttribute("id",p),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=qE(r),p=n("text"),m=document.getElementById(p)||document.createElement("span"),y=n("learnmore"),b=document.getElementById(y)||document.createElement("a"),g=n("preprendIcon"),x=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const v=h.element;a(v),d(b,y);const k=c();l(x,g),v.append(x,m,b,k),document.body.appendChild(v)}o?(m.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,m.innerText="Preview backend running in this workspace."),m.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function JE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ZE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function e_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function t_(){const e=mt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function n_(){try{return typeof indexedDB=="object"}catch{return!1}}function r_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const i_="FirebaseError";class Lr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=i_,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?o_(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Lr(i,a,r)}}function o_(e,t){return e.replace(s_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const s_=/\{\$([^}]+)}/g;function a_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function fo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Sg(o)&&Sg(s)){if(!fo(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sg(e){return e!==null&&typeof e=="object"}/**
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
 */function Ks(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function l_(e,t){const n=new c_(e,t);return n.subscribe.bind(n)}class c_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");u_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=xu),i.error===void 0&&(i.error=xu),i.complete===void 0&&(i.complete=xu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function u_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function xu(){}/**
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
 */function wo(e){return e&&e._delegate?e._delegate:e}class ho{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xr="[DEFAULT]";/**
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
 */class d_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new GE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(h_(t))try{this.getOrInitializeService({instanceIdentifier:Xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Xr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xr){return this.instances.has(t)}getOptions(t=Xr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:f_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xr){return this.component?this.component.multipleInstances?t:Xr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function f_(e){return e===Xr?void 0:e}function h_(e){return e.instantiationMode==="EAGER"}/**
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
 */class p_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new d_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(we||(we={}));const m_={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},g_=we.INFO,y_={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},x_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=y_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class F1{constructor(t){this.name=t,this._logLevel=g_,this._logHandler=x_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in we))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?m_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...t),this._logHandler(this,we.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...t),this._logHandler(this,we.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,we.INFO,...t),this._logHandler(this,we.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,we.WARN,...t),this._logHandler(this,we.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...t),this._logHandler(this,we.ERROR,...t)}}const v_=(e,t)=>t.some(n=>e instanceof n);let Cg,Eg;function b_(){return Cg||(Cg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function w_(){return Eg||(Eg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const B1=new WeakMap,ef=new WeakMap,V1=new WeakMap,vu=new WeakMap,Gh=new WeakMap;function k_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Tr(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&B1.set(n,e)}).catch(()=>{}),Gh.set(t,e),t}function S_(e){if(ef.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});ef.set(e,t)}let tf={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ef.get(e);if(t==="objectStoreNames")return e.objectStoreNames||V1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function C_(e){tf=e(tf)}function E_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(bu(this),t,...n);return V1.set(r,t.sort?t.sort():[t]),Tr(r)}:w_().includes(e)?function(...t){return e.apply(bu(this),t),Tr(B1.get(this))}:function(...t){return Tr(e.apply(bu(this),t))}}function __(e){return typeof e=="function"?E_(e):(e instanceof IDBTransaction&&S_(e),v_(e,b_())?new Proxy(e,tf):e)}function Tr(e){if(e instanceof IDBRequest)return k_(e);if(vu.has(e))return vu.get(e);const t=__(e);return t!==e&&(vu.set(e,t),Gh.set(t,e)),t}const bu=e=>Gh.get(e);function T_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Tr(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Tr(s.result),l.oldVersion,l.newVersion,Tr(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const I_=["get","getKey","getAll","getAllKeys","count"],j_=["put","add","delete","clear"],wu=new Map;function _g(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(wu.get(t))return wu.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=j_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||I_.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return wu.set(t,o),o}C_(e=>({...e,get:(t,n,r)=>_g(t,n)||e.get(t,n,r),has:(t,n)=>!!_g(t,n)||e.has(t,n)}));/**
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
 */class P_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(R_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function R_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const nf="@firebase/app",Tg="0.13.2";/**
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
 */const Xn=new F1("@firebase/app"),A_="@firebase/app-compat",N_="@firebase/analytics-compat",D_="@firebase/analytics",M_="@firebase/app-check-compat",L_="@firebase/app-check",O_="@firebase/auth",z_="@firebase/auth-compat",F_="@firebase/database",B_="@firebase/data-connect",V_="@firebase/database-compat",U_="@firebase/functions",W_="@firebase/functions-compat",$_="@firebase/installations",H_="@firebase/installations-compat",G_="@firebase/messaging",Y_="@firebase/messaging-compat",K_="@firebase/performance",q_="@firebase/performance-compat",X_="@firebase/remote-config",Q_="@firebase/remote-config-compat",J_="@firebase/storage",Z_="@firebase/storage-compat",eT="@firebase/firestore",tT="@firebase/ai",nT="@firebase/firestore-compat",rT="firebase",iT="11.10.0";/**
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
 */const rf="[DEFAULT]",oT={[nf]:"fire-core",[A_]:"fire-core-compat",[D_]:"fire-analytics",[N_]:"fire-analytics-compat",[L_]:"fire-app-check",[M_]:"fire-app-check-compat",[O_]:"fire-auth",[z_]:"fire-auth-compat",[F_]:"fire-rtdb",[B_]:"fire-data-connect",[V_]:"fire-rtdb-compat",[U_]:"fire-fn",[W_]:"fire-fn-compat",[$_]:"fire-iid",[H_]:"fire-iid-compat",[G_]:"fire-fcm",[Y_]:"fire-fcm-compat",[K_]:"fire-perf",[q_]:"fire-perf-compat",[X_]:"fire-rc",[Q_]:"fire-rc-compat",[J_]:"fire-gcs",[Z_]:"fire-gcs-compat",[eT]:"fire-fst",[nT]:"fire-fst-compat",[tT]:"fire-vertex","fire-js":"fire-js",[rT]:"fire-js-all"};/**
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
 */const Ol=new Map,sT=new Map,of=new Map;function Ig(e,t){try{e.container.addComponent(t)}catch(n){Xn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ns(e){const t=e.name;if(of.has(t))return Xn.debug(`There were multiple attempts to register component ${t}.`),!1;of.set(t,e);for(const n of Ol.values())Ig(n,e);for(const n of sT.values())Ig(n,e);return!0}function U1(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Sn(e){return e==null?!1:e.settings!==void 0}/**
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
 */const aT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new Ys("app","Firebase",aT);/**
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
 */class lT{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ho("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
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
 */const qs=iT;function W1(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:rf,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw Ir.create("bad-app-name",{appName:String(i)});if(n||(n=O1()),!n)throw Ir.create("no-options");const o=Ol.get(i);if(o){if(fo(n,o.options)&&fo(r,o.config))return o;throw Ir.create("duplicate-app",{appName:i})}const s=new p_(i);for(const l of of.values())s.addComponent(l);const a=new lT(n,r,s);return Ol.set(i,a),a}function cT(e=rf){const t=Ol.get(e);if(!t&&e===rf&&O1())return W1();if(!t)throw Ir.create("no-app",{appName:e});return t}function Zi(e,t,n){var r;let i=(r=oT[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Xn.warn(a.join(" "));return}Ns(new ho(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const uT="firebase-heartbeat-database",dT=1,Ds="firebase-heartbeat-store";let ku=null;function $1(){return ku||(ku=T_(uT,dT,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ds)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ir.create("idb-open",{originalErrorMessage:e.message})})),ku}async function fT(e){try{const n=(await $1()).transaction(Ds),r=await n.objectStore(Ds).get(H1(e));return await n.done,r}catch(t){if(t instanceof Lr)Xn.warn(t.message);else{const n=Ir.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Xn.warn(n.message)}}}async function jg(e,t){try{const r=(await $1()).transaction(Ds,"readwrite");await r.objectStore(Ds).put(t,H1(e)),await r.done}catch(n){if(n instanceof Lr)Xn.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xn.warn(r.message)}}}function H1(e){return`${e.name}!${e.options.appId}`}/**
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
 */const hT=1024,pT=30;class mT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Pg();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>pT){const s=xT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Xn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pg(),{heartbeatsToSend:r,unsentEntries:i}=gT(this._heartbeatsCache.heartbeats),o=M1(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Xn.warn(n),""}}}function Pg(){return new Date().toISOString().substring(0,10)}function gT(e,t=hT){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Rg(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rg(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return n_()?r_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jg(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jg(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Rg(e){return M1(JSON.stringify({version:2,heartbeats:e})).length}function xT(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function vT(e){Ns(new ho("platform-logger",t=>new P_(t),"PRIVATE")),Ns(new ho("heartbeat",t=>new mT(t),"PRIVATE")),Zi(nf,Tg,e),Zi(nf,Tg,"esm2017"),Zi("fire-js","")}vT("");var bT="firebase",wT="11.10.0";/**
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
 */Zi(bT,wT,"app");function Yh(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function G1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kT=G1,Y1=new Ys("auth","Firebase",G1());/**
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
 */const zl=new F1("@firebase/auth");function ST(e,...t){zl.logLevel<=we.WARN&&zl.warn(`Auth (${qs}): ${e}`,...t)}function Ka(e,...t){zl.logLevel<=we.ERROR&&zl.error(`Auth (${qs}): ${e}`,...t)}/**
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
 */function jn(e,...t){throw qh(e,...t)}function fn(e,...t){return qh(e,...t)}function Kh(e,t,n){const r=Object.assign(Object.assign({},kT()),{[t]:n});return new Ys("auth","Firebase",r).create(t,{appName:e.name})}function li(e){return Kh(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function CT(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&jn(e,"argument-error"),Kh(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qh(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Y1.create(e,...t)}function Q(e,t,...n){if(!e)throw qh(t,...n)}function Wn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ka(t),new Error(t)}function Qn(e,t){e||Wn(t)}/**
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
 */function sf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function ET(){return Ag()==="http:"||Ag()==="https:"}function Ag(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function _T(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ET()||ZE()||"connection"in navigator)?navigator.onLine:!0}function TT(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Xs{constructor(t,n){this.shortDelay=t,this.longDelay=n,Qn(n>t,"Short delay should be less than long delay!"),this.isMobile=QE()||e_()}get(){return _T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xh(e,t){Qn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class K1{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const IT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],PT=new Xs(3e4,6e4);function Qh(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ko(e,t,n,r,i={}){return q1(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Ks(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const c=Object.assign({method:t,headers:l},o);return JE()||(c.referrerPolicy="no-referrer"),e.emulatorConfig&&Sc(e.emulatorConfig.host)&&(c.credentials="include"),K1.fetch()(await X1(e,e.config.apiHost,n,a),c)})}async function q1(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},IT),t);try{const i=new AT(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Sa(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sa(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Sa(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Sa(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Kh(e,d,c);jn(e,d)}}catch(i){if(i instanceof Lr)throw i;jn(e,"network-request-failed",{message:String(i)})}}async function RT(e,t,n,r,i={}){const o=await ko(e,t,n,r,i);return"mfaPendingCredential"in o&&jn(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function X1(e,t,n,r){const i=`${t}${n}?${r}`,o=e,s=o.config.emulator?Xh(e.config,i):`${e.config.apiScheme}://${i}`;return jT.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(s).toString():s}class AT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),PT.get())})}}function Sa(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fn(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function NT(e,t){return ko(e,"POST","/v1/accounts:delete",t)}async function Fl(e,t){return ko(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function as(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function DT(e,t=!1){const n=wo(e),r=await n.getIdToken(t),i=Jh(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:as(Su(i.auth_time)),issuedAtTime:as(Su(i.iat)),expirationTime:as(Su(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Su(e){return Number(e)*1e3}function Jh(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ka("JWT malformed, contained fewer than 3 sections"),null;try{const i=L1(n);return i?JSON.parse(i):(Ka("Failed to decode base64 JWT payload"),null)}catch(i){return Ka("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ng(e){const t=Jh(e);return Q(t,"internal-error"),Q(typeof t.exp<"u","internal-error"),Q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ms(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Lr&&MT(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function MT({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class LT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class af{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=as(this.lastLoginAt),this.creationTime=as(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bl(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ms(e,Fl(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Q1(o.providerUserInfo):[],a=zT(e.providerData,s),l=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new af(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,f)}async function OT(e){const t=wo(e);await Bl(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function zT(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Q1(e){return e.map(t=>{var{providerId:n}=t,r=Yh(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function FT(e,t){const n=await q1(e,{},async()=>{const r=Ks({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=await X1(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return e.emulatorConfig&&Sc(e.emulatorConfig.host)&&(l.credentials="include"),K1.fetch()(s,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BT(e,t){return ko(e,"POST","/v2/accounts:revokeToken",Qh(e,t))}/**
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
 */class eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Q(t.idToken,"internal-error"),Q(typeof t.idToken<"u","internal-error"),Q(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ng(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Q(t.length!==0,"internal-error");const n=Ng(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await FT(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new eo;return r&&(Q(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(Q(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new eo,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
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
 */function or(e,t){Q(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class cn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Yh(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new af(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Ms(this,this.stsTokenManager.getToken(this.auth,t));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return DT(this,t)}reload(){return OT(this)}_assign(t){this!==t&&(Q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new cn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(li(this.auth));const t=await this.getIdToken();return await Ms(this,NT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,m=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:k,isAnonymous:_,providerData:C,stsTokenManager:T}=n;Q(v&&T,t,"internal-error");const I=eo.fromJSON(this.name,T);Q(typeof v=="string",t,"internal-error"),or(f,t.name),or(h,t.name),Q(typeof k=="boolean",t,"internal-error"),Q(typeof _=="boolean",t,"internal-error"),or(p,t.name),or(m,t.name),or(y,t.name),or(b,t.name),or(g,t.name),or(x,t.name);const A=new cn({uid:v,auth:t,email:h,emailVerified:k,displayName:f,isAnonymous:_,photoURL:m,phoneNumber:p,tenantId:y,stsTokenManager:I,createdAt:g,lastLoginAt:x});return C&&Array.isArray(C)&&(A.providerData=C.map(P=>Object.assign({},P))),b&&(A._redirectEventId=b),A}static async _fromIdTokenResponse(t,n,r=!1){const i=new eo;i.updateFromServerResponse(n);const o=new cn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Bl(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Q1(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new eo;a.updateFromIdToken(r);const l=new cn({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new af(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,c),l}}/**
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
 */const Dg=new Map;function $n(e){Qn(e instanceof Function,"Expected a class definition");let t=Dg.get(e);return t?(Qn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Dg.set(e,t),t)}/**
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
 */class J1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}J1.type="NONE";const Mg=J1;/**
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
 */function qa(e,t,n){return`firebase:${e}:${t}:${n}`}class to{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=qa(this.userKey,i.apiKey,o),this.fullPersistenceKey=qa("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Fl(this.auth,{idToken:t}).catch(()=>{});return n?cn._fromGetAccountInfoResponse(this.auth,n,t):null}return cn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new to($n(Mg),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||$n(Mg);const s=qa(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const d=await c._get(s);if(d){let f;if(typeof d=="string"){const h=await Fl(t,{idToken:d}).catch(()=>{});if(!h)break;f=await cn._fromGetAccountInfoResponse(t,h,d)}else f=cn._fromJSON(t,d);c!==o&&(a=f),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new to(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new to(o,t,r))}}/**
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
 */function Lg(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nb(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Z1(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ib(t))return"Blackberry";if(ob(t))return"Webos";if(eb(t))return"Safari";if((t.includes("chrome/")||tb(t))&&!t.includes("edge/"))return"Chrome";if(rb(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Z1(e=mt()){return/firefox\//i.test(e)}function eb(e=mt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tb(e=mt()){return/crios\//i.test(e)}function nb(e=mt()){return/iemobile/i.test(e)}function rb(e=mt()){return/android/i.test(e)}function ib(e=mt()){return/blackberry/i.test(e)}function ob(e=mt()){return/webos/i.test(e)}function Zh(e=mt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function VT(e=mt()){var t;return Zh(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function UT(){return t_()&&document.documentMode===10}function sb(e=mt()){return Zh(e)||rb(e)||ob(e)||ib(e)||/windows phone/i.test(e)||nb(e)}/**
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
 */function ab(e,t=[]){let n;switch(e){case"Browser":n=Lg(mt());break;case"Worker":n=`${Lg(mt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qs}/${r}`}/**
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
 */class WT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $T(e,t={}){return ko(e,"GET","/v2/passwordPolicy",Qh(e,t))}/**
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
 */const HT=6;class GT{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:HT,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class YT{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Og(this),this.idTokenSubscription=new Og(this),this.beforeStateQueue=new WT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Y1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await to.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Fl(this,{idToken:t}),r=await cn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Sn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Bl(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=TT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Sn(this.app))return Promise.reject(li(this));const n=t?wo(t):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(li(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Sn(this.app)?Promise.reject(li(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await $T(this),n=new GT(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ys("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await BT(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&$n(t)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await to.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ab(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&ST(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cc(e){return wo(e)}class Og{constructor(t){this.auth=t,this.observer=null,this.addObserver=l_(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ep={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KT(e){ep=e}function qT(e){return ep.loadJS(e)}function XT(){return ep.gapiScript}function QT(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function JT(e,t){const n=U1(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(fo(o,t??{}))return i;jn(i,"already-initialized")}return n.initialize({options:t})}function ZT(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function e5(e,t,n){const r=Cc(e);Q(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=lb(t),{host:s,port:a}=t5(t),l=a===null?"":`:${a}`,c={url:`${o}//${s}${l}/`},d=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(fo(c,r.config.emulator)&&fo(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Sc(s)?(YE(`${o}//${s}${l}`),XE("Auth",!0)):n5()}function lb(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function t5(e){const t=lb(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:zg(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:zg(s)}}}function zg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function n5(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class cb{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(t){return Wn("not implemented")}_linkToIdToken(t,n){return Wn("not implemented")}_getReauthenticationResolver(t){return Wn("not implemented")}}/**
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
 */async function no(e,t){return RT(e,"POST","/v1/accounts:signInWithIdp",Qh(e,t))}/**
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
 */const r5="http://localhost";class Jn extends cb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Jn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Yh(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Jn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return no(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,no(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,no(t,n)}buildRequest(){const t={requestUri:r5,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ks(n)}return t}}/**
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
 */class tp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class So extends tp{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class ls extends So{static credentialFromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;return Q("providerId"in n&&"signInMethod"in n,"argument-error"),Jn._fromParams(n)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return Q(t.idToken||t.accessToken,"argument-error"),Jn._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return ls.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return ls.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=t;if(!r&&!i&&!n&&!o||!a)return null;try{return new ls(a)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
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
 */class hr extends So{constructor(){super("facebook.com")}static credential(t){return Jn._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hr.credentialFromTaggedObject(t)}static credentialFromError(t){return hr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return hr.credential(t.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class zn extends So{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Jn._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return zn.credentialFromTaggedObject(t)}static credentialFromError(t){return zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
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
 */class Fn extends So{constructor(){super("github.com")}static credential(t){return Jn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Fn.credentialFromTaggedObject(t)}static credentialFromError(t){return Fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Fn.credential(t.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
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
 */class pr extends So{constructor(){super("twitter.com")}static credential(t,n){return Jn._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return pr.credentialFromTaggedObject(t)}static credentialFromError(t){return pr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
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
 */class po{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await cn._fromIdTokenResponse(t,r,i),s=Fg(r);return new po({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Fg(r);return new po({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Fg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Vl extends Lr{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vl.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Vl(t,n,r,i)}}function ub(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Vl._fromErrorAndOperation(e,o,t,r):o})}async function i5(e,t,n=!1){const r=await Ms(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return po._forOperation(e,"link",r)}/**
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
 */async function o5(e,t,n=!1){const{auth:r}=e;if(Sn(r.app))return Promise.reject(li(r));const i="reauthenticate";try{const o=await Ms(e,ub(r,i,t,e),n);Q(o.idToken,r,"internal-error");const s=Jh(o.idToken);Q(s,r,"internal-error");const{sub:a}=s;return Q(e.uid===a,r,"user-mismatch"),po._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&jn(r,"user-mismatch"),o}}/**
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
 */async function s5(e,t,n=!1){if(Sn(e.app))return Promise.reject(li(e));const r="signIn",i=await ub(e,r,t),o=await po._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function a5(e,t,n,r){return wo(e).onIdTokenChanged(t,n,r)}function l5(e,t,n){return wo(e).beforeAuthStateChanged(t,n)}const Ul="__sak";/**
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
 */class db{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const c5=1e3,u5=10;class fb extends db{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sb(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);UT()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,u5):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},c5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}fb.type="LOCAL";const d5=fb;/**
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
 */class hb extends db{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}hb.type="SESSION";const pb=hb;/**
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
 */function f5(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ec{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ec(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(n.origin,o)),l=await f5(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ec.receivers=[];/**
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
 */function np(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class h5{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=np("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Tn(){return window}function p5(e){Tn().location.href=e}/**
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
 */function mb(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function m5(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function g5(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function y5(){return mb()?self:null}/**
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
 */const gb="firebaseLocalStorageDb",x5=1,Wl="firebaseLocalStorage",yb="fbase_key";class Qs{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _c(e,t){return e.transaction([Wl],t?"readwrite":"readonly").objectStore(Wl)}function v5(){const e=indexedDB.deleteDatabase(gb);return new Qs(e).toPromise()}function lf(){const e=indexedDB.open(gb,x5);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Wl,{keyPath:yb})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Wl)?t(r):(r.close(),await v5(),t(await lf()))})})}async function Bg(e,t,n){const r=_c(e,!0).put({[yb]:t,value:n});return new Qs(r).toPromise()}async function b5(e,t){const n=_c(e,!1).get(t),r=await new Qs(n).toPromise();return r===void 0?null:r.value}function Vg(e,t){const n=_c(e,!0).delete(t);return new Qs(n).toPromise()}const w5=800,k5=3;class xb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lf(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>k5)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ec._getInstance(y5()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await m5(),!this.activeServiceWorker)return;this.sender=new h5(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||g5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await lf();return await Bg(t,Ul,"1"),await Vg(t,Ul),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bg(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>b5(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vg(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=_c(i,!1).getAll();return new Qs(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xb.type="LOCAL";const S5=xb;new Xs(3e4,6e4);/**
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
 */function vb(e,t){return t?$n(t):(Q(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class rp extends cb{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return no(t,this._buildIdpRequest())}_linkToIdToken(t,n){return no(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return no(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function C5(e){return s5(e.auth,new rp(e),e.bypassAuthState)}function E5(e){const{auth:t,user:n}=e;return Q(n,t,"internal-error"),o5(n,new rp(e),e.bypassAuthState)}async function _5(e){const{auth:t,user:n}=e;return Q(n,t,"internal-error"),i5(n,new rp(e),e.bypassAuthState)}/**
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
 */class bb{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return C5;case"linkViaPopup":case"linkViaRedirect":return _5;case"reauthViaPopup":case"reauthViaRedirect":return E5;default:jn(this.auth,"internal-error")}}resolve(t){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const T5=new Xs(2e3,1e4);async function I5(e,t,n){if(Sn(e.app))return Promise.reject(fn(e,"operation-not-supported-in-this-environment"));const r=Cc(e);CT(e,t,tp);const i=vb(r,n);return new ri(r,"signInViaPopup",t,i).executeNotNull()}class ri extends bb{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ri.currentPopupAction&&ri.currentPopupAction.cancel(),ri.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Q(t,this.auth,"internal-error"),t}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const t=np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ri.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,T5.get())};t()}}ri.currentPopupAction=null;/**
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
 */const j5="pendingRedirect",Xa=new Map;class P5 extends bb{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Xa.get(this.auth._key());if(!t){try{const r=await R5(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Xa.set(this.auth._key(),t)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R5(e,t){const n=D5(t),r=N5(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function A5(e,t){Xa.set(e._key(),t)}function N5(e){return $n(e._redirectPersistence)}function D5(e){return qa(j5,e.config.apiKey,e.name)}async function M5(e,t,n=!1){if(Sn(e.app))return Promise.reject(li(e));const r=Cc(e),i=vb(r,t),s=await new P5(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const L5=10*60*1e3;class O5{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!z5(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!wb(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=L5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ug(t))}saveEventToCache(t){this.cachedEventUids.add(Ug(t)),this.lastProcessedEventTime=Date.now()}}function Ug(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function wb({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function z5(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wb(e);default:return!1}}/**
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
 */async function F5(e,t={}){return ko(e,"GET","/v1/projects",t)}/**
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
 */const B5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V5=/^https?/;async function U5(e){if(e.config.emulator)return;const{authorizedDomains:t}=await F5(e);for(const n of t)try{if(W5(n))return}catch{}jn(e,"unauthorized-domain")}function W5(e){const t=sf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!V5.test(n))return!1;if(B5.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $5=new Xs(3e4,6e4);function Wg(){const e=Tn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function H5(e){return new Promise((t,n)=>{var r,i,o;function s(){Wg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wg(),n(fn(e,"network-request-failed"))},timeout:$5.get()})}if(!((i=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Tn().gapi)===null||o===void 0)&&o.load)s();else{const a=QT("iframefcb");return Tn()[a]=()=>{gapi.load?s():n(fn(e,"network-request-failed"))},qT(`${XT()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Qa=null,t})}let Qa=null;function G5(e){return Qa=Qa||H5(e),Qa}/**
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
 */const Y5=new Xs(5e3,15e3),K5="__/auth/iframe",q5="emulator/auth/iframe",X5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Q5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function J5(e){const t=e.config;Q(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Xh(t,q5):`https://${e.config.authDomain}/${K5}`,r={apiKey:t.apiKey,appName:e.name,v:qs},i=Q5.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ks(r).slice(1)}`}async function Z5(e){const t=await G5(e),n=Tn().gapi;return Q(n,e,"internal-error"),t.open({where:document.body,url:J5(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X5,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=fn(e,"network-request-failed"),a=Tn().setTimeout(()=>{o(s)},Y5.get());function l(){Tn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const eI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tI=500,nI=600,rI="_blank",iI="http://localhost";class $g{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oI(e,t,n,r=tI,i=nI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eI),{width:r.toString(),height:i.toString(),top:o,left:s}),c=mt().toLowerCase();n&&(a=tb(c)?rI:n),Z1(c)&&(t=t||iI,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[p,m])=>`${h}${p}=${m},`,"");if(VT(c)&&a!=="_self")return sI(t||"",a),new $g(null);const f=window.open(t||"",a,d);Q(f,e,"popup-blocked");try{f.focus()}catch{}return new $g(f)}function sI(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aI="__/auth/handler",lI="emulator/auth/handler",cI=encodeURIComponent("fac");async function Hg(e,t,n,r,i,o){Q(e.config.authDomain,e,"auth-domain-config-required"),Q(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qs,eventId:i};if(t instanceof tp){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",a_(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries({}))s[d]=f}if(t instanceof So){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(s.scopes=d.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),c=l?`#${cI}=${encodeURIComponent(l)}`:"";return`${uI(e)}?${Ks(a).slice(1)}${c}`}function uI({config:e}){return e.emulator?Xh(e,lI):`https://${e.authDomain}/${aI}`}/**
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
 */const Cu="webStorageSupport";class dI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pb,this._completeRedirectFn=M5,this._overrideRedirectResult=A5}async _openPopup(t,n,r,i){var o;Qn((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Hg(t,n,r,sf(),i);return oI(t,s,np())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Hg(t,n,r,sf(),i);return p5(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Qn(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Z5(t),r=new O5(t);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Cu,{type:Cu},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Cu];s!==void 0&&n(!!s),jn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=U5(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return sb()||eb()||Zh()}}const fI=dI;var Gg="@firebase/auth",Yg="1.10.8";/**
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
 */class hI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pI(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mI(e){Ns(new ho("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;Q(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ab(e)},c=new YT(r,i,o,l);return ZT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ns(new ho("auth-internal",t=>{const n=Cc(t.getProvider("auth").getImmediate());return(r=>new hI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zi(Gg,Yg,pI(e)),Zi(Gg,Yg,"esm2017")}/**
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
 */const gI=5*60,yI=z1("authIdTokenMaxAge")||gI;let Kg=null;const xI=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yI)return;const i=n==null?void 0:n.token;Kg!==i&&(Kg=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vI(e=cT()){const t=U1(e,"auth");if(t.isInitialized())return t.getImmediate();const n=JT(e,{popupRedirectResolver:fI,persistence:[S5,d5,pb]}),r=z1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=xI(o.toString());l5(n,s,()=>s(n.currentUser)),a5(n,a=>s(a))}}const i=HE("auth");return i&&e5(n,`http://${i}`),n}function bI(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}KT({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=fn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",bI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mI("Browser");const kb={apiKey:"AIzaSyCNsYDBSfYMJUxqbkC3Cb_w6CYGtW4Xf20",authDomain:"cloudvault-58446.firebaseapp.com",projectId:"cloudvault-58446",storageBucket:"cloudvault-58446.firebasestorage.app",messagingSenderId:"378535306521",appId:"1:378535306521:web:2e5fe57db925753d0f5188"},wI=["google","github","microsoft"];let Eu=null,qg=null;function kI(){return $l()?(Eu||(Eu=W1(kb),qg=vI(Eu)),qg):null}function $l(){return!0}function SI(){const e=Object.entries(kb).filter(([,t])=>!t).map(([t])=>t);return{configured:$l(),providers:wI.map(t=>({id:t,configured:$l()})),missingEnv:e}}async function CI(e){const t=kI();if(!t)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env variables.");const r={google:new zn,github:new Fn,microsoft:new ls("microsoft.com")}[e];if(!r)throw new Error("Unknown provider");const i=await I5(t,r),o=await i.user.getIdToken(),s=await fetch(`${Jt}/auth/firebase`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:o,email:i.user.email,fullName:i.user.displayName,avatarUrl:i.user.photoURL,provider:e})}),a=await s.json();if(!s.ok)throw new Error(a.error||a.message||"Firebase login failed");return a.success?a.data:a}function EI({onVerified:e,onError:t,onExpire:n,theme:r="auto",size:i="normal"}){const o=w.useRef(null),s=w.useRef(null),[a,l]=w.useState(!1),[c,d]=w.useState(!0),[f,h]=w.useState(null);w.useEffect(()=>{if(window.turnstile)l(!0),d(!1);else{const m=document.querySelector('script[data-cv-turnstile="true"]'),y=m||document.createElement("script");y.src="https://challenges.cloudflare.com/turnstile/v0/api.js",y.async=!0,y.defer=!0,y.dataset.cvTurnstile="true",y.onload=()=>{l(!0),d(!1),console.log("TURNSTILE: Script loaded")},y.onerror=()=>{h("Failed to load Turnstile"),d(!1),t==null||t("Failed to load Turnstile")},m||document.head.appendChild(y)}return()=>{if(s.current&&window.turnstile)try{window.turnstile.remove(s.current),s.current=null}catch(m){console.error("TURNSTILE: Error removing widget:",m)}}},[]),w.useEffect(()=>{if(a&&o.current&&window.turnstile&&!s.current){const m="0x4AAAAAADkh2aePP5UGcXcH",y=["localhost","127.0.0.1","::1"].includes(window.location.hostname);if((m==null?void 0:m.startsWith("1x"))&&!y){const g="Turnstile production site key is not configured";h(g),t==null||t(g),d(!1);return}console.log("TURNSTILE: Rendering widget with site key:",m);try{s.current=window.turnstile.render(o.current,{sitekey:m,theme:r,size:i,callback:g=>{console.log("TURNSTILE: Verification successful"),h(null),e==null||e(g)},"error-callback":g=>{console.error("TURNSTILE: Verification error:",g);const x="Verification failed. For local testing, use the Turnstile test site key; for production, make sure this hostname is allowed in Cloudflare.";h(x),t==null||t(x)},"expired-callback":()=>{console.log("TURNSTILE: Token expired"),h("Verification expired. Please try again."),n==null||n()}})}catch(g){console.error("TURNSTILE: Error rendering widget:",g),h("Failed to render Turnstile widget"),t==null||t("Failed to render Turnstile widget")}}},[a,r,i,e,t,n]);const p=()=>{if(s.current&&window.turnstile)try{window.turnstile.reset(s.current),h(null)}catch(m){console.error("TURNSTILE: Error resetting widget:",m)}};return w.useEffect(()=>{o.current&&(o.current.reset=p)},[]),c?u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",background:"var(--bg-secondary)",borderRadius:"var(--radius)",border:"1px solid var(--border)"},children:u.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid var(--border)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})}):f?u.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"var(--radius)",border:"1px solid var(--danger)",color:"var(--danger)",fontSize:"13px",textAlign:"center"},children:[f,u.jsx("button",{type:"button",onClick:p,style:{marginTop:"8px",padding:"6px 12px",background:"var(--danger)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px"},children:"Retry"})]}):u.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",minHeight:i==="compact"?140:70,overflow:"hidden"},children:u.jsx("div",{ref:o})})}const Gr=(e="")=>{const t=e.toLowerCase();return t.includes("failed to fetch")||t.includes("cannot reach")||t.includes("networkerror")?"Unable to reach CloudVault. Please check your connection.":t.includes("firebase")||t.includes("oauth")||t.includes("access token")?"Social login failed. Please try again.":e||"Something went wrong. Please try again."},_u=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),Xg=e=>e.length>=8&&/[A-Z]/.test(e)&&/[a-z]/.test(e)&&/\d/.test(e);function _I({size:e=20}){return u.jsx("span",{style:{display:"inline-block",width:e,height:e,border:"2.5px solid rgba(255,255,255,0.25)",borderTopColor:"#fff",borderRadius:"50%",animation:"cv-spin 0.7s linear infinite"}})}function TI({size:e=42}){return u.jsx("span",{style:{width:e,height:e,borderRadius:"50%",background:"var(--mega-red, #d90007)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(217,0,7,.35)",flexShrink:0,overflow:"hidden"},children:u.jsx("img",{src:kt.logoImage,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function Ca({label:e,type:t="text",value:n,onChange:r,placeholder:i,autoFocus:o,error:s}){const[a,l]=w.useState(!1),c=n&&n.length>0;return u.jsxs("div",{style:{position:"relative",marginBottom:4},children:[u.jsx("label",{style:{position:"absolute",left:16,top:a||c?8:"50%",transform:a||c?"translateY(0) scale(0.82)":"translateY(-50%)",transformOrigin:"left top",fontSize:a||c?11:14,fontWeight:600,color:a?"var(--cv-accent)":s?"var(--cv-danger)":"var(--cv-text-muted)",transition:"all 0.18s cubic-bezier(0.4,0,0.2,1)",pointerEvents:"none",zIndex:1,letterSpacing:a||c?"0.04em":"0",textTransform:a||c?"uppercase":"none"},children:e}),u.jsx("input",{type:t,value:n,onChange:r,onFocus:()=>l(!0),onBlur:()=>l(!1),autoFocus:o,placeholder:a?i:"",style:{width:"100%",padding:"28px 16px 10px",background:"var(--cv-bg-card)",border:`1.5px solid ${s?"var(--cv-danger)":a?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:"var(--cv-radius-lg)",color:"var(--cv-text)",fontSize:15,outline:"none",transition:"border-color 0.18s ease, box-shadow 0.18s ease",boxShadow:a?`0 0 0 3px ${s?"rgba(239,68,68,0.12)":"rgba(99,102,241,0.12)"}`:"none"}}),s&&u.jsx("div",{style:{fontSize:12,color:"var(--cv-danger)",marginTop:4,paddingLeft:4,fontWeight:500},children:s})]})}function II({value:e,onChange:t}){const n=[w.useRef(),w.useRef(),w.useRef(),w.useRef(),w.useRef(),w.useRef()],r=(e+"      ").slice(0,6).split(""),i=(s,a)=>{var l,c;if(a.key==="Backspace"){if(r[s]!==" "){const d=r.map((f,h)=>h===s?" ":f).join("").trimEnd();t(d)}else if(s>0){(l=n[s-1].current)==null||l.focus();const d=r.map((f,h)=>h===s-1?" ":f).join("").trimEnd();t(d)}}else if(a.key>="0"&&a.key<="9"){a.preventDefault();const d=r.map((f,h)=>h===s?a.key:f).join("").replace(/ /g,"");t(d.slice(0,6)),s<5&&((c=n[s+1].current)==null||c.focus())}},o=s=>{var l;const a=s.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);a&&(t(a),(l=n[Math.min(a.length,5)].current)==null||l.focus())};return u.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",margin:"8px 0"},children:n.map((s,a)=>{var l,c,d,f;return u.jsx("input",{ref:s,type:"text",inputMode:"numeric",maxLength:1,value:((l=r[a])==null?void 0:l.trim())||"",onKeyDown:h=>i(a,h),onPaste:o,onChange:()=>{},style:{width:52,height:60,textAlign:"center",fontSize:24,fontWeight:800,background:"var(--cv-bg-card)",border:`2px solid ${(c=r[a])!=null&&c.trim()?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:14,color:"var(--cv-text)",outline:"none",transition:"border-color 0.18s ease, transform 0.1s ease",transform:(d=r[a])!=null&&d.trim()?"scale(1.05)":"scale(1)",boxShadow:(f=r[a])!=null&&f.trim()?"0 0 0 3px rgba(99,102,241,0.15)":"none"}},a)})})}function jI({label:e,icon:t,onClick:n,disabled:r}){const[i,o]=w.useState(!1);return u.jsxs("button",{type:"button",onClick:n,disabled:r,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,width:"100%",padding:"12px 16px",minHeight:48,background:i?"rgba(0,183,79,.08)":"var(--bg-card)",border:i?"1px solid rgba(0,183,79,.35)":"1px solid var(--border)",borderRadius:14,cursor:r?"not-allowed":"pointer",color:"var(--text)",fontSize:14,fontWeight:700,transition:"all 0.2s ease",opacity:r?.5:1,boxShadow:i?"0 12px 28px rgba(0,0,0,.08)":"none"},children:[u.jsx("span",{style:{display:"flex",alignItems:"center"},children:t}),u.jsxs("span",{children:["Continue with ",e]})]})}function PI({password:e}){if(!e)return null;const t=[{label:"8+ chars",ok:e.length>=8},{label:"Uppercase",ok:/[A-Z]/.test(e)},{label:"Lowercase",ok:/[a-z]/.test(e)},{label:"Number",ok:/\d/.test(e)}],n=t.filter(i=>i.ok).length,r=["var(--cv-danger)","var(--cv-danger)","#f59e0b","#10b981"];return u.jsxs("div",{style:{marginTop:6},children:[u.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:[0,1,2,3].map(i=>u.jsx("div",{style:{flex:1,height:3,borderRadius:99,background:i<n?r[n-1]:"var(--cv-border)",transition:"background 0.3s ease"}},i))}),u.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:t.map(i=>u.jsxs("span",{style:{fontSize:11,color:i.ok?"#10b981":"var(--cv-text-muted)",fontWeight:500},children:[i.ok?"✓":"○"," ",i.label]},i.label))})]})}const K={LOGIN:"login",REGISTER:"register",FORGOT:"forgot",VERIFY_OTP:"verify_otp",RESET_PASSWORD:"reset_password"};function RI({onAuth:e,onBack:t,onNeedsVerification:n,initialMode:r="login"}){const[i,o]=w.useState(r==="login"?K.LOGIN:K.REGISTER),[s,a]=w.useState(!1),[l,c]=w.useState(""),[d,f]=w.useState(""),[h,p]=w.useState("forward"),[m,y]=w.useState(""),[b,g]=w.useState(""),[x,v]=w.useState(""),[k,_]=w.useState(""),[C,T]=w.useState(""),[I,A]=w.useState(""),[P,N]=w.useState(!0),[D,F]=w.useState(!1),[$,H]=w.useState(!1),[q,re]=w.useState(0),[M,U]=w.useState(null),[S,X]=w.useState(!1),[ne,E]=w.useState(0),ye="0x4AAAAAADkh2aePP5UGcXcH",Pe=typeof window<"u"&&["localhost","127.0.0.1","::1"].includes(window.location.hostname),ve=!!(!(ye==null?void 0:ye.startsWith("1x"))||Pe),Pt=$l();SI();const[We,Fe]=w.useState({});w.useEffect(()=>{if(q<=0)return;const B=setTimeout(()=>re(R=>R-1),1e3);return()=>clearTimeout(B)},[q]);const lt=B=>{p("forward"),c(""),f(""),Fe({}),o(B)},ct=()=>{p("back"),c(""),f(""),Fe({}),i===K.REGISTER||i===K.FORGOT?o(K.LOGIN):i===K.VERIFY_OTP?o(K.FORGOT):i===K.RESET_PASSWORD?o(K.VERIFY_OTP):t==null||t()},er=()=>{U(null),X(!1),E(B=>B+1)},mn=async()=>{var R,z;const B={};if(_u(m)||(B.email="Enter a valid email address"),b||(B.password="Password is required"),Object.keys(B).length){Fe(B);return}if(ve&&!S){c("Please complete the security check");return}a(!0),c("");try{const W=await it("/auth/login",{method:"POST",body:JSON.stringify({email:m,password:b,rememberMe:P,...ve&&{turnstileToken:M}})});if(!(W!=null&&W.accessToken))throw new Error("Login failed. Please try again.");const ie=P?localStorage:sessionStorage;ie.setItem("cv_token",W.accessToken),W.refreshToken&&ie.setItem("cv_refreshToken",W.refreshToken),ie.setItem("cv_user",((R=W.user)==null?void 0:R.fullName)||m),e(W.accessToken,W.refreshToken,((z=W.user)==null?void 0:z.fullName)||m,W.user,P)}catch(W){c(Gr(W.message)),er()}a(!1)},ki=async()=>{const B={};if((!k||k.trim().length<2)&&(B.fullName="Full name must be at least 2 characters"),_u(m)||(B.email="Enter a valid email address"),Xg(b)||(B.password="Password must be 8+ chars with uppercase, lowercase, and number"),b!==x&&(B.confirmPassword="Passwords do not match"),Object.keys(B).length){Fe(B);return}if(ve&&!S){c("Please complete the security check");return}a(!0),c("");try{await it("/auth/register",{method:"POST",body:JSON.stringify({email:m,password:b,fullName:k,...ve&&{turnstileToken:M}})}),f("Account created! Check your email to verify your account, then sign in."),lt(K.LOGIN)}catch(R){c(Gr(R.message)),er()}a(!1)},Vt=async()=>{if(!_u(m)){Fe({email:"Enter a valid email address"});return}if(ve&&!S){c("Please complete the security check");return}a(!0),c("");try{await it("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:m,...ve&&{turnstileToken:M}})}),re(60),lt(K.VERIFY_OTP),f("A 6-digit OTP has been sent to your email.")}catch(B){c(Gr(B.message)),er()}a(!1)},Br=async()=>{if(!(q>0)){a(!0),c("");try{await it("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:m})}),re(60),f("A new OTP has been sent.")}catch(B){c(Gr(B.message))}a(!1)}},An=async()=>{if(C.length!==6){c("Enter the 6-digit code from your email");return}a(!0),c("");try{const B=await it("/auth/verify-otp",{method:"POST",body:JSON.stringify({email:m,otp:C})});A(B.resetToken),lt(K.RESET_PASSWORD)}catch(B){c(Gr(B.message)),T("")}a(!1)},xt=async()=>{const B={};if(Xg(b)||(B.password="Password must be 8+ chars with uppercase, lowercase, and number"),b!==x&&(B.confirmPassword="Passwords do not match"),Object.keys(B).length){Fe(B);return}a(!0),c("");try{await it("/auth/reset-password",{method:"POST",body:JSON.stringify({token:I,newPassword:b})}),f("Password reset successfully! Please sign in."),g(""),v(""),lt(K.LOGIN)}catch(R){c(Gr(R.message))}a(!1)},tr=async B=>{var R,z;if(!Pt){c("Social login is not available. Please use email and password.");return}a(!0),c("");try{const W=await CI(B);if(!(W!=null&&W.accessToken))throw new Error("Social login failed.");localStorage.setItem("cv_token",W.accessToken),W.refreshToken&&localStorage.setItem("cv_refreshToken",W.refreshToken),localStorage.setItem("cv_user",((R=W.user)==null?void 0:R.fullName)||m),e(W.accessToken,W.refreshToken,((z=W.user)==null?void 0:z.fullName)||m,W.user,!0)}catch(W){c(Gr(W.message))}a(!1)},Nn={[K.LOGIN]:{title:"Welcome back",sub:`Sign in to ${kt.name}`},[K.REGISTER]:{title:"Create account",sub:"Start your CloudVault journey"},[K.FORGOT]:{title:"Forgot password?",sub:"We'll send a code to your email"},[K.VERIFY_OTP]:{title:"Enter your code",sub:`Sent to ${m||"your email"}`},[K.RESET_PASSWORD]:{title:"New password",sub:"Choose a strong password"}},vt=!s&&(!ve||S||i===K.VERIFY_OTP||i===K.RESET_PASSWORD),nr=()=>{i===K.LOGIN?mn():i===K.REGISTER?ki():i===K.FORGOT?Vt():i===K.VERIFY_OTP?An():i===K.RESET_PASSWORD&&xt()},pe={[K.LOGIN]:"Sign in",[K.REGISTER]:"Create account",[K.FORGOT]:"Send code",[K.VERIFY_OTP]:"Verify code",[K.RESET_PASSWORD]:"Reset password"}[i];return u.jsxs("div",{className:"auth-splash",children:[u.jsx("style",{children:Ji}),u.jsx("style",{children:`
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
      `}),u.jsxs("div",{className:"auth-cloud-logo",style:{marginBottom:48},children:[u.jsx("div",{className:"auth-cloud-bg"}),u.jsx("div",{className:"auth-mega-mark",children:u.jsx("div",{className:"auth-mega-circle",children:u.jsx("img",{src:kt.logoImage,alt:""})})})]}),u.jsxs("div",{className:"cv-auth-card",style:{width:"100%",maxWidth:440,background:"rgba(20, 20, 20, .96)",borderRadius:20,border:"1px solid rgba(255,255,255,.08)",boxShadow:"0 32px 80px rgba(0,0,0,0.55)",overflow:"hidden",position:"relative"},children:[u.jsx("div",{style:{height:3,background:"var(--cv-accent)",position:"absolute",top:0,left:0,right:0}}),u.jsxs("div",{style:{padding:"36px 32px 32px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:28,justifyContent:"center"},children:[u.jsx(TI,{size:36}),u.jsx("div",{style:{fontSize:18,fontWeight:800,color:"var(--cv-text)",letterSpacing:"-0.02em"},children:kt.name})]}),i!==K.LOGIN&&u.jsx("button",{type:"button",onClick:ct,style:{display:"flex",alignItems:"center",gap:6,marginBottom:24,background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,padding:"4px 0",transition:"color 0.15s"},onMouseEnter:B=>B.currentTarget.style.color="var(--text)",onMouseLeave:B=>B.currentTarget.style.color="var(--text-muted)",children:"← Back"}),u.jsxs("div",{className:"cv-auth-step",style:{marginBottom:28},children:[u.jsx("h1",{style:{fontSize:26,fontWeight:800,color:"var(--text)",letterSpacing:"-0.03em",margin:"0 0 4px"},children:Nn[i].title}),u.jsx("p",{style:{fontSize:14,color:"var(--text-muted)",margin:0,fontWeight:500},children:Nn[i].sub})]}),(i===K.LOGIN||i===K.REGISTER)&&u.jsx("div",{style:{display:"flex",gap:4,background:"var(--surface-raised)",borderRadius:14,padding:4,marginBottom:24,border:"1px solid var(--border)"},children:[K.LOGIN,K.REGISTER].map(B=>u.jsx("button",{type:"button",onClick:()=>lt(B),style:{flex:1,padding:"9px 12px",borderRadius:10,border:"none",background:i===B?"var(--bg-card)":"transparent",color:i===B?"var(--text)":"var(--text-muted)",fontSize:14,fontWeight:i===B?700:500,cursor:"pointer",boxShadow:i===B?"0 2px 8px rgba(0,0,0,0.08)":"none",transition:"all 0.18s ease"},children:B===K.LOGIN?"Sign In":"Sign Up"},B))}),u.jsxs("div",{className:"cv-auth-step",style:{display:"flex",flexDirection:"column",gap:14},children:[i===K.REGISTER&&u.jsx(Ca,{label:"Full Name",value:k,onChange:B=>{_(B.target.value),Fe(R=>({...R,fullName:""}))},placeholder:"Jane Smith",autoFocus:!0,error:We.fullName}),[K.LOGIN,K.REGISTER,K.FORGOT].includes(i)&&u.jsx(Ca,{label:"Email Address",type:"email",value:m,onChange:B=>{y(B.target.value),Fe(R=>({...R,email:""}))},placeholder:"you@example.com",autoFocus:i===K.LOGIN||i===K.FORGOT,error:We.email}),[K.LOGIN,K.REGISTER,K.RESET_PASSWORD].includes(i)&&u.jsxs("div",{children:[u.jsxs("div",{style:{position:"relative"},children:[u.jsx(Ca,{label:"Password",type:D?"text":"password",value:b,onChange:B=>{g(B.target.value),Fe(R=>({...R,password:""}))},placeholder:i===K.LOGIN?"Your password":"Min 8 chars, A-Z, 0-9",autoFocus:i===K.RESET_PASSWORD,error:We.password}),u.jsx("button",{type:"button",onClick:()=>F(B=>!B),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:We.password?-10:0},children:D?"Hide":"Show"})]}),(i===K.REGISTER||i===K.RESET_PASSWORD)&&u.jsx(PI,{password:b})]}),[K.REGISTER,K.RESET_PASSWORD].includes(i)&&u.jsxs("div",{style:{position:"relative"},children:[u.jsx(Ca,{label:"Confirm Password",type:$?"text":"password",value:x,onChange:B=>{v(B.target.value),Fe(R=>({...R,confirmPassword:""}))},placeholder:"Repeat your password",error:We.confirmPassword}),u.jsx("button",{type:"button",onClick:()=>H(B=>!B),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:We.confirmPassword?-10:0},children:$?"Hide":"Show"})]}),i===K.VERIFY_OTP&&u.jsxs("div",{children:[u.jsx(II,{value:C,onChange:T}),u.jsxs("div",{style:{textAlign:"center",marginTop:12},children:[u.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:["Didn't get the code?"," "]}),u.jsx("button",{type:"button",onClick:Br,disabled:q>0||s,style:{background:"none",border:"none",cursor:q>0?"default":"pointer",color:q>0?"var(--text-muted)":"var(--accent-blue)",fontSize:13,fontWeight:600},children:q>0?`Resend in ${q}s`:"Resend"})]})]}),i===K.LOGIN&&u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},children:[u.jsx("input",{type:"checkbox",checked:P,onChange:B=>N(B.target.checked),style:{width:16,height:16,accentColor:"var(--accent-blue)"}}),u.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:500},children:"Remember me"})]}),u.jsx("button",{type:"button",onClick:()=>lt(K.FORGOT),style:{background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:13,fontWeight:600},children:"Forgot password?"})]})]}),l&&u.jsxs("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:12,color:"#ef4444",fontSize:13,fontWeight:500,lineHeight:1.5},children:[l,l.includes("verify your email")&&u.jsx("button",{type:"button",onClick:async()=>{try{await it("/auth/resend-verification",{method:"POST",body:JSON.stringify({email:m})}),f("Verification email resent. Check your inbox."),c("")}catch{}},style:{display:"block",marginTop:8,background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:12,fontWeight:600},children:"Resend verification email →"})]}),d&&u.jsx("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:12,color:"#10b981",fontSize:13,fontWeight:500,lineHeight:1.5},children:d}),ve&&[K.LOGIN,K.REGISTER,K.FORGOT].includes(i)&&u.jsx("div",{style:{marginTop:16},children:u.jsx(EI,{onVerified:B=>{U(B),X(!0)},onError:B=>{c(B||"Security check failed. Please refresh."),X(!1)},onExpire:()=>{U(null),X(!1)}},ne)}),u.jsx("button",{type:"button",onClick:nr,disabled:!vt,style:{width:"100%",marginTop:20,padding:"14px 20px",background:vt?"var(--cv-accent)":"var(--surface-raised)",color:vt?"#fff":"var(--text-muted)",border:"none",borderRadius:14,fontSize:15,fontWeight:700,cursor:vt?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"all 0.2s ease",boxShadow:vt?"0 16px 34px rgba(217,0,7,0.28)":"none",transform:"translateY(0)"},onMouseEnter:B=>{vt&&(B.currentTarget.style.transform="translateY(-1px)")},onMouseLeave:B=>{B.currentTarget.style.transform="translateY(0)"},children:s?u.jsx(_I,{}):pe}),[K.LOGIN,K.REGISTER].includes(i)&&u.jsxs("div",{style:{marginTop:20},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[u.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),u.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:"or"}),u.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[{id:"google",label:"Google",icon:u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),u.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),u.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),u.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})},{id:"github",label:"GitHub",icon:u.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})})},{id:"microsoft",label:"Microsoft",icon:u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M10 0H0v10h10V0z",fill:"#F25022"}),u.jsx("path",{d:"M21 0H11v10h10V0z",fill:"#7FBA00"}),u.jsx("path",{d:"M10 11H0v10h10V11z",fill:"#00A4EF"}),u.jsx("path",{d:"M21 11H11v10h10V11z",fill:"#FFB900"})]})}].map(B=>u.jsx(jI,{label:B.label,icon:B.icon,disabled:s||!Pt,onClick:()=>tr(B.id)},B.id))})]}),i===K.LOGIN&&u.jsx("div",{style:{textAlign:"center",marginTop:20},children:u.jsx("button",{type:"button",onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:500},children:"← Back to home"})})]})]})]})}function AI({file:e,token:t}){const[n,r]=w.useState([]),[i,o]=w.useState(!0),[s,a]=w.useState(""),[l,c]=w.useState(!1),[d,f]=w.useState(""),h=async()=>{try{const y=await it(`/comments/${e.id}`,{},t);r(y.data||[])}catch{f("Failed to load comments")}finally{o(!1)}};w.useEffect(()=>{h()},[e.id]);const p=async y=>{if(y.preventDefault(),!!s.trim()){c(!0);try{const b=await it(`/comments/${e.id}`,{method:"POST",body:JSON.stringify({content:s})},t);r([b.data,...n]),a("")}catch{f("Failed to post comment")}finally{c(!1)}}},m=async y=>{if(window.confirm("Delete this comment?"))try{await it(`/comments/${y}`,{method:"DELETE"},t),r(n.filter(b=>b.id!==y))}catch{alert("Failed to delete comment")}};return localStorage.getItem("cv_userId")||sessionStorage.getItem("cv_userId"),u.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",width:320,borderLeft:"1px solid var(--border)",background:"var(--bg-card)"},children:[u.jsx("div",{style:{padding:"16px",borderBottom:"1px solid var(--border)"},children:u.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:700},children:"Comments"})}),u.jsx("div",{style:{flex:1,overflowY:"auto",padding:"16px"},children:i?u.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading comments..."}):n.length===0?u.jsx("p",{style:{color:"var(--text-muted)",textAlign:"center",marginTop:20},children:"No comments yet. Be the first to start the discussion!"}):u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:n.map(y=>{var b,g,x,v,k,_,C;return u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"var(--accent)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:"bold"},children:((g=(b=y.user)==null?void 0:b.fullName)==null?void 0:g[0])||((k=(v=(x=y.user)==null?void 0:x.email)==null?void 0:v[0])==null?void 0:k.toUpperCase())||"?"}),u.jsxs("div",{style:{flex:1},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[u.jsx("span",{style:{fontWeight:600,fontSize:13},children:((_=y.user)==null?void 0:_.fullName)||((C=y.user)==null?void 0:C.email.split("@")[0])}),u.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:bo(y.createdAt)})]}),u.jsx("p",{style:{fontSize:13,marginTop:4,marginBottom:4,lineHeight:1.4,wordBreak:"break-word"},children:y.content}),u.jsx("button",{onClick:()=>m(y.id),style:{background:"none",border:"none",color:"var(--danger)",fontSize:11,cursor:"pointer",padding:0,opacity:.7},children:"Delete"})]})]},y.id)})})}),u.jsxs("div",{style:{padding:"16px",borderTop:"1px solid var(--border)"},children:[d&&u.jsx("p",{style:{color:"var(--danger)",fontSize:12,marginBottom:8},children:d}),u.jsxs("form",{onSubmit:p,style:{display:"flex",flexDirection:"column",gap:8},children:[u.jsx("textarea",{value:s,onChange:y=>a(y.target.value),placeholder:"Add a comment...",style:{width:"100%",minHeight:80,padding:12,borderRadius:8,background:"var(--bg-primary)",border:"1px solid var(--border)",color:"var(--text)",resize:"none",fontFamily:"var(--font)"}}),u.jsx("button",{type:"submit",disabled:l||!s.trim(),className:"btn-primary",style:{padding:"8px 16px",alignSelf:"flex-end",opacity:l||!s.trim()?.5:1},children:l?"Posting...":"Post"})]})]})]})}function NI({size:e=22}){return u.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Sb({file:e,token:t,onClose:n,customFetchBlob:r}){const[i,o]=w.useState(null),[s,a]=w.useState(""),[l,c]=w.useState(!0),[d,f]=w.useState(""),[h,p]=w.useState(1),[m,y]=w.useState(0),[b,g]=w.useState(!1),[x,v]=w.useState(!1),k=jE(e.mimeType);w.useEffect(()=>{let T=null,I=!1;return(async()=>{c(!0),f("");try{const A=r?await r():await kc(e.id,t,{disposition:"preview"});if(I)return;if(k==="text"){const P=await A.text();a(P)}else T=URL.createObjectURL(A),o(T)}catch(A){I||f(A.message||"Preview failed")}finally{I||c(!1)}})(),()=>{I=!0,T&&URL.revokeObjectURL(T)}},[e.id,t,k]);const _=(T,I,A=!1)=>u.jsx("button",{type:"button",onClick:I,disabled:A,style:{padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",cursor:A?"not-allowed":"pointer",fontFamily:"var(--font)",fontSize:12,fontWeight:600},children:T}),C=()=>l?u.jsx("div",{style:{padding:48,textAlign:"center"},children:u.jsx(NI,{size:32})}):d?u.jsx("p",{style:{color:"var(--danger)",padding:24,textAlign:"center"},children:d}):k==="image"&&i?u.jsx("img",{src:i,alt:e.name,style:{maxWidth:b?"96vw":"80vw",maxHeight:b?"90vh":"70vh",borderRadius:12,transform:`scale(${h}) rotate(${m}deg)`,transition:"transform .2s ease"}}):k==="pdf"&&i?u.jsx("iframe",{src:i,title:e.name,style:{width:"75vw",height:"75vh",border:"none",borderRadius:12}}):k==="video"&&i?u.jsx("video",{src:i,controls:!0,style:{maxWidth:"80vw",maxHeight:"75vh",borderRadius:12}}):k==="audio"&&i?u.jsx("audio",{src:i,controls:!0,style:{width:"min(480px, 80vw)"}}):k==="text"?u.jsx("pre",{style:{maxWidth:"80vw",maxHeight:"70vh",overflow:"auto",padding:16,background:"var(--bg-card)",borderRadius:12,color:"var(--text)",fontSize:13,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:s}):u.jsx("p",{style:{padding:24,color:"var(--text-muted)"},children:"Preview not available for this file type."});return u.jsx("div",{onClick:n,style:{position:"fixed",inset:0,zIndex:1e3,background:b?"#000":"rgba(0,0,0,.88)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)",animation:"fadeIn .2s ease"},children:u.jsxs("div",{onClick:T=>T.stopPropagation(),style:{background:b?"transparent":"var(--bg-primary)",borderRadius:b?0:20,border:b?"none":"1.5px solid var(--border)",maxWidth:b?"100vw":"95vw",maxHeight:b?"100vh":"95vh",width:b?"100%":void 0,height:b?"100%":void 0,overflow:"auto",padding:b?16:24,boxShadow:b?"none":"var(--shadow)",display:"flex",flexDirection:"row"},children:[u.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",padding:b?16:24,overflow:"hidden"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:12},children:[u.jsx("div",{style:{color:"var(--text)",fontWeight:700,fontSize:16,flex:1,overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),k==="image"&&u.jsxs("div",{style:{display:"flex",gap:6},children:[_("−",()=>p(T=>Math.max(.25,T-.25))),_("+",()=>p(T=>Math.min(4,T+.25))),_("↻",()=>y(T=>(T+90)%360)),_(b?"⊡":"⛶",()=>g(T=>!T))]}),_("💬 Comments",()=>v(T=>!T)),u.jsx("button",{type:"button",onClick:n,style:{background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:8,color:"var(--text-secondary)",cursor:"pointer",width:32,height:32},children:"✕"})]}),u.jsx("div",{style:{display:"flex",justifyContent:"center",flex:1,overflow:"auto"},children:C()})]}),x&&!b&&u.jsx(AI,{file:e,token:t})]})})}function DI({fileId:e,token:t,alt:n,mimeType:r}){const[i,o]=w.useState(null),[s,a]=w.useState(!1);return w.useEffect(()=>{if(!e||!t||!(r!=null&&r.startsWith("image/")))return;let l=null,c=!1;return kc(e,t,{disposition:"preview"}).then(d=>{c||(l=URL.createObjectURL(d),o(l))}).catch(()=>{c||a(!0)}),()=>{c=!0,l&&URL.revokeObjectURL(l)}},[e,t,r]),!(r!=null&&r.startsWith("image/"))||s?u.jsx("div",{style:{fontSize:44,display:"flex"},children:Gs(r)}):i?u.jsx("img",{src:i,alt:n,style:{width:"100%",height:"100%",objectFit:"cover"},onError:()=>a(!0)}):u.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite"}})}function MI({trashedFiles:e,trashedFolders:t,loading:n,onRestoreFile:r,onRestoreFolder:i,onPermanentDelete:o,onEmptyTrash:s,onBack:a}){return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[u.jsxs("div",{children:[u.jsx("button",{type:"button",onClick:a,style:LI,children:"← Back to My Cloud"}),u.jsx("h2",{style:{color:"var(--text)",fontWeight:800,fontSize:22,marginTop:8},children:"Trash"}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"Items in trash still count toward storage until permanently deleted."})]}),(e.length>0||t.length>0)&&u.jsx("button",{type:"button",onClick:s,style:OI,children:"Empty trash"})]}),n?u.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading trash…"}):e.length===0&&t.length===0?u.jsxs("div",{style:{textAlign:"center",padding:64,color:"var(--text-muted)",border:"1px dashed var(--border)",borderRadius:16},children:[u.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🗑️"}),u.jsx("div",{style:{fontWeight:700},children:"Trash is empty"})]}):u.jsxs(u.Fragment,{children:[t.length>0&&u.jsxs("section",{style:{marginBottom:24},children:[u.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FOLDERS"}),t.map(l=>u.jsx(Qg,{icon:"📁",name:l.name,meta:"Folder",onRestore:()=>i(l.id)},l.id))]}),e.length>0&&u.jsxs("section",{children:[u.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FILES"}),e.map(l=>u.jsx(Qg,{icon:Gs(l.mimeType),name:l.name,meta:`${Ke(l.size)} · ${bo(l.trashedAt||l.deletedAt)}`,onRestore:()=>r(l.id),onDelete:()=>o(l)},l.id))]})]})]})}function Qg({icon:e,name:t,meta:n,onRestore:r,onDelete:i}){return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,marginBottom:8},children:[u.jsx("span",{style:{fontSize:24},children:e}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t}),u.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:n})]}),u.jsx("button",{type:"button",onClick:r,style:Jg,children:"Restore"}),i&&u.jsx("button",{type:"button",onClick:i,style:{...Jg,color:"var(--danger)"},children:"Delete forever"})]})}const LI={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"},OI={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontFamily:"var(--font)"},Jg={padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--font)"};function zI({value:e,onChange:t,folders:n,disabledId:r}){const[i,o]=w.useState(!1),s=n.find(l=>l.id===e),a=s?"—".repeat(s.depth)+" "+s.name:"My Cloud (root)";return u.jsxs("div",{style:{position:"relative",marginTop:6,marginBottom:16},children:[u.jsxs("button",{type:"button",onClick:()=>o(!i),style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)",fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",textAlign:"left"},children:[u.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a}),u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{flexShrink:0,transform:i?"rotate(180deg)":"none",transition:"0.2s",opacity:.5},children:u.jsx("path",{d:"M6 9l6 6 6-6"})})]}),i&&u.jsxs(u.Fragment,{children:[u.jsx("div",{onClick:()=>o(!1),style:{position:"fixed",inset:0,zIndex:90}}),u.jsxs("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,maxHeight:220,overflowY:"auto",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"0 12px 40px rgba(0,0,0,0.35)",zIndex:91,animation:"fadeIn 0.15s ease"},children:[u.jsxs("button",{onClick:()=>{t(""),o(!1)},style:{display:"block",width:"100%",padding:"10px 14px",border:"none",background:e===""?"rgba(59,130,246,0.12)":"transparent",color:"var(--text)",fontFamily:"var(--font)",fontSize:13,fontWeight:e===""?600:500,cursor:"pointer",textAlign:"left"},children:["📁 My Cloud (root)",e===""&&u.jsx("span",{style:{marginLeft:8,color:"var(--accent-blue)"},children:"✓"})]}),n.map(l=>u.jsxs("button",{disabled:l.id===r,onClick:()=>{t(l.id),o(!1)},style:{display:"block",width:"100%",padding:"10px 14px",paddingLeft:14+l.depth*16,border:"none",background:l.id===e?"rgba(59,130,246,0.12)":"transparent",color:l.id===r?"var(--text-muted)":"var(--text)",fontFamily:"var(--font)",fontSize:13,fontWeight:l.id===e?600:500,cursor:l.id===r?"not-allowed":"pointer",textAlign:"left",opacity:l.id===r?.4:1},children:["📁 ","—".repeat(l.depth)," ",l.name,l.id===e&&u.jsx("span",{style:{marginLeft:8,color:"var(--accent-blue)"},children:"✓"})]},l.id))]})]})]})}function FI({file:e,mode:t,folders:n,currentFolderId:r,onConfirm:i,onCancel:o}){const[s,a]=w.useState(r||""),[l,c]=w.useState(e.name),d=Cb(n);return u.jsx("div",{onClick:o,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:u.jsxs("div",{onClick:f=>f.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(420px, 92vw)",animation:"scaleIn .2s ease"},children:[u.jsxs("h3",{style:{color:"var(--text)",fontWeight:700,fontSize:18,marginBottom:8},children:[t==="move"?"Move":"Copy"," file"]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:20},children:e.name}),u.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"Destination folder"}),u.jsx(zI,{value:s,onChange:a,folders:d,disabledId:e.folderId}),t==="copy"&&u.jsxs(u.Fragment,{children:[u.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"New name (optional)"}),u.jsx("input",{value:l,onChange:f=>c(f.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"}})]}),u.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[u.jsx("button",{type:"button",onClick:o,style:Eb,children:"Cancel"}),u.jsx("button",{type:"button",onClick:()=>i({targetFolderId:s||null,newName:t==="copy"?l:void 0}),style:BI,children:t==="move"?"Move":"Copy"})]})]})})}function Cb(e,t=0){var r;const n=[];for(const i of e)n.push({...i,depth:t}),(r=i.children)!=null&&r.length&&n.push(...Cb(i.children,t+1));return n}const Eb={padding:"10px 20px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},BI={...Eb,border:"none",background:"var(--accent)",color:"#fff"};function VI({file:e,allTags:t,onSave:n,onCancel:r}){const[i,o]=w.useState(e.tags||[]),[s,a]=w.useState(""),l=c=>{const d=c.trim().toLowerCase();!d||i.includes(d)||i.length>=20||(o([...i,d]),a(""))};return u.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:u.jsxs("div",{onClick:c=>c.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(440px, 92vw)"},children:[u.jsx("h3",{style:{color:"var(--text)",fontWeight:700,marginBottom:4},children:"Edit tags"}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:16},children:e.name}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12},children:i.map(c=>u.jsxs("span",{style:{background:"rgba(240,22,58,.15)",color:"var(--accent)",padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[c,u.jsx("button",{type:"button",onClick:()=>o(i.filter(d=>d!==c)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:"×"})]},c))}),u.jsx("input",{value:s,onChange:c=>a(c.target.value),onKeyDown:c=>{c.key==="Enter"&&(c.preventDefault(),l(s))},placeholder:"Add tag and press Enter",style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",marginBottom:12}}),t.length>0&&u.jsxs("div",{style:{marginBottom:16},children:[u.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6},children:"Suggestions"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:t.filter(c=>!i.includes(c)).slice(0,12).map(c=>u.jsxs("button",{type:"button",onClick:()=>l(c),style:{padding:"4px 10px",borderRadius:20,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",fontSize:12,cursor:"pointer"},children:["+ ",c]},c))})]}),u.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[u.jsx("button",{type:"button",onClick:r,style:_b,children:"Cancel"}),u.jsx("button",{type:"button",onClick:()=>n(i),style:UI,children:"Save tags"})]})]})})}const _b={padding:"10px 18px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},UI={..._b,border:"none",background:"var(--accent)",color:"#fff"};var WI=Object.defineProperty,Hl=Object.getOwnPropertySymbols,Tb=Object.prototype.hasOwnProperty,Ib=Object.prototype.propertyIsEnumerable,Zg=(e,t,n)=>t in e?WI(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cf=(e,t)=>{for(var n in t||(t={}))Tb.call(t,n)&&Zg(e,n,t[n]);if(Hl)for(var n of Hl(t))Ib.call(t,n)&&Zg(e,n,t[n]);return e},uf=(e,t)=>{var n={};for(var r in e)Tb.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Hl)for(var r of Hl(e))t.indexOf(r)<0&&Ib.call(e,r)&&(n[r]=e[r]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var yi;(e=>{const t=class oe{constructor(l,c,d,f){if(this.version=l,this.errorCorrectionLevel=c,this.modules=[],this.isFunction=[],l<oe.MIN_VERSION||l>oe.MAX_VERSION)throw new RangeError("Version value out of range");if(f<-1||f>7)throw new RangeError("Mask value out of range");this.size=l*4+17;let h=[];for(let m=0;m<this.size;m++)h.push(!1);for(let m=0;m<this.size;m++)this.modules.push(h.slice()),this.isFunction.push(h.slice());this.drawFunctionPatterns();const p=this.addEccAndInterleave(d);if(this.drawCodewords(p),f==-1){let m=1e9;for(let y=0;y<8;y++){this.applyMask(y),this.drawFormatBits(y);const b=this.getPenaltyScore();b<m&&(f=y,m=b),this.applyMask(y)}}i(0<=f&&f<=7),this.mask=f,this.applyMask(f),this.drawFormatBits(f),this.isFunction=[]}static encodeText(l,c){const d=e.QrSegment.makeSegments(l);return oe.encodeSegments(d,c)}static encodeBinary(l,c){const d=e.QrSegment.makeBytes(l);return oe.encodeSegments([d],c)}static encodeSegments(l,c,d=1,f=40,h=-1,p=!0){if(!(oe.MIN_VERSION<=d&&d<=f&&f<=oe.MAX_VERSION)||h<-1||h>7)throw new RangeError("Invalid value");let m,y;for(m=d;;m++){const v=oe.getNumDataCodewords(m,c)*8,k=s.getTotalBits(l,m);if(k<=v){y=k;break}if(m>=f)throw new RangeError("Data too long")}for(const v of[oe.Ecc.MEDIUM,oe.Ecc.QUARTILE,oe.Ecc.HIGH])p&&y<=oe.getNumDataCodewords(m,v)*8&&(c=v);let b=[];for(const v of l){n(v.mode.modeBits,4,b),n(v.numChars,v.mode.numCharCountBits(m),b);for(const k of v.getData())b.push(k)}i(b.length==y);const g=oe.getNumDataCodewords(m,c)*8;i(b.length<=g),n(0,Math.min(4,g-b.length),b),n(0,(8-b.length%8)%8,b),i(b.length%8==0);for(let v=236;b.length<g;v^=253)n(v,8,b);let x=[];for(;x.length*8<b.length;)x.push(0);return b.forEach((v,k)=>x[k>>>3]|=v<<7-(k&7)),new oe(m,c,x,h)}getModule(l,c){return 0<=l&&l<this.size&&0<=c&&c<this.size&&this.modules[c][l]}getModules(){return this.modules}drawFunctionPatterns(){for(let d=0;d<this.size;d++)this.setFunctionModule(6,d,d%2==0),this.setFunctionModule(d,6,d%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const l=this.getAlignmentPatternPositions(),c=l.length;for(let d=0;d<c;d++)for(let f=0;f<c;f++)d==0&&f==0||d==0&&f==c-1||d==c-1&&f==0||this.drawAlignmentPattern(l[d],l[f]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(l){const c=this.errorCorrectionLevel.formatBits<<3|l;let d=c;for(let h=0;h<10;h++)d=d<<1^(d>>>9)*1335;const f=(c<<10|d)^21522;i(f>>>15==0);for(let h=0;h<=5;h++)this.setFunctionModule(8,h,r(f,h));this.setFunctionModule(8,7,r(f,6)),this.setFunctionModule(8,8,r(f,7)),this.setFunctionModule(7,8,r(f,8));for(let h=9;h<15;h++)this.setFunctionModule(14-h,8,r(f,h));for(let h=0;h<8;h++)this.setFunctionModule(this.size-1-h,8,r(f,h));for(let h=8;h<15;h++)this.setFunctionModule(8,this.size-15+h,r(f,h));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let l=this.version;for(let d=0;d<12;d++)l=l<<1^(l>>>11)*7973;const c=this.version<<12|l;i(c>>>18==0);for(let d=0;d<18;d++){const f=r(c,d),h=this.size-11+d%3,p=Math.floor(d/3);this.setFunctionModule(h,p,f),this.setFunctionModule(p,h,f)}}drawFinderPattern(l,c){for(let d=-4;d<=4;d++)for(let f=-4;f<=4;f++){const h=Math.max(Math.abs(f),Math.abs(d)),p=l+f,m=c+d;0<=p&&p<this.size&&0<=m&&m<this.size&&this.setFunctionModule(p,m,h!=2&&h!=4)}}drawAlignmentPattern(l,c){for(let d=-2;d<=2;d++)for(let f=-2;f<=2;f++)this.setFunctionModule(l+f,c+d,Math.max(Math.abs(f),Math.abs(d))!=1)}setFunctionModule(l,c,d){this.modules[c][l]=d,this.isFunction[c][l]=!0}addEccAndInterleave(l){const c=this.version,d=this.errorCorrectionLevel;if(l.length!=oe.getNumDataCodewords(c,d))throw new RangeError("Invalid argument");const f=oe.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][c],h=oe.ECC_CODEWORDS_PER_BLOCK[d.ordinal][c],p=Math.floor(oe.getNumRawDataModules(c)/8),m=f-p%f,y=Math.floor(p/f);let b=[];const g=oe.reedSolomonComputeDivisor(h);for(let v=0,k=0;v<f;v++){let _=l.slice(k,k+y-h+(v<m?0:1));k+=_.length;const C=oe.reedSolomonComputeRemainder(_,g);v<m&&_.push(0),b.push(_.concat(C))}let x=[];for(let v=0;v<b[0].length;v++)b.forEach((k,_)=>{(v!=y-h||_>=m)&&x.push(k[v])});return i(x.length==p),x}drawCodewords(l){if(l.length!=Math.floor(oe.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let c=0;for(let d=this.size-1;d>=1;d-=2){d==6&&(d=5);for(let f=0;f<this.size;f++)for(let h=0;h<2;h++){const p=d-h,y=(d+1&2)==0?this.size-1-f:f;!this.isFunction[y][p]&&c<l.length*8&&(this.modules[y][p]=r(l[c>>>3],7-(c&7)),c++)}}i(c==l.length*8)}applyMask(l){if(l<0||l>7)throw new RangeError("Mask value out of range");for(let c=0;c<this.size;c++)for(let d=0;d<this.size;d++){let f;switch(l){case 0:f=(d+c)%2==0;break;case 1:f=c%2==0;break;case 2:f=d%3==0;break;case 3:f=(d+c)%3==0;break;case 4:f=(Math.floor(d/3)+Math.floor(c/2))%2==0;break;case 5:f=d*c%2+d*c%3==0;break;case 6:f=(d*c%2+d*c%3)%2==0;break;case 7:f=((d+c)%2+d*c%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[c][d]&&f&&(this.modules[c][d]=!this.modules[c][d])}}getPenaltyScore(){let l=0;for(let h=0;h<this.size;h++){let p=!1,m=0,y=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[h][b]==p?(m++,m==5?l+=oe.PENALTY_N1:m>5&&l++):(this.finderPenaltyAddHistory(m,y),p||(l+=this.finderPenaltyCountPatterns(y)*oe.PENALTY_N3),p=this.modules[h][b],m=1);l+=this.finderPenaltyTerminateAndCount(p,m,y)*oe.PENALTY_N3}for(let h=0;h<this.size;h++){let p=!1,m=0,y=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[b][h]==p?(m++,m==5?l+=oe.PENALTY_N1:m>5&&l++):(this.finderPenaltyAddHistory(m,y),p||(l+=this.finderPenaltyCountPatterns(y)*oe.PENALTY_N3),p=this.modules[b][h],m=1);l+=this.finderPenaltyTerminateAndCount(p,m,y)*oe.PENALTY_N3}for(let h=0;h<this.size-1;h++)for(let p=0;p<this.size-1;p++){const m=this.modules[h][p];m==this.modules[h][p+1]&&m==this.modules[h+1][p]&&m==this.modules[h+1][p+1]&&(l+=oe.PENALTY_N2)}let c=0;for(const h of this.modules)c=h.reduce((p,m)=>p+(m?1:0),c);const d=this.size*this.size,f=Math.ceil(Math.abs(c*20-d*10)/d)-1;return i(0<=f&&f<=9),l+=f*oe.PENALTY_N4,i(0<=l&&l<=2568888),l}getAlignmentPatternPositions(){if(this.version==1)return[];{const l=Math.floor(this.version/7)+2,c=this.version==32?26:Math.ceil((this.version*4+4)/(l*2-2))*2;let d=[6];for(let f=this.size-7;d.length<l;f-=c)d.splice(1,0,f);return d}}static getNumRawDataModules(l){if(l<oe.MIN_VERSION||l>oe.MAX_VERSION)throw new RangeError("Version number out of range");let c=(16*l+128)*l+64;if(l>=2){const d=Math.floor(l/7)+2;c-=(25*d-10)*d-55,l>=7&&(c-=36)}return i(208<=c&&c<=29648),c}static getNumDataCodewords(l,c){return Math.floor(oe.getNumRawDataModules(l)/8)-oe.ECC_CODEWORDS_PER_BLOCK[c.ordinal][l]*oe.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][l]}static reedSolomonComputeDivisor(l){if(l<1||l>255)throw new RangeError("Degree out of range");let c=[];for(let f=0;f<l-1;f++)c.push(0);c.push(1);let d=1;for(let f=0;f<l;f++){for(let h=0;h<c.length;h++)c[h]=oe.reedSolomonMultiply(c[h],d),h+1<c.length&&(c[h]^=c[h+1]);d=oe.reedSolomonMultiply(d,2)}return c}static reedSolomonComputeRemainder(l,c){let d=c.map(f=>0);for(const f of l){const h=f^d.shift();d.push(0),c.forEach((p,m)=>d[m]^=oe.reedSolomonMultiply(p,h))}return d}static reedSolomonMultiply(l,c){if(l>>>8||c>>>8)throw new RangeError("Byte out of range");let d=0;for(let f=7;f>=0;f--)d=d<<1^(d>>>7)*285,d^=(c>>>f&1)*l;return i(d>>>8==0),d}finderPenaltyCountPatterns(l){const c=l[1];i(c<=this.size*3);const d=c>0&&l[2]==c&&l[3]==c*3&&l[4]==c&&l[5]==c;return(d&&l[0]>=c*4&&l[6]>=c?1:0)+(d&&l[6]>=c*4&&l[0]>=c?1:0)}finderPenaltyTerminateAndCount(l,c,d){return l&&(this.finderPenaltyAddHistory(c,d),c=0),c+=this.size,this.finderPenaltyAddHistory(c,d),this.finderPenaltyCountPatterns(d)}finderPenaltyAddHistory(l,c){c[0]==0&&(l+=this.size),c.pop(),c.unshift(l)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;function n(a,l,c){if(l<0||l>31||a>>>l)throw new RangeError("Value out of range");for(let d=l-1;d>=0;d--)c.push(a>>>d&1)}function r(a,l){return(a>>>l&1)!=0}function i(a){if(!a)throw new Error("Assertion error")}const o=class De{constructor(l,c,d){if(this.mode=l,this.numChars=c,this.bitData=d,c<0)throw new RangeError("Invalid argument");this.bitData=d.slice()}static makeBytes(l){let c=[];for(const d of l)n(d,8,c);return new De(De.Mode.BYTE,l.length,c)}static makeNumeric(l){if(!De.isNumeric(l))throw new RangeError("String contains non-numeric characters");let c=[];for(let d=0;d<l.length;){const f=Math.min(l.length-d,3);n(parseInt(l.substring(d,d+f),10),f*3+1,c),d+=f}return new De(De.Mode.NUMERIC,l.length,c)}static makeAlphanumeric(l){if(!De.isAlphanumeric(l))throw new RangeError("String contains unencodable characters in alphanumeric mode");let c=[],d;for(d=0;d+2<=l.length;d+=2){let f=De.ALPHANUMERIC_CHARSET.indexOf(l.charAt(d))*45;f+=De.ALPHANUMERIC_CHARSET.indexOf(l.charAt(d+1)),n(f,11,c)}return d<l.length&&n(De.ALPHANUMERIC_CHARSET.indexOf(l.charAt(d)),6,c),new De(De.Mode.ALPHANUMERIC,l.length,c)}static makeSegments(l){return l==""?[]:De.isNumeric(l)?[De.makeNumeric(l)]:De.isAlphanumeric(l)?[De.makeAlphanumeric(l)]:[De.makeBytes(De.toUtf8ByteArray(l))]}static makeEci(l){let c=[];if(l<0)throw new RangeError("ECI assignment value out of range");if(l<128)n(l,8,c);else if(l<16384)n(2,2,c),n(l,14,c);else if(l<1e6)n(6,3,c),n(l,21,c);else throw new RangeError("ECI assignment value out of range");return new De(De.Mode.ECI,0,c)}static isNumeric(l){return De.NUMERIC_REGEX.test(l)}static isAlphanumeric(l){return De.ALPHANUMERIC_REGEX.test(l)}getData(){return this.bitData.slice()}static getTotalBits(l,c){let d=0;for(const f of l){const h=f.mode.numCharCountBits(c);if(f.numChars>=1<<h)return 1/0;d+=4+h+f.bitData.length}return d}static toUtf8ByteArray(l){l=encodeURI(l);let c=[];for(let d=0;d<l.length;d++)l.charAt(d)!="%"?c.push(l.charCodeAt(d)):(c.push(parseInt(l.substring(d+1,d+3),16)),d+=2);return c}};o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let s=o;e.QrSegment=o})(yi||(yi={}));(e=>{(t=>{const n=class{constructor(i,o){this.ordinal=i,this.formatBits=o}};n.LOW=new n(0,1),n.MEDIUM=new n(1,0),n.QUARTILE=new n(2,3),n.HIGH=new n(3,2),t.Ecc=n})(e.QrCode||(e.QrCode={}))})(yi||(yi={}));(e=>{(t=>{const n=class{constructor(i,o){this.modeBits=i,this.numBitsCharCount=o}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};n.NUMERIC=new n(1,[10,12,14]),n.ALPHANUMERIC=new n(2,[9,11,13]),n.BYTE=new n(4,[8,16,16]),n.KANJI=new n(8,[8,10,12]),n.ECI=new n(7,[0,0,0]),t.Mode=n})(e.QrSegment||(e.QrSegment={}))})(yi||(yi={}));var Vi=yi;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var $I={L:Vi.QrCode.Ecc.LOW,M:Vi.QrCode.Ecc.MEDIUM,Q:Vi.QrCode.Ecc.QUARTILE,H:Vi.QrCode.Ecc.HIGH},jb=128,Pb="L",Rb="#FFFFFF",Ab="#000000",Nb=!1,Db=1,HI=4,GI=0,YI=.1;function Mb(e,t=0){const n=[];return e.forEach(function(r,i){let o=null;r.forEach(function(s,a){if(!s&&o!==null){n.push(`M${o+t} ${i+t}h${a-o}v1H${o+t}z`),o=null;return}if(a===r.length-1){if(!s)return;o===null?n.push(`M${a+t},${i+t} h1v1H${a+t}z`):n.push(`M${o+t},${i+t} h${a+1-o}v1H${o+t}z`);return}s&&o===null&&(o=a)})}),n.join("")}function Lb(e,t){return e.slice().map((n,r)=>r<t.y||r>=t.y+t.h?n:n.map((i,o)=>o<t.x||o>=t.x+t.w?i:!1))}function KI(e,t,n,r){if(r==null)return null;const i=e.length+n*2,o=Math.floor(t*YI),s=i/t,a=(r.width||o)*s,l=(r.height||o)*s,c=r.x==null?e.length/2-a/2:r.x*s,d=r.y==null?e.length/2-l/2:r.y*s,f=r.opacity==null?1:r.opacity;let h=null;if(r.excavate){let m=Math.floor(c),y=Math.floor(d),b=Math.ceil(a+c-m),g=Math.ceil(l+d-y);h={x:m,y,w:b,h:g}}const p=r.crossOrigin;return{x:c,y:d,h:l,w:a,excavation:h,opacity:f,crossOrigin:p}}function qI(e,t){return t!=null?Math.max(Math.floor(t),0):e?HI:GI}function Ob({value:e,level:t,minVersion:n,includeMargin:r,marginSize:i,imageSettings:o,size:s,boostLevel:a}){let l=Z.useMemo(()=>{const m=(Array.isArray(e)?e:[e]).reduce((y,b)=>(y.push(...Vi.QrSegment.makeSegments(b)),y),[]);return Vi.QrCode.encodeSegments(m,$I[t],n,void 0,void 0,a)},[e,t,n,a]);const{cells:c,margin:d,numCells:f,calculatedImageSettings:h}=Z.useMemo(()=>{let p=l.getModules();const m=qI(r,i),y=p.length+m*2,b=KI(p,s,m,o);return{cells:p,margin:m,numCells:y,calculatedImageSettings:b}},[l,s,o,r,i]);return{qrcode:l,margin:d,cells:c,numCells:f,calculatedImageSettings:h}}var XI=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),QI=Z.forwardRef(function(t,n){const r=t,{value:i,size:o=jb,level:s=Pb,bgColor:a=Rb,fgColor:l=Ab,includeMargin:c=Nb,minVersion:d=Db,boostLevel:f,marginSize:h,imageSettings:p}=r,y=uf(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:b}=y,g=uf(y,["style"]),x=p==null?void 0:p.src,v=Z.useRef(null),k=Z.useRef(null),_=Z.useCallback($=>{v.current=$,typeof n=="function"?n($):n&&(n.current=$)},[n]),[C,T]=Z.useState(!1),{margin:I,cells:A,numCells:P,calculatedImageSettings:N}=Ob({value:i,level:s,minVersion:d,boostLevel:f,includeMargin:c,marginSize:h,imageSettings:p,size:o});Z.useEffect(()=>{if(v.current!=null){const $=v.current,H=$.getContext("2d");if(!H)return;let q=A;const re=k.current,M=N!=null&&re!==null&&re.complete&&re.naturalHeight!==0&&re.naturalWidth!==0;M&&N.excavation!=null&&(q=Lb(A,N.excavation));const U=window.devicePixelRatio||1;$.height=$.width=o*U;const S=o/P*U;H.scale(S,S),H.fillStyle=a,H.fillRect(0,0,P,P),H.fillStyle=l,XI?H.fill(new Path2D(Mb(q,I))):A.forEach(function(X,ne){X.forEach(function(E,ye){E&&H.fillRect(ye+I,ne+I,1,1)})}),N&&(H.globalAlpha=N.opacity),M&&H.drawImage(re,N.x+I,N.y+I,N.w,N.h)}}),Z.useEffect(()=>{T(!1)},[x]);const D=cf({height:o,width:o},b);let F=null;return x!=null&&(F=Z.createElement("img",{src:x,key:x,style:{display:"none"},onLoad:()=>{T(!0)},ref:k,crossOrigin:N==null?void 0:N.crossOrigin})),Z.createElement(Z.Fragment,null,Z.createElement("canvas",cf({style:D,height:o,width:o,ref:_,role:"img"},g)),F)});QI.displayName="QRCodeCanvas";var zb=Z.forwardRef(function(t,n){const r=t,{value:i,size:o=jb,level:s=Pb,bgColor:a=Rb,fgColor:l=Ab,includeMargin:c=Nb,minVersion:d=Db,boostLevel:f,title:h,marginSize:p,imageSettings:m}=r,y=uf(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:b,cells:g,numCells:x,calculatedImageSettings:v}=Ob({value:i,level:s,minVersion:d,boostLevel:f,includeMargin:c,marginSize:p,imageSettings:m,size:o});let k=g,_=null;m!=null&&v!=null&&(v.excavation!=null&&(k=Lb(g,v.excavation)),_=Z.createElement("image",{href:m.src,height:v.h,width:v.w,x:v.x+b,y:v.y+b,preserveAspectRatio:"none",opacity:v.opacity,crossOrigin:v.crossOrigin}));const C=Mb(k,b);return Z.createElement("svg",cf({height:o,width:o,viewBox:`0 0 ${x} ${x}`,ref:n,role:"img"},y),!!h&&Z.createElement("title",null,h),Z.createElement("path",{fill:a,d:`M0,0 h${x}v${x}H0z`,shapeRendering:"crispEdges"}),Z.createElement("path",{fill:l,d:C,shapeRendering:"crispEdges"}),_)});zb.displayName="QRCodeSVG";/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JI=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZI=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=e=>{const t=ZI(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},tj=w.createContext({}),nj=()=>w.useContext(tj),rj=w.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>{const{size:c=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:h="currentColor",className:p=""}=nj()??{},m=r??f?Number(n??d)*24/Number(t??c):n??d;return w.createElement("svg",{ref:l,...Tu,width:t??c??Tu.width,height:t??c??Tu.height,stroke:e??h,strokeWidth:m,className:Fb("lucide",p,i),...!o&&!ej(a)&&{"aria-hidden":"true"},...a},[...s.map(([y,b])=>w.createElement(y,b)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=(e,t)=>{const n=w.forwardRef(({className:r,...i},o)=>w.createElement(rj,{ref:o,iconNode:t,className:Fb(`lucide-${JI(e0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=e0(e),n};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],oj=Or("check",ij);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],aj=Or("copy",sj);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],cj=Or("mail",lj);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uj=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],dj=Or("send",uj);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ea=Or("sparkles",fj);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],pj=Or("trash-2",hj);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],gj=Or("user",mj);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Bb=Or("x",yj),xj=()=>u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"}),u.jsx("path",{d:"M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"})]}),vj=()=>u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"})}),bj=()=>u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),u.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),u.jsx("circle",{cx:"4",cy:"4",r:"2"})]});function wj(e){if(!e)return"Untitled";const t=e.match(/name=['"](.*?)['"]/);return t?t[1]:(e.startsWith("[")&&e.includes("("),e)}const Iu=[{value:"view",label:"View only",icon:"👁"},{value:"download",label:"View & Download",icon:"📥"},{value:"edit",label:"Edit metadata",icon:"✏️"}];function kj({value:e,onChange:t}){const[n,r]=w.useState(!1),i=Iu.find(o=>o.value===e)||Iu[0];return u.jsxs("div",{style:{position:"relative"},children:[u.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Permission"}),u.jsxs("button",{type:"button",onClick:()=>r(!n),style:{width:"100%",padding:"12px 14px",background:"var(--bg-card-hover, rgba(255,255,255,0.05))",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:"var(--font, inherit)",fontSize:14,fontWeight:500,textAlign:"left"},children:[u.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{children:i.icon}),u.jsx("span",{children:i.label})]}),u.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{transform:n?"rotate(180deg)":"none",transition:"0.2s"},children:u.jsx("path",{d:"M6 9l6 6 6-6"})})]}),n&&u.jsxs(u.Fragment,{children:[u.jsx("div",{onClick:()=>r(!1),style:{position:"fixed",inset:0,zIndex:50}}),u.jsx("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,right:0,background:"var(--bg-card, #1a1a1a)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"0 16px 48px rgba(0,0,0,0.4)",zIndex:51,overflow:"hidden",animation:"fadeIn 0.15s ease"},children:Iu.map(o=>u.jsxs("button",{onClick:()=>{t(o.value),r(!1)},style:{display:"flex",alignItems:"center",gap:10,width:"100%",padding:"13px 16px",border:"none",background:o.value===e?"rgba(59,130,246,0.12)":"transparent",color:"var(--text)",fontFamily:"var(--font, inherit)",fontSize:14,fontWeight:o.value===e?600:500,cursor:"pointer",textAlign:"left",transition:"background 0.15s"},onMouseEnter:s=>{o.value!==e&&(s.currentTarget.style.background="rgba(255,255,255,0.06)")},onMouseLeave:s=>{s.currentTarget.style.background=o.value===e?"rgba(59,130,246,0.12)":"transparent"},children:[u.jsx("span",{style:{fontSize:16},children:o.icon}),u.jsx("span",{children:o.label}),o.value===e&&u.jsx("span",{style:{marginLeft:"auto",color:"var(--accent-blue, #3b82f6)"},children:"✓"})]},o.value))})]})]})}function Sj({file:e,onShare:t,onCancel:n}){const[r,i]=w.useState("link"),[o,s]=w.useState("view"),[a,l]=w.useState(""),[c,d]=w.useState(""),[f,h]=w.useState(""),[p,m]=w.useState(""),[y,b]=w.useState(!1),[g,x]=w.useState(""),[v,k]=w.useState(!1),[_,C]=w.useState("settings"),T=async()=>{var P;b(!0);try{const N={shareType:r,permission:o,visibility:"protected",...c&&{password:c},...f&&{expiresAt:new Date(f).toISOString()},...p&&{maxViews:Number(p)},...r==="email"&&{recipientEmail:a,email:a}},D=await t(N),F=(D==null?void 0:D.shareUrl)||((P=D==null?void 0:D.data)==null?void 0:P.shareUrl);F&&x(F)}finally{b(!1)}},I=async()=>{var P;g&&(await((P=navigator.clipboard)==null?void 0:P.writeText(g)),k(!0),setTimeout(()=>k(!1),2e3))},A=P=>{if(!g)return;const N=encodeURIComponent(`Check out this file on CloudVault: ${e.name}`),D=encodeURIComponent(g),F={twitter:`https://twitter.com/intent/tweet?text=${N}&url=${D}`,whatsapp:`https://wa.me/?text=${N}%20${D}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${D}`,email:`mailto:?subject=${encodeURIComponent(`Shared File: ${e.name}`)}&body=${N}%0A${D}`};window.open(F[P],"_blank")};return u.jsx("div",{className:"share-modal-backdrop",onClick:n,children:u.jsxs("div",{onClick:P=>P.stopPropagation(),style:{background:"var(--surface)",borderRadius:24,width:"100%",maxWidth:500,overflow:"hidden",boxShadow:"0 24px 80px rgba(0,0,0,0.4)",border:"1px solid var(--border)"},children:[u.jsxs("div",{style:{padding:"24px 32px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(255,255,255,0.02)"},children:[u.jsxs("div",{style:{minWidth:0,flex:1},children:[u.jsxs("h3",{style:{margin:0,fontSize:18,fontWeight:700,color:"var(--text)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:['Share "',wj(e.name),'"']}),u.jsx("p",{style:{margin:"4px 0 0",fontSize:13,color:"var(--text-muted)"},children:"Securely distribute this file"})]}),u.jsx("button",{onClick:n,style:{background:"transparent",border:"none",color:"var(--text-muted)",cursor:"pointer",padding:8,borderRadius:50},children:u.jsx(Bb,{size:20})})]}),u.jsx("div",{style:{padding:"32px"},children:g?u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",gap:16,marginBottom:24},children:[u.jsx("button",{onClick:()=>C("settings"),style:{flex:1,padding:"10px",borderRadius:12,background:_==="settings"?"var(--accent-blue)":"transparent",color:_==="settings"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:_==="settings"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Link"}),u.jsx("button",{onClick:()=>C("qr"),style:{flex:1,padding:"10px",borderRadius:12,background:_==="qr"?"var(--accent-blue)":"transparent",color:_==="qr"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:_==="qr"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"QR Code"}),u.jsx("button",{onClick:()=>C("social"),style:{flex:1,padding:"10px",borderRadius:12,background:_==="social"?"var(--accent-blue)":"transparent",color:_==="social"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:_==="social"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Social"})]}),_==="settings"&&u.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[u.jsxs("div",{style:{padding:20,background:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",borderRadius:16,marginBottom:24},children:[u.jsx("p",{style:{margin:"0 0 12px",fontSize:13,fontWeight:700,color:"var(--accent-blue)",textTransform:"uppercase",letterSpacing:.5},children:"Share Link Created"}),u.jsx("div",{style:{fontSize:14,wordBreak:"break-all",color:"var(--text)",lineHeight:1.5,marginBottom:16},children:g}),u.jsxs("button",{onClick:I,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",padding:14,borderRadius:12,background:v?"#10b981":"var(--accent-blue)",color:"#fff",border:"none",fontWeight:700,cursor:"pointer",transition:"0.2s"},children:[v?u.jsx(oj,{size:18}):u.jsx(aj,{size:18}),v?"Copied to Clipboard":"Copy Link"]})]}),u.jsx("button",{onClick:()=>x(""),style:{width:"100%",padding:14,background:"transparent",color:"var(--text)",border:"1px solid var(--border)",borderRadius:12,fontWeight:600,cursor:"pointer"},children:"Create another share"})]}),_==="qr"&&u.jsxs("div",{style:{animation:"fadeIn 0.3s ease",textAlign:"center"},children:[u.jsx("div",{style:{display:"inline-block",background:"#fff",padding:24,borderRadius:24,marginBottom:24,boxShadow:"0 10px 40px rgba(0,0,0,0.1)"},children:u.jsx(zb,{value:g,size:200,level:"H",includeMargin:!1})}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,margin:0},children:"Scan this code to instantly open the shared file on your mobile device."})]}),_==="social"&&u.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[u.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:24,textAlign:"center"},children:"Share directly to your favorite platforms"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[u.jsxs("button",{onClick:()=>A("twitter"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(29, 161, 242, 0.1)",color:"#1da1f2",border:"1px solid rgba(29, 161, 242, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[u.jsx(vj,{})," Twitter"]}),u.jsxs("button",{onClick:()=>A("whatsapp"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(37, 211, 102, 0.1)",color:"#25d366",border:"1px solid rgba(37, 211, 102, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[u.jsx(xj,{})," WhatsApp"]}),u.jsxs("button",{onClick:()=>A("linkedin"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(0, 119, 181, 0.1)",color:"#0077b5",border:"1px solid rgba(0, 119, 181, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[u.jsx(bj,{})," LinkedIn"]}),u.jsxs("button",{onClick:()=>A("email"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(255, 255, 255, 0.05)",color:"var(--text)",border:"1px solid var(--border)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[u.jsx(cj,{size:20})," Email App"]})]})]})]}):u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[u.jsxs("div",{children:[u.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Share Method"}),u.jsxs("div",{style:{display:"flex",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,padding:4},children:[u.jsx("button",{onClick:()=>i("link"),style:{flex:1,padding:"8px",background:r==="link"?"var(--surface)":"transparent",color:r==="link"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:r==="link"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Link"}),u.jsx("button",{onClick:()=>i("email"),style:{flex:1,padding:"8px",background:r==="email"?"var(--surface)":"transparent",color:r==="email"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:r==="email"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Email"})]})]}),u.jsx(kj,{value:o,onChange:s})]}),r==="email"&&u.jsxs("div",{children:[u.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Recipient Email"}),u.jsx("input",{type:"email",value:a,onChange:P=>l(P.target.value),placeholder:"colleague@company.com",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[u.jsxs("div",{children:[u.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Password Protection"}),u.jsx("input",{type:"password",value:c,onChange:P=>d(P.target.value),placeholder:"Optional",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"},autoComplete:"new-password"})]}),u.jsxs("div",{children:[u.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"View Limit"}),u.jsx("input",{type:"number",min:"1",value:p,onChange:P=>m(P.target.value),placeholder:"Unlimited",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]})]}),u.jsxs("div",{children:[u.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Expiration Date"}),u.jsx("input",{type:"datetime-local",value:f,onChange:P=>h(P.target.value),style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),u.jsx("div",{style:{marginTop:8},children:u.jsx("button",{onClick:T,disabled:y||r==="email"&&!a,style:{width:"100%",padding:"16px",background:"var(--accent-blue)",color:"#fff",border:"none",borderRadius:14,fontWeight:700,fontSize:16,cursor:y||r==="email"&&!a?"not-allowed":"pointer",opacity:y||r==="email"&&!a?.6:1,transition:"0.2s"},children:y?"Generating Secure Link...":r==="email"?"Send Email Invitation":"Create Share Link"})})]})})]})})}function Cj({stats:e,usage:t,onBack:n}){const r=(t==null?void 0:t.breakdown)||{},i=Object.values(r).reduce((a,l)=>a+l,0)||1,o=e.storageQuota>0?Math.min(100,Math.round(e.storageUsed/e.storageQuota*100)):0,s=[{key:"images",label:"Images",color:"#22c55e"},{key:"videos",label:"Videos",color:"#2563eb"},{key:"documents",label:"Documents",color:"#f59e0b"},{key:"audio",label:"Audio",color:"#a78bfa"},{key:"other",label:"Other",color:"#94a3b8"}];return u.jsxs("div",{style:{animation:"fadeIn .3s ease"},children:[u.jsx("button",{type:"button",onClick:n,className:"page-back-btn",children:"← Back to My Drive"}),u.jsx("h2",{style:{fontWeight:900,fontSize:26,margin:"12px 0 8px",color:"var(--text)"},children:"Storage dashboard"}),u.jsxs("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:28},children:[o,"% of your storage is in use"]}),u.jsxs("div",{className:"dashboard-stat-grid",children:[u.jsx(_a,{label:"Total files",value:e.totalFiles}),u.jsx(_a,{label:"Total folders",value:e.totalFolders}),u.jsx(_a,{label:"Storage used",value:Ke(e.storageUsed)}),u.jsx(_a,{label:"Storage remaining",value:Ke(Math.max(0,e.storageQuota-e.storageUsed))})]}),u.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)",marginBottom:24},children:[u.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"Storage breakdown"}),u.jsx("div",{style:{height:14,borderRadius:99,overflow:"hidden",display:"flex",background:"var(--border)"},children:s.map(a=>{const l=(r[a.key]||0)/i*100;return l<.5?null:u.jsx("div",{title:`${a.label}: ${Ke(r[a.key]||0)}`,style:{width:`${l}%`,background:a.color,transition:"width .4s ease"}},a.key)})}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,marginTop:16},children:s.map(a=>u.jsxs("span",{style:{fontSize:13,color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{width:10,height:10,borderRadius:99,background:a.color,flexShrink:0}}),a.label,": ",Ke(r[a.key]||0)]},a.key))})]}),u.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)"},children:[u.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"File type distribution"}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:s.map(a=>{const l=r[a.key]||0,c=Math.round(l/i*100);return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[u.jsx("span",{style:{color:"var(--text-secondary)",fontWeight:600},children:a.label}),u.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:700},children:[c,"%"]})]}),u.jsx("div",{style:{height:8,background:"var(--border)",borderRadius:99,overflow:"hidden"},children:u.jsx("div",{style:{width:`${c}%`,height:"100%",background:a.color,borderRadius:99,transition:"width .4s ease"}})})]},a.key)})})]})]})}function _a({label:e,value:t}){return u.jsxs("div",{className:"dashboard-stat-card",children:[u.jsx("div",{className:"label",children:e}),u.jsx("div",{className:"value",children:t})]})}var ip={x:0,y:0,width:0,height:0,unit:"px"},Ei=(e,t,n)=>Math.min(Math.max(e,t),n),Ej=(...e)=>e.filter(t=>t&&typeof t=="string").join(" "),t0=(e,t)=>e===t||e.width===t.width&&e.height===t.height&&e.x===t.x&&e.y===t.y&&e.unit===t.unit;function _j(e,t,n,r){let i=xn(e,n,r);return e.width&&(i.height=i.width/t),e.height&&(i.width=i.height*t),i.y+i.height>r&&(i.height=r-i.y,i.width=i.height*t),i.x+i.width>n&&(i.width=n-i.x,i.height=i.width/t),e.unit==="%"?ur(i,n,r):i}function Tj(e,t,n){let r=xn(e,t,n);return r.x=(t-r.width)/2,r.y=(n-r.height)/2,e.unit==="%"?ur(r,t,n):r}function ur(e,t,n){return e.unit==="%"?{...ip,...e,unit:"%"}:{unit:"%",x:e.x?e.x/t*100:0,y:e.y?e.y/n*100:0,width:e.width?e.width/t*100:0,height:e.height?e.height/n*100:0}}function xn(e,t,n){return!e.unit||e.unit==="px"?{...ip,...e,unit:"px"}:{unit:"px",x:e.x?e.x*t/100:0,y:e.y?e.y*n/100:0,width:e.width?e.width*t/100:0,height:e.height?e.height*n/100:0}}function n0(e,t,n,r,i,o=0,s=0,a=r,l=i){let c={...e},d=Math.min(o,r),f=Math.min(s,i),h=Math.min(a,r),p=Math.min(l,i);t&&(t>1?(d=s?s*t:d,f=d/t,h=a*t):(f=o?o/t:f,d=f*t,p=l/t)),c.y<0&&(c.height=Math.max(c.height+c.y,f),c.y=0),c.x<0&&(c.width=Math.max(c.width+c.x,d),c.x=0);let m=r-(c.x+c.width);m<0&&(c.x=Math.min(c.x,r-d),c.width+=m);let y=i-(c.y+c.height);if(y<0&&(c.y=Math.min(c.y,i-f),c.height+=y),c.width<d&&((n==="sw"||n=="nw")&&(c.x-=d-c.width),c.width=d),c.height<f&&((n==="nw"||n=="ne")&&(c.y-=f-c.height),c.height=f),c.width>h&&((n==="sw"||n=="nw")&&(c.x-=h-c.width),c.width=h),c.height>p&&((n==="nw"||n=="ne")&&(c.y-=p-c.height),c.height=p),t){let b=c.width/c.height;if(b<t){let g=Math.max(c.width/t,f);(n==="nw"||n=="ne")&&(c.y-=g-c.height),c.height=g}else if(b>t){let g=Math.max(c.height*t,d);(n==="sw"||n=="nw")&&(c.x-=g-c.width),c.width=g}}return c}function Ij(e,t,n,r){let i={...e};return t==="ArrowLeft"?r==="nw"?(i.x-=n,i.y-=n,i.width+=n,i.height+=n):r==="w"?(i.x-=n,i.width+=n):r==="sw"?(i.x-=n,i.width+=n,i.height+=n):r==="ne"?(i.y+=n,i.width-=n,i.height-=n):r==="e"?i.width-=n:r==="se"&&(i.width-=n,i.height-=n):t==="ArrowRight"&&(r==="nw"?(i.x+=n,i.y+=n,i.width-=n,i.height-=n):r==="w"?(i.x+=n,i.width-=n):r==="sw"?(i.x+=n,i.width-=n,i.height-=n):r==="ne"?(i.y-=n,i.width+=n,i.height+=n):r==="e"?i.width+=n:r==="se"&&(i.width+=n,i.height+=n)),t==="ArrowUp"?r==="nw"?(i.x-=n,i.y-=n,i.width+=n,i.height+=n):r==="n"?(i.y-=n,i.height+=n):r==="ne"?(i.y-=n,i.width+=n,i.height+=n):r==="sw"?(i.x+=n,i.width-=n,i.height-=n):r==="s"?i.height-=n:r==="se"&&(i.width-=n,i.height-=n):t==="ArrowDown"&&(r==="nw"?(i.x+=n,i.y+=n,i.width-=n,i.height-=n):r==="n"?(i.y+=n,i.height-=n):r==="ne"?(i.y+=n,i.width-=n,i.height-=n):r==="sw"?(i.x-=n,i.width+=n,i.height+=n):r==="s"?i.height+=n:r==="se"&&(i.width+=n,i.height+=n)),i}var _i={capture:!0,passive:!1},jj=0,Le,Pj=(Le=class extends w.PureComponent{constructor(){super(...arguments);_e(this,"docMoveBound",!1);_e(this,"mouseDownOnCrop",!1);_e(this,"dragStarted",!1);_e(this,"evData",{startClientX:0,startClientY:0,startCropX:0,startCropY:0,clientX:0,clientY:0,isResize:!0});_e(this,"componentRef",w.createRef());_e(this,"mediaRef",w.createRef());_e(this,"resizeObserver");_e(this,"initChangeCalled",!1);_e(this,"instanceId",`rc-${jj++}`);_e(this,"state",{cropIsActive:!1,newCropIsBeingDrawn:!1});_e(this,"onCropPointerDown",n=>{let{crop:r,disabled:i}=this.props,o=this.getBox();if(!r)return;let s=xn(r,o.width,o.height);if(i)return;n.cancelable&&n.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let a=n.target.dataset.ord,l=!!a,c=n.clientX,d=n.clientY,f=s.x,h=s.y;if(a){let p=n.clientX-o.x,m=n.clientY-o.y,y=0,b=0;a==="ne"||a=="e"?(y=p-(s.x+s.width),b=m-s.y,f=s.x,h=s.y+s.height):a==="se"||a==="s"?(y=p-(s.x+s.width),b=m-(s.y+s.height),f=s.x,h=s.y):a==="sw"||a=="w"?(y=p-s.x,b=m-(s.y+s.height),f=s.x+s.width,h=s.y):(a==="nw"||a=="n")&&(y=p-s.x,b=m-s.y,f=s.x+s.width,h=s.y+s.height),c=f+o.x+y,d=h+o.y+b}this.evData={startClientX:c,startClientY:d,startCropX:f,startCropY:h,clientX:n.clientX,clientY:n.clientY,isResize:l,ord:a},this.mouseDownOnCrop=!0,this.setState({cropIsActive:!0})});_e(this,"onComponentPointerDown",n=>{let{crop:r,disabled:i,locked:o,keepSelection:s,onChange:a}=this.props,l=this.getBox();if(i||o||s&&r)return;n.cancelable&&n.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let c=n.clientX-l.x,d=n.clientY-l.y,f={unit:"px",x:c,y:d,width:0,height:0};this.evData={startClientX:n.clientX,startClientY:n.clientY,startCropX:c,startCropY:d,clientX:n.clientX,clientY:n.clientY,isResize:!0},this.mouseDownOnCrop=!0,a(xn(f,l.width,l.height),ur(f,l.width,l.height)),this.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})});_e(this,"onDocPointerMove",n=>{let{crop:r,disabled:i,onChange:o,onDragStart:s}=this.props,a=this.getBox();if(i||!r||!this.mouseDownOnCrop)return;n.cancelable&&n.preventDefault(),this.dragStarted||(this.dragStarted=!0,s&&s(n));let{evData:l}=this;l.clientX=n.clientX,l.clientY=n.clientY;let c;c=l.isResize?this.resizeCrop():this.dragCrop(),t0(r,c)||o(xn(c,a.width,a.height),ur(c,a.width,a.height))});_e(this,"onComponentKeyDown",n=>{let{crop:r,disabled:i,onChange:o,onComplete:s}=this.props;if(i)return;let a=n.key,l=!1;if(!r)return;let c=this.getBox(),d=this.makePixelCrop(c),f=(navigator.platform.match("Mac")?n.metaKey:n.ctrlKey)?Le.nudgeStepLarge:n.shiftKey?Le.nudgeStepMedium:Le.nudgeStep;if(a==="ArrowLeft"?(d.x-=f,l=!0):a==="ArrowRight"?(d.x+=f,l=!0):a==="ArrowUp"?(d.y-=f,l=!0):a==="ArrowDown"&&(d.y+=f,l=!0),l){n.cancelable&&n.preventDefault(),d.x=Ei(d.x,0,c.width-d.width),d.y=Ei(d.y,0,c.height-d.height);let h=xn(d,c.width,c.height),p=ur(d,c.width,c.height);o(h,p),s&&s(h,p)}});_e(this,"onHandlerKeyDown",(n,r)=>{let{aspect:i=0,crop:o,disabled:s,minWidth:a=0,minHeight:l=0,maxWidth:c,maxHeight:d,onChange:f,onComplete:h}=this.props,p=this.getBox();if(s||!o)return;if(n.key==="ArrowUp"||n.key==="ArrowDown"||n.key==="ArrowLeft"||n.key==="ArrowRight")n.stopPropagation(),n.preventDefault();else return;let m=(navigator.platform.match("Mac")?n.metaKey:n.ctrlKey)?Le.nudgeStepLarge:n.shiftKey?Le.nudgeStepMedium:Le.nudgeStep,y=n0(Ij(xn(o,p.width,p.height),n.key,m,r),i,r,p.width,p.height,a,l,c,d);if(!t0(o,y)){let b=ur(y,p.width,p.height);f(y,b),h&&h(y,b)}});_e(this,"onDocPointerDone",n=>{let{crop:r,disabled:i,onComplete:o,onDragEnd:s}=this.props,a=this.getBox();this.unbindDocMove(),!(i||!r)&&this.mouseDownOnCrop&&(this.mouseDownOnCrop=!1,this.dragStarted=!1,s&&s(n),o&&o(xn(r,a.width,a.height),ur(r,a.width,a.height)),this.setState({cropIsActive:!1,newCropIsBeingDrawn:!1}))});_e(this,"onDragFocus",()=>{var n;(n=this.componentRef.current)==null||n.scrollTo(0,0)})}get document(){return document}getBox(){let n=this.mediaRef.current;if(!n)return{x:0,y:0,width:0,height:0};let{x:r,y:i,width:o,height:s}=n.getBoundingClientRect();return{x:r,y:i,width:o,height:s}}componentDidUpdate(n){let{crop:r,onComplete:i}=this.props;if(i&&!n.crop&&r){let{width:o,height:s}=this.getBox();o&&s&&i(xn(r,o,s),ur(r,o,s))}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect(),this.unbindDocMove()}bindDocMove(){this.docMoveBound||(this.docMoveBound=(this.document.addEventListener("pointermove",this.onDocPointerMove,_i),this.document.addEventListener("pointerup",this.onDocPointerDone,_i),this.document.addEventListener("pointercancel",this.onDocPointerDone,_i),!0))}unbindDocMove(){this.docMoveBound&&(this.docMoveBound=(this.document.removeEventListener("pointermove",this.onDocPointerMove,_i),this.document.removeEventListener("pointerup",this.onDocPointerDone,_i),this.document.removeEventListener("pointercancel",this.onDocPointerDone,_i),!1))}getCropStyle(){let{crop:n}=this.props;if(n)return{top:`${n.y}${n.unit}`,left:`${n.x}${n.unit}`,width:`${n.width}${n.unit}`,height:`${n.height}${n.unit}`}}dragCrop(){let{evData:n}=this,r=this.getBox(),i=this.makePixelCrop(r),o=n.clientX-n.startClientX,s=n.clientY-n.startClientY;return i.x=Ei(n.startCropX+o,0,r.width-i.width),i.y=Ei(n.startCropY+s,0,r.height-i.height),i}getPointRegion(n,r,i,o){let{evData:s}=this,a=s.clientX-n.x,l=s.clientY-n.y,c;c=o&&r?r==="nw"||r==="n"||r==="ne":l<s.startCropY;let d;return d=i&&r?r==="nw"||r==="w"||r==="sw":a<s.startCropX,d?c?"nw":"sw":c?"ne":"se"}resolveMinDimensions(n,r,i=0,o=0){let s=Math.min(i,n.width),a=Math.min(o,n.height);return!r||!s&&!a?[s,a]:r>1?s?[s,s/r]:[a*r,a]:a?[a*r,a]:[s,s/r]}resizeCrop(){let{evData:n}=this,{aspect:r=0,maxWidth:i,maxHeight:o}=this.props,s=this.getBox(),[a,l]=this.resolveMinDimensions(s,r,this.props.minWidth,this.props.minHeight),c=this.makePixelCrop(s),d=this.getPointRegion(s,n.ord,a,l),f=n.ord||d,h=n.clientX-n.startClientX,p=n.clientY-n.startClientY;(a&&f==="nw"||f==="w"||f==="sw")&&(h=Math.min(h,-a)),(l&&f==="nw"||f==="n"||f==="ne")&&(p=Math.min(p,-l));let m={unit:"px",x:0,y:0,width:0,height:0};d==="ne"?(m.x=n.startCropX,m.width=h,r?(m.height=m.width/r,m.y=n.startCropY-m.height):(m.height=Math.abs(p),m.y=n.startCropY-m.height)):d==="se"?(m.x=n.startCropX,m.y=n.startCropY,m.width=h,r?m.height=m.width/r:m.height=p):d==="sw"?(m.x=n.startCropX+h,m.y=n.startCropY,m.width=Math.abs(h),r?m.height=m.width/r:m.height=p):d==="nw"&&(m.x=n.startCropX+h,m.width=Math.abs(h),r?(m.height=m.width/r,m.y=n.startCropY-m.height):(m.height=Math.abs(p),m.y=n.startCropY+p));let y=n0(m,r,d,s.width,s.height,a,l,i,o);return r||Le.xyOrds.indexOf(f)>-1?c=y:Le.xOrds.indexOf(f)>-1?(c.x=y.x,c.width=y.width):Le.yOrds.indexOf(f)>-1&&(c.y=y.y,c.height=y.height),c.x=Ei(c.x,0,s.width-c.width),c.y=Ei(c.y,0,s.height-c.height),c}renderCropSelection(){let{ariaLabels:n=Le.defaultProps.ariaLabels,disabled:r,locked:i,renderSelectionAddon:o,ruleOfThirds:s,crop:a}=this.props,l=this.getCropStyle();if(a)return Z.createElement("div",{style:l,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown,"aria-label":n.cropArea,tabIndex:0,onKeyDown:this.onComponentKeyDown,role:"group"},!r&&!i&&Z.createElement("div",{className:"ReactCrop__drag-elements",onFocus:this.onDragFocus},Z.createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),Z.createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),Z.createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),Z.createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw",tabIndex:0,"aria-label":n.nwDragHandle,onKeyDown:c=>this.onHandlerKeyDown(c,"nw"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n",tabIndex:0,"aria-label":n.nDragHandle,onKeyDown:c=>this.onHandlerKeyDown(c,"n"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne",tabIndex:0,"aria-label":n.neDragHandle,onKeyDown:c=>this.onHandlerKeyDown(c,"ne"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e",tabIndex:0,"aria-label":n.eDragHandle,onKeyDown:c=>this.onHandlerKeyDown(c,"e"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se",tabIndex:0,"aria-label":n.seDragHandle,onKeyDown:c=>this.onHandlerKeyDown(c,"se"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s",tabIndex:0,"aria-label":n.sDragHandle,onKeyDown:c=>this.onHandlerKeyDown(c,"s"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw",tabIndex:0,"aria-label":n.swDragHandle,onKeyDown:c=>this.onHandlerKeyDown(c,"sw"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w",tabIndex:0,"aria-label":n.wDragHandle,onKeyDown:c=>this.onHandlerKeyDown(c,"w"),role:"button"})),o&&Z.createElement("div",{className:"ReactCrop__selection-addon",onPointerDown:c=>c.stopPropagation()},o(this.state)),s&&Z.createElement(Z.Fragment,null,Z.createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),Z.createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}makePixelCrop(n){return xn({...ip,...this.props.crop||{}},n.width,n.height)}render(){let{aspect:n,children:r,circularCrop:i,className:o,crop:s,disabled:a,locked:l,style:c,ruleOfThirds:d}=this.props,{cropIsActive:f,newCropIsBeingDrawn:h}=this.state,p=s?this.renderCropSelection():null,m=Ej("ReactCrop",o,f&&"ReactCrop--active",a&&"ReactCrop--disabled",l&&"ReactCrop--locked",h&&"ReactCrop--new-crop",s&&n&&"ReactCrop--fixed-aspect",s&&i&&"ReactCrop--circular-crop",s&&d&&"ReactCrop--rule-of-thirds",!this.dragStarted&&s&&!s.width&&!s.height&&"ReactCrop--invisible-crop",i&&"ReactCrop--no-animate");return Z.createElement("div",{ref:this.componentRef,className:m,style:c},Z.createElement("div",{ref:this.mediaRef,className:"ReactCrop__child-wrapper",onPointerDown:this.onComponentPointerDown},r),s?Z.createElement("svg",{className:"ReactCrop__crop-mask",width:"100%",height:"100%"},Z.createElement("defs",null,Z.createElement("mask",{id:`hole-${this.instanceId}`},Z.createElement("rect",{width:"100%",height:"100%",fill:"white"}),i?Z.createElement("ellipse",{cx:`${s.x+s.width/2}${s.unit}`,cy:`${s.y+s.height/2}${s.unit}`,rx:`${s.width/2}${s.unit}`,ry:`${s.height/2}${s.unit}`,fill:"black"}):Z.createElement("rect",{x:`${s.x}${s.unit}`,y:`${s.y}${s.unit}`,width:`${s.width}${s.unit}`,height:`${s.height}${s.unit}`,fill:"black"}))),Z.createElement("rect",{fill:"black",fillOpacity:.5,width:"100%",height:"100%",mask:`url(#hole-${this.instanceId})`})):void 0,p)}},_e(Le,"xOrds",["e","w"]),_e(Le,"yOrds",["n","s"]),_e(Le,"xyOrds",["nw","ne","se","sw"]),_e(Le,"nudgeStep",1),_e(Le,"nudgeStepMedium",10),_e(Le,"nudgeStepLarge",100),_e(Le,"defaultProps",{ariaLabels:{cropArea:"Use the arrow keys to move the crop selection area",nwDragHandle:"Use the arrow keys to move the north west drag handle to change the crop selection area",nDragHandle:"Use the up and down arrow keys to move the north drag handle to change the crop selection area",neDragHandle:"Use the arrow keys to move the north east drag handle to change the crop selection area",eDragHandle:"Use the up and down arrow keys to move the east drag handle to change the crop selection area",seDragHandle:"Use the arrow keys to move the south east drag handle to change the crop selection area",sDragHandle:"Use the up and down arrow keys to move the south drag handle to change the crop selection area",swDragHandle:"Use the arrow keys to move the south west drag handle to change the crop selection area",wDragHandle:"Use the up and down arrow keys to move the west drag handle to change the crop selection area"}}),Le);function Rj(e,t,n){return Tj(_j({unit:"%",width:90},n,e,t),e,t)}function Aj({file:e,token:t,onClose:n,onUploadComplete:r}){const[i,o]=w.useState(""),s=w.useRef(null),[a,l]=w.useState(),[c,d]=w.useState(),[f,h]=w.useState(1),[p,m]=w.useState(0),[y,b]=w.useState(0),[g,x]=w.useState(0),[v,k]=w.useState(.8),[_,C]=w.useState(!0),[T,I]=w.useState(!1),[A,P]=w.useState("");w.useEffect(()=>{let F=null;return(async()=>{try{C(!0);const $=await kc(e.id,t,{disposition:"preview"});F=URL.createObjectURL($),o(F)}catch{P("Failed to load image for editing.")}finally{C(!1)}})(),()=>{F&&URL.revokeObjectURL(F)}},[e.id,t]);const N=F=>{const{width:$,height:H}=F.currentTarget;b($),x(H),l(Rj($,H,$/H))},D=async()=>{if(!(!c||!s.current)){I(!0);try{const F=document.createElement("canvas"),$=F.getContext("2d");if(!$)throw new Error("No 2d context");const H=s.current.naturalWidth/s.current.width,q=s.current.naturalHeight/s.current.height,re=window.devicePixelRatio;F.width=Math.floor(c.width*H*re),F.height=Math.floor(c.height*q*re),$.scale(re,re),$.imageSmoothingQuality="high";const M=c.x*H,U=c.y*q,S=c.width*H,X=c.height*q;$.drawImage(s.current,M,U,S,X,0,0,S,X);const ne=e.mimeType||"image/jpeg",E=ne.split("/")[1]||"jpg",ye=`edited_${e.name.replace(/\.[^/.]+$/,"")}.${E}`;F.toBlob(async Pe=>{if(!Pe){P("Canvas is empty"),I(!1);return}const de=new File([Pe],ye,{type:ne});try{const ve=new FormData;ve.append("files",de),e.folderId&&ve.append("folderId",e.folderId),await A1("/files/upload",ve,t,()=>{}),r(),n()}catch{P("Failed to save edited image"),I(!1)}},ne,parseFloat(v))}catch(F){P(F.message),I(!1)}}};return u.jsx("div",{style:{position:"fixed",inset:0,zIndex:1100,background:"rgba(0,0,0,.9)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)"},children:u.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:20,border:"1.5px solid var(--border)",width:"90vw",height:"90vh",display:"flex",flexDirection:"column",overflow:"hidden"},children:[u.jsxs("div",{style:{padding:"16px 24px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsxs("h2",{style:{fontSize:18,fontWeight:600,margin:0},children:["Edit Image: ",e.name]}),u.jsx("button",{onClick:n,style:{background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:20},children:"✕"})]}),u.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[u.jsx("div",{style:{flex:1,padding:24,display:"flex",alignItems:"center",justifyContent:"center",background:"#000",overflow:"auto"},children:_?u.jsx("p",{children:"Loading image..."}):A&&!i?u.jsx("p",{style:{color:"var(--danger)"},children:A}):u.jsx(Pj,{crop:a,onChange:(F,$)=>l($),onComplete:F=>d(F),children:u.jsx("img",{ref:s,alt:"Crop me",src:i,style:{transform:`scale(${f}) rotate(${p}deg)`,maxHeight:"70vh"},onLoad:N})})}),u.jsxs("div",{style:{width:300,borderLeft:"1px solid var(--border)",padding:24,display:"flex",flexDirection:"column",gap:24,background:"var(--bg-card)"},children:[u.jsxs("div",{children:[u.jsx("label",{style:{display:"block",fontSize:12,fontWeight:600,color:"var(--text-secondary)",marginBottom:8},children:"ZOOM"}),u.jsx("input",{type:"range",min:.1,max:3,step:.1,value:f,onChange:F=>h(Number(F.target.value)),style:{width:"100%"}})]}),u.jsxs("div",{children:[u.jsxs("label",{style:{display:"block",fontSize:12,fontWeight:600,color:"var(--text-secondary)",marginBottom:8},children:["COMPRESSION QUALITY (",(v*100).toFixed(0),"%)"]}),u.jsx("input",{type:"range",min:.1,max:1,step:.1,value:v,onChange:F=>k(Number(F.target.value)),style:{width:"100%"}}),u.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Lower quality reduces file size."})]}),A&&u.jsx("p",{style:{color:"var(--danger)",fontSize:13},children:A}),u.jsx("div",{style:{marginTop:"auto"},children:u.jsx("button",{onClick:D,disabled:T||!c,className:"btn-primary",style:{width:"100%",padding:"12px",borderRadius:8,fontWeight:600,border:"none",cursor:"pointer",opacity:T?.7:1},children:T?"Saving Copy...":"Save as New Copy"})})]})]})]})})}function Nj({code:e,expiresAt:t,fileName:n,onClose:r}){const i=new Date(t),o=Math.max(0,Math.round((i-Date.now())/36e5)),s=()=>{navigator.clipboard.writeText(e)};return u.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:1100,background:"rgba(0,0,0,.85)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(12px)",animation:"fadeIn .2s ease"},children:u.jsxs("div",{onClick:a=>a.stopPropagation(),style:{background:"var(--bg-primary)",borderRadius:24,border:"1.5px solid var(--border)",padding:"48px 40px",maxWidth:440,width:"90vw",textAlign:"center",boxShadow:"0 24px 80px rgba(0,0,0,.5)",animation:"floatIn .25s ease"},children:[u.jsx("div",{style:{width:64,height:64,borderRadius:16,background:"linear-gradient(135deg, var(--accent), var(--accent-blue))",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontSize:28},children:"🖨️"}),u.jsx("h2",{style:{margin:"0 0 8px",fontSize:20,fontWeight:800,color:"var(--text)"},children:"Print Code Generated!"}),u.jsxs("p",{style:{margin:"0 0 24px",fontSize:13,color:"var(--text-muted)",lineHeight:1.5},children:["Go to ",u.jsx("strong",{style:{color:"var(--accent)"},children:"print.cloudvault.co.in"})," on any device, enter this code, and print your file instantly."]}),u.jsx("div",{onClick:s,title:"Click to copy",style:{fontSize:56,fontWeight:900,letterSpacing:16,color:"var(--text)",background:"var(--bg-card)",border:"2px solid var(--border)",borderRadius:16,padding:"20px 32px",margin:"0 auto 16px",cursor:"pointer",userSelect:"all",fontFamily:"var(--font-mono, monospace)",transition:"border-color .2s"},children:e}),u.jsxs("p",{style:{fontSize:12,color:"var(--text-muted)",margin:"0 0 8px"},children:["Click the code to copy • Expires in ~",o,"h"]}),n&&u.jsxs("p",{style:{fontSize:12,color:"var(--text-muted)",margin:"0 0 24px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["📄 ",n]}),u.jsx("button",{type:"button",onClick:r,className:"btn-primary",style:{padding:"12px 32px",fontSize:14,fontWeight:700,borderRadius:12,width:"100%"},children:"Done"})]})})}function Dj({users:e,systemHealth:t,loading:n,onBack:r}){return u.jsxs("div",{children:[u.jsx("button",{type:"button",onClick:r,style:Mj,children:"← Back to My Cloud"}),u.jsx("h2",{style:{fontWeight:800,fontSize:22,margin:"12px 0 8px"},children:"Admin panel"}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:24},children:"User management and system overview"}),t&&u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:28},children:[u.jsx(Bo,{label:"Total users",value:t.totalUsers??"—"}),u.jsx(Bo,{label:"Active users",value:t.activeUsers??"—"}),u.jsx(Bo,{label:"Total files",value:t.totalFiles??"—"}),u.jsx(Bo,{label:"Storage used",value:t.totalStorageUsed!=null?Ke(t.totalStorageUsed):"—"}),u.jsx(Bo,{label:"Uploads today",value:t.uploadsToday??"—"})]}),u.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"Users"}),n?u.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading…"}):u.jsxs("div",{style:{overflowX:"auto",border:"1px solid var(--border)",borderRadius:12},children:[u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{background:"var(--bg-card)",textAlign:"left"},children:[u.jsx("th",{style:Vo,children:"Email"}),u.jsx("th",{style:Vo,children:"Name"}),u.jsx("th",{style:Vo,children:"Role"}),u.jsx("th",{style:Vo,children:"Storage"}),u.jsx("th",{style:Vo,children:"Status"})]})}),u.jsx("tbody",{children:e.map(i=>u.jsxs("tr",{style:{borderTop:"1px solid var(--border)"},children:[u.jsx("td",{style:Uo,children:i.email}),u.jsx("td",{style:Uo,children:i.fullName||"—"}),u.jsx("td",{style:Uo,children:i.role}),u.jsxs("td",{style:Uo,children:[Ke(i.storageUsed)," / ",Ke(i.storageQuota)]}),u.jsx("td",{style:Uo,children:i.isActive?"Active":"Inactive"})]},i.id))})]}),e.length===0&&u.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)"},children:"No users found"})]})]})}function Bo({label:e,value:t}){return u.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:14},children:[u.jsx("div",{style:{fontWeight:800,fontSize:20},children:t}),u.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:e})]})}const Vo={padding:"12px 14px",color:"var(--text-muted)",fontWeight:600},Uo={padding:"12px 14px",color:"var(--text-secondary)"},Mj={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"};function Vb({file:e,onMove:t,onCopy:n,onTags:r,onEdit:i,onDelete:o,onPrint:s,onAnnotate:a}){var p;const[l,c]=w.useState(!1),d=w.useRef(null);w.useEffect(()=>{const m=y=>{d.current&&!d.current.contains(y.target)&&c(!1)};return l&&document.addEventListener("click",m),()=>document.removeEventListener("click",m)},[l]);const h=[...((p=e==null?void 0:e.mimeType)==null?void 0:p.startsWith("image/"))?[{cue:"✂️",label:"Edit image",onClick:()=>i&&i(e)}]:[],{cue:"🖨️",label:"Send to Print",onClick:()=>s&&s(e)},{cue:"💬",label:"Annotate",onClick:()=>a&&a(e)},{cue:"#",label:"Tags",onClick:()=>r(e)},{cue:"📁",label:"Move",onClick:()=>t(e)},{cue:"📋",label:"Copy file",onClick:()=>n(e)},{cue:"🗑️",label:"Delete",onClick:()=>o(e),danger:!0}];return u.jsxs("div",{ref:d,style:{position:"relative"},children:[u.jsx("button",{type:"button",title:"More actions",onClick:m=>{m.stopPropagation(),c(y=>!y)},style:Lj,children:"..."}),l&&u.jsx("div",{style:Oj,children:h.map(m=>u.jsxs("button",{type:"button",onClick:y=>{y.stopPropagation(),c(!1),m.onClick()},style:{...zj,color:m.danger?"var(--danger)":"var(--text)"},children:[u.jsx("span",{style:{...Fj,color:m.danger?"var(--danger)":"var(--accent-blue)"},children:m.cue}),u.jsx("span",{children:m.label})]},m.label))})]})}const Lj={width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"rgba(255,255,255,.08)",color:"var(--text)",cursor:"pointer",fontSize:18,fontWeight:900,transition:"var(--transition)"},Oj={position:"absolute",right:0,top:"100%",marginTop:6,minWidth:190,background:"var(--surface-raised)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"var(--shadow)",zIndex:160,overflow:"hidden",padding:6,animation:"floatIn .16s ease"},zj={display:"flex",alignItems:"center",gap:10,width:"100%",padding:"11px 12px",border:"none",borderRadius:10,background:"transparent",textAlign:"left",cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"var(--font)"},Fj={width:34,opacity:.78,fontSize:11,fontWeight:900,textTransform:"uppercase"};function Ti({width:e="100%",height:t=16,radius:n=8,style:r={}}){return u.jsx("div",{style:{width:e,height:t,borderRadius:n,background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite",...r}})}function Bj({count:e=6,grid:t=!1}){return t?u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:12},children:Array.from({length:e}).map((n,r)=>u.jsxs("div",{style:{borderRadius:16,overflow:"hidden",border:"1px solid var(--border)"},children:[u.jsx(Ti,{height:140,radius:0}),u.jsxs("div",{style:{padding:12},children:[u.jsx(Ti,{height:12,width:"80%"}),u.jsx(Ti,{height:10,width:"50%",style:{marginTop:8}})]})]},r))}):u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Array.from({length:e}).map((n,r)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:"var(--bg-card)",borderRadius:12,border:"1px solid var(--border)"},children:[u.jsx(Ti,{width:36,height:36,radius:8}),u.jsxs("div",{style:{flex:1},children:[u.jsx(Ti,{height:14,width:"40%"}),u.jsx(Ti,{height:10,width:"25%",style:{marginTop:8}})]})]},r))})}function Vj(e,t=400){const[n,r]=w.useState(e);return w.useEffect(()=>{const i=setTimeout(()=>r(e),t);return()=>clearTimeout(i)},[e,t]),n}async function Uj(e,{createFolder:t,uploadFile:n,baseFolderId:r,onProgress:i}){const o=Array.from(e),s=new Map([["",r??null]]),a=c=>{const d=c.webkitRelativePath||c.name,f=d.split("/").filter(Boolean),h=f.pop();return{segments:f,fileName:h,rel:d}};o.sort((c,d)=>a(c).rel.localeCompare(a(d).rel));let l=0;for(const c of o){const{segments:d}=a(c);let f=r??null,h="";for(const p of d){if(h=h?`${h}/${p}`:p,!s.has(h)){const m=await t(p,f);s.set(h,m.id)}f=s.get(h)}await n(c,f),l+=1,i==null||i(Math.round(l/o.length*100))}}function Wj(e){const t=new Map(e.map(r=>[r.id,{...r,children:[]}])),n=[];for(const r of e){const i=t.get(r.id);r.parentId&&t.has(r.parentId)?t.get(r.parentId).children.push(i):n.push(i)}return n}const Ub=w.createContext(null);function $j({token:e,children:t}){const[n,r]=w.useState(null),[i,o]=w.useState([]),[s,a]=w.useState(0),[l,c]=w.useState(!0),d=w.useCallback(async()=>{if(e)try{const m=await it("/account",{},e);r(m)}catch{const m=await it("/users/me",{},e).catch(()=>null);m&&r(m)}},[e]),f=w.useCallback(async()=>{},[]),h=w.useCallback(async()=>{c(!0),await Promise.all([d(),f()]),c(!1)},[d,f]);w.useEffect(()=>{h()},[e]);const p=async()=>{};return u.jsx(Ub.Provider,{value:{account:n,loading:l,notifications:i,unreadCount:s,refreshAccount:d,refreshNotifications:f,refreshAll:h,markAllRead:p},children:t})}function Wb(){const e=w.useContext(Ub);if(!e)throw new Error("useAccount must be used within AccountProvider");return e}function Hj({account:e,onNavigate:t,onSignOut:n}){var c;const[r,i]=w.useState(!1),o=w.useRef(null);w.useEffect(()=>{const d=f=>{o.current&&!o.current.contains(f.target)&&i(!1)};return r&&document.addEventListener("click",d),()=>document.removeEventListener("click",d)},[r]);const s=[{id:"profile",label:"My Profile"},{id:"settings",label:"Settings"},{id:"security",label:"Security"},{id:"dashboard",label:"Storage"},{id:"billing",label:"Billing"},{id:"billing",label:"Upgrade Plan",accent:!0},{id:"help",label:"Help Center"}],a=e==null?void 0:e.avatarUrl,l=((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"?").slice(0,1).toUpperCase();return u.jsxs("div",{ref:o,style:{position:"relative"},children:[u.jsxs("button",{type:"button",onClick:()=>i(d=>!d),style:{display:"flex",alignItems:"center",gap:8,padding:"4px 10px 4px 4px",borderRadius:999,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontFamily:"var(--font)"},children:[u.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:a?`url(${a}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:14},children:!a&&l}),u.jsx("span",{style:{color:"var(--text-secondary)",fontSize:13,fontWeight:600},children:"▾"})]}),r&&u.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",minWidth:200,background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300,overflow:"hidden",animation:"fadeIn .15s ease"},children:[u.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)"},children:[u.jsx("div",{style:{fontWeight:700,fontSize:14,color:"var(--text)"},children:(e==null?void 0:e.fullName)||"Account"}),u.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:e==null?void 0:e.email}),u.jsxs("div",{style:{fontSize:11,color:"var(--accent)",marginTop:6,fontWeight:600,textTransform:"capitalize"},children:[((c=e==null?void 0:e.planDetails)==null?void 0:c.name)||(e==null?void 0:e.plan)," plan"]})]}),s.map((d,f)=>u.jsx("button",{type:"button",onClick:()=>{i(!1),t(d.id==="dashboard"?"dashboard":d.id)},style:{display:"block",width:"100%",padding:"11px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,fontWeight:d.accent?700:500,color:d.accent?"var(--accent)":"var(--text-secondary)"},children:d.label},`${d.id}-${f}`)),u.jsx("div",{style:{borderTop:"1px solid var(--border)"},children:u.jsx("button",{type:"button",onClick:()=>{i(!1),n()},style:{display:"block",width:"100%",padding:"12px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,color:"var(--danger)",fontWeight:600},children:"Sign Out"})})]})]})}function Gj({account:e,onUpgrade:t}){if(!(e!=null&&e.onTrial))return null;const n=e.trialDaysLeft??0;return u.jsxs("div",{style:{background:"linear-gradient(90deg, rgba(240,22,58,.12), rgba(64,144,255,.1))",borderBottom:"1px solid var(--border)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[u.jsxs("span",{style:{color:"var(--text-secondary)"},children:[u.jsx("strong",{style:{color:"var(--text)"},children:"Pro trial"})," — ",n," day",n!==1?"s":""," left · ",Ke(e.storageUsed)," used"]}),u.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Upgrade"})]})}function Yj({account:e,onOpenSettings:t}){return!(e!=null&&e.emailVerificationRequired)||(e==null?void 0:e.isVerified)!==!1?null:u.jsxs("div",{style:{background:"rgba(240, 22, 58, 0.12)",borderBottom:"1px solid rgba(240, 22, 58, 0.35)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[u.jsxs("span",{style:{color:"var(--text-secondary)"},children:[u.jsx("strong",{style:{color:"var(--danger)"},children:"Email not verified"})," — ","Uploads are disabled until you verify. Check your inbox or resend the link."]}),u.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Verify email"})]})}function r0({email:e,token:t,onVerified:n,onBack:r}){const[i,o]=w.useState(e||""),[s,a]=w.useState(!!t),[l,c]=w.useState(""),[d,f]=w.useState(""),[h,p]=w.useState(!1);w.useEffect(()=>{t&&m(t)},[t]);const m=async b=>{a(!0),c("");try{const g=await fetch(`${Jt}/auth/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:b})}),x=await g.json();if(!g.ok||!x.success)throw new Error(x.message||"Verification failed");p(!0),setTimeout(()=>n==null?void 0:n(),1200)}catch{c("This verification link is invalid or expired. Request a fresh email and try again.")}finally{a(!1)}},y=async()=>{if(!i){c("Enter your email address first.");return}a(!0),c(""),f("");try{const b=await fetch(`${Jt}/auth/resend-verification`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}),g=await b.json();if(!b.ok||!g.success)throw new Error(g.message||"Failed to send verification email");f("A fresh verification email is on its way. Open the link in your inbox to continue.")}catch{c("Something went wrong. Please try again.")}finally{a(!1)}};return u.jsxs("div",{className:"auth-screen",children:[u.jsx("style",{children:Ji}),u.jsxs("div",{className:"auth-card",children:[u.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),u.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:h?"Email verified":t?"Verifying your email":"Check your inbox"}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:h?"Your account is ready. You can now log in with your email and password.":t?"Hold tight while we confirm your CloudVault account.":"Open the verification link we sent after registration. You only need to do this once."}),!t&&!h&&u.jsxs(u.Fragment,{children:[u.jsxs("label",{style:{display:"block",marginBottom:14},children:[u.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:"Email address"}),u.jsx("input",{className:"input-field",type:"email",value:i,onChange:b=>o(b.target.value),placeholder:"you@company.com",style:{marginTop:6}})]}),u.jsx("button",{type:"button",onClick:y,disabled:s,className:"btn-primary",style:{width:"100%"},children:s?"Sending...":"Resend verification email"})]}),s&&u.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,marginTop:14},children:"Working on it..."}),l&&u.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginTop:14},children:l}),d&&u.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,lineHeight:1.5,marginTop:14},children:d}),u.jsx("button",{type:"button",onClick:r,className:"btn-secondary",style:{width:"100%",marginTop:14},children:"Back to login"})]})]})}function Kj({notifications:e,unreadCount:t,onMarkAllRead:n}){const[r,i]=w.useState(!1),o=w.useRef(null);return w.useEffect(()=>{const s=a=>{o.current&&!o.current.contains(a.target)&&i(!1)};return r&&document.addEventListener("click",s),()=>document.removeEventListener("click",s)},[r]),u.jsxs("div",{ref:o,style:{position:"relative"},children:[u.jsxs("button",{type:"button",onClick:()=>i(s=>!s),style:{width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontSize:18,position:"relative"},title:"Notifications",children:["🔔",t>0&&u.jsx("span",{style:{position:"absolute",top:4,right:4,minWidth:16,height:16,borderRadius:99,background:"var(--accent)",color:"#fff",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"},children:t>9?"9+":t})]}),r&&u.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",width:320,maxHeight:400,overflow:"auto",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300},children:[u.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{style:{fontWeight:700,fontSize:14},children:"Notifications"}),t>0&&u.jsx("button",{type:"button",onClick:n,style:qj,children:"Mark all read"})]}),e.length===0?u.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)",fontSize:13},children:"Nothing new"}):e.map(s=>u.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",background:s.read?"transparent":"rgba(240,22,58,.06)"},children:[u.jsx("div",{style:{fontWeight:600,fontSize:13},children:s.title}),s.body&&u.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:s.body}),u.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:6},children:bo(s.createdAt)})]},s.id))]})]})}const qj={background:"none",border:"none",color:"var(--accent-blue)",fontSize:12,cursor:"pointer",fontWeight:600};function i0({token:e,onBack:t,onSuccess:n}){const[r,i]=w.useState(""),[o,s]=w.useState(""),[a,l]=w.useState(!1),[c,d]=w.useState(""),[f,h]=w.useState(!1),p=async m=>{if(m.preventDefault(),d(""),!e)return d("This reset link is invalid. Please request a new one.");if(r!==o)return d("Passwords do not match.");if(r.length<8)return d("Password must be at least 8 characters.");if(!/[a-z]/.test(r)||!/[A-Z]/.test(r)||!/\d/.test(r))return d("Use at least one uppercase letter, one lowercase letter, and one number.");l(!0);try{const y=await fetch(`${Jt}/auth/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,newPassword:r})}),b=await y.json();if(!y.ok||!b.success)throw new Error(b.message||"Failed to reset password");h(!0),setTimeout(()=>{var g;return(g=n||t)==null?void 0:g()},1400)}catch{d("Something went wrong. Please try again.")}finally{l(!1)}};return u.jsxs("div",{className:"auth-screen",children:[u.jsx("style",{children:Ji}),u.jsxs("div",{className:"auth-card",children:[u.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),u.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:f?"Password updated":"Set a new password"}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:f?"You can now log in with your new password.":"Choose a strong password to secure your CloudVault account."}),!f&&u.jsxs("form",{onSubmit:p,children:[u.jsx(o0,{label:"New password",value:r,onChange:i}),u.jsx(o0,{label:"Confirm password",value:o,onChange:s}),c&&u.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginBottom:14},children:c}),u.jsx("button",{type:"submit",disabled:a,className:"btn-primary",style:{width:"100%"},children:a?"Updating...":"Update password"})]}),f&&u.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{width:"100%"},children:"Continue to login"}),u.jsx("button",{type:"button",onClick:t,className:"btn-secondary",style:{width:"100%",marginTop:12},children:"Back to login"})]})]})}function o0({label:e,value:t,onChange:n}){return u.jsxs("label",{style:{display:"block",marginBottom:14},children:[u.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:e}),u.jsx("input",{className:"input-field",type:"password",value:t,onChange:r=>n(r.target.value),required:!0,minLength:8,style:{marginTop:6}})]})}const s0={drive:u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[u.jsx("path",{d:"M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V8H4V6.5Z",stroke:"currentColor",strokeWidth:"1.8"}),u.jsx("path",{d:"M4 8h16v9.5A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5V8Z",stroke:"currentColor",strokeWidth:"1.8"})]}),recent:u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[u.jsx("circle",{cx:"12",cy:"12",r:"8.5",stroke:"currentColor",strokeWidth:"1.8"}),u.jsx("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),starred:u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:u.jsx("path",{d:"M12 4.5l2.2 4.5 4.9.7-3.5 3.4.8 4.9L12 15.8l-4.4 2.2.8-4.9-3.5-3.4 4.9-.7L12 4.5Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"})}),shared:u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[u.jsx("circle",{cx:"18",cy:"5",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),u.jsx("circle",{cx:"6",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),u.jsx("circle",{cx:"18",cy:"19",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),u.jsx("path",{d:"M8.3 10.8l7.4-4.1M8.3 13.2l7.4 4.1",stroke:"currentColor",strokeWidth:"1.8"})]}),usage:u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:u.jsx("path",{d:"M5 19V10M10 19V5M15 19v-7M20 19V8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}),trash:u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[u.jsx("path",{d:"M9 4h6M5 7h14l-1.2 12.5a1.5 1.5 0 0 1-1.5 1.5H7.7a1.5 1.5 0 0 1-1.5-1.5L5 7Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),u.jsx("path",{d:"M10 10v6M14 10v6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),activity:u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[u.jsx("path",{d:"M6 5h12v14H6V5Z",stroke:"currentColor",strokeWidth:"1.8"}),u.jsx("path",{d:"M9 9h6M9 12h4M9 15h5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),admin:u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[u.jsx("path",{d:"M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),u.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"})]})};function Xj({name:e,active:t=!1}){return u.jsx("span",{className:`nav-icon${t?" active":""}`,"aria-hidden":"true",children:s0[e]||s0.drive})}const Ja={display:"flex",flexDirection:"column",minHeight:"100vh",background:"var(--bg-primary)",color:"var(--text)",fontFamily:"var(--font)",position:"relative",overflow:"hidden"},Ui=(e,t,n,r=420)=>({position:"fixed",top:e,left:t,width:r,height:r,borderRadius:"50%",background:n,filter:"blur(140px)",opacity:.12,pointerEvents:"none",zIndex:0}),Za={padding:"16px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid var(--border)",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",position:"relative",zIndex:10},ju={width:34,height:34,background:"var(--gradient)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,boxShadow:"0 4px 16px rgba(217,0,7,0.25)"},el={background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:20,padding:"48px 40px 40px",maxWidth:480,width:"100%",textAlign:"center",boxShadow:"0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset",position:"relative",zIndex:5,animation:"floatIn 0.5s ease-out both"},Pu={width:80,height:80,borderRadius:20,background:"var(--gradient-soft)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:38,margin:"0 auto 24px"},Ru={margin:0,fontSize:22,fontWeight:700,letterSpacing:"-0.3px",lineHeight:1.35,wordBreak:"break-word",color:"var(--text)"},Au={margin:"8px 0 0",color:"var(--text-muted)",fontSize:14,fontWeight:500,letterSpacing:"0.2px"},Gl={width:"100%",height:1,background:"var(--border)",margin:"24px 0",border:"none"},Qj={display:"flex",alignItems:"center",gap:12,padding:"14px 16px",background:"var(--bg-card-hover)",borderRadius:14,border:"1px solid var(--border)"},Jj={width:40,height:40,borderRadius:"50%",objectFit:"cover",flexShrink:0},Zj={width:40,height:40,borderRadius:"50%",background:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:16,color:"#fff",flexShrink:0},e4={textAlign:"left",flex:1,minWidth:0},t4={fontSize:14,fontWeight:600,color:"var(--text)",lineHeight:1.3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n4={fontSize:12,color:"var(--text-muted)",fontWeight:500,lineHeight:1.4,marginTop:2},r4=(e,t)=>({display:"inline-flex",alignItems:"center",gap:5,padding:"5px 12px",borderRadius:999,fontSize:12,fontWeight:600,background:e,color:t,letterSpacing:"0.3px"}),$b={flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"14px 20px",borderRadius:12,fontWeight:600,fontSize:15,fontFamily:"var(--font)",cursor:"pointer",transition:"all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",border:"none",outline:"none",letterSpacing:"-0.2px"},a0={...$b,background:"var(--bg-card-hover)",color:"var(--text)",border:"1px solid var(--border)"},l0={...$b,background:"var(--gradient)",color:"#fff",boxShadow:"0 8px 24px rgba(217,0,7,0.25)"},i4={opacity:.6,cursor:"not-allowed"},o4={margin:"20px 0 0",fontSize:12,color:"var(--text-muted)",fontWeight:500,display:"flex",alignItems:"center",justifyContent:"center",gap:6},s4={padding:"16px 28px",borderTop:"1px solid var(--border)",textAlign:"center",fontSize:12,color:"var(--text-muted)",fontWeight:500,background:"rgba(0,0,0,0.3)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",position:"relative",zIndex:10};function a4(){const e={background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.8s ease infinite",borderRadius:10};return u.jsxs("div",{style:Ja,children:[u.jsx("div",{style:Ui("-120px","-100px","rgba(217,0,7,0.3)")}),u.jsx("div",{style:Ui("60%","70%","rgba(59,130,246,0.2)",350)}),u.jsxs("header",{style:Za,children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[u.jsx("div",{style:{...e,width:34,height:34,borderRadius:10}}),u.jsx("div",{style:{...e,width:100,height:18}})]}),u.jsx("div",{style:{...e,width:130,height:16}})]}),u.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:u.jsxs("div",{style:{...el,animation:"none"},children:[u.jsx("div",{style:{...e,width:80,height:80,borderRadius:20,margin:"0 auto 24px"}}),u.jsx("div",{style:{...e,width:"70%",height:22,margin:"0 auto 12px"}}),u.jsx("div",{style:{...e,width:"45%",height:14,margin:"0 auto 24px"}}),u.jsx("div",{style:Gl}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",background:"var(--bg-card-hover)",borderRadius:14},children:[u.jsx("div",{style:{...e,width:40,height:40,borderRadius:"50%"}}),u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{...e,width:"60%",height:14,marginBottom:6}}),u.jsx("div",{style:{...e,width:"80%",height:12}})]})]}),u.jsx("div",{style:{...Gl,margin:"24px 0 20px"}}),u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx("div",{style:{...e,flex:1,height:48,borderRadius:12}}),u.jsx("div",{style:{...e,flex:1,height:48,borderRadius:12}})]})]})})]})}function l4({avatarUrl:e,name:t}){const[n,r]=w.useState(!1),i=(t||"U").charAt(0).toUpperCase();return e&&!n?u.jsx("img",{src:e,alt:t||"User",style:Jj,onError:()=>r(!0)}):u.jsx("div",{style:Zj,children:i})}function c4({token:e}){const[t,n]=w.useState(!0),[r,i]=w.useState(null),[o,s]=w.useState(null),[a,l]=w.useState(""),[c,d]=w.useState(!1),[f,h]=w.useState(!1),[p,m]=w.useState(!1),[y,b]=w.useState(!1),[g,x]=w.useState(!1),v=async(D="")=>{n(!0),s(null);try{const F=`/share/${e}${D?`?password=${encodeURIComponent(D)}`:""}`,$=await it(F,{},null);i($),d(!1)}catch(F){const $=(F.message||"").toLowerCase();$.includes("password required")||$.includes("invalid password")||$.includes("forbidden")||$.includes("session expired")?(d(!0),D&&s("Invalid password")):s(F.message||"Failed to load shared link.")}finally{n(!1)}};w.useEffect(()=>{v()},[e]);const k=async()=>{if(!(!r||f)){h(!0);try{const D=`/share/${e}/download${a?`?password=${encodeURIComponent(a)}`:""}`,F=await fetch(`${Jt}${D}`);if(!F.ok)throw new Error("Download failed");const $=await F.blob();R1($,r.file.name)}catch(D){s(D.message)}finally{h(!1)}}},_=async()=>{const D=`/share/${e}/preview${a?`?password=${encodeURIComponent(a)}`:""}`,F=await fetch(`${Jt}${D}`);if(!F.ok)throw new Error("Failed to load preview");return await F.blob()};if(t)return u.jsx(a4,{});if(c&&!r)return u.jsxs("div",{style:Ja,children:[u.jsx("div",{style:Ui("-120px","-100px","rgba(217,0,7,0.3)")}),u.jsx("header",{style:Za,children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[u.jsx("div",{style:ju,children:"☁️"}),u.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]})}),u.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:u.jsxs("div",{style:{...el,maxWidth:420},children:[u.jsx("div",{style:{...Pu,background:"rgba(217,0,7,0.1)",border:"1px solid rgba(217,0,7,0.2)"},children:"🔒"}),u.jsx("h2",{style:{...Ru,fontSize:22,marginBottom:8},children:"Password Protected"}),u.jsx("p",{style:{...Au,marginBottom:28},children:"Enter the password to access this shared file."}),u.jsxs("form",{onSubmit:D=>{D.preventDefault(),v(a)},children:[u.jsx("input",{type:"password",placeholder:"Enter password",value:a,onChange:D=>l(D.target.value),autoFocus:!0,style:{width:"100%",padding:"14px 18px",borderRadius:12,border:"1px solid var(--border)",background:"var(--bg-card-hover)",color:"var(--text)",fontFamily:"var(--font)",fontSize:15,fontWeight:500,outline:"none",transition:"border-color 0.2s",marginBottom:16,boxSizing:"border-box"},onFocus:D=>D.target.style.borderColor="var(--accent)",onBlur:D=>D.target.style.borderColor="var(--border)"}),o&&u.jsx("p",{style:{color:"var(--danger)",margin:"0 0 16px",fontSize:13,fontWeight:600},children:o}),u.jsx("button",{type:"submit",style:{...l0,width:"100%",flex:"none"},children:"Unlock File"})]})]})})]});if(o&&!r)return u.jsxs("div",{style:Ja,children:[u.jsx("div",{style:Ui("-120px","-100px","rgba(217,0,7,0.3)")}),u.jsx("header",{style:Za,children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[u.jsx("div",{style:ju,children:"☁️"}),u.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]})}),u.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:u.jsxs("div",{style:{...el,maxWidth:420},children:[u.jsx("div",{style:{...Pu,background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.2)"},children:"⚠️"}),u.jsx("h2",{style:{...Ru,fontSize:22,marginBottom:8},children:"Link Unavailable"}),u.jsx("p",{style:{...Au,marginBottom:0},children:o})]})})]});const{file:C,sharedBy:T,permission:I,expiresAt:A}=r,P=$h(C.mimeType),N=I==="download"||I==="edit";return u.jsxs("div",{style:Ja,children:[u.jsx("div",{style:Ui("-120px","-100px","rgba(217,0,7,0.3)")}),u.jsx("div",{style:Ui("60%","70%","rgba(59,130,246,0.2)",350)}),u.jsxs("header",{style:Za,children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[u.jsx("div",{style:ju,children:"☁️"}),u.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--text-muted)",fontSize:13,fontWeight:500},children:[u.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,color:"var(--accent)"},children:[u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),u.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),"Encrypted"]}),u.jsx("span",{children:"•"}),u.jsx("span",{children:"Shared securely"})]})]}),u.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24,position:"relative",zIndex:5},children:u.jsxs("div",{style:el,children:[u.jsx("div",{style:Pu,children:Gs(C.mimeType)}),u.jsx("h1",{style:Ru,children:C.name}),u.jsxs("p",{style:Au,children:[Ke(C.size),u.jsx("span",{style:{margin:"0 8px",opacity:.4},children:"•"}),C.mimeType||"Unknown type"]}),u.jsx("div",{style:Gl}),u.jsxs("div",{style:Qj,children:[u.jsx(l4,{avatarUrl:T==null?void 0:T.avatarUrl,name:T==null?void 0:T.fullName}),u.jsxs("div",{style:e4,children:[u.jsx("div",{style:t4,children:(T==null?void 0:T.fullName)||"A user"}),u.jsx("div",{style:n4,children:"shared this file with you"})]}),u.jsx("div",{style:r4(N?"rgba(34,197,94,0.12)":"rgba(59,130,246,0.12)",N?"#22c55e":"#3b82f6"),children:N?"📥 Download":"👁 View only"})]}),u.jsx("div",{style:{...Gl,margin:"24px 0 20px"}}),u.jsxs("div",{style:{display:"flex",gap:12},children:[P&&u.jsxs("button",{onClick:()=>m(!0),onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),style:{...a0,transform:y?"translateY(-2px)":"none",borderColor:y?"var(--border-hover)":"var(--border)",boxShadow:y?"0 8px 24px rgba(0,0,0,0.2)":"none"},children:[u.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),u.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Preview"]}),N&&u.jsxs("button",{onClick:k,disabled:f,onMouseEnter:()=>!f&&x(!0),onMouseLeave:()=>x(!1),style:{...l0,...f?i4:{},transform:g&&!f?"translateY(-2px)":"none",boxShadow:g&&!f?"0 12px 32px rgba(217,0,7,0.35)":"0 8px 24px rgba(217,0,7,0.25)"},children:[u.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"7 10 12 15 17 10"}),u.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),f?"Downloading…":"Download"]}),!N&&!P&&u.jsx("div",{style:{...a0,cursor:"default",justifyContent:"center",opacity:.6},children:"👁 View Only"})]}),A&&u.jsxs("div",{style:o4,children:[u.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polyline",{points:"12 6 12 12 16 14"})]}),"Expires ",new Date(A).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]})]})}),u.jsxs("footer",{style:s4,children:["Powered by ",u.jsx("strong",{style:{color:"var(--text)",fontWeight:700},children:"CloudVault"})," · End-to-end secure file sharing"]}),p&&u.jsx(Sb,{file:C,token:null,onClose:()=>m(!1),customFetchBlob:_})]})}const op=w.createContext({});function sp(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const u4=typeof window<"u",Yl=u4?w.useLayoutEffect:w.useEffect,Tc=w.createContext(null);function ap(e,t){e.indexOf(t)===-1&&e.push(t)}function Kl(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Pn=(e,t,n)=>n>t?t:n<e?e:n;let Ic=()=>{};const Rr={},Hb=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Gb=e=>typeof e=="object"&&e!==null,Yb=e=>/^0[^.\s]+$/u.test(e);function Kb(e){let t;return()=>(t===void 0&&(t=e()),t)}const qt=e=>e,Js=(...e)=>e.reduce((t,n)=>r=>n(t(r))),Ls=(e,t,n)=>{const r=t-e;return r?(n-e)/r:1};class lp{constructor(){this.subscriptions=[]}add(t){return ap(this.subscriptions,t),()=>Kl(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ot=e=>e*1e3,Yt=e=>e/1e3,qb=(e,t)=>t?e*(1e3/t):0,Xb=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,d4=1e-7,f4=12;function h4(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=Xb(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>d4&&++a<f4);return s}function Zs(e,t,n,r){if(e===t&&n===r)return qt;const i=o=>h4(o,0,1,e,n);return o=>o===0||o===1?o:Xb(i(o),t,r)}const Qb=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Jb=e=>t=>1-e(1-t),Zb=Zs(.33,1.53,.69,.99),cp=Jb(Zb),ew=Qb(cp),tw=e=>e>=1?1:(e*=2)<1?.5*cp(e):.5*(2-Math.pow(2,-10*(e-1))),up=e=>1-Math.sin(Math.acos(e)),nw=Jb(up),rw=Qb(up),p4=Zs(.42,0,1,1),m4=Zs(0,0,.58,1),iw=Zs(.42,0,.58,1),g4=e=>Array.isArray(e)&&typeof e[0]!="number",ow=e=>Array.isArray(e)&&typeof e[0]=="number",y4={linear:qt,easeIn:p4,easeInOut:iw,easeOut:m4,circIn:up,circInOut:rw,circOut:nw,backIn:cp,backInOut:ew,backOut:Zb,anticipate:tw},x4=e=>typeof e=="string",c0=e=>{if(ow(e)){Ic(e.length===4);const[t,n,r,i]=e;return Zs(t,n,r,i)}else if(x4(e))return y4[e];return e},Ta=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function v4(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(c){o.has(c)&&(l.schedule(c),e()),c(s)}const l={schedule:(c,d=!1,f=!1)=>{const p=f&&r?t:n;return d&&o.add(c),p.add(c),c},cancel:c=>{n.delete(c),o.delete(c)},process:c=>{if(s=c,r){i=!0;return}r=!0;const d=t;t=n,n=d,t.forEach(a),t.clear(),r=!1,i&&(i=!1,l.process(c))}};return l}const b4=40;function sw(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Ta.reduce((v,k)=>(v[k]=v4(o),v),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:d,update:f,preRender:h,render:p,postRender:m}=s,y=()=>{const v=Rr.useManualTiming,k=v?i.timestamp:performance.now();n=!1,v||(i.delta=r?1e3/60:Math.max(Math.min(k-i.timestamp,b4),1)),i.timestamp=k,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),d.process(i),f.process(i),h.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(y))},b=()=>{n=!0,r=!0,i.isProcessing||e(y)};return{schedule:Ta.reduce((v,k)=>{const _=s[k];return v[k]=(C,T=!1,I=!1)=>(n||b(),_.schedule(C,T,I)),v},{}),cancel:v=>{for(let k=0;k<Ta.length;k++)s[Ta[k]].cancel(v)},state:i,steps:s}}const{schedule:Se,cancel:Ar,state:Qe,steps:Nu}=sw(typeof requestAnimationFrame<"u"?requestAnimationFrame:qt,!0);let tl;function w4(){tl=void 0}const ft={now:()=>(tl===void 0&&ft.set(Qe.isProcessing||Rr.useManualTiming?Qe.timestamp:performance.now()),tl),set:e=>{tl=e,queueMicrotask(w4)}},aw=e=>t=>typeof t=="string"&&t.startsWith(e),lw=aw("--"),k4=aw("var(--"),dp=e=>k4(e)?S4.test(e.split("/*")[0].trim()):!1,S4=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function u0(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Co={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Os={...Co,transform:e=>Pn(0,1,e)},Ia={...Co,default:1},cs=e=>Math.round(e*1e5)/1e5,fp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function C4(e){return e==null}const E4=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,hp=(e,t)=>n=>!!(typeof n=="string"&&E4.test(n)&&n.startsWith(e)||t&&!C4(n)&&Object.prototype.hasOwnProperty.call(n,t)),cw=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(fp);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},_4=e=>Pn(0,255,e),Du={...Co,transform:e=>Math.round(_4(e))},ii={test:hp("rgb","red"),parse:cw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Du.transform(e)+", "+Du.transform(t)+", "+Du.transform(n)+", "+cs(Os.transform(r))+")"};function T4(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const df={test:hp("#"),parse:T4,transform:ii.transform},ea=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Mn=ea("deg"),In=ea("%"),Y=ea("px"),I4=ea("vh"),j4=ea("vw"),d0={...In,parse:e=>In.parse(e)/100,transform:e=>In.transform(e*100)},Wi={test:hp("hsl","hue"),parse:cw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+In.transform(cs(t))+", "+In.transform(cs(n))+", "+cs(Os.transform(r))+")"},Ve={test:e=>ii.test(e)||df.test(e)||Wi.test(e),parse:e=>ii.test(e)?ii.parse(e):Wi.test(e)?Wi.parse(e):df.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ii.transform(e):Wi.transform(e),getAnimatableNone:e=>{const t=Ve.parse(e);return t.alpha=0,Ve.transform(t)}},P4=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function R4(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(fp))==null?void 0:t.length)||0)+(((n=e.match(P4))==null?void 0:n.length)||0)>0}const uw="number",dw="color",A4="var",N4="var(",f0="${}",D4=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function mo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(D4,l=>(Ve.test(l)?(r.color.push(o),i.push(dw),n.push(Ve.parse(l))):l.startsWith(N4)?(r.var.push(o),i.push(A4),n.push(l)):(r.number.push(o),i.push(uw),n.push(parseFloat(l))),++o,f0)).split(f0);return{values:n,split:a,indexes:r,types:i}}function M4(e){return mo(e).values}function fw({split:e,types:t}){const n=e.length;return r=>{let i="";for(let o=0;o<n;o++)if(i+=e[o],r[o]!==void 0){const s=t[o];s===uw?i+=cs(r[o]):s===dw?i+=Ve.transform(r[o]):i+=r[o]}return i}}function L4(e){return fw(mo(e))}const O4=e=>typeof e=="number"?0:Ve.test(e)?Ve.getAnimatableNone(e):e,z4=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:O4(e);function F4(e){const t=mo(e);return fw(t)(t.values.map((r,i)=>z4(r,t.split[i])))}const hn={test:R4,parse:M4,createTransformer:L4,getAnimatableNone:F4};function Mu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function B4({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Mu(l,a,e+1/3),o=Mu(l,a,e),s=Mu(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function ql(e,t){return n=>n>0?t:e}const ke=(e,t,n)=>e+(t-e)*n,Lu=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},V4=[df,ii,Wi],U4=e=>V4.find(t=>t.test(e));function h0(e){const t=U4(e);if(!t)return!1;let n=t.parse(e);return t===Wi&&(n=B4(n)),n}const p0=(e,t)=>{const n=h0(e),r=h0(t);if(!n||!r)return ql(e,t);const i={...n};return o=>(i.red=Lu(n.red,r.red,o),i.green=Lu(n.green,r.green,o),i.blue=Lu(n.blue,r.blue,o),i.alpha=ke(n.alpha,r.alpha,o),ii.transform(i))},ff=new Set(["none","hidden"]);function W4(e,t){return ff.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function $4(e,t){return n=>ke(e,t,n)}function pp(e){return typeof e=="number"?$4:typeof e=="string"?dp(e)?ql:Ve.test(e)?p0:Y4:Array.isArray(e)?hw:typeof e=="object"?Ve.test(e)?p0:H4:ql}function hw(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>pp(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function H4(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=pp(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function G4(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],a=e.values[s]??0;n[i]=a,r[o]++}return n}const Y4=(e,t)=>{const n=hn.createTransformer(t),r=mo(e),i=mo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?ff.has(e)&&!i.values.length||ff.has(t)&&!r.values.length?W4(e,t):Js(hw(G4(r,i),i.values),n):ql(e,t)};function pw(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ke(e,t,n):pp(e)(e,t)}const K4=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>Se.update(t,n),stop:()=>Ar(t),now:()=>Qe.isProcessing?Qe.timestamp:ft.now()}},mw=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Xl=2e4;function mp(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Xl;)t+=n,r=e.next(t);return t>=Xl?1/0:t}function q4(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(mp(r),Xl);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:Yt(i)}}const Me={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function hf(e,t){return e*Math.sqrt(1-t*t)}const X4=12;function Q4(e,t,n){let r=n;for(let i=1;i<X4;i++)r=r-e(r)/t(r);return r}const Ou=.001;function J4({duration:e=Me.duration,bounce:t=Me.bounce,velocity:n=Me.velocity,mass:r=Me.mass}){let i,o,s=1-t;s=Pn(Me.minDamping,Me.maxDamping,s),e=Pn(Me.minDuration,Me.maxDuration,Yt(e)),s<1?(i=c=>{const d=c*s,f=d*e,h=d-n,p=hf(c,s),m=Math.exp(-f);return Ou-h/p*m},o=c=>{const f=c*s*e,h=f*n+n,p=Math.pow(s,2)*Math.pow(c,2)*e,m=Math.exp(-f),y=hf(Math.pow(c,2),s);return(-i(c)+Ou>0?-1:1)*((h-p)*m)/y}):(i=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-Ou+d*f},o=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const a=5/e,l=Q4(i,o,a);if(e=Ot(e),isNaN(l))return{stiffness:Me.stiffness,damping:Me.damping,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:e}}}const Z4=["duration","bounce"],eP=["stiffness","damping","mass"];function m0(e,t){return t.some(n=>e[n]!==void 0)}function tP(e){let t={velocity:Me.velocity,stiffness:Me.stiffness,damping:Me.damping,mass:Me.mass,isResolvedFromDuration:!1,...e};if(!m0(e,eP)&&m0(e,Z4))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*Pn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Me.mass,stiffness:i,damping:o}}else{const n=J4({...e,velocity:0});t={...t,...n,mass:Me.mass},t.isResolvedFromDuration=!0}return t}function Ql(e=Me.visualDuration,t=Me.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:c,mass:d,duration:f,velocity:h,isResolvedFromDuration:p}=tP({...n,velocity:-Yt(n.velocity||0)}),m=h||0,y=c/(2*Math.sqrt(l*d)),b=s-o,g=Yt(Math.sqrt(l/d)),x=Math.abs(b)<5;r||(r=x?Me.restSpeed.granular:Me.restSpeed.default),i||(i=x?Me.restDelta.granular:Me.restDelta.default);let v,k,_,C,T,I;if(y<1)_=hf(g,y),C=(m+y*g*b)/_,v=P=>{const N=Math.exp(-y*g*P);return s-N*(C*Math.sin(_*P)+b*Math.cos(_*P))},T=y*g*C+b*_,I=y*g*b-C*_,k=P=>Math.exp(-y*g*P)*(T*Math.sin(_*P)+I*Math.cos(_*P));else if(y===1){v=N=>s-Math.exp(-g*N)*(b+(m+g*b)*N);const P=m+g*b;k=N=>Math.exp(-g*N)*(g*P*N-m)}else{const P=g*Math.sqrt(y*y-1);v=$=>{const H=Math.exp(-y*g*$),q=Math.min(P*$,300);return s-H*((m+y*g*b)*Math.sinh(q)+P*b*Math.cosh(q))/P};const N=(m+y*g*b)/P,D=y*g*N-b*P,F=y*g*b-N*P;k=$=>{const H=Math.exp(-y*g*$),q=Math.min(P*$,300);return H*(D*Math.sinh(q)+F*Math.cosh(q))}}const A={calculatedDuration:p&&f||null,velocity:P=>Ot(k(P)),next:P=>{if(!p&&y<1){const D=Math.exp(-y*g*P),F=Math.sin(_*P),$=Math.cos(_*P),H=s-D*(C*F+b*$),q=Ot(D*(T*F+I*$));return a.done=Math.abs(q)<=r&&Math.abs(s-H)<=i,a.value=a.done?s:H,a}const N=v(P);if(p)a.done=P>=f;else{const D=Ot(k(P));a.done=Math.abs(D)<=r&&Math.abs(s-N)<=i}return a.value=a.done?s:N,a},toString:()=>{const P=Math.min(mp(A),Xl),N=mw(D=>A.next(P*D).value,P,30);return P+"ms "+N},toTransition:()=>{}};return A}Ql.applyToOptions=e=>{const t=q4(e,100,Ql);return e.ease=t.ease,e.duration=Ot(t.duration),e.type="keyframes",e};const nP=5;function gw(e,t,n){const r=Math.max(t-nP,0);return qb(n-e(r),t-r)}function pf({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},p=I=>a!==void 0&&I<a||l!==void 0&&I>l,m=I=>a===void 0?l:l===void 0||Math.abs(a-I)<Math.abs(l-I)?a:l;let y=n*t;const b=f+y,g=s===void 0?b:s(b);g!==b&&(y=g-f);const x=I=>-y*Math.exp(-I/r),v=I=>g+x(I),k=I=>{const A=x(I),P=v(I);h.done=Math.abs(A)<=c,h.value=h.done?g:P};let _,C;const T=I=>{p(h.value)&&(_=I,C=Ql({keyframes:[h.value,m(h.value)],velocity:gw(v,I,h.value),damping:i,stiffness:o,restDelta:c,restSpeed:d}))};return T(0),{calculatedDuration:null,next:I=>{let A=!1;return!C&&_===void 0&&(A=!0,k(I),T(I)),_!==void 0&&I>=_?C.next(I-_):(!A&&k(I),h)}}}function rP(e,t,n){const r=[],i=n||Rr.mix||pw,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||qt:t;a=Js(l,a)}r.push(a)}return r}function iP(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Ic(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=rP(t,r,i),l=a.length,c=d=>{if(s&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const h=Ls(e[f],e[f+1],d);return a[f](h)};return n?d=>c(Pn(e[0],e[o-1],d)):c}function oP(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ls(0,t,r);e.push(ke(n,1,i))}}function sP(e){const t=[0];return oP(t,e.length-1),t}function aP(e,t){return e.map(n=>n*t)}function lP(e,t){return e.map(()=>t||iw).splice(0,e.length-1)}function us({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=g4(r)?r.map(c0):c0(r),o={done:!1,value:t[0]},s=aP(n&&n.length===t.length?n:sP(t),e),a=iP(s,t,{ease:Array.isArray(i)?i:lP(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const cP=e=>e!==null;function jc(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(cP),a=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const uP={decay:pf,inertia:pf,tween:us,keyframes:us,spring:Ql};function yw(e){typeof e.type=="string"&&(e.type=uP[e.type])}class gp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const dP=e=>e/100;class Jl extends gp{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==ft.now()&&this.tick(ft.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;yw(t);const{type:n=us,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:a}=t;const l=n||us;l!==us&&typeof a[0]!="number"&&(this.mixKeyframes=Js(dP,pw(a[0],a[1])),a=[0,100]);const c=l({...t,keyframes:a});o==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...a].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=mp(c));const{calculatedDuration:d}=c;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=c}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:c=0,keyframes:d,repeat:f,repeatType:h,repeatDelay:p,type:m,onUpdate:y,finalKeyframe:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let v=this.currentTime,k=r;if(f){const I=Math.min(this.currentTime,i)/a;let A=Math.floor(I),P=I%1;!P&&I>=1&&(P=1),P===1&&A--,A=Math.min(A,f+1),!!(A%2)&&(h==="reverse"?(P=1-P,p&&(P-=p/a)):h==="mirror"&&(k=s)),v=Pn(0,1,P)*a}let _;x?(this.delayState.value=d[0],_=this.delayState):_=k.next(v),o&&!x&&(_.value=o(_.value));let{done:C}=_;!x&&l!==null&&(C=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return T&&m!==pf&&(_.value=jc(d,this.options,b,this.speed)),y&&y(_.value),T&&this.finish(),_}then(t,n){return this.finished.then(t,n)}get duration(){return Yt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Yt(t)}get time(){return Yt(this.currentTime)}set time(t){t=Ot(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return gw(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(ft.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=Yt(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=K4,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ft.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function fP(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const oi=e=>e*180/Math.PI,mf=e=>{const t=oi(Math.atan2(e[1],e[0]));return gf(t)},hP={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:mf,rotateZ:mf,skewX:e=>oi(Math.atan(e[1])),skewY:e=>oi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},gf=e=>(e=e%360,e<0&&(e+=360),e),g0=mf,y0=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),x0=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),pP={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:y0,scaleY:x0,scale:e=>(y0(e)+x0(e))/2,rotateX:e=>gf(oi(Math.atan2(e[6],e[5]))),rotateY:e=>gf(oi(Math.atan2(-e[2],e[0]))),rotateZ:g0,rotate:g0,skewX:e=>oi(Math.atan(e[4])),skewY:e=>oi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function yf(e){return e.includes("scale")?1:0}function xf(e,t){if(!e||e==="none")return yf(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=pP,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=hP,i=a}if(!i)return yf(t);const o=r[t],s=i[1].split(",").map(gP);return typeof o=="function"?o(s):s[o]}const mP=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return xf(n,t)};function gP(e){return parseFloat(e.trim())}const Eo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],_o=new Set([...Eo,"pathRotation"]),v0=e=>e===Co||e===Y,yP=new Set(["x","y","z"]),xP=Eo.filter(e=>!yP.has(e));function vP(e){const t=[];return xP.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const yr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>xf(t,"x"),y:(e,{transform:t})=>xf(t,"y")};yr.translateX=yr.x;yr.translateY=yr.y;const ci=new Set;let vf=!1,bf=!1,wf=!1;function xw(){if(bf){const e=Array.from(ci).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=vP(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))==null||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}bf=!1,vf=!1,ci.forEach(e=>e.complete(wf)),ci.clear()}function vw(){ci.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(bf=!0)})}function bP(){wf=!0,vw(),xw(),wf=!1}class yp{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(ci.add(this),vf||(vf=!0,Se.read(vw),Se.resolveKeyframes(xw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const a=r.readValue(n,s);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}fP(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),ci.delete(this)}cancel(){this.state==="scheduled"&&(ci.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const wP=e=>e.startsWith("--");function bw(e,t,n){wP(t)?e.style.setProperty(t,n):e.style[t]=n}const kP={};function ww(e,t){const n=Kb(e);return()=>kP[t]??n()}const SP=ww(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),kw=ww(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Xo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,b0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xo([0,.65,.55,1]),circOut:Xo([.55,0,1,.45]),backIn:Xo([.31,.01,.66,-.59]),backOut:Xo([.33,1.53,.69,.99])};function Sw(e,t){if(e)return typeof e=="function"?kw()?mw(e,t):"ease-out":ow(e)?Xo(e):Array.isArray(e)?e.map(n=>Sw(n,t)||b0.easeOut):b0[e]}function CP(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l}={},c=void 0){const d={[t]:n};l&&(d.offset=l);const f=Sw(a,i);Array.isArray(f)&&(d.easing=f);const h={delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),e.animate(d,h)}function Cw(e){return typeof e=="function"&&"applyToOptions"in e}function EP({type:e,...t}){return Cw(e)&&kw()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class Ew extends gp{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:l}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,Ic(typeof t.type!="string");const c=EP(t);this.animation=CP(n,r,i,c,o),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=jc(i,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(d),bw(n,r,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Yt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Yt(t)}get time(){return Yt(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ot(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:i}){var o;return this.allowFlatten&&((o=this.animation.effect)==null||o.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&SP()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),qt):i(this)}}const _w={anticipate:tw,backInOut:ew,circInOut:rw};function _P(e){return e in _w}function TP(e){typeof e.ease=="string"&&_P(e.ease)&&(e.ease=_w[e.ease])}const zu=10;class IP extends Ew{constructor(t){TP(t),yw(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new Jl({...s,autoplay:!1}),l=Math.max(zu,ft.now()-this.startTime),c=Pn(0,zu,l-zu),d=a.sample(l).value,{name:f}=this.options;o&&f&&bw(o,f,d),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,d,c),a.stop()}}const w0=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(hn.test(e)||e==="0")&&!e.startsWith("url("));function jP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function PP(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=w0(i,t),a=w0(o,t);return!s||!a?!1:jP(e)||(n==="spring"||Cw(n))&&r}function kf(e){e.duration=0,e.type="keyframes"}const Tw=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),RP=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function AP(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&RP.test(e[t]))return!0;return!1}const NP=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),DP=Kb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function MP(e){var f;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s,keyframes:a}=e,l=(f=t==null?void 0:t.owner)==null?void 0:f.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;const{onUpdate:c,transformTemplate:d}=t.owner.getProps();return DP()&&n&&(Tw.has(n)||NP.has(n)&&AP(a))&&(n!=="transform"||!d)&&!c&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const LP=40;class OP extends gp{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:l,motionValue:c,element:d,...f}){var m;super(),this.stop=()=>{var y,b;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(b=this.keyframeResolver)==null||b.cancel()},this.createdAt=ft.now();const h={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:l,motionValue:c,element:d,...f},p=(d==null?void 0:d.KeyframeResolver)||yp;this.keyframeResolver=new p(a,(y,b,g)=>this.onKeyframesResolved(y,b,h,!g),l,c,d),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(t,n,r,i){var g,x;this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:l,isHandoff:c,onUpdate:d}=r;this.resolvedAt=ft.now();let f=!0;PP(t,o,s,a)||(f=!1,(Rr.instantAnimations||!l)&&(d==null||d(jc(t,r,n))),t[0]=t[t.length-1],kf(r),r.repeat=0);const p={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>LP?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},m=f&&!c&&MP(p),y=(x=(g=p.motionValue)==null?void 0:g.owner)==null?void 0:x.current;let b;if(m)try{b=new IP({...p,element:y})}catch{b=new Jl(p)}else b=new Jl(p);b.finished.then(()=>{this.notifyFinished()}).catch(qt),this.pendingTimeline&&(this.stopTimeline=b.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=b}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),bP()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function Iw(e,t,n,r=0,i=1){const o=Array.from(e).sort((c,d)=>c.sortNodePosition(d)).indexOf(t),s=e.size,a=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:a-o*r}const k0=30,zP=e=>!isNaN(parseFloat(e));class FP{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=ft.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=ft.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=zP(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new lp);const r=this.events[t].add(n);return t==="change"?()=>{r(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>k0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,k0);return qb(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function go(e,t){return new FP(e,t)}function jw(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function xp(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?jw(n,e):n}const BP={type:"spring",stiffness:500,damping:25,restSpeed:10},VP=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),UP={type:"keyframes",duration:.8},WP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},$P=(e,{keyframes:t})=>t.length>2?UP:_o.has(e)?e.startsWith("scale")?VP(t[1]):BP:WP,HP=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function GP(e){for(const t in e)if(!HP.has(t))return!0;return!1}const vp=(e,t,n,r={},i,o)=>s=>{const a=xp(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-Ot(l);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};GP(a)||Object.assign(d,$P(e,d)),d.duration&&(d.duration=Ot(d.duration)),d.repeatDelay&&(d.repeatDelay=Ot(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(kf(d),d.delay===0&&(f=!0)),(Rr.instantAnimations||Rr.skipAnimations||i!=null&&i.shouldSkipAnimations||a.skipAnimations)&&(f=!0,kf(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,f&&!o&&t.get()!==void 0){const h=jc(d.keyframes,a);if(h!==void 0){Se.update(()=>{d.onUpdate(h),d.onComplete()});return}}return a.isSync?new Jl(d):new OP(d)},YP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function KP(e){const t=YP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Pw(e,t,n=1){const[r,i]=KP(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Hb(s)?parseFloat(s):s}return dp(i)?Pw(i,t,n+1):i}function S0(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function bp(e,t,n,r){if(typeof t=="function"){const[i,o]=S0(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=S0(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function ui(e,t,n){const r=e.getProps();return bp(r,t,n!==void 0?n:r.custom,e)}const Rw=new Set(["width","height","top","left","right","bottom",...Eo]),Sf=e=>Array.isArray(e);function qP(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,go(n))}function XP(e){return Sf(e)?e[e.length-1]||0:e}function QP(e,t){const n=ui(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=XP(o[s]);qP(e,s,a)}}const Je=e=>!!(e&&e.getVelocity);function JP(e){return!!(Je(e)&&e.add)}function Cf(e,t){const n=e.getValue("willChange");if(JP(n))return n.add(t);if(!n&&Rr.WillChange){const r=new Rr.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function wp(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const ZP="framerAppearId",Aw="data-"+wp(ZP);function Nw(e){return e.props[Aw]}function eR({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Dw(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o,transitionEnd:s,...a}=t;const l=e.getDefaultTransition();o=o?jw(o,l):l;const c=o==null?void 0:o.reduceMotion,d=o==null?void 0:o.skipAnimations;r&&(o=r);const f=[],h=i&&e.animationState&&e.animationState.getState()[i],p=o==null?void 0:o.path;p&&p.animateVisualElement(e,a,o,n,f);for(const m in a){const y=e.getValue(m,e.latestValues[m]??null),b=a[m];if(b===void 0||h&&eR(h,m))continue;const g={delay:n,...xp(o||{},m)};d&&(g.skipAnimations=!0);const x=y.get();if(x!==void 0&&!y.isAnimating()&&!Array.isArray(b)&&b===x&&!g.velocity){Se.update(()=>y.set(b));continue}let v=!1;if(window.MotionHandoffAnimation){const C=Nw(e);if(C){const T=window.MotionHandoffAnimation(C,m,Se);T!==null&&(g.startTime=T,v=!0)}}Cf(e,m);const k=c??e.shouldReduceMotion;y.start(vp(m,y,b,k&&Rw.has(m)?{type:!1}:g,e,v));const _=y.animation;_&&f.push(_)}if(s){const m=()=>Se.update(()=>{s&&QP(e,s)});f.length?Promise.all(f).then(m):m()}return f}function Ef(e,t,n={}){var l;const r=ui(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Dw(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:h}=i;return tR(e,t,c,d,f,h,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,d]=a==="beforeChildren"?[o,s]:[s,o];return c().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function tR(e,t,n=0,r=0,i=0,o=1,s){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),a.push(Ef(l,t,{...s,delay:n+(typeof r=="function"?0:r)+Iw(e.variantChildren,l,r,i,o)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}function nR(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Ef(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Ef(e,t,n);else{const i=typeof t=="function"?ui(e,t,n.custom):t;r=Promise.all(Dw(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const rR={test:e=>e==="auto",parse:e=>e},Mw=e=>t=>t.test(e),Lw=[Co,Y,In,Mn,j4,I4,rR],C0=e=>Lw.find(Mw(e));function iR(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Yb(e):!0}const oR=new Set(["brightness","contrast","saturate","opacity"]);function sR(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(fp)||[];if(!r)return e;const i=n.replace(r,"");let o=oR.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const aR=/\b([a-z-]*)\(.*?\)/gu,_f={...hn,getAnimatableNone:e=>{const t=e.match(aR);return t?t.map(sR).join(" "):e}},Tf={...hn,getAnimatableNone:e=>{const t=hn.parse(e);return hn.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},E0={...Co,transform:Math.round},lR={rotate:Mn,pathRotation:Mn,rotateX:Mn,rotateY:Mn,rotateZ:Mn,scale:Ia,scaleX:Ia,scaleY:Ia,scaleZ:Ia,skew:Mn,skewX:Mn,skewY:Mn,distance:Y,translateX:Y,translateY:Y,translateZ:Y,x:Y,y:Y,z:Y,perspective:Y,transformPerspective:Y,opacity:Os,originX:d0,originY:d0,originZ:Y},Zl={borderWidth:Y,borderTopWidth:Y,borderRightWidth:Y,borderBottomWidth:Y,borderLeftWidth:Y,borderRadius:Y,borderTopLeftRadius:Y,borderTopRightRadius:Y,borderBottomRightRadius:Y,borderBottomLeftRadius:Y,width:Y,maxWidth:Y,height:Y,maxHeight:Y,top:Y,right:Y,bottom:Y,left:Y,inset:Y,insetBlock:Y,insetBlockStart:Y,insetBlockEnd:Y,insetInline:Y,insetInlineStart:Y,insetInlineEnd:Y,padding:Y,paddingTop:Y,paddingRight:Y,paddingBottom:Y,paddingLeft:Y,paddingBlock:Y,paddingBlockStart:Y,paddingBlockEnd:Y,paddingInline:Y,paddingInlineStart:Y,paddingInlineEnd:Y,margin:Y,marginTop:Y,marginRight:Y,marginBottom:Y,marginLeft:Y,marginBlock:Y,marginBlockStart:Y,marginBlockEnd:Y,marginInline:Y,marginInlineStart:Y,marginInlineEnd:Y,fontSize:Y,backgroundPositionX:Y,backgroundPositionY:Y,...lR,zIndex:E0,fillOpacity:Os,strokeOpacity:Os,numOctaves:E0},cR={...Zl,color:Ve,backgroundColor:Ve,outlineColor:Ve,fill:Ve,stroke:Ve,borderColor:Ve,borderTopColor:Ve,borderRightColor:Ve,borderBottomColor:Ve,borderLeftColor:Ve,filter:_f,WebkitFilter:_f,mask:Tf,WebkitMask:Tf},Ow=e=>cR[e],uR=new Set([_f,Tf]);function zw(e,t){let n=Ow(e);return uR.has(n)||(n=hn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const dR=new Set(["auto","none","0"]);function fR(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!dR.has(o)&&mo(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=zw(n,i)}class hR extends yp{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let f=t[d];if(typeof f=="string"&&(f=f.trim(),dp(f))){const h=Pw(f,n.current);h!==void 0&&(t[d]=h),d===t.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!Rw.has(r)||t.length!==2)return;const[i,o]=t,s=C0(i),a=C0(o),l=u0(i),c=u0(o);if(l!==c&&yr[r]){this.needsMeasurement=!0;return}if(s!==a)if(v0(s)&&v0(a))for(let d=0;d<t.length;d++){const f=t[d];typeof f=="string"&&(t[d]=parseFloat(f))}else yr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||iR(t[i]))&&r.push(i);r.length&&fR(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=yr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=yr[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{t.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const kp=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Fw(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(r=>r!=null)}const If=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function nl(e){return Gb(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:Sp}=sw(queueMicrotask,!1),on={x:!1,y:!1};function Bw(){return on.x||on.y}function pR(e){return e==="x"||e==="y"?on[e]?null:(on[e]=!0,()=>{on[e]=!1}):on.x||on.y?null:(on.x=on.y=!0,()=>{on.x=on.y=!1})}function Vw(e,t){const n=Fw(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function mR(e){return!(e.pointerType==="touch"||Bw())}function gR(e,t,n={}){const[r,i,o]=Vw(e,n);return r.forEach(s=>{let a=!1,l=!1,c;const d=()=>{s.removeEventListener("pointerleave",m)},f=b=>{c&&(c(b),c=void 0),d()},h=b=>{a=!1,window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h),l&&(l=!1,f(b))},p=()=>{a=!0,window.addEventListener("pointerup",h,i),window.addEventListener("pointercancel",h,i)},m=b=>{if(b.pointerType!=="touch"){if(a){l=!0;return}f(b)}},y=b=>{if(!mR(b))return;l=!1;const g=t(s,b);typeof g=="function"&&(c=g,s.addEventListener("pointerleave",m,i))};s.addEventListener("pointerenter",y,i),s.addEventListener("pointerdown",p,i)}),o}const Uw=(e,t)=>t?e===t?!0:Uw(e,t.parentElement):!1,Cp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,yR=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function xR(e){return yR.has(e.tagName)||e.isContentEditable===!0}const vR=new Set(["INPUT","SELECT","TEXTAREA"]);function bR(e){return vR.has(e.tagName)||e.isContentEditable===!0}const rl=new WeakSet;function _0(e){return t=>{t.key==="Enter"&&e(t)}}function Fu(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const wR=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=_0(()=>{if(rl.has(n))return;Fu(n,"down");const i=_0(()=>{Fu(n,"up")}),o=()=>Fu(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function T0(e){return Cp(e)&&!Bw()}const I0=new WeakSet;function kR(e,t,n={}){const[r,i,o]=Vw(e,n),s=a=>{const l=a.currentTarget;if(!T0(a)||I0.has(a))return;rl.add(l),n.stopPropagation&&I0.add(a);const c=t(l,a),d={...i,capture:!0},f=(m,y)=>{window.removeEventListener("pointerup",h,d),window.removeEventListener("pointercancel",p,d),rl.has(l)&&rl.delete(l),T0(m)&&typeof c=="function"&&c(m,{success:y})},h=m=>{f(m,l===window||l===document||n.useGlobalTarget||Uw(l,m.target))},p=m=>{f(m,!1)};window.addEventListener("pointerup",h,d),window.addEventListener("pointercancel",p,d)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),nl(a)&&(a.addEventListener("focus",c=>wR(c,i)),!xR(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function Ep(e){return Gb(e)&&"ownerSVGElement"in e}const il=new WeakMap;let ar;const Ww=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:Ep(r)&&"getBBox"in r?r.getBBox()[t]:r[n],SR=Ww("inline","width","offsetWidth"),CR=Ww("block","height","offsetHeight");function ER({target:e,borderBoxSize:t}){var n;(n=il.get(e))==null||n.forEach(r=>{r(e,{get width(){return SR(e,t)},get height(){return CR(e,t)}})})}function _R(e){e.forEach(ER)}function TR(){typeof ResizeObserver>"u"||(ar=new ResizeObserver(_R))}function IR(e,t){ar||TR();const n=Fw(e);return n.forEach(r=>{let i=il.get(r);i||(i=new Set,il.set(r,i)),i.add(t),ar==null||ar.observe(r)}),()=>{n.forEach(r=>{const i=il.get(r);i==null||i.delete(t),i!=null&&i.size||ar==null||ar.unobserve(r)})}}const ol=new Set;let $i;function jR(){$i=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};ol.forEach(t=>t(e))},window.addEventListener("resize",$i)}function PR(e){return ol.add(e),$i||jR(),()=>{ol.delete(e),!ol.size&&typeof $i=="function"&&(window.removeEventListener("resize",$i),$i=void 0)}}function j0(e,t){return typeof e=="function"?PR(e):IR(e,t)}function RR(e){return Ep(e)&&e.tagName==="svg"}const AR=[...Lw,Ve,hn],NR=e=>AR.find(Mw(e)),P0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Hi=()=>({x:P0(),y:P0()}),R0=()=>({min:0,max:0}),$e=()=>({x:R0(),y:R0()}),DR=new WeakMap;function Pc(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function zs(e){return typeof e=="string"||Array.isArray(e)}const _p=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Tp=["initial",..._p];function Rc(e){return Pc(e.animate)||Tp.some(t=>zs(e[t]))}function $w(e){return!!(Rc(e)||e.variants)}function MR(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Je(i))e.addValue(r,i);else if(Je(o))e.addValue(r,go(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,go(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const jf={current:null},Hw={current:!1},LR=typeof window<"u";function OR(){if(Hw.current=!0,!!LR)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>jf.current=e.matches;e.addEventListener("change",t),t()}else jf.current=!1}const A0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ec={};function Gw(e){ec=e}function zR(){return ec}class FR{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:o,blockInitialAnimation:s,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=yp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=ft.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Se.render(this.render,!1,!0))};const{latestValues:c,renderState:d}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=o,this.options=l,this.blockInitialAnimation=!!s,this.isControllingVariants=Rc(n),this.isVariantNode=$w(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const m=h[p];c[p]!==void 0&&Je(m)&&m.set(c[p])}}mount(t){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=t,DR.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Hw.current||OR(),this.shouldReduceMotion=jf.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),Ar(this.notifyUpdate),Ar(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&Tw.has(t)&&this.current instanceof HTMLElement){const{factory:s,keyframes:a,times:l,ease:c,duration:d}=n.accelerate,f=new Ew({element:this.current,name:t,keyframes:a,times:l,ease:c,duration:Ot(d)}),h=s(f);this.valueSubscriptions.set(t,()=>{h(),f.cancel()});return}const r=_o.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&Se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ec){const n=ec[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$e()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<A0.length;r++){const i=A0[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=MR(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=go(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Hb(r)||Yb(r))?r=parseFloat(r):!NR(r)&&hn.test(n)&&(r=zw(t,n)),this.setBaseTarget(t,Je(r)?r.get():r)),Je(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=bp(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Je(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new lp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Sp.render(this.render)}}class Yw extends FR{constructor(){super(...arguments),this.KeyframeResolver=hR}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Je(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class zr{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Kw({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function BR({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function VR(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Bu(e){return e===void 0||e===1}function Pf({scale:e,scaleX:t,scaleY:n}){return!Bu(e)||!Bu(t)||!Bu(n)}function Qr(e){return Pf(e)||qw(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function qw(e){return N0(e.x)||N0(e.y)}function N0(e){return e&&e!=="0%"}function tc(e,t,n){const r=e-n,i=t*r;return n+i}function D0(e,t,n,r,i){return i!==void 0&&(e=tc(e,i,r)),tc(e,n,r)+t}function Rf(e,t=0,n=1,r,i){e.min=D0(e.min,t,n,r,i),e.max=D0(e.max,t,n,r,i)}function Xw(e,{x:t,y:n}){Rf(e.x,t.translate,t.scale,t.originPoint),Rf(e.y,n.translate,n.scale,n.originPoint)}const M0=.999999999999,L0=1.0000000000001;function UR(e,t,n,r=!1){var a;const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let l=0;l<i;l++){o=n[l],s=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&(wn(e.x,-o.scroll.offset.x),wn(e.y,-o.scroll.offset.y)),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Xw(e,s)),r&&Qr(o.latestValues)&&sl(e,o.latestValues,(a=o.layout)==null?void 0:a.layoutBox))}t.x<L0&&t.x>M0&&(t.x=1),t.y<L0&&t.y>M0&&(t.y=1)}function wn(e,t){e.min+=t,e.max+=t}function O0(e,t,n,r,i=.5){const o=ke(e.min,e.max,i);Rf(e,t,n,o,r)}function z0(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function sl(e,t,n){const r=n??e;O0(e.x,z0(t.x,r.x),t.scaleX,t.scale,t.originX),O0(e.y,z0(t.y,r.y),t.scaleY,t.scale,t.originY)}function Qw(e,t){return Kw(VR(e.getBoundingClientRect(),t))}function WR(e,t,n){const r=Qw(e,n),{scroll:i}=t;return i&&(wn(r.x,i.offset.x),wn(r.y,i.offset.y)),r}const $R={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},HR=Eo.length;function GR(e,t,n){let r="",i=!0;for(let s=0;s<HR;s++){const a=Eo[s],l=e[a];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(a.startsWith("scale")?1:0);else{const d=parseFloat(l);c=a.startsWith("scale")?d===1:d===0}if(!c||n){const d=If(l,Zl[a]);if(!c){i=!1;const f=$R[a]||a;r+=`${f}(${d}) `}n&&(t[a]=d)}}const o=e.pathRotation;return o&&(i=!1,r+=`rotate(${If(o,Zl.pathRotation)}) `),r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Ip(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const c=t[l];if(_o.has(l)){s=!0;continue}else if(lw(l)){i[l]=c;continue}else{const d=If(c,Zl[l]);l.startsWith("origin")?(a=!0,o[l]=d):r[l]=d}}if(t.transform||(s||n?r.transform=GR(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:d=0}=o;r.transformOrigin=`${l} ${c} ${d}`}}function Jw(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function F0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Wo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(Y.test(e))e=parseFloat(e);else return e;const n=F0(e,t.target.x),r=F0(e,t.target.y);return`${n}% ${r}%`}},YR={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=hn.parse(e);if(i.length>5)return r;const o=hn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const c=ke(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),o(i)}},Af={borderRadius:{...Wo,applyTo:[...kp]},borderTopLeftRadius:Wo,borderTopRightRadius:Wo,borderBottomLeftRadius:Wo,borderBottomRightRadius:Wo,boxShadow:YR};function Zw(e,{layout:t,layoutId:n}){return _o.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Af[e]||e==="opacity")}function jp(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const a in r)(Je(r[a])||i&&Je(i[a])||Zw(a,e)||((s=n==null?void 0:n.getValue(a))==null?void 0:s.liveStyle)!==void 0)&&(o[a]=r[a]);return o}function KR(e){return window.getComputedStyle(e)}class qR extends Yw{constructor(){super(...arguments),this.type="html",this.renderInstance=Jw}mount(t){Ic(!!t.style),super.mount(t)}readValueFromInstance(t,n){var r;if(_o.has(n))return(r=this.projection)!=null&&r.isProjecting?yf(n):mP(t,n);{const i=KR(t),o=(lw(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Qw(t,n)}build(t,n,r){Ip(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return jp(t,n,r)}}const XR={offset:"stroke-dashoffset",array:"stroke-dasharray"},QR={offset:"strokeDashoffset",array:"strokeDasharray"};function JR(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?XR:QR;e[o.offset]=`${-r}`,e[o.array]=`${t} ${n}`}const e2=["transform","opacity","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function t2(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...a},l,c,d){if(Ip(e,a,c),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:h}=e;for(const p of e2)f[p]!==void 0&&(h[p]=f[p],delete f[p]);(h.transform||f.transformOrigin)&&(h.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),h.transform&&(h.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete f.transformBox),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),i!==void 0&&JR(f,i,o,s,!1)}const n2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),r2=e=>typeof e=="string"&&e.toLowerCase()==="svg";function ZR(e,t,n,r){Jw(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(n2.has(i)?i:wp(i),t.attrs[i])}function i2(e,t,n){const r=jp(e,t,n);for(const i in e)if(Je(e[i])||Je(t[i])){const o=Eo.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class eA extends Yw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$e}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(_o.has(n)){const r=Ow(n);return r&&r.default||0}if(e2.includes(n)){const i=getComputedStyle(t)[n];if(typeof i=="string"&&i)return i.trim()}return n=n2.has(n)?n:wp(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return i2(t,n,r)}build(t,n,r){t2(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){ZR(t,n,r,i)}mount(t){this.isSVGTag=r2(t.tagName),super.mount(t)}}const tA=Tp.length;function o2(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?o2(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<tA;n++){const r=Tp[n],i=e.props[r];(zs(i)||i===!1)&&(t[r]=i)}return t}function s2(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const nA=[..._p].reverse(),rA=_p.length;function iA(e){return t=>Promise.all(t.map(({animation:n,options:r})=>nR(e,n,r)))}function oA(e){let t=iA(e),n=B0(),r=!0,i=!1;const o=c=>(d,f)=>{var p;const h=ui(e,f,c==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);if(h){const{transition:m,transitionEnd:y,...b}=h;d={...d,...b,...y}}return d};function s(c){t=c(e)}function a(c){const{props:d}=e,f=o2(e.parent)||{},h=[],p=new Set;let m={},y=1/0;for(let g=0;g<rA;g++){const x=nA[g],v=n[x],k=d[x]!==void 0?d[x]:f[x],_=zs(k),C=x===c?v.isActive:null;C===!1&&(y=g);let T=k===f[x]&&k!==d[x]&&_;if(T&&(r||i)&&e.manuallyAnimateOnMount&&(T=!1),v.protectedKeys={...m},!v.isActive&&C===null||!k&&!v.prevProp||Pc(k)||typeof k=="boolean")continue;if(x==="exit"&&v.isActive&&C!==!0){v.prevResolvedValues&&(m={...m,...v.prevResolvedValues});continue}const I=sA(v.prevProp,k);let A=I||x===c&&v.isActive&&!T&&_||g>y&&_,P=!1;const N=Array.isArray(k)?k:[k];let D=N.reduce(o(x),{});C===!1&&(D={});const{prevResolvedValues:F={}}=v,$={...F,...D},H=M=>{A=!0,p.has(M)&&(P=!0,p.delete(M)),v.needsAnimating[M]=!0;const U=e.getValue(M);U&&(U.liveStyle=!1)};for(const M in $){const U=D[M],S=F[M];if(m.hasOwnProperty(M))continue;let X=!1;Sf(U)&&Sf(S)?X=!s2(U,S)||I:X=U!==S,X?U!=null?H(M):p.add(M):U!==void 0&&p.has(M)?H(M):v.protectedKeys[M]=!0}v.prevProp=k,v.prevResolvedValues=D,v.isActive&&(m={...m,...D}),(r||i)&&e.blockInitialAnimation&&(A=!1);const q=T&&I;A&&(!q||P)&&h.push(...N.map(M=>{const U={type:x};if(typeof M=="string"&&(r||i)&&!q&&e.manuallyAnimateOnMount&&e.parent){const{parent:S}=e,X=ui(S,M);if(S.enteringChildren&&X){const{delayChildren:ne}=X.transition||{};U.delay=Iw(S.enteringChildren,e,ne)}}return{animation:M,options:U}}))}if(p.size){const g={};if(typeof d.initial!="boolean"){const x=ui(e,Array.isArray(d.initial)?d.initial[0]:d.initial);x&&x.transition&&(g.transition=x.transition)}p.forEach(x=>{const v=e.getBaseTarget(x),k=e.getValue(x);k&&(k.liveStyle=!0),g[x]=v??null}),h.push({animation:g})}let b=!!h.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(b=!1),r=!1,i=!1,b?t(h):Promise.resolve()}function l(c,d){var h;if(n[c].isActive===d)return Promise.resolve();(h=e.variantChildren)==null||h.forEach(p=>{var m;return(m=p.animationState)==null?void 0:m.setActive(c,d)}),n[c].isActive=d;const f=a(c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:l,setAnimateFunction:s,getState:()=>n,reset:()=>{n=B0(),i=!0}}}function sA(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!s2(t,e):!1}function Yr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function B0(){return{animate:Yr(!0),whileInView:Yr(),whileHover:Yr(),whileTap:Yr(),whileDrag:Yr(),whileFocus:Yr(),exit:Yr()}}function Nf(e,t){e.min=t.min,e.max=t.max}function rn(e,t){Nf(e.x,t.x),Nf(e.y,t.y)}function V0(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const a2=1e-4,aA=1-a2,lA=1+a2,l2=.01,cA=0-l2,uA=0+l2;function ht(e){return e.max-e.min}function dA(e,t,n){return Math.abs(e-t)<=n}function U0(e,t,n,r=.5){e.origin=r,e.originPoint=ke(t.min,t.max,e.origin),e.scale=ht(n)/ht(t),e.translate=ke(n.min,n.max,e.origin)-e.originPoint,(e.scale>=aA&&e.scale<=lA||isNaN(e.scale))&&(e.scale=1),(e.translate>=cA&&e.translate<=uA||isNaN(e.translate))&&(e.translate=0)}function ds(e,t,n,r){U0(e.x,t.x,n.x,r?r.originX:void 0),U0(e.y,t.y,n.y,r?r.originY:void 0)}function W0(e,t,n,r=0){const i=r?ke(n.min,n.max,r):n.min;e.min=i+t.min,e.max=e.min+ht(t)}function fA(e,t,n,r){W0(e.x,t.x,n.x,r==null?void 0:r.x),W0(e.y,t.y,n.y,r==null?void 0:r.y)}function $0(e,t,n,r=0){const i=r?ke(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+ht(t)}function nc(e,t,n,r){$0(e.x,t.x,n.x,r==null?void 0:r.x),$0(e.y,t.y,n.y,r==null?void 0:r.y)}function H0(e,t,n,r,i){return e-=t,e=tc(e,1/n,r),i!==void 0&&(e=tc(e,1/i,r)),e}function hA(e,t=0,n=1,r=.5,i,o=e,s=e){if(In.test(t)&&(t=parseFloat(t),t=ke(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=ke(o.min,o.max,r);e===o&&(a-=t),e.min=H0(e.min,t,n,a,i),e.max=H0(e.max,t,n,a,i)}function G0(e,t,[n,r,i],o,s){hA(e,t[n],t[r],t[i],t.scale,o,s)}const pA=["x","scaleX","originX"],mA=["y","scaleY","originY"];function Y0(e,t,n,r){G0(e.x,t,pA,n?n.x:void 0,r?r.x:void 0),G0(e.y,t,mA,n?n.y:void 0,r?r.y:void 0)}function K0(e){return e.translate===0&&e.scale===1}function c2(e){return K0(e.x)&&K0(e.y)}function q0(e,t){return e.min===t.min&&e.max===t.max}function gA(e,t){return q0(e.x,t.x)&&q0(e.y,t.y)}function X0(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function u2(e,t){return X0(e.x,t.x)&&X0(e.y,t.y)}function Q0(e){return ht(e.x)/ht(e.y)}function J0(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function vn(e){return[e("x"),e("y")]}function yA(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,pathRotation:f,rotateX:h,rotateY:p,skewX:m,skewY:y}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotate(${f}deg) `),h&&(r+=`rotateX(${h}deg) `),p&&(r+=`rotateY(${p}deg) `),m&&(r+=`skewX(${m}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const xA=kp.length,Z0=e=>typeof e=="string"?parseFloat(e):e,ey=e=>typeof e=="number"||Y.test(e);function vA(e,t,n,r,i,o){i?(e.opacity=ke(0,n.opacity??1,bA(r)),e.opacityExit=ke(t.opacity??1,0,wA(r))):o&&(e.opacity=ke(t.opacity??1,n.opacity??1,r));for(let s=0;s<xA;s++){const a=kp[s];let l=ty(t,a),c=ty(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||ey(l)===ey(c)?(e[a]=Math.max(ke(Z0(l),Z0(c),r),0),(In.test(c)||In.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=ke(t.rotate||0,n.rotate||0,r))}function ty(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const bA=d2(0,.5,nw),wA=d2(.5,.95,qt);function d2(e,t,n){return r=>r<e?0:r>t?1:n(Ls(e,t,r))}function kA(e,t,n){const r=Je(e)?e:go(e);return r.start(vp("",r,t,n)),r.animation}function Fs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}const SA=(e,t)=>e.depth-t.depth;class CA{constructor(){this.children=[],this.isDirty=!1}add(t){ap(this.children,t),this.isDirty=!0}remove(t){Kl(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(SA),this.isDirty=!1,this.children.forEach(t)}}function EA(e,t){const n=ft.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Ar(r),e(o-t))};return Se.setup(r,!0),()=>Ar(r)}function al(e){return Je(e)?e.get():e}class _A{constructor(){this.members=[]}add(t){ap(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(Kl(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(Kl(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(t,n){var i;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:o}=r.options,{layoutDependency:s}=t.options;(o===void 0||o!==s)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(i=t.root)!=null&&i.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,o,s;(r=(n=t.options).onExitComplete)==null||r.call(n),(s=(i=t.resumingFrom)==null?void 0:(o=i.options).onExitComplete)==null||s.call(o)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const ll={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Vu=["","X","Y","Z"],TA=1e3;let IA=0;function Uu(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function f2(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Nw(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Se,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&f2(r)}function h2({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=IA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(RA),this.nodes.forEach(OA),this.nodes.forEach(zA),this.nodes.forEach(AA)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new CA)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new lp),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=Ep(s)&&!RR(s),this.instance=s;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let d,f=0;const h=()=>this.root.updateBlockedByResize=!1;Se.read(()=>{f=window.innerWidth}),e(s,()=>{const p=window.innerWidth;p!==f&&(f=p,this.root.updateBlockedByResize=!0,d&&d(),d=EA(h,250),ll.hasAnimatedSinceResize&&(ll.hasAnimatedSinceResize=!1,this.nodes.forEach(iy)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeLayoutChanged:h,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||c.getDefaultTransition()||WA,{onLayoutAnimationStart:y,onLayoutAnimationComplete:b}=c.getProps(),g=!this.targetLayout||!u2(this.targetLayout,p),x=!f&&h;if(this.options.layoutRoot||this.resumeFrom||x||f&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...xp(m,"layout"),onPlay:y,onComplete:b};(c.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(d,x,v.path)}else f||iy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ar(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(FA),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&f2(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,(typeof f.latestValues.x=="string"||typeof f.latestValues.y=="string")&&(f.isLayoutDirty=!0),f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(DA),this.nodes.forEach(ny);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ry);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(MA),this.nodes.forEach(LA),this.nodes.forEach(jA),this.nodes.forEach(PA)):this.nodes.forEach(ry),this.clearAllSnapshots();const a=ft.now();Qe.delta=Pn(0,1e3/60,a-Qe.timestamp),Qe.timestamp=a,Qe.isProcessing=!0,Nu.update.process(Qe),Nu.preRender.process(Qe),Nu.render.process(Qe),Qe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Sp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(NA),this.sharedNodes.forEach(BA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ht(this.snapshot.measuredBox.x)&&!ht(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=$e()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!c2(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;s&&this.instance&&(a||Qr(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),$A(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:s}=this.options;if(!s)return $e();const a=s.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(HA))){const{scroll:d}=this.root;d&&(wn(a.x,d.offset.x),wn(a.y,d.offset.y))}return a}removeElementScroll(s){var l;const a=$e();if(rn(a,s),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:h}=d;d!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&rn(a,s),wn(a.x,f.offset.x),wn(a.y,f.offset.y))}return a}applyTransform(s,a=!1,l){var d,f;const c=l||$e();rn(c,s);for(let h=0;h<this.path.length;h++){const p=this.path[h];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(wn(c.x,-p.scroll.offset.x),wn(c.y,-p.scroll.offset.y)),Qr(p.latestValues)&&sl(c,p.latestValues,(d=p.layout)==null?void 0:d.layoutBox)}return Qr(this.latestValues)&&sl(c,this.latestValues,(f=this.layout)==null?void 0:f.layoutBox),c}removeTransform(s){var l;const a=$e();rn(a,s);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!Qr(d.latestValues))continue;let f;d.instance&&(Pf(d.latestValues)&&d.updateSnapshot(),f=$e(),rn(f,d.measurePageBox())),Y0(a,d.latestValues,(l=d.snapshot)==null?void 0:l.layoutBox,f)}return Qr(this.latestValues)&&Y0(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Qe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(s||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!this.layout||!(d||f))return;this.resolvedRelativeTargetAt=Qe.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=$e(),this.targetWithTransforms=$e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),fA(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):rn(this.target,this.layout.layoutBox),Xw(this.target,this.targetDelta)):rn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Pf(this.parent.latestValues)||qw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,a,l){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),nc(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),rn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const s=this.getLead(),a=!!this.resumingFrom||this!==s;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Qe.timestamp&&(l=!1),l)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;rn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,h=this.treeScale.y;UR(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=$e());const{target:p}=s;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(V0(this.prevProjectionDelta.x,this.projectionDelta.x),V0(this.prevProjectionDelta.y,this.projectionDelta.y)),ds(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==h||!J0(this.projectionDelta.x,this.prevProjectionDelta.x)||!J0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Hi(),this.projectionDelta=Hi(),this.projectionDeltaWithTransform=Hi()}setAnimationOrigin(s,a=!1,l){const c=this.snapshot,d=c?c.latestValues:{},f={...this.latestValues},h=Hi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=$e(),m=c?c.source:void 0,y=this.layout?this.layout.source:void 0,b=m!==y,g=this.getStack(),x=!g||g.members.length<=1,v=!!(b&&!x&&this.options.crossfade===!0&&!this.path.some(UA));this.animationProgress=0;let k;const _=l==null?void 0:l.interpolateProjection(s);this.mixTargetDelta=C=>{const T=C/1e3,I=_==null?void 0:_(T);I?(h.x.translate=I.x,h.x.scale=ke(s.x.scale,1,T),h.x.origin=s.x.origin,h.x.originPoint=s.x.originPoint,h.y.translate=I.y,h.y.scale=ke(s.y.scale,1,T),h.y.origin=s.y.origin,h.y.originPoint=s.y.originPoint):(oy(h.x,s.x,T),oy(h.y,s.y,T)),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(nc(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),VA(this.relativeTarget,this.relativeTargetOrigin,p,T),k&&gA(this.relativeTarget,k)&&(this.isProjectionDirty=!1),k||(k=$e()),rn(k,this.relativeTarget)),b&&(this.animationValues=f,vA(f,d,this.latestValues,T,v,x)),I&&I.rotate!==void 0&&(this.animationValues||(this.animationValues=f),this.animationValues.pathRotation=I.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Ar(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{ll.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=go(0)),this.motionValue.jump(0,!1),this.currentAnimation=kA(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(TA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&p2(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||$e();const f=ht(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const h=ht(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}rn(a,l),sl(a,d),ds(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new _A),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Uu("z",s,c,this.animationValues);for(let d=0;d<Vu.length;d++)Uu(`rotate${Vu[d]}`,s,c,this.animationValues),Uu(`skew${Vu[d]}`,s,c,this.animationValues);s.render();for(const d in c)s.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);s.scheduleRender()}applyProjectionStyles(s,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=al(a==null?void 0:a.pointerEvents)||"",s.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=al(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Qr(this.latestValues)&&(s.transform=l?l({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=yA(this.projectionDeltaWithTransform,this.treeScale,d);l&&(f=l(d,f)),s.transform=f;const{x:h,y:p}=this.projectionDelta;s.transformOrigin=`${h.origin*100}% ${p.origin*100}% 0`,c.animationValues?s.opacity=c===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=c===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const m in Af){if(d[m]===void 0)continue;const{correct:y,applyTo:b,isCSSVariable:g}=Af[m],x=f==="none"?d[m]:y(d[m],c);if(b){const v=b.length;for(let k=0;k<v;k++)s[b[k]]=x}else g?this.options.visualElement.renderState.vars[m]=x:s[m]=x}this.options.layoutId&&(s.pointerEvents=c===this?al(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(ny),this.root.sharedNodes.clear()}}}function jA(e){e.updateLayout()}function PA(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;if(o==="size")vn(f=>{const h=s?t.measuredBox[f]:t.layoutBox[f],p=ht(h);h.min=r[f].min,h.max=h.min+p});else if(o==="x"||o==="y"){const f=o==="x"?"y":"x";Nf(s?t.measuredBox[f]:t.layoutBox[f],r[f])}else p2(o,t.layoutBox,r)&&vn(f=>{const h=s?t.measuredBox[f]:t.layoutBox[f],p=ht(r[f]);h.max=h.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+p)});const a=Hi();ds(a,r,t.layoutBox);const l=Hi();s?ds(l,e.applyTransform(i,!0),t.measuredBox):ds(l,r,t.layoutBox);const c=!c2(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:p}=f;if(h&&p){const m=e.options.layoutAnchor||void 0,y=$e();nc(y,t.layoutBox,h.layoutBox,m);const b=$e();nc(b,r,p.layoutBox,m),u2(y,b)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function RA(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function AA(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function NA(e){e.clearSnapshot()}function ny(e){e.clearMeasurements()}function DA(e){e.isLayoutDirty=!0,e.updateLayout()}function ry(e){e.isLayoutDirty=!1}function MA(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function LA(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function iy(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function OA(e){e.resolveTargetDelta()}function zA(e){e.calcProjection()}function FA(e){e.resetSkewAndRotation()}function BA(e){e.removeLeadSnapshot()}function oy(e,t,n){e.translate=ke(t.translate,0,n),e.scale=ke(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function sy(e,t,n,r){e.min=ke(t.min,n.min,r),e.max=ke(t.max,n.max,r)}function VA(e,t,n,r){sy(e.x,t.x,n.x,r),sy(e.y,t.y,n.y,r)}function UA(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const WA={duration:.45,ease:[.4,0,.1,1]},ay=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ly=ay("applewebkit/")&&!ay("chrome/")?Math.round:qt;function cy(e){e.min=ly(e.min),e.max=ly(e.max)}function $A(e){cy(e.x),cy(e.y)}function p2(e,t,n){return e==="position"||e==="preserve-aspect"&&!dA(Q0(t),Q0(n),.2)}function HA(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const GA=h2({attachResizeListener:(e,t)=>Fs(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Wu={current:void 0},m2=h2({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Wu.current){const e=new GA({});e.mount(window),e.setOptions({layoutScroll:!0}),Wu.current=e}return Wu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Pp=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function uy(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function YA(...e){return t=>{let n=!1;const r=e.map(i=>{const o=uy(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():uy(e[i],null)}}}}function KA(...e){return w.useCallback(YA(...e),e)}class qA extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(nl(n)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=n.offsetParent,i=nl(r)&&r.offsetWidth||0,o=nl(r)&&r.offsetHeight||0,s=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(s.height),a.width=parseFloat(s.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=i-a.width-a.left,a.bottom=o-a.height-a.top,a.direction=s.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function XA({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:o}){var h;const s=w.useId(),a=w.useRef(null),l=w.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:c}=w.useContext(Pp),d=o!==!1?((h=e.props)==null?void 0:h.ref)??(e==null?void 0:e.ref):void 0,f=KA(a,d);return w.useInsertionEffect(()=>{const{width:p,height:m,top:y,left:b,right:g,bottom:x,direction:v}=l.current;if(t||o===!1||!a.current||!p||!m)return;const k=v==="rtl",_=n==="left"?k?`right: ${g}`:`left: ${b}`:k?`left: ${b}`:`right: ${g}`,C=r==="bottom"?`bottom: ${x}`:`top: ${y}`;a.current.dataset.motionPopId=s;const T=document.createElement("style");c&&(T.nonce=c);const I=i??document.head;return I.appendChild(T),T.sheet&&T.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${_}px !important;
            ${C}px !important;
          }
        `),()=>{var A;(A=a.current)==null||A.removeAttribute("data-motion-pop-id"),I.contains(T)&&I.removeChild(T)}},[t]),u.jsx(qA,{isPresent:t,childRef:a,sizeRef:l,pop:o,children:o===!1?e:w.cloneElement(e,{ref:f})})}const QA=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:a,anchorY:l,root:c})=>{const d=sp(JA),f=w.useId(),h=w.useRef(n),p=w.useRef(r);Yl(()=>{h.current=n,p.current=r});let m=!0,y=w.useMemo(()=>(m=!1,{id:f,initial:t,isPresent:n,custom:i,onExitComplete:b=>{d.set(b,!0);for(const g of d.values())if(!g)return;r&&r()},register:b=>(d.set(b,!1),()=>{var g;d.delete(b),!h.current&&!d.size&&((g=p.current)==null||g.call(p))})}),[n,d,r]);return o&&m&&(y={...y}),w.useMemo(()=>{d.forEach((b,g)=>d.set(g,!1))},[n]),w.useEffect(()=>{!n&&!d.size&&r&&r()},[n]),e=u.jsx(XA,{pop:s==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,children:e}),u.jsx(Tc.Provider,{value:y,children:e})};function JA(){return new Map}function g2(e=!0){const t=w.useContext(Tc);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=w.useId();w.useEffect(()=>{if(e)return i(o)},[e]);const s=w.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const ja=e=>e.key||"";function dy(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const ZA=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[d,f]=g2(s),h=w.useMemo(()=>dy(e),[e]),p=s&&!d?[]:h.map(ja),m=w.useRef(!0),y=w.useRef(h),b=sp(()=>new Map),g=w.useRef(new Set),[x,v]=w.useState(h),[k,_]=w.useState(h);Yl(()=>{s&&!d&&!k.length&&(f==null||f())},[d,s,k.length,f]),Yl(()=>{m.current=!1,y.current=h;for(let I=0;I<k.length;I++){const A=ja(k[I]);p.includes(A)?(b.delete(A),g.current.delete(A)):b.get(A)!==!0&&b.set(A,!1)}},[k,p.length,p.join("-")]);const C=[];if(h!==x){let I=[...h];for(let A=0;A<k.length;A++){const P=k[A],N=ja(P);p.includes(N)||(I.splice(A,0,P),C.push(P))}return o==="wait"&&C.length&&(I=C),_(dy(I)),v(h),null}const{forceRender:T}=w.useContext(op);return u.jsx(u.Fragment,{children:k.map(I=>{const A=ja(I),P=s&&!d?!1:h===k||p.includes(A),N=()=>{if(g.current.has(A))return;if(b.has(A))g.current.add(A),b.set(A,!0);else return;let D=!0;b.forEach(F=>{F||(D=!1)}),D&&(T==null||T(),_(y.current),s&&(f==null||f()),r&&r())};return u.jsx(QA,{isPresent:P,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:P?void 0:N,anchorX:a,anchorY:l,children:I},A)})})},y2=w.createContext({strict:!1}),fy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let hy=!1;function e3(){if(hy)return;const e={};for(const t in fy)e[t]={isEnabled:n=>fy[t].some(r=>!!n[r])};Gw(e),hy=!0}function x2(){return e3(),zR()}function t3(e){const t=x2();for(const n in e)t[n]={...t[n],...e[n]};Gw(t)}const Ac=w.createContext({});function n3(e,t){if(Rc(e)){const{initial:n,animate:r}=e;return{initial:n===!1||zs(n)?n:void 0,animate:zs(r)?r:void 0}}return e.inherit!==!1?t:{}}function r3(e){const{initial:t,animate:n}=n3(e,w.useContext(Ac));return w.useMemo(()=>({initial:t,animate:n}),[py(t),py(n)])}function py(e){return Array.isArray(e)?e.join(" "):e}const Rp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function v2(e,t,n){for(const r in t)!Je(t[r])&&!Zw(r,n)&&(e[r]=t[r])}function i3({transformTemplate:e},t){return w.useMemo(()=>{const n=Rp();return Ip(n,t,e),Object.assign({},n.vars,n.style)},[t])}function o3(e,t){const n=e.style||{},r={};return v2(r,n,e),Object.assign(r,i3(e,t)),r}function s3(e,t){const n={},r=o3(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const b2=()=>({...Rp(),attrs:{}});function a3(e,t,n,r){const i=w.useMemo(()=>{const o=b2();return t2(o,t,r2(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};v2(o,e.style,e),i.style={...o,...i.style}}return i}const l3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function rc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||l3.has(e)}function c3(e,t){return e.startsWith("on")?!rc(e):(t==null?void 0:t(e))??!rc(e)}function u3(e,t,n,r){const i={};for(const o in e)o==="values"&&typeof e.values=="object"||Je(e[o])||(c3(o,r)||n===!0&&rc(o)||!t&&!rc(o)||e.draggable&&o.startsWith("onDrag"))&&(i[o]=e[o]);return i}const d3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ap(e){return typeof e!="string"||e.includes("-")?!1:!!(d3.indexOf(e)>-1||/[A-Z]/u.test(e))}function f3(e,t,n,{latestValues:r},i,o=!1,s,a){const c=(s??Ap(e)?a3:s3)(t,r,i,e),d=u3(t,typeof e=="string",o,a),f=e!==w.Fragment?{...d,...c,ref:n}:{},{children:h}=t,p=w.useMemo(()=>Je(h)?h.get():h,[h]);return w.createElement(e,{...f,children:p})}function h3({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:p3(n,r,i,e),renderState:t()}}function p3(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=al(o[h]);let{initial:s,animate:a}=e;const l=Rc(e),c=$w(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const f=d?a:s;if(f&&typeof f!="boolean"&&!Pc(f)){const h=Array.isArray(f)?f:[f];for(let p=0;p<h.length;p++){const m=bp(e,h[p]);if(m){const{transitionEnd:y,transition:b,...g}=m;for(const x in g){let v=g[x];if(Array.isArray(v)){const k=d?v.length-1:0;v=v[k]}v!==null&&(i[x]=v)}for(const x in y)i[x]=y[x]}}}return i}const w2=e=>(t,n)=>{const r=w.useContext(Ac),i=w.useContext(Tc),o=()=>h3(e,t,r,i);return n?o():sp(o)},m3=w2({scrapeMotionValuesFromProps:jp,createRenderState:Rp}),g3=w2({scrapeMotionValuesFromProps:i2,createRenderState:b2}),y3=Symbol.for("motionComponentSymbol");function x3(e,t,n){const r=w.useRef(n);w.useInsertionEffect(()=>{r.current=n});const i=w.useRef(null);return w.useCallback(o=>{var a;o&&((a=e.onMount)==null||a.call(e,o)),t&&(o?t.mount(o):t.unmount());const s=r.current;if(typeof s=="function")if(o){const l=s(o);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[t])}const k2=w.createContext({});function Ii(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function v3(e,t,n,r,i,o){var v,k;const{visualElement:s}=w.useContext(Ac),a=w.useContext(y2),l=w.useContext(Tc),c=w.useContext(Pp),d=c.reducedMotion,f=c.skipAnimations,h=w.useRef(null),p=w.useRef(!1);r=r||a.renderer,!h.current&&r&&(h.current=r(e,{visualState:t,parent:s,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:d,skipAnimations:f,isSVG:o}),p.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));const m=h.current,y=w.useContext(k2);m&&!m.projection&&i&&(m.type==="html"||m.type==="svg")&&b3(h.current,n,i,y);const b=w.useRef(!1);w.useInsertionEffect(()=>{m&&b.current&&m.update(n,l)});const g=n[Aw],x=w.useRef(!!g&&typeof window<"u"&&!((v=window.MotionHandoffIsComplete)!=null&&v.call(window,g))&&((k=window.MotionHasOptimisedAnimation)==null?void 0:k.call(window,g)));return Yl(()=>{p.current=!0,m&&(b.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),x.current&&m.animationState&&m.animationState.animateChanges())}),w.useEffect(()=>{m&&(!x.current&&m.animationState&&m.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var _;(_=window.MotionHandoffMarkAsComplete)==null||_.call(window,g)}),x.current=!1),m.enteringChildren=void 0)}),m}function b3(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:d,layoutCrossfade:f}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:S2(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&Ii(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:f,layoutScroll:l,layoutRoot:c,layoutAnchor:d})}function S2(e){if(e)return e.options.allowProjection!==!1?e.projection:S2(e.parent)}function $u(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&t3(r);const o=n?n==="svg":Ap(e),s=o?g3:m3;function a(c,d){let f;const h={...w.useContext(Pp),...c,layoutId:w3(c)},{isStatic:p,isValidProp:m}=h,y=r3(c),b=s(c,p);if(!p&&typeof window<"u"){k3();const g=S3(h);f=g.MeasureLayout,y.visualElement=v3(e,b,h,i,g.ProjectionNode,o)}return u.jsxs(Ac.Provider,{value:y,children:[f&&y.visualElement?u.jsx(f,{visualElement:y.visualElement,...h}):null,f3(e,c,x3(b,y.visualElement,d),b,p,t,o,m)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=w.forwardRef(a);return l[y3]=e,l}function w3({layoutId:e}){const t=w.useContext(op).id;return t&&e!==void 0?t+"-"+e:e}function k3(e,t){w.useContext(y2).strict}function S3(e){const t=x2(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function C3(e,t){if(typeof Proxy>"u")return $u;const n=new Map,r=(o,s)=>$u(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,$u(s,void 0,e,t)),n.get(s))})}const E3=(e,t)=>t.isSVG??Ap(e)?new eA(t):new qR(t,{allowProjection:e!==w.Fragment});class _3 extends zr{constructor(t){super(t),t.animationState||(t.animationState=oA(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Pc(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let T3=0;class I3 extends zr{constructor(){super(...arguments),this.id=T3++,this.isExitComplete=!1}update(){var o;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:s,custom:a}=this.node.getProps();if(typeof s=="string"||typeof s=="object"&&s!==null&&!Array.isArray(s)){const l=ui(this.node,s,a);if(l){const{transition:c,transitionEnd:d,...f}=l;for(const h in f)(o=this.node.getValue(h))==null||o.jump(f[h])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const j3={animation:{Feature:_3},exit:{Feature:I3}};function ta(e){return{point:{x:e.pageX,y:e.pageY}}}const P3=e=>t=>Cp(t)&&e(t,ta(t));function fs(e,t,n,r){return Fs(e,t,P3(n),r)}const C2=({current:e})=>e?e.ownerDocument.defaultView:null,my=(e,t)=>Math.abs(e-t);function R3(e,t){const n=my(e.x,t.x),r=my(e.y,t.y);return Math.sqrt(n**2+r**2)}const gy=new Set(["auto","scroll"]);class E2{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Pa(this.lastRawMoveEventInfo,this.transformPagePoint));const m=Hu(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,b=R3(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!b)return;const{point:g}=m,{timestamp:x}=Qe;this.history.push({...g,timestamp:x});const{onStart:v,onMove:k}=this.handlers;y||(v&&v(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),k&&k(this.lastMoveEvent,m)},this.handlePointerMove=(m,y)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=y,this.lastMoveEventInfo=Pa(y,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(m,y)=>{this.end();const{onEnd:b,onSessionEnd:g,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Hu(m.type==="pointercancel"?this.lastMoveEventInfo:Pa(y,this.transformPagePoint),this.history);this.startEvent&&b&&b(m,v),g&&g(m,v)},!Cp(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const l=ta(t),c=Pa(l,this.transformPagePoint),{point:d}=c,{timestamp:f}=Qe;this.history=[{...d,timestamp:f}];const{onSessionStart:h}=n;h&&h(t,Hu(c,this.history));const p={passive:!0,capture:!0};this.removeListeners=Js(fs(this.contextWindow,"pointermove",this.handlePointerMove,p),fs(this.contextWindow,"pointerup",this.handlePointerUp,p),fs(this.contextWindow,"pointercancel",this.handlePointerUp,p)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(gy.has(r.overflowX)||gy.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),Se.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ar(this.updatePoint)}}function Pa(e,t){return t?{point:t(e.point)}:e}function yy(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Hu({point:e},t){return{point:e,delta:yy(e,_2(t)),offset:yy(e,A3(t)),velocity:N3(t,.1)}}function A3(e){return e[0]}function _2(e){return e[e.length-1]}function N3(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=_2(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ot(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>Ot(t)*2&&(r=e[1]);const o=Yt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function D3(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ke(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ke(n,e,r.max):Math.min(e,n)),e}function xy(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function M3(e,{top:t,left:n,bottom:r,right:i}){return{x:xy(e.x,n,i),y:xy(e.y,t,r)}}function vy(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function L3(e,t){return{x:vy(e.x,t.x),y:vy(e.y,t.y)}}function O3(e,t){let n=.5;const r=ht(e),i=ht(t);return i>r?n=Ls(t.min,t.max-r,e.min):r>i&&(n=Ls(e.min,e.max-i,t.min)),Pn(0,1,n)}function z3(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Df=.35;function F3(e=Df){return e===!1?e=0:e===!0&&(e=Df),{x:by(e,"left","right"),y:by(e,"top","bottom")}}function by(e,t,n){return{min:wy(e,t),max:wy(e,n)}}function wy(e,t){return typeof e=="number"?e:e[t]||0}const B3=new WeakMap;class V3{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$e(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=f=>{n&&this.snapToCursor(ta(f).point),this.stopAnimation()},s=(f,h)=>{const{drag:p,dragPropagation:m,onDragStart:y}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=pR(p),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),vn(g=>{let x=this.getAxisMotionValue(g).get()||0;if(In.test(x)){const{projection:v}=this.visualElement;if(v&&v.layout){const k=v.layout.layoutBox[g];k&&(x=ht(k)*(parseFloat(x)/100))}}this.originPoint[g]=x}),y&&Se.update(()=>y(f,h),!1,!0),Cf(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},a=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h;const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:y,onDrag:b}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:g}=h;if(m&&this.currentDirection===null){this.currentDirection=W3(g),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",h.point,g),this.updateAxis("y",h.point,g),this.visualElement.render(),b&&Se.update(()=>b(f,h),!1,!0)},l=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h,this.stop(f,h),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new E2(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:C2(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&Se.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ra(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=D3(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&Ii(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=M3(r.layoutBox,t):this.constraints=!1,this.elastic=F3(n),i!==this.constraints&&!Ii(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&vn(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=z3(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ii(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;i.root&&(i.root.scroll=void 0,i.root.updateScroll());const o=WR(r,i.root,this.visualElement.getTransformPagePoint());let s=L3(i.layout.layoutBox,o);if(n){const a=n(BR(s));this.hasMutatedConstraints=!!a,a&&(s=Kw(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=vn(d=>{if(!Ra(d,n,this.currentDirection))return;let f=l&&l[d]||{};(s===!0||s===d)&&(f={min:0,max:0});const h=i?200:1e6,p=i?40:1e7,m={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,m)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Cf(this.visualElement,t),r.start(vp(t,r,0,n,this.visualElement,!1))}stopAnimation(){vn(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps()[n];return i||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){vn(n=>{const{drag:r}=this.getProps();if(!Ra(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n],l=o.get()||0;o.set(t[n]-ke(s,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ii(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};vn(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=O3({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),vn(s=>{if(!Ra(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(ke(l,c,i[s]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;B3.set(this.visualElement,this);const t=this.visualElement.current,n=fs(t,"pointerdown",c=>{const{drag:d,dragListener:f=!0}=this.getProps(),h=c.target,p=h!==t&&bR(h);d&&f&&!p&&this.start(c)});let r;const i=()=>{const{dragConstraints:c}=this.getProps();Ii(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),r||(r=U3(t,c.current,()=>this.scalePositionWithinConstraints())))},{projection:o}=this.visualElement,s=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Se.read(i);const a=Fs(window,"resize",()=>this.scalePositionWithinConstraints()),l=o.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(vn(f=>{const h=this.getAxisMotionValue(f);h&&(this.originPoint[f]+=c[f].translate,h.set(h.get()+c[f].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),l&&l(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Df,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function ky(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function U3(e,t,n){const r=j0(e,ky(n)),i=j0(t,ky(n));return()=>{r(),i()}}function Ra(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function W3(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class $3 extends zr{constructor(t){super(t),this.removeGroupControls=qt,this.removeListeners=qt,this.controls=new V3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Gu=e=>(t,n)=>{e&&Se.update(()=>e(t,n),!1,!0)};class H3 extends zr{constructor(){super(...arguments),this.removePointerDownListener=qt}onPointerDown(t){this.session=new E2(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:C2(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Gu(t),onStart:Gu(n),onMove:Gu(r),onEnd:(o,s)=>{delete this.session,i&&Se.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=fs(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Yu=!1;class G3 extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),Yu&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ll.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,t.layoutDependency!==n&&s.setOptions({...s.options,layoutDependency:n}),Yu=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||Se.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),Sp.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Yu=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function T2(e){const[t,n]=g2(),r=w.useContext(op);return u.jsx(G3,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(k2),isPresent:t,safeToRemove:n})}const Y3={pan:{Feature:H3},drag:{Feature:$3,ProjectionNode:m2,MeasureLayout:T2}};function Sy(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&Se.postRender(()=>o(t,ta(t)))}class K3 extends zr{mount(){const{current:t}=this.node;t&&(this.unmount=gR(t,(n,r)=>(Sy(this.node,r,"Start"),i=>Sy(this.node,i,"End"))))}unmount(){}}class q3 extends zr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Js(Fs(this.node.current,"focus",()=>this.onFocus()),Fs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Cy(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&Se.postRender(()=>o(t,ta(t)))}class X3 extends zr{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=kR(t,(i,o)=>(Cy(this.node,o,"Start"),(s,{success:a})=>Cy(this.node,s,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Mf=new WeakMap,Ku=new WeakMap,Q3=e=>{const t=Mf.get(e.target);t&&t(e)},J3=e=>{e.forEach(Q3)};function Z3({root:e,...t}){const n=e||document;Ku.has(n)||Ku.set(n,{});const r=Ku.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(J3,{root:e,...t})),r[i]}function e6(e,t,n){const r=Z3(t);return Mf.set(e,n),r.observe(e),()=>{Mf.delete(e),r.unobserve(e)}}const t6={some:0,all:1};class n6 extends zr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:t6[i]},a=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,o&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:f,onViewportLeave:h}=this.node.getProps(),p=d?f:h;p&&p(c)};this.stopObserver=e6(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(r6(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function r6({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const i6={inView:{Feature:n6},tap:{Feature:X3},focus:{Feature:q3},hover:{Feature:K3}},o6={layout:{ProjectionNode:m2,MeasureLayout:T2}},s6={...j3,...i6,...Y3,...o6},Aa=C3(s6,E3);function a6(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const l6=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,c6=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,u6={};function Ey(e,t){return(u6.jsx?c6:l6).test(e)}const d6=/[ \t\n\f\r]/g;function f6(e){return typeof e=="object"?e.type==="text"?_y(e.value):!1:_y(e)}function _y(e){return e.replace(d6,"")===""}class na{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}na.prototype.normal={};na.prototype.property={};na.prototype.space=void 0;function I2(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new na(n,r,t)}function Lf(e){return e.toLowerCase()}class jt{constructor(t,n){this.attribute=n,this.property=t}}jt.prototype.attribute="";jt.prototype.booleanish=!1;jt.prototype.boolean=!1;jt.prototype.commaOrSpaceSeparated=!1;jt.prototype.commaSeparated=!1;jt.prototype.defined=!1;jt.prototype.mustUseProperty=!1;jt.prototype.number=!1;jt.prototype.overloadedBoolean=!1;jt.prototype.property="";jt.prototype.spaceSeparated=!1;jt.prototype.space=void 0;let h6=0;const te=wi(),Be=wi(),Of=wi(),O=wi(),be=wi(),di=wi(),At=wi();function wi(){return 2**++h6}const zf=Object.freeze(Object.defineProperty({__proto__:null,boolean:te,booleanish:Be,commaOrSpaceSeparated:At,commaSeparated:di,number:O,overloadedBoolean:Of,spaceSeparated:be},Symbol.toStringTag,{value:"Module"})),qu=Object.keys(zf);class Np extends jt{constructor(t,n,r,i){let o=-1;if(super(t,n),Ty(this,"space",i),typeof r=="number")for(;++o<qu.length;){const s=qu[o];Ty(this,qu[o],(r&zf[s])===zf[s])}}}Np.prototype.defined=!0;function Ty(e,t,n){n&&(e[t]=n)}function To(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Np(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Lf(r)]=r,n[Lf(o.attribute)]=r}return new na(t,n,e.space)}const j2=To({properties:{ariaActiveDescendant:null,ariaAtomic:Be,ariaAutoComplete:null,ariaBusy:Be,ariaChecked:Be,ariaColCount:O,ariaColIndex:O,ariaColSpan:O,ariaControls:be,ariaCurrent:null,ariaDescribedBy:be,ariaDetails:null,ariaDisabled:Be,ariaDropEffect:be,ariaErrorMessage:null,ariaExpanded:Be,ariaFlowTo:be,ariaGrabbed:Be,ariaHasPopup:null,ariaHidden:Be,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:be,ariaLevel:O,ariaLive:null,ariaModal:Be,ariaMultiLine:Be,ariaMultiSelectable:Be,ariaOrientation:null,ariaOwns:be,ariaPlaceholder:null,ariaPosInSet:O,ariaPressed:Be,ariaReadOnly:Be,ariaRelevant:null,ariaRequired:Be,ariaRoleDescription:be,ariaRowCount:O,ariaRowIndex:O,ariaRowSpan:O,ariaSelected:Be,ariaSetSize:O,ariaSort:null,ariaValueMax:O,ariaValueMin:O,ariaValueNow:O,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function P2(e,t){return t in e?e[t]:t}function R2(e,t){return P2(e,t.toLowerCase())}const p6=To({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:di,acceptCharset:be,accessKey:be,action:null,allow:null,allowFullScreen:te,allowPaymentRequest:te,allowUserMedia:te,alpha:te,alt:null,as:null,async:te,autoCapitalize:null,autoComplete:be,autoFocus:te,autoPlay:te,blocking:be,capture:null,charSet:null,checked:te,cite:null,className:be,closedBy:null,colorSpace:null,cols:O,colSpan:O,command:null,commandFor:null,content:null,contentEditable:Be,controls:te,controlsList:be,coords:O|di,crossOrigin:null,data:null,dateTime:null,decoding:null,default:te,defer:te,dir:null,dirName:null,disabled:te,download:Of,draggable:Be,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:te,formTarget:null,headers:be,height:O,hidden:Of,high:O,href:null,hrefLang:null,htmlFor:be,httpEquiv:be,id:null,imageSizes:null,imageSrcSet:null,inert:te,inputMode:null,integrity:null,is:null,isMap:te,itemId:null,itemProp:be,itemRef:be,itemScope:te,itemType:be,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:te,low:O,manifest:null,max:null,maxLength:O,media:null,method:null,min:null,minLength:O,multiple:te,muted:te,name:null,nonce:null,noModule:te,noValidate:te,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:te,optimum:O,pattern:null,ping:be,placeholder:null,playsInline:te,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:te,referrerPolicy:null,rel:be,required:te,reversed:te,rows:O,rowSpan:O,sandbox:be,scope:null,scoped:te,seamless:te,selected:te,shadowRootClonable:te,shadowRootCustomElementRegistry:te,shadowRootDelegatesFocus:te,shadowRootMode:null,shadowRootSerializable:te,shape:null,size:O,sizes:null,slot:null,span:O,spellCheck:Be,src:null,srcDoc:null,srcLang:null,srcSet:null,start:O,step:null,style:null,tabIndex:O,target:null,title:null,translate:null,type:null,typeMustMatch:te,useMap:null,value:Be,width:O,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:be,axis:null,background:null,bgColor:null,border:O,borderColor:null,bottomMargin:O,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:te,declare:te,event:null,face:null,frame:null,frameBorder:null,hSpace:O,leftMargin:O,link:null,longDesc:null,lowSrc:null,marginHeight:O,marginWidth:O,noResize:te,noHref:te,noShade:te,noWrap:te,object:null,profile:null,prompt:null,rev:null,rightMargin:O,rules:null,scheme:null,scrolling:Be,standby:null,summary:null,text:null,topMargin:O,valueType:null,version:null,vAlign:null,vLink:null,vSpace:O,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:te,disablePictureInPicture:te,disableRemotePlayback:te,exportParts:di,part:be,prefix:null,property:null,results:O,security:null,unselectable:null},space:"html",transform:R2}),m6=To({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:At,accentHeight:O,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:O,amplitude:O,arabicForm:null,ascent:O,attributeName:null,attributeType:null,azimuth:O,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:O,by:null,calcMode:null,capHeight:O,className:be,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:O,diffuseConstant:O,direction:null,display:null,dur:null,divisor:O,dominantBaseline:null,download:te,dx:null,dy:null,edgeMode:null,editable:null,elevation:O,enableBackground:null,end:null,event:null,exponent:O,externalResourcesRequired:null,fill:null,fillOpacity:O,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:di,g2:di,glyphName:di,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:O,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:O,horizOriginX:O,horizOriginY:O,id:null,ideographic:O,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:O,k:O,k1:O,k2:O,k3:O,k4:O,kernelMatrix:At,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:O,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:O,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:O,overlineThickness:O,paintOrder:null,panose1:null,path:null,pathLength:O,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:be,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:O,pointsAtY:O,pointsAtZ:O,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:At,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:At,rev:At,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:At,requiredFeatures:At,requiredFonts:At,requiredFormats:At,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:O,specularExponent:O,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:O,strikethroughThickness:O,string:null,stroke:null,strokeDashArray:At,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:O,strokeOpacity:O,strokeWidth:null,style:null,surfaceScale:O,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:At,tabIndex:O,tableValues:null,target:null,targetX:O,targetY:O,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:At,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:O,underlineThickness:O,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:O,values:null,vAlphabetic:O,vMathematical:O,vectorEffect:null,vHanging:O,vIdeographic:O,version:null,vertAdvY:O,vertOriginX:O,vertOriginY:O,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:O,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:P2}),A2=To({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),N2=To({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:R2}),D2=To({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),g6={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},y6=/[A-Z]/g,Iy=/-[a-z]/g,x6=/^data[-\w.:]+$/i;function v6(e,t){const n=Lf(t);let r=t,i=jt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&x6.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Iy,w6);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Iy.test(o)){let s=o.replace(y6,b6);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}i=Np}return new i(r,t)}function b6(e){return"-"+e.toLowerCase()}function w6(e){return e.charAt(1).toUpperCase()}const k6=I2([j2,p6,A2,N2,D2],"html"),Dp=I2([j2,m6,A2,N2,D2],"svg");function S6(e){return e.join(" ").trim()}var Mp={},jy=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,C6=/\n/g,E6=/^\s*/,_6=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,T6=/^:\s*/,I6=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,j6=/^[;\s]*/,P6=/^\s+|\s+$/g,R6=`
`,Py="/",Ry="*",Zr="",A6="comment",N6="declaration";function D6(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(m){var y=m.match(C6);y&&(n+=y.length);var b=m.lastIndexOf(R6);r=~b?m.length-b:r+m.length}function o(){var m={line:n,column:r};return function(y){return y.position=new s(m),c(),y}}function s(m){this.start=m,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function a(m){var y=new Error(t.source+":"+n+":"+r+": "+m);if(y.reason=m,y.filename=t.source,y.line=n,y.column=r,y.source=e,!t.silent)throw y}function l(m){var y=m.exec(e);if(y){var b=y[0];return i(b),e=e.slice(b.length),y}}function c(){l(E6)}function d(m){var y;for(m=m||[];y=f();)y!==!1&&m.push(y);return m}function f(){var m=o();if(!(Py!=e.charAt(0)||Ry!=e.charAt(1))){for(var y=2;Zr!=e.charAt(y)&&(Ry!=e.charAt(y)||Py!=e.charAt(y+1));)++y;if(y+=2,Zr===e.charAt(y-1))return a("End of comment missing");var b=e.slice(2,y-2);return r+=2,i(b),e=e.slice(y),r+=2,m({type:A6,comment:b})}}function h(){var m=o(),y=l(_6);if(y){if(f(),!l(T6))return a("property missing ':'");var b=l(I6),g=m({type:N6,property:Ay(y[0].replace(jy,Zr)),value:b?Ay(b[0].replace(jy,Zr)):Zr});return l(j6),g}}function p(){var m=[];d(m);for(var y;y=h();)y!==!1&&(m.push(y),d(m));return m}return c(),p()}function Ay(e){return e?e.replace(P6,Zr):Zr}var M6=D6,L6=fl&&fl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Mp,"__esModule",{value:!0});Mp.default=z6;const O6=L6(M6);function z6(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,O6.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:s,value:a}=o;i?t(s,a,o):a&&(n=n||{},n[s]=a)}),n}var Nc={};Object.defineProperty(Nc,"__esModule",{value:!0});Nc.camelCase=void 0;var F6=/^--[a-zA-Z0-9_-]+$/,B6=/-([a-z])/g,V6=/^[^-]+$/,U6=/^-(webkit|moz|ms|o|khtml)-/,W6=/^-(ms)-/,$6=function(e){return!e||V6.test(e)||F6.test(e)},H6=function(e,t){return t.toUpperCase()},Ny=function(e,t){return"".concat(t,"-")},G6=function(e,t){return t===void 0&&(t={}),$6(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(W6,Ny):e=e.replace(U6,Ny),e.replace(B6,H6))};Nc.camelCase=G6;var Y6=fl&&fl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},K6=Y6(Mp),q6=Nc;function Ff(e,t){var n={};return!e||typeof e!="string"||(0,K6.default)(e,function(r,i){r&&i&&(n[(0,q6.camelCase)(r,t)]=i)}),n}Ff.default=Ff;var X6=Ff;const Q6=Kf(X6),M2=L2("end"),Lp=L2("start");function L2(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function J6(e){const t=Lp(e),n=M2(e);if(t&&n)return{start:t,end:n}}function hs(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Dy(e.position):"start"in e||"end"in e?Dy(e):"line"in e||"column"in e?Bf(e):""}function Bf(e){return My(e&&e.line)+":"+My(e&&e.column)}function Dy(e){return Bf(e&&e.start)+"-"+Bf(e&&e.end)}function My(e){return e&&typeof e=="number"?e:1}class at extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(s=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?o.ruleId=r:(o.source=r.slice(0,l),o.ruleId=r.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=hs(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}at.prototype.file="";at.prototype.name="";at.prototype.reason="";at.prototype.message="";at.prototype.stack="";at.prototype.column=void 0;at.prototype.line=void 0;at.prototype.ancestors=void 0;at.prototype.cause=void 0;at.prototype.fatal=void 0;at.prototype.place=void 0;at.prototype.ruleId=void 0;at.prototype.source=void 0;const Op={}.hasOwnProperty,Z6=new Map,eN=/[A-Z]/g,tN=new Set(["table","tbody","thead","tfoot","tr"]),nN=new Set(["td","th"]),O2="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function rN(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=dN(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=uN(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Dp:k6,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=z2(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function z2(e,t,n){if(t.type==="element")return iN(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return oN(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return aN(e,t,n);if(t.type==="mdxjsEsm")return sN(e,t);if(t.type==="root")return lN(e,t,n);if(t.type==="text")return cN(e,t)}function iN(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Dp,e.schema=i),e.ancestors.push(t);const o=B2(e,t.tagName,!1),s=fN(e,t);let a=Fp(e,t);return tN.has(t.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!f6(l):!0})),F2(e,s,o,t),zp(s,a),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function oN(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Bs(e,t.position)}function sN(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Bs(e,t.position)}function aN(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Dp,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:B2(e,t.name,!0),s=hN(e,t),a=Fp(e,t);return F2(e,s,o,t),zp(s,a),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function lN(e,t,n){const r={};return zp(r,Fp(e,t)),e.create(t,e.Fragment,r,n)}function cN(e,t){return t.value}function F2(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function zp(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function uN(e,t,n){return r;function r(i,o,s,a){const c=Array.isArray(s.children)?n:t;return a?c(o,s,a):c(o,s)}}function dN(e,t){return n;function n(r,i,o,s){const a=Array.isArray(o.children),l=Lp(r);return t(i,o,s,a,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function fN(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Op.call(t.properties,i)){const o=pN(e,i,t.properties[i]);if(o){const[s,a]=o;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&nN.has(t.tagName)?r=a:n[s]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function hN(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Bs(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else Bs(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function Fp(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:Z6;for(;++r<t.children.length;){const o=t.children[r];let s;if(e.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const c=i.get(l)||0;s=l+"-"+c,i.set(l,c+1)}}const a=z2(e,o,s);a!==void 0&&n.push(a)}return n}function pN(e,t,n){const r=v6(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?a6(n):S6(n)),r.property==="style"){let i=typeof n=="object"?n:mN(e,String(n));return e.stylePropertyNameCase==="css"&&(i=gN(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?g6[r.property]||r.property:r.attribute,n]}}function mN(e,t){try{return Q6(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new at("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=O2+"#cannot-parse-style-attribute",i}}function B2(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,s;for(;++o<i.length;){const a=Ey(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=s}else r=Ey(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Op.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Bs(e)}function Bs(e,t){const n=new at("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=O2+"#cannot-handle-mdx-estrees-without-createevaluater",n}function gN(e){const t={};let n;for(n in e)Op.call(e,n)&&(t[yN(n)]=e[n]);return t}function yN(e){let t=e.replace(eN,xN);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function xN(e){return"-"+e.toLowerCase()}const Xu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},vN={};function bN(e,t){const n=vN,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return V2(e,r,i)}function V2(e,t,n){if(wN(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Ly(e.children,t,n)}return Array.isArray(e)?Ly(e,t,n):""}function Ly(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=V2(e[i],t,n);return r.join("")}function wN(e){return!!(e&&typeof e=="object")}const Oy=document.createElement("i");function Bp(e){const t="&"+e+";";Oy.innerHTML=t;const n=Oy.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Rn(e,t,n,r){const i=e.length;let o=0,s;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)s=Array.from(r),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);o<r.length;)s=r.slice(o,o+1e4),s.unshift(t,0),e.splice(...s),o+=1e4,t+=1e4}function Ht(e,t){return e.length>0?(Rn(e,e.length,0,t),e):t}const zy={}.hasOwnProperty;function kN(e){const t={};let n=-1;for(;++n<e.length;)SN(t,e[n]);return t}function SN(e,t){let n;for(n in t){const i=(zy.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let s;if(o)for(s in o){zy.call(i,s)||(i[s]=[]);const a=o[s];CN(i[s],Array.isArray(a)?a:a?[a]:[])}}}function CN(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Rn(e,0,0,r)}function U2(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ro(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Cn=Fr(/[A-Za-z]/),Mt=Fr(/[\dA-Za-z]/),EN=Fr(/[#-'*+\--9=?A-Z^-~]/);function Vf(e){return e!==null&&(e<32||e===127)}const Uf=Fr(/\d/),_N=Fr(/[\dA-Fa-f]/),TN=Fr(/[!-/:-@[-`{-~]/);function ee(e){return e!==null&&e<-2}function It(e){return e!==null&&(e<0||e===32)}function ge(e){return e===-2||e===-1||e===32}const IN=Fr(new RegExp("\\p{P}|\\p{S}","u")),jN=Fr(/\s/);function Fr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Io(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let s="";if(o===37&&Mt(e.charCodeAt(n+1))&&Mt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),i=1):s="�"}else s=String.fromCharCode(o);s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+i+1,s=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Ee(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return ge(l)?(e.enter(n),a(l)):t(l)}function a(l){return ge(l)&&o++<i?(e.consume(l),a):(e.exit(n),t(l))}}const PN={tokenize:RN};function RN(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Ee(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return ee(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),s)}}const AN={tokenize:NN},Fy={tokenize:DN};function NN(e){const t=this,n=[];let r=0,i,o,s;return a;function a(v){if(r<n.length){const k=n[r];return t.containerState=k[1],e.attempt(k[0].continuation,l,c)(v)}return c(v)}function l(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const k=t.events.length;let _=k,C;for(;_--;)if(t.events[_][0]==="exit"&&t.events[_][1].type==="chunkFlow"){C=t.events[_][1].end;break}g(r);let T=k;for(;T<t.events.length;)t.events[T][1].end={...C},T++;return Rn(t.events,_+1,0,t.events.slice(k)),t.events.length=T,c(v)}return a(v)}function c(v){if(r===n.length){if(!i)return h(v);if(i.currentConstruct&&i.currentConstruct.concrete)return m(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Fy,d,f)(v)}function d(v){return i&&x(),g(r),h(v)}function f(v){return t.parser.lazy[t.now().line]=r!==n.length,s=t.now().offset,m(v)}function h(v){return t.containerState={},e.attempt(Fy,p,m)(v)}function p(v){return r++,n.push([t.currentConstruct,t.containerState]),h(v)}function m(v){if(v===null){i&&x(),g(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),y(v)}function y(v){if(v===null){b(e.exit("chunkFlow"),!0),g(0),e.consume(v);return}return ee(v)?(e.consume(v),b(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(v),y)}function b(v,k){const _=t.sliceStream(v);if(k&&_.push(null),v.previous=o,o&&(o.next=v),o=v,i.defineSkip(v.start),i.write(_),t.parser.lazy[v.start.line]){let C=i.events.length;for(;C--;)if(i.events[C][1].start.offset<s&&(!i.events[C][1].end||i.events[C][1].end.offset>s))return;const T=t.events.length;let I=T,A,P;for(;I--;)if(t.events[I][0]==="exit"&&t.events[I][1].type==="chunkFlow"){if(A){P=t.events[I][1].end;break}A=!0}for(g(r),C=T;C<t.events.length;)t.events[C][1].end={...P},C++;Rn(t.events,I+1,0,t.events.slice(T)),t.events.length=C}}function g(v){let k=n.length;for(;k-- >v;){const _=n[k];t.containerState=_[1],_[0].exit.call(t,e)}n.length=v}function x(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function DN(e,t,n){return Ee(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function By(e){if(e===null||It(e)||jN(e))return 1;if(IN(e))return 2}function Vp(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Wf={name:"attention",resolveAll:MN,tokenize:LN};function MN(e,t){let n=-1,r,i,o,s,a,l,c,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const f={...e[r][1].end},h={...e[n][1].start};Vy(f,-l),Vy(h,l),s={type:l>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:h},o={type:l>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[r][1].end={...s.start},e[n][1].start={...a.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=Ht(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=Ht(c,[["enter",i,t],["enter",s,t],["exit",s,t],["enter",o,t]]),c=Ht(c,Vp(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=Ht(c,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,c=Ht(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Rn(e,r-1,n-r+3,c),n=r+c.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function LN(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=By(r);let o;return s;function s(l){return o=l,e.enter("attentionSequence"),a(l)}function a(l){if(l===o)return e.consume(l),a;const c=e.exit("attentionSequence"),d=By(l),f=!d||d===2&&i||n.includes(l),h=!i||i===2&&d||n.includes(r);return c._open=!!(o===42?f:f&&(i||!h)),c._close=!!(o===42?h:h&&(d||!f)),t(l)}}function Vy(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const ON={name:"autolink",tokenize:zN};function zN(e,t,n){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return Cn(p)?(e.consume(p),s):p===64?n(p):c(p)}function s(p){return p===43||p===45||p===46||Mt(p)?(r=1,a(p)):c(p)}function a(p){return p===58?(e.consume(p),r=0,l):(p===43||p===45||p===46||Mt(p))&&r++<32?(e.consume(p),a):(r=0,c(p))}function l(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||Vf(p)?n(p):(e.consume(p),l)}function c(p){return p===64?(e.consume(p),d):EN(p)?(e.consume(p),c):n(p)}function d(p){return Mt(p)?f(p):n(p)}function f(p){return p===46?(e.consume(p),r=0,d):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):h(p)}function h(p){if((p===45||Mt(p))&&r++<63){const m=p===45?h:f;return e.consume(p),m}return n(p)}}const Dc={partial:!0,tokenize:FN};function FN(e,t,n){return r;function r(o){return ge(o)?Ee(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||ee(o)?t(o):n(o)}}const W2={continuation:{tokenize:VN},exit:UN,name:"blockQuote",tokenize:BN};function BN(e,t,n){const r=this;return i;function i(s){if(s===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return n(s)}function o(s){return ge(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function VN(e,t,n){const r=this;return i;function i(s){return ge(s)?Ee(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(W2,t,n)(s)}}function UN(e){e.exit("blockQuote")}const $2={name:"characterEscape",tokenize:WN};function WN(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return TN(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const H2={name:"characterReference",tokenize:$N};function $N(e,t,n){const r=this;let i=0,o,s;return a;function a(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),l}function l(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,s=Mt,d(f))}function c(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=_N,d):(e.enter("characterReferenceValue"),o=7,s=Uf,d(f))}function d(f){if(f===59&&i){const h=e.exit("characterReferenceValue");return s===Mt&&!Bp(r.sliceSerialize(h))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(f)&&i++<o?(e.consume(f),d):n(f)}}const Uy={partial:!0,tokenize:GN},Wy={concrete:!0,name:"codeFenced",tokenize:HN};function HN(e,t,n){const r=this,i={partial:!0,tokenize:_};let o=0,s=0,a;return l;function l(C){return c(C)}function c(C){const T=r.events[r.events.length-1];return o=T&&T[1].type==="linePrefix"?T[2].sliceSerialize(T[1],!0).length:0,a=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(C)}function d(C){return C===a?(s++,e.consume(C),d):s<3?n(C):(e.exit("codeFencedFenceSequence"),ge(C)?Ee(e,f,"whitespace")(C):f(C))}function f(C){return C===null||ee(C)?(e.exit("codeFencedFence"),r.interrupt?t(C):e.check(Uy,y,k)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(C))}function h(C){return C===null||ee(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(C)):ge(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Ee(e,p,"whitespace")(C)):C===96&&C===a?n(C):(e.consume(C),h)}function p(C){return C===null||ee(C)?f(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(C))}function m(C){return C===null||ee(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(C)):C===96&&C===a?n(C):(e.consume(C),m)}function y(C){return e.attempt(i,k,b)(C)}function b(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),g}function g(C){return o>0&&ge(C)?Ee(e,x,"linePrefix",o+1)(C):x(C)}function x(C){return C===null||ee(C)?e.check(Uy,y,k)(C):(e.enter("codeFlowValue"),v(C))}function v(C){return C===null||ee(C)?(e.exit("codeFlowValue"),x(C)):(e.consume(C),v)}function k(C){return e.exit("codeFenced"),t(C)}function _(C,T,I){let A=0;return P;function P(H){return C.enter("lineEnding"),C.consume(H),C.exit("lineEnding"),N}function N(H){return C.enter("codeFencedFence"),ge(H)?Ee(C,D,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):D(H)}function D(H){return H===a?(C.enter("codeFencedFenceSequence"),F(H)):I(H)}function F(H){return H===a?(A++,C.consume(H),F):A>=s?(C.exit("codeFencedFenceSequence"),ge(H)?Ee(C,$,"whitespace")(H):$(H)):I(H)}function $(H){return H===null||ee(H)?(C.exit("codeFencedFence"),T(H)):I(H)}}}function GN(e,t,n){const r=this;return i;function i(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}const Qu={name:"codeIndented",tokenize:KN},YN={partial:!0,tokenize:qN};function KN(e,t,n){const r=this;return i;function i(c){return e.enter("codeIndented"),Ee(e,o,"linePrefix",5)(c)}function o(c){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?s(c):n(c)}function s(c){return c===null?l(c):ee(c)?e.attempt(YN,s,l)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||ee(c)?(e.exit("codeFlowValue"),s(c)):(e.consume(c),a)}function l(c){return e.exit("codeIndented"),t(c)}}function qN(e,t,n){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?n(s):ee(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):Ee(e,o,"linePrefix",5)(s)}function o(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):ee(s)?i(s):n(s)}}const XN={name:"codeText",previous:JN,resolve:QN,tokenize:ZN};function QN(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function JN(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ZN(e,t,n){let r=0,i,o;return s;function s(f){return e.enter("codeText"),e.enter("codeTextSequence"),a(f)}function a(f){return f===96?(e.consume(f),r++,a):(e.exit("codeTextSequence"),l(f))}function l(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),l):f===96?(o=e.enter("codeTextSequence"),i=0,d(f)):ee(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),l):(e.enter("codeTextData"),c(f))}function c(f){return f===null||f===32||f===96||ee(f)?(e.exit("codeTextData"),l(f)):(e.consume(f),c)}function d(f){return f===96?(e.consume(f),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(o.type="codeTextData",c(f))}}class eD{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&$o(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),$o(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),$o(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);$o(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);$o(this.left,n.reverse())}}}function $o(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function G2(e){const t={};let n=-1,r,i,o,s,a,l,c;const d=new eD(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,tD(d,n)),n=t[n],c=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(s=d.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},a=d.slice(i,n),a.unshift(r),d.splice(i,n-i+1,a))}}return Rn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function tD(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let s=n._tokenizer;s||(s=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,l=[],c={};let d,f,h=-1,p=n,m=0,y=0;const b=[y];for(;p;){for(;e.get(++i)[1]!==p;);o.push(i),p._tokenizer||(d=r.sliceStream(p),p.next||d.push(null),f&&s.defineSkip(p.start),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(d),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),f=p,p=p.next}for(p=n;++h<a.length;)a[h][0]==="exit"&&a[h-1][0]==="enter"&&a[h][1].type===a[h-1][1].type&&a[h][1].start.line!==a[h][1].end.line&&(y=h+1,b.push(y),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(s.events=[],p?(p._tokenizer=void 0,p.previous=void 0):b.pop(),h=b.length;h--;){const g=a.slice(b[h],b[h+1]),x=o.pop();l.push([x,x+g.length-1]),e.splice(x,2,g)}for(l.reverse(),h=-1;++h<l.length;)c[m+l[h][0]]=m+l[h][1],m+=l[h][1]-l[h][0]-1;return c}const nD={resolve:iD,tokenize:oD},rD={partial:!0,tokenize:sD};function iD(e){return G2(e),e}function oD(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):ee(a)?e.check(rD,s,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function s(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function sD(e,t,n){const r=this;return i;function i(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),Ee(e,o,"linePrefix")}function o(s){if(s===null||ee(s))return n(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):e.interrupt(r.parser.constructs.flow,n,t)(s)}}function Y2(e,t,n,r,i,o,s,a,l){const c=l||Number.POSITIVE_INFINITY;let d=0;return f;function f(g){return g===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(g),e.exit(o),h):g===null||g===32||g===41||Vf(g)?n(g):(e.enter(r),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),y(g))}function h(g){return g===62?(e.enter(o),e.consume(g),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),p(g))}function p(g){return g===62?(e.exit("chunkString"),e.exit(a),h(g)):g===null||g===60||ee(g)?n(g):(e.consume(g),g===92?m:p)}function m(g){return g===60||g===62||g===92?(e.consume(g),p):p(g)}function y(g){return!d&&(g===null||g===41||It(g))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(r),t(g)):d<c&&g===40?(e.consume(g),d++,y):g===41?(e.consume(g),d--,y):g===null||g===32||g===40||Vf(g)?n(g):(e.consume(g),g===92?b:y)}function b(g){return g===40||g===41||g===92?(e.consume(g),y):y(g)}}function K2(e,t,n,r,i,o){const s=this;let a=0,l;return c;function c(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(o),d}function d(p){return a>999||p===null||p===91||p===93&&!l||p===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(p):p===93?(e.exit(o),e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):ee(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===null||p===91||p===93||ee(p)||a++>999?(e.exit("chunkString"),d(p)):(e.consume(p),l||(l=!ge(p)),p===92?h:f)}function h(p){return p===91||p===92||p===93?(e.consume(p),a++,f):f(p)}}function q2(e,t,n,r,i,o){let s;return a;function a(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),s=h===40?41:h,l):n(h)}function l(h){return h===s?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):(e.enter(o),c(h))}function c(h){return h===s?(e.exit(o),l(s)):h===null?n(h):ee(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),Ee(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===s||h===null||ee(h)?(e.exit("chunkString"),c(h)):(e.consume(h),h===92?f:d)}function f(h){return h===s||h===92?(e.consume(h),d):d(h)}}function ps(e,t){let n;return r;function r(i){return ee(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ge(i)?Ee(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const aD={name:"definition",tokenize:cD},lD={partial:!0,tokenize:uD};function cD(e,t,n){const r=this;let i;return o;function o(p){return e.enter("definition"),s(p)}function s(p){return K2.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return i=ro(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),l):n(p)}function l(p){return It(p)?ps(e,c)(p):c(p)}function c(p){return Y2(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function d(p){return e.attempt(lD,f,f)(p)}function f(p){return ge(p)?Ee(e,h,"whitespace")(p):h(p)}function h(p){return p===null||ee(p)?(e.exit("definition"),r.parser.defined.push(i),t(p)):n(p)}}function uD(e,t,n){return r;function r(a){return It(a)?ps(e,i)(a):n(a)}function i(a){return q2(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return ge(a)?Ee(e,s,"whitespace")(a):s(a)}function s(a){return a===null||ee(a)?t(a):n(a)}}const dD={name:"hardBreakEscape",tokenize:fD};function fD(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return ee(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const hD={name:"headingAtx",resolve:pD,tokenize:mD};function pD(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Rn(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function mD(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),s(d)}function s(d){return d===35&&r++<6?(e.consume(d),s):d===null||It(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||ee(d)?(e.exit("atxHeading"),t(d)):ge(d)?Ee(e,a,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),a(d))}function c(d){return d===null||d===35||It(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),c)}}const gD=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],$y=["pre","script","style","textarea"],yD={concrete:!0,name:"htmlFlow",resolveTo:bD,tokenize:wD},xD={partial:!0,tokenize:SD},vD={partial:!0,tokenize:kD};function bD(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function wD(e,t,n){const r=this;let i,o,s,a,l;return c;function c(E){return d(E)}function d(E){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(E),f}function f(E){return E===33?(e.consume(E),h):E===47?(e.consume(E),o=!0,y):E===63?(e.consume(E),i=3,r.interrupt?t:S):Cn(E)?(e.consume(E),s=String.fromCharCode(E),b):n(E)}function h(E){return E===45?(e.consume(E),i=2,p):E===91?(e.consume(E),i=5,a=0,m):Cn(E)?(e.consume(E),i=4,r.interrupt?t:S):n(E)}function p(E){return E===45?(e.consume(E),r.interrupt?t:S):n(E)}function m(E){const ye="CDATA[";return E===ye.charCodeAt(a++)?(e.consume(E),a===ye.length?r.interrupt?t:D:m):n(E)}function y(E){return Cn(E)?(e.consume(E),s=String.fromCharCode(E),b):n(E)}function b(E){if(E===null||E===47||E===62||It(E)){const ye=E===47,Pe=s.toLowerCase();return!ye&&!o&&$y.includes(Pe)?(i=1,r.interrupt?t(E):D(E)):gD.includes(s.toLowerCase())?(i=6,ye?(e.consume(E),g):r.interrupt?t(E):D(E)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(E):o?x(E):v(E))}return E===45||Mt(E)?(e.consume(E),s+=String.fromCharCode(E),b):n(E)}function g(E){return E===62?(e.consume(E),r.interrupt?t:D):n(E)}function x(E){return ge(E)?(e.consume(E),x):P(E)}function v(E){return E===47?(e.consume(E),P):E===58||E===95||Cn(E)?(e.consume(E),k):ge(E)?(e.consume(E),v):P(E)}function k(E){return E===45||E===46||E===58||E===95||Mt(E)?(e.consume(E),k):_(E)}function _(E){return E===61?(e.consume(E),C):ge(E)?(e.consume(E),_):v(E)}function C(E){return E===null||E===60||E===61||E===62||E===96?n(E):E===34||E===39?(e.consume(E),l=E,T):ge(E)?(e.consume(E),C):I(E)}function T(E){return E===l?(e.consume(E),l=null,A):E===null||ee(E)?n(E):(e.consume(E),T)}function I(E){return E===null||E===34||E===39||E===47||E===60||E===61||E===62||E===96||It(E)?_(E):(e.consume(E),I)}function A(E){return E===47||E===62||ge(E)?v(E):n(E)}function P(E){return E===62?(e.consume(E),N):n(E)}function N(E){return E===null||ee(E)?D(E):ge(E)?(e.consume(E),N):n(E)}function D(E){return E===45&&i===2?(e.consume(E),q):E===60&&i===1?(e.consume(E),re):E===62&&i===4?(e.consume(E),X):E===63&&i===3?(e.consume(E),S):E===93&&i===5?(e.consume(E),U):ee(E)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(xD,ne,F)(E)):E===null||ee(E)?(e.exit("htmlFlowData"),F(E)):(e.consume(E),D)}function F(E){return e.check(vD,$,ne)(E)}function $(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),H}function H(E){return E===null||ee(E)?F(E):(e.enter("htmlFlowData"),D(E))}function q(E){return E===45?(e.consume(E),S):D(E)}function re(E){return E===47?(e.consume(E),s="",M):D(E)}function M(E){if(E===62){const ye=s.toLowerCase();return $y.includes(ye)?(e.consume(E),X):D(E)}return Cn(E)&&s.length<8?(e.consume(E),s+=String.fromCharCode(E),M):D(E)}function U(E){return E===93?(e.consume(E),S):D(E)}function S(E){return E===62?(e.consume(E),X):E===45&&i===2?(e.consume(E),S):D(E)}function X(E){return E===null||ee(E)?(e.exit("htmlFlowData"),ne(E)):(e.consume(E),X)}function ne(E){return e.exit("htmlFlow"),t(E)}}function kD(e,t,n){const r=this;return i;function i(s){return ee(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):n(s)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}function SD(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Dc,t,n)}}const CD={name:"htmlText",tokenize:ED};function ED(e,t,n){const r=this;let i,o,s;return a;function a(S){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(S),l}function l(S){return S===33?(e.consume(S),c):S===47?(e.consume(S),_):S===63?(e.consume(S),v):Cn(S)?(e.consume(S),I):n(S)}function c(S){return S===45?(e.consume(S),d):S===91?(e.consume(S),o=0,m):Cn(S)?(e.consume(S),x):n(S)}function d(S){return S===45?(e.consume(S),p):n(S)}function f(S){return S===null?n(S):S===45?(e.consume(S),h):ee(S)?(s=f,re(S)):(e.consume(S),f)}function h(S){return S===45?(e.consume(S),p):f(S)}function p(S){return S===62?q(S):S===45?h(S):f(S)}function m(S){const X="CDATA[";return S===X.charCodeAt(o++)?(e.consume(S),o===X.length?y:m):n(S)}function y(S){return S===null?n(S):S===93?(e.consume(S),b):ee(S)?(s=y,re(S)):(e.consume(S),y)}function b(S){return S===93?(e.consume(S),g):y(S)}function g(S){return S===62?q(S):S===93?(e.consume(S),g):y(S)}function x(S){return S===null||S===62?q(S):ee(S)?(s=x,re(S)):(e.consume(S),x)}function v(S){return S===null?n(S):S===63?(e.consume(S),k):ee(S)?(s=v,re(S)):(e.consume(S),v)}function k(S){return S===62?q(S):v(S)}function _(S){return Cn(S)?(e.consume(S),C):n(S)}function C(S){return S===45||Mt(S)?(e.consume(S),C):T(S)}function T(S){return ee(S)?(s=T,re(S)):ge(S)?(e.consume(S),T):q(S)}function I(S){return S===45||Mt(S)?(e.consume(S),I):S===47||S===62||It(S)?A(S):n(S)}function A(S){return S===47?(e.consume(S),q):S===58||S===95||Cn(S)?(e.consume(S),P):ee(S)?(s=A,re(S)):ge(S)?(e.consume(S),A):q(S)}function P(S){return S===45||S===46||S===58||S===95||Mt(S)?(e.consume(S),P):N(S)}function N(S){return S===61?(e.consume(S),D):ee(S)?(s=N,re(S)):ge(S)?(e.consume(S),N):A(S)}function D(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),i=S,F):ee(S)?(s=D,re(S)):ge(S)?(e.consume(S),D):(e.consume(S),$)}function F(S){return S===i?(e.consume(S),i=void 0,H):S===null?n(S):ee(S)?(s=F,re(S)):(e.consume(S),F)}function $(S){return S===null||S===34||S===39||S===60||S===61||S===96?n(S):S===47||S===62||It(S)?A(S):(e.consume(S),$)}function H(S){return S===47||S===62||It(S)?A(S):n(S)}function q(S){return S===62?(e.consume(S),e.exit("htmlTextData"),e.exit("htmlText"),t):n(S)}function re(S){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),M}function M(S){return ge(S)?Ee(e,U,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):U(S)}function U(S){return e.enter("htmlTextData"),s(S)}}const Up={name:"labelEnd",resolveAll:jD,resolveTo:PD,tokenize:RD},_D={tokenize:AD},TD={tokenize:ND},ID={tokenize:DD};function jD(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Rn(e,0,e.length,n),e}function PD(e,t){let n=e.length,r=0,i,o,s,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=n);const l={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",l,t],["enter",c,t]],a=Ht(a,e.slice(o+1,o+r+3)),a=Ht(a,[["enter",d,t]]),a=Ht(a,Vp(t.parser.constructs.insideSpan.null,e.slice(o+r+4,s-3),t)),a=Ht(a,[["exit",d,t],e[s-2],e[s-1],["exit",c,t]]),a=Ht(a,e.slice(s+1)),a=Ht(a,[["exit",l,t]]),Rn(e,o,e.length,a),e}function RD(e,t,n){const r=this;let i=r.events.length,o,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(h){return o?o._inactive?f(h):(s=r.parser.defined.includes(ro(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),l):n(h)}function l(h){return h===40?e.attempt(_D,d,s?d:f)(h):h===91?e.attempt(TD,d,s?c:f)(h):s?d(h):f(h)}function c(h){return e.attempt(ID,d,f)(h)}function d(h){return t(h)}function f(h){return o._balanced=!0,n(h)}}function AD(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return It(f)?ps(e,o)(f):o(f)}function o(f){return f===41?d(f):Y2(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function s(f){return It(f)?ps(e,l)(f):d(f)}function a(f){return n(f)}function l(f){return f===34||f===39||f===40?q2(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):d(f)}function c(f){return It(f)?ps(e,d)(f):d(f)}function d(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function ND(e,t,n){const r=this;return i;function i(a){return K2.call(r,e,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(ro(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function s(a){return n(a)}}function DD(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const MD={name:"labelStartImage",resolveAll:Up.resolveAll,tokenize:LD};function LD(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const OD={name:"labelStartLink",resolveAll:Up.resolveAll,tokenize:zD};function zD(e,t,n){const r=this;return i;function i(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Ju={name:"lineEnding",tokenize:FD};function FD(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Ee(e,t,"linePrefix")}}const cl={name:"thematicBreak",tokenize:BD};function BD(e,t,n){let r=0,i;return o;function o(c){return e.enter("thematicBreak"),s(c)}function s(c){return i=c,a(c)}function a(c){return c===i?(e.enter("thematicBreakSequence"),l(c)):r>=3&&(c===null||ee(c))?(e.exit("thematicBreak"),t(c)):n(c)}function l(c){return c===i?(e.consume(c),r++,l):(e.exit("thematicBreakSequence"),ge(c)?Ee(e,a,"whitespace")(c):a(c))}}const wt={continuation:{tokenize:$D},exit:GD,name:"list",tokenize:WD},VD={partial:!0,tokenize:YD},UD={partial:!0,tokenize:HD};function WD(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return a;function a(p){const m=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Uf(p)){if(r.containerState.type||(r.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(cl,n,c)(p):c(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(p)}return n(p)}function l(p){return Uf(p)&&++s<10?(e.consume(p),l):(!r.interrupt||s<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),c(p)):n(p)}function c(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Dc,r.interrupt?n:d,e.attempt(VD,h,f))}function d(p){return r.containerState.initialBlankLine=!0,o++,h(p)}function f(p){return ge(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),h):n(p)}function h(p){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function $D(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Dc,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Ee(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!ge(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(UD,t,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,Ee(e,e.attempt(wt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function HD(e,t,n){const r=this;return Ee(e,i,"listItemIndent",r.containerState.size+1);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?t(o):n(o)}}function GD(e){e.exit(this.containerState.type)}function YD(e,t,n){const r=this;return Ee(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const s=r.events[r.events.length-1];return!ge(o)&&s&&s[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Hy={name:"setextUnderline",resolveTo:KD,tokenize:qD};function KD(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",s,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=s,e.push(["exit",s,t]),e}function qD(e,t,n){const r=this;let i;return o;function o(c){let d=r.events.length,f;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){f=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=c,s(c)):n(c)}function s(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===i?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),ge(c)?Ee(e,l,"lineSuffix")(c):l(c))}function l(c){return c===null||ee(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const XD={tokenize:QD};function QD(e){const t=this,n=e.attempt(Dc,r,e.attempt(this.parser.constructs.flowInitial,i,Ee(e,e.attempt(this.parser.constructs.flow,i,e.attempt(nD,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const JD={resolveAll:Q2()},ZD=X2("string"),eM=X2("text");function X2(e){return{resolveAll:Q2(e==="text"?tM:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,s,a);return s;function s(d){return c(d)?o(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),l}function l(d){return c(d)?(n.exit("data"),o(d)):(n.consume(d),l)}function c(d){if(d===null)return!0;const f=i[d];let h=-1;if(f)for(;++h<f.length;){const p=f[h];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function Q2(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function tM(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,s=-1,a=0,l;for(;o--;){const c=i[o];if(typeof c=="string"){for(s=c.length;c.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(c===-2)l=!0,a++;else if(c!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const c={type:n===e.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}const nM={42:wt,43:wt,45:wt,48:wt,49:wt,50:wt,51:wt,52:wt,53:wt,54:wt,55:wt,56:wt,57:wt,62:W2},rM={91:aD},iM={[-2]:Qu,[-1]:Qu,32:Qu},oM={35:hD,42:cl,45:[Hy,cl],60:yD,61:Hy,95:cl,96:Wy,126:Wy},sM={38:H2,92:$2},aM={[-5]:Ju,[-4]:Ju,[-3]:Ju,33:MD,38:H2,42:Wf,60:[ON,CD],91:OD,92:[dD,$2],93:Up,95:Wf,96:XN},lM={null:[Wf,JD]},cM={null:[42,95]},uM={null:[]},dM=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:cM,contentInitial:rM,disable:uM,document:nM,flow:oM,flowInitial:iM,insideSpan:lM,string:sM,text:aM},Symbol.toStringTag,{value:"Module"}));function fM(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let s=[],a=[];const l={attempt:T(_),check:T(C),consume:x,enter:v,exit:k,interrupt:T(C,{interrupt:!0})},c={code:null,containerState:{},defineSkip:y,events:[],now:m,parser:e,previous:null,sliceSerialize:h,sliceStream:p,write:f};let d=t.tokenize.call(c,l);return t.resolveAll&&o.push(t),c;function f(N){return s=Ht(s,N),b(),s[s.length-1]!==null?[]:(I(t,0),c.events=Vp(o,c.events,c),c.events)}function h(N,D){return pM(p(N),D)}function p(N){return hM(s,N)}function m(){const{_bufferIndex:N,_index:D,line:F,column:$,offset:H}=r;return{_bufferIndex:N,_index:D,line:F,column:$,offset:H}}function y(N){i[N.line]=N.column,P()}function b(){let N;for(;r._index<s.length;){const D=s[r._index];if(typeof D=="string")for(N=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===N&&r._bufferIndex<D.length;)g(D.charCodeAt(r._bufferIndex));else g(D)}}function g(N){d=d(N)}function x(N){ee(N)?(r.line++,r.column=1,r.offset+=N===-3?2:1,P()):N!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=N}function v(N,D){const F=D||{};return F.type=N,F.start=m(),c.events.push(["enter",F,c]),a.push(F),F}function k(N){const D=a.pop();return D.end=m(),c.events.push(["exit",D,c]),D}function _(N,D){I(N,D.from)}function C(N,D){D.restore()}function T(N,D){return F;function F($,H,q){let re,M,U,S;return Array.isArray($)?ne($):"tokenize"in $?ne([$]):X($);function X(de){return ve;function ve(Pt){const We=Pt!==null&&de[Pt],Fe=Pt!==null&&de.null,lt=[...Array.isArray(We)?We:We?[We]:[],...Array.isArray(Fe)?Fe:Fe?[Fe]:[]];return ne(lt)(Pt)}}function ne(de){return re=de,M=0,de.length===0?q:E(de[M])}function E(de){return ve;function ve(Pt){return S=A(),U=de,de.partial||(c.currentConstruct=de),de.name&&c.parser.constructs.disable.null.includes(de.name)?Pe():de.tokenize.call(D?Object.assign(Object.create(c),D):c,l,ye,Pe)(Pt)}}function ye(de){return N(U,S),H}function Pe(de){return S.restore(),++M<re.length?E(re[M]):q}}}function I(N,D){N.resolveAll&&!o.includes(N)&&o.push(N),N.resolve&&Rn(c.events,D,c.events.length-D,N.resolve(c.events.slice(D),c)),N.resolveTo&&(c.events=N.resolveTo(c.events,c))}function A(){const N=m(),D=c.previous,F=c.currentConstruct,$=c.events.length,H=Array.from(a);return{from:$,restore:q};function q(){r=N,c.previous=D,c.currentConstruct=F,c.events.length=$,a=H,P()}}function P(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function hM(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let s;if(n===i)s=[e[n].slice(r,o)];else{if(s=e.slice(n,i),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}o>0&&s.push(e[i].slice(0,o))}return s}function pM(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&i)continue;s=" ";break}default:s=String.fromCharCode(o)}i=o===-2,r.push(s)}return r.join("")}function mM(e){const r={constructs:kN([dM,...(e||{}).extensions||[]]),content:i(PN),defined:[],document:i(AN),flow:i(XD),lazy:{},string:i(ZD),text:i(eM)};return r;function i(o){return s;function s(a){return fM(r,o,a)}}}function gM(e){for(;!G2(e););return e}const Gy=/[\0\t\n\r]/g;function yM(){let e=1,t="",n=!0,r;return i;function i(o,s,a){const l=[];let c,d,f,h,p;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),f=0,t="",n&&(o.charCodeAt(0)===65279&&f++,n=void 0);f<o.length;){if(Gy.lastIndex=f,c=Gy.exec(o),h=c&&c.index!==void 0?c.index:o.length,p=o.charCodeAt(h),!c){t=o.slice(f);break}if(p===10&&f===h&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),f<h&&(l.push(o.slice(f,h)),e+=h-f),p){case 0:{l.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,l.push(-2);e++<d;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}f=h+1}return a&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const xM=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function vM(e){return e.replace(xM,bM)}function bM(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return U2(n.slice(o?2:1),o?16:10)}return Bp(n)||e}const J2={}.hasOwnProperty;function wM(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),kM(n)(gM(mM(n).document().write(yM()(e,t,!0))))}function kM(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(xt),autolinkProtocol:A,autolinkEmail:A,atxHeading:o(ki),blockQuote:o(Fe),characterEscape:A,characterReference:A,codeFenced:o(lt),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(lt,s),codeText:o(ct,s),codeTextData:A,data:A,codeFlowValue:A,definition:o(er),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(mn),hardBreakEscape:o(Vt),hardBreakTrailing:o(Vt),htmlFlow:o(Br,s),htmlFlowData:A,htmlText:o(Br,s),htmlTextData:A,image:o(An),label:s,link:o(xt),listItem:o(Nn),listItemValue:h,listOrdered:o(tr,f),listUnordered:o(tr),paragraph:o(vt),reference:E,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(ki),strong:o(nr),thematicBreak:o(B)},exit:{atxHeading:l(),atxHeadingSequence:_,autolink:l(),autolinkEmail:We,autolinkProtocol:Pt,blockQuote:l(),characterEscapeValue:P,characterReferenceMarkerHexadecimal:Pe,characterReferenceMarkerNumeric:Pe,characterReferenceValue:de,characterReference:ve,codeFenced:l(b),codeFencedFence:y,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:P,codeIndented:l(g),codeText:l(H),codeTextData:P,data:P,definition:l(),definitionDestinationString:k,definitionLabelString:x,definitionTitleString:v,emphasis:l(),hardBreakEscape:l(D),hardBreakTrailing:l(D),htmlFlow:l(F),htmlFlowData:P,htmlText:l($),htmlTextData:P,image:l(re),label:U,labelText:M,lineEnding:N,link:l(q),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:ye,resourceDestinationString:S,resourceTitleString:X,resource:ne,setextHeading:l(I),setextHeadingLineSequence:T,setextHeadingText:C,strong:l(),thematicBreak:l()}};Z2(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(R){let z={type:"root",children:[]};const W={stack:[z],tokenStack:[],config:t,enter:a,exit:c,buffer:s,resume:d,data:n},ie=[];let fe=-1;for(;++fe<R.length;)if(R[fe][1].type==="listOrdered"||R[fe][1].type==="listUnordered")if(R[fe][0]==="enter")ie.push(fe);else{const Rt=ie.pop();fe=i(R,Rt,fe)}for(fe=-1;++fe<R.length;){const Rt=t[R[fe][0]];J2.call(Rt,R[fe][1].type)&&Rt[R[fe][1].type].call(Object.assign({sliceSerialize:R[fe][2].sliceSerialize},W),R[fe][1])}if(W.tokenStack.length>0){const Rt=W.tokenStack[W.tokenStack.length-1];(Rt[1]||Yy).call(W,void 0,Rt[0])}for(z.position={start:sr(R.length>0?R[0][1].start:{line:1,column:1,offset:0}),end:sr(R.length>0?R[R.length-2][1].end:{line:1,column:1,offset:0})},fe=-1;++fe<t.transforms.length;)z=t.transforms[fe](z)||z;return z}function i(R,z,W){let ie=z-1,fe=-1,Rt=!1,Zt,en,Vr,Ur;for(;++ie<=W;){const ut=R[ie];switch(ut[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ut[0]==="enter"?fe++:fe--,Ur=void 0;break}case"lineEndingBlank":{ut[0]==="enter"&&(Zt&&!Ur&&!fe&&!Vr&&(Vr=ie),Ur=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ur=void 0}if(!fe&&ut[0]==="enter"&&ut[1].type==="listItemPrefix"||fe===-1&&ut[0]==="exit"&&(ut[1].type==="listUnordered"||ut[1].type==="listOrdered")){if(Zt){let rr=ie;for(en=void 0;rr--;){const bt=R[rr];if(bt[1].type==="lineEnding"||bt[1].type==="lineEndingBlank"){if(bt[0]==="exit")continue;en&&(R[en][1].type="lineEndingBlank",Rt=!0),bt[1].type="lineEnding",en=rr}else if(!(bt[1].type==="linePrefix"||bt[1].type==="blockQuotePrefix"||bt[1].type==="blockQuotePrefixWhitespace"||bt[1].type==="blockQuoteMarker"||bt[1].type==="listItemIndent"))break}Vr&&(!en||Vr<en)&&(Zt._spread=!0),Zt.end=Object.assign({},en?R[en][1].start:ut[1].end),R.splice(en||ie,0,["exit",Zt,ut[2]]),ie++,W++}if(ut[1].type==="listItemPrefix"){const rr={type:"listItem",_spread:!1,start:Object.assign({},ut[1].start),end:void 0};Zt=rr,R.splice(ie,0,["enter",rr,ut[2]]),ie++,W++,Vr=void 0,Ur=!0}}}return R[z][1]._spread=Rt,W}function o(R,z){return W;function W(ie){a.call(this,R(ie),ie),z&&z.call(this,ie)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(R,z,W){this.stack[this.stack.length-1].children.push(R),this.stack.push(R),this.tokenStack.push([z,W||void 0]),R.position={start:sr(z.start),end:void 0}}function l(R){return z;function z(W){R&&R.call(this,W),c.call(this,W)}}function c(R,z){const W=this.stack.pop(),ie=this.tokenStack.pop();if(ie)ie[0].type!==R.type&&(z?z.call(this,R,ie[0]):(ie[1]||Yy).call(this,R,ie[0]));else throw new Error("Cannot close `"+R.type+"` ("+hs({start:R.start,end:R.end})+"): it’s not open");W.position.end=sr(R.end)}function d(){return bN(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function h(R){if(this.data.expectingFirstListItemValue){const z=this.stack[this.stack.length-2];z.start=Number.parseInt(this.sliceSerialize(R),10),this.data.expectingFirstListItemValue=void 0}}function p(){const R=this.resume(),z=this.stack[this.stack.length-1];z.lang=R}function m(){const R=this.resume(),z=this.stack[this.stack.length-1];z.meta=R}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function b(){const R=this.resume(),z=this.stack[this.stack.length-1];z.value=R.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const R=this.resume(),z=this.stack[this.stack.length-1];z.value=R.replace(/(\r?\n|\r)$/g,"")}function x(R){const z=this.resume(),W=this.stack[this.stack.length-1];W.label=z,W.identifier=ro(this.sliceSerialize(R)).toLowerCase()}function v(){const R=this.resume(),z=this.stack[this.stack.length-1];z.title=R}function k(){const R=this.resume(),z=this.stack[this.stack.length-1];z.url=R}function _(R){const z=this.stack[this.stack.length-1];if(!z.depth){const W=this.sliceSerialize(R).length;z.depth=W}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function T(R){const z=this.stack[this.stack.length-1];z.depth=this.sliceSerialize(R).codePointAt(0)===61?1:2}function I(){this.data.setextHeadingSlurpLineEnding=void 0}function A(R){const W=this.stack[this.stack.length-1].children;let ie=W[W.length-1];(!ie||ie.type!=="text")&&(ie=pe(),ie.position={start:sr(R.start),end:void 0},W.push(ie)),this.stack.push(ie)}function P(R){const z=this.stack.pop();z.value+=this.sliceSerialize(R),z.position.end=sr(R.end)}function N(R){const z=this.stack[this.stack.length-1];if(this.data.atHardBreak){const W=z.children[z.children.length-1];W.position.end=sr(R.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(z.type)&&(A.call(this,R),P.call(this,R))}function D(){this.data.atHardBreak=!0}function F(){const R=this.resume(),z=this.stack[this.stack.length-1];z.value=R}function $(){const R=this.resume(),z=this.stack[this.stack.length-1];z.value=R}function H(){const R=this.resume(),z=this.stack[this.stack.length-1];z.value=R}function q(){const R=this.stack[this.stack.length-1];if(this.data.inReference){const z=this.data.referenceType||"shortcut";R.type+="Reference",R.referenceType=z,delete R.url,delete R.title}else delete R.identifier,delete R.label;this.data.referenceType=void 0}function re(){const R=this.stack[this.stack.length-1];if(this.data.inReference){const z=this.data.referenceType||"shortcut";R.type+="Reference",R.referenceType=z,delete R.url,delete R.title}else delete R.identifier,delete R.label;this.data.referenceType=void 0}function M(R){const z=this.sliceSerialize(R),W=this.stack[this.stack.length-2];W.label=vM(z),W.identifier=ro(z).toLowerCase()}function U(){const R=this.stack[this.stack.length-1],z=this.resume(),W=this.stack[this.stack.length-1];if(this.data.inReference=!0,W.type==="link"){const ie=R.children;W.children=ie}else W.alt=z}function S(){const R=this.resume(),z=this.stack[this.stack.length-1];z.url=R}function X(){const R=this.resume(),z=this.stack[this.stack.length-1];z.title=R}function ne(){this.data.inReference=void 0}function E(){this.data.referenceType="collapsed"}function ye(R){const z=this.resume(),W=this.stack[this.stack.length-1];W.label=z,W.identifier=ro(this.sliceSerialize(R)).toLowerCase(),this.data.referenceType="full"}function Pe(R){this.data.characterReferenceType=R.type}function de(R){const z=this.sliceSerialize(R),W=this.data.characterReferenceType;let ie;W?(ie=U2(z,W==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ie=Bp(z);const fe=this.stack[this.stack.length-1];fe.value+=ie}function ve(R){const z=this.stack.pop();z.position.end=sr(R.end)}function Pt(R){P.call(this,R);const z=this.stack[this.stack.length-1];z.url=this.sliceSerialize(R)}function We(R){P.call(this,R);const z=this.stack[this.stack.length-1];z.url="mailto:"+this.sliceSerialize(R)}function Fe(){return{type:"blockquote",children:[]}}function lt(){return{type:"code",lang:null,meta:null,value:""}}function ct(){return{type:"inlineCode",value:""}}function er(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function mn(){return{type:"emphasis",children:[]}}function ki(){return{type:"heading",depth:0,children:[]}}function Vt(){return{type:"break"}}function Br(){return{type:"html",value:""}}function An(){return{type:"image",title:null,url:"",alt:null}}function xt(){return{type:"link",title:null,url:"",children:[]}}function tr(R){return{type:"list",ordered:R.type==="listOrdered",start:null,spread:R._spread,children:[]}}function Nn(R){return{type:"listItem",spread:R._spread,checked:null,children:[]}}function vt(){return{type:"paragraph",children:[]}}function nr(){return{type:"strong",children:[]}}function pe(){return{type:"text",value:""}}function B(){return{type:"thematicBreak"}}}function sr(e){return{line:e.line,column:e.column,offset:e.offset}}function Z2(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Z2(e,r):SM(e,r)}}function SM(e,t){let n;for(n in t)if(J2.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Yy(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+hs({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+hs({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+hs({start:t.start,end:t.end})+") is still open")}function CM(e){const t=this;t.parser=n;function n(r){return wM(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function EM(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function _M(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function TM(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function IM(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function jM(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function PM(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Io(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let s,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=o+1,a+=1,e.footnoteCounts.set(r,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,l);const c={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,c),e.applyData(t,c)}function RM(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function AM(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function ek(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function NM(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ek(e,t);const i={src:Io(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function DM(e,t){const n={src:Io(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function MM(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function LM(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ek(e,t);const i={href:Io(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function OM(e,t){const n={href:Io(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function zM(e,t,n){const r=e.all(t),i=n?FM(n):tk(t),o={},s=[];if(typeof t.checked=="boolean"){const d=r[0];let f;d&&d.type==="element"&&d.tagName==="p"?f=d:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const d=r[a];(i||a!==0||d.type!=="element"||d.tagName!=="p")&&s.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?s.push(...d.children):s.push(d)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:s};return e.patch(t,c),e.applyData(t,c)}function FM(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=tk(n[r])}return t}function tk(e){const t=e.spread;return t??e.children.length>1}function BM(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function VM(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function UM(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function WM(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function $M(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],s),i.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Lp(t.children[1]),l=M2(t.children[t.children.length-1]);a&&l&&(s.position={start:a,end:l}),i.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function HM(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:t.children.length;let l=-1;const c=[];for(;++l<a;){const f=t.children[l],h={},p=s?s[l]:void 0;p&&(h.align=p);let m={type:"element",tagName:o,properties:h,children:[]};f&&(m.children=e.all(f),e.patch(f,m),m=e.applyData(f,m)),c.push(m)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,d),e.applyData(t,d)}function GM(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Ky=9,qy=32;function YM(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Xy(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Xy(t.slice(i),i>0,!1)),o.join("")}function Xy(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===Ky||o===qy;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===Ky||o===qy;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function KM(e,t){const n={type:"text",value:YM(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function qM(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const XM={blockquote:EM,break:_M,code:TM,delete:IM,emphasis:jM,footnoteReference:PM,heading:RM,html:AM,imageReference:NM,image:DM,inlineCode:MM,linkReference:LM,link:OM,listItem:zM,list:BM,paragraph:VM,root:UM,strong:WM,table:$M,tableCell:GM,tableRow:HM,text:KM,thematicBreak:qM,toml:Na,yaml:Na,definition:Na,footnoteDefinition:Na};function Na(){}const nk=-1,Mc=0,ms=1,ic=2,Wp=3,$p=4,Hp=5,Gp=6,rk=7,ik=8,ok=typeof self=="object"?self:globalThis,Qy=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new ok[e](t)},QM=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,s]=t[i];switch(o){case Mc:case nk:return n(s,i);case ms:{const a=n([],i);for(const l of s)a.push(r(l));return a}case ic:{const a=n({},i);for(const[l,c]of s)a[r(l)]=r(c);return a}case Wp:return n(new Date(s),i);case $p:{const{source:a,flags:l}=s;return n(new RegExp(a,l),i)}case Hp:{const a=n(new Map,i);for(const[l,c]of s)a.set(r(l),r(c));return a}case Gp:{const a=n(new Set,i);for(const l of s)a.add(r(l));return a}case rk:{const{name:a,message:l}=s;return n(typeof ok[a]=="function"?Qy(a,l):new Error(l),i)}case ik:return n(BigInt(s),i);case"BigInt":return n(Object(BigInt(s)),i);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return n(new DataView(a),s)}}return n(Qy(o,s),i)};return r},Jy=e=>QM(new Map,e)(0),Jr="",{toString:JM}={},{keys:ZM}=Object,Ho=e=>{const t=typeof e;if(t!=="object"||!e)return[Mc,t];const n=JM.call(e).slice(8,-1);switch(n){case"Array":return[ms,Jr];case"Object":return[ic,Jr];case"Date":return[Wp,Jr];case"RegExp":return[$p,Jr];case"Map":return[Hp,Jr];case"Set":return[Gp,Jr];case"DataView":return[ms,n]}return n.includes("Array")?[ms,n]:e instanceof Error?[rk,e.name||"Error"]:[ic,n]},Da=([e,t])=>e===Mc&&(t==="function"||t==="symbol"),eL=(e,t,n,r)=>{const i=(s,a)=>{const l=r.push(s)-1;return n.set(a,l),l},o=s=>{if(n.has(s))return n.get(s);let[a,l]=Ho(s);switch(a){case Mc:{let d=s;switch(l){case"bigint":a=ik,d=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return i([nk],s)}return i([a,d],s)}case ms:{if(l){let h=s;return l==="DataView"?h=new Uint8Array(s.buffer):l==="ArrayBuffer"&&(h=new Uint8Array(s)),i([l,[...h]],s)}const d=[],f=i([a,d],s);for(const h of s)d.push(o(h));return f}case ic:{if(l)switch(l){case"BigInt":return i([l,s.toString()],s);case"Boolean":case"Number":case"String":return i([l,s.valueOf()],s)}if(t&&"toJSON"in s)return o(s.toJSON());const d=[],f=i([a,d],s);for(const h of ZM(s))(e||!Da(Ho(s[h])))&&d.push([o(h),o(s[h])]);return f}case Wp:return i([a,isNaN(s.getTime())?Jr:s.toISOString()],s);case $p:{const{source:d,flags:f}=s;return i([a,{source:d,flags:f}],s)}case Hp:{const d=[],f=i([a,d],s);for(const[h,p]of s)(e||!(Da(Ho(h))||Da(Ho(p))))&&d.push([o(h),o(p)]);return f}case Gp:{const d=[],f=i([a,d],s);for(const h of s)(e||!Da(Ho(h)))&&d.push(o(h));return f}}const{message:c}=s;return i([a,{name:l,message:c}],s)};return o},Zy=(e,{json:t,lossy:n}={})=>{const r=[];return eL(!(t||n),!!t,new Map,r)(e),r},oc=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Jy(Zy(e,t)):structuredClone(e):(e,t)=>Jy(Zy(e,t));function tL(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function nL(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function rL(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||tL,r=e.options.footnoteBackLabel||nL,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[l]);if(!c)continue;const d=e.all(c),f=String(c.identifier).toUpperCase(),h=Io(f.toLowerCase());let p=0;const m=[],y=e.footnoteCounts.get(f);for(;y!==void 0&&++p<=y;){m.length>0&&m.push({type:"text",value:" "});let x=typeof n=="string"?n:n(l,p);typeof x=="string"&&(x={type:"text",value:x}),m.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,p),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const b=d[d.length-1];if(b&&b.type==="element"&&b.tagName==="p"){const x=b.children[b.children.length-1];x&&x.type==="text"?x.value+=" ":b.children.push({type:"text",value:" "}),b.children.push(...m)}else d.push(...m);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(d,!0)};e.patch(c,g),a.push(g)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...oc(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const sk=function(e){if(e==null)return aL;if(typeof e=="function")return Lc(e);if(typeof e=="object")return Array.isArray(e)?iL(e):oL(e);if(typeof e=="string")return sL(e);throw new Error("Expected function, string, or object as test")};function iL(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=sk(e[n]);return Lc(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function oL(e){const t=e;return Lc(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function sL(e){return Lc(t);function t(n){return n&&n.type===e}}function Lc(e){return t;function t(n,r,i){return!!(lL(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function aL(){return!0}function lL(e){return e!==null&&typeof e=="object"&&"type"in e}const ak=[],cL=!0,ex=!1,uL="skip";function dL(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=sk(i),s=r?-1:1;a(e,void 0,[])();function a(l,c,d){const f=l&&typeof l=="object"?l:{};if(typeof f.type=="string"){const p=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(l.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=ak,m,y,b;if((!t||o(l,c,d[d.length-1]||void 0))&&(p=fL(n(l,d)),p[0]===ex))return p;if("children"in l&&l.children){const g=l;if(g.children&&p[0]!==uL)for(y=(r?g.children.length:-1)+s,b=d.concat(g);y>-1&&y<g.children.length;){const x=g.children[y];if(m=a(x,y,b)(),m[0]===ex)return m;y=typeof m[1]=="number"?m[1]:y+s}}return p}}}function fL(e){return Array.isArray(e)?e:typeof e=="number"?[cL,e]:e==null?ak:[e]}function lk(e,t,n,r){let i,o,s;typeof t=="function"&&typeof n!="function"?(o=void 0,s=t,i=n):(o=t,s=n,i=r),dL(e,o,a,i);function a(l,c){const d=c[c.length-1],f=d?d.children.indexOf(l):void 0;return s(l,f,d)}}const $f={}.hasOwnProperty,hL={};function pL(e,t){const n=t||hL,r=new Map,i=new Map,o=new Map,s={...XM,...n.handlers},a={all:c,applyData:gL,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:n,patch:mL,wrap:xL};return lk(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const f=d.type==="definition"?r:i,h=String(d.identifier).toUpperCase();f.has(h)||f.set(h,d)}}),a;function l(d,f){const h=d.type,p=a.handlers[h];if($f.call(a.handlers,h)&&p)return p(a,d,f);if(a.options.passThrough&&a.options.passThrough.includes(h)){if("children"in d){const{children:y,...b}=d,g=oc(b);return g.children=a.all(d),g}return oc(d)}return(a.options.unknownHandler||yL)(a,d,f)}function c(d){const f=[];if("children"in d){const h=d.children;let p=-1;for(;++p<h.length;){const m=a.one(h[p],d);if(m){if(p&&h[p-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=tx(m.value)),!Array.isArray(m)&&m.type==="element")){const y=m.children[0];y&&y.type==="text"&&(y.value=tx(y.value))}Array.isArray(m)?f.push(...m):f.push(m)}}}return f}}function mL(e,t){e.position&&(t.position=J6(e))}function gL(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const s="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,oc(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function yL(e,t){const n=t.data||{},r="value"in t&&!($f.call(n,"hProperties")||$f.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function xL(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function tx(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function nx(e,t){const n=pL(e,t),r=n.one(e,void 0),i=rL(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function vL(e,t){return e&&"run"in e?async function(n,r){const i=nx(n,{file:r,...t});await e.run(i,r)}:function(n,r){return nx(n,{file:r,...e||t})}}function rx(e){if(e)throw e}var ul=Object.prototype.hasOwnProperty,ck=Object.prototype.toString,ix=Object.defineProperty,ox=Object.getOwnPropertyDescriptor,sx=function(t){return typeof Array.isArray=="function"?Array.isArray(t):ck.call(t)==="[object Array]"},ax=function(t){if(!t||ck.call(t)!=="[object Object]")return!1;var n=ul.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&ul.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||ul.call(t,i)},lx=function(t,n){ix&&n.name==="__proto__"?ix(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},cx=function(t,n){if(n==="__proto__")if(ul.call(t,n)){if(ox)return ox(t,n).value}else return;return t[n]},bL=function e(){var t,n,r,i,o,s,a=arguments[0],l=1,c=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<c;++l)if(t=arguments[l],t!=null)for(n in t)r=cx(a,n),i=cx(t,n),a!==i&&(d&&i&&(ax(i)||(o=sx(i)))?(o?(o=!1,s=r&&sx(r)?r:[]):s=r&&ax(r)?r:{},lx(a,{name:n,newValue:e(d,s,i)})):typeof i<"u"&&lx(a,{name:n,newValue:i}));return a};const Zu=Kf(bL);function Hf(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function wL(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...i);function a(l,...c){const d=e[++o];let f=-1;if(l){s(l);return}for(;++f<i.length;)(c[f]===null||c[f]===void 0)&&(c[f]=i[f]);i=c,d?kL(d,a)(...c):s(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function kL(e,t){let n;return r;function r(...s){const a=e.length>s.length;let l;a&&s.push(i);try{l=e.apply(this,s)}catch(c){const d=c;if(a&&n)throw d;return i(d)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,i):l instanceof Error?i(l):o(l))}function i(s,...a){n||(n=!0,t(s,...a))}function o(s){i(null,s)}}const bn={basename:SL,dirname:CL,extname:EL,join:_L,sep:"/"};function SL(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ra(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let s=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else s<0&&(o=!0,s=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=s));return n===r?r=s:r<0&&(r=e.length),e.slice(n,r)}function CL(e){if(ra(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function EL(e){ra(e);let t=e.length,n=-1,r=0,i=-1,o=0,s;for(;t--;){const a=e.codePointAt(t);if(a===47){if(s){r=t+1;break}continue}n<0&&(s=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function _L(...e){let t=-1,n;for(;++t<e.length;)ra(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":TL(n)}function TL(e){ra(e);const t=e.codePointAt(0)===47;let n=IL(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function IL(e,t){let n="",r=0,i=-1,o=0,s=-1,a,l;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),i=s,o=0;continue}}else if(n.length>0){n="",r=0,i=s,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,s):n=e.slice(i+1,s),r=s-i-1;i=s,o=0}else a===46&&o>-1?o++:o=-1}return n}function ra(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const jL={cwd:PL};function PL(){return"/"}function Gf(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function RL(e){if(typeof e=="string")e=new URL(e);else if(!Gf(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return AL(e)}function AL(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const ed=["history","path","basename","stem","extname","dirname"];class uk{constructor(t){let n;t?Gf(t)?n={path:t}:typeof t=="string"||NL(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":jL.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ed.length;){const o=ed[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)ed.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?bn.basename(this.path):void 0}set basename(t){nd(t,"basename"),td(t,"basename"),this.path=bn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?bn.dirname(this.path):void 0}set dirname(t){ux(this.basename,"dirname"),this.path=bn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?bn.extname(this.path):void 0}set extname(t){if(td(t,"extname"),ux(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=bn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Gf(t)&&(t=RL(t)),nd(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?bn.basename(this.path,this.extname):void 0}set stem(t){nd(t,"stem"),td(t,"stem"),this.path=bn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new at(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function td(e,t){if(e&&e.includes(bn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+bn.sep+"`")}function nd(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function ux(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function NL(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const DL=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},ML={}.hasOwnProperty;class Yp extends DL{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=wL()}copy(){const t=new Yp;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Zu(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(od("data",this.frozen),this.namespace[t]=n,this):ML.call(this.namespace,t)&&this.namespace[t]||void 0:t?(od("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ma(t),r=this.parser||this.Parser;return rd("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),rd("process",this.parser||this.Parser),id("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,s){const a=Ma(t),l=r.parse(a);r.run(l,a,function(d,f,h){if(d||!f||!h)return c(d);const p=f,m=r.stringify(p,h);zL(m)?h.value=m:h.result=m,c(d,h)});function c(d,f){d||!f?s(d):o?o(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),rd("processSync",this.parser||this.Parser),id("processSync",this.compiler||this.Compiler),this.process(t,i),fx("processSync","process",n),r;function i(o,s){n=!0,rx(o),r=s}}run(t,n,r){dx(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(s,a){const l=Ma(n);i.run(t,l,c);function c(d,f,h){const p=f||t;d?a(d):s?s(p):r(void 0,p,h)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),fx("runSync","run",r),i;function o(s,a){rx(s),i=a,r=!0}}stringify(t,n){this.freeze();const r=Ma(n),i=this.compiler||this.Compiler;return id("stringify",i),dx(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(od("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(c){if(typeof c=="function")l(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...f]=c;l(d,f)}else s(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function s(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(i.settings=Zu(!0,i.settings,c.settings))}function a(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const f=c[d];o(f)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function l(c,d){let f=-1,h=-1;for(;++f<r.length;)if(r[f][0]===c){h=f;break}if(h===-1)r.push([c,...d]);else if(d.length>0){let[p,...m]=d;const y=r[h][1];Hf(y)&&Hf(p)&&(p=Zu(!0,y,p)),r[h]=[c,p,...m]}}}}const LL=new Yp().freeze();function rd(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function id(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function od(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function dx(e){if(!Hf(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function fx(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ma(e){return OL(e)?e:new uk(e)}function OL(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function zL(e){return typeof e=="string"||FL(e)}function FL(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const BL="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",hx=[],px={allowDangerousHtml:!0},VL=/^(https?|ircs?|mailto|xmpp)$/i,UL=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function WL(e){const t=$L(e),n=HL(e);return GL(t.runSync(t.parse(n),n),e)}function $L(e){const t=e.rehypePlugins||hx,n=e.remarkPlugins||hx,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...px}:px;return LL().use(CM).use(n).use(vL,r).use(t)}function HL(e){const t=e.children||"",n=new uk;return typeof t=="string"&&(n.value=t),n}function GL(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,s=t.skipHtml,a=t.unwrapDisallowed,l=t.urlTransform||YL;for(const d of UL)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+BL+d.id,void 0);return lk(e,c),rN(e,{Fragment:u.Fragment,components:i,ignoreInvalidStyle:!0,jsx:u.jsx,jsxs:u.jsxs,passKeys:!0,passNode:!0});function c(d,f,h){if(d.type==="raw"&&h&&typeof f=="number")return s?h.children.splice(f,1):h.children[f]={type:"text",value:d.value},f;if(d.type==="element"){let p;for(p in Xu)if(Object.hasOwn(Xu,p)&&Object.hasOwn(d.properties,p)){const m=d.properties[p],y=Xu[p];(y===null||y.includes(d.tagName))&&(d.properties[p]=l(String(m||""),p,d))}}if(d.type==="element"){let p=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!p&&r&&typeof f=="number"&&(p=!r(d,f,h)),p&&h&&typeof f=="number")return a&&d.children?h.children.splice(f,1,...d.children):h.children.splice(f,1),f}}}function YL(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||VL.test(e.slice(0,t))?e:""}const KL=[{label:"📊 Storage usage",msg:"How much storage do I have?"},{label:"📤 Upload help",msg:"How do I upload files?"},{label:"🔗 Share a file",msg:"How do I share a file with someone?"},{label:"🖨️ Quick Print",msg:"How does the Quick Print feature work?"},{label:"💳 Plans & pricing",msg:"What plans are available?"},{label:"🛡️ Security",msg:"How secure is my data?"}];function qL({elevated:e=!1}){const[t,n]=w.useState(!1),[r,i]=w.useState([{role:"assistant",content:`Hi there! 👋 I'm **CloudVault AI**. I can help you with storage, file sharing, uploads, and more.

Try one of the suggestions below or ask me anything!`}]),[o,s]=w.useState(""),[a,l]=w.useState(!1),c=w.useRef(null),d=w.useRef(null),f=()=>{var g;(g=c.current)==null||g.scrollIntoView({behavior:"smooth"})};w.useEffect(()=>{f()},[r,a]),w.useEffect(()=>{const g=x=>{x.altKey&&x.key==="c"&&(x.preventDefault(),n(v=>!v))};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[]),w.useEffect(()=>{t&&d.current&&setTimeout(()=>{var g;return(g=d.current)==null?void 0:g.focus()},200)},[t]);const h=async g=>{if(!g.trim()||a)return;const x=g.trim();s(""),i(v=>[...v,{role:"user",content:x}]),l(!0);try{const v=r.slice(1),k=await it("/chat/ask",{method:"POST",body:JSON.stringify({message:x,history:v})});if(k&&(k.reply||k.error))i(_=>[..._,{role:"assistant",content:k.reply||k.error||"Sorry, something went wrong."}]);else throw new Error("Invalid response")}catch(v){console.error("Chat error:",v),i(k=>[...k,{role:"assistant",content:"Sorry, I couldn't connect to the server. Please check your connection and try again. 🔄"}])}finally{l(!1)}},p=async g=>{g.preventDefault(),h(o)},m=g=>{h(g)},y=()=>{i([{role:"assistant",content:"Chat cleared! 🧹 How can I help you?"}])},b=r.length<=2&&!a;return u.jsx("div",{className:`cva-widget-container${e?" cva-widget-container--elevated":""}`,children:u.jsx(ZA,{mode:"wait",children:t?u.jsxs(Aa.div,{initial:{opacity:0,y:12,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:12,scale:.95},transition:{duration:.2,ease:"easeOut"},className:"cva-window",children:[u.jsxs("div",{className:"cva-header",children:[u.jsxs("div",{className:"cva-header-info",children:[u.jsx("div",{className:"cva-header-avatar",children:u.jsx(Ea,{size:18})}),u.jsxs("div",{children:[u.jsx("h3",{className:"cva-header-title",children:"CloudVault AI"}),u.jsxs("div",{className:"cva-header-status",children:[u.jsx("span",{})," Online"]})]})]}),u.jsxs("div",{className:"cva-header-actions",children:[u.jsx("button",{type:"button",className:"cva-icon-btn",onClick:y,"aria-label":"Clear chat",title:"Clear chat",children:u.jsx(pj,{size:15})}),u.jsx("button",{type:"button",className:"cva-icon-btn",onClick:()=>n(!1),"aria-label":"Close",children:u.jsx(Bb,{size:16})})]})]}),u.jsxs("div",{className:"cva-messages",children:[r.map((g,x)=>u.jsxs(Aa.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:x===r.length-1?.05:0},className:`cva-message-row ${g.role}`,children:[u.jsx("div",{className:"cva-message-avatar",children:g.role==="assistant"?u.jsx(Ea,{size:16}):u.jsx(gj,{size:16})}),u.jsx("div",{className:"cva-message-bubble",children:u.jsx(WL,{components:{table:({node:v,...k})=>u.jsx("table",{className:"cva-table",...k}),a:({node:v,...k})=>u.jsx("a",{target:"_blank",rel:"noopener noreferrer",...k})},children:g.content})})]},x)),a&&u.jsxs(Aa.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},className:"cva-message-row assistant",children:[u.jsx("div",{className:"cva-message-avatar",children:u.jsx(Ea,{size:16})}),u.jsx("div",{className:"cva-message-bubble",children:u.jsxs("div",{className:"cva-typing",children:[u.jsx("div",{className:"cva-dot"}),u.jsx("div",{className:"cva-dot"}),u.jsx("div",{className:"cva-dot"})]})})]}),u.jsx("div",{ref:c})]}),b&&u.jsx("div",{className:"cva-suggestions",children:KL.map(g=>u.jsx("button",{type:"button",className:"cva-chip",onClick:()=>m(g.msg),disabled:a,children:g.label},g.msg))}),u.jsxs("div",{className:"cva-input-area",children:[u.jsxs("form",{onSubmit:p,className:"cva-input-wrapper",children:[u.jsx("input",{ref:d,type:"text",value:o,onChange:g=>s(g.target.value),placeholder:"Ask me anything…",className:"cva-input",disabled:a}),u.jsx("button",{type:"submit",className:"cva-send-btn",disabled:!o.trim()||a,children:u.jsx(dj,{size:14,style:{marginLeft:"1px"}})})]}),u.jsx("div",{className:"cva-input-hint",children:"Alt+C to toggle · Powered by AI"})]})]},"window"):u.jsxs(Aa.button,{type:"button",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.2,ease:"easeOut"},onClick:()=>n(!0),className:"cva-toggle-btn","aria-label":"Open CloudVault AI (Alt+C)",title:"CloudVault AI (Alt+C)",children:[u.jsx(Ea,{size:22}),u.jsx("span",{className:"cva-status-dot","aria-hidden":"true"})]},"toggle")})})}const XL=w.lazy(()=>bi(()=>import("./ProfilePage-efooRhzd.js"),[])),QL=w.lazy(()=>bi(()=>import("./SettingsPage-DE5dCDc3.js"),[])),JL=w.lazy(()=>bi(()=>import("./SecurityPage-BHZqzB_L.js"),[])),ZL=w.lazy(()=>bi(()=>import("./BillingPage-BsF0Uyqh.js"),[])),e8=w.lazy(()=>bi(()=>import("./HelpPage-B1Wvqnr_.js"),[])),t8=w.lazy(()=>bi(()=>import("./ActivityPage-B0d6Z2FD.js"),[])),sd=w.lazy(()=>bi(()=>import("./FileListPage-Dkz9_He5.js"),[]));function Bn(){return u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:48},children:u.jsx(Yf,{size:28})})}function n8({msg:e,type:t,onClose:n}){w.useEffect(()=>{const i=setTimeout(n,3500);return()=>clearTimeout(i)},[n]);const r=t==="error"?"var(--danger)":t==="success"?"var(--accent)":"var(--accent-blue)";return u.jsxs("div",{className:"toast",role:"alert","aria-live":"polite",style:{position:"fixed",bottom:32,right:32,zIndex:9999,background:r,color:"#fff",padding:"14px 24px",borderRadius:"var(--radius)",fontFamily:"var(--font)",fontWeight:600,fontSize:14,boxShadow:"var(--shadow)",animation:"slideUp .3s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10,maxWidth:420},children:[u.jsx("span",{children:t==="error"?"✕":t==="success"?"✓":"ℹ"}),u.jsx("span",{style:{flex:1},children:e}),u.jsx("span",{onClick:n,style:{cursor:"pointer",opacity:.7,fontSize:18,lineHeight:1},children:"×"})]})}function Yf({size:e=22,color:t="var(--accent)"}){return u.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:t,borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function dl({value:e}){const t=e>85?"var(--danger)":e>60?"var(--accent-amber)":"var(--accent)";return u.jsx("div",{style:{background:"var(--border)",borderRadius:99,height:6,overflow:"hidden",width:"100%"},children:u.jsx("div",{style:{width:`${e}%`,height:"100%",background:t,borderRadius:99,transition:"width .5s ease"}})})}function mx({size:e=44}){return u.jsx("span",{style:{width:e,height:e,borderRadius:"50%",background:"var(--mega-red)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px var(--mega-red-glow)",flexShrink:0,overflow:"hidden",animation:"softPulse 3s ease infinite"},children:u.jsx("img",{src:kt.logoImage,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function r8({jobs:e,history:t}){return!e.length&&!t.length?null:u.jsxs("div",{className:"transfer-panel",children:[u.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("strong",{style:{fontSize:13},children:"Transfers"}),u.jsx("span",{style:{fontSize:11,background:"var(--mega-red)",color:"#fff",padding:"2px 8px",borderRadius:99,fontWeight:700},children:e.filter(n=>n.status==="downloading").length})]}),u.jsxs("div",{style:{maxHeight:260,overflow:"auto",padding:12},children:[e.map(n=>u.jsxs("div",{style:{marginBottom:12},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:12,marginBottom:6},children:[u.jsx("span",{style:{color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),u.jsx("span",{style:{color:n.status==="failed"?"var(--danger)":"var(--accent-blue)",fontWeight:800},children:n.status==="failed"?"Failed":`${n.percent}%`})]}),u.jsx(dl,{value:n.percent})]},n.id)),t.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",fontWeight:800,margin:"10px 0 8px",textTransform:"uppercase"},children:"Recent downloads"}),t.slice(0,4).map(n=>u.jsxs("div",{style:{padding:"8px 0",borderTop:"1px solid var(--border)"},children:[u.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),u.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:bo(n.downloadedAt)})]},n.id))]})]})]})}function i8({title:e,message:t,onConfirm:n,onCancel:r,danger:i=!1}){return u.jsx("div",{className:"modal-backdrop",onClick:r,children:u.jsxs("div",{className:"modal-card",onClick:o=>o.stopPropagation(),children:[u.jsx("div",{style:{fontSize:36,textAlign:"center",marginBottom:16},children:i?"⚠️":"❓"}),u.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:8},children:e}),u.jsx("p",{style:{color:"var(--text-secondary)",fontFamily:"var(--font)",fontSize:14,textAlign:"center",marginBottom:28,lineHeight:1.5},children:t}),u.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[u.jsx("button",{type:"button",onClick:r,className:"btn-secondary",children:"Cancel"}),u.jsx("button",{type:"button",onClick:n,className:"btn-primary",style:i?{background:"var(--danger)",boxShadow:"0 10px 28px rgba(248,113,113,.25)"}:void 0,children:i?"Delete":"Confirm"})]})]})})}function o8({file:e,onRename:t,onCancel:n}){const[r,i]=w.useState(e.name),o=w.useRef(null);return w.useEffect(()=>{var s;(s=o.current)==null||s.select()},[]),u.jsx("div",{className:"modal-backdrop",onClick:n,children:u.jsxs("div",{className:"modal-card",onClick:s=>s.stopPropagation(),children:[u.jsx("div",{style:{fontSize:32,textAlign:"center",marginBottom:12},children:"✏️"}),u.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:20},children:"Rename File"}),u.jsx("input",{ref:o,value:r,onChange:s=>i(s.target.value),onKeyDown:s=>s.key==="Enter"&&t(r),className:"input-field",style:{marginBottom:20}}),u.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",flexWrap:"wrap"},children:[u.jsx("button",{type:"button",onClick:n,className:"btn-secondary",children:"Cancel"}),u.jsx("button",{type:"button",onClick:()=>t(r),className:"btn-primary",children:"Rename"})]})]})})}function dk({tags:e}){return e!=null&&e.length?u.jsx("div",{style:{display:"flex",gap:4,marginTop:4,flexWrap:"wrap"},children:e.slice(0,3).map(t=>u.jsx("span",{style:{fontSize:10,padding:"2px 6px",borderRadius:6,background:"rgba(240,22,58,.12)",color:"var(--accent)",fontWeight:600},children:t},t))}):null}function xr({label:e,onClick:t,tone:n="neutral",disabled:r=!1}){const i=n==="accent"?"accent":n==="blue"?"blue":"";return u.jsx("button",{type:"button",className:`quick-action-btn ${i}`.trim(),title:e,disabled:r,onClick:o=>{o.stopPropagation(),r||t()},children:e})}function s8({file:e,onDelete:t,onShare:n,onPreview:r,onRename:i,onDownload:o,onMove:s,onCopy:a,onTags:l,onEdit:c,onPrint:d,onAnnotate:f}){return u.jsxs("div",{className:"file-list-card",children:[u.jsx("div",{style:{fontSize:34,flexShrink:0,width:48,height:48,borderRadius:14,background:"rgba(56,189,248,.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:Gs(e.mimeType)}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:16,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),u.jsxs("div",{style:{color:"var(--text-muted)",fontSize:12,marginTop:3},children:[Ke(e.size)," · ",bo(e.createdAt)]}),u.jsx(dk,{tags:e.tags})]}),u.jsxs("div",{className:"file-list-actions",children:[u.jsx(xr,{label:"Preview",disabled:!$h(e.mimeType),onClick:()=>r(e),tone:"blue"}),u.jsx(xr,{label:"Download",onClick:()=>o(e)}),u.jsx(xr,{label:"Share",onClick:()=>n(e),tone:"accent"}),u.jsx(xr,{label:"Rename",onClick:()=>i(e)}),u.jsx(Vb,{file:e,onMove:s,onCopy:a,onTags:l,onEdit:c,onDelete:t,onPrint:d,onAnnotate:f})]})]})}function a8({file:e,token:t,onDelete:n,onShare:r,onPreview:i,onRename:o,onDownload:s,onMove:a,onCopy:l,onTags:c,onEdit:d,onPrint:f,onAnnotate:h}){var m;const p=(m=e.mimeType)==null?void 0:m.startsWith("image/");return u.jsxs("div",{className:"glass-card mega-file-card",style:{borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[u.jsxs("div",{style:{height:170,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(217,0,7,.08), rgba(20,20,20,.95))",borderBottom:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[p?u.jsx(DI,{fileId:e.id,token:t,alt:e.name,mimeType:e.mimeType}):u.jsx("div",{style:{fontSize:56,display:"flex"},children:Gs(e.mimeType)}),u.jsx("div",{style:{position:"absolute",right:8,bottom:8,fontSize:10,fontWeight:700,background:"var(--bg-card)",color:"var(--text)",padding:"2px 6px",borderRadius:6},children:Ke(e.size)}),u.jsx("div",{style:{position:"absolute",right:10,top:10},children:u.jsx(Vb,{file:e,onMove:a,onCopy:l,onTags:c,onEdit:d,onDelete:n,onPrint:f,onAnnotate:h})})]}),u.jsxs("div",{style:{padding:"14px"},children:[u.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:5},children:e.name}),u.jsxs("div",{style:{color:"var(--text-muted)",fontSize:11},children:[Ke(e.size)," · ",bo(e.createdAt)]}),u.jsx(dk,{tags:e.tags}),u.jsxs("div",{className:"grid-actions",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[u.jsx(xr,{label:"Preview",disabled:!$h(e.mimeType),onClick:()=>i(e),tone:"blue"}),u.jsx(xr,{label:"Share",onClick:()=>r(e),tone:"accent"}),u.jsx(xr,{label:"Download",onClick:()=>s(e)}),u.jsx(xr,{label:"Rename",onClick:()=>o(e)})]})]})]})}function l8({account:e,onManage:t}){if(!(e!=null&&e.storageWarning))return null;const n=e.storageWarning==="critical";return u.jsxs("div",{style:{padding:"10px 20px",background:n?"rgba(255,77,77,.12)":"rgba(246,179,71,.12)",borderBottom:`1px solid ${n?"var(--danger)":"var(--accent-amber)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap",fontSize:13,fontFamily:"var(--font)"},children:[u.jsx("span",{children:n?"Storage almost full (95%+).":"Storage over 80% full."}),u.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{padding:"6px 14px",fontSize:13},children:"Manage storage"})]})}function c8({username:e,stats:t,storagePercent:n,onUpload:r,onNewFolder:i}){return u.jsxs("div",{className:"mega-drive-header",children:[u.jsx("h1",{style:{fontSize:28,fontWeight:800,color:"var(--text)",marginBottom:20},children:"Cloud drive"}),u.jsxs("div",{className:"mega-drive-actions",children:[u.jsx("button",{type:"button",className:"btn-primary mega-upload-btn",onClick:r,children:"↑ Upload"}),u.jsx("button",{type:"button",className:"btn-secondary mega-folder-btn",onClick:i,children:"+ New folder"})]}),u.jsxs("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:8},children:[t.totalFiles," files · ",t.totalFolders," folders · ",Math.round(n),"% storage used",e?` · @${e}`:""]})]})}function u8({children:e,onNavigate:t,onSignOut:n,onUpgrade:r,transferActive:i=!1}){const{account:o,notifications:s,unreadCount:a,markAllRead:l}=Wb();return u.jsxs(u.Fragment,{children:[u.jsx(Yj,{account:o,onOpenSettings:()=>t("settings")}),u.jsx(Gj,{account:o,onUpgrade:r}),u.jsx(l8,{account:o,onManage:()=>t("billing")}),u.jsxs("header",{className:"account-header mega-top-bar",children:[u.jsx(Kj,{notifications:s,unreadCount:a,onMarkAllRead:l}),u.jsx("div",{style:{display:"flex",alignItems:"center",gap:16},children:u.jsx(Hj,{account:o,onNavigate:t,onSignOut:n})})]}),u.jsx(qL,{elevated:i}),e]})}function d8(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?new URLSearchParams(window.location.search).get("token"):null}function gx(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/reset-password")?new URLSearchParams(window.location.search).get("token"):null}function yx(){const e=window.location.pathname.replace(/\/+$/,"")||"/";if(e.startsWith("/share/")){const t=e.split("/");if(t.length>=3)return t[2]}return null}function f8(){const[e,t]=w.useState(()=>window.innerWidth);return w.useEffect(()=>{const n=()=>t(window.innerWidth);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),{width:e,isMobile:e<=768,isSmall:e<=520}}function ad({value:e,onChange:t,options:n,style:r}){var a;const[i,o]=w.useState(!1),s=((a=n.find(l=>l.value===e))==null?void 0:a.label)||e;return u.jsxs("div",{style:{position:"relative",...r},children:[u.jsxs("button",{type:"button",onClick:()=>o(!i),className:"select-field",style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,width:"100%"},children:[u.jsx("span",{children:s}),u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{transform:i?"rotate(180deg)":"none",transition:"0.2s",opacity:.5},children:u.jsx("path",{d:"M6 9l6 6 6-6"})})]}),i&&u.jsxs(u.Fragment,{children:[u.jsx("div",{onClick:()=>o(!1),style:{position:"fixed",inset:0,zIndex:150}}),u.jsx("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,minWidth:"100%",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"0 12px 40px rgba(0,0,0,0.35)",zIndex:151,overflow:"hidden",animation:"fadeIn 0.15s ease"},children:n.map(l=>u.jsxs("button",{type:"button",onClick:()=>{t(l.value),o(!1)},style:{display:"block",width:"100%",padding:"10px 14px",border:"none",background:l.value===e?"rgba(59,130,246,0.12)":"transparent",color:"var(--text)",fontFamily:"var(--font)",fontSize:13,fontWeight:l.value===e?600:500,cursor:"pointer",textAlign:"left",transition:"background 0.15s",whiteSpace:"nowrap"},onMouseEnter:c=>{l.value!==e&&(c.currentTarget.style.background="rgba(255,255,255,0.06)")},onMouseLeave:c=>{c.currentTarget.style.background=l.value===e?"rgba(59,130,246,0.12)":"transparent"},children:[l.label,l.value===e&&u.jsx("span",{style:{marginLeft:8,color:"var(--accent-blue)"},children:"✓"})]},l.value))})]})]})}function h8(){const[e,t]=w.useState(d8),[n,r]=w.useState(gx),[i,o]=w.useState(yx),[s,a]=w.useState(()=>{const j=localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token"),V=gx(),J=yx();return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?"verify-email":V?"reset-password":J?"shared-link":j?"app":"landing"}),[l,c]=w.useState("login"),[d,f]=w.useState(()=>localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token")||""),[h,p]=w.useState(()=>localStorage.getItem("cv_user")||sessionStorage.getItem("cv_user")||""),[m,y]=w.useState(null),[b,g]=w.useState([]),[x,v]=w.useState([]),[k,_]=w.useState({totalFiles:0,storageUsed:0,storageQuota:1024*1024*1024,totalFolders:0}),[C,T]=w.useState(null),[I,A]=w.useState([]),[P,N]=w.useState(""),[D,F]=w.useState(!1),[$,H]=w.useState(0),[q,re]=w.useState(null),[M,U]=w.useState([]),[S,X]=w.useState(()=>{try{return JSON.parse(localStorage.getItem("cv_downloadHistory")||"[]")}catch{return[]}}),[ne,E]=w.useState(null),[ye,Pe]=w.useState(null),[de,ve]=w.useState(""),[Pt,We]=w.useState(!1),[Fe,lt]=w.useState(!1),[ct,er]=w.useState(()=>localStorage.getItem("cv_viewMode")||"list"),[mn,ki]=w.useState("all"),[Vt,Br]=w.useState(()=>localStorage.getItem("cv_theme")||"dark"),[An,xt]=w.useState(null),[tr,Nn]=w.useState(null),[vt,nr]=w.useState(!1),[pe,B]=w.useState("drive"),[R,z]=w.useState("createdAt"),[W,ie]=w.useState("desc"),[fe,Rt]=w.useState(""),[Zt,en]=w.useState([]),[Vr,Ur]=w.useState(1),[ut,rr]=w.useState(!1),[bt,jo]=w.useState(!1),[fk,hk]=w.useState([]),[pk,mk]=w.useState([]),[gk,yk]=w.useState([]),[Kp,xk]=w.useState(null),[Si,Po]=w.useState(null),[Oc,qp]=w.useState(null),[zc,Fc]=w.useState(null),[Xp,Qp]=w.useState(null),[ia,Jp]=w.useState(null),[Zp,vk]=w.useState("user"),[em,bk]=w.useState([]),[tm,wk]=w.useState(null),[Dn,Wr]=w.useState(null),[kk,Sk]=w.useState([]),[Ck,Ek]=w.useState([]),[_k,Tk]=w.useState([]),Bc=Vj(P,400),{isMobile:Vc,isSmall:Ik}=f8(),Ro=w.useRef(),nm=w.useRef(),he=w.useCallback((j,V="info")=>E({msg:j,type:V}),[]),ce=w.useCallback((j,V)=>it(j,V,d),[d]),tt=w.useCallback(async(j=1,V=!1)=>{var J,ae;if(d){jo(!0);try{if(pe==="trash"){const Ut=await ce("/trash");mk(Hr(Ut,"files")),yk(Hr(Ut,"folders")),jo(!1);return}if(pe==="admin"){const[Ut,Kk]=await Promise.all([ce("/admin/users?limit=50"),ce("/admin/analytics").catch(()=>null)]);bk(Hr(Ut,"users")),wk(Kk),jo(!1);return}if(pe==="dashboard"){const Ut=await ce("/storage/usage");xk(Ut),_({totalFiles:Ut.fileCount??0,storageUsed:Ut.storageUsed??0,storageQuota:Ut.storageQuota??1024*1024*1024,totalFolders:Ut.folderCount??0}),jo(!1);return}const le=new URLSearchParams;C&&le.set("folderId",C),Bc&&le.set("search",Bc),fe&&le.set("tag",fe),le.set("sortBy",R),le.set("sortOrder",W),le.set("page",String(j)),le.set("limit","30");const[me,tn,$r,$c,Yk]=await Promise.all([ce(`/files?${le}`),ce(`/folders?${C?`parentId=${C}`:""}`),ce("/storage/usage"),ce("/files/tags").catch(()=>({tags:[]})),ce("/folders?all=true").catch(()=>({folders:[]}))]),Hc=Hr(me,"files"),lm=Hr(tn,"folders");g(V?Ut=>[...Ut,...Hc]:Hc),v(lm),en(($c==null?void 0:$c.tags)||[]),hk(Hr(Yk,"folders")),rr((((J=me==null?void 0:me.pagination)==null?void 0:J.page)||1)<(((ae=me==null?void 0:me.pagination)==null?void 0:ae.totalPages)||1)),Ur(j),_({totalFiles:$r.fileCount??Hc.length,storageUsed:$r.storageUsed??0,storageQuota:$r.storageQuota??1024*1024*1024,totalFolders:$r.folderCount??lm.length})}catch(le){console.error("Refresh failed:",le);const me=le.message.toLowerCase();me.includes("credential")||me.includes("unauthorized")||me.includes("token")?(localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),f(""),p(""),a("landing")):he(le.message,"error")}jo(!1)}},[d,C,Bc,fe,R,W,pe,ce,he]);w.useEffect(()=>{tt(1,!1)},[tt]),w.useEffect(()=>{ce("/users/me").then(j=>vk((j==null?void 0:j.role)||"user")).catch(()=>{})},[d,ce]),w.useEffect(()=>{if(!d||pe==="drive"||pe==="trash"||pe==="dashboard"||pe==="admin")return;(async()=>{try{if(pe==="recent"){const V=await ce("/dashboard");Sk(V.recentFiles||[])}else if(pe==="starred"){const V=await ce("/files?isStarred=true&limit=50");Ek(Hr(V,"files"))}else if(pe==="shared"){const V=await ce("/dashboard"),J=[...V.sharedWithMe||[],...V.sharedByMe||[]].map(ae=>ae.file||ae);Tk(J.filter(Boolean))}}catch{}})()},[d,pe,ce]);const jk=j=>{Wr(j),j==="dashboard"&&B("dashboard"),j==="billing"&&Wr("billing")};w.useEffect(()=>{localStorage.setItem("cv_viewMode",ct)},[ct]),w.useEffect(()=>{localStorage.setItem("cv_theme",Vt)},[Vt]),w.useEffect(()=>{const j=V=>{if((V.metaKey||V.ctrlKey)&&V.key==="k"){V.preventDefault();const J=document.querySelector(".search-input-animated");J&&J.focus()}};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[]),w.useEffect(()=>{const j=V=>{var J;(J=V.detail)!=null&&J.token&&f(V.detail.token)};return window.addEventListener("cv-token-refreshed",j),()=>window.removeEventListener("cv-token-refreshed",j)},[]);const Pk=(j,V,J,ae,le=!0)=>{if(!j&&(ae!=null&&ae.email)){y(ae),a("verify-email");return}if(!j)return;const me=le?localStorage:sessionStorage,tn=le?sessionStorage:localStorage;me.setItem("cv_token",j),tn.removeItem("cv_token"),V&&me.setItem("cv_refreshToken",V),tn.removeItem("cv_refreshToken");const $r=typeof J=="string"?J:(ae==null?void 0:ae.fullName)||(ae==null?void 0:ae.email);me.setItem("cv_user",$r||""),tn.removeItem("cv_user"),ae!=null&&ae.avatarUrl&&me.setItem("cv_avatar",ae.avatarUrl),f(j),p($r||""),a("app")},Rk=async j=>{const V=`${j.id}-${Date.now()}`;re({name:j.name,percent:0}),U(J=>[{id:V,name:j.name,percent:0,status:"downloading"},...J].slice(0,6));try{const J=await kc(j.id,d,{onProgress:le=>{re({name:j.name,percent:le}),U(me=>me.map(tn=>tn.id===V?{...tn,percent:le}:tn))}});R1(J,j.name);const ae={id:V,name:j.name,size:j.size,downloadedAt:new Date().toISOString()};X(le=>{const me=[ae,...le].slice(0,12);return localStorage.setItem("cv_downloadHistory",JSON.stringify(me)),me}),U(le=>le.map(me=>me.id===V?{...me,percent:100,status:"complete"}:me)),he(`Downloaded "${j.name}"`,"success")}catch(J){U(ae=>ae.map(le=>le.id===V?{...le,status:"failed"}:le)),he(J.message,"error")}re(null)},rm=async()=>{try{const j=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");await ce("/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:j})})}catch{}localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),f(""),p(""),a("landing")},im=async(j,V,J)=>{if(!d)throw new Error("Authentication token missing. Please log in again.");const ae=new FormData;return ae.append("file",j),V&&ae.append("folderId",V),A1("/files/upload",ae,d,J)},Ak=async(j,V)=>ce("/folders",{method:"POST",body:JSON.stringify({name:j,parentId:V||null})}),Uc=async(j,V=!1)=>{if(!d){he("Please log in again to upload files.","error");return}const J=Array.from(j||[]);if(!J.length)return;F(!0),H(0);let ae=0;try{if(V&&J.some(le=>le.webkitRelativePath))await Uj(J,{baseFolderId:C,createFolder:Ak,uploadFile:async(le,me)=>{await im(le,me,H),ae++},onProgress:H});else for(let le=0;le<J.length;le++)try{await im(J[le],C,me=>{const tn=Math.round((le+me/100)/J.length*100);H(tn)}),ae++}catch(me){he(`Failed to upload "${J[le].name}": ${me.message}`,"error")}}finally{F(!1),H(0),tt(1,!1),ae>0&&he(`${ae} file(s) uploaded successfully!`,"success")}},Nk=j=>{xt({title:"Delete File",message:`Move "${j.name}" to trash? You can restore it later from the Trash view.`,danger:!0,onConfirm:async()=>{xt(null);try{await ce(`/files/${j.id}`,{method:"DELETE"}),tt(),he("File deleted","success")}catch(V){he(V.message,"error")}}})},Dk=j=>{xt({title:"Delete Folder",message:`Delete folder "${j.name}" and all its contents? This cannot be undone.`,danger:!0,onConfirm:async()=>{xt(null);try{await ce(`/folders/${j.id}`,{method:"DELETE"}),tt(),he("Folder deleted","success")}catch(V){he(V.message,"error")}}})},Mk=async(j,V)=>ce(`/files/${j.id}/share`,{method:"POST",body:JSON.stringify(V)}),Lk=async(j,{targetFolderId:V})=>{try{await ce(`/files/${j.id}/move`,{method:"POST",body:JSON.stringify({targetFolderId:V})}),Po(null),tt(1,!1),he("File moved","success")}catch(J){he(J.message,"error")}},Ok=async(j,{targetFolderId:V,newName:J})=>{try{await ce(`/files/${j.id}/copy`,{method:"POST",body:JSON.stringify({targetFolderId:V,newName:J!==j.name?J:void 0})}),Po(null),tt(1,!1),he("File copied","success")}catch(ae){he(ae.message,"error")}},zk=async(j,V)=>{try{await ce(`/files/${j.id}`,{method:"PUT",body:JSON.stringify({tags:V})}),Fc(null),tt(1,!1),he("Tags updated","success")}catch(J){he(J.message,"error")}},Fk=async j=>{try{await ce(`/trash/files/${j}/restore`,{method:"POST"}),tt(1,!1),he("File restored","success")}catch(V){he(V.message,"error")}},Bk=async j=>{try{await ce(`/trash/folders/${j}/restore`,{method:"POST"}),tt(1,!1),he("Folder restored","success")}catch(V){he(V.message,"error")}},Vk=j=>{xt({title:"Delete forever",message:`"${j.name}" will be permanently deleted. This cannot be undone.`,danger:!0,onConfirm:async()=>{xt(null);try{await ce(`/files/${j.id}/permanent`,{method:"DELETE"}),tt(1,!1),he("File permanently deleted","success")}catch(V){he(V.message,"error")}}})},Uk=()=>{xt({title:"Empty trash",message:"All items in trash will be permanently deleted.",danger:!0,onConfirm:async()=>{xt(null);try{await ce("/trash/empty",{method:"POST"}),tt(1,!1),he("Trash emptied","success")}catch(j){he(j.message,"error")}}})},Wk=async(j,V)=>{if(!V.trim()||V===j.name){Nn(null);return}try{await ce(`/files/${j.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:V})}),tt(),he("File renamed","success")}catch(J){he(J.message,"error")}Nn(null)},om=async()=>{if(de.trim()){try{await ce("/folders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:de,parentId:C})}),tt(),he("Folder created!","success")}catch(j){he(j.message,"error")}ve(""),We(!1)}},$k=j=>{T(j.id),A(V=>[...V,j]),nr(!1)},sm=j=>{j===-1?(T(null),A([])):(T(I[j].id),A(V=>V.slice(0,j+1)))},Hk=j=>{j.preventDefault(),lt(!1),j.dataTransfer.files.length>0&&Uc(j.dataTransfer.files)},oa=w.useMemo(()=>{const j=vg.find(V=>V.key===mn);return!j||j.key==="all"?b:b.filter(V=>j.test(V.mimeType||""))},[b,mn]),Wc=k.storageQuota||1024*1024*1024,am=Math.min(100,k.storageUsed/Wc*100);if(e)return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Ji}),u.jsx(r0,{token:e,onVerified:()=>{t(null),window.history.replaceState({},"","/"),a("auth"),c("login")},onBack:()=>{t(null),window.history.replaceState({},"","/"),a("auth"),c("login")}})]});if(n)return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Ji}),u.jsx(i0,{token:n,onBack:()=>{r(null),window.history.replaceState({},"","/"),a("auth"),c("login")}})]});if(s==="landing"&&!d)return u.jsx(ME,{onGetStarted:()=>{c("register"),a("auth")},onLogin:()=>{c("login"),a("auth")},onSignUp:()=>{c("register"),a("auth")}});if(s==="auth"&&!d)return u.jsx(RI,{initialMode:l,onAuth:Pk,onNeedsVerification:j=>{y(j),a("verify-email")},onBack:()=>a("landing")});if(s==="verify-email"&&!d)return u.jsx(r0,{email:m==null?void 0:m.email,onVerified:()=>{y(null),a("auth"),c("login")},onBack:()=>{y(null),a("auth"),c("login")}});if(s==="reset-password"&&!d)return u.jsx(i0,{token:n,onSuccess:()=>{r(null),window.history.replaceState({},"","/"),a("auth"),c("login")},onBack:()=>{r(null),a("auth"),c("login")}});if(s==="shared-link")return u.jsx("div",{"data-theme":Vt,className:"app-shell",children:u.jsx(c4,{token:i})});const Gk=ct==="grid"?a8:s8;return u.jsx($j,{token:d,children:u.jsx(u8,{transferActive:M.length>0||S.length>0,onNavigate:j=>{Wr(null),jk(j)},onSignOut:rm,onUpgrade:()=>{Wr("billing"),B("drive")},children:u.jsxs("div",{"data-theme":Vt,className:"app-shell",children:[u.jsx("style",{children:Ji}),u.jsx("button",{type:"button",className:"mobile-menu-button","aria-label":"Open navigation menu","aria-expanded":vt,onClick:()=>nr(j=>!j),children:"☰"}),vt&&Vc&&u.jsx("div",{onClick:()=>nr(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:99}}),u.jsxs("div",{className:`sidebar ${vt?"open":""}`,style:{position:"fixed",left:0,top:0,bottom:0,width:260,background:"var(--bg-sidebar)",borderRight:"1px solid var(--border)",padding:"16px 12px",display:"flex",flexDirection:"column",gap:4,zIndex:100,transition:"transform .35s cubic-bezier(.4,0,.2,1)",...Vc?{transform:vt?"translateX(0)":"translateX(-100%)"}:{}},children:[u.jsxs("div",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:10,padding:"4px 8px"},children:[u.jsx(mx,{size:40}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:20,fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em"},children:"Drive"}),u.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:1},children:["@",h]})]})]}),u.jsx("button",{type:"button",onClick:()=>{var j;return(j=Ro.current)==null?void 0:j.click()},className:"btn-primary",style:{minHeight:48,borderRadius:999,fontSize:15,justifyContent:"center",display:"flex",alignItems:"center",gap:8,margin:"0 0 16px"},children:"+ New"}),[{id:"drive",icon:"drive",label:"My Drive"},{id:"recent",icon:"recent",label:"Recent"},{id:"starred",icon:"starred",label:"Starred"},{id:"shared",icon:"shared",label:"Shared"},{id:"dashboard",icon:"usage",label:"Storage"},{id:"trash",icon:"trash",label:"Trash"},{id:"activity",icon:"activity",label:"Activity"},...Zp==="admin"||Zp==="super_admin"?[{id:"admin",icon:"admin",label:"Admin"}]:[]].map(j=>u.jsxs("button",{type:"button",className:`nav-item${pe===j.id?" active":""}`,"aria-current":pe===j.id?"page":void 0,onClick:()=>{Wr(null),B(j.id),nr(!1),j.id==="drive"&&(T(null),A([]))},children:[u.jsx(Xj,{name:j.icon,active:pe===j.id}),u.jsx("span",{children:j.label})]},j.id)),u.jsx("div",{style:{borderTop:"1px solid var(--border)",margin:"12px 0 8px"}}),u.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1px",marginBottom:8,paddingLeft:4},children:"OVERVIEW"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16},children:[u.jsxs("div",{className:"stat-mini",children:[u.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:k.totalFiles}),u.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Files"})]}),u.jsxs("div",{className:"stat-mini",children:[u.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:k.totalFolders}),u.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Folders"})]})]}),u.jsxs("div",{style:{marginTop:"auto"},children:[u.jsxs("div",{style:{marginBottom:16,background:"var(--surface-raised)",borderRadius:14,padding:"14px",border:"1px solid var(--border)"},title:`${Ke(k.storageUsed)} of ${Ke(Wc)} used`,children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:[u.jsx("span",{style:{fontWeight:600},children:"Free"}),u.jsxs("span",{children:[Ke(k.storageUsed)," of ",Ke(Wc)," used"]})]}),u.jsx(dl,{value:am}),u.jsx("button",{type:"button",onClick:()=>Wr("billing"),className:"btn-mega-red",style:{width:"100%",marginTop:12,minHeight:40,animation:"softPulse 3s ease infinite"},children:"Upgrade"})]}),u.jsx("button",{type:"button",onClick:rm,className:"btn-danger",children:"Sign Out"})]})]}),u.jsxs("div",{className:"main-content",style:{marginLeft:Vc?0:260,padding:"20px 32px",minHeight:"100vh"},children:[u.jsx(p8,{appPage:Dn,setAppPage:Wr,api:ce,token:d,notify:he,stats:k,usageDetail:Kp,adminUsers:em,systemHealth:tm,loading:bt,onRefreshAccount:()=>{},theme:Vt,setTheme:Br}),!Dn&&pe==="recent"&&u.jsx(w.Suspense,{fallback:u.jsx(Bn,{}),children:u.jsx(sd,{title:"Recent files",files:kk,emptyMessage:"No recent files yet.",onBack:()=>B("drive"),onOpen:Pe})}),!Dn&&pe==="starred"&&u.jsx(w.Suspense,{fallback:u.jsx(Bn,{}),children:u.jsx(sd,{title:"Starred",files:Ck,emptyMessage:"Star files to see them here.",onBack:()=>B("drive"),onOpen:Pe})}),!Dn&&pe==="shared"&&u.jsx(w.Suspense,{fallback:u.jsx(Bn,{}),children:u.jsx(sd,{title:"Shared with you",files:_k,emptyMessage:"Nothing shared yet.",onBack:()=>B("drive"),onOpen:Pe})}),!Dn&&pe==="activity"&&u.jsx(w.Suspense,{fallback:u.jsx(Bn,{}),children:u.jsx(t8,{api:ce,onBack:()=>B("drive")})}),!Dn&&pe==="trash"&&u.jsx(MI,{trashedFiles:pk,trashedFolders:gk,loading:bt,onRestoreFile:Fk,onRestoreFolder:Bk,onPermanentDelete:Vk,onEmptyTrash:Uk,onBack:()=>B("drive")}),!Dn&&pe==="dashboard"&&u.jsx(Cj,{stats:k,usage:Kp,onBack:()=>B("drive")}),!Dn&&pe==="admin"&&u.jsx(Dj,{users:em,systemHealth:tm,loading:bt,onBack:()=>B("drive")}),!Dn&&pe==="drive"&&u.jsxs(u.Fragment,{children:[u.jsx(c8,{username:h,stats:k,storagePercent:am,onUpload:()=>{var j;return(j=Ro.current)==null?void 0:j.click()},onNewFolder:()=>We(!0)}),u.jsxs("div",{className:"drive-toolbar",children:[u.jsxs("div",{className:"mega-search-bar drive-search",style:{position:"relative",flex:1,minWidth:0},children:[u.jsx("span",{className:"search-icon","aria-hidden":"true",style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:"var(--text-muted)",pointerEvents:"none"},children:"🔍"}),u.jsx("input",{className:"input-field search-input-animated",placeholder:"Search Cloud drive...",value:P,onChange:j=>N(j.target.value),style:{width:"100%",padding:"12px 60px 12px 44px",borderRadius:999,background:"var(--bg-card)",border:"1px solid var(--border)",transition:"border-color .2s ease, box-shadow .2s ease"}}),u.jsx("div",{style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"rgba(255,255,255,.08)",padding:"2px 6px",borderRadius:6,fontSize:11,fontWeight:700,color:"var(--text-muted)",pointerEvents:"none",border:"1px solid var(--border)"},children:"⌘K"})]}),u.jsxs("div",{className:"drive-toolbar-row",children:[u.jsx("button",{type:"button",className:"icon-btn",title:Vt==="dark"?"Light mode":"Dark mode",onClick:()=>Br(j=>j==="dark"?"light":"dark"),children:Vt==="dark"?"☀":"🌙"}),u.jsxs("div",{className:"view-toggle",children:[u.jsx("button",{type:"button",onClick:()=>er("list"),className:`view-toggle-btn${ct==="list"?" active":""}`,children:"☰"}),u.jsx("button",{type:"button",onClick:()=>er("grid"),className:`view-toggle-btn${ct==="grid"?" active":""}`,children:"▦"})]}),pe==="drive"&&u.jsxs("div",{className:"drive-actions",style:{marginLeft:"auto"},children:[u.jsx("button",{type:"button",onClick:()=>We(j=>!j),className:"btn-secondary mega-folder-btn",children:"New folder"}),u.jsx("button",{type:"button",onClick:()=>{var j;return(j=Ro.current)==null?void 0:j.click()},className:"btn-primary mega-upload-btn",children:"Upload"}),u.jsx("button",{type:"button",onClick:()=>{var j;return(j=nm.current)==null?void 0:j.click()},className:"btn-secondary",children:"Folder"}),u.jsx("input",{ref:Ro,type:"file",multiple:!0,hidden:!0,onChange:j=>{Uc(j.target.files),j.target.value=""}}),u.jsx("input",{ref:nm,type:"file",multiple:!0,webkitdirectory:"",hidden:!0,onChange:j=>{Uc(j.target.files,!0),j.target.value=""}})]})]})]}),pe==="drive"&&u.jsxs("div",{className:"drive-sortbar",children:[u.jsx(ad,{value:R,onChange:z,options:[{value:"createdAt",label:"Date"},{value:"name",label:"Name"},{value:"size",label:"Size"},{value:"updatedAt",label:"Modified"}]}),u.jsx(ad,{value:W,onChange:ie,options:[{value:"desc",label:"Descending"},{value:"asc",label:"Ascending"}]}),Zt.length>0&&u.jsx(ad,{value:fe,onChange:Rt,options:[{value:"",label:"All tags"},...Zt.map(j=>({value:j,label:j}))],style:{gridColumn:Ik?"1 / -1":void 0}})]}),pe==="drive"&&u.jsx("div",{className:"filter-chips",children:vg.map(j=>u.jsxs("button",{type:"button",onClick:()=>ki(j.key),className:`filter-chip${mn===j.key?" active":""}`,children:[u.jsx("span",{children:j.icon})," ",j.label]},j.key))}),pe==="drive"&&Pt&&u.jsxs("div",{className:"new-folder-row",style:{display:"flex",gap:10,marginBottom:20,animation:"fadeIn .2s ease"},children:[u.jsx("input",{className:"input-field",placeholder:"Folder name…",value:de,onChange:j=>ve(j.target.value),onKeyDown:j=>j.key==="Enter"&&om(),style:{width:260},autoFocus:!0}),u.jsx("button",{type:"button",onClick:om,className:"btn-primary",children:"Create"}),u.jsx("button",{type:"button",onClick:()=>We(!1),className:"btn-secondary",children:"Cancel"})]}),u.jsxs("div",{className:"breadcrumb-row",style:{alignItems:"center",gap:8,marginBottom:20,fontSize:14,color:"var(--text-muted)"},children:[u.jsxs("span",{onClick:()=>sm(-1),className:"breadcrumb-link",style:{color:C?"var(--text-secondary)":"var(--accent)"},children:[kt.logo," Home"]}),I.map((j,V)=>u.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{color:"var(--text-muted)"},children:"›"}),u.jsx("span",{onClick:()=>sm(V),className:"breadcrumb-link",style:{color:V===I.length-1?"var(--accent)":"var(--text-secondary)"},children:j.name})]},j.id))]}),D&&u.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(240,22,58,.24)",animation:"fadeIn .2s ease"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[u.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx(Yf,{size:14})," Uploading…"]}),u.jsxs("span",{style:{fontWeight:700,color:"var(--accent)"},children:[$,"%"]})]}),u.jsx(dl,{value:$})]}),q&&u.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(64,144,255,.3)",animation:"fadeIn .2s ease"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[u.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx(Yf,{size:14,color:"var(--accent-blue)"})," Downloading ",q.name,"…"]}),u.jsxs("span",{style:{fontWeight:700,color:"var(--accent-blue)"},children:[q.percent,"%"]})]}),u.jsx(dl,{value:q.percent})]}),u.jsx("div",{onDragOver:j=>{j.preventDefault(),lt(!0)},onDragLeave:()=>lt(!1),onDrop:Hk,className:`drop-zone${Fe?" drag-over":""}`,children:Fe?u.jsx("span",{style:{color:"var(--accent)",fontWeight:700,fontSize:16},children:"⬇ Drop files here to upload"}):u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{fontSize:32,marginBottom:8},children:"📤"}),u.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:700,marginBottom:4},children:"Drag & drop files or folders"}),u.jsx("div",{style:{fontSize:13},children:"or use the Upload button above"})]})}),x.length>0&&u.jsxs("div",{style:{marginBottom:28},children:[u.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px",marginBottom:12},children:"FOLDERS"}),u.jsx("div",{className:"folder-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:x.map(j=>u.jsx(m8,{folder:j,onOpen:$k,onDelete:Dk},j.id))})]}),u.jsxs("div",{children:[u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:u.jsxs("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px"},children:["FILES ",oa.length>0&&u.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:500},children:["(",oa.length,")"]})]})}),bt?u.jsx(Bj,{count:6,grid:ct==="grid"}):oa.length===0?u.jsxs("div",{className:"glass-card empty-state",style:{textAlign:"center",padding:"72px 32px",borderRadius:"var(--radius-lg)",border:"1.5px dashed var(--border)",animation:"fadeIn .3s ease"},children:[u.jsx("div",{style:{width:88,height:88,margin:"0 auto 20px",borderRadius:24,background:"var(--gradient-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"var(--glow)"},children:u.jsx(mx,{size:48})}),u.jsx("div",{style:{fontWeight:800,fontSize:20,marginBottom:8,color:"var(--text)"},children:mn!=="all"?"No matching files":"No files in My Drive yet"}),u.jsx("div",{style:{fontSize:14,color:"var(--text-muted)",marginBottom:24,maxWidth:360,margin:"0 auto 24px"},children:mn!=="all"?"Try a different filter or upload new files.":"Upload photos, documents, and more. Everything stays secure in your drive."}),mn==="all"&&u.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[u.jsx("button",{type:"button",className:"btn-primary",onClick:()=>{var j;return(j=Ro.current)==null?void 0:j.click()},children:"Upload your first file"}),u.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>We(!0),children:"Create folder"})]})]}):u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`file-grid${ct==="grid"?" grid-view":""}`,style:{display:ct==="grid"?"grid":"flex",gridTemplateColumns:ct==="grid"?"repeat(auto-fill, minmax(250px, 1fr))":void 0,flexDirection:ct==="list"?"column":void 0,gap:ct==="grid"?12:8},children:oa.map(j=>u.jsx(Gk,{file:j,token:d,onDelete:Nk,onShare:V=>qp(V),onPreview:Pe,onRename:Nn,onDownload:Rk,onMove:V=>Po({file:V,mode:"move"}),onCopy:V=>Po({file:V,mode:"copy"}),onTags:Fc,onEdit:Qp,onPrint:async V=>{try{const J=await ce("/print/from-drive",{method:"POST",body:JSON.stringify({fileId:V.id})});J.success?Jp({code:J.data.code,expiresAt:J.data.expiresAt,fileName:V.name}):he(J.error||"Failed to create print code","error")}catch(J){he(J.message||"Failed to send to print","error")}},onAnnotate:V=>{Pe(V)}},j.id))}),ut&&u.jsx("button",{type:"button",onClick:()=>tt(Vr+1,!0),className:"load-more-btn",children:"Load more files"})]})]})]})]}),ye&&u.jsx(Sb,{file:ye,token:d,onClose:()=>Pe(null)}),Si&&u.jsx(FI,{file:Si.file,mode:Si.mode,folders:Wj(fk),currentFolderId:C,onCancel:()=>Po(null),onConfirm:j=>Si.mode==="move"?Lk(Si.file,j):Ok(Si.file,j)}),zc&&u.jsx(VI,{file:zc,allTags:Zt,onCancel:()=>Fc(null),onSave:j=>zk(zc,j)}),Oc&&u.jsx(Sj,{file:Oc,onCancel:()=>qp(null),onShare:j=>Mk(Oc,j)}),Xp&&u.jsx(Aj,{file:Xp,token:d,onClose:()=>Qp(null),onUploadComplete:()=>tt(1,!1)}),ia&&u.jsx(Nj,{code:ia.code,expiresAt:ia.expiresAt,fileName:ia.fileName,onClose:()=>Jp(null)}),An&&u.jsx(i8,{title:An.title,message:An.message,danger:An.danger,onConfirm:An.onConfirm,onCancel:()=>xt(null)}),tr&&u.jsx(o8,{file:tr,onRename:j=>Wk(tr,j),onCancel:()=>Nn(null)}),u.jsx(r8,{jobs:M,history:S}),ne&&u.jsx(n8,{msg:ne.msg,type:ne.type,onClose:()=>E(null)})]})})})}function p8({appPage:e,setAppPage:t,api:n,notify:r,stats:i,usageDetail:o,adminUsers:s,systemHealth:a,loading:l,onRefreshAccount:c,theme:d,setTheme:f}){const{account:h,refreshAll:p}=Wb();if(!e)return null;const m=()=>t(null);return e==="profile"?u.jsx(w.Suspense,{fallback:u.jsx(Bn,{}),children:u.jsx(XL,{account:h,onBack:m})}):e==="settings"?u.jsx(w.Suspense,{fallback:u.jsx(Bn,{}),children:u.jsx(QL,{account:h,api:n,onBack:m,onUpdated:()=>p(),notify:r,theme:d,onThemeChange:f})}):e==="security"?u.jsx(w.Suspense,{fallback:u.jsx(Bn,{}),children:u.jsx(JL,{api:n,account:h,onBack:m,notify:r})}):e==="billing"?u.jsx(w.Suspense,{fallback:u.jsx(Bn,{}),children:u.jsx(ZL,{account:h,api:n,onBack:m,notify:r,onUpdated:()=>p()})}):e==="help"?u.jsx(w.Suspense,{fallback:u.jsx(Bn,{}),children:u.jsx(e8,{onBack:m})}):null}function m8({folder:e,onOpen:t,onDelete:n}){const[r,i]=w.useState(!1);return u.jsxs("div",{className:"folder-card",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>t(e),children:[u.jsx("span",{style:{fontSize:24},children:"📁"}),u.jsx("div",{style:{flex:1,minWidth:0},children:u.jsx("div",{style:{fontWeight:600,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},children:e.name})}),u.jsx("button",{onClick:o=>{o.stopPropagation(),n(e)},style:{background:"none",border:"none",color:"rgba(255,100,100,.3)",cursor:"pointer",fontSize:14,padding:4,borderRadius:6,opacity:r?1:0,transition:"opacity .15s"},children:"🗑"})]})}P1(document.getElementById("root")).render(u.jsx(w.StrictMode,{children:u.jsx(h8,{})}));export{kt as B,PE as P,y8 as S,Ke as a,Gs as f,u as j,w as r,bo as t};
