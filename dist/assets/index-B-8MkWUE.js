(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function el(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ie={},Yi=[],pn=()=>{},Ru=()=>!1,qr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),nl=n=>n.startsWith("onUpdate:"),Le=Object.assign,il=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Tf=Object.prototype.hasOwnProperty,Zt=(n,t)=>Tf.call(n,t),Ht=Array.isArray,qi=n=>jr(n)==="[object Map]",Cu=n=>jr(n)==="[object Set]",Wt=n=>typeof n=="function",_e=n=>typeof n=="string",ni=n=>typeof n=="symbol",ae=n=>n!==null&&typeof n=="object",Pu=n=>(ae(n)||Wt(n))&&Wt(n.then)&&Wt(n.catch),Lu=Object.prototype.toString,jr=n=>Lu.call(n),bf=n=>jr(n).slice(8,-1),Du=n=>jr(n)==="[object Object]",sl=n=>_e(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ss=el(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kr=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Af=/-\w/g,Qn=Kr(n=>n.replace(Af,t=>t.slice(1).toUpperCase())),wf=/\B([A-Z])/g,Ei=Kr(n=>n.replace(wf,"-$1").toLowerCase()),Iu=Kr(n=>n.charAt(0).toUpperCase()+n.slice(1)),co=Kr(n=>n?`on${Iu(n)}`:""),Kn=(n,t)=>!Object.is(n,t),uo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Uu=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Rf=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Yl;const $r=()=>Yl||(Yl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rl(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=_e(i)?Df(i):rl(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(_e(n)||ae(n))return n}const Cf=/;(?![^(]*\))/g,Pf=/:([^]+)/,Lf=/\/\*[^]*?\*\//g;function Df(n){const t={};return n.replace(Lf,"").split(Cf).forEach(e=>{if(e){const i=e.split(Pf);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ol(n){let t="";if(_e(n))t=n;else if(Ht(n))for(let e=0;e<n.length;e++){const i=ol(n[e]);i&&(t+=i+" ")}else if(ae(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const If="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uf=el(If);function Nu(n){return!!n||n===""}const Ou=n=>!!(n&&n.__v_isRef===!0),Fu=n=>_e(n)?n:n==null?"":Ht(n)||ae(n)&&(n.toString===Lu||!Wt(n.toString))?Ou(n)?Fu(n.value):JSON.stringify(n,Bu,2):String(n),Bu=(n,t)=>Ou(t)?Bu(n,t.value):qi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[ho(i,r)+" =>"]=s,e),{})}:Cu(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ho(e))}:ni(t)?ho(t):ae(t)&&!Ht(t)&&!Du(t)?String(t):t,ho=(n,t="")=>{var e;return ni(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class Nf{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!t&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Oe;try{return Oe=this,t()}finally{Oe=e}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){this._on>0&&--this._on===0&&(Oe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Of(){return Oe}let ne;const fo=new WeakSet;class zu{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fo.has(this)&&(fo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ql(this),Vu(this);const t=ne,e=rn;ne=this,rn=!0;try{return this.fn()}finally{ku(this),ne=t,rn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)cl(t);this.deps=this.depsTail=void 0,ql(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ea(this)&&this.run()}get dirty(){return ea(this)}}let Hu=0,ys,Es;function Gu(n,t=!1){if(n.flags|=8,t){n.next=Es,Es=n;return}n.next=ys,ys=n}function al(){Hu++}function ll(){if(--Hu>0)return;if(Es){let t=Es;for(Es=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;ys;){let t=ys;for(ys=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Vu(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ku(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),cl(i),Ff(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function ea(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Wu(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Wu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Cs)||(n.globalVersion=Cs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ea(n))))return;n.flags|=2;const t=n.dep,e=ne,i=rn;ne=n,rn=!0;try{Vu(n);const s=n.fn(n._value);(t.version===0||Kn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{ne=e,rn=i,ku(n),n.flags&=-3}}function cl(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)cl(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Ff(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let rn=!0;const Xu=[];function Ln(){Xu.push(rn),rn=!1}function Dn(){const n=Xu.pop();rn=n===void 0?!0:n}function ql(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ne;ne=void 0;try{t()}finally{ne=e}}}let Cs=0;class Bf{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ul{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!rn||ne===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ne)e=this.activeLink=new Bf(ne,this),ne.deps?(e.prevDep=ne.depsTail,ne.depsTail.nextDep=e,ne.depsTail=e):ne.deps=ne.depsTail=e,Yu(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ne.depsTail,e.nextDep=void 0,ne.depsTail.nextDep=e,ne.depsTail=e,ne.deps===e&&(ne.deps=i)}return e}trigger(t){this.version++,Cs++,this.notify(t)}notify(t){al();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ll()}}}function Yu(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Yu(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const na=new WeakMap,xi=Symbol(""),ia=Symbol(""),Ps=Symbol("");function Ee(n,t,e){if(rn&&ne){let i=na.get(n);i||na.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new ul),s.map=i,s.key=e),s.track()}}function wn(n,t,e,i,s,r){const o=na.get(n);if(!o){Cs++;return}const a=l=>{l&&l.trigger()};if(al(),t==="clear")o.forEach(a);else{const l=Ht(n),c=l&&sl(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Ps||!ni(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Ps)),t){case"add":l?c&&a(o.get("length")):(a(o.get(xi)),qi(n)&&a(o.get(ia)));break;case"delete":l||(a(o.get(xi)),qi(n)&&a(o.get(ia)));break;case"set":qi(n)&&a(o.get(xi));break}}ll()}function wi(n){const t=$t(n);return t===n?t:(Ee(t,"iterate",Ps),on(n)?t:t.map(we))}function hl(n){return Ee(n=$t(n),"iterate",Ps),n}const zf={__proto__:null,[Symbol.iterator](){return po(this,Symbol.iterator,we)},concat(...n){return wi(this).concat(...n.map(t=>Ht(t)?wi(t):t))},entries(){return po(this,"entries",n=>(n[1]=we(n[1]),n))},every(n,t){return vn(this,"every",n,t,void 0,arguments)},filter(n,t){return vn(this,"filter",n,t,e=>e.map(we),arguments)},find(n,t){return vn(this,"find",n,t,we,arguments)},findIndex(n,t){return vn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return vn(this,"findLast",n,t,we,arguments)},findLastIndex(n,t){return vn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return vn(this,"forEach",n,t,void 0,arguments)},includes(...n){return mo(this,"includes",n)},indexOf(...n){return mo(this,"indexOf",n)},join(n){return wi(this).join(n)},lastIndexOf(...n){return mo(this,"lastIndexOf",n)},map(n,t){return vn(this,"map",n,t,void 0,arguments)},pop(){return cs(this,"pop")},push(...n){return cs(this,"push",n)},reduce(n,...t){return jl(this,"reduce",n,t)},reduceRight(n,...t){return jl(this,"reduceRight",n,t)},shift(){return cs(this,"shift")},some(n,t){return vn(this,"some",n,t,void 0,arguments)},splice(...n){return cs(this,"splice",n)},toReversed(){return wi(this).toReversed()},toSorted(n){return wi(this).toSorted(n)},toSpliced(...n){return wi(this).toSpliced(...n)},unshift(...n){return cs(this,"unshift",n)},values(){return po(this,"values",we)}};function po(n,t,e){const i=hl(n),s=i[t]();return i!==n&&!on(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Hf=Array.prototype;function vn(n,t,e,i,s,r){const o=hl(n),a=o!==n&&!on(n),l=o[t];if(l!==Hf[t]){const h=l.apply(n,r);return a?we(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,we(h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function jl(n,t,e,i){const s=hl(n);let r=e;return s!==n&&(on(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,we(a),l,n)}),s[t](r,...i)}function mo(n,t,e){const i=$t(n);Ee(i,"iterate",Ps);const s=i[t](...e);return(s===-1||s===!1)&&ml(e[0])?(e[0]=$t(e[0]),i[t](...e)):s}function cs(n,t,e=[]){Ln(),al();const i=$t(n)[t].apply(n,e);return ll(),Dn(),i}const Gf=el("__proto__,__v_isRef,__isVue"),qu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ni));function Vf(n){ni(n)||(n=String(n));const t=$t(this);return Ee(t,"has",n),t.hasOwnProperty(n)}class ju{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Jf:Ju:r?Zu:$u).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ht(t);if(!s){let l;if(o&&(l=zf[e]))return l;if(e==="hasOwnProperty")return Vf}const a=Reflect.get(t,e,Te(t)?t:i);if((ni(e)?qu.has(e):Gf(e))||(s||Ee(t,"get",e),r))return a;if(Te(a)){const l=o&&sl(e)?a:a.value;return s&&ae(l)?ra(l):l}return ae(a)?s?ra(a):dl(a):a}}class Ku extends ju{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=Mi(r);if(!on(i)&&!Mi(i)&&(r=$t(r),i=$t(i)),!Ht(t)&&Te(r)&&!Te(i))return l||(r.value=i),!0}const o=Ht(t)&&sl(e)?Number(e)<t.length:Zt(t,e),a=Reflect.set(t,e,i,Te(t)?t:s);return t===$t(s)&&(o?Kn(i,r)&&wn(t,"set",e,i):wn(t,"add",e,i)),a}deleteProperty(t,e){const i=Zt(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&wn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!ni(e)||!qu.has(e))&&Ee(t,"has",e),i}ownKeys(t){return Ee(t,"iterate",Ht(t)?"length":xi),Reflect.ownKeys(t)}}class kf extends ju{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Wf=new Ku,Xf=new kf,Yf=new Ku(!0);const sa=n=>n,Xs=n=>Reflect.getPrototypeOf(n);function qf(n,t,e){return function(...i){const s=this.__v_raw,r=$t(s),o=qi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?sa:t?oa:we;return!t&&Ee(r,"iterate",l?ia:xi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ys(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function jf(n,t){const e={get(s){const r=this.__v_raw,o=$t(r),a=$t(s);n||(Kn(s,a)&&Ee(o,"get",s),Ee(o,"get",a));const{has:l}=Xs(o),c=t?sa:n?oa:we;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ee($t(s),"iterate",xi),s.size},has(s){const r=this.__v_raw,o=$t(r),a=$t(s);return n||(Kn(s,a)&&Ee(o,"has",s),Ee(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=$t(a),c=t?sa:n?oa:we;return!n&&Ee(l,"iterate",xi),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Le(e,n?{add:Ys("add"),set:Ys("set"),delete:Ys("delete"),clear:Ys("clear")}:{add(s){!t&&!on(s)&&!Mi(s)&&(s=$t(s));const r=$t(this);return Xs(r).has.call(r,s)||(r.add(s),wn(r,"add",s,s)),this},set(s,r){!t&&!on(r)&&!Mi(r)&&(r=$t(r));const o=$t(this),{has:a,get:l}=Xs(o);let c=a.call(o,s);c||(s=$t(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Kn(r,u)&&wn(o,"set",s,r):wn(o,"add",s,r),this},delete(s){const r=$t(this),{has:o,get:a}=Xs(r);let l=o.call(r,s);l||(s=$t(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&wn(r,"delete",s,void 0),c},clear(){const s=$t(this),r=s.size!==0,o=s.clear();return r&&wn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=qf(s,n,t)}),e}function fl(n,t){const e=jf(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Zt(e,s)&&s in i?e:i,s,r)}const Kf={get:fl(!1,!1)},$f={get:fl(!1,!0)},Zf={get:fl(!0,!1)};const $u=new WeakMap,Zu=new WeakMap,Ju=new WeakMap,Jf=new WeakMap;function Qf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function td(n){return n.__v_skip||!Object.isExtensible(n)?0:Qf(bf(n))}function dl(n){return Mi(n)?n:pl(n,!1,Wf,Kf,$u)}function ed(n){return pl(n,!1,Yf,$f,Zu)}function ra(n){return pl(n,!0,Xf,Zf,Ju)}function pl(n,t,e,i,s){if(!ae(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=td(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function Ts(n){return Mi(n)?Ts(n.__v_raw):!!(n&&n.__v_isReactive)}function Mi(n){return!!(n&&n.__v_isReadonly)}function on(n){return!!(n&&n.__v_isShallow)}function ml(n){return n?!!n.__v_raw:!1}function $t(n){const t=n&&n.__v_raw;return t?$t(t):n}function nd(n){return!Zt(n,"__v_skip")&&Object.isExtensible(n)&&Uu(n,"__v_skip",!0),n}const we=n=>ae(n)?dl(n):n,oa=n=>ae(n)?ra(n):n;function Te(n){return n?n.__v_isRef===!0:!1}function Qu(n){return id(n,!1)}function id(n,t){return Te(n)?n:new sd(n,t)}class sd{constructor(t,e){this.dep=new ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:$t(t),this._value=e?t:we(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||on(t)||Mi(t);t=i?t:$t(t),Kn(t,e)&&(this._rawValue=t,this._value=i?t:we(t),this.dep.trigger())}}function rd(n){return Te(n)?n.value:n}const od={get:(n,t,e)=>t==="__v_raw"?n:rd(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Te(s)&&!Te(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function th(n){return Ts(n)?n:new Proxy(n,od)}class ad{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return Gu(this,!0),!0}get value(){const t=this.dep.track();return Wu(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ld(n,t,e=!1){let i,s;return Wt(n)?i=n:(i=n.get,s=n.set),new ad(i,s,e)}const qs={},Lr=new WeakMap;let di;function cd(n,t=!1,e=di){if(e){let i=Lr.get(e);i||Lr.set(e,i=[]),i.push(n)}}function ud(n,t,e=ie){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=b=>s?b:on(b)||s===!1||s===0?Yn(b,1):Yn(b);let u,h,f,m,v=!1,M=!1;if(Te(n)?(h=()=>n.value,v=on(n)):Ts(n)?(h=()=>c(n),v=!0):Ht(n)?(M=!0,v=n.some(b=>Ts(b)||on(b)),h=()=>n.map(b=>{if(Te(b))return b.value;if(Ts(b))return c(b);if(Wt(b))return l?l(b,2):b()})):Wt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){Ln();try{f()}finally{Dn()}}const b=di;di=u;try{return l?l(n,3,[m]):n(m)}finally{di=b}}:h=pn,t&&s){const b=h,F=s===!0?1/0:s;h=()=>Yn(b(),F)}const p=Of(),d=()=>{u.stop(),p&&p.active&&il(p.effects,u)};if(r&&t){const b=t;t=(...F)=>{b(...F),d()}}let w=M?new Array(n.length).fill(qs):qs;const T=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(t){const F=u.run();if(s||v||(M?F.some((C,R)=>Kn(C,w[R])):Kn(F,w))){f&&f();const C=di;di=u;try{const R=[F,w===qs?void 0:M&&w[0]===qs?[]:w,m];w=F,l?l(t,3,R):t(...R)}finally{di=C}}}else u.run()};return a&&a(T),u=new zu(h),u.scheduler=o?()=>o(T,!1):T,m=b=>cd(b,!1,u),f=u.onStop=()=>{const b=Lr.get(u);if(b){if(l)l(b,4);else for(const F of b)F();Lr.delete(u)}},t?i?T(!0):w=u.run():o?o(T.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Yn(n,t=1/0,e){if(t<=0||!ae(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Te(n))Yn(n.value,t,e);else if(Ht(n))for(let i=0;i<n.length;i++)Yn(n[i],t,e);else if(Cu(n)||qi(n))n.forEach(i=>{Yn(i,t,e)});else if(Du(n)){for(const i in n)Yn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Yn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ns(n,t,e,i){try{return i?n(...i):n()}catch(s){Zr(s,t,e)}}function mn(n,t,e,i){if(Wt(n)){const s=Ns(n,t,e,i);return s&&Pu(s)&&s.catch(r=>{Zr(r,t,e)}),s}if(Ht(n)){const s=[];for(let r=0;r<n.length;r++)s.push(mn(n[r],t,e,i));return s}}function Zr(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ie;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Ln(),Ns(r,null,10,[n,l,c]),Dn();return}}hd(n,e,s,i,o)}function hd(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Re=[];let cn=-1;const ji=[];let kn=null,Vi=0;const eh=Promise.resolve();let Dr=null;function fd(n){const t=Dr||eh;return n?t.then(this?n.bind(this):n):t}function dd(n){let t=cn+1,e=Re.length;for(;t<e;){const i=t+e>>>1,s=Re[i],r=Ls(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function _l(n){if(!(n.flags&1)){const t=Ls(n),e=Re[Re.length-1];!e||!(n.flags&2)&&t>=Ls(e)?Re.push(n):Re.splice(dd(t),0,n),n.flags|=1,nh()}}function nh(){Dr||(Dr=eh.then(sh))}function pd(n){Ht(n)?ji.push(...n):kn&&n.id===-1?kn.splice(Vi+1,0,n):n.flags&1||(ji.push(n),n.flags|=1),nh()}function Kl(n,t,e=cn+1){for(;e<Re.length;e++){const i=Re[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Re.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ih(n){if(ji.length){const t=[...new Set(ji)].sort((e,i)=>Ls(e)-Ls(i));if(ji.length=0,kn){kn.push(...t);return}for(kn=t,Vi=0;Vi<kn.length;Vi++){const e=kn[Vi];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}kn=null,Vi=0}}const Ls=n=>n.id==null?n.flags&2?-1:1/0:n.id;function sh(n){try{for(cn=0;cn<Re.length;cn++){const t=Re[cn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ns(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;cn<Re.length;cn++){const t=Re[cn];t&&(t.flags&=-2)}cn=-1,Re.length=0,ih(),Dr=null,(Re.length||ji.length)&&sh()}}let dn=null,rh=null;function Ir(n){const t=dn;return dn=n,rh=n&&n.type.__scopeId||null,t}function md(n,t=dn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&rc(-1);const r=Ir(t);let o;try{o=n(...s)}finally{Ir(r),i._d&&rc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ri(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ln(),mn(l,e,8,[n.el,a,n,t]),Dn())}}const _d=Symbol("_vte"),gd=n=>n.__isTeleport,vd=Symbol("_leaveCb");function gl(n,t){n.shapeFlag&6&&n.component?(n.transition=t,gl(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function oh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Ur=new WeakMap;function bs(n,t,e,i,s=!1){if(Ht(n)){n.forEach((v,M)=>bs(v,t&&(Ht(t)?t[M]:t),e,i,s));return}if(As(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&bs(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Sl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ie?a.refs={}:a.refs,h=a.setupState,f=$t(h),m=h===ie?Ru:v=>Zt(f,v);if(c!=null&&c!==l){if($l(t),_e(c))u[c]=null,m(c)&&(h[c]=null);else if(Te(c)){c.value=null;const v=t;v.k&&(u[v.k]=null)}}if(Wt(l))Ns(l,a,12,[o,u]);else{const v=_e(l),M=Te(l);if(v||M){const p=()=>{if(n.f){const d=v?m(l)?h[l]:u[l]:l.value;if(s)Ht(d)&&il(d,r);else if(Ht(d))d.includes(r)||d.push(r);else if(v)u[l]=[r],m(l)&&(h[l]=u[l]);else{const w=[r];l.value=w,n.k&&(u[n.k]=w)}}else v?(u[l]=o,m(l)&&(h[l]=o)):M&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const d=()=>{p(),Ur.delete(n)};d.id=-1,Ur.set(n,d),Xe(d,e)}else $l(n),p()}}}function $l(n){const t=Ur.get(n);t&&(t.flags|=8,Ur.delete(n))}$r().requestIdleCallback;$r().cancelIdleCallback;const As=n=>!!n.type.__asyncLoader,ah=n=>n.type.__isKeepAlive;function xd(n,t){lh(n,"a",t)}function Md(n,t){lh(n,"da",t)}function lh(n,t,e=Pe){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Jr(t,i,e),e){let s=e.parent;for(;s&&s.parent;)ah(s.parent.vnode)&&Sd(i,t,e,s),s=s.parent}}function Sd(n,t,e,i){const s=Jr(t,n,i,!0);hh(()=>{il(i[t],s)},e)}function Jr(n,t,e=Pe,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Ln();const a=Os(e),l=mn(t,e,n,o);return a(),Dn(),l});return i?s.unshift(r):s.push(r),r}}const Nn=n=>(t,e=Pe)=>{(!Is||n==="sp")&&Jr(n,(...i)=>t(...i),e)},yd=Nn("bm"),ch=Nn("m"),Ed=Nn("bu"),Td=Nn("u"),uh=Nn("bum"),hh=Nn("um"),bd=Nn("sp"),Ad=Nn("rtg"),wd=Nn("rtc");function Rd(n,t=Pe){Jr("ec",n,t)}const Cd=Symbol.for("v-ndc"),aa=n=>n?Ih(n)?Sl(n):aa(n.parent):null,ws=Le(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>aa(n.parent),$root:n=>aa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>dh(n),$forceUpdate:n=>n.f||(n.f=()=>{_l(n.update)}),$nextTick:n=>n.n||(n.n=fd.bind(n.proxy)),$watch:n=>Zd.bind(n)}),_o=(n,t)=>n!==ie&&!n.__isScriptSetup&&Zt(n,t),Pd={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(_o(i,t))return o[t]=1,i[t];if(s!==ie&&Zt(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&Zt(c,t))return o[t]=3,r[t];if(e!==ie&&Zt(e,t))return o[t]=4,e[t];la&&(o[t]=0)}}const u=ws[t];let h,f;if(u)return t==="$attrs"&&Ee(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==ie&&Zt(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,Zt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return _o(s,t)?(s[t]=e,!0):i!==ie&&Zt(i,t)?(i[t]=e,!0):Zt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r,type:o}},a){let l,c;return!!(e[a]||n!==ie&&a[0]!=="$"&&Zt(n,a)||_o(t,a)||(l=r[0])&&Zt(l,a)||Zt(i,a)||Zt(ws,a)||Zt(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Zt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Zl(n){return Ht(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let la=!0;function Ld(n){const t=dh(n),e=n.proxy,i=n.ctx;la=!1,t.beforeCreate&&Jl(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:v,activated:M,deactivated:p,beforeDestroy:d,beforeUnmount:w,destroyed:T,unmounted:b,render:F,renderTracked:C,renderTriggered:R,errorCaptured:O,serverPrefetch:st,expose:x,inheritAttrs:E,components:W,directives:X,filters:J}=t;if(c&&Dd(c,i,null),o)for(const Q in o){const z=o[Q];Wt(z)&&(i[Q]=z.bind(e))}if(s){const Q=s.call(e,e);ae(Q)&&(n.data=dl(Q))}if(la=!0,r)for(const Q in r){const z=r[Q],pt=Wt(z)?z.bind(e,e):Wt(z.get)?z.get.bind(e,e):pn,gt=!Wt(z)&&Wt(z.set)?z.set.bind(e):pn,vt=Sp({get:pt,set:gt});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>vt.value,set:ut=>vt.value=ut})}if(a)for(const Q in a)fh(a[Q],i,e,Q);if(l){const Q=Wt(l)?l.call(e):l;Reflect.ownKeys(Q).forEach(z=>{Bd(z,Q[z])})}u&&Jl(u,n,"c");function H(Q,z){Ht(z)?z.forEach(pt=>Q(pt.bind(e))):z&&Q(z.bind(e))}if(H(yd,h),H(ch,f),H(Ed,m),H(Td,v),H(xd,M),H(Md,p),H(Rd,O),H(wd,C),H(Ad,R),H(uh,w),H(hh,b),H(bd,st),Ht(x))if(x.length){const Q=n.exposed||(n.exposed={});x.forEach(z=>{Object.defineProperty(Q,z,{get:()=>e[z],set:pt=>e[z]=pt,enumerable:!0})})}else n.exposed||(n.exposed={});F&&n.render===pn&&(n.render=F),E!=null&&(n.inheritAttrs=E),W&&(n.components=W),X&&(n.directives=X),st&&oh(n)}function Dd(n,t,e=pn){Ht(n)&&(n=ca(n));for(const i in n){const s=n[i];let r;ae(s)?"default"in s?r=Mr(s.from||i,s.default,!0):r=Mr(s.from||i):r=Mr(s),Te(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Jl(n,t,e){mn(Ht(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function fh(n,t,e,i){let s=i.includes(".")?Ah(e,i):()=>e[i];if(_e(n)){const r=t[n];Wt(r)&&vo(s,r)}else if(Wt(n))vo(s,n.bind(e));else if(ae(n))if(Ht(n))n.forEach(r=>fh(r,t,e,i));else{const r=Wt(n.handler)?n.handler.bind(e):t[n.handler];Wt(r)&&vo(s,r,n)}}function dh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Nr(l,c,o,!0)),Nr(l,t,o)),ae(t)&&r.set(t,l),l}function Nr(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Nr(n,r,e,!0),s&&s.forEach(o=>Nr(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Id[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Id={data:Ql,props:tc,emits:tc,methods:vs,computed:vs,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:vs,directives:vs,watch:Nd,provide:Ql,inject:Ud};function Ql(n,t){return t?n?function(){return Le(Wt(n)?n.call(this,this):n,Wt(t)?t.call(this,this):t)}:t:n}function Ud(n,t){return vs(ca(n),ca(t))}function ca(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function be(n,t){return n?[...new Set([].concat(n,t))]:t}function vs(n,t){return n?Le(Object.create(null),n,t):t}function tc(n,t){return n?Ht(n)&&Ht(t)?[...new Set([...n,...t])]:Le(Object.create(null),Zl(n),Zl(t??{})):t}function Nd(n,t){if(!n)return t;if(!t)return n;const e=Le(Object.create(null),n);for(const i in t)e[i]=be(n[i],t[i]);return e}function ph(){return{app:null,config:{isNativeTag:Ru,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Od=0;function Fd(n,t){return function(i,s=null){Wt(i)||(i=Le({},i)),s!=null&&!ae(s)&&(s=null);const r=ph(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Od++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:yp,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Wt(u.install)?(o.add(u),u.install(c,...h)):Wt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const m=c._ceVNode||$n(i,s);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(m,u,f),l=!0,c._container=u,u.__vue_app__=c,Sl(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(mn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Ki;Ki=c;try{return u()}finally{Ki=h}}};return c}}let Ki=null;function Bd(n,t){if(Pe){let e=Pe.provides;const i=Pe.parent&&Pe.parent.provides;i===e&&(e=Pe.provides=Object.create(i)),e[n]=t}}function Mr(n,t,e=!1){const i=mp();if(i||Ki){let s=Ki?Ki._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Wt(t)?t.call(i&&i.proxy):t}}const mh={},_h=()=>Object.create(mh),gh=n=>Object.getPrototypeOf(n)===mh;function zd(n,t,e,i=!1){const s={},r=_h();n.propsDefaults=Object.create(null),vh(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:ed(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Hd(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=$t(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Qr(n.emitsOptions,f))continue;const m=t[f];if(l)if(Zt(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const v=Qn(f);s[v]=ua(l,a,v,m,n,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{vh(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!Zt(t,h)&&((u=Ei(h))===h||!Zt(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=ua(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!Zt(t,h))&&(delete r[h],c=!0)}c&&wn(n.attrs,"set","")}function vh(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ss(l))continue;const c=t[l];let u;s&&Zt(s,u=Qn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Qr(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=$t(e),c=a||ie;for(let u=0;u<r.length;u++){const h=r[u];e[h]=ua(s,l,h,c[h],n,!Zt(c,h))}}return o}function ua(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=Zt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Wt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Os(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ei(e))&&(i=!0))}return i}const Gd=new WeakMap;function xh(n,t,e=!1){const i=e?Gd:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Wt(n)){const u=h=>{l=!0;const[f,m]=xh(h,t,!0);Le(o,f),m&&a.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ae(n)&&i.set(n,Yi),Yi;if(Ht(r))for(let u=0;u<r.length;u++){const h=Qn(r[u]);ec(h)&&(o[h]=ie)}else if(r)for(const u in r){const h=Qn(u);if(ec(h)){const f=r[u],m=o[h]=Ht(f)||Wt(f)?{type:f}:Le({},f),v=m.type;let M=!1,p=!0;if(Ht(v))for(let d=0;d<v.length;++d){const w=v[d],T=Wt(w)&&w.name;if(T==="Boolean"){M=!0;break}else T==="String"&&(p=!1)}else M=Wt(v)&&v.name==="Boolean";m[0]=M,m[1]=p,(M||Zt(m,"default"))&&a.push(h)}}const c=[o,a];return ae(n)&&i.set(n,c),c}function ec(n){return n[0]!=="$"&&!Ss(n)}const vl=n=>n==="_"||n==="_ctx"||n==="$stable",xl=n=>Ht(n)?n.map(hn):[hn(n)],Vd=(n,t,e)=>{if(t._n)return t;const i=md((...s)=>xl(t(...s)),e);return i._c=!1,i},Mh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(vl(s))continue;const r=n[s];if(Wt(r))t[s]=Vd(s,r,i);else if(r!=null){const o=xl(r);t[s]=()=>o}}},Sh=(n,t)=>{const e=xl(t);n.slots.default=()=>e},yh=(n,t,e)=>{for(const i in t)(e||!vl(i))&&(n[i]=t[i])},kd=(n,t,e)=>{const i=n.slots=_h();if(n.vnode.shapeFlag&32){const s=t._;s?(yh(i,t,e),e&&Uu(i,"_",s,!0)):Mh(t,i)}else t&&Sh(n,t)},Wd=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ie;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:yh(s,t,e):(r=!t.$stable,Mh(t,s)),o=t}else t&&(Sh(n,t),o={default:1});if(r)for(const a in s)!vl(a)&&o[a]==null&&delete s[a]},Xe=rp;function Xd(n){return Yd(n)}function Yd(n,t){const e=$r();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=pn,insertStaticContent:v}=n,M=(A,g,j,$=null,K=null,k=null,ot=void 0,tt=null,S=!!g.dynamicChildren)=>{if(A===g)return;A&&!us(A,g)&&($=ft(A),ut(A,K,k,!0),A=null),g.patchFlag===-2&&(S=!1,g.dynamicChildren=null);const{type:_,ref:P,shapeFlag:D}=g;switch(_){case to:p(A,g,j,$);break;case ts:d(A,g,j,$);break;case xo:A==null&&w(g,j,$,ot);break;case An:W(A,g,j,$,K,k,ot,tt,S);break;default:D&1?F(A,g,j,$,K,k,ot,tt,S):D&6?X(A,g,j,$,K,k,ot,tt,S):(D&64||D&128)&&_.process(A,g,j,$,K,k,ot,tt,S,Rt)}P!=null&&K?bs(P,A&&A.ref,k,g||A,!g):P==null&&A&&A.ref!=null&&bs(A.ref,null,k,A,!0)},p=(A,g,j,$)=>{if(A==null)i(g.el=a(g.children),j,$);else{const K=g.el=A.el;g.children!==A.children&&c(K,g.children)}},d=(A,g,j,$)=>{A==null?i(g.el=l(g.children||""),j,$):g.el=A.el},w=(A,g,j,$)=>{[A.el,A.anchor]=v(A.children,g,j,$,A.el,A.anchor)},T=({el:A,anchor:g},j,$)=>{let K;for(;A&&A!==g;)K=f(A),i(A,j,$),A=K;i(g,j,$)},b=({el:A,anchor:g})=>{let j;for(;A&&A!==g;)j=f(A),s(A),A=j;s(g)},F=(A,g,j,$,K,k,ot,tt,S)=>{if(g.type==="svg"?ot="svg":g.type==="math"&&(ot="mathml"),A==null)C(g,j,$,K,k,ot,tt,S);else{const _=A.el&&A.el._isVueCE?A.el:null;try{_&&_._beginPatch(),st(A,g,K,k,ot,tt,S)}finally{_&&_._endPatch()}}},C=(A,g,j,$,K,k,ot,tt)=>{let S,_;const{props:P,shapeFlag:D,transition:G,dirs:B}=A;if(S=A.el=o(A.type,k,P&&P.is,P),D&8?u(S,A.children):D&16&&O(A.children,S,null,$,K,go(A,k),ot,tt),B&&ri(A,null,$,"created"),R(S,A,A.scopeId,ot,$),P){for(const at in P)at!=="value"&&!Ss(at)&&r(S,at,null,P[at],k,$);"value"in P&&r(S,"value",null,P.value,k),(_=P.onVnodeBeforeMount)&&ln(_,$,A)}B&&ri(A,null,$,"beforeMount");const ct=qd(K,G);ct&&G.beforeEnter(S),i(S,g,j),((_=P&&P.onVnodeMounted)||ct||B)&&Xe(()=>{_&&ln(_,$,A),ct&&G.enter(S),B&&ri(A,null,$,"mounted")},K)},R=(A,g,j,$,K)=>{if(j&&m(A,j),$)for(let k=0;k<$.length;k++)m(A,$[k]);if(K){let k=K.subTree;if(g===k||Rh(k.type)&&(k.ssContent===g||k.ssFallback===g)){const ot=K.vnode;R(A,ot,ot.scopeId,ot.slotScopeIds,K.parent)}}},O=(A,g,j,$,K,k,ot,tt,S=0)=>{for(let _=S;_<A.length;_++){const P=A[_]=tt?Wn(A[_]):hn(A[_]);M(null,P,g,j,$,K,k,ot,tt)}},st=(A,g,j,$,K,k,ot)=>{const tt=g.el=A.el;let{patchFlag:S,dynamicChildren:_,dirs:P}=g;S|=A.patchFlag&16;const D=A.props||ie,G=g.props||ie;let B;if(j&&oi(j,!1),(B=G.onVnodeBeforeUpdate)&&ln(B,j,g,A),P&&ri(g,A,j,"beforeUpdate"),j&&oi(j,!0),(D.innerHTML&&G.innerHTML==null||D.textContent&&G.textContent==null)&&u(tt,""),_?x(A.dynamicChildren,_,tt,j,$,go(g,K),k):ot||z(A,g,tt,null,j,$,go(g,K),k,!1),S>0){if(S&16)E(tt,D,G,j,K);else if(S&2&&D.class!==G.class&&r(tt,"class",null,G.class,K),S&4&&r(tt,"style",D.style,G.style,K),S&8){const ct=g.dynamicProps;for(let at=0;at<ct.length;at++){const lt=ct[at],Ot=D[lt],rt=G[lt];(rt!==Ot||lt==="value")&&r(tt,lt,Ot,rt,K,j)}}S&1&&A.children!==g.children&&u(tt,g.children)}else!ot&&_==null&&E(tt,D,G,j,K);((B=G.onVnodeUpdated)||P)&&Xe(()=>{B&&ln(B,j,g,A),P&&ri(g,A,j,"updated")},$)},x=(A,g,j,$,K,k,ot)=>{for(let tt=0;tt<g.length;tt++){const S=A[tt],_=g[tt],P=S.el&&(S.type===An||!us(S,_)||S.shapeFlag&198)?h(S.el):j;M(S,_,P,null,$,K,k,ot,!0)}},E=(A,g,j,$,K)=>{if(g!==j){if(g!==ie)for(const k in g)!Ss(k)&&!(k in j)&&r(A,k,g[k],null,K,$);for(const k in j){if(Ss(k))continue;const ot=j[k],tt=g[k];ot!==tt&&k!=="value"&&r(A,k,tt,ot,K,$)}"value"in j&&r(A,"value",g.value,j.value,K)}},W=(A,g,j,$,K,k,ot,tt,S)=>{const _=g.el=A?A.el:a(""),P=g.anchor=A?A.anchor:a("");let{patchFlag:D,dynamicChildren:G,slotScopeIds:B}=g;B&&(tt=tt?tt.concat(B):B),A==null?(i(_,j,$),i(P,j,$),O(g.children||[],j,P,K,k,ot,tt,S)):D>0&&D&64&&G&&A.dynamicChildren?(x(A.dynamicChildren,G,j,K,k,ot,tt),(g.key!=null||K&&g===K.subTree)&&Eh(A,g,!0)):z(A,g,j,P,K,k,ot,tt,S)},X=(A,g,j,$,K,k,ot,tt,S)=>{g.slotScopeIds=tt,A==null?g.shapeFlag&512?K.ctx.activate(g,j,$,ot,S):J(g,j,$,K,k,ot,S):et(A,g,S)},J=(A,g,j,$,K,k,ot)=>{const tt=A.component=pp(A,$,K);if(ah(A)&&(tt.ctx.renderer=Rt),_p(tt,!1,ot),tt.asyncDep){if(K&&K.registerDep(tt,H,ot),!A.el){const S=tt.subTree=$n(ts);d(null,S,g,j),A.placeholder=S.el}}else H(tt,A,g,j,K,k,ot)},et=(A,g,j)=>{const $=g.component=A.component;if(ip(A,g,j))if($.asyncDep&&!$.asyncResolved){Q($,g,j);return}else $.next=g,$.update();else g.el=A.el,$.vnode=g},H=(A,g,j,$,K,k,ot)=>{const tt=()=>{if(A.isMounted){let{next:D,bu:G,u:B,parent:ct,vnode:at}=A;{const Ct=Th(A);if(Ct){D&&(D.el=at.el,Q(A,D,ot)),Ct.asyncDep.then(()=>{A.isUnmounted||tt()});return}}let lt=D,Ot;oi(A,!1),D?(D.el=at.el,Q(A,D,ot)):D=at,G&&uo(G),(Ot=D.props&&D.props.onVnodeBeforeUpdate)&&ln(Ot,ct,D,at),oi(A,!0);const rt=ic(A),_t=A.subTree;A.subTree=rt,M(_t,rt,h(_t.el),ft(_t),A,K,k),D.el=rt.el,lt===null&&sp(A,rt.el),B&&Xe(B,K),(Ot=D.props&&D.props.onVnodeUpdated)&&Xe(()=>ln(Ot,ct,D,at),K)}else{let D;const{el:G,props:B}=g,{bm:ct,m:at,parent:lt,root:Ot,type:rt}=A,_t=As(g);oi(A,!1),ct&&uo(ct),!_t&&(D=B&&B.onVnodeBeforeMount)&&ln(D,lt,g),oi(A,!0);{Ot.ce&&Ot.ce._def.shadowRoot!==!1&&Ot.ce._injectChildStyle(rt);const Ct=A.subTree=ic(A);M(null,Ct,j,$,A,K,k),g.el=Ct.el}if(at&&Xe(at,K),!_t&&(D=B&&B.onVnodeMounted)){const Ct=g;Xe(()=>ln(D,lt,Ct),K)}(g.shapeFlag&256||lt&&As(lt.vnode)&&lt.vnode.shapeFlag&256)&&A.a&&Xe(A.a,K),A.isMounted=!0,g=j=$=null}};A.scope.on();const S=A.effect=new zu(tt);A.scope.off();const _=A.update=S.run.bind(S),P=A.job=S.runIfDirty.bind(S);P.i=A,P.id=A.uid,S.scheduler=()=>_l(P),oi(A,!0),_()},Q=(A,g,j)=>{g.component=A;const $=A.vnode.props;A.vnode=g,A.next=null,Hd(A,g.props,$,j),Wd(A,g.children,j),Ln(),Kl(A),Dn()},z=(A,g,j,$,K,k,ot,tt,S=!1)=>{const _=A&&A.children,P=A?A.shapeFlag:0,D=g.children,{patchFlag:G,shapeFlag:B}=g;if(G>0){if(G&128){gt(_,D,j,$,K,k,ot,tt,S);return}else if(G&256){pt(_,D,j,$,K,k,ot,tt,S);return}}B&8?(P&16&&dt(_,K,k),D!==_&&u(j,D)):P&16?B&16?gt(_,D,j,$,K,k,ot,tt,S):dt(_,K,k,!0):(P&8&&u(j,""),B&16&&O(D,j,$,K,k,ot,tt,S))},pt=(A,g,j,$,K,k,ot,tt,S)=>{A=A||Yi,g=g||Yi;const _=A.length,P=g.length,D=Math.min(_,P);let G;for(G=0;G<D;G++){const B=g[G]=S?Wn(g[G]):hn(g[G]);M(A[G],B,j,null,K,k,ot,tt,S)}_>P?dt(A,K,k,!0,!1,D):O(g,j,$,K,k,ot,tt,S,D)},gt=(A,g,j,$,K,k,ot,tt,S)=>{let _=0;const P=g.length;let D=A.length-1,G=P-1;for(;_<=D&&_<=G;){const B=A[_],ct=g[_]=S?Wn(g[_]):hn(g[_]);if(us(B,ct))M(B,ct,j,null,K,k,ot,tt,S);else break;_++}for(;_<=D&&_<=G;){const B=A[D],ct=g[G]=S?Wn(g[G]):hn(g[G]);if(us(B,ct))M(B,ct,j,null,K,k,ot,tt,S);else break;D--,G--}if(_>D){if(_<=G){const B=G+1,ct=B<P?g[B].el:$;for(;_<=G;)M(null,g[_]=S?Wn(g[_]):hn(g[_]),j,ct,K,k,ot,tt,S),_++}}else if(_>G)for(;_<=D;)ut(A[_],K,k,!0),_++;else{const B=_,ct=_,at=new Map;for(_=ct;_<=G;_++){const Nt=g[_]=S?Wn(g[_]):hn(g[_]);Nt.key!=null&&at.set(Nt.key,_)}let lt,Ot=0;const rt=G-ct+1;let _t=!1,Ct=0;const Ut=new Array(rt);for(_=0;_<rt;_++)Ut[_]=0;for(_=B;_<=D;_++){const Nt=A[_];if(Ot>=rt){ut(Nt,K,k,!0);continue}let It;if(Nt.key!=null)It=at.get(Nt.key);else for(lt=ct;lt<=G;lt++)if(Ut[lt-ct]===0&&us(Nt,g[lt])){It=lt;break}It===void 0?ut(Nt,K,k,!0):(Ut[It-ct]=_+1,It>=Ct?Ct=It:_t=!0,M(Nt,g[It],j,null,K,k,ot,tt,S),Ot++)}const Tt=_t?jd(Ut):Yi;for(lt=Tt.length-1,_=rt-1;_>=0;_--){const Nt=ct+_,It=g[Nt],Qt=g[Nt+1],L=Nt+1<P?Qt.el||Qt.placeholder:$;Ut[_]===0?M(null,It,j,L,K,k,ot,tt,S):_t&&(lt<0||_!==Tt[lt]?vt(It,j,L,2):lt--)}}},vt=(A,g,j,$,K=null)=>{const{el:k,type:ot,transition:tt,children:S,shapeFlag:_}=A;if(_&6){vt(A.component.subTree,g,j,$);return}if(_&128){A.suspense.move(g,j,$);return}if(_&64){ot.move(A,g,j,Rt);return}if(ot===An){i(k,g,j);for(let D=0;D<S.length;D++)vt(S[D],g,j,$);i(A.anchor,g,j);return}if(ot===xo){T(A,g,j);return}if($!==2&&_&1&&tt)if($===0)tt.beforeEnter(k),i(k,g,j),Xe(()=>tt.enter(k),K);else{const{leave:D,delayLeave:G,afterLeave:B}=tt,ct=()=>{A.ctx.isUnmounted?s(k):i(k,g,j)},at=()=>{k._isLeaving&&k[vd](!0),D(k,()=>{ct(),B&&B()})};G?G(k,ct,at):at()}else i(k,g,j)},ut=(A,g,j,$=!1,K=!1)=>{const{type:k,props:ot,ref:tt,children:S,dynamicChildren:_,shapeFlag:P,patchFlag:D,dirs:G,cacheIndex:B}=A;if(D===-2&&(K=!1),tt!=null&&(Ln(),bs(tt,null,j,A,!0),Dn()),B!=null&&(g.renderCache[B]=void 0),P&256){g.ctx.deactivate(A);return}const ct=P&1&&G,at=!As(A);let lt;if(at&&(lt=ot&&ot.onVnodeBeforeUnmount)&&ln(lt,g,A),P&6)nt(A.component,j,$);else{if(P&128){A.suspense.unmount(j,$);return}ct&&ri(A,null,g,"beforeUnmount"),P&64?A.type.remove(A,g,j,Rt,$):_&&!_.hasOnce&&(k!==An||D>0&&D&64)?dt(_,g,j,!1,!0):(k===An&&D&384||!K&&P&16)&&dt(S,g,j),$&&Et(A)}(at&&(lt=ot&&ot.onVnodeUnmounted)||ct)&&Xe(()=>{lt&&ln(lt,g,A),ct&&ri(A,null,g,"unmounted")},j)},Et=A=>{const{type:g,el:j,anchor:$,transition:K}=A;if(g===An){Y(j,$);return}if(g===xo){b(A);return}const k=()=>{s(j),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(A.shapeFlag&1&&K&&!K.persisted){const{leave:ot,delayLeave:tt}=K,S=()=>ot(j,k);tt?tt(A.el,k,S):S()}else k()},Y=(A,g)=>{let j;for(;A!==g;)j=f(A),s(A),A=j;s(g)},nt=(A,g,j)=>{const{bum:$,scope:K,job:k,subTree:ot,um:tt,m:S,a:_}=A;nc(S),nc(_),$&&uo($),K.stop(),k&&(k.flags|=8,ut(ot,A,g,j)),tt&&Xe(tt,g),Xe(()=>{A.isUnmounted=!0},g)},dt=(A,g,j,$=!1,K=!1,k=0)=>{for(let ot=k;ot<A.length;ot++)ut(A[ot],g,j,$,K)},ft=A=>{if(A.shapeFlag&6)return ft(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const g=f(A.anchor||A.el),j=g&&g[_d];return j?f(j):g};let bt=!1;const Lt=(A,g,j)=>{A==null?g._vnode&&ut(g._vnode,null,null,!0):M(g._vnode||null,A,g,null,null,null,j),g._vnode=A,bt||(bt=!0,Kl(),ih(),bt=!1)},Rt={p:M,um:ut,m:vt,r:Et,mt:J,mc:O,pc:z,pbc:x,n:ft,o:n};return{render:Lt,hydrate:void 0,createApp:Fd(Lt)}}function go({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function oi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function qd(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Eh(n,t,e=!1){const i=n.children,s=t.children;if(Ht(i)&&Ht(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Wn(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Eh(o,a)),a.type===to&&a.patchFlag!==-1&&(a.el=o.el),a.type===ts&&!a.el&&(a.el=o.el)}}function jd(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Th(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Th(t)}function nc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Kd=Symbol.for("v-scx"),$d=()=>Mr(Kd);function vo(n,t,e){return bh(n,t,e)}function bh(n,t,e=ie){const{immediate:i,deep:s,flush:r,once:o}=e,a=Le({},e),l=t&&i||!t&&r!=="post";let c;if(Is){if(r==="sync"){const m=$d();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=pn,m.resume=pn,m.pause=pn,m}}const u=Pe;a.call=(m,v,M)=>mn(m,u,v,M);let h=!1;r==="post"?a.scheduler=m=>{Xe(m,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(m,v)=>{v?m():_l(m)}),a.augmentJob=m=>{t&&(m.flags|=4),h&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const f=ud(n,t,a);return Is&&(c?c.push(f):l&&f()),f}function Zd(n,t,e){const i=this.proxy,s=_e(n)?n.includes(".")?Ah(i,n):()=>i[n]:n.bind(i,i);let r;Wt(t)?r=t:(r=t.handler,e=t);const o=Os(this),a=bh(s,r.bind(i),e);return o(),a}function Ah(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Jd=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Qn(t)}Modifiers`]||n[`${Ei(t)}Modifiers`];function Qd(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ie;let s=e;const r=t.startsWith("update:"),o=r&&Jd(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>_e(u)?u.trim():u)),o.number&&(s=e.map(Rf)));let a,l=i[a=co(t)]||i[a=co(Qn(t))];!l&&r&&(l=i[a=co(Ei(t))]),l&&mn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,mn(c,n,6,s)}}const tp=new WeakMap;function wh(n,t,e=!1){const i=e?tp:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Wt(n)){const l=c=>{const u=wh(c,t,!0);u&&(a=!0,Le(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ae(n)&&i.set(n,null),null):(Ht(r)?r.forEach(l=>o[l]=null):Le(o,r),ae(n)&&i.set(n,o),o)}function Qr(n,t){return!n||!qr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Zt(n,t[0].toLowerCase()+t.slice(1))||Zt(n,Ei(t))||Zt(n,t))}function ic(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:m,ctx:v,inheritAttrs:M}=n,p=Ir(n);let d,w;try{if(e.shapeFlag&4){const b=s||i,F=b;d=hn(c.call(F,b,u,h,m,f,v)),w=a}else{const b=t;d=hn(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),w=t.props?a:ep(a)}}catch(b){Rs.length=0,Zr(b,n,1),d=$n(ts)}let T=d;if(w&&M!==!1){const b=Object.keys(w),{shapeFlag:F}=T;b.length&&F&7&&(r&&b.some(nl)&&(w=np(w,r)),T=es(T,w,!1,!0))}return e.dirs&&(T=es(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(e.dirs):e.dirs),e.transition&&gl(T,e.transition),d=T,Ir(p),d}const ep=n=>{let t;for(const e in n)(e==="class"||e==="style"||qr(e))&&((t||(t={}))[e]=n[e]);return t},np=(n,t)=>{const e={};for(const i in n)(!nl(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function ip(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?sc(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Qr(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?sc(i,o,c):!0:!!o;return!1}function sc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!Qr(e,r))return!0}return!1}function sp({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Rh=n=>n.__isSuspense;function rp(n,t){t&&t.pendingBranch?Ht(n)?t.effects.push(...n):t.effects.push(n):pd(n)}const An=Symbol.for("v-fgt"),to=Symbol.for("v-txt"),ts=Symbol.for("v-cmt"),xo=Symbol.for("v-stc"),Rs=[];let qe=null;function Ch(n=!1){Rs.push(qe=n?null:[])}function op(){Rs.pop(),qe=Rs[Rs.length-1]||null}let Ds=1;function rc(n,t=!1){Ds+=n,n<0&&qe&&t&&(qe.hasOnce=!0)}function ap(n){return n.dynamicChildren=Ds>0?qe||Yi:null,op(),Ds>0&&qe&&qe.push(n),n}function Ph(n,t,e,i,s,r){return ap(qn(n,t,e,i,s,r,!0))}function Lh(n){return n?n.__v_isVNode===!0:!1}function us(n,t){return n.type===t.type&&n.key===t.key}const Dh=({key:n})=>n??null,Sr=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?_e(n)||Te(n)||Wt(n)?{i:dn,r:n,k:t,f:!!e}:n:null);function qn(n,t=null,e=null,i=0,s=null,r=n===An?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Dh(t),ref:t&&Sr(t),scopeId:rh,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dn};return a?(Ml(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=_e(e)?8:16),Ds>0&&!o&&qe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&qe.push(l),l}const $n=lp;function lp(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Cd)&&(n=ts),Lh(n)){const a=es(n,t,!0);return e&&Ml(a,e),Ds>0&&!r&&qe&&(a.shapeFlag&6?qe[qe.indexOf(n)]=a:qe.push(a)),a.patchFlag=-2,a}if(Mp(n)&&(n=n.__vccOpts),t){t=cp(t);let{class:a,style:l}=t;a&&!_e(a)&&(t.class=ol(a)),ae(l)&&(ml(l)&&!Ht(l)&&(l=Le({},l)),t.style=rl(l))}const o=_e(n)?1:Rh(n)?128:gd(n)?64:ae(n)?4:Wt(n)?2:0;return qn(n,t,e,i,s,o,r,!0)}function cp(n){return n?ml(n)||gh(n)?Le({},n):n:null}function es(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?hp(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Dh(c),ref:t&&t.ref?e&&r?Ht(r)?r.concat(Sr(t)):[r,Sr(t)]:Sr(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==An?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&es(n.ssContent),ssFallback:n.ssFallback&&es(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&gl(u,l.clone(u)),u}function up(n=" ",t=0){return $n(to,null,n,t)}function hn(n){return n==null||typeof n=="boolean"?$n(ts):Ht(n)?$n(An,null,n.slice()):Lh(n)?Wn(n):$n(to,null,String(n))}function Wn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:es(n)}function Ml(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ht(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Ml(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!gh(t)?t._ctx=dn:s===3&&dn&&(dn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Wt(t)?(t={default:t,_ctx:dn},e=32):(t=String(t),i&64?(e=16,t=[up(t)]):e=8);n.children=t,n.shapeFlag|=e}function hp(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ol([t.class,i.class]));else if(s==="style")t.style=rl([t.style,i.style]);else if(qr(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ht(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function ln(n,t,e,i=null){mn(n,t,7,[e,i])}const fp=ph();let dp=0;function pp(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||fp,r={uid:dp++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xh(i,s),emitsOptions:wh(i,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:i.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Qd.bind(null,r),n.ce&&n.ce(r),r}let Pe=null;const mp=()=>Pe||dn;let Or,ha;{const n=$r(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Or=t("__VUE_INSTANCE_SETTERS__",e=>Pe=e),ha=t("__VUE_SSR_SETTERS__",e=>Is=e)}const Os=n=>{const t=Pe;return Or(n),n.scope.on(),()=>{n.scope.off(),Or(t)}},oc=()=>{Pe&&Pe.scope.off(),Or(null)};function Ih(n){return n.vnode.shapeFlag&4}let Is=!1;function _p(n,t=!1,e=!1){t&&ha(t);const{props:i,children:s}=n.vnode,r=Ih(n);zd(n,i,r,t),kd(n,s,e||t);const o=r?gp(n,t):void 0;return t&&ha(!1),o}function gp(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Pd);const{setup:i}=e;if(i){Ln();const s=n.setupContext=i.length>1?xp(n):null,r=Os(n),o=Ns(i,n,0,[n.props,s]),a=Pu(o);if(Dn(),r(),(a||n.sp)&&!As(n)&&oh(n),a){if(o.then(oc,oc),t)return o.then(l=>{ac(n,l)}).catch(l=>{Zr(l,n,0)});n.asyncDep=o}else ac(n,o)}else Uh(n)}function ac(n,t,e){Wt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ae(t)&&(n.setupState=th(t)),Uh(n)}function Uh(n,t,e){const i=n.type;n.render||(n.render=i.render||pn);{const s=Os(n);Ln();try{Ld(n)}finally{Dn(),s()}}}const vp={get(n,t){return Ee(n,"get",""),n[t]}};function xp(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,vp),slots:n.slots,emit:n.emit,expose:t}}function Sl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(th(nd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in ws)return ws[e](n)},has(t,e){return e in t||e in ws}})):n.proxy}function Mp(n){return Wt(n)&&"__vccOpts"in n}const Sp=(n,t)=>ld(n,t,Is),yp="3.5.24";/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fa;const lc=typeof window<"u"&&window.trustedTypes;if(lc)try{fa=lc.createPolicy("vue",{createHTML:n=>n})}catch{}const Nh=fa?n=>fa.createHTML(n):n=>n,Ep="http://www.w3.org/2000/svg",Tp="http://www.w3.org/1998/Math/MathML",bn=typeof document<"u"?document:null,cc=bn&&bn.createElement("template"),bp={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?bn.createElementNS(Ep,n):t==="mathml"?bn.createElementNS(Tp,n):e?bn.createElement(n,{is:e}):bn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>bn.createTextNode(n),createComment:n=>bn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>bn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{cc.innerHTML=Nh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=cc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Ap=Symbol("_vtc");function wp(n,t,e){const i=n[Ap];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const uc=Symbol("_vod"),Rp=Symbol("_vsh"),Cp=Symbol(""),Pp=/(?:^|;)\s*display\s*:/;function Lp(n,t,e){const i=n.style,s=_e(e);let r=!1;if(e&&!s){if(t)if(_e(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&yr(i,a,"")}else for(const o in t)e[o]==null&&yr(i,o,"");for(const o in e)o==="display"&&(r=!0),yr(i,o,e[o])}else if(s){if(t!==e){const o=i[Cp];o&&(e+=";"+o),i.cssText=e,r=Pp.test(e)}}else t&&n.removeAttribute("style");uc in n&&(n[uc]=r?i.display:"",n[Rp]&&(i.display="none"))}const hc=/\s*!important$/;function yr(n,t,e){if(Ht(e))e.forEach(i=>yr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Dp(n,t);hc.test(e)?n.setProperty(Ei(i),e.replace(hc,""),"important"):n[i]=e}}const fc=["Webkit","Moz","ms"],Mo={};function Dp(n,t){const e=Mo[t];if(e)return e;let i=Qn(t);if(i!=="filter"&&i in n)return Mo[t]=i;i=Iu(i);for(let s=0;s<fc.length;s++){const r=fc[s]+i;if(r in n)return Mo[t]=r}return t}const dc="http://www.w3.org/1999/xlink";function pc(n,t,e,i,s,r=Uf(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(dc,t.slice(6,t.length)):n.setAttributeNS(dc,t,e):e==null||r&&!Nu(e)?n.removeAttribute(t):n.setAttribute(t,r?"":ni(e)?String(e):e)}function mc(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Nh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Nu(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Ip(n,t,e,i){n.addEventListener(t,e,i)}function Up(n,t,e,i){n.removeEventListener(t,e,i)}const _c=Symbol("_vei");function Np(n,t,e,i,s=null){const r=n[_c]||(n[_c]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Op(t);if(i){const c=r[t]=zp(i,s);Ip(n,a,c,l)}else o&&(Up(n,a,o,l),r[t]=void 0)}}const gc=/(?:Once|Passive|Capture)$/;function Op(n){let t;if(gc.test(n)){t={};let i;for(;i=n.match(gc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ei(n.slice(2)),t]}let So=0;const Fp=Promise.resolve(),Bp=()=>So||(Fp.then(()=>So=0),So=Date.now());function zp(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;mn(Hp(i,e.value),t,5,[i])};return e.value=n,e.attached=Bp(),e}function Hp(n,t){if(Ht(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const vc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Gp=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?wp(n,i,o):t==="style"?Lp(n,e,i):qr(t)?nl(t)||Np(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vp(n,t,i,o))?(mc(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&pc(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!_e(i))?mc(n,Qn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),pc(n,t,i,o))};function Vp(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&vc(t)&&Wt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return vc(t)&&_e(e)?!1:t in n}const kp=Le({patchProp:Gp},bp);let xc;function Wp(){return xc||(xc=Xd(kp))}const Xp=(...n)=>{const t=Wp().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=qp(i);if(!s)return;const r=t._component;!Wt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Yp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Yp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function qp(n){return _e(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yl="169",$i={ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jp=0,Mc=1,Kp=2,Oh=1,Fh=2,Tn=3,ti=0,Be=1,Rn=2,Zn=0,Zi=1,Fr=2,Sc=3,yc=4,$p=5,mi=100,Zp=101,Jp=102,Qp=103,tm=104,em=200,nm=201,im=202,sm=203,da=204,pa=205,rm=206,om=207,am=208,lm=209,cm=210,um=211,hm=212,fm=213,dm=214,ma=0,_a=1,ga=2,ns=3,va=4,xa=5,Ma=6,Sa=7,Bh=0,pm=1,mm=2,Jn=0,_m=1,gm=2,vm=3,xm=4,Mm=5,Sm=6,ym=7,zh=300,is=301,ss=302,ya=303,Ea=304,eo=306,Ta=1e3,gi=1001,ba=1002,$e=1003,Em=1004,js=1005,en=1006,yo=1007,vi=1008,In=1009,Hh=1010,Gh=1011,Us=1012,El=1013,Si=1014,Cn=1015,Fs=1016,Tl=1017,bl=1018,rs=1020,Vh=35902,kh=1021,Wh=1022,sn=1023,Xh=1024,Yh=1025,Ji=1026,os=1027,qh=1028,Al=1029,jh=1030,wl=1031,Rl=1033,Er=33776,Tr=33777,br=33778,Ar=33779,Aa=35840,wa=35841,Ra=35842,Ca=35843,Pa=36196,La=37492,Da=37496,Ia=37808,Ua=37809,Na=37810,Oa=37811,Fa=37812,Ba=37813,za=37814,Ha=37815,Ga=37816,Va=37817,ka=37818,Wa=37819,Xa=37820,Ya=37821,wr=36492,qa=36494,ja=36495,Kh=36283,Ka=36284,$a=36285,Za=36286,Tm=3200,bm=3201,$h=0,Am=1,jn="",un="srgb",ii="srgb-linear",Cl="display-p3",no="display-p3-linear",Br="linear",re="srgb",zr="rec709",Hr="p3",Ri=7680,Ec=519,wm=512,Rm=513,Cm=514,Zh=515,Pm=516,Lm=517,Dm=518,Im=519,Tc=35044,bc="300 es",Pn=2e3,Gr=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rr=Math.PI/180,Vr=180/Math.PI;function Bs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function Um(n,t){return(n%t+t)%t}function Eo(n,t,e){return(1-e)*n+e*t}function hs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Nm={DEG2RAD:Rr};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,s,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],v=i[8],M=s[0],p=s[3],d=s[6],w=s[1],T=s[4],b=s[7],F=s[2],C=s[5],R=s[8];return r[0]=o*M+a*w+l*F,r[3]=o*p+a*T+l*C,r[6]=o*d+a*b+l*R,r[1]=c*M+u*w+h*F,r[4]=c*p+u*T+h*C,r[7]=c*d+u*b+h*R,r[2]=f*M+m*w+v*F,r[5]=f*p+m*T+v*C,r[8]=f*d+m*b+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,v=e*h+i*f+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=h*M,t[1]=(s*c-u*i)*M,t[2]=(a*i-s*o)*M,t[3]=f*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=m*M,t[7]=(i*l-c*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(To.makeScale(t,e)),this}rotate(t){return this.premultiply(To.makeRotation(-t)),this}translate(t,e){return this.premultiply(To.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const To=new kt;function Jh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Om(){const n=kr("canvas");return n.style.display="block",n}const Ac={};function Cr(n){n in Ac||(Ac[n]=!0,console.warn(n))}function Fm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Bm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const wc=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rc=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fs={[ii]:{transfer:Br,primaries:zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[un]:{transfer:re,primaries:zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[no]:{transfer:Br,primaries:Hr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Rc),fromReference:n=>n.applyMatrix3(wc)},[Cl]:{transfer:re,primaries:Hr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Rc),fromReference:n=>n.applyMatrix3(wc).convertLinearToSRGB()}},Hm=new Set([ii,no]),Jt={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Hm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=fs[t].toReference,s=fs[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return fs[n].primaries},getTransfer:function(n){return n===jn?Br:fs[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(fs[t].luminanceCoefficients)}};function Qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ci;class Gm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=kr("canvas")),Ci.width=t.width,Ci.height=t.height;const i=Ci.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=kr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qi(e[i]/255)*255):e[i]=Qi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vm=0;class Qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Bs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ao(s[o].image)):r.push(Ao(s[o]))}else r=Ao(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let km=0;class ze extends Ti{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,i=gi,s=gi,r=en,o=vi,a=sn,l=In,c=ze.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Bs(),this.name="",this.source=new Qh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ta:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ta:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=zh;ze.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,i=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],v=l[9],M=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,b=(m+1)/2,F=(d+1)/2,C=(u+f)/4,R=(h+M)/4,O=(v+p)/4;return T>b&&T>F?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=C/i,r=R/i):b>F?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=C/s,r=O/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=R/r,s=O/r),this.set(i,s,r,e),this}let w=Math.sqrt((p-v)*(p-v)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-v)/w,this.y=(h-M)/w,this.z=(f-u)/w,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wm extends Ti{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new ze(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends Wm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class tf extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xm extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],m=r[o+1],v=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=M;return}if(h!==M||l!==f||c!==m||u!==v){let p=1-a;const d=l*f+c*m+u*v+h*M,w=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const F=Math.sqrt(T),C=Math.atan2(F,d*w);p=Math.sin(p*C)/F,a=Math.sin(a*C)/F}const b=a*w;if(l=l*p+f*b,c=c*p+m*b,u=u*p+v*b,h=h*p+M*b,p===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=F,c*=F,u*=F,h*=F}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],v=r[o+3];return t[e]=a*v+u*h+l*m-c*f,t[e+1]=l*v+u*f+c*h-a*m,t[e+2]=c*v+u*m+a*f-l*h,t[e+3]=u*v-a*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h-f*m*v;break;case"YXZ":this._x=f*u*h+c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h+f*m*v;break;case"ZXY":this._x=f*u*h-c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h-f*m*v;break;case"ZYX":this._x=f*u*h-c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h+f*m*v;break;case"YZX":this._x=f*u*h+c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h-f*m*v;break;case"XZY":this._x=f*u*h-c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return wo.copy(this).projectOnVector(t),this.sub(wo)}reflect(t){return this.sub(wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new N,Cc=new ei;class zs{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Je):Je.fromBufferAttribute(r,o),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ks.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ks.copy(i.boundingBox)),Ks.applyMatrix4(t.matrixWorld),this.union(Ks)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),$s.subVectors(this.max,ds),Pi.subVectors(t.a,ds),Li.subVectors(t.b,ds),Di.subVectors(t.c,ds),Fn.subVectors(Li,Pi),Bn.subVectors(Di,Li),ai.subVectors(Pi,Di);let e=[0,-Fn.z,Fn.y,0,-Bn.z,Bn.y,0,-ai.z,ai.y,Fn.z,0,-Fn.x,Bn.z,0,-Bn.x,ai.z,0,-ai.x,-Fn.y,Fn.x,0,-Bn.y,Bn.x,0,-ai.y,ai.x,0];return!Ro(e,Pi,Li,Di,$s)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,Pi,Li,Di,$s))?!1:(Zs.crossVectors(Fn,Bn),e=[Zs.x,Zs.y,Zs.z],Ro(e,Pi,Li,Di,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new N,new N,new N,new N,new N,new N,new N,new N],Je=new N,Ks=new zs,Pi=new N,Li=new N,Di=new N,Fn=new N,Bn=new N,ai=new N,ds=new N,$s=new N,Zs=new N,li=new N;function Ro(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){li.fromArray(n,r);const a=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=t.dot(li),c=e.dot(li),u=i.dot(li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ym=new zs,ps=new N,Co=new N;class Hs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ym.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ps,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(Co)),this.expandByPoint(ps.copy(t.center).sub(Co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new N,Po=new N,Js=new N,zn=new N,Lo=new N,Qs=new N,Do=new N;class Gs{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Po.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Po);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Js),a=zn.dot(this.direction),l=-zn.dot(Js),c=zn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,v;if(u>0)if(h=o*l-a,f=o*a-l,v=r*u,h>=0)if(f>=-v)if(f<=v){const M=1/u;h*=M,f*=M,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Po).addScaledVector(Js,f),m}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const i=Mn.dot(this.direction),s=Mn.dot(Mn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,i,s,r){Lo.subVectors(e,t),Qs.subVectors(i,t),Do.crossVectors(Lo,Qs);let o=this.direction.dot(Do),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const l=a*this.direction.dot(Qs.crossVectors(zn,Qs));if(l<0)return null;const c=a*this.direction.dot(Lo.cross(zn));if(c<0||l+c>o)return null;const u=-a*zn.dot(Do);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,i,s,r,o,a,l,c,u,h,f,m,v,M,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,m,v,M,p)}set(t,e,i,s,r,o,a,l,c,u,h,f,m,v,M,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=v,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,m=o*h,v=a*u,M=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+v*c,e[5]=f-M*c,e[9]=-a*l,e[2]=M-f*c,e[6]=v+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,v=c*u,M=c*h;e[0]=f+M*a,e[4]=v*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-v,e[6]=M+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,v=c*u,M=c*h;e[0]=f-M*a,e[4]=-o*h,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*u,e[9]=M-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,m=o*h,v=a*u,M=a*h;e[0]=l*u,e[4]=v*c-m,e[8]=f*c+M,e[1]=l*h,e[5]=M*c+f,e[9]=m*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,v=a*l,M=a*c;e[0]=l*u,e[4]=M-f*h,e[8]=v*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+v,e[10]=f-M*h}else if(t.order==="XZY"){const f=o*l,m=o*c,v=a*l,M=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+M,e[5]=o*u,e[9]=m*h-v,e[2]=v*h-m,e[6]=a*u,e[10]=M*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qm,t,jm)}lookAt(t,e,i){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Hn.crossVectors(i,ke),Hn.lengthSq()===0&&(Math.abs(i.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Hn.crossVectors(i,ke)),Hn.normalize(),tr.crossVectors(ke,Hn),s[0]=Hn.x,s[4]=tr.x,s[8]=ke.x,s[1]=Hn.y,s[5]=tr.y,s[9]=ke.y,s[2]=Hn.z,s[6]=tr.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],v=i[2],M=i[6],p=i[10],d=i[14],w=i[3],T=i[7],b=i[11],F=i[15],C=s[0],R=s[4],O=s[8],st=s[12],x=s[1],E=s[5],W=s[9],X=s[13],J=s[2],et=s[6],H=s[10],Q=s[14],z=s[3],pt=s[7],gt=s[11],vt=s[15];return r[0]=o*C+a*x+l*J+c*z,r[4]=o*R+a*E+l*et+c*pt,r[8]=o*O+a*W+l*H+c*gt,r[12]=o*st+a*X+l*Q+c*vt,r[1]=u*C+h*x+f*J+m*z,r[5]=u*R+h*E+f*et+m*pt,r[9]=u*O+h*W+f*H+m*gt,r[13]=u*st+h*X+f*Q+m*vt,r[2]=v*C+M*x+p*J+d*z,r[6]=v*R+M*E+p*et+d*pt,r[10]=v*O+M*W+p*H+d*gt,r[14]=v*st+M*X+p*Q+d*vt,r[3]=w*C+T*x+b*J+F*z,r[7]=w*R+T*E+b*et+F*pt,r[11]=w*O+T*W+b*H+F*gt,r[15]=w*st+T*X+b*Q+F*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],v=t[3],M=t[7],p=t[11],d=t[15];return v*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*m-i*l*m)+M*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+e*c*h-e*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+d*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],v=t[12],M=t[13],p=t[14],d=t[15],w=h*p*c-M*f*c+M*l*m-a*p*m-h*l*d+a*f*d,T=v*f*c-u*p*c-v*l*m+o*p*m+u*l*d-o*f*d,b=u*M*c-v*h*c+v*a*m-o*M*m-u*a*d+o*h*d,F=v*h*l-u*M*l-v*a*f+o*M*f+u*a*p-o*h*p,C=e*w+i*T+s*b+r*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=w*R,t[1]=(M*f*r-h*p*r-M*s*m+i*p*m+h*s*d-i*f*d)*R,t[2]=(a*p*r-M*l*r+M*s*c-i*p*c-a*s*d+i*l*d)*R,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*m-i*l*m)*R,t[4]=T*R,t[5]=(u*p*r-v*f*r+v*s*m-e*p*m-u*s*d+e*f*d)*R,t[6]=(v*l*r-o*p*r-v*s*c+e*p*c+o*s*d-e*l*d)*R,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*m+e*l*m)*R,t[8]=b*R,t[9]=(v*h*r-u*M*r-v*i*m+e*M*m+u*i*d-e*h*d)*R,t[10]=(o*M*r-v*a*r+v*i*c-e*M*c-o*i*d+e*a*d)*R,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*m-e*a*m)*R,t[12]=F*R,t[13]=(u*M*s-v*h*s+v*i*f-e*M*f-u*i*p+e*h*p)*R,t[14]=(v*a*s-o*M*s-v*i*l+e*M*l+o*i*p-e*a*p)*R,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,v=r*h,M=o*u,p=o*h,d=a*h,w=l*c,T=l*u,b=l*h,F=i.x,C=i.y,R=i.z;return s[0]=(1-(M+d))*F,s[1]=(m+b)*F,s[2]=(v-T)*F,s[3]=0,s[4]=(m-b)*C,s[5]=(1-(f+d))*C,s[6]=(p+w)*C,s[7]=0,s[8]=(v+T)*R,s[9]=(p-w)*R,s[10]=(1-(f+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ii.set(s[0],s[1],s[2]).length();const o=Ii.set(s[4],s[5],s[6]).length(),a=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const c=1/r,u=1/o,h=1/a;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=u,Qe.elements[5]*=u,Qe.elements[6]*=u,Qe.elements[8]*=h,Qe.elements[9]*=h,Qe.elements[10]*=h,e.setFromRotationMatrix(Qe),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Pn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let m,v;if(a===Pn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Gr)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Pn){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,m=(i+s)*u;let v,M;if(a===Pn)v=(o+r)*h,M=-2*h;else if(a===Gr)v=r*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ii=new N,Qe=new oe,qm=new N(0,0,0),jm=new N(1,1,1),Hn=new N,tr=new N,ke=new N,Pc=new oe,Lc=new ei;class _n{constructor(t=0,e=0,i=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Pl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Km=0;const Dc=new N,Ui=new ei,Sn=new oe,er=new N,ms=new N,$m=new N,Zm=new ei,Ic=new N(1,0,0),Uc=new N(0,1,0),Nc=new N(0,0,1),Oc={type:"added"},Jm={type:"removed"},Ni={type:"childadded",child:null},Io={type:"childremoved",child:null};class ue extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new N,e=new _n,i=new ei,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new kt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Ic,t)}rotateY(t){return this.rotateOnAxis(Uc,t)}rotateZ(t){return this.rotateOnAxis(Nc,t)}translateOnAxis(t,e){return Dc.copy(t).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ic,t)}translateY(t){return this.translateOnAxis(Uc,t)}translateZ(t){return this.translateOnAxis(Nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?er.copy(t):er.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ms,er,this.up):Sn.lookAt(er,ms,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jm),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,$m),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Zm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ue.DEFAULT_UP=new N(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new N,yn=new N,Uo=new N,En=new N,Oi=new N,Fi=new N,Fc=new N,No=new N,Oo=new N,Fo=new N,Bo=new ce,zo=new ce,Ho=new ce;class nn{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),tn.subVectors(t,e),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){tn.subVectors(s,e),yn.subVectors(i,e),Uo.subVectors(t,e);const o=tn.dot(tn),a=tn.dot(yn),l=tn.dot(Uo),c=yn.dot(yn),u=yn.dot(Uo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-m-v,v,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Bo.setScalar(0),zo.setScalar(0),Ho.setScalar(0),Bo.fromBufferAttribute(t,e),zo.fromBufferAttribute(t,i),Ho.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Bo,r.x),o.addScaledVector(zo,r.y),o.addScaledVector(Ho,r.z),o}static isFrontFacing(t,e,i,s){return tn.subVectors(i,e),yn.subVectors(t,e),tn.cross(yn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),tn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Oi.subVectors(s,i),Fi.subVectors(r,i),No.subVectors(t,i);const l=Oi.dot(No),c=Fi.dot(No);if(l<=0&&c<=0)return e.copy(i);Oo.subVectors(t,s);const u=Oi.dot(Oo),h=Fi.dot(Oo);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Oi,o);Fo.subVectors(t,r);const m=Oi.dot(Fo),v=Fi.dot(Fo);if(v>=0&&m<=v)return e.copy(r);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(Fi,a);const p=u*v-m*h;if(p<=0&&h-u>=0&&m-v>=0)return Fc.subVectors(r,s),a=(h-u)/(h-u+(m-v)),e.copy(s).addScaledVector(Fc,a);const d=1/(p+M+f);return o=M*d,a=f*d,e.copy(i).addScaledVector(Oi,o).addScaledVector(Fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function Go(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Jt.workingColorSpace){if(t=Um(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Go(o,r,t+1/3),this.g=Go(o,r,t),this.b=Go(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=un){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const i=ef[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=bo(t.r),this.g=bo(t.g),this.b=bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return Jt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Ce(ye.r*255,0,255))*65536+Math.round(Ce(ye.g*255,0,255))*256+Math.round(Ce(ye.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(ye.copy(this),e);const i=ye.r,s=ye.g,r=ye.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=un){Jt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,i=ye.g,s=ye.b;return t!==un?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(nr);const i=Eo(Gn.h,nr.h,e),s=Eo(Gn.s,nr.s,e),r=Eo(Gn.l,nr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Gt;Gt.NAMES=ef;let Qm=0;class bi extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Zi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=pa,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==da&&(i.blendSrc=this.blendSrc),this.blendDst!==pa&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wr extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new N,ir=new zt;class an{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Tc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tc&&(t.usage=this.usage),t}}class nf extends an{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class sf extends an{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class pe extends an{constructor(t,e,i){super(new Float32Array(t),e,i)}}let t_=0;const Ke=new oe,Vo=new ue,Bi=new N,We=new zs,_s=new zs,xe=new N;class He extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jh(t)?sf:nf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,i){return Ke.makeTranslation(t,e,i),this.applyMatrix4(Ke),this}scale(t,e,i){return Ke.makeScale(t,e,i),this.applyMatrix4(Ke),this}lookAt(t){return Vo.lookAt(t),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];We.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(We.min,_s.min),We.expandByPoint(xe),xe.addVectors(We.max,_s.max),We.expandByPoint(xe)):(We.expandByPoint(_s.min),We.expandByPoint(_s.max))}We.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xe.fromBufferAttribute(a,c),l&&(Bi.fromBufferAttribute(t,c),xe.add(Bi)),s=Math.max(s,i.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new N,l[O]=new N;const c=new N,u=new N,h=new N,f=new zt,m=new zt,v=new zt,M=new N,p=new N;function d(O,st,x){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,st),h.fromBufferAttribute(i,x),f.fromBufferAttribute(r,O),m.fromBufferAttribute(r,st),v.fromBufferAttribute(r,x),u.sub(c),h.sub(c),m.sub(f),v.sub(f);const E=1/(m.x*v.y-v.x*m.y);isFinite(E)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(E),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(E),a[O].add(M),a[st].add(M),a[x].add(M),l[O].add(p),l[st].add(p),l[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let O=0,st=w.length;O<st;++O){const x=w[O],E=x.start,W=x.count;for(let X=E,J=E+W;X<J;X+=3)d(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const T=new N,b=new N,F=new N,C=new N;function R(O){F.fromBufferAttribute(s,O),C.copy(F);const st=a[O];T.copy(st),T.sub(F.multiplyScalar(F.dot(st))).normalize(),b.crossVectors(C,st);const E=b.dot(l[O])<0?-1:1;o.setXYZW(O,T.x,T.y,T.z,E)}for(let O=0,st=w.length;O<st;++O){const x=w[O],E=x.start,W=x.count;for(let X=E,J=E+W;X<J;X+=3)R(t.getX(X+0)),R(t.getX(X+1)),R(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,m=t.count;f<m;f+=3){const v=t.getX(f+0),M=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let M=0,p=l.length;M<p;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*u;for(let d=0;d<u;d++)f[v++]=c[m++]}return new an(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new oe,ci=new Gs,sr=new Hs,zc=new N,rr=new N,or=new N,ar=new N,ko=new N,lr=new N,Hc=new N,cr=new N;class Fe extends ue{constructor(t=new He,e=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ko.fromBufferAttribute(h,t),o?lr.addScaledVector(ko,u):lr.addScaledVector(ko.sub(e),u))}e.add(lr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(sr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(sr,zc)===null||ci.origin.distanceToSquared(zc)>(t.far-t.near)**2))&&(Bc.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Bc),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=f.length;v<M;v++){const p=f[v],d=o[p.materialIndex],w=Math.max(p.start,m.start),T=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=w,F=T;b<F;b+=3){const C=a.getX(b),R=a.getX(b+1),O=a.getX(b+2);s=ur(this,d,t,i,c,u,h,C,R,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const w=a.getX(p),T=a.getX(p+1),b=a.getX(p+2);s=ur(this,o,t,i,c,u,h,w,T,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,M=f.length;v<M;v++){const p=f[v],d=o[p.materialIndex],w=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=w,F=T;b<F;b+=3){const C=b,R=b+1,O=b+2;s=ur(this,d,t,i,c,u,h,C,R,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const w=p,T=p+1,b=p+2;s=ur(this,o,t,i,c,u,h,w,T,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function e_(n,t,e,i,s,r,o,a){let l;if(t.side===Be?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ti,a),l===null)return null;cr.copy(a),cr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(cr);return c<e.near||c>e.far?null:{distance:c,point:cr.clone(),object:n}}function ur(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,rr),n.getVertexPosition(l,or),n.getVertexPosition(c,ar);const u=e_(n,t,e,i,rr,or,ar,Hc);if(u){const h=new N;nn.getBarycoord(Hc,rr,or,ar,h),s&&(u.uv=nn.getInterpolatedAttribute(s,a,l,c,h,new zt)),r&&(u.uv1=nn.getInterpolatedAttribute(r,a,l,c,h,new zt)),o&&(u.normal=nn.getInterpolatedAttribute(o,a,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};nn.getNormal(rr,or,ar,f.normal),u.face=f,u.barycoord=h}return u}class Vs extends He{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,i,e,t,o,r,0),v("z","y","x",1,-1,i,e,-t,o,r,1),v("x","z","y",1,1,t,i,e,s,o,2),v("x","z","y",1,-1,t,i,-e,s,o,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(h,2));function v(M,p,d,w,T,b,F,C,R,O,st){const x=b/R,E=F/O,W=b/2,X=F/2,J=C/2,et=R+1,H=O+1;let Q=0,z=0;const pt=new N;for(let gt=0;gt<H;gt++){const vt=gt*E-X;for(let ut=0;ut<et;ut++){const Et=ut*x-W;pt[M]=Et*w,pt[p]=vt*T,pt[d]=J,c.push(pt.x,pt.y,pt.z),pt[M]=0,pt[p]=0,pt[d]=C>0?1:-1,u.push(pt.x,pt.y,pt.z),h.push(ut/R),h.push(1-gt/O),Q+=1}}for(let gt=0;gt<O;gt++)for(let vt=0;vt<R;vt++){const ut=f+vt+et*gt,Et=f+vt+et*(gt+1),Y=f+(vt+1)+et*(gt+1),nt=f+(vt+1)+et*gt;l.push(ut,Et,nt),l.push(Et,Y,nt),z+=6}a.addGroup(m,z,st),m+=z,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ae(n){const t={};for(let e=0;e<n.length;e++){const i=as(n[e]);for(const s in i)t[s]=i[s]}return t}function n_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function rf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const i_={clone:as,merge:Ae};var s_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=r_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=n_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class of extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new N,Gc=new zt,Vc=new zt;class Ye extends of{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Vc),e.subVectors(Vc,Gc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,Hi=1;class o_ extends ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ye(zi,Hi,t,e);s.layers=this.layers,this.add(s);const r=new Ye(zi,Hi,t,e);r.layers=this.layers,this.add(r);const o=new Ye(zi,Hi,t,e);o.layers=this.layers,this.add(o);const a=new Ye(zi,Hi,t,e);a.layers=this.layers,this.add(a);const l=new Ye(zi,Hi,t,e);l.layers=this.layers,this.add(l);const c=new Ye(zi,Hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class af extends ze{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class a_ extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new af(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vs(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:Zn});r.uniforms.tEquirect.value=e;const o=new Fe(s,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=en),new o_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Wo=new N,l_=new N,c_=new kt;class Xn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Wo.subVectors(i,e).cross(l_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Wo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||c_.getNormalMatrix(t),s=this.coplanarPoint(Wo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Hs,hr=new N;class Ll{constructor(t=new Xn,e=new Xn,i=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],v=s[9],M=s[10],p=s[11],d=s[12],w=s[13],T=s[14],b=s[15];if(i[0].setComponents(l-r,f-c,p-m,b-d).normalize(),i[1].setComponents(l+r,f+c,p+m,b+d).normalize(),i[2].setComponents(l+o,f+u,p+v,b+w).normalize(),i[3].setComponents(l-o,f-u,p-v,b-w).normalize(),i[4].setComponents(l-a,f-h,p-M,b-T).normalize(),e===Pn)i[5].setComponents(l+a,f+h,p+M,b+T).normalize();else if(e===Gr)i[5].setComponents(a,h,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(hr.x=s.normal.x>0?t.max.x:t.min.x,hr.y=s.normal.y>0?t.max.y:t.min.y,hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function u_(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<h.length;m++){const v=h[f],M=h[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,h[f]=M)}h.length=f+1;for(let m=0,v=h.length;m<v;m++){const M=h[m];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class io extends He{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,m=[],v=[],M=[],p=[];for(let d=0;d<u;d++){const w=d*f-o;for(let T=0;T<c;T++){const b=T*h-r;v.push(b,-w,0),M.push(0,0,1),p.push(T/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const T=w+c*d,b=w+c*(d+1),F=w+1+c*(d+1),C=w+1+c*d;m.push(T,b,C),m.push(b,F,C)}this.setIndex(m),this.setAttribute("position",new pe(v,3)),this.setAttribute("normal",new pe(M,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.width,t.height,t.widthSegments,t.heightSegments)}}var h_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f_=`#ifdef USE_ALPHAHASH
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
#endif`,d_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,__=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g_=`#ifdef USE_AOMAP
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
#endif`,v_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x_=`#ifdef USE_BATCHING
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
#endif`,M_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T_=`#ifdef USE_IRIDESCENCE
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
#endif`,b_=`#ifdef USE_BUMPMAP
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
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,U_=`#define PI 3.141592653589793
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
} // validated`,N_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O_=`vec3 transformedNormal = objectNormal;
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
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G_="gl_FragColor = linearToOutputTexel( gl_FragColor );",V_=`
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
}`,k_=`#ifdef USE_ENVMAP
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
#endif`,W_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J_=`#ifdef USE_GRADIENTMAP
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
}`,Q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
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
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lg=`PhysicalMaterial material;
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
#endif`,cg=`struct PhysicalMaterial {
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
}`,ug=`
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
#endif`,hg=`#if defined( RE_IndirectDiffuse )
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
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
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kg=`float getShadowMask() {
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
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,t0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h0=`uniform sampler2D t2D;
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
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
}`,g0=`#if DEPTH_PACKING == 3200
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
}`,v0=`#define DISTANCE
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
}`,x0=`#define DISTANCE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
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
}`,E0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
}`,A0=`#define LAMBERT
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
}`,w0=`#define LAMBERT
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
}`,R0=`#define MATCAP
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
}`,C0=`#define MATCAP
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
}`,P0=`#define NORMAL
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
}`,L0=`#define NORMAL
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
}`,D0=`#define PHONG
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
}`,I0=`#define PHONG
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
}`,U0=`#define STANDARD
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
}`,N0=`#define STANDARD
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
}`,O0=`#define TOON
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
}`,F0=`#define TOON
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
}`,B0=`uniform float size;
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
}`,z0=`uniform vec3 diffuse;
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
}`,H0=`#include <common>
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
}`,G0=`uniform vec3 color;
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
}`,V0=`uniform float rotation;
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
}`,k0=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:h_,alphahash_pars_fragment:f_,alphamap_fragment:d_,alphamap_pars_fragment:p_,alphatest_fragment:m_,alphatest_pars_fragment:__,aomap_fragment:g_,aomap_pars_fragment:v_,batching_pars_vertex:x_,batching_vertex:M_,begin_vertex:S_,beginnormal_vertex:y_,bsdfs:E_,iridescence_fragment:T_,bumpmap_pars_fragment:b_,clipping_planes_fragment:A_,clipping_planes_pars_fragment:w_,clipping_planes_pars_vertex:R_,clipping_planes_vertex:C_,color_fragment:P_,color_pars_fragment:L_,color_pars_vertex:D_,color_vertex:I_,common:U_,cube_uv_reflection_fragment:N_,defaultnormal_vertex:O_,displacementmap_pars_vertex:F_,displacementmap_vertex:B_,emissivemap_fragment:z_,emissivemap_pars_fragment:H_,colorspace_fragment:G_,colorspace_pars_fragment:V_,envmap_fragment:k_,envmap_common_pars_fragment:W_,envmap_pars_fragment:X_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:ig,envmap_vertex:q_,fog_vertex:j_,fog_pars_vertex:K_,fog_fragment:$_,fog_pars_fragment:Z_,gradientmap_pars_fragment:J_,lightmap_pars_fragment:Q_,lights_lambert_fragment:tg,lights_lambert_pars_fragment:eg,lights_pars_begin:ng,lights_toon_fragment:sg,lights_toon_pars_fragment:rg,lights_phong_fragment:og,lights_phong_pars_fragment:ag,lights_physical_fragment:lg,lights_physical_pars_fragment:cg,lights_fragment_begin:ug,lights_fragment_maps:hg,lights_fragment_end:fg,logdepthbuf_fragment:dg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:_g,map_fragment:gg,map_pars_fragment:vg,map_particle_fragment:xg,map_particle_pars_fragment:Mg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:yg,morphinstance_vertex:Eg,morphcolor_vertex:Tg,morphnormal_vertex:bg,morphtarget_pars_vertex:Ag,morphtarget_vertex:wg,normal_fragment_begin:Rg,normal_fragment_maps:Cg,normal_pars_fragment:Pg,normal_pars_vertex:Lg,normal_vertex:Dg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Fg,opaque_fragment:Bg,packing:zg,premultiplied_alpha_fragment:Hg,project_vertex:Gg,dithering_fragment:Vg,dithering_pars_fragment:kg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:qg,shadowmap_vertex:jg,shadowmask_pars_fragment:Kg,skinbase_vertex:$g,skinning_pars_vertex:Zg,skinning_vertex:Jg,skinnormal_vertex:Qg,specularmap_fragment:t0,specularmap_pars_fragment:e0,tonemapping_fragment:n0,tonemapping_pars_fragment:i0,transmission_fragment:s0,transmission_pars_fragment:r0,uv_pars_fragment:o0,uv_pars_vertex:a0,uv_vertex:l0,worldpos_vertex:c0,background_vert:u0,background_frag:h0,backgroundCube_vert:f0,backgroundCube_frag:d0,cube_vert:p0,cube_frag:m0,depth_vert:_0,depth_frag:g0,distanceRGBA_vert:v0,distanceRGBA_frag:x0,equirect_vert:M0,equirect_frag:S0,linedashed_vert:y0,linedashed_frag:E0,meshbasic_vert:T0,meshbasic_frag:b0,meshlambert_vert:A0,meshlambert_frag:w0,meshmatcap_vert:R0,meshmatcap_frag:C0,meshnormal_vert:P0,meshnormal_frag:L0,meshphong_vert:D0,meshphong_frag:I0,meshphysical_vert:U0,meshphysical_frag:N0,meshtoon_vert:O0,meshtoon_frag:F0,points_vert:B0,points_frag:z0,shadow_vert:H0,shadow_frag:G0,sprite_vert:V0,sprite_frag:k0},mt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},fn={basic:{uniforms:Ae([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ae([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ae([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ae([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ae([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ae([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ae([mt.points,mt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ae([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ae([mt.common,mt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ae([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ae([mt.sprite,mt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ae([mt.common,mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ae([mt.lights,mt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};fn.physical={uniforms:Ae([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const fr={r:0,b:0,g:0},hi=new _n,W0=new oe;function X0(n,t,e,i,s,r,o){const a=new Gt(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function v(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?e:t).get(T)),T}function M(w){let T=!1;const b=v(w);b===null?d(a,l):b&&b.isColor&&(d(b,1),T=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,T){const b=v(T);b&&(b.isCubeTexture||b.mapping===eo)?(u===void 0&&(u=new Fe(new Vs(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:as(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),hi.copy(T.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(W0.makeRotationFromEuler(hi)),u.material.toneMapped=Jt.getTransfer(b.colorSpace)!==re,(h!==b||f!==b.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,m=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Fe(new io(2,2),new Un({name:"BackgroundMaterial",uniforms:as(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(b.colorSpace)!==re,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,m=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,T){w.getRGB(fr,rf(n)),i.buffers.color.setClear(fr.r,fr.g,fr.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(w,T=1){a.set(w),l=T,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(a,l)},render:M,addToRenderList:p}}function Y0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,E,W,X,J){let et=!1;const H=h(X,W,E);r!==H&&(r=H,c(r.object)),et=m(x,X,W,J),et&&v(x,X,W,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,b(x,E,W,X),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,E,W){const X=W.wireframe===!0;let J=i[x.id];J===void 0&&(J={},i[x.id]=J);let et=J[E.id];et===void 0&&(et={},J[E.id]=et);let H=et[X];return H===void 0&&(H=f(l()),et[X]=H),H}function f(x){const E=[],W=[],X=[];for(let J=0;J<e;J++)E[J]=0,W[J]=0,X[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:W,attributeDivisors:X,object:x,attributes:{},index:null}}function m(x,E,W,X){const J=r.attributes,et=E.attributes;let H=0;const Q=W.getAttributes();for(const z in Q)if(Q[z].location>=0){const gt=J[z];let vt=et[z];if(vt===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(vt=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(vt=x.instanceColor)),gt===void 0||gt.attribute!==vt||vt&&gt.data!==vt.data)return!0;H++}return r.attributesNum!==H||r.index!==X}function v(x,E,W,X){const J={},et=E.attributes;let H=0;const Q=W.getAttributes();for(const z in Q)if(Q[z].location>=0){let gt=et[z];gt===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor));const vt={};vt.attribute=gt,gt&&gt.data&&(vt.data=gt.data),J[z]=vt,H++}r.attributes=J,r.attributesNum=H,r.index=X}function M(){const x=r.newAttributes;for(let E=0,W=x.length;E<W;E++)x[E]=0}function p(x){d(x,0)}function d(x,E){const W=r.newAttributes,X=r.enabledAttributes,J=r.attributeDivisors;W[x]=1,X[x]===0&&(n.enableVertexAttribArray(x),X[x]=1),J[x]!==E&&(n.vertexAttribDivisor(x,E),J[x]=E)}function w(){const x=r.newAttributes,E=r.enabledAttributes;for(let W=0,X=E.length;W<X;W++)E[W]!==x[W]&&(n.disableVertexAttribArray(W),E[W]=0)}function T(x,E,W,X,J,et,H){H===!0?n.vertexAttribIPointer(x,E,W,J,et):n.vertexAttribPointer(x,E,W,X,J,et)}function b(x,E,W,X){M();const J=X.attributes,et=W.getAttributes(),H=E.defaultAttributeValues;for(const Q in et){const z=et[Q];if(z.location>=0){let pt=J[Q];if(pt===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor)),pt!==void 0){const gt=pt.normalized,vt=pt.itemSize,ut=t.get(pt);if(ut===void 0)continue;const Et=ut.buffer,Y=ut.type,nt=ut.bytesPerElement,dt=Y===n.INT||Y===n.UNSIGNED_INT||pt.gpuType===El;if(pt.isInterleavedBufferAttribute){const ft=pt.data,bt=ft.stride,Lt=pt.offset;if(ft.isInstancedInterleavedBuffer){for(let Rt=0;Rt<z.locationSize;Rt++)d(z.location+Rt,ft.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Rt=0;Rt<z.locationSize;Rt++)p(z.location+Rt);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let Rt=0;Rt<z.locationSize;Rt++)T(z.location+Rt,vt/z.locationSize,Y,gt,bt*nt,(Lt+vt/z.locationSize*Rt)*nt,dt)}else{if(pt.isInstancedBufferAttribute){for(let ft=0;ft<z.locationSize;ft++)d(z.location+ft,pt.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ft=0;ft<z.locationSize;ft++)p(z.location+ft);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let ft=0;ft<z.locationSize;ft++)T(z.location+ft,vt/z.locationSize,Y,gt,vt*nt,vt/z.locationSize*ft*nt,dt)}}else if(H!==void 0){const gt=H[Q];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(z.location,gt);break;case 3:n.vertexAttrib3fv(z.location,gt);break;case 4:n.vertexAttrib4fv(z.location,gt);break;default:n.vertexAttrib1fv(z.location,gt)}}}}w()}function F(){O();for(const x in i){const E=i[x];for(const W in E){const X=E[W];for(const J in X)u(X[J].object),delete X[J];delete E[W]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const W in E){const X=E[W];for(const J in X)u(X[J].object),delete X[J];delete E[W]}delete i[x.id]}function R(x){for(const E in i){const W=i[E];if(W[x.id]===void 0)continue;const X=W[x.id];for(const J in X)u(X[J].object),delete X[J];delete W[x.id]}}function O(){st(),o=!0,r!==s&&(r=s,c(r.object))}function st(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:st,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:w}}function q0(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v];e.update(m,i,1)}function l(c,u,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let v=0;for(let M=0;M<h;M++)v+=u[M];for(let M=0;M<f.length;M++)e.update(v,i,f[M])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function j0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const O=R===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==In&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Cn&&!O)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=v>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:F,maxSamples:C}}function K0(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Xn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,M=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||v===null||v.length===0||r&&!p)r?u(null):c();else{const w=r?0:i,T=w*4;let b=d.clippingState||null;l.value=b,b=u(v,f,T,m);for(let F=0;F!==T;++F)b[F]=e[F];d.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,v){const M=h!==null?h.length:0;let p=null;if(M!==0){if(p=l.value,v!==!0||p===null){const d=m+M*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,b=m;T!==M;++T,b+=4)o.copy(h[T]).applyMatrix4(w,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function $0(n){let t=new WeakMap;function e(o,a){return a===ya?o.mapping=is:a===Ea&&(o.mapping=ss),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ya||a===Ea)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new a_(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class cf extends of{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Wi=4,kc=[.125,.215,.35,.446,.526,.582],_i=20,Xo=new cf,Wc=new Gt;let Yo=null,qo=0,jo=0,Ko=!1;const pi=(1+Math.sqrt(5))/2,Gi=1/pi,Xc=[new N(-pi,Gi,0),new N(pi,Gi,0),new N(-Gi,0,pi),new N(Gi,0,pi),new N(0,pi,-Gi),new N(0,pi,Gi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Yc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Yo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yo,qo,jo),this._renderer.xr.enabled=Ko,t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Fs,format:sn,colorSpace:ii,depthBuffer:!1},s=qc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z0(r)),this._blurMaterial=J0(r,t,e)}return s}_compileMaterial(t){const e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,Xo)}_sceneToCubeUV(t,e,i,s){const a=new Ye(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Wc),u.toneMapping=Jn,u.autoClear=!1;const m=new Wr({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),v=new Fe(new Vs,m);let M=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,M=!0):(m.color.copy(Wc),M=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):w===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const T=this._cubeSize;dr(s,w*T,d>2?T:0,T,T),u.setRenderTarget(s),M&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;dr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Xo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xc[(s-r-1)%Xc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Fe(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*_i-1),M=r/v,p=isFinite(r)?1+Math.floor(u*M):_i;p>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_i}`);const d=[];let w=0;for(let R=0;R<_i;++R){const O=R/M,st=Math.exp(-O*O/2);d.push(st),R===0?w+=st:R<p&&(w+=2*st)}for(let R=0;R<d.length;R++)d[R]=d[R]/w;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-i;const b=this._sizeLods[s],F=3*b*(s>T-Wi?s-T+Wi:0),C=4*(this._cubeSize-b);dr(e,F,C,3*b,2*b),l.setRenderTarget(e),l.render(h,Xo)}}function Z0(n){const t=[],e=[],i=[];let s=n;const r=n-Wi+1+kc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Wi?l=kc[o-n+Wi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,M=3,p=2,d=1,w=new Float32Array(M*v*m),T=new Float32Array(p*v*m),b=new Float32Array(d*v*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,O=C>2?0:-1,st=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];w.set(st,M*v*C),T.set(f,p*v*C);const x=[C,C,C,C,C,C];b.set(x,d*v*C)}const F=new He;F.setAttribute("position",new an(w,M)),F.setAttribute("uv",new an(T,p)),F.setAttribute("faceIndex",new an(b,d)),t.push(F),s>Wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function qc(n,t,e){const i=new yi(n,t,e);return i.texture.mapping=eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function J0(n,t,e){const i=new Float32Array(_i),s=new N(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function jc(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Kc(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Dl(){return`

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
	`}function Q0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ya||l===Ea,u=l===is||l===ss;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Yc(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new Yc(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function tv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Cr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ev(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const M=f.morphAttributes[v];for(let p=0,d=M.length;p<d;p++)t.remove(M[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)t.update(f[v],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const M=m[v];for(let p=0,d=M.length;p<d;p++)t.update(M[p],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,v=h.attributes.position;let M=0;if(m!==null){const w=m.array;M=m.version;for(let T=0,b=w.length;T<b;T+=3){const F=w[T+0],C=w[T+1],R=w[T+2];f.push(F,C,C,R,R,F)}}else if(v!==void 0){const w=v.array;M=v.version;for(let T=0,b=w.length/3-1;T<b;T+=3){const F=T+0,C=T+1,R=T+2;f.push(F,C,C,R,R,F)}}else return;const p=new(Jh(f)?sf:nf)(f,1);p.version=M;const d=r.get(h);d&&t.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function nv(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*o),e.update(m,i,1)}function c(f,m,v){v!==0&&(n.drawElementsInstanced(i,m,r,f*o,v),e.update(m,i,v))}function u(f,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,v);let p=0;for(let d=0;d<v;d++)p+=m[d];e.update(p,i,1)}function h(f,m,v,M){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],M[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,M,0,v);let d=0;for(let w=0;w<v;w++)d+=m[w];for(let w=0;w<M.length;w++)e.update(d,i,M[w])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function iv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function sv(n,t,e){const i=new WeakMap,s=new ce;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let x=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let b=0;v===!0&&(b=1),M===!0&&(b=2),p===!0&&(b=3);let F=a.attributes.position.count*b,C=1;F>t.maxTextureSize&&(C=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const R=new Float32Array(F*C*4*h),O=new tf(R,F,C,h);O.type=Cn,O.needsUpdate=!0;const st=b*4;for(let E=0;E<h;E++){const W=d[E],X=w[E],J=T[E],et=F*C*4*E;for(let H=0;H<W.count;H++){const Q=H*st;v===!0&&(s.fromBufferAttribute(W,H),R[et+Q+0]=s.x,R[et+Q+1]=s.y,R[et+Q+2]=s.z,R[et+Q+3]=0),M===!0&&(s.fromBufferAttribute(X,H),R[et+Q+4]=s.x,R[et+Q+5]=s.y,R[et+Q+6]=s.z,R[et+Q+7]=0),p===!0&&(s.fromBufferAttribute(J,H),R[et+Q+8]=s.x,R[et+Q+9]=s.y,R[et+Q+10]=s.z,R[et+Q+11]=J.itemSize===4?s.w:1)}}f={count:h,texture:O,size:new zt(F,C)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const M=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function rv(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class uf extends ze{constructor(t,e,i,s,r,o,a,l,c,u=Ji){if(u!==Ji&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ji&&(i=Si),i===void 0&&u===os&&(i=rs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const hf=new ze,$c=new uf(1,1),ff=new tf,df=new Xm,pf=new af,Zc=[],Jc=[],Qc=new Float32Array(16),tu=new Float32Array(9),eu=new Float32Array(4);function ls(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Zc[s];if(r===void 0&&(r=new Float32Array(s),Zc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function so(n,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ov(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function av(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function lv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function cv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function uv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;eu.set(i),n.uniformMatrix2fv(this.addr,!1,eu),ve(e,i)}}function hv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;tu.set(i),n.uniformMatrix3fv(this.addr,!1,tu),ve(e,i)}}function fv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;Qc.set(i),n.uniformMatrix4fv(this.addr,!1,Qc),ve(e,i)}}function dv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function pv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function mv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function _v(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function gv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function Mv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function Sv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($c.compareFunction=Zh,r=$c):r=hf,e.setTexture2D(t||r,s)}function yv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||df,s)}function Ev(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||pf,s)}function Tv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ff,s)}function bv(n){switch(n){case 5126:return ov;case 35664:return av;case 35665:return lv;case 35666:return cv;case 35674:return uv;case 35675:return hv;case 35676:return fv;case 5124:case 35670:return dv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return _v;case 5125:return gv;case 36294:return vv;case 36295:return xv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Tv}}function Av(n,t){n.uniform1fv(this.addr,t)}function wv(n,t){const e=ls(t,this.size,2);n.uniform2fv(this.addr,e)}function Rv(n,t){const e=ls(t,this.size,3);n.uniform3fv(this.addr,e)}function Cv(n,t){const e=ls(t,this.size,4);n.uniform4fv(this.addr,e)}function Pv(n,t){const e=ls(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Lv(n,t){const e=ls(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Dv(n,t){const e=ls(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Iv(n,t){n.uniform1iv(this.addr,t)}function Uv(n,t){n.uniform2iv(this.addr,t)}function Nv(n,t){n.uniform3iv(this.addr,t)}function Ov(n,t){n.uniform4iv(this.addr,t)}function Fv(n,t){n.uniform1uiv(this.addr,t)}function Bv(n,t){n.uniform2uiv(this.addr,t)}function zv(n,t){n.uniform3uiv(this.addr,t)}function Hv(n,t){n.uniform4uiv(this.addr,t)}function Gv(n,t,e){const i=this.cache,s=t.length,r=so(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||hf,r[o])}function Vv(n,t,e){const i=this.cache,s=t.length,r=so(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||df,r[o])}function kv(n,t,e){const i=this.cache,s=t.length,r=so(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||pf,r[o])}function Wv(n,t,e){const i=this.cache,s=t.length,r=so(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ff,r[o])}function Xv(n){switch(n){case 5126:return Av;case 35664:return wv;case 35665:return Rv;case 35666:return Cv;case 35674:return Pv;case 35675:return Lv;case 35676:return Dv;case 5124:case 35670:return Iv;case 35667:case 35671:return Uv;case 35668:case 35672:return Nv;case 35669:case 35673:return Ov;case 5125:return Fv;case 36294:return Bv;case 36295:return zv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Wv}}class Yv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=bv(e.type)}}class qv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xv(e.type)}}class jv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function nu(n,t){n.seq.push(t),n.map[t.id]=t}function Kv(n,t,e){const i=n.name,s=i.length;for($o.lastIndex=0;;){const r=$o.exec(i),o=$o.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nu(e,c===void 0?new Yv(a,n,t):new qv(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new jv(a),nu(e,h)),e=h}}}class Pr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Kv(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function iu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const $v=37297;let Zv=0;function Jv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Qv(n){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(n);let i;switch(t===e?i="":t===Hr&&e===zr?i="LinearDisplayP3ToLinearSRGB":t===zr&&e===Hr&&(i="LinearSRGBToLinearDisplayP3"),n){case ii:case no:return[i,"LinearTransferOETF"];case un:case Cl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function su(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Jv(n.getShaderSource(t),o)}else return s}function tx(n,t){const e=Qv(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ex(n,t){let e;switch(t){case _m:e="Linear";break;case gm:e="Reinhard";break;case vm:e="Cineon";break;case xm:e="ACESFilmic";break;case Sm:e="AgX";break;case ym:e="Neutral";break;case Mm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pr=new N;function nx(){Jt.getLuminanceCoefficients(pr);const n=pr.x.toFixed(4),t=pr.y.toFixed(4),e=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ix(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function sx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function rx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function xs(n){return n!==""}function ru(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ou(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(n){return n.replace(ox,lx)}const ax=new Map;function lx(n,t){let e=Vt[t];if(e===void 0){const i=ax.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}const cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(n){return n.replace(cx,ux)}function ux(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function hx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Oh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function fx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function px(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bh:t="ENVMAP_BLENDING_MULTIPLY";break;case pm:t="ENVMAP_BLENDING_MIX";break;case mm:t="ENVMAP_BLENDING_ADD";break}return t}function mx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function _x(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=hx(e),c=fx(e),u=dx(e),h=px(e),f=mx(e),m=ix(e),v=sx(r),M=s.createProgram();let p,d,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(xs).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(xs).join(`
`),d.length>0&&(d+=`
`)):(p=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),d=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?ex("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,tx("linearToOutputTexel",e.outputColorSpace),nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xs).join(`
`)),o=Ja(o),o=ru(o,e),o=ou(o,e),a=Ja(a),a=ru(a,e),a=ou(a,e),o=au(o),a=au(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=w+p+o,b=w+d+a,F=iu(s,s.VERTEX_SHADER,T),C=iu(s,s.FRAGMENT_SHADER,b);s.attachShader(M,F),s.attachShader(M,C),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(E){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(M).trim(),X=s.getShaderInfoLog(F).trim(),J=s.getShaderInfoLog(C).trim();let et=!0,H=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,F,C);else{const Q=su(s,F,"vertex"),z=su(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+Q+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||J==="")&&(H=!1);H&&(E.diagnostics={runnable:et,programLog:W,vertexShader:{log:X,prefix:p},fragmentShader:{log:J,prefix:d}})}s.deleteShader(F),s.deleteShader(C),O=new Pr(s,M),st=rx(s,M)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let st;this.getAttributes=function(){return st===void 0&&R(this),st};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(M,$v)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zv++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=C,this}let gx=0;class vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new xx(t),e.set(t,i)),i}}class xx{constructor(t){this.id=gx++,this.code=t,this.usedTimes=0}}function Mx(n,t,e,i,s,r,o){const a=new Pl,l=new vx,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,m=s.vertexTextures;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function d(x,E,W,X,J){const et=X.fog,H=J.geometry,Q=x.isMeshStandardMaterial?X.environment:null,z=(x.isMeshStandardMaterial?e:t).get(x.envMap||Q),pt=z&&z.mapping===eo?z.image.height:null,gt=M[x.type];x.precision!==null&&(v=s.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const vt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=vt!==void 0?vt.length:0;let Et=0;H.morphAttributes.position!==void 0&&(Et=1),H.morphAttributes.normal!==void 0&&(Et=2),H.morphAttributes.color!==void 0&&(Et=3);let Y,nt,dt,ft;if(gt){const Ie=fn[gt];Y=Ie.vertexShader,nt=Ie.fragmentShader}else Y=x.vertexShader,nt=x.fragmentShader,l.update(x),dt=l.getVertexShaderID(x),ft=l.getFragmentShaderID(x);const bt=n.getRenderTarget(),Lt=J.isInstancedMesh===!0,Rt=J.isBatchedMesh===!0,Yt=!!x.map,A=!!x.matcap,g=!!z,j=!!x.aoMap,$=!!x.lightMap,K=!!x.bumpMap,k=!!x.normalMap,ot=!!x.displacementMap,tt=!!x.emissiveMap,S=!!x.metalnessMap,_=!!x.roughnessMap,P=x.anisotropy>0,D=x.clearcoat>0,G=x.dispersion>0,B=x.iridescence>0,ct=x.sheen>0,at=x.transmission>0,lt=P&&!!x.anisotropyMap,Ot=D&&!!x.clearcoatMap,rt=D&&!!x.clearcoatNormalMap,_t=D&&!!x.clearcoatRoughnessMap,Ct=B&&!!x.iridescenceMap,Ut=B&&!!x.iridescenceThicknessMap,Tt=ct&&!!x.sheenColorMap,Nt=ct&&!!x.sheenRoughnessMap,It=!!x.specularMap,Qt=!!x.specularColorMap,L=!!x.specularIntensityMap,St=at&&!!x.transmissionMap,Z=at&&!!x.thicknessMap,it=!!x.gradientMap,xt=!!x.alphaMap,yt=x.alphaTest>0,Xt=!!x.alphaHash,fe=!!x.extensions;let De=Jn;x.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(De=n.toneMapping);const qt={shaderID:gt,shaderType:x.type,shaderName:x.name,vertexShader:Y,fragmentShader:nt,defines:x.defines,customVertexShaderID:dt,customFragmentShaderID:ft,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:Rt,batchingColor:Rt&&J._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&J.instanceColor!==null,instancingMorph:Lt&&J.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:bt===null?n.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:ii,alphaToCoverage:!!x.alphaToCoverage,map:Yt,matcap:A,envMap:g,envMapMode:g&&z.mapping,envMapCubeUVHeight:pt,aoMap:j,lightMap:$,bumpMap:K,normalMap:k,displacementMap:m&&ot,emissiveMap:tt,normalMapObjectSpace:k&&x.normalMapType===Am,normalMapTangentSpace:k&&x.normalMapType===$h,metalnessMap:S,roughnessMap:_,anisotropy:P,anisotropyMap:lt,clearcoat:D,clearcoatMap:Ot,clearcoatNormalMap:rt,clearcoatRoughnessMap:_t,dispersion:G,iridescence:B,iridescenceMap:Ct,iridescenceThicknessMap:Ut,sheen:ct,sheenColorMap:Tt,sheenRoughnessMap:Nt,specularMap:It,specularColorMap:Qt,specularIntensityMap:L,transmission:at,transmissionMap:St,thicknessMap:Z,gradientMap:it,opaque:x.transparent===!1&&x.blending===Zi&&x.alphaToCoverage===!1,alphaMap:xt,alphaTest:yt,alphaHash:Xt,combine:x.combine,mapUv:Yt&&p(x.map.channel),aoMapUv:j&&p(x.aoMap.channel),lightMapUv:$&&p(x.lightMap.channel),bumpMapUv:K&&p(x.bumpMap.channel),normalMapUv:k&&p(x.normalMap.channel),displacementMapUv:ot&&p(x.displacementMap.channel),emissiveMapUv:tt&&p(x.emissiveMap.channel),metalnessMapUv:S&&p(x.metalnessMap.channel),roughnessMapUv:_&&p(x.roughnessMap.channel),anisotropyMapUv:lt&&p(x.anisotropyMap.channel),clearcoatMapUv:Ot&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&p(x.sheenRoughnessMap.channel),specularMapUv:It&&p(x.specularMap.channel),specularColorMapUv:Qt&&p(x.specularColorMap.channel),specularIntensityMapUv:L&&p(x.specularIntensityMap.channel),transmissionMapUv:St&&p(x.transmissionMap.channel),thicknessMapUv:Z&&p(x.thicknessMap.channel),alphaMapUv:xt&&p(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(k||P),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!H.attributes.uv&&(Yt||xt),fog:!!et,useFog:x.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Et,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:Yt&&x.map.isVideoTexture===!0&&Jt.getTransfer(x.map.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Rn,flipSided:x.side===Be,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:fe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&x.extensions.multiDraw===!0||Rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function w(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)E.push(W),E.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(T(E,x),b(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function T(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function F(x){const E=M[x.type];let W;if(E){const X=fn[E];W=i_.clone(X.uniforms)}else W=x.uniforms;return W}function C(x,E){let W;for(let X=0,J=u.length;X<J;X++){const et=u[X];if(et.cacheKey===E){W=et,++W.usedTimes;break}}return W===void 0&&(W=new _x(n,E,x,r),u.push(W)),W}function R(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function O(x){l.remove(x)}function st(){l.dispose()}return{getParameters:d,getProgramCacheKey:w,getUniforms:F,acquireProgram:C,releaseProgram:R,releaseShaderCache:O,programs:u,dispose:st}}function Sx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function yx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function cu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function uu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,m,v,M,p){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:M,group:p},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=M,d.group=p),t++,d}function a(h,f,m,v,M,p){const d=o(h,f,m,v,M,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(h,f,m,v,M,p){const d=o(h,f,m,v,M,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||yx),i.length>1&&i.sort(f||cu),s.length>1&&s.sort(f||cu)}function u(){for(let h=t,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Ex(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new uu,n.set(i,[o])):s>=r.length?(o=new uu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Tx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Gt};break;case"SpotLight":e={position:new N,direction:new N,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function bx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Ax=0;function wx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Rx(n){const t=new Tx,e=bx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new oe,o=new oe;function a(c){let u=0,h=0,f=0;for(let st=0;st<9;st++)i.probe[st].set(0,0,0);let m=0,v=0,M=0,p=0,d=0,w=0,T=0,b=0,F=0,C=0,R=0;c.sort(wx);for(let st=0,x=c.length;st<x;st++){const E=c[st],W=E.color,X=E.intensity,J=E.distance,et=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=W.r*X,h+=W.g*X,f+=W.b*X;else if(E.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(E.sh.coefficients[H],X);R++}else if(E.isDirectionalLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Q=E.shadow,z=e.get(E);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=E.shadow.matrix,w++}i.directional[m]=H,m++}else if(E.isSpotLight){const H=t.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(W).multiplyScalar(X),H.distance=J,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,i.spot[M]=H;const Q=E.shadow;if(E.map&&(i.spotLightMap[F]=E.map,F++,Q.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[M]=Q.matrix,E.castShadow){const z=e.get(E);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.spotShadow[M]=z,i.spotShadowMap[M]=et,b++}M++}else if(E.isRectAreaLight){const H=t.get(E);H.color.copy(W).multiplyScalar(X),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=H,p++}else if(E.isPointLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const Q=E.shadow,z=e.get(E);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,z.shadowCameraNear=Q.camera.near,z.shadowCameraFar=Q.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=et,i.pointShadowMatrix[v]=E.shadow.matrix,T++}i.point[v]=H,v++}else if(E.isHemisphereLight){const H=t.get(E);H.skyColor.copy(E.color).multiplyScalar(X),H.groundColor.copy(E.groundColor).multiplyScalar(X),i.hemi[d]=H,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==m||O.pointLength!==v||O.spotLength!==M||O.rectAreaLength!==p||O.hemiLength!==d||O.numDirectionalShadows!==w||O.numPointShadows!==T||O.numSpotShadows!==b||O.numSpotMaps!==F||O.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=p,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+F-C,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,O.directionalLength=m,O.pointLength=v,O.spotLength=M,O.rectAreaLength=p,O.hemiLength=d,O.numDirectionalShadows=w,O.numPointShadows=T,O.numSpotShadows=b,O.numSpotMaps=F,O.numLightProbes=R,i.version=Ax++)}function l(c,u){let h=0,f=0,m=0,v=0,M=0;const p=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const T=c[d];if(T.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(T.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(T.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const b=i.hemi[M];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(p),M++}}}return{setup:a,setupView:l,state:i}}function hu(n){const t=new Rx(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Cx(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new hu(n),t.set(s,[a])):r>=o.length?(a=new hu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Px extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lx extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
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
}`;function Ux(n,t,e){let i=new Ll;const s=new zt,r=new zt,o=new ce,a=new Px({depthPacking:bm}),l=new Lx,c={},u=e.maxTextureSize,h={[ti]:Be,[Be]:ti,[Rn]:Rn},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Dx,fragmentShader:Ix}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new He;v.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Fe(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oh;let d=this.type;this.render=function(C,R,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const st=n.getRenderTarget(),x=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Zn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=d!==Tn&&this.type===Tn,J=d===Tn&&this.type!==Tn;for(let et=0,H=C.length;et<H;et++){const Q=C[et],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const pt=z.getFrameExtents();if(s.multiply(pt),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pt.x),s.x=r.x*pt.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pt.y),s.y=r.y*pt.y,z.mapSize.y=r.y)),z.map===null||X===!0||J===!0){const vt=this.type!==Tn?{minFilter:$e,magFilter:$e}:{};z.map!==null&&z.map.dispose(),z.map=new yi(s.x,s.y,vt),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const gt=z.getViewportCount();for(let vt=0;vt<gt;vt++){const ut=z.getViewport(vt);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),W.viewport(o),z.updateMatrices(Q,vt),i=z.getFrustum(),b(R,O,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===Tn&&w(z,O),z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(st,x,E)};function w(C,R){const O=t.update(M);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new yi(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,O,f,M,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,O,m,M,null)}function T(C,R,O,st){let x=null;const E=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)x=E;else if(x=O.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=x.uuid,X=R.uuid;let J=c[W];J===void 0&&(J={},c[W]=J);let et=J[X];et===void 0&&(et=x.clone(),J[X]=et,R.addEventListener("dispose",F)),x=et}if(x.visible=R.visible,x.wireframe=R.wireframe,st===Tn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:h[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,O.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=n.properties.get(x);W.light=O}return x}function b(C,R,O,st,x){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Tn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const X=t.update(C),J=C.material;if(Array.isArray(J)){const et=X.groups;for(let H=0,Q=et.length;H<Q;H++){const z=et[H],pt=J[z.materialIndex];if(pt&&pt.visible){const gt=T(C,pt,st,x);C.onBeforeShadow(n,C,R,O,X,gt,z),n.renderBufferDirect(O,null,X,gt,C,z),C.onAfterShadow(n,C,R,O,X,gt,z)}}}else if(J.visible){const et=T(C,J,st,x);C.onBeforeShadow(n,C,R,O,X,et,null),n.renderBufferDirect(O,null,X,et,C,null),C.onAfterShadow(n,C,R,O,X,et,null)}}const W=C.children;for(let X=0,J=W.length;X<J;X++)b(W[X],R,O,st,x)}function F(C){C.target.removeEventListener("dispose",F);for(const O in c){const st=c[O],x=C.target.uuid;x in st&&(st[x].dispose(),delete st[x])}}}const Nx={[ma]:_a,[ga]:Ma,[va]:Sa,[ns]:xa,[_a]:ma,[Ma]:ga,[Sa]:va,[xa]:ns};function Ox(n){function t(){let L=!1;const St=new ce;let Z=null;const it=new ce(0,0,0,0);return{setMask:function(xt){Z!==xt&&!L&&(n.colorMask(xt,xt,xt,xt),Z=xt)},setLocked:function(xt){L=xt},setClear:function(xt,yt,Xt,fe,De){De===!0&&(xt*=fe,yt*=fe,Xt*=fe),St.set(xt,yt,Xt,fe),it.equals(St)===!1&&(n.clearColor(xt,yt,Xt,fe),it.copy(St))},reset:function(){L=!1,Z=null,it.set(-1,0,0,0)}}}function e(){let L=!1,St=!1,Z=null,it=null,xt=null;return{setReversed:function(yt){St=yt},setTest:function(yt){yt?dt(n.DEPTH_TEST):ft(n.DEPTH_TEST)},setMask:function(yt){Z!==yt&&!L&&(n.depthMask(yt),Z=yt)},setFunc:function(yt){if(St&&(yt=Nx[yt]),it!==yt){switch(yt){case ma:n.depthFunc(n.NEVER);break;case _a:n.depthFunc(n.ALWAYS);break;case ga:n.depthFunc(n.LESS);break;case ns:n.depthFunc(n.LEQUAL);break;case va:n.depthFunc(n.EQUAL);break;case xa:n.depthFunc(n.GEQUAL);break;case Ma:n.depthFunc(n.GREATER);break;case Sa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}it=yt}},setLocked:function(yt){L=yt},setClear:function(yt){xt!==yt&&(n.clearDepth(yt),xt=yt)},reset:function(){L=!1,Z=null,it=null,xt=null}}}function i(){let L=!1,St=null,Z=null,it=null,xt=null,yt=null,Xt=null,fe=null,De=null;return{setTest:function(qt){L||(qt?dt(n.STENCIL_TEST):ft(n.STENCIL_TEST))},setMask:function(qt){St!==qt&&!L&&(n.stencilMask(qt),St=qt)},setFunc:function(qt,Ie,gn){(Z!==qt||it!==Ie||xt!==gn)&&(n.stencilFunc(qt,Ie,gn),Z=qt,it=Ie,xt=gn)},setOp:function(qt,Ie,gn){(yt!==qt||Xt!==Ie||fe!==gn)&&(n.stencilOp(qt,Ie,gn),yt=qt,Xt=Ie,fe=gn)},setLocked:function(qt){L=qt},setClear:function(qt){De!==qt&&(n.clearStencil(qt),De=qt)},reset:function(){L=!1,St=null,Z=null,it=null,xt=null,yt=null,Xt=null,fe=null,De=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],m=null,v=!1,M=null,p=null,d=null,w=null,T=null,b=null,F=null,C=new Gt(0,0,0),R=0,O=!1,st=null,x=null,E=null,W=null,X=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,H=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),et=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),et=H>=2);let z=null,pt={};const gt=n.getParameter(n.SCISSOR_BOX),vt=n.getParameter(n.VIEWPORT),ut=new ce().fromArray(gt),Et=new ce().fromArray(vt);function Y(L,St,Z,it){const xt=new Uint8Array(4),yt=n.createTexture();n.bindTexture(L,yt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<Z;Xt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(St,0,n.RGBA,1,1,it,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(St+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return yt}const nt={};nt[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),nt[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),nt[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),dt(n.DEPTH_TEST),r.setFunc(ns),$(!1),K(Mc),dt(n.CULL_FACE),g(Zn);function dt(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function ft(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function bt(L,St){return u[L]!==St?(n.bindFramebuffer(L,St),u[L]=St,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=St),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=St),!0):!1}function Lt(L,St){let Z=f,it=!1;if(L){Z=h.get(St),Z===void 0&&(Z=[],h.set(St,Z));const xt=L.textures;if(Z.length!==xt.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,Xt=xt.length;yt<Xt;yt++)Z[yt]=n.COLOR_ATTACHMENT0+yt;Z.length=xt.length,it=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,it=!0);it&&n.drawBuffers(Z)}function Rt(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const Yt={[mi]:n.FUNC_ADD,[Zp]:n.FUNC_SUBTRACT,[Jp]:n.FUNC_REVERSE_SUBTRACT};Yt[Qp]=n.MIN,Yt[tm]=n.MAX;const A={[em]:n.ZERO,[nm]:n.ONE,[im]:n.SRC_COLOR,[da]:n.SRC_ALPHA,[cm]:n.SRC_ALPHA_SATURATE,[am]:n.DST_COLOR,[rm]:n.DST_ALPHA,[sm]:n.ONE_MINUS_SRC_COLOR,[pa]:n.ONE_MINUS_SRC_ALPHA,[lm]:n.ONE_MINUS_DST_COLOR,[om]:n.ONE_MINUS_DST_ALPHA,[um]:n.CONSTANT_COLOR,[hm]:n.ONE_MINUS_CONSTANT_COLOR,[fm]:n.CONSTANT_ALPHA,[dm]:n.ONE_MINUS_CONSTANT_ALPHA};function g(L,St,Z,it,xt,yt,Xt,fe,De,qt){if(L===Zn){v===!0&&(ft(n.BLEND),v=!1);return}if(v===!1&&(dt(n.BLEND),v=!0),L!==$p){if(L!==M||qt!==O){if((p!==mi||T!==mi)&&(n.blendEquation(n.FUNC_ADD),p=mi,T=mi),qt)switch(L){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fr:n.blendFunc(n.ONE,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}d=null,w=null,b=null,F=null,C.set(0,0,0),R=0,M=L,O=qt}return}xt=xt||St,yt=yt||Z,Xt=Xt||it,(St!==p||xt!==T)&&(n.blendEquationSeparate(Yt[St],Yt[xt]),p=St,T=xt),(Z!==d||it!==w||yt!==b||Xt!==F)&&(n.blendFuncSeparate(A[Z],A[it],A[yt],A[Xt]),d=Z,w=it,b=yt,F=Xt),(fe.equals(C)===!1||De!==R)&&(n.blendColor(fe.r,fe.g,fe.b,De),C.copy(fe),R=De),M=L,O=!1}function j(L,St){L.side===Rn?ft(n.CULL_FACE):dt(n.CULL_FACE);let Z=L.side===Be;St&&(Z=!Z),$(Z),L.blending===Zi&&L.transparent===!1?g(Zn):g(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const it=L.stencilWrite;o.setTest(it),it&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ot(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(L){st!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),st=L)}function K(L){L!==jp?(dt(n.CULL_FACE),L!==x&&(L===Mc?n.cullFace(n.BACK):L===Kp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ft(n.CULL_FACE),x=L}function k(L){L!==E&&(et&&n.lineWidth(L),E=L)}function ot(L,St,Z){L?(dt(n.POLYGON_OFFSET_FILL),(W!==St||X!==Z)&&(n.polygonOffset(St,Z),W=St,X=Z)):ft(n.POLYGON_OFFSET_FILL)}function tt(L){L?dt(n.SCISSOR_TEST):ft(n.SCISSOR_TEST)}function S(L){L===void 0&&(L=n.TEXTURE0+J-1),z!==L&&(n.activeTexture(L),z=L)}function _(L,St,Z){Z===void 0&&(z===null?Z=n.TEXTURE0+J-1:Z=z);let it=pt[Z];it===void 0&&(it={type:void 0,texture:void 0},pt[Z]=it),(it.type!==L||it.texture!==St)&&(z!==Z&&(n.activeTexture(Z),z=Z),n.bindTexture(L,St||nt[L]),it.type=L,it.texture=St)}function P(){const L=pt[z];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function D(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(L){ut.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ut.copy(L))}function Tt(L){Et.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Et.copy(L))}function Nt(L,St){let Z=l.get(St);Z===void 0&&(Z=new WeakMap,l.set(St,Z));let it=Z.get(L);it===void 0&&(it=n.getUniformBlockIndex(St,L.name),Z.set(L,it))}function It(L,St){const it=l.get(St).get(L);a.get(St)!==it&&(n.uniformBlockBinding(St,it,L.__bindingPointIndex),a.set(St,it))}function Qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},z=null,pt={},u={},h=new WeakMap,f=[],m=null,v=!1,M=null,p=null,d=null,w=null,T=null,b=null,F=null,C=new Gt(0,0,0),R=0,O=!1,st=null,x=null,E=null,W=null,X=null,ut.set(0,0,n.canvas.width,n.canvas.height),Et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:dt,disable:ft,bindFramebuffer:bt,drawBuffers:Lt,useProgram:Rt,setBlending:g,setMaterial:j,setFlipSided:$,setCullFace:K,setLineWidth:k,setPolygonOffset:ot,setScissorTest:tt,activeTexture:S,bindTexture:_,unbindTexture:P,compressedTexImage2D:D,compressedTexImage3D:G,texImage2D:_t,texImage3D:Ct,updateUBOMapping:Nt,uniformBlockBinding:It,texStorage2D:Ot,texStorage3D:rt,texSubImage2D:B,texSubImage3D:ct,compressedTexSubImage2D:at,compressedTexSubImage3D:lt,scissor:Ut,viewport:Tt,reset:Qt}}function fu(n,t,e,i){const s=Fx(i);switch(e){case kh:return n*t;case Xh:return n*t;case Yh:return n*t*2;case qh:return n*t/s.components*s.byteLength;case Al:return n*t/s.components*s.byteLength;case jh:return n*t*2/s.components*s.byteLength;case wl:return n*t*2/s.components*s.byteLength;case Wh:return n*t*3/s.components*s.byteLength;case sn:return n*t*4/s.components*s.byteLength;case Rl:return n*t*4/s.components*s.byteLength;case Er:case Tr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case br:case Ar:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wa:case Ca:return Math.max(n,16)*Math.max(t,8)/4;case Aa:case Ra:return Math.max(n,8)*Math.max(t,8)/2;case Pa:case La:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case za:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ka:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case wr:case qa:case ja:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Kh:case Ka:return Math.ceil(n/4)*Math.ceil(t/4)*8;case $a:case Za:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fx(n){switch(n){case In:case Hh:return{byteLength:1,components:1};case Us:case Gh:case Fs:return{byteLength:2,components:1};case Tl:case bl:return{byteLength:2,components:4};case Si:case El:case Cn:return{byteLength:4,components:1};case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Bx(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,_){return m?new OffscreenCanvas(S,_):kr("canvas")}function M(S,_,P){let D=1;const G=tt(S);if((G.width>P||G.height>P)&&(D=P/Math.max(G.width,G.height)),D<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const B=Math.floor(D*G.width),ct=Math.floor(D*G.height);h===void 0&&(h=v(B,ct));const at=_?v(B,ct):h;return at.width=B,at.height=ct,at.getContext("2d").drawImage(S,0,0,B,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+B+"x"+ct+")."),at}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),S;return S}function p(S){return S.generateMipmaps&&S.minFilter!==$e&&S.minFilter!==en}function d(S){n.generateMipmap(S)}function w(S,_,P,D,G=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let B=_;if(_===n.RED&&(P===n.FLOAT&&(B=n.R32F),P===n.HALF_FLOAT&&(B=n.R16F),P===n.UNSIGNED_BYTE&&(B=n.R8)),_===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(B=n.R8UI),P===n.UNSIGNED_SHORT&&(B=n.R16UI),P===n.UNSIGNED_INT&&(B=n.R32UI),P===n.BYTE&&(B=n.R8I),P===n.SHORT&&(B=n.R16I),P===n.INT&&(B=n.R32I)),_===n.RG&&(P===n.FLOAT&&(B=n.RG32F),P===n.HALF_FLOAT&&(B=n.RG16F),P===n.UNSIGNED_BYTE&&(B=n.RG8)),_===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(B=n.RG8UI),P===n.UNSIGNED_SHORT&&(B=n.RG16UI),P===n.UNSIGNED_INT&&(B=n.RG32UI),P===n.BYTE&&(B=n.RG8I),P===n.SHORT&&(B=n.RG16I),P===n.INT&&(B=n.RG32I)),_===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(B=n.RGB8UI),P===n.UNSIGNED_SHORT&&(B=n.RGB16UI),P===n.UNSIGNED_INT&&(B=n.RGB32UI),P===n.BYTE&&(B=n.RGB8I),P===n.SHORT&&(B=n.RGB16I),P===n.INT&&(B=n.RGB32I)),_===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(B=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(B=n.RGBA16UI),P===n.UNSIGNED_INT&&(B=n.RGBA32UI),P===n.BYTE&&(B=n.RGBA8I),P===n.SHORT&&(B=n.RGBA16I),P===n.INT&&(B=n.RGBA32I)),_===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(B=n.RGB9_E5),_===n.RGBA){const ct=G?Br:Jt.getTransfer(D);P===n.FLOAT&&(B=n.RGBA32F),P===n.HALF_FLOAT&&(B=n.RGBA16F),P===n.UNSIGNED_BYTE&&(B=ct===re?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(B=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(B=n.RGB5_A1)}return(B===n.R16F||B===n.R32F||B===n.RG16F||B===n.RG32F||B===n.RGBA16F||B===n.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function T(S,_){let P;return S?_===null||_===Si||_===rs?P=n.DEPTH24_STENCIL8:_===Cn?P=n.DEPTH32F_STENCIL8:_===Us&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Si||_===rs?P=n.DEPTH_COMPONENT24:_===Cn?P=n.DEPTH_COMPONENT32F:_===Us&&(P=n.DEPTH_COMPONENT16),P}function b(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==$e&&S.minFilter!==en?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function F(S){const _=S.target;_.removeEventListener("dispose",F),R(_),_.isVideoTexture&&u.delete(_)}function C(S){const _=S.target;_.removeEventListener("dispose",C),st(_)}function R(S){const _=i.get(S);if(_.__webglInit===void 0)return;const P=S.source,D=f.get(P);if(D){const G=D[_.__cacheKey];G.usedTimes--,G.usedTimes===0&&O(S),Object.keys(D).length===0&&f.delete(P)}i.remove(S)}function O(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const P=S.source,D=f.get(P);delete D[_.__cacheKey],o.memory.textures--}function st(S){const _=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(_.__webglFramebuffer[D]))for(let G=0;G<_.__webglFramebuffer[D].length;G++)n.deleteFramebuffer(_.__webglFramebuffer[D][G]);else n.deleteFramebuffer(_.__webglFramebuffer[D]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[D])}else{if(Array.isArray(_.__webglFramebuffer))for(let D=0;D<_.__webglFramebuffer.length;D++)n.deleteFramebuffer(_.__webglFramebuffer[D]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let D=0;D<_.__webglColorRenderbuffer.length;D++)_.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[D]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const P=S.textures;for(let D=0,G=P.length;D<G;D++){const B=i.get(P[D]);B.__webglTexture&&(n.deleteTexture(B.__webglTexture),o.memory.textures--),i.remove(P[D])}i.remove(S)}let x=0;function E(){x=0}function W(){const S=x;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),x+=1,S}function X(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function J(S,_){const P=i.get(S);if(S.isVideoTexture&&k(S),S.isRenderTargetTexture===!1&&S.version>0&&P.__version!==S.version){const D=S.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(P,S,_);return}}e.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+_)}function et(S,_){const P=i.get(S);if(S.version>0&&P.__version!==S.version){Et(P,S,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+_)}function H(S,_){const P=i.get(S);if(S.version>0&&P.__version!==S.version){Et(P,S,_);return}e.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+_)}function Q(S,_){const P=i.get(S);if(S.version>0&&P.__version!==S.version){Y(P,S,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+_)}const z={[Ta]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[ba]:n.MIRRORED_REPEAT},pt={[$e]:n.NEAREST,[Em]:n.NEAREST_MIPMAP_NEAREST,[js]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[yo]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},gt={[wm]:n.NEVER,[Im]:n.ALWAYS,[Rm]:n.LESS,[Zh]:n.LEQUAL,[Cm]:n.EQUAL,[Dm]:n.GEQUAL,[Pm]:n.GREATER,[Lm]:n.NOTEQUAL};function vt(S,_){if(_.type===Cn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===en||_.magFilter===yo||_.magFilter===js||_.magFilter===vi||_.minFilter===en||_.minFilter===yo||_.minFilter===js||_.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,z[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,z[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,z[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,pt[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,pt[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,gt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$e||_.minFilter!==js&&_.minFilter!==vi||_.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ut(S,_){let P=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",F));const D=_.source;let G=f.get(D);G===void 0&&(G={},f.set(D,G));const B=X(_);if(B!==S.__cacheKey){G[B]===void 0&&(G[B]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),G[B].usedTimes++;const ct=G[S.__cacheKey];ct!==void 0&&(G[S.__cacheKey].usedTimes--,ct.usedTimes===0&&O(_)),S.__cacheKey=B,S.__webglTexture=G[B].texture}return P}function Et(S,_,P){let D=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(D=n.TEXTURE_3D);const G=ut(S,_),B=_.source;e.bindTexture(D,S.__webglTexture,n.TEXTURE0+P);const ct=i.get(B);if(B.version!==ct.__version||G===!0){e.activeTexture(n.TEXTURE0+P);const at=Jt.getPrimaries(Jt.workingColorSpace),lt=_.colorSpace===jn?null:Jt.getPrimaries(_.colorSpace),Ot=_.colorSpace===jn||at===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let rt=M(_.image,!1,s.maxTextureSize);rt=ot(_,rt);const _t=r.convert(_.format,_.colorSpace),Ct=r.convert(_.type);let Ut=w(_.internalFormat,_t,Ct,_.colorSpace,_.isVideoTexture);vt(D,_);let Tt;const Nt=_.mipmaps,It=_.isVideoTexture!==!0,Qt=ct.__version===void 0||G===!0,L=B.dataReady,St=b(_,rt);if(_.isDepthTexture)Ut=T(_.format===os,_.type),Qt&&(It?e.texStorage2D(n.TEXTURE_2D,1,Ut,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Ut,rt.width,rt.height,0,_t,Ct,null));else if(_.isDataTexture)if(Nt.length>0){It&&Qt&&e.texStorage2D(n.TEXTURE_2D,St,Ut,Nt[0].width,Nt[0].height);for(let Z=0,it=Nt.length;Z<it;Z++)Tt=Nt[Z],It?L&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Tt.width,Tt.height,_t,Ct,Tt.data):e.texImage2D(n.TEXTURE_2D,Z,Ut,Tt.width,Tt.height,0,_t,Ct,Tt.data);_.generateMipmaps=!1}else It?(Qt&&e.texStorage2D(n.TEXTURE_2D,St,Ut,rt.width,rt.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,_t,Ct,rt.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,rt.width,rt.height,0,_t,Ct,rt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){It&&Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Ut,Nt[0].width,Nt[0].height,rt.depth);for(let Z=0,it=Nt.length;Z<it;Z++)if(Tt=Nt[Z],_.format!==sn)if(_t!==null)if(It){if(L)if(_.layerUpdates.size>0){const xt=fu(Tt.width,Tt.height,_.format,_.type);for(const yt of _.layerUpdates){const Xt=Tt.data.subarray(yt*xt/Tt.data.BYTES_PER_ELEMENT,(yt+1)*xt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,yt,Tt.width,Tt.height,1,_t,Xt,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Tt.width,Tt.height,rt.depth,_t,Tt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Ut,Tt.width,Tt.height,rt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Tt.width,Tt.height,rt.depth,_t,Ct,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,Ut,Tt.width,Tt.height,rt.depth,0,_t,Ct,Tt.data)}else{It&&Qt&&e.texStorage2D(n.TEXTURE_2D,St,Ut,Nt[0].width,Nt[0].height);for(let Z=0,it=Nt.length;Z<it;Z++)Tt=Nt[Z],_.format!==sn?_t!==null?It?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Tt.width,Tt.height,_t,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,Ut,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?L&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Tt.width,Tt.height,_t,Ct,Tt.data):e.texImage2D(n.TEXTURE_2D,Z,Ut,Tt.width,Tt.height,0,_t,Ct,Tt.data)}else if(_.isDataArrayTexture)if(It){if(Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Ut,rt.width,rt.height,rt.depth),L)if(_.layerUpdates.size>0){const Z=fu(rt.width,rt.height,_.format,_.type);for(const it of _.layerUpdates){const xt=rt.data.subarray(it*Z/rt.data.BYTES_PER_ELEMENT,(it+1)*Z/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,it,rt.width,rt.height,1,_t,Ct,xt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,_t,Ct,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,rt.width,rt.height,rt.depth,0,_t,Ct,rt.data);else if(_.isData3DTexture)It?(Qt&&e.texStorage3D(n.TEXTURE_3D,St,Ut,rt.width,rt.height,rt.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,_t,Ct,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,rt.width,rt.height,rt.depth,0,_t,Ct,rt.data);else if(_.isFramebufferTexture){if(Qt)if(It)e.texStorage2D(n.TEXTURE_2D,St,Ut,rt.width,rt.height);else{let Z=rt.width,it=rt.height;for(let xt=0;xt<St;xt++)e.texImage2D(n.TEXTURE_2D,xt,Ut,Z,it,0,_t,Ct,null),Z>>=1,it>>=1}}else if(Nt.length>0){if(It&&Qt){const Z=tt(Nt[0]);e.texStorage2D(n.TEXTURE_2D,St,Ut,Z.width,Z.height)}for(let Z=0,it=Nt.length;Z<it;Z++)Tt=Nt[Z],It?L&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,_t,Ct,Tt):e.texImage2D(n.TEXTURE_2D,Z,Ut,_t,Ct,Tt);_.generateMipmaps=!1}else if(It){if(Qt){const Z=tt(rt);e.texStorage2D(n.TEXTURE_2D,St,Ut,Z.width,Z.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Ct,rt)}else e.texImage2D(n.TEXTURE_2D,0,Ut,_t,Ct,rt);p(_)&&d(D),ct.__version=B.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Y(S,_,P){if(_.image.length!==6)return;const D=ut(S,_),G=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+P);const B=i.get(G);if(G.version!==B.__version||D===!0){e.activeTexture(n.TEXTURE0+P);const ct=Jt.getPrimaries(Jt.workingColorSpace),at=_.colorSpace===jn?null:Jt.getPrimaries(_.colorSpace),lt=_.colorSpace===jn||ct===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Ot=_.isCompressedTexture||_.image[0].isCompressedTexture,rt=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let it=0;it<6;it++)!Ot&&!rt?_t[it]=M(_.image[it],!0,s.maxCubemapSize):_t[it]=rt?_.image[it].image:_.image[it],_t[it]=ot(_,_t[it]);const Ct=_t[0],Ut=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type),Nt=w(_.internalFormat,Ut,Tt,_.colorSpace),It=_.isVideoTexture!==!0,Qt=B.__version===void 0||D===!0,L=G.dataReady;let St=b(_,Ct);vt(n.TEXTURE_CUBE_MAP,_);let Z;if(Ot){It&&Qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,Nt,Ct.width,Ct.height);for(let it=0;it<6;it++){Z=_t[it].mipmaps;for(let xt=0;xt<Z.length;xt++){const yt=Z[xt];_.format!==sn?Ut!==null?It?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,0,0,yt.width,yt.height,Ut,yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,Nt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,0,0,yt.width,yt.height,Ut,Tt,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,Nt,yt.width,yt.height,0,Ut,Tt,yt.data)}}}else{if(Z=_.mipmaps,It&&Qt){Z.length>0&&St++;const it=tt(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,Nt,it.width,it.height)}for(let it=0;it<6;it++)if(rt){It?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,_t[it].width,_t[it].height,Ut,Tt,_t[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Nt,_t[it].width,_t[it].height,0,Ut,Tt,_t[it].data);for(let xt=0;xt<Z.length;xt++){const Xt=Z[xt].image[it].image;It?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,0,0,Xt.width,Xt.height,Ut,Tt,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,Nt,Xt.width,Xt.height,0,Ut,Tt,Xt.data)}}else{It?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ut,Tt,_t[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Nt,Ut,Tt,_t[it]);for(let xt=0;xt<Z.length;xt++){const yt=Z[xt];It?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,0,0,Ut,Tt,yt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,Nt,Ut,Tt,yt.image[it])}}}p(_)&&d(n.TEXTURE_CUBE_MAP),B.__version=G.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function nt(S,_,P,D,G,B){const ct=r.convert(P.format,P.colorSpace),at=r.convert(P.type),lt=w(P.internalFormat,ct,at,P.colorSpace);if(!i.get(_).__hasExternalTextures){const rt=Math.max(1,_.width>>B),_t=Math.max(1,_.height>>B);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?e.texImage3D(G,B,lt,rt,_t,_.depth,0,ct,at,null):e.texImage2D(G,B,lt,rt,_t,0,ct,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,G,i.get(P).__webglTexture,0,$(_)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,G,i.get(P).__webglTexture,B),e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(S,_,P){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const D=_.depthTexture,G=D&&D.isDepthTexture?D.type:null,B=T(_.stencilBuffer,G),ct=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=$(_);K(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,B,_.width,_.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,B,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,B,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,S)}else{const D=_.textures;for(let G=0;G<D.length;G++){const B=D[G],ct=r.convert(B.format,B.colorSpace),at=r.convert(B.type),lt=w(B.internalFormat,ct,at,B.colorSpace),Ot=$(_);P&&K(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,lt,_.width,_.height):K(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot,lt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,lt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const D=i.get(_.depthTexture).__webglTexture,G=$(_);if(_.depthTexture.format===Ji)K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0);else if(_.depthTexture.format===os)K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function bt(S){const _=i.get(S),P=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const D=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),D){const G=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,D.removeEventListener("dispose",G)};D.addEventListener("dispose",G),_.__depthDisposeCallback=G}_.__boundDepthTexture=D}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");ft(_.__webglFramebuffer,S)}else if(P){_.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[D]),_.__webglDepthbuffer[D]===void 0)_.__webglDepthbuffer[D]=n.createRenderbuffer(),dt(_.__webglDepthbuffer[D],S,!1);else{const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=_.__webglDepthbuffer[D];n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,B)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),dt(_.__webglDepthbuffer,S,!1);else{const D=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,D,n.RENDERBUFFER,G)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(S,_,P){const D=i.get(S);_!==void 0&&nt(D.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&bt(S)}function Rt(S){const _=S.texture,P=i.get(S),D=i.get(_);S.addEventListener("dispose",C);const G=S.textures,B=S.isWebGLCubeRenderTarget===!0,ct=G.length>1;if(ct||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=_.version,o.memory.textures++),B){P.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[at]=[];for(let lt=0;lt<_.mipmaps.length;lt++)P.__webglFramebuffer[at][lt]=n.createFramebuffer()}else P.__webglFramebuffer[at]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)P.__webglFramebuffer[at]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(ct)for(let at=0,lt=G.length;at<lt;at++){const Ot=i.get(G[at]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&K(S)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let at=0;at<G.length;at++){const lt=G[at];P.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[at]);const Ot=r.convert(lt.format,lt.colorSpace),rt=r.convert(lt.type),_t=w(lt.internalFormat,Ot,rt,lt.colorSpace,S.isXRRenderTarget===!0),Ct=$(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,_t,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,P.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(P.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),vt(n.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let lt=0;lt<_.mipmaps.length;lt++)nt(P.__webglFramebuffer[at][lt],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,lt);else nt(P.__webglFramebuffer[at],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(_)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let at=0,lt=G.length;at<lt;at++){const Ot=G[at],rt=i.get(Ot);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),vt(n.TEXTURE_2D,Ot),nt(P.__webglFramebuffer,S,Ot,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),p(Ot)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(at=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,D.__webglTexture),vt(at,_),_.mipmaps&&_.mipmaps.length>0)for(let lt=0;lt<_.mipmaps.length;lt++)nt(P.__webglFramebuffer[lt],S,_,n.COLOR_ATTACHMENT0,at,lt);else nt(P.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,at,0);p(_)&&d(at),e.unbindTexture()}S.depthBuffer&&bt(S)}function Yt(S){const _=S.textures;for(let P=0,D=_.length;P<D;P++){const G=_[P];if(p(G)){const B=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ct=i.get(G).__webglTexture;e.bindTexture(B,ct),d(B),e.unbindTexture()}}}const A=[],g=[];function j(S){if(S.samples>0){if(K(S)===!1){const _=S.textures,P=S.width,D=S.height;let G=n.COLOR_BUFFER_BIT;const B=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(S),at=_.length>1;if(at)for(let lt=0;lt<_.length;lt++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let lt=0;lt<_.length;lt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[lt]);const Ot=i.get(_[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ot,0)}n.blitFramebuffer(0,0,P,D,0,0,P,D,G,n.NEAREST),l===!0&&(A.length=0,g.length=0,A.push(n.COLOR_ATTACHMENT0+lt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(A.push(B),g.push(B),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,A))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let lt=0;lt<_.length;lt++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,ct.__webglColorRenderbuffer[lt]);const Ot=i.get(_[lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,Ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function $(S){return Math.min(s.maxSamples,S.samples)}function K(S){const _=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function k(S){const _=o.render.frame;u.get(S)!==_&&(u.set(S,_),S.update())}function ot(S,_){const P=S.colorSpace,D=S.format,G=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||P!==ii&&P!==jn&&(Jt.getTransfer(P)===re?(D!==sn||G!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),_}function tt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=E,this.setTexture2D=J,this.setTexture2DArray=et,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=Lt,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=K}function zx(n,t){function e(i,s=jn){let r;const o=Jt.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===Tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hh)return n.BYTE;if(i===Gh)return n.SHORT;if(i===Us)return n.UNSIGNED_SHORT;if(i===El)return n.INT;if(i===Si)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===Fs)return n.HALF_FLOAT;if(i===kh)return n.ALPHA;if(i===Wh)return n.RGB;if(i===sn)return n.RGBA;if(i===Xh)return n.LUMINANCE;if(i===Yh)return n.LUMINANCE_ALPHA;if(i===Ji)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===qh)return n.RED;if(i===Al)return n.RED_INTEGER;if(i===jh)return n.RG;if(i===wl)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===Er||i===Tr||i===br||i===Ar)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Aa||i===wa||i===Ra||i===Ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pa||i===La||i===Da)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pa||i===La)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Da)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ia||i===Ua||i===Na||i===Oa||i===Fa||i===Ba||i===za||i===Ha||i===Ga||i===Va||i===ka||i===Wa||i===Xa||i===Ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ia)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ua)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Na)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ba)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===za)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ha)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ga)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Va)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ka)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ya)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wr||i===qa||i===ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===wr)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kh||i===Ka||i===$a||i===Za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===wr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Hx extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ms extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gx={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,i),d=this._getHandJoint(c,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ms;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kx=`
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

}`;class Wx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Un({vertexShader:Vx,fragmentShader:kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new io(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xx extends Ti{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,v=null;const M=new Wx,p=e.getContextAttributes();let d=null,w=null;const T=[],b=[],F=new zt;let C=null;const R=new Ye;R.layers.enable(1),R.viewport=new ce;const O=new Ye;O.layers.enable(2),O.viewport=new ce;const st=[R,O],x=new Hx;x.layers.enable(1),x.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=T[Y];return nt===void 0&&(nt=new Zo,T[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=T[Y];return nt===void 0&&(nt=new Zo,T[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=T[Y];return nt===void 0&&(nt=new Zo,T[Y]=nt),nt.getHandSpace()};function X(Y){const nt=b.indexOf(Y.inputSource);if(nt===-1)return;const dt=T[nt];dt!==void 0&&(dt.update(Y.inputSource,Y.frame,c||o),dt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",et);for(let Y=0;Y<T.length;Y++){const nt=b[Y];nt!==null&&(b[Y]=null,T[Y].disconnect(nt))}E=null,W=null,M.reset(),t.setRenderTarget(d),m=null,f=null,h=null,s=null,w=null,Et.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",J),s.addEventListener("inputsourceschange",et),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const nt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new yi(m.framebufferWidth,m.framebufferHeight,{format:sn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let nt=null,dt=null,ft=null;p.depth&&(ft=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?os:Ji,dt=p.stencil?rs:Si);const bt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new yi(f.textureWidth,f.textureHeight,{format:sn,type:In,depthTexture:new uf(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Et.setContext(s),Et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function et(Y){for(let nt=0;nt<Y.removed.length;nt++){const dt=Y.removed[nt],ft=b.indexOf(dt);ft>=0&&(b[ft]=null,T[ft].disconnect(dt))}for(let nt=0;nt<Y.added.length;nt++){const dt=Y.added[nt];let ft=b.indexOf(dt);if(ft===-1){for(let Lt=0;Lt<T.length;Lt++)if(Lt>=b.length){b.push(dt),ft=Lt;break}else if(b[Lt]===null){b[Lt]=dt,ft=Lt;break}if(ft===-1)break}const bt=T[ft];bt&&bt.connect(dt)}}const H=new N,Q=new N;function z(Y,nt,dt){H.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(dt.matrixWorld);const ft=H.distanceTo(Q),bt=nt.projectionMatrix.elements,Lt=dt.projectionMatrix.elements,Rt=bt[14]/(bt[10]-1),Yt=bt[14]/(bt[10]+1),A=(bt[9]+1)/bt[5],g=(bt[9]-1)/bt[5],j=(bt[8]-1)/bt[0],$=(Lt[8]+1)/Lt[0],K=Rt*j,k=Rt*$,ot=ft/(-j+$),tt=ot*-j;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(tt),Y.translateZ(ot),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const S=Rt+ot,_=Yt+ot,P=K-tt,D=k+(ft-tt),G=A*Yt/_*S,B=g*Yt/_*S;Y.projectionMatrix.makePerspective(P,D,G,B,S,_),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function pt(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,dt=Y.far;M.texture!==null&&(M.depthNear>0&&(nt=M.depthNear),M.depthFar>0&&(dt=M.depthFar)),x.near=O.near=R.near=nt,x.far=O.far=R.far=dt,(E!==x.near||W!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,W=x.far);const ft=Y.parent,bt=x.cameras;pt(x,ft);for(let Lt=0;Lt<bt.length;Lt++)pt(bt[Lt],ft);bt.length===2?z(x,R,O):x.projectionMatrix.copy(R.projectionMatrix),gt(Y,x,ft)};function gt(Y,nt,dt){dt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(dt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Vr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let vt=null;function ut(Y,nt){if(u=nt.getViewerPose(c||o),v=nt,u!==null){const dt=u.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let ft=!1;dt.length!==x.cameras.length&&(x.cameras.length=0,ft=!0);for(let Lt=0;Lt<dt.length;Lt++){const Rt=dt[Lt];let Yt=null;if(m!==null)Yt=m.getViewport(Rt);else{const g=h.getViewSubImage(f,Rt);Yt=g.viewport,Lt===0&&(t.setRenderTargetTextures(w,g.colorTexture,f.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(w))}let A=st[Lt];A===void 0&&(A=new Ye,A.layers.enable(Lt),A.viewport=new ce,st[Lt]=A),A.matrix.fromArray(Rt.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Rt.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Lt===0&&(x.matrix.copy(A.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ft===!0&&x.cameras.push(A)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Lt=h.getDepthInformation(dt[0]);Lt&&Lt.isValid&&Lt.texture&&M.init(t,Lt,s.renderState)}}for(let dt=0;dt<T.length;dt++){const ft=b[dt],bt=T[dt];ft!==null&&bt!==void 0&&bt.update(ft,nt,c||o)}vt&&vt(Y,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),v=null}const Et=new lf;Et.setAnimationLoop(ut),this.setAnimationLoop=function(Y){vt=Y},this.dispose=function(){}}}const fi=new _n,Yx=new oe;function qx(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,rf(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,w,T,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),v(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),M(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,w,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Be&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Be&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=t.get(d),T=w.envMap,b=w.envMapRotation;T&&(p.envMap.value=T,fi.copy(b),fi.x*=-1,fi.y*=-1,fi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),p.envMapRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(fi)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,w,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=T*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Be&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){const w=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jx(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const b=T.program;i.uniformBlockBinding(w,b)}function c(w,T){let b=s[w.id];b===void 0&&(v(w),b=u(w),s[w.id]=b,w.addEventListener("dispose",p));const F=T.program;i.updateUBOMapping(w,F);const C=t.render.frame;r[w.id]!==C&&(f(w),r[w.id]=C)}function u(w){const T=h();w.__bindingPointIndex=T;const b=n.createBuffer(),F=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,F,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const T=s[w.id],b=w.uniforms,F=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let C=0,R=b.length;C<R;C++){const O=Array.isArray(b[C])?b[C]:[b[C]];for(let st=0,x=O.length;st<x;st++){const E=O[st];if(m(E,C,st,F)===!0){const W=E.__offset,X=Array.isArray(E.value)?E.value:[E.value];let J=0;for(let et=0;et<X.length;et++){const H=X[et],Q=M(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,W+J,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,J),J+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,T,b,F){const C=w.value,R=T+"_"+b;if(F[R]===void 0)return typeof C=="number"||typeof C=="boolean"?F[R]=C:F[R]=C.clone(),!0;{const O=F[R];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return F[R]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function v(w){const T=w.uniforms;let b=0;const F=16;for(let R=0,O=T.length;R<O;R++){const st=Array.isArray(T[R])?T[R]:[T[R]];for(let x=0,E=st.length;x<E;x++){const W=st[x],X=Array.isArray(W.value)?W.value:[W.value];for(let J=0,et=X.length;J<et;J++){const H=X[J],Q=M(H),z=b%F,pt=z%Q.boundary,gt=z+pt;b+=pt,gt!==0&&F-gt<Q.storage&&(b+=F-gt),W.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=Q.storage}}}const C=b%F;return C>0&&(b+=F-C),w.__size=b,w.__cache={},this}function M(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function p(w){const T=w.target;T.removeEventListener("dispose",p);const b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Kx{constructor(t={}){const{canvas:e=Om(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let M=null,p=null;const d=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Jn,this.toneMappingExposure=1;const T=this;let b=!1,F=0,C=0,R=null,O=-1,st=null;const x=new ce,E=new ce;let W=null;const X=new Gt(0);let J=0,et=e.width,H=e.height,Q=1,z=null,pt=null;const gt=new ce(0,0,et,H),vt=new ce(0,0,et,H);let ut=!1;const Et=new Ll;let Y=!1,nt=!1;const dt=new oe,ft=new oe,bt=new N,Lt=new ce,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function A(){return R===null?Q:1}let g=i;function j(y,I){return e.getContext(y,I)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yl}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),g===null){const I="webgl2";if(g=j(I,y),g===null)throw j(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let $,K,k,ot,tt,S,_,P,D,G,B,ct,at,lt,Ot,rt,_t,Ct,Ut,Tt,Nt,It,Qt,L;function St(){$=new tv(g),$.init(),It=new zx(g,$),K=new j0(g,$,t,It),k=new Ox(g),K.reverseDepthBuffer&&k.buffers.depth.setReversed(!0),ot=new iv(g),tt=new Sx,S=new Bx(g,$,k,tt,K,It,ot),_=new $0(T),P=new Q0(T),D=new u_(g),Qt=new Y0(g,D),G=new ev(g,D,ot,Qt),B=new rv(g,G,D,ot),Ut=new sv(g,K,S),rt=new K0(tt),ct=new Mx(T,_,P,$,K,Qt,rt),at=new qx(T,tt),lt=new Ex,Ot=new Cx($),Ct=new X0(T,_,P,k,B,f,l),_t=new Ux(T,B,K),L=new jx(g,ot,K,k),Tt=new q0(g,$,ot),Nt=new nv(g,$,ot),ot.programs=ct.programs,T.capabilities=K,T.extensions=$,T.properties=tt,T.renderLists=lt,T.shadowMap=_t,T.state=k,T.info=ot}St();const Z=new Xx(T,g);this.xr=Z,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const y=$.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=$.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(y){y!==void 0&&(Q=y,this.setSize(et,H,!1))},this.getSize=function(y){return y.set(et,H)},this.setSize=function(y,I,V=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=y,H=I,e.width=Math.floor(y*Q),e.height=Math.floor(I*Q),V===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(et*Q,H*Q).floor()},this.setDrawingBufferSize=function(y,I,V){et=y,H=I,Q=V,e.width=Math.floor(y*V),e.height=Math.floor(I*V),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(x)},this.getViewport=function(y){return y.copy(gt)},this.setViewport=function(y,I,V,q){y.isVector4?gt.set(y.x,y.y,y.z,y.w):gt.set(y,I,V,q),k.viewport(x.copy(gt).multiplyScalar(Q).round())},this.getScissor=function(y){return y.copy(vt)},this.setScissor=function(y,I,V,q){y.isVector4?vt.set(y.x,y.y,y.z,y.w):vt.set(y,I,V,q),k.scissor(E.copy(vt).multiplyScalar(Q).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(y){k.setScissorTest(ut=y)},this.setOpaqueSort=function(y){z=y},this.setTransparentSort=function(y){pt=y},this.getClearColor=function(y){return y.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(y=!0,I=!0,V=!0){let q=0;if(y){let U=!1;if(R!==null){const ht=R.texture.format;U=ht===Rl||ht===wl||ht===Al}if(U){const ht=R.texture.type,Mt=ht===In||ht===Si||ht===Us||ht===rs||ht===Tl||ht===bl,At=Ct.getClearColor(),wt=Ct.getClearAlpha(),Ft=At.r,Bt=At.g,Pt=At.b;Mt?(m[0]=Ft,m[1]=Bt,m[2]=Pt,m[3]=wt,g.clearBufferuiv(g.COLOR,0,m)):(v[0]=Ft,v[1]=Bt,v[2]=Pt,v[3]=wt,g.clearBufferiv(g.COLOR,0,v))}else q|=g.COLOR_BUFFER_BIT}I&&(q|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(q|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),lt.dispose(),Ot.dispose(),tt.dispose(),_.dispose(),P.dispose(),B.dispose(),Qt.dispose(),L.dispose(),ct.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Bl),Z.removeEventListener("sessionend",zl),si.stop()};function it(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const y=ot.autoReset,I=_t.enabled,V=_t.autoUpdate,q=_t.needsUpdate,U=_t.type;St(),ot.autoReset=y,_t.enabled=I,_t.autoUpdate=V,_t.needsUpdate=q,_t.type=U}function yt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Xt(y){const I=y.target;I.removeEventListener("dispose",Xt),fe(I)}function fe(y){De(y),tt.remove(y)}function De(y){const I=tt.get(y).programs;I!==void 0&&(I.forEach(function(V){ct.releaseProgram(V)}),y.isShaderMaterial&&ct.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,V,q,U,ht){I===null&&(I=Rt);const Mt=U.isMesh&&U.matrixWorld.determinant()<0,At=Mf(y,I,V,q,U);k.setMaterial(q,Mt);let wt=V.index,Ft=1;if(q.wireframe===!0){if(wt=G.getWireframeAttribute(V),wt===void 0)return;Ft=2}const Bt=V.drawRange,Pt=V.attributes.position;let te=Bt.start*Ft,se=(Bt.start+Bt.count)*Ft;ht!==null&&(te=Math.max(te,ht.start*Ft),se=Math.min(se,(ht.start+ht.count)*Ft)),wt!==null?(te=Math.max(te,0),se=Math.min(se,wt.count)):Pt!=null&&(te=Math.max(te,0),se=Math.min(se,Pt.count));const le=se-te;if(le<0||le===1/0)return;Qt.setup(U,q,At,V,wt);let Ge,jt=Tt;if(wt!==null&&(Ge=D.get(wt),jt=Nt,jt.setIndex(Ge)),U.isMesh)q.wireframe===!0?(k.setLineWidth(q.wireframeLinewidth*A()),jt.setMode(g.LINES)):jt.setMode(g.TRIANGLES);else if(U.isLine){let Dt=q.linewidth;Dt===void 0&&(Dt=1),k.setLineWidth(Dt*A()),U.isLineSegments?jt.setMode(g.LINES):U.isLineLoop?jt.setMode(g.LINE_LOOP):jt.setMode(g.LINE_STRIP)}else U.isPoints?jt.setMode(g.POINTS):U.isSprite&&jt.setMode(g.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)jt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if($.get("WEBGL_multi_draw"))jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Dt=U._multiDrawStarts,Me=U._multiDrawCounts,Kt=U._multiDrawCount,Ze=wt?D.get(wt).bytesPerElement:1,Ai=tt.get(q).currentProgram.getUniforms();for(let Ve=0;Ve<Kt;Ve++)Ai.setValue(g,"_gl_DrawID",Ve),jt.render(Dt[Ve]/Ze,Me[Ve])}else if(U.isInstancedMesh)jt.renderInstances(te,le,U.count);else if(V.isInstancedBufferGeometry){const Dt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Me=Math.min(V.instanceCount,Dt);jt.renderInstances(te,le,Me)}else jt.render(te,le)};function qt(y,I,V){y.transparent===!0&&y.side===Rn&&y.forceSinglePass===!1?(y.side=Be,y.needsUpdate=!0,Ws(y,I,V),y.side=ti,y.needsUpdate=!0,Ws(y,I,V),y.side=Rn):Ws(y,I,V)}this.compile=function(y,I,V=null){V===null&&(V=y),p=Ot.get(V),p.init(I),w.push(p),V.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==V&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const q=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ht=U.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const At=ht[Mt];qt(At,V,U),q.add(At)}else qt(ht,V,U),q.add(ht)}),w.pop(),p=null,q},this.compileAsync=function(y,I,V=null){const q=this.compile(y,I,V);return new Promise(U=>{function ht(){if(q.forEach(function(Mt){tt.get(Mt).currentProgram.isReady()&&q.delete(Mt)}),q.size===0){U(y);return}setTimeout(ht,10)}$.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Ie=null;function gn(y){Ie&&Ie(y)}function Bl(){si.stop()}function zl(){si.start()}const si=new lf;si.setAnimationLoop(gn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(y){Ie=y,Z.setAnimationLoop(y),y===null?si.stop():si.start()},Z.addEventListener("sessionstart",Bl),Z.addEventListener("sessionend",zl),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(I),I=Z.getCamera()),y.isScene===!0&&y.onBeforeRender(T,y,I,R),p=Ot.get(y,w.length),p.init(I),w.push(p),ft.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Et.setFromProjectionMatrix(ft),nt=this.localClippingEnabled,Y=rt.init(this.clippingPlanes,nt),M=lt.get(y,d.length),M.init(),d.push(M),Z.enabled===!0&&Z.isPresenting===!0){const ht=T.xr.getDepthSensingMesh();ht!==null&&ro(ht,I,-1/0,T.sortObjects)}ro(y,I,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(z,pt),Yt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Yt&&Ct.addToRenderList(M,y),this.info.render.frame++,Y===!0&&rt.beginShadows();const V=p.state.shadowsArray;_t.render(V,y,I),Y===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=M.opaque,U=M.transmissive;if(p.setupLights(),I.isArrayCamera){const ht=I.cameras;if(U.length>0)for(let Mt=0,At=ht.length;Mt<At;Mt++){const wt=ht[Mt];Gl(q,U,y,wt)}Yt&&Ct.render(y);for(let Mt=0,At=ht.length;Mt<At;Mt++){const wt=ht[Mt];Hl(M,y,wt,wt.viewport)}}else U.length>0&&Gl(q,U,y,I),Yt&&Ct.render(y),Hl(M,y,I);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(T,y,I),Qt.resetDefaultState(),O=-1,st=null,w.pop(),w.length>0?(p=w[w.length-1],Y===!0&&rt.setGlobalState(T.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?M=d[d.length-1]:M=null};function ro(y,I,V,q){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Et.intersectsSprite(y)){q&&Lt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ft);const Mt=B.update(y),At=y.material;At.visible&&M.push(y,Mt,At,V,Lt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Et.intersectsObject(y))){const Mt=B.update(y),At=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Lt.copy(y.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Lt.copy(Mt.boundingSphere.center)),Lt.applyMatrix4(y.matrixWorld).applyMatrix4(ft)),Array.isArray(At)){const wt=Mt.groups;for(let Ft=0,Bt=wt.length;Ft<Bt;Ft++){const Pt=wt[Ft],te=At[Pt.materialIndex];te&&te.visible&&M.push(y,Mt,te,V,Lt.z,Pt)}}else At.visible&&M.push(y,Mt,At,V,Lt.z,null)}}const ht=y.children;for(let Mt=0,At=ht.length;Mt<At;Mt++)ro(ht[Mt],I,V,q)}function Hl(y,I,V,q){const U=y.opaque,ht=y.transmissive,Mt=y.transparent;p.setupLightsView(V),Y===!0&&rt.setGlobalState(T.clippingPlanes,V),q&&k.viewport(x.copy(q)),U.length>0&&ks(U,I,V),ht.length>0&&ks(ht,I,V),Mt.length>0&&ks(Mt,I,V),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Gl(y,I,V,q){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new yi(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Fs:In,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const ht=p.state.transmissionRenderTarget[q.id],Mt=q.viewport||x;ht.setSize(Mt.z,Mt.w);const At=T.getRenderTarget();T.setRenderTarget(ht),T.getClearColor(X),J=T.getClearAlpha(),J<1&&T.setClearColor(16777215,.5),T.clear(),Yt&&Ct.render(V);const wt=T.toneMapping;T.toneMapping=Jn;const Ft=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Y===!0&&rt.setGlobalState(T.clippingPlanes,q),ks(y,V,q),S.updateMultisampleRenderTarget(ht),S.updateRenderTargetMipmap(ht),$.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Pt=0,te=I.length;Pt<te;Pt++){const se=I[Pt],le=se.object,Ge=se.geometry,jt=se.material,Dt=se.group;if(jt.side===Rn&&le.layers.test(q.layers)){const Me=jt.side;jt.side=Be,jt.needsUpdate=!0,Vl(le,V,q,Ge,jt,Dt),jt.side=Me,jt.needsUpdate=!0,Bt=!0}}Bt===!0&&(S.updateMultisampleRenderTarget(ht),S.updateRenderTargetMipmap(ht))}T.setRenderTarget(At),T.setClearColor(X,J),Ft!==void 0&&(q.viewport=Ft),T.toneMapping=wt}function ks(y,I,V){const q=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ht=y.length;U<ht;U++){const Mt=y[U],At=Mt.object,wt=Mt.geometry,Ft=q===null?Mt.material:q,Bt=Mt.group;At.layers.test(V.layers)&&Vl(At,I,V,wt,Ft,Bt)}}function Vl(y,I,V,q,U,ht){y.onBeforeRender(T,I,V,q,U,ht),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(T,I,V,q,y,ht),U.transparent===!0&&U.side===Rn&&U.forceSinglePass===!1?(U.side=Be,U.needsUpdate=!0,T.renderBufferDirect(V,I,q,U,y,ht),U.side=ti,U.needsUpdate=!0,T.renderBufferDirect(V,I,q,U,y,ht),U.side=Rn):T.renderBufferDirect(V,I,q,U,y,ht),y.onAfterRender(T,I,V,q,U,ht)}function Ws(y,I,V){I.isScene!==!0&&(I=Rt);const q=tt.get(y),U=p.state.lights,ht=p.state.shadowsArray,Mt=U.state.version,At=ct.getParameters(y,U.state,ht,I,V),wt=ct.getProgramCacheKey(At);let Ft=q.programs;q.environment=y.isMeshStandardMaterial?I.environment:null,q.fog=I.fog,q.envMap=(y.isMeshStandardMaterial?P:_).get(y.envMap||q.environment),q.envMapRotation=q.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Ft===void 0&&(y.addEventListener("dispose",Xt),Ft=new Map,q.programs=Ft);let Bt=Ft.get(wt);if(Bt!==void 0){if(q.currentProgram===Bt&&q.lightsStateVersion===Mt)return Wl(y,At),Bt}else At.uniforms=ct.getUniforms(y),y.onBeforeCompile(At,T),Bt=ct.acquireProgram(At,wt),Ft.set(wt,Bt),q.uniforms=At.uniforms;const Pt=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pt.clippingPlanes=rt.uniform),Wl(y,At),q.needsLights=yf(y),q.lightsStateVersion=Mt,q.needsLights&&(Pt.ambientLightColor.value=U.state.ambient,Pt.lightProbe.value=U.state.probe,Pt.directionalLights.value=U.state.directional,Pt.directionalLightShadows.value=U.state.directionalShadow,Pt.spotLights.value=U.state.spot,Pt.spotLightShadows.value=U.state.spotShadow,Pt.rectAreaLights.value=U.state.rectArea,Pt.ltc_1.value=U.state.rectAreaLTC1,Pt.ltc_2.value=U.state.rectAreaLTC2,Pt.pointLights.value=U.state.point,Pt.pointLightShadows.value=U.state.pointShadow,Pt.hemisphereLights.value=U.state.hemi,Pt.directionalShadowMap.value=U.state.directionalShadowMap,Pt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Pt.spotShadowMap.value=U.state.spotShadowMap,Pt.spotLightMatrix.value=U.state.spotLightMatrix,Pt.spotLightMap.value=U.state.spotLightMap,Pt.pointShadowMap.value=U.state.pointShadowMap,Pt.pointShadowMatrix.value=U.state.pointShadowMatrix),q.currentProgram=Bt,q.uniformsList=null,Bt}function kl(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Pr.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Wl(y,I){const V=tt.get(y);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Mf(y,I,V,q,U){I.isScene!==!0&&(I=Rt),S.resetTextureUnits();const ht=I.fog,Mt=q.isMeshStandardMaterial?I.environment:null,At=R===null?T.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ii,wt=(q.isMeshStandardMaterial?P:_).get(q.envMap||Mt),Ft=q.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Bt=!!V.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pt=!!V.morphAttributes.position,te=!!V.morphAttributes.normal,se=!!V.morphAttributes.color;let le=Jn;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(le=T.toneMapping);const Ge=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,jt=Ge!==void 0?Ge.length:0,Dt=tt.get(q),Me=p.state.lights;if(Y===!0&&(nt===!0||y!==st)){const je=y===st&&q.id===O;rt.setState(q,y,je)}let Kt=!1;q.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Me.state.version||Dt.outputColorSpace!==At||U.isBatchedMesh&&Dt.batching===!1||!U.isBatchedMesh&&Dt.batching===!0||U.isBatchedMesh&&Dt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Dt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Dt.instancing===!1||!U.isInstancedMesh&&Dt.instancing===!0||U.isSkinnedMesh&&Dt.skinning===!1||!U.isSkinnedMesh&&Dt.skinning===!0||U.isInstancedMesh&&Dt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Dt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Dt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Dt.instancingMorph===!1&&U.morphTexture!==null||Dt.envMap!==wt||q.fog===!0&&Dt.fog!==ht||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==Ft||Dt.vertexTangents!==Bt||Dt.morphTargets!==Pt||Dt.morphNormals!==te||Dt.morphColors!==se||Dt.toneMapping!==le||Dt.morphTargetsCount!==jt)&&(Kt=!0):(Kt=!0,Dt.__version=q.version);let Ze=Dt.currentProgram;Kt===!0&&(Ze=Ws(q,I,U));let Ai=!1,Ve=!1,oo=!1;const he=Ze.getUniforms(),On=Dt.uniforms;if(k.useProgram(Ze.program)&&(Ai=!0,Ve=!0,oo=!0),q.id!==O&&(O=q.id,Ve=!0),Ai||st!==y){K.reverseDepthBuffer?(dt.copy(y.projectionMatrix),Bm(dt),zm(dt),he.setValue(g,"projectionMatrix",dt)):he.setValue(g,"projectionMatrix",y.projectionMatrix),he.setValue(g,"viewMatrix",y.matrixWorldInverse);const je=he.map.cameraPosition;je!==void 0&&je.setValue(g,bt.setFromMatrixPosition(y.matrixWorld)),K.logarithmicDepthBuffer&&he.setValue(g,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&he.setValue(g,"isOrthographic",y.isOrthographicCamera===!0),st!==y&&(st=y,Ve=!0,oo=!0)}if(U.isSkinnedMesh){he.setOptional(g,U,"bindMatrix"),he.setOptional(g,U,"bindMatrixInverse");const je=U.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),he.setValue(g,"boneTexture",je.boneTexture,S))}U.isBatchedMesh&&(he.setOptional(g,U,"batchingTexture"),he.setValue(g,"batchingTexture",U._matricesTexture,S),he.setOptional(g,U,"batchingIdTexture"),he.setValue(g,"batchingIdTexture",U._indirectTexture,S),he.setOptional(g,U,"batchingColorTexture"),U._colorsTexture!==null&&he.setValue(g,"batchingColorTexture",U._colorsTexture,S));const ao=V.morphAttributes;if((ao.position!==void 0||ao.normal!==void 0||ao.color!==void 0)&&Ut.update(U,V,Ze),(Ve||Dt.receiveShadow!==U.receiveShadow)&&(Dt.receiveShadow=U.receiveShadow,he.setValue(g,"receiveShadow",U.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(On.envMap.value=wt,On.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&I.environment!==null&&(On.envMapIntensity.value=I.environmentIntensity),Ve&&(he.setValue(g,"toneMappingExposure",T.toneMappingExposure),Dt.needsLights&&Sf(On,oo),ht&&q.fog===!0&&at.refreshFogUniforms(On,ht),at.refreshMaterialUniforms(On,q,Q,H,p.state.transmissionRenderTarget[y.id]),Pr.upload(g,kl(Dt),On,S)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Pr.upload(g,kl(Dt),On,S),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&he.setValue(g,"center",U.center),he.setValue(g,"modelViewMatrix",U.modelViewMatrix),he.setValue(g,"normalMatrix",U.normalMatrix),he.setValue(g,"modelMatrix",U.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const je=q.uniformsGroups;for(let lo=0,Ef=je.length;lo<Ef;lo++){const Xl=je[lo];L.update(Xl,Ze),L.bind(Xl,Ze)}}return Ze}function Sf(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function yf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,I,V){tt.get(y.texture).__webglTexture=I,tt.get(y.depthTexture).__webglTexture=V;const q=tt.get(y);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=V===void 0,q.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const V=tt.get(y);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,V=0){R=y,F=I,C=V;let q=!0,U=null,ht=!1,Mt=!1;if(y){const wt=tt.get(y);if(wt.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(g.FRAMEBUFFER,null),q=!1;else if(wt.__webglFramebuffer===void 0)S.setupRenderTarget(y);else if(wt.__hasExternalTextures)S.rebindTextures(y,tt.get(y.texture).__webglTexture,tt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Pt=y.depthTexture;if(wt.__boundDepthTexture!==Pt){if(Pt!==null&&tt.has(Pt)&&(y.width!==Pt.image.width||y.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(y)}}const Ft=y.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Mt=!0);const Bt=tt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Bt[I])?U=Bt[I][V]:U=Bt[I],ht=!0):y.samples>0&&S.useMultisampledRTT(y)===!1?U=tt.get(y).__webglMultisampledFramebuffer:Array.isArray(Bt)?U=Bt[V]:U=Bt,x.copy(y.viewport),E.copy(y.scissor),W=y.scissorTest}else x.copy(gt).multiplyScalar(Q).floor(),E.copy(vt).multiplyScalar(Q).floor(),W=ut;if(k.bindFramebuffer(g.FRAMEBUFFER,U)&&q&&k.drawBuffers(y,U),k.viewport(x),k.scissor(E),k.setScissorTest(W),ht){const wt=tt.get(y.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+I,wt.__webglTexture,V)}else if(Mt){const wt=tt.get(y.texture),Ft=I||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,wt.__webglTexture,V||0,Ft)}O=-1},this.readRenderTargetPixels=function(y,I,V,q,U,ht,Mt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=tt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){k.bindFramebuffer(g.FRAMEBUFFER,At);try{const wt=y.texture,Ft=wt.format,Bt=wt.type;if(!K.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-q&&V>=0&&V<=y.height-U&&g.readPixels(I,V,q,U,It.convert(Ft),It.convert(Bt),ht)}finally{const wt=R!==null?tt.get(R).__webglFramebuffer:null;k.bindFramebuffer(g.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(y,I,V,q,U,ht,Mt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=tt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){const wt=y.texture,Ft=wt.format,Bt=wt.type;if(!K.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-q&&V>=0&&V<=y.height-U){k.bindFramebuffer(g.FRAMEBUFFER,At);const Pt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Pt),g.bufferData(g.PIXEL_PACK_BUFFER,ht.byteLength,g.STREAM_READ),g.readPixels(I,V,q,U,It.convert(Ft),It.convert(Bt),0);const te=R!==null?tt.get(R).__webglFramebuffer:null;k.bindFramebuffer(g.FRAMEBUFFER,te);const se=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await Fm(g,se,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Pt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,ht),g.deleteBuffer(Pt),g.deleteSync(se),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,V=0){y.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const q=Math.pow(2,-V),U=Math.floor(y.image.width*q),ht=Math.floor(y.image.height*q),Mt=I!==null?I.x:0,At=I!==null?I.y:0;S.setTexture2D(y,0),g.copyTexSubImage2D(g.TEXTURE_2D,V,0,0,Mt,At,U,ht),k.unbindTexture()},this.copyTextureToTexture=function(y,I,V=null,q=null,U=0){y.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,y=arguments[1],I=arguments[2],U=arguments[3]||0,V=null);let ht,Mt,At,wt,Ft,Bt;V!==null?(ht=V.max.x-V.min.x,Mt=V.max.y-V.min.y,At=V.min.x,wt=V.min.y):(ht=y.image.width,Mt=y.image.height,At=0,wt=0),q!==null?(Ft=q.x,Bt=q.y):(Ft=0,Bt=0);const Pt=It.convert(I.format),te=It.convert(I.type);S.setTexture2D(I,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,I.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,I.unpackAlignment);const se=g.getParameter(g.UNPACK_ROW_LENGTH),le=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ge=g.getParameter(g.UNPACK_SKIP_PIXELS),jt=g.getParameter(g.UNPACK_SKIP_ROWS),Dt=g.getParameter(g.UNPACK_SKIP_IMAGES),Me=y.isCompressedTexture?y.mipmaps[U]:y.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Me.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Me.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,At),g.pixelStorei(g.UNPACK_SKIP_ROWS,wt),y.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,U,Ft,Bt,ht,Mt,Pt,te,Me.data):y.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,U,Ft,Bt,Me.width,Me.height,Pt,Me.data):g.texSubImage2D(g.TEXTURE_2D,U,Ft,Bt,ht,Mt,Pt,te,Me),g.pixelStorei(g.UNPACK_ROW_LENGTH,se),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,le),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ge),g.pixelStorei(g.UNPACK_SKIP_ROWS,jt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Dt),U===0&&I.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(y,I,V=null,q=null,U=0){y.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,q=arguments[1]||null,y=arguments[2],I=arguments[3],U=arguments[4]||0);let ht,Mt,At,wt,Ft,Bt,Pt,te,se;const le=y.isCompressedTexture?y.mipmaps[U]:y.image;V!==null?(ht=V.max.x-V.min.x,Mt=V.max.y-V.min.y,At=V.max.z-V.min.z,wt=V.min.x,Ft=V.min.y,Bt=V.min.z):(ht=le.width,Mt=le.height,At=le.depth,wt=0,Ft=0,Bt=0),q!==null?(Pt=q.x,te=q.y,se=q.z):(Pt=0,te=0,se=0);const Ge=It.convert(I.format),jt=It.convert(I.type);let Dt;if(I.isData3DTexture)S.setTexture3D(I,0),Dt=g.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)S.setTexture2DArray(I,0),Dt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,I.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,I.unpackAlignment);const Me=g.getParameter(g.UNPACK_ROW_LENGTH),Kt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ze=g.getParameter(g.UNPACK_SKIP_PIXELS),Ai=g.getParameter(g.UNPACK_SKIP_ROWS),Ve=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,le.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,le.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,wt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ft),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Bt),y.isDataTexture||y.isData3DTexture?g.texSubImage3D(Dt,U,Pt,te,se,ht,Mt,At,Ge,jt,le.data):I.isCompressedArrayTexture?g.compressedTexSubImage3D(Dt,U,Pt,te,se,ht,Mt,At,Ge,le.data):g.texSubImage3D(Dt,U,Pt,te,se,ht,Mt,At,Ge,jt,le),g.pixelStorei(g.UNPACK_ROW_LENGTH,Me),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Kt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ze),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ai),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ve),U===0&&I.generateMipmaps&&g.generateMipmap(Dt),k.unbindTexture()},this.initRenderTarget=function(y){tt.get(y).__webglFramebuffer===void 0&&S.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),k.unbindTexture()},this.resetState=function(){F=0,C=0,R=null,k.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Cl?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===no?"display-p3":"srgb"}}class Il{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=i}clone(){return new Il(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $x extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mf extends bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xr=new N,Yr=new N,du=new oe,gs=new Gs,mr=new Hs,Jo=new N,pu=new N;class Zx extends ue{constructor(t=new He,e=new mf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Xr.fromBufferAttribute(e,s-1),Yr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Xr.distanceTo(Yr);t.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;du.copy(s).invert(),gs.copy(t.ray).applyMatrix4(du);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let M=m,p=v-1;M<p;M+=c){const d=u.getX(M),w=u.getX(M+1),T=_r(this,t,gs,l,d,w);T&&e.push(T)}if(this.isLineLoop){const M=u.getX(v-1),p=u.getX(m),d=_r(this,t,gs,l,M,p);d&&e.push(d)}}else{const m=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let M=m,p=v-1;M<p;M+=c){const d=_r(this,t,gs,l,M,M+1);d&&e.push(d)}if(this.isLineLoop){const M=_r(this,t,gs,l,v-1,m);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _r(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(Xr.fromBufferAttribute(o,s),Yr.fromBufferAttribute(o,r),e.distanceSqToSegment(Xr,Yr,Jo,pu)>i)return;Jo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Jo);if(!(l<t.near||l>t.far))return{distance:l,point:pu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const mu=new N,_u=new N;class Jx extends Zx{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)mu.fromBufferAttribute(e,s),_u.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+mu.distanceTo(_u);t.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _f extends bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gu=new oe,Qa=new Gs,gr=new Hs,vr=new N;class Qx extends ue{constructor(t=new He,e=new _f){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(s),gr.radius+=r,t.ray.intersectsSphere(gr)===!1)return;gu.copy(s).invert(),Qa.copy(t.ray).applyMatrix4(gu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=f,M=m;v<M;v++){const p=c.getX(v);vr.fromBufferAttribute(h,p),vu(vr,p,l,s,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,M=m;v<M;v++)vr.fromBufferAttribute(h,v),vu(vr,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vu(n,t,e,i,s,r,o){const a=Qa.distanceSqToPoint(n);if(a<e){const l=new N;Qa.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ul extends He{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new N,u=new zt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const m=i+h/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ul(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xi extends He{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let v=0;const M=[],p=i/2;let d=0;w(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(m,2));function w(){const b=new N,F=new N;let C=0;const R=(e-t)/i;for(let O=0;O<=r;O++){const st=[],x=O/r,E=x*(e-t)+t;for(let W=0;W<=s;W++){const X=W/s,J=X*l+a,et=Math.sin(J),H=Math.cos(J);F.x=E*et,F.y=-x*i+p,F.z=E*H,h.push(F.x,F.y,F.z),b.set(et,R,H).normalize(),f.push(b.x,b.y,b.z),m.push(X,1-x),st.push(v++)}M.push(st)}for(let O=0;O<s;O++)for(let st=0;st<r;st++){const x=M[st][O],E=M[st+1][O],W=M[st+1][O+1],X=M[st][O+1];t>0&&(u.push(x,E,X),C+=3),e>0&&(u.push(E,W,X),C+=3)}c.addGroup(d,C,0),d+=C}function T(b){const F=v,C=new zt,R=new N;let O=0;const st=b===!0?t:e,x=b===!0?1:-1;for(let W=1;W<=s;W++)h.push(0,p*x,0),f.push(0,x,0),m.push(.5,.5),v++;const E=v;for(let W=0;W<=s;W++){const J=W/s*l+a,et=Math.cos(J),H=Math.sin(J);R.x=st*H,R.y=p*x,R.z=st*et,h.push(R.x,R.y,R.z),f.push(0,x,0),C.x=et*.5+.5,C.y=H*.5*x+.5,m.push(C.x,C.y),v++}for(let W=0;W<s;W++){const X=F+W,J=E+W;b===!0?u.push(J,J+1,X):u.push(J+1,J,X),O+=3}c.addGroup(d,O,b===!0?1:2),d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nl extends He{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new N,f=new N,m=[],v=[],M=[],p=[];for(let d=0;d<=i;d++){const w=[],T=d/i;let b=0;d===0&&o===0?b=.5/e:d===i&&l===Math.PI&&(b=-.5/e);for(let F=0;F<=e;F++){const C=F/e;h.x=-t*Math.cos(s+C*r)*Math.sin(o+T*a),h.y=t*Math.cos(o+T*a),h.z=t*Math.sin(s+C*r)*Math.sin(o+T*a),v.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),p.push(C+b,1-T),w.push(c++)}u.push(w)}for(let d=0;d<i;d++)for(let w=0;w<e;w++){const T=u[d][w+1],b=u[d][w],F=u[d+1][w],C=u[d+1][w+1];(d!==0||o>0)&&m.push(T,b,C),(d!==i-1||l<Math.PI)&&m.push(b,F,C)}this.setIndex(m),this.setAttribute("position",new pe(v,3)),this.setAttribute("normal",new pe(M,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xu extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ol extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class tM extends Ol{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qo=new oe,Mu=new N,Su=new N;class gf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ll,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mu),Su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Su),e.updateMatrixWorld(),Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class eM extends gf{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=Vr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class nM extends Ol{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new eM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class iM extends gf{constructor(){super(new cf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sM extends Ol{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new iM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=yu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function yu(){return performance.now()}const Eu=new oe;class oM{constructor(t,e,i=0,s=1/0){this.ray=new Gs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Eu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eu),this}intersectObject(t,e=!0,i=[]){return tl(t,this,i,e),i.sort(Tu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)tl(t[s],this,i,e);return i.sort(Tu),i}}function Tu(n,t){return n.distance-t.distance}function tl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)tl(r[o],t,e,!0)}}class bu{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class aM extends Jx{constructor(t=10,e=10,i=4473924,s=8947848){i=new Gt(i),s=new Gt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,m=0,v=-a;f<=e;f++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const M=f===r?i:s;M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3}const u=new He;u.setAttribute("position",new pe(l,3)),u.setAttribute("color",new pe(c,3));const h=new mf({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class lM extends Ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);const Au={type:"change"},Fl={type:"start"},vf={type:"end"},xr=new Gs,wu=new Xn,cM=Math.cos(70*Nm.DEG2RAD),me=new N,Ne=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ta=1e-6;class uM extends lM{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ei,this._lastTargetPosition=new N,this._quat=new ei().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bu,this._sphericalDelta=new bu,this._scale=1,this._panOffset=new N,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new N,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fM.bind(this),this._onPointerDown=hM.bind(this),this._onPointerUp=dM.bind(this),this._onContextMenu=MM.bind(this),this._onMouseWheel=_M.bind(this),this._onKeyDown=gM.bind(this),this._onTouchStart=vM.bind(this),this._onTouchMove=xM.bind(this),this._onMouseDown=pM.bind(this),this._onMouseMove=mM.bind(this),this._interceptControlDown=SM.bind(this),this._interceptControlUp=yM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Au),this.update(),this.state=ee.NONE}update(t=null){const e=this.object.position;me.copy(e).sub(this.target),me.applyQuaternion(this._quat),this._spherical.setFromVector3(me),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ne:i>Math.PI&&(i-=Ne),s<-Math.PI?s+=Ne:s>Math.PI&&(s-=Ne),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(me.setFromSpherical(this._spherical),me.applyQuaternion(this._quatInverse),e.copy(this.target).add(me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=me.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(xr.origin.copy(this.object.position),xr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xr.direction))<cM?this.object.lookAt(this.target):(wu.setFromNormalAndCoplanarPoint(this.object.up,this.target),xr.intersectPlane(wu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ta||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ta||this._lastTargetPosition.distanceToSquared(this.target)>ta?(this.dispatchEvent(Au),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ne/60*this.autoRotateSpeed*t:Ne/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){me.setFromMatrixColumn(e,0),me.multiplyScalar(-t),this._panOffset.add(me)}_panUp(t,e){this.screenSpacePanning===!0?me.setFromMatrixColumn(e,1):(me.setFromMatrixColumn(e,0),me.crossVectors(this.object.up,me)),me.multiplyScalar(t),this._panOffset.add(me)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;me.copy(s).sub(this.target);let r=me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function hM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function fM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function dM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vf),this.state=ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function pM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ee.DOLLY;break;case $i.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ee.ROTATE}break;case $i.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Fl)}function mM(n){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function _M(n){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(n.preventDefault(),this.dispatchEvent(Fl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(vf))}function gM(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function vM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ee.TOUCH_ROTATE;break;case ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ee.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Fl)}function xM(n){switch(this._trackPointer(n),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ee.NONE}}function MM(n){this.enabled!==!1&&n.preventDefault()}function SM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const xf=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},EM={class:"scene-wrapper"},TM={__name:"ThreeScene",emits:["hover-change"],setup(n,{emit:t}){const e=t,i=Qu(null);let s,r,o,a,l,c,u,h,f,m,v,M,p,d;const w=new Map,T=[],b=new zt(10,10),F=new oM,C=new rM;let R=null,O=null;ch(()=>{st(),e("hover-change","---")}),uh(()=>{gt()});function st(){const ut=i.value;ut&&(s=new Kx({antialias:!0,canvas:ut}),s.setPixelRatio(window.devicePixelRatio||1),s.setSize(window.innerWidth,window.innerHeight),s.shadowMap.enabled=!0,s.shadowMap.type=Fh,r=new $x,r.background=new Gt(198417),r.fog=new Il(198417,40,140),o=new Ye(55,window.innerWidth/window.innerHeight,.1,200),o.position.set(18,16,26),a=new uM(o,s.domElement),a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=12,a.maxDistance=80,a.maxPolarAngle=Math.PI*.49,x(),E(),X(),J(),d=()=>{const Et=window.innerWidth,Y=window.innerHeight;o.aspect=Et/Y,o.updateProjectionMatrix(),s.setSize(Et,Y)},window.addEventListener("resize",d),pt())}function x(){const ut=new tM(6726911,263692,.6);r.add(ut);const Et=new sM(16777215,1.15);Et.position.set(15,25,10),Et.castShadow=!0,Et.shadow.mapSize.set(2048,2048),Et.shadow.camera.near=.1,Et.shadow.camera.far=80,r.add(Et);const Y=new Fe(new Xi(45,45,.2,64),new xu({color:330775,metalness:.1,roughness:.95}));Y.position.y=-.1,Y.receiveShadow=!0,r.add(Y);const nt=new aM(80,40,1063779,466995);nt.material.opacity=.35,nt.material.transparent=!0,nt.position.y=0,r.add(nt);const dt=600,ft=new Float32Array(dt*3);for(let Rt=0;Rt<dt;Rt+=1)ft[Rt*3]=(Math.random()-.5)*160,ft[Rt*3+1]=Math.random()*80+10,ft[Rt*3+2]=(Math.random()-.5)*160;const bt=new He;bt.setAttribute("position",new an(ft,3));const Lt=new _f({color:2914485,size:.6,transparent:!0,opacity:.35,depthWrite:!1});c=new Qx(bt,Lt),r.add(c)}function E(){[{name:"Alpha",position:new N(-12,10,-6)},{name:"Beta",position:new N(10,9.5,-4)},{name:"Gamma",position:new N(-8,10.5,6)},{name:"Delta",position:new N(11,8.5,7)},{name:"Sigma",position:new N(0,12,0)}].forEach(bt=>{const Lt=new N(bt.position.x,.8,bt.position.z),Rt=W(bt.position,6545663,.8,!0);Rt.userData.name=bt.name;const Yt=W(Lt,2321919,.65,!1);Yt.userData.name=`${bt.name}-ground`,w.set(Rt.uuid,Yt),T.push(Rt);const A=new Xi(.08,.08,bt.position.y-.8,12),g=new Wr({color:795456,transparent:!0,opacity:.45}),j=new Fe(A,g);j.position.set(bt.position.x,(bt.position.y+.8)/2,bt.position.z),r.add(j)})}function W(ut,Et,Y,nt){const dt=new Gt(Et),ft=dt.clone().multiplyScalar(nt?.35:.2),bt=new xu({color:dt,emissive:ft,emissiveIntensity:nt?.9:.5,metalness:nt?.55:.3,roughness:nt?.35:.6}),Lt=new Nl(Y,48,32),Rt=new Fe(Lt,bt);return Rt.position.copy(ut),Rt.castShadow=nt,Rt.receiveShadow=!nt,Rt.userData.baseScale=1,Rt.userData.defaultEmissiveIntensity=bt.emissiveIntensity,Rt.userData.baseColor=bt.color.clone(),r.add(Rt),Rt}function X(){const ut=new Ms;r.add(ut),u=new Un({transparent:!0,depthWrite:!1,blending:Fr,uniforms:{uTopColor:{value:new Gt(7203071)},uBottomColor:{value:new Gt(993901)},uTime:{value:0},uHeight:{value:1}},vertexShader:`
      varying float vY;
      void main() {
        vY = position.y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform float uTime;
      uniform float uHeight;
      varying float vY;

      void main() {
        float halfHeight = uHeight * 0.5;
        float t = clamp((vY + halfHeight) / uHeight, 0.0, 1.0);
        vec3 color = mix(uTopColor, uBottomColor, t);
        float pulse = 0.55 + 0.35 * sin(uTime * 4.0 + t * 12.0);
        float alpha = smoothstep(0.0, 0.6, 1.0 - abs(t - 0.5) * 2.0);
        gl_FragColor = vec4(color * pulse, alpha);
        if (gl_FragColor.a < 0.05) discard;
      }
    `}),h=new Fe(new Xi(.3,1,1,64,1,!0),u),h.visible=!1,h.frustumCulled=!1,ut.add(h),f=new nM(7599359,0,50,Math.PI/8,.5,2),f.castShadow=!1,f.visible=!1;const Et=new ue;r.add(Et),f.target=Et,ut.add(f),v=new Wr({color:5097727,transparent:!0,opacity:.45,blending:Fr,depthWrite:!1}),m=new Fe(new Ul(2.2,64),v),m.rotation.x=-Math.PI/2,m.visible=!1,ut.add(m)}function J(){const ut=s.domElement;M=Et=>{const Y=ut.getBoundingClientRect(),nt=(Et.clientX-Y.left)/Y.width,dt=(Et.clientY-Y.top)/Y.height;b.x=nt*2-1,b.y=-(dt*2-1)},p=()=>{b.set(10,10),et(null)},ut.addEventListener("pointermove",M),ut.addEventListener("pointerleave",p)}function et(ut){if(ut!==R){if(R&&H(R,!1),O&&H(O,!1),R=ut,O=ut?w.get(ut.uuid):null,!ut||!O){z(),e("hover-change","---");return}H(ut,!0),H(O,!0),Q(ut,O),e("hover-change",ut.userData.name??"---")}}function H(ut,Et){if(!ut)return;const Y=Et?1.25:ut.userData.baseScale;ut.scale.set(Y,Y,Y),ut.material.emissiveIntensity=Et?ut.userData.defaultEmissiveIntensity*2:ut.userData.defaultEmissiveIntensity}function Q(ut,Et){const Y=new N().subVectors(ut.position,Et.position),nt=Y.length();h.geometry&&h.geometry.dispose(),h.geometry=new Xi(.35,1.35,nt,64,1,!0),h.position.copy(ut.position).add(Et.position).multiplyScalar(.5);const dt=new ei().setFromUnitVectors(new N(0,1,0),Y.normalize());h.setRotationFromQuaternion(dt),h.visible=!0,u.uniforms.uHeight.value=nt,f.visible=!0,f.intensity=3.2,f.position.copy(ut.position),f.target.position.copy(Et.position),m.visible=!0,m.position.copy(Et.position);const ft=Math.max(2,nt*.2);m.scale.set(ft,ft,ft)}function z(){h&&(h.visible=!1),f&&(f.visible=!1),m&&(m.visible=!1)}function pt(){l=requestAnimationFrame(pt);const ut=C.getElapsedTime();u&&(u.uniforms.uTime.value=ut),m!=null&&m.visible&&v&&(v.opacity=.35+Math.sin(ut*3)*.15),c&&(c.rotation.y+=5e-4),a==null||a.update(),F.setFromCamera(b,o);const Et=F.intersectObjects(T,!1);Et.length>0?et(Et[0].object):et(null),s.render(r,o)}function gt(){var ut,Et;cancelAnimationFrame(l),window.removeEventListener("resize",d),(ut=s==null?void 0:s.domElement)==null||ut.removeEventListener("pointermove",M),(Et=s==null?void 0:s.domElement)==null||Et.removeEventListener("pointerleave",p),a==null||a.dispose(),s==null||s.dispose(),r&&r.traverse(Y=>{Y.geometry&&Y.geometry.dispose(),Y.material&&(Array.isArray(Y.material)?Y.material.forEach(vt):vt(Y.material))})}function vt(ut){ut.map&&ut.map.dispose(),ut.dispose()}return(ut,Et)=>(Ch(),Ph("div",EM,[qn("canvas",{ref_key:"canvasRef",ref:i,class:"scene-canvas"},null,512)]))}},bM=xf(TM,[["__scopeId","data-v-e683fc5b"]]),AM={class:"app-root"},wM={class:"hud status-panel"},RM={__name:"App",setup(n){const t=Qu("---");function e(i){t.value=i??"---"}return(i,s)=>(Ch(),Ph("div",AM,[$n(bM,{class:"scene-layer",onHoverChange:e}),s[0]||(s[0]=qn("section",{class:"hud info-panel"},[qn("p",{class:"title"},"Beam Network Demo"),qn("p",null,"悬浮任意上层节点，启动下行光束"),qn("p",null,"拖动可调整视角")],-1)),qn("div",wM," Hover Node: "+Fu(t.value),1)]))}},CM=xf(RM,[["__scopeId","data-v-567e87f3"]]);Xp(CM).mount("#app");
