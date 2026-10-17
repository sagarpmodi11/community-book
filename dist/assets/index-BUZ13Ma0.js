(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},ds=[],fn=()=>{},Ap=()=>!1,ka=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Wc=t=>t.startsWith("onUpdate:"),St=Object.assign,zc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rv=Object.prototype.hasOwnProperty,Ve=(t,e)=>rv.call(t,e),le=Array.isArray,ps=t=>zi(t)==="[object Map]",Ds=t=>zi(t)==="[object Set]",Jh=t=>zi(t)==="[object Date]",_e=t=>typeof t=="function",et=t=>typeof t=="string",tn=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",bp=t=>(Ue(t)||_e(t))&&_e(t.then)&&_e(t.catch),Sp=Object.prototype.toString,zi=t=>Sp.call(t),sv=t=>zi(t).slice(8,-1),Rp=t=>zi(t)==="[object Object]",Kc=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=Hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},iv=/-\w/g,gr=Va(t=>t.replace(iv,e=>e.slice(1).toUpperCase())),ov=/\B([A-Z])/g,Qr=Va(t=>t.replace(ov,"-$1").toLowerCase()),Pp=Va(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cl=Va(t=>t?`on${Pp(t)}`:""),lr=(t,e)=>!Object.is(t,e),Uo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Cp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Zo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xh;const Na=()=>Xh||(Xh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=et(r)?uv(r):Gc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(et(t)||Ue(t))return t}const av=/;(?![^(]*\))/g,lv=/:([^]+)/,cv=/\/\*[^]*?\*\//g;function uv(t){const e={};return t.replace(cv,"").split(av).forEach(n=>{if(n){const r=n.split(lv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ki(t){let e="";if(et(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Ki(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fv=Hc(hv);function kp(t){return!!t||t===""}function dv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=jr(t[r],e[r]);return n}function jr(t,e){if(t===e)return!0;let n=Jh(t),r=Jh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=tn(t),r=tn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?dv(t,e):!1;if(n=Ue(t),r=Ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!jr(t[o],e[o]))return!1}}return String(t)===String(e)}function Qc(t,e){return t.findIndex(n=>jr(n,e))}const Vp=t=>!!(t&&t.__v_isRef===!0),Ke=t=>et(t)?t:t==null?"":le(t)||Ue(t)&&(t.toString===Sp||!_e(t.toString))?Vp(t)?Ke(t.value):JSON.stringify(t,Np,2):String(t),Np=(t,e)=>Vp(e)?Np(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[kl(r,i)+" =>"]=s,n),{})}:Ds(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>kl(n))}:tn(e)?kl(e):Ue(e)&&!le(e)&&!Rp(e)?String(e):e,kl=(t,e="")=>{var n;return tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Dp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){++this._on===1&&(this.prevScope=yt,yt=this)}off(){this._on>0&&--this._on===0&&(yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Op(t){return new Dp(t)}function xp(){return yt}function pv(t,e=!1){yt&&yt.cleanups.push(t)}let Me;const Vl=new WeakSet;class Mp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vl.has(this)&&(Vl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zh(this),Up(this);const e=Me,n=Zt;Me=this,Zt=!0;try{return this.fn()}finally{Bp(this),Me=e,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xc(e);this.deps=this.depsTail=void 0,Zh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){nc(this)&&this.run()}get dirty(){return nc(this)}}let Lp=0,mi,gi;function Fp(t,e=!1){if(t.flags|=8,e){t.next=gi,gi=t;return}t.next=mi,mi=t}function Yc(){Lp++}function Jc(){if(--Lp>0)return;if(gi){let e=gi;for(gi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;mi;){let e=mi;for(mi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Up(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Xc(r),mv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function nc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($p(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $p(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ci)||(t.globalVersion=Ci,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!nc(t))))return;t.flags|=2;const e=t.dep,n=Me,r=Zt;Me=t,Zt=!0;try{Up(t);const s=t.fn(t._value);(e.version===0||lr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,Zt=r,Bp(t),t.flags&=-3}}function Xc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Xc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function mv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zt=!0;const jp=[];function xn(){jp.push(Zt),Zt=!1}function Mn(){const t=jp.pop();Zt=t===void 0?!0:t}function Zh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Ci=0;class gv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Me||!Zt||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new gv(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,qp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Ci++,this.notify(e)}notify(e){Yc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Jc()}}}function qp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)qp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ea=new WeakMap,Ur=Symbol(""),rc=Symbol(""),ki=Symbol("");function wt(t,e,n){if(Zt&&Me){let r=ea.get(t);r||ea.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Zc),s.map=r,s.key=n),s.track()}}function Pn(t,e,n,r,s,i){const o=ea.get(t);if(!o){Ci++;return}const l=c=>{c&&c.trigger()};if(Yc(),e==="clear")o.forEach(l);else{const c=le(t),h=c&&Kc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===ki||!tn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(ki)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Ur)),ps(t)&&l(o.get(rc)));break;case"delete":c||(l(o.get(Ur)),ps(t)&&l(o.get(rc)));break;case"set":ps(t)&&l(o.get(Ur));break}}Jc()}function _v(t,e){const n=ea.get(t);return n&&n.get(e)}function ss(t){const e=Ce(t);return e===t?e:(wt(e,"iterate",ki),Gt(t)?e:e.map(ht))}function Da(t){return wt(t=Ce(t),"iterate",ki),t}const yv={__proto__:null,[Symbol.iterator](){return Nl(this,Symbol.iterator,ht)},concat(...t){return ss(this).concat(...t.map(e=>le(e)?ss(e):e))},entries(){return Nl(this,"entries",t=>(t[1]=ht(t[1]),t))},every(t,e){return bn(this,"every",t,e,void 0,arguments)},filter(t,e){return bn(this,"filter",t,e,n=>n.map(ht),arguments)},find(t,e){return bn(this,"find",t,e,ht,arguments)},findIndex(t,e){return bn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return bn(this,"findLast",t,e,ht,arguments)},findLastIndex(t,e){return bn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return bn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Dl(this,"includes",t)},indexOf(...t){return Dl(this,"indexOf",t)},join(t){return ss(this).join(t)},lastIndexOf(...t){return Dl(this,"lastIndexOf",t)},map(t,e){return bn(this,"map",t,e,void 0,arguments)},pop(){return si(this,"pop")},push(...t){return si(this,"push",t)},reduce(t,...e){return ef(this,"reduce",t,e)},reduceRight(t,...e){return ef(this,"reduceRight",t,e)},shift(){return si(this,"shift")},some(t,e){return bn(this,"some",t,e,void 0,arguments)},splice(...t){return si(this,"splice",t)},toReversed(){return ss(this).toReversed()},toSorted(t){return ss(this).toSorted(t)},toSpliced(...t){return ss(this).toSpliced(...t)},unshift(...t){return si(this,"unshift",t)},values(){return Nl(this,"values",ht)}};function Nl(t,e,n){const r=Da(t),s=r[e]();return r!==t&&!Gt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const vv=Array.prototype;function bn(t,e,n,r,s,i){const o=Da(t),l=o!==t&&!Gt(t),c=o[e];if(c!==vv[e]){const p=c.apply(t,i);return l?ht(p):p}let h=n;o!==t&&(l?h=function(p,m){return n.call(this,ht(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,h,r);return l&&s?s(f):f}function ef(t,e,n,r){const s=Da(t);let i=n;return s!==t&&(Gt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,ht(l),c,t)}),s[e](i,...r)}function Dl(t,e,n){const r=Ce(t);wt(r,"iterate",ki);const s=r[e](...n);return(s===-1||s===!1)&&nu(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function si(t,e,n=[]){xn(),Yc();const r=Ce(t)[e].apply(t,n);return Jc(),Mn(),r}const Ev=Hc("__proto__,__v_isRef,__isVue"),Hp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tn));function Tv(t){tn(t)||(t=String(t));const e=Ce(this);return wt(e,"has",t),e.hasOwnProperty(t)}class Wp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Vv:Qp:i?Gp:Kp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=yv[n]))return c;if(n==="hasOwnProperty")return Tv}const l=Reflect.get(e,n,Qe(e)?e:r);return(tn(n)?Hp.has(n):Ev(n))||(s||wt(e,"get",n),i)?l:Qe(l)?o&&Kc(n)?l:l.value:Ue(l)?s?Jp(l):Gi(l):l}}class zp extends Wp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=_r(i);if(!Gt(r)&&!_r(r)&&(i=Ce(i),r=Ce(r)),!le(e)&&Qe(i)&&!Qe(r))return c||(i.value=r),!0}const o=le(e)&&Kc(n)?Number(n)<e.length:Ve(e,n),l=Reflect.set(e,n,r,Qe(e)?e:s);return e===Ce(s)&&(o?lr(r,i)&&Pn(e,"set",n,r):Pn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!tn(n)||!Hp.has(n))&&wt(e,"has",n),r}ownKeys(e){return wt(e,"iterate",le(e)?"length":Ur),Reflect.ownKeys(e)}}class wv extends Wp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Iv=new zp,Av=new wv,bv=new zp(!0);const sc=t=>t,Co=t=>Reflect.getPrototypeOf(t);function Sv(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=ps(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),f=n?sc:e?ta:ht;return!e&&wt(i,"iterate",c?rc:Ur),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function ko(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Rv(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);t||(lr(s,l)&&wt(o,"get",s),wt(o,"get",l));const{has:c}=Co(o),h=e?sc:t?ta:ht;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&wt(Ce(s),"iterate",Ur),s.size},has(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);return t||(lr(s,l)&&wt(o,"has",s),wt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ce(l),h=e?sc:t?ta:ht;return!t&&wt(c,"iterate",Ur),l.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return St(n,t?{add:ko("add"),set:ko("set"),delete:ko("delete"),clear:ko("clear")}:{add(s){!e&&!Gt(s)&&!_r(s)&&(s=Ce(s));const i=Ce(this);return Co(i).has.call(i,s)||(i.add(s),Pn(i,"add",s,s)),this},set(s,i){!e&&!Gt(i)&&!_r(i)&&(i=Ce(i));const o=Ce(this),{has:l,get:c}=Co(o);let h=l.call(o,s);h||(s=Ce(s),h=l.call(o,s));const f=c.call(o,s);return o.set(s,i),h?lr(i,f)&&Pn(o,"set",s,i):Pn(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:l}=Co(i);let c=o.call(i,s);c||(s=Ce(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&Pn(i,"delete",s,void 0),h},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&Pn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Sv(s,t,e)}),n}function eu(t,e){const n=Rv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ve(n,s)&&s in r?n:r,s,i)}const Pv={get:eu(!1,!1)},Cv={get:eu(!1,!0)},kv={get:eu(!0,!1)};const Kp=new WeakMap,Gp=new WeakMap,Qp=new WeakMap,Vv=new WeakMap;function Nv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dv(t){return t.__v_skip||!Object.isExtensible(t)?0:Nv(sv(t))}function Gi(t){return _r(t)?t:tu(t,!1,Iv,Pv,Kp)}function Yp(t){return tu(t,!1,bv,Cv,Gp)}function Jp(t){return tu(t,!0,Av,kv,Qp)}function tu(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Dv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function cr(t){return _r(t)?cr(t.__v_raw):!!(t&&t.__v_isReactive)}function _r(t){return!!(t&&t.__v_isReadonly)}function Gt(t){return!!(t&&t.__v_isShallow)}function nu(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function ru(t){return!Ve(t,"__v_skip")&&Object.isExtensible(t)&&Cp(t,"__v_skip",!0),t}const ht=t=>Ue(t)?Gi(t):t,ta=t=>Ue(t)?Jp(t):t;function Qe(t){return t?t.__v_isRef===!0:!1}function re(t){return Xp(t,!1)}function Ov(t){return Xp(t,!0)}function Xp(t,e){return Qe(t)?t:new xv(t,e)}class xv{constructor(e,n){this.dep=new Zc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Gt(e)||_r(e);e=r?e:Ce(e),lr(e,n)&&(this._rawValue=e,this._value=r?e:ht(e),this.dep.trigger())}}function Le(t){return Qe(t)?t.value:t}const Mv={get:(t,e,n)=>e==="__v_raw"?t:Le(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Qe(s)&&!Qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Zp(t){return cr(t)?t:new Proxy(t,Mv)}function Lv(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=Uv(t,n);return e}class Fv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return _v(Ce(this._object),this._key)}}function Uv(t,e,n){const r=t[e];return Qe(r)?r:new Fv(t,e,n)}class Bv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Zc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ci-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Fp(this,!0),!0}get value(){const e=this.dep.track();return $p(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $v(t,e,n=!1){let r,s;return _e(t)?r=t:(r=t.get,s=t.set),new Bv(r,s,n)}const Vo={},na=new WeakMap;let xr;function jv(t,e=!1,n=xr){if(n){let r=na.get(n);r||na.set(n,r=[]),r.push(t)}}function qv(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=q=>s?q:Gt(q)||s===!1||s===0?Cn(q,1):Cn(q);let f,p,m,E,S=!1,k=!1;if(Qe(t)?(p=()=>t.value,S=Gt(t)):cr(t)?(p=()=>h(t),S=!0):le(t)?(k=!0,S=t.some(q=>cr(q)||Gt(q)),p=()=>t.map(q=>{if(Qe(q))return q.value;if(cr(q))return h(q);if(_e(q))return c?c(q,2):q()})):_e(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){xn();try{m()}finally{Mn()}}const q=xr;xr=f;try{return c?c(t,3,[E]):t(E)}finally{xr=q}}:p=fn,e&&s){const q=p,ie=s===!0?1/0:s;p=()=>Cn(q(),ie)}const V=xp(),F=()=>{f.stop(),V&&V.active&&zc(V.effects,f)};if(i&&e){const q=e;e=(...ie)=>{q(...ie),F()}}let D=k?new Array(t.length).fill(Vo):Vo;const $=q=>{if(!(!(f.flags&1)||!f.dirty&&!q))if(e){const ie=f.run();if(s||S||(k?ie.some((ye,b)=>lr(ye,D[b])):lr(ie,D))){m&&m();const ye=xr;xr=f;try{const b=[ie,D===Vo?void 0:k&&D[0]===Vo?[]:D,E];D=ie,c?c(e,3,b):e(...b)}finally{xr=ye}}}else f.run()};return l&&l($),f=new Mp(p),f.scheduler=o?()=>o($,!1):$,E=q=>jv(q,!1,f),m=f.onStop=()=>{const q=na.get(f);if(q){if(c)c(q,4);else for(const ie of q)ie();na.delete(f)}},e?r?$(!0):D=f.run():o?o($.bind(null,!0),!0):f.run(),F.pause=f.pause.bind(f),F.resume=f.resume.bind(f),F.stop=F,F}function Cn(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Qe(t))Cn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Cn(t[r],e,n);else if(Ds(t)||ps(t))t.forEach(r=>{Cn(r,e,n)});else if(Rp(t)){for(const r in t)Cn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Cn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qi(t,e,n,r){try{return r?t(...r):t()}catch(s){Oa(s,e,n)}}function Tn(t,e,n,r){if(_e(t)){const s=Qi(t,e,n,r);return s&&bp(s)&&s.catch(i=>{Oa(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Tn(t[i],e,n,r));return s}}function Oa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Oe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,h)===!1)return}l=l.parent}if(i){xn(),Qi(i,null,10,[t,c,h]),Mn();return}}Hv(t,n,s,r,o)}function Hv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const kt=[];let cn=-1;const ms=[];let er=null,os=0;const em=Promise.resolve();let ra=null;function xa(t){const e=ra||em;return t?e.then(this?t.bind(this):t):e}function Wv(t){let e=cn+1,n=kt.length;for(;e<n;){const r=e+n>>>1,s=kt[r],i=Vi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function su(t){if(!(t.flags&1)){const e=Vi(t),n=kt[kt.length-1];!n||!(t.flags&2)&&e>=Vi(n)?kt.push(t):kt.splice(Wv(e),0,t),t.flags|=1,tm()}}function tm(){ra||(ra=em.then(rm))}function zv(t){le(t)?ms.push(...t):er&&t.id===-1?er.splice(os+1,0,t):t.flags&1||(ms.push(t),t.flags|=1),tm()}function tf(t,e,n=cn+1){for(;n<kt.length;n++){const r=kt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;kt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function nm(t){if(ms.length){const e=[...new Set(ms)].sort((n,r)=>Vi(n)-Vi(r));if(ms.length=0,er){er.push(...e);return}for(er=e,os=0;os<er.length;os++){const n=er[os];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}er=null,os=0}}const Vi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function rm(t){try{for(cn=0;cn<kt.length;cn++){const e=kt[cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cn<kt.length;cn++){const e=kt[cn];e&&(e.flags&=-2)}cn=-1,kt.length=0,nm(),ra=null,(kt.length||ms.length)&&rm()}}let bt=null,sm=null;function sa(t){const e=bt;return bt=t,sm=t&&t.type.__scopeId||null,e}function Tt(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&aa(-1);const i=sa(e);let o;try{o=t(...s)}finally{sa(i),r._d&&aa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Lr(t,e){if(bt===null)return t;const n=Ba(bt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Oe]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&Cn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(xn(),Tn(c,n,8,[t.el,l,t,e]),Mn())}}const Kv=Symbol("_vte"),Gv=t=>t.__isTeleport,Qv=Symbol("_leaveCb");function iu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,iu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function im(t,e){return _e(t)?St({name:t.name},e,{setup:t}):t}function om(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ia=new WeakMap;function _i(t,e,n,r,s=!1){if(le(t)){t.forEach((S,k)=>_i(S,e&&(le(e)?e[k]:e),n,r,s));return}if(gs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&_i(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ba(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===Oe?l.refs={}:l.refs,p=l.setupState,m=Ce(p),E=p===Oe?Ap:S=>Ve(m,S);if(h!=null&&h!==c){if(nf(e),et(h))f[h]=null,E(h)&&(p[h]=null);else if(Qe(h)){h.value=null;const S=e;S.k&&(f[S.k]=null)}}if(_e(c))Qi(c,l,12,[o,f]);else{const S=et(c),k=Qe(c);if(S||k){const V=()=>{if(t.f){const F=S?E(c)?p[c]:f[c]:c.value;if(s)le(F)&&zc(F,i);else if(le(F))F.includes(i)||F.push(i);else if(S)f[c]=[i],E(c)&&(p[c]=f[c]);else{const D=[i];c.value=D,t.k&&(f[t.k]=D)}}else S?(f[c]=o,E(c)&&(p[c]=o)):k&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const F=()=>{V(),ia.delete(t)};F.id=-1,ia.set(t,F),Ut(F,n)}else nf(t),V()}}}function nf(t){const e=ia.get(t);e&&(e.flags|=8,ia.delete(t))}Na().requestIdleCallback;Na().cancelIdleCallback;const gs=t=>!!t.type.__asyncLoader,am=t=>t.type.__isKeepAlive;function Yv(t,e){lm(t,"a",e)}function Jv(t,e){lm(t,"da",e)}function lm(t,e,n=Vt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ma(e,r,n),n){let s=n.parent;for(;s&&s.parent;)am(s.parent.vnode)&&Xv(r,e,n,s),s=s.parent}}function Xv(t,e,n,r){const s=Ma(e,t,r,!0);cm(()=>{zc(r[e],s)},n)}function Ma(t,e,n=Vt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{xn();const l=Yi(n),c=Tn(e,n,t,o);return l(),Mn(),c});return r?s.unshift(i):s.push(i),i}}const qn=t=>(e,n=Vt)=>{(!Oi||t==="sp")&&Ma(t,(...r)=>e(...r),n)},Zv=qn("bm"),ou=qn("m"),eE=qn("bu"),tE=qn("u"),nE=qn("bum"),cm=qn("um"),rE=qn("sp"),sE=qn("rtg"),iE=qn("rtc");function oE(t,e=Vt){Ma("ec",t,e)}const aE=Symbol.for("v-ndc");function La(t,e,n,r){let s;const i=n,o=le(t);if(o||et(t)){const l=o&&cr(t);let c=!1,h=!1;l&&(c=!Gt(t),h=_r(t),t=Da(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?h?ta(ht(t[f])):ht(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function lE(t,e,n={},r,s){if(bt.ce||bt.parent&&gs(bt.parent)&&bt.parent.ce)return ee(),At(Je,null,[ve("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),ee();const o=i&&um(i(n)),l=n.key||o&&o.key,c=At(Je,{key:(l&&!tn(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function um(t){return t.some(e=>Di(e)?!(e.type===Ln||e.type===Je&&!um(e.children)):!0)?t:null}const ic=t=>t?Vm(t)?Ba(t):ic(t.parent):null,yi=St(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ic(t.parent),$root:t=>ic(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>fm(t),$forceUpdate:t=>t.f||(t.f=()=>{su(t.update)}),$nextTick:t=>t.n||(t.n=xa.bind(t.proxy)),$watch:t=>kE.bind(t)}),Ol=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Ve(t,e),cE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ol(r,e))return o[e]=1,r[e];if(s!==Oe&&Ve(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Ve(h,e))return o[e]=3,i[e];if(n!==Oe&&Ve(n,e))return o[e]=4,n[e];oc&&(o[e]=0)}}const f=yi[e];let p,m;if(f)return e==="$attrs"&&wt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&Ve(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ve(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ol(s,e)?(s[e]=n,!0):r!==Oe&&Ve(r,e)?(r[e]=n,!0):Ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},l){let c,h;return!!(n[l]||t!==Oe&&l[0]!=="$"&&Ve(t,l)||Ol(e,l)||(c=i[0])&&Ve(c,l)||Ve(r,l)||Ve(yi,l)||Ve(s.config.globalProperties,l)||(h=o.__cssModules)&&h[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rf(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let oc=!0;function uE(t){const e=fm(t),n=t.proxy,r=t.ctx;oc=!1,e.beforeCreate&&sf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:E,updated:S,activated:k,deactivated:V,beforeDestroy:F,beforeUnmount:D,destroyed:$,unmounted:q,render:ie,renderTracked:ye,renderTriggered:b,errorCaptured:v,serverPrefetch:y,expose:_,inheritAttrs:T,components:R,directives:I,filters:it}=e;if(h&&hE(h,r,null),o)for(const de in o){const Te=o[de];_e(Te)&&(r[de]=Te.bind(n))}if(s){const de=s.call(n,n);Ue(de)&&(t.data=Gi(de))}if(oc=!0,i)for(const de in i){const Te=i[de],Lt=_e(Te)?Te.bind(n,n):_e(Te.get)?Te.get.bind(n,n):fn,Yt=!_e(Te)&&_e(Te.set)?Te.set.bind(n):fn,jt=Wt({get:Lt,set:Yt});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>jt.value,set:je=>jt.value=je})}if(l)for(const de in l)hm(l[de],r,n,de);if(c){const de=_e(c)?c.call(n):c;Reflect.ownKeys(de).forEach(Te=>{Bo(Te,de[Te])})}f&&sf(f,t,"c");function xe(de,Te){le(Te)?Te.forEach(Lt=>de(Lt.bind(n))):Te&&de(Te.bind(n))}if(xe(Zv,p),xe(ou,m),xe(eE,E),xe(tE,S),xe(Yv,k),xe(Jv,V),xe(oE,v),xe(iE,ye),xe(sE,b),xe(nE,D),xe(cm,q),xe(rE,y),le(_))if(_.length){const de=t.exposed||(t.exposed={});_.forEach(Te=>{Object.defineProperty(de,Te,{get:()=>n[Te],set:Lt=>n[Te]=Lt,enumerable:!0})})}else t.exposed||(t.exposed={});ie&&t.render===fn&&(t.render=ie),T!=null&&(t.inheritAttrs=T),R&&(t.components=R),I&&(t.directives=I),y&&om(t)}function hE(t,e,n=fn){le(t)&&(t=ac(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=en(s.from||r,s.default,!0):i=en(s.from||r):i=en(s),Qe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sf(t,e,n){Tn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function hm(t,e,n,r){let s=r.includes(".")?bm(n,r):()=>n[r];if(et(t)){const i=e[t];_e(i)&&dn(s,i)}else if(_e(t))dn(s,t.bind(n));else if(Ue(t))if(le(t))t.forEach(i=>hm(i,e,n,r));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&dn(s,i,t)}}function fm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>oa(c,h,o,!0)),oa(c,e,o)),Ue(e)&&i.set(e,c),c}function oa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&oa(t,i,n,!0),s&&s.forEach(o=>oa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=fE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const fE={data:of,props:af,emits:af,methods:ai,computed:ai,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:ai,directives:ai,watch:pE,provide:of,inject:dE};function of(t,e){return e?t?function(){return St(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function dE(t,e){return ai(ac(t),ac(e))}function ac(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function ai(t,e){return t?St(Object.create(null),t,e):e}function af(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:St(Object.create(null),rf(t),rf(e??{})):e}function pE(t,e){if(!t)return e;if(!e)return t;const n=St(Object.create(null),t);for(const r in e)n[r]=Ct(t[r],e[r]);return n}function dm(){return{app:null,config:{isNativeTag:Ap,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mE=0;function gE(t,e){return function(r,s=null){_e(r)||(r=St({},r)),s!=null&&!Ue(s)&&(s=null);const i=dm(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:mE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:JE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&_e(f.install)?(o.add(f),f.install(h,...p)):_e(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!c){const E=h._ceVNode||ve(r,s);return E.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(E,f,m),c=!0,h._container=f,f.__vue_app__=h,Ba(E.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Tn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Br;Br=h;try{return f()}finally{Br=p}}};return h}}let Br=null;function Bo(t,e){if(Vt){let n=Vt.provides;const r=Vt.parent&&Vt.parent.provides;r===n&&(n=Vt.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=km();if(r||Br){let s=Br?Br._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}function _E(){return!!(km()||Br)}const pm={},mm=()=>Object.create(pm),gm=t=>Object.getPrototypeOf(t)===pm;function yE(t,e,n,r=!1){const s={},i=mm();t.propsDefaults=Object.create(null),_m(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function vE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ce(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Fa(t.emitsOptions,m))continue;const E=e[m];if(c)if(Ve(i,m))E!==i[m]&&(i[m]=E,h=!0);else{const S=gr(m);s[S]=lc(c,l,S,E,t,!1)}else E!==i[m]&&(i[m]=E,h=!0)}}}else{_m(t,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Ve(e,p)&&((f=Qr(p))===p||!Ve(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=lc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ve(e,p))&&(delete i[p],h=!0)}h&&Pn(t.attrs,"set","")}function _m(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(pi(c))continue;const h=e[c];let f;s&&Ve(s,f=gr(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:Fa(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ce(n),h=l||Oe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=lc(s,c,p,h[p],t,!Ve(h,p))}}return o}function lc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ve(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Yi(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Qr(n))&&(r=!0))}return r}const EE=new WeakMap;function ym(t,e,n=!1){const r=n?EE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!_e(t)){const f=p=>{c=!0;const[m,E]=ym(p,e,!0);St(o,m),E&&l.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ue(t)&&r.set(t,ds),ds;if(le(i))for(let f=0;f<i.length;f++){const p=gr(i[f]);lf(p)&&(o[p]=Oe)}else if(i)for(const f in i){const p=gr(f);if(lf(p)){const m=i[f],E=o[p]=le(m)||_e(m)?{type:m}:St({},m),S=E.type;let k=!1,V=!0;if(le(S))for(let F=0;F<S.length;++F){const D=S[F],$=_e(D)&&D.name;if($==="Boolean"){k=!0;break}else $==="String"&&(V=!1)}else k=_e(S)&&S.name==="Boolean";E[0]=k,E[1]=V,(k||Ve(E,"default"))&&l.push(p)}}const h=[o,l];return Ue(t)&&r.set(t,h),h}function lf(t){return t[0]!=="$"&&!pi(t)}const au=t=>t==="_"||t==="_ctx"||t==="$stable",lu=t=>le(t)?t.map(hn):[hn(t)],TE=(t,e,n)=>{if(e._n)return e;const r=Tt((...s)=>lu(e(...s)),n);return r._c=!1,r},vm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(au(s))continue;const i=t[s];if(_e(i))e[s]=TE(s,i,r);else if(i!=null){const o=lu(i);e[s]=()=>o}}},Em=(t,e)=>{const n=lu(e);t.slots.default=()=>n},Tm=(t,e,n)=>{for(const r in e)(n||!au(r))&&(t[r]=e[r])},wE=(t,e,n)=>{const r=t.slots=mm();if(t.vnode.shapeFlag&32){const s=e._;s?(Tm(r,e,n),n&&Cp(r,"_",s,!0)):vm(e,r)}else e&&Em(t,e)},IE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Tm(s,e,n):(i=!e.$stable,vm(e,s)),o=e}else e&&(Em(t,e),o={default:1});if(i)for(const l in s)!au(l)&&o[l]==null&&delete s[l]},Ut=FE;function AE(t){return bE(t)}function bE(t,e){const n=Na();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:E=fn,insertStaticContent:S}=t,k=(w,A,P,x=null,B=null,M=null,K=void 0,W=null,H=!!A.dynamicChildren)=>{if(w===A)return;w&&!ii(w,A)&&(x=O(w),je(w,B,M,!0),w=null),A.patchFlag===-2&&(H=!1,A.dynamicChildren=null);const{type:j,ref:oe,shapeFlag:Q}=A;switch(j){case Ua:V(w,A,P,x);break;case Ln:F(w,A,P,x);break;case Ml:w==null&&D(A,P,x,K);break;case Je:R(w,A,P,x,B,M,K,W,H);break;default:Q&1?ie(w,A,P,x,B,M,K,W,H):Q&6?I(w,A,P,x,B,M,K,W,H):(Q&64||Q&128)&&j.process(w,A,P,x,B,M,K,W,H,te)}oe!=null&&B?_i(oe,w&&w.ref,M,A||w,!A):oe==null&&w&&w.ref!=null&&_i(w.ref,null,M,w,!0)},V=(w,A,P,x)=>{if(w==null)r(A.el=l(A.children),P,x);else{const B=A.el=w.el;A.children!==w.children&&h(B,A.children)}},F=(w,A,P,x)=>{w==null?r(A.el=c(A.children||""),P,x):A.el=w.el},D=(w,A,P,x)=>{[w.el,w.anchor]=S(w.children,A,P,x,w.el,w.anchor)},$=({el:w,anchor:A},P,x)=>{let B;for(;w&&w!==A;)B=m(w),r(w,P,x),w=B;r(A,P,x)},q=({el:w,anchor:A})=>{let P;for(;w&&w!==A;)P=m(w),s(w),w=P;s(A)},ie=(w,A,P,x,B,M,K,W,H)=>{A.type==="svg"?K="svg":A.type==="math"&&(K="mathml"),w==null?ye(A,P,x,B,M,K,W,H):y(w,A,B,M,K,W,H)},ye=(w,A,P,x,B,M,K,W)=>{let H,j;const{props:oe,shapeFlag:Q,transition:ne,dirs:he}=w;if(H=w.el=o(w.type,M,oe&&oe.is,oe),Q&8?f(H,w.children):Q&16&&v(w.children,H,null,x,B,xl(w,M),K,W),he&&Dr(w,null,x,"created"),b(H,w,w.scopeId,K,x),oe){for(const ge in oe)ge!=="value"&&!pi(ge)&&i(H,ge,null,oe[ge],M,x);"value"in oe&&i(H,"value",null,oe.value,M),(j=oe.onVnodeBeforeMount)&&ln(j,x,w)}he&&Dr(w,null,x,"beforeMount");const ae=SE(B,ne);ae&&ne.beforeEnter(H),r(H,A,P),((j=oe&&oe.onVnodeMounted)||ae||he)&&Ut(()=>{j&&ln(j,x,w),ae&&ne.enter(H),he&&Dr(w,null,x,"mounted")},B)},b=(w,A,P,x,B)=>{if(P&&E(w,P),x)for(let M=0;M<x.length;M++)E(w,x[M]);if(B){let M=B.subTree;if(A===M||Rm(M.type)&&(M.ssContent===A||M.ssFallback===A)){const K=B.vnode;b(w,K,K.scopeId,K.slotScopeIds,B.parent)}}},v=(w,A,P,x,B,M,K,W,H=0)=>{for(let j=H;j<w.length;j++){const oe=w[j]=W?tr(w[j]):hn(w[j]);k(null,oe,A,P,x,B,M,K,W)}},y=(w,A,P,x,B,M,K)=>{const W=A.el=w.el;let{patchFlag:H,dynamicChildren:j,dirs:oe}=A;H|=w.patchFlag&16;const Q=w.props||Oe,ne=A.props||Oe;let he;if(P&&Or(P,!1),(he=ne.onVnodeBeforeUpdate)&&ln(he,P,A,w),oe&&Dr(A,w,P,"beforeUpdate"),P&&Or(P,!0),(Q.innerHTML&&ne.innerHTML==null||Q.textContent&&ne.textContent==null)&&f(W,""),j?_(w.dynamicChildren,j,W,P,x,xl(A,B),M):K||Te(w,A,W,null,P,x,xl(A,B),M,!1),H>0){if(H&16)T(W,Q,ne,P,B);else if(H&2&&Q.class!==ne.class&&i(W,"class",null,ne.class,B),H&4&&i(W,"style",Q.style,ne.style,B),H&8){const ae=A.dynamicProps;for(let ge=0;ge<ae.length;ge++){const be=ae[ge],ot=Q[be],at=ne[be];(at!==ot||be==="value")&&i(W,be,ot,at,B,P)}}H&1&&w.children!==A.children&&f(W,A.children)}else!K&&j==null&&T(W,Q,ne,P,B);((he=ne.onVnodeUpdated)||oe)&&Ut(()=>{he&&ln(he,P,A,w),oe&&Dr(A,w,P,"updated")},x)},_=(w,A,P,x,B,M,K)=>{for(let W=0;W<A.length;W++){const H=w[W],j=A[W],oe=H.el&&(H.type===Je||!ii(H,j)||H.shapeFlag&198)?p(H.el):P;k(H,j,oe,null,x,B,M,K,!0)}},T=(w,A,P,x,B)=>{if(A!==P){if(A!==Oe)for(const M in A)!pi(M)&&!(M in P)&&i(w,M,A[M],null,B,x);for(const M in P){if(pi(M))continue;const K=P[M],W=A[M];K!==W&&M!=="value"&&i(w,M,W,K,B,x)}"value"in P&&i(w,"value",A.value,P.value,B)}},R=(w,A,P,x,B,M,K,W,H)=>{const j=A.el=w?w.el:l(""),oe=A.anchor=w?w.anchor:l("");let{patchFlag:Q,dynamicChildren:ne,slotScopeIds:he}=A;he&&(W=W?W.concat(he):he),w==null?(r(j,P,x),r(oe,P,x),v(A.children||[],P,oe,B,M,K,W,H)):Q>0&&Q&64&&ne&&w.dynamicChildren?(_(w.dynamicChildren,ne,P,B,M,K,W),(A.key!=null||B&&A===B.subTree)&&wm(w,A,!0)):Te(w,A,P,oe,B,M,K,W,H)},I=(w,A,P,x,B,M,K,W,H)=>{A.slotScopeIds=W,w==null?A.shapeFlag&512?B.ctx.activate(A,P,x,K,H):it(A,P,x,B,M,K,H):Nt(w,A,H)},it=(w,A,P,x,B,M,K)=>{const W=w.component=WE(w,x,B);if(am(w)&&(W.ctx.renderer=te),zE(W,!1,K),W.asyncDep){if(B&&B.registerDep(W,xe,K),!w.el){const H=W.subTree=ve(Ln);F(null,H,A,P),w.placeholder=H.el}}else xe(W,w,A,P,B,M,K)},Nt=(w,A,P)=>{const x=A.component=w.component;if(ME(w,A,P))if(x.asyncDep&&!x.asyncResolved){de(x,A,P);return}else x.next=A,x.update();else A.el=w.el,x.vnode=A},xe=(w,A,P,x,B,M,K)=>{const W=()=>{if(w.isMounted){let{next:Q,bu:ne,u:he,parent:ae,vnode:ge}=w;{const pt=Im(w);if(pt){Q&&(Q.el=ge.el,de(w,Q,K)),pt.asyncDep.then(()=>{w.isUnmounted||W()});return}}let be=Q,ot;Or(w,!1),Q?(Q.el=ge.el,de(w,Q,K)):Q=ge,ne&&Uo(ne),(ot=Q.props&&Q.props.onVnodeBeforeUpdate)&&ln(ot,ae,Q,ge),Or(w,!0);const at=uf(w),qt=w.subTree;w.subTree=at,k(qt,at,p(qt.el),O(qt),w,B,M),Q.el=at.el,be===null&&LE(w,at.el),he&&Ut(he,B),(ot=Q.props&&Q.props.onVnodeUpdated)&&Ut(()=>ln(ot,ae,Q,ge),B)}else{let Q;const{el:ne,props:he}=A,{bm:ae,m:ge,parent:be,root:ot,type:at}=w,qt=gs(A);Or(w,!1),ae&&Uo(ae),!qt&&(Q=he&&he.onVnodeBeforeMount)&&ln(Q,be,A),Or(w,!0);{ot.ce&&ot.ce._def.shadowRoot!==!1&&ot.ce._injectChildStyle(at);const pt=w.subTree=uf(w);k(null,pt,P,x,w,B,M),A.el=pt.el}if(ge&&Ut(ge,B),!qt&&(Q=he&&he.onVnodeMounted)){const pt=A;Ut(()=>ln(Q,be,pt),B)}(A.shapeFlag&256||be&&gs(be.vnode)&&be.vnode.shapeFlag&256)&&w.a&&Ut(w.a,B),w.isMounted=!0,A=P=x=null}};w.scope.on();const H=w.effect=new Mp(W);w.scope.off();const j=w.update=H.run.bind(H),oe=w.job=H.runIfDirty.bind(H);oe.i=w,oe.id=w.uid,H.scheduler=()=>su(oe),Or(w,!0),j()},de=(w,A,P)=>{A.component=w;const x=w.vnode.props;w.vnode=A,w.next=null,vE(w,A.props,x,P),IE(w,A.children,P),xn(),tf(w),Mn()},Te=(w,A,P,x,B,M,K,W,H=!1)=>{const j=w&&w.children,oe=w?w.shapeFlag:0,Q=A.children,{patchFlag:ne,shapeFlag:he}=A;if(ne>0){if(ne&128){Yt(j,Q,P,x,B,M,K,W,H);return}else if(ne&256){Lt(j,Q,P,x,B,M,K,W,H);return}}he&8?(oe&16&&Dt(j,B,M),Q!==j&&f(P,Q)):oe&16?he&16?Yt(j,Q,P,x,B,M,K,W,H):Dt(j,B,M,!0):(oe&8&&f(P,""),he&16&&v(Q,P,x,B,M,K,W,H))},Lt=(w,A,P,x,B,M,K,W,H)=>{w=w||ds,A=A||ds;const j=w.length,oe=A.length,Q=Math.min(j,oe);let ne;for(ne=0;ne<Q;ne++){const he=A[ne]=H?tr(A[ne]):hn(A[ne]);k(w[ne],he,P,null,B,M,K,W,H)}j>oe?Dt(w,B,M,!0,!1,Q):v(A,P,x,B,M,K,W,H,Q)},Yt=(w,A,P,x,B,M,K,W,H)=>{let j=0;const oe=A.length;let Q=w.length-1,ne=oe-1;for(;j<=Q&&j<=ne;){const he=w[j],ae=A[j]=H?tr(A[j]):hn(A[j]);if(ii(he,ae))k(he,ae,P,null,B,M,K,W,H);else break;j++}for(;j<=Q&&j<=ne;){const he=w[Q],ae=A[ne]=H?tr(A[ne]):hn(A[ne]);if(ii(he,ae))k(he,ae,P,null,B,M,K,W,H);else break;Q--,ne--}if(j>Q){if(j<=ne){const he=ne+1,ae=he<oe?A[he].el:x;for(;j<=ne;)k(null,A[j]=H?tr(A[j]):hn(A[j]),P,ae,B,M,K,W,H),j++}}else if(j>ne)for(;j<=Q;)je(w[j],B,M,!0),j++;else{const he=j,ae=j,ge=new Map;for(j=ae;j<=ne;j++){const lt=A[j]=H?tr(A[j]):hn(A[j]);lt.key!=null&&ge.set(lt.key,j)}let be,ot=0;const at=ne-ae+1;let qt=!1,pt=0;const zn=new Array(at);for(j=0;j<at;j++)zn[j]=0;for(j=he;j<=Q;j++){const lt=w[j];if(ot>=at){je(lt,B,M,!0);continue}let Ht;if(lt.key!=null)Ht=ge.get(lt.key);else for(be=ae;be<=ne;be++)if(zn[be-ae]===0&&ii(lt,A[be])){Ht=be;break}Ht===void 0?je(lt,B,M,!0):(zn[Ht-ae]=j+1,Ht>=pt?pt=Ht:qt=!0,k(lt,A[Ht],P,null,B,M,K,W,H),ot++)}const Ws=qt?RE(zn):ds;for(be=Ws.length-1,j=at-1;j>=0;j--){const lt=ae+j,Ht=A[lt],fo=A[lt+1],Zr=lt+1<oe?fo.el||fo.placeholder:x;zn[j]===0?k(null,Ht,P,Zr,B,M,K,W,H):qt&&(be<0||j!==Ws[be]?jt(Ht,P,Zr,2):be--)}}},jt=(w,A,P,x,B=null)=>{const{el:M,type:K,transition:W,children:H,shapeFlag:j}=w;if(j&6){jt(w.component.subTree,A,P,x);return}if(j&128){w.suspense.move(A,P,x);return}if(j&64){K.move(w,A,P,te);return}if(K===Je){r(M,A,P);for(let Q=0;Q<H.length;Q++)jt(H[Q],A,P,x);r(w.anchor,A,P);return}if(K===Ml){$(w,A,P);return}if(x!==2&&j&1&&W)if(x===0)W.beforeEnter(M),r(M,A,P),Ut(()=>W.enter(M),B);else{const{leave:Q,delayLeave:ne,afterLeave:he}=W,ae=()=>{w.ctx.isUnmounted?s(M):r(M,A,P)},ge=()=>{M._isLeaving&&M[Qv](!0),Q(M,()=>{ae(),he&&he()})};ne?ne(M,ae,ge):ge()}else r(M,A,P)},je=(w,A,P,x=!1,B=!1)=>{const{type:M,props:K,ref:W,children:H,dynamicChildren:j,shapeFlag:oe,patchFlag:Q,dirs:ne,cacheIndex:he}=w;if(Q===-2&&(B=!1),W!=null&&(xn(),_i(W,null,P,w,!0),Mn()),he!=null&&(A.renderCache[he]=void 0),oe&256){A.ctx.deactivate(w);return}const ae=oe&1&&ne,ge=!gs(w);let be;if(ge&&(be=K&&K.onVnodeBeforeUnmount)&&ln(be,A,w),oe&6)an(w.component,P,x);else{if(oe&128){w.suspense.unmount(P,x);return}ae&&Dr(w,null,A,"beforeUnmount"),oe&64?w.type.remove(w,A,P,te,x):j&&!j.hasOnce&&(M!==Je||Q>0&&Q&64)?Dt(j,A,P,!1,!0):(M===Je&&Q&384||!B&&oe&16)&&Dt(H,A,P),x&&qe(w)}(ge&&(be=K&&K.onVnodeUnmounted)||ae)&&Ut(()=>{be&&ln(be,A,w),ae&&Dr(w,null,A,"unmounted")},P)},qe=w=>{const{type:A,el:P,anchor:x,transition:B}=w;if(A===Je){Wn(P,x);return}if(A===Ml){q(w);return}const M=()=>{s(P),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(w.shapeFlag&1&&B&&!B.persisted){const{leave:K,delayLeave:W}=B,H=()=>K(P,M);W?W(w.el,M,H):H()}else M()},Wn=(w,A)=>{let P;for(;w!==A;)P=m(w),s(w),w=P;s(A)},an=(w,A,P)=>{const{bum:x,scope:B,job:M,subTree:K,um:W,m:H,a:j}=w;cf(H),cf(j),x&&Uo(x),B.stop(),M&&(M.flags|=8,je(K,w,A,P)),W&&Ut(W,A),Ut(()=>{w.isUnmounted=!0},A)},Dt=(w,A,P,x=!1,B=!1,M=0)=>{for(let K=M;K<w.length;K++)je(w[K],A,P,x,B)},O=w=>{if(w.shapeFlag&6)return O(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const A=m(w.anchor||w.el),P=A&&A[Kv];return P?m(P):A};let J=!1;const G=(w,A,P)=>{w==null?A._vnode&&je(A._vnode,null,null,!0):k(A._vnode||null,w,A,null,null,null,P),A._vnode=w,J||(J=!0,tf(),nm(),J=!1)},te={p:k,um:je,m:jt,r:qe,mt:it,mc:v,pc:Te,pbc:_,n:O,o:t};return{render:G,hydrate:void 0,createApp:gE(G)}}function xl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Or({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function SE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wm(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=tr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&wm(o,l)),l.type===Ua&&l.patchFlag!==-1&&(l.el=o.el),l.type===Ln&&!l.el&&(l.el=o.el)}}function RE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Im(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Im(e)}function cf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const PE=Symbol.for("v-scx"),CE=()=>en(PE);function dn(t,e,n){return Am(t,e,n)}function Am(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:o}=n,l=St({},n),c=e&&r||!e&&i!=="post";let h;if(Oi){if(i==="sync"){const E=CE();h=E.__watcherHandles||(E.__watcherHandles=[])}else if(!c){const E=()=>{};return E.stop=fn,E.resume=fn,E.pause=fn,E}}const f=Vt;l.call=(E,S,k)=>Tn(E,f,S,k);let p=!1;i==="post"?l.scheduler=E=>{Ut(E,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(E,S)=>{S?E():su(E)}),l.augmentJob=E=>{e&&(E.flags|=4),p&&(E.flags|=2,f&&(E.id=f.uid,E.i=f))};const m=qv(t,e,l);return Oi&&(h?h.push(m):c&&m()),m}function kE(t,e,n){const r=this.proxy,s=et(t)?t.includes(".")?bm(r,t):()=>r[t]:t.bind(r,r);let i;_e(e)?i=e:(i=e.handler,n=e);const o=Yi(this),l=Am(s,i.bind(r),n);return o(),l}function bm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const VE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${gr(e)}Modifiers`]||t[`${Qr(e)}Modifiers`];function NE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&VE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>et(f)?f.trim():f)),o.number&&(s=n.map(Zo)));let l,c=r[l=Cl(e)]||r[l=Cl(gr(e))];!c&&i&&(c=r[l=Cl(Qr(e))]),c&&Tn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Tn(h,t,6,s)}}const DE=new WeakMap;function Sm(t,e,n=!1){const r=n?DE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!_e(t)){const c=h=>{const f=Sm(h,e,!0);f&&(l=!0,St(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ue(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):St(o,i),Ue(t)&&r.set(t,o),o)}function Fa(t,e){return!t||!ka(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(t,e[0].toLowerCase()+e.slice(1))||Ve(t,Qr(e))||Ve(t,e))}function uf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:f,props:p,data:m,setupState:E,ctx:S,inheritAttrs:k}=t,V=sa(t);let F,D;try{if(n.shapeFlag&4){const q=s||r,ie=q;F=hn(h.call(ie,q,f,p,E,m,S)),D=l}else{const q=e;F=hn(q.length>1?q(p,{attrs:l,slots:o,emit:c}):q(p,null)),D=e.props?l:OE(l)}}catch(q){vi.length=0,Oa(q,t,1),F=ve(Ln)}let $=F;if(D&&k!==!1){const q=Object.keys(D),{shapeFlag:ie}=$;q.length&&ie&7&&(i&&q.some(Wc)&&(D=xE(D,i)),$=ws($,D,!1,!0))}return n.dirs&&($=ws($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&iu($,n.transition),F=$,sa(V),F}const OE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ka(n))&&((e||(e={}))[n]=t[n]);return e},xE=(t,e)=>{const n={};for(const r in t)(!Wc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ME(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hf(r,o,h):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Fa(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?hf(r,o,h):!0:!!o;return!1}function hf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Fa(n,i))return!0}return!1}function LE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Rm=t=>t.__isSuspense;function FE(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):zv(t)}const Je=Symbol.for("v-fgt"),Ua=Symbol.for("v-txt"),Ln=Symbol.for("v-cmt"),Ml=Symbol.for("v-stc"),vi=[];let Bt=null;function ee(t=!1){vi.push(Bt=t?null:[])}function UE(){vi.pop(),Bt=vi[vi.length-1]||null}let Ni=1;function aa(t,e=!1){Ni+=t,t<0&&Bt&&e&&(Bt.hasOnce=!0)}function Pm(t){return t.dynamicChildren=Ni>0?Bt||ds:null,UE(),Ni>0&&Bt&&Bt.push(t),t}function fe(t,e,n,r,s,i){return Pm(Z(t,e,n,r,s,i,!0))}function At(t,e,n,r,s){return Pm(ve(t,e,n,r,s,!0))}function Di(t){return t?t.__v_isVNode===!0:!1}function ii(t,e){return t.type===e.type&&t.key===e.key}const Cm=({key:t})=>t??null,$o=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||Qe(t)||_e(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function Z(t,e=null,n=null,r=0,s=null,i=t===Je?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cm(e),ref:e&&$o(e),scopeId:sm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return l?(cu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),Ni>0&&!o&&Bt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Bt.push(c),c}const ve=BE;function BE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===aE)&&(t=Ln),Di(t)){const l=ws(t,e,!0);return n&&cu(l,n),Ni>0&&!i&&Bt&&(l.shapeFlag&6?Bt[Bt.indexOf(t)]=l:Bt.push(l)),l.patchFlag=-2,l}if(YE(t)&&(t=t.__vccOpts),e){e=$E(e);let{class:l,style:c}=e;l&&!et(l)&&(e.class=Ki(l)),Ue(c)&&(nu(c)&&!le(c)&&(c=St({},c)),e.style=Gc(c))}const o=et(t)?1:Rm(t)?128:Gv(t)?64:Ue(t)?4:_e(t)?2:0;return Z(t,e,n,r,s,o,i,!0)}function $E(t){return t?nu(t)||gm(t)?St({},t):t:null}function ws(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?jE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Cm(h),ref:e&&e.ref?n&&i?le(i)?i.concat($o(e)):[i,$o(e)]:$o(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ws(t.ssContent),ssFallback:t.ssFallback&&ws(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&iu(f,c.clone(f)),f}function rt(t=" ",e=0){return ve(Ua,null,t,e)}function Ee(t="",e=!1){return e?(ee(),At(Ln,null,t)):ve(Ln,null,t)}function hn(t){return t==null||typeof t=="boolean"?ve(Ln):le(t)?ve(Je,null,t.slice()):Di(t)?tr(t):ve(Ua,null,String(t))}function tr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ws(t)}function cu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),cu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!gm(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[rt(e)]):n=8);t.children=e,t.shapeFlag|=n}function jE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ki([e.class,r.class]));else if(s==="style")e.style=Gc([e.style,r.style]);else if(ka(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ln(t,e,n,r=null){Tn(t,e,7,[n,r])}const qE=dm();let HE=0;function WE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qE,i={uid:HE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Dp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ym(r,s),emitsOptions:Sm(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=NE.bind(null,i),t.ce&&t.ce(i),i}let Vt=null;const km=()=>Vt||bt;let la,cc;{const t=Na(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};la=e("__VUE_INSTANCE_SETTERS__",n=>Vt=n),cc=e("__VUE_SSR_SETTERS__",n=>Oi=n)}const Yi=t=>{const e=Vt;return la(t),t.scope.on(),()=>{t.scope.off(),la(e)}},ff=()=>{Vt&&Vt.scope.off(),la(null)};function Vm(t){return t.vnode.shapeFlag&4}let Oi=!1;function zE(t,e=!1,n=!1){e&&cc(e);const{props:r,children:s}=t.vnode,i=Vm(t);yE(t,r,i,e),wE(t,s,n||e);const o=i?KE(t,e):void 0;return e&&cc(!1),o}function KE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,cE);const{setup:r}=n;if(r){xn();const s=t.setupContext=r.length>1?QE(t):null,i=Yi(t),o=Qi(r,t,0,[t.props,s]),l=bp(o);if(Mn(),i(),(l||t.sp)&&!gs(t)&&om(t),l){if(o.then(ff,ff),e)return o.then(c=>{df(t,c)}).catch(c=>{Oa(c,t,0)});t.asyncDep=o}else df(t,o)}else Nm(t)}function df(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=Zp(e)),Nm(t)}function Nm(t,e,n){const r=t.type;t.render||(t.render=r.render||fn);{const s=Yi(t);xn();try{uE(t)}finally{Mn(),s()}}}const GE={get(t,e){return wt(t,"get",""),t[e]}};function QE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,GE),slots:t.slots,emit:t.emit,expose:e}}function Ba(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Zp(ru(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yi)return yi[n](t)},has(e,n){return n in e||n in yi}})):t.proxy}function YE(t){return _e(t)&&"__vccOpts"in t}const Wt=(t,e)=>$v(t,e,Oi);function Dm(t,e,n){const r=(i,o,l)=>{aa(-1);try{return ve(i,o,l)}finally{aa(1)}},s=arguments.length;return s===2?Ue(e)&&!le(e)?Di(e)?r(t,null,[e]):r(t,e):r(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Di(n)&&(n=[n]),r(t,e,n))}const JE="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let uc;const pf=typeof window<"u"&&window.trustedTypes;if(pf)try{uc=pf.createPolicy("vue",{createHTML:t=>t})}catch{}const Om=uc?t=>uc.createHTML(t):t=>t,XE="http://www.w3.org/2000/svg",ZE="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,mf=Rn&&Rn.createElement("template"),eT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Rn.createElementNS(XE,t):e==="mathml"?Rn.createElementNS(ZE,t):n?Rn.createElement(t,{is:n}):Rn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mf.innerHTML=Om(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=mf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tT=Symbol("_vtc");function nT(t,e,n){const r=t[tT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gf=Symbol("_vod"),rT=Symbol("_vsh"),sT=Symbol(""),iT=/(?:^|;)\s*display\s*:/;function oT(t,e,n){const r=t.style,s=et(n);let i=!1;if(n&&!s){if(e)if(et(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&jo(r,l,"")}else for(const o in e)n[o]==null&&jo(r,o,"");for(const o in n)o==="display"&&(i=!0),jo(r,o,n[o])}else if(s){if(e!==n){const o=r[sT];o&&(n+=";"+o),r.cssText=n,i=iT.test(n)}}else e&&t.removeAttribute("style");gf in t&&(t[gf]=i?r.display:"",t[rT]&&(r.display="none"))}const _f=/\s*!important$/;function jo(t,e,n){if(le(n))n.forEach(r=>jo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=aT(t,e);_f.test(n)?t.setProperty(Qr(r),n.replace(_f,""),"important"):t[r]=n}}const yf=["Webkit","Moz","ms"],Ll={};function aT(t,e){const n=Ll[e];if(n)return n;let r=gr(e);if(r!=="filter"&&r in t)return Ll[e]=r;r=Pp(r);for(let s=0;s<yf.length;s++){const i=yf[s]+r;if(i in t)return Ll[e]=i}return e}const vf="http://www.w3.org/1999/xlink";function Ef(t,e,n,r,s,i=fv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vf,e.slice(6,e.length)):t.setAttributeNS(vf,e,n):n==null||i&&!kp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":tn(n)?String(n):n)}function Tf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Om(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=kp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function kn(t,e,n,r){t.addEventListener(e,n,r)}function lT(t,e,n,r){t.removeEventListener(e,n,r)}const wf=Symbol("_vei");function cT(t,e,n,r,s=null){const i=t[wf]||(t[wf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=uT(e);if(r){const h=i[e]=dT(r,s);kn(t,l,h,c)}else o&&(lT(t,l,o,c),i[e]=void 0)}}const If=/(?:Once|Passive|Capture)$/;function uT(t){let e;if(If.test(t)){e={};let r;for(;r=t.match(If);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qr(t.slice(2)),e]}let Fl=0;const hT=Promise.resolve(),fT=()=>Fl||(hT.then(()=>Fl=0),Fl=Date.now());function dT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Tn(pT(r,n.value),e,5,[r])};return n.value=t,n.attached=fT(),n}function pT(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Af=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,mT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?nT(t,r,o):e==="style"?oT(t,n,r):ka(e)?Wc(e)||cT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gT(t,e,r,o))?(Tf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ef(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!et(r))?Tf(t,gr(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ef(t,e,r,o))};function gT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Af(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Af(e)&&et(n)?!1:e in t}const yr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Uo(e,n):e};function _T(t){t.target.composing=!0}function bf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Qt=Symbol("_assign"),ca={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Qt]=yr(s);const i=r||s.props&&s.props.type==="number";kn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Zo(l)),t[Qt](l)}),n&&kn(t,"change",()=>{t.value=t.value.trim()}),e||(kn(t,"compositionstart",_T),kn(t,"compositionend",bf),kn(t,"change",bf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Qt]=yr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Zo(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},yT={deep:!0,created(t,e,n){t[Qt]=yr(n),kn(t,"change",()=>{const r=t._modelValue,s=Is(t),i=t.checked,o=t[Qt];if(le(r)){const l=Qc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const h=[...r];h.splice(l,1),o(h)}}else if(Ds(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Lm(t,i))})},mounted:Sf,beforeUpdate(t,e,n){t[Qt]=yr(n),Sf(t,e,n)}};function Sf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=Qc(e,r.props.value)>-1;else if(Ds(e))s=e.has(r.props.value);else{if(e===n)return;s=jr(e,Lm(t,!0))}t.checked!==s&&(t.checked=s)}const xm={created(t,{value:e},n){t.checked=jr(e,n.props.value),t[Qt]=yr(n),kn(t,"change",()=>{t[Qt](Is(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Qt]=yr(r),e!==n&&(t.checked=jr(e,r.props.value))}},Mm={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ds(e);kn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Zo(Is(o)):Is(o));t[Qt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,xa(()=>{t._assigning=!1})}),t[Qt]=yr(r)},mounted(t,{value:e}){Rf(t,e)},beforeUpdate(t,e,n){t[Qt]=yr(n)},updated(t,{value:e}){t._assigning||Rf(t,e)}};function Rf(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!Ds(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Is(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=Qc(e,l)>-1}else o.selected=e.has(l);else if(jr(Is(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Is(t){return"_value"in t?t._value:t.value}function Lm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const hc={created(t,e,n){No(t,e,n,null,"created")},mounted(t,e,n){No(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){No(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){No(t,e,n,r,"updated")}};function vT(t,e){switch(t){case"SELECT":return Mm;case"TEXTAREA":return ca;default:switch(e){case"checkbox":return yT;case"radio":return xm;default:return ca}}}function No(t,e,n,r,s){const o=vT(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const ET=["ctrl","shift","alt","meta"],TT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ET.some(n=>t[`${n}Key`]&&!e.includes(n))},$a=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=TT[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},wT=St({patchProp:mT},eT);let Pf;function IT(){return Pf||(Pf=AE(wT))}const AT=((...t)=>{const e=IT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ST(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,bT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function bT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ST(t){return et(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Fm;const ja=t=>Fm=t,Um=Symbol();function fc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ei;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ei||(Ei={}));function RT(){const t=Op(!0),e=t.run(()=>re({}));let n=[],r=[];const s=ru({install(i){ja(s),s._a=i,i.provide(Um,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Bm=()=>{};function Cf(t,e,n,r=Bm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&xp()&&pv(s),s}function is(t,...e){t.slice().forEach(n=>{n(...e)})}const PT=t=>t(),kf=Symbol(),Ul=Symbol();function dc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];fc(s)&&fc(r)&&t.hasOwnProperty(n)&&!Qe(r)&&!cr(r)?t[n]=dc(s,r):t[n]=r}return t}const CT=Symbol();function kT(t){return!fc(t)||!Object.prototype.hasOwnProperty.call(t,CT)}const{assign:Xn}=Object;function VT(t){return!!(Qe(t)&&t.effect)}function NT(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const f=Lv(n.state.value[t]);return Xn(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=ru(Wt(()=>{ja(n);const E=n._s.get(t);return o[m].call(E,E)})),p),{}))}return c=$m(t,h,e,n,r,!0),c}function $m(t,e,n={},r,s,i){let o;const l=Xn({actions:{}},n),c={deep:!0};let h,f,p=[],m=[],E;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),re({});let k;function V(v){let y;h=f=!1,typeof v=="function"?(v(r.state.value[t]),y={type:Ei.patchFunction,storeId:t,events:E}):(dc(r.state.value[t],v),y={type:Ei.patchObject,payload:v,storeId:t,events:E});const _=k=Symbol();xa().then(()=>{k===_&&(h=!0)}),f=!0,is(p,y,r.state.value[t])}const F=i?function(){const{state:y}=n,_=y?y():{};this.$patch(T=>{Xn(T,_)})}:Bm;function D(){o.stop(),p=[],m=[],r._s.delete(t)}const $=(v,y="")=>{if(kf in v)return v[Ul]=y,v;const _=function(){ja(r);const T=Array.from(arguments),R=[],I=[];function it(de){R.push(de)}function Nt(de){I.push(de)}is(m,{args:T,name:_[Ul],store:ie,after:it,onError:Nt});let xe;try{xe=v.apply(this&&this.$id===t?this:ie,T)}catch(de){throw is(I,de),de}return xe instanceof Promise?xe.then(de=>(is(R,de),de)).catch(de=>(is(I,de),Promise.reject(de))):(is(R,xe),xe)};return _[kf]=!0,_[Ul]=y,_},q={_p:r,$id:t,$onAction:Cf.bind(null,m),$patch:V,$reset:F,$subscribe(v,y={}){const _=Cf(p,v,y.detached,()=>T()),T=o.run(()=>dn(()=>r.state.value[t],R=>{(y.flush==="sync"?f:h)&&v({storeId:t,type:Ei.direct,events:E},R)},Xn({},c,y)));return _},$dispose:D},ie=Gi(q);r._s.set(t,ie);const b=(r._a&&r._a.runWithContext||PT)(()=>r._e.run(()=>(o=Op()).run(()=>e({action:$}))));for(const v in b){const y=b[v];if(Qe(y)&&!VT(y)||cr(y))i||(S&&kT(y)&&(Qe(y)?y.value=S[v]:dc(y,S[v])),r.state.value[t][v]=y);else if(typeof y=="function"){const _=$(y,v);b[v]=_,l.actions[v]=y}}return Xn(ie,b),Xn(Ce(ie),b),Object.defineProperty(ie,"$state",{get:()=>r.state.value[t],set:v=>{V(y=>{Xn(y,v)})}}),r._p.forEach(v=>{Xn(ie,o.run(()=>v({store:ie,app:r._a,pinia:r,options:l})))}),S&&i&&n.hydrate&&n.hydrate(ie.$state,S),h=!0,f=!0,ie}/*! #__NO_SIDE_EFFECTS__ */function uu(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=_E();return o=o||(c?en(Um,null):null),o&&ja(o),o=Fm,o._s.has(t)||(s?$m(t,e,r,o):NT(t,r,o)),o._s.get(t)}return i.$id=t,i}const DT=()=>{};var Vf={};/**
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
 */const jm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},OT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,E=h&63;c||(E=64,o||(m=64)),r.push(n[f],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new xT;const m=i<<2|l>>4;if(r.push(m),h!==64){const E=l<<4&240|h>>2;if(r.push(E),p!==64){const S=h<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MT=function(t){const e=jm(t);return qm.encodeByteArray(e,!0)},ua=function(t){return MT(t).replace(/\./g,"")},Hm=function(t){try{return qm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FT=()=>LT().__FIREBASE_DEFAULTS__,UT=()=>{if(typeof process>"u"||typeof Vf>"u")return;const t=Vf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hm(t[1]);return e&&JSON.parse(e)},qa=()=>{try{return DT()||FT()||UT()||BT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wm=t=>qa()?.emulatorHosts?.[t],$T=t=>{const e=Wm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zm=()=>qa()?.config,Km=t=>qa()?.[`_${t}`];/**
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
 */class jT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Os(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gm(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function qT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ua(JSON.stringify(n)),ua(JSON.stringify(o)),""].join(".")}const Ti={};function HT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ti))Ti[e]?t.emulator.push(e):t.prod.push(e);return t}function WT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Nf=!1;function Qm(t,e){if(typeof window>"u"||typeof document>"u"||!Os(window.location.host)||Ti[t]===e||Ti[t]||Nf)return;Ti[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=HT().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,E){m.setAttribute("width","24"),m.setAttribute("id",E),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Nf=!0,o()},m}function f(m,E){m.setAttribute("id",E),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=WT(r),E=n("text"),S=document.getElementById(E)||document.createElement("span"),k=n("learnmore"),V=document.getElementById(k)||document.createElement("a"),F=n("preprendIcon"),D=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const $=m.element;l($),f(V,k);const q=h();c(D,F),$.append(D,S,V,q),document.body.appendChild($)}i?(S.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function KT(){const t=qa()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function YT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JT(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XT(){return!KT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ZT(){try{return typeof indexedDB=="object"}catch{return!1}}function ew(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const tw="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tw,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?nw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Hn(s,l,r)}}function nw(t,e){return t.replace(rw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rw=/\{\$([^}]+)}/g;function sw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Df(i)&&Df(o)){if(!qr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Df(t){return t!==null&&typeof t=="object"}/**
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
 */function Xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ci(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function iw(t,e){const n=new ow(t,e);return n.subscribe.bind(n)}class ow{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Bl),s.error===void 0&&(s.error=Bl),s.complete===void 0&&(s.complete=Bl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bl(){}/**
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
 */function st(t){return t&&t._delegate?t._delegate:t}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mr="[DEFAULT]";/**
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
 */class lw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uw(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cw(t){return t===Mr?void 0:t}function uw(t){return t.instantiationMode==="EAGER"}/**
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
 */class hw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const fw={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},dw=we.INFO,pw={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},mw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hu{constructor(e){this.name=e,this._logLevel=dw,this._logHandler=mw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const gw=(t,e)=>e.some(n=>t instanceof n);let Of,xf;function _w(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yw(){return xf||(xf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ym=new WeakMap,pc=new WeakMap,Jm=new WeakMap,$l=new WeakMap,fu=new WeakMap;function vw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ym.set(n,t)}).catch(()=>{}),fu.set(e,t),e}function Ew(t){if(pc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pc.set(t,e)}let mc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Tw(t){mc=t(mc)}function ww(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jl(this),e,...n);return Jm.set(r,e.sort?e.sort():[e]),ur(r)}:yw().includes(t)?function(...e){return t.apply(jl(this),e),ur(Ym.get(this))}:function(...e){return ur(t.apply(jl(this),e))}}function Iw(t){return typeof t=="function"?ww(t):(t instanceof IDBTransaction&&Ew(t),gw(t,_w())?new Proxy(t,mc):t)}function ur(t){if(t instanceof IDBRequest)return vw(t);if($l.has(t))return $l.get(t);const e=Iw(t);return e!==t&&($l.set(t,e),fu.set(e,t)),e}const jl=t=>fu.get(t);function Aw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ur(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ur(o.result),c.oldVersion,c.newVersion,ur(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const bw=["get","getKey","getAll","getAllKeys","count"],Sw=["put","add","delete","clear"],ql=new Map;function Mf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ql.get(e))return ql.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Sw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bw.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return ql.set(e,i),i}Tw(t=>({...t,get:(e,n,r)=>Mf(e,n)||t.get(e,n,r),has:(e,n)=>!!Mf(e,n)||t.has(e,n)}));/**
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
 */class Rw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pw(t){return t.getComponent()?.type==="VERSION"}const gc="@firebase/app",Lf="0.14.2";/**
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
 */const Fn=new hu("@firebase/app"),Cw="@firebase/app-compat",kw="@firebase/analytics-compat",Vw="@firebase/analytics",Nw="@firebase/app-check-compat",Dw="@firebase/app-check",Ow="@firebase/auth",xw="@firebase/auth-compat",Mw="@firebase/database",Lw="@firebase/data-connect",Fw="@firebase/database-compat",Uw="@firebase/functions",Bw="@firebase/functions-compat",$w="@firebase/installations",jw="@firebase/installations-compat",qw="@firebase/messaging",Hw="@firebase/messaging-compat",Ww="@firebase/performance",zw="@firebase/performance-compat",Kw="@firebase/remote-config",Gw="@firebase/remote-config-compat",Qw="@firebase/storage",Yw="@firebase/storage-compat",Jw="@firebase/firestore",Xw="@firebase/ai",Zw="@firebase/firestore-compat",eI="firebase",tI="12.2.0";/**
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
 */const _c="[DEFAULT]",nI={[gc]:"fire-core",[Cw]:"fire-core-compat",[Vw]:"fire-analytics",[kw]:"fire-analytics-compat",[Dw]:"fire-app-check",[Nw]:"fire-app-check-compat",[Ow]:"fire-auth",[xw]:"fire-auth-compat",[Mw]:"fire-rtdb",[Lw]:"fire-data-connect",[Fw]:"fire-rtdb-compat",[Uw]:"fire-fn",[Bw]:"fire-fn-compat",[$w]:"fire-iid",[jw]:"fire-iid-compat",[qw]:"fire-fcm",[Hw]:"fire-fcm-compat",[Ww]:"fire-perf",[zw]:"fire-perf-compat",[Kw]:"fire-rc",[Gw]:"fire-rc-compat",[Qw]:"fire-gcs",[Yw]:"fire-gcs-compat",[Jw]:"fire-fst",[Zw]:"fire-fst-compat",[Xw]:"fire-vertex","fire-js":"fire-js",[eI]:"fire-js-all"};/**
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
 */const ha=new Map,rI=new Map,yc=new Map;function Ff(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(yc.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;yc.set(e,t);for(const n of ha.values())Ff(n,t);for(const n of rI.values())Ff(n,t);return!0}function du(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const sI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new Ji("app","Firebase",sI);/**
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
 */class iI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=tI;function Xm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:_c,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw hr.create("bad-app-name",{appName:String(s)});if(n||(n=zm()),!n)throw hr.create("no-options");const i=ha.get(s);if(i){if(qr(n,i.options)&&qr(r,i.config))return i;throw hr.create("duplicate-app",{appName:s})}const o=new hw(s);for(const c of yc.values())o.addComponent(c);const l=new iI(n,r,o);return ha.set(s,l),l}function Zm(t=_c){const e=ha.get(t);if(!e&&t===_c&&zm())return Xm();if(!e)throw hr.create("no-app",{appName:t});return e}function fr(t,e,n){let r=nI[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(o.join(" "));return}As(new Hr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const oI="firebase-heartbeat-database",aI=1,xi="firebase-heartbeat-store";let Hl=null;function eg(){return Hl||(Hl=Aw(oI,aI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xi)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),Hl}async function lI(t){try{const n=(await eg()).transaction(xi),r=await n.objectStore(xi).get(tg(t));return await n.done,r}catch(e){if(e instanceof Hn)Fn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e?.message});Fn.warn(n.message)}}}async function Uf(t,e){try{const r=(await eg()).transaction(xi,"readwrite");await r.objectStore(xi).put(e,tg(t)),await r.done}catch(n){if(n instanceof Hn)Fn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n?.message});Fn.warn(r.message)}}}function tg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cI=1024,uI=30;class hI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>uI){const s=pI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Fn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bf(),{heartbeatsToSend:n,unsentEntries:r}=fI(this._heartbeatsCache.heartbeats),s=ua(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Fn.warn(e),""}}}function Bf(){return new Date().toISOString().substring(0,10)}function fI(t,e=cI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$f(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$f(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZT()?ew().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function $f(t){return ua(JSON.stringify({version:2,heartbeats:t})).length}function pI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function mI(t){As(new Hr("platform-logger",e=>new Rw(e),"PRIVATE")),As(new Hr("heartbeat",e=>new hI(e),"PRIVATE")),fr(gc,Lf,t),fr(gc,Lf,"esm2020"),fr("fire-js","")}mI("");var gI="firebase",_I="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(gI,_I,"app");function ng(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yI=ng,rg=new Ji("auth","Firebase",ng());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new hu("@firebase/auth");function vI(t,...e){fa.logLevel<=we.WARN&&fa.warn(`Auth (${xs}): ${t}`,...e)}function qo(t,...e){fa.logLevel<=we.ERROR&&fa.error(`Auth (${xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw pu(t,...e)}function pn(t,...e){return pu(t,...e)}function sg(t,e,n){const r={...yI(),[e]:n};return new Ji("auth","Firebase",r).create(e,{appName:t.name})}function Dn(t){return sg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rg.create(t,...e)}function ce(t,e,...n){if(!t)throw pu(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qo(e),new Error(e)}function Un(t,e){t||Vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(){return typeof self<"u"&&self.location?.href||""}function EI(){return jf()==="http:"||jf()==="https:"}function jf(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EI()||QT()||"connection"in navigator)?navigator.onLine:!0}function wI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=zT()||YT()}get(){return TI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bI=new Zi(3e4,6e4);function br(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Sr(t,e,n,r,s={}){return og(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Xi({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:c,...i};return GT()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Os(t.emulatorConfig.host)&&(h.credentials="include"),ig.fetch()(await ag(t,t.config.apiHost,n,l),h)})}async function og(t,e,n){t._canInitEmulator=!1;const r={...II,...e};try{const s=new RI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Do(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Do(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Do(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Do(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw sg(t,f,h);nn(t,f)}}catch(s){if(s instanceof Hn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function eo(t,e,n,r,s={}){const i=await Sr(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ag(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?mu(t.config,s):`${t.config.apiScheme}://${s}`;return AI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function SI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),bI.get())})}}function Do(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=pn(t,e,r);return s.customData._tokenResponse=n,s}function qf(t){return t!==void 0&&t.enterprise!==void 0}class PI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function CI(t,e){return Sr(t,"GET","/v2/recaptchaConfig",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(t,e){return Sr(t,"POST","/v1/accounts:delete",e)}async function da(t,e){return Sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VI(t,e=!1){const n=st(t),r=await n.getIdToken(e),s=gu(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:wi(Wl(s.auth_time)),issuedAtTime:wi(Wl(s.iat)),expirationTime:wi(Wl(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Wl(t){return Number(t)*1e3}function gu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hm(n);return s?JSON.parse(s):(qo("Failed to decode base64 JWT payload"),null)}catch(s){return qo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Hf(t){const e=gu(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&NI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pa(t){const e=t.auth,n=await t.getIdToken(),r=await Mi(t,da(e,{idToken:n}));ce(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?lg(s.providerUserInfo):[],o=xI(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ec(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function OI(t){const e=st(t);await pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e){const n=await og(t,{},async()=>{const r=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await ag(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Os(t.emulatorConfig.host)&&(c.credentials="include"),ig.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function LI(t,e){return Sr(t,"POST","/v2/accounts:revokeToken",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Hf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await MI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _s;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new DI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ec(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mi(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VI(this,e)}reload(){return OI(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await Mi(this,kI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:E,providerData:S,stsTokenManager:k}=n;ce(p&&k,e,"internal-error");const V=_s.fromJSON(this.name,k);ce(typeof p=="string",e,"internal-error"),Yn(r,e.name),Yn(s,e.name),ce(typeof m=="boolean",e,"internal-error"),ce(typeof E=="boolean",e,"internal-error"),Yn(i,e.name),Yn(o,e.name),Yn(l,e.name),Yn(c,e.name),Yn(h,e.name),Yn(f,e.name);const F=new Xt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:V,createdAt:h,lastLoginAt:f});return S&&Array.isArray(S)&&(F.providerData=S.map(D=>({...D}))),c&&(F._redirectEventId=c),F}static async _fromIdTokenResponse(e,n,r=!1){const s=new _s;s.updateFromServerResponse(n);const i=new Xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new _s;l.updateFromIdToken(r);const c=new Xt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ec(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=new Map;function Nn(t){Un(t instanceof Function,"Expected a class definition");let e=Wf.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wf.set(t,e),e)}/**
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
 */class cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cg.type="NONE";const zf=cg;/**
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
 */function Ho(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ho(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ho("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await da(this.auth,{idToken:e}).catch(()=>{});return n?Xt._fromGetAccountInfoResponse(this.auth,n,e):null}return Xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ys(Nn(zf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Nn(zf);const o=Ho(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await da(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Xt._fromGetAccountInfoResponse(e,m,f)}else p=Xt._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ys(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ys(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ug(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mg(e))return"Blackberry";if(gg(e))return"Webos";if(hg(e))return"Safari";if((e.includes("chrome/")||fg(e))&&!e.includes("edge/"))return"Chrome";if(pg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function ug(t=Rt()){return/firefox\//i.test(t)}function hg(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fg(t=Rt()){return/crios\//i.test(t)}function dg(t=Rt()){return/iemobile/i.test(t)}function pg(t=Rt()){return/android/i.test(t)}function mg(t=Rt()){return/blackberry/i.test(t)}function gg(t=Rt()){return/webos/i.test(t)}function _u(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FI(t=Rt()){return _u(t)&&!!window.navigator?.standalone}function UI(){return JT()&&document.documentMode===10}function _g(t=Rt()){return _u(t)||pg(t)||gg(t)||mg(t)||/windows phone/i.test(t)||dg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t,e=[]){let n;switch(t){case"Browser":n=Kf(Rt());break;case"Worker":n=`${Kf(Rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
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
 */class BI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function $I(t,e={}){return Sr(t,"GET","/v2/passwordPolicy",br(t,e))}/**
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
 */const jI=6;class qI{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??jI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gf(this),this.idTokenSubscription=new Gf(this),this.beforeStateQueue=new BI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await da(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(zt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(Dn(this));const n=e?st(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $I(this),n=new qI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await LI(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&vI(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Yr(t){return st(t)}class Gf{constructor(e){this.auth=e,this.observer=null,this.addObserver=iw(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WI(t){Ha=t}function vg(t){return Ha.loadJS(t)}function zI(){return Ha.recaptchaEnterpriseScript}function KI(){return Ha.gapiScript}function GI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class QI{constructor(){this.enterprise=new YI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class YI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const JI="recaptcha-enterprise",Eg="NO_RECAPTCHA";class XI{constructor(e){this.type=JI,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{CI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new PI(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;qf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Eg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QI().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&qf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=zI();c.length!==0&&(c+=l),vg(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Qf(t,e,n,r=!1,s=!1){const i=new XI(t);let o;if(s)o=Eg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Tc(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Qf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Qf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e){const n=du(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(qr(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function eA(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Nn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function tA(t,e,n){const r=Yr(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Tg(e),{host:o,port:l}=nA(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(qr(h,r.config.emulator)&&qr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Os(o)?(Gm(`${i}//${o}${c}`),Qm("Auth",!0)):rA()}function Tg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nA(t){const e=Tg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Yf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Yf(o)}}}function Yf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}async function sA(t,e){return Sr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(t,e){return eo(t,"POST","/v1/accounts:signInWithPassword",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}async function aA(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends yu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Li(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Li(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tc(e,n,"signInWithPassword",iA);case"emailLink":return oA(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tc(e,r,"signUpPassword",sA);case"emailLink":return aA(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e){return eo(t,"POST","/v1/accounts:signInWithIdp",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA="http://localhost";class Wr extends yu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:lA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uA(t){const e=li(ci(t)).link,n=e?li(ci(e)).deep_link_id:null,r=li(ci(t)).deep_link_id;return(r?li(ci(r)).link:null)||r||n||e||t}class vu{constructor(e){const n=li(ci(e)),r=n.apiKey??null,s=n.oobCode??null,i=cA(n.mode??null);ce(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=uA(e);try{return new vu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.providerId=Ms.PROVIDER_ID}static credential(e,n){return Li._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vu.parseLink(n);return ce(r,"argument-error"),Li._fromEmailAndCode(e,r.code,r.tenantId)}}Ms.PROVIDER_ID="password";Ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class to extends wg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends to{constructor(){super("facebook.com")}static credential(e){return Wr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends to{constructor(){super("github.com")}static credential(e){return Wr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends to{constructor(){super("twitter.com")}static credential(e,n){return Wr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,e){return eo(t,"POST","/v1/accounts:signUp",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Xt._fromIdTokenResponse(e,r,s),o=Jf(r);return new zr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Jf(r);return new zr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Jf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends Hn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ma.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ma(e,n,r,s)}}function Ig(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ma._fromErrorAndOperation(t,i,e,r):i})}async function fA(t,e,n=!1){const r=await Mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zr._forOperation(t,"link",r)}/**
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
 */async function dA(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(Dn(r));const s="reauthenticate";try{const i=await Mi(t,Ig(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=gu(i.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),zr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(t,e,n=!1){if(zt(t.app))return Promise.reject(Dn(t));const r="signIn",s=await Ig(t,r,e),i=await zr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function pA(t,e){return Ag(Yr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bg(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mA(t,e,n){if(zt(t.app))return Promise.reject(Dn(t));const r=Yr(t),o=await Tc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&bg(t),c}),l=await zr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function gA(t,e,n){return zt(t.app)?Promise.reject(Dn(t)):pA(st(t),Ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bg(t),r})}function _A(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function yA(t,e,n){return st(t).beforeAuthStateChanged(e,n)}function vA(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}function EA(t){return st(t).signOut()}const ga="__sak";/**
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
 */class Sg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ga,"1"),this.storage.removeItem(ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=1e3,wA=10;class Rg extends Sg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_g(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);UI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rg.type="LOCAL";const IA=Rg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg extends Sg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pg.type="SESSION";const Cg=Pg;/**
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
 */function AA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await AA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Eu("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function SA(t){mn().location.href=t}/**
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
 */function kg(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function RA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PA(){return navigator?.serviceWorker?.controller||null}function CA(){return kg()?self:null}/**
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
 */const Vg="firebaseLocalStorageDb",kA=1,_a="firebaseLocalStorage",Ng="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function za(t,e){return t.transaction([_a],e?"readwrite":"readonly").objectStore(_a)}function VA(){const t=indexedDB.deleteDatabase(Vg);return new no(t).toPromise()}function wc(){const t=indexedDB.open(Vg,kA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_a,{keyPath:Ng})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_a)?e(r):(r.close(),await VA(),e(await wc()))})})}async function Xf(t,e,n){const r=za(t,!0).put({[Ng]:e,value:n});return new no(r).toPromise()}async function NA(t,e){const n=za(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function Zf(t,e){const n=za(t,!0).delete(e);return new no(n).toPromise()}const DA=800,OA=3;class Dg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wa._getInstance(CA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await RA(),!this.activeServiceWorker)return;this.sender=new bA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wc();return await Xf(e,ga,"1"),await Zf(e,ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=za(s,!1).getAll();return new no(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dg.type="LOCAL";const xA=Dg;new Zi(3e4,6e4);/**
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
 */function MA(t,e){return e?Nn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tu extends yu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LA(t){return Ag(t.auth,new Tu(t),t.bypassAuthState)}function FA(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),dA(n,new Tu(t),t.bypassAuthState)}async function UA(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),fA(n,new Tu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LA;case"linkViaPopup":case"linkViaRedirect":return UA;case"reauthViaPopup":case"reauthViaRedirect":return FA;default:nn(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=new Zi(2e3,1e4);class fs extends Og{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=Eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BA.get())};e()}}fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="pendingRedirect",Wo=new Map;class jA extends Og{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wo.get(this.auth._key());if(!e){try{const r=await qA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wo.set(this.auth._key(),e)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qA(t,e){const n=zA(e),r=WA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function HA(t,e){Wo.set(t._key(),e)}function WA(t){return Nn(t._redirectPersistence)}function zA(t){return Ho($A,t.config.apiKey,t.name)}async function KA(t,e,n=!1){if(zt(t.app))return Promise.reject(Dn(t));const r=Yr(t),s=MA(r,e),o=await new jA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=600*1e3;class QA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!xg(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(pn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GA&&this.cachedEventUids.clear(),this.cachedEventUids.has(ed(e))}saveEventToCache(e){this.cachedEventUids.add(ed(e)),this.lastProcessedEventTime=Date.now()}}function ed(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xg({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function YA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e={}){return Sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZA=/^https?/;async function eb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JA(t);for(const n of e)try{if(tb(n))return}catch{}nn(t,"unauthorized-domain")}function tb(t){const e=vc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZA.test(n))return!1;if(XA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const nb=new Zi(3e4,6e4);function td(){const t=mn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rb(t){return new Promise((e,n)=>{function r(){td(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{td(),n(pn(t,"network-request-failed"))},timeout:nb.get()})}if(mn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(mn().gapi?.load)r();else{const s=GI("iframefcb");return mn()[s]=()=>{gapi.load?r():n(pn(t,"network-request-failed"))},vg(`${KI()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw zo=null,e})}let zo=null;function sb(t){return zo=zo||rb(t),zo}/**
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
 */const ib=new Zi(5e3,15e3),ob="__/auth/iframe",ab="emulator/auth/iframe",lb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ub(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mu(e,ab):`https://${t.config.authDomain}/${ob}`,r={apiKey:e.apiKey,appName:t.name,v:xs},s=cb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Xi(r).slice(1)}`}async function hb(t){const e=await sb(t),n=mn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:ub(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),l=mn().setTimeout(()=>{i(o)},ib.get());function c(){mn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const fb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},db=500,pb=600,mb="_blank",gb="http://localhost";class nd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _b(t,e,n,r=db,s=pb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...fb,width:r.toString(),height:s.toString(),top:i,left:o},h=Rt().toLowerCase();n&&(l=fg(h)?mb:n),ug(h)&&(e=e||gb,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[E,S])=>`${m}${E}=${S},`,"");if(FI(h)&&l!=="_self")return yb(e||"",l),new nd(null);const p=window.open(e||"",l,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new nd(p)}function yb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const vb="__/auth/handler",Eb="emulator/auth/handler",Tb=encodeURIComponent("fac");async function rd(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:s};if(e instanceof wg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof to){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${Tb}=${encodeURIComponent(c)}`:"";return`${wb(t)}?${Xi(l).slice(1)}${h}`}function wb({config:t}){return t.emulator?mu(t,Eb):`https://${t.authDomain}/${vb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="webStorageSupport";class Ib{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cg,this._completeRedirectFn=KA,this._overrideRedirectResult=HA}async _openPopup(e,n,r,s){Un(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await rd(e,n,r,vc(),s);return _b(e,i,Eu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await rd(e,n,r,vc(),s);return SA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hb(e),r=new QA(e);return n.register("authEvent",s=>(ce(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zl,{type:zl},s=>{const i=s?.[0]?.[zl];i!==void 0&&n(!!i),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _g()||hg()||_u()}}const Ab=Ib;var sd="@firebase/auth",id="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rb(t){As(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yg(t)},h=new HI(r,s,i,c);return eA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),As(new Hr("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new bb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(sd,id,Sb(t)),fr(sd,id,"esm2020")}/**
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
 */const Pb=300,Cb=Km("authIdTokenMaxAge")||Pb;let od=null;const kb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Cb)return;const s=n?.token;od!==s&&(od=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Vb(t=Zm()){const e=du(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZI(t,{popupRedirectResolver:Ab,persistence:[xA,IA,Cg]}),r=Km("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=kb(i.toString());yA(n,o,()=>o(n.currentUser)),_A(n,l=>o(l))}}const s=Wm("auth");return s&&tA(n,`http://${s}`),n}function Nb(){return document.getElementsByTagName("head")?.[0]??document}WI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Nb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rb("Browser");var ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,Mg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function y(){}y.prototype=v.prototype,b.D=v.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(_,T,R){for(var I=Array(arguments.length-2),it=2;it<arguments.length;it++)I[it-2]=arguments[it];return v.prototype[T].apply(_,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,y){y||(y=0);var _=Array(16);if(typeof v=="string")for(var T=0;16>T;++T)_[T]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(T=0;16>T;++T)_[T]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=b.g[0],y=b.g[1],T=b.g[2];var R=b.g[3],I=v+(R^y&(T^R))+_[0]+3614090360&4294967295;v=y+(I<<7&4294967295|I>>>25),I=R+(T^v&(y^T))+_[1]+3905402710&4294967295,R=v+(I<<12&4294967295|I>>>20),I=T+(y^R&(v^y))+_[2]+606105819&4294967295,T=R+(I<<17&4294967295|I>>>15),I=y+(v^T&(R^v))+_[3]+3250441966&4294967295,y=T+(I<<22&4294967295|I>>>10),I=v+(R^y&(T^R))+_[4]+4118548399&4294967295,v=y+(I<<7&4294967295|I>>>25),I=R+(T^v&(y^T))+_[5]+1200080426&4294967295,R=v+(I<<12&4294967295|I>>>20),I=T+(y^R&(v^y))+_[6]+2821735955&4294967295,T=R+(I<<17&4294967295|I>>>15),I=y+(v^T&(R^v))+_[7]+4249261313&4294967295,y=T+(I<<22&4294967295|I>>>10),I=v+(R^y&(T^R))+_[8]+1770035416&4294967295,v=y+(I<<7&4294967295|I>>>25),I=R+(T^v&(y^T))+_[9]+2336552879&4294967295,R=v+(I<<12&4294967295|I>>>20),I=T+(y^R&(v^y))+_[10]+4294925233&4294967295,T=R+(I<<17&4294967295|I>>>15),I=y+(v^T&(R^v))+_[11]+2304563134&4294967295,y=T+(I<<22&4294967295|I>>>10),I=v+(R^y&(T^R))+_[12]+1804603682&4294967295,v=y+(I<<7&4294967295|I>>>25),I=R+(T^v&(y^T))+_[13]+4254626195&4294967295,R=v+(I<<12&4294967295|I>>>20),I=T+(y^R&(v^y))+_[14]+2792965006&4294967295,T=R+(I<<17&4294967295|I>>>15),I=y+(v^T&(R^v))+_[15]+1236535329&4294967295,y=T+(I<<22&4294967295|I>>>10),I=v+(T^R&(y^T))+_[1]+4129170786&4294967295,v=y+(I<<5&4294967295|I>>>27),I=R+(y^T&(v^y))+_[6]+3225465664&4294967295,R=v+(I<<9&4294967295|I>>>23),I=T+(v^y&(R^v))+_[11]+643717713&4294967295,T=R+(I<<14&4294967295|I>>>18),I=y+(R^v&(T^R))+_[0]+3921069994&4294967295,y=T+(I<<20&4294967295|I>>>12),I=v+(T^R&(y^T))+_[5]+3593408605&4294967295,v=y+(I<<5&4294967295|I>>>27),I=R+(y^T&(v^y))+_[10]+38016083&4294967295,R=v+(I<<9&4294967295|I>>>23),I=T+(v^y&(R^v))+_[15]+3634488961&4294967295,T=R+(I<<14&4294967295|I>>>18),I=y+(R^v&(T^R))+_[4]+3889429448&4294967295,y=T+(I<<20&4294967295|I>>>12),I=v+(T^R&(y^T))+_[9]+568446438&4294967295,v=y+(I<<5&4294967295|I>>>27),I=R+(y^T&(v^y))+_[14]+3275163606&4294967295,R=v+(I<<9&4294967295|I>>>23),I=T+(v^y&(R^v))+_[3]+4107603335&4294967295,T=R+(I<<14&4294967295|I>>>18),I=y+(R^v&(T^R))+_[8]+1163531501&4294967295,y=T+(I<<20&4294967295|I>>>12),I=v+(T^R&(y^T))+_[13]+2850285829&4294967295,v=y+(I<<5&4294967295|I>>>27),I=R+(y^T&(v^y))+_[2]+4243563512&4294967295,R=v+(I<<9&4294967295|I>>>23),I=T+(v^y&(R^v))+_[7]+1735328473&4294967295,T=R+(I<<14&4294967295|I>>>18),I=y+(R^v&(T^R))+_[12]+2368359562&4294967295,y=T+(I<<20&4294967295|I>>>12),I=v+(y^T^R)+_[5]+4294588738&4294967295,v=y+(I<<4&4294967295|I>>>28),I=R+(v^y^T)+_[8]+2272392833&4294967295,R=v+(I<<11&4294967295|I>>>21),I=T+(R^v^y)+_[11]+1839030562&4294967295,T=R+(I<<16&4294967295|I>>>16),I=y+(T^R^v)+_[14]+4259657740&4294967295,y=T+(I<<23&4294967295|I>>>9),I=v+(y^T^R)+_[1]+2763975236&4294967295,v=y+(I<<4&4294967295|I>>>28),I=R+(v^y^T)+_[4]+1272893353&4294967295,R=v+(I<<11&4294967295|I>>>21),I=T+(R^v^y)+_[7]+4139469664&4294967295,T=R+(I<<16&4294967295|I>>>16),I=y+(T^R^v)+_[10]+3200236656&4294967295,y=T+(I<<23&4294967295|I>>>9),I=v+(y^T^R)+_[13]+681279174&4294967295,v=y+(I<<4&4294967295|I>>>28),I=R+(v^y^T)+_[0]+3936430074&4294967295,R=v+(I<<11&4294967295|I>>>21),I=T+(R^v^y)+_[3]+3572445317&4294967295,T=R+(I<<16&4294967295|I>>>16),I=y+(T^R^v)+_[6]+76029189&4294967295,y=T+(I<<23&4294967295|I>>>9),I=v+(y^T^R)+_[9]+3654602809&4294967295,v=y+(I<<4&4294967295|I>>>28),I=R+(v^y^T)+_[12]+3873151461&4294967295,R=v+(I<<11&4294967295|I>>>21),I=T+(R^v^y)+_[15]+530742520&4294967295,T=R+(I<<16&4294967295|I>>>16),I=y+(T^R^v)+_[2]+3299628645&4294967295,y=T+(I<<23&4294967295|I>>>9),I=v+(T^(y|~R))+_[0]+4096336452&4294967295,v=y+(I<<6&4294967295|I>>>26),I=R+(y^(v|~T))+_[7]+1126891415&4294967295,R=v+(I<<10&4294967295|I>>>22),I=T+(v^(R|~y))+_[14]+2878612391&4294967295,T=R+(I<<15&4294967295|I>>>17),I=y+(R^(T|~v))+_[5]+4237533241&4294967295,y=T+(I<<21&4294967295|I>>>11),I=v+(T^(y|~R))+_[12]+1700485571&4294967295,v=y+(I<<6&4294967295|I>>>26),I=R+(y^(v|~T))+_[3]+2399980690&4294967295,R=v+(I<<10&4294967295|I>>>22),I=T+(v^(R|~y))+_[10]+4293915773&4294967295,T=R+(I<<15&4294967295|I>>>17),I=y+(R^(T|~v))+_[1]+2240044497&4294967295,y=T+(I<<21&4294967295|I>>>11),I=v+(T^(y|~R))+_[8]+1873313359&4294967295,v=y+(I<<6&4294967295|I>>>26),I=R+(y^(v|~T))+_[15]+4264355552&4294967295,R=v+(I<<10&4294967295|I>>>22),I=T+(v^(R|~y))+_[6]+2734768916&4294967295,T=R+(I<<15&4294967295|I>>>17),I=y+(R^(T|~v))+_[13]+1309151649&4294967295,y=T+(I<<21&4294967295|I>>>11),I=v+(T^(y|~R))+_[4]+4149444226&4294967295,v=y+(I<<6&4294967295|I>>>26),I=R+(y^(v|~T))+_[11]+3174756917&4294967295,R=v+(I<<10&4294967295|I>>>22),I=T+(v^(R|~y))+_[2]+718787259&4294967295,T=R+(I<<15&4294967295|I>>>17),I=y+(R^(T|~v))+_[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(T+(I<<21&4294967295|I>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+R&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var y=v-this.blockSize,_=this.B,T=this.h,R=0;R<v;){if(T==0)for(;R<=y;)s(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<v;)if(_[T++]=b.charCodeAt(R++),T==this.blockSize){s(this,_),T=0;break}}else for(;R<v;)if(_[T++]=b[R++],T==this.blockSize){s(this,_),T=0;break}}this.h=T,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var y=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.u(b),b=Array(16),v=y=0;4>v;++v)for(var _=0;32>_;_+=8)b[y++]=this.g[v]>>>_&255;return b};function i(b,v){var y=l;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=v(b)}function o(b,v){this.h=v;for(var y=[],_=!0,T=b.length-1;0<=T;T--){var R=b[T]|0;_&&R==v||(y[T]=R,_=!1)}this.g=y}var l={};function c(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return V(h(-b));for(var v=[],y=1,_=0;b>=y;_++)v[_]=b/y|0,y*=4294967296;return new o(v,0)}function f(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return V(f(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(v,8)),_=p,T=0;T<b.length;T+=8){var R=Math.min(8,b.length-T),I=parseInt(b.substring(T,T+R),v);8>R?(R=h(Math.pow(v,R)),_=_.j(R).add(h(I))):(_=_.j(y),_=_.add(h(I)))}return _}var p=c(0),m=c(1),E=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-V(this).m();for(var b=0,v=1,y=0;y<this.g.length;y++){var _=this.i(y);b+=(0<=_?_:4294967296+_)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(k(this))return"-"+V(this).toString(b);for(var v=h(Math.pow(b,6)),y=this,_="";;){var T=q(y,v).g;y=F(y,T.j(v));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=T,S(y))return R+_;for(;6>R.length;)R="0"+R;_=R+_}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function k(b){return b.h==-1}t.l=function(b){return b=F(this,b),k(b)?-1:S(b)?0:1};function V(b){for(var v=b.g.length,y=[],_=0;_<v;_++)y[_]=~b.g[_];return new o(y,~b.h).add(m)}t.abs=function(){return k(this)?V(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],_=0,T=0;T<=v;T++){var R=_+(this.i(T)&65535)+(b.i(T)&65535),I=(R>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);_=I>>>16,R&=65535,I&=65535,y[T]=I<<16|R}return new o(y,y[y.length-1]&-2147483648?-1:0)};function F(b,v){return b.add(V(v))}t.j=function(b){if(S(this)||S(b))return p;if(k(this))return k(b)?V(this).j(V(b)):V(V(this).j(b));if(k(b))return V(this.j(V(b)));if(0>this.l(E)&&0>b.l(E))return h(this.m()*b.m());for(var v=this.g.length+b.g.length,y=[],_=0;_<2*v;_++)y[_]=0;for(_=0;_<this.g.length;_++)for(var T=0;T<b.g.length;T++){var R=this.i(_)>>>16,I=this.i(_)&65535,it=b.i(T)>>>16,Nt=b.i(T)&65535;y[2*_+2*T]+=I*Nt,D(y,2*_+2*T),y[2*_+2*T+1]+=R*Nt,D(y,2*_+2*T+1),y[2*_+2*T+1]+=I*it,D(y,2*_+2*T+1),y[2*_+2*T+2]+=R*it,D(y,2*_+2*T+2)}for(_=0;_<v;_++)y[_]=y[2*_+1]<<16|y[2*_];for(_=v;_<2*v;_++)y[_]=0;return new o(y,0)};function D(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function $(b,v){this.g=b,this.h=v}function q(b,v){if(S(v))throw Error("division by zero");if(S(b))return new $(p,p);if(k(b))return v=q(V(b),v),new $(V(v.g),V(v.h));if(k(v))return v=q(b,V(v)),new $(V(v.g),v.h);if(30<b.g.length){if(k(b)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,_=v;0>=_.l(b);)y=ie(y),_=ie(_);var T=ye(y,1),R=ye(_,1);for(_=ye(_,2),y=ye(y,2);!S(_);){var I=R.add(_);0>=I.l(b)&&(T=T.add(y),R=I),_=ye(_,1),y=ye(y,1)}return v=F(b,T.j(v)),new $(T,v)}for(T=p;0<=b.l(v);){for(y=Math.max(1,Math.floor(b.m()/v.m())),_=Math.ceil(Math.log(y)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),R=h(y),I=R.j(v);k(I)||0<I.l(b);)y-=_,R=h(y),I=R.j(v);S(R)&&(R=m),T=T.add(R),b=F(b,I)}return new $(T,b)}t.A=function(b){return q(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],_=0;_<v;_++)y[_]=this.i(_)&b.i(_);return new o(y,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],_=0;_<v;_++)y[_]=this.i(_)|b.i(_);return new o(y,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],_=0;_<v;_++)y[_]=this.i(_)^b.i(_);return new o(y,this.h^b.h)};function ie(b){for(var v=b.g.length+1,y=[],_=0;_<v;_++)y[_]=b.i(_)<<1|b.i(_-1)>>>31;return new o(y,b.h)}function ye(b,v){var y=v>>5;v%=32;for(var _=b.g.length-y,T=[],R=0;R<_;R++)T[R]=0<v?b.i(R+y)>>>v|b.i(R+y+1)<<32-v:b.i(R+y);return new o(T,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Mg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,dr=o}).apply(typeof ad<"u"?ad:typeof self<"u"?self:typeof window<"u"?window:{});var Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lg,ui,Fg,Ko,Ic,Ug,Bg,$g;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oo=="object"&&Oo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,g=!1,C={next:function(){if(!g&&d<a.length){var N=d++;return{value:u(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function m(a,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function E(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,C,N){for(var z=Array(arguments.length-2),De=2;De<arguments.length;De++)z[De-2]=arguments[De];return u.prototype[C].apply(g,z)}}function k(a){const u=a.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function V(a,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const C=a.length||0,N=g.length||0;a.length=C+N;for(let z=0;z<N;z++)a[C+z]=g[z]}else a.push(g)}}class F{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function D(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var ie=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function ye(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function b(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(a,u){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let N=0;N<y.length;N++)d=y[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function T(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Lt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class it{constructor(){this.h=this.g=null}add(u,d){const g=Nt.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Nt=new F(()=>new xe,a=>a.reset());class xe{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let de,Te=!1,Lt=new it,Yt=()=>{const a=l.Promise.resolve(void 0);de=()=>{a.then(jt)}};var jt=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){R(d)}var u=Nt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Te=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Wn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a})();function an(a,u){if(qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ie){e:{try{q(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Dt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&an.aa.h.call(this)}}S(an,qe);var Dt={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),J=0;function G(a,u,d,g,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=C,this.key=++J,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,u,d,g,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var z=A(a,u,g,C);return-1<z?(u=a[z],d||(u.fa=!1)):(u=new G(u,this.src,N,!!g,C),u.fa=d,a.push(u)),u};function w(a,u){var d=u.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,u,void 0),N;(N=0<=C)&&Array.prototype.splice.call(g,C,1),N&&(te(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function A(a,u,d,g){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==u&&N.capture==!!d&&N.ha==g)return C}return-1}var P="closure_lm_"+(1e6*Math.random()|0),x={};function B(a,u,d,g,C){if(Array.isArray(u)){for(var N=0;N<u.length;N++)B(a,u[N],d,g,C);return null}return d=he(d),a&&a[O]?a.K(u,d,h(g)?!!g.capture:!1,C):M(a,u,d,!1,g,C)}function M(a,u,d,g,C,N){if(!u)throw Error("Invalid event type");var z=h(C)?!!C.capture:!!C,De=Q(a);if(De||(a[P]=De=new Re(a)),d=De.add(u,d,g,z,N),d.proxy)return d;if(g=K(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Wn||(C=z),C===void 0&&(C=!1),a.addEventListener(u.toString(),g,C);else if(a.attachEvent)a.attachEvent(j(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function K(){function a(d){return u.call(a.src,a.listener,d)}const u=oe;return a}function W(a,u,d,g,C){if(Array.isArray(u))for(var N=0;N<u.length;N++)W(a,u[N],d,g,C);else g=h(g)?!!g.capture:!!g,d=he(d),a&&a[O]?(a=a.i,u=String(u).toString(),u in a.g&&(N=a.g[u],d=A(N,d,g,C),-1<d&&(te(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[u],a.h--)))):a&&(a=Q(a))&&(u=a.g[u.toString()],a=-1,u&&(a=A(u,d,g,C)),(d=-1<a?u[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[O])w(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(j(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Q(u))?(w(d,a),d.h==0&&(d.src=null,u[P]=null)):te(a)}}}function j(a){return a in x?x[a]:x[a]="on"+a}function oe(a,u){if(a.da)a=!0;else{u=new an(u,this);var d=a.listener,g=a.ha||a.src;a.fa&&H(a),a=d.call(g,u)}return a}function Q(a){return a=a[P],a instanceof Re?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(u){return a.handleEvent(u)}),a[ne])}function ae(){je.call(this),this.i=new Re(this),this.M=this,this.F=null}S(ae,je),ae.prototype[O]=!0,ae.prototype.removeEventListener=function(a,u,d,g){W(this,a,u,d,g)};function ge(a,u){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new qe(u,a);else if(u instanceof qe)u.target=u.target||a;else{var C=u;u=new qe(g,a),_(u,C)}if(C=!0,d)for(var N=d.length-1;0<=N;N--){var z=u.g=d[N];C=be(z,g,!0,u)&&C}if(z=u.g=a,C=be(z,g,!0,u)&&C,C=be(z,g,!1,u)&&C,d)for(N=0;N<d.length;N++)z=u.g=d[N],C=be(z,g,!1,u)&&C}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],g=0;g<d.length;g++)te(d[g]);delete a.g[u],a.h--}}this.F=null},ae.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},ae.prototype.L=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function be(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,N=0;N<u.length;++N){var z=u[N];if(z&&!z.da&&z.capture==d){var De=z.listener,ct=z.ha||z.src;z.fa&&w(a.i,z),C=De.call(ct,g)!==!1&&C}}return C&&!g.defaultPrevented}function ot(a,u,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function at(a){a.g=ot(()=>{a.g=null,a.i&&(a.i=!1,at(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class qt extends je{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:at(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pt(a){je.call(this),this.h=a,this.g={}}S(pt,je);var zn=[];function Ws(a){ye(a.g,function(u,d){this.g.hasOwnProperty(d)&&H(u)},a),a.g={}}pt.prototype.N=function(){pt.aa.N.call(this),Ws(this)},pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lt=l.JSON.stringify,Ht=l.JSON.parse,fo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Zr(){}Zr.prototype.h=null;function oh(a){return a.h||(a.h=a.i())}function ah(){}var zs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ml(){qe.call(this,"d")}S(ml,qe);function gl(){qe.call(this,"c")}S(gl,qe);var Cr={},lh=null;function po(){return lh=lh||new ae}Cr.La="serverreachability";function ch(a){qe.call(this,Cr.La,a)}S(ch,qe);function Ks(a){const u=po();ge(u,new ch(u))}Cr.STAT_EVENT="statevent";function uh(a,u){qe.call(this,Cr.STAT_EVENT,a),this.stat=u}S(uh,qe);function Pt(a){const u=po();ge(u,new uh(u,a))}Cr.Ma="timingevent";function hh(a,u){qe.call(this,Cr.Ma,a),this.size=u}S(hh,qe);function Gs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Qs(){this.g=!0}Qs.prototype.xa=function(){this.g=!1};function Oy(a,u,d,g,C,N){a.info(function(){if(a.g)if(N)for(var z="",De=N.split("&"),ct=0;ct<De.length;ct++){var Pe=De[ct].split("=");if(1<Pe.length){var mt=Pe[0];Pe=Pe[1];var gt=mt.split("_");z=2<=gt.length&&gt[1]=="type"?z+(mt+"="+Pe+"&"):z+(mt+"=redacted&")}}else z=null;else z=N;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+d+`
`+z})}function xy(a,u,d,g,C,N,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+d+`
`+N+" "+z})}function es(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ly(a,d)+(g?" "+g:"")})}function My(a,u){a.info(function(){return"TIMEOUT: "+u})}Qs.prototype.info=function(){};function Ly(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var z=1;z<C.length;z++)C[z]=""}}}}return lt(d)}catch{return u}}var mo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_l;function go(){}S(go,Zr),go.prototype.g=function(){return new XMLHttpRequest},go.prototype.i=function(){return{}},_l=new go;function Kn(a,u,d,g){this.j=a,this.i=u,this.l=d,this.R=g||1,this.U=new pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dh}function dh(){this.i=null,this.g="",this.h=!1}var ph={},yl={};function vl(a,u,d){a.L=1,a.v=Eo(In(u)),a.m=d,a.P=!0,mh(a,null)}function mh(a,u){a.F=Date.now(),_o(a),a.A=In(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Ch(d.i,"t",g),a.C=0,d=a.j.J,a.h=new dh,a.g=Kh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new qt(m(a.Y,a,a.g),a.O)),u=a.U,d=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(zn[0]=C.toString()),C=zn);for(var N=0;N<C.length;N++){var z=B(d,C[N],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ks(),Oy(a.i,a.u,a.A,a.l,a.R,a.m)}Kn.prototype.ca=function(a){a=a.target;const u=this.M;u&&An(a)==3?u.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const gt=An(this.g);var u=this.g.Ba();const rs=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Mh(this.g)))){this.J||gt!=4||u==7||(u==8||0>=rs?Ks(3):Ks(2)),El(this);var d=this.g.Z();this.X=d;t:if(gh(this)){var g=Mh(this.g);a="";var C=g.length,N=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),Ys(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(N&&u==C-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,xy(this.i,this.u,this.A,this.l,this.R,gt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var De,ct=this.g;if((De=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(De)){var Pe=De;break t}}Pe=null}if(d=Pe)es(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tl(this,d);else{this.o=!1,this.s=3,Pt(12),kr(this),Ys(this);break e}}if(this.P){d=!0;let Jt;for(;!this.J&&this.C<z.length;)if(Jt=Fy(this,z),Jt==yl){gt==4&&(this.s=4,Pt(14),d=!1),es(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==ph){this.s=4,Pt(15),es(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else es(this.i,this.l,Jt,null),Tl(this,Jt);if(gh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||z.length!=0||this.h.h||(this.s=1,Pt(16),d=!1),this.o=this.o&&d,!d)es(this.i,this.l,z,"[Invalid Chunked Response]"),kr(this),Ys(this);else if(0<z.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Rl(mt),mt.M=!0,Pt(11))}}else es(this.i,this.l,z,null),Tl(this,z);gt==4&&kr(this),this.o&&!this.J&&(gt==4?qh(this.j,this):(this.o=!1,_o(this)))}else tv(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),kr(this),Ys(this)}}}catch{}finally{}};function gh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Fy(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?yl:(d=Number(u.substring(d,g)),isNaN(d)?ph:(g+=1,g+d>u.length?yl:(u=u.slice(g,g+d),a.C=g+d,u)))}Kn.prototype.cancel=function(){this.J=!0,kr(this)};function _o(a){a.S=Date.now()+a.I,_h(a,a.I)}function _h(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Gs(m(a.ba,a),u)}function El(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(My(this.i,this.A),this.L!=2&&(Ks(),Pt(17)),kr(this),this.s=2,Ys(this)):_h(this,this.S-a)};function Ys(a){a.j.G==0||a.J||qh(a.j,a)}function kr(a){El(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ws(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Tl(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||wl(d.h,a))){if(!a.K&&wl(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)So(d),Ao(d);else break e;Sl(d),Pt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Gs(m(d.Za,d),6e3));if(1>=Eh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Nr(d,11)}else if((a.K||d.g==a)&&So(d),!D(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let Pe=C[u];if(d.T=Pe[0],Pe=Pe[1],d.G==2)if(Pe[0]=="c"){d.K=Pe[1],d.ia=Pe[2];const mt=Pe[3];mt!=null&&(d.la=mt,d.j.info("VER="+d.la));const gt=Pe[4];gt!=null&&(d.Aa=gt,d.j.info("SVER="+d.Aa));const rs=Pe[5];rs!=null&&typeof rs=="number"&&0<rs&&(g=1.5*rs,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Jt=a.g;if(Jt){const Po=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Po){var N=g.h;N.g||Po.indexOf("spdy")==-1&&Po.indexOf("quic")==-1&&Po.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Il(N,N.h),N.h=null))}if(g.D){const Pl=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pl&&(g.ya=Pl,Be(g.I,g.D,Pl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=a;if(g.qa=zh(g,g.J?g.ia:null,g.W),z.K){Th(g.h,z);var De=z,ct=g.L;ct&&(De.I=ct),De.B&&(El(De),_o(De)),g.g=z}else $h(g);0<d.i.length&&bo(d)}else Pe[0]!="stop"&&Pe[0]!="close"||Nr(d,7);else d.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Nr(d,7):bl(d):Pe[0]!="noop"&&d.l&&d.l.ta(Pe),d.v=0)}}Ks(4)}catch{}}var Uy=class{constructor(a,u){this.g=a,this.map=u}};function yh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Eh(a){return a.h?1:a.g?a.g.size:0}function wl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Il(a,u){a.g?a.g.add(u):a.h=u}function Th(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}yh.prototype.cancel=function(){if(this.i=wh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return k(a.i)}function By(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,g=0;g<d;g++)u.push(a[g]);return u}u=[],d=0;for(g in a)u[d++]=a[g];return u}function $y(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const g in a)u[d++]=g;return u}}}function Ih(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=$y(a),g=By(a),C=g.length,N=0;N<C;N++)u.call(void 0,g[N],d&&d[N],a)}var Ah=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jy(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),C=null;if(0<=g){var N=a[d].substring(0,g);C=a[d].substring(g+1)}else N=a[d];u(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vr){this.h=a.h,yo(this,a.j),this.o=a.o,this.g=a.g,vo(this,a.s),this.l=a.l;var u=a.i,d=new Zs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),bh(this,d),this.m=a.m}else a&&(u=String(a).match(Ah))?(this.h=!1,yo(this,u[1]||"",!0),this.o=Js(u[2]||""),this.g=Js(u[3]||"",!0),vo(this,u[4]),this.l=Js(u[5]||"",!0),bh(this,u[6]||"",!0),this.m=Js(u[7]||"")):(this.h=!1,this.i=new Zs(null,this.h))}Vr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Xs(u,Sh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Xs(u,Sh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Xs(d,d.charAt(0)=="/"?Wy:Hy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Xs(d,Ky)),a.join("")};function In(a){return new Vr(a)}function yo(a,u,d){a.j=d?Js(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function vo(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function bh(a,u,d){u instanceof Zs?(a.i=u,Gy(a.i,a.h)):(d||(u=Xs(u,zy)),a.i=new Zs(u,a.h))}function Be(a,u,d){a.i.set(u,d)}function Eo(a){return Be(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Js(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xs(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,qy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Sh=/[#\/\?@]/g,Hy=/[#\?:]/g,Wy=/[#\?]/g,zy=/[#\?@]/g,Ky=/#/g;function Zs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&jy(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Zs.prototype,t.add=function(a,u){Gn(this),this.i=null,a=ts(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Rh(a,u){Gn(a),u=ts(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Ph(a,u){return Gn(a),u=ts(a,u),a.g.has(u)}t.forEach=function(a,u){Gn(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(u,C,g,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const C=a[g];for(let N=0;N<C.length;N++)d.push(u[g])}return d},t.V=function(a){Gn(this);let u=[];if(typeof a=="string")Ph(this,a)&&(u=u.concat(this.g.get(ts(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Gn(this),this.i=null,a=ts(this,a),Ph(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Ch(a,u,d){Rh(a,u),0<d.length&&(a.i=null,a.g.set(ts(a,u),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const N=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var C=N;z[g]!==""&&(C+="="+encodeURIComponent(String(z[g]))),a.push(C)}}return this.i=a.join("&")};function ts(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Gy(a,u){u&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(d,g){var C=g.toLowerCase();g!=C&&(Rh(this,g),Ch(this,C,d))},a)),a.j=u}function Qy(a,u){const d=new Qs;if(l.Image){const g=new Image;g.onload=E(Qn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=E(Qn,d,"TestLoadImage: error",!1,u,g),g.onabort=E(Qn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=E(Qn,d,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Yy(a,u){const d=new Qs,g=new AbortController,C=setTimeout(()=>{g.abort(),Qn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(C),N.ok?Qn(d,"TestPingServer: ok",!0,u):Qn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Qn(d,"TestPingServer: error",!1,u)})}function Qn(a,u,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function Jy(){this.g=new fo}function Xy(a,u,d){const g=d||"";try{Ih(a,function(C,N){let z=C;h(C)&&(z=lt(C)),u.push(g+N+"="+encodeURIComponent(z))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function To(a){this.l=a.Ub||null,this.j=a.eb||!1}S(To,Zr),To.prototype.g=function(){return new wo(this.l,this.j)},To.prototype.i=(function(a){return function(){return a}})({});function wo(a,u){ae.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(wo,ae),t=wo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,ti(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function kh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ei(this):ti(this),this.readyState==3&&kh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ei(this))},t.Qa=function(a){this.g&&(this.response=a,ei(this))},t.ga=function(){this.g&&ei(this)};function ei(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ti(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function ti(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Vh(a){let u="";return ye(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function Al(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Vh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Be(a,u,d))}function We(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(We,ae);var Zy=/^https?$/i,ev=["POST","PUT"];t=We.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_l.g(),this.v=this.o?oh(this.o):oh(_l),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(N){Nh(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ev,u,void 0))||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,z]of d)this.g.setRequestHeader(N,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Nh(this,N)}};function Nh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Dh(a),Io(a)}function Dh(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),Io(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Io(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Oh(this):this.bb())},t.bb=function(){Oh(this)};function Oh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||An(a)!=4||a.Z()!=2)){if(a.u&&An(a)==4)ot(a.Ea,0,a);else if(ge(a,"readystatechange"),An(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=z===0){var C=String(a.D).match(Ah)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!Zy.test(C?C.toLowerCase():"")}d=g}if(d)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var N=2<An(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Dh(a)}}finally{Io(a)}}}}function Io(a,u){if(a.g){xh(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ge(a,"ready");try{d.onreadystatechange=g}catch{}}}function xh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function An(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Ht(u)}};function Mh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function tv(a){const u={};a=(a.g&&2<=An(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(D(a[g]))continue;var d=T(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=u[C]||[];u[C]=N,N.push(d)}b(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ni(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Lh(a){this.Aa=0,this.i=[],this.j=new Qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ni("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ni("baseRetryDelayMs",5e3,a),this.cb=ni("retryDelaySeedMs",1e4,a),this.Wa=ni("forwardChannelMaxRetries",2,a),this.wa=ni("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new yh(a&&a.concurrentRequestLimit),this.Da=new Jy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Lh.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,g){Pt(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=zh(this,null,this.W),bo(this)};function bl(a){if(Fh(a),a.G==3){var u=a.U++,d=In(a.I);if(Be(d,"SID",a.K),Be(d,"RID",u),Be(d,"TYPE","terminate"),ri(a,d),u=new Kn(a,a.j,u),u.L=2,u.v=Eo(In(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Kh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),_o(u)}Wh(a)}function Ao(a){a.g&&(Rl(a),a.g.cancel(),a.g=null)}function Fh(a){Ao(a),a.u&&(l.clearTimeout(a.u),a.u=null),So(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function bo(a){if(!vh(a.h)&&!a.s){a.s=!0;var u=a.Ga;de||Yt(),Te||(de(),Te=!0),Lt.add(u,a),a.B=0}}function nv(a,u){return Eh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Gs(m(a.Ga,a,u),Hh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Kn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),_(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Bh(this,C,u),d=In(this.I),Be(d,"RID",a),Be(d,"CVER",22),this.D&&Be(d,"X-HTTP-Session-Id",this.D),ri(this,d),N&&(this.O?u="headers="+encodeURIComponent(String(Vh(N)))+"&"+u:this.m&&Al(d,this.m,N)),Il(this.h,C),this.Ua&&Be(d,"TYPE","init"),this.P?(Be(d,"$req",u),Be(d,"SID","null"),C.T=!0,vl(C,d,null)):vl(C,d,u),this.G=2}}else this.G==3&&(a?Uh(this,a):this.i.length==0||vh(this.h)||Uh(this))};function Uh(a,u){var d;u?d=u.l:d=a.U++;const g=In(a.I);Be(g,"SID",a.K),Be(g,"RID",d),Be(g,"AID",a.T),ri(a,g),a.m&&a.o&&Al(g,a.m,a.o),d=new Kn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Bh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Il(a.h,d),vl(d,g,u)}function ri(a,u){a.H&&ye(a.H,function(d,g){Be(u,g,d)}),a.l&&Ih({},function(d,g){Be(u,g,d)})}function Bh(a,u,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const z=["count="+d];N==-1?0<d?(N=C[0].g,z.push("ofs="+N)):N=0:z.push("ofs="+N);let De=!0;for(let ct=0;ct<d;ct++){let Pe=C[ct].g;const mt=C[ct].map;if(Pe-=N,0>Pe)N=Math.max(0,C[ct].g-100),De=!1;else try{Xy(mt,z,"req"+Pe+"_")}catch{g&&g(mt)}}if(De){g=z.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,g}function $h(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;de||Yt(),Te||(de(),Te=!0),Lt.add(u,a),a.v=0}}function Sl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Gs(m(a.Fa,a),Hh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,jh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Gs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Ao(this),jh(this))};function Rl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function jh(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=In(a.qa);Be(u,"RID","rpc"),Be(u,"SID",a.K),Be(u,"AID",a.T),Be(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Be(u,"TO",a.ja),Be(u,"TYPE","xmlhttp"),ri(a,u),a.m&&a.o&&Al(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Eo(In(u)),d.m=null,d.P=!0,mh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ao(this),Sl(this),Pt(19))};function So(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function qh(a,u){var d=null;if(a.g==u){So(a),Rl(a),a.g=null;var g=2}else if(wl(a.h,u))d=u.D,Th(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;g=po(),ge(g,new hh(g,d)),bo(a)}else $h(a);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&nv(a,u)||g==2&&Sl(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),C){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function Hh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Nr(a,u){if(a.j.info("Error code "+u),u==2){var d=m(a.fb,a),g=a.Xa;const C=!g;g=new Vr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||yo(g,"https"),Eo(g),C?Qy(g.toString(),d):Yy(g.toString(),d)}else Pt(2);a.G=0,a.l&&a.l.sa(u),Wh(a),Fh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Wh(a){if(a.G=0,a.ka=[],a.l){const u=wh(a.h);(u.length!=0||a.i.length!=0)&&(V(a.ka,u),V(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function zh(a,u,d){var g=d instanceof Vr?In(d):new Vr(d);if(g.g!="")u&&(g.g=u+"."+g.g),vo(g,g.s);else{var C=l.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var N=new Vr(null);g&&yo(N,g),u&&(N.g=u),C&&vo(N,C),d&&(N.l=d),g=N}return d=a.D,u=a.ya,d&&u&&Be(g,d,u),Be(g,"VER",a.la),ri(a,g),g}function Kh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new We(new To({eb:d})):new We(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gh(){}t=Gh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ro(){}Ro.prototype.g=function(a,u){return new Ft(a,u)};function Ft(a,u){ae.call(this),this.g=new Lh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!D(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!D(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new ns(this)}S(Ft,ae),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){bl(this.g)},Ft.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=lt(a),a=d);u.i.push(new Uy(u.Ya++,a)),u.G==3&&bo(u)},Ft.prototype.N=function(){this.g.l=null,delete this.j,bl(this.g),delete this.g,Ft.aa.N.call(this)};function Qh(a){ml.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}S(Qh,ml);function Yh(){gl.call(this),this.status=1}S(Yh,gl);function ns(a){this.g=a}S(ns,Gh),ns.prototype.ua=function(){ge(this.g,"a")},ns.prototype.ta=function(a){ge(this.g,new Qh(a))},ns.prototype.sa=function(a){ge(this.g,new Yh)},ns.prototype.ra=function(){ge(this.g,"b")},Ro.prototype.createWebChannel=Ro.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,$g=function(){return new Ro},Bg=function(){return po()},Ug=Cr,Ic={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mo.NO_ERROR=0,mo.TIMEOUT=8,mo.HTTP_ERROR=6,Ko=mo,fh.COMPLETE="complete",Fg=fh,ah.EventType=zs,zs.OPEN="a",zs.CLOSE="b",zs.ERROR="c",zs.MESSAGE="d",ae.prototype.listen=ae.prototype.K,ui=ah,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,Lg=We}).apply(typeof Oo<"u"?Oo:typeof self<"u"?self:typeof window<"u"?window:{});const ld="@firebase/firestore",cd="4.9.1";/**
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
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
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
 */let Ls="12.2.0";/**
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
 */const Kr=new hu("@firebase/firestore");function as(){return Kr.logLevel}function X(t,...e){if(Kr.logLevel<=we.DEBUG){const n=e.map(wu);Kr.debug(`Firestore (${Ls}): ${t}`,...n)}}function Bn(t,...e){if(Kr.logLevel<=we.ERROR){const n=e.map(wu);Kr.error(`Firestore (${Ls}): ${t}`,...n)}}function bs(t,...e){if(Kr.logLevel<=we.WARN){const n=e.map(wu);Kr.warn(`Firestore (${Ls}): ${t}`,...n)}}function wu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,jg(t,r,n)}function jg(t,e,n){let r=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Bn(r),new Error(r)}function Ne(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||jg(e,s,r)}function me(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class On{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class qg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Db{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Et.UNAUTHENTICATED)))}shutdown(){}}class Ob{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class xb{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new On;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new On,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new On)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string",31837,{l:r}),new qg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string",2055,{h:e}),new Et(e)}}class Mb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Lb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Mb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Et.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ud{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ne(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ud(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ne(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ud(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Iu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ub(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Ac(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Kl(s)===Kl(i)?Ie(s,i):Kl(s)?1:-1}return Ie(t.length,e.length)}const Bb=55296,$b=57343;function Kl(t){const e=t.charCodeAt(0);return e>=Bb&&e<=$b}function Ss(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const hd="__name__";class un{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return un.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof un?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=un.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ie(e.length,n.length)}static compareSegments(e,n){const r=un.isNumericId(e),s=un.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?un.extractNumericId(e).compare(un.extractNumericId(n)):Ac(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Fe extends un{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Fe(n)}static emptyPath(){return new Fe([])}}const jb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends un{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return jb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hd}static keyField(){return new ft([hd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Fe.fromString(e))}static fromName(e){return new se(Fe.fromString(e).popFirst(5))}static empty(){return new se(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Fe(e.slice()))}}/**
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
 */function Hg(t,e,n){if(!n)throw new Y(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qb(t,e,n,r){if(e===!0&&r===!0)throw new Y(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fd(t){if(!se.isDocumentKey(t))throw new Y(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dd(t){if(se.isDocumentKey(t))throw new Y(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ka(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue(12329,{type:typeof t})}function $n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ka(t);throw new Y(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function ro(t,e){if(!Wg(t))throw new Y(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Y(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const pd=-62135596800,md=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*md);return new $e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<pd)throw new Y(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/md}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ro(e,$e._jsonSchema))return new $e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$e._jsonSchemaVersion="firestore/timestamp/1.0",$e._jsonSchema={type:Ze("string",$e._jsonSchemaVersion),seconds:Ze("number"),nanoseconds:Ze("number")};/**
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
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new $e(0,0))}static max(){return new pe(new $e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fi=-1;function Hb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new vr(s,se.empty(),e)}function Wb(t){return new vr(t.readTime,t.key,Fi)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(pe.min(),se.empty(),Fi)}static max(){return new vr(pe.max(),se.empty(),Fi)}}function zb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Fs(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==Kb)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):U.reject(n)}static resolve(e){return new U(((n,r)=>{n(e)}))}static reject(e){return new U(((n,r)=>{r(e)}))}static waitFor(e){return new U(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next((s=>s?U.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new U(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next((f=>{o[h]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new U(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function Qb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Us(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ga.ce=-1;/**
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
 */const Au=-1;function Qa(t){return t==null}function ya(t){return t===0&&1/t==-1/0}function Yb(t){return typeof t=="number"&&Number.isInteger(t)&&!ya(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const zg="";function Jb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=gd(e)),e=Xb(t.get(n),e);return gd(e)}function Xb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case zg:n+="";break;default:n+=i}}return n}function gd(t){return t+zg+""}/**
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
 */function _d(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xo(this.root,e,this.comparator,!0)}}class xo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yd(this.data.getIterator())}getIteratorFrom(e){return new yd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class yd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new $t([])}unionWith(e){let n=new tt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ss(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class Gg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gg("Invalid base64 string: "+i):i}})(e);return new dt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Zb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(Ne(!!t,39018),typeof t=="string"){let e=0;const n=Zb.exec(t);if(Ne(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="server_timestamp",Yg="__type__",Jg="__previous_value__",Xg="__local_write_time__";function bu(t){return(t?.mapValue?.fields||{})[Yg]?.stringValue===Qg}function Ya(t){const e=t.mapValue.fields[Jg];return bu(e)?Ya(e):e}function Ui(t){const e=Er(t.mapValue.fields[Xg].timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class eS{constructor(e,n,r,s,i,o,l,c,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const va="(default)";class Bi{constructor(e,n){this.projectId=e,this.database=n||va}static empty(){return new Bi("","")}get isDefaultDatabase(){return this.database===va}isEqual(e){return e instanceof Bi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="__type__",tS="__max__",Mo={mapValue:{}},e_="__vector__",Ea="value";function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bu(t)?4:rS(t)?9007199254740991:nS(t)?10:11:ue(28295,{value:t})}function wn(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ui(t).isEqual(Ui(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Er(s.timestampValue),l=Er(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),l=ze(i.doubleValue);return o===l?ya(o)===ya(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Ss(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(_d(o)!==_d(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!wn(o[c],l[c])))return!1;return!0})(t,e);default:return ue(52216,{left:t})}}function $i(t,e){return(t.values||[]).find((n=>wn(n,e)))!==void 0}function Rs(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=ze(i.integerValue||i.doubleValue),c=ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return vd(t.timestampValue,e.timestampValue);case 4:return vd(Ui(t),Ui(e));case 5:return Ac(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Tr(i),c=Tr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Ie(l[h],c[h]);if(f!==0)return f}return Ie(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Ie(ze(i.latitude),ze(o.latitude));return l!==0?l:Ie(ze(i.longitude),ze(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Ed(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const l=i.fields||{},c=o.fields||{},h=l[Ea]?.arrayValue,f=c[Ea]?.arrayValue,p=Ie(h?.values?.length||0,f?.values?.length||0);return p!==0?p:Ed(h,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Mo.mapValue&&o===Mo.mapValue)return 0;if(i===Mo.mapValue)return 1;if(o===Mo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Ac(c[p],f[p]);if(m!==0)return m;const E=Rs(l[c[p]],h[f[p]]);if(E!==0)return E}return Ie(c.length,f.length)})(t.mapValue,e.mapValue);default:throw ue(23264,{he:n})}}function vd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Er(t),r=Er(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function Ed(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Rs(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function Ps(t){return bc(t)}function bc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Tr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return se.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=bc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${bc(n.fields[o])}`;return s+"}"})(t.mapValue):ue(61005,{value:t})}function Go(t){switch(wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ya(t);return e?16+Go(e):16;case 5:return 2*t.stringValue.length;case 6:return Tr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Go(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Rr(r.fields,((i,o)=>{s+=i.length+Go(o)})),s})(t.mapValue);default:throw ue(13486,{value:t})}}function Td(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sc(t){return!!t&&"integerValue"in t}function Su(t){return!!t&&"arrayValue"in t}function wd(t){return!!t&&"nullValue"in t}function Id(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qo(t){return!!t&&"mapValue"in t}function nS(t){return(t?.mapValue?.fields||{})[Zg]?.stringValue===e_}function Ii(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ii(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ii(t.arrayValue.values[n]);return e}return{...t}}function rS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===tS}/**
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
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ii(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ii(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Qo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Mt(Ii(this.value))}}function t_(t){const e=[];return Rr(t.fields,((n,r)=>{const s=new ft([n]);if(Qo(r)){const i=t_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new $t(e)}/**
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
 */class It{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new It(e,0,pe.min(),pe.min(),pe.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,s){return new It(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new It(e,2,n,pe.min(),pe.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new It(e,3,n,pe.min(),pe.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ta{constructor(e,n){this.position=e,this.inclusive=n}}function Ad(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function bd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function sS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class n_{}class Xe extends n_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oS(e,n,r):n==="array-contains"?new cS(e,r):n==="in"?new uS(e,r):n==="not-in"?new hS(e,r):n==="array-contains-any"?new fS(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aS(e,r):new lS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Rs(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends n_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new rn(e,n)}matches(e){return r_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function r_(t){return t.op==="and"}function s_(t){return iS(t)&&r_(t)}function iS(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function Rc(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Ps(t.value);if(s_(t))return t.filters.map((e=>Rc(e))).join(",");{const e=t.filters.map((n=>Rc(n))).join(",");return`${t.op}(${e})`}}function i_(t,e){return t instanceof Xe?(function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&wn(r.value,s.value)})(t,e):t instanceof rn?(function(r,s){return s instanceof rn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&i_(o,s.filters[l])),!0):!1})(t,e):void ue(19439)}function o_(t){return t instanceof Xe?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ps(n.value)}`})(t):t instanceof rn?(function(n){return n.op.toString()+" {"+n.getFilters().map(o_).join(" ,")+"}"})(t):"Filter"}class oS extends Xe{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class aS extends Xe{constructor(e,n){super(e,"in",n),this.keys=a_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class lS extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=a_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function a_(t,e){return(e.arrayValue?.values||[]).map((n=>se.fromName(n.referenceValue)))}class cS extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Su(n)&&$i(n.arrayValue,this.value)}}class uS extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$i(this.value.arrayValue,n)}}class hS extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if($i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$i(this.value.arrayValue,n)}}class fS extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Su(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>$i(this.value.arrayValue,r)))}}/**
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
 */class dS{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Sd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new dS(t,e,n,r,s,i,o)}function Ru(t){const e=me(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Rc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Qa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ps(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ps(r))).join(",")),e.Te=n}return e.Te}function Pu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!i_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bd(t.startAt,e.startAt)&&bd(t.endAt,e.endAt)}function Pc(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class so{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function pS(t,e,n,r,s,i,o,l){return new so(t,e,n,r,s,i,o,l)}function Cu(t){return new so(t)}function Rd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function l_(t){return t.collectionGroup!==null}function Ai(t){const e=me(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new tt(ft.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new wa(i,r))})),n.has(ft.keyField().canonicalString())||e.Ie.push(new wa(ft.keyField(),r))}return e.Ie}function gn(t){const e=me(t);return e.Ee||(e.Ee=mS(e,Ai(t))),e.Ee}function mS(t,e){if(t.limitType==="F")return Sd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new wa(s.field,i)}));const n=t.endAt?new Ta(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ta(t.startAt.position,t.startAt.inclusive):null;return Sd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cc(t,e){const n=t.filters.concat([e]);return new so(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kc(t,e,n){return new so(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ja(t,e){return Pu(gn(t),gn(e))&&t.limitType===e.limitType}function c_(t){return`${Ru(gn(t))}|lt:${t.limitType}`}function ls(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>o_(s))).join(", ")}]`),Qa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ps(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ps(s))).join(",")),`Target(${r})`})(gn(t))}; limitType=${t.limitType})`}function Xa(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const h=Ad(o,l,c);return o.inclusive?h<=0:h<0})(r.startAt,Ai(r),s)||r.endAt&&!(function(o,l,c){const h=Ad(o,l,c);return o.inclusive?h>=0:h>0})(r.endAt,Ai(r),s))})(t,e)}function gS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function u_(t){return(e,n)=>{let r=!1;for(const s of Ai(t)){const i=_S(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _S(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Rs(c,h):ue(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue(19790,{direction:t.dir})}}/**
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
 */class Jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Kg(this.inner)}size(){return this.innerSize}}/**
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
 */const yS=new He(se.comparator);function jn(){return yS}const h_=new He(se.comparator);function hi(...t){let e=h_;for(const n of t)e=e.insert(n.key,n);return e}function f_(t){let e=h_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Fr(){return bi()}function d_(){return bi()}function bi(){return new Jr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const vS=new He(se.comparator),ES=new tt(se.comparator);function Ae(...t){let e=ES;for(const n of t)e=e.add(n);return e}const TS=new tt(Ie);function wS(){return TS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ya(e)?"-0":e}}function p_(t){return{integerValue:""+t}}function IS(t,e){return Yb(e)?p_(e):ku(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this._=void 0}}function AS(t,e,n){return t instanceof Ia?(function(s,i){const o={fields:{[Yg]:{stringValue:Qg},[Xg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&bu(i)&&(i=Ya(i)),i&&(o.fields[Jg]=i),{mapValue:o}})(n,e):t instanceof ji?g_(t,e):t instanceof qi?__(t,e):(function(s,i){const o=m_(s,i),l=Pd(o)+Pd(s.Ae);return Sc(o)&&Sc(s.Ae)?p_(l):ku(s.serializer,l)})(t,e)}function bS(t,e,n){return t instanceof ji?g_(t,e):t instanceof qi?__(t,e):n}function m_(t,e){return t instanceof Aa?(function(r){return Sc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ia extends Za{}class ji extends Za{constructor(e){super(),this.elements=e}}function g_(t,e){const n=y_(e);for(const r of t.elements)n.some((s=>wn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class qi extends Za{constructor(e){super(),this.elements=e}}function __(t,e){let n=y_(e);for(const r of t.elements)n=n.filter((s=>!wn(s,r)));return{arrayValue:{values:n}}}class Aa extends Za{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Pd(t){return ze(t.integerValue||t.doubleValue)}function y_(t){return Su(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function SS(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof ji&&s instanceof ji||r instanceof qi&&s instanceof qi?Ss(r.elements,s.elements,wn):r instanceof Aa&&s instanceof Aa?wn(r.Ae,s.Ae):r instanceof Ia&&s instanceof Ia})(t.transform,e.transform)}class RS{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class el{}function v_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new T_(t.key,_n.none()):new io(t.key,t.data,_n.none());{const n=t.data,r=Mt.empty();let s=new tt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Pr(t.key,r,new $t(s.toArray()),_n.none())}}function PS(t,e,n){t instanceof io?(function(s,i,o){const l=s.value.clone(),c=kd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Pr?(function(s,i,o){if(!Yo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=kd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(E_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Si(t,e,n,r){return t instanceof io?(function(i,o,l,c){if(!Yo(i.precondition,o))return l;const h=i.value.clone(),f=Vd(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof Pr?(function(i,o,l,c){if(!Yo(i.precondition,o))return l;const h=Vd(i.fieldTransforms,c,o),f=o.data;return f.setAll(E_(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return Yo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function CS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=m_(r.transform,s||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function Cd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ss(r,s,((i,o)=>SS(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class io extends el{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pr extends el{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function E_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function kd(t,e,n){const r=new Map;Ne(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,bS(o,l,n[s]))}return r}function Vd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,AS(i,o,e))}return r}class T_ extends el{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kS extends el{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class VS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&PS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=d_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=v_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ae())}isEqual(e){return this.batchId===e.batchId&&Ss(this.mutations,e.mutations,((n,r)=>Cd(n,r)))&&Ss(this.baseMutations,e.baseMutations,((n,r)=>Cd(n,r)))}}class Vu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return vS})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Vu(e,n,r,s)}}/**
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
 */class NS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class DS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ye,Se;function OS(t){switch(t){case L.OK:return ue(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return ue(15467,{code:t})}}function w_(t){if(t===void 0)return Bn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ye.OK:return L.OK;case Ye.CANCELLED:return L.CANCELLED;case Ye.UNKNOWN:return L.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return L.INTERNAL;case Ye.UNAVAILABLE:return L.UNAVAILABLE;case Ye.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ye.NOT_FOUND:return L.NOT_FOUND;case Ye.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ye.ABORTED:return L.ABORTED;case Ye.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ye.DATA_LOSS:return L.DATA_LOSS;default:return ue(39323,{code:t})}}(Se=Ye||(Ye={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xS(){return new TextEncoder}/**
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
 */const MS=new dr([4294967295,4294967295],0);function Nd(t){const e=xS().encode(t),n=new Mg;return n.update(e),new Uint8Array(n.digest())}function Dd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([n,r],0),new dr([s,i],0)]}class Nu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fi(`Invalid padding: ${n}`);if(r<0)throw new fi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=dr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(dr.fromNumber(r)));return s.compare(MS)===1&&(s=new dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Nd(e),[r,s]=Dd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nu(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=Nd(e),[r,s]=Dd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,oo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tl(pe.min(),s,new He(Ie),jn(),Ae())}}class oo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oo(r,n,Ae(),Ae(),Ae())}}/**
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
 */class Jo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class I_{constructor(e,n){this.targetId=e,this.Ce=n}}class A_{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Od{constructor(){this.ve=0,this.Fe=xd(),this.Me=dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ae(),n=Ae(),r=Ae();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue(38017,{changeType:i})}})),new oo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=xd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ne(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class LS{constructor(e){this.Ge=e,this.ze=new Map,this.je=jn(),this.Je=Lo(),this.He=Lo(),this.Ye=new He(Ie)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ue(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Pc(i))if(r===0){const o=new se(i.path);this.et(n,o,It.newNoDocument(o,pe.min()))}else Ne(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Tr(r).toUint8Array()}catch(c){if(c instanceof Gg)return bs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Nu(o,s,i)}catch(c){return bs(c instanceof fi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Pc(l.target)){const c=new se(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,It.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Ae();this.He.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new tl(e,n,this.Ye,this.je,r);return this.je=jn(),this.Je=Lo(),this.He=Lo(),this.Ye=new He(Ie),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Od,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new tt(Ie),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new tt(Ie),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Od),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Lo(){return new He(se.comparator)}function xd(){return new He(se.comparator)}const FS={asc:"ASCENDING",desc:"DESCENDING"},US={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BS={and:"AND",or:"OR"};class $S{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vc(t,e){return t.useProto3Json||Qa(e)?e:{value:e}}function ba(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function b_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jS(t,e){return ba(t,e.toTimestamp())}function yn(t){return Ne(!!t,49232),pe.fromTimestamp((function(n){const r=Er(n);return new $e(r.seconds,r.nanos)})(t))}function Du(t,e){return Nc(t,e).canonicalString()}function Nc(t,e){const n=(function(s){return new Fe(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function S_(t){const e=Fe.fromString(t);return Ne(V_(e),10190,{key:e.toString()}),e}function Dc(t,e){return Du(t.databaseId,e.path)}function Gl(t,e){const n=S_(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(P_(n))}function R_(t,e){return Du(t.databaseId,e)}function qS(t){const e=S_(t);return e.length===4?Fe.emptyPath():P_(e)}function Oc(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function P_(t){return Ne(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Md(t,e,n){return{name:Dc(t,e),fields:n.value.mapValue.fields}}function HS(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ue(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(Ne(f===void 0||typeof f=="string",58123),dt.fromBase64String(f||"")):(Ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),dt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(h){const f=h.code===void 0?L.UNKNOWN:w_(h.code);return new Y(f,h.message||"")})(o);n=new A_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gl(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):pe.min(),l=new Mt({mapValue:{fields:r.document.fields}}),c=It.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Jo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gl(t,r.document),i=r.readTime?yn(r.readTime):pe.min(),o=It.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Jo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gl(t,r.document),i=r.removedTargetIds||[];n=new Jo([],i,s,null)}else{if(!("filter"in e))return ue(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new DS(s,i),l=r.targetId;n=new I_(l,o)}}return n}function WS(t,e){let n;if(e instanceof io)n={update:Md(t,e.key,e.value)};else if(e instanceof T_)n={delete:Dc(t,e.key)};else if(e instanceof Pr)n={update:Md(t,e.key,e.data),updateMask:eR(e.fieldMask)};else{if(!(e instanceof kS))return ue(16599,{Vt:e.type});n={verify:Dc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof Ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ji)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Aa)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ue(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:jS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue(27497)})(t,e.precondition)),n}function zS(t,e){return t&&t.length>0?(Ne(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(pe.min())&&(o=yn(i)),new RS(o,s.transformResults||[])})(n,e)))):[]}function KS(t,e){return{documents:[R_(t,e.path)]}}function GS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=R_(t,s);const i=(function(h){if(h.length!==0)return k_(rn.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(m){return{field:cs(m.field),direction:JS(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Vc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function QS(t){let e=qS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=C_(p);return m instanceof rn&&s_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(S){return new wa(us(S.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Qa(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,E=p.values||[];return new Ta(E,m)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const m=!p.before,E=p.values||[];return new Ta(E,m)})(n.endAt)),pS(e,s,o,i,l,"F",c,h)}function YS(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function C_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=us(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Xe.create(us(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return rn.create(n.compositeFilter.filters.map((r=>C_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue(1026)}})(n.compositeFilter.op))})(t):ue(30097,{filter:t})}function JS(t){return FS[t]}function XS(t){return US[t]}function ZS(t){return BS[t]}function cs(t){return{fieldPath:t.canonicalString()}}function us(t){return ft.fromServerFormat(t.fieldPath)}function k_(t){return t instanceof Xe?(function(n){if(n.op==="=="){if(Id(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NAN"}};if(wd(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Id(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NAN"}};if(wd(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(n.field),op:XS(n.op),value:n.value}}})(t):t instanceof rn?(function(n){const r=n.getFilters().map((s=>k_(s)));return r.length===1?r[0]:{compositeFilter:{op:ZS(n.op),filters:r}}})(t):ue(54877,{filter:t})}function eR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function V_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ar{constructor(e,n,r,s,i=pe.min(),o=pe.min(),l=dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class tR{constructor(e){this.yt=e}}function nR(t){const e=QS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kc(e,e.limit,"L"):e}/**
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
 */class rR{constructor(){this.Cn=new sR}addToCollectionParentIndex(e,n){return this.Cn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(vr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class sR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},N_=41943040;class Ot{static withCacheSize(e){return new Ot(e,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(N_,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);/**
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
 */class Cs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Cs(0)}static cr(){return new Cs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="LruGarbageCollector",iR=1048576;function Ud([t,e],[n,r]){const s=Ie(t,n);return s===0?Ie(e,r):s}class oR{constructor(e){this.Ir=e,this.buffer=new tt(Ud),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ud(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class aR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(Fd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Us(n)?X(Fd,"Ignoring IndexedDB error during garbage collection: ",n):await Fs(n)}await this.Vr(3e5)}))}}class lR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return U.resolve(Ga.ce);const r=new oR(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(Ld)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ld):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),as()<=we.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function cR(t,e){return new lR(t,e)}/**
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
 */class uR{constructor(){this.changes=new Jr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class hR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class fR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Si(r.mutation,s,$t.empty(),$e.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ae()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ae()){const s=Fr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=hi();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ae())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=jn();const o=bi(),l=(function(){return bi()})();return n.forEach(((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Pr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Si(f.mutation,h,f.mutation.getFieldMask(),$e.now())):o.set(h.key,$t.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((h,f)=>o.set(h,f))),n.forEach(((h,f)=>l.set(h,new hR(f,o.get(h)??null)))),l)))}recalculateAndSaveOverlays(e,n){const r=bi();let s=new He(((o,l)=>o-l)),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||$t.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||Ae()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=d_();f.forEach((m=>{if(!i.has(m)){const E=v_(n.get(m),r.get(m));E!==null&&p.set(m,E),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):l_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Fr());let l=Fi,c=i;return o.next((h=>U.forEach(h,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,c,h,Ae()))).next((f=>({batchId:l,changes:f_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next((r=>{let s=hi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=hi();return this.indexManager.getCollectionParents(e,i).next((l=>U.forEach(l,(c=>{const h=(function(p,m){return new so(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,It.newInvalidDocument(f)))}));let l=hi();return o.forEach(((c,h)=>{const f=i.get(c);f!==void 0&&Si(f.mutation,h,$t.empty(),$e.now()),Xa(n,h)&&(l=l.insert(c,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return U.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}})(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:nR(s.bundledQuery),readTime:yn(s.readTime)}})(n)),U.resolve()}}/**
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
 */class pR{constructor(){this.overlays=new He(se.comparator),this.qr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return U.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Fr(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Fr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Fr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=s)););return U.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NS(n,r));let i=this.qr.get(n);i===void 0&&(i=Ae(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class Ou{constructor(){this.Qr=new tt(nt.$r),this.Ur=new tt(nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new nt(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new se(new Fe([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new se(new Fe([])),r=new nt(n,e),s=new nt(n,e+1);let i=Ae();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new nt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return se.comparator(e.key,n.key)||Ie(e.Yr,n.Yr)}static Kr(e,n){return Ie(e.Yr,n.Yr)||se.comparator(e.key,n.key)}}/**
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
 */class gR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new tt(nt.$r)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VS(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Au:this.tr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const l=this.Xr(o.Yr);i.push(l)})),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(Ie);return n.forEach((s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(l=>{r=r.add(l.Yr)}))})),U.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new nt(new se(i),0);let l=new tt(Ie);return this.Zr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Yr)),!0)}),o),U.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ne(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return U.forEach(n.mutations,(s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new nt(n,0),s=this.Zr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _R{constructor(e){this.ri=e,this.docs=(function(){return new He(se.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():It.newInvalidDocument(s))})),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=jn();const o=n.path,l=new se(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||zb(Wb(f),r)<=0||(s.has(f.key)||Xa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue(9500)}ii(e,n){return U.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new yR(this)}getSize(e){return U.resolve(this.size)}}class yR extends uR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),U.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class vR{constructor(e){this.persistence=e,this.si=new Jr((n=>Ru(n)),Pu),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Ou,this.targetCount=0,this.ai=Cs.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),U.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Pr(n),U.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),U.waitFor(i).next((()=>s))}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this._i.containsKey(n))}}/**
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
 */class D_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ga(0),this.li=!1,this.li=!0,this.hi=new mR,this.referenceDelegate=e(this),this.Pi=new vR(this),this.indexManager=new rR,this.remoteDocumentCache=(function(s){return new _R(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new tR(n),this.Ii=new dR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new gR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new ER(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return U.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class ER extends Gb{constructor(e){super(),this.currentSequenceNumber=e}}class xu{constructor(e){this.persistence=e,this.Ri=new Ou,this.Vi=null}static mi(e){return new xu(e)}get fi(){if(this.Vi)return this.Vi;throw ue(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),U.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.fi,(r=>{const s=se.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,pe.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Sa{constructor(e,n){this.persistence=e,this.pi=new Jr((r=>Jb(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=cR(this,n)}static mi(e,n){return new Sa(e,n)}Ei(){}di(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return U.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?U.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((l=>{l||(r++,i.removeEntry(o,pe.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Go(e.data.value)),n}br(e,n,r){return U.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Mu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Mu(e,n.fromCache,r,s)}}/**
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
 */class TR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return XT()?8:Qb(Rt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new TR;return this.Ss(e,n,o).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(as()<=we.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),U.resolve()):(as()<=we.DEBUG&&X("QueryEngine","Query:",ls(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(as()<=we.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):U.resolve())}ys(e,n){if(Rd(n))return U.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=kc(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ae(...i);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const h=this.Ds(n,l);return this.Cs(n,h,o,c.readTime)?this.ys(e,kc(n,null,"F")):this.vs(e,h,n,c)}))))})))))}ws(e,n,r,s){return Rd(n)||s.isEqual(pe.min())?U.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?U.resolve(null):(as()<=we.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ls(n)),this.vs(e,o,n,Hb(s,Fi)).next((l=>l)))}))}Ds(e,n){let r=new tt(u_(e));return n.forEach(((s,i)=>{Xa(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return as()<=we.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ls(n)),this.ps.getDocumentsMatchingQuery(e,n,vr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="LocalStore",IR=3e8;class AR{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new He(Ie),this.xs=new Jr((i=>Ru(i)),Pu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function bR(t,e,n,r){return new AR(t,e,n,r)}async function O_(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Ae();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((h=>({Ls:h,removedBatchIds:o,addedBatchIds:l})))}))}))}function SR(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,h,f){const p=h.batch,m=p.keys();let E=U.resolve();return m.forEach((S=>{E=E.next((()=>f.getEntry(c,S))).next((k=>{const V=h.docVersions.get(S);Ne(V!==null,48541),k.version.compareTo(V)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))}))})),E.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Ae();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function x_(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function RR(t,e){const n=me(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let E=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(dt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(p,E),(function(k,V,F){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=IR?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(m,E,f)&&l.push(n.Pi.updateTargetData(i,E))}));let c=jn(),h=Ae();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(PR(i,o,e.documentUpdates).next((f=>{c=f.ks,h=f.qs}))),!r.isEqual(pe.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return U.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(n.Ms=s,i)))}function PR(t,e,n){let r=Ae(),s=Ae();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=jn();return n.forEach(((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X(Lu,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{ks:o,qs:s}}))}function CR(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Au),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function kR(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,U.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function xc(t,e,n){const r=me(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Us(o))throw o;X(Lu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Bd(t,e,n){const r=me(t);let s=pe.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,h,f){const p=me(c),m=p.xs.get(f);return m!==void 0?U.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,f)})(r,o,gn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Ae()))).next((l=>(VR(r,gS(e),l),{documents:l,Qs:i})))))}function VR(t,e,n){let r=t.Os.get(e)||pe.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class $d{constructor(){this.activeTargetIds=wS()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NR{constructor(){this.Mo=new $d,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new $d,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class DR{Oo(e){}shutdown(){}}/**
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
 */const jd="ConnectivityMonitor";class qd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(jd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(jd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Fo=null;function Mc(){return Fo===null?Fo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Fo++,"0x"+Fo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="RestConnection",OR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===va?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Mc(),l=this.zo(e,n.toUriEncodedString());X(Ql,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:h}=new URL(l),f=Os(h);return this.Jo(e,l,c,r,f).then((p=>(X(Ql,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw bs(Ql,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ls})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=OR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class MR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const _t="WebChannelConnection";class LR extends xR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Mc();return new Promise(((l,c)=>{const h=new Lg;h.setWithCredentials(!0),h.listenOnce(Fg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Ko.NO_ERROR:const p=h.getResponseJson();X(_t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ko.TIMEOUT:X(_t,`RPC '${e}' ${o} timed out`),c(new Y(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const m=h.getStatus();if(X(_t,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const S=E?.error;if(S&&S.status&&S.message){const k=(function(F){const D=F.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(D)>=0?D:L.UNKNOWN})(S.status);c(new Y(k,S.message))}else c(new Y(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new Y(L.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{X(_t,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);X(_t,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Mc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$g(),l=Bg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");X(_t,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.I_(p);let m=!1,E=!1;const S=new MR({Yo:V=>{E?X(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(m||(X(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(_t,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Zo:()=>p.close()}),k=(V,F,D)=>{V.listen(F,($=>{try{D($)}catch(q){setTimeout((()=>{throw q}),0)}}))};return k(p,ui.EventType.OPEN,(()=>{E||(X(_t,`RPC '${e}' stream ${s} transport opened.`),S.o_())})),k(p,ui.EventType.CLOSE,(()=>{E||(E=!0,X(_t,`RPC '${e}' stream ${s} transport closed`),S.a_(),this.E_(p))})),k(p,ui.EventType.ERROR,(V=>{E||(E=!0,bs(_t,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),S.a_(new Y(L.UNAVAILABLE,"The operation could not be completed")))})),k(p,ui.EventType.MESSAGE,(V=>{if(!E){const F=V.data[0];Ne(!!F,16349);const D=F,$=D?.error||D[0]?.error;if($){X(_t,`RPC '${e}' stream ${s} received error:`,$);const q=$.status;let ie=(function(v){const y=Ye[v];if(y!==void 0)return w_(y)})(q),ye=$.message;ie===void 0&&(ie=L.INTERNAL,ye="Unknown error status: "+q+" with message "+$.message),E=!0,S.a_(new Y(ie,ye)),p.close()}else X(_t,`RPC '${e}' stream ${s} received:`,F),S.u_(F)}})),k(l,Ug.STAT_EVENT,(V=>{V.stat===Ic.PROXY?X(_t,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===Ic.NOPROXY&&X(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Yl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t){return new $S(t,!0)}/**
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
 */class M_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Hd="PersistentStream";class L_{constructor(e,n,r,s,i,o,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new M_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new Y(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return X(Hd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(X(Hd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class FR extends L_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=HS(this.serializer,e),r=(function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?yn(o.readTime):pe.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Oc(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Pc(c)?{documents:KS(i,c)}:{query:GS(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=b_(i,o.resumeToken);const h=Vc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=ba(i,o.snapshotVersion.toTimestamp());const h=Vc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=YS(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Oc(this.serializer),n.removeTarget=e,this.q_(n)}}class UR extends L_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=zS(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Oc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>WS(this.serializer,r)))};this.q_(n)}}/**
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
 */class BR{}class $R extends BR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Y(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Nc(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(L.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,Nc(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(L.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class jR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Bn(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Gr="RemoteStore";class qR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{Xr(this)&&(X(Gr,"Restarting streams for network reachability change."),await(async function(c){const h=me(c);h.Ea.add(4),await ao(h),h.Ra.set("Unknown"),h.Ea.delete(4),await rl(h)})(this))}))})),this.Ra=new jR(r,s)}}async function rl(t){if(Xr(t))for(const e of t.da)await e(!0)}async function ao(t){for(const e of t.da)await e(!1)}function F_(t,e){const n=me(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),$u(n)?Bu(n):Bs(n).O_()&&Uu(n,e))}function Fu(t,e){const n=me(t),r=Bs(n);n.Ia.delete(e),r.O_()&&U_(n,e),n.Ia.size===0&&(r.O_()?r.L_():Xr(n)&&n.Ra.set("Unknown"))}function Uu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bs(t).Y_(e)}function U_(t,e){t.Va.Ue(e),Bs(t).Z_(e)}function Bu(t){t.Va=new LS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Bs(t).start(),t.Ra.ua()}function $u(t){return Xr(t)&&!Bs(t).x_()&&t.Ia.size>0}function Xr(t){return me(t).Ea.size===0}function B_(t){t.Va=void 0}async function HR(t){t.Ra.set("Online")}async function WR(t){t.Ia.forEach(((e,n)=>{Uu(t,e)}))}async function zR(t,e){B_(t),$u(t)?(t.Ra.ha(e),Bu(t)):t.Ra.set("Unknown")}async function KR(t,e,n){if(t.Ra.set("Online"),e instanceof A_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))})(t,e)}catch(r){X(Gr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ra(t,r)}else if(e instanceof Jo?t.Va.Ze(e):e instanceof I_?t.Va.st(e):t.Va.tt(e),!n.isEqual(pe.min()))try{const r=await x_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,h)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(dt.EMPTY_BYTE_STRING,f.snapshotVersion)),U_(i,c);const p=new ar(f.target,c,h,f.sequenceNumber);Uu(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){X(Gr,"Failed to raise snapshot:",r),await Ra(t,r)}}async function Ra(t,e,n){if(!Us(e))throw e;t.Ea.add(1),await ao(t),t.Ra.set("Offline"),n||(n=()=>x_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{X(Gr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await rl(t)}))}function $_(t,e){return e().catch((n=>Ra(t,n,e)))}async function sl(t){const e=me(t),n=Ir(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Au;for(;GR(e);)try{const s=await CR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,QR(e,s)}catch(s){await Ra(e,s)}j_(e)&&q_(e)}function GR(t){return Xr(t)&&t.Ta.length<10}function QR(t,e){t.Ta.push(e);const n=Ir(t);n.O_()&&n.X_&&n.ea(e.mutations)}function j_(t){return Xr(t)&&!Ir(t).x_()&&t.Ta.length>0}function q_(t){Ir(t).start()}async function YR(t){Ir(t).ra()}async function JR(t){const e=Ir(t);for(const n of t.Ta)e.ea(n.mutations)}async function XR(t,e,n){const r=t.Ta.shift(),s=Vu.from(r,e,n);await $_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await sl(t)}async function ZR(t,e){e&&Ir(t).X_&&await(async function(r,s){if((function(o){return OS(o)&&o!==L.ABORTED})(s.code)){const i=r.Ta.shift();Ir(r).B_(),await $_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await sl(r)}})(t,e),j_(t)&&q_(t)}async function Wd(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),X(Gr,"RemoteStore received new credentials");const r=Xr(n);n.Ea.add(3),await ao(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await rl(n)}async function e0(t,e){const n=me(t);e?(n.Ea.delete(2),await rl(n)):e||(n.Ea.add(2),await ao(n),n.Ra.set("Unknown"))}function Bs(t){return t.ma||(t.ma=(function(n,r,s){const i=me(n);return i.sa(),new FR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:HR.bind(null,t),t_:WR.bind(null,t),r_:zR.bind(null,t),H_:KR.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),$u(t)?Bu(t):t.Ra.set("Unknown")):(await t.ma.stop(),B_(t))}))),t.ma}function Ir(t){return t.fa||(t.fa=(function(n,r,s){const i=me(n);return i.sa(),new UR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:YR.bind(null,t),r_:ZR.bind(null,t),ta:JR.bind(null,t),na:XR.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await sl(t)):(await t.fa.stop(),t.Ta.length>0&&(X(Gr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class ju{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ju(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qu(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),Us(t))return new Y(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Es{static emptySet(e){return new Es(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=hi(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class zd{constructor(){this.ga=new He(se.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ue(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class ks{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new ks(e,n,Es.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class t0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class n0{constructor(){this.queries=Kd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=Kd(),i.forEach(((o,l)=>{for(const c of l.Sa)c.onError(r)}))})(this,new Y(L.ABORTED,"Firestore shutting down"))}}function Kd(){return new Jr((t=>c_(t)),Ja)}async function H_(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new t0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=qu(o,`Initialization of query '${ls(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Hu(n)}async function W_(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function r0(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&Hu(n)}function s0(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Hu(t){t.Ca.forEach((e=>{e.next()}))}var Lc,Gd;(Gd=Lc||(Lc={})).Ma="default",Gd.Cache="cache";class z_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Lc.Cache}}/**
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
 */class K_{constructor(e){this.key=e}}class G_{constructor(e){this.key=e}}class i0{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ae(),this.mutatedKeys=Ae(),this.eu=u_(e),this.tu=new Es(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new zd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),E=Xa(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let V=!1;m&&E?m.data.isEqual(E.data)?S!==k&&(r.track({type:3,doc:E}),V=!0):this.su(m,E)||(r.track({type:2,doc:E}),V=!0,(c&&this.eu(E,c)>0||h&&this.eu(E,h)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),V=!0):m&&!E&&(r.track({type:1,doc:m}),V=!0,(c||h)&&(l=!0)),V&&(E?(o=o.add(E),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(E,S){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue(20277,{Rt:V})}};return k(E)-k(S)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,h=c!==this.Za;return this.Za=c,o.length!==0||h?{snapshot:new ks(this.query,e.tu,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new zd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ae(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new G_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new K_(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ae();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ks.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Wu="SyncEngine";class o0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class a0{constructor(e){this.key=e,this.hu=!1}}class l0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Jr((l=>c_(l)),Ja),this.Iu=new Map,this.Eu=new Set,this.du=new He(se.comparator),this.Au=new Map,this.Ru=new Ou,this.Vu={},this.mu=new Map,this.fu=Cs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function c0(t,e,n=!0){const r=ey(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Q_(r,e,n,!0),s}async function u0(t,e){const n=ey(t);await Q_(n,e,!0,!1)}async function Q_(t,e,n,r){const s=await kR(t.localStore,gn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await h0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&F_(t.remoteStore,s),l}async function h0(t,e,n,r,s){t.pu=(p,m,E)=>(async function(k,V,F,D){let $=V.view.ru(F);$.Cs&&($=await Bd(k.localStore,V.query,!1).then((({documents:b})=>V.view.ru(b,$))));const q=D&&D.targetChanges.get(V.targetId),ie=D&&D.targetMismatches.get(V.targetId)!=null,ye=V.view.applyChanges($,k.isPrimaryClient,q,ie);return Yd(k,V.targetId,ye.au),ye.snapshot})(t,p,m,E);const i=await Bd(t.localStore,e,!0),o=new i0(e,i.Qs),l=o.ru(i.documents),c=oo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Yd(t,n,h.au);const f=new o0(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function f0(t,e,n){const r=me(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!Ja(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Fu(r.remoteStore,s.targetId),Fc(r,s.targetId)})).catch(Fs)):(Fc(r,s.targetId),await xc(r.localStore,s.targetId,!0))}async function d0(t,e){const n=me(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Fu(n.remoteStore,r.targetId))}async function p0(t,e,n){const r=T0(t);try{const s=await(function(o,l){const c=me(o),h=$e.now(),f=l.reduce(((E,S)=>E.add(S.key)),Ae());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(E=>{let S=jn(),k=Ae();return c.Ns.getEntries(E,f).next((V=>{S=V,S.forEach(((F,D)=>{D.isValidDocument()||(k=k.add(F))}))})).next((()=>c.localDocuments.getOverlayedDocuments(E,S))).next((V=>{p=V;const F=[];for(const D of l){const $=CS(D,p.get(D.key).overlayedDocument);$!=null&&F.push(new Pr(D.key,$,t_($.value.mapValue),_n.exists(!0)))}return c.mutationQueue.addMutationBatch(E,h,F,l)})).next((V=>{m=V;const F=V.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(E,V.batchId,F)}))})).then((()=>({batchId:m.batchId,changes:f_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let h=o.Vu[o.currentUser.toKey()];h||(h=new He(Ie)),h=h.insert(l,c),o.Vu[o.currentUser.toKey()]=h})(r,s.batchId,n),await lo(r,s.changes),await sl(r.remoteStore)}catch(s){const i=qu(s,"Failed to persist write");n.reject(i)}}async function Y_(t,e){const n=me(t);try{const r=await RR(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ne(o.hu,14607):s.removedDocuments.size>0&&(Ne(o.hu,42227),o.hu=!1))})),await lo(n,r,e)}catch(r){await Fs(r)}}function Qd(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=me(o);c.onlineState=l;let h=!1;c.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(l)&&(h=!0)})),h&&Hu(c)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function m0(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new He(se.comparator);o=o.insert(i,It.newNoDocument(i,pe.min()));const l=Ae().add(i),c=new tl(pe.min(),new Map,new He(Ie),o,l);await Y_(r,c),r.du=r.du.remove(i),r.Au.delete(e),zu(r)}else await xc(r.localStore,e,!1).then((()=>Fc(r,e,n))).catch(Fs)}async function g0(t,e){const n=me(t),r=e.batch.batchId;try{const s=await SR(n.localStore,e);X_(n,r,null),J_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lo(n,s)}catch(s){await Fs(s)}}async function _0(t,e,n){const r=me(t);try{const s=await(function(o,l){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next((p=>(Ne(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p)))).next((()=>c.mutationQueue.performConsistencyCheck(h))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>c.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);X_(r,e,n),J_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lo(r,s)}catch(s){await Fs(s)}}function J_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function X_(t,e,n){const r=me(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||Z_(t,r)}))}function Z_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Fu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),zu(t))}function Yd(t,e,n){for(const r of n)r instanceof K_?(t.Ru.addReference(r.key,e),y0(t,r)):r instanceof G_?(X(Wu,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Z_(t,r.key)):ue(19791,{wu:r})}function y0(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(Wu,"New document in limbo: "+n),t.Eu.add(r),zu(t))}function zu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new se(Fe.fromString(e)),r=t.fu.next();t.Au.set(r,new a0(n)),t.du=t.du.insert(n,r),F_(t.remoteStore,new ar(gn(Cu(n.path)),r,"TargetPurposeLimboResolution",Ga.ce))}}async function lo(t,e,n){const r=me(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{o.push(r.pu(c,e,n).then((h=>{if((h||n)&&r.isPrimaryClient){const f=h?!h.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(h){s.push(h);const f=Mu.As(c.targetId,h);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(c,h){const f=me(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>U.forEach(h,(m=>U.forEach(m.Es,(E=>f.persistence.referenceDelegate.addReference(p,m.targetId,E))).next((()=>U.forEach(m.ds,(E=>f.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))))))}catch(p){if(!Us(p))throw p;X(Lu,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const E=f.Ms.get(m),S=E.snapshotVersion,k=E.withLastLimboFreeSnapshotVersion(S);f.Ms=f.Ms.insert(m,k)}}})(r.localStore,i))}async function v0(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){X(Wu,"User change. New user:",e.toKey());const r=await O_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new Y(L.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lo(n,r.Ls)}}function E0(t,e){const n=me(t),r=n.Au.get(e);if(r&&r.hu)return Ae().add(r.key);{let s=Ae();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function ey(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Y_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=E0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=m0.bind(null,e),e.Pu.H_=r0.bind(null,e.eventManager),e.Pu.yu=s0.bind(null,e.eventManager),e}function T0(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=g0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_0.bind(null,e),e}class Pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return bR(this.persistence,new wR,e.initialUser,this.serializer)}Cu(e){return new D_(xu.mi,this.serializer)}Du(e){return new NR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pa.provider={build:()=>new Pa};class w0 extends Pa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ne(this.persistence.referenceDelegate instanceof Sa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new aR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new D_((r=>Sa.mi(r,n)),this.serializer)}}class Uc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=v0.bind(null,this.syncEngine),await e0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new n0})()}createDatastore(e){const n=nl(e.databaseInfo.databaseId),r=(function(i){return new LR(i)})(e.databaseInfo);return(function(i,o,l,c){return new $R(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new qR(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Qd(this.syncEngine,n,0)),(function(){return qd.v()?new qd:new DR})())}createSyncEngine(e,n){return(function(s,i,o,l,c,h,f){const p=new l0(s,i,o,l,c,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=me(n);X(Gr,"RemoteStore shutting down."),r.Ea.add(5),await ao(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Uc.provider={build:()=>new Uc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class ty{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Bn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const Ar="FirestoreClient";class I0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=Iu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{X(Ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(X(Ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Jl(t,e){t.asyncQueue.verifyOperationInProgress(),X(Ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await O_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Jd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await A0(t);X(Ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Wd(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Wd(e.remoteStore,s))),t._onlineComponents=e}async function A0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(Ar,"Using user provided OfflineComponentProvider");try{await Jl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;bs("Error using user provided cache. Falling back to memory cache: "+n),await Jl(t,new Pa)}}else X(Ar,"Using default OfflineComponentProvider"),await Jl(t,new w0(void 0));return t._offlineComponents}async function ny(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(Ar,"Using user provided OnlineComponentProvider"),await Jd(t,t._uninitializedComponentsProvider._online)):(X(Ar,"Using default OnlineComponentProvider"),await Jd(t,new Uc))),t._onlineComponents}function b0(t){return ny(t).then((e=>e.syncEngine))}async function ry(t){const e=await ny(t),n=e.eventManager;return n.onListen=c0.bind(null,e.syncEngine),n.onUnlisten=f0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=u0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=d0.bind(null,e.syncEngine),n}function S0(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,h){const f=new ty({next:m=>{f.Nu(),o.enqueueAndForget((()=>W_(i,p)));const E=m.docs.has(l);!E&&m.fromCache?h.reject(new Y(L.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&c&&c.source==="server"?h.reject(new Y(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new z_(Cu(l.path),f,{includeMetadataChanges:!0,qa:!0});return H_(i,p)})(await ry(t),t.asyncQueue,e,n,r))),r.promise}function R0(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,h){const f=new ty({next:m=>{f.Nu(),o.enqueueAndForget((()=>W_(i,p))),m.fromCache&&c.source==="server"?h.reject(new Y(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new z_(l,f,{includeMetadataChanges:!0,qa:!0});return H_(i,p)})(await ry(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function sy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="firestore.googleapis.com",Zd=!0;class ep{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Y(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iy,this.ssl=Zd}else this.host=e.host,this.ssl=e.ssl??Zd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=N_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iR)throw new Y(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sy(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class il{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ep({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ep(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Db;switch(r.type){case"firstParty":return new Lb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Xd.get(n);r&&(X("ComponentProvider","Removing Datastore"),Xd.delete(n),r.terminate())})(this),Promise.resolve()}}function P0(t,e,n,r={}){t=$n(t,il);const s=Os(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Gm(`https://${l}`),Qm("Firestore",!0)),i.host!==iy&&i.host!==l&&bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!qr(c,o)&&(t._setSettings(c),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Et.MOCK_USER;else{h=qT(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Y(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Et(p)}t._authCredentials=new Ob(new qg(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $s(this.firestore,e,this._query)}}class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ro(n,Ge._jsonSchema))return new Ge(e,r||null,new se(Fe.fromString(n.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:Ze("string",Ge._jsonSchemaVersion),referencePath:Ze("string")};class pr extends $s{constructor(e,n,r){super(e,n,Cu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new se(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function ol(t,e,...n){if(t=st(t),Hg("collection","path",e),t instanceof il){const r=Fe.fromString(e,...n);return dd(r),new pr(t,null,r)}{if(!(t instanceof Ge||t instanceof pr))throw new Y(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return dd(r),new pr(t.firestore,null,r)}}function js(t,e,...n){if(t=st(t),arguments.length===1&&(e=Iu.newId()),Hg("doc","path",e),t instanceof il){const r=Fe.fromString(e,...n);return fd(r),new Ge(t,null,new se(r))}{if(!(t instanceof Ge||t instanceof pr))throw new Y(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return fd(r),new Ge(t.firestore,t instanceof pr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="AsyncQueue";class np{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new M_(this,"async_queue_retry"),this._c=()=>{const r=Yl();r&&X(tp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Yl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Yl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new On;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Us(e))throw e;X(tp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Bn("INTERNAL UNHANDLED ERROR: ",rp(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=ju.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ue(47125,{Pc:rp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function rp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class co extends il{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new np,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new np(e),this._firestoreClient=void 0,await e}}}function C0(t,e){const n=typeof t=="object"?t:Zm(),r=typeof t=="string"?t:va,s=du(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$T("firestore");i&&P0(s,...i)}return s}function Ku(t){if(t._terminated)throw new Y(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||k0(t),t._firestoreClient}function k0(t){const e=t._freezeSettings(),n=(function(s,i,o,l){return new eS(s,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,sy(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new I0(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(dt.fromBase64String(e))}catch(n){throw new Y(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ro(e,Kt._jsonSchema))return Kt.fromBase64String(e.bytes)}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:Ze("string",Kt._jsonSchemaVersion),bytes:Ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){this._methodName=e}}/**
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
 */class vn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:vn._jsonSchemaVersion}}static fromJSON(e){if(ro(e,vn._jsonSchema))return new vn(e.latitude,e.longitude)}}vn._jsonSchemaVersion="firestore/geoPoint/1.0",vn._jsonSchema={type:Ze("string",vn._jsonSchemaVersion),latitude:Ze("number"),longitude:Ze("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:En._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ro(e,En._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new En(e.vectorValues);throw new Y(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}En._jsonSchemaVersion="firestore/vectorValue/1.0",En._jsonSchema={type:Ze("string",En._jsonSchemaVersion),vectorValues:Ze("object")};/**
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
 */const V0=/^__.*__$/;class N0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new io(e,this.data,n,this.fieldTransforms)}}class oy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ay(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{Ac:t})}}class Qu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Qu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ca(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ay(this.Ac)&&V0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class D0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nl(e)}Cc(e,n,r,s=!1){return new Qu({Ac:e,methodName:n,Dc:r,path:ft.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yu(t){const e=t._freezeSettings(),n=nl(t._databaseId);return new D0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function O0(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Ju("Data must be an object, but it was:",o,r);const l=ly(r,o);let c,h;if(i.merge)c=new $t(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Bc(e,p,n);if(!o.contains(m))throw new Y(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);uy(f,m)||f.push(m)}c=new $t(f),h=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,h=o.fieldTransforms;return new N0(new Mt(l),c,h)}class ll extends Gu{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ll}}function x0(t,e,n,r){const s=t.Cc(1,e,n);Ju("Data must be an object, but it was:",s,r);const i=[],o=Mt.empty();Rr(r,((c,h)=>{const f=Xu(e,c,n);h=st(h);const p=s.yc(f);if(h instanceof ll)i.push(f);else{const m=uo(h,p);m!=null&&(i.push(f),o.set(f,m))}}));const l=new $t(i);return new oy(o,l,s.fieldTransforms)}function M0(t,e,n,r,s,i){const o=t.Cc(1,e,n),l=[Bc(e,r,n)],c=[s];if(i.length%2!=0)throw new Y(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Bc(e,i[m])),c.push(i[m+1]);const h=[],f=Mt.empty();for(let m=l.length-1;m>=0;--m)if(!uy(h,l[m])){const E=l[m];let S=c[m];S=st(S);const k=o.yc(E);if(S instanceof ll)h.push(E);else{const V=uo(S,k);V!=null&&(h.push(E),f.set(E,V))}}const p=new $t(h);return new oy(f,p,o.fieldTransforms)}function L0(t,e,n,r=!1){return uo(n,t.Cc(r?4:3,e))}function uo(t,e){if(cy(t=st(t)))return Ju("Unsupported field value:",e,t),ly(t,e);if(t instanceof Gu)return(function(r,s){if(!ay(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=uo(l,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$e.fromDate(r);return{timestampValue:ba(s.serializer,i)}}if(r instanceof $e){const i=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ba(s.serializer,i)}}if(r instanceof vn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kt)return{bytesValue:b_(s.serializer,r._byteString)};if(r instanceof Ge){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Du(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof En)return(function(o,l){return{mapValue:{fields:{[Zg]:{stringValue:e_},[Ea]:{arrayValue:{values:o.toArray().map((h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return ku(l.serializer,h)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Ka(r)}`)})(t,e)}function ly(t,e){const n={};return Kg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,((r,s)=>{const i=uo(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function cy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof vn||t instanceof Kt||t instanceof Ge||t instanceof Gu||t instanceof En)}function Ju(t,e,n){if(!cy(n)||!Wg(n)){const r=Ka(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Bc(t,e,n){if((e=st(e))instanceof al)return e._internalPath;if(typeof e=="string")return Xu(t,e);throw Ca("Field path arguments must be of type string or ",t,!1,void 0,n)}const F0=new RegExp("[~\\*/\\[\\]]");function Xu(t,e,n){if(e.search(F0)>=0)throw Ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new al(...e.split("."))._internalPath}catch{throw Ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ca(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Y(L.INVALID_ARGUMENT,l+t+c)}function uy(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new U0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class U0 extends hy{data(){return super.data()}}function Zu(t,e){return typeof e=="string"?Xu(t,e):e instanceof al?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eh{}class $0 extends eh{}function j0(t,e,...n){let r=[];e instanceof eh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof th)).length,l=i.filter((c=>c instanceof cl)).length;if(o>1||o>0&&l>0)throw new Y(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class cl extends $0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cl(e,n,r)}_apply(e){const n=this._parse(e);return fy(e._query,n),new $s(e.firestore,e.converter,Cc(e._query,n))}_parse(e){const n=Yu(e.firestore);return(function(i,o,l,c,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ip(p,f);const S=[];for(const k of p)S.push(sp(c,i,k));m={arrayValue:{values:S}}}else m=sp(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ip(p,f),m=L0(l,o,p,f==="in"||f==="not-in");return Xe.create(h,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function q0(t,e,n){const r=e,s=Zu("where",t);return cl._create(s,r,n)}class th extends eh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new th(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)fy(o,c),o=Cc(o,c)})(e._query,n),new $s(e.firestore,e.converter,Cc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function sp(t,e,n){if(typeof(n=st(n))=="string"){if(n==="")throw new Y(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!l_(e)&&n.indexOf("/")!==-1)throw new Y(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!se.isDocumentKey(r))throw new Y(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Td(t,new se(r))}if(n instanceof Ge)return Td(t,n._key);throw new Y(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ka(n)}.`)}function ip(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fy(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new Y(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class H0{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[Ea].arrayValue?.values?.map((r=>ze(r.doubleValue)));return new En(n)}convertGeoPoint(e){return new vn(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ya(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ui(e));default:return null}}convertTimestamp(e){const n=Er(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);Ne(V_(r),9688,{name:e});const s=new Bi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class di{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $r extends hy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Zu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=$r._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}$r._jsonSchemaVersion="firestore/documentSnapshot/1.0",$r._jsonSchema={type:Ze("string",$r._jsonSchemaVersion),bundleSource:Ze("string","DocumentSnapshot"),bundleName:Ze("string"),bundle:Ze("string")};class Xo extends $r{data(e={}){return super.data(e)}}class Ts{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new di(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Xo(this._firestore,this._userDataWriter,r.key,r,new di(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Xo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new di(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Xo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new di(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:z0(l.type),doc:c,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ts._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Iu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function z0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t){t=$n(t,Ge);const e=$n(t.firestore,co);return S0(Ku(e),t._key).then((n=>G0(e,t,n)))}Ts._jsonSchemaVersion="firestore/querySnapshot/1.0",Ts._jsonSchema={type:Ze("string",Ts._jsonSchemaVersion),bundleSource:Ze("string","QuerySnapshot"),bundleName:Ze("string"),bundle:Ze("string")};class dy extends H0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function rh(t){t=$n(t,$s);const e=$n(t.firestore,co),n=Ku(e),r=new dy(e);return B0(t._query),R0(n,t._query).then((s=>new Ts(e,r,t,s)))}function K0(t,e,n){t=$n(t,Ge);const r=$n(t.firestore,co),s=W0(t.converter,e);return my(r,[O0(Yu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,_n.none())])}function py(t,e,n,...r){t=$n(t,Ge);const s=$n(t.firestore,co),i=Yu(s);let o;return o=typeof(e=st(e))=="string"||e instanceof al?M0(i,"updateDoc",t._key,e,n,r):x0(i,"updateDoc",t._key,e),my(s,[o.toMutation(t._key,_n.exists(!0))])}function my(t,e){return(function(r,s){const i=new On;return r.asyncQueue.enqueueAndForget((async()=>p0(await b0(r),s,i))),i.promise})(Ku(t),e)}function G0(t,e,n){const r=n.docs.get(e._key),s=new dy(t);return new $r(t,s,e._key,r,new di(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ls=s})(xs),As(new Hr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new co(new xb(r.getProvider("auth-internal")),new Fb(o,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bi(h.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),fr(ld,cd,e),fr(ld,cd,"esm2020")})();const Q0={apiKey:"AIzaSyCmgfKJVI9gY-O2mK3_4kodTZr4XusUxvo",authDomain:"communitybook-6e0e9.firebaseapp.com",projectId:"communitybook-6e0e9",storageBucket:"communitybook-6e0e9.firebasestorage.app",messagingSenderId:"5978484330",appId:"1:5978484330:web:e09f3c25d7c3a0a1162413"},gy=Xm(Q0),ho=C0(gy),ul=Vb(gy),qs=uu("auth",()=>{const t=re(null);return{user:t,setUser:r=>{t.value={uid:r?r.uid:null,email:r?r.email:null,username:r?r.email.split("@")[0].toUpperCase():null}},clearUser:()=>{t.value=null}}}),Y0="/assets/community_white-DQn7OPS5.png";/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof document<"u";function _y(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function J0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&_y(t.default)}const ke=Object.assign;function Xl(t,e){const n={};for(const r in e){const s=e[r];n[r]=sn(s)?s.map(t):t(s)}return n}const Ri=()=>{},sn=Array.isArray,yy=/#/g,X0=/&/g,Z0=/\//g,eP=/=/g,tP=/\?/g,vy=/\+/g,nP=/%5B/g,rP=/%5D/g,Ey=/%5E/g,sP=/%60/g,Ty=/%7B/g,iP=/%7C/g,wy=/%7D/g,oP=/%20/g;function sh(t){return encodeURI(""+t).replace(iP,"|").replace(nP,"[").replace(rP,"]")}function aP(t){return sh(t).replace(Ty,"{").replace(wy,"}").replace(Ey,"^")}function $c(t){return sh(t).replace(vy,"%2B").replace(oP,"+").replace(yy,"%23").replace(X0,"%26").replace(sP,"`").replace(Ty,"{").replace(wy,"}").replace(Ey,"^")}function lP(t){return $c(t).replace(eP,"%3D")}function cP(t){return sh(t).replace(yy,"%23").replace(tP,"%3F")}function uP(t){return t==null?"":cP(t).replace(Z0,"%2F")}function Hi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const hP=/\/$/,fP=t=>t.replace(hP,"");function Zl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=gP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Hi(o)}}function dP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function op(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Vs(e.matched[r],n.matched[s])&&Iy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Iy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mP(t[n],e[n]))return!1;return!0}function mP(t,e){return sn(t)?ap(t,e):sn(e)?ap(e,t):t===e}function ap(t,e){return sn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Wi;(function(t){t.pop="pop",t.push="push"})(Wi||(Wi={}));var Pi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pi||(Pi={}));function _P(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fP(t)}const yP=/^[^#]+#/;function vP(t,e){return t.replace(yP,"#")+e}function EP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const hl=()=>({left:window.scrollX,top:window.scrollY});function TP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=EP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function lp(t,e){return(history.state?history.state.position-e:-1)+t}const jc=new Map;function wP(t,e){jc.set(t,e)}function IP(t){const e=jc.get(t);return jc.delete(t),e}let AP=()=>location.protocol+"//"+location.host;function Ay(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),op(c,"")}return op(n,t)+r+s}function bP(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const E=Ay(t,location),S=n.value,k=e.value;let V=0;if(m){if(n.value=E,e.value=m,o&&o===S){o=null;return}V=k?m.position-k.position:0}else r(E);s.forEach(F=>{F(n.value,S,{delta:V,type:Wi.pop,direction:V?V>0?Pi.forward:Pi.back:Pi.unknown})})};function c(){o=n.value}function h(m){s.push(m);const E=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(E),E}function f(){const{history:m}=window;m.state&&m.replaceState(ke({},m.state,{scroll:hl()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function cp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?hl():null}}function SP(t){const{history:e,location:n}=window,r={value:Ay(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:AP()+t+c;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(E){console.error(E),n[f?"replace":"assign"](m)}}function o(c,h){const f=ke({},e.state,cp(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,h){const f=ke({},s.value,e.state,{forward:c,scroll:hl()});i(f.current,f,!0);const p=ke({},cp(r.value,c,null),{position:f.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function RP(t){t=_P(t);const e=SP(t),n=bP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:vP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function PP(t){return typeof t=="string"||t&&typeof t=="object"}function by(t){return typeof t=="string"||typeof t=="symbol"}const Sy=Symbol("");var up;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(up||(up={}));function Ns(t,e){return ke(new Error,{type:t,[Sy]:!0},e)}function Sn(t,e){return t instanceof Error&&Sy in t&&(e==null||!!(t.type&e))}const hp="[^/]+?",CP={sensitive:!1,strict:!1,start:!0,end:!0},kP=/[.+*?^${}()[\]/\\]/g;function VP(t,e){const n=ke({},CP,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let E=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(kP,"\\$&"),E+=40;else if(m.type===1){const{value:S,repeatable:k,optional:V,regexp:F}=m;i.push({name:S,repeatable:k,optional:V});const D=F||hp;if(D!==hp){E+=10;try{new RegExp(`(${D})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${S}" (${D}): `+q.message)}}let $=k?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;p||($=V&&h.length<2?`(?:/${$})`:"/"+$),V&&($+="?"),s+=$,E+=20,V&&(E+=-8),k&&(E+=-20),D===".*"&&(E+=-50)}f.push(E)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const f=h.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const E=f[m]||"",S=i[m-1];p[S.name]=E&&S.repeatable?E.split("/"):E}return p}function c(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const E of m)if(E.type===0)f+=E.value;else if(E.type===1){const{value:S,repeatable:k,optional:V}=E,F=S in h?h[S]:"";if(sn(F)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const D=sn(F)?F.join("/"):F;if(!D)if(V)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=D}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function NP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ry(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=NP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(fp(r))return 1;if(fp(s))return-1}return s.length-r.length}function fp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const DP={type:0,value:""},OP=/[a-zA-Z0-9_]/;function xP(t){if(!t)return[[]];if(t==="/")return[[DP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${h}": ${E}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:OP.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function MP(t,e,n){const r=VP(xP(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function LP(t,e){const n=[],r=new Map;e=gp({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,E){const S=!E,k=pp(p);k.aliasOf=E&&E.record;const V=gp(e,p),F=[k];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const ie of q)F.push(pp(ke({},k,{components:E?E.record.components:k.components,path:ie,aliasOf:E?E.record:k})))}let D,$;for(const q of F){const{path:ie}=q;if(m&&ie[0]!=="/"){const ye=m.record.path,b=ye[ye.length-1]==="/"?"":"/";q.path=m.record.path+(ie&&b+ie)}if(D=MP(q,m,V),E?E.alias.push(D):($=$||D,$!==D&&$.alias.push(D),S&&p.name&&!mp(D)&&o(p.name)),Py(D)&&c(D),k.children){const ye=k.children;for(let b=0;b<ye.length;b++)i(ye[b],D,E&&E.children[b])}E=E||D}return $?()=>{o($)}:Ri}function o(p){if(by(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=BP(p,n);n.splice(m,0,p),p.record.name&&!mp(p)&&r.set(p.record.name,p)}function h(p,m){let E,S={},k,V;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw Ns(1,{location:p});V=E.record.name,S=ke(dp(m.params,E.keys.filter($=>!$.optional).concat(E.parent?E.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&dp(p.params,E.keys.map($=>$.name))),k=E.stringify(S)}else if(p.path!=null)k=p.path,E=n.find($=>$.re.test(k)),E&&(S=E.parse(k),V=E.record.name);else{if(E=m.name?r.get(m.name):n.find($=>$.re.test(m.path)),!E)throw Ns(1,{location:p,currentLocation:m});V=E.record.name,S=ke({},m.params,p.params),k=E.stringify(S)}const F=[];let D=E;for(;D;)F.unshift(D.record),D=D.parent;return{name:V,path:k,params:S,matched:F,meta:UP(F)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function dp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function pp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:FP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function FP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function mp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function UP(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function gp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function BP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ry(t,e[i])<0?r=i:n=i+1}const s=$P(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function $P(t){let e=t;for(;e=e.parent;)if(Py(e)&&Ry(t,e)===0)return e}function Py({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function jP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(vy," "),o=i.indexOf("="),l=Hi(o<0?i:i.slice(0,o)),c=o<0?null:Hi(i.slice(o+1));if(l in e){let h=e[l];sn(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function _p(t){let e="";for(let n in t){const r=t[n];if(n=lP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(sn(r)?r.map(i=>i&&$c(i)):[r&&$c(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function qP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=sn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const HP=Symbol(""),yp=Symbol(""),fl=Symbol(""),Cy=Symbol(""),qc=Symbol("");function oi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function nr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(Ns(4,{from:n,to:e})):m instanceof Error?c(m):PP(m)?c(Ns(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function ec(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(_y(c)){const f=(c.__vccOpts||c)[e];f&&i.push(nr(f,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=J0(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const E=(p.__vccOpts||p)[e];return E&&nr(E,n,r,o,l,s)()}))}}return i}function vp(t){const e=en(fl),n=en(Cy),r=Wt(()=>{const c=Le(t.to);return e.resolve(c)}),s=Wt(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Vs.bind(null,f));if(m>-1)return m;const E=Ep(c[h-2]);return h>1&&Ep(f)===E&&p[p.length-1].path!==E?p.findIndex(Vs.bind(null,c[h-2])):m}),i=Wt(()=>s.value>-1&&GP(n.params,r.value.params)),o=Wt(()=>s.value>-1&&s.value===n.matched.length-1&&Iy(n.params,r.value.params));function l(c={}){if(KP(c)){const h=e[Le(t.replace)?"replace":"push"](Le(t.to)).catch(Ri);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Wt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function WP(t){return t.length===1?t[0]:t}const zP=im({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:vp,setup(t,{slots:e}){const n=Gi(vp(t)),{options:r}=en(fl),s=Wt(()=>({[Tp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Tp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&WP(e.default(n));return t.custom?i:Dm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Zn=zP;function KP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function GP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!sn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ep(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tp=(t,e,n)=>t??e??n,QP=im({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(qc),s=Wt(()=>t.route||r.value),i=en(yp,0),o=Wt(()=>{let h=Le(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=Wt(()=>s.value.matched[o.value]);Bo(yp,Wt(()=>o.value+1)),Bo(HP,l),Bo(qc,s);const c=re();return dn(()=>[c.value,l.value,t.name],([h,f,p],[m,E,S])=>{f&&(f.instances[p]=h,E&&E!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=E.leaveGuards),f.updateGuards.size||(f.updateGuards=E.updateGuards))),h&&f&&(!E||!Vs(f,E)||!m)&&(f.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return wp(n.default,{Component:m,route:h});const E=p.props[f],S=E?E===!0?h.params:typeof E=="function"?E(h):E:null,V=Dm(m,ke({},S,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return wp(n.default,{Component:V,route:h})||V}}});function wp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ky=QP;function YP(t){const e=LP(t.routes,t),n=t.parseQuery||jP,r=t.stringifyQuery||_p,s=t.history,i=oi(),o=oi(),l=oi(),c=Ov(Jn);let h=Jn;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Xl.bind(null,O=>""+O),p=Xl.bind(null,uP),m=Xl.bind(null,Hi);function E(O,J){let G,te;return by(O)?(G=e.getRecordMatcher(O),te=J):te=O,e.addRoute(te,G)}function S(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function k(){return e.getRoutes().map(O=>O.record)}function V(O){return!!e.getRecordMatcher(O)}function F(O,J){if(J=ke({},J||c.value),typeof O=="string"){const P=Zl(n,O,J.path),x=e.resolve({path:P.path},J),B=s.createHref(P.fullPath);return ke(P,x,{params:m(x.params),hash:Hi(P.hash),redirectedFrom:void 0,href:B})}let G;if(O.path!=null)G=ke({},O,{path:Zl(n,O.path,J.path).path});else{const P=ke({},O.params);for(const x in P)P[x]==null&&delete P[x];G=ke({},O,{params:p(P)}),J.params=p(J.params)}const te=e.resolve(G,J),Re=O.hash||"";te.params=f(m(te.params));const w=dP(r,ke({},O,{hash:aP(Re),path:te.path})),A=s.createHref(w);return ke({fullPath:w,hash:Re,query:r===_p?qP(O.query):O.query||{}},te,{redirectedFrom:void 0,href:A})}function D(O){return typeof O=="string"?Zl(n,O,c.value.path):ke({},O)}function $(O,J){if(h!==O)return Ns(8,{from:J,to:O})}function q(O){return b(O)}function ie(O){return q(ke(D(O),{replace:!0}))}function ye(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:G}=J;let te=typeof G=="function"?G(O):G;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=D(te):{path:te},te.params={}),ke({query:O.query,hash:O.hash,params:te.path!=null?{}:O.params},te)}}function b(O,J){const G=h=F(O),te=c.value,Re=O.state,w=O.force,A=O.replace===!0,P=ye(G);if(P)return b(ke(D(P),{state:typeof P=="object"?ke({},Re,P.state):Re,force:w,replace:A}),J||G);const x=G;x.redirectedFrom=J;let B;return!w&&pP(r,te,G)&&(B=Ns(16,{to:x,from:te}),jt(te,te,!0,!1)),(B?Promise.resolve(B):_(x,te)).catch(M=>Sn(M)?Sn(M,2)?M:Yt(M):Te(M,x,te)).then(M=>{if(M){if(Sn(M,2))return b(ke({replace:A},D(M.to),{state:typeof M.to=="object"?ke({},Re,M.to.state):Re,force:w}),J||x)}else M=R(x,te,!0,A,Re);return T(x,te,M),M})}function v(O,J){const G=$(O,J);return G?Promise.reject(G):Promise.resolve()}function y(O){const J=Wn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function _(O,J){let G;const[te,Re,w]=JP(O,J);G=ec(te.reverse(),"beforeRouteLeave",O,J);for(const P of te)P.leaveGuards.forEach(x=>{G.push(nr(x,O,J))});const A=v.bind(null,O,J);return G.push(A),Dt(G).then(()=>{G=[];for(const P of i.list())G.push(nr(P,O,J));return G.push(A),Dt(G)}).then(()=>{G=ec(Re,"beforeRouteUpdate",O,J);for(const P of Re)P.updateGuards.forEach(x=>{G.push(nr(x,O,J))});return G.push(A),Dt(G)}).then(()=>{G=[];for(const P of w)if(P.beforeEnter)if(sn(P.beforeEnter))for(const x of P.beforeEnter)G.push(nr(x,O,J));else G.push(nr(P.beforeEnter,O,J));return G.push(A),Dt(G)}).then(()=>(O.matched.forEach(P=>P.enterCallbacks={}),G=ec(w,"beforeRouteEnter",O,J,y),G.push(A),Dt(G))).then(()=>{G=[];for(const P of o.list())G.push(nr(P,O,J));return G.push(A),Dt(G)}).catch(P=>Sn(P,8)?P:Promise.reject(P))}function T(O,J,G){l.list().forEach(te=>y(()=>te(O,J,G)))}function R(O,J,G,te,Re){const w=$(O,J);if(w)return w;const A=J===Jn,P=hs?history.state:{};G&&(te||A?s.replace(O.fullPath,ke({scroll:A&&P&&P.scroll},Re)):s.push(O.fullPath,Re)),c.value=O,jt(O,J,G,A),Yt()}let I;function it(){I||(I=s.listen((O,J,G)=>{if(!an.listening)return;const te=F(O),Re=ye(te);if(Re){b(ke(Re,{replace:!0,force:!0}),te).catch(Ri);return}h=te;const w=c.value;hs&&wP(lp(w.fullPath,G.delta),hl()),_(te,w).catch(A=>Sn(A,12)?A:Sn(A,2)?(b(ke(D(A.to),{force:!0}),te).then(P=>{Sn(P,20)&&!G.delta&&G.type===Wi.pop&&s.go(-1,!1)}).catch(Ri),Promise.reject()):(G.delta&&s.go(-G.delta,!1),Te(A,te,w))).then(A=>{A=A||R(te,w,!1),A&&(G.delta&&!Sn(A,8)?s.go(-G.delta,!1):G.type===Wi.pop&&Sn(A,20)&&s.go(-1,!1)),T(te,w,A)}).catch(Ri)}))}let Nt=oi(),xe=oi(),de;function Te(O,J,G){Yt(O);const te=xe.list();return te.length?te.forEach(Re=>Re(O,J,G)):console.error(O),Promise.reject(O)}function Lt(){return de&&c.value!==Jn?Promise.resolve():new Promise((O,J)=>{Nt.add([O,J])})}function Yt(O){return de||(de=!O,it(),Nt.list().forEach(([J,G])=>O?G(O):J()),Nt.reset()),O}function jt(O,J,G,te){const{scrollBehavior:Re}=t;if(!hs||!Re)return Promise.resolve();const w=!G&&IP(lp(O.fullPath,0))||(te||!G)&&history.state&&history.state.scroll||null;return xa().then(()=>Re(O,J,w)).then(A=>A&&TP(A)).catch(A=>Te(A,O,J))}const je=O=>s.go(O);let qe;const Wn=new Set,an={currentRoute:c,listening:!0,addRoute:E,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:k,resolve:F,options:t,push:q,replace:ie,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:xe.add,isReady:Lt,install(O){const J=this;O.component("RouterLink",Zn),O.component("RouterView",ky),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Le(c)}),hs&&!qe&&c.value===Jn&&(qe=!0,q(s.location).catch(Re=>{}));const G={};for(const Re in Jn)Object.defineProperty(G,Re,{get:()=>c.value[Re],enumerable:!0});O.provide(fl,J),O.provide(Cy,Yp(G)),O.provide(qc,c);const te=O.unmount;Wn.add(O),O.unmount=function(){Wn.delete(O),Wn.size<1&&(h=Jn,I&&I(),I=null,c.value=Jn,qe=!1,de=!1),te()}}};function Dt(O){return O.reduce((J,G)=>J.then(()=>y(G)),Promise.resolve())}return an}function JP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>Vs(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>Vs(h,c))||s.push(c))}return[n,r,s]}function dl(){return en(fl)}const Vy=uu("family",()=>{const t=re(null);return{family:t,setFamily:r=>{t.value={...r}},clearFamily:()=>{t.value=null}}}),Hs=ol(ho,"families");let on="";const XP=async()=>{let t,e=!0;for(;e;){t=`FAM${Math.floor(1e4+Math.random()*9e4)}`;const r=js(Hs,t);e=(await nh(r)).exists()}return t},ZP=async(t,e)=>{try{return await K0(js(Hs,t),{email:e,createdAt:new Date}),{success:!0}}catch(n){return on="Error creating family document: "+n.message,{success:!1,message:on}}},eC=async()=>{const t=await rh(ol(ho,"states"));let e=[];return t.forEach(n=>{e.push(n.id)}),e},tC=async t=>{const e=await rh(ol(ho,"states"));let n=[];return e.forEach(r=>{r.id===t&&(n=r.data().districts||[])}),n},nC=async(t,e)=>{try{return await py(js(Hs,t),{familyData:e}),{success:!0,message:"Family details added successfully!"}}catch(n){return on="Error adding family details: "+n.message,{success:!1,message:on}}},Ny=async t=>{try{const e=js(Hs,t),n=await nh(e);if(n.exists())return{success:!0,data:n.data().members||[]}}catch(e){return on="Error adding member details: "+e.message,{success:!1,message:on}}},rC=async(t,e)=>{const n=js(Hs,t);try{const r=await Ny(t);if(r.success){console.log(r.data);const s=r.data;s.sort((l,c)=>l.memberId-c.memberId);const i=s.length;return e.memberId=s[i-1]?s[i-1].memberId+1:1,s.push(e),await py(n,{members:s}),{success:!0,message:"Member details added successfully!"}}else return{success:!1,message:"Family does not exist."}}catch(r){return on="Error adding member details: "+r.message,{success:!1,message:on}}},sC=async t=>{try{const e=js(ho,"families",t),n=await nh(e);return n.exists()?!n.data().email&&!n.data().address1&&!n.data().address2&&!n.data().country&&!n.data().postal&&!n.data().state&&!n.data().district?{success:!1,message:"Family details not found."}:{success:!0,data:n.data()}:{success:!1,message:"No such document!"}}catch(e){return on="Error fetching family details: "+e.message,{success:!1,message:on}}},iC=async t=>{try{const e=j0(Hs,q0("email","==",t));return(await rh(e)).empty?{success:!1}:{success:!0}}catch{return{success:!1,message:on}}};let vt="";const oC=async(t,e)=>{try{const n=`${t}@communitybook.com`;return{success:!0,user:(await gA(ul,n,e)).user}}catch(n){if(n.code)switch(n.code){case"auth/invalid-email":vt="Invalid email address.";break;case"auth/user-disabled":vt="This user account has been disabled.";break;case"auth/user-not-found":vt="No user found with this email address.";break;case"auth/wrong-password":vt="Incorrect password.";break;case"auth/too-many-requests":vt="Too many failed login attempts. Please try again later.";break;case"auth/invalid-credential":vt="Invalid user name or password. Please try again.";break;default:vt="An unexpected error occurred:"}else vt="An unexpected error occurred:";return{success:!1,message:vt}}},aC=async(t,e,n)=>{if((await iC(n)).success)return{success:!1,message:"User already registered with this email address."};{const s=`${t}@communitybook.com`;try{return{success:!0,user:(await mA(ul,s,e)).user,message:"Registration successful!"}}catch(i){if(i.code)switch(i.code){case"auth/invalid-email":vt="Invalid email address.";break;case"auth/email-already-in-use":vt="This email is already registered.";break;case"auth/weak-password":vt="The password is too weak. Please choose a stronger password.";break;case"auth/operation-not-allowed":vt="Email/password sign-in is not enabled. Please contact support.";break;default:vt="An unexpected error occurred:"}else vt="An unexpected error occurred:";return{success:!1,message:vt}}}},lC=async()=>{try{return await EA(ul),{success:!0}}catch(t){return console.error("Error during logout:",t),{success:!1,message:"Error during logout. Please try again."}}},cC={class:"flex flex-col min-h-screen"},uC={class:"header-container font-poppins"},hC={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},fC={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},dC={class:"flex flex-col items-centre gap-y-1"},pC={key:0,class:"text-white text-start mt-1 md:text-end xl:text-end"},mC={class:"flex flex-1"},gC={class:"flex flex-col bg-blue-50 justify-centre min-w-screen p-6 font-sans"},_C={__name:"App",setup(t){const e=qs(),n=Vy(),r=re(!1),s=async()=>{(await lC()).success&&(e.clearUser(),n.clearFamily())};return(i,o)=>(ee(),fe("div",cC,[Z("header",uC,[o[10]||(o[10]=Z("div",{class:"flex justify-center"},[Z("img",{src:Y0,alt:"Logo",class:"h-10 w-10 mr-4"}),Z("p",{class:"title"},"Community Book")],-1)),Z("button",{class:"md:hidden flex items-center px-3 py-2 border rounded text-white border-white mt-2",onClick:o[0]||(o[0]=l=>r.value=!r.value),"aria-label":"Toggle navigation"},[r.value?(ee(),fe("svg",fC,[...o[2]||(o[2]=[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)])])):(ee(),fe("svg",hC,[...o[1]||(o[1]=[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])]))]),Z("div",dC,[Z("nav",{class:Ki(["flex flex-col md:flex-row md:space-x-4 md:mt-0 mt-3",r.value?"block":"hidden md:flex"])},[ve(Le(Zn),{to:"/",class:"px-3 py-2 rounded hover:bg-blue-700","active-class":"bg-blue-500"},{default:Tt(()=>[...o[3]||(o[3]=[rt(" Home ",-1)])]),_:1}),ve(Le(Zn),{to:"/about",class:"px-3 py-2 rounded hover:bg-blue-700","active-class":"bg-blue-500"},{default:Tt(()=>[...o[4]||(o[4]=[rt(" About ",-1)])]),_:1}),Le(e).user?Ee("",!0):(ee(),At(Le(Zn),{key:0,to:"/login",class:"px-3 py-2 rounded hover:bg-blue-700","active-class":"bg-blue-500"},{default:Tt(()=>[...o[5]||(o[5]=[rt(" Login ",-1)])]),_:1})),Le(e).user?Ee("",!0):(ee(),At(Le(Zn),{key:1,to:"/register",class:"px-3 py-2 rounded hover:bg-blue-700","active-class":"bg-blue-500"},{default:Tt(()=>[...o[6]||(o[6]=[rt(" Register ",-1)])]),_:1})),Le(e).user?(ee(),At(Le(Zn),{key:2,to:"/family",class:"px-3 py-2 rounded hover:bg-blue-700","active-class":"bg-blue-500"},{default:Tt(()=>[...o[7]||(o[7]=[rt(" Family ",-1)])]),_:1})):Ee("",!0),Le(e).user?(ee(),At(Le(Zn),{key:3,to:"/members",class:"px-3 py-2 rounded hover:bg-blue-700","active-class":"bg-blue-500"},{default:Tt(()=>[...o[8]||(o[8]=[rt(" Members ",-1)])]),_:1})):Ee("",!0),Le(e).user?(ee(),At(Le(Zn),{key:4,to:"/login",class:"px-3 py-2 rounded hover:bg-blue-700","active-class":"bg-blue-500",onClick:s},{default:Tt(()=>[...o[9]||(o[9]=[rt(" Log Out ",-1)])]),_:1})):Ee("",!0)],2),Le(e).user?(ee(),fe("p",pC," Welcome "+Ke(Le(e).user.username),1)):Ee("",!0)])]),Z("div",mC,[Z("main",gC,[ve(Le(ky))])]),o[11]||(o[11]=Z("footer",{class:"footer-container"},"© 2025 Community Book",-1))]))}},yC={class:"capitalize"},vC={__name:"Home",setup(t){return ol(ho,"states"),(e,n)=>(ee(),fe("div",yC,[...n[0]||(n[0]=[Z("h1",null,"This is a home page",-1)])]))}},EC=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},TC={},wC={class:"about"};function IC(t,e){return ee(),fe("div",wC,[...e[0]||(e[0]=[Z("h1",null,"This is an about page",-1)])])}const AC=EC(TC,[["render",IC]]),bC={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",style:{"pointer-events":"auto"}},pl={__name:"LoadingOverlay",props:{show:Boolean},setup(t){return(e,n)=>t.show?(ee(),fe("div",bC,[...n[0]||(n[0]=[Z("svg",{class:"animate-spin h-8 w-8 text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[Z("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),Z("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8z"})],-1)])])):Ee("",!0)}},SC=["type","disabled"],mr={__name:"AppButton",props:{type:{type:String,default:"button"},disabled:{type:Boolean,default:!1}},emits:["click"],setup(t){return(e,n)=>(ee(),fe("button",{type:t.type,disabled:t.disabled,onClick:n[0]||(n[0]=r=>e.$emit("click")),class:"btn"},[lE(e.$slots,"default",{},()=>[n[1]||(n[1]=rt("Button",-1))])],8,SC))}},RC={class:"input-container"},PC=["for"],CC=["id","type","placeholder","required"],xt={__name:"AppInput",props:{id:String,label:String,type:{type:String,default:"text"},placeholder:String,modelValue:[String,Number],required:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,r=e,s=re(n.modelValue);return dn(s,i=>r("update:modelValue",i),{immediate:!0}),(i,o)=>(ee(),fe("div",RC,[t.label?(ee(),fe("label",{key:0,for:t.id,class:"label"},Ke(t.label),9,PC)):Ee("",!0),Lr(Z("input",{id:t.id,type:t.type,placeholder:t.placeholder,"onUpdate:modelValue":o[0]||(o[0]=l=>s.value=l),class:"input",required:t.required},null,8,CC),[[hc,s.value]])]))}},kC={class:"item-center text-center"},VC={key:0,class:"error"},NC={__name:"Login",setup(t){const e=re(""),n=re(""),r=re(null),s=dl(),i=re(!1),o=qs(),l=async()=>{i.value=!0;const h=await oC(e.value,n.value);h.success?(o.setUser(h.user),s.push("/")):r.value=h.message,i.value=!1,r&&setTimeout(()=>{r.value=null},3e3)},c=()=>{s.push("/register")};return(h,f)=>(ee(),fe(Je,null,[ve(pl,{show:i.value},null,8,["show"]),Z("div",kC,[f[4]||(f[4]=Z("h1",{class:"title"},"Login",-1)),Z("div",null,[r.value?(ee(),fe("p",VC,Ke(r.value),1)):Ee("",!0)]),Z("form",{onSubmit:$a(l,["prevent"]),class:"form-container items-center"},[ve(xt,{id:"username",label:"FamilyId",placeholder:"Enter your FamilyId",modelValue:e.value,"onUpdate:modelValue":f[0]||(f[0]=p=>e.value=p)},null,8,["modelValue"]),ve(xt,{id:"password",label:"Password",type:"password",placeholder:"Enter your Password",modelValue:n.value,"onUpdate:modelValue":f[1]||(f[1]=p=>n.value=p)},null,8,["modelValue"]),ve(mr,{type:"submit"},{default:Tt(()=>[...f[2]||(f[2]=[rt("Login",-1)])]),_:1})],32),Z("div",{class:"link-container"},[f[3]||(f[3]=Z("p",null,"Don't have an account yet?",-1)),Z("a",{onClick:c,class:"btn"}," Register now")])])],64))}},DC={class:"item-center text-center"},OC={key:0,class:"status"},xC={key:1,class:"error"},MC={class:"flex flex-row gap-2"},LC={class:"input-container"},FC={key:0,for:"email",class:"label"},UC={class:"input-container"},BC={key:0,for:"password",class:"label"},$C=["type"],jC={class:"input-container"},qC={key:0,for:"password2",class:"label"},HC=["type"],WC={key:0,class:"flex items-center self-end"},zC={__name:"Register",setup(t){const e=re(""),n=re(""),r=re(""),s=re(""),i=re(null),o=re(null),l=dl(),c=re(!0),h=re(!1),f=re(!1),p=qs(),m=()=>r.value!==s.value?(o.value="Passwords do not match.",!1):!0,E=async()=>{f.value=!0;const F=await XP();c.value=!1,e.value=F,f.value=!1},S=async(F,D)=>{const $=await ZP(F,D);$.success||(o.value=$.message)},k=async()=>{if(m()){f.value=!0;const F=await aC(e.value,r.value,n.value);F.success?(await S(e.value,n.value),i.value=F.message,p.setUser(F.user)):o.value=F.message,f.value=!1,i.value&&setTimeout(()=>{i.value=null,l.push("/")},3e3)}o.value&&setTimeout(()=>{o.value=null},3e3)},V=()=>{l.push("/login")};return(F,D)=>(ee(),fe(Je,null,[ve(pl,{show:f.value},null,8,["show"]),Z("div",DC,[D[9]||(D[9]=Z("h1",{class:"title"},"Register",-1)),Z("div",null,[i.value?(ee(),fe("p",OC,Ke(i.value),1)):Ee("",!0),o.value?(ee(),fe("p",xC,Ke(o.value),1)):Ee("",!0)]),Z("form",{onSubmit:$a(k,["prevent"]),class:"form-container items-start"},[Z("div",MC,[Lr(Z("input",{type:"text",class:"input bg-gray-200 max-w-30 sm:max-w-50",required:"",disabled:"","onUpdate:modelValue":D[0]||(D[0]=$=>e.value=$)},null,512),[[ca,e.value]]),ve(mr,{onClick:E},{default:Tt(()=>[...D[5]||(D[5]=[rt(" Generate FamilyId ",-1)])]),_:1})]),Z("div",LC,[c.value?Ee("",!0):(ee(),fe("label",FC,"Email")),c.value?Ee("",!0):Lr((ee(),fe("input",{key:1,type:"Email",placeholder:"Email",class:"input lowercase",required:"","onUpdate:modelValue":D[1]||(D[1]=$=>n.value=$)},null,512)),[[ca,n.value]])]),Z("div",UC,[c.value?Ee("",!0):(ee(),fe("label",BC,"Password")),c.value?Ee("",!0):Lr((ee(),fe("input",{key:1,type:h.value?"text":"password",placeholder:"Password",class:"input",required:"","onUpdate:modelValue":D[2]||(D[2]=$=>r.value=$)},null,8,$C)),[[hc,r.value]])]),Z("div",jC,[c.value?Ee("",!0):(ee(),fe("label",qC,"Re-enter Password")),c.value?Ee("",!0):Lr((ee(),fe("input",{key:1,type:h.value?"text":"password",placeholder:"Re-enter Password",class:"input",required:"","onUpdate:modelValue":D[3]||(D[3]=$=>s.value=$)},null,8,HC)),[[hc,s.value]])]),c.value?Ee("",!0):(ee(),fe("div",WC,[Z("input",{onClick:D[4]||(D[4]=$=>h.value=!h.value),type:"checkbox",class:"mr-2"}),D[6]||(D[6]=Z("label",{class:"text-sm"}," Show Password ",-1))])),e.value?(ee(),At(mr,{key:1,class:"btn self-center",type:"submit"},{default:Tt(()=>[...D[7]||(D[7]=[rt(" Register ",-1)])]),_:1})):Ee("",!0)],32),Z("div",{class:"link-container"},[D[8]||(D[8]=Z("p",null,"Already have an account?",-1)),Z("a",{onClick:V,class:"btn"}," Login")])])],64))}},KC="/assets/edit-text-BlBhWhKQ.png",GC={class:"form-container items-end"},Dy={__name:"AppCard",props:{title:{type:String,default:""},data:{type:Object,required:!0},showEdit:{type:Boolean,default:!0},itemId:{type:Number,default:null}},emits:["edit"],setup(t,{emit:e}){const n=e,r=s=>{n("edit",s)};return(s,i)=>(ee(),fe("div",GC,[t.showEdit?(ee(),fe("img",{key:0,src:KC,alt:"Logo",class:"h-7 w-7 ml-1 cursor-pointer",onClick:i[0]||(i[0]=o=>r(t.itemId)),title:"Edit Details"})):Ee("",!0),(ee(!0),fe(Je,null,La(t.data,(o,l)=>(ee(),fe("div",{class:"card-container",key:l},[Z("p",null,Ke(l)+" :",1),Z("p",{class:Ki(l=="Email"?"lowercase":"capitalize")},Ke(o),3)]))),128))]))}},QC={class:"input-container"},YC=["for"],JC={value:"",disabled:"",selected:""},XC=["value"],tc={__name:"AppSelect",props:{id:String,label:String,modelValue:String,options:{type:Array,default:()=>[]},disabledText:{type:String,default:"Select an option"}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,r=e,s=re(n.modelValue);return dn(s,i=>r("update:modelValue",i),{immediate:!0}),(i,o)=>(ee(),fe("div",QC,[t.label?(ee(),fe("label",{key:0,for:t.id,class:"label"},Ke(t.label),9,YC)):Ee("",!0),Lr(Z("select",{"onUpdate:modelValue":o[0]||(o[0]=l=>s.value=l),class:"input",required:""},[Z("option",JC,Ke(t.disabledText),1),(ee(!0),fe(Je,null,La(t.options,l=>(ee(),fe("option",{key:l,value:l},Ke(l),9,XC))),128))],512),[[Mm,s.value]])]))}},ZC={class:"item-center text-center"},e1={key:0,class:"status"},t1={key:1,class:"error"},n1={class:"input-container mb-3 items-center"},r1={key:0},s1={class:"link-container"},i1={key:0},o1={__name:"Family",setup(t){const e=qs(),n=Vy(),r=dl(),s=re(""),i=re(""),o=re(""),l=re(""),c=re(""),h=re(""),f=re(""),p=re([]),m=re(""),E=re([]),S=re(!1),k=re(""),V=re(!1),F=re(!1),D=re({});dn(c,async y=>{y==="India"?(S.value=!0,p.value=await eC(),S.value=!1):(p.value=[],E.value=[],f.value="",m.value="")}),dn(f,async y=>{y?(S.value=!0,E.value=await tC(y),S.value=!1):E.value=[]});const $=()=>!i.value||!o.value||!c.value||!h.value||!f.value||c.value==="India"&&!m.value?(l.value="Please fill in all required fields.",!1):!0,q=async()=>{if(!e.user){l.value="User not authenticated.";return}if($()){const y=e.user.username;S.value=!0;const _={address1:i.value,address2:o.value,country:c.value,postal:h.value,state:f.value,district:m.value||"",updatedAt:new Date},T=await nC(y,_);T.success?(_.familyId=y,n.setFamily(_),k.value=T.message,S.value=!1,V.value=!0,F.value=!1,k.value&&setTimeout(()=>{k.value=""},3e3)):(l.value=T.message,S.value=!1),l.value&&setTimeout(()=>{l.value=""},3e3);return}},ie=async()=>{e.user&&(S.value=!0,V.value=!1,S.value=!1,F.value=!0)};ou(async()=>{if(e.user){S.value=!0;const y=e.user.username,_=await sC(y);if(_.success&&_.data){V.value=!0,s.value=_.data.email,i.value=_.data.address1,o.value=_.data.address2,c.value=_.data.country,h.value=_.data.postal,f.value=_.data.state,m.value=_.data.district;const T={FamilyId:y,Email:_.data.email,Address:_.data.address1+", "+_.data.address2,"State/Province":_.data.state,"Postal Code":_.data.postal};_.data.country==="India"&&(T.District=_.data.district),T.Country=_.data.country,D.value=T,_.data.familyId=y,n.setFamily(_.data)}else V.value=!1;S.value=!1}});const ye=()=>{n.family?(s.value=n.family.email,i.value=n.family.address1,o.value=n.family.address2,c.value=n.family.country,h.value=n.family.postal,f.value=n.family.state,m.value=n.family.district,V.value=!0,F.value=!1):(V.value=!1,F.value=!1)},b=()=>{r.push("/login")},v=()=>{r.push("/members")};return(y,_)=>(ee(),fe(Je,null,[ve(pl,{show:S.value},null,8,["show"]),Z("div",ZC,[_[9]||(_[9]=Z("h1",{class:"title"},"Family Details",-1)),Z("div",null,[k.value?(ee(),fe("p",e1,Ke(k.value),1)):Ee("",!0),l.value?(ee(),fe("p",t1,Ke(l.value),1)):Ee("",!0)]),V.value?(ee(),At(Dy,{key:0,data:D.value,onEdit:ie},null,8,["data"])):Ee("",!0),V.value?Ee("",!0):(ee(),fe("form",{key:1,onSubmit:$a(q,["prevent"]),class:"form-container items-start"},[Z("div",n1,[Le(e).user?(ee(),fe("p",r1,"Family Id: "+Ke(Le(e).user.username),1)):Ee("",!0),Z("p",null,"Email : "+Ke(s.value),1)]),ve(tc,{id:"country",label:"Country",modelValue:c.value,"onUpdate:modelValue":_[0]||(_[0]=T=>c.value=T),"disabled-text":"Select Country",options:["India","USA","Canada","UK","Australia"]},null,8,["modelValue"]),ve(xt,{id:"address1",label:"Address Line 1",placeholder:"Address Line 1",modelValue:i.value,"onUpdate:modelValue":_[1]||(_[1]=T=>i.value=T)},null,8,["modelValue"]),ve(xt,{id:"address2",label:"Address Line 2",placeholder:"Address Line 2",modelValue:o.value,"onUpdate:modelValue":_[2]||(_[2]=T=>o.value=T)},null,8,["modelValue"]),ve(xt,{id:"postal",label:"Postal Code",placeholder:"Postal Code",modelValue:h.value,"onUpdate:modelValue":_[3]||(_[3]=T=>h.value=T)},null,8,["modelValue"]),c.value!=="India"?(ee(),At(xt,{key:0,id:"state",label:"State/Province",placeholder:"State/Province",modelValue:f.value,"onUpdate:modelValue":_[4]||(_[4]=T=>f.value=T)},null,8,["modelValue"])):Ee("",!0),c.value==="India"?(ee(),At(tc,{key:1,id:"state",label:"State",modelValue:f.value,"onUpdate:modelValue":_[5]||(_[5]=T=>f.value=T),"disabled-text":"Select State",options:p.value},null,8,["modelValue","options"])):Ee("",!0),c.value==="India"?(ee(),At(tc,{key:2,id:"district",label:"District",modelValue:m.value,"onUpdate:modelValue":_[6]||(_[6]=T=>m.value=T),"disabled-text":"Select District",options:E.value},null,8,["modelValue","options"])):Ee("",!0),ve(mr,{class:"btn self-center",type:"submit"},{default:Tt(()=>[..._[7]||(_[7]=[rt("Add Details",-1)])]),_:1})],32)),Z("div",s1,[V.value?(ee(),fe("p",i1,"Want to add family members?")):Ee("",!0),V.value?(ee(),fe("a",{key:1,onClick:v,class:"btn"}," Add Members")):Ee("",!0)]),F.value?(ee(),At(mr,{key:2,onClick:ye},{default:Tt(()=>[..._[8]||(_[8]=[rt("Back",-1)])]),_:1})):Ee("",!0)])],64))}},a1={class:"input-container"},l1={for:"id",class:"label"},c1={class:"flex flex-row w-full text-left gap-5"},u1=["id","value"],Ip={__name:"AppRadio",props:{id:String,label:String,modelValue:String,options:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,r=e,s=re(n.modelValue);return dn(s,i=>r("update:modelValue",i),{immediate:!0}),(i,o)=>(ee(),fe("div",a1,[Z("label",l1,Ke(t.label),1),Z("div",c1,[(ee(!0),fe(Je,null,La(t.options,l=>(ee(),fe("label",{key:l},[Lr(Z("input",{type:"radio",id:l.toLowerCase(),value:l,class:"mr-1","onUpdate:modelValue":o[0]||(o[0]=c=>s.value=c)},null,8,u1),[[xm,s.value]]),rt(Ke(l),1)]))),128))])]))}},h1=t=>{if(!t)return date;if(t.includes("-")){let[e,n,r]=t.split("-");return`${r}-${n}-${e}`}else return t},f1=t=>{if(!t)return date;if(t.includes("-")){let[e,n,r]=t.split("-");return`${r}-${n.padStart(2,"0")}-${e.padStart(2,"0")}`}else return t},d1=t=>{if(!t)return"";const e=t.split(" "),n=e.length,r=e[0],s=n==3?e[1]:"",i=e[e.length-1];return{firstName:r,middleName:s,lastName:i}},p1=uu("members",()=>{const t=re([]);return{members:t,setMembers:s=>{t.value=s},clearMembers:()=>{t.value=null},findMemberById:s=>t.value&&t.value.find(o=>o.MemberId===s)||null}}),m1={class:"item-center text-center"},g1={key:0,class:"status"},_1={key:1,class:"error"},y1={key:0},v1={class:"flex flex-row justify-center w-full"},E1={class:"uppercase"},T1={class:"flex flex-row justify-center w-full"},w1={key:0},I1={class:"flex items-center self-end"},A1={__name:"Member",setup(t){const e=qs(),n=p1(),r=dl(),s=re(""),i=re(!1),o=re(""),l=re(!1),c=re(""),h=re(""),f=re(""),p=re("11/05/1985"),m=re(""),E=re(""),S=re(""),k=re(""),V=re("Unmarried"),F=re("Male"),D=re(!1),$=re([]),q=re(!1),ie=()=>{if(E.value)return/^\+?[0-9]{10,15}$/.test(E.value)?(s.value="",!0):(s.value="Please enter a valid mobile number (digits only).",E.value="",!1)},ye=async()=>{if(!e.user){s.value="User not authenticated.";return}if(ie){i.value=!0;const y={firstName:c.value,middleName:h.value,lastName:f.value,dob:p.value,email:m.value,mobile:E.value,education:S.value,occupation:k.value,maritalStatus:V.value,gender:F.value,hidePhone:D.value},_=e.user.username,T=await rC(_,y);T.success?(o.value=T.message,i.value=!1,l.value=!0,q.value=!1):(s.value=T.message,i.value=!1),s.value&&setTimeout(()=>{s.value=""},3e3),o.value&&setTimeout(()=>{o.value=""},3e3);return}},b=y=>{if(!e.user)redirectLogin;else{i.value=!0,l.value=!1;const _=n.findMemberById(y);if(_){const T=d1(_.Name);c.value=T.firstName,h.value=T.middleName,f.value=T.lastName,F.value=_.Gender,p.value=f1(_.DOB),m.value=_.Email,E.value=_["Mobile No"],S.value=_.Education,k.value=_.Occupation,V.value=_["Marital Status"]}i.value=!1,q.value=!0}},v=()=>{n.members?($.value=n.members.map(y=>({MemberId:y.MemberId,Name:y.Name,DOB:y.DOB,Gender:y.Gender,Email:y.Email,"Mobile No":y.hidePhone?"Hidden":y["Mobile No"],Education:y.Education,Occupation:y.Occupation,"Marital Status":y["Marital Status"]})),l.value=!0,q.value=!1):(l.value=!1,q.value=!1)};return ou(async()=>{if(!e.user)r.push("/login");else{i.value=!0;const y=await Ny(e.user.username);y.success?($.value=y.data.map(_=>({MemberId:_.memberId,Name:`${_.firstName} ${_.middleName} ${_.lastName}`,DOB:h1(_.dob),Gender:_.gender,Email:_.email,"Mobile No":_.hidePhone?"Hidden":_.mobile,Education:_.education,Occupation:_.occupation,"Marital Status":_.maritalStatus})),n.setMembers($.value),l.value=!0,q.value=!1):(l.value=!1,q.value=!0),i.value=!1}}),(y,_)=>(ee(),fe(Je,null,[ve(pl,{show:i.value},null,8,["show"]),Z("div",m1,[_[17]||(_[17]=Z("h1",{class:"title"},"Member Details",-1)),Z("div",null,[o.value?(ee(),fe("p",g1,Ke(o.value),1)):Ee("",!0),s.value?(ee(),fe("p",_1,Ke(s.value),1)):Ee("",!0)]),l.value?(ee(),fe("div",y1,[Z("div",v1,[_[12]||(_[12]=Z("p",null,"FamilyId :",-1)),Z("p",E1,Ke(Le(e).user.username),1)]),(ee(!0),fe(Je,null,La($.value,T=>(ee(),fe("div",{key:T.memberId,class:"flex justify-center"},[ve(Dy,{data:T,itemId:T.MemberId,onEdit:b},null,8,["data","itemId"])]))),128))])):Ee("",!0),l.value?Ee("",!0):(ee(),fe("form",{key:1,onSubmit:$a(ye,["prevent"]),class:"form-container items-start"},[Z("div",T1,[Le(e).user?(ee(),fe("p",w1,"Family Id: "+Ke(Le(e).user.username),1)):Ee("",!0)]),ve(xt,{id:"firstname",label:"First Name",placeholder:"First Name",modelValue:c.value,"onUpdate:modelValue":_[0]||(_[0]=T=>c.value=T)},null,8,["modelValue"]),ve(xt,{id:"middlename",label:"Middle Name",placeholder:"Middle Name",modelValue:h.value,"onUpdate:modelValue":_[1]||(_[1]=T=>h.value=T)},null,8,["modelValue"]),ve(xt,{id:"lastname",label:"Surname",placeholder:"Surname",modelValue:f.value,"onUpdate:modelValue":_[2]||(_[2]=T=>f.value=T)},null,8,["modelValue"]),ve(xt,{id:"dob",label:"Date of Birth",type:"date",placeholder:"Date of Birth",modelValue:p.value,"onUpdate:modelValue":_[3]||(_[3]=T=>p.value=T)},null,8,["modelValue"]),ve(Ip,{id:"gender",label:"Gender",modelValue:F.value,"onUpdate:modelValue":_[4]||(_[4]=T=>F.value=T),options:["Male","Female","Other"]},null,8,["modelValue"]),ve(xt,{id:"email",label:"Email",type:"Email",placeholder:"Email",modelValue:m.value,"onUpdate:modelValue":_[5]||(_[5]=T=>m.value=T)},null,8,["modelValue"]),ve(xt,{id:"phone",label:"Mobile No",type:"tel",placeholder:"Mobile No",modelValue:E.value,"onUpdate:modelValue":_[6]||(_[6]=T=>E.value=T)},null,8,["modelValue"]),Z("div",I1,[Z("input",{onClick:_[7]||(_[7]=T=>D.value=!D.value),type:"checkbox",class:"mr-2"}),_[13]||(_[13]=Z("label",{class:"text-sm"}," Hide ",-1))]),ve(xt,{id:"education",label:"Education",placeholder:"Education",modelValue:S.value,"onUpdate:modelValue":_[8]||(_[8]=T=>S.value=T)},null,8,["modelValue"]),ve(xt,{id:"occupation",label:"Occupation",placeholder:"Occupation",modelValue:k.value,"onUpdate:modelValue":_[9]||(_[9]=T=>k.value=T)},null,8,["modelValue"]),ve(Ip,{id:"maritalStatus",label:"Marital Status",modelValue:V.value,"onUpdate:modelValue":_[10]||(_[10]=T=>V.value=T),options:["Unmarried","Married"]},null,8,["modelValue"]),ve(mr,{class:"btn self-center",type:"submit"},{default:Tt(()=>[..._[14]||(_[14]=[rt("Add Details",-1)])]),_:1})],32)),l.value?(ee(),At(mr,{key:2,onClick:_[11]||(_[11]=T=>b("")),class:"btn"},{default:Tt(()=>[..._[15]||(_[15]=[rt(" Add Member ",-1)])]),_:1})):Ee("",!0),q.value?(ee(),At(mr,{key:3,onClick:v},{default:Tt(()=>[..._[16]||(_[16]=[rt("Back",-1)])]),_:1})):Ee("",!0)])],64))}},b1=YP({history:RP("/"),routes:[{path:"/",name:"home",component:vC},{path:"/about",name:"about",component:AC},{path:"/login",name:"login",component:NC},{path:"/register",name:"register",component:zC},{path:"/family",name:"family",component:o1},{path:"/members",name:"members",component:A1}],linkActiveClass:"bg-blue-500 text-white",linkExactActiveClass:"bg-blue-700 text-white"}),ih=AT(_C);ih.use(RT());ih.use(b1);vA(ul,t=>{t&&qs().setUser(t)});ih.mount("#app");
