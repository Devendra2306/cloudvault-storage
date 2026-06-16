(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var qd={exports:{}},us={},Xd={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=Symbol.for("react.element"),sm=Symbol.for("react.portal"),am=Symbol.for("react.fragment"),lm=Symbol.for("react.strict_mode"),cm=Symbol.for("react.profiler"),um=Symbol.for("react.provider"),dm=Symbol.for("react.context"),fm=Symbol.for("react.forward_ref"),pm=Symbol.for("react.suspense"),hm=Symbol.for("react.memo"),gm=Symbol.for("react.lazy"),qc=Symbol.iterator;function mm(e){return e===null||typeof e!="object"?null:(e=qc&&e[qc]||e["@@iterator"],typeof e=="function"?e:null)}var Zd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ef=Object.assign,tf={};function kr(e,t,n){this.props=e,this.context=t,this.refs=tf,this.updater=n||Zd}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nf(){}nf.prototype=kr.prototype;function Il(e,t,n){this.props=e,this.context=t,this.refs=tf,this.updater=n||Zd}var Tl=Il.prototype=new nf;Tl.constructor=Il;ef(Tl,kr.prototype);Tl.isPureReactComponent=!0;var Xc=Array.isArray,rf=Object.prototype.hasOwnProperty,jl={current:null},of={key:!0,ref:!0,__self:!0,__source:!0};function sf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)rf.call(t,r)&&!of.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ti,type:e,key:o,ref:s,props:i,_owner:jl.current}}function vm(e,t){return{$$typeof:Ti,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ti}function ym(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zc=/\/+/g;function $s(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ym(""+e.key):t.toString(36)}function ho(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ti:case sm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+$s(s,0):r,Xc(i)?(n="",e!=null&&(n=e.replace(Zc,"$&/")+"/"),ho(i,t,n,"",function(u){return u})):i!=null&&(Pl(i)&&(i=vm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Zc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Xc(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+$s(o,l);s+=ho(o,t,n,c,i)}else if(c=mm(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+$s(o,l++),s+=ho(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Gi(e,t,n){if(e==null)return e;var r=[],i=0;return ho(e,r,"","",function(o){return t.call(n,o,i++)}),r}function xm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},go={transition:null},wm={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:go,ReactCurrentOwner:jl};function af(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Gi,forEach:function(e,t,n){Gi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Gi(e,function(){t++}),t},toArray:function(e){return Gi(e,function(t){return t})||[]},only:function(e){if(!Pl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=kr;M.Fragment=am;M.Profiler=cm;M.PureComponent=Il;M.StrictMode=lm;M.Suspense=pm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wm;M.act=af;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ef({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=jl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)rf.call(t,c)&&!of.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ti,type:e.type,key:i,ref:o,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:dm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:um,_context:e},e.Consumer=e};M.createElement=sf;M.createFactory=function(e){var t=sf.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:fm,render:e}};M.isValidElement=Pl;M.lazy=function(e){return{$$typeof:gm,_payload:{_status:-1,_result:e},_init:xm}};M.memo=function(e,t){return{$$typeof:hm,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=go.transition;go.transition={};try{e()}finally{go.transition=t}};M.unstable_act=af;M.useCallback=function(e,t){return Ce.current.useCallback(e,t)};M.useContext=function(e){return Ce.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};M.useEffect=function(e,t){return Ce.current.useEffect(e,t)};M.useId=function(){return Ce.current.useId()};M.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Ce.current.useMemo(e,t)};M.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};M.useRef=function(e){return Ce.current.useRef(e)};M.useState=function(e){return Ce.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return Ce.current.useTransition()};M.version="18.3.1";Xd.exports=M;var y=Xd.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm=y,Sm=Symbol.for("react.element"),km=Symbol.for("react.fragment"),_m=Object.prototype.hasOwnProperty,Cm=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Em={key:!0,ref:!0,__self:!0,__source:!0};function lf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)_m.call(t,r)&&!Em.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Sm,type:e,key:o,ref:s,props:i,_owner:Cm.current}}us.Fragment=km;us.jsx=lf;us.jsxs=lf;qd.exports=us;var a=qd.exports,cf={exports:{}},Me={},uf={exports:{}},df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,A){var O=k.length;k.push(A);e:for(;0<O;){var z=O-1>>>1,D=k[z];if(0<i(D,A))k[z]=A,k[O]=D,O=z;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var A=k[0],O=k.pop();if(O!==A){k[0]=O;e:for(var z=0,D=k.length,Ue=D>>>1;z<Ue;){var Qe=2*(z+1)-1,Dn=k[Qe],yt=Qe+1,st=k[yt];if(0>i(Dn,O))yt<D&&0>i(st,Dn)?(k[z]=st,k[yt]=O,z=yt):(k[z]=Dn,k[Qe]=O,z=Qe);else if(yt<D&&0>i(st,O))k[z]=st,k[yt]=O,z=yt;else break e}}return A}function i(k,A){var O=k.sortIndex-A.sortIndex;return O!==0?O:k.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],p=1,h=null,d=3,x=!1,b=!1,S=!1,R=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=k)r(u),A.sortIndex=A.expirationTime,t(c,A);else break;A=n(u)}}function w(k){if(S=!1,m(k),!b)if(n(c)!==null)b=!0,gn(C);else{var A=n(u);A!==null&&Re(w,A.startTime-k)}}function C(k,A){b=!1,S&&(S=!1,g(T),T=-1),x=!0;var O=d;try{for(m(A),h=n(c);h!==null&&(!(h.expirationTime>A)||k&&!se());){var z=h.callback;if(typeof z=="function"){h.callback=null,d=h.priorityLevel;var D=z(h.expirationTime<=A);A=e.unstable_now(),typeof D=="function"?h.callback=D:h===n(c)&&r(c),m(A)}else r(c);h=n(c)}if(h!==null)var Ue=!0;else{var Qe=n(u);Qe!==null&&Re(w,Qe.startTime-A),Ue=!1}return Ue}finally{h=null,d=O,x=!1}}var E=!1,j=null,T=-1,H=5,P=-1;function se(){return!(e.unstable_now()-P<H)}function fe(){if(j!==null){var k=e.unstable_now();P=k;var A=!0;try{A=j(!0,k)}finally{A?pe():(E=!1,j=null)}}else E=!1}var pe;if(typeof f=="function")pe=function(){f(fe)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,hn=vt.port2;vt.port1.onmessage=fe,pe=function(){hn.postMessage(null)}}else pe=function(){R(fe,0)};function gn(k){j=k,E||(E=!0,pe())}function Re(k,A){T=R(function(){k(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){b||x||(b=!0,gn(C))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(k){switch(d){case 1:case 2:case 3:var A=3;break;default:A=d}var O=d;d=A;try{return k()}finally{d=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,A){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var O=d;d=k;try{return A()}finally{d=O}},e.unstable_scheduleCallback=function(k,A,O){var z=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?z+O:z):O=z,k){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=O+D,k={id:p++,callback:A,priorityLevel:k,startTime:O,expirationTime:D,sortIndex:-1},O>z?(k.sortIndex=O,t(u,k),n(c)===null&&k===n(u)&&(S?(g(T),T=-1):S=!0,Re(w,O-z))):(k.sortIndex=D,t(c,k),b||x||(b=!0,gn(C))),k},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(k){var A=d;return function(){var O=d;d=A;try{return k.apply(this,arguments)}finally{d=O}}}})(df);uf.exports=df;var Im=uf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm=y,ze=Im;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ff=new Set,li={};function On(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(li[e]=t,e=0;e<t.length;e++)ff.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ia=Object.prototype.hasOwnProperty,jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eu={},tu={};function Pm(e){return Ia.call(tu,e)?!0:Ia.call(eu,e)?!1:jm.test(e)?tu[e]=!0:(eu[e]=!0,!1)}function Nm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rm(e,t,n,r){if(t===null||typeof t>"u"||Nm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nl=/[\-:]([a-z])/g;function Rl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nl,Rl);me[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nl,Rl);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nl,Rl);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Al(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rm(t,n,i,r)&&(n=null),r||i===null?Pm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Mt=Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ki=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),Ol=Symbol.for("react.strict_mode"),Ta=Symbol.for("react.profiler"),pf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),Ll=Symbol.for("react.forward_ref"),ja=Symbol.for("react.suspense"),Pa=Symbol.for("react.suspense_list"),Dl=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),gf=Symbol.for("react.offscreen"),nu=Symbol.iterator;function Ar(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Hs;function Gr(e){if(Hs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hs=t&&t[1]||""}return`
`+Hs+e}var Vs=!1;function Gs(e,t){if(!e||Vs)return"";Vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Vs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gr(e):""}function Am(e){switch(e.tag){case 5:return Gr(e.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return e=Gs(e.type,!1),e;case 11:return e=Gs(e.type.render,!1),e;case 1:return e=Gs(e.type,!0),e;default:return""}}function Na(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Vn:return"Portal";case Ta:return"Profiler";case Ol:return"StrictMode";case ja:return"Suspense";case Pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hf:return(e.displayName||"Context")+".Consumer";case pf:return(e._context.displayName||"Context")+".Provider";case Ll:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Dl:return t=e.displayName||null,t!==null?t:Na(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return Na(e(t))}catch{}}return null}function Om(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Na(t);case 8:return t===Ol?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lm(e){var t=mf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qi(e){e._valueTracker||(e._valueTracker=Lm(e))}function vf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function No(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ra(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ru(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yf(e,t){t=t.checked,t!=null&&Al(e,"checked",t,!1)}function Aa(e,t){yf(e,t);var n=ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oa(e,t.type,ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oa(e,t,n){(t!=="number"||No(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kr=Array.isArray;function rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function La(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Kr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ln(n)}}function xf(e,t){var n=ln(t.value),r=ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Da(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yi,bf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yi=Yi||document.createElement("div"),Yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ci(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dm=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(e){Dm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jr[t]=Jr[e]})});function Sf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jr.hasOwnProperty(e)&&Jr[e]?(""+t).trim():t+"px"}function kf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var zm=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function za(e,t){if(t){if(zm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Ma(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fa=null;function zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ua=null,ir=null,or=null;function au(e){if(e=Ni(e)){if(typeof Ua!="function")throw Error(_(280));var t=e.stateNode;t&&(t=gs(t),Ua(e.stateNode,e.type,t))}}function _f(e){ir?or?or.push(e):or=[e]:ir=e}function Cf(){if(ir){var e=ir,t=or;if(or=ir=null,au(e),t)for(e=0;e<t.length;e++)au(t[e])}}function Ef(e,t){return e(t)}function If(){}var Ks=!1;function Tf(e,t,n){if(Ks)return e(t,n);Ks=!0;try{return Ef(e,t,n)}finally{Ks=!1,(ir!==null||or!==null)&&(If(),Cf())}}function ui(e,t){var n=e.stateNode;if(n===null)return null;var r=gs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Ba=!1;if(Pt)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Ba=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Ba=!1}function Mm(e,t,n,r,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var qr=!1,Ro=null,Ao=!1,Wa=null,Fm={onError:function(e){qr=!0,Ro=e}};function Um(e,t,n,r,i,o,s,l,c){qr=!1,Ro=null,Mm.apply(Fm,arguments)}function Bm(e,t,n,r,i,o,s,l,c){if(Um.apply(this,arguments),qr){if(qr){var u=Ro;qr=!1,Ro=null}else throw Error(_(198));Ao||(Ao=!0,Wa=u)}}function Ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lu(e){if(Ln(e)!==e)throw Error(_(188))}function Wm(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return lu(i),e;if(o===r)return lu(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Pf(e){return e=Wm(e),e!==null?Nf(e):null}function Nf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nf(e);if(t!==null)return t;e=e.sibling}return null}var Rf=ze.unstable_scheduleCallback,cu=ze.unstable_cancelCallback,$m=ze.unstable_shouldYield,Hm=ze.unstable_requestPaint,ie=ze.unstable_now,Vm=ze.unstable_getCurrentPriorityLevel,Ml=ze.unstable_ImmediatePriority,Af=ze.unstable_UserBlockingPriority,Oo=ze.unstable_NormalPriority,Gm=ze.unstable_LowPriority,Of=ze.unstable_IdlePriority,ds=null,ft=null;function Km(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(ds,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Jm,Qm=Math.log,Ym=Math.LN2;function Jm(e){return e>>>=0,e===0?32:31-(Qm(e)/Ym|0)|0}var Ji=64,qi=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Qr(l):(o&=s,o!==0&&(r=Qr(o)))}else s=n&~i,s!==0?r=Qr(s):o!==0&&(r=Qr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),i=1<<n,r|=e[n],t&=~i;return r}function qm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-nt(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=qm(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function $a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lf(){var e=Ji;return Ji<<=1,!(Ji&4194240)&&(Ji=64),e}function Qs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ji(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function Zm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-nt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Fl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var K=0;function Df(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zf,Ul,Mf,Ff,Uf,Ha=!1,Xi=[],qt=null,Xt=null,Zt=null,di=new Map,fi=new Map,$t=[],ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uu(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(t.pointerId)}}function Lr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ni(t),t!==null&&Ul(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tv(e,t,n,r,i){switch(t){case"focusin":return qt=Lr(qt,e,t,n,r,i),!0;case"dragenter":return Xt=Lr(Xt,e,t,n,r,i),!0;case"mouseover":return Zt=Lr(Zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return di.set(o,Lr(di.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fi.set(o,Lr(fi.get(o)||null,e,t,n,r,i)),!0}return!1}function Bf(e){var t=bn(e.target);if(t!==null){var n=Ln(t);if(n!==null){if(t=n.tag,t===13){if(t=jf(n),t!==null){e.blockedOn=t,Uf(e.priority,function(){Mf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fa=r,n.target.dispatchEvent(r),Fa=null}else return t=Ni(n),t!==null&&Ul(t),e.blockedOn=n,!1;t.shift()}return!0}function du(e,t,n){mo(e)&&n.delete(t)}function nv(){Ha=!1,qt!==null&&mo(qt)&&(qt=null),Xt!==null&&mo(Xt)&&(Xt=null),Zt!==null&&mo(Zt)&&(Zt=null),di.forEach(du),fi.forEach(du)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ha||(Ha=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,nv)))}function pi(e){function t(i){return Dr(i,e)}if(0<Xi.length){Dr(Xi[0],e);for(var n=1;n<Xi.length;n++){var r=Xi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&Dr(qt,e),Xt!==null&&Dr(Xt,e),Zt!==null&&Dr(Zt,e),di.forEach(t),fi.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)Bf(n),n.blockedOn===null&&$t.shift()}var sr=Mt.ReactCurrentBatchConfig,Do=!0;function rv(e,t,n,r){var i=K,o=sr.transition;sr.transition=null;try{K=1,Bl(e,t,n,r)}finally{K=i,sr.transition=o}}function iv(e,t,n,r){var i=K,o=sr.transition;sr.transition=null;try{K=4,Bl(e,t,n,r)}finally{K=i,sr.transition=o}}function Bl(e,t,n,r){if(Do){var i=Va(e,t,n,r);if(i===null)ia(e,t,r,zo,n),uu(e,r);else if(tv(i,e,t,n,r))r.stopPropagation();else if(uu(e,r),t&4&&-1<ev.indexOf(e)){for(;i!==null;){var o=Ni(i);if(o!==null&&zf(o),o=Va(e,t,n,r),o===null&&ia(e,t,r,zo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ia(e,t,r,null,n)}}var zo=null;function Va(e,t,n,r){if(zo=null,e=zl(r),e=bn(e),e!==null)if(t=Ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zo=e,null}function Wf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vm()){case Ml:return 1;case Af:return 4;case Oo:case Gm:return 16;case Of:return 536870912;default:return 16}default:return 16}}var Kt=null,Wl=null,vo=null;function $f(){if(vo)return vo;var e,t=Wl,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return vo=i.slice(e,1<r?1-r:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function fu(){return!1}function Fe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zi:fu,this.isPropagationStopped=fu,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Fe(_r),Pi=ne({},_r,{view:0,detail:0}),ov=Fe(Pi),Ys,Js,zr,fs=ne({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Ys=e.screenX-zr.screenX,Js=e.screenY-zr.screenY):Js=Ys=0,zr=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Js}}),pu=Fe(fs),sv=ne({},fs,{dataTransfer:0}),av=Fe(sv),lv=ne({},Pi,{relatedTarget:0}),qs=Fe(lv),cv=ne({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=Fe(cv),dv=ne({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fv=Fe(dv),pv=ne({},_r,{data:0}),hu=Fe(pv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mv[e])?!!t[e]:!1}function Hl(){return vv}var yv=ne({},Pi,{key:function(e){if(e.key){var t=hv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hl,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xv=Fe(yv),wv=ne({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=Fe(wv),bv=ne({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hl}),Sv=Fe(bv),kv=ne({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),_v=Fe(kv),Cv=ne({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ev=Fe(Cv),Iv=[9,13,27,32],Vl=Pt&&"CompositionEvent"in window,Xr=null;Pt&&"documentMode"in document&&(Xr=document.documentMode);var Tv=Pt&&"TextEvent"in window&&!Xr,Hf=Pt&&(!Vl||Xr&&8<Xr&&11>=Xr),mu=" ",vu=!1;function Vf(e,t){switch(e){case"keyup":return Iv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function jv(e,t){switch(e){case"compositionend":return Gf(t);case"keypress":return t.which!==32?null:(vu=!0,mu);case"textInput":return e=t.data,e===mu&&vu?null:e;default:return null}}function Pv(e,t){if(Kn)return e==="compositionend"||!Vl&&Vf(e,t)?(e=$f(),vo=Wl=Kt=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hf&&t.locale!=="ko"?null:t.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nv[e.type]:t==="textarea"}function Kf(e,t,n,r){_f(r),t=Mo(t,"onChange"),0<t.length&&(n=new $l("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zr=null,hi=null;function Rv(e){ip(e,0)}function ps(e){var t=Jn(e);if(vf(t))return e}function Av(e,t){if(e==="change")return t}var Qf=!1;if(Pt){var Xs;if(Pt){var Zs="oninput"in document;if(!Zs){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),Zs=typeof xu.oninput=="function"}Xs=Zs}else Xs=!1;Qf=Xs&&(!document.documentMode||9<document.documentMode)}function wu(){Zr&&(Zr.detachEvent("onpropertychange",Yf),hi=Zr=null)}function Yf(e){if(e.propertyName==="value"&&ps(hi)){var t=[];Kf(t,hi,e,zl(e)),Tf(Rv,t)}}function Ov(e,t,n){e==="focusin"?(wu(),Zr=t,hi=n,Zr.attachEvent("onpropertychange",Yf)):e==="focusout"&&wu()}function Lv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ps(hi)}function Dv(e,t){if(e==="click")return ps(t)}function zv(e,t){if(e==="input"||e==="change")return ps(t)}function Mv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Mv;function gi(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ia.call(t,i)||!ot(e[i],t[i]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Su(e,t){var n=bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bu(n)}}function Jf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qf(){for(var e=window,t=No();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=No(e.document)}return t}function Gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fv(e){var t=qf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jf(n.ownerDocument.documentElement,n)){if(r!==null&&Gl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Su(n,o);var s=Su(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uv=Pt&&"documentMode"in document&&11>=document.documentMode,Qn=null,Ga=null,ei=null,Ka=!1;function ku(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ka||Qn==null||Qn!==No(r)||(r=Qn,"selectionStart"in r&&Gl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ei&&gi(ei,r)||(ei=r,r=Mo(Ga,"onSelect"),0<r.length&&(t=new $l("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qn)))}function eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},ea={},Xf={};Pt&&(Xf=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function hs(e){if(ea[e])return ea[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xf)return ea[e]=t[n];return e}var Zf=hs("animationend"),ep=hs("animationiteration"),tp=hs("animationstart"),np=hs("transitionend"),rp=new Map,_u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){rp.set(e,t),On(t,[e])}for(var ta=0;ta<_u.length;ta++){var na=_u[ta],Bv=na.toLowerCase(),Wv=na[0].toUpperCase()+na.slice(1);un(Bv,"on"+Wv)}un(Zf,"onAnimationEnd");un(ep,"onAnimationIteration");un(tp,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(np,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$v=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function Cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bm(r,t,void 0,e),e.currentTarget=null}function ip(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Cu(i,l,u),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Cu(i,l,u),o=c}}}if(Ao)throw e=Wa,Ao=!1,Wa=null,e}function q(e,t){var n=t[Xa];n===void 0&&(n=t[Xa]=new Set);var r=e+"__bubble";n.has(r)||(op(t,e,2,!1),n.add(r))}function ra(e,t,n){var r=0;t&&(r|=4),op(n,e,r,t)}var to="_reactListening"+Math.random().toString(36).slice(2);function mi(e){if(!e[to]){e[to]=!0,ff.forEach(function(n){n!=="selectionchange"&&($v.has(n)||ra(n,!1,e),ra(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[to]||(t[to]=!0,ra("selectionchange",!1,t))}}function op(e,t,n,r){switch(Wf(t)){case 1:var i=rv;break;case 4:i=iv;break;default:i=Bl}n=i.bind(null,t,n,e),i=void 0,!Ba||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ia(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=bn(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Tf(function(){var u=o,p=zl(n),h=[];e:{var d=rp.get(e);if(d!==void 0){var x=$l,b=e;switch(e){case"keypress":if(yo(n)===0)break e;case"keydown":case"keyup":x=xv;break;case"focusin":b="focus",x=qs;break;case"focusout":b="blur",x=qs;break;case"beforeblur":case"afterblur":x=qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Sv;break;case Zf:case ep:case tp:x=uv;break;case np:x=_v;break;case"scroll":x=ov;break;case"wheel":x=Ev;break;case"copy":case"cut":case"paste":x=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=gu}var S=(t&4)!==0,R=!S&&e==="scroll",g=S?d!==null?d+"Capture":null:d;S=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=ui(f,g),w!=null&&S.push(vi(f,w,m)))),R)break;f=f.return}0<S.length&&(d=new x(d,b,null,n,p),h.push({event:d,listeners:S}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",d&&n!==Fa&&(b=n.relatedTarget||n.fromElement)&&(bn(b)||b[Nt]))break e;if((x||d)&&(d=p.window===p?p:(d=p.ownerDocument)?d.defaultView||d.parentWindow:window,x?(b=n.relatedTarget||n.toElement,x=u,b=b?bn(b):null,b!==null&&(R=Ln(b),b!==R||b.tag!==5&&b.tag!==6)&&(b=null)):(x=null,b=u),x!==b)){if(S=pu,w="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=gu,w="onPointerLeave",g="onPointerEnter",f="pointer"),R=x==null?d:Jn(x),m=b==null?d:Jn(b),d=new S(w,f+"leave",x,n,p),d.target=R,d.relatedTarget=m,w=null,bn(p)===u&&(S=new S(g,f+"enter",b,n,p),S.target=m,S.relatedTarget=R,w=S),R=w,x&&b)t:{for(S=x,g=b,f=0,m=S;m;m=Un(m))f++;for(m=0,w=g;w;w=Un(w))m++;for(;0<f-m;)S=Un(S),f--;for(;0<m-f;)g=Un(g),m--;for(;f--;){if(S===g||g!==null&&S===g.alternate)break t;S=Un(S),g=Un(g)}S=null}else S=null;x!==null&&Eu(h,d,x,S,!1),b!==null&&R!==null&&Eu(h,R,b,S,!0)}}e:{if(d=u?Jn(u):window,x=d.nodeName&&d.nodeName.toLowerCase(),x==="select"||x==="input"&&d.type==="file")var C=Av;else if(yu(d))if(Qf)C=zv;else{C=Lv;var E=Ov}else(x=d.nodeName)&&x.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=Dv);if(C&&(C=C(e,u))){Kf(h,C,n,p);break e}E&&E(e,d,u),e==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&Oa(d,"number",d.value)}switch(E=u?Jn(u):window,e){case"focusin":(yu(E)||E.contentEditable==="true")&&(Qn=E,Ga=u,ei=null);break;case"focusout":ei=Ga=Qn=null;break;case"mousedown":Ka=!0;break;case"contextmenu":case"mouseup":case"dragend":Ka=!1,ku(h,n,p);break;case"selectionchange":if(Uv)break;case"keydown":case"keyup":ku(h,n,p)}var j;if(Vl)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Kn?Vf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Hf&&n.locale!=="ko"&&(Kn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Kn&&(j=$f()):(Kt=p,Wl="value"in Kt?Kt.value:Kt.textContent,Kn=!0)),E=Mo(u,T),0<E.length&&(T=new hu(T,e,null,n,p),h.push({event:T,listeners:E}),j?T.data=j:(j=Gf(n),j!==null&&(T.data=j)))),(j=Tv?jv(e,n):Pv(e,n))&&(u=Mo(u,"onBeforeInput"),0<u.length&&(p=new hu("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=j))}ip(h,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ui(e,n),o!=null&&r.unshift(vi(e,o,i)),o=ui(e,t),o!=null&&r.push(vi(e,o,i))),e=e.return}return r}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=ui(n,o),c!=null&&s.unshift(vi(n,c,l))):i||(c=ui(n,o),c!=null&&s.push(vi(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Hv=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function Iu(e){return(typeof e=="string"?e:""+e).replace(Hv,`
`).replace(Vv,"")}function no(e,t,n){if(t=Iu(t),Iu(e)!==t&&n)throw Error(_(425))}function Fo(){}var Qa=null,Ya=null;function Ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,Gv=typeof clearTimeout=="function"?clearTimeout:void 0,Tu=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof Tu<"u"?function(e){return Tu.resolve(null).then(e).catch(Qv)}:qa;function Qv(e){setTimeout(function(){throw e})}function oa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pi(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),ut="__reactFiber$"+Cr,yi="__reactProps$"+Cr,Nt="__reactContainer$"+Cr,Xa="__reactEvents$"+Cr,Yv="__reactListeners$"+Cr,Jv="__reactHandles$"+Cr;function bn(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ju(e);e!==null;){if(n=e[ut])return n;e=ju(e)}return t}e=n,n=e.parentNode}return null}function Ni(e){return e=e[ut]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function gs(e){return e[yi]||null}var Za=[],qn=-1;function dn(e){return{current:e}}function X(e){0>qn||(e.current=Za[qn],Za[qn]=null,qn--)}function Y(e,t){qn++,Za[qn]=e.current,e.current=t}var cn={},we=dn(cn),je=dn(!1),jn=cn;function hr(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(e){return e=e.childContextTypes,e!=null}function Uo(){X(je),X(we)}function Pu(e,t,n){if(we.current!==cn)throw Error(_(168));Y(we,t),Y(je,n)}function sp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,Om(e)||"Unknown",i));return ne({},n,r)}function Bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,jn=we.current,Y(we,e),Y(je,je.current),!0}function Nu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=sp(e,t,jn),r.__reactInternalMemoizedMergedChildContext=e,X(je),X(we),Y(we,e)):X(je),Y(je,n)}var St=null,ms=!1,sa=!1;function ap(e){St===null?St=[e]:St.push(e)}function qv(e){ms=!0,ap(e)}function fn(){if(!sa&&St!==null){sa=!0;var e=0,t=K;try{var n=St;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,ms=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),Rf(Ml,fn),i}finally{K=t,sa=!1}}return null}var Xn=[],Zn=0,Wo=null,$o=0,We=[],$e=0,Pn=null,Ct=1,Et="";function yn(e,t){Xn[Zn++]=$o,Xn[Zn++]=Wo,Wo=e,$o=t}function lp(e,t,n){We[$e++]=Ct,We[$e++]=Et,We[$e++]=Pn,Pn=e;var r=Ct;e=Et;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var o=32-nt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ct=1<<32-nt(t)+i|n<<i|r,Et=o+e}else Ct=1<<o|n<<i|r,Et=e}function Kl(e){e.return!==null&&(yn(e,1),lp(e,1,0))}function Ql(e){for(;e===Wo;)Wo=Xn[--Zn],Xn[Zn]=null,$o=Xn[--Zn],Xn[Zn]=null;for(;e===Pn;)Pn=We[--$e],We[$e]=null,Et=We[--$e],We[$e]=null,Ct=We[--$e],We[$e]=null}var De=null,Le=null,Z=!1,et=null;function cp(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ru(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Le=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Ct,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Le=null,!0):!1;default:return!1}}function el(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tl(e){if(Z){var t=Le;if(t){var n=t;if(!Ru(e,t)){if(el(e))throw Error(_(418));t=en(n.nextSibling);var r=De;t&&Ru(e,t)?cp(r,n):(e.flags=e.flags&-4097|2,Z=!1,De=e)}}else{if(el(e))throw Error(_(418));e.flags=e.flags&-4097|2,Z=!1,De=e}}}function Au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function ro(e){if(e!==De)return!1;if(!Z)return Au(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ja(e.type,e.memoizedProps)),t&&(t=Le)){if(el(e))throw up(),Error(_(418));for(;t;)cp(e,t),t=en(t.nextSibling)}if(Au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=De?en(e.stateNode.nextSibling):null;return!0}function up(){for(var e=Le;e;)e=en(e.nextSibling)}function gr(){Le=De=null,Z=!1}function Yl(e){et===null?et=[e]:et.push(e)}var Xv=Mt.ReactCurrentBatchConfig;function Mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function io(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ou(e){var t=e._init;return t(e._payload)}function dp(e){function t(g,f){if(e){var m=g.deletions;m===null?(g.deletions=[f],g.flags|=16):m.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=on(g,f),g.index=0,g.sibling=null,g}function o(g,f,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<f?(g.flags|=2,f):m):(g.flags|=2,f)):(g.flags|=1048576,f)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,f,m,w){return f===null||f.tag!==6?(f=pa(m,g.mode,w),f.return=g,f):(f=i(f,m),f.return=g,f)}function c(g,f,m,w){var C=m.type;return C===Gn?p(g,f,m.props.children,w,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bt&&Ou(C)===f.type)?(w=i(f,m.props),w.ref=Mr(g,f,m),w.return=g,w):(w=Co(m.type,m.key,m.props,null,g.mode,w),w.ref=Mr(g,f,m),w.return=g,w)}function u(g,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ha(m,g.mode,w),f.return=g,f):(f=i(f,m.children||[]),f.return=g,f)}function p(g,f,m,w,C){return f===null||f.tag!==7?(f=En(m,g.mode,w,C),f.return=g,f):(f=i(f,m),f.return=g,f)}function h(g,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=pa(""+f,g.mode,m),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ki:return m=Co(f.type,f.key,f.props,null,g.mode,m),m.ref=Mr(g,null,f),m.return=g,m;case Vn:return f=ha(f,g.mode,m),f.return=g,f;case Bt:var w=f._init;return h(g,w(f._payload),m)}if(Kr(f)||Ar(f))return f=En(f,g.mode,m,null),f.return=g,f;io(g,f)}return null}function d(g,f,m,w){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:l(g,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ki:return m.key===C?c(g,f,m,w):null;case Vn:return m.key===C?u(g,f,m,w):null;case Bt:return C=m._init,d(g,f,C(m._payload),w)}if(Kr(m)||Ar(m))return C!==null?null:p(g,f,m,w,null);io(g,m)}return null}function x(g,f,m,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,l(f,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ki:return g=g.get(w.key===null?m:w.key)||null,c(f,g,w,C);case Vn:return g=g.get(w.key===null?m:w.key)||null,u(f,g,w,C);case Bt:var E=w._init;return x(g,f,m,E(w._payload),C)}if(Kr(w)||Ar(w))return g=g.get(m)||null,p(f,g,w,C,null);io(f,w)}return null}function b(g,f,m,w){for(var C=null,E=null,j=f,T=f=0,H=null;j!==null&&T<m.length;T++){j.index>T?(H=j,j=null):H=j.sibling;var P=d(g,j,m[T],w);if(P===null){j===null&&(j=H);break}e&&j&&P.alternate===null&&t(g,j),f=o(P,f,T),E===null?C=P:E.sibling=P,E=P,j=H}if(T===m.length)return n(g,j),Z&&yn(g,T),C;if(j===null){for(;T<m.length;T++)j=h(g,m[T],w),j!==null&&(f=o(j,f,T),E===null?C=j:E.sibling=j,E=j);return Z&&yn(g,T),C}for(j=r(g,j);T<m.length;T++)H=x(j,g,T,m[T],w),H!==null&&(e&&H.alternate!==null&&j.delete(H.key===null?T:H.key),f=o(H,f,T),E===null?C=H:E.sibling=H,E=H);return e&&j.forEach(function(se){return t(g,se)}),Z&&yn(g,T),C}function S(g,f,m,w){var C=Ar(m);if(typeof C!="function")throw Error(_(150));if(m=C.call(m),m==null)throw Error(_(151));for(var E=C=null,j=f,T=f=0,H=null,P=m.next();j!==null&&!P.done;T++,P=m.next()){j.index>T?(H=j,j=null):H=j.sibling;var se=d(g,j,P.value,w);if(se===null){j===null&&(j=H);break}e&&j&&se.alternate===null&&t(g,j),f=o(se,f,T),E===null?C=se:E.sibling=se,E=se,j=H}if(P.done)return n(g,j),Z&&yn(g,T),C;if(j===null){for(;!P.done;T++,P=m.next())P=h(g,P.value,w),P!==null&&(f=o(P,f,T),E===null?C=P:E.sibling=P,E=P);return Z&&yn(g,T),C}for(j=r(g,j);!P.done;T++,P=m.next())P=x(j,g,T,P.value,w),P!==null&&(e&&P.alternate!==null&&j.delete(P.key===null?T:P.key),f=o(P,f,T),E===null?C=P:E.sibling=P,E=P);return e&&j.forEach(function(fe){return t(g,fe)}),Z&&yn(g,T),C}function R(g,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Gn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ki:e:{for(var C=m.key,E=f;E!==null;){if(E.key===C){if(C=m.type,C===Gn){if(E.tag===7){n(g,E.sibling),f=i(E,m.props.children),f.return=g,g=f;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bt&&Ou(C)===E.type){n(g,E.sibling),f=i(E,m.props),f.ref=Mr(g,E,m),f.return=g,g=f;break e}n(g,E);break}else t(g,E);E=E.sibling}m.type===Gn?(f=En(m.props.children,g.mode,w,m.key),f.return=g,g=f):(w=Co(m.type,m.key,m.props,null,g.mode,w),w.ref=Mr(g,f,m),w.return=g,g=w)}return s(g);case Vn:e:{for(E=m.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(g,f.sibling),f=i(f,m.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=ha(m,g.mode,w),f.return=g,g=f}return s(g);case Bt:return E=m._init,R(g,f,E(m._payload),w)}if(Kr(m))return b(g,f,m,w);if(Ar(m))return S(g,f,m,w);io(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,m),f.return=g,g=f):(n(g,f),f=pa(m,g.mode,w),f.return=g,g=f),s(g)):n(g,f)}return R}var mr=dp(!0),fp=dp(!1),Ho=dn(null),Vo=null,er=null,Jl=null;function ql(){Jl=er=Vo=null}function Xl(e){var t=Ho.current;X(Ho),e._currentValue=t}function nl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){Vo=e,Jl=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(Jl!==e)if(e={context:e,memoizedValue:t,next:null},er===null){if(Vo===null)throw Error(_(308));er=e,Vo.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return t}var Sn=null;function Zl(e){Sn===null?Sn=[e]:Sn.push(e)}function pp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Zl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rt(e,n)}return i=r.interleaved,i===null?(t.next=t,Zl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rt(e,n)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fl(e,n)}}function Lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,r){var i=e.updateQueue;Wt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;s=0,p=u=c=null,l=o;do{var d=l.lane,x=l.eventTime;if((r&d)===d){p!==null&&(p=p.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,S=l;switch(d=t,x=n,S.tag){case 1:if(b=S.payload,typeof b=="function"){h=b.call(x,h,d);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=S.payload,d=typeof b=="function"?b.call(x,h,d):b,d==null)break e;h=ne({},h,d);break e;case 2:Wt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else x={eventTime:x,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=x,c=h):p=p.next=x,s|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(p===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Rn|=s,e.lanes=s,e.memoizedState=h}}function Du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Ri={},pt=dn(Ri),xi=dn(Ri),wi=dn(Ri);function kn(e){if(e===Ri)throw Error(_(174));return e}function tc(e,t){switch(Y(wi,t),Y(xi,e),Y(pt,Ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Da(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Da(t,e)}X(pt),Y(pt,t)}function vr(){X(pt),X(xi),X(wi)}function gp(e){kn(wi.current);var t=kn(pt.current),n=Da(t,e.type);t!==n&&(Y(xi,e),Y(pt,n))}function nc(e){xi.current===e&&(X(pt),X(xi))}var ee=dn(0);function Ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var aa=[];function rc(){for(var e=0;e<aa.length;e++)aa[e]._workInProgressVersionPrimary=null;aa.length=0}var wo=Mt.ReactCurrentDispatcher,la=Mt.ReactCurrentBatchConfig,Nn=0,te=null,ae=null,ce=null,Qo=!1,ti=!1,bi=0,Zv=0;function ve(){throw Error(_(321))}function ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function oc(e,t,n,r,i,o){if(Nn=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wo.current=e===null||e.memoizedState===null?ry:iy,e=n(r,i),ti){o=0;do{if(ti=!1,bi=0,25<=o)throw Error(_(301));o+=1,ce=ae=null,t.updateQueue=null,wo.current=oy,e=n(r,i)}while(ti)}if(wo.current=Yo,t=ae!==null&&ae.next!==null,Nn=0,ce=ae=te=null,Qo=!1,t)throw Error(_(300));return e}function sc(){var e=bi!==0;return bi=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?te.memoizedState=ce=e:ce=ce.next=e,ce}function Ke(){if(ae===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ce===null?te.memoizedState:ce.next;if(t!==null)ce=t,ae=e;else{if(e===null)throw Error(_(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?te.memoizedState=ce=e:ce=ce.next=e}return ce}function Si(e,t){return typeof t=="function"?t(e):t}function ca(e){var t=Ke(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var p=u.lane;if((Nn&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,s=r):c=c.next=h,te.lanes|=p,Rn|=p}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=l,ot(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,te.lanes|=o,Rn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ua(e){var t=Ke(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ot(o,t.memoizedState)||(Te=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function mp(){}function vp(e,t){var n=te,r=Ke(),i=t(),o=!ot(r.memoizedState,i);if(o&&(r.memoizedState=i,Te=!0),r=r.queue,ac(wp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,ki(9,xp.bind(null,n,r,i,t),void 0,null),de===null)throw Error(_(349));Nn&30||yp(n,t,i)}return i}function yp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xp(e,t,n,r){t.value=n,t.getSnapshot=r,bp(t)&&Sp(e)}function wp(e,t,n){return n(function(){bp(t)&&Sp(e)})}function bp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Sp(e){var t=Rt(e,1);t!==null&&rt(t,e,1,-1)}function zu(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:e},t.queue=e,e=e.dispatch=ny.bind(null,te,e),[t.memoizedState,e]}function ki(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kp(){return Ke().memoizedState}function bo(e,t,n,r){var i=ct();te.flags|=e,i.memoizedState=ki(1|t,n,void 0,r===void 0?null:r)}function vs(e,t,n,r){var i=Ke();r=r===void 0?null:r;var o=void 0;if(ae!==null){var s=ae.memoizedState;if(o=s.destroy,r!==null&&ic(r,s.deps)){i.memoizedState=ki(t,n,o,r);return}}te.flags|=e,i.memoizedState=ki(1|t,n,o,r)}function Mu(e,t){return bo(8390656,8,e,t)}function ac(e,t){return vs(2048,8,e,t)}function _p(e,t){return vs(4,2,e,t)}function Cp(e,t){return vs(4,4,e,t)}function Ep(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ip(e,t,n){return n=n!=null?n.concat([e]):null,vs(4,4,Ep.bind(null,t,e),n)}function lc(){}function Tp(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ic(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jp(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ic(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pp(e,t,n){return Nn&21?(ot(n,t)||(n=Lf(),te.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function ey(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=la.transition;la.transition={};try{e(!1),t()}finally{K=n,la.transition=r}}function Np(){return Ke().memoizedState}function ty(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rp(e))Ap(t,n);else if(n=pp(e,t,n,r),n!==null){var i=ke();rt(n,e,r,i),Op(n,t,r)}}function ny(e,t,n){var r=rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rp(e))Ap(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,ot(l,s)){var c=t.interleaved;c===null?(i.next=i,Zl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=pp(e,t,i,r),n!==null&&(i=ke(),rt(n,e,r,i),Op(n,t,r))}}function Rp(e){var t=e.alternate;return e===te||t!==null&&t===te}function Ap(e,t){ti=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Op(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fl(e,n)}}var Yo={readContext:Ge,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},ry={readContext:Ge,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Mu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bo(4194308,4,Ep.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bo(4194308,4,e,t)},useInsertionEffect:function(e,t){return bo(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ty.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:lc,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=ey.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,i=ct();if(Z){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),de===null)throw Error(_(349));Nn&30||yp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Mu(wp.bind(null,r,o,e),[e]),r.flags|=2048,ki(9,xp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ct(),t=de.identifierPrefix;if(Z){var n=Et,r=Ct;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},iy={readContext:Ge,useCallback:Tp,useContext:Ge,useEffect:ac,useImperativeHandle:Ip,useInsertionEffect:_p,useLayoutEffect:Cp,useMemo:jp,useReducer:ca,useRef:kp,useState:function(){return ca(Si)},useDebugValue:lc,useDeferredValue:function(e){var t=Ke();return Pp(t,ae.memoizedState,e)},useTransition:function(){var e=ca(Si)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:mp,useSyncExternalStore:vp,useId:Np,unstable_isNewReconciler:!1},oy={readContext:Ge,useCallback:Tp,useContext:Ge,useEffect:ac,useImperativeHandle:Ip,useInsertionEffect:_p,useLayoutEffect:Cp,useMemo:jp,useReducer:ua,useRef:kp,useState:function(){return ua(Si)},useDebugValue:lc,useDeferredValue:function(e){var t=Ke();return ae===null?t.memoizedState=e:Pp(t,ae.memoizedState,e)},useTransition:function(){var e=ua(Si)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:mp,useSyncExternalStore:vp,useId:Np,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ys={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=rn(e),o=jt(r,i);o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(rt(t,e,i,r),xo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=rn(e),o=jt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(rt(t,e,i,r),xo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=rn(e),i=jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=tn(e,i,r),t!==null&&(rt(t,e,r,n),xo(t,e,r))}};function Fu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!gi(n,r)||!gi(i,o):!0}function Lp(e,t,n){var r=!1,i=cn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(i=Pe(t)?jn:we.current,r=t.contextTypes,o=(r=r!=null)?hr(e,i):cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ys,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Uu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function il(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ec(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ge(o):(o=Pe(t)?jn:we.current,i.context=hr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(rl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ys.enqueueReplaceState(i,i.state,null),Go(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yr(e,t){try{var n="",r=t;do n+=Am(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function da(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sy=typeof WeakMap=="function"?WeakMap:Map;function Dp(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qo||(qo=!0,gl=r),ol(e,t)},n}function zp(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ol(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ol(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=wy.bind(null,e,t,n),t.then(e,e))}function Wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $u(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var ay=Mt.ReactCurrentOwner,Te=!1;function Se(e,t,n,r){t.child=e===null?fp(t,null,n,r):mr(t,e.child,n,r)}function Hu(e,t,n,r,i){n=n.render;var o=t.ref;return ar(t,i),r=oc(e,t,n,r,o,i),n=sc(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(Z&&n&&Kl(t),t.flags|=1,Se(e,t,r,i),t.child)}function Vu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!mc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mp(e,t,o,r,i)):(e=Co(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:gi,n(s,r)&&e.ref===t.ref)return At(e,t,i)}return t.flags|=1,e=on(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(gi(o,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,At(e,t,i)}return sl(e,t,n,r,i)}function Fp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(nr,Ae),Ae|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(nr,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(nr,Ae),Ae|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(nr,Ae),Ae|=r;return Se(e,t,i,n),t.child}function Up(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function sl(e,t,n,r,i){var o=Pe(n)?jn:we.current;return o=hr(t,o),ar(t,i),n=oc(e,t,n,r,o,i),r=sc(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(Z&&r&&Kl(t),t.flags|=1,Se(e,t,n,i),t.child)}function Gu(e,t,n,r,i){if(Pe(n)){var o=!0;Bo(t)}else o=!1;if(ar(t,i),t.stateNode===null)So(e,t),Lp(t,n,r),il(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=Pe(n)?jn:we.current,u=hr(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Uu(t,s,r,u),Wt=!1;var d=t.memoizedState;s.state=d,Go(t,r,s,i),c=t.memoizedState,l!==r||d!==c||je.current||Wt?(typeof p=="function"&&(rl(t,n,p,r),c=t.memoizedState),(l=Wt||Fu(t,n,l,r,d,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,hp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Xe(t.type,l),s.props=u,h=t.pendingProps,d=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ge(c):(c=Pe(n)?jn:we.current,c=hr(t,c));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||d!==c)&&Uu(t,s,r,c),Wt=!1,d=t.memoizedState,s.state=d,Go(t,r,s,i);var b=t.memoizedState;l!==h||d!==b||je.current||Wt?(typeof x=="function"&&(rl(t,n,x,r),b=t.memoizedState),(u=Wt||Fu(t,n,u,r,d,b,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),s.props=r,s.state=b,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return al(e,t,n,r,o,i)}function al(e,t,n,r,i,o){Up(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Nu(t,n,!1),At(e,t,o);r=t.stateNode,ay.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=mr(t,e.child,null,o),t.child=mr(t,null,l,o)):Se(e,t,l,o),t.memoizedState=r.state,i&&Nu(t,n,!0),t.child}function Bp(e){var t=e.stateNode;t.pendingContext?Pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pu(e,t.context,!1),tc(e,t.containerInfo)}function Ku(e,t,n,r,i){return gr(),Yl(i),t.flags|=256,Se(e,t,n,r),t.child}var ll={dehydrated:null,treeContext:null,retryLane:0};function cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wp(e,t,n){var r=t.pendingProps,i=ee.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(ee,i&1),e===null)return tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=bs(s,r,0,null),e=En(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=cl(n),t.memoizedState=ll,e):cc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ly(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=on(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=on(l,o):(o=En(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?cl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ll,r}return o=e.child,e=o.sibling,r=on(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cc(e,t){return t=bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oo(e,t,n,r){return r!==null&&Yl(r),mr(t,e.child,null,n),e=cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ly(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=da(Error(_(422))),oo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=bs({mode:"visible",children:r.children},i,0,null),o=En(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&mr(t,e.child,null,s),t.child.memoizedState=cl(s),t.memoizedState=ll,o);if(!(t.mode&1))return oo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(_(419)),r=da(o,r,void 0),oo(e,t,s,r)}if(l=(s&e.childLanes)!==0,Te||l){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Rt(e,i),rt(r,e,i,-1))}return gc(),r=da(Error(_(421))),oo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=by.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Le=en(i.nextSibling),De=t,Z=!0,et=null,e!==null&&(We[$e++]=Ct,We[$e++]=Et,We[$e++]=Pn,Ct=e.id,Et=e.overflow,Pn=t),t=cc(t,r.children),t.flags|=4096,t)}function Qu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),nl(e.return,t,n)}function fa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function $p(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Se(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qu(e,n,t);else if(e.tag===19)Qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ko(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ko(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fa(t,!0,n,null,o);break;case"together":fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function So(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cy(e,t,n){switch(t.tag){case 3:Bp(t),gr();break;case 5:gp(t);break;case 1:Pe(t.type)&&Bo(t);break;case 4:tc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(Ho,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?Wp(e,t,n):(Y(ee,ee.current&1),e=At(e,t,n),e!==null?e.sibling:null);Y(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $p(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Fp(e,t,n)}return At(e,t,n)}var Hp,ul,Vp,Gp;Hp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ul=function(){};Vp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(pt.current);var o=null;switch(n){case"input":i=Ra(e,i),r=Ra(e,r),o=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),o=[];break;case"textarea":i=La(e,i),r=La(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fo)}za(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(li.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(li.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&q("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Gp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uy(e,t,n){var r=t.pendingProps;switch(Ql(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Pe(t.type)&&Uo(),ye(t),null;case 3:return r=t.stateNode,vr(),X(je),X(we),rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(yl(et),et=null))),ul(e,t),ye(t),null;case 5:nc(t);var i=kn(wi.current);if(n=t.type,e!==null&&t.stateNode!=null)Vp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ye(t),null}if(e=kn(pt.current),ro(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ut]=t,r[yi]=o,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<Yr.length;i++)q(Yr[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":ru(r,o),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},q("invalid",r);break;case"textarea":ou(r,o),q("invalid",r)}za(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&no(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&no(r.textContent,l,e),i=["children",""+l]):li.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&q("scroll",r)}switch(n){case"input":Qi(r),iu(r,o,!0);break;case"textarea":Qi(r),su(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ut]=t,e[yi]=r,Hp(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ma(n,r),n){case"dialog":q("cancel",e),q("close",e),i=r;break;case"iframe":case"object":case"embed":q("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yr.length;i++)q(Yr[i],e);i=r;break;case"source":q("error",e),i=r;break;case"img":case"image":case"link":q("error",e),q("load",e),i=r;break;case"details":q("toggle",e),i=r;break;case"input":ru(e,r),i=Ra(e,r),q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),q("invalid",e);break;case"textarea":ou(e,r),i=La(e,r),q("invalid",e);break;default:i=r}za(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?kf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&bf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ci(e,c):typeof c=="number"&&ci(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(li.hasOwnProperty(o)?c!=null&&o==="onScroll"&&q("scroll",e):c!=null&&Al(e,o,c,s))}switch(n){case"input":Qi(e),iu(e,r,!1);break;case"textarea":Qi(e),su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ln(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?rr(e,!!r.multiple,o,!1):r.defaultValue!=null&&rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)Gp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=kn(wi.current),kn(pt.current),ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[ut]=t,(o=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:no(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=t,t.stateNode=r}return ye(t),null;case 13:if(X(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Le!==null&&t.mode&1&&!(t.flags&128))up(),gr(),t.flags|=98560,o=!1;else if(o=ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[ut]=t}else gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),o=!1}else et!==null&&(yl(et),et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?le===0&&(le=3):gc())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return vr(),ul(e,t),e===null&&mi(t.stateNode.containerInfo),ye(t),null;case 10:return Xl(t.type._context),ye(t),null;case 17:return Pe(t.type)&&Uo(),ye(t),null;case 19:if(X(ee),o=t.memoizedState,o===null)return ye(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Fr(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ko(e),s!==null){for(t.flags|=128,Fr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&ie()>xr&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ko(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Z)return ye(t),null}else 2*ie()-o.renderingStartTime>xr&&n!==1073741824&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ie(),t.sibling=null,n=ee.current,Y(ee,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return hc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function dy(e,t){switch(Ql(t),t.tag){case 1:return Pe(t.type)&&Uo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),X(je),X(we),rc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nc(t),null;case 13:if(X(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(ee),null;case 4:return vr(),null;case 10:return Xl(t.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var so=!1,xe=!1,fy=typeof WeakSet=="function"?WeakSet:Set,N=null;function tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function dl(e,t,n){try{n()}catch(r){re(e,t,r)}}var Yu=!1;function py(e,t){if(Qa=Do,e=qf(),Gl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,p=0,h=e,d=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(l=s+i),h!==o||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(x=h.firstChild)!==null;)d=h,h=x;for(;;){if(h===e)break t;if(d===n&&++u===i&&(l=s),d===o&&++p===r&&(c=s),(x=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ya={focusedElem:e,selectionRange:n},Do=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var S=b.memoizedProps,R=b.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:Xe(t.type,S),R);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){re(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return b=Yu,Yu=!1,b}function ni(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&dl(t,n,o)}i=i.next}while(i!==r)}}function xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kp(e){var t=e.alternate;t!==null&&(e.alternate=null,Kp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ut],delete t[yi],delete t[Xa],delete t[Yv],delete t[Jv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qp(e){return e.tag===5||e.tag===3||e.tag===4}function Ju(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fo));else if(r!==4&&(e=e.child,e!==null))for(pl(e,t,n),e=e.sibling;e!==null;)pl(e,t,n),e=e.sibling}function hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hl(e,t,n),e=e.sibling;e!==null;)hl(e,t,n),e=e.sibling}var he=null,Ze=!1;function Ft(e,t,n){for(n=n.child;n!==null;)Yp(e,t,n),n=n.sibling}function Yp(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(ds,n)}catch{}switch(n.tag){case 5:xe||tr(n,t);case 6:var r=he,i=Ze;he=null,Ft(e,t,n),he=r,Ze=i,he!==null&&(Ze?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Ze?(e=he,n=n.stateNode,e.nodeType===8?oa(e.parentNode,n):e.nodeType===1&&oa(e,n),pi(e)):oa(he,n.stateNode));break;case 4:r=he,i=Ze,he=n.stateNode.containerInfo,Ze=!0,Ft(e,t,n),he=r,Ze=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&dl(n,t,s),i=i.next}while(i!==r)}Ft(e,t,n);break;case 1:if(!xe&&(tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,t,l)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Ft(e,t,n),xe=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function qu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fy),t.forEach(function(r){var i=Sy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:he=l.stateNode,Ze=!1;break e;case 3:he=l.stateNode.containerInfo,Ze=!0;break e;case 4:he=l.stateNode.containerInfo,Ze=!0;break e}l=l.return}if(he===null)throw Error(_(160));Yp(o,s,i),he=null,Ze=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){re(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jp(t,e),t=t.sibling}function Jp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),lt(e),r&4){try{ni(3,e,e.return),xs(3,e)}catch(S){re(e,e.return,S)}try{ni(5,e,e.return)}catch(S){re(e,e.return,S)}}break;case 1:qe(t,e),lt(e),r&512&&n!==null&&tr(n,n.return);break;case 5:if(qe(t,e),lt(e),r&512&&n!==null&&tr(n,n.return),e.flags&32){var i=e.stateNode;try{ci(i,"")}catch(S){re(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&yf(i,o),Ma(l,s);var u=Ma(l,o);for(s=0;s<c.length;s+=2){var p=c[s],h=c[s+1];p==="style"?kf(i,h):p==="dangerouslySetInnerHTML"?bf(i,h):p==="children"?ci(i,h):Al(i,p,h,u)}switch(l){case"input":Aa(i,o);break;case"textarea":xf(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?rr(i,!!o.multiple,x,!1):d!==!!o.multiple&&(o.defaultValue!=null?rr(i,!!o.multiple,o.defaultValue,!0):rr(i,!!o.multiple,o.multiple?[]:"",!1))}i[yi]=o}catch(S){re(e,e.return,S)}}break;case 6:if(qe(t,e),lt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){re(e,e.return,S)}}break;case 3:if(qe(t,e),lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pi(t.containerInfo)}catch(S){re(e,e.return,S)}break;case 4:qe(t,e),lt(e);break;case 13:qe(t,e),lt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(fc=ie())),r&4&&qu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||p,qe(t,e),xe=u):qe(t,e),lt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(N=e,p=e.child;p!==null;){for(h=N=p;N!==null;){switch(d=N,x=d.child,d.tag){case 0:case 11:case 14:case 15:ni(4,d,d.return);break;case 1:tr(d,d.return);var b=d.stateNode;if(typeof b.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(S){re(r,n,S)}}break;case 5:tr(d,d.return);break;case 22:if(d.memoizedState!==null){Zu(h);continue}}x!==null?(x.return=d,N=x):Zu(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Sf("display",s))}catch(S){re(e,e.return,S)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(S){re(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qe(t,e),lt(e),r&4&&qu(e);break;case 21:break;default:qe(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qp(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ci(i,""),r.flags&=-33);var o=Ju(e);hl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Ju(e);pl(e,l,s);break;default:throw Error(_(161))}}catch(c){re(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hy(e,t,n){N=e,qp(e)}function qp(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||so;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||xe;l=so;var u=xe;if(so=s,(xe=c)&&!u)for(N=i;N!==null;)s=N,c=s.child,s.tag===22&&s.memoizedState!==null?ed(i):c!==null?(c.return=s,N=c):ed(i);for(;o!==null;)N=o,qp(o),o=o.sibling;N=i,so=l,xe=u}Xu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Xu(e)}}function Xu(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||xs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Du(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Du(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&pi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}xe||t.flags&512&&fl(t)}catch(d){re(t,t.return,d)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Zu(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function ed(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xs(4,t)}catch(c){re(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){re(t,i,c)}}var o=t.return;try{fl(t)}catch(c){re(t,o,c)}break;case 5:var s=t.return;try{fl(t)}catch(c){re(t,s,c)}}}catch(c){re(t,t.return,c)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var gy=Math.ceil,Jo=Mt.ReactCurrentDispatcher,uc=Mt.ReactCurrentOwner,Ve=Mt.ReactCurrentBatchConfig,$=0,de=null,oe=null,ge=0,Ae=0,nr=dn(0),le=0,_i=null,Rn=0,ws=0,dc=0,ri=null,Ie=null,fc=0,xr=1/0,bt=null,qo=!1,gl=null,nn=null,ao=!1,Qt=null,Xo=0,ii=0,ml=null,ko=-1,_o=0;function ke(){return $&6?ie():ko!==-1?ko:ko=ie()}function rn(e){return e.mode&1?$&2&&ge!==0?ge&-ge:Xv.transition!==null?(_o===0&&(_o=Lf()),_o):(e=K,e!==0||(e=window.event,e=e===void 0?16:Wf(e.type)),e):1}function rt(e,t,n,r){if(50<ii)throw ii=0,ml=null,Error(_(185));ji(e,n,r),(!($&2)||e!==de)&&(e===de&&(!($&2)&&(ws|=n),le===4&&Ht(e,ge)),Ne(e,r),n===1&&$===0&&!(t.mode&1)&&(xr=ie()+500,ms&&fn()))}function Ne(e,t){var n=e.callbackNode;Xm(e,t);var r=Lo(e,e===de?ge:0);if(r===0)n!==null&&cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cu(n),t===1)e.tag===0?qv(td.bind(null,e)):ap(td.bind(null,e)),Kv(function(){!($&6)&&fn()}),n=null;else{switch(Df(r)){case 1:n=Ml;break;case 4:n=Af;break;case 16:n=Oo;break;case 536870912:n=Of;break;default:n=Oo}n=oh(n,Xp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xp(e,t){if(ko=-1,_o=0,$&6)throw Error(_(327));var n=e.callbackNode;if(lr()&&e.callbackNode!==n)return null;var r=Lo(e,e===de?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zo(e,r);else{t=r;var i=$;$|=2;var o=eh();(de!==e||ge!==t)&&(bt=null,xr=ie()+500,Cn(e,t));do try{yy();break}catch(l){Zp(e,l)}while(!0);ql(),Jo.current=o,$=i,oe!==null?t=0:(de=null,ge=0,t=le)}if(t!==0){if(t===2&&(i=$a(e),i!==0&&(r=i,t=vl(e,i))),t===1)throw n=_i,Cn(e,0),Ht(e,r),Ne(e,ie()),n;if(t===6)Ht(e,r);else{if(i=e.current.alternate,!(r&30)&&!my(i)&&(t=Zo(e,r),t===2&&(o=$a(e),o!==0&&(r=o,t=vl(e,o))),t===1))throw n=_i,Cn(e,0),Ht(e,r),Ne(e,ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:xn(e,Ie,bt);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=fc+500-ie(),10<t)){if(Lo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qa(xn.bind(null,e,Ie,bt),t);break}xn(e,Ie,bt);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-nt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gy(r/1960))-r,10<r){e.timeoutHandle=qa(xn.bind(null,e,Ie,bt),r);break}xn(e,Ie,bt);break;case 5:xn(e,Ie,bt);break;default:throw Error(_(329))}}}return Ne(e,ie()),e.callbackNode===n?Xp.bind(null,e):null}function vl(e,t){var n=ri;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=Zo(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&yl(t)),e}function yl(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function my(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ot(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~dc,t&=~ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function td(e){if($&6)throw Error(_(327));lr();var t=Lo(e,0);if(!(t&1))return Ne(e,ie()),null;var n=Zo(e,t);if(e.tag!==0&&n===2){var r=$a(e);r!==0&&(t=r,n=vl(e,r))}if(n===1)throw n=_i,Cn(e,0),Ht(e,t),Ne(e,ie()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,Ie,bt),Ne(e,ie()),null}function pc(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(xr=ie()+500,ms&&fn())}}function An(e){Qt!==null&&Qt.tag===0&&!($&6)&&lr();var t=$;$|=1;var n=Ve.transition,r=K;try{if(Ve.transition=null,K=1,e)return e()}finally{K=r,Ve.transition=n,$=t,!($&6)&&fn()}}function hc(){Ae=nr.current,X(nr)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gv(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Ql(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uo();break;case 3:vr(),X(je),X(we),rc();break;case 5:nc(r);break;case 4:vr();break;case 13:X(ee);break;case 19:X(ee);break;case 10:Xl(r.type._context);break;case 22:case 23:hc()}n=n.return}if(de=e,oe=e=on(e.current,null),ge=Ae=t,le=0,_i=null,dc=ws=Rn=0,Ie=ri=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Sn=null}return e}function Zp(e,t){do{var n=oe;try{if(ql(),wo.current=Yo,Qo){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qo=!1}if(Nn=0,ce=ae=te=null,ti=!1,bi=0,uc.current=null,n===null||n.return===null){le=1,_i=t,oe=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=ge,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var d=p.alternate;d?(p.updateQueue=d.updateQueue,p.memoizedState=d.memoizedState,p.lanes=d.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=Wu(s);if(x!==null){x.flags&=-257,$u(x,s,l,o,t),x.mode&1&&Bu(o,u,t),t=x,c=u;var b=t.updateQueue;if(b===null){var S=new Set;S.add(c),t.updateQueue=S}else b.add(c);break e}else{if(!(t&1)){Bu(o,u,t),gc();break e}c=Error(_(426))}}else if(Z&&l.mode&1){var R=Wu(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),$u(R,s,l,o,t),Yl(yr(c,l));break e}}o=c=yr(c,l),le!==4&&(le=2),ri===null?ri=[o]:ri.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Dp(o,c,t);Lu(o,g);break e;case 1:l=c;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(nn===null||!nn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=zp(o,l,t);Lu(o,w);break e}}o=o.return}while(o!==null)}nh(n)}catch(C){t=C,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function eh(){var e=Jo.current;return Jo.current=Yo,e===null?Yo:e}function gc(){(le===0||le===3||le===2)&&(le=4),de===null||!(Rn&268435455)&&!(ws&268435455)||Ht(de,ge)}function Zo(e,t){var n=$;$|=2;var r=eh();(de!==e||ge!==t)&&(bt=null,Cn(e,t));do try{vy();break}catch(i){Zp(e,i)}while(!0);if(ql(),$=n,Jo.current=r,oe!==null)throw Error(_(261));return de=null,ge=0,le}function vy(){for(;oe!==null;)th(oe)}function yy(){for(;oe!==null&&!$m();)th(oe)}function th(e){var t=ih(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?nh(e):oe=t,uc.current=null}function nh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=dy(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(n=uy(n,t,Ae),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function xn(e,t,n){var r=K,i=Ve.transition;try{Ve.transition=null,K=1,xy(e,t,n,r)}finally{Ve.transition=i,K=r}return null}function xy(e,t,n,r){do lr();while(Qt!==null);if($&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Zm(e,o),e===de&&(oe=de=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ao||(ao=!0,oh(Oo,function(){return lr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ve.transition,Ve.transition=null;var s=K;K=1;var l=$;$|=4,uc.current=null,py(e,n),Jp(n,e),Fv(Ya),Do=!!Qa,Ya=Qa=null,e.current=n,hy(n),Hm(),$=l,K=s,Ve.transition=o}else e.current=n;if(ao&&(ao=!1,Qt=e,Xo=i),o=e.pendingLanes,o===0&&(nn=null),Km(n.stateNode),Ne(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qo)throw qo=!1,e=gl,gl=null,e;return Xo&1&&e.tag!==0&&lr(),o=e.pendingLanes,o&1?e===ml?ii++:(ii=0,ml=e):ii=0,fn(),null}function lr(){if(Qt!==null){var e=Df(Xo),t=Ve.transition,n=K;try{if(Ve.transition=null,K=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,Xo=0,$&6)throw Error(_(331));var i=$;for($|=4,N=e.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(N=u;N!==null;){var p=N;switch(p.tag){case 0:case 11:case 15:ni(8,p,o)}var h=p.child;if(h!==null)h.return=p,N=h;else for(;N!==null;){p=N;var d=p.sibling,x=p.return;if(Kp(p),p===u){N=null;break}if(d!==null){d.return=x,N=d;break}N=x}}}var b=o.alternate;if(b!==null){var S=b.child;if(S!==null){b.child=null;do{var R=S.sibling;S.sibling=null,S=R}while(S!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ni(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,N=g;break e}N=o.return}}var f=e.current;for(N=f;N!==null;){s=N;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,N=m;else e:for(s=f;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xs(9,l)}}catch(C){re(l,l.return,C)}if(l===s){N=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,N=w;break e}N=l.return}}if($=i,fn(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(ds,e)}catch{}r=!0}return r}finally{K=n,Ve.transition=t}}return!1}function nd(e,t,n){t=yr(n,t),t=Dp(e,t,1),e=tn(e,t,1),t=ke(),e!==null&&(ji(e,1,t),Ne(e,t))}function re(e,t,n){if(e.tag===3)nd(e,e,n);else for(;t!==null;){if(t.tag===3){nd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=yr(n,e),e=zp(t,e,1),t=tn(t,e,1),e=ke(),t!==null&&(ji(t,1,e),Ne(t,e));break}}t=t.return}}function wy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(ge&n)===n&&(le===4||le===3&&(ge&130023424)===ge&&500>ie()-fc?Cn(e,0):dc|=n),Ne(e,t)}function rh(e,t){t===0&&(e.mode&1?(t=qi,qi<<=1,!(qi&130023424)&&(qi=4194304)):t=1);var n=ke();e=Rt(e,t),e!==null&&(ji(e,t,n),Ne(e,n))}function by(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rh(e,n)}function Sy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),rh(e,n)}var ih;ih=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,cy(e,t,n);Te=!!(e.flags&131072)}else Te=!1,Z&&t.flags&1048576&&lp(t,$o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;So(e,t),e=t.pendingProps;var i=hr(t,we.current);ar(t,n),i=oc(null,t,r,e,i,n);var o=sc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(o=!0,Bo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ec(t),i.updater=ys,t.stateNode=i,i._reactInternals=t,il(t,r,e,n),t=al(null,t,r,!0,o,n)):(t.tag=0,Z&&o&&Kl(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(So(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=_y(r),e=Xe(r,e),i){case 0:t=sl(null,t,r,e,n);break e;case 1:t=Gu(null,t,r,e,n);break e;case 11:t=Hu(null,t,r,e,n);break e;case 14:t=Vu(null,t,r,Xe(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),sl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Gu(e,t,r,i,n);case 3:e:{if(Bp(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,hp(e,t),Go(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=yr(Error(_(423)),t),t=Ku(e,t,r,n,i);break e}else if(r!==i){i=yr(Error(_(424)),t),t=Ku(e,t,r,n,i);break e}else for(Le=en(t.stateNode.containerInfo.firstChild),De=t,Z=!0,et=null,n=fp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gr(),r===i){t=At(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return gp(t),e===null&&tl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ja(r,i)?s=null:o!==null&&Ja(r,o)&&(t.flags|=32),Up(e,t),Se(e,t,s,n),t.child;case 6:return e===null&&tl(t),null;case 13:return Wp(e,t,n);case 4:return tc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mr(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Hu(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Y(Ho,r._currentValue),r._currentValue=s,o!==null)if(ot(o.value,s)){if(o.children===i.children&&!je.current){t=At(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=jt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),nl(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ar(t,n),i=Ge(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=Xe(r,t.pendingProps),i=Xe(r.type,i),Vu(e,t,r,i,n);case 15:return Mp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),So(e,t),t.tag=1,Pe(r)?(e=!0,Bo(t)):e=!1,ar(t,n),Lp(t,r,i),il(t,r,i,n),al(null,t,r,!0,e,n);case 19:return $p(e,t,n);case 22:return Fp(e,t,n)}throw Error(_(156,t.tag))};function oh(e,t){return Rf(e,t)}function ky(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new ky(e,t,n,r)}function mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _y(e){if(typeof e=="function")return mc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ll)return 11;if(e===Dl)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Co(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")mc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Gn:return En(n.children,i,o,t);case Ol:s=8,i|=8;break;case Ta:return e=He(12,n,t,i|2),e.elementType=Ta,e.lanes=o,e;case ja:return e=He(13,n,t,i),e.elementType=ja,e.lanes=o,e;case Pa:return e=He(19,n,t,i),e.elementType=Pa,e.lanes=o,e;case gf:return bs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pf:s=10;break e;case hf:s=9;break e;case Ll:s=11;break e;case Dl:s=14;break e;case Bt:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=He(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function En(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function bs(e,t,n,r){return e=He(22,e,r,t),e.elementType=gf,e.lanes=n,e.stateNode={isHidden:!1},e}function pa(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function ha(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qs(0),this.expirationTimes=Qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vc(e,t,n,r,i,o,s,l,c){return e=new Cy(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ec(o),e}function Ey(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sh(e){if(!e)return cn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Pe(n))return sp(e,n,t)}return t}function ah(e,t,n,r,i,o,s,l,c){return e=vc(n,r,!0,e,i,o,s,l,c),e.context=sh(null),n=e.current,r=ke(),i=rn(n),o=jt(r,i),o.callback=t??null,tn(n,o,i),e.current.lanes=i,ji(e,i,r),Ne(e,r),e}function Ss(e,t,n,r){var i=t.current,o=ke(),s=rn(i);return n=sh(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(i,t,s),e!==null&&(rt(e,i,s,o),xo(e,i,s)),s}function es(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yc(e,t){rd(e,t),(e=e.alternate)&&rd(e,t)}function Iy(){return null}var lh=typeof reportError=="function"?reportError:function(e){console.error(e)};function xc(e){this._internalRoot=e}ks.prototype.render=xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ss(e,t,null,null)};ks.prototype.unmount=xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){Ss(null,e,null,null)}),t[Nt]=null}};function ks(e){this._internalRoot=e}ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ff();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&Bf(e)}};function wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function Ty(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=es(s);o.call(u)}}var s=ah(t,r,e,0,null,!1,!1,"",id);return e._reactRootContainer=s,e[Nt]=s.current,mi(e.nodeType===8?e.parentNode:e),An(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=es(c);l.call(u)}}var c=vc(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=c,e[Nt]=c.current,mi(e.nodeType===8?e.parentNode:e),An(function(){Ss(t,c,n,r)}),c}function Cs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=es(s);l.call(c)}}Ss(t,s,e,i)}else s=Ty(n,t,e,i,r);return es(s)}zf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qr(t.pendingLanes);n!==0&&(Fl(t,n|1),Ne(t,ie()),!($&6)&&(xr=ie()+500,fn()))}break;case 13:An(function(){var r=Rt(e,1);if(r!==null){var i=ke();rt(r,e,1,i)}}),yc(e,1)}};Ul=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=ke();rt(t,e,134217728,n)}yc(e,134217728)}};Mf=function(e){if(e.tag===13){var t=rn(e),n=Rt(e,t);if(n!==null){var r=ke();rt(n,e,t,r)}yc(e,t)}};Ff=function(){return K};Uf=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};Ua=function(e,t,n){switch(t){case"input":if(Aa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=gs(r);if(!i)throw Error(_(90));vf(r),Aa(r,i)}}}break;case"textarea":xf(e,n);break;case"select":t=n.value,t!=null&&rr(e,!!n.multiple,t,!1)}};Ef=pc;If=An;var jy={usingClientEntryPoint:!1,Events:[Ni,Jn,gs,_f,Cf,pc]},Ur={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Py={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pf(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||Iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{ds=lo.inject(Py),ft=lo}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jy;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wc(t))throw Error(_(200));return Ey(e,t,null,n)};Me.createRoot=function(e,t){if(!wc(e))throw Error(_(299));var n=!1,r="",i=lh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vc(e,1,!1,null,null,n,!1,r,i),e[Nt]=t.current,mi(e.nodeType===8?e.parentNode:e),new xc(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Pf(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return An(e)};Me.hydrate=function(e,t,n){if(!_s(t))throw Error(_(200));return Cs(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!wc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=lh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ah(t,null,e,1,n??null,i,!1,o,s),e[Nt]=t.current,mi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ks(t)};Me.render=function(e,t,n){if(!_s(t))throw Error(_(200));return Cs(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!_s(e))throw Error(_(40));return e._reactRootContainer?(An(function(){Cs(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};Me.unstable_batchedUpdates=pc;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_s(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Cs(e,t,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function ch(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ch)}catch(e){console.error(e)}}ch(),cf.exports=Me;var Ny=cf.exports,uh,od=Ny;uh=od.createRoot,od.hydrateRoot;const gt="http://localhost:3001/api/v1",Oe={name:"CloudVault",logo:"☁"};async function Ry(){var n;const e=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");if(!e)return null;const t=localStorage.getItem("cv_refreshToken")?localStorage:sessionStorage;try{const r=await fetch(`${gt}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:e})});if(!r.ok)return null;const i=await r.json(),o=((n=i.data)==null?void 0:n.accessToken)||i.accessToken;return o?(t.setItem("cv_token",o),window.dispatchEvent(new CustomEvent("cv-token-refreshed",{detail:{token:o}})),o):null}catch{return null}}function bc(e){return new Error(`Cannot reach the server at ${gt}${e}. Make sure the backend is running (npm start in project root).`)}const Yt=async(e,t={},n,r=!1)=>{const i={...t.headers||{}};n&&(i.Authorization=`Bearer ${n}`),t.body instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json");let o;try{o=await fetch(`${gt}${e}`,{...t,headers:i})}catch{throw bc(e)}if(o.status===401&&n&&!r){const c=await Ry();if(c)return Yt(e,t,c,!0);throw new Error("Session expired. Please log in again.")}if(!o.ok){const c=await o.json().catch(()=>({error:"Unknown error"})),u=c.message||c.error||"",p=u.toLowerCase().includes("token")?"Something went wrong. Please try again.":u||`Request failed (${o.status})`;throw new Error(p)}if(!(o.headers.get("content-type")||"").includes("application/json"))return o;const l=await o.json();return l.success?l.data:l},vn=(e,t)=>Array.isArray(e)?e:(e==null?void 0:e[t])||[];async function Sc(e,t,{onProgress:n,disposition:r="download"}={}){const i=r==="preview"?`/files/${e}/preview`:`/files/${e}/download`;let o;try{o=await fetch(`${gt}${i}`,{headers:{Authorization:`Bearer ${t}`}})}catch{throw bc(i)}if(!o.ok){const l=await o.json().catch(()=>({error:"Download failed"}));throw new Error(l.error||l.message||"Download failed")}const s=Number(o.headers.get("content-length"))||0;return Ay(o,s,n)}async function Ay(e,t,n){if(!e.body||!t){const s=await e.blob();return n==null||n(100),s}const r=e.body.getReader(),i=[];let o=0;for(;;){const{done:s,value:l}=await r.read();if(s)break;i.push(l),o+=l.length,n&&t>0&&n(Math.min(99,Math.round(o/t*100)))}return n==null||n(100),new Blob(i,{type:e.headers.get("content-type")||"application/octet-stream"})}function Oy(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function Ly(e,t,n,r){return new Promise((i,o)=>{const s=new XMLHttpRequest;s.open("POST",`${gt}${e}`),s.setRequestHeader("Authorization",`Bearer ${n}`),s.upload.onprogress=l=>{l.lengthComputable&&r&&r(Math.round(l.loaded/l.total*100))},s.onload=()=>{try{const l=JSON.parse(s.responseText);s.status>=200&&s.status<300?i(l.success?l.data:l):o(new Error(l.message||l.error||"Upload failed"))}catch{s.status>=200&&s.status<300?i({}):o(new Error("Upload failed"))}},s.onerror=()=>o(bc(e)),s.send(t)})}const ue=e=>{if(e===0)return"0 B";const t=1024,n=["B","KB","MB","GB"],r=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**r).toFixed(1)} ${n[r]}`},Ot=e=>{const t=Math.floor((Date.now()-new Date(e))/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`},Ai=(e="")=>e.startsWith("image/")?"🖼️":e==="application/pdf"?"📄":e.startsWith("video/")?"🎬":e.startsWith("audio/")?"🎵":e.includes("zip")||e.includes("archive")?"🗜️":e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")?"📝":"📁",Dy=["image/","video/","audio/"],zy=new Set(["application/pdf","text/plain","text/markdown","application/json"]),dh=(e="")=>{const t=(e||"").toLowerCase();return zy.has(t)?!0:Dy.some(n=>t.startsWith(n))},My=(e="")=>{const t=(e||"").toLowerCase();return t.startsWith("image/")?"image":t==="application/pdf"?"pdf":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("text/")||t==="application/json"?"text":null},sd=[{key:"all",label:"All",icon:"📋",test:()=>!0},{key:"images",label:"Images",icon:"🖼️",test:e=>e.startsWith("image/")},{key:"documents",label:"Docs",icon:"📄",test:e=>e.includes("pdf")||e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")},{key:"videos",label:"Videos",icon:"🎬",test:e=>e.startsWith("video/")},{key:"audio",label:"Audio",icon:"🎵",test:e=>e.startsWith("audio/")},{key:"archives",label:"Archives",icon:"🗜️",test:e=>e.includes("zip")||e.includes("archive")||e.includes("tar")||e.includes("rar")}],In=`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --bg-primary: #f8fafc;
    --bg-secondary: #ffffff;
    --bg-card: #ffffff;
    --bg-card-hover: #f9fafb;
    --bg-sidebar: #ffffff;
    --surface-raised: #f1f5f9;
    --border: #e5e7eb;
    --border-hover: #bbf7d0;
    --text: #111827;
    --text-secondary: #374151;
    --text-muted: #6b7280;
    --accent: #16a34a;
    --accent-strong: #111827;
    --accent-blue: #2563eb;
    --accent-amber: #fbbf24;
    --danger: #dc2626;
    --gradient: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
    --gradient-soft: linear-gradient(135deg, rgba(34,197,94,.12), rgba(59,130,246,.08));
    --radius: 12px;
    --radius-lg: 20px;
    --shadow: 0 20px 50px rgba(15, 23, 42, 0.1);
    --glow: 0 18px 40px rgba(22, 163, 74, 0.16);
    --transition: all 0.2s ease;
  }

  [data-theme="dark"] {
    --bg-primary: #0f172a;
    --bg-secondary: #111827;
    --bg-card: #111827;
    --bg-card-hover: #1f2937;
    --bg-sidebar: #0b1220;
    --surface-raised: #1f2937;
    --border: rgba(148, 163, 184, 0.18);
    --border-hover: rgba(34,197,94,.45);
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
    --gradient: linear-gradient(135deg, #5eead4 0%, #60a5fa 55%, #a78bfa 100%);
    --gradient-soft: linear-gradient(135deg, rgba(94,234,212,.16), rgba(96,165,250,.14));
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
    background: var(--accent);
    color: #fff;
    font-family: var(--font);
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(22,163,74,.24);
    transition: var(--transition);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 36px rgba(22,163,74,.3);
  }

  .btn-secondary {
    padding: 10px 18px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: #fff;
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
    background: #f0fdf4;
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
    background: #f9fafb;
    color: var(--text);
    border-color: var(--border);
    transform: translateX(3px);
  }

  .nav-item.active {
    border-color: #bbf7d0;
    background: #f0fdf4;
    color: #15803d;
    box-shadow: none;
  }

  .stat-mini {
    background: var(--bg-card);
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
    border-color: #bbf7d0;
    background: #f0fdf4;
    color: #15803d;
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
    border-color: rgba(251,191,36,.35);
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(251,191,36,.08);
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
    background: #000;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0;
    box-shadow: 0 8px 16px rgba(0,0,0,.16);
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
`,fh=[{id:"free",name:"Free",price:"₹0",period:"/mo",storage:"5 GB",features:["Standard uploads","Basic sharing","Web preview"]},{id:"pro",name:"Pro",price:"₹749",period:"/mo",storage:"100 GB",features:["Faster uploads","File version history","Priority support"],highlight:!0},{id:"premium",name:"Premium",price:"₹1,599",period:"/mo",storage:"1 TB",features:["Team sharing","Advanced analytics","Custom branding"]},{id:"team",name:"Team",price:"₹3,999",period:"/mo",storage:"2 TB",features:["Shared workspaces","Admin controls","SSO ready"]}],Fy=[{id:"50gb",label:"+50 GB",price:"₹399"},{id:"100gb",label:"+100 GB",price:"₹749"},{id:"500gb",label:"+500 GB",price:"₹2,499"},{id:"1tb",label:"+1 TB",price:"₹3,999"}],Uy=[{title:"Effortless syncing",desc:"Drag, drop, and organize files from one calm workspace."},{title:"Private sharing",desc:"Send secure links with clear permissions and expiration controls."},{title:"Fast previews",desc:"Open images, documents, and downloads without breaking your flow."}],By=["Features","How it works","Pricing"];function Wy({onGetStarted:e,onLogin:t,onSignUp:n}){const[r,i]=y.useState({filesStored:0,activeUsers:0,storageUsed:0,storageCapacity:0xa0000000000});return y.useEffect(()=>{fetch(`${gt}/public/stats`).then(o=>o.json()).then(o=>{o.success&&o.data&&i(o.data)}).catch(()=>{})},[]),a.jsxs("div",{className:"marketing-shell",children:[a.jsx("style",{children:In}),a.jsxs("header",{className:"landing-header",children:[a.jsxs("button",{type:"button",className:"brand-lockup",onClick:e,children:[a.jsx("span",{className:"brand-mark",children:Oe.logo}),a.jsx("span",{children:Oe.name})]}),a.jsx("nav",{className:"landing-links","aria-label":"Primary",children:By.map(o=>a.jsx("a",{href:`#${o.toLowerCase().replaceAll(" ","-")}`,children:o},o))}),a.jsxs("div",{className:"landing-nav",children:[a.jsx("button",{type:"button",className:"btn-ghost",onClick:t,children:"Log in"}),a.jsx("button",{type:"button",className:"btn-primary",onClick:n,children:"Get Started Free"})]})]}),a.jsxs("main",{children:[a.jsxs("section",{className:"hero-section",children:[a.jsx("div",{className:"hero-glow hero-glow-green"}),a.jsx("div",{className:"hero-glow hero-glow-blue"}),a.jsxs("div",{className:"hero-copy",children:[a.jsxs("div",{className:"eyebrow",children:[a.jsx("span",{})," Introducing ",Oe.name]}),a.jsxs("h1",{children:["The intelligent home for your ",a.jsx("span",{children:"digital life."})]}),a.jsx("p",{children:"Never lose a file again. Store, organize, and securely share your documents, photos, and projects from anywhere."}),a.jsxs("div",{className:"hero-actions",children:[a.jsx("button",{type:"button",className:"btn-primary btn-hero-dark",onClick:e,children:"Start for free"}),a.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"See how it works"})]}),a.jsx("div",{className:"hero-note",children:"No credit card required. 10GB free forever."})]}),a.jsx("div",{className:"dashboard-preview","aria-label":"CloudVault preview",children:a.jsxs("div",{className:"preview-panel",children:[a.jsxs("aside",{className:"preview-sidebar",children:[a.jsxs("div",{className:"preview-logo",children:[a.jsx("span",{className:"brand-mark small",children:Oe.logo}),a.jsx("strong",{children:"My Storage"})]}),["Recent","Starred","Shared","Trash"].map((o,s)=>a.jsx("div",{className:`preview-nav-item${s===0?" active":""}`,children:o},o)),a.jsxs("div",{className:"preview-usage",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Storage Usage"}),a.jsx("strong",{children:"4.5 GB / 10 GB"})]}),a.jsx("div",{className:"preview-bar",children:a.jsx("span",{})})]})]}),a.jsxs("section",{className:"preview-files",children:[a.jsxs("div",{className:"preview-topline",children:[a.jsx("h3",{children:"Recent Files"}),a.jsx("button",{type:"button",children:"Upload"})]}),[["Project Alpha","1.2 GB - Last edited 2h ago"],["Q3 Financials.xlsx","2.4 MB - Last edited 2h ago"],["Campaign Banner.png","4.1 MB - Last edited 2h ago"]].map(([o,s])=>a.jsxs("div",{className:"preview-file",children:[a.jsx("div",{className:"preview-file-icon"}),a.jsxs("div",{children:[a.jsx("h4",{children:o}),a.jsx("p",{children:s})]})]},o))]})]})})]}),a.jsxs("section",{className:"logo-strip",children:[a.jsx("p",{children:"Trusted by innovative teams worldwide"}),a.jsx("div",{children:["Acme Corp","GlobalTech","NEXUS","horizon","Vertex"].map(o=>a.jsx("span",{children:o},o))})]}),a.jsxs("section",{id:"features",className:"content-section split-section",children:[a.jsxs("div",{children:[a.jsx("p",{className:"section-kicker",children:"Why CloudVault?"}),a.jsx("h2",{children:"More than just storage. It is your central hub."})]}),a.jsx("p",{children:"In a world scattered with devices and apps, CloudVault brings everything together in a single, secure place for photos, documents, and creative projects."})]}),a.jsx("section",{id:"how-it-works",className:"content-section feature-grid",children:Uy.map(o=>a.jsxs("article",{className:"feature-card",children:[a.jsx("div",{className:"feature-dot"}),a.jsx("h3",{children:o.title}),a.jsx("p",{children:o.desc})]},o.title))}),a.jsxs("section",{className:"stats-band",children:[a.jsxs("div",{className:"stat-mini",children:[a.jsxs("strong",{children:[r.filesStored.toLocaleString(),"+"]}),a.jsx("span",{children:"Files stored"})]}),a.jsxs("div",{className:"stat-mini",children:[a.jsx("strong",{children:ue(r.storageCapacity)}),a.jsx("span",{children:"Storage capacity"})]}),a.jsxs("div",{className:"stat-mini",children:[a.jsxs("strong",{children:[r.activeUsers.toLocaleString(),"+"]}),a.jsx("span",{children:"Active users"})]})]}),a.jsxs("section",{id:"pricing",className:"content-section pricing-section",children:[a.jsxs("div",{className:"section-center",children:[a.jsx("p",{className:"section-kicker",children:"Pricing"}),a.jsx("h2",{children:"Simple plans for clean storage."})]}),a.jsx("div",{className:"pricing-grid",children:fh.map(o=>a.jsxs("article",{className:`plan-card${o.highlight?" highlight":""}`,children:[a.jsx("h3",{children:o.name}),a.jsxs("div",{className:"plan-price",children:[o.price,a.jsx("span",{children:o.period})]}),a.jsxs("p",{children:[o.storage," storage"]}),a.jsxs("button",{type:"button",className:o.highlight?"btn-primary":"btn-secondary",onClick:e,children:["Choose ",o.name]})]},o.id))})]})]})]})}const $y=()=>{};var ad={};/**
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
 */const ph=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Hy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],l=e[n++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,l=s?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,p=o>>2,h=(o&3)<<4|l>>4;let d=(l&15)<<2|u>>6,x=u&63;c||(x=64,s||(d=64)),r.push(n[p],n[h],n[d],n[x])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ph(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Hy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||l==null||u==null||h==null)throw new Vy;const d=o<<2|l>>4;if(r.push(d),u!==64){const x=l<<4&240|u>>2;if(r.push(x),h!==64){const b=u<<6&192|h;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Vy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gy=function(e){const t=ph(e);return hh.encodeByteArray(t,!0)},gh=function(e){return Gy(e).replace(/\./g,"")},mh=function(e){try{return hh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ky(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qy=()=>Ky().__FIREBASE_DEFAULTS__,Yy=()=>{if(typeof process>"u"||typeof ad>"u")return;const e=ad.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Jy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&mh(e[1]);return t&&JSON.parse(t)},kc=()=>{try{return $y()||Qy()||Yy()||Jy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},qy=e=>{var t,n;return(n=(t=kc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},vh=()=>{var e;return(e=kc())===null||e===void 0?void 0:e.config},yh=e=>{var t;return(t=kc())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Xy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Es(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zy(e){return(await fetch(e,{credentials:"include"})).ok}const oi={};function e0(){const e={prod:[],emulator:[]};for(const t of Object.keys(oi))oi[t]?e.emulator.push(t):e.prod.push(t);return e}function t0(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let ld=!1;function n0(e,t){if(typeof window>"u"||typeof document>"u"||!Es(window.location.host)||oi[e]===t||oi[e]||ld)return;oi[e]=t;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",o=e0().prod.length>0;function s(){const d=document.getElementById(r);d&&d.remove()}function l(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,x){d.setAttribute("width","24"),d.setAttribute("id",x),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function u(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{ld=!0,s()},d}function p(d,x){d.setAttribute("id",x),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function h(){const d=t0(r),x=n("text"),b=document.getElementById(x)||document.createElement("span"),S=n("learnmore"),R=document.getElementById(S)||document.createElement("a"),g=n("preprendIcon"),f=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const m=d.element;l(m),p(R,S);const w=u();c(f,g),m.append(f,b,R,w),document.body.appendChild(m)}o?(b.innerText="Preview backend disconnected.",f.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function r0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function i0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function o0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function s0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function a0(){const e=_e();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function l0(){try{return typeof indexedDB=="object"}catch{return!1}}function c0(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const u0="FirebaseError";class pn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=u0,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?d0(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new pn(i,l,r)}}function d0(e,t){return e.replace(f0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const f0=/\{\$([^}]+)}/g;function p0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function wr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(cd(o)&&cd(s)){if(!wr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cd(e){return e!==null&&typeof e=="object"}/**
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
 */function Li(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function h0(e,t){const n=new g0(e,t);return n.subscribe.bind(n)}class g0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");m0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ga),i.error===void 0&&(i.error=ga),i.complete===void 0&&(i.complete=ga);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function m0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ga(){}/**
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
 */function Er(e){return e&&e._delegate?e._delegate:e}class br{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const wn="[DEFAULT]";/**
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
 */class v0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Xy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(x0(t))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=wn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=wn){return this.instances.has(t)}getOptions(t=wn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:y0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=wn){return this.component?this.component.multipleInstances?t:wn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y0(e){return e===wn?void 0:e}function x0(e){return e.instantiationMode==="EAGER"}/**
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
 */class w0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new v0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Q||(Q={}));const b0={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},S0=Q.INFO,k0={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},_0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=k0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xh{constructor(t){this.name=t,this._logLevel=S0,this._logHandler=_0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?b0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const C0=(e,t)=>t.some(n=>e instanceof n);let ud,dd;function E0(){return ud||(ud=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I0(){return dd||(dd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wh=new WeakMap,xl=new WeakMap,bh=new WeakMap,ma=new WeakMap,_c=new WeakMap;function T0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(sn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&wh.set(n,e)}).catch(()=>{}),_c.set(t,e),t}function j0(e){if(xl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});xl.set(e,t)}let wl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return xl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||bh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function P0(e){wl=e(wl)}function N0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(va(this),t,...n);return bh.set(r,t.sort?t.sort():[t]),sn(r)}:I0().includes(e)?function(...t){return e.apply(va(this),t),sn(wh.get(this))}:function(...t){return sn(e.apply(va(this),t))}}function R0(e){return typeof e=="function"?N0(e):(e instanceof IDBTransaction&&j0(e),C0(e,E0())?new Proxy(e,wl):e)}function sn(e){if(e instanceof IDBRequest)return T0(e);if(ma.has(e))return ma.get(e);const t=R0(e);return t!==e&&(ma.set(e,t),_c.set(t,e)),t}const va=e=>_c.get(e);function A0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),l=sn(s);return r&&s.addEventListener("upgradeneeded",c=>{r(sn(s.result),c.oldVersion,c.newVersion,sn(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const O0=["get","getKey","getAll","getAllKeys","count"],L0=["put","add","delete","clear"],ya=new Map;function fd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ya.get(t))return ya.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=L0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||O0.includes(n)))return;const o=async function(s,...l){const c=this.transaction(s,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return ya.set(t,o),o}P0(e=>({...e,get:(t,n,r)=>fd(t,n)||e.get(t,n,r),has:(t,n)=>!!fd(t,n)||e.has(t,n)}));/**
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
 */class D0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(z0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function z0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const bl="@firebase/app",pd="0.13.2";/**
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
 */const Lt=new xh("@firebase/app"),M0="@firebase/app-compat",F0="@firebase/analytics-compat",U0="@firebase/analytics",B0="@firebase/app-check-compat",W0="@firebase/app-check",$0="@firebase/auth",H0="@firebase/auth-compat",V0="@firebase/database",G0="@firebase/data-connect",K0="@firebase/database-compat",Q0="@firebase/functions",Y0="@firebase/functions-compat",J0="@firebase/installations",q0="@firebase/installations-compat",X0="@firebase/messaging",Z0="@firebase/messaging-compat",e1="@firebase/performance",t1="@firebase/performance-compat",n1="@firebase/remote-config",r1="@firebase/remote-config-compat",i1="@firebase/storage",o1="@firebase/storage-compat",s1="@firebase/firestore",a1="@firebase/ai",l1="@firebase/firestore-compat",c1="firebase",u1="11.10.0";/**
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
 */const Sl="[DEFAULT]",d1={[bl]:"fire-core",[M0]:"fire-core-compat",[U0]:"fire-analytics",[F0]:"fire-analytics-compat",[W0]:"fire-app-check",[B0]:"fire-app-check-compat",[$0]:"fire-auth",[H0]:"fire-auth-compat",[V0]:"fire-rtdb",[G0]:"fire-data-connect",[K0]:"fire-rtdb-compat",[Q0]:"fire-fn",[Y0]:"fire-fn-compat",[J0]:"fire-iid",[q0]:"fire-iid-compat",[X0]:"fire-fcm",[Z0]:"fire-fcm-compat",[e1]:"fire-perf",[t1]:"fire-perf-compat",[n1]:"fire-rc",[r1]:"fire-rc-compat",[i1]:"fire-gcs",[o1]:"fire-gcs-compat",[s1]:"fire-fst",[l1]:"fire-fst-compat",[a1]:"fire-vertex","fire-js":"fire-js",[c1]:"fire-js-all"};/**
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
 */const ts=new Map,f1=new Map,kl=new Map;function hd(e,t){try{e.container.addComponent(t)}catch(n){Lt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ci(e){const t=e.name;if(kl.has(t))return Lt.debug(`There were multiple attempts to register component ${t}.`),!1;kl.set(t,e);for(const n of ts.values())hd(n,e);for(const n of f1.values())hd(n,e);return!0}function Sh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function dt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const p1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new Oi("app","Firebase",p1);/**
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
 */class h1{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const Di=u1;function kh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Sl,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=vh()),!n)throw an.create("no-options");const o=ts.get(i);if(o){if(wr(n,o.options)&&wr(r,o.config))return o;throw an.create("duplicate-app",{appName:i})}const s=new w0(i);for(const c of kl.values())s.addComponent(c);const l=new h1(n,r,s);return ts.set(i,l),l}function g1(e=Sl){const t=ts.get(e);if(!t&&e===Sl&&vh())return kh();if(!t)throw an.create("no-app",{appName:e});return t}function cr(e,t,n){var r;let i=(r=d1[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Lt.warn(l.join(" "));return}Ci(new br(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const m1="firebase-heartbeat-database",v1=1,Ei="firebase-heartbeat-store";let xa=null;function _h(){return xa||(xa=A0(m1,v1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ei)}catch(n){console.warn(n)}}}}).catch(e=>{throw an.create("idb-open",{originalErrorMessage:e.message})})),xa}async function y1(e){try{const n=(await _h()).transaction(Ei),r=await n.objectStore(Ei).get(Ch(e));return await n.done,r}catch(t){if(t instanceof pn)Lt.warn(t.message);else{const n=an.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Lt.warn(n.message)}}}async function gd(e,t){try{const r=(await _h()).transaction(Ei,"readwrite");await r.objectStore(Ei).put(t,Ch(e)),await r.done}catch(n){if(n instanceof pn)Lt.warn(n.message);else{const r=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lt.warn(r.message)}}}function Ch(e){return`${e.name}!${e.options.appId}`}/**
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
 */const x1=1024,w1=30;class b1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new k1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=md();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>w1){const s=_1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Lt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=md(),{heartbeatsToSend:r,unsentEntries:i}=S1(this._heartbeatsCache.heartbeats),o=gh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Lt.warn(n),""}}}function md(){return new Date().toISOString().substring(0,10)}function S1(e,t=x1){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),vd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class k1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return l0()?c0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await y1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function vd(e){return gh(JSON.stringify({version:2,heartbeats:e})).length}function _1(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function C1(e){Ci(new br("platform-logger",t=>new D0(t),"PRIVATE")),Ci(new br("heartbeat",t=>new b1(t),"PRIVATE")),cr(bl,pd,e),cr(bl,pd,"esm2017"),cr("fire-js","")}C1("");var E1="firebase",I1="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr(E1,I1,"app");function Cc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Eh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T1=Eh,Ih=new Oi("auth","Firebase",Eh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new xh("@firebase/auth");function j1(e,...t){ns.logLevel<=Q.WARN&&ns.warn(`Auth (${Di}): ${e}`,...t)}function Eo(e,...t){ns.logLevel<=Q.ERROR&&ns.error(`Auth (${Di}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,...t){throw Ic(e,...t)}function it(e,...t){return Ic(e,...t)}function Ec(e,t,n){const r=Object.assign(Object.assign({},T1()),{[t]:n});return new Oi("auth","Firebase",r).create(t,{appName:e.name})}function Tn(e){return Ec(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function P1(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&mt(e,"argument-error"),Ec(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ic(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ih.create(e,...t)}function L(e,t,...n){if(!e)throw Ic(t,...n)}function It(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Eo(t),new Error(t)}function Dt(e,t){e||It(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function N1(){return yd()==="http:"||yd()==="https:"}function yd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(N1()||o0()||"connection"in navigator)?navigator.onLine:!0}function A1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Dt(n>t,"Short delay should be less than long delay!"),this.isMobile=r0()||s0()}get(){return R1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(e,t){Dt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],D1=new zi(3e4,6e4);function jc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ir(e,t,n,r,i={}){return jh(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const l=Li(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:c},o);return i0()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&Es(e.emulatorConfig.host)&&(u.credentials="include"),Th.fetch()(await Ph(e,e.config.apiHost,n,l),u)})}async function jh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},O1),t);try{const i=new M1(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw co(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(e,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw co(e,"email-already-in-use",s);if(c==="USER_DISABLED")throw co(e,"user-disabled",s);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ec(e,p,u);mt(e,p)}}catch(i){if(i instanceof pn)throw i;mt(e,"network-request-failed",{message:String(i)})}}async function z1(e,t,n,r,i={}){const o=await Ir(e,t,n,r,i);return"mfaPendingCredential"in o&&mt(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function Ph(e,t,n,r){const i=`${t}${n}?${r}`,o=e,s=o.config.emulator?Tc(e.config,i):`${e.config.apiScheme}://${i}`;return L1.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(s).toString():s}class M1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),D1.get())})}}function co(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=it(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(e,t){return Ir(e,"POST","/v1/accounts:delete",t)}async function rs(e,t){return Ir(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function U1(e,t=!1){const n=Er(e),r=await n.getIdToken(t),i=Pc(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:si(wa(i.auth_time)),issuedAtTime:si(wa(i.iat)),expirationTime:si(wa(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function wa(e){return Number(e)*1e3}function Pc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const i=mh(n);return i?JSON.parse(i):(Eo("Failed to decode base64 JWT payload"),null)}catch(i){return Eo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xd(e){const t=Pc(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof pn&&B1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function B1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function is(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ii(e,rs(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Nh(o.providerUserInfo):[],l=H1(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(l!=null&&l.length),p=c?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Cl(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,h)}async function $1(e){const t=Er(e);await is(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function H1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Nh(e){return e.map(t=>{var{providerId:n}=t,r=Cc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(e,t){const n=await jh(e,{},async()=>{const r=Li({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=await Ph(e,i,"/v1/token",`key=${o}`),l=await e._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return e.emulatorConfig&&Es(e.emulatorConfig.host)&&(c.credentials="include"),Th.fetch()(s,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function G1(e,t){return Ir(e,"POST","/v2/accounts:revokeToken",jc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):xd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){L(t.length!==0,"internal-error");const n=xd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await V1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ur;return r&&(L(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Cc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new W1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Cl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Ii(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return U1(this,t)}reload(){return $1(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new tt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await is(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(Tn(this.auth));const t=await this.getIdToken();return await Ii(this,F1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,l,c,u,p;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,x=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,b=(s=n.photoURL)!==null&&s!==void 0?s:void 0,S=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:m,emailVerified:w,isAnonymous:C,providerData:E,stsTokenManager:j}=n;L(m&&j,t,"internal-error");const T=ur.fromJSON(this.name,j);L(typeof m=="string",t,"internal-error"),Ut(h,t.name),Ut(d,t.name),L(typeof w=="boolean",t,"internal-error"),L(typeof C=="boolean",t,"internal-error"),Ut(x,t.name),Ut(b,t.name),Ut(S,t.name),Ut(R,t.name),Ut(g,t.name),Ut(f,t.name);const H=new tt({uid:m,auth:t,email:d,emailVerified:w,displayName:h,isAnonymous:C,photoURL:b,phoneNumber:x,tenantId:S,stsTokenManager:T,createdAt:g,lastLoginAt:f});return E&&Array.isArray(E)&&(H.providerData=E.map(P=>Object.assign({},P))),R&&(H._redirectEventId=R),H}static async _fromIdTokenResponse(t,n,r=!1){const i=new ur;i.updateFromServerResponse(n);const o=new tt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await is(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Nh(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new ur;l.updateFromIdToken(r);const c=new tt({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Cl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=new Map;function Tt(e){Dt(e instanceof Function,"Expected a class definition");let t=wd.get(e);return t?(Dt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,wd.set(e,t),t)}/**
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
 */class Rh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Rh.type="NONE";const bd=Rh;/**
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
 */function Io(e,t,n){return`firebase:${e}:${t}:${n}`}class dr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Io(this.userKey,i.apiKey,o),this.fullPersistenceKey=Io("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await rs(this.auth,{idToken:t}).catch(()=>{});return n?tt._fromGetAccountInfoResponse(this.auth,n,t):null}return tt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new dr(Tt(bd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Tt(bd);const s=Io(r,t.config.apiKey,t.name);let l=null;for(const u of n)try{const p=await u._get(s);if(p){let h;if(typeof p=="string"){const d=await rs(t,{idToken:p}).catch(()=>{});if(!d)break;h=await tt._fromGetAccountInfoResponse(t,d,p)}else h=tt._fromJSON(t,p);u!==o&&(l=h),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new dr(o,t,r):(o=c[0],l&&await o._set(s,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new dr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Dh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ah(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Mh(t))return"Blackberry";if(Fh(t))return"Webos";if(Oh(t))return"Safari";if((t.includes("chrome/")||Lh(t))&&!t.includes("edge/"))return"Chrome";if(zh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ah(e=_e()){return/firefox\//i.test(e)}function Oh(e=_e()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Lh(e=_e()){return/crios\//i.test(e)}function Dh(e=_e()){return/iemobile/i.test(e)}function zh(e=_e()){return/android/i.test(e)}function Mh(e=_e()){return/blackberry/i.test(e)}function Fh(e=_e()){return/webos/i.test(e)}function Nc(e=_e()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function K1(e=_e()){var t;return Nc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Q1(){return a0()&&document.documentMode===10}function Uh(e=_e()){return Nc(e)||zh(e)||Fh(e)||Mh(e)||/windows phone/i.test(e)||Dh(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(e,t=[]){let n;switch(e){case"Browser":n=Sd(_e());break;case"Worker":n=`${Sd(_e())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Di}/${r}`}/**
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
 */class Y1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,l)=>{try{const c=t(o);s(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function J1(e,t={}){return Ir(e,"GET","/v2/passwordPolicy",jc(e,t))}/**
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
 */const q1=6;class X1{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:q1,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(s=c.containsNumericCharacter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kd(this),this.idTokenSubscription=new kd(this),this.beforeStateQueue=new Y1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ih,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await dr.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await rs(this,{idToken:t}),r=await tt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(dt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!s||s===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await is(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(dt(this.app))return Promise.reject(Tn(this));const n=t?Er(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return dt(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await J1(this),n=new X1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Oi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await G1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Tt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await dr.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{s=!0,c()}}else{const c=t.addObserver(n);return()=>{s=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Bh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;if(dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&j1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Is(e){return Er(e)}class kd{constructor(t){this.auth=t,this.observer=null,this.addObserver=h0(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ex(e){Rc=e}function tx(e){return Rc.loadJS(e)}function nx(){return Rc.gapiScript}function rx(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(e,t){const n=Sh(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(wr(o,t??{}))return i;mt(i,"already-initialized")}return n.initialize({options:t})}function ox(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function sx(e,t,n){const r=Is(e);L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=Wh(t),{host:s,port:l}=ax(t),c=l===null?"":`:${l}`,u={url:`${o}//${s}${c}/`},p=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(wr(u,r.config.emulator)&&wr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Es(s)?(Zy(`${o}//${s}${c}`),n0("Auth",!0)):lx()}function Wh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ax(e){const t=Wh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:_d(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:_d(s)}}}function _d(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function lx(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(t){return It("not implemented")}_linkToIdToken(t,n){return It("not implemented")}_getReauthenticationResolver(t){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(e,t){return z1(e,"POST","/v1/accounts:signInWithIdp",jc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx="http://localhost";class zt extends $h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new zt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Cc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new zt(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return fr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,fr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,fr(t,n)}buildRequest(){const t={requestUri:cx,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Li(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Tr extends Ac{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class ai extends Tr{static credentialFromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;return L("providerId"in n&&"signInMethod"in n,"argument-error"),zt._fromParams(n)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return L(t.idToken||t.accessToken,"argument-error"),zt._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return ai.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return ai.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:l}=t;if(!r&&!i&&!n&&!o||!l)return null;try{return new ai(l)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Tr{constructor(){super("facebook.com")}static credential(t){return zt._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vt.credential(t.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Tr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return zt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Tr{constructor(){super("github.com")}static credential(t){return zt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Tr{constructor(){super("twitter.com")}static credential(t,n){return zt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Gt.credential(n,r)}catch{return null}}}Gt.TWITTER_SIGN_IN_METHOD="twitter.com";Gt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await tt._fromIdTokenResponse(t,r,i),s=Cd(r);return new Sr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Cd(r);return new Sr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Cd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends pn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,os.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new os(t,n,r,i)}}function Hh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?os._fromErrorAndOperation(e,o,t,r):o})}async function ux(e,t,n=!1){const r=await Ii(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Sr._forOperation(e,"link",r)}/**
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
 */async function dx(e,t,n=!1){const{auth:r}=e;if(dt(r.app))return Promise.reject(Tn(r));const i="reauthenticate";try{const o=await Ii(e,Hh(r,i,t,e),n);L(o.idToken,r,"internal-error");const s=Pc(o.idToken);L(s,r,"internal-error");const{sub:l}=s;return L(e.uid===l,r,"user-mismatch"),Sr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fx(e,t,n=!1){if(dt(e.app))return Promise.reject(Tn(e));const r="signIn",i=await Hh(e,r,t),o=await Sr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function px(e,t,n,r){return Er(e).onIdTokenChanged(t,n,r)}function hx(e,t,n){return Er(e).beforeAuthStateChanged(t,n)}const ss="__sak";/**
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
 */class Vh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ss,"1"),this.storage.removeItem(ss),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=1e3,mx=10;class Gh extends Vh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,l,c)=>{this.notifyListeners(s,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Q1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,mx):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},gx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Gh.type="LOCAL";const vx=Gh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh extends Vh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Kh.type="SESSION";const Qh=Kh;/**
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
 */function yx(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ts{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ts(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(s).map(async u=>u(n.origin,o)),c=await yx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ts.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class xx{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,c)=>{const u=Oc("",20);i.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(d.data.response);break;default:clearTimeout(p),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return window}function wx(e){ht().location.href=e}/**
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
 */function Yh(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function bx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sx(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function kx(){return Yh()?self:null}/**
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
 */const Jh="firebaseLocalStorageDb",_x=1,as="firebaseLocalStorage",qh="fbase_key";class Mi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function js(e,t){return e.transaction([as],t?"readwrite":"readonly").objectStore(as)}function Cx(){const e=indexedDB.deleteDatabase(Jh);return new Mi(e).toPromise()}function El(){const e=indexedDB.open(Jh,_x);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(as,{keyPath:qh})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(as)?t(r):(r.close(),await Cx(),t(await El()))})})}async function Ed(e,t,n){const r=js(e,!0).put({[qh]:t,value:n});return new Mi(r).toPromise()}async function Ex(e,t){const n=js(e,!1).get(t),r=await new Mi(n).toPromise();return r===void 0?null:r.value}function Id(e,t){const n=js(e,!0).delete(t);return new Mi(n).toPromise()}const Ix=800,Tx=3;class Xh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await El(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Tx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ts._getInstance(kx()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await bx(),!this.activeServiceWorker)return;this.sender=new xx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Sx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await El();return await Ed(t,ss,"1"),await Id(t,ss),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ed(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Ex(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Id(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=js(i,!1).getAll();return new Mi(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ix)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xh.type="LOCAL";const jx=Xh;new zi(3e4,6e4);/**
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
 */function Zh(e,t){return t?Tt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Lc extends $h{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return fr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return fr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Px(e){return fx(e.auth,new Lc(e),e.bypassAuthState)}function Nx(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),dx(n,new Lc(e),e.bypassAuthState)}async function Rx(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),ux(n,new Lc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:l}=t;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Px;case"linkViaPopup":case"linkViaRedirect":return Rx;case"reauthViaPopup":case"reauthViaRedirect":return Nx;default:mt(this.auth,"internal-error")}}resolve(t){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=new zi(2e3,1e4);async function Ox(e,t,n){if(dt(e.app))return Promise.reject(it(e,"operation-not-supported-in-this-environment"));const r=Is(e);P1(e,t,Ac);const i=Zh(r,n);return new _n(r,"signInViaPopup",t,i).executeNotNull()}class _n extends eg{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const t=Oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ax.get())};t()}}_n.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx="pendingRedirect",To=new Map;class Dx extends eg{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=To.get(this.auth._key());if(!t){try{const r=await zx(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}To.set(this.auth._key(),t)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zx(e,t){const n=Ux(t),r=Fx(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Mx(e,t){To.set(e._key(),t)}function Fx(e){return Tt(e._redirectPersistence)}function Ux(e){return Io(Lx,e.config.apiKey,e.name)}async function Bx(e,t,n=!1){if(dt(e.app))return Promise.reject(Tn(e));const r=Is(e),i=Zh(r,t),s=await new Dx(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=10*60*1e3;class $x{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Hx(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!tg(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Wx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Td(t))}saveEventToCache(t){this.cachedEventUids.add(Td(t)),this.lastProcessedEventTime=Date.now()}}function Td(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function tg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Hx(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tg(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vx(e,t={}){return Ir(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kx=/^https?/;async function Qx(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Vx(e);for(const n of t)try{if(Yx(n))return}catch{}mt(e,"unauthorized-domain")}function Yx(e){const t=_l(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!Kx.test(n))return!1;if(Gx.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Jx=new zi(3e4,6e4);function jd(){const e=ht().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function qx(e){return new Promise((t,n)=>{var r,i,o;function s(){jd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{jd(),n(it(e,"network-request-failed"))},timeout:Jx.get()})}if(!((i=(r=ht().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=ht().gapi)===null||o===void 0)&&o.load)s();else{const l=rx("iframefcb");return ht()[l]=()=>{gapi.load?s():n(it(e,"network-request-failed"))},tx(`${nx()}?onload=${l}`).catch(c=>n(c))}}).catch(t=>{throw jo=null,t})}let jo=null;function Xx(e){return jo=jo||qx(e),jo}/**
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
 */const Zx=new zi(5e3,15e3),ew="__/auth/iframe",tw="emulator/auth/iframe",nw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iw(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Tc(t,tw):`https://${e.config.authDomain}/${ew}`,r={apiKey:t.apiKey,appName:e.name,v:Di},i=rw.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Li(r).slice(1)}`}async function ow(e){const t=await Xx(e),n=ht().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:iw(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nw,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=it(e,"network-request-failed"),l=ht().setTimeout(()=>{o(s)},Zx.get());function c(){ht().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{o(s)})}))}/**
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
 */const sw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aw=500,lw=600,cw="_blank",uw="http://localhost";class Pd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dw(e,t,n,r=aw,i=lw){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},sw),{width:r.toString(),height:i.toString(),top:o,left:s}),u=_e().toLowerCase();n&&(l=Lh(u)?cw:n),Ah(u)&&(t=t||uw,c.scrollbars="yes");const p=Object.entries(c).reduce((d,[x,b])=>`${d}${x}=${b},`,"");if(K1(u)&&l!=="_self")return fw(t||"",l),new Pd(null);const h=window.open(t||"",l,p);L(h,e,"popup-blocked");try{h.focus()}catch{}return new Pd(h)}function fw(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pw="__/auth/handler",hw="emulator/auth/handler",gw=encodeURIComponent("fac");async function Nd(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Di,eventId:i};if(t instanceof Ac){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",p0(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[p,h]of Object.entries({}))s[p]=h}if(t instanceof Tr){const p=t.getScopes().filter(h=>h!=="");p.length>0&&(s.scopes=p.join(","))}e.tenantId&&(s.tid=e.tenantId);const l=s;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await e._getAppCheckToken(),u=c?`#${gw}=${encodeURIComponent(c)}`:"";return`${mw(e)}?${Li(l).slice(1)}${u}`}function mw({config:e}){return e.emulator?Tc(e,hw):`https://${e.authDomain}/${pw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="webStorageSupport";class vw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qh,this._completeRedirectFn=Bx,this._overrideRedirectResult=Mx}async _openPopup(t,n,r,i){var o;Dt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Nd(t,n,r,_l(),i);return dw(t,s,Oc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Nd(t,n,r,_l(),i);return wx(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Dt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await ow(t),r=new $x(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ba,{type:ba},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ba];s!==void 0&&n(!!s),mt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qx(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uh()||Oh()||Nc()}}const yw=vw;var Rd="@firebase/auth",Ad="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bw(e){Ci(new br("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=r.options;L(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bh(e)},u=new Z1(r,i,o,c);return ox(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ci(new br("auth-internal",t=>{const n=Is(t.getProvider("auth").getImmediate());return(r=>new xw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(Rd,Ad,ww(e)),cr(Rd,Ad,"esm2017")}/**
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
 */const Sw=5*60,kw=yh("authIdTokenMaxAge")||Sw;let Od=null;const _w=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kw)return;const i=n==null?void 0:n.token;Od!==i&&(Od=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Cw(e=g1()){const t=Sh(e,"auth");if(t.isInitialized())return t.getImmediate();const n=ix(e,{popupRedirectResolver:yw,persistence:[jx,vx,Qh]}),r=yh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=_w(o.toString());hx(n,s,()=>s(n.currentUser)),px(n,l=>s(l))}}const i=qy("auth");return i&&sx(n,`http://${i}`),n}function Ew(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}ex({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=it("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Ew().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bw("Browser");const ng={apiKey:"AIzaSyCNsYDBSfYMJUxqbkC3Cb_w6CYGtW4Xf20",authDomain:"cloudvault-58446.firebaseapp.com",projectId:"cloudvault-58446",storageBucket:"cloudvault-58446.firebasestorage.app",messagingSenderId:"378535306521",appId:"1:378535306521:web:2e5fe57db925753d0f5188"},Iw=["google","github","microsoft"];let Sa=null,Ld=null;function Tw(){return ls()?(Sa||(Sa=kh(ng),Ld=Cw(Sa)),Ld):null}function ls(){return!0}function rg(){const e=Object.entries(ng).filter(([,t])=>!t).map(([t])=>t);return{configured:ls(),providers:Iw.map(t=>({id:t,configured:ls()})),missingEnv:e}}function Dd(e="firebase"){rg().configured||console.info(`[${e}] social login is not configured for this build`)}async function jw(e){const t=Tw();if(!t)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env variables.");const r={google:new kt,github:new _t,microsoft:new ai("microsoft.com")}[e];if(!r)throw new Error("Unknown provider");const i=await Ox(t,r),o=await i.user.getIdToken(),s=await fetch(`${gt}/auth/firebase`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:o,email:i.user.email,fullName:i.user.displayName,avatarUrl:i.user.photoURL,provider:e})}),l=await s.json();if(!s.ok)throw new Error(l.error||l.message||"Firebase login failed");return l.success?l.data:l}function Pw({onVerified:e,onError:t,onExpire:n,theme:r="auto",size:i="normal"}){const o=y.useRef(null),[s,l]=y.useState(!1),[c,u]=y.useState(!0),[p,h]=y.useState(null);y.useEffect(()=>{if(window.turnstile)l(!0),u(!1);else{const x=document.createElement("script");x.src="https://challenges.cloudflare.com/turnstile/v0/api.js",x.async=!0,x.defer=!0,x.onload=()=>{l(!0),u(!1),console.log("TURNSTILE: Script loaded")},x.onerror=()=>{h("Failed to load Turnstile"),u(!1),t==null||t("Failed to load Turnstile")},document.head.appendChild(x)}return()=>{if(o.current&&window.turnstile)try{window.turnstile.remove(o.current)}catch(x){console.error("TURNSTILE: Error removing widget:",x)}}},[]),y.useEffect(()=>{if(s&&o.current&&window.turnstile){const x="Turnstile site key not configured";h(x),t==null||t(x),u(!1);return}},[s,r,i,e,t,n]);const d=()=>{if(o.current&&window.turnstile)try{window.turnstile.reset(o.current),h(null)}catch(x){console.error("TURNSTILE: Error resetting widget:",x)}};return y.useEffect(()=>{o.current&&(o.current.reset=d)},[]),c?a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",background:"var(--bg-secondary)",borderRadius:"var(--radius)",border:"1px solid var(--border)"},children:a.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid var(--border)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})}):p?a.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"var(--radius)",border:"1px solid var(--danger)",color:"var(--danger)",fontSize:"13px",textAlign:"center"},children:[p,a.jsx("button",{type:"button",onClick:d,style:{marginTop:"8px",padding:"6px 12px",background:"var(--danger)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px"},children:"Retry"})]}):a.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",minHeight:i==="compact"?140:70,overflow:"hidden"},children:a.jsx("div",{ref:o})})}const Nw=[{id:"google",label:"Google",mark:"G"},{id:"github",label:"GitHub",mark:"GH"},{id:"microsoft",label:"Microsoft",mark:"MS"}],uo=e=>{if(!e)return"Something went wrong. Please try again.";const t=e.toLowerCase();return t.includes("access token")||t.includes("firebase")||t.includes("oauth")?"Something went wrong. Please try again.":t.includes("failed to fetch")||t.includes("cannot reach")?"We could not reach CloudVault. Please try again in a moment.":e};function Rw({size:e=22,color:t="#1a1a1a"}){return a.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:t,borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Aw({onAuth:e,onBack:t,onNeedsVerification:n,initialMode:r="login"}){const[i,o]=y.useState(r),[s,l]=y.useState({email:"",password:"",fullName:""}),[c,u]=y.useState(!1),[p,h]=y.useState(""),[d,x]=y.useState(""),[b,S]=y.useState(!0),[R,g]=y.useState(!1),[f,m]=y.useState(null),[w,C]=y.useState(!1),[E,j]=y.useState(0),T=ls(),H=y.useMemo(()=>rg(),[]),P=!1;y.useEffect(()=>{Dd("AuthScreen")},[]);const se=async()=>{var k,A,O;h(""),x(""),u(!0);try{if(P&&!w){h("Please complete the security verification"),u(!1);return}const z={email:s.email,password:s.password,rememberMe:b,...P&&{turnstileToken:f}};if(i==="login"){const D=await Yt("/auth/login",{method:"POST",body:JSON.stringify(z)});if(!(D!=null&&D.accessToken))throw new Error("Something went wrong. Please try again.");b?(localStorage.setItem("cv_token",D.accessToken),D.refreshToken&&localStorage.setItem("cv_refreshToken",D.refreshToken),localStorage.setItem("cv_user",((k=D.user)==null?void 0:k.fullName)||s.email)):(sessionStorage.setItem("cv_token",D.accessToken),D.refreshToken&&sessionStorage.setItem("cv_refreshToken",D.refreshToken),sessionStorage.setItem("cv_user",((A=D.user)==null?void 0:A.fullName)||s.email)),e(D.accessToken,D.refreshToken,((O=D.user)==null?void 0:O.fullName)||s.email,D.user,b)}else{z.fullName=s.fullName;const D=await Yt("/auth/register",{method:"POST",body:JSON.stringify(z)});x("Account created. Check your email and open the verification link to activate your account."),e==null||e(null,null,D.email||s.email,{email:D.email||s.email,fullName:D.fullName||s.fullName})}}catch(z){h(uo(z.message)),P&&(m(null),C(!1),j(D=>D+1))}u(!1)},fe=async k=>{var A,O;if(h(""),x(""),!T){h("Social login is not available right now. Please use email and password."),Dd(`AuthScreen:${k}`);return}u(!0);try{const z=await jw(k);if(!(z!=null&&z.accessToken))throw new Error("Something went wrong. Please try again.");localStorage.setItem("cv_token",z.accessToken),z.refreshToken&&localStorage.setItem("cv_refreshToken",z.refreshToken),localStorage.setItem("cv_user",((A=z.user)==null?void 0:A.fullName)||s.email),e(z.accessToken,z.refreshToken,((O=z.user)==null?void 0:O.fullName)||s.email,z.user,!0)}catch(z){h(uo(z.message))}u(!1)},pe=p!=null&&p.includes("Please verify your email before logging in")?"Please verify your email before logging in. Check your inbox for the verification link, then return to sign in.":p,vt=p==null?void 0:p.includes("Please verify your email before logging in"),hn=async()=>{if(!s.email){h("Enter your email address first");return}h(""),x(""),u(!0);try{await Yt("/auth/resend-verification",{method:"POST",body:JSON.stringify({email:s.email})}),x("A new verification email has been sent. Open the link in your inbox to continue."),n==null||n({email:s.email,fullName:s.fullName})}catch(k){h(uo(k.message))}u(!1)},gn=async()=>{if(!s.email){h("Enter your email address first");return}h(""),x(""),u(!0);try{if(P&&!w){h("Please complete the security verification"),u(!1);return}const k={email:s.email};P&&(k.turnstileToken=f),await Yt("/auth/forgot-password",{method:"POST",body:JSON.stringify(k)}),x("If an account exists, a reset link has been sent."),g(!1)}catch(k){h(uo(k.message)),P&&(m(null),C(!1),j(A=>A+1))}u(!1)},Re=(k,A,O,z="text")=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[a.jsx("label",{style:{color:"var(--text-secondary)",fontWeight:600,fontSize:13},children:A}),a.jsx("input",{type:z,className:"input-field",placeholder:O,value:s[k],onChange:D=>l(Ue=>({...Ue,[k]:D.target.value})),onKeyDown:D=>D.key==="Enter"&&!R&&se()})]});return a.jsxs("div",{className:"auth-screen",children:[a.jsx("style",{children:In}),a.jsx("button",{type:"button",className:"page-back-btn",onClick:t,style:{position:"fixed",left:26,top:16},children:"← Back"}),a.jsxs("div",{className:"auth-card",children:[a.jsxs("div",{style:{marginBottom:22},children:[a.jsx("div",{style:{width:34,height:34,borderRadius:12,marginBottom:14,background:"#000",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20},children:Oe.logo}),a.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800},children:R?"Reset password":i==="login"?`Log in to ${Oe.name}`:"Create your account"})]}),!R&&a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{display:"flex",gap:4,background:"#f3f4f6",borderRadius:14,padding:4,marginBottom:20,border:"1px solid var(--border)"},children:["login","register"].map(k=>a.jsx("button",{type:"button",onClick:()=>o(k),className:`auth-tab${i===k?" active":""}`,children:k==="login"?"Sign In":"Sign Up"},k))}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[Re("email","Email address","Email address","email"),i==="register"&&Re("fullName","Full name","Full name"),Re("password","Password","Password","password")]}),i==="login"&&a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},children:[a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--text-secondary)",fontSize:12},children:[a.jsx("input",{type:"checkbox",checked:b,onChange:k=>S(k.target.checked)}),"Remember me"]}),a.jsx("button",{type:"button",onClick:()=>g(!0),style:{background:"none",border:"none",color:"var(--accent-blue)",fontSize:12,textDecoration:"underline",cursor:"pointer"},children:"Forgot password?"})]})]}),R&&a.jsxs("div",{style:{marginBottom:16},children:[Re("email","Email address","your@email.com","email"),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginTop:10},children:"We'll send a link to reset your password."})]}),pe&&a.jsxs("div",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.45,marginTop:14,padding:"10px 12px",border:"1px solid rgba(248,113,113,.24)",borderRadius:12,background:"rgba(248,113,113,.08)"},children:[pe,vt&&a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:10},children:[a.jsx("button",{type:"button",onClick:()=>n==null?void 0:n({email:s.email,fullName:s.fullName}),className:"btn-secondary",style:{minHeight:40,fontSize:12},children:"Verify email"}),a.jsx("button",{type:"button",onClick:hn,disabled:c,className:"btn-secondary",style:{minHeight:40,fontSize:12},children:"Resend email"})]})]}),d&&a.jsx("div",{style:{color:"var(--accent-blue)",fontSize:13,marginTop:14},children:d}),P&&a.jsx("div",{style:{marginTop:16},children:a.jsx(Pw,{onVerified:k=>{m(k),C(!0)},onError:()=>{h("Security verification failed. Please try again."),C(!1)},onExpire:()=>{m(null),C(!1)}},E)}),a.jsx("button",{type:"button",onClick:R?gn:se,disabled:c||P&&!w,className:"btn-primary",style:{width:"100%",marginTop:20,opacity:c||P&&!w?.7:1,cursor:c||P&&!w?"not-allowed":"pointer"},children:c?a.jsx(Rw,{}):R?"Send reset link":P&&!w?"Complete security verification first":i==="login"?"Log in":"Create account"}),R?a.jsx("button",{type:"button",onClick:()=>g(!1),style:{width:"100%",marginTop:12,background:"none",border:"none",color:"var(--text-muted)",cursor:"pointer"},children:"Back to login"}):a.jsxs("div",{style:{marginTop:20},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:12},children:[a.jsx("div",{style:{height:1,flex:1,background:"var(--border)"}}),a.jsx("span",{style:{color:"var(--text-muted)",fontSize:12},children:"Or continue with"}),a.jsx("div",{style:{height:1,flex:1,background:"var(--border)"}})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:8},children:Nw.map(k=>{const A=H.providers.find(O=>O.id===k.id);return a.jsxs("button",{type:"button",disabled:c,"aria-disabled":!(A!=null&&A.configured),onClick:()=>fe(k.id),className:"btn-secondary",style:{width:"100%",minHeight:44,display:"flex",alignItems:"center",justifyContent:"center",gap:10},children:[a.jsx("span",{"aria-hidden":"true",style:{width:26,height:26,borderRadius:8,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"#f3f4f6",color:"#111827",fontSize:11,fontWeight:800,flexShrink:0},children:k.mark}),"Continue with ",k.label]},k.id)})})]})]})]})}function Ow({size:e=22}){return a.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Lw({file:e,token:t,onClose:n}){const[r,i]=y.useState(null),[o,s]=y.useState(""),[l,c]=y.useState(!0),[u,p]=y.useState(""),[h,d]=y.useState(1),[x,b]=y.useState(0),[S,R]=y.useState(!1),g=My(e.mimeType);y.useEffect(()=>{let w=null,C=!1;return(async()=>{c(!0),p("");try{const E=await Sc(e.id,t,{disposition:"preview"});if(C)return;if(g==="text"){const j=await E.text();s(j)}else w=URL.createObjectURL(E),i(w)}catch(E){C||p(E.message||"Preview failed")}finally{C||c(!1)}})(),()=>{C=!0,w&&URL.revokeObjectURL(w)}},[e.id,t,g]);const f=(w,C,E=!1)=>a.jsx("button",{type:"button",onClick:C,disabled:E,style:{padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",cursor:E?"not-allowed":"pointer",fontFamily:"var(--font)",fontSize:12,fontWeight:600},children:w}),m=()=>l?a.jsx("div",{style:{padding:48,textAlign:"center"},children:a.jsx(Ow,{size:32})}):u?a.jsx("p",{style:{color:"var(--danger)",padding:24,textAlign:"center"},children:u}):g==="image"&&r?a.jsx("img",{src:r,alt:e.name,style:{maxWidth:S?"96vw":"80vw",maxHeight:S?"90vh":"70vh",borderRadius:12,transform:`scale(${h}) rotate(${x}deg)`,transition:"transform .2s ease"}}):g==="pdf"&&r?a.jsx("iframe",{src:r,title:e.name,style:{width:"75vw",height:"75vh",border:"none",borderRadius:12}}):g==="video"&&r?a.jsx("video",{src:r,controls:!0,style:{maxWidth:"80vw",maxHeight:"75vh",borderRadius:12}}):g==="audio"&&r?a.jsx("audio",{src:r,controls:!0,style:{width:"min(480px, 80vw)"}}):g==="text"?a.jsx("pre",{style:{maxWidth:"80vw",maxHeight:"70vh",overflow:"auto",padding:16,background:"var(--bg-card)",borderRadius:12,color:"var(--text)",fontSize:13,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:o}):a.jsx("p",{style:{padding:24,color:"var(--text-muted)"},children:"Preview not available for this file type."});return a.jsx("div",{onClick:n,style:{position:"fixed",inset:0,zIndex:1e3,background:S?"#000":"rgba(0,0,0,.88)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)",animation:"fadeIn .2s ease"},children:a.jsxs("div",{onClick:w=>w.stopPropagation(),style:{background:S?"transparent":"var(--bg-primary)",borderRadius:S?0:20,border:S?"none":"1.5px solid var(--border)",maxWidth:S?"100vw":"95vw",maxHeight:S?"100vh":"95vh",width:S?"100%":void 0,height:S?"100%":void 0,overflow:"auto",padding:S?16:24,boxShadow:S?"none":"var(--shadow)",display:"flex",flexDirection:"column"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:12},children:[a.jsx("div",{style:{color:"var(--text)",fontWeight:700,fontSize:16,flex:1,overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),g==="image"&&a.jsxs("div",{style:{display:"flex",gap:6},children:[f("−",()=>d(w=>Math.max(.25,w-.25))),f("+",()=>d(w=>Math.min(4,w+.25))),f("↻",()=>b(w=>(w+90)%360)),f(S?"⊡":"⛶",()=>R(w=>!w))]}),a.jsx("button",{type:"button",onClick:n,style:{background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:8,color:"var(--text-secondary)",cursor:"pointer",width:32,height:32},children:"✕"})]}),a.jsx("div",{style:{display:"flex",justifyContent:"center"},children:m()})]})})}function Dw({fileId:e,token:t,alt:n,mimeType:r}){const[i,o]=y.useState(null),[s,l]=y.useState(!1);return y.useEffect(()=>{if(!e||!t||!(r!=null&&r.startsWith("image/")))return;let c=null,u=!1;return Sc(e,t,{disposition:"preview"}).then(p=>{u||(c=URL.createObjectURL(p),o(c))}).catch(()=>{u||l(!0)}),()=>{u=!0,c&&URL.revokeObjectURL(c)}},[e,t,r]),!(r!=null&&r.startsWith("image/"))||s?a.jsx("div",{style:{fontSize:44,display:"flex"},children:Ai(r)}):i?a.jsx("img",{src:i,alt:n,style:{width:"100%",height:"100%",objectFit:"cover"},onError:()=>l(!0)}):a.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite"}})}function zw({trashedFiles:e,trashedFolders:t,loading:n,onRestoreFile:r,onRestoreFolder:i,onPermanentDelete:o,onEmptyTrash:s,onBack:l}){return a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[a.jsxs("div",{children:[a.jsx("button",{type:"button",onClick:l,style:Mw,children:"← Back to My Cloud"}),a.jsx("h2",{style:{color:"var(--text)",fontWeight:800,fontSize:22,marginTop:8},children:"Trash"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"Items in trash still count toward storage until permanently deleted."})]}),(e.length>0||t.length>0)&&a.jsx("button",{type:"button",onClick:s,style:Fw,children:"Empty trash"})]}),n?a.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading trash…"}):e.length===0&&t.length===0?a.jsxs("div",{style:{textAlign:"center",padding:64,color:"var(--text-muted)",border:"1px dashed var(--border)",borderRadius:16},children:[a.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🗑️"}),a.jsx("div",{style:{fontWeight:700},children:"Trash is empty"})]}):a.jsxs(a.Fragment,{children:[t.length>0&&a.jsxs("section",{style:{marginBottom:24},children:[a.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FOLDERS"}),t.map(c=>a.jsx(zd,{icon:"📁",name:c.name,meta:"Folder",onRestore:()=>i(c.id)},c.id))]}),e.length>0&&a.jsxs("section",{children:[a.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FILES"}),e.map(c=>a.jsx(zd,{icon:Ai(c.mimeType),name:c.name,meta:`${ue(c.size)} · ${Ot(c.trashedAt||c.deletedAt)}`,onRestore:()=>r(c.id),onDelete:()=>o(c)},c.id))]})]})]})}function zd({icon:e,name:t,meta:n,onRestore:r,onDelete:i}){return a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,marginBottom:8},children:[a.jsx("span",{style:{fontSize:24},children:e}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t}),a.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:n})]}),a.jsx("button",{type:"button",onClick:r,style:Md,children:"Restore"}),i&&a.jsx("button",{type:"button",onClick:i,style:{...Md,color:"var(--danger)"},children:"Delete forever"})]})}const Mw={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"},Fw={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontFamily:"var(--font)"},Md={padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--font)"};function Uw({file:e,mode:t,folders:n,currentFolderId:r,onConfirm:i,onCancel:o}){const[s,l]=y.useState(r||""),[c,u]=y.useState(e.name),p=ig(n);return a.jsx("div",{onClick:o,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:a.jsxs("div",{onClick:h=>h.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(420px, 92vw)",animation:"scaleIn .2s ease"},children:[a.jsxs("h3",{style:{color:"var(--text)",fontWeight:700,fontSize:18,marginBottom:8},children:[t==="move"?"Move":"Copy"," file"]}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:20},children:e.name}),a.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"Destination folder"}),a.jsxs("select",{value:s,onChange:h=>l(h.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"},children:[a.jsx("option",{value:"",children:"My Cloud (root)"}),p.map(h=>a.jsxs("option",{value:h.id,disabled:h.id===e.folderId,children:["—".repeat(h.depth)," ",h.name]},h.id))]}),t==="copy"&&a.jsxs(a.Fragment,{children:[a.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"New name (optional)"}),a.jsx("input",{value:c,onChange:h=>u(h.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"}})]}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[a.jsx("button",{type:"button",onClick:o,style:og,children:"Cancel"}),a.jsx("button",{type:"button",onClick:()=>i({targetFolderId:s||null,newName:t==="copy"?c:void 0}),style:Bw,children:t==="move"?"Move":"Copy"})]})]})})}function ig(e,t=0){var r;const n=[];for(const i of e)n.push({...i,depth:t}),(r=i.children)!=null&&r.length&&n.push(...ig(i.children,t+1));return n}const og={padding:"10px 20px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},Bw={...og,border:"none",background:"var(--accent)",color:"#fff"};function Ww({file:e,allTags:t,onSave:n,onCancel:r}){const[i,o]=y.useState(e.tags||[]),[s,l]=y.useState(""),c=u=>{const p=u.trim().toLowerCase();!p||i.includes(p)||i.length>=20||(o([...i,p]),l(""))};return a.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:a.jsxs("div",{onClick:u=>u.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(440px, 92vw)"},children:[a.jsx("h3",{style:{color:"var(--text)",fontWeight:700,marginBottom:4},children:"Edit tags"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:16},children:e.name}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12},children:i.map(u=>a.jsxs("span",{style:{background:"rgba(240,22,58,.15)",color:"var(--accent)",padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[u,a.jsx("button",{type:"button",onClick:()=>o(i.filter(p=>p!==u)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:"×"})]},u))}),a.jsx("input",{value:s,onChange:u=>l(u.target.value),onKeyDown:u=>{u.key==="Enter"&&(u.preventDefault(),c(s))},placeholder:"Add tag and press Enter",style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",marginBottom:12}}),t.length>0&&a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6},children:"Suggestions"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:t.filter(u=>!i.includes(u)).slice(0,12).map(u=>a.jsxs("button",{type:"button",onClick:()=>c(u),style:{padding:"4px 10px",borderRadius:20,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",fontSize:12,cursor:"pointer"},children:["+ ",u]},u))})]}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[a.jsx("button",{type:"button",onClick:r,style:sg,children:"Cancel"}),a.jsx("button",{type:"button",onClick:()=>n(i),style:$w,children:"Save tags"})]})]})})}const sg={padding:"10px 18px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},$w={...sg,border:"none",background:"var(--accent)",color:"#fff"};function Hw({file:e,onShare:t,onCancel:n}){const[r,i]=y.useState("link"),[o,s]=y.useState("view"),[l,c]=y.useState("private"),[u,p]=y.useState(""),[h,d]=y.useState(""),[x,b]=y.useState(""),[S,R]=y.useState(""),[g,f]=y.useState(!1),[m,w]=y.useState(""),[C,E]=y.useState(!1),j=y.useMemo(()=>{const P=[o==="view"?"View only":o==="download"?"Download allowed":"Can edit"];return h&&P.push("Password protected"),x&&P.push("Expires automatically"),S&&P.push(`${S} view limit`),P.join(" · ")},[o,h,x,S]),T=async()=>{var P;f(!0);try{const se={shareType:r,permission:o,visibility:l,...h&&{password:h},...x&&{expiresAt:new Date(x).toISOString()},...S&&{maxViews:Number(S)},...r==="email"&&{sharedWithEmail:u,email:u}},fe=await t(se),pe=(fe==null?void 0:fe.shareUrl)||((P=fe==null?void 0:fe.data)==null?void 0:P.shareUrl);pe&&w(pe)}finally{f(!1)}},H=async()=>{var P;m&&(await((P=navigator.clipboard)==null?void 0:P.writeText(m)),E(!0),setTimeout(()=>E(!1),1500))};return a.jsx("div",{onClick:n,style:Vw,children:a.jsxs("div",{onClick:P=>P.stopPropagation(),style:Gw,children:[a.jsxs("div",{style:Kw,children:[a.jsxs("div",{children:[a.jsx("div",{style:Qw,children:"Secure sharing"}),a.jsx("h3",{style:Yw,children:"Share file"}),a.jsx("p",{style:Jw,children:e.name})]}),a.jsx("button",{type:"button",title:"Close",onClick:n,style:qw,children:"x"})]}),a.jsxs("div",{style:Ud,children:[a.jsx(Fd,{label:"Method",value:r,onChange:i,options:[["link","Link"],["email","Email"]]}),a.jsx(Fd,{label:"Access",value:l,onChange:c,options:[["private","Private"],["public","Public"],["protected","Protected"]]})]}),r==="email"&&a.jsx(Hn,{label:"Recipient email",children:a.jsx("input",{type:"email",value:u,onChange:P=>p(P.target.value),placeholder:"teammate@company.com",style:Br})}),a.jsx(Hn,{label:"Permission",children:a.jsxs("select",{value:o,onChange:P=>s(P.target.value),style:Br,children:[a.jsx("option",{value:"view",children:"View only"}),a.jsx("option",{value:"download",children:"View and download"}),a.jsx("option",{value:"edit",children:"Edit metadata"})]})}),a.jsxs("div",{style:Ud,children:[a.jsx(Hn,{label:"Password",children:a.jsx("input",{type:"password",value:h,onChange:P=>d(P.target.value),placeholder:"Optional",style:Br})}),a.jsx(Hn,{label:"Max views",children:a.jsx("input",{type:"number",min:"1",value:S,onChange:P=>R(P.target.value),placeholder:"Unlimited",style:Br})})]}),a.jsx(Hn,{label:"Expiration",children:a.jsx("input",{type:"datetime-local",value:x,onChange:P=>b(P.target.value),style:Br})}),a.jsxs("div",{style:eb,children:[a.jsx("strong",{children:"Share policy"}),a.jsx("span",{children:j})]}),m&&a.jsxs("div",{style:tb,children:[a.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6,fontWeight:800,textTransform:"uppercase"},children:"Share link"}),a.jsx("div",{style:{fontSize:13,wordBreak:"break-all",color:"var(--accent-blue)"},children:m}),a.jsx("button",{type:"button",onClick:H,style:{marginTop:10,...Bd},children:C?"Copied":"Copy link"})]}),a.jsxs("div",{style:nb,children:[a.jsx("button",{type:"button",onClick:n,style:ag,children:"Close"}),a.jsx("button",{type:"button",disabled:g||r==="email"&&!u,onClick:T,style:{...Bd,opacity:g?.7:1},children:g?"Creating...":m?"Create another":r==="email"?"Send invitation":"Create secure link"})]})]})})}function Fd({label:e,value:t,onChange:n,options:r}){return a.jsx(Hn,{label:e,children:a.jsx("div",{style:Xw,children:r.map(([i,o])=>a.jsx("button",{type:"button",onClick:()=>n(i),style:{...Zw,background:t===i?"var(--accent)":"transparent",color:t===i?"#fff":"var(--text-secondary)"},children:o},i))})})}function Hn({label:e,children:t}){return a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:e}),a.jsx("div",{style:{marginTop:6},children:t})]})}const Vw={position:"fixed",inset:0,zIndex:2e3,background:"rgba(1,6,12,.78)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(14px)",padding:18},Gw={background:"linear-gradient(180deg, rgba(24,33,45,.98), rgba(8,13,18,.98))",border:"1px solid var(--border-hover)",borderRadius:18,width:"min(720px, 96vw)",maxHeight:"92vh",overflow:"auto",boxShadow:"0 28px 90px rgba(0,0,0,.55), 0 0 70px rgba(20,184,166,.13)",animation:"scaleIn .2s ease"},Kw={padding:30,borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",gap:16,background:"linear-gradient(135deg, rgba(20,184,166,.22), rgba(56,189,248,.16) 48%, rgba(244,63,94,.14))"},Qw={fontSize:11,color:"var(--accent-blue)",fontWeight:900,textTransform:"uppercase",letterSpacing:1},Yw={fontWeight:900,fontSize:30,margin:"8px 0 5px"},Jw={color:"var(--text-secondary)",fontSize:15,overflowWrap:"anywhere"},qw={width:40,height:40,borderRadius:12,border:"1px solid var(--border)",background:"rgba(255,255,255,.1)",color:"var(--text)",cursor:"pointer",fontWeight:900,fontSize:16,transition:"var(--transition)"},Ud={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:14,padding:"0 30px"},Br={width:"100%",padding:"14px 15px",borderRadius:12,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)",fontSize:15,minHeight:48},Xw={display:"grid",gridTemplateColumns:"repeat(2, 1fr)",border:"1px solid var(--border)",borderRadius:12,overflow:"hidden",background:"var(--bg-card)"},Zw={border:"none",padding:"13px 14px",cursor:"pointer",fontWeight:900,fontFamily:"var(--font)",transition:"var(--transition)",fontSize:14},eb={margin:"8px 30px 0",padding:17,border:"1px solid rgba(56,189,248,.35)",borderRadius:14,background:"rgba(56,189,248,.1)",display:"flex",flexDirection:"column",gap:5,color:"var(--text-secondary)",fontSize:14},tb={margin:"18px 30px 0",padding:17,background:"var(--surface-raised)",borderRadius:14,border:"1px solid var(--border)"},nb={display:"grid",gridTemplateColumns:"minmax(130px, auto) minmax(180px, auto)",gap:10,marginTop:24,padding:"0 30px 30px",justifyContent:"flex-end"},ag={padding:"12px 22px",minHeight:44,borderRadius:10,border:"1px solid var(--border)",background:"rgba(255,255,255,.04)",color:"var(--text-secondary)",cursor:"pointer",fontWeight:800,fontFamily:"var(--font)",transition:"var(--transition)",whiteSpace:"nowrap"},Bd={...ag,border:"none",background:"var(--gradient)",color:"#fff",boxShadow:"0 12px 26px rgba(20,184,166,.2)"};function rb({stats:e,usage:t,onBack:n}){const r=(t==null?void 0:t.breakdown)||{},i=Object.values(r).reduce((s,l)=>s+l,0)||1,o=[{key:"images",label:"Images",color:"#f0163a"},{key:"videos",label:"Videos",color:"#4090ff"},{key:"documents",label:"Documents",color:"#f6b347"},{key:"audio",label:"Audio",color:"#22c55e"},{key:"other",label:"Other",color:"#94a3b8"}];return a.jsxs("div",{children:[a.jsx("button",{type:"button",onClick:n,style:ib,children:"← Back to My Cloud"}),a.jsx("h2",{style:{fontWeight:800,fontSize:22,margin:"12px 0 24px"},children:"Storage dashboard"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:12,marginBottom:28},children:[a.jsx(fo,{label:"Total files",value:e.totalFiles}),a.jsx(fo,{label:"Total folders",value:e.totalFolders}),a.jsx(fo,{label:"Storage used",value:ue(e.storageUsed)}),a.jsx(fo,{label:"Storage remaining",value:ue(Math.max(0,e.storageQuota-e.storageUsed))})]}),a.jsxs("section",{style:{marginBottom:28},children:[a.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"Storage usage"}),a.jsx("div",{style:{height:12,borderRadius:99,overflow:"hidden",display:"flex",background:"var(--border)"},children:o.map(s=>{const l=(r[s.key]||0)/i*100;return l<.5?null:a.jsx("div",{title:`${s.label}: ${ue(r[s.key]||0)}`,style:{width:`${l}%`,background:s.color,transition:"width .4s ease"}},s.key)})}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,marginTop:12},children:o.map(s=>a.jsxs("span",{style:{fontSize:12,color:"var(--text-muted)",display:"flex",alignItems:"center",gap:6},children:[a.jsx("span",{style:{width:8,height:8,borderRadius:99,background:s.color}}),s.label,": ",ue(r[s.key]||0)]},s.key))})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"File type distribution"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:o.map(s=>{const l=r[s.key]||0,c=Math.round(l/i*100);return a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[a.jsx("span",{children:s.label}),a.jsxs("span",{style:{color:"var(--text-muted)"},children:[c,"%"]})]}),a.jsx("div",{style:{height:6,background:"var(--border)",borderRadius:99,overflow:"hidden"},children:a.jsx("div",{style:{width:`${c}%`,height:"100%",background:s.color,borderRadius:99}})})]},s.key)})})]})]})}function fo({label:e,value:t}){return a.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:16},children:[a.jsx("div",{style:{fontSize:22,fontWeight:800},children:t}),a.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:e})]})}const ib={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"};function ob({users:e,systemHealth:t,loading:n,onBack:r}){return a.jsxs("div",{children:[a.jsx("button",{type:"button",onClick:r,style:sb,children:"← Back to My Cloud"}),a.jsx("h2",{style:{fontWeight:800,fontSize:22,margin:"12px 0 8px"},children:"Admin panel"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:24},children:"User management and system overview"}),t&&a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:28},children:[a.jsx(Wr,{label:"Total users",value:t.totalUsers??"—"}),a.jsx(Wr,{label:"Active users",value:t.activeUsers??"—"}),a.jsx(Wr,{label:"Total files",value:t.totalFiles??"—"}),a.jsx(Wr,{label:"Storage used",value:t.totalStorageUsed!=null?ue(t.totalStorageUsed):"—"}),a.jsx(Wr,{label:"Uploads today",value:t.uploadsToday??"—"})]}),a.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"Users"}),n?a.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading…"}):a.jsxs("div",{style:{overflowX:"auto",border:"1px solid var(--border)",borderRadius:12},children:[a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[a.jsx("thead",{children:a.jsxs("tr",{style:{background:"var(--bg-card)",textAlign:"left"},children:[a.jsx("th",{style:$r,children:"Email"}),a.jsx("th",{style:$r,children:"Name"}),a.jsx("th",{style:$r,children:"Role"}),a.jsx("th",{style:$r,children:"Storage"}),a.jsx("th",{style:$r,children:"Status"})]})}),a.jsx("tbody",{children:e.map(i=>a.jsxs("tr",{style:{borderTop:"1px solid var(--border)"},children:[a.jsx("td",{style:Hr,children:i.email}),a.jsx("td",{style:Hr,children:i.fullName||"—"}),a.jsx("td",{style:Hr,children:i.role}),a.jsxs("td",{style:Hr,children:[ue(i.storageUsed)," / ",ue(i.storageQuota)]}),a.jsx("td",{style:Hr,children:i.isActive?"Active":"Inactive"})]},i.id))})]}),e.length===0&&a.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)"},children:"No users found"})]})]})}function Wr({label:e,value:t}){return a.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:14},children:[a.jsx("div",{style:{fontWeight:800,fontSize:20},children:t}),a.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:e})]})}const $r={padding:"12px 14px",color:"var(--text-muted)",fontWeight:600},Hr={padding:"12px 14px",color:"var(--text-secondary)"},sb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"};function lg({file:e,onMove:t,onCopy:n,onTags:r,onDelete:i}){const[o,s]=y.useState(!1),l=y.useRef(null);y.useEffect(()=>{const u=p=>{l.current&&!l.current.contains(p.target)&&s(!1)};return o&&document.addEventListener("click",u),()=>document.removeEventListener("click",u)},[o]);const c=[{cue:"#",label:"Tags",onClick:()=>r(e)},{cue:"Move",label:"Move",onClick:()=>t(e)},{cue:"Copy",label:"Copy file",onClick:()=>n(e)},{cue:"Del",label:"Delete",onClick:()=>i(e),danger:!0}];return a.jsxs("div",{ref:l,style:{position:"relative"},children:[a.jsx("button",{type:"button",title:"More actions",onClick:u=>{u.stopPropagation(),s(p=>!p)},style:ab,children:"..."}),o&&a.jsx("div",{style:lb,children:c.map(u=>a.jsxs("button",{type:"button",onClick:p=>{p.stopPropagation(),s(!1),u.onClick()},style:{...cb,color:u.danger?"var(--danger)":"var(--text)"},children:[a.jsx("span",{style:{...ub,color:u.danger?"var(--danger)":"var(--accent-blue)"},children:u.cue}),a.jsx("span",{children:u.label})]},u.label))})]})}const ab={width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"rgba(255,255,255,.08)",color:"var(--text)",cursor:"pointer",fontSize:18,fontWeight:900,transition:"var(--transition)"},lb={position:"absolute",right:0,top:"100%",marginTop:6,minWidth:190,background:"var(--surface-raised)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"var(--shadow)",zIndex:50,overflow:"hidden",padding:6,animation:"floatIn .16s ease"},cb={display:"flex",alignItems:"center",gap:10,width:"100%",padding:"11px 12px",border:"none",borderRadius:10,background:"transparent",textAlign:"left",cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"var(--font)"},ub={width:34,opacity:.78,fontSize:11,fontWeight:900,textTransform:"uppercase"};function Bn({width:e="100%",height:t=16,radius:n=8,style:r={}}){return a.jsx("div",{style:{width:e,height:t,borderRadius:n,background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite",...r}})}function db({count:e=6,grid:t=!1}){return t?a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:12},children:Array.from({length:e}).map((n,r)=>a.jsxs("div",{style:{borderRadius:16,overflow:"hidden",border:"1px solid var(--border)"},children:[a.jsx(Bn,{height:140,radius:0}),a.jsxs("div",{style:{padding:12},children:[a.jsx(Bn,{height:12,width:"80%"}),a.jsx(Bn,{height:10,width:"50%",style:{marginTop:8}})]})]},r))}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Array.from({length:e}).map((n,r)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:"var(--bg-card)",borderRadius:12,border:"1px solid var(--border)"},children:[a.jsx(Bn,{width:36,height:36,radius:8}),a.jsxs("div",{style:{flex:1},children:[a.jsx(Bn,{height:14,width:"40%"}),a.jsx(Bn,{height:10,width:"25%",style:{marginTop:8}})]})]},r))})}function fb(e,t=400){const[n,r]=y.useState(e);return y.useEffect(()=>{const i=setTimeout(()=>r(e),t);return()=>clearTimeout(i)},[e,t]),n}async function pb(e,{createFolder:t,uploadFile:n,baseFolderId:r,onProgress:i}){const o=Array.from(e),s=new Map([["",r??null]]),l=u=>{const p=u.webkitRelativePath||u.name,h=p.split("/").filter(Boolean),d=h.pop();return{segments:h,fileName:d,rel:p}};o.sort((u,p)=>l(u).rel.localeCompare(l(p).rel));let c=0;for(const u of o){const{segments:p}=l(u);let h=r??null,d="";for(const x of p){if(d=d?`${d}/${x}`:x,!s.has(d)){const b=await t(x,h);s.set(d,b.id)}h=s.get(d)}await n(u,h),c+=1,i==null||i(Math.round(c/o.length*100))}}function hb(e){const t=new Map(e.map(r=>[r.id,{...r,children:[]}])),n=[];for(const r of e){const i=t.get(r.id);r.parentId&&t.has(r.parentId)?t.get(r.parentId).children.push(i):n.push(i)}return n}const cg=y.createContext(null);function gb({token:e,children:t}){const[n,r]=y.useState(null),[i,o]=y.useState([]),[s,l]=y.useState(0),[c,u]=y.useState(!0),p=y.useCallback(async()=>{if(e)try{const b=await Yt("/account",{},e);r(b)}catch{const b=await Yt("/users/me",{},e).catch(()=>null);b&&r(b)}},[e]),h=y.useCallback(async()=>{},[]),d=y.useCallback(async()=>{u(!0),await Promise.all([p(),h()]),u(!1)},[p,h]);y.useEffect(()=>{d()},[e]);const x=async()=>{};return a.jsx(cg.Provider,{value:{account:n,loading:c,notifications:i,unreadCount:s,refreshAccount:p,refreshNotifications:h,refreshAll:d,markAllRead:x},children:t})}function ug(){const e=y.useContext(cg);if(!e)throw new Error("useAccount must be used within AccountProvider");return e}function mb({account:e,onNavigate:t,onSignOut:n}){var u;const[r,i]=y.useState(!1),o=y.useRef(null);y.useEffect(()=>{const p=h=>{o.current&&!o.current.contains(h.target)&&i(!1)};return r&&document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[r]);const s=[{id:"profile",label:"My Profile"},{id:"settings",label:"Settings"},{id:"security",label:"Security"},{id:"dashboard",label:"Storage"},{id:"billing",label:"Billing"},{id:"billing",label:"Upgrade Plan",accent:!0},{id:"help",label:"Help Center"}],l=e==null?void 0:e.avatarUrl,c=((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"?").slice(0,1).toUpperCase();return a.jsxs("div",{ref:o,style:{position:"relative"},children:[a.jsxs("button",{type:"button",onClick:()=>i(p=>!p),style:{display:"flex",alignItems:"center",gap:8,padding:"4px 10px 4px 4px",borderRadius:999,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontFamily:"var(--font)"},children:[a.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:l?`url(${l}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:14},children:!l&&c}),a.jsx("span",{style:{color:"var(--text-secondary)",fontSize:13,fontWeight:600},children:"▾"})]}),r&&a.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",minWidth:200,background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300,overflow:"hidden",animation:"fadeIn .15s ease"},children:[a.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)"},children:[a.jsx("div",{style:{fontWeight:700,fontSize:14,color:"var(--text)"},children:(e==null?void 0:e.fullName)||"Account"}),a.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:e==null?void 0:e.email}),a.jsxs("div",{style:{fontSize:11,color:"var(--accent)",marginTop:6,fontWeight:600,textTransform:"capitalize"},children:[((u=e==null?void 0:e.planDetails)==null?void 0:u.name)||(e==null?void 0:e.plan)," plan"]})]}),s.map((p,h)=>a.jsx("button",{type:"button",onClick:()=>{i(!1),t(p.id==="dashboard"?"dashboard":p.id)},style:{display:"block",width:"100%",padding:"11px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,fontWeight:p.accent?700:500,color:p.accent?"var(--accent)":"var(--text-secondary)"},children:p.label},`${p.id}-${h}`)),a.jsx("div",{style:{borderTop:"1px solid var(--border)"},children:a.jsx("button",{type:"button",onClick:()=>{i(!1),n()},style:{display:"block",width:"100%",padding:"12px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,color:"var(--danger)",fontWeight:600},children:"Sign Out"})})]})]})}function vb({account:e,onUpgrade:t}){if(!(e!=null&&e.onTrial))return null;const n=e.trialDaysLeft??0;return a.jsxs("div",{style:{background:"linear-gradient(90deg, rgba(240,22,58,.12), rgba(64,144,255,.1))",borderBottom:"1px solid var(--border)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[a.jsxs("span",{style:{color:"var(--text-secondary)"},children:[a.jsx("strong",{style:{color:"var(--text)"},children:"Pro trial"})," — ",n," day",n!==1?"s":""," left · ",ue(e.storageUsed)," used"]}),a.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Upgrade"})]})}function yb({account:e,onOpenSettings:t}){return!(e!=null&&e.emailVerificationRequired)||(e==null?void 0:e.isVerified)!==!1?null:a.jsxs("div",{style:{background:"rgba(240, 22, 58, 0.12)",borderBottom:"1px solid rgba(240, 22, 58, 0.35)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[a.jsxs("span",{style:{color:"var(--text-secondary)"},children:[a.jsx("strong",{style:{color:"var(--danger)"},children:"Email not verified"})," — ","Uploads are disabled until you verify. Check your inbox or resend the link."]}),a.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Verify email"})]})}function Wd({email:e,token:t,onVerified:n,onBack:r}){const[i,o]=y.useState(e||""),[s,l]=y.useState(!!t),[c,u]=y.useState(""),[p,h]=y.useState(""),[d,x]=y.useState(!1);y.useEffect(()=>{t&&b(t)},[t]);const b=async R=>{l(!0),u("");try{const g=await fetch(`${gt}/auth/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:R})}),f=await g.json();if(!g.ok||!f.success)throw new Error(f.message||"Verification failed");x(!0),setTimeout(()=>n==null?void 0:n(),1200)}catch{u("This verification link is invalid or expired. Request a fresh email and try again.")}finally{l(!1)}},S=async()=>{if(!i){u("Enter your email address first.");return}l(!0),u(""),h("");try{const R=await fetch(`${gt}/auth/resend-verification`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}),g=await R.json();if(!R.ok||!g.success)throw new Error(g.message||"Failed to send verification email");h("A fresh verification email is on its way. Open the link in your inbox to continue.")}catch{u("Something went wrong. Please try again.")}finally{l(!1)}};return a.jsxs("div",{className:"auth-screen",children:[a.jsx("style",{children:In}),a.jsxs("div",{className:"auth-card",children:[a.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),a.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:d?"Email verified":t?"Verifying your email":"Check your inbox"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:d?"Your account is ready. You can now log in with your email and password.":t?"Hold tight while we confirm your CloudVault account.":"Open the verification link we sent after registration. You only need to do this once."}),!t&&!d&&a.jsxs(a.Fragment,{children:[a.jsxs("label",{style:{display:"block",marginBottom:14},children:[a.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:"Email address"}),a.jsx("input",{className:"input-field",type:"email",value:i,onChange:R=>o(R.target.value),placeholder:"you@company.com",style:{marginTop:6}})]}),a.jsx("button",{type:"button",onClick:S,disabled:s,className:"btn-primary",style:{width:"100%"},children:s?"Sending...":"Resend verification email"})]}),s&&a.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,marginTop:14},children:"Working on it..."}),c&&a.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginTop:14},children:c}),p&&a.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,lineHeight:1.5,marginTop:14},children:p}),a.jsx("button",{type:"button",onClick:r,className:"btn-secondary",style:{width:"100%",marginTop:14},children:"Back to login"})]})]})}function xb({notifications:e,unreadCount:t,onMarkAllRead:n}){const[r,i]=y.useState(!1),o=y.useRef(null);return y.useEffect(()=>{const s=l=>{o.current&&!o.current.contains(l.target)&&i(!1)};return r&&document.addEventListener("click",s),()=>document.removeEventListener("click",s)},[r]),a.jsxs("div",{ref:o,style:{position:"relative"},children:[a.jsxs("button",{type:"button",onClick:()=>i(s=>!s),style:{width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontSize:18,position:"relative"},title:"Notifications",children:["🔔",t>0&&a.jsx("span",{style:{position:"absolute",top:4,right:4,minWidth:16,height:16,borderRadius:99,background:"var(--accent)",color:"#fff",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"},children:t>9?"9+":t})]}),r&&a.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",width:320,maxHeight:400,overflow:"auto",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300},children:[a.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("span",{style:{fontWeight:700,fontSize:14},children:"Notifications"}),t>0&&a.jsx("button",{type:"button",onClick:n,style:wb,children:"Mark all read"})]}),e.length===0?a.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)",fontSize:13},children:"Nothing new"}):e.map(s=>a.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",background:s.read?"transparent":"rgba(240,22,58,.06)"},children:[a.jsx("div",{style:{fontWeight:600,fontSize:13},children:s.title}),s.body&&a.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:s.body}),a.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:6},children:Ot(s.createdAt)})]},s.id))]})]})}const wb={background:"none",border:"none",color:"var(--accent-blue)",fontSize:12,cursor:"pointer",fontWeight:600};function bb({account:e,onBack:t}){var r,i;if(!e)return null;const n=new Date(e.createdAt).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"});return a.jsxs("div",{style:{maxWidth:640},children:[a.jsx("button",{type:"button",onClick:t,style:Sb,children:"← Back"}),a.jsx("h1",{style:kb,children:"My Profile"}),a.jsx("div",{style:$d,children:a.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[a.jsx("div",{style:{width:88,height:88,borderRadius:"50%",background:e.avatarUrl?`url(${e.avatarUrl}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,color:"#fff",fontWeight:800},children:!e.avatarUrl&&(((r=e.fullName)==null?void 0:r[0])||"?").toUpperCase()}),a.jsxs("div",{children:[a.jsx("h2",{style:{margin:0,fontSize:22},children:e.fullName||"User"}),a.jsx("p",{style:{color:"var(--text-muted)",marginTop:6},children:e.email}),a.jsxs("p",{style:{color:"var(--accent)",fontWeight:600,fontSize:13,marginTop:8},children:[((i=e.planDetails)==null?void 0:i.name)||e.plan," plan",e.onTrial&&` · Trial (${e.trialDaysLeft}d left)`]})]})]})}),a.jsxs("div",{style:{...$d,marginTop:16},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[a.jsx("h3",{style:{fontSize:15,fontWeight:700,margin:0},children:"Storage Plan"}),a.jsxs("button",{type:"button",onClick:()=>window.location.href="/billing",style:{display:"flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:8,border:"1px solid var(--accent)",background:"var(--accent)",color:"#fff",fontWeight:600,fontSize:13,cursor:"pointer",fontFamily:"var(--font)",transition:"all 0.2s ease"},onMouseEnter:o=>o.currentTarget.style.background="var(--accent-hover)",onMouseLeave:o=>o.currentTarget.style.background="var(--accent)",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),"Upgrade Plan"]})]}),a.jsx(po,{label:"Member since",value:n}),a.jsx(po,{label:"Sign-in method",value:e.authProvider||"email"}),a.jsx(po,{label:"Email verified",value:e.isVerified?"Yes":"No"}),a.jsx(po,{label:"Storage used",value:`${ue(e.storageUsed)} / ${ue(e.storageQuota)}`})]})]})}function po({label:e,value:t}){return a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid var(--border)",fontSize:14},children:[a.jsx("span",{style:{color:"var(--text-muted)"},children:e}),a.jsx("span",{style:{fontWeight:600,textTransform:"capitalize"},children:t})]})}const Sb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,marginBottom:12,fontFamily:"var(--font)"},kb={fontSize:26,fontWeight:800,marginBottom:20},$d={background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:14,padding:24},_b=[{id:"dark",label:"Dark Professional"},{id:"light",label:"Light Professional"},{id:"midnight",label:"Midnight Blue"},{id:"purple",label:"Purple Professional"}];function Cb({account:e,api:t,token:n,onBack:r,onUpdated:i,notify:o,theme:s="dark",onThemeChange:l}){const[c,u]=y.useState((e==null?void 0:e.fullName)||""),[p,h]=y.useState((e==null?void 0:e.avatarUrl)||""),[d,x]=y.useState(""),[b,S]=y.useState(""),[R,g]=y.useState(""),[f,m]=y.useState(!1),w=async()=>{m(!0);try{await t("/users/me",{method:"PUT",body:JSON.stringify({fullName:c,avatarUrl:p||void 0})}),o("Profile updated","success"),i()}catch(T){o(T.message,"error")}m(!1)},C=async()=>{m(!0);try{await t("/users/me/password",{method:"PUT",body:JSON.stringify({currentPassword:d,newPassword:b})}),o("Password changed","success"),x(""),S("")}catch(T){o(T.message,"error")}m(!1)},E=async()=>{try{await t("/account/verify-email/resend",{method:"POST"}),o("Verification email sent","success")}catch(T){o(T.message,"error")}},j=async()=>{if(window.confirm("This will deactivate your account. Continue?"))try{await t("/account",{method:"DELETE",body:JSON.stringify({password:R})}),o("Account deactivated","success"),window.location.reload()}catch(T){o(T.message,"error")}};return a.jsxs("div",{style:{maxWidth:520},children:[a.jsx("button",{type:"button",onClick:r,style:Eb,children:"← Back"}),a.jsx("h1",{style:Ib,children:"Settings"}),a.jsxs("section",{style:Wn,children:[a.jsx("h3",{style:$n,children:"Profile"}),a.jsx(Vr,{label:"Display name",value:c,onChange:u}),a.jsx(Vr,{label:"Avatar URL",value:p,onChange:h,placeholder:"https://..."}),a.jsx("button",{type:"button",onClick:w,disabled:f,style:cs,children:"Save changes"})]}),(e==null?void 0:e.emailVerificationRequired)&&!(e!=null&&e.isVerified)&&a.jsxs("section",{style:{...Wn,marginTop:16},children:[a.jsx("h3",{style:$n,children:"Email verification"}),a.jsx("p",{style:ka,children:"Verify your email to upload files."}),a.jsx("button",{type:"button",onClick:E,style:Hd,children:"Resend verification email"})]}),(e==null?void 0:e.authProvider)==="email"&&a.jsxs("section",{style:{...Wn,marginTop:16},children:[a.jsx("h3",{style:$n,children:"Password"}),a.jsx(Vr,{label:"Current password",value:d,onChange:x,type:"password"}),a.jsx(Vr,{label:"New password",value:b,onChange:S,type:"password"}),a.jsx("button",{type:"button",onClick:C,disabled:f,style:cs,children:"Update password"})]}),a.jsxs("section",{style:{...Wn,marginTop:16},children:[a.jsx("h3",{style:$n,children:"Theme"}),a.jsx("p",{style:ka,children:"Choose how CloudVault looks across this browser."}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:10},children:_b.map(T=>a.jsx("button",{type:"button",onClick:()=>l==null?void 0:l(T.id),className:s===T.id?"btn-primary":"btn-secondary",style:{minHeight:44,textAlign:"left"},children:T.label},T.id))})]}),a.jsxs("section",{style:{...Wn,marginTop:16},children:[a.jsx("h3",{style:$n,children:"Notifications"}),a.jsx("p",{style:ka,children:"Product updates, file activity, and security emails are enabled for important account events."}),a.jsx("button",{type:"button",style:Hd,children:"Email notifications on"})]}),a.jsxs("section",{style:{...Wn,marginTop:16,borderColor:"rgba(255,77,77,.3)"},children:[a.jsx("h3",{style:{...$n,color:"var(--danger)"},children:"Delete account"}),(e==null?void 0:e.authProvider)==="email"&&a.jsx(Vr,{label:"Confirm password",value:R,onChange:g,type:"password"}),a.jsx("button",{type:"button",onClick:j,style:jb,children:"Delete my account"})]})]})}function Vr({label:e,value:t,onChange:n,type:r="text",placeholder:i}){return a.jsxs("label",{style:{display:"block",marginBottom:14},children:[a.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:e}),a.jsx("input",{type:r,value:t,placeholder:i,onChange:o=>n(o.target.value),style:Tb})]})}const Eb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,marginBottom:12,fontFamily:"var(--font)"},Ib={fontSize:26,fontWeight:800,marginBottom:20},Wn={background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:14,padding:22},$n={fontSize:15,fontWeight:700,marginBottom:14},ka={fontSize:13,color:"var(--text-muted)",marginBottom:12},Tb={display:"block",width:"100%",marginTop:6,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-primary)",color:"var(--text)",fontFamily:"var(--font)"},cs={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer",fontFamily:"var(--font)"},Hd={...cs,background:"var(--bg-primary)",color:"var(--text)",border:"1px solid var(--border)"},jb={...cs,background:"var(--danger)"};function Pb({api:e,account:t,onBack:n,notify:r}){const[i,o]=y.useState([]),[s,l]=y.useState([]),[c,u]=y.useState((t==null?void 0:t.twoFactorEnabled)||!1);y.useEffect(()=>{e("/account/sessions").then(d=>o(d.sessions||[])).catch(()=>{}),e("/account/security/login-history").then(d=>l(d.history||[])).catch(()=>{})},[e]);const p=async()=>{try{const d=!c;await e("/account/security/2fa",{method:"POST",body:JSON.stringify({enabled:d})}),u(d),r(d?"2FA enabled":"2FA disabled","success")}catch(d){r(d.message,"error")}},h=async()=>{try{await e("/account/sessions",{method:"DELETE"}),o([]),r("All other sessions signed out","success")}catch(d){r(d.message,"error")}};return a.jsxs("div",{style:{maxWidth:640},children:[a.jsx("button",{type:"button",onClick:n,style:Nb,children:"← Back"}),a.jsx("h1",{style:Rb,children:"Security"}),a.jsxs("section",{style:_a,children:[a.jsx("h3",{style:Ca,children:"Two-factor authentication"}),a.jsx("p",{style:Vd,children:"Adds an extra step when signing in on new devices."}),a.jsx("button",{type:"button",onClick:p,style:c?Ab:dg,children:c?"Disable 2FA":"Enable 2FA"})]}),a.jsxs("section",{style:{..._a,marginTop:16},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[a.jsx("h3",{style:Ca,children:"Active sessions"}),a.jsx("button",{type:"button",onClick:h,style:Ob,children:"Sign out everywhere"})]}),i.length===0?a.jsx("p",{style:Vd,children:"No active sessions besides this one."}):i.map(d=>{var x;return a.jsxs("div",{style:Gd,children:[a.jsx("div",{style:{fontSize:13,fontWeight:600},children:((x=d.deviceInfo)==null?void 0:x.slice(0,60))||"Unknown device"}),a.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)"},children:[d.ipAddress," · ",Ot(d.createdAt)]})]},d.id)})]}),a.jsxs("section",{style:{..._a,marginTop:16},children:[a.jsx("h3",{style:Ca,children:"Login history"}),s.slice(0,10).map(d=>a.jsxs("div",{style:Gd,children:[a.jsx("div",{style:{fontSize:13},children:d.action}),a.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)"},children:[d.ipAddress||"—"," · ",Ot(d.createdAt)]})]},d.id))]})]})}const Nb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,marginBottom:12,fontFamily:"var(--font)"},Rb={fontSize:26,fontWeight:800,marginBottom:20},_a={background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:14,padding:22},Ca={fontSize:15,fontWeight:700,margin:0},Vd={fontSize:13,color:"var(--text-muted)",margin:"8px 0 12px"},Gd={padding:"10px 0",borderBottom:"1px solid var(--border)"},dg={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer"},Ab={...dg,background:"transparent",border:"1px solid var(--border)",color:"var(--text)"},Ob={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontSize:12,fontWeight:600};function Lb({account:e,api:t,onBack:n,notify:r,onUpdated:i}){const o=async l=>{try{await t("/billing/plan",{method:"POST",body:JSON.stringify({planId:l})}),r(`Switched to ${l}`,"success"),i()}catch(c){r(c.message,"error")}},s=async l=>{try{await t("/billing/storage",{method:"POST",body:JSON.stringify({addonId:l})}),r("Storage add-on applied","success"),i()}catch(c){r(c.message,"error")}};return a.jsxs("div",{style:{maxWidth:900},children:[a.jsx("button",{type:"button",onClick:n,className:"page-back-btn",children:"← Back"}),a.jsx("h1",{style:Db,children:"Billing & plans"}),(e==null?void 0:e.onTrial)&&a.jsxs("p",{style:{color:"var(--accent-amber)",marginBottom:20,fontSize:14},children:["Pro trial active — ",e.trialDaysLeft," days remaining, then you move to Free unless you upgrade."]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:14,marginBottom:32},children:fh.map(l=>a.jsxs("div",{className:`plan-card${l.highlight?" highlight":""}`,style:{borderColor:(e==null?void 0:e.plan)===l.id?"var(--accent)":void 0},children:[a.jsx("h3",{style:{margin:0},children:l.name}),a.jsxs("div",{style:{fontSize:28,fontWeight:800,margin:"8px 0"},children:[l.price,a.jsx("span",{style:{fontSize:13,fontWeight:500,color:"var(--text-muted)"},children:l.period})]}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:l.storage}),a.jsx("ul",{style:{fontSize:12,color:"var(--text-secondary)",paddingLeft:18,margin:"12px 0"},children:l.features.map(c=>a.jsx("li",{style:{marginBottom:4},children:c},c))}),a.jsx("button",{type:"button",disabled:(e==null?void 0:e.plan)===l.id&&!(e!=null&&e.onTrial),onClick:()=>o(l.id),className:(e==null?void 0:e.plan)===l.id&&!(e!=null&&e.onTrial)?"btn-secondary":"btn-primary",style:{width:"100%",marginTop:8},children:(e==null?void 0:e.plan)===l.id&&!(e!=null&&e.onTrial)?"Current":"Select"})]},l.id))}),a.jsx("h2",{style:{fontSize:18,fontWeight:700,marginBottom:12},children:"Add storage"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10},children:Fy.map(l=>a.jsxs("button",{type:"button",onClick:()=>s(l.id),className:"btn-secondary",children:[l.label," · ",l.price]},l.id))})]})}const Db={fontSize:26,fontWeight:800,marginBottom:8};function zb({onBack:e}){const t=[{q:"How do I verify my email?",a:"Open Settings and click Resend verification email. Uploads unlock after verification."},{q:"What happens when my trial ends?",a:"After 30 days on Pro trial, your account moves to the Free plan unless you upgrade."},{q:"Can I recover deleted files?",a:"Yes — open Trash from the sidebar, restore items, or delete them permanently."},{q:"How does sharing work?",a:"Use the Share action on any file to create a link or invite someone by email with view, download, or edit access."}];return a.jsxs("div",{style:{maxWidth:560},children:[a.jsx("button",{type:"button",onClick:e,style:Mb,children:"← Back"}),a.jsx("h1",{style:Fb,children:"Help Center"}),a.jsxs("p",{style:{color:"var(--text-muted)",marginBottom:24},children:["Quick answers for ",Oe.name,". Need more? Email support@",Oe.name.toLowerCase(),".app"]}),t.map(n=>a.jsxs("div",{style:Ub,children:[a.jsx("h3",{style:{fontSize:15,marginBottom:8},children:n.q}),a.jsx("p",{style:{fontSize:14,color:"var(--text-secondary)",lineHeight:1.5,margin:0},children:n.a})]},n.q))]})}const Mb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,marginBottom:12,fontFamily:"var(--font)"},Fb={fontSize:26,fontWeight:800,marginBottom:12},Ub={background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:18,marginBottom:12};function Bb({api:e,onBack:t}){const[n,r]=y.useState([]);return y.useEffect(()=>{e("/account/activity").then(i=>r(i.activity||[])).catch(()=>{})},[e]),a.jsxs("div",{style:{maxWidth:640},children:[a.jsx("button",{type:"button",onClick:t,style:Wb,children:"← Back"}),a.jsx("h1",{style:$b,children:"Activity"}),n.length===0?a.jsx("p",{style:{color:"var(--text-muted)"},children:"No recent activity."}):n.map(i=>a.jsxs("div",{style:Hb,children:[a.jsx("div",{style:{fontWeight:600,fontSize:14},children:i.action.replace(/_/g," ")}),a.jsxs("div",{style:{fontSize:13,color:"var(--text-muted)"},children:[i.resourceName||i.resourceType," · ",Ot(i.createdAt)]})]},i.id))]})}const Wb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,marginBottom:12,fontFamily:"var(--font)"},$b={fontSize:26,fontWeight:800,marginBottom:20},Hb={padding:"14px 0",borderBottom:"1px solid var(--border)"};function Ea({title:e,files:t,emptyMessage:n,onOpen:r,onBack:i}){return a.jsxs("div",{children:[a.jsx("button",{type:"button",onClick:i,style:Vb,children:"← Back to files"}),a.jsx("h2",{style:Gb,children:e}),t.length===0?a.jsx("p",{style:{color:"var(--text-muted)",padding:"40px 0",textAlign:"center"},children:n}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:t.map(o=>a.jsxs("button",{type:"button",onClick:()=>r==null?void 0:r(o),style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,cursor:r?"pointer":"default",textAlign:"left",width:"100%",fontFamily:"var(--font)"},children:[a.jsx("span",{style:{fontSize:24},children:Ai(o.mimeType)}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontWeight:600,fontSize:14,color:"var(--text)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:o.name}),a.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:[ue(o.size)," · ",Ot(o.updatedAt||o.createdAt)]})]})]},o.id))})]})}const Vb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,marginBottom:12,fontFamily:"var(--font)"},Gb={fontSize:22,fontWeight:800,marginBottom:16};function Kd({token:e,onBack:t,onSuccess:n}){const[r,i]=y.useState(""),[o,s]=y.useState(""),[l,c]=y.useState(!1),[u,p]=y.useState(""),[h,d]=y.useState(!1),x=async b=>{if(b.preventDefault(),p(""),!e)return p("This reset link is invalid. Please request a new one.");if(r!==o)return p("Passwords do not match.");if(r.length<8)return p("Password must be at least 8 characters.");if(!/[a-z]/.test(r)||!/[A-Z]/.test(r)||!/\d/.test(r))return p("Use at least one uppercase letter, one lowercase letter, and one number.");c(!0);try{const S=await fetch(`${gt}/auth/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,newPassword:r})}),R=await S.json();if(!S.ok||!R.success)throw new Error(R.message||"Failed to reset password");d(!0),setTimeout(()=>{var g;return(g=n||t)==null?void 0:g()},1400)}catch{p("Something went wrong. Please try again.")}finally{c(!1)}};return a.jsxs("div",{className:"auth-screen",children:[a.jsx("style",{children:In}),a.jsxs("div",{className:"auth-card",children:[a.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),a.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:h?"Password updated":"Set a new password"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:h?"You can now log in with your new password.":"Choose a strong password to secure your CloudVault account."}),!h&&a.jsxs("form",{onSubmit:x,children:[a.jsx(Qd,{label:"New password",value:r,onChange:i}),a.jsx(Qd,{label:"Confirm password",value:o,onChange:s}),u&&a.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginBottom:14},children:u}),a.jsx("button",{type:"submit",disabled:l,className:"btn-primary",style:{width:"100%"},children:l?"Updating...":"Update password"})]}),h&&a.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{width:"100%"},children:"Continue to login"}),a.jsx("button",{type:"button",onClick:t,className:"btn-secondary",style:{width:"100%",marginTop:12},children:"Back to login"})]})]})}function Qd({label:e,value:t,onChange:n}){return a.jsxs("label",{style:{display:"block",marginBottom:14},children:[a.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:e}),a.jsx("input",{className:"input-field",type:"password",value:t,onChange:r=>n(r.target.value),required:!0,minLength:8,style:{marginTop:6}})]})}function Kb({msg:e,type:t,onClose:n}){y.useEffect(()=>{const i=setTimeout(n,3500);return()=>clearTimeout(i)},[n]);const r=t==="error"?"var(--danger)":t==="success"?"var(--accent)":"var(--accent-blue)";return a.jsxs("div",{className:"toast",style:{position:"fixed",bottom:32,right:32,zIndex:9999,background:r,color:"#fff",padding:"14px 24px",borderRadius:"var(--radius)",fontFamily:"var(--font)",fontWeight:600,fontSize:14,boxShadow:"var(--shadow)",animation:"slideUp .3s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10,maxWidth:420},children:[a.jsx("span",{children:t==="error"?"✕":t==="success"?"✓":"ℹ"}),a.jsx("span",{style:{flex:1},children:e}),a.jsx("span",{onClick:n,style:{cursor:"pointer",opacity:.7,fontSize:18,lineHeight:1},children:"×"})]})}function Yd({size:e=22,color:t="var(--accent)"}){return a.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:t,borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Po({value:e}){const t=e>85?"var(--danger)":e>60?"var(--accent-amber)":"var(--accent)";return a.jsx("div",{style:{background:"var(--border)",borderRadius:99,height:6,overflow:"hidden",width:"100%"},children:a.jsx("div",{style:{width:`${e}%`,height:"100%",background:t,borderRadius:99,transition:"width .5s ease"}})})}function Qb({jobs:e,history:t}){return!e.length&&!t.length?null:a.jsxs("div",{className:"download-panel",style:{position:"fixed",right:18,bottom:18,zIndex:1200,width:"min(360px, calc(100vw - 32px))",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:16,boxShadow:"var(--shadow)",overflow:"hidden",animation:"slideUp .2s ease"},children:[a.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("strong",{style:{fontSize:13},children:"Download manager"}),a.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[e.filter(n=>n.status==="downloading").length," active"]})]}),a.jsxs("div",{style:{maxHeight:260,overflow:"auto",padding:12},children:[e.map(n=>a.jsxs("div",{style:{marginBottom:12},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:12,marginBottom:6},children:[a.jsx("span",{style:{color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),a.jsx("span",{style:{color:n.status==="failed"?"var(--danger)":"var(--accent-blue)",fontWeight:800},children:n.status==="failed"?"Failed":`${n.percent}%`})]}),a.jsx(Po,{value:n.percent})]},n.id)),t.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",fontWeight:800,margin:"10px 0 8px",textTransform:"uppercase"},children:"Recent downloads"}),t.slice(0,4).map(n=>a.jsxs("div",{style:{padding:"8px 0",borderTop:"1px solid var(--border)"},children:[a.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),a.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:Ot(n.downloadedAt)})]},n.id))]})]})]})}function Yb({title:e,message:t,onConfirm:n,onCancel:r,danger:i=!1}){return a.jsx("div",{className:"modal-backdrop",onClick:r,children:a.jsxs("div",{className:"modal-card",onClick:o=>o.stopPropagation(),children:[a.jsx("div",{style:{fontSize:36,textAlign:"center",marginBottom:16},children:i?"⚠️":"❓"}),a.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:8},children:e}),a.jsx("p",{style:{color:"var(--text-secondary)",fontFamily:"var(--font)",fontSize:14,textAlign:"center",marginBottom:28,lineHeight:1.5},children:t}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[a.jsx("button",{type:"button",onClick:r,className:"btn-secondary",children:"Cancel"}),a.jsx("button",{type:"button",onClick:n,className:"btn-primary",style:i?{background:"var(--danger)",boxShadow:"0 10px 28px rgba(248,113,113,.25)"}:void 0,children:i?"Delete":"Confirm"})]})]})})}function Jb({file:e,onRename:t,onCancel:n}){const[r,i]=y.useState(e.name),o=y.useRef(null);return y.useEffect(()=>{var s;(s=o.current)==null||s.select()},[]),a.jsx("div",{className:"modal-backdrop",onClick:n,children:a.jsxs("div",{className:"modal-card",onClick:s=>s.stopPropagation(),children:[a.jsx("div",{style:{fontSize:32,textAlign:"center",marginBottom:12},children:"✏️"}),a.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:20},children:"Rename File"}),a.jsx("input",{ref:o,value:r,onChange:s=>i(s.target.value),onKeyDown:s=>s.key==="Enter"&&t(r),className:"input-field",style:{marginBottom:20}}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",flexWrap:"wrap"},children:[a.jsx("button",{type:"button",onClick:n,className:"btn-secondary",children:"Cancel"}),a.jsx("button",{type:"button",onClick:()=>t(r),className:"btn-primary",children:"Rename"})]})]})})}function fg({tags:e}){return e!=null&&e.length?a.jsx("div",{style:{display:"flex",gap:4,marginTop:4,flexWrap:"wrap"},children:e.slice(0,3).map(t=>a.jsx("span",{style:{fontSize:10,padding:"2px 6px",borderRadius:6,background:"rgba(240,22,58,.12)",color:"var(--accent)",fontWeight:600},children:t},t))}):null}function Jt({label:e,onClick:t,tone:n="neutral",disabled:r=!1}){const i=n==="accent"?"accent":n==="blue"?"blue":"";return a.jsx("button",{type:"button",className:`quick-action-btn ${i}`.trim(),title:e,disabled:r,onClick:o=>{o.stopPropagation(),r||t()},children:e})}function qb({file:e,onDelete:t,onShare:n,onPreview:r,onRename:i,onDownload:o,onMove:s,onCopy:l,onTags:c}){return a.jsxs("div",{className:"file-list-card",children:[a.jsx("div",{style:{fontSize:34,flexShrink:0,width:48,height:48,borderRadius:14,background:"rgba(56,189,248,.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:Ai(e.mimeType)}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:16,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),a.jsxs("div",{style:{color:"var(--text-muted)",fontSize:12,marginTop:3},children:[ue(e.size)," · ",Ot(e.createdAt)]}),a.jsx(fg,{tags:e.tags})]}),a.jsxs("div",{className:"file-list-actions",children:[a.jsx(Jt,{label:"Preview",disabled:!dh(e.mimeType),onClick:()=>r(e),tone:"blue"}),a.jsx(Jt,{label:"Download",onClick:()=>o(e)}),a.jsx(Jt,{label:"Share",onClick:()=>n(e),tone:"accent"}),a.jsx(Jt,{label:"Rename",onClick:()=>i(e)}),a.jsx(lg,{file:e,onMove:s,onCopy:l,onTags:c,onDelete:t})]})]})}function Xb({file:e,token:t,onDelete:n,onShare:r,onPreview:i,onRename:o,onDownload:s,onMove:l,onCopy:c,onTags:u}){var h;const p=(h=e.mimeType)==null?void 0:h.startsWith("image/");return a.jsxs("div",{className:"glass-card",style:{borderRadius:"var(--radius-lg)",overflow:"hidden",display:"flex",flexDirection:"column",transition:"var(--transition)"},onMouseEnter:d=>{d.currentTarget.style.transform="translateY(-3px)",d.currentTarget.style.boxShadow="var(--glow)"},onMouseLeave:d=>{d.currentTarget.style.transform="translateY(0)",d.currentTarget.style.boxShadow="none"},children:[a.jsxs("div",{style:{height:170,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(240,253,244,.95), rgba(239,246,255,.95))",borderBottom:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[p?a.jsx(Dw,{fileId:e.id,token:t,alt:e.name,mimeType:e.mimeType}):a.jsx("div",{style:{fontSize:56,display:"flex"},children:Ai(e.mimeType)}),a.jsx("div",{style:{position:"absolute",right:8,bottom:8,fontSize:10,fontWeight:700,background:"#111827",color:"#fff",padding:"2px 6px",borderRadius:6},children:ue(e.size)}),a.jsx("div",{style:{position:"absolute",right:10,top:10},children:a.jsx(lg,{file:e,onMove:l,onCopy:c,onTags:u,onDelete:n})})]}),a.jsxs("div",{style:{padding:"14px"},children:[a.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:5},children:e.name}),a.jsxs("div",{style:{color:"var(--text-muted)",fontSize:11},children:[ue(e.size)," · ",Ot(e.createdAt)]}),a.jsx(fg,{tags:e.tags}),a.jsxs("div",{className:"grid-actions",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[a.jsx(Jt,{label:"Preview",disabled:!dh(e.mimeType),onClick:()=>i(e),tone:"blue"}),a.jsx(Jt,{label:"Share",onClick:()=>r(e),tone:"accent"}),a.jsx(Jt,{label:"Download",onClick:()=>s(e)}),a.jsx(Jt,{label:"Rename",onClick:()=>o(e)})]})]})]})}function Zb({account:e,onManage:t}){if(!(e!=null&&e.storageWarning))return null;const n=e.storageWarning==="critical";return a.jsxs("div",{style:{padding:"10px 20px",background:n?"rgba(255,77,77,.12)":"rgba(246,179,71,.12)",borderBottom:`1px solid ${n?"var(--danger)":"var(--accent-amber)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap",fontSize:13,fontFamily:"var(--font)"},children:[a.jsx("span",{children:n?"Storage almost full (95%+).":"Storage over 80% full."}),a.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{padding:"6px 14px",fontSize:13},children:"Manage storage"})]})}function eS({username:e,stats:t,storagePercent:n,onUpload:r,onNewFolder:i}){const o=(()=>{const s=new Date().getHours();return s<12?"Good morning":s<17?"Good afternoon":"Good evening"})();return a.jsxs("div",{className:"drive-hero",style:{marginBottom:28,padding:"28px 30px",borderRadius:"var(--radius-lg)",background:"#fff",border:"1px solid var(--border)",boxShadow:"0 20px 45px rgba(15,23,42,.08)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:20,flexWrap:"wrap",animation:"floatIn .35s ease"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--accent-blue)",marginBottom:6},children:"My Cloud"}),a.jsxs("h1",{style:{fontSize:28,fontWeight:800,color:"var(--text)",marginBottom:6,lineHeight:1.15},children:[o,", ",e||"there"]}),a.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:14,maxWidth:520},children:[t.totalFiles," files · ",t.totalFolders," folders · ",Math.round(n),"% storage used"]})]}),a.jsxs("div",{className:"drive-hero-actions",style:{display:"flex",gap:10,flexWrap:"wrap"},children:[a.jsx("button",{type:"button",className:"btn-primary",onClick:r,children:"↑ Upload files"}),a.jsx("button",{type:"button",className:"btn-secondary",onClick:i,children:"⊞ New folder"})]})]})}function tS({children:e,onNavigate:t,onSignOut:n,onUpgrade:r}){const{account:i,notifications:o,unreadCount:s,markAllRead:l}=ug();return a.jsxs(a.Fragment,{children:[a.jsx(yb,{account:i,onOpenSettings:()=>t("settings")}),a.jsx(vb,{account:i,onUpgrade:r}),a.jsx(Zb,{account:i,onManage:()=>t("billing")}),a.jsxs("header",{className:"account-header",style:{position:"sticky",top:0,zIndex:90,height:60,borderBottom:"1px solid var(--border)",background:"rgba(255,255,255,.86)",backdropFilter:"blur(16px)",display:"flex",alignItems:"center",justifyContent:"flex-end",gap:12,padding:"0 28px 0 316px"},children:[a.jsx(xb,{notifications:o,unreadCount:s,onMarkAllRead:l}),a.jsx(mb,{account:i,onNavigate:t,onSignOut:n})]}),e]})}function nS(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?new URLSearchParams(window.location.search).get("token"):null}function Jd(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/reset-password")?new URLSearchParams(window.location.search).get("token"):null}function rS(){const[e,t]=y.useState(()=>window.innerWidth);return y.useEffect(()=>{const n=()=>t(window.innerWidth);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),{width:e,isMobile:e<=768,isSmall:e<=520}}function iS(){const[e,t]=y.useState(nS),[n,r]=y.useState(Jd),[i,o]=y.useState(()=>{const v=localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token"),I=Jd();return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?"verify-email":I?"reset-password":v?"app":"landing"}),[s,l]=y.useState("login"),[c,u]=y.useState(()=>localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token")||""),[p,h]=y.useState(()=>localStorage.getItem("cv_user")||sessionStorage.getItem("cv_user")||""),[d,x]=y.useState(null),[b,S]=y.useState([]),[R,g]=y.useState([]),[f,m]=y.useState({totalFiles:0,storageUsed:0,storageQuota:1024*1024*1024,totalFolders:0}),[w,C]=y.useState(null),[E,j]=y.useState([]),[T,H]=y.useState(""),[P,se]=y.useState(!1),[fe,pe]=y.useState(0),[vt,hn]=y.useState(null),[gn,Re]=y.useState([]),[k,A]=y.useState(()=>{try{return JSON.parse(localStorage.getItem("cv_downloadHistory")||"[]")}catch{return[]}}),[O,z]=y.useState(null),[D,Ue]=y.useState(null),[Qe,Dn]=y.useState(""),[yt,st]=y.useState(!1),[Dc,Ps]=y.useState(!1),[Ye,zc]=y.useState(()=>localStorage.getItem("cv_viewMode")||"list"),[zn,pg]=y.useState("all"),[jr,hg]=y.useState(()=>localStorage.getItem("cv_theme")||"light"),[Pr,xt]=y.useState(null),[Ns,Fi]=y.useState(null),[Rs,Ui]=y.useState(!1),[J,at]=y.useState("drive"),[As,gg]=y.useState("createdAt"),[Os,mg]=y.useState("desc"),[Bi,vg]=y.useState(""),[Ls,yg]=y.useState([]),[xg,wg]=y.useState(1),[bg,Sg]=y.useState(!1),[Wi,Nr]=y.useState(!1),[kg,_g]=y.useState([]),[Cg,Eg]=y.useState([]),[Ig,Tg]=y.useState([]),[Mc,jg]=y.useState(null),[Mn,Rr]=y.useState(null),[Ds,Fc]=y.useState(null),[zs,Ms]=y.useState(null),[Uc,Pg]=y.useState("user"),[Bc,Ng]=y.useState([]),[Wc,Rg]=y.useState(null),[wt,Fn]=y.useState(null),[Ag,Og]=y.useState([]),[Lg,Dg]=y.useState([]),[zg,Mg]=y.useState([]),Fs=fb(T,400),{isMobile:$i,isSmall:Fg}=rS(),Hi=y.useRef(),$c=y.useRef(),G=y.useCallback((v,I="info")=>z({msg:v,type:I}),[]),W=y.useCallback((v,I)=>(console.log("=== API CALL START ==="),console.log("API PATH:",v),console.log("API TOKEN PRESENT:",!!c),console.log("API TOKEN LENGTH:",c==null?void 0:c.length),Yt(v,I,c)),[c]),be=y.useCallback(async(v=1,I=!1)=>{var F,B;if(c){Nr(!0);try{if(J==="trash"){const Be=await W("/trash");Eg(vn(Be,"files")),Tg(vn(Be,"folders")),Nr(!1);return}if(J==="admin"){const[Be,om]=await Promise.all([W("/admin/users?limit=50"),W("/admin/analytics").catch(()=>null)]);Ng(vn(Be,"users")),Rg(om),Nr(!1);return}if(J==="dashboard"){const Be=await W("/storage/usage");jg(Be),m({totalFiles:Be.fileCount??0,storageUsed:Be.storageUsed??0,storageQuota:Be.storageQuota??1024*1024*1024,totalFolders:Be.folderCount??0}),Nr(!1);return}const U=new URLSearchParams;w&&U.set("folderId",w),Fs&&U.set("search",Fs),Bi&&U.set("tag",Bi),U.set("sortBy",As),U.set("sortOrder",Os),U.set("page",String(v)),U.set("limit","30");const[V,Je,mn,Bs,im]=await Promise.all([W(`/files?${U}`),W(`/folders?${w?`parentId=${w}`:""}`),W("/storage/usage"),W("/files/tags").catch(()=>({tags:[]})),W("/folders?all=true").catch(()=>({folders:[]}))]),Ws=vn(V,"files"),Jc=vn(Je,"folders");S(I?Be=>[...Be,...Ws]:Ws),g(Jc),yg((Bs==null?void 0:Bs.tags)||[]),_g(vn(im,"folders")),Sg((((F=V==null?void 0:V.pagination)==null?void 0:F.page)||1)<(((B=V==null?void 0:V.pagination)==null?void 0:B.totalPages)||1)),wg(v),m({totalFiles:mn.fileCount??Ws.length,storageUsed:mn.storageUsed??0,storageQuota:mn.storageQuota??1024*1024*1024,totalFolders:mn.folderCount??Jc.length})}catch(U){console.error("Refresh failed:",U);const V=U.message.toLowerCase();V.includes("credential")||V.includes("unauthorized")||V.includes("token")?(localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),u(""),h(""),o("landing")):G(U.message,"error")}Nr(!1)}},[c,w,Fs,Bi,As,Os,J,W,G]);y.useEffect(()=>{be(1,!1)},[be]),y.useEffect(()=>{c&&W("/users/me").then(v=>Pg((v==null?void 0:v.role)||"user")).catch(()=>{})},[c,W]),y.useEffect(()=>{if(!c||J==="drive"||J==="trash"||J==="dashboard"||J==="admin")return;(async()=>{try{if(J==="recent"){const I=await W("/dashboard");Og(I.recentFiles||[])}else if(J==="starred"){const I=await W("/files?isStarred=true&limit=50");Dg(vn(I,"files"))}else if(J==="shared"){const I=await W("/dashboard"),F=[...I.sharedWithMe||[],...I.sharedByMe||[]].map(B=>B.file||B);Mg(F.filter(Boolean))}}catch{}})()},[c,J,W]);const Ug=v=>{Fn(v),v==="dashboard"&&at("dashboard"),v==="billing"&&Fn("billing")};y.useEffect(()=>{localStorage.setItem("cv_viewMode",Ye)},[Ye]),y.useEffect(()=>{localStorage.setItem("cv_theme",jr)},[jr]),y.useEffect(()=>{const v=I=>{var F;(F=I.detail)!=null&&F.token&&u(I.detail.token)};return window.addEventListener("cv-token-refreshed",v),()=>window.removeEventListener("cv-token-refreshed",v)},[]);const Bg=(v,I,F,B,U=!0)=>{if(!v&&(B!=null&&B.email)){x(B),o("verify-email");return}if(!v)return;const V=U?localStorage:sessionStorage,Je=U?sessionStorage:localStorage;V.setItem("cv_token",v),Je.removeItem("cv_token"),I&&V.setItem("cv_refreshToken",I),Je.removeItem("cv_refreshToken");const mn=typeof F=="string"?F:(B==null?void 0:B.fullName)||(B==null?void 0:B.email);V.setItem("cv_user",mn||""),Je.removeItem("cv_user"),B!=null&&B.avatarUrl&&V.setItem("cv_avatar",B.avatarUrl),u(v),h(mn||""),o("app")},Wg=async v=>{const I=`${v.id}-${Date.now()}`;hn({name:v.name,percent:0}),Re(F=>[{id:I,name:v.name,percent:0,status:"downloading"},...F].slice(0,6));try{const F=await Sc(v.id,c,{onProgress:U=>{hn({name:v.name,percent:U}),Re(V=>V.map(Je=>Je.id===I?{...Je,percent:U}:Je))}});Oy(F,v.name);const B={id:I,name:v.name,size:v.size,downloadedAt:new Date().toISOString()};A(U=>{const V=[B,...U].slice(0,12);return localStorage.setItem("cv_downloadHistory",JSON.stringify(V)),V}),Re(U=>U.map(V=>V.id===I?{...V,percent:100,status:"complete"}:V)),G(`Downloaded "${v.name}"`,"success")}catch(F){Re(B=>B.map(U=>U.id===I?{...U,status:"failed"}:U)),G(F.message,"error")}hn(null)},Hc=async()=>{try{const v=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");await W("/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:v})})}catch{}localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),u(""),h(""),o("landing")},Vc=async(v,I,F)=>{if(!c)throw new Error("Authentication token missing. Please log in again.");const B=new FormData;return B.append("file",v),I&&B.append("folderId",I),Ly("/files/upload",B,c,F)},$g=async(v,I)=>W("/folders",{method:"POST",body:JSON.stringify({name:v,parentId:I||null})}),Us=async(v,I=!1)=>{if(!c){G("Please log in again to upload files.","error");return}const F=Array.from(v||[]);if(!F.length)return;se(!0),pe(0);let B=0;try{if(I&&F.some(U=>U.webkitRelativePath))await pb(F,{baseFolderId:w,createFolder:$g,uploadFile:async(U,V)=>{await Vc(U,V,pe),B++},onProgress:pe});else for(let U=0;U<F.length;U++)try{await Vc(F[U],w,V=>{const Je=Math.round((U+V/100)/F.length*100);pe(Je)}),B++}catch(V){G(`Failed to upload "${F[U].name}": ${V.message}`,"error")}}finally{se(!1),pe(0),be(1,!1),B>0&&G(`${B} file(s) uploaded successfully!`,"success")}},Hg=v=>{xt({title:"Delete File",message:`Move "${v.name}" to trash? You can restore it later from the Trash view.`,danger:!0,onConfirm:async()=>{xt(null);try{await W(`/files/${v.id}`,{method:"DELETE"}),be(),G("File deleted","success")}catch(I){G(I.message,"error")}}})},Vg=v=>{xt({title:"Delete Folder",message:`Delete folder "${v.name}" and all its contents? This cannot be undone.`,danger:!0,onConfirm:async()=>{xt(null);try{await W(`/folders/${v.id}`,{method:"DELETE"}),be(),G("Folder deleted","success")}catch(I){G(I.message,"error")}}})},Gg=async(v,I)=>(console.log("=== HANDLE SHARE START ==="),console.log("FILE:",v.name),console.log("PAYLOAD:",I),I.shareType==="user"?W(`/files/${v.id}/share/user`,{method:"POST",body:JSON.stringify({sharedWithEmail:I.sharedWithEmail||I.email,permission:I.permission})}):W(`/files/${v.id}/share`,{method:"POST",body:JSON.stringify(I)})),Kg=async(v,{targetFolderId:I})=>{try{await W(`/files/${v.id}/move`,{method:"POST",body:JSON.stringify({targetFolderId:I})}),Rr(null),be(1,!1),G("File moved","success")}catch(F){G(F.message,"error")}},Qg=async(v,{targetFolderId:I,newName:F})=>{try{await W(`/files/${v.id}/copy`,{method:"POST",body:JSON.stringify({targetFolderId:I,newName:F!==v.name?F:void 0})}),Rr(null),be(1,!1),G("File copied","success")}catch(B){G(B.message,"error")}},Yg=async(v,I)=>{try{await W(`/files/${v.id}`,{method:"PUT",body:JSON.stringify({tags:I})}),Ms(null),be(1,!1),G("Tags updated","success")}catch(F){G(F.message,"error")}},Jg=async v=>{try{await W(`/trash/files/${v}/restore`,{method:"POST"}),be(1,!1),G("File restored","success")}catch(I){G(I.message,"error")}},qg=async v=>{try{await W(`/trash/folders/${v}/restore`,{method:"POST"}),be(1,!1),G("Folder restored","success")}catch(I){G(I.message,"error")}},Xg=v=>{xt({title:"Delete forever",message:`"${v.name}" will be permanently deleted. This cannot be undone.`,danger:!0,onConfirm:async()=>{xt(null);try{await W(`/files/${v.id}/permanent`,{method:"DELETE"}),be(1,!1),G("File permanently deleted","success")}catch(I){G(I.message,"error")}}})},Zg=()=>{xt({title:"Empty trash",message:"All items in trash will be permanently deleted.",danger:!0,onConfirm:async()=>{xt(null);try{await W("/trash/empty",{method:"POST"}),be(1,!1),G("Trash emptied","success")}catch(v){G(v.message,"error")}}})},em=async(v,I)=>{if(!I.trim()||I===v.name){Fi(null);return}try{await W(`/files/${v.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:I})}),be(),G("File renamed","success")}catch(F){G(F.message,"error")}Fi(null)},Gc=async()=>{if(Qe.trim()){try{await W("/folders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Qe,parentId:w})}),be(),G("Folder created!","success")}catch(v){G(v.message,"error")}Dn(""),st(!1)}},tm=v=>{C(v.id),j(I=>[...I,v]),Ui(!1)},Kc=v=>{v===-1?(C(null),j([])):(C(E[v].id),j(I=>I.slice(0,v+1)))},nm=v=>{v.preventDefault(),Ps(!1),v.dataTransfer.files.length>0&&Us(v.dataTransfer.files)},Vi=y.useMemo(()=>{const v=sd.find(I=>I.key===zn);return!v||v.key==="all"?b:b.filter(I=>v.test(I.mimeType||""))},[b,zn]),Qc=f.storageQuota||1024*1024*1024,Yc=Math.min(100,f.storageUsed/Qc*100);if(e)return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:In}),a.jsx(Wd,{token:e,onVerified:()=>{t(null),window.history.replaceState({},"","/"),o("auth"),l("login")},onBack:()=>{t(null),window.history.replaceState({},"","/"),o("auth"),l("login")}})]});if(n)return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:In}),a.jsx(Kd,{token:n,onBack:()=>{r(null),window.history.replaceState({},"","/"),o("auth"),l("login")}})]});if(i==="landing"&&!c)return a.jsx(Wy,{onGetStarted:()=>{l("register"),o("auth")},onLogin:()=>{l("login"),o("auth")},onSignUp:()=>{l("register"),o("auth")}});if(i==="auth"&&!c)return a.jsx(Aw,{initialMode:s,onAuth:Bg,onNeedsVerification:v=>{x(v),o("verify-email")},onBack:()=>o("landing")});if(i==="verify-email"&&!c)return a.jsx(Wd,{email:d==null?void 0:d.email,onVerified:()=>{x(null),o("auth"),l("login")},onBack:()=>{x(null),o("auth"),l("login")}});if(i==="reset-password"&&!c)return a.jsx(Kd,{token:n,onSuccess:()=>{r(null),window.history.replaceState({},"","/"),o("auth"),l("login")},onBack:()=>{r(null),o("auth"),l("login")}});const rm=Ye==="grid"?Xb:qb;return a.jsx(gb,{token:c,children:a.jsx(tS,{onNavigate:v=>{Fn(null),Ug(v)},onSignOut:Hc,onUpgrade:()=>{Fn("billing"),at("drive")},children:a.jsxs("div",{"data-theme":jr,className:"app-shell",children:[a.jsx("style",{children:In}),a.jsx("button",{type:"button",className:"mobile-menu-button",onClick:()=>Ui(v=>!v),style:{display:"none",position:"fixed",top:16,left:16,zIndex:200,background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:10,width:40,height:40,alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--text)",fontSize:20,...$i?{display:"flex"}:{}},children:"☰"}),Rs&&$i&&a.jsx("div",{onClick:()=>Ui(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:99}}),a.jsxs("div",{className:`sidebar ${Rs?"open":""}`,style:{position:"fixed",left:0,top:0,bottom:0,width:296,background:"var(--bg-sidebar)",borderRight:"1px solid var(--border)",padding:"20px 18px",display:"flex",flexDirection:"column",gap:7,zIndex:100,transition:"transform .3s cubic-bezier(.4,0,.2,1)",...$i?{transform:Rs?"translateX(0)":"translateX(-100%)"}:{}},children:[a.jsxs("div",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:44,height:44,borderRadius:999,background:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,boxShadow:"0 10px 24px rgba(20,184,166,.24)",flexShrink:0},children:Oe.logo}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:26,fontWeight:800,color:"var(--text)"},children:Oe.name}),a.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:1},children:["@",p]})]})]}),[{id:"drive",icon:Oe.logo,label:"My Cloud"},{id:"recent",icon:"🕘",label:"Recent"},{id:"starred",icon:"★",label:"Starred"},{id:"shared",icon:"🔗",label:"Shared"},{id:"dashboard",icon:"📊",label:"Storage"},{id:"trash",icon:"🗑",label:"Trash"},{id:"activity",icon:"📋",label:"Activity"},...Uc==="admin"||Uc==="super_admin"?[{id:"admin",icon:"⚙",label:"Admin"}]:[]].map(v=>a.jsxs("button",{type:"button",className:`nav-item${J===v.id?" active":""}`,onClick:()=>{Fn(null),at(v.id),Ui(!1),v.id==="drive"&&(C(null),j([]))},children:[v.icon," ",v.label]},v.id)),a.jsx("div",{style:{borderTop:"1px solid var(--border)",margin:"12px 0 8px"}}),a.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1px",marginBottom:8,paddingLeft:4},children:"OVERVIEW"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16},children:[a.jsxs("div",{className:"stat-mini",children:[a.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:f.totalFiles}),a.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Files"})]}),a.jsxs("div",{className:"stat-mini",children:[a.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:f.totalFolders}),a.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Folders"})]})]}),a.jsxs("div",{style:{marginTop:"auto"},children:[a.jsxs("div",{style:{marginBottom:16,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"14px",border:"1px solid var(--border)"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--text-secondary)",marginBottom:8},children:[a.jsx("span",{style:{fontWeight:600},children:"Free"}),a.jsxs("span",{children:[ue(f.storageUsed)," of ",ue(Qc)," used"]})]}),a.jsx(Po,{value:Yc})]}),a.jsx("button",{type:"button",onClick:Hc,className:"btn-danger",children:"Sign Out"})]})]}),a.jsxs("div",{className:"main-content",style:{marginLeft:$i?0:296,padding:"24px 32px",minHeight:"100vh",paddingTop:18},children:[a.jsx(oS,{appPage:wt,setAppPage:Fn,api:W,token:c,notify:G,stats:f,usageDetail:Mc,adminUsers:Bc,systemHealth:Wc,loading:Wi,onRefreshAccount:()=>{}}),!wt&&J==="recent"&&a.jsx(Ea,{title:"Recent files",files:Ag,emptyMessage:"No recent files yet.",onBack:()=>at("drive"),onOpen:Ue}),!wt&&J==="starred"&&a.jsx(Ea,{title:"Starred",files:Lg,emptyMessage:"Star files to see them here.",onBack:()=>at("drive"),onOpen:Ue}),!wt&&J==="shared"&&a.jsx(Ea,{title:"Shared with you",files:zg,emptyMessage:"Nothing shared yet.",onBack:()=>at("drive"),onOpen:Ue}),!wt&&J==="activity"&&a.jsx(Bb,{api:W,onBack:()=>at("drive")}),!wt&&J==="trash"&&a.jsx(zw,{trashedFiles:Cg,trashedFolders:Ig,loading:Wi,onRestoreFile:Jg,onRestoreFolder:qg,onPermanentDelete:Xg,onEmptyTrash:Zg,onBack:()=>at("drive")}),!wt&&J==="dashboard"&&a.jsx(rb,{stats:f,usage:Mc,onBack:()=>at("drive")}),!wt&&J==="admin"&&a.jsx(ob,{users:Bc,systemHealth:Wc,loading:Wi,onBack:()=>at("drive")}),!wt&&J==="drive"&&a.jsxs(a.Fragment,{children:[a.jsx(eS,{username:p,stats:f,storagePercent:Yc,onUpload:()=>{var v;return(v=Hi.current)==null?void 0:v.click()},onNewFolder:()=>st(!0)}),a.jsxs("div",{className:"drive-toolbar",children:[a.jsxs("div",{className:"drive-search",style:{flex:1,position:"relative",minWidth:200},children:[a.jsx("span",{style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:16,opacity:.5},children:"🔍"}),a.jsx("input",{className:"input-field",placeholder:`Search ${Oe.name}…`,value:T,onChange:v=>H(v.target.value),style:{width:"100%",maxWidth:520,padding:"12px 14px 12px 42px"}})]}),a.jsx("button",{type:"button",className:"icon-btn",title:jr==="dark"?"Light mode":"Dark mode",onClick:()=>hg(v=>v==="dark"?"light":"dark"),children:jr==="dark"?"☀":"🌙"}),a.jsxs("div",{className:"view-toggle",children:[a.jsx("button",{type:"button",onClick:()=>zc("list"),className:`view-toggle-btn${Ye==="list"?" active":""}`,children:"☰"}),a.jsx("button",{type:"button",onClick:()=>zc("grid"),className:`view-toggle-btn${Ye==="grid"?" active":""}`,children:"▦"})]}),J==="drive"&&a.jsxs("div",{className:"drive-actions",children:[a.jsx("button",{type:"button",onClick:()=>st(v=>!v),className:"btn-secondary",children:"⊞ New folder"}),a.jsx("button",{type:"button",onClick:()=>{var v;return(v=Hi.current)==null?void 0:v.click()},className:"btn-primary",children:"↑ Upload"}),a.jsx("button",{type:"button",onClick:()=>{var v;return(v=$c.current)==null?void 0:v.click()},className:"btn-secondary",children:"📁 Folder"}),a.jsx("input",{ref:Hi,type:"file",multiple:!0,hidden:!0,onChange:v=>{Us(v.target.files),v.target.value=""}}),a.jsx("input",{ref:$c,type:"file",multiple:!0,webkitdirectory:"",hidden:!0,onChange:v=>{Us(v.target.files,!0),v.target.value=""}})]})]}),J==="drive"&&a.jsxs("div",{className:"drive-sortbar",children:[a.jsxs("select",{value:As,onChange:v=>gg(v.target.value),className:"select-field",children:[a.jsx("option",{value:"createdAt",children:"Date"}),a.jsx("option",{value:"name",children:"Name"}),a.jsx("option",{value:"size",children:"Size"}),a.jsx("option",{value:"updatedAt",children:"Modified"})]}),a.jsxs("select",{value:Os,onChange:v=>mg(v.target.value),className:"select-field",children:[a.jsx("option",{value:"desc",children:"Descending"}),a.jsx("option",{value:"asc",children:"Ascending"})]}),Ls.length>0&&a.jsxs("select",{value:Bi,onChange:v=>vg(v.target.value),className:"select-field",style:{gridColumn:Fg?"1 / -1":void 0},children:[a.jsx("option",{value:"",children:"All tags"}),Ls.map(v=>a.jsx("option",{value:v,children:v},v))]})]}),J==="drive"&&a.jsx("div",{className:"filter-chips",children:sd.map(v=>a.jsxs("button",{type:"button",onClick:()=>pg(v.key),className:`filter-chip${zn===v.key?" active":""}`,children:[a.jsx("span",{children:v.icon})," ",v.label]},v.key))}),J==="drive"&&yt&&a.jsxs("div",{className:"new-folder-row",style:{display:"flex",gap:10,marginBottom:20,animation:"fadeIn .2s ease"},children:[a.jsx("input",{className:"input-field",placeholder:"Folder name…",value:Qe,onChange:v=>Dn(v.target.value),onKeyDown:v=>v.key==="Enter"&&Gc(),style:{width:260},autoFocus:!0}),a.jsx("button",{type:"button",onClick:Gc,className:"btn-primary",children:"Create"}),a.jsx("button",{type:"button",onClick:()=>st(!1),className:"btn-secondary",children:"Cancel"})]}),a.jsxs("div",{className:"breadcrumb-row",style:{alignItems:"center",gap:8,marginBottom:20,fontSize:14,color:"var(--text-muted)"},children:[a.jsxs("span",{onClick:()=>Kc(-1),className:"breadcrumb-link",style:{color:w?"var(--text-secondary)":"var(--accent)"},children:[Oe.logo," Home"]}),E.map((v,I)=>a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--text-muted)"},children:"›"}),a.jsx("span",{onClick:()=>Kc(I),className:"breadcrumb-link",style:{color:I===E.length-1?"var(--accent)":"var(--text-secondary)"},children:v.name})]},v.id))]}),P&&a.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(240,22,58,.24)",animation:"fadeIn .2s ease"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx(Yd,{size:14})," Uploading…"]}),a.jsxs("span",{style:{fontWeight:700,color:"var(--accent)"},children:[fe,"%"]})]}),a.jsx(Po,{value:fe})]}),vt&&a.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(64,144,255,.3)",animation:"fadeIn .2s ease"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx(Yd,{size:14,color:"var(--accent-blue)"})," Downloading ",vt.name,"…"]}),a.jsxs("span",{style:{fontWeight:700,color:"var(--accent-blue)"},children:[vt.percent,"%"]})]}),a.jsx(Po,{value:vt.percent})]}),a.jsx("div",{onDragOver:v=>{v.preventDefault(),Ps(!0)},onDragLeave:()=>Ps(!1),onDrop:nm,className:`drop-zone${Dc?" drag-over":""}`,children:Dc?a.jsx("span",{style:{color:"var(--accent)",fontWeight:700,fontSize:16},children:"⬇ Drop files here to upload"}):a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{fontSize:32,marginBottom:8},children:"📤"}),a.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:700,marginBottom:4},children:"Drag & drop files or folders"}),a.jsx("div",{style:{fontSize:13},children:"or use the Upload button above"})]})}),R.length>0&&a.jsxs("div",{style:{marginBottom:28},children:[a.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px",marginBottom:12},children:"FOLDERS"}),a.jsx("div",{className:"folder-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:R.map(v=>a.jsx(sS,{folder:v,onOpen:tm,onDelete:Vg},v.id))})]}),a.jsxs("div",{children:[a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:a.jsxs("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px"},children:["FILES ",Vi.length>0&&a.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:500},children:["(",Vi.length,")"]})]})}),Wi?a.jsx(db,{count:6,grid:Ye==="grid"}):Vi.length===0?a.jsxs("div",{className:"glass-card empty-state",style:{textAlign:"center",padding:"72px 32px",borderRadius:"var(--radius-lg)",border:"1.5px dashed var(--border)",animation:"fadeIn .3s ease"},children:[a.jsx("div",{style:{width:88,height:88,margin:"0 auto 20px",borderRadius:24,background:"var(--gradient-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"var(--glow)"},children:"☁️"}),a.jsx("div",{style:{fontWeight:800,fontSize:20,marginBottom:8,color:"var(--text)"},children:zn!=="all"?"No matching files":"Your cloud is empty"}),a.jsx("div",{style:{fontSize:14,color:"var(--text-muted)",marginBottom:24,maxWidth:360,margin:"0 auto 24px"},children:zn!=="all"?"Try a different filter or upload new files.":"Upload photos, documents, and more. Everything stays secure in your drive."}),zn==="all"&&a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[a.jsx("button",{type:"button",className:"btn-primary",onClick:()=>{var v;return(v=Hi.current)==null?void 0:v.click()},children:"↑ Upload your first file"}),a.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>st(!0),children:"⊞ Create folder"})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:`file-grid${Ye==="grid"?" grid-view":""}`,style:{display:Ye==="grid"?"grid":"flex",gridTemplateColumns:Ye==="grid"?"repeat(auto-fill, minmax(250px, 1fr))":void 0,flexDirection:Ye==="list"?"column":void 0,gap:Ye==="grid"?12:8},children:Vi.map(v=>a.jsx(rm,{file:v,token:c,onDelete:Hg,onShare:I=>Fc(I),onPreview:Ue,onRename:Fi,onDownload:Wg,onMove:I=>Rr({file:I,mode:"move"}),onCopy:I=>Rr({file:I,mode:"copy"}),onTags:Ms},v.id))}),bg&&a.jsx("button",{type:"button",onClick:()=>be(xg+1,!0),className:"load-more-btn",children:"Load more files"})]})]})]})]}),D&&a.jsx(Lw,{file:D,token:c,onClose:()=>Ue(null)}),Mn&&a.jsx(Uw,{file:Mn.file,mode:Mn.mode,folders:hb(kg),currentFolderId:w,onCancel:()=>Rr(null),onConfirm:v=>Mn.mode==="move"?Kg(Mn.file,v):Qg(Mn.file,v)}),zs&&a.jsx(Ww,{file:zs,allTags:Ls,onCancel:()=>Ms(null),onSave:v=>Yg(zs,v)}),Ds&&a.jsx(Hw,{file:Ds,onCancel:()=>Fc(null),onShare:v=>Gg(Ds,v)}),Pr&&a.jsx(Yb,{title:Pr.title,message:Pr.message,danger:Pr.danger,onConfirm:Pr.onConfirm,onCancel:()=>xt(null)}),Ns&&a.jsx(Jb,{file:Ns,onRename:v=>em(Ns,v),onCancel:()=>Fi(null)}),a.jsx(Qb,{jobs:gn,history:k}),O&&a.jsx(Kb,{msg:O.msg,type:O.type,onClose:()=>z(null)})]})})})}function oS({appPage:e,setAppPage:t,api:n,notify:r,stats:i,usageDetail:o,adminUsers:s,systemHealth:l,loading:c,onRefreshAccount:u}){const{account:p,refreshAll:h}=ug();if(!e)return null;const d=()=>t(null);return e==="profile"?a.jsx(bb,{account:p,onBack:d}):e==="settings"?a.jsx(Cb,{account:p,api:n,onBack:d,onUpdated:()=>h(),notify:r,theme,onThemeChange:setTheme}):e==="security"?a.jsx(Pb,{api:n,account:p,onBack:d,notify:r}):e==="billing"?a.jsx(Lb,{account:p,api:n,onBack:d,notify:r,onUpdated:()=>h()}):e==="help"?a.jsx(zb,{onBack:d}):null}function sS({folder:e,onOpen:t,onDelete:n}){const[r,i]=y.useState(!1);return a.jsxs("div",{className:"folder-card",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>t(e),children:[a.jsx("span",{style:{fontSize:24},children:"📁"}),a.jsx("div",{style:{flex:1,minWidth:0},children:a.jsx("div",{style:{fontWeight:600,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},children:e.name})}),a.jsx("button",{onClick:o=>{o.stopPropagation(),n(e)},style:{background:"none",border:"none",color:"rgba(255,100,100,.3)",cursor:"pointer",fontSize:14,padding:4,borderRadius:6,opacity:r?1:0,transition:"opacity .15s"},children:"🗑"})]})}uh(document.getElementById("root")).render(a.jsx(y.StrictMode,{children:a.jsx(iS,{})}));
