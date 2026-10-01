var Jk=Object.defineProperty;var Zk=(e,t,n)=>t in e?Jk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var je=(e,t,n)=>Zk(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xx={exports:{}},sc={},vx={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Us=Symbol.for("react.element"),eS=Symbol.for("react.portal"),tS=Symbol.for("react.fragment"),nS=Symbol.for("react.strict_mode"),rS=Symbol.for("react.profiler"),iS=Symbol.for("react.provider"),oS=Symbol.for("react.context"),sS=Symbol.for("react.forward_ref"),aS=Symbol.for("react.suspense"),lS=Symbol.for("react.memo"),cS=Symbol.for("react.lazy"),um=Symbol.iterator;function uS(e){return e===null||typeof e!="object"?null:(e=um&&e[um]||e["@@iterator"],typeof e=="function"?e:null)}var bx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wx=Object.assign,kx={};function xo(e,t,n){this.props=e,this.context=t,this.refs=kx,this.updater=n||bx}xo.prototype.isReactComponent={};xo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sx(){}Sx.prototype=xo.prototype;function qh(e,t,n){this.props=e,this.context=t,this.refs=kx,this.updater=n||bx}var Xh=qh.prototype=new Sx;Xh.constructor=qh;wx(Xh,xo.prototype);Xh.isPureReactComponent=!0;var dm=Array.isArray,Cx=Object.prototype.hasOwnProperty,Qh={current:null},_x={key:!0,ref:!0,__self:!0,__source:!0};function Ex(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Cx.call(t,r)&&!_x.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Us,type:e,key:o,ref:s,props:i,_owner:Qh.current}}function dS(e,t){return{$$typeof:Us,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Us}function hS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hm=/\/+/g;function Hc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hS(""+e.key):t.toString(36)}function za(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Us:case eS:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Hc(s,0):r,dm(i)?(n="",e!=null&&(n=e.replace(hm,"$&/")+"/"),za(i,t,n,"",function(u){return u})):i!=null&&(Jh(i)&&(i=dS(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(hm,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",dm(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Hc(o,l);s+=za(o,t,n,c,i)}else if(c=uS(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Hc(o,l++),s+=za(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function la(e,t,n){if(e==null)return e;var r=[],i=0;return za(e,r,"","",function(o){return t.call(n,o,i++)}),r}function fS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},Oa={transition:null},pS={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Oa,ReactCurrentOwner:Qh};function jx(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:la,forEach:function(e,t,n){la(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return la(e,function(){t++}),t},toArray:function(e){return la(e,function(t){return t})||[]},only:function(e){if(!Jh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=xo;ae.Fragment=tS;ae.Profiler=rS;ae.PureComponent=qh;ae.StrictMode=nS;ae.Suspense=aS;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pS;ae.act=jx;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wx({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Qh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Cx.call(t,c)&&!_x.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Us,type:e.type,key:i,ref:o,props:r,_owner:s}};ae.createContext=function(e){return e={$$typeof:oS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:iS,_context:e},e.Consumer=e};ae.createElement=Ex;ae.createFactory=function(e){var t=Ex.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:sS,render:e}};ae.isValidElement=Jh;ae.lazy=function(e){return{$$typeof:cS,_payload:{_status:-1,_result:e},_init:fS}};ae.memo=function(e,t){return{$$typeof:lS,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=Oa.transition;Oa.transition={};try{e()}finally{Oa.transition=t}};ae.unstable_act=jx;ae.useCallback=function(e,t){return vt.current.useCallback(e,t)};ae.useContext=function(e){return vt.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};ae.useEffect=function(e,t){return vt.current.useEffect(e,t)};ae.useId=function(){return vt.current.useId()};ae.useImperativeHandle=function(e,t,n){return vt.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return vt.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return vt.current.useReducer(e,t,n)};ae.useRef=function(e){return vt.current.useRef(e)};ae.useState=function(e){return vt.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return vt.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return vt.current.useTransition()};ae.version="18.3.1";vx.exports=ae;var b=vx.exports;const Z=Kh(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mS=b,gS=Symbol.for("react.element"),yS=Symbol.for("react.fragment"),xS=Object.prototype.hasOwnProperty,vS=mS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bS={key:!0,ref:!0,__self:!0,__source:!0};function Tx(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)xS.call(t,r)&&!bS.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:gS,type:e,key:o,ref:s,props:i,_owner:vS.current}}sc.Fragment=yS;sc.jsx=Tx;sc.jsxs=Tx;xx.exports=sc;var a=xx.exports,Ix={exports:{}},Vt={},Px={exports:{}},Rx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,U){var S=M.length;M.push(U);e:for(;0<S;){var X=S-1>>>1,ne=M[X];if(0<i(ne,U))M[X]=U,M[S]=ne,S=X;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var U=M[0],S=M.pop();if(S!==U){M[0]=S;e:for(var X=0,ne=M.length,_=ne>>>1;X<_;){var ye=2*(X+1)-1,Re=M[ye],he=ye+1,ve=M[he];if(0>i(Re,S))he<ne&&0>i(ve,Re)?(M[X]=ve,M[he]=S,X=he):(M[X]=Re,M[ye]=S,X=ye);else if(he<ne&&0>i(ve,S))M[X]=ve,M[he]=S,X=he;else break e}}return U}function i(M,U){var S=M.sortIndex-U.sortIndex;return S!==0?S:M.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,h=null,f=3,p=!1,g=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=M)r(u),U.sortIndex=U.expirationTime,t(c,U);else break;U=n(u)}}function k(M){if(y=!1,v(M),!g)if(n(c)!==null)g=!0,q(j);else{var U=n(u);U!==null&&re(k,U.startTime-M)}}function j(M,U){g=!1,y&&(y=!1,m(E),E=-1),p=!0;var S=f;try{for(v(U),h=n(c);h!==null&&(!(h.expirationTime>U)||M&&!N());){var X=h.callback;if(typeof X=="function"){h.callback=null,f=h.priorityLevel;var ne=X(h.expirationTime<=U);U=e.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(c)&&r(c),v(U)}else r(c);h=n(c)}if(h!==null)var _=!0;else{var ye=n(u);ye!==null&&re(k,ye.startTime-U),_=!1}return _}finally{h=null,f=S,p=!1}}var C=!1,T=null,E=-1,A=5,P=-1;function N(){return!(e.unstable_now()-P<A)}function D(){if(T!==null){var M=e.unstable_now();P=M;var U=!0;try{U=T(!0,M)}finally{U?B():(C=!1,T=null)}}else C=!1}var B;if(typeof x=="function")B=function(){x(D)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,H=$.port2;$.port1.onmessage=D,B=function(){H.postMessage(null)}}else B=function(){w(D,0)};function q(M){T=M,C||(C=!0,B())}function re(M,U){E=w(function(){M(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){g||p||(g=!0,q(j))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(M){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var S=f;f=U;try{return M()}finally{f=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,U){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var S=f;f=M;try{return U()}finally{f=S}},e.unstable_scheduleCallback=function(M,U,S){var X=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?X+S:X):S=X,M){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=S+ne,M={id:d++,callback:U,priorityLevel:M,startTime:S,expirationTime:ne,sortIndex:-1},S>X?(M.sortIndex=S,t(u,M),n(c)===null&&M===n(u)&&(y?(m(E),E=-1):y=!0,re(k,S-X))):(M.sortIndex=ne,t(c,M),g||p||(g=!0,q(j))),M},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(M){var U=f;return function(){var S=f;f=U;try{return M.apply(this,arguments)}finally{f=S}}}})(Rx);Px.exports=Rx;var wS=Px.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kS=b,Bt=wS;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ax=new Set,ys={};function vi(e,t){oo(e,t),oo(e+"Capture",t)}function oo(e,t){for(ys[e]=t,e=0;e<t.length;e++)Ax.add(t[e])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ad=Object.prototype.hasOwnProperty,SS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fm={},pm={};function CS(e){return ad.call(pm,e)?!0:ad.call(fm,e)?!1:SS.test(e)?pm[e]=!0:(fm[e]=!0,!1)}function _S(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ES(e,t,n,r){if(t===null||typeof t>"u"||_S(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function bt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new bt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zh=/[\-:]([a-z])/g;function ef(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zh,ef);nt[t]=new bt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zh,ef);nt[t]=new bt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zh,ef);nt[t]=new bt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new bt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function tf(e,t,n,r){var i=nt.hasOwnProperty(t)?nt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ES(t,n,i,r)&&(n=null),r||i===null?CS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nr=kS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),Pi=Symbol.for("react.portal"),Ri=Symbol.for("react.fragment"),nf=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Dx=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),ud=Symbol.for("react.suspense_list"),of=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),Mx=Symbol.for("react.offscreen"),mm=Symbol.iterator;function Ao(e){return e===null||typeof e!="object"?null:(e=mm&&e[mm]||e["@@iterator"],typeof e=="function"?e:null)}var De=Object.assign,Gc;function Go(e){if(Gc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gc=t&&t[1]||""}return`
`+Gc+e}var Yc=!1;function Kc(e,t){if(!e||Yc)return"";Yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Yc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Go(e):""}function jS(e){switch(e.tag){case 5:return Go(e.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return e=Kc(e.type,!1),e;case 11:return e=Kc(e.type.render,!1),e;case 1:return e=Kc(e.type,!0),e;default:return""}}function dd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ri:return"Fragment";case Pi:return"Portal";case ld:return"Profiler";case nf:return"StrictMode";case cd:return"Suspense";case ud:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dx:return(e.displayName||"Context")+".Consumer";case Nx:return(e._context.displayName||"Context")+".Provider";case rf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case of:return t=e.displayName||null,t!==null?t:dd(e.type)||"Memo";case ur:t=e._payload,e=e._init;try{return dd(e(t))}catch{}}return null}function TS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dd(t);case 8:return t===nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function IS(e){var t=Lx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ua(e){e._valueTracker||(e._valueTracker=IS(e))}function zx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lx(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hd(e,t){var n=t.checked;return De({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ox(e,t){t=t.checked,t!=null&&tf(e,"checked",t,!1)}function fd(e,t){Ox(e,t);var n=Rr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pd(e,t.type,n):t.hasOwnProperty("defaultValue")&&pd(e,t.type,Rr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ym(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pd(e,t,n){(t!=="number"||fl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yo=Array.isArray;function Yi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function md(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return De({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Yo(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rr(n)}}function Fx(e,t){var n=Rr(t.value),r=Rr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bx(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bx(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var da,Vx=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PS=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(e){PS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jo[t]=Jo[e]})});function Ux(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jo.hasOwnProperty(e)&&Jo[e]?(""+t).trim():t+"px"}function Wx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ux(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var RS=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(e,t){if(t){if(RS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function xd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vd=null;function sf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bd=null,Ki=null,qi=null;function bm(e){if(e=Hs(e)){if(typeof bd!="function")throw Error(z(280));var t=e.stateNode;t&&(t=dc(t),bd(e.stateNode,e.type,t))}}function $x(e){Ki?qi?qi.push(e):qi=[e]:Ki=e}function Hx(){if(Ki){var e=Ki,t=qi;if(qi=Ki=null,bm(e),t)for(e=0;e<t.length;e++)bm(t[e])}}function Gx(e,t){return e(t)}function Yx(){}var qc=!1;function Kx(e,t,n){if(qc)return e(t,n);qc=!0;try{return Gx(e,t,n)}finally{qc=!1,(Ki!==null||qi!==null)&&(Yx(),Hx())}}function vs(e,t){var n=e.stateNode;if(n===null)return null;var r=dc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var wd=!1;if(qn)try{var No={};Object.defineProperty(No,"passive",{get:function(){wd=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{wd=!1}function AS(e,t,n,r,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Zo=!1,pl=null,ml=!1,kd=null,NS={onError:function(e){Zo=!0,pl=e}};function DS(e,t,n,r,i,o,s,l,c){Zo=!1,pl=null,AS.apply(NS,arguments)}function MS(e,t,n,r,i,o,s,l,c){if(DS.apply(this,arguments),Zo){if(Zo){var u=pl;Zo=!1,pl=null}else throw Error(z(198));ml||(ml=!0,kd=u)}}function bi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wm(e){if(bi(e)!==e)throw Error(z(188))}function LS(e){var t=e.alternate;if(!t){if(t=bi(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return wm(i),e;if(o===r)return wm(i),t;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function Xx(e){return e=LS(e),e!==null?Qx(e):null}function Qx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qx(e);if(t!==null)return t;e=e.sibling}return null}var Jx=Bt.unstable_scheduleCallback,km=Bt.unstable_cancelCallback,zS=Bt.unstable_shouldYield,OS=Bt.unstable_requestPaint,Fe=Bt.unstable_now,FS=Bt.unstable_getCurrentPriorityLevel,af=Bt.unstable_ImmediatePriority,Zx=Bt.unstable_UserBlockingPriority,gl=Bt.unstable_NormalPriority,BS=Bt.unstable_LowPriority,ev=Bt.unstable_IdlePriority,ac=null,Tn=null;function VS(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(ac,e,void 0,(e.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:$S,US=Math.log,WS=Math.LN2;function $S(e){return e>>>=0,e===0?32:31-(US(e)/WS|0)|0}var ha=64,fa=4194304;function Ko(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Ko(l):(o&=s,o!==0&&(r=Ko(o)))}else s=n&~i,s!==0?r=Ko(s):o!==0&&(r=Ko(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pn(t),i=1<<n,r|=e[n],t&=~i;return r}function HS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-pn(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=HS(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Sd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tv(){var e=ha;return ha<<=1,!(ha&4194240)&&(ha=64),e}function Xc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ws(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pn(t),e[t]=n}function YS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function lf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xe=0;function nv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rv,cf,iv,ov,sv,Cd=!1,pa=[],wr=null,kr=null,Sr=null,bs=new Map,ws=new Map,fr=[],KS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sm(e,t){switch(e){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":bs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ws.delete(t.pointerId)}}function Do(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Hs(t),t!==null&&cf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qS(e,t,n,r,i){switch(t){case"focusin":return wr=Do(wr,e,t,n,r,i),!0;case"dragenter":return kr=Do(kr,e,t,n,r,i),!0;case"mouseover":return Sr=Do(Sr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return bs.set(o,Do(bs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ws.set(o,Do(ws.get(o)||null,e,t,n,r,i)),!0}return!1}function av(e){var t=ti(e.target);if(t!==null){var n=bi(t);if(n!==null){if(t=n.tag,t===13){if(t=qx(n),t!==null){e.blockedOn=t,sv(e.priority,function(){iv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_d(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vd=r,n.target.dispatchEvent(r),vd=null}else return t=Hs(n),t!==null&&cf(t),e.blockedOn=n,!1;t.shift()}return!0}function Cm(e,t,n){Fa(e)&&n.delete(t)}function XS(){Cd=!1,wr!==null&&Fa(wr)&&(wr=null),kr!==null&&Fa(kr)&&(kr=null),Sr!==null&&Fa(Sr)&&(Sr=null),bs.forEach(Cm),ws.forEach(Cm)}function Mo(e,t){e.blockedOn===t&&(e.blockedOn=null,Cd||(Cd=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,XS)))}function ks(e){function t(i){return Mo(i,e)}if(0<pa.length){Mo(pa[0],e);for(var n=1;n<pa.length;n++){var r=pa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wr!==null&&Mo(wr,e),kr!==null&&Mo(kr,e),Sr!==null&&Mo(Sr,e),bs.forEach(t),ws.forEach(t),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)av(n),n.blockedOn===null&&fr.shift()}var Xi=nr.ReactCurrentBatchConfig,xl=!0;function QS(e,t,n,r){var i=xe,o=Xi.transition;Xi.transition=null;try{xe=1,uf(e,t,n,r)}finally{xe=i,Xi.transition=o}}function JS(e,t,n,r){var i=xe,o=Xi.transition;Xi.transition=null;try{xe=4,uf(e,t,n,r)}finally{xe=i,Xi.transition=o}}function uf(e,t,n,r){if(xl){var i=_d(e,t,n,r);if(i===null)su(e,t,r,vl,n),Sm(e,r);else if(qS(i,e,t,n,r))r.stopPropagation();else if(Sm(e,r),t&4&&-1<KS.indexOf(e)){for(;i!==null;){var o=Hs(i);if(o!==null&&rv(o),o=_d(e,t,n,r),o===null&&su(e,t,r,vl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else su(e,t,r,null,n)}}var vl=null;function _d(e,t,n,r){if(vl=null,e=sf(r),e=ti(e),e!==null)if(t=bi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vl=e,null}function lv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FS()){case af:return 1;case Zx:return 4;case gl:case BS:return 16;case ev:return 536870912;default:return 16}default:return 16}}var yr=null,df=null,Ba=null;function cv(){if(Ba)return Ba;var e,t=df,n=t.length,r,i="value"in yr?yr.value:yr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ba=i.slice(e,1<r?1-r:void 0)}function Va(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ma(){return!0}function _m(){return!1}function Ut(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ma:_m,this.isPropagationStopped=_m,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),t}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=Ut(vo),$s=De({},vo,{view:0,detail:0}),ZS=Ut($s),Qc,Jc,Lo,lc=De({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lo&&(Lo&&e.type==="mousemove"?(Qc=e.screenX-Lo.screenX,Jc=e.screenY-Lo.screenY):Jc=Qc=0,Lo=e),Qc)},movementY:function(e){return"movementY"in e?e.movementY:Jc}}),Em=Ut(lc),eC=De({},lc,{dataTransfer:0}),tC=Ut(eC),nC=De({},$s,{relatedTarget:0}),Zc=Ut(nC),rC=De({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),iC=Ut(rC),oC=De({},vo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sC=Ut(oC),aC=De({},vo,{data:0}),jm=Ut(aC),lC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uC[e])?!!t[e]:!1}function ff(){return dC}var hC=De({},$s,{key:function(e){if(e.key){var t=lC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(e){return e.type==="keypress"?Va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fC=Ut(hC),pC=De({},lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Ut(pC),mC=De({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),gC=Ut(mC),yC=De({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),xC=Ut(yC),vC=De({},lc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bC=Ut(vC),wC=[9,13,27,32],pf=qn&&"CompositionEvent"in window,es=null;qn&&"documentMode"in document&&(es=document.documentMode);var kC=qn&&"TextEvent"in window&&!es,uv=qn&&(!pf||es&&8<es&&11>=es),Im=" ",Pm=!1;function dv(e,t){switch(e){case"keyup":return wC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ai=!1;function SC(e,t){switch(e){case"compositionend":return hv(t);case"keypress":return t.which!==32?null:(Pm=!0,Im);case"textInput":return e=t.data,e===Im&&Pm?null:e;default:return null}}function CC(e,t){if(Ai)return e==="compositionend"||!pf&&dv(e,t)?(e=cv(),Ba=df=yr=null,Ai=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uv&&t.locale!=="ko"?null:t.data;default:return null}}var _C={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_C[e.type]:t==="textarea"}function fv(e,t,n,r){$x(r),t=bl(t,"onChange"),0<t.length&&(n=new hf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ts=null,Ss=null;function EC(e){Cv(e,0)}function cc(e){var t=Mi(e);if(zx(t))return e}function jC(e,t){if(e==="change")return t}var pv=!1;if(qn){var eu;if(qn){var tu="oninput"in document;if(!tu){var Am=document.createElement("div");Am.setAttribute("oninput","return;"),tu=typeof Am.oninput=="function"}eu=tu}else eu=!1;pv=eu&&(!document.documentMode||9<document.documentMode)}function Nm(){ts&&(ts.detachEvent("onpropertychange",mv),Ss=ts=null)}function mv(e){if(e.propertyName==="value"&&cc(Ss)){var t=[];fv(t,Ss,e,sf(e)),Kx(EC,t)}}function TC(e,t,n){e==="focusin"?(Nm(),ts=t,Ss=n,ts.attachEvent("onpropertychange",mv)):e==="focusout"&&Nm()}function IC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cc(Ss)}function PC(e,t){if(e==="click")return cc(t)}function RC(e,t){if(e==="input"||e==="change")return cc(t)}function AC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xn=typeof Object.is=="function"?Object.is:AC;function Cs(e,t){if(xn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ad.call(t,i)||!xn(e[i],t[i]))return!1}return!0}function Dm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mm(e,t){var n=Dm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function gv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yv(){for(var e=window,t=fl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fl(e.document)}return t}function mf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function NC(e){var t=yv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gv(n.ownerDocument.documentElement,n)){if(r!==null&&mf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Mm(n,o);var s=Mm(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var DC=qn&&"documentMode"in document&&11>=document.documentMode,Ni=null,Ed=null,ns=null,jd=!1;function Lm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jd||Ni==null||Ni!==fl(r)||(r=Ni,"selectionStart"in r&&mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ns&&Cs(ns,r)||(ns=r,r=bl(Ed,"onSelect"),0<r.length&&(t=new hf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ni)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Di={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},nu={},xv={};qn&&(xv=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function uc(e){if(nu[e])return nu[e];if(!Di[e])return e;var t=Di[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xv)return nu[e]=t[n];return e}var vv=uc("animationend"),bv=uc("animationiteration"),wv=uc("animationstart"),kv=uc("transitionend"),Sv=new Map,zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(e,t){Sv.set(e,t),vi(t,[e])}for(var ru=0;ru<zm.length;ru++){var iu=zm[ru],MC=iu.toLowerCase(),LC=iu[0].toUpperCase()+iu.slice(1);Mr(MC,"on"+LC)}Mr(vv,"onAnimationEnd");Mr(bv,"onAnimationIteration");Mr(wv,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(kv,"onTransitionEnd");oo("onMouseEnter",["mouseout","mouseover"]);oo("onMouseLeave",["mouseout","mouseover"]);oo("onPointerEnter",["pointerout","pointerover"]);oo("onPointerLeave",["pointerout","pointerover"]);vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zC=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Om(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,MS(r,t,void 0,e),e.currentTarget=null}function Cv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Om(i,l,u),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Om(i,l,u),o=c}}}if(ml)throw e=kd,ml=!1,kd=null,e}function Te(e,t){var n=t[Ad];n===void 0&&(n=t[Ad]=new Set);var r=e+"__bubble";n.has(r)||(_v(t,e,2,!1),n.add(r))}function ou(e,t,n){var r=0;t&&(r|=4),_v(n,e,r,t)}var ya="_reactListening"+Math.random().toString(36).slice(2);function _s(e){if(!e[ya]){e[ya]=!0,Ax.forEach(function(n){n!=="selectionchange"&&(zC.has(n)||ou(n,!1,e),ou(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ya]||(t[ya]=!0,ou("selectionchange",!1,t))}}function _v(e,t,n,r){switch(lv(t)){case 1:var i=QS;break;case 4:i=JS;break;default:i=uf}n=i.bind(null,t,n,e),i=void 0,!wd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function su(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=ti(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Kx(function(){var u=o,d=sf(n),h=[];e:{var f=Sv.get(e);if(f!==void 0){var p=hf,g=e;switch(e){case"keypress":if(Va(n)===0)break e;case"keydown":case"keyup":p=fC;break;case"focusin":g="focus",p=Zc;break;case"focusout":g="blur",p=Zc;break;case"beforeblur":case"afterblur":p=Zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=gC;break;case vv:case bv:case wv:p=iC;break;case kv:p=xC;break;case"scroll":p=ZS;break;case"wheel":p=bC;break;case"copy":case"cut":case"paste":p=sC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Tm}var y=(t&4)!==0,w=!y&&e==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var x=u,v;x!==null;){v=x;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,m!==null&&(k=vs(x,m),k!=null&&y.push(Es(x,k,v)))),w)break;x=x.return}0<y.length&&(f=new p(f,g,null,n,d),h.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==vd&&(g=n.relatedTarget||n.fromElement)&&(ti(g)||g[Xn]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?ti(g):null,g!==null&&(w=bi(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Em,k="onMouseLeave",m="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(y=Tm,k="onPointerLeave",m="onPointerEnter",x="pointer"),w=p==null?f:Mi(p),v=g==null?f:Mi(g),f=new y(k,x+"leave",p,n,d),f.target=w,f.relatedTarget=v,k=null,ti(d)===u&&(y=new y(m,x+"enter",g,n,d),y.target=v,y.relatedTarget=w,k=y),w=k,p&&g)t:{for(y=p,m=g,x=0,v=y;v;v=_i(v))x++;for(v=0,k=m;k;k=_i(k))v++;for(;0<x-v;)y=_i(y),x--;for(;0<v-x;)m=_i(m),v--;for(;x--;){if(y===m||m!==null&&y===m.alternate)break t;y=_i(y),m=_i(m)}y=null}else y=null;p!==null&&Fm(h,f,p,y,!1),g!==null&&w!==null&&Fm(h,w,g,y,!0)}}e:{if(f=u?Mi(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var j=jC;else if(Rm(f))if(pv)j=RC;else{j=IC;var C=TC}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=PC);if(j&&(j=j(e,u))){fv(h,j,n,d);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&pd(f,"number",f.value)}switch(C=u?Mi(u):window,e){case"focusin":(Rm(C)||C.contentEditable==="true")&&(Ni=C,Ed=u,ns=null);break;case"focusout":ns=Ed=Ni=null;break;case"mousedown":jd=!0;break;case"contextmenu":case"mouseup":case"dragend":jd=!1,Lm(h,n,d);break;case"selectionchange":if(DC)break;case"keydown":case"keyup":Lm(h,n,d)}var T;if(pf)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ai?dv(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(uv&&n.locale!=="ko"&&(Ai||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ai&&(T=cv()):(yr=d,df="value"in yr?yr.value:yr.textContent,Ai=!0)),C=bl(u,E),0<C.length&&(E=new jm(E,e,null,n,d),h.push({event:E,listeners:C}),T?E.data=T:(T=hv(n),T!==null&&(E.data=T)))),(T=kC?SC(e,n):CC(e,n))&&(u=bl(u,"onBeforeInput"),0<u.length&&(d=new jm("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=T))}Cv(h,t)})}function Es(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=vs(e,n),o!=null&&r.unshift(Es(e,o,i)),o=vs(e,t),o!=null&&r.push(Es(e,o,i))),e=e.return}return r}function _i(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fm(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=vs(n,o),c!=null&&s.unshift(Es(n,c,l))):i||(c=vs(n,o),c!=null&&s.push(Es(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var OC=/\r\n?/g,FC=/\u0000|\uFFFD/g;function Bm(e){return(typeof e=="string"?e:""+e).replace(OC,`
`).replace(FC,"")}function xa(e,t,n){if(t=Bm(t),Bm(e)!==t&&n)throw Error(z(425))}function wl(){}var Td=null,Id=null;function Pd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rd=typeof setTimeout=="function"?setTimeout:void 0,BC=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,VC=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(e){return Vm.resolve(null).then(e).catch(UC)}:Rd;function UC(e){setTimeout(function(){throw e})}function au(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ks(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ks(t)}function Cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Um(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bo=Math.random().toString(36).slice(2),_n="__reactFiber$"+bo,js="__reactProps$"+bo,Xn="__reactContainer$"+bo,Ad="__reactEvents$"+bo,WC="__reactListeners$"+bo,$C="__reactHandles$"+bo;function ti(e){var t=e[_n];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xn]||n[_n]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Um(e);e!==null;){if(n=e[_n])return n;e=Um(e)}return t}e=n,n=e.parentNode}return null}function Hs(e){return e=e[_n]||e[Xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function dc(e){return e[js]||null}var Nd=[],Li=-1;function Lr(e){return{current:e}}function Ie(e){0>Li||(e.current=Nd[Li],Nd[Li]=null,Li--)}function _e(e,t){Li++,Nd[Li]=e.current,e.current=t}var Ar={},lt=Lr(Ar),jt=Lr(!1),fi=Ar;function so(e,t){var n=e.type.contextTypes;if(!n)return Ar;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(e){return e=e.childContextTypes,e!=null}function kl(){Ie(jt),Ie(lt)}function Wm(e,t,n){if(lt.current!==Ar)throw Error(z(168));_e(lt,t),_e(jt,n)}function Ev(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,TS(e)||"Unknown",i));return De({},n,r)}function Sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ar,fi=lt.current,_e(lt,e),_e(jt,jt.current),!0}function $m(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=Ev(e,t,fi),r.__reactInternalMemoizedMergedChildContext=e,Ie(jt),Ie(lt),_e(lt,e)):Ie(jt),_e(jt,n)}var Bn=null,hc=!1,lu=!1;function jv(e){Bn===null?Bn=[e]:Bn.push(e)}function HC(e){hc=!0,jv(e)}function zr(){if(!lu&&Bn!==null){lu=!0;var e=0,t=xe;try{var n=Bn;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bn=null,hc=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(e+1)),Jx(af,zr),i}finally{xe=t,lu=!1}}return null}var zi=[],Oi=0,Cl=null,_l=0,Gt=[],Yt=0,pi=null,$n=1,Hn="";function qr(e,t){zi[Oi++]=_l,zi[Oi++]=Cl,Cl=e,_l=t}function Tv(e,t,n){Gt[Yt++]=$n,Gt[Yt++]=Hn,Gt[Yt++]=pi,pi=e;var r=$n;e=Hn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var o=32-pn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,$n=1<<32-pn(t)+i|n<<i|r,Hn=o+e}else $n=1<<o|n<<i|r,Hn=e}function gf(e){e.return!==null&&(qr(e,1),Tv(e,1,0))}function yf(e){for(;e===Cl;)Cl=zi[--Oi],zi[Oi]=null,_l=zi[--Oi],zi[Oi]=null;for(;e===pi;)pi=Gt[--Yt],Gt[Yt]=null,Hn=Gt[--Yt],Gt[Yt]=null,$n=Gt[--Yt],Gt[Yt]=null}var Ot=null,Lt=null,Pe=!1,hn=null;function Iv(e,t){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ot=e,Lt=Cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ot=e,Lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pi!==null?{id:$n,overflow:Hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ot=e,Lt=null,!0):!1;default:return!1}}function Dd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Md(e){if(Pe){var t=Lt;if(t){var n=t;if(!Hm(e,t)){if(Dd(e))throw Error(z(418));t=Cr(n.nextSibling);var r=Ot;t&&Hm(e,t)?Iv(r,n):(e.flags=e.flags&-4097|2,Pe=!1,Ot=e)}}else{if(Dd(e))throw Error(z(418));e.flags=e.flags&-4097|2,Pe=!1,Ot=e}}}function Gm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ot=e}function va(e){if(e!==Ot)return!1;if(!Pe)return Gm(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pd(e.type,e.memoizedProps)),t&&(t=Lt)){if(Dd(e))throw Pv(),Error(z(418));for(;t;)Iv(e,t),t=Cr(t.nextSibling)}if(Gm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Lt=Cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Lt=null}}else Lt=Ot?Cr(e.stateNode.nextSibling):null;return!0}function Pv(){for(var e=Lt;e;)e=Cr(e.nextSibling)}function ao(){Lt=Ot=null,Pe=!1}function xf(e){hn===null?hn=[e]:hn.push(e)}var GC=nr.ReactCurrentBatchConfig;function zo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function ba(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ym(e){var t=e._init;return t(e._payload)}function Rv(e){function t(m,x){if(e){var v=m.deletions;v===null?(m.deletions=[x],m.flags|=16):v.push(x)}}function n(m,x){if(!e)return null;for(;x!==null;)t(m,x),x=x.sibling;return null}function r(m,x){for(m=new Map;x!==null;)x.key!==null?m.set(x.key,x):m.set(x.index,x),x=x.sibling;return m}function i(m,x){return m=Tr(m,x),m.index=0,m.sibling=null,m}function o(m,x,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<x?(m.flags|=2,x):v):(m.flags|=2,x)):(m.flags|=1048576,x)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,x,v,k){return x===null||x.tag!==6?(x=mu(v,m.mode,k),x.return=m,x):(x=i(x,v),x.return=m,x)}function c(m,x,v,k){var j=v.type;return j===Ri?d(m,x,v.props.children,k,v.key):x!==null&&(x.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ur&&Ym(j)===x.type)?(k=i(x,v.props),k.ref=zo(m,x,v),k.return=m,k):(k=Ka(v.type,v.key,v.props,null,m.mode,k),k.ref=zo(m,x,v),k.return=m,k)}function u(m,x,v,k){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=gu(v,m.mode,k),x.return=m,x):(x=i(x,v.children||[]),x.return=m,x)}function d(m,x,v,k,j){return x===null||x.tag!==7?(x=li(v,m.mode,k,j),x.return=m,x):(x=i(x,v),x.return=m,x)}function h(m,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=mu(""+x,m.mode,v),x.return=m,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ca:return v=Ka(x.type,x.key,x.props,null,m.mode,v),v.ref=zo(m,null,x),v.return=m,v;case Pi:return x=gu(x,m.mode,v),x.return=m,x;case ur:var k=x._init;return h(m,k(x._payload),v)}if(Yo(x)||Ao(x))return x=li(x,m.mode,v,null),x.return=m,x;ba(m,x)}return null}function f(m,x,v,k){var j=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return j!==null?null:l(m,x,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ca:return v.key===j?c(m,x,v,k):null;case Pi:return v.key===j?u(m,x,v,k):null;case ur:return j=v._init,f(m,x,j(v._payload),k)}if(Yo(v)||Ao(v))return j!==null?null:d(m,x,v,k,null);ba(m,v)}return null}function p(m,x,v,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(v)||null,l(x,m,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ca:return m=m.get(k.key===null?v:k.key)||null,c(x,m,k,j);case Pi:return m=m.get(k.key===null?v:k.key)||null,u(x,m,k,j);case ur:var C=k._init;return p(m,x,v,C(k._payload),j)}if(Yo(k)||Ao(k))return m=m.get(v)||null,d(x,m,k,j,null);ba(x,k)}return null}function g(m,x,v,k){for(var j=null,C=null,T=x,E=x=0,A=null;T!==null&&E<v.length;E++){T.index>E?(A=T,T=null):A=T.sibling;var P=f(m,T,v[E],k);if(P===null){T===null&&(T=A);break}e&&T&&P.alternate===null&&t(m,T),x=o(P,x,E),C===null?j=P:C.sibling=P,C=P,T=A}if(E===v.length)return n(m,T),Pe&&qr(m,E),j;if(T===null){for(;E<v.length;E++)T=h(m,v[E],k),T!==null&&(x=o(T,x,E),C===null?j=T:C.sibling=T,C=T);return Pe&&qr(m,E),j}for(T=r(m,T);E<v.length;E++)A=p(T,m,E,v[E],k),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?E:A.key),x=o(A,x,E),C===null?j=A:C.sibling=A,C=A);return e&&T.forEach(function(N){return t(m,N)}),Pe&&qr(m,E),j}function y(m,x,v,k){var j=Ao(v);if(typeof j!="function")throw Error(z(150));if(v=j.call(v),v==null)throw Error(z(151));for(var C=j=null,T=x,E=x=0,A=null,P=v.next();T!==null&&!P.done;E++,P=v.next()){T.index>E?(A=T,T=null):A=T.sibling;var N=f(m,T,P.value,k);if(N===null){T===null&&(T=A);break}e&&T&&N.alternate===null&&t(m,T),x=o(N,x,E),C===null?j=N:C.sibling=N,C=N,T=A}if(P.done)return n(m,T),Pe&&qr(m,E),j;if(T===null){for(;!P.done;E++,P=v.next())P=h(m,P.value,k),P!==null&&(x=o(P,x,E),C===null?j=P:C.sibling=P,C=P);return Pe&&qr(m,E),j}for(T=r(m,T);!P.done;E++,P=v.next())P=p(T,m,E,P.value,k),P!==null&&(e&&P.alternate!==null&&T.delete(P.key===null?E:P.key),x=o(P,x,E),C===null?j=P:C.sibling=P,C=P);return e&&T.forEach(function(D){return t(m,D)}),Pe&&qr(m,E),j}function w(m,x,v,k){if(typeof v=="object"&&v!==null&&v.type===Ri&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ca:e:{for(var j=v.key,C=x;C!==null;){if(C.key===j){if(j=v.type,j===Ri){if(C.tag===7){n(m,C.sibling),x=i(C,v.props.children),x.return=m,m=x;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ur&&Ym(j)===C.type){n(m,C.sibling),x=i(C,v.props),x.ref=zo(m,C,v),x.return=m,m=x;break e}n(m,C);break}else t(m,C);C=C.sibling}v.type===Ri?(x=li(v.props.children,m.mode,k,v.key),x.return=m,m=x):(k=Ka(v.type,v.key,v.props,null,m.mode,k),k.ref=zo(m,x,v),k.return=m,m=k)}return s(m);case Pi:e:{for(C=v.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(m,x.sibling),x=i(x,v.children||[]),x.return=m,m=x;break e}else{n(m,x);break}else t(m,x);x=x.sibling}x=gu(v,m.mode,k),x.return=m,m=x}return s(m);case ur:return C=v._init,w(m,x,C(v._payload),k)}if(Yo(v))return g(m,x,v,k);if(Ao(v))return y(m,x,v,k);ba(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(m,x.sibling),x=i(x,v),x.return=m,m=x):(n(m,x),x=mu(v,m.mode,k),x.return=m,m=x),s(m)):n(m,x)}return w}var lo=Rv(!0),Av=Rv(!1),El=Lr(null),jl=null,Fi=null,vf=null;function bf(){vf=Fi=jl=null}function wf(e){var t=El.current;Ie(El),e._currentValue=t}function Ld(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qi(e,t){jl=e,vf=Fi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Et=!0),e.firstContext=null)}function Zt(e){var t=e._currentValue;if(vf!==e)if(e={context:e,memoizedValue:t,next:null},Fi===null){if(jl===null)throw Error(z(308));Fi=e,jl.dependencies={lanes:0,firstContext:e}}else Fi=Fi.next=e;return t}var ni=null;function kf(e){ni===null?ni=[e]:ni.push(e)}function Nv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,kf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qn(e,r)}function Qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dr=!1;function Sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _r(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qn(e,n)}return i=r.interleaved,i===null?(t.next=t,kf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qn(e,n)}function Ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lf(e,n)}}function Km(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Tl(e,t,n,r){var i=e.updateQueue;dr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;s=0,d=u=c=null,l=o;do{var f=l.lane,p=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,y=l;switch(f=t,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=De({},h,f);break e;case 2:dr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,c=h):d=d.next=p,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);gi|=s,e.lanes=s,e.memoizedState=h}}function qm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Gs={},In=Lr(Gs),Ts=Lr(Gs),Is=Lr(Gs);function ri(e){if(e===Gs)throw Error(z(174));return e}function Cf(e,t){switch(_e(Is,t),_e(Ts,e),_e(In,Gs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gd(t,e)}Ie(In),_e(In,t)}function co(){Ie(In),Ie(Ts),Ie(Is)}function Mv(e){ri(Is.current);var t=ri(In.current),n=gd(t,e.type);t!==n&&(_e(Ts,e),_e(In,n))}function _f(e){Ts.current===e&&(Ie(In),Ie(Ts))}var Ae=Lr(0);function Il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cu=[];function Ef(){for(var e=0;e<cu.length;e++)cu[e]._workInProgressVersionPrimary=null;cu.length=0}var Wa=nr.ReactCurrentDispatcher,uu=nr.ReactCurrentBatchConfig,mi=0,Ne=null,Ge=null,Ke=null,Pl=!1,rs=!1,Ps=0,YC=0;function it(){throw Error(z(321))}function jf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xn(e[n],t[n]))return!1;return!0}function Tf(e,t,n,r,i,o){if(mi=o,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wa.current=e===null||e.memoizedState===null?QC:JC,e=n(r,i),rs){o=0;do{if(rs=!1,Ps=0,25<=o)throw Error(z(301));o+=1,Ke=Ge=null,t.updateQueue=null,Wa.current=ZC,e=n(r,i)}while(rs)}if(Wa.current=Rl,t=Ge!==null&&Ge.next!==null,mi=0,Ke=Ge=Ne=null,Pl=!1,t)throw Error(z(300));return e}function If(){var e=Ps!==0;return Ps=0,e}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ne.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function en(){if(Ge===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Ke===null?Ne.memoizedState:Ke.next;if(t!==null)Ke=t,Ge=e;else{if(e===null)throw Error(z(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ke===null?Ne.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Rs(e,t){return typeof t=="function"?t(e):t}function du(e){var t=en(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=Ge,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((mi&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,s=r):c=c.next=h,Ne.lanes|=d,gi|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=l,xn(r,t.memoizedState)||(Et=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ne.lanes|=o,gi|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hu(e){var t=en(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);xn(o,t.memoizedState)||(Et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lv(){}function zv(e,t){var n=Ne,r=en(),i=t(),o=!xn(r.memoizedState,i);if(o&&(r.memoizedState=i,Et=!0),r=r.queue,Pf(Bv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,As(9,Fv.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(z(349));mi&30||Ov(n,t,i)}return i}function Ov(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fv(e,t,n,r){t.value=n,t.getSnapshot=r,Vv(t)&&Uv(e)}function Bv(e,t,n){return n(function(){Vv(t)&&Uv(e)})}function Vv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xn(e,n)}catch{return!0}}function Uv(e){var t=Qn(e,1);t!==null&&mn(t,e,1,-1)}function Xm(e){var t=bn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:e},t.queue=e,e=e.dispatch=XC.bind(null,Ne,e),[t.memoizedState,e]}function As(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wv(){return en().memoizedState}function $a(e,t,n,r){var i=bn();Ne.flags|=e,i.memoizedState=As(1|t,n,void 0,r===void 0?null:r)}function fc(e,t,n,r){var i=en();r=r===void 0?null:r;var o=void 0;if(Ge!==null){var s=Ge.memoizedState;if(o=s.destroy,r!==null&&jf(r,s.deps)){i.memoizedState=As(t,n,o,r);return}}Ne.flags|=e,i.memoizedState=As(1|t,n,o,r)}function Qm(e,t){return $a(8390656,8,e,t)}function Pf(e,t){return fc(2048,8,e,t)}function $v(e,t){return fc(4,2,e,t)}function Hv(e,t){return fc(4,4,e,t)}function Gv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yv(e,t,n){return n=n!=null?n.concat([e]):null,fc(4,4,Gv.bind(null,t,e),n)}function Rf(){}function Kv(e,t){var n=en();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qv(e,t){var n=en();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xv(e,t,n){return mi&21?(xn(n,t)||(n=tv(),Ne.lanes|=n,gi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=n)}function KC(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=uu.transition;uu.transition={};try{e(!1),t()}finally{xe=n,uu.transition=r}}function Qv(){return en().memoizedState}function qC(e,t,n){var r=jr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jv(e))Zv(t,n);else if(n=Nv(e,t,n,r),n!==null){var i=yt();mn(n,e,r,i),e1(n,t,r)}}function XC(e,t,n){var r=jr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jv(e))Zv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,xn(l,s)){var c=t.interleaved;c===null?(i.next=i,kf(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Nv(e,t,i,r),n!==null&&(i=yt(),mn(n,e,r,i),e1(n,t,r))}}function Jv(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function Zv(e,t){rs=Pl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function e1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lf(e,n)}}var Rl={readContext:Zt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},QC={readContext:Zt,useCallback:function(e,t){return bn().memoizedState=[e,t===void 0?null:t],e},useContext:Zt,useEffect:Qm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$a(4194308,4,Gv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $a(4194308,4,e,t)},useInsertionEffect:function(e,t){return $a(4,2,e,t)},useMemo:function(e,t){var n=bn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qC.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=bn();return e={current:e},t.memoizedState=e},useState:Xm,useDebugValue:Rf,useDeferredValue:function(e){return bn().memoizedState=e},useTransition:function(){var e=Xm(!1),t=e[0];return e=KC.bind(null,e[1]),bn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,i=bn();if(Pe){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Xe===null)throw Error(z(349));mi&30||Ov(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qm(Bv.bind(null,r,o,e),[e]),r.flags|=2048,As(9,Fv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bn(),t=Xe.identifierPrefix;if(Pe){var n=Hn,r=$n;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ps++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=YC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},JC={readContext:Zt,useCallback:Kv,useContext:Zt,useEffect:Pf,useImperativeHandle:Yv,useInsertionEffect:$v,useLayoutEffect:Hv,useMemo:qv,useReducer:du,useRef:Wv,useState:function(){return du(Rs)},useDebugValue:Rf,useDeferredValue:function(e){var t=en();return Xv(t,Ge.memoizedState,e)},useTransition:function(){var e=du(Rs)[0],t=en().memoizedState;return[e,t]},useMutableSource:Lv,useSyncExternalStore:zv,useId:Qv,unstable_isNewReconciler:!1},ZC={readContext:Zt,useCallback:Kv,useContext:Zt,useEffect:Pf,useImperativeHandle:Yv,useInsertionEffect:$v,useLayoutEffect:Hv,useMemo:qv,useReducer:hu,useRef:Wv,useState:function(){return hu(Rs)},useDebugValue:Rf,useDeferredValue:function(e){var t=en();return Ge===null?t.memoizedState=e:Xv(t,Ge.memoizedState,e)},useTransition:function(){var e=hu(Rs)[0],t=en().memoizedState;return[e,t]},useMutableSource:Lv,useSyncExternalStore:zv,useId:Qv,unstable_isNewReconciler:!1};function un(e,t){if(e&&e.defaultProps){t=De({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:De({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pc={isMounted:function(e){return(e=e._reactInternals)?bi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=yt(),i=jr(e),o=Kn(r,i);o.payload=t,n!=null&&(o.callback=n),t=_r(e,o,i),t!==null&&(mn(t,e,i,r),Ua(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=yt(),i=jr(e),o=Kn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_r(e,o,i),t!==null&&(mn(t,e,i,r),Ua(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),r=jr(e),i=Kn(n,r);i.tag=2,t!=null&&(i.callback=t),t=_r(e,i,r),t!==null&&(mn(t,e,r,n),Ua(t,e,r))}};function Jm(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Cs(n,r)||!Cs(i,o):!0}function t1(e,t,n){var r=!1,i=Ar,o=t.contextType;return typeof o=="object"&&o!==null?o=Zt(o):(i=Tt(t)?fi:lt.current,r=t.contextTypes,o=(r=r!=null)?so(e,i):Ar),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pc.enqueueReplaceState(t,t.state,null)}function Od(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Sf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Zt(o):(o=Tt(t)?fi:lt.current,i.context=so(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(zd(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pc.enqueueReplaceState(i,i.state,null),Tl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function uo(e,t){try{var n="",r=t;do n+=jS(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var e_=typeof WeakMap=="function"?WeakMap:Map;function n1(e,t,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Nl||(Nl=!0,qd=r),Fd(e,t)},n}function r1(e,t,n){n=Kn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fd(e,t),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function eg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new e_;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=p_.bind(null,e,t,n),t.then(e,e))}function tg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ng(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Kn(-1,1),t.tag=2,_r(n,t,1))),n.lanes|=1),e)}var t_=nr.ReactCurrentOwner,Et=!1;function pt(e,t,n,r){t.child=e===null?Av(t,null,n,r):lo(t,e.child,n,r)}function rg(e,t,n,r,i){n=n.render;var o=t.ref;return Qi(t,i),r=Tf(e,t,n,r,o,i),n=If(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jn(e,t,i)):(Pe&&n&&gf(t),t.flags|=1,pt(e,t,r,i),t.child)}function ig(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ff(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,i1(e,t,o,r,i)):(e=Ka(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cs,n(s,r)&&e.ref===t.ref)return Jn(e,t,i)}return t.flags|=1,e=Tr(o,r),e.ref=t.ref,e.return=t,t.child=e}function i1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Cs(o,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Et=!0);else return t.lanes=e.lanes,Jn(e,t,i)}return Bd(e,t,n,r,i)}function o1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Vi,Mt),Mt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(Vi,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_e(Vi,Mt),Mt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,_e(Vi,Mt),Mt|=r;return pt(e,t,i,n),t.child}function s1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bd(e,t,n,r,i){var o=Tt(n)?fi:lt.current;return o=so(t,o),Qi(t,i),n=Tf(e,t,n,r,o,i),r=If(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jn(e,t,i)):(Pe&&r&&gf(t),t.flags|=1,pt(e,t,n,i),t.child)}function og(e,t,n,r,i){if(Tt(n)){var o=!0;Sl(t)}else o=!1;if(Qi(t,i),t.stateNode===null)Ha(e,t),t1(t,n,r),Od(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Zt(u):(u=Tt(n)?fi:lt.current,u=so(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Zm(t,s,r,u),dr=!1;var f=t.memoizedState;s.state=f,Tl(t,r,s,i),c=t.memoizedState,l!==r||f!==c||jt.current||dr?(typeof d=="function"&&(zd(t,n,d,r),c=t.memoizedState),(l=dr||Jm(t,n,l,r,f,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Dv(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:un(t.type,l),s.props=u,h=t.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Zt(c):(c=Tt(n)?fi:lt.current,c=so(t,c));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||f!==c)&&Zm(t,s,r,c),dr=!1,f=t.memoizedState,s.state=f,Tl(t,r,s,i);var g=t.memoizedState;l!==h||f!==g||jt.current||dr?(typeof p=="function"&&(zd(t,n,p,r),g=t.memoizedState),(u=dr||Jm(t,n,u,r,f,g,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Vd(e,t,n,r,o,i)}function Vd(e,t,n,r,i,o){s1(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&$m(t,n,!1),Jn(e,t,o);r=t.stateNode,t_.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=lo(t,e.child,null,o),t.child=lo(t,null,l,o)):pt(e,t,l,o),t.memoizedState=r.state,i&&$m(t,n,!0),t.child}function a1(e){var t=e.stateNode;t.pendingContext?Wm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wm(e,t.context,!1),Cf(e,t.containerInfo)}function sg(e,t,n,r,i){return ao(),xf(i),t.flags|=256,pt(e,t,n,r),t.child}var Ud={dehydrated:null,treeContext:null,retryLane:0};function Wd(e){return{baseLanes:e,cachePool:null,transitions:null}}function l1(e,t,n){var r=t.pendingProps,i=Ae.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_e(Ae,i&1),e===null)return Md(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=yc(s,r,0,null),e=li(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Wd(n),t.memoizedState=Ud,e):Af(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return n_(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Tr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Tr(l,o):(o=li(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Wd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ud,r}return o=e.child,e=o.sibling,r=Tr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Af(e,t){return t=yc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wa(e,t,n,r){return r!==null&&xf(r),lo(t,e.child,null,n),e=Af(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n_(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=fu(Error(z(422))),wa(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=yc({mode:"visible",children:r.children},i,0,null),o=li(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&lo(t,e.child,null,s),t.child.memoizedState=Wd(s),t.memoizedState=Ud,o);if(!(t.mode&1))return wa(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(z(419)),r=fu(o,r,void 0),wa(e,t,s,r)}if(l=(s&e.childLanes)!==0,Et||l){if(r=Xe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qn(e,i),mn(r,e,i,-1))}return Of(),r=fu(Error(z(421))),wa(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=m_.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Lt=Cr(i.nextSibling),Ot=t,Pe=!0,hn=null,e!==null&&(Gt[Yt++]=$n,Gt[Yt++]=Hn,Gt[Yt++]=pi,$n=e.id,Hn=e.overflow,pi=t),t=Af(t,r.children),t.flags|=4096,t)}function ag(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ld(e.return,t,n)}function pu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function c1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(pt(e,t,r.children,n),r=Ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ag(e,n,t);else if(e.tag===19)ag(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e(Ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Il(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),pu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Il(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pu(t,!0,n,null,o);break;case"together":pu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ha(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Tr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function r_(e,t,n){switch(t.tag){case 3:a1(t),ao();break;case 5:Mv(t);break;case 1:Tt(t.type)&&Sl(t);break;case 4:Cf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_e(El,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ae,Ae.current&1),t.flags|=128,null):n&t.child.childLanes?l1(e,t,n):(_e(Ae,Ae.current&1),e=Jn(e,t,n),e!==null?e.sibling:null);_e(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return c1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,o1(e,t,n)}return Jn(e,t,n)}var u1,$d,d1,h1;u1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$d=function(){};d1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ri(In.current);var o=null;switch(n){case"input":i=hd(e,i),r=hd(e,r),o=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),o=[];break;case"textarea":i=md(e,i),r=md(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wl)}yd(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ys.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ys.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Te("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};h1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Oo(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i_(e,t,n){var r=t.pendingProps;switch(yf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return Tt(t.type)&&kl(),ot(t),null;case 3:return r=t.stateNode,co(),Ie(jt),Ie(lt),Ef(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(va(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,hn!==null&&(Jd(hn),hn=null))),$d(e,t),ot(t),null;case 5:_f(t);var i=ri(Is.current);if(n=t.type,e!==null&&t.stateNode!=null)d1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return ot(t),null}if(e=ri(In.current),va(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[_n]=t,r[js]=o,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)Te(qo[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":gm(r,o),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Te("invalid",r);break;case"textarea":xm(r,o),Te("invalid",r)}yd(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&xa(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&xa(r.textContent,l,e),i=["children",""+l]):ys.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Te("scroll",r)}switch(n){case"input":ua(r),ym(r,o,!0);break;case"textarea":ua(r),vm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=wl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bx(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[_n]=t,e[js]=r,u1(e,t,!1,!1),t.stateNode=e;e:{switch(s=xd(n,r),n){case"dialog":Te("cancel",e),Te("close",e),i=r;break;case"iframe":case"object":case"embed":Te("load",e),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)Te(qo[i],e);i=r;break;case"source":Te("error",e),i=r;break;case"img":case"image":case"link":Te("error",e),Te("load",e),i=r;break;case"details":Te("toggle",e),i=r;break;case"input":gm(e,r),i=hd(e,r),Te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Te("invalid",e);break;case"textarea":xm(e,r),i=md(e,r),Te("invalid",e);break;default:i=r}yd(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Wx(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Vx(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&xs(e,c):typeof c=="number"&&xs(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ys.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Te("scroll",e):c!=null&&tf(e,o,c,s))}switch(n){case"input":ua(e),ym(e,r,!1);break;case"textarea":ua(e),vm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Yi(e,!!r.multiple,o,!1):r.defaultValue!=null&&Yi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)h1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=ri(Is.current),ri(In.current),va(t)){if(r=t.stateNode,n=t.memoizedProps,r[_n]=t,(o=r.nodeValue!==n)&&(e=Ot,e!==null))switch(e.tag){case 3:xa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xa(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=t,t.stateNode=r}return ot(t),null;case 13:if(Ie(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&Lt!==null&&t.mode&1&&!(t.flags&128))Pv(),ao(),t.flags|=98560,o=!1;else if(o=va(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(z(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[_n]=t}else ao(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ot(t),o=!1}else hn!==null&&(Jd(hn),hn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Ye===0&&(Ye=3):Of())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return co(),$d(e,t),e===null&&_s(t.stateNode.containerInfo),ot(t),null;case 10:return wf(t.type._context),ot(t),null;case 17:return Tt(t.type)&&kl(),ot(t),null;case 19:if(Ie(Ae),o=t.memoizedState,o===null)return ot(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Oo(o,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Il(e),s!==null){for(t.flags|=128,Oo(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e(Ae,Ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&Fe()>ho&&(t.flags|=128,r=!0,Oo(o,!1),t.lanes=4194304)}else{if(!r)if(e=Il(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Oo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Pe)return ot(t),null}else 2*Fe()-o.renderingStartTime>ho&&n!==1073741824&&(t.flags|=128,r=!0,Oo(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Fe(),t.sibling=null,n=Ae.current,_e(Ae,r?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return zf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Mt&1073741824&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function o_(e,t){switch(yf(t),t.tag){case 1:return Tt(t.type)&&kl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return co(),Ie(jt),Ie(lt),Ef(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _f(t),null;case 13:if(Ie(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));ao()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Ae),null;case 4:return co(),null;case 10:return wf(t.type._context),null;case 22:case 23:return zf(),null;case 24:return null;default:return null}}var ka=!1,at=!1,s_=typeof WeakSet=="function"?WeakSet:Set,G=null;function Bi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function Hd(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var lg=!1;function a_(e,t){if(Td=xl,e=yv(),mf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(l=s+i),h!==o||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===e)break t;if(f===n&&++u===i&&(l=s),f===o&&++d===r&&(c=s),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Id={focusedElem:e,selectionRange:n},xl=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,w=g.memoizedState,m=t.stateNode,x=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:un(t.type,y),w);m.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(k){Oe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return g=lg,lg=!1,g}function is(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Hd(t,n,o)}i=i.next}while(i!==r)}}function mc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function f1(e){var t=e.alternate;t!==null&&(e.alternate=null,f1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_n],delete t[js],delete t[Ad],delete t[WC],delete t[$C])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function p1(e){return e.tag===5||e.tag===3||e.tag===4}function cg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||p1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wl));else if(r!==4&&(e=e.child,e!==null))for(Yd(e,t,n),e=e.sibling;e!==null;)Yd(e,t,n),e=e.sibling}function Kd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Kd(e,t,n),e=e.sibling;e!==null;)Kd(e,t,n),e=e.sibling}var Je=null,dn=!1;function sr(e,t,n){for(n=n.child;n!==null;)m1(e,t,n),n=n.sibling}function m1(e,t,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 5:at||Bi(n,t);case 6:var r=Je,i=dn;Je=null,sr(e,t,n),Je=r,dn=i,Je!==null&&(dn?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(dn?(e=Je,n=n.stateNode,e.nodeType===8?au(e.parentNode,n):e.nodeType===1&&au(e,n),ks(e)):au(Je,n.stateNode));break;case 4:r=Je,i=dn,Je=n.stateNode.containerInfo,dn=!0,sr(e,t,n),Je=r,dn=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Hd(n,t,s),i=i.next}while(i!==r)}sr(e,t,n);break;case 1:if(!at&&(Bi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,t,l)}sr(e,t,n);break;case 21:sr(e,t,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,sr(e,t,n),at=r):sr(e,t,n);break;default:sr(e,t,n)}}function ug(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new s_),t.forEach(function(r){var i=g_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,dn=!1;break e;case 3:Je=l.stateNode.containerInfo,dn=!0;break e;case 4:Je=l.stateNode.containerInfo,dn=!0;break e}l=l.return}if(Je===null)throw Error(z(160));m1(o,s,i),Je=null,dn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)g1(t,e),t=t.sibling}function g1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(an(t,e),vn(e),r&4){try{is(3,e,e.return),mc(3,e)}catch(y){Oe(e,e.return,y)}try{is(5,e,e.return)}catch(y){Oe(e,e.return,y)}}break;case 1:an(t,e),vn(e),r&512&&n!==null&&Bi(n,n.return);break;case 5:if(an(t,e),vn(e),r&512&&n!==null&&Bi(n,n.return),e.flags&32){var i=e.stateNode;try{xs(i,"")}catch(y){Oe(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ox(i,o),xd(l,s);var u=xd(l,o);for(s=0;s<c.length;s+=2){var d=c[s],h=c[s+1];d==="style"?Wx(i,h):d==="dangerouslySetInnerHTML"?Vx(i,h):d==="children"?xs(i,h):tf(i,d,h,u)}switch(l){case"input":fd(i,o);break;case"textarea":Fx(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Yi(i,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?Yi(i,!!o.multiple,o.defaultValue,!0):Yi(i,!!o.multiple,o.multiple?[]:"",!1))}i[js]=o}catch(y){Oe(e,e.return,y)}}break;case 6:if(an(t,e),vn(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Oe(e,e.return,y)}}break;case 3:if(an(t,e),vn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ks(t.containerInfo)}catch(y){Oe(e,e.return,y)}break;case 4:an(t,e),vn(e);break;case 13:an(t,e),vn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Mf=Fe())),r&4&&ug(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(at=(u=at)||d,an(t,e),at=u):an(t,e),vn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(h=G=d;G!==null;){switch(f=G,p=f.child,f.tag){case 0:case 11:case 14:case 15:is(4,f,f.return);break;case 1:Bi(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){Oe(r,n,y)}}break;case 5:Bi(f,f.return);break;case 22:if(f.memoizedState!==null){hg(h);continue}}p!==null?(p.return=f,G=p):hg(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ux("display",s))}catch(y){Oe(e,e.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){Oe(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:an(t,e),vn(e),r&4&&ug(e);break;case 21:break;default:an(t,e),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(p1(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xs(i,""),r.flags&=-33);var o=cg(e);Kd(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=cg(e);Yd(e,l,s);break;default:throw Error(z(161))}}catch(c){Oe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l_(e,t,n){G=e,y1(e)}function y1(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var i=G,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ka;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||at;l=ka;var u=at;if(ka=s,(at=c)&&!u)for(G=i;G!==null;)s=G,c=s.child,s.tag===22&&s.memoizedState!==null?fg(i):c!==null?(c.return=s,G=c):fg(i);for(;o!==null;)G=o,y1(o),o=o.sibling;G=i,ka=l,at=u}dg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,G=o):dg(e)}}function dg(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:at||mc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:un(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&qm(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qm(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ks(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}at||t.flags&512&&Gd(t)}catch(f){Oe(t,t.return,f)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function hg(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function fg(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mc(4,t)}catch(c){Oe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Oe(t,i,c)}}var o=t.return;try{Gd(t)}catch(c){Oe(t,o,c)}break;case 5:var s=t.return;try{Gd(t)}catch(c){Oe(t,s,c)}}}catch(c){Oe(t,t.return,c)}if(t===e){G=null;break}var l=t.sibling;if(l!==null){l.return=t.return,G=l;break}G=t.return}}var c_=Math.ceil,Al=nr.ReactCurrentDispatcher,Nf=nr.ReactCurrentOwner,Qt=nr.ReactCurrentBatchConfig,de=0,Xe=null,We=null,tt=0,Mt=0,Vi=Lr(0),Ye=0,Ns=null,gi=0,gc=0,Df=0,os=null,_t=null,Mf=0,ho=1/0,Fn=null,Nl=!1,qd=null,Er=null,Sa=!1,xr=null,Dl=0,ss=0,Xd=null,Ga=-1,Ya=0;function yt(){return de&6?Fe():Ga!==-1?Ga:Ga=Fe()}function jr(e){return e.mode&1?de&2&&tt!==0?tt&-tt:GC.transition!==null?(Ya===0&&(Ya=tv()),Ya):(e=xe,e!==0||(e=window.event,e=e===void 0?16:lv(e.type)),e):1}function mn(e,t,n,r){if(50<ss)throw ss=0,Xd=null,Error(z(185));Ws(e,n,r),(!(de&2)||e!==Xe)&&(e===Xe&&(!(de&2)&&(gc|=n),Ye===4&&pr(e,tt)),It(e,r),n===1&&de===0&&!(t.mode&1)&&(ho=Fe()+500,hc&&zr()))}function It(e,t){var n=e.callbackNode;GS(e,t);var r=yl(e,e===Xe?tt:0);if(r===0)n!==null&&km(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&km(n),t===1)e.tag===0?HC(pg.bind(null,e)):jv(pg.bind(null,e)),VC(function(){!(de&6)&&zr()}),n=null;else{switch(nv(r)){case 1:n=af;break;case 4:n=Zx;break;case 16:n=gl;break;case 536870912:n=ev;break;default:n=gl}n=_1(n,x1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function x1(e,t){if(Ga=-1,Ya=0,de&6)throw Error(z(327));var n=e.callbackNode;if(Ji()&&e.callbackNode!==n)return null;var r=yl(e,e===Xe?tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ml(e,r);else{t=r;var i=de;de|=2;var o=b1();(Xe!==e||tt!==t)&&(Fn=null,ho=Fe()+500,ai(e,t));do try{h_();break}catch(l){v1(e,l)}while(!0);bf(),Al.current=o,de=i,We!==null?t=0:(Xe=null,tt=0,t=Ye)}if(t!==0){if(t===2&&(i=Sd(e),i!==0&&(r=i,t=Qd(e,i))),t===1)throw n=Ns,ai(e,0),pr(e,r),It(e,Fe()),n;if(t===6)pr(e,r);else{if(i=e.current.alternate,!(r&30)&&!u_(i)&&(t=Ml(e,r),t===2&&(o=Sd(e),o!==0&&(r=o,t=Qd(e,o))),t===1))throw n=Ns,ai(e,0),pr(e,r),It(e,Fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:Xr(e,_t,Fn);break;case 3:if(pr(e,r),(r&130023424)===r&&(t=Mf+500-Fe(),10<t)){if(yl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){yt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rd(Xr.bind(null,e,_t,Fn),t);break}Xr(e,_t,Fn);break;case 4:if(pr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-pn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c_(r/1960))-r,10<r){e.timeoutHandle=Rd(Xr.bind(null,e,_t,Fn),r);break}Xr(e,_t,Fn);break;case 5:Xr(e,_t,Fn);break;default:throw Error(z(329))}}}return It(e,Fe()),e.callbackNode===n?x1.bind(null,e):null}function Qd(e,t){var n=os;return e.current.memoizedState.isDehydrated&&(ai(e,t).flags|=256),e=Ml(e,t),e!==2&&(t=_t,_t=n,t!==null&&Jd(t)),e}function Jd(e){_t===null?_t=e:_t.push.apply(_t,e)}function u_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!xn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pr(e,t){for(t&=~Df,t&=~gc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pn(t),r=1<<n;e[n]=-1,t&=~r}}function pg(e){if(de&6)throw Error(z(327));Ji();var t=yl(e,0);if(!(t&1))return It(e,Fe()),null;var n=Ml(e,t);if(e.tag!==0&&n===2){var r=Sd(e);r!==0&&(t=r,n=Qd(e,r))}if(n===1)throw n=Ns,ai(e,0),pr(e,t),It(e,Fe()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xr(e,_t,Fn),It(e,Fe()),null}function Lf(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(ho=Fe()+500,hc&&zr())}}function yi(e){xr!==null&&xr.tag===0&&!(de&6)&&Ji();var t=de;de|=1;var n=Qt.transition,r=xe;try{if(Qt.transition=null,xe=1,e)return e()}finally{xe=r,Qt.transition=n,de=t,!(de&6)&&zr()}}function zf(){Mt=Vi.current,Ie(Vi)}function ai(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,BC(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(yf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kl();break;case 3:co(),Ie(jt),Ie(lt),Ef();break;case 5:_f(r);break;case 4:co();break;case 13:Ie(Ae);break;case 19:Ie(Ae);break;case 10:wf(r.type._context);break;case 22:case 23:zf()}n=n.return}if(Xe=e,We=e=Tr(e.current,null),tt=Mt=t,Ye=0,Ns=null,Df=gc=gi=0,_t=os=null,ni!==null){for(t=0;t<ni.length;t++)if(n=ni[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ni=null}return e}function v1(e,t){do{var n=We;try{if(bf(),Wa.current=Rl,Pl){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pl=!1}if(mi=0,Ke=Ge=Ne=null,rs=!1,Ps=0,Nf.current=null,n===null||n.return===null){Ye=1,Ns=t,We=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=tt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=tg(s);if(p!==null){p.flags&=-257,ng(p,s,l,o,t),p.mode&1&&eg(o,u,t),t=p,c=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(c),t.updateQueue=y}else g.add(c);break e}else{if(!(t&1)){eg(o,u,t),Of();break e}c=Error(z(426))}}else if(Pe&&l.mode&1){var w=tg(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ng(w,s,l,o,t),xf(uo(c,l));break e}}o=c=uo(c,l),Ye!==4&&(Ye=2),os===null?os=[o]:os.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=n1(o,c,t);Km(o,m);break e;case 1:l=c;var x=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Er===null||!Er.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=r1(o,l,t);Km(o,k);break e}}o=o.return}while(o!==null)}k1(n)}catch(j){t=j,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function b1(){var e=Al.current;return Al.current=Rl,e===null?Rl:e}function Of(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Xe===null||!(gi&268435455)&&!(gc&268435455)||pr(Xe,tt)}function Ml(e,t){var n=de;de|=2;var r=b1();(Xe!==e||tt!==t)&&(Fn=null,ai(e,t));do try{d_();break}catch(i){v1(e,i)}while(!0);if(bf(),de=n,Al.current=r,We!==null)throw Error(z(261));return Xe=null,tt=0,Ye}function d_(){for(;We!==null;)w1(We)}function h_(){for(;We!==null&&!zS();)w1(We)}function w1(e){var t=C1(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?k1(e):We=t,Nf.current=null}function k1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=o_(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,We=null;return}}else if(n=i_(n,t,Mt),n!==null){We=n;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Ye===0&&(Ye=5)}function Xr(e,t,n){var r=xe,i=Qt.transition;try{Qt.transition=null,xe=1,f_(e,t,n,r)}finally{Qt.transition=i,xe=r}return null}function f_(e,t,n,r){do Ji();while(xr!==null);if(de&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(YS(e,o),e===Xe&&(We=Xe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sa||(Sa=!0,_1(gl,function(){return Ji(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Qt.transition,Qt.transition=null;var s=xe;xe=1;var l=de;de|=4,Nf.current=null,a_(e,n),g1(n,e),NC(Id),xl=!!Td,Id=Td=null,e.current=n,l_(n),OS(),de=l,xe=s,Qt.transition=o}else e.current=n;if(Sa&&(Sa=!1,xr=e,Dl=i),o=e.pendingLanes,o===0&&(Er=null),VS(n.stateNode),It(e,Fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nl)throw Nl=!1,e=qd,qd=null,e;return Dl&1&&e.tag!==0&&Ji(),o=e.pendingLanes,o&1?e===Xd?ss++:(ss=0,Xd=e):ss=0,zr(),null}function Ji(){if(xr!==null){var e=nv(Dl),t=Qt.transition,n=xe;try{if(Qt.transition=null,xe=16>e?16:e,xr===null)var r=!1;else{if(e=xr,xr=null,Dl=0,de&6)throw Error(z(331));var i=de;for(de|=4,G=e.current;G!==null;){var o=G,s=o.child;if(G.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(G=u;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:is(8,d,o)}var h=d.child;if(h!==null)h.return=d,G=h;else for(;G!==null;){d=G;var f=d.sibling,p=d.return;if(f1(d),d===u){G=null;break}if(f!==null){f.return=p,G=f;break}G=p}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}G=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,G=s;else e:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:is(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,G=m;break e}G=o.return}}var x=e.current;for(G=x;G!==null;){s=G;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,G=v;else e:for(s=x;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:mc(9,l)}}catch(j){Oe(l,l.return,j)}if(l===s){G=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,G=k;break e}G=l.return}}if(de=i,zr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(ac,e)}catch{}r=!0}return r}finally{xe=n,Qt.transition=t}}return!1}function mg(e,t,n){t=uo(n,t),t=n1(e,t,1),e=_r(e,t,1),t=yt(),e!==null&&(Ws(e,1,t),It(e,t))}function Oe(e,t,n){if(e.tag===3)mg(e,e,n);else for(;t!==null;){if(t.tag===3){mg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){e=uo(n,e),e=r1(t,e,1),t=_r(t,e,1),e=yt(),t!==null&&(Ws(t,1,e),It(t,e));break}}t=t.return}}function p_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(tt&n)===n&&(Ye===4||Ye===3&&(tt&130023424)===tt&&500>Fe()-Mf?ai(e,0):Df|=n),It(e,t)}function S1(e,t){t===0&&(e.mode&1?(t=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):t=1);var n=yt();e=Qn(e,t),e!==null&&(Ws(e,t,n),It(e,n))}function m_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),S1(e,n)}function g_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),S1(e,n)}var C1;C1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||jt.current)Et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Et=!1,r_(e,t,n);Et=!!(e.flags&131072)}else Et=!1,Pe&&t.flags&1048576&&Tv(t,_l,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ha(e,t),e=t.pendingProps;var i=so(t,lt.current);Qi(t,n),i=Tf(null,t,r,e,i,n);var o=If();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Tt(r)?(o=!0,Sl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sf(t),i.updater=pc,t.stateNode=i,i._reactInternals=t,Od(t,r,e,n),t=Vd(null,t,r,!0,o,n)):(t.tag=0,Pe&&o&&gf(t),pt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ha(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=x_(r),e=un(r,e),i){case 0:t=Bd(null,t,r,e,n);break e;case 1:t=og(null,t,r,e,n);break e;case 11:t=rg(null,t,r,e,n);break e;case 14:t=ig(null,t,r,un(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),Bd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),og(e,t,r,i,n);case 3:e:{if(a1(t),e===null)throw Error(z(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Dv(e,t),Tl(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=uo(Error(z(423)),t),t=sg(e,t,r,n,i);break e}else if(r!==i){i=uo(Error(z(424)),t),t=sg(e,t,r,n,i);break e}else for(Lt=Cr(t.stateNode.containerInfo.firstChild),Ot=t,Pe=!0,hn=null,n=Av(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),r===i){t=Jn(e,t,n);break e}pt(e,t,r,n)}t=t.child}return t;case 5:return Mv(t),e===null&&Md(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Pd(r,i)?s=null:o!==null&&Pd(r,o)&&(t.flags|=32),s1(e,t),pt(e,t,s,n),t.child;case 6:return e===null&&Md(t),null;case 13:return l1(e,t,n);case 4:return Cf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lo(t,null,r,n):pt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),rg(e,t,r,i,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,_e(El,r._currentValue),r._currentValue=s,o!==null)if(xn(o.value,s)){if(o.children===i.children&&!jt.current){t=Jn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Kn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ld(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(z(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ld(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}pt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Qi(t,n),i=Zt(i),r=r(i),t.flags|=1,pt(e,t,r,n),t.child;case 14:return r=t.type,i=un(r,t.pendingProps),i=un(r.type,i),ig(e,t,r,i,n);case 15:return i1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),Ha(e,t),t.tag=1,Tt(r)?(e=!0,Sl(t)):e=!1,Qi(t,n),t1(t,r,i),Od(t,r,i,n),Vd(null,t,r,!0,e,n);case 19:return c1(e,t,n);case 22:return o1(e,t,n)}throw Error(z(156,t.tag))};function _1(e,t){return Jx(e,t)}function y_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,r){return new y_(e,t,n,r)}function Ff(e){return e=e.prototype,!(!e||!e.isReactComponent)}function x_(e){if(typeof e=="function")return Ff(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rf)return 11;if(e===of)return 14}return 2}function Tr(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ka(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ff(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ri:return li(n.children,i,o,t);case nf:s=8,i|=8;break;case ld:return e=qt(12,n,t,i|2),e.elementType=ld,e.lanes=o,e;case cd:return e=qt(13,n,t,i),e.elementType=cd,e.lanes=o,e;case ud:return e=qt(19,n,t,i),e.elementType=ud,e.lanes=o,e;case Mx:return yc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nx:s=10;break e;case Dx:s=9;break e;case rf:s=11;break e;case of:s=14;break e;case ur:s=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=qt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function li(e,t,n,r){return e=qt(7,e,r,t),e.lanes=n,e}function yc(e,t,n,r){return e=qt(22,e,r,t),e.elementType=Mx,e.lanes=n,e.stateNode={isHidden:!1},e}function mu(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function gu(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function v_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xc(0),this.expirationTimes=Xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bf(e,t,n,r,i,o,s,l,c){return e=new v_(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=qt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sf(o),e}function b_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function E1(e){if(!e)return Ar;e=e._reactInternals;e:{if(bi(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Tt(n))return Ev(e,n,t)}return t}function j1(e,t,n,r,i,o,s,l,c){return e=Bf(n,r,!0,e,i,o,s,l,c),e.context=E1(null),n=e.current,r=yt(),i=jr(n),o=Kn(r,i),o.callback=t??null,_r(n,o,i),e.current.lanes=i,Ws(e,i,r),It(e,r),e}function xc(e,t,n,r){var i=t.current,o=yt(),s=jr(i);return n=E1(n),t.context===null?t.context=n:t.pendingContext=n,t=Kn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_r(i,t,s),e!==null&&(mn(e,i,s,o),Ua(e,i,s)),s}function Ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vf(e,t){gg(e,t),(e=e.alternate)&&gg(e,t)}function w_(){return null}var T1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uf(e){this._internalRoot=e}vc.prototype.render=Uf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));xc(e,t,null,null)};vc.prototype.unmount=Uf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yi(function(){xc(null,e,null,null)}),t[Xn]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var t=ov();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fr.length&&t!==0&&t<fr[n].priority;n++);fr.splice(n,0,e),n===0&&av(e)}};function Wf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yg(){}function k_(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ll(s);o.call(u)}}var s=j1(t,r,e,0,null,!1,!1,"",yg);return e._reactRootContainer=s,e[Xn]=s.current,_s(e.nodeType===8?e.parentNode:e),yi(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ll(c);l.call(u)}}var c=Bf(e,0,!1,null,null,!1,!1,"",yg);return e._reactRootContainer=c,e[Xn]=c.current,_s(e.nodeType===8?e.parentNode:e),yi(function(){xc(t,c,n,r)}),c}function wc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Ll(s);l.call(c)}}xc(t,s,e,i)}else s=k_(n,t,e,i,r);return Ll(s)}rv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ko(t.pendingLanes);n!==0&&(lf(t,n|1),It(t,Fe()),!(de&6)&&(ho=Fe()+500,zr()))}break;case 13:yi(function(){var r=Qn(e,1);if(r!==null){var i=yt();mn(r,e,1,i)}}),Vf(e,1)}};cf=function(e){if(e.tag===13){var t=Qn(e,134217728);if(t!==null){var n=yt();mn(t,e,134217728,n)}Vf(e,134217728)}};iv=function(e){if(e.tag===13){var t=jr(e),n=Qn(e,t);if(n!==null){var r=yt();mn(n,e,t,r)}Vf(e,t)}};ov=function(){return xe};sv=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};bd=function(e,t,n){switch(t){case"input":if(fd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=dc(r);if(!i)throw Error(z(90));zx(r),fd(r,i)}}}break;case"textarea":Fx(e,n);break;case"select":t=n.value,t!=null&&Yi(e,!!n.multiple,t,!1)}};Gx=Lf;Yx=yi;var S_={usingClientEntryPoint:!1,Events:[Hs,Mi,dc,$x,Hx,Lf]},Fo={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C_={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xx(e),e===null?null:e.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||w_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{ac=Ca.inject(C_),Tn=Ca}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S_;Vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(t))throw Error(z(200));return b_(e,t,null,n)};Vt.createRoot=function(e,t){if(!Wf(e))throw Error(z(299));var n=!1,r="",i=T1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bf(e,1,!1,null,null,n,!1,r,i),e[Xn]=t.current,_s(e.nodeType===8?e.parentNode:e),new Uf(t)};Vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Xx(t),e=e===null?null:e.stateNode,e};Vt.flushSync=function(e){return yi(e)};Vt.hydrate=function(e,t,n){if(!bc(t))throw Error(z(200));return wc(null,e,t,!0,n)};Vt.hydrateRoot=function(e,t,n){if(!Wf(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=T1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=j1(t,null,e,1,n??null,i,!1,o,s),e[Xn]=t.current,_s(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vc(t)};Vt.render=function(e,t,n){if(!bc(t))throw Error(z(200));return wc(null,e,t,!1,n)};Vt.unmountComponentAtNode=function(e){if(!bc(e))throw Error(z(40));return e._reactRootContainer?(yi(function(){wc(null,null,e,!1,function(){e._reactRootContainer=null,e[Xn]=null})}),!0):!1};Vt.unstable_batchedUpdates=Lf;Vt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bc(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return wc(e,t,n,!1,r)};Vt.version="18.3.1-next-f1338f8080-20240426";function I1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I1)}catch(e){console.error(e)}}I1(),Ix.exports=Vt;var __=Ix.exports,P1,xg=__;P1=xg.createRoot,xg.hydrateRoot;const E_="modulepreload",j_=function(e){return"/"+e},vg={},wi=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=j_(c),c in vg)return;vg[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":E_,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return i.then(s=>{for(const l of s||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},tn="https://cloudvault.co.in/api/v1",Ht={name:"CloudVault",logo:"CV",logoImage:"/cloudvault-logo.svg"};async function T_(){var n;const e=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");if(!e)return null;const t=localStorage.getItem("cv_refreshToken")?localStorage:sessionStorage;try{const r=await fetch(`${tn}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:e})});if(!r.ok)return null;const i=await r.json(),o=((n=i.data)==null?void 0:n.accessToken)||i.accessToken;return o?(t.setItem("cv_token",o),window.dispatchEvent(new CustomEvent("cv-token-refreshed",{detail:{token:o}})),o):null}catch{return null}}function $f(e){return new Error(`Cannot reach the server at ${tn}${e}. Make sure the backend is running (npm start in project root).`)}const st=async(e,t={},n,r=!1)=>{const i={...t.headers||{}};n&&(i.Authorization=`Bearer ${n}`),t.body instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json");let o;try{o=await fetch(`${tn}${e}`,{...t,headers:i})}catch{throw $f(e)}if(o.status===401&&n&&!r){const c=await T_();if(c)return st(e,t,c,!0);throw new Error("Session expired. Please log in again.")}if(!o.ok){const c=await o.json().catch(()=>({error:"Unknown error"})),u=c.message||c.error||"",d=u.toLowerCase().includes("token")?"Something went wrong. Please try again.":u||`Request failed (${o.status})`;throw new Error(d)}if(!(o.headers.get("content-type")||"").includes("application/json"))return o;const l=await o.json();return l.success?l.data:l},Hr=(e,t)=>Array.isArray(e)?e:(e==null?void 0:e[t])||[];async function kc(e,t,{onProgress:n,disposition:r="download"}={}){const i=r==="preview"?`/files/${e}/preview`:`/files/${e}/download`;let o;try{o=await fetch(`${tn}${i}`,{headers:{Authorization:`Bearer ${t}`}})}catch{throw $f(i)}if(!o.ok){const l=await o.json().catch(()=>({error:"Download failed"}));throw new Error(l.error||l.message||"Download failed")}const s=Number(o.headers.get("content-length"))||0;return I_(o,s,n)}async function I_(e,t,n){if(!e.body||!t){const s=await e.blob();return n==null||n(100),s}const r=e.body.getReader(),i=[];let o=0;for(;;){const{done:s,value:l}=await r.read();if(s)break;i.push(l),o+=l.length,n&&t>0&&n(Math.min(99,Math.round(o/t*100)))}return n==null||n(100),new Blob(i,{type:e.headers.get("content-type")||"application/octet-stream"})}function R1(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function A1(e,t,n,r){return new Promise((i,o)=>{const s=new XMLHttpRequest;s.open("POST",`${tn}${e}`),s.setRequestHeader("Authorization",`Bearer ${n}`),s.upload.onprogress=l=>{l.lengthComputable&&r&&r(Math.round(l.loaded/l.total*100))},s.onload=()=>{try{const l=JSON.parse(s.responseText);s.status>=200&&s.status<300?i(l.success?l.data:l):o(new Error(l.message||l.error||"Upload failed"))}catch{s.status>=200&&s.status<300?i({}):o(new Error("Upload failed"))}},s.onerror=()=>o($f(e)),s.send(t)})}const qe=e=>{if(e===0)return"0 B";const t=1024,n=["B","KB","MB","GB"],r=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**r).toFixed(1)} ${n[r]}`},wo=e=>{const t=Math.floor((Date.now()-new Date(e))/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`},Ys=(e="")=>e.startsWith("image/")?"🖼️":e==="application/pdf"?"📄":e.startsWith("video/")?"🎬":e.startsWith("audio/")?"🎵":e.includes("zip")||e.includes("archive")?"🗜️":e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")?"📝":"📁",P_=["image/","video/","audio/"],R_=new Set(["application/pdf","text/plain","text/markdown","application/json"]),Hf=(e="")=>{const t=(e||"").toLowerCase();return R_.has(t)?!0:P_.some(n=>t.startsWith(n))},A_=(e="")=>{const t=(e||"").toLowerCase();return t.startsWith("image/")?"image":t==="application/pdf"?"pdf":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("text/")||t==="application/json"?"text":null},bg=[{key:"all",label:"All",icon:"📋",test:()=>!0},{key:"images",label:"Images",icon:"🖼️",test:e=>e.startsWith("image/")},{key:"documents",label:"Docs",icon:"📄",test:e=>e.includes("pdf")||e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")},{key:"videos",label:"Videos",icon:"🎬",test:e=>e.startsWith("video/")},{key:"audio",label:"Audio",icon:"🎵",test:e=>e.startsWith("audio/")},{key:"archives",label:"Archives",icon:"🗜️",test:e=>e.includes("zip")||e.includes("archive")||e.includes("tar")||e.includes("rar")}],Zi=`
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

  html { font-size: 14px; zoom: 0.9; }

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
    border-color: var(--border-hover);
    color: var(--text);
    background: var(--bg-card);
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
    background: var(--bg-card);
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
    background: var(--bg-card);
    color: var(--text);
  }

  .nav-item.active {
    background: var(--bg-card);
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
    background: var(--bg-card);
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
    background: var(--bg-card);
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
    background: var(--bg-card);
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
    background: var(--bg-card);
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
    background: var(--bg-card);
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
    background: var(--bg-card);
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
    background: var(--bg-card);
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
    background: var(--bg-card);
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

/* New Sidebar Item Styles */
.nav-item-new {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 8px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: #d4d4d8;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}
.nav-item-new:hover {
  background: var(--bg-card);
  color: #fff;
}
.nav-item-new.active {
  background: rgba(59,130,246,0.15);
  color: #60a5fa;
  font-weight: 600;
}
`;/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=e=>{const t=D_(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},L_=b.createContext({}),z_=()=>b.useContext(L_),O_=b.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...l},c)=>{const{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:h=!1,color:f="currentColor",className:p=""}=z_()??{},g=r??h?Number(n??d)*24/Number(t??u):n??d;return b.createElement("svg",{ref:c,...yu,width:t??u??yu.width,height:t??u??yu.height,stroke:e??f,strokeWidth:g,className:N1("lucide",p,i),...!o&&!M_(l)&&{"aria-hidden":"true"},...l},[...s.map(([y,w])=>b.createElement(y,w)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(O_,{ref:o,iconNode:t,className:N1(`lucide-${N_(wg(e))}`,`lucide-${e}`,r),...i}));return n.displayName=wg(e),n};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],B_=Ce("activity",F_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],U_=Ce("archive",V_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],$_=Ce("box",W_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],G_=Ce("check",H_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],K_=Ce("chevron-right",Y_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Gr=Ce("circle-check",q_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Q_=Ce("circle-question-mark",X_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Z_=Ce("copy",J_);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],tE=Ce("credit-card",eE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],rE=Ce("database",nE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],oE=Ce("file-text",iE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],aE=Ce("film",sE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],kg=Ce("folder",lE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],uE=Ce("funnel",cE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]],Zd=Ce("hard-drive",dE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],fE=Ce("image",hE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],mE=Ce("layout-grid",pE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],yE=Ce("log-out",gE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],vE=Ce("mail",xE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],wE=Ce("send",bE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],D1=Ce("settings",kE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],CE=Ce("shield-check",SE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],EE=Ce("shield",_E);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Xo=Ce("sparkles",jE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],M1=Ce("trash-2",TE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],L1=Ce("user",IE);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gf=Ce("x",PE);function RE(){return a.jsx("div",{className:"lr-section",children:a.jsxs("div",{className:"lr-container",style:{maxWidth:"800px",margin:"0 auto",textAlign:"center",paddingTop:"100px"},children:[a.jsx("h1",{style:{fontSize:"48px",marginBottom:"24px"},children:"About CloudVault"}),a.jsx("p",{style:{fontSize:"20px",color:"var(--text-secondary)",marginBottom:"64px"},children:"Cloud storage without the complexity."}),a.jsxs("div",{style:{textAlign:"left",marginBottom:"64px"},children:[a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"24px",color:"var(--text)"},children:"CloudVault is built with a simple idea: storing and managing your files online should be easy, accessible, and secure."}),a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"24px",color:"var(--text)"},children:"We are building CloudVault as a modern cloud-storage platform focused on providing users with a clean experience for uploading, organizing, accessing, and managing their digital files."})]}),a.jsx("h2",{style:{fontSize:"32px",marginBottom:"24px",textAlign:"left"},children:"Our Mission"}),a.jsx("p",{style:{fontSize:"20px",color:"var(--text-secondary)",marginBottom:"40px",textAlign:"left"},children:"Make secure cloud storage simple for everyone."}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px",textAlign:"left",marginBottom:"64px"},children:[a.jsxs("div",{style:{background:"var(--surface)",padding:"24px",borderRadius:"12px",border:"1px solid var(--border)"},children:[a.jsx("h3",{style:{color:"var(--accent)",marginBottom:"12px"},children:"Simplicity"}),a.jsx("p",{style:{color:"var(--text-secondary)"},children:"A clean interface without unnecessary complexity."})]}),a.jsxs("div",{style:{background:"var(--surface)",padding:"24px",borderRadius:"12px",border:"1px solid var(--border)"},children:[a.jsx("h3",{style:{color:"var(--accent)",marginBottom:"12px"},children:"Security"}),a.jsx("p",{style:{color:"var(--text-secondary)"},children:"Protecting accounts and stored files through modern security practices."})]}),a.jsxs("div",{style:{background:"var(--surface)",padding:"24px",borderRadius:"12px",border:"1px solid var(--border)"},children:[a.jsx("h3",{style:{color:"var(--accent)",marginBottom:"12px"},children:"Accessibility"}),a.jsx("p",{style:{color:"var(--text-secondary)"},children:"Making files available whenever and wherever users need them."})]}),a.jsxs("div",{style:{background:"var(--surface)",padding:"24px",borderRadius:"12px",border:"1px solid var(--border)"},children:[a.jsx("h3",{style:{color:"var(--accent)",marginBottom:"12px"},children:"Reliability"}),a.jsx("p",{style:{color:"var(--text-secondary)"},children:"Building dependable infrastructure for everyday file storage."})]})]})]})})}function AE(){return a.jsx("div",{className:"lr-section",children:a.jsxs("div",{className:"lr-container",style:{maxWidth:"800px",margin:"0 auto",textAlign:"center",paddingTop:"100px"},children:[a.jsx("h1",{style:{fontSize:"48px",marginBottom:"24px"},children:"Contact CloudVault"}),a.jsx("p",{style:{fontSize:"20px",color:"var(--text-secondary)",marginBottom:"64px"},children:"Have a question, need help, or want to get in touch with the CloudVault team?"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px",textAlign:"left",marginBottom:"64px"},children:[a.jsxs("div",{children:[a.jsx("h3",{style:{color:"var(--text)",marginBottom:"16px"},children:"General Enquiries"}),a.jsxs("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:["Email: ",a.jsx("a",{href:"mailto:contact@cloudvault.co.in",style:{color:"var(--accent)"},children:"contact@cloudvault.co.in"})]}),a.jsx("h3",{style:{color:"var(--text)",marginBottom:"16px"},children:"Support"}),a.jsxs("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:["Email: ",a.jsx("a",{href:"mailto:support@cloudvault.co.in",style:{color:"var(--accent)"},children:"support@cloudvault.co.in"})]}),a.jsx("h3",{style:{color:"var(--text)",marginBottom:"16px"},children:"Business Enquiries"}),a.jsx("p",{style:{color:"var(--text-secondary)"},children:"For partnerships, business opportunities, or enterprise enquiries:"}),a.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:a.jsx("a",{href:"mailto:business@cloudvault.co.in",style:{color:"var(--accent)"},children:"business@cloudvault.co.in"})})]}),a.jsx("div",{style:{background:"var(--surface)",padding:"32px",borderRadius:"12px",border:"1px solid var(--border)"},children:a.jsxs("form",{onSubmit:e=>e.preventDefault(),style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:"Name"}),a.jsx("input",{type:"text",placeholder:"Enter your name",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid var(--border)",background:"transparent",color:"var(--text)"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:"Email"}),a.jsx("input",{type:"email",placeholder:"Enter your email",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid var(--border)",background:"transparent",color:"var(--text)"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:"Subject"}),a.jsx("input",{type:"text",placeholder:"What can we help you with?",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid var(--border)",background:"transparent",color:"var(--text)"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:"Message"}),a.jsx("textarea",{placeholder:"Write your message...",rows:4,style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid var(--border)",background:"transparent",color:"var(--text)",resize:"vertical"}})]}),a.jsx("button",{type:"submit",className:"lr-btn lr-btn--mega-red",style:{marginTop:"8px",padding:"12px 24px",borderRadius:"8px",fontWeight:"600"},children:"Send Message"}),a.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)",textAlign:"center",marginTop:"16px"},children:"We usually respond as soon as possible during our support hours."})]})})]})]})})}function NE(){return a.jsx("div",{className:"lr-section",children:a.jsxs("div",{className:"lr-container",style:{maxWidth:"800px",margin:"0 auto",textAlign:"left",paddingTop:"100px",paddingBottom:"100px"},children:[a.jsx("h1",{style:{fontSize:"48px",marginBottom:"16px"},children:"Privacy Policy"}),a.jsx("p",{style:{fontSize:"16px",color:"var(--text-secondary)",marginBottom:"48px"},children:"Last Updated: September 2026"}),a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text)"},children:"CloudVault respects your privacy and is committed to protecting the information associated with your account and use of our services."}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"1. Information We Collect"}),a.jsxs("ul",{style:{fontSize:"16px",lineHeight:"1.8",color:"var(--text-secondary)",marginBottom:"32px",paddingLeft:"24px"},children:[a.jsx("li",{children:"Account information (name, email)"}),a.jsx("li",{children:"Authentication information (hashed passwords)"}),a.jsx("li",{children:"Files uploaded by users (stored securely on AWS S3)"}),a.jsx("li",{children:"Technical and Usage information (logs for security purposes)"})]}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"2. How We Use Information"}),a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"16px",color:"var(--text-secondary)"},children:"Information may be used to:"}),a.jsxs("ul",{style:{fontSize:"16px",lineHeight:"1.8",color:"var(--text-secondary)",marginBottom:"32px",paddingLeft:"24px"},children:[a.jsx("li",{children:"Provide CloudVault services and core storage functionality"}),a.jsx("li",{children:"Authenticate users and maintain account security"}),a.jsx("li",{children:"Improve the platform and provide support"}),a.jsx("li",{children:"Detect abuse or unauthorized activity"})]}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"3. File Privacy"}),a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"Your uploaded files are strictly associated with your CloudVault account and are handled exclusively as part of providing the storage service. You retain full control over sharing permissions."}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"4. Data Security"}),a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"We implement modern security practices including AES-256 encryption at rest, TLS 1.3 encryption in transit, and short-lived signed URLs to ensure your files remain secure and inaccessible to unauthorized parties."}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"5. Data Retention"}),a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"When you delete a file, it is moved to your Trash. Once emptied from Trash, or upon account deletion, the file is permanently and irrecoverably removed from our storage systems."}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"6. Contact"}),a.jsxs("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:["If you have any questions about this Privacy Policy, please contact us at ",a.jsx("a",{href:"mailto:privacy@cloudvault.co.in",style:{color:"var(--accent)"},children:"privacy@cloudvault.co.in"}),"."]})]})})}function DE(){return a.jsx("div",{className:"lr-section",children:a.jsxs("div",{className:"lr-container",style:{maxWidth:"800px",margin:"0 auto",textAlign:"left",paddingTop:"100px",paddingBottom:"100px"},children:[a.jsx("h1",{style:{fontSize:"48px",marginBottom:"16px"},children:"Terms of Service"}),a.jsx("p",{style:{fontSize:"16px",color:"var(--text-secondary)",marginBottom:"48px"},children:"Last Updated: September 2026"}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"1. Acceptance of Terms"}),a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"By accessing or using CloudVault, you agree to these Terms of Service. If you do not agree to these terms, please do not use our services."}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"2. Your Account"}),a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"Users are responsible for maintaining the security of their account credentials. You must notify us immediately of any breach of security or unauthorized use of your account."}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"3. Acceptable Use"}),a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"16px",color:"var(--text-secondary)"},children:"Users must not use CloudVault to:"}),a.jsxs("ul",{style:{fontSize:"16px",lineHeight:"1.8",color:"var(--text-secondary)",marginBottom:"32px",paddingLeft:"24px"},children:[a.jsx("li",{children:"Upload or share illegal content"}),a.jsx("li",{children:"Distribute malware, viruses, or destructive code"}),a.jsx("li",{children:"Attempt unauthorized access to other accounts or infrastructure"}),a.jsx("li",{children:"Abuse, disrupt, or excessively burden the service"}),a.jsx("li",{children:"Violate applicable laws or infringe on intellectual-property rights"})]}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"4. User Content"}),a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"Users retain full ownership and responsibility for the files and content they upload to CloudVault. We do not claim any ownership rights to your files."}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"5. Account Suspension"}),a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"CloudVault may restrict, suspend, or terminate accounts where required to protect the service, protect other users, or comply with applicable law, particularly in cases of Acceptable Use violations."}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"6. Service Availability"}),a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:"While we strive for high uptime, service availability may occasionally be affected by scheduled maintenance, infrastructure problems, or circumstances outside our control. We do not guarantee uninterrupted service."}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"7. Contact"}),a.jsxs("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"32px",color:"var(--text-secondary)"},children:["If you have any questions regarding these Terms, please contact us at ",a.jsx("a",{href:"mailto:legal@cloudvault.co.in",style:{color:"var(--accent)"},children:"legal@cloudvault.co.in"}),"."]})]})})}function ME(){return a.jsx("div",{className:"lr-section",children:a.jsxs("div",{className:"lr-container",style:{maxWidth:"800px",margin:"0 auto",textAlign:"left",paddingTop:"100px",paddingBottom:"100px"},children:[a.jsx("h1",{style:{fontSize:"48px",marginBottom:"16px"},children:"CloudVault Security"}),a.jsx("p",{style:{fontSize:"20px",color:"var(--text-secondary)",marginBottom:"48px"},children:"Security is an important part of how we build CloudVault."}),a.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",marginBottom:"48px",color:"var(--text)"},children:"We believe in transparency regarding how we secure your data. Below is an overview of the security architecture and mechanisms we have implemented to keep your digital workspace safe."}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"Authentication & Access Control"}),a.jsxs("ul",{style:{fontSize:"16px",lineHeight:"1.8",color:"var(--text-secondary)",marginBottom:"32px",paddingLeft:"24px"},children:[a.jsxs("li",{children:[a.jsx("strong",{children:"Strong Password Hashing:"})," Passwords are never stored in plaintext. We use bcrypt hashing with dynamic salts to secure credentials."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Secure Session Tokens:"})," Authentication relies on securely signed JSON Web Tokens (JWT) that expire and require active validation."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Rate Limiting:"})," Endpoints are protected by strict rate limiting to prevent brute-force login attempts and DDoS attacks."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"File-level Access Controls:"})," Only the owner of a file or users explicitly granted permission via sharing links can access a file."]})]}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"Cloud Storage Architecture"}),a.jsxs("ul",{style:{fontSize:"16px",lineHeight:"1.8",color:"var(--text-secondary)",marginBottom:"32px",paddingLeft:"24px"},children:[a.jsxs("li",{children:[a.jsx("strong",{children:"Data Encryption in Transit:"})," All communication between your browser and CloudVault servers occurs over HTTPS using TLS 1.3, ensuring your files cannot be intercepted while uploading or downloading."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Data Encryption at Rest:"})," Files stored on our backend infrastructure are encrypted at rest using industry-standard AES-256 encryption."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Pre-Signed URLs:"})," File downloads and previews are served via short-lived, pre-signed cryptographic URLs that expire automatically, preventing unauthorized hotlinking or unauthorized sharing."]})]}),a.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px",color:"var(--text)"},children:"Infrastructure Security"}),a.jsxs("ul",{style:{fontSize:"16px",lineHeight:"1.8",color:"var(--text-secondary)",marginBottom:"32px",paddingLeft:"24px"},children:[a.jsxs("li",{children:[a.jsx("strong",{children:"Isolated Environments:"})," Our production systems are isolated and require strict cryptographic key access."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Automated Backups:"})," Database and infrastructure states are backed up securely to prevent data loss in the event of hardware failure."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Content Security Policy (CSP):"})," We utilize modern browser security headers (Helmet) to mitigate XSS (Cross-Site Scripting) and other injection attacks."]})]}),a.jsxs("div",{style:{padding:"24px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",marginTop:"48px"},children:[a.jsx("h3",{style:{fontSize:"20px",marginBottom:"12px"},children:"Vulnerability Disclosure"}),a.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:"14px",lineHeight:"1.6"},children:["If you are a security researcher and believe you have found a vulnerability in CloudVault, please contact us immediately at ",a.jsx("a",{href:"mailto:security@cloudvault.co.in",style:{color:"var(--accent)"},children:"security@cloudvault.co.in"}),"."]})]})]})})}function LE(){const e=[{name:"Website",status:"Operational"},{name:"Authentication",status:"Operational"},{name:"File Uploads",status:"Operational"},{name:"File Downloads",status:"Operational"},{name:"File Preview",status:"Operational"},{name:"API Services",status:"Operational"}];return a.jsx("div",{className:"lr-section",children:a.jsxs("div",{className:"lr-container",style:{maxWidth:"800px",margin:"0 auto",textAlign:"left",paddingTop:"100px",paddingBottom:"100px"},children:[a.jsx("h1",{style:{fontSize:"48px",marginBottom:"16px"},children:"System Status"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"24px",background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.2)",borderRadius:"12px",marginBottom:"48px"},children:[a.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"#10b981",boxShadow:"0 0 10px #10b981"}}),a.jsx("span",{style:{color:"#10b981",fontWeight:"600",fontSize:"18px"},children:"All Systems Operational"})]}),a.jsxs("div",{style:{border:"1px solid var(--border)",borderRadius:"12px",overflow:"hidden",background:"var(--surface)"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"16px 24px",background:"var(--bg-card)",borderBottom:"1px solid var(--border)"},children:[a.jsx("span",{style:{fontWeight:"600",color:"var(--text-secondary)"},children:"Service"}),a.jsx("span",{style:{fontWeight:"600",color:"var(--text-secondary)"},children:"Status"})]}),e.map((t,n)=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"16px 24px",borderBottom:n!==e.length-1?"1px solid var(--border)":"none"},children:[a.jsx("span",{style:{color:"var(--text)"},children:t.name}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#10b981"}}),a.jsx("span",{style:{color:"#10b981",fontSize:"14px"},children:t.status})]})]},n))]})]})})}const zE=[{title:"Secure Cloud Storage",desc:"Store your documents, images, videos, and other important files securely in the cloud.",icon:a.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:a.jsx("path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"})})},{title:"Organize Your Files",desc:"Create folders, rename files, move content, and keep your digital workspace organized.",icon:a.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:a.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})})},{title:"Fast Uploads",desc:"Upload files through a simple drag-and-drop interface with an experience designed for speed and reliability.",icon:a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[a.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.jsx("polyline",{points:"17 8 12 3 7 8"}),a.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]})},{title:"File Preview",desc:"Preview supported images, documents, and PDFs without downloading them first.",icon:a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[a.jsx("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}),a.jsx("circle",{cx:"12",cy:"12",r:"3"})]})},{title:"Easy File Sharing",desc:"Share files when you need to collaborate or send documents to others.",icon:a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[a.jsx("circle",{cx:"18",cy:"5",r:"3"}),a.jsx("circle",{cx:"6",cy:"12",r:"3"}),a.jsx("circle",{cx:"18",cy:"19",r:"3"}),a.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),a.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})},{title:"Secure Authentication",desc:"Protect your account with secure authentication and account recovery features.",icon:a.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:a.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})},{title:"Access Anywhere",desc:"Access your files from your desktop, laptop, tablet, or mobile browser.",icon:a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[a.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),a.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]})},{title:"File Management Tools",desc:"Download, delete, rename, organize, and manage your files from one place.",icon:a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[a.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}),a.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}),a.jsx("line",{x1:"6",y1:"6",x2:"6.01",y2:"6"}),a.jsx("line",{x1:"6",y1:"18",x2:"6.01",y2:"18"})]})}],OE=[{num:"01",title:"Never run out of space",desc:"Start with 5 GB free. Scale to terabytes when your needs grow."},{num:"02",title:"Share with anyone",desc:"Read-only, full access, password-protected, or expiring links — your choice."},{num:"03",title:"Total control",desc:"Your data, your rules. Manage every permission at every level."},{num:"04",title:"Works everywhere",desc:"Access from desktop, tablet, or mobile. No app install required."}],FE=[{q:"What is CloudVault?",a:"CloudVault is a cloud storage platform that allows users to securely store, organize, access, and manage their files online."},{q:"Is CloudVault free?",a:"CloudVault currently provides access to its core cloud storage functionality. Premium storage and additional plans may be introduced in the future."},{q:"What types of files can I upload?",a:"You can upload common file types including documents, images, PDFs, videos, and other supported files."},{q:"Can I access my files from different devices?",a:"Yes. CloudVault is designed to allow you to access your files through a web browser from supported devices."},{q:"Can I preview files without downloading them?",a:"Yes. Supported file types can be previewed directly within CloudVault."},{q:"Can I download my files?",a:"Yes. Files stored in your CloudVault account can be downloaded when needed."},{q:"How do I recover my account?",a:"Use the account recovery option on the login page and follow the verification steps provided by CloudVault."},{q:"Is my data secure?",a:"CloudVault uses authentication and cloud-storage security mechanisms to help protect your account and files."},{q:"Can I delete my files?",a:"Yes. You can manage your stored files and delete files that you no longer need."},{q:"Who can use CloudVault?",a:"CloudVault is designed for individuals and teams looking for a simple way to store and manage files online."}];function BE(){b.useEffect(()=>{const e=document.querySelectorAll(".lr-reveal");if(!e.length)return;const t=new IntersectionObserver(n=>n.forEach(r=>{r.isIntersecting&&(r.target.classList.add("lr-visible"),t.unobserve(r.target))}),{threshold:.08,rootMargin:"0px 0px -60px 0px"});return e.forEach(n=>t.observe(n)),()=>t.disconnect()},[])}function Sg(e,t=2e3){const[n,r]=b.useState(0),i=b.useRef(null),o=b.useRef(!1);return b.useEffect(()=>{if(!i.current)return;const s=new IntersectionObserver(([l])=>{if(l.isIntersecting&&!o.current){o.current=!0;const c=performance.now(),u=d=>{const h=Math.min((d-c)/t,1),f=1-Math.pow(1-h,3);r(Math.floor(f*e)),h<1&&requestAnimationFrame(u)};requestAnimationFrame(u)}},{threshold:.3});return s.observe(i.current),()=>s.disconnect()},[e,t]),[n,i]}function VE({view:e="landing",onNavigate:t,onGetStarted:n,onLogin:r,onSignUp:i}){const[o,s]=b.useState({filesStored:0,activeUsers:0,storageUsed:0,storageCapacity:0xa0000000000}),[l,c]=b.useState(!1),[u,d]=b.useState(null),h=b.useRef(null);BE(),b.useEffect(()=>{fetch(`${tn}/public/stats`).then(m=>m.json()).then(m=>{m.success&&m.data&&s(m.data)}).catch(()=>{})},[]),b.useEffect(()=>{const m=()=>c(window.scrollY>30);return window.addEventListener("scroll",m,{passive:!0}),()=>window.removeEventListener("scroll",m)},[]);const[f,p]=Sg(o.filesStored||1240,2200),[g,y]=Sg(o.activeUsers||380,2e3),w=b.useRef(null);return b.useEffect(()=>{const m=w.current;if(!m)return;const x=m.getContext("2d");let v,k=[];const j=80,C=()=>{m.width=window.innerWidth,m.height=document.documentElement.scrollHeight};C(),window.addEventListener("resize",C);for(let E=0;E<j;E++)k.push({x:Math.random()*m.width,y:Math.random()*m.height,r:Math.random()*1.5+.3,dx:(Math.random()-.5)*.15,dy:(Math.random()-.5)*.12,opacity:Math.random()*.5+.1,pulse:Math.random()*Math.PI*2,pulseSpeed:Math.random()*.008+.003});const T=()=>{x.clearRect(0,0,m.width,m.height),k.forEach(E=>{E.x+=E.dx,E.y+=E.dy,E.pulse+=E.pulseSpeed;const A=E.opacity*(.6+.4*Math.sin(E.pulse));E.x<0&&(E.x=m.width),E.x>m.width&&(E.x=0),E.y<0&&(E.y=m.height),E.y>m.height&&(E.y=0),x.beginPath(),x.arc(E.x,E.y,E.r,0,Math.PI*2),x.fillStyle=`rgba(255,255,255,${A})`,x.fill()});for(let E=0;E<k.length;E++)for(let A=E+1;A<k.length;A++){const P=k[E].x-k[A].x,N=k[E].y-k[A].y,D=Math.sqrt(P*P+N*N);D<120&&(x.beginPath(),x.moveTo(k[E].x,k[E].y),x.lineTo(k[A].x,k[A].y),x.strokeStyle=`rgba(255,255,255,${.03*(1-D/120)})`,x.lineWidth=.5,x.stroke())}v=requestAnimationFrame(T)};return T(),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",C)}},[]),a.jsxs("div",{className:"lr-shell",children:[a.jsx("style",{children:UE}),a.jsxs("div",{className:"lr-bg","aria-hidden":"true",children:[a.jsx("canvas",{ref:w,className:"lr-bg__particles"}),a.jsx("div",{className:"lr-bg__aurora lr-bg__aurora--1"}),a.jsx("div",{className:"lr-bg__aurora lr-bg__aurora--2"}),a.jsx("div",{className:"lr-bg__aurora lr-bg__aurora--3"}),a.jsx("div",{className:"lr-bg__grid"})]}),a.jsx("header",{className:`lr-nav${l?" lr-nav--scrolled":""}`,ref:h,children:a.jsxs("div",{className:"lr-nav__inner",children:[a.jsxs("button",{type:"button",className:"lr-nav__brand",onClick:n,"aria-label":"CloudVault home",children:[a.jsx("span",{className:"lr-nav__logo",children:a.jsx("img",{src:Ht.logoImage,alt:""})}),a.jsx("span",{className:"lr-nav__wordmark",children:Ht.name})]}),a.jsxs("nav",{className:"lr-nav__links",children:[a.jsx("a",{href:"#features",onClick:m=>{e!=="landing"&&(m.preventDefault(),t("landing"))},children:"Features"}),a.jsx("a",{href:"#pricing",onClick:m=>{e!=="landing"&&(m.preventDefault(),t("landing"))},children:"Pricing"}),a.jsx("a",{href:"#faq",onClick:m=>{e!=="landing"&&(m.preventDefault(),t("landing"))},children:"FAQ"}),a.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("contact")},children:"Help & Support"})]}),a.jsxs("div",{className:"lr-nav__actions",children:[a.jsx("button",{type:"button",className:"lr-btn lr-btn--ghost",onClick:r,children:"Log in"}),a.jsx("button",{type:"button",className:"lr-btn lr-btn--primary",onClick:i,children:"Get started free"})]})]})}),a.jsxs("main",{children:[e==="landing"&&a.jsxs("div",{className:"lr-landing-content",children:[a.jsxs("section",{className:"lr-hero",children:[a.jsxs("div",{className:"lr-hero__ambient","aria-hidden":"true",children:[a.jsx("div",{className:"lr-hero__orb lr-hero__orb--1"}),a.jsx("div",{className:"lr-hero__orb lr-hero__orb--2"})]}),a.jsxs("div",{className:"lr-hero__content",children:[a.jsxs("div",{className:"lr-hero__badge-green lr-reveal",children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M20 6 9 17l-5-5"})}),"Trusted by 500k+ users"]}),a.jsxs("h1",{className:"lr-hero__title lr-reveal",children:["Powerful Cloud Storage,",a.jsx("br",{}),"Built for Simplicity."]}),a.jsx("p",{className:"lr-hero__sub lr-reveal",style:{marginBottom:"32px"},children:"CloudVault gives you a secure and simple way to store, manage, preview, and share your files from anywhere."}),a.jsxs("div",{className:"lr-hero__ctas-centered lr-reveal",style:{flexDirection:"row",justifyContent:"center"},children:[a.jsx("button",{className:"lr-btn lr-btn--mega-red",onClick:n,children:"Get Started"}),a.jsx("a",{href:"#features",className:"lr-btn lr-btn--outline",style:{padding:"14px 32px",fontSize:"16px",borderRadius:"99px"},children:"Explore CloudVault"})]})]}),a.jsx("div",{className:"lr-hero__preview lr-reveal",children:a.jsxs("div",{className:"lr-preview",children:[a.jsx("div",{className:"lr-preview__glow","aria-hidden":"true"}),a.jsxs("div",{className:"lr-preview__body",children:[a.jsxs("aside",{className:"lr-preview__side-icons",children:[a.jsx("span",{className:"side-icon active",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"var(--accent)",stroke:"none",children:a.jsx("path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"})})}),a.jsx("span",{className:"side-icon",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})})}),a.jsx("span",{className:"side-icon",children:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),a.jsx("line",{x1:"9",x2:"15",y1:"3",y2:"3"}),a.jsx("line",{x1:"9",x2:"15",y1:"21",y2:"21"}),a.jsx("path",{d:"M9 3v18"}),a.jsx("path",{d:"M15 3v18"})]})}),a.jsx("span",{className:"side-icon",children:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"3"}),a.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),a.jsxs("div",{className:"lr-preview__main",children:[a.jsxs("div",{className:"lr-preview__header",children:[a.jsxs("div",{className:"lr-preview__search",children:[a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("path",{d:"m21 21-4.3-4.3"})]}),"Search"]}),a.jsxs("button",{className:"lr-preview__upload-btn",children:[a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.jsx("polyline",{points:"17 8 12 3 7 8"}),a.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),"Upload"]})]}),a.jsxs("div",{className:"lr-preview__grid",children:[a.jsxs("div",{className:"lr-preview__card folder",style:{animationDelay:"0.6s"},children:[a.jsx("div",{className:"lr-folder-icon"}),a.jsxs("div",{className:"lr-card-info",children:[a.jsx("h5",{children:"Project Alpha"}),a.jsx("span",{children:"Folder · 1.2 GB"})]})]}),a.jsx("div",{className:"lr-preview__card folder small-folder",style:{animationDelay:"0.7s"},children:a.jsx("div",{className:"lr-folder-icon"})}),a.jsx("div",{className:"lr-preview__card folder small-folder",style:{animationDelay:"0.8s"},children:a.jsx("div",{className:"lr-folder-icon"})}),a.jsxs("div",{className:"lr-preview__card file glass-file",style:{animationDelay:"0.9s"},children:[a.jsx("div",{className:"lr-file-icon excel",children:a.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),a.jsx("path",{d:"M3 9h18"}),a.jsx("path",{d:"M9 21V9"})]})}),a.jsxs("div",{className:"lr-card-info",children:[a.jsx("h5",{children:"Q3 Report.xlsx"}),a.jsx("span",{children:"Spreadsheet · 2.4 MB"})]})]})]}),a.jsxs("div",{className:"lr-preview__pagination",children:[a.jsx("span",{className:"dot active"}),a.jsx("span",{className:"dot"}),a.jsx("span",{className:"dot"})]})]})]})]})}),a.jsxs("div",{className:"lr-hero__ctas-centered lr-reveal",children:[a.jsx("button",{type:"button",className:"lr-btn lr-btn--mega-red",onClick:n,children:"Start Free – 5GB Included"}),a.jsx("a",{href:"#login",onClick:m=>{m.preventDefault(),r()},className:"lr-hero__login-link",children:"Log In"})]})]}),a.jsxs("section",{className:"lr-trust lr-reveal",children:[a.jsx("p",{children:"Secured with industry-leading technology"}),a.jsx("div",{className:"lr-trust__logos",children:["AES-256","TLS 1.3","SOC 2","GDPR"].map(m=>a.jsx("span",{className:"lr-trust__badge",children:m},m))})]}),a.jsx("section",{id:"features",className:"lr-section",children:a.jsxs("div",{className:"lr-section__inner",children:[a.jsxs("div",{className:"lr-section__header lr-reveal",children:[a.jsx("span",{className:"lr-kicker",children:"All-in-one platform"}),a.jsxs("h2",{children:["Everything you need to",a.jsx("br",{}),"store and share."]}),a.jsxs("p",{children:[Ht.name," combines encrypted cloud storage with powerful tools to manage your digital life with confidence."]})]}),a.jsx("div",{className:"lr-features lr-reveal",children:zE.map((m,x)=>a.jsxs("article",{className:"lr-feature-card",style:{animationDelay:`${x*.1}s`},children:[a.jsx("div",{className:"lr-feature-card__icon",children:m.icon}),a.jsx("h3",{children:m.title}),a.jsx("p",{children:m.desc})]},m.title))})]})}),a.jsx("section",{id:"security",className:"lr-section lr-section--alt",children:a.jsx("div",{className:"lr-section__inner",children:a.jsxs("div",{className:"lr-security lr-reveal",children:[a.jsxs("div",{className:"lr-security__text",children:[a.jsx("span",{className:"lr-kicker",children:"Security first"}),a.jsx("h2",{children:"Your data stays encrypted and private."}),a.jsx("p",{children:"We protect your data with AES-256 encryption at rest and TLS 1.3 in transit. Only you — and the people you explicitly authorize — can access your files."}),a.jsxs("ul",{className:"lr-security__checks",children:[a.jsxs("li",{children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#22c55e",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M20 6 9 17l-5-5"})}),"End-to-end encryption"]}),a.jsxs("li",{children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#22c55e",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M20 6 9 17l-5-5"})}),"Activity audit logs"]}),a.jsxs("li",{children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#22c55e",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M20 6 9 17l-5-5"})}),"Role-based access control"]}),a.jsxs("li",{children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#22c55e",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M20 6 9 17l-5-5"})}),"Password-protected sharing"]})]}),a.jsx("button",{type:"button",className:"lr-btn lr-btn--primary",onClick:n,style:{marginTop:24},children:"Get started free"})]}),a.jsx("div",{className:"lr-security__visual","aria-hidden":"true",children:a.jsx("div",{className:"lr-shield",children:a.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),a.jsx("path",{d:"m9 12 2 2 4-4",stroke:"#22c55e",strokeWidth:"2"})]})})})]})})}),a.jsx("section",{className:"lr-section",children:a.jsxs("div",{className:"lr-section__inner",children:[a.jsxs("div",{className:"lr-section__header lr-reveal",children:[a.jsxs("span",{className:"lr-kicker",children:["Why ",Ht.name,"?"]}),a.jsx("h2",{children:"Built for how you work today."})]}),a.jsx("div",{className:"lr-why lr-reveal",children:OE.map((m,x)=>a.jsxs("div",{className:"lr-why__item",style:{animationDelay:`${x*.08}s`},children:[a.jsx("span",{className:"lr-why__num",children:m.num}),a.jsxs("div",{children:[a.jsx("h3",{children:m.title}),a.jsx("p",{children:m.desc})]})]},m.num))})]})}),a.jsx("section",{className:"lr-stats lr-reveal",children:a.jsxs("div",{className:"lr-stats__inner",children:[a.jsxs("div",{className:"lr-stats__item",ref:p,children:[a.jsxs("strong",{children:[f.toLocaleString(),"+"]}),a.jsx("span",{children:"Files stored"})]}),a.jsx("div",{className:"lr-stats__divider"}),a.jsxs("div",{className:"lr-stats__item",children:[a.jsx("strong",{children:qe(o.storageCapacity)}),a.jsx("span",{children:"Total capacity"})]}),a.jsx("div",{className:"lr-stats__divider"}),a.jsxs("div",{className:"lr-stats__item",ref:y,children:[a.jsxs("strong",{children:[g.toLocaleString(),"+"]}),a.jsx("span",{children:"Active users"})]})]})}),a.jsx("section",{id:"pricing",className:"lr-section lr-section--alt",children:a.jsxs("div",{className:"lr-section__inner",children:[a.jsxs("div",{className:"lr-section__header lr-reveal",children:[a.jsx("h2",{children:"Simple & Transparent"}),a.jsx("p",{children:"Choose the CloudVault experience that fits your storage needs."})]}),a.jsxs("div",{className:"lr-pricing lr-reveal",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"32px"},children:[a.jsxs("article",{className:"lr-plan",children:[a.jsx("h3",{children:"Free Plan"}),a.jsxs("div",{className:"lr-plan__price",children:["₹0",a.jsx("span",{children:"/ month"})]}),a.jsxs("ul",{style:{marginBottom:"32px"},children:[a.jsxs("li",{children:[a.jsx(Gr,{size:16})," Secure cloud storage"]}),a.jsxs("li",{children:[a.jsx(Gr,{size:16})," File uploads"]}),a.jsxs("li",{children:[a.jsx(Gr,{size:16})," Folder management"]}),a.jsxs("li",{children:[a.jsx(Gr,{size:16})," File preview"]}),a.jsxs("li",{children:[a.jsx(Gr,{size:16})," File download"]}),a.jsxs("li",{children:[a.jsx(Gr,{size:16})," Basic account management"]}),a.jsxs("li",{children:[a.jsx(Gr,{size:16})," Access from multiple devices"]})]}),a.jsx("button",{className:"lr-btn lr-btn--outline lr-btn--full",onClick:n,children:"Get Started"})]}),a.jsxs("article",{className:"lr-plan lr-plan--pop",style:{border:"1px solid rgba(217,0,7,0.3)"},children:[a.jsx("h3",{children:"Coming Soon"}),a.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"32px",fontSize:"15px"},children:"More storage. More possibilities. Premium CloudVault plans with additional storage and advanced features are coming soon."}),a.jsx("button",{className:"lr-btn lr-btn--primary lr-btn--full",onClick:()=>alert("Notifications coming soon!"),children:"Notify Me"})]})]})]})}),a.jsx("section",{id:"faq",className:"lr-section",children:a.jsxs("div",{className:"lr-section__inner",style:{maxWidth:720},children:[a.jsx("div",{className:"lr-section__header lr-reveal",children:a.jsx("h2",{children:"FAQ"})}),a.jsx("div",{className:"lr-faqs lr-reveal",children:FE.map((m,x)=>a.jsxs("div",{className:`lr-faq${u===x?" lr-faq--open":""}`,children:[a.jsxs("button",{type:"button",className:"lr-faq__q",onClick:()=>d(u===x?null:x),children:[m.q,a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lr-faq__chevron",children:a.jsx("path",{d:"m6 9 6 6 6-6"})})]}),a.jsx("div",{className:"lr-faq__a",children:a.jsx("p",{children:m.a})})]},x))})]})}),a.jsx("section",{className:"lr-cta lr-reveal",children:a.jsxs("div",{className:"lr-cta__inner",children:[a.jsx("h2",{children:"Ready to take control of your files?"}),a.jsxs("p",{children:["Join thousands who trust ",Ht.name," with their most important data."]}),a.jsxs("div",{className:"lr-hero__ctas",children:[a.jsxs("button",{type:"button",className:"lr-btn lr-btn--primary lr-btn--lg",onClick:n,children:["Sign up for free",a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M5 12h14"}),a.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),a.jsx("button",{type:"button",className:"lr-btn lr-btn--outline lr-btn--lg",onClick:r,children:"Log in"})]})]})})]}),e==="about"&&a.jsx(RE,{}),e==="contact"&&a.jsx(AE,{}),e==="privacy"&&a.jsx(NE,{}),e==="terms"&&a.jsx(DE,{}),e==="security"&&a.jsx(ME,{}),e==="status"&&a.jsx(LE,{})]}),a.jsx("section",{className:"lr-section",style:{borderTop:"1px solid var(--border)",background:"linear-gradient(to bottom, transparent, rgba(225, 29, 72, 0.05))"},children:a.jsxs("div",{className:"lr-container",style:{textAlign:"center",padding:"64px 0"},children:[a.jsx("h2",{style:{fontSize:"36px",marginBottom:"16px"},children:"Ready to take control of your files?"}),a.jsx("p",{style:{fontSize:"18px",color:"var(--text-secondary)",marginBottom:"32px"},children:"Securely store, organize and access your files with CloudVault."}),a.jsx("button",{className:"lr-btn lr-btn--mega-red",onClick:n,children:"Get Started →"})]})}),a.jsx("footer",{className:"lr-footer",children:a.jsxs("div",{className:"lr-footer__inner",children:[a.jsxs("div",{className:"lr-footer__grid",style:{gridTemplateColumns:"1.5fr 1fr 1fr 1fr 1fr",gap:"32px"},children:[a.jsxs("div",{className:"lr-footer__brand",children:[a.jsxs("div",{className:"lr-footer__brand-lockup",children:[a.jsx("span",{className:"lr-nav__logo",children:a.jsx("img",{src:Ht.logoImage,alt:""})}),a.jsx("strong",{children:Ht.name})]}),a.jsx("p",{children:"Secure cloud storage for individuals and teams."})]}),a.jsxs("div",{className:"lr-footer__col",children:[a.jsx("h4",{children:"PRODUCT"}),a.jsx("a",{href:"#features",onClick:m=>{e!=="landing"&&(m.preventDefault(),t("landing"))},children:"Features"}),a.jsx("a",{href:"#pricing",onClick:m=>{e!=="landing"&&(m.preventDefault(),t("landing"))},children:"Pricing"}),a.jsx("a",{href:"#faq",onClick:m=>{e!=="landing"&&(m.preventDefault(),t("landing"))},children:"FAQ"}),a.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("security")},children:"Security"}),a.jsx("a",{href:"#",style:{color:"var(--text-muted)",cursor:"default"},children:"What\\'s New"})]}),a.jsxs("div",{className:"lr-footer__col",children:[a.jsx("h4",{children:"COMPANY"}),a.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("about")},children:"About"}),a.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("contact")},children:"Contact"}),a.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("contact")},children:"Support"}),a.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("status")},children:"Status"})]}),a.jsxs("div",{className:"lr-footer__col",children:[a.jsx("h4",{children:"RESOURCES"}),a.jsx("a",{href:"#",style:{color:"var(--text-muted)",cursor:"default"},children:"Documentation (Soon)"}),a.jsx("a",{href:"#",style:{color:"var(--text-muted)",cursor:"default"},children:"Help Center (Soon)"}),a.jsx("a",{href:"#",style:{color:"var(--text-muted)",cursor:"default"},children:"API (Soon)"}),a.jsx("a",{href:"#",style:{color:"var(--text-muted)",cursor:"default"},children:"Changelog (Soon)"})]}),a.jsxs("div",{className:"lr-footer__col",children:[a.jsx("h4",{children:"LEGAL"}),a.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("privacy")},children:"Privacy"}),a.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("terms")},children:"Terms"}),a.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("privacy")},children:"Cookie Policy"}),a.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),t("terms")},children:"Acceptable Use"})]})]}),a.jsx("div",{className:"lr-footer__bottom",children:a.jsxs("span",{children:["© 2026 ",Ht.name,". Made for your files."]})})]})})]})}const UE=`
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
.lr-btn--outline:hover { border-color: var(--border-hover); background: var(--bg-card); }
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
  background: var(--bg-card);
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
  background: var(--bg-card);
  border-top-left-radius: var(--radius-lg);
  border-top-right-radius: var(--radius-lg);
}
.lr-preview__dots { display: flex; gap: 6px; }
.lr-preview__dots span {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--bg-card); border: 1px solid rgba(255,255,255,.06);
}
.lr-preview__search {
  flex: 1; display: flex; align-items: center; gap: 8px;
  padding: 7px 14px; border-radius: 8px;
  background: var(--bg-card); color: var(--text-muted);
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
  height: 4px; border-radius: 2px; background: var(--bg-card);
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
.lr-preview__file:hover { background: var(--bg-card); }
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
  border: 1px solid var(--border); background: var(--bg-card);
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
    background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.06);
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
    background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.05);
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
    background: var(--bg-card); border-top: 1px solid rgba(255, 255, 255, 0.2);
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
`,WE=()=>{};var Cg={};/**
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
 */const z1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},$E=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],l=e[n++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},O1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,l=s?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,d=o>>2,h=(o&3)<<4|l>>4;let f=(l&15)<<2|u>>6,p=u&63;c||(p=64,s||(f=64)),r.push(n[d],n[h],n[f],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(z1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$E(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||l==null||u==null||h==null)throw new HE;const f=o<<2|l>>4;if(r.push(f),u!==64){const p=l<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class HE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GE=function(e){const t=z1(e);return O1.encodeByteArray(t,!0)},F1=function(e){return GE(e).replace(/\./g,"")},B1=function(e){try{return O1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function YE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KE=()=>YE().__FIREBASE_DEFAULTS__,qE=()=>{if(typeof process>"u"||typeof Cg>"u")return;const e=Cg.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},XE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&B1(e[1]);return t&&JSON.parse(t)},Yf=()=>{try{return WE()||KE()||qE()||XE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},QE=e=>{var t,n;return(n=(t=Yf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},V1=()=>{var e;return(e=Yf())===null||e===void 0?void 0:e.config},U1=e=>{var t;return(t=Yf())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class JE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Sc(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ZE(e){return(await fetch(e,{credentials:"include"})).ok}const as={};function ej(){const e={prod:[],emulator:[]};for(const t of Object.keys(as))as[t]?e.emulator.push(t):e.prod.push(t);return e}function tj(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let _g=!1;function nj(e,t){if(typeof window>"u"||typeof document>"u"||!Sc(window.location.host)||as[e]===t||as[e]||_g)return;as[e]=t;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",o=ej().prod.length>0;function s(){const f=document.getElementById(r);f&&f.remove()}function l(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,p){f.setAttribute("width","24"),f.setAttribute("id",p),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{_g=!0,s()},f}function d(f,p){f.setAttribute("id",p),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=tj(r),p=n("text"),g=document.getElementById(p)||document.createElement("span"),y=n("learnmore"),w=document.getElementById(y)||document.createElement("a"),m=n("preprendIcon"),x=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const v=f.element;l(v),d(w,y);const k=u();c(x,m),v.append(x,g,w,k),document.body.appendChild(v)}o?(g.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rj(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function ij(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oj(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function sj(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aj(){const e=xt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function lj(){try{return typeof indexedDB=="object"}catch{return!1}}function cj(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const uj="FirebaseError";class Or extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=uj,Object.setPrototypeOf(this,Or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?dj(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Or(i,l,r)}}function dj(e,t){return e.replace(hj,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const hj=/\{\$([^}]+)}/g;function fj(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function fo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Eg(o)&&Eg(s)){if(!fo(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Eg(e){return e!==null&&typeof e=="object"}/**
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
 */function qs(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function pj(e,t){const n=new mj(e,t);return n.subscribe.bind(n)}class mj{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gj(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=xu),i.error===void 0&&(i.error=xu),i.complete===void 0&&(i.complete=xu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gj(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function xu(){}/**
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
 */function ko(e){return e&&e._delegate?e._delegate:e}class po{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qr="[DEFAULT]";/**
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
 */class yj{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new JE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(vj(t))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Qr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qr){return this.instances.has(t)}getOptions(t=Qr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xj(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qr){return this.component?this.component.multipleInstances?t:Qr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xj(e){return e===Qr?void 0:e}function vj(e){return e.instantiationMode==="EAGER"}/**
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
 */class bj{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new yj(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(we||(we={}));const wj={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},kj=we.INFO,Sj={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},Cj=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Sj[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class W1{constructor(t){this.name=t,this._logLevel=kj,this._logHandler=Cj,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in we))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?wj[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...t),this._logHandler(this,we.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...t),this._logHandler(this,we.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,we.INFO,...t),this._logHandler(this,we.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,we.WARN,...t),this._logHandler(this,we.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...t),this._logHandler(this,we.ERROR,...t)}}const _j=(e,t)=>t.some(n=>e instanceof n);let jg,Tg;function Ej(){return jg||(jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jj(){return Tg||(Tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $1=new WeakMap,eh=new WeakMap,H1=new WeakMap,vu=new WeakMap,Kf=new WeakMap;function Tj(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Ir(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&$1.set(n,e)}).catch(()=>{}),Kf.set(t,e),t}function Ij(e){if(eh.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});eh.set(e,t)}let th={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return eh.get(e);if(t==="objectStoreNames")return e.objectStoreNames||H1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Pj(e){th=e(th)}function Rj(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(bu(this),t,...n);return H1.set(r,t.sort?t.sort():[t]),Ir(r)}:jj().includes(e)?function(...t){return e.apply(bu(this),t),Ir($1.get(this))}:function(...t){return Ir(e.apply(bu(this),t))}}function Aj(e){return typeof e=="function"?Rj(e):(e instanceof IDBTransaction&&Ij(e),_j(e,Ej())?new Proxy(e,th):e)}function Ir(e){if(e instanceof IDBRequest)return Tj(e);if(vu.has(e))return vu.get(e);const t=Aj(e);return t!==e&&(vu.set(e,t),Kf.set(t,e)),t}const bu=e=>Kf.get(e);function Nj(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),l=Ir(s);return r&&s.addEventListener("upgradeneeded",c=>{r(Ir(s.result),c.oldVersion,c.newVersion,Ir(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Dj=["get","getKey","getAll","getAllKeys","count"],Mj=["put","add","delete","clear"],wu=new Map;function Ig(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(wu.get(t))return wu.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Mj.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Dj.includes(n)))return;const o=async function(s,...l){const c=this.transaction(s,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return wu.set(t,o),o}Pj(e=>({...e,get:(t,n,r)=>Ig(t,n)||e.get(t,n,r),has:(t,n)=>!!Ig(t,n)||e.has(t,n)}));/**
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
 */class Lj{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zj(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zj(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const nh="@firebase/app",Pg="0.13.2";/**
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
 */const Zn=new W1("@firebase/app"),Oj="@firebase/app-compat",Fj="@firebase/analytics-compat",Bj="@firebase/analytics",Vj="@firebase/app-check-compat",Uj="@firebase/app-check",Wj="@firebase/auth",$j="@firebase/auth-compat",Hj="@firebase/database",Gj="@firebase/data-connect",Yj="@firebase/database-compat",Kj="@firebase/functions",qj="@firebase/functions-compat",Xj="@firebase/installations",Qj="@firebase/installations-compat",Jj="@firebase/messaging",Zj="@firebase/messaging-compat",eT="@firebase/performance",tT="@firebase/performance-compat",nT="@firebase/remote-config",rT="@firebase/remote-config-compat",iT="@firebase/storage",oT="@firebase/storage-compat",sT="@firebase/firestore",aT="@firebase/ai",lT="@firebase/firestore-compat",cT="firebase",uT="11.10.0";/**
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
 */const rh="[DEFAULT]",dT={[nh]:"fire-core",[Oj]:"fire-core-compat",[Bj]:"fire-analytics",[Fj]:"fire-analytics-compat",[Uj]:"fire-app-check",[Vj]:"fire-app-check-compat",[Wj]:"fire-auth",[$j]:"fire-auth-compat",[Hj]:"fire-rtdb",[Gj]:"fire-data-connect",[Yj]:"fire-rtdb-compat",[Kj]:"fire-fn",[qj]:"fire-fn-compat",[Xj]:"fire-iid",[Qj]:"fire-iid-compat",[Jj]:"fire-fcm",[Zj]:"fire-fcm-compat",[eT]:"fire-perf",[tT]:"fire-perf-compat",[nT]:"fire-rc",[rT]:"fire-rc-compat",[iT]:"fire-gcs",[oT]:"fire-gcs-compat",[sT]:"fire-fst",[lT]:"fire-fst-compat",[aT]:"fire-vertex","fire-js":"fire-js",[cT]:"fire-js-all"};/**
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
 */const zl=new Map,hT=new Map,ih=new Map;function Rg(e,t){try{e.container.addComponent(t)}catch(n){Zn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ds(e){const t=e.name;if(ih.has(t))return Zn.debug(`There were multiple attempts to register component ${t}.`),!1;ih.set(t,e);for(const n of zl.values())Rg(n,e);for(const n of hT.values())Rg(n,e);return!0}function G1(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function En(e){return e==null?!1:e.settings!==void 0}/**
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
 */const fT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new Ks("app","Firebase",fT);/**
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
 */class pT{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new po("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const Xs=uT;function Y1(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:rh,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=V1()),!n)throw Pr.create("no-options");const o=zl.get(i);if(o){if(fo(n,o.options)&&fo(r,o.config))return o;throw Pr.create("duplicate-app",{appName:i})}const s=new bj(i);for(const c of ih.values())s.addComponent(c);const l=new pT(n,r,s);return zl.set(i,l),l}function mT(e=rh){const t=zl.get(e);if(!t&&e===rh&&V1())return Y1();if(!t)throw Pr.create("no-app",{appName:e});return t}function eo(e,t,n){var r;let i=(r=dT[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zn.warn(l.join(" "));return}Ds(new po(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const gT="firebase-heartbeat-database",yT=1,Ms="firebase-heartbeat-store";let ku=null;function K1(){return ku||(ku=Nj(gT,yT,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ms)}catch(n){console.warn(n)}}}}).catch(e=>{throw Pr.create("idb-open",{originalErrorMessage:e.message})})),ku}async function xT(e){try{const n=(await K1()).transaction(Ms),r=await n.objectStore(Ms).get(q1(e));return await n.done,r}catch(t){if(t instanceof Or)Zn.warn(t.message);else{const n=Pr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Zn.warn(n.message)}}}async function Ag(e,t){try{const r=(await K1()).transaction(Ms,"readwrite");await r.objectStore(Ms).put(t,q1(e)),await r.done}catch(n){if(n instanceof Or)Zn.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(r.message)}}}function q1(e){return`${e.name}!${e.options.appId}`}/**
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
 */const vT=1024,bT=30;class wT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ST(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ng();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>bT){const s=CT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ng(),{heartbeatsToSend:r,unsentEntries:i}=kT(this._heartbeatsCache.heartbeats),o=F1(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Zn.warn(n),""}}}function Ng(){return new Date().toISOString().substring(0,10)}function kT(e,t=vT){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Dg(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dg(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ST{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lj()?cj().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ag(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ag(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Dg(e){return F1(JSON.stringify({version:2,heartbeats:e})).length}function CT(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function _T(e){Ds(new po("platform-logger",t=>new Lj(t),"PRIVATE")),Ds(new po("heartbeat",t=>new wT(t),"PRIVATE")),eo(nh,Pg,e),eo(nh,Pg,"esm2017"),eo("fire-js","")}_T("");var ET="firebase",jT="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */eo(ET,jT,"app");function qf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function X1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TT=X1,Q1=new Ks("auth","Firebase",X1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new W1("@firebase/auth");function IT(e,...t){Ol.logLevel<=we.WARN&&Ol.warn(`Auth (${Xs}): ${e}`,...t)}function qa(e,...t){Ol.logLevel<=we.ERROR&&Ol.error(`Auth (${Xs}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(e,...t){throw Qf(e,...t)}function gn(e,...t){return Qf(e,...t)}function Xf(e,t,n){const r=Object.assign(Object.assign({},TT()),{[t]:n});return new Ks("auth","Firebase",r).create(t,{appName:e.name})}function ci(e){return Xf(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function PT(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&An(e,"argument-error"),Xf(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Q1.create(e,...t)}function Q(e,t,...n){if(!e)throw Qf(t,...n)}function Gn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw qa(t),new Error(t)}function er(e,t){e||Gn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function RT(){return Mg()==="http:"||Mg()==="https:"}function Mg(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RT()||oj()||"connection"in navigator)?navigator.onLine:!0}function NT(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,n){this.shortDelay=t,this.longDelay=n,er(n>t,"Short delay should be less than long delay!"),this.isMobile=rj()||sj()}get(){return AT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(e,t){er(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],LT=new Qs(3e4,6e4);function Zf(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function So(e,t,n,r,i={}){return Z1(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const l=qs(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:c},o);return ij()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&Sc(e.emulatorConfig.host)&&(u.credentials="include"),J1.fetch()(await eb(e,e.config.apiHost,n,l),u)})}async function Z1(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},DT),t);try{const i=new OT(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw _a(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(e,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw _a(e,"email-already-in-use",s);if(c==="USER_DISABLED")throw _a(e,"user-disabled",s);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Xf(e,d,u);An(e,d)}}catch(i){if(i instanceof Or)throw i;An(e,"network-request-failed",{message:String(i)})}}async function zT(e,t,n,r,i={}){const o=await So(e,t,n,r,i);return"mfaPendingCredential"in o&&An(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function eb(e,t,n,r){const i=`${t}${n}?${r}`,o=e,s=o.config.emulator?Jf(e.config,i):`${e.config.apiScheme}://${i}`;return MT.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(s).toString():s}class OT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),LT.get())})}}function _a(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gn(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(e,t){return So(e,"POST","/v1/accounts:delete",t)}async function Fl(e,t){return So(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function BT(e,t=!1){const n=ko(e),r=await n.getIdToken(t),i=ep(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ls(Su(i.auth_time)),issuedAtTime:ls(Su(i.iat)),expirationTime:ls(Su(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Su(e){return Number(e)*1e3}function ep(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=B1(n);return i?JSON.parse(i):(qa("Failed to decode base64 JWT payload"),null)}catch(i){return qa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Lg(e){const t=ep(e);return Q(t,"internal-error"),Q(typeof t.exp<"u","internal-error"),Q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Or&&VT(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function VT({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Bl(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ls(e,Fl(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?tb(o.providerUserInfo):[],l=$T(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new sh(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function WT(e){const t=ko(e);await Bl(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function $T(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function tb(e){return e.map(t=>{var{providerId:n}=t,r=qf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(e,t){const n=await Z1(e,{},async()=>{const r=qs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=await eb(e,i,"/v1/token",`key=${o}`),l=await e._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return e.emulatorConfig&&Sc(e.emulatorConfig.host)&&(c.credentials="include"),J1.fetch()(s,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GT(e,t){return So(e,"POST","/v2/accounts:revokeToken",Zf(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Q(t.idToken,"internal-error"),Q(typeof t.idToken<"u","internal-error"),Q(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Lg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Q(t.length!==0,"internal-error");const n=Lg(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await HT(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new to;return r&&(Q(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(Q(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e,t){Q(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class fn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=qf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new sh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,t));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return BT(this,t)}reload(){return WT(this)}_assign(t){this!==t&&(Q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new fn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(ci(this.auth));const t=await this.getIdToken();return await Ls(this,FT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,l,c,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:k,isAnonymous:j,providerData:C,stsTokenManager:T}=n;Q(v&&T,t,"internal-error");const E=to.fromJSON(this.name,T);Q(typeof v=="string",t,"internal-error"),ar(h,t.name),ar(f,t.name),Q(typeof k=="boolean",t,"internal-error"),Q(typeof j=="boolean",t,"internal-error"),ar(p,t.name),ar(g,t.name),ar(y,t.name),ar(w,t.name),ar(m,t.name),ar(x,t.name);const A=new fn({uid:v,auth:t,email:f,emailVerified:k,displayName:h,isAnonymous:j,photoURL:g,phoneNumber:p,tenantId:y,stsTokenManager:E,createdAt:m,lastLoginAt:x});return C&&Array.isArray(C)&&(A.providerData=C.map(P=>Object.assign({},P))),w&&(A._redirectEventId=w),A}static async _fromIdTokenResponse(t,n,r=!1){const i=new to;i.updateFromServerResponse(n);const o=new fn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Bl(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?tb(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new to;l.updateFromIdToken(r);const c=new fn({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new sh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=new Map;function Yn(e){er(e instanceof Function,"Expected a class definition");let t=zg.get(e);return t?(er(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,zg.set(e,t),t)}/**
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
 */class nb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}nb.type="NONE";const Og=nb;/**
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
 */function Xa(e,t,n){return`firebase:${e}:${t}:${n}`}class no{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Xa(this.userKey,i.apiKey,o),this.fullPersistenceKey=Xa("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Fl(this.auth,{idToken:t}).catch(()=>{});return n?fn._fromGetAccountInfoResponse(this.auth,n,t):null}return fn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new no(Yn(Og),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Yn(Og);const s=Xa(r,t.config.apiKey,t.name);let l=null;for(const u of n)try{const d=await u._get(s);if(d){let h;if(typeof d=="string"){const f=await Fl(t,{idToken:d}).catch(()=>{});if(!f)break;h=await fn._fromGetAccountInfoResponse(t,f,d)}else h=fn._fromJSON(t,d);u!==o&&(l=h),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new no(o,t,r):(o=c[0],l&&await o._set(s,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new no(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(sb(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(rb(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(lb(t))return"Blackberry";if(cb(t))return"Webos";if(ib(t))return"Safari";if((t.includes("chrome/")||ob(t))&&!t.includes("edge/"))return"Chrome";if(ab(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rb(e=xt()){return/firefox\//i.test(e)}function ib(e=xt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ob(e=xt()){return/crios\//i.test(e)}function sb(e=xt()){return/iemobile/i.test(e)}function ab(e=xt()){return/android/i.test(e)}function lb(e=xt()){return/blackberry/i.test(e)}function cb(e=xt()){return/webos/i.test(e)}function tp(e=xt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function YT(e=xt()){var t;return tp(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function KT(){return aj()&&document.documentMode===10}function ub(e=xt()){return tp(e)||ab(e)||cb(e)||lb(e)||/windows phone/i.test(e)||sb(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(e,t=[]){let n;switch(e){case"Browser":n=Fg(xt());break;case"Worker":n=`${Fg(xt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xs}/${r}`}/**
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
 */class qT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,l)=>{try{const c=t(o);s(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function XT(e,t={}){return So(e,"GET","/v2/passwordPolicy",Zf(e,t))}/**
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
 */const QT=6;class JT{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:QT,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(s=c.containsNumericCharacter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bg(this),this.idTokenSubscription=new Bg(this),this.beforeStateQueue=new qT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Yn(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await no.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Fl(this,{idToken:t}),r=await fn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(En(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!s||s===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Bl(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=NT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(En(this.app))return Promise.reject(ci(this));const n=t?ko(t):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(ci(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return En(this.app)?Promise.reject(ci(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await XT(this),n=new JT(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ks("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GT(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Yn(t)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[Yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{s=!0,c()}}else{const c=t.addObserver(n);return()=>{s=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=db(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&IT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cc(e){return ko(e)}class Bg{constructor(t){this.auth=t,this.observer=null,this.addObserver=pj(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let np={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function e4(e){np=e}function t4(e){return np.loadJS(e)}function n4(){return np.gapiScript}function r4(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i4(e,t){const n=G1(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(fo(o,t??{}))return i;An(i,"already-initialized")}return n.initialize({options:t})}function o4(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function s4(e,t,n){const r=Cc(e);Q(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=hb(t),{host:s,port:l}=a4(t),c=l===null?"":`:${l}`,u={url:`${o}//${s}${c}/`},d=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(fo(u,r.config.emulator)&&fo(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Sc(s)?(ZE(`${o}//${s}${c}`),nj("Auth",!0)):l4()}function hb(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function a4(e){const t=hb(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Vg(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Vg(s)}}}function Vg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function l4(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(t){return Gn("not implemented")}_linkToIdToken(t,n){return Gn("not implemented")}_getReauthenticationResolver(t){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(e,t){return zT(e,"POST","/v1/accounts:signInWithIdp",Zf(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4="http://localhost";class tr extends fb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new tr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=qf(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new tr(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return ro(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ro(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ro(t,n)}buildRequest(){const t={requestUri:c4,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=qs(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Co extends rp{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class cs extends Co{static credentialFromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;return Q("providerId"in n&&"signInMethod"in n,"argument-error"),tr._fromParams(n)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return Q(t.idToken||t.accessToken,"argument-error"),tr._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return cs.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return cs.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:l}=t;if(!r&&!i&&!n&&!o||!l)return null;try{return new cs(l)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Co{constructor(){super("facebook.com")}static credential(t){return tr._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return mr.credentialFromTaggedObject(t)}static credentialFromError(t){return mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return mr.credential(t.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Co{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return tr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Vn.credentialFromTaggedObject(t)}static credentialFromError(t){return Vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Co{constructor(){super("github.com")}static credential(t){return tr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Un.credentialFromTaggedObject(t)}static credentialFromError(t){return Un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Un.credential(t.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Co{constructor(){super("twitter.com")}static credential(t,n){return tr._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return gr.credentialFromTaggedObject(t)}static credentialFromError(t){return gr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await fn._fromIdTokenResponse(t,r,i),s=Ug(r);return new mo({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Ug(r);return new mo({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Ug(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends Or{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vl.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Vl(t,n,r,i)}}function pb(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Vl._fromErrorAndOperation(e,o,t,r):o})}async function u4(e,t,n=!1){const r=await Ls(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return mo._forOperation(e,"link",r)}/**
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
 */async function d4(e,t,n=!1){const{auth:r}=e;if(En(r.app))return Promise.reject(ci(r));const i="reauthenticate";try{const o=await Ls(e,pb(r,i,t,e),n);Q(o.idToken,r,"internal-error");const s=ep(o.idToken);Q(s,r,"internal-error");const{sub:l}=s;return Q(e.uid===l,r,"user-mismatch"),mo._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&An(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h4(e,t,n=!1){if(En(e.app))return Promise.reject(ci(e));const r="signIn",i=await pb(e,r,t),o=await mo._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function f4(e,t,n,r){return ko(e).onIdTokenChanged(t,n,r)}function p4(e,t,n){return ko(e).beforeAuthStateChanged(t,n)}const Ul="__sak";/**
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
 */class mb{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m4=1e3,g4=10;class gb extends mb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ub(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,l,c)=>{this.notifyListeners(s,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);KT()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,g4):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},m4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}gb.type="LOCAL";const y4=gb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb extends mb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}yb.type="SESSION";const xb=yb;/**
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
 */function x4(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _c{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new _c(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(s).map(async u=>u(n.origin,o)),c=await x4(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class v4{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,c)=>{const u=ip("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(f.data.response);break;default:clearTimeout(d),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function b4(e){Pn().location.href=e}/**
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
 */function vb(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function w4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function k4(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function S4(){return vb()?self:null}/**
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
 */const bb="firebaseLocalStorageDb",C4=1,Wl="firebaseLocalStorage",wb="fbase_key";class Js{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ec(e,t){return e.transaction([Wl],t?"readwrite":"readonly").objectStore(Wl)}function _4(){const e=indexedDB.deleteDatabase(bb);return new Js(e).toPromise()}function ah(){const e=indexedDB.open(bb,C4);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Wl,{keyPath:wb})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Wl)?t(r):(r.close(),await _4(),t(await ah()))})})}async function Wg(e,t,n){const r=Ec(e,!0).put({[wb]:t,value:n});return new Js(r).toPromise()}async function E4(e,t){const n=Ec(e,!1).get(t),r=await new Js(n).toPromise();return r===void 0?null:r.value}function $g(e,t){const n=Ec(e,!0).delete(t);return new Js(n).toPromise()}const j4=800,T4=3;class kb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ah(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>T4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(S4()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await w4(),!this.activeServiceWorker)return;this.sender=new v4(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||k4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ah();return await Wg(t,Ul,"1"),await $g(t,Ul),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wg(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>E4(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>$g(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ec(i,!1).getAll();return new Js(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kb.type="LOCAL";const I4=kb;new Qs(3e4,6e4);/**
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
 */function Sb(e,t){return t?Yn(t):(Q(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class op extends fb{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ro(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ro(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ro(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function P4(e){return h4(e.auth,new op(e),e.bypassAuthState)}function R4(e){const{auth:t,user:n}=e;return Q(n,t,"internal-error"),d4(n,new op(e),e.bypassAuthState)}async function A4(e){const{auth:t,user:n}=e;return Q(n,t,"internal-error"),u4(n,new op(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:l}=t;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return P4;case"linkViaPopup":case"linkViaRedirect":return A4;case"reauthViaPopup":case"reauthViaRedirect":return R4;default:An(this.auth,"internal-error")}}resolve(t){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4=new Qs(2e3,1e4);async function D4(e,t,n){if(En(e.app))return Promise.reject(gn(e,"operation-not-supported-in-this-environment"));const r=Cc(e);PT(e,t,rp);const i=Sb(r,n);return new ii(r,"signInViaPopup",t,i).executeNotNull()}class ii extends Cb{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ii.currentPopupAction&&ii.currentPopupAction.cancel(),ii.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Q(t,this.auth,"internal-error"),t}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const t=ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ii.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,N4.get())};t()}}ii.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4="pendingRedirect",Qa=new Map;class L4 extends Cb{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Qa.get(this.auth._key());if(!t){try{const r=await z4(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Qa.set(this.auth._key(),t)}return this.bypassAuthState||Qa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z4(e,t){const n=B4(t),r=F4(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function O4(e,t){Qa.set(e._key(),t)}function F4(e){return Yn(e._redirectPersistence)}function B4(e){return Xa(M4,e.config.apiKey,e.name)}async function V4(e,t,n=!1){if(En(e.app))return Promise.reject(ci(e));const r=Cc(e),i=Sb(r,t),s=await new L4(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4=10*60*1e3;class W4{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!$4(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!_b(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=U4&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hg(t))}saveEventToCache(t){this.cachedEventUids.add(Hg(t)),this.lastProcessedEventTime=Date.now()}}function Hg(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function _b({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function $4(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _b(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H4(e,t={}){return So(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y4=/^https?/;async function K4(e){if(e.config.emulator)return;const{authorizedDomains:t}=await H4(e);for(const n of t)try{if(q4(n))return}catch{}An(e,"unauthorized-domain")}function q4(e){const t=oh(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!Y4.test(n))return!1;if(G4.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const X4=new Qs(3e4,6e4);function Gg(){const e=Pn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Q4(e){return new Promise((t,n)=>{var r,i,o;function s(){Gg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Gg(),n(gn(e,"network-request-failed"))},timeout:X4.get()})}if(!((i=(r=Pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Pn().gapi)===null||o===void 0)&&o.load)s();else{const l=r4("iframefcb");return Pn()[l]=()=>{gapi.load?s():n(gn(e,"network-request-failed"))},t4(`${n4()}?onload=${l}`).catch(c=>n(c))}}).catch(t=>{throw Ja=null,t})}let Ja=null;function J4(e){return Ja=Ja||Q4(e),Ja}/**
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
 */const Z4=new Qs(5e3,15e3),eI="__/auth/iframe",tI="emulator/auth/iframe",nI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iI(e){const t=e.config;Q(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Jf(t,tI):`https://${e.config.authDomain}/${eI}`,r={apiKey:t.apiKey,appName:e.name,v:Xs},i=rI.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${qs(r).slice(1)}`}async function oI(e){const t=await J4(e),n=Pn().gapi;return Q(n,e,"internal-error"),t.open({where:document.body,url:iI(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nI,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=gn(e,"network-request-failed"),l=Pn().setTimeout(()=>{o(s)},Z4.get());function c(){Pn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{o(s)})}))}/**
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
 */const sI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aI=500,lI=600,cI="_blank",uI="http://localhost";class Yg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dI(e,t,n,r=aI,i=lI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},sI),{width:r.toString(),height:i.toString(),top:o,left:s}),u=xt().toLowerCase();n&&(l=ob(u)?cI:n),rb(u)&&(t=t||uI,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(YT(u)&&l!=="_self")return hI(t||"",l),new Yg(null);const h=window.open(t||"",l,d);Q(h,e,"popup-blocked");try{h.focus()}catch{}return new Yg(h)}function hI(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const fI="__/auth/handler",pI="emulator/auth/handler",mI=encodeURIComponent("fac");async function Kg(e,t,n,r,i,o){Q(e.config.authDomain,e,"auth-domain-config-required"),Q(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Xs,eventId:i};if(t instanceof rp){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",fj(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))s[d]=h}if(t instanceof Co){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(s.scopes=d.join(","))}e.tenantId&&(s.tid=e.tenantId);const l=s;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await e._getAppCheckToken(),u=c?`#${mI}=${encodeURIComponent(c)}`:"";return`${gI(e)}?${qs(l).slice(1)}${u}`}function gI({config:e}){return e.emulator?Jf(e,pI):`https://${e.authDomain}/${fI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="webStorageSupport";class yI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xb,this._completeRedirectFn=V4,this._overrideRedirectResult=O4}async _openPopup(t,n,r,i){var o;er((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Kg(t,n,r,oh(),i);return dI(t,s,ip())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Kg(t,n,r,oh(),i);return b4(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(er(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await oI(t),r=new W4(t);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Cu,{type:Cu},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Cu];s!==void 0&&n(!!s),An(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=K4(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ub()||ib()||tp()}}const xI=yI;var qg="@firebase/auth",Xg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wI(e){Ds(new po("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=r.options;Q(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:db(e)},u=new ZT(r,i,o,c);return o4(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ds(new po("auth-internal",t=>{const n=Cc(t.getProvider("auth").getImmediate());return(r=>new vI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),eo(qg,Xg,bI(e)),eo(qg,Xg,"esm2017")}/**
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
 */const kI=5*60,SI=U1("authIdTokenMaxAge")||kI;let Qg=null;const CI=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SI)return;const i=n==null?void 0:n.token;Qg!==i&&(Qg=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _I(e=mT()){const t=G1(e,"auth");if(t.isInitialized())return t.getImmediate();const n=i4(e,{popupRedirectResolver:xI,persistence:[I4,y4,xb]}),r=U1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=CI(o.toString());p4(n,s,()=>s(n.currentUser)),f4(n,l=>s(l))}}const i=QE("auth");return i&&s4(n,`http://${i}`),n}function EI(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}e4({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=gn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",EI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wI("Browser");const Eb={apiKey:"AIzaSyCNsYDBSfYMJUxqbkC3Cb_w6CYGtW4Xf20",authDomain:"cloudvault-58446.firebaseapp.com",projectId:"cloudvault-58446",storageBucket:"cloudvault-58446.firebasestorage.app",messagingSenderId:"378535306521",appId:"1:378535306521:web:2e5fe57db925753d0f5188"},jI=["google","github","microsoft"];let _u=null,Jg=null;function TI(){return $l()?(_u||(_u=Y1(Eb),Jg=_I(_u)),Jg):null}function $l(){return!0}function II(){const e=Object.entries(Eb).filter(([,t])=>!t).map(([t])=>t);return{configured:$l(),providers:jI.map(t=>({id:t,configured:$l()})),missingEnv:e}}async function PI(e){const t=TI();if(!t)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env variables.");const r={google:new Vn,github:new Un,microsoft:new cs("microsoft.com")}[e];if(!r)throw new Error("Unknown provider");const i=await D4(t,r),o=await i.user.getIdToken(),s=await fetch(`${tn}/auth/firebase`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:o,email:i.user.email,fullName:i.user.displayName,avatarUrl:i.user.photoURL,provider:e})}),l=await s.json();if(!s.ok)throw new Error(l.error||l.message||"Firebase login failed");return l.success?l.data:l}function RI({onVerified:e,onError:t,onExpire:n,theme:r="auto",size:i="normal"}){const o=b.useRef(null),s=b.useRef(null),[l,c]=b.useState(!1),[u,d]=b.useState(!0),[h,f]=b.useState(null);b.useEffect(()=>{if(window.turnstile)c(!0),d(!1);else{const g=document.querySelector('script[data-cv-turnstile="true"]'),y=g||document.createElement("script");y.src="https://challenges.cloudflare.com/turnstile/v0/api.js",y.async=!0,y.defer=!0,y.dataset.cvTurnstile="true",y.onload=()=>{c(!0),d(!1),console.log("TURNSTILE: Script loaded")},y.onerror=()=>{f("Failed to load Turnstile"),d(!1),t==null||t("Failed to load Turnstile")},g||document.head.appendChild(y)}return()=>{if(s.current&&window.turnstile)try{window.turnstile.remove(s.current),s.current=null}catch(g){console.error("TURNSTILE: Error removing widget:",g)}}},[]),b.useEffect(()=>{if(l&&o.current&&window.turnstile&&!s.current){const g="0x4AAAAAADkh2aePP5UGcXcH",y=["localhost","127.0.0.1","::1"].includes(window.location.hostname);if((g==null?void 0:g.startsWith("1x"))&&!y){const m="Turnstile production site key is not configured";f(m),t==null||t(m),d(!1);return}console.log("TURNSTILE: Rendering widget with site key:",g);try{s.current=window.turnstile.render(o.current,{sitekey:g,theme:r,size:i,callback:m=>{console.log("TURNSTILE: Verification successful"),f(null),e==null||e(m)},"error-callback":m=>{console.error("TURNSTILE: Verification error:",m);const x="Verification failed. For local testing, use the Turnstile test site key; for production, make sure this hostname is allowed in Cloudflare.";f(x),t==null||t(x)},"expired-callback":()=>{console.log("TURNSTILE: Token expired"),f("Verification expired. Please try again."),n==null||n()}})}catch(m){console.error("TURNSTILE: Error rendering widget:",m),f("Failed to render Turnstile widget"),t==null||t("Failed to render Turnstile widget")}}},[l,r,i,e,t,n]);const p=()=>{if(s.current&&window.turnstile)try{window.turnstile.reset(s.current),f(null)}catch(g){console.error("TURNSTILE: Error resetting widget:",g)}};return b.useEffect(()=>{o.current&&(o.current.reset=p)},[]),u?a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",background:"var(--bg-secondary)",borderRadius:"var(--radius)",border:"1px solid var(--border)"},children:a.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid var(--border)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})}):h?a.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"var(--radius)",border:"1px solid var(--danger)",color:"var(--danger)",fontSize:"13px",textAlign:"center"},children:[h,a.jsx("button",{type:"button",onClick:p,style:{marginTop:"8px",padding:"6px 12px",background:"var(--danger)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px"},children:"Retry"})]}):a.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",minHeight:i==="compact"?140:70,overflow:"hidden"},children:a.jsx("div",{ref:o})})}const Yr=(e="")=>{const t=e.toLowerCase();return t.includes("failed to fetch")||t.includes("cannot reach")||t.includes("networkerror")?"Unable to reach CloudVault. Please check your connection.":t.includes("firebase")||t.includes("oauth")||t.includes("access token")?"Social login failed. Please try again.":e||"Something went wrong. Please try again."},Eu=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),Zg=e=>e.length>=8&&/[A-Z]/.test(e)&&/[a-z]/.test(e)&&/\d/.test(e);function AI({size:e=20}){return a.jsx("span",{style:{display:"inline-block",width:e,height:e,border:"2.5px solid rgba(255,255,255,0.25)",borderTopColor:"#fff",borderRadius:"50%",animation:"cv-spin 0.7s linear infinite"}})}function NI({size:e=48}){return a.jsx("span",{style:{width:e,height:e,borderRadius:14,background:"linear-gradient(135deg, #d90007, #ff4d4d)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 24px -6px rgba(217,0,7,0.4)",flexShrink:0,overflow:"hidden",border:"1px solid var(--border)"},children:a.jsx("img",{src:Ht.logoImage,alt:"",style:{width:"65%",height:"65%",objectFit:"contain"}})})}function Ea({label:e,type:t="text",value:n,onChange:r,placeholder:i,autoFocus:o,error:s}){const[l,c]=b.useState(!1),u=n&&n.length>0;return a.jsxs("div",{style:{position:"relative",marginBottom:4},children:[a.jsx("label",{style:{position:"absolute",left:16,top:l||u?10:"50%",transform:l||u?"translateY(0) scale(0.85)":"translateY(-50%)",transformOrigin:"left top",fontSize:l||u?12:15,fontWeight:500,color:l?"var(--cv-accent-blue)":s?"var(--cv-danger)":"var(--text-muted)",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",pointerEvents:"none",zIndex:1},children:e}),a.jsx("input",{type:t,value:n,onChange:r,onFocus:()=>c(!0),onBlur:()=>c(!1),autoFocus:o,placeholder:l?i:"",style:{width:"100%",padding:"26px 16px 10px",background:"rgba(0, 0, 0, 0.25)",border:`1px solid ${s?"var(--cv-danger)":l?"rgba(59,130,246,0.5)":"var(--border)"}`,borderRadius:"var(--cv-radius-lg)",color:"var(--text)",fontSize:15,outline:"none",transition:"all 0.2s ease",boxShadow:l?`0 0 0 4px ${s?"rgba(239,68,68,0.1)":"rgba(59,130,246,0.15)"}`:"none"}}),s&&a.jsx("div",{style:{fontSize:13,color:"var(--cv-danger)",marginTop:6,paddingLeft:4,fontWeight:500},children:s})]})}function DI({value:e,onChange:t}){const n=[b.useRef(),b.useRef(),b.useRef(),b.useRef(),b.useRef(),b.useRef()],r=(e+"      ").slice(0,6).split(""),i=(s,l)=>{var c,u;if(l.key==="Backspace"){if(r[s]!==" "){const d=r.map((h,f)=>f===s?" ":h).join("").trimEnd();t(d)}else if(s>0){(c=n[s-1].current)==null||c.focus();const d=r.map((h,f)=>f===s-1?" ":h).join("").trimEnd();t(d)}}else if(l.key>="0"&&l.key<="9"){l.preventDefault();const d=r.map((h,f)=>f===s?l.key:h).join("").replace(/ /g,"");t(d.slice(0,6)),s<5&&((u=n[s+1].current)==null||u.focus())}},o=s=>{var c;const l=s.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);l&&(t(l),(c=n[Math.min(l.length,5)].current)==null||c.focus())};return a.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",margin:"8px 0"},children:n.map((s,l)=>{var c,u,d,h;return a.jsx("input",{ref:s,type:"text",inputMode:"numeric",maxLength:1,value:((c=r[l])==null?void 0:c.trim())||"",onKeyDown:f=>i(l,f),onPaste:o,onChange:()=>{},style:{width:52,height:60,textAlign:"center",fontSize:24,fontWeight:800,background:"var(--bg-card)",border:`2px solid ${(u=r[l])!=null&&u.trim()?"var(--cv-accent)":"var(--border)"}`,borderRadius:14,color:"var(--text)",outline:"none",transition:"border-color 0.18s ease, transform 0.1s ease",transform:(d=r[l])!=null&&d.trim()?"scale(1.05)":"scale(1)",boxShadow:(h=r[l])!=null&&h.trim()?"0 0 0 3px rgba(99,102,241,0.15)":"none"}},l)})})}function MI({label:e,icon:t,onClick:n,disabled:r}){const[i,o]=b.useState(!1);return a.jsxs("button",{type:"button",onClick:n,disabled:r,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,width:"100%",padding:"12px 16px",minHeight:48,background:i?"rgba(0,183,79,.08)":"var(--bg-card)",border:i?"1px solid rgba(0,183,79,.35)":"1px solid var(--border)",borderRadius:14,cursor:r?"not-allowed":"pointer",color:"var(--text)",fontSize:14,fontWeight:700,transition:"all 0.2s ease",opacity:r?.5:1,boxShadow:i?"0 12px 28px rgba(0,0,0,.08)":"none"},children:[a.jsx("span",{style:{display:"flex",alignItems:"center"},children:t}),a.jsxs("span",{children:["Continue with ",e]})]})}function LI({password:e}){if(!e)return null;const t=[{label:"8+ chars",ok:e.length>=8},{label:"Uppercase",ok:/[A-Z]/.test(e)},{label:"Lowercase",ok:/[a-z]/.test(e)},{label:"Number",ok:/\d/.test(e)}],n=t.filter(i=>i.ok).length,r=["var(--cv-danger)","var(--cv-danger)","#f59e0b","#10b981"];return a.jsxs("div",{style:{marginTop:6},children:[a.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:[0,1,2,3].map(i=>a.jsx("div",{style:{flex:1,height:3,borderRadius:99,background:i<n?r[n-1]:"var(--border)",transition:"background 0.3s ease"}},i))}),a.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:t.map(i=>a.jsxs("span",{style:{fontSize:11,color:i.ok?"#10b981":"var(--text-muted)",fontWeight:500},children:[i.ok?"✔":"○"," ",i.label]},i.label))})]})}const K={LOGIN:"login",REGISTER:"register",FORGOT:"forgot",VERIFY_OTP:"verify_otp",RESET_PASSWORD:"reset_password"};function zI({onAuth:e,onBack:t,onNeedsVerification:n,initialMode:r="login"}){const[i,o]=b.useState(r==="login"?K.LOGIN:K.REGISTER),[s,l]=b.useState(!1),[c,u]=b.useState(""),[d,h]=b.useState(""),[f,p]=b.useState("forward"),[g,y]=b.useState(""),[w,m]=b.useState(""),[x,v]=b.useState(""),[k,j]=b.useState(""),[C,T]=b.useState(""),[E,A]=b.useState(""),[P,N]=b.useState(!0),[D,B]=b.useState(!1),[$,H]=b.useState(!1),[q,re]=b.useState(0),[M,U]=b.useState(null),[S,X]=b.useState(!1),[ne,_]=b.useState(0),ye="0x4AAAAAADkh2aePP5UGcXcH",Re=typeof window<"u"&&["localhost","127.0.0.1","::1"].includes(window.location.hostname),ve=!!(!(ye==null?void 0:ye.startsWith("1x"))||Re),At=$l();II();const[$e,Be]=b.useState({});b.useEffect(()=>{if(q<=0)return;const L=setTimeout(()=>re(R=>R-1),1e3);return()=>clearTimeout(L)},[q]);const ut=L=>{p("forward"),u(""),h(""),Be({}),o(L)},dt=()=>{p("back"),u(""),h(""),Be({}),i===K.REGISTER||i===K.FORGOT?o(K.LOGIN):i===K.VERIFY_OTP?o(K.FORGOT):i===K.RESET_PASSWORD?o(K.VERIFY_OTP):t==null||t()},rr=()=>{U(null),X(!1),_(L=>L+1)},ht=async()=>{var R,F;const L={};if(Eu(g)||(L.email="Enter a valid email address"),w||(L.password="Password is required"),Object.keys(L).length){Be(L);return}if(ve&&!S){u("Please complete the security check");return}l(!0),u("");try{const W=await st("/auth/login",{method:"POST",body:JSON.stringify({email:g,password:w,rememberMe:P,...ve&&{turnstileToken:M}})});if(!(W!=null&&W.accessToken))throw new Error("Login failed. Please try again.");const ie=P?localStorage:sessionStorage;ie.setItem("cv_token",W.accessToken),W.refreshToken&&ie.setItem("cv_refreshToken",W.refreshToken),ie.setItem("cv_user",((R=W.user)==null?void 0:R.fullName)||g),e(W.accessToken,W.refreshToken,((F=W.user)==null?void 0:F.fullName)||g,W.user,P)}catch(W){u(Yr(W.message)),rr()}l(!1)},nn=async()=>{const L={};if((!k||k.trim().length<2)&&(L.fullName="Full name must be at least 2 characters"),Eu(g)||(L.email="Enter a valid email address"),Zg(w)||(L.password="Password must be 8+ chars with uppercase, lowercase, and number"),w!==x&&(L.confirmPassword="Passwords do not match"),Object.keys(L).length){Be(L);return}if(ve&&!S){u("Please complete the security check");return}l(!0),u("");try{await st("/auth/register",{method:"POST",body:JSON.stringify({email:g,password:w,fullName:k,...ve&&{turnstileToken:M}})}),h("Account created! Check your email to verify your account, then sign in."),ut(K.LOGIN)}catch(R){u(Yr(R.message)),rr()}l(!1)},Wt=async()=>{if(!Eu(g)){Be({email:"Enter a valid email address"});return}if(ve&&!S){u("Please complete the security check");return}l(!0),u("");try{await st("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:g,...ve&&{turnstileToken:M}})}),re(60),ut(K.VERIFY_OTP),h("A 6-digit OTP has been sent to your email.")}catch(L){u(Yr(L.message)),rr()}l(!1)},Vr=async()=>{if(!(q>0)){l(!0),u("");try{await st("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:g})}),re(60),h("A new OTP has been sent.")}catch(L){u(Yr(L.message))}l(!1)}},Mn=async()=>{if(C.length!==6){u("Enter the 6-digit code from your email");return}l(!0),u("");try{const L=await st("/auth/verify-otp",{method:"POST",body:JSON.stringify({email:g,otp:C})});A(L.resetToken),ut(K.RESET_PASSWORD)}catch(L){u(Yr(L.message)),T("")}l(!1)},wt=async()=>{const L={};if(Zg(w)||(L.password="Password must be 8+ chars with uppercase, lowercase, and number"),w!==x&&(L.confirmPassword="Passwords do not match"),Object.keys(L).length){Be(L);return}l(!0),u("");try{await st("/auth/reset-password",{method:"POST",body:JSON.stringify({token:E,newPassword:w})}),h("Password reset successfully! Please sign in."),m(""),v(""),ut(K.LOGIN)}catch(R){u(Yr(R.message))}l(!1)},ir=async L=>{var R,F;if(!At){u("Social login is not available. Please use email and password.");return}l(!0),u("");try{const W=await PI(L);if(!(W!=null&&W.accessToken))throw new Error("Social login failed.");localStorage.setItem("cv_token",W.accessToken),W.refreshToken&&localStorage.setItem("cv_refreshToken",W.refreshToken),localStorage.setItem("cv_user",((R=W.user)==null?void 0:R.fullName)||g),e(W.accessToken,W.refreshToken,((F=W.user)==null?void 0:F.fullName)||g,W.user,!0)}catch(W){u(Yr(W.message))}l(!1)},Ln={[K.LOGIN]:{title:"Welcome back",sub:`Sign in to ${Ht.name}`},[K.REGISTER]:{title:"Create account",sub:"Start your CloudVault journey"},[K.FORGOT]:{title:"Forgot password?",sub:"We'll send a code to your email"},[K.VERIFY_OTP]:{title:"Enter your code",sub:`Sent to ${g||"your email"}`},[K.RESET_PASSWORD]:{title:"New password",sub:"Choose a strong password"}},kt=!s&&(!ve||S||i===K.VERIFY_OTP||i===K.RESET_PASSWORD),Qe=()=>{i===K.LOGIN?ht():i===K.REGISTER?nn():i===K.FORGOT?Wt():i===K.VERIFY_OTP?Mn():i===K.RESET_PASSWORD&&wt()},oe={[K.LOGIN]:"Sign in",[K.REGISTER]:"Create account",[K.FORGOT]:"Send code",[K.VERIFY_OTP]:"Verify code",[K.RESET_PASSWORD]:"Reset password"}[i];return a.jsxs("div",{className:"auth-splash",style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",position:"relative",background:"#050505",overflow:"hidden"},children:[a.jsx("style",{children:Zi}),a.jsx("style",{children:`
        :root {
          --cv-bg-card: rgba(20, 20, 20, 0.6);
          --cv-surface-raised: rgba(255, 255, 255, 0.03);
          --cv-border: rgba(255,255,255,0.1);
          --cv-border-strong: rgba(217,0,7,0.5);
          --cv-text: #ffffff;
          --cv-text-muted: #a1a1aa;
          --cv-text-secondary: #e4e4e7;
          --cv-accent: #d90007;
          --cv-accent-blue: #3b82f6;
          --cv-danger: #ef4444;
          --cv-radius-lg: 16px;
        }
        @keyframes cv-spin { to { transform: rotate(360deg); } }
        @keyframes cv-slide-in { 
          from { opacity: 0; transform: translateY(30px) scale(0.98); } 
          to { opacity: 1; transform: translateY(0) scale(1); } 
        }
        @keyframes cv-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes mesh-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .auth-background {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 15% 50%, rgba(217,0,7,0.15), transparent 25%),
                      radial-gradient(circle at 85% 30%, rgba(59,130,246,0.15), transparent 25%);
          background-size: 200% 200%;
          animation: mesh-gradient 15s ease infinite;
          z-index: 0;
          pointer-events: none;
        }
        .cv-auth-card { 
          animation: cv-slide-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          z-index: 10;
        }
        .cv-auth-step { animation: cv-fade 0.4s ease forwards; }
      `}),a.jsx("div",{className:"auth-background"}),a.jsxs("div",{className:"cv-auth-card",style:{width:"100%",maxWidth:440,background:"var(--bg-card)",borderRadius:24,border:"1px solid var(--border)",boxShadow:"0 40px 80px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",overflow:"hidden",position:"relative"},children:[a.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:120,background:"linear-gradient(180deg, rgba(217,0,7,0.08) 0%, transparent 100%)",pointerEvents:"none"}}),a.jsxs("div",{style:{padding:"40px 36px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:28,justifyContent:"center"},children:[a.jsx(NI,{size:36}),a.jsx("div",{style:{fontSize:18,fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em"},children:Ht.name})]}),i!==K.LOGIN&&a.jsx("button",{type:"button",onClick:dt,style:{display:"flex",alignItems:"center",gap:6,marginBottom:24,background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,padding:"4px 0",transition:"color 0.15s"},onMouseEnter:L=>L.currentTarget.style.color="var(--text)",onMouseLeave:L=>L.currentTarget.style.color="var(--text-muted)",children:"ΓåÉ Back"}),a.jsxs("div",{className:"cv-auth-step",style:{marginBottom:28},children:[a.jsx("h1",{style:{fontSize:26,fontWeight:800,color:"var(--text)",letterSpacing:"-0.03em",margin:"0 0 4px"},children:Ln[i].title}),a.jsx("p",{style:{fontSize:14,color:"var(--text-muted)",margin:0,fontWeight:500},children:Ln[i].sub})]}),(i===K.LOGIN||i===K.REGISTER)&&a.jsx("div",{style:{display:"flex",gap:4,background:"var(--surface-raised)",borderRadius:14,padding:4,marginBottom:24,border:"1px solid var(--border)"},children:[K.LOGIN,K.REGISTER].map(L=>a.jsx("button",{type:"button",onClick:()=>ut(L),style:{flex:1,padding:"9px 12px",borderRadius:10,border:"none",background:i===L?"var(--bg-card)":"transparent",color:i===L?"var(--text)":"var(--text-muted)",fontSize:14,fontWeight:i===L?700:500,cursor:"pointer",boxShadow:i===L?"0 2px 8px rgba(0,0,0,0.08)":"none",transition:"all 0.18s ease"},children:L===K.LOGIN?"Sign In":"Sign Up"},L))}),a.jsxs("div",{className:"cv-auth-step",style:{display:"flex",flexDirection:"column",gap:14},children:[i===K.REGISTER&&a.jsx(Ea,{label:"Full Name",value:k,onChange:L=>{j(L.target.value),Be(R=>({...R,fullName:""}))},placeholder:"Jane Smith",autoFocus:!0,error:$e.fullName}),[K.LOGIN,K.REGISTER,K.FORGOT].includes(i)&&a.jsx(Ea,{label:"Email Address",type:"email",value:g,onChange:L=>{y(L.target.value),Be(R=>({...R,email:""}))},placeholder:"you@example.com",autoFocus:i===K.LOGIN||i===K.FORGOT,error:$e.email}),[K.LOGIN,K.REGISTER,K.RESET_PASSWORD].includes(i)&&a.jsxs("div",{children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsx(Ea,{label:"Password",type:D?"text":"password",value:w,onChange:L=>{m(L.target.value),Be(R=>({...R,password:""}))},placeholder:i===K.LOGIN?"Your password":"Min 8 chars, A-Z, 0-9",autoFocus:i===K.RESET_PASSWORD,error:$e.password}),a.jsx("button",{type:"button",onClick:()=>B(L=>!L),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:$e.password?-10:0},children:D?"Hide":"Show"})]}),(i===K.REGISTER||i===K.RESET_PASSWORD)&&a.jsx(LI,{password:w})]}),[K.REGISTER,K.RESET_PASSWORD].includes(i)&&a.jsxs("div",{style:{position:"relative"},children:[a.jsx(Ea,{label:"Confirm Password",type:$?"text":"password",value:x,onChange:L=>{v(L.target.value),Be(R=>({...R,confirmPassword:""}))},placeholder:"Repeat your password",error:$e.confirmPassword}),a.jsx("button",{type:"button",onClick:()=>H(L=>!L),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:$e.confirmPassword?-10:0},children:$?"Hide":"Show"})]}),i===K.VERIFY_OTP&&a.jsxs("div",{children:[a.jsx(DI,{value:C,onChange:T}),a.jsxs("div",{style:{textAlign:"center",marginTop:12},children:[a.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:["Didn't get the code?"," "]}),a.jsx("button",{type:"button",onClick:Vr,disabled:q>0||s,style:{background:"none",border:"none",cursor:q>0?"default":"pointer",color:q>0?"var(--text-muted)":"var(--accent-blue)",fontSize:13,fontWeight:600},children:q>0?`Resend in ${q}s`:"Resend"})]})]}),i===K.LOGIN&&a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},children:[a.jsx("input",{type:"checkbox",checked:P,onChange:L=>N(L.target.checked),style:{width:16,height:16,accentColor:"var(--accent-blue)"}}),a.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:500},children:"Remember me"})]}),a.jsx("button",{type:"button",onClick:()=>ut(K.FORGOT),style:{background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:13,fontWeight:600},children:"Forgot password?"})]})]}),c&&a.jsxs("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:12,color:"#ef4444",fontSize:13,fontWeight:500,lineHeight:1.5},children:[c,c.includes("verify your email")&&a.jsx("button",{type:"button",onClick:async()=>{try{await st("/auth/resend-verification",{method:"POST",body:JSON.stringify({email:g})}),h("Verification email resent. Check your inbox."),u("")}catch{}},style:{display:"block",marginTop:8,background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:12,fontWeight:600},children:"Resend verification email ΓåÆ"})]}),d&&a.jsx("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:12,color:"#10b981",fontSize:13,fontWeight:500,lineHeight:1.5},children:d}),ve&&[K.LOGIN,K.REGISTER,K.FORGOT].includes(i)&&a.jsx("div",{style:{marginTop:16},children:a.jsx(RI,{onVerified:L=>{U(L),X(!0)},onError:L=>{u(L||"Security check failed. Please refresh."),X(!1)},onExpire:()=>{U(null),X(!1)}},ne)}),a.jsx("button",{type:"button",onClick:Qe,disabled:!kt,style:{width:"100%",marginTop:24,padding:"16px 20px",background:kt?"linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)":"rgba(255, 255, 255, 0.05)",color:kt?"#fff":"var(--text-muted)",border:kt?"none":"1px solid rgba(255,255,255,0.05)",borderRadius:14,fontSize:16,fontWeight:600,cursor:kt?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:kt?"0 8px 24px -6px rgba(59,130,246,0.5), inset 0 1px 0 rgba(255,255,255,0.2)":"none"},onMouseEnter:L=>{kt&&(L.currentTarget.style.transform="translateY(-2px)")},onMouseLeave:L=>{L.currentTarget.style.transform="translateY(0)"},children:s?a.jsx(AI,{}):oe}),[K.LOGIN,K.REGISTER].includes(i)&&a.jsxs("div",{style:{marginTop:20},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[a.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),a.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:"or"}),a.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[{id:"google",label:"Google",icon:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),a.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),a.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),a.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})},{id:"github",label:"GitHub",icon:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})})},{id:"microsoft",label:"Microsoft",icon:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M10 0H0v10h10V0z",fill:"#F25022"}),a.jsx("path",{d:"M21 0H11v10h10V0z",fill:"#7FBA00"}),a.jsx("path",{d:"M10 11H0v10h10V11z",fill:"#00A4EF"}),a.jsx("path",{d:"M21 11H11v10h10V11z",fill:"#FFB900"})]})}].map(L=>a.jsx(MI,{label:L.label,icon:L.icon,disabled:s||!At,onClick:()=>ir(L.id)},L.id))})]}),i===K.LOGIN&&a.jsx("div",{style:{textAlign:"center",marginTop:20},children:a.jsx("button",{type:"button",onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:500},children:"ΓåÉ Back to home"})})]})]})]})}function OI({file:e,token:t}){const[n,r]=b.useState([]),[i,o]=b.useState(!0),[s,l]=b.useState(""),[c,u]=b.useState(!1),[d,h]=b.useState(""),f=async()=>{try{const y=await st(`/comments/${e.id}`,{},t);r(y.data||[])}catch{h("Failed to load comments")}finally{o(!1)}};b.useEffect(()=>{f()},[e.id]);const p=async y=>{if(y.preventDefault(),!!s.trim()){u(!0);try{const w=await st(`/comments/${e.id}`,{method:"POST",body:JSON.stringify({content:s})},t);r([w.data,...n]),l("")}catch{h("Failed to post comment")}finally{u(!1)}}},g=async y=>{if(window.confirm("Delete this comment?"))try{await st(`/comments/${y}`,{method:"DELETE"},t),r(n.filter(w=>w.id!==y))}catch{alert("Failed to delete comment")}};return localStorage.getItem("cv_userId")||sessionStorage.getItem("cv_userId"),a.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",width:320,borderLeft:"1px solid var(--border)",background:"var(--bg-card)"},children:[a.jsx("div",{style:{padding:"16px",borderBottom:"1px solid var(--border)"},children:a.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:700},children:"Comments"})}),a.jsx("div",{style:{flex:1,overflowY:"auto",padding:"16px"},children:i?a.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading comments..."}):n.length===0?a.jsx("p",{style:{color:"var(--text-muted)",textAlign:"center",marginTop:20},children:"No comments yet. Be the first to start the discussion!"}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:n.map(y=>{var w,m,x,v,k,j,C;return a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"var(--accent)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:"bold"},children:((m=(w=y.user)==null?void 0:w.fullName)==null?void 0:m[0])||((k=(v=(x=y.user)==null?void 0:x.email)==null?void 0:v[0])==null?void 0:k.toUpperCase())||"?"}),a.jsxs("div",{style:{flex:1},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[a.jsx("span",{style:{fontWeight:600,fontSize:13},children:((j=y.user)==null?void 0:j.fullName)||((C=y.user)==null?void 0:C.email.split("@")[0])}),a.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:wo(y.createdAt)})]}),a.jsx("p",{style:{fontSize:13,marginTop:4,marginBottom:4,lineHeight:1.4,wordBreak:"break-word"},children:y.content}),a.jsx("button",{onClick:()=>g(y.id),style:{background:"none",border:"none",color:"var(--danger)",fontSize:11,cursor:"pointer",padding:0,opacity:.7},children:"Delete"})]})]},y.id)})})}),a.jsxs("div",{style:{padding:"16px",borderTop:"1px solid var(--border)"},children:[d&&a.jsx("p",{style:{color:"var(--danger)",fontSize:12,marginBottom:8},children:d}),a.jsxs("form",{onSubmit:p,style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx("textarea",{value:s,onChange:y=>l(y.target.value),placeholder:"Add a comment...",style:{width:"100%",minHeight:80,padding:12,borderRadius:8,background:"var(--bg-primary)",border:"1px solid var(--border)",color:"var(--text)",resize:"none",fontFamily:"var(--font)"}}),a.jsx("button",{type:"submit",disabled:c||!s.trim(),className:"btn-primary",style:{padding:"8px 16px",alignSelf:"flex-end",opacity:c||!s.trim()?.5:1},children:c?"Posting...":"Post"})]})]})]})}function FI({size:e=22}){return a.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function jb({file:e,token:t,onClose:n,customFetchBlob:r}){const[i,o]=b.useState(null),[s,l]=b.useState(""),[c,u]=b.useState(!0),[d,h]=b.useState(""),[f,p]=b.useState(1),[g,y]=b.useState(0),[w,m]=b.useState(!1),[x,v]=b.useState(!1),k=A_(e.mimeType);b.useEffect(()=>{let T=null,E=!1;return(async()=>{u(!0),h("");try{const A=r?await r():await kc(e.id,t,{disposition:"preview"});if(E)return;if(k==="text"){const P=await A.text();l(P)}else T=URL.createObjectURL(A),o(T)}catch(A){E||h(A.message||"Preview failed")}finally{E||u(!1)}})(),()=>{E=!0,T&&URL.revokeObjectURL(T)}},[e.id,t,k]);const j=(T,E,A=!1)=>a.jsx("button",{type:"button",onClick:E,disabled:A,style:{padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",cursor:A?"not-allowed":"pointer",fontFamily:"var(--font)",fontSize:12,fontWeight:600},children:T}),C=()=>c?a.jsx("div",{style:{padding:48,textAlign:"center"},children:a.jsx(FI,{size:32})}):d?a.jsx("p",{style:{color:"var(--danger)",padding:24,textAlign:"center"},children:d}):k==="image"&&i?a.jsx("img",{src:i,alt:e.name,style:{maxWidth:w?"96vw":"80vw",maxHeight:w?"90vh":"70vh",borderRadius:12,transform:`scale(${f}) rotate(${g}deg)`,transition:"transform .2s ease"}}):k==="pdf"&&i?a.jsx("iframe",{src:i,title:e.name,style:{width:"75vw",height:"75vh",border:"none",borderRadius:12}}):k==="video"&&i?a.jsx("video",{src:i,controls:!0,style:{maxWidth:"80vw",maxHeight:"75vh",borderRadius:12}}):k==="audio"&&i?a.jsx("audio",{src:i,controls:!0,style:{width:"min(480px, 80vw)"}}):k==="text"?a.jsx("pre",{style:{maxWidth:"80vw",maxHeight:"70vh",overflow:"auto",padding:16,background:"var(--bg-card)",borderRadius:12,color:"var(--text)",fontSize:13,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:s}):a.jsx("p",{style:{padding:24,color:"var(--text-muted)"},children:"Preview not available for this file type."});return a.jsx("div",{onClick:n,style:{position:"fixed",inset:0,zIndex:1e3,background:w?"#000":"rgba(0,0,0,.88)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)",animation:"fadeIn .2s ease"},children:a.jsxs("div",{onClick:T=>T.stopPropagation(),style:{background:w?"transparent":"var(--bg-primary)",borderRadius:w?0:20,border:w?"none":"1.5px solid var(--border)",maxWidth:w?"100vw":"95vw",maxHeight:w?"100vh":"95vh",width:w?"100%":void 0,height:w?"100%":void 0,overflow:"auto",padding:w?16:24,boxShadow:w?"none":"var(--shadow)",display:"flex",flexDirection:"row"},children:[a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",padding:w?16:24,overflow:"hidden"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:12},children:[a.jsx("div",{style:{color:"var(--text)",fontWeight:700,fontSize:16,flex:1,overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),k==="image"&&a.jsxs("div",{style:{display:"flex",gap:6},children:[j("−",()=>p(T=>Math.max(.25,T-.25))),j("+",()=>p(T=>Math.min(4,T+.25))),j("↻",()=>y(T=>(T+90)%360)),j(w?"⊡":"⛶",()=>m(T=>!T))]}),j("💬 Comments",()=>v(T=>!T)),a.jsx("button",{type:"button",onClick:n,style:{background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:8,color:"var(--text-secondary)",cursor:"pointer",width:32,height:32},children:"✕"})]}),a.jsx("div",{style:{display:"flex",justifyContent:"center",flex:1,overflow:"auto"},children:C()})]}),x&&!w&&a.jsx(OI,{file:e,token:t})]})})}function BI({fileId:e,token:t,alt:n,mimeType:r}){const[i,o]=b.useState(null),[s,l]=b.useState(!1);return b.useEffect(()=>{if(!e||!t||!(r!=null&&r.startsWith("image/")))return;let c=null,u=!1;return kc(e,t,{disposition:"preview"}).then(d=>{u||(c=URL.createObjectURL(d),o(c))}).catch(()=>{u||l(!0)}),()=>{u=!0,c&&URL.revokeObjectURL(c)}},[e,t,r]),!(r!=null&&r.startsWith("image/"))||s?a.jsx("div",{style:{fontSize:44,display:"flex"},children:Ys(r)}):i?a.jsx("img",{src:i,alt:n,style:{width:"100%",height:"100%",objectFit:"cover"},onError:()=>l(!0)}):a.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite"}})}function VI({trashedFiles:e,trashedFolders:t,loading:n,onRestoreFile:r,onRestoreFolder:i,onPermanentDelete:o,onEmptyTrash:s,onBack:l}){return a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[a.jsxs("div",{children:[a.jsx("button",{type:"button",onClick:l,style:UI,children:"← Back to My Cloud"}),a.jsx("h2",{style:{color:"var(--text)",fontWeight:800,fontSize:22,marginTop:8},children:"Trash"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"Items in trash still count toward storage until permanently deleted."})]}),(e.length>0||t.length>0)&&a.jsx("button",{type:"button",onClick:s,style:WI,children:"Empty trash"})]}),n?a.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading trash…"}):e.length===0&&t.length===0?a.jsxs("div",{style:{textAlign:"center",padding:64,color:"var(--text-muted)",border:"1px dashed var(--border)",borderRadius:16},children:[a.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🗑️"}),a.jsx("div",{style:{fontWeight:700},children:"Trash is empty"})]}):a.jsxs(a.Fragment,{children:[t.length>0&&a.jsxs("section",{style:{marginBottom:24},children:[a.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FOLDERS"}),t.map(c=>a.jsx(e0,{icon:"📁",name:c.name,meta:"Folder",onRestore:()=>i(c.id)},c.id))]}),e.length>0&&a.jsxs("section",{children:[a.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FILES"}),e.map(c=>a.jsx(e0,{icon:Ys(c.mimeType),name:c.name,meta:`${qe(c.size)} · ${wo(c.trashedAt||c.deletedAt)}`,onRestore:()=>r(c.id),onDelete:()=>o(c)},c.id))]})]})]})}function e0({icon:e,name:t,meta:n,onRestore:r,onDelete:i}){return a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,marginBottom:8},children:[a.jsx("span",{style:{fontSize:24},children:e}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t}),a.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:n})]}),a.jsx("button",{type:"button",onClick:r,style:t0,children:"Restore"}),i&&a.jsx("button",{type:"button",onClick:i,style:{...t0,color:"var(--danger)"},children:"Delete forever"})]})}const UI={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"},WI={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--danger)",color:"var(--text)",fontWeight:700,cursor:"pointer",fontFamily:"var(--font)"},t0={padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--font)"};function $I({value:e,onChange:t,folders:n,disabledId:r}){const[i,o]=b.useState(!1),s=n.find(c=>c.id===e),l=s?"—".repeat(s.depth)+" "+s.name:"My Cloud (root)";return a.jsxs("div",{style:{position:"relative",marginTop:6,marginBottom:16},children:[a.jsxs("button",{type:"button",onClick:()=>o(!i),style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)",fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",textAlign:"left"},children:[a.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l}),a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{flexShrink:0,transform:i?"rotate(180deg)":"none",transition:"0.2s",opacity:.5},children:a.jsx("path",{d:"M6 9l6 6 6-6"})})]}),i&&a.jsxs(a.Fragment,{children:[a.jsx("div",{onClick:()=>o(!1),style:{position:"fixed",inset:0,zIndex:90}}),a.jsxs("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,maxHeight:220,overflowY:"auto",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"0 12px 40px rgba(0,0,0,0.35)",zIndex:91,animation:"fadeIn 0.15s ease"},children:[a.jsxs("button",{onClick:()=>{t(""),o(!1)},style:{display:"block",width:"100%",padding:"10px 14px",border:"none",background:e===""?"rgba(59,130,246,0.12)":"transparent",color:"var(--text)",fontFamily:"var(--font)",fontSize:13,fontWeight:e===""?600:500,cursor:"pointer",textAlign:"left"},children:["📁 My Cloud (root)",e===""&&a.jsx("span",{style:{marginLeft:8,color:"var(--accent-blue)"},children:"✓"})]}),n.map(c=>a.jsxs("button",{disabled:c.id===r,onClick:()=>{t(c.id),o(!1)},style:{display:"block",width:"100%",padding:"10px 14px",paddingLeft:14+c.depth*16,border:"none",background:c.id===e?"rgba(59,130,246,0.12)":"transparent",color:c.id===r?"var(--text-muted)":"var(--text)",fontFamily:"var(--font)",fontSize:13,fontWeight:c.id===e?600:500,cursor:c.id===r?"not-allowed":"pointer",textAlign:"left",opacity:c.id===r?.4:1},children:["📁 ","—".repeat(c.depth)," ",c.name,c.id===e&&a.jsx("span",{style:{marginLeft:8,color:"var(--accent-blue)"},children:"✓"})]},c.id))]})]})]})}function HI({file:e,mode:t,folders:n,currentFolderId:r,onConfirm:i,onCancel:o}){const[s,l]=b.useState(r||""),[c,u]=b.useState(e.name),d=Tb(n);return a.jsx("div",{onClick:o,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:a.jsxs("div",{onClick:h=>h.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(420px, 92vw)",animation:"scaleIn .2s ease"},children:[a.jsxs("h3",{style:{color:"var(--text)",fontWeight:700,fontSize:18,marginBottom:8},children:[t==="move"?"Move":"Copy"," file"]}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:20},children:e.name}),a.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"Destination folder"}),a.jsx($I,{value:s,onChange:l,folders:d,disabledId:e.folderId}),t==="copy"&&a.jsxs(a.Fragment,{children:[a.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"New name (optional)"}),a.jsx("input",{value:c,onChange:h=>u(h.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"}})]}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[a.jsx("button",{type:"button",onClick:o,style:Ib,children:"Cancel"}),a.jsx("button",{type:"button",onClick:()=>i({targetFolderId:s||null,newName:t==="copy"?c:void 0}),style:GI,children:t==="move"?"Move":"Copy"})]})]})})}function Tb(e,t=0){var r;const n=[];for(const i of e)n.push({...i,depth:t}),(r=i.children)!=null&&r.length&&n.push(...Tb(i.children,t+1));return n}const Ib={padding:"10px 20px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},GI={...Ib,border:"none",background:"var(--accent)",color:"var(--text)"};function YI({file:e,allTags:t,onSave:n,onCancel:r}){const[i,o]=b.useState(e.tags||[]),[s,l]=b.useState(""),c=u=>{const d=u.trim().toLowerCase();!d||i.includes(d)||i.length>=20||(o([...i,d]),l(""))};return a.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:a.jsxs("div",{onClick:u=>u.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(440px, 92vw)"},children:[a.jsx("h3",{style:{color:"var(--text)",fontWeight:700,marginBottom:4},children:"Edit tags"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:16},children:e.name}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12},children:i.map(u=>a.jsxs("span",{style:{background:"rgba(240,22,58,.15)",color:"var(--accent)",padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[u,a.jsx("button",{type:"button",onClick:()=>o(i.filter(d=>d!==u)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:"×"})]},u))}),a.jsx("input",{value:s,onChange:u=>l(u.target.value),onKeyDown:u=>{u.key==="Enter"&&(u.preventDefault(),c(s))},placeholder:"Add tag and press Enter",style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",marginBottom:12}}),t.length>0&&a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6},children:"Suggestions"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:t.filter(u=>!i.includes(u)).slice(0,12).map(u=>a.jsxs("button",{type:"button",onClick:()=>c(u),style:{padding:"4px 10px",borderRadius:20,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",fontSize:12,cursor:"pointer"},children:["+ ",u]},u))})]}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[a.jsx("button",{type:"button",onClick:r,style:Pb,children:"Cancel"}),a.jsx("button",{type:"button",onClick:()=>n(i),style:KI,children:"Save tags"})]})]})})}const Pb={padding:"10px 18px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},KI={...Pb,border:"none",background:"var(--accent)",color:"var(--text)"};var qI=Object.defineProperty,Hl=Object.getOwnPropertySymbols,Rb=Object.prototype.hasOwnProperty,Ab=Object.prototype.propertyIsEnumerable,n0=(e,t,n)=>t in e?qI(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lh=(e,t)=>{for(var n in t||(t={}))Rb.call(t,n)&&n0(e,n,t[n]);if(Hl)for(var n of Hl(t))Ab.call(t,n)&&n0(e,n,t[n]);return e},ch=(e,t)=>{var n={};for(var r in e)Rb.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Hl)for(var r of Hl(e))t.indexOf(r)<0&&Ab.call(e,r)&&(n[r]=e[r]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var xi;(e=>{const t=class se{constructor(c,u,d,h){if(this.version=c,this.errorCorrectionLevel=u,this.modules=[],this.isFunction=[],c<se.MIN_VERSION||c>se.MAX_VERSION)throw new RangeError("Version value out of range");if(h<-1||h>7)throw new RangeError("Mask value out of range");this.size=c*4+17;let f=[];for(let g=0;g<this.size;g++)f.push(!1);for(let g=0;g<this.size;g++)this.modules.push(f.slice()),this.isFunction.push(f.slice());this.drawFunctionPatterns();const p=this.addEccAndInterleave(d);if(this.drawCodewords(p),h==-1){let g=1e9;for(let y=0;y<8;y++){this.applyMask(y),this.drawFormatBits(y);const w=this.getPenaltyScore();w<g&&(h=y,g=w),this.applyMask(y)}}i(0<=h&&h<=7),this.mask=h,this.applyMask(h),this.drawFormatBits(h),this.isFunction=[]}static encodeText(c,u){const d=e.QrSegment.makeSegments(c);return se.encodeSegments(d,u)}static encodeBinary(c,u){const d=e.QrSegment.makeBytes(c);return se.encodeSegments([d],u)}static encodeSegments(c,u,d=1,h=40,f=-1,p=!0){if(!(se.MIN_VERSION<=d&&d<=h&&h<=se.MAX_VERSION)||f<-1||f>7)throw new RangeError("Invalid value");let g,y;for(g=d;;g++){const v=se.getNumDataCodewords(g,u)*8,k=s.getTotalBits(c,g);if(k<=v){y=k;break}if(g>=h)throw new RangeError("Data too long")}for(const v of[se.Ecc.MEDIUM,se.Ecc.QUARTILE,se.Ecc.HIGH])p&&y<=se.getNumDataCodewords(g,v)*8&&(u=v);let w=[];for(const v of c){n(v.mode.modeBits,4,w),n(v.numChars,v.mode.numCharCountBits(g),w);for(const k of v.getData())w.push(k)}i(w.length==y);const m=se.getNumDataCodewords(g,u)*8;i(w.length<=m),n(0,Math.min(4,m-w.length),w),n(0,(8-w.length%8)%8,w),i(w.length%8==0);for(let v=236;w.length<m;v^=253)n(v,8,w);let x=[];for(;x.length*8<w.length;)x.push(0);return w.forEach((v,k)=>x[k>>>3]|=v<<7-(k&7)),new se(g,u,x,f)}getModule(c,u){return 0<=c&&c<this.size&&0<=u&&u<this.size&&this.modules[u][c]}getModules(){return this.modules}drawFunctionPatterns(){for(let d=0;d<this.size;d++)this.setFunctionModule(6,d,d%2==0),this.setFunctionModule(d,6,d%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const c=this.getAlignmentPatternPositions(),u=c.length;for(let d=0;d<u;d++)for(let h=0;h<u;h++)d==0&&h==0||d==0&&h==u-1||d==u-1&&h==0||this.drawAlignmentPattern(c[d],c[h]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(c){const u=this.errorCorrectionLevel.formatBits<<3|c;let d=u;for(let f=0;f<10;f++)d=d<<1^(d>>>9)*1335;const h=(u<<10|d)^21522;i(h>>>15==0);for(let f=0;f<=5;f++)this.setFunctionModule(8,f,r(h,f));this.setFunctionModule(8,7,r(h,6)),this.setFunctionModule(8,8,r(h,7)),this.setFunctionModule(7,8,r(h,8));for(let f=9;f<15;f++)this.setFunctionModule(14-f,8,r(h,f));for(let f=0;f<8;f++)this.setFunctionModule(this.size-1-f,8,r(h,f));for(let f=8;f<15;f++)this.setFunctionModule(8,this.size-15+f,r(h,f));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let c=this.version;for(let d=0;d<12;d++)c=c<<1^(c>>>11)*7973;const u=this.version<<12|c;i(u>>>18==0);for(let d=0;d<18;d++){const h=r(u,d),f=this.size-11+d%3,p=Math.floor(d/3);this.setFunctionModule(f,p,h),this.setFunctionModule(p,f,h)}}drawFinderPattern(c,u){for(let d=-4;d<=4;d++)for(let h=-4;h<=4;h++){const f=Math.max(Math.abs(h),Math.abs(d)),p=c+h,g=u+d;0<=p&&p<this.size&&0<=g&&g<this.size&&this.setFunctionModule(p,g,f!=2&&f!=4)}}drawAlignmentPattern(c,u){for(let d=-2;d<=2;d++)for(let h=-2;h<=2;h++)this.setFunctionModule(c+h,u+d,Math.max(Math.abs(h),Math.abs(d))!=1)}setFunctionModule(c,u,d){this.modules[u][c]=d,this.isFunction[u][c]=!0}addEccAndInterleave(c){const u=this.version,d=this.errorCorrectionLevel;if(c.length!=se.getNumDataCodewords(u,d))throw new RangeError("Invalid argument");const h=se.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][u],f=se.ECC_CODEWORDS_PER_BLOCK[d.ordinal][u],p=Math.floor(se.getNumRawDataModules(u)/8),g=h-p%h,y=Math.floor(p/h);let w=[];const m=se.reedSolomonComputeDivisor(f);for(let v=0,k=0;v<h;v++){let j=c.slice(k,k+y-f+(v<g?0:1));k+=j.length;const C=se.reedSolomonComputeRemainder(j,m);v<g&&j.push(0),w.push(j.concat(C))}let x=[];for(let v=0;v<w[0].length;v++)w.forEach((k,j)=>{(v!=y-f||j>=g)&&x.push(k[v])});return i(x.length==p),x}drawCodewords(c){if(c.length!=Math.floor(se.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let u=0;for(let d=this.size-1;d>=1;d-=2){d==6&&(d=5);for(let h=0;h<this.size;h++)for(let f=0;f<2;f++){const p=d-f,y=(d+1&2)==0?this.size-1-h:h;!this.isFunction[y][p]&&u<c.length*8&&(this.modules[y][p]=r(c[u>>>3],7-(u&7)),u++)}}i(u==c.length*8)}applyMask(c){if(c<0||c>7)throw new RangeError("Mask value out of range");for(let u=0;u<this.size;u++)for(let d=0;d<this.size;d++){let h;switch(c){case 0:h=(d+u)%2==0;break;case 1:h=u%2==0;break;case 2:h=d%3==0;break;case 3:h=(d+u)%3==0;break;case 4:h=(Math.floor(d/3)+Math.floor(u/2))%2==0;break;case 5:h=d*u%2+d*u%3==0;break;case 6:h=(d*u%2+d*u%3)%2==0;break;case 7:h=((d+u)%2+d*u%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[u][d]&&h&&(this.modules[u][d]=!this.modules[u][d])}}getPenaltyScore(){let c=0;for(let f=0;f<this.size;f++){let p=!1,g=0,y=[0,0,0,0,0,0,0];for(let w=0;w<this.size;w++)this.modules[f][w]==p?(g++,g==5?c+=se.PENALTY_N1:g>5&&c++):(this.finderPenaltyAddHistory(g,y),p||(c+=this.finderPenaltyCountPatterns(y)*se.PENALTY_N3),p=this.modules[f][w],g=1);c+=this.finderPenaltyTerminateAndCount(p,g,y)*se.PENALTY_N3}for(let f=0;f<this.size;f++){let p=!1,g=0,y=[0,0,0,0,0,0,0];for(let w=0;w<this.size;w++)this.modules[w][f]==p?(g++,g==5?c+=se.PENALTY_N1:g>5&&c++):(this.finderPenaltyAddHistory(g,y),p||(c+=this.finderPenaltyCountPatterns(y)*se.PENALTY_N3),p=this.modules[w][f],g=1);c+=this.finderPenaltyTerminateAndCount(p,g,y)*se.PENALTY_N3}for(let f=0;f<this.size-1;f++)for(let p=0;p<this.size-1;p++){const g=this.modules[f][p];g==this.modules[f][p+1]&&g==this.modules[f+1][p]&&g==this.modules[f+1][p+1]&&(c+=se.PENALTY_N2)}let u=0;for(const f of this.modules)u=f.reduce((p,g)=>p+(g?1:0),u);const d=this.size*this.size,h=Math.ceil(Math.abs(u*20-d*10)/d)-1;return i(0<=h&&h<=9),c+=h*se.PENALTY_N4,i(0<=c&&c<=2568888),c}getAlignmentPatternPositions(){if(this.version==1)return[];{const c=Math.floor(this.version/7)+2,u=this.version==32?26:Math.ceil((this.version*4+4)/(c*2-2))*2;let d=[6];for(let h=this.size-7;d.length<c;h-=u)d.splice(1,0,h);return d}}static getNumRawDataModules(c){if(c<se.MIN_VERSION||c>se.MAX_VERSION)throw new RangeError("Version number out of range");let u=(16*c+128)*c+64;if(c>=2){const d=Math.floor(c/7)+2;u-=(25*d-10)*d-55,c>=7&&(u-=36)}return i(208<=u&&u<=29648),u}static getNumDataCodewords(c,u){return Math.floor(se.getNumRawDataModules(c)/8)-se.ECC_CODEWORDS_PER_BLOCK[u.ordinal][c]*se.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][c]}static reedSolomonComputeDivisor(c){if(c<1||c>255)throw new RangeError("Degree out of range");let u=[];for(let h=0;h<c-1;h++)u.push(0);u.push(1);let d=1;for(let h=0;h<c;h++){for(let f=0;f<u.length;f++)u[f]=se.reedSolomonMultiply(u[f],d),f+1<u.length&&(u[f]^=u[f+1]);d=se.reedSolomonMultiply(d,2)}return u}static reedSolomonComputeRemainder(c,u){let d=u.map(h=>0);for(const h of c){const f=h^d.shift();d.push(0),u.forEach((p,g)=>d[g]^=se.reedSolomonMultiply(p,f))}return d}static reedSolomonMultiply(c,u){if(c>>>8||u>>>8)throw new RangeError("Byte out of range");let d=0;for(let h=7;h>=0;h--)d=d<<1^(d>>>7)*285,d^=(u>>>h&1)*c;return i(d>>>8==0),d}finderPenaltyCountPatterns(c){const u=c[1];i(u<=this.size*3);const d=u>0&&c[2]==u&&c[3]==u*3&&c[4]==u&&c[5]==u;return(d&&c[0]>=u*4&&c[6]>=u?1:0)+(d&&c[6]>=u*4&&c[0]>=u?1:0)}finderPenaltyTerminateAndCount(c,u,d){return c&&(this.finderPenaltyAddHistory(u,d),u=0),u+=this.size,this.finderPenaltyAddHistory(u,d),this.finderPenaltyCountPatterns(d)}finderPenaltyAddHistory(c,u){u[0]==0&&(c+=this.size),u.pop(),u.unshift(c)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;function n(l,c,u){if(c<0||c>31||l>>>c)throw new RangeError("Value out of range");for(let d=c-1;d>=0;d--)u.push(l>>>d&1)}function r(l,c){return(l>>>c&1)!=0}function i(l){if(!l)throw new Error("Assertion error")}const o=class Me{constructor(c,u,d){if(this.mode=c,this.numChars=u,this.bitData=d,u<0)throw new RangeError("Invalid argument");this.bitData=d.slice()}static makeBytes(c){let u=[];for(const d of c)n(d,8,u);return new Me(Me.Mode.BYTE,c.length,u)}static makeNumeric(c){if(!Me.isNumeric(c))throw new RangeError("String contains non-numeric characters");let u=[];for(let d=0;d<c.length;){const h=Math.min(c.length-d,3);n(parseInt(c.substring(d,d+h),10),h*3+1,u),d+=h}return new Me(Me.Mode.NUMERIC,c.length,u)}static makeAlphanumeric(c){if(!Me.isAlphanumeric(c))throw new RangeError("String contains unencodable characters in alphanumeric mode");let u=[],d;for(d=0;d+2<=c.length;d+=2){let h=Me.ALPHANUMERIC_CHARSET.indexOf(c.charAt(d))*45;h+=Me.ALPHANUMERIC_CHARSET.indexOf(c.charAt(d+1)),n(h,11,u)}return d<c.length&&n(Me.ALPHANUMERIC_CHARSET.indexOf(c.charAt(d)),6,u),new Me(Me.Mode.ALPHANUMERIC,c.length,u)}static makeSegments(c){return c==""?[]:Me.isNumeric(c)?[Me.makeNumeric(c)]:Me.isAlphanumeric(c)?[Me.makeAlphanumeric(c)]:[Me.makeBytes(Me.toUtf8ByteArray(c))]}static makeEci(c){let u=[];if(c<0)throw new RangeError("ECI assignment value out of range");if(c<128)n(c,8,u);else if(c<16384)n(2,2,u),n(c,14,u);else if(c<1e6)n(6,3,u),n(c,21,u);else throw new RangeError("ECI assignment value out of range");return new Me(Me.Mode.ECI,0,u)}static isNumeric(c){return Me.NUMERIC_REGEX.test(c)}static isAlphanumeric(c){return Me.ALPHANUMERIC_REGEX.test(c)}getData(){return this.bitData.slice()}static getTotalBits(c,u){let d=0;for(const h of c){const f=h.mode.numCharCountBits(u);if(h.numChars>=1<<f)return 1/0;d+=4+f+h.bitData.length}return d}static toUtf8ByteArray(c){c=encodeURI(c);let u=[];for(let d=0;d<c.length;d++)c.charAt(d)!="%"?u.push(c.charCodeAt(d)):(u.push(parseInt(c.substring(d+1,d+3),16)),d+=2);return u}};o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let s=o;e.QrSegment=o})(xi||(xi={}));(e=>{(t=>{const n=class{constructor(i,o){this.ordinal=i,this.formatBits=o}};n.LOW=new n(0,1),n.MEDIUM=new n(1,0),n.QUARTILE=new n(2,3),n.HIGH=new n(3,2),t.Ecc=n})(e.QrCode||(e.QrCode={}))})(xi||(xi={}));(e=>{(t=>{const n=class{constructor(i,o){this.modeBits=i,this.numBitsCharCount=o}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};n.NUMERIC=new n(1,[10,12,14]),n.ALPHANUMERIC=new n(2,[9,11,13]),n.BYTE=new n(4,[8,16,16]),n.KANJI=new n(8,[8,10,12]),n.ECI=new n(7,[0,0,0]),t.Mode=n})(e.QrSegment||(e.QrSegment={}))})(xi||(xi={}));var Ui=xi;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var XI={L:Ui.QrCode.Ecc.LOW,M:Ui.QrCode.Ecc.MEDIUM,Q:Ui.QrCode.Ecc.QUARTILE,H:Ui.QrCode.Ecc.HIGH},Nb=128,Db="L",Mb="#FFFFFF",Lb="#000000",zb=!1,Ob=1,QI=4,JI=0,ZI=.1;function Fb(e,t=0){const n=[];return e.forEach(function(r,i){let o=null;r.forEach(function(s,l){if(!s&&o!==null){n.push(`M${o+t} ${i+t}h${l-o}v1H${o+t}z`),o=null;return}if(l===r.length-1){if(!s)return;o===null?n.push(`M${l+t},${i+t} h1v1H${l+t}z`):n.push(`M${o+t},${i+t} h${l+1-o}v1H${o+t}z`);return}s&&o===null&&(o=l)})}),n.join("")}function Bb(e,t){return e.slice().map((n,r)=>r<t.y||r>=t.y+t.h?n:n.map((i,o)=>o<t.x||o>=t.x+t.w?i:!1))}function e5(e,t,n,r){if(r==null)return null;const i=e.length+n*2,o=Math.floor(t*ZI),s=i/t,l=(r.width||o)*s,c=(r.height||o)*s,u=r.x==null?e.length/2-l/2:r.x*s,d=r.y==null?e.length/2-c/2:r.y*s,h=r.opacity==null?1:r.opacity;let f=null;if(r.excavate){let g=Math.floor(u),y=Math.floor(d),w=Math.ceil(l+u-g),m=Math.ceil(c+d-y);f={x:g,y,w,h:m}}const p=r.crossOrigin;return{x:u,y:d,h:c,w:l,excavation:f,opacity:h,crossOrigin:p}}function t5(e,t){return t!=null?Math.max(Math.floor(t),0):e?QI:JI}function Vb({value:e,level:t,minVersion:n,includeMargin:r,marginSize:i,imageSettings:o,size:s,boostLevel:l}){let c=Z.useMemo(()=>{const g=(Array.isArray(e)?e:[e]).reduce((y,w)=>(y.push(...Ui.QrSegment.makeSegments(w)),y),[]);return Ui.QrCode.encodeSegments(g,XI[t],n,void 0,void 0,l)},[e,t,n,l]);const{cells:u,margin:d,numCells:h,calculatedImageSettings:f}=Z.useMemo(()=>{let p=c.getModules();const g=t5(r,i),y=p.length+g*2,w=e5(p,s,g,o);return{cells:p,margin:g,numCells:y,calculatedImageSettings:w}},[c,s,o,r,i]);return{qrcode:c,margin:d,cells:u,numCells:h,calculatedImageSettings:f}}var n5=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),r5=Z.forwardRef(function(t,n){const r=t,{value:i,size:o=Nb,level:s=Db,bgColor:l=Mb,fgColor:c=Lb,includeMargin:u=zb,minVersion:d=Ob,boostLevel:h,marginSize:f,imageSettings:p}=r,y=ch(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:w}=y,m=ch(y,["style"]),x=p==null?void 0:p.src,v=Z.useRef(null),k=Z.useRef(null),j=Z.useCallback($=>{v.current=$,typeof n=="function"?n($):n&&(n.current=$)},[n]),[C,T]=Z.useState(!1),{margin:E,cells:A,numCells:P,calculatedImageSettings:N}=Vb({value:i,level:s,minVersion:d,boostLevel:h,includeMargin:u,marginSize:f,imageSettings:p,size:o});Z.useEffect(()=>{if(v.current!=null){const $=v.current,H=$.getContext("2d");if(!H)return;let q=A;const re=k.current,M=N!=null&&re!==null&&re.complete&&re.naturalHeight!==0&&re.naturalWidth!==0;M&&N.excavation!=null&&(q=Bb(A,N.excavation));const U=window.devicePixelRatio||1;$.height=$.width=o*U;const S=o/P*U;H.scale(S,S),H.fillStyle=l,H.fillRect(0,0,P,P),H.fillStyle=c,n5?H.fill(new Path2D(Fb(q,E))):A.forEach(function(X,ne){X.forEach(function(_,ye){_&&H.fillRect(ye+E,ne+E,1,1)})}),N&&(H.globalAlpha=N.opacity),M&&H.drawImage(re,N.x+E,N.y+E,N.w,N.h)}}),Z.useEffect(()=>{T(!1)},[x]);const D=lh({height:o,width:o},w);let B=null;return x!=null&&(B=Z.createElement("img",{src:x,key:x,style:{display:"none"},onLoad:()=>{T(!0)},ref:k,crossOrigin:N==null?void 0:N.crossOrigin})),Z.createElement(Z.Fragment,null,Z.createElement("canvas",lh({style:D,height:o,width:o,ref:j,role:"img"},m)),B)});r5.displayName="QRCodeCanvas";var Ub=Z.forwardRef(function(t,n){const r=t,{value:i,size:o=Nb,level:s=Db,bgColor:l=Mb,fgColor:c=Lb,includeMargin:u=zb,minVersion:d=Ob,boostLevel:h,title:f,marginSize:p,imageSettings:g}=r,y=ch(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:w,cells:m,numCells:x,calculatedImageSettings:v}=Vb({value:i,level:s,minVersion:d,boostLevel:h,includeMargin:u,marginSize:p,imageSettings:g,size:o});let k=m,j=null;g!=null&&v!=null&&(v.excavation!=null&&(k=Bb(m,v.excavation)),j=Z.createElement("image",{href:g.src,height:v.h,width:v.w,x:v.x+w,y:v.y+w,preserveAspectRatio:"none",opacity:v.opacity,crossOrigin:v.crossOrigin}));const C=Fb(k,w);return Z.createElement("svg",lh({height:o,width:o,viewBox:`0 0 ${x} ${x}`,ref:n,role:"img"},y),!!f&&Z.createElement("title",null,f),Z.createElement("path",{fill:l,d:`M0,0 h${x}v${x}H0z`,shapeRendering:"crispEdges"}),Z.createElement("path",{fill:c,d:C,shapeRendering:"crispEdges"}),j)});Ub.displayName="QRCodeSVG";const i5=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"}),a.jsx("path",{d:"M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"})]}),o5=()=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"})}),s5=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),a.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),a.jsx("circle",{cx:"4",cy:"4",r:"2"})]});function a5(e){if(!e)return"Untitled";const t=e.match(/name=['"](.*?)['"]/);return t?t[1]:(e.startsWith("[")&&e.includes("("),e)}const ju=[{value:"view",label:"View only",icon:"👁"},{value:"download",label:"View & Download",icon:"📥"},{value:"edit",label:"Edit metadata",icon:"✏️"}];function l5({value:e,onChange:t}){const[n,r]=b.useState(!1),i=ju.find(o=>o.value===e)||ju[0];return a.jsxs("div",{style:{position:"relative"},children:[a.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Permission"}),a.jsxs("button",{type:"button",onClick:()=>r(!n),style:{width:"100%",padding:"12px 14px",background:"var(--bg-card-hover, rgba(255,255,255,0.05))",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:"var(--font, inherit)",fontSize:14,fontWeight:500,textAlign:"left"},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{children:i.icon}),a.jsx("span",{children:i.label})]}),a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{transform:n?"rotate(180deg)":"none",transition:"0.2s"},children:a.jsx("path",{d:"M6 9l6 6 6-6"})})]}),n&&a.jsxs(a.Fragment,{children:[a.jsx("div",{onClick:()=>r(!1),style:{position:"fixed",inset:0,zIndex:50}}),a.jsx("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,right:0,background:"var(--bg-card, #1a1a1a)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"0 16px 48px rgba(0,0,0,0.4)",zIndex:51,overflow:"hidden",animation:"fadeIn 0.15s ease"},children:ju.map(o=>a.jsxs("button",{onClick:()=>{t(o.value),r(!1)},style:{display:"flex",alignItems:"center",gap:10,width:"100%",padding:"13px 16px",border:"none",background:o.value===e?"rgba(59,130,246,0.12)":"transparent",color:"var(--text)",fontFamily:"var(--font, inherit)",fontSize:14,fontWeight:o.value===e?600:500,cursor:"pointer",textAlign:"left",transition:"background 0.15s"},onMouseEnter:s=>{o.value!==e&&(s.currentTarget.style.background="rgba(255,255,255,0.06)")},onMouseLeave:s=>{s.currentTarget.style.background=o.value===e?"rgba(59,130,246,0.12)":"transparent"},children:[a.jsx("span",{style:{fontSize:16},children:o.icon}),a.jsx("span",{children:o.label}),o.value===e&&a.jsx("span",{style:{marginLeft:"auto",color:"var(--accent-blue, #3b82f6)"},children:"✓"})]},o.value))})]})]})}function c5({file:e,onShare:t,onCancel:n}){const[r,i]=b.useState("link"),[o,s]=b.useState("view"),[l,c]=b.useState(""),[u,d]=b.useState(""),[h,f]=b.useState(""),[p,g]=b.useState(""),[y,w]=b.useState(!1),[m,x]=b.useState(""),[v,k]=b.useState(!1),[j,C]=b.useState("settings"),T=async()=>{var P;w(!0);try{const N={shareType:r,permission:o,visibility:"protected",...u&&{password:u},...h&&{expiresAt:new Date(h).toISOString()},...p&&{maxViews:Number(p)},...r==="email"&&{recipientEmail:l,email:l}},D=await t(N),B=(D==null?void 0:D.shareUrl)||((P=D==null?void 0:D.data)==null?void 0:P.shareUrl);B?x(B):alert("Server did not return a share link.")}catch(N){console.error(N),alert(N.message||"Failed to create share link")}finally{w(!1)}},E=async()=>{var P;m&&(await((P=navigator.clipboard)==null?void 0:P.writeText(m)),k(!0),setTimeout(()=>k(!1),2e3))},A=P=>{if(!m)return;const N=encodeURIComponent(`Check out this file on CloudVault: ${e.name}`),D=encodeURIComponent(m),B={twitter:`https://twitter.com/intent/tweet?text=${N}&url=${D}`,whatsapp:`https://wa.me/?text=${N}%20${D}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${D}`,email:`mailto:?subject=${encodeURIComponent(`Shared File: ${e.name}`)}&body=${N}%0A${D}`};window.open(B[P],"_blank")};return a.jsx("div",{className:"share-modal-backdrop",onClick:n,children:a.jsxs("div",{onClick:P=>P.stopPropagation(),style:{background:"var(--surface)",borderRadius:24,width:"100%",maxWidth:500,overflow:"hidden",boxShadow:"0 24px 80px rgba(0,0,0,0.4)",border:"1px solid var(--border)"},children:[a.jsxs("div",{style:{padding:"24px 32px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"var(--bg-card)"},children:[a.jsxs("div",{style:{minWidth:0,flex:1},children:[a.jsxs("h3",{style:{margin:0,fontSize:18,fontWeight:700,color:"var(--text)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:['Share "',a5(e.name),'"']}),a.jsx("p",{style:{margin:"4px 0 0",fontSize:13,color:"var(--text-muted)"},children:"Securely distribute this file"})]}),a.jsx("button",{onClick:n,style:{background:"transparent",border:"none",color:"var(--text-muted)",cursor:"pointer",padding:8,borderRadius:50},children:a.jsx(Gf,{size:20})})]}),a.jsx("div",{style:{padding:"32px"},children:m?a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:16,marginBottom:24},children:[a.jsx("button",{onClick:()=>C("settings"),style:{flex:1,padding:"10px",borderRadius:12,background:j==="settings"?"var(--accent-blue)":"transparent",color:j==="settings"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:j==="settings"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Link"}),a.jsx("button",{onClick:()=>C("qr"),style:{flex:1,padding:"10px",borderRadius:12,background:j==="qr"?"var(--accent-blue)":"transparent",color:j==="qr"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:j==="qr"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"QR Code"}),a.jsx("button",{onClick:()=>C("social"),style:{flex:1,padding:"10px",borderRadius:12,background:j==="social"?"var(--accent-blue)":"transparent",color:j==="social"?"#fff":"var(--text-muted)",border:"1px solid",borderColor:j==="social"?"var(--accent-blue)":"var(--border)",cursor:"pointer",fontWeight:600},children:"Social"})]}),j==="settings"&&a.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[a.jsxs("div",{style:{padding:20,background:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",borderRadius:16,marginBottom:24},children:[a.jsx("p",{style:{margin:"0 0 12px",fontSize:13,fontWeight:700,color:"var(--accent-blue)",textTransform:"uppercase",letterSpacing:.5},children:"Share Link Created"}),a.jsx("div",{style:{fontSize:14,wordBreak:"break-all",color:"var(--text)",lineHeight:1.5,marginBottom:16},children:m}),a.jsxs("button",{onClick:E,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",padding:14,borderRadius:12,background:v?"#10b981":"var(--accent-blue)",color:"var(--text)",border:"none",fontWeight:700,cursor:"pointer",transition:"0.2s"},children:[v?a.jsx(G_,{size:18}):a.jsx(Z_,{size:18}),v?"Copied to Clipboard":"Copy Link"]})]}),a.jsx("button",{onClick:()=>x(""),style:{width:"100%",padding:14,background:"transparent",color:"var(--text)",border:"1px solid var(--border)",borderRadius:12,fontWeight:600,cursor:"pointer"},children:"Create another share"})]}),j==="qr"&&a.jsxs("div",{style:{animation:"fadeIn 0.3s ease",textAlign:"center"},children:[a.jsx("div",{style:{display:"inline-block",background:"#fff",padding:24,borderRadius:24,marginBottom:24,boxShadow:"0 10px 40px rgba(0,0,0,0.1)"},children:a.jsx(Ub,{value:m,size:200,level:"H",includeMargin:!1})}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,margin:0},children:"Scan this code to instantly open the shared file on your mobile device."})]}),j==="social"&&a.jsxs("div",{style:{animation:"fadeIn 0.3s ease"},children:[a.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:24,textAlign:"center"},children:"Share directly to your favorite platforms"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[a.jsxs("button",{onClick:()=>A("twitter"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(29, 161, 242, 0.1)",color:"#1da1f2",border:"1px solid rgba(29, 161, 242, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[a.jsx(o5,{})," Twitter"]}),a.jsxs("button",{onClick:()=>A("whatsapp"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(37, 211, 102, 0.1)",color:"#25d366",border:"1px solid rgba(37, 211, 102, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[a.jsx(i5,{})," WhatsApp"]}),a.jsxs("button",{onClick:()=>A("linkedin"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"rgba(0, 119, 181, 0.1)",color:"#0077b5",border:"1px solid rgba(0, 119, 181, 0.2)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[a.jsx(s5,{})," LinkedIn"]}),a.jsxs("button",{onClick:()=>A("email"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16,background:"var(--bg-card)",color:"var(--text)",border:"1px solid var(--border)",borderRadius:16,cursor:"pointer",fontWeight:600,transition:"0.2s"},children:[a.jsx(vE,{size:20})," Email App"]})]})]})]}):a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Share Method"}),a.jsxs("div",{style:{display:"flex",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:4},children:[a.jsx("button",{onClick:()=>i("link"),style:{flex:1,padding:"8px",background:r==="link"?"var(--surface)":"transparent",color:r==="link"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:r==="link"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Link"}),a.jsx("button",{onClick:()=>i("email"),style:{flex:1,padding:"8px",background:r==="email"?"var(--surface)":"transparent",color:r==="email"?"var(--text)":"var(--text-muted)",border:"none",borderRadius:8,fontWeight:600,cursor:"pointer",boxShadow:r==="email"?"0 2px 8px rgba(0,0,0,0.2)":"none"},children:"Email"})]})]}),a.jsx(l5,{value:o,onChange:s})]}),r==="email"&&a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Recipient Email"}),a.jsx("input",{type:"email",value:l,onChange:P=>c(P.target.value),placeholder:"colleague@company.com",style:{width:"100%",padding:"12px 14px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Password Protection"}),a.jsx("input",{type:"password",value:u,onChange:P=>d(P.target.value),placeholder:"Optional",style:{width:"100%",padding:"12px 14px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"},autoComplete:"new-password"})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"View Limit"}),a.jsx("input",{type:"number",min:"1",value:p,onChange:P=>g(P.target.value),placeholder:"Unlimited",style:{width:"100%",padding:"12px 14px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Expiration Date"}),a.jsx("input",{type:"datetime-local",value:h,onChange:P=>f(P.target.value),style:{width:"100%",padding:"12px 14px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,color:"var(--text)",outline:"none"}})]}),a.jsx("div",{style:{marginTop:8},children:a.jsx("button",{onClick:T,disabled:y||r==="email"&&!l,style:{width:"100%",padding:"16px",background:"var(--accent-blue)",color:"var(--text)",border:"none",borderRadius:14,fontWeight:700,fontSize:16,cursor:y||r==="email"&&!l?"not-allowed":"pointer",opacity:y||r==="email"&&!l?.6:1,transition:"0.2s"},children:y?"Generating Secure Link...":r==="email"?"Send Email Invitation":"Create Share Link"})})]})})]})})}function u5({stats:e,usage:t,onBack:n}){const r=(t==null?void 0:t.breakdown)||{},i=Object.values(r).reduce((l,c)=>l+c,0)||1,o=e.storageQuota>0?Math.min(100,Math.round(e.storageUsed/e.storageQuota*100)):0,s=[{key:"images",label:"Images",color:"#22c55e"},{key:"videos",label:"Videos",color:"#2563eb"},{key:"documents",label:"Documents",color:"#f59e0b"},{key:"audio",label:"Audio",color:"#a78bfa"},{key:"other",label:"Other",color:"#94a3b8"}];return a.jsxs("div",{style:{animation:"fadeIn .3s ease"},children:[a.jsx("button",{type:"button",onClick:n,className:"page-back-btn",children:"← Back to My Drive"}),a.jsx("h2",{style:{fontWeight:900,fontSize:26,margin:"12px 0 8px",color:"var(--text)"},children:"Storage dashboard"}),a.jsxs("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:28},children:[o,"% of your storage is in use"]}),a.jsxs("div",{className:"dashboard-stat-grid",children:[a.jsx(ja,{label:"Total files",value:e.totalFiles}),a.jsx(ja,{label:"Total folders",value:e.totalFolders}),a.jsx(ja,{label:"Storage used",value:qe(e.storageUsed)}),a.jsx(ja,{label:"Storage remaining",value:qe(Math.max(0,e.storageQuota-e.storageUsed))})]}),a.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)",marginBottom:24},children:[a.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"Storage breakdown"}),a.jsx("div",{style:{height:14,borderRadius:99,overflow:"hidden",display:"flex",background:"var(--border)"},children:s.map(l=>{const c=(r[l.key]||0)/i*100;return c<.5?null:a.jsx("div",{title:`${l.label}: ${qe(r[l.key]||0)}`,style:{width:`${c}%`,background:l.color,transition:"width .4s ease"}},l.key)})}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,marginTop:16},children:s.map(l=>a.jsxs("span",{style:{fontSize:13,color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{width:10,height:10,borderRadius:99,background:l.color,flexShrink:0}}),l.label,": ",qe(r[l.key]||0)]},l.key))})]}),a.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)"},children:[a.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"File type distribution"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:s.map(l=>{const c=r[l.key]||0,u=Math.round(c/i*100);return a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[a.jsx("span",{style:{color:"var(--text-secondary)",fontWeight:600},children:l.label}),a.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:700},children:[u,"%"]})]}),a.jsx("div",{style:{height:8,background:"var(--border)",borderRadius:99,overflow:"hidden"},children:a.jsx("div",{style:{width:`${u}%`,height:"100%",background:l.color,borderRadius:99,transition:"width .4s ease"}})})]},l.key)})})]})]})}function ja({label:e,value:t}){return a.jsxs("div",{className:"dashboard-stat-card",children:[a.jsx("div",{className:"label",children:e}),a.jsx("div",{className:"value",children:t})]})}var sp={x:0,y:0,width:0,height:0,unit:"px"},Ei=(e,t,n)=>Math.min(Math.max(e,t),n),d5=(...e)=>e.filter(t=>t&&typeof t=="string").join(" "),r0=(e,t)=>e===t||e.width===t.width&&e.height===t.height&&e.x===t.x&&e.y===t.y&&e.unit===t.unit;function h5(e,t,n,r){let i=wn(e,n,r);return e.width&&(i.height=i.width/t),e.height&&(i.width=i.height*t),i.y+i.height>r&&(i.height=r-i.y,i.width=i.height*t),i.x+i.width>n&&(i.width=n-i.x,i.height=i.width/t),e.unit==="%"?hr(i,n,r):i}function f5(e,t,n){let r=wn(e,t,n);return r.x=(t-r.width)/2,r.y=(n-r.height)/2,e.unit==="%"?hr(r,t,n):r}function hr(e,t,n){return e.unit==="%"?{...sp,...e,unit:"%"}:{unit:"%",x:e.x?e.x/t*100:0,y:e.y?e.y/n*100:0,width:e.width?e.width/t*100:0,height:e.height?e.height/n*100:0}}function wn(e,t,n){return!e.unit||e.unit==="px"?{...sp,...e,unit:"px"}:{unit:"px",x:e.x?e.x*t/100:0,y:e.y?e.y*n/100:0,width:e.width?e.width*t/100:0,height:e.height?e.height*n/100:0}}function i0(e,t,n,r,i,o=0,s=0,l=r,c=i){let u={...e},d=Math.min(o,r),h=Math.min(s,i),f=Math.min(l,r),p=Math.min(c,i);t&&(t>1?(d=s?s*t:d,h=d/t,f=l*t):(h=o?o/t:h,d=h*t,p=c/t)),u.y<0&&(u.height=Math.max(u.height+u.y,h),u.y=0),u.x<0&&(u.width=Math.max(u.width+u.x,d),u.x=0);let g=r-(u.x+u.width);g<0&&(u.x=Math.min(u.x,r-d),u.width+=g);let y=i-(u.y+u.height);if(y<0&&(u.y=Math.min(u.y,i-h),u.height+=y),u.width<d&&((n==="sw"||n=="nw")&&(u.x-=d-u.width),u.width=d),u.height<h&&((n==="nw"||n=="ne")&&(u.y-=h-u.height),u.height=h),u.width>f&&((n==="sw"||n=="nw")&&(u.x-=f-u.width),u.width=f),u.height>p&&((n==="nw"||n=="ne")&&(u.y-=p-u.height),u.height=p),t){let w=u.width/u.height;if(w<t){let m=Math.max(u.width/t,h);(n==="nw"||n=="ne")&&(u.y-=m-u.height),u.height=m}else if(w>t){let m=Math.max(u.height*t,d);(n==="sw"||n=="nw")&&(u.x-=m-u.width),u.width=m}}return u}function p5(e,t,n,r){let i={...e};return t==="ArrowLeft"?r==="nw"?(i.x-=n,i.y-=n,i.width+=n,i.height+=n):r==="w"?(i.x-=n,i.width+=n):r==="sw"?(i.x-=n,i.width+=n,i.height+=n):r==="ne"?(i.y+=n,i.width-=n,i.height-=n):r==="e"?i.width-=n:r==="se"&&(i.width-=n,i.height-=n):t==="ArrowRight"&&(r==="nw"?(i.x+=n,i.y+=n,i.width-=n,i.height-=n):r==="w"?(i.x+=n,i.width-=n):r==="sw"?(i.x+=n,i.width-=n,i.height-=n):r==="ne"?(i.y-=n,i.width+=n,i.height+=n):r==="e"?i.width+=n:r==="se"&&(i.width+=n,i.height+=n)),t==="ArrowUp"?r==="nw"?(i.x-=n,i.y-=n,i.width+=n,i.height+=n):r==="n"?(i.y-=n,i.height+=n):r==="ne"?(i.y-=n,i.width+=n,i.height+=n):r==="sw"?(i.x+=n,i.width-=n,i.height-=n):r==="s"?i.height-=n:r==="se"&&(i.width-=n,i.height-=n):t==="ArrowDown"&&(r==="nw"?(i.x+=n,i.y+=n,i.width-=n,i.height-=n):r==="n"?(i.y+=n,i.height-=n):r==="ne"?(i.y+=n,i.width-=n,i.height-=n):r==="sw"?(i.x-=n,i.width+=n,i.height+=n):r==="s"?i.height+=n:r==="se"&&(i.width+=n,i.height+=n)),i}var ji={capture:!0,passive:!1},m5=0,ze,g5=(ze=class extends b.PureComponent{constructor(){super(...arguments);je(this,"docMoveBound",!1);je(this,"mouseDownOnCrop",!1);je(this,"dragStarted",!1);je(this,"evData",{startClientX:0,startClientY:0,startCropX:0,startCropY:0,clientX:0,clientY:0,isResize:!0});je(this,"componentRef",b.createRef());je(this,"mediaRef",b.createRef());je(this,"resizeObserver");je(this,"initChangeCalled",!1);je(this,"instanceId",`rc-${m5++}`);je(this,"state",{cropIsActive:!1,newCropIsBeingDrawn:!1});je(this,"onCropPointerDown",n=>{let{crop:r,disabled:i}=this.props,o=this.getBox();if(!r)return;let s=wn(r,o.width,o.height);if(i)return;n.cancelable&&n.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let l=n.target.dataset.ord,c=!!l,u=n.clientX,d=n.clientY,h=s.x,f=s.y;if(l){let p=n.clientX-o.x,g=n.clientY-o.y,y=0,w=0;l==="ne"||l=="e"?(y=p-(s.x+s.width),w=g-s.y,h=s.x,f=s.y+s.height):l==="se"||l==="s"?(y=p-(s.x+s.width),w=g-(s.y+s.height),h=s.x,f=s.y):l==="sw"||l=="w"?(y=p-s.x,w=g-(s.y+s.height),h=s.x+s.width,f=s.y):(l==="nw"||l=="n")&&(y=p-s.x,w=g-s.y,h=s.x+s.width,f=s.y+s.height),u=h+o.x+y,d=f+o.y+w}this.evData={startClientX:u,startClientY:d,startCropX:h,startCropY:f,clientX:n.clientX,clientY:n.clientY,isResize:c,ord:l},this.mouseDownOnCrop=!0,this.setState({cropIsActive:!0})});je(this,"onComponentPointerDown",n=>{let{crop:r,disabled:i,locked:o,keepSelection:s,onChange:l}=this.props,c=this.getBox();if(i||o||s&&r)return;n.cancelable&&n.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let u=n.clientX-c.x,d=n.clientY-c.y,h={unit:"px",x:u,y:d,width:0,height:0};this.evData={startClientX:n.clientX,startClientY:n.clientY,startCropX:u,startCropY:d,clientX:n.clientX,clientY:n.clientY,isResize:!0},this.mouseDownOnCrop=!0,l(wn(h,c.width,c.height),hr(h,c.width,c.height)),this.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})});je(this,"onDocPointerMove",n=>{let{crop:r,disabled:i,onChange:o,onDragStart:s}=this.props,l=this.getBox();if(i||!r||!this.mouseDownOnCrop)return;n.cancelable&&n.preventDefault(),this.dragStarted||(this.dragStarted=!0,s&&s(n));let{evData:c}=this;c.clientX=n.clientX,c.clientY=n.clientY;let u;u=c.isResize?this.resizeCrop():this.dragCrop(),r0(r,u)||o(wn(u,l.width,l.height),hr(u,l.width,l.height))});je(this,"onComponentKeyDown",n=>{let{crop:r,disabled:i,onChange:o,onComplete:s}=this.props;if(i)return;let l=n.key,c=!1;if(!r)return;let u=this.getBox(),d=this.makePixelCrop(u),h=(navigator.platform.match("Mac")?n.metaKey:n.ctrlKey)?ze.nudgeStepLarge:n.shiftKey?ze.nudgeStepMedium:ze.nudgeStep;if(l==="ArrowLeft"?(d.x-=h,c=!0):l==="ArrowRight"?(d.x+=h,c=!0):l==="ArrowUp"?(d.y-=h,c=!0):l==="ArrowDown"&&(d.y+=h,c=!0),c){n.cancelable&&n.preventDefault(),d.x=Ei(d.x,0,u.width-d.width),d.y=Ei(d.y,0,u.height-d.height);let f=wn(d,u.width,u.height),p=hr(d,u.width,u.height);o(f,p),s&&s(f,p)}});je(this,"onHandlerKeyDown",(n,r)=>{let{aspect:i=0,crop:o,disabled:s,minWidth:l=0,minHeight:c=0,maxWidth:u,maxHeight:d,onChange:h,onComplete:f}=this.props,p=this.getBox();if(s||!o)return;if(n.key==="ArrowUp"||n.key==="ArrowDown"||n.key==="ArrowLeft"||n.key==="ArrowRight")n.stopPropagation(),n.preventDefault();else return;let g=(navigator.platform.match("Mac")?n.metaKey:n.ctrlKey)?ze.nudgeStepLarge:n.shiftKey?ze.nudgeStepMedium:ze.nudgeStep,y=i0(p5(wn(o,p.width,p.height),n.key,g,r),i,r,p.width,p.height,l,c,u,d);if(!r0(o,y)){let w=hr(y,p.width,p.height);h(y,w),f&&f(y,w)}});je(this,"onDocPointerDone",n=>{let{crop:r,disabled:i,onComplete:o,onDragEnd:s}=this.props,l=this.getBox();this.unbindDocMove(),!(i||!r)&&this.mouseDownOnCrop&&(this.mouseDownOnCrop=!1,this.dragStarted=!1,s&&s(n),o&&o(wn(r,l.width,l.height),hr(r,l.width,l.height)),this.setState({cropIsActive:!1,newCropIsBeingDrawn:!1}))});je(this,"onDragFocus",()=>{var n;(n=this.componentRef.current)==null||n.scrollTo(0,0)})}get document(){return document}getBox(){let n=this.mediaRef.current;if(!n)return{x:0,y:0,width:0,height:0};let{x:r,y:i,width:o,height:s}=n.getBoundingClientRect();return{x:r,y:i,width:o,height:s}}componentDidUpdate(n){let{crop:r,onComplete:i}=this.props;if(i&&!n.crop&&r){let{width:o,height:s}=this.getBox();o&&s&&i(wn(r,o,s),hr(r,o,s))}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect(),this.unbindDocMove()}bindDocMove(){this.docMoveBound||(this.docMoveBound=(this.document.addEventListener("pointermove",this.onDocPointerMove,ji),this.document.addEventListener("pointerup",this.onDocPointerDone,ji),this.document.addEventListener("pointercancel",this.onDocPointerDone,ji),!0))}unbindDocMove(){this.docMoveBound&&(this.docMoveBound=(this.document.removeEventListener("pointermove",this.onDocPointerMove,ji),this.document.removeEventListener("pointerup",this.onDocPointerDone,ji),this.document.removeEventListener("pointercancel",this.onDocPointerDone,ji),!1))}getCropStyle(){let{crop:n}=this.props;if(n)return{top:`${n.y}${n.unit}`,left:`${n.x}${n.unit}`,width:`${n.width}${n.unit}`,height:`${n.height}${n.unit}`}}dragCrop(){let{evData:n}=this,r=this.getBox(),i=this.makePixelCrop(r),o=n.clientX-n.startClientX,s=n.clientY-n.startClientY;return i.x=Ei(n.startCropX+o,0,r.width-i.width),i.y=Ei(n.startCropY+s,0,r.height-i.height),i}getPointRegion(n,r,i,o){let{evData:s}=this,l=s.clientX-n.x,c=s.clientY-n.y,u;u=o&&r?r==="nw"||r==="n"||r==="ne":c<s.startCropY;let d;return d=i&&r?r==="nw"||r==="w"||r==="sw":l<s.startCropX,d?u?"nw":"sw":u?"ne":"se"}resolveMinDimensions(n,r,i=0,o=0){let s=Math.min(i,n.width),l=Math.min(o,n.height);return!r||!s&&!l?[s,l]:r>1?s?[s,s/r]:[l*r,l]:l?[l*r,l]:[s,s/r]}resizeCrop(){let{evData:n}=this,{aspect:r=0,maxWidth:i,maxHeight:o}=this.props,s=this.getBox(),[l,c]=this.resolveMinDimensions(s,r,this.props.minWidth,this.props.minHeight),u=this.makePixelCrop(s),d=this.getPointRegion(s,n.ord,l,c),h=n.ord||d,f=n.clientX-n.startClientX,p=n.clientY-n.startClientY;(l&&h==="nw"||h==="w"||h==="sw")&&(f=Math.min(f,-l)),(c&&h==="nw"||h==="n"||h==="ne")&&(p=Math.min(p,-c));let g={unit:"px",x:0,y:0,width:0,height:0};d==="ne"?(g.x=n.startCropX,g.width=f,r?(g.height=g.width/r,g.y=n.startCropY-g.height):(g.height=Math.abs(p),g.y=n.startCropY-g.height)):d==="se"?(g.x=n.startCropX,g.y=n.startCropY,g.width=f,r?g.height=g.width/r:g.height=p):d==="sw"?(g.x=n.startCropX+f,g.y=n.startCropY,g.width=Math.abs(f),r?g.height=g.width/r:g.height=p):d==="nw"&&(g.x=n.startCropX+f,g.width=Math.abs(f),r?(g.height=g.width/r,g.y=n.startCropY-g.height):(g.height=Math.abs(p),g.y=n.startCropY+p));let y=i0(g,r,d,s.width,s.height,l,c,i,o);return r||ze.xyOrds.indexOf(h)>-1?u=y:ze.xOrds.indexOf(h)>-1?(u.x=y.x,u.width=y.width):ze.yOrds.indexOf(h)>-1&&(u.y=y.y,u.height=y.height),u.x=Ei(u.x,0,s.width-u.width),u.y=Ei(u.y,0,s.height-u.height),u}renderCropSelection(){let{ariaLabels:n=ze.defaultProps.ariaLabels,disabled:r,locked:i,renderSelectionAddon:o,ruleOfThirds:s,crop:l}=this.props,c=this.getCropStyle();if(l)return Z.createElement("div",{style:c,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown,"aria-label":n.cropArea,tabIndex:0,onKeyDown:this.onComponentKeyDown,role:"group"},!r&&!i&&Z.createElement("div",{className:"ReactCrop__drag-elements",onFocus:this.onDragFocus},Z.createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),Z.createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),Z.createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),Z.createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw",tabIndex:0,"aria-label":n.nwDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"nw"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n",tabIndex:0,"aria-label":n.nDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"n"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne",tabIndex:0,"aria-label":n.neDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"ne"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e",tabIndex:0,"aria-label":n.eDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"e"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se",tabIndex:0,"aria-label":n.seDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"se"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s",tabIndex:0,"aria-label":n.sDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"s"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw",tabIndex:0,"aria-label":n.swDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"sw"),role:"button"}),Z.createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w",tabIndex:0,"aria-label":n.wDragHandle,onKeyDown:u=>this.onHandlerKeyDown(u,"w"),role:"button"})),o&&Z.createElement("div",{className:"ReactCrop__selection-addon",onPointerDown:u=>u.stopPropagation()},o(this.state)),s&&Z.createElement(Z.Fragment,null,Z.createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),Z.createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}makePixelCrop(n){return wn({...sp,...this.props.crop||{}},n.width,n.height)}render(){let{aspect:n,children:r,circularCrop:i,className:o,crop:s,disabled:l,locked:c,style:u,ruleOfThirds:d}=this.props,{cropIsActive:h,newCropIsBeingDrawn:f}=this.state,p=s?this.renderCropSelection():null,g=d5("ReactCrop",o,h&&"ReactCrop--active",l&&"ReactCrop--disabled",c&&"ReactCrop--locked",f&&"ReactCrop--new-crop",s&&n&&"ReactCrop--fixed-aspect",s&&i&&"ReactCrop--circular-crop",s&&d&&"ReactCrop--rule-of-thirds",!this.dragStarted&&s&&!s.width&&!s.height&&"ReactCrop--invisible-crop",i&&"ReactCrop--no-animate");return Z.createElement("div",{ref:this.componentRef,className:g,style:u},Z.createElement("div",{ref:this.mediaRef,className:"ReactCrop__child-wrapper",onPointerDown:this.onComponentPointerDown},r),s?Z.createElement("svg",{className:"ReactCrop__crop-mask",width:"100%",height:"100%"},Z.createElement("defs",null,Z.createElement("mask",{id:`hole-${this.instanceId}`},Z.createElement("rect",{width:"100%",height:"100%",fill:"white"}),i?Z.createElement("ellipse",{cx:`${s.x+s.width/2}${s.unit}`,cy:`${s.y+s.height/2}${s.unit}`,rx:`${s.width/2}${s.unit}`,ry:`${s.height/2}${s.unit}`,fill:"black"}):Z.createElement("rect",{x:`${s.x}${s.unit}`,y:`${s.y}${s.unit}`,width:`${s.width}${s.unit}`,height:`${s.height}${s.unit}`,fill:"black"}))),Z.createElement("rect",{fill:"black",fillOpacity:.5,width:"100%",height:"100%",mask:`url(#hole-${this.instanceId})`})):void 0,p)}},je(ze,"xOrds",["e","w"]),je(ze,"yOrds",["n","s"]),je(ze,"xyOrds",["nw","ne","se","sw"]),je(ze,"nudgeStep",1),je(ze,"nudgeStepMedium",10),je(ze,"nudgeStepLarge",100),je(ze,"defaultProps",{ariaLabels:{cropArea:"Use the arrow keys to move the crop selection area",nwDragHandle:"Use the arrow keys to move the north west drag handle to change the crop selection area",nDragHandle:"Use the up and down arrow keys to move the north drag handle to change the crop selection area",neDragHandle:"Use the arrow keys to move the north east drag handle to change the crop selection area",eDragHandle:"Use the up and down arrow keys to move the east drag handle to change the crop selection area",seDragHandle:"Use the arrow keys to move the south east drag handle to change the crop selection area",sDragHandle:"Use the up and down arrow keys to move the south drag handle to change the crop selection area",swDragHandle:"Use the arrow keys to move the south west drag handle to change the crop selection area",wDragHandle:"Use the up and down arrow keys to move the west drag handle to change the crop selection area"}}),ze);function y5(e,t,n){return f5(h5({unit:"%",width:90},n,e,t),e,t)}function x5({file:e,token:t,onClose:n,onUploadComplete:r}){const[i,o]=b.useState(""),s=b.useRef(null),[l,c]=b.useState(),[u,d]=b.useState(),[h,f]=b.useState(1),[p,g]=b.useState(0),[y,w]=b.useState(0),[m,x]=b.useState(0),[v,k]=b.useState(.8),[j,C]=b.useState(!0),[T,E]=b.useState(!1),[A,P]=b.useState("");b.useEffect(()=>{let B=null;return(async()=>{try{C(!0);const $=await kc(e.id,t,{disposition:"preview"});B=URL.createObjectURL($),o(B)}catch{P("Failed to load image for editing.")}finally{C(!1)}})(),()=>{B&&URL.revokeObjectURL(B)}},[e.id,t]);const N=B=>{const{width:$,height:H}=B.currentTarget;w($),x(H),c(y5($,H,$/H))},D=async()=>{if(!(!u||!s.current)){E(!0);try{const B=document.createElement("canvas"),$=B.getContext("2d");if(!$)throw new Error("No 2d context");const H=s.current.naturalWidth/s.current.width,q=s.current.naturalHeight/s.current.height,re=window.devicePixelRatio;B.width=Math.floor(u.width*H*re),B.height=Math.floor(u.height*q*re),$.scale(re,re),$.imageSmoothingQuality="high";const M=u.x*H,U=u.y*q,S=u.width*H,X=u.height*q;$.drawImage(s.current,M,U,S,X,0,0,S,X);const ne=e.mimeType||"image/jpeg",_=ne.split("/")[1]||"jpg",ye=`edited_${e.name.replace(/\.[^/.]+$/,"")}.${_}`;B.toBlob(async Re=>{if(!Re){P("Canvas is empty"),E(!1);return}const he=new File([Re],ye,{type:ne});try{const ve=new FormData;ve.append("files",he),e.folderId&&ve.append("folderId",e.folderId),await A1("/files/upload",ve,t,()=>{}),r(),n()}catch{P("Failed to save edited image"),E(!1)}},ne,parseFloat(v))}catch(B){P(B.message),E(!1)}}};return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:1100,background:"rgba(0,0,0,.9)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)"},children:a.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:20,border:"1.5px solid var(--border)",width:"90vw",height:"90vh",display:"flex",flexDirection:"column",overflow:"hidden"},children:[a.jsxs("div",{style:{padding:"16px 24px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("h2",{style:{fontSize:18,fontWeight:600,margin:0},children:["Edit Image: ",e.name]}),a.jsx("button",{onClick:n,style:{background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:20},children:"✕"})]}),a.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[a.jsx("div",{style:{flex:1,padding:24,display:"flex",alignItems:"center",justifyContent:"center",background:"#000",overflow:"auto"},children:j?a.jsx("p",{children:"Loading image..."}):A&&!i?a.jsx("p",{style:{color:"var(--danger)"},children:A}):a.jsx(g5,{crop:l,onChange:(B,$)=>c($),onComplete:B=>d(B),children:a.jsx("img",{ref:s,alt:"Crop me",src:i,style:{transform:`scale(${h}) rotate(${p}deg)`,maxHeight:"70vh"},onLoad:N})})}),a.jsxs("div",{style:{width:300,borderLeft:"1px solid var(--border)",padding:24,display:"flex",flexDirection:"column",gap:24,background:"var(--bg-card)"},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:12,fontWeight:600,color:"var(--text-secondary)",marginBottom:8},children:"ZOOM"}),a.jsx("input",{type:"range",min:.1,max:3,step:.1,value:h,onChange:B=>f(Number(B.target.value)),style:{width:"100%"}})]}),a.jsxs("div",{children:[a.jsxs("label",{style:{display:"block",fontSize:12,fontWeight:600,color:"var(--text-secondary)",marginBottom:8},children:["COMPRESSION QUALITY (",(v*100).toFixed(0),"%)"]}),a.jsx("input",{type:"range",min:.1,max:1,step:.1,value:v,onChange:B=>k(Number(B.target.value)),style:{width:"100%"}}),a.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Lower quality reduces file size."})]}),A&&a.jsx("p",{style:{color:"var(--danger)",fontSize:13},children:A}),a.jsx("div",{style:{marginTop:"auto"},children:a.jsx("button",{onClick:D,disabled:T||!u,className:"btn-primary",style:{width:"100%",padding:"12px",borderRadius:8,fontWeight:600,border:"none",cursor:"pointer",opacity:T?.7:1},children:T?"Saving Copy...":"Save as New Copy"})})]})]})]})})}function v5({code:e,expiresAt:t,fileName:n,onClose:r}){const i=new Date(t),o=Math.max(0,Math.round((i-Date.now())/36e5)),s=()=>{navigator.clipboard.writeText(e)};return a.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:1100,background:"rgba(0,0,0,.85)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(12px)",animation:"fadeIn .2s ease"},children:a.jsxs("div",{onClick:l=>l.stopPropagation(),style:{background:"var(--bg-primary)",borderRadius:24,border:"1.5px solid var(--border)",padding:"48px 40px",maxWidth:440,width:"90vw",textAlign:"center",boxShadow:"0 24px 80px rgba(0,0,0,.5)",animation:"floatIn .25s ease"},children:[a.jsx("div",{style:{width:64,height:64,borderRadius:16,background:"linear-gradient(135deg, var(--accent), var(--accent-blue))",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontSize:28},children:"🖨️"}),a.jsx("h2",{style:{margin:"0 0 8px",fontSize:20,fontWeight:800,color:"var(--text)"},children:"Print Code Generated!"}),a.jsxs("p",{style:{margin:"0 0 24px",fontSize:13,color:"var(--text-muted)",lineHeight:1.5},children:["Go to ",a.jsx("strong",{style:{color:"var(--accent)"},children:"print.cloudvault.co.in"})," on any device, enter this code, and print your file instantly."]}),a.jsx("div",{onClick:s,title:"Click to copy",style:{fontSize:56,fontWeight:900,letterSpacing:16,color:"var(--text)",background:"var(--bg-card)",border:"2px solid var(--border)",borderRadius:16,padding:"20px 32px",margin:"0 auto 16px",cursor:"pointer",userSelect:"all",fontFamily:"var(--font-mono, monospace)",transition:"border-color .2s"},children:e}),a.jsxs("p",{style:{fontSize:12,color:"var(--text-muted)",margin:"0 0 8px"},children:["Click the code to copy • Expires in ~",o,"h"]}),n&&a.jsxs("p",{style:{fontSize:12,color:"var(--text-muted)",margin:"0 0 24px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["📄 ",n]}),a.jsx("button",{type:"button",onClick:r,className:"btn-primary",style:{padding:"12px 32px",fontSize:14,fontWeight:700,borderRadius:12,width:"100%"},children:"Done"})]})})}function b5({users:e,systemHealth:t,loading:n,onBack:r}){return a.jsxs("div",{children:[a.jsx("button",{type:"button",onClick:r,style:w5,children:"← Back to My Cloud"}),a.jsx("h2",{style:{fontWeight:800,fontSize:22,margin:"12px 0 8px"},children:"Admin panel"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:24},children:"User management and system overview"}),t&&a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:28},children:[a.jsx(Bo,{label:"Total users",value:t.totalUsers??"—"}),a.jsx(Bo,{label:"Active users",value:t.activeUsers??"—"}),a.jsx(Bo,{label:"Total files",value:t.totalFiles??"—"}),a.jsx(Bo,{label:"Storage used",value:t.totalStorageUsed!=null?qe(t.totalStorageUsed):"—"}),a.jsx(Bo,{label:"Uploads today",value:t.uploadsToday??"—"})]}),a.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"Users"}),n?a.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading…"}):a.jsxs("div",{style:{overflowX:"auto",border:"1px solid var(--border)",borderRadius:12},children:[a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[a.jsx("thead",{children:a.jsxs("tr",{style:{background:"var(--bg-card)",textAlign:"left"},children:[a.jsx("th",{style:Vo,children:"Email"}),a.jsx("th",{style:Vo,children:"Name"}),a.jsx("th",{style:Vo,children:"Role"}),a.jsx("th",{style:Vo,children:"Storage"}),a.jsx("th",{style:Vo,children:"Status"})]})}),a.jsx("tbody",{children:e.map(i=>a.jsxs("tr",{style:{borderTop:"1px solid var(--border)"},children:[a.jsx("td",{style:Uo,children:i.email}),a.jsx("td",{style:Uo,children:i.fullName||"—"}),a.jsx("td",{style:Uo,children:i.role}),a.jsxs("td",{style:Uo,children:[qe(i.storageUsed)," / ",qe(i.storageQuota)]}),a.jsx("td",{style:Uo,children:i.isActive?"Active":"Inactive"})]},i.id))})]}),e.length===0&&a.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)"},children:"No users found"})]})]})}function Bo({label:e,value:t}){return a.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:14},children:[a.jsx("div",{style:{fontWeight:800,fontSize:20},children:t}),a.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:e})]})}const Vo={padding:"12px 14px",color:"var(--text-muted)",fontWeight:600},Uo={padding:"12px 14px",color:"var(--text-secondary)"},w5={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"};function Wb({file:e,onMove:t,onCopy:n,onTags:r,onEdit:i,onDelete:o,onPrint:s,onAnnotate:l}){var p;const[c,u]=b.useState(!1),d=b.useRef(null);b.useEffect(()=>{const g=y=>{d.current&&!d.current.contains(y.target)&&u(!1)};return c&&document.addEventListener("click",g),()=>document.removeEventListener("click",g)},[c]);const f=[...((p=e==null?void 0:e.mimeType)==null?void 0:p.startsWith("image/"))?[{cue:"✂️",label:"Edit image",onClick:()=>i&&i(e)}]:[],{cue:"🖨️",label:"Send to Print",onClick:()=>s&&s(e)},{cue:"💬",label:"Annotate",onClick:()=>l&&l(e)},{cue:"#",label:"Tags",onClick:()=>r(e)},{cue:"📁",label:"Move",onClick:()=>t(e)},{cue:"📋",label:"Copy file",onClick:()=>n(e)},{cue:"🗑️",label:"Delete",onClick:()=>o(e),danger:!0}];return a.jsxs("div",{ref:d,style:{position:"relative"},children:[a.jsx("button",{type:"button",title:"More actions",onClick:g=>{g.stopPropagation(),u(y=>!y)},style:k5,children:"..."}),c&&a.jsx("div",{style:S5,children:f.map(g=>a.jsxs("button",{type:"button",onClick:y=>{y.stopPropagation(),u(!1),g.onClick()},style:{...C5,color:g.danger?"var(--danger)":"var(--text)"},children:[a.jsx("span",{style:{..._5,color:g.danger?"var(--danger)":"var(--accent-blue)"},children:g.cue}),a.jsx("span",{children:g.label})]},g.label))})]})}const k5={width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",cursor:"pointer",fontSize:18,fontWeight:900,transition:"var(--transition)"},S5={position:"absolute",right:0,top:"100%",marginTop:6,minWidth:190,background:"var(--surface-raised)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"var(--shadow)",zIndex:160,overflow:"hidden",padding:6,animation:"floatIn .16s ease"},C5={display:"flex",alignItems:"center",gap:10,width:"100%",padding:"11px 12px",border:"none",borderRadius:10,background:"transparent",textAlign:"left",cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"var(--font)"},_5={width:34,opacity:.78,fontSize:11,fontWeight:900,textTransform:"uppercase"};function Ti({width:e="100%",height:t=16,radius:n=8,style:r={}}){return a.jsx("div",{style:{width:e,height:t,borderRadius:n,background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite",...r}})}function E5({count:e=6,grid:t=!1}){return t?a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:12},children:Array.from({length:e}).map((n,r)=>a.jsxs("div",{style:{borderRadius:16,overflow:"hidden",border:"1px solid var(--border)"},children:[a.jsx(Ti,{height:140,radius:0}),a.jsxs("div",{style:{padding:12},children:[a.jsx(Ti,{height:12,width:"80%"}),a.jsx(Ti,{height:10,width:"50%",style:{marginTop:8}})]})]},r))}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Array.from({length:e}).map((n,r)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:"var(--bg-card)",borderRadius:12,border:"1px solid var(--border)"},children:[a.jsx(Ti,{width:36,height:36,radius:8}),a.jsxs("div",{style:{flex:1},children:[a.jsx(Ti,{height:14,width:"40%"}),a.jsx(Ti,{height:10,width:"25%",style:{marginTop:8}})]})]},r))})}function j5(e,t=400){const[n,r]=b.useState(e);return b.useEffect(()=>{const i=setTimeout(()=>r(e),t);return()=>clearTimeout(i)},[e,t]),n}async function T5(e,{createFolder:t,uploadFile:n,baseFolderId:r,onProgress:i}){const o=Array.from(e),s=new Map([["",r??null]]),l=u=>{const d=u.webkitRelativePath||u.name,h=d.split("/").filter(Boolean),f=h.pop();return{segments:h,fileName:f,rel:d}};o.sort((u,d)=>l(u).rel.localeCompare(l(d).rel));let c=0;for(const u of o){const{segments:d}=l(u);let h=r??null,f="";for(const p of d){if(f=f?`${f}/${p}`:p,!s.has(f)){const g=await t(p,h);s.set(f,g.id)}h=s.get(f)}await n(u,h),c+=1,i==null||i(Math.round(c/o.length*100))}}function I5(e){const t=new Map(e.map(r=>[r.id,{...r,children:[]}])),n=[];for(const r of e){const i=t.get(r.id);r.parentId&&t.has(r.parentId)?t.get(r.parentId).children.push(i):n.push(i)}return n}const $b=b.createContext(null);function P5({token:e,children:t}){const[n,r]=b.useState(null),[i,o]=b.useState([]),[s,l]=b.useState(0),[c,u]=b.useState(!0),d=b.useCallback(async()=>{if(e)try{const g=await st("/account",{},e);r(g)}catch{const g=await st("/users/me",{},e).catch(()=>null);g&&r(g)}},[e]),h=b.useCallback(async()=>{},[]),f=b.useCallback(async()=>{u(!0),await Promise.all([d(),h()]),u(!1)},[d,h]);b.useEffect(()=>{f()},[e]);const p=async()=>{};return a.jsx($b.Provider,{value:{account:n,loading:c,notifications:i,unreadCount:s,refreshAccount:d,refreshNotifications:h,refreshAll:f,markAllRead:p},children:t})}function Hb(){const e=b.useContext($b);if(!e)throw new Error("useAccount must be used within AccountProvider");return e}function R5({account:e,onNavigate:t,onSignOut:n}){var d;const[r,i]=b.useState(!1),o=b.useRef(null);b.useEffect(()=>{const h=f=>{o.current&&!o.current.contains(f.target)&&i(!1)};return r&&document.addEventListener("click",h),()=>document.removeEventListener("click",h)},[r]);const s=e==null?void 0:e.avatarUrl,l=((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"?").slice(0,1).toUpperCase(),c=((d=e==null?void 0:e.planDetails)==null?void 0:d.name)||(e==null?void 0:e.plan)||"Free",u=({icon:h,label:f,onClick:p,danger:g,accent:y})=>a.jsxs("button",{onClick:()=>{i(!1),p()},style:{display:"flex",alignItems:"center",gap:12,width:"100%",padding:"10px 14px",border:"none",background:"transparent",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,fontWeight:500,color:g?"var(--danger, #ef4444)":y?"var(--accent, #3b82f6)":"var(--text-secondary)",borderRadius:8,transition:"all 0.1s ease-in-out",textAlign:"left"},onMouseEnter:w=>{w.currentTarget.style.background=g?"rgba(239, 68, 68, 0.1)":"rgba(255,255,255,0.06)",w.currentTarget.style.color=g?"var(--danger, #ef4444)":"var(--text)"},onMouseLeave:w=>{w.currentTarget.style.background="transparent",w.currentTarget.style.color=g?"var(--danger, #ef4444)":y?"var(--accent, #3b82f6)":"var(--text-secondary)"},children:[a.jsx(h,{size:16,style:{opacity:.8}}),a.jsx("span",{children:f})]});return a.jsxs("div",{ref:o,style:{position:"relative"},children:[a.jsxs("button",{type:"button",onClick:()=>i(h=>!h),style:{display:"flex",alignItems:"center",gap:8,padding:"4px 10px 4px 4px",borderRadius:999,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontFamily:"var(--font)",transition:"border-color 0.2s ease"},onMouseEnter:h=>h.currentTarget.style.borderColor="rgba(255,255,255,0.3)",onMouseLeave:h=>h.currentTarget.style.borderColor="var(--border)",children:[a.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:s?`url(${s}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text)",fontWeight:700,fontSize:14},children:!s&&l}),a.jsx("span",{style:{color:"var(--text-secondary)",fontSize:13,fontWeight:600},children:"▼"})]}),r&&a.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",width:260,background:"var(--bg-card, #161b22)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"0 16px 48px rgba(0,0,0,0.5)",zIndex:300,overflow:"hidden",animation:"fadeIn .15s ease",padding:"8px"},children:[a.jsxs("div",{style:{padding:"8px 10px 16px 10px",display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:s?`url(${s}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text)",fontWeight:700,fontSize:16,flexShrink:0},children:!s&&l}),a.jsxs("div",{style:{minWidth:0,flex:1},children:[a.jsxs("div",{style:{fontWeight:600,fontSize:14,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",display:"flex",alignItems:"center",gap:8},children:[(e==null?void 0:e.fullName)||"Account",c.toLowerCase()!=="free"&&a.jsx("span",{style:{fontSize:9,fontWeight:800,padding:"2px 6px",borderRadius:99,background:"var(--accent-blue, #2f81f7)",color:"var(--text)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"PRO"})]}),a.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginTop:3},children:e==null?void 0:e.email})]})]}),a.jsx("div",{style:{height:1,background:"var(--border)",margin:"0 -8px 6px -8px"}}),a.jsxs("div",{style:{padding:"2px 0"},children:[a.jsx(u,{icon:L1,label:"My Profile",onClick:()=>t("profile")}),a.jsx(u,{icon:D1,label:"Settings",onClick:()=>t("settings")}),a.jsx(u,{icon:EE,label:"Security",onClick:()=>t("security")})]}),a.jsx("div",{style:{height:1,background:"var(--border)",margin:"6px -8px"}}),a.jsxs("div",{style:{padding:"2px 0"},children:[a.jsx(u,{icon:Zd,label:"Storage",onClick:()=>t("dashboard")}),a.jsx(u,{icon:tE,label:"Billing",onClick:()=>t("billing")}),c.toLowerCase()==="free"&&a.jsx(u,{icon:Xo,label:"Upgrade Plan",onClick:()=>t("billing"),accent:!0})]}),a.jsx("div",{style:{height:1,background:"var(--border)",margin:"6px -8px"}}),a.jsxs("div",{style:{padding:"2px 0"},children:[a.jsx(u,{icon:Q_,label:"Help Center",onClick:()=>t("help")}),a.jsx(u,{icon:yE,label:"Sign Out",onClick:n,danger:!0})]})]})]})}function A5({account:e,onUpgrade:t}){const[n,r]=b.useState(!0);if(!(e!=null&&e.onTrial)||!n)return null;const i=e.trialDaysLeft??0;return a.jsxs("div",{style:{background:"linear-gradient(90deg, rgba(240,22,58,.12), rgba(64,144,255,.1))",borderBottom:"1px solid var(--border)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13,position:"relative"},children:[a.jsxs("span",{style:{color:"var(--text-secondary)"},children:[a.jsx("strong",{style:{color:"var(--text)"},children:"Pro trial"})," — ",i," day",i!==1?"s":""," left • ",qe(e.storageUsed)," used"]}),a.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--accent)",color:"var(--text)",fontWeight:700,cursor:"pointer",fontSize:12},children:"Upgrade"}),a.jsx("button",{onClick:()=>r(!1),style:{position:"absolute",right:"16px",background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center",justifyContent:"center"},"aria-label":"Dismiss",children:a.jsx(Gf,{size:16})})]})}function N5({account:e,onOpenSettings:t}){return!(e!=null&&e.emailVerificationRequired)||(e==null?void 0:e.isVerified)!==!1?null:a.jsxs("div",{style:{background:"rgba(240, 22, 58, 0.12)",borderBottom:"1px solid rgba(240, 22, 58, 0.35)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[a.jsxs("span",{style:{color:"var(--text-secondary)"},children:[a.jsx("strong",{style:{color:"var(--danger)"},children:"Email not verified"})," — ","Uploads are disabled until you verify. Check your inbox or resend the link."]}),a.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--danger)",color:"var(--text)",fontWeight:700,cursor:"pointer",fontSize:12},children:"Verify email"})]})}function o0({email:e,token:t,onVerified:n,onBack:r}){const[i,o]=b.useState(e||""),[s,l]=b.useState(!!t),[c,u]=b.useState(""),[d,h]=b.useState(""),[f,p]=b.useState(!1);b.useEffect(()=>{t&&g(t)},[t]);const g=async w=>{l(!0),u("");try{const m=await fetch(`${tn}/auth/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:w})}),x=await m.json();if(!m.ok||!x.success)throw new Error(x.message||"Verification failed");p(!0),setTimeout(()=>n==null?void 0:n(),1200)}catch{u("This verification link is invalid or expired. Request a fresh email and try again.")}finally{l(!1)}},y=async()=>{if(!i){u("Enter your email address first.");return}l(!0),u(""),h("");try{const w=await fetch(`${tn}/auth/resend-verification`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}),m=await w.json();if(!w.ok||!m.success)throw new Error(m.message||"Failed to send verification email");h("A fresh verification email is on its way. Open the link in your inbox to continue.")}catch{u("Something went wrong. Please try again.")}finally{l(!1)}};return a.jsxs("div",{className:"auth-screen",children:[a.jsx("style",{children:Zi}),a.jsxs("div",{className:"auth-card",children:[a.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),a.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:f?"Email verified":t?"Verifying your email":"Check your inbox"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:f?"Your account is ready. You can now log in with your email and password.":t?"Hold tight while we confirm your CloudVault account.":"Open the verification link we sent after registration. You only need to do this once."}),!t&&!f&&a.jsxs(a.Fragment,{children:[a.jsxs("label",{style:{display:"block",marginBottom:14},children:[a.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:"Email address"}),a.jsx("input",{className:"input-field",type:"email",value:i,onChange:w=>o(w.target.value),placeholder:"you@company.com",style:{marginTop:6}})]}),a.jsx("button",{type:"button",onClick:y,disabled:s,className:"btn-primary",style:{width:"100%"},children:s?"Sending...":"Resend verification email"})]}),s&&a.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,marginTop:14},children:"Working on it..."}),c&&a.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginTop:14},children:c}),d&&a.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,lineHeight:1.5,marginTop:14},children:d}),a.jsx("button",{type:"button",onClick:r,className:"btn-secondary",style:{width:"100%",marginTop:14},children:"Back to login"})]})]})}function D5({notifications:e,unreadCount:t,onMarkAllRead:n}){const[r,i]=b.useState(!1),o=b.useRef(null);return b.useEffect(()=>{const s=l=>{o.current&&!o.current.contains(l.target)&&i(!1)};return r&&document.addEventListener("click",s),()=>document.removeEventListener("click",s)},[r]),a.jsxs("div",{ref:o,style:{position:"relative"},children:[a.jsxs("button",{type:"button",onClick:()=>i(s=>!s),style:{width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontSize:18,position:"relative"},title:"Notifications",children:["🔔",t>0&&a.jsx("span",{style:{position:"absolute",top:4,right:4,minWidth:16,height:16,borderRadius:99,background:"var(--accent)",color:"var(--text)",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"},children:t>9?"9+":t})]}),r&&a.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",width:320,maxHeight:400,overflow:"auto",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300},children:[a.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("span",{style:{fontWeight:700,fontSize:14},children:"Notifications"}),t>0&&a.jsx("button",{type:"button",onClick:n,style:M5,children:"Mark all read"})]}),e.length===0?a.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)",fontSize:13},children:"Nothing new"}):e.map(s=>a.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",background:s.read?"transparent":"rgba(240,22,58,.06)"},children:[a.jsx("div",{style:{fontWeight:600,fontSize:13},children:s.title}),s.body&&a.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:s.body}),a.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:6},children:wo(s.createdAt)})]},s.id))]})]})}const M5={background:"none",border:"none",color:"var(--accent-blue)",fontSize:12,cursor:"pointer",fontWeight:600};function s0({token:e,onBack:t,onSuccess:n}){const[r,i]=b.useState(""),[o,s]=b.useState(""),[l,c]=b.useState(!1),[u,d]=b.useState(""),[h,f]=b.useState(!1),p=async g=>{if(g.preventDefault(),d(""),!e)return d("This reset link is invalid. Please request a new one.");if(r!==o)return d("Passwords do not match.");if(r.length<8)return d("Password must be at least 8 characters.");if(!/[a-z]/.test(r)||!/[A-Z]/.test(r)||!/\d/.test(r))return d("Use at least one uppercase letter, one lowercase letter, and one number.");c(!0);try{const y=await fetch(`${tn}/auth/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,newPassword:r})}),w=await y.json();if(!y.ok||!w.success)throw new Error(w.message||"Failed to reset password");f(!0),setTimeout(()=>{var m;return(m=n||t)==null?void 0:m()},1400)}catch{d("Something went wrong. Please try again.")}finally{c(!1)}};return a.jsxs("div",{className:"auth-screen",children:[a.jsx("style",{children:Zi}),a.jsxs("div",{className:"auth-card",children:[a.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),a.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:h?"Password updated":"Set a new password"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:h?"You can now log in with your new password.":"Choose a strong password to secure your CloudVault account."}),!h&&a.jsxs("form",{onSubmit:p,children:[a.jsx(a0,{label:"New password",value:r,onChange:i}),a.jsx(a0,{label:"Confirm password",value:o,onChange:s}),u&&a.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginBottom:14},children:u}),a.jsx("button",{type:"submit",disabled:l,className:"btn-primary",style:{width:"100%"},children:l?"Updating...":"Update password"})]}),h&&a.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{width:"100%"},children:"Continue to login"}),a.jsx("button",{type:"button",onClick:t,className:"btn-secondary",style:{width:"100%",marginTop:12},children:"Back to login"})]})]})}function a0({label:e,value:t,onChange:n}){return a.jsxs("label",{style:{display:"block",marginBottom:14},children:[a.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:e}),a.jsx("input",{className:"input-field",type:"password",value:t,onChange:r=>n(r.target.value),required:!0,minLength:8,style:{marginTop:6}})]})}const Za={display:"flex",flexDirection:"column",minHeight:"100vh",background:"var(--bg-primary)",color:"var(--text)",fontFamily:"var(--font)",position:"relative",overflow:"hidden"},Wi=(e,t,n,r=420)=>({position:"fixed",top:e,left:t,width:r,height:r,borderRadius:"50%",background:n,filter:"blur(140px)",opacity:.12,pointerEvents:"none",zIndex:0}),el={padding:"16px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid var(--border)",background:"var(--bg-card)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",position:"relative",zIndex:10},Tu={width:34,height:34,background:"var(--gradient)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,boxShadow:"0 4px 16px rgba(217,0,7,0.25)"},tl={background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:20,padding:"48px 40px 40px",maxWidth:480,width:"100%",textAlign:"center",boxShadow:"0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset",position:"relative",zIndex:5,animation:"floatIn 0.5s ease-out both"},Iu={width:80,height:80,borderRadius:20,background:"var(--gradient-soft)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:38,margin:"0 auto 24px"},Pu={margin:0,fontSize:22,fontWeight:700,letterSpacing:"-0.3px",lineHeight:1.35,wordBreak:"break-word",color:"var(--text)"},Ru={margin:"8px 0 0",color:"var(--text-muted)",fontSize:14,fontWeight:500,letterSpacing:"0.2px"},Gl={width:"100%",height:1,background:"var(--border)",margin:"24px 0",border:"none"},L5={display:"flex",alignItems:"center",gap:12,padding:"14px 16px",background:"var(--bg-card-hover)",borderRadius:14,border:"1px solid var(--border)"},z5={width:40,height:40,borderRadius:"50%",objectFit:"cover",flexShrink:0},O5={width:40,height:40,borderRadius:"50%",background:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:16,color:"var(--text)",flexShrink:0},F5={textAlign:"left",flex:1,minWidth:0},B5={fontSize:14,fontWeight:600,color:"var(--text)",lineHeight:1.3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},V5={fontSize:12,color:"var(--text-muted)",fontWeight:500,lineHeight:1.4,marginTop:2},U5=(e,t)=>({display:"inline-flex",alignItems:"center",gap:5,padding:"5px 12px",borderRadius:999,fontSize:12,fontWeight:600,background:e,color:t,letterSpacing:"0.3px"}),Gb={flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"14px 20px",borderRadius:12,fontWeight:600,fontSize:15,fontFamily:"var(--font)",cursor:"pointer",transition:"all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",border:"none",outline:"none",letterSpacing:"-0.2px"},l0={...Gb,background:"var(--bg-card-hover)",color:"var(--text)",border:"1px solid var(--border)"},c0={...Gb,background:"var(--gradient)",color:"var(--text)",boxShadow:"0 8px 24px rgba(217,0,7,0.25)"},W5={opacity:.6,cursor:"not-allowed"},$5={margin:"20px 0 0",fontSize:12,color:"var(--text-muted)",fontWeight:500,display:"flex",alignItems:"center",justifyContent:"center",gap:6},H5={padding:"16px 28px",borderTop:"1px solid var(--border)",textAlign:"center",fontSize:12,color:"var(--text-muted)",fontWeight:500,background:"var(--bg-card)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",position:"relative",zIndex:10};function G5(){const e={background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.8s ease infinite",borderRadius:10};return a.jsxs("div",{style:Za,children:[a.jsx("div",{style:Wi("-120px","-100px","rgba(217,0,7,0.3)")}),a.jsx("div",{style:Wi("60%","70%","rgba(59,130,246,0.2)",350)}),a.jsxs("header",{style:el,children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{...e,width:34,height:34,borderRadius:10}}),a.jsx("div",{style:{...e,width:100,height:18}})]}),a.jsx("div",{style:{...e,width:130,height:16}})]}),a.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:a.jsxs("div",{style:{...tl,animation:"none"},children:[a.jsx("div",{style:{...e,width:80,height:80,borderRadius:20,margin:"0 auto 24px"}}),a.jsx("div",{style:{...e,width:"70%",height:22,margin:"0 auto 12px"}}),a.jsx("div",{style:{...e,width:"45%",height:14,margin:"0 auto 24px"}}),a.jsx("div",{style:Gl}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",background:"var(--bg-card-hover)",borderRadius:14},children:[a.jsx("div",{style:{...e,width:40,height:40,borderRadius:"50%"}}),a.jsxs("div",{style:{flex:1},children:[a.jsx("div",{style:{...e,width:"60%",height:14,marginBottom:6}}),a.jsx("div",{style:{...e,width:"80%",height:12}})]})]}),a.jsx("div",{style:{...Gl,margin:"24px 0 20px"}}),a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx("div",{style:{...e,flex:1,height:48,borderRadius:12}}),a.jsx("div",{style:{...e,flex:1,height:48,borderRadius:12}})]})]})})]})}function Y5({avatarUrl:e,name:t}){const[n,r]=b.useState(!1),i=(t||"U").charAt(0).toUpperCase();return e&&!n?a.jsx("img",{src:e,alt:t||"User",style:z5,onError:()=>r(!0)}):a.jsx("div",{style:O5,children:i})}function K5({token:e}){const[t,n]=b.useState(!0),[r,i]=b.useState(null),[o,s]=b.useState(null),[l,c]=b.useState(""),[u,d]=b.useState(!1),[h,f]=b.useState(!1),[p,g]=b.useState(!1),[y,w]=b.useState(!1),[m,x]=b.useState(!1),v=async(D="")=>{n(!0),s(null);try{const B=`/share/${e}${D?`?password=${encodeURIComponent(D)}`:""}`,$=await st(B,{},null);i($),d(!1)}catch(B){const $=(B.message||"").toLowerCase();$.includes("password required")||$.includes("invalid password")||$.includes("forbidden")||$.includes("session expired")?(d(!0),D&&s("Invalid password")):s(B.message||"Failed to load shared link.")}finally{n(!1)}};b.useEffect(()=>{v()},[e]);const k=async()=>{if(!(!r||h)){f(!0);try{const D=`/share/${e}/download${l?`?password=${encodeURIComponent(l)}`:""}`,B=await fetch(`${tn}${D}`);if(!B.ok)throw new Error("Download failed");const $=await B.blob();R1($,r.file.name)}catch(D){s(D.message)}finally{f(!1)}}},j=async()=>{const D=`/share/${e}/preview${l?`?password=${encodeURIComponent(l)}`:""}`,B=await fetch(`${tn}${D}`);if(!B.ok)throw new Error("Failed to load preview");return await B.blob()};if(t)return a.jsx(G5,{});if(u&&!r)return a.jsxs("div",{style:Za,children:[a.jsx("div",{style:Wi("-120px","-100px","rgba(217,0,7,0.3)")}),a.jsx("header",{style:el,children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:Tu,children:"☁️"}),a.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]})}),a.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:a.jsxs("div",{style:{...tl,maxWidth:420},children:[a.jsx("div",{style:{...Iu,background:"rgba(217,0,7,0.1)",border:"1px solid rgba(217,0,7,0.2)"},children:"🔒"}),a.jsx("h2",{style:{...Pu,fontSize:22,marginBottom:8},children:"Password Protected"}),a.jsx("p",{style:{...Ru,marginBottom:28},children:"Enter the password to access this shared file."}),a.jsxs("form",{onSubmit:D=>{D.preventDefault(),v(l)},children:[a.jsx("input",{type:"password",placeholder:"Enter password",value:l,onChange:D=>c(D.target.value),autoFocus:!0,style:{width:"100%",padding:"14px 18px",borderRadius:12,border:"1px solid var(--border)",background:"var(--bg-card-hover)",color:"var(--text)",fontFamily:"var(--font)",fontSize:15,fontWeight:500,outline:"none",transition:"border-color 0.2s",marginBottom:16,boxSizing:"border-box"},onFocus:D=>D.target.style.borderColor="var(--accent)",onBlur:D=>D.target.style.borderColor="var(--border)"}),o&&a.jsx("p",{style:{color:"var(--danger)",margin:"0 0 16px",fontSize:13,fontWeight:600},children:o}),a.jsx("button",{type:"submit",style:{...c0,width:"100%",flex:"none"},children:"Unlock File"})]})]})})]});if(o&&!r)return a.jsxs("div",{style:Za,children:[a.jsx("div",{style:Wi("-120px","-100px","rgba(217,0,7,0.3)")}),a.jsx("header",{style:el,children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:Tu,children:"☁️"}),a.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]})}),a.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:a.jsxs("div",{style:{...tl,maxWidth:420},children:[a.jsx("div",{style:{...Iu,background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.2)"},children:"⚠️"}),a.jsx("h2",{style:{...Pu,fontSize:22,marginBottom:8},children:"Link Unavailable"}),a.jsx("p",{style:{...Ru,marginBottom:0},children:o})]})})]});const{file:C,sharedBy:T,permission:E,expiresAt:A}=r,P=Hf(C.mimeType),N=E==="download"||E==="edit";return a.jsxs("div",{style:Za,children:[a.jsx("div",{style:Wi("-120px","-100px","rgba(217,0,7,0.3)")}),a.jsx("div",{style:Wi("60%","70%","rgba(59,130,246,0.2)",350)}),a.jsxs("header",{style:el,children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:Tu,children:"☁️"}),a.jsx("span",{style:{fontWeight:800,fontSize:18,letterSpacing:"-0.5px"},children:"CloudVault"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--text-muted)",fontSize:13,fontWeight:500},children:[a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,color:"var(--accent)"},children:[a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),a.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),"Encrypted"]}),a.jsx("span",{children:"•"}),a.jsx("span",{children:"Shared securely"})]})]}),a.jsx("main",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:24,position:"relative",zIndex:5},children:a.jsxs("div",{style:tl,children:[a.jsx("div",{style:Iu,children:Ys(C.mimeType)}),a.jsx("h1",{style:Pu,children:C.name}),a.jsxs("p",{style:Ru,children:[qe(C.size),a.jsx("span",{style:{margin:"0 8px",opacity:.4},children:"•"}),C.mimeType||"Unknown type"]}),a.jsx("div",{style:Gl}),a.jsxs("div",{style:L5,children:[a.jsx(Y5,{avatarUrl:T==null?void 0:T.avatarUrl,name:T==null?void 0:T.fullName}),a.jsxs("div",{style:F5,children:[a.jsx("div",{style:B5,children:(T==null?void 0:T.fullName)||"A user"}),a.jsx("div",{style:V5,children:"shared this file with you"})]}),a.jsx("div",{style:U5(N?"rgba(34,197,94,0.12)":"rgba(59,130,246,0.12)",N?"#22c55e":"#3b82f6"),children:N?"📥 Download":"👁 View only"})]}),a.jsx("div",{style:{...Gl,margin:"24px 0 20px"}}),a.jsxs("div",{style:{display:"flex",gap:12},children:[P&&a.jsxs("button",{onClick:()=>g(!0),onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),style:{...l0,transform:y?"translateY(-2px)":"none",borderColor:y?"var(--border-hover)":"var(--border)",boxShadow:y?"0 8px 24px rgba(0,0,0,0.2)":"none"},children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),a.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Preview"]}),N&&a.jsxs("button",{onClick:k,disabled:h,onMouseEnter:()=>!h&&x(!0),onMouseLeave:()=>x(!1),style:{...c0,...h?W5:{},transform:m&&!h?"translateY(-2px)":"none",boxShadow:m&&!h?"0 12px 32px rgba(217,0,7,0.35)":"0 8px 24px rgba(217,0,7,0.25)"},children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.jsx("polyline",{points:"7 10 12 15 17 10"}),a.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),h?"Downloading…":"Download"]}),!N&&!P&&a.jsx("div",{style:{...l0,cursor:"default",justifyContent:"center",opacity:.6},children:"👁 View Only"})]}),A&&a.jsxs("div",{style:$5,children:[a.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("polyline",{points:"12 6 12 12 16 14"})]}),"Expires ",new Date(A).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]})]})}),a.jsxs("footer",{style:H5,children:["Powered by ",a.jsx("strong",{style:{color:"var(--text)",fontWeight:700},children:"CloudVault"})," · End-to-end secure file sharing"]}),p&&a.jsx(jb,{file:C,token:null,onClose:()=>g(!1),customFetchBlob:j})]})}const ap=b.createContext({});function lp(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const q5=typeof window<"u",Yl=q5?b.useLayoutEffect:b.useEffect,jc=b.createContext(null);function cp(e,t){e.indexOf(t)===-1&&e.push(t)}function Kl(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Nn=(e,t,n)=>n>t?t:n<e?e:n;let Tc=()=>{};const Nr={},Yb=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Kb=e=>typeof e=="object"&&e!==null,qb=e=>/^0[^.\s]+$/u.test(e);function Xb(e){let t;return()=>(t===void 0&&(t=e()),t)}const Jt=e=>e,Zs=(...e)=>e.reduce((t,n)=>r=>n(t(r))),zs=(e,t,n)=>{const r=t-e;return r?(n-e)/r:1};class up{constructor(){this.subscriptions=[]}add(t){return cp(this.subscriptions,t),()=>Kl(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ft=e=>e*1e3,Xt=e=>e/1e3,Qb=(e,t)=>t?e*(1e3/t):0,Jb=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,X5=1e-7,Q5=12;function J5(e,t,n,r,i){let o,s,l=0;do s=t+(n-t)/2,o=Jb(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>X5&&++l<Q5);return s}function ea(e,t,n,r){if(e===t&&n===r)return Jt;const i=o=>J5(o,0,1,e,n);return o=>o===0||o===1?o:Jb(i(o),t,r)}const Zb=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ew=e=>t=>1-e(1-t),tw=ea(.33,1.53,.69,.99),dp=ew(tw),nw=Zb(dp),rw=e=>e>=1?1:(e*=2)<1?.5*dp(e):.5*(2-Math.pow(2,-10*(e-1))),hp=e=>1-Math.sin(Math.acos(e)),iw=ew(hp),ow=Zb(hp),Z5=ea(.42,0,1,1),e3=ea(0,0,.58,1),sw=ea(.42,0,.58,1),t3=e=>Array.isArray(e)&&typeof e[0]!="number",aw=e=>Array.isArray(e)&&typeof e[0]=="number",n3={linear:Jt,easeIn:Z5,easeInOut:sw,easeOut:e3,circIn:hp,circInOut:ow,circOut:iw,backIn:dp,backInOut:nw,backOut:tw,anticipate:rw},r3=e=>typeof e=="string",u0=e=>{if(aw(e)){Tc(e.length===4);const[t,n,r,i]=e;return ea(t,n,r,i)}else if(r3(e))return n3[e];return e},Ta=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function i3(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),e()),u(s)}const c={schedule:(u,d=!1,h=!1)=>{const p=h&&r?t:n;return d&&o.add(u),p.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0;const d=t;t=n,n=d,t.forEach(l),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const o3=40;function lw(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Ta.reduce((v,k)=>(v[k]=i3(o),v),{}),{setup:l,read:c,resolveKeyframes:u,preUpdate:d,update:h,preRender:f,render:p,postRender:g}=s,y=()=>{const v=Nr.useManualTiming,k=v?i.timestamp:performance.now();n=!1,v||(i.delta=r?1e3/60:Math.max(Math.min(k-i.timestamp,o3),1)),i.timestamp=k,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),h.process(i),f.process(i),p.process(i),g.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(y))},w=()=>{n=!0,r=!0,i.isProcessing||e(y)};return{schedule:Ta.reduce((v,k)=>{const j=s[k];return v[k]=(C,T=!1,E=!1)=>(n||w(),j.schedule(C,T,E)),v},{}),cancel:v=>{for(let k=0;k<Ta.length;k++)s[Ta[k]].cancel(v)},state:i,steps:s}}const{schedule:Se,cancel:Dr,state:Ze,steps:Au}=lw(typeof requestAnimationFrame<"u"?requestAnimationFrame:Jt,!0);let nl;function s3(){nl=void 0}const mt={now:()=>(nl===void 0&&mt.set(Ze.isProcessing||Nr.useManualTiming?Ze.timestamp:performance.now()),nl),set:e=>{nl=e,queueMicrotask(s3)}},cw=e=>t=>typeof t=="string"&&t.startsWith(e),uw=cw("--"),a3=cw("var(--"),fp=e=>a3(e)?l3.test(e.split("/*")[0].trim()):!1,l3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function d0(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const _o={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Os={..._o,transform:e=>Nn(0,1,e)},Ia={..._o,default:1},us=e=>Math.round(e*1e5)/1e5,pp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function c3(e){return e==null}const u3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,mp=(e,t)=>n=>!!(typeof n=="string"&&u3.test(n)&&n.startsWith(e)||t&&!c3(n)&&Object.prototype.hasOwnProperty.call(n,t)),dw=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,l]=r.match(pp);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:l!==void 0?parseFloat(l):1}},d3=e=>Nn(0,255,e),Nu={..._o,transform:e=>Math.round(d3(e))},oi={test:mp("rgb","red"),parse:dw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Nu.transform(e)+", "+Nu.transform(t)+", "+Nu.transform(n)+", "+us(Os.transform(r))+")"};function h3(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const uh={test:mp("#"),parse:h3,transform:oi.transform},ta=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),On=ta("deg"),Rn=ta("%"),Y=ta("px"),f3=ta("vh"),p3=ta("vw"),h0={...Rn,parse:e=>Rn.parse(e)/100,transform:e=>Rn.transform(e*100)},$i={test:mp("hsl","hue"),parse:dw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Rn.transform(us(t))+", "+Rn.transform(us(n))+", "+us(Os.transform(r))+")"},Ue={test:e=>oi.test(e)||uh.test(e)||$i.test(e),parse:e=>oi.test(e)?oi.parse(e):$i.test(e)?$i.parse(e):uh.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?oi.transform(e):$i.transform(e),getAnimatableNone:e=>{const t=Ue.parse(e);return t.alpha=0,Ue.transform(t)}},m3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function g3(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(pp))==null?void 0:t.length)||0)+(((n=e.match(m3))==null?void 0:n.length)||0)>0}const hw="number",fw="color",y3="var",x3="var(",f0="${}",v3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function go(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const l=t.replace(v3,c=>(Ue.test(c)?(r.color.push(o),i.push(fw),n.push(Ue.parse(c))):c.startsWith(x3)?(r.var.push(o),i.push(y3),n.push(c)):(r.number.push(o),i.push(hw),n.push(parseFloat(c))),++o,f0)).split(f0);return{values:n,split:l,indexes:r,types:i}}function b3(e){return go(e).values}function pw({split:e,types:t}){const n=e.length;return r=>{let i="";for(let o=0;o<n;o++)if(i+=e[o],r[o]!==void 0){const s=t[o];s===hw?i+=us(r[o]):s===fw?i+=Ue.transform(r[o]):i+=r[o]}return i}}function w3(e){return pw(go(e))}const k3=e=>typeof e=="number"?0:Ue.test(e)?Ue.getAnimatableNone(e):e,S3=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:k3(e);function C3(e){const t=go(e);return pw(t)(t.values.map((r,i)=>S3(r,t.split[i])))}const yn={test:g3,parse:b3,createTransformer:w3,getAnimatableNone:C3};function Du(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function _3({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=Du(c,l,e+1/3),o=Du(c,l,e),s=Du(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function ql(e,t){return n=>n>0?t:e}const ke=(e,t,n)=>e+(t-e)*n,Mu=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},E3=[uh,oi,$i],j3=e=>E3.find(t=>t.test(e));function p0(e){const t=j3(e);if(!t)return!1;let n=t.parse(e);return t===$i&&(n=_3(n)),n}const m0=(e,t)=>{const n=p0(e),r=p0(t);if(!n||!r)return ql(e,t);const i={...n};return o=>(i.red=Mu(n.red,r.red,o),i.green=Mu(n.green,r.green,o),i.blue=Mu(n.blue,r.blue,o),i.alpha=ke(n.alpha,r.alpha,o),oi.transform(i))},dh=new Set(["none","hidden"]);function T3(e,t){return dh.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function I3(e,t){return n=>ke(e,t,n)}function gp(e){return typeof e=="number"?I3:typeof e=="string"?fp(e)?ql:Ue.test(e)?m0:A3:Array.isArray(e)?mw:typeof e=="object"?Ue.test(e)?m0:P3:ql}function mw(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>gp(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function P3(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=gp(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function R3(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],l=e.values[s]??0;n[i]=l,r[o]++}return n}const A3=(e,t)=>{const n=yn.createTransformer(t),r=go(e),i=go(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?dh.has(e)&&!i.values.length||dh.has(t)&&!r.values.length?T3(e,t):Zs(mw(R3(r,i),i.values),n):ql(e,t)};function gw(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ke(e,t,n):gp(e)(e,t)}const N3=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>Se.update(t,n),stop:()=>Dr(t),now:()=>Ze.isProcessing?Ze.timestamp:mt.now()}},yw=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Xl=2e4;function yp(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Xl;)t+=n,r=e.next(t);return t>=Xl?1/0:t}function D3(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(yp(r),Xl);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:Xt(i)}}const Le={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function hh(e,t){return e*Math.sqrt(1-t*t)}const M3=12;function L3(e,t,n){let r=n;for(let i=1;i<M3;i++)r=r-e(r)/t(r);return r}const Lu=.001;function z3({duration:e=Le.duration,bounce:t=Le.bounce,velocity:n=Le.velocity,mass:r=Le.mass}){let i,o,s=1-t;s=Nn(Le.minDamping,Le.maxDamping,s),e=Nn(Le.minDuration,Le.maxDuration,Xt(e)),s<1?(i=u=>{const d=u*s,h=d*e,f=d-n,p=hh(u,s),g=Math.exp(-h);return Lu-f/p*g},o=u=>{const h=u*s*e,f=h*n+n,p=Math.pow(s,2)*Math.pow(u,2)*e,g=Math.exp(-h),y=hh(Math.pow(u,2),s);return(-i(u)+Lu>0?-1:1)*((f-p)*g)/y}):(i=u=>{const d=Math.exp(-u*e),h=(u-n)*e+1;return-Lu+d*h},o=u=>{const d=Math.exp(-u*e),h=(n-u)*(e*e);return d*h});const l=5/e,c=L3(i,o,l);if(e=Ft(e),isNaN(c))return{stiffness:Le.stiffness,damping:Le.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const O3=["duration","bounce"],F3=["stiffness","damping","mass"];function g0(e,t){return t.some(n=>e[n]!==void 0)}function B3(e){let t={velocity:Le.velocity,stiffness:Le.stiffness,damping:Le.damping,mass:Le.mass,isResolvedFromDuration:!1,...e};if(!g0(e,F3)&&g0(e,O3))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*Nn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Le.mass,stiffness:i,damping:o}}else{const n=z3({...e,velocity:0});t={...t,...n,mass:Le.mass},t.isResolvedFromDuration=!0}return t}function Ql(e=Le.visualDuration,t=Le.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],l={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:h,velocity:f,isResolvedFromDuration:p}=B3({...n,velocity:-Xt(n.velocity||0)}),g=f||0,y=u/(2*Math.sqrt(c*d)),w=s-o,m=Xt(Math.sqrt(c/d)),x=Math.abs(w)<5;r||(r=x?Le.restSpeed.granular:Le.restSpeed.default),i||(i=x?Le.restDelta.granular:Le.restDelta.default);let v,k,j,C,T,E;if(y<1)j=hh(m,y),C=(g+y*m*w)/j,v=P=>{const N=Math.exp(-y*m*P);return s-N*(C*Math.sin(j*P)+w*Math.cos(j*P))},T=y*m*C+w*j,E=y*m*w-C*j,k=P=>Math.exp(-y*m*P)*(T*Math.sin(j*P)+E*Math.cos(j*P));else if(y===1){v=N=>s-Math.exp(-m*N)*(w+(g+m*w)*N);const P=g+m*w;k=N=>Math.exp(-m*N)*(m*P*N-g)}else{const P=m*Math.sqrt(y*y-1);v=$=>{const H=Math.exp(-y*m*$),q=Math.min(P*$,300);return s-H*((g+y*m*w)*Math.sinh(q)+P*w*Math.cosh(q))/P};const N=(g+y*m*w)/P,D=y*m*N-w*P,B=y*m*w-N*P;k=$=>{const H=Math.exp(-y*m*$),q=Math.min(P*$,300);return H*(D*Math.sinh(q)+B*Math.cosh(q))}}const A={calculatedDuration:p&&h||null,velocity:P=>Ft(k(P)),next:P=>{if(!p&&y<1){const D=Math.exp(-y*m*P),B=Math.sin(j*P),$=Math.cos(j*P),H=s-D*(C*B+w*$),q=Ft(D*(T*B+E*$));return l.done=Math.abs(q)<=r&&Math.abs(s-H)<=i,l.value=l.done?s:H,l}const N=v(P);if(p)l.done=P>=h;else{const D=Ft(k(P));l.done=Math.abs(D)<=r&&Math.abs(s-N)<=i}return l.value=l.done?s:N,l},toString:()=>{const P=Math.min(yp(A),Xl),N=yw(D=>A.next(P*D).value,P,30);return P+"ms "+N},toTransition:()=>{}};return A}Ql.applyToOptions=e=>{const t=D3(e,100,Ql);return e.ease=t.ease,e.duration=Ft(t.duration),e.type="keyframes",e};const V3=5;function xw(e,t,n){const r=Math.max(t-V3,0);return Qb(n-e(r),t-r)}function fh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}){const h=e[0],f={done:!1,value:h},p=E=>l!==void 0&&E<l||c!==void 0&&E>c,g=E=>l===void 0?c:c===void 0||Math.abs(l-E)<Math.abs(c-E)?l:c;let y=n*t;const w=h+y,m=s===void 0?w:s(w);m!==w&&(y=m-h);const x=E=>-y*Math.exp(-E/r),v=E=>m+x(E),k=E=>{const A=x(E),P=v(E);f.done=Math.abs(A)<=u,f.value=f.done?m:P};let j,C;const T=E=>{p(f.value)&&(j=E,C=Ql({keyframes:[f.value,g(f.value)],velocity:xw(v,E,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return T(0),{calculatedDuration:null,next:E=>{let A=!1;return!C&&j===void 0&&(A=!0,k(E),T(E)),j!==void 0&&E>=j?C.next(E-j):(!A&&k(E),f)}}}function U3(e,t,n){const r=[],i=n||Nr.mix||gw,o=e.length-1;for(let s=0;s<o;s++){let l=i(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||Jt:t;l=Zs(c,l)}r.push(l)}return r}function W3(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Tc(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=U3(t,r,i),c=l.length,u=d=>{if(s&&d<e[0])return t[0];let h=0;if(c>1)for(;h<e.length-2&&!(d<e[h+1]);h++);const f=zs(e[h],e[h+1],d);return l[h](f)};return n?d=>u(Nn(e[0],e[o-1],d)):u}function $3(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=zs(0,t,r);e.push(ke(n,1,i))}}function H3(e){const t=[0];return $3(t,e.length-1),t}function G3(e,t){return e.map(n=>n*t)}function Y3(e,t){return e.map(()=>t||sw).splice(0,e.length-1)}function ds({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=t3(r)?r.map(u0):u0(r),o={done:!1,value:t[0]},s=G3(n&&n.length===t.length?n:H3(t),e),l=W3(s,t,{ease:Array.isArray(i)?i:Y3(t,i)});return{calculatedDuration:e,next:c=>(o.value=l(c),o.done=c>=e,o)}}const K3=e=>e!==null;function Ic(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(K3),l=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const q3={decay:fh,inertia:fh,tween:ds,keyframes:ds,spring:Ql};function vw(e){typeof e.type=="string"&&(e.type=q3[e.type])}class xp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const X3=e=>e/100;class Jl extends xp{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==mt.now()&&this.tick(mt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;vw(t);const{type:n=ds,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:l}=t;const c=n||ds;c!==ds&&typeof l[0]!="number"&&(this.mixKeyframes=Zs(X3,gw(l[0],l[1])),l=[0,100]);const u=c({...t,keyframes:l});o==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-s})),u.calculatedDuration===null&&(u.calculatedDuration=yp(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:d,repeat:h,repeatType:f,repeatDelay:p,type:g,onUpdate:y,finalKeyframe:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const m=this.currentTime-u*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?m<0:m>i;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let v=this.currentTime,k=r;if(h){const E=Math.min(this.currentTime,i)/l;let A=Math.floor(E),P=E%1;!P&&E>=1&&(P=1),P===1&&A--,A=Math.min(A,h+1),!!(A%2)&&(f==="reverse"?(P=1-P,p&&(P-=p/l)):f==="mirror"&&(k=s)),v=Nn(0,1,P)*l}let j;x?(this.delayState.value=d[0],j=this.delayState):j=k.next(v),o&&!x&&(j.value=o(j.value));let{done:C}=j;!x&&c!==null&&(C=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return T&&g!==fh&&(j.value=Ic(d,this.options,w,this.speed)),y&&y(j.value),T&&this.finish(),j}then(t,n){return this.finished.then(t,n)}get duration(){return Xt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Xt(t)}get time(){return Xt(this.currentTime)}set time(t){t=Ft(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return xw(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(mt.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=Xt(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=N3,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(mt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function Q3(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const si=e=>e*180/Math.PI,ph=e=>{const t=si(Math.atan2(e[1],e[0]));return mh(t)},J3={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:ph,rotateZ:ph,skewX:e=>si(Math.atan(e[1])),skewY:e=>si(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},mh=e=>(e=e%360,e<0&&(e+=360),e),y0=ph,x0=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),v0=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Z3={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:x0,scaleY:v0,scale:e=>(x0(e)+v0(e))/2,rotateX:e=>mh(si(Math.atan2(e[6],e[5]))),rotateY:e=>mh(si(Math.atan2(-e[2],e[0]))),rotateZ:y0,rotate:y0,skewX:e=>si(Math.atan(e[4])),skewY:e=>si(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function gh(e){return e.includes("scale")?1:0}function yh(e,t){if(!e||e==="none")return gh(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=Z3,i=n;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=J3,i=l}if(!i)return gh(t);const o=r[t],s=i[1].split(",").map(tP);return typeof o=="function"?o(s):s[o]}const eP=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return yh(n,t)};function tP(e){return parseFloat(e.trim())}const Eo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],jo=new Set([...Eo,"pathRotation"]),b0=e=>e===_o||e===Y,nP=new Set(["x","y","z"]),rP=Eo.filter(e=>!nP.has(e));function iP(e){const t=[];return rP.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const vr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>yh(t,"x"),y:(e,{transform:t})=>yh(t,"y")};vr.translateX=vr.x;vr.translateY=vr.y;const ui=new Set;let xh=!1,vh=!1,bh=!1;function bw(){if(vh){const e=Array.from(ui).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=iP(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var l;(l=r.getValue(o))==null||l.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}vh=!1,xh=!1,ui.forEach(e=>e.complete(bh)),ui.clear()}function ww(){ui.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(vh=!0)})}function oP(){bh=!0,ww(),bw(),bh=!1}class vp{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(ui.add(this),xh||(xh=!0,Se.read(ww),Se.resolveKeyframes(bw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}Q3(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),ui.delete(this)}cancel(){this.state==="scheduled"&&(ui.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const sP=e=>e.startsWith("--");function kw(e,t,n){sP(t)?e.style.setProperty(t,n):e.style[t]=n}const aP={};function Sw(e,t){const n=Xb(e);return()=>aP[t]??n()}const lP=Sw(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Cw=Sw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Qo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,w0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Qo([0,.65,.55,1]),circOut:Qo([.55,0,1,.45]),backIn:Qo([.31,.01,.66,-.59]),backOut:Qo([.33,1.53,.69,.99])};function _w(e,t){if(e)return typeof e=="function"?Cw()?yw(e,t):"ease-out":aw(e)?Qo(e):Array.isArray(e)?e.map(n=>_w(n,t)||w0.easeOut):w0[e]}function cP(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:l="easeOut",times:c}={},u=void 0){const d={[t]:n};c&&(d.offset=c);const h=_w(l,i);Array.isArray(h)&&(d.easing=h);const f={delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return u&&(f.pseudoElement=u),e.animate(d,f)}function Ew(e){return typeof e=="function"&&"applyToOptions"in e}function uP({type:e,...t}){return Ew(e)&&Cw()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class jw extends xp{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,Tc(typeof t.type!="string");const u=uP(t);this.animation=cP(n,r,i,u,o),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=Ic(i,this.options,l,this.speed);this.updateMotionValue&&this.updateMotionValue(d),kw(n,r,d),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Xt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Xt(t)}get time(){return Xt(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ft(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:i}){var o;return this.allowFlatten&&((o=this.animation.effect)==null||o.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&lP()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),Jt):i(this)}}const Tw={anticipate:rw,backInOut:nw,circInOut:ow};function dP(e){return e in Tw}function hP(e){typeof e.ease=="string"&&dP(e.ease)&&(e.ease=Tw[e.ease])}const zu=10;class fP extends jw{constructor(t){hP(t),vw(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const l=new Jl({...s,autoplay:!1}),c=Math.max(zu,mt.now()-this.startTime),u=Nn(0,zu,c-zu),d=l.sample(c).value,{name:h}=this.options;o&&h&&kw(o,h,d),n.setWithVelocity(l.sample(Math.max(0,c-u)).value,d,u),l.stop()}}const k0=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(yn.test(e)||e==="0")&&!e.startsWith("url("));function pP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function mP(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=k0(i,t),l=k0(o,t);return!s||!l?!1:pP(e)||(n==="spring"||Ew(n))&&r}function wh(e){e.duration=0,e.type="keyframes"}const Iw=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),gP=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function yP(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&gP.test(e[t]))return!0;return!1}const xP=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),vP=Xb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function bP(e){var h;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s,keyframes:l}=e,c=(h=t==null?void 0:t.owner)==null?void 0:h.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;const{onUpdate:u,transformTemplate:d}=t.owner.getProps();return vP()&&n&&(Iw.has(n)||xP.has(n)&&yP(l))&&(n!=="transform"||!d)&&!u&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const wP=40;class kP extends xp{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:l,name:c,motionValue:u,element:d,...h}){var g;super(),this.stop=()=>{var y,w;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(w=this.keyframeResolver)==null||w.cancel()},this.createdAt=mt.now();const f={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:c,motionValue:u,element:d,...h},p=(d==null?void 0:d.KeyframeResolver)||vp;this.keyframeResolver=new p(l,(y,w,m)=>this.onKeyframesResolved(y,w,f,!m),c,u,d),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(t,n,r,i){var m,x;this.keyframeResolver=void 0;const{name:o,type:s,velocity:l,delay:c,isHandoff:u,onUpdate:d}=r;this.resolvedAt=mt.now();let h=!0;mP(t,o,s,l)||(h=!1,(Nr.instantAnimations||!c)&&(d==null||d(Ic(t,r,n))),t[0]=t[t.length-1],wh(r),r.repeat=0);const p={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>wP?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},g=h&&!u&&bP(p),y=(x=(m=p.motionValue)==null?void 0:m.owner)==null?void 0:x.current;let w;if(g)try{w=new fP({...p,element:y})}catch{w=new Jl(p)}else w=new Jl(p);w.finished.then(()=>{this.notifyFinished()}).catch(Jt),this.pendingTimeline&&(this.stopTimeline=w.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=w}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),oP()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function Pw(e,t,n,r=0,i=1){const o=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),s=e.size,l=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:l-o*r}const S0=30,SP=e=>!isNaN(parseFloat(e));class CP{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=mt.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=mt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=SP(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new up);const r=this.events[t].add(n);return t==="change"?()=>{r(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=mt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>S0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,S0);return Qb(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yo(e,t){return new CP(e,t)}function Rw(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function bp(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?Rw(n,e):n}const _P={type:"spring",stiffness:500,damping:25,restSpeed:10},EP=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),jP={type:"keyframes",duration:.8},TP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},IP=(e,{keyframes:t})=>t.length>2?jP:jo.has(e)?e.startsWith("scale")?EP(t[1]):_P:TP,PP=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function RP(e){for(const t in e)if(!PP.has(t))return!0;return!1}const wp=(e,t,n,r={},i,o)=>s=>{const l=bp(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Ft(c);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:f=>{t.set(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{s(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:o?void 0:i};RP(l)||Object.assign(d,IP(e,d)),d.duration&&(d.duration=Ft(d.duration)),d.repeatDelay&&(d.repeatDelay=Ft(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let h=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(wh(d),d.delay===0&&(h=!0)),(Nr.instantAnimations||Nr.skipAnimations||i!=null&&i.shouldSkipAnimations||l.skipAnimations)&&(h=!0,wh(d),d.delay=0),d.allowFlatten=!l.type&&!l.ease,h&&!o&&t.get()!==void 0){const f=Ic(d.keyframes,l);if(f!==void 0){Se.update(()=>{d.onUpdate(f),d.onComplete()});return}}return l.isSync?new Jl(d):new kP(d)},AP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function NP(e){const t=AP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Aw(e,t,n=1){const[r,i]=NP(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Yb(s)?parseFloat(s):s}return fp(i)?Aw(i,t,n+1):i}function C0(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function kp(e,t,n,r){if(typeof t=="function"){const[i,o]=C0(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=C0(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function di(e,t,n){const r=e.getProps();return kp(r,t,n!==void 0?n:r.custom,e)}const Nw=new Set(["width","height","top","left","right","bottom",...Eo]),kh=e=>Array.isArray(e);function DP(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,yo(n))}function MP(e){return kh(e)?e[e.length-1]||0:e}function LP(e,t){const n=di(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const l=MP(o[s]);DP(e,s,l)}}const et=e=>!!(e&&e.getVelocity);function zP(e){return!!(et(e)&&e.add)}function Sh(e,t){const n=e.getValue("willChange");if(zP(n))return n.add(t);if(!n&&Nr.WillChange){const r=new Nr.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function Sp(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const OP="framerAppearId",Dw="data-"+Sp(OP);function Mw(e){return e.props[Dw]}function FP({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Lw(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o,transitionEnd:s,...l}=t;const c=e.getDefaultTransition();o=o?Rw(o,c):c;const u=o==null?void 0:o.reduceMotion,d=o==null?void 0:o.skipAnimations;r&&(o=r);const h=[],f=i&&e.animationState&&e.animationState.getState()[i],p=o==null?void 0:o.path;p&&p.animateVisualElement(e,l,o,n,h);for(const g in l){const y=e.getValue(g,e.latestValues[g]??null),w=l[g];if(w===void 0||f&&FP(f,g))continue;const m={delay:n,...bp(o||{},g)};d&&(m.skipAnimations=!0);const x=y.get();if(x!==void 0&&!y.isAnimating()&&!Array.isArray(w)&&w===x&&!m.velocity){Se.update(()=>y.set(w));continue}let v=!1;if(window.MotionHandoffAnimation){const C=Mw(e);if(C){const T=window.MotionHandoffAnimation(C,g,Se);T!==null&&(m.startTime=T,v=!0)}}Sh(e,g);const k=u??e.shouldReduceMotion;y.start(wp(g,y,w,k&&Nw.has(g)?{type:!1}:m,e,v));const j=y.animation;j&&h.push(j)}if(s){const g=()=>Se.update(()=>{s&&LP(e,s)});h.length?Promise.all(h).then(g):g()}return h}function Ch(e,t,n={}){var c;const r=di(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Lw(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:h,staggerDirection:f}=i;return BP(e,t,u,d,h,f,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[u,d]=l==="beforeChildren"?[o,s]:[s,o];return u().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function BP(e,t,n=0,r=0,i=0,o=1,s){const l=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),l.push(Ch(c,t,{...s,delay:n+(typeof r=="function"?0:r)+Pw(e.variantChildren,c,r,i,o)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function VP(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Ch(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Ch(e,t,n);else{const i=typeof t=="function"?di(e,t,n.custom):t;r=Promise.all(Lw(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const UP={test:e=>e==="auto",parse:e=>e},zw=e=>t=>t.test(e),Ow=[_o,Y,Rn,On,p3,f3,UP],_0=e=>Ow.find(zw(e));function WP(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||qb(e):!0}const $P=new Set(["brightness","contrast","saturate","opacity"]);function HP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(pp)||[];if(!r)return e;const i=n.replace(r,"");let o=$P.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const GP=/\b([a-z-]*)\(.*?\)/gu,_h={...yn,getAnimatableNone:e=>{const t=e.match(GP);return t?t.map(HP).join(" "):e}},Eh={...yn,getAnimatableNone:e=>{const t=yn.parse(e);return yn.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},E0={..._o,transform:Math.round},YP={rotate:On,pathRotation:On,rotateX:On,rotateY:On,rotateZ:On,scale:Ia,scaleX:Ia,scaleY:Ia,scaleZ:Ia,skew:On,skewX:On,skewY:On,distance:Y,translateX:Y,translateY:Y,translateZ:Y,x:Y,y:Y,z:Y,perspective:Y,transformPerspective:Y,opacity:Os,originX:h0,originY:h0,originZ:Y},Zl={borderWidth:Y,borderTopWidth:Y,borderRightWidth:Y,borderBottomWidth:Y,borderLeftWidth:Y,borderRadius:Y,borderTopLeftRadius:Y,borderTopRightRadius:Y,borderBottomRightRadius:Y,borderBottomLeftRadius:Y,width:Y,maxWidth:Y,height:Y,maxHeight:Y,top:Y,right:Y,bottom:Y,left:Y,inset:Y,insetBlock:Y,insetBlockStart:Y,insetBlockEnd:Y,insetInline:Y,insetInlineStart:Y,insetInlineEnd:Y,padding:Y,paddingTop:Y,paddingRight:Y,paddingBottom:Y,paddingLeft:Y,paddingBlock:Y,paddingBlockStart:Y,paddingBlockEnd:Y,paddingInline:Y,paddingInlineStart:Y,paddingInlineEnd:Y,margin:Y,marginTop:Y,marginRight:Y,marginBottom:Y,marginLeft:Y,marginBlock:Y,marginBlockStart:Y,marginBlockEnd:Y,marginInline:Y,marginInlineStart:Y,marginInlineEnd:Y,fontSize:Y,backgroundPositionX:Y,backgroundPositionY:Y,...YP,zIndex:E0,fillOpacity:Os,strokeOpacity:Os,numOctaves:E0},KP={...Zl,color:Ue,backgroundColor:Ue,outlineColor:Ue,fill:Ue,stroke:Ue,borderColor:Ue,borderTopColor:Ue,borderRightColor:Ue,borderBottomColor:Ue,borderLeftColor:Ue,filter:_h,WebkitFilter:_h,mask:Eh,WebkitMask:Eh},Fw=e=>KP[e],qP=new Set([_h,Eh]);function Bw(e,t){let n=Fw(e);return qP.has(n)||(n=yn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const XP=new Set(["auto","none","0"]);function QP(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!XP.has(o)&&go(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Bw(n,i)}class JP extends vp{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let h=t[d];if(typeof h=="string"&&(h=h.trim(),fp(h))){const f=Aw(h,n.current);f!==void 0&&(t[d]=f),d===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Nw.has(r)||t.length!==2)return;const[i,o]=t,s=_0(i),l=_0(o),c=d0(i),u=d0(o);if(c!==u&&vr[r]){this.needsMeasurement=!0;return}if(s!==l)if(b0(s)&&b0(l))for(let d=0;d<t.length;d++){const h=t[d];typeof h=="string"&&(t[d]=parseFloat(h))}else vr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||WP(t[i]))&&r.push(i);r.length&&QP(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=vr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var l;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=vr[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([c,u])=>{t.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const Cp=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Vw(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(r=>r!=null)}const jh=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function rl(e){return Kb(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:_p}=lw(queueMicrotask,!1),cn={x:!1,y:!1};function Uw(){return cn.x||cn.y}function ZP(e){return e==="x"||e==="y"?cn[e]?null:(cn[e]=!0,()=>{cn[e]=!1}):cn.x||cn.y?null:(cn.x=cn.y=!0,()=>{cn.x=cn.y=!1})}function Ww(e,t){const n=Vw(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function e6(e){return!(e.pointerType==="touch"||Uw())}function t6(e,t,n={}){const[r,i,o]=Ww(e,n);return r.forEach(s=>{let l=!1,c=!1,u;const d=()=>{s.removeEventListener("pointerleave",g)},h=w=>{u&&(u(w),u=void 0),d()},f=w=>{l=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),c&&(c=!1,h(w))},p=()=>{l=!0,window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",f,i)},g=w=>{if(w.pointerType!=="touch"){if(l){c=!0;return}h(w)}},y=w=>{if(!e6(w))return;c=!1;const m=t(s,w);typeof m=="function"&&(u=m,s.addEventListener("pointerleave",g,i))};s.addEventListener("pointerenter",y,i),s.addEventListener("pointerdown",p,i)}),o}const $w=(e,t)=>t?e===t?!0:$w(e,t.parentElement):!1,Ep=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,n6=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function r6(e){return n6.has(e.tagName)||e.isContentEditable===!0}const i6=new Set(["INPUT","SELECT","TEXTAREA"]);function o6(e){return i6.has(e.tagName)||e.isContentEditable===!0}const il=new WeakSet;function j0(e){return t=>{t.key==="Enter"&&e(t)}}function Ou(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const s6=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=j0(()=>{if(il.has(n))return;Ou(n,"down");const i=j0(()=>{Ou(n,"up")}),o=()=>Ou(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function T0(e){return Ep(e)&&!Uw()}const I0=new WeakSet;function a6(e,t,n={}){const[r,i,o]=Ww(e,n),s=l=>{const c=l.currentTarget;if(!T0(l)||I0.has(l))return;il.add(c),n.stopPropagation&&I0.add(l);const u=t(c,l),d={...i,capture:!0},h=(g,y)=>{window.removeEventListener("pointerup",f,d),window.removeEventListener("pointercancel",p,d),il.has(c)&&il.delete(c),T0(g)&&typeof u=="function"&&u(g,{success:y})},f=g=>{h(g,c===window||c===document||n.useGlobalTarget||$w(c,g.target))},p=g=>{h(g,!1)};window.addEventListener("pointerup",f,d),window.addEventListener("pointercancel",p,d)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",s,i),rl(l)&&(l.addEventListener("focus",u=>s6(u,i)),!r6(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),o}function jp(e){return Kb(e)&&"ownerSVGElement"in e}const ol=new WeakMap;let cr;const Hw=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:jp(r)&&"getBBox"in r?r.getBBox()[t]:r[n],l6=Hw("inline","width","offsetWidth"),c6=Hw("block","height","offsetHeight");function u6({target:e,borderBoxSize:t}){var n;(n=ol.get(e))==null||n.forEach(r=>{r(e,{get width(){return l6(e,t)},get height(){return c6(e,t)}})})}function d6(e){e.forEach(u6)}function h6(){typeof ResizeObserver>"u"||(cr=new ResizeObserver(d6))}function f6(e,t){cr||h6();const n=Vw(e);return n.forEach(r=>{let i=ol.get(r);i||(i=new Set,ol.set(r,i)),i.add(t),cr==null||cr.observe(r)}),()=>{n.forEach(r=>{const i=ol.get(r);i==null||i.delete(t),i!=null&&i.size||cr==null||cr.unobserve(r)})}}const sl=new Set;let Hi;function p6(){Hi=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};sl.forEach(t=>t(e))},window.addEventListener("resize",Hi)}function m6(e){return sl.add(e),Hi||p6(),()=>{sl.delete(e),!sl.size&&typeof Hi=="function"&&(window.removeEventListener("resize",Hi),Hi=void 0)}}function P0(e,t){return typeof e=="function"?m6(e):f6(e,t)}function g6(e){return jp(e)&&e.tagName==="svg"}const y6=[...Ow,Ue,yn],x6=e=>y6.find(zw(e)),R0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Gi=()=>({x:R0(),y:R0()}),A0=()=>({min:0,max:0}),He=()=>({x:A0(),y:A0()}),v6=new WeakMap;function Pc(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Fs(e){return typeof e=="string"||Array.isArray(e)}const Tp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ip=["initial",...Tp];function Rc(e){return Pc(e.animate)||Ip.some(t=>Fs(e[t]))}function Gw(e){return!!(Rc(e)||e.variants)}function b6(e,t,n){for(const r in t){const i=t[r],o=n[r];if(et(i))e.addValue(r,i);else if(et(o))e.addValue(r,yo(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,yo(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Th={current:null},Yw={current:!1},w6=typeof window<"u";function k6(){if(Yw.current=!0,!!w6)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Th.current=e.matches;e.addEventListener("change",t),t()}else Th.current=!1}const N0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ec={};function Kw(e){ec=e}function S6(){return ec}class C6{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:o,blockInitialAnimation:s,visualState:l},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=vp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=mt.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Se.render(this.render,!1,!0))};const{latestValues:u,renderState:d}=l;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=o,this.options=c,this.blockInitialAnimation=!!s,this.isControllingVariants=Rc(n),this.isVariantNode=Gw(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:h,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const g=f[p];u[p]!==void 0&&et(g)&&g.set(u[p])}}mount(t){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=t,v6.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Yw.current||k6(),this.shouldReduceMotion=Th.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),Dr(this.notifyUpdate),Dr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&Iw.has(t)&&this.current instanceof HTMLElement){const{factory:s,keyframes:l,times:c,ease:u,duration:d}=n.accelerate,h=new jw({element:this.current,name:t,keyframes:l,times:c,ease:u,duration:Ft(d)}),f=s(h);this.valueSubscriptions.set(t,()=>{f(),h.cancel()});return}const r=jo.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&Se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ec){const n=ec[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):He()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<N0.length;r++){const i=N0[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=b6(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=yo(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Yb(r)||qb(r))?r=parseFloat(r):!x6(r)&&yn.test(n)&&(r=Bw(t,n)),this.setBaseTarget(t,et(r)?r.get():r)),et(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=kp(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!et(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new up),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){_p.render(this.render)}}class qw extends C6{constructor(){super(...arguments),this.KeyframeResolver=JP}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;et(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Fr{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Xw({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function _6({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function E6(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Fu(e){return e===void 0||e===1}function Ih({scale:e,scaleX:t,scaleY:n}){return!Fu(e)||!Fu(t)||!Fu(n)}function Jr(e){return Ih(e)||Qw(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Qw(e){return D0(e.x)||D0(e.y)}function D0(e){return e&&e!=="0%"}function tc(e,t,n){const r=e-n,i=t*r;return n+i}function M0(e,t,n,r,i){return i!==void 0&&(e=tc(e,i,r)),tc(e,n,r)+t}function Ph(e,t=0,n=1,r,i){e.min=M0(e.min,t,n,r,i),e.max=M0(e.max,t,n,r,i)}function Jw(e,{x:t,y:n}){Ph(e.x,t.translate,t.scale,t.originPoint),Ph(e.y,n.translate,n.scale,n.originPoint)}const L0=.999999999999,z0=1.0000000000001;function j6(e,t,n,r=!1){var l;const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let c=0;c<i;c++){o=n[c],s=o.projectionDelta;const{visualElement:u}=o.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&(Cn(e.x,-o.scroll.offset.x),Cn(e.y,-o.scroll.offset.y)),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Jw(e,s)),r&&Jr(o.latestValues)&&al(e,o.latestValues,(l=o.layout)==null?void 0:l.layoutBox))}t.x<z0&&t.x>L0&&(t.x=1),t.y<z0&&t.y>L0&&(t.y=1)}function Cn(e,t){e.min+=t,e.max+=t}function O0(e,t,n,r,i=.5){const o=ke(e.min,e.max,i);Ph(e,t,n,o,r)}function F0(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function al(e,t,n){const r=n??e;O0(e.x,F0(t.x,r.x),t.scaleX,t.scale,t.originX),O0(e.y,F0(t.y,r.y),t.scaleY,t.scale,t.originY)}function Zw(e,t){return Xw(E6(e.getBoundingClientRect(),t))}function T6(e,t,n){const r=Zw(e,n),{scroll:i}=t;return i&&(Cn(r.x,i.offset.x),Cn(r.y,i.offset.y)),r}const I6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},P6=Eo.length;function R6(e,t,n){let r="",i=!0;for(let s=0;s<P6;s++){const l=Eo[s],c=e[l];if(c===void 0)continue;let u=!0;if(typeof c=="number")u=c===(l.startsWith("scale")?1:0);else{const d=parseFloat(c);u=l.startsWith("scale")?d===1:d===0}if(!u||n){const d=jh(c,Zl[l]);if(!u){i=!1;const h=I6[l]||l;r+=`${h}(${d}) `}n&&(t[l]=d)}}const o=e.pathRotation;return o&&(i=!1,r+=`rotate(${jh(o,Zl.pathRotation)}) `),r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Pp(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,l=!1;for(const c in t){const u=t[c];if(jo.has(c)){s=!0;continue}else if(uw(c)){i[c]=u;continue}else{const d=jh(u,Zl[c]);c.startsWith("origin")?(l=!0,o[c]=d):r[c]=d}}if(t.transform||(s||n?r.transform=R6(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${c} ${u} ${d}`}}function e2(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function B0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Wo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(Y.test(e))e=parseFloat(e);else return e;const n=B0(e,t.target.x),r=B0(e,t.target.y);return`${n}% ${r}%`}},A6={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=yn.parse(e);if(i.length>5)return r;const o=yn.createTransformer(e),s=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+s]/=l,i[1+s]/=c;const u=ke(l,c,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}},Rh={borderRadius:{...Wo,applyTo:[...Cp]},borderTopLeftRadius:Wo,borderTopRightRadius:Wo,borderBottomLeftRadius:Wo,borderBottomRightRadius:Wo,boxShadow:A6};function t2(e,{layout:t,layoutId:n}){return jo.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Rh[e]||e==="opacity")}function Rp(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const l in r)(et(r[l])||i&&et(i[l])||t2(l,e)||((s=n==null?void 0:n.getValue(l))==null?void 0:s.liveStyle)!==void 0)&&(o[l]=r[l]);return o}function N6(e){return window.getComputedStyle(e)}class D6 extends qw{constructor(){super(...arguments),this.type="html",this.renderInstance=e2}mount(t){Tc(!!t.style),super.mount(t)}readValueFromInstance(t,n){var r;if(jo.has(n))return(r=this.projection)!=null&&r.isProjecting?gh(n):eP(t,n);{const i=N6(t),o=(uw(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Zw(t,n)}build(t,n,r){Pp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Rp(t,n,r)}}const M6={offset:"stroke-dashoffset",array:"stroke-dasharray"},L6={offset:"strokeDashoffset",array:"strokeDasharray"};function z6(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?M6:L6;e[o.offset]=`${-r}`,e[o.array]=`${t} ${n}`}const n2=["transform","opacity","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function r2(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...l},c,u,d){if(Pp(e,l,u),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:f}=e;for(const p of n2)h[p]!==void 0&&(f[p]=h[p],delete h[p]);(f.transform||h.transformOrigin)&&(f.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),f.transform&&(f.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete h.transformBox),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),i!==void 0&&z6(h,i,o,s,!1)}const i2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),o2=e=>typeof e=="string"&&e.toLowerCase()==="svg";function O6(e,t,n,r){e2(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(i2.has(i)?i:Sp(i),t.attrs[i])}function s2(e,t,n){const r=Rp(e,t,n);for(const i in e)if(et(e[i])||et(t[i])){const o=Eo.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class F6 extends qw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=He}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(jo.has(n)){const r=Fw(n);return r&&r.default||0}if(n2.includes(n)){const i=getComputedStyle(t)[n];if(typeof i=="string"&&i)return i.trim()}return n=i2.has(n)?n:Sp(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return s2(t,n,r)}build(t,n,r){r2(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){O6(t,n,r,i)}mount(t){this.isSVGTag=o2(t.tagName),super.mount(t)}}const B6=Ip.length;function a2(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?a2(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<B6;n++){const r=Ip[n],i=e.props[r];(Fs(i)||i===!1)&&(t[r]=i)}return t}function l2(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const V6=[...Tp].reverse(),U6=Tp.length;function W6(e){return t=>Promise.all(t.map(({animation:n,options:r})=>VP(e,n,r)))}function $6(e){let t=W6(e),n=V0(),r=!0,i=!1;const o=u=>(d,h)=>{var p;const f=di(e,h,u==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);if(f){const{transition:g,transitionEnd:y,...w}=f;d={...d,...w,...y}}return d};function s(u){t=u(e)}function l(u){const{props:d}=e,h=a2(e.parent)||{},f=[],p=new Set;let g={},y=1/0;for(let m=0;m<U6;m++){const x=V6[m],v=n[x],k=d[x]!==void 0?d[x]:h[x],j=Fs(k),C=x===u?v.isActive:null;C===!1&&(y=m);let T=k===h[x]&&k!==d[x]&&j;if(T&&(r||i)&&e.manuallyAnimateOnMount&&(T=!1),v.protectedKeys={...g},!v.isActive&&C===null||!k&&!v.prevProp||Pc(k)||typeof k=="boolean")continue;if(x==="exit"&&v.isActive&&C!==!0){v.prevResolvedValues&&(g={...g,...v.prevResolvedValues});continue}const E=H6(v.prevProp,k);let A=E||x===u&&v.isActive&&!T&&j||m>y&&j,P=!1;const N=Array.isArray(k)?k:[k];let D=N.reduce(o(x),{});C===!1&&(D={});const{prevResolvedValues:B={}}=v,$={...B,...D},H=M=>{A=!0,p.has(M)&&(P=!0,p.delete(M)),v.needsAnimating[M]=!0;const U=e.getValue(M);U&&(U.liveStyle=!1)};for(const M in $){const U=D[M],S=B[M];if(g.hasOwnProperty(M))continue;let X=!1;kh(U)&&kh(S)?X=!l2(U,S)||E:X=U!==S,X?U!=null?H(M):p.add(M):U!==void 0&&p.has(M)?H(M):v.protectedKeys[M]=!0}v.prevProp=k,v.prevResolvedValues=D,v.isActive&&(g={...g,...D}),(r||i)&&e.blockInitialAnimation&&(A=!1);const q=T&&E;A&&(!q||P)&&f.push(...N.map(M=>{const U={type:x};if(typeof M=="string"&&(r||i)&&!q&&e.manuallyAnimateOnMount&&e.parent){const{parent:S}=e,X=di(S,M);if(S.enteringChildren&&X){const{delayChildren:ne}=X.transition||{};U.delay=Pw(S.enteringChildren,e,ne)}}return{animation:M,options:U}}))}if(p.size){const m={};if(typeof d.initial!="boolean"){const x=di(e,Array.isArray(d.initial)?d.initial[0]:d.initial);x&&x.transition&&(m.transition=x.transition)}p.forEach(x=>{const v=e.getBaseTarget(x),k=e.getValue(x);k&&(k.liveStyle=!0),m[x]=v??null}),f.push({animation:m})}let w=!!f.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,i=!1,w?t(f):Promise.resolve()}function c(u,d){var f;if(n[u].isActive===d)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(p=>{var g;return(g=p.animationState)==null?void 0:g.setActive(u,d)}),n[u].isActive=d;const h=l(u);for(const p in n)n[p].protectedKeys={};return h}return{animateChanges:l,setActive:c,setAnimateFunction:s,getState:()=>n,reset:()=>{n=V0(),i=!0}}}function H6(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!l2(t,e):!1}function Kr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function V0(){return{animate:Kr(!0),whileInView:Kr(),whileHover:Kr(),whileTap:Kr(),whileDrag:Kr(),whileFocus:Kr(),exit:Kr()}}function Ah(e,t){e.min=t.min,e.max=t.max}function ln(e,t){Ah(e.x,t.x),Ah(e.y,t.y)}function U0(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const c2=1e-4,G6=1-c2,Y6=1+c2,u2=.01,K6=0-u2,q6=0+u2;function gt(e){return e.max-e.min}function X6(e,t,n){return Math.abs(e-t)<=n}function W0(e,t,n,r=.5){e.origin=r,e.originPoint=ke(t.min,t.max,e.origin),e.scale=gt(n)/gt(t),e.translate=ke(n.min,n.max,e.origin)-e.originPoint,(e.scale>=G6&&e.scale<=Y6||isNaN(e.scale))&&(e.scale=1),(e.translate>=K6&&e.translate<=q6||isNaN(e.translate))&&(e.translate=0)}function hs(e,t,n,r){W0(e.x,t.x,n.x,r?r.originX:void 0),W0(e.y,t.y,n.y,r?r.originY:void 0)}function $0(e,t,n,r=0){const i=r?ke(n.min,n.max,r):n.min;e.min=i+t.min,e.max=e.min+gt(t)}function Q6(e,t,n,r){$0(e.x,t.x,n.x,r==null?void 0:r.x),$0(e.y,t.y,n.y,r==null?void 0:r.y)}function H0(e,t,n,r=0){const i=r?ke(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+gt(t)}function nc(e,t,n,r){H0(e.x,t.x,n.x,r==null?void 0:r.x),H0(e.y,t.y,n.y,r==null?void 0:r.y)}function G0(e,t,n,r,i){return e-=t,e=tc(e,1/n,r),i!==void 0&&(e=tc(e,1/i,r)),e}function J6(e,t=0,n=1,r=.5,i,o=e,s=e){if(Rn.test(t)&&(t=parseFloat(t),t=ke(s.min,s.max,t/100)-s.min),typeof t!="number")return;let l=ke(o.min,o.max,r);e===o&&(l-=t),e.min=G0(e.min,t,n,l,i),e.max=G0(e.max,t,n,l,i)}function Y0(e,t,[n,r,i],o,s){J6(e,t[n],t[r],t[i],t.scale,o,s)}const Z6=["x","scaleX","originX"],eR=["y","scaleY","originY"];function K0(e,t,n,r){Y0(e.x,t,Z6,n?n.x:void 0,r?r.x:void 0),Y0(e.y,t,eR,n?n.y:void 0,r?r.y:void 0)}function q0(e){return e.translate===0&&e.scale===1}function d2(e){return q0(e.x)&&q0(e.y)}function X0(e,t){return e.min===t.min&&e.max===t.max}function tR(e,t){return X0(e.x,t.x)&&X0(e.y,t.y)}function Q0(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function h2(e,t){return Q0(e.x,t.x)&&Q0(e.y,t.y)}function J0(e){return gt(e.x)/gt(e.y)}function Z0(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function kn(e){return[e("x"),e("y")]}function nR(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,pathRotation:h,rotateX:f,rotateY:p,skewX:g,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),h&&(r+=`rotate(${h}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),g&&(r+=`skewX(${g}deg) `),y&&(r+=`skewY(${y}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const rR=Cp.length,ey=e=>typeof e=="string"?parseFloat(e):e,ty=e=>typeof e=="number"||Y.test(e);function iR(e,t,n,r,i,o){i?(e.opacity=ke(0,n.opacity??1,oR(r)),e.opacityExit=ke(t.opacity??1,0,sR(r))):o&&(e.opacity=ke(t.opacity??1,n.opacity??1,r));for(let s=0;s<rR;s++){const l=Cp[s];let c=ny(t,l),u=ny(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||ty(c)===ty(u)?(e[l]=Math.max(ke(ey(c),ey(u),r),0),(Rn.test(u)||Rn.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=ke(t.rotate||0,n.rotate||0,r))}function ny(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const oR=f2(0,.5,iw),sR=f2(.5,.95,Jt);function f2(e,t,n){return r=>r<e?0:r>t?1:n(zs(e,t,r))}function aR(e,t,n){const r=et(e)?e:yo(e);return r.start(wp("",r,t,n)),r.animation}function Bs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}const lR=(e,t)=>e.depth-t.depth;class cR{constructor(){this.children=[],this.isDirty=!1}add(t){cp(this.children,t),this.isDirty=!0}remove(t){Kl(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(lR),this.isDirty=!1,this.children.forEach(t)}}function uR(e,t){const n=mt.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Dr(r),e(o-t))};return Se.setup(r,!0),()=>Dr(r)}function ll(e){return et(e)?e.get():e}class dR{constructor(){this.members=[]}add(t){cp(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(Kl(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(Kl(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(t,n){var i;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:o}=r.options,{layoutDependency:s}=t.options;(o===void 0||o!==s)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(i=t.root)!=null&&i.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,o,s;(r=(n=t.options).onExitComplete)==null||r.call(n),(s=(i=t.resumingFrom)==null?void 0:(o=i.options).onExitComplete)==null||s.call(o)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const cl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Bu=["","X","Y","Z"],hR=1e3;let fR=0;function Vu(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function p2(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Mw(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Se,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&p2(r)}function m2({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},l=t==null?void 0:t()){this.id=fR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(gR),this.nodes.forEach(kR),this.nodes.forEach(SR),this.nodes.forEach(yR)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new cR)}addEventListener(s,l){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new up),this.eventHandlers.get(s).add(l)}notifyListeners(s,...l){const c=this.eventHandlers.get(s);c&&c.notify(...l)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=jp(s)&&!g6(s),this.instance=s;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let d,h=0;const f=()=>this.root.updateBlockedByResize=!1;Se.read(()=>{h=window.innerWidth}),e(s,()=>{const p=window.innerWidth;p!==h&&(h=p,this.root.updateBlockedByResize=!0,d&&d(),d=uR(f,250),cl.hasAnimatedSinceResize&&(cl.hasAnimatedSinceResize=!1,this.nodes.forEach(oy)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:f,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||u.getDefaultTransition()||TR,{onLayoutAnimationStart:y,onLayoutAnimationComplete:w}=u.getProps(),m=!this.targetLayout||!h2(this.targetLayout,p),x=!h&&f;if(this.options.layoutRoot||this.resumeFrom||x||h&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...bp(g,"layout"),onPlay:y,onComplete:w};(u.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(d,x,v.path)}else h||oy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Dr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(CR),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&p2(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,(typeof h.latestValues.x=="string"||typeof h.latestValues.y=="string")&&(h.isLayoutDirty=!0),h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const c=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),c&&this.nodes.forEach(vR),this.nodes.forEach(ry);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(iy);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(bR),this.nodes.forEach(wR),this.nodes.forEach(pR),this.nodes.forEach(mR)):this.nodes.forEach(iy),this.clearAllSnapshots();const l=mt.now();Ze.delta=Nn(0,1e3/60,l-Ze.timestamp),Ze.timestamp=l,Ze.isProcessing=!0,Au.update.process(Ze),Au.preRender.process(Ze),Au.render.process(Ze),Ze.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,_p.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(xR),this.sharedNodes.forEach(_R)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!gt(this.snapshot.measuredBox.x)&&!gt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=He()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(l=!1),l&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!d2(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&this.instance&&(l||Jr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return s&&(c=this.removeTransform(c)),IR(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:s}=this.options;if(!s)return He();const l=s.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(PR))){const{scroll:d}=this.root;d&&(Cn(l.x,d.offset.x),Cn(l.y,d.offset.y))}return l}removeElementScroll(s){var c;const l=He();if(ln(l,s),(c=this.scroll)!=null&&c.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:h,options:f}=d;d!==this.root&&h&&f.layoutScroll&&(h.wasRoot&&ln(l,s),Cn(l.x,h.offset.x),Cn(l.y,h.offset.y))}return l}applyTransform(s,l=!1,c){var d,h;const u=c||He();ln(u,s);for(let f=0;f<this.path.length;f++){const p=this.path[f];!l&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(Cn(u.x,-p.scroll.offset.x),Cn(u.y,-p.scroll.offset.y)),Jr(p.latestValues)&&al(u,p.latestValues,(d=p.layout)==null?void 0:d.layoutBox)}return Jr(this.latestValues)&&al(u,this.latestValues,(h=this.layout)==null?void 0:h.layoutBox),u}removeTransform(s){var c;const l=He();ln(l,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];if(!Jr(d.latestValues))continue;let h;d.instance&&(Ih(d.latestValues)&&d.updateSnapshot(),h=He(),ln(h,d.measurePageBox())),K0(l,d.latestValues,(c=d.snapshot)==null?void 0:c.layoutBox,h)}return Jr(this.latestValues)&&K0(l,this.latestValues),l}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ze.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var p;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:h}=this.options;if(!this.layout||!(d||h))return;this.resolvedRelativeTargetAt=Ze.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=He(),this.targetWithTransforms=He()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Q6(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):ln(this.target,this.layout.layoutBox),Jw(this.target,this.targetDelta)):ln(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ih(this.parent.latestValues)||Qw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,l,c){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=He(),this.relativeTargetOrigin=He(),nc(this.relativeTargetOrigin,l,c,this.options.layoutAnchor||void 0),ln(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var g;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let c=!0;if((this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ze.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;ln(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,f=this.treeScale.y;j6(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=He());const{target:p}=s;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(U0(this.prevProjectionDelta.x,this.projectionDelta.x),U0(this.prevProjectionDelta.y,this.projectionDelta.y)),hs(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==f||!Z0(this.projectionDelta.x,this.prevProjectionDelta.x)||!Z0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Gi(),this.projectionDelta=Gi(),this.projectionDeltaWithTransform=Gi()}setAnimationOrigin(s,l=!1,c){const u=this.snapshot,d=u?u.latestValues:{},h={...this.latestValues},f=Gi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=He(),g=u?u.source:void 0,y=this.layout?this.layout.source:void 0,w=g!==y,m=this.getStack(),x=!m||m.members.length<=1,v=!!(w&&!x&&this.options.crossfade===!0&&!this.path.some(jR));this.animationProgress=0;let k;const j=c==null?void 0:c.interpolateProjection(s);this.mixTargetDelta=C=>{const T=C/1e3,E=j==null?void 0:j(T);E?(f.x.translate=E.x,f.x.scale=ke(s.x.scale,1,T),f.x.origin=s.x.origin,f.x.originPoint=s.x.originPoint,f.y.translate=E.y,f.y.scale=ke(s.y.scale,1,T),f.y.origin=s.y.origin,f.y.originPoint=s.y.originPoint):(sy(f.x,s.x,T),sy(f.y,s.y,T)),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(nc(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),ER(this.relativeTarget,this.relativeTargetOrigin,p,T),k&&tR(this.relativeTarget,k)&&(this.isProjectionDirty=!1),k||(k=He()),ln(k,this.relativeTarget)),w&&(this.animationValues=h,iR(h,d,this.latestValues,T,v,x)),E&&E.rotate!==void 0&&(this.animationValues||(this.animationValues=h),this.animationValues.pathRotation=E.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var l,c,u;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(u=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Dr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{cl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=yo(0)),this.motionValue.jump(0,!1),this.currentAnimation=aR(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=s;if(!(!l||!c||!u)){if(this!==s&&this.layout&&u&&g2(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||He();const h=gt(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+h;const f=gt(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+f}ln(l,c),al(l,d),hs(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(s,l){this.sharedNodes.has(s)||this.sharedNodes.set(s,new dR),this.sharedNodes.get(s).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var l;const{layoutId:s}=this.options;return s?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:s}=this.options;return s?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let l=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&Vu("z",s,u,this.animationValues);for(let d=0;d<Bu.length;d++)Vu(`rotate${Bu[d]}`,s,u,this.animationValues),Vu(`skew${Bu[d]}`,s,u,this.animationValues);s.render();for(const d in u)s.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);s.scheduleRender()}applyProjectionStyles(s,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=ll(l==null?void 0:l.pointerEvents)||"",s.transform=c?c(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=ll(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!Jr(this.latestValues)&&(s.transform=c?c({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let h=nR(this.projectionDeltaWithTransform,this.treeScale,d);c&&(h=c(d,h)),s.transform=h;const{x:f,y:p}=this.projectionDelta;s.transformOrigin=`${f.origin*100}% ${p.origin*100}% 0`,u.animationValues?s.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const g in Rh){if(d[g]===void 0)continue;const{correct:y,applyTo:w,isCSSVariable:m}=Rh[g],x=h==="none"?d[g]:y(d[g],u);if(w){const v=w.length;for(let k=0;k<v;k++)s[w[k]]=x}else m?this.options.visualElement.renderState.vars[g]=x:s[g]=x}this.options.layoutId&&(s.pointerEvents=u===this?ll(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var l;return(l=s.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(ry),this.root.sharedNodes.clear()}}}function pR(e){e.updateLayout()}function mR(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;if(o==="size")kn(h=>{const f=s?t.measuredBox[h]:t.layoutBox[h],p=gt(f);f.min=r[h].min,f.max=f.min+p});else if(o==="x"||o==="y"){const h=o==="x"?"y":"x";Ah(s?t.measuredBox[h]:t.layoutBox[h],r[h])}else g2(o,t.layoutBox,r)&&kn(h=>{const f=s?t.measuredBox[h]:t.layoutBox[h],p=gt(r[h]);f.max=f.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+p)});const l=Gi();hs(l,r,t.layoutBox);const c=Gi();s?hs(c,e.applyTransform(i,!0),t.measuredBox):hs(c,r,t.layoutBox);const u=!d2(l);let d=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:p}=h;if(f&&p){const g=e.options.layoutAnchor||void 0,y=He();nc(y,t.layoutBox,f.layoutBox,g);const w=He();nc(w,r,p.layoutBox,g),h2(y,w)||(d=!0),h.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=y,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function gR(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function yR(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function xR(e){e.clearSnapshot()}function ry(e){e.clearMeasurements()}function vR(e){e.isLayoutDirty=!0,e.updateLayout()}function iy(e){e.isLayoutDirty=!1}function bR(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function wR(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function oy(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function kR(e){e.resolveTargetDelta()}function SR(e){e.calcProjection()}function CR(e){e.resetSkewAndRotation()}function _R(e){e.removeLeadSnapshot()}function sy(e,t,n){e.translate=ke(t.translate,0,n),e.scale=ke(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ay(e,t,n,r){e.min=ke(t.min,n.min,r),e.max=ke(t.max,n.max,r)}function ER(e,t,n,r){ay(e.x,t.x,n.x,r),ay(e.y,t.y,n.y,r)}function jR(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const TR={duration:.45,ease:[.4,0,.1,1]},ly=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),cy=ly("applewebkit/")&&!ly("chrome/")?Math.round:Jt;function uy(e){e.min=cy(e.min),e.max=cy(e.max)}function IR(e){uy(e.x),uy(e.y)}function g2(e,t,n){return e==="position"||e==="preserve-aspect"&&!X6(J0(t),J0(n),.2)}function PR(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const RR=m2({attachResizeListener:(e,t)=>Bs(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Uu={current:void 0},y2=m2({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Uu.current){const e=new RR({});e.mount(window),e.setOptions({layoutScroll:!0}),Uu.current=e}return Uu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Ap=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function dy(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function AR(...e){return t=>{let n=!1;const r=e.map(i=>{const o=dy(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():dy(e[i],null)}}}}function NR(...e){return b.useCallback(AR(...e),e)}class DR extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(rl(n)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=n.offsetParent,i=rl(r)&&r.offsetWidth||0,o=rl(r)&&r.offsetHeight||0,s=getComputedStyle(n),l=this.props.sizeRef.current;l.height=parseFloat(s.height),l.width=parseFloat(s.width),l.top=n.offsetTop,l.left=n.offsetLeft,l.right=i-l.width-l.left,l.bottom=o-l.height-l.top,l.direction=s.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function MR({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:o}){var f;const s=b.useId(),l=b.useRef(null),c=b.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:u}=b.useContext(Ap),d=o!==!1?((f=e.props)==null?void 0:f.ref)??(e==null?void 0:e.ref):void 0,h=NR(l,d);return b.useInsertionEffect(()=>{const{width:p,height:g,top:y,left:w,right:m,bottom:x,direction:v}=c.current;if(t||o===!1||!l.current||!p||!g)return;const k=v==="rtl",j=n==="left"?k?`right: ${m}`:`left: ${w}`:k?`left: ${w}`:`right: ${m}`,C=r==="bottom"?`bottom: ${x}`:`top: ${y}`;l.current.dataset.motionPopId=s;const T=document.createElement("style");u&&(T.nonce=u);const E=i??document.head;return E.appendChild(T),T.sheet&&T.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${g}px !important;
            ${j}px !important;
            ${C}px !important;
          }
        `),()=>{var A;(A=l.current)==null||A.removeAttribute("data-motion-pop-id"),E.contains(T)&&E.removeChild(T)}},[t]),a.jsx(DR,{isPresent:t,childRef:l,sizeRef:c,pop:o,children:o===!1?e:b.cloneElement(e,{ref:h})})}const LR=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:l,anchorY:c,root:u})=>{const d=lp(zR),h=b.useId(),f=b.useRef(n),p=b.useRef(r);Yl(()=>{f.current=n,p.current=r});let g=!0,y=b.useMemo(()=>(g=!1,{id:h,initial:t,isPresent:n,custom:i,onExitComplete:w=>{d.set(w,!0);for(const m of d.values())if(!m)return;r&&r()},register:w=>(d.set(w,!1),()=>{var m;d.delete(w),!f.current&&!d.size&&((m=p.current)==null||m.call(p))})}),[n,d,r]);return o&&g&&(y={...y}),b.useMemo(()=>{d.forEach((w,m)=>d.set(m,!1))},[n]),b.useEffect(()=>{!n&&!d.size&&r&&r()},[n]),e=a.jsx(MR,{pop:s==="popLayout",isPresent:n,anchorX:l,anchorY:c,root:u,children:e}),a.jsx(jc.Provider,{value:y,children:e})};function zR(){return new Map}function x2(e=!0){const t=b.useContext(jc);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=b.useId();b.useEffect(()=>{if(e)return i(o)},[e]);const s=b.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const Pa=e=>e.key||"";function hy(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const OR=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:l="left",anchorY:c="top",root:u})=>{const[d,h]=x2(s),f=b.useMemo(()=>hy(e),[e]),p=s&&!d?[]:f.map(Pa),g=b.useRef(!0),y=b.useRef(f),w=lp(()=>new Map),m=b.useRef(new Set),[x,v]=b.useState(f),[k,j]=b.useState(f);Yl(()=>{s&&!d&&!k.length&&(h==null||h())},[d,s,k.length,h]),Yl(()=>{g.current=!1,y.current=f;for(let E=0;E<k.length;E++){const A=Pa(k[E]);p.includes(A)?(w.delete(A),m.current.delete(A)):w.get(A)!==!0&&w.set(A,!1)}},[k,p.length,p.join("-")]);const C=[];if(f!==x){let E=[...f];for(let A=0;A<k.length;A++){const P=k[A],N=Pa(P);p.includes(N)||(E.splice(A,0,P),C.push(P))}return o==="wait"&&C.length&&(E=C),j(hy(E)),v(f),null}const{forceRender:T}=b.useContext(ap);return a.jsx(a.Fragment,{children:k.map(E=>{const A=Pa(E),P=s&&!d?!1:f===k||p.includes(A),N=()=>{if(m.current.has(A))return;if(w.has(A))m.current.add(A),w.set(A,!0);else return;let D=!0;w.forEach(B=>{B||(D=!1)}),D&&(T==null||T(),j(y.current),s&&(h==null||h()),r&&r())};return a.jsx(LR,{isPresent:P,initial:!g.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:u,onExitComplete:P?void 0:N,anchorX:l,anchorY:c,children:E},A)})})},v2=b.createContext({strict:!1}),fy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let py=!1;function FR(){if(py)return;const e={};for(const t in fy)e[t]={isEnabled:n=>fy[t].some(r=>!!n[r])};Kw(e),py=!0}function b2(){return FR(),S6()}function BR(e){const t=b2();for(const n in e)t[n]={...t[n],...e[n]};Kw(t)}const Ac=b.createContext({});function VR(e,t){if(Rc(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Fs(n)?n:void 0,animate:Fs(r)?r:void 0}}return e.inherit!==!1?t:{}}function UR(e){const{initial:t,animate:n}=VR(e,b.useContext(Ac));return b.useMemo(()=>({initial:t,animate:n}),[my(t),my(n)])}function my(e){return Array.isArray(e)?e.join(" "):e}const Np=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function w2(e,t,n){for(const r in t)!et(t[r])&&!t2(r,n)&&(e[r]=t[r])}function WR({transformTemplate:e},t){return b.useMemo(()=>{const n=Np();return Pp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function $R(e,t){const n=e.style||{},r={};return w2(r,n,e),Object.assign(r,WR(e,t)),r}function HR(e,t){const n={},r=$R(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const k2=()=>({...Np(),attrs:{}});function GR(e,t,n,r){const i=b.useMemo(()=>{const o=k2();return r2(o,t,o2(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};w2(o,e.style,e),i.style={...o,...i.style}}return i}const YR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function rc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||YR.has(e)}function KR(e,t){return e.startsWith("on")?!rc(e):(t==null?void 0:t(e))??!rc(e)}function qR(e,t,n,r){const i={};for(const o in e)o==="values"&&typeof e.values=="object"||et(e[o])||(KR(o,r)||n===!0&&rc(o)||!t&&!rc(o)||e.draggable&&o.startsWith("onDrag"))&&(i[o]=e[o]);return i}const XR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Dp(e){return typeof e!="string"||e.includes("-")?!1:!!(XR.indexOf(e)>-1||/[A-Z]/u.test(e))}function QR(e,t,n,{latestValues:r},i,o=!1,s,l){const u=(s??Dp(e)?GR:HR)(t,r,i,e),d=qR(t,typeof e=="string",o,l),h=e!==b.Fragment?{...d,...u,ref:n}:{},{children:f}=t,p=b.useMemo(()=>et(f)?f.get():f,[f]);return b.createElement(e,{...h,children:p})}function JR({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:ZR(n,r,i,e),renderState:t()}}function ZR(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=ll(o[f]);let{initial:s,animate:l}=e;const c=Rc(e),u=Gw(e);t&&u&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const h=d?l:s;if(h&&typeof h!="boolean"&&!Pc(h)){const f=Array.isArray(h)?h:[h];for(let p=0;p<f.length;p++){const g=kp(e,f[p]);if(g){const{transitionEnd:y,transition:w,...m}=g;for(const x in m){let v=m[x];if(Array.isArray(v)){const k=d?v.length-1:0;v=v[k]}v!==null&&(i[x]=v)}for(const x in y)i[x]=y[x]}}}return i}const S2=e=>(t,n)=>{const r=b.useContext(Ac),i=b.useContext(jc),o=()=>JR(e,t,r,i);return n?o():lp(o)},eA=S2({scrapeMotionValuesFromProps:Rp,createRenderState:Np}),tA=S2({scrapeMotionValuesFromProps:s2,createRenderState:k2}),nA=Symbol.for("motionComponentSymbol");function rA(e,t,n){const r=b.useRef(n);b.useInsertionEffect(()=>{r.current=n});const i=b.useRef(null);return b.useCallback(o=>{var l;o&&((l=e.onMount)==null||l.call(e,o)),t&&(o?t.mount(o):t.unmount());const s=r.current;if(typeof s=="function")if(o){const c=s(o);typeof c=="function"&&(i.current=c)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[t])}const C2=b.createContext({});function Ii(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function iA(e,t,n,r,i,o){var v,k;const{visualElement:s}=b.useContext(Ac),l=b.useContext(v2),c=b.useContext(jc),u=b.useContext(Ap),d=u.reducedMotion,h=u.skipAnimations,f=b.useRef(null),p=b.useRef(!1);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:s,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d,skipAnimations:h,isSVG:o}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const g=f.current,y=b.useContext(C2);g&&!g.projection&&i&&(g.type==="html"||g.type==="svg")&&oA(f.current,n,i,y);const w=b.useRef(!1);b.useInsertionEffect(()=>{g&&w.current&&g.update(n,c)});const m=n[Dw],x=b.useRef(!!m&&typeof window<"u"&&!((v=window.MotionHandoffIsComplete)!=null&&v.call(window,m))&&((k=window.MotionHasOptimisedAnimation)==null?void 0:k.call(window,m)));return Yl(()=>{p.current=!0,g&&(w.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),x.current&&g.animationState&&g.animationState.animateChanges())}),b.useEffect(()=>{g&&(!x.current&&g.animationState&&g.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var j;(j=window.MotionHandoffMarkAsComplete)==null||j.call(window,m)}),x.current=!1),g.enteringChildren=void 0)}),g}function oA(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:l,layoutScroll:c,layoutRoot:u,layoutAnchor:d,layoutCrossfade:h}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:_2(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||l&&Ii(l),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:h,layoutScroll:c,layoutRoot:u,layoutAnchor:d})}function _2(e){if(e)return e.options.allowProjection!==!1?e.projection:_2(e.parent)}function Wu(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&BR(r);const o=n?n==="svg":Dp(e),s=o?tA:eA;function l(u,d){let h;const f={...b.useContext(Ap),...u,layoutId:sA(u)},{isStatic:p,isValidProp:g}=f,y=UR(u),w=s(u,p);if(!p&&typeof window<"u"){aA();const m=lA(f);h=m.MeasureLayout,y.visualElement=iA(e,w,f,i,m.ProjectionNode,o)}return a.jsxs(Ac.Provider,{value:y,children:[h&&y.visualElement?a.jsx(h,{visualElement:y.visualElement,...f}):null,QR(e,u,rA(w,y.visualElement,d),w,p,t,o,g)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=b.forwardRef(l);return c[nA]=e,c}function sA({layoutId:e}){const t=b.useContext(ap).id;return t&&e!==void 0?t+"-"+e:e}function aA(e,t){b.useContext(v2).strict}function lA(e){const t=b2(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function cA(e,t){if(typeof Proxy>"u")return Wu;const n=new Map,r=(o,s)=>Wu(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,Wu(s,void 0,e,t)),n.get(s))})}const uA=(e,t)=>t.isSVG??Dp(e)?new F6(t):new D6(t,{allowProjection:e!==b.Fragment});class dA extends Fr{constructor(t){super(t),t.animationState||(t.animationState=$6(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Pc(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let hA=0;class fA extends Fr{constructor(){super(...arguments),this.id=hA++,this.isExitComplete=!1}update(){var o;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:s,custom:l}=this.node.getProps();if(typeof s=="string"||typeof s=="object"&&s!==null&&!Array.isArray(s)){const c=di(this.node,s,l);if(c){const{transition:u,transitionEnd:d,...h}=c;for(const f in h)(o=this.node.getValue(f))==null||o.jump(h[f])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const pA={animation:{Feature:dA},exit:{Feature:fA}};function na(e){return{point:{x:e.pageX,y:e.pageY}}}const mA=e=>t=>Ep(t)&&e(t,na(t));function fs(e,t,n,r){return Bs(e,t,mA(n),r)}const E2=({current:e})=>e?e.ownerDocument.defaultView:null,gy=(e,t)=>Math.abs(e-t);function gA(e,t){const n=gy(e.x,t.x),r=gy(e.y,t.y);return Math.sqrt(n**2+r**2)}const yy=new Set(["auto","scroll"]);class j2{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=g=>{this.handleScroll(g.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ra(this.lastRawMoveEventInfo,this.transformPagePoint));const g=$u(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,w=gA(g.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!w)return;const{point:m}=g,{timestamp:x}=Ze;this.history.push({...m,timestamp:x});const{onStart:v,onMove:k}=this.handlers;y||(v&&v(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),k&&k(this.lastMoveEvent,g)},this.handlePointerMove=(g,y)=>{this.lastMoveEvent=g,this.lastRawMoveEventInfo=y,this.lastMoveEventInfo=Ra(y,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(g,y)=>{this.end();const{onEnd:w,onSessionEnd:m,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=$u(g.type==="pointercancel"?this.lastMoveEventInfo:Ra(y,this.transformPagePoint),this.history);this.startEvent&&w&&w(g,v),m&&m(g,v)},!Ep(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const c=na(t),u=Ra(c,this.transformPagePoint),{point:d}=u,{timestamp:h}=Ze;this.history=[{...d,timestamp:h}];const{onSessionStart:f}=n;f&&f(t,$u(u,this.history));const p={passive:!0,capture:!0};this.removeListeners=Zs(fs(this.contextWindow,"pointermove",this.handlePointerMove,p),fs(this.contextWindow,"pointerup",this.handlePointerUp,p),fs(this.contextWindow,"pointercancel",this.handlePointerUp,p)),l&&this.startScrollTracking(l)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(yy.has(r.overflowX)||yy.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),Se.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Dr(this.updatePoint)}}function Ra(e,t){return t?{point:t(e.point)}:e}function xy(e,t){return{x:e.x-t.x,y:e.y-t.y}}function $u({point:e},t){return{point:e,delta:xy(e,T2(t)),offset:xy(e,yA(t)),velocity:xA(t,.1)}}function yA(e){return e[0]}function T2(e){return e[e.length-1]}function xA(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=T2(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ft(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>Ft(t)*2&&(r=e[1]);const o=Xt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function vA(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ke(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ke(n,e,r.max):Math.min(e,n)),e}function vy(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function bA(e,{top:t,left:n,bottom:r,right:i}){return{x:vy(e.x,n,i),y:vy(e.y,t,r)}}function by(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function wA(e,t){return{x:by(e.x,t.x),y:by(e.y,t.y)}}function kA(e,t){let n=.5;const r=gt(e),i=gt(t);return i>r?n=zs(t.min,t.max-r,e.min):r>i&&(n=zs(e.min,e.max-i,t.min)),Nn(0,1,n)}function SA(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Nh=.35;function CA(e=Nh){return e===!1?e=0:e===!0&&(e=Nh),{x:wy(e,"left","right"),y:wy(e,"top","bottom")}}function wy(e,t,n){return{min:ky(e,t),max:ky(e,n)}}function ky(e,t){return typeof e=="number"?e:e[t]||0}const _A=new WeakMap;class EA{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=He(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=h=>{n&&this.snapToCursor(na(h).point),this.stopAnimation()},s=(h,f)=>{const{drag:p,dragPropagation:g,onDragStart:y}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ZP(p),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),kn(m=>{let x=this.getAxisMotionValue(m).get()||0;if(Rn.test(x)){const{projection:v}=this.visualElement;if(v&&v.layout){const k=v.layout.layoutBox[m];k&&(x=gt(k)*(parseFloat(x)/100))}}this.originPoint[m]=x}),y&&Se.update(()=>y(h,f),!1,!0),Sh(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},l=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f;const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:y,onDrag:w}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:m}=f;if(g&&this.currentDirection===null){this.currentDirection=TA(m),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),w&&Se.update(()=>w(h,f),!1,!0)},c=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f,this.stop(h,f),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new j2(t,{onSessionStart:o,onStart:s,onMove:l,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:E2(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:l}=this.getProps();l&&Se.postRender(()=>l(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Aa(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=vA(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&Ii(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=bA(r.layoutBox,t):this.constraints=!1,this.elastic=CA(n),i!==this.constraints&&!Ii(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&kn(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=SA(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ii(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;i.root&&(i.root.scroll=void 0,i.root.updateScroll());const o=T6(r,i.root,this.visualElement.getTransformPagePoint());let s=wA(i.layout.layoutBox,o);if(n){const l=n(_6(s));this.hasMutatedConstraints=!!l,l&&(s=Xw(l))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=kn(d=>{if(!Aa(d,n,this.currentDirection))return;let h=c&&c[d]||{};(s===!0||s===d)&&(h={min:0,max:0});const f=i?200:1e6,p=i?40:1e7,g={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...o,...h};return this.startAxisValueAnimation(d,g)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Sh(this.visualElement,t),r.start(wp(t,r,0,n,this.visualElement,!1))}stopAnimation(){kn(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps()[n];return i||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){kn(n=>{const{drag:r}=this.getProps();if(!Aa(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:l}=i.layout.layoutBox[n],c=o.get()||0;o.set(t[n]-ke(s,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ii(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};kn(s=>{const l=this.getAxisMotionValue(s);if(l&&this.constraints!==!1){const c=l.get();i[s]=kA({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),kn(s=>{if(!Aa(s,t,null))return;const l=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];l.set(ke(c,u,i[s]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;_A.set(this.visualElement,this);const t=this.visualElement.current,n=fs(t,"pointerdown",u=>{const{drag:d,dragListener:h=!0}=this.getProps(),f=u.target,p=f!==t&&o6(f);d&&h&&!p&&this.start(u)});let r;const i=()=>{const{dragConstraints:u}=this.getProps();Ii(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),r||(r=jA(t,u.current,()=>this.scalePositionWithinConstraints())))},{projection:o}=this.visualElement,s=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Se.read(i);const l=Bs(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d})=>{this.isDragging&&d&&(kn(h=>{const f=this.getAxisMotionValue(h);f&&(this.originPoint[h]+=u[h].translate,f.set(f.get()+u[h].translate))}),this.visualElement.render())});return()=>{l(),n(),s(),c&&c(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Nh,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:l}}}function Sy(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function jA(e,t,n){const r=P0(e,Sy(n)),i=P0(t,Sy(n));return()=>{r(),i()}}function Aa(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function TA(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class IA extends Fr{constructor(t){super(t),this.removeGroupControls=Jt,this.removeListeners=Jt,this.controls=new EA(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Jt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Hu=e=>(t,n)=>{e&&Se.update(()=>e(t,n),!1,!0)};class PA extends Fr{constructor(){super(...arguments),this.removePointerDownListener=Jt}onPointerDown(t){this.session=new j2(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:E2(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Hu(t),onStart:Hu(n),onMove:Hu(r),onEnd:(o,s)=>{delete this.session,i&&Se.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=fs(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Gu=!1;class RA extends b.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),Gu&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),cl.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,t.layoutDependency!==n&&s.setOptions({...s.options,layoutDependency:n}),Gu=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||Se.postRender(()=>{const l=s.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),_p.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Gu=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function I2(e){const[t,n]=x2(),r=b.useContext(ap);return a.jsx(RA,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(C2),isPresent:t,safeToRemove:n})}const AA={pan:{Feature:PA},drag:{Feature:IA,ProjectionNode:y2,MeasureLayout:I2}};function Cy(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&Se.postRender(()=>o(t,na(t)))}class NA extends Fr{mount(){const{current:t}=this.node;t&&(this.unmount=t6(t,(n,r)=>(Cy(this.node,r,"Start"),i=>Cy(this.node,i,"End"))))}unmount(){}}class DA extends Fr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Zs(Bs(this.node.current,"focus",()=>this.onFocus()),Bs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function _y(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&Se.postRender(()=>o(t,na(t)))}class MA extends Fr{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=a6(t,(i,o)=>(_y(this.node,o,"Start"),(s,{success:l})=>_y(this.node,s,l?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Dh=new WeakMap,Yu=new WeakMap,LA=e=>{const t=Dh.get(e.target);t&&t(e)},zA=e=>{e.forEach(LA)};function OA({root:e,...t}){const n=e||document;Yu.has(n)||Yu.set(n,{});const r=Yu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(zA,{root:e,...t})),r[i]}function FA(e,t,n){const r=OA(t);return Dh.set(e,n),r.observe(e),()=>{Dh.delete(e),r.unobserve(e)}}const BA={some:0,all:1};class VA extends Fr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var c;(c=this.stopObserver)==null||c.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:BA[i]},l=u=>{const{isIntersecting:d}=u;if(this.isInView===d||(this.isInView=d,o&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:h,onViewportLeave:f}=this.node.getProps(),p=d?h:f;p&&p(u)};this.stopObserver=FA(this.node.current,s,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(UA(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function UA({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const WA={inView:{Feature:VA},tap:{Feature:MA},focus:{Feature:DA},hover:{Feature:NA}},$A={layout:{ProjectionNode:y2,MeasureLayout:I2}},HA={...pA,...WA,...AA,...$A},Na=cA(HA,uA);function GA(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const YA=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,KA=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,qA={};function Ey(e,t){return(qA.jsx?KA:YA).test(e)}const XA=/[ \t\n\f\r]/g;function QA(e){return typeof e=="object"?e.type==="text"?jy(e.value):!1:jy(e)}function jy(e){return e.replace(XA,"")===""}class ra{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ra.prototype.normal={};ra.prototype.property={};ra.prototype.space=void 0;function P2(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ra(n,r,t)}function Mh(e){return e.toLowerCase()}class Rt{constructor(t,n){this.attribute=n,this.property=t}}Rt.prototype.attribute="";Rt.prototype.booleanish=!1;Rt.prototype.boolean=!1;Rt.prototype.commaOrSpaceSeparated=!1;Rt.prototype.commaSeparated=!1;Rt.prototype.defined=!1;Rt.prototype.mustUseProperty=!1;Rt.prototype.number=!1;Rt.prototype.overloadedBoolean=!1;Rt.prototype.property="";Rt.prototype.spaceSeparated=!1;Rt.prototype.space=void 0;let JA=0;const te=ki(),Ve=ki(),Lh=ki(),O=ki(),be=ki(),hi=ki(),Dt=ki();function ki(){return 2**++JA}const zh=Object.freeze(Object.defineProperty({__proto__:null,boolean:te,booleanish:Ve,commaOrSpaceSeparated:Dt,commaSeparated:hi,number:O,overloadedBoolean:Lh,spaceSeparated:be},Symbol.toStringTag,{value:"Module"})),Ku=Object.keys(zh);class Mp extends Rt{constructor(t,n,r,i){let o=-1;if(super(t,n),Ty(this,"space",i),typeof r=="number")for(;++o<Ku.length;){const s=Ku[o];Ty(this,Ku[o],(r&zh[s])===zh[s])}}}Mp.prototype.defined=!0;function Ty(e,t,n){n&&(e[t]=n)}function To(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Mp(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Mh(r)]=r,n[Mh(o.attribute)]=r}return new ra(t,n,e.space)}const R2=To({properties:{ariaActiveDescendant:null,ariaAtomic:Ve,ariaAutoComplete:null,ariaBusy:Ve,ariaChecked:Ve,ariaColCount:O,ariaColIndex:O,ariaColSpan:O,ariaControls:be,ariaCurrent:null,ariaDescribedBy:be,ariaDetails:null,ariaDisabled:Ve,ariaDropEffect:be,ariaErrorMessage:null,ariaExpanded:Ve,ariaFlowTo:be,ariaGrabbed:Ve,ariaHasPopup:null,ariaHidden:Ve,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:be,ariaLevel:O,ariaLive:null,ariaModal:Ve,ariaMultiLine:Ve,ariaMultiSelectable:Ve,ariaOrientation:null,ariaOwns:be,ariaPlaceholder:null,ariaPosInSet:O,ariaPressed:Ve,ariaReadOnly:Ve,ariaRelevant:null,ariaRequired:Ve,ariaRoleDescription:be,ariaRowCount:O,ariaRowIndex:O,ariaRowSpan:O,ariaSelected:Ve,ariaSetSize:O,ariaSort:null,ariaValueMax:O,ariaValueMin:O,ariaValueNow:O,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function A2(e,t){return t in e?e[t]:t}function N2(e,t){return A2(e,t.toLowerCase())}const ZA=To({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:hi,acceptCharset:be,accessKey:be,action:null,allow:null,allowFullScreen:te,allowPaymentRequest:te,allowUserMedia:te,alpha:te,alt:null,as:null,async:te,autoCapitalize:null,autoComplete:be,autoFocus:te,autoPlay:te,blocking:be,capture:null,charSet:null,checked:te,cite:null,className:be,closedBy:null,colorSpace:null,cols:O,colSpan:O,command:null,commandFor:null,content:null,contentEditable:Ve,controls:te,controlsList:be,coords:O|hi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:te,defer:te,dir:null,dirName:null,disabled:te,download:Lh,draggable:Ve,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:te,formTarget:null,headers:be,height:O,hidden:Lh,high:O,href:null,hrefLang:null,htmlFor:be,httpEquiv:be,id:null,imageSizes:null,imageSrcSet:null,inert:te,inputMode:null,integrity:null,is:null,isMap:te,itemId:null,itemProp:be,itemRef:be,itemScope:te,itemType:be,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:te,low:O,manifest:null,max:null,maxLength:O,media:null,method:null,min:null,minLength:O,multiple:te,muted:te,name:null,nonce:null,noModule:te,noValidate:te,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:te,optimum:O,pattern:null,ping:be,placeholder:null,playsInline:te,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:te,referrerPolicy:null,rel:be,required:te,reversed:te,rows:O,rowSpan:O,sandbox:be,scope:null,scoped:te,seamless:te,selected:te,shadowRootClonable:te,shadowRootCustomElementRegistry:te,shadowRootDelegatesFocus:te,shadowRootMode:null,shadowRootSerializable:te,shape:null,size:O,sizes:null,slot:null,span:O,spellCheck:Ve,src:null,srcDoc:null,srcLang:null,srcSet:null,start:O,step:null,style:null,tabIndex:O,target:null,title:null,translate:null,type:null,typeMustMatch:te,useMap:null,value:Ve,width:O,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:be,axis:null,background:null,bgColor:null,border:O,borderColor:null,bottomMargin:O,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:te,declare:te,event:null,face:null,frame:null,frameBorder:null,hSpace:O,leftMargin:O,link:null,longDesc:null,lowSrc:null,marginHeight:O,marginWidth:O,noResize:te,noHref:te,noShade:te,noWrap:te,object:null,profile:null,prompt:null,rev:null,rightMargin:O,rules:null,scheme:null,scrolling:Ve,standby:null,summary:null,text:null,topMargin:O,valueType:null,version:null,vAlign:null,vLink:null,vSpace:O,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:te,disablePictureInPicture:te,disableRemotePlayback:te,exportParts:hi,part:be,prefix:null,property:null,results:O,security:null,unselectable:null},space:"html",transform:N2}),e8=To({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Dt,accentHeight:O,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:O,amplitude:O,arabicForm:null,ascent:O,attributeName:null,attributeType:null,azimuth:O,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:O,by:null,calcMode:null,capHeight:O,className:be,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:O,diffuseConstant:O,direction:null,display:null,dur:null,divisor:O,dominantBaseline:null,download:te,dx:null,dy:null,edgeMode:null,editable:null,elevation:O,enableBackground:null,end:null,event:null,exponent:O,externalResourcesRequired:null,fill:null,fillOpacity:O,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:hi,g2:hi,glyphName:hi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:O,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:O,horizOriginX:O,horizOriginY:O,id:null,ideographic:O,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:O,k:O,k1:O,k2:O,k3:O,k4:O,kernelMatrix:Dt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:O,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:O,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:O,overlineThickness:O,paintOrder:null,panose1:null,path:null,pathLength:O,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:be,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:O,pointsAtY:O,pointsAtZ:O,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Dt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Dt,rev:Dt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Dt,requiredFeatures:Dt,requiredFonts:Dt,requiredFormats:Dt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:O,specularExponent:O,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:O,strikethroughThickness:O,string:null,stroke:null,strokeDashArray:Dt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:O,strokeOpacity:O,strokeWidth:null,style:null,surfaceScale:O,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Dt,tabIndex:O,tableValues:null,target:null,targetX:O,targetY:O,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Dt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:O,underlineThickness:O,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:O,values:null,vAlphabetic:O,vMathematical:O,vectorEffect:null,vHanging:O,vIdeographic:O,version:null,vertAdvY:O,vertOriginX:O,vertOriginY:O,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:O,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:A2}),D2=To({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),M2=To({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:N2}),L2=To({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),t8={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},n8=/[A-Z]/g,Iy=/-[a-z]/g,r8=/^data[-\w.:]+$/i;function i8(e,t){const n=Mh(t);let r=t,i=Rt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&r8.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Iy,s8);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Iy.test(o)){let s=o.replace(n8,o8);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}i=Mp}return new i(r,t)}function o8(e){return"-"+e.toLowerCase()}function s8(e){return e.charAt(1).toUpperCase()}const a8=P2([R2,ZA,D2,M2,L2],"html"),Lp=P2([R2,e8,D2,M2,L2],"svg");function l8(e){return e.join(" ").trim()}var zp={},Py=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,c8=/\n/g,u8=/^\s*/,d8=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,h8=/^:\s*/,f8=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,p8=/^[;\s]*/,m8=/^\s+|\s+$/g,g8=`
`,Ry="/",Ay="*",ei="",y8="comment",x8="declaration";function v8(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var y=g.match(c8);y&&(n+=y.length);var w=g.lastIndexOf(g8);r=~w?g.length-w:r+g.length}function o(){var g={line:n,column:r};return function(y){return y.position=new s(g),u(),y}}function s(g){this.start=g,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function l(g){var y=new Error(t.source+":"+n+":"+r+": "+g);if(y.reason=g,y.filename=t.source,y.line=n,y.column=r,y.source=e,!t.silent)throw y}function c(g){var y=g.exec(e);if(y){var w=y[0];return i(w),e=e.slice(w.length),y}}function u(){c(u8)}function d(g){var y;for(g=g||[];y=h();)y!==!1&&g.push(y);return g}function h(){var g=o();if(!(Ry!=e.charAt(0)||Ay!=e.charAt(1))){for(var y=2;ei!=e.charAt(y)&&(Ay!=e.charAt(y)||Ry!=e.charAt(y+1));)++y;if(y+=2,ei===e.charAt(y-1))return l("End of comment missing");var w=e.slice(2,y-2);return r+=2,i(w),e=e.slice(y),r+=2,g({type:y8,comment:w})}}function f(){var g=o(),y=c(d8);if(y){if(h(),!c(h8))return l("property missing ':'");var w=c(f8),m=g({type:x8,property:Ny(y[0].replace(Py,ei)),value:w?Ny(w[0].replace(Py,ei)):ei});return c(p8),m}}function p(){var g=[];d(g);for(var y;y=f();)y!==!1&&(g.push(y),d(g));return g}return u(),p()}function Ny(e){return e?e.replace(m8,ei):ei}var b8=v8,w8=hl&&hl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zp,"__esModule",{value:!0});zp.default=S8;const k8=w8(b8);function S8(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,k8.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:s,value:l}=o;i?t(s,l,o):l&&(n=n||{},n[s]=l)}),n}var Nc={};Object.defineProperty(Nc,"__esModule",{value:!0});Nc.camelCase=void 0;var C8=/^--[a-zA-Z0-9_-]+$/,_8=/-([a-z])/g,E8=/^[^-]+$/,j8=/^-(webkit|moz|ms|o|khtml)-/,T8=/^-(ms)-/,I8=function(e){return!e||E8.test(e)||C8.test(e)},P8=function(e,t){return t.toUpperCase()},Dy=function(e,t){return"".concat(t,"-")},R8=function(e,t){return t===void 0&&(t={}),I8(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(T8,Dy):e=e.replace(j8,Dy),e.replace(_8,P8))};Nc.camelCase=R8;var A8=hl&&hl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},N8=A8(zp),D8=Nc;function Oh(e,t){var n={};return!e||typeof e!="string"||(0,N8.default)(e,function(r,i){r&&i&&(n[(0,D8.camelCase)(r,t)]=i)}),n}Oh.default=Oh;var M8=Oh;const L8=Kh(M8),z2=O2("end"),Op=O2("start");function O2(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function z8(e){const t=Op(e),n=z2(e);if(t&&n)return{start:t,end:n}}function ps(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?My(e.position):"start"in e||"end"in e?My(e):"line"in e||"column"in e?Fh(e):""}function Fh(e){return Ly(e&&e.line)+":"+Ly(e&&e.column)}function My(e){return Fh(e&&e.start)+"-"+Fh(e&&e.end)}function Ly(e){return e&&typeof e=="number"?e:1}class ct extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(s=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=ps(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ct.prototype.file="";ct.prototype.name="";ct.prototype.reason="";ct.prototype.message="";ct.prototype.stack="";ct.prototype.column=void 0;ct.prototype.line=void 0;ct.prototype.ancestors=void 0;ct.prototype.cause=void 0;ct.prototype.fatal=void 0;ct.prototype.place=void 0;ct.prototype.ruleId=void 0;ct.prototype.source=void 0;const Fp={}.hasOwnProperty,O8=new Map,F8=/[A-Z]/g,B8=new Set(["table","tbody","thead","tfoot","tr"]),V8=new Set(["td","th"]),F2="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function U8(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=X8(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=q8(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Lp:a8,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=B2(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function B2(e,t,n){if(t.type==="element")return W8(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return $8(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return G8(e,t,n);if(t.type==="mdxjsEsm")return H8(e,t);if(t.type==="root")return Y8(e,t,n);if(t.type==="text")return K8(e,t)}function W8(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Lp,e.schema=i),e.ancestors.push(t);const o=U2(e,t.tagName,!1),s=Q8(e,t);let l=Vp(e,t);return B8.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!QA(c):!0})),V2(e,s,o,t),Bp(s,l),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function $8(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Vs(e,t.position)}function H8(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Vs(e,t.position)}function G8(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Lp,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:U2(e,t.name,!0),s=J8(e,t),l=Vp(e,t);return V2(e,s,o,t),Bp(s,l),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function Y8(e,t,n){const r={};return Bp(r,Vp(e,t)),e.create(t,e.Fragment,r,n)}function K8(e,t){return t.value}function V2(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Bp(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function q8(e,t,n){return r;function r(i,o,s,l){const u=Array.isArray(s.children)?n:t;return l?u(o,s,l):u(o,s)}}function X8(e,t){return n;function n(r,i,o,s){const l=Array.isArray(o.children),c=Op(r);return t(i,o,s,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Q8(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Fp.call(t.properties,i)){const o=Z8(e,i,t.properties[i]);if(o){const[s,l]=o;e.tableCellAlignToStyle&&s==="align"&&typeof l=="string"&&V8.has(t.tagName)?r=l:n[s]=l}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function J8(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const s=o.expression;s.type;const l=s.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Vs(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression)}else Vs(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function Vp(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:O8;for(;++r<t.children.length;){const o=t.children[r];let s;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;s=c+"-"+u,i.set(c,u+1)}}const l=B2(e,o,s);l!==void 0&&n.push(l)}return n}function Z8(e,t,n){const r=i8(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?GA(n):l8(n)),r.property==="style"){let i=typeof n=="object"?n:eN(e,String(n));return e.stylePropertyNameCase==="css"&&(i=tN(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?t8[r.property]||r.property:r.attribute,n]}}function eN(e,t){try{return L8(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new ct("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=F2+"#cannot-parse-style-attribute",i}}function U2(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,s;for(;++o<i.length;){const l=Ey(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};s=s?{type:"MemberExpression",object:s,property:l,computed:!!(o&&l.type==="Literal"),optional:!1}:l}r=s}else r=Ey(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Fp.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Vs(e)}function Vs(e,t){const n=new ct("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=F2+"#cannot-handle-mdx-estrees-without-createevaluater",n}function tN(e){const t={};let n;for(n in e)Fp.call(e,n)&&(t[nN(n)]=e[n]);return t}function nN(e){let t=e.replace(F8,rN);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function rN(e){return"-"+e.toLowerCase()}const qu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},iN={};function oN(e,t){const n=iN,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return W2(e,r,i)}function W2(e,t,n){if(sN(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return zy(e.children,t,n)}return Array.isArray(e)?zy(e,t,n):""}function zy(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=W2(e[i],t,n);return r.join("")}function sN(e){return!!(e&&typeof e=="object")}const Oy=document.createElement("i");function Up(e){const t="&"+e+";";Oy.innerHTML=t;const n=Oy.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Dn(e,t,n,r){const i=e.length;let o=0,s;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)s=Array.from(r),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);o<r.length;)s=r.slice(o,o+1e4),s.unshift(t,0),e.splice(...s),o+=1e4,t+=1e4}function Kt(e,t){return e.length>0?(Dn(e,e.length,0,t),e):t}const Fy={}.hasOwnProperty;function aN(e){const t={};let n=-1;for(;++n<e.length;)lN(t,e[n]);return t}function lN(e,t){let n;for(n in t){const i=(Fy.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let s;if(o)for(s in o){Fy.call(i,s)||(i[s]=[]);const l=o[s];cN(i[s],Array.isArray(l)?l:l?[l]:[])}}}function cN(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Dn(e,0,0,r)}function $2(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function io(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const jn=Br(/[A-Za-z]/),zt=Br(/[\dA-Za-z]/),uN=Br(/[#-'*+\--9=?A-Z^-~]/);function Bh(e){return e!==null&&(e<32||e===127)}const Vh=Br(/\d/),dN=Br(/[\dA-Fa-f]/),hN=Br(/[!-/:-@[-`{-~]/);function ee(e){return e!==null&&e<-2}function Pt(e){return e!==null&&(e<0||e===32)}function ge(e){return e===-2||e===-1||e===32}const fN=Br(new RegExp("\\p{P}|\\p{S}","u")),pN=Br(/\s/);function Br(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Io(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let s="";if(o===37&&zt(e.charCodeAt(n+1))&&zt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(s=String.fromCharCode(o,l),i=1):s="�"}else s=String.fromCharCode(o);s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+i+1,s=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Ee(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(c){return ge(c)?(e.enter(n),l(c)):t(c)}function l(c){return ge(c)&&o++<i?(e.consume(c),l):(e.exit(n),t(c))}}const mN={tokenize:gN};function gN(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Ee(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,s(l)}function s(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return ee(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),s)}}const yN={tokenize:xN},By={tokenize:vN};function xN(e){const t=this,n=[];let r=0,i,o,s;return l;function l(v){if(r<n.length){const k=n[r];return t.containerState=k[1],e.attempt(k[0].continuation,c,u)(v)}return u(v)}function c(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const k=t.events.length;let j=k,C;for(;j--;)if(t.events[j][0]==="exit"&&t.events[j][1].type==="chunkFlow"){C=t.events[j][1].end;break}m(r);let T=k;for(;T<t.events.length;)t.events[T][1].end={...C},T++;return Dn(t.events,j+1,0,t.events.slice(k)),t.events.length=T,u(v)}return l(v)}function u(v){if(r===n.length){if(!i)return f(v);if(i.currentConstruct&&i.currentConstruct.concrete)return g(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(By,d,h)(v)}function d(v){return i&&x(),m(r),f(v)}function h(v){return t.parser.lazy[t.now().line]=r!==n.length,s=t.now().offset,g(v)}function f(v){return t.containerState={},e.attempt(By,p,g)(v)}function p(v){return r++,n.push([t.currentConstruct,t.containerState]),f(v)}function g(v){if(v===null){i&&x(),m(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),y(v)}function y(v){if(v===null){w(e.exit("chunkFlow"),!0),m(0),e.consume(v);return}return ee(v)?(e.consume(v),w(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(v),y)}function w(v,k){const j=t.sliceStream(v);if(k&&j.push(null),v.previous=o,o&&(o.next=v),o=v,i.defineSkip(v.start),i.write(j),t.parser.lazy[v.start.line]){let C=i.events.length;for(;C--;)if(i.events[C][1].start.offset<s&&(!i.events[C][1].end||i.events[C][1].end.offset>s))return;const T=t.events.length;let E=T,A,P;for(;E--;)if(t.events[E][0]==="exit"&&t.events[E][1].type==="chunkFlow"){if(A){P=t.events[E][1].end;break}A=!0}for(m(r),C=T;C<t.events.length;)t.events[C][1].end={...P},C++;Dn(t.events,E+1,0,t.events.slice(T)),t.events.length=C}}function m(v){let k=n.length;for(;k-- >v;){const j=n[k];t.containerState=j[1],j[0].exit.call(t,e)}n.length=v}function x(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function vN(e,t,n){return Ee(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Vy(e){if(e===null||Pt(e)||pN(e))return 1;if(fN(e))return 2}function Wp(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Uh={name:"attention",resolveAll:bN,tokenize:wN};function bN(e,t){let n=-1,r,i,o,s,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const h={...e[r][1].end},f={...e[n][1].start};Uy(h,-c),Uy(f,c),s={type:c>1?"strongSequence":"emphasisSequence",start:h,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...s.start},end:{...l.end}},e[r][1].end={...s.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Kt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Kt(u,[["enter",i,t],["enter",s,t],["exit",s,t],["enter",o,t]]),u=Kt(u,Wp(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Kt(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Kt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Dn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function wN(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Vy(r);let o;return s;function s(c){return o=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===o)return e.consume(c),l;const u=e.exit("attentionSequence"),d=Vy(c),h=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?h:h&&(i||!f)),u._close=!!(o===42?f:f&&(d||!h)),t(c)}}function Uy(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const kN={name:"autolink",tokenize:SN};function SN(e,t,n){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return jn(p)?(e.consume(p),s):p===64?n(p):u(p)}function s(p){return p===43||p===45||p===46||zt(p)?(r=1,l(p)):u(p)}function l(p){return p===58?(e.consume(p),r=0,c):(p===43||p===45||p===46||zt(p))&&r++<32?(e.consume(p),l):(r=0,u(p))}function c(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||Bh(p)?n(p):(e.consume(p),c)}function u(p){return p===64?(e.consume(p),d):uN(p)?(e.consume(p),u):n(p)}function d(p){return zt(p)?h(p):n(p)}function h(p){return p===46?(e.consume(p),r=0,d):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):f(p)}function f(p){if((p===45||zt(p))&&r++<63){const g=p===45?f:h;return e.consume(p),g}return n(p)}}const Dc={partial:!0,tokenize:CN};function CN(e,t,n){return r;function r(o){return ge(o)?Ee(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||ee(o)?t(o):n(o)}}const H2={continuation:{tokenize:EN},exit:jN,name:"blockQuote",tokenize:_N};function _N(e,t,n){const r=this;return i;function i(s){if(s===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return n(s)}function o(s){return ge(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function EN(e,t,n){const r=this;return i;function i(s){return ge(s)?Ee(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(H2,t,n)(s)}}function jN(e){e.exit("blockQuote")}const G2={name:"characterEscape",tokenize:TN};function TN(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return hN(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Y2={name:"characterReference",tokenize:IN};function IN(e,t,n){const r=this;let i=0,o,s;return l;function l(h){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),c}function c(h){return h===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(h),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,s=zt,d(h))}function u(h){return h===88||h===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(h),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=dN,d):(e.enter("characterReferenceValue"),o=7,s=Vh,d(h))}function d(h){if(h===59&&i){const f=e.exit("characterReferenceValue");return s===zt&&!Up(r.sliceSerialize(f))?n(h):(e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(h)&&i++<o?(e.consume(h),d):n(h)}}const Wy={partial:!0,tokenize:RN},$y={concrete:!0,name:"codeFenced",tokenize:PN};function PN(e,t,n){const r=this,i={partial:!0,tokenize:j};let o=0,s=0,l;return c;function c(C){return u(C)}function u(C){const T=r.events[r.events.length-1];return o=T&&T[1].type==="linePrefix"?T[2].sliceSerialize(T[1],!0).length:0,l=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(C)}function d(C){return C===l?(s++,e.consume(C),d):s<3?n(C):(e.exit("codeFencedFenceSequence"),ge(C)?Ee(e,h,"whitespace")(C):h(C))}function h(C){return C===null||ee(C)?(e.exit("codeFencedFence"),r.interrupt?t(C):e.check(Wy,y,k)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(C))}function f(C){return C===null||ee(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),h(C)):ge(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Ee(e,p,"whitespace")(C)):C===96&&C===l?n(C):(e.consume(C),f)}function p(C){return C===null||ee(C)?h(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(C))}function g(C){return C===null||ee(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),h(C)):C===96&&C===l?n(C):(e.consume(C),g)}function y(C){return e.attempt(i,k,w)(C)}function w(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),m}function m(C){return o>0&&ge(C)?Ee(e,x,"linePrefix",o+1)(C):x(C)}function x(C){return C===null||ee(C)?e.check(Wy,y,k)(C):(e.enter("codeFlowValue"),v(C))}function v(C){return C===null||ee(C)?(e.exit("codeFlowValue"),x(C)):(e.consume(C),v)}function k(C){return e.exit("codeFenced"),t(C)}function j(C,T,E){let A=0;return P;function P(H){return C.enter("lineEnding"),C.consume(H),C.exit("lineEnding"),N}function N(H){return C.enter("codeFencedFence"),ge(H)?Ee(C,D,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):D(H)}function D(H){return H===l?(C.enter("codeFencedFenceSequence"),B(H)):E(H)}function B(H){return H===l?(A++,C.consume(H),B):A>=s?(C.exit("codeFencedFenceSequence"),ge(H)?Ee(C,$,"whitespace")(H):$(H)):E(H)}function $(H){return H===null||ee(H)?(C.exit("codeFencedFence"),T(H)):E(H)}}}function RN(e,t,n){const r=this;return i;function i(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}const Xu={name:"codeIndented",tokenize:NN},AN={partial:!0,tokenize:DN};function NN(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Ee(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?c(u):ee(u)?e.attempt(AN,s,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||ee(u)?(e.exit("codeFlowValue"),s(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function DN(e,t,n){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?n(s):ee(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):Ee(e,o,"linePrefix",5)(s)}function o(s){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(s):ee(s)?i(s):n(s)}}const MN={name:"codeText",previous:zN,resolve:LN,tokenize:ON};function LN(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function zN(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ON(e,t,n){let r=0,i,o;return s;function s(h){return e.enter("codeText"),e.enter("codeTextSequence"),l(h)}function l(h){return h===96?(e.consume(h),r++,l):(e.exit("codeTextSequence"),c(h))}function c(h){return h===null?n(h):h===32?(e.enter("space"),e.consume(h),e.exit("space"),c):h===96?(o=e.enter("codeTextSequence"),i=0,d(h)):ee(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(h))}function u(h){return h===null||h===32||h===96||ee(h)?(e.exit("codeTextData"),c(h)):(e.consume(h),u)}function d(h){return h===96?(e.consume(h),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(h)):(o.type="codeTextData",u(h))}}class FN{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&$o(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),$o(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),$o(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);$o(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);$o(this.left,n.reverse())}}}function $o(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function K2(e){const t={};let n=-1,r,i,o,s,l,c,u;const d=new FN(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,BN(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(s=d.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return Dn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function BN(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let s=n._tokenizer;s||(s=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const l=s.events,c=[],u={};let d,h,f=-1,p=n,g=0,y=0;const w=[y];for(;p;){for(;e.get(++i)[1]!==p;);o.push(i),p._tokenizer||(d=r.sliceStream(p),p.next||d.push(null),h&&s.defineSkip(p.start),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(d),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),h=p,p=p.next}for(p=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(y=f+1,w.push(y),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(s.events=[],p?(p._tokenizer=void 0,p.previous=void 0):w.pop(),f=w.length;f--;){const m=l.slice(w[f],w[f+1]),x=o.pop();c.push([x,x+m.length-1]),e.splice(x,2,m)}for(c.reverse(),f=-1;++f<c.length;)u[g+c[f][0]]=g+c[f][1],g+=c[f][1]-c[f][0]-1;return u}const VN={resolve:WN,tokenize:$N},UN={partial:!0,tokenize:HN};function WN(e){return K2(e),e}function $N(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):ee(l)?e.check(UN,s,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function s(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function HN(e,t,n){const r=this;return i;function i(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),Ee(e,o,"linePrefix")}function o(s){if(s===null||ee(s))return n(s);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(s):e.interrupt(r.parser.constructs.flow,n,t)(s)}}function q2(e,t,n,r,i,o,s,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return h;function h(m){return m===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(m),e.exit(o),f):m===null||m===32||m===41||Bh(m)?n(m):(e.enter(r),e.enter(s),e.enter(l),e.enter("chunkString",{contentType:"string"}),y(m))}function f(m){return m===62?(e.enter(o),e.consume(m),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===62?(e.exit("chunkString"),e.exit(l),f(m)):m===null||m===60||ee(m)?n(m):(e.consume(m),m===92?g:p)}function g(m){return m===60||m===62||m===92?(e.consume(m),p):p(m)}function y(m){return!d&&(m===null||m===41||Pt(m))?(e.exit("chunkString"),e.exit(l),e.exit(s),e.exit(r),t(m)):d<u&&m===40?(e.consume(m),d++,y):m===41?(e.consume(m),d--,y):m===null||m===32||m===40||Bh(m)?n(m):(e.consume(m),m===92?w:y)}function w(m){return m===40||m===41||m===92?(e.consume(m),y):y(m)}}function X2(e,t,n,r,i,o){const s=this;let l=0,c;return u;function u(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(o),d}function d(p){return l>999||p===null||p===91||p===93&&!c||p===94&&!l&&"_hiddenFootnoteSupport"in s.parser.constructs?n(p):p===93?(e.exit(o),e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):ee(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===null||p===91||p===93||ee(p)||l++>999?(e.exit("chunkString"),d(p)):(e.consume(p),c||(c=!ge(p)),p===92?f:h)}function f(p){return p===91||p===92||p===93?(e.consume(p),l++,h):h(p)}}function Q2(e,t,n,r,i,o){let s;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),s=f===40?41:f,c):n(f)}function c(f){return f===s?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===s?(e.exit(o),c(s)):f===null?n(f):ee(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Ee(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===s||f===null||ee(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?h:d)}function h(f){return f===s||f===92?(e.consume(f),d):d(f)}}function ms(e,t){let n;return r;function r(i){return ee(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ge(i)?Ee(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const GN={name:"definition",tokenize:KN},YN={partial:!0,tokenize:qN};function KN(e,t,n){const r=this;let i;return o;function o(p){return e.enter("definition"),s(p)}function s(p){return X2.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return i=io(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),c):n(p)}function c(p){return Pt(p)?ms(e,u)(p):u(p)}function u(p){return q2(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function d(p){return e.attempt(YN,h,h)(p)}function h(p){return ge(p)?Ee(e,f,"whitespace")(p):f(p)}function f(p){return p===null||ee(p)?(e.exit("definition"),r.parser.defined.push(i),t(p)):n(p)}}function qN(e,t,n){return r;function r(l){return Pt(l)?ms(e,i)(l):n(l)}function i(l){return Q2(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return ge(l)?Ee(e,s,"whitespace")(l):s(l)}function s(l){return l===null||ee(l)?t(l):n(l)}}const XN={name:"hardBreakEscape",tokenize:QN};function QN(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return ee(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const JN={name:"headingAtx",resolve:ZN,tokenize:eD};function ZN(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Dn(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function eD(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),s(d)}function s(d){return d===35&&r++<6?(e.consume(d),s):d===null||Pt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||ee(d)?(e.exit("atxHeading"),t(d)):ge(d)?Ee(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||Pt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const tD=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Hy=["pre","script","style","textarea"],nD={concrete:!0,name:"htmlFlow",resolveTo:oD,tokenize:sD},rD={partial:!0,tokenize:lD},iD={partial:!0,tokenize:aD};function oD(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function sD(e,t,n){const r=this;let i,o,s,l,c;return u;function u(_){return d(_)}function d(_){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(_),h}function h(_){return _===33?(e.consume(_),f):_===47?(e.consume(_),o=!0,y):_===63?(e.consume(_),i=3,r.interrupt?t:S):jn(_)?(e.consume(_),s=String.fromCharCode(_),w):n(_)}function f(_){return _===45?(e.consume(_),i=2,p):_===91?(e.consume(_),i=5,l=0,g):jn(_)?(e.consume(_),i=4,r.interrupt?t:S):n(_)}function p(_){return _===45?(e.consume(_),r.interrupt?t:S):n(_)}function g(_){const ye="CDATA[";return _===ye.charCodeAt(l++)?(e.consume(_),l===ye.length?r.interrupt?t:D:g):n(_)}function y(_){return jn(_)?(e.consume(_),s=String.fromCharCode(_),w):n(_)}function w(_){if(_===null||_===47||_===62||Pt(_)){const ye=_===47,Re=s.toLowerCase();return!ye&&!o&&Hy.includes(Re)?(i=1,r.interrupt?t(_):D(_)):tD.includes(s.toLowerCase())?(i=6,ye?(e.consume(_),m):r.interrupt?t(_):D(_)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(_):o?x(_):v(_))}return _===45||zt(_)?(e.consume(_),s+=String.fromCharCode(_),w):n(_)}function m(_){return _===62?(e.consume(_),r.interrupt?t:D):n(_)}function x(_){return ge(_)?(e.consume(_),x):P(_)}function v(_){return _===47?(e.consume(_),P):_===58||_===95||jn(_)?(e.consume(_),k):ge(_)?(e.consume(_),v):P(_)}function k(_){return _===45||_===46||_===58||_===95||zt(_)?(e.consume(_),k):j(_)}function j(_){return _===61?(e.consume(_),C):ge(_)?(e.consume(_),j):v(_)}function C(_){return _===null||_===60||_===61||_===62||_===96?n(_):_===34||_===39?(e.consume(_),c=_,T):ge(_)?(e.consume(_),C):E(_)}function T(_){return _===c?(e.consume(_),c=null,A):_===null||ee(_)?n(_):(e.consume(_),T)}function E(_){return _===null||_===34||_===39||_===47||_===60||_===61||_===62||_===96||Pt(_)?j(_):(e.consume(_),E)}function A(_){return _===47||_===62||ge(_)?v(_):n(_)}function P(_){return _===62?(e.consume(_),N):n(_)}function N(_){return _===null||ee(_)?D(_):ge(_)?(e.consume(_),N):n(_)}function D(_){return _===45&&i===2?(e.consume(_),q):_===60&&i===1?(e.consume(_),re):_===62&&i===4?(e.consume(_),X):_===63&&i===3?(e.consume(_),S):_===93&&i===5?(e.consume(_),U):ee(_)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(rD,ne,B)(_)):_===null||ee(_)?(e.exit("htmlFlowData"),B(_)):(e.consume(_),D)}function B(_){return e.check(iD,$,ne)(_)}function $(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),H}function H(_){return _===null||ee(_)?B(_):(e.enter("htmlFlowData"),D(_))}function q(_){return _===45?(e.consume(_),S):D(_)}function re(_){return _===47?(e.consume(_),s="",M):D(_)}function M(_){if(_===62){const ye=s.toLowerCase();return Hy.includes(ye)?(e.consume(_),X):D(_)}return jn(_)&&s.length<8?(e.consume(_),s+=String.fromCharCode(_),M):D(_)}function U(_){return _===93?(e.consume(_),S):D(_)}function S(_){return _===62?(e.consume(_),X):_===45&&i===2?(e.consume(_),S):D(_)}function X(_){return _===null||ee(_)?(e.exit("htmlFlowData"),ne(_)):(e.consume(_),X)}function ne(_){return e.exit("htmlFlow"),t(_)}}function aD(e,t,n){const r=this;return i;function i(s){return ee(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):n(s)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}function lD(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Dc,t,n)}}const cD={name:"htmlText",tokenize:uD};function uD(e,t,n){const r=this;let i,o,s;return l;function l(S){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(S),c}function c(S){return S===33?(e.consume(S),u):S===47?(e.consume(S),j):S===63?(e.consume(S),v):jn(S)?(e.consume(S),E):n(S)}function u(S){return S===45?(e.consume(S),d):S===91?(e.consume(S),o=0,g):jn(S)?(e.consume(S),x):n(S)}function d(S){return S===45?(e.consume(S),p):n(S)}function h(S){return S===null?n(S):S===45?(e.consume(S),f):ee(S)?(s=h,re(S)):(e.consume(S),h)}function f(S){return S===45?(e.consume(S),p):h(S)}function p(S){return S===62?q(S):S===45?f(S):h(S)}function g(S){const X="CDATA[";return S===X.charCodeAt(o++)?(e.consume(S),o===X.length?y:g):n(S)}function y(S){return S===null?n(S):S===93?(e.consume(S),w):ee(S)?(s=y,re(S)):(e.consume(S),y)}function w(S){return S===93?(e.consume(S),m):y(S)}function m(S){return S===62?q(S):S===93?(e.consume(S),m):y(S)}function x(S){return S===null||S===62?q(S):ee(S)?(s=x,re(S)):(e.consume(S),x)}function v(S){return S===null?n(S):S===63?(e.consume(S),k):ee(S)?(s=v,re(S)):(e.consume(S),v)}function k(S){return S===62?q(S):v(S)}function j(S){return jn(S)?(e.consume(S),C):n(S)}function C(S){return S===45||zt(S)?(e.consume(S),C):T(S)}function T(S){return ee(S)?(s=T,re(S)):ge(S)?(e.consume(S),T):q(S)}function E(S){return S===45||zt(S)?(e.consume(S),E):S===47||S===62||Pt(S)?A(S):n(S)}function A(S){return S===47?(e.consume(S),q):S===58||S===95||jn(S)?(e.consume(S),P):ee(S)?(s=A,re(S)):ge(S)?(e.consume(S),A):q(S)}function P(S){return S===45||S===46||S===58||S===95||zt(S)?(e.consume(S),P):N(S)}function N(S){return S===61?(e.consume(S),D):ee(S)?(s=N,re(S)):ge(S)?(e.consume(S),N):A(S)}function D(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),i=S,B):ee(S)?(s=D,re(S)):ge(S)?(e.consume(S),D):(e.consume(S),$)}function B(S){return S===i?(e.consume(S),i=void 0,H):S===null?n(S):ee(S)?(s=B,re(S)):(e.consume(S),B)}function $(S){return S===null||S===34||S===39||S===60||S===61||S===96?n(S):S===47||S===62||Pt(S)?A(S):(e.consume(S),$)}function H(S){return S===47||S===62||Pt(S)?A(S):n(S)}function q(S){return S===62?(e.consume(S),e.exit("htmlTextData"),e.exit("htmlText"),t):n(S)}function re(S){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),M}function M(S){return ge(S)?Ee(e,U,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):U(S)}function U(S){return e.enter("htmlTextData"),s(S)}}const $p={name:"labelEnd",resolveAll:pD,resolveTo:mD,tokenize:gD},dD={tokenize:yD},hD={tokenize:xD},fD={tokenize:vD};function pD(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Dn(e,0,e.length,n),e}function mD(e,t){let n=e.length,r=0,i,o,s,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[s-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Kt(l,e.slice(o+1,o+r+3)),l=Kt(l,[["enter",d,t]]),l=Kt(l,Wp(t.parser.constructs.insideSpan.null,e.slice(o+r+4,s-3),t)),l=Kt(l,[["exit",d,t],e[s-2],e[s-1],["exit",u,t]]),l=Kt(l,e.slice(s+1)),l=Kt(l,[["exit",c,t]]),Dn(e,o,e.length,l),e}function gD(e,t,n){const r=this;let i=r.events.length,o,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(f){return o?o._inactive?h(f):(s=r.parser.defined.includes(io(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(dD,d,s?d:h)(f):f===91?e.attempt(hD,d,s?u:h)(f):s?d(f):h(f)}function u(f){return e.attempt(fD,d,h)(f)}function d(f){return t(f)}function h(f){return o._balanced=!0,n(f)}}function yD(e,t,n){return r;function r(h){return e.enter("resource"),e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),i}function i(h){return Pt(h)?ms(e,o)(h):o(h)}function o(h){return h===41?d(h):q2(e,s,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(h)}function s(h){return Pt(h)?ms(e,c)(h):d(h)}function l(h){return n(h)}function c(h){return h===34||h===39||h===40?Q2(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(h):d(h)}function u(h){return Pt(h)?ms(e,d)(h):d(h)}function d(h){return h===41?(e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),e.exit("resource"),t):n(h)}}function xD(e,t,n){const r=this;return i;function i(l){return X2.call(r,e,o,s,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(io(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function s(l){return n(l)}}function vD(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const bD={name:"labelStartImage",resolveAll:$p.resolveAll,tokenize:wD};function wD(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),s):n(l)}function s(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const kD={name:"labelStartLink",resolveAll:$p.resolveAll,tokenize:SD};function SD(e,t,n){const r=this;return i;function i(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Qu={name:"lineEnding",tokenize:CD};function CD(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Ee(e,t,"linePrefix")}}const ul={name:"thematicBreak",tokenize:_D};function _D(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),s(u)}function s(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||ee(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),ge(u)?Ee(e,l,"whitespace")(u):l(u))}}const Ct={continuation:{tokenize:ID},exit:RD,name:"list",tokenize:TD},ED={partial:!0,tokenize:AD},jD={partial:!0,tokenize:PD};function TD(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return l;function l(p){const g=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Vh(p)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(ul,n,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(p)}return n(p)}function c(p){return Vh(p)&&++s<10?(e.consume(p),c):(!r.interrupt||s<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):n(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Dc,r.interrupt?n:d,e.attempt(ED,f,h))}function d(p){return r.containerState.initialBlankLine=!0,o++,f(p)}function h(p){return ge(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),f):n(p)}function f(p){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function ID(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Dc,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Ee(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!ge(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(jD,t,s)(l))}function s(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Ee(e,e.attempt(Ct,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function PD(e,t,n){const r=this;return Ee(e,i,"listItemIndent",r.containerState.size+1);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?t(o):n(o)}}function RD(e){e.exit(this.containerState.type)}function AD(e,t,n){const r=this;return Ee(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const s=r.events[r.events.length-1];return!ge(o)&&s&&s[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Gy={name:"setextUnderline",resolveTo:ND,tokenize:DD};function ND(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",s,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=s,e.push(["exit",s,t]),e}function DD(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,h;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){h=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||h)?(e.enter("setextHeadingLine"),i=u,s(u)):n(u)}function s(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),ge(u)?Ee(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||ee(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const MD={tokenize:LD};function LD(e){const t=this,n=e.attempt(Dc,r,e.attempt(this.parser.constructs.flowInitial,i,Ee(e,e.attempt(this.parser.constructs.flow,i,e.attempt(VN,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const zD={resolveAll:Z2()},OD=J2("string"),FD=J2("text");function J2(e){return{resolveAll:Z2(e==="text"?BD:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,s,l);return s;function s(d){return u(d)?o(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const h=i[d];let f=-1;if(h)for(;++f<h.length;){const p=h[f];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function Z2(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function BD(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,s=-1,l=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)l++,s--;if(s)break;s=-1}else if(u===-2)c=!0,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const VD={42:Ct,43:Ct,45:Ct,48:Ct,49:Ct,50:Ct,51:Ct,52:Ct,53:Ct,54:Ct,55:Ct,56:Ct,57:Ct,62:H2},UD={91:GN},WD={[-2]:Xu,[-1]:Xu,32:Xu},$D={35:JN,42:ul,45:[Gy,ul],60:nD,61:Gy,95:ul,96:$y,126:$y},HD={38:Y2,92:G2},GD={[-5]:Qu,[-4]:Qu,[-3]:Qu,33:bD,38:Y2,42:Uh,60:[kN,cD],91:kD,92:[XN,G2],93:$p,95:Uh,96:MN},YD={null:[Uh,zD]},KD={null:[42,95]},qD={null:[]},XD=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:KD,contentInitial:UD,disable:qD,document:VD,flow:$D,flowInitial:WD,insideSpan:YD,string:HD,text:GD},Symbol.toStringTag,{value:"Module"}));function QD(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let s=[],l=[];const c={attempt:T(j),check:T(C),consume:x,enter:v,exit:k,interrupt:T(C,{interrupt:!0})},u={code:null,containerState:{},defineSkip:y,events:[],now:g,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:h};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function h(N){return s=Kt(s,N),w(),s[s.length-1]!==null?[]:(E(t,0),u.events=Wp(o,u.events,u),u.events)}function f(N,D){return ZD(p(N),D)}function p(N){return JD(s,N)}function g(){const{_bufferIndex:N,_index:D,line:B,column:$,offset:H}=r;return{_bufferIndex:N,_index:D,line:B,column:$,offset:H}}function y(N){i[N.line]=N.column,P()}function w(){let N;for(;r._index<s.length;){const D=s[r._index];if(typeof D=="string")for(N=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===N&&r._bufferIndex<D.length;)m(D.charCodeAt(r._bufferIndex));else m(D)}}function m(N){d=d(N)}function x(N){ee(N)?(r.line++,r.column=1,r.offset+=N===-3?2:1,P()):N!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=N}function v(N,D){const B=D||{};return B.type=N,B.start=g(),u.events.push(["enter",B,u]),l.push(B),B}function k(N){const D=l.pop();return D.end=g(),u.events.push(["exit",D,u]),D}function j(N,D){E(N,D.from)}function C(N,D){D.restore()}function T(N,D){return B;function B($,H,q){let re,M,U,S;return Array.isArray($)?ne($):"tokenize"in $?ne([$]):X($);function X(he){return ve;function ve(At){const $e=At!==null&&he[At],Be=At!==null&&he.null,ut=[...Array.isArray($e)?$e:$e?[$e]:[],...Array.isArray(Be)?Be:Be?[Be]:[]];return ne(ut)(At)}}function ne(he){return re=he,M=0,he.length===0?q:_(he[M])}function _(he){return ve;function ve(At){return S=A(),U=he,he.partial||(u.currentConstruct=he),he.name&&u.parser.constructs.disable.null.includes(he.name)?Re():he.tokenize.call(D?Object.assign(Object.create(u),D):u,c,ye,Re)(At)}}function ye(he){return N(U,S),H}function Re(he){return S.restore(),++M<re.length?_(re[M]):q}}}function E(N,D){N.resolveAll&&!o.includes(N)&&o.push(N),N.resolve&&Dn(u.events,D,u.events.length-D,N.resolve(u.events.slice(D),u)),N.resolveTo&&(u.events=N.resolveTo(u.events,u))}function A(){const N=g(),D=u.previous,B=u.currentConstruct,$=u.events.length,H=Array.from(l);return{from:$,restore:q};function q(){r=N,u.previous=D,u.currentConstruct=B,u.events.length=$,l=H,P()}}function P(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function JD(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let s;if(n===i)s=[e[n].slice(r,o)];else{if(s=e.slice(n,i),r>-1){const l=s[0];typeof l=="string"?s[0]=l.slice(r):s.shift()}o>0&&s.push(e[i].slice(0,o))}return s}function ZD(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&i)continue;s=" ";break}default:s=String.fromCharCode(o)}i=o===-2,r.push(s)}return r.join("")}function eM(e){const r={constructs:aN([XD,...(e||{}).extensions||[]]),content:i(mN),defined:[],document:i(yN),flow:i(MD),lazy:{},string:i(OD),text:i(FD)};return r;function i(o){return s;function s(l){return QD(r,o,l)}}}function tM(e){for(;!K2(e););return e}const Yy=/[\0\t\n\r]/g;function nM(){let e=1,t="",n=!0,r;return i;function i(o,s,l){const c=[];let u,d,h,f,p;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),h=0,t="",n&&(o.charCodeAt(0)===65279&&h++,n=void 0);h<o.length;){if(Yy.lastIndex=h,u=Yy.exec(o),f=u&&u.index!==void 0?u.index:o.length,p=o.charCodeAt(f),!u){t=o.slice(h);break}if(p===10&&h===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),h<f&&(c.push(o.slice(h,f)),e+=f-h),p){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}h=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const rM=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function iM(e){return e.replace(rM,oM)}function oM(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return $2(n.slice(o?2:1),o?16:10)}return Up(n)||e}const ek={}.hasOwnProperty;function sM(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),aM(n)(tM(eM(n).document().write(nM()(e,t,!0))))}function aM(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(wt),autolinkProtocol:A,autolinkEmail:A,atxHeading:o(nn),blockQuote:o(Be),characterEscape:A,characterReference:A,codeFenced:o(ut),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(ut,s),codeText:o(dt,s),codeTextData:A,data:A,codeFlowValue:A,definition:o(rr),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(ht),hardBreakEscape:o(Wt),hardBreakTrailing:o(Wt),htmlFlow:o(Vr,s),htmlFlowData:A,htmlText:o(Vr,s),htmlTextData:A,image:o(Mn),label:s,link:o(wt),listItem:o(Ln),listItemValue:f,listOrdered:o(ir,h),listUnordered:o(ir),paragraph:o(kt),reference:_,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(nn),strong:o(Qe),thematicBreak:o(L)},exit:{atxHeading:c(),atxHeadingSequence:j,autolink:c(),autolinkEmail:$e,autolinkProtocol:At,blockQuote:c(),characterEscapeValue:P,characterReferenceMarkerHexadecimal:Re,characterReferenceMarkerNumeric:Re,characterReferenceValue:he,characterReference:ve,codeFenced:c(w),codeFencedFence:y,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:P,codeIndented:c(m),codeText:c(H),codeTextData:P,data:P,definition:c(),definitionDestinationString:k,definitionLabelString:x,definitionTitleString:v,emphasis:c(),hardBreakEscape:c(D),hardBreakTrailing:c(D),htmlFlow:c(B),htmlFlowData:P,htmlText:c($),htmlTextData:P,image:c(re),label:U,labelText:M,lineEnding:N,link:c(q),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ye,resourceDestinationString:S,resourceTitleString:X,resource:ne,setextHeading:c(E),setextHeadingLineSequence:T,setextHeadingText:C,strong:c(),thematicBreak:c()}};tk(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(R){let F={type:"root",children:[]};const W={stack:[F],tokenStack:[],config:t,enter:l,exit:u,buffer:s,resume:d,data:n},ie=[];let fe=-1;for(;++fe<R.length;)if(R[fe][1].type==="listOrdered"||R[fe][1].type==="listUnordered")if(R[fe][0]==="enter")ie.push(fe);else{const Nt=ie.pop();fe=i(R,Nt,fe)}for(fe=-1;++fe<R.length;){const Nt=t[R[fe][0]];ek.call(Nt,R[fe][1].type)&&Nt[R[fe][1].type].call(Object.assign({sliceSerialize:R[fe][2].sliceSerialize},W),R[fe][1])}if(W.tokenStack.length>0){const Nt=W.tokenStack[W.tokenStack.length-1];(Nt[1]||Ky).call(W,void 0,Nt[0])}for(F.position={start:lr(R.length>0?R[0][1].start:{line:1,column:1,offset:0}),end:lr(R.length>0?R[R.length-2][1].end:{line:1,column:1,offset:0})},fe=-1;++fe<t.transforms.length;)F=t.transforms[fe](F)||F;return F}function i(R,F,W){let ie=F-1,fe=-1,Nt=!1,rn,on,Ur,Wr;for(;++ie<=W;){const ft=R[ie];switch(ft[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ft[0]==="enter"?fe++:fe--,Wr=void 0;break}case"lineEndingBlank":{ft[0]==="enter"&&(rn&&!Wr&&!fe&&!Ur&&(Ur=ie),Wr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Wr=void 0}if(!fe&&ft[0]==="enter"&&ft[1].type==="listItemPrefix"||fe===-1&&ft[0]==="exit"&&(ft[1].type==="listUnordered"||ft[1].type==="listOrdered")){if(rn){let or=ie;for(on=void 0;or--;){const St=R[or];if(St[1].type==="lineEnding"||St[1].type==="lineEndingBlank"){if(St[0]==="exit")continue;on&&(R[on][1].type="lineEndingBlank",Nt=!0),St[1].type="lineEnding",on=or}else if(!(St[1].type==="linePrefix"||St[1].type==="blockQuotePrefix"||St[1].type==="blockQuotePrefixWhitespace"||St[1].type==="blockQuoteMarker"||St[1].type==="listItemIndent"))break}Ur&&(!on||Ur<on)&&(rn._spread=!0),rn.end=Object.assign({},on?R[on][1].start:ft[1].end),R.splice(on||ie,0,["exit",rn,ft[2]]),ie++,W++}if(ft[1].type==="listItemPrefix"){const or={type:"listItem",_spread:!1,start:Object.assign({},ft[1].start),end:void 0};rn=or,R.splice(ie,0,["enter",or,ft[2]]),ie++,W++,Ur=void 0,Wr=!0}}}return R[F][1]._spread=Nt,W}function o(R,F){return W;function W(ie){l.call(this,R(ie),ie),F&&F.call(this,ie)}}function s(){this.stack.push({type:"fragment",children:[]})}function l(R,F,W){this.stack[this.stack.length-1].children.push(R),this.stack.push(R),this.tokenStack.push([F,W||void 0]),R.position={start:lr(F.start),end:void 0}}function c(R){return F;function F(W){R&&R.call(this,W),u.call(this,W)}}function u(R,F){const W=this.stack.pop(),ie=this.tokenStack.pop();if(ie)ie[0].type!==R.type&&(F?F.call(this,R,ie[0]):(ie[1]||Ky).call(this,R,ie[0]));else throw new Error("Cannot close `"+R.type+"` ("+ps({start:R.start,end:R.end})+"): it’s not open");W.position.end=lr(R.end)}function d(){return oN(this.stack.pop())}function h(){this.data.expectingFirstListItemValue=!0}function f(R){if(this.data.expectingFirstListItemValue){const F=this.stack[this.stack.length-2];F.start=Number.parseInt(this.sliceSerialize(R),10),this.data.expectingFirstListItemValue=void 0}}function p(){const R=this.resume(),F=this.stack[this.stack.length-1];F.lang=R}function g(){const R=this.resume(),F=this.stack[this.stack.length-1];F.meta=R}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function w(){const R=this.resume(),F=this.stack[this.stack.length-1];F.value=R.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const R=this.resume(),F=this.stack[this.stack.length-1];F.value=R.replace(/(\r?\n|\r)$/g,"")}function x(R){const F=this.resume(),W=this.stack[this.stack.length-1];W.label=F,W.identifier=io(this.sliceSerialize(R)).toLowerCase()}function v(){const R=this.resume(),F=this.stack[this.stack.length-1];F.title=R}function k(){const R=this.resume(),F=this.stack[this.stack.length-1];F.url=R}function j(R){const F=this.stack[this.stack.length-1];if(!F.depth){const W=this.sliceSerialize(R).length;F.depth=W}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function T(R){const F=this.stack[this.stack.length-1];F.depth=this.sliceSerialize(R).codePointAt(0)===61?1:2}function E(){this.data.setextHeadingSlurpLineEnding=void 0}function A(R){const W=this.stack[this.stack.length-1].children;let ie=W[W.length-1];(!ie||ie.type!=="text")&&(ie=oe(),ie.position={start:lr(R.start),end:void 0},W.push(ie)),this.stack.push(ie)}function P(R){const F=this.stack.pop();F.value+=this.sliceSerialize(R),F.position.end=lr(R.end)}function N(R){const F=this.stack[this.stack.length-1];if(this.data.atHardBreak){const W=F.children[F.children.length-1];W.position.end=lr(R.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(F.type)&&(A.call(this,R),P.call(this,R))}function D(){this.data.atHardBreak=!0}function B(){const R=this.resume(),F=this.stack[this.stack.length-1];F.value=R}function $(){const R=this.resume(),F=this.stack[this.stack.length-1];F.value=R}function H(){const R=this.resume(),F=this.stack[this.stack.length-1];F.value=R}function q(){const R=this.stack[this.stack.length-1];if(this.data.inReference){const F=this.data.referenceType||"shortcut";R.type+="Reference",R.referenceType=F,delete R.url,delete R.title}else delete R.identifier,delete R.label;this.data.referenceType=void 0}function re(){const R=this.stack[this.stack.length-1];if(this.data.inReference){const F=this.data.referenceType||"shortcut";R.type+="Reference",R.referenceType=F,delete R.url,delete R.title}else delete R.identifier,delete R.label;this.data.referenceType=void 0}function M(R){const F=this.sliceSerialize(R),W=this.stack[this.stack.length-2];W.label=iM(F),W.identifier=io(F).toLowerCase()}function U(){const R=this.stack[this.stack.length-1],F=this.resume(),W=this.stack[this.stack.length-1];if(this.data.inReference=!0,W.type==="link"){const ie=R.children;W.children=ie}else W.alt=F}function S(){const R=this.resume(),F=this.stack[this.stack.length-1];F.url=R}function X(){const R=this.resume(),F=this.stack[this.stack.length-1];F.title=R}function ne(){this.data.inReference=void 0}function _(){this.data.referenceType="collapsed"}function ye(R){const F=this.resume(),W=this.stack[this.stack.length-1];W.label=F,W.identifier=io(this.sliceSerialize(R)).toLowerCase(),this.data.referenceType="full"}function Re(R){this.data.characterReferenceType=R.type}function he(R){const F=this.sliceSerialize(R),W=this.data.characterReferenceType;let ie;W?(ie=$2(F,W==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ie=Up(F);const fe=this.stack[this.stack.length-1];fe.value+=ie}function ve(R){const F=this.stack.pop();F.position.end=lr(R.end)}function At(R){P.call(this,R);const F=this.stack[this.stack.length-1];F.url=this.sliceSerialize(R)}function $e(R){P.call(this,R);const F=this.stack[this.stack.length-1];F.url="mailto:"+this.sliceSerialize(R)}function Be(){return{type:"blockquote",children:[]}}function ut(){return{type:"code",lang:null,meta:null,value:""}}function dt(){return{type:"inlineCode",value:""}}function rr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ht(){return{type:"emphasis",children:[]}}function nn(){return{type:"heading",depth:0,children:[]}}function Wt(){return{type:"break"}}function Vr(){return{type:"html",value:""}}function Mn(){return{type:"image",title:null,url:"",alt:null}}function wt(){return{type:"link",title:null,url:"",children:[]}}function ir(R){return{type:"list",ordered:R.type==="listOrdered",start:null,spread:R._spread,children:[]}}function Ln(R){return{type:"listItem",spread:R._spread,checked:null,children:[]}}function kt(){return{type:"paragraph",children:[]}}function Qe(){return{type:"strong",children:[]}}function oe(){return{type:"text",value:""}}function L(){return{type:"thematicBreak"}}}function lr(e){return{line:e.line,column:e.column,offset:e.offset}}function tk(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?tk(e,r):lM(e,r)}}function lM(e,t){let n;for(n in t)if(ek.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Ky(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ps({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ps({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ps({start:t.start,end:t.end})+") is still open")}function cM(e){const t=this;t.parser=n;function n(r){return sM(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function uM(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function dM(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function hM(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function fM(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function pM(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function mM(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Io(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let s,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=o+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function gM(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function yM(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function nk(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function xM(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return nk(e,t);const i={src:Io(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function vM(e,t){const n={src:Io(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function bM(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function wM(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return nk(e,t);const i={href:Io(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function kM(e,t){const n={href:Io(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function SM(e,t,n){const r=e.all(t),i=n?CM(n):rk(t),o={},s=[];if(typeof t.checked=="boolean"){const d=r[0];let h;d&&d.type==="element"&&d.tagName==="p"?h=d:(h={type:"element",tagName:"p",properties:{},children:[]},r.unshift(h)),h.children.length>0&&h.children.unshift({type:"text",value:" "}),h.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&s.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?s.push(...d.children):s.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:s};return e.patch(t,u),e.applyData(t,u)}function CM(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=rk(n[r])}return t}function rk(e){const t=e.spread;return t??e.children.length>1}function _M(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function EM(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function jM(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function TM(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function IM(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],s),i.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=Op(t.children[1]),c=z2(t.children[t.children.length-1]);l&&c&&(s.position={start:l,end:c}),i.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function PM(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,l=s?s.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const h=t.children[c],f={},p=s?s[c]:void 0;p&&(f.align=p);let g={type:"element",tagName:o,properties:f,children:[]};h&&(g.children=e.all(h),e.patch(h,g),g=e.applyData(h,g)),u.push(g)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function RM(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const qy=9,Xy=32;function AM(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Qy(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Qy(t.slice(i),i>0,!1)),o.join("")}function Qy(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===qy||o===Xy;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===qy||o===Xy;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function NM(e,t){const n={type:"text",value:AM(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function DM(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const MM={blockquote:uM,break:dM,code:hM,delete:fM,emphasis:pM,footnoteReference:mM,heading:gM,html:yM,imageReference:xM,image:vM,inlineCode:bM,linkReference:wM,link:kM,listItem:SM,list:_M,paragraph:EM,root:jM,strong:TM,table:IM,tableCell:RM,tableRow:PM,text:NM,thematicBreak:DM,toml:Da,yaml:Da,definition:Da,footnoteDefinition:Da};function Da(){}const ik=-1,Mc=0,gs=1,ic=2,Hp=3,Gp=4,Yp=5,Kp=6,ok=7,sk=8,ak=typeof self=="object"?self:globalThis,Jy=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new ak[e](t)},LM=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,s]=t[i];switch(o){case Mc:case ik:return n(s,i);case gs:{const l=n([],i);for(const c of s)l.push(r(c));return l}case ic:{const l=n({},i);for(const[c,u]of s)l[r(c)]=r(u);return l}case Hp:return n(new Date(s),i);case Gp:{const{source:l,flags:c}=s;return n(new RegExp(l,c),i)}case Yp:{const l=n(new Map,i);for(const[c,u]of s)l.set(r(c),r(u));return l}case Kp:{const l=n(new Set,i);for(const c of s)l.add(r(c));return l}case ok:{const{name:l,message:c}=s;return n(typeof ak[l]=="function"?Jy(l,c):new Error(c),i)}case sk:return n(BigInt(s),i);case"BigInt":return n(Object(BigInt(s)),i);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:l}=new Uint8Array(s);return n(new DataView(l),s)}}return n(Jy(o,s),i)};return r},Zy=e=>LM(new Map,e)(0),Zr="",{toString:zM}={},{keys:OM}=Object,Ho=e=>{const t=typeof e;if(t!=="object"||!e)return[Mc,t];const n=zM.call(e).slice(8,-1);switch(n){case"Array":return[gs,Zr];case"Object":return[ic,Zr];case"Date":return[Hp,Zr];case"RegExp":return[Gp,Zr];case"Map":return[Yp,Zr];case"Set":return[Kp,Zr];case"DataView":return[gs,n]}return n.includes("Array")?[gs,n]:e instanceof Error?[ok,e.name||"Error"]:[ic,n]},Ma=([e,t])=>e===Mc&&(t==="function"||t==="symbol"),FM=(e,t,n,r)=>{const i=(s,l)=>{const c=r.push(s)-1;return n.set(l,c),c},o=s=>{if(n.has(s))return n.get(s);let[l,c]=Ho(s);switch(l){case Mc:{let d=s;switch(c){case"bigint":l=sk,d=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([ik],s)}return i([l,d],s)}case gs:{if(c){let f=s;return c==="DataView"?f=new Uint8Array(s.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(s)),i([c,[...f]],s)}const d=[],h=i([l,d],s);for(const f of s)d.push(o(f));return h}case ic:{if(c)switch(c){case"BigInt":return i([c,s.toString()],s);case"Boolean":case"Number":case"String":return i([c,s.valueOf()],s)}if(t&&"toJSON"in s)return o(s.toJSON());const d=[],h=i([l,d],s);for(const f of OM(s))(e||!Ma(Ho(s[f])))&&d.push([o(f),o(s[f])]);return h}case Hp:return i([l,isNaN(s.getTime())?Zr:s.toISOString()],s);case Gp:{const{source:d,flags:h}=s;return i([l,{source:d,flags:h}],s)}case Yp:{const d=[],h=i([l,d],s);for(const[f,p]of s)(e||!(Ma(Ho(f))||Ma(Ho(p))))&&d.push([o(f),o(p)]);return h}case Kp:{const d=[],h=i([l,d],s);for(const f of s)(e||!Ma(Ho(f)))&&d.push(o(f));return h}}const{message:u}=s;return i([l,{name:c,message:u}],s)};return o},ex=(e,{json:t,lossy:n}={})=>{const r=[];return FM(!(t||n),!!t,new Map,r)(e),r},oc=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Zy(ex(e,t)):structuredClone(e):(e,t)=>Zy(ex(e,t));function BM(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function VM(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function UM(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||BM,r=e.options.footnoteBackLabel||VM,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),h=String(u.identifier).toUpperCase(),f=Io(h.toLowerCase());let p=0;const g=[],y=e.footnoteCounts.get(h);for(;y!==void 0&&++p<=y;){g.length>0&&g.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,p);typeof x=="string"&&(x={type:"text",value:x}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,p),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const w=d[d.length-1];if(w&&w.type==="element"&&w.tagName==="p"){const x=w.children[w.children.length-1];x&&x.type==="text"?x.value+=" ":w.children.push({type:"text",value:" "}),w.children.push(...g)}else d.push(...g);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,m),l.push(m)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...oc(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const lk=function(e){if(e==null)return GM;if(typeof e=="function")return Lc(e);if(typeof e=="object")return Array.isArray(e)?WM(e):$M(e);if(typeof e=="string")return HM(e);throw new Error("Expected function, string, or object as test")};function WM(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=lk(e[n]);return Lc(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function $M(e){const t=e;return Lc(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function HM(e){return Lc(t);function t(n){return n&&n.type===e}}function Lc(e){return t;function t(n,r,i){return!!(YM(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function GM(){return!0}function YM(e){return e!==null&&typeof e=="object"&&"type"in e}const ck=[],KM=!0,tx=!1,qM="skip";function XM(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=lk(i),s=r?-1:1;l(e,void 0,[])();function l(c,u,d){const h=c&&typeof c=="object"?c:{};if(typeof h.type=="string"){const p=typeof h.tagName=="string"?h.tagName:typeof h.name=="string"?h.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(p?"<"+p+">":""))+")"})}return f;function f(){let p=ck,g,y,w;if((!t||o(c,u,d[d.length-1]||void 0))&&(p=QM(n(c,d)),p[0]===tx))return p;if("children"in c&&c.children){const m=c;if(m.children&&p[0]!==qM)for(y=(r?m.children.length:-1)+s,w=d.concat(m);y>-1&&y<m.children.length;){const x=m.children[y];if(g=l(x,y,w)(),g[0]===tx)return g;y=typeof g[1]=="number"?g[1]:y+s}}return p}}}function QM(e){return Array.isArray(e)?e:typeof e=="number"?[KM,e]:e==null?ck:[e]}function uk(e,t,n,r){let i,o,s;typeof t=="function"&&typeof n!="function"?(o=void 0,s=t,i=n):(o=t,s=n,i=r),XM(e,o,l,i);function l(c,u){const d=u[u.length-1],h=d?d.children.indexOf(c):void 0;return s(c,h,d)}}const Wh={}.hasOwnProperty,JM={};function ZM(e,t){const n=t||JM,r=new Map,i=new Map,o=new Map,s={...MM,...n.handlers},l={all:u,applyData:tL,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:s,one:c,options:n,patch:eL,wrap:rL};return uk(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const h=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();h.has(f)||h.set(f,d)}}),l;function c(d,h){const f=d.type,p=l.handlers[f];if(Wh.call(l.handlers,f)&&p)return p(l,d,h);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:y,...w}=d,m=oc(w);return m.children=l.all(d),m}return oc(d)}return(l.options.unknownHandler||nL)(l,d,h)}function u(d){const h=[];if("children"in d){const f=d.children;let p=-1;for(;++p<f.length;){const g=l.one(f[p],d);if(g){if(p&&f[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=nx(g.value)),!Array.isArray(g)&&g.type==="element")){const y=g.children[0];y&&y.type==="text"&&(y.value=nx(y.value))}Array.isArray(g)?h.push(...g):h.push(g)}}}return h}}function eL(e,t){e.position&&(t.position=z8(e))}function tL(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const s="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,oc(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function nL(e,t){const n=t.data||{},r="value"in t&&!(Wh.call(n,"hProperties")||Wh.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function rL(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function nx(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function rx(e,t){const n=ZM(e,t),r=n.one(e,void 0),i=UM(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function iL(e,t){return e&&"run"in e?async function(n,r){const i=rx(n,{file:r,...t});await e.run(i,r)}:function(n,r){return rx(n,{file:r,...e||t})}}function ix(e){if(e)throw e}var dl=Object.prototype.hasOwnProperty,dk=Object.prototype.toString,ox=Object.defineProperty,sx=Object.getOwnPropertyDescriptor,ax=function(t){return typeof Array.isArray=="function"?Array.isArray(t):dk.call(t)==="[object Array]"},lx=function(t){if(!t||dk.call(t)!=="[object Object]")return!1;var n=dl.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&dl.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||dl.call(t,i)},cx=function(t,n){ox&&n.name==="__proto__"?ox(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},ux=function(t,n){if(n==="__proto__")if(dl.call(t,n)){if(sx)return sx(t,n).value}else return;return t[n]},oL=function e(){var t,n,r,i,o,s,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=ux(l,n),i=ux(t,n),l!==i&&(d&&i&&(lx(i)||(o=ax(i)))?(o?(o=!1,s=r&&ax(r)?r:[]):s=r&&lx(r)?r:{},cx(l,{name:n,newValue:e(d,s,i)})):typeof i<"u"&&cx(l,{name:n,newValue:i}));return l};const Ju=Kh(oL);function $h(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function sL(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);l(null,...i);function l(c,...u){const d=e[++o];let h=-1;if(c){s(c);return}for(;++h<i.length;)(u[h]===null||u[h]===void 0)&&(u[h]=i[h]);i=u,d?aL(d,l)(...u):s(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function aL(e,t){let n;return r;function r(...s){const l=e.length>s.length;let c;l&&s.push(i);try{c=e.apply(this,s)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(s,...l){n||(n=!0,t(s,...l))}function o(s){i(null,s)}}const Sn={basename:lL,dirname:cL,extname:uL,join:dL,sep:"/"};function lL(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ia(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let s=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else s<0&&(o=!0,s=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=s));return n===r?r=s:r<0&&(r=e.length),e.slice(n,r)}function cL(e){if(ia(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function uL(e){ia(e);let t=e.length,n=-1,r=0,i=-1,o=0,s;for(;t--;){const l=e.codePointAt(t);if(l===47){if(s){r=t+1;break}continue}n<0&&(s=!0,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function dL(...e){let t=-1,n;for(;++t<e.length;)ia(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":hL(n)}function hL(e){ia(e);const t=e.codePointAt(0)===47;let n=fL(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function fL(e,t){let n="",r=0,i=-1,o=0,s=-1,l,c;for(;++s<=e.length;){if(s<e.length)l=e.codePointAt(s);else{if(l===47)break;l=47}if(l===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=s,o=0;continue}}else if(n.length>0){n="",r=0,i=s,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,s):n=e.slice(i+1,s),r=s-i-1;i=s,o=0}else l===46&&o>-1?o++:o=-1}return n}function ia(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const pL={cwd:mL};function mL(){return"/"}function Hh(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function gL(e){if(typeof e=="string")e=new URL(e);else if(!Hh(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return yL(e)}function yL(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Zu=["history","path","basename","stem","extname","dirname"];class hk{constructor(t){let n;t?Hh(t)?n={path:t}:typeof t=="string"||xL(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":pL.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Zu.length;){const o=Zu[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Zu.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Sn.basename(this.path):void 0}set basename(t){td(t,"basename"),ed(t,"basename"),this.path=Sn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Sn.dirname(this.path):void 0}set dirname(t){dx(this.basename,"dirname"),this.path=Sn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Sn.extname(this.path):void 0}set extname(t){if(ed(t,"extname"),dx(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Sn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Hh(t)&&(t=gL(t)),td(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Sn.basename(this.path,this.extname):void 0}set stem(t){td(t,"stem"),ed(t,"stem"),this.path=Sn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ct(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function ed(e,t){if(e&&e.includes(Sn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Sn.sep+"`")}function td(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function dx(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function xL(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const vL=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},bL={}.hasOwnProperty;class qp extends vL{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=sL()}copy(){const t=new qp;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ju(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(id("data",this.frozen),this.namespace[t]=n,this):bL.call(this.namespace,t)&&this.namespace[t]||void 0:t?(id("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=La(t),r=this.parser||this.Parser;return nd("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),nd("process",this.parser||this.Parser),rd("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,s){const l=La(t),c=r.parse(l);r.run(c,l,function(d,h,f){if(d||!h||!f)return u(d);const p=h,g=r.stringify(p,f);SL(g)?f.value=g:f.result=g,u(d,f)});function u(d,h){d||!h?s(d):o?o(h):n(void 0,h)}}}processSync(t){let n=!1,r;return this.freeze(),nd("processSync",this.parser||this.Parser),rd("processSync",this.compiler||this.Compiler),this.process(t,i),fx("processSync","process",n),r;function i(o,s){n=!0,ix(o),r=s}}run(t,n,r){hx(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(s,l){const c=La(n);i.run(t,c,u);function u(d,h,f){const p=h||t;d?l(d):s?s(p):r(void 0,p,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),fx("runSync","run",r),i;function o(s,l){ix(s),i=l,r=!0}}stringify(t,n){this.freeze();const r=La(n),i=this.compiler||this.Compiler;return rd("stringify",i),hx(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(id("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...h]=u;c(d,h)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=Ju(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const h=u[d];o(h)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let h=-1,f=-1;for(;++h<r.length;)if(r[h][0]===u){f=h;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[p,...g]=d;const y=r[f][1];$h(y)&&$h(p)&&(p=Ju(!0,y,p)),r[f]=[u,p,...g]}}}}const wL=new qp().freeze();function nd(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function rd(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function id(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function hx(e){if(!$h(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function fx(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function La(e){return kL(e)?e:new hk(e)}function kL(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function SL(e){return typeof e=="string"||CL(e)}function CL(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const _L="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",px=[],mx={allowDangerousHtml:!0},EL=/^(https?|ircs?|mailto|xmpp)$/i,jL=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function TL(e){const t=IL(e),n=PL(e);return RL(t.runSync(t.parse(n),n),e)}function IL(e){const t=e.rehypePlugins||px,n=e.remarkPlugins||px,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...mx}:mx;return wL().use(cM).use(n).use(iL,r).use(t)}function PL(e){const t=e.children||"",n=new hk;return typeof t=="string"&&(n.value=t),n}function RL(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,s=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||AL;for(const d of jL)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+_L+d.id,void 0);return uk(e,u),U8(e,{Fragment:a.Fragment,components:i,ignoreInvalidStyle:!0,jsx:a.jsx,jsxs:a.jsxs,passKeys:!0,passNode:!0});function u(d,h,f){if(d.type==="raw"&&f&&typeof h=="number")return s?f.children.splice(h,1):f.children[h]={type:"text",value:d.value},h;if(d.type==="element"){let p;for(p in qu)if(Object.hasOwn(qu,p)&&Object.hasOwn(d.properties,p)){const g=d.properties[p],y=qu[p];(y===null||y.includes(d.tagName))&&(d.properties[p]=c(String(g||""),p,d))}}if(d.type==="element"){let p=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!p&&r&&typeof h=="number"&&(p=!r(d,h,f)),p&&f&&typeof h=="number")return l&&d.children?f.children.splice(h,1,...d.children):f.children.splice(h,1),h}}}function AL(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||EL.test(e.slice(0,t))?e:""}const NL=[{label:"📊 Storage usage",msg:"How much storage do I have?"},{label:"📤 Upload help",msg:"How do I upload files?"},{label:"🔗 Share a file",msg:"How do I share a file with someone?"},{label:"🖨️ Quick Print",msg:"How does the Quick Print feature work?"},{label:"💳 Plans & pricing",msg:"What plans are available?"},{label:"🛡️ Security",msg:"How secure is my data?"}];function DL({elevated:e=!1}){const[t,n]=b.useState(!1),[r,i]=b.useState([{role:"assistant",content:`Hi there! 👋 I'm **CloudVault AI**. I can help you with storage, file sharing, uploads, and more.

Try one of the suggestions below or ask me anything!`}]),[o,s]=b.useState(""),[l,c]=b.useState(!1),u=b.useRef(null),d=b.useRef(null),h=()=>{var m;(m=u.current)==null||m.scrollIntoView({behavior:"smooth"})};b.useEffect(()=>{h()},[r,l]),b.useEffect(()=>{const m=x=>{x.altKey&&x.key==="c"&&(x.preventDefault(),n(v=>!v))};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]),b.useEffect(()=>{t&&d.current&&setTimeout(()=>{var m;return(m=d.current)==null?void 0:m.focus()},200)},[t]);const f=async m=>{if(!m.trim()||l)return;const x=m.trim();s(""),i(v=>[...v,{role:"user",content:x}]),c(!0);try{const v=r.slice(1),k=await st("/chat/ask",{method:"POST",body:JSON.stringify({message:x,history:v})});if(k&&(k.reply||k.error))i(j=>[...j,{role:"assistant",content:k.reply||k.error||"Sorry, something went wrong."}]);else throw new Error("Invalid response")}catch(v){console.error("Chat error:",v),i(k=>[...k,{role:"assistant",content:"Sorry, I couldn't connect to the server. Please check your connection and try again. 🔄"}])}finally{c(!1)}},p=async m=>{m.preventDefault(),f(o)},g=m=>{f(m)},y=()=>{i([{role:"assistant",content:"Chat cleared! 🧹 How can I help you?"}])},w=r.length<=2&&!l;return a.jsx("div",{className:`cva-widget-container${e?" cva-widget-container--elevated":""}`,children:a.jsx(OR,{mode:"wait",children:t?a.jsxs(Na.div,{initial:{opacity:0,y:12,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:12,scale:.95},transition:{duration:.2,ease:"easeOut"},className:"cva-window",children:[a.jsxs("div",{className:"cva-header",children:[a.jsxs("div",{className:"cva-header-info",children:[a.jsx("div",{className:"cva-header-avatar",children:a.jsx(Xo,{size:18})}),a.jsxs("div",{children:[a.jsx("h3",{className:"cva-header-title",children:"CloudVault AI"}),a.jsxs("div",{className:"cva-header-status",children:[a.jsx("span",{})," Online"]})]})]}),a.jsxs("div",{className:"cva-header-actions",children:[a.jsx("button",{type:"button",className:"cva-icon-btn",onClick:y,"aria-label":"Clear chat",title:"Clear chat",children:a.jsx(M1,{size:15})}),a.jsx("button",{type:"button",className:"cva-icon-btn",onClick:()=>n(!1),"aria-label":"Close",children:a.jsx(Gf,{size:16})})]})]}),a.jsxs("div",{className:"cva-messages",children:[r.map((m,x)=>a.jsxs(Na.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:x===r.length-1?.05:0},className:`cva-message-row ${m.role}`,children:[a.jsx("div",{className:"cva-message-avatar",children:m.role==="assistant"?a.jsx(Xo,{size:16}):a.jsx(L1,{size:16})}),a.jsx("div",{className:"cva-message-bubble",children:a.jsx(TL,{components:{table:({node:v,...k})=>a.jsx("table",{className:"cva-table",...k}),a:({node:v,...k})=>a.jsx("a",{target:"_blank",rel:"noopener noreferrer",...k})},children:m.content})})]},x)),l&&a.jsxs(Na.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},className:"cva-message-row assistant",children:[a.jsx("div",{className:"cva-message-avatar",children:a.jsx(Xo,{size:16})}),a.jsx("div",{className:"cva-message-bubble",children:a.jsxs("div",{className:"cva-typing",children:[a.jsx("div",{className:"cva-dot"}),a.jsx("div",{className:"cva-dot"}),a.jsx("div",{className:"cva-dot"})]})})]}),a.jsx("div",{ref:u})]}),w&&a.jsx("div",{className:"cva-suggestions",children:NL.map(m=>a.jsx("button",{type:"button",className:"cva-chip",onClick:()=>g(m.msg),disabled:l,children:m.label},m.msg))}),a.jsxs("div",{className:"cva-input-area",children:[a.jsxs("form",{onSubmit:p,className:"cva-input-wrapper",children:[a.jsx("input",{ref:d,type:"text",value:o,onChange:m=>s(m.target.value),placeholder:"Ask me anything…",className:"cva-input",disabled:l}),a.jsx("button",{type:"submit",className:"cva-send-btn",disabled:!o.trim()||l,children:a.jsx(wE,{size:14,style:{marginLeft:"1px"}})})]}),a.jsx("div",{className:"cva-input-hint",children:"Alt+C to toggle · Powered by AI"})]})]},"window"):a.jsxs(Na.button,{type:"button",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.2,ease:"easeOut"},onClick:()=>n(!0),className:"cva-toggle-btn","aria-label":"Open CloudVault AI (Alt+C)",title:"CloudVault AI (Alt+C)",children:[a.jsx(Xo,{size:22}),a.jsx("span",{className:"cva-status-dot","aria-hidden":"true"})]},"toggle")})})}const ML=b.lazy(()=>wi(()=>import("./ProfilePage-KUBEWTcB.js"),[])),LL=b.lazy(()=>wi(()=>import("./SettingsPage-Bd-g9Py1.js"),[])),zL=b.lazy(()=>wi(()=>import("./SecurityPage-BziIuMDz.js"),[])),OL=b.lazy(()=>wi(()=>import("./BillingPage-BMt312Tx.js"),[])),FL=b.lazy(()=>wi(()=>import("./HelpPage-ASFo5fnA.js"),[])),BL=b.lazy(()=>wi(()=>import("./ActivityPage-BJkJ_wom.js"),[])),od=b.lazy(()=>wi(()=>import("./FileListPage-GWhyCzRW.js"),[]));function Wn(){return a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:48},children:a.jsx(Gh,{size:28})})}function VL({msg:e,type:t,onClose:n}){b.useEffect(()=>{const i=setTimeout(n,3500);return()=>clearTimeout(i)},[n]);const r=t==="error"?"var(--danger)":t==="success"?"var(--accent)":"var(--accent-blue)";return a.jsxs("div",{className:"toast",role:"alert","aria-live":"polite",style:{position:"fixed",bottom:32,right:32,zIndex:9999,background:r,color:"var(--text)",padding:"14px 24px",borderRadius:"var(--radius)",fontFamily:"var(--font)",fontWeight:600,fontSize:14,boxShadow:"var(--shadow)",animation:"slideUp .3s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10,maxWidth:420},children:[a.jsx("span",{children:t==="error"?"✕":t==="success"?"✓":"ℹ"}),a.jsx("span",{style:{flex:1},children:e}),a.jsx("span",{onClick:n,style:{cursor:"pointer",opacity:.7,fontSize:18,lineHeight:1},children:"×"})]})}function Gh({size:e=22,color:t="var(--accent)"}){return a.jsx("div",{style:{width:e,height:e,border:"3px solid var(--border)",borderTopColor:t,borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Yh({value:e}){const t=e>85?"var(--danger)":e>60?"var(--accent-amber)":"var(--accent)";return a.jsx("div",{style:{background:"var(--border)",borderRadius:99,height:6,overflow:"hidden",width:"100%"},children:a.jsx("div",{style:{width:`${e}%`,height:"100%",background:t,borderRadius:99,transition:"width .5s ease"}})})}function UL({jobs:e,history:t}){return!e.length&&!t.length?null:a.jsxs("div",{className:"transfer-panel",children:[a.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("strong",{style:{fontSize:13},children:"Transfers"}),a.jsx("span",{style:{fontSize:11,background:"var(--mega-red)",color:"var(--text)",padding:"2px 8px",borderRadius:99,fontWeight:700},children:e.filter(n=>n.status==="downloading").length})]}),a.jsxs("div",{style:{maxHeight:260,overflow:"auto",padding:12},children:[e.map(n=>a.jsxs("div",{style:{marginBottom:12},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:12,marginBottom:6},children:[a.jsx("span",{style:{color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),a.jsx("span",{style:{color:n.status==="failed"?"var(--danger)":"var(--accent-blue)",fontWeight:800},children:n.status==="failed"?"Failed":`${n.percent}%`})]}),a.jsx(Yh,{value:n.percent})]},n.id)),t.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",fontWeight:800,margin:"10px 0 8px",textTransform:"uppercase"},children:"Recent downloads"}),t.slice(0,4).map(n=>a.jsxs("div",{style:{padding:"8px 0",borderTop:"1px solid var(--border)"},children:[a.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),a.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:wo(n.downloadedAt)})]},n.id))]})]})]})}function WL({title:e,message:t,onConfirm:n,onCancel:r,danger:i=!1}){return a.jsx("div",{className:"modal-backdrop",onClick:r,children:a.jsxs("div",{className:"modal-card",onClick:o=>o.stopPropagation(),children:[a.jsx("div",{style:{fontSize:36,textAlign:"center",marginBottom:16},children:i?"⚠️":"❓"}),a.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:8},children:e}),a.jsx("p",{style:{color:"var(--text-secondary)",fontFamily:"var(--font)",fontSize:14,textAlign:"center",marginBottom:28,lineHeight:1.5},children:t}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[a.jsx("button",{type:"button",onClick:r,className:"btn-secondary",children:"Cancel"}),a.jsx("button",{type:"button",onClick:n,className:"btn-primary",style:i?{background:"var(--danger)",boxShadow:"0 10px 28px rgba(248,113,113,.25)"}:void 0,children:i?"Delete":"Confirm"})]})]})})}function $L({file:e,onRename:t,onCancel:n}){const[r,i]=b.useState(e.name),o=b.useRef(null);return b.useEffect(()=>{var s;(s=o.current)==null||s.select()},[]),a.jsx("div",{className:"modal-backdrop",onClick:n,children:a.jsxs("div",{className:"modal-card",onClick:s=>s.stopPropagation(),children:[a.jsx("div",{style:{fontSize:32,textAlign:"center",marginBottom:12},children:"✏️"}),a.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:20},children:"Rename File"}),a.jsx("input",{ref:o,value:r,onChange:s=>i(s.target.value),onKeyDown:s=>s.key==="Enter"&&t(r),className:"input-field",style:{marginBottom:20}}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",flexWrap:"wrap"},children:[a.jsx("button",{type:"button",onClick:n,className:"btn-secondary",children:"Cancel"}),a.jsx("button",{type:"button",onClick:()=>t(r),className:"btn-primary",children:"Rename"})]})]})})}function fk({tags:e}){return e!=null&&e.length?a.jsx("div",{style:{display:"flex",gap:4,marginTop:4,flexWrap:"wrap"},children:e.slice(0,3).map(t=>a.jsx("span",{style:{fontSize:10,padding:"2px 6px",borderRadius:6,background:"rgba(240,22,58,.12)",color:"var(--accent)",fontWeight:600},children:t},t))}):null}function br({label:e,onClick:t,tone:n="neutral",disabled:r=!1}){const i=n==="accent"?"accent":n==="blue"?"blue":"";return a.jsx("button",{type:"button",className:`quick-action-btn ${i}`.trim(),title:e,disabled:r,onClick:o=>{o.stopPropagation(),r||t()},children:e})}function HL({file:e,onDelete:t,onShare:n,onPreview:r,onRename:i,onDownload:o,onMove:s,onCopy:l,onTags:c,onEdit:u,onPrint:d,onAnnotate:h}){return a.jsxs("div",{className:"file-list-card",children:[a.jsx("div",{style:{fontSize:34,flexShrink:0,width:48,height:48,borderRadius:14,background:"rgba(56,189,248,.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:Ys(e.mimeType)}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:16,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),a.jsxs("div",{style:{color:"var(--text-muted)",fontSize:12,marginTop:3},children:[qe(e.size)," · ",wo(e.createdAt)]}),a.jsx(fk,{tags:e.tags})]}),a.jsxs("div",{className:"file-list-actions",children:[a.jsx(br,{label:"Preview",disabled:!Hf(e.mimeType),onClick:()=>r(e),tone:"blue"}),a.jsx(br,{label:"Download",onClick:()=>o(e)}),a.jsx(br,{label:"Share",onClick:()=>n(e),tone:"accent"}),a.jsx(br,{label:"Rename",onClick:()=>i(e)}),a.jsx(Wb,{file:e,onMove:s,onCopy:l,onTags:c,onEdit:u,onDelete:t,onPrint:d,onAnnotate:h})]})]})}function GL({file:e,token:t,onDelete:n,onShare:r,onPreview:i,onRename:o,onDownload:s,onMove:l,onCopy:c,onTags:u,onEdit:d,onPrint:h,onAnnotate:f}){var g;const p=(g=e.mimeType)==null?void 0:g.startsWith("image/");return a.jsxs("div",{className:"glass-card mega-file-card",style:{borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[a.jsxs("div",{style:{height:170,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(217,0,7,.08), rgba(20,20,20,.95))",borderBottom:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[p?a.jsx(BI,{fileId:e.id,token:t,alt:e.name,mimeType:e.mimeType}):a.jsx("div",{style:{fontSize:56,display:"flex"},children:Ys(e.mimeType)}),a.jsx("div",{style:{position:"absolute",right:8,bottom:8,fontSize:10,fontWeight:700,background:"var(--bg-card)",color:"var(--text)",padding:"2px 6px",borderRadius:6},children:qe(e.size)}),a.jsx("div",{style:{position:"absolute",right:10,top:10},children:a.jsx(Wb,{file:e,onMove:l,onCopy:c,onTags:u,onEdit:d,onDelete:n,onPrint:h,onAnnotate:f})})]}),a.jsxs("div",{style:{padding:"14px"},children:[a.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:5},children:e.name}),a.jsxs("div",{style:{color:"var(--text-muted)",fontSize:11},children:[qe(e.size)," · ",wo(e.createdAt)]}),a.jsx(fk,{tags:e.tags}),a.jsxs("div",{className:"grid-actions",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[a.jsx(br,{label:"Preview",disabled:!Hf(e.mimeType),onClick:()=>i(e),tone:"blue"}),a.jsx(br,{label:"Share",onClick:()=>r(e),tone:"accent"}),a.jsx(br,{label:"Download",onClick:()=>s(e)}),a.jsx(br,{label:"Rename",onClick:()=>o(e)})]})]})]})}function YL({account:e,onManage:t}){if(!(e!=null&&e.storageWarning))return null;const n=e.storageWarning==="critical";return a.jsxs("div",{style:{padding:"10px 20px",background:n?"rgba(255,77,77,.12)":"rgba(246,179,71,.12)",borderBottom:`1px solid ${n?"var(--danger)":"var(--accent-amber)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap",fontSize:13,fontFamily:"var(--font)"},children:[a.jsx("span",{children:n?"Storage almost full (95%+).":"Storage over 80% full."}),a.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{padding:"6px 14px",fontSize:13},children:"Manage storage"})]})}function KL({username:e,stats:t,storagePercent:n}){const r=new Date().getHours(),i=r<12?"Good morning":r<18?"Good afternoon":"Good evening",o=r<12?"☀️":r<18?"🌅":"🌙",s=t.storageQuota||1024*1024*1024*10,l=Math.min(100,t.storageUsed/s*100);return a.jsxs("div",{style:{marginBottom:32,animation:"fadeIn 0.3s ease-out"},children:[a.jsxs("h1",{style:{fontSize:26,fontWeight:800,color:"var(--text)",marginBottom:24,display:"flex",alignItems:"center",gap:10},children:[i,", ",(e==null?void 0:e.split(" ")[0])||"User"," ",o]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:16},children:[a.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:16,padding:20},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[a.jsx("span",{style:{color:"var(--text-muted)",fontSize:13,fontWeight:600},children:"Storage Used"}),a.jsxs("span",{style:{background:"rgba(59,130,246,0.1)",color:"#60a5fa",padding:"2px 8px",borderRadius:99,fontSize:12,fontWeight:700},children:[Math.round(l),"%"]})]}),a.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)",marginBottom:4},children:qe(t.storageUsed)}),a.jsxs("div",{style:{fontSize:13,color:"var(--text-muted)",fontWeight:500},children:["of ",qe(s)]})]}),a.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:16,padding:20},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[a.jsx("span",{style:{color:"var(--text-muted)",fontSize:13,fontWeight:600},children:"Recent Activity"}),a.jsx("span",{style:{background:"rgba(16,185,129,0.1)",color:"#10b981",padding:"2px 8px",borderRadius:99,fontSize:12,fontWeight:700},children:"Auto-sync"})]}),a.jsxs("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)",marginBottom:4},children:[t.totalFiles," files stored"]}),a.jsx("div",{style:{fontSize:13,color:"var(--text-muted)",fontWeight:500},children:"All vaults synced"})]}),a.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:16,padding:20},children:[a.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:a.jsx("span",{style:{color:"var(--text-muted)",fontSize:13,fontWeight:600},children:"Shared with Me"})}),a.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)",marginBottom:4},children:"0 shared items"}),a.jsx("div",{style:{fontSize:13,color:"var(--text-muted)",fontWeight:500},children:"Direct files & shared folders"})]}),a.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:16,padding:20},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[a.jsx("span",{style:{color:"var(--text-muted)",fontSize:13,fontWeight:600},children:"Security"}),a.jsx("span",{style:{background:"rgba(245,158,11,0.1)",color:"#f59e0b",padding:"2px 8px",borderRadius:99,fontSize:12,fontWeight:700},children:"Locked"})]}),a.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)",marginBottom:4},children:"Standard Security"}),a.jsx("div",{style:{fontSize:13,color:"var(--text-muted)",fontWeight:500},children:"AES-256 GCM • Zero-Knowledge"})]})]})]})}function qL({children:e,onNavigate:t,onSignOut:n,onUpgrade:r,transferActive:i=!1}){const{account:o,notifications:s,unreadCount:l,markAllRead:c}=Hb();return a.jsxs(a.Fragment,{children:[a.jsx(N5,{account:o,onOpenSettings:()=>t("settings")}),a.jsx(A5,{account:o,onUpgrade:r}),a.jsx(YL,{account:o,onManage:()=>t("billing")}),a.jsxs("header",{className:"account-header mega-top-bar",children:[a.jsx(D5,{notifications:s,unreadCount:l,onMarkAllRead:c}),a.jsx("div",{style:{display:"flex",alignItems:"center",gap:16},children:a.jsx(R5,{account:o,onNavigate:t,onSignOut:n})})]}),a.jsx(DL,{elevated:i}),e]})}function XL(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?new URLSearchParams(window.location.search).get("token"):null}function gx(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/reset-password")?new URLSearchParams(window.location.search).get("token"):null}function yx(){const e=window.location.pathname.replace(/\/+$/,"")||"/";if(e.startsWith("/share/")){const t=e.split("/");if(t.length>=3)return t[2]}return null}function QL(){const[e,t]=b.useState(()=>window.innerWidth);return b.useEffect(()=>{const n=()=>t(window.innerWidth);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),{width:e,isMobile:e<=768,isSmall:e<=520}}function sd({value:e,onChange:t,options:n,style:r}){var l;const[i,o]=b.useState(!1),s=((l=n.find(c=>c.value===e))==null?void 0:l.label)||e;return a.jsxs("div",{style:{position:"relative",...r},children:[a.jsxs("button",{type:"button",onClick:()=>o(!i),className:"select-field",style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,width:"100%"},children:[a.jsx("span",{children:s}),a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{transform:i?"rotate(180deg)":"none",transition:"0.2s",opacity:.5},children:a.jsx("path",{d:"M6 9l6 6 6-6"})})]}),i&&a.jsxs(a.Fragment,{children:[a.jsx("div",{onClick:()=>o(!1),style:{position:"fixed",inset:0,zIndex:150}}),a.jsx("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,minWidth:"100%",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"0 12px 40px rgba(0,0,0,0.35)",zIndex:151,overflow:"hidden",animation:"fadeIn 0.15s ease"},children:n.map(c=>a.jsxs("button",{type:"button",onClick:()=>{t(c.value),o(!1)},style:{display:"block",width:"100%",padding:"10px 14px",border:"none",background:c.value===e?"rgba(59,130,246,0.12)":"transparent",color:"var(--text)",fontFamily:"var(--font)",fontSize:13,fontWeight:c.value===e?600:500,cursor:"pointer",textAlign:"left",transition:"background 0.15s",whiteSpace:"nowrap"},onMouseEnter:u=>{c.value!==e&&(u.currentTarget.style.background="var(--bg-card-hover)")},onMouseLeave:u=>{u.currentTarget.style.background=c.value===e?"rgba(59,130,246,0.12)":"transparent"},children:[c.label,c.value===e&&a.jsx("span",{style:{marginLeft:8,color:"var(--accent-blue)"},children:"✓"})]},c.value))})]})]})}function JL(){const[e,t]=b.useState(XL),[n,r]=b.useState(gx),[i,o]=b.useState(yx),[s,l]=b.useState(()=>{const I=localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token"),V=gx(),J=yx();return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?"verify-email":V?"reset-password":J?"shared-link":I?"app":"landing"}),[c,u]=b.useState("login"),[d,h]=b.useState(()=>localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token")||""),[f,p]=b.useState(()=>localStorage.getItem("cv_user")||sessionStorage.getItem("cv_user")||""),[g,y]=b.useState(null),[w,m]=b.useState([]),[x,v]=b.useState([]),[k,j]=b.useState({totalFiles:0,storageUsed:0,storageQuota:1024*1024*1024,totalFolders:0}),[C,T]=b.useState(null),[E,A]=b.useState([]),[P,N]=b.useState(""),[D,B]=b.useState(!1),[$,H]=b.useState(0),[q,re]=b.useState(null),[M,U]=b.useState([]),[S,X]=b.useState(()=>{try{return JSON.parse(localStorage.getItem("cv_downloadHistory")||"[]")}catch{return[]}}),[ne,_]=b.useState(null),[ye,Re]=b.useState(null),[he,ve]=b.useState(""),[At,$e]=b.useState(!1),[Be,ut]=b.useState(!1),[dt,rr]=b.useState(()=>localStorage.getItem("cv_viewMode")||"list"),[ht,nn]=b.useState("all"),[Wt,Vr]=b.useState(()=>localStorage.getItem("cv_theme")||"dark"),[Mn,wt]=b.useState(null),[ir,Ln]=b.useState(null),[kt,Qe]=b.useState(!1),[oe,L]=b.useState("drive"),[R,F]=b.useState("createdAt"),[W,ie]=b.useState("desc"),[fe,Nt]=b.useState(""),[rn,on]=b.useState([]),[Ur,Wr]=b.useState(1),[ft,or]=b.useState(!1),[St,Po]=b.useState(!1),[pk,mk]=b.useState([]),[gk,yk]=b.useState([]),[xk,vk]=b.useState([]),[Xp,bk]=b.useState(null),[Si,Ro]=b.useState(null),[zc,Qp]=b.useState(null),[Oc,Fc]=b.useState(null),[Jp,Zp]=b.useState(null),[oa,em]=b.useState(null),[tz,wk]=b.useState("user"),[tm,kk]=b.useState([]),[nm,Sk]=b.useState(null),[zn,Ci]=b.useState(null),[Ck,_k]=b.useState([]),[Ek,jk]=b.useState([]),[Tk,Ik]=b.useState([]),Bc=j5(P,400),{isMobile:Vc,isSmall:Pk}=QL(),sa=b.useRef(),rm=b.useRef(),pe=b.useCallback((I,V="info")=>_({msg:I,type:V}),[]),ue=b.useCallback((I,V)=>st(I,V,d),[d]),rt=b.useCallback(async(I=1,V=!1)=>{var J,le;if(d){Po(!0);try{if(oe==="trash"){const $t=await ue("/trash");yk(Hr($t,"files")),vk(Hr($t,"folders")),Po(!1);return}if(oe==="admin"){const[$t,Qk]=await Promise.all([ue("/admin/users?limit=50"),ue("/admin/analytics").catch(()=>null)]);kk(Hr($t,"users")),Sk(Qk),Po(!1);return}if(oe==="dashboard"){const $t=await ue("/storage/usage");bk($t),j({totalFiles:$t.fileCount??0,storageUsed:$t.storageUsed??0,storageQuota:$t.storageQuota??1024*1024*1024,totalFolders:$t.folderCount??0}),Po(!1);return}const ce=new URLSearchParams;C&&ce.set("folderId",C),Bc&&ce.set("search",Bc),fe&&ce.set("tag",fe),ce.set("sortBy",R),ce.set("sortOrder",W),ce.set("page",String(I)),ce.set("limit","30");const[me,sn,$r,Wc,Xk]=await Promise.all([ue(`/files?${ce}`),ue(`/folders?${C?`parentId=${C}`:""}`),ue("/storage/usage"),ue("/files/tags").catch(()=>({tags:[]})),ue("/folders?all=true").catch(()=>({folders:[]}))]),$c=Hr(me,"files"),cm=Hr(sn,"folders");m(V?$t=>[...$t,...$c]:$c),v(cm),on((Wc==null?void 0:Wc.tags)||[]),mk(Hr(Xk,"folders")),or((((J=me==null?void 0:me.pagination)==null?void 0:J.page)||1)<(((le=me==null?void 0:me.pagination)==null?void 0:le.totalPages)||1)),Wr(I),j({totalFiles:$r.fileCount??$c.length,storageUsed:$r.storageUsed??0,storageQuota:$r.storageQuota??1024*1024*1024,totalFolders:$r.folderCount??cm.length})}catch(ce){console.error("Refresh failed:",ce);const me=ce.message.toLowerCase();me.includes("credential")||me.includes("unauthorized")||me.includes("token")?(localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),h(""),p(""),l("landing")):pe(ce.message,"error")}Po(!1)}},[d,C,Bc,fe,R,W,oe,ue,pe]);b.useEffect(()=>{rt(1,!1)},[rt]),b.useEffect(()=>{ue("/users/me").then(I=>wk((I==null?void 0:I.role)||"user")).catch(()=>{})},[d,ue]),b.useEffect(()=>{if(!d||oe==="drive"||oe==="trash"||oe==="dashboard"||oe==="admin")return;(async()=>{try{if(oe==="recent"){const V=await ue("/dashboard");_k(V.recentFiles||[])}else if(oe==="starred"){const V=await ue("/files?isStarred=true&limit=50");jk(Hr(V,"files"))}else if(oe==="shared"){const V=await ue("/dashboard"),J=[...V.sharedWithMe||[],...V.sharedByMe||[]].map(le=>le.file||le);Ik(J.filter(Boolean))}}catch{}})()},[d,oe,ue]);const Rk=I=>{Ci(I),I==="dashboard"&&L("dashboard"),I==="billing"&&Ci("billing")};b.useEffect(()=>{localStorage.setItem("cv_viewMode",dt)},[dt]),b.useEffect(()=>{localStorage.setItem("cv_theme",Wt)},[Wt]),b.useEffect(()=>{const I=V=>{if((V.metaKey||V.ctrlKey)&&V.key==="k"){V.preventDefault();const J=document.querySelector(".search-input-animated");J&&J.focus()}};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[]),b.useEffect(()=>{const I=V=>{var J;(J=V.detail)!=null&&J.token&&h(V.detail.token)};return window.addEventListener("cv-token-refreshed",I),()=>window.removeEventListener("cv-token-refreshed",I)},[]);const Ak=(I,V,J,le,ce=!0)=>{if(!I&&(le!=null&&le.email)){y(le),l("verify-email");return}if(!I)return;const me=ce?localStorage:sessionStorage,sn=ce?sessionStorage:localStorage;me.setItem("cv_token",I),sn.removeItem("cv_token"),V&&me.setItem("cv_refreshToken",V),sn.removeItem("cv_refreshToken");const $r=typeof J=="string"?J:(le==null?void 0:le.fullName)||(le==null?void 0:le.email);me.setItem("cv_user",$r||""),sn.removeItem("cv_user"),le!=null&&le.avatarUrl&&me.setItem("cv_avatar",le.avatarUrl),h(I),p($r||""),l("app")},Nk=async I=>{const V=`${I.id}-${Date.now()}`;re({name:I.name,percent:0}),U(J=>[{id:V,name:I.name,percent:0,status:"downloading"},...J].slice(0,6));try{const J=await kc(I.id,d,{onProgress:ce=>{re({name:I.name,percent:ce}),U(me=>me.map(sn=>sn.id===V?{...sn,percent:ce}:sn))}});R1(J,I.name);const le={id:V,name:I.name,size:I.size,downloadedAt:new Date().toISOString()};X(ce=>{const me=[le,...ce].slice(0,12);return localStorage.setItem("cv_downloadHistory",JSON.stringify(me)),me}),U(ce=>ce.map(me=>me.id===V?{...me,percent:100,status:"complete"}:me)),pe(`Downloaded "${I.name}"`,"success")}catch(J){U(le=>le.map(ce=>ce.id===V?{...ce,status:"failed"}:ce)),pe(J.message,"error")}re(null)},Dk=async()=>{try{const I=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");await ue("/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:I})})}catch{}localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),h(""),p(""),l("landing")},im=async(I,V,J)=>{if(!d)throw new Error("Authentication token missing. Please log in again.");const le=new FormData;return le.append("file",I),V&&le.append("folderId",V),A1("/files/upload",le,d,J)},Mk=async(I,V)=>ue("/folders",{method:"POST",body:JSON.stringify({name:I,parentId:V||null})}),Uc=async(I,V=!1)=>{if(!d){pe("Please log in again to upload files.","error");return}const J=Array.from(I||[]);if(!J.length)return;B(!0),H(0);let le=0;try{if(V&&J.some(ce=>ce.webkitRelativePath))await T5(J,{baseFolderId:C,createFolder:Mk,uploadFile:async(ce,me)=>{await im(ce,me,H),le++},onProgress:H});else for(let ce=0;ce<J.length;ce++)try{await im(J[ce],C,me=>{const sn=Math.round((ce+me/100)/J.length*100);H(sn)}),le++}catch(me){pe(`Failed to upload "${J[ce].name}": ${me.message}`,"error")}}finally{B(!1),H(0),rt(1,!1),le>0&&pe(`${le} file(s) uploaded successfully!`,"success")}},Lk=I=>{wt({title:"Delete File",message:`Move "${I.name}" to trash? You can restore it later from the Trash view.`,danger:!0,onConfirm:async()=>{wt(null);try{await ue(`/files/${I.id}`,{method:"DELETE"}),rt(),pe("File deleted","success")}catch(V){pe(V.message,"error")}}})},zk=I=>{wt({title:"Delete Folder",message:`Delete folder "${I.name}" and all its contents? This cannot be undone.`,danger:!0,onConfirm:async()=>{wt(null);try{await ue(`/folders/${I.id}`,{method:"DELETE"}),rt(),pe("Folder deleted","success")}catch(V){pe(V.message,"error")}}})},Ok=async(I,V)=>ue(`/files/${I.id}/share`,{method:"POST",body:JSON.stringify(V)}),Fk=async(I,{targetFolderId:V})=>{try{await ue(`/files/${I.id}/move`,{method:"POST",body:JSON.stringify({targetFolderId:V})}),Ro(null),rt(1,!1),pe("File moved","success")}catch(J){pe(J.message,"error")}},Bk=async(I,{targetFolderId:V,newName:J})=>{try{await ue(`/files/${I.id}/copy`,{method:"POST",body:JSON.stringify({targetFolderId:V,newName:J!==I.name?J:void 0})}),Ro(null),rt(1,!1),pe("File copied","success")}catch(le){pe(le.message,"error")}},Vk=async(I,V)=>{try{await ue(`/files/${I.id}`,{method:"PUT",body:JSON.stringify({tags:V})}),Fc(null),rt(1,!1),pe("Tags updated","success")}catch(J){pe(J.message,"error")}},Uk=async I=>{try{await ue(`/trash/files/${I}/restore`,{method:"POST"}),rt(1,!1),pe("File restored","success")}catch(V){pe(V.message,"error")}},Wk=async I=>{try{await ue(`/trash/folders/${I}/restore`,{method:"POST"}),rt(1,!1),pe("Folder restored","success")}catch(V){pe(V.message,"error")}},$k=I=>{wt({title:"Delete forever",message:`"${I.name}" will be permanently deleted. This cannot be undone.`,danger:!0,onConfirm:async()=>{wt(null);try{await ue(`/files/${I.id}/permanent`,{method:"DELETE"}),rt(1,!1),pe("File permanently deleted","success")}catch(V){pe(V.message,"error")}}})},Hk=()=>{wt({title:"Empty trash",message:"All items in trash will be permanently deleted.",danger:!0,onConfirm:async()=>{wt(null);try{await ue("/trash/empty",{method:"POST"}),rt(1,!1),pe("Trash emptied","success")}catch(I){pe(I.message,"error")}}})},Gk=async(I,V)=>{if(!V.trim()||V===I.name){Ln(null);return}try{await ue(`/files/${I.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:V})}),rt(),pe("File renamed","success")}catch(J){pe(J.message,"error")}Ln(null)},om=async()=>{if(he.trim()){try{await ue("/folders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:he,parentId:C})}),rt(),pe("Folder created!","success")}catch(I){pe(I.message,"error")}ve(""),$e(!1)}},Yk=I=>{T(I.id),A(V=>[...V,I]),Qe(!1)},sm=I=>{I===-1?(T(null),A([])):(T(E[I].id),A(V=>V.slice(0,I+1)))},Kk=I=>{I.preventDefault(),ut(!1),I.dataTransfer.files.length>0&&Uc(I.dataTransfer.files)},aa=b.useMemo(()=>{const I=bg.find(V=>V.key===ht);return!I||I.key==="all"?w:w.filter(V=>I.test(V.mimeType||""))},[w,ht]),am=k.storageQuota||1024*1024*1024,lm=Math.min(100,k.storageUsed/am*100);if(e)return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Zi}),a.jsx(o0,{token:e,onVerified:()=>{t(null),window.history.replaceState({},"","/"),l("auth"),u("login")},onBack:()=>{t(null),window.history.replaceState({},"","/"),l("auth"),u("login")}})]});if(n)return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Zi}),a.jsx(s0,{token:n,onBack:()=>{r(null),window.history.replaceState({},"","/"),l("auth"),u("login")}})]});if(["landing","about","contact","privacy","terms","security","status"].includes(s)&&!d)return a.jsx(VE,{view:s,onNavigate:I=>{l(I),window.scrollTo(0,0)},onGetStarted:()=>{u("register"),l("auth")},onLogin:()=>{u("login"),l("auth")},onSignUp:()=>{u("register"),l("auth")}});if(s==="auth"&&!d)return a.jsx(zI,{initialMode:c,onAuth:Ak,onNeedsVerification:I=>{y(I),l("verify-email")},onBack:()=>l("landing")});if(s==="verify-email"&&!d)return a.jsx(o0,{email:g==null?void 0:g.email,onVerified:()=>{y(null),l("auth"),u("login")},onBack:()=>{y(null),l("auth"),u("login")}});if(s==="reset-password"&&!d)return a.jsx(s0,{token:n,onSuccess:()=>{r(null),window.history.replaceState({},"","/"),l("auth"),u("login")},onBack:()=>{r(null),l("auth"),u("login")}});if(s==="shared-link")return a.jsx("div",{"data-theme":Wt,className:"app-shell",children:a.jsx(K5,{token:i})});const qk=dt==="grid"?GL:HL;return a.jsx(P5,{token:d,children:a.jsx(qL,{transferActive:M.length>0||S.length>0,onNavigate:I=>{Ci(null),Rk(I)},onSignOut:Dk,onUpgrade:()=>{Ci("billing"),L("drive")},children:a.jsxs("div",{"data-theme":Wt,className:"app-shell",children:[a.jsx("style",{children:Zi}),a.jsx("button",{type:"button",className:"mobile-menu-button","aria-label":"Open navigation menu","aria-expanded":kt,onClick:()=>Qe(I=>!I),children:"☰"}),kt&&Vc&&a.jsx("div",{onClick:()=>Qe(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:99}}),a.jsxs("div",{className:`sidebar ${kt?"open":""}`,style:{position:"fixed",left:0,top:0,bottom:0,width:280,background:"var(--bg-card)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",zIndex:100,transition:"transform .3s cubic-bezier(.4,0,.2,1)",...Vc?{transform:kt?"translateX(0)":"translateX(-100%)"}:{}},children:[a.jsxs("div",{style:{padding:"20px 24px",display:"flex",alignItems:"center",gap:12,borderBottom:"1px solid var(--border)"},children:[a.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg, #0ea5e9, #2563eb)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(14,165,233,0.3)"},children:a.jsx(rE,{size:20,color:"#fff"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:18,fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em"},children:"CloudVault"}),a.jsx("div",{style:{fontSize:11,color:"var(--accent-blue)",marginTop:2,fontWeight:600},children:"Enterprise Cloud Storage"})]})]}),a.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"20px 16px",display:"flex",flexDirection:"column",gap:24},className:"hide-scrollbar",children:[a.jsx("div",{children:a.jsxs("button",{type:"button",onClick:()=>{L("drive"),nn("all"),T(null),A([]),Qe(!1)},className:`nav-item-new ${oe==="drive"&&ht==="all"&&!C?"active":""}`,style:{fontSize:14,fontWeight:700},children:[a.jsx(Zd,{size:18})," ",a.jsx("span",{children:"My Drive"})]})}),a.jsxs("div",{children:[a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,padding:"0 8px"},children:a.jsxs("div",{style:{fontSize:12,fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.05em",display:"flex",alignItems:"center",gap:6},children:[a.jsx(kg,{size:14})," Folders (",k.totalFolders,")"]})}),k.totalFolders===0?a.jsx("div",{style:{fontSize:13,color:"var(--text-muted)",padding:"8px",fontStyle:"italic"},children:"No folders yet"}):a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[x.slice(0,4).map(I=>a.jsxs("button",{type:"button",onClick:()=>{T(I.id),A(V=>[...V,I]),L("drive"),Qe(!1)},className:"nav-item-new",children:[a.jsx(kg,{size:16,color:"#60a5fa"}),a.jsx("span",{children:I.name})]},I.id)),x.length>4&&a.jsxs("button",{type:"button",className:"nav-item-new",style:{color:"var(--text-muted)"},children:[a.jsx(K_,{size:16})," ",a.jsx("span",{children:"View all folders"})]})]})]}),a.jsxs("div",{children:[a.jsxs("div",{style:{fontSize:12,fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:12,padding:"0 8px",display:"flex",alignItems:"center",gap:6},children:[a.jsx(uE,{size:14})," Quick Filters"]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[a.jsxs("button",{type:"button",onClick:()=>{nn("images"),L("drive"),Qe(!1)},className:`nav-item-new ${ht==="images"&&oe==="drive"?"active":""}`,children:[a.jsx(fE,{size:16})," ",a.jsx("span",{children:"Images"})]}),a.jsxs("button",{type:"button",onClick:()=>{nn("videos"),L("drive"),Qe(!1)},className:`nav-item-new ${ht==="videos"&&oe==="drive"?"active":""}`,children:[a.jsx(aE,{size:16})," ",a.jsx("span",{children:"Videos"})]}),a.jsxs("button",{type:"button",onClick:()=>{nn("documents"),L("drive"),Qe(!1)},className:`nav-item-new ${ht==="documents"&&oe==="drive"?"active":""}`,children:[a.jsx(oE,{size:16})," ",a.jsx("span",{children:"PDFs & Docs"})]}),a.jsxs("button",{type:"button",onClick:()=>{nn("archives"),L("drive"),Qe(!1)},className:`nav-item-new ${ht==="archives"&&oe==="drive"?"active":""}`,children:[a.jsx(U_,{size:16})," ",a.jsx("span",{children:"ZIP Files"})]})]})]}),a.jsxs("div",{children:[a.jsxs("div",{style:{fontSize:12,fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:12,padding:"0 8px",display:"flex",alignItems:"center",gap:6},children:[a.jsx(D1,{size:14})," Utilities"]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[a.jsxs("button",{type:"button",onClick:()=>{L("trash"),Qe(!1)},className:`nav-item-new ${oe==="trash"?"active":""}`,children:[a.jsx(M1,{size:16})," ",a.jsx("span",{children:"Trash"})]}),a.jsxs("button",{type:"button",onClick:()=>{L("admin"),Qe(!1)},className:`nav-item-new ${oe==="admin"?"active":""}`,children:[a.jsx($_,{size:16})," ",a.jsx("span",{children:"Archive"})]}),a.jsxs("button",{type:"button",onClick:()=>{L("activity"),Qe(!1)},className:`nav-item-new ${oe==="activity"?"active":""}`,children:[a.jsx(B_,{size:16})," ",a.jsx("span",{children:"Activity Log"})]}),a.jsxs("button",{type:"button",onClick:()=>{L("dashboard"),Qe(!1)},className:`nav-item-new ${oe==="dashboard"?"active":""}`,children:[a.jsx(mE,{size:16})," ",a.jsx("span",{children:"Storage Dashboard"})]})]})]})]}),a.jsxs("div",{style:{padding:"20px 16px",borderTop:"1px solid var(--border)",background:"var(--bg-card)"},children:[a.jsxs("div",{style:{fontSize:13,fontWeight:600,color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[a.jsx(Zd,{size:15,color:"#3b82f6"})," Storage"]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:8},children:[a.jsxs("span",{style:{fontSize:12,color:"var(--text-muted)",fontWeight:500},children:[qe(k.storageUsed)," used"]}),a.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)",fontWeight:600},children:qe(am)})]}),a.jsx("div",{style:{width:"100%",height:6,background:"var(--border)",borderRadius:99},children:a.jsx("div",{style:{width:`${Math.max(2,lm)}%`,height:"100%",background:"linear-gradient(90deg, #3b82f6, #60a5fa)",borderRadius:99,boxShadow:"0 0 10px rgba(59,130,246,0.5)"}})}),a.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:8,fontWeight:500},children:"Free Workspace"})]}),a.jsxs("button",{type:"button",onClick:()=>Ci("billing"),style:{width:"100%",padding:"12px",background:"rgba(59,130,246,0.1)",border:"1px solid rgba(59,130,246,0.3)",borderRadius:12,color:"#60a5fa",fontSize:13,fontWeight:600,cursor:"pointer",display:"flex",flexDirection:"column",gap:4,transition:"all 0.2s"},onMouseEnter:I=>I.currentTarget.style.background="rgba(59,130,246,0.15)",onMouseLeave:I=>I.currentTarget.style.background="rgba(59,130,246,0.1)",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[a.jsx("span",{children:"Upgrade →"}),a.jsx(CE,{size:14})]}),a.jsx("span",{style:{fontSize:11,color:"var(--accent-blue)",fontWeight:400,opacity:.8},children:"Expand to 2 TB with E2EE Priority"})]})]})]}),a.jsxs("div",{className:"main-content",style:{marginLeft:Vc?0:280,padding:"20px 32px",minHeight:"100vh"},children:[a.jsx(ZL,{appPage:zn,setAppPage:Ci,api:ue,token:d,notify:pe,stats:k,usageDetail:Xp,adminUsers:tm,systemHealth:nm,loading:St,onRefreshAccount:()=>{},theme:Wt,setTheme:Vr}),!zn&&oe==="recent"&&a.jsx(b.Suspense,{fallback:a.jsx(Wn,{}),children:a.jsx(od,{title:"Recent files",files:Ck,emptyMessage:"No recent files yet.",onBack:()=>L("drive"),onOpen:Re})}),!zn&&oe==="starred"&&a.jsx(b.Suspense,{fallback:a.jsx(Wn,{}),children:a.jsx(od,{title:"Starred",files:Ek,emptyMessage:"Star files to see them here.",onBack:()=>L("drive"),onOpen:Re})}),!zn&&oe==="shared"&&a.jsx(b.Suspense,{fallback:a.jsx(Wn,{}),children:a.jsx(od,{title:"Shared with you",files:Tk,emptyMessage:"Nothing shared yet.",onBack:()=>L("drive"),onOpen:Re})}),!zn&&oe==="activity"&&a.jsx(b.Suspense,{fallback:a.jsx(Wn,{}),children:a.jsx(BL,{api:ue,onBack:()=>L("drive")})}),!zn&&oe==="trash"&&a.jsx(VI,{trashedFiles:gk,trashedFolders:xk,loading:St,onRestoreFile:Uk,onRestoreFolder:Wk,onPermanentDelete:$k,onEmptyTrash:Hk,onBack:()=>L("drive")}),!zn&&oe==="dashboard"&&a.jsx(u5,{stats:k,usage:Xp,onBack:()=>L("drive")}),!zn&&oe==="admin"&&a.jsx(b5,{users:tm,systemHealth:nm,loading:St,onBack:()=>L("drive")}),!zn&&oe==="drive"&&a.jsxs(a.Fragment,{children:[a.jsx(KL,{username:f,stats:k,storagePercent:lm,onUpload:()=>{var I;return(I=sa.current)==null?void 0:I.click()},onNewFolder:()=>$e(!0)}),a.jsxs("div",{className:"drive-toolbar",children:[a.jsxs("div",{className:"mega-search-bar drive-search",style:{position:"relative",flex:1,minWidth:0},children:[a.jsx("span",{className:"search-icon","aria-hidden":"true",style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:"var(--text-muted)",pointerEvents:"none"},children:"🔍"}),a.jsx("input",{className:"input-field search-input-animated",placeholder:"Search Cloud drive...",value:P,onChange:I=>N(I.target.value),style:{width:"100%",padding:"12px 60px 12px 44px",borderRadius:999,background:"var(--bg-card)",border:"1px solid var(--border)",transition:"border-color .2s ease, box-shadow .2s ease"}}),a.jsx("div",{style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"var(--surface-raised)",padding:"2px 6px",borderRadius:6,fontSize:11,fontWeight:700,color:"var(--text-muted)",pointerEvents:"none",border:"1px solid var(--border)"},children:"⌘K"})]}),a.jsxs("div",{className:"drive-toolbar-row",children:[a.jsx("button",{type:"button",className:"icon-btn",title:Wt==="dark"?"Light mode":"Dark mode",onClick:()=>Vr(I=>I==="dark"?"light":"dark"),children:Wt==="dark"?"☀":"🌙"}),a.jsxs("div",{className:"view-toggle",children:[a.jsx("button",{type:"button",onClick:()=>rr("list"),className:`view-toggle-btn${dt==="list"?" active":""}`,children:"☰"}),a.jsx("button",{type:"button",onClick:()=>rr("grid"),className:`view-toggle-btn${dt==="grid"?" active":""}`,children:"▦"})]}),oe==="drive"&&a.jsxs("div",{className:"drive-actions",style:{marginLeft:"auto"},children:[a.jsx("button",{type:"button",onClick:()=>$e(I=>!I),className:"btn-secondary mega-folder-btn",children:"New folder"}),a.jsx("button",{type:"button",onClick:()=>{var I;return(I=sa.current)==null?void 0:I.click()},className:"btn-primary mega-upload-btn",children:"Upload"}),a.jsx("button",{type:"button",onClick:()=>{var I;return(I=rm.current)==null?void 0:I.click()},className:"btn-secondary",children:"Folder"}),a.jsx("input",{ref:sa,type:"file",multiple:!0,hidden:!0,onChange:I=>{Uc(I.target.files),I.target.value=""}}),a.jsx("input",{ref:rm,type:"file",multiple:!0,webkitdirectory:"",hidden:!0,onChange:I=>{Uc(I.target.files,!0),I.target.value=""}})]})]})]}),oe==="drive"&&a.jsxs("div",{className:"drive-sortbar",children:[a.jsx(sd,{value:R,onChange:F,options:[{value:"createdAt",label:"Date"},{value:"name",label:"Name"},{value:"size",label:"Size"},{value:"updatedAt",label:"Modified"}]}),a.jsx(sd,{value:W,onChange:ie,options:[{value:"desc",label:"Descending"},{value:"asc",label:"Ascending"}]}),rn.length>0&&a.jsx(sd,{value:fe,onChange:Nt,options:[{value:"",label:"All tags"},...rn.map(I=>({value:I,label:I}))],style:{gridColumn:Pk?"1 / -1":void 0}})]}),oe==="drive"&&a.jsx("div",{className:"filter-chips",children:bg.map(I=>a.jsxs("button",{type:"button",onClick:()=>nn(I.key),className:`filter-chip${ht===I.key?" active":""}`,children:[a.jsx("span",{children:I.icon})," ",I.label]},I.key))}),oe==="drive"&&At&&a.jsxs("div",{className:"new-folder-row",style:{display:"flex",gap:10,marginBottom:20,animation:"fadeIn .2s ease"},children:[a.jsx("input",{className:"input-field",placeholder:"Folder name…",value:he,onChange:I=>ve(I.target.value),onKeyDown:I=>I.key==="Enter"&&om(),style:{width:260},autoFocus:!0}),a.jsx("button",{type:"button",onClick:om,className:"btn-primary",children:"Create"}),a.jsx("button",{type:"button",onClick:()=>$e(!1),className:"btn-secondary",children:"Cancel"})]}),a.jsxs("div",{className:"breadcrumb-row",style:{alignItems:"center",gap:8,marginBottom:20,fontSize:14,color:"var(--text-muted)"},children:[a.jsxs("span",{onClick:()=>sm(-1),className:"breadcrumb-link",style:{color:C?"var(--text-secondary)":"var(--accent)"},children:[Ht.logo," Home"]}),E.map((I,V)=>a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--text-muted)"},children:"›"}),a.jsx("span",{onClick:()=>sm(V),className:"breadcrumb-link",style:{color:V===E.length-1?"var(--accent)":"var(--text-secondary)"},children:I.name})]},I.id))]}),D&&a.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(240,22,58,.24)",animation:"fadeIn .2s ease"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx(Gh,{size:14})," Uploading…"]}),a.jsxs("span",{style:{fontWeight:700,color:"var(--accent)"},children:[$,"%"]})]}),a.jsx(Yh,{value:$})]}),q&&a.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(64,144,255,.3)",animation:"fadeIn .2s ease"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx(Gh,{size:14,color:"var(--accent-blue)"})," Downloading ",q.name,"…"]}),a.jsxs("span",{style:{fontWeight:700,color:"var(--accent-blue)"},children:[q.percent,"%"]})]}),a.jsx(Yh,{value:q.percent})]}),a.jsx("div",{onDragOver:I=>{I.preventDefault(),ut(!0)},onDragLeave:()=>ut(!1),onDrop:Kk,className:`drop-zone${Be?" drag-over":""}`,children:Be?a.jsx("span",{style:{color:"var(--accent)",fontWeight:700,fontSize:16},children:"⬇ Drop files here to upload"}):a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{fontSize:32,marginBottom:8},children:"📤"}),a.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:700,marginBottom:4},children:"Drag & drop files or folders"}),a.jsx("div",{style:{fontSize:13},children:"or use the Upload button above"})]})}),x.length>0&&a.jsxs("div",{style:{marginBottom:28},children:[a.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px",marginBottom:12},children:"FOLDERS"}),a.jsx("div",{className:"folder-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:x.map(I=>a.jsx(ez,{folder:I,onOpen:Yk,onDelete:zk},I.id))})]}),a.jsxs("div",{children:[a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:a.jsxs("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px"},children:["FILES ",aa.length>0&&a.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:500},children:["(",aa.length,")"]})]})}),St?a.jsx(E5,{count:6,grid:dt==="grid"}):aa.length===0?a.jsxs("div",{className:"glass-card empty-state",style:{textAlign:"center",padding:"64px 32px",borderRadius:"16px",background:"var(--bg-card)",border:"1px dashed var(--border)",animation:"fadeIn .3s ease",marginBottom:40},children:[a.jsx("div",{style:{fontWeight:800,fontSize:22,marginBottom:12,color:"var(--text)"},children:ht!=="all"?"No matching files":"No files in My Drive yet"}),a.jsx("div",{style:{fontSize:15,color:"var(--text-muted)",marginBottom:32,maxWidth:420,margin:"0 auto 32px"},children:ht!=="all"?"Try a different filter or upload new files.":"Upload your first file or create a folder to get started"}),ht==="all"&&a.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",marginBottom:48},children:[a.jsx("button",{type:"button",onClick:()=>{var I;return(I=sa.current)==null?void 0:I.click()},style:{background:"#3b82f6",color:"var(--text)",border:"none",borderRadius:8,padding:"12px 24px",fontWeight:600,cursor:"pointer",fontSize:14},children:"Upload a file"}),a.jsx("button",{type:"button",onClick:()=>$e(!0),style:{background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",borderRadius:8,padding:"12px 24px",fontWeight:600,cursor:"pointer",fontSize:14},children:"Upload Folder"})]}),a.jsxs("div",{style:{background:"var(--bg-card)",borderRadius:12,padding:24,textAlign:"left",maxWidth:640,margin:"0 auto"},children:[a.jsx("h4",{style:{margin:"0 0 16px",color:"var(--text)",fontSize:15,display:"flex",alignItems:"center",gap:8},children:"💡 Quick Tips"}),a.jsxs("ul",{style:{margin:0,paddingLeft:20,color:"var(--text-muted)",fontSize:14,display:"flex",flexDirection:"column",gap:12,lineHeight:1.5},children:[a.jsxs("li",{children:[a.jsx("strong",{children:"Drag and drop"})," files anywhere on the page to trigger instant uploads."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Toggle the E2EE switch"})," in the toolbar to encrypt files zero-knowledge."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Hold Ctrl"})," to select multiple files for batch downloads and shares."]})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:`file-grid${dt==="grid"?" grid-view":""}`,style:{display:dt==="grid"?"grid":"flex",gridTemplateColumns:dt==="grid"?"repeat(auto-fill, minmax(250px, 1fr))":void 0,flexDirection:dt==="list"?"column":void 0,gap:dt==="grid"?12:8},children:aa.map(I=>a.jsx(qk,{file:I,token:d,onDelete:Lk,onShare:V=>Qp(V),onPreview:Re,onRename:Ln,onDownload:Nk,onMove:V=>Ro({file:V,mode:"move"}),onCopy:V=>Ro({file:V,mode:"copy"}),onTags:Fc,onEdit:Zp,onPrint:async V=>{try{const J=await ue("/print/from-drive",{method:"POST",body:JSON.stringify({fileId:V.id})});J.success?em({code:J.data.code,expiresAt:J.data.expiresAt,fileName:V.name}):pe(J.error||"Failed to create print code","error")}catch(J){pe(J.message||"Failed to send to print","error")}},onAnnotate:V=>{Re(V)}},I.id))}),ft&&a.jsx("button",{type:"button",onClick:()=>rt(Ur+1,!0),className:"load-more-btn",children:"Load more files"})]})]})]})]}),ye&&a.jsx(jb,{file:ye,token:d,onClose:()=>Re(null)}),Si&&a.jsx(HI,{file:Si.file,mode:Si.mode,folders:I5(pk),currentFolderId:C,onCancel:()=>Ro(null),onConfirm:I=>Si.mode==="move"?Fk(Si.file,I):Bk(Si.file,I)}),Oc&&a.jsx(YI,{file:Oc,allTags:rn,onCancel:()=>Fc(null),onSave:I=>Vk(Oc,I)}),zc&&a.jsx(c5,{file:zc,onCancel:()=>Qp(null),onShare:I=>Ok(zc,I)}),Jp&&a.jsx(x5,{file:Jp,token:d,onClose:()=>Zp(null),onUploadComplete:()=>rt(1,!1)}),oa&&a.jsx(v5,{code:oa.code,expiresAt:oa.expiresAt,fileName:oa.fileName,onClose:()=>em(null)}),Mn&&a.jsx(WL,{title:Mn.title,message:Mn.message,danger:Mn.danger,onConfirm:Mn.onConfirm,onCancel:()=>wt(null)}),ir&&a.jsx($L,{file:ir,onRename:I=>Gk(ir,I),onCancel:()=>Ln(null)}),a.jsx(UL,{jobs:M,history:S}),ne&&a.jsx(VL,{msg:ne.msg,type:ne.type,onClose:()=>_(null)})]})})})}function ZL({appPage:e,setAppPage:t,api:n,notify:r,stats:i,usageDetail:o,adminUsers:s,systemHealth:l,loading:c,onRefreshAccount:u,theme:d,setTheme:h}){const{account:f,refreshAll:p}=Hb();if(!e)return null;const g=()=>t(null);return e==="profile"?a.jsx(b.Suspense,{fallback:a.jsx(Wn,{}),children:a.jsx(ML,{account:f,onBack:g})}):e==="settings"?a.jsx(b.Suspense,{fallback:a.jsx(Wn,{}),children:a.jsx(LL,{account:f,api:n,onBack:g,onUpdated:()=>p(),notify:r,theme:d,onThemeChange:h})}):e==="security"?a.jsx(b.Suspense,{fallback:a.jsx(Wn,{}),children:a.jsx(zL,{api:n,account:f,onBack:g,notify:r})}):e==="billing"?a.jsx(b.Suspense,{fallback:a.jsx(Wn,{}),children:a.jsx(OL,{account:f,api:n,onBack:g,notify:r,onUpdated:()=>p()})}):e==="help"?a.jsx(b.Suspense,{fallback:a.jsx(Wn,{}),children:a.jsx(FL,{onBack:g})}):null}function ez({folder:e,onOpen:t,onDelete:n}){const[r,i]=b.useState(!1);return a.jsxs("div",{className:"folder-card",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>t(e),children:[a.jsx("span",{style:{fontSize:24},children:"📁"}),a.jsx("div",{style:{flex:1,minWidth:0},children:a.jsx("div",{style:{fontWeight:600,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},children:e.name})}),a.jsx("button",{onClick:o=>{o.stopPropagation(),n(e)},style:{background:"none",border:"none",color:"rgba(255,100,100,.3)",cursor:"pointer",fontSize:14,padding:4,borderRadius:6,opacity:r?1:0,transition:"opacity .15s"},children:"🗑"})]})}P1(document.getElementById("root")).render(a.jsx(b.StrictMode,{children:a.jsx(JL,{})}));export{Ht as B,K_ as C,kg as F,Zd as H,vE as M,D1 as S,L1 as U,Gr as a,tE as b,CE as c,st as d,Ce as e,Ys as f,qe as g,a as j,b as r,wo as t};
