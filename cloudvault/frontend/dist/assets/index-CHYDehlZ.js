(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Yd={exports:{}},ms={},Kd={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=Symbol.for("react.element"),Qg=Symbol.for("react.portal"),qg=Symbol.for("react.fragment"),Jg=Symbol.for("react.strict_mode"),Xg=Symbol.for("react.profiler"),Zg=Symbol.for("react.provider"),em=Symbol.for("react.context"),tm=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),rm=Symbol.for("react.memo"),im=Symbol.for("react.lazy"),Jc=Symbol.iterator;function om(e){return e===null||typeof e!="object"?null:(e=Jc&&e[Jc]||e["@@iterator"],typeof e=="function"?e:null)}var Qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qd=Object.assign,Jd={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||Qd}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xd(){}Xd.prototype=Ar.prototype;function Tl(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||Qd}var Nl=Tl.prototype=new Xd;Nl.constructor=Tl;qd(Nl,Ar.prototype);Nl.isPureReactComponent=!0;var Xc=Array.isArray,Zd=Object.prototype.hasOwnProperty,Pl={current:null},ef={key:!0,ref:!0,__self:!0,__source:!0};function tf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Zd.call(t,r)&&!ef.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Di,type:e,key:o,ref:a,props:i,_owner:Pl.current}}function sm(e,t){return{$$typeof:Di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Di}function am(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zc=/\/+/g;function Gs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?am(""+e.key):t.toString(36)}function bo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Di:case Qg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Gs(a,0):r,Xc(i)?(n="",e!=null&&(n=e.replace(Zc,"$&/")+"/"),bo(i,t,n,"",function(u){return u})):i!=null&&(Rl(i)&&(i=sm(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Zc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Xc(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Gs(o,l);a+=bo(o,t,n,c,i)}else if(c=om(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Gs(o,l++),a+=bo(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function eo(e,t,n){if(e==null)return e;var r=[],i=0;return bo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function lm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},ko={transition:null},cm={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:ko,ReactCurrentOwner:Pl};function nf(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:eo,forEach:function(e,t,n){eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eo(e,function(){t++}),t},toArray:function(e){return eo(e,function(t){return t})||[]},only:function(e){if(!Rl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Ar;M.Fragment=qg;M.Profiler=Xg;M.PureComponent=Tl;M.StrictMode=Jg;M.Suspense=nm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cm;M.act=nf;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qd({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Pl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Zd.call(t,c)&&!ef.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Di,type:e.type,key:i,ref:o,props:r,_owner:a}};M.createContext=function(e){return e={$$typeof:em,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zg,_context:e},e.Consumer=e};M.createElement=tf;M.createFactory=function(e){var t=tf.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:tm,render:e}};M.isValidElement=Rl;M.lazy=function(e){return{$$typeof:im,_payload:{_status:-1,_result:e},_init:lm}};M.memo=function(e,t){return{$$typeof:rm,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=ko.transition;ko.transition={};try{e()}finally{ko.transition=t}};M.unstable_act=nf;M.useCallback=function(e,t){return Oe.current.useCallback(e,t)};M.useContext=function(e){return Oe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};M.useEffect=function(e,t){return Oe.current.useEffect(e,t)};M.useId=function(){return Oe.current.useId()};M.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Oe.current.useMemo(e,t)};M.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};M.useRef=function(e){return Oe.current.useRef(e)};M.useState=function(e){return Oe.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return Oe.current.useTransition()};M.version="18.3.1";Kd.exports=M;var m=Kd.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um=m,dm=Symbol.for("react.element"),fm=Symbol.for("react.fragment"),pm=Object.prototype.hasOwnProperty,hm=um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gm={key:!0,ref:!0,__self:!0,__source:!0};function rf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)pm.call(t,r)&&!gm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:dm,type:e,key:o,ref:a,props:i,_owner:hm.current}}ms.Fragment=fm;ms.jsx=rf;ms.jsxs=rf;Yd.exports=ms;var s=Yd.exports,of={exports:{}},He={},sf={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,z){var D=T.length;T.push(z);e:for(;0<D;){var K=D-1>>>1,ne=T[K];if(0<i(ne,z))T[K]=z,T[D]=ne,D=K;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var z=T[0],D=T.pop();if(D!==z){T[0]=D;e:for(var K=0,ne=T.length,Ke=ne>>>1;K<Ke;){var ce=2*(K+1)-1,Et=T[ce],ke=ce+1,ae=T[ke];if(0>i(Et,D))ke<ne&&0>i(ae,Et)?(T[K]=ae,T[ke]=D,K=ke):(T[K]=Et,T[ce]=D,K=ce);else if(ke<ne&&0>i(ae,D))T[K]=ae,T[ke]=D,K=ke;else break e}}return z}function i(T,z){var D=T.sortIndex-z.sortIndex;return D!==0?D:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],p=1,h=null,f=3,b=!1,x=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=T)r(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(u)}}function w(T){if(k=!1,v(T),!x)if(n(c)!==null)x=!0,Le(E);else{var z=n(u);z!==null&&Ye(w,z.startTime-T)}}function E(T,z){x=!1,k&&(k=!1,g(R),R=-1),b=!0;var D=f;try{for(v(z),h=n(c);h!==null&&(!(h.expirationTime>z)||T&&!pe());){var K=h.callback;if(typeof K=="function"){h.callback=null,f=h.priorityLevel;var ne=K(h.expirationTime<=z);z=e.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(c)&&r(c),v(z)}else r(c);h=n(c)}if(h!==null)var Ke=!0;else{var ce=n(u);ce!==null&&Ye(w,ce.startTime-z),Ke=!1}return Ke}finally{h=null,f=D,b=!1}}var C=!1,j=null,R=-1,V=5,N=-1;function pe(){return!(e.unstable_now()-N<V)}function he(){if(j!==null){var T=e.unstable_now();N=T;var z=!0;try{z=j(!0,T)}finally{z?be():(C=!1,j=null)}}else C=!1}var be;if(typeof d=="function")be=function(){d(he)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,Sn=gt.port2;gt.port1.onmessage=he,be=function(){Sn.postMessage(null)}}else be=function(){A(he,0)};function Le(T){j=T,C||(C=!0,be())}function Ye(T,z){R=A(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||b||(x=!0,Le(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var D=f;f=z;try{return T()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=f;f=T;try{return z()}finally{f=D}},e.unstable_scheduleCallback=function(T,z,D){var K=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?K+D:K):D=K,T){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=D+ne,T={id:p++,callback:z,priorityLevel:T,startTime:D,expirationTime:ne,sortIndex:-1},D>K?(T.sortIndex=D,t(u,T),n(c)===null&&T===n(u)&&(k?(g(R),R=-1):k=!0,Ye(w,D-K))):(T.sortIndex=ne,t(c,T),x||b||(x=!0,Le(E))),T},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(T){var z=f;return function(){var D=f;f=z;try{return T.apply(this,arguments)}finally{f=D}}}})(af);sf.exports=af;var mm=sf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm=m,Ve=mm;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lf=new Set,vi={};function Gn(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(vi[e]=t,e=0;e<t.length;e++)lf.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eu={},tu={};function xm(e){return ja.call(tu,e)?!0:ja.call(eu,e)?!1:ym.test(e)?tu[e]=!0:(eu[e]=!0,!1)}function wm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bm(e,t,n,r){if(t===null||typeof t>"u"||wm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ol=/[\-:]([a-z])/g;function Al(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ol,Al);we[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ol,Al);we[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ol,Al);we[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ll(e,t,n,r){var i=we.hasOwnProperty(t)?we[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bm(t,n,i,r)&&(n=null),r||i===null?xm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),nr=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),zl=Symbol.for("react.strict_mode"),Ta=Symbol.for("react.profiler"),cf=Symbol.for("react.provider"),uf=Symbol.for("react.context"),Dl=Symbol.for("react.forward_ref"),Na=Symbol.for("react.suspense"),Pa=Symbol.for("react.suspense_list"),Ml=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),df=Symbol.for("react.offscreen"),nu=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Ys;function ti(e){if(Ys===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ys=t&&t[1]||""}return`
`+Ys+e}var Ks=!1;function Qs(e,t){if(!e||Ks)return"";Ks=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Ks=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ti(e):""}function km(e){switch(e.tag){case 5:return ti(e.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return e=Qs(e.type,!1),e;case 11:return e=Qs(e.type.render,!1),e;case 1:return e=Qs(e.type,!0),e;default:return""}}function Ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rr:return"Fragment";case nr:return"Portal";case Ta:return"Profiler";case zl:return"StrictMode";case Na:return"Suspense";case Pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uf:return(e.displayName||"Context")+".Consumer";case cf:return(e._context.displayName||"Context")+".Provider";case Dl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ml:return t=e.displayName||null,t!==null?t:Ra(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return Ra(e(t))}catch{}}return null}function Sm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ra(t);case 8:return t===zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _m(e){var t=ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function no(e){e._valueTracker||(e._valueTracker=_m(e))}function pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ff(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oa(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ru(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hf(e,t){t=t.checked,t!=null&&Ll(e,"checked",t,!1)}function Aa(e,t){hf(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?La(e,t.type,n):t.hasOwnProperty("defaultValue")&&La(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function La(e,t,n){(t!=="number"||Mo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ni=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function za(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(ni(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function gf(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Da(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Em=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(e){Em.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oi[t]=oi[e]})});function yf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oi.hasOwnProperty(e)&&oi[e]?(""+t).trim():t+"px"}function xf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Cm=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ma(e,t){if(t){if(Cm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Fa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ua=null;function Fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ba=null,gr=null,mr=null;function au(e){if(e=Ui(e)){if(typeof Ba!="function")throw Error(_(280));var t=e.stateNode;t&&(t=bs(t),Ba(e.stateNode,e.type,t))}}function wf(e){gr?mr?mr.push(e):mr=[e]:gr=e}function bf(){if(gr){var e=gr,t=mr;if(mr=gr=null,au(e),t)for(e=0;e<t.length;e++)au(t[e])}}function kf(e,t){return e(t)}function Sf(){}var qs=!1;function _f(e,t,n){if(qs)return e(t,n);qs=!0;try{return kf(e,t,n)}finally{qs=!1,(gr!==null||mr!==null)&&(Sf(),bf())}}function xi(e,t){var n=e.stateNode;if(n===null)return null;var r=bs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Wa=!1;if(Ft)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Wa=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Wa=!1}function Im(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var si=!1,Fo=null,Uo=!1,$a=null,jm={onError:function(e){si=!0,Fo=e}};function Tm(e,t,n,r,i,o,a,l,c){si=!1,Fo=null,Im.apply(jm,arguments)}function Nm(e,t,n,r,i,o,a,l,c){if(Tm.apply(this,arguments),si){if(si){var u=Fo;si=!1,Fo=null}else throw Error(_(198));Uo||(Uo=!0,$a=u)}}function Yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ef(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lu(e){if(Yn(e)!==e)throw Error(_(188))}function Pm(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return lu(i),e;if(o===r)return lu(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Cf(e){return e=Pm(e),e!==null?If(e):null}function If(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=If(e);if(t!==null)return t;e=e.sibling}return null}var jf=Ve.unstable_scheduleCallback,cu=Ve.unstable_cancelCallback,Rm=Ve.unstable_shouldYield,Om=Ve.unstable_requestPaint,le=Ve.unstable_now,Am=Ve.unstable_getCurrentPriorityLevel,Ul=Ve.unstable_ImmediatePriority,Tf=Ve.unstable_UserBlockingPriority,Bo=Ve.unstable_NormalPriority,Lm=Ve.unstable_LowPriority,Nf=Ve.unstable_IdlePriority,vs=null,wt=null;function zm(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(vs,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Fm,Dm=Math.log,Mm=Math.LN2;function Fm(e){return e>>>=0,e===0?32:31-(Dm(e)/Mm|0)|0}var io=64,oo=4194304;function ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ri(l):(o&=a,o!==0&&(r=ri(o)))}else a=n&~i,a!==0?r=ri(a):o!==0&&(r=ri(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function Um(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-dt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=Um(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pf(){var e=io;return io<<=1,!(io&4194240)&&(io=64),e}function Js(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Wm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Bl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function Rf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Of,Wl,Af,Lf,zf,Ha=!1,so=[],an=null,ln=null,cn=null,wi=new Map,bi=new Map,Zt=[],$m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uu(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(t.pointerId)}}function Gr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ui(t),t!==null&&Wl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vm(e,t,n,r,i){switch(t){case"focusin":return an=Gr(an,e,t,n,r,i),!0;case"dragenter":return ln=Gr(ln,e,t,n,r,i),!0;case"mouseover":return cn=Gr(cn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return wi.set(o,Gr(wi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,bi.set(o,Gr(bi.get(o)||null,e,t,n,r,i)),!0}return!1}function Df(e){var t=On(e.target);if(t!==null){var n=Yn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ef(n),t!==null){e.blockedOn=t,zf(e.priority,function(){Af(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ua=r,n.target.dispatchEvent(r),Ua=null}else return t=Ui(n),t!==null&&Wl(t),e.blockedOn=n,!1;t.shift()}return!0}function du(e,t,n){So(e)&&n.delete(t)}function Hm(){Ha=!1,an!==null&&So(an)&&(an=null),ln!==null&&So(ln)&&(ln=null),cn!==null&&So(cn)&&(cn=null),wi.forEach(du),bi.forEach(du)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ha||(Ha=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Hm)))}function ki(e){function t(i){return Yr(i,e)}if(0<so.length){Yr(so[0],e);for(var n=1;n<so.length;n++){var r=so[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Yr(an,e),ln!==null&&Yr(ln,e),cn!==null&&Yr(cn,e),wi.forEach(t),bi.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)Df(n),n.blockedOn===null&&Zt.shift()}var vr=Gt.ReactCurrentBatchConfig,$o=!0;function Gm(e,t,n,r){var i=q,o=vr.transition;vr.transition=null;try{q=1,$l(e,t,n,r)}finally{q=i,vr.transition=o}}function Ym(e,t,n,r){var i=q,o=vr.transition;vr.transition=null;try{q=4,$l(e,t,n,r)}finally{q=i,vr.transition=o}}function $l(e,t,n,r){if($o){var i=Ga(e,t,n,r);if(i===null)aa(e,t,r,Vo,n),uu(e,r);else if(Vm(i,e,t,n,r))r.stopPropagation();else if(uu(e,r),t&4&&-1<$m.indexOf(e)){for(;i!==null;){var o=Ui(i);if(o!==null&&Of(o),o=Ga(e,t,n,r),o===null&&aa(e,t,r,Vo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else aa(e,t,r,null,n)}}var Vo=null;function Ga(e,t,n,r){if(Vo=null,e=Fl(r),e=On(e),e!==null)if(t=Yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ef(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vo=e,null}function Mf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Am()){case Ul:return 1;case Tf:return 4;case Bo:case Lm:return 16;case Nf:return 536870912;default:return 16}default:return 16}}var rn=null,Vl=null,_o=null;function Ff(){if(_o)return _o;var e,t=Vl,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return _o=i.slice(e,1<r?1-r:void 0)}function Eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function fu(){return!1}function Ge(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ao:fu,this.isPropagationStopped=fu,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Ge(Lr),Fi=oe({},Lr,{view:0,detail:0}),Km=Ge(Fi),Xs,Zs,Kr,ys=oe({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(Xs=e.screenX-Kr.screenX,Zs=e.screenY-Kr.screenY):Zs=Xs=0,Kr=e),Xs)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),pu=Ge(ys),Qm=oe({},ys,{dataTransfer:0}),qm=Ge(Qm),Jm=oe({},Fi,{relatedTarget:0}),ea=Ge(Jm),Xm=oe({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zm=Ge(Xm),ev=oe({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tv=Ge(ev),nv=oe({},Lr,{data:0}),hu=Ge(nv),rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ov[e])?!!t[e]:!1}function Gl(){return sv}var av=oe({},Fi,{key:function(e){if(e.key){var t=rv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(e){return e.type==="keypress"?Eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lv=Ge(av),cv=oe({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=Ge(cv),uv=oe({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),dv=Ge(uv),fv=oe({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),pv=Ge(fv),hv=oe({},ys,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gv=Ge(hv),mv=[9,13,27,32],Yl=Ft&&"CompositionEvent"in window,ai=null;Ft&&"documentMode"in document&&(ai=document.documentMode);var vv=Ft&&"TextEvent"in window&&!ai,Uf=Ft&&(!Yl||ai&&8<ai&&11>=ai),mu=" ",vu=!1;function Bf(e,t){switch(e){case"keyup":return mv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function yv(e,t){switch(e){case"compositionend":return Wf(t);case"keypress":return t.which!==32?null:(vu=!0,mu);case"textInput":return e=t.data,e===mu&&vu?null:e;default:return null}}function xv(e,t){if(ir)return e==="compositionend"||!Yl&&Bf(e,t)?(e=Ff(),_o=Vl=rn=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uf&&t.locale!=="ko"?null:t.data;default:return null}}var wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wv[e.type]:t==="textarea"}function $f(e,t,n,r){wf(r),t=Ho(t,"onChange"),0<t.length&&(n=new Hl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var li=null,Si=null;function bv(e){ep(e,0)}function xs(e){var t=ar(e);if(pf(t))return e}function kv(e,t){if(e==="change")return t}var Vf=!1;if(Ft){var ta;if(Ft){var na="oninput"in document;if(!na){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),na=typeof xu.oninput=="function"}ta=na}else ta=!1;Vf=ta&&(!document.documentMode||9<document.documentMode)}function wu(){li&&(li.detachEvent("onpropertychange",Hf),Si=li=null)}function Hf(e){if(e.propertyName==="value"&&xs(Si)){var t=[];$f(t,Si,e,Fl(e)),_f(bv,t)}}function Sv(e,t,n){e==="focusin"?(wu(),li=t,Si=n,li.attachEvent("onpropertychange",Hf)):e==="focusout"&&wu()}function _v(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xs(Si)}function Ev(e,t){if(e==="click")return xs(t)}function Cv(e,t){if(e==="input"||e==="change")return xs(t)}function Iv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Iv;function _i(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ja.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var n=bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bu(n)}}function Gf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yf(){for(var e=window,t=Mo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mo(e.document)}return t}function Kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jv(e){var t=Yf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gf(n.ownerDocument.documentElement,n)){if(r!==null&&Kl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ku(n,o);var a=ku(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tv=Ft&&"documentMode"in document&&11>=document.documentMode,or=null,Ya=null,ci=null,Ka=!1;function Su(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ka||or==null||or!==Mo(r)||(r=or,"selectionStart"in r&&Kl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ci&&_i(ci,r)||(ci=r,r=Ho(Ya,"onSelect"),0<r.length&&(t=new Hl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},ra={},Kf={};Ft&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function ws(e){if(ra[e])return ra[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kf)return ra[e]=t[n];return e}var Qf=ws("animationend"),qf=ws("animationiteration"),Jf=ws("animationstart"),Xf=ws("transitionend"),Zf=new Map,_u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){Zf.set(e,t),Gn(t,[e])}for(var ia=0;ia<_u.length;ia++){var oa=_u[ia],Nv=oa.toLowerCase(),Pv=oa[0].toUpperCase()+oa.slice(1);xn(Nv,"on"+Pv)}xn(Qf,"onAnimationEnd");xn(qf,"onAnimationIteration");xn(Jf,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Xf,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function Eu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nm(r,t,void 0,e),e.currentTarget=null}function ep(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Eu(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Eu(i,l,u),o=c}}}if(Uo)throw e=$a,Uo=!1,$a=null,e}function Z(e,t){var n=t[Za];n===void 0&&(n=t[Za]=new Set);var r=e+"__bubble";n.has(r)||(tp(t,e,2,!1),n.add(r))}function sa(e,t,n){var r=0;t&&(r|=4),tp(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Ei(e){if(!e[co]){e[co]=!0,lf.forEach(function(n){n!=="selectionchange"&&(Rv.has(n)||sa(n,!1,e),sa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,sa("selectionchange",!1,t))}}function tp(e,t,n,r){switch(Mf(t)){case 1:var i=Gm;break;case 4:i=Ym;break;default:i=$l}n=i.bind(null,t,n,e),i=void 0,!Wa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function aa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=On(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}_f(function(){var u=o,p=Fl(n),h=[];e:{var f=Zf.get(e);if(f!==void 0){var b=Hl,x=e;switch(e){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":b=lv;break;case"focusin":x="focus",b=ea;break;case"focusout":x="blur",b=ea;break;case"beforeblur":case"afterblur":b=ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=dv;break;case Qf:case qf:case Jf:b=Zm;break;case Xf:b=pv;break;case"scroll":b=Km;break;case"wheel":b=gv;break;case"copy":case"cut":case"paste":b=tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=gu}var k=(t&4)!==0,A=!k&&e==="scroll",g=k?f!==null?f+"Capture":null:f;k=[];for(var d=u,v;d!==null;){v=d;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,g!==null&&(w=xi(d,g),w!=null&&k.push(Ci(d,w,v)))),A)break;d=d.return}0<k.length&&(f=new b(f,x,null,n,p),h.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&n!==Ua&&(x=n.relatedTarget||n.fromElement)&&(On(x)||x[Ut]))break e;if((b||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,b?(x=n.relatedTarget||n.toElement,b=u,x=x?On(x):null,x!==null&&(A=Yn(x),x!==A||x.tag!==5&&x.tag!==6)&&(x=null)):(b=null,x=u),b!==x)){if(k=pu,w="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=gu,w="onPointerLeave",g="onPointerEnter",d="pointer"),A=b==null?f:ar(b),v=x==null?f:ar(x),f=new k(w,d+"leave",b,n,p),f.target=A,f.relatedTarget=v,w=null,On(p)===u&&(k=new k(g,d+"enter",x,n,p),k.target=v,k.relatedTarget=A,w=k),A=w,b&&x)t:{for(k=b,g=x,d=0,v=k;v;v=Zn(v))d++;for(v=0,w=g;w;w=Zn(w))v++;for(;0<d-v;)k=Zn(k),d--;for(;0<v-d;)g=Zn(g),v--;for(;d--;){if(k===g||g!==null&&k===g.alternate)break t;k=Zn(k),g=Zn(g)}k=null}else k=null;b!==null&&Cu(h,f,b,k,!1),x!==null&&A!==null&&Cu(h,A,x,k,!0)}}e:{if(f=u?ar(u):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var E=kv;else if(yu(f))if(Vf)E=Cv;else{E=_v;var C=Sv}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=Ev);if(E&&(E=E(e,u))){$f(h,E,n,p);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&La(f,"number",f.value)}switch(C=u?ar(u):window,e){case"focusin":(yu(C)||C.contentEditable==="true")&&(or=C,Ya=u,ci=null);break;case"focusout":ci=Ya=or=null;break;case"mousedown":Ka=!0;break;case"contextmenu":case"mouseup":case"dragend":Ka=!1,Su(h,n,p);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":Su(h,n,p)}var j;if(Yl)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ir?Bf(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Uf&&n.locale!=="ko"&&(ir||R!=="onCompositionStart"?R==="onCompositionEnd"&&ir&&(j=Ff()):(rn=p,Vl="value"in rn?rn.value:rn.textContent,ir=!0)),C=Ho(u,R),0<C.length&&(R=new hu(R,e,null,n,p),h.push({event:R,listeners:C}),j?R.data=j:(j=Wf(n),j!==null&&(R.data=j)))),(j=vv?yv(e,n):xv(e,n))&&(u=Ho(u,"onBeforeInput"),0<u.length&&(p=new hu("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=j))}ep(h,t)})}function Ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=xi(e,n),o!=null&&r.unshift(Ci(e,o,i)),o=xi(e,t),o!=null&&r.push(Ci(e,o,i))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cu(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=xi(n,o),c!=null&&a.unshift(Ci(n,c,l))):i||(c=xi(n,o),c!=null&&a.push(Ci(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ov=/\r\n?/g,Av=/\u0000|\uFFFD/g;function Iu(e){return(typeof e=="string"?e:""+e).replace(Ov,`
`).replace(Av,"")}function uo(e,t,n){if(t=Iu(t),Iu(e)!==t&&n)throw Error(_(425))}function Go(){}var Qa=null,qa=null;function Ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xa=typeof setTimeout=="function"?setTimeout:void 0,Lv=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,zv=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(Dv)}:Xa;function Dv(e){setTimeout(function(){throw e})}function la(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ki(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ki(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),yt="__reactFiber$"+zr,Ii="__reactProps$"+zr,Ut="__reactContainer$"+zr,Za="__reactEvents$"+zr,Mv="__reactListeners$"+zr,Fv="__reactHandles$"+zr;function On(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tu(e);e!==null;){if(n=e[yt])return n;e=Tu(e)}return t}e=n,n=e.parentNode}return null}function Ui(e){return e=e[yt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function bs(e){return e[Ii]||null}var el=[],lr=-1;function wn(e){return{current:e}}function ee(e){0>lr||(e.current=el[lr],el[lr]=null,lr--)}function X(e,t){lr++,el[lr]=e.current,e.current=t}var yn={},Ce=wn(yn),Me=wn(!1),Bn=yn;function Er(e,t){var n=e.type.contextTypes;if(!n)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function Yo(){ee(Me),ee(Ce)}function Nu(e,t,n){if(Ce.current!==yn)throw Error(_(168));X(Ce,t),X(Me,n)}function np(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,Sm(e)||"Unknown",i));return oe({},n,r)}function Ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Bn=Ce.current,X(Ce,e),X(Me,Me.current),!0}function Pu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=np(e,t,Bn),r.__reactInternalMemoizedMergedChildContext=e,ee(Me),ee(Ce),X(Ce,e)):ee(Me),X(Me,n)}var Nt=null,ks=!1,ca=!1;function rp(e){Nt===null?Nt=[e]:Nt.push(e)}function Uv(e){ks=!0,rp(e)}function bn(){if(!ca&&Nt!==null){ca=!0;var e=0,t=q;try{var n=Nt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,ks=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(e+1)),jf(Ul,bn),i}finally{q=t,ca=!1}}return null}var cr=[],ur=0,Qo=null,qo=0,Je=[],Xe=0,Wn=null,At=1,Lt="";function Nn(e,t){cr[ur++]=qo,cr[ur++]=Qo,Qo=e,qo=t}function ip(e,t,n){Je[Xe++]=At,Je[Xe++]=Lt,Je[Xe++]=Wn,Wn=e;var r=At;e=Lt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,At=1<<32-dt(t)+i|n<<i|r,Lt=o+e}else At=1<<o|n<<i|r,Lt=e}function Ql(e){e.return!==null&&(Nn(e,1),ip(e,1,0))}function ql(e){for(;e===Qo;)Qo=cr[--ur],cr[ur]=null,qo=cr[--ur],cr[ur]=null;for(;e===Wn;)Wn=Je[--Xe],Je[Xe]=null,Lt=Je[--Xe],Je[Xe]=null,At=Je[--Xe],Je[Xe]=null}var $e=null,We=null,te=!1,ct=null;function op(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ru(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,We=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wn!==null?{id:At,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,We=null,!0):!1;default:return!1}}function tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nl(e){if(te){var t=We;if(t){var n=t;if(!Ru(e,t)){if(tl(e))throw Error(_(418));t=un(n.nextSibling);var r=$e;t&&Ru(e,t)?op(r,n):(e.flags=e.flags&-4097|2,te=!1,$e=e)}}else{if(tl(e))throw Error(_(418));e.flags=e.flags&-4097|2,te=!1,$e=e}}}function Ou(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function fo(e){if(e!==$e)return!1;if(!te)return Ou(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ja(e.type,e.memoizedProps)),t&&(t=We)){if(tl(e))throw sp(),Error(_(418));for(;t;)op(e,t),t=un(t.nextSibling)}if(Ou(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=$e?un(e.stateNode.nextSibling):null;return!0}function sp(){for(var e=We;e;)e=un(e.nextSibling)}function Cr(){We=$e=null,te=!1}function Jl(e){ct===null?ct=[e]:ct.push(e)}var Bv=Gt.ReactCurrentBatchConfig;function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Au(e){var t=e._init;return t(e._payload)}function ap(e){function t(g,d){if(e){var v=g.deletions;v===null?(g.deletions=[d],g.flags|=16):v.push(d)}}function n(g,d){if(!e)return null;for(;d!==null;)t(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function i(g,d){return g=hn(g,d),g.index=0,g.sibling=null,g}function o(g,d,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<d?(g.flags|=2,d):v):(g.flags|=2,d)):(g.flags|=1048576,d)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,d,v,w){return d===null||d.tag!==6?(d=ma(v,g.mode,w),d.return=g,d):(d=i(d,v),d.return=g,d)}function c(g,d,v,w){var E=v.type;return E===rr?p(g,d,v.props.children,w,v.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Jt&&Au(E)===d.type)?(w=i(d,v.props),w.ref=Qr(g,d,v),w.return=g,w):(w=Ro(v.type,v.key,v.props,null,g.mode,w),w.ref=Qr(g,d,v),w.return=g,w)}function u(g,d,v,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=va(v,g.mode,w),d.return=g,d):(d=i(d,v.children||[]),d.return=g,d)}function p(g,d,v,w,E){return d===null||d.tag!==7?(d=Mn(v,g.mode,w,E),d.return=g,d):(d=i(d,v),d.return=g,d)}function h(g,d,v){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ma(""+d,g.mode,v),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case to:return v=Ro(d.type,d.key,d.props,null,g.mode,v),v.ref=Qr(g,null,d),v.return=g,v;case nr:return d=va(d,g.mode,v),d.return=g,d;case Jt:var w=d._init;return h(g,w(d._payload),v)}if(ni(d)||Vr(d))return d=Mn(d,g.mode,v,null),d.return=g,d;po(g,d)}return null}function f(g,d,v,w){var E=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:l(g,d,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case to:return v.key===E?c(g,d,v,w):null;case nr:return v.key===E?u(g,d,v,w):null;case Jt:return E=v._init,f(g,d,E(v._payload),w)}if(ni(v)||Vr(v))return E!==null?null:p(g,d,v,w,null);po(g,v)}return null}function b(g,d,v,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(v)||null,l(d,g,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case to:return g=g.get(w.key===null?v:w.key)||null,c(d,g,w,E);case nr:return g=g.get(w.key===null?v:w.key)||null,u(d,g,w,E);case Jt:var C=w._init;return b(g,d,v,C(w._payload),E)}if(ni(w)||Vr(w))return g=g.get(v)||null,p(d,g,w,E,null);po(d,w)}return null}function x(g,d,v,w){for(var E=null,C=null,j=d,R=d=0,V=null;j!==null&&R<v.length;R++){j.index>R?(V=j,j=null):V=j.sibling;var N=f(g,j,v[R],w);if(N===null){j===null&&(j=V);break}e&&j&&N.alternate===null&&t(g,j),d=o(N,d,R),C===null?E=N:C.sibling=N,C=N,j=V}if(R===v.length)return n(g,j),te&&Nn(g,R),E;if(j===null){for(;R<v.length;R++)j=h(g,v[R],w),j!==null&&(d=o(j,d,R),C===null?E=j:C.sibling=j,C=j);return te&&Nn(g,R),E}for(j=r(g,j);R<v.length;R++)V=b(j,g,R,v[R],w),V!==null&&(e&&V.alternate!==null&&j.delete(V.key===null?R:V.key),d=o(V,d,R),C===null?E=V:C.sibling=V,C=V);return e&&j.forEach(function(pe){return t(g,pe)}),te&&Nn(g,R),E}function k(g,d,v,w){var E=Vr(v);if(typeof E!="function")throw Error(_(150));if(v=E.call(v),v==null)throw Error(_(151));for(var C=E=null,j=d,R=d=0,V=null,N=v.next();j!==null&&!N.done;R++,N=v.next()){j.index>R?(V=j,j=null):V=j.sibling;var pe=f(g,j,N.value,w);if(pe===null){j===null&&(j=V);break}e&&j&&pe.alternate===null&&t(g,j),d=o(pe,d,R),C===null?E=pe:C.sibling=pe,C=pe,j=V}if(N.done)return n(g,j),te&&Nn(g,R),E;if(j===null){for(;!N.done;R++,N=v.next())N=h(g,N.value,w),N!==null&&(d=o(N,d,R),C===null?E=N:C.sibling=N,C=N);return te&&Nn(g,R),E}for(j=r(g,j);!N.done;R++,N=v.next())N=b(j,g,R,N.value,w),N!==null&&(e&&N.alternate!==null&&j.delete(N.key===null?R:N.key),d=o(N,d,R),C===null?E=N:C.sibling=N,C=N);return e&&j.forEach(function(he){return t(g,he)}),te&&Nn(g,R),E}function A(g,d,v,w){if(typeof v=="object"&&v!==null&&v.type===rr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case to:e:{for(var E=v.key,C=d;C!==null;){if(C.key===E){if(E=v.type,E===rr){if(C.tag===7){n(g,C.sibling),d=i(C,v.props.children),d.return=g,g=d;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Jt&&Au(E)===C.type){n(g,C.sibling),d=i(C,v.props),d.ref=Qr(g,C,v),d.return=g,g=d;break e}n(g,C);break}else t(g,C);C=C.sibling}v.type===rr?(d=Mn(v.props.children,g.mode,w,v.key),d.return=g,g=d):(w=Ro(v.type,v.key,v.props,null,g.mode,w),w.ref=Qr(g,d,v),w.return=g,g=w)}return a(g);case nr:e:{for(C=v.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(g,d.sibling),d=i(d,v.children||[]),d.return=g,g=d;break e}else{n(g,d);break}else t(g,d);d=d.sibling}d=va(v,g.mode,w),d.return=g,g=d}return a(g);case Jt:return C=v._init,A(g,d,C(v._payload),w)}if(ni(v))return x(g,d,v,w);if(Vr(v))return k(g,d,v,w);po(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,d!==null&&d.tag===6?(n(g,d.sibling),d=i(d,v),d.return=g,g=d):(n(g,d),d=ma(v,g.mode,w),d.return=g,g=d),a(g)):n(g,d)}return A}var Ir=ap(!0),lp=ap(!1),Jo=wn(null),Xo=null,dr=null,Xl=null;function Zl(){Xl=dr=Xo=null}function ec(e){var t=Jo.current;ee(Jo),e._currentValue=t}function rl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yr(e,t){Xo=e,Xl=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(Xl!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(Xo===null)throw Error(_(308));dr=e,Xo.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var An=null;function tc(e){An===null?An=[e]:An.push(e)}function cp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,tc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function up(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bt(e,n)}return i=r.interleaved,i===null?(t.next=t,tc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bt(e,n)}function Co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bl(e,n)}}function Lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zo(e,t,n,r){var i=e.updateQueue;Xt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;a=0,p=u=c=null,l=o;do{var f=l.lane,b=l.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,k=l;switch(f=t,b=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){h=x.call(b,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,f=typeof x=="function"?x.call(b,h,f):x,f==null)break e;h=oe({},h,f);break e;case 2:Xt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else b={eventTime:b,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=b,c=h):p=p.next=b,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(p===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Vn|=a,e.lanes=a,e.memoizedState=h}}function zu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Bi={},bt=wn(Bi),ji=wn(Bi),Ti=wn(Bi);function Ln(e){if(e===Bi)throw Error(_(174));return e}function rc(e,t){switch(X(Ti,t),X(ji,e),X(bt,Bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Da(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Da(t,e)}ee(bt),X(bt,t)}function jr(){ee(bt),ee(ji),ee(Ti)}function dp(e){Ln(Ti.current);var t=Ln(bt.current),n=Da(t,e.type);t!==n&&(X(ji,e),X(bt,n))}function ic(e){ji.current===e&&(ee(bt),ee(ji))}var re=wn(0);function es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ua=[];function oc(){for(var e=0;e<ua.length;e++)ua[e]._workInProgressVersionPrimary=null;ua.length=0}var Io=Gt.ReactCurrentDispatcher,da=Gt.ReactCurrentBatchConfig,$n=0,ie=null,de=null,me=null,ts=!1,ui=!1,Ni=0,Wv=0;function Se(){throw Error(_(321))}function sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function ac(e,t,n,r,i,o){if($n=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Io.current=e===null||e.memoizedState===null?Gv:Yv,e=n(r,i),ui){o=0;do{if(ui=!1,Ni=0,25<=o)throw Error(_(301));o+=1,me=de=null,t.updateQueue=null,Io.current=Kv,e=n(r,i)}while(ui)}if(Io.current=ns,t=de!==null&&de.next!==null,$n=0,me=de=ie=null,ts=!1,t)throw Error(_(300));return e}function lc(){var e=Ni!==0;return Ni=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ie.memoizedState=me=e:me=me.next=e,me}function nt(){if(de===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=me===null?ie.memoizedState:me.next;if(t!==null)me=t,de=e;else{if(e===null)throw Error(_(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},me===null?ie.memoizedState=me=e:me=me.next=e}return me}function Pi(e,t){return typeof t=="function"?t(e):t}function fa(e){var t=nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=de,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var p=u.lane;if(($n&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,a=r):c=c.next=h,ie.lanes|=p,Vn|=p}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,ht(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,Vn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pa(e){var t=nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);ht(o,t.memoizedState)||(De=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fp(){}function pp(e,t){var n=ie,r=nt(),i=t(),o=!ht(r.memoizedState,i);if(o&&(r.memoizedState=i,De=!0),r=r.queue,cc(mp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Ri(9,gp.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(_(349));$n&30||hp(n,t,i)}return i}function hp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gp(e,t,n,r){t.value=n,t.getSnapshot=r,vp(t)&&yp(e)}function mp(e,t,n){return n(function(){vp(t)&&yp(e)})}function vp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function yp(e){var t=Bt(e,1);t!==null&&ft(t,e,1,-1)}function Du(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},t.queue=e,e=e.dispatch=Hv.bind(null,ie,e),[t.memoizedState,e]}function Ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xp(){return nt().memoizedState}function jo(e,t,n,r){var i=vt();ie.flags|=e,i.memoizedState=Ri(1|t,n,void 0,r===void 0?null:r)}function Ss(e,t,n,r){var i=nt();r=r===void 0?null:r;var o=void 0;if(de!==null){var a=de.memoizedState;if(o=a.destroy,r!==null&&sc(r,a.deps)){i.memoizedState=Ri(t,n,o,r);return}}ie.flags|=e,i.memoizedState=Ri(1|t,n,o,r)}function Mu(e,t){return jo(8390656,8,e,t)}function cc(e,t){return Ss(2048,8,e,t)}function wp(e,t){return Ss(4,2,e,t)}function bp(e,t){return Ss(4,4,e,t)}function kp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sp(e,t,n){return n=n!=null?n.concat([e]):null,Ss(4,4,kp.bind(null,t,e),n)}function uc(){}function _p(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ep(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cp(e,t,n){return $n&21?(ht(n,t)||(n=Pf(),ie.lanes|=n,Vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function $v(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=da.transition;da.transition={};try{e(!1),t()}finally{q=n,da.transition=r}}function Ip(){return nt().memoizedState}function Vv(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jp(e))Tp(t,n);else if(n=cp(e,t,n,r),n!==null){var i=Pe();ft(n,e,r,i),Np(n,t,r)}}function Hv(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jp(e))Tp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,ht(l,a)){var c=t.interleaved;c===null?(i.next=i,tc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=cp(e,t,i,r),n!==null&&(i=Pe(),ft(n,e,r,i),Np(n,t,r))}}function jp(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Tp(e,t){ui=ts=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Np(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bl(e,n)}}var ns={readContext:tt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Gv={readContext:tt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Mu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jo(4194308,4,kp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return jo(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vv.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Du,useDebugValue:uc,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Du(!1),t=e[0];return e=$v.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=vt();if(te){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ve===null)throw Error(_(349));$n&30||hp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Mu(mp.bind(null,r,o,e),[e]),r.flags|=2048,Ri(9,gp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vt(),t=ve.identifierPrefix;if(te){var n=Lt,r=At;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yv={readContext:tt,useCallback:_p,useContext:tt,useEffect:cc,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:bp,useMemo:Ep,useReducer:fa,useRef:xp,useState:function(){return fa(Pi)},useDebugValue:uc,useDeferredValue:function(e){var t=nt();return Cp(t,de.memoizedState,e)},useTransition:function(){var e=fa(Pi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:pp,useId:Ip,unstable_isNewReconciler:!1},Kv={readContext:tt,useCallback:_p,useContext:tt,useEffect:cc,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:bp,useMemo:Ep,useReducer:pa,useRef:xp,useState:function(){return pa(Pi)},useDebugValue:uc,useDeferredValue:function(e){var t=nt();return de===null?t.memoizedState=e:Cp(t,de.memoizedState,e)},useTransition:function(){var e=pa(Pi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:pp,useId:Ip,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function il(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _s={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=pn(e),o=Mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(ft(t,e,i,r),Co(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=pn(e),o=Mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(ft(t,e,i,r),Co(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=pn(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=dn(e,i,r),t!==null&&(ft(t,e,r,n),Co(t,e,r))}};function Fu(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!_i(n,r)||!_i(i,o):!0}function Pp(e,t,n){var r=!1,i=yn,o=t.contextType;return typeof o=="object"&&o!==null?o=tt(o):(i=Fe(t)?Bn:Ce.current,r=t.contextTypes,o=(r=r!=null)?Er(e,i):yn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_s,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Uu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_s.enqueueReplaceState(t,t.state,null)}function ol(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},nc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=tt(o):(o=Fe(t)?Bn:Ce.current,i.context=Er(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(il(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_s.enqueueReplaceState(i,i.state,null),Zo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Tr(e,t){try{var n="",r=t;do n+=km(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ha(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qv=typeof WeakMap=="function"?WeakMap:Map;function Rp(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){is||(is=!0,ml=r),sl(e,t)},n}function Op(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){sl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){sl(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=c0.bind(null,e,t,n),t.then(e,e))}function Wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $u(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var qv=Gt.ReactCurrentOwner,De=!1;function Te(e,t,n,r){t.child=e===null?lp(t,null,n,r):Ir(t,e.child,n,r)}function Vu(e,t,n,r,i){n=n.render;var o=t.ref;return yr(t,i),r=ac(e,t,n,r,o,i),n=lc(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(te&&n&&Ql(t),t.flags|=1,Te(e,t,r,i),t.child)}function Hu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!yc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ap(e,t,o,r,i)):(e=Ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:_i,n(a,r)&&e.ref===t.ref)return Wt(e,t,i)}return t.flags|=1,e=hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ap(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(_i(o,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Wt(e,t,i)}return al(e,t,n,r,i)}function Lp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(pr,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(pr,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(pr,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(pr,Be),Be|=r;return Te(e,t,i,n),t.child}function zp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function al(e,t,n,r,i){var o=Fe(n)?Bn:Ce.current;return o=Er(t,o),yr(t,i),n=ac(e,t,n,r,o,i),r=lc(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(te&&r&&Ql(t),t.flags|=1,Te(e,t,n,i),t.child)}function Gu(e,t,n,r,i){if(Fe(n)){var o=!0;Ko(t)}else o=!1;if(yr(t,i),t.stateNode===null)To(e,t),Pp(t,n,r),ol(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Fe(n)?Bn:Ce.current,u=Er(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Uu(t,a,r,u),Xt=!1;var f=t.memoizedState;a.state=f,Zo(t,r,a,i),c=t.memoizedState,l!==r||f!==c||Me.current||Xt?(typeof p=="function"&&(il(t,n,p,r),c=t.memoizedState),(l=Xt||Fu(t,n,l,r,f,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,up(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:st(t.type,l),a.props=u,h=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=tt(c):(c=Fe(n)?Bn:Ce.current,c=Er(t,c));var b=n.getDerivedStateFromProps;(p=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||f!==c)&&Uu(t,a,r,c),Xt=!1,f=t.memoizedState,a.state=f,Zo(t,r,a,i);var x=t.memoizedState;l!==h||f!==x||Me.current||Xt?(typeof b=="function"&&(il(t,n,b,r),x=t.memoizedState),(u=Xt||Fu(t,n,u,r,f,x,c)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ll(e,t,n,r,o,i)}function ll(e,t,n,r,i,o){zp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Pu(t,n,!1),Wt(e,t,o);r=t.stateNode,qv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ir(t,e.child,null,o),t.child=Ir(t,null,l,o)):Te(e,t,l,o),t.memoizedState=r.state,i&&Pu(t,n,!0),t.child}function Dp(e){var t=e.stateNode;t.pendingContext?Nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nu(e,t.context,!1),rc(e,t.containerInfo)}function Yu(e,t,n,r,i){return Cr(),Jl(i),t.flags|=256,Te(e,t,n,r),t.child}var cl={dehydrated:null,treeContext:null,retryLane:0};function ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mp(e,t,n){var r=t.pendingProps,i=re.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(re,i&1),e===null)return nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Is(a,r,0,null),e=Mn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ul(n),t.memoizedState=cl,e):dc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Jv(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=hn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=hn(l,o):(o=Mn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ul(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=cl,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function dc(e,t){return t=Is({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,r){return r!==null&&Jl(r),Ir(t,e.child,null,n),e=dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ha(Error(_(422))),ho(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Is({mode:"visible",children:r.children},i,0,null),o=Mn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ir(t,e.child,null,a),t.child.memoizedState=ul(a),t.memoizedState=cl,o);if(!(t.mode&1))return ho(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(_(419)),r=ha(o,r,void 0),ho(e,t,a,r)}if(l=(a&e.childLanes)!==0,De||l){if(r=ve,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Bt(e,i),ft(r,e,i,-1))}return vc(),r=ha(Error(_(421))),ho(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=u0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,We=un(i.nextSibling),$e=t,te=!0,ct=null,e!==null&&(Je[Xe++]=At,Je[Xe++]=Lt,Je[Xe++]=Wn,At=e.id,Lt=e.overflow,Wn=t),t=dc(t,r.children),t.flags|=4096,t)}function Ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),rl(e.return,t,n)}function ga(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Fp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Te(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ku(e,n,t);else if(e.tag===19)Ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&es(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ga(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&es(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ga(t,!0,n,null,o);break;case"together":ga(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function To(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xv(e,t,n){switch(t.tag){case 3:Dp(t),Cr();break;case 5:dp(t);break;case 1:Fe(t.type)&&Ko(t);break;case 4:rc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(Jo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?Mp(e,t,n):(X(re,re.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Lp(e,t,n)}return Wt(e,t,n)}var Up,dl,Bp,Wp;Up=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dl=function(){};Bp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(bt.current);var o=null;switch(n){case"input":i=Oa(e,i),r=Oa(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=za(e,i),r=za(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Go)}Ma(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vi.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Z("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Wp=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zv(e,t,n){var r=t.pendingProps;switch(ql(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Fe(t.type)&&Yo(),_e(t),null;case 3:return r=t.stateNode,jr(),ee(Me),ee(Ce),oc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(xl(ct),ct=null))),dl(e,t),_e(t),null;case 5:ic(t);var i=Ln(Ti.current);if(n=t.type,e!==null&&t.stateNode!=null)Bp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return _e(t),null}if(e=Ln(bt.current),fo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[yt]=t,r[Ii]=o,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<ii.length;i++)Z(ii[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":ru(r,o),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Z("invalid",r);break;case"textarea":ou(r,o),Z("invalid",r)}Ma(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,l,e),i=["children",""+l]):vi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Z("scroll",r)}switch(n){case"input":no(r),iu(r,o,!0);break;case"textarea":no(r),su(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Go)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[yt]=t,e[Ii]=r,Up(e,t,!1,!1),t.stateNode=e;e:{switch(a=Fa(n,r),n){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<ii.length;i++)Z(ii[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":ru(e,r),i=Oa(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),Z("invalid",e);break;case"textarea":ou(e,r),i=za(e,r),Z("invalid",e);break;default:i=r}Ma(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?xf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&vf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&yi(e,c):typeof c=="number"&&yi(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vi.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Z("scroll",e):c!=null&&Ll(e,o,c,a))}switch(n){case"input":no(e),iu(e,r,!1);break;case"textarea":no(e),su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hr(e,!!r.multiple,o,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)Wp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Ln(Ti.current),Ln(bt.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(o=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return _e(t),null;case 13:if(ee(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&We!==null&&t.mode&1&&!(t.flags&128))sp(),Cr(),t.flags|=98560,o=!1;else if(o=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[yt]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),o=!1}else ct!==null&&(xl(ct),ct=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?fe===0&&(fe=3):vc())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return jr(),dl(e,t),e===null&&Ei(t.stateNode.containerInfo),_e(t),null;case 10:return ec(t.type._context),_e(t),null;case 17:return Fe(t.type)&&Yo(),_e(t),null;case 19:if(ee(re),o=t.memoizedState,o===null)return _e(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)qr(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=es(e),a!==null){for(t.flags|=128,qr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&le()>Nr&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304)}else{if(!r)if(e=es(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!te)return _e(t),null}else 2*le()-o.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,n=re.current,X(re,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return mc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function e0(e,t){switch(ql(t),t.tag){case 1:return Fe(t.type)&&Yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(),ee(Me),ee(Ce),oc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ic(t),null;case 13:if(ee(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(re),null;case 4:return jr(),null;case 10:return ec(t.type._context),null;case 22:case 23:return mc(),null;case 24:return null;default:return null}}var go=!1,Ee=!1,t0=typeof WeakSet=="function"?WeakSet:Set,P=null;function fr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function fl(e,t,n){try{n()}catch(r){se(e,t,r)}}var Qu=!1;function n0(e,t){if(Qa=$o,e=Yf(),Kl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,p=0,h=e,f=null;t:for(;;){for(var b;h!==n||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(c=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(b=h.firstChild)!==null;)f=h,h=b;for(;;){if(h===e)break t;if(f===n&&++u===i&&(l=a),f===o&&++p===r&&(c=a),(b=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=b}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qa={focusedElem:e,selectionRange:n},$o=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,A=x.memoizedState,g=t.stateNode,d=g.getSnapshotBeforeUpdate(t.elementType===t.type?k:st(t.type,k),A);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return x=Qu,Qu=!1,x}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&fl(t,n,o)}i=i.next}while(i!==r)}}function Es(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $p(e){var t=e.alternate;t!==null&&(e.alternate=null,$p(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[Ii],delete t[Za],delete t[Mv],delete t[Fv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vp(e){return e.tag===5||e.tag===3||e.tag===4}function qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Go));else if(r!==4&&(e=e.child,e!==null))for(hl(e,t,n),e=e.sibling;e!==null;)hl(e,t,n),e=e.sibling}function gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gl(e,t,n),e=e.sibling;e!==null;)gl(e,t,n),e=e.sibling}var ye=null,at=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Hp(e,t,n),n=n.sibling}function Hp(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(vs,n)}catch{}switch(n.tag){case 5:Ee||fr(n,t);case 6:var r=ye,i=at;ye=null,Qt(e,t,n),ye=r,at=i,ye!==null&&(at?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(at?(e=ye,n=n.stateNode,e.nodeType===8?la(e.parentNode,n):e.nodeType===1&&la(e,n),ki(e)):la(ye,n.stateNode));break;case 4:r=ye,i=at,ye=n.stateNode.containerInfo,at=!0,Qt(e,t,n),ye=r,at=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&fl(n,t,a),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!Ee&&(fr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){se(n,t,l)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Qt(e,t,n),Ee=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new t0),t.forEach(function(r){var i=d0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,at=!1;break e;case 3:ye=l.stateNode.containerInfo,at=!0;break e;case 4:ye=l.stateNode.containerInfo,at=!0;break e}l=l.return}if(ye===null)throw Error(_(160));Hp(o,a,i),ye=null,at=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gp(t,e),t=t.sibling}function Gp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),mt(e),r&4){try{di(3,e,e.return),Es(3,e)}catch(k){se(e,e.return,k)}try{di(5,e,e.return)}catch(k){se(e,e.return,k)}}break;case 1:ot(t,e),mt(e),r&512&&n!==null&&fr(n,n.return);break;case 5:if(ot(t,e),mt(e),r&512&&n!==null&&fr(n,n.return),e.flags&32){var i=e.stateNode;try{yi(i,"")}catch(k){se(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&hf(i,o),Fa(l,a);var u=Fa(l,o);for(a=0;a<c.length;a+=2){var p=c[a],h=c[a+1];p==="style"?xf(i,h):p==="dangerouslySetInnerHTML"?vf(i,h):p==="children"?yi(i,h):Ll(i,p,h,u)}switch(l){case"input":Aa(i,o);break;case"textarea":gf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?hr(i,!!o.multiple,b,!1):f!==!!o.multiple&&(o.defaultValue!=null?hr(i,!!o.multiple,o.defaultValue,!0):hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ii]=o}catch(k){se(e,e.return,k)}}break;case 6:if(ot(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){se(e,e.return,k)}}break;case 3:if(ot(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ki(t.containerInfo)}catch(k){se(e,e.return,k)}break;case 4:ot(t,e),mt(e);break;case 13:ot(t,e),mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(hc=le())),r&4&&Ju(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||p,ot(t,e),Ee=u):ot(t,e),mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(h=P=p;P!==null;){switch(f=P,b=f.child,f.tag){case 0:case 11:case 14:case 15:di(4,f,f.return);break;case 1:fr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){se(r,n,k)}}break;case 5:fr(f,f.return);break;case 22:if(f.memoizedState!==null){Zu(h);continue}}b!==null?(b.return=f,P=b):Zu(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=yf("display",a))}catch(k){se(e,e.return,k)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(k){se(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ot(t,e),mt(e),r&4&&Ju(e);break;case 21:break;default:ot(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vp(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yi(i,""),r.flags&=-33);var o=qu(e);gl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=qu(e);hl(e,l,a);break;default:throw Error(_(161))}}catch(c){se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r0(e,t,n){P=e,Yp(e)}function Yp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||go;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ee;l=go;var u=Ee;if(go=a,(Ee=c)&&!u)for(P=i;P!==null;)a=P,c=a.child,a.tag===22&&a.memoizedState!==null?ed(i):c!==null?(c.return=a,P=c):ed(i);for(;o!==null;)P=o,Yp(o),o=o.sibling;P=i,go=l,Ee=u}Xu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Xu(e)}}function Xu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||Es(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&zu(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zu(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&ki(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ee||t.flags&512&&pl(t)}catch(f){se(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Zu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function ed(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Es(4,t)}catch(c){se(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){se(t,i,c)}}var o=t.return;try{pl(t)}catch(c){se(t,o,c)}break;case 5:var a=t.return;try{pl(t)}catch(c){se(t,a,c)}}}catch(c){se(t,t.return,c)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var i0=Math.ceil,rs=Gt.ReactCurrentDispatcher,fc=Gt.ReactCurrentOwner,et=Gt.ReactCurrentBatchConfig,$=0,ve=null,ue=null,xe=0,Be=0,pr=wn(0),fe=0,Oi=null,Vn=0,Cs=0,pc=0,fi=null,ze=null,hc=0,Nr=1/0,Tt=null,is=!1,ml=null,fn=null,mo=!1,on=null,os=0,pi=0,vl=null,No=-1,Po=0;function Pe(){return $&6?le():No!==-1?No:No=le()}function pn(e){return e.mode&1?$&2&&xe!==0?xe&-xe:Bv.transition!==null?(Po===0&&(Po=Pf()),Po):(e=q,e!==0||(e=window.event,e=e===void 0?16:Mf(e.type)),e):1}function ft(e,t,n,r){if(50<pi)throw pi=0,vl=null,Error(_(185));Mi(e,n,r),(!($&2)||e!==ve)&&(e===ve&&(!($&2)&&(Cs|=n),fe===4&&en(e,xe)),Ue(e,r),n===1&&$===0&&!(t.mode&1)&&(Nr=le()+500,ks&&bn()))}function Ue(e,t){var n=e.callbackNode;Bm(e,t);var r=Wo(e,e===ve?xe:0);if(r===0)n!==null&&cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cu(n),t===1)e.tag===0?Uv(td.bind(null,e)):rp(td.bind(null,e)),zv(function(){!($&6)&&bn()}),n=null;else{switch(Rf(r)){case 1:n=Ul;break;case 4:n=Tf;break;case 16:n=Bo;break;case 536870912:n=Nf;break;default:n=Bo}n=th(n,Kp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kp(e,t){if(No=-1,Po=0,$&6)throw Error(_(327));var n=e.callbackNode;if(xr()&&e.callbackNode!==n)return null;var r=Wo(e,e===ve?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ss(e,r);else{t=r;var i=$;$|=2;var o=qp();(ve!==e||xe!==t)&&(Tt=null,Nr=le()+500,Dn(e,t));do try{a0();break}catch(l){Qp(e,l)}while(!0);Zl(),rs.current=o,$=i,ue!==null?t=0:(ve=null,xe=0,t=fe)}if(t!==0){if(t===2&&(i=Va(e),i!==0&&(r=i,t=yl(e,i))),t===1)throw n=Oi,Dn(e,0),en(e,r),Ue(e,le()),n;if(t===6)en(e,r);else{if(i=e.current.alternate,!(r&30)&&!o0(i)&&(t=ss(e,r),t===2&&(o=Va(e),o!==0&&(r=o,t=yl(e,o))),t===1))throw n=Oi,Dn(e,0),en(e,r),Ue(e,le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Pn(e,ze,Tt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=hc+500-le(),10<t)){if(Wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xa(Pn.bind(null,e,ze,Tt),t);break}Pn(e,ze,Tt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-dt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*i0(r/1960))-r,10<r){e.timeoutHandle=Xa(Pn.bind(null,e,ze,Tt),r);break}Pn(e,ze,Tt);break;case 5:Pn(e,ze,Tt);break;default:throw Error(_(329))}}}return Ue(e,le()),e.callbackNode===n?Kp.bind(null,e):null}function yl(e,t){var n=fi;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=ss(e,t),e!==2&&(t=ze,ze=n,t!==null&&xl(t)),e}function xl(e){ze===null?ze=e:ze.push.apply(ze,e)}function o0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~pc,t&=~Cs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function td(e){if($&6)throw Error(_(327));xr();var t=Wo(e,0);if(!(t&1))return Ue(e,le()),null;var n=ss(e,t);if(e.tag!==0&&n===2){var r=Va(e);r!==0&&(t=r,n=yl(e,r))}if(n===1)throw n=Oi,Dn(e,0),en(e,t),Ue(e,le()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,ze,Tt),Ue(e,le()),null}function gc(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Nr=le()+500,ks&&bn())}}function Hn(e){on!==null&&on.tag===0&&!($&6)&&xr();var t=$;$|=1;var n=et.transition,r=q;try{if(et.transition=null,q=1,e)return e()}finally{q=r,et.transition=n,$=t,!($&6)&&bn()}}function mc(){Be=pr.current,ee(pr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lv(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(ql(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yo();break;case 3:jr(),ee(Me),ee(Ce),oc();break;case 5:ic(r);break;case 4:jr();break;case 13:ee(re);break;case 19:ee(re);break;case 10:ec(r.type._context);break;case 22:case 23:mc()}n=n.return}if(ve=e,ue=e=hn(e.current,null),xe=Be=t,fe=0,Oi=null,pc=Cs=Vn=0,ze=fi=null,An!==null){for(t=0;t<An.length;t++)if(n=An[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}An=null}return e}function Qp(e,t){do{var n=ue;try{if(Zl(),Io.current=ns,ts){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ts=!1}if($n=0,me=de=ie=null,ui=!1,Ni=0,fc.current=null,n===null||n.return===null){fe=1,Oi=t,ue=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=xe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var b=Wu(a);if(b!==null){b.flags&=-257,$u(b,a,l,o,t),b.mode&1&&Bu(o,u,t),t=b,c=u;var x=t.updateQueue;if(x===null){var k=new Set;k.add(c),t.updateQueue=k}else x.add(c);break e}else{if(!(t&1)){Bu(o,u,t),vc();break e}c=Error(_(426))}}else if(te&&l.mode&1){var A=Wu(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),$u(A,a,l,o,t),Jl(Tr(c,l));break e}}o=c=Tr(c,l),fe!==4&&(fe=2),fi===null?fi=[o]:fi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Rp(o,c,t);Lu(o,g);break e;case 1:l=c;var d=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(fn===null||!fn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Op(o,l,t);Lu(o,w);break e}}o=o.return}while(o!==null)}Xp(n)}catch(E){t=E,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function qp(){var e=rs.current;return rs.current=ns,e===null?ns:e}function vc(){(fe===0||fe===3||fe===2)&&(fe=4),ve===null||!(Vn&268435455)&&!(Cs&268435455)||en(ve,xe)}function ss(e,t){var n=$;$|=2;var r=qp();(ve!==e||xe!==t)&&(Tt=null,Dn(e,t));do try{s0();break}catch(i){Qp(e,i)}while(!0);if(Zl(),$=n,rs.current=r,ue!==null)throw Error(_(261));return ve=null,xe=0,fe}function s0(){for(;ue!==null;)Jp(ue)}function a0(){for(;ue!==null&&!Rm();)Jp(ue)}function Jp(e){var t=eh(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Xp(e):ue=t,fc.current=null}function Xp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=e0(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ue=null;return}}else if(n=Zv(n,t,Be),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);fe===0&&(fe=5)}function Pn(e,t,n){var r=q,i=et.transition;try{et.transition=null,q=1,l0(e,t,n,r)}finally{et.transition=i,q=r}return null}function l0(e,t,n,r){do xr();while(on!==null);if($&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Wm(e,o),e===ve&&(ue=ve=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,th(Bo,function(){return xr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=et.transition,et.transition=null;var a=q;q=1;var l=$;$|=4,fc.current=null,n0(e,n),Gp(n,e),jv(qa),$o=!!Qa,qa=Qa=null,e.current=n,r0(n),Om(),$=l,q=a,et.transition=o}else e.current=n;if(mo&&(mo=!1,on=e,os=i),o=e.pendingLanes,o===0&&(fn=null),zm(n.stateNode),Ue(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(is)throw is=!1,e=ml,ml=null,e;return os&1&&e.tag!==0&&xr(),o=e.pendingLanes,o&1?e===vl?pi++:(pi=0,vl=e):pi=0,bn(),null}function xr(){if(on!==null){var e=Rf(os),t=et.transition,n=q;try{if(et.transition=null,q=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,os=0,$&6)throw Error(_(331));var i=$;for($|=4,P=e.current;P!==null;){var o=P,a=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(P=u;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:di(8,p,o)}var h=p.child;if(h!==null)h.return=p,P=h;else for(;P!==null;){p=P;var f=p.sibling,b=p.return;if($p(p),p===u){P=null;break}if(f!==null){f.return=b,P=f;break}P=b}}}var x=o.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}P=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,P=a;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:di(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,P=g;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){a=P;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,P=v;else e:for(a=d;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Es(9,l)}}catch(E){se(l,l.return,E)}if(l===a){P=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,P=w;break e}P=l.return}}if($=i,bn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(vs,e)}catch{}r=!0}return r}finally{q=n,et.transition=t}}return!1}function nd(e,t,n){t=Tr(n,t),t=Rp(e,t,1),e=dn(e,t,1),t=Pe(),e!==null&&(Mi(e,1,t),Ue(e,t))}function se(e,t,n){if(e.tag===3)nd(e,e,n);else for(;t!==null;){if(t.tag===3){nd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=Tr(n,e),e=Op(t,e,1),t=dn(t,e,1),e=Pe(),t!==null&&(Mi(t,1,e),Ue(t,e));break}}t=t.return}}function c0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(xe&n)===n&&(fe===4||fe===3&&(xe&130023424)===xe&&500>le()-hc?Dn(e,0):pc|=n),Ue(e,t)}function Zp(e,t){t===0&&(e.mode&1?(t=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):t=1);var n=Pe();e=Bt(e,t),e!==null&&(Mi(e,t,n),Ue(e,n))}function u0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zp(e,n)}function d0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Zp(e,n)}var eh;eh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,Xv(e,t,n);De=!!(e.flags&131072)}else De=!1,te&&t.flags&1048576&&ip(t,qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;To(e,t),e=t.pendingProps;var i=Er(t,Ce.current);yr(t,n),i=ac(null,t,r,e,i,n);var o=lc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(o=!0,Ko(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nc(t),i.updater=_s,t.stateNode=i,i._reactInternals=t,ol(t,r,e,n),t=ll(null,t,r,!0,o,n)):(t.tag=0,te&&o&&Ql(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(To(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=p0(r),e=st(r,e),i){case 0:t=al(null,t,r,e,n);break e;case 1:t=Gu(null,t,r,e,n);break e;case 11:t=Vu(null,t,r,e,n);break e;case 14:t=Hu(null,t,r,st(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),al(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Gu(e,t,r,i,n);case 3:e:{if(Dp(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,up(e,t),Zo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Tr(Error(_(423)),t),t=Yu(e,t,r,n,i);break e}else if(r!==i){i=Tr(Error(_(424)),t),t=Yu(e,t,r,n,i);break e}else for(We=un(t.stateNode.containerInfo.firstChild),$e=t,te=!0,ct=null,n=lp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),r===i){t=Wt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return dp(t),e===null&&nl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ja(r,i)?a=null:o!==null&&Ja(r,o)&&(t.flags|=32),zp(e,t),Te(e,t,a,n),t.child;case 6:return e===null&&nl(t),null;case 13:return Mp(e,t,n);case 4:return rc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ir(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Vu(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,X(Jo,r._currentValue),r._currentValue=a,o!==null)if(ht(o.value,a)){if(o.children===i.children&&!Me.current){t=Wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Mt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),rl(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(_(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),rl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,yr(t,n),i=tt(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=st(r,t.pendingProps),i=st(r.type,i),Hu(e,t,r,i,n);case 15:return Ap(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),To(e,t),t.tag=1,Fe(r)?(e=!0,Ko(t)):e=!1,yr(t,n),Pp(t,r,i),ol(t,r,i,n),ll(null,t,r,!0,e,n);case 19:return Fp(e,t,n);case 22:return Lp(e,t,n)}throw Error(_(156,t.tag))};function th(e,t){return jf(e,t)}function f0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new f0(e,t,n,r)}function yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function p0(e){if(typeof e=="function")return yc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dl)return 11;if(e===Ml)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")yc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case rr:return Mn(n.children,i,o,t);case zl:a=8,i|=8;break;case Ta:return e=Ze(12,n,t,i|2),e.elementType=Ta,e.lanes=o,e;case Na:return e=Ze(13,n,t,i),e.elementType=Na,e.lanes=o,e;case Pa:return e=Ze(19,n,t,i),e.elementType=Pa,e.lanes=o,e;case df:return Is(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cf:a=10;break e;case uf:a=9;break e;case Dl:a=11;break e;case Ml:a=14;break e;case Jt:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ze(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Mn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function Is(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=df,e.lanes=n,e.stateNode={isHidden:!1},e}function ma(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function va(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function h0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Js(0),this.expirationTimes=Js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Js(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xc(e,t,n,r,i,o,a,l,c){return e=new h0(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nc(o),e}function g0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nh(e){if(!e)return yn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Fe(n))return np(e,n,t)}return t}function rh(e,t,n,r,i,o,a,l,c){return e=xc(n,r,!0,e,i,o,a,l,c),e.context=nh(null),n=e.current,r=Pe(),i=pn(n),o=Mt(r,i),o.callback=t??null,dn(n,o,i),e.current.lanes=i,Mi(e,i,r),Ue(e,r),e}function js(e,t,n,r){var i=t.current,o=Pe(),a=pn(i);return n=nh(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(i,t,a),e!==null&&(ft(e,i,a,o),Co(e,i,a)),a}function as(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wc(e,t){rd(e,t),(e=e.alternate)&&rd(e,t)}function m0(){return null}var ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function bc(e){this._internalRoot=e}Ts.prototype.render=bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));js(e,t,null,null)};Ts.prototype.unmount=bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){js(null,e,null,null)}),t[Ut]=null}};function Ts(e){this._internalRoot=e}Ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&Df(e)}};function kc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function v0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=as(a);o.call(u)}}var a=rh(t,r,e,0,null,!1,!1,"",id);return e._reactRootContainer=a,e[Ut]=a.current,Ei(e.nodeType===8?e.parentNode:e),Hn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=as(c);l.call(u)}}var c=xc(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=c,e[Ut]=c.current,Ei(e.nodeType===8?e.parentNode:e),Hn(function(){js(t,c,n,r)}),c}function Ps(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=as(a);l.call(c)}}js(t,a,e,i)}else a=v0(n,t,e,i,r);return as(a)}Of=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ri(t.pendingLanes);n!==0&&(Bl(t,n|1),Ue(t,le()),!($&6)&&(Nr=le()+500,bn()))}break;case 13:Hn(function(){var r=Bt(e,1);if(r!==null){var i=Pe();ft(r,e,1,i)}}),wc(e,1)}};Wl=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=Pe();ft(t,e,134217728,n)}wc(e,134217728)}};Af=function(e){if(e.tag===13){var t=pn(e),n=Bt(e,t);if(n!==null){var r=Pe();ft(n,e,t,r)}wc(e,t)}};Lf=function(){return q};zf=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Ba=function(e,t,n){switch(t){case"input":if(Aa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bs(r);if(!i)throw Error(_(90));pf(r),Aa(r,i)}}}break;case"textarea":gf(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};kf=gc;Sf=Hn;var y0={usingClientEntryPoint:!1,Events:[Ui,ar,bs,wf,bf,gc]},Jr={findFiberByHostInstance:On,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},x0={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cf(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||m0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{vs=vo.inject(x0),wt=vo}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y0;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kc(t))throw Error(_(200));return g0(e,t,null,n)};He.createRoot=function(e,t){if(!kc(e))throw Error(_(299));var n=!1,r="",i=ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xc(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,Ei(e.nodeType===8?e.parentNode:e),new bc(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Cf(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return Hn(e)};He.hydrate=function(e,t,n){if(!Ns(t))throw Error(_(200));return Ps(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!kc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ih;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=rh(t,null,e,1,n??null,i,!1,o,a),e[Ut]=t.current,Ei(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ts(t)};He.render=function(e,t,n){if(!Ns(t))throw Error(_(200));return Ps(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!Ns(e))throw Error(_(40));return e._reactRootContainer?(Hn(function(){Ps(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};He.unstable_batchedUpdates=gc;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ns(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ps(e,t,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function oh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oh)}catch(e){console.error(e)}}oh(),of.exports=He;var w0=of.exports,sh,od=w0;sh=od.createRoot,od.hydrateRoot;const b0="modulepreload",k0=function(e){return"/"+e},sd={},Kn=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=k0(c),c in sd)return;sd[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":b0,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((f,b)=>{h.addEventListener("load",f),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},St="http://localhost:3001/api/v1",ge={name:"CloudVault",logo:"CV",logoImage:"/calovaultlogo.png",logoVideo:"/calovaultlogo.mp4"};async function S0(){var n;const e=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");if(!e)return null;const t=localStorage.getItem("cv_refreshToken")?localStorage:sessionStorage;try{const r=await fetch(`${St}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:e})});if(!r.ok)return null;const i=await r.json(),o=((n=i.data)==null?void 0:n.accessToken)||i.accessToken;return o?(t.setItem("cv_token",o),window.dispatchEvent(new CustomEvent("cv-token-refreshed",{detail:{token:o}})),o):null}catch{return null}}function Sc(e){return new Error(`Cannot reach the server at ${St}${e}. Make sure the backend is running (npm start in project root).`)}const lt=async(e,t={},n,r=!1)=>{const i={...t.headers||{}};n&&(i.Authorization=`Bearer ${n}`),t.body instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json");let o;try{o=await fetch(`${St}${e}`,{...t,headers:i})}catch{throw Sc(e)}if(o.status===401&&n&&!r){const c=await S0();if(c)return lt(e,t,c,!0);throw new Error("Session expired. Please log in again.")}if(!o.ok){const c=await o.json().catch(()=>({error:"Unknown error"})),u=c.message||c.error||"",p=u.toLowerCase().includes("token")?"Something went wrong. Please try again.":u||`Request failed (${o.status})`;throw new Error(p)}if(!(o.headers.get("content-type")||"").includes("application/json"))return o;const l=await o.json();return l.success?l.data:l},jn=(e,t)=>Array.isArray(e)?e:(e==null?void 0:e[t])||[];async function _c(e,t,{onProgress:n,disposition:r="download"}={}){const i=r==="preview"?`/files/${e}/preview`:`/files/${e}/download`;let o;try{o=await fetch(`${St}${i}`,{headers:{Authorization:`Bearer ${t}`}})}catch{throw Sc(i)}if(!o.ok){const l=await o.json().catch(()=>({error:"Download failed"}));throw new Error(l.error||l.message||"Download failed")}const a=Number(o.headers.get("content-length"))||0;return _0(o,a,n)}async function _0(e,t,n){if(!e.body||!t){const a=await e.blob();return n==null||n(100),a}const r=e.body.getReader(),i=[];let o=0;for(;;){const{done:a,value:l}=await r.read();if(a)break;i.push(l),o+=l.length,n&&t>0&&n(Math.min(99,Math.round(o/t*100)))}return n==null||n(100),new Blob(i,{type:e.headers.get("content-type")||"application/octet-stream"})}function E0(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function C0(e,t,n,r){return new Promise((i,o)=>{const a=new XMLHttpRequest;a.open("POST",`${St}${e}`),a.setRequestHeader("Authorization",`Bearer ${n}`),a.upload.onprogress=l=>{l.lengthComputable&&r&&r(Math.round(l.loaded/l.total*100))},a.onload=()=>{try{const l=JSON.parse(a.responseText);a.status>=200&&a.status<300?i(l.success?l.data:l):o(new Error(l.message||l.error||"Upload failed"))}catch{a.status>=200&&a.status<300?i({}):o(new Error("Upload failed"))}},a.onerror=()=>o(Sc(e)),a.send(t)})}const Ne=e=>{if(e===0)return"0 B";const t=1024,n=["B","KB","MB","GB"],r=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**r).toFixed(1)} ${n[r]}`},Wi=e=>{const t=Math.floor((Date.now()-new Date(e))/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`},Rs=(e="")=>e.startsWith("image/")?"🖼️":e==="application/pdf"?"📄":e.startsWith("video/")?"🎬":e.startsWith("audio/")?"🎵":e.includes("zip")||e.includes("archive")?"🗜️":e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")?"📝":"📁",I0=["image/","video/","audio/"],j0=new Set(["application/pdf","text/plain","text/markdown","application/json"]),ah=(e="")=>{const t=(e||"").toLowerCase();return j0.has(t)?!0:I0.some(n=>t.startsWith(n))},T0=(e="")=>{const t=(e||"").toLowerCase();return t.startsWith("image/")?"image":t==="application/pdf"?"pdf":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("text/")||t==="application/json"?"text":null},ad=[{key:"all",label:"All",icon:"📋",test:()=>!0},{key:"images",label:"Images",icon:"🖼️",test:e=>e.startsWith("image/")},{key:"documents",label:"Docs",icon:"📄",test:e=>e.includes("pdf")||e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")},{key:"videos",label:"Videos",icon:"🎬",test:e=>e.startsWith("video/")},{key:"audio",label:"Audio",icon:"🎵",test:e=>e.startsWith("audio/")},{key:"archives",label:"Archives",icon:"🗜️",test:e=>e.includes("zip")||e.includes("archive")||e.includes("tar")||e.includes("rar")}],Fn=`
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
`,N0=[{id:"free",name:"Free",price:"₹0",period:"/mo",storage:"5 GB",features:["Standard uploads","Basic sharing","Web preview"]},{id:"pro",name:"Pro",price:"₹749",period:"/mo",storage:"100 GB",features:["Faster uploads","File version history","Priority support"],highlight:!0},{id:"premium",name:"Premium",price:"₹1,599",period:"/mo",storage:"1 TB",features:["Team sharing","Advanced analytics","Custom branding"]},{id:"team",name:"Team",price:"₹3,999",period:"/mo",storage:"2 TB",features:["Shared workspaces","Admin controls","SSO ready"]}],Ib=[{id:"50gb",label:"+50 GB",price:"₹399"},{id:"100gb",label:"+100 GB",price:"₹749"},{id:"500gb",label:"+500 GB",price:"₹2,499"},{id:"1tb",label:"+1 TB",price:"₹3,999"}],P0=[{title:"Cloud storage",desc:"10 GB of free storage. Store files of any size, back up folders, sync across devices, and share with full control.",icon:"☁"},{title:"Private sharing",desc:"Share files and folders with anyone — even without an account. Set passwords, expiration dates, and permissions.",icon:"🔗"},{title:"Smart search",desc:"Find anything instantly with filters, tags, and full-text search across your entire drive.",icon:"🔍"},{title:"Enterprise security",desc:"Encrypted storage, activity logs, and role-based access. Your data stays private by default.",icon:"🛡"}],R0=[{title:"Never run out of space",desc:"Start with 10 GB free. Upgrade anytime for more storage when you need it."},{title:"Share with anyone",desc:"Give read-only or full access. Set passwords or create expiring links."},{title:"Be in control",desc:"Your data is in your hands. Manage permissions and access at every level."},{title:"Works everywhere",desc:"Access your files through the web on desktop, tablet, and mobile."}],O0=[{q:"Is CloudVault free to use?",a:"Yes. Every account includes 10 GB of free storage with no credit card required."},{q:"How secure are my files?",a:"Files are encrypted in transit and at rest. Share links support passwords and expiration dates."},{q:"Can I share files with people outside my team?",a:"Absolutely. Create public or protected links with view, download, or edit permissions."},{q:"Can I cancel or change my plan?",a:"Plans are flexible. Upgrade, downgrade, or cancel from billing settings anytime."}],A0=[{label:"Products",href:"#products"},{label:"Security",href:"#security"},{label:"Pricing",href:"#pricing"},{label:"FAQ",href:"#faq"}];function L0(){m.useEffect(()=>{const e=document.querySelectorAll(".scroll-reveal"),t=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&(r.target.classList.add("visible"),t.unobserve(r.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});return e.forEach(n=>t.observe(n)),()=>t.disconnect()},[])}function z0({onGetStarted:e,onLogin:t,onSignUp:n}){const[r,i]=m.useState({filesStored:0,activeUsers:0,storageUsed:0,storageCapacity:0xa0000000000}),o=m.useRef(null);return L0(),m.useEffect(()=>{fetch(`${St}/public/stats`).then(a=>a.json()).then(a=>{a.success&&a.data&&i(a.data)}).catch(()=>{})},[]),m.useEffect(()=>{const a=()=>{o.current&&(o.current.style.background=window.scrollY>40?"rgba(0,0,0,.95)":"rgba(0,0,0,.85)")};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),s.jsxs("div",{className:"marketing-shell",children:[s.jsx("style",{children:Fn}),s.jsxs("header",{className:"landing-header",ref:o,children:[s.jsxs("button",{type:"button",className:"brand-lockup",onClick:e,"aria-label":`${ge.name} home`,children:[s.jsx("span",{className:"brand-mark",children:s.jsx("img",{src:ge.logoImage,alt:""})}),s.jsx("span",{children:ge.name})]}),s.jsx("nav",{className:"landing-links","aria-label":"Primary",children:A0.map(a=>s.jsx("a",{href:a.href,children:a.label},a.href))}),s.jsxs("div",{className:"landing-nav",children:[s.jsx("button",{type:"button",className:"btn-ghost",onClick:t,children:"Log in"}),s.jsx("button",{type:"button",className:"btn-mega-red",onClick:n,children:"Sign up free"})]})]}),s.jsxs("main",{children:[s.jsxs("section",{className:"hero-section",children:[s.jsx("div",{className:"hero-glow hero-glow-green","aria-hidden":"true"}),s.jsx("div",{className:"hero-glow hero-glow-blue","aria-hidden":"true"}),s.jsxs("div",{className:"hero-copy",children:[s.jsxs("div",{className:"eyebrow",children:[s.jsx("span",{"aria-hidden":"true"})," Secure cloud storage by default"]}),s.jsxs("h1",{children:["Online privacy for everyone —",s.jsx("span",{children:"your intelligent cloud drive."})]}),s.jsxs("p",{children:["Privacy is not an option with ",ge.name,"; it's standard. Store, organize, and securely share your files from one place — on any device."]}),s.jsxs("div",{className:"hero-actions animate-fade-up delay-1",children:[s.jsx("button",{type:"button",className:"btn-primary btn-hero-dark",onClick:e,children:"Sign up for 10 GB free"}),s.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"Log in"})]}),s.jsx("div",{className:"hero-note",children:"No credit card required · 10 GB free forever"})]}),s.jsxs("div",{className:"dashboard-preview animate-fade-up delay-2","aria-label":"CloudVault preview",children:[s.jsx("div",{className:"hero-video-orbit","aria-hidden":"true",children:s.jsx("video",{src:ge.logoVideo,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata"})}),s.jsxs("div",{className:"preview-panel",children:[s.jsxs("div",{className:"preview-top-bar",children:[s.jsx("span",{className:"brand-mark small",children:s.jsx("img",{src:ge.logoImage,alt:""})}),s.jsx("div",{className:"preview-search",children:"🔍 Search Cloud drive"})]}),s.jsxs("div",{className:"preview-body",children:[s.jsxs("aside",{className:"preview-sidebar",children:[s.jsxs("div",{className:"preview-logo",children:[s.jsx("span",{className:"brand-mark small",children:s.jsx("img",{src:ge.logoImage,alt:""})}),s.jsx("strong",{children:"Drive"})]}),["Cloud drive","Recent","Starred","Shared","Trash"].map((a,l)=>s.jsx("div",{className:`preview-nav-item${l===0?" active":""}`,children:a},a)),s.jsxs("div",{className:"preview-usage",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Free"}),s.jsx("strong",{children:"4.5 GB / 10 GB"})]}),s.jsx("div",{className:"preview-bar",children:s.jsx("span",{})})]})]}),s.jsxs("section",{className:"preview-files",children:[s.jsxs("div",{className:"preview-topline",children:[s.jsx("h3",{children:"Cloud drive"}),s.jsx("button",{type:"button","aria-hidden":"true",tabIndex:-1,children:"↑ Upload"})]}),[["Project Alpha","1.2 GB · Last edited 2h ago"],["Q3 Financials.xlsx","2.4 MB · Last edited 2h ago"],["Campaign Banner.png","4.1 MB · Last edited 2h ago"]].map(([a,l],c)=>s.jsxs("div",{className:"preview-file",style:{animationDelay:`${c*.1}s`},children:[s.jsx("div",{className:"preview-file-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h4",{children:a}),s.jsx("p",{children:l})]})]},a))]})]})]})]})]}),s.jsx("section",{id:"products",className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsx("p",{className:"section-kicker",children:"All in one place"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 44px)",fontWeight:800,lineHeight:1.15,marginBottom:12},children:"Store and share files. Browse and protect."}),s.jsxs("p",{style:{color:"#b3b3b3",fontSize:17,maxWidth:640,lineHeight:1.6},children:[ge.name," combines secure cloud storage with powerful tools to upload, download, and manage your files with confidence."]}),s.jsx("div",{className:"mega-product-grid",children:P0.map((a,l)=>s.jsxs("article",{className:`mega-product-card scroll-reveal delay-${l+1}`,children:[s.jsx("div",{className:"mega-product-icon","aria-hidden":"true",children:a.icon}),s.jsx("h3",{children:a.title}),s.jsx("p",{children:a.desc})]},a.title))})]})}),s.jsx("section",{id:"security",className:"mega-section",children:s.jsxs("div",{className:"mega-security-block scroll-reveal",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Security that's always on"}),s.jsx("h2",{children:"Your data stays encrypted and private."}),s.jsx("p",{children:"We protect your data with encryption in transit and at rest — the highest level of online security. Only you and people you authorize can access your files."}),s.jsx("button",{type:"button",className:"btn-mega-red",style:{marginTop:28},onClick:e,children:"Learn more"})]}),s.jsx("div",{className:"mega-shield","aria-hidden":"true",children:"🔐"})]})}),s.jsx("section",{className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsxs("p",{className:"section-kicker",children:["Why choose ",ge.name,"?"]}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800,marginBottom:40},children:"Built for how you work today."}),s.jsx("div",{className:"mega-product-grid",children:R0.map((a,l)=>s.jsxs("article",{className:`mega-product-card scroll-reveal delay-${l+1}`,children:[s.jsx("h3",{children:a.title}),s.jsx("p",{children:a.desc})]},a.title))})]})}),s.jsxs("section",{className:"stats-band scroll-reveal","aria-label":"Platform statistics",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24,textAlign:"center",borderTop:"1px solid rgba(255,255,255,.06)",borderBottom:"1px solid rgba(255,255,255,.06)"},children:[s.jsxs("div",{className:"stat-mini scroll-reveal delay-1",children:[s.jsxs("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:[r.filesStored.toLocaleString(),"+"]}),s.jsx("span",{style:{color:"#737373"},children:"Files stored"})]}),s.jsxs("div",{className:"stat-mini scroll-reveal delay-2",children:[s.jsx("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:Ne(r.storageCapacity)}),s.jsx("span",{style:{color:"#737373"},children:"Storage capacity"})]}),s.jsxs("div",{className:"stat-mini scroll-reveal delay-3",children:[s.jsxs("strong",{style:{fontSize:36,color:"#fff",display:"block"},children:[r.activeUsers.toLocaleString(),"+"]}),s.jsx("span",{style:{color:"#737373"},children:"Active users"})]})]}),s.jsxs("section",{id:"pricing",className:"mega-section",children:[s.jsxs("div",{className:"scroll-reveal section-center",children:[s.jsx("p",{className:"section-kicker",children:"Pricing"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800},children:"Simple plans for everyone."}),s.jsx("p",{className:"section-subtitle",style:{color:"#b3b3b3",marginTop:12},children:"Start free. Scale when you need more."})]}),s.jsx("div",{className:"pricing-grid scroll-reveal delay-1",children:N0.map(a=>s.jsxs("article",{className:`plan-card${a.highlight?" highlight":""}`,children:[a.highlight&&s.jsx("span",{className:"plan-badge",children:"Most popular"}),s.jsx("h3",{children:a.name}),s.jsxs("div",{className:"plan-price",children:[a.price,s.jsx("span",{children:a.period})]}),s.jsxs("p",{children:[a.storage," storage"]}),s.jsx("ul",{className:"plan-features",children:(a.features||[]).slice(0,4).map(l=>s.jsx("li",{children:l},l))}),s.jsxs("button",{type:"button",className:a.highlight?"btn-mega-red":"btn-secondary",onClick:e,children:["Choose ",a.name]})]},a.id))})]}),s.jsx("section",{id:"faq",className:"mega-section-dark",children:s.jsxs("div",{className:"mega-section-inner scroll-reveal",children:[s.jsxs("div",{className:"section-center",children:[s.jsx("p",{className:"section-kicker",children:"FAQ"}),s.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:800},children:"Questions? We have answers."})]}),s.jsx("div",{className:"faq-list",children:O0.map(a=>s.jsxs("details",{className:"faq-item scroll-reveal",children:[s.jsx("summary",{children:a.q}),s.jsx("p",{children:a.a})]},a.q))})]})}),s.jsxs("section",{className:"cta-band scroll-reveal",children:[s.jsx("h2",{children:"Millions trust secure cloud storage."}),s.jsx("p",{children:"Join users who store and protect their data in the cloud."}),s.jsxs("div",{className:"hero-actions",children:[s.jsx("button",{type:"button",className:"btn-mega-red",onClick:e,children:"Sign up for free"}),s.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"Log in"})]})]})]}),s.jsxs("footer",{className:"landing-footer",children:[s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx("span",{className:"brand-mark",children:s.jsx("img",{src:ge.logoImage,alt:""})}),s.jsx("strong",{children:ge.name}),s.jsx("p",{children:"Secure cloud storage for individuals and teams."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Product"}),s.jsx("a",{href:"#products",children:"Products"}),s.jsx("a",{href:"#pricing",children:"Pricing"}),s.jsx("a",{href:"#faq",children:"FAQ"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Company"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"About"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Contact"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Legal"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Privacy"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Terms"})]})]}),s.jsx("div",{className:"footer-bottom",children:s.jsxs("span",{children:["© ",new Date().getFullYear()," ",ge.name,". All rights reserved."]})})]})]})}const D0=()=>{};var ld={};/**
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
 */const lh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},M0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],l=e[n++],c=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ch={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,l=a?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,p=o>>2,h=(o&3)<<4|l>>4;let f=(l&15)<<2|u>>6,b=u&63;c||(b=64,a||(f=64)),r.push(n[p],n[h],n[f],n[b])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(lh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):M0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||l==null||u==null||h==null)throw new F0;const f=o<<2|l>>4;if(r.push(f),u!==64){const b=l<<4&240|u>>2;if(r.push(b),h!==64){const x=u<<6&192|h;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class F0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const U0=function(e){const t=lh(e);return ch.encodeByteArray(t,!0)},uh=function(e){return U0(e).replace(/\./g,"")},dh=function(e){try{return ch.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function B0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const W0=()=>B0().__FIREBASE_DEFAULTS__,$0=()=>{if(typeof process>"u"||typeof ld>"u")return;const e=ld.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},V0=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&dh(e[1]);return t&&JSON.parse(t)},Ec=()=>{try{return D0()||W0()||$0()||V0()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},H0=e=>{var t,n;return(n=(t=Ec())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},fh=()=>{var e;return(e=Ec())===null||e===void 0?void 0:e.config},ph=e=>{var t;return(t=Ec())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class G0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Os(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Y0(e){return(await fetch(e,{credentials:"include"})).ok}const hi={};function K0(){const e={prod:[],emulator:[]};for(const t of Object.keys(hi))hi[t]?e.emulator.push(t):e.prod.push(t);return e}function Q0(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let cd=!1;function q0(e,t){if(typeof window>"u"||typeof document>"u"||!Os(window.location.host)||hi[e]===t||hi[e]||cd)return;hi[e]=t;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",o=K0().prod.length>0;function a(){const f=document.getElementById(r);f&&f.remove()}function l(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,b){f.setAttribute("width","24"),f.setAttribute("id",b),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{cd=!0,a()},f}function p(f,b){f.setAttribute("id",b),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=Q0(r),b=n("text"),x=document.getElementById(b)||document.createElement("span"),k=n("learnmore"),A=document.getElementById(k)||document.createElement("a"),g=n("preprendIcon"),d=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const v=f.element;l(v),p(A,k);const w=u();c(d,g),v.append(d,x,A,w),document.body.appendChild(v)}o?(x.innerText="Preview backend disconnected.",d.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(d.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function J0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function X0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Z0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ey(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ty(){const e=Re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ny(){try{return typeof indexedDB=="object"}catch{return!1}}function ry(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const iy="FirebaseError";class kn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=iy,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?oy(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new kn(i,l,r)}}function oy(e,t){return e.replace(sy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const sy=/\{\$([^}]+)}/g;function ay(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Pr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(ud(o)&&ud(a)){if(!Pr(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ud(e){return e!==null&&typeof e=="object"}/**
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
 */function Vi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ly(e,t){const n=new cy(e,t);return n.subscribe.bind(n)}class cy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uy(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ya),i.error===void 0&&(i.error=ya),i.complete===void 0&&(i.complete=ya);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ya(){}/**
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
 */function Dr(e){return e&&e._delegate?e._delegate:e}class Rr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Rn="[DEFAULT]";/**
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
 */class dy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new G0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(py(t))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Rn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rn){return this.instances.has(t)}getOptions(t=Rn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Rn){return this.component?this.component.multipleInstances?t:Rn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fy(e){return e===Rn?void 0:e}function py(e){return e.instantiationMode==="EAGER"}/**
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
 */class hy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new dy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(J||(J={}));const gy={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},my=J.INFO,vy={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},yy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=vy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class hh{constructor(t){this.name=t,this._logLevel=my,this._logHandler=yy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const xy=(e,t)=>t.some(n=>e instanceof n);let dd,fd;function wy(){return dd||(dd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function by(){return fd||(fd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gh=new WeakMap,wl=new WeakMap,mh=new WeakMap,xa=new WeakMap,Cc=new WeakMap;function ky(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(gn(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&gh.set(n,e)}).catch(()=>{}),Cc.set(t,e),t}function Sy(e){if(wl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});wl.set(e,t)}let bl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return wl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||mh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _y(e){bl=e(bl)}function Ey(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(wa(this),t,...n);return mh.set(r,t.sort?t.sort():[t]),gn(r)}:by().includes(e)?function(...t){return e.apply(wa(this),t),gn(gh.get(this))}:function(...t){return gn(e.apply(wa(this),t))}}function Cy(e){return typeof e=="function"?Ey(e):(e instanceof IDBTransaction&&Sy(e),xy(e,wy())?new Proxy(e,bl):e)}function gn(e){if(e instanceof IDBRequest)return ky(e);if(xa.has(e))return xa.get(e);const t=Cy(e);return t!==e&&(xa.set(e,t),Cc.set(t,e)),t}const wa=e=>Cc.get(e);function Iy(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),l=gn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(gn(a.result),c.oldVersion,c.newVersion,gn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const jy=["get","getKey","getAll","getAllKeys","count"],Ty=["put","add","delete","clear"],ba=new Map;function pd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ba.get(t))return ba.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ty.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jy.includes(n)))return;const o=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return ba.set(t,o),o}_y(e=>({...e,get:(t,n,r)=>pd(t,n)||e.get(t,n,r),has:(t,n)=>!!pd(t,n)||e.has(t,n)}));/**
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
 */class Ny{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Py(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Py(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const kl="@firebase/app",hd="0.13.2";/**
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
 */const $t=new hh("@firebase/app"),Ry="@firebase/app-compat",Oy="@firebase/analytics-compat",Ay="@firebase/analytics",Ly="@firebase/app-check-compat",zy="@firebase/app-check",Dy="@firebase/auth",My="@firebase/auth-compat",Fy="@firebase/database",Uy="@firebase/data-connect",By="@firebase/database-compat",Wy="@firebase/functions",$y="@firebase/functions-compat",Vy="@firebase/installations",Hy="@firebase/installations-compat",Gy="@firebase/messaging",Yy="@firebase/messaging-compat",Ky="@firebase/performance",Qy="@firebase/performance-compat",qy="@firebase/remote-config",Jy="@firebase/remote-config-compat",Xy="@firebase/storage",Zy="@firebase/storage-compat",e1="@firebase/firestore",t1="@firebase/ai",n1="@firebase/firestore-compat",r1="firebase",i1="11.10.0";/**
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
 */const Sl="[DEFAULT]",o1={[kl]:"fire-core",[Ry]:"fire-core-compat",[Ay]:"fire-analytics",[Oy]:"fire-analytics-compat",[zy]:"fire-app-check",[Ly]:"fire-app-check-compat",[Dy]:"fire-auth",[My]:"fire-auth-compat",[Fy]:"fire-rtdb",[Uy]:"fire-data-connect",[By]:"fire-rtdb-compat",[Wy]:"fire-fn",[$y]:"fire-fn-compat",[Vy]:"fire-iid",[Hy]:"fire-iid-compat",[Gy]:"fire-fcm",[Yy]:"fire-fcm-compat",[Ky]:"fire-perf",[Qy]:"fire-perf-compat",[qy]:"fire-rc",[Jy]:"fire-rc-compat",[Xy]:"fire-gcs",[Zy]:"fire-gcs-compat",[e1]:"fire-fst",[n1]:"fire-fst-compat",[t1]:"fire-vertex","fire-js":"fire-js",[r1]:"fire-js-all"};/**
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
 */const ls=new Map,s1=new Map,_l=new Map;function gd(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ai(e){const t=e.name;if(_l.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;_l.set(t,e);for(const n of ls.values())gd(n,e);for(const n of s1.values())gd(n,e);return!0}function vh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function xt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const a1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new $i("app","Firebase",a1);/**
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
 */class l1{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
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
 */const Hi=i1;function yh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Sl,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=fh()),!n)throw mn.create("no-options");const o=ls.get(i);if(o){if(Pr(n,o.options)&&Pr(r,o.config))return o;throw mn.create("duplicate-app",{appName:i})}const a=new hy(i);for(const c of _l.values())a.addComponent(c);const l=new l1(n,r,a);return ls.set(i,l),l}function c1(e=Sl){const t=ls.get(e);if(!t&&e===Sl&&fh())return yh();if(!t)throw mn.create("no-app",{appName:e});return t}function wr(e,t,n){var r;let i=(r=o1[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(l.join(" "));return}Ai(new Rr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const u1="firebase-heartbeat-database",d1=1,Li="firebase-heartbeat-store";let ka=null;function xh(){return ka||(ka=Iy(u1,d1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Li)}catch(n){console.warn(n)}}}}).catch(e=>{throw mn.create("idb-open",{originalErrorMessage:e.message})})),ka}async function f1(e){try{const n=(await xh()).transaction(Li),r=await n.objectStore(Li).get(wh(e));return await n.done,r}catch(t){if(t instanceof kn)$t.warn(t.message);else{const n=mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(n.message)}}}async function md(e,t){try{const r=(await xh()).transaction(Li,"readwrite");await r.objectStore(Li).put(t,wh(e)),await r.done}catch(n){if(n instanceof kn)$t.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function wh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const p1=1024,h1=30;class g1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new v1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=vd();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>h1){const a=y1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vd(),{heartbeatsToSend:r,unsentEntries:i}=m1(this._heartbeatsCache.heartbeats),o=uh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return $t.warn(n),""}}}function vd(){return new Date().toISOString().substring(0,10)}function m1(e,t=p1){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),yd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class v1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ny()?ry().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await f1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return md(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return md(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function yd(e){return uh(JSON.stringify({version:2,heartbeats:e})).length}function y1(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function x1(e){Ai(new Rr("platform-logger",t=>new Ny(t),"PRIVATE")),Ai(new Rr("heartbeat",t=>new g1(t),"PRIVATE")),wr(kl,hd,e),wr(kl,hd,"esm2017"),wr("fire-js","")}x1("");var w1="firebase",b1="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wr(w1,b1,"app");function Ic(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function bh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const k1=bh,kh=new $i("auth","Firebase",bh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new hh("@firebase/auth");function S1(e,...t){cs.logLevel<=J.WARN&&cs.warn(`Auth (${Hi}): ${e}`,...t)}function Oo(e,...t){cs.logLevel<=J.ERROR&&cs.error(`Auth (${Hi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e,...t){throw Tc(e,...t)}function pt(e,...t){return Tc(e,...t)}function jc(e,t,n){const r=Object.assign(Object.assign({},k1()),{[t]:n});return new $i("auth","Firebase",r).create(t,{appName:e.name})}function Un(e){return jc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _1(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&_t(e,"argument-error"),jc(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return kh.create(e,...t)}function L(e,t,...n){if(!e)throw Tc(t,...n)}function zt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Oo(t),new Error(t)}function Vt(e,t){e||zt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function E1(){return xd()==="http:"||xd()==="https:"}function xd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E1()||Z0()||"connection"in navigator)?navigator.onLine:!0}function I1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Vt(n>t,"Short delay should be less than long delay!"),this.isMobile=J0()||ey()}get(){return C1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(e,t){Vt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],N1=new Gi(3e4,6e4);function Pc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Mr(e,t,n,r,i={}){return _h(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const l=Vi(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:c},o);return X0()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&Os(e.emulatorConfig.host)&&(u.credentials="include"),Sh.fetch()(await Eh(e,e.config.apiHost,n,l),u)})}async function _h(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},j1),t);try{const i=new R1(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw yo(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yo(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw yo(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw yo(e,"user-disabled",a);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jc(e,p,u);_t(e,p)}}catch(i){if(i instanceof kn)throw i;_t(e,"network-request-failed",{message:String(i)})}}async function P1(e,t,n,r,i={}){const o=await Mr(e,t,n,r,i);return"mfaPendingCredential"in o&&_t(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function Eh(e,t,n,r){const i=`${t}${n}?${r}`,o=e,a=o.config.emulator?Nc(e.config,i):`${e.config.apiScheme}://${i}`;return T1.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class R1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),N1.get())})}}function yo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(e,t){return Mr(e,"POST","/v1/accounts:delete",t)}async function us(e,t){return Mr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function A1(e,t=!1){const n=Dr(e),r=await n.getIdToken(t),i=Rc(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:gi(Sa(i.auth_time)),issuedAtTime:gi(Sa(i.iat)),expirationTime:gi(Sa(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Sa(e){return Number(e)*1e3}function Rc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const i=dh(n);return i?JSON.parse(i):(Oo("Failed to decode base64 JWT payload"),null)}catch(i){return Oo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wd(e){const t=Rc(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof kn&&L1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function L1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ds(e){var t;const n=e.auth,r=await e.getIdToken(),i=await zi(e,us(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Ch(o.providerUserInfo):[],l=M1(e.providerData,a),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(l!=null&&l.length),p=c?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Cl(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,h)}async function D1(e){const t=Dr(e);await ds(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function M1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Ch(e){return e.map(t=>{var{providerId:n}=t,r=Ic(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(e,t){const n=await _h(e,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=await Eh(e,i,"/v1/token",`key=${o}`),l=await e._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return e.emulatorConfig&&Os(e.emulatorConfig.host)&&(c.credentials="include"),Sh.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function U1(e,t){return Mr(e,"POST","/v2/accounts:revokeToken",Pc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):wd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){L(t.length!==0,"internal-error");const n=wd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await F1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new br;return r&&(L(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ut{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Ic(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Cl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await zi(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return A1(this,t)}reload(){return D1(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ut(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ds(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(Un(this.auth));const t=await this.getIdToken();return await zi(this,O1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,l,c,u,p;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,b=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(a=n.photoURL)!==null&&a!==void 0?a:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:v,emailVerified:w,isAnonymous:E,providerData:C,stsTokenManager:j}=n;L(v&&j,t,"internal-error");const R=br.fromJSON(this.name,j);L(typeof v=="string",t,"internal-error"),qt(h,t.name),qt(f,t.name),L(typeof w=="boolean",t,"internal-error"),L(typeof E=="boolean",t,"internal-error"),qt(b,t.name),qt(x,t.name),qt(k,t.name),qt(A,t.name),qt(g,t.name),qt(d,t.name);const V=new ut({uid:v,auth:t,email:f,emailVerified:w,displayName:h,isAnonymous:E,photoURL:x,phoneNumber:b,tenantId:k,stsTokenManager:R,createdAt:g,lastLoginAt:d});return C&&Array.isArray(C)&&(V.providerData=C.map(N=>Object.assign({},N))),A&&(V._redirectEventId=A),V}static async _fromIdTokenResponse(t,n,r=!1){const i=new br;i.updateFromServerResponse(n);const o=new ut({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ds(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Ch(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new br;l.updateFromIdToken(r);const c=new ut({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Cl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=new Map;function Dt(e){Vt(e instanceof Function,"Expected a class definition");let t=bd.get(e);return t?(Vt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,bd.set(e,t),t)}/**
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
 */class Ih{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Ih.type="NONE";const kd=Ih;/**
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
 */function Ao(e,t,n){return`firebase:${e}:${t}:${n}`}class kr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ao(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ao("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await us(this.auth,{idToken:t}).catch(()=>{});return n?ut._fromGetAccountInfoResponse(this.auth,n,t):null}return ut._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new kr(Dt(kd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Dt(kd);const a=Ao(r,t.config.apiKey,t.name);let l=null;for(const u of n)try{const p=await u._get(a);if(p){let h;if(typeof p=="string"){const f=await us(t,{idToken:p}).catch(()=>{});if(!f)break;h=await ut._fromGetAccountInfoResponse(t,f,p)}else h=ut._fromJSON(t,p);u!==o&&(l=h),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new kr(o,t,r):(o=c[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new kr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ph(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(jh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Oh(t))return"Blackberry";if(Ah(t))return"Webos";if(Th(t))return"Safari";if((t.includes("chrome/")||Nh(t))&&!t.includes("edge/"))return"Chrome";if(Rh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jh(e=Re()){return/firefox\//i.test(e)}function Th(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Nh(e=Re()){return/crios\//i.test(e)}function Ph(e=Re()){return/iemobile/i.test(e)}function Rh(e=Re()){return/android/i.test(e)}function Oh(e=Re()){return/blackberry/i.test(e)}function Ah(e=Re()){return/webos/i.test(e)}function Oc(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function B1(e=Re()){var t;return Oc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function W1(){return ty()&&document.documentMode===10}function Lh(e=Re()){return Oc(e)||Rh(e)||Ah(e)||Oh(e)||/windows phone/i.test(e)||Ph(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(e,t=[]){let n;switch(e){case"Browser":n=Sd(Re());break;case"Worker":n=`${Sd(Re())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hi}/${r}`}/**
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
 */class $1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,l)=>{try{const c=t(o);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function V1(e,t={}){return Mr(e,"GET","/v2/passwordPolicy",Pc(e,t))}/**
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
 */const H1=6;class G1{constructor(t){var n,r,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:H1,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _d(this),this.idTokenSubscription=new _d(this),this.beforeStateQueue=new $1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await kr.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await us(this,{idToken:t}),r=await ut._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(xt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ds(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=I1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(xt(this.app))return Promise.reject(Un(this));const n=t?Dr(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(Un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return xt(this.app)?Promise.reject(Un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await V1(this),n=new G1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new $i("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await U1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Dt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=zh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&S1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function As(e){return Dr(e)}class _d{constructor(t){this.auth=t,this.observer=null,this.addObserver=ly(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K1(e){Ac=e}function Q1(e){return Ac.loadJS(e)}function q1(){return Ac.gapiScript}function J1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(e,t){const n=vh(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Pr(o,t??{}))return i;_t(i,"already-initialized")}return n.initialize({options:t})}function Z1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function ex(e,t,n){const r=As(e);L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=Dh(t),{host:a,port:l}=tx(t),c=l===null?"":`:${l}`,u={url:`${o}//${a}${c}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(Pr(u,r.config.emulator)&&Pr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Os(a)?(Y0(`${o}//${a}${c}`),q0("Auth",!0)):nx()}function Dh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function tx(e){const t=Dh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ed(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Ed(a)}}}function Ed(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function nx(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(t){return zt("not implemented")}_linkToIdToken(t,n){return zt("not implemented")}_getReauthenticationResolver(t){return zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(e,t){return P1(e,"POST","/v1/accounts:signInWithIdp",Pc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="http://localhost";class Ht extends Mh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ht(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Ic(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ht(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Sr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Sr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Sr(t,n)}buildRequest(){const t={requestUri:rx,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Vi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fr extends Lc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class mi extends Fr{static credentialFromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;return L("providerId"in n&&"signInMethod"in n,"argument-error"),Ht._fromParams(n)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return L(t.idToken||t.accessToken,"argument-error"),Ht._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return mi.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return mi.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:a,providerId:l}=t;if(!r&&!i&&!n&&!o||!l)return null;try{return new mi(l)._credential({idToken:n,accessToken:r,nonce:a,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Fr{constructor(){super("facebook.com")}static credential(t){return Ht._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Fr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ht._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Fr{constructor(){super("github.com")}static credential(t){return Ht._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Fr{constructor(){super("twitter.com")}static credential(t,n){return Ht._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await ut._fromIdTokenResponse(t,r,i),a=Cd(r);return new Or({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Cd(r);return new Or({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Cd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends kn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fs.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new fs(t,n,r,i)}}function Fh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?fs._fromErrorAndOperation(e,o,t,r):o})}async function ix(e,t,n=!1){const r=await zi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Or._forOperation(e,"link",r)}/**
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
 */async function ox(e,t,n=!1){const{auth:r}=e;if(xt(r.app))return Promise.reject(Un(r));const i="reauthenticate";try{const o=await zi(e,Fh(r,i,t,e),n);L(o.idToken,r,"internal-error");const a=Rc(o.idToken);L(a,r,"internal-error");const{sub:l}=a;return L(e.uid===l,r,"user-mismatch"),Or._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(e,t,n=!1){if(xt(e.app))return Promise.reject(Un(e));const r="signIn",i=await Fh(e,r,t),o=await Or._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function ax(e,t,n,r){return Dr(e).onIdTokenChanged(t,n,r)}function lx(e,t,n){return Dr(e).beforeAuthStateChanged(t,n)}const ps="__sak";/**
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
 */class Uh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ps,"1"),this.storage.removeItem(ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=1e3,ux=10;class Bh extends Uh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);W1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,ux):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},cx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Bh.type="LOCAL";const dx=Bh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh extends Uh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Wh.type="SESSION";const $h=Wh;/**
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
 */function fx(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ls{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ls(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async u=>u(n.origin,o)),c=await fx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ls.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class px{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,c)=>{const u=zc("",20);i.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(f.data.response);break;default:clearTimeout(p),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function hx(e){kt().location.href=e}/**
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
 */function Vh(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function gx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mx(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function vx(){return Vh()?self:null}/**
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
 */const Hh="firebaseLocalStorageDb",yx=1,hs="firebaseLocalStorage",Gh="fbase_key";class Yi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zs(e,t){return e.transaction([hs],t?"readwrite":"readonly").objectStore(hs)}function xx(){const e=indexedDB.deleteDatabase(Hh);return new Yi(e).toPromise()}function Il(){const e=indexedDB.open(Hh,yx);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(hs,{keyPath:Gh})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(hs)?t(r):(r.close(),await xx(),t(await Il()))})})}async function Id(e,t,n){const r=zs(e,!0).put({[Gh]:t,value:n});return new Yi(r).toPromise()}async function wx(e,t){const n=zs(e,!1).get(t),r=await new Yi(n).toPromise();return r===void 0?null:r.value}function jd(e,t){const n=zs(e,!0).delete(t);return new Yi(n).toPromise()}const bx=800,kx=3;class Yh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Il(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>kx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ls._getInstance(vx()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await gx(),!this.activeServiceWorker)return;this.sender=new px(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||mx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Il();return await Id(t,ps,"1"),await jd(t,ps),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Id(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>wx(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>jd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=zs(i,!1).getAll();return new Yi(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yh.type="LOCAL";const Sx=Yh;new Gi(3e4,6e4);/**
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
 */function Kh(e,t){return t?Dt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Dc extends Mh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Sr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Sr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Sr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function _x(e){return sx(e.auth,new Dc(e),e.bypassAuthState)}function Ex(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),ox(n,new Dc(e),e.bypassAuthState)}async function Cx(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),ix(n,new Dc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return _x;case"linkViaPopup":case"linkViaRedirect":return Cx;case"reauthViaPopup":case"reauthViaRedirect":return Ex;default:_t(this.auth,"internal-error")}}resolve(t){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=new Gi(2e3,1e4);async function jx(e,t,n){if(xt(e.app))return Promise.reject(pt(e,"operation-not-supported-in-this-environment"));const r=As(e);_1(e,t,Lc);const i=Kh(r,n);return new zn(r,"signInViaPopup",t,i).executeNotNull()}class zn extends Qh{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const t=zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ix.get())};t()}}zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="pendingRedirect",Lo=new Map;class Nx extends Qh{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Lo.get(this.auth._key());if(!t){try{const r=await Px(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Lo.set(this.auth._key(),t)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Px(e,t){const n=Ax(t),r=Ox(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Rx(e,t){Lo.set(e._key(),t)}function Ox(e){return Dt(e._redirectPersistence)}function Ax(e){return Ao(Tx,e.config.apiKey,e.name)}async function Lx(e,t,n=!1){if(xt(e.app))return Promise.reject(Un(e));const r=As(e),i=Kh(r,t),a=await new Nx(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=10*60*1e3;class Dx{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Mx(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!qh(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=zx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Td(t))}saveEventToCache(t){this.cachedEventUids.add(Td(t)),this.lastProcessedEventTime=Date.now()}}function Td(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function qh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Mx(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qh(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fx(e,t={}){return Mr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bx=/^https?/;async function Wx(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Fx(e);for(const n of t)try{if($x(n))return}catch{}_t(e,"unauthorized-domain")}function $x(e){const t=El(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Bx.test(n))return!1;if(Ux.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Vx=new Gi(3e4,6e4);function Nd(){const e=kt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Hx(e){return new Promise((t,n)=>{var r,i,o;function a(){Nd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Nd(),n(pt(e,"network-request-failed"))},timeout:Vx.get()})}if(!((i=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=kt().gapi)===null||o===void 0)&&o.load)a();else{const l=J1("iframefcb");return kt()[l]=()=>{gapi.load?a():n(pt(e,"network-request-failed"))},Q1(`${q1()}?onload=${l}`).catch(c=>n(c))}}).catch(t=>{throw zo=null,t})}let zo=null;function Gx(e){return zo=zo||Hx(e),zo}/**
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
 */const Yx=new Gi(5e3,15e3),Kx="__/auth/iframe",Qx="emulator/auth/iframe",qx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xx(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Nc(t,Qx):`https://${e.config.authDomain}/${Kx}`,r={apiKey:t.apiKey,appName:e.name,v:Hi},i=Jx.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Vi(r).slice(1)}`}async function Zx(e){const t=await Gx(e),n=kt().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:Xx(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qx,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=pt(e,"network-request-failed"),l=kt().setTimeout(()=>{o(a)},Yx.get());function c(){kt().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{o(a)})}))}/**
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
 */const ew={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tw=500,nw=600,rw="_blank",iw="http://localhost";class Pd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ow(e,t,n,r=tw,i=nw){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},ew),{width:r.toString(),height:i.toString(),top:o,left:a}),u=Re().toLowerCase();n&&(l=Nh(u)?rw:n),jh(u)&&(t=t||iw,c.scrollbars="yes");const p=Object.entries(c).reduce((f,[b,x])=>`${f}${b}=${x},`,"");if(B1(u)&&l!=="_self")return sw(t||"",l),new Pd(null);const h=window.open(t||"",l,p);L(h,e,"popup-blocked");try{h.focus()}catch{}return new Pd(h)}function sw(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aw="__/auth/handler",lw="emulator/auth/handler",cw=encodeURIComponent("fac");async function Rd(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Hi,eventId:i};if(t instanceof Lc){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",ay(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[p,h]of Object.entries({}))a[p]=h}if(t instanceof Fr){const p=t.getScopes().filter(h=>h!=="");p.length>0&&(a.scopes=p.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await e._getAppCheckToken(),u=c?`#${cw}=${encodeURIComponent(c)}`:"";return`${uw(e)}?${Vi(l).slice(1)}${u}`}function uw({config:e}){return e.emulator?Nc(e,lw):`https://${e.authDomain}/${aw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="webStorageSupport";class dw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$h,this._completeRedirectFn=Lx,this._overrideRedirectResult=Rx}async _openPopup(t,n,r,i){var o;Vt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Rd(t,n,r,El(),i);return ow(t,a,zc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Rd(t,n,r,El(),i);return hx(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Zx(t),r=new Dx(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(_a,{type:_a},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[_a];a!==void 0&&n(!!a),_t(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wx(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lh()||Th()||Oc()}}const fw=dw;var Od="@firebase/auth",Ad="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gw(e){Ai(new Rr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zh(e)},u=new Y1(r,i,o,c);return Z1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ai(new Rr("auth-internal",t=>{const n=As(t.getProvider("auth").getImmediate());return(r=>new pw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wr(Od,Ad,hw(e)),wr(Od,Ad,"esm2017")}/**
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
 */const mw=5*60,vw=ph("authIdTokenMaxAge")||mw;let Ld=null;const yw=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vw)return;const i=n==null?void 0:n.token;Ld!==i&&(Ld=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xw(e=c1()){const t=vh(e,"auth");if(t.isInitialized())return t.getImmediate();const n=X1(e,{popupRedirectResolver:fw,persistence:[Sx,dx,$h]}),r=ph("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=yw(o.toString());lx(n,a,()=>a(n.currentUser)),ax(n,l=>a(l))}}const i=H0("auth");return i&&ex(n,`http://${i}`),n}function ww(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}K1({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=pt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",ww().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gw("Browser");const Jh={apiKey:"AIzaSyCNsYDBSfYMJUxqbkC3Cb_w6CYGtW4Xf20",authDomain:"cloudvault-58446.firebaseapp.com",projectId:"cloudvault-58446",storageBucket:"cloudvault-58446.firebasestorage.app",messagingSenderId:"378535306521",appId:"1:378535306521:web:2e5fe57db925753d0f5188"},bw=["google","github","microsoft"];let Ea=null,zd=null;function kw(){return gs()?(Ea||(Ea=yh(Jh),zd=xw(Ea)),zd):null}function gs(){return!0}function Sw(){const e=Object.entries(Jh).filter(([,t])=>!t).map(([t])=>t);return{configured:gs(),providers:bw.map(t=>({id:t,configured:gs()})),missingEnv:e}}async function _w(e){const t=kw();if(!t)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env variables.");const r={google:new Pt,github:new Rt,microsoft:new mi("microsoft.com")}[e];if(!r)throw new Error("Unknown provider");const i=await jx(t,r),o=await i.user.getIdToken(),a=await fetch(`${St}/auth/firebase`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:o,email:i.user.email,fullName:i.user.displayName,avatarUrl:i.user.photoURL,provider:e})}),l=await a.json();if(!a.ok)throw new Error(l.error||l.message||"Firebase login failed");return l.success?l.data:l}function Ew({onVerified:e,onError:t,onExpire:n,theme:r="auto",size:i="normal"}){const o=m.useRef(null),a=m.useRef(null),[l,c]=m.useState(!1),[u,p]=m.useState(!0),[h,f]=m.useState(null);m.useEffect(()=>{if(window.turnstile)c(!0),p(!1);else{const x=document.querySelector('script[data-cv-turnstile="true"]'),k=x||document.createElement("script");k.src="https://challenges.cloudflare.com/turnstile/v0/api.js",k.async=!0,k.defer=!0,k.dataset.cvTurnstile="true",k.onload=()=>{c(!0),p(!1),console.log("TURNSTILE: Script loaded")},k.onerror=()=>{f("Failed to load Turnstile"),p(!1),t==null||t("Failed to load Turnstile")},x||document.head.appendChild(k)}return()=>{if(a.current&&window.turnstile)try{window.turnstile.remove(a.current),a.current=null}catch(x){console.error("TURNSTILE: Error removing widget:",x)}}},[]),m.useEffect(()=>{if(l&&o.current&&window.turnstile&&!a.current){const x="0x4AAAAAADkh2aePP5UGcXcH";console.log("TURNSTILE: Rendering widget with site key:",x);try{a.current=window.turnstile.render(o.current,{sitekey:x,theme:r,size:i,callback:k=>{console.log("TURNSTILE: Verification successful"),f(null),e==null||e(k)},"error-callback":k=>{console.error("TURNSTILE: Verification error:",k),f("Verification failed. Please try again."),t==null||t(k)},"expired-callback":()=>{console.log("TURNSTILE: Token expired"),f("Verification expired. Please try again."),n==null||n()}})}catch(k){console.error("TURNSTILE: Error rendering widget:",k),f("Failed to render Turnstile widget"),t==null||t("Failed to render Turnstile widget")}}},[l,r,i,e,t,n]);const b=()=>{if(a.current&&window.turnstile)try{window.turnstile.reset(a.current),f(null)}catch(x){console.error("TURNSTILE: Error resetting widget:",x)}};return m.useEffect(()=>{o.current&&(o.current.reset=b)},[]),u?s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",background:"var(--bg-secondary)",borderRadius:"var(--radius)",border:"1px solid var(--border)"},children:s.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid var(--border)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})}):h?s.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"var(--radius)",border:"1px solid var(--danger)",color:"var(--danger)",fontSize:"13px",textAlign:"center"},children:[h,s.jsx("button",{type:"button",onClick:b,style:{marginTop:"8px",padding:"6px 12px",background:"var(--danger)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px"},children:"Retry"})]}):s.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",minHeight:i==="compact"?140:70,overflow:"hidden"},children:s.jsx("div",{ref:o})})}const Tn=(e="")=>{const t=e.toLowerCase();return t.includes("failed to fetch")||t.includes("cannot reach")||t.includes("networkerror")?"Unable to reach CloudVault. Please check your connection.":t.includes("firebase")||t.includes("oauth")||t.includes("access token")?"Social login failed. Please try again.":e||"Something went wrong. Please try again."},Ca=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),Dd=e=>e.length>=8&&/[A-Z]/.test(e)&&/[a-z]/.test(e)&&/\d/.test(e);function Cw({size:e=20}){return s.jsx("span",{style:{display:"inline-block",width:e,height:e,border:"2.5px solid rgba(255,255,255,0.25)",borderTopColor:"#fff",borderRadius:"50%",animation:"cv-spin 0.7s linear infinite"}})}function Iw({size:e=42}){return s.jsx("span",{style:{width:e,height:e,borderRadius:"50%",background:"var(--mega-red, #d90007)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(217,0,7,.35)",flexShrink:0,overflow:"hidden"},children:s.jsx("img",{src:ge.logoImage,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function xo({label:e,type:t="text",value:n,onChange:r,placeholder:i,autoFocus:o,error:a}){const[l,c]=m.useState(!1),u=n&&n.length>0;return s.jsxs("div",{style:{position:"relative",marginBottom:4},children:[s.jsx("label",{style:{position:"absolute",left:16,top:l||u?8:"50%",transform:l||u?"translateY(0) scale(0.82)":"translateY(-50%)",transformOrigin:"left top",fontSize:l||u?11:14,fontWeight:600,color:l?"var(--cv-accent)":a?"var(--cv-danger)":"var(--cv-text-muted)",transition:"all 0.18s cubic-bezier(0.4,0,0.2,1)",pointerEvents:"none",zIndex:1,letterSpacing:l||u?"0.04em":"0",textTransform:l||u?"uppercase":"none"},children:e}),s.jsx("input",{type:t,value:n,onChange:r,onFocus:()=>c(!0),onBlur:()=>c(!1),autoFocus:o,placeholder:l?i:"",style:{width:"100%",padding:"28px 16px 10px",background:"var(--cv-bg-card)",border:`1.5px solid ${a?"var(--cv-danger)":l?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:"var(--cv-radius-lg)",color:"var(--cv-text)",fontSize:15,outline:"none",transition:"border-color 0.18s ease, box-shadow 0.18s ease",boxShadow:l?`0 0 0 3px ${a?"rgba(239,68,68,0.12)":"rgba(99,102,241,0.12)"}`:"none"}}),a&&s.jsx("div",{style:{fontSize:12,color:"var(--cv-danger)",marginTop:4,paddingLeft:4,fontWeight:500},children:a})]})}function jw({value:e,onChange:t}){const n=[m.useRef(),m.useRef(),m.useRef(),m.useRef(),m.useRef(),m.useRef()],r=(e+"      ").slice(0,6).split(""),i=(a,l)=>{var c,u;if(l.key==="Backspace"){if(r[a]!==" "){const p=r.map((h,f)=>f===a?" ":h).join("").trimEnd();t(p)}else if(a>0){(c=n[a-1].current)==null||c.focus();const p=r.map((h,f)=>f===a-1?" ":h).join("").trimEnd();t(p)}}else if(l.key>="0"&&l.key<="9"){l.preventDefault();const p=r.map((h,f)=>f===a?l.key:h).join("").replace(/ /g,"");t(p.slice(0,6)),a<5&&((u=n[a+1].current)==null||u.focus())}},o=a=>{var c;const l=a.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);l&&(t(l),(c=n[Math.min(l.length,5)].current)==null||c.focus())};return s.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",margin:"8px 0"},children:n.map((a,l)=>{var c,u,p,h;return s.jsx("input",{ref:a,type:"text",inputMode:"numeric",maxLength:1,value:((c=r[l])==null?void 0:c.trim())||"",onKeyDown:f=>i(l,f),onPaste:o,onChange:()=>{},style:{width:52,height:60,textAlign:"center",fontSize:24,fontWeight:800,background:"var(--cv-bg-card)",border:`2px solid ${(u=r[l])!=null&&u.trim()?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:14,color:"var(--cv-text)",outline:"none",transition:"border-color 0.18s ease, transform 0.1s ease",transform:(p=r[l])!=null&&p.trim()?"scale(1.05)":"scale(1)",boxShadow:(h=r[l])!=null&&h.trim()?"0 0 0 3px rgba(99,102,241,0.15)":"none"}},l)})})}function Tw({label:e,icon:t,onClick:n,disabled:r}){const[i,o]=m.useState(!1);return s.jsxs("button",{type:"button",onClick:n,disabled:r,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,width:"100%",padding:"12px 16px",minHeight:48,background:i?"rgba(0,183,79,.08)":"var(--bg-card)",border:i?"1px solid rgba(0,183,79,.35)":"1px solid var(--border)",borderRadius:14,cursor:r?"not-allowed":"pointer",color:"var(--text)",fontSize:14,fontWeight:700,transition:"all 0.2s ease",opacity:r?.5:1,boxShadow:i?"0 12px 28px rgba(0,0,0,.08)":"none"},children:[s.jsx("span",{style:{display:"flex",alignItems:"center"},children:t}),s.jsxs("span",{children:["Continue with ",e]})]})}function Nw({password:e}){if(!e)return null;const t=[{label:"8+ chars",ok:e.length>=8},{label:"Uppercase",ok:/[A-Z]/.test(e)},{label:"Lowercase",ok:/[a-z]/.test(e)},{label:"Number",ok:/\d/.test(e)}],n=t.filter(i=>i.ok).length,r=["var(--cv-danger)","var(--cv-danger)","#f59e0b","#10b981"];return s.jsxs("div",{style:{marginTop:6},children:[s.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:[0,1,2,3].map(i=>s.jsx("div",{style:{flex:1,height:3,borderRadius:99,background:i<n?r[n-1]:"var(--cv-border)",transition:"background 0.3s ease"}},i))}),s.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:t.map(i=>s.jsxs("span",{style:{fontSize:11,color:i.ok?"#10b981":"var(--cv-text-muted)",fontWeight:500},children:[i.ok?"✓":"○"," ",i.label]},i.label))})]})}const O={LOGIN:"login",REGISTER:"register",FORGOT:"forgot",VERIFY_OTP:"verify_otp",RESET_PASSWORD:"reset_password"};function Pw({onAuth:e,onBack:t,onNeedsVerification:n,initialMode:r="login"}){const[i,o]=m.useState(r==="login"?O.LOGIN:O.REGISTER),[a,l]=m.useState(!1),[c,u]=m.useState(""),[p,h]=m.useState(""),[f,b]=m.useState("forward"),[x,k]=m.useState(""),[A,g]=m.useState(""),[d,v]=m.useState(""),[w,E]=m.useState(""),[C,j]=m.useState(""),[R,V]=m.useState(""),[N,pe]=m.useState(!0),[he,be]=m.useState(!1),[gt,Sn]=m.useState(!1),[Le,Ye]=m.useState(0),[T,z]=m.useState(null),[D,K]=m.useState(!1),[ne,Ke]=m.useState(0),ce=!0,Et=gs();Sw();const[ke,ae]=m.useState({});m.useEffect(()=>{if(Le<=0)return;const S=setTimeout(()=>Ye(G=>G-1),1e3);return()=>clearTimeout(S)},[Le]);const Ct=S=>{b("forward"),u(""),h(""),ae({}),o(S)},Ur=()=>{b("back"),u(""),h(""),ae({}),i===O.REGISTER||i===O.FORGOT?o(O.LOGIN):i===O.VERIFY_OTP?o(O.FORGOT):i===O.RESET_PASSWORD?o(O.VERIFY_OTP):t==null||t()},Ie=()=>{z(null),K(!1),Ke(S=>S+1)},Ki=async()=>{var G,It;const S={};if(Ca(x)||(S.email="Enter a valid email address"),A||(S.password="Password is required"),Object.keys(S).length){ae(S);return}if(ce&&!D){u("Please complete the security check");return}l(!0),u("");try{const Q=await lt("/auth/login",{method:"POST",body:JSON.stringify({email:x,password:A,rememberMe:N,...ce&&{turnstileToken:T}})});if(!(Q!=null&&Q.accessToken))throw new Error("Login failed. Please try again.");const En=N?localStorage:sessionStorage;En.setItem("cv_token",Q.accessToken),Q.refreshToken&&En.setItem("cv_refreshToken",Q.refreshToken),En.setItem("cv_user",((G=Q.user)==null?void 0:G.fullName)||x),e(Q.accessToken,Q.refreshToken,((It=Q.user)==null?void 0:It.fullName)||x,Q.user,N)}catch(Q){u(Tn(Q.message)),Ie()}l(!1)},Yt=async()=>{const S={};if((!w||w.trim().length<2)&&(S.fullName="Full name must be at least 2 characters"),Ca(x)||(S.email="Enter a valid email address"),Dd(A)||(S.password="Password must be 8+ chars with uppercase, lowercase, and number"),A!==d&&(S.confirmPassword="Passwords do not match"),Object.keys(S).length){ae(S);return}if(ce&&!D){u("Please complete the security check");return}l(!0),u("");try{await lt("/auth/register",{method:"POST",body:JSON.stringify({email:x,password:A,fullName:w,...ce&&{turnstileToken:T}})}),h("Account created! Check your email to verify your account, then sign in."),Ct(O.LOGIN)}catch(G){u(Tn(G.message)),Ie()}l(!1)},Ds=async()=>{if(!Ca(x)){ae({email:"Enter a valid email address"});return}if(ce&&!D){u("Please complete the security check");return}l(!0),u("");try{await lt("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:x,...ce&&{turnstileToken:T}})}),Ye(60),Ct(O.VERIFY_OTP),h("A 6-digit OTP has been sent to your email.")}catch(S){u(Tn(S.message)),Ie()}l(!1)},Kt=async()=>{if(!(Le>0)){l(!0),u("");try{await lt("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:x})}),Ye(60),h("A new OTP has been sent.")}catch(S){u(Tn(S.message))}l(!1)}},Qi=async()=>{if(C.length!==6){u("Enter the 6-digit code from your email");return}l(!0),u("");try{const S=await lt("/auth/verify-otp",{method:"POST",body:JSON.stringify({email:x,otp:C})});V(S.resetToken),Ct(O.RESET_PASSWORD)}catch(S){u(Tn(S.message)),j("")}l(!1)},_n=async()=>{const S={};if(Dd(A)||(S.password="Password must be 8+ chars with uppercase, lowercase, and number"),A!==d&&(S.confirmPassword="Passwords do not match"),Object.keys(S).length){ae(S);return}l(!0),u("");try{await lt("/auth/reset-password",{method:"POST",body:JSON.stringify({token:R,newPassword:A})}),h("Password reset successfully! Please sign in."),g(""),v(""),Ct(O.LOGIN)}catch(G){u(Tn(G.message))}l(!1)},rt=async S=>{var G,It;if(!Et){u("Social login is not available. Please use email and password.");return}l(!0),u("");try{const Q=await _w(S);if(!(Q!=null&&Q.accessToken))throw new Error("Social login failed.");localStorage.setItem("cv_token",Q.accessToken),Q.refreshToken&&localStorage.setItem("cv_refreshToken",Q.refreshToken),localStorage.setItem("cv_user",((G=Q.user)==null?void 0:G.fullName)||x),e(Q.accessToken,Q.refreshToken,((It=Q.user)==null?void 0:It.fullName)||x,Q.user,!0)}catch(Q){u(Tn(Q.message))}l(!1)},Qn={[O.LOGIN]:{title:"Welcome back",sub:`Sign in to ${ge.name}`},[O.REGISTER]:{title:"Create account",sub:"Start your CloudVault journey"},[O.FORGOT]:{title:"Forgot password?",sub:"We'll send a code to your email"},[O.VERIFY_OTP]:{title:"Enter your code",sub:`Sent to ${x||"your email"}`},[O.RESET_PASSWORD]:{title:"New password",sub:"Choose a strong password"}},Qe=!a&&(!ce||D||i===O.VERIFY_OTP||i===O.RESET_PASSWORD),qn=()=>{i===O.LOGIN?Ki():i===O.REGISTER?Yt():i===O.FORGOT?Ds():i===O.VERIFY_OTP?Qi():i===O.RESET_PASSWORD&&_n()},Jn={[O.LOGIN]:"Sign in",[O.REGISTER]:"Create account",[O.FORGOT]:"Send code",[O.VERIFY_OTP]:"Verify code",[O.RESET_PASSWORD]:"Reset password"}[i];return s.jsxs("div",{className:"auth-splash",children:[s.jsx("style",{children:Fn}),s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"auth-cloud-logo",style:{marginBottom:48},children:[s.jsx("div",{className:"auth-cloud-bg"}),s.jsx("div",{className:"auth-mega-mark",children:s.jsx("div",{className:"auth-mega-circle",children:s.jsx("img",{src:ge.logoImage,alt:""})})})]}),s.jsxs("div",{className:"cv-auth-card",style:{width:"100%",maxWidth:440,background:"rgba(20, 20, 20, .96)",borderRadius:20,border:"1px solid rgba(255,255,255,.08)",boxShadow:"0 32px 80px rgba(0,0,0,0.55)",overflow:"hidden",position:"relative"},children:[s.jsx("div",{style:{height:3,background:"var(--cv-accent)",position:"absolute",top:0,left:0,right:0}}),s.jsxs("div",{style:{padding:"36px 32px 32px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:28,justifyContent:"center"},children:[s.jsx(Iw,{size:36}),s.jsx("div",{style:{fontSize:18,fontWeight:800,color:"var(--cv-text)",letterSpacing:"-0.02em"},children:ge.name})]}),i!==O.LOGIN&&s.jsx("button",{type:"button",onClick:Ur,style:{display:"flex",alignItems:"center",gap:6,marginBottom:24,background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,padding:"4px 0",transition:"color 0.15s"},onMouseEnter:S=>S.currentTarget.style.color="var(--text)",onMouseLeave:S=>S.currentTarget.style.color="var(--text-muted)",children:"← Back"}),s.jsxs("div",{className:"cv-auth-step",style:{marginBottom:28},children:[s.jsx("h1",{style:{fontSize:26,fontWeight:800,color:"var(--text)",letterSpacing:"-0.03em",margin:"0 0 4px"},children:Qn[i].title}),s.jsx("p",{style:{fontSize:14,color:"var(--text-muted)",margin:0,fontWeight:500},children:Qn[i].sub})]}),(i===O.LOGIN||i===O.REGISTER)&&s.jsx("div",{style:{display:"flex",gap:4,background:"var(--surface-raised)",borderRadius:14,padding:4,marginBottom:24,border:"1px solid var(--border)"},children:[O.LOGIN,O.REGISTER].map(S=>s.jsx("button",{type:"button",onClick:()=>Ct(S),style:{flex:1,padding:"9px 12px",borderRadius:10,border:"none",background:i===S?"var(--bg-card)":"transparent",color:i===S?"var(--text)":"var(--text-muted)",fontSize:14,fontWeight:i===S?700:500,cursor:"pointer",boxShadow:i===S?"0 2px 8px rgba(0,0,0,0.08)":"none",transition:"all 0.18s ease"},children:S===O.LOGIN?"Sign In":"Sign Up"},S))}),s.jsxs("div",{className:"cv-auth-step",style:{display:"flex",flexDirection:"column",gap:14},children:[i===O.REGISTER&&s.jsx(xo,{label:"Full Name",value:w,onChange:S=>{E(S.target.value),ae(G=>({...G,fullName:""}))},placeholder:"Jane Smith",autoFocus:!0,error:ke.fullName}),[O.LOGIN,O.REGISTER,O.FORGOT].includes(i)&&s.jsx(xo,{label:"Email Address",type:"email",value:x,onChange:S=>{k(S.target.value),ae(G=>({...G,email:""}))},placeholder:"you@example.com",autoFocus:i===O.LOGIN||i===O.FORGOT,error:ke.email}),[O.LOGIN,O.REGISTER,O.RESET_PASSWORD].includes(i)&&s.jsxs("div",{children:[s.jsxs("div",{style:{position:"relative"},children:[s.jsx(xo,{label:"Password",type:he?"text":"password",value:A,onChange:S=>{g(S.target.value),ae(G=>({...G,password:""}))},placeholder:i===O.LOGIN?"Your password":"Min 8 chars, A-Z, 0-9",autoFocus:i===O.RESET_PASSWORD,error:ke.password}),s.jsx("button",{type:"button",onClick:()=>be(S=>!S),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:ke.password?-10:0},children:he?"Hide":"Show"})]}),(i===O.REGISTER||i===O.RESET_PASSWORD)&&s.jsx(Nw,{password:A})]}),[O.REGISTER,O.RESET_PASSWORD].includes(i)&&s.jsxs("div",{style:{position:"relative"},children:[s.jsx(xo,{label:"Confirm Password",type:gt?"text":"password",value:d,onChange:S=>{v(S.target.value),ae(G=>({...G,confirmPassword:""}))},placeholder:"Repeat your password",error:ke.confirmPassword}),s.jsx("button",{type:"button",onClick:()=>Sn(S=>!S),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:ke.confirmPassword?-10:0},children:gt?"Hide":"Show"})]}),i===O.VERIFY_OTP&&s.jsxs("div",{children:[s.jsx(jw,{value:C,onChange:j}),s.jsxs("div",{style:{textAlign:"center",marginTop:12},children:[s.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:["Didn't get the code?"," "]}),s.jsx("button",{type:"button",onClick:Kt,disabled:Le>0||a,style:{background:"none",border:"none",cursor:Le>0?"default":"pointer",color:Le>0?"var(--text-muted)":"var(--accent-blue)",fontSize:13,fontWeight:600},children:Le>0?`Resend in ${Le}s`:"Resend"})]})]}),i===O.LOGIN&&s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},children:[s.jsx("input",{type:"checkbox",checked:N,onChange:S=>pe(S.target.checked),style:{width:16,height:16,accentColor:"var(--accent-blue)"}}),s.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:500},children:"Remember me"})]}),s.jsx("button",{type:"button",onClick:()=>Ct(O.FORGOT),style:{background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:13,fontWeight:600},children:"Forgot password?"})]})]}),c&&s.jsxs("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:12,color:"#ef4444",fontSize:13,fontWeight:500,lineHeight:1.5},children:[c,c.includes("verify your email")&&s.jsx("button",{type:"button",onClick:async()=>{try{await lt("/auth/resend-verification",{method:"POST",body:JSON.stringify({email:x})}),h("Verification email resent. Check your inbox."),u("")}catch{}},style:{display:"block",marginTop:8,background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:12,fontWeight:600},children:"Resend verification email →"})]}),p&&s.jsx("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:12,color:"#10b981",fontSize:13,fontWeight:500,lineHeight:1.5},children:p}),ce&&[O.LOGIN,O.REGISTER,O.FORGOT].includes(i)&&s.jsx("div",{style:{marginTop:16},children:s.jsx(Ew,{onVerified:S=>{z(S),K(!0)},onError:()=>{u("Security check failed. Please refresh."),K(!1)},onExpire:()=>{z(null),K(!1)}},ne)}),s.jsx("button",{type:"button",onClick:qn,disabled:!Qe,style:{width:"100%",marginTop:20,padding:"14px 20px",background:Qe?"var(--cv-accent)":"var(--surface-raised)",color:Qe?"#fff":"var(--text-muted)",border:"none",borderRadius:14,fontSize:15,fontWeight:700,cursor:Qe?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"all 0.2s ease",boxShadow:Qe?"0 16px 34px rgba(217,0,7,0.28)":"none",transform:"translateY(0)"},onMouseEnter:S=>{Qe&&(S.currentTarget.style.transform="translateY(-1px)")},onMouseLeave:S=>{S.currentTarget.style.transform="translateY(0)"},children:a?s.jsx(Cw,{}):Jn}),[O.LOGIN,O.REGISTER].includes(i)&&s.jsxs("div",{style:{marginTop:20},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:"or"}),s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[{id:"google",label:"Google",icon:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),s.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),s.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),s.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})},{id:"github",label:"GitHub",icon:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})})},{id:"microsoft",label:"Microsoft",icon:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M10 0H0v10h10V0z",fill:"#F25022"}),s.jsx("path",{d:"M21 0H11v10h10V0z",fill:"#7FBA00"}),s.jsx("path",{d:"M10 11H0v10h10V11z",fill:"#00A4EF"}),s.jsx("path",{d:"M21 11H11v10h10V11z",fill:"#FFB900"})]})}].map(S=>s.jsx(Tw,{label:S.label,icon:S.icon,disabled:a||!Et,onClick:()=>rt(S.id)},S.id))})]}),i===O.LOGIN&&s.jsx("div",{style:{textAlign:"center",marginTop:20},children:s.jsx("button",{type:"button",onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:500},children:"← Back to home"})})]})]})]})}function Rw({size:e=22}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Ow({file:e,token:t,onClose:n}){const[r,i]=m.useState(null),[o,a]=m.useState(""),[l,c]=m.useState(!0),[u,p]=m.useState(""),[h,f]=m.useState(1),[b,x]=m.useState(0),[k,A]=m.useState(!1),g=T0(e.mimeType);m.useEffect(()=>{let w=null,E=!1;return(async()=>{c(!0),p("");try{const C=await _c(e.id,t,{disposition:"preview"});if(E)return;if(g==="text"){const j=await C.text();a(j)}else w=URL.createObjectURL(C),i(w)}catch(C){E||p(C.message||"Preview failed")}finally{E||c(!1)}})(),()=>{E=!0,w&&URL.revokeObjectURL(w)}},[e.id,t,g]);const d=(w,E,C=!1)=>s.jsx("button",{type:"button",onClick:E,disabled:C,style:{padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",cursor:C?"not-allowed":"pointer",fontFamily:"var(--font)",fontSize:12,fontWeight:600},children:w}),v=()=>l?s.jsx("div",{style:{padding:48,textAlign:"center"},children:s.jsx(Rw,{size:32})}):u?s.jsx("p",{style:{color:"var(--danger)",padding:24,textAlign:"center"},children:u}):g==="image"&&r?s.jsx("img",{src:r,alt:e.name,style:{maxWidth:k?"96vw":"80vw",maxHeight:k?"90vh":"70vh",borderRadius:12,transform:`scale(${h}) rotate(${b}deg)`,transition:"transform .2s ease"}}):g==="pdf"&&r?s.jsx("iframe",{src:r,title:e.name,style:{width:"75vw",height:"75vh",border:"none",borderRadius:12}}):g==="video"&&r?s.jsx("video",{src:r,controls:!0,style:{maxWidth:"80vw",maxHeight:"75vh",borderRadius:12}}):g==="audio"&&r?s.jsx("audio",{src:r,controls:!0,style:{width:"min(480px, 80vw)"}}):g==="text"?s.jsx("pre",{style:{maxWidth:"80vw",maxHeight:"70vh",overflow:"auto",padding:16,background:"var(--bg-card)",borderRadius:12,color:"var(--text)",fontSize:13,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:o}):s.jsx("p",{style:{padding:24,color:"var(--text-muted)"},children:"Preview not available for this file type."});return s.jsx("div",{onClick:n,style:{position:"fixed",inset:0,zIndex:1e3,background:k?"#000":"rgba(0,0,0,.88)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)",animation:"fadeIn .2s ease"},children:s.jsxs("div",{onClick:w=>w.stopPropagation(),style:{background:k?"transparent":"var(--bg-primary)",borderRadius:k?0:20,border:k?"none":"1.5px solid var(--border)",maxWidth:k?"100vw":"95vw",maxHeight:k?"100vh":"95vh",width:k?"100%":void 0,height:k?"100%":void 0,overflow:"auto",padding:k?16:24,boxShadow:k?"none":"var(--shadow)",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:12},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:700,fontSize:16,flex:1,overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),g==="image"&&s.jsxs("div",{style:{display:"flex",gap:6},children:[d("−",()=>f(w=>Math.max(.25,w-.25))),d("+",()=>f(w=>Math.min(4,w+.25))),d("↻",()=>x(w=>(w+90)%360)),d(k?"⊡":"⛶",()=>A(w=>!w))]}),s.jsx("button",{type:"button",onClick:n,style:{background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:8,color:"var(--text-secondary)",cursor:"pointer",width:32,height:32},children:"✕"})]}),s.jsx("div",{style:{display:"flex",justifyContent:"center"},children:v()})]})})}function Aw({fileId:e,token:t,alt:n,mimeType:r}){const[i,o]=m.useState(null),[a,l]=m.useState(!1);return m.useEffect(()=>{if(!e||!t||!(r!=null&&r.startsWith("image/")))return;let c=null,u=!1;return _c(e,t,{disposition:"preview"}).then(p=>{u||(c=URL.createObjectURL(p),o(c))}).catch(()=>{u||l(!0)}),()=>{u=!0,c&&URL.revokeObjectURL(c)}},[e,t,r]),!(r!=null&&r.startsWith("image/"))||a?s.jsx("div",{style:{fontSize:44,display:"flex"},children:Rs(r)}):i?s.jsx("img",{src:i,alt:n,style:{width:"100%",height:"100%",objectFit:"cover"},onError:()=>l(!0)}):s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite"}})}function Lw({trashedFiles:e,trashedFolders:t,loading:n,onRestoreFile:r,onRestoreFolder:i,onPermanentDelete:o,onEmptyTrash:a,onBack:l}){return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:l,style:zw,children:"← Back to My Cloud"}),s.jsx("h2",{style:{color:"var(--text)",fontWeight:800,fontSize:22,marginTop:8},children:"Trash"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"Items in trash still count toward storage until permanently deleted."})]}),(e.length>0||t.length>0)&&s.jsx("button",{type:"button",onClick:a,style:Dw,children:"Empty trash"})]}),n?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading trash…"}):e.length===0&&t.length===0?s.jsxs("div",{style:{textAlign:"center",padding:64,color:"var(--text-muted)",border:"1px dashed var(--border)",borderRadius:16},children:[s.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🗑️"}),s.jsx("div",{style:{fontWeight:700},children:"Trash is empty"})]}):s.jsxs(s.Fragment,{children:[t.length>0&&s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FOLDERS"}),t.map(c=>s.jsx(Md,{icon:"📁",name:c.name,meta:"Folder",onRestore:()=>i(c.id)},c.id))]}),e.length>0&&s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FILES"}),e.map(c=>s.jsx(Md,{icon:Rs(c.mimeType),name:c.name,meta:`${Ne(c.size)} · ${Wi(c.trashedAt||c.deletedAt)}`,onRestore:()=>r(c.id),onDelete:()=>o(c)},c.id))]})]})]})}function Md({icon:e,name:t,meta:n,onRestore:r,onDelete:i}){return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,marginBottom:8},children:[s.jsx("span",{style:{fontSize:24},children:e}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:n})]}),s.jsx("button",{type:"button",onClick:r,style:Fd,children:"Restore"}),i&&s.jsx("button",{type:"button",onClick:i,style:{...Fd,color:"var(--danger)"},children:"Delete forever"})]})}const zw={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"},Dw={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontFamily:"var(--font)"},Fd={padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--font)"};function Mw({file:e,mode:t,folders:n,currentFolderId:r,onConfirm:i,onCancel:o}){const[a,l]=m.useState(r||""),[c,u]=m.useState(e.name),p=Xh(n);return s.jsx("div",{onClick:o,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:h=>h.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(420px, 92vw)",animation:"scaleIn .2s ease"},children:[s.jsxs("h3",{style:{color:"var(--text)",fontWeight:700,fontSize:18,marginBottom:8},children:[t==="move"?"Move":"Copy"," file"]}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:20},children:e.name}),s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"Destination folder"}),s.jsxs("select",{value:a,onChange:h=>l(h.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"},children:[s.jsx("option",{value:"",children:"My Cloud (root)"}),p.map(h=>s.jsxs("option",{value:h.id,disabled:h.id===e.folderId,children:["—".repeat(h.depth)," ",h.name]},h.id))]}),t==="copy"&&s.jsxs(s.Fragment,{children:[s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"New name (optional)"}),s.jsx("input",{value:c,onChange:h=>u(h.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"}})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:o,style:Zh,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>i({targetFolderId:a||null,newName:t==="copy"?c:void 0}),style:Fw,children:t==="move"?"Move":"Copy"})]})]})})}function Xh(e,t=0){var r;const n=[];for(const i of e)n.push({...i,depth:t}),(r=i.children)!=null&&r.length&&n.push(...Xh(i.children,t+1));return n}const Zh={padding:"10px 20px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},Fw={...Zh,border:"none",background:"var(--accent)",color:"#fff"};function Uw({file:e,allTags:t,onSave:n,onCancel:r}){const[i,o]=m.useState(e.tags||[]),[a,l]=m.useState(""),c=u=>{const p=u.trim().toLowerCase();!p||i.includes(p)||i.length>=20||(o([...i,p]),l(""))};return s.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:u=>u.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(440px, 92vw)"},children:[s.jsx("h3",{style:{color:"var(--text)",fontWeight:700,marginBottom:4},children:"Edit tags"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:16},children:e.name}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12},children:i.map(u=>s.jsxs("span",{style:{background:"rgba(240,22,58,.15)",color:"var(--accent)",padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[u,s.jsx("button",{type:"button",onClick:()=>o(i.filter(p=>p!==u)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:"×"})]},u))}),s.jsx("input",{value:a,onChange:u=>l(u.target.value),onKeyDown:u=>{u.key==="Enter"&&(u.preventDefault(),c(a))},placeholder:"Add tag and press Enter",style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",marginBottom:12}}),t.length>0&&s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6},children:"Suggestions"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:t.filter(u=>!i.includes(u)).slice(0,12).map(u=>s.jsxs("button",{type:"button",onClick:()=>c(u),style:{padding:"4px 10px",borderRadius:20,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",fontSize:12,cursor:"pointer"},children:["+ ",u]},u))})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:r,style:eg,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>n(i),style:Bw,children:"Save tags"})]})]})})}const eg={padding:"10px 18px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},Bw={...eg,border:"none",background:"var(--accent)",color:"#fff"};function Ww({file:e,onShare:t,onCancel:n}){const[r,i]=m.useState("link"),[o,a]=m.useState("view"),[l,c]=m.useState("private"),[u,p]=m.useState(""),[h,f]=m.useState(""),[b,x]=m.useState(""),[k,A]=m.useState(""),[g,d]=m.useState(!1),[v,w]=m.useState(""),[E,C]=m.useState(!1),j=m.useMemo(()=>{const N=[o==="view"?"View only":o==="download"?"Download allowed":"Can edit"];return h&&N.push("Password protected"),b&&N.push("Expires automatically"),k&&N.push(`${k} view limit`),N.join(" · ")},[o,h,b,k]),R=async()=>{var N;d(!0);try{const pe={shareType:r,permission:o,visibility:l,...h&&{password:h},...b&&{expiresAt:new Date(b).toISOString()},...k&&{maxViews:Number(k)},...r==="email"&&{sharedWithEmail:u,email:u}},he=await t(pe),be=(he==null?void 0:he.shareUrl)||((N=he==null?void 0:he.data)==null?void 0:N.shareUrl);be&&w(be)}finally{d(!1)}},V=async()=>{var N;v&&(await((N=navigator.clipboard)==null?void 0:N.writeText(v)),C(!0),setTimeout(()=>C(!1),1500))};return s.jsx("div",{className:"share-modal-backdrop",onClick:n,role:"dialog","aria-modal":"true","aria-labelledby":"share-modal-title",children:s.jsxs("div",{className:"share-modal-panel",onClick:N=>N.stopPropagation(),children:[s.jsxs("div",{className:"share-modal-hero",children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:11,color:"var(--accent-blue)",fontWeight:900,textTransform:"uppercase",letterSpacing:1},children:"Secure sharing"}),s.jsx("h3",{id:"share-modal-title",style:{fontWeight:900,fontSize:26,margin:"8px 0 5px",color:"var(--text)"},children:"Share file"}),s.jsx("p",{style:{color:"var(--text-secondary)",fontSize:14,overflowWrap:"anywhere"},children:e.name})]}),s.jsx("button",{type:"button",title:"Close","aria-label":"Close share dialog",onClick:n,className:"icon-btn",children:"×"})]}),s.jsxs("div",{className:"share-modal-body",children:[s.jsxs("div",{className:"share-modal-grid",children:[s.jsx(Ud,{label:"Method",value:r,onChange:i,options:[["link","Link"],["email","Email"]]}),s.jsx(Ud,{label:"Access",value:l,onChange:c,options:[["private","Private"],["public","Public"],["protected","Protected"]]})]}),r==="email"&&s.jsx(tr,{label:"Recipient email",children:s.jsx("input",{type:"email",value:u,onChange:N=>p(N.target.value),placeholder:"teammate@company.com",className:"input-field",style:{minHeight:48}})}),s.jsx(tr,{label:"Permission",children:s.jsxs("select",{value:o,onChange:N=>a(N.target.value),className:"select-field",style:{width:"100%",minHeight:48,padding:"12px 14px"},children:[s.jsx("option",{value:"view",children:"View only"}),s.jsx("option",{value:"download",children:"View and download"}),s.jsx("option",{value:"edit",children:"Edit metadata"})]})}),s.jsxs("div",{className:"share-modal-grid",children:[s.jsx(tr,{label:"Password (optional)",children:s.jsx("input",{type:"password",value:h,onChange:N=>f(N.target.value),placeholder:"Leave blank for no password",className:"input-field",style:{minHeight:48},autoComplete:"new-password"})}),s.jsx(tr,{label:"Max views",children:s.jsx("input",{type:"number",min:"1",value:k,onChange:N=>A(N.target.value),placeholder:"Unlimited",className:"input-field",style:{minHeight:48}})})]}),s.jsx(tr,{label:"Expiration",children:s.jsx("input",{type:"datetime-local",value:b,onChange:N=>x(N.target.value),className:"input-field",style:{minHeight:48}})}),s.jsxs("div",{className:"share-summary-box",children:[s.jsx("strong",{style:{color:"var(--text)"},children:"Share policy"}),s.jsx("span",{children:j})]}),v&&s.jsxs("div",{className:"share-result-box",children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6,fontWeight:800,textTransform:"uppercase"},children:"Share link"}),s.jsx("div",{style:{fontSize:13,wordBreak:"break-all",color:"var(--accent-blue)"},children:v}),s.jsx("button",{type:"button",onClick:V,className:"btn-primary",style:{marginTop:12},children:E?"Copied!":"Copy link"})]}),s.jsxs("div",{className:"share-modal-footer",children:[s.jsx("button",{type:"button",onClick:n,className:"btn-secondary",children:"Close"}),s.jsx("button",{type:"button",disabled:g||r==="email"&&!u,onClick:R,className:"btn-primary",children:g?"Creating…":v?"Create another":r==="email"?"Send invitation":"Create secure link"})]})]})]})})}function Ud({label:e,value:t,onChange:n,options:r}){return s.jsx(tr,{label:e,children:s.jsx("div",{className:"share-segmented",role:"group","aria-label":e,children:r.map(([i,o])=>s.jsx("button",{type:"button",onClick:()=>n(i),className:`share-segment-btn${t===i?" active":""}`,"aria-pressed":t===i,children:o},i))})})}function tr({label:e,children:t}){return s.jsxs("div",{style:{marginBottom:14},children:[s.jsx("label",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)",display:"block",marginBottom:6},children:e}),t]})}function $w({stats:e,usage:t,onBack:n}){const r=(t==null?void 0:t.breakdown)||{},i=Object.values(r).reduce((l,c)=>l+c,0)||1,o=e.storageQuota>0?Math.min(100,Math.round(e.storageUsed/e.storageQuota*100)):0,a=[{key:"images",label:"Images",color:"#22c55e"},{key:"videos",label:"Videos",color:"#2563eb"},{key:"documents",label:"Documents",color:"#f59e0b"},{key:"audio",label:"Audio",color:"#a78bfa"},{key:"other",label:"Other",color:"#94a3b8"}];return s.jsxs("div",{style:{animation:"fadeIn .3s ease"},children:[s.jsx("button",{type:"button",onClick:n,className:"page-back-btn",children:"← Back to My Drive"}),s.jsx("h2",{style:{fontWeight:900,fontSize:26,margin:"12px 0 8px",color:"var(--text)"},children:"Storage dashboard"}),s.jsxs("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:28},children:[o,"% of your storage is in use"]}),s.jsxs("div",{className:"dashboard-stat-grid",children:[s.jsx(wo,{label:"Total files",value:e.totalFiles}),s.jsx(wo,{label:"Total folders",value:e.totalFolders}),s.jsx(wo,{label:"Storage used",value:Ne(e.storageUsed)}),s.jsx(wo,{label:"Storage remaining",value:Ne(Math.max(0,e.storageQuota-e.storageUsed))})]}),s.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)",marginBottom:24},children:[s.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"Storage breakdown"}),s.jsx("div",{style:{height:14,borderRadius:99,overflow:"hidden",display:"flex",background:"var(--border)"},children:a.map(l=>{const c=(r[l.key]||0)/i*100;return c<.5?null:s.jsx("div",{title:`${l.label}: ${Ne(r[l.key]||0)}`,style:{width:`${c}%`,background:l.color,transition:"width .4s ease"}},l.key)})}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,marginTop:16},children:a.map(l=>s.jsxs("span",{style:{fontSize:13,color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{width:10,height:10,borderRadius:99,background:l.color,flexShrink:0}}),l.label,": ",Ne(r[l.key]||0)]},l.key))})]}),s.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)"},children:[s.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"File type distribution"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:a.map(l=>{const c=r[l.key]||0,u=Math.round(c/i*100);return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[s.jsx("span",{style:{color:"var(--text-secondary)",fontWeight:600},children:l.label}),s.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:700},children:[u,"%"]})]}),s.jsx("div",{style:{height:8,background:"var(--border)",borderRadius:99,overflow:"hidden"},children:s.jsx("div",{style:{width:`${u}%`,height:"100%",background:l.color,borderRadius:99,transition:"width .4s ease"}})})]},l.key)})})]})]})}function wo({label:e,value:t}){return s.jsxs("div",{className:"dashboard-stat-card",children:[s.jsx("div",{className:"label",children:e}),s.jsx("div",{className:"value",children:t})]})}function Vw({users:e,systemHealth:t,loading:n,onBack:r}){return s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:r,style:Hw,children:"← Back to My Cloud"}),s.jsx("h2",{style:{fontWeight:800,fontSize:22,margin:"12px 0 8px"},children:"Admin panel"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:24},children:"User management and system overview"}),t&&s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:28},children:[s.jsx(Xr,{label:"Total users",value:t.totalUsers??"—"}),s.jsx(Xr,{label:"Active users",value:t.activeUsers??"—"}),s.jsx(Xr,{label:"Total files",value:t.totalFiles??"—"}),s.jsx(Xr,{label:"Storage used",value:t.totalStorageUsed!=null?Ne(t.totalStorageUsed):"—"}),s.jsx(Xr,{label:"Uploads today",value:t.uploadsToday??"—"})]}),s.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"Users"}),n?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading…"}):s.jsxs("div",{style:{overflowX:"auto",border:"1px solid var(--border)",borderRadius:12},children:[s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"var(--bg-card)",textAlign:"left"},children:[s.jsx("th",{style:Zr,children:"Email"}),s.jsx("th",{style:Zr,children:"Name"}),s.jsx("th",{style:Zr,children:"Role"}),s.jsx("th",{style:Zr,children:"Storage"}),s.jsx("th",{style:Zr,children:"Status"})]})}),s.jsx("tbody",{children:e.map(i=>s.jsxs("tr",{style:{borderTop:"1px solid var(--border)"},children:[s.jsx("td",{style:ei,children:i.email}),s.jsx("td",{style:ei,children:i.fullName||"—"}),s.jsx("td",{style:ei,children:i.role}),s.jsxs("td",{style:ei,children:[Ne(i.storageUsed)," / ",Ne(i.storageQuota)]}),s.jsx("td",{style:ei,children:i.isActive?"Active":"Inactive"})]},i.id))})]}),e.length===0&&s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)"},children:"No users found"})]})]})}function Xr({label:e,value:t}){return s.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:14},children:[s.jsx("div",{style:{fontWeight:800,fontSize:20},children:t}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:e})]})}const Zr={padding:"12px 14px",color:"var(--text-muted)",fontWeight:600},ei={padding:"12px 14px",color:"var(--text-secondary)"},Hw={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"};function tg({file:e,onMove:t,onCopy:n,onTags:r,onDelete:i}){const[o,a]=m.useState(!1),l=m.useRef(null);m.useEffect(()=>{const u=p=>{l.current&&!l.current.contains(p.target)&&a(!1)};return o&&document.addEventListener("click",u),()=>document.removeEventListener("click",u)},[o]);const c=[{cue:"#",label:"Tags",onClick:()=>r(e)},{cue:"Move",label:"Move",onClick:()=>t(e)},{cue:"Copy",label:"Copy file",onClick:()=>n(e)},{cue:"Del",label:"Delete",onClick:()=>i(e),danger:!0}];return s.jsxs("div",{ref:l,style:{position:"relative"},children:[s.jsx("button",{type:"button",title:"More actions",onClick:u=>{u.stopPropagation(),a(p=>!p)},style:Gw,children:"..."}),o&&s.jsx("div",{style:Yw,children:c.map(u=>s.jsxs("button",{type:"button",onClick:p=>{p.stopPropagation(),a(!1),u.onClick()},style:{...Kw,color:u.danger?"var(--danger)":"var(--text)"},children:[s.jsx("span",{style:{...Qw,color:u.danger?"var(--danger)":"var(--accent-blue)"},children:u.cue}),s.jsx("span",{children:u.label})]},u.label))})]})}const Gw={width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"rgba(255,255,255,.08)",color:"var(--text)",cursor:"pointer",fontSize:18,fontWeight:900,transition:"var(--transition)"},Yw={position:"absolute",right:0,top:"100%",marginTop:6,minWidth:190,background:"var(--surface-raised)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"var(--shadow)",zIndex:50,overflow:"hidden",padding:6,animation:"floatIn .16s ease"},Kw={display:"flex",alignItems:"center",gap:10,width:"100%",padding:"11px 12px",border:"none",borderRadius:10,background:"transparent",textAlign:"left",cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"var(--font)"},Qw={width:34,opacity:.78,fontSize:11,fontWeight:900,textTransform:"uppercase"};function er({width:e="100%",height:t=16,radius:n=8,style:r={}}){return s.jsx("div",{style:{width:e,height:t,borderRadius:n,background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite",...r}})}function qw({count:e=6,grid:t=!1}){return t?s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:12},children:Array.from({length:e}).map((n,r)=>s.jsxs("div",{style:{borderRadius:16,overflow:"hidden",border:"1px solid var(--border)"},children:[s.jsx(er,{height:140,radius:0}),s.jsxs("div",{style:{padding:12},children:[s.jsx(er,{height:12,width:"80%"}),s.jsx(er,{height:10,width:"50%",style:{marginTop:8}})]})]},r))}):s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Array.from({length:e}).map((n,r)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:"var(--bg-card)",borderRadius:12,border:"1px solid var(--border)"},children:[s.jsx(er,{width:36,height:36,radius:8}),s.jsxs("div",{style:{flex:1},children:[s.jsx(er,{height:14,width:"40%"}),s.jsx(er,{height:10,width:"25%",style:{marginTop:8}})]})]},r))})}function Jw(e,t=400){const[n,r]=m.useState(e);return m.useEffect(()=>{const i=setTimeout(()=>r(e),t);return()=>clearTimeout(i)},[e,t]),n}async function Xw(e,{createFolder:t,uploadFile:n,baseFolderId:r,onProgress:i}){const o=Array.from(e),a=new Map([["",r??null]]),l=u=>{const p=u.webkitRelativePath||u.name,h=p.split("/").filter(Boolean),f=h.pop();return{segments:h,fileName:f,rel:p}};o.sort((u,p)=>l(u).rel.localeCompare(l(p).rel));let c=0;for(const u of o){const{segments:p}=l(u);let h=r??null,f="";for(const b of p){if(f=f?`${f}/${b}`:b,!a.has(f)){const x=await t(b,h);a.set(f,x.id)}h=a.get(f)}await n(u,h),c+=1,i==null||i(Math.round(c/o.length*100))}}function Zw(e){const t=new Map(e.map(r=>[r.id,{...r,children:[]}])),n=[];for(const r of e){const i=t.get(r.id);r.parentId&&t.has(r.parentId)?t.get(r.parentId).children.push(i):n.push(i)}return n}const ng=m.createContext(null);function eb({token:e,children:t}){const[n,r]=m.useState(null),[i,o]=m.useState([]),[a,l]=m.useState(0),[c,u]=m.useState(!0),p=m.useCallback(async()=>{if(e)try{const x=await lt("/account",{},e);r(x)}catch{const x=await lt("/users/me",{},e).catch(()=>null);x&&r(x)}},[e]),h=m.useCallback(async()=>{},[]),f=m.useCallback(async()=>{u(!0),await Promise.all([p(),h()]),u(!1)},[p,h]);m.useEffect(()=>{f()},[e]);const b=async()=>{};return s.jsx(ng.Provider,{value:{account:n,loading:c,notifications:i,unreadCount:a,refreshAccount:p,refreshNotifications:h,refreshAll:f,markAllRead:b},children:t})}function rg(){const e=m.useContext(ng);if(!e)throw new Error("useAccount must be used within AccountProvider");return e}function tb({account:e,onNavigate:t,onSignOut:n}){var u;const[r,i]=m.useState(!1),o=m.useRef(null);m.useEffect(()=>{const p=h=>{o.current&&!o.current.contains(h.target)&&i(!1)};return r&&document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[r]);const a=[{id:"profile",label:"My Profile"},{id:"settings",label:"Settings"},{id:"security",label:"Security"},{id:"dashboard",label:"Storage"},{id:"billing",label:"Billing"},{id:"billing",label:"Upgrade Plan",accent:!0},{id:"help",label:"Help Center"}],l=e==null?void 0:e.avatarUrl,c=((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"?").slice(0,1).toUpperCase();return s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(p=>!p),style:{display:"flex",alignItems:"center",gap:8,padding:"4px 10px 4px 4px",borderRadius:999,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontFamily:"var(--font)"},children:[s.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:l?`url(${l}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:14},children:!l&&c}),s.jsx("span",{style:{color:"var(--text-secondary)",fontSize:13,fontWeight:600},children:"▾"})]}),r&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",minWidth:200,background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300,overflow:"hidden",animation:"fadeIn .15s ease"},children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontWeight:700,fontSize:14,color:"var(--text)"},children:(e==null?void 0:e.fullName)||"Account"}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:e==null?void 0:e.email}),s.jsxs("div",{style:{fontSize:11,color:"var(--accent)",marginTop:6,fontWeight:600,textTransform:"capitalize"},children:[((u=e==null?void 0:e.planDetails)==null?void 0:u.name)||(e==null?void 0:e.plan)," plan"]})]}),a.map((p,h)=>s.jsx("button",{type:"button",onClick:()=>{i(!1),t(p.id==="dashboard"?"dashboard":p.id)},style:{display:"block",width:"100%",padding:"11px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,fontWeight:p.accent?700:500,color:p.accent?"var(--accent)":"var(--text-secondary)"},children:p.label},`${p.id}-${h}`)),s.jsx("div",{style:{borderTop:"1px solid var(--border)"},children:s.jsx("button",{type:"button",onClick:()=>{i(!1),n()},style:{display:"block",width:"100%",padding:"12px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,color:"var(--danger)",fontWeight:600},children:"Sign Out"})})]})]})}function nb({account:e,onUpgrade:t}){if(!(e!=null&&e.onTrial))return null;const n=e.trialDaysLeft??0;return s.jsxs("div",{style:{background:"linear-gradient(90deg, rgba(240,22,58,.12), rgba(64,144,255,.1))",borderBottom:"1px solid var(--border)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--text)"},children:"Pro trial"})," — ",n," day",n!==1?"s":""," left · ",Ne(e.storageUsed)," used"]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Upgrade"})]})}function rb({account:e,onOpenSettings:t}){return!(e!=null&&e.emailVerificationRequired)||(e==null?void 0:e.isVerified)!==!1?null:s.jsxs("div",{style:{background:"rgba(240, 22, 58, 0.12)",borderBottom:"1px solid rgba(240, 22, 58, 0.35)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--danger)"},children:"Email not verified"})," — ","Uploads are disabled until you verify. Check your inbox or resend the link."]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Verify email"})]})}function Bd({email:e,token:t,onVerified:n,onBack:r}){const[i,o]=m.useState(e||""),[a,l]=m.useState(!!t),[c,u]=m.useState(""),[p,h]=m.useState(""),[f,b]=m.useState(!1);m.useEffect(()=>{t&&x(t)},[t]);const x=async A=>{l(!0),u("");try{const g=await fetch(`${St}/auth/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:A})}),d=await g.json();if(!g.ok||!d.success)throw new Error(d.message||"Verification failed");b(!0),setTimeout(()=>n==null?void 0:n(),1200)}catch{u("This verification link is invalid or expired. Request a fresh email and try again.")}finally{l(!1)}},k=async()=>{if(!i){u("Enter your email address first.");return}l(!0),u(""),h("");try{const A=await fetch(`${St}/auth/resend-verification`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}),g=await A.json();if(!A.ok||!g.success)throw new Error(g.message||"Failed to send verification email");h("A fresh verification email is on its way. Open the link in your inbox to continue.")}catch{u("Something went wrong. Please try again.")}finally{l(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:Fn}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:f?"Email verified":t?"Verifying your email":"Check your inbox"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:f?"Your account is ready. You can now log in with your email and password.":t?"Hold tight while we confirm your CloudVault account.":"Open the verification link we sent after registration. You only need to do this once."}),!t&&!f&&s.jsxs(s.Fragment,{children:[s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:"Email address"}),s.jsx("input",{className:"input-field",type:"email",value:i,onChange:A=>o(A.target.value),placeholder:"you@company.com",style:{marginTop:6}})]}),s.jsx("button",{type:"button",onClick:k,disabled:a,className:"btn-primary",style:{width:"100%"},children:a?"Sending...":"Resend verification email"})]}),a&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,marginTop:14},children:"Working on it..."}),c&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginTop:14},children:c}),p&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,lineHeight:1.5,marginTop:14},children:p}),s.jsx("button",{type:"button",onClick:r,className:"btn-secondary",style:{width:"100%",marginTop:14},children:"Back to login"})]})]})}function ib({notifications:e,unreadCount:t,onMarkAllRead:n}){const[r,i]=m.useState(!1),o=m.useRef(null);return m.useEffect(()=>{const a=l=>{o.current&&!o.current.contains(l.target)&&i(!1)};return r&&document.addEventListener("click",a),()=>document.removeEventListener("click",a)},[r]),s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(a=>!a),style:{width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontSize:18,position:"relative"},title:"Notifications",children:["🔔",t>0&&s.jsx("span",{style:{position:"absolute",top:4,right:4,minWidth:16,height:16,borderRadius:99,background:"var(--accent)",color:"#fff",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"},children:t>9?"9+":t})]}),r&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",width:320,maxHeight:400,overflow:"auto",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300},children:[s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontWeight:700,fontSize:14},children:"Notifications"}),t>0&&s.jsx("button",{type:"button",onClick:n,style:ob,children:"Mark all read"})]}),e.length===0?s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)",fontSize:13},children:"Nothing new"}):e.map(a=>s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",background:a.read?"transparent":"rgba(240,22,58,.06)"},children:[s.jsx("div",{style:{fontWeight:600,fontSize:13},children:a.title}),a.body&&s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:a.body}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:6},children:Wi(a.createdAt)})]},a.id))]})]})}const ob={background:"none",border:"none",color:"var(--accent-blue)",fontSize:12,cursor:"pointer",fontWeight:600};function Wd({token:e,onBack:t,onSuccess:n}){const[r,i]=m.useState(""),[o,a]=m.useState(""),[l,c]=m.useState(!1),[u,p]=m.useState(""),[h,f]=m.useState(!1),b=async x=>{if(x.preventDefault(),p(""),!e)return p("This reset link is invalid. Please request a new one.");if(r!==o)return p("Passwords do not match.");if(r.length<8)return p("Password must be at least 8 characters.");if(!/[a-z]/.test(r)||!/[A-Z]/.test(r)||!/\d/.test(r))return p("Use at least one uppercase letter, one lowercase letter, and one number.");c(!0);try{const k=await fetch(`${St}/auth/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,newPassword:r})}),A=await k.json();if(!k.ok||!A.success)throw new Error(A.message||"Failed to reset password");f(!0),setTimeout(()=>{var g;return(g=n||t)==null?void 0:g()},1400)}catch{p("Something went wrong. Please try again.")}finally{c(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:Fn}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:h?"Password updated":"Set a new password"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:h?"You can now log in with your new password.":"Choose a strong password to secure your CloudVault account."}),!h&&s.jsxs("form",{onSubmit:b,children:[s.jsx($d,{label:"New password",value:r,onChange:i}),s.jsx($d,{label:"Confirm password",value:o,onChange:a}),u&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginBottom:14},children:u}),s.jsx("button",{type:"submit",disabled:l,className:"btn-primary",style:{width:"100%"},children:l?"Updating...":"Update password"})]}),h&&s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{width:"100%"},children:"Continue to login"}),s.jsx("button",{type:"button",onClick:t,className:"btn-secondary",style:{width:"100%",marginTop:12},children:"Back to login"})]})]})}function $d({label:e,value:t,onChange:n}){return s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:e}),s.jsx("input",{className:"input-field",type:"password",value:t,onChange:r=>n(r.target.value),required:!0,minLength:8,style:{marginTop:6}})]})}const Vd={drive:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V8H4V6.5Z",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M4 8h16v9.5A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5V8Z",stroke:"currentColor",strokeWidth:"1.8"})]}),recent:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"12",cy:"12",r:"8.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),starred:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M12 4.5l2.2 4.5 4.9.7-3.5 3.4.8 4.9L12 15.8l-4.4 2.2.8-4.9-3.5-3.4 4.9-.7L12 4.5Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"})}),shared:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"18",cy:"5",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("circle",{cx:"6",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("circle",{cx:"18",cy:"19",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M8.3 10.8l7.4-4.1M8.3 13.2l7.4 4.1",stroke:"currentColor",strokeWidth:"1.8"})]}),usage:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M5 19V10M10 19V5M15 19v-7M20 19V8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}),trash:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M9 4h6M5 7h14l-1.2 12.5a1.5 1.5 0 0 1-1.5 1.5H7.7a1.5 1.5 0 0 1-1.5-1.5L5 7Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 10v6M14 10v6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),activity:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M6 5h12v14H6V5Z",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M9 9h6M9 12h4M9 15h5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),admin:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),s.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"})]})};function sb({name:e,active:t=!1}){return s.jsx("span",{className:`nav-icon${t?" active":""}`,"aria-hidden":"true",children:Vd[e]||Vd.drive})}const ab=m.lazy(()=>Kn(()=>import("./ProfilePage-DYMbo_Cp.js"),[])),lb=m.lazy(()=>Kn(()=>import("./SettingsPage-BxnPGQr_.js"),[])),cb=m.lazy(()=>Kn(()=>import("./SecurityPage-B0XCvUI1.js"),[])),ub=m.lazy(()=>Kn(()=>import("./BillingPage-CT3AuC6x.js"),[])),db=m.lazy(()=>Kn(()=>import("./HelpPage-BbAV_Mg3.js"),[])),fb=m.lazy(()=>Kn(()=>import("./ActivityPage-D82kyZiI.js"),[])),Ia=m.lazy(()=>Kn(()=>import("./FileListPage-DTY1c4gp.js"),[]));function Ot(){return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:48},children:s.jsx(jl,{size:28})})}function pb({msg:e,type:t,onClose:n}){m.useEffect(()=>{const i=setTimeout(n,3500);return()=>clearTimeout(i)},[n]);const r=t==="error"?"var(--danger)":t==="success"?"var(--accent)":"var(--accent-blue)";return s.jsxs("div",{className:"toast",role:"alert","aria-live":"polite",style:{position:"fixed",bottom:32,right:32,zIndex:9999,background:r,color:"#fff",padding:"14px 24px",borderRadius:"var(--radius)",fontFamily:"var(--font)",fontWeight:600,fontSize:14,boxShadow:"var(--shadow)",animation:"slideUp .3s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10,maxWidth:420},children:[s.jsx("span",{children:t==="error"?"✕":t==="success"?"✓":"ℹ"}),s.jsx("span",{style:{flex:1},children:e}),s.jsx("span",{onClick:n,style:{cursor:"pointer",opacity:.7,fontSize:18,lineHeight:1},children:"×"})]})}function jl({size:e=22,color:t="var(--accent)"}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:t,borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Do({value:e}){const t=e>85?"var(--danger)":e>60?"var(--accent-amber)":"var(--accent)";return s.jsx("div",{style:{background:"var(--border)",borderRadius:99,height:6,overflow:"hidden",width:"100%"},children:s.jsx("div",{style:{width:`${e}%`,height:"100%",background:t,borderRadius:99,transition:"width .5s ease"}})})}function Hd({size:e=44}){return s.jsx("span",{style:{width:e,height:e,borderRadius:"50%",background:"var(--mega-red)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px var(--mega-red-glow)",flexShrink:0,overflow:"hidden",animation:"softPulse 3s ease infinite"},children:s.jsx("img",{src:ge.logoImage,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})})}function hb({jobs:e,history:t}){return!e.length&&!t.length?null:s.jsxs("div",{className:"transfer-panel",children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("strong",{style:{fontSize:13},children:"Transfers"}),s.jsx("span",{style:{fontSize:11,background:"var(--mega-red)",color:"#fff",padding:"2px 8px",borderRadius:99,fontWeight:700},children:e.filter(n=>n.status==="downloading").length})]}),s.jsxs("div",{style:{maxHeight:260,overflow:"auto",padding:12},children:[e.map(n=>s.jsxs("div",{style:{marginBottom:12},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:12,marginBottom:6},children:[s.jsx("span",{style:{color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),s.jsx("span",{style:{color:n.status==="failed"?"var(--danger)":"var(--accent-blue)",fontWeight:800},children:n.status==="failed"?"Failed":`${n.percent}%`})]}),s.jsx(Do,{value:n.percent})]},n.id)),t.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",fontWeight:800,margin:"10px 0 8px",textTransform:"uppercase"},children:"Recent downloads"}),t.slice(0,4).map(n=>s.jsxs("div",{style:{padding:"8px 0",borderTop:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:Wi(n.downloadedAt)})]},n.id))]})]})]})}function gb({title:e,message:t,onConfirm:n,onCancel:r,danger:i=!1}){return s.jsx("div",{className:"modal-backdrop",onClick:r,children:s.jsxs("div",{className:"modal-card",onClick:o=>o.stopPropagation(),children:[s.jsx("div",{style:{fontSize:36,textAlign:"center",marginBottom:16},children:i?"⚠️":"❓"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:8},children:e}),s.jsx("p",{style:{color:"var(--text-secondary)",fontFamily:"var(--font)",fontSize:14,textAlign:"center",marginBottom:28,lineHeight:1.5},children:t}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:r,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:n,className:"btn-primary",style:i?{background:"var(--danger)",boxShadow:"0 10px 28px rgba(248,113,113,.25)"}:void 0,children:i?"Delete":"Confirm"})]})]})})}function mb({file:e,onRename:t,onCancel:n}){const[r,i]=m.useState(e.name),o=m.useRef(null);return m.useEffect(()=>{var a;(a=o.current)==null||a.select()},[]),s.jsx("div",{className:"modal-backdrop",onClick:n,children:s.jsxs("div",{className:"modal-card",onClick:a=>a.stopPropagation(),children:[s.jsx("div",{style:{fontSize:32,textAlign:"center",marginBottom:12},children:"✏️"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:20},children:"Rename File"}),s.jsx("input",{ref:o,value:r,onChange:a=>i(a.target.value),onKeyDown:a=>a.key==="Enter"&&t(r),className:"input-field",style:{marginBottom:20}}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:n,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>t(r),className:"btn-primary",children:"Rename"})]})]})})}function ig({tags:e}){return e!=null&&e.length?s.jsx("div",{style:{display:"flex",gap:4,marginTop:4,flexWrap:"wrap"},children:e.slice(0,3).map(t=>s.jsx("span",{style:{fontSize:10,padding:"2px 6px",borderRadius:6,background:"rgba(240,22,58,.12)",color:"var(--accent)",fontWeight:600},children:t},t))}):null}function sn({label:e,onClick:t,tone:n="neutral",disabled:r=!1}){const i=n==="accent"?"accent":n==="blue"?"blue":"";return s.jsx("button",{type:"button",className:`quick-action-btn ${i}`.trim(),title:e,disabled:r,onClick:o=>{o.stopPropagation(),r||t()},children:e})}function vb({file:e,onDelete:t,onShare:n,onPreview:r,onRename:i,onDownload:o,onMove:a,onCopy:l,onTags:c}){return s.jsxs("div",{className:"file-list-card",children:[s.jsx("div",{style:{fontSize:34,flexShrink:0,width:48,height:48,borderRadius:14,background:"rgba(56,189,248,.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:Rs(e.mimeType)}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:16,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:12,marginTop:3},children:[Ne(e.size)," · ",Wi(e.createdAt)]}),s.jsx(ig,{tags:e.tags})]}),s.jsxs("div",{className:"file-list-actions",children:[s.jsx(sn,{label:"Preview",disabled:!ah(e.mimeType),onClick:()=>r(e),tone:"blue"}),s.jsx(sn,{label:"Download",onClick:()=>o(e)}),s.jsx(sn,{label:"Share",onClick:()=>n(e),tone:"accent"}),s.jsx(sn,{label:"Rename",onClick:()=>i(e)}),s.jsx(tg,{file:e,onMove:a,onCopy:l,onTags:c,onDelete:t})]})]})}function yb({file:e,token:t,onDelete:n,onShare:r,onPreview:i,onRename:o,onDownload:a,onMove:l,onCopy:c,onTags:u}){var h;const p=(h=e.mimeType)==null?void 0:h.startsWith("image/");return s.jsxs("div",{className:"glass-card mega-file-card",style:{borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{height:170,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(217,0,7,.08), rgba(20,20,20,.95))",borderBottom:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[p?s.jsx(Aw,{fileId:e.id,token:t,alt:e.name,mimeType:e.mimeType}):s.jsx("div",{style:{fontSize:56,display:"flex"},children:Rs(e.mimeType)}),s.jsx("div",{style:{position:"absolute",right:8,bottom:8,fontSize:10,fontWeight:700,background:"#111827",color:"#fff",padding:"2px 6px",borderRadius:6},children:Ne(e.size)}),s.jsx("div",{style:{position:"absolute",right:10,top:10},children:s.jsx(tg,{file:e,onMove:l,onCopy:c,onTags:u,onDelete:n})})]}),s.jsxs("div",{style:{padding:"14px"},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:5},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:11},children:[Ne(e.size)," · ",Wi(e.createdAt)]}),s.jsx(ig,{tags:e.tags}),s.jsxs("div",{className:"grid-actions",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[s.jsx(sn,{label:"Preview",disabled:!ah(e.mimeType),onClick:()=>i(e),tone:"blue"}),s.jsx(sn,{label:"Share",onClick:()=>r(e),tone:"accent"}),s.jsx(sn,{label:"Download",onClick:()=>a(e)}),s.jsx(sn,{label:"Rename",onClick:()=>o(e)})]})]})]})}function xb({account:e,onManage:t}){if(!(e!=null&&e.storageWarning))return null;const n=e.storageWarning==="critical";return s.jsxs("div",{style:{padding:"10px 20px",background:n?"rgba(255,77,77,.12)":"rgba(246,179,71,.12)",borderBottom:`1px solid ${n?"var(--danger)":"var(--accent-amber)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap",fontSize:13,fontFamily:"var(--font)"},children:[s.jsx("span",{children:n?"Storage almost full (95%+).":"Storage over 80% full."}),s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{padding:"6px 14px",fontSize:13},children:"Manage storage"})]})}function wb({username:e,stats:t,storagePercent:n,onUpload:r,onNewFolder:i}){return s.jsxs("div",{className:"mega-drive-header",children:[s.jsx("h1",{style:{fontSize:28,fontWeight:800,color:"var(--text)",marginBottom:20},children:"Cloud drive"}),s.jsxs("div",{className:"mega-drive-actions",children:[s.jsx("button",{type:"button",className:"btn-primary mega-upload-btn",onClick:r,children:"↑ Upload"}),s.jsx("button",{type:"button",className:"btn-secondary mega-folder-btn",onClick:i,children:"+ New folder"})]}),s.jsxs("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:8},children:[t.totalFiles," files · ",t.totalFolders," folders · ",Math.round(n),"% storage used",e?` · @${e}`:""]})]})}function bb({children:e,onNavigate:t,onSignOut:n,onUpgrade:r}){const{account:i,notifications:o,unreadCount:a,markAllRead:l}=rg();return s.jsxs(s.Fragment,{children:[s.jsx(rb,{account:i,onOpenSettings:()=>t("settings")}),s.jsx(nb,{account:i,onUpgrade:r}),s.jsx(xb,{account:i,onManage:()=>t("billing")}),s.jsxs("header",{className:"account-header mega-top-bar",style:{position:"sticky",top:0,zIndex:90,borderBottom:"1px solid var(--border)",background:"rgba(0,0,0,.92)",backdropFilter:"blur(16px)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,padding:"0 24px 0 280px"},children:[s.jsx(ib,{notifications:o,unreadCount:a,onMarkAllRead:l}),s.jsx(tb,{account:i,onNavigate:t,onSignOut:n})]}),e]})}function kb(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?new URLSearchParams(window.location.search).get("token"):null}function Gd(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/reset-password")?new URLSearchParams(window.location.search).get("token"):null}function Sb(){const[e,t]=m.useState(()=>window.innerWidth);return m.useEffect(()=>{const n=()=>t(window.innerWidth);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),{width:e,isMobile:e<=768,isSmall:e<=520}}function _b(){const[e,t]=m.useState(kb),[n,r]=m.useState(Gd),[i,o]=m.useState(()=>{const y=localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token"),I=Gd();return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?"verify-email":I?"reset-password":y?"app":"landing"}),[a,l]=m.useState("login"),[c,u]=m.useState(()=>localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token")||""),[p,h]=m.useState(()=>localStorage.getItem("cv_user")||sessionStorage.getItem("cv_user")||""),[f,b]=m.useState(null),[x,k]=m.useState([]),[A,g]=m.useState([]),[d,v]=m.useState({totalFiles:0,storageUsed:0,storageQuota:1024*1024*1024,totalFolders:0}),[w,E]=m.useState(null),[C,j]=m.useState([]),[R,V]=m.useState(""),[N,pe]=m.useState(!1),[he,be]=m.useState(0),[gt,Sn]=m.useState(null),[Le,Ye]=m.useState([]),[T,z]=m.useState(()=>{try{return JSON.parse(localStorage.getItem("cv_downloadHistory")||"[]")}catch{return[]}}),[D,K]=m.useState(null),[ne,Ke]=m.useState(null),[ce,Et]=m.useState(""),[ke,ae]=m.useState(!1),[Ct,Ur]=m.useState(!1),[Ie,Ki]=m.useState(()=>localStorage.getItem("cv_viewMode")||"list"),[Yt,Ds]=m.useState("all"),[Kt,Qi]=m.useState(()=>localStorage.getItem("cv_theme")||"dark"),[_n,rt]=m.useState(null),[Qn,Qe]=m.useState(null),[qn,Jn]=m.useState(!1),[S,G]=m.useState("drive"),[It,Q]=m.useState("createdAt"),[En,og]=m.useState("desc"),[qi,sg]=m.useState(""),[Ms,ag]=m.useState([]),[lg,cg]=m.useState(1),[ug,dg]=m.useState(!1),[Ji,Br]=m.useState(!1),[fg,pg]=m.useState([]),[hg,gg]=m.useState([]),[mg,vg]=m.useState([]),[Mc,yg]=m.useState(null),[Xn,Wr]=m.useState(null),[Fs,Fc]=m.useState(null),[Us,Bs]=m.useState(null),[Uc,xg]=m.useState("user"),[Bc,wg]=m.useState([]),[Wc,bg]=m.useState(null),[jt,Cn]=m.useState(null),[kg,Sg]=m.useState([]),[_g,Eg]=m.useState([]),[Cg,Ig]=m.useState([]),Ws=Jw(R,400),{isMobile:Xi,isSmall:jg}=Sb(),$r=m.useRef(),$c=m.useRef(),Y=m.useCallback((y,I="info")=>K({msg:y,type:I}),[]),W=m.useCallback((y,I)=>lt(y,I,c),[c]),je=m.useCallback(async(y=1,I=!1)=>{var F,B;if(c){Br(!0);try{if(S==="trash"){const qe=await W("/trash");gg(jn(qe,"files")),vg(jn(qe,"folders")),Br(!1);return}if(S==="admin"){const[qe,Kg]=await Promise.all([W("/admin/users?limit=50"),W("/admin/analytics").catch(()=>null)]);wg(jn(qe,"users")),bg(Kg),Br(!1);return}if(S==="dashboard"){const qe=await W("/storage/usage");yg(qe),v({totalFiles:qe.fileCount??0,storageUsed:qe.storageUsed??0,storageQuota:qe.storageQuota??1024*1024*1024,totalFolders:qe.folderCount??0}),Br(!1);return}const U=new URLSearchParams;w&&U.set("folderId",w),Ws&&U.set("search",Ws),qi&&U.set("tag",qi),U.set("sortBy",It),U.set("sortOrder",En),U.set("page",String(y)),U.set("limit","30");const[H,it,In,Vs,Yg]=await Promise.all([W(`/files?${U}`),W(`/folders?${w?`parentId=${w}`:""}`),W("/storage/usage"),W("/files/tags").catch(()=>({tags:[]})),W("/folders?all=true").catch(()=>({folders:[]}))]),Hs=jn(H,"files"),qc=jn(it,"folders");k(I?qe=>[...qe,...Hs]:Hs),g(qc),ag((Vs==null?void 0:Vs.tags)||[]),pg(jn(Yg,"folders")),dg((((F=H==null?void 0:H.pagination)==null?void 0:F.page)||1)<(((B=H==null?void 0:H.pagination)==null?void 0:B.totalPages)||1)),cg(y),v({totalFiles:In.fileCount??Hs.length,storageUsed:In.storageUsed??0,storageQuota:In.storageQuota??1024*1024*1024,totalFolders:In.folderCount??qc.length})}catch(U){console.error("Refresh failed:",U);const H=U.message.toLowerCase();H.includes("credential")||H.includes("unauthorized")||H.includes("token")?(localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),u(""),h(""),o("landing")):Y(U.message,"error")}Br(!1)}},[c,w,Ws,qi,It,En,S,W,Y]);m.useEffect(()=>{je(1,!1)},[je]),m.useEffect(()=>{c&&W("/users/me").then(y=>xg((y==null?void 0:y.role)||"user")).catch(()=>{})},[c,W]),m.useEffect(()=>{if(!c||S==="drive"||S==="trash"||S==="dashboard"||S==="admin")return;(async()=>{try{if(S==="recent"){const I=await W("/dashboard");Sg(I.recentFiles||[])}else if(S==="starred"){const I=await W("/files?isStarred=true&limit=50");Eg(jn(I,"files"))}else if(S==="shared"){const I=await W("/dashboard"),F=[...I.sharedWithMe||[],...I.sharedByMe||[]].map(B=>B.file||B);Ig(F.filter(Boolean))}}catch{}})()},[c,S,W]);const Tg=y=>{Cn(y),y==="dashboard"&&G("dashboard"),y==="billing"&&Cn("billing")};m.useEffect(()=>{localStorage.setItem("cv_viewMode",Ie)},[Ie]),m.useEffect(()=>{localStorage.setItem("cv_theme",Kt)},[Kt]),m.useEffect(()=>{const y=I=>{var F;(F=I.detail)!=null&&F.token&&u(I.detail.token)};return window.addEventListener("cv-token-refreshed",y),()=>window.removeEventListener("cv-token-refreshed",y)},[]);const Ng=(y,I,F,B,U=!0)=>{if(!y&&(B!=null&&B.email)){b(B),o("verify-email");return}if(!y)return;const H=U?localStorage:sessionStorage,it=U?sessionStorage:localStorage;H.setItem("cv_token",y),it.removeItem("cv_token"),I&&H.setItem("cv_refreshToken",I),it.removeItem("cv_refreshToken");const In=typeof F=="string"?F:(B==null?void 0:B.fullName)||(B==null?void 0:B.email);H.setItem("cv_user",In||""),it.removeItem("cv_user"),B!=null&&B.avatarUrl&&H.setItem("cv_avatar",B.avatarUrl),u(y),h(In||""),o("app")},Pg=async y=>{const I=`${y.id}-${Date.now()}`;Sn({name:y.name,percent:0}),Ye(F=>[{id:I,name:y.name,percent:0,status:"downloading"},...F].slice(0,6));try{const F=await _c(y.id,c,{onProgress:U=>{Sn({name:y.name,percent:U}),Ye(H=>H.map(it=>it.id===I?{...it,percent:U}:it))}});E0(F,y.name);const B={id:I,name:y.name,size:y.size,downloadedAt:new Date().toISOString()};z(U=>{const H=[B,...U].slice(0,12);return localStorage.setItem("cv_downloadHistory",JSON.stringify(H)),H}),Ye(U=>U.map(H=>H.id===I?{...H,percent:100,status:"complete"}:H)),Y(`Downloaded "${y.name}"`,"success")}catch(F){Ye(B=>B.map(U=>U.id===I?{...U,status:"failed"}:U)),Y(F.message,"error")}Sn(null)},Vc=async()=>{try{const y=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");await W("/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:y})})}catch{}localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),u(""),h(""),o("landing")},Hc=async(y,I,F)=>{if(!c)throw new Error("Authentication token missing. Please log in again.");const B=new FormData;return B.append("file",y),I&&B.append("folderId",I),C0("/files/upload",B,c,F)},Rg=async(y,I)=>W("/folders",{method:"POST",body:JSON.stringify({name:y,parentId:I||null})}),$s=async(y,I=!1)=>{if(!c){Y("Please log in again to upload files.","error");return}const F=Array.from(y||[]);if(!F.length)return;pe(!0),be(0);let B=0;try{if(I&&F.some(U=>U.webkitRelativePath))await Xw(F,{baseFolderId:w,createFolder:Rg,uploadFile:async(U,H)=>{await Hc(U,H,be),B++},onProgress:be});else for(let U=0;U<F.length;U++)try{await Hc(F[U],w,H=>{const it=Math.round((U+H/100)/F.length*100);be(it)}),B++}catch(H){Y(`Failed to upload "${F[U].name}": ${H.message}`,"error")}}finally{pe(!1),be(0),je(1,!1),B>0&&Y(`${B} file(s) uploaded successfully!`,"success")}},Og=y=>{rt({title:"Delete File",message:`Move "${y.name}" to trash? You can restore it later from the Trash view.`,danger:!0,onConfirm:async()=>{rt(null);try{await W(`/files/${y.id}`,{method:"DELETE"}),je(),Y("File deleted","success")}catch(I){Y(I.message,"error")}}})},Ag=y=>{rt({title:"Delete Folder",message:`Delete folder "${y.name}" and all its contents? This cannot be undone.`,danger:!0,onConfirm:async()=>{rt(null);try{await W(`/folders/${y.id}`,{method:"DELETE"}),je(),Y("Folder deleted","success")}catch(I){Y(I.message,"error")}}})},Lg=async(y,I)=>I.shareType==="user"?W(`/files/${y.id}/share/user`,{method:"POST",body:JSON.stringify({sharedWithEmail:I.sharedWithEmail||I.email,permission:I.permission})}):W(`/files/${y.id}/share`,{method:"POST",body:JSON.stringify(I)}),zg=async(y,{targetFolderId:I})=>{try{await W(`/files/${y.id}/move`,{method:"POST",body:JSON.stringify({targetFolderId:I})}),Wr(null),je(1,!1),Y("File moved","success")}catch(F){Y(F.message,"error")}},Dg=async(y,{targetFolderId:I,newName:F})=>{try{await W(`/files/${y.id}/copy`,{method:"POST",body:JSON.stringify({targetFolderId:I,newName:F!==y.name?F:void 0})}),Wr(null),je(1,!1),Y("File copied","success")}catch(B){Y(B.message,"error")}},Mg=async(y,I)=>{try{await W(`/files/${y.id}`,{method:"PUT",body:JSON.stringify({tags:I})}),Bs(null),je(1,!1),Y("Tags updated","success")}catch(F){Y(F.message,"error")}},Fg=async y=>{try{await W(`/trash/files/${y}/restore`,{method:"POST"}),je(1,!1),Y("File restored","success")}catch(I){Y(I.message,"error")}},Ug=async y=>{try{await W(`/trash/folders/${y}/restore`,{method:"POST"}),je(1,!1),Y("Folder restored","success")}catch(I){Y(I.message,"error")}},Bg=y=>{rt({title:"Delete forever",message:`"${y.name}" will be permanently deleted. This cannot be undone.`,danger:!0,onConfirm:async()=>{rt(null);try{await W(`/files/${y.id}/permanent`,{method:"DELETE"}),je(1,!1),Y("File permanently deleted","success")}catch(I){Y(I.message,"error")}}})},Wg=()=>{rt({title:"Empty trash",message:"All items in trash will be permanently deleted.",danger:!0,onConfirm:async()=>{rt(null);try{await W("/trash/empty",{method:"POST"}),je(1,!1),Y("Trash emptied","success")}catch(y){Y(y.message,"error")}}})},$g=async(y,I)=>{if(!I.trim()||I===y.name){Qe(null);return}try{await W(`/files/${y.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:I})}),je(),Y("File renamed","success")}catch(F){Y(F.message,"error")}Qe(null)},Gc=async()=>{if(ce.trim()){try{await W("/folders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:ce,parentId:w})}),je(),Y("Folder created!","success")}catch(y){Y(y.message,"error")}Et(""),ae(!1)}},Vg=y=>{E(y.id),j(I=>[...I,y]),Jn(!1)},Yc=y=>{y===-1?(E(null),j([])):(E(C[y].id),j(I=>I.slice(0,y+1)))},Hg=y=>{y.preventDefault(),Ur(!1),y.dataTransfer.files.length>0&&$s(y.dataTransfer.files)},Zi=m.useMemo(()=>{const y=ad.find(I=>I.key===Yt);return!y||y.key==="all"?x:x.filter(I=>y.test(I.mimeType||""))},[x,Yt]),Kc=d.storageQuota||1024*1024*1024,Qc=Math.min(100,d.storageUsed/Kc*100);if(e)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Fn}),s.jsx(Bd,{token:e,onVerified:()=>{t(null),window.history.replaceState({},"","/"),o("auth"),l("login")},onBack:()=>{t(null),window.history.replaceState({},"","/"),o("auth"),l("login")}})]});if(n)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Fn}),s.jsx(Wd,{token:n,onBack:()=>{r(null),window.history.replaceState({},"","/"),o("auth"),l("login")}})]});if(i==="landing"&&!c)return s.jsx(z0,{onGetStarted:()=>{l("register"),o("auth")},onLogin:()=>{l("login"),o("auth")},onSignUp:()=>{l("register"),o("auth")}});if(i==="auth"&&!c)return s.jsx(Pw,{initialMode:a,onAuth:Ng,onNeedsVerification:y=>{b(y),o("verify-email")},onBack:()=>o("landing")});if(i==="verify-email"&&!c)return s.jsx(Bd,{email:f==null?void 0:f.email,onVerified:()=>{b(null),o("auth"),l("login")},onBack:()=>{b(null),o("auth"),l("login")}});if(i==="reset-password"&&!c)return s.jsx(Wd,{token:n,onSuccess:()=>{r(null),window.history.replaceState({},"","/"),o("auth"),l("login")},onBack:()=>{r(null),o("auth"),l("login")}});const Gg=Ie==="grid"?yb:vb;return s.jsx(eb,{token:c,children:s.jsx(bb,{onNavigate:y=>{Cn(null),Tg(y)},onSignOut:Vc,onUpgrade:()=>{Cn("billing"),G("drive")},children:s.jsxs("div",{"data-theme":Kt,className:"app-shell",children:[s.jsx("style",{children:Fn}),s.jsx("button",{type:"button",className:"mobile-menu-button","aria-label":"Open navigation menu","aria-expanded":qn,onClick:()=>Jn(y=>!y),style:{display:"none",position:"fixed",top:16,left:16,zIndex:200,background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:10,width:40,height:40,alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--text)",fontSize:20,...Xi?{display:"flex"}:{}},children:"☰"}),qn&&Xi&&s.jsx("div",{onClick:()=>Jn(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:99}}),s.jsxs("div",{className:`sidebar ${qn?"open":""}`,style:{position:"fixed",left:0,top:0,bottom:0,width:260,background:"var(--bg-sidebar)",borderRight:"1px solid var(--border)",padding:"16px 12px",display:"flex",flexDirection:"column",gap:4,zIndex:100,transition:"transform .35s cubic-bezier(.4,0,.2,1)",...Xi?{transform:qn?"translateX(0)":"translateX(-100%)"}:{}},children:[s.jsxs("div",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:10,padding:"4px 8px"},children:[s.jsx(Hd,{size:40}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:20,fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em"},children:"Drive"}),s.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:1},children:["@",p]})]})]}),s.jsx("button",{type:"button",onClick:()=>{var y;return(y=$r.current)==null?void 0:y.click()},className:"btn-primary",style:{minHeight:48,borderRadius:999,fontSize:15,justifyContent:"center",display:"flex",alignItems:"center",gap:8,margin:"0 0 16px"},children:"+ New"}),[{id:"drive",icon:"drive",label:"My Drive"},{id:"recent",icon:"recent",label:"Recent"},{id:"starred",icon:"starred",label:"Starred"},{id:"shared",icon:"shared",label:"Shared"},{id:"dashboard",icon:"usage",label:"Storage"},{id:"trash",icon:"trash",label:"Trash"},{id:"activity",icon:"activity",label:"Activity"},...Uc==="admin"||Uc==="super_admin"?[{id:"admin",icon:"admin",label:"Admin"}]:[]].map(y=>s.jsxs("button",{type:"button",className:`nav-item${S===y.id?" active":""}`,"aria-current":S===y.id?"page":void 0,onClick:()=>{Cn(null),G(y.id),Jn(!1),y.id==="drive"&&(E(null),j([]))},children:[s.jsx(sb,{name:y.icon,active:S===y.id}),s.jsx("span",{children:y.label})]},y.id)),s.jsx("div",{style:{borderTop:"1px solid var(--border)",margin:"12px 0 8px"}}),s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1px",marginBottom:8,paddingLeft:4},children:"OVERVIEW"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16},children:[s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:d.totalFiles}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Files"})]}),s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:d.totalFolders}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Folders"})]})]}),s.jsxs("div",{style:{marginTop:"auto"},children:[s.jsxs("div",{style:{marginBottom:16,background:"var(--surface-raised)",borderRadius:14,padding:"14px",border:"1px solid var(--border)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:[s.jsx("span",{style:{fontWeight:600},children:"Free"}),s.jsxs("span",{children:[Ne(d.storageUsed)," of ",Ne(Kc)," used"]})]}),s.jsx(Do,{value:Qc}),s.jsx("button",{type:"button",onClick:()=>Cn("billing"),className:"btn-secondary",style:{width:"100%",marginTop:12,minHeight:40,borderRadius:999},children:"Upgrade"})]}),s.jsx("button",{type:"button",onClick:Vc,className:"btn-danger",children:"Sign Out"})]})]}),s.jsxs("div",{className:"main-content",style:{marginLeft:Xi?0:260,padding:"20px 32px",minHeight:"100vh"},children:[s.jsx(Eb,{appPage:jt,setAppPage:Cn,api:W,token:c,notify:Y,stats:d,usageDetail:Mc,adminUsers:Bc,systemHealth:Wc,loading:Ji,onRefreshAccount:()=>{},theme:Kt,setTheme:Qi}),!jt&&S==="recent"&&s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(Ia,{title:"Recent files",files:kg,emptyMessage:"No recent files yet.",onBack:()=>G("drive"),onOpen:Ke})}),!jt&&S==="starred"&&s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(Ia,{title:"Starred",files:_g,emptyMessage:"Star files to see them here.",onBack:()=>G("drive"),onOpen:Ke})}),!jt&&S==="shared"&&s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(Ia,{title:"Shared with you",files:Cg,emptyMessage:"Nothing shared yet.",onBack:()=>G("drive"),onOpen:Ke})}),!jt&&S==="activity"&&s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(fb,{api:W,onBack:()=>G("drive")})}),!jt&&S==="trash"&&s.jsx(Lw,{trashedFiles:hg,trashedFolders:mg,loading:Ji,onRestoreFile:Fg,onRestoreFolder:Ug,onPermanentDelete:Bg,onEmptyTrash:Wg,onBack:()=>G("drive")}),!jt&&S==="dashboard"&&s.jsx($w,{stats:d,usage:Mc,onBack:()=>G("drive")}),!jt&&S==="admin"&&s.jsx(Vw,{users:Bc,systemHealth:Wc,loading:Ji,onBack:()=>G("drive")}),!jt&&S==="drive"&&s.jsxs(s.Fragment,{children:[s.jsx(wb,{username:p,stats:d,storagePercent:Qc,onUpload:()=>{var y;return(y=$r.current)==null?void 0:y.click()},onNewFolder:()=>ae(!0)}),s.jsxs("div",{className:"drive-toolbar",style:{flexDirection:"column",alignItems:"stretch",gap:16},children:[s.jsxs("div",{className:"mega-search-bar drive-search",children:[s.jsx("span",{className:"search-icon","aria-hidden":"true",children:"🔍"}),s.jsx("input",{className:"input-field",placeholder:"Search Cloud drive...",value:R,onChange:y=>V(y.target.value),style:{width:"100%",padding:"12px 20px 12px 44px",borderRadius:999,background:"var(--bg-card)",border:"1px solid var(--border)"}})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"icon-btn",title:Kt==="dark"?"Light mode":"Dark mode",onClick:()=>Qi(y=>y==="dark"?"light":"dark"),children:Kt==="dark"?"☀":"🌙"}),s.jsxs("div",{className:"view-toggle",children:[s.jsx("button",{type:"button",onClick:()=>Ki("list"),className:`view-toggle-btn${Ie==="list"?" active":""}`,children:"☰"}),s.jsx("button",{type:"button",onClick:()=>Ki("grid"),className:`view-toggle-btn${Ie==="grid"?" active":""}`,children:"▦"})]}),S==="drive"&&s.jsxs("div",{className:"drive-actions",style:{marginLeft:"auto"},children:[s.jsx("button",{type:"button",onClick:()=>ae(y=>!y),className:"btn-secondary mega-folder-btn",children:"New folder"}),s.jsx("button",{type:"button",onClick:()=>{var y;return(y=$r.current)==null?void 0:y.click()},className:"btn-primary mega-upload-btn",children:"Upload"}),s.jsx("button",{type:"button",onClick:()=>{var y;return(y=$c.current)==null?void 0:y.click()},className:"btn-secondary",children:"Folder"}),s.jsx("input",{ref:$r,type:"file",multiple:!0,hidden:!0,onChange:y=>{$s(y.target.files),y.target.value=""}}),s.jsx("input",{ref:$c,type:"file",multiple:!0,webkitdirectory:"",hidden:!0,onChange:y=>{$s(y.target.files,!0),y.target.value=""}})]})]})]}),S==="drive"&&s.jsxs("div",{className:"drive-sortbar",children:[s.jsxs("select",{value:It,onChange:y=>Q(y.target.value),className:"select-field",children:[s.jsx("option",{value:"createdAt",children:"Date"}),s.jsx("option",{value:"name",children:"Name"}),s.jsx("option",{value:"size",children:"Size"}),s.jsx("option",{value:"updatedAt",children:"Modified"})]}),s.jsxs("select",{value:En,onChange:y=>og(y.target.value),className:"select-field",children:[s.jsx("option",{value:"desc",children:"Descending"}),s.jsx("option",{value:"asc",children:"Ascending"})]}),Ms.length>0&&s.jsxs("select",{value:qi,onChange:y=>sg(y.target.value),className:"select-field",style:{gridColumn:jg?"1 / -1":void 0},children:[s.jsx("option",{value:"",children:"All tags"}),Ms.map(y=>s.jsx("option",{value:y,children:y},y))]})]}),S==="drive"&&s.jsx("div",{className:"filter-chips",children:ad.map(y=>s.jsxs("button",{type:"button",onClick:()=>Ds(y.key),className:`filter-chip${Yt===y.key?" active":""}`,children:[s.jsx("span",{children:y.icon})," ",y.label]},y.key))}),S==="drive"&&ke&&s.jsxs("div",{className:"new-folder-row",style:{display:"flex",gap:10,marginBottom:20,animation:"fadeIn .2s ease"},children:[s.jsx("input",{className:"input-field",placeholder:"Folder name…",value:ce,onChange:y=>Et(y.target.value),onKeyDown:y=>y.key==="Enter"&&Gc(),style:{width:260},autoFocus:!0}),s.jsx("button",{type:"button",onClick:Gc,className:"btn-primary",children:"Create"}),s.jsx("button",{type:"button",onClick:()=>ae(!1),className:"btn-secondary",children:"Cancel"})]}),s.jsxs("div",{className:"breadcrumb-row",style:{alignItems:"center",gap:8,marginBottom:20,fontSize:14,color:"var(--text-muted)"},children:[s.jsxs("span",{onClick:()=>Yc(-1),className:"breadcrumb-link",style:{color:w?"var(--text-secondary)":"var(--accent)"},children:[ge.logo," Home"]}),C.map((y,I)=>s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--text-muted)"},children:"›"}),s.jsx("span",{onClick:()=>Yc(I),className:"breadcrumb-link",style:{color:I===C.length-1?"var(--accent)":"var(--text-secondary)"},children:y.name})]},y.id))]}),N&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(240,22,58,.24)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(jl,{size:14})," Uploading…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent)"},children:[he,"%"]})]}),s.jsx(Do,{value:he})]}),gt&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(64,144,255,.3)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(jl,{size:14,color:"var(--accent-blue)"})," Downloading ",gt.name,"…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent-blue)"},children:[gt.percent,"%"]})]}),s.jsx(Do,{value:gt.percent})]}),s.jsx("div",{onDragOver:y=>{y.preventDefault(),Ur(!0)},onDragLeave:()=>Ur(!1),onDrop:Hg,className:`drop-zone${Ct?" drag-over":""}`,children:Ct?s.jsx("span",{style:{color:"var(--accent)",fontWeight:700,fontSize:16},children:"⬇ Drop files here to upload"}):s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:32,marginBottom:8},children:"📤"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:700,marginBottom:4},children:"Drag & drop files or folders"}),s.jsx("div",{style:{fontSize:13},children:"or use the Upload button above"})]})}),A.length>0&&s.jsxs("div",{style:{marginBottom:28},children:[s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px",marginBottom:12},children:"FOLDERS"}),s.jsx("div",{className:"folder-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:A.map(y=>s.jsx(Cb,{folder:y,onOpen:Vg,onDelete:Ag},y.id))})]}),s.jsxs("div",{children:[s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:s.jsxs("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px"},children:["FILES ",Zi.length>0&&s.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:500},children:["(",Zi.length,")"]})]})}),Ji?s.jsx(qw,{count:6,grid:Ie==="grid"}):Zi.length===0?s.jsxs("div",{className:"glass-card empty-state",style:{textAlign:"center",padding:"72px 32px",borderRadius:"var(--radius-lg)",border:"1.5px dashed var(--border)",animation:"fadeIn .3s ease"},children:[s.jsx("div",{style:{width:88,height:88,margin:"0 auto 20px",borderRadius:24,background:"var(--gradient-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"var(--glow)"},children:s.jsx(Hd,{size:48})}),s.jsx("div",{style:{fontWeight:800,fontSize:20,marginBottom:8,color:"var(--text)"},children:Yt!=="all"?"No matching files":"No files in My Drive yet"}),s.jsx("div",{style:{fontSize:14,color:"var(--text-muted)",marginBottom:24,maxWidth:360,margin:"0 auto 24px"},children:Yt!=="all"?"Try a different filter or upload new files.":"Upload photos, documents, and more. Everything stays secure in your drive."}),Yt==="all"&&s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"btn-primary",onClick:()=>{var y;return(y=$r.current)==null?void 0:y.click()},children:"Upload your first file"}),s.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>ae(!0),children:"Create folder"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`file-grid${Ie==="grid"?" grid-view":""}`,style:{display:Ie==="grid"?"grid":"flex",gridTemplateColumns:Ie==="grid"?"repeat(auto-fill, minmax(250px, 1fr))":void 0,flexDirection:Ie==="list"?"column":void 0,gap:Ie==="grid"?12:8},children:Zi.map(y=>s.jsx(Gg,{file:y,token:c,onDelete:Og,onShare:I=>Fc(I),onPreview:Ke,onRename:Qe,onDownload:Pg,onMove:I=>Wr({file:I,mode:"move"}),onCopy:I=>Wr({file:I,mode:"copy"}),onTags:Bs},y.id))}),ug&&s.jsx("button",{type:"button",onClick:()=>je(lg+1,!0),className:"load-more-btn",children:"Load more files"})]})]})]})]}),ne&&s.jsx(Ow,{file:ne,token:c,onClose:()=>Ke(null)}),Xn&&s.jsx(Mw,{file:Xn.file,mode:Xn.mode,folders:Zw(fg),currentFolderId:w,onCancel:()=>Wr(null),onConfirm:y=>Xn.mode==="move"?zg(Xn.file,y):Dg(Xn.file,y)}),Us&&s.jsx(Uw,{file:Us,allTags:Ms,onCancel:()=>Bs(null),onSave:y=>Mg(Us,y)}),Fs&&s.jsx(Ww,{file:Fs,onCancel:()=>Fc(null),onShare:y=>Lg(Fs,y)}),_n&&s.jsx(gb,{title:_n.title,message:_n.message,danger:_n.danger,onConfirm:_n.onConfirm,onCancel:()=>rt(null)}),Qn&&s.jsx(mb,{file:Qn,onRename:y=>$g(Qn,y),onCancel:()=>Qe(null)}),s.jsx(hb,{jobs:Le,history:T}),D&&s.jsx(pb,{msg:D.msg,type:D.type,onClose:()=>K(null)})]})})})}function Eb({appPage:e,setAppPage:t,api:n,notify:r,stats:i,usageDetail:o,adminUsers:a,systemHealth:l,loading:c,onRefreshAccount:u,theme:p,setTheme:h}){const{account:f,refreshAll:b}=rg();if(!e)return null;const x=()=>t(null);return e==="profile"?s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(ab,{account:f,onBack:x})}):e==="settings"?s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(lb,{account:f,api:n,onBack:x,onUpdated:()=>b(),notify:r,theme:p,onThemeChange:h})}):e==="security"?s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(cb,{api:n,account:f,onBack:x,notify:r})}):e==="billing"?s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(ub,{account:f,api:n,onBack:x,notify:r,onUpdated:()=>b()})}):e==="help"?s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(db,{onBack:x})}):null}function Cb({folder:e,onOpen:t,onDelete:n}){const[r,i]=m.useState(!1);return s.jsxs("div",{className:"folder-card",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>t(e),children:[s.jsx("span",{style:{fontSize:24},children:"📁"}),s.jsx("div",{style:{flex:1,minWidth:0},children:s.jsx("div",{style:{fontWeight:600,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},children:e.name})}),s.jsx("button",{onClick:o=>{o.stopPropagation(),n(e)},style:{background:"none",border:"none",color:"rgba(255,100,100,.3)",cursor:"pointer",fontSize:14,padding:4,borderRadius:6,opacity:r?1:0,transition:"opacity .15s"},children:"🗑"})]})}sh(document.getElementById("root")).render(s.jsx(m.StrictMode,{children:s.jsx(_b,{})}));export{ge as B,N0 as P,Ib as S,Ne as a,Rs as f,s as j,m as r,Wi as t};
