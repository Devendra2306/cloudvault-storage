(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Kd={exports:{}},ms={},Yd={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zi=Symbol.for("react.element"),Qg=Symbol.for("react.portal"),qg=Symbol.for("react.fragment"),Jg=Symbol.for("react.strict_mode"),Xg=Symbol.for("react.profiler"),Zg=Symbol.for("react.provider"),em=Symbol.for("react.context"),tm=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),rm=Symbol.for("react.memo"),im=Symbol.for("react.lazy"),Jc=Symbol.iterator;function om(e){return e===null||typeof e!="object"?null:(e=Jc&&e[Jc]||e["@@iterator"],typeof e=="function"?e:null)}var Qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qd=Object.assign,Jd={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||Qd}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xd(){}Xd.prototype=Ar.prototype;function Tl(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||Qd}var Nl=Tl.prototype=new Xd;Nl.constructor=Tl;qd(Nl,Ar.prototype);Nl.isPureReactComponent=!0;var Xc=Array.isArray,Zd=Object.prototype.hasOwnProperty,Pl={current:null},ef={key:!0,ref:!0,__self:!0,__source:!0};function tf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Zd.call(t,r)&&!ef.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:zi,type:e,key:o,ref:a,props:i,_owner:Pl.current}}function sm(e,t){return{$$typeof:zi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rl(e){return typeof e=="object"&&e!==null&&e.$$typeof===zi}function am(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zc=/\/+/g;function Gs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?am(""+e.key):t.toString(36)}function bo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case zi:case Qg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Gs(a,0):r,Xc(i)?(n="",e!=null&&(n=e.replace(Zc,"$&/")+"/"),bo(i,t,n,"",function(u){return u})):i!=null&&(Rl(i)&&(i=sm(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Zc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Xc(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Gs(o,l);a+=bo(o,t,n,c,i)}else if(c=om(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Gs(o,l++),a+=bo(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function eo(e,t,n){if(e==null)return e;var r=[],i=0;return bo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function lm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},ko={transition:null},cm={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:ko,ReactCurrentOwner:Pl};function nf(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:eo,forEach:function(e,t,n){eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eo(e,function(){t++}),t},toArray:function(e){return eo(e,function(t){return t})||[]},only:function(e){if(!Rl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Ar;M.Fragment=qg;M.Profiler=Xg;M.PureComponent=Tl;M.StrictMode=Jg;M.Suspense=nm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cm;M.act=nf;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qd({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Pl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Zd.call(t,c)&&!ef.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:zi,type:e.type,key:i,ref:o,props:r,_owner:a}};M.createContext=function(e){return e={$$typeof:em,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zg,_context:e},e.Consumer=e};M.createElement=tf;M.createFactory=function(e){var t=tf.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:tm,render:e}};M.isValidElement=Rl;M.lazy=function(e){return{$$typeof:im,_payload:{_status:-1,_result:e},_init:lm}};M.memo=function(e,t){return{$$typeof:rm,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=ko.transition;ko.transition={};try{e()}finally{ko.transition=t}};M.unstable_act=nf;M.useCallback=function(e,t){return Re.current.useCallback(e,t)};M.useContext=function(e){return Re.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};M.useEffect=function(e,t){return Re.current.useEffect(e,t)};M.useId=function(){return Re.current.useId()};M.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Re.current.useMemo(e,t)};M.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};M.useRef=function(e){return Re.current.useRef(e)};M.useState=function(e){return Re.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return Re.current.useTransition()};M.version="18.3.1";Yd.exports=M;var m=Yd.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um=m,dm=Symbol.for("react.element"),fm=Symbol.for("react.fragment"),pm=Object.prototype.hasOwnProperty,hm=um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gm={key:!0,ref:!0,__self:!0,__source:!0};function rf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)pm.call(t,r)&&!gm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:dm,type:e,key:o,ref:a,props:i,_owner:hm.current}}ms.Fragment=fm;ms.jsx=rf;ms.jsxs=rf;Kd.exports=ms;var s=Kd.exports,of={exports:{}},He={},sf={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var z=T.length;T.push(D);e:for(;0<z;){var Y=z-1>>>1,ne=T[Y];if(0<i(ne,D))T[Y]=D,T[z]=ne,z=Y;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],z=T.pop();if(z!==D){T[0]=z;e:for(var Y=0,ne=T.length,Ye=ne>>>1;Y<Ye;){var ce=2*(Y+1)-1,Et=T[ce],be=ce+1,ae=T[be];if(0>i(Et,z))be<ne&&0>i(ae,Et)?(T[Y]=ae,T[be]=z,Y=be):(T[Y]=Et,T[ce]=z,Y=ce);else if(be<ne&&0>i(ae,z))T[Y]=ae,T[be]=z,Y=be;else break e}}return D}function i(T,D){var z=T.sortIndex-D.sortIndex;return z!==0?z:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],p=1,h=null,d=3,x=!1,b=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=T)r(u),D.sortIndex=D.expirationTime,t(c,D);else break;D=n(u)}}function w(T){if(k=!1,v(T),!b)if(n(c)!==null)b=!0,Ae(E);else{var D=n(u);D!==null&&Ke(w,D.startTime-T)}}function E(T,D){b=!1,k&&(k=!1,g(R),R=-1),x=!0;var z=d;try{for(v(D),h=n(c);h!==null&&(!(h.expirationTime>D)||T&&!pe());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,d=h.priorityLevel;var ne=Y(h.expirationTime<=D);D=e.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(c)&&r(c),v(D)}else r(c);h=n(c)}if(h!==null)var Ye=!0;else{var ce=n(u);ce!==null&&Ke(w,ce.startTime-D),Ye=!1}return Ye}finally{h=null,d=z,x=!1}}var C=!1,j=null,R=-1,V=5,N=-1;function pe(){return!(e.unstable_now()-N<V)}function he(){if(j!==null){var T=e.unstable_now();N=T;var D=!0;try{D=j(!0,T)}finally{D?we():(C=!1,j=null)}}else C=!1}var we;if(typeof f=="function")we=function(){f(he)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,Sn=gt.port2;gt.port1.onmessage=he,we=function(){Sn.postMessage(null)}}else we=function(){A(he,0)};function Ae(T){j=T,C||(C=!0,we())}function Ke(T,D){R=A(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){b||x||(b=!0,Ae(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var z=d;d=D;try{return T()}finally{d=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=d;d=T;try{return D()}finally{d=z}},e.unstable_scheduleCallback=function(T,D,z){var Y=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Y+z:Y):z=Y,T){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=z+ne,T={id:p++,callback:D,priorityLevel:T,startTime:z,expirationTime:ne,sortIndex:-1},z>Y?(T.sortIndex=z,t(u,T),n(c)===null&&T===n(u)&&(k?(g(R),R=-1):k=!0,Ke(w,z-Y))):(T.sortIndex=ne,t(c,T),b||x||(b=!0,Ae(E))),T},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(T){var D=d;return function(){var z=d;d=D;try{return T.apply(this,arguments)}finally{d=z}}}})(af);sf.exports=af;var mm=sf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm=m,Ve=mm;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lf=new Set,vi={};function Gn(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(vi[e]=t,e=0;e<t.length;e++)lf.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eu={},tu={};function xm(e){return ja.call(tu,e)?!0:ja.call(eu,e)?!1:ym.test(e)?tu[e]=!0:(eu[e]=!0,!1)}function wm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bm(e,t,n,r){if(t===null||typeof t>"u"||wm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ol=/[\-:]([a-z])/g;function Al(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ol,Al);xe[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ol,Al);xe[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ol,Al);xe[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ll(e,t,n,r){var i=xe.hasOwnProperty(t)?xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bm(t,n,i,r)&&(n=null),r||i===null?xm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),nr=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),Dl=Symbol.for("react.strict_mode"),Ta=Symbol.for("react.profiler"),cf=Symbol.for("react.provider"),uf=Symbol.for("react.context"),zl=Symbol.for("react.forward_ref"),Na=Symbol.for("react.suspense"),Pa=Symbol.for("react.suspense_list"),Ml=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),df=Symbol.for("react.offscreen"),nu=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Ks;function ti(e){if(Ks===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ks=t&&t[1]||""}return`
`+Ks+e}var Ys=!1;function Qs(e,t){if(!e||Ys)return"";Ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Ys=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ti(e):""}function km(e){switch(e.tag){case 5:return ti(e.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return e=Qs(e.type,!1),e;case 11:return e=Qs(e.type.render,!1),e;case 1:return e=Qs(e.type,!0),e;default:return""}}function Ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rr:return"Fragment";case nr:return"Portal";case Ta:return"Profiler";case Dl:return"StrictMode";case Na:return"Suspense";case Pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uf:return(e.displayName||"Context")+".Consumer";case cf:return(e._context.displayName||"Context")+".Provider";case zl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ml:return t=e.displayName||null,t!==null?t:Ra(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return Ra(e(t))}catch{}}return null}function Sm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ra(t);case 8:return t===Dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _m(e){var t=ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function no(e){e._valueTracker||(e._valueTracker=_m(e))}function pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ff(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oa(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ru(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hf(e,t){t=t.checked,t!=null&&Ll(e,"checked",t,!1)}function Aa(e,t){hf(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?La(e,t.type,n):t.hasOwnProperty("defaultValue")&&La(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function La(e,t,n){(t!=="number"||Mo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ni=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Da(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(ni(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function gf(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function za(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Em=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(e){Em.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oi[t]=oi[e]})});function yf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oi.hasOwnProperty(e)&&oi[e]?(""+t).trim():t+"px"}function xf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Cm=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ma(e,t){if(t){if(Cm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Fa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ua=null;function Fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ba=null,gr=null,mr=null;function au(e){if(e=Ui(e)){if(typeof Ba!="function")throw Error(_(280));var t=e.stateNode;t&&(t=bs(t),Ba(e.stateNode,e.type,t))}}function wf(e){gr?mr?mr.push(e):mr=[e]:gr=e}function bf(){if(gr){var e=gr,t=mr;if(mr=gr=null,au(e),t)for(e=0;e<t.length;e++)au(t[e])}}function kf(e,t){return e(t)}function Sf(){}var qs=!1;function _f(e,t,n){if(qs)return e(t,n);qs=!0;try{return kf(e,t,n)}finally{qs=!1,(gr!==null||mr!==null)&&(Sf(),bf())}}function xi(e,t){var n=e.stateNode;if(n===null)return null;var r=bs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Wa=!1;if(Ft)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Wa=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Wa=!1}function Im(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var si=!1,Fo=null,Uo=!1,$a=null,jm={onError:function(e){si=!0,Fo=e}};function Tm(e,t,n,r,i,o,a,l,c){si=!1,Fo=null,Im.apply(jm,arguments)}function Nm(e,t,n,r,i,o,a,l,c){if(Tm.apply(this,arguments),si){if(si){var u=Fo;si=!1,Fo=null}else throw Error(_(198));Uo||(Uo=!0,$a=u)}}function Kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ef(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lu(e){if(Kn(e)!==e)throw Error(_(188))}function Pm(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return lu(i),e;if(o===r)return lu(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Cf(e){return e=Pm(e),e!==null?If(e):null}function If(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=If(e);if(t!==null)return t;e=e.sibling}return null}var jf=Ve.unstable_scheduleCallback,cu=Ve.unstable_cancelCallback,Rm=Ve.unstable_shouldYield,Om=Ve.unstable_requestPaint,le=Ve.unstable_now,Am=Ve.unstable_getCurrentPriorityLevel,Ul=Ve.unstable_ImmediatePriority,Tf=Ve.unstable_UserBlockingPriority,Bo=Ve.unstable_NormalPriority,Lm=Ve.unstable_LowPriority,Nf=Ve.unstable_IdlePriority,vs=null,wt=null;function Dm(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(vs,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Fm,zm=Math.log,Mm=Math.LN2;function Fm(e){return e>>>=0,e===0?32:31-(zm(e)/Mm|0)|0}var io=64,oo=4194304;function ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ri(l):(o&=a,o!==0&&(r=ri(o)))}else a=n&~i,a!==0?r=ri(a):o!==0&&(r=ri(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function Um(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-dt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=Um(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pf(){var e=io;return io<<=1,!(io&4194240)&&(io=64),e}function Js(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Wm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Bl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function Rf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Of,Wl,Af,Lf,Df,Ha=!1,so=[],an=null,ln=null,cn=null,wi=new Map,bi=new Map,Zt=[],$m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uu(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(t.pointerId)}}function Gr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ui(t),t!==null&&Wl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vm(e,t,n,r,i){switch(t){case"focusin":return an=Gr(an,e,t,n,r,i),!0;case"dragenter":return ln=Gr(ln,e,t,n,r,i),!0;case"mouseover":return cn=Gr(cn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return wi.set(o,Gr(wi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,bi.set(o,Gr(bi.get(o)||null,e,t,n,r,i)),!0}return!1}function zf(e){var t=On(e.target);if(t!==null){var n=Kn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ef(n),t!==null){e.blockedOn=t,Df(e.priority,function(){Af(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ua=r,n.target.dispatchEvent(r),Ua=null}else return t=Ui(n),t!==null&&Wl(t),e.blockedOn=n,!1;t.shift()}return!0}function du(e,t,n){So(e)&&n.delete(t)}function Hm(){Ha=!1,an!==null&&So(an)&&(an=null),ln!==null&&So(ln)&&(ln=null),cn!==null&&So(cn)&&(cn=null),wi.forEach(du),bi.forEach(du)}function Kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ha||(Ha=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Hm)))}function ki(e){function t(i){return Kr(i,e)}if(0<so.length){Kr(so[0],e);for(var n=1;n<so.length;n++){var r=so[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Kr(an,e),ln!==null&&Kr(ln,e),cn!==null&&Kr(cn,e),wi.forEach(t),bi.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)zf(n),n.blockedOn===null&&Zt.shift()}var vr=Gt.ReactCurrentBatchConfig,$o=!0;function Gm(e,t,n,r){var i=q,o=vr.transition;vr.transition=null;try{q=1,$l(e,t,n,r)}finally{q=i,vr.transition=o}}function Km(e,t,n,r){var i=q,o=vr.transition;vr.transition=null;try{q=4,$l(e,t,n,r)}finally{q=i,vr.transition=o}}function $l(e,t,n,r){if($o){var i=Ga(e,t,n,r);if(i===null)aa(e,t,r,Vo,n),uu(e,r);else if(Vm(i,e,t,n,r))r.stopPropagation();else if(uu(e,r),t&4&&-1<$m.indexOf(e)){for(;i!==null;){var o=Ui(i);if(o!==null&&Of(o),o=Ga(e,t,n,r),o===null&&aa(e,t,r,Vo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else aa(e,t,r,null,n)}}var Vo=null;function Ga(e,t,n,r){if(Vo=null,e=Fl(r),e=On(e),e!==null)if(t=Kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ef(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vo=e,null}function Mf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Am()){case Ul:return 1;case Tf:return 4;case Bo:case Lm:return 16;case Nf:return 536870912;default:return 16}default:return 16}}var rn=null,Vl=null,_o=null;function Ff(){if(_o)return _o;var e,t=Vl,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return _o=i.slice(e,1<r?1-r:void 0)}function Eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function fu(){return!1}function Ge(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ao:fu,this.isPropagationStopped=fu,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Ge(Lr),Fi=oe({},Lr,{view:0,detail:0}),Ym=Ge(Fi),Xs,Zs,Yr,ys=oe({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(Xs=e.screenX-Yr.screenX,Zs=e.screenY-Yr.screenY):Zs=Xs=0,Yr=e),Xs)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),pu=Ge(ys),Qm=oe({},ys,{dataTransfer:0}),qm=Ge(Qm),Jm=oe({},Fi,{relatedTarget:0}),ea=Ge(Jm),Xm=oe({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zm=Ge(Xm),ev=oe({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tv=Ge(ev),nv=oe({},Lr,{data:0}),hu=Ge(nv),rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ov[e])?!!t[e]:!1}function Gl(){return sv}var av=oe({},Fi,{key:function(e){if(e.key){var t=rv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(e){return e.type==="keypress"?Eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lv=Ge(av),cv=oe({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=Ge(cv),uv=oe({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),dv=Ge(uv),fv=oe({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),pv=Ge(fv),hv=oe({},ys,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gv=Ge(hv),mv=[9,13,27,32],Kl=Ft&&"CompositionEvent"in window,ai=null;Ft&&"documentMode"in document&&(ai=document.documentMode);var vv=Ft&&"TextEvent"in window&&!ai,Uf=Ft&&(!Kl||ai&&8<ai&&11>=ai),mu=" ",vu=!1;function Bf(e,t){switch(e){case"keyup":return mv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function yv(e,t){switch(e){case"compositionend":return Wf(t);case"keypress":return t.which!==32?null:(vu=!0,mu);case"textInput":return e=t.data,e===mu&&vu?null:e;default:return null}}function xv(e,t){if(ir)return e==="compositionend"||!Kl&&Bf(e,t)?(e=Ff(),_o=Vl=rn=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uf&&t.locale!=="ko"?null:t.data;default:return null}}var wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wv[e.type]:t==="textarea"}function $f(e,t,n,r){wf(r),t=Ho(t,"onChange"),0<t.length&&(n=new Hl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var li=null,Si=null;function bv(e){ep(e,0)}function xs(e){var t=ar(e);if(pf(t))return e}function kv(e,t){if(e==="change")return t}var Vf=!1;if(Ft){var ta;if(Ft){var na="oninput"in document;if(!na){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),na=typeof xu.oninput=="function"}ta=na}else ta=!1;Vf=ta&&(!document.documentMode||9<document.documentMode)}function wu(){li&&(li.detachEvent("onpropertychange",Hf),Si=li=null)}function Hf(e){if(e.propertyName==="value"&&xs(Si)){var t=[];$f(t,Si,e,Fl(e)),_f(bv,t)}}function Sv(e,t,n){e==="focusin"?(wu(),li=t,Si=n,li.attachEvent("onpropertychange",Hf)):e==="focusout"&&wu()}function _v(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xs(Si)}function Ev(e,t){if(e==="click")return xs(t)}function Cv(e,t){if(e==="input"||e==="change")return xs(t)}function Iv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Iv;function _i(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ja.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var n=bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bu(n)}}function Gf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kf(){for(var e=window,t=Mo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mo(e.document)}return t}function Yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jv(e){var t=Kf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gf(n.ownerDocument.documentElement,n)){if(r!==null&&Yl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ku(n,o);var a=ku(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tv=Ft&&"documentMode"in document&&11>=document.documentMode,or=null,Ka=null,ci=null,Ya=!1;function Su(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ya||or==null||or!==Mo(r)||(r=or,"selectionStart"in r&&Yl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ci&&_i(ci,r)||(ci=r,r=Ho(Ka,"onSelect"),0<r.length&&(t=new Hl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},ra={},Yf={};Ft&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function ws(e){if(ra[e])return ra[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yf)return ra[e]=t[n];return e}var Qf=ws("animationend"),qf=ws("animationiteration"),Jf=ws("animationstart"),Xf=ws("transitionend"),Zf=new Map,_u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){Zf.set(e,t),Gn(t,[e])}for(var ia=0;ia<_u.length;ia++){var oa=_u[ia],Nv=oa.toLowerCase(),Pv=oa[0].toUpperCase()+oa.slice(1);xn(Nv,"on"+Pv)}xn(Qf,"onAnimationEnd");xn(qf,"onAnimationIteration");xn(Jf,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Xf,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function Eu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nm(r,t,void 0,e),e.currentTarget=null}function ep(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Eu(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Eu(i,l,u),o=c}}}if(Uo)throw e=$a,Uo=!1,$a=null,e}function Z(e,t){var n=t[Za];n===void 0&&(n=t[Za]=new Set);var r=e+"__bubble";n.has(r)||(tp(t,e,2,!1),n.add(r))}function sa(e,t,n){var r=0;t&&(r|=4),tp(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Ei(e){if(!e[co]){e[co]=!0,lf.forEach(function(n){n!=="selectionchange"&&(Rv.has(n)||sa(n,!1,e),sa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,sa("selectionchange",!1,t))}}function tp(e,t,n,r){switch(Mf(t)){case 1:var i=Gm;break;case 4:i=Km;break;default:i=$l}n=i.bind(null,t,n,e),i=void 0,!Wa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function aa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=On(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}_f(function(){var u=o,p=Fl(n),h=[];e:{var d=Zf.get(e);if(d!==void 0){var x=Hl,b=e;switch(e){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":x=lv;break;case"focusin":b="focus",x=ea;break;case"focusout":b="blur",x=ea;break;case"beforeblur":case"afterblur":x=ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=dv;break;case Qf:case qf:case Jf:x=Zm;break;case Xf:x=pv;break;case"scroll":x=Ym;break;case"wheel":x=gv;break;case"copy":case"cut":case"paste":x=tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=gu}var k=(t&4)!==0,A=!k&&e==="scroll",g=k?d!==null?d+"Capture":null:d;k=[];for(var f=u,v;f!==null;){v=f;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,g!==null&&(w=xi(f,g),w!=null&&k.push(Ci(f,w,v)))),A)break;f=f.return}0<k.length&&(d=new x(d,b,null,n,p),h.push({event:d,listeners:k}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",d&&n!==Ua&&(b=n.relatedTarget||n.fromElement)&&(On(b)||b[Ut]))break e;if((x||d)&&(d=p.window===p?p:(d=p.ownerDocument)?d.defaultView||d.parentWindow:window,x?(b=n.relatedTarget||n.toElement,x=u,b=b?On(b):null,b!==null&&(A=Kn(b),b!==A||b.tag!==5&&b.tag!==6)&&(b=null)):(x=null,b=u),x!==b)){if(k=pu,w="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(k=gu,w="onPointerLeave",g="onPointerEnter",f="pointer"),A=x==null?d:ar(x),v=b==null?d:ar(b),d=new k(w,f+"leave",x,n,p),d.target=A,d.relatedTarget=v,w=null,On(p)===u&&(k=new k(g,f+"enter",b,n,p),k.target=v,k.relatedTarget=A,w=k),A=w,x&&b)t:{for(k=x,g=b,f=0,v=k;v;v=Zn(v))f++;for(v=0,w=g;w;w=Zn(w))v++;for(;0<f-v;)k=Zn(k),f--;for(;0<v-f;)g=Zn(g),v--;for(;f--;){if(k===g||g!==null&&k===g.alternate)break t;k=Zn(k),g=Zn(g)}k=null}else k=null;x!==null&&Cu(h,d,x,k,!1),b!==null&&A!==null&&Cu(h,A,b,k,!0)}}e:{if(d=u?ar(u):window,x=d.nodeName&&d.nodeName.toLowerCase(),x==="select"||x==="input"&&d.type==="file")var E=kv;else if(yu(d))if(Vf)E=Cv;else{E=_v;var C=Sv}else(x=d.nodeName)&&x.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=Ev);if(E&&(E=E(e,u))){$f(h,E,n,p);break e}C&&C(e,d,u),e==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&La(d,"number",d.value)}switch(C=u?ar(u):window,e){case"focusin":(yu(C)||C.contentEditable==="true")&&(or=C,Ka=u,ci=null);break;case"focusout":ci=Ka=or=null;break;case"mousedown":Ya=!0;break;case"contextmenu":case"mouseup":case"dragend":Ya=!1,Su(h,n,p);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":Su(h,n,p)}var j;if(Kl)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ir?Bf(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Uf&&n.locale!=="ko"&&(ir||R!=="onCompositionStart"?R==="onCompositionEnd"&&ir&&(j=Ff()):(rn=p,Vl="value"in rn?rn.value:rn.textContent,ir=!0)),C=Ho(u,R),0<C.length&&(R=new hu(R,e,null,n,p),h.push({event:R,listeners:C}),j?R.data=j:(j=Wf(n),j!==null&&(R.data=j)))),(j=vv?yv(e,n):xv(e,n))&&(u=Ho(u,"onBeforeInput"),0<u.length&&(p=new hu("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=j))}ep(h,t)})}function Ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=xi(e,n),o!=null&&r.unshift(Ci(e,o,i)),o=xi(e,t),o!=null&&r.push(Ci(e,o,i))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cu(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=xi(n,o),c!=null&&a.unshift(Ci(n,c,l))):i||(c=xi(n,o),c!=null&&a.push(Ci(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ov=/\r\n?/g,Av=/\u0000|\uFFFD/g;function Iu(e){return(typeof e=="string"?e:""+e).replace(Ov,`
`).replace(Av,"")}function uo(e,t,n){if(t=Iu(t),Iu(e)!==t&&n)throw Error(_(425))}function Go(){}var Qa=null,qa=null;function Ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xa=typeof setTimeout=="function"?setTimeout:void 0,Lv=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(zv)}:Xa;function zv(e){setTimeout(function(){throw e})}function la(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ki(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ki(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),yt="__reactFiber$"+Dr,Ii="__reactProps$"+Dr,Ut="__reactContainer$"+Dr,Za="__reactEvents$"+Dr,Mv="__reactListeners$"+Dr,Fv="__reactHandles$"+Dr;function On(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tu(e);e!==null;){if(n=e[yt])return n;e=Tu(e)}return t}e=n,n=e.parentNode}return null}function Ui(e){return e=e[yt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function bs(e){return e[Ii]||null}var el=[],lr=-1;function wn(e){return{current:e}}function ee(e){0>lr||(e.current=el[lr],el[lr]=null,lr--)}function X(e,t){lr++,el[lr]=e.current,e.current=t}var yn={},Ee=wn(yn),ze=wn(!1),Bn=yn;function Er(e,t){var n=e.type.contextTypes;if(!n)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Me(e){return e=e.childContextTypes,e!=null}function Ko(){ee(ze),ee(Ee)}function Nu(e,t,n){if(Ee.current!==yn)throw Error(_(168));X(Ee,t),X(ze,n)}function np(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,Sm(e)||"Unknown",i));return oe({},n,r)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Bn=Ee.current,X(Ee,e),X(ze,ze.current),!0}function Pu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=np(e,t,Bn),r.__reactInternalMemoizedMergedChildContext=e,ee(ze),ee(Ee),X(Ee,e)):ee(ze),X(ze,n)}var Nt=null,ks=!1,ca=!1;function rp(e){Nt===null?Nt=[e]:Nt.push(e)}function Uv(e){ks=!0,rp(e)}function bn(){if(!ca&&Nt!==null){ca=!0;var e=0,t=q;try{var n=Nt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,ks=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(e+1)),jf(Ul,bn),i}finally{q=t,ca=!1}}return null}var cr=[],ur=0,Qo=null,qo=0,Je=[],Xe=0,Wn=null,At=1,Lt="";function Nn(e,t){cr[ur++]=qo,cr[ur++]=Qo,Qo=e,qo=t}function ip(e,t,n){Je[Xe++]=At,Je[Xe++]=Lt,Je[Xe++]=Wn,Wn=e;var r=At;e=Lt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,At=1<<32-dt(t)+i|n<<i|r,Lt=o+e}else At=1<<o|n<<i|r,Lt=e}function Ql(e){e.return!==null&&(Nn(e,1),ip(e,1,0))}function ql(e){for(;e===Qo;)Qo=cr[--ur],cr[ur]=null,qo=cr[--ur],cr[ur]=null;for(;e===Wn;)Wn=Je[--Xe],Je[Xe]=null,Lt=Je[--Xe],Je[Xe]=null,At=Je[--Xe],Je[Xe]=null}var $e=null,We=null,te=!1,ct=null;function op(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ru(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,We=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wn!==null?{id:At,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,We=null,!0):!1;default:return!1}}function tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nl(e){if(te){var t=We;if(t){var n=t;if(!Ru(e,t)){if(tl(e))throw Error(_(418));t=un(n.nextSibling);var r=$e;t&&Ru(e,t)?op(r,n):(e.flags=e.flags&-4097|2,te=!1,$e=e)}}else{if(tl(e))throw Error(_(418));e.flags=e.flags&-4097|2,te=!1,$e=e}}}function Ou(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function fo(e){if(e!==$e)return!1;if(!te)return Ou(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ja(e.type,e.memoizedProps)),t&&(t=We)){if(tl(e))throw sp(),Error(_(418));for(;t;)op(e,t),t=un(t.nextSibling)}if(Ou(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=$e?un(e.stateNode.nextSibling):null;return!0}function sp(){for(var e=We;e;)e=un(e.nextSibling)}function Cr(){We=$e=null,te=!1}function Jl(e){ct===null?ct=[e]:ct.push(e)}var Bv=Gt.ReactCurrentBatchConfig;function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Au(e){var t=e._init;return t(e._payload)}function ap(e){function t(g,f){if(e){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=hn(g,f),g.index=0,g.sibling=null,g}function o(g,f,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=2,f)):(g.flags|=1048576,f)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,f,v,w){return f===null||f.tag!==6?(f=ma(v,g.mode,w),f.return=g,f):(f=i(f,v),f.return=g,f)}function c(g,f,v,w){var E=v.type;return E===rr?p(g,f,v.props.children,w,v.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Jt&&Au(E)===f.type)?(w=i(f,v.props),w.ref=Qr(g,f,v),w.return=g,w):(w=Ro(v.type,v.key,v.props,null,g.mode,w),w.ref=Qr(g,f,v),w.return=g,w)}function u(g,f,v,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=va(v,g.mode,w),f.return=g,f):(f=i(f,v.children||[]),f.return=g,f)}function p(g,f,v,w,E){return f===null||f.tag!==7?(f=Mn(v,g.mode,w,E),f.return=g,f):(f=i(f,v),f.return=g,f)}function h(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ma(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case to:return v=Ro(f.type,f.key,f.props,null,g.mode,v),v.ref=Qr(g,null,f),v.return=g,v;case nr:return f=va(f,g.mode,v),f.return=g,f;case Jt:var w=f._init;return h(g,w(f._payload),v)}if(ni(f)||Vr(f))return f=Mn(f,g.mode,v,null),f.return=g,f;po(g,f)}return null}function d(g,f,v,w){var E=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:l(g,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case to:return v.key===E?c(g,f,v,w):null;case nr:return v.key===E?u(g,f,v,w):null;case Jt:return E=v._init,d(g,f,E(v._payload),w)}if(ni(v)||Vr(v))return E!==null?null:p(g,f,v,w,null);po(g,v)}return null}function x(g,f,v,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(v)||null,l(f,g,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case to:return g=g.get(w.key===null?v:w.key)||null,c(f,g,w,E);case nr:return g=g.get(w.key===null?v:w.key)||null,u(f,g,w,E);case Jt:var C=w._init;return x(g,f,v,C(w._payload),E)}if(ni(w)||Vr(w))return g=g.get(v)||null,p(f,g,w,E,null);po(f,w)}return null}function b(g,f,v,w){for(var E=null,C=null,j=f,R=f=0,V=null;j!==null&&R<v.length;R++){j.index>R?(V=j,j=null):V=j.sibling;var N=d(g,j,v[R],w);if(N===null){j===null&&(j=V);break}e&&j&&N.alternate===null&&t(g,j),f=o(N,f,R),C===null?E=N:C.sibling=N,C=N,j=V}if(R===v.length)return n(g,j),te&&Nn(g,R),E;if(j===null){for(;R<v.length;R++)j=h(g,v[R],w),j!==null&&(f=o(j,f,R),C===null?E=j:C.sibling=j,C=j);return te&&Nn(g,R),E}for(j=r(g,j);R<v.length;R++)V=x(j,g,R,v[R],w),V!==null&&(e&&V.alternate!==null&&j.delete(V.key===null?R:V.key),f=o(V,f,R),C===null?E=V:C.sibling=V,C=V);return e&&j.forEach(function(pe){return t(g,pe)}),te&&Nn(g,R),E}function k(g,f,v,w){var E=Vr(v);if(typeof E!="function")throw Error(_(150));if(v=E.call(v),v==null)throw Error(_(151));for(var C=E=null,j=f,R=f=0,V=null,N=v.next();j!==null&&!N.done;R++,N=v.next()){j.index>R?(V=j,j=null):V=j.sibling;var pe=d(g,j,N.value,w);if(pe===null){j===null&&(j=V);break}e&&j&&pe.alternate===null&&t(g,j),f=o(pe,f,R),C===null?E=pe:C.sibling=pe,C=pe,j=V}if(N.done)return n(g,j),te&&Nn(g,R),E;if(j===null){for(;!N.done;R++,N=v.next())N=h(g,N.value,w),N!==null&&(f=o(N,f,R),C===null?E=N:C.sibling=N,C=N);return te&&Nn(g,R),E}for(j=r(g,j);!N.done;R++,N=v.next())N=x(j,g,R,N.value,w),N!==null&&(e&&N.alternate!==null&&j.delete(N.key===null?R:N.key),f=o(N,f,R),C===null?E=N:C.sibling=N,C=N);return e&&j.forEach(function(he){return t(g,he)}),te&&Nn(g,R),E}function A(g,f,v,w){if(typeof v=="object"&&v!==null&&v.type===rr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case to:e:{for(var E=v.key,C=f;C!==null;){if(C.key===E){if(E=v.type,E===rr){if(C.tag===7){n(g,C.sibling),f=i(C,v.props.children),f.return=g,g=f;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Jt&&Au(E)===C.type){n(g,C.sibling),f=i(C,v.props),f.ref=Qr(g,C,v),f.return=g,g=f;break e}n(g,C);break}else t(g,C);C=C.sibling}v.type===rr?(f=Mn(v.props.children,g.mode,w,v.key),f.return=g,g=f):(w=Ro(v.type,v.key,v.props,null,g.mode,w),w.ref=Qr(g,f,v),w.return=g,g=w)}return a(g);case nr:e:{for(C=v.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(g,f.sibling),f=i(f,v.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=va(v,g.mode,w),f.return=g,g=f}return a(g);case Jt:return C=v._init,A(g,f,C(v._payload),w)}if(ni(v))return b(g,f,v,w);if(Vr(v))return k(g,f,v,w);po(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,v),f.return=g,g=f):(n(g,f),f=ma(v,g.mode,w),f.return=g,g=f),a(g)):n(g,f)}return A}var Ir=ap(!0),lp=ap(!1),Jo=wn(null),Xo=null,dr=null,Xl=null;function Zl(){Xl=dr=Xo=null}function ec(e){var t=Jo.current;ee(Jo),e._currentValue=t}function rl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yr(e,t){Xo=e,Xl=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(Xl!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(Xo===null)throw Error(_(308));dr=e,Xo.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var An=null;function tc(e){An===null?An=[e]:An.push(e)}function cp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,tc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function up(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bt(e,n)}return i=r.interleaved,i===null?(t.next=t,tc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bt(e,n)}function Co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bl(e,n)}}function Lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zo(e,t,n,r){var i=e.updateQueue;Xt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;a=0,p=u=c=null,l=o;do{var d=l.lane,x=l.eventTime;if((r&d)===d){p!==null&&(p=p.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,k=l;switch(d=t,x=n,k.tag){case 1:if(b=k.payload,typeof b=="function"){h=b.call(x,h,d);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=k.payload,d=typeof b=="function"?b.call(x,h,d):b,d==null)break e;h=oe({},h,d);break e;case 2:Xt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else x={eventTime:x,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=x,c=h):p=p.next=x,a|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(p===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Vn|=a,e.lanes=a,e.memoizedState=h}}function Du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Bi={},bt=wn(Bi),ji=wn(Bi),Ti=wn(Bi);function Ln(e){if(e===Bi)throw Error(_(174));return e}function rc(e,t){switch(X(Ti,t),X(ji,e),X(bt,Bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:za(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=za(t,e)}ee(bt),X(bt,t)}function jr(){ee(bt),ee(ji),ee(Ti)}function dp(e){Ln(Ti.current);var t=Ln(bt.current),n=za(t,e.type);t!==n&&(X(ji,e),X(bt,n))}function ic(e){ji.current===e&&(ee(bt),ee(ji))}var re=wn(0);function es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ua=[];function oc(){for(var e=0;e<ua.length;e++)ua[e]._workInProgressVersionPrimary=null;ua.length=0}var Io=Gt.ReactCurrentDispatcher,da=Gt.ReactCurrentBatchConfig,$n=0,ie=null,de=null,ge=null,ts=!1,ui=!1,Ni=0,Wv=0;function ke(){throw Error(_(321))}function sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function ac(e,t,n,r,i,o){if($n=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Io.current=e===null||e.memoizedState===null?Gv:Kv,e=n(r,i),ui){o=0;do{if(ui=!1,Ni=0,25<=o)throw Error(_(301));o+=1,ge=de=null,t.updateQueue=null,Io.current=Yv,e=n(r,i)}while(ui)}if(Io.current=ns,t=de!==null&&de.next!==null,$n=0,ge=de=ie=null,ts=!1,t)throw Error(_(300));return e}function lc(){var e=Ni!==0;return Ni=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function nt(){if(de===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,de=e;else{if(e===null)throw Error(_(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function Pi(e,t){return typeof t=="function"?t(e):t}function fa(e){var t=nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=de,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var p=u.lane;if(($n&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,a=r):c=c.next=h,ie.lanes|=p,Vn|=p}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,ht(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,Vn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pa(e){var t=nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);ht(o,t.memoizedState)||(De=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fp(){}function pp(e,t){var n=ie,r=nt(),i=t(),o=!ht(r.memoizedState,i);if(o&&(r.memoizedState=i,De=!0),r=r.queue,cc(mp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Ri(9,gp.bind(null,n,r,i,t),void 0,null),me===null)throw Error(_(349));$n&30||hp(n,t,i)}return i}function hp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gp(e,t,n,r){t.value=n,t.getSnapshot=r,vp(t)&&yp(e)}function mp(e,t,n){return n(function(){vp(t)&&yp(e)})}function vp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function yp(e){var t=Bt(e,1);t!==null&&ft(t,e,1,-1)}function zu(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},t.queue=e,e=e.dispatch=Hv.bind(null,ie,e),[t.memoizedState,e]}function Ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xp(){return nt().memoizedState}function jo(e,t,n,r){var i=vt();ie.flags|=e,i.memoizedState=Ri(1|t,n,void 0,r===void 0?null:r)}function Ss(e,t,n,r){var i=nt();r=r===void 0?null:r;var o=void 0;if(de!==null){var a=de.memoizedState;if(o=a.destroy,r!==null&&sc(r,a.deps)){i.memoizedState=Ri(t,n,o,r);return}}ie.flags|=e,i.memoizedState=Ri(1|t,n,o,r)}function Mu(e,t){return jo(8390656,8,e,t)}function cc(e,t){return Ss(2048,8,e,t)}function wp(e,t){return Ss(4,2,e,t)}function bp(e,t){return Ss(4,4,e,t)}function kp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sp(e,t,n){return n=n!=null?n.concat([e]):null,Ss(4,4,kp.bind(null,t,e),n)}function uc(){}function _p(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ep(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cp(e,t,n){return $n&21?(ht(n,t)||(n=Pf(),ie.lanes|=n,Vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function $v(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=da.transition;da.transition={};try{e(!1),t()}finally{q=n,da.transition=r}}function Ip(){return nt().memoizedState}function Vv(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jp(e))Tp(t,n);else if(n=cp(e,t,n,r),n!==null){var i=Ne();ft(n,e,r,i),Np(n,t,r)}}function Hv(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jp(e))Tp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,ht(l,a)){var c=t.interleaved;c===null?(i.next=i,tc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=cp(e,t,i,r),n!==null&&(i=Ne(),ft(n,e,r,i),Np(n,t,r))}}function jp(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Tp(e,t){ui=ts=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Np(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bl(e,n)}}var ns={readContext:tt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Gv={readContext:tt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Mu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jo(4194308,4,kp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return jo(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vv.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:uc,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=$v.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=vt();if(te){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),me===null)throw Error(_(349));$n&30||hp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Mu(mp.bind(null,r,o,e),[e]),r.flags|=2048,Ri(9,gp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vt(),t=me.identifierPrefix;if(te){var n=Lt,r=At;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kv={readContext:tt,useCallback:_p,useContext:tt,useEffect:cc,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:bp,useMemo:Ep,useReducer:fa,useRef:xp,useState:function(){return fa(Pi)},useDebugValue:uc,useDeferredValue:function(e){var t=nt();return Cp(t,de.memoizedState,e)},useTransition:function(){var e=fa(Pi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:pp,useId:Ip,unstable_isNewReconciler:!1},Yv={readContext:tt,useCallback:_p,useContext:tt,useEffect:cc,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:bp,useMemo:Ep,useReducer:pa,useRef:xp,useState:function(){return pa(Pi)},useDebugValue:uc,useDeferredValue:function(e){var t=nt();return de===null?t.memoizedState=e:Cp(t,de.memoizedState,e)},useTransition:function(){var e=pa(Pi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:pp,useId:Ip,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function il(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _s={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=pn(e),o=Mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(ft(t,e,i,r),Co(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=pn(e),o=Mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(ft(t,e,i,r),Co(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=pn(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=dn(e,i,r),t!==null&&(ft(t,e,r,n),Co(t,e,r))}};function Fu(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!_i(n,r)||!_i(i,o):!0}function Pp(e,t,n){var r=!1,i=yn,o=t.contextType;return typeof o=="object"&&o!==null?o=tt(o):(i=Me(t)?Bn:Ee.current,r=t.contextTypes,o=(r=r!=null)?Er(e,i):yn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_s,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Uu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_s.enqueueReplaceState(t,t.state,null)}function ol(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},nc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=tt(o):(o=Me(t)?Bn:Ee.current,i.context=Er(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(il(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_s.enqueueReplaceState(i,i.state,null),Zo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Tr(e,t){try{var n="",r=t;do n+=km(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ha(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qv=typeof WeakMap=="function"?WeakMap:Map;function Rp(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){is||(is=!0,ml=r),sl(e,t)},n}function Op(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){sl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){sl(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=cy.bind(null,e,t,n),t.then(e,e))}function Wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $u(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var qv=Gt.ReactCurrentOwner,De=!1;function je(e,t,n,r){t.child=e===null?lp(t,null,n,r):Ir(t,e.child,n,r)}function Vu(e,t,n,r,i){n=n.render;var o=t.ref;return yr(t,i),r=ac(e,t,n,r,o,i),n=lc(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(te&&n&&Ql(t),t.flags|=1,je(e,t,r,i),t.child)}function Hu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!yc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ap(e,t,o,r,i)):(e=Ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:_i,n(a,r)&&e.ref===t.ref)return Wt(e,t,i)}return t.flags|=1,e=hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ap(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(_i(o,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Wt(e,t,i)}return al(e,t,n,r,i)}function Lp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(pr,Ue),Ue|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(pr,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(pr,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(pr,Ue),Ue|=r;return je(e,t,i,n),t.child}function Dp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function al(e,t,n,r,i){var o=Me(n)?Bn:Ee.current;return o=Er(t,o),yr(t,i),n=ac(e,t,n,r,o,i),r=lc(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(te&&r&&Ql(t),t.flags|=1,je(e,t,n,i),t.child)}function Gu(e,t,n,r,i){if(Me(n)){var o=!0;Yo(t)}else o=!1;if(yr(t,i),t.stateNode===null)To(e,t),Pp(t,n,r),ol(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Me(n)?Bn:Ee.current,u=Er(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Uu(t,a,r,u),Xt=!1;var d=t.memoizedState;a.state=d,Zo(t,r,a,i),c=t.memoizedState,l!==r||d!==c||ze.current||Xt?(typeof p=="function"&&(il(t,n,p,r),c=t.memoizedState),(l=Xt||Fu(t,n,l,r,d,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,up(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:st(t.type,l),a.props=u,h=t.pendingProps,d=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=tt(c):(c=Me(n)?Bn:Ee.current,c=Er(t,c));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||d!==c)&&Uu(t,a,r,c),Xt=!1,d=t.memoizedState,a.state=d,Zo(t,r,a,i);var b=t.memoizedState;l!==h||d!==b||ze.current||Xt?(typeof x=="function"&&(il(t,n,x,r),b=t.memoizedState),(u=Xt||Fu(t,n,u,r,d,b,c)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return ll(e,t,n,r,o,i)}function ll(e,t,n,r,i,o){Dp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Pu(t,n,!1),Wt(e,t,o);r=t.stateNode,qv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ir(t,e.child,null,o),t.child=Ir(t,null,l,o)):je(e,t,l,o),t.memoizedState=r.state,i&&Pu(t,n,!0),t.child}function zp(e){var t=e.stateNode;t.pendingContext?Nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nu(e,t.context,!1),rc(e,t.containerInfo)}function Ku(e,t,n,r,i){return Cr(),Jl(i),t.flags|=256,je(e,t,n,r),t.child}var cl={dehydrated:null,treeContext:null,retryLane:0};function ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mp(e,t,n){var r=t.pendingProps,i=re.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(re,i&1),e===null)return nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Is(a,r,0,null),e=Mn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ul(n),t.memoizedState=cl,e):dc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Jv(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=hn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=hn(l,o):(o=Mn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ul(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=cl,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function dc(e,t){return t=Is({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,r){return r!==null&&Jl(r),Ir(t,e.child,null,n),e=dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ha(Error(_(422))),ho(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Is({mode:"visible",children:r.children},i,0,null),o=Mn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ir(t,e.child,null,a),t.child.memoizedState=ul(a),t.memoizedState=cl,o);if(!(t.mode&1))return ho(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(_(419)),r=ha(o,r,void 0),ho(e,t,a,r)}if(l=(a&e.childLanes)!==0,De||l){if(r=me,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Bt(e,i),ft(r,e,i,-1))}return vc(),r=ha(Error(_(421))),ho(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=uy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,We=un(i.nextSibling),$e=t,te=!0,ct=null,e!==null&&(Je[Xe++]=At,Je[Xe++]=Lt,Je[Xe++]=Wn,At=e.id,Lt=e.overflow,Wn=t),t=dc(t,r.children),t.flags|=4096,t)}function Yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),rl(e.return,t,n)}function ga(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Fp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(je(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,n,t);else if(e.tag===19)Yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&es(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ga(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&es(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ga(t,!0,n,null,o);break;case"together":ga(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function To(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xv(e,t,n){switch(t.tag){case 3:zp(t),Cr();break;case 5:dp(t);break;case 1:Me(t.type)&&Yo(t);break;case 4:rc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(Jo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?Mp(e,t,n):(X(re,re.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Lp(e,t,n)}return Wt(e,t,n)}var Up,dl,Bp,Wp;Up=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dl=function(){};Bp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(bt.current);var o=null;switch(n){case"input":i=Oa(e,i),r=Oa(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=Da(e,i),r=Da(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Go)}Ma(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vi.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Z("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Wp=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zv(e,t,n){var r=t.pendingProps;switch(ql(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Me(t.type)&&Ko(),Se(t),null;case 3:return r=t.stateNode,jr(),ee(ze),ee(Ee),oc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(xl(ct),ct=null))),dl(e,t),Se(t),null;case 5:ic(t);var i=Ln(Ti.current);if(n=t.type,e!==null&&t.stateNode!=null)Bp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Se(t),null}if(e=Ln(bt.current),fo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[yt]=t,r[Ii]=o,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<ii.length;i++)Z(ii[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":ru(r,o),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Z("invalid",r);break;case"textarea":ou(r,o),Z("invalid",r)}Ma(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,l,e),i=["children",""+l]):vi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Z("scroll",r)}switch(n){case"input":no(r),iu(r,o,!0);break;case"textarea":no(r),su(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Go)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[yt]=t,e[Ii]=r,Up(e,t,!1,!1),t.stateNode=e;e:{switch(a=Fa(n,r),n){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<ii.length;i++)Z(ii[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":ru(e,r),i=Oa(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),Z("invalid",e);break;case"textarea":ou(e,r),i=Da(e,r),Z("invalid",e);break;default:i=r}Ma(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?xf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&vf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&yi(e,c):typeof c=="number"&&yi(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vi.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Z("scroll",e):c!=null&&Ll(e,o,c,a))}switch(n){case"input":no(e),iu(e,r,!1);break;case"textarea":no(e),su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hr(e,!!r.multiple,o,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)Wp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Ln(Ti.current),Ln(bt.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(o=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return Se(t),null;case 13:if(ee(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&We!==null&&t.mode&1&&!(t.flags&128))sp(),Cr(),t.flags|=98560,o=!1;else if(o=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[yt]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),o=!1}else ct!==null&&(xl(ct),ct=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?fe===0&&(fe=3):vc())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return jr(),dl(e,t),e===null&&Ei(t.stateNode.containerInfo),Se(t),null;case 10:return ec(t.type._context),Se(t),null;case 17:return Me(t.type)&&Ko(),Se(t),null;case 19:if(ee(re),o=t.memoizedState,o===null)return Se(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)qr(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=es(e),a!==null){for(t.flags|=128,qr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&le()>Nr&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304)}else{if(!r)if(e=es(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!te)return Se(t),null}else 2*le()-o.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,n=re.current,X(re,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return mc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function ey(e,t){switch(ql(t),t.tag){case 1:return Me(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(),ee(ze),ee(Ee),oc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ic(t),null;case 13:if(ee(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(re),null;case 4:return jr(),null;case 10:return ec(t.type._context),null;case 22:case 23:return mc(),null;case 24:return null;default:return null}}var go=!1,_e=!1,ty=typeof WeakSet=="function"?WeakSet:Set,P=null;function fr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function fl(e,t,n){try{n()}catch(r){se(e,t,r)}}var Qu=!1;function ny(e,t){if(Qa=$o,e=Kf(),Yl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,p=0,h=e,d=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(c=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(x=h.firstChild)!==null;)d=h,h=x;for(;;){if(h===e)break t;if(d===n&&++u===i&&(l=a),d===o&&++p===r&&(c=a),(x=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qa={focusedElem:e,selectionRange:n},$o=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var k=b.memoizedProps,A=b.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?k:st(t.type,k),A);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return b=Qu,Qu=!1,b}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&fl(t,n,o)}i=i.next}while(i!==r)}}function Es(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $p(e){var t=e.alternate;t!==null&&(e.alternate=null,$p(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[Ii],delete t[Za],delete t[Mv],delete t[Fv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vp(e){return e.tag===5||e.tag===3||e.tag===4}function qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Go));else if(r!==4&&(e=e.child,e!==null))for(hl(e,t,n),e=e.sibling;e!==null;)hl(e,t,n),e=e.sibling}function gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gl(e,t,n),e=e.sibling;e!==null;)gl(e,t,n),e=e.sibling}var ve=null,at=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Hp(e,t,n),n=n.sibling}function Hp(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(vs,n)}catch{}switch(n.tag){case 5:_e||fr(n,t);case 6:var r=ve,i=at;ve=null,Qt(e,t,n),ve=r,at=i,ve!==null&&(at?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(at?(e=ve,n=n.stateNode,e.nodeType===8?la(e.parentNode,n):e.nodeType===1&&la(e,n),ki(e)):la(ve,n.stateNode));break;case 4:r=ve,i=at,ve=n.stateNode.containerInfo,at=!0,Qt(e,t,n),ve=r,at=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&fl(n,t,a),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!_e&&(fr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){se(n,t,l)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Qt(e,t,n),_e=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ty),t.forEach(function(r){var i=dy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,at=!1;break e;case 3:ve=l.stateNode.containerInfo,at=!0;break e;case 4:ve=l.stateNode.containerInfo,at=!0;break e}l=l.return}if(ve===null)throw Error(_(160));Hp(o,a,i),ve=null,at=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gp(t,e),t=t.sibling}function Gp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),mt(e),r&4){try{di(3,e,e.return),Es(3,e)}catch(k){se(e,e.return,k)}try{di(5,e,e.return)}catch(k){se(e,e.return,k)}}break;case 1:ot(t,e),mt(e),r&512&&n!==null&&fr(n,n.return);break;case 5:if(ot(t,e),mt(e),r&512&&n!==null&&fr(n,n.return),e.flags&32){var i=e.stateNode;try{yi(i,"")}catch(k){se(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&hf(i,o),Fa(l,a);var u=Fa(l,o);for(a=0;a<c.length;a+=2){var p=c[a],h=c[a+1];p==="style"?xf(i,h):p==="dangerouslySetInnerHTML"?vf(i,h):p==="children"?yi(i,h):Ll(i,p,h,u)}switch(l){case"input":Aa(i,o);break;case"textarea":gf(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?hr(i,!!o.multiple,x,!1):d!==!!o.multiple&&(o.defaultValue!=null?hr(i,!!o.multiple,o.defaultValue,!0):hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ii]=o}catch(k){se(e,e.return,k)}}break;case 6:if(ot(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){se(e,e.return,k)}}break;case 3:if(ot(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ki(t.containerInfo)}catch(k){se(e,e.return,k)}break;case 4:ot(t,e),mt(e);break;case 13:ot(t,e),mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(hc=le())),r&4&&Ju(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||p,ot(t,e),_e=u):ot(t,e),mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(h=P=p;P!==null;){switch(d=P,x=d.child,d.tag){case 0:case 11:case 14:case 15:di(4,d,d.return);break;case 1:fr(d,d.return);var b=d.stateNode;if(typeof b.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(k){se(r,n,k)}}break;case 5:fr(d,d.return);break;case 22:if(d.memoizedState!==null){Zu(h);continue}}x!==null?(x.return=d,P=x):Zu(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=yf("display",a))}catch(k){se(e,e.return,k)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(k){se(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ot(t,e),mt(e),r&4&&Ju(e);break;case 21:break;default:ot(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vp(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yi(i,""),r.flags&=-33);var o=qu(e);gl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=qu(e);hl(e,l,a);break;default:throw Error(_(161))}}catch(c){se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ry(e,t,n){P=e,Kp(e)}function Kp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||go;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||_e;l=go;var u=_e;if(go=a,(_e=c)&&!u)for(P=i;P!==null;)a=P,c=a.child,a.tag===22&&a.memoizedState!==null?ed(i):c!==null?(c.return=a,P=c):ed(i);for(;o!==null;)P=o,Kp(o),o=o.sibling;P=i,go=l,_e=u}Xu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Xu(e)}}function Xu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||Es(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Du(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Du(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&ki(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}_e||t.flags&512&&pl(t)}catch(d){se(t,t.return,d)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Zu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function ed(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Es(4,t)}catch(c){se(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){se(t,i,c)}}var o=t.return;try{pl(t)}catch(c){se(t,o,c)}break;case 5:var a=t.return;try{pl(t)}catch(c){se(t,a,c)}}}catch(c){se(t,t.return,c)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var iy=Math.ceil,rs=Gt.ReactCurrentDispatcher,fc=Gt.ReactCurrentOwner,et=Gt.ReactCurrentBatchConfig,$=0,me=null,ue=null,ye=0,Ue=0,pr=wn(0),fe=0,Oi=null,Vn=0,Cs=0,pc=0,fi=null,Le=null,hc=0,Nr=1/0,Tt=null,is=!1,ml=null,fn=null,mo=!1,on=null,os=0,pi=0,vl=null,No=-1,Po=0;function Ne(){return $&6?le():No!==-1?No:No=le()}function pn(e){return e.mode&1?$&2&&ye!==0?ye&-ye:Bv.transition!==null?(Po===0&&(Po=Pf()),Po):(e=q,e!==0||(e=window.event,e=e===void 0?16:Mf(e.type)),e):1}function ft(e,t,n,r){if(50<pi)throw pi=0,vl=null,Error(_(185));Mi(e,n,r),(!($&2)||e!==me)&&(e===me&&(!($&2)&&(Cs|=n),fe===4&&en(e,ye)),Fe(e,r),n===1&&$===0&&!(t.mode&1)&&(Nr=le()+500,ks&&bn()))}function Fe(e,t){var n=e.callbackNode;Bm(e,t);var r=Wo(e,e===me?ye:0);if(r===0)n!==null&&cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cu(n),t===1)e.tag===0?Uv(td.bind(null,e)):rp(td.bind(null,e)),Dv(function(){!($&6)&&bn()}),n=null;else{switch(Rf(r)){case 1:n=Ul;break;case 4:n=Tf;break;case 16:n=Bo;break;case 536870912:n=Nf;break;default:n=Bo}n=th(n,Yp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yp(e,t){if(No=-1,Po=0,$&6)throw Error(_(327));var n=e.callbackNode;if(xr()&&e.callbackNode!==n)return null;var r=Wo(e,e===me?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ss(e,r);else{t=r;var i=$;$|=2;var o=qp();(me!==e||ye!==t)&&(Tt=null,Nr=le()+500,zn(e,t));do try{ay();break}catch(l){Qp(e,l)}while(!0);Zl(),rs.current=o,$=i,ue!==null?t=0:(me=null,ye=0,t=fe)}if(t!==0){if(t===2&&(i=Va(e),i!==0&&(r=i,t=yl(e,i))),t===1)throw n=Oi,zn(e,0),en(e,r),Fe(e,le()),n;if(t===6)en(e,r);else{if(i=e.current.alternate,!(r&30)&&!oy(i)&&(t=ss(e,r),t===2&&(o=Va(e),o!==0&&(r=o,t=yl(e,o))),t===1))throw n=Oi,zn(e,0),en(e,r),Fe(e,le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Pn(e,Le,Tt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=hc+500-le(),10<t)){if(Wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xa(Pn.bind(null,e,Le,Tt),t);break}Pn(e,Le,Tt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-dt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iy(r/1960))-r,10<r){e.timeoutHandle=Xa(Pn.bind(null,e,Le,Tt),r);break}Pn(e,Le,Tt);break;case 5:Pn(e,Le,Tt);break;default:throw Error(_(329))}}}return Fe(e,le()),e.callbackNode===n?Yp.bind(null,e):null}function yl(e,t){var n=fi;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=ss(e,t),e!==2&&(t=Le,Le=n,t!==null&&xl(t)),e}function xl(e){Le===null?Le=e:Le.push.apply(Le,e)}function oy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~pc,t&=~Cs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function td(e){if($&6)throw Error(_(327));xr();var t=Wo(e,0);if(!(t&1))return Fe(e,le()),null;var n=ss(e,t);if(e.tag!==0&&n===2){var r=Va(e);r!==0&&(t=r,n=yl(e,r))}if(n===1)throw n=Oi,zn(e,0),en(e,t),Fe(e,le()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,Le,Tt),Fe(e,le()),null}function gc(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Nr=le()+500,ks&&bn())}}function Hn(e){on!==null&&on.tag===0&&!($&6)&&xr();var t=$;$|=1;var n=et.transition,r=q;try{if(et.transition=null,q=1,e)return e()}finally{q=r,et.transition=n,$=t,!($&6)&&bn()}}function mc(){Ue=pr.current,ee(pr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lv(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(ql(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:jr(),ee(ze),ee(Ee),oc();break;case 5:ic(r);break;case 4:jr();break;case 13:ee(re);break;case 19:ee(re);break;case 10:ec(r.type._context);break;case 22:case 23:mc()}n=n.return}if(me=e,ue=e=hn(e.current,null),ye=Ue=t,fe=0,Oi=null,pc=Cs=Vn=0,Le=fi=null,An!==null){for(t=0;t<An.length;t++)if(n=An[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}An=null}return e}function Qp(e,t){do{var n=ue;try{if(Zl(),Io.current=ns,ts){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ts=!1}if($n=0,ge=de=ie=null,ui=!1,Ni=0,fc.current=null,n===null||n.return===null){fe=1,Oi=t,ue=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=ye,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var d=p.alternate;d?(p.updateQueue=d.updateQueue,p.memoizedState=d.memoizedState,p.lanes=d.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=Wu(a);if(x!==null){x.flags&=-257,$u(x,a,l,o,t),x.mode&1&&Bu(o,u,t),t=x,c=u;var b=t.updateQueue;if(b===null){var k=new Set;k.add(c),t.updateQueue=k}else b.add(c);break e}else{if(!(t&1)){Bu(o,u,t),vc();break e}c=Error(_(426))}}else if(te&&l.mode&1){var A=Wu(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),$u(A,a,l,o,t),Jl(Tr(c,l));break e}}o=c=Tr(c,l),fe!==4&&(fe=2),fi===null?fi=[o]:fi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Rp(o,c,t);Lu(o,g);break e;case 1:l=c;var f=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(fn===null||!fn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Op(o,l,t);Lu(o,w);break e}}o=o.return}while(o!==null)}Xp(n)}catch(E){t=E,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function qp(){var e=rs.current;return rs.current=ns,e===null?ns:e}function vc(){(fe===0||fe===3||fe===2)&&(fe=4),me===null||!(Vn&268435455)&&!(Cs&268435455)||en(me,ye)}function ss(e,t){var n=$;$|=2;var r=qp();(me!==e||ye!==t)&&(Tt=null,zn(e,t));do try{sy();break}catch(i){Qp(e,i)}while(!0);if(Zl(),$=n,rs.current=r,ue!==null)throw Error(_(261));return me=null,ye=0,fe}function sy(){for(;ue!==null;)Jp(ue)}function ay(){for(;ue!==null&&!Rm();)Jp(ue)}function Jp(e){var t=eh(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?Xp(e):ue=t,fc.current=null}function Xp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ey(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ue=null;return}}else if(n=Zv(n,t,Ue),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);fe===0&&(fe=5)}function Pn(e,t,n){var r=q,i=et.transition;try{et.transition=null,q=1,ly(e,t,n,r)}finally{et.transition=i,q=r}return null}function ly(e,t,n,r){do xr();while(on!==null);if($&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Wm(e,o),e===me&&(ue=me=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,th(Bo,function(){return xr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=et.transition,et.transition=null;var a=q;q=1;var l=$;$|=4,fc.current=null,ny(e,n),Gp(n,e),jv(qa),$o=!!Qa,qa=Qa=null,e.current=n,ry(n),Om(),$=l,q=a,et.transition=o}else e.current=n;if(mo&&(mo=!1,on=e,os=i),o=e.pendingLanes,o===0&&(fn=null),Dm(n.stateNode),Fe(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(is)throw is=!1,e=ml,ml=null,e;return os&1&&e.tag!==0&&xr(),o=e.pendingLanes,o&1?e===vl?pi++:(pi=0,vl=e):pi=0,bn(),null}function xr(){if(on!==null){var e=Rf(os),t=et.transition,n=q;try{if(et.transition=null,q=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,os=0,$&6)throw Error(_(331));var i=$;for($|=4,P=e.current;P!==null;){var o=P,a=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(P=u;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:di(8,p,o)}var h=p.child;if(h!==null)h.return=p,P=h;else for(;P!==null;){p=P;var d=p.sibling,x=p.return;if($p(p),p===u){P=null;break}if(d!==null){d.return=x,P=d;break}P=x}}}var b=o.alternate;if(b!==null){var k=b.child;if(k!==null){b.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}P=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,P=a;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:di(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,P=g;break e}P=o.return}}var f=e.current;for(P=f;P!==null;){a=P;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,P=v;else e:for(a=f;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Es(9,l)}}catch(E){se(l,l.return,E)}if(l===a){P=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,P=w;break e}P=l.return}}if($=i,bn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(vs,e)}catch{}r=!0}return r}finally{q=n,et.transition=t}}return!1}function nd(e,t,n){t=Tr(n,t),t=Rp(e,t,1),e=dn(e,t,1),t=Ne(),e!==null&&(Mi(e,1,t),Fe(e,t))}function se(e,t,n){if(e.tag===3)nd(e,e,n);else for(;t!==null;){if(t.tag===3){nd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=Tr(n,e),e=Op(t,e,1),t=dn(t,e,1),e=Ne(),t!==null&&(Mi(t,1,e),Fe(t,e));break}}t=t.return}}function cy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ye&n)===n&&(fe===4||fe===3&&(ye&130023424)===ye&&500>le()-hc?zn(e,0):pc|=n),Fe(e,t)}function Zp(e,t){t===0&&(e.mode&1?(t=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):t=1);var n=Ne();e=Bt(e,t),e!==null&&(Mi(e,t,n),Fe(e,n))}function uy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zp(e,n)}function dy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Zp(e,n)}var eh;eh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,Xv(e,t,n);De=!!(e.flags&131072)}else De=!1,te&&t.flags&1048576&&ip(t,qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;To(e,t),e=t.pendingProps;var i=Er(t,Ee.current);yr(t,n),i=ac(null,t,r,e,i,n);var o=lc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(o=!0,Yo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nc(t),i.updater=_s,t.stateNode=i,i._reactInternals=t,ol(t,r,e,n),t=ll(null,t,r,!0,o,n)):(t.tag=0,te&&o&&Ql(t),je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(To(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=py(r),e=st(r,e),i){case 0:t=al(null,t,r,e,n);break e;case 1:t=Gu(null,t,r,e,n);break e;case 11:t=Vu(null,t,r,e,n);break e;case 14:t=Hu(null,t,r,st(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),al(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Gu(e,t,r,i,n);case 3:e:{if(zp(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,up(e,t),Zo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Tr(Error(_(423)),t),t=Ku(e,t,r,n,i);break e}else if(r!==i){i=Tr(Error(_(424)),t),t=Ku(e,t,r,n,i);break e}else for(We=un(t.stateNode.containerInfo.firstChild),$e=t,te=!0,ct=null,n=lp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),r===i){t=Wt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return dp(t),e===null&&nl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ja(r,i)?a=null:o!==null&&Ja(r,o)&&(t.flags|=32),Dp(e,t),je(e,t,a,n),t.child;case 6:return e===null&&nl(t),null;case 13:return Mp(e,t,n);case 4:return rc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ir(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Vu(e,t,r,i,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,X(Jo,r._currentValue),r._currentValue=a,o!==null)if(ht(o.value,a)){if(o.children===i.children&&!ze.current){t=Wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Mt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),rl(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(_(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),rl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,yr(t,n),i=tt(i),r=r(i),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,i=st(r,t.pendingProps),i=st(r.type,i),Hu(e,t,r,i,n);case 15:return Ap(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),To(e,t),t.tag=1,Me(r)?(e=!0,Yo(t)):e=!1,yr(t,n),Pp(t,r,i),ol(t,r,i,n),ll(null,t,r,!0,e,n);case 19:return Fp(e,t,n);case 22:return Lp(e,t,n)}throw Error(_(156,t.tag))};function th(e,t){return jf(e,t)}function fy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new fy(e,t,n,r)}function yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function py(e){if(typeof e=="function")return yc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zl)return 11;if(e===Ml)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")yc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case rr:return Mn(n.children,i,o,t);case Dl:a=8,i|=8;break;case Ta:return e=Ze(12,n,t,i|2),e.elementType=Ta,e.lanes=o,e;case Na:return e=Ze(13,n,t,i),e.elementType=Na,e.lanes=o,e;case Pa:return e=Ze(19,n,t,i),e.elementType=Pa,e.lanes=o,e;case df:return Is(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cf:a=10;break e;case uf:a=9;break e;case zl:a=11;break e;case Ml:a=14;break e;case Jt:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ze(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Mn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function Is(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=df,e.lanes=n,e.stateNode={isHidden:!1},e}function ma(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function va(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Js(0),this.expirationTimes=Js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Js(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xc(e,t,n,r,i,o,a,l,c){return e=new hy(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nc(o),e}function gy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nh(e){if(!e)return yn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Me(n))return np(e,n,t)}return t}function rh(e,t,n,r,i,o,a,l,c){return e=xc(n,r,!0,e,i,o,a,l,c),e.context=nh(null),n=e.current,r=Ne(),i=pn(n),o=Mt(r,i),o.callback=t??null,dn(n,o,i),e.current.lanes=i,Mi(e,i,r),Fe(e,r),e}function js(e,t,n,r){var i=t.current,o=Ne(),a=pn(i);return n=nh(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(i,t,a),e!==null&&(ft(e,i,a,o),Co(e,i,a)),a}function as(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wc(e,t){rd(e,t),(e=e.alternate)&&rd(e,t)}function my(){return null}var ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function bc(e){this._internalRoot=e}Ts.prototype.render=bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));js(e,t,null,null)};Ts.prototype.unmount=bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){js(null,e,null,null)}),t[Ut]=null}};function Ts(e){this._internalRoot=e}Ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&zf(e)}};function kc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function vy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=as(a);o.call(u)}}var a=rh(t,r,e,0,null,!1,!1,"",id);return e._reactRootContainer=a,e[Ut]=a.current,Ei(e.nodeType===8?e.parentNode:e),Hn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=as(c);l.call(u)}}var c=xc(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=c,e[Ut]=c.current,Ei(e.nodeType===8?e.parentNode:e),Hn(function(){js(t,c,n,r)}),c}function Ps(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=as(a);l.call(c)}}js(t,a,e,i)}else a=vy(n,t,e,i,r);return as(a)}Of=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ri(t.pendingLanes);n!==0&&(Bl(t,n|1),Fe(t,le()),!($&6)&&(Nr=le()+500,bn()))}break;case 13:Hn(function(){var r=Bt(e,1);if(r!==null){var i=Ne();ft(r,e,1,i)}}),wc(e,1)}};Wl=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=Ne();ft(t,e,134217728,n)}wc(e,134217728)}};Af=function(e){if(e.tag===13){var t=pn(e),n=Bt(e,t);if(n!==null){var r=Ne();ft(n,e,t,r)}wc(e,t)}};Lf=function(){return q};Df=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Ba=function(e,t,n){switch(t){case"input":if(Aa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bs(r);if(!i)throw Error(_(90));pf(r),Aa(r,i)}}}break;case"textarea":gf(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};kf=gc;Sf=Hn;var yy={usingClientEntryPoint:!1,Events:[Ui,ar,bs,wf,bf,gc]},Jr={findFiberByHostInstance:On,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xy={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cf(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||my,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{vs=vo.inject(xy),wt=vo}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yy;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kc(t))throw Error(_(200));return gy(e,t,null,n)};He.createRoot=function(e,t){if(!kc(e))throw Error(_(299));var n=!1,r="",i=ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xc(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,Ei(e.nodeType===8?e.parentNode:e),new bc(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Cf(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return Hn(e)};He.hydrate=function(e,t,n){if(!Ns(t))throw Error(_(200));return Ps(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!kc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ih;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=rh(t,null,e,1,n??null,i,!1,o,a),e[Ut]=t.current,Ei(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ts(t)};He.render=function(e,t,n){if(!Ns(t))throw Error(_(200));return Ps(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!Ns(e))throw Error(_(40));return e._reactRootContainer?(Hn(function(){Ps(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};He.unstable_batchedUpdates=gc;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ns(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ps(e,t,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function oh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oh)}catch(e){console.error(e)}}oh(),of.exports=He;var wy=of.exports,sh,od=wy;sh=od.createRoot,od.hydrateRoot;const by="modulepreload",ky=function(e){return"/"+e},sd={},Yn=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=ky(c),c in sd)return;sd[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":by,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((d,x)=>{h.addEventListener("load",d),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},St="http://localhost:3001/api/v1",Be={name:"CloudVault",logo:"CV"};async function Sy(){var n;const e=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");if(!e)return null;const t=localStorage.getItem("cv_refreshToken")?localStorage:sessionStorage;try{const r=await fetch(`${St}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:e})});if(!r.ok)return null;const i=await r.json(),o=((n=i.data)==null?void 0:n.accessToken)||i.accessToken;return o?(t.setItem("cv_token",o),window.dispatchEvent(new CustomEvent("cv-token-refreshed",{detail:{token:o}})),o):null}catch{return null}}function Sc(e){return new Error(`Cannot reach the server at ${St}${e}. Make sure the backend is running (npm start in project root).`)}const lt=async(e,t={},n,r=!1)=>{const i={...t.headers||{}};n&&(i.Authorization=`Bearer ${n}`),t.body instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json");let o;try{o=await fetch(`${St}${e}`,{...t,headers:i})}catch{throw Sc(e)}if(o.status===401&&n&&!r){const c=await Sy();if(c)return lt(e,t,c,!0);throw new Error("Session expired. Please log in again.")}if(!o.ok){const c=await o.json().catch(()=>({error:"Unknown error"})),u=c.message||c.error||"",p=u.toLowerCase().includes("token")?"Something went wrong. Please try again.":u||`Request failed (${o.status})`;throw new Error(p)}if(!(o.headers.get("content-type")||"").includes("application/json"))return o;const l=await o.json();return l.success?l.data:l},jn=(e,t)=>Array.isArray(e)?e:(e==null?void 0:e[t])||[];async function _c(e,t,{onProgress:n,disposition:r="download"}={}){const i=r==="preview"?`/files/${e}/preview`:`/files/${e}/download`;let o;try{o=await fetch(`${St}${i}`,{headers:{Authorization:`Bearer ${t}`}})}catch{throw Sc(i)}if(!o.ok){const l=await o.json().catch(()=>({error:"Download failed"}));throw new Error(l.error||l.message||"Download failed")}const a=Number(o.headers.get("content-length"))||0;return _y(o,a,n)}async function _y(e,t,n){if(!e.body||!t){const a=await e.blob();return n==null||n(100),a}const r=e.body.getReader(),i=[];let o=0;for(;;){const{done:a,value:l}=await r.read();if(a)break;i.push(l),o+=l.length,n&&t>0&&n(Math.min(99,Math.round(o/t*100)))}return n==null||n(100),new Blob(i,{type:e.headers.get("content-type")||"application/octet-stream"})}function Ey(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function Cy(e,t,n,r){return new Promise((i,o)=>{const a=new XMLHttpRequest;a.open("POST",`${St}${e}`),a.setRequestHeader("Authorization",`Bearer ${n}`),a.upload.onprogress=l=>{l.lengthComputable&&r&&r(Math.round(l.loaded/l.total*100))},a.onload=()=>{try{const l=JSON.parse(a.responseText);a.status>=200&&a.status<300?i(l.success?l.data:l):o(new Error(l.message||l.error||"Upload failed"))}catch{a.status>=200&&a.status<300?i({}):o(new Error("Upload failed"))}},a.onerror=()=>o(Sc(e)),a.send(t)})}const Te=e=>{if(e===0)return"0 B";const t=1024,n=["B","KB","MB","GB"],r=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**r).toFixed(1)} ${n[r]}`},Wi=e=>{const t=Math.floor((Date.now()-new Date(e))/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`},Rs=(e="")=>e.startsWith("image/")?"🖼️":e==="application/pdf"?"📄":e.startsWith("video/")?"🎬":e.startsWith("audio/")?"🎵":e.includes("zip")||e.includes("archive")?"🗜️":e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")?"📝":"📁",Iy=["image/","video/","audio/"],jy=new Set(["application/pdf","text/plain","text/markdown","application/json"]),ah=(e="")=>{const t=(e||"").toLowerCase();return jy.has(t)?!0:Iy.some(n=>t.startsWith(n))},Ty=(e="")=>{const t=(e||"").toLowerCase();return t.startsWith("image/")?"image":t==="application/pdf"?"pdf":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("text/")||t==="application/json"?"text":null},ad=[{key:"all",label:"All",icon:"📋",test:()=>!0},{key:"images",label:"Images",icon:"🖼️",test:e=>e.startsWith("image/")},{key:"documents",label:"Docs",icon:"📄",test:e=>e.includes("pdf")||e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")},{key:"videos",label:"Videos",icon:"🎬",test:e=>e.startsWith("video/")},{key:"audio",label:"Audio",icon:"🎵",test:e=>e.startsWith("audio/")},{key:"archives",label:"Archives",icon:"🗜️",test:e=>e.includes("zip")||e.includes("archive")||e.includes("tar")||e.includes("rar")}],Fn=`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --bg-primary: #f6f8fb;
    --bg-secondary: #ffffff;
    --bg-card: #ffffff;
    --bg-card-hover: #f8fafc;
    --bg-sidebar: #ffffff;
    --surface-raised: #eef3f8;
    --border: #dfe7f0;
    --border-hover: #bbf7d0;
    --text: #111827;
    --text-secondary: #374151;
    --text-muted: #6b7280;
    --accent: #00b74f;
    --accent-strong: #111827;
    --accent-blue: #2563eb;
    --accent-amber: #fbbf24;
    --danger: #dc2626;
    --gradient: linear-gradient(135deg, #00b74f 0%, #00d4a1 100%);
    --gradient-soft: linear-gradient(135deg, rgba(0,183,79,.14), rgba(37,99,235,.08));
    --radius: 12px;
    --radius-lg: 20px;
    --shadow: 0 20px 50px rgba(15, 23, 42, 0.1);
    --glow: 0 18px 40px rgba(22, 163, 74, 0.16);
    --transition: all 0.2s ease;
  }

  [data-theme="dark"] {
    --bg-primary: #050914;
    --bg-secondary: #0b1220;
    --bg-card: #111a2b;
    --bg-card-hover: #172338;
    --bg-sidebar: #0b1322;
    --surface-raised: #172338;
    --border: rgba(148, 163, 184, 0.2);
    --border-hover: rgba(0, 214, 113, 0.55);
    --text: #f8fafc;
    --text-secondary: #d1d5db;
    --text-muted: #94a3b8;
    --shadow: 0 24px 64px rgba(0,0,0,.35);
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
    background:
      radial-gradient(circle at 86% 8%, rgba(187,247,208,.7), transparent 26%),
      radial-gradient(circle at 8% 28%, rgba(219,234,254,.7), transparent 24%),
      var(--bg-primary);
    font-family: var(--font);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
  @keyframes scaleIn { from { opacity:0; transform:scale(.95) } to { opacity:1; transform:scale(1) } }
  @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
  @keyframes floatIn { from { opacity:0; transform:translateY(10px) scale(.985) } to { opacity:1; transform:translateY(0) scale(1) } }
  @keyframes softPulse { 0%, 100% { box-shadow: 0 0 0 rgba(45,212,191,0) } 50% { box-shadow: 0 0 32px rgba(45,212,191,.22) } }
  @keyframes glowBorder { 0%, 100% { border-color: rgba(45,212,191,.28) } 50% { border-color: rgba(56,189,248,.55) } }

  .glass-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow);
  }

  .btn-primary {
    padding: 12px 22px;
    border-radius: 12px;
    border: none;
    background: var(--gradient);
    color: #fff;
    font-family: var(--font);
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0,183,79,.24);
    transition: var(--transition);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 36px rgba(0,183,79,.3);
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
    border-color: var(--border-hover);
    color: var(--text);
    background: rgba(0,183,79,.08);
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
    padding: 13px 14px;
    border-radius: 12px;
    border: 1px solid transparent;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    font-family: var(--font);
    font-weight: 600;
    font-size: 15px;
    text-align: left;
    width: 100%;
    transition: var(--transition);
  }

  .nav-item:hover {
    background: rgba(0,183,79,.08);
    color: var(--text);
    border-color: var(--border);
    transform: translateX(3px);
  }

  .nav-item.active {
    border-color: rgba(0,183,79,.28);
    background: rgba(0,183,79,.14);
    color: var(--accent);
    box-shadow: none;
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
    background: rgba(0,183,79,.18);
    color: var(--accent);
  }

  .nav-item:hover .nav-icon:not(.active) {
    background: rgba(0,183,79,.1);
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
    padding: 18px 32px;
    border-bottom: 1px solid transparent;
    position: fixed;
    width: 100%;
    top: 0;
    background: rgba(248,250,252,.76);
    backdrop-filter: blur(16px);
    z-index: 50;
    gap: 16px;
    flex-wrap: wrap;
  }

  .landing-nav {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .marketing-shell {
    min-height: 100vh;
    background:
      radial-gradient(circle at 88% 8%, rgba(187,247,208,.9), transparent 26%),
      radial-gradient(circle at 8% 26%, rgba(219,234,254,.9), transparent 24%),
      linear-gradient(180deg, #f8fafc 0%, #f8fafc 58%, #ffffff 100%);
    color: var(--text);
    font-family: var(--font);
  }

  .brand-lockup {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border: 0;
    background: transparent;
    color: #111827;
    font: 800 24px/1 var(--font);
    cursor: pointer;
  }

  .brand-mark {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: var(--gradient);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0;
    box-shadow: 0 12px 28px rgba(0,183,79,.28);
    flex: 0 0 auto;
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
    color: #374151;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
  }

  .landing-links a:hover {
    color: #16a34a;
  }

  .hero-section {
    position: relative;
    overflow: hidden;
    padding: 190px 24px 82px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .hero-copy {
    max-width: 840px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #fff;
    border: 1px solid #dcfce7;
    border-radius: 999px;
    padding: 10px 16px;
    color: #15803d;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 2px 10px rgba(15,23,42,.08);
    margin-bottom: 36px;
  }

  .eyebrow span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
  }

  .hero-copy h1 {
    color: #111827;
    font-size: clamp(48px, 7vw, 74px);
    line-height: 1.07;
    letter-spacing: 0;
    font-weight: 900;
    margin-bottom: 28px;
  }

  .hero-copy h1 span {
    color: #16a34a;
    display: block;
  }

  .hero-copy p {
    max-width: 720px;
    margin: 0 auto 36px;
    color: #4b5563;
    font-size: clamp(18px, 2.2vw, 24px);
    line-height: 1.55;
  }

  .hero-actions {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 18px;
  }

  .btn-hero-dark {
    background: #111827;
    color: #fff;
    min-height: 60px;
    padding: 0 34px;
    border-radius: 16px;
    font-size: 17px;
    box-shadow: 0 18px 30px rgba(15,23,42,.18);
  }

  .btn-hero-light {
    min-height: 60px;
    padding: 0 34px;
    border-radius: 16px;
    color: #111827;
    font-size: 17px;
    box-shadow: 0 4px 14px rgba(15,23,42,.08);
  }

  .hero-note {
    color: #64748b;
    font-size: 14px;
    font-weight: 500;
  }

  .hero-glow {
    position: absolute;
    border-radius: 999px;
    filter: blur(56px);
    pointer-events: none;
  }

  .hero-glow-green {
    width: 380px;
    height: 380px;
    right: -120px;
    top: 30px;
    background: rgba(74,222,128,.26);
  }

  .hero-glow-blue {
    width: 300px;
    height: 300px;
    left: -90px;
    top: 260px;
    background: rgba(96,165,250,.14);
  }

  .dashboard-preview {
    position: relative;
    z-index: 2;
    margin: 74px auto 0;
    max-width: 980px;
  }

  .preview-panel {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 28px 28px 0 0;
    box-shadow: 0 28px 70px rgba(15,23,42,.16);
    padding: 24px;
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 24px;
    overflow: hidden;
  }

  .preview-sidebar {
    background: #fff;
    border: 1px solid #f1f5f9;
    border-radius: 18px;
    padding: 18px;
    box-shadow: 0 2px 10px rgba(15,23,42,.06);
  }

  .preview-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #111827;
    margin-bottom: 24px;
  }

  .preview-nav-item {
    padding: 11px 12px;
    border-radius: 10px;
    color: #4b5563;
    font-size: 14px;
    font-weight: 600;
  }

  .preview-nav-item.active {
    background: #f0fdf4;
    color: #15803d;
  }

  .preview-usage {
    margin-top: 28px;
    color: #64748b;
    font-size: 12px;
  }

  .preview-usage div:first-child {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
  }

  .preview-bar {
    height: 8px;
    border-radius: 999px;
    background: #e5e7eb;
    overflow: hidden;
  }

  .preview-bar span {
    display: block;
    width: 45%;
    height: 100%;
    background: #22c55e;
    border-radius: inherit;
  }

  .preview-files {
    background: #f9fafb;
    border: 1px solid #f1f5f9;
    border-radius: 18px;
    padding: 24px;
  }

  .preview-topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 20px;
  }

  .preview-topline h3 {
    color: #111827;
    font-size: 22px;
  }

  .preview-topline button {
    border: 0;
    border-radius: 12px;
    background: #16a34a;
    color: #fff;
    padding: 10px 18px;
    font-weight: 700;
  }

  .preview-file {
    display: flex;
    align-items: center;
    gap: 14px;
    background: #fff;
    border: 1px solid #eef2f7;
    border-radius: 16px;
    padding: 14px;
    margin-bottom: 12px;
    box-shadow: 0 1px 3px rgba(15,23,42,.05);
  }

  .preview-file-icon {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
  }

  .preview-file h4 {
    color: #111827;
    font-size: 15px;
    margin-bottom: 4px;
  }

  .preview-file p {
    color: #64748b;
    font-size: 13px;
    margin: 0;
  }

  .logo-strip,
  .content-section,
  .stats-band {
    max-width: 1120px;
    margin: 0 auto;
    padding: 64px 24px;
  }

  .logo-strip {
    text-align: center;
    color: #64748b;
  }

  .logo-strip div {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    gap: 42px;
    flex-wrap: wrap;
    color: #94a3b8;
    font-weight: 800;
    font-size: 18px;
  }

  .split-section {
    display: grid;
    grid-template-columns: minmax(0, .9fr) minmax(0, 1fr);
    gap: 56px;
    align-items: end;
  }

  .section-kicker {
    color: #16a34a;
    font-weight: 800;
    font-size: 13px;
    margin-bottom: 14px;
  }

  .content-section h2 {
    color: #111827;
    font-size: clamp(32px, 4vw, 48px);
    line-height: 1.12;
    font-weight: 900;
  }

  .content-section > p,
  .split-section > p {
    color: #4b5563;
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
    border: 1px solid #e5e7eb;
    border-radius: 22px;
    padding: 30px;
    transition: var(--transition);
    background: #fff;
    box-shadow: 0 1px 3px rgba(15,23,42,.06);
  }

  .plan-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--glow);
  }

  .plan-card.highlight {
    background: #111827;
    border-color: #111827;
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
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    margin-bottom: 10px;
    background: #fff;
    overflow: hidden;
    transition: var(--transition);
  }

  .faq-item:hover {
    border-color: #bbf7d0;
  }

  .faq-item summary {
    padding: 18px 22px;
    font-weight: 700;
    font-size: 15px;
    color: #111827;
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
    color: #16a34a;
    font-weight: 400;
    transition: transform .2s ease;
  }

  .faq-item[open] summary::after {
    transform: rotate(45deg);
  }

  .faq-item p {
    padding: 0 22px 18px;
    color: #64748b;
    font-size: 15px;
    line-height: 1.65;
  }

  .cta-band {
    max-width: 1120px;
    margin: 0 auto 64px;
    padding: 64px 32px;
    text-align: center;
    background: linear-gradient(135deg, #111827 0%, #1e293b 100%);
    border-radius: 28px;
    color: #fff;
  }

  .cta-band h2 {
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 900;
    margin-bottom: 12px;
  }

  .cta-band p {
    color: #94a3b8;
    font-size: 17px;
    margin-bottom: 28px;
  }

  .landing-footer {
    background: #111827;
    color: #94a3b8;
    padding: 64px 24px 32px;
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
    animation: fadeIn .6s ease both;
  }

  .animate-fade-up.delay-1 {
    animation-delay: .15s;
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
`,Ny=[{id:"free",name:"Free",price:"₹0",period:"/mo",storage:"5 GB",features:["Standard uploads","Basic sharing","Web preview"]},{id:"pro",name:"Pro",price:"₹749",period:"/mo",storage:"100 GB",features:["Faster uploads","File version history","Priority support"],highlight:!0},{id:"premium",name:"Premium",price:"₹1,599",period:"/mo",storage:"1 TB",features:["Team sharing","Advanced analytics","Custom branding"]},{id:"team",name:"Team",price:"₹3,999",period:"/mo",storage:"2 TB",features:["Shared workspaces","Admin controls","SSO ready"]}],Cb=[{id:"50gb",label:"+50 GB",price:"₹399"},{id:"100gb",label:"+100 GB",price:"₹749"},{id:"500gb",label:"+500 GB",price:"₹2,499"},{id:"1tb",label:"+1 TB",price:"₹3,999"}],Py=[{title:"Effortless syncing",desc:"Drag, drop, and organize files from one calm workspace that stays in sync everywhere.",icon:"☁"},{title:"Private sharing",desc:"Send secure links with clear permissions, passwords, and expiration controls.",icon:"🔒"},{title:"Fast previews",desc:"Open images, documents, and downloads without breaking your flow.",icon:"⚡"},{title:"Smart search",desc:"Find anything instantly with filters, tags, and full-text search across your drive.",icon:"🔍"},{title:"Version history",desc:"Track changes and restore previous versions when you need them.",icon:"📋"},{title:"Enterprise security",desc:"Encrypted storage, activity logs, and role-based access for teams.",icon:"🛡"}],Ry=[{quote:"CloudVault replaced three tools for our team. Uploads are fast, sharing is simple, and the UI just feels right.",name:"Sarah Chen",role:"Product Designer, Acme Corp"},{quote:"We migrated 2TB of client assets in a weekend. The folder structure and permissions made onboarding painless.",name:"Marcus Webb",role:"Engineering Lead, GlobalTech"},{quote:"Finally a drive that looks premium and works on mobile. Our sales team shares proposals in seconds.",name:"Priya Sharma",role:"Operations, Nexus"}],Oy=[{q:"Is CloudVault free to use?",a:"Yes. Every account includes 10 GB of free storage with no credit card required. Upgrade anytime for more space and team features."},{q:"How secure are my files?",a:"Files are encrypted in transit and at rest. Share links support passwords, view limits, and expiration dates for fine-grained control."},{q:"Can I share files with people outside my team?",a:"Absolutely. Create public or protected links, or invite collaborators by email with view, download, or edit permissions."},{q:"Does CloudVault work on mobile?",a:"Yes. CloudVault is fully responsive and works in any modern browser on phone, tablet, and desktop."},{q:"Can I cancel or change my plan?",a:"Plans are flexible. Upgrade, downgrade, or cancel from your billing settings at any time."}],Ay=[{label:"Features",href:"#features"},{label:"How it works",href:"#how-it-works"},{label:"Pricing",href:"#pricing"},{label:"FAQ",href:"#faq"}];function Ly({onGetStarted:e,onLogin:t,onSignUp:n}){const[r,i]=m.useState({filesStored:0,activeUsers:0,storageUsed:0,storageCapacity:0xa0000000000});return m.useEffect(()=>{fetch(`${St}/public/stats`).then(o=>o.json()).then(o=>{o.success&&o.data&&i(o.data)}).catch(()=>{})},[]),s.jsxs("div",{className:"marketing-shell",children:[s.jsx("style",{children:Fn}),s.jsxs("header",{className:"landing-header",children:[s.jsxs("button",{type:"button",className:"brand-lockup",onClick:e,"aria-label":`${Be.name} home`,children:[s.jsx("span",{className:"brand-mark",children:Be.logo}),s.jsx("span",{children:Be.name})]}),s.jsx("nav",{className:"landing-links","aria-label":"Primary",children:Ay.map(o=>s.jsx("a",{href:o.href,children:o.label},o.href))}),s.jsxs("div",{className:"landing-nav",children:[s.jsx("button",{type:"button",className:"btn-ghost",onClick:t,children:"Log in"}),s.jsx("button",{type:"button",className:"btn-primary",onClick:n,children:"Get Started Free"})]})]}),s.jsxs("main",{children:[s.jsxs("section",{className:"hero-section",children:[s.jsx("div",{className:"hero-glow hero-glow-green","aria-hidden":"true"}),s.jsx("div",{className:"hero-glow hero-glow-blue","aria-hidden":"true"}),s.jsxs("div",{className:"hero-copy animate-fade-up",children:[s.jsxs("div",{className:"eyebrow",children:[s.jsx("span",{"aria-hidden":"true"})," Introducing ",Be.name]}),s.jsxs("h1",{children:["The intelligent home for your ",s.jsx("span",{children:"digital life."})]}),s.jsx("p",{children:"Never lose a file again. Store, organize, and securely share your documents, photos, and projects from anywhere — on any device."}),s.jsxs("div",{className:"hero-actions",children:[s.jsx("button",{type:"button",className:"btn-primary btn-hero-dark",onClick:e,children:"Start for free"}),s.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"Sign in"})]}),s.jsx("div",{className:"hero-note",children:"No credit card required · 10 GB free forever"})]}),s.jsx("div",{className:"dashboard-preview animate-fade-up delay-1","aria-label":"CloudVault preview",children:s.jsxs("div",{className:"preview-panel",children:[s.jsxs("aside",{className:"preview-sidebar",children:[s.jsxs("div",{className:"preview-logo",children:[s.jsx("span",{className:"brand-mark small",children:Be.logo}),s.jsx("strong",{children:"My Storage"})]}),["Recent","Starred","Shared","Trash"].map((o,a)=>s.jsx("div",{className:`preview-nav-item${a===0?" active":""}`,children:o},o)),s.jsxs("div",{className:"preview-usage",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Storage Usage"}),s.jsx("strong",{children:"4.5 GB / 10 GB"})]}),s.jsx("div",{className:"preview-bar",children:s.jsx("span",{})})]})]}),s.jsxs("section",{className:"preview-files",children:[s.jsxs("div",{className:"preview-topline",children:[s.jsx("h3",{children:"Recent Files"}),s.jsx("button",{type:"button","aria-hidden":"true",tabIndex:-1,children:"Upload"})]}),[["Project Alpha","1.2 GB · Last edited 2h ago"],["Q3 Financials.xlsx","2.4 MB · Last edited 2h ago"],["Campaign Banner.png","4.1 MB · Last edited 2h ago"]].map(([o,a])=>s.jsxs("div",{className:"preview-file",children:[s.jsx("div",{className:"preview-file-icon","aria-hidden":"true"}),s.jsxs("div",{children:[s.jsx("h4",{children:o}),s.jsx("p",{children:a})]})]},o))]})]})})]}),s.jsxs("section",{className:"logo-strip","aria-label":"Trusted by",children:[s.jsx("p",{children:"Trusted by innovative teams worldwide"}),s.jsx("div",{children:["Acme Corp","GlobalTech","NEXUS","Horizon","Vertex"].map(o=>s.jsx("span",{children:o},o))})]}),s.jsxs("section",{id:"features",className:"content-section split-section",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Why CloudVault?"}),s.jsx("h2",{children:"More than storage. Your central hub."})]}),s.jsx("p",{children:"In a world scattered with devices and apps, CloudVault brings everything together in a single, secure place for photos, documents, and creative projects."})]}),s.jsx("section",{id:"how-it-works",className:"content-section feature-grid",children:Py.map(o=>s.jsxs("article",{className:"feature-card animate-fade-up",children:[s.jsx("div",{className:"feature-icon","aria-hidden":"true",children:o.icon}),s.jsx("h3",{children:o.title}),s.jsx("p",{children:o.desc})]},o.title))}),s.jsxs("section",{className:"stats-band","aria-label":"Platform statistics",children:[s.jsxs("div",{className:"stat-mini",children:[s.jsxs("strong",{children:[r.filesStored.toLocaleString(),"+"]}),s.jsx("span",{children:"Files stored"})]}),s.jsxs("div",{className:"stat-mini",children:[s.jsx("strong",{children:Te(r.storageCapacity)}),s.jsx("span",{children:"Storage capacity"})]}),s.jsxs("div",{className:"stat-mini",children:[s.jsxs("strong",{children:[r.activeUsers.toLocaleString(),"+"]}),s.jsx("span",{children:"Active users"})]})]}),s.jsxs("section",{id:"pricing",className:"content-section pricing-section",children:[s.jsxs("div",{className:"section-center",children:[s.jsx("p",{className:"section-kicker",children:"Pricing"}),s.jsx("h2",{children:"Simple plans for clean storage."}),s.jsx("p",{className:"section-subtitle",children:"Start free. Scale when you need more."})]}),s.jsx("div",{className:"pricing-grid",children:Ny.map(o=>s.jsxs("article",{className:`plan-card${o.highlight?" highlight":""}`,children:[o.highlight&&s.jsx("span",{className:"plan-badge",children:"Most popular"}),s.jsx("h3",{children:o.name}),s.jsxs("div",{className:"plan-price",children:[o.price,s.jsx("span",{children:o.period})]}),s.jsxs("p",{children:[o.storage," storage"]}),s.jsx("ul",{className:"plan-features",children:(o.features||[]).slice(0,4).map(a=>s.jsx("li",{children:a},a))}),s.jsxs("button",{type:"button",className:o.highlight?"btn-primary":"btn-secondary",onClick:e,children:["Choose ",o.name]})]},o.id))})]}),s.jsxs("section",{className:"content-section testimonials-section","aria-label":"Customer testimonials",children:[s.jsxs("div",{className:"section-center",children:[s.jsx("p",{className:"section-kicker",children:"Testimonials"}),s.jsx("h2",{children:"Loved by teams everywhere."})]}),s.jsx("div",{className:"testimonials-grid",children:Ry.map(o=>s.jsxs("blockquote",{className:"testimonial-card",children:[s.jsxs("p",{className:"testimonial-quote",children:["“",o.quote,"”"]}),s.jsxs("footer",{children:[s.jsx("strong",{children:o.name}),s.jsx("span",{children:o.role})]})]},o.name))})]}),s.jsxs("section",{id:"faq",className:"content-section faq-section",children:[s.jsxs("div",{className:"section-center",children:[s.jsx("p",{className:"section-kicker",children:"FAQ"}),s.jsx("h2",{children:"Questions? We have answers."})]}),s.jsx("div",{className:"faq-list",children:Oy.map(o=>s.jsxs("details",{className:"faq-item",children:[s.jsx("summary",{children:o.q}),s.jsx("p",{children:o.a})]},o.q))})]}),s.jsxs("section",{className:"cta-band",children:[s.jsx("h2",{children:"Ready to organize your digital life?"}),s.jsx("p",{children:"Join thousands of users who trust CloudVault with their most important files."}),s.jsxs("div",{className:"hero-actions",children:[s.jsx("button",{type:"button",className:"btn-primary btn-hero-dark",onClick:e,children:"Get started free"}),s.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"Log in"})]})]})]}),s.jsxs("footer",{className:"landing-footer",children:[s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx("span",{className:"brand-mark",children:Be.logo}),s.jsx("strong",{children:Be.name}),s.jsx("p",{children:"Secure cloud storage for individuals and teams."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Product"}),s.jsx("a",{href:"#features",children:"Features"}),s.jsx("a",{href:"#pricing",children:"Pricing"}),s.jsx("a",{href:"#faq",children:"FAQ"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Company"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"About"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Contact"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Legal"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Privacy"}),s.jsx("a",{href:"https://www.cloudvault.co.in",target:"_blank",rel:"noopener noreferrer",children:"Terms"})]})]}),s.jsx("div",{className:"footer-bottom",children:s.jsxs("span",{children:["© ",new Date().getFullYear()," ",Be.name,". All rights reserved."]})})]})]})}const Dy=()=>{};var ld={};/**
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
 */const lh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},zy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],l=e[n++],c=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ch={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,l=a?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,p=o>>2,h=(o&3)<<4|l>>4;let d=(l&15)<<2|u>>6,x=u&63;c||(x=64,a||(d=64)),r.push(n[p],n[h],n[d],n[x])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(lh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):zy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||l==null||u==null||h==null)throw new My;const d=o<<2|l>>4;if(r.push(d),u!==64){const x=l<<4&240|u>>2;if(r.push(x),h!==64){const b=u<<6&192|h;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class My extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fy=function(e){const t=lh(e);return ch.encodeByteArray(t,!0)},uh=function(e){return Fy(e).replace(/\./g,"")},dh=function(e){try{return ch.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Uy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const By=()=>Uy().__FIREBASE_DEFAULTS__,Wy=()=>{if(typeof process>"u"||typeof ld>"u")return;const e=ld.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},$y=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&dh(e[1]);return t&&JSON.parse(t)},Ec=()=>{try{return Dy()||By()||Wy()||$y()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Vy=e=>{var t,n;return(n=(t=Ec())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},fh=()=>{var e;return(e=Ec())===null||e===void 0?void 0:e.config},ph=e=>{var t;return(t=Ec())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Hy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Os(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gy(e){return(await fetch(e,{credentials:"include"})).ok}const hi={};function Ky(){const e={prod:[],emulator:[]};for(const t of Object.keys(hi))hi[t]?e.emulator.push(t):e.prod.push(t);return e}function Yy(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let cd=!1;function Qy(e,t){if(typeof window>"u"||typeof document>"u"||!Os(window.location.host)||hi[e]===t||hi[e]||cd)return;hi[e]=t;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",o=Ky().prod.length>0;function a(){const d=document.getElementById(r);d&&d.remove()}function l(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,x){d.setAttribute("width","24"),d.setAttribute("id",x),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function u(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{cd=!0,a()},d}function p(d,x){d.setAttribute("id",x),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function h(){const d=Yy(r),x=n("text"),b=document.getElementById(x)||document.createElement("span"),k=n("learnmore"),A=document.getElementById(k)||document.createElement("a"),g=n("preprendIcon"),f=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const v=d.element;l(v),p(A,k);const w=u();c(f,g),v.append(f,b,A,w),document.body.appendChild(v)}o?(b.innerText="Preview backend disconnected.",f.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(f.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Jy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Zy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e0(){const e=Pe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function t0(){try{return typeof indexedDB=="object"}catch{return!1}}function n0(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const r0="FirebaseError";class kn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=r0,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?i0(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new kn(i,l,r)}}function i0(e,t){return e.replace(o0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const o0=/\{\$([^}]+)}/g;function s0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Pr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(ud(o)&&ud(a)){if(!Pr(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ud(e){return e!==null&&typeof e=="object"}/**
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
 */function Vi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function a0(e,t){const n=new l0(e,t);return n.subscribe.bind(n)}class l0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");c0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ya),i.error===void 0&&(i.error=ya),i.complete===void 0&&(i.complete=ya);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function c0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ya(){}/**
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
 */function zr(e){return e&&e._delegate?e._delegate:e}class Rr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class u0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Hy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(f0(t))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Rn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rn){return this.instances.has(t)}getOptions(t=Rn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:d0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Rn){return this.component?this.component.multipleInstances?t:Rn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function d0(e){return e===Rn?void 0:e}function f0(e){return e.instantiationMode==="EAGER"}/**
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
 */class p0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new u0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(J||(J={}));const h0={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},g0=J.INFO,m0={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},v0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=m0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class hh{constructor(t){this.name=t,this._logLevel=g0,this._logHandler=v0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?h0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const y0=(e,t)=>t.some(n=>e instanceof n);let dd,fd;function x0(){return dd||(dd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function w0(){return fd||(fd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gh=new WeakMap,wl=new WeakMap,mh=new WeakMap,xa=new WeakMap,Cc=new WeakMap;function b0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(gn(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&gh.set(n,e)}).catch(()=>{}),Cc.set(t,e),t}function k0(e){if(wl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});wl.set(e,t)}let bl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return wl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||mh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function S0(e){bl=e(bl)}function _0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(wa(this),t,...n);return mh.set(r,t.sort?t.sort():[t]),gn(r)}:w0().includes(e)?function(...t){return e.apply(wa(this),t),gn(gh.get(this))}:function(...t){return gn(e.apply(wa(this),t))}}function E0(e){return typeof e=="function"?_0(e):(e instanceof IDBTransaction&&k0(e),y0(e,x0())?new Proxy(e,bl):e)}function gn(e){if(e instanceof IDBRequest)return b0(e);if(xa.has(e))return xa.get(e);const t=E0(e);return t!==e&&(xa.set(e,t),Cc.set(t,e)),t}const wa=e=>Cc.get(e);function C0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),l=gn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(gn(a.result),c.oldVersion,c.newVersion,gn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const I0=["get","getKey","getAll","getAllKeys","count"],j0=["put","add","delete","clear"],ba=new Map;function pd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ba.get(t))return ba.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=j0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||I0.includes(n)))return;const o=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return ba.set(t,o),o}S0(e=>({...e,get:(t,n,r)=>pd(t,n)||e.get(t,n,r),has:(t,n)=>!!pd(t,n)||e.has(t,n)}));/**
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
 */class T0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(N0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function N0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const kl="@firebase/app",hd="0.13.2";/**
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
 */const $t=new hh("@firebase/app"),P0="@firebase/app-compat",R0="@firebase/analytics-compat",O0="@firebase/analytics",A0="@firebase/app-check-compat",L0="@firebase/app-check",D0="@firebase/auth",z0="@firebase/auth-compat",M0="@firebase/database",F0="@firebase/data-connect",U0="@firebase/database-compat",B0="@firebase/functions",W0="@firebase/functions-compat",$0="@firebase/installations",V0="@firebase/installations-compat",H0="@firebase/messaging",G0="@firebase/messaging-compat",K0="@firebase/performance",Y0="@firebase/performance-compat",Q0="@firebase/remote-config",q0="@firebase/remote-config-compat",J0="@firebase/storage",X0="@firebase/storage-compat",Z0="@firebase/firestore",e1="@firebase/ai",t1="@firebase/firestore-compat",n1="firebase",r1="11.10.0";/**
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
 */const Sl="[DEFAULT]",i1={[kl]:"fire-core",[P0]:"fire-core-compat",[O0]:"fire-analytics",[R0]:"fire-analytics-compat",[L0]:"fire-app-check",[A0]:"fire-app-check-compat",[D0]:"fire-auth",[z0]:"fire-auth-compat",[M0]:"fire-rtdb",[F0]:"fire-data-connect",[U0]:"fire-rtdb-compat",[B0]:"fire-fn",[W0]:"fire-fn-compat",[$0]:"fire-iid",[V0]:"fire-iid-compat",[H0]:"fire-fcm",[G0]:"fire-fcm-compat",[K0]:"fire-perf",[Y0]:"fire-perf-compat",[Q0]:"fire-rc",[q0]:"fire-rc-compat",[J0]:"fire-gcs",[X0]:"fire-gcs-compat",[Z0]:"fire-fst",[t1]:"fire-fst-compat",[e1]:"fire-vertex","fire-js":"fire-js",[n1]:"fire-js-all"};/**
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
 */const ls=new Map,o1=new Map,_l=new Map;function gd(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ai(e){const t=e.name;if(_l.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;_l.set(t,e);for(const n of ls.values())gd(n,e);for(const n of o1.values())gd(n,e);return!0}function vh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function xt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const s1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new $i("app","Firebase",s1);/**
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
 */class a1{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
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
 */const Hi=r1;function yh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Sl,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=fh()),!n)throw mn.create("no-options");const o=ls.get(i);if(o){if(Pr(n,o.options)&&Pr(r,o.config))return o;throw mn.create("duplicate-app",{appName:i})}const a=new p0(i);for(const c of _l.values())a.addComponent(c);const l=new a1(n,r,a);return ls.set(i,l),l}function l1(e=Sl){const t=ls.get(e);if(!t&&e===Sl&&fh())return yh();if(!t)throw mn.create("no-app",{appName:e});return t}function wr(e,t,n){var r;let i=(r=i1[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(l.join(" "));return}Ai(new Rr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const c1="firebase-heartbeat-database",u1=1,Li="firebase-heartbeat-store";let ka=null;function xh(){return ka||(ka=C0(c1,u1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Li)}catch(n){console.warn(n)}}}}).catch(e=>{throw mn.create("idb-open",{originalErrorMessage:e.message})})),ka}async function d1(e){try{const n=(await xh()).transaction(Li),r=await n.objectStore(Li).get(wh(e));return await n.done,r}catch(t){if(t instanceof kn)$t.warn(t.message);else{const n=mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(n.message)}}}async function md(e,t){try{const r=(await xh()).transaction(Li,"readwrite");await r.objectStore(Li).put(t,wh(e)),await r.done}catch(n){if(n instanceof kn)$t.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function wh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const f1=1024,p1=30;class h1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new m1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=vd();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>p1){const a=v1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vd(),{heartbeatsToSend:r,unsentEntries:i}=g1(this._heartbeatsCache.heartbeats),o=uh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return $t.warn(n),""}}}function vd(){return new Date().toISOString().substring(0,10)}function g1(e,t=f1){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),yd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class m1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return t0()?n0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await d1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return md(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return md(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function yd(e){return uh(JSON.stringify({version:2,heartbeats:e})).length}function v1(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function y1(e){Ai(new Rr("platform-logger",t=>new T0(t),"PRIVATE")),Ai(new Rr("heartbeat",t=>new h1(t),"PRIVATE")),wr(kl,hd,e),wr(kl,hd,"esm2017"),wr("fire-js","")}y1("");var x1="firebase",w1="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wr(x1,w1,"app");function Ic(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function bh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b1=bh,kh=new $i("auth","Firebase",bh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new hh("@firebase/auth");function k1(e,...t){cs.logLevel<=J.WARN&&cs.warn(`Auth (${Hi}): ${e}`,...t)}function Oo(e,...t){cs.logLevel<=J.ERROR&&cs.error(`Auth (${Hi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e,...t){throw Tc(e,...t)}function pt(e,...t){return Tc(e,...t)}function jc(e,t,n){const r=Object.assign(Object.assign({},b1()),{[t]:n});return new $i("auth","Firebase",r).create(t,{appName:e.name})}function Un(e){return jc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function S1(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&_t(e,"argument-error"),jc(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return kh.create(e,...t)}function L(e,t,...n){if(!e)throw Tc(t,...n)}function Dt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Oo(t),new Error(t)}function Vt(e,t){e||Dt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function _1(){return xd()==="http:"||xd()==="https:"}function xd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_1()||Xy()||"connection"in navigator)?navigator.onLine:!0}function C1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Vt(n>t,"Short delay should be less than long delay!"),this.isMobile=qy()||Zy()}get(){return E1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],T1=new Gi(3e4,6e4);function Pc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Mr(e,t,n,r,i={}){return _h(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const l=Vi(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:c},o);return Jy()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&Os(e.emulatorConfig.host)&&(u.credentials="include"),Sh.fetch()(await Eh(e,e.config.apiHost,n,l),u)})}async function _h(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},I1),t);try{const i=new P1(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw yo(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yo(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw yo(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw yo(e,"user-disabled",a);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jc(e,p,u);_t(e,p)}}catch(i){if(i instanceof kn)throw i;_t(e,"network-request-failed",{message:String(i)})}}async function N1(e,t,n,r,i={}){const o=await Mr(e,t,n,r,i);return"mfaPendingCredential"in o&&_t(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function Eh(e,t,n,r){const i=`${t}${n}?${r}`,o=e,a=o.config.emulator?Nc(e.config,i):`${e.config.apiScheme}://${i}`;return j1.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class P1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),T1.get())})}}function yo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(e,t){return Mr(e,"POST","/v1/accounts:delete",t)}async function us(e,t){return Mr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function O1(e,t=!1){const n=zr(e),r=await n.getIdToken(t),i=Rc(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:gi(Sa(i.auth_time)),issuedAtTime:gi(Sa(i.iat)),expirationTime:gi(Sa(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Sa(e){return Number(e)*1e3}function Rc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const i=dh(n);return i?JSON.parse(i):(Oo("Failed to decode base64 JWT payload"),null)}catch(i){return Oo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wd(e){const t=Rc(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof kn&&A1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function A1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function ds(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Di(e,us(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Ch(o.providerUserInfo):[],l=z1(e.providerData,a),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(l!=null&&l.length),p=c?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Cl(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,h)}async function D1(e){const t=zr(e);await ds(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function z1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Ch(e){return e.map(t=>{var{providerId:n}=t,r=Ic(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(e,t){const n=await _h(e,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=await Eh(e,i,"/v1/token",`key=${o}`),l=await e._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return e.emulatorConfig&&Os(e.emulatorConfig.host)&&(c.credentials="include"),Sh.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function F1(e,t){return Mr(e,"POST","/v2/accounts:revokeToken",Pc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):wd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){L(t.length!==0,"internal-error");const n=wd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await M1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new br;return r&&(L(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ut{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Ic(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new L1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Cl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Di(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return O1(this,t)}reload(){return D1(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ut(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ds(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(Un(this.auth));const t=await this.getIdToken();return await Di(this,R1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,l,c,u,p;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,x=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,b=(a=n.photoURL)!==null&&a!==void 0?a:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:v,emailVerified:w,isAnonymous:E,providerData:C,stsTokenManager:j}=n;L(v&&j,t,"internal-error");const R=br.fromJSON(this.name,j);L(typeof v=="string",t,"internal-error"),qt(h,t.name),qt(d,t.name),L(typeof w=="boolean",t,"internal-error"),L(typeof E=="boolean",t,"internal-error"),qt(x,t.name),qt(b,t.name),qt(k,t.name),qt(A,t.name),qt(g,t.name),qt(f,t.name);const V=new ut({uid:v,auth:t,email:d,emailVerified:w,displayName:h,isAnonymous:E,photoURL:b,phoneNumber:x,tenantId:k,stsTokenManager:R,createdAt:g,lastLoginAt:f});return C&&Array.isArray(C)&&(V.providerData=C.map(N=>Object.assign({},N))),A&&(V._redirectEventId=A),V}static async _fromIdTokenResponse(t,n,r=!1){const i=new br;i.updateFromServerResponse(n);const o=new ut({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ds(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Ch(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new br;l.updateFromIdToken(r);const c=new ut({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Cl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=new Map;function zt(e){Vt(e instanceof Function,"Expected a class definition");let t=bd.get(e);return t?(Vt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,bd.set(e,t),t)}/**
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
 */function Ao(e,t,n){return`firebase:${e}:${t}:${n}`}class kr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ao(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ao("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await us(this.auth,{idToken:t}).catch(()=>{});return n?ut._fromGetAccountInfoResponse(this.auth,n,t):null}return ut._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new kr(zt(kd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||zt(kd);const a=Ao(r,t.config.apiKey,t.name);let l=null;for(const u of n)try{const p=await u._get(a);if(p){let h;if(typeof p=="string"){const d=await us(t,{idToken:p}).catch(()=>{});if(!d)break;h=await ut._fromGetAccountInfoResponse(t,d,p)}else h=ut._fromJSON(t,p);u!==o&&(l=h),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new kr(o,t,r):(o=c[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new kr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ph(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(jh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Oh(t))return"Blackberry";if(Ah(t))return"Webos";if(Th(t))return"Safari";if((t.includes("chrome/")||Nh(t))&&!t.includes("edge/"))return"Chrome";if(Rh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jh(e=Pe()){return/firefox\//i.test(e)}function Th(e=Pe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Nh(e=Pe()){return/crios\//i.test(e)}function Ph(e=Pe()){return/iemobile/i.test(e)}function Rh(e=Pe()){return/android/i.test(e)}function Oh(e=Pe()){return/blackberry/i.test(e)}function Ah(e=Pe()){return/webos/i.test(e)}function Oc(e=Pe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function U1(e=Pe()){var t;return Oc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function B1(){return e0()&&document.documentMode===10}function Lh(e=Pe()){return Oc(e)||Rh(e)||Ah(e)||Oh(e)||/windows phone/i.test(e)||Ph(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(e,t=[]){let n;switch(e){case"Browser":n=Sd(Pe());break;case"Worker":n=`${Sd(Pe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hi}/${r}`}/**
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
 */class W1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,l)=>{try{const c=t(o);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $1(e,t={}){return Mr(e,"GET","/v2/passwordPolicy",Pc(e,t))}/**
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
 */const V1=6;class H1{constructor(t){var n,r,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:V1,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _d(this),this.idTokenSubscription=new _d(this),this.beforeStateQueue=new W1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=zt(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await kr.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await us(this,{idToken:t}),r=await ut._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(xt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ds(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=C1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(xt(this.app))return Promise.reject(Un(this));const n=t?zr(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(Un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return xt(this.app)?Promise.reject(Un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await $1(this),n=new H1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new $i("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await F1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&zt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Dh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&k1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function As(e){return zr(e)}class _d{constructor(t){this.auth=t,this.observer=null,this.addObserver=a0(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K1(e){Ac=e}function Y1(e){return Ac.loadJS(e)}function Q1(){return Ac.gapiScript}function q1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(e,t){const n=vh(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Pr(o,t??{}))return i;_t(i,"already-initialized")}return n.initialize({options:t})}function X1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Z1(e,t,n){const r=As(e);L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=zh(t),{host:a,port:l}=ex(t),c=l===null?"":`:${l}`,u={url:`${o}//${a}${c}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(Pr(u,r.config.emulator)&&Pr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Os(a)?(Gy(`${o}//${a}${c}`),Qy("Auth",!0)):tx()}function zh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ex(e){const t=zh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ed(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Ed(a)}}}function Ed(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function tx(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Dt("not implemented")}_getIdTokenResponse(t){return Dt("not implemented")}_linkToIdToken(t,n){return Dt("not implemented")}_getReauthenticationResolver(t){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(e,t){return N1(e,"POST","/v1/accounts:signInWithIdp",Pc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx="http://localhost";class Ht extends Mh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ht(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Ic(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ht(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Sr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Sr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Sr(t,n)}buildRequest(){const t={requestUri:nx,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Vi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fs extends kn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fs.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new fs(t,n,r,i)}}function Fh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?fs._fromErrorAndOperation(e,o,t,r):o})}async function rx(e,t,n=!1){const r=await Di(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Or._forOperation(e,"link",r)}/**
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
 */async function ix(e,t,n=!1){const{auth:r}=e;if(xt(r.app))return Promise.reject(Un(r));const i="reauthenticate";try{const o=await Di(e,Fh(r,i,t,e),n);L(o.idToken,r,"internal-error");const a=Rc(o.idToken);L(a,r,"internal-error");const{sub:l}=a;return L(e.uid===l,r,"user-mismatch"),Or._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(e,t,n=!1){if(xt(e.app))return Promise.reject(Un(e));const r="signIn",i=await Fh(e,r,t),o=await Or._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function sx(e,t,n,r){return zr(e).onIdTokenChanged(t,n,r)}function ax(e,t,n){return zr(e).beforeAuthStateChanged(t,n)}const ps="__sak";/**
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
 */const lx=1e3,cx=10;class Bh extends Uh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);B1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,cx):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},lx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Bh.type="LOCAL";const ux=Bh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function dx(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ls{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ls(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async u=>u(n.origin,o)),c=await dx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ls.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class fx{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,c)=>{const u=Dc("",20);i.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(d.data.response);break;default:clearTimeout(p),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function px(e){kt().location.href=e}/**
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
 */function Vh(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function hx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gx(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function mx(){return Vh()?self:null}/**
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
 */const Hh="firebaseLocalStorageDb",vx=1,hs="firebaseLocalStorage",Gh="fbase_key";class Ki{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ds(e,t){return e.transaction([hs],t?"readwrite":"readonly").objectStore(hs)}function yx(){const e=indexedDB.deleteDatabase(Hh);return new Ki(e).toPromise()}function Il(){const e=indexedDB.open(Hh,vx);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(hs,{keyPath:Gh})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(hs)?t(r):(r.close(),await yx(),t(await Il()))})})}async function Id(e,t,n){const r=Ds(e,!0).put({[Gh]:t,value:n});return new Ki(r).toPromise()}async function xx(e,t){const n=Ds(e,!1).get(t),r=await new Ki(n).toPromise();return r===void 0?null:r.value}function jd(e,t){const n=Ds(e,!0).delete(t);return new Ki(n).toPromise()}const wx=800,bx=3;class Kh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Il(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>bx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ls._getInstance(mx()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await hx(),!this.activeServiceWorker)return;this.sender=new fx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||gx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Il();return await Id(t,ps,"1"),await jd(t,ps),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Id(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>xx(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>jd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ds(i,!1).getAll();return new Ki(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kh.type="LOCAL";const kx=Kh;new Gi(3e4,6e4);/**
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
 */function Yh(e,t){return t?zt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class zc extends Mh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Sr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Sr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Sr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Sx(e){return ox(e.auth,new zc(e),e.bypassAuthState)}function _x(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),ix(n,new zc(e),e.bypassAuthState)}async function Ex(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),rx(n,new zc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Sx;case"linkViaPopup":case"linkViaRedirect":return Ex;case"reauthViaPopup":case"reauthViaRedirect":return _x;default:_t(this.auth,"internal-error")}}resolve(t){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=new Gi(2e3,1e4);async function Ix(e,t,n){if(xt(e.app))return Promise.reject(pt(e,"operation-not-supported-in-this-environment"));const r=As(e);S1(e,t,Lc);const i=Yh(r,n);return new Dn(r,"signInViaPopup",t,i).executeNotNull()}class Dn extends Qh{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const t=Dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Cx.get())};t()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx="pendingRedirect",Lo=new Map;class Tx extends Qh{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Lo.get(this.auth._key());if(!t){try{const r=await Nx(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Lo.set(this.auth._key(),t)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nx(e,t){const n=Ox(t),r=Rx(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Px(e,t){Lo.set(e._key(),t)}function Rx(e){return zt(e._redirectPersistence)}function Ox(e){return Ao(jx,e.config.apiKey,e.name)}async function Ax(e,t,n=!1){if(xt(e.app))return Promise.reject(Un(e));const r=As(e),i=Yh(r,t),a=await new Tx(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=10*60*1e3;class Dx{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!zx(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!qh(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Lx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Td(t))}saveEventToCache(t){this.cachedEventUids.add(Td(t)),this.lastProcessedEventTime=Date.now()}}function Td(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function qh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function zx(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qh(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(e,t={}){return Mr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ux=/^https?/;async function Bx(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Mx(e);for(const n of t)try{if(Wx(n))return}catch{}_t(e,"unauthorized-domain")}function Wx(e){const t=El(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Ux.test(n))return!1;if(Fx.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $x=new Gi(3e4,6e4);function Nd(){const e=kt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Vx(e){return new Promise((t,n)=>{var r,i,o;function a(){Nd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Nd(),n(pt(e,"network-request-failed"))},timeout:$x.get()})}if(!((i=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=kt().gapi)===null||o===void 0)&&o.load)a();else{const l=q1("iframefcb");return kt()[l]=()=>{gapi.load?a():n(pt(e,"network-request-failed"))},Y1(`${Q1()}?onload=${l}`).catch(c=>n(c))}}).catch(t=>{throw Do=null,t})}let Do=null;function Hx(e){return Do=Do||Vx(e),Do}/**
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
 */const Gx=new Gi(5e3,15e3),Kx="__/auth/iframe",Yx="emulator/auth/iframe",Qx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jx(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Nc(t,Yx):`https://${e.config.authDomain}/${Kx}`,r={apiKey:t.apiKey,appName:e.name,v:Hi},i=qx.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Vi(r).slice(1)}`}async function Xx(e){const t=await Hx(e),n=kt().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:Jx(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qx,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=pt(e,"network-request-failed"),l=kt().setTimeout(()=>{o(a)},Gx.get());function c(){kt().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{o(a)})}))}/**
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
 */const Zx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ew=500,tw=600,nw="_blank",rw="http://localhost";class Pd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iw(e,t,n,r=ew,i=tw){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Zx),{width:r.toString(),height:i.toString(),top:o,left:a}),u=Pe().toLowerCase();n&&(l=Nh(u)?nw:n),jh(u)&&(t=t||rw,c.scrollbars="yes");const p=Object.entries(c).reduce((d,[x,b])=>`${d}${x}=${b},`,"");if(U1(u)&&l!=="_self")return ow(t||"",l),new Pd(null);const h=window.open(t||"",l,p);L(h,e,"popup-blocked");try{h.focus()}catch{}return new Pd(h)}function ow(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sw="__/auth/handler",aw="emulator/auth/handler",lw=encodeURIComponent("fac");async function Rd(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Hi,eventId:i};if(t instanceof Lc){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",s0(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[p,h]of Object.entries({}))a[p]=h}if(t instanceof Fr){const p=t.getScopes().filter(h=>h!=="");p.length>0&&(a.scopes=p.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await e._getAppCheckToken(),u=c?`#${lw}=${encodeURIComponent(c)}`:"";return`${cw(e)}?${Vi(l).slice(1)}${u}`}function cw({config:e}){return e.emulator?Nc(e,aw):`https://${e.authDomain}/${sw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="webStorageSupport";class uw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$h,this._completeRedirectFn=Ax,this._overrideRedirectResult=Px}async _openPopup(t,n,r,i){var o;Vt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Rd(t,n,r,El(),i);return iw(t,a,Dc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Rd(t,n,r,El(),i);return px(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Xx(t),r=new Dx(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(_a,{type:_a},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[_a];a!==void 0&&n(!!a),_t(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bx(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lh()||Th()||Oc()}}const dw=uw;var Od="@firebase/auth",Ad="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hw(e){Ai(new Rr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dh(e)},u=new G1(r,i,o,c);return X1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ai(new Rr("auth-internal",t=>{const n=As(t.getProvider("auth").getImmediate());return(r=>new fw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wr(Od,Ad,pw(e)),wr(Od,Ad,"esm2017")}/**
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
 */const gw=5*60,mw=ph("authIdTokenMaxAge")||gw;let Ld=null;const vw=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mw)return;const i=n==null?void 0:n.token;Ld!==i&&(Ld=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yw(e=l1()){const t=vh(e,"auth");if(t.isInitialized())return t.getImmediate();const n=J1(e,{popupRedirectResolver:dw,persistence:[kx,ux,$h]}),r=ph("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=vw(o.toString());ax(n,a,()=>a(n.currentUser)),sx(n,l=>a(l))}}const i=Vy("auth");return i&&Z1(n,`http://${i}`),n}function xw(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}K1({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=pt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",xw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hw("Browser");const Jh={apiKey:"AIzaSyCNsYDBSfYMJUxqbkC3Cb_w6CYGtW4Xf20",authDomain:"cloudvault-58446.firebaseapp.com",projectId:"cloudvault-58446",storageBucket:"cloudvault-58446.firebasestorage.app",messagingSenderId:"378535306521",appId:"1:378535306521:web:2e5fe57db925753d0f5188"},ww=["google","github","microsoft"];let Ea=null,Dd=null;function bw(){return gs()?(Ea||(Ea=yh(Jh),Dd=yw(Ea)),Dd):null}function gs(){return!0}function kw(){const e=Object.entries(Jh).filter(([,t])=>!t).map(([t])=>t);return{configured:gs(),providers:ww.map(t=>({id:t,configured:gs()})),missingEnv:e}}async function Sw(e){const t=bw();if(!t)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env variables.");const r={google:new Pt,github:new Rt,microsoft:new mi("microsoft.com")}[e];if(!r)throw new Error("Unknown provider");const i=await Ix(t,r),o=await i.user.getIdToken(),a=await fetch(`${St}/auth/firebase`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:o,email:i.user.email,fullName:i.user.displayName,avatarUrl:i.user.photoURL,provider:e})}),l=await a.json();if(!a.ok)throw new Error(l.error||l.message||"Firebase login failed");return l.success?l.data:l}function _w({onVerified:e,onError:t,onExpire:n,theme:r="auto",size:i="normal"}){const o=m.useRef(null),[a,l]=m.useState(!1),[c,u]=m.useState(!0),[p,h]=m.useState(null);m.useEffect(()=>{if(window.turnstile)l(!0),u(!1);else{const x=document.createElement("script");x.src="https://challenges.cloudflare.com/turnstile/v0/api.js",x.async=!0,x.defer=!0,x.onload=()=>{l(!0),u(!1),console.log("TURNSTILE: Script loaded")},x.onerror=()=>{h("Failed to load Turnstile"),u(!1),t==null||t("Failed to load Turnstile")},document.head.appendChild(x)}return()=>{if(o.current&&window.turnstile)try{window.turnstile.remove(o.current)}catch(x){console.error("TURNSTILE: Error removing widget:",x)}}},[]),m.useEffect(()=>{if(a&&o.current&&window.turnstile){const x="Turnstile site key not configured";h(x),t==null||t(x),u(!1);return}},[a,r,i,e,t,n]);const d=()=>{if(o.current&&window.turnstile)try{window.turnstile.reset(o.current),h(null)}catch(x){console.error("TURNSTILE: Error resetting widget:",x)}};return m.useEffect(()=>{o.current&&(o.current.reset=d)},[]),c?s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",background:"var(--bg-secondary)",borderRadius:"var(--radius)",border:"1px solid var(--border)"},children:s.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid var(--border)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})}):p?s.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"var(--radius)",border:"1px solid var(--danger)",color:"var(--danger)",fontSize:"13px",textAlign:"center"},children:[p,s.jsx("button",{type:"button",onClick:d,style:{marginTop:"8px",padding:"6px 12px",background:"var(--danger)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px"},children:"Retry"})]}):s.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",minHeight:i==="compact"?140:70,overflow:"hidden"},children:s.jsx("div",{ref:o})})}const Tn=(e="")=>{const t=e.toLowerCase();return t.includes("failed to fetch")||t.includes("cannot reach")||t.includes("networkerror")?"Unable to reach CloudVault. Please check your connection.":t.includes("firebase")||t.includes("oauth")||t.includes("access token")?"Social login failed. Please try again.":e||"Something went wrong. Please try again."},Ca=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),zd=e=>e.length>=8&&/[A-Z]/.test(e)&&/[a-z]/.test(e)&&/\d/.test(e);function Ew({size:e=20}){return s.jsx("span",{style:{display:"inline-block",width:e,height:e,border:"2.5px solid rgba(255,255,255,0.25)",borderTopColor:"#fff",borderRadius:"50%",animation:"cv-spin 0.7s linear infinite"}})}function Cw({size:e=42}){return s.jsx("span",{style:{width:e,height:e,borderRadius:Math.round(e*.3),background:"var(--gradient)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 14px 30px rgba(0,183,79,.28)",flexShrink:0},children:s.jsxs("svg",{width:Math.round(e*.62),height:Math.round(e*.62),viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M9.5 21.5h14a5.3 5.3 0 0 0 .4-10.6A8 8 0 0 0 8.4 8.8 6.5 6.5 0 0 0 9.5 21.5Z",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 21.5h14",stroke:"white",strokeWidth:"3",strokeLinecap:"round"})]})})}function xo({label:e,type:t="text",value:n,onChange:r,placeholder:i,autoFocus:o,error:a}){const[l,c]=m.useState(!1),u=n&&n.length>0;return s.jsxs("div",{style:{position:"relative",marginBottom:4},children:[s.jsx("label",{style:{position:"absolute",left:16,top:l||u?8:"50%",transform:l||u?"translateY(0) scale(0.82)":"translateY(-50%)",transformOrigin:"left top",fontSize:l||u?11:14,fontWeight:600,color:l?"var(--cv-accent)":a?"var(--cv-danger)":"var(--cv-text-muted)",transition:"all 0.18s cubic-bezier(0.4,0,0.2,1)",pointerEvents:"none",zIndex:1,letterSpacing:l||u?"0.04em":"0",textTransform:l||u?"uppercase":"none"},children:e}),s.jsx("input",{type:t,value:n,onChange:r,onFocus:()=>c(!0),onBlur:()=>c(!1),autoFocus:o,placeholder:l?i:"",style:{width:"100%",padding:"28px 16px 10px",background:"var(--cv-bg-card)",border:`1.5px solid ${a?"var(--cv-danger)":l?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:"var(--cv-radius-lg)",color:"var(--cv-text)",fontSize:15,outline:"none",transition:"border-color 0.18s ease, box-shadow 0.18s ease",boxShadow:l?`0 0 0 3px ${a?"rgba(239,68,68,0.12)":"rgba(99,102,241,0.12)"}`:"none"}}),a&&s.jsx("div",{style:{fontSize:12,color:"var(--cv-danger)",marginTop:4,paddingLeft:4,fontWeight:500},children:a})]})}function Iw({value:e,onChange:t}){const n=[m.useRef(),m.useRef(),m.useRef(),m.useRef(),m.useRef(),m.useRef()],r=(e+"      ").slice(0,6).split(""),i=(a,l)=>{var c,u;if(l.key==="Backspace"){if(r[a]!==" "){const p=r.map((h,d)=>d===a?" ":h).join("").trimEnd();t(p)}else if(a>0){(c=n[a-1].current)==null||c.focus();const p=r.map((h,d)=>d===a-1?" ":h).join("").trimEnd();t(p)}}else if(l.key>="0"&&l.key<="9"){l.preventDefault();const p=r.map((h,d)=>d===a?l.key:h).join("").replace(/ /g,"");t(p.slice(0,6)),a<5&&((u=n[a+1].current)==null||u.focus())}},o=a=>{var c;const l=a.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);l&&(t(l),(c=n[Math.min(l.length,5)].current)==null||c.focus())};return s.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",margin:"8px 0"},children:n.map((a,l)=>{var c,u,p,h;return s.jsx("input",{ref:a,type:"text",inputMode:"numeric",maxLength:1,value:((c=r[l])==null?void 0:c.trim())||"",onKeyDown:d=>i(l,d),onPaste:o,onChange:()=>{},style:{width:52,height:60,textAlign:"center",fontSize:24,fontWeight:800,background:"var(--cv-bg-card)",border:`2px solid ${(u=r[l])!=null&&u.trim()?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:14,color:"var(--cv-text)",outline:"none",transition:"border-color 0.18s ease, transform 0.1s ease",transform:(p=r[l])!=null&&p.trim()?"scale(1.05)":"scale(1)",boxShadow:(h=r[l])!=null&&h.trim()?"0 0 0 3px rgba(99,102,241,0.15)":"none"}},l)})})}function jw({label:e,icon:t,onClick:n,disabled:r}){const[i,o]=m.useState(!1);return s.jsxs("button",{type:"button",onClick:n,disabled:r,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,width:"100%",padding:"12px 16px",minHeight:48,background:i?"rgba(0,183,79,.08)":"var(--bg-card)",border:i?"1px solid rgba(0,183,79,.35)":"1px solid var(--border)",borderRadius:14,cursor:r?"not-allowed":"pointer",color:"var(--text)",fontSize:14,fontWeight:700,transition:"all 0.2s ease",opacity:r?.5:1,boxShadow:i?"0 12px 28px rgba(0,0,0,.08)":"none"},children:[s.jsx("span",{style:{display:"flex",alignItems:"center"},children:t}),s.jsxs("span",{children:["Continue with ",e]})]})}function Tw({password:e}){if(!e)return null;const t=[{label:"8+ chars",ok:e.length>=8},{label:"Uppercase",ok:/[A-Z]/.test(e)},{label:"Lowercase",ok:/[a-z]/.test(e)},{label:"Number",ok:/\d/.test(e)}],n=t.filter(i=>i.ok).length,r=["var(--cv-danger)","var(--cv-danger)","#f59e0b","#10b981"];return s.jsxs("div",{style:{marginTop:6},children:[s.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:[0,1,2,3].map(i=>s.jsx("div",{style:{flex:1,height:3,borderRadius:99,background:i<n?r[n-1]:"var(--cv-border)",transition:"background 0.3s ease"}},i))}),s.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:t.map(i=>s.jsxs("span",{style:{fontSize:11,color:i.ok?"#10b981":"var(--cv-text-muted)",fontWeight:500},children:[i.ok?"✓":"○"," ",i.label]},i.label))})]})}const O={LOGIN:"login",REGISTER:"register",FORGOT:"forgot",VERIFY_OTP:"verify_otp",RESET_PASSWORD:"reset_password"};function Nw({onAuth:e,onBack:t,onNeedsVerification:n,initialMode:r="login"}){const[i,o]=m.useState(r==="login"?O.LOGIN:O.REGISTER),[a,l]=m.useState(!1),[c,u]=m.useState(""),[p,h]=m.useState(""),[d,x]=m.useState("forward"),[b,k]=m.useState(""),[A,g]=m.useState(""),[f,v]=m.useState(""),[w,E]=m.useState(""),[C,j]=m.useState(""),[R,V]=m.useState(""),[N,pe]=m.useState(!0),[he,we]=m.useState(!1),[gt,Sn]=m.useState(!1),[Ae,Ke]=m.useState(0),[T,D]=m.useState(null),[z,Y]=m.useState(!1),[ne,Ye]=m.useState(0),ce=!1,Et=gs();kw();const[be,ae]=m.useState({});m.useEffect(()=>{if(Ae<=0)return;const S=setTimeout(()=>Ke(G=>G-1),1e3);return()=>clearTimeout(S)},[Ae]);const Ct=S=>{x("forward"),u(""),h(""),ae({}),o(S)},Ur=()=>{x("back"),u(""),h(""),ae({}),i===O.REGISTER||i===O.FORGOT?o(O.LOGIN):i===O.VERIFY_OTP?o(O.FORGOT):i===O.RESET_PASSWORD?o(O.VERIFY_OTP):t==null||t()},Ce=()=>{D(null),Y(!1),Ye(S=>S+1)},Yi=async()=>{var G,It;const S={};if(Ca(b)||(S.email="Enter a valid email address"),A||(S.password="Password is required"),Object.keys(S).length){ae(S);return}if(ce&&!z){u("Please complete the security check");return}l(!0),u("");try{const Q=await lt("/auth/login",{method:"POST",body:JSON.stringify({email:b,password:A,rememberMe:N,...ce&&{turnstileToken:T}})});if(!(Q!=null&&Q.accessToken))throw new Error("Login failed. Please try again.");const En=N?localStorage:sessionStorage;En.setItem("cv_token",Q.accessToken),Q.refreshToken&&En.setItem("cv_refreshToken",Q.refreshToken),En.setItem("cv_user",((G=Q.user)==null?void 0:G.fullName)||b),e(Q.accessToken,Q.refreshToken,((It=Q.user)==null?void 0:It.fullName)||b,Q.user,N)}catch(Q){u(Tn(Q.message)),Ce()}l(!1)},Kt=async()=>{const S={};if((!w||w.trim().length<2)&&(S.fullName="Full name must be at least 2 characters"),Ca(b)||(S.email="Enter a valid email address"),zd(A)||(S.password="Password must be 8+ chars with uppercase, lowercase, and number"),A!==f&&(S.confirmPassword="Passwords do not match"),Object.keys(S).length){ae(S);return}if(ce&&!z){u("Please complete the security check");return}l(!0),u("");try{await lt("/auth/register",{method:"POST",body:JSON.stringify({email:b,password:A,fullName:w,...ce&&{turnstileToken:T}})}),h("Account created! Check your email to verify your account, then sign in."),Ct(O.LOGIN)}catch(G){u(Tn(G.message)),Ce()}l(!1)},zs=async()=>{if(!Ca(b)){ae({email:"Enter a valid email address"});return}if(ce&&!z){u("Please complete the security check");return}l(!0),u("");try{await lt("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:b,...ce&&{turnstileToken:T}})}),Ke(60),Ct(O.VERIFY_OTP),h("A 6-digit OTP has been sent to your email.")}catch(S){u(Tn(S.message)),Ce()}l(!1)},Yt=async()=>{if(!(Ae>0)){l(!0),u("");try{await lt("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:b})}),Ke(60),h("A new OTP has been sent.")}catch(S){u(Tn(S.message))}l(!1)}},Qi=async()=>{if(C.length!==6){u("Enter the 6-digit code from your email");return}l(!0),u("");try{const S=await lt("/auth/verify-otp",{method:"POST",body:JSON.stringify({email:b,otp:C})});V(S.resetToken),Ct(O.RESET_PASSWORD)}catch(S){u(Tn(S.message)),j("")}l(!1)},_n=async()=>{const S={};if(zd(A)||(S.password="Password must be 8+ chars with uppercase, lowercase, and number"),A!==f&&(S.confirmPassword="Passwords do not match"),Object.keys(S).length){ae(S);return}l(!0),u("");try{await lt("/auth/reset-password",{method:"POST",body:JSON.stringify({token:R,newPassword:A})}),h("Password reset successfully! Please sign in."),g(""),v(""),Ct(O.LOGIN)}catch(G){u(Tn(G.message))}l(!1)},rt=async S=>{var G,It;if(!Et){u("Social login is not available. Please use email and password.");return}l(!0),u("");try{const Q=await Sw(S);if(!(Q!=null&&Q.accessToken))throw new Error("Social login failed.");localStorage.setItem("cv_token",Q.accessToken),Q.refreshToken&&localStorage.setItem("cv_refreshToken",Q.refreshToken),localStorage.setItem("cv_user",((G=Q.user)==null?void 0:G.fullName)||b),e(Q.accessToken,Q.refreshToken,((It=Q.user)==null?void 0:It.fullName)||b,Q.user,!0)}catch(Q){u(Tn(Q.message))}l(!1)},Qn={[O.LOGIN]:{title:"Welcome back",sub:`Sign in to ${Be.name}`},[O.REGISTER]:{title:"Create account",sub:"Start your CloudVault journey"},[O.FORGOT]:{title:"Forgot password?",sub:"We'll send a code to your email"},[O.VERIFY_OTP]:{title:"Enter your code",sub:`Sent to ${b||"your email"}`},[O.RESET_PASSWORD]:{title:"New password",sub:"Choose a strong password"}},Qe=!a&&(!ce||z||i===O.VERIFY_OTP||i===O.RESET_PASSWORD),qn=()=>{i===O.LOGIN?Yi():i===O.REGISTER?Kt():i===O.FORGOT?zs():i===O.VERIFY_OTP?Qi():i===O.RESET_PASSWORD&&_n()},Jn={[O.LOGIN]:"Sign in",[O.REGISTER]:"Create account",[O.FORGOT]:"Send code",[O.VERIFY_OTP]:"Verify code",[O.RESET_PASSWORD]:"Reset password"}[i];return s.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #07111f 0%, #0b1322 46%, #050914 100%)",padding:"20px 16px",fontFamily:"var(--font)"},children:[s.jsx("style",{children:Fn}),s.jsx("style",{children:`
        :root {
          --cv-bg-card: #111a2b;
          --cv-surface-raised: #172338;
          --cv-border: rgba(148,163,184,.22);
          --cv-border-strong: rgba(0,183,79,.38);
          --cv-text: #f8fafc;
          --cv-text-muted: #94a3b8;
          --cv-accent: #00b74f;
          --cv-danger: #ef4444;
          --cv-radius-lg: 14px;
        }
        @keyframes cv-spin { to { transform: rotate(360deg); } }
        @keyframes cv-slide-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes cv-fade { from { opacity: 0; } to { opacity: 1; } }
        .cv-auth-card { animation: cv-slide-in 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        .cv-auth-step { animation: cv-fade 0.22s ease; }
      `}),s.jsxs("div",{className:"cv-auth-card",style:{width:"100%",maxWidth:440,background:"rgba(17, 26, 43, .96)",borderRadius:22,border:"1px solid rgba(148,163,184,.22)",boxShadow:"0 32px 80px rgba(0,0,0,0.42), 0 4px 16px rgba(0,0,0,0.18)",overflow:"hidden",position:"relative"},children:[s.jsx("div",{style:{height:4,background:"var(--gradient)",position:"absolute",top:0,left:0,right:0}}),s.jsxs("div",{style:{padding:"40px 36px 36px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:32},children:[s.jsx(Cw,{size:42}),s.jsx("div",{style:{fontSize:17,fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em"},children:Be.name})]}),i!==O.LOGIN&&s.jsx("button",{type:"button",onClick:Ur,style:{display:"flex",alignItems:"center",gap:6,marginBottom:24,background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,padding:"4px 0",transition:"color 0.15s"},onMouseEnter:S=>S.currentTarget.style.color="var(--text)",onMouseLeave:S=>S.currentTarget.style.color="var(--text-muted)",children:"← Back"}),s.jsxs("div",{className:"cv-auth-step",style:{marginBottom:28},children:[s.jsx("h1",{style:{fontSize:26,fontWeight:800,color:"var(--text)",letterSpacing:"-0.03em",margin:"0 0 4px"},children:Qn[i].title}),s.jsx("p",{style:{fontSize:14,color:"var(--text-muted)",margin:0,fontWeight:500},children:Qn[i].sub})]}),(i===O.LOGIN||i===O.REGISTER)&&s.jsx("div",{style:{display:"flex",gap:4,background:"var(--surface-raised)",borderRadius:14,padding:4,marginBottom:24,border:"1px solid var(--border)"},children:[O.LOGIN,O.REGISTER].map(S=>s.jsx("button",{type:"button",onClick:()=>Ct(S),style:{flex:1,padding:"9px 12px",borderRadius:10,border:"none",background:i===S?"var(--bg-card)":"transparent",color:i===S?"var(--text)":"var(--text-muted)",fontSize:14,fontWeight:i===S?700:500,cursor:"pointer",boxShadow:i===S?"0 2px 8px rgba(0,0,0,0.08)":"none",transition:"all 0.18s ease"},children:S===O.LOGIN?"Sign In":"Sign Up"},S))}),s.jsxs("div",{className:"cv-auth-step",style:{display:"flex",flexDirection:"column",gap:14},children:[i===O.REGISTER&&s.jsx(xo,{label:"Full Name",value:w,onChange:S=>{E(S.target.value),ae(G=>({...G,fullName:""}))},placeholder:"Jane Smith",autoFocus:!0,error:be.fullName}),[O.LOGIN,O.REGISTER,O.FORGOT].includes(i)&&s.jsx(xo,{label:"Email Address",type:"email",value:b,onChange:S=>{k(S.target.value),ae(G=>({...G,email:""}))},placeholder:"you@example.com",autoFocus:i===O.LOGIN||i===O.FORGOT,error:be.email}),[O.LOGIN,O.REGISTER,O.RESET_PASSWORD].includes(i)&&s.jsxs("div",{children:[s.jsxs("div",{style:{position:"relative"},children:[s.jsx(xo,{label:"Password",type:he?"text":"password",value:A,onChange:S=>{g(S.target.value),ae(G=>({...G,password:""}))},placeholder:i===O.LOGIN?"Your password":"Min 8 chars, A-Z, 0-9",autoFocus:i===O.RESET_PASSWORD,error:be.password}),s.jsx("button",{type:"button",onClick:()=>we(S=>!S),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:be.password?-10:0},children:he?"Hide":"Show"})]}),(i===O.REGISTER||i===O.RESET_PASSWORD)&&s.jsx(Tw,{password:A})]}),[O.REGISTER,O.RESET_PASSWORD].includes(i)&&s.jsxs("div",{style:{position:"relative"},children:[s.jsx(xo,{label:"Confirm Password",type:gt?"text":"password",value:f,onChange:S=>{v(S.target.value),ae(G=>({...G,confirmPassword:""}))},placeholder:"Repeat your password",error:be.confirmPassword}),s.jsx("button",{type:"button",onClick:()=>Sn(S=>!S),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:be.confirmPassword?-10:0},children:gt?"Hide":"Show"})]}),i===O.VERIFY_OTP&&s.jsxs("div",{children:[s.jsx(Iw,{value:C,onChange:j}),s.jsxs("div",{style:{textAlign:"center",marginTop:12},children:[s.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:["Didn't get the code?"," "]}),s.jsx("button",{type:"button",onClick:Yt,disabled:Ae>0||a,style:{background:"none",border:"none",cursor:Ae>0?"default":"pointer",color:Ae>0?"var(--text-muted)":"var(--accent-blue)",fontSize:13,fontWeight:600},children:Ae>0?`Resend in ${Ae}s`:"Resend"})]})]}),i===O.LOGIN&&s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},children:[s.jsx("input",{type:"checkbox",checked:N,onChange:S=>pe(S.target.checked),style:{width:16,height:16,accentColor:"var(--accent-blue)"}}),s.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:500},children:"Remember me"})]}),s.jsx("button",{type:"button",onClick:()=>Ct(O.FORGOT),style:{background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:13,fontWeight:600},children:"Forgot password?"})]})]}),c&&s.jsxs("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:12,color:"#ef4444",fontSize:13,fontWeight:500,lineHeight:1.5},children:[c,c.includes("verify your email")&&s.jsx("button",{type:"button",onClick:async()=>{try{await lt("/auth/resend-verification",{method:"POST",body:JSON.stringify({email:b})}),h("Verification email resent. Check your inbox."),u("")}catch{}},style:{display:"block",marginTop:8,background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:12,fontWeight:600},children:"Resend verification email →"})]}),p&&s.jsx("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:12,color:"#10b981",fontSize:13,fontWeight:500,lineHeight:1.5},children:p}),ce&&[O.LOGIN,O.REGISTER,O.FORGOT].includes(i)&&s.jsx("div",{style:{marginTop:16},children:s.jsx(_w,{onVerified:S=>{D(S),Y(!0)},onError:()=>{u("Security check failed. Please refresh."),Y(!1)},onExpire:()=>{D(null),Y(!1)}},ne)}),s.jsx("button",{type:"button",onClick:qn,disabled:!Qe,style:{width:"100%",marginTop:20,padding:"14px 20px",background:Qe?"var(--gradient)":"var(--surface-raised)",color:Qe?"#fff":"var(--text-muted)",border:"none",borderRadius:14,fontSize:15,fontWeight:700,cursor:Qe?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"all 0.2s ease",boxShadow:Qe?"0 16px 34px rgba(0,183,79,0.28)":"none",transform:"translateY(0)"},onMouseEnter:S=>{Qe&&(S.currentTarget.style.transform="translateY(-1px)")},onMouseLeave:S=>{S.currentTarget.style.transform="translateY(0)"},children:a?s.jsx(Ew,{}):Jn}),[O.LOGIN,O.REGISTER].includes(i)&&s.jsxs("div",{style:{marginTop:20},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:"or"}),s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[{id:"google",label:"Google",icon:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),s.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),s.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),s.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})},{id:"github",label:"GitHub",icon:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})})},{id:"microsoft",label:"Microsoft",icon:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M10 0H0v10h10V0z",fill:"#F25022"}),s.jsx("path",{d:"M21 0H11v10h10V0z",fill:"#7FBA00"}),s.jsx("path",{d:"M10 11H0v10h10V11z",fill:"#00A4EF"}),s.jsx("path",{d:"M21 11H11v10h10V11z",fill:"#FFB900"})]})}].map(S=>s.jsx(jw,{label:S.label,icon:S.icon,disabled:a||!Et,onClick:()=>rt(S.id)},S.id))})]}),i===O.LOGIN&&s.jsx("div",{style:{textAlign:"center",marginTop:20},children:s.jsx("button",{type:"button",onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:500},children:"← Back to home"})})]})]})]})}function Pw({size:e=22}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Rw({file:e,token:t,onClose:n}){const[r,i]=m.useState(null),[o,a]=m.useState(""),[l,c]=m.useState(!0),[u,p]=m.useState(""),[h,d]=m.useState(1),[x,b]=m.useState(0),[k,A]=m.useState(!1),g=Ty(e.mimeType);m.useEffect(()=>{let w=null,E=!1;return(async()=>{c(!0),p("");try{const C=await _c(e.id,t,{disposition:"preview"});if(E)return;if(g==="text"){const j=await C.text();a(j)}else w=URL.createObjectURL(C),i(w)}catch(C){E||p(C.message||"Preview failed")}finally{E||c(!1)}})(),()=>{E=!0,w&&URL.revokeObjectURL(w)}},[e.id,t,g]);const f=(w,E,C=!1)=>s.jsx("button",{type:"button",onClick:E,disabled:C,style:{padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",cursor:C?"not-allowed":"pointer",fontFamily:"var(--font)",fontSize:12,fontWeight:600},children:w}),v=()=>l?s.jsx("div",{style:{padding:48,textAlign:"center"},children:s.jsx(Pw,{size:32})}):u?s.jsx("p",{style:{color:"var(--danger)",padding:24,textAlign:"center"},children:u}):g==="image"&&r?s.jsx("img",{src:r,alt:e.name,style:{maxWidth:k?"96vw":"80vw",maxHeight:k?"90vh":"70vh",borderRadius:12,transform:`scale(${h}) rotate(${x}deg)`,transition:"transform .2s ease"}}):g==="pdf"&&r?s.jsx("iframe",{src:r,title:e.name,style:{width:"75vw",height:"75vh",border:"none",borderRadius:12}}):g==="video"&&r?s.jsx("video",{src:r,controls:!0,style:{maxWidth:"80vw",maxHeight:"75vh",borderRadius:12}}):g==="audio"&&r?s.jsx("audio",{src:r,controls:!0,style:{width:"min(480px, 80vw)"}}):g==="text"?s.jsx("pre",{style:{maxWidth:"80vw",maxHeight:"70vh",overflow:"auto",padding:16,background:"var(--bg-card)",borderRadius:12,color:"var(--text)",fontSize:13,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:o}):s.jsx("p",{style:{padding:24,color:"var(--text-muted)"},children:"Preview not available for this file type."});return s.jsx("div",{onClick:n,style:{position:"fixed",inset:0,zIndex:1e3,background:k?"#000":"rgba(0,0,0,.88)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)",animation:"fadeIn .2s ease"},children:s.jsxs("div",{onClick:w=>w.stopPropagation(),style:{background:k?"transparent":"var(--bg-primary)",borderRadius:k?0:20,border:k?"none":"1.5px solid var(--border)",maxWidth:k?"100vw":"95vw",maxHeight:k?"100vh":"95vh",width:k?"100%":void 0,height:k?"100%":void 0,overflow:"auto",padding:k?16:24,boxShadow:k?"none":"var(--shadow)",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:12},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:700,fontSize:16,flex:1,overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),g==="image"&&s.jsxs("div",{style:{display:"flex",gap:6},children:[f("−",()=>d(w=>Math.max(.25,w-.25))),f("+",()=>d(w=>Math.min(4,w+.25))),f("↻",()=>b(w=>(w+90)%360)),f(k?"⊡":"⛶",()=>A(w=>!w))]}),s.jsx("button",{type:"button",onClick:n,style:{background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:8,color:"var(--text-secondary)",cursor:"pointer",width:32,height:32},children:"✕"})]}),s.jsx("div",{style:{display:"flex",justifyContent:"center"},children:v()})]})})}function Ow({fileId:e,token:t,alt:n,mimeType:r}){const[i,o]=m.useState(null),[a,l]=m.useState(!1);return m.useEffect(()=>{if(!e||!t||!(r!=null&&r.startsWith("image/")))return;let c=null,u=!1;return _c(e,t,{disposition:"preview"}).then(p=>{u||(c=URL.createObjectURL(p),o(c))}).catch(()=>{u||l(!0)}),()=>{u=!0,c&&URL.revokeObjectURL(c)}},[e,t,r]),!(r!=null&&r.startsWith("image/"))||a?s.jsx("div",{style:{fontSize:44,display:"flex"},children:Rs(r)}):i?s.jsx("img",{src:i,alt:n,style:{width:"100%",height:"100%",objectFit:"cover"},onError:()=>l(!0)}):s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite"}})}function Aw({trashedFiles:e,trashedFolders:t,loading:n,onRestoreFile:r,onRestoreFolder:i,onPermanentDelete:o,onEmptyTrash:a,onBack:l}){return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:l,style:Lw,children:"← Back to My Cloud"}),s.jsx("h2",{style:{color:"var(--text)",fontWeight:800,fontSize:22,marginTop:8},children:"Trash"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"Items in trash still count toward storage until permanently deleted."})]}),(e.length>0||t.length>0)&&s.jsx("button",{type:"button",onClick:a,style:Dw,children:"Empty trash"})]}),n?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading trash…"}):e.length===0&&t.length===0?s.jsxs("div",{style:{textAlign:"center",padding:64,color:"var(--text-muted)",border:"1px dashed var(--border)",borderRadius:16},children:[s.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🗑️"}),s.jsx("div",{style:{fontWeight:700},children:"Trash is empty"})]}):s.jsxs(s.Fragment,{children:[t.length>0&&s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FOLDERS"}),t.map(c=>s.jsx(Md,{icon:"📁",name:c.name,meta:"Folder",onRestore:()=>i(c.id)},c.id))]}),e.length>0&&s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FILES"}),e.map(c=>s.jsx(Md,{icon:Rs(c.mimeType),name:c.name,meta:`${Te(c.size)} · ${Wi(c.trashedAt||c.deletedAt)}`,onRestore:()=>r(c.id),onDelete:()=>o(c)},c.id))]})]})]})}function Md({icon:e,name:t,meta:n,onRestore:r,onDelete:i}){return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,marginBottom:8},children:[s.jsx("span",{style:{fontSize:24},children:e}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:n})]}),s.jsx("button",{type:"button",onClick:r,style:Fd,children:"Restore"}),i&&s.jsx("button",{type:"button",onClick:i,style:{...Fd,color:"var(--danger)"},children:"Delete forever"})]})}const Lw={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"},Dw={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontFamily:"var(--font)"},Fd={padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--font)"};function zw({file:e,mode:t,folders:n,currentFolderId:r,onConfirm:i,onCancel:o}){const[a,l]=m.useState(r||""),[c,u]=m.useState(e.name),p=Xh(n);return s.jsx("div",{onClick:o,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:h=>h.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(420px, 92vw)",animation:"scaleIn .2s ease"},children:[s.jsxs("h3",{style:{color:"var(--text)",fontWeight:700,fontSize:18,marginBottom:8},children:[t==="move"?"Move":"Copy"," file"]}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:20},children:e.name}),s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"Destination folder"}),s.jsxs("select",{value:a,onChange:h=>l(h.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"},children:[s.jsx("option",{value:"",children:"My Cloud (root)"}),p.map(h=>s.jsxs("option",{value:h.id,disabled:h.id===e.folderId,children:["—".repeat(h.depth)," ",h.name]},h.id))]}),t==="copy"&&s.jsxs(s.Fragment,{children:[s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"New name (optional)"}),s.jsx("input",{value:c,onChange:h=>u(h.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"}})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:o,style:Zh,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>i({targetFolderId:a||null,newName:t==="copy"?c:void 0}),style:Mw,children:t==="move"?"Move":"Copy"})]})]})})}function Xh(e,t=0){var r;const n=[];for(const i of e)n.push({...i,depth:t}),(r=i.children)!=null&&r.length&&n.push(...Xh(i.children,t+1));return n}const Zh={padding:"10px 20px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},Mw={...Zh,border:"none",background:"var(--accent)",color:"#fff"};function Fw({file:e,allTags:t,onSave:n,onCancel:r}){const[i,o]=m.useState(e.tags||[]),[a,l]=m.useState(""),c=u=>{const p=u.trim().toLowerCase();!p||i.includes(p)||i.length>=20||(o([...i,p]),l(""))};return s.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:u=>u.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(440px, 92vw)"},children:[s.jsx("h3",{style:{color:"var(--text)",fontWeight:700,marginBottom:4},children:"Edit tags"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:16},children:e.name}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12},children:i.map(u=>s.jsxs("span",{style:{background:"rgba(240,22,58,.15)",color:"var(--accent)",padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[u,s.jsx("button",{type:"button",onClick:()=>o(i.filter(p=>p!==u)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:"×"})]},u))}),s.jsx("input",{value:a,onChange:u=>l(u.target.value),onKeyDown:u=>{u.key==="Enter"&&(u.preventDefault(),c(a))},placeholder:"Add tag and press Enter",style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",marginBottom:12}}),t.length>0&&s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6},children:"Suggestions"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:t.filter(u=>!i.includes(u)).slice(0,12).map(u=>s.jsxs("button",{type:"button",onClick:()=>c(u),style:{padding:"4px 10px",borderRadius:20,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",fontSize:12,cursor:"pointer"},children:["+ ",u]},u))})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:r,style:eg,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>n(i),style:Uw,children:"Save tags"})]})]})})}const eg={padding:"10px 18px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},Uw={...eg,border:"none",background:"var(--accent)",color:"#fff"};function Bw({file:e,onShare:t,onCancel:n}){const[r,i]=m.useState("link"),[o,a]=m.useState("view"),[l,c]=m.useState("private"),[u,p]=m.useState(""),[h,d]=m.useState(""),[x,b]=m.useState(""),[k,A]=m.useState(""),[g,f]=m.useState(!1),[v,w]=m.useState(""),[E,C]=m.useState(!1),j=m.useMemo(()=>{const N=[o==="view"?"View only":o==="download"?"Download allowed":"Can edit"];return h&&N.push("Password protected"),x&&N.push("Expires automatically"),k&&N.push(`${k} view limit`),N.join(" · ")},[o,h,x,k]),R=async()=>{var N;f(!0);try{const pe={shareType:r,permission:o,visibility:l,...h&&{password:h},...x&&{expiresAt:new Date(x).toISOString()},...k&&{maxViews:Number(k)},...r==="email"&&{sharedWithEmail:u,email:u}},he=await t(pe),we=(he==null?void 0:he.shareUrl)||((N=he==null?void 0:he.data)==null?void 0:N.shareUrl);we&&w(we)}finally{f(!1)}},V=async()=>{var N;v&&(await((N=navigator.clipboard)==null?void 0:N.writeText(v)),C(!0),setTimeout(()=>C(!1),1500))};return s.jsx("div",{className:"share-modal-backdrop",onClick:n,role:"dialog","aria-modal":"true","aria-labelledby":"share-modal-title",children:s.jsxs("div",{className:"share-modal-panel",onClick:N=>N.stopPropagation(),children:[s.jsxs("div",{className:"share-modal-hero",children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:11,color:"var(--accent-blue)",fontWeight:900,textTransform:"uppercase",letterSpacing:1},children:"Secure sharing"}),s.jsx("h3",{id:"share-modal-title",style:{fontWeight:900,fontSize:26,margin:"8px 0 5px",color:"var(--text)"},children:"Share file"}),s.jsx("p",{style:{color:"var(--text-secondary)",fontSize:14,overflowWrap:"anywhere"},children:e.name})]}),s.jsx("button",{type:"button",title:"Close","aria-label":"Close share dialog",onClick:n,className:"icon-btn",children:"×"})]}),s.jsxs("div",{className:"share-modal-body",children:[s.jsxs("div",{className:"share-modal-grid",children:[s.jsx(Ud,{label:"Method",value:r,onChange:i,options:[["link","Link"],["email","Email"]]}),s.jsx(Ud,{label:"Access",value:l,onChange:c,options:[["private","Private"],["public","Public"],["protected","Protected"]]})]}),r==="email"&&s.jsx(tr,{label:"Recipient email",children:s.jsx("input",{type:"email",value:u,onChange:N=>p(N.target.value),placeholder:"teammate@company.com",className:"input-field",style:{minHeight:48}})}),s.jsx(tr,{label:"Permission",children:s.jsxs("select",{value:o,onChange:N=>a(N.target.value),className:"select-field",style:{width:"100%",minHeight:48,padding:"12px 14px"},children:[s.jsx("option",{value:"view",children:"View only"}),s.jsx("option",{value:"download",children:"View and download"}),s.jsx("option",{value:"edit",children:"Edit metadata"})]})}),s.jsxs("div",{className:"share-modal-grid",children:[s.jsx(tr,{label:"Password (optional)",children:s.jsx("input",{type:"password",value:h,onChange:N=>d(N.target.value),placeholder:"Leave blank for no password",className:"input-field",style:{minHeight:48},autoComplete:"new-password"})}),s.jsx(tr,{label:"Max views",children:s.jsx("input",{type:"number",min:"1",value:k,onChange:N=>A(N.target.value),placeholder:"Unlimited",className:"input-field",style:{minHeight:48}})})]}),s.jsx(tr,{label:"Expiration",children:s.jsx("input",{type:"datetime-local",value:x,onChange:N=>b(N.target.value),className:"input-field",style:{minHeight:48}})}),s.jsxs("div",{className:"share-summary-box",children:[s.jsx("strong",{style:{color:"var(--text)"},children:"Share policy"}),s.jsx("span",{children:j})]}),v&&s.jsxs("div",{className:"share-result-box",children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6,fontWeight:800,textTransform:"uppercase"},children:"Share link"}),s.jsx("div",{style:{fontSize:13,wordBreak:"break-all",color:"var(--accent-blue)"},children:v}),s.jsx("button",{type:"button",onClick:V,className:"btn-primary",style:{marginTop:12},children:E?"Copied!":"Copy link"})]}),s.jsxs("div",{className:"share-modal-footer",children:[s.jsx("button",{type:"button",onClick:n,className:"btn-secondary",children:"Close"}),s.jsx("button",{type:"button",disabled:g||r==="email"&&!u,onClick:R,className:"btn-primary",children:g?"Creating…":v?"Create another":r==="email"?"Send invitation":"Create secure link"})]})]})]})})}function Ud({label:e,value:t,onChange:n,options:r}){return s.jsx(tr,{label:e,children:s.jsx("div",{className:"share-segmented",role:"group","aria-label":e,children:r.map(([i,o])=>s.jsx("button",{type:"button",onClick:()=>n(i),className:`share-segment-btn${t===i?" active":""}`,"aria-pressed":t===i,children:o},i))})})}function tr({label:e,children:t}){return s.jsxs("div",{style:{marginBottom:14},children:[s.jsx("label",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)",display:"block",marginBottom:6},children:e}),t]})}function Ww({stats:e,usage:t,onBack:n}){const r=(t==null?void 0:t.breakdown)||{},i=Object.values(r).reduce((l,c)=>l+c,0)||1,o=e.storageQuota>0?Math.min(100,Math.round(e.storageUsed/e.storageQuota*100)):0,a=[{key:"images",label:"Images",color:"#22c55e"},{key:"videos",label:"Videos",color:"#2563eb"},{key:"documents",label:"Documents",color:"#f59e0b"},{key:"audio",label:"Audio",color:"#a78bfa"},{key:"other",label:"Other",color:"#94a3b8"}];return s.jsxs("div",{style:{animation:"fadeIn .3s ease"},children:[s.jsx("button",{type:"button",onClick:n,className:"page-back-btn",children:"← Back to My Drive"}),s.jsx("h2",{style:{fontWeight:900,fontSize:26,margin:"12px 0 8px",color:"var(--text)"},children:"Storage dashboard"}),s.jsxs("p",{style:{color:"var(--text-muted)",fontSize:14,marginBottom:28},children:[o,"% of your storage is in use"]}),s.jsxs("div",{className:"dashboard-stat-grid",children:[s.jsx(wo,{label:"Total files",value:e.totalFiles}),s.jsx(wo,{label:"Total folders",value:e.totalFolders}),s.jsx(wo,{label:"Storage used",value:Te(e.storageUsed)}),s.jsx(wo,{label:"Storage remaining",value:Te(Math.max(0,e.storageQuota-e.storageUsed))})]}),s.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)",marginBottom:24},children:[s.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"Storage breakdown"}),s.jsx("div",{style:{height:14,borderRadius:99,overflow:"hidden",display:"flex",background:"var(--border)"},children:a.map(l=>{const c=(r[l.key]||0)/i*100;return c<.5?null:s.jsx("div",{title:`${l.label}: ${Te(r[l.key]||0)}`,style:{width:`${c}%`,background:l.color,transition:"width .4s ease"}},l.key)})}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,marginTop:16},children:a.map(l=>s.jsxs("span",{style:{fontSize:13,color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{width:10,height:10,borderRadius:99,background:l.color,flexShrink:0}}),l.label,": ",Te(r[l.key]||0)]},l.key))})]}),s.jsxs("section",{className:"glass-card",style:{padding:24,borderRadius:"var(--radius-lg)"},children:[s.jsx("h3",{style:{fontSize:14,fontWeight:800,marginBottom:16,color:"var(--text)"},children:"File type distribution"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:a.map(l=>{const c=r[l.key]||0,u=Math.round(c/i*100);return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[s.jsx("span",{style:{color:"var(--text-secondary)",fontWeight:600},children:l.label}),s.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:700},children:[u,"%"]})]}),s.jsx("div",{style:{height:8,background:"var(--border)",borderRadius:99,overflow:"hidden"},children:s.jsx("div",{style:{width:`${u}%`,height:"100%",background:l.color,borderRadius:99,transition:"width .4s ease"}})})]},l.key)})})]})]})}function wo({label:e,value:t}){return s.jsxs("div",{className:"dashboard-stat-card",children:[s.jsx("div",{className:"label",children:e}),s.jsx("div",{className:"value",children:t})]})}function $w({users:e,systemHealth:t,loading:n,onBack:r}){return s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:r,style:Vw,children:"← Back to My Cloud"}),s.jsx("h2",{style:{fontWeight:800,fontSize:22,margin:"12px 0 8px"},children:"Admin panel"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:24},children:"User management and system overview"}),t&&s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:28},children:[s.jsx(Xr,{label:"Total users",value:t.totalUsers??"—"}),s.jsx(Xr,{label:"Active users",value:t.activeUsers??"—"}),s.jsx(Xr,{label:"Total files",value:t.totalFiles??"—"}),s.jsx(Xr,{label:"Storage used",value:t.totalStorageUsed!=null?Te(t.totalStorageUsed):"—"}),s.jsx(Xr,{label:"Uploads today",value:t.uploadsToday??"—"})]}),s.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"Users"}),n?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading…"}):s.jsxs("div",{style:{overflowX:"auto",border:"1px solid var(--border)",borderRadius:12},children:[s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"var(--bg-card)",textAlign:"left"},children:[s.jsx("th",{style:Zr,children:"Email"}),s.jsx("th",{style:Zr,children:"Name"}),s.jsx("th",{style:Zr,children:"Role"}),s.jsx("th",{style:Zr,children:"Storage"}),s.jsx("th",{style:Zr,children:"Status"})]})}),s.jsx("tbody",{children:e.map(i=>s.jsxs("tr",{style:{borderTop:"1px solid var(--border)"},children:[s.jsx("td",{style:ei,children:i.email}),s.jsx("td",{style:ei,children:i.fullName||"—"}),s.jsx("td",{style:ei,children:i.role}),s.jsxs("td",{style:ei,children:[Te(i.storageUsed)," / ",Te(i.storageQuota)]}),s.jsx("td",{style:ei,children:i.isActive?"Active":"Inactive"})]},i.id))})]}),e.length===0&&s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)"},children:"No users found"})]})]})}function Xr({label:e,value:t}){return s.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:14},children:[s.jsx("div",{style:{fontWeight:800,fontSize:20},children:t}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:e})]})}const Zr={padding:"12px 14px",color:"var(--text-muted)",fontWeight:600},ei={padding:"12px 14px",color:"var(--text-secondary)"},Vw={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"};function tg({file:e,onMove:t,onCopy:n,onTags:r,onDelete:i}){const[o,a]=m.useState(!1),l=m.useRef(null);m.useEffect(()=>{const u=p=>{l.current&&!l.current.contains(p.target)&&a(!1)};return o&&document.addEventListener("click",u),()=>document.removeEventListener("click",u)},[o]);const c=[{cue:"#",label:"Tags",onClick:()=>r(e)},{cue:"Move",label:"Move",onClick:()=>t(e)},{cue:"Copy",label:"Copy file",onClick:()=>n(e)},{cue:"Del",label:"Delete",onClick:()=>i(e),danger:!0}];return s.jsxs("div",{ref:l,style:{position:"relative"},children:[s.jsx("button",{type:"button",title:"More actions",onClick:u=>{u.stopPropagation(),a(p=>!p)},style:Hw,children:"..."}),o&&s.jsx("div",{style:Gw,children:c.map(u=>s.jsxs("button",{type:"button",onClick:p=>{p.stopPropagation(),a(!1),u.onClick()},style:{...Kw,color:u.danger?"var(--danger)":"var(--text)"},children:[s.jsx("span",{style:{...Yw,color:u.danger?"var(--danger)":"var(--accent-blue)"},children:u.cue}),s.jsx("span",{children:u.label})]},u.label))})]})}const Hw={width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"rgba(255,255,255,.08)",color:"var(--text)",cursor:"pointer",fontSize:18,fontWeight:900,transition:"var(--transition)"},Gw={position:"absolute",right:0,top:"100%",marginTop:6,minWidth:190,background:"var(--surface-raised)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"var(--shadow)",zIndex:50,overflow:"hidden",padding:6,animation:"floatIn .16s ease"},Kw={display:"flex",alignItems:"center",gap:10,width:"100%",padding:"11px 12px",border:"none",borderRadius:10,background:"transparent",textAlign:"left",cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"var(--font)"},Yw={width:34,opacity:.78,fontSize:11,fontWeight:900,textTransform:"uppercase"};function er({width:e="100%",height:t=16,radius:n=8,style:r={}}){return s.jsx("div",{style:{width:e,height:t,borderRadius:n,background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite",...r}})}function Qw({count:e=6,grid:t=!1}){return t?s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:12},children:Array.from({length:e}).map((n,r)=>s.jsxs("div",{style:{borderRadius:16,overflow:"hidden",border:"1px solid var(--border)"},children:[s.jsx(er,{height:140,radius:0}),s.jsxs("div",{style:{padding:12},children:[s.jsx(er,{height:12,width:"80%"}),s.jsx(er,{height:10,width:"50%",style:{marginTop:8}})]})]},r))}):s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Array.from({length:e}).map((n,r)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:"var(--bg-card)",borderRadius:12,border:"1px solid var(--border)"},children:[s.jsx(er,{width:36,height:36,radius:8}),s.jsxs("div",{style:{flex:1},children:[s.jsx(er,{height:14,width:"40%"}),s.jsx(er,{height:10,width:"25%",style:{marginTop:8}})]})]},r))})}function qw(e,t=400){const[n,r]=m.useState(e);return m.useEffect(()=>{const i=setTimeout(()=>r(e),t);return()=>clearTimeout(i)},[e,t]),n}async function Jw(e,{createFolder:t,uploadFile:n,baseFolderId:r,onProgress:i}){const o=Array.from(e),a=new Map([["",r??null]]),l=u=>{const p=u.webkitRelativePath||u.name,h=p.split("/").filter(Boolean),d=h.pop();return{segments:h,fileName:d,rel:p}};o.sort((u,p)=>l(u).rel.localeCompare(l(p).rel));let c=0;for(const u of o){const{segments:p}=l(u);let h=r??null,d="";for(const x of p){if(d=d?`${d}/${x}`:x,!a.has(d)){const b=await t(x,h);a.set(d,b.id)}h=a.get(d)}await n(u,h),c+=1,i==null||i(Math.round(c/o.length*100))}}function Xw(e){const t=new Map(e.map(r=>[r.id,{...r,children:[]}])),n=[];for(const r of e){const i=t.get(r.id);r.parentId&&t.has(r.parentId)?t.get(r.parentId).children.push(i):n.push(i)}return n}const ng=m.createContext(null);function Zw({token:e,children:t}){const[n,r]=m.useState(null),[i,o]=m.useState([]),[a,l]=m.useState(0),[c,u]=m.useState(!0),p=m.useCallback(async()=>{if(e)try{const b=await lt("/account",{},e);r(b)}catch{const b=await lt("/users/me",{},e).catch(()=>null);b&&r(b)}},[e]),h=m.useCallback(async()=>{},[]),d=m.useCallback(async()=>{u(!0),await Promise.all([p(),h()]),u(!1)},[p,h]);m.useEffect(()=>{d()},[e]);const x=async()=>{};return s.jsx(ng.Provider,{value:{account:n,loading:c,notifications:i,unreadCount:a,refreshAccount:p,refreshNotifications:h,refreshAll:d,markAllRead:x},children:t})}function rg(){const e=m.useContext(ng);if(!e)throw new Error("useAccount must be used within AccountProvider");return e}function eb({account:e,onNavigate:t,onSignOut:n}){var u;const[r,i]=m.useState(!1),o=m.useRef(null);m.useEffect(()=>{const p=h=>{o.current&&!o.current.contains(h.target)&&i(!1)};return r&&document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[r]);const a=[{id:"profile",label:"My Profile"},{id:"settings",label:"Settings"},{id:"security",label:"Security"},{id:"dashboard",label:"Storage"},{id:"billing",label:"Billing"},{id:"billing",label:"Upgrade Plan",accent:!0},{id:"help",label:"Help Center"}],l=e==null?void 0:e.avatarUrl,c=((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"?").slice(0,1).toUpperCase();return s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(p=>!p),style:{display:"flex",alignItems:"center",gap:8,padding:"4px 10px 4px 4px",borderRadius:999,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontFamily:"var(--font)"},children:[s.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:l?`url(${l}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:14},children:!l&&c}),s.jsx("span",{style:{color:"var(--text-secondary)",fontSize:13,fontWeight:600},children:"▾"})]}),r&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",minWidth:200,background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300,overflow:"hidden",animation:"fadeIn .15s ease"},children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontWeight:700,fontSize:14,color:"var(--text)"},children:(e==null?void 0:e.fullName)||"Account"}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:e==null?void 0:e.email}),s.jsxs("div",{style:{fontSize:11,color:"var(--accent)",marginTop:6,fontWeight:600,textTransform:"capitalize"},children:[((u=e==null?void 0:e.planDetails)==null?void 0:u.name)||(e==null?void 0:e.plan)," plan"]})]}),a.map((p,h)=>s.jsx("button",{type:"button",onClick:()=>{i(!1),t(p.id==="dashboard"?"dashboard":p.id)},style:{display:"block",width:"100%",padding:"11px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,fontWeight:p.accent?700:500,color:p.accent?"var(--accent)":"var(--text-secondary)"},children:p.label},`${p.id}-${h}`)),s.jsx("div",{style:{borderTop:"1px solid var(--border)"},children:s.jsx("button",{type:"button",onClick:()=>{i(!1),n()},style:{display:"block",width:"100%",padding:"12px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,color:"var(--danger)",fontWeight:600},children:"Sign Out"})})]})]})}function tb({account:e,onUpgrade:t}){if(!(e!=null&&e.onTrial))return null;const n=e.trialDaysLeft??0;return s.jsxs("div",{style:{background:"linear-gradient(90deg, rgba(240,22,58,.12), rgba(64,144,255,.1))",borderBottom:"1px solid var(--border)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--text)"},children:"Pro trial"})," — ",n," day",n!==1?"s":""," left · ",Te(e.storageUsed)," used"]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Upgrade"})]})}function nb({account:e,onOpenSettings:t}){return!(e!=null&&e.emailVerificationRequired)||(e==null?void 0:e.isVerified)!==!1?null:s.jsxs("div",{style:{background:"rgba(240, 22, 58, 0.12)",borderBottom:"1px solid rgba(240, 22, 58, 0.35)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--danger)"},children:"Email not verified"})," — ","Uploads are disabled until you verify. Check your inbox or resend the link."]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Verify email"})]})}function Bd({email:e,token:t,onVerified:n,onBack:r}){const[i,o]=m.useState(e||""),[a,l]=m.useState(!!t),[c,u]=m.useState(""),[p,h]=m.useState(""),[d,x]=m.useState(!1);m.useEffect(()=>{t&&b(t)},[t]);const b=async A=>{l(!0),u("");try{const g=await fetch(`${St}/auth/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:A})}),f=await g.json();if(!g.ok||!f.success)throw new Error(f.message||"Verification failed");x(!0),setTimeout(()=>n==null?void 0:n(),1200)}catch{u("This verification link is invalid or expired. Request a fresh email and try again.")}finally{l(!1)}},k=async()=>{if(!i){u("Enter your email address first.");return}l(!0),u(""),h("");try{const A=await fetch(`${St}/auth/resend-verification`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}),g=await A.json();if(!A.ok||!g.success)throw new Error(g.message||"Failed to send verification email");h("A fresh verification email is on its way. Open the link in your inbox to continue.")}catch{u("Something went wrong. Please try again.")}finally{l(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:Fn}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:d?"Email verified":t?"Verifying your email":"Check your inbox"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:d?"Your account is ready. You can now log in with your email and password.":t?"Hold tight while we confirm your CloudVault account.":"Open the verification link we sent after registration. You only need to do this once."}),!t&&!d&&s.jsxs(s.Fragment,{children:[s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:"Email address"}),s.jsx("input",{className:"input-field",type:"email",value:i,onChange:A=>o(A.target.value),placeholder:"you@company.com",style:{marginTop:6}})]}),s.jsx("button",{type:"button",onClick:k,disabled:a,className:"btn-primary",style:{width:"100%"},children:a?"Sending...":"Resend verification email"})]}),a&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,marginTop:14},children:"Working on it..."}),c&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginTop:14},children:c}),p&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,lineHeight:1.5,marginTop:14},children:p}),s.jsx("button",{type:"button",onClick:r,className:"btn-secondary",style:{width:"100%",marginTop:14},children:"Back to login"})]})]})}function rb({notifications:e,unreadCount:t,onMarkAllRead:n}){const[r,i]=m.useState(!1),o=m.useRef(null);return m.useEffect(()=>{const a=l=>{o.current&&!o.current.contains(l.target)&&i(!1)};return r&&document.addEventListener("click",a),()=>document.removeEventListener("click",a)},[r]),s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(a=>!a),style:{width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontSize:18,position:"relative"},title:"Notifications",children:["🔔",t>0&&s.jsx("span",{style:{position:"absolute",top:4,right:4,minWidth:16,height:16,borderRadius:99,background:"var(--accent)",color:"#fff",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"},children:t>9?"9+":t})]}),r&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",width:320,maxHeight:400,overflow:"auto",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300},children:[s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontWeight:700,fontSize:14},children:"Notifications"}),t>0&&s.jsx("button",{type:"button",onClick:n,style:ib,children:"Mark all read"})]}),e.length===0?s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)",fontSize:13},children:"Nothing new"}):e.map(a=>s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",background:a.read?"transparent":"rgba(240,22,58,.06)"},children:[s.jsx("div",{style:{fontWeight:600,fontSize:13},children:a.title}),a.body&&s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:a.body}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:6},children:Wi(a.createdAt)})]},a.id))]})]})}const ib={background:"none",border:"none",color:"var(--accent-blue)",fontSize:12,cursor:"pointer",fontWeight:600};function Wd({token:e,onBack:t,onSuccess:n}){const[r,i]=m.useState(""),[o,a]=m.useState(""),[l,c]=m.useState(!1),[u,p]=m.useState(""),[h,d]=m.useState(!1),x=async b=>{if(b.preventDefault(),p(""),!e)return p("This reset link is invalid. Please request a new one.");if(r!==o)return p("Passwords do not match.");if(r.length<8)return p("Password must be at least 8 characters.");if(!/[a-z]/.test(r)||!/[A-Z]/.test(r)||!/\d/.test(r))return p("Use at least one uppercase letter, one lowercase letter, and one number.");c(!0);try{const k=await fetch(`${St}/auth/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,newPassword:r})}),A=await k.json();if(!k.ok||!A.success)throw new Error(A.message||"Failed to reset password");d(!0),setTimeout(()=>{var g;return(g=n||t)==null?void 0:g()},1400)}catch{p("Something went wrong. Please try again.")}finally{c(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:Fn}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:h?"Password updated":"Set a new password"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:h?"You can now log in with your new password.":"Choose a strong password to secure your CloudVault account."}),!h&&s.jsxs("form",{onSubmit:x,children:[s.jsx($d,{label:"New password",value:r,onChange:i}),s.jsx($d,{label:"Confirm password",value:o,onChange:a}),u&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginBottom:14},children:u}),s.jsx("button",{type:"submit",disabled:l,className:"btn-primary",style:{width:"100%"},children:l?"Updating...":"Update password"})]}),h&&s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{width:"100%"},children:"Continue to login"}),s.jsx("button",{type:"button",onClick:t,className:"btn-secondary",style:{width:"100%",marginTop:12},children:"Back to login"})]})]})}function $d({label:e,value:t,onChange:n}){return s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:e}),s.jsx("input",{className:"input-field",type:"password",value:t,onChange:r=>n(r.target.value),required:!0,minLength:8,style:{marginTop:6}})]})}const Vd={drive:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V8H4V6.5Z",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M4 8h16v9.5A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5V8Z",stroke:"currentColor",strokeWidth:"1.8"})]}),recent:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"12",cy:"12",r:"8.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),starred:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M12 4.5l2.2 4.5 4.9.7-3.5 3.4.8 4.9L12 15.8l-4.4 2.2.8-4.9-3.5-3.4 4.9-.7L12 4.5Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"})}),shared:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"18",cy:"5",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("circle",{cx:"6",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("circle",{cx:"18",cy:"19",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M8.3 10.8l7.4-4.1M8.3 13.2l7.4 4.1",stroke:"currentColor",strokeWidth:"1.8"})]}),usage:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M5 19V10M10 19V5M15 19v-7M20 19V8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})}),trash:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M9 4h6M5 7h14l-1.2 12.5a1.5 1.5 0 0 1-1.5 1.5H7.7a1.5 1.5 0 0 1-1.5-1.5L5 7Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 10v6M14 10v6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),activity:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M6 5h12v14H6V5Z",stroke:"currentColor",strokeWidth:"1.8"}),s.jsx("path",{d:"M9 9h6M9 12h4M9 15h5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),admin:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),s.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.8"})]})};function ob({name:e,active:t=!1}){return s.jsx("span",{className:`nav-icon${t?" active":""}`,"aria-hidden":"true",children:Vd[e]||Vd.drive})}const sb=m.lazy(()=>Yn(()=>import("./ProfilePage-1ect8cjw.js"),[])),ab=m.lazy(()=>Yn(()=>import("./SettingsPage-DPlgRpH7.js"),[])),lb=m.lazy(()=>Yn(()=>import("./SecurityPage-CsMTUvwd.js"),[])),cb=m.lazy(()=>Yn(()=>import("./BillingPage-KkyP0b8H.js"),[])),ub=m.lazy(()=>Yn(()=>import("./HelpPage-bPBxES5g.js"),[])),db=m.lazy(()=>Yn(()=>import("./ActivityPage-B9X3H4UD.js"),[])),Ia=m.lazy(()=>Yn(()=>import("./FileListPage-DthRhXQp.js"),[]));function Ot(){return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:48},children:s.jsx(jl,{size:28})})}function fb({msg:e,type:t,onClose:n}){m.useEffect(()=>{const i=setTimeout(n,3500);return()=>clearTimeout(i)},[n]);const r=t==="error"?"var(--danger)":t==="success"?"var(--accent)":"var(--accent-blue)";return s.jsxs("div",{className:"toast",role:"alert","aria-live":"polite",style:{position:"fixed",bottom:32,right:32,zIndex:9999,background:r,color:"#fff",padding:"14px 24px",borderRadius:"var(--radius)",fontFamily:"var(--font)",fontWeight:600,fontSize:14,boxShadow:"var(--shadow)",animation:"slideUp .3s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10,maxWidth:420},children:[s.jsx("span",{children:t==="error"?"✕":t==="success"?"✓":"ℹ"}),s.jsx("span",{style:{flex:1},children:e}),s.jsx("span",{onClick:n,style:{cursor:"pointer",opacity:.7,fontSize:18,lineHeight:1},children:"×"})]})}function jl({size:e=22,color:t="var(--accent)"}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:t,borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function zo({value:e}){const t=e>85?"var(--danger)":e>60?"var(--accent-amber)":"var(--accent)";return s.jsx("div",{style:{background:"var(--border)",borderRadius:99,height:6,overflow:"hidden",width:"100%"},children:s.jsx("div",{style:{width:`${e}%`,height:"100%",background:t,borderRadius:99,transition:"width .5s ease"}})})}function Hd({size:e=44}){return s.jsx("span",{style:{width:e,height:e,borderRadius:Math.round(e*.28),background:"var(--gradient)",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 14px 30px rgba(0,183,79,.26)",flexShrink:0},children:s.jsxs("svg",{width:Math.round(e*.62),height:Math.round(e*.62),viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M9.5 21.5h14a5.3 5.3 0 0 0 .4-10.6A8 8 0 0 0 8.4 8.8 6.5 6.5 0 0 0 9.5 21.5Z",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 21.5h14",stroke:"white",strokeWidth:"3",strokeLinecap:"round"})]})})}function pb({jobs:e,history:t}){return!e.length&&!t.length?null:s.jsxs("div",{className:"download-panel",style:{position:"fixed",right:18,bottom:18,zIndex:1200,width:"min(360px, calc(100vw - 32px))",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:16,boxShadow:"var(--shadow)",overflow:"hidden",animation:"slideUp .2s ease"},children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("strong",{style:{fontSize:13},children:"Download manager"}),s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[e.filter(n=>n.status==="downloading").length," active"]})]}),s.jsxs("div",{style:{maxHeight:260,overflow:"auto",padding:12},children:[e.map(n=>s.jsxs("div",{style:{marginBottom:12},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:12,marginBottom:6},children:[s.jsx("span",{style:{color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),s.jsx("span",{style:{color:n.status==="failed"?"var(--danger)":"var(--accent-blue)",fontWeight:800},children:n.status==="failed"?"Failed":`${n.percent}%`})]}),s.jsx(zo,{value:n.percent})]},n.id)),t.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",fontWeight:800,margin:"10px 0 8px",textTransform:"uppercase"},children:"Recent downloads"}),t.slice(0,4).map(n=>s.jsxs("div",{style:{padding:"8px 0",borderTop:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:Wi(n.downloadedAt)})]},n.id))]})]})]})}function hb({title:e,message:t,onConfirm:n,onCancel:r,danger:i=!1}){return s.jsx("div",{className:"modal-backdrop",onClick:r,children:s.jsxs("div",{className:"modal-card",onClick:o=>o.stopPropagation(),children:[s.jsx("div",{style:{fontSize:36,textAlign:"center",marginBottom:16},children:i?"⚠️":"❓"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:8},children:e}),s.jsx("p",{style:{color:"var(--text-secondary)",fontFamily:"var(--font)",fontSize:14,textAlign:"center",marginBottom:28,lineHeight:1.5},children:t}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:r,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:n,className:"btn-primary",style:i?{background:"var(--danger)",boxShadow:"0 10px 28px rgba(248,113,113,.25)"}:void 0,children:i?"Delete":"Confirm"})]})]})})}function gb({file:e,onRename:t,onCancel:n}){const[r,i]=m.useState(e.name),o=m.useRef(null);return m.useEffect(()=>{var a;(a=o.current)==null||a.select()},[]),s.jsx("div",{className:"modal-backdrop",onClick:n,children:s.jsxs("div",{className:"modal-card",onClick:a=>a.stopPropagation(),children:[s.jsx("div",{style:{fontSize:32,textAlign:"center",marginBottom:12},children:"✏️"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:20},children:"Rename File"}),s.jsx("input",{ref:o,value:r,onChange:a=>i(a.target.value),onKeyDown:a=>a.key==="Enter"&&t(r),className:"input-field",style:{marginBottom:20}}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:n,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>t(r),className:"btn-primary",children:"Rename"})]})]})})}function ig({tags:e}){return e!=null&&e.length?s.jsx("div",{style:{display:"flex",gap:4,marginTop:4,flexWrap:"wrap"},children:e.slice(0,3).map(t=>s.jsx("span",{style:{fontSize:10,padding:"2px 6px",borderRadius:6,background:"rgba(240,22,58,.12)",color:"var(--accent)",fontWeight:600},children:t},t))}):null}function sn({label:e,onClick:t,tone:n="neutral",disabled:r=!1}){const i=n==="accent"?"accent":n==="blue"?"blue":"";return s.jsx("button",{type:"button",className:`quick-action-btn ${i}`.trim(),title:e,disabled:r,onClick:o=>{o.stopPropagation(),r||t()},children:e})}function mb({file:e,onDelete:t,onShare:n,onPreview:r,onRename:i,onDownload:o,onMove:a,onCopy:l,onTags:c}){return s.jsxs("div",{className:"file-list-card",children:[s.jsx("div",{style:{fontSize:34,flexShrink:0,width:48,height:48,borderRadius:14,background:"rgba(56,189,248,.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:Rs(e.mimeType)}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:16,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:12,marginTop:3},children:[Te(e.size)," · ",Wi(e.createdAt)]}),s.jsx(ig,{tags:e.tags})]}),s.jsxs("div",{className:"file-list-actions",children:[s.jsx(sn,{label:"Preview",disabled:!ah(e.mimeType),onClick:()=>r(e),tone:"blue"}),s.jsx(sn,{label:"Download",onClick:()=>o(e)}),s.jsx(sn,{label:"Share",onClick:()=>n(e),tone:"accent"}),s.jsx(sn,{label:"Rename",onClick:()=>i(e)}),s.jsx(tg,{file:e,onMove:a,onCopy:l,onTags:c,onDelete:t})]})]})}function vb({file:e,token:t,onDelete:n,onShare:r,onPreview:i,onRename:o,onDownload:a,onMove:l,onCopy:c,onTags:u}){var h;const p=(h=e.mimeType)==null?void 0:h.startsWith("image/");return s.jsxs("div",{className:"glass-card",style:{borderRadius:"var(--radius-lg)",overflow:"hidden",display:"flex",flexDirection:"column",transition:"var(--transition)"},onMouseEnter:d=>{d.currentTarget.style.transform="translateY(-3px)",d.currentTarget.style.boxShadow="var(--glow)"},onMouseLeave:d=>{d.currentTarget.style.transform="translateY(0)",d.currentTarget.style.boxShadow="none"},children:[s.jsxs("div",{style:{height:170,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(240,253,244,.95), rgba(239,246,255,.95))",borderBottom:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[p?s.jsx(Ow,{fileId:e.id,token:t,alt:e.name,mimeType:e.mimeType}):s.jsx("div",{style:{fontSize:56,display:"flex"},children:Rs(e.mimeType)}),s.jsx("div",{style:{position:"absolute",right:8,bottom:8,fontSize:10,fontWeight:700,background:"#111827",color:"#fff",padding:"2px 6px",borderRadius:6},children:Te(e.size)}),s.jsx("div",{style:{position:"absolute",right:10,top:10},children:s.jsx(tg,{file:e,onMove:l,onCopy:c,onTags:u,onDelete:n})})]}),s.jsxs("div",{style:{padding:"14px"},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:5},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:11},children:[Te(e.size)," · ",Wi(e.createdAt)]}),s.jsx(ig,{tags:e.tags}),s.jsxs("div",{className:"grid-actions",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[s.jsx(sn,{label:"Preview",disabled:!ah(e.mimeType),onClick:()=>i(e),tone:"blue"}),s.jsx(sn,{label:"Share",onClick:()=>r(e),tone:"accent"}),s.jsx(sn,{label:"Download",onClick:()=>a(e)}),s.jsx(sn,{label:"Rename",onClick:()=>o(e)})]})]})]})}function yb({account:e,onManage:t}){if(!(e!=null&&e.storageWarning))return null;const n=e.storageWarning==="critical";return s.jsxs("div",{style:{padding:"10px 20px",background:n?"rgba(255,77,77,.12)":"rgba(246,179,71,.12)",borderBottom:`1px solid ${n?"var(--danger)":"var(--accent-amber)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap",fontSize:13,fontFamily:"var(--font)"},children:[s.jsx("span",{children:n?"Storage almost full (95%+).":"Storage over 80% full."}),s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{padding:"6px 14px",fontSize:13},children:"Manage storage"})]})}function xb({username:e,stats:t,storagePercent:n,onUpload:r,onNewFolder:i}){const o=(()=>{const a=new Date().getHours();return a<12?"Good morning":a<17?"Good afternoon":"Good evening"})();return s.jsxs("div",{className:"drive-hero",style:{marginBottom:28,padding:"30px 32px",borderRadius:"var(--radius-lg)",background:"linear-gradient(135deg, rgba(17,26,43,.98), rgba(13,27,47,.96))",border:"1px solid var(--border)",boxShadow:"0 24px 60px rgba(0,0,0,.2)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:20,flexWrap:"wrap",animation:"floatIn .35s ease"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:12,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"var(--accent)",marginBottom:6},children:"My Drive"}),s.jsxs("h1",{style:{fontSize:34,fontWeight:900,color:"var(--text)",marginBottom:6,lineHeight:1.12},children:[o,", ",e||"there"]}),s.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:14,maxWidth:520},children:[t.totalFiles," files · ",t.totalFolders," folders · ",Math.round(n),"% storage used"]})]}),s.jsxs("div",{className:"drive-hero-actions",style:{display:"flex",gap:10,flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"btn-primary",onClick:r,children:"↑ Upload files"}),s.jsx("button",{type:"button",className:"btn-secondary",onClick:i,children:"⊞ New folder"})]})]})}function wb({children:e,onNavigate:t,onSignOut:n,onUpgrade:r}){const{account:i,notifications:o,unreadCount:a,markAllRead:l}=rg();return s.jsxs(s.Fragment,{children:[s.jsx(nb,{account:i,onOpenSettings:()=>t("settings")}),s.jsx(tb,{account:i,onUpgrade:r}),s.jsx(yb,{account:i,onManage:()=>t("billing")}),s.jsxs("header",{className:"account-header",style:{position:"sticky",top:0,zIndex:90,height:76,borderBottom:"1px solid var(--border)",background:"rgba(11,19,34,.88)",backdropFilter:"blur(16px)",display:"flex",alignItems:"center",justifyContent:"flex-end",gap:12,padding:"0 28px 0 316px"},children:[s.jsx(rb,{notifications:o,unreadCount:a,onMarkAllRead:l}),s.jsx(eb,{account:i,onNavigate:t,onSignOut:n})]}),e]})}function bb(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?new URLSearchParams(window.location.search).get("token"):null}function Gd(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/reset-password")?new URLSearchParams(window.location.search).get("token"):null}function kb(){const[e,t]=m.useState(()=>window.innerWidth);return m.useEffect(()=>{const n=()=>t(window.innerWidth);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),{width:e,isMobile:e<=768,isSmall:e<=520}}function Sb(){const[e,t]=m.useState(bb),[n,r]=m.useState(Gd),[i,o]=m.useState(()=>{const y=localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token"),I=Gd();return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?"verify-email":I?"reset-password":y?"app":"landing"}),[a,l]=m.useState("login"),[c,u]=m.useState(()=>localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token")||""),[p,h]=m.useState(()=>localStorage.getItem("cv_user")||sessionStorage.getItem("cv_user")||""),[d,x]=m.useState(null),[b,k]=m.useState([]),[A,g]=m.useState([]),[f,v]=m.useState({totalFiles:0,storageUsed:0,storageQuota:1024*1024*1024,totalFolders:0}),[w,E]=m.useState(null),[C,j]=m.useState([]),[R,V]=m.useState(""),[N,pe]=m.useState(!1),[he,we]=m.useState(0),[gt,Sn]=m.useState(null),[Ae,Ke]=m.useState([]),[T,D]=m.useState(()=>{try{return JSON.parse(localStorage.getItem("cv_downloadHistory")||"[]")}catch{return[]}}),[z,Y]=m.useState(null),[ne,Ye]=m.useState(null),[ce,Et]=m.useState(""),[be,ae]=m.useState(!1),[Ct,Ur]=m.useState(!1),[Ce,Yi]=m.useState(()=>localStorage.getItem("cv_viewMode")||"list"),[Kt,zs]=m.useState("all"),[Yt,Qi]=m.useState(()=>localStorage.getItem("cv_theme")||"light"),[_n,rt]=m.useState(null),[Qn,Qe]=m.useState(null),[qn,Jn]=m.useState(!1),[S,G]=m.useState("drive"),[It,Q]=m.useState("createdAt"),[En,og]=m.useState("desc"),[qi,sg]=m.useState(""),[Ms,ag]=m.useState([]),[lg,cg]=m.useState(1),[ug,dg]=m.useState(!1),[Ji,Br]=m.useState(!1),[fg,pg]=m.useState([]),[hg,gg]=m.useState([]),[mg,vg]=m.useState([]),[Mc,yg]=m.useState(null),[Xn,Wr]=m.useState(null),[Fs,Fc]=m.useState(null),[Us,Bs]=m.useState(null),[Uc,xg]=m.useState("user"),[Bc,wg]=m.useState([]),[Wc,bg]=m.useState(null),[jt,Cn]=m.useState(null),[kg,Sg]=m.useState([]),[_g,Eg]=m.useState([]),[Cg,Ig]=m.useState([]),Ws=qw(R,400),{isMobile:Xi,isSmall:jg}=kb(),$r=m.useRef(),$c=m.useRef(),K=m.useCallback((y,I="info")=>Y({msg:y,type:I}),[]),W=m.useCallback((y,I)=>lt(y,I,c),[c]),Ie=m.useCallback(async(y=1,I=!1)=>{var F,B;if(c){Br(!0);try{if(S==="trash"){const qe=await W("/trash");gg(jn(qe,"files")),vg(jn(qe,"folders")),Br(!1);return}if(S==="admin"){const[qe,Yg]=await Promise.all([W("/admin/users?limit=50"),W("/admin/analytics").catch(()=>null)]);wg(jn(qe,"users")),bg(Yg),Br(!1);return}if(S==="dashboard"){const qe=await W("/storage/usage");yg(qe),v({totalFiles:qe.fileCount??0,storageUsed:qe.storageUsed??0,storageQuota:qe.storageQuota??1024*1024*1024,totalFolders:qe.folderCount??0}),Br(!1);return}const U=new URLSearchParams;w&&U.set("folderId",w),Ws&&U.set("search",Ws),qi&&U.set("tag",qi),U.set("sortBy",It),U.set("sortOrder",En),U.set("page",String(y)),U.set("limit","30");const[H,it,In,Vs,Kg]=await Promise.all([W(`/files?${U}`),W(`/folders?${w?`parentId=${w}`:""}`),W("/storage/usage"),W("/files/tags").catch(()=>({tags:[]})),W("/folders?all=true").catch(()=>({folders:[]}))]),Hs=jn(H,"files"),qc=jn(it,"folders");k(I?qe=>[...qe,...Hs]:Hs),g(qc),ag((Vs==null?void 0:Vs.tags)||[]),pg(jn(Kg,"folders")),dg((((F=H==null?void 0:H.pagination)==null?void 0:F.page)||1)<(((B=H==null?void 0:H.pagination)==null?void 0:B.totalPages)||1)),cg(y),v({totalFiles:In.fileCount??Hs.length,storageUsed:In.storageUsed??0,storageQuota:In.storageQuota??1024*1024*1024,totalFolders:In.folderCount??qc.length})}catch(U){console.error("Refresh failed:",U);const H=U.message.toLowerCase();H.includes("credential")||H.includes("unauthorized")||H.includes("token")?(localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),u(""),h(""),o("landing")):K(U.message,"error")}Br(!1)}},[c,w,Ws,qi,It,En,S,W,K]);m.useEffect(()=>{Ie(1,!1)},[Ie]),m.useEffect(()=>{c&&W("/users/me").then(y=>xg((y==null?void 0:y.role)||"user")).catch(()=>{})},[c,W]),m.useEffect(()=>{if(!c||S==="drive"||S==="trash"||S==="dashboard"||S==="admin")return;(async()=>{try{if(S==="recent"){const I=await W("/dashboard");Sg(I.recentFiles||[])}else if(S==="starred"){const I=await W("/files?isStarred=true&limit=50");Eg(jn(I,"files"))}else if(S==="shared"){const I=await W("/dashboard"),F=[...I.sharedWithMe||[],...I.sharedByMe||[]].map(B=>B.file||B);Ig(F.filter(Boolean))}}catch{}})()},[c,S,W]);const Tg=y=>{Cn(y),y==="dashboard"&&G("dashboard"),y==="billing"&&Cn("billing")};m.useEffect(()=>{localStorage.setItem("cv_viewMode",Ce)},[Ce]),m.useEffect(()=>{localStorage.setItem("cv_theme",Yt)},[Yt]),m.useEffect(()=>{const y=I=>{var F;(F=I.detail)!=null&&F.token&&u(I.detail.token)};return window.addEventListener("cv-token-refreshed",y),()=>window.removeEventListener("cv-token-refreshed",y)},[]);const Ng=(y,I,F,B,U=!0)=>{if(!y&&(B!=null&&B.email)){x(B),o("verify-email");return}if(!y)return;const H=U?localStorage:sessionStorage,it=U?sessionStorage:localStorage;H.setItem("cv_token",y),it.removeItem("cv_token"),I&&H.setItem("cv_refreshToken",I),it.removeItem("cv_refreshToken");const In=typeof F=="string"?F:(B==null?void 0:B.fullName)||(B==null?void 0:B.email);H.setItem("cv_user",In||""),it.removeItem("cv_user"),B!=null&&B.avatarUrl&&H.setItem("cv_avatar",B.avatarUrl),u(y),h(In||""),o("app")},Pg=async y=>{const I=`${y.id}-${Date.now()}`;Sn({name:y.name,percent:0}),Ke(F=>[{id:I,name:y.name,percent:0,status:"downloading"},...F].slice(0,6));try{const F=await _c(y.id,c,{onProgress:U=>{Sn({name:y.name,percent:U}),Ke(H=>H.map(it=>it.id===I?{...it,percent:U}:it))}});Ey(F,y.name);const B={id:I,name:y.name,size:y.size,downloadedAt:new Date().toISOString()};D(U=>{const H=[B,...U].slice(0,12);return localStorage.setItem("cv_downloadHistory",JSON.stringify(H)),H}),Ke(U=>U.map(H=>H.id===I?{...H,percent:100,status:"complete"}:H)),K(`Downloaded "${y.name}"`,"success")}catch(F){Ke(B=>B.map(U=>U.id===I?{...U,status:"failed"}:U)),K(F.message,"error")}Sn(null)},Vc=async()=>{try{const y=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");await W("/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:y})})}catch{}localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),u(""),h(""),o("landing")},Hc=async(y,I,F)=>{if(!c)throw new Error("Authentication token missing. Please log in again.");const B=new FormData;return B.append("file",y),I&&B.append("folderId",I),Cy("/files/upload",B,c,F)},Rg=async(y,I)=>W("/folders",{method:"POST",body:JSON.stringify({name:y,parentId:I||null})}),$s=async(y,I=!1)=>{if(!c){K("Please log in again to upload files.","error");return}const F=Array.from(y||[]);if(!F.length)return;pe(!0),we(0);let B=0;try{if(I&&F.some(U=>U.webkitRelativePath))await Jw(F,{baseFolderId:w,createFolder:Rg,uploadFile:async(U,H)=>{await Hc(U,H,we),B++},onProgress:we});else for(let U=0;U<F.length;U++)try{await Hc(F[U],w,H=>{const it=Math.round((U+H/100)/F.length*100);we(it)}),B++}catch(H){K(`Failed to upload "${F[U].name}": ${H.message}`,"error")}}finally{pe(!1),we(0),Ie(1,!1),B>0&&K(`${B} file(s) uploaded successfully!`,"success")}},Og=y=>{rt({title:"Delete File",message:`Move "${y.name}" to trash? You can restore it later from the Trash view.`,danger:!0,onConfirm:async()=>{rt(null);try{await W(`/files/${y.id}`,{method:"DELETE"}),Ie(),K("File deleted","success")}catch(I){K(I.message,"error")}}})},Ag=y=>{rt({title:"Delete Folder",message:`Delete folder "${y.name}" and all its contents? This cannot be undone.`,danger:!0,onConfirm:async()=>{rt(null);try{await W(`/folders/${y.id}`,{method:"DELETE"}),Ie(),K("Folder deleted","success")}catch(I){K(I.message,"error")}}})},Lg=async(y,I)=>I.shareType==="user"?W(`/files/${y.id}/share/user`,{method:"POST",body:JSON.stringify({sharedWithEmail:I.sharedWithEmail||I.email,permission:I.permission})}):W(`/files/${y.id}/share`,{method:"POST",body:JSON.stringify(I)}),Dg=async(y,{targetFolderId:I})=>{try{await W(`/files/${y.id}/move`,{method:"POST",body:JSON.stringify({targetFolderId:I})}),Wr(null),Ie(1,!1),K("File moved","success")}catch(F){K(F.message,"error")}},zg=async(y,{targetFolderId:I,newName:F})=>{try{await W(`/files/${y.id}/copy`,{method:"POST",body:JSON.stringify({targetFolderId:I,newName:F!==y.name?F:void 0})}),Wr(null),Ie(1,!1),K("File copied","success")}catch(B){K(B.message,"error")}},Mg=async(y,I)=>{try{await W(`/files/${y.id}`,{method:"PUT",body:JSON.stringify({tags:I})}),Bs(null),Ie(1,!1),K("Tags updated","success")}catch(F){K(F.message,"error")}},Fg=async y=>{try{await W(`/trash/files/${y}/restore`,{method:"POST"}),Ie(1,!1),K("File restored","success")}catch(I){K(I.message,"error")}},Ug=async y=>{try{await W(`/trash/folders/${y}/restore`,{method:"POST"}),Ie(1,!1),K("Folder restored","success")}catch(I){K(I.message,"error")}},Bg=y=>{rt({title:"Delete forever",message:`"${y.name}" will be permanently deleted. This cannot be undone.`,danger:!0,onConfirm:async()=>{rt(null);try{await W(`/files/${y.id}/permanent`,{method:"DELETE"}),Ie(1,!1),K("File permanently deleted","success")}catch(I){K(I.message,"error")}}})},Wg=()=>{rt({title:"Empty trash",message:"All items in trash will be permanently deleted.",danger:!0,onConfirm:async()=>{rt(null);try{await W("/trash/empty",{method:"POST"}),Ie(1,!1),K("Trash emptied","success")}catch(y){K(y.message,"error")}}})},$g=async(y,I)=>{if(!I.trim()||I===y.name){Qe(null);return}try{await W(`/files/${y.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:I})}),Ie(),K("File renamed","success")}catch(F){K(F.message,"error")}Qe(null)},Gc=async()=>{if(ce.trim()){try{await W("/folders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:ce,parentId:w})}),Ie(),K("Folder created!","success")}catch(y){K(y.message,"error")}Et(""),ae(!1)}},Vg=y=>{E(y.id),j(I=>[...I,y]),Jn(!1)},Kc=y=>{y===-1?(E(null),j([])):(E(C[y].id),j(I=>I.slice(0,y+1)))},Hg=y=>{y.preventDefault(),Ur(!1),y.dataTransfer.files.length>0&&$s(y.dataTransfer.files)},Zi=m.useMemo(()=>{const y=ad.find(I=>I.key===Kt);return!y||y.key==="all"?b:b.filter(I=>y.test(I.mimeType||""))},[b,Kt]),Yc=f.storageQuota||1024*1024*1024,Qc=Math.min(100,f.storageUsed/Yc*100);if(e)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Fn}),s.jsx(Bd,{token:e,onVerified:()=>{t(null),window.history.replaceState({},"","/"),o("auth"),l("login")},onBack:()=>{t(null),window.history.replaceState({},"","/"),o("auth"),l("login")}})]});if(n)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Fn}),s.jsx(Wd,{token:n,onBack:()=>{r(null),window.history.replaceState({},"","/"),o("auth"),l("login")}})]});if(i==="landing"&&!c)return s.jsx(Ly,{onGetStarted:()=>{l("register"),o("auth")},onLogin:()=>{l("login"),o("auth")},onSignUp:()=>{l("register"),o("auth")}});if(i==="auth"&&!c)return s.jsx(Nw,{initialMode:a,onAuth:Ng,onNeedsVerification:y=>{x(y),o("verify-email")},onBack:()=>o("landing")});if(i==="verify-email"&&!c)return s.jsx(Bd,{email:d==null?void 0:d.email,onVerified:()=>{x(null),o("auth"),l("login")},onBack:()=>{x(null),o("auth"),l("login")}});if(i==="reset-password"&&!c)return s.jsx(Wd,{token:n,onSuccess:()=>{r(null),window.history.replaceState({},"","/"),o("auth"),l("login")},onBack:()=>{r(null),o("auth"),l("login")}});const Gg=Ce==="grid"?vb:mb;return s.jsx(Zw,{token:c,children:s.jsx(wb,{onNavigate:y=>{Cn(null),Tg(y)},onSignOut:Vc,onUpgrade:()=>{Cn("billing"),G("drive")},children:s.jsxs("div",{"data-theme":Yt,className:"app-shell",children:[s.jsx("style",{children:Fn}),s.jsx("button",{type:"button",className:"mobile-menu-button","aria-label":"Open navigation menu","aria-expanded":qn,onClick:()=>Jn(y=>!y),style:{display:"none",position:"fixed",top:16,left:16,zIndex:200,background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:10,width:40,height:40,alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--text)",fontSize:20,...Xi?{display:"flex"}:{}},children:"☰"}),qn&&Xi&&s.jsx("div",{onClick:()=>Jn(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:99}}),s.jsxs("div",{className:`sidebar ${qn?"open":""}`,style:{position:"fixed",left:0,top:0,bottom:0,width:296,background:"var(--bg-sidebar)",borderRight:"1px solid var(--border)",padding:"18px 16px",display:"flex",flexDirection:"column",gap:7,zIndex:100,transition:"transform .3s cubic-bezier(.4,0,.2,1)",...Xi?{transform:qn?"translateX(0)":"translateX(-100%)"}:{}},children:[s.jsxs("div",{style:{marginBottom:12,display:"flex",alignItems:"center",gap:10},children:[s.jsx(Hd,{size:44}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:24,fontWeight:900,color:"var(--text)",letterSpacing:"-0.02em"},children:Be.name}),s.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:1},children:["@",p]})]})]}),s.jsx("button",{type:"button",onClick:()=>{var y;return(y=$r.current)==null?void 0:y.click()},className:"btn-primary",style:{minHeight:58,borderRadius:16,fontSize:17,justifyContent:"center",display:"flex",alignItems:"center",gap:10,margin:"4px 0 18px"},children:"+ New"}),[{id:"drive",icon:"drive",label:"My Drive"},{id:"recent",icon:"recent",label:"Recent"},{id:"starred",icon:"starred",label:"Starred"},{id:"shared",icon:"shared",label:"Shared"},{id:"dashboard",icon:"usage",label:"Storage"},{id:"trash",icon:"trash",label:"Trash"},{id:"activity",icon:"activity",label:"Activity"},...Uc==="admin"||Uc==="super_admin"?[{id:"admin",icon:"admin",label:"Admin"}]:[]].map(y=>s.jsxs("button",{type:"button",className:`nav-item${S===y.id?" active":""}`,"aria-current":S===y.id?"page":void 0,onClick:()=>{Cn(null),G(y.id),Jn(!1),y.id==="drive"&&(E(null),j([]))},children:[s.jsx(ob,{name:y.icon,active:S===y.id}),s.jsx("span",{children:y.label})]},y.id)),s.jsx("div",{style:{borderTop:"1px solid var(--border)",margin:"12px 0 8px"}}),s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1px",marginBottom:8,paddingLeft:4},children:"OVERVIEW"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16},children:[s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:f.totalFiles}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Files"})]}),s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:f.totalFolders}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Folders"})]})]}),s.jsxs("div",{style:{marginTop:"auto"},children:[s.jsxs("div",{style:{marginBottom:16,background:"linear-gradient(180deg, rgba(0,183,79,.1), rgba(17,26,43,.9))",borderRadius:18,padding:"16px",border:"1px solid rgba(0,183,79,.22)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--text-secondary)",marginBottom:8},children:[s.jsx("span",{style:{fontWeight:600},children:"Free"}),s.jsxs("span",{children:[Te(f.storageUsed)," of ",Te(Yc)," used"]})]}),s.jsx(zo,{value:Qc}),s.jsx("button",{type:"button",onClick:()=>Cn("billing"),className:"btn-primary",style:{width:"100%",marginTop:14,minHeight:44},children:"Upgrade Now"})]}),s.jsx("button",{type:"button",onClick:Vc,className:"btn-danger",children:"Sign Out"})]})]}),s.jsxs("div",{className:"main-content",style:{marginLeft:Xi?0:296,padding:"28px 40px",minHeight:"100vh",paddingTop:26},children:[s.jsx(_b,{appPage:jt,setAppPage:Cn,api:W,token:c,notify:K,stats:f,usageDetail:Mc,adminUsers:Bc,systemHealth:Wc,loading:Ji,onRefreshAccount:()=>{},theme:Yt,setTheme:Qi}),!jt&&S==="recent"&&s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(Ia,{title:"Recent files",files:kg,emptyMessage:"No recent files yet.",onBack:()=>G("drive"),onOpen:Ye})}),!jt&&S==="starred"&&s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(Ia,{title:"Starred",files:_g,emptyMessage:"Star files to see them here.",onBack:()=>G("drive"),onOpen:Ye})}),!jt&&S==="shared"&&s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(Ia,{title:"Shared with you",files:Cg,emptyMessage:"Nothing shared yet.",onBack:()=>G("drive"),onOpen:Ye})}),!jt&&S==="activity"&&s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(db,{api:W,onBack:()=>G("drive")})}),!jt&&S==="trash"&&s.jsx(Aw,{trashedFiles:hg,trashedFolders:mg,loading:Ji,onRestoreFile:Fg,onRestoreFolder:Ug,onPermanentDelete:Bg,onEmptyTrash:Wg,onBack:()=>G("drive")}),!jt&&S==="dashboard"&&s.jsx(Ww,{stats:f,usage:Mc,onBack:()=>G("drive")}),!jt&&S==="admin"&&s.jsx($w,{users:Bc,systemHealth:Wc,loading:Ji,onBack:()=>G("drive")}),!jt&&S==="drive"&&s.jsxs(s.Fragment,{children:[s.jsx(xb,{username:p,stats:f,storagePercent:Qc,onUpload:()=>{var y;return(y=$r.current)==null?void 0:y.click()},onNewFolder:()=>ae(!0)}),s.jsxs("div",{className:"drive-toolbar",children:[s.jsxs("div",{className:"drive-search",style:{flex:1,position:"relative",minWidth:200},children:[s.jsx("span",{style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:11,opacity:.72,fontWeight:900,letterSpacing:".04em"},children:"SEARCH"}),s.jsx("input",{className:"input-field",placeholder:`Search ${Be.name}...`,value:R,onChange:y=>V(y.target.value),style:{width:"100%",maxWidth:560,padding:"14px 14px 14px 78px",borderRadius:14,background:"var(--bg-card)"}})]}),s.jsx("button",{type:"button",className:"icon-btn",title:Yt==="dark"?"Light mode":"Dark mode",onClick:()=>Qi(y=>y==="dark"?"light":"dark"),children:Yt==="dark"?"☀":"🌙"}),s.jsxs("div",{className:"view-toggle",children:[s.jsx("button",{type:"button",onClick:()=>Yi("list"),className:`view-toggle-btn${Ce==="list"?" active":""}`,children:"☰"}),s.jsx("button",{type:"button",onClick:()=>Yi("grid"),className:`view-toggle-btn${Ce==="grid"?" active":""}`,children:"▦"})]}),S==="drive"&&s.jsxs("div",{className:"drive-actions",children:[s.jsx("button",{type:"button",onClick:()=>ae(y=>!y),className:"btn-secondary",children:"New folder"}),s.jsx("button",{type:"button",onClick:()=>{var y;return(y=$r.current)==null?void 0:y.click()},className:"btn-primary",children:"Upload"}),s.jsx("button",{type:"button",onClick:()=>{var y;return(y=$c.current)==null?void 0:y.click()},className:"btn-secondary",children:"Folder"}),s.jsx("input",{ref:$r,type:"file",multiple:!0,hidden:!0,onChange:y=>{$s(y.target.files),y.target.value=""}}),s.jsx("input",{ref:$c,type:"file",multiple:!0,webkitdirectory:"",hidden:!0,onChange:y=>{$s(y.target.files,!0),y.target.value=""}})]})]}),S==="drive"&&s.jsxs("div",{className:"drive-sortbar",children:[s.jsxs("select",{value:It,onChange:y=>Q(y.target.value),className:"select-field",children:[s.jsx("option",{value:"createdAt",children:"Date"}),s.jsx("option",{value:"name",children:"Name"}),s.jsx("option",{value:"size",children:"Size"}),s.jsx("option",{value:"updatedAt",children:"Modified"})]}),s.jsxs("select",{value:En,onChange:y=>og(y.target.value),className:"select-field",children:[s.jsx("option",{value:"desc",children:"Descending"}),s.jsx("option",{value:"asc",children:"Ascending"})]}),Ms.length>0&&s.jsxs("select",{value:qi,onChange:y=>sg(y.target.value),className:"select-field",style:{gridColumn:jg?"1 / -1":void 0},children:[s.jsx("option",{value:"",children:"All tags"}),Ms.map(y=>s.jsx("option",{value:y,children:y},y))]})]}),S==="drive"&&s.jsx("div",{className:"filter-chips",children:ad.map(y=>s.jsxs("button",{type:"button",onClick:()=>zs(y.key),className:`filter-chip${Kt===y.key?" active":""}`,children:[s.jsx("span",{children:y.icon})," ",y.label]},y.key))}),S==="drive"&&be&&s.jsxs("div",{className:"new-folder-row",style:{display:"flex",gap:10,marginBottom:20,animation:"fadeIn .2s ease"},children:[s.jsx("input",{className:"input-field",placeholder:"Folder name…",value:ce,onChange:y=>Et(y.target.value),onKeyDown:y=>y.key==="Enter"&&Gc(),style:{width:260},autoFocus:!0}),s.jsx("button",{type:"button",onClick:Gc,className:"btn-primary",children:"Create"}),s.jsx("button",{type:"button",onClick:()=>ae(!1),className:"btn-secondary",children:"Cancel"})]}),s.jsxs("div",{className:"breadcrumb-row",style:{alignItems:"center",gap:8,marginBottom:20,fontSize:14,color:"var(--text-muted)"},children:[s.jsxs("span",{onClick:()=>Kc(-1),className:"breadcrumb-link",style:{color:w?"var(--text-secondary)":"var(--accent)"},children:[Be.logo," Home"]}),C.map((y,I)=>s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--text-muted)"},children:"›"}),s.jsx("span",{onClick:()=>Kc(I),className:"breadcrumb-link",style:{color:I===C.length-1?"var(--accent)":"var(--text-secondary)"},children:y.name})]},y.id))]}),N&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(240,22,58,.24)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(jl,{size:14})," Uploading…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent)"},children:[he,"%"]})]}),s.jsx(zo,{value:he})]}),gt&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(64,144,255,.3)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(jl,{size:14,color:"var(--accent-blue)"})," Downloading ",gt.name,"…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent-blue)"},children:[gt.percent,"%"]})]}),s.jsx(zo,{value:gt.percent})]}),s.jsx("div",{onDragOver:y=>{y.preventDefault(),Ur(!0)},onDragLeave:()=>Ur(!1),onDrop:Hg,className:`drop-zone${Ct?" drag-over":""}`,children:Ct?s.jsx("span",{style:{color:"var(--accent)",fontWeight:700,fontSize:16},children:"⬇ Drop files here to upload"}):s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:32,marginBottom:8},children:"📤"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:700,marginBottom:4},children:"Drag & drop files or folders"}),s.jsx("div",{style:{fontSize:13},children:"or use the Upload button above"})]})}),A.length>0&&s.jsxs("div",{style:{marginBottom:28},children:[s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px",marginBottom:12},children:"FOLDERS"}),s.jsx("div",{className:"folder-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:A.map(y=>s.jsx(Eb,{folder:y,onOpen:Vg,onDelete:Ag},y.id))})]}),s.jsxs("div",{children:[s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:s.jsxs("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px"},children:["FILES ",Zi.length>0&&s.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:500},children:["(",Zi.length,")"]})]})}),Ji?s.jsx(Qw,{count:6,grid:Ce==="grid"}):Zi.length===0?s.jsxs("div",{className:"glass-card empty-state",style:{textAlign:"center",padding:"72px 32px",borderRadius:"var(--radius-lg)",border:"1.5px dashed var(--border)",animation:"fadeIn .3s ease"},children:[s.jsx("div",{style:{width:88,height:88,margin:"0 auto 20px",borderRadius:24,background:"var(--gradient-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"var(--glow)"},children:s.jsx(Hd,{size:48})}),s.jsx("div",{style:{fontWeight:800,fontSize:20,marginBottom:8,color:"var(--text)"},children:Kt!=="all"?"No matching files":"No files in My Drive yet"}),s.jsx("div",{style:{fontSize:14,color:"var(--text-muted)",marginBottom:24,maxWidth:360,margin:"0 auto 24px"},children:Kt!=="all"?"Try a different filter or upload new files.":"Upload photos, documents, and more. Everything stays secure in your drive."}),Kt==="all"&&s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"btn-primary",onClick:()=>{var y;return(y=$r.current)==null?void 0:y.click()},children:"Upload your first file"}),s.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>ae(!0),children:"Create folder"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`file-grid${Ce==="grid"?" grid-view":""}`,style:{display:Ce==="grid"?"grid":"flex",gridTemplateColumns:Ce==="grid"?"repeat(auto-fill, minmax(250px, 1fr))":void 0,flexDirection:Ce==="list"?"column":void 0,gap:Ce==="grid"?12:8},children:Zi.map(y=>s.jsx(Gg,{file:y,token:c,onDelete:Og,onShare:I=>Fc(I),onPreview:Ye,onRename:Qe,onDownload:Pg,onMove:I=>Wr({file:I,mode:"move"}),onCopy:I=>Wr({file:I,mode:"copy"}),onTags:Bs},y.id))}),ug&&s.jsx("button",{type:"button",onClick:()=>Ie(lg+1,!0),className:"load-more-btn",children:"Load more files"})]})]})]})]}),ne&&s.jsx(Rw,{file:ne,token:c,onClose:()=>Ye(null)}),Xn&&s.jsx(zw,{file:Xn.file,mode:Xn.mode,folders:Xw(fg),currentFolderId:w,onCancel:()=>Wr(null),onConfirm:y=>Xn.mode==="move"?Dg(Xn.file,y):zg(Xn.file,y)}),Us&&s.jsx(Fw,{file:Us,allTags:Ms,onCancel:()=>Bs(null),onSave:y=>Mg(Us,y)}),Fs&&s.jsx(Bw,{file:Fs,onCancel:()=>Fc(null),onShare:y=>Lg(Fs,y)}),_n&&s.jsx(hb,{title:_n.title,message:_n.message,danger:_n.danger,onConfirm:_n.onConfirm,onCancel:()=>rt(null)}),Qn&&s.jsx(gb,{file:Qn,onRename:y=>$g(Qn,y),onCancel:()=>Qe(null)}),s.jsx(pb,{jobs:Ae,history:T}),z&&s.jsx(fb,{msg:z.msg,type:z.type,onClose:()=>Y(null)})]})})})}function _b({appPage:e,setAppPage:t,api:n,notify:r,stats:i,usageDetail:o,adminUsers:a,systemHealth:l,loading:c,onRefreshAccount:u,theme:p,setTheme:h}){const{account:d,refreshAll:x}=rg();if(!e)return null;const b=()=>t(null);return e==="profile"?s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(sb,{account:d,onBack:b})}):e==="settings"?s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(ab,{account:d,api:n,onBack:b,onUpdated:()=>x(),notify:r,theme:p,onThemeChange:h})}):e==="security"?s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(lb,{api:n,account:d,onBack:b,notify:r})}):e==="billing"?s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(cb,{account:d,api:n,onBack:b,notify:r,onUpdated:()=>x()})}):e==="help"?s.jsx(m.Suspense,{fallback:s.jsx(Ot,{}),children:s.jsx(ub,{onBack:b})}):null}function Eb({folder:e,onOpen:t,onDelete:n}){const[r,i]=m.useState(!1);return s.jsxs("div",{className:"folder-card",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>t(e),children:[s.jsx("span",{style:{fontSize:24},children:"📁"}),s.jsx("div",{style:{flex:1,minWidth:0},children:s.jsx("div",{style:{fontWeight:600,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},children:e.name})}),s.jsx("button",{onClick:o=>{o.stopPropagation(),n(e)},style:{background:"none",border:"none",color:"rgba(255,100,100,.3)",cursor:"pointer",fontSize:14,padding:4,borderRadius:6,opacity:r?1:0,transition:"opacity .15s"},children:"🗑"})]})}sh(document.getElementById("root")).render(s.jsx(m.StrictMode,{children:s.jsx(Sb,{})}));export{Be as B,Ny as P,Cb as S,Te as a,Rs as f,s as j,m as r,Wi as t};
