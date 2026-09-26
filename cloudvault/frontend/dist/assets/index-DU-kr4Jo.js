var qk=Object.defineProperty;var Xk=(e,t,n)=>t in e?qk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ee=(e,t,n)=>Xk(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var v0={exports:{}},sc={},b0={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Us=Symbol.for("react.element"),Qk=Symbol.for("react.portal"),Jk=Symbol.for("react.fragment"),Zk=Symbol.for("react.strict_mode"),eS=Symbol.for("react.profiler"),tS=Symbol.for("react.provider"),nS=Symbol.for("react.context"),rS=Symbol.for("react.forward_ref"),iS=Symbol.for("react.suspense"),oS=Symbol.for("react.memo"),sS=Symbol.for("react.lazy"),um=Symbol.iterator;function aS(e){return e===null||typeof e!="object"?null:(e=um&&e[um]||e["@@iterator"],typeof e=="function"?e:null)}var w0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k0=Object.assign,S0={};function yo(e,t,n){this.props=e,this.context=t,this.refs=S0,this.updater=n||w0}yo.prototype.isReactComponent={};yo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function C0(){}C0.prototype=yo.prototype;function Kh(e,t,n){this.props=e,this.context=t,this.refs=S0,this.updater=n||w0}var qh=Kh.prototype=new C0;qh.constructor=Kh;k0(qh,yo.prototype);qh.isPureReactComponent=!0;var dm=Array.isArray,_0=Object.prototype.hasOwnProperty,Xh={current:null},E0={key:!0,ref:!0,__self:!0,__source:!0};function T0(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)_0.call(t,r)&&!E0.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Us,type:e,key:o,ref:s,props:i,_owner:Xh.current}}function lS(e,t){return{$$typeof:Us,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Us}function cS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hm=/\/+/g;function Yc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cS(""+e.key):t.toString(36)}function La(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Us:case Qk:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Yc(s,0):r,dm(i)?(n="",e!=null&&(n=e.replace(hm,"$&/")+"/"),La(i,t,n,"",function(u){return u})):i!=null&&(Qh(i)&&(i=lS(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(hm,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",dm(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+Yc(o,a);s+=La(o,t,n,c,i)}else if(c=aS(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+Yc(o,a++),s+=La(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function aa(e,t,n){if(e==null)return e;var r=[],i=0;return La(e,r,"","",function(o){return t.call(n,o,i++)}),r}function uS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},za={transition:null},dS={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:za,ReactCurrentOwner:Xh};function j0(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:aa,forEach:function(e,t,n){aa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return aa(e,function(){t++}),t},toArray:function(e){return aa(e,function(t){return t})||[]},only:function(e){if(!Qh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=yo;ae.Fragment=Jk;ae.Profiler=eS;ae.PureComponent=Kh;ae.StrictMode=Zk;ae.Suspense=iS;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dS;ae.act=j0;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=k0({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Xh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)_0.call(t,c)&&!E0.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Us,type:e.type,key:i,ref:o,props:r,_owner:s}};ae.createContext=function(e){return e={$$typeof:nS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tS,_context:e},e.Consumer=e};ae.createElement=T0;ae.createFactory=function(e){var t=T0.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:rS,render:e}};ae.isValidElement=Qh;ae.lazy=function(e){return{$$typeof:sS,_payload:{_status:-1,_result:e},_init:uS}};ae.memo=function(e,t){return{$$typeof:oS,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=za.transition;za.transition={};try{e()}finally{za.transition=t}};ae.unstable_act=j0;ae.useCallback=function(e,t){return mt.current.useCallback(e,t)};ae.useContext=function(e){return mt.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};ae.useEffect=function(e,t){return mt.current.useEffect(e,t)};ae.useId=function(){return mt.current.useId()};ae.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return mt.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};ae.useRef=function(e){return mt.current.useRef(e)};ae.useState=function(e){return mt.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return mt.current.useTransition()};ae.version="18.3.1";b0.exports=ae;var b=b0.exports;const Q=Gh(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hS=b,fS=Symbol.for("react.element"),pS=Symbol.for("react.fragment"),mS=Object.prototype.hasOwnProperty,gS=hS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yS={key:!0,ref:!0,__self:!0,__source:!0};function I0(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)mS.call(t,r)&&!yS.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:fS,type:e,key:o,ref:s,props:i,_owner:gS.current}}sc.Fragment=pS;sc.jsx=I0;sc.jsxs=I0;v0.exports=sc;var l=v0.exports,P0={exports:{}},zt={},A0={exports:{}},R0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,V){var S=M.length;M.push(V);e:for(;0<S;){var G=S-1>>>1,te=M[G];if(0<i(te,V))M[G]=V,M[S]=te,S=G;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var V=M[0],S=M.pop();if(S!==V){M[0]=S;e:for(var G=0,te=M.length,_=te>>>1;G<_;){var ye=2*(G+1)-1,Pe=M[ye],he=ye+1,ve=M[he];if(0>i(Pe,S))he<te&&0>i(ve,Pe)?(M[G]=ve,M[he]=S,G=he):(M[G]=Pe,M[ye]=S,G=ye);else if(he<te&&0>i(ve,S))M[G]=ve,M[he]=S,G=he;else break e}}return V}function i(M,V){var S=M.sortIndex-V.sortIndex;return S!==0?S:M.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],d=1,h=null,f=3,p=!1,g=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=M)r(u),V.sortIndex=V.expirationTime,t(c,V);else break;V=n(u)}}function k(M){if(y=!1,v(M),!g)if(n(c)!==null)g=!0,Z(T);else{var V=n(u);V!==null&&ie(k,V.startTime-M)}}function T(M,V){g=!1,y&&(y=!1,m(E),E=-1),p=!0;var S=f;try{for(v(V),h=n(c);h!==null&&(!(h.expirationTime>V)||M&&!N());){var G=h.callback;if(typeof G=="function"){h.callback=null,f=h.priorityLevel;var te=G(h.expirationTime<=V);V=e.unstable_now(),typeof te=="function"?h.callback=te:h===n(c)&&r(c),v(V)}else r(c);h=n(c)}if(h!==null)var _=!0;else{var ye=n(u);ye!==null&&ie(k,ye.startTime-V),_=!1}return _}finally{h=null,f=S,p=!1}}var C=!1,j=null,E=-1,R=5,P=-1;function N(){return!(e.unstable_now()-P<R)}function D(){if(j!==null){var M=e.unstable_now();P=M;var V=!0;try{V=j(!0,M)}finally{V?F():(C=!1,j=null)}}else C=!1}var F;if(typeof x=="function")F=function(){x(D)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,U=W.port2;W.port1.onmessage=D,F=function(){U.postMessage(null)}}else F=function(){w(D,0)};function Z(M){j=M,C||(C=!0,F())}function ie(M,V){E=w(function(){M(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){g||p||(g=!0,Z(T))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(M){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var S=f;f=V;try{return M()}finally{f=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,V){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var S=f;f=M;try{return V()}finally{f=S}},e.unstable_scheduleCallback=function(M,V,S){var G=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?G+S:G):S=G,M){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=S+te,M={id:d++,callback:V,priorityLevel:M,startTime:S,expirationTime:te,sortIndex:-1},S>G?(M.sortIndex=S,t(u,M),n(c)===null&&M===n(u)&&(y?(m(E),E=-1):y=!0,ie(k,S-G))):(M.sortIndex=te,t(c,M),g||p||(g=!0,Z(T))),M},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(M){var V=f;return function(){var S=f;f=V;try{return M.apply(this,arguments)}finally{f=S}}}})(R0);A0.exports=R0;var xS=A0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vS=b,Lt=xS;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N0=new Set,ys={};function yi(e,t){io(e,t),io(e+"Capture",t)}function io(e,t){for(ys[e]=t,e=0;e<t.length;e++)N0.add(t[e])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,bS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fm={},pm={};function wS(e){return ld.call(pm,e)?!0:ld.call(fm,e)?!1:bS.test(e)?pm[e]=!0:(fm[e]=!0,!1)}function kS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function SS(e,t,n,r){if(t===null||typeof t>"u"||kS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jh=/[\-:]([a-z])/g;function Zh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Jh,Zh);tt[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Jh,Zh);tt[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Jh,Zh);tt[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ef(e,t,n,r){var i=tt.hasOwnProperty(t)?tt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(SS(t,n,i,r)&&(n=null),r||i===null?wS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jn=vS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),Pi=Symbol.for("react.portal"),Ai=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),M0=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),dd=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),L0=Symbol.for("react.offscreen"),mm=Symbol.iterator;function Ro(e){return e===null||typeof e!="object"?null:(e=mm&&e[mm]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Object.assign,Gc;function Yo(e){if(Gc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gc=t&&t[1]||""}return`
`+Gc+e}var Kc=!1;function qc(e,t){if(!e||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yo(e):""}function CS(e){switch(e.tag){case 5:return Yo(e.type);case 16:return Yo("Lazy");case 13:return Yo("Suspense");case 19:return Yo("SuspenseList");case 0:case 2:case 15:return e=qc(e.type,!1),e;case 11:return e=qc(e.type.render,!1),e;case 1:return e=qc(e.type,!0),e;default:return""}}function hd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ai:return"Fragment";case Pi:return"Portal";case cd:return"Profiler";case tf:return"StrictMode";case ud:return"Suspense";case dd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M0:return(e.displayName||"Context")+".Consumer";case D0:return(e._context.displayName||"Context")+".Provider";case nf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rf:return t=e.displayName||null,t!==null?t:hd(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return hd(e(t))}catch{}}return null}function _S(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hd(t);case 8:return t===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ir(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function z0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ES(e){var t=z0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ca(e){e._valueTracker||(e._valueTracker=ES(e))}function O0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=z0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fd(e,t){var n=t.checked;return Ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ir(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function F0(e,t){t=t.checked,t!=null&&ef(e,"checked",t,!1)}function pd(e,t){F0(e,t);var n=Ir(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?md(e,t.type,n):t.hasOwnProperty("defaultValue")&&md(e,t.type,Ir(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ym(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function md(e,t,n){(t!=="number"||fl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Go=Array.isArray;function Gi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ir(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return Ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(Go(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ir(n)}}function B0(e,t){var n=Ir(t.value),r=Ir(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function V0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?V0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ua,U0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ua=ua||document.createElement("div"),ua.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ua.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TS=["Webkit","ms","Moz","O"];Object.keys(Qo).forEach(function(e){TS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qo[t]=Qo[e]})});function W0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qo.hasOwnProperty(e)&&Qo[e]?(""+t).trim():t+"px"}function $0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=W0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var jS=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xd(e,t){if(t){if(jS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function vd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=null;function of(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wd=null,Ki=null,qi=null;function bm(e){if(e=Hs(e)){if(typeof wd!="function")throw Error(L(280));var t=e.stateNode;t&&(t=dc(t),wd(e.stateNode,e.type,t))}}function H0(e){Ki?qi?qi.push(e):qi=[e]:Ki=e}function Y0(){if(Ki){var e=Ki,t=qi;if(qi=Ki=null,bm(e),t)for(e=0;e<t.length;e++)bm(t[e])}}function G0(e,t){return e(t)}function K0(){}var Xc=!1;function q0(e,t,n){if(Xc)return e(t,n);Xc=!0;try{return G0(e,t,n)}finally{Xc=!1,(Ki!==null||qi!==null)&&(K0(),Y0())}}function vs(e,t){var n=e.stateNode;if(n===null)return null;var r=dc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var kd=!1;if(Hn)try{var No={};Object.defineProperty(No,"passive",{get:function(){kd=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{kd=!1}function IS(e,t,n,r,i,o,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Jo=!1,pl=null,ml=!1,Sd=null,PS={onError:function(e){Jo=!0,pl=e}};function AS(e,t,n,r,i,o,s,a,c){Jo=!1,pl=null,IS.apply(PS,arguments)}function RS(e,t,n,r,i,o,s,a,c){if(AS.apply(this,arguments),Jo){if(Jo){var u=pl;Jo=!1,pl=null}else throw Error(L(198));ml||(ml=!0,Sd=u)}}function xi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function X0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wm(e){if(xi(e)!==e)throw Error(L(188))}function NS(e){var t=e.alternate;if(!t){if(t=xi(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return wm(i),e;if(o===r)return wm(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Q0(e){return e=NS(e),e!==null?J0(e):null}function J0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=J0(e);if(t!==null)return t;e=e.sibling}return null}var Z0=Lt.unstable_scheduleCallback,km=Lt.unstable_cancelCallback,DS=Lt.unstable_shouldYield,MS=Lt.unstable_requestPaint,Oe=Lt.unstable_now,LS=Lt.unstable_getCurrentPriorityLevel,sf=Lt.unstable_ImmediatePriority,ev=Lt.unstable_UserBlockingPriority,gl=Lt.unstable_NormalPriority,zS=Lt.unstable_LowPriority,tv=Lt.unstable_IdlePriority,ac=null,En=null;function OS(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ac,e,void 0,(e.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:VS,FS=Math.log,BS=Math.LN2;function VS(e){return e>>>=0,e===0?32:31-(FS(e)/BS|0)|0}var da=64,ha=4194304;function Ko(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ko(a):(o&=s,o!==0&&(r=Ko(o)))}else s=n&~i,s!==0?r=Ko(s):o!==0&&(r=Ko(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-un(t),i=1<<n,r|=e[n],t&=~i;return r}function US(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-un(o),a=1<<s,c=i[s];c===-1?(!(a&n)||a&r)&&(i[s]=US(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function Cd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nv(){var e=da;return da<<=1,!(da&4194240)&&(da=64),e}function Qc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ws(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-un(t),e[t]=n}function $S(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-un(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function af(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-un(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xe=0;function rv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var iv,lf,ov,sv,av,_d=!1,fa=[],vr=null,br=null,wr=null,bs=new Map,ws=new Map,dr=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sm(e,t){switch(e){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":bs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ws.delete(t.pointerId)}}function Do(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Hs(t),t!==null&&lf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function YS(e,t,n,r,i){switch(t){case"focusin":return vr=Do(vr,e,t,n,r,i),!0;case"dragenter":return br=Do(br,e,t,n,r,i),!0;case"mouseover":return wr=Do(wr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return bs.set(o,Do(bs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ws.set(o,Do(ws.get(o)||null,e,t,n,r,i)),!0}return!1}function lv(e){var t=Zr(e.target);if(t!==null){var n=xi(t);if(n!==null){if(t=n.tag,t===13){if(t=X0(n),t!==null){e.blockedOn=t,av(e.priority,function(){ov(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ed(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bd=r,n.target.dispatchEvent(r),bd=null}else return t=Hs(n),t!==null&&lf(t),e.blockedOn=n,!1;t.shift()}return!0}function Cm(e,t,n){Oa(e)&&n.delete(t)}function GS(){_d=!1,vr!==null&&Oa(vr)&&(vr=null),br!==null&&Oa(br)&&(br=null),wr!==null&&Oa(wr)&&(wr=null),bs.forEach(Cm),ws.forEach(Cm)}function Mo(e,t){e.blockedOn===t&&(e.blockedOn=null,_d||(_d=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,GS)))}function ks(e){function t(i){return Mo(i,e)}if(0<fa.length){Mo(fa[0],e);for(var n=1;n<fa.length;n++){var r=fa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vr!==null&&Mo(vr,e),br!==null&&Mo(br,e),wr!==null&&Mo(wr,e),bs.forEach(t),ws.forEach(t),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)lv(n),n.blockedOn===null&&dr.shift()}var Xi=Jn.ReactCurrentBatchConfig,xl=!0;function KS(e,t,n,r){var i=xe,o=Xi.transition;Xi.transition=null;try{xe=1,cf(e,t,n,r)}finally{xe=i,Xi.transition=o}}function qS(e,t,n,r){var i=xe,o=Xi.transition;Xi.transition=null;try{xe=4,cf(e,t,n,r)}finally{xe=i,Xi.transition=o}}function cf(e,t,n,r){if(xl){var i=Ed(e,t,n,r);if(i===null)au(e,t,r,vl,n),Sm(e,r);else if(YS(i,e,t,n,r))r.stopPropagation();else if(Sm(e,r),t&4&&-1<HS.indexOf(e)){for(;i!==null;){var o=Hs(i);if(o!==null&&iv(o),o=Ed(e,t,n,r),o===null&&au(e,t,r,vl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else au(e,t,r,null,n)}}var vl=null;function Ed(e,t,n,r){if(vl=null,e=of(r),e=Zr(e),e!==null)if(t=xi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=X0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vl=e,null}function cv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LS()){case sf:return 1;case ev:return 4;case gl:case zS:return 16;case tv:return 536870912;default:return 16}default:return 16}}var mr=null,uf=null,Fa=null;function uv(){if(Fa)return Fa;var e,t=uf,n=t.length,r,i="value"in mr?mr.value:mr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Fa=i.slice(e,1<r?1-r:void 0)}function Ba(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pa(){return!0}function _m(){return!1}function Ot(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pa:_m,this.isPropagationStopped=_m,this}return Ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),t}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},df=Ot(xo),$s=Ne({},xo,{view:0,detail:0}),XS=Ot($s),Jc,Zc,Lo,lc=Ne({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lo&&(Lo&&e.type==="mousemove"?(Jc=e.screenX-Lo.screenX,Zc=e.screenY-Lo.screenY):Zc=Jc=0,Lo=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:Zc}}),Em=Ot(lc),QS=Ne({},lc,{dataTransfer:0}),JS=Ot(QS),ZS=Ne({},$s,{relatedTarget:0}),eu=Ot(ZS),eC=Ne({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),tC=Ot(eC),nC=Ne({},xo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rC=Ot(nC),iC=Ne({},xo,{data:0}),Tm=Ot(iC),oC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=aC[e])?!!t[e]:!1}function hf(){return lC}var cC=Ne({},$s,{key:function(e){if(e.key){var t=oC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(e){return e.type==="keypress"?Ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uC=Ot(cC),dC=Ne({},lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jm=Ot(dC),hC=Ne({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),fC=Ot(hC),pC=Ne({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),mC=Ot(pC),gC=Ne({},lc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yC=Ot(gC),xC=[9,13,27,32],ff=Hn&&"CompositionEvent"in window,Zo=null;Hn&&"documentMode"in document&&(Zo=document.documentMode);var vC=Hn&&"TextEvent"in window&&!Zo,dv=Hn&&(!ff||Zo&&8<Zo&&11>=Zo),Im=" ",Pm=!1;function hv(e,t){switch(e){case"keyup":return xC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ri=!1;function bC(e,t){switch(e){case"compositionend":return fv(t);case"keypress":return t.which!==32?null:(Pm=!0,Im);case"textInput":return e=t.data,e===Im&&Pm?null:e;default:return null}}function wC(e,t){if(Ri)return e==="compositionend"||!ff&&hv(e,t)?(e=uv(),Fa=uf=mr=null,Ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dv&&t.locale!=="ko"?null:t.data;default:return null}}var kC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kC[e.type]:t==="textarea"}function pv(e,t,n,r){H0(r),t=bl(t,"onChange"),0<t.length&&(n=new df("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var es=null,Ss=null;function SC(e){_v(e,0)}function cc(e){var t=Mi(e);if(O0(t))return e}function CC(e,t){if(e==="change")return t}var mv=!1;if(Hn){var tu;if(Hn){var nu="oninput"in document;if(!nu){var Rm=document.createElement("div");Rm.setAttribute("oninput","return;"),nu=typeof Rm.oninput=="function"}tu=nu}else tu=!1;mv=tu&&(!document.documentMode||9<document.documentMode)}function Nm(){es&&(es.detachEvent("onpropertychange",gv),Ss=es=null)}function gv(e){if(e.propertyName==="value"&&cc(Ss)){var t=[];pv(t,Ss,e,of(e)),q0(SC,t)}}function _C(e,t,n){e==="focusin"?(Nm(),es=t,Ss=n,es.attachEvent("onpropertychange",gv)):e==="focusout"&&Nm()}function EC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cc(Ss)}function TC(e,t){if(e==="click")return cc(t)}function jC(e,t){if(e==="input"||e==="change")return cc(t)}function IC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pn=typeof Object.is=="function"?Object.is:IC;function Cs(e,t){if(pn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ld.call(t,i)||!pn(e[i],t[i]))return!1}return!0}function Dm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mm(e,t){var n=Dm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function yv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xv(){for(var e=window,t=fl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fl(e.document)}return t}function pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function PC(e){var t=xv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yv(n.ownerDocument.documentElement,n)){if(r!==null&&pf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Mm(n,o);var s=Mm(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var AC=Hn&&"documentMode"in document&&11>=document.documentMode,Ni=null,Td=null,ts=null,jd=!1;function Lm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jd||Ni==null||Ni!==fl(r)||(r=Ni,"selectionStart"in r&&pf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ts&&Cs(ts,r)||(ts=r,r=bl(Td,"onSelect"),0<r.length&&(t=new df("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ni)))}function ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Di={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},ru={},vv={};Hn&&(vv=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function uc(e){if(ru[e])return ru[e];if(!Di[e])return e;var t=Di[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vv)return ru[e]=t[n];return e}var bv=uc("animationend"),wv=uc("animationiteration"),kv=uc("animationstart"),Sv=uc("transitionend"),Cv=new Map,zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Cv.set(e,t),yi(t,[e])}for(var iu=0;iu<zm.length;iu++){var ou=zm[iu],RC=ou.toLowerCase(),NC=ou[0].toUpperCase()+ou.slice(1);Nr(RC,"on"+NC)}Nr(bv,"onAnimationEnd");Nr(wv,"onAnimationIteration");Nr(kv,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(Sv,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DC=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Om(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,RS(r,t,void 0,e),e.currentTarget=null}function _v(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;Om(i,a,u),o=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;Om(i,a,u),o=c}}}if(ml)throw e=Sd,ml=!1,Sd=null,e}function Te(e,t){var n=t[Nd];n===void 0&&(n=t[Nd]=new Set);var r=e+"__bubble";n.has(r)||(Ev(t,e,2,!1),n.add(r))}function su(e,t,n){var r=0;t&&(r|=4),Ev(n,e,r,t)}var ga="_reactListening"+Math.random().toString(36).slice(2);function _s(e){if(!e[ga]){e[ga]=!0,N0.forEach(function(n){n!=="selectionchange"&&(DC.has(n)||su(n,!1,e),su(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ga]||(t[ga]=!0,su("selectionchange",!1,t))}}function Ev(e,t,n,r){switch(cv(t)){case 1:var i=KS;break;case 4:i=qS;break;default:i=cf}n=i.bind(null,t,n,e),i=void 0,!kd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function au(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Zr(a),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}a=a.parentNode}}r=r.return}q0(function(){var u=o,d=of(n),h=[];e:{var f=Cv.get(e);if(f!==void 0){var p=df,g=e;switch(e){case"keypress":if(Ba(n)===0)break e;case"keydown":case"keyup":p=uC;break;case"focusin":g="focus",p=eu;break;case"focusout":g="blur",p=eu;break;case"beforeblur":case"afterblur":p=eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=JS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fC;break;case bv:case wv:case kv:p=tC;break;case Sv:p=mC;break;case"scroll":p=XS;break;case"wheel":p=yC;break;case"copy":case"cut":case"paste":p=rC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jm}var y=(t&4)!==0,w=!y&&e==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var x=u,v;x!==null;){v=x;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,m!==null&&(k=vs(x,m),k!=null&&y.push(Es(x,k,v)))),w)break;x=x.return}0<y.length&&(f=new p(f,g,null,n,d),h.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==bd&&(g=n.relatedTarget||n.fromElement)&&(Zr(g)||g[Yn]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Zr(g):null,g!==null&&(w=xi(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Em,k="onMouseLeave",m="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(y=jm,k="onPointerLeave",m="onPointerEnter",x="pointer"),w=p==null?f:Mi(p),v=g==null?f:Mi(g),f=new y(k,x+"leave",p,n,d),f.target=w,f.relatedTarget=v,k=null,Zr(d)===u&&(y=new y(m,x+"enter",g,n,d),y.target=v,y.relatedTarget=w,k=y),w=k,p&&g)t:{for(y=p,m=g,x=0,v=y;v;v=Ci(v))x++;for(v=0,k=m;k;k=Ci(k))v++;for(;0<x-v;)y=Ci(y),x--;for(;0<v-x;)m=Ci(m),v--;for(;x--;){if(y===m||m!==null&&y===m.alternate)break t;y=Ci(y),m=Ci(m)}y=null}else y=null;p!==null&&Fm(h,f,p,y,!1),g!==null&&w!==null&&Fm(h,w,g,y,!0)}}e:{if(f=u?Mi(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=CC;else if(Am(f))if(mv)T=jC;else{T=EC;var C=_C}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=TC);if(T&&(T=T(e,u))){pv(h,T,n,d);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&md(f,"number",f.value)}switch(C=u?Mi(u):window,e){case"focusin":(Am(C)||C.contentEditable==="true")&&(Ni=C,Td=u,ts=null);break;case"focusout":ts=Td=Ni=null;break;case"mousedown":jd=!0;break;case"contextmenu":case"mouseup":case"dragend":jd=!1,Lm(h,n,d);break;case"selectionchange":if(AC)break;case"keydown":case"keyup":Lm(h,n,d)}var j;if(ff)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ri?hv(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(dv&&n.locale!=="ko"&&(Ri||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ri&&(j=uv()):(mr=d,uf="value"in mr?mr.value:mr.textContent,Ri=!0)),C=bl(u,E),0<C.length&&(E=new Tm(E,e,null,n,d),h.push({event:E,listeners:C}),j?E.data=j:(j=fv(n),j!==null&&(E.data=j)))),(j=vC?bC(e,n):wC(e,n))&&(u=bl(u,"onBeforeInput"),0<u.length&&(d=new Tm("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=j))}_v(h,t)})}function Es(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=vs(e,n),o!=null&&r.unshift(Es(e,o,i)),o=vs(e,t),o!=null&&r.push(Es(e,o,i))),e=e.return}return r}function Ci(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fm(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=vs(n,o),c!=null&&s.unshift(Es(n,c,a))):i||(c=vs(n,o),c!=null&&s.push(Es(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var MC=/\r\n?/g,LC=/\u0000|\uFFFD/g;function Bm(e){return(typeof e=="string"?e:""+e).replace(MC,`
`).replace(LC,"")}function ya(e,t,n){if(t=Bm(t),Bm(e)!==t&&n)throw Error(L(425))}function wl(){}var Id=null,Pd=null;function Ad(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rd=typeof setTimeout=="function"?setTimeout:void 0,zC=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,OC=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(e){return Vm.resolve(null).then(e).catch(FC)}:Rd;function FC(e){setTimeout(function(){throw e})}function lu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ks(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ks(t)}function kr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Um(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vo=Math.random().toString(36).slice(2),Sn="__reactFiber$"+vo,Ts="__reactProps$"+vo,Yn="__reactContainer$"+vo,Nd="__reactEvents$"+vo,BC="__reactListeners$"+vo,VC="__reactHandles$"+vo;function Zr(e){var t=e[Sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yn]||n[Sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Um(e);e!==null;){if(n=e[Sn])return n;e=Um(e)}return t}e=n,n=e.parentNode}return null}function Hs(e){return e=e[Sn]||e[Yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function dc(e){return e[Ts]||null}var Dd=[],Li=-1;function Dr(e){return{current:e}}function je(e){0>Li||(e.current=Dd[Li],Dd[Li]=null,Li--)}function Ce(e,t){Li++,Dd[Li]=e.current,e.current=t}var Pr={},st=Dr(Pr),St=Dr(!1),di=Pr;function oo(e,t){var n=e.type.contextTypes;if(!n)return Pr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(e){return e=e.childContextTypes,e!=null}function kl(){je(St),je(st)}function Wm(e,t,n){if(st.current!==Pr)throw Error(L(168));Ce(st,t),Ce(St,n)}function Tv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,_S(e)||"Unknown",i));return Ne({},n,r)}function Sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pr,di=st.current,Ce(st,e),Ce(St,St.current),!0}function $m(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=Tv(e,t,di),r.__reactInternalMemoizedMergedChildContext=e,je(St),je(st),Ce(st,e)):je(St),Ce(St,n)}var Ln=null,hc=!1,cu=!1;function jv(e){Ln===null?Ln=[e]:Ln.push(e)}function UC(e){hc=!0,jv(e)}function Mr(){if(!cu&&Ln!==null){cu=!0;var e=0,t=xe;try{var n=Ln;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ln=null,hc=!1}catch(i){throw Ln!==null&&(Ln=Ln.slice(e+1)),Z0(sf,Mr),i}finally{xe=t,cu=!1}}return null}var zi=[],Oi=0,Cl=null,_l=0,Wt=[],$t=0,hi=null,Bn=1,Vn="";function Gr(e,t){zi[Oi++]=_l,zi[Oi++]=Cl,Cl=e,_l=t}function Iv(e,t,n){Wt[$t++]=Bn,Wt[$t++]=Vn,Wt[$t++]=hi,hi=e;var r=Bn;e=Vn;var i=32-un(r)-1;r&=~(1<<i),n+=1;var o=32-un(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Bn=1<<32-un(t)+i|n<<i|r,Vn=o+e}else Bn=1<<o|n<<i|r,Vn=e}function mf(e){e.return!==null&&(Gr(e,1),Iv(e,1,0))}function gf(e){for(;e===Cl;)Cl=zi[--Oi],zi[Oi]=null,_l=zi[--Oi],zi[Oi]=null;for(;e===hi;)hi=Wt[--$t],Wt[$t]=null,Vn=Wt[--$t],Wt[$t]=null,Bn=Wt[--$t],Wt[$t]=null}var Dt=null,Rt=null,Ie=!1,ln=null;function Pv(e,t){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Dt=e,Rt=kr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Dt=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hi!==null?{id:Bn,overflow:Vn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Dt=e,Rt=null,!0):!1;default:return!1}}function Md(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ld(e){if(Ie){var t=Rt;if(t){var n=t;if(!Hm(e,t)){if(Md(e))throw Error(L(418));t=kr(n.nextSibling);var r=Dt;t&&Hm(e,t)?Pv(r,n):(e.flags=e.flags&-4097|2,Ie=!1,Dt=e)}}else{if(Md(e))throw Error(L(418));e.flags=e.flags&-4097|2,Ie=!1,Dt=e}}}function Ym(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function xa(e){if(e!==Dt)return!1;if(!Ie)return Ym(e),Ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ad(e.type,e.memoizedProps)),t&&(t=Rt)){if(Md(e))throw Av(),Error(L(418));for(;t;)Pv(e,t),t=kr(t.nextSibling)}if(Ym(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Rt=kr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=Dt?kr(e.stateNode.nextSibling):null;return!0}function Av(){for(var e=Rt;e;)e=kr(e.nextSibling)}function so(){Rt=Dt=null,Ie=!1}function yf(e){ln===null?ln=[e]:ln.push(e)}var WC=Jn.ReactCurrentBatchConfig;function zo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function va(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gm(e){var t=e._init;return t(e._payload)}function Rv(e){function t(m,x){if(e){var v=m.deletions;v===null?(m.deletions=[x],m.flags|=16):v.push(x)}}function n(m,x){if(!e)return null;for(;x!==null;)t(m,x),x=x.sibling;return null}function r(m,x){for(m=new Map;x!==null;)x.key!==null?m.set(x.key,x):m.set(x.index,x),x=x.sibling;return m}function i(m,x){return m=Er(m,x),m.index=0,m.sibling=null,m}function o(m,x,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<x?(m.flags|=2,x):v):(m.flags|=2,x)):(m.flags|=1048576,x)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,x,v,k){return x===null||x.tag!==6?(x=gu(v,m.mode,k),x.return=m,x):(x=i(x,v),x.return=m,x)}function c(m,x,v,k){var T=v.type;return T===Ai?d(m,x,v.props.children,k,v.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===lr&&Gm(T)===x.type)?(k=i(x,v.props),k.ref=zo(m,x,v),k.return=m,k):(k=Ga(v.type,v.key,v.props,null,m.mode,k),k.ref=zo(m,x,v),k.return=m,k)}function u(m,x,v,k){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=yu(v,m.mode,k),x.return=m,x):(x=i(x,v.children||[]),x.return=m,x)}function d(m,x,v,k,T){return x===null||x.tag!==7?(x=si(v,m.mode,k,T),x.return=m,x):(x=i(x,v),x.return=m,x)}function h(m,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=gu(""+x,m.mode,v),x.return=m,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case la:return v=Ga(x.type,x.key,x.props,null,m.mode,v),v.ref=zo(m,null,x),v.return=m,v;case Pi:return x=yu(x,m.mode,v),x.return=m,x;case lr:var k=x._init;return h(m,k(x._payload),v)}if(Go(x)||Ro(x))return x=si(x,m.mode,v,null),x.return=m,x;va(m,x)}return null}function f(m,x,v,k){var T=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(m,x,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case la:return v.key===T?c(m,x,v,k):null;case Pi:return v.key===T?u(m,x,v,k):null;case lr:return T=v._init,f(m,x,T(v._payload),k)}if(Go(v)||Ro(v))return T!==null?null:d(m,x,v,k,null);va(m,v)}return null}function p(m,x,v,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(v)||null,a(x,m,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case la:return m=m.get(k.key===null?v:k.key)||null,c(x,m,k,T);case Pi:return m=m.get(k.key===null?v:k.key)||null,u(x,m,k,T);case lr:var C=k._init;return p(m,x,v,C(k._payload),T)}if(Go(k)||Ro(k))return m=m.get(v)||null,d(x,m,k,T,null);va(x,k)}return null}function g(m,x,v,k){for(var T=null,C=null,j=x,E=x=0,R=null;j!==null&&E<v.length;E++){j.index>E?(R=j,j=null):R=j.sibling;var P=f(m,j,v[E],k);if(P===null){j===null&&(j=R);break}e&&j&&P.alternate===null&&t(m,j),x=o(P,x,E),C===null?T=P:C.sibling=P,C=P,j=R}if(E===v.length)return n(m,j),Ie&&Gr(m,E),T;if(j===null){for(;E<v.length;E++)j=h(m,v[E],k),j!==null&&(x=o(j,x,E),C===null?T=j:C.sibling=j,C=j);return Ie&&Gr(m,E),T}for(j=r(m,j);E<v.length;E++)R=p(j,m,E,v[E],k),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?E:R.key),x=o(R,x,E),C===null?T=R:C.sibling=R,C=R);return e&&j.forEach(function(N){return t(m,N)}),Ie&&Gr(m,E),T}function y(m,x,v,k){var T=Ro(v);if(typeof T!="function")throw Error(L(150));if(v=T.call(v),v==null)throw Error(L(151));for(var C=T=null,j=x,E=x=0,R=null,P=v.next();j!==null&&!P.done;E++,P=v.next()){j.index>E?(R=j,j=null):R=j.sibling;var N=f(m,j,P.value,k);if(N===null){j===null&&(j=R);break}e&&j&&N.alternate===null&&t(m,j),x=o(N,x,E),C===null?T=N:C.sibling=N,C=N,j=R}if(P.done)return n(m,j),Ie&&Gr(m,E),T;if(j===null){for(;!P.done;E++,P=v.next())P=h(m,P.value,k),P!==null&&(x=o(P,x,E),C===null?T=P:C.sibling=P,C=P);return Ie&&Gr(m,E),T}for(j=r(m,j);!P.done;E++,P=v.next())P=p(j,m,E,P.value,k),P!==null&&(e&&P.alternate!==null&&j.delete(P.key===null?E:P.key),x=o(P,x,E),C===null?T=P:C.sibling=P,C=P);return e&&j.forEach(function(D){return t(m,D)}),Ie&&Gr(m,E),T}function w(m,x,v,k){if(typeof v=="object"&&v!==null&&v.type===Ai&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case la:e:{for(var T=v.key,C=x;C!==null;){if(C.key===T){if(T=v.type,T===Ai){if(C.tag===7){n(m,C.sibling),x=i(C,v.props.children),x.return=m,m=x;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===lr&&Gm(T)===C.type){n(m,C.sibling),x=i(C,v.props),x.ref=zo(m,C,v),x.return=m,m=x;break e}n(m,C);break}else t(m,C);C=C.sibling}v.type===Ai?(x=si(v.props.children,m.mode,k,v.key),x.return=m,m=x):(k=Ga(v.type,v.key,v.props,null,m.mode,k),k.ref=zo(m,x,v),k.return=m,m=k)}return s(m);case Pi:e:{for(C=v.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(m,x.sibling),x=i(x,v.children||[]),x.return=m,m=x;break e}else{n(m,x);break}else t(m,x);x=x.sibling}x=yu(v,m.mode,k),x.return=m,m=x}return s(m);case lr:return C=v._init,w(m,x,C(v._payload),k)}if(Go(v))return g(m,x,v,k);if(Ro(v))return y(m,x,v,k);va(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(m,x.sibling),x=i(x,v),x.return=m,m=x):(n(m,x),x=gu(v,m.mode,k),x.return=m,m=x),s(m)):n(m,x)}return w}var ao=Rv(!0),Nv=Rv(!1),El=Dr(null),Tl=null,Fi=null,xf=null;function vf(){xf=Fi=Tl=null}function bf(e){var t=El.current;je(El),e._currentValue=t}function zd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qi(e,t){Tl=e,xf=Fi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(kt=!0),e.firstContext=null)}function Xt(e){var t=e._currentValue;if(xf!==e)if(e={context:e,memoizedValue:t,next:null},Fi===null){if(Tl===null)throw Error(L(308));Fi=e,Tl.dependencies={lanes:0,firstContext:e}}else Fi=Fi.next=e;return t}var ei=null;function wf(e){ei===null?ei=[e]:ei.push(e)}function Dv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,wf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gn(e,r)}function Gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cr=!1;function kf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $n(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gn(e,n)}return i=r.interleaved,i===null?(t.next=t,wf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gn(e,n)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,af(e,n)}}function Km(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jl(e,t,n,r){var i=e.updateQueue;cr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;s=0,d=u=c=null,a=o;do{var f=a.lane,p=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,y=a;switch(f=t,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=Ne({},h,f);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,c=h):d=d.next=p,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pi|=s,e.lanes=s,e.memoizedState=h}}function qm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Ys={},Tn=Dr(Ys),js=Dr(Ys),Is=Dr(Ys);function ti(e){if(e===Ys)throw Error(L(174));return e}function Sf(e,t){switch(Ce(Is,t),Ce(js,e),Ce(Tn,Ys),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yd(t,e)}je(Tn),Ce(Tn,t)}function lo(){je(Tn),je(js),je(Is)}function Lv(e){ti(Is.current);var t=ti(Tn.current),n=yd(t,e.type);t!==n&&(Ce(js,e),Ce(Tn,n))}function Cf(e){js.current===e&&(je(Tn),je(js))}var Ae=Dr(0);function Il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uu=[];function _f(){for(var e=0;e<uu.length;e++)uu[e]._workInProgressVersionPrimary=null;uu.length=0}var Ua=Jn.ReactCurrentDispatcher,du=Jn.ReactCurrentBatchConfig,fi=0,Re=null,We=null,Ye=null,Pl=!1,ns=!1,Ps=0,$C=0;function rt(){throw Error(L(321))}function Ef(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pn(e[n],t[n]))return!1;return!0}function Tf(e,t,n,r,i,o){if(fi=o,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ua.current=e===null||e.memoizedState===null?KC:qC,e=n(r,i),ns){o=0;do{if(ns=!1,Ps=0,25<=o)throw Error(L(301));o+=1,Ye=We=null,t.updateQueue=null,Ua.current=XC,e=n(r,i)}while(ns)}if(Ua.current=Al,t=We!==null&&We.next!==null,fi=0,Ye=We=Re=null,Pl=!1,t)throw Error(L(300));return e}function jf(){var e=Ps!==0;return Ps=0,e}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Re.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Qt(){if(We===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Ye===null?Re.memoizedState:Ye.next;if(t!==null)Ye=t,We=e;else{if(e===null)throw Error(L(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ye===null?Re.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function As(e,t){return typeof t=="function"?t(e):t}function hu(e){var t=Qt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=We,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,c=null,u=o;do{var d=u.lane;if((fi&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=h,s=r):c=c.next=h,Re.lanes|=d,pi|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=a,pn(r,t.memoizedState)||(kt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Re.lanes|=o,pi|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fu(e){var t=Qt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);pn(o,t.memoizedState)||(kt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zv(){}function Ov(e,t){var n=Re,r=Qt(),i=t(),o=!pn(r.memoizedState,i);if(o&&(r.memoizedState=i,kt=!0),r=r.queue,If(Vv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Rs(9,Bv.bind(null,n,r,i,t),void 0,null),Ke===null)throw Error(L(349));fi&30||Fv(n,t,i)}return i}function Fv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bv(e,t,n,r){t.value=n,t.getSnapshot=r,Uv(t)&&Wv(e)}function Vv(e,t,n){return n(function(){Uv(t)&&Wv(e)})}function Uv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pn(e,n)}catch{return!0}}function Wv(e){var t=Gn(e,1);t!==null&&dn(t,e,1,-1)}function Xm(e){var t=xn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:e},t.queue=e,e=e.dispatch=GC.bind(null,Re,e),[t.memoizedState,e]}function Rs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $v(){return Qt().memoizedState}function Wa(e,t,n,r){var i=xn();Re.flags|=e,i.memoizedState=Rs(1|t,n,void 0,r===void 0?null:r)}function fc(e,t,n,r){var i=Qt();r=r===void 0?null:r;var o=void 0;if(We!==null){var s=We.memoizedState;if(o=s.destroy,r!==null&&Ef(r,s.deps)){i.memoizedState=Rs(t,n,o,r);return}}Re.flags|=e,i.memoizedState=Rs(1|t,n,o,r)}function Qm(e,t){return Wa(8390656,8,e,t)}function If(e,t){return fc(2048,8,e,t)}function Hv(e,t){return fc(4,2,e,t)}function Yv(e,t){return fc(4,4,e,t)}function Gv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kv(e,t,n){return n=n!=null?n.concat([e]):null,fc(4,4,Gv.bind(null,t,e),n)}function Pf(){}function qv(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ef(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xv(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ef(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qv(e,t,n){return fi&21?(pn(n,t)||(n=nv(),Re.lanes|=n,pi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,kt=!0),e.memoizedState=n)}function HC(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=du.transition;du.transition={};try{e(!1),t()}finally{xe=n,du.transition=r}}function Jv(){return Qt().memoizedState}function YC(e,t,n){var r=_r(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zv(e))e1(t,n);else if(n=Dv(e,t,n,r),n!==null){var i=ft();dn(n,e,r,i),t1(n,t,r)}}function GC(e,t,n){var r=_r(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zv(e))e1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,pn(a,s)){var c=t.interleaved;c===null?(i.next=i,wf(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Dv(e,t,i,r),n!==null&&(i=ft(),dn(n,e,r,i),t1(n,t,r))}}function Zv(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function e1(e,t){ns=Pl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function t1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,af(e,n)}}var Al={readContext:Xt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},KC={readContext:Xt,useCallback:function(e,t){return xn().memoizedState=[e,t===void 0?null:t],e},useContext:Xt,useEffect:Qm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wa(4194308,4,Gv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wa(4,2,e,t)},useMemo:function(e,t){var n=xn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=YC.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=xn();return e={current:e},t.memoizedState=e},useState:Xm,useDebugValue:Pf,useDeferredValue:function(e){return xn().memoizedState=e},useTransition:function(){var e=Xm(!1),t=e[0];return e=HC.bind(null,e[1]),xn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,i=xn();if(Ie){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Ke===null)throw Error(L(349));fi&30||Fv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qm(Vv.bind(null,r,o,e),[e]),r.flags|=2048,Rs(9,Bv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xn(),t=Ke.identifierPrefix;if(Ie){var n=Vn,r=Bn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ps++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$C++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qC={readContext:Xt,useCallback:qv,useContext:Xt,useEffect:If,useImperativeHandle:Kv,useInsertionEffect:Hv,useLayoutEffect:Yv,useMemo:Xv,useReducer:hu,useRef:$v,useState:function(){return hu(As)},useDebugValue:Pf,useDeferredValue:function(e){var t=Qt();return Qv(t,We.memoizedState,e)},useTransition:function(){var e=hu(As)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:zv,useSyncExternalStore:Ov,useId:Jv,unstable_isNewReconciler:!1},XC={readContext:Xt,useCallback:qv,useContext:Xt,useEffect:If,useImperativeHandle:Kv,useInsertionEffect:Hv,useLayoutEffect:Yv,useMemo:Xv,useReducer:fu,useRef:$v,useState:function(){return fu(As)},useDebugValue:Pf,useDeferredValue:function(e){var t=Qt();return We===null?t.memoizedState=e:Qv(t,We.memoizedState,e)},useTransition:function(){var e=fu(As)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:zv,useSyncExternalStore:Ov,useId:Jv,unstable_isNewReconciler:!1};function sn(e,t){if(e&&e.defaultProps){t=Ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Od(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pc={isMounted:function(e){return(e=e._reactInternals)?xi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),i=_r(e),o=$n(r,i);o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(dn(t,e,i,r),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),i=_r(e),o=$n(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Sr(e,o,i),t!==null&&(dn(t,e,i,r),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=_r(e),i=$n(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sr(e,i,r),t!==null&&(dn(t,e,r,n),Va(t,e,r))}};function Jm(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Cs(n,r)||!Cs(i,o):!0}function n1(e,t,n){var r=!1,i=Pr,o=t.contextType;return typeof o=="object"&&o!==null?o=Xt(o):(i=Ct(t)?di:st.current,r=t.contextTypes,o=(r=r!=null)?oo(e,i):Pr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pc.enqueueReplaceState(t,t.state,null)}function Fd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},kf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Xt(o):(o=Ct(t)?di:st.current,i.context=oo(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Od(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pc.enqueueReplaceState(i,i.state,null),jl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function co(e,t){try{var n="",r=t;do n+=CS(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function pu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var QC=typeof WeakMap=="function"?WeakMap:Map;function r1(e,t,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Nl||(Nl=!0,Xd=r),Bd(e,t)},n}function i1(e,t,n){n=$n(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Bd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Bd(e,t),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function eg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new QC;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=d_.bind(null,e,t,n),t.then(e,e))}function tg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ng(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$n(-1,1),t.tag=2,Sr(n,t,1))),n.lanes|=1),e)}var JC=Jn.ReactCurrentOwner,kt=!1;function ut(e,t,n,r){t.child=e===null?Nv(t,null,n,r):ao(t,e.child,n,r)}function rg(e,t,n,r,i){n=n.render;var o=t.ref;return Qi(t,i),r=Tf(e,t,n,r,o,i),n=jf(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kn(e,t,i)):(Ie&&n&&mf(t),t.flags|=1,ut(e,t,r,i),t.child)}function ig(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Of(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,o1(e,t,o,r,i)):(e=Ga(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cs,n(s,r)&&e.ref===t.ref)return Kn(e,t,i)}return t.flags|=1,e=Er(o,r),e.ref=t.ref,e.return=t,t.child=e}function o1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Cs(o,r)&&e.ref===t.ref)if(kt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(kt=!0);else return t.lanes=e.lanes,Kn(e,t,i)}return Vd(e,t,n,r,i)}function s1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Vi,At),At|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(Vi,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ce(Vi,At),At|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ce(Vi,At),At|=r;return ut(e,t,i,n),t.child}function a1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vd(e,t,n,r,i){var o=Ct(n)?di:st.current;return o=oo(t,o),Qi(t,i),n=Tf(e,t,n,r,o,i),r=jf(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kn(e,t,i)):(Ie&&r&&mf(t),t.flags|=1,ut(e,t,n,i),t.child)}function og(e,t,n,r,i){if(Ct(n)){var o=!0;Sl(t)}else o=!1;if(Qi(t,i),t.stateNode===null)$a(e,t),n1(t,n,r),Fd(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xt(u):(u=Ct(n)?di:st.current,u=oo(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&Zm(t,s,r,u),cr=!1;var f=t.memoizedState;s.state=f,jl(t,r,s,i),c=t.memoizedState,a!==r||f!==c||St.current||cr?(typeof d=="function"&&(Od(t,n,d,r),c=t.memoizedState),(a=cr||Jm(t,n,a,r,f,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Mv(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:sn(t.type,a),s.props=u,h=t.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Xt(c):(c=Ct(n)?di:st.current,c=oo(t,c));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||f!==c)&&Zm(t,s,r,c),cr=!1,f=t.memoizedState,s.state=f,jl(t,r,s,i);var g=t.memoizedState;a!==h||f!==g||St.current||cr?(typeof p=="function"&&(Od(t,n,p,r),g=t.memoizedState),(u=cr||Jm(t,n,u,r,f,g,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ud(e,t,n,r,o,i)}function Ud(e,t,n,r,i,o){a1(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&$m(t,n,!1),Kn(e,t,o);r=t.stateNode,JC.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ao(t,e.child,null,o),t.child=ao(t,null,a,o)):ut(e,t,a,o),t.memoizedState=r.state,i&&$m(t,n,!0),t.child}function l1(e){var t=e.stateNode;t.pendingContext?Wm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wm(e,t.context,!1),Sf(e,t.containerInfo)}function sg(e,t,n,r,i){return so(),yf(i),t.flags|=256,ut(e,t,n,r),t.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function $d(e){return{baseLanes:e,cachePool:null,transitions:null}}function c1(e,t,n){var r=t.pendingProps,i=Ae.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ce(Ae,i&1),e===null)return Ld(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=yc(s,r,0,null),e=si(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$d(n),t.memoizedState=Wd,e):Af(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ZC(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Er(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Er(a,o):(o=si(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?$d(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Wd,r}return o=e.child,e=o.sibling,r=Er(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Af(e,t){return t=yc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ba(e,t,n,r){return r!==null&&yf(r),ao(t,e.child,null,n),e=Af(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ZC(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=pu(Error(L(422))),ba(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=yc({mode:"visible",children:r.children},i,0,null),o=si(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ao(t,e.child,null,s),t.child.memoizedState=$d(s),t.memoizedState=Wd,o);if(!(t.mode&1))return ba(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(L(419)),r=pu(o,r,void 0),ba(e,t,s,r)}if(a=(s&e.childLanes)!==0,kt||a){if(r=Ke,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gn(e,i),dn(r,e,i,-1))}return zf(),r=pu(Error(L(421))),ba(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=h_.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Rt=kr(i.nextSibling),Dt=t,Ie=!0,ln=null,e!==null&&(Wt[$t++]=Bn,Wt[$t++]=Vn,Wt[$t++]=hi,Bn=e.id,Vn=e.overflow,hi=t),t=Af(t,r.children),t.flags|=4096,t)}function ag(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zd(e.return,t,n)}function mu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function u1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ut(e,t,r.children,n),r=Ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ag(e,n,t);else if(e.tag===19)ag(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Il(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),mu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Il(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}mu(t,!0,n,null,o);break;case"together":mu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $a(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function e_(e,t,n){switch(t.tag){case 3:l1(t),so();break;case 5:Lv(t);break;case 1:Ct(t.type)&&Sl(t);break;case 4:Sf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ce(El,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Ae,Ae.current&1),t.flags|=128,null):n&t.child.childLanes?c1(e,t,n):(Ce(Ae,Ae.current&1),e=Kn(e,t,n),e!==null?e.sibling:null);Ce(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return u1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,s1(e,t,n)}return Kn(e,t,n)}var d1,Hd,h1,f1;d1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hd=function(){};h1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ti(Tn.current);var o=null;switch(n){case"input":i=fd(e,i),r=fd(e,r),o=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),o=[];break;case"textarea":i=gd(e,i),r=gd(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wl)}xd(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ys.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ys.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Te("scroll",e),o||a===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};f1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Oo(e,t){if(!Ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function t_(e,t,n){var r=t.pendingProps;switch(gf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return Ct(t.type)&&kl(),it(t),null;case 3:return r=t.stateNode,lo(),je(St),je(st),_f(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ln!==null&&(Zd(ln),ln=null))),Hd(e,t),it(t),null;case 5:Cf(t);var i=ti(Is.current);if(n=t.type,e!==null&&t.stateNode!=null)h1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return it(t),null}if(e=ti(Tn.current),xa(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Sn]=t,r[Ts]=o,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)Te(qo[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":gm(r,o),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Te("invalid",r);break;case"textarea":xm(r,o),Te("invalid",r)}xd(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ya(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ya(r.textContent,a,e),i=["children",""+a]):ys.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Te("scroll",r)}switch(n){case"input":ca(r),ym(r,o,!0);break;case"textarea":ca(r),vm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=wl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=V0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Sn]=t,e[Ts]=r,d1(e,t,!1,!1),t.stateNode=e;e:{switch(s=vd(n,r),n){case"dialog":Te("cancel",e),Te("close",e),i=r;break;case"iframe":case"object":case"embed":Te("load",e),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)Te(qo[i],e);i=r;break;case"source":Te("error",e),i=r;break;case"img":case"image":case"link":Te("error",e),Te("load",e),i=r;break;case"details":Te("toggle",e),i=r;break;case"input":gm(e,r),i=fd(e,r),Te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Te("invalid",e);break;case"textarea":xm(e,r),i=gd(e,r),Te("invalid",e);break;default:i=r}xd(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?$0(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&U0(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&xs(e,c):typeof c=="number"&&xs(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ys.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Te("scroll",e):c!=null&&ef(e,o,c,s))}switch(n){case"input":ca(e),ym(e,r,!1);break;case"textarea":ca(e),vm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ir(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gi(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)f1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=ti(Is.current),ti(Tn.current),xa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Sn]=t,(o=r.nodeValue!==n)&&(e=Dt,e!==null))switch(e.tag){case 3:ya(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ya(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=t,t.stateNode=r}return it(t),null;case 13:if(je(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ie&&Rt!==null&&t.mode&1&&!(t.flags&128))Av(),so(),t.flags|=98560,o=!1;else if(o=xa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[Sn]=t}else so(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),o=!1}else ln!==null&&(Zd(ln),ln=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?$e===0&&($e=3):zf())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return lo(),Hd(e,t),e===null&&_s(t.stateNode.containerInfo),it(t),null;case 10:return bf(t.type._context),it(t),null;case 17:return Ct(t.type)&&kl(),it(t),null;case 19:if(je(Ae),o=t.memoizedState,o===null)return it(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Oo(o,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Il(e),s!==null){for(t.flags|=128,Oo(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Ae,Ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&Oe()>uo&&(t.flags|=128,r=!0,Oo(o,!1),t.lanes=4194304)}else{if(!r)if(e=Il(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Oo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ie)return it(t),null}else 2*Oe()-o.renderingStartTime>uo&&n!==1073741824&&(t.flags|=128,r=!0,Oo(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oe(),t.sibling=null,n=Ae.current,Ce(Ae,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return Lf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?At&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function n_(e,t){switch(gf(t),t.tag){case 1:return Ct(t.type)&&kl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lo(),je(St),je(st),_f(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cf(t),null;case 13:if(je(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));so()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Ae),null;case 4:return lo(),null;case 10:return bf(t.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var wa=!1,ot=!1,r_=typeof WeakSet=="function"?WeakSet:Set,$=null;function Bi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function Yd(e,t,n){try{n()}catch(r){ze(e,t,r)}}var lg=!1;function i_(e,t){if(Id=xl,e=xv(),pf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++d===r&&(c=s),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pd={focusedElem:e,selectionRange:n},xl=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,w=g.memoizedState,m=t.stateNode,x=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:sn(t.type,y),w);m.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(k){ze(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return g=lg,lg=!1,g}function rs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Yd(t,n,o)}i=i.next}while(i!==r)}}function mc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function p1(e){var t=e.alternate;t!==null&&(e.alternate=null,p1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Sn],delete t[Ts],delete t[Nd],delete t[BC],delete t[VC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function m1(e){return e.tag===5||e.tag===3||e.tag===4}function cg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||m1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wl));else if(r!==4&&(e=e.child,e!==null))for(Kd(e,t,n),e=e.sibling;e!==null;)Kd(e,t,n),e=e.sibling}function qd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qd(e,t,n),e=e.sibling;e!==null;)qd(e,t,n),e=e.sibling}var Qe=null,an=!1;function ir(e,t,n){for(n=n.child;n!==null;)g1(e,t,n),n=n.sibling}function g1(e,t,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 5:ot||Bi(n,t);case 6:var r=Qe,i=an;Qe=null,ir(e,t,n),Qe=r,an=i,Qe!==null&&(an?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(an?(e=Qe,n=n.stateNode,e.nodeType===8?lu(e.parentNode,n):e.nodeType===1&&lu(e,n),ks(e)):lu(Qe,n.stateNode));break;case 4:r=Qe,i=an,Qe=n.stateNode.containerInfo,an=!0,ir(e,t,n),Qe=r,an=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Yd(n,t,s),i=i.next}while(i!==r)}ir(e,t,n);break;case 1:if(!ot&&(Bi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,t,a)}ir(e,t,n);break;case 21:ir(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,ir(e,t,n),ot=r):ir(e,t,n);break;default:ir(e,t,n)}}function ug(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new r_),t.forEach(function(r){var i=f_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Qe=a.stateNode,an=!1;break e;case 3:Qe=a.stateNode.containerInfo,an=!0;break e;case 4:Qe=a.stateNode.containerInfo,an=!0;break e}a=a.return}if(Qe===null)throw Error(L(160));g1(o,s,i),Qe=null,an=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ze(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)y1(t,e),t=t.sibling}function y1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nn(t,e),yn(e),r&4){try{rs(3,e,e.return),mc(3,e)}catch(y){ze(e,e.return,y)}try{rs(5,e,e.return)}catch(y){ze(e,e.return,y)}}break;case 1:nn(t,e),yn(e),r&512&&n!==null&&Bi(n,n.return);break;case 5:if(nn(t,e),yn(e),r&512&&n!==null&&Bi(n,n.return),e.flags&32){var i=e.stateNode;try{xs(i,"")}catch(y){ze(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&F0(i,o),vd(a,s);var u=vd(a,o);for(s=0;s<c.length;s+=2){var d=c[s],h=c[s+1];d==="style"?$0(i,h):d==="dangerouslySetInnerHTML"?U0(i,h):d==="children"?xs(i,h):ef(i,d,h,u)}switch(a){case"input":pd(i,o);break;case"textarea":B0(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Gi(i,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?Gi(i,!!o.multiple,o.defaultValue,!0):Gi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ts]=o}catch(y){ze(e,e.return,y)}}break;case 6:if(nn(t,e),yn(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ze(e,e.return,y)}}break;case 3:if(nn(t,e),yn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ks(t.containerInfo)}catch(y){ze(e,e.return,y)}break;case 4:nn(t,e),yn(e);break;case 13:nn(t,e),yn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Df=Oe())),r&4&&ug(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(u=ot)||d,nn(t,e),ot=u):nn(t,e),yn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for($=e,d=e.child;d!==null;){for(h=$=d;$!==null;){switch(f=$,p=f.child,f.tag){case 0:case 11:case 14:case 15:rs(4,f,f.return);break;case 1:Bi(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ze(r,n,y)}}break;case 5:Bi(f,f.return);break;case 22:if(f.memoizedState!==null){hg(h);continue}}p!==null?(p.return=f,$=p):hg(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=W0("display",s))}catch(y){ze(e,e.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){ze(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:nn(t,e),yn(e),r&4&&ug(e);break;case 21:break;default:nn(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(m1(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xs(i,""),r.flags&=-33);var o=cg(e);qd(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=cg(e);Kd(e,a,s);break;default:throw Error(L(161))}}catch(c){ze(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function o_(e,t,n){$=e,x1(e)}function x1(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||wa;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||ot;a=wa;var u=ot;if(wa=s,(ot=c)&&!u)for($=i;$!==null;)s=$,c=s.child,s.tag===22&&s.memoizedState!==null?fg(i):c!==null?(c.return=s,$=c):fg(i);for(;o!==null;)$=o,x1(o),o=o.sibling;$=i,wa=a,ot=u}dg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):dg(e)}}function dg(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||mc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:sn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&qm(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qm(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ks(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}ot||t.flags&512&&Gd(t)}catch(f){ze(t,t.return,f)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function hg(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function fg(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mc(4,t)}catch(c){ze(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ze(t,i,c)}}var o=t.return;try{Gd(t)}catch(c){ze(t,o,c)}break;case 5:var s=t.return;try{Gd(t)}catch(c){ze(t,s,c)}}}catch(c){ze(t,t.return,c)}if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}var s_=Math.ceil,Rl=Jn.ReactCurrentDispatcher,Rf=Jn.ReactCurrentOwner,Kt=Jn.ReactCurrentBatchConfig,de=0,Ke=null,Ve=null,et=0,At=0,Vi=Dr(0),$e=0,Ns=null,pi=0,gc=0,Nf=0,is=null,bt=null,Df=0,uo=1/0,Mn=null,Nl=!1,Xd=null,Cr=null,ka=!1,gr=null,Dl=0,os=0,Qd=null,Ha=-1,Ya=0;function ft(){return de&6?Oe():Ha!==-1?Ha:Ha=Oe()}function _r(e){return e.mode&1?de&2&&et!==0?et&-et:WC.transition!==null?(Ya===0&&(Ya=nv()),Ya):(e=xe,e!==0||(e=window.event,e=e===void 0?16:cv(e.type)),e):1}function dn(e,t,n,r){if(50<os)throw os=0,Qd=null,Error(L(185));Ws(e,n,r),(!(de&2)||e!==Ke)&&(e===Ke&&(!(de&2)&&(gc|=n),$e===4&&hr(e,et)),_t(e,r),n===1&&de===0&&!(t.mode&1)&&(uo=Oe()+500,hc&&Mr()))}function _t(e,t){var n=e.callbackNode;WS(e,t);var r=yl(e,e===Ke?et:0);if(r===0)n!==null&&km(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&km(n),t===1)e.tag===0?UC(pg.bind(null,e)):jv(pg.bind(null,e)),OC(function(){!(de&6)&&Mr()}),n=null;else{switch(rv(r)){case 1:n=sf;break;case 4:n=ev;break;case 16:n=gl;break;case 536870912:n=tv;break;default:n=gl}n=E1(n,v1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function v1(e,t){if(Ha=-1,Ya=0,de&6)throw Error(L(327));var n=e.callbackNode;if(Ji()&&e.callbackNode!==n)return null;var r=yl(e,e===Ke?et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ml(e,r);else{t=r;var i=de;de|=2;var o=w1();(Ke!==e||et!==t)&&(Mn=null,uo=Oe()+500,oi(e,t));do try{c_();break}catch(a){b1(e,a)}while(!0);vf(),Rl.current=o,de=i,Ve!==null?t=0:(Ke=null,et=0,t=$e)}if(t!==0){if(t===2&&(i=Cd(e),i!==0&&(r=i,t=Jd(e,i))),t===1)throw n=Ns,oi(e,0),hr(e,r),_t(e,Oe()),n;if(t===6)hr(e,r);else{if(i=e.current.alternate,!(r&30)&&!a_(i)&&(t=Ml(e,r),t===2&&(o=Cd(e),o!==0&&(r=o,t=Jd(e,o))),t===1))throw n=Ns,oi(e,0),hr(e,r),_t(e,Oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:Kr(e,bt,Mn);break;case 3:if(hr(e,r),(r&130023424)===r&&(t=Df+500-Oe(),10<t)){if(yl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rd(Kr.bind(null,e,bt,Mn),t);break}Kr(e,bt,Mn);break;case 4:if(hr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-un(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*s_(r/1960))-r,10<r){e.timeoutHandle=Rd(Kr.bind(null,e,bt,Mn),r);break}Kr(e,bt,Mn);break;case 5:Kr(e,bt,Mn);break;default:throw Error(L(329))}}}return _t(e,Oe()),e.callbackNode===n?v1.bind(null,e):null}function Jd(e,t){var n=is;return e.current.memoizedState.isDehydrated&&(oi(e,t).flags|=256),e=Ml(e,t),e!==2&&(t=bt,bt=n,t!==null&&Zd(t)),e}function Zd(e){bt===null?bt=e:bt.push.apply(bt,e)}function a_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!pn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hr(e,t){for(t&=~Nf,t&=~gc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-un(t),r=1<<n;e[n]=-1,t&=~r}}function pg(e){if(de&6)throw Error(L(327));Ji();var t=yl(e,0);if(!(t&1))return _t(e,Oe()),null;var n=Ml(e,t);if(e.tag!==0&&n===2){var r=Cd(e);r!==0&&(t=r,n=Jd(e,r))}if(n===1)throw n=Ns,oi(e,0),hr(e,t),_t(e,Oe()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kr(e,bt,Mn),_t(e,Oe()),null}function Mf(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(uo=Oe()+500,hc&&Mr())}}function mi(e){gr!==null&&gr.tag===0&&!(de&6)&&Ji();var t=de;de|=1;var n=Kt.transition,r=xe;try{if(Kt.transition=null,xe=1,e)return e()}finally{xe=r,Kt.transition=n,de=t,!(de&6)&&Mr()}}function Lf(){At=Vi.current,je(Vi)}function oi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zC(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(gf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kl();break;case 3:lo(),je(St),je(st),_f();break;case 5:Cf(r);break;case 4:lo();break;case 13:je(Ae);break;case 19:je(Ae);break;case 10:bf(r.type._context);break;case 22:case 23:Lf()}n=n.return}if(Ke=e,Ve=e=Er(e.current,null),et=At=t,$e=0,Ns=null,Nf=gc=pi=0,bt=is=null,ei!==null){for(t=0;t<ei.length;t++)if(n=ei[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ei=null}return e}function b1(e,t){do{var n=Ve;try{if(vf(),Ua.current=Al,Pl){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pl=!1}if(fi=0,Ye=We=Re=null,ns=!1,Ps=0,Rf.current=null,n===null||n.return===null){$e=1,Ns=t,Ve=null;break}e:{var o=e,s=n.return,a=n,c=t;if(t=et,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=tg(s);if(p!==null){p.flags&=-257,ng(p,s,a,o,t),p.mode&1&&eg(o,u,t),t=p,c=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(c),t.updateQueue=y}else g.add(c);break e}else{if(!(t&1)){eg(o,u,t),zf();break e}c=Error(L(426))}}else if(Ie&&a.mode&1){var w=tg(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ng(w,s,a,o,t),yf(co(c,a));break e}}o=c=co(c,a),$e!==4&&($e=2),is===null?is=[o]:is.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=r1(o,c,t);Km(o,m);break e;case 1:a=c;var x=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Cr===null||!Cr.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=i1(o,a,t);Km(o,k);break e}}o=o.return}while(o!==null)}S1(n)}catch(T){t=T,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function w1(){var e=Rl.current;return Rl.current=Al,e===null?Al:e}function zf(){($e===0||$e===3||$e===2)&&($e=4),Ke===null||!(pi&268435455)&&!(gc&268435455)||hr(Ke,et)}function Ml(e,t){var n=de;de|=2;var r=w1();(Ke!==e||et!==t)&&(Mn=null,oi(e,t));do try{l_();break}catch(i){b1(e,i)}while(!0);if(vf(),de=n,Rl.current=r,Ve!==null)throw Error(L(261));return Ke=null,et=0,$e}function l_(){for(;Ve!==null;)k1(Ve)}function c_(){for(;Ve!==null&&!DS();)k1(Ve)}function k1(e){var t=_1(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?S1(e):Ve=t,Rf.current=null}function S1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=n_(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Ve=null;return}}else if(n=t_(n,t,At),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);$e===0&&($e=5)}function Kr(e,t,n){var r=xe,i=Kt.transition;try{Kt.transition=null,xe=1,u_(e,t,n,r)}finally{Kt.transition=i,xe=r}return null}function u_(e,t,n,r){do Ji();while(gr!==null);if(de&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if($S(e,o),e===Ke&&(Ve=Ke=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ka||(ka=!0,E1(gl,function(){return Ji(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Kt.transition,Kt.transition=null;var s=xe;xe=1;var a=de;de|=4,Rf.current=null,i_(e,n),y1(n,e),PC(Pd),xl=!!Id,Pd=Id=null,e.current=n,o_(n),MS(),de=a,xe=s,Kt.transition=o}else e.current=n;if(ka&&(ka=!1,gr=e,Dl=i),o=e.pendingLanes,o===0&&(Cr=null),OS(n.stateNode),_t(e,Oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nl)throw Nl=!1,e=Xd,Xd=null,e;return Dl&1&&e.tag!==0&&Ji(),o=e.pendingLanes,o&1?e===Qd?os++:(os=0,Qd=e):os=0,Mr(),null}function Ji(){if(gr!==null){var e=rv(Dl),t=Kt.transition,n=xe;try{if(Kt.transition=null,xe=16>e?16:e,gr===null)var r=!1;else{if(e=gr,gr=null,Dl=0,de&6)throw Error(L(331));var i=de;for(de|=4,$=e.current;$!==null;){var o=$,s=o.child;if($.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for($=u;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:rs(8,d,o)}var h=d.child;if(h!==null)h.return=d,$=h;else for(;$!==null;){d=$;var f=d.sibling,p=d.return;if(p1(d),d===u){$=null;break}if(f!==null){f.return=p,$=f;break}$=p}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}$=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,$=s;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:rs(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,$=m;break e}$=o.return}}var x=e.current;for($=x;$!==null;){s=$;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,$=v;else e:for(s=x;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mc(9,a)}}catch(T){ze(a,a.return,T)}if(a===s){$=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,$=k;break e}$=a.return}}if(de=i,Mr(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ac,e)}catch{}r=!0}return r}finally{xe=n,Kt.transition=t}}return!1}function mg(e,t,n){t=co(n,t),t=r1(e,t,1),e=Sr(e,t,1),t=ft(),e!==null&&(Ws(e,1,t),_t(e,t))}function ze(e,t,n){if(e.tag===3)mg(e,e,n);else for(;t!==null;){if(t.tag===3){mg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){e=co(n,e),e=i1(t,e,1),t=Sr(t,e,1),e=ft(),t!==null&&(Ws(t,1,e),_t(t,e));break}}t=t.return}}function d_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(et&n)===n&&($e===4||$e===3&&(et&130023424)===et&&500>Oe()-Df?oi(e,0):Nf|=n),_t(e,t)}function C1(e,t){t===0&&(e.mode&1?(t=ha,ha<<=1,!(ha&130023424)&&(ha=4194304)):t=1);var n=ft();e=Gn(e,t),e!==null&&(Ws(e,t,n),_t(e,n))}function h_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),C1(e,n)}function f_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),C1(e,n)}var _1;_1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)kt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return kt=!1,e_(e,t,n);kt=!!(e.flags&131072)}else kt=!1,Ie&&t.flags&1048576&&Iv(t,_l,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$a(e,t),e=t.pendingProps;var i=oo(t,st.current);Qi(t,n),i=Tf(null,t,r,e,i,n);var o=jf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ct(r)?(o=!0,Sl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kf(t),i.updater=pc,t.stateNode=i,i._reactInternals=t,Fd(t,r,e,n),t=Ud(null,t,r,!0,o,n)):(t.tag=0,Ie&&o&&mf(t),ut(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($a(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=m_(r),e=sn(r,e),i){case 0:t=Vd(null,t,r,e,n);break e;case 1:t=og(null,t,r,e,n);break e;case 11:t=rg(null,t,r,e,n);break e;case 14:t=ig(null,t,r,sn(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),Vd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),og(e,t,r,i,n);case 3:e:{if(l1(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Mv(e,t),jl(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=co(Error(L(423)),t),t=sg(e,t,r,n,i);break e}else if(r!==i){i=co(Error(L(424)),t),t=sg(e,t,r,n,i);break e}else for(Rt=kr(t.stateNode.containerInfo.firstChild),Dt=t,Ie=!0,ln=null,n=Nv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),r===i){t=Kn(e,t,n);break e}ut(e,t,r,n)}t=t.child}return t;case 5:return Lv(t),e===null&&Ld(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ad(r,i)?s=null:o!==null&&Ad(r,o)&&(t.flags|=32),a1(e,t),ut(e,t,s,n),t.child;case 6:return e===null&&Ld(t),null;case 13:return c1(e,t,n);case 4:return Sf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ao(t,null,r,n):ut(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),rg(e,t,r,i,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ce(El,r._currentValue),r._currentValue=s,o!==null)if(pn(o.value,s)){if(o.children===i.children&&!St.current){t=Kn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=$n(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),zd(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(L(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),zd(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ut(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Qi(t,n),i=Xt(i),r=r(i),t.flags|=1,ut(e,t,r,n),t.child;case 14:return r=t.type,i=sn(r,t.pendingProps),i=sn(r.type,i),ig(e,t,r,i,n);case 15:return o1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),$a(e,t),t.tag=1,Ct(r)?(e=!0,Sl(t)):e=!1,Qi(t,n),n1(t,r,i),Fd(t,r,i,n),Ud(null,t,r,!0,e,n);case 19:return u1(e,t,n);case 22:return s1(e,t,n)}throw Error(L(156,t.tag))};function E1(e,t){return Z0(e,t)}function p_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(e,t,n,r){return new p_(e,t,n,r)}function Of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function m_(e){if(typeof e=="function")return Of(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nf)return 11;if(e===rf)return 14}return 2}function Er(e,t){var n=e.alternate;return n===null?(n=Yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ga(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Of(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ai:return si(n.children,i,o,t);case tf:s=8,i|=8;break;case cd:return e=Yt(12,n,t,i|2),e.elementType=cd,e.lanes=o,e;case ud:return e=Yt(13,n,t,i),e.elementType=ud,e.lanes=o,e;case dd:return e=Yt(19,n,t,i),e.elementType=dd,e.lanes=o,e;case L0:return yc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D0:s=10;break e;case M0:s=9;break e;case nf:s=11;break e;case rf:s=14;break e;case lr:s=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=Yt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function si(e,t,n,r){return e=Yt(7,e,r,t),e.lanes=n,e}function yc(e,t,n,r){return e=Yt(22,e,r,t),e.elementType=L0,e.lanes=n,e.stateNode={isHidden:!1},e}function gu(e,t,n){return e=Yt(6,e,null,t),e.lanes=n,e}function yu(e,t,n){return t=Yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function g_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qc(0),this.expirationTimes=Qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ff(e,t,n,r,i,o,s,a,c){return e=new g_(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Yt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kf(o),e}function y_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function T1(e){if(!e)return Pr;e=e._reactInternals;e:{if(xi(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(Ct(n))return Tv(e,n,t)}return t}function j1(e,t,n,r,i,o,s,a,c){return e=Ff(n,r,!0,e,i,o,s,a,c),e.context=T1(null),n=e.current,r=ft(),i=_r(n),o=$n(r,i),o.callback=t??null,Sr(n,o,i),e.current.lanes=i,Ws(e,i,r),_t(e,r),e}function xc(e,t,n,r){var i=t.current,o=ft(),s=_r(i);return n=T1(n),t.context===null?t.context=n:t.pendingContext=n,t=$n(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sr(i,t,s),e!==null&&(dn(e,i,s,o),Va(e,i,s)),s}function Ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bf(e,t){gg(e,t),(e=e.alternate)&&gg(e,t)}function x_(){return null}var I1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vf(e){this._internalRoot=e}vc.prototype.render=Vf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));xc(e,t,null,null)};vc.prototype.unmount=Vf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mi(function(){xc(null,e,null,null)}),t[Yn]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var t=sv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dr.length&&t!==0&&t<dr[n].priority;n++);dr.splice(n,0,e),n===0&&lv(e)}};function Uf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yg(){}function v_(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ll(s);o.call(u)}}var s=j1(t,r,e,0,null,!1,!1,"",yg);return e._reactRootContainer=s,e[Yn]=s.current,_s(e.nodeType===8?e.parentNode:e),mi(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ll(c);a.call(u)}}var c=Ff(e,0,!1,null,null,!1,!1,"",yg);return e._reactRootContainer=c,e[Yn]=c.current,_s(e.nodeType===8?e.parentNode:e),mi(function(){xc(t,c,n,r)}),c}function wc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var c=Ll(s);a.call(c)}}xc(t,s,e,i)}else s=v_(n,t,e,i,r);return Ll(s)}iv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ko(t.pendingLanes);n!==0&&(af(t,n|1),_t(t,Oe()),!(de&6)&&(uo=Oe()+500,Mr()))}break;case 13:mi(function(){var r=Gn(e,1);if(r!==null){var i=ft();dn(r,e,1,i)}}),Bf(e,1)}};lf=function(e){if(e.tag===13){var t=Gn(e,134217728);if(t!==null){var n=ft();dn(t,e,134217728,n)}Bf(e,134217728)}};ov=function(e){if(e.tag===13){var t=_r(e),n=Gn(e,t);if(n!==null){var r=ft();dn(n,e,t,r)}Bf(e,t)}};sv=function(){return xe};av=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};wd=function(e,t,n){switch(t){case"input":if(pd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=dc(r);if(!i)throw Error(L(90));O0(r),pd(r,i)}}}break;case"textarea":B0(e,n);break;case"select":t=n.value,t!=null&&Gi(e,!!n.multiple,t,!1)}};G0=Mf;K0=mi;var b_={usingClientEntryPoint:!1,Events:[Hs,Mi,dc,H0,Y0,Mf]},Fo={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w_={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Q0(e),e===null?null:e.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||x_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{ac=Sa.inject(w_),En=Sa}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b_;zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uf(t))throw Error(L(200));return y_(e,t,null,n)};zt.createRoot=function(e,t){if(!Uf(e))throw Error(L(299));var n=!1,r="",i=I1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ff(e,1,!1,null,null,n,!1,r,i),e[Yn]=t.current,_s(e.nodeType===8?e.parentNode:e),new Vf(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Q0(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return mi(e)};zt.hydrate=function(e,t,n){if(!bc(t))throw Error(L(200));return wc(null,e,t,!0,n)};zt.hydrateRoot=function(e,t,n){if(!Uf(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=I1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=j1(t,null,e,1,n??null,i,!1,o,s),e[Yn]=t.current,_s(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vc(t)};zt.render=function(e,t,n){if(!bc(t))throw Error(L(200));return wc(null,e,t,!1,n)};zt.unmountComponentAtNode=function(e){if(!bc(e))throw Error(L(40));return e._reactRootContainer?(mi(function(){wc(null,null,e,!1,function(){e._reactRootContainer=null,e[Yn]=null})}),!0):!1};zt.unstable_batchedUpdates=Mf;zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bc(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return wc(e,t,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function P1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P1)}catch(e){console.error(e)}}P1(),P0.exports=zt;var k_=P0.exports,A1,xg=k_;A1=xg.createRoot,xg.hydrateRoot;const S_="modulepreload",C_=function(e){return"/"+e},vg={},vi=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=C_(c),c in vg)return;vg[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":S_,u||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},Jt="https://cloudvault.co.in/api/v1",Ut={name:"CloudVault",logo:"CV",logoImage:"/cloudvault-logo.svg"};async function __(){var n;const e=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");if(!e)return null;const t=localStorage.getItem("cv_refreshToken")?localStorage:sessionStorage;try{const r=await fetch(`${Jt}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:e})});if(!r.ok)return null;const i=await r.json(),o=((n=i.data)==null?void 0:n.accessToken)||i.accessToken;return o?(t.setItem("cv_token",o),window.dispatchEvent(new CustomEvent("cv-token-refreshed",{detail:{token:o}})),o):null}catch{return null}}function Wf(e){return new Error(`Cannot reach the server at ${Jt}${e}. Make sure the backend is running (npm start in project root).`)}const wt=async(e,t={},n,r=!1)=>{const i={...t.headers||{}};n&&(i.Authorization=`Bearer ${n}`),t.body instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json");let o;try{o=await fetch(`${Jt}${e}`,{...t,headers:i})}catch{throw Wf(e)}if(o.status===401&&n&&!r){const c=await __();if(c)return wt(e,t,c,!0);throw new Error("Session expired. Please log in again.")}if(!o.ok){const c=await o.json().catch(()=>({error:"Unknown error"})),u=c.message||c.error||"",d=u.toLowerCase().includes("token")?"Something went wrong. Please try again.":u||`Request failed (${o.status})`;throw new Error(d)}if(!(o.headers.get("content-type")||"").includes("application/json"))return o;const a=await o.json();return a.success?a.data:a},$r=(e,t)=>Array.isArray(e)?e:(e==null?void 0:e[t])||[];async function kc(e,t,{onProgress:n,disposition:r="download"}={}){const i=r==="preview"?`/files/${e}/preview`:`/files/${e}/download`;let o;try{o=await fetch(`${Jt}${i}`,{headers:{Authorization:`Bearer ${t}`}})}catch{throw Wf(i)}if(!o.ok){const a=await o.json().catch(()=>({error:"Download failed"}));throw new Error(a.error||a.message||"Download failed")}const s=Number(o.headers.get("content-length"))||0;return E_(o,s,n)}async function E_(e,t,n){if(!e.body||!t){const s=await e.blob();return n==null||n(100),s}const r=e.body.getReader(),i=[];let o=0;for(;;){const{done:s,value:a}=await r.read();if(s)break;i.push(a),o+=a.length,n&&t>0&&n(Math.min(99,Math.round(o/t*100)))}return n==null||n(100),new Blob(i,{type:e.headers.get("content-type")||"application/octet-stream"})}function R1(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function N1(e,t,n,r){return new Promise((i,o)=>{const s=new XMLHttpRequest;s.open("POST",`${Jt}${e}`),s.setRequestHeader("Authorization",`Bearer ${n}`),s.upload.onprogress=a=>{a.lengthComputable&&r&&r(Math.round(a.loaded/a.total*100))},s.onload=()=>{try{const a=JSON.parse(s.responseText);s.status>=200&&s.status<300?i(a.success?a.data:a):o(new Error(a.message||a.error||"Upload failed"))}catch{s.status>=200&&s.status<300?i({}):o(new Error("Upload failed"))}},s.onerror=()=>o(Wf(e)),s.send(t)})}const Ge=e=>{if(e===0)return"0 B";const t=1024,n=["B","KB","MB","GB"],r=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**r).toFixed(1)} ${n[r]}`},bo=e=>{const t=Math.floor((Date.now()-new Date(e))/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`},Gs=(e="")=>e.startsWith("image/")?"🖼️":e==="application/pdf"?"📄":e.startsWith("video/")?"🎬":e.startsWith("audio/")?"🎵":e.includes("zip")||e.includes("archive")?"🗜️":e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")?"📝":"📁",T_=["image/","video/","audio/"],j_=new Set(["application/pdf","text/plain","text/markdown","application/json"]),$f=(e="")=>{const t=(e||"").toLowerCase();return j_.has(t)?!0:T_.some(n=>t.startsWith(n))},I_=(e="")=>{const t=(e||"").toLowerCase();return t.startsWith("image/")?"image":t==="application/pdf"?"pdf":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("text/")||t==="application/json"?"text":null},bg=[{key:"all",label:"All",icon:"📋",test:()=>!0},{key:"images",label:"Images",icon:"🖼️",test:e=>e.startsWith("image/")},{key:"documents",label:"Docs",icon:"📄",test:e=>e.includes("pdf")||e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")},{key:"videos",label:"Videos",icon:"🎬",test:e=>e.startsWith("video/")},{key:"audio",label:"Audio",icon:"🎵",test:e=>e.startsWith("audio/")},{key:"archives",label:"Archives",icon:"🗜️",test:e=>e.includes("zip")||e.includes("archive")||e.includes("tar")||e.includes("rar")}],ss=`
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
    padding-bottom: 120px;
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
      padding-bottom: 120px !important;
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
`;/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=e=>{const t=A_(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},N_=b.createContext({}),D_=()=>b.useContext(N_),M_=b.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},c)=>{const{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:h=!1,color:f="currentColor",className:p=""}=D_()??{},g=r??h?Number(n??d)*24/Number(t??u):n??d;return b.createElement("svg",{ref:c,...xu,width:t??u??xu.width,height:t??u??xu.height,stroke:e??f,strokeWidth:g,className:D1("lucide",p,i),...!o&&!R_(a)&&{"aria-hidden":"true"},...a},[...s.map(([y,w])=>b.createElement(y,w)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(M_,{ref:o,iconNode:t,className:D1(`lucide-${P_(wg(e))}`,`lucide-${e}`,r),...i}));return n.displayName=wg(e),n};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],z_=Zn("check",L_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Hr=Zn("circle-check",O_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],B_=Zn("copy",F_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],U_=Zn("mail",V_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],$_=Zn("send",W_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ca=Zn("sparkles",H_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],G_=Zn("trash-2",Y_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],q_=Zn("user",K_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Hf=Zn("x",X_);function Q_(){return l.jsx("div",{className:"lr-section",children:l.jsxs("div",{className:"lr-container",style:{maxWidth:"800px",margin:"0 auto",textAlign:"center",paddingTop:"100px"},children:[l.jsx("h1",{style:{fontSize:"48px",marginBottom:"24px"},children:"About CloudVault"}),l.jsx("p",{style:{fontSize:"20px",color:"var(--text-secondary)",marginBottom:"64px"},children:"Cloud storage without the complexity."}),l.jsxs("div",{style:{textAlign:"left",marginBottom:"64px"},children:[l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"24px",color:"var(--text)"},children:"CloudVault is built with a simple idea: storing and managing your files online should be easy, accessible, and secure."}),l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"24px",color:"var(--text)"},children:"We are building CloudVault as a modern cloud-storage platform focused on providing users with a clean experience for uploading, organizing, accessing, and managing their digital files."})]}),l.jsx("h2",{style:{fontSize:"32px",marginBottom:"24px",textAlign:"left"},children:"Our Mission"}),l.jsx("p",{style:{fontSize:"20px",color:"var(--text-secondary)",marginBottom:"40px",textAlign:"left"},children:"Make secure cloud storage simple for everyone."}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px",textAlign:"left",marginBottom:"64px"},children:[l.jsxs("div",{style:{background:"var(--surface)",padding:"24px",borderRadius:"12px",border:"1px solid var(--border)"},children:[l.jsx("h3",{style:{color:"var(--accent)",marginBottom:"12px"},children:"Simplicity"}),l.jsx("p",{style:{color:"var(--text-secondary)"},children:"A clean interface without unnecessary complexity."})]}),l.jsxs("div",{style:{background:"var(--surface)",padding:"24px",borderRadius:"12px",border:"1px solid var(--border)"},children:[l.jsx("h3",{style:{color:"var(--accent)",marginBottom:"12px"},children:"Security"}),l.jsx("p",{style:{color:"var(--text-secondary)"},children:"Protecting accounts and stored files through modern security practices."})]}),l.jsxs("div",{style:{background:"var(--surface)",padding:"24px",borderRadius:"12px",border:"1px solid var(--border)"},children:[l.jsx("h3",{style:{color:"var(--accent)",marginBottom:"12px"},children:"Accessibility"}),l.jsx("p",{style:{color:"var(--text-secondary)"},children:"Making files available whenever and wherever users need them."})]}),l.jsxs("div",{style:{background:"var(--surface)",padding:"24px",borderRadius:"12px",border:"1px solid var(--border)"},children:[l.jsx("h3",{style:{color:"var(--accent)",marginBottom:"12px"},children:"Reliability"}),l.jsx("p",{style:{color:"var(--text-secondary)"},children:"Building dependable infrastructure for everyday file storage."})]})]})]})})}function J_(){return l.jsx("div",{className:"lr-section",children:l.jsxs("div",{className:"lr-container",style:{maxWidth:"800px",margin:"0 auto",textAlign:"center",paddingTop:"100px"},children:[l.jsx("h1",{style:{fontSize:"48px",marginBottom:"24px"},children:"Contact CloudVault"}),l.jsx("p",{style:{fontSize:"20px",color:"var(--text-secondary)",marginBottom:"64px"},children:"Have a question, need help, or want to get in touch with the CloudVault team?"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px",textAlign:"left",marginBottom:"64px"},children:[l.jsxs("div",{children:[l.jsx("h3",{style:{color:"var(--text)",marginBottom:"16px"},children:"General Enquiries"}),l.jsxs("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:["Email: ",l.jsx("a",{href:"mailto:contact@cloudvault.co.in",style:{color:"var(--accent)"},children:"contact@cloudvault.co.in"})]}),l.jsx("h3",{style:{color:"var(--text)",marginBottom:"16px"},children:"Support"}),l.jsxs("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:["Email: ",l.jsx("a",{href:"mailto:support@cloudvault.co.in",style:{color:"var(--accent)"},children:"support@cloudvault.co.in"})]}),l.jsx("h3",{style:{color:"var(--text)",marginBottom:"16px"},children:"Business Enquiries"}),l.jsx("p",{style:{color:"var(--text-secondary)"},children:"For partnerships, business opportunities, or enterprise enquiries:"}),l.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:l.jsx("a",{href:"mailto:business@cloudvault.co.in",style:{color:"var(--accent)"},children:"business@cloudvault.co.in"})})]}),l.jsx("div",{style:{background:"var(--surface)",padding:"32px",borderRadius:"12px",border:"1px solid var(--border)"},children:l.jsxs("form",{onSubmit:e=>e.preventDefault(),style:{display:"flex",flexDirection:"column",gap:"16px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:"Name"}),l.jsx("input",{type:"text",placeholder:"Enter your name",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid var(--border)",background:"transparent",color:"var(--text)"}})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:"Email"}),l.jsx("input",{type:"email",placeholder:"Enter your email",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid var(--border)",background:"transparent",color:"var(--text)"}})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:"Subject"}),l.jsx("input",{type:"text",placeholder:"What can we help you with?",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid var(--border)",background:"transparent",color:"var(--text)"}})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:"Message"}),l.jsx("textarea",{placeholder:"Write your message...",rows:4,style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid var(--border)",background:"transparent",color:"var(--text)",resize:"vertical"}})]}),l.jsx("button",{type:"submit",className:"lr-btn lr-btn--mega-red",style:{marginTop:"8px",padding:"12px 24px",borderRadius:"8px",fontWeight:"600"},children:"Send Message"}),l.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)",textAlign:"center",marginTop:"16px"},children:"We usually respond as soon as possible during our support hours."})]})})]})]})})}function Z_(){return l.jsx("div",{className:"lr-section",children:l.jsxs("div",{className:"lr-container",style:{maxWidth:"800px",margin:"0 auto",textAlign:"left",paddingTop:"100px",paddingBottom:"100px"},children:[l.jsx("h1",{style:{fontSize:"48px",marginBottom:"16px"},children:"Privacy Policy"}),l.jsx("p",{style:{fontSize:"16px",color:"var(--text-secondary)",marginBottom:"48px"},children:"Last Updated: September 2026"}),l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text)"},children:"CloudVault respects your privacy and is committed to protecting the information associated with your account and use of our services."}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"1. Information We Collect"}),l.jsxs("ul",{style:{fontSize:"16px",lineHeight:"1.8",color:"var(--text-secondary)",marginBottom:"32px",paddingLeft:"24px"},children:[l.jsx("li",{children:"Account information (name, email)"}),l.jsx("li",{children:"Authentication information (hashed passwords)"}),l.jsx("li",{children:"Files uploaded by users (stored securely on AWS S3)"}),l.jsx("li",{children:"Technical and Usage information (logs for security purposes)"})]}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"2. How We Use Information"}),l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"16px",color:"var(--text-secondary)"},children:"Information may be used to:"}),l.jsxs("ul",{style:{fontSize:"16px",lineHeight:"1.8",color:"var(--text-secondary)",marginBottom:"32px",paddingLeft:"24px"},children:[l.jsx("li",{children:"Provide CloudVault services and core storage functionality"}),l.jsx("li",{children:"Authenticate users and maintain account security"}),l.jsx("li",{children:"Improve the platform and provide support"}),l.jsx("li",{children:"Detect abuse or unauthorized activity"})]}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"3. File Privacy"}),l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"Your uploaded files are strictly associated with your CloudVault account and are handled exclusively as part of providing the storage service. You retain full control over sharing permissions."}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"4. Data Security"}),l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"We implement modern security practices including AES-256 encryption at rest, TLS 1.3 encryption in transit, and short-lived signed URLs to ensure your files remain secure and inaccessible to unauthorized parties."}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"5. Data Retention"}),l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"When you delete a file, it is moved to your Trash. Once emptied from Trash, or upon account deletion, the file is permanently and irrecoverably removed from our storage systems."}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"6. Contact"}),l.jsxs("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:["If you have any questions about this Privacy Policy, please contact us at ",l.jsx("a",{href:"mailto:privacy@cloudvault.co.in",style:{color:"var(--accent)"},children:"privacy@cloudvault.co.in"}),"."]})]})})}function eE(){return l.jsx("div",{className:"lr-section",children:l.jsxs("div",{className:"lr-container",style:{maxWidth:"800px",margin:"0 auto",textAlign:"left",paddingTop:"100px",paddingBottom:"100px"},children:[l.jsx("h1",{style:{fontSize:"48px",marginBottom:"16px"},children:"Terms of Service"}),l.jsx("p",{style:{fontSize:"16px",color:"var(--text-secondary)",marginBottom:"48px"},children:"Last Updated: September 2026"}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"1. Acceptance of Terms"}),l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"By accessing or using CloudVault, you agree to these Terms of Service. If you do not agree to these terms, please do not use our services."}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"2. Your Account"}),l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"Users are responsible for maintaining the security of their account credentials. You must notify us immediately of any breach of security or unauthorized use of your account."}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"3. Acceptable Use"}),l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"16px",color:"var(--text-secondary)"},children:"Users must not use CloudVault to:"}),l.jsxs("ul",{style:{fontSize:"16px",lineHeight:"1.8",color:"var(--text-secondary)",marginBottom:"32px",paddingLeft:"24px"},children:[l.jsx("li",{children:"Upload or share illegal content"}),l.jsx("li",{children:"Distribute malware, viruses, or destructive code"}),l.jsx("li",{children:"Attempt unauthorized access to other accounts or infrastructure"}),l.jsx("li",{children:"Abuse, disrupt, or excessively burden the service"}),l.jsx("li",{children:"Violate applicable laws or infringe on intellectual-property rights"})]}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"4. User Content"}),l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"Users retain full ownership and responsibility for the files and content they upload to CloudVault. We do not claim any ownership rights to your files."}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"5. Account Suspension"}),l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"CloudVault may restrict, suspend, or terminate accounts where required to protect the service, protect other users, or comply with applicable law, particularly in cases of Acceptable Use violations."}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"6. Service Availability"}),l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"While we strive for high uptime, service availability may occasionally be affected by scheduled maintenance, infrastructure problems, or circumstances outside our control. We do not guarantee uninterrupted service."}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"7. Contact"}),l.jsxs("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:["If you have any questions regarding these Terms, please contact us at ",l.jsx("a",{href:"mailto:legal@cloudvault.co.in",style:{color:"var(--accent)"},children:"legal@cloudvault.co.in"}),"."]})]})})}function tE(){return l.jsx("div",{className:"lr-section",children:l.jsxs("div",{className:"lr-container",style:{maxWidth:"800px",margin:"0 auto",textAlign:"left",paddingTop:"100px",paddingBottom:"100px"},children:[l.jsx("h1",{style:{fontSize:"48px",marginBottom:"16px"},children:"CloudVault Security"}),l.jsx("p",{style:{fontSize:"20px",color:"var(--text-secondary)",marginBottom:"48px"},children:"Security is an important part of how we build CloudVault."}),l.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"48px",color:"var(--text)"},children:"We believe in transparency regarding how we secure your data. Below is an overview of the security architecture and mechanisms we have implemented to keep your digital workspace safe."}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"Authentication & Access Control"}),l.jsxs("ul",{style:{fontSize:"16px",lineHeight:"1.8",color:"var(--text-secondary)",marginBottom:"32px",paddingLeft:"24px"},children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Strong Password Hashing:"})," Passwords are never stored in plaintext. We use bcrypt hashing with dynamic salts to secure credentials."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Secure Session Tokens:"})," Authentication relies on securely signed JSON Web Tokens (JWT) that expire and require active validation."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Rate Limiting:"})," Endpoints are protected by strict rate limiting to prevent brute-force login attempts and DDoS attacks."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"File-level Access Controls:"})," Only the owner of a file or users explicitly granted permission via sharing links can access a file."]})]}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"Cloud Storage Architecture"}),l.jsxs("ul",{style:{fontSize:"16px",lineHeight:"1.8",color:"var(--text-secondary)",marginBottom:"32px",paddingLeft:"24px"},children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Data Encryption in Transit:"})," All communication between your browser and CloudVault servers occurs over HTTPS using TLS 1.3, ensuring your files cannot be intercepted while uploading or downloading."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Data Encryption at Rest:"})," Files stored on our backend infrastructure are encrypted at rest using industry-standard AES-256 encryption."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Pre-Signed URLs:"})," File downloads and previews are served via short-lived, pre-signed cryptographic URLs that expire automatically, preventing unauthorized hotlinking or unauthorized sharing."]})]}),l.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"Infrastructure Security"}),l.jsxs("ul",{style:{fontSize:"16px",lineHeight:"1.8",color:"var(--text-secondary)",marginBottom:"32px",paddingLeft:"24px"},children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Isolated Environments:"})," Our production systems are isolated and require strict cryptographic key access."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Automated Backups:"})," Database and infrastructure states are backed up securely to prevent data loss in the event of hardware failure."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Content Security Policy (CSP):"})," We utilize modern browser security headers (Helmet) to mitigate XSS (Cross-Site Scripting) and other injection attacks."]})]}),l.jsxs("div",{style:{padding:"24px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",marginTop:"48px"},children:[l.jsx("h3",{style:{fontSize:"20px",marginBottom:"12px"},children:"Vulnerability Disclosure"}),l.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:"14px",lineHeight:"1.6"},children:["If you are a security researcher and believe you have found a vulnerability in CloudVault, please contact us immediately at ",l.jsx("a",{href:"mailto:security@cloudvault.co.in",style:{color:"var(--accent)"},children:"security@cloudvault.co.in"}),"."]})]})]})})}function nE(){const e=[{name:"Website",status:"Operational"},{name:"Authentication",status:"Operational"},{name:"File Uploads",status:"Operational"},{name:"File Downloads",status:"Operational"},{name:"File Preview",status:"Operational"},{name:"API Services",status:"Operational"}];return l.jsx("div",{className:"lr-section",children:l.jsxs("div",{className:"lr-container",style:{maxWidth:"800px",margin:"0 auto",textAlign:"left",paddingTop:"100px",paddingBottom:"100px"},children:[l.jsx("h1",{style:{fontSize:"48px",marginBottom:"16px"},children:"System Status"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"24px",background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.2)",borderRadius:"12px",marginBottom:"48px"},children:[l.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"#10b981",boxShadow:"0 0 10px #10b981"}}),l.jsx("span",{style:{color:"#10b981",fontWeight:"600",fontSize:"18px"},children:"All Systems Operational"})]}),l.jsxs("div",{style:{border:"1px solid var(--border)",borderRadius:"12px",overflow:"hidden",background:"var(--surface)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"16px 24px",background:"rgba(255,255,255,0.02)",borderBottom:"1px solid var(--border)"},children:[l.jsx("span",{style:{fontWeight:"600",color:"var(--text-secondary)"},children:"Service"}),l.jsx("span",{style:{fontWeight:"600",color:"var(--text-secondary)"},children:"Status"})]}),e.map((t,n)=>l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"16px 24px",borderBottom:n!==e.length-1?"1px solid var(--border)":"none"},children:[l.jsx("span",{style:{color:"var(--text)"},children:t.name}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#10b981"}}),l.jsx("span",{style:{color:"#10b981",fontSize:"14px"},children:t.status})]})]},n))]})]})})}const rE=[{title:"Secure Cloud Storage",desc:"Store your documents, images, videos, and other important files securely in the cloud.",icon:l.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:l.jsx("path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"})})},{title:"Organize Your Files",desc:"Create folders, rename files, move content, and keep your digital workspace organized.",icon:l.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:l.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})})},{title:"Fast Uploads",desc:"Upload files through a simple drag-and-drop interface with an experience designed for speed and reliability.",icon:l.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"17 8 12 3 7 8"}),l.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]})},{title:"File Preview",desc:"Preview supported images, documents, and PDFs without downloading them first.",icon:l.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[l.jsx("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}),l.jsx("circle",{cx:"12",cy:"12",r:"3"})]})},{title:"Easy File Sharing",desc:"Share files when you need to collaborate or send documents to others.",icon:l.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[l.jsx("circle",{cx:"18",cy:"5",r:"3"}),l.jsx("circle",{cx:"6",cy:"12",r:"3"}),l.jsx("circle",{cx:"18",cy:"19",r:"3"}),l.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),l.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})},{title:"Secure Authentication",desc:"Protect your account with secure authentication and account recovery features.",icon:l.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:l.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})},{title:"Access Anywhere",desc:"Access your files from your desktop, laptop, tablet, or mobile browser.",icon:l.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[l.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),l.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]})},{title:"File Management Tools",desc:"Download, delete, rename, organize, and manage your files from one place.",icon:l.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[l.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}),l.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}),l.jsx("line",{x1:"6",y1:"6",x2:"6.01",y2:"6"}),l.jsx("line",{x1:"6",y1:"18",x2:"6.01",y2:"18"})]})}],iE=[{num:"01",title:"Never run out of space",desc:"Start with 5 GB free. Scale to terabytes when your needs grow."},{num:"02",title:"Share with anyone",desc:"Read-only, full access, password-protected, or expiring links — your choice."},{num:"03",title:"Total control",desc:"Your data, your rules. Manage every permission at every level."},{num:"04",title:"Works everywhere",desc:"Access from desktop, tablet, or mobile. No app install required."}],oE=[{q:"What is CloudVault?",a:"CloudVault is a cloud storage platform that allows users to securely store, organize, access, and manage their files online."},{q:"Is CloudVault free?",a:"CloudVault currently provides access to its core cloud storage functionality. Premium storage and additional plans may be introduced in the future."},{q:"What types of files can I upload?",a:"You can upload common file types including documents, images, PDFs, videos, and other supported files."},{q:"Can I access my files from different devices?",a:"Yes. CloudVault is designed to allow you to access your files through a web browser from supported devices."},{q:"Can I preview files without downloading them?",a:"Yes. Supported file types can be previewed directly within CloudVault."},{q:"Can I download my files?",a:"Yes. Files stored in your CloudVault account can be downloaded when needed."},{q:"How do I recover my account?",a:"Use the account recovery option on the login page and follow the verification steps provided by CloudVault."},{q:"Is my data secure?",a:"CloudVault uses authentication and cloud-storage security mechanisms to help protect your account and files."},{q:"Can I delete my files?",a:"Yes. You can manage your stored files and delete files that you no longer need."},{q:"Who can use CloudVault?",a:"CloudVault is designed for individuals and teams looking for a simple way to store and manage files online."}];function sE(){b.useEffect(()=>{const e=document.querySelectorAll(".lr-reveal");if(!e.length)return;const t=new IntersectionObserver(n=>n.forEach(r=>{r.isIntersecting&&(r.target.classList.add("lr-visible"),t.unobserve(r.target))}),{threshold:.08,rootMargin:"0px 0px -60px 0px"});return e.forEach(n=>t.observe(n)),()=>t.disconnect()},[])}function kg(e,t=2e3){const[n,r]=b.useState(0),i=b.useRef(null),o=b.useRef(!1);return b.useEffect(()=>{if(!i.current)return;const s=new IntersectionObserver(([a])=>{if(a.isIntersecting&&!o.current){o.current=!0;const c=performance.now(),u=d=>{const h=Math.min((d-c)/t,1),f=1-Math.pow(1-h,3);r(Math.floor(f*e)),h<1&&requestAnimationFrame(u)};requestAnimationFrame(u)}},{threshold:.3});return s.observe(i.current),()=>s.disconnect()},[e,t]),[n,i]}function aE({view:e="landing",onNavigate:t,onGetStarted:n,onLogin:r,onSignUp:i}){const[o,s]=b.useState({filesStored:0,activeUsers:0,storageUsed:0,storageCapacity:0xa0000000000}),[a,c]=b.useState(!1),[u,d]=b.useState(null),h=b.useRef(null);sE(),b.useEffect(()=>{fetch(`${Jt}/public/stats`).then(m=>m.json()).then(m=>{m.success&&m.data&&s(m.data)}).catch(()=>{})},[]),b.useEffect(()=>{const m=()=>c(window.scrollY>30);return window.addEventListener("scroll",m,{passive:!0}),()=>window.removeEventListener("scroll",m)},[]);const[f,p]=kg(o.filesStored||1240,2200),[g,y]=kg(o.activeUsers||380,2e3),w=b.useRef(null);return b.useEffect(()=>{const m=w.current;if(!m)return;const x=m.getContext("2d");let v,k=[];const T=80,C=()=>{m.width=window.innerWidth,m.height=document.documentElement.scrollHeight};C(),window.addEventListener("resize",C);for(let E=0;E<T;E++)k.push({x:Math.random()*m.width,y:Math.random()*m.height,r:Math.random()*1.5+.3,dx:(Math.random()-.5)*.15,dy:(Math.random()-.5)*.12,opacity:Math.random()*.5+.1,pulse:Math.random()*Math.PI*2,pulseSpeed:Math.random()*.008+.003});const j=()=>{x.clearRect(0,0,m.width,m.height),k.forEach(E=>{E.x+=E.dx,E.y+=E.dy,E.pulse+=E.pulseSpeed;const R=E.opacity*(.6+.4*Math.sin(E.pulse));E.x<0&&(E.x=m.width),E.x>m.width&&(E.x=0),E.y<0&&(E.y=m.height),E.y>m.height&&(E.y=0),x.beginPath(),x.arc(E.x,E.y,E.r,0,Math.PI*2),x.fillStyle=`rgba(255,255,255,${R})`,x.fill()});for(let E=0;E<k.length;E++)for(let R=E+1;R<k.length;R++){const P=k[E].x-k[R].x,N=k[E].y-k[R].y,D=Math.sqrt(P*P+N*N);D<120&&(x.beginPath(),x.moveTo(k[E].x,k[E].y),x.lineTo(k[R].x,k[R].y),x.strokeStyle=`rgba(255,255,255,${.03*(1-D/120)})`,x.lineWidth=.5,x.stroke())}v=requestAnimationFrame(j)};return j(),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",C)}},[]),l.jsxs("div",{className:"lr-shell",children:[l.jsx("style",{children:lE}),l.jsxs("div",{className:"lr-bg","aria-hidden":"true",children:[l.jsx("canvas",{ref:w,className:"lr-bg__particles"}),l.jsx("div",{className:"lr-bg__aurora lr-bg__aurora--1"}),l.jsx("div",{className:"lr-bg__aurora lr-bg__aurora--2"}),l.jsx("div",{className:"lr-bg__aurora lr-bg__aurora--3"}),l.jsx("div",{className:"lr-bg__grid"})]}),l.jsx("header",{className:`lr-nav${a?" lr-nav--scrolled":""}`,ref:h,children:l.jsxs("div",{className:"lr-nav__inner",children:[l.jsxs("button",{type:"button",className:"lr-nav__brand",onClick:n,"aria-label":"CloudVault home",children:[l.jsx("span",{className:"lr-nav__logo",children:l.jsx("img",{src:Ut.logoImage,alt:""})}),l.jsx("span",{className:"lr-nav__wordmark",children:Ut.name})]}),l.jsxs("nav",{className:"lr-nav__links",children:[l.jsx("a",{href:"#features",onClick:m=>{e!=="landing"&&(m.preventDefault(),t("landing"))},children:"Features"}),l.jsx("a",{href:"#pricing",onClick:m=>{e!=="landing"&&(m.preventDefault(),t("landing"))},children:"Pricing"}),l.jsx("a",{href:"#faq",onClick:m=>{e!=="landing"&&(m.preventDefault(),t("landing"))},children:"FAQ"}),l.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("contact")},children:"Help & Support"})]}),l.jsxs("div",{className:"lr-nav__actions",children:[l.jsx("button",{type:"button",className:"lr-btn lr-btn--ghost",onClick:r,children:"Log in"}),l.jsx("button",{type:"button",className:"lr-btn lr-btn--primary",onClick:i,children:"Get started free"})]})]})}),l.jsxs("main",{children:[e==="landing"&&l.jsxs("div",{className:"lr-landing-content",children:[l.jsxs("section",{className:"lr-hero",children:[l.jsxs("div",{className:"lr-hero__ambient","aria-hidden":"true",children:[l.jsx("div",{className:"lr-hero__orb lr-hero__orb--1"}),l.jsx("div",{className:"lr-hero__orb lr-hero__orb--2"})]}),l.jsxs("div",{className:"lr-hero__content",children:[l.jsxs("div",{className:"lr-hero__badge-green lr-reveal",children:[l.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M20 6 9 17l-5-5"})}),"Trusted by 500k+ users"]}),l.jsxs("h1",{className:"lr-hero__title lr-reveal",children:["Powerful Cloud Storage,",l.jsx("br",{}),"Built for Simplicity."]}),l.jsx("p",{className:"lr-hero__sub lr-reveal",style:{marginBottom:"32px"},children:"CloudVault gives you a secure and simple way to store, manage, preview, and share your files from anywhere."}),l.jsxs("div",{className:"lr-hero__ctas-centered lr-reveal",style:{flexDirection:"row",justifyContent:"center"},children:[l.jsx("button",{className:"lr-btn lr-btn--mega-red",onClick:n,children:"Get Started"}),l.jsx("a",{href:"#features",className:"lr-btn lr-btn--outline",style:{padding:"14px 32px",fontSize:"16px",borderRadius:"99px"},children:"Explore CloudVault"})]})]}),l.jsx("div",{className:"lr-hero__preview lr-reveal",children:l.jsxs("div",{className:"lr-preview",children:[l.jsx("div",{className:"lr-preview__glow","aria-hidden":"true"}),l.jsxs("div",{className:"lr-preview__body",children:[l.jsxs("aside",{className:"lr-preview__side-icons",children:[l.jsx("span",{className:"side-icon active",children:l.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"var(--accent)",stroke:"none",children:l.jsx("path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"})})}),l.jsx("span",{className:"side-icon",children:l.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})})}),l.jsx("span",{className:"side-icon",children:l.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),l.jsx("line",{x1:"9",x2:"15",y1:"3",y2:"3"}),l.jsx("line",{x1:"9",x2:"15",y1:"21",y2:"21"}),l.jsx("path",{d:"M9 3v18"}),l.jsx("path",{d:"M15 3v18"})]})}),l.jsx("span",{className:"side-icon",children:l.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"3"}),l.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),l.jsxs("div",{className:"lr-preview__main",children:[l.jsxs("div",{className:"lr-preview__header",children:[l.jsxs("div",{className:"lr-preview__search",children:[l.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("circle",{cx:"11",cy:"11",r:"8"}),l.jsx("path",{d:"m21 21-4.3-4.3"})]}),"Search"]}),l.jsxs("button",{className:"lr-preview__upload-btn",children:[l.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"17 8 12 3 7 8"}),l.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),"Upload"]})]}),l.jsxs("div",{className:"lr-preview__grid",children:[l.jsxs("div",{className:"lr-preview__card folder",style:{animationDelay:"0.6s"},children:[l.jsx("div",{className:"lr-folder-icon"}),l.jsxs("div",{className:"lr-card-info",children:[l.jsx("h5",{children:"Project Alpha"}),l.jsx("span",{children:"Folder · 1.2 GB"})]})]}),l.jsx("div",{className:"lr-preview__card folder small-folder",style:{animationDelay:"0.7s"},children:l.jsx("div",{className:"lr-folder-icon"})}),l.jsx("div",{className:"lr-preview__card folder small-folder",style:{animationDelay:"0.8s"},children:l.jsx("div",{className:"lr-folder-icon"})}),l.jsxs("div",{className:"lr-preview__card file glass-file",style:{animationDelay:"0.9s"},children:[l.jsx("div",{className:"lr-file-icon excel",children:l.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),l.jsx("path",{d:"M3 9h18"}),l.jsx("path",{d:"M9 21V9"})]})}),l.jsxs("div",{className:"lr-card-info",children:[l.jsx("h5",{children:"Q3 Report.xlsx"}),l.jsx("span",{children:"Spreadsheet · 2.4 MB"})]})]})]}),l.jsxs("div",{className:"lr-preview__pagination",children:[l.jsx("span",{className:"dot active"}),l.jsx("span",{className:"dot"}),l.jsx("span",{className:"dot"})]})]})]})]})}),l.jsxs("div",{className:"lr-hero__ctas-centered lr-reveal",children:[l.jsx("button",{type:"button",className:"lr-btn lr-btn--mega-red",onClick:n,children:"Start Free – 5GB Included"}),l.jsx("a",{href:"#login",onClick:m=>{m.preventDefault(),r()},className:"lr-hero__login-link",children:"Log In"})]})]}),l.jsxs("section",{className:"lr-trust lr-reveal",children:[l.jsx("p",{children:"Secured with industry-leading technology"}),l.jsx("div",{className:"lr-trust__logos",children:["AES-256","TLS 1.3","SOC 2","GDPR"].map(m=>l.jsx("span",{className:"lr-trust__badge",children:m},m))})]}),l.jsx("section",{id:"features",className:"lr-section",children:l.jsxs("div",{className:"lr-section__inner",children:[l.jsxs("div",{className:"lr-section__header lr-reveal",children:[l.jsx("span",{className:"lr-kicker",children:"All-in-one platform"}),l.jsxs("h2",{children:["Everything you need to",l.jsx("br",{}),"store and share."]}),l.jsxs("p",{children:[Ut.name," combines encrypted cloud storage with powerful tools to manage your digital life with confidence."]})]}),l.jsx("div",{className:"lr-features lr-reveal",children:rE.map((m,x)=>l.jsxs("article",{className:"lr-feature-card",style:{animationDelay:`${x*.1}s`},children:[l.jsx("div",{className:"lr-feature-card__icon",children:m.icon}),l.jsx("h3",{children:m.title}),l.jsx("p",{children:m.desc})]},m.title))})]})}),l.jsx("section",{id:"security",className:"lr-section lr-section--alt",children:l.jsx("div",{className:"lr-section__inner",children:l.jsxs("div",{className:"lr-security lr-reveal",children:[l.jsxs("div",{className:"lr-security__text",children:[l.jsx("span",{className:"lr-kicker",children:"Security first"}),l.jsx("h2",{children:"Your data stays encrypted and private."}),l.jsx("p",{children:"We protect your data with AES-256 encryption at rest and TLS 1.3 in transit. Only you — and the people you explicitly authorize — can access your files."}),l.jsxs("ul",{className:"lr-security__checks",children:[l.jsxs("li",{children:[l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#22c55e",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M20 6 9 17l-5-5"})}),"End-to-end encryption"]}),l.jsxs("li",{children:[l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#22c55e",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M20 6 9 17l-5-5"})}),"Activity audit logs"]}),l.jsxs("li",{children:[l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#22c55e",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M20 6 9 17l-5-5"})}),"Role-based access control"]}),l.jsxs("li",{children:[l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#22c55e",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M20 6 9 17l-5-5"})}),"Password-protected sharing"]})]}),l.jsx("button",{type:"button",className:"lr-btn lr-btn--primary",onClick:n,style:{marginTop:24},children:"Get started free"})]}),l.jsx("div",{className:"lr-security__visual","aria-hidden":"true",children:l.jsx("div",{className:"lr-shield",children:l.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),l.jsx("path",{d:"m9 12 2 2 4-4",stroke:"#22c55e",strokeWidth:"2"})]})})})]})})}),l.jsx("section",{className:"lr-section",children:l.jsxs("div",{className:"lr-section__inner",children:[l.jsxs("div",{className:"lr-section__header lr-reveal",children:[l.jsxs("span",{className:"lr-kicker",children:["Why ",Ut.name,"?"]}),l.jsx("h2",{children:"Built for how you work today."})]}),l.jsx("div",{className:"lr-why lr-reveal",children:iE.map((m,x)=>l.jsxs("div",{className:"lr-why__item",style:{animationDelay:`${x*.08}s`},children:[l.jsx("span",{className:"lr-why__num",children:m.num}),l.jsxs("div",{children:[l.jsx("h3",{children:m.title}),l.jsx("p",{children:m.desc})]})]},m.num))})]})}),l.jsx("section",{className:"lr-stats lr-reveal",children:l.jsxs("div",{className:"lr-stats__inner",children:[l.jsxs("div",{className:"lr-stats__item",ref:p,children:[l.jsxs("strong",{children:[f.toLocaleString(),"+"]}),l.jsx("span",{children:"Files stored"})]}),l.jsx("div",{className:"lr-stats__divider"}),l.jsxs("div",{className:"lr-stats__item",children:[l.jsx("strong",{children:Ge(o.storageCapacity)}),l.jsx("span",{children:"Total capacity"})]}),l.jsx("div",{className:"lr-stats__divider"}),l.jsxs("div",{className:"lr-stats__item",ref:y,children:[l.jsxs("strong",{children:[g.toLocaleString(),"+"]}),l.jsx("span",{children:"Active users"})]})]})}),l.jsx("section",{id:"pricing",className:"lr-section lr-section--alt",children:l.jsxs("div",{className:"lr-section__inner",children:[l.jsxs("div",{className:"lr-section__header lr-reveal",children:[l.jsx("h2",{children:"Simple & Transparent"}),l.jsx("p",{children:"Choose the CloudVault experience that fits your storage needs."})]}),l.jsxs("div",{className:"lr-pricing lr-reveal",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"32px"},children:[l.jsxs("article",{className:"lr-plan",children:[l.jsx("h3",{children:"Free Plan"}),l.jsxs("div",{className:"lr-plan__price",children:["₹0",l.jsx("span",{children:"/ month"})]}),l.jsxs("ul",{style:{marginBottom:"32px"},children:[l.jsxs("li",{children:[l.jsx(Hr,{size:16})," Secure cloud storage"]}),l.jsxs("li",{children:[l.jsx(Hr,{size:16})," File uploads"]}),l.jsxs("li",{children:[l.jsx(Hr,{size:16})," Folder management"]}),l.jsxs("li",{children:[l.jsx(Hr,{size:16})," File preview"]}),l.jsxs("li",{children:[l.jsx(Hr,{size:16})," File download"]}),l.jsxs("li",{children:[l.jsx(Hr,{size:16})," Basic account management"]}),l.jsxs("li",{children:[l.jsx(Hr,{size:16})," Access from multiple devices"]})]}),l.jsx("button",{className:"lr-btn lr-btn--outline lr-btn--full",onClick:n,children:"Get Started"})]}),l.jsxs("article",{className:"lr-plan lr-plan--pop",style:{border:"1px solid rgba(217,0,7,0.3)"},children:[l.jsx("h3",{children:"Coming Soon"}),l.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"32px",fontSize:"15px"},children:"More storage. More possibilities. Premium CloudVault plans with additional storage and advanced features are coming soon."}),l.jsx("button",{className:"lr-btn lr-btn--primary lr-btn--full",onClick:()=>alert("Notifications coming soon!"),children:"Notify Me"})]})]})]})}),l.jsx("section",{id:"faq",className:"lr-section",children:l.jsxs("div",{className:"lr-section__inner",style:{maxWidth:720},children:[l.jsx("div",{className:"lr-section__header lr-reveal",children:l.jsx("h2",{children:"FAQ"})}),l.jsx("div",{className:"lr-faqs lr-reveal",children:oE.map((m,x)=>l.jsxs("div",{className:`lr-faq${u===x?" lr-faq--open":""}`,children:[l.jsxs("button",{type:"button",className:"lr-faq__q",onClick:()=>d(u===x?null:x),children:[m.q,l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lr-faq__chevron",children:l.jsx("path",{d:"m6 9 6 6 6-6"})})]}),l.jsx("div",{className:"lr-faq__a",children:l.jsx("p",{children:m.a})})]},x))})]})}),l.jsx("section",{className:"lr-cta lr-reveal",children:l.jsxs("div",{className:"lr-cta__inner",children:[l.jsx("h2",{children:"Ready to take control of your files?"}),l.jsxs("p",{children:["Join thousands who trust ",Ut.name," with their most important data."]}),l.jsxs("div",{className:"lr-hero__ctas",children:[l.jsxs("button",{type:"button",className:"lr-btn lr-btn--primary lr-btn--lg",onClick:n,children:["Sign up for free",l.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M5 12h14"}),l.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),l.jsx("button",{type:"button",className:"lr-btn lr-btn--outline lr-btn--lg",onClick:r,children:"Log in"})]})]})})]}),e==="about"&&l.jsx(Q_,{}),e==="contact"&&l.jsx(J_,{}),e==="privacy"&&l.jsx(Z_,{}),e==="terms"&&l.jsx(eE,{}),e==="security"&&l.jsx(tE,{}),e==="status"&&l.jsx(nE,{})]}),l.jsx("section",{className:"lr-section",style:{borderTop:"1px solid var(--border)",background:"linear-gradient(to bottom, transparent, rgba(225, 29, 72, 0.05))"},children:l.jsxs("div",{className:"lr-container",style:{textAlign:"center",padding:"64px 0"},children:[l.jsx("h2",{style:{fontSize:"36px",marginBottom:"16px"},children:"Ready to take control of your files?"}),l.jsx("p",{style:{fontSize:"18px",color:"var(--text-secondary)",marginBottom:"32px"},children:"Securely store, organize and access your files with CloudVault."}),l.jsx("button",{className:"lr-btn lr-btn--mega-red",onClick:n,children:"Get Started →"})]})}),l.jsx("footer",{className:"lr-footer",children:l.jsxs("div",{className:"lr-footer__inner",children:[l.jsxs("div",{className:"lr-footer__grid",style:{gridTemplateColumns:"1.5fr 1fr 1fr 1fr 1fr",gap:"32px"},children:[l.jsxs("div",{className:"lr-footer__brand",children:[l.jsxs("div",{className:"lr-footer__brand-lockup",children:[l.jsx("span",{className:"lr-nav__logo",children:l.jsx("img",{src:Ut.logoImage,alt:""})}),l.jsx("strong",{children:Ut.name})]}),l.jsx("p",{children:"Secure cloud storage for individuals and teams."})]}),l.jsxs("div",{className:"lr-footer__col",children:[l.jsx("h4",{children:"PRODUCT"}),l.jsx("a",{href:"#features",onClick:m=>{e!=="landing"&&(m.preventDefault(),t("landing"))},children:"Features"}),l.jsx("a",{href:"#pricing",onClick:m=>{e!=="landing"&&(m.preventDefault(),t("landing"))},children:"Pricing"}),l.jsx("a",{href:"#faq",onClick:m=>{e!=="landing"&&(m.preventDefault(),t("landing"))},children:"FAQ"}),l.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("security")},children:"Security"}),l.jsx("a",{href:"#",style:{color:"var(--text-muted)",cursor:"default"},children:"What\\'s New"})]}),l.jsxs("div",{className:"lr-footer__col",children:[l.jsx("h4",{children:"COMPANY"}),l.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("about")},children:"About"}),l.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("contact")},children:"Contact"}),l.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("contact")},children:"Support"}),l.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("status")},children:"Status"})]}),l.jsxs("div",{className:"lr-footer__col",children:[l.jsx("h4",{children:"RESOURCES"}),l.jsx("a",{href:"#",style:{color:"var(--text-muted)",cursor:"default"},children:"Documentation (Soon)"}),l.jsx("a",{href:"#",style:{color:"var(--text-muted)",cursor:"default"},children:"Help Center (Soon)"}),l.jsx("a",{href:"#",style:{color:"var(--text-muted)",cursor:"default"},children:"API (Soon)"}),l.jsx("a",{href:"#",style:{color:"var(--text-muted)",cursor:"default"},children:"Changelog (Soon)"})]}),l.jsxs("div",{className:"lr-footer__col",children:[l.jsx("h4",{children:"LEGAL"}),l.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("privacy")},children:"Privacy"}),l.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("terms")},children:"Terms"}),l.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("privacy")},children:"Cookie Policy"}),l.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("terms")},children:"Acceptable Use"})]})]}),l.jsx("div",{className:"lr-footer__bottom",children:l.jsxs("span",{children:["© 2026 ",Ut.name,". Made for your files."]})})]})})]})}const lE=`
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
  /* overflow: hidden removed to allow 3D pop out */
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
  border-top-left-radius: var(--radius-lg);
  border-top-right-radius: var(--radius-lg);
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
    border-radius: 20px; /* overflow: hidden removed */ width: 100%; max-width: 700px;
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
    justify-content: flex-end; position: relative; /* overflow: hidden removed */
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

  /* === ULTRA PREMIUM 3D ENHANCEMENTS === */
  
  /* Premium Metallic Gradient Text for Hero */
  .lr-hero__title {
    background: linear-gradient(180deg, #ffffff 20%, #a1a1aa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 10px 30px rgba(0,0,0,0.5);
  }

  /* 3D Dashboard Perspective Container */
  .lr-hero__preview {
    perspective: 1500px;
    transform-style: preserve-3d;
  }

  /* 3D Dashboard Mockup Tilt */
  .lr-preview {
    transform: rotateX(10deg) rotateY(-12deg) rotateZ(2deg) translateY(0);
    transform-style: preserve-3d;
    box-shadow: -20px 40px 100px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.25), inset -1px -1px 0 rgba(255,255,255,0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s ease;
  }
  
  /* Flatten on hover to interact with it */
  .lr-preview:hover {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateY(-10px);
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.25);
  }

  .lr-preview__body, .lr-preview__grid {
    transform-style: preserve-3d;
  }

  /* 3D Floating Animation for Dashboard Cards */
  @keyframes floatCard3D {
    0%, 100% { transform: translateY(0) translateZ(30px); }
    50% { transform: translateY(-10px) translateZ(30px); }
  }
  .lr-preview__card { animation: floatCard3D 6s ease-in-out infinite; box-shadow: -10px 15px 30px rgba(0,0,0,0.4); }
  .lr-preview__card:nth-child(1) { animation-delay: 0s; }
  .lr-preview__card:nth-child(2) { animation-delay: -1.5s; }
  .lr-preview__card:nth-child(3) { animation-delay: -3s; }
  
  /* Extreme 3D Pop for the Glass File */
  @keyframes floatFile3D {
    0%, 100% { transform: translateY(0) translateZ(80px); }
    50% { transform: translateY(-15px) translateZ(80px); }
  }
  .glass-file { 
    animation: floatFile3D 5s ease-in-out infinite; 
    animation-delay: -2s; 
    border: 1px solid rgba(255,255,255,0.3);
    box-shadow: -20px 30px 60px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.4);
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
    transform: translateY(-10px) scale(1.03) translateZ(10px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.6);
    z-index: 10;
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 30px rgba(225, 29, 72, 0.15), inset 0 0 20px rgba(225, 29, 72, 0.05); border-color: rgba(225, 29, 72, 0.4); }
    50% { box-shadow: 0 0 60px rgba(225, 29, 72, 0.4), inset 0 0 30px rgba(225, 29, 72, 0.2); border-color: rgba(225, 29, 72, 0.8); }
  }
  .lr-plan--pop { animation: pulse-glow 3.5s infinite; }

  .lr-preview__upload-btn {
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .lr-preview__upload-btn:hover {
    transform: scale(1.05) translateZ(20px);
    box-shadow: 0 0 15px rgba(244, 63, 94, 0.6);
  }

  /* FAQ Accordion Tweak */
  .lr-faq__chevron { color: #e11d48; }

  @keyframes floatCard {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

@media (max-width: 900px) {
  .lr-hero__preview { perspective: none; }
  .lr-preview { transform: none !important; transition: none; }
  .lr-preview:hover { transform: none !important; box-shadow: 0 40px 80px -20px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.03); }
  .lr-preview__card { animation: floatCard 6s ease-in-out infinite; transform: none !important; }
  .glass-file { animation: floatCard 5s ease-in-out infinite; transform: none !important; }
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
`,cE=()=>{};var Sg={};/**
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
 */const M1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},uE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},L1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,d=o>>2,h=(o&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;c||(p=64,s||(f=64)),r.push(n[d],n[h],n[f],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(M1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):uE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new dE;const f=o<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class dE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hE=function(e){const t=M1(e);return L1.encodeByteArray(t,!0)},z1=function(e){return hE(e).replace(/\./g,"")},O1=function(e){try{return L1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function fE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pE=()=>fE().__FIREBASE_DEFAULTS__,mE=()=>{if(typeof process>"u"||typeof Sg>"u")return;const e=Sg.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},gE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&O1(e[1]);return t&&JSON.parse(t)},Yf=()=>{try{return cE()||pE()||mE()||gE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},yE=e=>{var t,n;return(n=(t=Yf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},F1=()=>{var e;return(e=Yf())===null||e===void 0?void 0:e.config},B1=e=>{var t;return(t=Yf())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class xE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Sc(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vE(e){return(await fetch(e,{credentials:"include"})).ok}const as={};function bE(){const e={prod:[],emulator:[]};for(const t of Object.keys(as))as[t]?e.emulator.push(t):e.prod.push(t);return e}function wE(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Cg=!1;function kE(e,t){if(typeof window>"u"||typeof document>"u"||!Sc(window.location.host)||as[e]===t||as[e]||Cg)return;as[e]=t;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",o=bE().prod.length>0;function s(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,p){f.setAttribute("width","24"),f.setAttribute("id",p),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Cg=!0,s()},f}function d(f,p){f.setAttribute("id",p),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=wE(r),p=n("text"),g=document.getElementById(p)||document.createElement("span"),y=n("learnmore"),w=document.getElementById(y)||document.createElement("a"),m=n("preprendIcon"),x=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const v=f.element;a(v),d(w,y);const k=u();c(x,m),v.append(x,g,w,k),document.body.appendChild(v)}o?(g.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function CE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _E(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function EE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TE(){const e=pt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function jE(){try{return typeof indexedDB=="object"}catch{return!1}}function IE(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const PE="FirebaseError";class Lr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=PE,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?AE(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Lr(i,a,r)}}function AE(e,t){return e.replace(RE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const RE=/\{\$([^}]+)}/g;function NE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ho(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(_g(o)&&_g(s)){if(!ho(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _g(e){return e!==null&&typeof e=="object"}/**
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
 */function qs(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function DE(e,t){const n=new ME(e,t);return n.subscribe.bind(n)}class ME{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=vu),i.error===void 0&&(i.error=vu),i.complete===void 0&&(i.complete=vu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function vu(){}/**
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
 */function wo(e){return e&&e._delegate?e._delegate:e}class fo{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const qr="[DEFAULT]";/**
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
 */class zE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new xE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(FE(t))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=qr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qr){return this.instances.has(t)}getOptions(t=qr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qr){return this.component?this.component.multipleInstances?t:qr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OE(e){return e===qr?void 0:e}function FE(e){return e.instantiationMode==="EAGER"}/**
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
 */class BE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new zE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(we||(we={}));const VE={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},UE=we.INFO,WE={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},$E=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=WE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class V1{constructor(t){this.name=t,this._logLevel=UE,this._logHandler=$E,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in we))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?VE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...t),this._logHandler(this,we.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...t),this._logHandler(this,we.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,we.INFO,...t),this._logHandler(this,we.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,we.WARN,...t),this._logHandler(this,we.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...t),this._logHandler(this,we.ERROR,...t)}}const HE=(e,t)=>t.some(n=>e instanceof n);let Eg,Tg;function YE(){return Eg||(Eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GE(){return Tg||(Tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U1=new WeakMap,eh=new WeakMap,W1=new WeakMap,bu=new WeakMap,Gf=new WeakMap;function KE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Tr(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&U1.set(n,e)}).catch(()=>{}),Gf.set(t,e),t}function qE(e){if(eh.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});eh.set(e,t)}let th={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return eh.get(e);if(t==="objectStoreNames")return e.objectStoreNames||W1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function XE(e){th=e(th)}function QE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(wu(this),t,...n);return W1.set(r,t.sort?t.sort():[t]),Tr(r)}:GE().includes(e)?function(...t){return e.apply(wu(this),t),Tr(U1.get(this))}:function(...t){return Tr(e.apply(wu(this),t))}}function JE(e){return typeof e=="function"?QE(e):(e instanceof IDBTransaction&&qE(e),HE(e,YE())?new Proxy(e,th):e)}function Tr(e){if(e instanceof IDBRequest)return KE(e);if(bu.has(e))return bu.get(e);const t=JE(e);return t!==e&&(bu.set(e,t),Gf.set(t,e)),t}const wu=e=>Gf.get(e);function ZE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Tr(s);return r&&s.addEventListener("upgradeneeded",c=>{r(Tr(s.result),c.oldVersion,c.newVersion,Tr(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const eT=["get","getKey","getAll","getAllKeys","count"],tT=["put","add","delete","clear"],ku=new Map;function jg(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ku.get(t))return ku.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=tT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eT.includes(n)))return;const o=async function(s,...a){const c=this.transaction(s,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return ku.set(t,o),o}XE(e=>({...e,get:(t,n,r)=>jg(t,n)||e.get(t,n,r),has:(t,n)=>!!jg(t,n)||e.has(t,n)}));/**
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
 */class nT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rT(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const nh="@firebase/app",Ig="0.13.2";/**
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
 */const qn=new V1("@firebase/app"),iT="@firebase/app-compat",oT="@firebase/analytics-compat",sT="@firebase/analytics",aT="@firebase/app-check-compat",lT="@firebase/app-check",cT="@firebase/auth",uT="@firebase/auth-compat",dT="@firebase/database",hT="@firebase/data-connect",fT="@firebase/database-compat",pT="@firebase/functions",mT="@firebase/functions-compat",gT="@firebase/installations",yT="@firebase/installations-compat",xT="@firebase/messaging",vT="@firebase/messaging-compat",bT="@firebase/performance",wT="@firebase/performance-compat",kT="@firebase/remote-config",ST="@firebase/remote-config-compat",CT="@firebase/storage",_T="@firebase/storage-compat",ET="@firebase/firestore",TT="@firebase/ai",jT="@firebase/firestore-compat",IT="firebase",PT="11.10.0";/**
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
 */const rh="[DEFAULT]",AT={[nh]:"fire-core",[iT]:"fire-core-compat",[sT]:"fire-analytics",[oT]:"fire-analytics-compat",[lT]:"fire-app-check",[aT]:"fire-app-check-compat",[cT]:"fire-auth",[uT]:"fire-auth-compat",[dT]:"fire-rtdb",[hT]:"fire-data-connect",[fT]:"fire-rtdb-compat",[pT]:"fire-fn",[mT]:"fire-fn-compat",[gT]:"fire-iid",[yT]:"fire-iid-compat",[xT]:"fire-fcm",[vT]:"fire-fcm-compat",[bT]:"fire-perf",[wT]:"fire-perf-compat",[kT]:"fire-rc",[ST]:"fire-rc-compat",[CT]:"fire-gcs",[_T]:"fire-gcs-compat",[ET]:"fire-fst",[jT]:"fire-fst-compat",[TT]:"fire-vertex","fire-js":"fire-js",[IT]:"fire-js-all"};/**
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
 */const zl=new Map,RT=new Map,ih=new Map;function Pg(e,t){try{e.container.addComponent(t)}catch(n){qn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ds(e){const t=e.name;if(ih.has(t))return qn.debug(`There were multiple attempts to register component ${t}.`),!1;ih.set(t,e);for(const n of zl.values())Pg(n,e);for(const n of RT.values())Pg(n,e);return!0}function $1(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Cn(e){return e==null?!1:e.settings!==void 0}/**
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
 */const NT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new Ks("app","Firebase",NT);/**
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
 */class DT{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
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
 */const Xs=PT;function H1(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:rh,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw jr.create("bad-app-name",{appName:String(i)});if(n||(n=F1()),!n)throw jr.create("no-options");const o=zl.get(i);if(o){if(ho(n,o.options)&&ho(r,o.config))return o;throw jr.create("duplicate-app",{appName:i})}const s=new BE(i);for(const c of ih.values())s.addComponent(c);const a=new DT(n,r,s);return zl.set(i,a),a}function MT(e=rh){const t=zl.get(e);if(!t&&e===rh&&F1())return H1();if(!t)throw jr.create("no-app",{appName:e});return t}function Zi(e,t,n){var r;let i=(r=AT[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qn.warn(a.join(" "));return}Ds(new fo(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const LT="firebase-heartbeat-database",zT=1,Ms="firebase-heartbeat-store";let Su=null;function Y1(){return Su||(Su=ZE(LT,zT,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ms)}catch(n){console.warn(n)}}}}).catch(e=>{throw jr.create("idb-open",{originalErrorMessage:e.message})})),Su}async function OT(e){try{const n=(await Y1()).transaction(Ms),r=await n.objectStore(Ms).get(G1(e));return await n.done,r}catch(t){if(t instanceof Lr)qn.warn(t.message);else{const n=jr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qn.warn(n.message)}}}async function Ag(e,t){try{const r=(await Y1()).transaction(Ms,"readwrite");await r.objectStore(Ms).put(t,G1(e)),await r.done}catch(n){if(n instanceof Lr)qn.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function G1(e){return`${e.name}!${e.options.appId}`}/**
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
 */const FT=1024,BT=30;class VT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Rg();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>BT){const s=$T(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rg(),{heartbeatsToSend:r,unsentEntries:i}=UT(this._heartbeatsCache.heartbeats),o=z1(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return qn.warn(n),""}}}function Rg(){return new Date().toISOString().substring(0,10)}function UT(e,t=FT){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Ng(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ng(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jE()?IE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ag(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ag(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ng(e){return z1(JSON.stringify({version:2,heartbeats:e})).length}function $T(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function HT(e){Ds(new fo("platform-logger",t=>new nT(t),"PRIVATE")),Ds(new fo("heartbeat",t=>new VT(t),"PRIVATE")),Zi(nh,Ig,e),Zi(nh,Ig,"esm2017"),Zi("fire-js","")}HT("");var YT="firebase",GT="11.10.0";/**
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
 */Zi(YT,GT,"app");function Kf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function K1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KT=K1,q1=new Ks("auth","Firebase",K1());/**
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
 */const Ol=new V1("@firebase/auth");function qT(e,...t){Ol.logLevel<=we.WARN&&Ol.warn(`Auth (${Xs}): ${e}`,...t)}function Ka(e,...t){Ol.logLevel<=we.ERROR&&Ol.error(`Auth (${Xs}): ${e}`,...t)}/**
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
 */function Pn(e,...t){throw Xf(e,...t)}function hn(e,...t){return Xf(e,...t)}function qf(e,t,n){const r=Object.assign(Object.assign({},KT()),{[t]:n});return new Ks("auth","Firebase",r).create(t,{appName:e.name})}function ai(e){return qf(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function XT(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Pn(e,"argument-error"),qf(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return q1.create(e,...t)}function K(e,t,...n){if(!e)throw Xf(t,...n)}function Un(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ka(t),new Error(t)}function Xn(e,t){e||Un(t)}/**
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
 */function oh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function QT(){return Dg()==="http:"||Dg()==="https:"}function Dg(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function JT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QT()||_E()||"connection"in navigator)?navigator.onLine:!0}function ZT(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Qs{constructor(t,n){this.shortDelay=t,this.longDelay=n,Xn(n>t,"Short delay should be less than long delay!"),this.isMobile=SE()||EE()}get(){return JT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qf(e,t){Xn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class X1{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ej={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tj=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nj=new Qs(3e4,6e4);function Jf(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ko(e,t,n,r,i={}){return Q1(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=qs(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:c},o);return CE()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&Sc(e.emulatorConfig.host)&&(u.credentials="include"),X1.fetch()(await J1(e,e.config.apiHost,n,a),u)})}async function Q1(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ej),t);try{const i=new ij(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw _a(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(e,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw _a(e,"email-already-in-use",s);if(c==="USER_DISABLED")throw _a(e,"user-disabled",s);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qf(e,d,u);Pn(e,d)}}catch(i){if(i instanceof Lr)throw i;Pn(e,"network-request-failed",{message:String(i)})}}async function rj(e,t,n,r,i={}){const o=await ko(e,t,n,r,i);return"mfaPendingCredential"in o&&Pn(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function J1(e,t,n,r){const i=`${t}${n}?${r}`,o=e,s=o.config.emulator?Qf(e.config,i):`${e.config.apiScheme}://${i}`;return tj.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(s).toString():s}class ij{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),nj.get())})}}function _a(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hn(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function oj(e,t){return ko(e,"POST","/v1/accounts:delete",t)}async function Fl(e,t){return ko(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ls(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function sj(e,t=!1){const n=wo(e),r=await n.getIdToken(t),i=Zf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ls(Cu(i.auth_time)),issuedAtTime:ls(Cu(i.iat)),expirationTime:ls(Cu(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Cu(e){return Number(e)*1e3}function Zf(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ka("JWT malformed, contained fewer than 3 sections"),null;try{const i=O1(n);return i?JSON.parse(i):(Ka("Failed to decode base64 JWT payload"),null)}catch(i){return Ka("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Mg(e){const t=Zf(e);return K(t,"internal-error"),K(typeof t.exp<"u","internal-error"),K(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ls(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Lr&&aj(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function aj({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class lj{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sh{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bl(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ls(e,Fl(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Z1(o.providerUserInfo):[],a=uj(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new sh(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function cj(e){const t=wo(e);await Bl(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function uj(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Z1(e){return e.map(t=>{var{providerId:n}=t,r=Kf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dj(e,t){const n=await Q1(e,{},async()=>{const r=qs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=await J1(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return e.emulatorConfig&&Sc(e.emulatorConfig.host)&&(c.credentials="include"),X1.fetch()(s,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hj(e,t){return ko(e,"POST","/v2/accounts:revokeToken",Jf(e,t))}/**
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
 */class eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){K(t.idToken,"internal-error"),K(typeof t.idToken<"u","internal-error"),K(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Mg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){K(t.length!==0,"internal-error");const n=Mg(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await dj(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new eo;return r&&(K(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(K(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new eo,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
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
 */function or(e,t){K(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class cn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Kf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lj(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new sh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,t));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return sj(this,t)}reload(){return cj(this)}_assign(t){this!==t&&(K(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new cn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(ai(this.auth));const t=await this.getIdToken();return await Ls(this,oj(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,c,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:k,isAnonymous:T,providerData:C,stsTokenManager:j}=n;K(v&&j,t,"internal-error");const E=eo.fromJSON(this.name,j);K(typeof v=="string",t,"internal-error"),or(h,t.name),or(f,t.name),K(typeof k=="boolean",t,"internal-error"),K(typeof T=="boolean",t,"internal-error"),or(p,t.name),or(g,t.name),or(y,t.name),or(w,t.name),or(m,t.name),or(x,t.name);const R=new cn({uid:v,auth:t,email:f,emailVerified:k,displayName:h,isAnonymous:T,photoURL:g,phoneNumber:p,tenantId:y,stsTokenManager:E,createdAt:m,lastLoginAt:x});return C&&Array.isArray(C)&&(R.providerData=C.map(P=>Object.assign({},P))),w&&(R._redirectEventId=w),R}static async _fromIdTokenResponse(t,n,r=!1){const i=new eo;i.updateFromServerResponse(n);const o=new cn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Bl(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Z1(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new eo;a.updateFromIdToken(r);const c=new cn({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new sh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,u),c}}/**
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
 */const Lg=new Map;function Wn(e){Xn(e instanceof Function,"Expected a class definition");let t=Lg.get(e);return t?(Xn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lg.set(e,t),t)}/**
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
 */class eb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}eb.type="NONE";const zg=eb;/**
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
 */function qa(e,t,n){return`firebase:${e}:${t}:${n}`}class to{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=qa(this.userKey,i.apiKey,o),this.fullPersistenceKey=qa("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Fl(this.auth,{idToken:t}).catch(()=>{});return n?cn._fromGetAccountInfoResponse(this.auth,n,t):null}return cn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new to(Wn(zg),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Wn(zg);const s=qa(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){let h;if(typeof d=="string"){const f=await Fl(t,{idToken:d}).catch(()=>{});if(!f)break;h=await cn._fromGetAccountInfoResponse(t,f,d)}else h=cn._fromJSON(t,d);u!==o&&(a=h),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new to(o,t,r):(o=c[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new to(o,t,r))}}/**
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
 */function Og(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ib(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(tb(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(sb(t))return"Blackberry";if(ab(t))return"Webos";if(nb(t))return"Safari";if((t.includes("chrome/")||rb(t))&&!t.includes("edge/"))return"Chrome";if(ob(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tb(e=pt()){return/firefox\//i.test(e)}function nb(e=pt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function rb(e=pt()){return/crios\//i.test(e)}function ib(e=pt()){return/iemobile/i.test(e)}function ob(e=pt()){return/android/i.test(e)}function sb(e=pt()){return/blackberry/i.test(e)}function ab(e=pt()){return/webos/i.test(e)}function ep(e=pt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function fj(e=pt()){var t;return ep(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function pj(){return TE()&&document.documentMode===10}function lb(e=pt()){return ep(e)||ob(e)||ab(e)||sb(e)||/windows phone/i.test(e)||ib(e)}/**
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
 */function cb(e,t=[]){let n;switch(e){case"Browser":n=Og(pt());break;case"Worker":n=`${Og(pt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xs}/${r}`}/**
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
 */class mj{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const c=t(o);s(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gj(e,t={}){return ko(e,"GET","/v2/passwordPolicy",Jf(e,t))}/**
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
 */const yj=6;class xj{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:yj,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(s=c.containsNumericCharacter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class vj{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fg(this),this.idTokenSubscription=new Fg(this),this.beforeStateQueue=new mj(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await to.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Fl(this,{idToken:t}),r=await cn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Cn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!s||s===a)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Bl(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ZT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Cn(this.app))return Promise.reject(ai(this));const n=t?wo(t):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&K(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(ai(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Cn(this.app)?Promise.reject(ai(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await gj(this),n=new xj(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ks("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hj(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Wn(t)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await to.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{s=!0,c()}}else{const c=t.addObserver(n);return()=>{s=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=cb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&qT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cc(e){return wo(e)}class Fg{constructor(t){this.auth=t,this.observer=null,this.addObserver=DE(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bj(e){tp=e}function wj(e){return tp.loadJS(e)}function kj(){return tp.gapiScript}function Sj(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Cj(e,t){const n=$1(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ho(o,t??{}))return i;Pn(i,"already-initialized")}return n.initialize({options:t})}function _j(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Ej(e,t,n){const r=Cc(e);K(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=ub(t),{host:s,port:a}=Tj(t),c=a===null?"":`:${a}`,u={url:`${o}//${s}${c}/`},d=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(ho(u,r.config.emulator)&&ho(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Sc(s)?(vE(`${o}//${s}${c}`),kE("Auth",!0)):jj()}function ub(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Tj(e){const t=ub(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Bg(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Bg(s)}}}function Bg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function jj(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class db{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(t){return Un("not implemented")}_linkToIdToken(t,n){return Un("not implemented")}_getReauthenticationResolver(t){return Un("not implemented")}}/**
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
 */async function no(e,t){return rj(e,"POST","/v1/accounts:signInWithIdp",Jf(e,t))}/**
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
 */const Ij="http://localhost";class Qn extends db{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Qn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Kf(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Qn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return no(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,no(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,no(t,n)}buildRequest(){const t={requestUri:Ij,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=qs(n)}return t}}/**
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
 */class np{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class So extends np{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class cs extends So{static credentialFromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;return K("providerId"in n&&"signInMethod"in n,"argument-error"),Qn._fromParams(n)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return K(t.idToken||t.accessToken,"argument-error"),Qn._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return cs.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return cs.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=t;if(!r&&!i&&!n&&!o||!a)return null;try{return new cs(a)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
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
 */class fr extends So{constructor(){super("facebook.com")}static credential(t){return Qn._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fr.credentialFromTaggedObject(t)}static credentialFromError(t){return fr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fr.credential(t.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
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
 */class zn extends So{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Qn._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return zn.credentialFromTaggedObject(t)}static credentialFromError(t){return zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
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
 */class On extends So{constructor(){super("github.com")}static credential(t){return Qn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return On.credentialFromTaggedObject(t)}static credentialFromError(t){return On.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return On.credential(t.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
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
 */class pr extends So{constructor(){super("twitter.com")}static credential(t,n){return Qn._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return pr.credentialFromTaggedObject(t)}static credentialFromError(t){return pr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
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
 */class po{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await cn._fromIdTokenResponse(t,r,i),s=Vg(r);return new po({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Vg(r);return new po({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Vg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Vl extends Lr{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vl.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Vl(t,n,r,i)}}function hb(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Vl._fromErrorAndOperation(e,o,t,r):o})}async function Pj(e,t,n=!1){const r=await Ls(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return po._forOperation(e,"link",r)}/**
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
 */async function Aj(e,t,n=!1){const{auth:r}=e;if(Cn(r.app))return Promise.reject(ai(r));const i="reauthenticate";try{const o=await Ls(e,hb(r,i,t,e),n);K(o.idToken,r,"internal-error");const s=Zf(o.idToken);K(s,r,"internal-error");const{sub:a}=s;return K(e.uid===a,r,"user-mismatch"),po._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),o}}/**
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
 */async function Rj(e,t,n=!1){if(Cn(e.app))return Promise.reject(ai(e));const r="signIn",i=await hb(e,r,t),o=await po._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function Nj(e,t,n,r){return wo(e).onIdTokenChanged(t,n,r)}function Dj(e,t,n){return wo(e).beforeAuthStateChanged(t,n)}const Ul="__sak";/**
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
 */class fb{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Mj=1e3,Lj=10;class pb extends fb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lb(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,c)=>{this.notifyListeners(s,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);pj()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Lj):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Mj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}pb.type="LOCAL";const zj=pb;/**
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
 */class mb extends fb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}mb.type="SESSION";const gb=mb;/**
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
 */function Oj(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _c{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new _c(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),c=await Oj(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
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
 */function rp(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Fj{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,c)=>{const u=rp("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(d),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function jn(){return window}function Bj(e){jn().location.href=e}/**
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
 */function yb(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function Vj(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Uj(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Wj(){return yb()?self:null}/**
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
 */const xb="firebaseLocalStorageDb",$j=1,Wl="firebaseLocalStorage",vb="fbase_key";class Js{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ec(e,t){return e.transaction([Wl],t?"readwrite":"readonly").objectStore(Wl)}function Hj(){const e=indexedDB.deleteDatabase(xb);return new Js(e).toPromise()}function ah(){const e=indexedDB.open(xb,$j);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Wl,{keyPath:vb})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Wl)?t(r):(r.close(),await Hj(),t(await ah()))})})}async function Ug(e,t,n){const r=Ec(e,!0).put({[vb]:t,value:n});return new Js(r).toPromise()}async function Yj(e,t){const n=Ec(e,!1).get(t),r=await new Js(n).toPromise();return r===void 0?null:r.value}function Wg(e,t){const n=Ec(e,!0).delete(t);return new Js(n).toPromise()}const Gj=800,Kj=3;class bb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ah(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Kj)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(Wj()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Vj(),!this.activeServiceWorker)return;this.sender=new Fj(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Uj()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ah();return await Ug(t,Ul,"1"),await Wg(t,Ul),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ug(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Yj(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wg(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ec(i,!1).getAll();return new Js(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bb.type="LOCAL";const qj=bb;new Qs(3e4,6e4);/**
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
 */function wb(e,t){return t?Wn(t):(K(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ip extends db{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return no(t,this._buildIdpRequest())}_linkToIdToken(t,n){return no(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return no(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Xj(e){return Rj(e.auth,new ip(e),e.bypassAuthState)}function Qj(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),Aj(n,new ip(e),e.bypassAuthState)}async function Jj(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),Pj(n,new ip(e),e.bypassAuthState)}/**
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
 */class kb{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Xj;case"linkViaPopup":case"linkViaRedirect":return Jj;case"reauthViaPopup":case"reauthViaRedirect":return Qj;default:Pn(this.auth,"internal-error")}}resolve(t){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zj=new Qs(2e3,1e4);async function e5(e,t,n){if(Cn(e.app))return Promise.reject(hn(e,"operation-not-supported-in-this-environment"));const r=Cc(e);XT(e,t,np);const i=wb(r,n);return new ni(r,"signInViaPopup",t,i).executeNotNull()}class ni extends kb{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ni.currentPopupAction&&ni.currentPopupAction.cancel(),ni.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return K(t,this.auth,"internal-error"),t}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const t=rp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ni.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Zj.get())};t()}}ni.currentPopupAction=null;/**
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
 */const t5="pendingRedirect",Xa=new Map;class n5 extends kb{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Xa.get(this.auth._key());if(!t){try{const r=await r5(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Xa.set(this.auth._key(),t)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r5(e,t){const n=s5(t),r=o5(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function i5(e,t){Xa.set(e._key(),t)}function o5(e){return Wn(e._redirectPersistence)}function s5(e){return qa(t5,e.config.apiKey,e.name)}async function a5(e,t,n=!1){if(Cn(e.app))return Promise.reject(ai(e));const r=Cc(e),i=wb(r,t),s=await new n5(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const l5=10*60*1e3;class c5{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!u5(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Sb(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=l5&&this.cachedEventUids.clear(),this.cachedEventUids.has($g(t))}saveEventToCache(t){this.cachedEventUids.add($g(t)),this.lastProcessedEventTime=Date.now()}}function $g(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Sb({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function u5(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sb(e);default:return!1}}/**
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
 */async function d5(e,t={}){return ko(e,"GET","/v1/projects",t)}/**
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
 */const h5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,f5=/^https?/;async function p5(e){if(e.config.emulator)return;const{authorizedDomains:t}=await d5(e);for(const n of t)try{if(m5(n))return}catch{}Pn(e,"unauthorized-domain")}function m5(e){const t=oh(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!f5.test(n))return!1;if(h5.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const g5=new Qs(3e4,6e4);function Hg(){const e=jn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function y5(e){return new Promise((t,n)=>{var r,i,o;function s(){Hg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Hg(),n(hn(e,"network-request-failed"))},timeout:g5.get()})}if(!((i=(r=jn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=jn().gapi)===null||o===void 0)&&o.load)s();else{const a=Sj("iframefcb");return jn()[a]=()=>{gapi.load?s():n(hn(e,"network-request-failed"))},wj(`${kj()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Qa=null,t})}let Qa=null;function x5(e){return Qa=Qa||y5(e),Qa}/**
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
 */const v5=new Qs(5e3,15e3),b5="__/auth/iframe",w5="emulator/auth/iframe",k5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C5(e){const t=e.config;K(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Qf(t,w5):`https://${e.config.authDomain}/${b5}`,r={apiKey:t.apiKey,appName:e.name,v:Xs},i=S5.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${qs(r).slice(1)}`}async function _5(e){const t=await x5(e),n=jn().gapi;return K(n,e,"internal-error"),t.open({where:document.body,url:C5(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:k5,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=hn(e,"network-request-failed"),a=jn().setTimeout(()=>{o(s)},v5.get());function c(){jn().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{o(s)})}))}/**
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
 */const E5={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},T5=500,j5=600,I5="_blank",P5="http://localhost";class Yg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A5(e,t,n,r=T5,i=j5){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},E5),{width:r.toString(),height:i.toString(),top:o,left:s}),u=pt().toLowerCase();n&&(a=rb(u)?I5:n),tb(u)&&(t=t||P5,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(fj(u)&&a!=="_self")return R5(t||"",a),new Yg(null);const h=window.open(t||"",a,d);K(h,e,"popup-blocked");try{h.focus()}catch{}return new Yg(h)}function R5(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const N5="__/auth/handler",D5="emulator/auth/handler",M5=encodeURIComponent("fac");async function Gg(e,t,n,r,i,o){K(e.config.authDomain,e,"auth-domain-config-required"),K(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Xs,eventId:i};if(t instanceof np){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",NE(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))s[d]=h}if(t instanceof So){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(s.scopes=d.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await e._getAppCheckToken(),u=c?`#${M5}=${encodeURIComponent(c)}`:"";return`${L5(e)}?${qs(a).slice(1)}${u}`}function L5({config:e}){return e.emulator?Qf(e,D5):`https://${e.authDomain}/${N5}`}/**
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
 */const _u="webStorageSupport";class z5{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gb,this._completeRedirectFn=a5,this._overrideRedirectResult=i5}async _openPopup(t,n,r,i){var o;Xn((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Gg(t,n,r,oh(),i);return A5(t,s,rp())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Gg(t,n,r,oh(),i);return Bj(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Xn(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await _5(t),r=new c5(t);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(_u,{type:_u},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[_u];s!==void 0&&n(!!s),Pn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p5(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return lb()||nb()||ep()}}const O5=z5;var Kg="@firebase/auth",qg="1.10.8";/**
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
 */class F5{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function B5(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function V5(e){Ds(new fo("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;K(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cb(e)},u=new vj(r,i,o,c);return _j(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ds(new fo("auth-internal",t=>{const n=Cc(t.getProvider("auth").getImmediate());return(r=>new F5(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zi(Kg,qg,B5(e)),Zi(Kg,qg,"esm2017")}/**
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
 */const U5=5*60,W5=B1("authIdTokenMaxAge")||U5;let Xg=null;const $5=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W5)return;const i=n==null?void 0:n.token;Xg!==i&&(Xg=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function H5(e=MT()){const t=$1(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Cj(e,{popupRedirectResolver:O5,persistence:[qj,zj,gb]}),r=B1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=$5(o.toString());Dj(n,s,()=>s(n.currentUser)),Nj(n,a=>s(a))}}const i=yE("auth");return i&&Ej(n,`http://${i}`),n}function Y5(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}bj({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=hn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Y5().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});V5("Browser");const Cb={apiKey:"AIzaSyCNsYDBSfYMJUxqbkC3Cb_w6CYGtW4Xf20",authDomain:"cloudvault-58446.firebaseapp.com",projectId:"cloudvault-58446",storageBucket:"cloudvault-58446.firebasestorage.app",messagingSenderId:"378535306521",appId:"1:378535306521:web:2e5fe57db925753d0f5188"},G5=["google","github","microsoft"];let Eu=null,Qg=null;function K5(){return $l()?(Eu||(Eu=H1(Cb),Qg=H5(Eu)),Qg):null}function $l(){return!0}function q5(){const e=Object.entries(Cb).filter(([,t])=>!t).map(([t])=>t);return{configured:$l(),providers:G5.map(t=>({id:t,configured:$l()})),missingEnv:e}}async function X5(e){const t=K5();if(!t)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env variables.");const r={google:new zn,github:new On,microsoft:new cs("microsoft.com")}[e];if(!r)throw new Error("Unknown provider");const i=await e5(t,r),o=await i.user.getIdToken(),s=await fetch(`${Jt}/auth/firebase`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:o,email:i.user.email,fullName:i.user.displayName,avatarUrl:i.user.photoURL,provider:e})}),a=await s.json();if(!s.ok)throw new Error(a.error||a.message||"Firebase login failed");return a.success?a.data:a}function Q5({onVerified:e,onError:t,onExpire:n,theme:r="auto",size:i="normal"}){const o=b.useRef(null),s=b.useRef(null),[a,c]=b.useState(!1),[u,d]=b.useState(!0),[h,f]=b.useState(null);b.useEffect(()=>{if(window.turnstile)c(!0),d(!1);else{const g=document.querySelector('script[data-cv-turnstile="true"]'),y=g||document.createElement("script");y.src="https://challenges.cloudflare.com/turnstile/v0/api.js",y.async=!0,y.defer=!0,y.dataset.cvTurnstile="true",y.onload=()=>{c(!0),d(!1),console.log("TURNSTILE: Script loaded")},y.onerror=()=>{f("Failed to load Turnstile"),d(!1),t==null||t("Failed to load Turnstile")},g||document.head.appendChild(y)}return()=>{if(s.current&&window.turnstile)try{window.turnstile.remove(s.current),s.current=null}catch(g){console.error("TURNSTILE: Error removing widget:",g)}}},[]),b.useEffect(()=>{if(a&&o.current&&window.turnstile&&!s.current){const g="0x4AAAAAADkh2aePP5UGcXcH",y=["localhost","127.0.0.1","::1"].includes(window.location.hostname);if((g==null?void 0:g.startsWith("1x"))&&!y){const m="Turnstile production site key is not configured";f(m),t==null||t(m),d(!1);return}console.log("TURNSTILE: Rendering widget with site key:",g);try{s.current=window.turnstile.render(o.current,{sitekey:g,theme:r,size:i,callback:m=>{console.log("TURNSTILE: Verification successful"),f(null),e==null||e(m)},"error-callback":m=>{console.error("TURNSTILE: Verification error:",m);const x="Verification failed. For local testing, use the Turnstile test site key; for production, make sure this hostname is allowed in Cloudflare.";f(x),t==null||t(x)},"expired-callback":()=>{console.log("TURNSTILE: Token expired"),f("Verification expired. Please try again."),n==null||n()}})}catch(m){console.error("TURNSTILE: Error rendering widget:",m),f("Failed to render Turnstile widget"),t==null||t("Failed to render Turnstile widget")}}},[a,r,i,e,t,n]);const p=()=>{if(s.current&&window.turnstile)try{window.turnstile.reset(s.current),f(null)}catch(g){console.error("TURNSTILE: Error resetting widget:",g)}};return b.useEffect(()=>{o.current&&(o.current.reset=p)},[]),u?l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",background:"var(--bg-secondary)",borderRadius:"var(--radius)",border:"1px solid var(--border)"},children:l.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid var(--border)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})}):h?l.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"var(--radius)",border:"1px solid var(--danger)",color:"var(--danger)",fontSize:"13px",textAlign:"center"},children:[h,l.jsx("button",{type:"button",onClick:p,style:{marginTop:"8px",padding:"6px 12px",background:"var(--danger)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px"},children:"Retry"})]}):l.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",minHeight:i==="compact"?140:70,overflow:"hidden"},children:l.jsx("div",{ref:o})})}const _i=(e="")=>{const t=e.toLowerCase();return t.includes("failed to fetch")||t.includes("cannot reach")||t.includes("networkerror")?"Unable to reach CloudVault. Please check your connection.":t.includes("firebase")||t.includes("oauth")||t.includes("access token")?"Social login failed. Please try again.":e||"Something went wrong. Please try again."},Tu=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),Jg=e=>e.length>=8&&/[A-Z]/.test(e)&&/[a-z]/.test(e)&&/\d/.test(e);function J5({size:e=20}){return l.jsx("span",{style:{display:"inline-block",width:e,height:e,border:"2.5px solid rgba(255,255,255,0.25)",borderTopColor:"#fff",borderRadius:"50%",animation:"cv-spin 0.7s linear infinite"}})}function Z5({value:e,onChange:t}){const n=[b.useRef(),b.useRef(),b.useRef(),b.useRef(),b.useRef(),b.useRef()],r=(e+"      ").slice(0,6).split(""),i=(s,a)=>{var c,u;if(a.key==="Backspace"){if(r[s]!==" "){const d=r.map((h,f)=>f===s?" ":h).join("").trimEnd();t(d)}else if(s>0){(c=n[s-1].current)==null||c.focus();const d=r.map((h,f)=>f===s-1?" ":h).join("").trimEnd();t(d)}}else if(a.key>="0"&&a.key<="9"){a.preventDefault();const d=r.map((h,f)=>f===s?a.key:h).join("").replace(/ /g,"");t(d.slice(0,6)),s<5&&((u=n[s+1].current)==null||u.focus())}},o=s=>{var c;const a=s.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);a&&(t(a),(c=n[Math.min(a.length,5)].current)==null||c.focus())};return l.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",margin:"8px 0"},children:n.map((s,a)=>{var c,u,d,h;return l.jsx("input",{ref:s,type:"text",inputMode:"numeric",maxLength:1,value:((c=r[a])==null?void 0:c.trim())||"",onKeyDown:f=>i(a,f),onPaste:o,onChange:()=>{},style:{width:52,height:60,textAlign:"center",fontSize:24,fontWeight:800,background:"var(--cv-bg-card)",border:`2px solid ${(u=r[a])!=null&&u.trim()?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:14,color:"var(--cv-text)",outline:"none",transition:"border-color 0.18s ease, transform 0.1s ease",transform:(d=r[a])!=null&&d.trim()?"scale(1.05)":"scale(1)",boxShadow:(h=r[a])!=null&&h.trim()?"0 0 0 3px rgba(99,102,241,0.15)":"none"}},a)})})}const ne={LOGIN:"login",REGISTER:"register",FORGOT:"forgot",VERIFY_OTP:"verify_otp",RESET_PASSWORD:"reset_password"};function eI({onAuth:e,onBack:t,onNeedsVerification:n,initialMode:r="login"}){const[i,o]=b.useState(r==="login"?ne.LOGIN:ne.REGISTER),[s,a]=b.useState(!1),[c,u]=b.useState(""),[d,h]=b.useState(""),[f,p]=b.useState("forward"),[g,y]=b.useState(""),[w,m]=b.useState(""),[x,v]=b.useState(""),[k,T]=b.useState(""),[C,j]=b.useState(""),[E,R]=b.useState(""),[P,N]=b.useState(!0),[D,F]=b.useState(!1),[W,U]=b.useState(!1),[Z,ie]=b.useState(0),[M,V]=b.useState(null),[S,G]=b.useState(!1),[te,_]=b.useState(0),ye="0x4AAAAAADkh2aePP5UGcXcH",Pe=typeof window<"u"&&["localhost","127.0.0.1","::1"].includes(window.location.hostname),ve=!!(!(ye==null?void 0:ye.startsWith("1x"))||Pe),Ft=$l();q5();const[jt,lt]=b.useState({});b.useEffect(()=>{if(Z<=0)return;const Y=setTimeout(()=>ie(re=>re-1),1e3);return()=>clearTimeout(Y)},[Z]);const qe=Y=>{p("forward"),u(""),h(""),lt({}),o(Y)},Xe=()=>{V(null),G(!1),_(Y=>Y+1)},wi=async()=>{var re,He;const Y={};if(Tu(g)||(Y.email="Enter a valid email address"),w||(Y.password="Password is required"),Object.keys(Y).length){lt(Y);return}if(ve&&!S){u("Please complete the security check");return}a(!0),u("");try{const A=await wt("/auth/login",{method:"POST",body:JSON.stringify({email:g,password:w,rememberMe:P,...ve&&{turnstileToken:M}})});if(!(A!=null&&A.accessToken))throw new Error("Login failed. Please try again.");const O=P?localStorage:sessionStorage;O.setItem("cv_token",A.accessToken),A.refreshToken&&O.setItem("cv_refreshToken",A.refreshToken),O.setItem("cv_user",((re=A.user)==null?void 0:re.fullName)||g),e(A.accessToken,A.refreshToken,((He=A.user)==null?void 0:He.fullName)||g,A.user,P)}catch(A){u(_i(A.message)),Xe()}a(!1)},mn=async()=>{const Y={};if((!k||k.trim().length<2)&&(Y.fullName="Full name must be at least 2 characters"),Tu(g)||(Y.email="Enter a valid email address"),Jg(w)||(Y.password="Password must be 8+ chars with uppercase, lowercase, and number"),w!==x&&(Y.confirmPassword="Passwords do not match"),Object.keys(Y).length){lt(Y);return}if(ve&&!S){u("Please complete the security check");return}a(!0),u("");try{await wt("/auth/register",{method:"POST",body:JSON.stringify({email:g,password:w,fullName:k,...ve&&{turnstileToken:M}})}),h("Account created! Check your email to verify your account, then sign in."),qe(ne.LOGIN)}catch(re){u(_i(re.message)),Xe()}a(!1)},ki=async()=>{if(!Tu(g)){lt({email:"Enter a valid email address"});return}if(ve&&!S){u("Please complete the security check");return}a(!0),u("");try{await wt("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:g,...ve&&{turnstileToken:M}})}),ie(60),qe(ne.VERIFY_OTP),h("A 6-digit OTP has been sent to your email.")}catch(Y){u(_i(Y.message)),Xe()}a(!1)},Bt=async()=>{if(C.length!==6){u("Enter the 6-digit code from your email");return}a(!0),u("");try{const Y=await wt("/auth/verify-otp",{method:"POST",body:JSON.stringify({email:g,otp:C})});R(Y.resetToken),qe(ne.RESET_PASSWORD)}catch(Y){u(_i(Y.message)),j("")}a(!1)},Fr=async()=>{const Y={};if(Jg(w)||(Y.password="Password must be 8+ chars with uppercase, lowercase, and number"),w!==x&&(Y.confirmPassword="Passwords do not match"),Object.keys(Y).length){lt(Y);return}a(!0),u("");try{await wt("/auth/reset-password",{method:"POST",body:JSON.stringify({token:E,newPassword:w})}),h("Password reset successfully! Please sign in."),m(""),v(""),qe(ne.LOGIN)}catch(re){u(_i(re.message))}a(!1)},gn=async Y=>{var re,He;if(!Ft){u("Social login is not available. Please use email and password.");return}a(!0),u("");try{const A=await X5(Y);if(!(A!=null&&A.accessToken))throw new Error("Social login failed.");localStorage.setItem("cv_token",A.accessToken),A.refreshToken&&localStorage.setItem("cv_refreshToken",A.refreshToken),localStorage.setItem("cv_user",((re=A.user)==null?void 0:re.fullName)||g),e(A.accessToken,A.refreshToken,((He=A.user)==null?void 0:He.fullName)||g,A.user,!0)}catch(A){u(_i(A.message))}a(!1)},yt={[ne.LOGIN]:{title:"Welcome back",sub:`Sign in to ${Ut.name}`},[ne.REGISTER]:{title:"Create account",sub:"Start your CloudVault journey"},[ne.FORGOT]:{title:"Forgot password?",sub:"We'll send a code to your email"},[ne.VERIFY_OTP]:{title:"Enter your code",sub:`Sent to ${g||"your email"}`},[ne.RESET_PASSWORD]:{title:"New password",sub:"Choose a strong password"}},er=!s&&(!ve||S||i===ne.VERIFY_OTP||i===ne.RESET_PASSWORD),tr=()=>{i===ne.LOGIN?wi():i===ne.REGISTER?mn():i===ne.FORGOT?ki():i===ne.VERIFY_OTP?Bt():i===ne.RESET_PASSWORD&&Fr()},nr={[ne.LOGIN]:"Sign in",[ne.REGISTER]:"Create account",[ne.FORGOT]:"Send code",[ne.VERIFY_OTP]:"Verify code",[ne.RESET_PASSWORD]:"Reset password"}[i];return l.jsxs("div",{style:{minHeight:"100vh",background:"#0d1117",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"},children:[l.jsx("style",{children:`
        :root {
          --cv-bg-card: #0d1117;
          --cv-border: #30363d;
          --cv-accent: #2f81f7;
          --cv-text: #e6edf3;
        }
        .gh-input {
          width: 100%; padding: 5px 12px; font-size: 14px; line-height: 20px;
          color: #e6edf3; vertical-align: middle; background-color: #0d1117;
          background-repeat: no-repeat; background-position: right 8px center;
          border: 1px solid #30363d; border-radius: 6px; outline: none;
          box-shadow: 0 0 transparent; transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
          transition-property: color,background-color,box-shadow,border-color;
        }
        .gh-input:focus { border-color: #2f81f7; box-shadow: inset 0 0 0 1px #2f81f7; }
        .gh-btn {
          color: #ffffff; background-color: #238636; border: 1px solid rgba(240,246,252,0.1);
          border-radius: 6px; display: inline-block; padding: 5px 16px; font-size: 14px;
          font-weight: 500; line-height: 20px; white-space: nowrap; vertical-align: middle;
          cursor: pointer; appearance: none; text-align: center;
        }
        .gh-btn:hover { background-color: #2ea043; border-color: rgba(240,246,252,0.1); }
        .gh-btn:disabled { background-color: #238636; opacity: 0.5; cursor: default; }
        .gh-label { display: block; margin-bottom: 6px; font-size: 14px; font-weight: 400; color: #e6edf3; text-align: left; }
        .gh-card {
          width: 308px; background-color: #161b22; border: 1px solid #30363d;
          border-radius: 6px; padding: 20px; margin-top: 16px;
        }
        .gh-link { color: #2f81f7; text-decoration: none; font-size: 12px; }
        .gh-link:hover { text-decoration: underline; }
      `}),l.jsx("div",{style:{textAlign:"center",marginBottom:24,cursor:"pointer"},onClick:t,children:l.jsx("img",{src:Ut.logoImage,alt:"CloudVault",style:{width:48,height:48,borderRadius:"50%",background:"#d90007",padding:8}})}),l.jsx("h1",{style:{fontSize:24,fontWeight:300,color:"#e6edf3",letterSpacing:"-0.5px",marginBottom:8},children:yt[i].title}),l.jsxs("div",{className:"gh-card",children:[c&&l.jsx("div",{style:{padding:"12px 16px",background:"rgba(248,81,73,0.1)",border:"1px solid rgba(248,81,73,0.4)",borderRadius:6,color:"#ff7b72",fontSize:13,marginBottom:16},children:c}),d&&l.jsx("div",{style:{padding:"12px 16px",background:"rgba(46,160,67,0.1)",border:"1px solid rgba(46,160,67,0.4)",borderRadius:6,color:"#3fb950",fontSize:13,marginBottom:16},children:d}),i===ne.LOGIN&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{marginBottom:16},children:[l.jsx("label",{className:"gh-label",children:"Email address"}),l.jsx("input",{type:"email",className:"gh-input",value:g,onChange:Y=>y(Y.target.value),autoFocus:!0})]}),l.jsxs("div",{style:{marginBottom:16},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:6},children:[l.jsx("label",{className:"gh-label",style:{margin:0},children:"Password"}),l.jsx("button",{type:"button",onClick:()=>qe(ne.FORGOT),style:{background:"none",border:"none",color:"#2f81f7",fontSize:12,cursor:"pointer",padding:0},children:"Forgot password?"})]}),l.jsx("input",{type:"password",className:"gh-input",value:w,onChange:Y=>m(Y.target.value)})]})]}),i===ne.REGISTER&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{marginBottom:16},children:[l.jsx("label",{className:"gh-label",children:"Email address"}),l.jsx("input",{type:"email",className:"gh-input",value:g,onChange:Y=>y(Y.target.value),autoFocus:!0})]}),l.jsxs("div",{style:{marginBottom:16},children:[l.jsx("label",{className:"gh-label",children:"Password"}),l.jsx("input",{type:"password",className:"gh-input",value:w,onChange:Y=>m(Y.target.value)})]}),l.jsxs("div",{style:{marginBottom:16},children:[l.jsx("label",{className:"gh-label",children:"Confirm password"}),l.jsx("input",{type:"password",className:"gh-input",value:x,onChange:Y=>v(Y.target.value)})]})]}),i===ne.FORGOT&&l.jsx(l.Fragment,{children:l.jsxs("div",{style:{marginBottom:16},children:[l.jsx("label",{className:"gh-label",children:"Email address"}),l.jsx("input",{type:"email",className:"gh-input",value:g,onChange:Y=>y(Y.target.value),autoFocus:!0})]})}),i===ne.VERIFY_OTP&&l.jsx(l.Fragment,{children:l.jsxs("div",{style:{marginBottom:16},children:[l.jsx("label",{className:"gh-label",children:"Verification code"}),l.jsx(Z5,{value:C,onChange:j})]})}),i===ne.RESET_PASSWORD&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{marginBottom:16},children:[l.jsx("label",{className:"gh-label",children:"New password"}),l.jsx("input",{type:"password",className:"gh-input",value:w,onChange:Y=>m(Y.target.value),autoFocus:!0})]}),l.jsxs("div",{style:{marginBottom:16},children:[l.jsx("label",{className:"gh-label",children:"Confirm new password"}),l.jsx("input",{type:"password",className:"gh-input",value:x,onChange:Y=>v(Y.target.value)})]})]}),ve&&[ne.LOGIN,ne.REGISTER,ne.FORGOT].includes(i)&&l.jsx("div",{style:{marginTop:16,marginBottom:16},children:l.jsx(Q5,{onVerified:Y=>{V(Y),G(!0)},onError:Y=>{u(Y||"Security check failed. Please refresh."),G(!1)},onExpire:()=>{V(null),G(!1)}},te)}),l.jsx("button",{type:"button",onClick:tr,disabled:!er||s,className:"gh-btn",style:{width:"100%",marginTop:8},children:s?l.jsx(J5,{}):nr}),[ne.LOGIN,ne.REGISTER].includes(i)&&l.jsxs("div",{style:{marginTop:16,paddingTop:16,borderTop:"1px solid #30363d",textAlign:"center"},children:[l.jsx("button",{type:"button",onClick:()=>gn("google"),className:"gh-btn",style:{background:"transparent",color:"#c9d1d9",borderColor:"#30363d",width:"100%",marginBottom:8},children:"Sign in with Google"}),l.jsx("button",{type:"button",onClick:()=>gn("github"),className:"gh-btn",style:{background:"transparent",color:"#c9d1d9",borderColor:"#30363d",width:"100%"},children:"Sign in with GitHub"})]})]}),l.jsxs("div",{style:{width:308,marginTop:16,padding:"16px 20px",border:"1px solid #30363d",borderRadius:6,textAlign:"center",fontSize:14,color:"#e6edf3"},children:[i===ne.LOGIN&&l.jsxs(l.Fragment,{children:["New to CloudVault? ",l.jsx("button",{onClick:()=>qe(ne.REGISTER),style:{background:"none",border:"none",color:"#2f81f7",cursor:"pointer",padding:0,fontSize:14},children:"Create an account"}),"."]}),i===ne.REGISTER&&l.jsxs(l.Fragment,{children:["Already have an account? ",l.jsx("button",{onClick:()=>qe(ne.LOGIN),style:{background:"none",border:"none",color:"#2f81f7",cursor:"pointer",padding:0,fontSize:14},children:"Sign in"}),"."]}),(i===ne.FORGOT||i===ne.VERIFY_OTP||i===ne.RESET_PASSWORD)&&l.jsx("button",{onClick:()=>qe(ne.LOGIN),style:{background:"none",border:"none",color:"#2f81f7",cursor:"pointer",padding:0,fontSize:14},children:"Return to sign in"})]})]})}function tI({file:e,token:t}){const[n,r]=b.useState([]),[i,o]=b.useState(!0),[s,a]=b.useState(""),[c,u]=b.useState(!1),[d,h]=b.useState(""),f=async()=>{try{const y=await wt(`/comments/${e.id}`,{},t);r(y.data||[])}catch{h("Failed to load comments")}finally{o(!1)}};b.useEffect(()=>{f()},[e.id]);const p=async y=>{if(y.preventDefault(),!!s.trim()){u(!0);try{const w=await wt(`/comments/${e.id}`,{method:"POST",body:JSON.stringify({content:s})},t);r([w.data,...n]),a("")}catch{h("Failed to post comment")}finally{u(!1)}}},g=async y=>{if(window.confirm("Delete this comment?"))try{await wt(`/comments/${y}`,{method:"DELETE"},t),r(n.filter(w=>w.id!==y))}catch{alert("Failed to delete comment")}};return localStorage.getItem("cv_userId")||sessionStorage.getItem("cv_userId"),l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",width:320,borderLeft:"1px solid var(--border)",background:"var(--bg-card)"},children:[l.jsx("div",{style:{padding:"16px",borderBottom:"1px solid var(--border)"},children:l.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:700},children:"Comments"})}),l.jsx("div",{style:{flex:1,overflowY:"auto",padding:"16px"},children:i?l.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading comments..."}):n.length===0?l.jsx("p",{style:{color:"var(--text-muted)",textAlign:"center",marginTop:20},children:"No comments yet. Be the first to start the discussion!"}):l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:n.map(y=>{var w,m,x,v,k,T,C;return l.jsxs("div",{style:{display:"flex",gap:12},children:[l.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"var(--accent)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:"bold"},children:((m=(w=y.user)==null?void 0:w.fullName)==null?void 0:m[0])||((k=(v=(x=y.user)==null?void 0:x.email)==null?void 0:v[0])==null?void 0:k.toUpperCase())||"?"}),l.jsxs("div",{style:{flex:1},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[l.jsx("span",{style:{fontWeight:600,fontSize:13},children:((T=y.user)==null?void 0:T.fullName)||((C=y.user)==null?void 0:C.email.split("@")[0])}),l.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:bo(y.createdAt)})]}),l.jsx("p",{style:{fontSize:13,marginTop:4,marginBottom:4,lineHeight:1.4,wordBreak:"break-word"},children:y.content}),l.jsx("button",{onClick:()=>g(y.id),style:{background:"none",border:"none",color:"var(--danger)",fontSize:11,cursor:"pointer",padding:0,opacity:.7},children:"Delete"})]})]},y.id)})})}),l.jsxs("div",{style:{padding:"16px",borderTop:"1px solid var(--border)"},children:[d&&l.jsx("p",{style:{color:"var(--danger)",fontSize:12,marginBottom:8},children:d}),l.jsxs("form",{onSubmit:p,style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx("textarea",{value:s,onChange:y=>a(y.target.value),placeholder:"Add a comment...",style:{width:"100%",minHeight:80,padding:12,borderRadius:8,background:"var(--bg-primary)",border:"1px solid var(--border)",color:"var(--text)",resize:"none",fontFamily:"var(--font)"}}),l.jsx("button",{type:"submit",disabled:c||!s.trim(),className:"btn-primary",style:{padding:"8px 16px",alignSelf:"flex-end",opacity:c||!s.trim()?.5:1},children:c?"Posting...":"Post"})]})]})]})}function nI({size:e=22}){return l.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function _b({file:e,token:t,onClose:n,customFetchBlob:r}){const[i,o]=b.useState(null),[s,a]=b.useState(""),[c,u]=b.useState(!0),[d,h]=b.useState(""),[f,p]=b.useState(1),[g,y]=b.useState(0),[w,m]=b.useState(!1),[x,v]=b.useState(!1),k=I_(e.mimeType);b.useEffect(()=>{let j=null,E=!1;return(async()=>{u(!0),h("");try{const R=r?await r():await kc(e.id,t,{disposition:"preview"});if(E)return;if(k==="text"){const P=await R.text();a(P)}else j=URL.createObjectURL(R),o(j)}catch(R){E||h(R.message||"Preview failed")}finally{E||u(!1)}})(),()=>{E=!0,j&&URL.revokeObjectURL(j)}},[e.id,t,k]);const T=(j,E,R=!1)=>l.jsx("button",{type:"button",onClick:E,disabled:R,style:{padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",cursor:R?"not-allowed":"pointer",fontFamily:"var(--font)",fontSize:12,fontWeight:600},children:j}),C=()=>c?l.jsx("div",{style:{padding:48,textAlign:"center"},children:l.jsx(nI,{size:32})}):d?l.jsx("p",{style:{color:"var(--danger)",padding:24,textAlign:"center"},children:d}):k==="image"&&i?l.jsx("img",{src:i,alt:e.name,style:{maxWidth:w?"96vw":"80vw",maxHeight:w?"90vh":"70vh",borderRadius:12,transform:`scale(${f}) rotate(${g}deg)`,transition:"transform .2s ease"}}):k==="pdf"&&i?l.jsx("iframe",{src:i,title:e.name,style:{width:"75vw",height:"75vh",border:"none",borderRadius:12}}):k==="video"&&i?l.jsx("video",{src:i,controls:!0,style:{maxWidth:"80vw",maxHeight:"75vh",borderRadius:12}}):k==="audio"&&i?l.jsx("audio",{src:i,controls:!0,style:{width:"min(480px, 80vw)"}}):k==="text"?l.jsx("pre",{style:{maxWidth:"80vw",maxHeight:"70vh",overflow:"auto",padding:16,background:"var(--bg-card)",borderRadius:12,color:"var(--text)",fontSize:13,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:s}):l.jsx("p",{style:{padding:24,color:"var(--text-muted)"},children:"Preview not available for this file type."});return l.jsx("div",{onClick:n,style:{position:"fixed",inset:0,zIndex:1e3,background:w?"#000":"rgba(0,0,0,.88)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)",animation:"fadeIn .2s ease"},children:l.jsxs("div",{onClick:j=>j.stopPropagation(),style:{background:w?"transparent":"var(--bg-primary)",borderRadius:w?0:20,border:w?"none":"1.5px solid var(--border)",maxWidth:w?"100vw":"95vw",maxHeight:w?"100vh":"95vh",width:w?"100%":void 0,height:w?"100%":void 0,overflow:"auto",padding:w?16:24,boxShadow:w?"none":"var(--shadow)",display:"flex",flexDirection:"row"},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",padding:w?16:24,overflow:"hidden"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:12},children:[l.jsx("div",{style:{color:"var(--text)",fontWeight:700,fontSize:16,flex:1,overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),k==="image"&&l.jsxs("div",{style:{display:"flex",gap:6},children:[T("−",()=>p(j=>Math.max(.25,j-.25))),T("+",()=>p(j=>Math.min(4,j+.25))),T("↻",()=>y(j=>(j+90)%360)),T(w?"⊡":"⛶",()=>m(j=>!j))]}),T("💬 Comments",()=>v(j=>!j)),l.jsx("button",{type:"button",onClick:n,style:{background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:8,color:"var(--text-secondary)",cursor:"pointer",width:32,height:32},children:"✕"})]}),l.jsx("div",{style:{display:"flex",justifyContent:"center",flex:1,overflow:"auto"},children:C()})]}),x&&!w&&l.jsx(tI,{file:e,token:t})]})})}function rI({fileId:e,token:t,alt:n,mimeType:r}){const[i,o]=b.useState(null),[s,a]=b.useState(!1);return b.useEffect(()=>{if(!e||!t||!(r!=null&&r.startsWith("image/")))return;let c=null,u=!1;return kc(e,t,{disposition:"preview"}).then(d=>{u||(c=URL.createObjectURL(d),o(c))}).catch(()=>{u||a(!0)}),()=>{u=!0,c&&URL.revokeObjectURL(c)}},[e,t,r]),!(r!=null&&r.startsWith("image/"))||s?l.jsx("div",{style:{fontSize:44,display:"flex"},children:Gs(r)}):i?l.jsx("img",{src:i,alt:n,style:{width:"100%",height:"100%",objectFit:"cover"},onError:()=>a(!0)}):l.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite"}})}function iI({trashedFiles:e,trashedFolders:t,loading:n,onRestoreFile:r,onRestoreFolder:i,onPermanentDelete:o,onEmptyTrash:s,onBack:a}){return l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[l.jsxs("div",{children:[l.jsx("button",{type:"button",onClick:a,style:oI,children:"← Back to My Cloud"}),l.jsx("h2",{style:{color:"var(--text)",fontWeight:800,fontSize:22,marginTop:8},children:"Trash"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"Items in trash still count toward storage until permanently deleted."})]}),(e.length>0||t.length>0)&&l.jsx("button",{type:"button",onClick:s,style:sI,children:"Empty trash"})]}),n?l.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading trash…"}):e.length===0&&t.length===0?l.jsxs("div",{style:{textAlign:"center",padding:64,color:"var(--text-muted)",border:"1px dashed var(--border)",borderRadius:16},children:[l.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🗑️"}),l.jsx("div",{style:{fontWeight:700},children:"Trash is empty"})]}):l.jsxs(l.Fragment,{children:[t.length>0&&l.jsxs("section",{style:{marginBottom:24},children:[l.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FOLDERS"}),t.map(c=>l.jsx(Zg,{icon:"📁",name:c.name,meta:"Folder",onRestore:()=>i(c.id)},c.id))]}),e.length>0&&l.jsxs("section",{children:[l.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FILES"}),e.map(c=>l.jsx(Zg,{icon:Gs(c.mimeType),name:c.name,meta:`${Ge(c.size)} · ${bo(c.trashedAt||c.deletedAt)}`,onRestore:()=>r(c.id),onDelete:()=>o(c)},c.id))]})]})]})}function Zg({icon:e,name:t,meta:n,onRestore:r,onDelete:i}){return l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,marginBottom:8},children:[l.jsx("span",{style:{fontSize:24},children:e}),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t}),l.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:n})]}),l.jsx("button",{type:"button",onClick:r,style:ey,children:"Restore"}),i&&l.jsx("button",{type:"button",onClick:i,style:{...ey,color:"var(--danger)"},children:"Delete forever"})]})}const oI={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"},sI={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontFamily:"var(--font)"},ey={padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--font)"};function aI({value:e,onChange:t,folders:n,disabledId:r}){const[i,o]=b.useState(!1),s=n.find(c=>c.id===e),a=s?"—".repeat(s.depth)+" "+s.name:"My Cloud (root)";return l.jsxs("div",{style:{position:"relative",marginTop:6,marginBottom:16},children:[l.jsxs("button",{type:"button",onClick:()=>o(!i),style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)",fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",textAlign:"left"},children:[l.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a}),l.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{flexShrink:0,transform:i?"rotate(180deg)":"none",transition:"0.2s",opacity:.5},children:l.jsx("path",{d:"M6 9l6 6 6-6"})})]}),i&&l.jsxs(l.Fragment,{children:[l.jsx("div",{onClick:()=>o(!1),style:{position:"fixed",inset:0,zIndex:90}}),l.jsxs("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,maxHeight:220,overflowY:"auto",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"0 12px 40px rgba(0,0,0,0.35)",zIndex:91,animation:"fadeIn 0.15s ease"},children:[l.jsxs("button",{onClick:()=>{t(""),o(!1)},style:{display:"block",width:"100%",padding:"10px 14px",border:"none",background:e===""?"rgba(59,130,246,0.12)":"transparent",color:"var(--text)",fontFamily:"var(--font)",fontSize:13,fontWeight:e===""?600:500,cursor:"pointer",textAlign:"left"},children:["📁 My Cloud (root)",e===""&&l.jsx("span",{style:{marginLeft:8,color:"var(--accent-blue)"},children:"✓"})]}),n.map(c=>l.jsxs("button",{disabled:c.id===r,onClick:()=>{t(c.id),o(!1)},style:{display:"block",width:"100%",padding:"10px 14px",paddingLeft:14+c.depth*16,border:"none",background:c.id===e?"rgba(59,130,246,0.12)":"transparent",color:c.id===r?"var(--text-muted)":"var(--text)",fontFamily:"var(--font)",fontSize:13,fontWeight:c.id===e?600:500,cursor:c.id===r?"not-allowed":"pointer",textAlign:"left",opacity:c.id===r?.4:1},children:["📁 ","—".repeat(c.depth)," ",c.name,c.id===e&&l.jsx("span",{style:{marginLeft:8,color:"var(--accent-blue)"},children:"✓"})]},c.id))]})]})]})}function lI({file:e,mode:t,folders:n,currentFolderId:r,onConfirm:i,onCancel:o}){const[s,a]=b.useState(r||""),[c,u]=b.useState(e.name),d=Eb(n);return l.jsx("div",{onClick:o,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:l.jsxs("div",{onClick:h=>h.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(420px, 92vw)",animation:"scaleIn .2s ease"},children:[l.jsxs("h3",{style:{color:"var(--text)",fontWeight:700,fontSize:18,marginBottom:8},children:[t==="move"?"Move":"Copy"," file"]}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:20},children:e.name}),l.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"Destination folder"}),l.jsx(aI,{value:s,onChange:a,folders:d,disabledId:e.folderId}),t==="copy"&&l.jsxs(l.Fragment,{children:[l.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"New name (optional)"}),l.jsx("input",{value:c,onChange:h=>u(h.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"}})]}),l.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[l.jsx("button",{type:"button",onClick:o,style:Tb,children:"Cancel"}),l.jsx("button",{type:"button",onClick:()=>i({targetFolderId:s||null,newName:t==="copy"?c:void 0}),style:cI,children:t==="move"?"Move":"Copy"})]})]})})}function Eb(e,t=0){var r;const n=[];for(const i of e)n.push({...i,depth:t}),(r=i.children)!=null&&r.length&&n.push(...Eb(i.children,t+1));return n}const Tb={padding:"10px 20px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},cI={...Tb,border:"none",background:"var(--accent)",color:"#fff"};function uI({file:e,allTags:t,onSave:n,onCancel:r}){const[i,o]=b.useState(e.tags||[]),[s,a]=b.useState(""),c=u=>{const d=u.trim().toLowerCase();!d||i.includes(d)||i.length>=20||(o([...i,d]),a(""))};return l.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:l.jsxs("div",{onClick:u=>u.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(440px, 92vw)"},children:[l.jsx("h3",{style:{color:"var(--text)",fontWeight:700,marginBottom:4},children:"Edit tags"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:16},children:e.name}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12},children:i.map(u=>l.jsxs("span",{style:{background:"rgba(240,22,58,.15)",color:"var(--accent)",padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[u,l.jsx("button",{type:"button",onClick:()=>o(i.filter(d=>d!==u)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:"×"})]},u))}),l.jsx("input",{value:s,onChange:u=>a(u.target.value),onKeyDown:u=>{u.key==="Enter"&&(u.preventDefault(),c(s))},placeholder:"Add tag and press Enter",style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",marginBottom:12}}),t.length>0&&l.jsxs("div",{style:{marginBottom:16},children:[l.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6},children:"Suggestions"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:t.filter(u=>!i.includes(u)).slice(0,12).map(u=>l.jsxs("button",{type:"button",onClick:()=>c(u),style:{padding:"4px 10px",borderRadius:20,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",fontSize:12,cursor:"pointer"},children:["+ ",u]},u))})]}),l.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[l.jsx("button",{type:"button",onClick:r,style:jb,children:"Cancel"}),l.jsx("button",{type:"button",onClick:()=>n(i),style:dI,children:"Save tags"})]})]})})}const jb={padding:"10px 18px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},dI={...jb,border:"none",background:"var(--accent)",color:"#fff"};var hI=Object.defineProperty,Hl=Object.getOwnPropertySymbols,Ib=Object.prototype.hasOwnProperty,Pb=Object.prototype.propertyIsEnumerable,ty=(e,t,n)=>t in e?hI(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lh=(e,t)=>{for(var n in t||(t={}))Ib.call(t,n)&&ty(e,n,t[n]);if(Hl)for(var n of Hl(t))Pb.call(t,n)&&ty(e,n,t[n]);return e},ch=(e,t)=>{var n={};for(var r in e)Ib.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Hl)for(var r of Hl(e))t.indexOf(r)<0&&Pb.call(e,r)&&(n[r]=e[r]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var gi;(e=>{const t=class se{constructor(c,u,d,h){if(this.version=c,this.errorCorrectionLevel=u,this.modules=[],this.isFunction=[],c<se.MIN_VERSION||c>se.MAX_VERSION)throw new RangeError("Version value out of range");if(h<-1||h>7)throw new RangeError("Mask value out of range");this.size=c*4+17;let f=[];for(let g=0;g<this.size;g++)f.push(!1);for(let g=0;g<this.size;g++)this.modules.push(f.slice()),this.isFunction.push(f.slice());this.drawFunctionPatterns();const p=this.addEccAndInterleave(d);if(this.drawCodewords(p),h==-1){let g=1e9;for(let y=0;y<8;y++){this.applyMask(y),this.drawFormatBits(y);const w=this.getPenaltyScore();w<g&&(h=y,g=w),this.applyMask(y)}}i(0<=h&&h<=7),this.mask=h,this.applyMask(h),this.drawFormatBits(h),this.isFunction=[]}static encodeText(c,u){const d=e.QrSegment.makeSegments(c);return se.encodeSegments(d,u)}static encodeBinary(c,u){const d=e.QrSegment.makeBytes(c);return se.encodeSegments([d],u)}static encodeSegments(c,u,d=1,h=40,f=-1,p=!0){if(!(se.MIN_VERSION<=d&&d<=h&&h<=se.MAX_VERSION)||f<-1||f>7)throw new RangeError("Invalid value");let g,y;for(g=d;;g++){const v=se.getNumDataCodewords(g,u)*8,k=s.getTotalBits(c,g);if(k<=v){y=k;break}if(g>=h)throw new RangeError("Data too long")}for(const v of[se.Ecc.MEDIUM,se.Ecc.QUARTILE,se.Ecc.HIGH])p&&y<=se.getNumDataCodewords(g,v)*8&&(u=v);let w=[];for(const v of c){n(v.mode.modeBits,4,w),n(v.numChars,v.mode.numCharCountBits(g),w);for(const k of v.getData())w.push(k)}i(w.length==y);const m=se.getNumDataCodewords(g,u)*8;i(w.length<=m),n(0,Math.min(4,m-w.length),w),n(0,(8-w.length%8)%8,w),i(w.length%8==0);for(let v=236;w.length<m;v^=253)n(v,8,w);let x=[];for(;x.length*8<w.length;)x.push(0);return w.forEach((v,k)=>x[k>>>3]|=v<<7-(k&7)),new se(g,u,x,f)}getModule(c,u){return 0<=c&&c<this.size&&0<=u&&u<this.size&&this.modules[u][c]}getModules(){return this.modules}drawFunctionPatterns(){for(let d=0;d<this.size;d++)this.setFunctionModule(6,d,d%2==0),this.setFunctionModule(d,6,d%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const c=this.getAlignmentPatternPositions(),u=c.length;for(let d=0;d<u;d++)for(let h=0;h<u;h++)d==0&&h==0||d==0&&h==u-1||d==u-1&&h==0||this.drawAlignmentPattern(c[d],c[h]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(c){const u=this.errorCorrectionLevel.formatBits<<3|c;let d=u;for(let f=0;f<10;f++)d=d<<1^(d>>>9)*1335;const h=(u<<10|d)^21522;i(h>>>15==0);for(let f=0;f<=5;f++)this.setFunctionModule(8,f,r(h,f));this.setFunctionModule(8,7,r(h,6)),this.setFunctionModule(8,8,r(h,7)),this.setFunctionModule(7,8,r(h,8));for(let f=9;f<15;f++)this.setFunctionModule(14-f,8,r(h,f));for(let f=0;f<8;f++)this.setFunctionModule(this.size-1-f,8,r(h,f));for(let f=8;f<15;f++)this.setFunctionModule(8,this.size-15+f,r(h,f));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let c=this.version;for(let d=0;d<12;d++)c=c<<1^(c>>>11)*7973;const u=this.version<<12|c;i(u>>>18==0);for(let d=0;d<18;d++){const h=r(u,d),f=this.size-11+d%3,p=Math.floor(d/3);this.setFunctionModule(f,p,h),this.setFunctionModule(p,f,h)}}drawFinderPattern(c,u){for(let d=-4;d<=4;d++)for(let h=-4;h<=4;h++){const f=Math.max(Math.abs(h),Math.abs(d)),p=c+h,g=u+d;0<=p&&p<this.size&&0<=g&&g<this.size&&this.setFunctionModule(p,g,f!=2&&f!=4)}}drawAlignmentPattern(c,u){for(let d=-2;d<=2;d++)for(let h=-2;h<=2;h++)this.setFunctionModule(c+h,u+d,Math.max(Math.abs(h),Math.abs(d))!=1)}setFunctionModule(c,u,d){this.modules[u][c]=d,this.isFunction[u][c]=!0}addEccAndInterleave(c){const u=this.version,d=this.errorCorrectionLevel;if(c.length!=se.getNumDataCodewords(u,d))throw new RangeError("Invalid argument");const h=se.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][u],f=se.ECC_CODEWORDS_PER_BLOCK[d.ordinal][u],p=Math.floor(se.getNumRawDataModules(u)/8),g=h-p%h,y=Math.floor(p/h);let w=[];const m=se.reedSolomonComputeDivisor(f);for(let v=0,k=0;v<h;v++){let T=c.slice(k,k+y-f+(v<g?0:1));k+=T.length;const C=se.reedSolomonComputeRemainder(T,m);v<g&&T.push(0),w.push(T.concat(C))}let x=[];for(let v=0;v<w[0].length;v++)w.forEach((k,T)=>{(v!=y-f||T>=g)&&x.push(k[v])});return i(x.length==p),x}drawCodewords(c){if(c.length!=Math.floor(se.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let u=0;for(let d=this.size-1;d>=1;d-=2){d==6&&(d=5);for(let h=0;h<this.size;h++)for(let f=0;f<2;f++){const p=d-f,y=(d+1&2)==0?this.size-1-h:h;!this.isFunction[y][p]&&u<c.length*8&&(this.modules[y][p]=r(c[u>>>3],7-(u&7)),u++)}}i(u==c.length*8)}applyMask(c){if(c<0||c>7)throw new RangeError("Mask value out of range");for(let u=0;u<this.size;u++)for(let d=0;d<this.size;d++){let h;switch(c){case 0:h=(d+u)%2==0;break;case 1:h=u%2==0;break;case 2:h=d%3==0;break;case 3:h=(d+u)%3==0;break;case 4:h=(Math.floor(d/3)+Math.floor(u/2))%2==0;break;case 5:h=d*u%2+d*u%3==0;break;case 6:h=(d*u%2+d*u%3)%2==0;break;case 7:h=((d+u)%2+d*u%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[u][d]&&h&&(this.modules[u][d]=!this.modules[u][d])}}getPenaltyScore(){let c=0;for(let f=0;f<this.size;f++){let p=!1,g=0,y=[0,0,0,0,0,0,0];for(let w=0;w<this.size;w++)this.modules[f][w]==p?(g++,g==5?c+=se.PENALTY_N1:g>5&&c++):(this.finderPenaltyAddHistory(g,y),p||(c+=this.finderPenaltyCountPatterns(y)*se.PENALTY_N3),p=this.modules[f][w],g=1);c+=this.finderPenaltyTerminateAndCount(p,g,y)*se.PENALTY_N3}for(let f=0;f<this.size;f++){let p=!1,g=0,y=[0,0,0,0,0,0,0];for(let w=0;w<this.size;w++)this.modules[w][f]==p?(g++,g==5?c+=se.PENALTY_N1:g>5&&c++):(this.finderPenaltyAddHistory(g,y),p||(c+=this.finderPenaltyCountPatterns(y)*se.PENALTY_N3),p=this.modules[w][f],g=1);c+=this.finderPenaltyTerminateAndCount(p,g,y)*se.PENALTY_N3}for(let f=0;f<this.size-1;f++)for(let p=0;p<this.size-1;p++){const g=this.modules[f][p];g==this.modules[f][p+1]&&g==this.modules[f+1][p]&&g==this.modules[f+1][p+1]&&(c+=se.PENALTY_N2)}let u=0;for(const f of this.modules)u=f.reduce((p,g)=>p+(g?1:0),u);const d=this.size*this.size,h=Math.ceil(Math.abs(u*20-d*10)/d)-1;return i(0<=h&&h<=9),c+=h*se.PENALTY_N4,i(0<=c&&c<=2568888),c}getAlignmentPatternPositions(){if(this.version==1)return[];{const c=Math.floor(this.version/7)+2,u=this.version==32?26:Math.ceil((this.version*4+4)/(c*2-2))*2;let d=[6];for(let h=this.size-7;d.length<c;h-=u)d.splice(1,0,h);return d}}static getNumRawDataModules(c){if(c<se.MIN_VERSION||c>se.MAX_VERSION)throw new RangeError("Version number out of range");let u=(16*c+128)*c+64;if(c>=2){const d=Math.floor(c/7)+2;u-=(25*d-10)*d-55,c>=7&&(u-=36)}return i(208<=u&&u<=29648),u}static getNumDataCodewords(c,u){return Math.floor(se.getNumRawDataModules(c)/8)-se.ECC_CODEWORDS_PER_BLOCK[u.ordinal][c]*se.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][c]}static reedSolomonComputeDivisor(c){if(c<1||c>255)throw new RangeError("Degree out of range");let u=[];for(let h=0;h<c-1;h++)u.push(0);u.push(1);let d=1;for(let h=0;h<c;h++){for(let f=0;f<u.length;f++)u[f]=se.reedSolomonMultiply(u[f],d),f+1<u.length&&(u[f]^=u[f+1]);d=se.reedSolomonMultiply(d,2)}return u}static reedSolomonComputeRemainder(c,u){let d=u.map(h=>0);for(const h of c){const f=h^d.shift();d.push(0),u.forEach((p,g)=>d[g]^=se.reedSolomonMultiply(p,f))}return d}static reedSolomonMultiply(c,u){if(c>>>8||u>>>8)throw new RangeError("Byte out of range");let d=0;for(let h=7;h>=0;h--)d=d<<1^(d>>>7)*285,d^=(u>>>h&1)*c;return i(d>>>8==0),d}finderPenaltyCountPatterns(c){const u=c[1];i(u<=this.size*3);const d=u>0&&c[2]==u&&c[3]==u*3&&c[4]==u&&c[5]==u;return(d&&c[0]>=u*4&&c[6]>=u?1:0)+(d&&c[6]>=u*4&&c[0]>=u?1:0)}finderPenaltyTerminateAndCount(c,u,d){return c&&(this.finderPenaltyAddHistory(u,d),u=0),u+=this.size,this.finderPenaltyAddHistory(u,d),this.finderPenaltyCountPatterns(d)}finderPenaltyAddHistory(c,u){u[0]==0&&(c+=this.size),u.pop(),u.unshift(c)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;function n(a,c,u){if(c<0||c>31||a>>>c)throw new RangeError("Value out of range");for(let d=c-1;d>=0;d--)u.push(a>>>d&1)}function r(a,c){return(a>>>c&1)!=0}function i(a){if(!a)throw new Error("Assertion error")}const o=class De{constructor(c,u,d){if(this.mode=c,this.numChars=u,this.bitData=d,u<0)throw new RangeError("Invalid argument");this.bitData=d.slice()}static makeBytes(c){let u=[];for(const d of c)n(d,8,u);return new De(De.Mode.BYTE,c.length,u)}static makeNumeric(c){if(!De.isNumeric(c))throw new RangeError("String contains non-numeric characters");let u=[];for(let d=0;d<c.length;){const h=Math.min(c.length-d,3);n(parseInt(c.substring(d,d+h),10),h*3+1,u),d+=h}return new De(De.Mode.NUMERIC,c.length,u)}static makeAlphanumeric(c){if(!De.isAlphanumeric(c))throw new RangeError("String contains unencodable characters in alphanumeric mode");let u=[],d;for(d=0;d+2<=c.length;d+=2){let h=De.ALPHANUMERIC_CHARSET.indexOf(c.charAt(d))*45;h+=De.ALPHANUMERIC_CHARSET.indexOf(c.charAt(d+1)),n(h,11,u)}return d<c.length&&n(De.ALPHANUMERIC_CHARSET.indexOf(c.charAt(d)),6,u),new De(De.Mode.ALPHANUMERIC,c.length,u)}static makeSegments(c){return c==""?[]:De.isNumeric(c)?[De.makeNumeric(c)]:De.isAlphanumeric(c)?[De.makeAlphanumeric(c)]:[De.makeBytes(De.toUtf8ByteArray(c))]}static makeEci(c){let u=[];if(c<0)throw new RangeError("ECI assignment value out of range");if(c<128)n(c,8,u);else if(c<16384)n(2,2,u),n(c,14,u);else if(c<1e6)n(6,3,u),n(c,21,u);else throw new RangeError("ECI assignment value out of range");return new De(De.Mode.ECI,0,u)}static isNumeric(c){return De.NUMERIC_REGEX.test(c)}static isAlphanumeric(c){return De.ALPHANUMERIC_REGEX.test(c)}getData(){return this.bitData.slice()}static getTotalBits(c,u){let d=0;for(const h of c){const f=h.mode.numCharCountBits(u);if(h.numChars>=1<<f)return 1/0;d+=4+f+h.bitData.length}return d}static toUtf8ByteArray(c){c=encodeURI(c);let u=[];for(let d=0;d<c.length;d++)c.charAt(d)!="%"?u.push(c.charCodeAt(d)):(u.push(parseInt(c.substring(d+1,d+3),16)),d+=2);return u}};o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let s=o;e.QrSegment=o})(gi||(gi={}));(e=>{(t=>{const n=class{constructor(i,o){this.ordinal=i,this.formatBits=o}};n.LOW=new n(0,1),n.MEDIUM=new n(1,0),n.QUARTILE=new n(2,3),n.HIGH=new n(3,2),t.Ecc=n})(e.QrCode||(e.QrCode={}))})(gi||(gi={}));(e=>{(t=>{const n=class{constructor(i,o){this.modeBits=i,this.numBitsCharCount=o}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};n.NUMERIC=new n(1,[10,12,14]),n.ALPHANUMERIC=new n(2,[9,11,13]),n.BYTE=new n(4,[8,16,16]),n.KANJI=new n(8,[8,10,12]),n.ECI=new n(7,[0,0,0]),t.Mode=n})(e.QrSegment||(e.QrSegment={}))})(gi||(gi={}));var Ui=gi;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var fI={L:Ui.QrCode.Ecc.LOW,M:Ui.QrCode.Ecc.MEDIUM,Q:Ui.QrCode.Ecc.QUARTILE,H:Ui.QrCode.Ecc.HIGH},Ab=128,Rb="L",Nb="#FFFFFF",Db="#000000",Mb=!1,Lb=1,pI=4,mI=0,gI=.1;function zb(e,t=0){const n=[];return e.forEach(function(r,i){let o=null;r.forEach(function(s,a){if(!s&&o!==null){n.push(`M${o+t} ${i+t}h${a-o}v1H${o+t}z`),o=null;return}if(a===r.length-1){if(!s)return;o===null?n.push(`M${a+t},${i+t} h1v1H${a+t}z`):n.push(`M${o+t},${i+t} h${a+1-o}v1H${o+t}z`);return}s&&o===null&&(o=a)})}),n.join("")}function Ob(e,t){return e.slice().map((n,r)=>r<t.y||r>=t.y+t.h?n:n.map((i,o)=>o<t.x||o>=t.x+t.w?i:!1))}function yI(e,t,n,r){if(r==null)return null;const i=e.length+n*2,o=Math.floor(t*gI),s=i/t,a=(r.width||o)*s,c=(r.height||o)*s,u=r.x==null?e.length/2-a/2:r.x*s,d=r.y==null?e.length/2-c/2:r.y*s,h=r.opacity==null?1:r.opacity;let f=null;if(r.excavate){let g=Math.floor(u),y=Math.floor(d),w=Math.ceil(a+u-g),m=Math.ceil(c+d-y);f={x:g,y,w,h:m}}const p=r.crossOrigin;return{x:u,y:d,h:c,w:a,excavation:f,opacity:h,crossOrigin:p}}function xI(e,t){return t!=null?Math.max(Math.floor(t),0):e?pI:mI}function Fb({value:e,level:t,minVersion:n,includeMargin:r,marginSize:i,imageSettings:o,size:s,boostLevel:a}){let c=Q.useMemo(()=>{const g=(Array.isArray(e)?e:[e]).reduce((y,w)=>(y.push(...Ui.QrSegment.makeSegments(w)),y),[]);return Ui.QrCode.encodeSegments(g,fI[t],n,void 0,void 0,a)},[e,t,n,a]);const{cells:u,margin:d,numCells:h,calculatedImageSettings:f}=Q.useMemo(()=>{let p=c.getModules();const g=xI(r,i),y=p.length+g*2,w=yI(p,s,g,o);return{cells:p,margin:g,numCells:y,calculatedImageSettings:w}},[c,s,o,r,i]);return{qrcode:c,margin:d,cells:u,numCells:h,calculatedImageSettings:f}}var vI=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),bI=Q.forwardRef(function(t,n){const r=t,{value:i,size:o=Ab,level:s=Rb,bgColor:a=Nb,fgColor:c=Db,includeMargin:u=Mb,minVersion:d=Lb,boostLevel:h,marginSize:f,imageSettings:p}=r,y=ch(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:w}=y,m=ch(y,["style"]),x=p==null?void 0:p.src,v=Q.useRef(null),k=Q.useRef(null),T=Q.useCallback(W=>{v.current=W,typeof n=="function"?n(W):n&&(n.current=W)},[n]),[C,j]=Q.useState(!1),{margin:E,cells:R,numCells:P,calculatedImageSettings:N}=Fb({value:i,level:s,minVersion:d,boostLevel:h,includeMargin:u,marginSize:f,imageSettings:p,size:o});Q.useEffect(()=>{if(v.current!=null){const W=v.current,U=W.getContext("2d");if(!U)return;let Z=R;const ie=k.current,M=N!=null&&ie!==null&&ie.complete&&ie.naturalHeight!==0&&ie.naturalWidth!==0;M&&N.excavation!=null&&(Z=Ob(R,N.excavation));const V=window.devicePixelRatio||1;W.height=W.width=o*V;const S=o/P*V;U.scale(S,S),U.fillStyle=a,U.fillRect(0,0,P,P),U.fillStyle=c,vI?U.fill(new Path2D(zb(Z,E))):R.forEach(function(G,te){G.forEach(function(_,ye){_&&U.fillRect(ye+E,te+E,1,1)})}),N&&(U.globalAlpha=N.opacity),M&&U.drawImage(ie,N.x+E,N.y+E,N.w,N.h)}}),Q.useEffect(()=>{j(!1)},[x]);const D=lh({height:o,width:o},w);let F=null;return x!=null&&(F=Q.createElement("img",{src:x,key:x,style:{display:"none"},onLoad:()=>{j(!0)},ref:k,crossOrigin:N==null?void 0:N.crossOrigin})),Q.createElement(Q.Fragment,null,Q.createElement("canvas",lh({style:D,height:o,width:o,ref:T,role:"img"},m)),F)});bI.displayName="QRCodeCanvas";var Bb=Q.forwardRef(function(t,n){const r=t,{value:i,size:o=Ab,level:s=Rb,bgColor:a=Nb,fgColor:c=Db,includeMargin:u=Mb,minVersion:d=Lb,boostLevel:h,title:f,marginSize:p,imageSettings:g}=r,y=ch(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:w,cells:m,numCells:x,calculatedImageSettings:v}=Fb({value:i,level:s,minVersion:d,boostLevel:h,includeMargin:u,marginSize:p,imageSettings:g,size:o});let k=m,T=null;g!=null&&v!=null&&(v.excavation!=null&&(k=Ob(m,v.excavation)),T=Q.createElement("image",{href:g.src,height:v.h,width:v.w,x:v.x+w,y:v.y+w,preserveAspectRatio:"none",opacity:v.opacity,crossOrigin:v.crossOrigin}));const C=zb(k,w);return Q.createElement("svg",lh({height:o,width:o,viewBox:`0 0 ${x} ${x}`,ref:n,role:"img"},y),!!f&&Q.createElement("title",null,f),Q.createElement("path",{fill:a,d:`M0,0 h${x}v${x}H0z`,shapeRendering:"crispEdges"}),Q.createElement("path",{fill:c,d:C,shapeRendering:"crispEdges"}),T)});Bb.displayName="QRCodeSVG";const wI=()=>l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"}),l.jsx("path",{d:"M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"})]}),kI=()=>l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"})}),SI=()=>l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),l.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),l.jsx("circle",{cx:"4",cy:"4",r:"2"})]});function CI(e){if(!e)return"Untitled";const t=e.match(/name=['"](.*?)['"]/);return t?t[1]:(e.startsWith("[")&&e.includes("("),e)}const ju=[{value:"view",label:"View only",icon:"👁"},{value:"download",label:"View & Download",icon:"📥"},{value:"edit",label:"Edit metadata",icon:"✏️"}];function _I({value:e,onChange:t}){const[n,r]=b.useState(!1),i=ju.find(o=>o.value===e)||ju[0];return l.jsxs("div",{style:{position:"relative"},children:[l.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Permission"}),l.jsxs("button",{type:"button",onClick:()=>r(!n),style:{width:"100%",padding:"12px 14px",background:"var(--bg-card-hover, rgba(255,255,255,0.05))",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:"var(--font, inherit)",fontSize:14,fontWeight:500,textAlign:"left"},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("span",{children:i.icon}),l.jsx("span",{children:i.label})]}),l.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{transform:n?"rotate(180deg)":"none",transition:"0.2s"},children:l.jsx("path",{d:"M6 9l6 6 6-6"})})]}),n&&l.jsxs(l.Fragment,{children:[l.jsx("div",{onClick:()=>r(!1),style:{position:"fixed",inset:0,zIndex:50}}),l.jsx("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,right:0,background:"var(--bg-card, #1a1a1a)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"0 16px 48px rgba(0,0,0,0.4)",zIndex:51,overflow:"hidden",animation:"fadeIn 0.15s ease"},children:ju.map(o=>l.jsxs("button",{onClick:()=>{t(o.value),r(!1)},style:{display:"flex",alignItems:"center",gap:10,width:"100%",padding:"13px 16px",border:"none",background:o.value===e?"rgba(59,130,246,0.12)":"transparent",color:"var(--text)",fontFamily:"var(--font, inherit)",fontSize:14,fontWeight:o.value===e?600:500,cursor:"pointer",textAlign:"left",transition:"background 0.15s"},onMouseEnter:s=>{o.value!==e&&(s.currentTarget.style.background="rgba(255,255,255,0.06)")},onMouseLeave:s=>{s.currentTarget.style.background=o.value===e?"rgba(59,130,246,0.12)":"transparent"},children:[l.jsx("span",{style:{fontSize:16},children:o.icon}),l.jsx("span",{children:o.label}),o.value===e&&l.jsx("span",{style:{marginLeft:"auto",color:"var(--accent-blue, #3b82f6)"},children:"✓"})]},o.value))})]})]})}function EI({file:e,onShare:t,onCancel:n}){const[r,i]=b.useState("link"),[o,s]=b.useState("view"),[a,c]=b.useState(""),[u,d]=b.useState(""),[h,f]=b.useState(""),[p,g]=b.useState(""),[y,w]=b.useState(!1),[m,x]=b.useState(""),[v,k]=b.useState(!1),[T,C]=b.useState("settings"),j=async()=>{var P;w(!0);try{const N={shareType:r,permission:o,visibility:"protected",...u&&{password:u},...h&&{expiresAt:new Date(h).toISOString()},...p&&{maxViews:Number(p)},...r==="email"&&{recipientEmail:a,email:a}},D=await t(N),F=(D==null?void 0:D.shareUrl)||((P=D==null?void 0:D.data)==null?void 0:P.shareUrl);F?x(F):alert("Server did not return a share link.")}catch(N){console.error(N),alert(N.message||"Failed to create share link")}finally{w(!1)}},E=async()=>{var P;m&&(await((P=navigator.clipboard)==null?void 0:P.writeText(m)),k(!0),setTimeout(()=>k(!1),2e3))},R=P=>{if(!m)return;const N=encodeURIComponent(`Check out this file on CloudVault: ${e.name}`),D=encodeURIComponent(m),F={twitter:`https://twitter.com/intent/tweet?text=${N}&url=${D}`,whatsapp:`https://wa.me/?text=${N}%20${D}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${D}`,email:`mailto:?subject=${encodeURIComponent(`Shared File: ${e.name}`)}&body=${N}%0A${D}`};window.open(F[P],"_blank")};return l.jsx("div",{className:"share-modal-backdrop",onClick:n,children:l.jsxs("div",{onClick:P=>P.stopPropagation(),style:{background:"var(--surface)",borderRadius:24,width:"100%",maxWidth:500,overflow:"hidden",boxShadow:"0 24px 80px rgba(0,0,0,0.4)",border:"1px solid var(--border)"},children:[l.jsxs("div",{style:{padding:"24px 32px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(255,255,255,0.02)"},children:[l.jsxs("div",{style:{minWidth:0,flex:1},children:[l.jsxs("h3",{style:{margin:0,fontSize:18,fontWeight:700,color:"var(--text)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:['Share "',CI(e.name),'"']}),l.jsx("p",{style:{margin:"4px 0 0",fontSize:13,color:"var(--text-muted)"},children:"Securely distribute this file"})]}),l.jsx("button",{onClick:n,style:{background:"transparent",border:"none",color:"var(--text-muted)",cursor:"pointer",padding:8,borderRadius:50},children:l.jsx(Hf,{size:20})})]}),l.jsx("div",{style:{padding:"32px"},children:m?l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",gap:16,marginBottom:24},children:[l.jsx("button",{onClick:()=>C("settings"),style:{flex:1,padding:"10px",borderRadius:12,background:T==="settings"?"var(--accent-blue)":"transparent",color:T==="settings"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:T==="settings"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Link"}),l.jsx("button",{onClick:()=>C("qr"),style:{flex:1,padding:"10px",borderRadius:12,background:T==="qr"?"var(--accent-blue)":"transparent",color:T==="qr"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:T==="qr"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"QR Code"}),l.jsx("button",{onClick:()=>C("social"),style:{flex:1,padding:"10px",borderRadius:12,background:T==="social"?"var(--accent-blue)":"transparent",color:T==="social"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:T==="social"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Social"})]}),T==="settings"&&l.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[l.jsxs("div",{style:{padding:20,background:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",borderRadius:16,marginBottom:24},children:[l.jsx("p",{style:{margin:"0 0 12px",fontSize:13,fontWeight:700,color:"var(--accent-blue)",textTransform:"uppercase",letterSpacing:.5},children:"Share Link Created"}),l.jsx("div",{style:{fontSize:14,wordBreak:"break-all",color:"var(--text)",lineHeight:1.5,marginBottom:16},children:m}),l.jsxs("button",{onClick:E,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",padding:14,borderRadius:12,background:v?"#10b981":"var(--accent-blue)",color:"#fff",border:"none",fontWeight:700,cursor:"pointer",transition:"0.2s"},children:[v?l.jsx(z_,{size:18}):l.jsx(B_,{size:18}),v?"Copied to Clipboard":"Copy Link"]})]}),l.jsx("button",{onClick:()=>x(""),style:{width:"100%",padding:14,background:"transparent",color:"var(--text)",border:"1px solid var(--border)",borderRadius:12,fontWeight:600,cursor:"pointer"},children:"Create another share"})]}),T==="qr"&&l.jsxs("div",{style:{animation:"fadeIn 0.3s ease",textAlign:"center"},children:[l.jsx("div",{style:{display:"inline-block",background:"#fff",padding:24,borderRadius:24,marginBottom:24,boxShadow:"0 10px 40px rgba(0,0,0,0.1)"},children:l.jsx(Bb,{value:m,size:200,level:"H",includeMargin:!1})}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,margin:0},children:"Scan this code to instantly open the shared file on your mobile device."})]}),T==="social"&&l.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[l.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:24,textAlign:"center"},children:"Share directly to your favorite platforms"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[l.jsxs("button",{onClick:()=>R("twitter"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(29, 161, 242, 0.1)",color:"#1da1f2",border:"1px solid rgba(29, 161, 242, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[l.jsx(kI,{})," Twitter"]}),l.jsxs("button",{onClick:()=>R("whatsapp"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(37, 211, 102, 0.1)",color:"#25d366",border:"1px solid rgba(37, 211, 102, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[l.jsx(wI,{})," WhatsApp"]}),l.jsxs("button",{onClick:()=>R("linkedin"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(0, 119, 181, 0.1)",color:"#0077b5",border:"1px solid rgba(0, 119, 181, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[l.jsx(SI,{})," LinkedIn"]}),l.jsxs("button",{onClick:()=>R("email"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(255, 255, 255, 0.05)",color:"var(--text)",border:"1px solid var(--border)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[l.jsx(U_,{size:20})," Email App"]})]})]})]}):l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Share Method"}),l.jsxs("div",{style:{display:"flex",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,padding:4},children:[l.jsx("button",{onClick:()=>i("link"),style:{flex:1,padding:"8px",background:r==="link"?"var(--surface)":"transparent",color:r==="link"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:r==="link"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Link"}),l.jsx("button",{onClick:()=>i("email"),style:{flex:1,padding:"8px",background:r==="email"?"var(--surface)":"transparent",color:r==="email"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:r==="email"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Email"})]})]}),l.jsx(_I,{value:o,onChange:s})]}),r==="email"&&l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Recipient Email"}),l.jsx("input",{type:"email",value:a,onChange:P=>c(P.target.value),placeholder:"colleague@company.com",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Password Protection"}),l.jsx("input",{type:"password",value:u,onChange:P=>d(P.target.value),placeholder:"Optional",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"},autoComplete:"new-password"})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"View Limit"}),l.jsx("input",{type:"number",min:"1",value:p,onChange:P=>g(P.target.value),placeholder:"Unlimited",style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Expiration Date"}),l.jsx("input",{type:"datetime-local",value:h,onChange:P=>f(P.target.value),style:{width:"100%",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),l.jsx("div",{style:{marginTop:8},children:l.jsx("button",{onClick:j,disabled:y||r==="email"&&!a,style:{width:"100%",padding:"16px",background:"var(--accent-blue)",color:"#fff",border:"none",borderRadius:14,fontWeight:700,fontSize:16,cursor:y||r==="email"&&!a?"not-allowed":"pointer",opacity:y||r==="email"&&!a?.6:1,transition:"0.2s"},children:y?"Generating Secure Link...":r==="email"?"Send Email Invitation":"Create Share Link"})})]})})]})})}function TI({stats:e,usage:t,onBack:n}){const r=(t==null?void 0:t.breakdown)||{},i=Object.values(r).reduce((a,c)=>a+c,0)||1,o=e.storageQuota>0?Math.min(100,Math.round(e.storageUsed/e.storageQuota*100)):0,s=[{key:"images",label:"Images",color:"#22c55e"},{key:"videos",label:"Videos",color:"#2563eb"},{key:"documents",label:"Documents",color:"#f59e0b"},{key:"audio",label:"Audio",color:"#a78bfa"},{key:"other",label:"Other",color:"#94a3b8"}];return l.jsxs("div",{style:{animation:"fadeIn .3s ease"},children:[l.jsx("button",{type:"button",onClick:n,className:"page-back-btn",children:"← Back to My Drive"}),l.jsx("h2",{style:{fontWeight:900,fontSize:26,margin:"12px 0 8px",color:"var(--text)"},children:"Storage dashboard"}),l.jsxs("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:28},children:[o,"% of your storage is in use"]}),l.jsxs("div",{className:"dashboard-stat-grid",children:[l.jsx(Ea,{label:"Total files",value:e.totalFiles}),l.jsx(Ea,{label:"Total folders",value:e.totalFolders}),l.jsx(Ea,{label:"Storage used",value:Ge(e.storageUsed)}),l.jsx(Ea,{label:"Storage remaining",value:Ge(Math.max(0,e.storageQuota-e.storageUsed))})]}),l.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)",marginBottom:24},children:[l.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"Storage breakdown"}),l.jsx("div",{style:{height:14,borderRadius:99,overflow:"hidden",display:"flex",background:"var(--border)"},children:s.map(a=>{const c=(r[a.key]||0)/i*100;return c<.5?null:l.jsx("div",{title:`${a.label}: ${Ge(r[a.key]||0)}`,style:{width:`${c}%`,background:a.color,transition:"width .4s ease"}},a.key)})}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,marginTop:16},children:s.map(a=>l.jsxs("span",{style:{fontSize:13,color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:8},children:[l.jsx("span",{style:{width:10,height:10,borderRadius:99,background:a.color,flexShrink:0}}),a.label,": ",Ge(r[a.key]||0)]},a.key))})]}),l.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)"},children:[l.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"File type distribution"}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:s.map(a=>{const c=r[a.key]||0,u=Math.round(c/i*100);return l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[l.jsx("span",{style:{color:"var(--text-secondary)",fontWeight:600},children:a.label}),l.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:700},children:[u,"%"]})]}),l.jsx("div",{style:{height:8,background:"var(--border)",borderRadius:99,overflow:"hidden"},children:l.jsx("div",{style:{width:`${u}%`,height:"100%",background:a.color,borderRadius:99,transition:"width .4s ease"}})})]},a.key)})})]})]})}function Ea({label:e,value:t}){return l.jsxs("div",{className:"dashboard-stat-card",children:[l.jsx("div",{className:"label",children:e}),l.jsx("div",{className:"value",children:t})]})}var op={x:0,y:0,width:0,height:0,unit:"px"},Ei=(e,t,n)=>Math.min(Math.max(e,t),n),jI=(...e)=>e.filter(t=>t&&typeof t=="string").join(" "),ny=(e,t)=>e===t||e.width===t.width&&e.height===t.height&&e.x===t.x&&e.y===t.y&&e.unit===t.unit;function II(e,t,n,r){let i=vn(e,n,r);return e.width&&(i.height=i.width/t),e.height&&(i.width=i.height*t),i.y+i.height>r&&(i.height=r-i.y,i.width=i.height*t),i.x+i.width>n&&(i.width=n-i.x,i.height=i.width/t),e.unit==="%"?ur(i,n,r):i}function PI(e,t,n){let r=vn(e,t,n);return r.x=(t-r.width)/2,r.y=(n-r.height)/2,e.unit==="%"?ur(r,t,n):r}function ur(e,t,n){return e.unit==="%"?{...op,...e,unit:"%"}:{unit:"%",x:e.x?e.x/t*100:0,y:e.y?e.y/n*100:0,width:e.width?e.width/t*100:0,height:e.height?e.height/n*100:0}}function vn(e,t,n){return!e.unit||e.unit==="px"?{...op,...e,unit:"px"}:{unit:"px",x:e.x?e.x*t/100:0,y:e.y?e.y*n/100:0,width:e.width?e.width*t/100:0,height:e.height?e.height*n/100:0}}function ry(e,t,n,r,i,o=0,s=0,a=r,c=i){let u={...e},d=Math.min(o,r),h=Math.min(s,i),f=Math.min(a,r),p=Math.min(c,i);t&&(t>1?(d=s?s*t:d,h=d/t,f=a*t):(h=o?o/t:h,d=h*t,p=c/t)),u.y<0&&(u.height=Math.max(u.height+u.y,h),u.y=0),u.x<0&&(u.width=Math.max(u.width+u.x,d),u.x=0);let g=r-(u.x+u.width);g<0&&(u.x=Math.min(u.x,r-d),u.width+=g);let y=i-(u.y+u.height);if(y<0&&(u.y=Math.min(u.y,i-h),u.height+=y),u.width<d&&((n==="sw"||n=="nw")&&(u.x-=d-u.width),u.width=d),u.height<h&&((n==="nw"||n=="ne")&&(u.y-=h-u.height),u.height=h),u.width>f&&((n==="sw"||n=="nw")&&(u.x-=f-u.width),u.width=f),u.height>p&&((n==="nw"||n=="ne")&&(u.y-=p-u.height),u.height=p),t){let w=u.width/u.height;if(w<t){let m=Math.max(u.width/t,h);(n==="nw"||n=="ne")&&(u.y-=m-u.height),u.height=m}else if(w>t){let m=Math.max(u.height*t,d);(n==="sw"||n=="nw")&&(u.x-=m-u.width),u.width=m}}return u}function AI(e,t,n,r){let i={...e};return t==="ArrowLeft"?r==="nw"?(i.x-=n,i.y-=n,i.width+=n,i.height+=n):r==="w"?(i.x-=n,i.width+=n):r==="sw"?(i.x-=n,i.width+=n,i.height+=n):r==="ne"?(i.y+=n,i.width-=n,i.height-=n):r==="e"?i.width-=n:r==="se"&&(i.width-=n,i.height-=n):t==="ArrowRight"&&(r==="nw"?(i.x+=n,i.y+=n,i.width-=n,i.height-=n):r==="w"?(i.x+=n,i.width-=n):r==="sw"?(i.x+=n,i.width-=n,i.height-=n):r==="ne"?(i.y-=n,i.width+=n,i.height+=n):r==="e"?i.width+=n:r==="se"&&(i.width+=n,i.height+=n)),t==="ArrowUp"?r==="nw"?(i.x-=n,i.y-=n,i.width+=n,i.height+=n):r==="n"?(i.y-=n,i.height+=n):r==="ne"?(i.y-=n,i.width+=n,i.height+=n):r==="sw"?(i.x+=n,i.width-=n,i.height-=n):r==="s"?i.height-=n:r==="se"&&(i.width-=n,i.height-=n):t==="ArrowDown"&&(r==="nw"?(i.x+=n,i.y+=n,i.width-=n,i.height-=n):r==="n"?(i.y+=n,i.height-=n):r==="ne"?(i.y+=n,i.width-=n,i.height-=n):r==="sw"?(i.x-=n,i.width+=n,i.height+=n):r==="s"?i.height+=n:r==="se"&&(i.width+=n,i.height+=n)),i}var Ti={capture:!0,passive:!1},RI=0,Le,NI=(Le=class extends b.PureComponent{constructor(){super(...arguments);Ee(this,"docMoveBound",!1);Ee(this,"mouseDownOnCrop",!1);Ee(this,"dragStarted",!1);Ee(this,"evData",{startClientX:0,startClientY:0,startCropX:0,startCropY:0,clientX:0,clientY:0,isResize:!0});Ee(this,"componentRef",b.createRef());Ee(this,"mediaRef",b.createRef());Ee(this,"resizeObserver");Ee(this,"initChangeCalled",!1);Ee(this,"instanceId",`rc-${RI++}`);Ee(this,"state",{cropIsActive:!1,newCropIsBeingDrawn:!1});Ee(this,"onCropPointerDown",n=>{let{crop:r,disabled:i}=this.props,o=this.getBox();if(!r)return;let s=vn(r,o.width,o.height);if(i)return;n.cancelable&&n.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let a=n.target.dataset.ord,c=!!a,u=n.clientX,d=n.clientY,h=s.x,f=s.y;if(a){let p=n.clientX-o.x,g=n.clientY-o.y,y=0,w=0;a==="ne"||a=="e"?(y=p-(s.x+s.width),w=g-s.y,h=s.x,f=s.y+s.height):a==="se"||a==="s"?(y=p-(s.x+s.width),w=g-(s.y+s.height),h=s.x,f=s.y):a==="sw"||a=="w"?(y=p-s.x,w=g-(s.y+s.height),h=s.x+s.width,f=s.y):(a==="nw"||a=="n")&&(y=p-s.x,w=g-s.y,h=s.x+s.width,f=s.y+s.height),u=h+o.x+y,d=f+o.y+w}this.evData={startClientX:u,startClientY:d,startCropX:h,startCropY:f,clientX:n.clientX,clientY:n.clientY,isResize:c,ord:a},this.mouseDownOnCrop=!0,this.setState({cropIsActive:!0})});Ee(this,"onComponentPointerDown",n=>{let{crop:r,disabled:i,locked:o,keepSelection:s,onChange:a}=this.props,c=this.getBox();if(i||o||s&&r)return;n.cancelable&&n.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let u=n.clientX-c.x,d=n.clientY-c.y,h={unit:"px",x:u,y:d,width:0,height:0};this.evData={startClientX:n.clientX,startClientY:n.clientY,startCropX:u,startCropY:d,clientX:n.clientX,clientY:n.clientY,isResize:!0},this.mouseDownOnCrop=!0,a(vn(h,c.width,c.height),ur(h,c.width,c.height)),this.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})});Ee(this,"onDocPointerMove",n=>{let{crop:r,disabled:i,onChange:o,onDragStart:s}=this.props,a=this.getBox();if(i||!r||!this.mouseDownOnCrop)return;n.cancelable&&n.preventDefault(),this.dragStarted||(this.dragStarted=!0,s&&s(n));let{evData:c}=this;c.clientX=n.clientX,c.clientY=n.clientY;let u;u=c.isResize?this.resizeCrop():this.dragCrop(),ny(r,u)||o(vn(u,a.width,a.height),ur(u,a.width,a.height))});Ee(this,"onComponentKeyDown",n=>{let{crop:r,disabled:i,onChange:o,onComplete:s}=this.props;if(i)return;let a=n.key,c=!1;if(!r)return;let u=this.getBox(),d=this.makePixelCrop(u),h=(navigator.platform.match("Mac")?n.metaKey:n.ctrlKey)?Le.nudgeStepLarge:n.shiftKey?Le.nudgeStepMedium:Le.nudgeStep;if(a==="ArrowLeft"?(d.x-=h,c=!0):a==="ArrowRight"?(d.x+=h,c=!0):a==="ArrowUp"?(d.y-=h,c=!0):a==="ArrowDown"&&(d.y+=h,c=!0),c){n.cancelable&&n.preventDefault(),d.x=Ei(d.x,0,u.width-d.width),d.y=Ei(d.y,0,u.height-d.height);let f=vn(d,u.width,u.height),p=ur(d,u.width,u.height);o(f,p),s&&s(f,p)}});Ee(this,"onHandlerKeyDown",(n,r)=>{let{aspect:i=0,crop:o,disabled:s,minWidth:a=0,minHeight:c=0,maxWidth:u,maxHeight:d,onChange:h,onComplete:f}=this.props,p=this.getBox();if(s||!o)return;if(n.key==="ArrowUp"||n.key==="ArrowDown"||n.key==="ArrowLeft"||n.key==="ArrowRight")n.stopPropagation(),n.preventDefault();else return;let g=(navigator.platform.match("Mac")?n.metaKey:n.ctrlKey)?Le.nudgeStepLarge:n.shiftKey?Le.nudgeStepMedium:Le.nudgeStep,y=ry(AI(vn(o,p.width,p.height),n.key,g,r),i,r,p.width,p.height,a,c,u,d);if(!ny(o,y)){let w=ur(y,p.width,p.height);h(y,w),f&&f(y,w)}});Ee(this,"onDocPointerDone",n=>{let{crop:r,disabled:i,onComplete:o,onDragEnd:s}=this.props,a=this.getBox();this.unbindDocMove(),!(i||!r)&&this.mouseDownOnCrop&&(this.mouseDownOnCrop=!1,this.dragStarted=!1,s&&s(n),o&&o(vn(r,a.width,a.height),ur(r,a.width,a.height)),this.setState({cropIsActive:!1,newCropIsBeingDrawn:!1}))});Ee(this,"onDragFocus",()=>{var n;(n=this.componentRef.current)==null||n.scrollTo(0,0)})}get document(){return document}getBox(){let n=this.mediaRef.current;if(!n)return{x:0,y:0,width:0,height:0};let{x:r,y:i,width:o,height:s}=n.getBoundingClientRect();return{x:r,y:i,width:o,height:s}}componentDidUpdate(n){let{crop:r,onComplete:i}=this.props;if(i&&!n.crop&&r){let{width:o,height:s}=this.getBox();o&&s&&i(vn(r,o,s),ur(r,o,s))}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect(),this.unbindDocMove()}bindDocMove(){this.docMoveBound||(this.docMoveBound=(this.document.addEventListener("pointermove",this.onDocPointerMove,Ti),this.document.addEventListener("pointerup",this.onDocPointerDone,Ti),this.document.addEventListener("pointercancel",this.onDocPointerDone,Ti),!0))}unbindDocMove(){this.docMoveBound&&(this.docMoveBound=(this.document.removeEventListener("pointermove",this.onDocPointerMove,Ti),this.document.removeEventListener("pointerup",this.onDocPointerDone,Ti),this.document.removeEventListener("pointercancel",this.onDocPointerDone,Ti),!1))}getCropStyle(){let{crop:n}=this.props;if(n)return{top:`${n.y}${n.unit}`,left:`${n.x}${n.unit}`,width:`${n.width}${n.unit}`,height:`${n.height}${n.unit}`}}dragCrop(){let{evData:n}=this,r=this.getBox(),i=this.makePixelCrop(r),o=n.clientX-n.startClientX,s=n.clientY-n.startClientY;return i.x=Ei(n.startCropX+o,0,r.width-i.width),i.y=Ei(n.startCropY+s,0,r.height-i.height),i}getPointRegion(n,r,i,o){let{evData:s}=this,a=s.clientX-n.x,c=s.clientY-n.y,u;u=o&&r?r==="nw"||r==="n"||r==="ne":c<s.startCropY;let d;return d=i&&r?r==="nw"||r==="w"||r==="sw":a<s.startCropX,d?u?"nw":"sw":u?"ne":"se"}resolveMinDimensions(n,r,i=0,o=0){let s=Math.min(i,n.width),a=Math.min(o,n.height);return!r||!s&&!a?[s,a]:r>1?s?[s,s/r]:[a*r,a]:a?[a*r,a]:[s,s/r]}resizeCrop(){let{evData:n}=this,{aspect:r=0,maxWidth:i,maxHeight:o}=this.props,s=this.getBox(),[a,c]=this.resolveMinDimensions(s,r,this.props.minWidth,this.props.minHeight),u=this.makePixelCrop(s),d=this.getPointRegion(s,n.ord,a,c),h=n.ord||d,f=n.clientX-n.startClientX,p=n.clientY-n.startClientY;(a&&h==="nw"||h==="w"||h==="sw")&&(f=Math.min(f,-a)),(c&&h==="nw"||h==="n"||h==="ne")&&(p=Math.min(p,-c));let g={unit:"px",x:0,y:0,width:0,height:0};d==="ne"?(g.x=n.startCropX,g.width=f,r?(g.height=g.width/r,g.y=n.startCropY-g.height):(g.height=Math.abs(p),g.y=n.startCropY-g.height)):d==="se"?(g.x=n.startCropX,g.y=n.startCropY,g.width=f,r?g.height=g.width/r:g.height=p):d==="sw"?(g.x=n.startCropX+f,g.y=n.startCropY,g.width=Math.abs(f),r?g.height=g.width/r:g.height=p):d==="nw"&&(g.x=n.startCropX+f,g.width=Math.abs(f),r?(g.height=g.width/r,g.y=n.startCropY-g.height):(g.height=Math.abs(p),g.y=n.startCropY+p));let y=ry(g,r,d,s.width,s.height,a,c,i,o);return r||Le.xyOrds.indexOf(h)>-1?u=y:Le.xOrds.indexOf(h)>-1?(u.x=y.x,u.width=y.width):Le.yOrds.indexOf(h)>-1&&(u.y=y.y,u.height=y.height),u.x=Ei(u.x,0,s.width-u.width),u.y=Ei(u.y,0,s.height-u.height),u}renderCropSelection(){let{ariaLabels:n=Le.defaultProps.ariaLabels,disabled:r,locked:i,renderSelectionAddon:o,ruleOfThirds:s,crop:a}=this.props,c=this.getCropStyle();if(a)return Q.createElement("div",{style:c,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown,"aria-label":n.cropArea,tabIndex:0,onKeyDown:this.onComponentKeyDown,role:"group"},!r&&!i&&Q.createElement("div",{className:"ReactCrop__drag-elements",onFocus:this.onDragFocus},Q.createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),Q.createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),Q.createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),Q.createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),Q.createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw",tabIndex:0,"aria-label":n.nwDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"nw"),role:"button"}),Q.createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n",tabIndex:0,"aria-label":n.nDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"n"),role:"button"}),Q.createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne",tabIndex:0,"aria-label":n.neDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"ne"),role:"button"}),Q.createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e",tabIndex:0,"aria-label":n.eDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"e"),role:"button"}),Q.createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se",tabIndex:0,"aria-label":n.seDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"se"),role:"button"}),Q.createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s",tabIndex:0,"aria-label":n.sDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"s"),role:"button"}),Q.createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw",tabIndex:0,"aria-label":n.swDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"sw"),role:"button"}),Q.createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w",tabIndex:0,"aria-label":n.wDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"w"),role:"button"})),o&&Q.createElement("div",{className:"ReactCrop__selection-addon",onPointerDown:u=>u.stopPropagation()},o(this.state)),s&&Q.createElement(Q.Fragment,null,Q.createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),Q.createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}makePixelCrop(n){return vn({...op,...this.props.crop||{}},n.width,n.height)}render(){let{aspect:n,children:r,circularCrop:i,className:o,crop:s,disabled:a,locked:c,style:u,ruleOfThirds:d}=this.props,{cropIsActive:h,newCropIsBeingDrawn:f}=this.state,p=s?this.renderCropSelection():null,g=jI("ReactCrop",o,h&&"ReactCrop--active",a&&"ReactCrop--disabled",c&&"ReactCrop--locked",f&&"ReactCrop--new-crop",s&&n&&"ReactCrop--fixed-aspect",s&&i&&"ReactCrop--circular-crop",s&&d&&"ReactCrop--rule-of-thirds",!this.dragStarted&&s&&!s.width&&!s.height&&"ReactCrop--invisible-crop",i&&"ReactCrop--no-animate");return Q.createElement("div",{ref:this.componentRef,className:g,style:u},Q.createElement("div",{ref:this.mediaRef,className:"ReactCrop__child-wrapper",onPointerDown:this.onComponentPointerDown},r),s?Q.createElement("svg",{className:"ReactCrop__crop-mask",width:"100%",height:"100%"},Q.createElement("defs",null,Q.createElement("mask",{id:`hole-${this.instanceId}`},Q.createElement("rect",{width:"100%",height:"100%",fill:"white"}),i?Q.createElement("ellipse",{cx:`${s.x+s.width/2}${s.unit}`,cy:`${s.y+s.height/2}${s.unit}`,rx:`${s.width/2}${s.unit}`,ry:`${s.height/2}${s.unit}`,fill:"black"}):Q.createElement("rect",{x:`${s.x}${s.unit}`,y:`${s.y}${s.unit}`,width:`${s.width}${s.unit}`,height:`${s.height}${s.unit}`,fill:"black"}))),Q.createElement("rect",{fill:"black",fillOpacity:.5,width:"100%",height:"100%",mask:`url(#hole-${this.instanceId})`})):void 0,p)}},Ee(Le,"xOrds",["e","w"]),Ee(Le,"yOrds",["n","s"]),Ee(Le,"xyOrds",["nw","ne","se","sw"]),Ee(Le,"nudgeStep",1),Ee(Le,"nudgeStepMedium",10),Ee(Le,"nudgeStepLarge",100),Ee(Le,"defaultProps",{ariaLabels:{cropArea:"Use the arrow keys to move the crop selection area",nwDragHandle:"Use the arrow keys to move the north west drag handle to change the crop selection area",nDragHandle:"Use the up and down arrow keys to move the north drag handle to change the crop selection area",neDragHandle:"Use the arrow keys to move the north east drag handle to change the crop selection area",eDragHandle:"Use the up and down arrow keys to move the east drag handle to change the crop selection area",seDragHandle:"Use the arrow keys to move the south east drag handle to change the crop selection area",sDragHandle:"Use the up and down arrow keys to move the south drag handle to change the crop selection area",swDragHandle:"Use the arrow keys to move the south west drag handle to change the crop selection area",wDragHandle:"Use the up and down arrow keys to move the west drag handle to change the crop selection area"}}),Le);function DI(e,t,n){return PI(II({unit:"%",width:90},n,e,t),e,t)}function MI({file:e,token:t,onClose:n,onUploadComplete:r}){const[i,o]=b.useState(""),s=b.useRef(null),[a,c]=b.useState(),[u,d]=b.useState(),[h,f]=b.useState(1),[p,g]=b.useState(0),[y,w]=b.useState(0),[m,x]=b.useState(0),[v,k]=b.useState(.8),[T,C]=b.useState(!0),[j,E]=b.useState(!1),[R,P]=b.useState("");b.useEffect(()=>{let F=null;return(async()=>{try{C(!0);const W=await kc(e.id,t,{disposition:"preview"});F=URL.createObjectURL(W),o(F)}catch{P("Failed to load image for editing.")}finally{C(!1)}})(),()=>{F&&URL.revokeObjectURL(F)}},[e.id,t]);const N=F=>{const{width:W,height:U}=F.currentTarget;w(W),x(U),c(DI(W,U,W/U))},D=async()=>{if(!(!u||!s.current)){E(!0);try{const F=document.createElement("canvas"),W=F.getContext("2d");if(!W)throw new Error("No 2d context");const U=s.current.naturalWidth/s.current.width,Z=s.current.naturalHeight/s.current.height,ie=window.devicePixelRatio;F.width=Math.floor(u.width*U*ie),F.height=Math.floor(u.height*Z*ie),W.scale(ie,ie),W.imageSmoothingQuality="high";const M=u.x*U,V=u.y*Z,S=u.width*U,G=u.height*Z;W.drawImage(s.current,M,V,S,G,0,0,S,G);const te=e.mimeType||"image/jpeg",_=te.split("/")[1]||"jpg",ye=`edited_${e.name.replace(/\.[^/.]+$/,"")}.${_}`;F.toBlob(async Pe=>{if(!Pe){P("Canvas is empty"),E(!1);return}const he=new File([Pe],ye,{type:te});try{const ve=new FormData;ve.append("files",he),e.folderId&&ve.append("folderId",e.folderId),await N1("/files/upload",ve,t,()=>{}),r(),n()}catch{P("Failed to save edited image"),E(!1)}},te,parseFloat(v))}catch(F){P(F.message),E(!1)}}};return l.jsx("div",{style:{position:"fixed",inset:0,zIndex:1100,background:"rgba(0,0,0,.9)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)"},children:l.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:20,border:"1.5px solid var(--border)",width:"90vw",height:"90vh",display:"flex",flexDirection:"column",overflow:"hidden"},children:[l.jsxs("div",{style:{padding:"16px 24px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsxs("h2",{style:{fontSize:18,fontWeight:600,margin:0},children:["Edit Image: ",e.name]}),l.jsx("button",{onClick:n,style:{background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:20},children:"✕"})]}),l.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[l.jsx("div",{style:{flex:1,padding:24,display:"flex",alignItems:"center",justifyContent:"center",background:"#000",overflow:"auto"},children:T?l.jsx("p",{children:"Loading image..."}):R&&!i?l.jsx("p",{style:{color:"var(--danger)"},children:R}):l.jsx(NI,{crop:a,onChange:(F,W)=>c(W),onComplete:F=>d(F),children:l.jsx("img",{ref:s,alt:"Crop me",src:i,style:{transform:`scale(${h}) rotate(${p}deg)`,maxHeight:"70vh"},onLoad:N})})}),l.jsxs("div",{style:{width:300,borderLeft:"1px solid var(--border)",padding:24,display:"flex",flexDirection:"column",gap:24,background:"var(--bg-card)"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:12,fontWeight:600,color:"var(--text-secondary)",marginBottom:8},children:"ZOOM"}),l.jsx("input",{type:"range",min:.1,max:3,step:.1,value:h,onChange:F=>f(Number(F.target.value)),style:{width:"100%"}})]}),l.jsxs("div",{children:[l.jsxs("label",{style:{display:"block",fontSize:12,fontWeight:600,color:"var(--text-secondary)",marginBottom:8},children:["COMPRESSION QUALITY (",(v*100).toFixed(0),"%)"]}),l.jsx("input",{type:"range",min:.1,max:1,step:.1,value:v,onChange:F=>k(Number(F.target.value)),style:{width:"100%"}}),l.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Lower quality reduces file size."})]}),R&&l.jsx("p",{style:{color:"var(--danger)",fontSize:13},children:R}),l.jsx("div",{style:{marginTop:"auto"},children:l.jsx("button",{onClick:D,disabled:j||!u,className:"btn-primary",style:{width:"100%",padding:"12px",borderRadius:8,fontWeight:600,border:"none",cursor:"pointer",opacity:j?.7:1},children:j?"Saving Copy...":"Save as New Copy"})})]})]})]})})}function LI({code:e,expiresAt:t,fileName:n,onClose:r}){const i=new Date(t),o=Math.max(0,Math.round((i-Date.now())/36e5)),s=()=>{navigator.clipboard.writeText(e)};return l.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:1100,background:"rgba(0,0,0,.85)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(12px)",animation:"fadeIn .2s ease"},children:l.jsxs("div",{onClick:a=>a.stopPropagation(),style:{background:"var(--bg-primary)",borderRadius:24,border:"1.5px solid var(--border)",padding:"48px 40px",maxWidth:440,width:"90vw",textAlign:"center",boxShadow:"0 24px 80px rgba(0,0,0,.5)",animation:"floatIn .25s ease"},children:[l.jsx("div",{style:{width:64,height:64,borderRadius:16,background:"linear-gradient(135deg, var(--accent), var(--accent-blue))",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontSize:28},children:"🖨️"}),l.jsx("h2",{style:{margin:"0 0 8px",fontSize:20,fontWeight:800,color:"var(--text)"},children:"Print Code Generated!"}),l.jsxs("p",{style:{margin:"0 0 24px",fontSize:13,color:"var(--text-muted)",lineHeight:1.5},children:["Go to ",l.jsx("strong",{style:{color:"var(--accent)"},children:"print.cloudvault.co.in"})," on any device, enter this code, and print your file instantly."]}),l.jsx("div",{onClick:s,title:"Click to copy",style:{fontSize:56,fontWeight:900,letterSpacing:16,color:"var(--text)",background:"var(--bg-card)",border:"2px solid var(--border)",borderRadius:16,padding:"20px 32px",margin:"0 auto 16px",cursor:"pointer",userSelect:"all",fontFamily:"var(--font-mono, monospace)",transition:"border-color .2s"},children:e}),l.jsxs("p",{style:{fontSize:12,color:"var(--text-muted)",margin:"0 0 8px"},children:["Click the code to copy • Expires in ~",o,"h"]}),n&&l.jsxs("p",{style:{fontSize:12,color:"var(--text-muted)",margin:"0 0 24px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["📄 ",n]}),l.jsx("button",{type:"button",onClick:r,className:"btn-primary",style:{padding:"12px 32px",fontSize:14,fontWeight:700,borderRadius:12,width:"100%"},children:"Done"})]})})}function zI({users:e,systemHealth:t,loading:n,onBack:r}){return l.jsxs("div",{children:[l.jsx("button",{type:"button",onClick:r,style:OI,children:"← Back to My Cloud"}),l.jsx("h2",{style:{fontWeight:800,fontSize:22,margin:"12px 0 8px"},children:"Admin panel"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:24},children:"User management and system overview"}),t&&l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:28},children:[l.jsx(Bo,{label:"Total users",value:t.totalUsers??"—"}),l.jsx(Bo,{label:"Active users",value:t.activeUsers??"—"}),l.jsx(Bo,{label:"Total files",value:t.totalFiles??"—"}),l.jsx(Bo,{label:"Storage used",value:t.totalStorageUsed!=null?Ge(t.totalStorageUsed):"—"}),l.jsx(Bo,{label:"Uploads today",value:t.uploadsToday??"—"})]}),l.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"Users"}),n?l.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading…"}):l.jsxs("div",{style:{overflowX:"auto",border:"1px solid var(--border)",borderRadius:12},children:[l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[l.jsx("thead",{children:l.jsxs("tr",{style:{background:"var(--bg-card)",textAlign:"left"},children:[l.jsx("th",{style:Vo,children:"Email"}),l.jsx("th",{style:Vo,children:"Name"}),l.jsx("th",{style:Vo,children:"Role"}),l.jsx("th",{style:Vo,children:"Storage"}),l.jsx("th",{style:Vo,children:"Status"})]})}),l.jsx("tbody",{children:e.map(i=>l.jsxs("tr",{style:{borderTop:"1px solid var(--border)"},children:[l.jsx("td",{style:Uo,children:i.email}),l.jsx("td",{style:Uo,children:i.fullName||"—"}),l.jsx("td",{style:Uo,children:i.role}),l.jsxs("td",{style:Uo,children:[Ge(i.storageUsed)," / ",Ge(i.storageQuota)]}),l.jsx("td",{style:Uo,children:i.isActive?"Active":"Inactive"})]},i.id))})]}),e.length===0&&l.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)"},children:"No users found"})]})]})}function Bo({label:e,value:t}){return l.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:14},children:[l.jsx("div",{style:{fontWeight:800,fontSize:20},children:t}),l.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:e})]})}const Vo={padding:"12px 14px",color:"var(--text-muted)",fontWeight:600},Uo={padding:"12px 14px",color:"var(--text-secondary)"},OI={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"};function Vb({file:e,onMove:t,onCopy:n,onTags:r,onEdit:i,onDelete:o,onPrint:s,onAnnotate:a}){var p;const[c,u]=b.useState(!1),d=b.useRef(null);b.useEffect(()=>{const g=y=>{d.current&&!d.current.contains(y.target)&&u(!1)};return c&&document.addEventListener("click",g),()=>document.removeEventListener("click",g)},[c]);const f=[...((p=e==null?void 0:e.mimeType)==null?void 0:p.startsWith("image/"))?[{cue:"✂️",label:"Edit image",onClick:()=>i&&i(e)}]:[],{cue:"🖨️",label:"Send to Print",onClick:()=>s&&s(e)},{cue:"💬",label:"Annotate",onClick:()=>a&&a(e)},{cue:"#",label:"Tags",onClick:()=>r(e)},{cue:"📁",label:"Move",onClick:()=>t(e)},{cue:"📋",label:"Copy file",onClick:()=>n(e)},{cue:"🗑️",label:"Delete",onClick:()=>o(e),danger:!0}];return l.jsxs("div",{ref:d,style:{position:"relative"},children:[l.jsx("button",{type:"button",title:"More actions",onClick:g=>{g.stopPropagation(),u(y=>!y)},style:FI,children:"..."}),c&&l.jsx("div",{style:BI,children:f.map(g=>l.jsxs("button",{type:"button",onClick:y=>{y.stopPropagation(),u(!1),g.onClick()},style:{...VI,color:g.danger?"var(--danger)":"var(--text)"},children:[l.jsx("span",{style:{...UI,color:g.danger?"var(--danger)":"var(--accent-blue)"},children:g.cue}),l.jsx("span",{children:g.label})]},g.label))})]})}const FI={width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"rgba(255,255,255,.08)",color:"var(--text)",cursor:"pointer",fontSize:18,fontWeight:900,transition:"var(--transition)"},BI={position:"absolute",right:0,top:"100%",marginTop:6,minWidth:190,background:"var(--surface-raised)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"var(--shadow)",zIndex:160,overflow:"hidden",padding:6,animation:"floatIn .16s ease"},VI={display:"flex",alignItems:"center",gap:10,width:"100%",padding:"11px 12px",border:"none",borderRadius:10,background:"transparent",textAlign:"left",cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"var(--font)"},UI={width:34,opacity:.78,fontSize:11,fontWeight:900,textTransform:"uppercase"};function ji({width:e="100%",height:t=16,radius:n=8,style:r={}}){return l.jsx("div",{style:{width:e,height:t,borderRadius:n,background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite",...r}})}function WI({count:e=6,grid:t=!1}){return t?l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:12},children:Array.from({length:e}).map((n,r)=>l.jsxs("div",{style:{borderRadius:16,overflow:"hidden",border:"1px solid var(--border)"},children:[l.jsx(ji,{height:140,radius:0}),l.jsxs("div",{style:{padding:12},children:[l.jsx(ji,{height:12,width:"80%"}),l.jsx(ji,{height:10,width:"50%",style:{marginTop:8}})]})]},r))}):l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Array.from({length:e}).map((n,r)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:"var(--bg-card)",borderRadius:12,border:"1px solid var(--border)"},children:[l.jsx(ji,{width:36,height:36,radius:8}),l.jsxs("div",{style:{flex:1},children:[l.jsx(ji,{height:14,width:"40%"}),l.jsx(ji,{height:10,width:"25%",style:{marginTop:8}})]})]},r))})}function $I(e,t=400){const[n,r]=b.useState(e);return b.useEffect(()=>{const i=setTimeout(()=>r(e),t);return()=>clearTimeout(i)},[e,t]),n}async function HI(e,{createFolder:t,uploadFile:n,baseFolderId:r,onProgress:i}){const o=Array.from(e),s=new Map([["",r??null]]),a=u=>{const d=u.webkitRelativePath||u.name,h=d.split("/").filter(Boolean),f=h.pop();return{segments:h,fileName:f,rel:d}};o.sort((u,d)=>a(u).rel.localeCompare(a(d).rel));let c=0;for(const u of o){const{segments:d}=a(u);let h=r??null,f="";for(const p of d){if(f=f?`${f}/${p}`:p,!s.has(f)){const g=await t(p,h);s.set(f,g.id)}h=s.get(f)}await n(u,h),c+=1,i==null||i(Math.round(c/o.length*100))}}function YI(e){const t=new Map(e.map(r=>[r.id,{...r,children:[]}])),n=[];for(const r of e){const i=t.get(r.id);r.parentId&&t.has(r.parentId)?t.get(r.parentId).children.push(i):n.push(i)}return n}const Ub=b.createContext(null);function GI({token:e,children:t}){const[n,r]=b.useState(null),[i,o]=b.useState([]),[s,a]=b.useState(0),[c,u]=b.useState(!0),d=b.useCallback(async()=>{if(e)try{const g=await wt("/account",{},e);r(g)}catch{const g=await wt("/users/me",{},e).catch(()=>null);g&&r(g)}},[e]),h=b.useCallback(async()=>{},[]),f=b.useCallback(async()=>{u(!0),await Promise.all([d(),h()]),u(!1)},[d,h]);b.useEffect(()=>{f()},[e]);const p=async()=>{};return l.jsx(Ub.Provider,{value:{account:n,loading:c,notifications:i,unreadCount:s,refreshAccount:d,refreshNotifications:h,refreshAll:f,markAllRead:p},children:t})}function Wb(){const e=b.useContext(Ub);if(!e)throw new Error("useAccount must be used within AccountProvider");return e}function KI({account:e,onNavigate:t,onSignOut:n}){var u;const[r,i]=b.useState(!1),o=b.useRef(null);b.useEffect(()=>{const d=h=>{o.current&&!o.current.contains(h.target)&&i(!1)};return r&&document.addEventListener("click",d),()=>document.removeEventListener("click",d)},[r]);const s=[{id:"profile",label:"My Profile"},{id:"settings",label:"Settings"},{id:"security",label:"Security"},{id:"dashboard",label:"Storage"},{id:"billing",label:"Billing"},{id:"billing",label:"Upgrade Plan",accent:!0},{id:"help",label:"Help Center"}],a=e==null?void 0:e.avatarUrl,c=((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"?").slice(0,1).toUpperCase();return l.jsxs("div",{ref:o,style:{position:"relative"},children:[l.jsxs("button",{type:"button",onClick:()=>i(d=>!d),style:{display:"flex",alignItems:"center",gap:8,padding:"4px 10px 4px 4px",borderRadius:999,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontFamily:"var(--font)"},children:[l.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:a?`url(${a}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:14},children:!a&&c}),l.jsx("span",{style:{color:"var(--text-secondary)",fontSize:13,fontWeight:600},children:"▾"})]}),r&&l.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",minWidth:200,background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300,overflow:"hidden",animation:"fadeIn .15s ease"},children:[l.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)"},children:[l.jsx("div",{style:{fontWeight:700,fontSize:14,color:"var(--text)"},children:(e==null?void 0:e.fullName)||"Account"}),l.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:e==null?void 0:e.email}),l.jsxs("div",{style:{fontSize:11,color:"var(--accent)",marginTop:6,fontWeight:600,textTransform:"capitalize"},children:[((u=e==null?void 0:e.planDetails)==null?void 0:u.name)||(e==null?void 0:e.plan)," plan"]})]}),s.map((d,h)=>l.jsx("button",{type:"button",onClick:()=>{i(!1),t(d.id==="dashboard"?"dashboard":d.id)},style:{display:"block",width:"100%",padding:"11px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,fontWeight:d.accent?700:500,color:d.accent?"var(--accent)":"var(--text-secondary)"},children:d.label},`${d.id}-${h}`)),l.jsx("div",{style:{borderTop:"1px solid var(--border)"},children:l.jsx("button",{type:"button",onClick:()=>{i(!1),n()},style:{display:"block",width:"100%",padding:"12px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,color:"var(--danger)",fontWeight:600},children:"Sign Out"})})]})]})}function qI({account:e,onUpgrade:t}){const[n,r]=b.useState(!0);if(!(e!=null&&e.onTrial)||!n)return null;const i=e.trialDaysLeft??0;return l.jsxs("div",{style:{background:"linear-gradient(90deg, rgba(240,22,58,.12), rgba(64,144,255,.1))",borderBottom:"1px solid var(--border)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13,position:"relative"},children:[l.jsxs("span",{style:{color:"var(--text-secondary)"},children:[l.jsx("strong",{style:{color:"var(--text)"},children:"Pro trial"})," — ",i," day",i!==1?"s":""," left • ",Ge(e.storageUsed)," used"]}),l.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Upgrade"}),l.jsx("button",{onClick:()=>r(!1),style:{position:"absolute",right:"16px",background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center",justifyContent:"center"},"aria-label":"Dismiss",children:l.jsx(Hf,{size:16})})]})}function XI({account:e,onOpenSettings:t}){return!(e!=null&&e.emailVerificationRequired)||(e==null?void 0:e.isVerified)!==!1?null:l.jsxs("div",{style:{background:"rgba(240, 22, 58, 0.12)",borderBottom:"1px solid rgba(240, 22, 58, 0.35)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[l.jsxs("span",{style:{color:"var(--text-secondary)"},children:[l.jsx("strong",{style:{color:"var(--danger)"},children:"Email not verified"})," — ","Uploads are disabled until you verify. Check your inbox or resend the link."]}),l.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Verify email"})]})}function iy({email:e,token:t,onVerified:n,onBack:r}){const[i,o]=b.useState(e||""),[s,a]=b.useState(!!t),[c,u]=b.useState(""),[d,h]=b.useState(""),[f,p]=b.useState(!1);b.useEffect(()=>{t&&g(t)},[t]);const g=async w=>{a(!0),u("");try{const m=await fetch(`${Jt}/auth/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:w})}),x=await m.json();if(!m.ok||!x.success)throw new Error(x.message||"Verification failed");p(!0),setTimeout(()=>n==null?void 0:n(),1200)}catch{u("This verification link is invalid or expired. Request a fresh email and try again.")}finally{a(!1)}},y=async()=>{if(!i){u("Enter your email address first.");return}a(!0),u(""),h("");try{const w=await fetch(`${Jt}/auth/resend-verification`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}),m=await w.json();if(!w.ok||!m.success)throw new Error(m.message||"Failed to send verification email");h("A fresh verification email is on its way. Open the link in your inbox to continue.")}catch{u("Something went wrong. Please try again.")}finally{a(!1)}};return l.jsxs("div",{className:"auth-screen",children:[l.jsx("style",{children:ss}),l.jsxs("div",{className:"auth-card",children:[l.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),l.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:f?"Email verified":t?"Verifying your email":"Check your inbox"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:f?"Your account is ready. You can now log in with your email and password.":t?"Hold tight while we confirm your CloudVault account.":"Open the verification link we sent after registration. You only need to do this once."}),!t&&!f&&l.jsxs(l.Fragment,{children:[l.jsxs("label",{style:{display:"block",marginBottom:14},children:[l.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:"Email address"}),l.jsx("input",{className:"input-field",type:"email",value:i,onChange:w=>o(w.target.value),placeholder:"you@company.com",style:{marginTop:6}})]}),l.jsx("button",{type:"button",onClick:y,disabled:s,className:"btn-primary",style:{width:"100%"},children:s?"Sending...":"Resend verification email"})]}),s&&l.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,marginTop:14},children:"Working on it..."}),c&&l.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginTop:14},children:c}),d&&l.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,lineHeight:1.5,marginTop:14},children:d}),l.jsx("button",{type:"button",onClick:r,className:"btn-secondary",style:{width:"100%",marginTop:14},children:"Back to login"})]})]})}function QI({notifications:e,unreadCount:t,onMarkAllRead:n}){const[r,i]=b.useState(!1),o=b.useRef(null);return b.useEffect(()=>{const s=a=>{o.current&&!o.current.contains(a.target)&&i(!1)};return r&&document.addEventListener("click",s),()=>document.removeEventListener("click",s)},[r]),l.jsxs("div",{ref:o,style:{position:"relative"},children:[l.jsxs("button",{type:"button",onClick:()=>i(s=>!s),style:{width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontSize:18,position:"relative"},title:"Notifications",children:["🔔",t>0&&l.jsx("span",{style:{position:"absolute",top:4,right:4,minWidth:16,height:16,borderRadius:99,background:"var(--accent)",color:"#fff",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"},children:t>9?"9+":t})]}),r&&l.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",width:320,maxHeight:400,overflow:"auto",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300},children:[l.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontWeight:700,fontSize:14},children:"Notifications"}),t>0&&l.jsx("button",{type:"button",onClick:n,style:JI,children:"Mark all read"})]}),e.length===0?l.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)",fontSize:13},children:"Nothing new"}):e.map(s=>l.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",background:s.read?"transparent":"rgba(240,22,58,.06)"},children:[l.jsx("div",{style:{fontWeight:600,fontSize:13},children:s.title}),s.body&&l.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:s.body}),l.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:6},children:bo(s.createdAt)})]},s.id))]})]})}const JI={background:"none",border:"none",color:"var(--accent-blue)",fontSize:12,cursor:"pointer",fontWeight:600};function oy({token:e,onBack:t,onSuccess:n}){const[r,i]=b.useState(""),[o,s]=b.useState(""),[a,c]=b.useState(!1),[u,d]=b.useState(""),[h,f]=b.useState(!1),p=async g=>{if(g.preventDefault(),d(""),!e)return d("This reset link is invalid. Please request a new one.");if(r!==o)return d("Passwords do not match.");if(r.length<8)return d("Password must be at least 8 characters.");if(!/[a-z]/.test(r)||!/[A-Z]/.test(r)||!/\d/.test(r))return d("Use at least one uppercase letter, one lowercase letter, and one number.");c(!0);try{const y=await fetch(`${Jt}/auth/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,newPassword:r})}),w=await y.json();if(!y.ok||!w.success)throw new Error(w.message||"Failed to reset password");f(!0),setTimeout(()=>{var m;return(m=n||t)==null?void 0:m()},1400)}catch{d("Something went wrong. Please try again.")}finally{c(!1)}};return l.jsxs("div",{className:"auth-screen",children:[l.jsx("style",{children:ss}),l.jsxs("div",{className:"auth-card",children:[l.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),l.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:h?"Password updated":"Set a new password"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:h?"You can now log in with your new password.":"Choose a strong password to secure your CloudVault account."}),!h&&l.jsxs("form",{onSubmit:p,children:[l.jsx(sy,{label:"New password",value:r,onChange:i}),l.jsx(sy,{label:"Confirm password",value:o,onChange:s}),u&&l.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginBottom:14},children:u}),l.jsx("button",{type:"submit",disabled:a,className:"btn-primary",style:{width:"100%"},children:a?"Updating...":"Update password"})]}),h&&l.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{width:"100%"},children:"Continue to login"}),l.jsx("button",{type:"button",onClick:t,className:"btn-secondary",style:{width:"100%",marginTop:12},children:"Back to login"})]})]})}function sy({label:e,value:t,onChange:n}){return l.jsxs("label",{style:{display:"block",marginBottom:14},children:[l.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:e}),l.jsx("input",{className:"input-field",type:"password",value:t,onChange:r=>n(r.target.value),required:!0,minLength:8,style:{marginTop:6}})]})}const ay={drive:l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V8H4V6.5Z",stroke:"currentColor",strokeWidth:"1.8"}),l.jsx("path",{d:"M4 8h16v9.5A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5V8Z",stroke:"currentColor",strokeWidth:"1.8"})]}),recent:l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"12",cy:"12",r:"8.5",stroke:"currentColor",strokeWidth:"1.8"}),l.jsx("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),starred:l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M12 4.5l2.2 4.5 4.9.7-3.5 3.4.8 4.9L12 15.8l-4.4 2.2.8-4.9-3.5-3.4 4.9-.7L12 4.5Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"})}),shared:l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[l.jsx("circle",{cx:"18",cy:"5",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),l.jsx("circle",{cx:"6",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),l.jsx("circle",{cx:"18",cy:"19",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),l.jsx("path",{d:"M8.3 10.8l7.4-4.1M8.3 13.2l7.4 4.1",stroke:"currentColor",strokeWidth:"1.8"})]}),usage:l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:l.jsx("path",{d:"M5 19V10M10 19V5M15 19v-7M20 19V8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}),trash:l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M9 4h6M5 7h14l-1.2 12.5a1.5 1.5 0 0 1-1.5 1.5H7.7a1.5 1.5 0 0 1-1.5-1.5L5 7Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 10v6M14 10v6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),activity:l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M6 5h12v14H6V5Z",stroke:"currentColor",strokeWidth:"1.8"}),l.jsx("path",{d:"M9 9h6M9 12h4M9 15h5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),admin:l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"})]})};function ZI({name:e,active:t=!1}){return l.jsx("span",{className:`nav-icon${t?" active":""}`,"aria-hidden":"true",children:ay[e]||ay.drive})}const Ja={display:"flex",flexDirection:"column",minHeight:"100vh",background:"var(--bg-primary)",color:"var(--text)",fontFamily:"var(--font)",position:"relative",overflow:"hidden"},Wi=(e,t,n,r=420)=>({position:"fixed",top:e,left:t,width:r,height:r,borderRadius:"50%",background:n,filter:"blur(140px)",opacity:.12,pointerEvents:"none",zIndex:0}),Za={padding:"16px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid var(--border)",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",position:"relative",zIndex:10},Iu={width:34,height:34,background:"var(--gradient)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,boxShadow:"0 4px 16px rgba(217,0,7,0.25)"},el={background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:20,padding:"48px 40px 40px",maxWidth:480,width:"100%",textAlign:"center",boxShadow:"0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset",position:"relative",zIndex:5,animation:"floatIn 0.5s ease-out both"},Pu={width:80,height:80,borderRadius:20,background:"var(--gradient-soft)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:38,margin:"0 auto 24px"},Au={margin:0,fontSize:22,fontWeight:700,letterSpacing:"-0.3px",lineHeight:1.35,wordBreak:"break-word",color:"var(--text)"},Ru={margin:"8px 0 0",color:"var(--text-muted)",fontSize:14,fontWeight:500,letterSpacing:"0.2px"},Yl={width:"100%",height:1,background:"var(--border)",margin:"24px 0",border:"none"},e4={display:"flex",alignItems:"center",gap:12,padding:"14px 16px",background:"var(--bg-card-hover)",borderRadius:14,border:"1px solid var(--border)"},t4={width:40,height:40,borderRadius:"50%",objectFit:"cover",flexShrink:0},n4={width:40,height:40,borderRadius:"50%",background:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:16,color:"#fff",flexShrink:0},r4={textAlign:"left",flex:1,minWidth:0},i4={fontSize:14,fontWeight:600,color:"var(--text)",lineHeight:1.3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o4={fontSize:12,color:"var(--text-muted)",fontWeight:500,lineHeight:1.4,marginTop:2},s4=(e,t)=>({display:"inline-flex",alignItems:"center",gap:5,padding:"5px 12px",borderRadius:999,fontSize:12,fontWeight:600,background:e,color:t,letterSpacing:"0.3px"}),$b={flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"14px 20px",borderRadius:12,fontWeight:600,fontSize:15,fontFamily:"var(--font)",cursor:"pointer",transition:"all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",border:"none",outline:"none",letterSpacing:"-0.2px"},ly={...$b,background:"var(--bg-card-hover)",color:"var(--text)",border:"1px solid var(--border)"},cy={...$b,background:"var(--gradient)",color:"#fff",boxShadow:"0 8px 24px rgba(217,0,7,0.25)"},a4={opacity:.6,cursor:"not-allowed"},l4={margin:"20px 0 0",fontSize:12,color:"var(--text-muted)",fontWeight:500,display:"flex",alignItems:"center",justifyContent:"center",gap:6},c4={padding:"16px 28px",borderTop:"1px solid var(--border)",textAlign:"center",fontSize:12,color:"var(--text-muted)",fontWeight:500,background:"rgba(0,0,0,0.3)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",position:"relative",zIndex:10};function u4(){const e={background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.8s ease infinite",borderRadius:10};return l.jsxs("div",{style:Ja,children:[l.jsx("div",{style:Wi("-120px","-100px","rgba(217,0,7,0.3)")}),l.jsx("div",{style:Wi("60%","70%","rgba(59,130,246,0.2)",350)}),l.jsxs("header",{style:Za,children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx("div",{style:{...e,width:34,height:34,borderRadius:10}}),l.jsx("div",{style:{...e,width:100,height:18}})]}),l.jsx("div",{style:{...e,width:130,height:16}})]}),l.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:l.jsxs("div",{style:{...el,animation:"none"},children:[l.jsx("div",{style:{...e,width:80,height:80,borderRadius:20,margin:"0 auto 24px"}}),l.jsx("div",{style:{...e,width:"70%",height:22,margin:"0 auto 12px"}}),l.jsx("div",{style:{...e,width:"45%",height:14,margin:"0 auto 24px"}}),l.jsx("div",{style:Yl}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",background:"var(--bg-card-hover)",borderRadius:14},children:[l.jsx("div",{style:{...e,width:40,height:40,borderRadius:"50%"}}),l.jsxs("div",{style:{flex:1},children:[l.jsx("div",{style:{...e,width:"60%",height:14,marginBottom:6}}),l.jsx("div",{style:{...e,width:"80%",height:12}})]})]}),l.jsx("div",{style:{...Yl,margin:"24px 0 20px"}}),l.jsxs("div",{style:{display:"flex",gap:12},children:[l.jsx("div",{style:{...e,flex:1,height:48,borderRadius:12}}),l.jsx("div",{style:{...e,flex:1,height:48,borderRadius:12}})]})]})})]})}function d4({avatarUrl:e,name:t}){const[n,r]=b.useState(!1),i=(t||"U").charAt(0).toUpperCase();return e&&!n?l.jsx("img",{src:e,alt:t||"User",style:t4,onError:()=>r(!0)}):l.jsx("div",{style:n4,children:i})}function h4({token:e}){const[t,n]=b.useState(!0),[r,i]=b.useState(null),[o,s]=b.useState(null),[a,c]=b.useState(""),[u,d]=b.useState(!1),[h,f]=b.useState(!1),[p,g]=b.useState(!1),[y,w]=b.useState(!1),[m,x]=b.useState(!1),v=async(D="")=>{n(!0),s(null);try{const F=`/share/${e}${D?`?password=${encodeURIComponent(D)}`:""}`,W=await wt(F,{},null);i(W),d(!1)}catch(F){const W=(F.message||"").toLowerCase();W.includes("password required")||W.includes("invalid password")||W.includes("forbidden")||W.includes("session expired")?(d(!0),D&&s("Invalid password")):s(F.message||"Failed to load shared link.")}finally{n(!1)}};b.useEffect(()=>{v()},[e]);const k=async()=>{if(!(!r||h)){f(!0);try{const D=`/share/${e}/download${a?`?password=${encodeURIComponent(a)}`:""}`,F=await fetch(`${Jt}${D}`);if(!F.ok)throw new Error("Download failed");const W=await F.blob();R1(W,r.file.name)}catch(D){s(D.message)}finally{f(!1)}}},T=async()=>{const D=`/share/${e}/preview${a?`?password=${encodeURIComponent(a)}`:""}`,F=await fetch(`${Jt}${D}`);if(!F.ok)throw new Error("Failed to load preview");return await F.blob()};if(t)return l.jsx(u4,{});if(u&&!r)return l.jsxs("div",{style:Ja,children:[l.jsx("div",{style:Wi("-120px","-100px","rgba(217,0,7,0.3)")}),l.jsx("header",{style:Za,children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx("div",{style:Iu,children:"☁️"}),l.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]})}),l.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:l.jsxs("div",{style:{...el,maxWidth:420},children:[l.jsx("div",{style:{...Pu,background:"rgba(217,0,7,0.1)",border:"1px solid rgba(217,0,7,0.2)"},children:"🔒"}),l.jsx("h2",{style:{...Au,fontSize:22,marginBottom:8},children:"Password Protected"}),l.jsx("p",{style:{...Ru,marginBottom:28},children:"Enter the password to access this shared file."}),l.jsxs("form",{onSubmit:D=>{D.preventDefault(),v(a)},children:[l.jsx("input",{type:"password",placeholder:"Enter password",value:a,onChange:D=>c(D.target.value),autoFocus:!0,style:{width:"100%",padding:"14px 18px",borderRadius:12,border:"1px solid var(--border)",background:"var(--bg-card-hover)",color:"var(--text)",fontFamily:"var(--font)",fontSize:15,fontWeight:500,outline:"none",transition:"border-color 0.2s",marginBottom:16,boxSizing:"border-box"},onFocus:D=>D.target.style.borderColor="var(--accent)",onBlur:D=>D.target.style.borderColor="var(--border)"}),o&&l.jsx("p",{style:{color:"var(--danger)",margin:"0 0 16px",fontSize:13,fontWeight:600},children:o}),l.jsx("button",{type:"submit",style:{...cy,width:"100%",flex:"none"},children:"Unlock File"})]})]})})]});if(o&&!r)return l.jsxs("div",{style:Ja,children:[l.jsx("div",{style:Wi("-120px","-100px","rgba(217,0,7,0.3)")}),l.jsx("header",{style:Za,children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx("div",{style:Iu,children:"☁️"}),l.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]})}),l.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:l.jsxs("div",{style:{...el,maxWidth:420},children:[l.jsx("div",{style:{...Pu,background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.2)"},children:"⚠️"}),l.jsx("h2",{style:{...Au,fontSize:22,marginBottom:8},children:"Link Unavailable"}),l.jsx("p",{style:{...Ru,marginBottom:0},children:o})]})})]});const{file:C,sharedBy:j,permission:E,expiresAt:R}=r,P=$f(C.mimeType),N=E==="download"||E==="edit";return l.jsxs("div",{style:Ja,children:[l.jsx("div",{style:Wi("-120px","-100px","rgba(217,0,7,0.3)")}),l.jsx("div",{style:Wi("60%","70%","rgba(59,130,246,0.2)",350)}),l.jsxs("header",{style:Za,children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx("div",{style:Iu,children:"☁️"}),l.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--text-muted)",fontSize:13,fontWeight:500},children:[l.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,color:"var(--accent)"},children:[l.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),l.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),"Encrypted"]}),l.jsx("span",{children:"•"}),l.jsx("span",{children:"Shared securely"})]})]}),l.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24,position:"relative",zIndex:5},children:l.jsxs("div",{style:el,children:[l.jsx("div",{style:Pu,children:Gs(C.mimeType)}),l.jsx("h1",{style:Au,children:C.name}),l.jsxs("p",{style:Ru,children:[Ge(C.size),l.jsx("span",{style:{margin:"0 8px",opacity:.4},children:"•"}),C.mimeType||"Unknown type"]}),l.jsx("div",{style:Yl}),l.jsxs("div",{style:e4,children:[l.jsx(d4,{avatarUrl:j==null?void 0:j.avatarUrl,name:j==null?void 0:j.fullName}),l.jsxs("div",{style:r4,children:[l.jsx("div",{style:i4,children:(j==null?void 0:j.fullName)||"A user"}),l.jsx("div",{style:o4,children:"shared this file with you"})]}),l.jsx("div",{style:s4(N?"rgba(34,197,94,0.12)":"rgba(59,130,246,0.12)",N?"#22c55e":"#3b82f6"),children:N?"📥 Download":"👁 View only"})]}),l.jsx("div",{style:{...Yl,margin:"24px 0 20px"}}),l.jsxs("div",{style:{display:"flex",gap:12},children:[P&&l.jsxs("button",{onClick:()=>g(!0),onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),style:{...ly,transform:y?"translateY(-2px)":"none",borderColor:y?"var(--border-hover)":"var(--border)",boxShadow:y?"0 8px 24px rgba(0,0,0,0.2)":"none"},children:[l.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),l.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Preview"]}),N&&l.jsxs("button",{onClick:k,disabled:h,onMouseEnter:()=>!h&&x(!0),onMouseLeave:()=>x(!1),style:{...cy,...h?a4:{},transform:m&&!h?"translateY(-2px)":"none",boxShadow:m&&!h?"0 12px 32px rgba(217,0,7,0.35)":"0 8px 24px rgba(217,0,7,0.25)"},children:[l.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"7 10 12 15 17 10"}),l.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),h?"Downloading…":"Download"]}),!N&&!P&&l.jsx("div",{style:{...ly,cursor:"default",justifyContent:"center",opacity:.6},children:"👁 View Only"})]}),R&&l.jsxs("div",{style:l4,children:[l.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("polyline",{points:"12 6 12 12 16 14"})]}),"Expires ",new Date(R).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]})]})}),l.jsxs("footer",{style:c4,children:["Powered by ",l.jsx("strong",{style:{color:"var(--text)",fontWeight:700},children:"CloudVault"})," · End-to-end secure file sharing"]}),p&&l.jsx(_b,{file:C,token:null,onClose:()=>g(!1),customFetchBlob:T})]})}const sp=b.createContext({});function ap(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const f4=typeof window<"u",Gl=f4?b.useLayoutEffect:b.useEffect,Tc=b.createContext(null);function lp(e,t){e.indexOf(t)===-1&&e.push(t)}function Kl(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const An=(e,t,n)=>n>t?t:n<e?e:n;let jc=()=>{};const Ar={},Hb=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Yb=e=>typeof e=="object"&&e!==null,Gb=e=>/^0[^.\s]+$/u.test(e);function Kb(e){let t;return()=>(t===void 0&&(t=e()),t)}const qt=e=>e,Zs=(...e)=>e.reduce((t,n)=>r=>n(t(r))),zs=(e,t,n)=>{const r=t-e;return r?(n-e)/r:1};class cp{constructor(){this.subscriptions=[]}add(t){return lp(this.subscriptions,t),()=>Kl(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Mt=e=>e*1e3,Gt=e=>e/1e3,qb=(e,t)=>t?e*(1e3/t):0,Xb=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,p4=1e-7,m4=12;function g4(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=Xb(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>p4&&++a<m4);return s}function ea(e,t,n,r){if(e===t&&n===r)return qt;const i=o=>g4(o,0,1,e,n);return o=>o===0||o===1?o:Xb(i(o),t,r)}const Qb=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Jb=e=>t=>1-e(1-t),Zb=ea(.33,1.53,.69,.99),up=Jb(Zb),ew=Qb(up),tw=e=>e>=1?1:(e*=2)<1?.5*up(e):.5*(2-Math.pow(2,-10*(e-1))),dp=e=>1-Math.sin(Math.acos(e)),nw=Jb(dp),rw=Qb(dp),y4=ea(.42,0,1,1),x4=ea(0,0,.58,1),iw=ea(.42,0,.58,1),v4=e=>Array.isArray(e)&&typeof e[0]!="number",ow=e=>Array.isArray(e)&&typeof e[0]=="number",b4={linear:qt,easeIn:y4,easeInOut:iw,easeOut:x4,circIn:dp,circInOut:rw,circOut:nw,backIn:up,backInOut:ew,backOut:Zb,anticipate:tw},w4=e=>typeof e=="string",uy=e=>{if(ow(e)){jc(e.length===4);const[t,n,r,i]=e;return ea(t,n,r,i)}else if(w4(e))return b4[e];return e},Ta=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function k4(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(u){o.has(u)&&(c.schedule(u),e()),u(s)}const c={schedule:(u,d=!1,h=!1)=>{const p=h&&r?t:n;return d&&o.add(u),p.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0;const d=t;t=n,n=d,t.forEach(a),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const S4=40;function sw(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Ta.reduce((v,k)=>(v[k]=k4(o),v),{}),{setup:a,read:c,resolveKeyframes:u,preUpdate:d,update:h,preRender:f,render:p,postRender:g}=s,y=()=>{const v=Ar.useManualTiming,k=v?i.timestamp:performance.now();n=!1,v||(i.delta=r?1e3/60:Math.max(Math.min(k-i.timestamp,S4),1)),i.timestamp=k,i.isProcessing=!0,a.process(i),c.process(i),u.process(i),d.process(i),h.process(i),f.process(i),p.process(i),g.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(y))},w=()=>{n=!0,r=!0,i.isProcessing||e(y)};return{schedule:Ta.reduce((v,k)=>{const T=s[k];return v[k]=(C,j=!1,E=!1)=>(n||w(),T.schedule(C,j,E)),v},{}),cancel:v=>{for(let k=0;k<Ta.length;k++)s[Ta[k]].cancel(v)},state:i,steps:s}}const{schedule:Se,cancel:Rr,state:Je,steps:Nu}=sw(typeof requestAnimationFrame<"u"?requestAnimationFrame:qt,!0);let tl;function C4(){tl=void 0}const dt={now:()=>(tl===void 0&&dt.set(Je.isProcessing||Ar.useManualTiming?Je.timestamp:performance.now()),tl),set:e=>{tl=e,queueMicrotask(C4)}},aw=e=>t=>typeof t=="string"&&t.startsWith(e),lw=aw("--"),_4=aw("var(--"),hp=e=>_4(e)?E4.test(e.split("/*")[0].trim()):!1,E4=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function dy(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Co={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Os={...Co,transform:e=>An(0,1,e)},ja={...Co,default:1},us=e=>Math.round(e*1e5)/1e5,fp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function T4(e){return e==null}const j4=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,pp=(e,t)=>n=>!!(typeof n=="string"&&j4.test(n)&&n.startsWith(e)||t&&!T4(n)&&Object.prototype.hasOwnProperty.call(n,t)),cw=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(fp);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},I4=e=>An(0,255,e),Du={...Co,transform:e=>Math.round(I4(e))},ri={test:pp("rgb","red"),parse:cw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Du.transform(e)+", "+Du.transform(t)+", "+Du.transform(n)+", "+us(Os.transform(r))+")"};function P4(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const uh={test:pp("#"),parse:P4,transform:ri.transform},ta=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Dn=ta("deg"),In=ta("%"),H=ta("px"),A4=ta("vh"),R4=ta("vw"),hy={...In,parse:e=>In.parse(e)/100,transform:e=>In.transform(e*100)},$i={test:pp("hsl","hue"),parse:cw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+In.transform(us(t))+", "+In.transform(us(n))+", "+us(Os.transform(r))+")"},Be={test:e=>ri.test(e)||uh.test(e)||$i.test(e),parse:e=>ri.test(e)?ri.parse(e):$i.test(e)?$i.parse(e):uh.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ri.transform(e):$i.transform(e),getAnimatableNone:e=>{const t=Be.parse(e);return t.alpha=0,Be.transform(t)}},N4=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function D4(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(fp))==null?void 0:t.length)||0)+(((n=e.match(N4))==null?void 0:n.length)||0)>0}const uw="number",dw="color",M4="var",L4="var(",fy="${}",z4=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function mo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(z4,c=>(Be.test(c)?(r.color.push(o),i.push(dw),n.push(Be.parse(c))):c.startsWith(L4)?(r.var.push(o),i.push(M4),n.push(c)):(r.number.push(o),i.push(uw),n.push(parseFloat(c))),++o,fy)).split(fy);return{values:n,split:a,indexes:r,types:i}}function O4(e){return mo(e).values}function hw({split:e,types:t}){const n=e.length;return r=>{let i="";for(let o=0;o<n;o++)if(i+=e[o],r[o]!==void 0){const s=t[o];s===uw?i+=us(r[o]):s===dw?i+=Be.transform(r[o]):i+=r[o]}return i}}function F4(e){return hw(mo(e))}const B4=e=>typeof e=="number"?0:Be.test(e)?Be.getAnimatableNone(e):e,V4=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:B4(e);function U4(e){const t=mo(e);return hw(t)(t.values.map((r,i)=>V4(r,t.split[i])))}const fn={test:D4,parse:O4,createTransformer:F4,getAnimatableNone:U4};function Mu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function W4({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;i=Mu(c,a,e+1/3),o=Mu(c,a,e),s=Mu(c,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function ql(e,t){return n=>n>0?t:e}const ke=(e,t,n)=>e+(t-e)*n,Lu=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},$4=[uh,ri,$i],H4=e=>$4.find(t=>t.test(e));function py(e){const t=H4(e);if(!t)return!1;let n=t.parse(e);return t===$i&&(n=W4(n)),n}const my=(e,t)=>{const n=py(e),r=py(t);if(!n||!r)return ql(e,t);const i={...n};return o=>(i.red=Lu(n.red,r.red,o),i.green=Lu(n.green,r.green,o),i.blue=Lu(n.blue,r.blue,o),i.alpha=ke(n.alpha,r.alpha,o),ri.transform(i))},dh=new Set(["none","hidden"]);function Y4(e,t){return dh.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function G4(e,t){return n=>ke(e,t,n)}function mp(e){return typeof e=="number"?G4:typeof e=="string"?hp(e)?ql:Be.test(e)?my:X4:Array.isArray(e)?fw:typeof e=="object"?Be.test(e)?my:K4:ql}function fw(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>mp(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function K4(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=mp(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function q4(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],a=e.values[s]??0;n[i]=a,r[o]++}return n}const X4=(e,t)=>{const n=fn.createTransformer(t),r=mo(e),i=mo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?dh.has(e)&&!i.values.length||dh.has(t)&&!r.values.length?Y4(e,t):Zs(fw(q4(r,i),i.values),n):ql(e,t)};function pw(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ke(e,t,n):mp(e)(e,t)}const Q4=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>Se.update(t,n),stop:()=>Rr(t),now:()=>Je.isProcessing?Je.timestamp:dt.now()}},mw=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Xl=2e4;function gp(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Xl;)t+=n,r=e.next(t);return t>=Xl?1/0:t}function J4(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(gp(r),Xl);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:Gt(i)}}const Me={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function hh(e,t){return e*Math.sqrt(1-t*t)}const Z4=12;function eP(e,t,n){let r=n;for(let i=1;i<Z4;i++)r=r-e(r)/t(r);return r}const zu=.001;function tP({duration:e=Me.duration,bounce:t=Me.bounce,velocity:n=Me.velocity,mass:r=Me.mass}){let i,o,s=1-t;s=An(Me.minDamping,Me.maxDamping,s),e=An(Me.minDuration,Me.maxDuration,Gt(e)),s<1?(i=u=>{const d=u*s,h=d*e,f=d-n,p=hh(u,s),g=Math.exp(-h);return zu-f/p*g},o=u=>{const h=u*s*e,f=h*n+n,p=Math.pow(s,2)*Math.pow(u,2)*e,g=Math.exp(-h),y=hh(Math.pow(u,2),s);return(-i(u)+zu>0?-1:1)*((f-p)*g)/y}):(i=u=>{const d=Math.exp(-u*e),h=(u-n)*e+1;return-zu+d*h},o=u=>{const d=Math.exp(-u*e),h=(n-u)*(e*e);return d*h});const a=5/e,c=eP(i,o,a);if(e=Mt(e),isNaN(c))return{stiffness:Me.stiffness,damping:Me.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const nP=["duration","bounce"],rP=["stiffness","damping","mass"];function gy(e,t){return t.some(n=>e[n]!==void 0)}function iP(e){let t={velocity:Me.velocity,stiffness:Me.stiffness,damping:Me.damping,mass:Me.mass,isResolvedFromDuration:!1,...e};if(!gy(e,rP)&&gy(e,nP))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*An(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Me.mass,stiffness:i,damping:o}}else{const n=tP({...e,velocity:0});t={...t,...n,mass:Me.mass},t.isResolvedFromDuration=!0}return t}function Ql(e=Me.visualDuration,t=Me.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:h,velocity:f,isResolvedFromDuration:p}=iP({...n,velocity:-Gt(n.velocity||0)}),g=f||0,y=u/(2*Math.sqrt(c*d)),w=s-o,m=Gt(Math.sqrt(c/d)),x=Math.abs(w)<5;r||(r=x?Me.restSpeed.granular:Me.restSpeed.default),i||(i=x?Me.restDelta.granular:Me.restDelta.default);let v,k,T,C,j,E;if(y<1)T=hh(m,y),C=(g+y*m*w)/T,v=P=>{const N=Math.exp(-y*m*P);return s-N*(C*Math.sin(T*P)+w*Math.cos(T*P))},j=y*m*C+w*T,E=y*m*w-C*T,k=P=>Math.exp(-y*m*P)*(j*Math.sin(T*P)+E*Math.cos(T*P));else if(y===1){v=N=>s-Math.exp(-m*N)*(w+(g+m*w)*N);const P=g+m*w;k=N=>Math.exp(-m*N)*(m*P*N-g)}else{const P=m*Math.sqrt(y*y-1);v=W=>{const U=Math.exp(-y*m*W),Z=Math.min(P*W,300);return s-U*((g+y*m*w)*Math.sinh(Z)+P*w*Math.cosh(Z))/P};const N=(g+y*m*w)/P,D=y*m*N-w*P,F=y*m*w-N*P;k=W=>{const U=Math.exp(-y*m*W),Z=Math.min(P*W,300);return U*(D*Math.sinh(Z)+F*Math.cosh(Z))}}const R={calculatedDuration:p&&h||null,velocity:P=>Mt(k(P)),next:P=>{if(!p&&y<1){const D=Math.exp(-y*m*P),F=Math.sin(T*P),W=Math.cos(T*P),U=s-D*(C*F+w*W),Z=Mt(D*(j*F+E*W));return a.done=Math.abs(Z)<=r&&Math.abs(s-U)<=i,a.value=a.done?s:U,a}const N=v(P);if(p)a.done=P>=h;else{const D=Mt(k(P));a.done=Math.abs(D)<=r&&Math.abs(s-N)<=i}return a.value=a.done?s:N,a},toString:()=>{const P=Math.min(gp(R),Xl),N=mw(D=>R.next(P*D).value,P,30);return P+"ms "+N},toTransition:()=>{}};return R}Ql.applyToOptions=e=>{const t=J4(e,100,Ql);return e.ease=t.ease,e.duration=Mt(t.duration),e.type="keyframes",e};const oP=5;function gw(e,t,n){const r=Math.max(t-oP,0);return qb(n-e(r),t-r)}function fh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:c,restDelta:u=.5,restSpeed:d}){const h=e[0],f={done:!1,value:h},p=E=>a!==void 0&&E<a||c!==void 0&&E>c,g=E=>a===void 0?c:c===void 0||Math.abs(a-E)<Math.abs(c-E)?a:c;let y=n*t;const w=h+y,m=s===void 0?w:s(w);m!==w&&(y=m-h);const x=E=>-y*Math.exp(-E/r),v=E=>m+x(E),k=E=>{const R=x(E),P=v(E);f.done=Math.abs(R)<=u,f.value=f.done?m:P};let T,C;const j=E=>{p(f.value)&&(T=E,C=Ql({keyframes:[f.value,g(f.value)],velocity:gw(v,E,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return j(0),{calculatedDuration:null,next:E=>{let R=!1;return!C&&T===void 0&&(R=!0,k(E),j(E)),T!==void 0&&E>=T?C.next(E-T):(!R&&k(E),f)}}}function sP(e,t,n){const r=[],i=n||Ar.mix||pw,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||qt:t;a=Zs(c,a)}r.push(a)}return r}function aP(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(jc(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=sP(t,r,i),c=a.length,u=d=>{if(s&&d<e[0])return t[0];let h=0;if(c>1)for(;h<e.length-2&&!(d<e[h+1]);h++);const f=zs(e[h],e[h+1],d);return a[h](f)};return n?d=>u(An(e[0],e[o-1],d)):u}function lP(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=zs(0,t,r);e.push(ke(n,1,i))}}function cP(e){const t=[0];return lP(t,e.length-1),t}function uP(e,t){return e.map(n=>n*t)}function dP(e,t){return e.map(()=>t||iw).splice(0,e.length-1)}function ds({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=v4(r)?r.map(uy):uy(r),o={done:!1,value:t[0]},s=uP(n&&n.length===t.length?n:cP(t),e),a=aP(s,t,{ease:Array.isArray(i)?i:dP(t,i)});return{calculatedDuration:e,next:c=>(o.value=a(c),o.done=c>=e,o)}}const hP=e=>e!==null;function Ic(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(hP),a=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const fP={decay:fh,inertia:fh,tween:ds,keyframes:ds,spring:Ql};function yw(e){typeof e.type=="string"&&(e.type=fP[e.type])}class yp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const pP=e=>e/100;class Jl extends yp{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==dt.now()&&this.tick(dt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;yw(t);const{type:n=ds,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:a}=t;const c=n||ds;c!==ds&&typeof a[0]!="number"&&(this.mixKeyframes=Zs(pP,pw(a[0],a[1])),a=[0,100]);const u=c({...t,keyframes:a});o==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...a].reverse(),velocity:-s})),u.calculatedDuration===null&&(u.calculatedDuration=gp(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:d,repeat:h,repeatType:f,repeatDelay:p,type:g,onUpdate:y,finalKeyframe:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const m=this.currentTime-u*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?m<0:m>i;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let v=this.currentTime,k=r;if(h){const E=Math.min(this.currentTime,i)/a;let R=Math.floor(E),P=E%1;!P&&E>=1&&(P=1),P===1&&R--,R=Math.min(R,h+1),!!(R%2)&&(f==="reverse"?(P=1-P,p&&(P-=p/a)):f==="mirror"&&(k=s)),v=An(0,1,P)*a}let T;x?(this.delayState.value=d[0],T=this.delayState):T=k.next(v),o&&!x&&(T.value=o(T.value));let{done:C}=T;!x&&c!==null&&(C=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const j=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return j&&g!==fh&&(T.value=Ic(d,this.options,w,this.speed)),y&&y(T.value),j&&this.finish(),T}then(t,n){return this.finished.then(t,n)}get duration(){return Gt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Gt(t)}get time(){return Gt(this.currentTime)}set time(t){t=Mt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return gw(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(dt.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=Gt(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=Q4,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(dt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function mP(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const ii=e=>e*180/Math.PI,ph=e=>{const t=ii(Math.atan2(e[1],e[0]));return mh(t)},gP={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:ph,rotateZ:ph,skewX:e=>ii(Math.atan(e[1])),skewY:e=>ii(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},mh=e=>(e=e%360,e<0&&(e+=360),e),yy=ph,xy=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),vy=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),yP={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:xy,scaleY:vy,scale:e=>(xy(e)+vy(e))/2,rotateX:e=>mh(ii(Math.atan2(e[6],e[5]))),rotateY:e=>mh(ii(Math.atan2(-e[2],e[0]))),rotateZ:yy,rotate:yy,skewX:e=>ii(Math.atan(e[4])),skewY:e=>ii(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function gh(e){return e.includes("scale")?1:0}function yh(e,t){if(!e||e==="none")return gh(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=yP,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=gP,i=a}if(!i)return gh(t);const o=r[t],s=i[1].split(",").map(vP);return typeof o=="function"?o(s):s[o]}const xP=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return yh(n,t)};function vP(e){return parseFloat(e.trim())}const _o=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Eo=new Set([..._o,"pathRotation"]),by=e=>e===Co||e===H,bP=new Set(["x","y","z"]),wP=_o.filter(e=>!bP.has(e));function kP(e){const t=[];return wP.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const yr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>yh(t,"x"),y:(e,{transform:t})=>yh(t,"y")};yr.translateX=yr.x;yr.translateY=yr.y;const li=new Set;let xh=!1,vh=!1,bh=!1;function xw(){if(vh){const e=Array.from(li).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=kP(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))==null||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}vh=!1,xh=!1,li.forEach(e=>e.complete(bh)),li.clear()}function vw(){li.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(vh=!0)})}function SP(){bh=!0,vw(),xw(),bh=!1}class xp{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(li.add(this),xh||(xh=!0,Se.read(vw),Se.resolveKeyframes(xw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const a=r.readValue(n,s);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}mP(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),li.delete(this)}cancel(){this.state==="scheduled"&&(li.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const CP=e=>e.startsWith("--");function bw(e,t,n){CP(t)?e.style.setProperty(t,n):e.style[t]=n}const _P={};function ww(e,t){const n=Kb(e);return()=>_P[t]??n()}const EP=ww(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),kw=ww(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Xo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,wy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xo([0,.65,.55,1]),circOut:Xo([.55,0,1,.45]),backIn:Xo([.31,.01,.66,-.59]),backOut:Xo([.33,1.53,.69,.99])};function Sw(e,t){if(e)return typeof e=="function"?kw()?mw(e,t):"ease-out":ow(e)?Xo(e):Array.isArray(e)?e.map(n=>Sw(n,t)||wy.easeOut):wy[e]}function TP(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:c}={},u=void 0){const d={[t]:n};c&&(d.offset=c);const h=Sw(a,i);Array.isArray(h)&&(d.easing=h);const f={delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return u&&(f.pseudoElement=u),e.animate(d,f)}function Cw(e){return typeof e=="function"&&"applyToOptions"in e}function jP({type:e,...t}){return Cw(e)&&kw()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class _w extends yp{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:c}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,jc(typeof t.type!="string");const u=jP(t);this.animation=TP(n,r,i,u,o),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=Ic(i,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(d),bw(n,r,d),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Gt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Gt(t)}get time(){return Gt(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Mt(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:i}){var o;return this.allowFlatten&&((o=this.animation.effect)==null||o.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&EP()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),qt):i(this)}}const Ew={anticipate:tw,backInOut:ew,circInOut:rw};function IP(e){return e in Ew}function PP(e){typeof e.ease=="string"&&IP(e.ease)&&(e.ease=Ew[e.ease])}const Ou=10;class AP extends _w{constructor(t){PP(t),yw(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new Jl({...s,autoplay:!1}),c=Math.max(Ou,dt.now()-this.startTime),u=An(0,Ou,c-Ou),d=a.sample(c).value,{name:h}=this.options;o&&h&&bw(o,h,d),n.setWithVelocity(a.sample(Math.max(0,c-u)).value,d,u),a.stop()}}const ky=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(fn.test(e)||e==="0")&&!e.startsWith("url("));function RP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function NP(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=ky(i,t),a=ky(o,t);return!s||!a?!1:RP(e)||(n==="spring"||Cw(n))&&r}function wh(e){e.duration=0,e.type="keyframes"}const Tw=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),DP=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function MP(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&DP.test(e[t]))return!0;return!1}const LP=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),zP=Kb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function OP(e){var h;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s,keyframes:a}=e,c=(h=t==null?void 0:t.owner)==null?void 0:h.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;const{onUpdate:u,transformTemplate:d}=t.owner.getProps();return zP()&&n&&(Tw.has(n)||LP.has(n)&&MP(a))&&(n!=="transform"||!d)&&!u&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const FP=40;class BP extends yp{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:c,motionValue:u,element:d,...h}){var g;super(),this.stop=()=>{var y,w;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(w=this.keyframeResolver)==null||w.cancel()},this.createdAt=dt.now();const f={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:c,motionValue:u,element:d,...h},p=(d==null?void 0:d.KeyframeResolver)||xp;this.keyframeResolver=new p(a,(y,w,m)=>this.onKeyframesResolved(y,w,f,!m),c,u,d),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(t,n,r,i){var m,x;this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:c,isHandoff:u,onUpdate:d}=r;this.resolvedAt=dt.now();let h=!0;NP(t,o,s,a)||(h=!1,(Ar.instantAnimations||!c)&&(d==null||d(Ic(t,r,n))),t[0]=t[t.length-1],wh(r),r.repeat=0);const p={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>FP?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},g=h&&!u&&OP(p),y=(x=(m=p.motionValue)==null?void 0:m.owner)==null?void 0:x.current;let w;if(g)try{w=new AP({...p,element:y})}catch{w=new Jl(p)}else w=new Jl(p);w.finished.then(()=>{this.notifyFinished()}).catch(qt),this.pendingTimeline&&(this.stopTimeline=w.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=w}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),SP()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function jw(e,t,n,r=0,i=1){const o=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),s=e.size,a=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:a-o*r}const Sy=30,VP=e=>!isNaN(parseFloat(e));class UP{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=dt.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=dt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=VP(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new cp);const r=this.events[t].add(n);return t==="change"?()=>{r(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=dt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Sy)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Sy);return qb(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function go(e,t){return new UP(e,t)}function Iw(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function vp(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?Iw(n,e):n}const WP={type:"spring",stiffness:500,damping:25,restSpeed:10},$P=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),HP={type:"keyframes",duration:.8},YP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},GP=(e,{keyframes:t})=>t.length>2?HP:Eo.has(e)?e.startsWith("scale")?$P(t[1]):WP:YP,KP=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function qP(e){for(const t in e)if(!KP.has(t))return!0;return!1}const bp=(e,t,n,r={},i,o)=>s=>{const a=vp(r,e)||{},c=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Mt(c);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};qP(a)||Object.assign(d,GP(e,d)),d.duration&&(d.duration=Mt(d.duration)),d.repeatDelay&&(d.repeatDelay=Mt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let h=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(wh(d),d.delay===0&&(h=!0)),(Ar.instantAnimations||Ar.skipAnimations||i!=null&&i.shouldSkipAnimations||a.skipAnimations)&&(h=!0,wh(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,h&&!o&&t.get()!==void 0){const f=Ic(d.keyframes,a);if(f!==void 0){Se.update(()=>{d.onUpdate(f),d.onComplete()});return}}return a.isSync?new Jl(d):new BP(d)},XP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function QP(e){const t=XP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Pw(e,t,n=1){const[r,i]=QP(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Hb(s)?parseFloat(s):s}return hp(i)?Pw(i,t,n+1):i}function Cy(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function wp(e,t,n,r){if(typeof t=="function"){const[i,o]=Cy(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Cy(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function ci(e,t,n){const r=e.getProps();return wp(r,t,n!==void 0?n:r.custom,e)}const Aw=new Set(["width","height","top","left","right","bottom",..._o]),kh=e=>Array.isArray(e);function JP(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,go(n))}function ZP(e){return kh(e)?e[e.length-1]||0:e}function eA(e,t){const n=ci(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=ZP(o[s]);JP(e,s,a)}}const Ze=e=>!!(e&&e.getVelocity);function tA(e){return!!(Ze(e)&&e.add)}function Sh(e,t){const n=e.getValue("willChange");if(tA(n))return n.add(t);if(!n&&Ar.WillChange){const r=new Ar.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function kp(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const nA="framerAppearId",Rw="data-"+kp(nA);function Nw(e){return e.props[Rw]}function rA({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Dw(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o,transitionEnd:s,...a}=t;const c=e.getDefaultTransition();o=o?Iw(o,c):c;const u=o==null?void 0:o.reduceMotion,d=o==null?void 0:o.skipAnimations;r&&(o=r);const h=[],f=i&&e.animationState&&e.animationState.getState()[i],p=o==null?void 0:o.path;p&&p.animateVisualElement(e,a,o,n,h);for(const g in a){const y=e.getValue(g,e.latestValues[g]??null),w=a[g];if(w===void 0||f&&rA(f,g))continue;const m={delay:n,...vp(o||{},g)};d&&(m.skipAnimations=!0);const x=y.get();if(x!==void 0&&!y.isAnimating()&&!Array.isArray(w)&&w===x&&!m.velocity){Se.update(()=>y.set(w));continue}let v=!1;if(window.MotionHandoffAnimation){const C=Nw(e);if(C){const j=window.MotionHandoffAnimation(C,g,Se);j!==null&&(m.startTime=j,v=!0)}}Sh(e,g);const k=u??e.shouldReduceMotion;y.start(bp(g,y,w,k&&Aw.has(g)?{type:!1}:m,e,v));const T=y.animation;T&&h.push(T)}if(s){const g=()=>Se.update(()=>{s&&eA(e,s)});h.length?Promise.all(h).then(g):g()}return h}function Ch(e,t,n={}){var c;const r=ci(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Dw(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:h,staggerDirection:f}=i;return iA(e,t,u,d,h,f,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[u,d]=a==="beforeChildren"?[o,s]:[s,o];return u().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function iA(e,t,n=0,r=0,i=0,o=1,s){const a=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),a.push(Ch(c,t,{...s,delay:n+(typeof r=="function"?0:r)+jw(e.variantChildren,c,r,i,o)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(a)}function oA(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Ch(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Ch(e,t,n);else{const i=typeof t=="function"?ci(e,t,n.custom):t;r=Promise.all(Dw(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const sA={test:e=>e==="auto",parse:e=>e},Mw=e=>t=>t.test(e),Lw=[Co,H,In,Dn,R4,A4,sA],_y=e=>Lw.find(Mw(e));function aA(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Gb(e):!0}const lA=new Set(["brightness","contrast","saturate","opacity"]);function cA(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(fp)||[];if(!r)return e;const i=n.replace(r,"");let o=lA.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const uA=/\b([a-z-]*)\(.*?\)/gu,_h={...fn,getAnimatableNone:e=>{const t=e.match(uA);return t?t.map(cA).join(" "):e}},Eh={...fn,getAnimatableNone:e=>{const t=fn.parse(e);return fn.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},Ey={...Co,transform:Math.round},dA={rotate:Dn,pathRotation:Dn,rotateX:Dn,rotateY:Dn,rotateZ:Dn,scale:ja,scaleX:ja,scaleY:ja,scaleZ:ja,skew:Dn,skewX:Dn,skewY:Dn,distance:H,translateX:H,translateY:H,translateZ:H,x:H,y:H,z:H,perspective:H,transformPerspective:H,opacity:Os,originX:hy,originY:hy,originZ:H},Zl={borderWidth:H,borderTopWidth:H,borderRightWidth:H,borderBottomWidth:H,borderLeftWidth:H,borderRadius:H,borderTopLeftRadius:H,borderTopRightRadius:H,borderBottomRightRadius:H,borderBottomLeftRadius:H,width:H,maxWidth:H,height:H,maxHeight:H,top:H,right:H,bottom:H,left:H,inset:H,insetBlock:H,insetBlockStart:H,insetBlockEnd:H,insetInline:H,insetInlineStart:H,insetInlineEnd:H,padding:H,paddingTop:H,paddingRight:H,paddingBottom:H,paddingLeft:H,paddingBlock:H,paddingBlockStart:H,paddingBlockEnd:H,paddingInline:H,paddingInlineStart:H,paddingInlineEnd:H,margin:H,marginTop:H,marginRight:H,marginBottom:H,marginLeft:H,marginBlock:H,marginBlockStart:H,marginBlockEnd:H,marginInline:H,marginInlineStart:H,marginInlineEnd:H,fontSize:H,backgroundPositionX:H,backgroundPositionY:H,...dA,zIndex:Ey,fillOpacity:Os,strokeOpacity:Os,numOctaves:Ey},hA={...Zl,color:Be,backgroundColor:Be,outlineColor:Be,fill:Be,stroke:Be,borderColor:Be,borderTopColor:Be,borderRightColor:Be,borderBottomColor:Be,borderLeftColor:Be,filter:_h,WebkitFilter:_h,mask:Eh,WebkitMask:Eh},zw=e=>hA[e],fA=new Set([_h,Eh]);function Ow(e,t){let n=zw(e);return fA.has(n)||(n=fn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const pA=new Set(["auto","none","0"]);function mA(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!pA.has(o)&&mo(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Ow(n,i)}class gA extends xp{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let h=t[d];if(typeof h=="string"&&(h=h.trim(),hp(h))){const f=Pw(h,n.current);f!==void 0&&(t[d]=f),d===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Aw.has(r)||t.length!==2)return;const[i,o]=t,s=_y(i),a=_y(o),c=dy(i),u=dy(o);if(c!==u&&yr[r]){this.needsMeasurement=!0;return}if(s!==a)if(by(s)&&by(a))for(let d=0;d<t.length;d++){const h=t[d];typeof h=="string"&&(t[d]=parseFloat(h))}else yr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||aA(t[i]))&&r.push(i);r.length&&mA(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=yr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=yr[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([c,u])=>{t.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const Sp=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Fw(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(r=>r!=null)}const Th=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function nl(e){return Yb(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:Cp}=sw(queueMicrotask,!1),on={x:!1,y:!1};function Bw(){return on.x||on.y}function yA(e){return e==="x"||e==="y"?on[e]?null:(on[e]=!0,()=>{on[e]=!1}):on.x||on.y?null:(on.x=on.y=!0,()=>{on.x=on.y=!1})}function Vw(e,t){const n=Fw(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function xA(e){return!(e.pointerType==="touch"||Bw())}function vA(e,t,n={}){const[r,i,o]=Vw(e,n);return r.forEach(s=>{let a=!1,c=!1,u;const d=()=>{s.removeEventListener("pointerleave",g)},h=w=>{u&&(u(w),u=void 0),d()},f=w=>{a=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),c&&(c=!1,h(w))},p=()=>{a=!0,window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",f,i)},g=w=>{if(w.pointerType!=="touch"){if(a){c=!0;return}h(w)}},y=w=>{if(!xA(w))return;c=!1;const m=t(s,w);typeof m=="function"&&(u=m,s.addEventListener("pointerleave",g,i))};s.addEventListener("pointerenter",y,i),s.addEventListener("pointerdown",p,i)}),o}const Uw=(e,t)=>t?e===t?!0:Uw(e,t.parentElement):!1,_p=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,bA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function wA(e){return bA.has(e.tagName)||e.isContentEditable===!0}const kA=new Set(["INPUT","SELECT","TEXTAREA"]);function SA(e){return kA.has(e.tagName)||e.isContentEditable===!0}const rl=new WeakSet;function Ty(e){return t=>{t.key==="Enter"&&e(t)}}function Fu(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const CA=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Ty(()=>{if(rl.has(n))return;Fu(n,"down");const i=Ty(()=>{Fu(n,"up")}),o=()=>Fu(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function jy(e){return _p(e)&&!Bw()}const Iy=new WeakSet;function _A(e,t,n={}){const[r,i,o]=Vw(e,n),s=a=>{const c=a.currentTarget;if(!jy(a)||Iy.has(a))return;rl.add(c),n.stopPropagation&&Iy.add(a);const u=t(c,a),d={...i,capture:!0},h=(g,y)=>{window.removeEventListener("pointerup",f,d),window.removeEventListener("pointercancel",p,d),rl.has(c)&&rl.delete(c),jy(g)&&typeof u=="function"&&u(g,{success:y})},f=g=>{h(g,c===window||c===document||n.useGlobalTarget||Uw(c,g.target))},p=g=>{h(g,!1)};window.addEventListener("pointerup",f,d),window.addEventListener("pointercancel",p,d)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),nl(a)&&(a.addEventListener("focus",u=>CA(u,i)),!wA(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function Ep(e){return Yb(e)&&"ownerSVGElement"in e}const il=new WeakMap;let ar;const Ww=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:Ep(r)&&"getBBox"in r?r.getBBox()[t]:r[n],EA=Ww("inline","width","offsetWidth"),TA=Ww("block","height","offsetHeight");function jA({target:e,borderBoxSize:t}){var n;(n=il.get(e))==null||n.forEach(r=>{r(e,{get width(){return EA(e,t)},get height(){return TA(e,t)}})})}function IA(e){e.forEach(jA)}function PA(){typeof ResizeObserver>"u"||(ar=new ResizeObserver(IA))}function AA(e,t){ar||PA();const n=Fw(e);return n.forEach(r=>{let i=il.get(r);i||(i=new Set,il.set(r,i)),i.add(t),ar==null||ar.observe(r)}),()=>{n.forEach(r=>{const i=il.get(r);i==null||i.delete(t),i!=null&&i.size||ar==null||ar.unobserve(r)})}}const ol=new Set;let Hi;function RA(){Hi=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};ol.forEach(t=>t(e))},window.addEventListener("resize",Hi)}function NA(e){return ol.add(e),Hi||RA(),()=>{ol.delete(e),!ol.size&&typeof Hi=="function"&&(window.removeEventListener("resize",Hi),Hi=void 0)}}function Py(e,t){return typeof e=="function"?NA(e):AA(e,t)}function DA(e){return Ep(e)&&e.tagName==="svg"}const MA=[...Lw,Be,fn],LA=e=>MA.find(Mw(e)),Ay=()=>({translate:0,scale:1,origin:0,originPoint:0}),Yi=()=>({x:Ay(),y:Ay()}),Ry=()=>({min:0,max:0}),Ue=()=>({x:Ry(),y:Ry()}),zA=new WeakMap;function Pc(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Fs(e){return typeof e=="string"||Array.isArray(e)}const Tp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],jp=["initial",...Tp];function Ac(e){return Pc(e.animate)||jp.some(t=>Fs(e[t]))}function $w(e){return!!(Ac(e)||e.variants)}function OA(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Ze(i))e.addValue(r,i);else if(Ze(o))e.addValue(r,go(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,go(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const jh={current:null},Hw={current:!1},FA=typeof window<"u";function BA(){if(Hw.current=!0,!!FA)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>jh.current=e.matches;e.addEventListener("change",t),t()}else jh.current=!1}const Ny=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ec={};function Yw(e){ec=e}function VA(){return ec}class UA{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:o,blockInitialAnimation:s,visualState:a},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=xp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=dt.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Se.render(this.render,!1,!0))};const{latestValues:u,renderState:d}=a;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=o,this.options=c,this.blockInitialAnimation=!!s,this.isControllingVariants=Ac(n),this.isVariantNode=$w(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:h,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const g=f[p];u[p]!==void 0&&Ze(g)&&g.set(u[p])}}mount(t){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=t,zA.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Hw.current||BA(),this.shouldReduceMotion=jh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),Rr(this.notifyUpdate),Rr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&Tw.has(t)&&this.current instanceof HTMLElement){const{factory:s,keyframes:a,times:c,ease:u,duration:d}=n.accelerate,h=new _w({element:this.current,name:t,keyframes:a,times:c,ease:u,duration:Mt(d)}),f=s(h);this.valueSubscriptions.set(t,()=>{f(),h.cancel()});return}const r=Eo.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&Se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ec){const n=ec[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ue()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Ny.length;r++){const i=Ny[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=OA(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=go(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Hb(r)||Gb(r))?r=parseFloat(r):!LA(r)&&fn.test(n)&&(r=Ow(t,n)),this.setBaseTarget(t,Ze(r)?r.get():r)),Ze(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=wp(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Ze(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new cp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Cp.render(this.render)}}class Gw extends UA{constructor(){super(...arguments),this.KeyframeResolver=gA}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ze(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class zr{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Kw({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function WA({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function $A(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Bu(e){return e===void 0||e===1}function Ih({scale:e,scaleX:t,scaleY:n}){return!Bu(e)||!Bu(t)||!Bu(n)}function Xr(e){return Ih(e)||qw(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function qw(e){return Dy(e.x)||Dy(e.y)}function Dy(e){return e&&e!=="0%"}function tc(e,t,n){const r=e-n,i=t*r;return n+i}function My(e,t,n,r,i){return i!==void 0&&(e=tc(e,i,r)),tc(e,n,r)+t}function Ph(e,t=0,n=1,r,i){e.min=My(e.min,t,n,r,i),e.max=My(e.max,t,n,r,i)}function Xw(e,{x:t,y:n}){Ph(e.x,t.translate,t.scale,t.originPoint),Ph(e.y,n.translate,n.scale,n.originPoint)}const Ly=.999999999999,zy=1.0000000000001;function HA(e,t,n,r=!1){var a;const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let c=0;c<i;c++){o=n[c],s=o.projectionDelta;const{visualElement:u}=o.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&(kn(e.x,-o.scroll.offset.x),kn(e.y,-o.scroll.offset.y)),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Xw(e,s)),r&&Xr(o.latestValues)&&sl(e,o.latestValues,(a=o.layout)==null?void 0:a.layoutBox))}t.x<zy&&t.x>Ly&&(t.x=1),t.y<zy&&t.y>Ly&&(t.y=1)}function kn(e,t){e.min+=t,e.max+=t}function Oy(e,t,n,r,i=.5){const o=ke(e.min,e.max,i);Ph(e,t,n,o,r)}function Fy(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function sl(e,t,n){const r=n??e;Oy(e.x,Fy(t.x,r.x),t.scaleX,t.scale,t.originX),Oy(e.y,Fy(t.y,r.y),t.scaleY,t.scale,t.originY)}function Qw(e,t){return Kw($A(e.getBoundingClientRect(),t))}function YA(e,t,n){const r=Qw(e,n),{scroll:i}=t;return i&&(kn(r.x,i.offset.x),kn(r.y,i.offset.y)),r}const GA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},KA=_o.length;function qA(e,t,n){let r="",i=!0;for(let s=0;s<KA;s++){const a=_o[s],c=e[a];if(c===void 0)continue;let u=!0;if(typeof c=="number")u=c===(a.startsWith("scale")?1:0);else{const d=parseFloat(c);u=a.startsWith("scale")?d===1:d===0}if(!u||n){const d=Th(c,Zl[a]);if(!u){i=!1;const h=GA[a]||a;r+=`${h}(${d}) `}n&&(t[a]=d)}}const o=e.pathRotation;return o&&(i=!1,r+=`rotate(${Th(o,Zl.pathRotation)}) `),r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Ip(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const c in t){const u=t[c];if(Eo.has(c)){s=!0;continue}else if(lw(c)){i[c]=u;continue}else{const d=Th(u,Zl[c]);c.startsWith("origin")?(a=!0,o[c]=d):r[c]=d}}if(t.transform||(s||n?r.transform=qA(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:c="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${c} ${u} ${d}`}}function Jw(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function By(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Wo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(H.test(e))e=parseFloat(e);else return e;const n=By(e,t.target.x),r=By(e,t.target.y);return`${n}% ${r}%`}},XA={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=fn.parse(e);if(i.length>5)return r;const o=fn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,c=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=c;const u=ke(a,c,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}},Ah={borderRadius:{...Wo,applyTo:[...Sp]},borderTopLeftRadius:Wo,borderTopRightRadius:Wo,borderBottomLeftRadius:Wo,borderBottomRightRadius:Wo,boxShadow:XA};function Zw(e,{layout:t,layoutId:n}){return Eo.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ah[e]||e==="opacity")}function Pp(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const a in r)(Ze(r[a])||i&&Ze(i[a])||Zw(a,e)||((s=n==null?void 0:n.getValue(a))==null?void 0:s.liveStyle)!==void 0)&&(o[a]=r[a]);return o}function QA(e){return window.getComputedStyle(e)}class JA extends Gw{constructor(){super(...arguments),this.type="html",this.renderInstance=Jw}mount(t){jc(!!t.style),super.mount(t)}readValueFromInstance(t,n){var r;if(Eo.has(n))return(r=this.projection)!=null&&r.isProjecting?gh(n):xP(t,n);{const i=QA(t),o=(lw(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Qw(t,n)}build(t,n,r){Ip(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Pp(t,n,r)}}const ZA={offset:"stroke-dashoffset",array:"stroke-dasharray"},eR={offset:"strokeDashoffset",array:"strokeDasharray"};function tR(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?ZA:eR;e[o.offset]=`${-r}`,e[o.array]=`${t} ${n}`}const e2=["transform","opacity","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function t2(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...a},c,u,d){if(Ip(e,a,u),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:f}=e;for(const p of e2)h[p]!==void 0&&(f[p]=h[p],delete h[p]);(f.transform||h.transformOrigin)&&(f.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),f.transform&&(f.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete h.transformBox),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),i!==void 0&&tR(h,i,o,s,!1)}const n2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),r2=e=>typeof e=="string"&&e.toLowerCase()==="svg";function nR(e,t,n,r){Jw(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(n2.has(i)?i:kp(i),t.attrs[i])}function i2(e,t,n){const r=Pp(e,t,n);for(const i in e)if(Ze(e[i])||Ze(t[i])){const o=_o.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class rR extends Gw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ue}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Eo.has(n)){const r=zw(n);return r&&r.default||0}if(e2.includes(n)){const i=getComputedStyle(t)[n];if(typeof i=="string"&&i)return i.trim()}return n=n2.has(n)?n:kp(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return i2(t,n,r)}build(t,n,r){t2(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){nR(t,n,r,i)}mount(t){this.isSVGTag=r2(t.tagName),super.mount(t)}}const iR=jp.length;function o2(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?o2(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<iR;n++){const r=jp[n],i=e.props[r];(Fs(i)||i===!1)&&(t[r]=i)}return t}function s2(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const oR=[...Tp].reverse(),sR=Tp.length;function aR(e){return t=>Promise.all(t.map(({animation:n,options:r})=>oA(e,n,r)))}function lR(e){let t=aR(e),n=Vy(),r=!0,i=!1;const o=u=>(d,h)=>{var p;const f=ci(e,h,u==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);if(f){const{transition:g,transitionEnd:y,...w}=f;d={...d,...w,...y}}return d};function s(u){t=u(e)}function a(u){const{props:d}=e,h=o2(e.parent)||{},f=[],p=new Set;let g={},y=1/0;for(let m=0;m<sR;m++){const x=oR[m],v=n[x],k=d[x]!==void 0?d[x]:h[x],T=Fs(k),C=x===u?v.isActive:null;C===!1&&(y=m);let j=k===h[x]&&k!==d[x]&&T;if(j&&(r||i)&&e.manuallyAnimateOnMount&&(j=!1),v.protectedKeys={...g},!v.isActive&&C===null||!k&&!v.prevProp||Pc(k)||typeof k=="boolean")continue;if(x==="exit"&&v.isActive&&C!==!0){v.prevResolvedValues&&(g={...g,...v.prevResolvedValues});continue}const E=cR(v.prevProp,k);let R=E||x===u&&v.isActive&&!j&&T||m>y&&T,P=!1;const N=Array.isArray(k)?k:[k];let D=N.reduce(o(x),{});C===!1&&(D={});const{prevResolvedValues:F={}}=v,W={...F,...D},U=M=>{R=!0,p.has(M)&&(P=!0,p.delete(M)),v.needsAnimating[M]=!0;const V=e.getValue(M);V&&(V.liveStyle=!1)};for(const M in W){const V=D[M],S=F[M];if(g.hasOwnProperty(M))continue;let G=!1;kh(V)&&kh(S)?G=!s2(V,S)||E:G=V!==S,G?V!=null?U(M):p.add(M):V!==void 0&&p.has(M)?U(M):v.protectedKeys[M]=!0}v.prevProp=k,v.prevResolvedValues=D,v.isActive&&(g={...g,...D}),(r||i)&&e.blockInitialAnimation&&(R=!1);const Z=j&&E;R&&(!Z||P)&&f.push(...N.map(M=>{const V={type:x};if(typeof M=="string"&&(r||i)&&!Z&&e.manuallyAnimateOnMount&&e.parent){const{parent:S}=e,G=ci(S,M);if(S.enteringChildren&&G){const{delayChildren:te}=G.transition||{};V.delay=jw(S.enteringChildren,e,te)}}return{animation:M,options:V}}))}if(p.size){const m={};if(typeof d.initial!="boolean"){const x=ci(e,Array.isArray(d.initial)?d.initial[0]:d.initial);x&&x.transition&&(m.transition=x.transition)}p.forEach(x=>{const v=e.getBaseTarget(x),k=e.getValue(x);k&&(k.liveStyle=!0),m[x]=v??null}),f.push({animation:m})}let w=!!f.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,i=!1,w?t(f):Promise.resolve()}function c(u,d){var f;if(n[u].isActive===d)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(p=>{var g;return(g=p.animationState)==null?void 0:g.setActive(u,d)}),n[u].isActive=d;const h=a(u);for(const p in n)n[p].protectedKeys={};return h}return{animateChanges:a,setActive:c,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Vy(),i=!0}}}function cR(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!s2(t,e):!1}function Yr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Vy(){return{animate:Yr(!0),whileInView:Yr(),whileHover:Yr(),whileTap:Yr(),whileDrag:Yr(),whileFocus:Yr(),exit:Yr()}}function Rh(e,t){e.min=t.min,e.max=t.max}function rn(e,t){Rh(e.x,t.x),Rh(e.y,t.y)}function Uy(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const a2=1e-4,uR=1-a2,dR=1+a2,l2=.01,hR=0-l2,fR=0+l2;function ht(e){return e.max-e.min}function pR(e,t,n){return Math.abs(e-t)<=n}function Wy(e,t,n,r=.5){e.origin=r,e.originPoint=ke(t.min,t.max,e.origin),e.scale=ht(n)/ht(t),e.translate=ke(n.min,n.max,e.origin)-e.originPoint,(e.scale>=uR&&e.scale<=dR||isNaN(e.scale))&&(e.scale=1),(e.translate>=hR&&e.translate<=fR||isNaN(e.translate))&&(e.translate=0)}function hs(e,t,n,r){Wy(e.x,t.x,n.x,r?r.originX:void 0),Wy(e.y,t.y,n.y,r?r.originY:void 0)}function $y(e,t,n,r=0){const i=r?ke(n.min,n.max,r):n.min;e.min=i+t.min,e.max=e.min+ht(t)}function mR(e,t,n,r){$y(e.x,t.x,n.x,r==null?void 0:r.x),$y(e.y,t.y,n.y,r==null?void 0:r.y)}function Hy(e,t,n,r=0){const i=r?ke(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+ht(t)}function nc(e,t,n,r){Hy(e.x,t.x,n.x,r==null?void 0:r.x),Hy(e.y,t.y,n.y,r==null?void 0:r.y)}function Yy(e,t,n,r,i){return e-=t,e=tc(e,1/n,r),i!==void 0&&(e=tc(e,1/i,r)),e}function gR(e,t=0,n=1,r=.5,i,o=e,s=e){if(In.test(t)&&(t=parseFloat(t),t=ke(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=ke(o.min,o.max,r);e===o&&(a-=t),e.min=Yy(e.min,t,n,a,i),e.max=Yy(e.max,t,n,a,i)}function Gy(e,t,[n,r,i],o,s){gR(e,t[n],t[r],t[i],t.scale,o,s)}const yR=["x","scaleX","originX"],xR=["y","scaleY","originY"];function Ky(e,t,n,r){Gy(e.x,t,yR,n?n.x:void 0,r?r.x:void 0),Gy(e.y,t,xR,n?n.y:void 0,r?r.y:void 0)}function qy(e){return e.translate===0&&e.scale===1}function c2(e){return qy(e.x)&&qy(e.y)}function Xy(e,t){return e.min===t.min&&e.max===t.max}function vR(e,t){return Xy(e.x,t.x)&&Xy(e.y,t.y)}function Qy(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function u2(e,t){return Qy(e.x,t.x)&&Qy(e.y,t.y)}function Jy(e){return ht(e.x)/ht(e.y)}function Zy(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function bn(e){return[e("x"),e("y")]}function bR(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,pathRotation:h,rotateX:f,rotateY:p,skewX:g,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),h&&(r+=`rotate(${h}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),g&&(r+=`skewX(${g}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,c=e.y.scale*t.y;return(a!==1||c!==1)&&(r+=`scale(${a}, ${c})`),r||"none"}const wR=Sp.length,ex=e=>typeof e=="string"?parseFloat(e):e,tx=e=>typeof e=="number"||H.test(e);function kR(e,t,n,r,i,o){i?(e.opacity=ke(0,n.opacity??1,SR(r)),e.opacityExit=ke(t.opacity??1,0,CR(r))):o&&(e.opacity=ke(t.opacity??1,n.opacity??1,r));for(let s=0;s<wR;s++){const a=Sp[s];let c=nx(t,a),u=nx(n,a);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||tx(c)===tx(u)?(e[a]=Math.max(ke(ex(c),ex(u),r),0),(In.test(u)||In.test(c))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=ke(t.rotate||0,n.rotate||0,r))}function nx(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const SR=d2(0,.5,nw),CR=d2(.5,.95,qt);function d2(e,t,n){return r=>r<e?0:r>t?1:n(zs(e,t,r))}function _R(e,t,n){const r=Ze(e)?e:go(e);return r.start(bp("",r,t,n)),r.animation}function Bs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}const ER=(e,t)=>e.depth-t.depth;class TR{constructor(){this.children=[],this.isDirty=!1}add(t){lp(this.children,t),this.isDirty=!0}remove(t){Kl(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(ER),this.isDirty=!1,this.children.forEach(t)}}function jR(e,t){const n=dt.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Rr(r),e(o-t))};return Se.setup(r,!0),()=>Rr(r)}function al(e){return Ze(e)?e.get():e}class IR{constructor(){this.members=[]}add(t){lp(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(Kl(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(Kl(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(t,n){var i;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:o}=r.options,{layoutDependency:s}=t.options;(o===void 0||o!==s)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(i=t.root)!=null&&i.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,o,s;(r=(n=t.options).onExitComplete)==null||r.call(n),(s=(i=t.resumingFrom)==null?void 0:(o=i.options).onExitComplete)==null||s.call(o)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const ll={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Vu=["","X","Y","Z"],PR=1e3;let AR=0;function Uu(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function h2(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Nw(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Se,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&h2(r)}function f2({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=AR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(DR),this.nodes.forEach(BR),this.nodes.forEach(VR),this.nodes.forEach(MR)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new TR)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new cp),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const c=this.eventHandlers.get(s);c&&c.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=Ep(s)&&!DA(s),this.instance=s;const{layoutId:a,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||a)&&(this.isLayoutDirty=!0),e){let d,h=0;const f=()=>this.root.updateBlockedByResize=!1;Se.read(()=>{h=window.innerWidth}),e(s,()=>{const p=window.innerWidth;p!==h&&(h=p,this.root.updateBlockedByResize=!0,d&&d(),d=jR(f,250),ll.hasAnimatedSinceResize&&(ll.hasAnimatedSinceResize=!1,this.nodes.forEach(ox)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:f,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||u.getDefaultTransition()||YR,{onLayoutAnimationStart:y,onLayoutAnimationComplete:w}=u.getProps(),m=!this.targetLayout||!u2(this.targetLayout,p),x=!h&&f;if(this.options.layoutRoot||this.resumeFrom||x||h&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...vp(g,"layout"),onPlay:y,onComplete:w};(u.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(d,x,v.path)}else h||ox(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Rr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(UR),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&h2(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,(typeof h.latestValues.x=="string"||typeof h.latestValues.y=="string")&&(h.isLayoutDirty=!0),h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:c}=this.options;if(a===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const c=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),c&&this.nodes.forEach(zR),this.nodes.forEach(rx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ix);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(OR),this.nodes.forEach(FR),this.nodes.forEach(RR),this.nodes.forEach(NR)):this.nodes.forEach(ix),this.clearAllSnapshots();const a=dt.now();Je.delta=An(0,1e3/60,a-Je.timestamp),Je.timestamp=a,Je.isProcessing=!0,Nu.update.process(Je),Nu.preRender.process(Je),Nu.render.process(Je),Je.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Cp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(LR),this.sharedNodes.forEach(WR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ht(this.snapshot.measuredBox.x)&&!ht(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ue()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!c2(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&this.instance&&(a||Xr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let c=this.removeElementScroll(a);return s&&(c=this.removeTransform(c)),GR(c),{animationId:this.root.animationId,measuredBox:a,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:s}=this.options;if(!s)return Ue();const a=s.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(KR))){const{scroll:d}=this.root;d&&(kn(a.x,d.offset.x),kn(a.y,d.offset.y))}return a}removeElementScroll(s){var c;const a=Ue();if(rn(a,s),(c=this.scroll)!=null&&c.wasRoot)return a;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:h,options:f}=d;d!==this.root&&h&&f.layoutScroll&&(h.wasRoot&&rn(a,s),kn(a.x,h.offset.x),kn(a.y,h.offset.y))}return a}applyTransform(s,a=!1,c){var d,h;const u=c||Ue();rn(u,s);for(let f=0;f<this.path.length;f++){const p=this.path[f];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(kn(u.x,-p.scroll.offset.x),kn(u.y,-p.scroll.offset.y)),Xr(p.latestValues)&&sl(u,p.latestValues,(d=p.layout)==null?void 0:d.layoutBox)}return Xr(this.latestValues)&&sl(u,this.latestValues,(h=this.layout)==null?void 0:h.layoutBox),u}removeTransform(s){var c;const a=Ue();rn(a,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];if(!Xr(d.latestValues))continue;let h;d.instance&&(Ih(d.latestValues)&&d.updateSnapshot(),h=Ue(),rn(h,d.measurePageBox())),Ky(a,d.latestValues,(c=d.snapshot)==null?void 0:c.layoutBox,h)}return Xr(this.latestValues)&&Ky(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Je.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==a;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:h}=this.options;if(!this.layout||!(d||h))return;this.resolvedRelativeTargetAt=Je.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ue(),this.targetWithTransforms=Ue()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),mR(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):rn(this.target,this.layout.layoutBox),Xw(this.target,this.targetDelta)):rn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ih(this.parent.latestValues)||qw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,a,c){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ue(),this.relativeTargetOrigin=Ue(),nc(this.relativeTargetOrigin,a,c,this.options.layoutAnchor||void 0),rn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var g;const s=this.getLead(),a=!!this.resumingFrom||this!==s;let c=!0;if((this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty)&&(c=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Je.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;rn(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,f=this.treeScale.y;HA(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Ue());const{target:p}=s;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Uy(this.prevProjectionDelta.x,this.projectionDelta.x),Uy(this.prevProjectionDelta.y,this.projectionDelta.y)),hs(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==f||!Zy(this.projectionDelta.x,this.prevProjectionDelta.x)||!Zy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Yi(),this.projectionDelta=Yi(),this.projectionDeltaWithTransform=Yi()}setAnimationOrigin(s,a=!1,c){const u=this.snapshot,d=u?u.latestValues:{},h={...this.latestValues},f=Yi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Ue(),g=u?u.source:void 0,y=this.layout?this.layout.source:void 0,w=g!==y,m=this.getStack(),x=!m||m.members.length<=1,v=!!(w&&!x&&this.options.crossfade===!0&&!this.path.some(HR));this.animationProgress=0;let k;const T=c==null?void 0:c.interpolateProjection(s);this.mixTargetDelta=C=>{const j=C/1e3,E=T==null?void 0:T(j);E?(f.x.translate=E.x,f.x.scale=ke(s.x.scale,1,j),f.x.origin=s.x.origin,f.x.originPoint=s.x.originPoint,f.y.translate=E.y,f.y.scale=ke(s.y.scale,1,j),f.y.origin=s.y.origin,f.y.originPoint=s.y.originPoint):(sx(f.x,s.x,j),sx(f.y,s.y,j)),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(nc(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),$R(this.relativeTarget,this.relativeTargetOrigin,p,j),k&&vR(this.relativeTarget,k)&&(this.isProjectionDirty=!1),k||(k=Ue()),rn(k,this.relativeTarget)),w&&(this.animationValues=h,kR(h,d,this.latestValues,j,v,x)),E&&E.rotate!==void 0&&(this.animationValues||(this.animationValues=h),this.animationValues.pathRotation=E.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var a,c,u;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(u=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Rr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{ll.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=go(0)),this.motionValue.jump(0,!1),this.currentAnimation=_R(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(PR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:c,layout:u,latestValues:d}=s;if(!(!a||!c||!u)){if(this!==s&&this.layout&&u&&p2(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||Ue();const h=ht(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+h;const f=ht(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+f}rn(a,c),sl(a,d),hs(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new IR),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(a=!0),!a)return;const u={};c.z&&Uu("z",s,u,this.animationValues);for(let d=0;d<Vu.length;d++)Uu(`rotate${Vu[d]}`,s,u,this.animationValues),Uu(`skew${Vu[d]}`,s,u,this.animationValues);s.render();for(const d in u)s.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);s.scheduleRender()}applyProjectionStyles(s,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=al(a==null?void 0:a.pointerEvents)||"",s.transform=c?c(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=al(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Xr(this.latestValues)&&(s.transform=c?c({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let h=bR(this.projectionDeltaWithTransform,this.treeScale,d);c&&(h=c(d,h)),s.transform=h;const{x:f,y:p}=this.projectionDelta;s.transformOrigin=`${f.origin*100}% ${p.origin*100}% 0`,u.animationValues?s.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const g in Ah){if(d[g]===void 0)continue;const{correct:y,applyTo:w,isCSSVariable:m}=Ah[g],x=h==="none"?d[g]:y(d[g],u);if(w){const v=w.length;for(let k=0;k<v;k++)s[w[k]]=x}else m?this.options.visualElement.renderState.vars[g]=x:s[g]=x}this.options.layoutId&&(s.pointerEvents=u===this?al(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(rx),this.root.sharedNodes.clear()}}}function RR(e){e.updateLayout()}function NR(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;if(o==="size")bn(h=>{const f=s?t.measuredBox[h]:t.layoutBox[h],p=ht(f);f.min=r[h].min,f.max=f.min+p});else if(o==="x"||o==="y"){const h=o==="x"?"y":"x";Rh(s?t.measuredBox[h]:t.layoutBox[h],r[h])}else p2(o,t.layoutBox,r)&&bn(h=>{const f=s?t.measuredBox[h]:t.layoutBox[h],p=ht(r[h]);f.max=f.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+p)});const a=Yi();hs(a,r,t.layoutBox);const c=Yi();s?hs(c,e.applyTransform(i,!0),t.measuredBox):hs(c,r,t.layoutBox);const u=!c2(a);let d=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:p}=h;if(f&&p){const g=e.options.layoutAnchor||void 0,y=Ue();nc(y,t.layoutBox,f.layoutBox,g);const w=Ue();nc(w,r,p.layoutBox,g),u2(y,w)||(d=!0),h.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=y,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function DR(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function MR(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function LR(e){e.clearSnapshot()}function rx(e){e.clearMeasurements()}function zR(e){e.isLayoutDirty=!0,e.updateLayout()}function ix(e){e.isLayoutDirty=!1}function OR(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function FR(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ox(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function BR(e){e.resolveTargetDelta()}function VR(e){e.calcProjection()}function UR(e){e.resetSkewAndRotation()}function WR(e){e.removeLeadSnapshot()}function sx(e,t,n){e.translate=ke(t.translate,0,n),e.scale=ke(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ax(e,t,n,r){e.min=ke(t.min,n.min,r),e.max=ke(t.max,n.max,r)}function $R(e,t,n,r){ax(e.x,t.x,n.x,r),ax(e.y,t.y,n.y,r)}function HR(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const YR={duration:.45,ease:[.4,0,.1,1]},lx=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),cx=lx("applewebkit/")&&!lx("chrome/")?Math.round:qt;function ux(e){e.min=cx(e.min),e.max=cx(e.max)}function GR(e){ux(e.x),ux(e.y)}function p2(e,t,n){return e==="position"||e==="preserve-aspect"&&!pR(Jy(t),Jy(n),.2)}function KR(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const qR=f2({attachResizeListener:(e,t)=>Bs(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Wu={current:void 0},m2=f2({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Wu.current){const e=new qR({});e.mount(window),e.setOptions({layoutScroll:!0}),Wu.current=e}return Wu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Ap=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function dx(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function XR(...e){return t=>{let n=!1;const r=e.map(i=>{const o=dx(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():dx(e[i],null)}}}}function QR(...e){return b.useCallback(XR(...e),e)}class JR extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(nl(n)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=n.offsetParent,i=nl(r)&&r.offsetWidth||0,o=nl(r)&&r.offsetHeight||0,s=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(s.height),a.width=parseFloat(s.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=i-a.width-a.left,a.bottom=o-a.height-a.top,a.direction=s.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function ZR({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:o}){var f;const s=b.useId(),a=b.useRef(null),c=b.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:u}=b.useContext(Ap),d=o!==!1?((f=e.props)==null?void 0:f.ref)??(e==null?void 0:e.ref):void 0,h=QR(a,d);return b.useInsertionEffect(()=>{const{width:p,height:g,top:y,left:w,right:m,bottom:x,direction:v}=c.current;if(t||o===!1||!a.current||!p||!g)return;const k=v==="rtl",T=n==="left"?k?`right: ${m}`:`left: ${w}`:k?`left: ${w}`:`right: ${m}`,C=r==="bottom"?`bottom: ${x}`:`top: ${y}`;a.current.dataset.motionPopId=s;const j=document.createElement("style");u&&(j.nonce=u);const E=i??document.head;return E.appendChild(j),j.sheet&&j.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${g}px !important;
            ${T}px !important;
            ${C}px !important;
          }
        `),()=>{var R;(R=a.current)==null||R.removeAttribute("data-motion-pop-id"),E.contains(j)&&E.removeChild(j)}},[t]),l.jsx(JR,{isPresent:t,childRef:a,sizeRef:c,pop:o,children:o===!1?e:b.cloneElement(e,{ref:h})})}const e3=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:a,anchorY:c,root:u})=>{const d=ap(t3),h=b.useId(),f=b.useRef(n),p=b.useRef(r);Gl(()=>{f.current=n,p.current=r});let g=!0,y=b.useMemo(()=>(g=!1,{id:h,initial:t,isPresent:n,custom:i,onExitComplete:w=>{d.set(w,!0);for(const m of d.values())if(!m)return;r&&r()},register:w=>(d.set(w,!1),()=>{var m;d.delete(w),!f.current&&!d.size&&((m=p.current)==null||m.call(p))})}),[n,d,r]);return o&&g&&(y={...y}),b.useMemo(()=>{d.forEach((w,m)=>d.set(m,!1))},[n]),b.useEffect(()=>{!n&&!d.size&&r&&r()},[n]),e=l.jsx(ZR,{pop:s==="popLayout",isPresent:n,anchorX:a,anchorY:c,root:u,children:e}),l.jsx(Tc.Provider,{value:y,children:e})};function t3(){return new Map}function g2(e=!0){const t=b.useContext(Tc);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=b.useId();b.useEffect(()=>{if(e)return i(o)},[e]);const s=b.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const Ia=e=>e.key||"";function hx(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const n3=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:a="left",anchorY:c="top",root:u})=>{const[d,h]=g2(s),f=b.useMemo(()=>hx(e),[e]),p=s&&!d?[]:f.map(Ia),g=b.useRef(!0),y=b.useRef(f),w=ap(()=>new Map),m=b.useRef(new Set),[x,v]=b.useState(f),[k,T]=b.useState(f);Gl(()=>{s&&!d&&!k.length&&(h==null||h())},[d,s,k.length,h]),Gl(()=>{g.current=!1,y.current=f;for(let E=0;E<k.length;E++){const R=Ia(k[E]);p.includes(R)?(w.delete(R),m.current.delete(R)):w.get(R)!==!0&&w.set(R,!1)}},[k,p.length,p.join("-")]);const C=[];if(f!==x){let E=[...f];for(let R=0;R<k.length;R++){const P=k[R],N=Ia(P);p.includes(N)||(E.splice(R,0,P),C.push(P))}return o==="wait"&&C.length&&(E=C),T(hx(E)),v(f),null}const{forceRender:j}=b.useContext(sp);return l.jsx(l.Fragment,{children:k.map(E=>{const R=Ia(E),P=s&&!d?!1:f===k||p.includes(R),N=()=>{if(m.current.has(R))return;if(w.has(R))m.current.add(R),w.set(R,!0);else return;let D=!0;w.forEach(F=>{F||(D=!1)}),D&&(j==null||j(),T(y.current),s&&(h==null||h()),r&&r())};return l.jsx(e3,{isPresent:P,initial:!g.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:u,onExitComplete:P?void 0:N,anchorX:a,anchorY:c,children:E},R)})})},y2=b.createContext({strict:!1}),fx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let px=!1;function r3(){if(px)return;const e={};for(const t in fx)e[t]={isEnabled:n=>fx[t].some(r=>!!n[r])};Yw(e),px=!0}function x2(){return r3(),VA()}function i3(e){const t=x2();for(const n in e)t[n]={...t[n],...e[n]};Yw(t)}const Rc=b.createContext({});function o3(e,t){if(Ac(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Fs(n)?n:void 0,animate:Fs(r)?r:void 0}}return e.inherit!==!1?t:{}}function s3(e){const{initial:t,animate:n}=o3(e,b.useContext(Rc));return b.useMemo(()=>({initial:t,animate:n}),[mx(t),mx(n)])}function mx(e){return Array.isArray(e)?e.join(" "):e}const Rp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function v2(e,t,n){for(const r in t)!Ze(t[r])&&!Zw(r,n)&&(e[r]=t[r])}function a3({transformTemplate:e},t){return b.useMemo(()=>{const n=Rp();return Ip(n,t,e),Object.assign({},n.vars,n.style)},[t])}function l3(e,t){const n=e.style||{},r={};return v2(r,n,e),Object.assign(r,a3(e,t)),r}function c3(e,t){const n={},r=l3(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const b2=()=>({...Rp(),attrs:{}});function u3(e,t,n,r){const i=b.useMemo(()=>{const o=b2();return t2(o,t,r2(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};v2(o,e.style,e),i.style={...o,...i.style}}return i}const d3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function rc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||d3.has(e)}function h3(e,t){return e.startsWith("on")?!rc(e):(t==null?void 0:t(e))??!rc(e)}function f3(e,t,n,r){const i={};for(const o in e)o==="values"&&typeof e.values=="object"||Ze(e[o])||(h3(o,r)||n===!0&&rc(o)||!t&&!rc(o)||e.draggable&&o.startsWith("onDrag"))&&(i[o]=e[o]);return i}const p3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Np(e){return typeof e!="string"||e.includes("-")?!1:!!(p3.indexOf(e)>-1||/[A-Z]/u.test(e))}function m3(e,t,n,{latestValues:r},i,o=!1,s,a){const u=(s??Np(e)?u3:c3)(t,r,i,e),d=f3(t,typeof e=="string",o,a),h=e!==b.Fragment?{...d,...u,ref:n}:{},{children:f}=t,p=b.useMemo(()=>Ze(f)?f.get():f,[f]);return b.createElement(e,{...h,children:p})}function g3({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:y3(n,r,i,e),renderState:t()}}function y3(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=al(o[f]);let{initial:s,animate:a}=e;const c=Ac(e),u=$w(e);t&&u&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const h=d?a:s;if(h&&typeof h!="boolean"&&!Pc(h)){const f=Array.isArray(h)?h:[h];for(let p=0;p<f.length;p++){const g=wp(e,f[p]);if(g){const{transitionEnd:y,transition:w,...m}=g;for(const x in m){let v=m[x];if(Array.isArray(v)){const k=d?v.length-1:0;v=v[k]}v!==null&&(i[x]=v)}for(const x in y)i[x]=y[x]}}}return i}const w2=e=>(t,n)=>{const r=b.useContext(Rc),i=b.useContext(Tc),o=()=>g3(e,t,r,i);return n?o():ap(o)},x3=w2({scrapeMotionValuesFromProps:Pp,createRenderState:Rp}),v3=w2({scrapeMotionValuesFromProps:i2,createRenderState:b2}),b3=Symbol.for("motionComponentSymbol");function w3(e,t,n){const r=b.useRef(n);b.useInsertionEffect(()=>{r.current=n});const i=b.useRef(null);return b.useCallback(o=>{var a;o&&((a=e.onMount)==null||a.call(e,o)),t&&(o?t.mount(o):t.unmount());const s=r.current;if(typeof s=="function")if(o){const c=s(o);typeof c=="function"&&(i.current=c)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[t])}const k2=b.createContext({});function Ii(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function k3(e,t,n,r,i,o){var v,k;const{visualElement:s}=b.useContext(Rc),a=b.useContext(y2),c=b.useContext(Tc),u=b.useContext(Ap),d=u.reducedMotion,h=u.skipAnimations,f=b.useRef(null),p=b.useRef(!1);r=r||a.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:s,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d,skipAnimations:h,isSVG:o}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const g=f.current,y=b.useContext(k2);g&&!g.projection&&i&&(g.type==="html"||g.type==="svg")&&S3(f.current,n,i,y);const w=b.useRef(!1);b.useInsertionEffect(()=>{g&&w.current&&g.update(n,c)});const m=n[Rw],x=b.useRef(!!m&&typeof window<"u"&&!((v=window.MotionHandoffIsComplete)!=null&&v.call(window,m))&&((k=window.MotionHasOptimisedAnimation)==null?void 0:k.call(window,m)));return Gl(()=>{p.current=!0,g&&(w.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),x.current&&g.animationState&&g.animationState.animateChanges())}),b.useEffect(()=>{g&&(!x.current&&g.animationState&&g.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var T;(T=window.MotionHandoffMarkAsComplete)==null||T.call(window,m)}),x.current=!1),g.enteringChildren=void 0)}),g}function S3(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:c,layoutRoot:u,layoutAnchor:d,layoutCrossfade:h}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:S2(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&Ii(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:h,layoutScroll:c,layoutRoot:u,layoutAnchor:d})}function S2(e){if(e)return e.options.allowProjection!==!1?e.projection:S2(e.parent)}function $u(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&i3(r);const o=n?n==="svg":Np(e),s=o?v3:x3;function a(u,d){let h;const f={...b.useContext(Ap),...u,layoutId:C3(u)},{isStatic:p,isValidProp:g}=f,y=s3(u),w=s(u,p);if(!p&&typeof window<"u"){_3();const m=E3(f);h=m.MeasureLayout,y.visualElement=k3(e,w,f,i,m.ProjectionNode,o)}return l.jsxs(Rc.Provider,{value:y,children:[h&&y.visualElement?l.jsx(h,{visualElement:y.visualElement,...f}):null,m3(e,u,w3(w,y.visualElement,d),w,p,t,o,g)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=b.forwardRef(a);return c[b3]=e,c}function C3({layoutId:e}){const t=b.useContext(sp).id;return t&&e!==void 0?t+"-"+e:e}function _3(e,t){b.useContext(y2).strict}function E3(e){const t=x2(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function T3(e,t){if(typeof Proxy>"u")return $u;const n=new Map,r=(o,s)=>$u(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,$u(s,void 0,e,t)),n.get(s))})}const j3=(e,t)=>t.isSVG??Np(e)?new rR(t):new JA(t,{allowProjection:e!==b.Fragment});class I3 extends zr{constructor(t){super(t),t.animationState||(t.animationState=lR(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Pc(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let P3=0;class A3 extends zr{constructor(){super(...arguments),this.id=P3++,this.isExitComplete=!1}update(){var o;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:s,custom:a}=this.node.getProps();if(typeof s=="string"||typeof s=="object"&&s!==null&&!Array.isArray(s)){const c=ci(this.node,s,a);if(c){const{transition:u,transitionEnd:d,...h}=c;for(const f in h)(o=this.node.getValue(f))==null||o.jump(h[f])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const R3={animation:{Feature:I3},exit:{Feature:A3}};function na(e){return{point:{x:e.pageX,y:e.pageY}}}const N3=e=>t=>_p(t)&&e(t,na(t));function fs(e,t,n,r){return Bs(e,t,N3(n),r)}const C2=({current:e})=>e?e.ownerDocument.defaultView:null,gx=(e,t)=>Math.abs(e-t);function D3(e,t){const n=gx(e.x,t.x),r=gx(e.y,t.y);return Math.sqrt(n**2+r**2)}const yx=new Set(["auto","scroll"]);class _2{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=g=>{this.handleScroll(g.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Pa(this.lastRawMoveEventInfo,this.transformPagePoint));const g=Hu(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,w=D3(g.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!w)return;const{point:m}=g,{timestamp:x}=Je;this.history.push({...m,timestamp:x});const{onStart:v,onMove:k}=this.handlers;y||(v&&v(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),k&&k(this.lastMoveEvent,g)},this.handlePointerMove=(g,y)=>{this.lastMoveEvent=g,this.lastRawMoveEventInfo=y,this.lastMoveEventInfo=Pa(y,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(g,y)=>{this.end();const{onEnd:w,onSessionEnd:m,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Hu(g.type==="pointercancel"?this.lastMoveEventInfo:Pa(y,this.transformPagePoint),this.history);this.startEvent&&w&&w(g,v),m&&m(g,v)},!_p(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const c=na(t),u=Pa(c,this.transformPagePoint),{point:d}=u,{timestamp:h}=Je;this.history=[{...d,timestamp:h}];const{onSessionStart:f}=n;f&&f(t,Hu(u,this.history));const p={passive:!0,capture:!0};this.removeListeners=Zs(fs(this.contextWindow,"pointermove",this.handlePointerMove,p),fs(this.contextWindow,"pointerup",this.handlePointerUp,p),fs(this.contextWindow,"pointercancel",this.handlePointerUp,p)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(yx.has(r.overflowX)||yx.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),Se.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Rr(this.updatePoint)}}function Pa(e,t){return t?{point:t(e.point)}:e}function xx(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Hu({point:e},t){return{point:e,delta:xx(e,E2(t)),offset:xx(e,M3(t)),velocity:L3(t,.1)}}function M3(e){return e[0]}function E2(e){return e[e.length-1]}function L3(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=E2(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Mt(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>Mt(t)*2&&(r=e[1]);const o=Gt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function z3(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ke(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ke(n,e,r.max):Math.min(e,n)),e}function vx(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function O3(e,{top:t,left:n,bottom:r,right:i}){return{x:vx(e.x,n,i),y:vx(e.y,t,r)}}function bx(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function F3(e,t){return{x:bx(e.x,t.x),y:bx(e.y,t.y)}}function B3(e,t){let n=.5;const r=ht(e),i=ht(t);return i>r?n=zs(t.min,t.max-r,e.min):r>i&&(n=zs(e.min,e.max-i,t.min)),An(0,1,n)}function V3(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Nh=.35;function U3(e=Nh){return e===!1?e=0:e===!0&&(e=Nh),{x:wx(e,"left","right"),y:wx(e,"top","bottom")}}function wx(e,t,n){return{min:kx(e,t),max:kx(e,n)}}function kx(e,t){return typeof e=="number"?e:e[t]||0}const W3=new WeakMap;class $3{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ue(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=h=>{n&&this.snapToCursor(na(h).point),this.stopAnimation()},s=(h,f)=>{const{drag:p,dragPropagation:g,onDragStart:y}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=yA(p),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),bn(m=>{let x=this.getAxisMotionValue(m).get()||0;if(In.test(x)){const{projection:v}=this.visualElement;if(v&&v.layout){const k=v.layout.layoutBox[m];k&&(x=ht(k)*(parseFloat(x)/100))}}this.originPoint[m]=x}),y&&Se.update(()=>y(h,f),!1,!0),Sh(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},a=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f;const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:y,onDrag:w}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:m}=f;if(g&&this.currentDirection===null){this.currentDirection=Y3(m),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),w&&Se.update(()=>w(h,f),!1,!0)},c=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f,this.stop(h,f),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new _2(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:C2(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&Se.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Aa(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=z3(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&Ii(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=O3(r.layoutBox,t):this.constraints=!1,this.elastic=U3(n),i!==this.constraints&&!Ii(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&bn(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=V3(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ii(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;i.root&&(i.root.scroll=void 0,i.root.updateScroll());const o=YA(r,i.root,this.visualElement.getTransformPagePoint());let s=F3(i.layout.layoutBox,o);if(n){const a=n(WA(s));this.hasMutatedConstraints=!!a,a&&(s=Kw(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),c=this.constraints||{},u=bn(d=>{if(!Aa(d,n,this.currentDirection))return;let h=c&&c[d]||{};(s===!0||s===d)&&(h={min:0,max:0});const f=i?200:1e6,p=i?40:1e7,g={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...o,...h};return this.startAxisValueAnimation(d,g)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Sh(this.visualElement,t),r.start(bp(t,r,0,n,this.visualElement,!1))}stopAnimation(){bn(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps()[n];return i||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){bn(n=>{const{drag:r}=this.getProps();if(!Aa(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n],c=o.get()||0;o.set(t[n]-ke(s,a,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ii(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};bn(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const c=a.get();i[s]=B3({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),bn(s=>{if(!Aa(s,t,null))return;const a=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];a.set(ke(c,u,i[s]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;W3.set(this.visualElement,this);const t=this.visualElement.current,n=fs(t,"pointerdown",u=>{const{drag:d,dragListener:h=!0}=this.getProps(),f=u.target,p=f!==t&&SA(f);d&&h&&!p&&this.start(u)});let r;const i=()=>{const{dragConstraints:u}=this.getProps();Ii(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),r||(r=H3(t,u.current,()=>this.scalePositionWithinConstraints())))},{projection:o}=this.visualElement,s=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Se.read(i);const a=Bs(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d})=>{this.isDragging&&d&&(bn(h=>{const f=this.getAxisMotionValue(h);f&&(this.originPoint[h]+=u[h].translate,f.set(f.get()+u[h].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),c&&c(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Nh,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Sx(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function H3(e,t,n){const r=Py(e,Sx(n)),i=Py(t,Sx(n));return()=>{r(),i()}}function Aa(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Y3(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class G3 extends zr{constructor(t){super(t),this.removeGroupControls=qt,this.removeListeners=qt,this.controls=new $3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Yu=e=>(t,n)=>{e&&Se.update(()=>e(t,n),!1,!0)};class K3 extends zr{constructor(){super(...arguments),this.removePointerDownListener=qt}onPointerDown(t){this.session=new _2(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:C2(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Yu(t),onStart:Yu(n),onMove:Yu(r),onEnd:(o,s)=>{delete this.session,i&&Se.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=fs(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Gu=!1;class q3 extends b.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),Gu&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ll.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,t.layoutDependency!==n&&s.setOptions({...s.options,layoutDependency:n}),Gu=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||Se.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),Cp.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Gu=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function T2(e){const[t,n]=g2(),r=b.useContext(sp);return l.jsx(q3,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(k2),isPresent:t,safeToRemove:n})}const X3={pan:{Feature:K3},drag:{Feature:G3,ProjectionNode:m2,MeasureLayout:T2}};function Cx(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&Se.postRender(()=>o(t,na(t)))}class Q3 extends zr{mount(){const{current:t}=this.node;t&&(this.unmount=vA(t,(n,r)=>(Cx(this.node,r,"Start"),i=>Cx(this.node,i,"End"))))}unmount(){}}class J3 extends zr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Zs(Bs(this.node.current,"focus",()=>this.onFocus()),Bs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function _x(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&Se.postRender(()=>o(t,na(t)))}class Z3 extends zr{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=_A(t,(i,o)=>(_x(this.node,o,"Start"),(s,{success:a})=>_x(this.node,s,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Dh=new WeakMap,Ku=new WeakMap,e6=e=>{const t=Dh.get(e.target);t&&t(e)},t6=e=>{e.forEach(e6)};function n6({root:e,...t}){const n=e||document;Ku.has(n)||Ku.set(n,{});const r=Ku.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(t6,{root:e,...t})),r[i]}function r6(e,t,n){const r=n6(t);return Dh.set(e,n),r.observe(e),()=>{Dh.delete(e),r.unobserve(e)}}const i6={some:0,all:1};class o6 extends zr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var c;(c=this.stopObserver)==null||c.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:i6[i]},a=u=>{const{isIntersecting:d}=u;if(this.isInView===d||(this.isInView=d,o&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:h,onViewportLeave:f}=this.node.getProps(),p=d?h:f;p&&p(u)};this.stopObserver=r6(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(s6(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function s6({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const a6={inView:{Feature:o6},tap:{Feature:Z3},focus:{Feature:J3},hover:{Feature:Q3}},l6={layout:{ProjectionNode:m2,MeasureLayout:T2}},c6={...R3,...a6,...X3,...l6},Ra=T3(c6,j3);function u6(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const d6=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,h6=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,f6={};function Ex(e,t){return(f6.jsx?h6:d6).test(e)}const p6=/[ \t\n\f\r]/g;function m6(e){return typeof e=="object"?e.type==="text"?Tx(e.value):!1:Tx(e)}function Tx(e){return e.replace(p6,"")===""}class ra{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ra.prototype.normal={};ra.prototype.property={};ra.prototype.space=void 0;function j2(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ra(n,r,t)}function Mh(e){return e.toLowerCase()}class Tt{constructor(t,n){this.attribute=n,this.property=t}}Tt.prototype.attribute="";Tt.prototype.booleanish=!1;Tt.prototype.boolean=!1;Tt.prototype.commaOrSpaceSeparated=!1;Tt.prototype.commaSeparated=!1;Tt.prototype.defined=!1;Tt.prototype.mustUseProperty=!1;Tt.prototype.number=!1;Tt.prototype.overloadedBoolean=!1;Tt.prototype.property="";Tt.prototype.spaceSeparated=!1;Tt.prototype.space=void 0;let g6=0;const ee=bi(),Fe=bi(),Lh=bi(),z=bi(),be=bi(),ui=bi(),Pt=bi();function bi(){return 2**++g6}const zh=Object.freeze(Object.defineProperty({__proto__:null,boolean:ee,booleanish:Fe,commaOrSpaceSeparated:Pt,commaSeparated:ui,number:z,overloadedBoolean:Lh,spaceSeparated:be},Symbol.toStringTag,{value:"Module"})),qu=Object.keys(zh);class Dp extends Tt{constructor(t,n,r,i){let o=-1;if(super(t,n),jx(this,"space",i),typeof r=="number")for(;++o<qu.length;){const s=qu[o];jx(this,qu[o],(r&zh[s])===zh[s])}}}Dp.prototype.defined=!0;function jx(e,t,n){n&&(e[t]=n)}function To(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Dp(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Mh(r)]=r,n[Mh(o.attribute)]=r}return new ra(t,n,e.space)}const I2=To({properties:{ariaActiveDescendant:null,ariaAtomic:Fe,ariaAutoComplete:null,ariaBusy:Fe,ariaChecked:Fe,ariaColCount:z,ariaColIndex:z,ariaColSpan:z,ariaControls:be,ariaCurrent:null,ariaDescribedBy:be,ariaDetails:null,ariaDisabled:Fe,ariaDropEffect:be,ariaErrorMessage:null,ariaExpanded:Fe,ariaFlowTo:be,ariaGrabbed:Fe,ariaHasPopup:null,ariaHidden:Fe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:be,ariaLevel:z,ariaLive:null,ariaModal:Fe,ariaMultiLine:Fe,ariaMultiSelectable:Fe,ariaOrientation:null,ariaOwns:be,ariaPlaceholder:null,ariaPosInSet:z,ariaPressed:Fe,ariaReadOnly:Fe,ariaRelevant:null,ariaRequired:Fe,ariaRoleDescription:be,ariaRowCount:z,ariaRowIndex:z,ariaRowSpan:z,ariaSelected:Fe,ariaSetSize:z,ariaSort:null,ariaValueMax:z,ariaValueMin:z,ariaValueNow:z,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function P2(e,t){return t in e?e[t]:t}function A2(e,t){return P2(e,t.toLowerCase())}const y6=To({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ui,acceptCharset:be,accessKey:be,action:null,allow:null,allowFullScreen:ee,allowPaymentRequest:ee,allowUserMedia:ee,alpha:ee,alt:null,as:null,async:ee,autoCapitalize:null,autoComplete:be,autoFocus:ee,autoPlay:ee,blocking:be,capture:null,charSet:null,checked:ee,cite:null,className:be,closedBy:null,colorSpace:null,cols:z,colSpan:z,command:null,commandFor:null,content:null,contentEditable:Fe,controls:ee,controlsList:be,coords:z|ui,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ee,defer:ee,dir:null,dirName:null,disabled:ee,download:Lh,draggable:Fe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ee,formTarget:null,headers:be,height:z,hidden:Lh,high:z,href:null,hrefLang:null,htmlFor:be,httpEquiv:be,id:null,imageSizes:null,imageSrcSet:null,inert:ee,inputMode:null,integrity:null,is:null,isMap:ee,itemId:null,itemProp:be,itemRef:be,itemScope:ee,itemType:be,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ee,low:z,manifest:null,max:null,maxLength:z,media:null,method:null,min:null,minLength:z,multiple:ee,muted:ee,name:null,nonce:null,noModule:ee,noValidate:ee,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ee,optimum:z,pattern:null,ping:be,placeholder:null,playsInline:ee,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ee,referrerPolicy:null,rel:be,required:ee,reversed:ee,rows:z,rowSpan:z,sandbox:be,scope:null,scoped:ee,seamless:ee,selected:ee,shadowRootClonable:ee,shadowRootCustomElementRegistry:ee,shadowRootDelegatesFocus:ee,shadowRootMode:null,shadowRootSerializable:ee,shape:null,size:z,sizes:null,slot:null,span:z,spellCheck:Fe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:z,step:null,style:null,tabIndex:z,target:null,title:null,translate:null,type:null,typeMustMatch:ee,useMap:null,value:Fe,width:z,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:be,axis:null,background:null,bgColor:null,border:z,borderColor:null,bottomMargin:z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ee,declare:ee,event:null,face:null,frame:null,frameBorder:null,hSpace:z,leftMargin:z,link:null,longDesc:null,lowSrc:null,marginHeight:z,marginWidth:z,noResize:ee,noHref:ee,noShade:ee,noWrap:ee,object:null,profile:null,prompt:null,rev:null,rightMargin:z,rules:null,scheme:null,scrolling:Fe,standby:null,summary:null,text:null,topMargin:z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:z,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:ee,disablePictureInPicture:ee,disableRemotePlayback:ee,exportParts:ui,part:be,prefix:null,property:null,results:z,security:null,unselectable:null},space:"html",transform:A2}),x6=To({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Pt,accentHeight:z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:z,amplitude:z,arabicForm:null,ascent:z,attributeName:null,attributeType:null,azimuth:z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:z,by:null,calcMode:null,capHeight:z,className:be,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:z,diffuseConstant:z,direction:null,display:null,dur:null,divisor:z,dominantBaseline:null,download:ee,dx:null,dy:null,edgeMode:null,editable:null,elevation:z,enableBackground:null,end:null,event:null,exponent:z,externalResourcesRequired:null,fill:null,fillOpacity:z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ui,g2:ui,glyphName:ui,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:z,horizOriginX:z,horizOriginY:z,id:null,ideographic:z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:z,k:z,k1:z,k2:z,k3:z,k4:z,kernelMatrix:Pt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:z,overlineThickness:z,paintOrder:null,panose1:null,path:null,pathLength:z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:be,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:z,pointsAtY:z,pointsAtZ:z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Pt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Pt,rev:Pt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Pt,requiredFeatures:Pt,requiredFonts:Pt,requiredFormats:Pt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:z,specularExponent:z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:z,strikethroughThickness:z,string:null,stroke:null,strokeDashArray:Pt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:z,strokeOpacity:z,strokeWidth:null,style:null,surfaceScale:z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Pt,tabIndex:z,tableValues:null,target:null,targetX:z,targetY:z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Pt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:z,underlineThickness:z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:z,values:null,vAlphabetic:z,vMathematical:z,vectorEffect:null,vHanging:z,vIdeographic:z,version:null,vertAdvY:z,vertOriginX:z,vertOriginY:z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:P2}),R2=To({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),N2=To({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:A2}),D2=To({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),v6={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},b6=/[A-Z]/g,Ix=/-[a-z]/g,w6=/^data[-\w.:]+$/i;function k6(e,t){const n=Mh(t);let r=t,i=Tt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&w6.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Ix,C6);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Ix.test(o)){let s=o.replace(b6,S6);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}i=Dp}return new i(r,t)}function S6(e){return"-"+e.toLowerCase()}function C6(e){return e.charAt(1).toUpperCase()}const _6=j2([I2,y6,R2,N2,D2],"html"),Mp=j2([I2,x6,R2,N2,D2],"svg");function E6(e){return e.join(" ").trim()}var Lp={},Px=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,T6=/\n/g,j6=/^\s*/,I6=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,P6=/^:\s*/,A6=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,R6=/^[;\s]*/,N6=/^\s+|\s+$/g,D6=`
`,Ax="/",Rx="*",Jr="",M6="comment",L6="declaration";function z6(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var y=g.match(T6);y&&(n+=y.length);var w=g.lastIndexOf(D6);r=~w?g.length-w:r+g.length}function o(){var g={line:n,column:r};return function(y){return y.position=new s(g),u(),y}}function s(g){this.start=g,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function a(g){var y=new Error(t.source+":"+n+":"+r+": "+g);if(y.reason=g,y.filename=t.source,y.line=n,y.column=r,y.source=e,!t.silent)throw y}function c(g){var y=g.exec(e);if(y){var w=y[0];return i(w),e=e.slice(w.length),y}}function u(){c(j6)}function d(g){var y;for(g=g||[];y=h();)y!==!1&&g.push(y);return g}function h(){var g=o();if(!(Ax!=e.charAt(0)||Rx!=e.charAt(1))){for(var y=2;Jr!=e.charAt(y)&&(Rx!=e.charAt(y)||Ax!=e.charAt(y+1));)++y;if(y+=2,Jr===e.charAt(y-1))return a("End of comment missing");var w=e.slice(2,y-2);return r+=2,i(w),e=e.slice(y),r+=2,g({type:M6,comment:w})}}function f(){var g=o(),y=c(I6);if(y){if(h(),!c(P6))return a("property missing ':'");var w=c(A6),m=g({type:L6,property:Nx(y[0].replace(Px,Jr)),value:w?Nx(w[0].replace(Px,Jr)):Jr});return c(R6),m}}function p(){var g=[];d(g);for(var y;y=f();)y!==!1&&(g.push(y),d(g));return g}return u(),p()}function Nx(e){return e?e.replace(N6,Jr):Jr}var O6=z6,F6=hl&&hl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Lp,"__esModule",{value:!0});Lp.default=V6;const B6=F6(O6);function V6(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,B6.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:s,value:a}=o;i?t(s,a,o):a&&(n=n||{},n[s]=a)}),n}var Nc={};Object.defineProperty(Nc,"__esModule",{value:!0});Nc.camelCase=void 0;var U6=/^--[a-zA-Z0-9_-]+$/,W6=/-([a-z])/g,$6=/^[^-]+$/,H6=/^-(webkit|moz|ms|o|khtml)-/,Y6=/^-(ms)-/,G6=function(e){return!e||$6.test(e)||U6.test(e)},K6=function(e,t){return t.toUpperCase()},Dx=function(e,t){return"".concat(t,"-")},q6=function(e,t){return t===void 0&&(t={}),G6(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Y6,Dx):e=e.replace(H6,Dx),e.replace(W6,K6))};Nc.camelCase=q6;var X6=hl&&hl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Q6=X6(Lp),J6=Nc;function Oh(e,t){var n={};return!e||typeof e!="string"||(0,Q6.default)(e,function(r,i){r&&i&&(n[(0,J6.camelCase)(r,t)]=i)}),n}Oh.default=Oh;var Z6=Oh;const eN=Gh(Z6),M2=L2("end"),zp=L2("start");function L2(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function tN(e){const t=zp(e),n=M2(e);if(t&&n)return{start:t,end:n}}function ps(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Mx(e.position):"start"in e||"end"in e?Mx(e):"line"in e||"column"in e?Fh(e):""}function Fh(e){return Lx(e&&e.line)+":"+Lx(e&&e.column)}function Mx(e){return Fh(e&&e.start)+"-"+Fh(e&&e.end)}function Lx(e){return e&&typeof e=="number"?e:1}class at extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(s=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=ps(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}at.prototype.file="";at.prototype.name="";at.prototype.reason="";at.prototype.message="";at.prototype.stack="";at.prototype.column=void 0;at.prototype.line=void 0;at.prototype.ancestors=void 0;at.prototype.cause=void 0;at.prototype.fatal=void 0;at.prototype.place=void 0;at.prototype.ruleId=void 0;at.prototype.source=void 0;const Op={}.hasOwnProperty,nN=new Map,rN=/[A-Z]/g,iN=new Set(["table","tbody","thead","tfoot","tr"]),oN=new Set(["td","th"]),z2="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function sN(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=pN(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=fN(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Mp:_6,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=O2(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function O2(e,t,n){if(t.type==="element")return aN(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return lN(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return uN(e,t,n);if(t.type==="mdxjsEsm")return cN(e,t);if(t.type==="root")return dN(e,t,n);if(t.type==="text")return hN(e,t)}function aN(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Mp,e.schema=i),e.ancestors.push(t);const o=B2(e,t.tagName,!1),s=mN(e,t);let a=Bp(e,t);return iN.has(t.tagName)&&(a=a.filter(function(c){return typeof c=="string"?!m6(c):!0})),F2(e,s,o,t),Fp(s,a),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function lN(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Vs(e,t.position)}function cN(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Vs(e,t.position)}function uN(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Mp,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:B2(e,t.name,!0),s=gN(e,t),a=Bp(e,t);return F2(e,s,o,t),Fp(s,a),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function dN(e,t,n){const r={};return Fp(r,Bp(e,t)),e.create(t,e.Fragment,r,n)}function hN(e,t){return t.value}function F2(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Fp(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function fN(e,t,n){return r;function r(i,o,s,a){const u=Array.isArray(s.children)?n:t;return a?u(o,s,a):u(o,s)}}function pN(e,t){return n;function n(r,i,o,s){const a=Array.isArray(o.children),c=zp(r);return t(i,o,s,a,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function mN(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Op.call(t.properties,i)){const o=yN(e,i,t.properties[i]);if(o){const[s,a]=o;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&oN.has(t.tagName)?r=a:n[s]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function gN(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Vs(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else Vs(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function Bp(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:nN;for(;++r<t.children.length;){const o=t.children[r];let s;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;s=c+"-"+u,i.set(c,u+1)}}const a=O2(e,o,s);a!==void 0&&n.push(a)}return n}function yN(e,t,n){const r=k6(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?u6(n):E6(n)),r.property==="style"){let i=typeof n=="object"?n:xN(e,String(n));return e.stylePropertyNameCase==="css"&&(i=vN(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?v6[r.property]||r.property:r.attribute,n]}}function xN(e,t){try{return eN(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new at("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=z2+"#cannot-parse-style-attribute",i}}function B2(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,s;for(;++o<i.length;){const a=Ex(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=s}else r=Ex(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Op.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Vs(e)}function Vs(e,t){const n=new at("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=z2+"#cannot-handle-mdx-estrees-without-createevaluater",n}function vN(e){const t={};let n;for(n in e)Op.call(e,n)&&(t[bN(n)]=e[n]);return t}function bN(e){let t=e.replace(rN,wN);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function wN(e){return"-"+e.toLowerCase()}const Xu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},kN={};function SN(e,t){const n=kN,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return V2(e,r,i)}function V2(e,t,n){if(CN(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return zx(e.children,t,n)}return Array.isArray(e)?zx(e,t,n):""}function zx(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=V2(e[i],t,n);return r.join("")}function CN(e){return!!(e&&typeof e=="object")}const Ox=document.createElement("i");function Vp(e){const t="&"+e+";";Ox.innerHTML=t;const n=Ox.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Rn(e,t,n,r){const i=e.length;let o=0,s;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)s=Array.from(r),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);o<r.length;)s=r.slice(o,o+1e4),s.unshift(t,0),e.splice(...s),o+=1e4,t+=1e4}function Ht(e,t){return e.length>0?(Rn(e,e.length,0,t),e):t}const Fx={}.hasOwnProperty;function _N(e){const t={};let n=-1;for(;++n<e.length;)EN(t,e[n]);return t}function EN(e,t){let n;for(n in t){const i=(Fx.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let s;if(o)for(s in o){Fx.call(i,s)||(i[s]=[]);const a=o[s];TN(i[s],Array.isArray(a)?a:a?[a]:[])}}}function TN(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Rn(e,0,0,r)}function U2(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ro(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const _n=Or(/[A-Za-z]/),Nt=Or(/[\dA-Za-z]/),jN=Or(/[#-'*+\--9=?A-Z^-~]/);function Bh(e){return e!==null&&(e<32||e===127)}const Vh=Or(/\d/),IN=Or(/[\dA-Fa-f]/),PN=Or(/[!-/:-@[-`{-~]/);function J(e){return e!==null&&e<-2}function Et(e){return e!==null&&(e<0||e===32)}function ge(e){return e===-2||e===-1||e===32}const AN=Or(new RegExp("\\p{P}|\\p{S}","u")),RN=Or(/\s/);function Or(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function jo(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let s="";if(o===37&&Nt(e.charCodeAt(n+1))&&Nt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),i=1):s="�"}else s=String.fromCharCode(o);s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+i+1,s=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function _e(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(c){return ge(c)?(e.enter(n),a(c)):t(c)}function a(c){return ge(c)&&o++<i?(e.consume(c),a):(e.exit(n),t(c))}}const NN={tokenize:DN};function DN(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),_e(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return J(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),s)}}const MN={tokenize:LN},Bx={tokenize:zN};function LN(e){const t=this,n=[];let r=0,i,o,s;return a;function a(v){if(r<n.length){const k=n[r];return t.containerState=k[1],e.attempt(k[0].continuation,c,u)(v)}return u(v)}function c(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const k=t.events.length;let T=k,C;for(;T--;)if(t.events[T][0]==="exit"&&t.events[T][1].type==="chunkFlow"){C=t.events[T][1].end;break}m(r);let j=k;for(;j<t.events.length;)t.events[j][1].end={...C},j++;return Rn(t.events,T+1,0,t.events.slice(k)),t.events.length=j,u(v)}return a(v)}function u(v){if(r===n.length){if(!i)return f(v);if(i.currentConstruct&&i.currentConstruct.concrete)return g(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Bx,d,h)(v)}function d(v){return i&&x(),m(r),f(v)}function h(v){return t.parser.lazy[t.now().line]=r!==n.length,s=t.now().offset,g(v)}function f(v){return t.containerState={},e.attempt(Bx,p,g)(v)}function p(v){return r++,n.push([t.currentConstruct,t.containerState]),f(v)}function g(v){if(v===null){i&&x(),m(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),y(v)}function y(v){if(v===null){w(e.exit("chunkFlow"),!0),m(0),e.consume(v);return}return J(v)?(e.consume(v),w(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(v),y)}function w(v,k){const T=t.sliceStream(v);if(k&&T.push(null),v.previous=o,o&&(o.next=v),o=v,i.defineSkip(v.start),i.write(T),t.parser.lazy[v.start.line]){let C=i.events.length;for(;C--;)if(i.events[C][1].start.offset<s&&(!i.events[C][1].end||i.events[C][1].end.offset>s))return;const j=t.events.length;let E=j,R,P;for(;E--;)if(t.events[E][0]==="exit"&&t.events[E][1].type==="chunkFlow"){if(R){P=t.events[E][1].end;break}R=!0}for(m(r),C=j;C<t.events.length;)t.events[C][1].end={...P},C++;Rn(t.events,E+1,0,t.events.slice(j)),t.events.length=C}}function m(v){let k=n.length;for(;k-- >v;){const T=n[k];t.containerState=T[1],T[0].exit.call(t,e)}n.length=v}function x(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function zN(e,t,n){return _e(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Vx(e){if(e===null||Et(e)||RN(e))return 1;if(AN(e))return 2}function Up(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Uh={name:"attention",resolveAll:ON,tokenize:FN};function ON(e,t){let n=-1,r,i,o,s,a,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const h={...e[r][1].end},f={...e[n][1].start};Ux(h,-c),Ux(f,c),s={type:c>1?"strongSequence":"emphasisSequence",start:h,end:{...e[r][1].end}},a={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[r][1].end={...s.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Ht(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Ht(u,[["enter",i,t],["enter",s,t],["exit",s,t],["enter",o,t]]),u=Ht(u,Up(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Ht(u,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Ht(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Rn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function FN(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Vx(r);let o;return s;function s(c){return o=c,e.enter("attentionSequence"),a(c)}function a(c){if(c===o)return e.consume(c),a;const u=e.exit("attentionSequence"),d=Vx(c),h=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?h:h&&(i||!f)),u._close=!!(o===42?f:f&&(d||!h)),t(c)}}function Ux(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const BN={name:"autolink",tokenize:VN};function VN(e,t,n){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return _n(p)?(e.consume(p),s):p===64?n(p):u(p)}function s(p){return p===43||p===45||p===46||Nt(p)?(r=1,a(p)):u(p)}function a(p){return p===58?(e.consume(p),r=0,c):(p===43||p===45||p===46||Nt(p))&&r++<32?(e.consume(p),a):(r=0,u(p))}function c(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||Bh(p)?n(p):(e.consume(p),c)}function u(p){return p===64?(e.consume(p),d):jN(p)?(e.consume(p),u):n(p)}function d(p){return Nt(p)?h(p):n(p)}function h(p){return p===46?(e.consume(p),r=0,d):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):f(p)}function f(p){if((p===45||Nt(p))&&r++<63){const g=p===45?f:h;return e.consume(p),g}return n(p)}}const Dc={partial:!0,tokenize:UN};function UN(e,t,n){return r;function r(o){return ge(o)?_e(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||J(o)?t(o):n(o)}}const W2={continuation:{tokenize:$N},exit:HN,name:"blockQuote",tokenize:WN};function WN(e,t,n){const r=this;return i;function i(s){if(s===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return n(s)}function o(s){return ge(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function $N(e,t,n){const r=this;return i;function i(s){return ge(s)?_e(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(W2,t,n)(s)}}function HN(e){e.exit("blockQuote")}const $2={name:"characterEscape",tokenize:YN};function YN(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return PN(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const H2={name:"characterReference",tokenize:GN};function GN(e,t,n){const r=this;let i=0,o,s;return a;function a(h){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),c}function c(h){return h===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(h),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,s=Nt,d(h))}function u(h){return h===88||h===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(h),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=IN,d):(e.enter("characterReferenceValue"),o=7,s=Vh,d(h))}function d(h){if(h===59&&i){const f=e.exit("characterReferenceValue");return s===Nt&&!Vp(r.sliceSerialize(f))?n(h):(e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(h)&&i++<o?(e.consume(h),d):n(h)}}const Wx={partial:!0,tokenize:qN},$x={concrete:!0,name:"codeFenced",tokenize:KN};function KN(e,t,n){const r=this,i={partial:!0,tokenize:T};let o=0,s=0,a;return c;function c(C){return u(C)}function u(C){const j=r.events[r.events.length-1];return o=j&&j[1].type==="linePrefix"?j[2].sliceSerialize(j[1],!0).length:0,a=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(C)}function d(C){return C===a?(s++,e.consume(C),d):s<3?n(C):(e.exit("codeFencedFenceSequence"),ge(C)?_e(e,h,"whitespace")(C):h(C))}function h(C){return C===null||J(C)?(e.exit("codeFencedFence"),r.interrupt?t(C):e.check(Wx,y,k)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(C))}function f(C){return C===null||J(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),h(C)):ge(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),_e(e,p,"whitespace")(C)):C===96&&C===a?n(C):(e.consume(C),f)}function p(C){return C===null||J(C)?h(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(C))}function g(C){return C===null||J(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),h(C)):C===96&&C===a?n(C):(e.consume(C),g)}function y(C){return e.attempt(i,k,w)(C)}function w(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),m}function m(C){return o>0&&ge(C)?_e(e,x,"linePrefix",o+1)(C):x(C)}function x(C){return C===null||J(C)?e.check(Wx,y,k)(C):(e.enter("codeFlowValue"),v(C))}function v(C){return C===null||J(C)?(e.exit("codeFlowValue"),x(C)):(e.consume(C),v)}function k(C){return e.exit("codeFenced"),t(C)}function T(C,j,E){let R=0;return P;function P(U){return C.enter("lineEnding"),C.consume(U),C.exit("lineEnding"),N}function N(U){return C.enter("codeFencedFence"),ge(U)?_e(C,D,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(U):D(U)}function D(U){return U===a?(C.enter("codeFencedFenceSequence"),F(U)):E(U)}function F(U){return U===a?(R++,C.consume(U),F):R>=s?(C.exit("codeFencedFenceSequence"),ge(U)?_e(C,W,"whitespace")(U):W(U)):E(U)}function W(U){return U===null||J(U)?(C.exit("codeFencedFence"),j(U)):E(U)}}}function qN(e,t,n){const r=this;return i;function i(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}const Qu={name:"codeIndented",tokenize:QN},XN={partial:!0,tokenize:JN};function QN(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),_e(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?c(u):J(u)?e.attempt(XN,s,c)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||J(u)?(e.exit("codeFlowValue"),s(u)):(e.consume(u),a)}function c(u){return e.exit("codeIndented"),t(u)}}function JN(e,t,n){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?n(s):J(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):_e(e,o,"linePrefix",5)(s)}function o(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):J(s)?i(s):n(s)}}const ZN={name:"codeText",previous:tD,resolve:eD,tokenize:nD};function eD(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function tD(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function nD(e,t,n){let r=0,i,o;return s;function s(h){return e.enter("codeText"),e.enter("codeTextSequence"),a(h)}function a(h){return h===96?(e.consume(h),r++,a):(e.exit("codeTextSequence"),c(h))}function c(h){return h===null?n(h):h===32?(e.enter("space"),e.consume(h),e.exit("space"),c):h===96?(o=e.enter("codeTextSequence"),i=0,d(h)):J(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(h))}function u(h){return h===null||h===32||h===96||J(h)?(e.exit("codeTextData"),c(h)):(e.consume(h),u)}function d(h){return h===96?(e.consume(h),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(h)):(o.type="codeTextData",u(h))}}class rD{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&$o(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),$o(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),$o(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);$o(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);$o(this.left,n.reverse())}}}function $o(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Y2(e){const t={};let n=-1,r,i,o,s,a,c,u;const d=new rD(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,iD(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(s=d.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},a=d.slice(i,n),a.unshift(r),d.splice(i,n-i+1,a))}}return Rn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function iD(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let s=n._tokenizer;s||(s=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,c=[],u={};let d,h,f=-1,p=n,g=0,y=0;const w=[y];for(;p;){for(;e.get(++i)[1]!==p;);o.push(i),p._tokenizer||(d=r.sliceStream(p),p.next||d.push(null),h&&s.defineSkip(p.start),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(d),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),h=p,p=p.next}for(p=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(y=f+1,w.push(y),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(s.events=[],p?(p._tokenizer=void 0,p.previous=void 0):w.pop(),f=w.length;f--;){const m=a.slice(w[f],w[f+1]),x=o.pop();c.push([x,x+m.length-1]),e.splice(x,2,m)}for(c.reverse(),f=-1;++f<c.length;)u[g+c[f][0]]=g+c[f][1],g+=c[f][1]-c[f][0]-1;return u}const oD={resolve:aD,tokenize:lD},sD={partial:!0,tokenize:cD};function aD(e){return Y2(e),e}function lD(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):J(a)?e.check(sD,s,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function s(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function cD(e,t,n){const r=this;return i;function i(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),_e(e,o,"linePrefix")}function o(s){if(s===null||J(s))return n(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):e.interrupt(r.parser.constructs.flow,n,t)(s)}}function G2(e,t,n,r,i,o,s,a,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return h;function h(m){return m===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(m),e.exit(o),f):m===null||m===32||m===41||Bh(m)?n(m):(e.enter(r),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),y(m))}function f(m){return m===62?(e.enter(o),e.consume(m),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===62?(e.exit("chunkString"),e.exit(a),f(m)):m===null||m===60||J(m)?n(m):(e.consume(m),m===92?g:p)}function g(m){return m===60||m===62||m===92?(e.consume(m),p):p(m)}function y(m){return!d&&(m===null||m===41||Et(m))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(r),t(m)):d<u&&m===40?(e.consume(m),d++,y):m===41?(e.consume(m),d--,y):m===null||m===32||m===40||Bh(m)?n(m):(e.consume(m),m===92?w:y)}function w(m){return m===40||m===41||m===92?(e.consume(m),y):y(m)}}function K2(e,t,n,r,i,o){const s=this;let a=0,c;return u;function u(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(o),d}function d(p){return a>999||p===null||p===91||p===93&&!c||p===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(p):p===93?(e.exit(o),e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):J(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===null||p===91||p===93||J(p)||a++>999?(e.exit("chunkString"),d(p)):(e.consume(p),c||(c=!ge(p)),p===92?f:h)}function f(p){return p===91||p===92||p===93?(e.consume(p),a++,h):h(p)}}function q2(e,t,n,r,i,o){let s;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),s=f===40?41:f,c):n(f)}function c(f){return f===s?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===s?(e.exit(o),c(s)):f===null?n(f):J(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),_e(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===s||f===null||J(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?h:d)}function h(f){return f===s||f===92?(e.consume(f),d):d(f)}}function ms(e,t){let n;return r;function r(i){return J(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ge(i)?_e(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const uD={name:"definition",tokenize:hD},dD={partial:!0,tokenize:fD};function hD(e,t,n){const r=this;let i;return o;function o(p){return e.enter("definition"),s(p)}function s(p){return K2.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return i=ro(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),c):n(p)}function c(p){return Et(p)?ms(e,u)(p):u(p)}function u(p){return G2(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function d(p){return e.attempt(dD,h,h)(p)}function h(p){return ge(p)?_e(e,f,"whitespace")(p):f(p)}function f(p){return p===null||J(p)?(e.exit("definition"),r.parser.defined.push(i),t(p)):n(p)}}function fD(e,t,n){return r;function r(a){return Et(a)?ms(e,i)(a):n(a)}function i(a){return q2(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return ge(a)?_e(e,s,"whitespace")(a):s(a)}function s(a){return a===null||J(a)?t(a):n(a)}}const pD={name:"hardBreakEscape",tokenize:mD};function mD(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return J(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const gD={name:"headingAtx",resolve:yD,tokenize:xD};function yD(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Rn(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function xD(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),s(d)}function s(d){return d===35&&r++<6?(e.consume(d),s):d===null||Et(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||J(d)?(e.exit("atxHeading"),t(d)):ge(d)?_e(e,a,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),a(d))}function u(d){return d===null||d===35||Et(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),u)}}const vD=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Hx=["pre","script","style","textarea"],bD={concrete:!0,name:"htmlFlow",resolveTo:SD,tokenize:CD},wD={partial:!0,tokenize:ED},kD={partial:!0,tokenize:_D};function SD(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function CD(e,t,n){const r=this;let i,o,s,a,c;return u;function u(_){return d(_)}function d(_){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(_),h}function h(_){return _===33?(e.consume(_),f):_===47?(e.consume(_),o=!0,y):_===63?(e.consume(_),i=3,r.interrupt?t:S):_n(_)?(e.consume(_),s=String.fromCharCode(_),w):n(_)}function f(_){return _===45?(e.consume(_),i=2,p):_===91?(e.consume(_),i=5,a=0,g):_n(_)?(e.consume(_),i=4,r.interrupt?t:S):n(_)}function p(_){return _===45?(e.consume(_),r.interrupt?t:S):n(_)}function g(_){const ye="CDATA[";return _===ye.charCodeAt(a++)?(e.consume(_),a===ye.length?r.interrupt?t:D:g):n(_)}function y(_){return _n(_)?(e.consume(_),s=String.fromCharCode(_),w):n(_)}function w(_){if(_===null||_===47||_===62||Et(_)){const ye=_===47,Pe=s.toLowerCase();return!ye&&!o&&Hx.includes(Pe)?(i=1,r.interrupt?t(_):D(_)):vD.includes(s.toLowerCase())?(i=6,ye?(e.consume(_),m):r.interrupt?t(_):D(_)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(_):o?x(_):v(_))}return _===45||Nt(_)?(e.consume(_),s+=String.fromCharCode(_),w):n(_)}function m(_){return _===62?(e.consume(_),r.interrupt?t:D):n(_)}function x(_){return ge(_)?(e.consume(_),x):P(_)}function v(_){return _===47?(e.consume(_),P):_===58||_===95||_n(_)?(e.consume(_),k):ge(_)?(e.consume(_),v):P(_)}function k(_){return _===45||_===46||_===58||_===95||Nt(_)?(e.consume(_),k):T(_)}function T(_){return _===61?(e.consume(_),C):ge(_)?(e.consume(_),T):v(_)}function C(_){return _===null||_===60||_===61||_===62||_===96?n(_):_===34||_===39?(e.consume(_),c=_,j):ge(_)?(e.consume(_),C):E(_)}function j(_){return _===c?(e.consume(_),c=null,R):_===null||J(_)?n(_):(e.consume(_),j)}function E(_){return _===null||_===34||_===39||_===47||_===60||_===61||_===62||_===96||Et(_)?T(_):(e.consume(_),E)}function R(_){return _===47||_===62||ge(_)?v(_):n(_)}function P(_){return _===62?(e.consume(_),N):n(_)}function N(_){return _===null||J(_)?D(_):ge(_)?(e.consume(_),N):n(_)}function D(_){return _===45&&i===2?(e.consume(_),Z):_===60&&i===1?(e.consume(_),ie):_===62&&i===4?(e.consume(_),G):_===63&&i===3?(e.consume(_),S):_===93&&i===5?(e.consume(_),V):J(_)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(wD,te,F)(_)):_===null||J(_)?(e.exit("htmlFlowData"),F(_)):(e.consume(_),D)}function F(_){return e.check(kD,W,te)(_)}function W(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),U}function U(_){return _===null||J(_)?F(_):(e.enter("htmlFlowData"),D(_))}function Z(_){return _===45?(e.consume(_),S):D(_)}function ie(_){return _===47?(e.consume(_),s="",M):D(_)}function M(_){if(_===62){const ye=s.toLowerCase();return Hx.includes(ye)?(e.consume(_),G):D(_)}return _n(_)&&s.length<8?(e.consume(_),s+=String.fromCharCode(_),M):D(_)}function V(_){return _===93?(e.consume(_),S):D(_)}function S(_){return _===62?(e.consume(_),G):_===45&&i===2?(e.consume(_),S):D(_)}function G(_){return _===null||J(_)?(e.exit("htmlFlowData"),te(_)):(e.consume(_),G)}function te(_){return e.exit("htmlFlow"),t(_)}}function _D(e,t,n){const r=this;return i;function i(s){return J(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):n(s)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}function ED(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Dc,t,n)}}const TD={name:"htmlText",tokenize:jD};function jD(e,t,n){const r=this;let i,o,s;return a;function a(S){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(S),c}function c(S){return S===33?(e.consume(S),u):S===47?(e.consume(S),T):S===63?(e.consume(S),v):_n(S)?(e.consume(S),E):n(S)}function u(S){return S===45?(e.consume(S),d):S===91?(e.consume(S),o=0,g):_n(S)?(e.consume(S),x):n(S)}function d(S){return S===45?(e.consume(S),p):n(S)}function h(S){return S===null?n(S):S===45?(e.consume(S),f):J(S)?(s=h,ie(S)):(e.consume(S),h)}function f(S){return S===45?(e.consume(S),p):h(S)}function p(S){return S===62?Z(S):S===45?f(S):h(S)}function g(S){const G="CDATA[";return S===G.charCodeAt(o++)?(e.consume(S),o===G.length?y:g):n(S)}function y(S){return S===null?n(S):S===93?(e.consume(S),w):J(S)?(s=y,ie(S)):(e.consume(S),y)}function w(S){return S===93?(e.consume(S),m):y(S)}function m(S){return S===62?Z(S):S===93?(e.consume(S),m):y(S)}function x(S){return S===null||S===62?Z(S):J(S)?(s=x,ie(S)):(e.consume(S),x)}function v(S){return S===null?n(S):S===63?(e.consume(S),k):J(S)?(s=v,ie(S)):(e.consume(S),v)}function k(S){return S===62?Z(S):v(S)}function T(S){return _n(S)?(e.consume(S),C):n(S)}function C(S){return S===45||Nt(S)?(e.consume(S),C):j(S)}function j(S){return J(S)?(s=j,ie(S)):ge(S)?(e.consume(S),j):Z(S)}function E(S){return S===45||Nt(S)?(e.consume(S),E):S===47||S===62||Et(S)?R(S):n(S)}function R(S){return S===47?(e.consume(S),Z):S===58||S===95||_n(S)?(e.consume(S),P):J(S)?(s=R,ie(S)):ge(S)?(e.consume(S),R):Z(S)}function P(S){return S===45||S===46||S===58||S===95||Nt(S)?(e.consume(S),P):N(S)}function N(S){return S===61?(e.consume(S),D):J(S)?(s=N,ie(S)):ge(S)?(e.consume(S),N):R(S)}function D(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),i=S,F):J(S)?(s=D,ie(S)):ge(S)?(e.consume(S),D):(e.consume(S),W)}function F(S){return S===i?(e.consume(S),i=void 0,U):S===null?n(S):J(S)?(s=F,ie(S)):(e.consume(S),F)}function W(S){return S===null||S===34||S===39||S===60||S===61||S===96?n(S):S===47||S===62||Et(S)?R(S):(e.consume(S),W)}function U(S){return S===47||S===62||Et(S)?R(S):n(S)}function Z(S){return S===62?(e.consume(S),e.exit("htmlTextData"),e.exit("htmlText"),t):n(S)}function ie(S){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),M}function M(S){return ge(S)?_e(e,V,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):V(S)}function V(S){return e.enter("htmlTextData"),s(S)}}const Wp={name:"labelEnd",resolveAll:RD,resolveTo:ND,tokenize:DD},ID={tokenize:MD},PD={tokenize:LD},AD={tokenize:zD};function RD(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Rn(e,0,e.length,n),e}function ND(e,t){let n=e.length,r=0,i,o,s,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",c,t],["enter",u,t]],a=Ht(a,e.slice(o+1,o+r+3)),a=Ht(a,[["enter",d,t]]),a=Ht(a,Up(t.parser.constructs.insideSpan.null,e.slice(o+r+4,s-3),t)),a=Ht(a,[["exit",d,t],e[s-2],e[s-1],["exit",u,t]]),a=Ht(a,e.slice(s+1)),a=Ht(a,[["exit",c,t]]),Rn(e,o,e.length,a),e}function DD(e,t,n){const r=this;let i=r.events.length,o,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(f){return o?o._inactive?h(f):(s=r.parser.defined.includes(ro(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(ID,d,s?d:h)(f):f===91?e.attempt(PD,d,s?u:h)(f):s?d(f):h(f)}function u(f){return e.attempt(AD,d,h)(f)}function d(f){return t(f)}function h(f){return o._balanced=!0,n(f)}}function MD(e,t,n){return r;function r(h){return e.enter("resource"),e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),i}function i(h){return Et(h)?ms(e,o)(h):o(h)}function o(h){return h===41?d(h):G2(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(h)}function s(h){return Et(h)?ms(e,c)(h):d(h)}function a(h){return n(h)}function c(h){return h===34||h===39||h===40?q2(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(h):d(h)}function u(h){return Et(h)?ms(e,d)(h):d(h)}function d(h){return h===41?(e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),e.exit("resource"),t):n(h)}}function LD(e,t,n){const r=this;return i;function i(a){return K2.call(r,e,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(ro(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function s(a){return n(a)}}function zD(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const OD={name:"labelStartImage",resolveAll:Wp.resolveAll,tokenize:FD};function FD(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const BD={name:"labelStartLink",resolveAll:Wp.resolveAll,tokenize:VD};function VD(e,t,n){const r=this;return i;function i(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Ju={name:"lineEnding",tokenize:UD};function UD(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),_e(e,t,"linePrefix")}}const cl={name:"thematicBreak",tokenize:WD};function WD(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),s(u)}function s(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||J(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),ge(u)?_e(e,a,"whitespace")(u):a(u))}}const vt={continuation:{tokenize:GD},exit:qD,name:"list",tokenize:YD},$D={partial:!0,tokenize:XD},HD={partial:!0,tokenize:KD};function YD(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return a;function a(p){const g=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Vh(p)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(cl,n,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(p)}return n(p)}function c(p){return Vh(p)&&++s<10?(e.consume(p),c):(!r.interrupt||s<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):n(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Dc,r.interrupt?n:d,e.attempt($D,f,h))}function d(p){return r.containerState.initialBlankLine=!0,o++,f(p)}function h(p){return ge(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),f):n(p)}function f(p){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function GD(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Dc,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,_e(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!ge(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(HD,t,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,_e(e,e.attempt(vt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function KD(e,t,n){const r=this;return _e(e,i,"listItemIndent",r.containerState.size+1);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?t(o):n(o)}}function qD(e){e.exit(this.containerState.type)}function XD(e,t,n){const r=this;return _e(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const s=r.events[r.events.length-1];return!ge(o)&&s&&s[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Yx={name:"setextUnderline",resolveTo:QD,tokenize:JD};function QD(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",s,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=s,e.push(["exit",s,t]),e}function JD(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,h;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){h=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||h)?(e.enter("setextHeadingLine"),i=u,s(u)):n(u)}function s(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),ge(u)?_e(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||J(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const ZD={tokenize:eM};function eM(e){const t=this,n=e.attempt(Dc,r,e.attempt(this.parser.constructs.flowInitial,i,_e(e,e.attempt(this.parser.constructs.flow,i,e.attempt(oD,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const tM={resolveAll:Q2()},nM=X2("string"),rM=X2("text");function X2(e){return{resolveAll:Q2(e==="text"?iM:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,s,a);return s;function s(d){return u(d)?o(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const h=i[d];let f=-1;if(h)for(;++f<h.length;){const p=h[f];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function Q2(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function iM(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,s=-1,a=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(u===-2)c=!0,a++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||c||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const oM={42:vt,43:vt,45:vt,48:vt,49:vt,50:vt,51:vt,52:vt,53:vt,54:vt,55:vt,56:vt,57:vt,62:W2},sM={91:uD},aM={[-2]:Qu,[-1]:Qu,32:Qu},lM={35:gD,42:cl,45:[Yx,cl],60:bD,61:Yx,95:cl,96:$x,126:$x},cM={38:H2,92:$2},uM={[-5]:Ju,[-4]:Ju,[-3]:Ju,33:OD,38:H2,42:Uh,60:[BN,TD],91:BD,92:[pD,$2],93:Wp,95:Uh,96:ZN},dM={null:[Uh,tM]},hM={null:[42,95]},fM={null:[]},pM=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:hM,contentInitial:sM,disable:fM,document:oM,flow:lM,flowInitial:aM,insideSpan:dM,string:cM,text:uM},Symbol.toStringTag,{value:"Module"}));function mM(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let s=[],a=[];const c={attempt:j(T),check:j(C),consume:x,enter:v,exit:k,interrupt:j(C,{interrupt:!0})},u={code:null,containerState:{},defineSkip:y,events:[],now:g,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:h};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function h(N){return s=Ht(s,N),w(),s[s.length-1]!==null?[]:(E(t,0),u.events=Up(o,u.events,u),u.events)}function f(N,D){return yM(p(N),D)}function p(N){return gM(s,N)}function g(){const{_bufferIndex:N,_index:D,line:F,column:W,offset:U}=r;return{_bufferIndex:N,_index:D,line:F,column:W,offset:U}}function y(N){i[N.line]=N.column,P()}function w(){let N;for(;r._index<s.length;){const D=s[r._index];if(typeof D=="string")for(N=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===N&&r._bufferIndex<D.length;)m(D.charCodeAt(r._bufferIndex));else m(D)}}function m(N){d=d(N)}function x(N){J(N)?(r.line++,r.column=1,r.offset+=N===-3?2:1,P()):N!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=N}function v(N,D){const F=D||{};return F.type=N,F.start=g(),u.events.push(["enter",F,u]),a.push(F),F}function k(N){const D=a.pop();return D.end=g(),u.events.push(["exit",D,u]),D}function T(N,D){E(N,D.from)}function C(N,D){D.restore()}function j(N,D){return F;function F(W,U,Z){let ie,M,V,S;return Array.isArray(W)?te(W):"tokenize"in W?te([W]):G(W);function G(he){return ve;function ve(Ft){const jt=Ft!==null&&he[Ft],lt=Ft!==null&&he.null,qe=[...Array.isArray(jt)?jt:jt?[jt]:[],...Array.isArray(lt)?lt:lt?[lt]:[]];return te(qe)(Ft)}}function te(he){return ie=he,M=0,he.length===0?Z:_(he[M])}function _(he){return ve;function ve(Ft){return S=R(),V=he,he.partial||(u.currentConstruct=he),he.name&&u.parser.constructs.disable.null.includes(he.name)?Pe():he.tokenize.call(D?Object.assign(Object.create(u),D):u,c,ye,Pe)(Ft)}}function ye(he){return N(V,S),U}function Pe(he){return S.restore(),++M<ie.length?_(ie[M]):Z}}}function E(N,D){N.resolveAll&&!o.includes(N)&&o.push(N),N.resolve&&Rn(u.events,D,u.events.length-D,N.resolve(u.events.slice(D),u)),N.resolveTo&&(u.events=N.resolveTo(u.events,u))}function R(){const N=g(),D=u.previous,F=u.currentConstruct,W=u.events.length,U=Array.from(a);return{from:W,restore:Z};function Z(){r=N,u.previous=D,u.currentConstruct=F,u.events.length=W,a=U,P()}}function P(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function gM(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let s;if(n===i)s=[e[n].slice(r,o)];else{if(s=e.slice(n,i),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}o>0&&s.push(e[i].slice(0,o))}return s}function yM(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&i)continue;s=" ";break}default:s=String.fromCharCode(o)}i=o===-2,r.push(s)}return r.join("")}function xM(e){const r={constructs:_N([pM,...(e||{}).extensions||[]]),content:i(NN),defined:[],document:i(MN),flow:i(ZD),lazy:{},string:i(nM),text:i(rM)};return r;function i(o){return s;function s(a){return mM(r,o,a)}}}function vM(e){for(;!Y2(e););return e}const Gx=/[\0\t\n\r]/g;function bM(){let e=1,t="",n=!0,r;return i;function i(o,s,a){const c=[];let u,d,h,f,p;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),h=0,t="",n&&(o.charCodeAt(0)===65279&&h++,n=void 0);h<o.length;){if(Gx.lastIndex=h,u=Gx.exec(o),f=u&&u.index!==void 0?u.index:o.length,p=o.charCodeAt(f),!u){t=o.slice(h);break}if(p===10&&h===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),h<f&&(c.push(o.slice(h,f)),e+=f-h),p){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}h=f+1}return a&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const wM=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function kM(e){return e.replace(wM,SM)}function SM(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return U2(n.slice(o?2:1),o?16:10)}return Vp(n)||e}const J2={}.hasOwnProperty;function CM(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),_M(n)(vM(xM(n).document().write(bM()(e,t,!0))))}function _M(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(yt),autolinkProtocol:R,autolinkEmail:R,atxHeading:o(ki),blockQuote:o(lt),characterEscape:R,characterReference:R,codeFenced:o(qe),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(qe,s),codeText:o(Xe,s),codeTextData:R,data:R,codeFlowValue:R,definition:o(wi),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(mn),hardBreakEscape:o(Bt),hardBreakTrailing:o(Bt),htmlFlow:o(Fr,s),htmlFlowData:R,htmlText:o(Fr,s),htmlTextData:R,image:o(gn),label:s,link:o(yt),listItem:o(tr),listItemValue:f,listOrdered:o(er,h),listUnordered:o(er),paragraph:o(nr),reference:_,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(ki),strong:o(Y),thematicBreak:o(He)},exit:{atxHeading:c(),atxHeadingSequence:T,autolink:c(),autolinkEmail:jt,autolinkProtocol:Ft,blockQuote:c(),characterEscapeValue:P,characterReferenceMarkerHexadecimal:Pe,characterReferenceMarkerNumeric:Pe,characterReferenceValue:he,characterReference:ve,codeFenced:c(w),codeFencedFence:y,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:P,codeIndented:c(m),codeText:c(U),codeTextData:P,data:P,definition:c(),definitionDestinationString:k,definitionLabelString:x,definitionTitleString:v,emphasis:c(),hardBreakEscape:c(D),hardBreakTrailing:c(D),htmlFlow:c(F),htmlFlowData:P,htmlText:c(W),htmlTextData:P,image:c(ie),label:V,labelText:M,lineEnding:N,link:c(Z),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ye,resourceDestinationString:S,resourceTitleString:G,resource:te,setextHeading:c(E),setextHeadingLineSequence:j,setextHeadingText:C,strong:c(),thematicBreak:c()}};Z2(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(A){let O={type:"root",children:[]};const q={stack:[O],tokenStack:[],config:t,enter:a,exit:u,buffer:s,resume:d,data:n},oe=[];let fe=-1;for(;++fe<A.length;)if(A[fe][1].type==="listOrdered"||A[fe][1].type==="listUnordered")if(A[fe][0]==="enter")oe.push(fe);else{const It=oe.pop();fe=i(A,It,fe)}for(fe=-1;++fe<A.length;){const It=t[A[fe][0]];J2.call(It,A[fe][1].type)&&It[A[fe][1].type].call(Object.assign({sliceSerialize:A[fe][2].sliceSerialize},q),A[fe][1])}if(q.tokenStack.length>0){const It=q.tokenStack[q.tokenStack.length-1];(It[1]||Kx).call(q,void 0,It[0])}for(O.position={start:sr(A.length>0?A[0][1].start:{line:1,column:1,offset:0}),end:sr(A.length>0?A[A.length-2][1].end:{line:1,column:1,offset:0})},fe=-1;++fe<t.transforms.length;)O=t.transforms[fe](O)||O;return O}function i(A,O,q){let oe=O-1,fe=-1,It=!1,Zt,en,Br,Vr;for(;++oe<=q;){const ct=A[oe];switch(ct[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ct[0]==="enter"?fe++:fe--,Vr=void 0;break}case"lineEndingBlank":{ct[0]==="enter"&&(Zt&&!Vr&&!fe&&!Br&&(Br=oe),Vr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Vr=void 0}if(!fe&&ct[0]==="enter"&&ct[1].type==="listItemPrefix"||fe===-1&&ct[0]==="exit"&&(ct[1].type==="listUnordered"||ct[1].type==="listOrdered")){if(Zt){let rr=oe;for(en=void 0;rr--;){const xt=A[rr];if(xt[1].type==="lineEnding"||xt[1].type==="lineEndingBlank"){if(xt[0]==="exit")continue;en&&(A[en][1].type="lineEndingBlank",It=!0),xt[1].type="lineEnding",en=rr}else if(!(xt[1].type==="linePrefix"||xt[1].type==="blockQuotePrefix"||xt[1].type==="blockQuotePrefixWhitespace"||xt[1].type==="blockQuoteMarker"||xt[1].type==="listItemIndent"))break}Br&&(!en||Br<en)&&(Zt._spread=!0),Zt.end=Object.assign({},en?A[en][1].start:ct[1].end),A.splice(en||oe,0,["exit",Zt,ct[2]]),oe++,q++}if(ct[1].type==="listItemPrefix"){const rr={type:"listItem",_spread:!1,start:Object.assign({},ct[1].start),end:void 0};Zt=rr,A.splice(oe,0,["enter",rr,ct[2]]),oe++,q++,Br=void 0,Vr=!0}}}return A[O][1]._spread=It,q}function o(A,O){return q;function q(oe){a.call(this,A(oe),oe),O&&O.call(this,oe)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(A,O,q){this.stack[this.stack.length-1].children.push(A),this.stack.push(A),this.tokenStack.push([O,q||void 0]),A.position={start:sr(O.start),end:void 0}}function c(A){return O;function O(q){A&&A.call(this,q),u.call(this,q)}}function u(A,O){const q=this.stack.pop(),oe=this.tokenStack.pop();if(oe)oe[0].type!==A.type&&(O?O.call(this,A,oe[0]):(oe[1]||Kx).call(this,A,oe[0]));else throw new Error("Cannot close `"+A.type+"` ("+ps({start:A.start,end:A.end})+"): it’s not open");q.position.end=sr(A.end)}function d(){return SN(this.stack.pop())}function h(){this.data.expectingFirstListItemValue=!0}function f(A){if(this.data.expectingFirstListItemValue){const O=this.stack[this.stack.length-2];O.start=Number.parseInt(this.sliceSerialize(A),10),this.data.expectingFirstListItemValue=void 0}}function p(){const A=this.resume(),O=this.stack[this.stack.length-1];O.lang=A}function g(){const A=this.resume(),O=this.stack[this.stack.length-1];O.meta=A}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function w(){const A=this.resume(),O=this.stack[this.stack.length-1];O.value=A.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const A=this.resume(),O=this.stack[this.stack.length-1];O.value=A.replace(/(\r?\n|\r)$/g,"")}function x(A){const O=this.resume(),q=this.stack[this.stack.length-1];q.label=O,q.identifier=ro(this.sliceSerialize(A)).toLowerCase()}function v(){const A=this.resume(),O=this.stack[this.stack.length-1];O.title=A}function k(){const A=this.resume(),O=this.stack[this.stack.length-1];O.url=A}function T(A){const O=this.stack[this.stack.length-1];if(!O.depth){const q=this.sliceSerialize(A).length;O.depth=q}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function j(A){const O=this.stack[this.stack.length-1];O.depth=this.sliceSerialize(A).codePointAt(0)===61?1:2}function E(){this.data.setextHeadingSlurpLineEnding=void 0}function R(A){const q=this.stack[this.stack.length-1].children;let oe=q[q.length-1];(!oe||oe.type!=="text")&&(oe=re(),oe.position={start:sr(A.start),end:void 0},q.push(oe)),this.stack.push(oe)}function P(A){const O=this.stack.pop();O.value+=this.sliceSerialize(A),O.position.end=sr(A.end)}function N(A){const O=this.stack[this.stack.length-1];if(this.data.atHardBreak){const q=O.children[O.children.length-1];q.position.end=sr(A.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(O.type)&&(R.call(this,A),P.call(this,A))}function D(){this.data.atHardBreak=!0}function F(){const A=this.resume(),O=this.stack[this.stack.length-1];O.value=A}function W(){const A=this.resume(),O=this.stack[this.stack.length-1];O.value=A}function U(){const A=this.resume(),O=this.stack[this.stack.length-1];O.value=A}function Z(){const A=this.stack[this.stack.length-1];if(this.data.inReference){const O=this.data.referenceType||"shortcut";A.type+="Reference",A.referenceType=O,delete A.url,delete A.title}else delete A.identifier,delete A.label;this.data.referenceType=void 0}function ie(){const A=this.stack[this.stack.length-1];if(this.data.inReference){const O=this.data.referenceType||"shortcut";A.type+="Reference",A.referenceType=O,delete A.url,delete A.title}else delete A.identifier,delete A.label;this.data.referenceType=void 0}function M(A){const O=this.sliceSerialize(A),q=this.stack[this.stack.length-2];q.label=kM(O),q.identifier=ro(O).toLowerCase()}function V(){const A=this.stack[this.stack.length-1],O=this.resume(),q=this.stack[this.stack.length-1];if(this.data.inReference=!0,q.type==="link"){const oe=A.children;q.children=oe}else q.alt=O}function S(){const A=this.resume(),O=this.stack[this.stack.length-1];O.url=A}function G(){const A=this.resume(),O=this.stack[this.stack.length-1];O.title=A}function te(){this.data.inReference=void 0}function _(){this.data.referenceType="collapsed"}function ye(A){const O=this.resume(),q=this.stack[this.stack.length-1];q.label=O,q.identifier=ro(this.sliceSerialize(A)).toLowerCase(),this.data.referenceType="full"}function Pe(A){this.data.characterReferenceType=A.type}function he(A){const O=this.sliceSerialize(A),q=this.data.characterReferenceType;let oe;q?(oe=U2(O,q==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):oe=Vp(O);const fe=this.stack[this.stack.length-1];fe.value+=oe}function ve(A){const O=this.stack.pop();O.position.end=sr(A.end)}function Ft(A){P.call(this,A);const O=this.stack[this.stack.length-1];O.url=this.sliceSerialize(A)}function jt(A){P.call(this,A);const O=this.stack[this.stack.length-1];O.url="mailto:"+this.sliceSerialize(A)}function lt(){return{type:"blockquote",children:[]}}function qe(){return{type:"code",lang:null,meta:null,value:""}}function Xe(){return{type:"inlineCode",value:""}}function wi(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function mn(){return{type:"emphasis",children:[]}}function ki(){return{type:"heading",depth:0,children:[]}}function Bt(){return{type:"break"}}function Fr(){return{type:"html",value:""}}function gn(){return{type:"image",title:null,url:"",alt:null}}function yt(){return{type:"link",title:null,url:"",children:[]}}function er(A){return{type:"list",ordered:A.type==="listOrdered",start:null,spread:A._spread,children:[]}}function tr(A){return{type:"listItem",spread:A._spread,checked:null,children:[]}}function nr(){return{type:"paragraph",children:[]}}function Y(){return{type:"strong",children:[]}}function re(){return{type:"text",value:""}}function He(){return{type:"thematicBreak"}}}function sr(e){return{line:e.line,column:e.column,offset:e.offset}}function Z2(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Z2(e,r):EM(e,r)}}function EM(e,t){let n;for(n in t)if(J2.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Kx(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ps({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ps({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ps({start:t.start,end:t.end})+") is still open")}function TM(e){const t=this;t.parser=n;function n(r){return CM(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function jM(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function IM(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function PM(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function AM(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function RM(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function NM(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=jo(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let s,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=o+1,a+=1,e.footnoteCounts.set(r,a);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function DM(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function MM(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function ek(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function LM(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ek(e,t);const i={src:jo(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function zM(e,t){const n={src:jo(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function OM(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function FM(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ek(e,t);const i={href:jo(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function BM(e,t){const n={href:jo(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function VM(e,t,n){const r=e.all(t),i=n?UM(n):tk(t),o={},s=[];if(typeof t.checked=="boolean"){const d=r[0];let h;d&&d.type==="element"&&d.tagName==="p"?h=d:(h={type:"element",tagName:"p",properties:{},children:[]},r.unshift(h)),h.children.length>0&&h.children.unshift({type:"text",value:" "}),h.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const d=r[a];(i||a!==0||d.type!=="element"||d.tagName!=="p")&&s.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?s.push(...d.children):s.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:s};return e.patch(t,u),e.applyData(t,u)}function UM(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=tk(n[r])}return t}function tk(e){const t=e.spread;return t??e.children.length>1}function WM(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function $M(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function HM(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function YM(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function GM(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],s),i.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=zp(t.children[1]),c=M2(t.children[t.children.length-1]);a&&c&&(s.position={start:a,end:c}),i.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function KM(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:t.children.length;let c=-1;const u=[];for(;++c<a;){const h=t.children[c],f={},p=s?s[c]:void 0;p&&(f.align=p);let g={type:"element",tagName:o,properties:f,children:[]};h&&(g.children=e.all(h),e.patch(h,g),g=e.applyData(h,g)),u.push(g)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function qM(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const qx=9,Xx=32;function XM(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Qx(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Qx(t.slice(i),i>0,!1)),o.join("")}function Qx(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===qx||o===Xx;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===qx||o===Xx;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function QM(e,t){const n={type:"text",value:XM(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function JM(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const ZM={blockquote:jM,break:IM,code:PM,delete:AM,emphasis:RM,footnoteReference:NM,heading:DM,html:MM,imageReference:LM,image:zM,inlineCode:OM,linkReference:FM,link:BM,listItem:VM,list:WM,paragraph:$M,root:HM,strong:YM,table:GM,tableCell:qM,tableRow:KM,text:QM,thematicBreak:JM,toml:Na,yaml:Na,definition:Na,footnoteDefinition:Na};function Na(){}const nk=-1,Mc=0,gs=1,ic=2,$p=3,Hp=4,Yp=5,Gp=6,rk=7,ik=8,ok=typeof self=="object"?self:globalThis,Jx=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new ok[e](t)},eL=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,s]=t[i];switch(o){case Mc:case nk:return n(s,i);case gs:{const a=n([],i);for(const c of s)a.push(r(c));return a}case ic:{const a=n({},i);for(const[c,u]of s)a[r(c)]=r(u);return a}case $p:return n(new Date(s),i);case Hp:{const{source:a,flags:c}=s;return n(new RegExp(a,c),i)}case Yp:{const a=n(new Map,i);for(const[c,u]of s)a.set(r(c),r(u));return a}case Gp:{const a=n(new Set,i);for(const c of s)a.add(r(c));return a}case rk:{const{name:a,message:c}=s;return n(typeof ok[a]=="function"?Jx(a,c):new Error(c),i)}case ik:return n(BigInt(s),i);case"BigInt":return n(Object(BigInt(s)),i);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return n(new DataView(a),s)}}return n(Jx(o,s),i)};return r},Zx=e=>eL(new Map,e)(0),Qr="",{toString:tL}={},{keys:nL}=Object,Ho=e=>{const t=typeof e;if(t!=="object"||!e)return[Mc,t];const n=tL.call(e).slice(8,-1);switch(n){case"Array":return[gs,Qr];case"Object":return[ic,Qr];case"Date":return[$p,Qr];case"RegExp":return[Hp,Qr];case"Map":return[Yp,Qr];case"Set":return[Gp,Qr];case"DataView":return[gs,n]}return n.includes("Array")?[gs,n]:e instanceof Error?[rk,e.name||"Error"]:[ic,n]},Da=([e,t])=>e===Mc&&(t==="function"||t==="symbol"),rL=(e,t,n,r)=>{const i=(s,a)=>{const c=r.push(s)-1;return n.set(a,c),c},o=s=>{if(n.has(s))return n.get(s);let[a,c]=Ho(s);switch(a){case Mc:{let d=s;switch(c){case"bigint":a=ik,d=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([nk],s)}return i([a,d],s)}case gs:{if(c){let f=s;return c==="DataView"?f=new Uint8Array(s.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(s)),i([c,[...f]],s)}const d=[],h=i([a,d],s);for(const f of s)d.push(o(f));return h}case ic:{if(c)switch(c){case"BigInt":return i([c,s.toString()],s);case"Boolean":case"Number":case"String":return i([c,s.valueOf()],s)}if(t&&"toJSON"in s)return o(s.toJSON());const d=[],h=i([a,d],s);for(const f of nL(s))(e||!Da(Ho(s[f])))&&d.push([o(f),o(s[f])]);return h}case $p:return i([a,isNaN(s.getTime())?Qr:s.toISOString()],s);case Hp:{const{source:d,flags:h}=s;return i([a,{source:d,flags:h}],s)}case Yp:{const d=[],h=i([a,d],s);for(const[f,p]of s)(e||!(Da(Ho(f))||Da(Ho(p))))&&d.push([o(f),o(p)]);return h}case Gp:{const d=[],h=i([a,d],s);for(const f of s)(e||!Da(Ho(f)))&&d.push(o(f));return h}}const{message:u}=s;return i([a,{name:c,message:u}],s)};return o},e0=(e,{json:t,lossy:n}={})=>{const r=[];return rL(!(t||n),!!t,new Map,r)(e),r},oc=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Zx(e0(e,t)):structuredClone(e):(e,t)=>Zx(e0(e,t));function iL(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function oL(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function sL(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||iL,r=e.options.footnoteBackLabel||oL,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),h=String(u.identifier).toUpperCase(),f=jo(h.toLowerCase());let p=0;const g=[],y=e.footnoteCounts.get(h);for(;y!==void 0&&++p<=y;){g.length>0&&g.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,p);typeof x=="string"&&(x={type:"text",value:x}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,p),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const w=d[d.length-1];if(w&&w.type==="element"&&w.tagName==="p"){const x=w.children[w.children.length-1];x&&x.type==="text"?x.value+=" ":w.children.push({type:"text",value:" "}),w.children.push(...g)}else d.push(...g);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,m),a.push(m)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...oc(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const sk=function(e){if(e==null)return uL;if(typeof e=="function")return Lc(e);if(typeof e=="object")return Array.isArray(e)?aL(e):lL(e);if(typeof e=="string")return cL(e);throw new Error("Expected function, string, or object as test")};function aL(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=sk(e[n]);return Lc(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function lL(e){const t=e;return Lc(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function cL(e){return Lc(t);function t(n){return n&&n.type===e}}function Lc(e){return t;function t(n,r,i){return!!(dL(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function uL(){return!0}function dL(e){return e!==null&&typeof e=="object"&&"type"in e}const ak=[],hL=!0,t0=!1,fL="skip";function pL(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=sk(i),s=r?-1:1;a(e,void 0,[])();function a(c,u,d){const h=c&&typeof c=="object"?c:{};if(typeof h.type=="string"){const p=typeof h.tagName=="string"?h.tagName:typeof h.name=="string"?h.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(p?"<"+p+">":""))+")"})}return f;function f(){let p=ak,g,y,w;if((!t||o(c,u,d[d.length-1]||void 0))&&(p=mL(n(c,d)),p[0]===t0))return p;if("children"in c&&c.children){const m=c;if(m.children&&p[0]!==fL)for(y=(r?m.children.length:-1)+s,w=d.concat(m);y>-1&&y<m.children.length;){const x=m.children[y];if(g=a(x,y,w)(),g[0]===t0)return g;y=typeof g[1]=="number"?g[1]:y+s}}return p}}}function mL(e){return Array.isArray(e)?e:typeof e=="number"?[hL,e]:e==null?ak:[e]}function lk(e,t,n,r){let i,o,s;typeof t=="function"&&typeof n!="function"?(o=void 0,s=t,i=n):(o=t,s=n,i=r),pL(e,o,a,i);function a(c,u){const d=u[u.length-1],h=d?d.children.indexOf(c):void 0;return s(c,h,d)}}const Wh={}.hasOwnProperty,gL={};function yL(e,t){const n=t||gL,r=new Map,i=new Map,o=new Map,s={...ZM,...n.handlers},a={all:u,applyData:vL,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:s,one:c,options:n,patch:xL,wrap:wL};return lk(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const h=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();h.has(f)||h.set(f,d)}}),a;function c(d,h){const f=d.type,p=a.handlers[f];if(Wh.call(a.handlers,f)&&p)return p(a,d,h);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in d){const{children:y,...w}=d,m=oc(w);return m.children=a.all(d),m}return oc(d)}return(a.options.unknownHandler||bL)(a,d,h)}function u(d){const h=[];if("children"in d){const f=d.children;let p=-1;for(;++p<f.length;){const g=a.one(f[p],d);if(g){if(p&&f[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=n0(g.value)),!Array.isArray(g)&&g.type==="element")){const y=g.children[0];y&&y.type==="text"&&(y.value=n0(y.value))}Array.isArray(g)?h.push(...g):h.push(g)}}}return h}}function xL(e,t){e.position&&(t.position=tN(e))}function vL(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const s="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,oc(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function bL(e,t){const n=t.data||{},r="value"in t&&!(Wh.call(n,"hProperties")||Wh.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function wL(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function n0(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function r0(e,t){const n=yL(e,t),r=n.one(e,void 0),i=sL(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function kL(e,t){return e&&"run"in e?async function(n,r){const i=r0(n,{file:r,...t});await e.run(i,r)}:function(n,r){return r0(n,{file:r,...e||t})}}function i0(e){if(e)throw e}var ul=Object.prototype.hasOwnProperty,ck=Object.prototype.toString,o0=Object.defineProperty,s0=Object.getOwnPropertyDescriptor,a0=function(t){return typeof Array.isArray=="function"?Array.isArray(t):ck.call(t)==="[object Array]"},l0=function(t){if(!t||ck.call(t)!=="[object Object]")return!1;var n=ul.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&ul.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||ul.call(t,i)},c0=function(t,n){o0&&n.name==="__proto__"?o0(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},u0=function(t,n){if(n==="__proto__")if(ul.call(t,n)){if(s0)return s0(t,n).value}else return;return t[n]},SL=function e(){var t,n,r,i,o,s,a=arguments[0],c=1,u=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},c=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=u0(a,n),i=u0(t,n),a!==i&&(d&&i&&(l0(i)||(o=a0(i)))?(o?(o=!1,s=r&&a0(r)?r:[]):s=r&&l0(r)?r:{},c0(a,{name:n,newValue:e(d,s,i)})):typeof i<"u"&&c0(a,{name:n,newValue:i}));return a};const Zu=Gh(SL);function $h(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function CL(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...i);function a(c,...u){const d=e[++o];let h=-1;if(c){s(c);return}for(;++h<i.length;)(u[h]===null||u[h]===void 0)&&(u[h]=i[h]);i=u,d?_L(d,a)(...u):s(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function _L(e,t){let n;return r;function r(...s){const a=e.length>s.length;let c;a&&s.push(i);try{c=e.apply(this,s)}catch(u){const d=u;if(a&&n)throw d;return i(d)}a||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(s,...a){n||(n=!0,t(s,...a))}function o(s){i(null,s)}}const wn={basename:EL,dirname:TL,extname:jL,join:IL,sep:"/"};function EL(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ia(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let s=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else s<0&&(o=!0,s=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=s));return n===r?r=s:r<0&&(r=e.length),e.slice(n,r)}function TL(e){if(ia(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function jL(e){ia(e);let t=e.length,n=-1,r=0,i=-1,o=0,s;for(;t--;){const a=e.codePointAt(t);if(a===47){if(s){r=t+1;break}continue}n<0&&(s=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function IL(...e){let t=-1,n;for(;++t<e.length;)ia(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":PL(n)}function PL(e){ia(e);const t=e.codePointAt(0)===47;let n=AL(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function AL(e,t){let n="",r=0,i=-1,o=0,s=-1,a,c;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=s,o=0;continue}}else if(n.length>0){n="",r=0,i=s,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,s):n=e.slice(i+1,s),r=s-i-1;i=s,o=0}else a===46&&o>-1?o++:o=-1}return n}function ia(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const RL={cwd:NL};function NL(){return"/"}function Hh(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function DL(e){if(typeof e=="string")e=new URL(e);else if(!Hh(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return ML(e)}function ML(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const ed=["history","path","basename","stem","extname","dirname"];class uk{constructor(t){let n;t?Hh(t)?n={path:t}:typeof t=="string"||LL(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":RL.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ed.length;){const o=ed[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)ed.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?wn.basename(this.path):void 0}set basename(t){nd(t,"basename"),td(t,"basename"),this.path=wn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?wn.dirname(this.path):void 0}set dirname(t){d0(this.basename,"dirname"),this.path=wn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?wn.extname(this.path):void 0}set extname(t){if(td(t,"extname"),d0(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=wn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Hh(t)&&(t=DL(t)),nd(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?wn.basename(this.path,this.extname):void 0}set stem(t){nd(t,"stem"),td(t,"stem"),this.path=wn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new at(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function td(e,t){if(e&&e.includes(wn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+wn.sep+"`")}function nd(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function d0(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function LL(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const zL=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},OL={}.hasOwnProperty;class Kp extends zL{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=CL()}copy(){const t=new Kp;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Zu(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(od("data",this.frozen),this.namespace[t]=n,this):OL.call(this.namespace,t)&&this.namespace[t]||void 0:t?(od("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ma(t),r=this.parser||this.Parser;return rd("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),rd("process",this.parser||this.Parser),id("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,s){const a=Ma(t),c=r.parse(a);r.run(c,a,function(d,h,f){if(d||!h||!f)return u(d);const p=h,g=r.stringify(p,f);VL(g)?f.value=g:f.result=g,u(d,f)});function u(d,h){d||!h?s(d):o?o(h):n(void 0,h)}}}processSync(t){let n=!1,r;return this.freeze(),rd("processSync",this.parser||this.Parser),id("processSync",this.compiler||this.Compiler),this.process(t,i),f0("processSync","process",n),r;function i(o,s){n=!0,i0(o),r=s}}run(t,n,r){h0(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(s,a){const c=Ma(n);i.run(t,c,u);function u(d,h,f){const p=h||t;d?a(d):s?s(p):r(void 0,p,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),f0("runSync","run",r),i;function o(s,a){i0(s),i=a,r=!0}}stringify(t,n){this.freeze();const r=Ma(n),i=this.compiler||this.Compiler;return id("stringify",i),h0(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(od("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...h]=u;c(d,h)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=Zu(!0,i.settings,u.settings))}function a(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const h=u[d];o(h)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let h=-1,f=-1;for(;++h<r.length;)if(r[h][0]===u){f=h;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[p,...g]=d;const y=r[f][1];$h(y)&&$h(p)&&(p=Zu(!0,y,p)),r[f]=[u,p,...g]}}}}const FL=new Kp().freeze();function rd(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function id(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function od(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function h0(e){if(!$h(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function f0(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ma(e){return BL(e)?e:new uk(e)}function BL(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function VL(e){return typeof e=="string"||UL(e)}function UL(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const WL="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",p0=[],m0={allowDangerousHtml:!0},$L=/^(https?|ircs?|mailto|xmpp)$/i,HL=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function YL(e){const t=GL(e),n=KL(e);return qL(t.runSync(t.parse(n),n),e)}function GL(e){const t=e.rehypePlugins||p0,n=e.remarkPlugins||p0,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...m0}:m0;return FL().use(TM).use(n).use(kL,r).use(t)}function KL(e){const t=e.children||"",n=new uk;return typeof t=="string"&&(n.value=t),n}function qL(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,s=t.skipHtml,a=t.unwrapDisallowed,c=t.urlTransform||XL;for(const d of HL)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+WL+d.id,void 0);return lk(e,u),sN(e,{Fragment:l.Fragment,components:i,ignoreInvalidStyle:!0,jsx:l.jsx,jsxs:l.jsxs,passKeys:!0,passNode:!0});function u(d,h,f){if(d.type==="raw"&&f&&typeof h=="number")return s?f.children.splice(h,1):f.children[h]={type:"text",value:d.value},h;if(d.type==="element"){let p;for(p in Xu)if(Object.hasOwn(Xu,p)&&Object.hasOwn(d.properties,p)){const g=d.properties[p],y=Xu[p];(y===null||y.includes(d.tagName))&&(d.properties[p]=c(String(g||""),p,d))}}if(d.type==="element"){let p=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!p&&r&&typeof h=="number"&&(p=!r(d,h,f)),p&&f&&typeof h=="number")return a&&d.children?f.children.splice(h,1,...d.children):f.children.splice(h,1),h}}}function XL(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||$L.test(e.slice(0,t))?e:""}const QL=[{label:"📊 Storage usage",msg:"How much storage do I have?"},{label:"📤 Upload help",msg:"How do I upload files?"},{label:"🔗 Share a file",msg:"How do I share a file with someone?"},{label:"🖨️ Quick Print",msg:"How does the Quick Print feature work?"},{label:"💳 Plans & pricing",msg:"What plans are available?"},{label:"🛡️ Security",msg:"How secure is my data?"}];function JL({elevated:e=!1}){const[t,n]=b.useState(!1),[r,i]=b.useState([{role:"assistant",content:`Hi there! 👋 I'm **CloudVault AI**. I can help you with storage, file sharing, uploads, and more.

Try one of the suggestions below or ask me anything!`}]),[o,s]=b.useState(""),[a,c]=b.useState(!1),u=b.useRef(null),d=b.useRef(null),h=()=>{var m;(m=u.current)==null||m.scrollIntoView({behavior:"smooth"})};b.useEffect(()=>{h()},[r,a]),b.useEffect(()=>{const m=x=>{x.altKey&&x.key==="c"&&(x.preventDefault(),n(v=>!v))};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]),b.useEffect(()=>{t&&d.current&&setTimeout(()=>{var m;return(m=d.current)==null?void 0:m.focus()},200)},[t]);const f=async m=>{if(!m.trim()||a)return;const x=m.trim();s(""),i(v=>[...v,{role:"user",content:x}]),c(!0);try{const v=r.slice(1),k=await wt("/chat/ask",{method:"POST",body:JSON.stringify({message:x,history:v})});if(k&&(k.reply||k.error))i(T=>[...T,{role:"assistant",content:k.reply||k.error||"Sorry, something went wrong."}]);else throw new Error("Invalid response")}catch(v){console.error("Chat error:",v),i(k=>[...k,{role:"assistant",content:"Sorry, I couldn't connect to the server. Please check your connection and try again. 🔄"}])}finally{c(!1)}},p=async m=>{m.preventDefault(),f(o)},g=m=>{f(m)},y=()=>{i([{role:"assistant",content:"Chat cleared! 🧹 How can I help you?"}])},w=r.length<=2&&!a;return l.jsx("div",{className:`cva-widget-container${e?" cva-widget-container--elevated":""}`,children:l.jsx(n3,{mode:"wait",children:t?l.jsxs(Ra.div,{initial:{opacity:0,y:12,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:12,scale:.95},transition:{duration:.2,ease:"easeOut"},className:"cva-window",children:[l.jsxs("div",{className:"cva-header",children:[l.jsxs("div",{className:"cva-header-info",children:[l.jsx("div",{className:"cva-header-avatar",children:l.jsx(Ca,{size:18})}),l.jsxs("div",{children:[l.jsx("h3",{className:"cva-header-title",children:"CloudVault AI"}),l.jsxs("div",{className:"cva-header-status",children:[l.jsx("span",{})," Online"]})]})]}),l.jsxs("div",{className:"cva-header-actions",children:[l.jsx("button",{type:"button",className:"cva-icon-btn",onClick:y,"aria-label":"Clear chat",title:"Clear chat",children:l.jsx(G_,{size:15})}),l.jsx("button",{type:"button",className:"cva-icon-btn",onClick:()=>n(!1),"aria-label":"Close",children:l.jsx(Hf,{size:16})})]})]}),l.jsxs("div",{className:"cva-messages",children:[r.map((m,x)=>l.jsxs(Ra.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:x===r.length-1?.05:0},className:`cva-message-row ${m.role}`,children:[l.jsx("div",{className:"cva-message-avatar",children:m.role==="assistant"?l.jsx(Ca,{size:16}):l.jsx(q_,{size:16})}),l.jsx("div",{className:"cva-message-bubble",children:l.jsx(YL,{components:{table:({node:v,...k})=>l.jsx("table",{className:"cva-table",...k}),a:({node:v,...k})=>l.jsx("a",{target:"_blank",rel:"noopener noreferrer",...k})},children:m.content})})]},x)),a&&l.jsxs(Ra.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},className:"cva-message-row assistant",children:[l.jsx("div",{className:"cva-message-avatar",children:l.jsx(Ca,{size:16})}),l.jsx("div",{className:"cva-message-bubble",children:l.jsxs("div",{className:"cva-typing",children:[l.jsx("div",{className:"cva-dot"}),l.jsx("div",{className:"cva-dot"}),l.jsx("div",{className:"cva-dot"})]})})]}),l.jsx("div",{ref:u})]}),w&&l.jsx("div",{className:"cva-suggestions",children:QL.map(m=>l.jsx("button",{type:"button",className:"cva-chip",onClick:()=>g(m.msg),disabled:a,children:m.label},m.msg))}),l.jsxs("div",{className:"cva-input-area",children:[l.jsxs("form",{onSubmit:p,className:"cva-input-wrapper",children:[l.jsx("input",{ref:d,type:"text",value:o,onChange:m=>s(m.target.value),placeholder:"Ask me anything…",className:"cva-input",disabled:a}),l.jsx("button",{type:"submit",className:"cva-send-btn",disabled:!o.trim()||a,children:l.jsx($_,{size:14,style:{marginLeft:"1px"}})})]}),l.jsx("div",{className:"cva-input-hint",children:"Alt+C to toggle · Powered by AI"})]})]},"window"):l.jsxs(Ra.button,{type:"button",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.2,ease:"easeOut"},onClick:()=>n(!0),className:"cva-toggle-btn","aria-label":"Open CloudVault AI (Alt+C)",title:"CloudVault AI (Alt+C)",children:[l.jsx(Ca,{size:22}),l.jsx("span",{className:"cva-status-dot","aria-hidden":"true"})]},"toggle")})})}const ZL=b.lazy(()=>vi(()=>import("./ProfilePage-BG1Dcivg.js"),[])),e8=b.lazy(()=>vi(()=>import("./SettingsPage-CGjktvAk.js"),[])),t8=b.lazy(()=>vi(()=>import("./SecurityPage-C_9k1M9Y.js"),[])),n8=b.lazy(()=>vi(()=>import("./BillingPage-CxylTApH.js"),[])),r8=b.lazy(()=>vi(()=>import("./HelpPage-BfOGbmS9.js"),[])),i8=b.lazy(()=>vi(()=>import("./ActivityPage-CQ0jkRuk.js"),[])),sd=b.lazy(()=>vi(()=>import("./FileListPage-Ci7OIyc_.js"),[]));function Fn(){return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:48},children:l.jsx(Yh,{size:28})})}function o8({msg:e,type:t,onClose:n}){b.useEffect(()=>{const i=setTimeout(n,3500);return()=>clearTimeout(i)},[n]);const r=t==="error"?"var(--danger)":t==="success"?"var(--accent)":"var(--accent-blue)";return l.jsxs("div",{className:"toast",role:"alert","aria-live":"polite",style:{position:"fixed",bottom:32,right:32,zIndex:9999,background:r,color:"#fff",padding:"14px 24px",borderRadius:"var(--radius)",fontFamily:"var(--font)",fontWeight:600,fontSize:14,boxShadow:"var(--shadow)",animation:"slideUp .3s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10,maxWidth:420},children:[l.jsx("span",{children:t==="error"?"✕":t==="success"?"✓":"ℹ"}),l.jsx("span",{style:{flex:1},children:e}),l.jsx("span",{onClick:n,style:{cursor:"pointer",opacity:.7,fontSize:18,lineHeight:1},children:"×"})]})}function Yh({size:e=22,color:t="var(--accent)"}){return l.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:t,borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function dl({value:e}){const t=e>85?"var(--danger)":e>60?"var(--accent-amber)":"var(--accent)";return l.jsx("div",{style:{background:"var(--border)",borderRadius:99,height:6,overflow:"hidden",width:"100%"},children:l.jsx("div",{style:{width:`${e}%`,height:"100%",background:t,borderRadius:99,transition:"width .5s ease"}})})}function g0({size:e=44}){return l.jsx("span",{style:{width:e,height:e,borderRadius:"50%",background:"var(--mega-red)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px var(--mega-red-glow)",flexShrink:0,overflow:"hidden",animation:"softPulse 3s ease infinite"},children:l.jsx("img",{src:Ut.logoImage,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function s8({jobs:e,history:t}){return!e.length&&!t.length?null:l.jsxs("div",{className:"transfer-panel",children:[l.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("strong",{style:{fontSize:13},children:"Transfers"}),l.jsx("span",{style:{fontSize:11,background:"var(--mega-red)",color:"#fff",padding:"2px 8px",borderRadius:99,fontWeight:700},children:e.filter(n=>n.status==="downloading").length})]}),l.jsxs("div",{style:{maxHeight:260,overflow:"auto",padding:12},children:[e.map(n=>l.jsxs("div",{style:{marginBottom:12},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:12,marginBottom:6},children:[l.jsx("span",{style:{color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),l.jsx("span",{style:{color:n.status==="failed"?"var(--danger)":"var(--accent-blue)",fontWeight:800},children:n.status==="failed"?"Failed":`${n.percent}%`})]}),l.jsx(dl,{value:n.percent})]},n.id)),t.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",fontWeight:800,margin:"10px 0 8px",textTransform:"uppercase"},children:"Recent downloads"}),t.slice(0,4).map(n=>l.jsxs("div",{style:{padding:"8px 0",borderTop:"1px solid var(--border)"},children:[l.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),l.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:bo(n.downloadedAt)})]},n.id))]})]})]})}function a8({title:e,message:t,onConfirm:n,onCancel:r,danger:i=!1}){return l.jsx("div",{className:"modal-backdrop",onClick:r,children:l.jsxs("div",{className:"modal-card",onClick:o=>o.stopPropagation(),children:[l.jsx("div",{style:{fontSize:36,textAlign:"center",marginBottom:16},children:i?"⚠️":"❓"}),l.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:8},children:e}),l.jsx("p",{style:{color:"var(--text-secondary)",fontFamily:"var(--font)",fontSize:14,textAlign:"center",marginBottom:28,lineHeight:1.5},children:t}),l.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[l.jsx("button",{type:"button",onClick:r,className:"btn-secondary",children:"Cancel"}),l.jsx("button",{type:"button",onClick:n,className:"btn-primary",style:i?{background:"var(--danger)",boxShadow:"0 10px 28px rgba(248,113,113,.25)"}:void 0,children:i?"Delete":"Confirm"})]})]})})}function l8({file:e,onRename:t,onCancel:n}){const[r,i]=b.useState(e.name),o=b.useRef(null);return b.useEffect(()=>{var s;(s=o.current)==null||s.select()},[]),l.jsx("div",{className:"modal-backdrop",onClick:n,children:l.jsxs("div",{className:"modal-card",onClick:s=>s.stopPropagation(),children:[l.jsx("div",{style:{fontSize:32,textAlign:"center",marginBottom:12},children:"✏️"}),l.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:20},children:"Rename File"}),l.jsx("input",{ref:o,value:r,onChange:s=>i(s.target.value),onKeyDown:s=>s.key==="Enter"&&t(r),className:"input-field",style:{marginBottom:20}}),l.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",flexWrap:"wrap"},children:[l.jsx("button",{type:"button",onClick:n,className:"btn-secondary",children:"Cancel"}),l.jsx("button",{type:"button",onClick:()=>t(r),className:"btn-primary",children:"Rename"})]})]})})}function dk({tags:e}){return e!=null&&e.length?l.jsx("div",{style:{display:"flex",gap:4,marginTop:4,flexWrap:"wrap"},children:e.slice(0,3).map(t=>l.jsx("span",{style:{fontSize:10,padding:"2px 6px",borderRadius:6,background:"rgba(240,22,58,.12)",color:"var(--accent)",fontWeight:600},children:t},t))}):null}function xr({label:e,onClick:t,tone:n="neutral",disabled:r=!1}){const i=n==="accent"?"accent":n==="blue"?"blue":"";return l.jsx("button",{type:"button",className:`quick-action-btn ${i}`.trim(),title:e,disabled:r,onClick:o=>{o.stopPropagation(),r||t()},children:e})}function c8({file:e,onDelete:t,onShare:n,onPreview:r,onRename:i,onDownload:o,onMove:s,onCopy:a,onTags:c,onEdit:u,onPrint:d,onAnnotate:h}){return l.jsxs("div",{className:"file-list-card",children:[l.jsx("div",{style:{fontSize:34,flexShrink:0,width:48,height:48,borderRadius:14,background:"rgba(56,189,248,.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:Gs(e.mimeType)}),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:16,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),l.jsxs("div",{style:{color:"var(--text-muted)",fontSize:12,marginTop:3},children:[Ge(e.size)," · ",bo(e.createdAt)]}),l.jsx(dk,{tags:e.tags})]}),l.jsxs("div",{className:"file-list-actions",children:[l.jsx(xr,{label:"Preview",disabled:!$f(e.mimeType),onClick:()=>r(e),tone:"blue"}),l.jsx(xr,{label:"Download",onClick:()=>o(e)}),l.jsx(xr,{label:"Share",onClick:()=>n(e),tone:"accent"}),l.jsx(xr,{label:"Rename",onClick:()=>i(e)}),l.jsx(Vb,{file:e,onMove:s,onCopy:a,onTags:c,onEdit:u,onDelete:t,onPrint:d,onAnnotate:h})]})]})}function u8({file:e,token:t,onDelete:n,onShare:r,onPreview:i,onRename:o,onDownload:s,onMove:a,onCopy:c,onTags:u,onEdit:d,onPrint:h,onAnnotate:f}){var g;const p=(g=e.mimeType)==null?void 0:g.startsWith("image/");return l.jsxs("div",{className:"glass-card mega-file-card",style:{borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{height:170,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(217,0,7,.08), rgba(20,20,20,.95))",borderBottom:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[p?l.jsx(rI,{fileId:e.id,token:t,alt:e.name,mimeType:e.mimeType}):l.jsx("div",{style:{fontSize:56,display:"flex"},children:Gs(e.mimeType)}),l.jsx("div",{style:{position:"absolute",right:8,bottom:8,fontSize:10,fontWeight:700,background:"var(--bg-card)",color:"var(--text)",padding:"2px 6px",borderRadius:6},children:Ge(e.size)}),l.jsx("div",{style:{position:"absolute",right:10,top:10},children:l.jsx(Vb,{file:e,onMove:a,onCopy:c,onTags:u,onEdit:d,onDelete:n,onPrint:h,onAnnotate:f})})]}),l.jsxs("div",{style:{padding:"14px"},children:[l.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:5},children:e.name}),l.jsxs("div",{style:{color:"var(--text-muted)",fontSize:11},children:[Ge(e.size)," · ",bo(e.createdAt)]}),l.jsx(dk,{tags:e.tags}),l.jsxs("div",{className:"grid-actions",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[l.jsx(xr,{label:"Preview",disabled:!$f(e.mimeType),onClick:()=>i(e),tone:"blue"}),l.jsx(xr,{label:"Share",onClick:()=>r(e),tone:"accent"}),l.jsx(xr,{label:"Download",onClick:()=>s(e)}),l.jsx(xr,{label:"Rename",onClick:()=>o(e)})]})]})]})}function d8({account:e,onManage:t}){if(!(e!=null&&e.storageWarning))return null;const n=e.storageWarning==="critical";return l.jsxs("div",{style:{padding:"10px 20px",background:n?"rgba(255,77,77,.12)":"rgba(246,179,71,.12)",borderBottom:`1px solid ${n?"var(--danger)":"var(--accent-amber)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap",fontSize:13,fontFamily:"var(--font)"},children:[l.jsx("span",{children:n?"Storage almost full (95%+).":"Storage over 80% full."}),l.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{padding:"6px 14px",fontSize:13},children:"Manage storage"})]})}function h8({username:e,stats:t,storagePercent:n,onUpload:r,onNewFolder:i}){return l.jsxs("div",{className:"mega-drive-header",children:[l.jsx("h1",{style:{fontSize:28,fontWeight:800,color:"var(--text)",marginBottom:20},children:"Cloud drive"}),l.jsxs("div",{className:"mega-drive-actions",children:[l.jsx("button",{type:"button",className:"btn-primary mega-upload-btn",onClick:r,children:"↑ Upload"}),l.jsx("button",{type:"button",className:"btn-secondary mega-folder-btn",onClick:i,children:"+ New folder"})]}),l.jsxs("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:8},children:[t.totalFiles," files · ",t.totalFolders," folders · ",Math.round(n),"% storage used",e?` · @${e}`:""]})]})}function f8({children:e,onNavigate:t,onSignOut:n,onUpgrade:r,transferActive:i=!1}){const{account:o,notifications:s,unreadCount:a,markAllRead:c}=Wb();return l.jsxs(l.Fragment,{children:[l.jsx(XI,{account:o,onOpenSettings:()=>t("settings")}),l.jsx(qI,{account:o,onUpgrade:r}),l.jsx(d8,{account:o,onManage:()=>t("billing")}),l.jsxs("header",{className:"account-header mega-top-bar",children:[l.jsx(QI,{notifications:s,unreadCount:a,onMarkAllRead:c}),l.jsx("div",{style:{display:"flex",alignItems:"center",gap:16},children:l.jsx(KI,{account:o,onNavigate:t,onSignOut:n})})]}),l.jsx(JL,{elevated:i}),e]})}function p8(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?new URLSearchParams(window.location.search).get("token"):null}function y0(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/reset-password")?new URLSearchParams(window.location.search).get("token"):null}function x0(){const e=window.location.pathname.replace(/\/+$/,"")||"/";if(e.startsWith("/share/")){const t=e.split("/");if(t.length>=3)return t[2]}return null}function m8(){const[e,t]=b.useState(()=>window.innerWidth);return b.useEffect(()=>{const n=()=>t(window.innerWidth);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),{width:e,isMobile:e<=768,isSmall:e<=520}}function ad({value:e,onChange:t,options:n,style:r}){var a;const[i,o]=b.useState(!1),s=((a=n.find(c=>c.value===e))==null?void 0:a.label)||e;return l.jsxs("div",{style:{position:"relative",...r},children:[l.jsxs("button",{type:"button",onClick:()=>o(!i),className:"select-field",style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,width:"100%"},children:[l.jsx("span",{children:s}),l.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{transform:i?"rotate(180deg)":"none",transition:"0.2s",opacity:.5},children:l.jsx("path",{d:"M6 9l6 6 6-6"})})]}),i&&l.jsxs(l.Fragment,{children:[l.jsx("div",{onClick:()=>o(!1),style:{position:"fixed",inset:0,zIndex:150}}),l.jsx("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,minWidth:"100%",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"0 12px 40px rgba(0,0,0,0.35)",zIndex:151,overflow:"hidden",animation:"fadeIn 0.15s ease"},children:n.map(c=>l.jsxs("button",{type:"button",onClick:()=>{t(c.value),o(!1)},style:{display:"block",width:"100%",padding:"10px 14px",border:"none",background:c.value===e?"rgba(59,130,246,0.12)":"transparent",color:"var(--text)",fontFamily:"var(--font)",fontSize:13,fontWeight:c.value===e?600:500,cursor:"pointer",textAlign:"left",transition:"background 0.15s",whiteSpace:"nowrap"},onMouseEnter:u=>{c.value!==e&&(u.currentTarget.style.background="rgba(255,255,255,0.06)")},onMouseLeave:u=>{u.currentTarget.style.background=c.value===e?"rgba(59,130,246,0.12)":"transparent"},children:[c.label,c.value===e&&l.jsx("span",{style:{marginLeft:8,color:"var(--accent-blue)"},children:"✓"})]},c.value))})]})]})}function g8(){const[e,t]=b.useState(p8),[n,r]=b.useState(y0),[i,o]=b.useState(x0),[s,a]=b.useState(()=>{const I=localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token"),B=y0(),X=x0();return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?"verify-email":B?"reset-password":X?"shared-link":I?"app":"landing"}),[c,u]=b.useState("login"),[d,h]=b.useState(()=>localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token")||""),[f,p]=b.useState(()=>localStorage.getItem("cv_user")||sessionStorage.getItem("cv_user")||""),[g,y]=b.useState(null),[w,m]=b.useState([]),[x,v]=b.useState([]),[k,T]=b.useState({totalFiles:0,storageUsed:0,storageQuota:1024*1024*1024,totalFolders:0}),[C,j]=b.useState(null),[E,R]=b.useState([]),[P,N]=b.useState(""),[D,F]=b.useState(!1),[W,U]=b.useState(0),[Z,ie]=b.useState(null),[M,V]=b.useState([]),[S,G]=b.useState(()=>{try{return JSON.parse(localStorage.getItem("cv_downloadHistory")||"[]")}catch{return[]}}),[te,_]=b.useState(null),[ye,Pe]=b.useState(null),[he,ve]=b.useState(""),[Ft,jt]=b.useState(!1),[lt,qe]=b.useState(!1),[Xe,wi]=b.useState(()=>localStorage.getItem("cv_viewMode")||"list"),[mn,ki]=b.useState("all"),[Bt,Fr]=b.useState(()=>localStorage.getItem("cv_theme")||"dark"),[gn,yt]=b.useState(null),[er,tr]=b.useState(null),[nr,Y]=b.useState(!1),[re,He]=b.useState("drive"),[A,O]=b.useState("createdAt"),[q,oe]=b.useState("desc"),[fe,It]=b.useState(""),[Zt,en]=b.useState([]),[Br,Vr]=b.useState(1),[ct,rr]=b.useState(!1),[xt,Io]=b.useState(!1),[hk,fk]=b.useState([]),[pk,mk]=b.useState([]),[gk,yk]=b.useState([]),[qp,xk]=b.useState(null),[Si,Po]=b.useState(null),[zc,Xp]=b.useState(null),[Oc,Fc]=b.useState(null),[Qp,Jp]=b.useState(null),[oa,Zp]=b.useState(null),[em,vk]=b.useState("user"),[tm,bk]=b.useState([]),[nm,wk]=b.useState(null),[Nn,Ur]=b.useState(null),[kk,Sk]=b.useState([]),[Ck,_k]=b.useState([]),[Ek,Tk]=b.useState([]),Bc=$I(P,400),{isMobile:Vc,isSmall:jk}=m8(),Ao=b.useRef(),rm=b.useRef(),pe=b.useCallback((I,B="info")=>_({msg:I,type:B}),[]),ue=b.useCallback((I,B)=>wt(I,B,d),[d]),nt=b.useCallback(async(I=1,B=!1)=>{var X,le;if(d){Io(!0);try{if(re==="trash"){const Vt=await ue("/trash");mk($r(Vt,"files")),yk($r(Vt,"folders")),Io(!1);return}if(re==="admin"){const[Vt,Kk]=await Promise.all([ue("/admin/users?limit=50"),ue("/admin/analytics").catch(()=>null)]);bk($r(Vt,"users")),wk(Kk),Io(!1);return}if(re==="dashboard"){const Vt=await ue("/storage/usage");xk(Vt),T({totalFiles:Vt.fileCount??0,storageUsed:Vt.storageUsed??0,storageQuota:Vt.storageQuota??1024*1024*1024,totalFolders:Vt.folderCount??0}),Io(!1);return}const ce=new URLSearchParams;C&&ce.set("folderId",C),Bc&&ce.set("search",Bc),fe&&ce.set("tag",fe),ce.set("sortBy",A),ce.set("sortOrder",q),ce.set("page",String(I)),ce.set("limit","30");const[me,tn,Wr,$c,Gk]=await Promise.all([ue(`/files?${ce}`),ue(`/folders?${C?`parentId=${C}`:""}`),ue("/storage/usage"),ue("/files/tags").catch(()=>({tags:[]})),ue("/folders?all=true").catch(()=>({folders:[]}))]),Hc=$r(me,"files"),cm=$r(tn,"folders");m(B?Vt=>[...Vt,...Hc]:Hc),v(cm),en(($c==null?void 0:$c.tags)||[]),fk($r(Gk,"folders")),rr((((X=me==null?void 0:me.pagination)==null?void 0:X.page)||1)<(((le=me==null?void 0:me.pagination)==null?void 0:le.totalPages)||1)),Vr(I),T({totalFiles:Wr.fileCount??Hc.length,storageUsed:Wr.storageUsed??0,storageQuota:Wr.storageQuota??1024*1024*1024,totalFolders:Wr.folderCount??cm.length})}catch(ce){console.error("Refresh failed:",ce);const me=ce.message.toLowerCase();me.includes("credential")||me.includes("unauthorized")||me.includes("token")?(localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),h(""),p(""),a("landing")):pe(ce.message,"error")}Io(!1)}},[d,C,Bc,fe,A,q,re,ue,pe]);b.useEffect(()=>{nt(1,!1)},[nt]),b.useEffect(()=>{ue("/users/me").then(I=>vk((I==null?void 0:I.role)||"user")).catch(()=>{})},[d,ue]),b.useEffect(()=>{if(!d||re==="drive"||re==="trash"||re==="dashboard"||re==="admin")return;(async()=>{try{if(re==="recent"){const B=await ue("/dashboard");Sk(B.recentFiles||[])}else if(re==="starred"){const B=await ue("/files?isStarred=true&limit=50");_k($r(B,"files"))}else if(re==="shared"){const B=await ue("/dashboard"),X=[...B.sharedWithMe||[],...B.sharedByMe||[]].map(le=>le.file||le);Tk(X.filter(Boolean))}}catch{}})()},[d,re,ue]);const Ik=I=>{Ur(I),I==="dashboard"&&He("dashboard"),I==="billing"&&Ur("billing")};b.useEffect(()=>{localStorage.setItem("cv_viewMode",Xe)},[Xe]),b.useEffect(()=>{localStorage.setItem("cv_theme",Bt)},[Bt]),b.useEffect(()=>{const I=B=>{if((B.metaKey||B.ctrlKey)&&B.key==="k"){B.preventDefault();const X=document.querySelector(".search-input-animated");X&&X.focus()}};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[]),b.useEffect(()=>{const I=B=>{var X;(X=B.detail)!=null&&X.token&&h(B.detail.token)};return window.addEventListener("cv-token-refreshed",I),()=>window.removeEventListener("cv-token-refreshed",I)},[]);const Pk=(I,B,X,le,ce=!0)=>{if(!I&&(le!=null&&le.email)){y(le),a("verify-email");return}if(!I)return;const me=ce?localStorage:sessionStorage,tn=ce?sessionStorage:localStorage;me.setItem("cv_token",I),tn.removeItem("cv_token"),B&&me.setItem("cv_refreshToken",B),tn.removeItem("cv_refreshToken");const Wr=typeof X=="string"?X:(le==null?void 0:le.fullName)||(le==null?void 0:le.email);me.setItem("cv_user",Wr||""),tn.removeItem("cv_user"),le!=null&&le.avatarUrl&&me.setItem("cv_avatar",le.avatarUrl),h(I),p(Wr||""),a("app")},Ak=async I=>{const B=`${I.id}-${Date.now()}`;ie({name:I.name,percent:0}),V(X=>[{id:B,name:I.name,percent:0,status:"downloading"},...X].slice(0,6));try{const X=await kc(I.id,d,{onProgress:ce=>{ie({name:I.name,percent:ce}),V(me=>me.map(tn=>tn.id===B?{...tn,percent:ce}:tn))}});R1(X,I.name);const le={id:B,name:I.name,size:I.size,downloadedAt:new Date().toISOString()};G(ce=>{const me=[le,...ce].slice(0,12);return localStorage.setItem("cv_downloadHistory",JSON.stringify(me)),me}),V(ce=>ce.map(me=>me.id===B?{...me,percent:100,status:"complete"}:me)),pe(`Downloaded "${I.name}"`,"success")}catch(X){V(le=>le.map(ce=>ce.id===B?{...ce,status:"failed"}:ce)),pe(X.message,"error")}ie(null)},im=async()=>{try{const I=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");await ue("/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:I})})}catch{}localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),h(""),p(""),a("landing")},om=async(I,B,X)=>{if(!d)throw new Error("Authentication token missing. Please log in again.");const le=new FormData;return le.append("file",I),B&&le.append("folderId",B),N1("/files/upload",le,d,X)},Rk=async(I,B)=>ue("/folders",{method:"POST",body:JSON.stringify({name:I,parentId:B||null})}),Uc=async(I,B=!1)=>{if(!d){pe("Please log in again to upload files.","error");return}const X=Array.from(I||[]);if(!X.length)return;F(!0),U(0);let le=0;try{if(B&&X.some(ce=>ce.webkitRelativePath))await HI(X,{baseFolderId:C,createFolder:Rk,uploadFile:async(ce,me)=>{await om(ce,me,U),le++},onProgress:U});else for(let ce=0;ce<X.length;ce++)try{await om(X[ce],C,me=>{const tn=Math.round((ce+me/100)/X.length*100);U(tn)}),le++}catch(me){pe(`Failed to upload "${X[ce].name}": ${me.message}`,"error")}}finally{F(!1),U(0),nt(1,!1),le>0&&pe(`${le} file(s) uploaded successfully!`,"success")}},Nk=I=>{yt({title:"Delete File",message:`Move "${I.name}" to trash? You can restore it later from the Trash view.`,danger:!0,onConfirm:async()=>{yt(null);try{await ue(`/files/${I.id}`,{method:"DELETE"}),nt(),pe("File deleted","success")}catch(B){pe(B.message,"error")}}})},Dk=I=>{yt({title:"Delete Folder",message:`Delete folder "${I.name}" and all its contents? This cannot be undone.`,danger:!0,onConfirm:async()=>{yt(null);try{await ue(`/folders/${I.id}`,{method:"DELETE"}),nt(),pe("Folder deleted","success")}catch(B){pe(B.message,"error")}}})},Mk=async(I,B)=>ue(`/files/${I.id}/share`,{method:"POST",body:JSON.stringify(B)}),Lk=async(I,{targetFolderId:B})=>{try{await ue(`/files/${I.id}/move`,{method:"POST",body:JSON.stringify({targetFolderId:B})}),Po(null),nt(1,!1),pe("File moved","success")}catch(X){pe(X.message,"error")}},zk=async(I,{targetFolderId:B,newName:X})=>{try{await ue(`/files/${I.id}/copy`,{method:"POST",body:JSON.stringify({targetFolderId:B,newName:X!==I.name?X:void 0})}),Po(null),nt(1,!1),pe("File copied","success")}catch(le){pe(le.message,"error")}},Ok=async(I,B)=>{try{await ue(`/files/${I.id}`,{method:"PUT",body:JSON.stringify({tags:B})}),Fc(null),nt(1,!1),pe("Tags updated","success")}catch(X){pe(X.message,"error")}},Fk=async I=>{try{await ue(`/trash/files/${I}/restore`,{method:"POST"}),nt(1,!1),pe("File restored","success")}catch(B){pe(B.message,"error")}},Bk=async I=>{try{await ue(`/trash/folders/${I}/restore`,{method:"POST"}),nt(1,!1),pe("Folder restored","success")}catch(B){pe(B.message,"error")}},Vk=I=>{yt({title:"Delete forever",message:`"${I.name}" will be permanently deleted. This cannot be undone.`,danger:!0,onConfirm:async()=>{yt(null);try{await ue(`/files/${I.id}/permanent`,{method:"DELETE"}),nt(1,!1),pe("File permanently deleted","success")}catch(B){pe(B.message,"error")}}})},Uk=()=>{yt({title:"Empty trash",message:"All items in trash will be permanently deleted.",danger:!0,onConfirm:async()=>{yt(null);try{await ue("/trash/empty",{method:"POST"}),nt(1,!1),pe("Trash emptied","success")}catch(I){pe(I.message,"error")}}})},Wk=async(I,B)=>{if(!B.trim()||B===I.name){tr(null);return}try{await ue(`/files/${I.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:B})}),nt(),pe("File renamed","success")}catch(X){pe(X.message,"error")}tr(null)},sm=async()=>{if(he.trim()){try{await ue("/folders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:he,parentId:C})}),nt(),pe("Folder created!","success")}catch(I){pe(I.message,"error")}ve(""),jt(!1)}},$k=I=>{j(I.id),R(B=>[...B,I]),Y(!1)},am=I=>{I===-1?(j(null),R([])):(j(E[I].id),R(B=>B.slice(0,I+1)))},Hk=I=>{I.preventDefault(),qe(!1),I.dataTransfer.files.length>0&&Uc(I.dataTransfer.files)},sa=b.useMemo(()=>{const I=bg.find(B=>B.key===mn);return!I||I.key==="all"?w:w.filter(B=>I.test(B.mimeType||""))},[w,mn]),Wc=k.storageQuota||1024*1024*1024,lm=Math.min(100,k.storageUsed/Wc*100);if(e)return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:ss}),l.jsx(iy,{token:e,onVerified:()=>{t(null),window.history.replaceState({},"","/"),a("auth"),u("login")},onBack:()=>{t(null),window.history.replaceState({},"","/"),a("auth"),u("login")}})]});if(n)return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:ss}),l.jsx(oy,{token:n,onBack:()=>{r(null),window.history.replaceState({},"","/"),a("auth"),u("login")}})]});if(["landing","about","contact","privacy","terms","security","status"].includes(s)&&!d)return l.jsx(aE,{view:s,onNavigate:I=>{a(I),window.scrollTo(0,0)},onGetStarted:()=>{u("register"),a("auth")},onLogin:()=>{u("login"),a("auth")},onSignUp:()=>{u("register"),a("auth")}});if(s==="auth"&&!d)return l.jsx(eI,{initialMode:c,onAuth:Pk,onNeedsVerification:I=>{y(I),a("verify-email")},onBack:()=>a("landing")});if(s==="verify-email"&&!d)return l.jsx(iy,{email:g==null?void 0:g.email,onVerified:()=>{y(null),a("auth"),u("login")},onBack:()=>{y(null),a("auth"),u("login")}});if(s==="reset-password"&&!d)return l.jsx(oy,{token:n,onSuccess:()=>{r(null),window.history.replaceState({},"","/"),a("auth"),u("login")},onBack:()=>{r(null),a("auth"),u("login")}});if(s==="shared-link")return l.jsx("div",{"data-theme":Bt,className:"app-shell",children:l.jsx(h4,{token:i})});const Yk=Xe==="grid"?u8:c8;return l.jsx(GI,{token:d,children:l.jsx(f8,{transferActive:M.length>0||S.length>0,onNavigate:I=>{Ur(null),Ik(I)},onSignOut:im,onUpgrade:()=>{Ur("billing"),He("drive")},children:l.jsxs("div",{"data-theme":Bt,className:"app-shell",children:[l.jsx("style",{children:ss}),l.jsx("button",{type:"button",className:"mobile-menu-button","aria-label":"Open navigation menu","aria-expanded":nr,onClick:()=>Y(I=>!I),children:"☰"}),nr&&Vc&&l.jsx("div",{onClick:()=>Y(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:99}}),l.jsxs("div",{className:`sidebar ${nr?"open":""}`,style:{position:"fixed",left:0,top:0,bottom:0,width:260,background:"var(--bg-sidebar)",borderRight:"1px solid var(--border)",padding:"16px 12px",display:"flex",flexDirection:"column",gap:4,zIndex:100,transition:"transform .35s cubic-bezier(.4,0,.2,1)",...Vc?{transform:nr?"translateX(0)":"translateX(-100%)"}:{}},children:[l.jsxs("div",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:10,padding:"4px 8px"},children:[l.jsx(g0,{size:40}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:20,fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em"},children:"Drive"}),l.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:1},children:["@",f]})]})]}),l.jsx("button",{type:"button",onClick:()=>{var I;return(I=Ao.current)==null?void 0:I.click()},className:"btn-primary",style:{minHeight:48,borderRadius:999,fontSize:15,justifyContent:"center",display:"flex",alignItems:"center",gap:8,margin:"0 0 16px"},children:"+ New"}),[{id:"drive",icon:"drive",label:"My Drive"},{id:"recent",icon:"recent",label:"Recent"},{id:"starred",icon:"starred",label:"Starred"},{id:"shared",icon:"shared",label:"Shared"},{id:"dashboard",icon:"usage",label:"Storage"},{id:"trash",icon:"trash",label:"Trash"},{id:"activity",icon:"activity",label:"Activity"},...em==="admin"||em==="super_admin"?[{id:"admin",icon:"admin",label:"Admin"}]:[]].map(I=>l.jsxs("button",{type:"button",className:`nav-item${re===I.id?" active":""}`,"aria-current":re===I.id?"page":void 0,onClick:()=>{Ur(null),He(I.id),Y(!1),I.id==="drive"&&(j(null),R([]))},children:[l.jsx(ZI,{name:I.icon,active:re===I.id}),l.jsx("span",{children:I.label})]},I.id)),l.jsx("div",{style:{borderTop:"1px solid var(--border)",margin:"12px 0 8px"}}),l.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1px",marginBottom:8,paddingLeft:4},children:"OVERVIEW"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16},children:[l.jsxs("div",{className:"stat-mini",children:[l.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:k.totalFiles}),l.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Files"})]}),l.jsxs("div",{className:"stat-mini",children:[l.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:k.totalFolders}),l.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Folders"})]})]}),l.jsxs("div",{style:{marginTop:"auto"},children:[l.jsxs("div",{style:{marginBottom:16,background:"var(--surface-raised)",borderRadius:14,padding:"14px",border:"1px solid var(--border)"},title:`${Ge(k.storageUsed)} of ${Ge(Wc)} used`,children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:[l.jsx("span",{style:{fontWeight:600},children:"Free"}),l.jsxs("span",{children:[Ge(k.storageUsed)," of ",Ge(Wc)," used"]})]}),l.jsx(dl,{value:lm}),l.jsx("button",{type:"button",onClick:()=>Ur("billing"),className:"btn-mega-red",style:{width:"100%",marginTop:12,minHeight:40,animation:"softPulse 3s ease infinite"},children:"Upgrade"})]}),l.jsx("button",{type:"button",onClick:im,className:"btn-danger",children:"Sign Out"})]})]}),l.jsxs("div",{className:"main-content",style:{marginLeft:Vc?0:260,padding:"20px 32px",minHeight:"100vh"},children:[l.jsx(y8,{appPage:Nn,setAppPage:Ur,api:ue,token:d,notify:pe,stats:k,usageDetail:qp,adminUsers:tm,systemHealth:nm,loading:xt,onRefreshAccount:()=>{},theme:Bt,setTheme:Fr}),!Nn&&re==="recent"&&l.jsx(b.Suspense,{fallback:l.jsx(Fn,{}),children:l.jsx(sd,{title:"Recent files",files:kk,emptyMessage:"No recent files yet.",onBack:()=>He("drive"),onOpen:Pe})}),!Nn&&re==="starred"&&l.jsx(b.Suspense,{fallback:l.jsx(Fn,{}),children:l.jsx(sd,{title:"Starred",files:Ck,emptyMessage:"Star files to see them here.",onBack:()=>He("drive"),onOpen:Pe})}),!Nn&&re==="shared"&&l.jsx(b.Suspense,{fallback:l.jsx(Fn,{}),children:l.jsx(sd,{title:"Shared with you",files:Ek,emptyMessage:"Nothing shared yet.",onBack:()=>He("drive"),onOpen:Pe})}),!Nn&&re==="activity"&&l.jsx(b.Suspense,{fallback:l.jsx(Fn,{}),children:l.jsx(i8,{api:ue,onBack:()=>He("drive")})}),!Nn&&re==="trash"&&l.jsx(iI,{trashedFiles:pk,trashedFolders:gk,loading:xt,onRestoreFile:Fk,onRestoreFolder:Bk,onPermanentDelete:Vk,onEmptyTrash:Uk,onBack:()=>He("drive")}),!Nn&&re==="dashboard"&&l.jsx(TI,{stats:k,usage:qp,onBack:()=>He("drive")}),!Nn&&re==="admin"&&l.jsx(zI,{users:tm,systemHealth:nm,loading:xt,onBack:()=>He("drive")}),!Nn&&re==="drive"&&l.jsxs(l.Fragment,{children:[l.jsx(h8,{username:f,stats:k,storagePercent:lm,onUpload:()=>{var I;return(I=Ao.current)==null?void 0:I.click()},onNewFolder:()=>jt(!0)}),l.jsxs("div",{className:"drive-toolbar",children:[l.jsxs("div",{className:"mega-search-bar drive-search",style:{position:"relative",flex:1,minWidth:0},children:[l.jsx("span",{className:"search-icon","aria-hidden":"true",style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:"var(--text-muted)",pointerEvents:"none"},children:"🔍"}),l.jsx("input",{className:"input-field search-input-animated",placeholder:"Search Cloud drive...",value:P,onChange:I=>N(I.target.value),style:{width:"100%",padding:"12px 60px 12px 44px",borderRadius:999,background:"var(--bg-card)",border:"1px solid var(--border)",transition:"border-color .2s ease, box-shadow .2s ease"}}),l.jsx("div",{style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"rgba(255,255,255,.08)",padding:"2px 6px",borderRadius:6,fontSize:11,fontWeight:700,color:"var(--text-muted)",pointerEvents:"none",border:"1px solid var(--border)"},children:"⌘K"})]}),l.jsxs("div",{className:"drive-toolbar-row",children:[l.jsx("button",{type:"button",className:"icon-btn",title:Bt==="dark"?"Light mode":"Dark mode",onClick:()=>Fr(I=>I==="dark"?"light":"dark"),children:Bt==="dark"?"☀":"🌙"}),l.jsxs("div",{className:"view-toggle",children:[l.jsx("button",{type:"button",onClick:()=>wi("list"),className:`view-toggle-btn${Xe==="list"?" active":""}`,children:"☰"}),l.jsx("button",{type:"button",onClick:()=>wi("grid"),className:`view-toggle-btn${Xe==="grid"?" active":""}`,children:"▦"})]}),re==="drive"&&l.jsxs("div",{className:"drive-actions",style:{marginLeft:"auto"},children:[l.jsx("button",{type:"button",onClick:()=>jt(I=>!I),className:"btn-secondary mega-folder-btn",children:"New folder"}),l.jsx("button",{type:"button",onClick:()=>{var I;return(I=Ao.current)==null?void 0:I.click()},className:"btn-primary mega-upload-btn",children:"Upload"}),l.jsx("button",{type:"button",onClick:()=>{var I;return(I=rm.current)==null?void 0:I.click()},className:"btn-secondary",children:"Folder"}),l.jsx("input",{ref:Ao,type:"file",multiple:!0,hidden:!0,onChange:I=>{Uc(I.target.files),I.target.value=""}}),l.jsx("input",{ref:rm,type:"file",multiple:!0,webkitdirectory:"",hidden:!0,onChange:I=>{Uc(I.target.files,!0),I.target.value=""}})]})]})]}),re==="drive"&&l.jsxs("div",{className:"drive-sortbar",children:[l.jsx(ad,{value:A,onChange:O,options:[{value:"createdAt",label:"Date"},{value:"name",label:"Name"},{value:"size",label:"Size"},{value:"updatedAt",label:"Modified"}]}),l.jsx(ad,{value:q,onChange:oe,options:[{value:"desc",label:"Descending"},{value:"asc",label:"Ascending"}]}),Zt.length>0&&l.jsx(ad,{value:fe,onChange:It,options:[{value:"",label:"All tags"},...Zt.map(I=>({value:I,label:I}))],style:{gridColumn:jk?"1 / -1":void 0}})]}),re==="drive"&&l.jsx("div",{className:"filter-chips",children:bg.map(I=>l.jsxs("button",{type:"button",onClick:()=>ki(I.key),className:`filter-chip${mn===I.key?" active":""}`,children:[l.jsx("span",{children:I.icon})," ",I.label]},I.key))}),re==="drive"&&Ft&&l.jsxs("div",{className:"new-folder-row",style:{display:"flex",gap:10,marginBottom:20,animation:"fadeIn .2s ease"},children:[l.jsx("input",{className:"input-field",placeholder:"Folder name…",value:he,onChange:I=>ve(I.target.value),onKeyDown:I=>I.key==="Enter"&&sm(),style:{width:260},autoFocus:!0}),l.jsx("button",{type:"button",onClick:sm,className:"btn-primary",children:"Create"}),l.jsx("button",{type:"button",onClick:()=>jt(!1),className:"btn-secondary",children:"Cancel"})]}),l.jsxs("div",{className:"breadcrumb-row",style:{alignItems:"center",gap:8,marginBottom:20,fontSize:14,color:"var(--text-muted)"},children:[l.jsxs("span",{onClick:()=>am(-1),className:"breadcrumb-link",style:{color:C?"var(--text-secondary)":"var(--accent)"},children:[Ut.logo," Home"]}),E.map((I,B)=>l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:"›"}),l.jsx("span",{onClick:()=>am(B),className:"breadcrumb-link",style:{color:B===E.length-1?"var(--accent)":"var(--text-secondary)"},children:I.name})]},I.id))]}),D&&l.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(240,22,58,.24)",animation:"fadeIn .2s ease"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx(Yh,{size:14})," Uploading…"]}),l.jsxs("span",{style:{fontWeight:700,color:"var(--accent)"},children:[W,"%"]})]}),l.jsx(dl,{value:W})]}),Z&&l.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(64,144,255,.3)",animation:"fadeIn .2s ease"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx(Yh,{size:14,color:"var(--accent-blue)"})," Downloading ",Z.name,"…"]}),l.jsxs("span",{style:{fontWeight:700,color:"var(--accent-blue)"},children:[Z.percent,"%"]})]}),l.jsx(dl,{value:Z.percent})]}),l.jsx("div",{onDragOver:I=>{I.preventDefault(),qe(!0)},onDragLeave:()=>qe(!1),onDrop:Hk,className:`drop-zone${lt?" drag-over":""}`,children:lt?l.jsx("span",{style:{color:"var(--accent)",fontWeight:700,fontSize:16},children:"⬇ Drop files here to upload"}):l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{fontSize:32,marginBottom:8},children:"📤"}),l.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:700,marginBottom:4},children:"Drag & drop files or folders"}),l.jsx("div",{style:{fontSize:13},children:"or use the Upload button above"})]})}),x.length>0&&l.jsxs("div",{style:{marginBottom:28},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px",marginBottom:12},children:"FOLDERS"}),l.jsx("div",{className:"folder-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:x.map(I=>l.jsx(x8,{folder:I,onOpen:$k,onDelete:Dk},I.id))})]}),l.jsxs("div",{children:[l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:l.jsxs("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px"},children:["FILES ",sa.length>0&&l.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:500},children:["(",sa.length,")"]})]})}),xt?l.jsx(WI,{count:6,grid:Xe==="grid"}):sa.length===0?l.jsxs("div",{className:"glass-card empty-state",style:{textAlign:"center",padding:"72px 32px",borderRadius:"var(--radius-lg)",border:"1.5px dashed var(--border)",animation:"fadeIn .3s ease"},children:[l.jsx("div",{style:{width:88,height:88,margin:"0 auto 20px",borderRadius:24,background:"var(--gradient-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"var(--glow)"},children:l.jsx(g0,{size:48})}),l.jsx("div",{style:{fontWeight:800,fontSize:20,marginBottom:8,color:"var(--text)"},children:mn!=="all"?"No matching files":"No files in My Drive yet"}),l.jsx("div",{style:{fontSize:14,color:"var(--text-muted)",marginBottom:24,maxWidth:360,margin:"0 auto 24px"},children:mn!=="all"?"Try a different filter or upload new files.":"Upload photos, documents, and more. Everything stays secure in your drive."}),mn==="all"&&l.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[l.jsx("button",{type:"button",className:"btn-primary",onClick:()=>{var I;return(I=Ao.current)==null?void 0:I.click()},children:"Upload your first file"}),l.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>jt(!0),children:"Create folder"})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:`file-grid${Xe==="grid"?" grid-view":""}`,style:{display:Xe==="grid"?"grid":"flex",gridTemplateColumns:Xe==="grid"?"repeat(auto-fill, minmax(250px, 1fr))":void 0,flexDirection:Xe==="list"?"column":void 0,gap:Xe==="grid"?12:8},children:sa.map(I=>l.jsx(Yk,{file:I,token:d,onDelete:Nk,onShare:B=>Xp(B),onPreview:Pe,onRename:tr,onDownload:Ak,onMove:B=>Po({file:B,mode:"move"}),onCopy:B=>Po({file:B,mode:"copy"}),onTags:Fc,onEdit:Jp,onPrint:async B=>{try{const X=await ue("/print/from-drive",{method:"POST",body:JSON.stringify({fileId:B.id})});X.success?Zp({code:X.data.code,expiresAt:X.data.expiresAt,fileName:B.name}):pe(X.error||"Failed to create print code","error")}catch(X){pe(X.message||"Failed to send to print","error")}},onAnnotate:B=>{Pe(B)}},I.id))}),ct&&l.jsx("button",{type:"button",onClick:()=>nt(Br+1,!0),className:"load-more-btn",children:"Load more files"})]})]})]})]}),ye&&l.jsx(_b,{file:ye,token:d,onClose:()=>Pe(null)}),Si&&l.jsx(lI,{file:Si.file,mode:Si.mode,folders:YI(hk),currentFolderId:C,onCancel:()=>Po(null),onConfirm:I=>Si.mode==="move"?Lk(Si.file,I):zk(Si.file,I)}),Oc&&l.jsx(uI,{file:Oc,allTags:Zt,onCancel:()=>Fc(null),onSave:I=>Ok(Oc,I)}),zc&&l.jsx(EI,{file:zc,onCancel:()=>Xp(null),onShare:I=>Mk(zc,I)}),Qp&&l.jsx(MI,{file:Qp,token:d,onClose:()=>Jp(null),onUploadComplete:()=>nt(1,!1)}),oa&&l.jsx(LI,{code:oa.code,expiresAt:oa.expiresAt,fileName:oa.fileName,onClose:()=>Zp(null)}),gn&&l.jsx(a8,{title:gn.title,message:gn.message,danger:gn.danger,onConfirm:gn.onConfirm,onCancel:()=>yt(null)}),er&&l.jsx(l8,{file:er,onRename:I=>Wk(er,I),onCancel:()=>tr(null)}),l.jsx(s8,{jobs:M,history:S}),te&&l.jsx(o8,{msg:te.msg,type:te.type,onClose:()=>_(null)})]})})})}function y8({appPage:e,setAppPage:t,api:n,notify:r,stats:i,usageDetail:o,adminUsers:s,systemHealth:a,loading:c,onRefreshAccount:u,theme:d,setTheme:h}){const{account:f,refreshAll:p}=Wb();if(!e)return null;const g=()=>t(null);return e==="profile"?l.jsx(b.Suspense,{fallback:l.jsx(Fn,{}),children:l.jsx(ZL,{account:f,onBack:g})}):e==="settings"?l.jsx(b.Suspense,{fallback:l.jsx(Fn,{}),children:l.jsx(e8,{account:f,api:n,onBack:g,onUpdated:()=>p(),notify:r,theme:d,onThemeChange:h})}):e==="security"?l.jsx(b.Suspense,{fallback:l.jsx(Fn,{}),children:l.jsx(t8,{api:n,account:f,onBack:g,notify:r})}):e==="billing"?l.jsx(b.Suspense,{fallback:l.jsx(Fn,{}),children:l.jsx(n8,{account:f,api:n,onBack:g,notify:r,onUpdated:()=>p()})}):e==="help"?l.jsx(b.Suspense,{fallback:l.jsx(Fn,{}),children:l.jsx(r8,{onBack:g})}):null}function x8({folder:e,onOpen:t,onDelete:n}){const[r,i]=b.useState(!1);return l.jsxs("div",{className:"folder-card",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>t(e),children:[l.jsx("span",{style:{fontSize:24},children:"📁"}),l.jsx("div",{style:{flex:1,minWidth:0},children:l.jsx("div",{style:{fontWeight:600,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},children:e.name})}),l.jsx("button",{onClick:o=>{o.stopPropagation(),n(e)},style:{background:"none",border:"none",color:"rgba(255,100,100,.3)",cursor:"pointer",fontSize:14,padding:4,borderRadius:6,opacity:r?1:0,transition:"opacity .15s"},children:"🗑"})]})}A1(document.getElementById("root")).render(l.jsx(b.StrictMode,{children:l.jsx(g8,{})}));export{Ut as B,Ge as a,Gs as f,l as j,b as r,bo as t};
