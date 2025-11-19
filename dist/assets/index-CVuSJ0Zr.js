(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const se={},Ts=[],wn=()=>{},zf=()=>!1,Qo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Pc=n=>n.startsWith("onUpdate:"),Ne=Object.assign,Lc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},im=Object.prototype.hasOwnProperty,Jt=(n,t)=>im.call(n,t),Gt=Array.isArray,bs=n=>ta(n)==="[object Map]",Hf=n=>ta(n)==="[object Set]",kt=n=>typeof n=="function",Ee=n=>typeof n=="string",yi=n=>typeof n=="symbol",ue=n=>n!==null&&typeof n=="object",Vf=n=>(ue(n)||kt(n))&&kt(n.then)&&kt(n.catch),Gf=Object.prototype.toString,ta=n=>Gf.call(n),sm=n=>ta(n).slice(8,-1),kf=n=>ta(n)==="[object Object]",Dc=n=>Ee(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ar=Cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},rm=/-\w/g,_i=ea(n=>n.replace(rm,t=>t.slice(1).toUpperCase())),om=/\B([A-Z])/g,Xi=ea(n=>n.replace(om,"-$1").toLowerCase()),Wf=ea(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ma=ea(n=>n?`on${Wf(n)}`:""),di=(n,t)=>!Object.is(n,t),Eo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Xf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Ic=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Cu;const na=()=>Cu||(Cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Uc(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ee(i)?um(i):Uc(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ee(n)||ue(n))return n}const am=/;(?![^(]*\))/g,lm=/:([^]+)/,cm=/\/\*[^]*?\*\//g;function um(n){const t={};return n.replace(cm,"").split(am).forEach(e=>{if(e){const i=e.split(lm);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Nc(n){let t="";if(Ee(n))t=n;else if(Gt(n))for(let e=0;e<n.length;e++){const i=Nc(n[e]);i&&(t+=i+" ")}else if(ue(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const hm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fm=Cc(hm);function Yf(n){return!!n||n===""}const qf=n=>!!(n&&n.__v_isRef===!0),Oc=n=>Ee(n)?n:n==null?"":Gt(n)||ue(n)&&(n.toString===Gf||!kt(n.toString))?qf(n)?Oc(n.value):JSON.stringify(n,Kf,2):String(n),Kf=(n,t)=>qf(t)?Kf(n,t.value):bs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Sa(i,r)+" =>"]=s,e),{})}:Hf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Sa(e))}:yi(t)?Sa(t):ue(t)&&!Gt(t)&&!kf(t)?String(t):t,Sa=(n,t="")=>{var e;return yi(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class dm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ke,!t&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Ke;try{return Ke=this,t()}finally{Ke=e}}}on(){++this._on===1&&(this.prevScope=Ke,Ke=this)}off(){this._on>0&&--this._on===0&&(Ke=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function pm(){return Ke}let oe;const Ea=new WeakSet;class jf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ke&&Ke.active&&Ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ea.has(this)&&(Ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$f(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pu(this),Jf(this);const t=oe,e=vn;oe=this,vn=!0;try{return this.fn()}finally{Qf(this),oe=t,vn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)zc(t);this.deps=this.depsTail=void 0,Pu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vl(this)&&this.run()}get dirty(){return vl(this)}}let Zf=0,lr,cr;function $f(n,t=!1){if(n.flags|=8,t){n.next=cr,cr=n;return}n.next=lr,lr=n}function Fc(){Zf++}function Bc(){if(--Zf>0)return;if(cr){let t=cr;for(cr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;lr;){let t=lr;for(lr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Jf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Qf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),zc(i),mm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function vl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(td(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function td(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Er)||(n.globalVersion=Er,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!vl(n))))return;n.flags|=2;const t=n.dep,e=oe,i=vn;oe=n,vn=!0;try{Jf(n);const s=n.fn(n._value);(t.version===0||di(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{oe=e,vn=i,Qf(n),n.flags&=-3}}function zc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)zc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function mm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let vn=!0;const ed=[];function jn(){ed.push(vn),vn=!1}function Zn(){const n=ed.pop();vn=n===void 0?!0:n}function Pu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=oe;oe=void 0;try{t()}finally{oe=e}}}let Er=0;class gm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!oe||!vn||oe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==oe)e=this.activeLink=new gm(oe,this),oe.deps?(e.prevDep=oe.depsTail,oe.depsTail.nextDep=e,oe.depsTail=e):oe.deps=oe.depsTail=e,nd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=oe.depsTail,e.nextDep=void 0,oe.depsTail.nextDep=e,oe.depsTail=e,oe.deps===e&&(oe.deps=i)}return e}trigger(t){this.version++,Er++,this.notify(t)}notify(t){Fc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Bc()}}}function nd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)nd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const xl=new WeakMap,Hi=Symbol(""),yl=Symbol(""),Tr=Symbol("");function Ie(n,t,e){if(vn&&oe){let i=xl.get(n);i||xl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Hc),s.map=i,s.key=e),s.track()}}function kn(n,t,e,i,s,r){const o=xl.get(n);if(!o){Er++;return}const a=l=>{l&&l.trigger()};if(Fc(),t==="clear")o.forEach(a);else{const l=Gt(n),c=l&&Dc(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Tr||!yi(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Tr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Hi)),bs(n)&&a(o.get(yl)));break;case"delete":l||(a(o.get(Hi)),bs(n)&&a(o.get(yl)));break;case"set":bs(n)&&a(o.get(Hi));break}}Bc()}function $i(n){const t=$t(n);return t===n?t:(Ie(t,"iterate",Tr),xn(n)?t:t.map(He))}function Vc(n){return Ie(n=$t(n),"iterate",Tr),n}const _m={__proto__:null,[Symbol.iterator](){return Ta(this,Symbol.iterator,He)},concat(...n){return $i(this).concat(...n.map(t=>Gt(t)?$i(t):t))},entries(){return Ta(this,"entries",n=>(n[1]=He(n[1]),n))},every(n,t){return In(this,"every",n,t,void 0,arguments)},filter(n,t){return In(this,"filter",n,t,e=>e.map(He),arguments)},find(n,t){return In(this,"find",n,t,He,arguments)},findIndex(n,t){return In(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return In(this,"findLast",n,t,He,arguments)},findLastIndex(n,t){return In(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return In(this,"forEach",n,t,void 0,arguments)},includes(...n){return ba(this,"includes",n)},indexOf(...n){return ba(this,"indexOf",n)},join(n){return $i(this).join(n)},lastIndexOf(...n){return ba(this,"lastIndexOf",n)},map(n,t){return In(this,"map",n,t,void 0,arguments)},pop(){return qs(this,"pop")},push(...n){return qs(this,"push",n)},reduce(n,...t){return Lu(this,"reduce",n,t)},reduceRight(n,...t){return Lu(this,"reduceRight",n,t)},shift(){return qs(this,"shift")},some(n,t){return In(this,"some",n,t,void 0,arguments)},splice(...n){return qs(this,"splice",n)},toReversed(){return $i(this).toReversed()},toSorted(n){return $i(this).toSorted(n)},toSpliced(...n){return $i(this).toSpliced(...n)},unshift(...n){return qs(this,"unshift",n)},values(){return Ta(this,"values",He)}};function Ta(n,t,e){const i=Vc(n),s=i[t]();return i!==n&&!xn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const vm=Array.prototype;function In(n,t,e,i,s,r){const o=Vc(n),a=o!==n&&!xn(n),l=o[t];if(l!==vm[t]){const h=l.apply(n,r);return a?He(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,He(h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Lu(n,t,e,i){const s=Vc(n);let r=e;return s!==n&&(xn(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,He(a),l,n)}),s[t](r,...i)}function ba(n,t,e){const i=$t(n);Ie(i,"iterate",Tr);const s=i[t](...e);return(s===-1||s===!1)&&Wc(e[0])?(e[0]=$t(e[0]),i[t](...e)):s}function qs(n,t,e=[]){jn(),Fc();const i=$t(n)[t].apply(n,e);return Bc(),Zn(),i}const xm=Cc("__proto__,__v_isRef,__isVue"),id=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(yi));function ym(n){yi(n)||(n=String(n));const t=$t(this);return Ie(t,"has",n),t.hasOwnProperty(n)}class sd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Pm:ld:r?ad:od).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Gt(t);if(!s){let l;if(o&&(l=_m[e]))return l;if(e==="hasOwnProperty")return ym}const a=Reflect.get(t,e,Ue(t)?t:i);if((yi(e)?id.has(e):xm(e))||(s||Ie(t,"get",e),r))return a;if(Ue(a)){const l=o&&Dc(e)?a:a.value;return s&&ue(l)?Sl(l):l}return ue(a)?s?Sl(a):ia(a):a}}class rd extends sd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=Vi(r);if(!xn(i)&&!Vi(i)&&(r=$t(r),i=$t(i)),!Gt(t)&&Ue(r)&&!Ue(i))return l||(r.value=i),!0}const o=Gt(t)&&Dc(e)?Number(e)<t.length:Jt(t,e),a=Reflect.set(t,e,i,Ue(t)?t:s);return t===$t(s)&&(o?di(i,r)&&kn(t,"set",e,i):kn(t,"add",e,i)),a}deleteProperty(t,e){const i=Jt(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&kn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!yi(e)||!id.has(e))&&Ie(t,"has",e),i}ownKeys(t){return Ie(t,"iterate",Gt(t)?"length":Hi),Reflect.ownKeys(t)}}class Mm extends sd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Sm=new rd,Em=new Mm,Tm=new rd(!0);const Ml=n=>n,Vr=n=>Reflect.getPrototypeOf(n);function bm(n,t,e){return function(...i){const s=this.__v_raw,r=$t(s),o=bs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Ml:t?El:He;return!t&&Ie(r,"iterate",l?yl:Hi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Gr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Am(n,t){const e={get(s){const r=this.__v_raw,o=$t(r),a=$t(s);n||(di(s,a)&&Ie(o,"get",s),Ie(o,"get",a));const{has:l}=Vr(o),c=t?Ml:n?El:He;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ie($t(s),"iterate",Hi),s.size},has(s){const r=this.__v_raw,o=$t(r),a=$t(s);return n||(di(s,a)&&Ie(o,"has",s),Ie(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=$t(a),c=t?Ml:n?El:He;return!n&&Ie(l,"iterate",Hi),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Ne(e,n?{add:Gr("add"),set:Gr("set"),delete:Gr("delete"),clear:Gr("clear")}:{add(s){!t&&!xn(s)&&!Vi(s)&&(s=$t(s));const r=$t(this);return Vr(r).has.call(r,s)||(r.add(s),kn(r,"add",s,s)),this},set(s,r){!t&&!xn(r)&&!Vi(r)&&(r=$t(r));const o=$t(this),{has:a,get:l}=Vr(o);let c=a.call(o,s);c||(s=$t(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?di(r,u)&&kn(o,"set",s,r):kn(o,"add",s,r),this},delete(s){const r=$t(this),{has:o,get:a}=Vr(r);let l=o.call(r,s);l||(s=$t(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&kn(r,"delete",s,void 0),c},clear(){const s=$t(this),r=s.size!==0,o=s.clear();return r&&kn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=bm(s,n,t)}),e}function Gc(n,t){const e=Am(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Jt(e,s)&&s in i?e:i,s,r)}const wm={get:Gc(!1,!1)},Rm={get:Gc(!1,!0)},Cm={get:Gc(!0,!1)};const od=new WeakMap,ad=new WeakMap,ld=new WeakMap,Pm=new WeakMap;function Lm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dm(n){return n.__v_skip||!Object.isExtensible(n)?0:Lm(sm(n))}function ia(n){return Vi(n)?n:kc(n,!1,Sm,wm,od)}function cd(n){return kc(n,!1,Tm,Rm,ad)}function Sl(n){return kc(n,!0,Em,Cm,ld)}function kc(n,t,e,i,s){if(!ue(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=Dm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function ur(n){return Vi(n)?ur(n.__v_raw):!!(n&&n.__v_isReactive)}function Vi(n){return!!(n&&n.__v_isReadonly)}function xn(n){return!!(n&&n.__v_isShallow)}function Wc(n){return n?!!n.__v_raw:!1}function $t(n){const t=n&&n.__v_raw;return t?$t(t):n}function Im(n){return!Jt(n,"__v_skip")&&Object.isExtensible(n)&&Xf(n,"__v_skip",!0),n}const He=n=>ue(n)?ia(n):n,El=n=>ue(n)?Sl(n):n;function Ue(n){return n?n.__v_isRef===!0:!1}function ks(n){return ud(n,!1)}function Um(n){return ud(n,!0)}function ud(n,t){return Ue(n)?n:new Nm(n,t)}class Nm{constructor(t,e){this.dep=new Hc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:$t(t),this._value=e?t:He(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||xn(t)||Vi(t);t=i?t:$t(t),di(t,e)&&(this._rawValue=t,this._value=i?t:He(t),this.dep.trigger())}}function An(n){return Ue(n)?n.value:n}const Om={get:(n,t,e)=>t==="__v_raw"?n:An(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ue(s)&&!Ue(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function hd(n){return ur(n)?n:new Proxy(n,Om)}class Fm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Hc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Er-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return $f(this,!0),!0}get value(){const t=this.dep.track();return td(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Bm(n,t,e=!1){let i,s;return kt(n)?i=n:(i=n.get,s=n.set),new Fm(i,s,e)}const kr={},Oo=new WeakMap;let Di;function zm(n,t=!1,e=Di){if(e){let i=Oo.get(e);i||Oo.set(e,i=[]),i.push(n)}}function Hm(n,t,e=se){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=E=>s?E:xn(E)||s===!1||s===0?Wn(E,1):Wn(E);let u,h,f,d,g=!1,x=!1;if(Ue(n)?(h=()=>n.value,g=xn(n)):ur(n)?(h=()=>c(n),g=!0):Gt(n)?(x=!0,g=n.some(E=>ur(E)||xn(E)),h=()=>n.map(E=>{if(Ue(E))return E.value;if(ur(E))return c(E);if(kt(E))return l?l(E,2):E()})):kt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){jn();try{f()}finally{Zn()}}const E=Di;Di=u;try{return l?l(n,3,[d]):n(d)}finally{Di=E}}:h=wn,t&&s){const E=h,P=s===!0?1/0:s;h=()=>Wn(E(),P)}const m=pm(),p=()=>{u.stop(),m&&m.active&&Lc(m.effects,u)};if(r&&t){const E=t;t=(...P)=>{E(...P),p()}}let b=x?new Array(n.length).fill(kr):kr;const M=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(t){const P=u.run();if(s||g||(x?P.some((C,R)=>di(C,b[R])):di(P,b))){f&&f();const C=Di;Di=u;try{const R=[P,b===kr?void 0:x&&b[0]===kr?[]:b,d];b=P,l?l(t,3,R):t(...R)}finally{Di=C}}}else u.run()};return a&&a(M),u=new jf(h),u.scheduler=o?()=>o(M,!1):M,d=E=>zm(E,!1,u),f=u.onStop=()=>{const E=Oo.get(u);if(E){if(l)l(E,4);else for(const P of E)P();Oo.delete(u)}},t?i?M(!0):b=u.run():o?o(M.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Wn(n,t=1/0,e){if(t<=0||!ue(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ue(n))Wn(n.value,t,e);else if(Gt(n))for(let i=0;i<n.length;i++)Wn(n[i],t,e);else if(Hf(n)||bs(n))n.forEach(i=>{Wn(i,t,e)});else if(kf(n)){for(const i in n)Wn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Wn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ir(n,t,e,i){try{return i?n(...i):n()}catch(s){sa(s,t,e)}}function Cn(n,t,e,i){if(kt(n)){const s=Ir(n,t,e,i);return s&&Vf(s)&&s.catch(r=>{sa(r,t,e)}),s}if(Gt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Cn(n[r],t,e,i));return s}}function sa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||se;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){jn(),Ir(r,null,10,[n,l,c]),Zn();return}}Vm(n,e,s,i,o)}function Vm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ve=[];let Sn=-1;const As=[];let li=null,_s=0;const fd=Promise.resolve();let Fo=null;function dd(n){const t=Fo||fd;return n?t.then(this?n.bind(this):n):t}function Gm(n){let t=Sn+1,e=Ve.length;for(;t<e;){const i=t+e>>>1,s=Ve[i],r=br(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Xc(n){if(!(n.flags&1)){const t=br(n),e=Ve[Ve.length-1];!e||!(n.flags&2)&&t>=br(e)?Ve.push(n):Ve.splice(Gm(t),0,n),n.flags|=1,pd()}}function pd(){Fo||(Fo=fd.then(gd))}function km(n){Gt(n)?As.push(...n):li&&n.id===-1?li.splice(_s+1,0,n):n.flags&1||(As.push(n),n.flags|=1),pd()}function Du(n,t,e=Sn+1){for(;e<Ve.length;e++){const i=Ve[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ve.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function md(n){if(As.length){const t=[...new Set(As)].sort((e,i)=>br(e)-br(i));if(As.length=0,li){li.push(...t);return}for(li=t,_s=0;_s<li.length;_s++){const e=li[_s];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}li=null,_s=0}}const br=n=>n.id==null?n.flags&2?-1:1/0:n.id;function gd(n){try{for(Sn=0;Sn<Ve.length;Sn++){const t=Ve[Sn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ir(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Sn<Ve.length;Sn++){const t=Ve[Sn];t&&(t.flags&=-2)}Sn=-1,Ve.length=0,md(),Fo=null,(Ve.length||As.length)&&gd()}}let an=null,_d=null;function Bo(n){const t=an;return an=n,_d=n&&n.type.__scopeId||null,t}function To(n,t=an,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Vo(-1);const r=Bo(t);let o;try{o=n(...s)}finally{Bo(r),i._d&&Vo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Wm(n,t){if(an===null)return n;const e=ua(an),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=se]=t[s];r&&(kt(r)&&(r={mounted:r,updated:r}),r.deep&&Wn(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ti(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(jn(),Cn(l,e,8,[n.el,a,n,t]),Zn())}}const Xm=Symbol("_vte"),Ym=n=>n.__isTeleport,qm=Symbol("_leaveCb");function Yc(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Yc(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function vd(n,t){return kt(n)?Ne({name:n.name},t,{setup:n}):n}function xd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const zo=new WeakMap;function hr(n,t,e,i,s=!1){if(Gt(n)){n.forEach((g,x)=>hr(g,t&&(Gt(t)?t[x]:t),e,i,s));return}if(fr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&hr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?ua(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===se?a.refs={}:a.refs,h=a.setupState,f=$t(h),d=h===se?zf:g=>Jt(f,g);if(c!=null&&c!==l){if(Iu(t),Ee(c))u[c]=null,d(c)&&(h[c]=null);else if(Ue(c)){c.value=null;const g=t;g.k&&(u[g.k]=null)}}if(kt(l))Ir(l,a,12,[o,u]);else{const g=Ee(l),x=Ue(l);if(g||x){const m=()=>{if(n.f){const p=g?d(l)?h[l]:u[l]:l.value;if(s)Gt(p)&&Lc(p,r);else if(Gt(p))p.includes(r)||p.push(r);else if(g)u[l]=[r],d(l)&&(h[l]=u[l]);else{const b=[r];l.value=b,n.k&&(u[n.k]=b)}}else g?(u[l]=o,d(l)&&(h[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const p=()=>{m(),zo.delete(n)};p.id=-1,zo.set(n,p),en(p,e)}else Iu(n),m()}}}function Iu(n){const t=zo.get(n);t&&(t.flags|=8,zo.delete(n))}na().requestIdleCallback;na().cancelIdleCallback;const fr=n=>!!n.type.__asyncLoader,yd=n=>n.type.__isKeepAlive;function Km(n,t){Md(n,"a",t)}function jm(n,t){Md(n,"da",t)}function Md(n,t,e=ke){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ra(t,i,e),e){let s=e.parent;for(;s&&s.parent;)yd(s.parent.vnode)&&Zm(i,t,e,s),s=s.parent}}function Zm(n,t,e,i){const s=ra(t,n,i,!0);Sd(()=>{Lc(i[t],s)},e)}function ra(n,t,e=ke,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{jn();const a=Ur(e),l=Cn(t,e,n,o);return a(),Zn(),l});return i?s.unshift(r):s.push(r),r}}const Qn=n=>(t,e=ke)=>{(!wr||n==="sp")&&ra(n,(...i)=>t(...i),e)},$m=Qn("bm"),oa=Qn("m"),Jm=Qn("bu"),Qm=Qn("u"),aa=Qn("bum"),Sd=Qn("um"),tg=Qn("sp"),eg=Qn("rtg"),ng=Qn("rtc");function ig(n,t=ke){ra("ec",n,t)}const sg=Symbol.for("v-ndc"),Tl=n=>n?Vd(n)?ua(n):Tl(n.parent):null,dr=Ne(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Tl(n.parent),$root:n=>Tl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Td(n),$forceUpdate:n=>n.f||(n.f=()=>{Xc(n.update)}),$nextTick:n=>n.n||(n.n=dd.bind(n.proxy)),$watch:n=>bg.bind(n)}),Aa=(n,t)=>n!==se&&!n.__isScriptSetup&&Jt(n,t),rg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Aa(i,t))return o[t]=1,i[t];if(s!==se&&Jt(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&Jt(c,t))return o[t]=3,r[t];if(e!==se&&Jt(e,t))return o[t]=4,e[t];bl&&(o[t]=0)}}const u=dr[t];let h,f;if(u)return t==="$attrs"&&Ie(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==se&&Jt(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,Jt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Aa(s,t)?(s[t]=e,!0):i!==se&&Jt(i,t)?(i[t]=e,!0):Jt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r,type:o}},a){let l,c;return!!(e[a]||n!==se&&a[0]!=="$"&&Jt(n,a)||Aa(t,a)||(l=r[0])&&Jt(l,a)||Jt(i,a)||Jt(dr,a)||Jt(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Jt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Uu(n){return Gt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let bl=!0;function og(n){const t=Td(n),e=n.proxy,i=n.ctx;bl=!1,t.beforeCreate&&Nu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:M,unmounted:E,render:P,renderTracked:C,renderTriggered:R,errorCaptured:O,serverPrefetch:at,expose:y,inheritAttrs:T,components:K,directives:k,filters:it}=t;if(c&&ag(c,i,null),o)for(const st in o){const X=o[st];kt(X)&&(i[st]=X.bind(e))}if(s){const st=s.call(e,e);ue(st)&&(n.data=ia(st))}if(bl=!0,r)for(const st in r){const X=r[st],vt=kt(X)?X.bind(e,e):kt(X.get)?X.get.bind(e,e):wn,yt=!kt(X)&&kt(X.set)?X.set.bind(e):wn,St=dn({get:vt,set:yt});Object.defineProperty(i,st,{enumerable:!0,configurable:!0,get:()=>St.value,set:I=>St.value=I})}if(a)for(const st in a)Ed(a[st],i,e,st);if(l){const st=kt(l)?l.call(e):l;Reflect.ownKeys(st).forEach(X=>{bo(X,st[X])})}u&&Nu(u,n,"c");function q(st,X){Gt(X)?X.forEach(vt=>st(vt.bind(e))):X&&st(X.bind(e))}if(q($m,h),q(oa,f),q(Jm,d),q(Qm,g),q(Km,x),q(jm,m),q(ig,O),q(ng,C),q(eg,R),q(aa,b),q(Sd,E),q(tg,at),Gt(y))if(y.length){const st=n.exposed||(n.exposed={});y.forEach(X=>{Object.defineProperty(st,X,{get:()=>e[X],set:vt=>e[X]=vt,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===wn&&(n.render=P),T!=null&&(n.inheritAttrs=T),K&&(n.components=K),k&&(n.directives=k),at&&xd(n)}function ag(n,t,e=wn){Gt(n)&&(n=Al(n));for(const i in n){const s=n[i];let r;ue(s)?"default"in s?r=Kn(s.from||i,s.default,!0):r=Kn(s.from||i):r=Kn(s),Ue(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Nu(n,t,e){Cn(Gt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Ed(n,t,e,i){let s=i.includes(".")?Fd(e,i):()=>e[i];if(Ee(n)){const r=t[n];kt(r)&&pr(s,r)}else if(kt(n))pr(s,n.bind(e));else if(ue(n))if(Gt(n))n.forEach(r=>Ed(r,t,e,i));else{const r=kt(n.handler)?n.handler.bind(e):t[n.handler];kt(r)&&pr(s,r,n)}}function Td(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Ho(l,c,o,!0)),Ho(l,t,o)),ue(t)&&r.set(t,l),l}function Ho(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Ho(n,r,e,!0),s&&s.forEach(o=>Ho(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=lg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const lg={data:Ou,props:Fu,emits:Fu,methods:rr,computed:rr,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:rr,directives:rr,watch:ug,provide:Ou,inject:cg};function Ou(n,t){return t?n?function(){return Ne(kt(n)?n.call(this,this):n,kt(t)?t.call(this,this):t)}:t:n}function cg(n,t){return rr(Al(n),Al(t))}function Al(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Fe(n,t){return n?[...new Set([].concat(n,t))]:t}function rr(n,t){return n?Ne(Object.create(null),n,t):t}function Fu(n,t){return n?Gt(n)&&Gt(t)?[...new Set([...n,...t])]:Ne(Object.create(null),Uu(n),Uu(t??{})):t}function ug(n,t){if(!n)return t;if(!t)return n;const e=Ne(Object.create(null),n);for(const i in t)e[i]=Fe(n[i],t[i]);return e}function bd(){return{app:null,config:{isNativeTag:zf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hg=0;function fg(n,t){return function(i,s=null){kt(i)||(i=Ne({},i)),s!=null&&!ue(s)&&(s=null);const r=bd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:hg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Kg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&kt(u.install)?(o.add(u),u.install(c,...h)):kt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Re(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,ua(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Cn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=ws;ws=c;try{return u()}finally{ws=h}}};return c}}let ws=null;function bo(n,t){if(ke){let e=ke.provides;const i=ke.parent&&ke.parent.provides;i===e&&(e=ke.provides=Object.create(i)),e[n]=t}}function Kn(n,t,e=!1){const i=Gg();if(i||ws){let s=ws?ws._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&kt(t)?t.call(i&&i.proxy):t}}const Ad={},wd=()=>Object.create(Ad),Rd=n=>Object.getPrototypeOf(n)===Ad;function dg(n,t,e,i=!1){const s={},r=wd();n.propsDefaults=Object.create(null),Cd(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:cd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function pg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=$t(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(la(n.emitsOptions,f))continue;const d=t[f];if(l)if(Jt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=_i(f);s[g]=wl(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Cd(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!Jt(t,h)&&((u=Xi(h))===h||!Jt(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=wl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!Jt(t,h))&&(delete r[h],c=!0)}c&&kn(n.attrs,"set","")}function Cd(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(ar(l))continue;const c=t[l];let u;s&&Jt(s,u=_i(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:la(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=$t(e),c=a||se;for(let u=0;u<r.length;u++){const h=r[u];e[h]=wl(s,l,h,c[h],n,!Jt(c,h))}}return o}function wl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=Jt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&kt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Ur(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Xi(e))&&(i=!0))}return i}const mg=new WeakMap;function Pd(n,t,e=!1){const i=e?mg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!kt(n)){const u=h=>{l=!0;const[f,d]=Pd(h,t,!0);Ne(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ue(n)&&i.set(n,Ts),Ts;if(Gt(r))for(let u=0;u<r.length;u++){const h=_i(r[u]);Bu(h)&&(o[h]=se)}else if(r)for(const u in r){const h=_i(u);if(Bu(h)){const f=r[u],d=o[h]=Gt(f)||kt(f)?{type:f}:Ne({},f),g=d.type;let x=!1,m=!0;if(Gt(g))for(let p=0;p<g.length;++p){const b=g[p],M=kt(b)&&b.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(m=!1)}else x=kt(g)&&g.name==="Boolean";d[0]=x,d[1]=m,(x||Jt(d,"default"))&&a.push(h)}}const c=[o,a];return ue(n)&&i.set(n,c),c}function Bu(n){return n[0]!=="$"&&!ar(n)}const qc=n=>n==="_"||n==="_ctx"||n==="$stable",Kc=n=>Gt(n)?n.map(Tn):[Tn(n)],gg=(n,t,e)=>{if(t._n)return t;const i=To((...s)=>Kc(t(...s)),e);return i._c=!1,i},Ld=(n,t,e)=>{const i=n._ctx;for(const s in n){if(qc(s))continue;const r=n[s];if(kt(r))t[s]=gg(s,r,i);else if(r!=null){const o=Kc(r);t[s]=()=>o}}},Dd=(n,t)=>{const e=Kc(t);n.slots.default=()=>e},Id=(n,t,e)=>{for(const i in t)(e||!qc(i))&&(n[i]=t[i])},_g=(n,t,e)=>{const i=n.slots=wd();if(n.vnode.shapeFlag&32){const s=t._;s?(Id(i,t,e),e&&Xf(i,"_",s,!0)):Ld(t,i)}else t&&Dd(n,t)},vg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=se;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Id(s,t,e):(r=!t.$stable,Ld(t,s)),o=t}else t&&(Dd(n,t),o={default:1});if(r)for(const a in s)!qc(a)&&o[a]==null&&delete s[a]},en=Ig;function xg(n){return yg(n)}function yg(n,t){const e=na();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=wn,insertStaticContent:g}=n,x=(w,v,B,$=null,nt=null,W=null,dt=void 0,ot=null,S=!!v.dynamicChildren)=>{if(w===v)return;w&&!Ks(w,v)&&($=D(w),I(w,nt,W,!0),w=null),v.patchFlag===-2&&(S=!1,v.dynamicChildren=null);const{type:_,ref:N,shapeFlag:z}=v;switch(_){case ca:m(w,v,B,$);break;case Ds:p(w,v,B,$);break;case Ra:w==null&&b(v,B,$,dt);break;case Gn:K(w,v,B,$,nt,W,dt,ot,S);break;default:z&1?P(w,v,B,$,nt,W,dt,ot,S):z&6?k(w,v,B,$,nt,W,dt,ot,S):(z&64||z&128)&&_.process(w,v,B,$,nt,W,dt,ot,S,ct)}N!=null&&nt?hr(N,w&&w.ref,W,v||w,!v):N==null&&w&&w.ref!=null&&hr(w.ref,null,W,w,!0)},m=(w,v,B,$)=>{if(w==null)i(v.el=a(v.children),B,$);else{const nt=v.el=w.el;v.children!==w.children&&c(nt,v.children)}},p=(w,v,B,$)=>{w==null?i(v.el=l(v.children||""),B,$):v.el=w.el},b=(w,v,B,$)=>{[w.el,w.anchor]=g(w.children,v,B,$,w.el,w.anchor)},M=({el:w,anchor:v},B,$)=>{let nt;for(;w&&w!==v;)nt=f(w),i(w,B,$),w=nt;i(v,B,$)},E=({el:w,anchor:v})=>{let B;for(;w&&w!==v;)B=f(w),s(w),w=B;s(v)},P=(w,v,B,$,nt,W,dt,ot,S)=>{if(v.type==="svg"?dt="svg":v.type==="math"&&(dt="mathml"),w==null)C(v,B,$,nt,W,dt,ot,S);else{const _=w.el&&w.el._isVueCE?w.el:null;try{_&&_._beginPatch(),at(w,v,nt,W,dt,ot,S)}finally{_&&_._endPatch()}}},C=(w,v,B,$,nt,W,dt,ot)=>{let S,_;const{props:N,shapeFlag:z,transition:J,dirs:Y}=w;if(S=w.el=o(w.type,W,N&&N.is,N),z&8?u(S,w.children):z&16&&O(w.children,S,null,$,nt,wa(w,W),dt,ot),Y&&Ti(w,null,$,"created"),R(S,w,w.scopeId,dt,$),N){for(const pt in N)pt!=="value"&&!ar(pt)&&r(S,pt,null,N[pt],W,$);"value"in N&&r(S,"value",null,N.value,W),(_=N.onVnodeBeforeMount)&&Mn(_,$,w)}Y&&Ti(w,null,$,"beforeMount");const gt=Mg(nt,J);gt&&J.beforeEnter(S),i(S,v,B),((_=N&&N.onVnodeMounted)||gt||Y)&&en(()=>{_&&Mn(_,$,w),gt&&J.enter(S),Y&&Ti(w,null,$,"mounted")},nt)},R=(w,v,B,$,nt)=>{if(B&&d(w,B),$)for(let W=0;W<$.length;W++)d(w,$[W]);if(nt){let W=nt.subTree;if(v===W||zd(W.type)&&(W.ssContent===v||W.ssFallback===v)){const dt=nt.vnode;R(w,dt,dt.scopeId,dt.slotScopeIds,nt.parent)}}},O=(w,v,B,$,nt,W,dt,ot,S=0)=>{for(let _=S;_<w.length;_++){const N=w[_]=ot?ci(w[_]):Tn(w[_]);x(null,N,v,B,$,nt,W,dt,ot)}},at=(w,v,B,$,nt,W,dt)=>{const ot=v.el=w.el;let{patchFlag:S,dynamicChildren:_,dirs:N}=v;S|=w.patchFlag&16;const z=w.props||se,J=v.props||se;let Y;if(B&&bi(B,!1),(Y=J.onVnodeBeforeUpdate)&&Mn(Y,B,v,w),N&&Ti(v,w,B,"beforeUpdate"),B&&bi(B,!0),(z.innerHTML&&J.innerHTML==null||z.textContent&&J.textContent==null)&&u(ot,""),_?y(w.dynamicChildren,_,ot,B,$,wa(v,nt),W):dt||X(w,v,ot,null,B,$,wa(v,nt),W,!1),S>0){if(S&16)T(ot,z,J,B,nt);else if(S&2&&z.class!==J.class&&r(ot,"class",null,J.class,nt),S&4&&r(ot,"style",z.style,J.style,nt),S&8){const gt=v.dynamicProps;for(let pt=0;pt<gt.length;pt++){const mt=gt[pt],Bt=z[mt],ft=J[mt];(ft!==Bt||mt==="value")&&r(ot,mt,Bt,ft,nt,B)}}S&1&&w.children!==v.children&&u(ot,v.children)}else!dt&&_==null&&T(ot,z,J,B,nt);((Y=J.onVnodeUpdated)||N)&&en(()=>{Y&&Mn(Y,B,v,w),N&&Ti(v,w,B,"updated")},$)},y=(w,v,B,$,nt,W,dt)=>{for(let ot=0;ot<v.length;ot++){const S=w[ot],_=v[ot],N=S.el&&(S.type===Gn||!Ks(S,_)||S.shapeFlag&198)?h(S.el):B;x(S,_,N,null,$,nt,W,dt,!0)}},T=(w,v,B,$,nt)=>{if(v!==B){if(v!==se)for(const W in v)!ar(W)&&!(W in B)&&r(w,W,v[W],null,nt,$);for(const W in B){if(ar(W))continue;const dt=B[W],ot=v[W];dt!==ot&&W!=="value"&&r(w,W,ot,dt,nt,$)}"value"in B&&r(w,"value",v.value,B.value,nt)}},K=(w,v,B,$,nt,W,dt,ot,S)=>{const _=v.el=w?w.el:a(""),N=v.anchor=w?w.anchor:a("");let{patchFlag:z,dynamicChildren:J,slotScopeIds:Y}=v;Y&&(ot=ot?ot.concat(Y):Y),w==null?(i(_,B,$),i(N,B,$),O(v.children||[],B,N,nt,W,dt,ot,S)):z>0&&z&64&&J&&w.dynamicChildren?(y(w.dynamicChildren,J,B,nt,W,dt,ot),(v.key!=null||nt&&v===nt.subTree)&&Ud(w,v,!0)):X(w,v,B,N,nt,W,dt,ot,S)},k=(w,v,B,$,nt,W,dt,ot,S)=>{v.slotScopeIds=ot,w==null?v.shapeFlag&512?nt.ctx.activate(v,B,$,dt,S):it(v,B,$,nt,W,dt,S):lt(w,v,S)},it=(w,v,B,$,nt,W,dt)=>{const ot=w.component=Vg(w,$,nt);if(yd(w)&&(ot.ctx.renderer=ct),kg(ot,!1,dt),ot.asyncDep){if(nt&&nt.registerDep(ot,q,dt),!w.el){const S=ot.subTree=Re(Ds);p(null,S,v,B),w.placeholder=S.el}}else q(ot,w,v,B,nt,W,dt)},lt=(w,v,B)=>{const $=v.component=w.component;if(Lg(w,v,B))if($.asyncDep&&!$.asyncResolved){st($,v,B);return}else $.next=v,$.update();else v.el=w.el,$.vnode=v},q=(w,v,B,$,nt,W,dt)=>{const ot=()=>{if(w.isMounted){let{next:z,bu:J,u:Y,parent:gt,vnode:pt}=w;{const Dt=Nd(w);if(Dt){z&&(z.el=pt.el,st(w,z,dt)),Dt.asyncDep.then(()=>{w.isUnmounted||ot()});return}}let mt=z,Bt;bi(w,!1),z?(z.el=pt.el,st(w,z,dt)):z=pt,J&&Eo(J),(Bt=z.props&&z.props.onVnodeBeforeUpdate)&&Mn(Bt,gt,z,pt),bi(w,!0);const ft=Hu(w),Et=w.subTree;w.subTree=ft,x(Et,ft,h(Et.el),D(Et),w,nt,W),z.el=ft.el,mt===null&&Dg(w,ft.el),Y&&en(Y,nt),(Bt=z.props&&z.props.onVnodeUpdated)&&en(()=>Mn(Bt,gt,z,pt),nt)}else{let z;const{el:J,props:Y}=v,{bm:gt,m:pt,parent:mt,root:Bt,type:ft}=w,Et=fr(v);bi(w,!1),gt&&Eo(gt),!Et&&(z=Y&&Y.onVnodeBeforeMount)&&Mn(z,mt,v),bi(w,!0);{Bt.ce&&Bt.ce._def.shadowRoot!==!1&&Bt.ce._injectChildStyle(ft);const Dt=w.subTree=Hu(w);x(null,Dt,B,$,w,nt,W),v.el=Dt.el}if(pt&&en(pt,nt),!Et&&(z=Y&&Y.onVnodeMounted)){const Dt=v;en(()=>Mn(z,mt,Dt),nt)}(v.shapeFlag&256||mt&&fr(mt.vnode)&&mt.vnode.shapeFlag&256)&&w.a&&en(w.a,nt),w.isMounted=!0,v=B=$=null}};w.scope.on();const S=w.effect=new jf(ot);w.scope.off();const _=w.update=S.run.bind(S),N=w.job=S.runIfDirty.bind(S);N.i=w,N.id=w.uid,S.scheduler=()=>Xc(N),bi(w,!0),_()},st=(w,v,B)=>{v.component=w;const $=w.vnode.props;w.vnode=v,w.next=null,pg(w,v.props,$,B),vg(w,v.children,B),jn(),Du(w),Zn()},X=(w,v,B,$,nt,W,dt,ot,S=!1)=>{const _=w&&w.children,N=w?w.shapeFlag:0,z=v.children,{patchFlag:J,shapeFlag:Y}=v;if(J>0){if(J&128){yt(_,z,B,$,nt,W,dt,ot,S);return}else if(J&256){vt(_,z,B,$,nt,W,dt,ot,S);return}}Y&8?(N&16&&ut(_,nt,W),z!==_&&u(B,z)):N&16?Y&16?yt(_,z,B,$,nt,W,dt,ot,S):ut(_,nt,W,!0):(N&8&&u(B,""),Y&16&&O(z,B,$,nt,W,dt,ot,S))},vt=(w,v,B,$,nt,W,dt,ot,S)=>{w=w||Ts,v=v||Ts;const _=w.length,N=v.length,z=Math.min(_,N);let J;for(J=0;J<z;J++){const Y=v[J]=S?ci(v[J]):Tn(v[J]);x(w[J],Y,B,null,nt,W,dt,ot,S)}_>N?ut(w,nt,W,!0,!1,z):O(v,B,$,nt,W,dt,ot,S,z)},yt=(w,v,B,$,nt,W,dt,ot,S)=>{let _=0;const N=v.length;let z=w.length-1,J=N-1;for(;_<=z&&_<=J;){const Y=w[_],gt=v[_]=S?ci(v[_]):Tn(v[_]);if(Ks(Y,gt))x(Y,gt,B,null,nt,W,dt,ot,S);else break;_++}for(;_<=z&&_<=J;){const Y=w[z],gt=v[J]=S?ci(v[J]):Tn(v[J]);if(Ks(Y,gt))x(Y,gt,B,null,nt,W,dt,ot,S);else break;z--,J--}if(_>z){if(_<=J){const Y=J+1,gt=Y<N?v[Y].el:$;for(;_<=J;)x(null,v[_]=S?ci(v[_]):Tn(v[_]),B,gt,nt,W,dt,ot,S),_++}}else if(_>J)for(;_<=z;)I(w[_],nt,W,!0),_++;else{const Y=_,gt=_,pt=new Map;for(_=gt;_<=J;_++){const Ft=v[_]=S?ci(v[_]):Tn(v[_]);Ft.key!=null&&pt.set(Ft.key,_)}let mt,Bt=0;const ft=J-gt+1;let Et=!1,Dt=0;const Ot=new Array(ft);for(_=0;_<ft;_++)Ot[_]=0;for(_=Y;_<=z;_++){const Ft=w[_];if(Bt>=ft){I(Ft,nt,W,!0);continue}let Nt;if(Ft.key!=null)Nt=pt.get(Ft.key);else for(mt=gt;mt<=J;mt++)if(Ot[mt-gt]===0&&Ks(Ft,v[mt])){Nt=mt;break}Nt===void 0?I(Ft,nt,W,!0):(Ot[Nt-gt]=_+1,Nt>=Dt?Dt=Nt:Et=!0,x(Ft,v[Nt],B,null,nt,W,dt,ot,S),Bt++)}const Ct=Et?Sg(Ot):Ts;for(mt=Ct.length-1,_=ft-1;_>=0;_--){const Ft=gt+_,Nt=v[Ft],te=v[Ft+1],F=Ft+1<N?te.el||te.placeholder:$;Ot[_]===0?x(null,Nt,B,F,nt,W,dt,ot,S):Et&&(mt<0||_!==Ct[mt]?St(Nt,B,F,2):mt--)}}},St=(w,v,B,$,nt=null)=>{const{el:W,type:dt,transition:ot,children:S,shapeFlag:_}=w;if(_&6){St(w.component.subTree,v,B,$);return}if(_&128){w.suspense.move(v,B,$);return}if(_&64){dt.move(w,v,B,ct);return}if(dt===Gn){i(W,v,B);for(let z=0;z<S.length;z++)St(S[z],v,B,$);i(w.anchor,v,B);return}if(dt===Ra){M(w,v,B);return}if($!==2&&_&1&&ot)if($===0)ot.beforeEnter(W),i(W,v,B),en(()=>ot.enter(W),nt);else{const{leave:z,delayLeave:J,afterLeave:Y}=ot,gt=()=>{w.ctx.isUnmounted?s(W):i(W,v,B)},pt=()=>{W._isLeaving&&W[qm](!0),z(W,()=>{gt(),Y&&Y()})};J?J(W,gt,pt):pt()}else i(W,v,B)},I=(w,v,B,$=!1,nt=!1)=>{const{type:W,props:dt,ref:ot,children:S,dynamicChildren:_,shapeFlag:N,patchFlag:z,dirs:J,cacheIndex:Y}=w;if(z===-2&&(nt=!1),ot!=null&&(jn(),hr(ot,null,B,w,!0),Zn()),Y!=null&&(v.renderCache[Y]=void 0),N&256){v.ctx.deactivate(w);return}const gt=N&1&&J,pt=!fr(w);let mt;if(pt&&(mt=dt&&dt.onVnodeBeforeUnmount)&&Mn(mt,v,w),N&6)j(w.component,B,$);else{if(N&128){w.suspense.unmount(B,$);return}gt&&Ti(w,null,v,"beforeUnmount"),N&64?w.type.remove(w,v,B,ct,$):_&&!_.hasOnce&&(W!==Gn||z>0&&z&64)?ut(_,v,B,!1,!0):(W===Gn&&z&384||!nt&&N&16)&&ut(S,v,B),$&&G(w)}(pt&&(mt=dt&&dt.onVnodeUnmounted)||gt)&&en(()=>{mt&&Mn(mt,v,w),gt&&Ti(w,null,v,"unmounted")},B)},G=w=>{const{type:v,el:B,anchor:$,transition:nt}=w;if(v===Gn){L(B,$);return}if(v===Ra){E(w);return}const W=()=>{s(B),nt&&!nt.persisted&&nt.afterLeave&&nt.afterLeave()};if(w.shapeFlag&1&&nt&&!nt.persisted){const{leave:dt,delayLeave:ot}=nt,S=()=>dt(B,W);ot?ot(w.el,W,S):S()}else W()},L=(w,v)=>{let B;for(;w!==v;)B=f(w),s(w),w=B;s(v)},j=(w,v,B)=>{const{bum:$,scope:nt,job:W,subTree:dt,um:ot,m:S,a:_}=w;zu(S),zu(_),$&&Eo($),nt.stop(),W&&(W.flags|=8,I(dt,w,v,B)),ot&&en(ot,v),en(()=>{w.isUnmounted=!0},v)},ut=(w,v,B,$=!1,nt=!1,W=0)=>{for(let dt=W;dt<w.length;dt++)I(w[dt],v,B,$,nt)},D=w=>{if(w.shapeFlag&6)return D(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const v=f(w.anchor||w.el),B=v&&v[Xm];return B?f(B):v};let Z=!1;const et=(w,v,B)=>{w==null?v._vnode&&I(v._vnode,null,null,!0):x(v._vnode||null,w,v,null,null,null,B),v._vnode=w,Z||(Z=!0,Du(),md(),Z=!1)},ct={p:x,um:I,m:St,r:G,mt:it,mc:O,pc:X,pbc:y,n:D,o:n};return{render:et,hydrate:void 0,createApp:fg(et)}}function wa({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function bi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Mg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Ud(n,t,e=!1){const i=n.children,s=t.children;if(Gt(i)&&Gt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ci(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Ud(o,a)),a.type===ca&&a.patchFlag!==-1&&(a.el=o.el),a.type===Ds&&!a.el&&(a.el=o.el)}}function Sg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Nd(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Nd(t)}function zu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Eg=Symbol.for("v-scx"),Tg=()=>Kn(Eg);function pr(n,t,e){return Od(n,t,e)}function Od(n,t,e=se){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ne({},e),l=t&&i||!t&&r!=="post";let c;if(wr){if(r==="sync"){const d=Tg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=wn,d.resume=wn,d.pause=wn,d}}const u=ke;a.call=(d,g,x)=>Cn(d,u,g,x);let h=!1;r==="post"?a.scheduler=d=>{en(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Xc(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Hm(n,t,a);return wr&&(c?c.push(f):l&&f()),f}function bg(n,t,e){const i=this.proxy,s=Ee(n)?n.includes(".")?Fd(i,n):()=>i[n]:n.bind(i,i);let r;kt(t)?r=t:(r=t.handler,e=t);const o=Ur(this),a=Od(s,r.bind(i),e);return o(),a}function Fd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Ag=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${_i(t)}Modifiers`]||n[`${Xi(t)}Modifiers`];function wg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||se;let s=e;const r=t.startsWith("update:"),o=r&&Ag(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Ee(u)?u.trim():u)),o.number&&(s=e.map(Ic)));let a,l=i[a=Ma(t)]||i[a=Ma(_i(t))];!l&&r&&(l=i[a=Ma(Xi(t))]),l&&Cn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Cn(c,n,6,s)}}const Rg=new WeakMap;function Bd(n,t,e=!1){const i=e?Rg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!kt(n)){const l=c=>{const u=Bd(c,t,!0);u&&(a=!0,Ne(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ue(n)&&i.set(n,null),null):(Gt(r)?r.forEach(l=>o[l]=null):Ne(o,r),ue(n)&&i.set(n,o),o)}function la(n,t){return!n||!Qo(t)?!1:(t=t.slice(2).replace(/Once$/,""),Jt(n,t[0].toLowerCase()+t.slice(1))||Jt(n,Xi(t))||Jt(n,t))}function Hu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:x}=n,m=Bo(n);let p,b;try{if(e.shapeFlag&4){const E=s||i,P=E;p=Tn(c.call(P,E,u,h,d,f,g)),b=a}else{const E=t;p=Tn(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),b=t.props?a:Cg(a)}}catch(E){mr.length=0,sa(E,n,1),p=Re(Ds)}let M=p;if(b&&x!==!1){const E=Object.keys(b),{shapeFlag:P}=M;E.length&&P&7&&(r&&E.some(Pc)&&(b=Pg(b,r)),M=Is(M,b,!1,!0))}return e.dirs&&(M=Is(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&Yc(M,e.transition),p=M,Bo(m),p}const Cg=n=>{let t;for(const e in n)(e==="class"||e==="style"||Qo(e))&&((t||(t={}))[e]=n[e]);return t},Pg=(n,t)=>{const e={};for(const i in n)(!Pc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Lg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Vu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!la(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Vu(i,o,c):!0:!!o;return!1}function Vu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!la(e,r))return!0}return!1}function Dg({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const zd=n=>n.__isSuspense;function Ig(n,t){t&&t.pendingBranch?Gt(n)?t.effects.push(...n):t.effects.push(n):km(n)}const Gn=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),Ds=Symbol.for("v-cmt"),Ra=Symbol.for("v-stc"),mr=[];let nn=null;function Yi(n=!1){mr.push(nn=n?null:[])}function Ug(){mr.pop(),nn=mr[mr.length-1]||null}let Ar=1;function Vo(n,t=!1){Ar+=n,n<0&&nn&&t&&(nn.hasOnce=!0)}function Ng(n){return n.dynamicChildren=Ar>0?nn||Ts:null,Ug(),Ar>0&&nn&&nn.push(n),n}function qi(n,t,e,i,s,r){return Ng(me(n,t,e,i,s,r,!0))}function Go(n){return n?n.__v_isVNode===!0:!1}function Ks(n,t){return n.type===t.type&&n.key===t.key}const Hd=({key:n})=>n??null,Ao=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ee(n)||Ue(n)||kt(n)?{i:an,r:n,k:t,f:!!e}:n:null);function me(n,t=null,e=null,i=0,s=null,r=n===Gn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Hd(t),ref:t&&Ao(t),scopeId:_d,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:an};return a?(jc(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ee(e)?8:16),Ar>0&&!o&&nn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&nn.push(l),l}const Re=Og;function Og(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===sg)&&(n=Ds),Go(n)){const a=Is(n,t,!0);return e&&jc(a,e),Ar>0&&!r&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag=-2,a}if(qg(n)&&(n=n.__vccOpts),t){t=Fg(t);let{class:a,style:l}=t;a&&!Ee(a)&&(t.class=Nc(a)),ue(l)&&(Wc(l)&&!Gt(l)&&(l=Ne({},l)),t.style=Uc(l))}const o=Ee(n)?1:zd(n)?128:Ym(n)?64:ue(n)?4:kt(n)?2:0;return me(n,t,e,i,s,o,r,!0)}function Fg(n){return n?Wc(n)||Rd(n)?Ne({},n):n:null}function Is(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Bg(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Hd(c),ref:t&&t.ref?e&&r?Gt(r)?r.concat(Ao(t)):[r,Ao(t)]:Ao(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Gn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Is(n.ssContent),ssFallback:n.ssFallback&&Is(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Yc(u,l.clone(u)),u}function gr(n=" ",t=0){return Re(ca,null,n,t)}function Tn(n){return n==null||typeof n=="boolean"?Re(Ds):Gt(n)?Re(Gn,null,n.slice()):Go(n)?ci(n):Re(ca,null,String(n))}function ci(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Is(n)}function jc(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Gt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),jc(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Rd(t)?t._ctx=an:s===3&&an&&(an.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else kt(t)?(t={default:t,_ctx:an},e=32):(t=String(t),i&64?(e=16,t=[gr(t)]):e=8);n.children=t,n.shapeFlag|=e}function Bg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Nc([t.class,i.class]));else if(s==="style")t.style=Uc([t.style,i.style]);else if(Qo(s)){const r=t[s],o=i[s];o&&r!==o&&!(Gt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function Mn(n,t,e,i=null){Cn(n,t,7,[e,i])}const zg=bd();let Hg=0;function Vg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||zg,r={uid:Hg++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pd(i,s),emitsOptions:Bd(i,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:i.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=wg.bind(null,r),n.ce&&n.ce(r),r}let ke=null;const Gg=()=>ke||an;let ko,Rl;{const n=na(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ko=t("__VUE_INSTANCE_SETTERS__",e=>ke=e),Rl=t("__VUE_SSR_SETTERS__",e=>wr=e)}const Ur=n=>{const t=ke;return ko(n),n.scope.on(),()=>{n.scope.off(),ko(t)}},Gu=()=>{ke&&ke.scope.off(),ko(null)};function Vd(n){return n.vnode.shapeFlag&4}let wr=!1;function kg(n,t=!1,e=!1){t&&Rl(t);const{props:i,children:s}=n.vnode,r=Vd(n);dg(n,i,r,t),_g(n,s,e||t);const o=r?Wg(n,t):void 0;return t&&Rl(!1),o}function Wg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,rg);const{setup:i}=e;if(i){jn();const s=n.setupContext=i.length>1?Yg(n):null,r=Ur(n),o=Ir(i,n,0,[n.props,s]),a=Vf(o);if(Zn(),r(),(a||n.sp)&&!fr(n)&&xd(n),a){if(o.then(Gu,Gu),t)return o.then(l=>{ku(n,l)}).catch(l=>{sa(l,n,0)});n.asyncDep=o}else ku(n,o)}else Gd(n)}function ku(n,t,e){kt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ue(t)&&(n.setupState=hd(t)),Gd(n)}function Gd(n,t,e){const i=n.type;n.render||(n.render=i.render||wn);{const s=Ur(n);jn();try{og(n)}finally{Zn(),s()}}}const Xg={get(n,t){return Ie(n,"get",""),n[t]}};function Yg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Xg),slots:n.slots,emit:n.emit,expose:t}}function ua(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(hd(Im(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in dr)return dr[e](n)},has(t,e){return e in t||e in dr}})):n.proxy}function qg(n){return kt(n)&&"__vccOpts"in n}const dn=(n,t)=>Bm(n,t,wr);function kd(n,t,e){try{Vo(-1);const i=arguments.length;return i===2?ue(t)&&!Gt(t)?Go(t)?Re(n,null,[t]):Re(n,t):Re(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Go(e)&&(e=[e]),Re(n,t,e))}finally{Vo(1)}}const Kg="3.5.24";/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cl;const Wu=typeof window<"u"&&window.trustedTypes;if(Wu)try{Cl=Wu.createPolicy("vue",{createHTML:n=>n})}catch{}const Wd=Cl?n=>Cl.createHTML(n):n=>n,jg="http://www.w3.org/2000/svg",Zg="http://www.w3.org/1998/Math/MathML",Vn=typeof document<"u"?document:null,Xu=Vn&&Vn.createElement("template"),$g={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Vn.createElementNS(jg,n):t==="mathml"?Vn.createElementNS(Zg,n):e?Vn.createElement(n,{is:e}):Vn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Vn.createTextNode(n),createComment:n=>Vn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Vn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Xu.innerHTML=Wd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Xu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Jg=Symbol("_vtc");function Qg(n,t,e){const i=n[Jg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Yu=Symbol("_vod"),t_=Symbol("_vsh"),e_=Symbol(""),n_=/(?:^|;)\s*display\s*:/;function i_(n,t,e){const i=n.style,s=Ee(e);let r=!1;if(e&&!s){if(t)if(Ee(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&wo(i,a,"")}else for(const o in t)e[o]==null&&wo(i,o,"");for(const o in e)o==="display"&&(r=!0),wo(i,o,e[o])}else if(s){if(t!==e){const o=i[e_];o&&(e+=";"+o),i.cssText=e,r=n_.test(e)}}else t&&n.removeAttribute("style");Yu in n&&(n[Yu]=r?i.display:"",n[t_]&&(i.display="none"))}const qu=/\s*!important$/;function wo(n,t,e){if(Gt(e))e.forEach(i=>wo(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=s_(n,t);qu.test(e)?n.setProperty(Xi(i),e.replace(qu,""),"important"):n[i]=e}}const Ku=["Webkit","Moz","ms"],Ca={};function s_(n,t){const e=Ca[t];if(e)return e;let i=_i(t);if(i!=="filter"&&i in n)return Ca[t]=i;i=Wf(i);for(let s=0;s<Ku.length;s++){const r=Ku[s]+i;if(r in n)return Ca[t]=r}return t}const ju="http://www.w3.org/1999/xlink";function Zu(n,t,e,i,s,r=fm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ju,t.slice(6,t.length)):n.setAttributeNS(ju,t,e):e==null||r&&!Yf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":yi(e)?String(e):e)}function $u(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Wd(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Yf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function vs(n,t,e,i){n.addEventListener(t,e,i)}function r_(n,t,e,i){n.removeEventListener(t,e,i)}const Ju=Symbol("_vei");function o_(n,t,e,i,s=null){const r=n[Ju]||(n[Ju]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=a_(t);if(i){const c=r[t]=u_(i,s);vs(n,a,c,l)}else o&&(r_(n,a,o,l),r[t]=void 0)}}const Qu=/(?:Once|Passive|Capture)$/;function a_(n){let t;if(Qu.test(n)){t={};let i;for(;i=n.match(Qu);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Xi(n.slice(2)),t]}let Pa=0;const l_=Promise.resolve(),c_=()=>Pa||(l_.then(()=>Pa=0),Pa=Date.now());function u_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Cn(h_(i,e.value),t,5,[i])};return e.value=n,e.attached=c_(),e}function h_(n,t){if(Gt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const th=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,f_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Qg(n,i,o):t==="style"?i_(n,e,i):Qo(t)?Pc(t)||o_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):d_(n,t,i,o))?($u(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Zu(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Ee(i))?$u(n,_i(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Zu(n,t,i,o))};function d_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&th(t)&&kt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return th(t)&&Ee(e)?!1:t in n}const eh=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Gt(t)?e=>Eo(t,e):t};function p_(n){n.target.composing=!0}function nh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const La=Symbol("_assign");function ih(n,t,e){return t&&(n=n.trim()),e&&(n=Ic(n)),n}const m_={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[La]=eh(s);const r=i||s.props&&s.props.type==="number";vs(n,t?"change":"input",o=>{o.target.composing||n[La](ih(n.value,e,r))}),(e||r)&&vs(n,"change",()=>{n.value=ih(n.value,e,r)}),t||(vs(n,"compositionstart",p_),vs(n,"compositionend",nh),vs(n,"change",nh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[La]=eh(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Ic(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l))}},g_=Ne({patchProp:f_},$g);let sh;function __(){return sh||(sh=xg(g_))}const v_=(...n)=>{const t=__().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=y_(i);if(!s)return;const r=t._component;!kt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,x_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function x_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function y_(n){return Ee(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const xs=typeof document<"u";function Xd(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function M_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Xd(n.default)}const Zt=Object.assign;function Da(n,t){const e={};for(const i in t){const s=t[i];e[i]=yn(s)?s.map(n):n(s)}return e}const _r=()=>{},yn=Array.isArray;function rh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Yd=/#/g,S_=/&/g,E_=/\//g,T_=/=/g,b_=/\?/g,qd=/\+/g,A_=/%5B/g,w_=/%5D/g,Kd=/%5E/g,R_=/%60/g,jd=/%7B/g,C_=/%7C/g,Zd=/%7D/g,P_=/%20/g;function Zc(n){return n==null?"":encodeURI(""+n).replace(C_,"|").replace(A_,"[").replace(w_,"]")}function L_(n){return Zc(n).replace(jd,"{").replace(Zd,"}").replace(Kd,"^")}function Pl(n){return Zc(n).replace(qd,"%2B").replace(P_,"+").replace(Yd,"%23").replace(S_,"%26").replace(R_,"`").replace(jd,"{").replace(Zd,"}").replace(Kd,"^")}function D_(n){return Pl(n).replace(T_,"%3D")}function I_(n){return Zc(n).replace(Yd,"%23").replace(b_,"%3F")}function U_(n){return I_(n).replace(E_,"%2F")}function Rr(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const N_=/\/$/,O_=n=>n.replace(N_,"");function Ia(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=n(r.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=H_(i??t,e),{fullPath:i+r+o,path:i,query:s,hash:Rr(o)}}function F_(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function oh(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function B_(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&Us(t.matched[i],e.matched[s])&&$d(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Us(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function $d(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!z_(n[e],t[e]))return!1;return!0}function z_(n,t){return yn(n)?ah(n,t):yn(t)?ah(t,n):n===t}function ah(n,t){return yn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function H_(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ei={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ll=function(n){return n.pop="pop",n.push="push",n}({}),Ua=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function V_(n){if(!n)if(xs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),O_(n)}const G_=/^[^#]+#/;function k_(n,t){return n.replace(G_,"#")+t}function W_(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const ha=()=>({left:window.scrollX,top:window.scrollY});function X_(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=W_(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function lh(n,t){return(history.state?history.state.position-t:-1)+n}const Dl=new Map;function Y_(n,t){Dl.set(n,t)}function q_(n){const t=Dl.get(n);return Dl.delete(n),t}function K_(n){return typeof n=="string"||n&&typeof n=="object"}function Jd(n){return typeof n=="string"||typeof n=="symbol"}let pe=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const Qd=Symbol("");pe.MATCHER_NOT_FOUND+"",pe.NAVIGATION_GUARD_REDIRECT+"",pe.NAVIGATION_ABORTED+"",pe.NAVIGATION_CANCELLED+"",pe.NAVIGATION_DUPLICATED+"";function Ns(n,t){return Zt(new Error,{type:n,[Qd]:!0},t)}function Un(n,t){return n instanceof Error&&Qd in n&&(t==null||!!(n.type&t))}const j_=["params","query","hash"];function Z_(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of j_)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function $_(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const s=e[i].replace(qd," "),r=s.indexOf("="),o=Rr(r<0?s:s.slice(0,r)),a=r<0?null:Rr(s.slice(r+1));if(o in t){let l=t[o];yn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function ch(n){let t="";for(let e in n){const i=n[e];if(e=D_(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(yn(i)?i.map(s=>s&&Pl(s)):[i&&Pl(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function J_(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=yn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Q_=Symbol(""),uh=Symbol(""),$c=Symbol(""),tp=Symbol(""),Il=Symbol("");function js(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function ui(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Ns(pe.NAVIGATION_ABORTED,{from:e,to:t})):f instanceof Error?l(f):K_(f)?l(Ns(pe.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function Na(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Xd(l)){const c=(l.__vccOpts||l)[t];c&&r.push(ui(c,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=M_(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const f=(h.__vccOpts||h)[t];return f&&ui(f,e,i,o,a,s)()}))}}return r}function tv(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>Us(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>Us(c,l))||s.push(l))}return[e,i,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ev=()=>location.protocol+"//"+location.host;function ep(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),oh(a,"")}return oh(e,n)+i+s}function nv(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=ep(n,location),g=e.value,x=t.value;let m=0;if(f){if(e.value=d,t.value=f,o&&o===g){o=null;return}m=x?f.position-x.position:0}else i(d);s.forEach(p=>{p(e.value,g,{delta:m,type:Ll.pop,direction:m?m>0?Ua.forward:Ua.back:Ua.unknown})})};function l(){o=e.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Zt({},f.state,{scroll:ha()}),"")}}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:h}}function hh(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?ha():null}}function iv(n){const{history:t,location:e}=window,i={value:ep(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(e.host&&document.querySelector("base")?n:n.slice(h))+l:ev()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),e[u?"replace":"assign"](f)}}function o(l,c){r(l,Zt({},t.state,hh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=Zt({},s.value,t.state,{forward:l,scroll:ha()});r(u.current,u,!0),r(l,Zt({},hh(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function sv(n){n=V_(n);const t=iv(n),e=nv(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=Zt({location:"",base:n,go:i,createHref:k_.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Oi=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Me=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Me||{});const rv={type:Oi.Static,value:""},ov=/[a-zA-Z0-9_]/;function av(n){if(!n)return[[]];if(n==="/")return[[rv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(d){throw new Error(`ERR (${e})/"${c}": ${d}`)}let e=Me.Static,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(e===Me.Static?r.push({type:Oi.Static,value:c}):e===Me.Param||e===Me.ParamRegExp||e===Me.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Oi.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==Me.ParamRegExp){i=e,e=Me.EscapeNext;continue}switch(e){case Me.Static:l==="/"?(c&&h(),o()):l===":"?(h(),e=Me.Param):f();break;case Me.EscapeNext:f(),e=i;break;case Me.Param:l==="("?e=Me.ParamRegExp:ov.test(l)?f():(h(),e=Me.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Me.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=Me.ParamRegExpEnd:u+=l;break;case Me.ParamRegExpEnd:h(),e=Me.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===Me.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}const fh="[^/]+?",lv={sensitive:!1,strict:!1,start:!0,end:!0};var ze=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(ze||{});const cv=/[.+*?^${}()[\]/\\]/g;function uv(n,t){const e=Zt({},lv,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[ze.Root];e.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=ze.Segment+(e.sensitive?ze.BonusCaseSensitive:0);if(f.type===Oi.Static)h||(s+="/"),s+=f.value.replace(cv,"\\$&"),d+=ze.Static;else if(f.type===Oi.Param){const{value:g,repeatable:x,optional:m,regexp:p}=f;r.push({name:g,repeatable:x,optional:m});const b=p||fh;if(b!==fh){d+=ze.BonusCustomRegExp;try{`${b}`}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+E.message)}}let M=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),s+=M,d+=ze.Dynamic,m&&(d+=ze.BonusOptional),x&&(d+=ze.BonusRepeatable),b===".*"&&(d+=ze.BonusWildcard)}u.push(d)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=ze.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===Oi.Static)u+=d.value;else if(d.type===Oi.Param){const{value:g,repeatable:x,optional:m}=d,p=g in c?c[g]:"";if(yn(p)&&!x)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=yn(p)?p.join("/"):p;if(!b)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function hv(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===ze.Static+ze.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===ze.Static+ze.Segment?1:-1:0}function np(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=hv(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(dh(i))return 1;if(dh(s))return-1}return s.length-i.length}function dh(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const fv={strict:!1,end:!0,sensitive:!1};function dv(n,t,e){const i=uv(av(n.path),e),s=Zt(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function pv(n,t){const e=[],i=new Map;t=rh(fv,t);function s(h){return i.get(h)}function r(h,f,d){const g=!d,x=mh(h);x.aliasOf=d&&d.record;const m=rh(t,h),p=[x];if("alias"in h){const E=typeof h.alias=="string"?[h.alias]:h.alias;for(const P of E)p.push(mh(Zt({},x,{components:d?d.record.components:x.components,path:P,aliasOf:d?d.record:x})))}let b,M;for(const E of p){const{path:P}=E;if(f&&P[0]!=="/"){const C=f.record.path,R=C[C.length-1]==="/"?"":"/";E.path=f.record.path+(P&&R+P)}if(b=dv(E,f,m),d?d.alias.push(b):(M=M||b,M!==b&&M.alias.push(b),g&&h.name&&!gh(b)&&o(h.name)),ip(b)&&l(b),x.children){const C=x.children;for(let R=0;R<C.length;R++)r(C[R],b,d&&d.children[R])}d=d||b}return M?()=>{o(M)}:_r}function o(h){if(Jd(h)){const f=i.get(h);f&&(i.delete(h),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(h);f>-1&&(e.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return e}function l(h){const f=_v(h,e);e.splice(f,0,h),h.record.name&&!gh(h)&&i.set(h.record.name,h)}function c(h,f){let d,g={},x,m;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw Ns(pe.MATCHER_NOT_FOUND,{location:h});m=d.record.name,g=Zt(ph(f.params,d.keys.filter(M=>!M.optional).concat(d.parent?d.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&ph(h.params,d.keys.map(M=>M.name))),x=d.stringify(g)}else if(h.path!=null)x=h.path,d=e.find(M=>M.re.test(x)),d&&(g=d.parse(x),m=d.record.name);else{if(d=f.name?i.get(f.name):e.find(M=>M.re.test(f.path)),!d)throw Ns(pe.MATCHER_NOT_FOUND,{location:h,currentLocation:f});m=d.record.name,g=Zt({},f.params,h.params),x=d.stringify(g)}const p=[];let b=d;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:x,params:g,matched:p,meta:gv(p)}}n.forEach(h=>r(h));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function ph(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function mh(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:mv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function mv(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function gh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function gv(n){return n.reduce((t,e)=>Zt(t,e.meta),{})}function _v(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;np(n,t[r])<0?i=r:e=r+1}const s=vv(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function vv(n){let t=n;for(;t=t.parent;)if(ip(t)&&np(n,t)===0)return t}function ip({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function _h(n){const t=Kn($c),e=Kn(tp),i=dn(()=>{const l=An(n.to);return t.resolve(l)}),s=dn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=e.matched;if(!u||!h.length)return-1;const f=h.findIndex(Us.bind(null,u));if(f>-1)return f;const d=vh(l[c-2]);return c>1&&vh(u)===d&&h[h.length-1].path!==d?h.findIndex(Us.bind(null,l[c-2])):f}),r=dn(()=>s.value>-1&&Sv(e.params,i.value.params)),o=dn(()=>s.value>-1&&s.value===e.matched.length-1&&$d(e.params,i.value.params));function a(l={}){if(Mv(l)){const c=t[An(n.replace)?"replace":"push"](An(n.to)).catch(_r);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:dn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function xv(n){return n.length===1?n[0]:n}const yv=vd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_h,setup(n,{slots:t}){const e=ia(_h(n)),{options:i}=Kn($c),s=dn(()=>({[xh(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[xh(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&xv(t.default(e));return n.custom?r:kd("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Ro=yv;function Mv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Sv(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!yn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function vh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const xh=(n,t,e)=>n??t??e,Ev=vd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Kn(Il),s=dn(()=>n.route||i.value),r=Kn(uh,0),o=dn(()=>{let c=An(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=dn(()=>s.value.matched[o.value]);bo(uh,dn(()=>o.value+1)),bo(Q_,a),bo(Il,s);const l=ks();return pr(()=>[l.value,a.value,n.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Us(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return yh(e.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=kd(f,Zt({},g,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return yh(e.default,{Component:m,route:c})||m}}});function yh(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const sp=Ev;function Tv(n){const t=pv(n.routes,n),e=n.parseQuery||$_,i=n.stringifyQuery||ch,s=n.history,r=js(),o=js(),a=js(),l=Um(ei);let c=ei;xs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Da.bind(null,D=>""+D),h=Da.bind(null,U_),f=Da.bind(null,Rr);function d(D,Z){let et,ct;return Jd(D)?(et=t.getRecordMatcher(D),ct=Z):ct=D,t.addRoute(ct,et)}function g(D){const Z=t.getRecordMatcher(D);Z&&t.removeRoute(Z)}function x(){return t.getRoutes().map(D=>D.record)}function m(D){return!!t.getRecordMatcher(D)}function p(D,Z){if(Z=Zt({},Z||l.value),typeof D=="string"){const B=Ia(e,D,Z.path),$=t.resolve({path:B.path},Z),nt=s.createHref(B.fullPath);return Zt(B,$,{params:f($.params),hash:Rr(B.hash),redirectedFrom:void 0,href:nt})}let et;if(D.path!=null)et=Zt({},D,{path:Ia(e,D.path,Z.path).path});else{const B=Zt({},D.params);for(const $ in B)B[$]==null&&delete B[$];et=Zt({},D,{params:h(B)}),Z.params=h(Z.params)}const ct=t.resolve(et,Z),Tt=D.hash||"";ct.params=u(f(ct.params));const w=F_(i,Zt({},D,{hash:L_(Tt),path:ct.path})),v=s.createHref(w);return Zt({fullPath:w,hash:Tt,query:i===ch?J_(D.query):D.query||{}},ct,{redirectedFrom:void 0,href:v})}function b(D){return typeof D=="string"?Ia(e,D,l.value.path):Zt({},D)}function M(D,Z){if(c!==D)return Ns(pe.NAVIGATION_CANCELLED,{from:Z,to:D})}function E(D){return R(D)}function P(D){return E(Zt(b(D),{replace:!0}))}function C(D,Z){const et=D.matched[D.matched.length-1];if(et&&et.redirect){const{redirect:ct}=et;let Tt=typeof ct=="function"?ct(D,Z):ct;return typeof Tt=="string"&&(Tt=Tt.includes("?")||Tt.includes("#")?Tt=b(Tt):{path:Tt},Tt.params={}),Zt({query:D.query,hash:D.hash,params:Tt.path!=null?{}:D.params},Tt)}}function R(D,Z){const et=c=p(D),ct=l.value,Tt=D.state,w=D.force,v=D.replace===!0,B=C(et,ct);if(B)return R(Zt(b(B),{state:typeof B=="object"?Zt({},Tt,B.state):Tt,force:w,replace:v}),Z||et);const $=et;$.redirectedFrom=Z;let nt;return!w&&B_(i,ct,et)&&(nt=Ns(pe.NAVIGATION_DUPLICATED,{to:$,from:ct}),St(ct,ct,!0,!1)),(nt?Promise.resolve(nt):y($,ct)).catch(W=>Un(W)?Un(W,pe.NAVIGATION_GUARD_REDIRECT)?W:yt(W):X(W,$,ct)).then(W=>{if(W){if(Un(W,pe.NAVIGATION_GUARD_REDIRECT))return R(Zt({replace:v},b(W.to),{state:typeof W.to=="object"?Zt({},Tt,W.to.state):Tt,force:w}),Z||$)}else W=K($,ct,!0,v,Tt);return T($,ct,W),W})}function O(D,Z){const et=M(D,Z);return et?Promise.reject(et):Promise.resolve()}function at(D){const Z=L.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(D):D()}function y(D,Z){let et;const[ct,Tt,w]=tv(D,Z);et=Na(ct.reverse(),"beforeRouteLeave",D,Z);for(const B of ct)B.leaveGuards.forEach($=>{et.push(ui($,D,Z))});const v=O.bind(null,D,Z);return et.push(v),ut(et).then(()=>{et=[];for(const B of r.list())et.push(ui(B,D,Z));return et.push(v),ut(et)}).then(()=>{et=Na(Tt,"beforeRouteUpdate",D,Z);for(const B of Tt)B.updateGuards.forEach($=>{et.push(ui($,D,Z))});return et.push(v),ut(et)}).then(()=>{et=[];for(const B of w)if(B.beforeEnter)if(yn(B.beforeEnter))for(const $ of B.beforeEnter)et.push(ui($,D,Z));else et.push(ui(B.beforeEnter,D,Z));return et.push(v),ut(et)}).then(()=>(D.matched.forEach(B=>B.enterCallbacks={}),et=Na(w,"beforeRouteEnter",D,Z,at),et.push(v),ut(et))).then(()=>{et=[];for(const B of o.list())et.push(ui(B,D,Z));return et.push(v),ut(et)}).catch(B=>Un(B,pe.NAVIGATION_CANCELLED)?B:Promise.reject(B))}function T(D,Z,et){a.list().forEach(ct=>at(()=>ct(D,Z,et)))}function K(D,Z,et,ct,Tt){const w=M(D,Z);if(w)return w;const v=Z===ei,B=xs?history.state:{};et&&(ct||v?s.replace(D.fullPath,Zt({scroll:v&&B&&B.scroll},Tt)):s.push(D.fullPath,Tt)),l.value=D,St(D,Z,et,v),yt()}let k;function it(){k||(k=s.listen((D,Z,et)=>{if(!j.listening)return;const ct=p(D),Tt=C(ct,j.currentRoute.value);if(Tt){R(Zt(Tt,{replace:!0,force:!0}),ct).catch(_r);return}c=ct;const w=l.value;xs&&Y_(lh(w.fullPath,et.delta),ha()),y(ct,w).catch(v=>Un(v,pe.NAVIGATION_ABORTED|pe.NAVIGATION_CANCELLED)?v:Un(v,pe.NAVIGATION_GUARD_REDIRECT)?(R(Zt(b(v.to),{force:!0}),ct).then(B=>{Un(B,pe.NAVIGATION_ABORTED|pe.NAVIGATION_DUPLICATED)&&!et.delta&&et.type===Ll.pop&&s.go(-1,!1)}).catch(_r),Promise.reject()):(et.delta&&s.go(-et.delta,!1),X(v,ct,w))).then(v=>{v=v||K(ct,w,!1),v&&(et.delta&&!Un(v,pe.NAVIGATION_CANCELLED)?s.go(-et.delta,!1):et.type===Ll.pop&&Un(v,pe.NAVIGATION_ABORTED|pe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),T(ct,w,v)}).catch(_r)}))}let lt=js(),q=js(),st;function X(D,Z,et){yt(D);const ct=q.list();return ct.length?ct.forEach(Tt=>Tt(D,Z,et)):console.error(D),Promise.reject(D)}function vt(){return st&&l.value!==ei?Promise.resolve():new Promise((D,Z)=>{lt.add([D,Z])})}function yt(D){return st||(st=!D,it(),lt.list().forEach(([Z,et])=>D?et(D):Z()),lt.reset()),D}function St(D,Z,et,ct){const{scrollBehavior:Tt}=n;if(!xs||!Tt)return Promise.resolve();const w=!et&&q_(lh(D.fullPath,0))||(ct||!et)&&history.state&&history.state.scroll||null;return dd().then(()=>Tt(D,Z,w)).then(v=>v&&X_(v)).catch(v=>X(v,D,Z))}const I=D=>s.go(D);let G;const L=new Set,j={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:n,push:E,replace:P,go:I,back:()=>I(-1),forward:()=>I(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:q.add,isReady:vt,install(D){D.component("RouterLink",Ro),D.component("RouterView",sp),D.config.globalProperties.$router=j,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>An(l)}),xs&&!G&&l.value===ei&&(G=!0,E(s.location).catch(ct=>{}));const Z={};for(const ct in ei)Object.defineProperty(Z,ct,{get:()=>l.value[ct],enumerable:!0});D.provide($c,j),D.provide(tp,cd(Z)),D.provide(Il,l);const et=D.unmount;L.add(D),D.unmount=function(){L.delete(D),L.size<1&&(c=ei,k&&k(),k=null,l.value=ei,G=!1,st=!1),et()}}};function ut(D){return D.reduce((Z,et)=>Z.then(()=>at(et)),Promise.resolve())}return j}const Ki=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},bv={class:"app-shell"},Av={class:"app-header"},wv={class:"nav"},Rv={class:"app-content"},Cv={__name:"App",setup(n){return(t,e)=>(Yi(),qi("div",bv,[me("header",Av,[e[3]||(e[3]=me("p",{class:"logo"},"Beam Network",-1)),me("nav",wv,[Re(An(Ro),{to:"/scene",class:"nav-link","active-class":"is-active"},{default:To(()=>[...e[0]||(e[0]=[gr(" 三维场景 ",-1)])]),_:1}),Re(An(Ro),{to:"/microservice-plane",class:"nav-link","active-class":"is-active"},{default:To(()=>[...e[1]||(e[1]=[gr(" 服务编排平面 ",-1)])]),_:1}),Re(An(Ro),{to:"/topology",class:"nav-link","active-class":"is-active"},{default:To(()=>[...e[2]||(e[2]=[gr(" 二维拓扑 ",-1)])]),_:1})])]),me("main",Rv,[Re(An(sp))])]))}},Pv=Ki(Cv,[["__scopeId","data-v-e4469d26"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jc="169",Rs={ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lv=0,Mh=1,Dv=2,rp=1,op=2,Hn=3,vi=0,je=1,pn=2,pi=0,Cs=1,Wo=2,Sh=3,Eh=4,Iv=5,Ui=100,Uv=101,Nv=102,Ov=103,Fv=104,Bv=200,zv=201,Hv=202,Vv=203,Ul=204,Nl=205,Gv=206,kv=207,Wv=208,Xv=209,Yv=210,qv=211,Kv=212,jv=213,Zv=214,Ol=0,Fl=1,Bl=2,Os=3,zl=4,Hl=5,Vl=6,Gl=7,ap=0,$v=1,Jv=2,mi=0,Qv=1,t0=2,e0=3,n0=4,i0=5,s0=6,r0=7,lp=300,Fs=301,Bs=302,kl=303,Wl=304,fa=306,Xl=1e3,Fi=1001,Yl=1002,ln=1003,o0=1004,Wr=1005,mn=1006,Oa=1007,Bi=1008,$n=1009,cp=1010,up=1011,Cr=1012,Qc=1013,Gi=1014,Yn=1015,Nr=1016,tu=1017,eu=1018,zs=1020,hp=35902,fp=1021,dp=1022,_n=1023,pp=1024,mp=1025,Ps=1026,Hs=1027,gp=1028,nu=1029,_p=1030,iu=1031,su=1033,Co=33776,Po=33777,Lo=33778,Do=33779,ql=35840,Kl=35841,jl=35842,Zl=35843,$l=36196,Jl=37492,Ql=37496,tc=37808,ec=37809,nc=37810,ic=37811,sc=37812,rc=37813,oc=37814,ac=37815,lc=37816,cc=37817,uc=37818,hc=37819,fc=37820,dc=37821,Io=36492,pc=36494,mc=36495,vp=36283,gc=36284,_c=36285,vc=36286,a0=3200,l0=3201,xp=0,c0=1,fi="",En="srgb",Mi="srgb-linear",ru="display-p3",da="display-p3-linear",Xo="linear",ce="srgb",Yo="rec709",qo="p3",Ji=7680,Th=519,u0=512,h0=513,f0=514,yp=515,d0=516,p0=517,m0=518,g0=519,xc=35044,bh="300 es",qn=2e3,Ko=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ah=1234567;const vr=Math.PI/180,Vs=180/Math.PI;function Rn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function we(n,t,e){return Math.max(t,Math.min(e,n))}function ou(n,t){return(n%t+t)%t}function _0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function v0(n,t,e){return n!==t?(e-n)/(t-n):0}function xr(n,t,e){return(1-e)*n+e*t}function x0(n,t,e,i){return xr(n,t,1-Math.exp(-e*i))}function y0(n,t=1){return t-Math.abs(ou(n,t*2)-t)}function M0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function S0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function E0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function T0(n,t){return n+Math.random()*(t-n)}function b0(n){return n*(.5-Math.random())}function A0(n){n!==void 0&&(Ah=n);let t=Ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function w0(n){return n*vr}function R0(n){return n*Vs}function C0(n){return(n&n-1)===0&&n!==0}function P0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function L0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function D0(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xn={DEG2RAD:vr,RAD2DEG:Vs,generateUUID:Rn,clamp:we,euclideanModulo:ou,mapLinear:_0,inverseLerp:v0,lerp:xr,damp:x0,pingpong:y0,smoothstep:M0,smootherstep:S0,randInt:E0,randFloat:T0,randFloatSpread:b0,seededRandom:A0,degToRad:w0,radToDeg:R0,isPowerOfTwo:C0,ceilPowerOfTwo:P0,floorPowerOfTwo:L0,setQuaternionFromProperEuler:D0,normalize:ne,denormalize:gn};class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,s,r,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],b=s[1],M=s[4],E=s[7],P=s[2],C=s[5],R=s[8];return r[0]=o*x+a*b+l*P,r[3]=o*m+a*M+l*C,r[6]=o*p+a*E+l*R,r[1]=c*x+u*b+h*P,r[4]=c*m+u*M+h*C,r[7]=c*p+u*E+h*R,r[2]=f*x+d*b+g*P,r[5]=f*m+d*M+g*C,r[8]=f*p+d*E+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*c-u*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new Xt;function Mp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function I0(){const n=jo("canvas");return n.style.display="block",n}const wh={};function Uo(n){n in wh||(wh[n]=!0,console.warn(n))}function U0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function N0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function O0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Rh=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ch=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zs={[Mi]:{transfer:Xo,primaries:Yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[En]:{transfer:ce,primaries:Yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[da]:{transfer:Xo,primaries:qo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ch),fromReference:n=>n.applyMatrix3(Rh)},[ru]:{transfer:ce,primaries:qo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ch),fromReference:n=>n.applyMatrix3(Rh).convertLinearToSRGB()}},F0=new Set([Mi,da]),Qt={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!F0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Zs[t].toReference,s=Zs[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Zs[n].primaries},getTransfer:function(n){return n===fi?Xo:Zs[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Zs[t].luminanceCoefficients)}};function Ls(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ba(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qi;class B0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qi===void 0&&(Qi=jo("canvas")),Qi.width=t.width,Qi.height=t.height;const i=Qi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=jo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ls(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ls(e[i]/255)*255):e[i]=Ls(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let z0=0;class Sp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Rn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(za(s[o].image)):r.push(za(s[o]))}else r=za(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?B0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let H0=0;class We extends ji{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=Fi,s=Fi,r=mn,o=Bi,a=_n,l=$n,c=We.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Rn(),this.name="",this.source=new Sp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xl:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case Yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xl:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case Yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=lp;We.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,E=(d+1)/2,P=(p+1)/2,C=(u+f)/4,R=(h+x)/4,O=(g+m)/4;return M>E&&M>P?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=C/i,r=R/i):E>P?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=C/s,r=O/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=R/r,s=O/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V0 extends ji{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new We(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends V0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ep extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class G0 extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*x,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),C=Math.atan2(P,p*b);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const E=a*b;if(l=l*m+f*E,c=c*m+d*E,u=u*m+g*E,h=h*m+x*E,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ph.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ha.copy(this).projectOnVector(t),this.sub(Ha)}reflect(t){return this.sub(Ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new U,Ph=new xi;class Or{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xr.copy(i.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Yr.subVectors(this.max,$s),ts.subVectors(t.a,$s),es.subVectors(t.b,$s),ns.subVectors(t.c,$s),ni.subVectors(es,ts),ii.subVectors(ns,es),Ai.subVectors(ts,ns);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ai.z,Ai.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ai.z,0,-Ai.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ai.y,Ai.x,0];return!Va(e,ts,es,ns,Yr)||(e=[1,0,0,0,1,0,0,0,1],!Va(e,ts,es,ns,Yr))?!1:(qr.crossVectors(ni,ii),e=[qr.x,qr.y,qr.z],Va(e,ts,es,ns,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new U,new U,new U,new U,new U,new U,new U,new U],un=new U,Xr=new Or,ts=new U,es=new U,ns=new U,ni=new U,ii=new U,Ai=new U,$s=new U,Yr=new U,qr=new U,wi=new U;function Va(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){wi.fromArray(n,r);const a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),u=i.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const k0=new Or,Js=new U,Ga=new U;class Fr{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):k0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);const e=Js.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Js,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Ga)),this.expandByPoint(Js.copy(t.center).sub(Ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new U,ka=new U,Kr=new U,si=new U,Wa=new U,jr=new U,Xa=new U;class Br{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ka.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),si.copy(this.origin).sub(ka);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Kr),a=si.dot(this.direction),l=-si.dot(Kr),c=si.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ka).addScaledVector(Kr,f),d}intersectSphere(t,e){On.subVectors(t.center,this.origin);const i=On.dot(this.direction),s=On.dot(On)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,i,s,r){Wa.subVectors(e,t),jr.subVectors(i,t),Xa.crossVectors(Wa,jr);let o=this.direction.dot(Xa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);const l=a*this.direction.dot(jr.crossVectors(si,jr));if(l<0)return null;const c=a*this.direction.dot(Wa.cross(si));if(c<0||l+c>o)return null;const u=-a*si.dot(Xa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,i,s,r,o,a,l,c,u,h,f,d,g,x,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,x,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),o=1/is.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,x=c*h;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,x=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-x*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(W0,t,X0)}lookAt(t,e,i){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ri.crossVectors(i,Qe),ri.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ri.crossVectors(i,Qe)),ri.normalize(),Zr.crossVectors(Qe,ri),s[0]=ri.x,s[4]=Zr.x,s[8]=Qe.x,s[1]=ri.y,s[5]=Zr.y,s[9]=Qe.y,s[2]=ri.z,s[6]=Zr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],b=i[3],M=i[7],E=i[11],P=i[15],C=s[0],R=s[4],O=s[8],at=s[12],y=s[1],T=s[5],K=s[9],k=s[13],it=s[2],lt=s[6],q=s[10],st=s[14],X=s[3],vt=s[7],yt=s[11],St=s[15];return r[0]=o*C+a*y+l*it+c*X,r[4]=o*R+a*T+l*lt+c*vt,r[8]=o*O+a*K+l*q+c*yt,r[12]=o*at+a*k+l*st+c*St,r[1]=u*C+h*y+f*it+d*X,r[5]=u*R+h*T+f*lt+d*vt,r[9]=u*O+h*K+f*q+d*yt,r[13]=u*at+h*k+f*st+d*St,r[2]=g*C+x*y+m*it+p*X,r[6]=g*R+x*T+m*lt+p*vt,r[10]=g*O+x*K+m*q+p*yt,r[14]=g*at+x*k+m*st+p*St,r[3]=b*C+M*y+E*it+P*X,r[7]=b*R+M*T+E*lt+P*vt,r[11]=b*O+M*K+E*q+P*yt,r[15]=b*at+M*k+E*st+P*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],b=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,M=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,E=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,P=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,C=e*b+i*M+s*E+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=b*R,t[1]=(x*f*r-h*m*r-x*s*d+i*m*d+h*s*p-i*f*p)*R,t[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*R,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*R,t[4]=M*R,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*R,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*R,t[8]=E*R,t[9]=(g*h*r-u*x*r-g*i*d+e*x*d+u*i*p-e*h*p)*R,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*p+e*a*p)*R,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*R,t[12]=P*R,t[13]=(u*x*s-g*h*s+g*i*f-e*x*f-u*i*m+e*h*m)*R,t[14]=(g*a*s-o*x*s-g*i*l+e*x*l+o*i*m-e*a*m)*R,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,b=l*c,M=l*u,E=l*h,P=i.x,C=i.y,R=i.z;return s[0]=(1-(x+p))*P,s[1]=(d+E)*P,s[2]=(g-M)*P,s[3]=0,s[4]=(d-E)*C,s[5]=(1-(f+p))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(g+M)*R,s[9]=(m-b)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const o=is.set(s[4],s[5],s[6]).length(),a=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);const c=1/r,u=1/o,h=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,e.setFromRotationMatrix(hn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=qn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,g;if(a===qn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ko)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=qn){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,d=(i+s)*u;let g,x;if(a===qn)g=(o+r)*h,x=-2*h;else if(a===Ko)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const is=new U,hn=new re,W0=new U(0,0,0),X0=new U(1,1,1),ri=new U,Zr=new U,Qe=new U,Lh=new re,Dh=new xi;class Pn{constructor(t=0,e=0,i=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class au{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Y0=0;const Ih=new U,ss=new xi,Fn=new re,$r=new U,Qs=new U,q0=new U,K0=new xi,Uh=new U(1,0,0),Nh=new U(0,1,0),Oh=new U(0,0,1),Fh={type:"added"},j0={type:"removed"},rs={type:"childadded",child:null},Ya={type:"childremoved",child:null};class fe extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new U,e=new Pn,i=new xi,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Xt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Nh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Ih.copy(t).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Nh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?$r.copy(t):$r.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Qs,$r,this.up):Fn.lookAt($r,Qs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Fn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fh),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(j0),Ya.child=t,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fh),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,q0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,K0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}fe.DEFAULT_UP=new U(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new U,Bn=new U,qa=new U,zn=new U,os=new U,as=new U,Bh=new U,Ka=new U,ja=new U,Za=new U,$a=new ge,Ja=new ge,Qa=new ge;class on{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){fn.subVectors(s,e),Bn.subVectors(i,e),qa.subVectors(t,e);const o=fn.dot(fn),a=fn.dot(Bn),l=fn.dot(qa),c=Bn.dot(Bn),u=Bn.dot(qa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return $a.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),$a.fromBufferAttribute(t,e),Ja.fromBufferAttribute(t,i),Qa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($a,r.x),o.addScaledVector(Ja,r.y),o.addScaledVector(Qa,r.z),o}static isFrontFacing(t,e,i,s){return fn.subVectors(i,e),Bn.subVectors(t,e),fn.cross(Bn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),fn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;os.subVectors(s,i),as.subVectors(r,i),Ka.subVectors(t,i);const l=os.dot(Ka),c=as.dot(Ka);if(l<=0&&c<=0)return e.copy(i);ja.subVectors(t,s);const u=os.dot(ja),h=as.dot(ja);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(os,o);Za.subVectors(t,r);const d=os.dot(Za),g=as.dot(Za);if(g>=0&&d<=g)return e.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(as,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Bh.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Bh,a);const p=1/(m+x+f);return o=x*p,a=f*p,e.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function tl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=ou(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=tl(o,r,t+1/3),this.g=tl(o,r,t),this.b=tl(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=En){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const i=Tp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}copyLinearToSRGB(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return Qt.fromWorkingColorSpace(De.copy(this),t),Math.round(we(De.r*255,0,255))*65536+Math.round(we(De.g*255,0,255))*256+Math.round(we(De.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(De.copy(this),e);const i=De.r,s=De.g,r=De.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=En){Qt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,i=De.g,s=De.b;return t!==En?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Jr);const i=xr(oi.h,Jr.h,e),s=xr(oi.s,Jr.s,e),r=xr(oi.l,Jr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Vt;Vt.NAMES=Tp;let Z0=0;class Si extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Cs,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Nl,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ul&&(i.blendSrc=this.blendSrc),this.blendDst!==Nl&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Th&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gi extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new U,Qr=new xt;class Ze{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xc,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xc&&(t.usage=this.usage),t}}class bp extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ap extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ae extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}}let $0=0;const rn=new re,el=new fe,ls=new U,tn=new Or,tr=new Or,Ae=new U;class Ce extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mp(t)?Ap:bp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,i){return rn.makeTranslation(t,e,i),this.applyMatrix4(rn),this}scale(t,e,i){return rn.makeScale(t,e,i),this.applyMatrix4(rn),this}lookAt(t){return el.lookAt(t),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(tn.min,tr.min),tn.expandByPoint(Ae),Ae.addVectors(tn.max,tr.max),tn.expandByPoint(Ae)):(tn.expandByPoint(tr.min),tn.expandByPoint(tr.max))}tn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ae.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(t,c),Ae.add(ls)),s=Math.max(s,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new U,l[O]=new U;const c=new U,u=new U,h=new U,f=new xt,d=new xt,g=new xt,x=new U,m=new U;function p(O,at,y){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,at),h.fromBufferAttribute(i,y),f.fromBufferAttribute(r,O),d.fromBufferAttribute(r,at),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(T),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(T),a[O].add(x),a[at].add(x),a[y].add(x),l[O].add(m),l[at].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let O=0,at=b.length;O<at;++O){const y=b[O],T=y.start,K=y.count;for(let k=T,it=T+K;k<it;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new U,E=new U,P=new U,C=new U;function R(O){P.fromBufferAttribute(s,O),C.copy(P);const at=a[O];M.copy(at),M.sub(P.multiplyScalar(P.dot(at))).normalize(),E.crossVectors(C,at);const T=E.dot(l[O])<0?-1:1;o.setXYZW(O,M.x,M.y,M.z,T)}for(let O=0,at=b.length;O<at;++O){const y=b[O],T=y.start,K=y.count;for(let k=T,it=T+K;k<it;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ze(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zh=new re,Ri=new Br,to=new Fr,Hh=new U,eo=new U,no=new U,io=new U,nl=new U,so=new U,Vh=new U,ro=new U;class Se extends fe{constructor(t=new Ce,e=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(nl.fromBufferAttribute(h,t),o?so.addScaledVector(nl,u):so.addScaledVector(nl.sub(e),u))}e.add(so)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(to.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(to,Hh)===null||Ri.origin.distanceToSquared(Hh)>(t.far-t.near)**2))&&(zh.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(zh),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=b,P=M;E<P;E+=3){const C=a.getX(E),R=a.getX(E+1),O=a.getX(E+2);s=oo(this,p,t,i,c,u,h,C,R,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);s=oo(this,o,t,i,c,u,h,b,M,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=b,P=M;E<P;E+=3){const C=E,R=E+1,O=E+2;s=oo(this,p,t,i,c,u,h,C,R,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const b=m,M=m+1,E=m+2;s=oo(this,o,t,i,c,u,h,b,M,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function J0(n,t,e,i,s,r,o,a){let l;if(t.side===je?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===vi,a),l===null)return null;ro.copy(a),ro.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ro);return c<e.near||c>e.far?null:{distance:c,point:ro.clone(),object:n}}function oo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,eo),n.getVertexPosition(l,no),n.getVertexPosition(c,io);const u=J0(n,t,e,i,eo,no,io,Vh);if(u){const h=new U;on.getBarycoord(Vh,eo,no,io,h),s&&(u.uv=on.getInterpolatedAttribute(s,a,l,c,h,new xt)),r&&(u.uv1=on.getInterpolatedAttribute(r,a,l,c,h,new xt)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};on.getNormal(eo,no,io,f.normal),u.face=f,u.barycoord=h}return u}class Ws extends Ce{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(h,2));function g(x,m,p,b,M,E,P,C,R,O,at){const y=E/R,T=P/O,K=E/2,k=P/2,it=C/2,lt=R+1,q=O+1;let st=0,X=0;const vt=new U;for(let yt=0;yt<q;yt++){const St=yt*T-k;for(let I=0;I<lt;I++){const G=I*y-K;vt[x]=G*b,vt[m]=St*M,vt[p]=it,c.push(vt.x,vt.y,vt.z),vt[x]=0,vt[m]=0,vt[p]=C>0?1:-1,u.push(vt.x,vt.y,vt.z),h.push(I/R),h.push(1-yt/O),st+=1}}for(let yt=0;yt<O;yt++)for(let St=0;St<R;St++){const I=f+St+lt*yt,G=f+St+lt*(yt+1),L=f+(St+1)+lt*(yt+1),j=f+(St+1)+lt*yt;l.push(I,G,j),l.push(G,L,j),X+=6}a.addGroup(d,X,at),d+=X,f+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Be(n){const t={};for(let e=0;e<n.length;e++){const i=Gs(n[e]);for(const s in i)t[s]=i[s]}return t}function Q0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function wp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const tx={clone:Gs,merge:Be};var ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=Q0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Rp extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new U,Gh=new xt,kh=new xt;class Ge extends Rp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,Gh,kh),e.subVectors(kh,Gh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const cs=-90,us=1;class ix extends fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(cs,us,t,e);s.layers=this.layers,this.add(s);const r=new Ge(cs,us,t,e);r.layers=this.layers,this.add(r);const o=new Ge(cs,us,t,e);o.layers=this.layers,this.add(o);const a=new Ge(cs,us,t,e);a.layers=this.layers,this.add(a);const l=new Ge(cs,us,t,e);l.layers=this.layers,this.add(l);const c=new Ge(cs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cp extends We{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Fs,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sx extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Cp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ws(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:pi});r.uniforms.tEquirect.value=e;const o=new Se(s,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=mn),new ix(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const il=new U,rx=new U,ox=new Xt;class hi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=il.subVectors(i,e).cross(rx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(il),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ox.getNormalMatrix(t),s=this.coplanarPoint(il).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Fr,ao=new U;class lu{constructor(t=new hi,e=new hi,i=new hi,s=new hi,r=new hi,o=new hi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=qn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],b=s[13],M=s[14],E=s[15];if(i[0].setComponents(l-r,f-c,m-d,E-p).normalize(),i[1].setComponents(l+r,f+c,m+d,E+p).normalize(),i[2].setComponents(l+o,f+u,m+g,E+b).normalize(),i[3].setComponents(l-o,f-u,m-g,E-b).normalize(),i[4].setComponents(l-a,f-h,m-x,E-M).normalize(),e===qn)i[5].setComponents(l+a,f+h,m+x,E+M).normalize();else if(e===Ko)i[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ao.x=s.normal.x>0?t.max.x:t.min.x,ao.y=s.normal.y>0?t.max.y:t.min.y,ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ax(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Xs extends Ce{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const b=p*f-o;for(let M=0;M<c;M++){const E=M*h-r;g.push(E,-b,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,E=b+c*(p+1),P=b+1+c*(p+1),C=b+1+c*p;d.push(M,E,C),d.push(E,P,C)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.width,t.height,t.widthSegments,t.heightSegments)}}var lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ix=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ty=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ny=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ry=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ay=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,my=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_y=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Py=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,By=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:lx,alphahash_pars_fragment:cx,alphamap_fragment:ux,alphamap_pars_fragment:hx,alphatest_fragment:fx,alphatest_pars_fragment:dx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:gx,batching_vertex:_x,begin_vertex:vx,beginnormal_vertex:xx,bsdfs:yx,iridescence_fragment:Mx,bumpmap_pars_fragment:Sx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:bx,clipping_planes_vertex:Ax,color_fragment:wx,color_pars_fragment:Rx,color_pars_vertex:Cx,color_vertex:Px,common:Lx,cube_uv_reflection_fragment:Dx,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Ux,displacementmap_vertex:Nx,emissivemap_fragment:Ox,emissivemap_pars_fragment:Fx,colorspace_fragment:Bx,colorspace_pars_fragment:zx,envmap_fragment:Hx,envmap_common_pars_fragment:Vx,envmap_pars_fragment:Gx,envmap_pars_vertex:kx,envmap_physical_pars_fragment:ty,envmap_vertex:Wx,fog_vertex:Xx,fog_pars_vertex:Yx,fog_fragment:qx,fog_pars_fragment:Kx,gradientmap_pars_fragment:jx,lightmap_pars_fragment:Zx,lights_lambert_fragment:$x,lights_lambert_pars_fragment:Jx,lights_pars_begin:Qx,lights_toon_fragment:ey,lights_toon_pars_fragment:ny,lights_phong_fragment:iy,lights_phong_pars_fragment:sy,lights_physical_fragment:ry,lights_physical_pars_fragment:oy,lights_fragment_begin:ay,lights_fragment_maps:ly,lights_fragment_end:cy,logdepthbuf_fragment:uy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:fy,logdepthbuf_vertex:dy,map_fragment:py,map_pars_fragment:my,map_particle_fragment:gy,map_particle_pars_fragment:_y,metalnessmap_fragment:vy,metalnessmap_pars_fragment:xy,morphinstance_vertex:yy,morphcolor_vertex:My,morphnormal_vertex:Sy,morphtarget_pars_vertex:Ey,morphtarget_vertex:Ty,normal_fragment_begin:by,normal_fragment_maps:Ay,normal_pars_fragment:wy,normal_pars_vertex:Ry,normal_vertex:Cy,normalmap_pars_fragment:Py,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Dy,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Uy,opaque_fragment:Ny,packing:Oy,premultiplied_alpha_fragment:Fy,project_vertex:By,dithering_fragment:zy,dithering_pars_fragment:Hy,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Gy,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:Wy,shadowmap_vertex:Xy,shadowmask_pars_fragment:Yy,skinbase_vertex:qy,skinning_pars_vertex:Ky,skinning_vertex:jy,skinnormal_vertex:Zy,specularmap_fragment:$y,specularmap_pars_fragment:Jy,tonemapping_fragment:Qy,tonemapping_pars_fragment:tM,transmission_fragment:eM,transmission_pars_fragment:nM,uv_pars_fragment:iM,uv_pars_vertex:sM,uv_vertex:rM,worldpos_vertex:oM,background_vert:aM,background_frag:lM,backgroundCube_vert:cM,backgroundCube_frag:uM,cube_vert:hM,cube_frag:fM,depth_vert:dM,depth_frag:pM,distanceRGBA_vert:mM,distanceRGBA_frag:gM,equirect_vert:_M,equirect_frag:vM,linedashed_vert:xM,linedashed_frag:yM,meshbasic_vert:MM,meshbasic_frag:SM,meshlambert_vert:EM,meshlambert_frag:TM,meshmatcap_vert:bM,meshmatcap_frag:AM,meshnormal_vert:wM,meshnormal_frag:RM,meshphong_vert:CM,meshphong_frag:PM,meshphysical_vert:LM,meshphysical_frag:DM,meshtoon_vert:IM,meshtoon_frag:UM,points_vert:NM,points_frag:OM,shadow_vert:FM,shadow_frag:BM,sprite_vert:zM,sprite_frag:HM},Mt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},bn={basic:{uniforms:Be([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Be([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Be([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Be([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Be([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Be([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Be([Mt.points,Mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Be([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Be([Mt.common,Mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Be([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Be([Mt.sprite,Mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Be([Mt.common,Mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Be([Mt.lights,Mt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};bn.physical={uniforms:Be([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const lo={r:0,b:0,g:0},Pi=new Pn,VM=new re;function GM(n,t,e,i,s,r,o){const a=new Vt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function x(b){let M=!1;const E=g(b);E===null?p(a,l):E&&E.isColor&&(p(E,1),M=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===fa)?(u===void 0&&(u=new Se(new Ws(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Gs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Pi.copy(M.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(VM.makeRotationFromEuler(Pi)),u.material.toneMapped=Qt.getTransfer(E.colorSpace)!==ce,(h!==E||f!==E.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Se(new Xs(2,2),new Jn({name:"BackgroundMaterial",uniforms:Gs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(E.colorSpace)!==ce,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(lo,wp(n)),i.buffers.color.setClear(lo.r,lo.g,lo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:m}}function kM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,T,K,k,it){let lt=!1;const q=h(k,K,T);r!==q&&(r=q,c(r.object)),lt=d(y,k,K,it),lt&&g(y,k,K,it),it!==null&&t.update(it,n.ELEMENT_ARRAY_BUFFER),(lt||o)&&(o=!1,E(y,T,K,k),it!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,T,K){const k=K.wireframe===!0;let it=i[y.id];it===void 0&&(it={},i[y.id]=it);let lt=it[T.id];lt===void 0&&(lt={},it[T.id]=lt);let q=lt[k];return q===void 0&&(q=f(l()),lt[k]=q),q}function f(y){const T=[],K=[],k=[];for(let it=0;it<e;it++)T[it]=0,K[it]=0,k[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:K,attributeDivisors:k,object:y,attributes:{},index:null}}function d(y,T,K,k){const it=r.attributes,lt=T.attributes;let q=0;const st=K.getAttributes();for(const X in st)if(st[X].location>=0){const yt=it[X];let St=lt[X];if(St===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(St=y.instanceColor)),yt===void 0||yt.attribute!==St||St&&yt.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function g(y,T,K,k){const it={},lt=T.attributes;let q=0;const st=K.getAttributes();for(const X in st)if(st[X].location>=0){let yt=lt[X];yt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor));const St={};St.attribute=yt,yt&&yt.data&&(St.data=yt.data),it[X]=St,q++}r.attributes=it,r.attributesNum=q,r.index=k}function x(){const y=r.newAttributes;for(let T=0,K=y.length;T<K;T++)y[T]=0}function m(y){p(y,0)}function p(y,T){const K=r.newAttributes,k=r.enabledAttributes,it=r.attributeDivisors;K[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),it[y]!==T&&(n.vertexAttribDivisor(y,T),it[y]=T)}function b(){const y=r.newAttributes,T=r.enabledAttributes;for(let K=0,k=T.length;K<k;K++)T[K]!==y[K]&&(n.disableVertexAttribArray(K),T[K]=0)}function M(y,T,K,k,it,lt,q){q===!0?n.vertexAttribIPointer(y,T,K,it,lt):n.vertexAttribPointer(y,T,K,k,it,lt)}function E(y,T,K,k){x();const it=k.attributes,lt=K.getAttributes(),q=T.defaultAttributeValues;for(const st in lt){const X=lt[st];if(X.location>=0){let vt=it[st];if(vt===void 0&&(st==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),st==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor)),vt!==void 0){const yt=vt.normalized,St=vt.itemSize,I=t.get(vt);if(I===void 0)continue;const G=I.buffer,L=I.type,j=I.bytesPerElement,ut=L===n.INT||L===n.UNSIGNED_INT||vt.gpuType===Qc;if(vt.isInterleavedBufferAttribute){const D=vt.data,Z=D.stride,et=vt.offset;if(D.isInstancedInterleavedBuffer){for(let ct=0;ct<X.locationSize;ct++)p(X.location+ct,D.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ct=0;ct<X.locationSize;ct++)m(X.location+ct);n.bindBuffer(n.ARRAY_BUFFER,G);for(let ct=0;ct<X.locationSize;ct++)M(X.location+ct,St/X.locationSize,L,yt,Z*j,(et+St/X.locationSize*ct)*j,ut)}else{if(vt.isInstancedBufferAttribute){for(let D=0;D<X.locationSize;D++)p(X.location+D,vt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let D=0;D<X.locationSize;D++)m(X.location+D);n.bindBuffer(n.ARRAY_BUFFER,G);for(let D=0;D<X.locationSize;D++)M(X.location+D,St/X.locationSize,L,yt,St*j,St/X.locationSize*D*j,ut)}}else if(q!==void 0){const yt=q[st];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(X.location,yt);break;case 3:n.vertexAttrib3fv(X.location,yt);break;case 4:n.vertexAttrib4fv(X.location,yt);break;default:n.vertexAttrib1fv(X.location,yt)}}}}b()}function P(){O();for(const y in i){const T=i[y];for(const K in T){const k=T[K];for(const it in k)u(k[it].object),delete k[it];delete T[K]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const K in T){const k=T[K];for(const it in k)u(k[it].object),delete k[it];delete T[K]}delete i[y.id]}function R(y){for(const T in i){const K=i[T];if(K[y.id]===void 0)continue;const k=K[y.id];for(const it in k)u(k[it].object),delete k[it];delete K[y.id]}}function O(){at(),o=!0,r!==s&&(r=s,c(r.object))}function at(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:at,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function WM(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<f.length;x++)e.update(g,i,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function XM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==_n&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const O=R===Nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==$n&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Yn&&!O)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:P,maxSamples:C}}function YM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new hi,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,M=b*4;let E=p.clippingState||null;l.value=E,E=u(g,f,M,d);for(let P=0;P!==M;++P)E[P]=e[P];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=d;M!==x;++M,E+=4)o.copy(h[M]).applyMatrix4(b,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function qM(n){let t=new WeakMap;function e(o,a){return a===kl?o.mapping=Fs:a===Wl&&(o.mapping=Bs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kl||a===Wl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sx(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Lp extends Rp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ms=4,Wh=[.125,.215,.35,.446,.526,.582],Ni=20,sl=new Lp,Xh=new Vt;let rl=null,ol=0,al=0,ll=!1;const Ii=(1+Math.sqrt(5))/2,hs=1/Ii,Yh=[new U(-Ii,hs,0),new U(Ii,hs,0),new U(-hs,0,Ii),new U(hs,0,Ii),new U(0,Ii,-hs),new U(0,Ii,hs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class qh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rl,ol,al),this._renderer.xr.enabled=ll,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Nr,format:_n,colorSpace:Mi,depthBuffer:!1},s=Kh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KM(r)),this._blurMaterial=jM(r,t,e)}return s}_compileMaterial(t){const e=new Se(this._lodPlanes[0],t);this._renderer.compile(e,sl)}_sceneToCubeUV(t,e,i,s){const a=new Ge(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Xh),u.toneMapping=mi,u.autoClear=!1;const d=new gi({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new Se(new Ws,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Xh),x=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;co(s,b*M,p>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Fs||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;co(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,sl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yh[(s-r-1)%Yh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Se(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ni-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const p=[];let b=0;for(let R=0;R<Ni;++R){const O=R/x,at=Math.exp(-O*O/2);p.push(at),R===0?b+=at:R<m&&(b+=2*at)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const E=this._sizeLods[s],P=3*E*(s>M-Ms?s-M+Ms:0),C=4*(this._cubeSize-E);co(e,P,C,3*E,2*E),l.setRenderTarget(e),l.render(h,sl)}}function KM(n){const t=[],e=[],i=[];let s=n;const r=n-Ms+1+Wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ms?l=Wh[o-n+Ms-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*d),M=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let C=0;C<d;C++){const R=C%3*2/3-1,O=C>2?0:-1,at=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];b.set(at,x*g*C),M.set(f,m*g*C);const y=[C,C,C,C,C,C];E.set(y,p*g*C)}const P=new Ce;P.setAttribute("position",new Ze(b,x)),P.setAttribute("uv",new Ze(M,m)),P.setAttribute("faceIndex",new Ze(E,p)),t.push(P),s>Ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Kh(n,t,e){const i=new ki(n,t,e);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function jM(n,t,e){const i=new Float32Array(Ni),s=new U(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function jh(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Zh(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kl||l===Wl,u=l===Fs||l===Bs;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new qh(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new qh(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function $M(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Uo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function JM(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const b=d.array;x=d.version;for(let M=0,E=b.length;M<E;M+=3){const P=b[M+0],C=b[M+1],R=b[M+2];f.push(P,C,C,R,R,P)}}else if(g!==void 0){const b=g.array;x=g.version;for(let M=0,E=b.length/3-1;M<E;M+=3){const P=M+0,C=M+1,R=M+2;f.push(P,C,C,R,R,P)}}else return;const m=new(Mp(f)?Ap:bp)(f,1);m.version=x;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function QM(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function h(f,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b];for(let b=0;b<x.length;b++)e.update(p,i,x[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function tS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function eS(n,t,e){const i=new WeakMap,s=new ge;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let P=a.attributes.position.count*E,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const R=new Float32Array(P*C*4*h),O=new Ep(R,P,C,h);O.type=Yn,O.needsUpdate=!0;const at=E*4;for(let T=0;T<h;T++){const K=p[T],k=b[T],it=M[T],lt=P*C*4*T;for(let q=0;q<K.count;q++){const st=q*at;g===!0&&(s.fromBufferAttribute(K,q),R[lt+st+0]=s.x,R[lt+st+1]=s.y,R[lt+st+2]=s.z,R[lt+st+3]=0),x===!0&&(s.fromBufferAttribute(k,q),R[lt+st+4]=s.x,R[lt+st+5]=s.y,R[lt+st+6]=s.z,R[lt+st+7]=0),m===!0&&(s.fromBufferAttribute(it,q),R[lt+st+8]=s.x,R[lt+st+9]=s.y,R[lt+st+10]=s.z,R[lt+st+11]=it.itemSize===4?s.w:1)}}f={count:h,texture:O,size:new xt(P,C)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function nS(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Dp extends We{constructor(t,e,i,s,r,o,a,l,c,u=Ps){if(u!==Ps&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ps&&(i=Gi),i===void 0&&u===Hs&&(i=zs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ip=new We,$h=new Dp(1,1),Up=new Ep,Np=new G0,Op=new Cp,Jh=[],Qh=[],tf=new Float32Array(16),ef=new Float32Array(9),nf=new Float32Array(4);function Ys(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Jh[s];if(r===void 0&&(r=new Float32Array(s),Jh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Te(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function pa(n,t){let e=Qh[t];e===void 0&&(e=new Int32Array(t),Qh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function iS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function rS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function oS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function aS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Te(e,i))return;nf.set(i),n.uniformMatrix2fv(this.addr,!1,nf),be(e,i)}}function lS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Te(e,i))return;ef.set(i),n.uniformMatrix3fv(this.addr,!1,ef),be(e,i)}}function cS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Te(e,i))return;tf.set(i),n.uniformMatrix4fv(this.addr,!1,tf),be(e,i)}}function uS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function hS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function fS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function dS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function pS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function mS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function gS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function _S(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function vS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($h.compareFunction=yp,r=$h):r=Ip,e.setTexture2D(t||r,s)}function xS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Np,s)}function yS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Op,s)}function MS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Up,s)}function SS(n){switch(n){case 5126:return iS;case 35664:return sS;case 35665:return rS;case 35666:return oS;case 35674:return aS;case 35675:return lS;case 35676:return cS;case 5124:case 35670:return uS;case 35667:case 35671:return hS;case 35668:case 35672:return fS;case 35669:case 35673:return dS;case 5125:return pS;case 36294:return mS;case 36295:return gS;case 36296:return _S;case 35678:case 36198:case 36298:case 36306:case 35682:return vS;case 35679:case 36299:case 36307:return xS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return MS}}function ES(n,t){n.uniform1fv(this.addr,t)}function TS(n,t){const e=Ys(t,this.size,2);n.uniform2fv(this.addr,e)}function bS(n,t){const e=Ys(t,this.size,3);n.uniform3fv(this.addr,e)}function AS(n,t){const e=Ys(t,this.size,4);n.uniform4fv(this.addr,e)}function wS(n,t){const e=Ys(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function RS(n,t){const e=Ys(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function CS(n,t){const e=Ys(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function PS(n,t){n.uniform1iv(this.addr,t)}function LS(n,t){n.uniform2iv(this.addr,t)}function DS(n,t){n.uniform3iv(this.addr,t)}function IS(n,t){n.uniform4iv(this.addr,t)}function US(n,t){n.uniform1uiv(this.addr,t)}function NS(n,t){n.uniform2uiv(this.addr,t)}function OS(n,t){n.uniform3uiv(this.addr,t)}function FS(n,t){n.uniform4uiv(this.addr,t)}function BS(n,t,e){const i=this.cache,s=t.length,r=pa(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ip,r[o])}function zS(n,t,e){const i=this.cache,s=t.length,r=pa(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Np,r[o])}function HS(n,t,e){const i=this.cache,s=t.length,r=pa(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Op,r[o])}function VS(n,t,e){const i=this.cache,s=t.length,r=pa(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Up,r[o])}function GS(n){switch(n){case 5126:return ES;case 35664:return TS;case 35665:return bS;case 35666:return AS;case 35674:return wS;case 35675:return RS;case 35676:return CS;case 5124:case 35670:return PS;case 35667:case 35671:return LS;case 35668:case 35672:return DS;case 35669:case 35673:return IS;case 5125:return US;case 36294:return NS;case 36295:return OS;case 36296:return FS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return HS;case 36289:case 36303:case 36311:case 36292:return VS}}class kS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=SS(e.type)}}class WS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=GS(e.type)}}class XS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function sf(n,t){n.seq.push(t),n.map[t.id]=t}function YS(n,t,e){const i=n.name,s=i.length;for(cl.lastIndex=0;;){const r=cl.exec(i),o=cl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){sf(e,c===void 0?new kS(a,n,t):new WS(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new XS(a),sf(e,h)),e=h}}}class No{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);YS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function rf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const qS=37297;let KS=0;function jS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function ZS(n){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(n);let i;switch(t===e?i="":t===qo&&e===Yo?i="LinearDisplayP3ToLinearSRGB":t===Yo&&e===qo&&(i="LinearSRGBToLinearDisplayP3"),n){case Mi:case da:return[i,"LinearTransferOETF"];case En:case ru:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function of(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+jS(n.getShaderSource(t),o)}else return s}function $S(n,t){const e=ZS(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function JS(n,t){let e;switch(t){case Qv:e="Linear";break;case t0:e="Reinhard";break;case e0:e="Cineon";break;case n0:e="ACESFilmic";break;case s0:e="AgX";break;case r0:e="Neutral";break;case i0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const uo=new U;function QS(){Qt.getLuminanceCoefficients(uo);const n=uo.x.toFixed(4),t=uo.y.toFixed(4),e=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function eE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function nE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function or(n){return n!==""}function af(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iE=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(n){return n.replace(iE,rE)}const sE=new Map;function rE(n,t){let e=Wt[t];if(e===void 0){const i=sE.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return yc(e)}const oE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(n){return n.replace(oE,aE)}function aE(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===op?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function cE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fs:case Bs:t="ENVMAP_TYPE_CUBE";break;case fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function hE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ap:t="ENVMAP_BLENDING_MULTIPLY";break;case $v:t="ENVMAP_BLENDING_MIX";break;case Jv:t="ENVMAP_BLENDING_ADD";break}return t}function fE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function dE(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=lE(e),c=cE(e),u=uE(e),h=hE(e),f=fE(e),d=tE(e),g=eE(r),x=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==mi?JS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,$S("linearToOutputTexel",e.outputColorSpace),QS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=yc(o),o=af(o,e),o=lf(o,e),a=yc(a),a=af(a,e),a=lf(a,e),o=cf(o),a=cf(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+o,E=b+p+a,P=rf(s,s.VERTEX_SHADER,M),C=rf(s,s.FRAGMENT_SHADER,E);s.attachShader(x,P),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(T){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(P).trim(),it=s.getShaderInfoLog(C).trim();let lt=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(lt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,P,C);else{const st=of(s,P,"vertex"),X=of(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+K+`
`+st+`
`+X)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(k===""||it==="")&&(q=!1);q&&(T.diagnostics={runnable:lt,programLog:K,vertexShader:{log:k,prefix:m},fragmentShader:{log:it,prefix:p}})}s.deleteShader(P),s.deleteShader(C),O=new No(s,x),at=nE(s,x)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let at;this.getAttributes=function(){return at===void 0&&R(this),at};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,qS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=KS++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=C,this}let pE=0;class mE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new gE(t),e.set(t,i)),i}}class gE{constructor(t){this.id=pE++,this.code=t,this.usedTimes=0}}function _E(n,t,e,i,s,r,o){const a=new au,l=new mE,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,T,K,k,it){const lt=k.fog,q=it.geometry,st=y.isMeshStandardMaterial?k.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||st),vt=X&&X.mapping===fa?X.image.height:null,yt=x[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const St=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,I=St!==void 0?St.length:0;let G=0;q.morphAttributes.position!==void 0&&(G=1),q.morphAttributes.normal!==void 0&&(G=2),q.morphAttributes.color!==void 0&&(G=3);let L,j,ut,D;if(yt){const Ye=bn[yt];L=Ye.vertexShader,j=Ye.fragmentShader}else L=y.vertexShader,j=y.fragmentShader,l.update(y),ut=l.getVertexShaderID(y),D=l.getFragmentShaderID(y);const Z=n.getRenderTarget(),et=it.isInstancedMesh===!0,ct=it.isBatchedMesh===!0,Tt=!!y.map,w=!!y.matcap,v=!!X,B=!!y.aoMap,$=!!y.lightMap,nt=!!y.bumpMap,W=!!y.normalMap,dt=!!y.displacementMap,ot=!!y.emissiveMap,S=!!y.metalnessMap,_=!!y.roughnessMap,N=y.anisotropy>0,z=y.clearcoat>0,J=y.dispersion>0,Y=y.iridescence>0,gt=y.sheen>0,pt=y.transmission>0,mt=N&&!!y.anisotropyMap,Bt=z&&!!y.clearcoatMap,ft=z&&!!y.clearcoatNormalMap,Et=z&&!!y.clearcoatRoughnessMap,Dt=Y&&!!y.iridescenceMap,Ot=Y&&!!y.iridescenceThicknessMap,Ct=gt&&!!y.sheenColorMap,Ft=gt&&!!y.sheenRoughnessMap,Nt=!!y.specularMap,te=!!y.specularColorMap,F=!!y.specularIntensityMap,wt=pt&&!!y.transmissionMap,rt=pt&&!!y.thicknessMap,ht=!!y.gradientMap,bt=!!y.alphaMap,Rt=y.alphaTest>0,Yt=!!y.alphaHash,ve=!!y.extensions;let Xe=mi;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const qt={shaderID:yt,shaderType:y.type,shaderName:y.name,vertexShader:L,fragmentShader:j,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:D,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:ct,batchingColor:ct&&it._colorsTexture!==null,instancing:et,instancingColor:et&&it.instanceColor!==null,instancingMorph:et&&it.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Mi,alphaToCoverage:!!y.alphaToCoverage,map:Tt,matcap:w,envMap:v,envMapMode:v&&X.mapping,envMapCubeUVHeight:vt,aoMap:B,lightMap:$,bumpMap:nt,normalMap:W,displacementMap:d&&dt,emissiveMap:ot,normalMapObjectSpace:W&&y.normalMapType===c0,normalMapTangentSpace:W&&y.normalMapType===xp,metalnessMap:S,roughnessMap:_,anisotropy:N,anisotropyMap:mt,clearcoat:z,clearcoatMap:Bt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Et,dispersion:J,iridescence:Y,iridescenceMap:Dt,iridescenceThicknessMap:Ot,sheen:gt,sheenColorMap:Ct,sheenRoughnessMap:Ft,specularMap:Nt,specularColorMap:te,specularIntensityMap:F,transmission:pt,transmissionMap:wt,thicknessMap:rt,gradientMap:ht,opaque:y.transparent===!1&&y.blending===Cs&&y.alphaToCoverage===!1,alphaMap:bt,alphaTest:Rt,alphaHash:Yt,combine:y.combine,mapUv:Tt&&m(y.map.channel),aoMapUv:B&&m(y.aoMap.channel),lightMapUv:$&&m(y.lightMap.channel),bumpMapUv:nt&&m(y.bumpMap.channel),normalMapUv:W&&m(y.normalMap.channel),displacementMapUv:dt&&m(y.displacementMap.channel),emissiveMapUv:ot&&m(y.emissiveMap.channel),metalnessMapUv:S&&m(y.metalnessMap.channel),roughnessMapUv:_&&m(y.roughnessMap.channel),anisotropyMapUv:mt&&m(y.anisotropyMap.channel),clearcoatMapUv:Bt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ft&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&m(y.sheenRoughnessMap.channel),specularMapUv:Nt&&m(y.specularMap.channel),specularColorMapUv:te&&m(y.specularColorMap.channel),specularIntensityMapUv:F&&m(y.specularIntensityMap.channel),transmissionMapUv:wt&&m(y.transmissionMap.channel),thicknessMapUv:rt&&m(y.thicknessMap.channel),alphaMapUv:bt&&m(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(W||N),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!q.attributes.uv&&(Tt||bt),fog:!!lt,useFog:y.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:it.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:G,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&K.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===ce,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pn,flipSided:y.side===je,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ve&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&y.extensions.multiDraw===!0||ct)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function b(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const K in y.defines)T.push(K),T.push(y.defines[K]);return y.isRawShaderMaterial===!1&&(M(T,y),E(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function M(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function E(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){const T=x[y.type];let K;if(T){const k=bn[T];K=tx.clone(k.uniforms)}else K=y.uniforms;return K}function C(y,T){let K;for(let k=0,it=u.length;k<it;k++){const lt=u[k];if(lt.cacheKey===T){K=lt,++K.usedTimes;break}}return K===void 0&&(K=new dE(n,T,y,r),u.push(K)),K}function R(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function O(y){l.remove(y)}function at(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:P,acquireProgram:C,releaseProgram:R,releaseShaderCache:O,programs:u,dispose:at}}function vE(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function xE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function hf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ff(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,g,x,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function a(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||xE),i.length>1&&i.sort(f||hf),s.length>1&&s.sort(f||hf)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function yE(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new ff,n.set(i,[o])):s>=r.length?(o=new ff,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ME(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Vt};break;case"SpotLight":e={position:new U,direction:new U,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function SE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let EE=0;function TE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function bE(n){const t=new ME,e=SE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new re,o=new re;function a(c){let u=0,h=0,f=0;for(let at=0;at<9;at++)i.probe[at].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,b=0,M=0,E=0,P=0,C=0,R=0;c.sort(TE);for(let at=0,y=c.length;at<y;at++){const T=c[at],K=T.color,k=T.intensity,it=T.distance,lt=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=K.r*k,h+=K.g*k,f+=K.b*k;else if(T.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(T.sh.coefficients[q],k);R++}else if(T.isDirectionalLight){const q=t.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const st=T.shadow,X=e.get(T);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=lt,i.directionalShadowMatrix[d]=T.shadow.matrix,b++}i.directional[d]=q,d++}else if(T.isSpotLight){const q=t.get(T);q.position.setFromMatrixPosition(T.matrixWorld),q.color.copy(K).multiplyScalar(k),q.distance=it,q.coneCos=Math.cos(T.angle),q.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),q.decay=T.decay,i.spot[x]=q;const st=T.shadow;if(T.map&&(i.spotLightMap[P]=T.map,P++,st.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[x]=st.matrix,T.castShadow){const X=e.get(T);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=lt,E++}x++}else if(T.isRectAreaLight){const q=t.get(T);q.color.copy(K).multiplyScalar(k),q.halfWidth.set(T.width*.5,0,0),q.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=q,m++}else if(T.isPointLight){const q=t.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity),q.distance=T.distance,q.decay=T.decay,T.castShadow){const st=T.shadow,X=e.get(T);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,X.shadowCameraNear=st.camera.near,X.shadowCameraFar=st.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=lt,i.pointShadowMatrix[g]=T.shadow.matrix,M++}i.point[g]=q,g++}else if(T.isHemisphereLight){const q=t.get(T);q.skyColor.copy(T.color).multiplyScalar(k),q.groundColor.copy(T.groundColor).multiplyScalar(k),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==d||O.pointLength!==g||O.spotLength!==x||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==b||O.numPointShadows!==M||O.numSpotShadows!==E||O.numSpotMaps!==P||O.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,O.directionalLength=d,O.pointLength=g,O.spotLength=x,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=b,O.numPointShadows=M,O.numSpotShadows=E,O.numSpotMaps=P,O.numLightProbes=R,i.version=EE++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(M.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function df(n){const t=new bE(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function AE(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new df(n),t.set(s,[a])):r>=o.length?(a=new df(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class wE extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class RE extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const CE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LE(n,t,e){let i=new lu;const s=new xt,r=new xt,o=new ge,a=new wE({depthPacking:l0}),l=new RE,c={},u=e.maxTextureSize,h={[vi]:je,[je]:vi,[pn]:pn},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:CE,fragmentShader:PE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Se(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rp;let p=this.type;this.render=function(C,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const at=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),K=n.state;K.setBlending(pi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const k=p!==Hn&&this.type===Hn,it=p===Hn&&this.type!==Hn;for(let lt=0,q=C.length;lt<q;lt++){const st=C[lt],X=st.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const vt=X.getFrameExtents();if(s.multiply(vt),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/vt.x),s.x=r.x*vt.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/vt.y),s.y=r.y*vt.y,X.mapSize.y=r.y)),X.map===null||k===!0||it===!0){const St=this.type!==Hn?{minFilter:ln,magFilter:ln}:{};X.map!==null&&X.map.dispose(),X.map=new ki(s.x,s.y,St),X.map.texture.name=st.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const yt=X.getViewportCount();for(let St=0;St<yt;St++){const I=X.getViewport(St);o.set(r.x*I.x,r.y*I.y,r.x*I.z,r.y*I.w),K.viewport(o),X.updateMatrices(st,St),i=X.getFrustum(),E(R,O,X.camera,st,this.type)}X.isPointLightShadow!==!0&&this.type===Hn&&b(X,O),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(at,y,T)};function b(C,R){const O=t.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ki(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,O,f,x,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,O,d,x,null)}function M(C,R,O,at){let y=null;const T=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)y=T;else if(y=O.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const K=y.uuid,k=R.uuid;let it=c[K];it===void 0&&(it={},c[K]=it);let lt=it[k];lt===void 0&&(lt=y.clone(),it[k]=lt,R.addEventListener("dispose",P)),y=lt}if(y.visible=R.visible,y.wireframe=R.wireframe,at===Hn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const K=n.properties.get(y);K.light=O}return y}function E(C,R,O,at,y){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Hn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const k=t.update(C),it=C.material;if(Array.isArray(it)){const lt=k.groups;for(let q=0,st=lt.length;q<st;q++){const X=lt[q],vt=it[X.materialIndex];if(vt&&vt.visible){const yt=M(C,vt,at,y);C.onBeforeShadow(n,C,R,O,k,yt,X),n.renderBufferDirect(O,null,k,yt,C,X),C.onAfterShadow(n,C,R,O,k,yt,X)}}}else if(it.visible){const lt=M(C,it,at,y);C.onBeforeShadow(n,C,R,O,k,lt,null),n.renderBufferDirect(O,null,k,lt,C,null),C.onAfterShadow(n,C,R,O,k,lt,null)}}const K=C.children;for(let k=0,it=K.length;k<it;k++)E(K[k],R,O,at,y)}function P(C){C.target.removeEventListener("dispose",P);for(const O in c){const at=c[O],y=C.target.uuid;y in at&&(at[y].dispose(),delete at[y])}}}const DE={[Ol]:Fl,[Bl]:Vl,[zl]:Gl,[Os]:Hl,[Fl]:Ol,[Vl]:Bl,[Gl]:zl,[Hl]:Os};function IE(n){function t(){let F=!1;const wt=new ge;let rt=null;const ht=new ge(0,0,0,0);return{setMask:function(bt){rt!==bt&&!F&&(n.colorMask(bt,bt,bt,bt),rt=bt)},setLocked:function(bt){F=bt},setClear:function(bt,Rt,Yt,ve,Xe){Xe===!0&&(bt*=ve,Rt*=ve,Yt*=ve),wt.set(bt,Rt,Yt,ve),ht.equals(wt)===!1&&(n.clearColor(bt,Rt,Yt,ve),ht.copy(wt))},reset:function(){F=!1,rt=null,ht.set(-1,0,0,0)}}}function e(){let F=!1,wt=!1,rt=null,ht=null,bt=null;return{setReversed:function(Rt){wt=Rt},setTest:function(Rt){Rt?ut(n.DEPTH_TEST):D(n.DEPTH_TEST)},setMask:function(Rt){rt!==Rt&&!F&&(n.depthMask(Rt),rt=Rt)},setFunc:function(Rt){if(wt&&(Rt=DE[Rt]),ht!==Rt){switch(Rt){case Ol:n.depthFunc(n.NEVER);break;case Fl:n.depthFunc(n.ALWAYS);break;case Bl:n.depthFunc(n.LESS);break;case Os:n.depthFunc(n.LEQUAL);break;case zl:n.depthFunc(n.EQUAL);break;case Hl:n.depthFunc(n.GEQUAL);break;case Vl:n.depthFunc(n.GREATER);break;case Gl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=Rt}},setLocked:function(Rt){F=Rt},setClear:function(Rt){bt!==Rt&&(n.clearDepth(Rt),bt=Rt)},reset:function(){F=!1,rt=null,ht=null,bt=null}}}function i(){let F=!1,wt=null,rt=null,ht=null,bt=null,Rt=null,Yt=null,ve=null,Xe=null;return{setTest:function(qt){F||(qt?ut(n.STENCIL_TEST):D(n.STENCIL_TEST))},setMask:function(qt){wt!==qt&&!F&&(n.stencilMask(qt),wt=qt)},setFunc:function(qt,Ye,Dn){(rt!==qt||ht!==Ye||bt!==Dn)&&(n.stencilFunc(qt,Ye,Dn),rt=qt,ht=Ye,bt=Dn)},setOp:function(qt,Ye,Dn){(Rt!==qt||Yt!==Ye||ve!==Dn)&&(n.stencilOp(qt,Ye,Dn),Rt=qt,Yt=Ye,ve=Dn)},setLocked:function(qt){F=qt},setClear:function(qt){Xe!==qt&&(n.clearStencil(qt),Xe=qt)},reset:function(){F=!1,wt=null,rt=null,ht=null,bt=null,Rt=null,Yt=null,ve=null,Xe=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,x=null,m=null,p=null,b=null,M=null,E=null,P=null,C=new Vt(0,0,0),R=0,O=!1,at=null,y=null,T=null,K=null,k=null;const it=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,q=0;const st=n.getParameter(n.VERSION);st.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(st)[1]),lt=q>=1):st.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),lt=q>=2);let X=null,vt={};const yt=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),I=new ge().fromArray(yt),G=new ge().fromArray(St);function L(F,wt,rt,ht){const bt=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(F,Rt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<rt;Yt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,ht,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(wt+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return Rt}const j={};j[n.TEXTURE_2D]=L(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=L(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=L(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=L(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ut(n.DEPTH_TEST),r.setFunc(Os),$(!1),nt(Mh),ut(n.CULL_FACE),v(pi);function ut(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function D(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function Z(F,wt){return u[F]!==wt?(n.bindFramebuffer(F,wt),u[F]=wt,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=wt),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function et(F,wt){let rt=f,ht=!1;if(F){rt=h.get(wt),rt===void 0&&(rt=[],h.set(wt,rt));const bt=F.textures;if(rt.length!==bt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,Yt=bt.length;Rt<Yt;Rt++)rt[Rt]=n.COLOR_ATTACHMENT0+Rt;rt.length=bt.length,ht=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,ht=!0);ht&&n.drawBuffers(rt)}function ct(F){return d!==F?(n.useProgram(F),d=F,!0):!1}const Tt={[Ui]:n.FUNC_ADD,[Uv]:n.FUNC_SUBTRACT,[Nv]:n.FUNC_REVERSE_SUBTRACT};Tt[Ov]=n.MIN,Tt[Fv]=n.MAX;const w={[Bv]:n.ZERO,[zv]:n.ONE,[Hv]:n.SRC_COLOR,[Ul]:n.SRC_ALPHA,[Yv]:n.SRC_ALPHA_SATURATE,[Wv]:n.DST_COLOR,[Gv]:n.DST_ALPHA,[Vv]:n.ONE_MINUS_SRC_COLOR,[Nl]:n.ONE_MINUS_SRC_ALPHA,[Xv]:n.ONE_MINUS_DST_COLOR,[kv]:n.ONE_MINUS_DST_ALPHA,[qv]:n.CONSTANT_COLOR,[Kv]:n.ONE_MINUS_CONSTANT_COLOR,[jv]:n.CONSTANT_ALPHA,[Zv]:n.ONE_MINUS_CONSTANT_ALPHA};function v(F,wt,rt,ht,bt,Rt,Yt,ve,Xe,qt){if(F===pi){g===!0&&(D(n.BLEND),g=!1);return}if(g===!1&&(ut(n.BLEND),g=!0),F!==Iv){if(F!==x||qt!==O){if((m!==Ui||M!==Ui)&&(n.blendEquation(n.FUNC_ADD),m=Ui,M=Ui),qt)switch(F){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wo:n.blendFunc(n.ONE,n.ONE);break;case Sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}p=null,b=null,E=null,P=null,C.set(0,0,0),R=0,x=F,O=qt}return}bt=bt||wt,Rt=Rt||rt,Yt=Yt||ht,(wt!==m||bt!==M)&&(n.blendEquationSeparate(Tt[wt],Tt[bt]),m=wt,M=bt),(rt!==p||ht!==b||Rt!==E||Yt!==P)&&(n.blendFuncSeparate(w[rt],w[ht],w[Rt],w[Yt]),p=rt,b=ht,E=Rt,P=Yt),(ve.equals(C)===!1||Xe!==R)&&(n.blendColor(ve.r,ve.g,ve.b,Xe),C.copy(ve),R=Xe),x=F,O=!1}function B(F,wt){F.side===pn?D(n.CULL_FACE):ut(n.CULL_FACE);let rt=F.side===je;wt&&(rt=!rt),$(rt),F.blending===Cs&&F.transparent===!1?v(pi):v(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const ht=F.stencilWrite;o.setTest(ht),ht&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),dt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):D(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(F){at!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),at=F)}function nt(F){F!==Lv?(ut(n.CULL_FACE),F!==y&&(F===Mh?n.cullFace(n.BACK):F===Dv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):D(n.CULL_FACE),y=F}function W(F){F!==T&&(lt&&n.lineWidth(F),T=F)}function dt(F,wt,rt){F?(ut(n.POLYGON_OFFSET_FILL),(K!==wt||k!==rt)&&(n.polygonOffset(wt,rt),K=wt,k=rt)):D(n.POLYGON_OFFSET_FILL)}function ot(F){F?ut(n.SCISSOR_TEST):D(n.SCISSOR_TEST)}function S(F){F===void 0&&(F=n.TEXTURE0+it-1),X!==F&&(n.activeTexture(F),X=F)}function _(F,wt,rt){rt===void 0&&(X===null?rt=n.TEXTURE0+it-1:rt=X);let ht=vt[rt];ht===void 0&&(ht={type:void 0,texture:void 0},vt[rt]=ht),(ht.type!==F||ht.texture!==wt)&&(X!==rt&&(n.activeTexture(rt),X=rt),n.bindTexture(F,wt||j[F]),ht.type=F,ht.texture=wt)}function N(){const F=vt[X];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(F){I.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),I.copy(F))}function Ct(F){G.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),G.copy(F))}function Ft(F,wt){let rt=l.get(wt);rt===void 0&&(rt=new WeakMap,l.set(wt,rt));let ht=rt.get(F);ht===void 0&&(ht=n.getUniformBlockIndex(wt,F.name),rt.set(F,ht))}function Nt(F,wt){const ht=l.get(wt).get(F);a.get(wt)!==ht&&(n.uniformBlockBinding(wt,ht,F.__bindingPointIndex),a.set(wt,ht))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,vt={},u={},h=new WeakMap,f=[],d=null,g=!1,x=null,m=null,p=null,b=null,M=null,E=null,P=null,C=new Vt(0,0,0),R=0,O=!1,at=null,y=null,T=null,K=null,k=null,I.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ut,disable:D,bindFramebuffer:Z,drawBuffers:et,useProgram:ct,setBlending:v,setMaterial:B,setFlipSided:$,setCullFace:nt,setLineWidth:W,setPolygonOffset:dt,setScissorTest:ot,activeTexture:S,bindTexture:_,unbindTexture:N,compressedTexImage2D:z,compressedTexImage3D:J,texImage2D:Et,texImage3D:Dt,updateUBOMapping:Ft,uniformBlockBinding:Nt,texStorage2D:Bt,texStorage3D:ft,texSubImage2D:Y,texSubImage3D:gt,compressedTexSubImage2D:pt,compressedTexSubImage3D:mt,scissor:Ot,viewport:Ct,reset:te}}function pf(n,t,e,i){const s=UE(i);switch(e){case fp:return n*t;case pp:return n*t;case mp:return n*t*2;case gp:return n*t/s.components*s.byteLength;case nu:return n*t/s.components*s.byteLength;case _p:return n*t*2/s.components*s.byteLength;case iu:return n*t*2/s.components*s.byteLength;case dp:return n*t*3/s.components*s.byteLength;case _n:return n*t*4/s.components*s.byteLength;case su:return n*t*4/s.components*s.byteLength;case Co:case Po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Lo:case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kl:case Zl:return Math.max(n,16)*Math.max(t,8)/4;case ql:case jl:return Math.max(n,8)*Math.max(t,8)/2;case $l:case Jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ic:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case rc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case lc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case cc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Io:case pc:case mc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case vp:case gc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case _c:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function UE(n){switch(n){case $n:case cp:return{byteLength:1,components:1};case Cr:case up:case Nr:return{byteLength:2,components:1};case tu:case eu:return{byteLength:2,components:4};case Gi:case Qc:case Yn:return{byteLength:4,components:1};case hp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function NE(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return d?new OffscreenCanvas(S,_):jo("canvas")}function x(S,_,N){let z=1;const J=ot(S);if((J.width>N||J.height>N)&&(z=N/Math.max(J.width,J.height)),z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const Y=Math.floor(z*J.width),gt=Math.floor(z*J.height);h===void 0&&(h=g(Y,gt));const pt=_?g(Y,gt):h;return pt.width=Y,pt.height=gt,pt.getContext("2d").drawImage(S,0,0,Y,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+gt+")."),pt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),S;return S}function m(S){return S.generateMipmaps&&S.minFilter!==ln&&S.minFilter!==mn}function p(S){n.generateMipmap(S)}function b(S,_,N,z,J=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Y=_;if(_===n.RED&&(N===n.FLOAT&&(Y=n.R32F),N===n.HALF_FLOAT&&(Y=n.R16F),N===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.R8UI),N===n.UNSIGNED_SHORT&&(Y=n.R16UI),N===n.UNSIGNED_INT&&(Y=n.R32UI),N===n.BYTE&&(Y=n.R8I),N===n.SHORT&&(Y=n.R16I),N===n.INT&&(Y=n.R32I)),_===n.RG&&(N===n.FLOAT&&(Y=n.RG32F),N===n.HALF_FLOAT&&(Y=n.RG16F),N===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RG8UI),N===n.UNSIGNED_SHORT&&(Y=n.RG16UI),N===n.UNSIGNED_INT&&(Y=n.RG32UI),N===n.BYTE&&(Y=n.RG8I),N===n.SHORT&&(Y=n.RG16I),N===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),N===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),N===n.UNSIGNED_INT&&(Y=n.RGB32UI),N===n.BYTE&&(Y=n.RGB8I),N===n.SHORT&&(Y=n.RGB16I),N===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),N===n.UNSIGNED_INT&&(Y=n.RGBA32UI),N===n.BYTE&&(Y=n.RGBA8I),N===n.SHORT&&(Y=n.RGBA16I),N===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),_===n.RGBA){const gt=J?Xo:Qt.getTransfer(z);N===n.FLOAT&&(Y=n.RGBA32F),N===n.HALF_FLOAT&&(Y=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Y=gt===ce?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(S,_){let N;return S?_===null||_===Gi||_===zs?N=n.DEPTH24_STENCIL8:_===Yn?N=n.DEPTH32F_STENCIL8:_===Cr&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Gi||_===zs?N=n.DEPTH_COMPONENT24:_===Yn?N=n.DEPTH_COMPONENT32F:_===Cr&&(N=n.DEPTH_COMPONENT16),N}function E(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==ln&&S.minFilter!==mn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function P(S){const _=S.target;_.removeEventListener("dispose",P),R(_),_.isVideoTexture&&u.delete(_)}function C(S){const _=S.target;_.removeEventListener("dispose",C),at(_)}function R(S){const _=i.get(S);if(_.__webglInit===void 0)return;const N=S.source,z=f.get(N);if(z){const J=z[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&O(S),Object.keys(z).length===0&&f.delete(N)}i.remove(S)}function O(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const N=S.source,z=f.get(N);delete z[_.__cacheKey],o.memory.textures--}function at(S){const _=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let J=0;J<_.__webglFramebuffer[z].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[z][J]);else n.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)n.deleteFramebuffer(_.__webglFramebuffer[z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=S.textures;for(let z=0,J=N.length;z<J;z++){const Y=i.get(N[z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(N[z])}i.remove(S)}let y=0;function T(){y=0}function K(){const S=y;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),y+=1,S}function k(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function it(S,_){const N=i.get(S);if(S.isVideoTexture&&W(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){const z=S.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(N,S,_);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+_)}function lt(S,_){const N=i.get(S);if(S.version>0&&N.__version!==S.version){G(N,S,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+_)}function q(S,_){const N=i.get(S);if(S.version>0&&N.__version!==S.version){G(N,S,_);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+_)}function st(S,_){const N=i.get(S);if(S.version>0&&N.__version!==S.version){L(N,S,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+_)}const X={[Xl]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[Yl]:n.MIRRORED_REPEAT},vt={[ln]:n.NEAREST,[o0]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[Oa]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},yt={[u0]:n.NEVER,[g0]:n.ALWAYS,[h0]:n.LESS,[yp]:n.LEQUAL,[f0]:n.EQUAL,[m0]:n.GEQUAL,[d0]:n.GREATER,[p0]:n.NOTEQUAL};function St(S,_){if(_.type===Yn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===mn||_.magFilter===Oa||_.magFilter===Wr||_.magFilter===Bi||_.minFilter===mn||_.minFilter===Oa||_.minFilter===Wr||_.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,X[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,X[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,X[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,vt[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,vt[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,yt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ln||_.minFilter!==Wr&&_.minFilter!==Bi||_.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function I(S,_){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",P));const z=_.source;let J=f.get(z);J===void 0&&(J={},f.set(z,J));const Y=k(_);if(Y!==S.__cacheKey){J[Y]===void 0&&(J[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[Y].usedTimes++;const gt=J[S.__cacheKey];gt!==void 0&&(J[S.__cacheKey].usedTimes--,gt.usedTimes===0&&O(_)),S.__cacheKey=Y,S.__webglTexture=J[Y].texture}return N}function G(S,_,N){let z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=n.TEXTURE_3D);const J=I(S,_),Y=_.source;e.bindTexture(z,S.__webglTexture,n.TEXTURE0+N);const gt=i.get(Y);if(Y.version!==gt.__version||J===!0){e.activeTexture(n.TEXTURE0+N);const pt=Qt.getPrimaries(Qt.workingColorSpace),mt=_.colorSpace===fi?null:Qt.getPrimaries(_.colorSpace),Bt=_.colorSpace===fi||pt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let ft=x(_.image,!1,s.maxTextureSize);ft=dt(_,ft);const Et=r.convert(_.format,_.colorSpace),Dt=r.convert(_.type);let Ot=b(_.internalFormat,Et,Dt,_.colorSpace,_.isVideoTexture);St(z,_);let Ct;const Ft=_.mipmaps,Nt=_.isVideoTexture!==!0,te=gt.__version===void 0||J===!0,F=Y.dataReady,wt=E(_,ft);if(_.isDepthTexture)Ot=M(_.format===Hs,_.type),te&&(Nt?e.texStorage2D(n.TEXTURE_2D,1,Ot,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,Ot,ft.width,ft.height,0,Et,Dt,null));else if(_.isDataTexture)if(Ft.length>0){Nt&&te&&e.texStorage2D(n.TEXTURE_2D,wt,Ot,Ft[0].width,Ft[0].height);for(let rt=0,ht=Ft.length;rt<ht;rt++)Ct=Ft[rt],Nt?F&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Ct.width,Ct.height,Et,Dt,Ct.data):e.texImage2D(n.TEXTURE_2D,rt,Ot,Ct.width,Ct.height,0,Et,Dt,Ct.data);_.generateMipmaps=!1}else Nt?(te&&e.texStorage2D(n.TEXTURE_2D,wt,Ot,ft.width,ft.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft.width,ft.height,Et,Dt,ft.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,ft.width,ft.height,0,Et,Dt,ft.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Nt&&te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Ot,Ft[0].width,Ft[0].height,ft.depth);for(let rt=0,ht=Ft.length;rt<ht;rt++)if(Ct=Ft[rt],_.format!==_n)if(Et!==null)if(Nt){if(F)if(_.layerUpdates.size>0){const bt=pf(Ct.width,Ct.height,_.format,_.type);for(const Rt of _.layerUpdates){const Yt=Ct.data.subarray(Rt*bt/Ct.data.BYTES_PER_ELEMENT,(Rt+1)*bt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,Rt,Ct.width,Ct.height,1,Et,Yt,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Ct.width,Ct.height,ft.depth,Et,Ct.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,Ot,Ct.width,Ct.height,ft.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Ct.width,Ct.height,ft.depth,Et,Dt,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,Ot,Ct.width,Ct.height,ft.depth,0,Et,Dt,Ct.data)}else{Nt&&te&&e.texStorage2D(n.TEXTURE_2D,wt,Ot,Ft[0].width,Ft[0].height);for(let rt=0,ht=Ft.length;rt<ht;rt++)Ct=Ft[rt],_.format!==_n?Et!==null?Nt?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,Ct.width,Ct.height,Et,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,Ot,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?F&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Ct.width,Ct.height,Et,Dt,Ct.data):e.texImage2D(n.TEXTURE_2D,rt,Ot,Ct.width,Ct.height,0,Et,Dt,Ct.data)}else if(_.isDataArrayTexture)if(Nt){if(te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Ot,ft.width,ft.height,ft.depth),F)if(_.layerUpdates.size>0){const rt=pf(ft.width,ft.height,_.format,_.type);for(const ht of _.layerUpdates){const bt=ft.data.subarray(ht*rt/ft.data.BYTES_PER_ELEMENT,(ht+1)*rt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ht,ft.width,ft.height,1,Et,Dt,bt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Et,Dt,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,ft.width,ft.height,ft.depth,0,Et,Dt,ft.data);else if(_.isData3DTexture)Nt?(te&&e.texStorage3D(n.TEXTURE_3D,wt,Ot,ft.width,ft.height,ft.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Et,Dt,ft.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,ft.width,ft.height,ft.depth,0,Et,Dt,ft.data);else if(_.isFramebufferTexture){if(te)if(Nt)e.texStorage2D(n.TEXTURE_2D,wt,Ot,ft.width,ft.height);else{let rt=ft.width,ht=ft.height;for(let bt=0;bt<wt;bt++)e.texImage2D(n.TEXTURE_2D,bt,Ot,rt,ht,0,Et,Dt,null),rt>>=1,ht>>=1}}else if(Ft.length>0){if(Nt&&te){const rt=ot(Ft[0]);e.texStorage2D(n.TEXTURE_2D,wt,Ot,rt.width,rt.height)}for(let rt=0,ht=Ft.length;rt<ht;rt++)Ct=Ft[rt],Nt?F&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Et,Dt,Ct):e.texImage2D(n.TEXTURE_2D,rt,Ot,Et,Dt,Ct);_.generateMipmaps=!1}else if(Nt){if(te){const rt=ot(ft);e.texStorage2D(n.TEXTURE_2D,wt,Ot,rt.width,rt.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Dt,ft)}else e.texImage2D(n.TEXTURE_2D,0,Ot,Et,Dt,ft);m(_)&&p(z),gt.__version=Y.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function L(S,_,N){if(_.image.length!==6)return;const z=I(S,_),J=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+N);const Y=i.get(J);if(J.version!==Y.__version||z===!0){e.activeTexture(n.TEXTURE0+N);const gt=Qt.getPrimaries(Qt.workingColorSpace),pt=_.colorSpace===fi?null:Qt.getPrimaries(_.colorSpace),mt=_.colorSpace===fi||gt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Bt=_.isCompressedTexture||_.image[0].isCompressedTexture,ft=_.image[0]&&_.image[0].isDataTexture,Et=[];for(let ht=0;ht<6;ht++)!Bt&&!ft?Et[ht]=x(_.image[ht],!0,s.maxCubemapSize):Et[ht]=ft?_.image[ht].image:_.image[ht],Et[ht]=dt(_,Et[ht]);const Dt=Et[0],Ot=r.convert(_.format,_.colorSpace),Ct=r.convert(_.type),Ft=b(_.internalFormat,Ot,Ct,_.colorSpace),Nt=_.isVideoTexture!==!0,te=Y.__version===void 0||z===!0,F=J.dataReady;let wt=E(_,Dt);St(n.TEXTURE_CUBE_MAP,_);let rt;if(Bt){Nt&&te&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Ft,Dt.width,Dt.height);for(let ht=0;ht<6;ht++){rt=Et[ht].mipmaps;for(let bt=0;bt<rt.length;bt++){const Rt=rt[bt];_.format!==_n?Ot!==null?Nt?F&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,bt,0,0,Rt.width,Rt.height,Ot,Rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,bt,Ft,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,bt,0,0,Rt.width,Rt.height,Ot,Ct,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,bt,Ft,Rt.width,Rt.height,0,Ot,Ct,Rt.data)}}}else{if(rt=_.mipmaps,Nt&&te){rt.length>0&&wt++;const ht=ot(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Ft,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(ft){Nt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Et[ht].width,Et[ht].height,Ot,Ct,Et[ht].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Ft,Et[ht].width,Et[ht].height,0,Ot,Ct,Et[ht].data);for(let bt=0;bt<rt.length;bt++){const Yt=rt[bt].image[ht].image;Nt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,bt+1,0,0,Yt.width,Yt.height,Ot,Ct,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,bt+1,Ft,Yt.width,Yt.height,0,Ot,Ct,Yt.data)}}else{Nt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ot,Ct,Et[ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Ft,Ot,Ct,Et[ht]);for(let bt=0;bt<rt.length;bt++){const Rt=rt[bt];Nt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,bt+1,0,0,Ot,Ct,Rt.image[ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,bt+1,Ft,Ot,Ct,Rt.image[ht])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),Y.__version=J.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function j(S,_,N,z,J,Y){const gt=r.convert(N.format,N.colorSpace),pt=r.convert(N.type),mt=b(N.internalFormat,gt,pt,N.colorSpace);if(!i.get(_).__hasExternalTextures){const ft=Math.max(1,_.width>>Y),Et=Math.max(1,_.height>>Y);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,mt,ft,Et,_.depth,0,gt,pt,null):e.texImage2D(J,Y,mt,ft,Et,0,gt,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),nt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,J,i.get(N).__webglTexture,0,$(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,J,i.get(N).__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(S,_,N){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const z=_.depthTexture,J=z&&z.isDepthTexture?z.type:null,Y=M(_.stencilBuffer,J),gt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=$(_);nt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,Y,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,S)}else{const z=_.textures;for(let J=0;J<z.length;J++){const Y=z[J],gt=r.convert(Y.format,Y.colorSpace),pt=r.convert(Y.type),mt=b(Y.internalFormat,gt,pt,Y.colorSpace),Bt=$(_);N&&nt(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,mt,_.width,_.height):nt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt,mt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,mt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function D(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),it(_.depthTexture,0);const z=i.get(_.depthTexture).__webglTexture,J=$(_);if(_.depthTexture.format===Ps)nt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(_.depthTexture.format===Hs)nt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Z(S){const _=i.get(S),N=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const z=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",J)};z.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=z}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");D(_.__webglFramebuffer,S)}else if(N){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=n.createRenderbuffer(),ut(_.__webglDepthbuffer[z],S,!1);else{const J=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ut(_.__webglDepthbuffer,S,!1);else{const z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,J)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function et(S,_,N){const z=i.get(S);_!==void 0&&j(z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Z(S)}function ct(S){const _=S.texture,N=i.get(S),z=i.get(_);S.addEventListener("dispose",C);const J=S.textures,Y=S.isWebGLCubeRenderTarget===!0,gt=J.length>1;if(gt||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=_.version,o.memory.textures++),Y){N.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[pt]=[];for(let mt=0;mt<_.mipmaps.length;mt++)N.__webglFramebuffer[pt][mt]=n.createFramebuffer()}else N.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let pt=0;pt<_.mipmaps.length;pt++)N.__webglFramebuffer[pt]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(gt)for(let pt=0,mt=J.length;pt<mt;pt++){const Bt=i.get(J[pt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&nt(S)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let pt=0;pt<J.length;pt++){const mt=J[pt];N.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[pt]);const Bt=r.convert(mt.format,mt.colorSpace),ft=r.convert(mt.type),Et=b(mt.internalFormat,Bt,ft,mt.colorSpace,S.isXRRenderTarget===!0),Dt=$(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,Et,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,N.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(N.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),St(n.TEXTURE_CUBE_MAP,_);for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)j(N.__webglFramebuffer[pt][mt],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,mt);else j(N.__webglFramebuffer[pt],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(_)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let pt=0,mt=J.length;pt<mt;pt++){const Bt=J[pt],ft=i.get(Bt);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture),St(n.TEXTURE_2D,Bt),j(N.__webglFramebuffer,S,Bt,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),m(Bt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(pt=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,z.__webglTexture),St(pt,_),_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)j(N.__webglFramebuffer[mt],S,_,n.COLOR_ATTACHMENT0,pt,mt);else j(N.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,pt,0);m(_)&&p(pt),e.unbindTexture()}S.depthBuffer&&Z(S)}function Tt(S){const _=S.textures;for(let N=0,z=_.length;N<z;N++){const J=_[N];if(m(J)){const Y=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,gt=i.get(J).__webglTexture;e.bindTexture(Y,gt),p(Y),e.unbindTexture()}}}const w=[],v=[];function B(S){if(S.samples>0){if(nt(S)===!1){const _=S.textures,N=S.width,z=S.height;let J=n.COLOR_BUFFER_BIT;const Y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(S),pt=_.length>1;if(pt)for(let mt=0;mt<_.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[mt]);const Bt=i.get(_[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Bt,0)}n.blitFramebuffer(0,0,N,z,0,0,N,z,J,n.NEAREST),l===!0&&(w.length=0,v.length=0,w.push(n.COLOR_ATTACHMENT0+mt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(w.push(Y),v.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,v)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let mt=0;mt<_.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[mt]);const Bt=i.get(_[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function $(S){return Math.min(s.maxSamples,S.samples)}function nt(S){const _=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function W(S){const _=o.render.frame;u.get(S)!==_&&(u.set(S,_),S.update())}function dt(S,_){const N=S.colorSpace,z=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==Mi&&N!==fi&&(Qt.getTransfer(N)===ce?(z!==_n||J!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function ot(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=T,this.setTexture2D=it,this.setTexture2DArray=lt,this.setTexture3D=q,this.setTextureCube=st,this.rebindTextures=et,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=j,this.useMultisampledRTT=nt}function OE(n,t){function e(i,s=fi){let r;const o=Qt.getTransfer(s);if(i===$n)return n.UNSIGNED_BYTE;if(i===tu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cp)return n.BYTE;if(i===up)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===Qc)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===Nr)return n.HALF_FLOAT;if(i===fp)return n.ALPHA;if(i===dp)return n.RGB;if(i===_n)return n.RGBA;if(i===pp)return n.LUMINANCE;if(i===mp)return n.LUMINANCE_ALPHA;if(i===Ps)return n.DEPTH_COMPONENT;if(i===Hs)return n.DEPTH_STENCIL;if(i===gp)return n.RED;if(i===nu)return n.RED_INTEGER;if(i===_p)return n.RG;if(i===iu)return n.RG_INTEGER;if(i===su)return n.RGBA_INTEGER;if(i===Co||i===Po||i===Lo||i===Do)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ql||i===Kl||i===jl||i===Zl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$l||i===Jl||i===Ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$l||i===Jl)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ql)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===fc||i===dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ec)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ic)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ac)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Io||i===pc||i===mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Io)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vp||i===gc||i===_c||i===vc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class FE extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class zi extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BE={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new zi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const zE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Jn({vertexShader:zE,fragmentShader:HE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new Xs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GE extends ji{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const x=new VE,m=e.getContextAttributes();let p=null,b=null;const M=[],E=[],P=new xt;let C=null;const R=new Ge;R.layers.enable(1),R.viewport=new ge;const O=new Ge;O.layers.enable(2),O.viewport=new ge;const at=[R,O],y=new FE;y.layers.enable(1),y.layers.enable(2);let T=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let j=M[L];return j===void 0&&(j=new ul,M[L]=j),j.getTargetRaySpace()},this.getControllerGrip=function(L){let j=M[L];return j===void 0&&(j=new ul,M[L]=j),j.getGripSpace()},this.getHand=function(L){let j=M[L];return j===void 0&&(j=new ul,M[L]=j),j.getHandSpace()};function k(L){const j=E.indexOf(L.inputSource);if(j===-1)return;const ut=M[j];ut!==void 0&&(ut.update(L.inputSource,L.frame,c||o),ut.dispatchEvent({type:L.type,data:L.inputSource}))}function it(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",it),s.removeEventListener("inputsourceschange",lt);for(let L=0;L<M.length;L++){const j=E[L];j!==null&&(E[L]=null,M[L].disconnect(j))}T=null,K=null,x.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,b=null,G.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",it),s.addEventListener("inputsourceschange",lt),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new ki(d.framebufferWidth,d.framebufferHeight,{format:_n,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,ut=null,D=null;m.depth&&(D=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?Hs:Ps,ut=m.stencil?zs:Gi);const Z={colorFormat:e.RGBA8,depthFormat:D,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Z),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ki(f.textureWidth,f.textureHeight,{format:_n,type:$n,depthTexture:new Dp(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),G.setContext(s),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function lt(L){for(let j=0;j<L.removed.length;j++){const ut=L.removed[j],D=E.indexOf(ut);D>=0&&(E[D]=null,M[D].disconnect(ut))}for(let j=0;j<L.added.length;j++){const ut=L.added[j];let D=E.indexOf(ut);if(D===-1){for(let et=0;et<M.length;et++)if(et>=E.length){E.push(ut),D=et;break}else if(E[et]===null){E[et]=ut,D=et;break}if(D===-1)break}const Z=M[D];Z&&Z.connect(ut)}}const q=new U,st=new U;function X(L,j,ut){q.setFromMatrixPosition(j.matrixWorld),st.setFromMatrixPosition(ut.matrixWorld);const D=q.distanceTo(st),Z=j.projectionMatrix.elements,et=ut.projectionMatrix.elements,ct=Z[14]/(Z[10]-1),Tt=Z[14]/(Z[10]+1),w=(Z[9]+1)/Z[5],v=(Z[9]-1)/Z[5],B=(Z[8]-1)/Z[0],$=(et[8]+1)/et[0],nt=ct*B,W=ct*$,dt=D/(-B+$),ot=dt*-B;if(j.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(ot),L.translateZ(dt),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),Z[10]===-1)L.projectionMatrix.copy(j.projectionMatrix),L.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const S=ct+dt,_=Tt+dt,N=nt-ot,z=W+(D-ot),J=w*Tt/_*S,Y=v*Tt/_*S;L.projectionMatrix.makePerspective(N,z,J,Y,S,_),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function vt(L,j){j===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(j.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let j=L.near,ut=L.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),y.near=O.near=R.near=j,y.far=O.far=R.far=ut,(T!==y.near||K!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,K=y.far);const D=L.parent,Z=y.cameras;vt(y,D);for(let et=0;et<Z.length;et++)vt(Z[et],D);Z.length===2?X(y,R,O):y.projectionMatrix.copy(R.projectionMatrix),yt(L,y,D)};function yt(L,j,ut){ut===null?L.matrix.copy(j.matrixWorld):(L.matrix.copy(ut.matrixWorld),L.matrix.invert(),L.matrix.multiply(j.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(j.projectionMatrix),L.projectionMatrixInverse.copy(j.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Vs*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let St=null;function I(L,j){if(u=j.getViewerPose(c||o),g=j,u!==null){const ut=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let D=!1;ut.length!==y.cameras.length&&(y.cameras.length=0,D=!0);for(let et=0;et<ut.length;et++){const ct=ut[et];let Tt=null;if(d!==null)Tt=d.getViewport(ct);else{const v=h.getViewSubImage(f,ct);Tt=v.viewport,et===0&&(t.setRenderTargetTextures(b,v.colorTexture,f.ignoreDepthValues?void 0:v.depthStencilTexture),t.setRenderTarget(b))}let w=at[et];w===void 0&&(w=new Ge,w.layers.enable(et),w.viewport=new ge,at[et]=w),w.matrix.fromArray(ct.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(ct.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),et===0&&(y.matrix.copy(w.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),D===!0&&y.cameras.push(w)}const Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")){const et=h.getDepthInformation(ut[0]);et&&et.isValid&&et.texture&&x.init(t,et,s.renderState)}}for(let ut=0;ut<M.length;ut++){const D=E[ut],Z=M[ut];D!==null&&Z!==void 0&&Z.update(D,j,c||o)}St&&St(L,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const G=new Pp;G.setAnimationLoop(I),this.setAnimationLoop=function(L){St=L},this.dispose=function(){}}}const Li=new Pn,kE=new re;function WE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),M=b.envMap,E=b.envMapRotation;M&&(m.envMap.value=M,Li.copy(E),Li.x*=-1,Li.y*=-1,Li.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(kE.makeRotationFromEuler(Li)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function XE(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const E=M.program;i.uniformBlockBinding(b,E)}function c(b,M){let E=s[b.id];E===void 0&&(g(b),E=u(b),s[b.id]=E,b.addEventListener("dispose",m));const P=M.program;i.updateUBOMapping(b,P);const C=t.render.frame;r[b.id]!==C&&(f(b),r[b.id]=C)}function u(b){const M=h();b.__bindingPointIndex=M;const E=n.createBuffer(),P=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=s[b.id],E=b.uniforms,P=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,R=E.length;C<R;C++){const O=Array.isArray(E[C])?E[C]:[E[C]];for(let at=0,y=O.length;at<y;at++){const T=O[at];if(d(T,C,at,P)===!0){const K=T.__offset,k=Array.isArray(T.value)?T.value:[T.value];let it=0;for(let lt=0;lt<k.length;lt++){const q=k[lt],st=x(q);typeof q=="number"||typeof q=="boolean"?(T.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,K+it,T.__data)):q.isMatrix3?(T.__data[0]=q.elements[0],T.__data[1]=q.elements[1],T.__data[2]=q.elements[2],T.__data[3]=0,T.__data[4]=q.elements[3],T.__data[5]=q.elements[4],T.__data[6]=q.elements[5],T.__data[7]=0,T.__data[8]=q.elements[6],T.__data[9]=q.elements[7],T.__data[10]=q.elements[8],T.__data[11]=0):(q.toArray(T.__data,it),it+=st.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,M,E,P){const C=b.value,R=M+"_"+E;if(P[R]===void 0)return typeof C=="number"||typeof C=="boolean"?P[R]=C:P[R]=C.clone(),!0;{const O=P[R];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return P[R]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(b){const M=b.uniforms;let E=0;const P=16;for(let R=0,O=M.length;R<O;R++){const at=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,T=at.length;y<T;y++){const K=at[y],k=Array.isArray(K.value)?K.value:[K.value];for(let it=0,lt=k.length;it<lt;it++){const q=k[it],st=x(q),X=E%P,vt=X%st.boundary,yt=X+vt;E+=vt,yt!==0&&P-yt<st.storage&&(E+=P-yt),K.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=st.storage}}}const C=E%P;return C>0&&(E+=P-C),b.__size=E,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class uu{constructor(t={}){const{canvas:e=I0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=mi,this.toneMappingExposure=1;const M=this;let E=!1,P=0,C=0,R=null,O=-1,at=null;const y=new ge,T=new ge;let K=null;const k=new Vt(0);let it=0,lt=e.width,q=e.height,st=1,X=null,vt=null;const yt=new ge(0,0,lt,q),St=new ge(0,0,lt,q);let I=!1;const G=new lu;let L=!1,j=!1;const ut=new re,D=new re,Z=new U,et=new ge,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function w(){return R===null?st:1}let v=i;function B(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jc}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),v===null){const H="webgl2";if(v=B(H,A),v===null)throw B(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let $,nt,W,dt,ot,S,_,N,z,J,Y,gt,pt,mt,Bt,ft,Et,Dt,Ot,Ct,Ft,Nt,te,F;function wt(){$=new $M(v),$.init(),Nt=new OE(v,$),nt=new XM(v,$,t,Nt),W=new IE(v),nt.reverseDepthBuffer&&W.buffers.depth.setReversed(!0),dt=new tS(v),ot=new vE,S=new NE(v,$,W,ot,nt,Nt,dt),_=new qM(M),N=new ZM(M),z=new ax(v),te=new kM(v,z),J=new JM(v,z,dt,te),Y=new nS(v,J,z,dt),Ot=new eS(v,nt,S),ft=new YM(ot),gt=new _E(M,_,N,$,nt,te,ft),pt=new WE(M,ot),mt=new yE,Bt=new AE($),Dt=new GM(M,_,N,W,Y,f,l),Et=new LE(M,Y,nt),F=new XE(v,dt,nt,W),Ct=new WM(v,$,dt),Ft=new QM(v,$,dt),dt.programs=gt.programs,M.capabilities=nt,M.extensions=$,M.properties=ot,M.renderLists=mt,M.shadowMap=Et,M.state=W,M.info=dt}wt();const rt=new GE(M,v);this.xr=rt,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const A=$.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=$.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(A){A!==void 0&&(st=A,this.setSize(lt,q,!1))},this.getSize=function(A){return A.set(lt,q)},this.setSize=function(A,H,Q=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=A,q=H,e.width=Math.floor(A*st),e.height=Math.floor(H*st),Q===!0&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(lt*st,q*st).floor()},this.setDrawingBufferSize=function(A,H,Q){lt=A,q=H,st=Q,e.width=Math.floor(A*Q),e.height=Math.floor(H*Q),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(yt)},this.setViewport=function(A,H,Q,tt){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,H,Q,tt),W.viewport(y.copy(yt).multiplyScalar(st).round())},this.getScissor=function(A){return A.copy(St)},this.setScissor=function(A,H,Q,tt){A.isVector4?St.set(A.x,A.y,A.z,A.w):St.set(A,H,Q,tt),W.scissor(T.copy(St).multiplyScalar(st).round())},this.getScissorTest=function(){return I},this.setScissorTest=function(A){W.setScissorTest(I=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){vt=A},this.getClearColor=function(A){return A.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(A=!0,H=!0,Q=!0){let tt=0;if(A){let V=!1;if(R!==null){const _t=R.texture.format;V=_t===su||_t===iu||_t===nu}if(V){const _t=R.texture.type,At=_t===$n||_t===Gi||_t===Cr||_t===zs||_t===tu||_t===eu,Pt=Dt.getClearColor(),Lt=Dt.getClearAlpha(),zt=Pt.r,Ht=Pt.g,It=Pt.b;At?(d[0]=zt,d[1]=Ht,d[2]=It,d[3]=Lt,v.clearBufferuiv(v.COLOR,0,d)):(g[0]=zt,g[1]=Ht,g[2]=It,g[3]=Lt,v.clearBufferiv(v.COLOR,0,g))}else tt|=v.COLOR_BUFFER_BIT}H&&(tt|=v.DEPTH_BUFFER_BIT,v.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(tt|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),mt.dispose(),Bt.dispose(),ot.dispose(),_.dispose(),N.dispose(),Y.dispose(),te.dispose(),F.dispose(),gt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Mu),rt.removeEventListener("sessionend",Su),Ei.stop()};function ht(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=dt.autoReset,H=Et.enabled,Q=Et.autoUpdate,tt=Et.needsUpdate,V=Et.type;wt(),dt.autoReset=A,Et.enabled=H,Et.autoUpdate=Q,Et.needsUpdate=tt,Et.type=V}function Rt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Yt(A){const H=A.target;H.removeEventListener("dispose",Yt),ve(H)}function ve(A){Xe(A),ot.remove(A)}function Xe(A){const H=ot.get(A).programs;H!==void 0&&(H.forEach(function(Q){gt.releaseProgram(Q)}),A.isShaderMaterial&&gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Q,tt,V,_t){H===null&&(H=ct);const At=V.isMesh&&V.matrixWorld.determinant()<0,Pt=Qp(A,H,Q,tt,V);W.setMaterial(tt,At);let Lt=Q.index,zt=1;if(tt.wireframe===!0){if(Lt=J.getWireframeAttribute(Q),Lt===void 0)return;zt=2}const Ht=Q.drawRange,It=Q.attributes.position;let ee=Ht.start*zt,le=(Ht.start+Ht.count)*zt;_t!==null&&(ee=Math.max(ee,_t.start*zt),le=Math.min(le,(_t.start+_t.count)*zt)),Lt!==null?(ee=Math.max(ee,0),le=Math.min(le,Lt.count)):It!=null&&(ee=Math.max(ee,0),le=Math.min(le,It.count));const de=le-ee;if(de<0||de===1/0)return;te.setup(V,tt,Pt,Q,Lt);let $e,Kt=Ct;if(Lt!==null&&($e=z.get(Lt),Kt=Ft,Kt.setIndex($e)),V.isMesh)tt.wireframe===!0?(W.setLineWidth(tt.wireframeLinewidth*w()),Kt.setMode(v.LINES)):Kt.setMode(v.TRIANGLES);else if(V.isLine){let Ut=tt.linewidth;Ut===void 0&&(Ut=1),W.setLineWidth(Ut*w()),V.isLineSegments?Kt.setMode(v.LINES):V.isLineLoop?Kt.setMode(v.LINE_LOOP):Kt.setMode(v.LINE_STRIP)}else V.isPoints?Kt.setMode(v.POINTS):V.isSprite&&Kt.setMode(v.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Kt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if($.get("WEBGL_multi_draw"))Kt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ut=V._multiDrawStarts,Pe=V._multiDrawCounts,jt=V._multiDrawCount,cn=Lt?z.get(Lt).bytesPerElement:1,Zi=ot.get(tt).currentProgram.getUniforms();for(let Je=0;Je<jt;Je++)Zi.setValue(v,"_gl_DrawID",Je),Kt.render(Ut[Je]/cn,Pe[Je])}else if(V.isInstancedMesh)Kt.renderInstances(ee,de,V.count);else if(Q.isInstancedBufferGeometry){const Ut=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Pe=Math.min(Q.instanceCount,Ut);Kt.renderInstances(ee,de,Pe)}else Kt.render(ee,de)};function qt(A,H,Q){A.transparent===!0&&A.side===pn&&A.forceSinglePass===!1?(A.side=je,A.needsUpdate=!0,Hr(A,H,Q),A.side=vi,A.needsUpdate=!0,Hr(A,H,Q),A.side=pn):Hr(A,H,Q)}this.compile=function(A,H,Q=null){Q===null&&(Q=A),m=Bt.get(Q),m.init(H),b.push(m),Q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==Q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const tt=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const _t=V.material;if(_t)if(Array.isArray(_t))for(let At=0;At<_t.length;At++){const Pt=_t[At];qt(Pt,Q,V),tt.add(Pt)}else qt(_t,Q,V),tt.add(_t)}),b.pop(),m=null,tt},this.compileAsync=function(A,H,Q=null){const tt=this.compile(A,H,Q);return new Promise(V=>{function _t(){if(tt.forEach(function(At){ot.get(At).currentProgram.isReady()&&tt.delete(At)}),tt.size===0){V(A);return}setTimeout(_t,10)}$.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Ye=null;function Dn(A){Ye&&Ye(A)}function Mu(){Ei.stop()}function Su(){Ei.start()}const Ei=new Pp;Ei.setAnimationLoop(Dn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){Ye=A,rt.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},rt.addEventListener("sessionstart",Mu),rt.addEventListener("sessionend",Su),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(H),H=rt.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,H,R),m=Bt.get(A,b.length),m.init(H),b.push(m),D.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),G.setFromProjectionMatrix(D),j=this.localClippingEnabled,L=ft.init(this.clippingPlanes,j),x=mt.get(A,p.length),x.init(),p.push(x),rt.enabled===!0&&rt.isPresenting===!0){const _t=M.xr.getDepthSensingMesh();_t!==null&&_a(_t,H,-1/0,M.sortObjects)}_a(A,H,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(X,vt),Tt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Tt&&Dt.addToRenderList(x,A),this.info.render.frame++,L===!0&&ft.beginShadows();const Q=m.state.shadowsArray;Et.render(Q,A,H),L===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=x.opaque,V=x.transmissive;if(m.setupLights(),H.isArrayCamera){const _t=H.cameras;if(V.length>0)for(let At=0,Pt=_t.length;At<Pt;At++){const Lt=_t[At];Tu(tt,V,A,Lt)}Tt&&Dt.render(A);for(let At=0,Pt=_t.length;At<Pt;At++){const Lt=_t[At];Eu(x,A,Lt,Lt.viewport)}}else V.length>0&&Tu(tt,V,A,H),Tt&&Dt.render(A),Eu(x,A,H);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(M,A,H),te.resetDefaultState(),O=-1,at=null,b.pop(),b.length>0?(m=b[b.length-1],L===!0&&ft.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function _a(A,H,Q,tt){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||G.intersectsSprite(A)){tt&&et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(D);const At=Y.update(A),Pt=A.material;Pt.visible&&x.push(A,At,Pt,Q,et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||G.intersectsObject(A))){const At=Y.update(A),Pt=A.material;if(tt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),et.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),et.copy(At.boundingSphere.center)),et.applyMatrix4(A.matrixWorld).applyMatrix4(D)),Array.isArray(Pt)){const Lt=At.groups;for(let zt=0,Ht=Lt.length;zt<Ht;zt++){const It=Lt[zt],ee=Pt[It.materialIndex];ee&&ee.visible&&x.push(A,At,ee,Q,et.z,It)}}else Pt.visible&&x.push(A,At,Pt,Q,et.z,null)}}const _t=A.children;for(let At=0,Pt=_t.length;At<Pt;At++)_a(_t[At],H,Q,tt)}function Eu(A,H,Q,tt){const V=A.opaque,_t=A.transmissive,At=A.transparent;m.setupLightsView(Q),L===!0&&ft.setGlobalState(M.clippingPlanes,Q),tt&&W.viewport(y.copy(tt)),V.length>0&&zr(V,H,Q),_t.length>0&&zr(_t,H,Q),At.length>0&&zr(At,H,Q),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Tu(A,H,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[tt.id]===void 0&&(m.state.transmissionRenderTarget[tt.id]=new ki(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Nr:$n,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const _t=m.state.transmissionRenderTarget[tt.id],At=tt.viewport||y;_t.setSize(At.z,At.w);const Pt=M.getRenderTarget();M.setRenderTarget(_t),M.getClearColor(k),it=M.getClearAlpha(),it<1&&M.setClearColor(16777215,.5),M.clear(),Tt&&Dt.render(Q);const Lt=M.toneMapping;M.toneMapping=mi;const zt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),m.setupLightsView(tt),L===!0&&ft.setGlobalState(M.clippingPlanes,tt),zr(A,Q,tt),S.updateMultisampleRenderTarget(_t),S.updateRenderTargetMipmap(_t),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let It=0,ee=H.length;It<ee;It++){const le=H[It],de=le.object,$e=le.geometry,Kt=le.material,Ut=le.group;if(Kt.side===pn&&de.layers.test(tt.layers)){const Pe=Kt.side;Kt.side=je,Kt.needsUpdate=!0,bu(de,Q,tt,$e,Kt,Ut),Kt.side=Pe,Kt.needsUpdate=!0,Ht=!0}}Ht===!0&&(S.updateMultisampleRenderTarget(_t),S.updateRenderTargetMipmap(_t))}M.setRenderTarget(Pt),M.setClearColor(k,it),zt!==void 0&&(tt.viewport=zt),M.toneMapping=Lt}function zr(A,H,Q){const tt=H.isScene===!0?H.overrideMaterial:null;for(let V=0,_t=A.length;V<_t;V++){const At=A[V],Pt=At.object,Lt=At.geometry,zt=tt===null?At.material:tt,Ht=At.group;Pt.layers.test(Q.layers)&&bu(Pt,H,Q,Lt,zt,Ht)}}function bu(A,H,Q,tt,V,_t){A.onBeforeRender(M,H,Q,tt,V,_t),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(M,H,Q,tt,A,_t),V.transparent===!0&&V.side===pn&&V.forceSinglePass===!1?(V.side=je,V.needsUpdate=!0,M.renderBufferDirect(Q,H,tt,V,A,_t),V.side=vi,V.needsUpdate=!0,M.renderBufferDirect(Q,H,tt,V,A,_t),V.side=pn):M.renderBufferDirect(Q,H,tt,V,A,_t),A.onAfterRender(M,H,Q,tt,V,_t)}function Hr(A,H,Q){H.isScene!==!0&&(H=ct);const tt=ot.get(A),V=m.state.lights,_t=m.state.shadowsArray,At=V.state.version,Pt=gt.getParameters(A,V.state,_t,H,Q),Lt=gt.getProgramCacheKey(Pt);let zt=tt.programs;tt.environment=A.isMeshStandardMaterial?H.environment:null,tt.fog=H.fog,tt.envMap=(A.isMeshStandardMaterial?N:_).get(A.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",Yt),zt=new Map,tt.programs=zt);let Ht=zt.get(Lt);if(Ht!==void 0){if(tt.currentProgram===Ht&&tt.lightsStateVersion===At)return wu(A,Pt),Ht}else Pt.uniforms=gt.getUniforms(A),A.onBeforeCompile(Pt,M),Ht=gt.acquireProgram(Pt,Lt),zt.set(Lt,Ht),tt.uniforms=Pt.uniforms;const It=tt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=ft.uniform),wu(A,Pt),tt.needsLights=em(A),tt.lightsStateVersion=At,tt.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.directionalShadowMap.value=V.state.directionalShadowMap,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotShadowMap.value=V.state.spotShadowMap,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMap.value=V.state.pointShadowMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix),tt.currentProgram=Ht,tt.uniformsList=null,Ht}function Au(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=No.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function wu(A,H){const Q=ot.get(A);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function Qp(A,H,Q,tt,V){H.isScene!==!0&&(H=ct),S.resetTextureUnits();const _t=H.fog,At=tt.isMeshStandardMaterial?H.environment:null,Pt=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Mi,Lt=(tt.isMeshStandardMaterial?N:_).get(tt.envMap||At),zt=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ht=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),It=!!Q.morphAttributes.position,ee=!!Q.morphAttributes.normal,le=!!Q.morphAttributes.color;let de=mi;tt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(de=M.toneMapping);const $e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Kt=$e!==void 0?$e.length:0,Ut=ot.get(tt),Pe=m.state.lights;if(L===!0&&(j===!0||A!==at)){const sn=A===at&&tt.id===O;ft.setState(tt,A,sn)}let jt=!1;tt.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Pe.state.version||Ut.outputColorSpace!==Pt||V.isBatchedMesh&&Ut.batching===!1||!V.isBatchedMesh&&Ut.batching===!0||V.isBatchedMesh&&Ut.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ut.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ut.instancing===!1||!V.isInstancedMesh&&Ut.instancing===!0||V.isSkinnedMesh&&Ut.skinning===!1||!V.isSkinnedMesh&&Ut.skinning===!0||V.isInstancedMesh&&Ut.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ut.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ut.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ut.instancingMorph===!1&&V.morphTexture!==null||Ut.envMap!==Lt||tt.fog===!0&&Ut.fog!==_t||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ft.numPlanes||Ut.numIntersection!==ft.numIntersection)||Ut.vertexAlphas!==zt||Ut.vertexTangents!==Ht||Ut.morphTargets!==It||Ut.morphNormals!==ee||Ut.morphColors!==le||Ut.toneMapping!==de||Ut.morphTargetsCount!==Kt)&&(jt=!0):(jt=!0,Ut.__version=tt.version);let cn=Ut.currentProgram;jt===!0&&(cn=Hr(tt,H,V));let Zi=!1,Je=!1,va=!1;const _e=cn.getUniforms(),ti=Ut.uniforms;if(W.useProgram(cn.program)&&(Zi=!0,Je=!0,va=!0),tt.id!==O&&(O=tt.id,Je=!0),Zi||at!==A){nt.reverseDepthBuffer?(ut.copy(A.projectionMatrix),N0(ut),O0(ut),_e.setValue(v,"projectionMatrix",ut)):_e.setValue(v,"projectionMatrix",A.projectionMatrix),_e.setValue(v,"viewMatrix",A.matrixWorldInverse);const sn=_e.map.cameraPosition;sn!==void 0&&sn.setValue(v,Z.setFromMatrixPosition(A.matrixWorld)),nt.logarithmicDepthBuffer&&_e.setValue(v,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&_e.setValue(v,"isOrthographic",A.isOrthographicCamera===!0),at!==A&&(at=A,Je=!0,va=!0)}if(V.isSkinnedMesh){_e.setOptional(v,V,"bindMatrix"),_e.setOptional(v,V,"bindMatrixInverse");const sn=V.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),_e.setValue(v,"boneTexture",sn.boneTexture,S))}V.isBatchedMesh&&(_e.setOptional(v,V,"batchingTexture"),_e.setValue(v,"batchingTexture",V._matricesTexture,S),_e.setOptional(v,V,"batchingIdTexture"),_e.setValue(v,"batchingIdTexture",V._indirectTexture,S),_e.setOptional(v,V,"batchingColorTexture"),V._colorsTexture!==null&&_e.setValue(v,"batchingColorTexture",V._colorsTexture,S));const xa=Q.morphAttributes;if((xa.position!==void 0||xa.normal!==void 0||xa.color!==void 0)&&Ot.update(V,Q,cn),(Je||Ut.receiveShadow!==V.receiveShadow)&&(Ut.receiveShadow=V.receiveShadow,_e.setValue(v,"receiveShadow",V.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(ti.envMap.value=Lt,ti.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&H.environment!==null&&(ti.envMapIntensity.value=H.environmentIntensity),Je&&(_e.setValue(v,"toneMappingExposure",M.toneMappingExposure),Ut.needsLights&&tm(ti,va),_t&&tt.fog===!0&&pt.refreshFogUniforms(ti,_t),pt.refreshMaterialUniforms(ti,tt,st,q,m.state.transmissionRenderTarget[A.id]),No.upload(v,Au(Ut),ti,S)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(No.upload(v,Au(Ut),ti,S),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&_e.setValue(v,"center",V.center),_e.setValue(v,"modelViewMatrix",V.modelViewMatrix),_e.setValue(v,"normalMatrix",V.normalMatrix),_e.setValue(v,"modelMatrix",V.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const sn=tt.uniformsGroups;for(let ya=0,nm=sn.length;ya<nm;ya++){const Ru=sn[ya];F.update(Ru,cn),F.bind(Ru,cn)}}return cn}function tm(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function em(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,H,Q){ot.get(A.texture).__webglTexture=H,ot.get(A.depthTexture).__webglTexture=Q;const tt=ot.get(A);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=Q===void 0,tt.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const Q=ot.get(A);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,Q=0){R=A,P=H,C=Q;let tt=!0,V=null,_t=!1,At=!1;if(A){const Lt=ot.get(A);if(Lt.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(v.FRAMEBUFFER,null),tt=!1;else if(Lt.__webglFramebuffer===void 0)S.setupRenderTarget(A);else if(Lt.__hasExternalTextures)S.rebindTextures(A,ot.get(A.texture).__webglTexture,ot.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const It=A.depthTexture;if(Lt.__boundDepthTexture!==It){if(It!==null&&ot.has(It)&&(A.width!==It.image.width||A.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(A)}}const zt=A.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(At=!0);const Ht=ot.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[H])?V=Ht[H][Q]:V=Ht[H],_t=!0):A.samples>0&&S.useMultisampledRTT(A)===!1?V=ot.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?V=Ht[Q]:V=Ht,y.copy(A.viewport),T.copy(A.scissor),K=A.scissorTest}else y.copy(yt).multiplyScalar(st).floor(),T.copy(St).multiplyScalar(st).floor(),K=I;if(W.bindFramebuffer(v.FRAMEBUFFER,V)&&tt&&W.drawBuffers(A,V),W.viewport(y),W.scissor(T),W.setScissorTest(K),_t){const Lt=ot.get(A.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+H,Lt.__webglTexture,Q)}else if(At){const Lt=ot.get(A.texture),zt=H||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Lt.__webglTexture,Q||0,zt)}O=-1},this.readRenderTargetPixels=function(A,H,Q,tt,V,_t,At){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){W.bindFramebuffer(v.FRAMEBUFFER,Pt);try{const Lt=A.texture,zt=Lt.format,Ht=Lt.type;if(!nt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-tt&&Q>=0&&Q<=A.height-V&&v.readPixels(H,Q,tt,V,Nt.convert(zt),Nt.convert(Ht),_t)}finally{const Lt=R!==null?ot.get(R).__webglFramebuffer:null;W.bindFramebuffer(v.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(A,H,Q,tt,V,_t,At){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){const Lt=A.texture,zt=Lt.format,Ht=Lt.type;if(!nt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-tt&&Q>=0&&Q<=A.height-V){W.bindFramebuffer(v.FRAMEBUFFER,Pt);const It=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,It),v.bufferData(v.PIXEL_PACK_BUFFER,_t.byteLength,v.STREAM_READ),v.readPixels(H,Q,tt,V,Nt.convert(zt),Nt.convert(Ht),0);const ee=R!==null?ot.get(R).__webglFramebuffer:null;W.bindFramebuffer(v.FRAMEBUFFER,ee);const le=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await U0(v,le,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,It),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,_t),v.deleteBuffer(It),v.deleteSync(le),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,Q=0){A.isTexture!==!0&&(Uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const tt=Math.pow(2,-Q),V=Math.floor(A.image.width*tt),_t=Math.floor(A.image.height*tt),At=H!==null?H.x:0,Pt=H!==null?H.y:0;S.setTexture2D(A,0),v.copyTexSubImage2D(v.TEXTURE_2D,Q,0,0,At,Pt,V,_t),W.unbindTexture()},this.copyTextureToTexture=function(A,H,Q=null,tt=null,V=0){A.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,A=arguments[1],H=arguments[2],V=arguments[3]||0,Q=null);let _t,At,Pt,Lt,zt,Ht;Q!==null?(_t=Q.max.x-Q.min.x,At=Q.max.y-Q.min.y,Pt=Q.min.x,Lt=Q.min.y):(_t=A.image.width,At=A.image.height,Pt=0,Lt=0),tt!==null?(zt=tt.x,Ht=tt.y):(zt=0,Ht=0);const It=Nt.convert(H.format),ee=Nt.convert(H.type);S.setTexture2D(H,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,H.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,H.unpackAlignment);const le=v.getParameter(v.UNPACK_ROW_LENGTH),de=v.getParameter(v.UNPACK_IMAGE_HEIGHT),$e=v.getParameter(v.UNPACK_SKIP_PIXELS),Kt=v.getParameter(v.UNPACK_SKIP_ROWS),Ut=v.getParameter(v.UNPACK_SKIP_IMAGES),Pe=A.isCompressedTexture?A.mipmaps[V]:A.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,Pe.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Pe.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Pt),v.pixelStorei(v.UNPACK_SKIP_ROWS,Lt),A.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,V,zt,Ht,_t,At,It,ee,Pe.data):A.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,V,zt,Ht,Pe.width,Pe.height,It,Pe.data):v.texSubImage2D(v.TEXTURE_2D,V,zt,Ht,_t,At,It,ee,Pe),v.pixelStorei(v.UNPACK_ROW_LENGTH,le),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,de),v.pixelStorei(v.UNPACK_SKIP_PIXELS,$e),v.pixelStorei(v.UNPACK_SKIP_ROWS,Kt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Ut),V===0&&H.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(A,H,Q=null,tt=null,V=0){A.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,tt=arguments[1]||null,A=arguments[2],H=arguments[3],V=arguments[4]||0);let _t,At,Pt,Lt,zt,Ht,It,ee,le;const de=A.isCompressedTexture?A.mipmaps[V]:A.image;Q!==null?(_t=Q.max.x-Q.min.x,At=Q.max.y-Q.min.y,Pt=Q.max.z-Q.min.z,Lt=Q.min.x,zt=Q.min.y,Ht=Q.min.z):(_t=de.width,At=de.height,Pt=de.depth,Lt=0,zt=0,Ht=0),tt!==null?(It=tt.x,ee=tt.y,le=tt.z):(It=0,ee=0,le=0);const $e=Nt.convert(H.format),Kt=Nt.convert(H.type);let Ut;if(H.isData3DTexture)S.setTexture3D(H,0),Ut=v.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)S.setTexture2DArray(H,0),Ut=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,H.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,H.unpackAlignment);const Pe=v.getParameter(v.UNPACK_ROW_LENGTH),jt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),cn=v.getParameter(v.UNPACK_SKIP_PIXELS),Zi=v.getParameter(v.UNPACK_SKIP_ROWS),Je=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,de.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,de.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Lt),v.pixelStorei(v.UNPACK_SKIP_ROWS,zt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Ht),A.isDataTexture||A.isData3DTexture?v.texSubImage3D(Ut,V,It,ee,le,_t,At,Pt,$e,Kt,de.data):H.isCompressedArrayTexture?v.compressedTexSubImage3D(Ut,V,It,ee,le,_t,At,Pt,$e,de.data):v.texSubImage3D(Ut,V,It,ee,le,_t,At,Pt,$e,Kt,de),v.pixelStorei(v.UNPACK_ROW_LENGTH,Pe),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,jt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,cn),v.pixelStorei(v.UNPACK_SKIP_ROWS,Zi),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Je),V===0&&H.generateMipmaps&&v.generateMipmap(Ut),W.unbindTexture()},this.initRenderTarget=function(A){ot.get(A).__webglFramebuffer===void 0&&S.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),W.unbindTexture()},this.resetState=function(){P=0,C=0,R=null,W.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ru?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===da?"display-p3":"srgb"}}class hu{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=i}clone(){return new hu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fu extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class YE{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xc,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Oe=new U;class Zo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=gn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mc extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fs;const er=new U,ds=new U,ps=new U,ms=new xt,nr=new xt,Fp=new re,ho=new U,ir=new U,fo=new U,mf=new xt,hl=new xt,gf=new xt;class _f extends fe{constructor(t=new Mc){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new Ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new YE(e,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new Zo(i,3,0,!1)),fs.setAttribute("uv",new Zo(i,2,3,!1))}this.geometry=fs,this.material=t,this.center=new xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),Fp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-ps.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;po(ho.set(-.5,-.5,0),ps,o,ds,s,r),po(ir.set(.5,-.5,0),ps,o,ds,s,r),po(fo.set(.5,.5,0),ps,o,ds,s,r),mf.set(0,0),hl.set(1,0),gf.set(1,1);let a=t.ray.intersectTriangle(ho,ir,fo,!1,er);if(a===null&&(po(ir.set(-.5,.5,0),ps,o,ds,s,r),hl.set(0,1),a=t.ray.intersectTriangle(ho,fo,ir,!1,er),a===null))return;const l=t.ray.origin.distanceTo(er);l<t.near||l>t.far||e.push({distance:l,point:er.clone(),uv:on.getInterpolation(er,ho,ir,fo,mf,hl,gf,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function po(n,t,e,i,s,r){ms.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(nr.x=r*ms.x-s*ms.y,nr.y=s*ms.x+r*ms.y):nr.copy(ms),n.copy(t),n.x+=nr.x,n.y+=nr.y,n.applyMatrix4(Fp)}class du extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $o=new U,Jo=new U,vf=new re,sr=new Br,mo=new Fr,fl=new U,xf=new U;class Bp extends fe{constructor(t=new Ce,e=new du){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)$o.fromBufferAttribute(e,s-1),Jo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=$o.distanceTo(Jo);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,t.ray.intersectsSphere(mo)===!1)return;vf.copy(s).invert(),sr.copy(t.ray).applyMatrix4(vf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=u.getX(x),b=u.getX(x+1),M=go(this,t,sr,l,p,b);M&&e.push(M)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(d),p=go(this,t,sr,l,x,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=go(this,t,sr,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=go(this,t,sr,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function go(n,t,e,i,s,r){const o=n.geometry.attributes.position;if($o.fromBufferAttribute(o,s),Jo.fromBufferAttribute(o,r),e.distanceSqToSegment($o,Jo,fl,xf)>i)return;fl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(fl);if(!(l<t.near||l>t.far))return{distance:l,point:xf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const yf=new U,Mf=new U;class qE extends Bp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)yf.fromBufferAttribute(e,s),Mf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+yf.distanceTo(Mf);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zp extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sf=new re,Sc=new Br,_o=new Fr,vo=new U;class KE extends fe{constructor(t=new Ce,e=new zp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,t.ray.intersectsSphere(_o)===!1)return;Sf.copy(s).invert(),Sc.copy(t.ray).applyMatrix4(Sf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){const m=c.getX(g);vo.fromBufferAttribute(h,m),Ef(vo,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)vo.fromBufferAttribute(h,g),Ef(vo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ef(n,t,e,i,s,r,o){const a=Sc.distanceSqToPoint(n);if(a<e){const l=new U;Sc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ec extends We{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new xt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new U,s=[],r=[],o=[],a=new U,l=new re;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(we(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(we(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class pu extends Ln{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class jE extends pu{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function mu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const xo=new U,dl=new mu,pl=new mu,ml=new mu;class ZE extends Ln{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(xo.subVectors(s[0],s[1]).add(s[0]),c=xo);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=xo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),dl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,m),pl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,m),ml.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(dl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),pl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ml.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(dl.calc(l),pl.calc(l),ml.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Tf(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function $E(n,t){const e=1-n;return e*e*t}function JE(n,t){return 2*(1-n)*n*t}function QE(n,t){return n*n*t}function yr(n,t,e,i){return $E(n,t)+JE(n,e)+QE(n,i)}function tT(n,t){const e=1-n;return e*e*e*t}function eT(n,t){const e=1-n;return 3*e*e*n*t}function nT(n,t){return 3*(1-n)*n*n*t}function iT(n,t){return n*n*n*t}function Mr(n,t,e,i,s){return tT(n,t)+eT(n,e)+nT(n,i)+iT(n,s)}class Hp extends Ln{constructor(t=new xt,e=new xt,i=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new xt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mr(t,s.x,r.x,o.x,a.x),Mr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sT extends Ln{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mr(t,s.x,r.x,o.x,a.x),Mr(t,s.y,r.y,o.y,a.y),Mr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vp extends Ln{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rT extends Ln{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gp extends Ln{constructor(t=new xt,e=new xt,i=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new xt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oT extends Ln{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y),yr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kp extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Tf(a,l.x,c.x,u.x,h.x),Tf(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new xt().fromArray(s))}return this}}var bf=Object.freeze({__proto__:null,ArcCurve:jE,CatmullRomCurve3:ZE,CubicBezierCurve:Hp,CubicBezierCurve3:sT,EllipseCurve:pu,LineCurve:Vp,LineCurve3:rT,QuadraticBezierCurve:Gp,QuadraticBezierCurve3:oT,SplineCurve:kp});class aT extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bf[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new bf[s.type]().fromJSON(s))}return this}}class Af extends aT{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Vp(this.currentPoint.clone(),new xt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Gp(this.currentPoint.clone(),new xt(t,e),new xt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Hp(this.currentPoint.clone(),new xt(t,e),new xt(i,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new kp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new pu(t,e,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class gu extends Ce{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new U,u=new xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ss extends Ce{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const x=[],m=i/2;let p=0;b(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ae(h,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function b(){const E=new U,P=new U;let C=0;const R=(e-t)/i;for(let O=0;O<=r;O++){const at=[],y=O/r,T=y*(e-t)+t;for(let K=0;K<=s;K++){const k=K/s,it=k*l+a,lt=Math.sin(it),q=Math.cos(it);P.x=T*lt,P.y=-y*i+m,P.z=T*q,h.push(P.x,P.y,P.z),E.set(lt,R,q).normalize(),f.push(E.x,E.y,E.z),d.push(k,1-y),at.push(g++)}x.push(at)}for(let O=0;O<s;O++)for(let at=0;at<r;at++){const y=x[at][O],T=x[at+1][O],K=x[at+1][O+1],k=x[at][O+1];t>0&&(u.push(y,T,k),C+=3),e>0&&(u.push(T,K,k),C+=3)}c.addGroup(p,C,0),p+=C}function M(E){const P=g,C=new xt,R=new U;let O=0;const at=E===!0?t:e,y=E===!0?1:-1;for(let K=1;K<=s;K++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const T=g;for(let K=0;K<=s;K++){const it=K/s*l+a,lt=Math.cos(it),q=Math.sin(it);R.x=at*q,R.y=m*y,R.z=at*lt,h.push(R.x,R.y,R.z),f.push(0,y,0),C.x=lt*.5+.5,C.y=q*.5*y+.5,d.push(C.x,C.y),g++}for(let K=0;K<s;K++){const k=P+K,it=T+K;E===!0?u.push(it,it+1,k):u.push(it+1,it,k),O+=3}c.addGroup(p,O,E===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wp extends Af{constructor(t){super(t),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Af().fromJSON(s))}return this}}const lT={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Xp(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(i&&(r=dT(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<s;g+=e)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Pr(r,o,e,a,l,d,0),o}};function Xp(n,t,e,i,s){let r,o;if(s===TT(n,t,e,i)>0)for(r=t;r<e;r+=i)o=wf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=wf(r,n[r],n[r+1],o);return o&&ma(o,o.next)&&(Dr(o),o=o.next),o}function Wi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ma(e,e.next)||he(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Pr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&vT(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?uT(n,i,s,r):cT(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Dr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=hT(Wi(n),t,e),Pr(n,t,e,i,s,r,2)):o===2&&fT(n,t,e,i,s,r):Pr(Wi(n),t,e,i,s,r,1);break}}}function cT(n){const t=n.prev,e=n,i=n.next;if(he(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Es(s,a,r,l,o,c,g.x,g.y)&&he(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function uT(n,t,e,i){const s=n.prev,r=n,o=n.next;if(he(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=Tc(d,g,t,e,i),b=Tc(x,m,t,e,i);let M=n.prevZ,E=n.nextZ;for(;M&&M.z>=p&&E&&E.z<=b;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Es(a,u,l,h,c,f,M.x,M.y)&&he(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=d&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Es(a,u,l,h,c,f,E.x,E.y)&&he(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Es(a,u,l,h,c,f,M.x,M.y)&&he(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=b;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Es(a,u,l,h,c,f,E.x,E.y)&&he(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function hT(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!ma(s,r)&&Yp(s,i,i.next,r)&&Lr(s,r)&&Lr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Dr(i),Dr(i.next),i=n=r),i=i.next}while(i!==n);return Wi(i)}function fT(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&MT(o,a)){let l=qp(o,a);o=Wi(o,o.next),l=Wi(l,l.next),Pr(o,t,e,i,s,r,0),Pr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function dT(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Xp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(yT(c));for(s.sort(pT),r=0;r<s.length;r++)e=mT(s[r],e);return e}function pT(n,t){return n.x-t.x}function mT(n,t){const e=gT(n,t);if(!e)return t;const i=qp(e,n);return Wi(i,i.next),Wi(e,e.next)}function gT(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Es(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Lr(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&_T(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function _T(n,t){return he(n.prev,n,t.prev)<0&&he(t.next,n,n.next)<0}function vT(n,t,e,i){let s=n;do s.z===0&&(s.z=Tc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,xT(s)}function xT(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Tc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function yT(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Es(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function MT(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ST(n,t)&&(Lr(n,t)&&Lr(t,n)&&ET(n,t)&&(he(n.prev,n,t.prev)||he(n,t.prev,t))||ma(n,t)&&he(n.prev,n,n.next)>0&&he(t.prev,t,t.next)>0)}function he(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ma(n,t){return n.x===t.x&&n.y===t.y}function Yp(n,t,e,i){const s=Mo(he(n,t,e)),r=Mo(he(n,t,i)),o=Mo(he(e,i,n)),a=Mo(he(e,i,t));return!!(s!==r&&o!==a||s===0&&yo(n,e,t)||r===0&&yo(n,i,t)||o===0&&yo(e,n,i)||a===0&&yo(e,t,i))}function yo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Mo(n){return n>0?1:n<0?-1:0}function ST(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Yp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Lr(n,t){return he(n.prev,n,n.next)<0?he(n,t,n.next)>=0&&he(n,n.prev,t)>=0:he(n,t,n.prev)<0||he(n,n.next,t)<0}function ET(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function qp(n,t){const e=new bc(n.i,n.x,n.y),i=new bc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function wf(n,t,e,i){const s=new bc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Dr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function TT(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Sr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Sr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Rf(t),Cf(i,t);let o=t.length;e.forEach(Rf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Cf(i,e[l]);const a=lT.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Rf(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Cf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class _u extends Ce{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,d=new U,g=new xt;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<s;x++){const m=x*(i+1);for(let p=0;p<i;p++){const b=p+m,M=b,E=b+i+1,P=b+i+2,C=b+1;a.push(M,E,C),a.push(E,P,C)}}this.setIndex(a),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _u(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vu extends Ce{constructor(t=new Wp([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(r,3)),this.setAttribute("uv",new ae(o,2));function c(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;Sr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const b=g[m];Sr.isClockWise(b)===!0&&(g[m]=b.reverse())}const x=Sr.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const b=g[m];d=d.concat(b)}for(let m=0,p=d.length;m<p;m++){const b=d[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,p=x.length;m<p;m++){const b=x[m],M=b[0]+h,E=b[1]+h,P=b[2]+h;i.push(M,E,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return bT(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new vu(i,t.curveSegments)}}function bT(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class xu extends Ce{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new U,f=new U,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const b=[],M=p/i;let E=0;p===0&&o===0?E=.5/e:p===i&&l===Math.PI&&(E=-.5/e);for(let P=0;P<=e;P++){const C=P/e;h.x=-t*Math.cos(s+C*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+C*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(C+E,1-M),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){const M=u[p][b+1],E=u[p][b],P=u[p+1][b],C=u[p+1][b+1];(p!==0||o>0)&&d.push(M,E,C),(p!==i-1||l<Math.PI)&&d.push(E,P,C)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ac extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xp,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ga extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class AT extends ga{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const gl=new re,Pf=new U,Lf=new U;class Kp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lu,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pf),Lf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lf),e.updateMatrixWorld(),gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wT extends Kp{constructor(){super(new Ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=Vs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class RT extends ga{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wT}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class CT extends Kp{constructor(){super(new Lp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wc extends ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new CT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class PT extends ga{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class LT{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Df(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Df();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Df(){return performance.now()}const If=new re;class DT{constructor(t,e,i=0,s=1/0){this.ray=new Br(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new au,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return If.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(If),this}intersectObject(t,e=!0,i=[]){return Rc(t,this,i,e),i.sort(Uf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Rc(t[s],this,i,e);return i.sort(Uf),i}}function Uf(n,t){return n.distance-t.distance}function Rc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Rc(r[o],t,e,!0)}}class Nf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jp extends qE{constructor(t=10,e=10,i=4473924,s=8947848){i=new Vt(i),s=new Vt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=e;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=f===r?i:s;x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3}const u=new Ce;u.setAttribute("position",new ae(l,3)),u.setAttribute("color",new ae(c,3));const h=new du({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class IT extends ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jc);const Of={type:"change"},yu={type:"start"},Zp={type:"end"},So=new Br,Ff=new hi,UT=Math.cos(70*Xn.DEG2RAD),ye=new U,qe=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_l=1e-6;class NT extends IT{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rs.ROTATE,MIDDLE:Rs.DOLLY,RIGHT:Rs.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new xi,this._lastTargetPosition=new U,this._quat=new xi().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nf,this._sphericalDelta=new Nf,this._scale=1,this._panOffset=new U,this._rotateStart=new xt,this._rotateEnd=new xt,this._rotateDelta=new xt,this._panStart=new xt,this._panEnd=new xt,this._panDelta=new xt,this._dollyStart=new xt,this._dollyEnd=new xt,this._dollyDelta=new xt,this._dollyDirection=new U,this._mouse=new xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=FT.bind(this),this._onPointerDown=OT.bind(this),this._onPointerUp=BT.bind(this),this._onContextMenu=XT.bind(this),this._onMouseWheel=VT.bind(this),this._onKeyDown=GT.bind(this),this._onTouchStart=kT.bind(this),this._onTouchMove=WT.bind(this),this._onMouseDown=zT.bind(this),this._onMouseMove=HT.bind(this),this._interceptControlDown=YT.bind(this),this._interceptControlUp=qT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Of),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=qe:i>Math.PI&&(i-=qe),s<-Math.PI?s+=qe:s>Math.PI&&(s-=qe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ye.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(So.origin.copy(this.object.position),So.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(So.direction))<UT?this.object.lookAt(this.target):(Ff.setFromNormalAndCoplanarPoint(this.object.up,this.target),So.intersectPlane(Ff,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_l||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_l||this._lastTargetPosition.distanceToSquared(this.target)>_l?(this.dispatchEvent(Of),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ye.copy(s).sub(this.target);let r=ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function OT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function FT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function BT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zp),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function zT(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ie.DOLLY;break;case Rs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}break;case Rs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(yu)}function HT(n){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function VT(n){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(n.preventDefault(),this.dispatchEvent(yu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Zp))}function GT(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function kT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ie.TOUCH_ROTATE;break;case ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ie.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(yu)}function WT(n){switch(this._trackPointer(n),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ie.NONE}}function XT(n){this.enabled!==!1&&n.preventDefault()}function YT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const KT={class:"scene-wrapper"},jT={__name:"ThreeScene",emits:["hover-change"],setup(n,{emit:t}){const e=t,i=ks(null);let s,r,o,a,l,c,u,h,f,d,g,x,m,p;const b=new Map,M=[],E=new xt(10,10),P=new DT,C=new LT;let R=null,O=null;oa(()=>{at(),e("hover-change","---")}),aa(()=>{yt()});function at(){const I=i.value;I&&(s=new uu({antialias:!0,canvas:I}),s.setPixelRatio(window.devicePixelRatio||1),s.setSize(window.innerWidth,window.innerHeight),s.shadowMap.enabled=!0,s.shadowMap.type=op,r=new fu,r.background=new Vt(198417),r.fog=new hu(198417,40,140),o=new Ge(55,window.innerWidth/window.innerHeight,.1,200),o.position.set(18,16,26),a=new NT(o,s.domElement),a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=12,a.maxDistance=80,a.maxPolarAngle=Math.PI*.49,y(),T(),k(),it(),p=()=>{const G=window.innerWidth,L=window.innerHeight;o.aspect=G/L,o.updateProjectionMatrix(),s.setSize(G,L)},window.addEventListener("resize",p),vt())}function y(){const I=new AT(6726911,263692,.6);r.add(I);const G=new wc(16777215,1.15);G.position.set(15,25,10),G.castShadow=!0,G.shadow.mapSize.set(2048,2048),G.shadow.camera.near=.1,G.shadow.camera.far=80,r.add(G);const L=new Se(new Ss(45,45,.2,64),new Ac({color:330775,metalness:.1,roughness:.95}));L.position.y=-.1,L.receiveShadow=!0,r.add(L);const j=new jp(80,40,1063779,466995);j.material.opacity=.35,j.material.transparent=!0,j.position.y=0,r.add(j);const ut=600,D=new Float32Array(ut*3);for(let ct=0;ct<ut;ct+=1)D[ct*3]=(Math.random()-.5)*160,D[ct*3+1]=Math.random()*80+10,D[ct*3+2]=(Math.random()-.5)*160;const Z=new Ce;Z.setAttribute("position",new Ze(D,3));const et=new zp({color:2914485,size:.6,transparent:!0,opacity:.35,depthWrite:!1});c=new KE(Z,et),r.add(c)}function T(){[{name:"Alpha",position:new U(-12,10,-6)},{name:"Beta",position:new U(10,9.5,-4)},{name:"Gamma",position:new U(-8,10.5,6)},{name:"Delta",position:new U(11,8.5,7)},{name:"Sigma",position:new U(0,12,0)}].forEach(Z=>{const et=new U(Z.position.x,.8,Z.position.z),ct=K(Z.position,6545663,.8,!0);ct.userData.name=Z.name;const Tt=K(et,2321919,.65,!1);Tt.userData.name=`${Z.name}-ground`,b.set(ct.uuid,Tt),M.push(ct);const w=new Ss(.08,.08,Z.position.y-.8,12),v=new gi({color:795456,transparent:!0,opacity:.45}),B=new Se(w,v);B.position.set(Z.position.x,(Z.position.y+.8)/2,Z.position.z),r.add(B)})}function K(I,G,L,j){const ut=new Vt(G),D=ut.clone().multiplyScalar(j?.35:.2),Z=new Ac({color:ut,emissive:D,emissiveIntensity:j?.9:.5,metalness:j?.55:.3,roughness:j?.35:.6}),et=new xu(L,48,32),ct=new Se(et,Z);return ct.position.copy(I),ct.castShadow=j,ct.receiveShadow=!j,ct.userData.baseScale=1,ct.userData.defaultEmissiveIntensity=Z.emissiveIntensity,ct.userData.baseColor=Z.color.clone(),r.add(ct),ct}function k(){const I=new zi;r.add(I),u=new Jn({transparent:!0,depthWrite:!1,blending:Wo,uniforms:{uTopColor:{value:new Vt(7203071)},uBottomColor:{value:new Vt(993901)},uHeight:{value:1}},vertexShader:`
      varying float vY;
      void main() {
        vY = position.y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
        uniform vec3 uTopColor;
        uniform vec3 uBottomColor;
        uniform float uHeight;
        varying float vY;

        void main() {
          float halfHeight = uHeight * 0.5;
          float t = clamp((vY + halfHeight) / uHeight, 0.0, 1.0);
          vec3 color = mix(uBottomColor, uTopColor, t);
          float intensity = mix(0.2, 1.25, t);
          float alpha = smoothstep(0.0, 0.7, t);
          gl_FragColor = vec4(color * intensity, alpha);
          if (gl_FragColor.a < 0.05) discard;
        }
    `}),h=new Se(new Ss(.3,1,1,64,1,!0),u),h.visible=!1,h.frustumCulled=!1,I.add(h),f=new RT(7599359,0,50,Math.PI/8,.5,2),f.castShadow=!1,f.visible=!1;const G=new fe;r.add(G),f.target=G,I.add(f),g=new gi({color:5097727,transparent:!0,opacity:.45,blending:Wo,depthWrite:!1}),d=new Se(new gu(2.2,64),g),d.rotation.x=-Math.PI/2,d.visible=!1,I.add(d)}function it(){const I=s.domElement;x=G=>{const L=I.getBoundingClientRect(),j=(G.clientX-L.left)/L.width,ut=(G.clientY-L.top)/L.height;E.x=j*2-1,E.y=-(ut*2-1)},m=()=>{E.set(10,10),lt(null)},I.addEventListener("pointermove",x),I.addEventListener("pointerleave",m)}function lt(I){if(I!==R){if(R&&q(R,!1),O&&q(O,!1),R=I,O=I?b.get(I.uuid):null,!I||!O){X(),e("hover-change","---");return}q(I,!0),q(O,!0),st(I,O),e("hover-change",I.userData.name??"---")}}function q(I,G){if(!I)return;const L=G?1.25:I.userData.baseScale;I.scale.set(L,L,L),I.material.emissiveIntensity=G?I.userData.defaultEmissiveIntensity*2:I.userData.defaultEmissiveIntensity}function st(I,G){const L=new U().subVectors(I.position,G.position),j=L.length();h.geometry&&h.geometry.dispose(),h.geometry=new Ss(.35,1.35,j,64,1,!0),h.position.copy(I.position).add(G.position).multiplyScalar(.5);const ut=new xi().setFromUnitVectors(new U(0,1,0),L.normalize());h.setRotationFromQuaternion(ut),h.visible=!0,u.uniforms.uHeight.value=j,f.visible=!0,f.intensity=3.2,f.position.copy(I.position),f.target.position.copy(G.position),d.visible=!0,d.position.copy(G.position);const D=Math.max(2,j*.2);d.scale.set(D,D,D)}function X(){h&&(h.visible=!1),f&&(f.visible=!1),d&&(d.visible=!1)}function vt(){l=requestAnimationFrame(vt);const I=C.getElapsedTime();d!=null&&d.visible&&g&&(g.opacity=.35+Math.sin(I*3)*.15),c&&(c.rotation.y+=5e-4),a==null||a.update(),P.setFromCamera(E,o);const G=P.intersectObjects(M,!1);G.length>0?lt(G[0].object):lt(null),s.render(r,o)}function yt(){var I,G;cancelAnimationFrame(l),window.removeEventListener("resize",p),(I=s==null?void 0:s.domElement)==null||I.removeEventListener("pointermove",x),(G=s==null?void 0:s.domElement)==null||G.removeEventListener("pointerleave",m),a==null||a.dispose(),s==null||s.dispose(),r&&r.traverse(L=>{L.geometry&&L.geometry.dispose(),L.material&&(Array.isArray(L.material)?L.material.forEach(St):St(L.material))})}function St(I){I.map&&I.map.dispose(),I.dispose()}return(I,G)=>(Yi(),qi("div",KT,[me("canvas",{ref_key:"canvasRef",ref:i,class:"scene-canvas"},null,512)]))}},ZT=Ki(jT,[["__scopeId","data-v-483fc3c7"]]),$T={class:"scene-page"},JT={class:"hud status-panel"},QT={__name:"ThreeScenePage",setup(n){const t=ks("---");function e(i){t.value=i??"---"}return(i,s)=>(Yi(),qi("div",$T,[Re(ZT,{class:"scene-layer",onHoverChange:e}),s[0]||(s[0]=me("section",{class:"hud info-panel"},[me("p",{class:"title"},"Beam Network Demo"),me("p",null,"悬浮任意上层节点，启动下行光束"),me("p",null,"拖动可调整视角")],-1)),me("div",JT," Hover Node: "+Oc(t.value),1)]))}},tb=Ki(QT,[["__scopeId","data-v-d2dd6407"]]),eb={class:"plane-wrapper"},nb={__name:"MicroservicePlane",setup(n){const t=ks(null),e={width:20,thickness:.05,depth:10},i={segments:48,speed:.65,baseColor:new Vt("#4d5a68"),highlightColor:new Vt("#c9f1ff")};let s,r,o,a,l,c,u,h=[];oa(()=>{f()}),aa(()=>{E()});function f(){const P=t.value;if(!P)return;s=new uu({antialias:!0,alpha:!0,canvas:P}),s.setPixelRatio(window.devicePixelRatio||1),M(),r=new fu,o=new Ge(40,P.clientWidth/P.clientHeight||1,.1,100),o.position.set(14,9,12),o.lookAt(0,0,0);const C=new PT(16777215,.55);r.add(C);const R=new wc(16777215,.85);R.position.set(9,15,10),r.add(R);const O=new wc(8114943,.4);O.position.set(-8,6,-8),r.add(O),c=new zi,c.add(d()),c.add(...g()),c.add(p()),r.add(c),b(),l=new ResizeObserver(()=>M(!0)),l.observe(P)}function d(){const P=new Ws(e.width,e.thickness,e.depth,1,1,1),C=new Vt("#2f343a"),R=new Vt("#536271"),O=new Float32Array(P.attributes.position.count*3);for(let T=0;T<P.attributes.position.count;T+=1){const k=(P.attributes.position.getX(T)+e.width/2)/e.width,it=C.clone().lerp(R,Xn.clamp(k,0,1));O[T*3]=it.r,O[T*3+1]=it.g,O[T*3+2]=it.b}P.setAttribute("color",new Ze(O,3));const at=new Ac({vertexColors:!0,metalness:.35,roughness:.4}),y=new Se(P,at);return y.castShadow=!1,y.receiveShadow=!1,y.position.y=0,y}function g(){const P=e.width/2,C=e.depth/2,R=e.thickness/2+.001;return h=[[-P,R,-C,-P,R,C],[-P,R,-C,P,R,-C],[P,R,-C,P,R,C]].map(([at,y,T,K,k,it])=>{const lt=x(new U(at,y,T),new U(K,k,it),i.segments),q=new Float32Array(lt.attributes.position.count*3);lt.setAttribute("color",new Ze(q,3));const st=new du({vertexColors:!0,transparent:!0,opacity:.85,linewidth:1});return new Bp(lt,st)}),h}function x(P,C,R){const O=[];for(let at=0;at<=R;at+=1){const y=at/R;O.push(new U(Xn.lerp(P.x,C.x,y),Xn.lerp(P.y,C.y,y),Xn.lerp(P.z,C.z,y)))}return new Ce().setFromPoints(O)}function m(P){h.length&&h.forEach((C,R)=>{const O=C.geometry.getAttribute("color");if(O){for(let at=0;at<O.count;at+=1){const y=O.count>1?at/(O.count-1):0,T=Math.sin(P*i.speed+y*5+R*.8)*.5+.5,K=Xn.smoothstep(T,.15,.85),k=i.baseColor.clone().lerp(i.highlightColor,K);O.setXYZ(at,k.r,k.g,k.b)}O.needsUpdate=!0,C.material&&"opacity"in C.material&&(C.material.opacity=.65+Math.sin(P*i.speed+R)*.1)}})}function p(){const P=document.createElement("canvas");P.width=512,P.height=256;const C=P.getContext("2d");C&&(C.clearRect(0,0,P.width,P.height),C.fillStyle="#ffffff",C.font='bold 170px "Noto Sans SC", "Microsoft YaHei", sans-serif',C.textBaseline="middle",C.textAlign="left",C.fillText("微服务",30,P.height/2+8)),u=new Ec(P),u.anisotropy=s.capabilities.getMaxAnisotropy(),u.needsUpdate=!0;const R=new gi({map:u,transparent:!0}),O=new Se(new Xs(4.5,1.6),R);return O.rotation.x=-Math.PI/2,O.position.set(-20/2+2.8,e.thickness/2+.002,-10/2+1.6),O}function b(){a=requestAnimationFrame(b),c&&(c.rotation.y=Math.sin(Date.now()*2e-4)*.15),m(performance.now()*.001),s==null||s.render(r,o)}function M(P=!1){if(!s||!t.value)return;const C=t.value,R=C.clientWidth||1,O=C.clientHeight||1;s.setSize(R,O,!1),P&&o&&(o.aspect=R/O,o.updateProjectionMatrix())}function E(){cancelAnimationFrame(a),l==null||l.disconnect(),s==null||s.dispose(),r&&r.traverse(P=>{P.geometry&&P.geometry.dispose(),P.material&&(Array.isArray(P.material)?P.material.forEach(C=>C.dispose()):P.material.dispose())}),u==null||u.dispose(),s=null,r=null,o=null,c=null,h=[]}return(P,C)=>(Yi(),qi("div",eb,[me("canvas",{ref_key:"canvasRef",ref:t,class:"plane-canvas"},null,512)]))}},ib=Ki(nb,[["__scopeId","data-v-772aad9d"]]),sb={class:"plane-page"},rb={class:"plane-panel"},ob={__name:"MicroservicePlanePage",setup(n){return(t,e)=>(Yi(),qi("div",sb,[me("section",rb,[Re(ib)])]))}},ab=Ki(ob,[["__scopeId","data-v-17ed9ca8"]]),lb={class:"topology-surface"},gs=0,Bf=1.35,cb=2.8,ub={__name:"ForceTopology",props:{linkWidth:{type:Number,default:.8}},setup(n){const t=n,e=ks(null);let i,s,r,o,a;const l=[],c=[],u=new Map,h=[],f=vt("force-topology-plane"),d=new U,g=new U,x={repulsion:32,spring:.08,damping:.86,timeStep:.6,linkDistance:5.5,maxSpeed:2.2},m=[{id:"gateway",label:"入口网关",color:"#5ecbff",radius:.65,mass:1.1},{id:"auth",label:"认证中心",color:"#89f4ff",radius:.58,mass:1},{id:"order",label:"订单服务",color:"#63f2c8",radius:.6,mass:1.1},{id:"payment",label:"支付服务",color:"#ffbd6b",radius:.55,mass:.95},{id:"inventory",label:"库存服务",color:"#ff7aa1",radius:.53,mass:.95},{id:"shipping",label:"物流调度",color:"#a882ff",radius:.52,mass:.9},{id:"user",label:"用户画像",color:"#9cfab6",radius:.5,mass:.9},{id:"recommend",label:"推荐引擎",color:"#f7f48b",radius:.5,mass:.9},{id:"monitor",label:"监控告警",color:"#7dd6ff",radius:.48,mass:.85}],p=[{source:"gateway",target:"auth"},{source:"gateway",target:"order"},{source:"auth",target:"order"},{source:"order",target:"payment"},{source:"order",target:"inventory"},{source:"order",target:"shipping"},{source:"payment",target:"monitor"},{source:"payment",target:"recommend"},{source:"inventory",target:"monitor"},{source:"inventory",target:"recommend"},{source:"user",target:"order"},{source:"user",target:"recommend"},{source:"shipping",target:"monitor"}];let b=t.linkWidth;oa(()=>{M()}),aa(()=>{lt()}),pr(()=>t.linkWidth,I=>{b=I,k()});function M(){const I=e.value;I&&(i=new uu({canvas:I,antialias:!0,alpha:!0}),i.setPixelRatio(window.devicePixelRatio||1),i.setClearColor(0,0),s=new fu,E(I),P(),C(),R(),a=new ResizeObserver(()=>it()),a.observe(I),it(),at())}function E(I){const G=(I.clientWidth||1)/(I.clientHeight||1);r=new Ge(46,G,.1,200),r.position.set(0,14,28),r.up.set(0,1,0),r.lookAt(0,0,0)}function P(){const I=new jp(60,60,1716036,792102);I.position.y=-.02,I.material.opacity=.3,I.material.transparent=!0,I.material.depthWrite=!1,s.add(I);const G=new Se(new _u(4,18,128),new gi({color:662575,transparent:!0,opacity:.4,depthWrite:!1}));G.rotation.x=-Math.PI/2,G.position.y=-.03,s.add(G)}function C(){m.forEach(I=>{const{sprite:G,texture:L}=q(I);G.position.set(0,gs+.05,0),G.renderOrder=10,s.add(G),h.push(L);const{sprite:j,texture:ut}=st(I.label);j.position.set(0,gs+Bf,0),j.renderOrder=11,s.add(j),h.push(ut);const D=f()*Math.PI*2,Z=3.5+f()*4.5,et=new U(Math.cos(D)*Z,0,Math.sin(D)*Z),ct=new U,Tt=new U,w={...I,sprite:G,label:j,position:et,velocity:ct,force:Tt};l.push(w),u.set(I.id,w)})}function R(){const I=new Xs(1,1),G=new gi({color:4957695,transparent:!0,opacity:.78,side:pn}),L=O(),j=new gi({color:12187391,transparent:!0,opacity:.95,side:pn});p.forEach(ut=>{const D=new zi;D.position.y=gs+.01,D.rotation.x=-Math.PI/2;const Z=new Se(I,G.clone());Z.renderOrder=1;const et=new Se(L,j.clone());et.renderOrder=2,D.add(Z),D.add(et),s.add(D),c.push({...ut,group:D,shaft:Z,arrow:et,source:u.get(ut.source),target:u.get(ut.target)})})}function O(){const I=new Wp;return I.moveTo(0,0),I.lineTo(-1,.6),I.lineTo(-1,-.6),I.lineTo(0,0),new vu(I)}function at(){o=requestAnimationFrame(at),y(),T(),K(),i==null||i.render(s,r)}function y(){l.forEach(I=>{I.force.set(0,0,0)});for(let I=0;I<l.length;I+=1)for(let G=I+1;G<l.length;G+=1){const L=l[I],j=l[G];g.copy(L.position).sub(j.position);const ut=Math.max(g.lengthSq(),.04),D=x.repulsion*(L.mass+j.mass)/ut;g.normalize(),d.copy(g).multiplyScalar(D),L.force.add(d),j.force.sub(d)}c.forEach(I=>{const G=I.source,L=I.target;if(!G||!L)return;g.copy(L.position).sub(G.position);const j=Math.max(g.length(),.001),ut=x.linkDistance,D=j-ut,Z=x.spring*D;g.normalize(),d.copy(g).multiplyScalar(Z),G.force.add(d),L.force.sub(d)}),l.forEach(I=>{d.copy(I.position).multiplyScalar(-.015),I.force.add(d),I.velocity.addScaledVector(I.force,x.timeStep/(I.mass??1)),I.velocity.multiplyScalar(x.damping),I.velocity.length()>x.maxSpeed&&I.velocity.setLength(x.maxSpeed),I.position.addScaledVector(I.velocity,x.timeStep),I.position.y=0;const G=14,L=9;I.position.x=Xn.clamp(I.position.x,-G,G),I.position.z=Xn.clamp(I.position.z,-L,L),I.velocity.y=0})}function T(){l.forEach(I=>{I.sprite.position.set(I.position.x,gs+.05,I.position.z);const G=Bf+I.radius*.8;I.label.position.set(I.position.x,gs+G,I.position.z)})}function K(){c.forEach(I=>{const G=I.source,L=I.target;if(!G||!L)return;g.set(L.position.x-G.position.x,0,L.position.z-G.position.z);const j=g.length();if(j<.001){I.group.visible=!1;return}I.group.visible=!0;const ut=Math.atan2(g.z,g.x);I.group.position.set(G.position.x,gs+.01,G.position.z),I.group.rotation.set(-Math.PI/2,ut,0);const D=Xn.clamp(j*.2,.8,3),Z=Math.max(j-D,D*.6),et=Math.max(b,.2);I.shaft.scale.set(Z,et,1),I.shaft.position.set(Z/2,0,0);const ct=et*1.6;I.arrow.scale.set(D,ct,1),I.arrow.position.set(j-D*(2/3),0,0)})}function k(){K()}function it(){if(!i||!e.value)return;const I=e.value,G=I.clientWidth||1,L=I.clientHeight||1;i.setSize(G,L,!1),r&&(r.aspect=G/L,r.updateProjectionMatrix())}function lt(){cancelAnimationFrame(o),a==null||a.disconnect(),s&&s.traverse(I=>{var G,L;I.geometry&&I.geometry.dispose(),I.material&&(Array.isArray(I.material)?I.material.forEach(j=>j.dispose&&j.dispose()):(L=(G=I.material).dispose)==null||L.call(G))}),h.forEach(I=>I.dispose()),h.length=0,i==null||i.dispose(),i=null,s=null,r=null,o=void 0,l.length=0,c.length=0,u.clear()}function q(I){const G=document.createElement("canvas");G.width=256,G.height=256;const L=G.getContext("2d");if(L){L.clearRect(0,0,G.width,G.height);const et=G.width/2,ct=et-18,Tt=L.createRadialGradient(et-20,et-20,ct*.3,et,et,ct);Tt.addColorStop(0,"#ffffff"),Tt.addColorStop(1,I.color),L.fillStyle=Tt,L.beginPath(),L.arc(et,et,ct,0,Math.PI*2),L.fill(),L.lineWidth=8,L.strokeStyle="rgba(255, 255, 255, 0.25)",L.stroke()}const j=new Ec(G);j.needsUpdate=!0;const ut=new Mc({map:j,transparent:!0,depthWrite:!1}),D=new _f(ut),Z=cb*I.radius;return D.scale.set(Z,Z,1),{sprite:D,texture:j}}function st(I){const G=document.createElement("canvas");G.width=256,G.height=128;const L=G.getContext("2d");L&&(L.clearRect(0,0,G.width,G.height),L.fillStyle="rgba(3, 10, 20, 0.55)",L.strokeStyle="rgba(111, 191, 255, 0.55)",L.lineWidth=2,X(L,20,36,216,56,18),L.font='28px "Inter", "Noto Sans SC", sans-serif',L.fillStyle="#e5f4ff",L.textAlign="center",L.textBaseline="middle",L.fillText(I,G.width/2,G.height/2+4));const j=new Ec(G);j.needsUpdate=!0;const ut=new Mc({map:j,transparent:!0}),D=new _f(ut);return D.scale.set(3.4,1.5,1),{sprite:D,texture:j}}function X(I,G,L,j,ut,D){const Z=Math.min(D,ut/2,j/2);I.beginPath(),I.moveTo(G+Z,L),I.lineTo(G+j-Z,L),I.quadraticCurveTo(G+j,L,G+j,L+Z),I.lineTo(G+j,L+ut-Z),I.quadraticCurveTo(G+j,L+ut,G+j-Z,L+ut),I.lineTo(G+Z,L+ut),I.quadraticCurveTo(G,L+ut,G,L+ut-Z),I.lineTo(G,L+Z),I.quadraticCurveTo(G,L,G+Z,L),I.closePath(),I.fill(),I.stroke()}function vt(I){const G=yt(I),L=St(G());return()=>L()}function yt(I){let G=1779033703^I.length;for(let L=0;L<I.length;L+=1)G=Math.imul(G^I.charCodeAt(L),3432918353),G=G<<13|G>>>19;return function(){return G=Math.imul(G^G>>>16,2246822507),G=Math.imul(G^G>>>13,3266489909),(G^=G>>>16)>>>0}}function St(I){return function(){I|=0,I=I+1831565813|0;let G=Math.imul(I^I>>>15,1|I);return G^=G+Math.imul(G^G>>>7,61|G),((G^G>>>14)>>>0)/4294967296}}return(I,G)=>(Yi(),qi("div",lb,[me("canvas",{ref_key:"canvasRef",ref:e,class:"topology-canvas"},null,512)]))}},hb=Ki(ub,[["__scopeId","data-v-93ec16a2"]]),fb={class:"topology-page"},db={class:"stage-panel"},pb={class:"control-hud"},mb={class:"slider-label"},gb={__name:"ForceTopologyPage",setup(n){const t=ks(.9);return(e,i)=>(Yi(),qi("div",fb,[me("section",db,[Re(hb,{"link-width":t.value},null,8,["link-width"]),me("aside",pb,[i[2]||(i[2]=me("p",{class:"hud-title"},"二维拓扑力导向",-1)),i[3]||(i[3]=me("p",{class:"hud-sub"},"自研力导向实时演算，可滑动调整连线粗细",-1)),me("label",mb,[i[1]||(i[1]=gr(" 线宽 ",-1)),me("span",null,Oc(t.value.toFixed(1)),1)]),Wm(me("input",{"onUpdate:modelValue":i[0]||(i[0]=s=>t.value=s),type:"range",min:"0.4",max:"1.8",step:"0.1"},null,512),[[m_,t.value,void 0,{number:!0}]])])])]))}},_b=Ki(gb,[["__scopeId","data-v-b835ece5"]]),vb=[{path:"/",redirect:"/scene"},{path:"/scene",name:"scene",component:tb,meta:{title:"三维场景"}},{path:"/microservice-plane",name:"microservice-plane",component:ab,meta:{title:"服务网格"}},{path:"/topology",name:"topology",component:_b,meta:{title:"二维拓扑"}}],$p=Tv({history:sv(),routes:vb,scrollBehavior(){return{top:0}}});$p.afterEach(n=>{var t;(t=n.meta)!=null&&t.title?document.title=`${n.meta.title} | Beam Network`:document.title="Beam Network"});const Jp=v_(Pv);Jp.use($p);Jp.mount("#app");
