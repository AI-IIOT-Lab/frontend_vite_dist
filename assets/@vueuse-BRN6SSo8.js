import{s as e,w as t,r as n,b as o,e as r,u as i,f as a,g as u,h as l,i as s,j as c,n as d,k as v}from"./@vue-CrLKbyvS.js";var f,p=Object.defineProperty,m=Object.defineProperties,w=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function h(o,r){const i=e();var a,u;return t((()=>{i.value=o()}),(a=((e,t)=>{for(var n in t||(t={}))b.call(t,n)&&g(e,n,t[n]);if(y)for(var n of y(t))O.call(t,n)&&g(e,n,t[n]);return e})({},r),u={flush:null!=void 0?void 0:"sync"},m(a,w(u)))),n(i)}const P="undefined"!=typeof window,E=e=>"function"==typeof e,I=()=>{},j=P&&(null==(f=null==window?void 0:window.navigator)?void 0:f.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function S(e){return"function"==typeof e?e():i(e)}function x(e,t){return function(...n){return new Promise(((o,r)=>{Promise.resolve(e((()=>t.apply(this,n)),{fn:t,thisArg:this,args:n})).then(o).catch(r)}))}}function T(e){return!!u()&&(l(e),!0)}function A(e,t=200,n={}){return x(function(e,t={}){let n,o,r=I;const i=e=>{clearTimeout(e),r(),r=I};return a=>{const u=S(e),l=S(t.maxWait);return n&&i(n),u<=0||void 0!==l&&l<=0?(o&&(i(o),o=null),Promise.resolve(a())):new Promise(((e,s)=>{r=t.rejectOnCancel?s:e,l&&!o&&(o=setTimeout((()=>{n&&i(n),o=null,e(a())}),l)),n=setTimeout((()=>{o&&i(o),o=null,e(a())}),u)}))}}(t,n),e)}function N(e,t=200,n={}){const i=o(e.value),a=A((()=>{i.value=e.value}),t,n);return r(e,(()=>a())),i}function C(e,t=200,n=!1,o=!0,r=!1){return x(function(e,t=!0,n=!0,o=!1){let r,i,a=0,u=!0,l=I;const s=()=>{r&&(clearTimeout(r),r=void 0,l(),l=I)};return c=>{const d=S(e),v=Date.now()-a,f=()=>i=c();return s(),d<=0?(a=Date.now(),f()):(v>d&&(n||!u)?(a=Date.now(),f()):t&&(i=new Promise(((e,t)=>{l=o?t:e,r=setTimeout((()=>{a=Date.now(),u=!0,e(f()),s()}),Math.max(0,d-v))}))),n||r||(r=setTimeout((()=>u=!0),d)),u=!1,i)}}(t,n,o,r),e)}function Q(e,t=!0){s()?c(e):t?e():d(e)}function k(e,t,r={}){const{immediate:i=!0}=r,a=o(!1);let u=null;function l(){u&&(clearTimeout(u),u=null)}function s(){a.value=!1,l()}function c(...n){l(),a.value=!0,u=setTimeout((()=>{a.value=!1,u=null,e(...n)}),S(t))}return i&&(a.value=!0,P&&c()),T(s),{isPending:n(a),start:c,stop:s}}function D(e){var t;const n=S(e);return null!=(t=null==n?void 0:n.$el)?t:n}const R=P?window:void 0,B=P?window.document:void 0;function W(...e){let t,n,o,i;if("string"==typeof e[0]||Array.isArray(e[0])?([n,o,i]=e,t=R):[t,n,o,i]=e,!t)return I;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const a=[],u=()=>{a.forEach((e=>e())),a.length=0},l=r((()=>[D(t),S(i)]),(([e,t])=>{u(),e&&a.push(...n.flatMap((n=>o.map((o=>((e,t,n,o)=>(e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)))(e,n,o,t))))))}),{immediate:!0,flush:"post"}),s=()=>{l(),u()};return T(s),s}let _=!1;function z(e,t,n={}){const{window:o=R,ignore:r=[],capture:i=!0,detectIframe:a=!1}=n;if(!o)return;j&&!_&&(_=!0,Array.from(o.document.body.children).forEach((e=>e.addEventListener("click",I))));let u=!0;const l=e=>r.some((t=>{if("string"==typeof t)return Array.from(o.document.querySelectorAll(t)).some((t=>t===e.target||e.composedPath().includes(t)));{const n=D(t);return n&&(e.target===n||e.composedPath().includes(n))}})),s=[W(o,"click",(n=>{const o=D(e);o&&o!==n.target&&!n.composedPath().includes(o)&&(0===n.detail&&(u=!l(n)),u?t(n):u=!0)}),{passive:!0,capture:i}),W(o,"pointerdown",(t=>{const n=D(e);n&&(u=!t.composedPath().includes(n)&&!l(t))}),{passive:!0}),a&&W(o,"blur",(n=>{var r;const i=D(e);"IFRAME"!==(null==(r=o.document.activeElement)?void 0:r.tagName)||(null==i?void 0:i.contains(o.document.activeElement))||t(n)}))].filter(Boolean);return()=>s.forEach((e=>e()))}function H(e={}){var t;const{window:n=R}=e,i=null!=(t=e.document)?t:null==n?void 0:n.document,u=function(e,t){let n,i,u;const l=o(!0),s=()=>{l.value=!0,u()};r(e,s,{flush:"sync"});const c=E(t)?t:t.get,d=E(t)?void 0:t.set,v=a(((e,t)=>(i=e,u=t,{get:()=>(l.value&&(n=c(),l.value=!1),i(),n),set(e){null==d||d(e)}})));return Object.isExtensible(v)&&(v.trigger=s),v}((()=>null),(()=>null==i?void 0:i.activeElement));return n&&(W(n,"blur",(e=>{null===e.relatedTarget&&u.trigger()}),!0),W(n,"focus",u.trigger,!0)),u}function L(e,t=!1){const n=o(),r=()=>n.value=Boolean(e());return r(),Q(r,t),n}const M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},F="__vueuse_ssr_handlers__";function V(e,t,{window:n=R,initialValue:i=""}={}){const a=o(i),u=v((()=>{var e;return D(t)||(null==(e=null==n?void 0:n.document)?void 0:e.documentElement)}));return r([u,()=>S(e)],(([e,t])=>{var o;if(e&&n){const r=null==(o=n.getComputedStyle(e).getPropertyValue(t))?void 0:o.trim();a.value=r||i}}),{immediate:!0}),r(a,(t=>{var n;(null==(n=u.value)?void 0:n.style)&&u.value.style.setProperty(S(e),t)})),a}function $({document:e=B}={}){if(!e)return o("visible");const t=o(e.visibilityState);return W(e,"visibilitychange",(()=>{t.value=e.visibilityState})),t}M[F]=M[F]||{};var G=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;function q(e,t,n={}){const o=n,{window:i=R}=o,a=((e,t)=>{var n={};for(var o in e)J.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&G)for(var o of G(e))t.indexOf(o)<0&&U.call(e,o)&&(n[o]=e[o]);return n})(o,["window"]);let u;const l=L((()=>i&&"ResizeObserver"in i)),s=()=>{u&&(u.disconnect(),u=void 0)},c=r((()=>D(e)),(e=>{s(),l.value&&i&&e&&(u=new ResizeObserver(t),u.observe(e,a))}),{immediate:!0,flush:"post"}),d=()=>{s(),c()};return T(d),{isSupported:l,stop:d}}function K(e,t={}){const{reset:n=!0,windowResize:i=!0,windowScroll:a=!0,immediate:u=!0}=t,l=o(0),s=o(0),c=o(0),d=o(0),v=o(0),f=o(0),p=o(0),m=o(0);function w(){const t=D(e);if(!t)return void(n&&(l.value=0,s.value=0,c.value=0,d.value=0,v.value=0,f.value=0,p.value=0,m.value=0));const o=t.getBoundingClientRect();l.value=o.height,s.value=o.bottom,c.value=o.left,d.value=o.right,v.value=o.top,f.value=o.width,p.value=o.x,m.value=o.y}return q(e,w),r((()=>D(e)),(e=>!e&&w())),a&&W("scroll",w,{capture:!0,passive:!0}),i&&W("resize",w,{passive:!0}),Q((()=>{u&&w()})),{height:l,bottom:s,left:c,right:d,top:v,width:f,x:p,y:m,update:w}}var X,Y,Z=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;function ne(e,t,n={}){const o=n,{window:i=R}=o,a=((e,t)=>{var n={};for(var o in e)ee.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&Z)for(var o of Z(e))t.indexOf(o)<0&&te.call(e,o)&&(n[o]=e[o]);return n})(o,["window"]);let u;const l=L((()=>i&&"MutationObserver"in i)),s=()=>{u&&(u.disconnect(),u=void 0)},c=r((()=>D(e)),(e=>{s(),l.value&&i&&e&&(u=new MutationObserver(t),u.observe(e,a))}),{immediate:!0}),d=()=>{s(),c()};return T(d),{isSupported:l,stop:d}}(Y=X||(X={})).UP="UP",Y.RIGHT="RIGHT",Y.DOWN="DOWN",Y.LEFT="LEFT",Y.NONE="NONE";var oe=Object.defineProperty,re=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,ue=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function le(e,t,n,i={}){var a,u,l;const{clone:c=!1,passive:d=!1,eventName:f,deep:p=!1,defaultValue:m}=i,w=s(),y=n||(null==w?void 0:w.emit)||(null==(a=null==w?void 0:w.$emit)?void 0:a.bind(w))||(null==(l=null==(u=null==w?void 0:w.proxy)?void 0:u.$emit)?void 0:l.bind(null==w?void 0:w.proxy));let b=f;t||(t="modelValue"),b=f||b||`update:${t.toString()}`;const O=e=>{return c?E(c)?c(e):(t=e,JSON.parse(JSON.stringify(t))):e;var t},g=()=>void 0!==e[t]?O(e[t]):m;if(d){const n=g(),i=o(n);return r((()=>e[t]),(e=>i.value=O(e))),r(i,(n=>{(n!==e[t]||p)&&y(b,n)}),{deep:p}),i}return v({get:()=>g(),set(e){y(b,e)}})}function se({window:e=R}={}){if(!e)return o(!1);const t=o(e.document.hasFocus());return W(e,"blur",(()=>{t.value=!1})),W(e,"focus",(()=>{t.value=!0})),t}function ce(e={}){const{window:t=R,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:i=!0,includeScrollbar:a=!0}=e,u=o(n),l=o(r),s=()=>{t&&(a?(u.value=t.innerWidth,l.value=t.innerHeight):(u.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return s(),Q(s),W("resize",s,{passive:!0}),i&&W("orientationchange",s,{passive:!0}),{width:u,height:l}}((e,t)=>{for(var n in t||(t={}))ie.call(t,n)&&ue(e,n,t[n]);if(re)for(var n of re(t))ae.call(t,n)&&ue(e,n,t[n])})({linear:function(e){return e}},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});export{W as a,ce as b,K as c,q as d,C as e,V as f,k as g,j as h,P as i,ne as j,$ as k,se as l,h as m,le as n,z as o,H as p,N as r,T as t,D as u};
