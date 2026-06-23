(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var rf={exports:{}},ws={},of={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=Symbol.for("react.element"),lm=Symbol.for("react.portal"),cm=Symbol.for("react.fragment"),um=Symbol.for("react.strict_mode"),dm=Symbol.for("react.profiler"),fm=Symbol.for("react.provider"),pm=Symbol.for("react.context"),hm=Symbol.for("react.forward_ref"),gm=Symbol.for("react.suspense"),mm=Symbol.for("react.memo"),vm=Symbol.for("react.lazy"),ru=Symbol.iterator;function ym(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var sf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},af=Object.assign,lf={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||sf}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cf(){}cf.prototype=Ar.prototype;function Ll(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||sf}var Dl=Ll.prototype=new cf;Dl.constructor=Ll;af(Dl,Ar.prototype);Dl.isPureReactComponent=!0;var iu=Array.isArray,uf=Object.prototype.hasOwnProperty,zl={current:null},df={key:!0,ref:!0,__self:!0,__source:!0};function ff(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)uf.call(t,r)&&!df.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Fi,type:e,key:o,ref:a,props:i,_owner:zl.current}}function xm(e,t){return{$$typeof:Fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ml(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fi}function wm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ou=/\/+/g;function Js(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wm(""+e.key):t.toString(36)}function _o(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Fi:case lm:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Js(a,0):r,iu(i)?(n="",e!=null&&(n=e.replace(ou,"$&/")+"/"),_o(i,t,n,"",function(u){return u})):i!=null&&(Ml(i)&&(i=xm(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ou,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",iu(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Js(o,l);a+=_o(o,t,n,c,i)}else if(c=ym(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Js(o,l++),a+=_o(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function no(e,t,n){if(e==null)return e;var r=[],i=0;return _o(e,r,"","",function(o){return t.call(n,o,i++)}),r}function bm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},Eo={transition:null},Sm={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Eo,ReactCurrentOwner:zl};function pf(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:no,forEach:function(e,t,n){no(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return no(e,function(){t++}),t},toArray:function(e){return no(e,function(t){return t})||[]},only:function(e){if(!Ml(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Ar;M.Fragment=cm;M.Profiler=dm;M.PureComponent=Ll;M.StrictMode=um;M.Suspense=gm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sm;M.act=pf;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=af({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=zl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)uf.call(t,c)&&!df.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Fi,type:e.type,key:i,ref:o,props:r,_owner:a}};M.createContext=function(e){return e={$$typeof:pm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fm,_context:e},e.Consumer=e};M.createElement=ff;M.createFactory=function(e){var t=ff.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:hm,render:e}};M.isValidElement=Ml;M.lazy=function(e){return{$$typeof:vm,_payload:{_status:-1,_result:e},_init:bm}};M.memo=function(e,t){return{$$typeof:mm,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Eo.transition;Eo.transition={};try{e()}finally{Eo.transition=t}};M.unstable_act=pf;M.useCallback=function(e,t){return Ne.current.useCallback(e,t)};M.useContext=function(e){return Ne.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};M.useEffect=function(e,t){return Ne.current.useEffect(e,t)};M.useId=function(){return Ne.current.useId()};M.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Ne.current.useMemo(e,t)};M.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};M.useRef=function(e){return Ne.current.useRef(e)};M.useState=function(e){return Ne.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return Ne.current.useTransition()};M.version="18.3.1";of.exports=M;var v=of.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km=v,_m=Symbol.for("react.element"),Em=Symbol.for("react.fragment"),Cm=Object.prototype.hasOwnProperty,Tm=km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Im={key:!0,ref:!0,__self:!0,__source:!0};function hf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Cm.call(t,r)&&!Im.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:_m,type:e,key:o,ref:a,props:i,_owner:Tm.current}}ws.Fragment=Em;ws.jsx=hf;ws.jsxs=hf;rf.exports=ws;var s=rf.exports,gf={exports:{}},He={},mf={exports:{}},vf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,D){var z=P.length;P.push(D);e:for(;0<z;){var Y=z-1>>>1,ne=P[Y];if(0<i(ne,D))P[Y]=D,P[z]=ne,z=Y;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],z=P.pop();if(z!==D){P[0]=z;e:for(var Y=0,ne=P.length,Ye=ne>>>1;Y<Ye;){var ce=2*(Y+1)-1,Et=P[ce],Se=ce+1,ae=P[Se];if(0>i(Et,z))Se<ne&&0>i(ae,Et)?(P[Y]=ae,P[Se]=z,Y=Se):(P[Y]=Et,P[ce]=z,Y=ce);else if(Se<ne&&0>i(ae,z))P[Y]=ae,P[Se]=z,Y=Se;else break e}}return D}function i(P,D){var z=P.sortIndex-D.sortIndex;return z!==0?z:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],p=1,h=null,d=3,x=!1,b=!1,S=!1,O=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,t(c,D);else break;D=n(u)}}function w(P){if(S=!1,m(P),!b)if(n(c)!==null)b=!0,Ae(E);else{var D=n(u);D!==null&&Ke(w,D.startTime-P)}}function E(P,D){b=!1,S&&(S=!1,g(I),I=-1),x=!0;var z=d;try{for(m(D),h=n(c);h!==null&&(!(h.expirationTime>D)||P&&!pe());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,d=h.priorityLevel;var ne=Y(h.expirationTime<=D);D=e.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(c)&&r(c),m(D)}else r(c);h=n(c)}if(h!==null)var Ye=!0;else{var ce=n(u);ce!==null&&Ke(w,ce.startTime-D),Ye=!1}return Ye}finally{h=null,d=z,x=!1}}var C=!1,j=null,I=-1,V=5,R=-1;function pe(){return!(e.unstable_now()-R<V)}function he(){if(j!==null){var P=e.unstable_now();R=P;var D=!0;try{D=j(!0,P)}finally{D?be():(C=!1,j=null)}}else C=!1}var be;if(typeof f=="function")be=function(){f(he)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,Sn=gt.port2;gt.port1.onmessage=he,be=function(){Sn.postMessage(null)}}else be=function(){O(he,0)};function Ae(P){j=P,C||(C=!0,be())}function Ke(P,D){I=O(function(){P(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){b||x||(b=!0,Ae(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(P){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var z=d;d=D;try{return P()}finally{d=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=d;d=P;try{return D()}finally{d=z}},e.unstable_scheduleCallback=function(P,D,z){var Y=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Y+z:Y):z=Y,P){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=z+ne,P={id:p++,callback:D,priorityLevel:P,startTime:z,expirationTime:ne,sortIndex:-1},z>Y?(P.sortIndex=z,t(u,P),n(c)===null&&P===n(u)&&(S?(g(I),I=-1):S=!0,Ke(w,z-Y))):(P.sortIndex=ne,t(c,P),b||x||(b=!0,Ae(E))),P},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(P){var D=d;return function(){var z=d;d=D;try{return P.apply(this,arguments)}finally{d=z}}}})(vf);mf.exports=vf;var jm=mf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm=v,Ve=jm;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yf=new Set,xi={};function Hn(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(xi[e]=t,e=0;e<t.length;e++)yf.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),La=Object.prototype.hasOwnProperty,Rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,su={},au={};function Nm(e){return La.call(au,e)?!0:La.call(su,e)?!1:Rm.test(e)?au[e]=!0:(su[e]=!0,!1)}function Om(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Am(e,t,n,r){if(t===null||typeof t>"u"||Om(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fl=/[\-:]([a-z])/g;function Ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fl,Ul);we[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fl,Ul);we[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fl,Ul);we[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bl(e,t,n,r){var i=we.hasOwnProperty(t)?we[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Am(t,n,i,r)&&(n=null),r||i===null?Nm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),nr=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),Wl=Symbol.for("react.strict_mode"),Da=Symbol.for("react.profiler"),xf=Symbol.for("react.provider"),wf=Symbol.for("react.context"),$l=Symbol.for("react.forward_ref"),za=Symbol.for("react.suspense"),Ma=Symbol.for("react.suspense_list"),Vl=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),bf=Symbol.for("react.offscreen"),lu=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,qs;function ri(e){if(qs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qs=t&&t[1]||""}return`
`+qs+e}var Xs=!1;function Zs(e,t){if(!e||Xs)return"";Xs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Xs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ri(e):""}function Lm(e){switch(e.tag){case 5:return ri(e.type);case 16:return ri("Lazy");case 13:return ri("Suspense");case 19:return ri("SuspenseList");case 0:case 2:case 15:return e=Zs(e.type,!1),e;case 11:return e=Zs(e.type.render,!1),e;case 1:return e=Zs(e.type,!0),e;default:return""}}function Fa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rr:return"Fragment";case nr:return"Portal";case Da:return"Profiler";case Wl:return"StrictMode";case za:return"Suspense";case Ma:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wf:return(e.displayName||"Context")+".Consumer";case xf:return(e._context.displayName||"Context")+".Provider";case $l:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vl:return t=e.displayName||null,t!==null?t:Fa(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return Fa(e(t))}catch{}}return null}function Dm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fa(t);case 8:return t===Wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zm(e){var t=Sf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function io(e){e._valueTracker||(e._valueTracker=zm(e))}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ua(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _f(e,t){t=t.checked,t!=null&&Bl(e,"checked",t,!1)}function Ba(e,t){_f(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wa(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wa(e,t,n){(t!=="number"||Bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ii=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function du(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(ii(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function Ef(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Va(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oo,Tf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mm=["Webkit","ms","Moz","O"];Object.keys(ai).forEach(function(e){Mm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ai[t]=ai[e]})});function If(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ai.hasOwnProperty(e)&&ai[e]?(""+t).trim():t+"px"}function jf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=If(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fm=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ha(e,t){if(t){if(Fm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ka=null;function Hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,gr=null,mr=null;function pu(e){if(e=Wi(e)){if(typeof Ya!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Es(t),Ya(e.stateNode,e.type,t))}}function Pf(e){gr?mr?mr.push(e):mr=[e]:gr=e}function Rf(){if(gr){var e=gr,t=mr;if(mr=gr=null,pu(e),t)for(e=0;e<t.length;e++)pu(t[e])}}function Nf(e,t){return e(t)}function Of(){}var ea=!1;function Af(e,t,n){if(ea)return e(t,n);ea=!0;try{return Nf(e,t,n)}finally{ea=!1,(gr!==null||mr!==null)&&(Of(),Rf())}}function bi(e,t){var n=e.stateNode;if(n===null)return null;var r=Es(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Qa=!1;if(Mt)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Qa=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Qa=!1}function Um(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var li=!1,Wo=null,$o=!1,Ja=null,Bm={onError:function(e){li=!0,Wo=e}};function Wm(e,t,n,r,i,o,a,l,c){li=!1,Wo=null,Um.apply(Bm,arguments)}function $m(e,t,n,r,i,o,a,l,c){if(Wm.apply(this,arguments),li){if(li){var u=Wo;li=!1,Wo=null}else throw Error(_(198));$o||($o=!0,Ja=u)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hu(e){if(Gn(e)!==e)throw Error(_(188))}function Vm(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return hu(i),e;if(o===r)return hu(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Df(e){return e=Vm(e),e!==null?zf(e):null}function zf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zf(e);if(t!==null)return t;e=e.sibling}return null}var Mf=Ve.unstable_scheduleCallback,gu=Ve.unstable_cancelCallback,Hm=Ve.unstable_shouldYield,Gm=Ve.unstable_requestPaint,le=Ve.unstable_now,Km=Ve.unstable_getCurrentPriorityLevel,Gl=Ve.unstable_ImmediatePriority,Ff=Ve.unstable_UserBlockingPriority,Vo=Ve.unstable_NormalPriority,Ym=Ve.unstable_LowPriority,Uf=Ve.unstable_IdlePriority,bs=null,wt=null;function Qm(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(bs,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Xm,Jm=Math.log,qm=Math.LN2;function Xm(e){return e>>>=0,e===0?32:31-(Jm(e)/qm|0)|0}var so=64,ao=4194304;function oi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=oi(l):(o&=a,o!==0&&(r=oi(o)))}else a=n&~i,a!==0?r=oi(a):o!==0&&(r=oi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function Zm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ev(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-dt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=Zm(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function qa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bf(){var e=so;return so<<=1,!(so&4194240)&&(so=64),e}function ta(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ui(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function tv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Kl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function Wf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $f,Yl,Vf,Hf,Gf,Xa=!1,lo=[],sn=null,an=null,ln=null,Si=new Map,ki=new Map,Xt=[],nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ki.delete(t.pointerId)}}function Gr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Wi(t),t!==null&&Yl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rv(e,t,n,r,i){switch(t){case"focusin":return sn=Gr(sn,e,t,n,r,i),!0;case"dragenter":return an=Gr(an,e,t,n,r,i),!0;case"mouseover":return ln=Gr(ln,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Si.set(o,Gr(Si.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ki.set(o,Gr(ki.get(o)||null,e,t,n,r,i)),!0}return!1}function Kf(e){var t=Nn(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Lf(n),t!==null){e.blockedOn=t,Gf(e.priority,function(){Vf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Za(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ka=r,n.target.dispatchEvent(r),Ka=null}else return t=Wi(n),t!==null&&Yl(t),e.blockedOn=n,!1;t.shift()}return!0}function vu(e,t,n){Co(e)&&n.delete(t)}function iv(){Xa=!1,sn!==null&&Co(sn)&&(sn=null),an!==null&&Co(an)&&(an=null),ln!==null&&Co(ln)&&(ln=null),Si.forEach(vu),ki.forEach(vu)}function Kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Xa||(Xa=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,iv)))}function _i(e){function t(i){return Kr(i,e)}if(0<lo.length){Kr(lo[0],e);for(var n=1;n<lo.length;n++){var r=lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Kr(sn,e),an!==null&&Kr(an,e),ln!==null&&Kr(ln,e),Si.forEach(t),ki.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)Kf(n),n.blockedOn===null&&Xt.shift()}var vr=Gt.ReactCurrentBatchConfig,Go=!0;function ov(e,t,n,r){var i=J,o=vr.transition;vr.transition=null;try{J=1,Ql(e,t,n,r)}finally{J=i,vr.transition=o}}function sv(e,t,n,r){var i=J,o=vr.transition;vr.transition=null;try{J=4,Ql(e,t,n,r)}finally{J=i,vr.transition=o}}function Ql(e,t,n,r){if(Go){var i=Za(e,t,n,r);if(i===null)da(e,t,r,Ko,n),mu(e,r);else if(rv(i,e,t,n,r))r.stopPropagation();else if(mu(e,r),t&4&&-1<nv.indexOf(e)){for(;i!==null;){var o=Wi(i);if(o!==null&&$f(o),o=Za(e,t,n,r),o===null&&da(e,t,r,Ko,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else da(e,t,r,null,n)}}var Ko=null;function Za(e,t,n,r){if(Ko=null,e=Hl(r),e=Nn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ko=e,null}function Yf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Km()){case Gl:return 1;case Ff:return 4;case Vo:case Ym:return 16;case Uf:return 536870912;default:return 16}default:return 16}}var nn=null,Jl=null,To=null;function Qf(){if(To)return To;var e,t=Jl,n=t.length,r,i="value"in nn?nn.value:nn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return To=i.slice(e,1<r?1-r:void 0)}function Io(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function co(){return!0}function yu(){return!1}function Ge(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?co:yu,this.isPropagationStopped=yu,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),t}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Ge(Lr),Bi=oe({},Lr,{view:0,detail:0}),av=Ge(Bi),na,ra,Yr,Ss=oe({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(na=e.screenX-Yr.screenX,ra=e.screenY-Yr.screenY):ra=na=0,Yr=e),na)},movementY:function(e){return"movementY"in e?e.movementY:ra}}),xu=Ge(Ss),lv=oe({},Ss,{dataTransfer:0}),cv=Ge(lv),uv=oe({},Bi,{relatedTarget:0}),ia=Ge(uv),dv=oe({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=Ge(dv),pv=oe({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hv=Ge(pv),gv=oe({},Lr,{data:0}),wu=Ge(gv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yv[e])?!!t[e]:!1}function Xl(){return xv}var wv=oe({},Bi,{key:function(e){if(e.key){var t=mv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xl,charCode:function(e){return e.type==="keypress"?Io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bv=Ge(wv),Sv=oe({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=Ge(Sv),kv=oe({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xl}),_v=Ge(kv),Ev=oe({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cv=Ge(Ev),Tv=oe({},Ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iv=Ge(Tv),jv=[9,13,27,32],Zl=Mt&&"CompositionEvent"in window,ci=null;Mt&&"documentMode"in document&&(ci=document.documentMode);var Pv=Mt&&"TextEvent"in window&&!ci,Jf=Mt&&(!Zl||ci&&8<ci&&11>=ci),Su=" ",ku=!1;function qf(e,t){switch(e){case"keyup":return jv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function Rv(e,t){switch(e){case"compositionend":return Xf(t);case"keypress":return t.which!==32?null:(ku=!0,Su);case"textInput":return e=t.data,e===Su&&ku?null:e;default:return null}}function Nv(e,t){if(ir)return e==="compositionend"||!Zl&&qf(e,t)?(e=Qf(),To=Jl=nn=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jf&&t.locale!=="ko"?null:t.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ov[e.type]:t==="textarea"}function Zf(e,t,n,r){Pf(r),t=Yo(t,"onChange"),0<t.length&&(n=new ql("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ui=null,Ei=null;function Av(e){up(e,0)}function ks(e){var t=ar(e);if(kf(t))return e}function Lv(e,t){if(e==="change")return t}var ep=!1;if(Mt){var oa;if(Mt){var sa="oninput"in document;if(!sa){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),sa=typeof Eu.oninput=="function"}oa=sa}else oa=!1;ep=oa&&(!document.documentMode||9<document.documentMode)}function Cu(){ui&&(ui.detachEvent("onpropertychange",tp),Ei=ui=null)}function tp(e){if(e.propertyName==="value"&&ks(Ei)){var t=[];Zf(t,Ei,e,Hl(e)),Af(Av,t)}}function Dv(e,t,n){e==="focusin"?(Cu(),ui=t,Ei=n,ui.attachEvent("onpropertychange",tp)):e==="focusout"&&Cu()}function zv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ks(Ei)}function Mv(e,t){if(e==="click")return ks(t)}function Fv(e,t){if(e==="input"||e==="change")return ks(t)}function Uv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Uv;function Ci(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!La.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function Tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,t){var n=Tu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tu(n)}}function np(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?np(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rp(){for(var e=window,t=Bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bo(e.document)}return t}function ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bv(e){var t=rp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&np(n.ownerDocument.documentElement,n)){if(r!==null&&ec(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Iu(n,o);var a=Iu(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wv=Mt&&"documentMode"in document&&11>=document.documentMode,or=null,el=null,di=null,tl=!1;function ju(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tl||or==null||or!==Bo(r)||(r=or,"selectionStart"in r&&ec(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),di&&Ci(di,r)||(di=r,r=Yo(el,"onSelect"),0<r.length&&(t=new ql("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},aa={},ip={};Mt&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function _s(e){if(aa[e])return aa[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ip)return aa[e]=t[n];return e}var op=_s("animationend"),sp=_s("animationiteration"),ap=_s("animationstart"),lp=_s("transitionend"),cp=new Map,Pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){cp.set(e,t),Hn(t,[e])}for(var la=0;la<Pu.length;la++){var ca=Pu[la],$v=ca.toLowerCase(),Vv=ca[0].toUpperCase()+ca.slice(1);yn($v,"on"+Vv)}yn(op,"onAnimationEnd");yn(sp,"onAnimationIteration");yn(ap,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(lp,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function Ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$m(r,t,void 0,e),e.currentTarget=null}function up(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Ru(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Ru(i,l,u),o=c}}}if($o)throw e=Ja,$o=!1,Ja=null,e}function Z(e,t){var n=t[sl];n===void 0&&(n=t[sl]=new Set);var r=e+"__bubble";n.has(r)||(dp(t,e,2,!1),n.add(r))}function ua(e,t,n){var r=0;t&&(r|=4),dp(n,e,r,t)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Ti(e){if(!e[fo]){e[fo]=!0,yf.forEach(function(n){n!=="selectionchange"&&(Hv.has(n)||ua(n,!1,e),ua(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fo]||(t[fo]=!0,ua("selectionchange",!1,t))}}function dp(e,t,n,r){switch(Yf(t)){case 1:var i=ov;break;case 4:i=sv;break;default:i=Ql}n=i.bind(null,t,n,e),i=void 0,!Qa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function da(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Nn(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Af(function(){var u=o,p=Hl(n),h=[];e:{var d=cp.get(e);if(d!==void 0){var x=ql,b=e;switch(e){case"keypress":if(Io(n)===0)break e;case"keydown":case"keyup":x=bv;break;case"focusin":b="focus",x=ia;break;case"focusout":b="blur",x=ia;break;case"beforeblur":case"afterblur":x=ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=_v;break;case op:case sp:case ap:x=fv;break;case lp:x=Cv;break;case"scroll":x=av;break;case"wheel":x=Iv;break;case"copy":case"cut":case"paste":x=hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=bu}var S=(t&4)!==0,O=!S&&e==="scroll",g=S?d!==null?d+"Capture":null:d;S=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=bi(f,g),w!=null&&S.push(Ii(f,w,m)))),O)break;f=f.return}0<S.length&&(d=new x(d,b,null,n,p),h.push({event:d,listeners:S}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",d&&n!==Ka&&(b=n.relatedTarget||n.fromElement)&&(Nn(b)||b[Ft]))break e;if((x||d)&&(d=p.window===p?p:(d=p.ownerDocument)?d.defaultView||d.parentWindow:window,x?(b=n.relatedTarget||n.toElement,x=u,b=b?Nn(b):null,b!==null&&(O=Gn(b),b!==O||b.tag!==5&&b.tag!==6)&&(b=null)):(x=null,b=u),x!==b)){if(S=xu,w="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=bu,w="onPointerLeave",g="onPointerEnter",f="pointer"),O=x==null?d:ar(x),m=b==null?d:ar(b),d=new S(w,f+"leave",x,n,p),d.target=O,d.relatedTarget=m,w=null,Nn(p)===u&&(S=new S(g,f+"enter",b,n,p),S.target=m,S.relatedTarget=O,w=S),O=w,x&&b)t:{for(S=x,g=b,f=0,m=S;m;m=qn(m))f++;for(m=0,w=g;w;w=qn(w))m++;for(;0<f-m;)S=qn(S),f--;for(;0<m-f;)g=qn(g),m--;for(;f--;){if(S===g||g!==null&&S===g.alternate)break t;S=qn(S),g=qn(g)}S=null}else S=null;x!==null&&Nu(h,d,x,S,!1),b!==null&&O!==null&&Nu(h,O,b,S,!0)}}e:{if(d=u?ar(u):window,x=d.nodeName&&d.nodeName.toLowerCase(),x==="select"||x==="input"&&d.type==="file")var E=Lv;else if(_u(d))if(ep)E=Fv;else{E=zv;var C=Dv}else(x=d.nodeName)&&x.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=Mv);if(E&&(E=E(e,u))){Zf(h,E,n,p);break e}C&&C(e,d,u),e==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Wa(d,"number",d.value)}switch(C=u?ar(u):window,e){case"focusin":(_u(C)||C.contentEditable==="true")&&(or=C,el=u,di=null);break;case"focusout":di=el=or=null;break;case"mousedown":tl=!0;break;case"contextmenu":case"mouseup":case"dragend":tl=!1,ju(h,n,p);break;case"selectionchange":if(Wv)break;case"keydown":case"keyup":ju(h,n,p)}var j;if(Zl)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ir?qf(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Jf&&n.locale!=="ko"&&(ir||I!=="onCompositionStart"?I==="onCompositionEnd"&&ir&&(j=Qf()):(nn=p,Jl="value"in nn?nn.value:nn.textContent,ir=!0)),C=Yo(u,I),0<C.length&&(I=new wu(I,e,null,n,p),h.push({event:I,listeners:C}),j?I.data=j:(j=Xf(n),j!==null&&(I.data=j)))),(j=Pv?Rv(e,n):Nv(e,n))&&(u=Yo(u,"onBeforeInput"),0<u.length&&(p=new wu("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=j))}up(h,t)})}function Ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=bi(e,n),o!=null&&r.unshift(Ii(e,o,i)),o=bi(e,t),o!=null&&r.push(Ii(e,o,i))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nu(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=bi(n,o),c!=null&&a.unshift(Ii(n,c,l))):i||(c=bi(n,o),c!=null&&a.push(Ii(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Gv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function Ou(e){return(typeof e=="string"?e:""+e).replace(Gv,`
`).replace(Kv,"")}function po(e,t,n){if(t=Ou(t),Ou(e)!==t&&n)throw Error(_(425))}function Qo(){}var nl=null,rl=null;function il(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ol=typeof setTimeout=="function"?setTimeout:void 0,Yv=typeof clearTimeout=="function"?clearTimeout:void 0,Au=typeof Promise=="function"?Promise:void 0,Qv=typeof queueMicrotask=="function"?queueMicrotask:typeof Au<"u"?function(e){return Au.resolve(null).then(e).catch(Jv)}:ol;function Jv(e){setTimeout(function(){throw e})}function fa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),_i(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_i(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),yt="__reactFiber$"+Dr,ji="__reactProps$"+Dr,Ft="__reactContainer$"+Dr,sl="__reactEvents$"+Dr,qv="__reactListeners$"+Dr,Xv="__reactHandles$"+Dr;function Nn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lu(e);e!==null;){if(n=e[yt])return n;e=Lu(e)}return t}e=n,n=e.parentNode}return null}function Wi(e){return e=e[yt]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Es(e){return e[ji]||null}var al=[],lr=-1;function xn(e){return{current:e}}function ee(e){0>lr||(e.current=al[lr],al[lr]=null,lr--)}function X(e,t){lr++,al[lr]=e.current,e.current=t}var vn={},Ce=xn(vn),Me=xn(!1),Un=vn;function Er(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function Jo(){ee(Me),ee(Ce)}function Du(e,t,n){if(Ce.current!==vn)throw Error(_(168));X(Ce,t),X(Me,n)}function fp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,Dm(e)||"Unknown",i));return oe({},n,r)}function qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Un=Ce.current,X(Ce,e),X(Me,Me.current),!0}function zu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=fp(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,ee(Me),ee(Ce),X(Ce,e)):ee(Me),X(Me,n)}var Pt=null,Cs=!1,pa=!1;function pp(e){Pt===null?Pt=[e]:Pt.push(e)}function Zv(e){Cs=!0,pp(e)}function wn(){if(!pa&&Pt!==null){pa=!0;var e=0,t=J;try{var n=Pt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,Cs=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(e+1)),Mf(Gl,wn),i}finally{J=t,pa=!1}}return null}var cr=[],ur=0,Xo=null,Zo=0,qe=[],Xe=0,Bn=null,Ot=1,At="";function jn(e,t){cr[ur++]=Zo,cr[ur++]=Xo,Xo=e,Zo=t}function hp(e,t,n){qe[Xe++]=Ot,qe[Xe++]=At,qe[Xe++]=Bn,Bn=e;var r=Ot;e=At;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ot=1<<32-dt(t)+i|n<<i|r,At=o+e}else Ot=1<<o|n<<i|r,At=e}function tc(e){e.return!==null&&(jn(e,1),hp(e,1,0))}function nc(e){for(;e===Xo;)Xo=cr[--ur],cr[ur]=null,Zo=cr[--ur],cr[ur]=null;for(;e===Bn;)Bn=qe[--Xe],qe[Xe]=null,At=qe[--Xe],qe[Xe]=null,Ot=qe[--Xe],qe[Xe]=null}var $e=null,We=null,te=!1,ct=null;function gp(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,We=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Ot,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,We=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cl(e){if(te){var t=We;if(t){var n=t;if(!Mu(e,t)){if(ll(e))throw Error(_(418));t=cn(n.nextSibling);var r=$e;t&&Mu(e,t)?gp(r,n):(e.flags=e.flags&-4097|2,te=!1,$e=e)}}else{if(ll(e))throw Error(_(418));e.flags=e.flags&-4097|2,te=!1,$e=e}}}function Fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function ho(e){if(e!==$e)return!1;if(!te)return Fu(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!il(e.type,e.memoizedProps)),t&&(t=We)){if(ll(e))throw mp(),Error(_(418));for(;t;)gp(e,t),t=cn(t.nextSibling)}if(Fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=$e?cn(e.stateNode.nextSibling):null;return!0}function mp(){for(var e=We;e;)e=cn(e.nextSibling)}function Cr(){We=$e=null,te=!1}function rc(e){ct===null?ct=[e]:ct.push(e)}var ey=Gt.ReactCurrentBatchConfig;function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function go(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Uu(e){var t=e._init;return t(e._payload)}function vp(e){function t(g,f){if(e){var m=g.deletions;m===null?(g.deletions=[f],g.flags|=16):m.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=pn(g,f),g.index=0,g.sibling=null,g}function o(g,f,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<f?(g.flags|=2,f):m):(g.flags|=2,f)):(g.flags|=1048576,f)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,f,m,w){return f===null||f.tag!==6?(f=wa(m,g.mode,w),f.return=g,f):(f=i(f,m),f.return=g,f)}function c(g,f,m,w){var E=m.type;return E===rr?p(g,f,m.props.children,w,m.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Jt&&Uu(E)===f.type)?(w=i(f,m.props),w.ref=Qr(g,f,m),w.return=g,w):(w=Lo(m.type,m.key,m.props,null,g.mode,w),w.ref=Qr(g,f,m),w.return=g,w)}function u(g,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ba(m,g.mode,w),f.return=g,f):(f=i(f,m.children||[]),f.return=g,f)}function p(g,f,m,w,E){return f===null||f.tag!==7?(f=zn(m,g.mode,w,E),f.return=g,f):(f=i(f,m),f.return=g,f)}function h(g,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=wa(""+f,g.mode,m),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ro:return m=Lo(f.type,f.key,f.props,null,g.mode,m),m.ref=Qr(g,null,f),m.return=g,m;case nr:return f=ba(f,g.mode,m),f.return=g,f;case Jt:var w=f._init;return h(g,w(f._payload),m)}if(ii(f)||Vr(f))return f=zn(f,g.mode,m,null),f.return=g,f;go(g,f)}return null}function d(g,f,m,w){var E=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:l(g,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ro:return m.key===E?c(g,f,m,w):null;case nr:return m.key===E?u(g,f,m,w):null;case Jt:return E=m._init,d(g,f,E(m._payload),w)}if(ii(m)||Vr(m))return E!==null?null:p(g,f,m,w,null);go(g,m)}return null}function x(g,f,m,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,l(f,g,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ro:return g=g.get(w.key===null?m:w.key)||null,c(f,g,w,E);case nr:return g=g.get(w.key===null?m:w.key)||null,u(f,g,w,E);case Jt:var C=w._init;return x(g,f,m,C(w._payload),E)}if(ii(w)||Vr(w))return g=g.get(m)||null,p(f,g,w,E,null);go(f,w)}return null}function b(g,f,m,w){for(var E=null,C=null,j=f,I=f=0,V=null;j!==null&&I<m.length;I++){j.index>I?(V=j,j=null):V=j.sibling;var R=d(g,j,m[I],w);if(R===null){j===null&&(j=V);break}e&&j&&R.alternate===null&&t(g,j),f=o(R,f,I),C===null?E=R:C.sibling=R,C=R,j=V}if(I===m.length)return n(g,j),te&&jn(g,I),E;if(j===null){for(;I<m.length;I++)j=h(g,m[I],w),j!==null&&(f=o(j,f,I),C===null?E=j:C.sibling=j,C=j);return te&&jn(g,I),E}for(j=r(g,j);I<m.length;I++)V=x(j,g,I,m[I],w),V!==null&&(e&&V.alternate!==null&&j.delete(V.key===null?I:V.key),f=o(V,f,I),C===null?E=V:C.sibling=V,C=V);return e&&j.forEach(function(pe){return t(g,pe)}),te&&jn(g,I),E}function S(g,f,m,w){var E=Vr(m);if(typeof E!="function")throw Error(_(150));if(m=E.call(m),m==null)throw Error(_(151));for(var C=E=null,j=f,I=f=0,V=null,R=m.next();j!==null&&!R.done;I++,R=m.next()){j.index>I?(V=j,j=null):V=j.sibling;var pe=d(g,j,R.value,w);if(pe===null){j===null&&(j=V);break}e&&j&&pe.alternate===null&&t(g,j),f=o(pe,f,I),C===null?E=pe:C.sibling=pe,C=pe,j=V}if(R.done)return n(g,j),te&&jn(g,I),E;if(j===null){for(;!R.done;I++,R=m.next())R=h(g,R.value,w),R!==null&&(f=o(R,f,I),C===null?E=R:C.sibling=R,C=R);return te&&jn(g,I),E}for(j=r(g,j);!R.done;I++,R=m.next())R=x(j,g,I,R.value,w),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?I:R.key),f=o(R,f,I),C===null?E=R:C.sibling=R,C=R);return e&&j.forEach(function(he){return t(g,he)}),te&&jn(g,I),E}function O(g,f,m,w){if(typeof m=="object"&&m!==null&&m.type===rr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ro:e:{for(var E=m.key,C=f;C!==null;){if(C.key===E){if(E=m.type,E===rr){if(C.tag===7){n(g,C.sibling),f=i(C,m.props.children),f.return=g,g=f;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Jt&&Uu(E)===C.type){n(g,C.sibling),f=i(C,m.props),f.ref=Qr(g,C,m),f.return=g,g=f;break e}n(g,C);break}else t(g,C);C=C.sibling}m.type===rr?(f=zn(m.props.children,g.mode,w,m.key),f.return=g,g=f):(w=Lo(m.type,m.key,m.props,null,g.mode,w),w.ref=Qr(g,f,m),w.return=g,g=w)}return a(g);case nr:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(g,f.sibling),f=i(f,m.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=ba(m,g.mode,w),f.return=g,g=f}return a(g);case Jt:return C=m._init,O(g,f,C(m._payload),w)}if(ii(m))return b(g,f,m,w);if(Vr(m))return S(g,f,m,w);go(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,m),f.return=g,g=f):(n(g,f),f=wa(m,g.mode,w),f.return=g,g=f),a(g)):n(g,f)}return O}var Tr=vp(!0),yp=vp(!1),es=xn(null),ts=null,dr=null,ic=null;function oc(){ic=dr=ts=null}function sc(e){var t=es.current;ee(es),e._currentValue=t}function ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yr(e,t){ts=e,ic=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(ic!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(ts===null)throw Error(_(308));dr=e,ts.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var On=null;function ac(e){On===null?On=[e]:On.push(e)}function xp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ac(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ut(e,n)}return i=r.interleaved,i===null?(t.next=t,ac(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ut(e,n)}function jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kl(e,n)}}function Bu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ns(e,t,n,r){var i=e.updateQueue;qt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;a=0,p=u=c=null,l=o;do{var d=l.lane,x=l.eventTime;if((r&d)===d){p!==null&&(p=p.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,S=l;switch(d=t,x=n,S.tag){case 1:if(b=S.payload,typeof b=="function"){h=b.call(x,h,d);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=S.payload,d=typeof b=="function"?b.call(x,h,d):b,d==null)break e;h=oe({},h,d);break e;case 2:qt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else x={eventTime:x,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=x,c=h):p=p.next=x,a|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(p===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);$n|=a,e.lanes=a,e.memoizedState=h}}function Wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var $i={},bt=xn($i),Pi=xn($i),Ri=xn($i);function An(e){if(e===$i)throw Error(_(174));return e}function cc(e,t){switch(X(Ri,t),X(Pi,e),X(bt,$i),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Va(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Va(t,e)}ee(bt),X(bt,t)}function Ir(){ee(bt),ee(Pi),ee(Ri)}function bp(e){An(Ri.current);var t=An(bt.current),n=Va(t,e.type);t!==n&&(X(Pi,e),X(bt,n))}function uc(e){Pi.current===e&&(ee(bt),ee(Pi))}var re=xn(0);function rs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=[];function dc(){for(var e=0;e<ha.length;e++)ha[e]._workInProgressVersionPrimary=null;ha.length=0}var Po=Gt.ReactCurrentDispatcher,ga=Gt.ReactCurrentBatchConfig,Wn=0,ie=null,de=null,ge=null,is=!1,fi=!1,Ni=0,ty=0;function ke(){throw Error(_(321))}function fc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function pc(e,t,n,r,i,o){if(Wn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Po.current=e===null||e.memoizedState===null?oy:sy,e=n(r,i),fi){o=0;do{if(fi=!1,Ni=0,25<=o)throw Error(_(301));o+=1,ge=de=null,t.updateQueue=null,Po.current=ay,e=n(r,i)}while(fi)}if(Po.current=os,t=de!==null&&de.next!==null,Wn=0,ge=de=ie=null,is=!1,t)throw Error(_(300));return e}function hc(){var e=Ni!==0;return Ni=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function nt(){if(de===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,de=e;else{if(e===null)throw Error(_(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function Oi(e,t){return typeof t=="function"?t(e):t}function ma(e){var t=nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=de,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var p=u.lane;if((Wn&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,a=r):c=c.next=h,ie.lanes|=p,$n|=p}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,ht(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,$n|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function va(e){var t=nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);ht(o,t.memoizedState)||(ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Sp(){}function kp(e,t){var n=ie,r=nt(),i=t(),o=!ht(r.memoizedState,i);if(o&&(r.memoizedState=i,ze=!0),r=r.queue,gc(Cp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Ai(9,Ep.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(_(349));Wn&30||_p(n,t,i)}return i}function _p(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ep(e,t,n,r){t.value=n,t.getSnapshot=r,Tp(t)&&Ip(e)}function Cp(e,t,n){return n(function(){Tp(t)&&Ip(e)})}function Tp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function Ip(e){var t=Ut(e,1);t!==null&&ft(t,e,1,-1)}function $u(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},t.queue=e,e=e.dispatch=iy.bind(null,ie,e),[t.memoizedState,e]}function Ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jp(){return nt().memoizedState}function Ro(e,t,n,r){var i=vt();ie.flags|=e,i.memoizedState=Ai(1|t,n,void 0,r===void 0?null:r)}function Ts(e,t,n,r){var i=nt();r=r===void 0?null:r;var o=void 0;if(de!==null){var a=de.memoizedState;if(o=a.destroy,r!==null&&fc(r,a.deps)){i.memoizedState=Ai(t,n,o,r);return}}ie.flags|=e,i.memoizedState=Ai(1|t,n,o,r)}function Vu(e,t){return Ro(8390656,8,e,t)}function gc(e,t){return Ts(2048,8,e,t)}function Pp(e,t){return Ts(4,2,e,t)}function Rp(e,t){return Ts(4,4,e,t)}function Np(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Op(e,t,n){return n=n!=null?n.concat([e]):null,Ts(4,4,Np.bind(null,t,e),n)}function mc(){}function Ap(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lp(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dp(e,t,n){return Wn&21?(ht(n,t)||(n=Bf(),ie.lanes|=n,$n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function ny(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=ga.transition;ga.transition={};try{e(!1),t()}finally{J=n,ga.transition=r}}function zp(){return nt().memoizedState}function ry(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mp(e))Fp(t,n);else if(n=xp(e,t,n,r),n!==null){var i=Pe();ft(n,e,r,i),Up(n,t,r)}}function iy(e,t,n){var r=fn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mp(e))Fp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,ht(l,a)){var c=t.interleaved;c===null?(i.next=i,ac(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=xp(e,t,i,r),n!==null&&(i=Pe(),ft(n,e,r,i),Up(n,t,r))}}function Mp(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Fp(e,t){fi=is=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Up(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kl(e,n)}}var os={readContext:tt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},oy={readContext:tt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Vu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4194308,4,Np.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ry.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:$u,useDebugValue:mc,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=$u(!1),t=e[0];return e=ny.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=vt();if(te){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ve===null)throw Error(_(349));Wn&30||_p(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Vu(Cp.bind(null,r,o,e),[e]),r.flags|=2048,Ai(9,Ep.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vt(),t=ve.identifierPrefix;if(te){var n=At,r=Ot;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ty++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sy={readContext:tt,useCallback:Ap,useContext:tt,useEffect:gc,useImperativeHandle:Op,useInsertionEffect:Pp,useLayoutEffect:Rp,useMemo:Lp,useReducer:ma,useRef:jp,useState:function(){return ma(Oi)},useDebugValue:mc,useDeferredValue:function(e){var t=nt();return Dp(t,de.memoizedState,e)},useTransition:function(){var e=ma(Oi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Sp,useSyncExternalStore:kp,useId:zp,unstable_isNewReconciler:!1},ay={readContext:tt,useCallback:Ap,useContext:tt,useEffect:gc,useImperativeHandle:Op,useInsertionEffect:Pp,useLayoutEffect:Rp,useMemo:Lp,useReducer:va,useRef:jp,useState:function(){return va(Oi)},useDebugValue:mc,useDeferredValue:function(e){var t=nt();return de===null?t.memoizedState=e:Dp(t,de.memoizedState,e)},useTransition:function(){var e=va(Oi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Sp,useSyncExternalStore:kp,useId:zp,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Is={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=fn(e),o=zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=un(e,o,i),t!==null&&(ft(t,e,i,r),jo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=fn(e),o=zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=un(e,o,i),t!==null&&(ft(t,e,i,r),jo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=fn(e),i=zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=un(e,i,r),t!==null&&(ft(t,e,r,n),jo(t,e,r))}};function Hu(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ci(n,r)||!Ci(i,o):!0}function Bp(e,t,n){var r=!1,i=vn,o=t.contextType;return typeof o=="object"&&o!==null?o=tt(o):(i=Fe(t)?Un:Ce.current,r=t.contextTypes,o=(r=r!=null)?Er(e,i):vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Is,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Is.enqueueReplaceState(t,t.state,null)}function fl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},lc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=tt(o):(o=Fe(t)?Un:Ce.current,i.context=Er(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(dl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Is.enqueueReplaceState(i,i.state,null),ns(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t){try{var n="",r=t;do n+=Lm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ya(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ly=typeof WeakMap=="function"?WeakMap:Map;function Wp(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){as||(as=!0,kl=r),pl(e,t)},n}function $p(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){pl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){pl(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ly;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Sy.bind(null,e,t,n),t.then(e,e))}function Yu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var cy=Gt.ReactCurrentOwner,ze=!1;function je(e,t,n,r){t.child=e===null?yp(t,null,n,r):Tr(t,e.child,n,r)}function Ju(e,t,n,r,i){n=n.render;var o=t.ref;return yr(t,i),r=pc(e,t,n,r,o,i),n=hc(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(te&&n&&tc(t),t.flags|=1,je(e,t,r,i),t.child)}function qu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!_c(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Vp(e,t,o,r,i)):(e=Lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ci,n(a,r)&&e.ref===t.ref)return Bt(e,t,i)}return t.flags|=1,e=pn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ci(o,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,Bt(e,t,i)}return hl(e,t,n,r,i)}function Hp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(pr,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(pr,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(pr,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(pr,Be),Be|=r;return je(e,t,i,n),t.child}function Gp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hl(e,t,n,r,i){var o=Fe(n)?Un:Ce.current;return o=Er(t,o),yr(t,i),n=pc(e,t,n,r,o,i),r=hc(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(te&&r&&tc(t),t.flags|=1,je(e,t,n,i),t.child)}function Xu(e,t,n,r,i){if(Fe(n)){var o=!0;qo(t)}else o=!1;if(yr(t,i),t.stateNode===null)No(e,t),Bp(t,n,r),fl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Fe(n)?Un:Ce.current,u=Er(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Gu(t,a,r,u),qt=!1;var d=t.memoizedState;a.state=d,ns(t,r,a,i),c=t.memoizedState,l!==r||d!==c||Me.current||qt?(typeof p=="function"&&(dl(t,n,p,r),c=t.memoizedState),(l=qt||Hu(t,n,l,r,d,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,wp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:st(t.type,l),a.props=u,h=t.pendingProps,d=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=tt(c):(c=Fe(n)?Un:Ce.current,c=Er(t,c));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||d!==c)&&Gu(t,a,r,c),qt=!1,d=t.memoizedState,a.state=d,ns(t,r,a,i);var b=t.memoizedState;l!==h||d!==b||Me.current||qt?(typeof x=="function"&&(dl(t,n,x,r),b=t.memoizedState),(u=qt||Hu(t,n,u,r,d,b,c)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return gl(e,t,n,r,o,i)}function gl(e,t,n,r,i,o){Gp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&zu(t,n,!1),Bt(e,t,o);r=t.stateNode,cy.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Tr(t,e.child,null,o),t.child=Tr(t,null,l,o)):je(e,t,l,o),t.memoizedState=r.state,i&&zu(t,n,!0),t.child}function Kp(e){var t=e.stateNode;t.pendingContext?Du(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Du(e,t.context,!1),cc(e,t.containerInfo)}function Zu(e,t,n,r,i){return Cr(),rc(i),t.flags|=256,je(e,t,n,r),t.child}var ml={dehydrated:null,treeContext:null,retryLane:0};function vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yp(e,t,n){var r=t.pendingProps,i=re.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(re,i&1),e===null)return cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Rs(a,r,0,null),e=zn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=vl(n),t.memoizedState=ml,e):vc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return uy(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=pn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=pn(l,o):(o=zn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?vl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ml,r}return o=e.child,e=o.sibling,r=pn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vc(e,t){return t=Rs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,n,r){return r!==null&&rc(r),Tr(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uy(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ya(Error(_(422))),mo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Rs({mode:"visible",children:r.children},i,0,null),o=zn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Tr(t,e.child,null,a),t.child.memoizedState=vl(a),t.memoizedState=ml,o);if(!(t.mode&1))return mo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(_(419)),r=ya(o,r,void 0),mo(e,t,a,r)}if(l=(a&e.childLanes)!==0,ze||l){if(r=ve,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ut(e,i),ft(r,e,i,-1))}return kc(),r=ya(Error(_(421))),mo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ky.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,We=cn(i.nextSibling),$e=t,te=!0,ct=null,e!==null&&(qe[Xe++]=Ot,qe[Xe++]=At,qe[Xe++]=Bn,Ot=e.id,At=e.overflow,Bn=t),t=vc(t,r.children),t.flags|=4096,t)}function ed(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ul(e.return,t,n)}function xa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Qp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(je(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ed(e,n,t);else if(e.tag===19)ed(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&rs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&rs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xa(t,!0,n,null,o);break;case"together":xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function No(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dy(e,t,n){switch(t.tag){case 3:Kp(t),Cr();break;case 5:bp(t);break;case 1:Fe(t.type)&&qo(t);break;case 4:cc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(es,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?Yp(e,t,n):(X(re,re.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Hp(e,t,n)}return Bt(e,t,n)}var Jp,yl,qp,Xp;Jp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yl=function(){};qp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,An(bt.current);var o=null;switch(n){case"input":i=Ua(e,i),r=Ua(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=$a(e,i),r=$a(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}Ha(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xi.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Z("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Xp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Jr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fy(e,t,n){var r=t.pendingProps;switch(nc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Fe(t.type)&&Jo(),_e(t),null;case 3:return r=t.stateNode,Ir(),ee(Me),ee(Ce),dc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ho(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Cl(ct),ct=null))),yl(e,t),_e(t),null;case 5:uc(t);var i=An(Ri.current);if(n=t.type,e!==null&&t.stateNode!=null)qp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return _e(t),null}if(e=An(bt.current),ho(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[yt]=t,r[ji]=o,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)Z(si[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":cu(r,o),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Z("invalid",r);break;case"textarea":du(r,o),Z("invalid",r)}Ha(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&po(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&po(r.textContent,l,e),i=["children",""+l]):xi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Z("scroll",r)}switch(n){case"input":io(r),uu(r,o,!0);break;case"textarea":io(r),fu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[yt]=t,e[ji]=r,Jp(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ga(n,r),n){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)Z(si[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":cu(e,r),i=Ua(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),Z("invalid",e);break;case"textarea":du(e,r),i=$a(e,r),Z("invalid",e);break;default:i=r}Ha(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?jf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Tf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&wi(e,c):typeof c=="number"&&wi(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xi.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Z("scroll",e):c!=null&&Bl(e,o,c,a))}switch(n){case"input":io(e),uu(e,r,!1);break;case"textarea":io(e),fu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hr(e,!!r.multiple,o,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)Xp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=An(Ri.current),An(bt.current),ho(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(o=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:po(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return _e(t),null;case 13:if(ee(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&We!==null&&t.mode&1&&!(t.flags&128))mp(),Cr(),t.flags|=98560,o=!1;else if(o=ho(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[yt]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),o=!1}else ct!==null&&(Cl(ct),ct=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?fe===0&&(fe=3):kc())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return Ir(),yl(e,t),e===null&&Ti(t.stateNode.containerInfo),_e(t),null;case 10:return sc(t.type._context),_e(t),null;case 17:return Fe(t.type)&&Jo(),_e(t),null;case 19:if(ee(re),o=t.memoizedState,o===null)return _e(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Jr(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=rs(e),a!==null){for(t.flags|=128,Jr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&le()>Pr&&(t.flags|=128,r=!0,Jr(o,!1),t.lanes=4194304)}else{if(!r)if(e=rs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!te)return _e(t),null}else 2*le()-o.renderingStartTime>Pr&&n!==1073741824&&(t.flags|=128,r=!0,Jr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,n=re.current,X(re,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return Sc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function py(e,t){switch(nc(t),t.tag){case 1:return Fe(t.type)&&Jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),ee(Me),ee(Ce),dc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return uc(t),null;case 13:if(ee(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(re),null;case 4:return Ir(),null;case 10:return sc(t.type._context),null;case 22:case 23:return Sc(),null;case 24:return null;default:return null}}var vo=!1,Ee=!1,hy=typeof WeakSet=="function"?WeakSet:Set,N=null;function fr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function xl(e,t,n){try{n()}catch(r){se(e,t,r)}}var td=!1;function gy(e,t){if(nl=Go,e=rp(),ec(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,p=0,h=e,d=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(c=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(x=h.firstChild)!==null;)d=h,h=x;for(;;){if(h===e)break t;if(d===n&&++u===i&&(l=a),d===o&&++p===r&&(c=a),(x=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(rl={focusedElem:e,selectionRange:n},Go=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var S=b.memoizedProps,O=b.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:st(t.type,S),O);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return b=td,td=!1,b}function pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&xl(t,n,o)}i=i.next}while(i!==r)}}function js(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zp(e){var t=e.alternate;t!==null&&(e.alternate=null,Zp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[ji],delete t[sl],delete t[qv],delete t[Xv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function eh(e){return e.tag===5||e.tag===3||e.tag===4}function nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||eh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}function Sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}var ye=null,at=!1;function Yt(e,t,n){for(n=n.child;n!==null;)th(e,t,n),n=n.sibling}function th(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(bs,n)}catch{}switch(n.tag){case 5:Ee||fr(n,t);case 6:var r=ye,i=at;ye=null,Yt(e,t,n),ye=r,at=i,ye!==null&&(at?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(at?(e=ye,n=n.stateNode,e.nodeType===8?fa(e.parentNode,n):e.nodeType===1&&fa(e,n),_i(e)):fa(ye,n.stateNode));break;case 4:r=ye,i=at,ye=n.stateNode.containerInfo,at=!0,Yt(e,t,n),ye=r,at=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&xl(n,t,a),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!Ee&&(fr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){se(n,t,l)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Yt(e,t,n),Ee=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function rd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hy),t.forEach(function(r){var i=_y.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,at=!1;break e;case 3:ye=l.stateNode.containerInfo,at=!0;break e;case 4:ye=l.stateNode.containerInfo,at=!0;break e}l=l.return}if(ye===null)throw Error(_(160));th(o,a,i),ye=null,at=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nh(t,e),t=t.sibling}function nh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),mt(e),r&4){try{pi(3,e,e.return),js(3,e)}catch(S){se(e,e.return,S)}try{pi(5,e,e.return)}catch(S){se(e,e.return,S)}}break;case 1:ot(t,e),mt(e),r&512&&n!==null&&fr(n,n.return);break;case 5:if(ot(t,e),mt(e),r&512&&n!==null&&fr(n,n.return),e.flags&32){var i=e.stateNode;try{wi(i,"")}catch(S){se(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&_f(i,o),Ga(l,a);var u=Ga(l,o);for(a=0;a<c.length;a+=2){var p=c[a],h=c[a+1];p==="style"?jf(i,h):p==="dangerouslySetInnerHTML"?Tf(i,h):p==="children"?wi(i,h):Bl(i,p,h,u)}switch(l){case"input":Ba(i,o);break;case"textarea":Ef(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?hr(i,!!o.multiple,x,!1):d!==!!o.multiple&&(o.defaultValue!=null?hr(i,!!o.multiple,o.defaultValue,!0):hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ji]=o}catch(S){se(e,e.return,S)}}break;case 6:if(ot(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){se(e,e.return,S)}}break;case 3:if(ot(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_i(t.containerInfo)}catch(S){se(e,e.return,S)}break;case 4:ot(t,e),mt(e);break;case 13:ot(t,e),mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(wc=le())),r&4&&rd(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||p,ot(t,e),Ee=u):ot(t,e),mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(N=e,p=e.child;p!==null;){for(h=N=p;N!==null;){switch(d=N,x=d.child,d.tag){case 0:case 11:case 14:case 15:pi(4,d,d.return);break;case 1:fr(d,d.return);var b=d.stateNode;if(typeof b.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(S){se(r,n,S)}}break;case 5:fr(d,d.return);break;case 22:if(d.memoizedState!==null){od(h);continue}}x!==null?(x.return=d,N=x):od(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=If("display",a))}catch(S){se(e,e.return,S)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(S){se(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ot(t,e),mt(e),r&4&&rd(e);break;case 21:break;default:ot(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(eh(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wi(i,""),r.flags&=-33);var o=nd(e);Sl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=nd(e);bl(e,l,a);break;default:throw Error(_(161))}}catch(c){se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function my(e,t,n){N=e,rh(e)}function rh(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||vo;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ee;l=vo;var u=Ee;if(vo=a,(Ee=c)&&!u)for(N=i;N!==null;)a=N,c=a.child,a.tag===22&&a.memoizedState!==null?sd(i):c!==null?(c.return=a,N=c):sd(i);for(;o!==null;)N=o,rh(o),o=o.sibling;N=i,vo=l,Ee=u}id(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):id(e)}}function id(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||js(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wu(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wu(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&_i(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ee||t.flags&512&&wl(t)}catch(d){se(t,t.return,d)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function od(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function sd(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{js(4,t)}catch(c){se(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){se(t,i,c)}}var o=t.return;try{wl(t)}catch(c){se(t,o,c)}break;case 5:var a=t.return;try{wl(t)}catch(c){se(t,a,c)}}}catch(c){se(t,t.return,c)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var vy=Math.ceil,ss=Gt.ReactCurrentDispatcher,yc=Gt.ReactCurrentOwner,et=Gt.ReactCurrentBatchConfig,$=0,ve=null,ue=null,xe=0,Be=0,pr=xn(0),fe=0,Li=null,$n=0,Ps=0,xc=0,hi=null,Le=null,wc=0,Pr=1/0,jt=null,as=!1,kl=null,dn=null,yo=!1,rn=null,ls=0,gi=0,_l=null,Oo=-1,Ao=0;function Pe(){return $&6?le():Oo!==-1?Oo:Oo=le()}function fn(e){return e.mode&1?$&2&&xe!==0?xe&-xe:ey.transition!==null?(Ao===0&&(Ao=Bf()),Ao):(e=J,e!==0||(e=window.event,e=e===void 0?16:Yf(e.type)),e):1}function ft(e,t,n,r){if(50<gi)throw gi=0,_l=null,Error(_(185));Ui(e,n,r),(!($&2)||e!==ve)&&(e===ve&&(!($&2)&&(Ps|=n),fe===4&&Zt(e,xe)),Ue(e,r),n===1&&$===0&&!(t.mode&1)&&(Pr=le()+500,Cs&&wn()))}function Ue(e,t){var n=e.callbackNode;ev(e,t);var r=Ho(e,e===ve?xe:0);if(r===0)n!==null&&gu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&gu(n),t===1)e.tag===0?Zv(ad.bind(null,e)):pp(ad.bind(null,e)),Qv(function(){!($&6)&&wn()}),n=null;else{switch(Wf(r)){case 1:n=Gl;break;case 4:n=Ff;break;case 16:n=Vo;break;case 536870912:n=Uf;break;default:n=Vo}n=dh(n,ih.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ih(e,t){if(Oo=-1,Ao=0,$&6)throw Error(_(327));var n=e.callbackNode;if(xr()&&e.callbackNode!==n)return null;var r=Ho(e,e===ve?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cs(e,r);else{t=r;var i=$;$|=2;var o=sh();(ve!==e||xe!==t)&&(jt=null,Pr=le()+500,Dn(e,t));do try{wy();break}catch(l){oh(e,l)}while(!0);oc(),ss.current=o,$=i,ue!==null?t=0:(ve=null,xe=0,t=fe)}if(t!==0){if(t===2&&(i=qa(e),i!==0&&(r=i,t=El(e,i))),t===1)throw n=Li,Dn(e,0),Zt(e,r),Ue(e,le()),n;if(t===6)Zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!yy(i)&&(t=cs(e,r),t===2&&(o=qa(e),o!==0&&(r=o,t=El(e,o))),t===1))throw n=Li,Dn(e,0),Zt(e,r),Ue(e,le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Pn(e,Le,jt);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=wc+500-le(),10<t)){if(Ho(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ol(Pn.bind(null,e,Le,jt),t);break}Pn(e,Le,jt);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-dt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vy(r/1960))-r,10<r){e.timeoutHandle=ol(Pn.bind(null,e,Le,jt),r);break}Pn(e,Le,jt);break;case 5:Pn(e,Le,jt);break;default:throw Error(_(329))}}}return Ue(e,le()),e.callbackNode===n?ih.bind(null,e):null}function El(e,t){var n=hi;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=cs(e,t),e!==2&&(t=Le,Le=n,t!==null&&Cl(t)),e}function Cl(e){Le===null?Le=e:Le.push.apply(Le,e)}function yy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~xc,t&=~Ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function ad(e){if($&6)throw Error(_(327));xr();var t=Ho(e,0);if(!(t&1))return Ue(e,le()),null;var n=cs(e,t);if(e.tag!==0&&n===2){var r=qa(e);r!==0&&(t=r,n=El(e,r))}if(n===1)throw n=Li,Dn(e,0),Zt(e,t),Ue(e,le()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,Le,jt),Ue(e,le()),null}function bc(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Pr=le()+500,Cs&&wn())}}function Vn(e){rn!==null&&rn.tag===0&&!($&6)&&xr();var t=$;$|=1;var n=et.transition,r=J;try{if(et.transition=null,J=1,e)return e()}finally{J=r,et.transition=n,$=t,!($&6)&&wn()}}function Sc(){Be=pr.current,ee(pr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yv(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(nc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jo();break;case 3:Ir(),ee(Me),ee(Ce),dc();break;case 5:uc(r);break;case 4:Ir();break;case 13:ee(re);break;case 19:ee(re);break;case 10:sc(r.type._context);break;case 22:case 23:Sc()}n=n.return}if(ve=e,ue=e=pn(e.current,null),xe=Be=t,fe=0,Li=null,xc=Ps=$n=0,Le=hi=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}On=null}return e}function oh(e,t){do{var n=ue;try{if(oc(),Po.current=os,is){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}is=!1}if(Wn=0,ge=de=ie=null,fi=!1,Ni=0,yc.current=null,n===null||n.return===null){fe=1,Li=t,ue=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=xe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var d=p.alternate;d?(p.updateQueue=d.updateQueue,p.memoizedState=d.memoizedState,p.lanes=d.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=Yu(a);if(x!==null){x.flags&=-257,Qu(x,a,l,o,t),x.mode&1&&Ku(o,u,t),t=x,c=u;var b=t.updateQueue;if(b===null){var S=new Set;S.add(c),t.updateQueue=S}else b.add(c);break e}else{if(!(t&1)){Ku(o,u,t),kc();break e}c=Error(_(426))}}else if(te&&l.mode&1){var O=Yu(a);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Qu(O,a,l,o,t),rc(jr(c,l));break e}}o=c=jr(c,l),fe!==4&&(fe=2),hi===null?hi=[o]:hi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Wp(o,c,t);Bu(o,g);break e;case 1:l=c;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(dn===null||!dn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=$p(o,l,t);Bu(o,w);break e}}o=o.return}while(o!==null)}lh(n)}catch(E){t=E,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function sh(){var e=ss.current;return ss.current=os,e===null?os:e}function kc(){(fe===0||fe===3||fe===2)&&(fe=4),ve===null||!($n&268435455)&&!(Ps&268435455)||Zt(ve,xe)}function cs(e,t){var n=$;$|=2;var r=sh();(ve!==e||xe!==t)&&(jt=null,Dn(e,t));do try{xy();break}catch(i){oh(e,i)}while(!0);if(oc(),$=n,ss.current=r,ue!==null)throw Error(_(261));return ve=null,xe=0,fe}function xy(){for(;ue!==null;)ah(ue)}function wy(){for(;ue!==null&&!Hm();)ah(ue)}function ah(e){var t=uh(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?lh(e):ue=t,yc.current=null}function lh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=py(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ue=null;return}}else if(n=fy(n,t,Be),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);fe===0&&(fe=5)}function Pn(e,t,n){var r=J,i=et.transition;try{et.transition=null,J=1,by(e,t,n,r)}finally{et.transition=i,J=r}return null}function by(e,t,n,r){do xr();while(rn!==null);if($&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(tv(e,o),e===ve&&(ue=ve=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,dh(Vo,function(){return xr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=et.transition,et.transition=null;var a=J;J=1;var l=$;$|=4,yc.current=null,gy(e,n),nh(n,e),Bv(rl),Go=!!nl,rl=nl=null,e.current=n,my(n),Gm(),$=l,J=a,et.transition=o}else e.current=n;if(yo&&(yo=!1,rn=e,ls=i),o=e.pendingLanes,o===0&&(dn=null),Qm(n.stateNode),Ue(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(as)throw as=!1,e=kl,kl=null,e;return ls&1&&e.tag!==0&&xr(),o=e.pendingLanes,o&1?e===_l?gi++:(gi=0,_l=e):gi=0,wn(),null}function xr(){if(rn!==null){var e=Wf(ls),t=et.transition,n=J;try{if(et.transition=null,J=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,ls=0,$&6)throw Error(_(331));var i=$;for($|=4,N=e.current;N!==null;){var o=N,a=o.child;if(N.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(N=u;N!==null;){var p=N;switch(p.tag){case 0:case 11:case 15:pi(8,p,o)}var h=p.child;if(h!==null)h.return=p,N=h;else for(;N!==null;){p=N;var d=p.sibling,x=p.return;if(Zp(p),p===u){N=null;break}if(d!==null){d.return=x,N=d;break}N=x}}}var b=o.alternate;if(b!==null){var S=b.child;if(S!==null){b.child=null;do{var O=S.sibling;S.sibling=null,S=O}while(S!==null)}}N=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,N=a;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:pi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,N=g;break e}N=o.return}}var f=e.current;for(N=f;N!==null;){a=N;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,N=m;else e:for(a=f;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:js(9,l)}}catch(E){se(l,l.return,E)}if(l===a){N=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,N=w;break e}N=l.return}}if($=i,wn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(bs,e)}catch{}r=!0}return r}finally{J=n,et.transition=t}}return!1}function ld(e,t,n){t=jr(n,t),t=Wp(e,t,1),e=un(e,t,1),t=Pe(),e!==null&&(Ui(e,1,t),Ue(e,t))}function se(e,t,n){if(e.tag===3)ld(e,e,n);else for(;t!==null;){if(t.tag===3){ld(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=jr(n,e),e=$p(t,e,1),t=un(t,e,1),e=Pe(),t!==null&&(Ui(t,1,e),Ue(t,e));break}}t=t.return}}function Sy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(xe&n)===n&&(fe===4||fe===3&&(xe&130023424)===xe&&500>le()-wc?Dn(e,0):xc|=n),Ue(e,t)}function ch(e,t){t===0&&(e.mode&1?(t=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):t=1);var n=Pe();e=Ut(e,t),e!==null&&(Ui(e,t,n),Ue(e,n))}function ky(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ch(e,n)}function _y(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),ch(e,n)}var uh;uh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,dy(e,t,n);ze=!!(e.flags&131072)}else ze=!1,te&&t.flags&1048576&&hp(t,Zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;No(e,t),e=t.pendingProps;var i=Er(t,Ce.current);yr(t,n),i=pc(null,t,r,e,i,n);var o=hc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(o=!0,qo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lc(t),i.updater=Is,t.stateNode=i,i._reactInternals=t,fl(t,r,e,n),t=gl(null,t,r,!0,o,n)):(t.tag=0,te&&o&&tc(t),je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(No(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Cy(r),e=st(r,e),i){case 0:t=hl(null,t,r,e,n);break e;case 1:t=Xu(null,t,r,e,n);break e;case 11:t=Ju(null,t,r,e,n);break e;case 14:t=qu(null,t,r,st(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),hl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Xu(e,t,r,i,n);case 3:e:{if(Kp(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,wp(e,t),ns(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=jr(Error(_(423)),t),t=Zu(e,t,r,n,i);break e}else if(r!==i){i=jr(Error(_(424)),t),t=Zu(e,t,r,n,i);break e}else for(We=cn(t.stateNode.containerInfo.firstChild),$e=t,te=!0,ct=null,n=yp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),r===i){t=Bt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return bp(t),e===null&&cl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,il(r,i)?a=null:o!==null&&il(r,o)&&(t.flags|=32),Gp(e,t),je(e,t,a,n),t.child;case 6:return e===null&&cl(t),null;case 13:return Yp(e,t,n);case 4:return cc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tr(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Ju(e,t,r,i,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,X(es,r._currentValue),r._currentValue=a,o!==null)if(ht(o.value,a)){if(o.children===i.children&&!Me.current){t=Bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=zt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ul(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(_(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ul(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,yr(t,n),i=tt(i),r=r(i),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,i=st(r,t.pendingProps),i=st(r.type,i),qu(e,t,r,i,n);case 15:return Vp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),No(e,t),t.tag=1,Fe(r)?(e=!0,qo(t)):e=!1,yr(t,n),Bp(t,r,i),fl(t,r,i,n),gl(null,t,r,!0,e,n);case 19:return Qp(e,t,n);case 22:return Hp(e,t,n)}throw Error(_(156,t.tag))};function dh(e,t){return Mf(e,t)}function Ey(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new Ey(e,t,n,r)}function _c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cy(e){if(typeof e=="function")return _c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$l)return 11;if(e===Vl)return 14}return 2}function pn(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")_c(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case rr:return zn(n.children,i,o,t);case Wl:a=8,i|=8;break;case Da:return e=Ze(12,n,t,i|2),e.elementType=Da,e.lanes=o,e;case za:return e=Ze(13,n,t,i),e.elementType=za,e.lanes=o,e;case Ma:return e=Ze(19,n,t,i),e.elementType=Ma,e.lanes=o,e;case bf:return Rs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xf:a=10;break e;case wf:a=9;break e;case $l:a=11;break e;case Vl:a=14;break e;case Jt:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ze(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function zn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function Rs(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=bf,e.lanes=n,e.stateNode={isHidden:!1},e}function wa(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function ba(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ty(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ta(0),this.expirationTimes=ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ta(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ec(e,t,n,r,i,o,a,l,c){return e=new Ty(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lc(o),e}function Iy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fh(e){if(!e)return vn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Fe(n))return fp(e,n,t)}return t}function ph(e,t,n,r,i,o,a,l,c){return e=Ec(n,r,!0,e,i,o,a,l,c),e.context=fh(null),n=e.current,r=Pe(),i=fn(n),o=zt(r,i),o.callback=t??null,un(n,o,i),e.current.lanes=i,Ui(e,i,r),Ue(e,r),e}function Ns(e,t,n,r){var i=t.current,o=Pe(),a=fn(i);return n=fh(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(i,t,a),e!==null&&(ft(e,i,a,o),jo(e,i,a)),a}function us(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cc(e,t){cd(e,t),(e=e.alternate)&&cd(e,t)}function jy(){return null}var hh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tc(e){this._internalRoot=e}Os.prototype.render=Tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ns(e,t,null,null)};Os.prototype.unmount=Tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){Ns(null,e,null,null)}),t[Ft]=null}};function Os(e){this._internalRoot=e}Os.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&Kf(e)}};function Ic(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function As(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ud(){}function Py(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=us(a);o.call(u)}}var a=ph(t,r,e,0,null,!1,!1,"",ud);return e._reactRootContainer=a,e[Ft]=a.current,Ti(e.nodeType===8?e.parentNode:e),Vn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=us(c);l.call(u)}}var c=Ec(e,0,!1,null,null,!1,!1,"",ud);return e._reactRootContainer=c,e[Ft]=c.current,Ti(e.nodeType===8?e.parentNode:e),Vn(function(){Ns(t,c,n,r)}),c}function Ls(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=us(a);l.call(c)}}Ns(t,a,e,i)}else a=Py(n,t,e,i,r);return us(a)}$f=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=oi(t.pendingLanes);n!==0&&(Kl(t,n|1),Ue(t,le()),!($&6)&&(Pr=le()+500,wn()))}break;case 13:Vn(function(){var r=Ut(e,1);if(r!==null){var i=Pe();ft(r,e,1,i)}}),Cc(e,1)}};Yl=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Pe();ft(t,e,134217728,n)}Cc(e,134217728)}};Vf=function(e){if(e.tag===13){var t=fn(e),n=Ut(e,t);if(n!==null){var r=Pe();ft(n,e,t,r)}Cc(e,t)}};Hf=function(){return J};Gf=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};Ya=function(e,t,n){switch(t){case"input":if(Ba(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Es(r);if(!i)throw Error(_(90));kf(r),Ba(r,i)}}}break;case"textarea":Ef(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};Nf=bc;Of=Vn;var Ry={usingClientEntryPoint:!1,Events:[Wi,ar,Es,Pf,Rf,bc]},qr={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ny={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Df(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{bs=xo.inject(Ny),wt=xo}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ry;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ic(t))throw Error(_(200));return Iy(e,t,null,n)};He.createRoot=function(e,t){if(!Ic(e))throw Error(_(299));var n=!1,r="",i=hh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ec(e,1,!1,null,null,n,!1,r,i),e[Ft]=t.current,Ti(e.nodeType===8?e.parentNode:e),new Tc(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Df(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return Vn(e)};He.hydrate=function(e,t,n){if(!As(t))throw Error(_(200));return Ls(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!Ic(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=hh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ph(t,null,e,1,n??null,i,!1,o,a),e[Ft]=t.current,Ti(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Os(t)};He.render=function(e,t,n){if(!As(t))throw Error(_(200));return Ls(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!As(e))throw Error(_(40));return e._reactRootContainer?(Vn(function(){Ls(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};He.unstable_batchedUpdates=bc;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!As(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ls(e,t,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function gh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gh)}catch(e){console.error(e)}}gh(),gf.exports=He;var Oy=gf.exports,mh,dd=Oy;mh=dd.createRoot,dd.hydrateRoot;const kt="http://localhost:3001/api/v1",De={name:"CloudVault",logo:"☁"};async function Ay(){var n;const e=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");if(!e)return null;const t=localStorage.getItem("cv_refreshToken")?localStorage:sessionStorage;try{const r=await fetch(`${kt}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:e})});if(!r.ok)return null;const i=await r.json(),o=((n=i.data)==null?void 0:n.accessToken)||i.accessToken;return o?(t.setItem("cv_token",o),window.dispatchEvent(new CustomEvent("cv-token-refreshed",{detail:{token:o}})),o):null}catch{return null}}function jc(e){return new Error(`Cannot reach the server at ${kt}${e}. Make sure the backend is running (npm start in project root).`)}const lt=async(e,t={},n,r=!1)=>{const i={...t.headers||{}};n&&(i.Authorization=`Bearer ${n}`),t.body instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json");let o;try{o=await fetch(`${kt}${e}`,{...t,headers:i})}catch{throw jc(e)}if(o.status===401&&n&&!r){const c=await Ay();if(c)return lt(e,t,c,!0);throw new Error("Session expired. Please log in again.")}if(!o.ok){const c=await o.json().catch(()=>({error:"Unknown error"})),u=c.message||c.error||"",p=u.toLowerCase().includes("token")?"Something went wrong. Please try again.":u||`Request failed (${o.status})`;throw new Error(p)}if(!(o.headers.get("content-type")||"").includes("application/json"))return o;const l=await o.json();return l.success?l.data:l},Tn=(e,t)=>Array.isArray(e)?e:(e==null?void 0:e[t])||[];async function Pc(e,t,{onProgress:n,disposition:r="download"}={}){const i=r==="preview"?`/files/${e}/preview`:`/files/${e}/download`;let o;try{o=await fetch(`${kt}${i}`,{headers:{Authorization:`Bearer ${t}`}})}catch{throw jc(i)}if(!o.ok){const l=await o.json().catch(()=>({error:"Download failed"}));throw new Error(l.error||l.message||"Download failed")}const a=Number(o.headers.get("content-length"))||0;return Ly(o,a,n)}async function Ly(e,t,n){if(!e.body||!t){const a=await e.blob();return n==null||n(100),a}const r=e.body.getReader(),i=[];let o=0;for(;;){const{done:a,value:l}=await r.read();if(a)break;i.push(l),o+=l.length,n&&t>0&&n(Math.min(99,Math.round(o/t*100)))}return n==null||n(100),new Blob(i,{type:e.headers.get("content-type")||"application/octet-stream"})}function Dy(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function zy(e,t,n,r){return new Promise((i,o)=>{const a=new XMLHttpRequest;a.open("POST",`${kt}${e}`),a.setRequestHeader("Authorization",`Bearer ${n}`),a.upload.onprogress=l=>{l.lengthComputable&&r&&r(Math.round(l.loaded/l.total*100))},a.onload=()=>{try{const l=JSON.parse(a.responseText);a.status>=200&&a.status<300?i(l.success?l.data:l):o(new Error(l.message||l.error||"Upload failed"))}catch{a.status>=200&&a.status<300?i({}):o(new Error("Upload failed"))}},a.onerror=()=>o(jc(e)),a.send(t)})}const me=e=>{if(e===0)return"0 B";const t=1024,n=["B","KB","MB","GB"],r=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**r).toFixed(1)} ${n[r]}`},Wt=e=>{const t=Math.floor((Date.now()-new Date(e))/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`},Vi=(e="")=>e.startsWith("image/")?"🖼️":e==="application/pdf"?"📄":e.startsWith("video/")?"🎬":e.startsWith("audio/")?"🎵":e.includes("zip")||e.includes("archive")?"🗜️":e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")?"📝":"📁",My=["image/","video/","audio/"],Fy=new Set(["application/pdf","text/plain","text/markdown","application/json"]),vh=(e="")=>{const t=(e||"").toLowerCase();return Fy.has(t)?!0:My.some(n=>t.startsWith(n))},Uy=(e="")=>{const t=(e||"").toLowerCase();return t.startsWith("image/")?"image":t==="application/pdf"?"pdf":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("text/")||t==="application/json"?"text":null},fd=[{key:"all",label:"All",icon:"📋",test:()=>!0},{key:"images",label:"Images",icon:"🖼️",test:e=>e.startsWith("image/")},{key:"documents",label:"Docs",icon:"📄",test:e=>e.includes("pdf")||e.includes("text")||e.includes("document")||e.includes("sheet")||e.includes("presentation")},{key:"videos",label:"Videos",icon:"🎬",test:e=>e.startsWith("video/")},{key:"audio",label:"Audio",icon:"🎵",test:e=>e.startsWith("audio/")},{key:"archives",label:"Archives",icon:"🗜️",test:e=>e.includes("zip")||e.includes("archive")||e.includes("tar")||e.includes("rar")}],Mn=`
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
`,yh=[{id:"free",name:"Free",price:"₹0",period:"/mo",storage:"5 GB",features:["Standard uploads","Basic sharing","Web preview"]},{id:"pro",name:"Pro",price:"₹749",period:"/mo",storage:"100 GB",features:["Faster uploads","File version history","Priority support"],highlight:!0},{id:"premium",name:"Premium",price:"₹1,599",period:"/mo",storage:"1 TB",features:["Team sharing","Advanced analytics","Custom branding"]},{id:"team",name:"Team",price:"₹3,999",period:"/mo",storage:"2 TB",features:["Shared workspaces","Admin controls","SSO ready"]}],By=[{id:"50gb",label:"+50 GB",price:"₹399"},{id:"100gb",label:"+100 GB",price:"₹749"},{id:"500gb",label:"+500 GB",price:"₹2,499"},{id:"1tb",label:"+1 TB",price:"₹3,999"}],Wy=[{title:"Effortless syncing",desc:"Drag, drop, and organize files from one calm workspace."},{title:"Private sharing",desc:"Send secure links with clear permissions and expiration controls."},{title:"Fast previews",desc:"Open images, documents, and downloads without breaking your flow."}],$y=["Features","How it works","Pricing"];function Vy({onGetStarted:e,onLogin:t,onSignUp:n}){const[r,i]=v.useState({filesStored:0,activeUsers:0,storageUsed:0,storageCapacity:0xa0000000000});return v.useEffect(()=>{fetch(`${kt}/public/stats`).then(o=>o.json()).then(o=>{o.success&&o.data&&i(o.data)}).catch(()=>{})},[]),s.jsxs("div",{className:"marketing-shell",children:[s.jsx("style",{children:Mn}),s.jsxs("header",{className:"landing-header",children:[s.jsxs("button",{type:"button",className:"brand-lockup",onClick:e,children:[s.jsx("span",{className:"brand-mark",children:De.logo}),s.jsx("span",{children:De.name})]}),s.jsx("nav",{className:"landing-links","aria-label":"Primary",children:$y.map(o=>s.jsx("a",{href:`#${o.toLowerCase().replaceAll(" ","-")}`,children:o},o))}),s.jsxs("div",{className:"landing-nav",children:[s.jsx("button",{type:"button",className:"btn-ghost",onClick:t,children:"Log in"}),s.jsx("button",{type:"button",className:"btn-primary",onClick:n,children:"Get Started Free"})]})]}),s.jsxs("main",{children:[s.jsxs("section",{className:"hero-section",children:[s.jsx("div",{className:"hero-glow hero-glow-green"}),s.jsx("div",{className:"hero-glow hero-glow-blue"}),s.jsxs("div",{className:"hero-copy",children:[s.jsxs("div",{className:"eyebrow",children:[s.jsx("span",{})," Introducing ",De.name]}),s.jsxs("h1",{children:["The intelligent home for your ",s.jsx("span",{children:"digital life."})]}),s.jsx("p",{children:"Never lose a file again. Store, organize, and securely share your documents, photos, and projects from anywhere."}),s.jsxs("div",{className:"hero-actions",children:[s.jsx("button",{type:"button",className:"btn-primary btn-hero-dark",onClick:e,children:"Start for free"}),s.jsx("button",{type:"button",className:"btn-secondary btn-hero-light",onClick:t,children:"See how it works"})]}),s.jsx("div",{className:"hero-note",children:"No credit card required. 10GB free forever."})]}),s.jsx("div",{className:"dashboard-preview","aria-label":"CloudVault preview",children:s.jsxs("div",{className:"preview-panel",children:[s.jsxs("aside",{className:"preview-sidebar",children:[s.jsxs("div",{className:"preview-logo",children:[s.jsx("span",{className:"brand-mark small",children:De.logo}),s.jsx("strong",{children:"My Storage"})]}),["Recent","Starred","Shared","Trash"].map((o,a)=>s.jsx("div",{className:`preview-nav-item${a===0?" active":""}`,children:o},o)),s.jsxs("div",{className:"preview-usage",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Storage Usage"}),s.jsx("strong",{children:"4.5 GB / 10 GB"})]}),s.jsx("div",{className:"preview-bar",children:s.jsx("span",{})})]})]}),s.jsxs("section",{className:"preview-files",children:[s.jsxs("div",{className:"preview-topline",children:[s.jsx("h3",{children:"Recent Files"}),s.jsx("button",{type:"button",children:"Upload"})]}),[["Project Alpha","1.2 GB - Last edited 2h ago"],["Q3 Financials.xlsx","2.4 MB - Last edited 2h ago"],["Campaign Banner.png","4.1 MB - Last edited 2h ago"]].map(([o,a])=>s.jsxs("div",{className:"preview-file",children:[s.jsx("div",{className:"preview-file-icon"}),s.jsxs("div",{children:[s.jsx("h4",{children:o}),s.jsx("p",{children:a})]})]},o))]})]})})]}),s.jsxs("section",{className:"logo-strip",children:[s.jsx("p",{children:"Trusted by innovative teams worldwide"}),s.jsx("div",{children:["Acme Corp","GlobalTech","NEXUS","horizon","Vertex"].map(o=>s.jsx("span",{children:o},o))})]}),s.jsxs("section",{id:"features",className:"content-section split-section",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Why CloudVault?"}),s.jsx("h2",{children:"More than just storage. It is your central hub."})]}),s.jsx("p",{children:"In a world scattered with devices and apps, CloudVault brings everything together in a single, secure place for photos, documents, and creative projects."})]}),s.jsx("section",{id:"how-it-works",className:"content-section feature-grid",children:Wy.map(o=>s.jsxs("article",{className:"feature-card",children:[s.jsx("div",{className:"feature-dot"}),s.jsx("h3",{children:o.title}),s.jsx("p",{children:o.desc})]},o.title))}),s.jsxs("section",{className:"stats-band",children:[s.jsxs("div",{className:"stat-mini",children:[s.jsxs("strong",{children:[r.filesStored.toLocaleString(),"+"]}),s.jsx("span",{children:"Files stored"})]}),s.jsxs("div",{className:"stat-mini",children:[s.jsx("strong",{children:me(r.storageCapacity)}),s.jsx("span",{children:"Storage capacity"})]}),s.jsxs("div",{className:"stat-mini",children:[s.jsxs("strong",{children:[r.activeUsers.toLocaleString(),"+"]}),s.jsx("span",{children:"Active users"})]})]}),s.jsxs("section",{id:"pricing",className:"content-section pricing-section",children:[s.jsxs("div",{className:"section-center",children:[s.jsx("p",{className:"section-kicker",children:"Pricing"}),s.jsx("h2",{children:"Simple plans for clean storage."})]}),s.jsx("div",{className:"pricing-grid",children:yh.map(o=>s.jsxs("article",{className:`plan-card${o.highlight?" highlight":""}`,children:[s.jsx("h3",{children:o.name}),s.jsxs("div",{className:"plan-price",children:[o.price,s.jsx("span",{children:o.period})]}),s.jsxs("p",{children:[o.storage," storage"]}),s.jsxs("button",{type:"button",className:o.highlight?"btn-primary":"btn-secondary",onClick:e,children:["Choose ",o.name]})]},o.id))})]})]})]})}const Hy=()=>{};var pd={};/**
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
 */const xh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Gy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],l=e[n++],c=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},wh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,l=a?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,p=o>>2,h=(o&3)<<4|l>>4;let d=(l&15)<<2|u>>6,x=u&63;c||(x=64,a||(d=64)),r.push(n[p],n[h],n[d],n[x])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Gy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||l==null||u==null||h==null)throw new Ky;const d=o<<2|l>>4;if(r.push(d),u!==64){const x=l<<4&240|u>>2;if(r.push(x),h!==64){const b=u<<6&192|h;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ky extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yy=function(e){const t=xh(e);return wh.encodeByteArray(t,!0)},bh=function(e){return Yy(e).replace(/\./g,"")},Sh=function(e){try{return wh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Qy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jy=()=>Qy().__FIREBASE_DEFAULTS__,qy=()=>{if(typeof process>"u"||typeof pd>"u")return;const e=pd.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Xy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Sh(e[1]);return t&&JSON.parse(t)},Rc=()=>{try{return Hy()||Jy()||qy()||Xy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Zy=e=>{var t,n;return(n=(t=Rc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},kh=()=>{var e;return(e=Rc())===null||e===void 0?void 0:e.config},_h=e=>{var t;return(t=Rc())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class e0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ds(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function t0(e){return(await fetch(e,{credentials:"include"})).ok}const mi={};function n0(){const e={prod:[],emulator:[]};for(const t of Object.keys(mi))mi[t]?e.emulator.push(t):e.prod.push(t);return e}function r0(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let hd=!1;function i0(e,t){if(typeof window>"u"||typeof document>"u"||!Ds(window.location.host)||mi[e]===t||mi[e]||hd)return;mi[e]=t;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",o=n0().prod.length>0;function a(){const d=document.getElementById(r);d&&d.remove()}function l(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,x){d.setAttribute("width","24"),d.setAttribute("id",x),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function u(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{hd=!0,a()},d}function p(d,x){d.setAttribute("id",x),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function h(){const d=r0(r),x=n("text"),b=document.getElementById(x)||document.createElement("span"),S=n("learnmore"),O=document.getElementById(S)||document.createElement("a"),g=n("preprendIcon"),f=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const m=d.element;l(m),p(O,S);const w=u();c(f,g),m.append(f,b,O,w),document.body.appendChild(m)}o?(b.innerText="Preview backend disconnected.",f.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function o0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function s0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function a0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function l0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function c0(){const e=Re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function u0(){try{return typeof indexedDB=="object"}catch{return!1}}function d0(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const f0="FirebaseError";class bn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=f0,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?p0(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new bn(i,l,r)}}function p0(e,t){return e.replace(h0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const h0=/\{\$([^}]+)}/g;function g0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Rr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(gd(o)&&gd(a)){if(!Rr(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gd(e){return e!==null&&typeof e=="object"}/**
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
 */function Gi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function m0(e,t){const n=new v0(e,t);return n.subscribe.bind(n)}class v0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");y0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Sa),i.error===void 0&&(i.error=Sa),i.complete===void 0&&(i.complete=Sa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function y0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Sa(){}/**
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
 */function zr(e){return e&&e._delegate?e._delegate:e}class Nr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class x0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new e0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(b0(t))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Rn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rn){return this.instances.has(t)}getOptions(t=Rn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:w0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Rn){return this.component?this.component.multipleInstances?t:Rn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function w0(e){return e===Rn?void 0:e}function b0(e){return e.instantiationMode==="EAGER"}/**
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
 */class S0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new x0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(q||(q={}));const k0={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},_0=q.INFO,E0={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},C0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=E0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Eh{constructor(t){this.name=t,this._logLevel=_0,this._logHandler=C0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?k0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}const T0=(e,t)=>t.some(n=>e instanceof n);let md,vd;function I0(){return md||(md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function j0(){return vd||(vd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ch=new WeakMap,Tl=new WeakMap,Th=new WeakMap,ka=new WeakMap,Nc=new WeakMap;function P0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(hn(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Ch.set(n,e)}).catch(()=>{}),Nc.set(t,e),t}function R0(e){if(Tl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Tl.set(e,t)}let Il={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Tl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Th.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function N0(e){Il=e(Il)}function O0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(_a(this),t,...n);return Th.set(r,t.sort?t.sort():[t]),hn(r)}:j0().includes(e)?function(...t){return e.apply(_a(this),t),hn(Ch.get(this))}:function(...t){return hn(e.apply(_a(this),t))}}function A0(e){return typeof e=="function"?O0(e):(e instanceof IDBTransaction&&R0(e),T0(e,I0())?new Proxy(e,Il):e)}function hn(e){if(e instanceof IDBRequest)return P0(e);if(ka.has(e))return ka.get(e);const t=A0(e);return t!==e&&(ka.set(e,t),Nc.set(t,e)),t}const _a=e=>Nc.get(e);function L0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),l=hn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(hn(a.result),c.oldVersion,c.newVersion,hn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const D0=["get","getKey","getAll","getAllKeys","count"],z0=["put","add","delete","clear"],Ea=new Map;function yd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ea.get(t))return Ea.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=z0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||D0.includes(n)))return;const o=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Ea.set(t,o),o}N0(e=>({...e,get:(t,n,r)=>yd(t,n)||e.get(t,n,r),has:(t,n)=>!!yd(t,n)||e.has(t,n)}));/**
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
 */class M0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(F0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function F0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const jl="@firebase/app",xd="0.13.2";/**
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
 */const $t=new Eh("@firebase/app"),U0="@firebase/app-compat",B0="@firebase/analytics-compat",W0="@firebase/analytics",$0="@firebase/app-check-compat",V0="@firebase/app-check",H0="@firebase/auth",G0="@firebase/auth-compat",K0="@firebase/database",Y0="@firebase/data-connect",Q0="@firebase/database-compat",J0="@firebase/functions",q0="@firebase/functions-compat",X0="@firebase/installations",Z0="@firebase/installations-compat",e1="@firebase/messaging",t1="@firebase/messaging-compat",n1="@firebase/performance",r1="@firebase/performance-compat",i1="@firebase/remote-config",o1="@firebase/remote-config-compat",s1="@firebase/storage",a1="@firebase/storage-compat",l1="@firebase/firestore",c1="@firebase/ai",u1="@firebase/firestore-compat",d1="firebase",f1="11.10.0";/**
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
 */const Pl="[DEFAULT]",p1={[jl]:"fire-core",[U0]:"fire-core-compat",[W0]:"fire-analytics",[B0]:"fire-analytics-compat",[V0]:"fire-app-check",[$0]:"fire-app-check-compat",[H0]:"fire-auth",[G0]:"fire-auth-compat",[K0]:"fire-rtdb",[Y0]:"fire-data-connect",[Q0]:"fire-rtdb-compat",[J0]:"fire-fn",[q0]:"fire-fn-compat",[X0]:"fire-iid",[Z0]:"fire-iid-compat",[e1]:"fire-fcm",[t1]:"fire-fcm-compat",[n1]:"fire-perf",[r1]:"fire-perf-compat",[i1]:"fire-rc",[o1]:"fire-rc-compat",[s1]:"fire-gcs",[a1]:"fire-gcs-compat",[l1]:"fire-fst",[u1]:"fire-fst-compat",[c1]:"fire-vertex","fire-js":"fire-js",[d1]:"fire-js-all"};/**
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
 */const ds=new Map,h1=new Map,Rl=new Map;function wd(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Di(e){const t=e.name;if(Rl.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Rl.set(t,e);for(const n of ds.values())wd(n,e);for(const n of h1.values())wd(n,e);return!0}function Ih(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function xt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const g1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gn=new Hi("app","Firebase",g1);/**
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
 */class m1{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ki=f1;function jh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Pl,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw gn.create("bad-app-name",{appName:String(i)});if(n||(n=kh()),!n)throw gn.create("no-options");const o=ds.get(i);if(o){if(Rr(n,o.options)&&Rr(r,o.config))return o;throw gn.create("duplicate-app",{appName:i})}const a=new S0(i);for(const c of Rl.values())a.addComponent(c);const l=new m1(n,r,a);return ds.set(i,l),l}function v1(e=Pl){const t=ds.get(e);if(!t&&e===Pl&&kh())return jh();if(!t)throw gn.create("no-app",{appName:e});return t}function wr(e,t,n){var r;let i=(r=p1[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(l.join(" "));return}Di(new Nr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const y1="firebase-heartbeat-database",x1=1,zi="firebase-heartbeat-store";let Ca=null;function Ph(){return Ca||(Ca=L0(y1,x1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(zi)}catch(n){console.warn(n)}}}}).catch(e=>{throw gn.create("idb-open",{originalErrorMessage:e.message})})),Ca}async function w1(e){try{const n=(await Ph()).transaction(zi),r=await n.objectStore(zi).get(Rh(e));return await n.done,r}catch(t){if(t instanceof bn)$t.warn(t.message);else{const n=gn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(n.message)}}}async function bd(e,t){try{const r=(await Ph()).transaction(zi,"readwrite");await r.objectStore(zi).put(t,Rh(e)),await r.done}catch(n){if(n instanceof bn)$t.warn(n.message);else{const r=gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function Rh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const b1=1024,S1=30;class k1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new E1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Sd();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>S1){const a=C1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sd(),{heartbeatsToSend:r,unsentEntries:i}=_1(this._heartbeatsCache.heartbeats),o=bh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return $t.warn(n),""}}}function Sd(){return new Date().toISOString().substring(0,10)}function _1(e,t=b1){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),kd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class E1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return u0()?d0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await w1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function kd(e){return bh(JSON.stringify({version:2,heartbeats:e})).length}function C1(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function T1(e){Di(new Nr("platform-logger",t=>new M0(t),"PRIVATE")),Di(new Nr("heartbeat",t=>new k1(t),"PRIVATE")),wr(jl,xd,e),wr(jl,xd,"esm2017"),wr("fire-js","")}T1("");var I1="firebase",j1="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wr(I1,j1,"app");function Oc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Nh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const P1=Nh,Oh=new Hi("auth","Firebase",Nh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Eh("@firebase/auth");function R1(e,...t){fs.logLevel<=q.WARN&&fs.warn(`Auth (${Ki}): ${e}`,...t)}function Do(e,...t){fs.logLevel<=q.ERROR&&fs.error(`Auth (${Ki}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e,...t){throw Lc(e,...t)}function pt(e,...t){return Lc(e,...t)}function Ac(e,t,n){const r=Object.assign(Object.assign({},P1()),{[t]:n});return new Hi("auth","Firebase",r).create(t,{appName:e.name})}function Fn(e){return Ac(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function N1(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&_t(e,"argument-error"),Ac(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Oh.create(e,...t)}function L(e,t,...n){if(!e)throw Lc(t,...n)}function Lt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Do(t),new Error(t)}function Vt(e,t){e||Lt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function O1(){return _d()==="http:"||_d()==="https:"}function _d(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O1()||a0()||"connection"in navigator)?navigator.onLine:!0}function L1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Vt(n>t,"Short delay should be less than long delay!"),this.isMobile=o0()||l0()}get(){return A1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(e,t){Vt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],M1=new Yi(3e4,6e4);function zc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Mr(e,t,n,r,i={}){return Lh(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const l=Gi(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:c},o);return s0()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&Ds(e.emulatorConfig.host)&&(u.credentials="include"),Ah.fetch()(await Dh(e,e.config.apiHost,n,l),u)})}async function Lh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},D1),t);try{const i=new U1(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw wo(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw wo(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw wo(e,"user-disabled",a);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ac(e,p,u);_t(e,p)}}catch(i){if(i instanceof bn)throw i;_t(e,"network-request-failed",{message:String(i)})}}async function F1(e,t,n,r,i={}){const o=await Mr(e,t,n,r,i);return"mfaPendingCredential"in o&&_t(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function Dh(e,t,n,r){const i=`${t}${n}?${r}`,o=e,a=o.config.emulator?Dc(e.config,i):`${e.config.apiScheme}://${i}`;return z1.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class U1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),M1.get())})}}function wo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(e,t){return Mr(e,"POST","/v1/accounts:delete",t)}async function ps(e,t){return Mr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function W1(e,t=!1){const n=zr(e),r=await n.getIdToken(t),i=Mc(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:vi(Ta(i.auth_time)),issuedAtTime:vi(Ta(i.iat)),expirationTime:vi(Ta(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ta(e){return Number(e)*1e3}function Mc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Do("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sh(n);return i?JSON.parse(i):(Do("Failed to decode base64 JWT payload"),null)}catch(i){return Do("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ed(e){const t=Mc(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof bn&&$1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function $1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vi(this.lastLoginAt),this.creationTime=vi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Mi(e,ps(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?zh(o.providerUserInfo):[],l=G1(e.providerData,a),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(l!=null&&l.length),p=c?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ol(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,h)}async function H1(e){const t=zr(e);await hs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function G1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function zh(e){return e.map(t=>{var{providerId:n}=t,r=Oc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(e,t){const n=await Lh(e,{},async()=>{const r=Gi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=await Dh(e,i,"/v1/token",`key=${o}`),l=await e._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return e.emulatorConfig&&Ds(e.emulatorConfig.host)&&(c.credentials="include"),Ah.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Y1(e,t){return Mr(e,"POST","/v2/accounts:revokeToken",zc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ed(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){L(t.length!==0,"internal-error");const n=Ed(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await K1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new br;return r&&(L(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ut{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Oc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ol(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Mi(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return W1(this,t)}reload(){return H1(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ut(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await hs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(Fn(this.auth));const t=await this.getIdToken();return await Mi(this,B1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,l,c,u,p;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,x=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,b=(a=n.photoURL)!==null&&a!==void 0?a:void 0,S=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:m,emailVerified:w,isAnonymous:E,providerData:C,stsTokenManager:j}=n;L(m&&j,t,"internal-error");const I=br.fromJSON(this.name,j);L(typeof m=="string",t,"internal-error"),Qt(h,t.name),Qt(d,t.name),L(typeof w=="boolean",t,"internal-error"),L(typeof E=="boolean",t,"internal-error"),Qt(x,t.name),Qt(b,t.name),Qt(S,t.name),Qt(O,t.name),Qt(g,t.name),Qt(f,t.name);const V=new ut({uid:m,auth:t,email:d,emailVerified:w,displayName:h,isAnonymous:E,photoURL:b,phoneNumber:x,tenantId:S,stsTokenManager:I,createdAt:g,lastLoginAt:f});return C&&Array.isArray(C)&&(V.providerData=C.map(R=>Object.assign({},R))),O&&(V._redirectEventId=O),V}static async _fromIdTokenResponse(t,n,r=!1){const i=new br;i.updateFromServerResponse(n);const o=new ut({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await hs(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?zh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new br;l.updateFromIdToken(r);const c=new ut({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ol(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=new Map;function Dt(e){Vt(e instanceof Function,"Expected a class definition");let t=Cd.get(e);return t?(Vt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Cd.set(e,t),t)}/**
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
 */class Mh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Mh.type="NONE";const Td=Mh;/**
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
 */function zo(e,t,n){return`firebase:${e}:${t}:${n}`}class Sr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=zo(this.userKey,i.apiKey,o),this.fullPersistenceKey=zo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await ps(this.auth,{idToken:t}).catch(()=>{});return n?ut._fromGetAccountInfoResponse(this.auth,n,t):null}return ut._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Sr(Dt(Td),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Dt(Td);const a=zo(r,t.config.apiKey,t.name);let l=null;for(const u of n)try{const p=await u._get(a);if(p){let h;if(typeof p=="string"){const d=await ps(t,{idToken:p}).catch(()=>{});if(!d)break;h=await ut._fromGetAccountInfoResponse(t,d,p)}else h=ut._fromJSON(t,p);u!==o&&(l=h),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new Sr(o,t,r):(o=c[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new Sr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Wh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Fh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Vh(t))return"Blackberry";if(Hh(t))return"Webos";if(Uh(t))return"Safari";if((t.includes("chrome/")||Bh(t))&&!t.includes("edge/"))return"Chrome";if($h(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fh(e=Re()){return/firefox\//i.test(e)}function Uh(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Bh(e=Re()){return/crios\//i.test(e)}function Wh(e=Re()){return/iemobile/i.test(e)}function $h(e=Re()){return/android/i.test(e)}function Vh(e=Re()){return/blackberry/i.test(e)}function Hh(e=Re()){return/webos/i.test(e)}function Fc(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Q1(e=Re()){var t;return Fc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function J1(){return c0()&&document.documentMode===10}function Gh(e=Re()){return Fc(e)||$h(e)||Hh(e)||Vh(e)||/windows phone/i.test(e)||Wh(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(e,t=[]){let n;switch(e){case"Browser":n=Id(Re());break;case"Worker":n=`${Id(Re())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ki}/${r}`}/**
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
 */class q1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,l)=>{try{const c=t(o);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function X1(e,t={}){return Mr(e,"GET","/v2/passwordPolicy",zc(e,t))}/**
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
 */const Z1=6;class ex{constructor(t){var n,r,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Z1,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jd(this),this.idTokenSubscription=new jd(this),this.beforeStateQueue=new q1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await Sr.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ps(this,{idToken:t}),r=await ut._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(xt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await hs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=L1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(xt(this.app))return Promise.reject(Fn(this));const n=t?zr(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return xt(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await X1(this),n=new ex(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Hi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Y1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Dt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Sr.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Kh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&R1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zs(e){return zr(e)}class jd{constructor(t){this.auth=t,this.observer=null,this.addObserver=m0(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nx(e){Uc=e}function rx(e){return Uc.loadJS(e)}function ix(){return Uc.gapiScript}function ox(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(e,t){const n=Ih(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Rr(o,t??{}))return i;_t(i,"already-initialized")}return n.initialize({options:t})}function ax(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function lx(e,t,n){const r=zs(e);L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=Yh(t),{host:a,port:l}=cx(t),c=l===null?"":`:${l}`,u={url:`${o}//${a}${c}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(Rr(u,r.config.emulator)&&Rr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Ds(a)?(t0(`${o}//${a}${c}`),i0("Auth",!0)):ux()}function Yh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function cx(e){const t=Yh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Pd(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Pd(a)}}}function Pd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ux(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(t){return Lt("not implemented")}_linkToIdToken(t,n){return Lt("not implemented")}_getReauthenticationResolver(t){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(e,t){return F1(e,"POST","/v1/accounts:signInWithIdp",zc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="http://localhost";class Ht extends Qh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ht(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Oc(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ht(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return kr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,kr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,kr(t,n)}buildRequest(){const t={requestUri:dx,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Gi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fr extends Bc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class yi extends Fr{static credentialFromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;return L("providerId"in n&&"signInMethod"in n,"argument-error"),Ht._fromParams(n)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return L(t.idToken||t.accessToken,"argument-error"),Ht._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return yi.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return yi.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:a,providerId:l}=t;if(!r&&!i&&!n&&!o||!l)return null;try{return new yi(l)._credential({idToken:n,accessToken:r,nonce:a,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Fr{constructor(){super("facebook.com")}static credential(t){return Ht._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return en.credential(t.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Fr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ht._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Fr{constructor(){super("github.com")}static credential(t){return Ht._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Nt.credential(t.oauthAccessToken)}catch{return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com";Nt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Fr{constructor(){super("twitter.com")}static credential(t,n){return Ht._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await ut._fromIdTokenResponse(t,r,i),a=Rd(r);return new Or({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Rd(r);return new Or({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Rd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends bn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gs.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new gs(t,n,r,i)}}function Jh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?gs._fromErrorAndOperation(e,o,t,r):o})}async function fx(e,t,n=!1){const r=await Mi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Or._forOperation(e,"link",r)}/**
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
 */async function px(e,t,n=!1){const{auth:r}=e;if(xt(r.app))return Promise.reject(Fn(r));const i="reauthenticate";try{const o=await Mi(e,Jh(r,i,t,e),n);L(o.idToken,r,"internal-error");const a=Mc(o.idToken);L(a,r,"internal-error");const{sub:l}=a;return L(e.uid===l,r,"user-mismatch"),Or._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hx(e,t,n=!1){if(xt(e.app))return Promise.reject(Fn(e));const r="signIn",i=await Jh(e,r,t),o=await Or._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function gx(e,t,n,r){return zr(e).onIdTokenChanged(t,n,r)}function mx(e,t,n){return zr(e).beforeAuthStateChanged(t,n)}const ms="__sak";/**
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
 */class qh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ms,"1"),this.storage.removeItem(ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=1e3,yx=10;class Xh extends qh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);J1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,yx):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},vx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Xh.type="LOCAL";const xx=Xh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh extends qh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Zh.type="SESSION";const eg=Zh;/**
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
 */function wx(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ms{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ms(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async u=>u(n.origin,o)),c=await wx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ms.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class bx{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,c)=>{const u=Wc("",20);i.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(d.data.response);break;default:clearTimeout(p),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function Sx(e){St().location.href=e}/**
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
 */function tg(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function kx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _x(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Ex(){return tg()?self:null}/**
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
 */const ng="firebaseLocalStorageDb",Cx=1,vs="firebaseLocalStorage",rg="fbase_key";class Qi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fs(e,t){return e.transaction([vs],t?"readwrite":"readonly").objectStore(vs)}function Tx(){const e=indexedDB.deleteDatabase(ng);return new Qi(e).toPromise()}function Al(){const e=indexedDB.open(ng,Cx);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(vs,{keyPath:rg})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(vs)?t(r):(r.close(),await Tx(),t(await Al()))})})}async function Nd(e,t,n){const r=Fs(e,!0).put({[rg]:t,value:n});return new Qi(r).toPromise()}async function Ix(e,t){const n=Fs(e,!1).get(t),r=await new Qi(n).toPromise();return r===void 0?null:r.value}function Od(e,t){const n=Fs(e,!0).delete(t);return new Qi(n).toPromise()}const jx=800,Px=3;class ig{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Al(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Px)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ms._getInstance(Ex()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await kx(),!this.activeServiceWorker)return;this.sender=new bx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||_x()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Al();return await Nd(t,ms,"1"),await Od(t,ms),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Ix(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Od(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Fs(i,!1).getAll();return new Qi(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ig.type="LOCAL";const Rx=ig;new Yi(3e4,6e4);/**
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
 */function og(e,t){return t?Dt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class $c extends Qh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return kr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return kr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return kr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Nx(e){return hx(e.auth,new $c(e),e.bypassAuthState)}function Ox(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),px(n,new $c(e),e.bypassAuthState)}async function Ax(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),fx(n,new $c(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Nx;case"linkViaPopup":case"linkViaRedirect":return Ax;case"reauthViaPopup":case"reauthViaRedirect":return Ox;default:_t(this.auth,"internal-error")}}resolve(t){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=new Yi(2e3,1e4);async function Dx(e,t,n){if(xt(e.app))return Promise.reject(pt(e,"operation-not-supported-in-this-environment"));const r=zs(e);N1(e,t,Bc);const i=og(r,n);return new Ln(r,"signInViaPopup",t,i).executeNotNull()}class Ln extends sg{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const t=Wc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Lx.get())};t()}}Ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx="pendingRedirect",Mo=new Map;class Mx extends sg{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Mo.get(this.auth._key());if(!t){try{const r=await Fx(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Mo.set(this.auth._key(),t)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fx(e,t){const n=Wx(t),r=Bx(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ux(e,t){Mo.set(e._key(),t)}function Bx(e){return Dt(e._redirectPersistence)}function Wx(e){return zo(zx,e.config.apiKey,e.name)}async function $x(e,t,n=!1){if(xt(e.app))return Promise.reject(Fn(e));const r=zs(e),i=og(r,t),a=await new Mx(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx=10*60*1e3;class Hx{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Gx(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!ag(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Vx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ad(t))}saveEventToCache(t){this.cachedEventUids.add(Ad(t)),this.lastProcessedEventTime=Date.now()}}function Ad(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ag({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Gx(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ag(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(e,t={}){return Mr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qx=/^https?/;async function Jx(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Kx(e);for(const n of t)try{if(qx(n))return}catch{}_t(e,"unauthorized-domain")}function qx(e){const t=Nl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Qx.test(n))return!1;if(Yx.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Xx=new Yi(3e4,6e4);function Ld(){const e=St().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Zx(e){return new Promise((t,n)=>{var r,i,o;function a(){Ld(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ld(),n(pt(e,"network-request-failed"))},timeout:Xx.get()})}if(!((i=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=St().gapi)===null||o===void 0)&&o.load)a();else{const l=ox("iframefcb");return St()[l]=()=>{gapi.load?a():n(pt(e,"network-request-failed"))},rx(`${ix()}?onload=${l}`).catch(c=>n(c))}}).catch(t=>{throw Fo=null,t})}let Fo=null;function ew(e){return Fo=Fo||Zx(e),Fo}/**
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
 */const tw=new Yi(5e3,15e3),nw="__/auth/iframe",rw="emulator/auth/iframe",iw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ow=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sw(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Dc(t,rw):`https://${e.config.authDomain}/${nw}`,r={apiKey:t.apiKey,appName:e.name,v:Ki},i=ow.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Gi(r).slice(1)}`}async function aw(e){const t=await ew(e),n=St().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:sw(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iw,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=pt(e,"network-request-failed"),l=St().setTimeout(()=>{o(a)},tw.get());function c(){St().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{o(a)})}))}/**
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
 */const lw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cw=500,uw=600,dw="_blank",fw="http://localhost";class Dd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pw(e,t,n,r=cw,i=uw){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},lw),{width:r.toString(),height:i.toString(),top:o,left:a}),u=Re().toLowerCase();n&&(l=Bh(u)?dw:n),Fh(u)&&(t=t||fw,c.scrollbars="yes");const p=Object.entries(c).reduce((d,[x,b])=>`${d}${x}=${b},`,"");if(Q1(u)&&l!=="_self")return hw(t||"",l),new Dd(null);const h=window.open(t||"",l,p);L(h,e,"popup-blocked");try{h.focus()}catch{}return new Dd(h)}function hw(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gw="__/auth/handler",mw="emulator/auth/handler",vw=encodeURIComponent("fac");async function zd(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ki,eventId:i};if(t instanceof Bc){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",g0(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[p,h]of Object.entries({}))a[p]=h}if(t instanceof Fr){const p=t.getScopes().filter(h=>h!=="");p.length>0&&(a.scopes=p.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await e._getAppCheckToken(),u=c?`#${vw}=${encodeURIComponent(c)}`:"";return`${yw(e)}?${Gi(l).slice(1)}${u}`}function yw({config:e}){return e.emulator?Dc(e,mw):`https://${e.authDomain}/${gw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="webStorageSupport";class xw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eg,this._completeRedirectFn=$x,this._overrideRedirectResult=Ux}async _openPopup(t,n,r,i){var o;Vt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await zd(t,n,r,Nl(),i);return pw(t,a,Wc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await zd(t,n,r,Nl(),i);return Sx(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await aw(t),r=new Hx(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ia,{type:Ia},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ia];a!==void 0&&n(!!a),_t(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jx(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gh()||Uh()||Fc()}}const ww=xw;var Md="@firebase/auth",Fd="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kw(e){Di(new Nr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kh(e)},u=new tx(r,i,o,c);return ax(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Di(new Nr("auth-internal",t=>{const n=zs(t.getProvider("auth").getImmediate());return(r=>new bw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wr(Md,Fd,Sw(e)),wr(Md,Fd,"esm2017")}/**
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
 */const _w=5*60,Ew=_h("authIdTokenMaxAge")||_w;let Ud=null;const Cw=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ew)return;const i=n==null?void 0:n.token;Ud!==i&&(Ud=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tw(e=v1()){const t=Ih(e,"auth");if(t.isInitialized())return t.getImmediate();const n=sx(e,{popupRedirectResolver:ww,persistence:[Rx,xx,eg]}),r=_h("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Cw(o.toString());mx(n,a,()=>a(n.currentUser)),gx(n,l=>a(l))}}const i=Zy("auth");return i&&lx(n,`http://${i}`),n}function Iw(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}nx({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=pt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Iw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kw("Browser");const lg={apiKey:"AIzaSyCNsYDBSfYMJUxqbkC3Cb_w6CYGtW4Xf20",authDomain:"cloudvault-58446.firebaseapp.com",projectId:"cloudvault-58446",storageBucket:"cloudvault-58446.firebasestorage.app",messagingSenderId:"378535306521",appId:"1:378535306521:web:2e5fe57db925753d0f5188"},jw=["google","github","microsoft"];let ja=null,Bd=null;function Pw(){return ys()?(ja||(ja=jh(lg),Bd=Tw(ja)),Bd):null}function ys(){return!0}function Rw(){const e=Object.entries(lg).filter(([,t])=>!t).map(([t])=>t);return{configured:ys(),providers:jw.map(t=>({id:t,configured:ys()})),missingEnv:e}}async function Nw(e){const t=Pw();if(!t)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env variables.");const r={google:new Rt,github:new Nt,microsoft:new yi("microsoft.com")}[e];if(!r)throw new Error("Unknown provider");const i=await Dx(t,r),o=await i.user.getIdToken(),a=await fetch(`${kt}/auth/firebase`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:o,email:i.user.email,fullName:i.user.displayName,avatarUrl:i.user.photoURL,provider:e})}),l=await a.json();if(!a.ok)throw new Error(l.error||l.message||"Firebase login failed");return l.success?l.data:l}function Ow({onVerified:e,onError:t,onExpire:n,theme:r="auto",size:i="normal"}){const o=v.useRef(null),[a,l]=v.useState(!1),[c,u]=v.useState(!0),[p,h]=v.useState(null);v.useEffect(()=>{if(window.turnstile)l(!0),u(!1);else{const x=document.createElement("script");x.src="https://challenges.cloudflare.com/turnstile/v0/api.js",x.async=!0,x.defer=!0,x.onload=()=>{l(!0),u(!1),console.log("TURNSTILE: Script loaded")},x.onerror=()=>{h("Failed to load Turnstile"),u(!1),t==null||t("Failed to load Turnstile")},document.head.appendChild(x)}return()=>{if(o.current&&window.turnstile)try{window.turnstile.remove(o.current)}catch(x){console.error("TURNSTILE: Error removing widget:",x)}}},[]),v.useEffect(()=>{if(a&&o.current&&window.turnstile){const x="Turnstile site key not configured";h(x),t==null||t(x),u(!1);return}},[a,r,i,e,t,n]);const d=()=>{if(o.current&&window.turnstile)try{window.turnstile.reset(o.current),h(null)}catch(x){console.error("TURNSTILE: Error resetting widget:",x)}};return v.useEffect(()=>{o.current&&(o.current.reset=d)},[]),c?s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",background:"var(--bg-secondary)",borderRadius:"var(--radius)",border:"1px solid var(--border)"},children:s.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid var(--border)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})}):p?s.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"var(--radius)",border:"1px solid var(--danger)",color:"var(--danger)",fontSize:"13px",textAlign:"center"},children:[p,s.jsx("button",{type:"button",onClick:d,style:{marginTop:"8px",padding:"6px 12px",background:"var(--danger)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px"},children:"Retry"})]}):s.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",minHeight:i==="compact"?140:70,overflow:"hidden"},children:s.jsx("div",{ref:o})})}const In=(e="")=>{const t=e.toLowerCase();return t.includes("failed to fetch")||t.includes("cannot reach")||t.includes("networkerror")?"Unable to reach CloudVault. Please check your connection.":t.includes("firebase")||t.includes("oauth")||t.includes("access token")?"Social login failed. Please try again.":e||"Something went wrong. Please try again."},Pa=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),Wd=e=>e.length>=8&&/[A-Z]/.test(e)&&/[a-z]/.test(e)&&/\d/.test(e);function Aw({size:e=20}){return s.jsx("span",{style:{display:"inline-block",width:e,height:e,border:"2.5px solid rgba(255,255,255,0.25)",borderTopColor:"#fff",borderRadius:"50%",animation:"cv-spin 0.7s linear infinite"}})}function bo({label:e,type:t="text",value:n,onChange:r,placeholder:i,autoFocus:o,error:a}){const[l,c]=v.useState(!1),u=n&&n.length>0;return s.jsxs("div",{style:{position:"relative",marginBottom:4},children:[s.jsx("label",{style:{position:"absolute",left:16,top:l||u?8:"50%",transform:l||u?"translateY(0) scale(0.82)":"translateY(-50%)",transformOrigin:"left top",fontSize:l||u?11:14,fontWeight:600,color:l?"var(--cv-accent)":a?"var(--cv-danger)":"var(--cv-text-muted)",transition:"all 0.18s cubic-bezier(0.4,0,0.2,1)",pointerEvents:"none",zIndex:1,letterSpacing:l||u?"0.04em":"0",textTransform:l||u?"uppercase":"none"},children:e}),s.jsx("input",{type:t,value:n,onChange:r,onFocus:()=>c(!0),onBlur:()=>c(!1),autoFocus:o,placeholder:l?i:"",style:{width:"100%",padding:"28px 16px 10px",background:"var(--cv-bg-card)",border:`1.5px solid ${a?"var(--cv-danger)":l?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:"var(--cv-radius-lg)",color:"var(--cv-text)",fontSize:15,outline:"none",transition:"border-color 0.18s ease, box-shadow 0.18s ease",boxShadow:l?`0 0 0 3px ${a?"rgba(239,68,68,0.12)":"rgba(99,102,241,0.12)"}`:"none"}}),a&&s.jsx("div",{style:{fontSize:12,color:"var(--cv-danger)",marginTop:4,paddingLeft:4,fontWeight:500},children:a})]})}function Lw({value:e,onChange:t}){const n=[v.useRef(),v.useRef(),v.useRef(),v.useRef(),v.useRef(),v.useRef()],r=(e+"      ").slice(0,6).split(""),i=(a,l)=>{var c,u;if(l.key==="Backspace"){if(r[a]!==" "){const p=r.map((h,d)=>d===a?" ":h).join("").trimEnd();t(p)}else if(a>0){(c=n[a-1].current)==null||c.focus();const p=r.map((h,d)=>d===a-1?" ":h).join("").trimEnd();t(p)}}else if(l.key>="0"&&l.key<="9"){l.preventDefault();const p=r.map((h,d)=>d===a?l.key:h).join("").replace(/ /g,"");t(p.slice(0,6)),a<5&&((u=n[a+1].current)==null||u.focus())}},o=a=>{var c;const l=a.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);l&&(t(l),(c=n[Math.min(l.length,5)].current)==null||c.focus())};return s.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",margin:"8px 0"},children:n.map((a,l)=>{var c,u,p,h;return s.jsx("input",{ref:a,type:"text",inputMode:"numeric",maxLength:1,value:((c=r[l])==null?void 0:c.trim())||"",onKeyDown:d=>i(l,d),onPaste:o,onChange:()=>{},style:{width:52,height:60,textAlign:"center",fontSize:24,fontWeight:800,background:"var(--cv-bg-card)",border:`2px solid ${(u=r[l])!=null&&u.trim()?"var(--cv-accent)":"var(--cv-border)"}`,borderRadius:14,color:"var(--cv-text)",outline:"none",transition:"border-color 0.18s ease, transform 0.1s ease",transform:(p=r[l])!=null&&p.trim()?"scale(1.05)":"scale(1)",boxShadow:(h=r[l])!=null&&h.trim()?"0 0 0 3px rgba(99,102,241,0.15)":"none"}},l)})})}function Dw({label:e,mark:t,onClick:n,disabled:r}){const[i,o]=v.useState(!1);return s.jsxs("button",{type:"button",onClick:n,disabled:r,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,width:"100%",padding:"12px 16px",background:i?"var(--cv-surface-raised)":"var(--cv-bg-card)",border:"1.5px solid var(--cv-border)",borderRadius:"var(--cv-radius-lg)",cursor:r?"not-allowed":"pointer",color:"var(--cv-text)",fontSize:14,fontWeight:600,transition:"all 0.15s ease",opacity:r?.5:1},children:[s.jsx("span",{style:{width:24,height:24,borderRadius:6,background:"var(--cv-surface-raised)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:900,color:"var(--cv-text-secondary)"},children:t}),"Continue with ",e]})}function zw({password:e}){if(!e)return null;const t=[{label:"8+ chars",ok:e.length>=8},{label:"Uppercase",ok:/[A-Z]/.test(e)},{label:"Lowercase",ok:/[a-z]/.test(e)},{label:"Number",ok:/\d/.test(e)}],n=t.filter(i=>i.ok).length,r=["var(--cv-danger)","var(--cv-danger)","#f59e0b","#10b981"];return s.jsxs("div",{style:{marginTop:6},children:[s.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:[0,1,2,3].map(i=>s.jsx("div",{style:{flex:1,height:3,borderRadius:99,background:i<n?r[n-1]:"var(--cv-border)",transition:"background 0.3s ease"}},i))}),s.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:t.map(i=>s.jsxs("span",{style:{fontSize:11,color:i.ok?"#10b981":"var(--cv-text-muted)",fontWeight:500},children:[i.ok?"✓":"○"," ",i.label]},i.label))})]})}const A={LOGIN:"login",REGISTER:"register",FORGOT:"forgot",VERIFY_OTP:"verify_otp",RESET_PASSWORD:"reset_password"};function Mw({onAuth:e,onBack:t,onNeedsVerification:n,initialMode:r="login"}){const[i,o]=v.useState(r==="login"?A.LOGIN:A.REGISTER),[a,l]=v.useState(!1),[c,u]=v.useState(""),[p,h]=v.useState(""),[d,x]=v.useState("forward"),[b,S]=v.useState(""),[O,g]=v.useState(""),[f,m]=v.useState(""),[w,E]=v.useState(""),[C,j]=v.useState(""),[I,V]=v.useState(""),[R,pe]=v.useState(!0),[he,be]=v.useState(!1),[gt,Sn]=v.useState(!1),[Ae,Ke]=v.useState(0),[P,D]=v.useState(null),[z,Y]=v.useState(!1),[ne,Ye]=v.useState(0),ce=!1,Et=ys();Rw();const[Se,ae]=v.useState({});v.useEffect(()=>{if(Ae<=0)return;const k=setTimeout(()=>Ke(G=>G-1),1e3);return()=>clearTimeout(k)},[Ae]);const Ct=k=>{x("forward"),u(""),h(""),ae({}),o(k)},Ur=()=>{x("back"),u(""),h(""),ae({}),i===A.REGISTER||i===A.FORGOT?o(A.LOGIN):i===A.VERIFY_OTP?o(A.FORGOT):i===A.RESET_PASSWORD?o(A.VERIFY_OTP):t==null||t()},Te=()=>{D(null),Y(!1),Ye(k=>k+1)},Ji=async()=>{var G,Tt;const k={};if(Pa(b)||(k.email="Enter a valid email address"),O||(k.password="Password is required"),Object.keys(k).length){ae(k);return}if(ce&&!z){u("Please complete the security check");return}l(!0),u("");try{const Q=await lt("/auth/login",{method:"POST",body:JSON.stringify({email:b,password:O,rememberMe:R,...ce&&{turnstileToken:P}})});if(!(Q!=null&&Q.accessToken))throw new Error("Login failed. Please try again.");const En=R?localStorage:sessionStorage;En.setItem("cv_token",Q.accessToken),Q.refreshToken&&En.setItem("cv_refreshToken",Q.refreshToken),En.setItem("cv_user",((G=Q.user)==null?void 0:G.fullName)||b),e(Q.accessToken,Q.refreshToken,((Tt=Q.user)==null?void 0:Tt.fullName)||b,Q.user,R)}catch(Q){u(In(Q.message)),Te()}l(!1)},Kt=async()=>{const k={};if((!w||w.trim().length<2)&&(k.fullName="Full name must be at least 2 characters"),Pa(b)||(k.email="Enter a valid email address"),Wd(O)||(k.password="Password must be 8+ chars with uppercase, lowercase, and number"),O!==f&&(k.confirmPassword="Passwords do not match"),Object.keys(k).length){ae(k);return}if(ce&&!z){u("Please complete the security check");return}l(!0),u("");try{await lt("/auth/register",{method:"POST",body:JSON.stringify({email:b,password:O,fullName:w,...ce&&{turnstileToken:P}})}),h("Account created! Check your email to verify your account, then sign in."),Ct(A.LOGIN)}catch(G){u(In(G.message)),Te()}l(!1)},Us=async()=>{if(!Pa(b)){ae({email:"Enter a valid email address"});return}if(ce&&!z){u("Please complete the security check");return}l(!0),u("");try{await lt("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:b,...ce&&{turnstileToken:P}})}),Ke(60),Ct(A.VERIFY_OTP),h("A 6-digit OTP has been sent to your email.")}catch(k){u(In(k.message)),Te()}l(!1)},kn=async()=>{if(!(Ae>0)){l(!0),u("");try{await lt("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:b})}),Ke(60),h("A new OTP has been sent.")}catch(k){u(In(k.message))}l(!1)}},Bs=async()=>{if(C.length!==6){u("Enter the 6-digit code from your email");return}l(!0),u("");try{const k=await lt("/auth/verify-otp",{method:"POST",body:JSON.stringify({email:b,otp:C})});V(k.resetToken),Ct(A.RESET_PASSWORD)}catch(k){u(In(k.message)),j("")}l(!1)},_n=async()=>{const k={};if(Wd(O)||(k.password="Password must be 8+ chars with uppercase, lowercase, and number"),O!==f&&(k.confirmPassword="Passwords do not match"),Object.keys(k).length){ae(k);return}l(!0),u("");try{await lt("/auth/reset-password",{method:"POST",body:JSON.stringify({token:I,newPassword:O})}),h("Password reset successfully! Please sign in."),g(""),m(""),Ct(A.LOGIN)}catch(G){u(In(G.message))}l(!1)},rt=async k=>{var G,Tt;if(!Et){u("Social login is not available. Please use email and password.");return}l(!0),u("");try{const Q=await Nw(k);if(!(Q!=null&&Q.accessToken))throw new Error("Social login failed.");localStorage.setItem("cv_token",Q.accessToken),Q.refreshToken&&localStorage.setItem("cv_refreshToken",Q.refreshToken),localStorage.setItem("cv_user",((G=Q.user)==null?void 0:G.fullName)||b),e(Q.accessToken,Q.refreshToken,((Tt=Q.user)==null?void 0:Tt.fullName)||b,Q.user,!0)}catch(Q){u(In(Q.message))}l(!1)},Kn={[A.LOGIN]:{title:"Welcome back",sub:`Sign in to ${De.name}`},[A.REGISTER]:{title:"Create account",sub:"Start your CloudVault journey"},[A.FORGOT]:{title:"Forgot password?",sub:"We'll send a code to your email"},[A.VERIFY_OTP]:{title:"Enter your code",sub:`Sent to ${b||"your email"}`},[A.RESET_PASSWORD]:{title:"New password",sub:"Choose a strong password"}},Qe=!a&&(!ce||z||i===A.VERIFY_OTP||i===A.RESET_PASSWORD),Br=()=>{i===A.LOGIN?Ji():i===A.REGISTER?Kt():i===A.FORGOT?Us():i===A.VERIFY_OTP?Bs():i===A.RESET_PASSWORD&&_n()},Yn={[A.LOGIN]:"Sign in",[A.REGISTER]:"Create account",[A.FORGOT]:"Send code",[A.VERIFY_OTP]:"Verify code",[A.RESET_PASSWORD]:"Reset password"}[i];return s.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.06) 0%, transparent 50%), var(--bg-primary)",padding:"20px 16px",fontFamily:"var(--font)"},children:[s.jsx("style",{children:Mn}),s.jsx("style",{children:`
        @keyframes cv-spin { to { transform: rotate(360deg); } }
        @keyframes cv-slide-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes cv-fade { from { opacity: 0; } to { opacity: 1; } }
        .cv-auth-card { animation: cv-slide-in 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        .cv-auth-step { animation: cv-fade 0.22s ease; }
      `}),s.jsxs("div",{className:"cv-auth-card",style:{width:"100%",maxWidth:440,background:"var(--bg-card)",borderRadius:24,border:"1px solid var(--border)",boxShadow:"0 32px 80px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",overflow:"hidden",position:"relative"},children:[s.jsx("div",{style:{height:4,background:"linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)",position:"absolute",top:0,left:0,right:0}}),s.jsxs("div",{style:{padding:"40px 36px 36px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:32},children:[s.jsx("div",{style:{width:40,height:40,borderRadius:12,background:"linear-gradient(135deg, #6366f1, #8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,color:"#fff",boxShadow:"0 4px 12px rgba(99,102,241,0.3)"},children:De.logo}),s.jsx("div",{style:{fontSize:17,fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em"},children:De.name})]}),i!==A.LOGIN&&s.jsx("button",{type:"button",onClick:Ur,style:{display:"flex",alignItems:"center",gap:6,marginBottom:24,background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,padding:"4px 0",transition:"color 0.15s"},onMouseEnter:k=>k.currentTarget.style.color="var(--text)",onMouseLeave:k=>k.currentTarget.style.color="var(--text-muted)",children:"← Back"}),s.jsxs("div",{className:"cv-auth-step",style:{marginBottom:28},children:[s.jsx("h1",{style:{fontSize:26,fontWeight:800,color:"var(--text)",letterSpacing:"-0.03em",margin:"0 0 4px"},children:Kn[i].title}),s.jsx("p",{style:{fontSize:14,color:"var(--text-muted)",margin:0,fontWeight:500},children:Kn[i].sub})]}),(i===A.LOGIN||i===A.REGISTER)&&s.jsx("div",{style:{display:"flex",gap:4,background:"var(--surface-raised)",borderRadius:14,padding:4,marginBottom:24,border:"1px solid var(--border)"},children:[A.LOGIN,A.REGISTER].map(k=>s.jsx("button",{type:"button",onClick:()=>Ct(k),style:{flex:1,padding:"9px 12px",borderRadius:10,border:"none",background:i===k?"var(--bg-card)":"transparent",color:i===k?"var(--text)":"var(--text-muted)",fontSize:14,fontWeight:i===k?700:500,cursor:"pointer",boxShadow:i===k?"0 2px 8px rgba(0,0,0,0.08)":"none",transition:"all 0.18s ease"},children:k===A.LOGIN?"Sign In":"Sign Up"},k))}),s.jsxs("div",{className:"cv-auth-step",style:{display:"flex",flexDirection:"column",gap:14},children:[i===A.REGISTER&&s.jsx(bo,{label:"Full Name",value:w,onChange:k=>{E(k.target.value),ae(G=>({...G,fullName:""}))},placeholder:"Jane Smith",autoFocus:!0,error:Se.fullName}),[A.LOGIN,A.REGISTER,A.FORGOT].includes(i)&&s.jsx(bo,{label:"Email Address",type:"email",value:b,onChange:k=>{S(k.target.value),ae(G=>({...G,email:""}))},placeholder:"you@example.com",autoFocus:i===A.LOGIN||i===A.FORGOT,error:Se.email}),[A.LOGIN,A.REGISTER,A.RESET_PASSWORD].includes(i)&&s.jsxs("div",{children:[s.jsxs("div",{style:{position:"relative"},children:[s.jsx(bo,{label:"Password",type:he?"text":"password",value:O,onChange:k=>{g(k.target.value),ae(G=>({...G,password:""}))},placeholder:i===A.LOGIN?"Your password":"Min 8 chars, A-Z, 0-9",autoFocus:i===A.RESET_PASSWORD,error:Se.password}),s.jsx("button",{type:"button",onClick:()=>be(k=>!k),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:Se.password?-10:0},children:he?"Hide":"Show"})]}),(i===A.REGISTER||i===A.RESET_PASSWORD)&&s.jsx(zw,{password:O})]}),[A.REGISTER,A.RESET_PASSWORD].includes(i)&&s.jsxs("div",{style:{position:"relative"},children:[s.jsx(bo,{label:"Confirm Password",type:gt?"text":"password",value:f,onChange:k=>{m(k.target.value),ae(G=>({...G,confirmPassword:""}))},placeholder:"Repeat your password",error:Se.confirmPassword}),s.jsx("button",{type:"button",onClick:()=>Sn(k=>!k),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:600,marginTop:Se.confirmPassword?-10:0},children:gt?"Hide":"Show"})]}),i===A.VERIFY_OTP&&s.jsxs("div",{children:[s.jsx(Lw,{value:C,onChange:j}),s.jsxs("div",{style:{textAlign:"center",marginTop:12},children:[s.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:["Didn't get the code?"," "]}),s.jsx("button",{type:"button",onClick:kn,disabled:Ae>0||a,style:{background:"none",border:"none",cursor:Ae>0?"default":"pointer",color:Ae>0?"var(--text-muted)":"var(--accent-blue)",fontSize:13,fontWeight:600},children:Ae>0?`Resend in ${Ae}s`:"Resend"})]})]}),i===A.LOGIN&&s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},children:[s.jsx("input",{type:"checkbox",checked:R,onChange:k=>pe(k.target.checked),style:{width:16,height:16,accentColor:"var(--accent-blue)"}}),s.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:500},children:"Remember me"})]}),s.jsx("button",{type:"button",onClick:()=>Ct(A.FORGOT),style:{background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:13,fontWeight:600},children:"Forgot password?"})]})]}),c&&s.jsxs("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:12,color:"#ef4444",fontSize:13,fontWeight:500,lineHeight:1.5},children:[c,c.includes("verify your email")&&s.jsx("button",{type:"button",onClick:async()=>{try{await lt("/auth/resend-verification",{method:"POST",body:JSON.stringify({email:b})}),h("Verification email resent. Check your inbox."),u("")}catch{}},style:{display:"block",marginTop:8,background:"none",border:"none",cursor:"pointer",color:"var(--accent-blue)",fontSize:12,fontWeight:600},children:"Resend verification email →"})]}),p&&s.jsx("div",{style:{marginTop:16,padding:"12px 14px",background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:12,color:"#10b981",fontSize:13,fontWeight:500,lineHeight:1.5},children:p}),ce&&[A.LOGIN,A.REGISTER,A.FORGOT].includes(i)&&s.jsx("div",{style:{marginTop:16},children:s.jsx(Ow,{onVerified:k=>{D(k),Y(!0)},onError:()=>{u("Security check failed. Please refresh."),Y(!1)},onExpire:()=>{D(null),Y(!1)}},ne)}),s.jsx("button",{type:"button",onClick:Br,disabled:!Qe,style:{width:"100%",marginTop:20,padding:"14px 20px",background:Qe?"linear-gradient(135deg, #6366f1, #8b5cf6)":"var(--surface-raised)",color:Qe?"#fff":"var(--text-muted)",border:"none",borderRadius:14,fontSize:15,fontWeight:700,cursor:Qe?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"all 0.2s ease",boxShadow:Qe?"0 4px 16px rgba(99,102,241,0.35)":"none",transform:"translateY(0)"},onMouseEnter:k=>{Qe&&(k.currentTarget.style.transform="translateY(-1px)")},onMouseLeave:k=>{k.currentTarget.style.transform="translateY(0)"},children:a?s.jsx(Aw,{}):Yn}),[A.LOGIN,A.REGISTER].includes(i)&&s.jsxs("div",{style:{marginTop:20},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:"or"}),s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[{id:"google",label:"Google",mark:"G"},{id:"github",label:"GitHub",mark:"GH"},{id:"microsoft",label:"Microsoft",mark:"MS"}].map(k=>s.jsx(Dw,{label:k.label,mark:k.mark,disabled:a||!Et,onClick:()=>rt(k.id)},k.id))})]}),i===A.LOGIN&&s.jsx("div",{style:{textAlign:"center",marginTop:20},children:s.jsx("button",{type:"button",onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:13,fontWeight:500},children:"← Back to home"})})]})]})]})}function Fw({size:e=22}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Uw({file:e,token:t,onClose:n}){const[r,i]=v.useState(null),[o,a]=v.useState(""),[l,c]=v.useState(!0),[u,p]=v.useState(""),[h,d]=v.useState(1),[x,b]=v.useState(0),[S,O]=v.useState(!1),g=Uy(e.mimeType);v.useEffect(()=>{let w=null,E=!1;return(async()=>{c(!0),p("");try{const C=await Pc(e.id,t,{disposition:"preview"});if(E)return;if(g==="text"){const j=await C.text();a(j)}else w=URL.createObjectURL(C),i(w)}catch(C){E||p(C.message||"Preview failed")}finally{E||c(!1)}})(),()=>{E=!0,w&&URL.revokeObjectURL(w)}},[e.id,t,g]);const f=(w,E,C=!1)=>s.jsx("button",{type:"button",onClick:E,disabled:C,style:{padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",cursor:C?"not-allowed":"pointer",fontFamily:"var(--font)",fontSize:12,fontWeight:600},children:w}),m=()=>l?s.jsx("div",{style:{padding:48,textAlign:"center"},children:s.jsx(Fw,{size:32})}):u?s.jsx("p",{style:{color:"var(--danger)",padding:24,textAlign:"center"},children:u}):g==="image"&&r?s.jsx("img",{src:r,alt:e.name,style:{maxWidth:S?"96vw":"80vw",maxHeight:S?"90vh":"70vh",borderRadius:12,transform:`scale(${h}) rotate(${x}deg)`,transition:"transform .2s ease"}}):g==="pdf"&&r?s.jsx("iframe",{src:r,title:e.name,style:{width:"75vw",height:"75vh",border:"none",borderRadius:12}}):g==="video"&&r?s.jsx("video",{src:r,controls:!0,style:{maxWidth:"80vw",maxHeight:"75vh",borderRadius:12}}):g==="audio"&&r?s.jsx("audio",{src:r,controls:!0,style:{width:"min(480px, 80vw)"}}):g==="text"?s.jsx("pre",{style:{maxWidth:"80vw",maxHeight:"70vh",overflow:"auto",padding:16,background:"var(--bg-card)",borderRadius:12,color:"var(--text)",fontSize:13,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:o}):s.jsx("p",{style:{padding:24,color:"var(--text-muted)"},children:"Preview not available for this file type."});return s.jsx("div",{onClick:n,style:{position:"fixed",inset:0,zIndex:1e3,background:S?"#000":"rgba(0,0,0,.88)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)",animation:"fadeIn .2s ease"},children:s.jsxs("div",{onClick:w=>w.stopPropagation(),style:{background:S?"transparent":"var(--bg-primary)",borderRadius:S?0:20,border:S?"none":"1.5px solid var(--border)",maxWidth:S?"100vw":"95vw",maxHeight:S?"100vh":"95vh",width:S?"100%":void 0,height:S?"100%":void 0,overflow:"auto",padding:S?16:24,boxShadow:S?"none":"var(--shadow)",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:12},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:700,fontSize:16,flex:1,overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),g==="image"&&s.jsxs("div",{style:{display:"flex",gap:6},children:[f("−",()=>d(w=>Math.max(.25,w-.25))),f("+",()=>d(w=>Math.min(4,w+.25))),f("↻",()=>b(w=>(w+90)%360)),f(S?"⊡":"⛶",()=>O(w=>!w))]}),s.jsx("button",{type:"button",onClick:n,style:{background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:8,color:"var(--text-secondary)",cursor:"pointer",width:32,height:32},children:"✕"})]}),s.jsx("div",{style:{display:"flex",justifyContent:"center"},children:m()})]})})}function Bw({fileId:e,token:t,alt:n,mimeType:r}){const[i,o]=v.useState(null),[a,l]=v.useState(!1);return v.useEffect(()=>{if(!e||!t||!(r!=null&&r.startsWith("image/")))return;let c=null,u=!1;return Pc(e,t,{disposition:"preview"}).then(p=>{u||(c=URL.createObjectURL(p),o(c))}).catch(()=>{u||l(!0)}),()=>{u=!0,c&&URL.revokeObjectURL(c)}},[e,t,r]),!(r!=null&&r.startsWith("image/"))||a?s.jsx("div",{style:{fontSize:44,display:"flex"},children:Vi(r)}):i?s.jsx("img",{src:i,alt:n,style:{width:"100%",height:"100%",objectFit:"cover"},onError:()=>l(!0)}):s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite"}})}function Ww({trashedFiles:e,trashedFolders:t,loading:n,onRestoreFile:r,onRestoreFolder:i,onPermanentDelete:o,onEmptyTrash:a,onBack:l}){return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:l,style:$w,children:"← Back to My Cloud"}),s.jsx("h2",{style:{color:"var(--text)",fontWeight:800,fontSize:22,marginTop:8},children:"Trash"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"Items in trash still count toward storage until permanently deleted."})]}),(e.length>0||t.length>0)&&s.jsx("button",{type:"button",onClick:a,style:Vw,children:"Empty trash"})]}),n?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading trash…"}):e.length===0&&t.length===0?s.jsxs("div",{style:{textAlign:"center",padding:64,color:"var(--text-muted)",border:"1px dashed var(--border)",borderRadius:16},children:[s.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🗑️"}),s.jsx("div",{style:{fontWeight:700},children:"Trash is empty"})]}):s.jsxs(s.Fragment,{children:[t.length>0&&s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FOLDERS"}),t.map(c=>s.jsx($d,{icon:"📁",name:c.name,meta:"Folder",onRestore:()=>i(c.id)},c.id))]}),e.length>0&&s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:1.2,marginBottom:10},children:"FILES"}),e.map(c=>s.jsx($d,{icon:Vi(c.mimeType),name:c.name,meta:`${me(c.size)} · ${Wt(c.trashedAt||c.deletedAt)}`,onRestore:()=>r(c.id),onDelete:()=>o(c)},c.id))]})]})]})}function $d({icon:e,name:t,meta:n,onRestore:r,onDelete:i}){return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,marginBottom:8},children:[s.jsx("span",{style:{fontSize:24},children:e}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)"},children:n})]}),s.jsx("button",{type:"button",onClick:r,style:Vd,children:"Restore"}),i&&s.jsx("button",{type:"button",onClick:i,style:{...Vd,color:"var(--danger)"},children:"Delete forever"})]})}const $w={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"},Vw={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontFamily:"var(--font)"},Vd={padding:"6px 12px",borderRadius:8,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--font)"};function Hw({file:e,mode:t,folders:n,currentFolderId:r,onConfirm:i,onCancel:o}){const[a,l]=v.useState(r||""),[c,u]=v.useState(e.name),p=cg(n);return s.jsx("div",{onClick:o,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:h=>h.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(420px, 92vw)",animation:"scaleIn .2s ease"},children:[s.jsxs("h3",{style:{color:"var(--text)",fontWeight:700,fontSize:18,marginBottom:8},children:[t==="move"?"Move":"Copy"," file"]}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:20},children:e.name}),s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"Destination folder"}),s.jsxs("select",{value:a,onChange:h=>l(h.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"},children:[s.jsx("option",{value:"",children:"My Cloud (root)"}),p.map(h=>s.jsxs("option",{value:h.id,disabled:h.id===e.folderId,children:["—".repeat(h.depth)," ",h.name]},h.id))]}),t==="copy"&&s.jsxs(s.Fragment,{children:[s.jsx("label",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:"New name (optional)"}),s.jsx("input",{value:c,onChange:h=>u(h.target.value),style:{width:"100%",marginTop:6,marginBottom:16,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)"}})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:o,style:ug,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>i({targetFolderId:a||null,newName:t==="copy"?c:void 0}),style:Gw,children:t==="move"?"Move":"Copy"})]})]})})}function cg(e,t=0){var r;const n=[];for(const i of e)n.push({...i,depth:t}),(r=i.children)!=null&&r.length&&n.push(...cg(i.children,t+1));return n}const ug={padding:"10px 20px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},Gw={...ug,border:"none",background:"var(--accent)",color:"#fff"};function Kw({file:e,allTags:t,onSave:n,onCancel:r}){const[i,o]=v.useState(e.tags||[]),[a,l]=v.useState(""),c=u=>{const p=u.trim().toLowerCase();!p||i.includes(p)||i.length>=20||(o([...i,p]),l(""))};return s.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:s.jsxs("div",{onClick:u=>u.stopPropagation(),style:{background:"var(--bg-primary)",border:"1.5px solid var(--border)",borderRadius:16,padding:28,width:"min(440px, 92vw)"},children:[s.jsx("h3",{style:{color:"var(--text)",fontWeight:700,marginBottom:4},children:"Edit tags"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:16},children:e.name}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12},children:i.map(u=>s.jsxs("span",{style:{background:"rgba(240,22,58,.15)",color:"var(--accent)",padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[u,s.jsx("button",{type:"button",onClick:()=>o(i.filter(p=>p!==u)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:"×"})]},u))}),s.jsx("input",{value:a,onChange:u=>l(u.target.value),onKeyDown:u=>{u.key==="Enter"&&(u.preventDefault(),c(a))},placeholder:"Add tag and press Enter",style:{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",marginBottom:12}}),t.length>0&&s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6},children:"Suggestions"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:t.filter(u=>!i.includes(u)).slice(0,12).map(u=>s.jsxs("button",{type:"button",onClick:()=>c(u),style:{padding:"4px 10px",borderRadius:20,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-secondary)",fontSize:12,cursor:"pointer"},children:["+ ",u]},u))})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[s.jsx("button",{type:"button",onClick:r,style:dg,children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>n(i),style:Yw,children:"Save tags"})]})]})})}const dg={padding:"10px 18px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontWeight:600},Yw={...dg,border:"none",background:"var(--accent)",color:"#fff"};function Qw({file:e,onShare:t,onCancel:n}){const[r,i]=v.useState("link"),[o,a]=v.useState("view"),[l,c]=v.useState("private"),[u,p]=v.useState(""),[h,d]=v.useState(""),[x,b]=v.useState(""),[S,O]=v.useState(""),[g,f]=v.useState(!1),[m,w]=v.useState(""),[E,C]=v.useState(!1),j=v.useMemo(()=>{const R=[o==="view"?"View only":o==="download"?"Download allowed":"Can edit"];return h&&R.push("Password protected"),x&&R.push("Expires automatically"),S&&R.push(`${S} view limit`),R.join(" · ")},[o,h,x,S]),I=async()=>{var R;f(!0);try{const pe={shareType:r,permission:o,visibility:l,...h&&{password:h},...x&&{expiresAt:new Date(x).toISOString()},...S&&{maxViews:Number(S)},...r==="email"&&{sharedWithEmail:u,email:u}},he=await t(pe),be=(he==null?void 0:he.shareUrl)||((R=he==null?void 0:he.data)==null?void 0:R.shareUrl);be&&w(be)}finally{f(!1)}},V=async()=>{var R;m&&(await((R=navigator.clipboard)==null?void 0:R.writeText(m)),C(!0),setTimeout(()=>C(!1),1500))};return s.jsx("div",{onClick:n,style:Jw,children:s.jsxs("div",{onClick:R=>R.stopPropagation(),style:qw,children:[s.jsxs("div",{style:Xw,children:[s.jsxs("div",{children:[s.jsx("div",{style:Zw,children:"Secure sharing"}),s.jsx("h3",{style:eb,children:"Share file"}),s.jsx("p",{style:tb,children:e.name})]}),s.jsx("button",{type:"button",title:"Close",onClick:n,style:nb,children:"x"})]}),s.jsxs("div",{style:Gd,children:[s.jsx(Hd,{label:"Method",value:r,onChange:i,options:[["link","Link"],["email","Email"]]}),s.jsx(Hd,{label:"Access",value:l,onChange:c,options:[["private","Private"],["public","Public"],["protected","Protected"]]})]}),r==="email"&&s.jsx(tr,{label:"Recipient email",children:s.jsx("input",{type:"email",value:u,onChange:R=>p(R.target.value),placeholder:"teammate@company.com",style:Xr})}),s.jsx(tr,{label:"Permission",children:s.jsxs("select",{value:o,onChange:R=>a(R.target.value),style:Xr,children:[s.jsx("option",{value:"view",children:"View only"}),s.jsx("option",{value:"download",children:"View and download"}),s.jsx("option",{value:"edit",children:"Edit metadata"})]})}),s.jsxs("div",{style:Gd,children:[s.jsx(tr,{label:"Password",children:s.jsx("input",{type:"password",value:h,onChange:R=>d(R.target.value),placeholder:"Optional",style:Xr})}),s.jsx(tr,{label:"Max views",children:s.jsx("input",{type:"number",min:"1",value:S,onChange:R=>O(R.target.value),placeholder:"Unlimited",style:Xr})})]}),s.jsx(tr,{label:"Expiration",children:s.jsx("input",{type:"datetime-local",value:x,onChange:R=>b(R.target.value),style:Xr})}),s.jsxs("div",{style:ob,children:[s.jsx("strong",{children:"Share policy"}),s.jsx("span",{children:j})]}),m&&s.jsxs("div",{style:sb,children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:6,fontWeight:800,textTransform:"uppercase"},children:"Share link"}),s.jsx("div",{style:{fontSize:13,wordBreak:"break-all",color:"var(--accent-blue)"},children:m}),s.jsx("button",{type:"button",onClick:V,style:{marginTop:10,...Kd},children:E?"Copied":"Copy link"})]}),s.jsxs("div",{style:ab,children:[s.jsx("button",{type:"button",onClick:n,style:fg,children:"Close"}),s.jsx("button",{type:"button",disabled:g||r==="email"&&!u,onClick:I,style:{...Kd,opacity:g?.7:1},children:g?"Creating...":m?"Create another":r==="email"?"Send invitation":"Create secure link"})]})]})})}function Hd({label:e,value:t,onChange:n,options:r}){return s.jsx(tr,{label:e,children:s.jsx("div",{style:rb,children:r.map(([i,o])=>s.jsx("button",{type:"button",onClick:()=>n(i),style:{...ib,background:t===i?"var(--accent)":"transparent",color:t===i?"#fff":"var(--text-secondary)"},children:o},i))})})}function tr({label:e,children:t}){return s.jsxs("div",{style:{marginBottom:14},children:[s.jsx("label",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:e}),s.jsx("div",{style:{marginTop:6},children:t})]})}const Jw={position:"fixed",inset:0,zIndex:2e3,background:"rgba(1,6,12,.78)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(14px)",padding:18},qw={background:"linear-gradient(180deg, rgba(24,33,45,.98), rgba(8,13,18,.98))",border:"1px solid var(--border-hover)",borderRadius:18,width:"min(720px, 96vw)",maxHeight:"92vh",overflow:"auto",boxShadow:"0 28px 90px rgba(0,0,0,.55), 0 0 70px rgba(20,184,166,.13)",animation:"scaleIn .2s ease"},Xw={padding:30,borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",gap:16,background:"linear-gradient(135deg, rgba(20,184,166,.22), rgba(56,189,248,.16) 48%, rgba(244,63,94,.14))"},Zw={fontSize:11,color:"var(--accent-blue)",fontWeight:900,textTransform:"uppercase",letterSpacing:1},eb={fontWeight:900,fontSize:30,margin:"8px 0 5px"},tb={color:"var(--text-secondary)",fontSize:15,overflowWrap:"anywhere"},nb={width:40,height:40,borderRadius:12,border:"1px solid var(--border)",background:"rgba(255,255,255,.1)",color:"var(--text)",cursor:"pointer",fontWeight:900,fontSize:16,transition:"var(--transition)"},Gd={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:14,padding:"0 30px"},Xr={width:"100%",padding:"14px 15px",borderRadius:12,border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",fontFamily:"var(--font)",fontSize:15,minHeight:48},rb={display:"grid",gridTemplateColumns:"repeat(2, 1fr)",border:"1px solid var(--border)",borderRadius:12,overflow:"hidden",background:"var(--bg-card)"},ib={border:"none",padding:"13px 14px",cursor:"pointer",fontWeight:900,fontFamily:"var(--font)",transition:"var(--transition)",fontSize:14},ob={margin:"8px 30px 0",padding:17,border:"1px solid rgba(56,189,248,.35)",borderRadius:14,background:"rgba(56,189,248,.1)",display:"flex",flexDirection:"column",gap:5,color:"var(--text-secondary)",fontSize:14},sb={margin:"18px 30px 0",padding:17,background:"var(--surface-raised)",borderRadius:14,border:"1px solid var(--border)"},ab={display:"grid",gridTemplateColumns:"minmax(130px, auto) minmax(180px, auto)",gap:10,marginTop:24,padding:"0 30px 30px",justifyContent:"flex-end"},fg={padding:"12px 22px",minHeight:44,borderRadius:10,border:"1px solid var(--border)",background:"rgba(255,255,255,.04)",color:"var(--text-secondary)",cursor:"pointer",fontWeight:800,fontFamily:"var(--font)",transition:"var(--transition)",whiteSpace:"nowrap"},Kd={...fg,border:"none",background:"var(--gradient)",color:"#fff",boxShadow:"0 12px 26px rgba(20,184,166,.2)"};function lb({stats:e,usage:t,onBack:n}){const r=(t==null?void 0:t.breakdown)||{},i=Object.values(r).reduce((a,l)=>a+l,0)||1,o=[{key:"images",label:"Images",color:"#f0163a"},{key:"videos",label:"Videos",color:"#4090ff"},{key:"documents",label:"Documents",color:"#f6b347"},{key:"audio",label:"Audio",color:"#22c55e"},{key:"other",label:"Other",color:"#94a3b8"}];return s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:n,style:cb,children:"← Back to My Cloud"}),s.jsx("h2",{style:{fontWeight:800,fontSize:22,margin:"12px 0 24px"},children:"Storage dashboard"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:12,marginBottom:28},children:[s.jsx(So,{label:"Total files",value:e.totalFiles}),s.jsx(So,{label:"Total folders",value:e.totalFolders}),s.jsx(So,{label:"Storage used",value:me(e.storageUsed)}),s.jsx(So,{label:"Storage remaining",value:me(Math.max(0,e.storageQuota-e.storageUsed))})]}),s.jsxs("section",{style:{marginBottom:28},children:[s.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"Storage usage"}),s.jsx("div",{style:{height:12,borderRadius:99,overflow:"hidden",display:"flex",background:"var(--border)"},children:o.map(a=>{const l=(r[a.key]||0)/i*100;return l<.5?null:s.jsx("div",{title:`${a.label}: ${me(r[a.key]||0)}`,style:{width:`${l}%`,background:a.color,transition:"width .4s ease"}},a.key)})}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,marginTop:12},children:o.map(a=>s.jsxs("span",{style:{fontSize:12,color:"var(--text-muted)",display:"flex",alignItems:"center",gap:6},children:[s.jsx("span",{style:{width:8,height:8,borderRadius:99,background:a.color}}),a.label,": ",me(r[a.key]||0)]},a.key))})]}),s.jsxs("section",{children:[s.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"File type distribution"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:o.map(a=>{const l=r[a.key]||0,c=Math.round(l/i*100);return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[s.jsx("span",{children:a.label}),s.jsxs("span",{style:{color:"var(--text-muted)"},children:[c,"%"]})]}),s.jsx("div",{style:{height:6,background:"var(--border)",borderRadius:99,overflow:"hidden"},children:s.jsx("div",{style:{width:`${c}%`,height:"100%",background:a.color,borderRadius:99}})})]},a.key)})})]})]})}function So({label:e,value:t}){return s.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:16},children:[s.jsx("div",{style:{fontSize:22,fontWeight:800},children:t}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:e})]})}const cb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"};function ub({users:e,systemHealth:t,loading:n,onBack:r}){return s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:r,style:db,children:"← Back to My Cloud"}),s.jsx("h2",{style:{fontWeight:800,fontSize:22,margin:"12px 0 8px"},children:"Admin panel"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13,marginBottom:24},children:"User management and system overview"}),t&&s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:28},children:[s.jsx(Zr,{label:"Total users",value:t.totalUsers??"—"}),s.jsx(Zr,{label:"Active users",value:t.activeUsers??"—"}),s.jsx(Zr,{label:"Total files",value:t.totalFiles??"—"}),s.jsx(Zr,{label:"Storage used",value:t.totalStorageUsed!=null?me(t.totalStorageUsed):"—"}),s.jsx(Zr,{label:"Uploads today",value:t.uploadsToday??"—"})]}),s.jsx("h3",{style:{fontSize:14,fontWeight:700,marginBottom:12},children:"Users"}),n?s.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading…"}):s.jsxs("div",{style:{overflowX:"auto",border:"1px solid var(--border)",borderRadius:12},children:[s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"var(--bg-card)",textAlign:"left"},children:[s.jsx("th",{style:ei,children:"Email"}),s.jsx("th",{style:ei,children:"Name"}),s.jsx("th",{style:ei,children:"Role"}),s.jsx("th",{style:ei,children:"Storage"}),s.jsx("th",{style:ei,children:"Status"})]})}),s.jsx("tbody",{children:e.map(i=>s.jsxs("tr",{style:{borderTop:"1px solid var(--border)"},children:[s.jsx("td",{style:ti,children:i.email}),s.jsx("td",{style:ti,children:i.fullName||"—"}),s.jsx("td",{style:ti,children:i.role}),s.jsxs("td",{style:ti,children:[me(i.storageUsed)," / ",me(i.storageQuota)]}),s.jsx("td",{style:ti,children:i.isActive?"Active":"Inactive"})]},i.id))})]}),e.length===0&&s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)"},children:"No users found"})]})]})}function Zr({label:e,value:t}){return s.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:14},children:[s.jsx("div",{style:{fontWeight:800,fontSize:20},children:t}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:e})]})}const ei={padding:"12px 14px",color:"var(--text-muted)",fontWeight:600},ti={padding:"12px 14px",color:"var(--text-secondary)"},db={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,fontFamily:"var(--font)"};function pg({file:e,onMove:t,onCopy:n,onTags:r,onDelete:i}){const[o,a]=v.useState(!1),l=v.useRef(null);v.useEffect(()=>{const u=p=>{l.current&&!l.current.contains(p.target)&&a(!1)};return o&&document.addEventListener("click",u),()=>document.removeEventListener("click",u)},[o]);const c=[{cue:"#",label:"Tags",onClick:()=>r(e)},{cue:"Move",label:"Move",onClick:()=>t(e)},{cue:"Copy",label:"Copy file",onClick:()=>n(e)},{cue:"Del",label:"Delete",onClick:()=>i(e),danger:!0}];return s.jsxs("div",{ref:l,style:{position:"relative"},children:[s.jsx("button",{type:"button",title:"More actions",onClick:u=>{u.stopPropagation(),a(p=>!p)},style:fb,children:"..."}),o&&s.jsx("div",{style:pb,children:c.map(u=>s.jsxs("button",{type:"button",onClick:p=>{p.stopPropagation(),a(!1),u.onClick()},style:{...hb,color:u.danger?"var(--danger)":"var(--text)"},children:[s.jsx("span",{style:{...gb,color:u.danger?"var(--danger)":"var(--accent-blue)"},children:u.cue}),s.jsx("span",{children:u.label})]},u.label))})]})}const fb={width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"rgba(255,255,255,.08)",color:"var(--text)",cursor:"pointer",fontSize:18,fontWeight:900,transition:"var(--transition)"},pb={position:"absolute",right:0,top:"100%",marginTop:6,minWidth:190,background:"var(--surface-raised)",border:"1px solid var(--border)",borderRadius:14,boxShadow:"var(--shadow)",zIndex:50,overflow:"hidden",padding:6,animation:"floatIn .16s ease"},hb={display:"flex",alignItems:"center",gap:10,width:"100%",padding:"11px 12px",border:"none",borderRadius:10,background:"transparent",textAlign:"left",cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"var(--font)"},gb={width:34,opacity:.78,fontSize:11,fontWeight:900,textTransform:"uppercase"};function Xn({width:e="100%",height:t=16,radius:n=8,style:r={}}){return s.jsx("div",{style:{width:e,height:t,borderRadius:n,background:"linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite",...r}})}function mb({count:e=6,grid:t=!1}){return t?s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:12},children:Array.from({length:e}).map((n,r)=>s.jsxs("div",{style:{borderRadius:16,overflow:"hidden",border:"1px solid var(--border)"},children:[s.jsx(Xn,{height:140,radius:0}),s.jsxs("div",{style:{padding:12},children:[s.jsx(Xn,{height:12,width:"80%"}),s.jsx(Xn,{height:10,width:"50%",style:{marginTop:8}})]})]},r))}):s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Array.from({length:e}).map((n,r)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:"var(--bg-card)",borderRadius:12,border:"1px solid var(--border)"},children:[s.jsx(Xn,{width:36,height:36,radius:8}),s.jsxs("div",{style:{flex:1},children:[s.jsx(Xn,{height:14,width:"40%"}),s.jsx(Xn,{height:10,width:"25%",style:{marginTop:8}})]})]},r))})}function vb(e,t=400){const[n,r]=v.useState(e);return v.useEffect(()=>{const i=setTimeout(()=>r(e),t);return()=>clearTimeout(i)},[e,t]),n}async function yb(e,{createFolder:t,uploadFile:n,baseFolderId:r,onProgress:i}){const o=Array.from(e),a=new Map([["",r??null]]),l=u=>{const p=u.webkitRelativePath||u.name,h=p.split("/").filter(Boolean),d=h.pop();return{segments:h,fileName:d,rel:p}};o.sort((u,p)=>l(u).rel.localeCompare(l(p).rel));let c=0;for(const u of o){const{segments:p}=l(u);let h=r??null,d="";for(const x of p){if(d=d?`${d}/${x}`:x,!a.has(d)){const b=await t(x,h);a.set(d,b.id)}h=a.get(d)}await n(u,h),c+=1,i==null||i(Math.round(c/o.length*100))}}function xb(e){const t=new Map(e.map(r=>[r.id,{...r,children:[]}])),n=[];for(const r of e){const i=t.get(r.id);r.parentId&&t.has(r.parentId)?t.get(r.parentId).children.push(i):n.push(i)}return n}const hg=v.createContext(null);function wb({token:e,children:t}){const[n,r]=v.useState(null),[i,o]=v.useState([]),[a,l]=v.useState(0),[c,u]=v.useState(!0),p=v.useCallback(async()=>{if(e)try{const b=await lt("/account",{},e);r(b)}catch{const b=await lt("/users/me",{},e).catch(()=>null);b&&r(b)}},[e]),h=v.useCallback(async()=>{},[]),d=v.useCallback(async()=>{u(!0),await Promise.all([p(),h()]),u(!1)},[p,h]);v.useEffect(()=>{d()},[e]);const x=async()=>{};return s.jsx(hg.Provider,{value:{account:n,loading:c,notifications:i,unreadCount:a,refreshAccount:p,refreshNotifications:h,refreshAll:d,markAllRead:x},children:t})}function gg(){const e=v.useContext(hg);if(!e)throw new Error("useAccount must be used within AccountProvider");return e}function bb({account:e,onNavigate:t,onSignOut:n}){var u;const[r,i]=v.useState(!1),o=v.useRef(null);v.useEffect(()=>{const p=h=>{o.current&&!o.current.contains(h.target)&&i(!1)};return r&&document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[r]);const a=[{id:"profile",label:"My Profile"},{id:"settings",label:"Settings"},{id:"security",label:"Security"},{id:"dashboard",label:"Storage"},{id:"billing",label:"Billing"},{id:"billing",label:"Upgrade Plan",accent:!0},{id:"help",label:"Help Center"}],l=e==null?void 0:e.avatarUrl,c=((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"?").slice(0,1).toUpperCase();return s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(p=>!p),style:{display:"flex",alignItems:"center",gap:8,padding:"4px 10px 4px 4px",borderRadius:999,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontFamily:"var(--font)"},children:[s.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:l?`url(${l}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:14},children:!l&&c}),s.jsx("span",{style:{color:"var(--text-secondary)",fontSize:13,fontWeight:600},children:"▾"})]}),r&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",minWidth:200,background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300,overflow:"hidden",animation:"fadeIn .15s ease"},children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontWeight:700,fontSize:14,color:"var(--text)"},children:(e==null?void 0:e.fullName)||"Account"}),s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:e==null?void 0:e.email}),s.jsxs("div",{style:{fontSize:11,color:"var(--accent)",marginTop:6,fontWeight:600,textTransform:"capitalize"},children:[((u=e==null?void 0:e.planDetails)==null?void 0:u.name)||(e==null?void 0:e.plan)," plan"]})]}),a.map((p,h)=>s.jsx("button",{type:"button",onClick:()=>{i(!1),t(p.id==="dashboard"?"dashboard":p.id)},style:{display:"block",width:"100%",padding:"11px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,fontWeight:p.accent?700:500,color:p.accent?"var(--accent)":"var(--text-secondary)"},children:p.label},`${p.id}-${h}`)),s.jsx("div",{style:{borderTop:"1px solid var(--border)"},children:s.jsx("button",{type:"button",onClick:()=>{i(!1),n()},style:{display:"block",width:"100%",padding:"12px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontFamily:"var(--font)",fontSize:13,color:"var(--danger)",fontWeight:600},children:"Sign Out"})})]})]})}function Sb({account:e,onUpgrade:t}){if(!(e!=null&&e.onTrial))return null;const n=e.trialDaysLeft??0;return s.jsxs("div",{style:{background:"linear-gradient(90deg, rgba(240,22,58,.12), rgba(64,144,255,.1))",borderBottom:"1px solid var(--border)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--text)"},children:"Pro trial"})," — ",n," day",n!==1?"s":""," left · ",me(e.storageUsed)," used"]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Upgrade"})]})}function kb({account:e,onOpenSettings:t}){return!(e!=null&&e.emailVerificationRequired)||(e==null?void 0:e.isVerified)!==!1?null:s.jsxs("div",{style:{background:"rgba(240, 22, 58, 0.12)",borderBottom:"1px solid rgba(240, 22, 58, 0.35)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap",fontFamily:"var(--font)",fontSize:13},children:[s.jsxs("span",{style:{color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--danger)"},children:"Email not verified"})," — ","Uploads are disabled until you verify. Check your inbox or resend the link."]}),s.jsx("button",{type:"button",onClick:t,style:{padding:"6px 16px",borderRadius:8,border:"none",background:"var(--danger)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12},children:"Verify email"})]})}function Yd({email:e,token:t,onVerified:n,onBack:r}){const[i,o]=v.useState(e||""),[a,l]=v.useState(!!t),[c,u]=v.useState(""),[p,h]=v.useState(""),[d,x]=v.useState(!1);v.useEffect(()=>{t&&b(t)},[t]);const b=async O=>{l(!0),u("");try{const g=await fetch(`${kt}/auth/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:O})}),f=await g.json();if(!g.ok||!f.success)throw new Error(f.message||"Verification failed");x(!0),setTimeout(()=>n==null?void 0:n(),1200)}catch{u("This verification link is invalid or expired. Request a fresh email and try again.")}finally{l(!1)}},S=async()=>{if(!i){u("Enter your email address first.");return}l(!0),u(""),h("");try{const O=await fetch(`${kt}/auth/resend-verification`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}),g=await O.json();if(!O.ok||!g.success)throw new Error(g.message||"Failed to send verification email");h("A fresh verification email is on its way. Open the link in your inbox to continue.")}catch{u("Something went wrong. Please try again.")}finally{l(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:Mn}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:d?"Email verified":t?"Verifying your email":"Check your inbox"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:d?"Your account is ready. You can now log in with your email and password.":t?"Hold tight while we confirm your CloudVault account.":"Open the verification link we sent after registration. You only need to do this once."}),!t&&!d&&s.jsxs(s.Fragment,{children:[s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:"Email address"}),s.jsx("input",{className:"input-field",type:"email",value:i,onChange:O=>o(O.target.value),placeholder:"you@company.com",style:{marginTop:6}})]}),s.jsx("button",{type:"button",onClick:S,disabled:a,className:"btn-primary",style:{width:"100%"},children:a?"Sending...":"Resend verification email"})]}),a&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,marginTop:14},children:"Working on it..."}),c&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginTop:14},children:c}),p&&s.jsx("p",{style:{color:"var(--accent-blue)",fontSize:13,lineHeight:1.5,marginTop:14},children:p}),s.jsx("button",{type:"button",onClick:r,className:"btn-secondary",style:{width:"100%",marginTop:14},children:"Back to login"})]})]})}function _b({notifications:e,unreadCount:t,onMarkAllRead:n}){const[r,i]=v.useState(!1),o=v.useRef(null);return v.useEffect(()=>{const a=l=>{o.current&&!o.current.contains(l.target)&&i(!1)};return r&&document.addEventListener("click",a),()=>document.removeEventListener("click",a)},[r]),s.jsxs("div",{ref:o,style:{position:"relative"},children:[s.jsxs("button",{type:"button",onClick:()=>i(a=>!a),style:{width:38,height:38,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-card)",cursor:"pointer",fontSize:18,position:"relative"},title:"Notifications",children:["🔔",t>0&&s.jsx("span",{style:{position:"absolute",top:4,right:4,minWidth:16,height:16,borderRadius:99,background:"var(--accent)",color:"#fff",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"},children:t>9?"9+":t})]}),r&&s.jsxs("div",{style:{position:"absolute",right:0,top:"calc(100% + 8px)",width:320,maxHeight:400,overflow:"auto",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:12,boxShadow:"var(--shadow)",zIndex:300},children:[s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontWeight:700,fontSize:14},children:"Notifications"}),t>0&&s.jsx("button",{type:"button",onClick:n,style:Eb,children:"Mark all read"})]}),e.length===0?s.jsx("p",{style:{padding:24,textAlign:"center",color:"var(--text-muted)",fontSize:13},children:"Nothing new"}):e.map(a=>s.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--border)",background:a.read?"transparent":"rgba(240,22,58,.06)"},children:[s.jsx("div",{style:{fontWeight:600,fontSize:13},children:a.title}),a.body&&s.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:a.body}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:6},children:Wt(a.createdAt)})]},a.id))]})]})}const Eb={background:"none",border:"none",color:"var(--accent-blue)",fontSize:12,cursor:"pointer",fontWeight:600};function Cb({account:e,onBack:t}){var r,i;if(!e)return null;const n=new Date(e.createdAt).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"});return s.jsxs("div",{style:{maxWidth:640},children:[s.jsx("button",{type:"button",onClick:t,style:Tb,children:"← Back"}),s.jsx("h1",{style:Ib,children:"My Profile"}),s.jsx("div",{style:Qd,children:s.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[s.jsx("div",{style:{width:88,height:88,borderRadius:"50%",background:e.avatarUrl?`url(${e.avatarUrl}) center/cover`:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,color:"#fff",fontWeight:800},children:!e.avatarUrl&&(((r=e.fullName)==null?void 0:r[0])||"?").toUpperCase()}),s.jsxs("div",{children:[s.jsx("h2",{style:{margin:0,fontSize:22},children:e.fullName||"User"}),s.jsx("p",{style:{color:"var(--text-muted)",marginTop:6},children:e.email}),s.jsxs("p",{style:{color:"var(--accent)",fontWeight:600,fontSize:13,marginTop:8},children:[((i=e.planDetails)==null?void 0:i.name)||e.plan," plan",e.onTrial&&` · Trial (${e.trialDaysLeft}d left)`]})]})]})}),s.jsxs("div",{style:{...Qd,marginTop:16},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[s.jsx("h3",{style:{fontSize:15,fontWeight:700,margin:0},children:"Storage Plan"}),s.jsxs("button",{type:"button",onClick:()=>window.location.href="/billing",style:{display:"flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:8,border:"1px solid var(--accent)",background:"var(--accent)",color:"#fff",fontWeight:600,fontSize:13,cursor:"pointer",fontFamily:"var(--font)",transition:"all 0.2s ease"},onMouseEnter:o=>o.currentTarget.style.background="var(--accent-hover)",onMouseLeave:o=>o.currentTarget.style.background="var(--accent)",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),"Upgrade Plan"]})]}),s.jsx(ko,{label:"Member since",value:n}),s.jsx(ko,{label:"Sign-in method",value:e.authProvider||"email"}),s.jsx(ko,{label:"Email verified",value:e.isVerified?"Yes":"No"}),s.jsx(ko,{label:"Storage used",value:`${me(e.storageUsed)} / ${me(e.storageQuota)}`})]})]})}function ko({label:e,value:t}){return s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid var(--border)",fontSize:14},children:[s.jsx("span",{style:{color:"var(--text-muted)"},children:e}),s.jsx("span",{style:{fontWeight:600,textTransform:"capitalize"},children:t})]})}const Tb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,marginBottom:12,fontFamily:"var(--font)"},Ib={fontSize:26,fontWeight:800,marginBottom:20},Qd={background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:14,padding:24},jb=[{id:"dark",label:"Dark Professional"},{id:"light",label:"Light Professional"},{id:"midnight",label:"Midnight Blue"},{id:"purple",label:"Purple Professional"}];function Pb({account:e,api:t,token:n,onBack:r,onUpdated:i,notify:o,theme:a="dark",onThemeChange:l}){const[c,u]=v.useState((e==null?void 0:e.fullName)||""),[p,h]=v.useState((e==null?void 0:e.avatarUrl)||""),[d,x]=v.useState(""),[b,S]=v.useState(""),[O,g]=v.useState(""),[f,m]=v.useState(!1),w=async()=>{m(!0);try{await t("/users/me",{method:"PUT",body:JSON.stringify({fullName:c,avatarUrl:p||void 0})}),o("Profile updated","success"),i()}catch(I){o(I.message,"error")}m(!1)},E=async()=>{m(!0);try{await t("/users/me/password",{method:"PUT",body:JSON.stringify({currentPassword:d,newPassword:b})}),o("Password changed","success"),x(""),S("")}catch(I){o(I.message,"error")}m(!1)},C=async()=>{try{await t("/account/verify-email/resend",{method:"POST"}),o("Verification email sent","success")}catch(I){o(I.message,"error")}},j=async()=>{if(window.confirm("This will deactivate your account. Continue?"))try{await t("/account",{method:"DELETE",body:JSON.stringify({password:O})}),o("Account deactivated","success"),window.location.reload()}catch(I){o(I.message,"error")}};return s.jsxs("div",{style:{maxWidth:520},children:[s.jsx("button",{type:"button",onClick:r,style:Rb,children:"← Back"}),s.jsx("h1",{style:Nb,children:"Settings"}),s.jsxs("section",{style:Zn,children:[s.jsx("h3",{style:er,children:"Profile"}),s.jsx(ni,{label:"Display name",value:c,onChange:u}),s.jsx(ni,{label:"Avatar URL",value:p,onChange:h,placeholder:"https://..."}),s.jsx("button",{type:"button",onClick:w,disabled:f,style:xs,children:"Save changes"})]}),(e==null?void 0:e.emailVerificationRequired)&&!(e!=null&&e.isVerified)&&s.jsxs("section",{style:{...Zn,marginTop:16},children:[s.jsx("h3",{style:er,children:"Email verification"}),s.jsx("p",{style:Ra,children:"Verify your email to upload files."}),s.jsx("button",{type:"button",onClick:C,style:Jd,children:"Resend verification email"})]}),(e==null?void 0:e.authProvider)==="email"&&s.jsxs("section",{style:{...Zn,marginTop:16},children:[s.jsx("h3",{style:er,children:"Password"}),s.jsx(ni,{label:"Current password",value:d,onChange:x,type:"password"}),s.jsx(ni,{label:"New password",value:b,onChange:S,type:"password"}),s.jsx("button",{type:"button",onClick:E,disabled:f,style:xs,children:"Update password"})]}),s.jsxs("section",{style:{...Zn,marginTop:16},children:[s.jsx("h3",{style:er,children:"Theme"}),s.jsx("p",{style:Ra,children:"Choose how CloudVault looks across this browser."}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:10},children:jb.map(I=>s.jsx("button",{type:"button",onClick:()=>l==null?void 0:l(I.id),className:a===I.id?"btn-primary":"btn-secondary",style:{minHeight:44,textAlign:"left"},children:I.label},I.id))})]}),s.jsxs("section",{style:{...Zn,marginTop:16},children:[s.jsx("h3",{style:er,children:"Notifications"}),s.jsx("p",{style:Ra,children:"Product updates, file activity, and security emails are enabled for important account events."}),s.jsx("button",{type:"button",style:Jd,children:"Email notifications on"})]}),s.jsxs("section",{style:{...Zn,marginTop:16,borderColor:"rgba(255,77,77,.3)"},children:[s.jsx("h3",{style:{...er,color:"var(--danger)"},children:"Delete account"}),(e==null?void 0:e.authProvider)==="email"&&s.jsx(ni,{label:"Confirm password",value:O,onChange:g,type:"password"}),s.jsx("button",{type:"button",onClick:j,style:Ab,children:"Delete my account"})]})]})}function ni({label:e,value:t,onChange:n,type:r="text",placeholder:i}){return s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text-secondary)"},children:e}),s.jsx("input",{type:r,value:t,placeholder:i,onChange:o=>n(o.target.value),style:Ob})]})}const Rb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,marginBottom:12,fontFamily:"var(--font)"},Nb={fontSize:26,fontWeight:800,marginBottom:20},Zn={background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:14,padding:22},er={fontSize:15,fontWeight:700,marginBottom:14},Ra={fontSize:13,color:"var(--text-muted)",marginBottom:12},Ob={display:"block",width:"100%",marginTop:6,padding:"10px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-primary)",color:"var(--text)",fontFamily:"var(--font)"},xs={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer",fontFamily:"var(--font)"},Jd={...xs,background:"var(--bg-primary)",color:"var(--text)",border:"1px solid var(--border)"},Ab={...xs,background:"var(--danger)"};function Lb({api:e,account:t,onBack:n,notify:r}){const[i,o]=v.useState([]),[a,l]=v.useState([]),[c,u]=v.useState((t==null?void 0:t.twoFactorEnabled)||!1);v.useEffect(()=>{e("/account/sessions").then(d=>o(d.sessions||[])).catch(()=>{}),e("/account/security/login-history").then(d=>l(d.history||[])).catch(()=>{})},[e]);const p=async()=>{try{const d=!c;await e("/account/security/2fa",{method:"POST",body:JSON.stringify({enabled:d})}),u(d),r(d?"2FA enabled":"2FA disabled","success")}catch(d){r(d.message,"error")}},h=async()=>{try{await e("/account/sessions",{method:"DELETE"}),o([]),r("All other sessions signed out","success")}catch(d){r(d.message,"error")}};return s.jsxs("div",{style:{maxWidth:640},children:[s.jsx("button",{type:"button",onClick:n,style:Db,children:"← Back"}),s.jsx("h1",{style:zb,children:"Security"}),s.jsxs("section",{style:Na,children:[s.jsx("h3",{style:Oa,children:"Two-factor authentication"}),s.jsx("p",{style:qd,children:"Adds an extra step when signing in on new devices."}),s.jsx("button",{type:"button",onClick:p,style:c?Mb:mg,children:c?"Disable 2FA":"Enable 2FA"})]}),s.jsxs("section",{style:{...Na,marginTop:16},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[s.jsx("h3",{style:Oa,children:"Active sessions"}),s.jsx("button",{type:"button",onClick:h,style:Fb,children:"Sign out everywhere"})]}),i.length===0?s.jsx("p",{style:qd,children:"No active sessions besides this one."}):i.map(d=>{var x;return s.jsxs("div",{style:Xd,children:[s.jsx("div",{style:{fontSize:13,fontWeight:600},children:((x=d.deviceInfo)==null?void 0:x.slice(0,60))||"Unknown device"}),s.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)"},children:[d.ipAddress," · ",Wt(d.createdAt)]})]},d.id)})]}),s.jsxs("section",{style:{...Na,marginTop:16},children:[s.jsx("h3",{style:Oa,children:"Login history"}),a.slice(0,10).map(d=>s.jsxs("div",{style:Xd,children:[s.jsx("div",{style:{fontSize:13},children:d.action}),s.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)"},children:[d.ipAddress||"—"," · ",Wt(d.createdAt)]})]},d.id))]})]})}const Db={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,marginBottom:12,fontFamily:"var(--font)"},zb={fontSize:26,fontWeight:800,marginBottom:20},Na={background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:14,padding:22},Oa={fontSize:15,fontWeight:700,margin:0},qd={fontSize:13,color:"var(--text-muted)",margin:"8px 0 12px"},Xd={padding:"10px 0",borderBottom:"1px solid var(--border)"},mg={padding:"10px 18px",borderRadius:10,border:"none",background:"var(--accent)",color:"#fff",fontWeight:700,cursor:"pointer"},Mb={...mg,background:"transparent",border:"1px solid var(--border)",color:"var(--text)"},Fb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontSize:12,fontWeight:600};function Ub({account:e,api:t,onBack:n,notify:r,onUpdated:i}){const o=async l=>{try{await t("/billing/plan",{method:"POST",body:JSON.stringify({planId:l})}),r(`Switched to ${l}`,"success"),i()}catch(c){r(c.message,"error")}},a=async l=>{try{await t("/billing/storage",{method:"POST",body:JSON.stringify({addonId:l})}),r("Storage add-on applied","success"),i()}catch(c){r(c.message,"error")}};return s.jsxs("div",{style:{maxWidth:900},children:[s.jsx("button",{type:"button",onClick:n,className:"page-back-btn",children:"← Back"}),s.jsx("h1",{style:Bb,children:"Billing & plans"}),(e==null?void 0:e.onTrial)&&s.jsxs("p",{style:{color:"var(--accent-amber)",marginBottom:20,fontSize:14},children:["Pro trial active — ",e.trialDaysLeft," days remaining, then you move to Free unless you upgrade."]}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:14,marginBottom:32},children:yh.map(l=>s.jsxs("div",{className:`plan-card${l.highlight?" highlight":""}`,style:{borderColor:(e==null?void 0:e.plan)===l.id?"var(--accent)":void 0},children:[s.jsx("h3",{style:{margin:0},children:l.name}),s.jsxs("div",{style:{fontSize:28,fontWeight:800,margin:"8px 0"},children:[l.price,s.jsx("span",{style:{fontSize:13,fontWeight:500,color:"var(--text-muted)"},children:l.period})]}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:l.storage}),s.jsx("ul",{style:{fontSize:12,color:"var(--text-secondary)",paddingLeft:18,margin:"12px 0"},children:l.features.map(c=>s.jsx("li",{style:{marginBottom:4},children:c},c))}),s.jsx("button",{type:"button",disabled:(e==null?void 0:e.plan)===l.id&&!(e!=null&&e.onTrial),onClick:()=>o(l.id),className:(e==null?void 0:e.plan)===l.id&&!(e!=null&&e.onTrial)?"btn-secondary":"btn-primary",style:{width:"100%",marginTop:8},children:(e==null?void 0:e.plan)===l.id&&!(e!=null&&e.onTrial)?"Current":"Select"})]},l.id))}),s.jsx("h2",{style:{fontSize:18,fontWeight:700,marginBottom:12},children:"Add storage"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10},children:By.map(l=>s.jsxs("button",{type:"button",onClick:()=>a(l.id),className:"btn-secondary",children:[l.label," · ",l.price]},l.id))})]})}const Bb={fontSize:26,fontWeight:800,marginBottom:8};function Wb({onBack:e}){const t=[{q:"How do I verify my email?",a:"Open Settings and click Resend verification email. Uploads unlock after verification."},{q:"What happens when my trial ends?",a:"After 30 days on Pro trial, your account moves to the Free plan unless you upgrade."},{q:"Can I recover deleted files?",a:"Yes — open Trash from the sidebar, restore items, or delete them permanently."},{q:"How does sharing work?",a:"Use the Share action on any file to create a link or invite someone by email with view, download, or edit access."}];return s.jsxs("div",{style:{maxWidth:560},children:[s.jsx("button",{type:"button",onClick:e,style:$b,children:"← Back"}),s.jsx("h1",{style:Vb,children:"Help Center"}),s.jsxs("p",{style:{color:"var(--text-muted)",marginBottom:24},children:["Quick answers for ",De.name,". Need more? Email support@",De.name.toLowerCase(),".app"]}),t.map(n=>s.jsxs("div",{style:Hb,children:[s.jsx("h3",{style:{fontSize:15,marginBottom:8},children:n.q}),s.jsx("p",{style:{fontSize:14,color:"var(--text-secondary)",lineHeight:1.5,margin:0},children:n.a})]},n.q))]})}const $b={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,marginBottom:12,fontFamily:"var(--font)"},Vb={fontSize:26,fontWeight:800,marginBottom:12},Hb={background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,padding:18,marginBottom:12};function Gb({api:e,onBack:t}){const[n,r]=v.useState([]);return v.useEffect(()=>{e("/account/activity").then(i=>r(i.activity||[])).catch(()=>{})},[e]),s.jsxs("div",{style:{maxWidth:640},children:[s.jsx("button",{type:"button",onClick:t,style:Kb,children:"← Back"}),s.jsx("h1",{style:Yb,children:"Activity"}),n.length===0?s.jsx("p",{style:{color:"var(--text-muted)"},children:"No recent activity."}):n.map(i=>s.jsxs("div",{style:Qb,children:[s.jsx("div",{style:{fontWeight:600,fontSize:14},children:i.action.replace(/_/g," ")}),s.jsxs("div",{style:{fontSize:13,color:"var(--text-muted)"},children:[i.resourceName||i.resourceType," · ",Wt(i.createdAt)]})]},i.id))]})}const Kb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,marginBottom:12,fontFamily:"var(--font)"},Yb={fontSize:26,fontWeight:800,marginBottom:20},Qb={padding:"14px 0",borderBottom:"1px solid var(--border)"};function Aa({title:e,files:t,emptyMessage:n,onOpen:r,onBack:i}){return s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:i,style:Jb,children:"← Back to files"}),s.jsx("h2",{style:qb,children:e}),t.length===0?s.jsx("p",{style:{color:"var(--text-muted)",padding:"40px 0",textAlign:"center"},children:n}):s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:t.map(o=>s.jsxs("button",{type:"button",onClick:()=>r==null?void 0:r(o),style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:12,cursor:r?"pointer":"default",textAlign:"left",width:"100%",fontFamily:"var(--font)"},children:[s.jsx("span",{style:{fontSize:24},children:Vi(o.mimeType)}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{fontWeight:600,fontSize:14,color:"var(--text)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:o.name}),s.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:[me(o.size)," · ",Wt(o.updatedAt||o.createdAt)]})]})]},o.id))})]})}const Jb={background:"none",border:"none",color:"var(--accent-blue)",cursor:"pointer",fontWeight:600,marginBottom:12,fontFamily:"var(--font)"},qb={fontSize:22,fontWeight:800,marginBottom:16};function Zd({token:e,onBack:t,onSuccess:n}){const[r,i]=v.useState(""),[o,a]=v.useState(""),[l,c]=v.useState(!1),[u,p]=v.useState(""),[h,d]=v.useState(!1),x=async b=>{if(b.preventDefault(),p(""),!e)return p("This reset link is invalid. Please request a new one.");if(r!==o)return p("Passwords do not match.");if(r.length<8)return p("Password must be at least 8 characters.");if(!/[a-z]/.test(r)||!/[A-Z]/.test(r)||!/\d/.test(r))return p("Use at least one uppercase letter, one lowercase letter, and one number.");c(!0);try{const S=await fetch(`${kt}/auth/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,newPassword:r})}),O=await S.json();if(!S.ok||!O.success)throw new Error(O.message||"Failed to reset password");d(!0),setTimeout(()=>{var g;return(g=n||t)==null?void 0:g()},1400)}catch{p("Something went wrong. Please try again.")}finally{c(!1)}};return s.jsxs("div",{className:"auth-screen",children:[s.jsx("style",{children:Mn}),s.jsxs("div",{className:"auth-card",children:[s.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--gradient)",marginBottom:18}}),s.jsx("h1",{style:{color:"var(--text)",fontSize:26,fontWeight:800,marginBottom:8},children:h?"Password updated":"Set a new password"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:14,lineHeight:1.6,marginBottom:20},children:h?"You can now log in with your new password.":"Choose a strong password to secure your CloudVault account."}),!h&&s.jsxs("form",{onSubmit:x,children:[s.jsx(ef,{label:"New password",value:r,onChange:i}),s.jsx(ef,{label:"Confirm password",value:o,onChange:a}),u&&s.jsx("p",{role:"alert",style:{color:"var(--danger)",fontSize:13,lineHeight:1.5,marginBottom:14},children:u}),s.jsx("button",{type:"submit",disabled:l,className:"btn-primary",style:{width:"100%"},children:l?"Updating...":"Update password"})]}),h&&s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{width:"100%"},children:"Continue to login"}),s.jsx("button",{type:"button",onClick:t,className:"btn-secondary",style:{width:"100%",marginTop:12},children:"Back to login"})]})]})}function ef({label:e,value:t,onChange:n}){return s.jsxs("label",{style:{display:"block",marginBottom:14},children:[s.jsx("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)"},children:e}),s.jsx("input",{className:"input-field",type:"password",value:t,onChange:r=>n(r.target.value),required:!0,minLength:8,style:{marginTop:6}})]})}function Xb({msg:e,type:t,onClose:n}){v.useEffect(()=>{const i=setTimeout(n,3500);return()=>clearTimeout(i)},[n]);const r=t==="error"?"var(--danger)":t==="success"?"var(--accent)":"var(--accent-blue)";return s.jsxs("div",{className:"toast",style:{position:"fixed",bottom:32,right:32,zIndex:9999,background:r,color:"#fff",padding:"14px 24px",borderRadius:"var(--radius)",fontFamily:"var(--font)",fontWeight:600,fontSize:14,boxShadow:"var(--shadow)",animation:"slideUp .3s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10,maxWidth:420},children:[s.jsx("span",{children:t==="error"?"✕":t==="success"?"✓":"ℹ"}),s.jsx("span",{style:{flex:1},children:e}),s.jsx("span",{onClick:n,style:{cursor:"pointer",opacity:.7,fontSize:18,lineHeight:1},children:"×"})]})}function tf({size:e=22,color:t="var(--accent)"}){return s.jsx("div",{style:{width:e,height:e,border:"3px solid rgba(255,255,255,.15)",borderTopColor:t,borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}})}function Uo({value:e}){const t=e>85?"var(--danger)":e>60?"var(--accent-amber)":"var(--accent)";return s.jsx("div",{style:{background:"var(--border)",borderRadius:99,height:6,overflow:"hidden",width:"100%"},children:s.jsx("div",{style:{width:`${e}%`,height:"100%",background:t,borderRadius:99,transition:"width .5s ease"}})})}function Zb({jobs:e,history:t}){return!e.length&&!t.length?null:s.jsxs("div",{className:"download-panel",style:{position:"fixed",right:18,bottom:18,zIndex:1200,width:"min(360px, calc(100vw - 32px))",background:"var(--bg-primary)",border:"1px solid var(--border)",borderRadius:16,boxShadow:"var(--shadow)",overflow:"hidden",animation:"slideUp .2s ease"},children:[s.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("strong",{style:{fontSize:13},children:"Download manager"}),s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[e.filter(n=>n.status==="downloading").length," active"]})]}),s.jsxs("div",{style:{maxHeight:260,overflow:"auto",padding:12},children:[e.map(n=>s.jsxs("div",{style:{marginBottom:12},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:12,marginBottom:6},children:[s.jsx("span",{style:{color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),s.jsx("span",{style:{color:n.status==="failed"?"var(--danger)":"var(--accent-blue)",fontWeight:800},children:n.status==="failed"?"Failed":`${n.percent}%`})]}),s.jsx(Uo,{value:n.percent})]},n.id)),t.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",fontWeight:800,margin:"10px 0 8px",textTransform:"uppercase"},children:"Recent downloads"}),t.slice(0,4).map(n=>s.jsxs("div",{style:{padding:"8px 0",borderTop:"1px solid var(--border)"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:Wt(n.downloadedAt)})]},n.id))]})]})]})}function eS({title:e,message:t,onConfirm:n,onCancel:r,danger:i=!1}){return s.jsx("div",{className:"modal-backdrop",onClick:r,children:s.jsxs("div",{className:"modal-card",onClick:o=>o.stopPropagation(),children:[s.jsx("div",{style:{fontSize:36,textAlign:"center",marginBottom:16},children:i?"⚠️":"❓"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:8},children:e}),s.jsx("p",{style:{color:"var(--text-secondary)",fontFamily:"var(--font)",fontSize:14,textAlign:"center",marginBottom:28,lineHeight:1.5},children:t}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:r,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:n,className:"btn-primary",style:i?{background:"var(--danger)",boxShadow:"0 10px 28px rgba(248,113,113,.25)"}:void 0,children:i?"Delete":"Confirm"})]})]})})}function tS({file:e,onRename:t,onCancel:n}){const[r,i]=v.useState(e.name),o=v.useRef(null);return v.useEffect(()=>{var a;(a=o.current)==null||a.select()},[]),s.jsx("div",{className:"modal-backdrop",onClick:n,children:s.jsxs("div",{className:"modal-card",onClick:a=>a.stopPropagation(),children:[s.jsx("div",{style:{fontSize:32,textAlign:"center",marginBottom:12},children:"✏️"}),s.jsx("h3",{style:{color:"var(--text)",fontFamily:"var(--font)",fontWeight:700,fontSize:18,textAlign:"center",marginBottom:20},children:"Rename File"}),s.jsx("input",{ref:o,value:r,onChange:a=>i(a.target.value),onKeyDown:a=>a.key==="Enter"&&t(r),className:"input-field",style:{marginBottom:20}}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:n,className:"btn-secondary",children:"Cancel"}),s.jsx("button",{type:"button",onClick:()=>t(r),className:"btn-primary",children:"Rename"})]})]})})}function vg({tags:e}){return e!=null&&e.length?s.jsx("div",{style:{display:"flex",gap:4,marginTop:4,flexWrap:"wrap"},children:e.slice(0,3).map(t=>s.jsx("span",{style:{fontSize:10,padding:"2px 6px",borderRadius:6,background:"rgba(240,22,58,.12)",color:"var(--accent)",fontWeight:600},children:t},t))}):null}function on({label:e,onClick:t,tone:n="neutral",disabled:r=!1}){const i=n==="accent"?"accent":n==="blue"?"blue":"";return s.jsx("button",{type:"button",className:`quick-action-btn ${i}`.trim(),title:e,disabled:r,onClick:o=>{o.stopPropagation(),r||t()},children:e})}function nS({file:e,onDelete:t,onShare:n,onPreview:r,onRename:i,onDownload:o,onMove:a,onCopy:l,onTags:c}){return s.jsxs("div",{className:"file-list-card",children:[s.jsx("div",{style:{fontSize:34,flexShrink:0,width:48,height:48,borderRadius:14,background:"rgba(56,189,248,.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:Vi(e.mimeType)}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:16,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:12,marginTop:3},children:[me(e.size)," · ",Wt(e.createdAt)]}),s.jsx(vg,{tags:e.tags})]}),s.jsxs("div",{className:"file-list-actions",children:[s.jsx(on,{label:"Preview",disabled:!vh(e.mimeType),onClick:()=>r(e),tone:"blue"}),s.jsx(on,{label:"Download",onClick:()=>o(e)}),s.jsx(on,{label:"Share",onClick:()=>n(e),tone:"accent"}),s.jsx(on,{label:"Rename",onClick:()=>i(e)}),s.jsx(pg,{file:e,onMove:a,onCopy:l,onTags:c,onDelete:t})]})]})}function rS({file:e,token:t,onDelete:n,onShare:r,onPreview:i,onRename:o,onDownload:a,onMove:l,onCopy:c,onTags:u}){var h;const p=(h=e.mimeType)==null?void 0:h.startsWith("image/");return s.jsxs("div",{className:"glass-card",style:{borderRadius:"var(--radius-lg)",overflow:"hidden",display:"flex",flexDirection:"column",transition:"var(--transition)"},onMouseEnter:d=>{d.currentTarget.style.transform="translateY(-3px)",d.currentTarget.style.boxShadow="var(--glow)"},onMouseLeave:d=>{d.currentTarget.style.transform="translateY(0)",d.currentTarget.style.boxShadow="none"},children:[s.jsxs("div",{style:{height:170,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(240,253,244,.95), rgba(239,246,255,.95))",borderBottom:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[p?s.jsx(Bw,{fileId:e.id,token:t,alt:e.name,mimeType:e.mimeType}):s.jsx("div",{style:{fontSize:56,display:"flex"},children:Vi(e.mimeType)}),s.jsx("div",{style:{position:"absolute",right:8,bottom:8,fontSize:10,fontWeight:700,background:"#111827",color:"#fff",padding:"2px 6px",borderRadius:6},children:me(e.size)}),s.jsx("div",{style:{position:"absolute",right:10,top:10},children:s.jsx(pg,{file:e,onMove:l,onCopy:c,onTags:u,onDelete:n})})]}),s.jsxs("div",{style:{padding:"14px"},children:[s.jsx("div",{style:{color:"var(--text)",fontWeight:800,fontSize:15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:5},children:e.name}),s.jsxs("div",{style:{color:"var(--text-muted)",fontSize:11},children:[me(e.size)," · ",Wt(e.createdAt)]}),s.jsx(vg,{tags:e.tags}),s.jsxs("div",{className:"grid-actions",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12},children:[s.jsx(on,{label:"Preview",disabled:!vh(e.mimeType),onClick:()=>i(e),tone:"blue"}),s.jsx(on,{label:"Share",onClick:()=>r(e),tone:"accent"}),s.jsx(on,{label:"Download",onClick:()=>a(e)}),s.jsx(on,{label:"Rename",onClick:()=>o(e)})]})]})]})}function iS({account:e,onManage:t}){if(!(e!=null&&e.storageWarning))return null;const n=e.storageWarning==="critical";return s.jsxs("div",{style:{padding:"10px 20px",background:n?"rgba(255,77,77,.12)":"rgba(246,179,71,.12)",borderBottom:`1px solid ${n?"var(--danger)":"var(--accent-amber)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap",fontSize:13,fontFamily:"var(--font)"},children:[s.jsx("span",{children:n?"Storage almost full (95%+).":"Storage over 80% full."}),s.jsx("button",{type:"button",onClick:t,className:"btn-primary",style:{padding:"6px 14px",fontSize:13},children:"Manage storage"})]})}function oS({username:e,stats:t,storagePercent:n,onUpload:r,onNewFolder:i}){const o=(()=>{const a=new Date().getHours();return a<12?"Good morning":a<17?"Good afternoon":"Good evening"})();return s.jsxs("div",{className:"drive-hero",style:{marginBottom:28,padding:"28px 30px",borderRadius:"var(--radius-lg)",background:"#fff",border:"1px solid var(--border)",boxShadow:"0 20px 45px rgba(15,23,42,.08)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:20,flexWrap:"wrap",animation:"floatIn .35s ease"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--accent-blue)",marginBottom:6},children:"My Cloud"}),s.jsxs("h1",{style:{fontSize:28,fontWeight:800,color:"var(--text)",marginBottom:6,lineHeight:1.15},children:[o,", ",e||"there"]}),s.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:14,maxWidth:520},children:[t.totalFiles," files · ",t.totalFolders," folders · ",Math.round(n),"% storage used"]})]}),s.jsxs("div",{className:"drive-hero-actions",style:{display:"flex",gap:10,flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"btn-primary",onClick:r,children:"↑ Upload files"}),s.jsx("button",{type:"button",className:"btn-secondary",onClick:i,children:"⊞ New folder"})]})]})}function sS({children:e,onNavigate:t,onSignOut:n,onUpgrade:r}){const{account:i,notifications:o,unreadCount:a,markAllRead:l}=gg();return s.jsxs(s.Fragment,{children:[s.jsx(kb,{account:i,onOpenSettings:()=>t("settings")}),s.jsx(Sb,{account:i,onUpgrade:r}),s.jsx(iS,{account:i,onManage:()=>t("billing")}),s.jsxs("header",{className:"account-header",style:{position:"sticky",top:0,zIndex:90,height:60,borderBottom:"1px solid var(--border)",background:"rgba(255,255,255,.86)",backdropFilter:"blur(16px)",display:"flex",alignItems:"center",justifyContent:"flex-end",gap:12,padding:"0 28px 0 316px"},children:[s.jsx(_b,{notifications:o,unreadCount:a,onMarkAllRead:l}),s.jsx(bb,{account:i,onNavigate:t,onSignOut:n})]}),e]})}function aS(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?new URLSearchParams(window.location.search).get("token"):null}function nf(){return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/reset-password")?new URLSearchParams(window.location.search).get("token"):null}function lS(){const[e,t]=v.useState(()=>window.innerWidth);return v.useEffect(()=>{const n=()=>t(window.innerWidth);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),{width:e,isMobile:e<=768,isSmall:e<=520}}function cS(){const[e,t]=v.useState(aS),[n,r]=v.useState(nf),[i,o]=v.useState(()=>{const y=localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token"),T=nf();return(window.location.pathname.replace(/\/+$/,"")||"/").endsWith("/verify-email")?"verify-email":T?"reset-password":y?"app":"landing"}),[a,l]=v.useState("login"),[c,u]=v.useState(()=>localStorage.getItem("cv_token")||sessionStorage.getItem("cv_token")||""),[p,h]=v.useState(()=>localStorage.getItem("cv_user")||sessionStorage.getItem("cv_user")||""),[d,x]=v.useState(null),[b,S]=v.useState([]),[O,g]=v.useState([]),[f,m]=v.useState({totalFiles:0,storageUsed:0,storageQuota:1024*1024*1024,totalFolders:0}),[w,E]=v.useState(null),[C,j]=v.useState([]),[I,V]=v.useState(""),[R,pe]=v.useState(!1),[he,be]=v.useState(0),[gt,Sn]=v.useState(null),[Ae,Ke]=v.useState([]),[P,D]=v.useState(()=>{try{return JSON.parse(localStorage.getItem("cv_downloadHistory")||"[]")}catch{return[]}}),[z,Y]=v.useState(null),[ne,Ye]=v.useState(null),[ce,Et]=v.useState(""),[Se,ae]=v.useState(!1),[Ct,Ur]=v.useState(!1),[Te,Ji]=v.useState(()=>localStorage.getItem("cv_viewMode")||"list"),[Kt,Us]=v.useState("all"),[kn,Bs]=v.useState(()=>localStorage.getItem("cv_theme")||"light"),[_n,rt]=v.useState(null),[Kn,Qe]=v.useState(null),[Br,Yn]=v.useState(!1),[k,G]=v.useState("drive"),[Tt,Q]=v.useState("createdAt"),[En,yg]=v.useState("desc"),[qi,xg]=v.useState(""),[Ws,wg]=v.useState([]),[bg,Sg]=v.useState(1),[kg,_g]=v.useState(!1),[Xi,Wr]=v.useState(!1),[Eg,Cg]=v.useState([]),[Tg,Ig]=v.useState([]),[jg,Pg]=v.useState([]),[Vc,Rg]=v.useState(null),[Qn,$r]=v.useState(null),[$s,Hc]=v.useState(null),[Vs,Hs]=v.useState(null),[Gc,Ng]=v.useState("user"),[Kc,Og]=v.useState([]),[Yc,Ag]=v.useState(null),[It,Jn]=v.useState(null),[Lg,Dg]=v.useState([]),[zg,Mg]=v.useState([]),[Fg,Ug]=v.useState([]),Gs=vb(I,400),{isMobile:Zi,isSmall:Bg}=lS(),eo=v.useRef(),Qc=v.useRef(),K=v.useCallback((y,T="info")=>Y({msg:y,type:T}),[]),W=v.useCallback((y,T)=>(console.log("=== API CALL START ==="),console.log("API PATH:",y),console.log("API TOKEN PRESENT:",!!c),console.log("API TOKEN LENGTH:",c==null?void 0:c.length),lt(y,T,c)),[c]),Ie=v.useCallback(async(y=1,T=!1)=>{var F,B;if(c){Wr(!0);try{if(k==="trash"){const Je=await W("/trash");Ig(Tn(Je,"files")),Pg(Tn(Je,"folders")),Wr(!1);return}if(k==="admin"){const[Je,am]=await Promise.all([W("/admin/users?limit=50"),W("/admin/analytics").catch(()=>null)]);Og(Tn(Je,"users")),Ag(am),Wr(!1);return}if(k==="dashboard"){const Je=await W("/storage/usage");Rg(Je),m({totalFiles:Je.fileCount??0,storageUsed:Je.storageUsed??0,storageQuota:Je.storageQuota??1024*1024*1024,totalFolders:Je.folderCount??0}),Wr(!1);return}const U=new URLSearchParams;w&&U.set("folderId",w),Gs&&U.set("search",Gs),qi&&U.set("tag",qi),U.set("sortBy",Tt),U.set("sortOrder",En),U.set("page",String(y)),U.set("limit","30");const[H,it,Cn,Ys,sm]=await Promise.all([W(`/files?${U}`),W(`/folders?${w?`parentId=${w}`:""}`),W("/storage/usage"),W("/files/tags").catch(()=>({tags:[]})),W("/folders?all=true").catch(()=>({folders:[]}))]),Qs=Tn(H,"files"),nu=Tn(it,"folders");S(T?Je=>[...Je,...Qs]:Qs),g(nu),wg((Ys==null?void 0:Ys.tags)||[]),Cg(Tn(sm,"folders")),_g((((F=H==null?void 0:H.pagination)==null?void 0:F.page)||1)<(((B=H==null?void 0:H.pagination)==null?void 0:B.totalPages)||1)),Sg(y),m({totalFiles:Cn.fileCount??Qs.length,storageUsed:Cn.storageUsed??0,storageQuota:Cn.storageQuota??1024*1024*1024,totalFolders:Cn.folderCount??nu.length})}catch(U){console.error("Refresh failed:",U);const H=U.message.toLowerCase();H.includes("credential")||H.includes("unauthorized")||H.includes("token")?(localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),u(""),h(""),o("landing")):K(U.message,"error")}Wr(!1)}},[c,w,Gs,qi,Tt,En,k,W,K]);v.useEffect(()=>{Ie(1,!1)},[Ie]),v.useEffect(()=>{c&&W("/users/me").then(y=>Ng((y==null?void 0:y.role)||"user")).catch(()=>{})},[c,W]),v.useEffect(()=>{if(!c||k==="drive"||k==="trash"||k==="dashboard"||k==="admin")return;(async()=>{try{if(k==="recent"){const T=await W("/dashboard");Dg(T.recentFiles||[])}else if(k==="starred"){const T=await W("/files?isStarred=true&limit=50");Mg(Tn(T,"files"))}else if(k==="shared"){const T=await W("/dashboard"),F=[...T.sharedWithMe||[],...T.sharedByMe||[]].map(B=>B.file||B);Ug(F.filter(Boolean))}}catch{}})()},[c,k,W]);const Wg=y=>{Jn(y),y==="dashboard"&&G("dashboard"),y==="billing"&&Jn("billing")};v.useEffect(()=>{localStorage.setItem("cv_viewMode",Te)},[Te]),v.useEffect(()=>{localStorage.setItem("cv_theme",kn)},[kn]),v.useEffect(()=>{const y=T=>{var F;(F=T.detail)!=null&&F.token&&u(T.detail.token)};return window.addEventListener("cv-token-refreshed",y),()=>window.removeEventListener("cv-token-refreshed",y)},[]);const $g=(y,T,F,B,U=!0)=>{if(!y&&(B!=null&&B.email)){x(B),o("verify-email");return}if(!y)return;const H=U?localStorage:sessionStorage,it=U?sessionStorage:localStorage;H.setItem("cv_token",y),it.removeItem("cv_token"),T&&H.setItem("cv_refreshToken",T),it.removeItem("cv_refreshToken");const Cn=typeof F=="string"?F:(B==null?void 0:B.fullName)||(B==null?void 0:B.email);H.setItem("cv_user",Cn||""),it.removeItem("cv_user"),B!=null&&B.avatarUrl&&H.setItem("cv_avatar",B.avatarUrl),u(y),h(Cn||""),o("app")},Vg=async y=>{const T=`${y.id}-${Date.now()}`;Sn({name:y.name,percent:0}),Ke(F=>[{id:T,name:y.name,percent:0,status:"downloading"},...F].slice(0,6));try{const F=await Pc(y.id,c,{onProgress:U=>{Sn({name:y.name,percent:U}),Ke(H=>H.map(it=>it.id===T?{...it,percent:U}:it))}});Dy(F,y.name);const B={id:T,name:y.name,size:y.size,downloadedAt:new Date().toISOString()};D(U=>{const H=[B,...U].slice(0,12);return localStorage.setItem("cv_downloadHistory",JSON.stringify(H)),H}),Ke(U=>U.map(H=>H.id===T?{...H,percent:100,status:"complete"}:H)),K(`Downloaded "${y.name}"`,"success")}catch(F){Ke(B=>B.map(U=>U.id===T?{...U,status:"failed"}:U)),K(F.message,"error")}Sn(null)},Jc=async()=>{try{const y=localStorage.getItem("cv_refreshToken")||sessionStorage.getItem("cv_refreshToken");await W("/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:y})})}catch{}localStorage.removeItem("cv_token"),localStorage.removeItem("cv_refreshToken"),localStorage.removeItem("cv_user"),sessionStorage.removeItem("cv_token"),sessionStorage.removeItem("cv_refreshToken"),sessionStorage.removeItem("cv_user"),u(""),h(""),o("landing")},qc=async(y,T,F)=>{if(!c)throw new Error("Authentication token missing. Please log in again.");const B=new FormData;return B.append("file",y),T&&B.append("folderId",T),zy("/files/upload",B,c,F)},Hg=async(y,T)=>W("/folders",{method:"POST",body:JSON.stringify({name:y,parentId:T||null})}),Ks=async(y,T=!1)=>{if(!c){K("Please log in again to upload files.","error");return}const F=Array.from(y||[]);if(!F.length)return;pe(!0),be(0);let B=0;try{if(T&&F.some(U=>U.webkitRelativePath))await yb(F,{baseFolderId:w,createFolder:Hg,uploadFile:async(U,H)=>{await qc(U,H,be),B++},onProgress:be});else for(let U=0;U<F.length;U++)try{await qc(F[U],w,H=>{const it=Math.round((U+H/100)/F.length*100);be(it)}),B++}catch(H){K(`Failed to upload "${F[U].name}": ${H.message}`,"error")}}finally{pe(!1),be(0),Ie(1,!1),B>0&&K(`${B} file(s) uploaded successfully!`,"success")}},Gg=y=>{rt({title:"Delete File",message:`Move "${y.name}" to trash? You can restore it later from the Trash view.`,danger:!0,onConfirm:async()=>{rt(null);try{await W(`/files/${y.id}`,{method:"DELETE"}),Ie(),K("File deleted","success")}catch(T){K(T.message,"error")}}})},Kg=y=>{rt({title:"Delete Folder",message:`Delete folder "${y.name}" and all its contents? This cannot be undone.`,danger:!0,onConfirm:async()=>{rt(null);try{await W(`/folders/${y.id}`,{method:"DELETE"}),Ie(),K("Folder deleted","success")}catch(T){K(T.message,"error")}}})},Yg=async(y,T)=>(console.log("=== HANDLE SHARE START ==="),console.log("FILE:",y.name),console.log("PAYLOAD:",T),T.shareType==="user"?W(`/files/${y.id}/share/user`,{method:"POST",body:JSON.stringify({sharedWithEmail:T.sharedWithEmail||T.email,permission:T.permission})}):W(`/files/${y.id}/share`,{method:"POST",body:JSON.stringify(T)})),Qg=async(y,{targetFolderId:T})=>{try{await W(`/files/${y.id}/move`,{method:"POST",body:JSON.stringify({targetFolderId:T})}),$r(null),Ie(1,!1),K("File moved","success")}catch(F){K(F.message,"error")}},Jg=async(y,{targetFolderId:T,newName:F})=>{try{await W(`/files/${y.id}/copy`,{method:"POST",body:JSON.stringify({targetFolderId:T,newName:F!==y.name?F:void 0})}),$r(null),Ie(1,!1),K("File copied","success")}catch(B){K(B.message,"error")}},qg=async(y,T)=>{try{await W(`/files/${y.id}`,{method:"PUT",body:JSON.stringify({tags:T})}),Hs(null),Ie(1,!1),K("Tags updated","success")}catch(F){K(F.message,"error")}},Xg=async y=>{try{await W(`/trash/files/${y}/restore`,{method:"POST"}),Ie(1,!1),K("File restored","success")}catch(T){K(T.message,"error")}},Zg=async y=>{try{await W(`/trash/folders/${y}/restore`,{method:"POST"}),Ie(1,!1),K("Folder restored","success")}catch(T){K(T.message,"error")}},em=y=>{rt({title:"Delete forever",message:`"${y.name}" will be permanently deleted. This cannot be undone.`,danger:!0,onConfirm:async()=>{rt(null);try{await W(`/files/${y.id}/permanent`,{method:"DELETE"}),Ie(1,!1),K("File permanently deleted","success")}catch(T){K(T.message,"error")}}})},tm=()=>{rt({title:"Empty trash",message:"All items in trash will be permanently deleted.",danger:!0,onConfirm:async()=>{rt(null);try{await W("/trash/empty",{method:"POST"}),Ie(1,!1),K("Trash emptied","success")}catch(y){K(y.message,"error")}}})},nm=async(y,T)=>{if(!T.trim()||T===y.name){Qe(null);return}try{await W(`/files/${y.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:T})}),Ie(),K("File renamed","success")}catch(F){K(F.message,"error")}Qe(null)},Xc=async()=>{if(ce.trim()){try{await W("/folders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:ce,parentId:w})}),Ie(),K("Folder created!","success")}catch(y){K(y.message,"error")}Et(""),ae(!1)}},rm=y=>{E(y.id),j(T=>[...T,y]),Yn(!1)},Zc=y=>{y===-1?(E(null),j([])):(E(C[y].id),j(T=>T.slice(0,y+1)))},im=y=>{y.preventDefault(),Ur(!1),y.dataTransfer.files.length>0&&Ks(y.dataTransfer.files)},to=v.useMemo(()=>{const y=fd.find(T=>T.key===Kt);return!y||y.key==="all"?b:b.filter(T=>y.test(T.mimeType||""))},[b,Kt]),eu=f.storageQuota||1024*1024*1024,tu=Math.min(100,f.storageUsed/eu*100);if(e)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Mn}),s.jsx(Yd,{token:e,onVerified:()=>{t(null),window.history.replaceState({},"","/"),o("auth"),l("login")},onBack:()=>{t(null),window.history.replaceState({},"","/"),o("auth"),l("login")}})]});if(n)return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Mn}),s.jsx(Zd,{token:n,onBack:()=>{r(null),window.history.replaceState({},"","/"),o("auth"),l("login")}})]});if(i==="landing"&&!c)return s.jsx(Vy,{onGetStarted:()=>{l("register"),o("auth")},onLogin:()=>{l("login"),o("auth")},onSignUp:()=>{l("register"),o("auth")}});if(i==="auth"&&!c)return s.jsx(Mw,{initialMode:a,onAuth:$g,onNeedsVerification:y=>{x(y),o("verify-email")},onBack:()=>o("landing")});if(i==="verify-email"&&!c)return s.jsx(Yd,{email:d==null?void 0:d.email,onVerified:()=>{x(null),o("auth"),l("login")},onBack:()=>{x(null),o("auth"),l("login")}});if(i==="reset-password"&&!c)return s.jsx(Zd,{token:n,onSuccess:()=>{r(null),window.history.replaceState({},"","/"),o("auth"),l("login")},onBack:()=>{r(null),o("auth"),l("login")}});const om=Te==="grid"?rS:nS;return s.jsx(wb,{token:c,children:s.jsx(sS,{onNavigate:y=>{Jn(null),Wg(y)},onSignOut:Jc,onUpgrade:()=>{Jn("billing"),G("drive")},children:s.jsxs("div",{"data-theme":kn,className:"app-shell",children:[s.jsx("style",{children:Mn}),s.jsx("button",{type:"button",className:"mobile-menu-button",onClick:()=>Yn(y=>!y),style:{display:"none",position:"fixed",top:16,left:16,zIndex:200,background:"var(--bg-card)",border:"1.5px solid var(--border)",borderRadius:10,width:40,height:40,alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--text)",fontSize:20,...Zi?{display:"flex"}:{}},children:"☰"}),Br&&Zi&&s.jsx("div",{onClick:()=>Yn(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:99}}),s.jsxs("div",{className:`sidebar ${Br?"open":""}`,style:{position:"fixed",left:0,top:0,bottom:0,width:296,background:"var(--bg-sidebar)",borderRight:"1px solid var(--border)",padding:"20px 18px",display:"flex",flexDirection:"column",gap:7,zIndex:100,transition:"transform .3s cubic-bezier(.4,0,.2,1)",...Zi?{transform:Br?"translateX(0)":"translateX(-100%)"}:{}},children:[s.jsxs("div",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:10},children:[s.jsx("div",{style:{width:44,height:44,borderRadius:999,background:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,boxShadow:"0 10px 24px rgba(20,184,166,.24)",flexShrink:0},children:De.logo}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:26,fontWeight:800,color:"var(--text)"},children:De.name}),s.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:1},children:["@",p]})]})]}),[{id:"drive",icon:De.logo,label:"My Cloud"},{id:"recent",icon:"🕘",label:"Recent"},{id:"starred",icon:"★",label:"Starred"},{id:"shared",icon:"🔗",label:"Shared"},{id:"dashboard",icon:"📊",label:"Storage"},{id:"trash",icon:"🗑",label:"Trash"},{id:"activity",icon:"📋",label:"Activity"},...Gc==="admin"||Gc==="super_admin"?[{id:"admin",icon:"⚙",label:"Admin"}]:[]].map(y=>s.jsxs("button",{type:"button",className:`nav-item${k===y.id?" active":""}`,onClick:()=>{Jn(null),G(y.id),Yn(!1),y.id==="drive"&&(E(null),j([]))},children:[y.icon," ",y.label]},y.id)),s.jsx("div",{style:{borderTop:"1px solid var(--border)",margin:"12px 0 8px"}}),s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1px",marginBottom:8,paddingLeft:4},children:"OVERVIEW"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16},children:[s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:f.totalFiles}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Files"})]}),s.jsxs("div",{className:"stat-mini",children:[s.jsx("div",{style:{fontSize:22,fontWeight:800,color:"var(--text)"},children:f.totalFolders}),s.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:2},children:"Folders"})]})]}),s.jsxs("div",{style:{marginTop:"auto"},children:[s.jsxs("div",{style:{marginBottom:16,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"14px",border:"1px solid var(--border)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--text-secondary)",marginBottom:8},children:[s.jsx("span",{style:{fontWeight:600},children:"Free"}),s.jsxs("span",{children:[me(f.storageUsed)," of ",me(eu)," used"]})]}),s.jsx(Uo,{value:tu})]}),s.jsx("button",{type:"button",onClick:Jc,className:"btn-danger",children:"Sign Out"})]})]}),s.jsxs("div",{className:"main-content",style:{marginLeft:Zi?0:296,padding:"24px 32px",minHeight:"100vh",paddingTop:18},children:[s.jsx(uS,{appPage:It,setAppPage:Jn,api:W,token:c,notify:K,stats:f,usageDetail:Vc,adminUsers:Kc,systemHealth:Yc,loading:Xi,onRefreshAccount:()=>{}}),!It&&k==="recent"&&s.jsx(Aa,{title:"Recent files",files:Lg,emptyMessage:"No recent files yet.",onBack:()=>G("drive"),onOpen:Ye}),!It&&k==="starred"&&s.jsx(Aa,{title:"Starred",files:zg,emptyMessage:"Star files to see them here.",onBack:()=>G("drive"),onOpen:Ye}),!It&&k==="shared"&&s.jsx(Aa,{title:"Shared with you",files:Fg,emptyMessage:"Nothing shared yet.",onBack:()=>G("drive"),onOpen:Ye}),!It&&k==="activity"&&s.jsx(Gb,{api:W,onBack:()=>G("drive")}),!It&&k==="trash"&&s.jsx(Ww,{trashedFiles:Tg,trashedFolders:jg,loading:Xi,onRestoreFile:Xg,onRestoreFolder:Zg,onPermanentDelete:em,onEmptyTrash:tm,onBack:()=>G("drive")}),!It&&k==="dashboard"&&s.jsx(lb,{stats:f,usage:Vc,onBack:()=>G("drive")}),!It&&k==="admin"&&s.jsx(ub,{users:Kc,systemHealth:Yc,loading:Xi,onBack:()=>G("drive")}),!It&&k==="drive"&&s.jsxs(s.Fragment,{children:[s.jsx(oS,{username:p,stats:f,storagePercent:tu,onUpload:()=>{var y;return(y=eo.current)==null?void 0:y.click()},onNewFolder:()=>ae(!0)}),s.jsxs("div",{className:"drive-toolbar",children:[s.jsxs("div",{className:"drive-search",style:{flex:1,position:"relative",minWidth:200},children:[s.jsx("span",{style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:16,opacity:.5},children:"🔍"}),s.jsx("input",{className:"input-field",placeholder:`Search ${De.name}…`,value:I,onChange:y=>V(y.target.value),style:{width:"100%",maxWidth:520,padding:"12px 14px 12px 42px"}})]}),s.jsx("button",{type:"button",className:"icon-btn",title:kn==="dark"?"Light mode":"Dark mode",onClick:()=>Bs(y=>y==="dark"?"light":"dark"),children:kn==="dark"?"☀":"🌙"}),s.jsxs("div",{className:"view-toggle",children:[s.jsx("button",{type:"button",onClick:()=>Ji("list"),className:`view-toggle-btn${Te==="list"?" active":""}`,children:"☰"}),s.jsx("button",{type:"button",onClick:()=>Ji("grid"),className:`view-toggle-btn${Te==="grid"?" active":""}`,children:"▦"})]}),k==="drive"&&s.jsxs("div",{className:"drive-actions",children:[s.jsx("button",{type:"button",onClick:()=>ae(y=>!y),className:"btn-secondary",children:"⊞ New folder"}),s.jsx("button",{type:"button",onClick:()=>{var y;return(y=eo.current)==null?void 0:y.click()},className:"btn-primary",children:"↑ Upload"}),s.jsx("button",{type:"button",onClick:()=>{var y;return(y=Qc.current)==null?void 0:y.click()},className:"btn-secondary",children:"📁 Folder"}),s.jsx("input",{ref:eo,type:"file",multiple:!0,hidden:!0,onChange:y=>{Ks(y.target.files),y.target.value=""}}),s.jsx("input",{ref:Qc,type:"file",multiple:!0,webkitdirectory:"",hidden:!0,onChange:y=>{Ks(y.target.files,!0),y.target.value=""}})]})]}),k==="drive"&&s.jsxs("div",{className:"drive-sortbar",children:[s.jsxs("select",{value:Tt,onChange:y=>Q(y.target.value),className:"select-field",children:[s.jsx("option",{value:"createdAt",children:"Date"}),s.jsx("option",{value:"name",children:"Name"}),s.jsx("option",{value:"size",children:"Size"}),s.jsx("option",{value:"updatedAt",children:"Modified"})]}),s.jsxs("select",{value:En,onChange:y=>yg(y.target.value),className:"select-field",children:[s.jsx("option",{value:"desc",children:"Descending"}),s.jsx("option",{value:"asc",children:"Ascending"})]}),Ws.length>0&&s.jsxs("select",{value:qi,onChange:y=>xg(y.target.value),className:"select-field",style:{gridColumn:Bg?"1 / -1":void 0},children:[s.jsx("option",{value:"",children:"All tags"}),Ws.map(y=>s.jsx("option",{value:y,children:y},y))]})]}),k==="drive"&&s.jsx("div",{className:"filter-chips",children:fd.map(y=>s.jsxs("button",{type:"button",onClick:()=>Us(y.key),className:`filter-chip${Kt===y.key?" active":""}`,children:[s.jsx("span",{children:y.icon})," ",y.label]},y.key))}),k==="drive"&&Se&&s.jsxs("div",{className:"new-folder-row",style:{display:"flex",gap:10,marginBottom:20,animation:"fadeIn .2s ease"},children:[s.jsx("input",{className:"input-field",placeholder:"Folder name…",value:ce,onChange:y=>Et(y.target.value),onKeyDown:y=>y.key==="Enter"&&Xc(),style:{width:260},autoFocus:!0}),s.jsx("button",{type:"button",onClick:Xc,className:"btn-primary",children:"Create"}),s.jsx("button",{type:"button",onClick:()=>ae(!1),className:"btn-secondary",children:"Cancel"})]}),s.jsxs("div",{className:"breadcrumb-row",style:{alignItems:"center",gap:8,marginBottom:20,fontSize:14,color:"var(--text-muted)"},children:[s.jsxs("span",{onClick:()=>Zc(-1),className:"breadcrumb-link",style:{color:w?"var(--text-secondary)":"var(--accent)"},children:[De.logo," Home"]}),C.map((y,T)=>s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--text-muted)"},children:"›"}),s.jsx("span",{onClick:()=>Zc(T),className:"breadcrumb-link",style:{color:T===C.length-1?"var(--accent)":"var(--text-secondary)"},children:y.name})]},y.id))]}),R&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(240,22,58,.24)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(tf,{size:14})," Uploading…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent)"},children:[he,"%"]})]}),s.jsx(Uo,{value:he})]}),gt&&s.jsxs("div",{style:{marginBottom:18,background:"var(--bg-card)",borderRadius:"var(--radius)",padding:"16px 20px",border:"1.5px solid rgba(64,144,255,.3)",animation:"fadeIn .2s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--text-secondary)",marginBottom:10},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(tf,{size:14,color:"var(--accent-blue)"})," Downloading ",gt.name,"…"]}),s.jsxs("span",{style:{fontWeight:700,color:"var(--accent-blue)"},children:[gt.percent,"%"]})]}),s.jsx(Uo,{value:gt.percent})]}),s.jsx("div",{onDragOver:y=>{y.preventDefault(),Ur(!0)},onDragLeave:()=>Ur(!1),onDrop:im,className:`drop-zone${Ct?" drag-over":""}`,children:Ct?s.jsx("span",{style:{color:"var(--accent)",fontWeight:700,fontSize:16},children:"⬇ Drop files here to upload"}):s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:32,marginBottom:8},children:"📤"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:700,marginBottom:4},children:"Drag & drop files or folders"}),s.jsx("div",{style:{fontSize:13},children:"or use the Upload button above"})]})}),O.length>0&&s.jsxs("div",{style:{marginBottom:28},children:[s.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px",marginBottom:12},children:"FOLDERS"}),s.jsx("div",{className:"folder-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:O.map(y=>s.jsx(dS,{folder:y,onOpen:rm,onDelete:Kg},y.id))})]}),s.jsxs("div",{children:[s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:s.jsxs("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",letterSpacing:"1.5px"},children:["FILES ",to.length>0&&s.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:500},children:["(",to.length,")"]})]})}),Xi?s.jsx(mb,{count:6,grid:Te==="grid"}):to.length===0?s.jsxs("div",{className:"glass-card empty-state",style:{textAlign:"center",padding:"72px 32px",borderRadius:"var(--radius-lg)",border:"1.5px dashed var(--border)",animation:"fadeIn .3s ease"},children:[s.jsx("div",{style:{width:88,height:88,margin:"0 auto 20px",borderRadius:24,background:"var(--gradient-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"var(--glow)"},children:"☁️"}),s.jsx("div",{style:{fontWeight:800,fontSize:20,marginBottom:8,color:"var(--text)"},children:Kt!=="all"?"No matching files":"Your cloud is empty"}),s.jsx("div",{style:{fontSize:14,color:"var(--text-muted)",marginBottom:24,maxWidth:360,margin:"0 auto 24px"},children:Kt!=="all"?"Try a different filter or upload new files.":"Upload photos, documents, and more. Everything stays secure in your drive."}),Kt==="all"&&s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"btn-primary",onClick:()=>{var y;return(y=eo.current)==null?void 0:y.click()},children:"↑ Upload your first file"}),s.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>ae(!0),children:"⊞ Create folder"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`file-grid${Te==="grid"?" grid-view":""}`,style:{display:Te==="grid"?"grid":"flex",gridTemplateColumns:Te==="grid"?"repeat(auto-fill, minmax(250px, 1fr))":void 0,flexDirection:Te==="list"?"column":void 0,gap:Te==="grid"?12:8},children:to.map(y=>s.jsx(om,{file:y,token:c,onDelete:Gg,onShare:T=>Hc(T),onPreview:Ye,onRename:Qe,onDownload:Vg,onMove:T=>$r({file:T,mode:"move"}),onCopy:T=>$r({file:T,mode:"copy"}),onTags:Hs},y.id))}),kg&&s.jsx("button",{type:"button",onClick:()=>Ie(bg+1,!0),className:"load-more-btn",children:"Load more files"})]})]})]})]}),ne&&s.jsx(Uw,{file:ne,token:c,onClose:()=>Ye(null)}),Qn&&s.jsx(Hw,{file:Qn.file,mode:Qn.mode,folders:xb(Eg),currentFolderId:w,onCancel:()=>$r(null),onConfirm:y=>Qn.mode==="move"?Qg(Qn.file,y):Jg(Qn.file,y)}),Vs&&s.jsx(Kw,{file:Vs,allTags:Ws,onCancel:()=>Hs(null),onSave:y=>qg(Vs,y)}),$s&&s.jsx(Qw,{file:$s,onCancel:()=>Hc(null),onShare:y=>Yg($s,y)}),_n&&s.jsx(eS,{title:_n.title,message:_n.message,danger:_n.danger,onConfirm:_n.onConfirm,onCancel:()=>rt(null)}),Kn&&s.jsx(tS,{file:Kn,onRename:y=>nm(Kn,y),onCancel:()=>Qe(null)}),s.jsx(Zb,{jobs:Ae,history:P}),z&&s.jsx(Xb,{msg:z.msg,type:z.type,onClose:()=>Y(null)})]})})})}function uS({appPage:e,setAppPage:t,api:n,notify:r,stats:i,usageDetail:o,adminUsers:a,systemHealth:l,loading:c,onRefreshAccount:u}){const{account:p,refreshAll:h}=gg();if(!e)return null;const d=()=>t(null);return e==="profile"?s.jsx(Cb,{account:p,onBack:d}):e==="settings"?s.jsx(Pb,{account:p,api:n,onBack:d,onUpdated:()=>h(),notify:r,theme,onThemeChange:setTheme}):e==="security"?s.jsx(Lb,{api:n,account:p,onBack:d,notify:r}):e==="billing"?s.jsx(Ub,{account:p,api:n,onBack:d,notify:r,onUpdated:()=>h()}):e==="help"?s.jsx(Wb,{onBack:d}):null}function dS({folder:e,onOpen:t,onDelete:n}){const[r,i]=v.useState(!1);return s.jsxs("div",{className:"folder-card",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>t(e),children:[s.jsx("span",{style:{fontSize:24},children:"📁"}),s.jsx("div",{style:{flex:1,minWidth:0},children:s.jsx("div",{style:{fontWeight:600,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},children:e.name})}),s.jsx("button",{onClick:o=>{o.stopPropagation(),n(e)},style:{background:"none",border:"none",color:"rgba(255,100,100,.3)",cursor:"pointer",fontSize:14,padding:4,borderRadius:6,opacity:r?1:0,transition:"opacity .15s"},children:"🗑"})]})}mh(document.getElementById("root")).render(s.jsx(v.StrictMode,{children:s.jsx(cS,{})}));
