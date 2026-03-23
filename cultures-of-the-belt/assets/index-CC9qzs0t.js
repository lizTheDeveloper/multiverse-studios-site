const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/megastructurePanel-DTzeda2p.js","assets/megastructures-BX_wE4JW.js","assets/safeHtml-CC8Elg0c.js","assets/advisorPanel-BYXyNxyu.js","assets/bufferLayout-CBw95Q_j.js","assets/advisorService-k0qOM6TL.js","assets/rolldown-runtime-lhHHWwHU.js","assets/fallbackChain-Dv9vdhNt.js","assets/gameState-DbKVjRZz.js","assets/hudButtonBar-CSSPaPV7.js","assets/tooltip-B772uU-z.js","assets/commanderService-CJmahcEL.js","assets/commanderDelegate-BFox9Lpo.js","assets/ariaSpectrum-DStXQW1O.js","assets/morningReport-CwsN4Ts9.js"])))=>i.map(i=>d[i]);
import{t as e}from"./rolldown-runtime-lhHHWwHU.js";import{t}from"./tooltip-B772uU-z.js";import{C as n,S as r,_ as i,a,b as o,c as s,d as c,f as l,g as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x,v as ee,x as S,y as C}from"./bufferLayout-CBw95Q_j.js";import{n as w,r as T,t as te}from"./safeHtml-CC8Elg0c.js";import{a as ne,c as re,d as ie,f as ae,g as oe,l as E,o as se,p as ce,r as le,u as ue,v as de,y as fe}from"./fallbackChain-Dv9vdhNt.js";import{n as pe,t as me}from"./hudButtonBar-CSSPaPV7.js";import{a as he,c as ge,d as _e,i as D,l as ve,o as ye,s as be,u as xe}from"./gameState-DbKVjRZz.js";import{A as Se,B as Ce,C as we,D as Te,E as Ee,F as De,I as Oe,L as ke,M as Ae,N as je,O,P as Me,R as Ne,S as k,T as Pe,V as Fe,_ as Ie,a as Le,b as Re,c as ze,d as A,f as Be,g as Ve,h as He,i as Ue,j as We,k as Ge,l as Ke,m as qe,n as Je,o as Ye,p as Xe,r as Ze,s as Qe,t as $e,u as et,v as tt,w as j,x as nt,y as rt,z as it}from"./vendor-three-DROVlajs.js";import{a as at,i as ot,n as st,r as ct}from"./advisorService-k0qOM6TL.js";import{n as lt}from"./megastructures-BX_wE4JW.js";import{n as ut,t as dt}from"./ariaSpectrum-DStXQW1O.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ft=typeof __SENTRY_DEBUG__>`u`||__SENTRY_DEBUG__,pt=globalThis,mt=`10.45.0`;function ht(){return gt(pt),pt}function gt(e){let t=e.__SENTRY__=e.__SENTRY__||{};return t.version=t.version||`10.45.0`,t[mt]=t[`10.45.0`]||{}}function _t(e,t,n=pt){let r=n.__SENTRY__=n.__SENTRY__||{},i=r[mt]=r[`10.45.0`]||{};return i[e]||(i[e]=t())}var vt=`Sentry Logger `,yt={};function bt(e){if(!(`console`in pt))return e();let t=pt.console,n={},r=Object.keys(yt);r.forEach(e=>{let r=yt[e];n[e]=t[e],t[e]=r});try{return e()}finally{r.forEach(e=>{t[e]=n[e]})}}function xt(){Ot().enabled=!0}function St(){Ot().enabled=!1}function Ct(){return Ot().enabled}function wt(...e){Dt(`log`,...e)}function Tt(...e){Dt(`warn`,...e)}function Et(...e){Dt(`error`,...e)}function Dt(e,...t){ft&&Ct()&&bt(()=>{pt.console[e](`${vt}[${e}]:`,...t)})}function Ot(){return ft?_t(`loggerSettings`,()=>({enabled:!1})):{enabled:!1}}var kt={enable:xt,disable:St,isEnabled:Ct,log:wt,warn:Tt,error:Et},At=Object.prototype.toString;function jt(e,t){return At.call(e)===`[object ${t}]`}function Mt(e){return jt(e,`Object`)}function Nt(e){return!!(e?.then&&typeof e.then==`function`)}function Pt(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch{ft&&kt.log(`Failed to add non-enumerable property "${t}" to object`,e)}}var Ft;function It(e){if(Ft!==void 0)return Ft?Ft(e):e();let t=Symbol.for(`__SENTRY_SAFE_RANDOM_ID_WRAPPER__`),n=pt;return t in n&&typeof n[t]==`function`?(Ft=n[t],Ft(e)):(Ft=null,e())}function Lt(){return It(()=>Math.random())}function Rt(){return It(()=>Date.now())}function zt(e,t=0){return typeof e!=`string`||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function Bt(){let e=pt;return e.crypto||e.msCrypto}var Vt;function Ht(){return Lt()*16}function Ut(e=Bt()){try{if(e?.randomUUID)return It(()=>e.randomUUID()).replace(/-/g,``)}catch{}return Vt||=`10000000100040008000100000000000`,Vt.replace(/[018]/g,e=>(e^(Ht()&15)>>e/4).toString(16))}var Wt=1e3;function Gt(){return Rt()/Wt}function Kt(){let{performance:e}=pt;if(!e?.now||!e.timeOrigin)return Gt;let t=e.timeOrigin;return()=>(t+It(()=>e.now()))/Wt}var qt;function Jt(){return(qt??=Kt())()}function Yt(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||Jt(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:Ut()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started==`number`&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration==`number`)e.duration=t.duration;else{let t=e.timestamp-e.started;e.duration=t>=0?t:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors==`number`&&(e.errors=t.errors),t.status&&(e.status=t.status)}function Xt(e,t,n=2){if(!t||typeof t!=`object`||n<=0)return t;if(e&&Object.keys(t).length===0)return e;let r={...e};for(let e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=Xt(r[e],t[e],n-1));return r}function Zt(){return Ut()}var Qt=`_sentrySpan`;function $t(e,t){t?Pt(e,Qt,t):delete e[Qt]}function en(e){return e[Qt]}var tn=100,nn=class e{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._attributes={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:Zt(),sampleRand:Lt()}}clone(){let t=new e;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._attributes={...this._attributes},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,t._conversationId=this._conversationId,$t(t,en(this)),t}setClient(e){this._client=e}setLastEventId(e){this._lastEventId=e}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&Yt(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}setConversationId(e){return this._conversationId=e||void 0,this._notifyScopeListeners(),this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this.setTags({[e]:t})}setAttributes(e){return this._attributes={...this._attributes,...e},this._notifyScopeListeners(),this}setAttribute(e,t){return this.setAttributes({[e]:t})}removeAttribute(e){return e in this._attributes&&(delete this._attributes[e],this._notifyScopeListeners()),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return t===null?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;let n=typeof t==`function`?t(this):t,{tags:r,attributes:i,extra:a,user:o,contexts:s,level:c,fingerprint:l=[],propagationContext:u,conversationId:d}=(n instanceof e?n.getScopeData():Mt(n)?t:void 0)||{};return this._tags={...this._tags,...r},this._attributes={...this._attributes,...i},this._extra={...this._extra,...a},this._contexts={...this._contexts,...s},o&&Object.keys(o).length&&(this._user=o),c&&(this._level=c),l.length&&(this._fingerprint=l),u&&(this._propagationContext=u),d&&(this._conversationId=d),this}clear(){return this._breadcrumbs=[],this._tags={},this._attributes={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,this._conversationId=void 0,$t(this,void 0),this._attachments=[],this.setPropagationContext({traceId:Zt(),sampleRand:Lt()}),this._notifyScopeListeners(),this}addBreadcrumb(e,t){let n=typeof t==`number`?t:tn;if(n<=0)return this;let r={timestamp:Gt(),...e,message:e.message?zt(e.message,2048):e.message};return this._breadcrumbs.push(r),this._breadcrumbs.length>n&&(this._breadcrumbs=this._breadcrumbs.slice(-n),this._client?.recordDroppedEvent(`buffer_overflow`,`log_item`)),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,attributes:this._attributes,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:en(this),conversationId:this._conversationId}}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata=Xt(this._sdkProcessingMetadata,e,2),this}setPropagationContext(e){return this._propagationContext=e,this}getPropagationContext(){return this._propagationContext}captureException(e,t){let n=t?.event_id||Ut();if(!this._client)return ft&&kt.warn(`No client configured on scope - will not capture exception!`),n;let r=Error(`Sentry syntheticException`);return this._client.captureException(e,{originalException:e,syntheticException:r,...t,event_id:n},this),n}captureMessage(e,t,n){let r=n?.event_id||Ut();if(!this._client)return ft&&kt.warn(`No client configured on scope - will not capture message!`),r;let i=n?.syntheticException??Error(e);return this._client.captureMessage(e,t,{originalException:e,syntheticException:i,...n,event_id:r},this),r}captureEvent(e,t){let n=e.event_id||t?.event_id||Ut();return this._client?(this._client.captureEvent(e,{...t,event_id:n},this),n):(ft&&kt.warn(`No client configured on scope - will not capture event!`),n)}_notifyScopeListeners(){this._notifyingListeners||=(this._notifyingListeners=!0,this._scopeListeners.forEach(e=>{e(this)}),!1)}};function rn(){return _t(`defaultCurrentScope`,()=>new nn)}function an(){return _t(`defaultIsolationScope`,()=>new nn)}var on=class{constructor(e,t){let n;n=e||new nn;let r;r=t||new nn,this._stack=[{scope:n}],this._isolationScope=r}withScope(e){let t=this._pushScope(),n;try{n=e(t)}catch(e){throw this._popScope(),e}return Nt(n)?n.then(e=>(this._popScope(),e),e=>{throw this._popScope(),e}):(this._popScope(),n)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){let e=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:e}),e}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}};function sn(){let e=gt(ht());return e.stack=e.stack||new on(rn(),an())}function cn(e){return sn().withScope(e)}function ln(e,t){let n=sn();return n.withScope(()=>(n.getStackTop().scope=e,t(e)))}function un(e){return sn().withScope(()=>e(sn().getIsolationScope()))}function dn(){return{withIsolationScope:un,withScope:cn,withSetScope:ln,withSetIsolationScope:(e,t)=>un(t),getCurrentScope:()=>sn().getScope(),getIsolationScope:()=>sn().getIsolationScope()}}function fn(e){let t=gt(e);return t.acs?t.acs:dn()}function pn(){return fn(ht()).getCurrentScope()}function mn(){return fn(ht()).getIsolationScope()}function hn(){return pn().getClient()}function gn(e){if(e)return _n(e)||yn(e)?{captureContext:e}:e}function _n(e){return e instanceof nn||typeof e==`function`}var vn=[`user`,`level`,`extra`,`contexts`,`tags`,`fingerprint`,`propagationContext`];function yn(e){return Object.keys(e).some(e=>vn.includes(e))}function bn(e,t){return pn().captureException(e,gn(t))}var xn=100;function Sn(e,t){let n=hn(),r=mn();if(!n)return;let{beforeBreadcrumb:i=null,maxBreadcrumbs:a=xn}=n.getOptions();if(a<=0)return;let o={timestamp:Gt(),...e},s=i?bt(()=>i(o,t)):o;s!==null&&(n.emit&&n.emit(`beforeAddBreadcrumb`,s,t),r.addBreadcrumb(s,a))}var Cn=1e3/60,wn=null;function Tn(e){wn=e}var En=200,Dn=60,On=!1,kn=!1,An=0,jn=0,Mn=null,Nn=0,Pn=0,Fn=[],In=0,Ln=0;function Rn(){let e=Fn.length>0?Ln/Fn.length:0;return{fps:e>0?1e3/e:0,frameTimeMs:Nn,simTicksThisFrame:Pn,avgFrameTimeMs:e}}function zn(e){if(!On)return;if(requestAnimationFrame(zn),jn===0){jn=e;return}let t=e-jn;if(jn=e,Nn=t,Fn.length<Dn?(Fn.push(t),Ln+=t):(Ln-=Fn[In],Fn[In]=t,Ln+=t,In=(In+1)%Dn),kn||!Mn)return;for(An+=Math.min(t,En),Pn=0;An>=Cn;){try{Mn.onFixedUpdate(Cn/1e3)}catch(e){console.error(`[gameLoop] onFixedUpdate threw:`,e),bn(e)}An-=Cn,Pn++}let n=An/Cn;try{Mn.onRender(n)}catch(e){console.error(`[gameLoop] onRender threw:`,e),bn(e),wn&&wn(e)}}function Bn(e){Mn=e,On=!0,kn=!1,An=0,jn=0,Fn.length=0,In=0,Ln=0,requestAnimationFrame(zn)}function Vn(){kn=!0}function Hn(){kn=!1,jn=0,An=0}function Un(){return kn}var Wn=null,Gn=null,Kn={warning:5e3,danger:5e3,info:3e3,success:3e3,research:3e3,build:3e3},qn=3e3,Jn=3,Yn=1e4,Xn=new Map,Zn=new Map,Qn=0,$n=1e4,er=0,tr=[],nr=3e3,rr=4,ir=null,ar=3,or=15e3,sr=new Map;function cr(){er=Date.now()+$n}function lr(e,t=400){let n=Date.now();if(n<er||n-Qn<Yn)return;Qn=n,Gn||(Gn=document.createElement(`div`),Gn.style.cssText=`
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 200;
      opacity: 0;
      transition: opacity 0.4s ease;
    `,document.body.appendChild(Gn));let r=Gn;r.style.background=`radial-gradient(ellipse at center, transparent 40%, ${e}33 100%)`,r.style.opacity=`0.4`,r.style.transition=`opacity 0.4s ease`,setTimeout(()=>{r.style.transition=`opacity ${Math.max(t,600)}ms ease`,r.style.opacity=`0`},400)}function ur(){return Wn||(Wn=document.createElement(`div`),Wn.style.cssText=`
      position: fixed;
      top: 185px;
      right: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      z-index: 100;
      pointer-events: none;
      max-width: 320px;
    `,document.body.appendChild(Wn)),Wn}(function(){if(document.getElementById(`anomaly-glow-style`))return;let e=document.createElement(`style`);e.id=`anomaly-glow-style`,e.textContent=`
    @keyframes anomalyGlowPulse {
      0%   { box-shadow: 0 0 6px var(--anomaly-color, #a855f7), inset 0 0 8px rgba(0,0,0,0.5); }
      50%  { box-shadow: 0 0 18px var(--anomaly-color, #a855f7), 0 0 32px var(--anomaly-color, #a855f7)55, inset 0 0 8px rgba(0,0,0,0.5); }
      100% { box-shadow: 0 0 6px var(--anomaly-color, #a855f7), inset 0 0 8px rgba(0,0,0,0.5); }
    }
  `,document.head.appendChild(e)})();function dr(e,t,i,a,o){let s=n[t]??`Unknown Anomaly`,c=r[t]??`#ffffff`,l=Math.round(i),u=Math.round(a),d=Math.round(o),f=document.createElement(`div`);f.style.cssText=`
    --anomaly-color: ${c};
    background: rgba(0, 8, 20, 0.88);
    border: 1px solid ${c};
    box-shadow: 0 0 8px ${c}44, inset 0 0 8px rgba(0,0,0,0.5);
    color: ${c};
    font-family: 'Courier New', monospace;
    font-size: 11px;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 2px;
    opacity: 0;
    transform: translateX(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    animation: anomalyGlowPulse 1.6s ease-in-out 3;
    pointer-events: none;
  `,f.innerHTML=w`
    <div style="font-size:10px;opacity:0.6;text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">ANOMALY DETECTED</div>
    <div style="font-weight:bold;">${s}</div>
    <div style="opacity:0.8;">Robot-${e} at (${l}, ${u}, ${d})</div>
  `,ur().appendChild(f),requestAnimationFrame(()=>{f.style.opacity=`1`,f.style.transform=`translateX(0)`}),setTimeout(()=>{f.style.opacity=`0`,f.style.transform=`translateX(20px)`,setTimeout(()=>f.remove(),350)},8e3)}function fr(){let e=document.createElement(`div`);e.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;let t=document.createElement(`div`);t.style.cssText=`
    background: rgba(0, 8, 20, 0.96);
    border: 2px solid #ef4444;
    box-shadow: 0 0 32px #ef444488, inset 0 0 16px rgba(0,0,0,0.6);
    color: #ef4444;
    font-family: 'Courier New', monospace;
    padding: 32px 40px;
    border-radius: 4px;
    max-width: 420px;
    text-align: center;
  `,t.innerHTML=`
    <div style="font-size:11px;opacity:0.6;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">CRITICAL ERROR</div>
    <div style="font-size:18px;font-weight:bold;margin-bottom:12px;">Simulation Worker Crashed</div>
    <div style="font-size:13px;opacity:0.8;line-height:1.6;margin-bottom:24px;">
      The simulation has stopped unexpectedly. Game state may be inconsistent.<br>
      Reload to restart.
    </div>
    <button id="worker-crash-reload" style="
      background: #ef4444;
      color: #fff;
      border: none;
      padding: 10px 28px;
      font-family: 'Courier New', monospace;
      font-size:13px;
      font-weight:bold;
      letter-spacing:1px;
      cursor:pointer;
      border-radius:2px;
      text-transform:uppercase;
    ">Reload Game</button>
  `,e.appendChild(t),document.body.appendChild(e),document.getElementById(`worker-crash-reload`)?.addEventListener(`click`,()=>{window.location.reload()})}var pr={info:`◈`,success:`✓`,warning:`⚠`,danger:`✗`,research:`◆`,build:`⚙`},mr={info:`INFO`,success:`OPPORTUNITY`,warning:`WARNING`,danger:`ALERT`,research:`RESEARCH`,build:`BUILD`};function hr(){if(ir=null,tr.length===0)return;let e=tr.shift();gr(e.message,e.color,e.category),tr.length>0&&(ir=setTimeout(hr,nr))}function M(e,t=`#22c55e`,n){let r=Date.now();if(r<er)return;let i=n??`default`,a=Kn[i]??qn;if(!(r-(Zn.get(e)??0)<5e3)){if(r-(Xn.get(i)??0)<a){tr.length<rr&&(tr.push({message:e,color:t,category:n}),ir===null&&(ir=setTimeout(hr,nr)));return}gr(e,t,n)}}function gr(e,t,n){let r=Date.now(),i=n??`default`;Xn.set(i,r),Zn.set(e,r);let a=sr.get(i);if(a&&r-a.firstTime<or){if(a.count++,a.latestMessage=e,a.count>=ar&&a.element?.parentNode){let t=a.element.querySelector(`[data-collapse-badge]`);t&&(t.textContent=`×${a.count}`);let n=a.element.querySelector(`[data-collapse-msg]`);n&&(n.textContent=e);return}}else sr.set(i,{count:1,firstTime:r,latestMessage:e,element:null});let o=ur();for(;o.children.length>=Jn&&o.firstChild;)o.firstChild.remove();let s=n?pr[n]:null,c=n===`danger`||n===`warning`,l=document.createElement(`div`);l.style.cssText=`
    background: rgba(0, 8, 20, 0.88);
    border: 1px solid ${t};
    border-left: 3px solid ${t};
    box-shadow: 0 0 8px ${t}44;
    color: ${t};
    font-family: 'Courier New', monospace;
    font-size: 11px;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 2px;
    opacity: 0;
    transform: translateX(20px) scale(0.96);
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
    display: flex;
    align-items: center;
    gap: 8px;
  `;let u=s?`<span style="font-size:14px;opacity:0.9;flex-shrink:0;">${s}</span>`:``,d=n?`<div style="font-size:9px;opacity:0.6;text-transform:uppercase;letter-spacing:1px;margin-bottom:1px;">${mr[n]}</div>`:``;l.innerHTML=w`${T(u)}<div>${T(d)}<div style="font-weight:bold;display:flex;align-items:center;"><span data-collapse-msg>${e}</span>${T(`<span data-collapse-badge style="font-size:10px;opacity:0.7;margin-left:4px;"></span>`)}</div></div>`,ur().appendChild(l);let f=sr.get(i);f&&(f.element=l),requestAnimationFrame(()=>{l.style.opacity=`1`,l.style.transform=`translateX(0) scale(1)`});let p=c?7e3:5e3;setTimeout(()=>{l.style.opacity=`0`,l.style.transform=`translateX(20px) scale(0.96)`,setTimeout(()=>{l.remove();let e=sr.get(i);e&&e.element===l&&sr.delete(i)},350)},p)}var _r=`asteroid_miner_legacy`,vr=[`Nascent`,`Developing`,`Emerging`,`Established`,`Flourishing`];function yr(e){let t=vr.indexOf(e);return t>=0?t:0}function br(){try{let e=localStorage.getItem(_r);if(!e)return null;let t=JSON.parse(e);if(!t||typeof t!=`object`||Array.isArray(t))return null;let n=t;return typeof n.expeditionCount!=`number`||typeof n.totalLegacies!=`number`?null:t}catch{return null}}function xr(e){try{localStorage.setItem(_r,JSON.stringify(e))}catch{}}function Sr(e,t){let n=e??{expeditionCount:0,totalLegacies:0,bestRobotName:null,bestCultureLabel:`Nascent`,bestTick:0};return{expeditionCount:n.expeditionCount+1,totalLegacies:n.totalLegacies+t.legacyCount,bestRobotName:t.topRobotName??n.bestRobotName,bestCultureLabel:yr(t.cultureLabel)>yr(n.bestCultureLabel)?t.cultureLabel:n.bestCultureLabel,bestTick:Math.max(n.bestTick,t.tick)}}var Cr=document.getElementById(`fps-counter`),wr=document.getElementById(`entity-counter`),Tr=null,Er=null,Dr=60,Or=Dr*24,kr=null;function Ar(){if(kr===null){let e=br();kr=e?e.expeditionCount+1:1}return kr}function jr(){if(!Er){Er=document.createElement(`div`),Er.style.cssText=`
      position: fixed;
      top: 8px;
      right: 176px;
      font-size: 12px;
      font-family: 'Courier New', monospace;
      color: #88ccff;
      opacity: 0.85;
      text-align: right;
    `,t(Er,`In-game elapsed time
1 real second = 1 game hour`),document.body.appendChild(Er);let e=Ar();if(e>1){let n=document.createElement(`div`);n.style.cssText=`
        font-size: 9px;
        color: #a855f7;
        opacity: 0.7;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-top: 2px;
      `,n.textContent=`Expedition ${e}`,t(n,`You are on expedition ${e}.\nLegacy bonuses are active.`),Er.appendChild(n)}}return Er}Cr&&t(Cr,`Frames per second — target 60`),wr&&t(wr,`Total entities in simulation
(asteroids + robots + anomalous entities)`);function Mr(){return Tr||(Tr=document.createElement(`div`),Tr.style.cssText=`
      position: fixed;
      top: 40px;
      left: 8px;
      font-size: 11px;
      opacity: 0.8;
      font-family: 'Courier New', monospace;
      color: #aaffaa;
      line-height: 1.4;
    `,t(Tr,`Raw ore in base storage
Fe=Iron · C=Carbon · Si=Silicon · H₂O=Water
Press D to open the full dashboard`),document.body.appendChild(Tr)),Tr}function Nr(e){let n=document.createElement(`button`);n.id=`home-btn`,n.title=`Return to base (Home key)`,n.setAttribute(`aria-label`,`Return camera to base station`),n.textContent=`⌂`,n.style.cssText=`
    position: fixed;
    top: 180px;
    right: 8px;
    width: 160px;
    height: 28px;
    background: rgba(0,20,0,0.75);
    color: #4aff4a;
    border: 1px solid #4aff4a55;
    border-radius: 4px;
    font-size: 13px;
    cursor: pointer;
    z-index: 20;
    pointer-events: auto;
    transition: background 0.15s;
    font-family: 'Courier New', monospace;
  `,n.addEventListener(`mouseenter`,()=>{n.style.background=`rgba(0,60,0,0.85)`}),n.addEventListener(`mouseleave`,()=>{n.style.background=`rgba(0,20,0,0.75)`}),n.addEventListener(`click`,e),t(n,`Return camera to base (Home key)`),document.body.appendChild(n)}function Pr(e,t,n,r){Cr&&(Cr.textContent=`FPS: ${Math.round(e)}`),wr&&(wr.textContent=`Asteroids: ${n} | Robots: ${r} | Total: ${t}`)}function Fr(e){let t=jr(),n=Math.floor(e/Or)+1,r=Math.floor(e%Or/Dr),i=e%Dr;t.textContent=`Day ${n}  ${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`}function Ir(e,t,n,r){let i=Mr();i.textContent=`Fe: ${Math.floor(e)} | C: ${Math.floor(t)} | Si: ${Math.floor(n)} | H₂O: ${Math.floor(r)}`}function Lr(e){let t=Mr();if(e){if(t.style.animation=`hud-pulse 1.2s ease-in-out infinite`,t.style.textShadow=`0 0 8px rgba(170,255,170,0.7)`,!document.getElementById(`hud-pulse-style`)){let e=document.createElement(`style`);e.id=`hud-pulse-style`,e.textContent=`@keyframes hud-pulse {
        0%, 100% { opacity: 0.85; }
        50% { opacity: 1; }
      }`,document.head.appendChild(e)}}else t.style.animation=``,t.style.textShadow=``}var Rr=[1,2,4],zr=null,Br=null,Vr=0;function Hr(){return zr||(zr=document.createElement(`button`),zr.id=`speed-control`,zr.style.cssText=`
    position: fixed;
    top: 8px;
    right: 280px;
    font-size: 12px;
    font-family: 'Courier New', monospace;
    color: #4ade80;
    background: rgba(0,20,0,0.75);
    border: 1px solid rgba(74,222,128,0.3);
    border-radius: 4px;
    padding: 2px 8px;
    cursor: pointer;
    z-index: 20;
    pointer-events: auto;
    transition: background 0.15s;
  `,zr.addEventListener(`mouseenter`,()=>{zr.style.background=`rgba(0,60,0,0.85)`}),zr.addEventListener(`mouseleave`,()=>{zr.style.background=`rgba(0,20,0,0.75)`}),zr.addEventListener(`click`,()=>Wr()),t(zr,`Game speed — click or press , / . to change`),Ur(),document.body.appendChild(zr),zr)}function Ur(){if(!zr)return;let e=Rr[Vr];zr.textContent=`▶ ${e}×`,zr.style.color=e===1?`#88ccff`:e===2?`#4ade80`:`#f59e0b`,zr.style.borderColor=e===1?`rgba(100,150,255,0.3)`:e===2?`rgba(74,222,128,0.3)`:`rgba(245,158,11,0.3)`}function Wr(){Vr=(Vr+1)%Rr.length,Ur(),Br&&Br(Rr[Vr])}function Gr(e){Br=e,Hr()}function Kr(){Vr<Rr.length-1&&(Vr++,Ur(),Br&&Br(Rr[Vr]))}function qr(){Vr>0&&(Vr--,Ur(),Br&&Br(Rr[Vr]))}function Jr(){Vr=0,Ur()}var Yr=null;function Xr(){if(!Yr){if(Yr=document.createElement(`div`),Yr.style.cssText=`
      position: absolute;
      bottom: 60px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(40,20,0,0.88);
      border: 1px solid rgba(245,158,11,0.6);
      border-radius: 6px;
      padding: 6px 14px;
      font-family: 'Courier New', monospace;
      font-size: 12px;
      color: #f59e0b;
      z-index: 60;
      pointer-events: none;
      white-space: nowrap;
      text-align: center;
      animation: cluster-pulse 1.5s ease-in-out infinite;
      display: none;
    `,!document.getElementById(`cluster-pulse-style`)){let e=document.createElement(`style`);e.id=`cluster-pulse-style`,e.textContent=`@keyframes cluster-pulse {
        0%, 100% { border-color: rgba(245,158,11,0.6); box-shadow: 0 0 6px rgba(245,158,11,0.2); }
        50% { border-color: rgba(245,158,11,1); box-shadow: 0 0 12px rgba(245,158,11,0.5); }
      }`,document.head.appendChild(e)}let e=document.getElementById(`hud-overlay`);e?e.appendChild(Yr):document.body.appendChild(Yr)}return Yr}function Zr(e){let t=Xr();if(e.length===0){t.style.display=`none`;return}t.innerHTML=`<span style="opacity:0.6;text-transform:uppercase;letter-spacing:1px;font-size:9px">TRANSIENT CLUSTER</span><br>`+e.map(e=>{let t=Math.ceil(e.ticksRemaining/60),n=t<=60?`#ef4444`:`#f59e0b`,r=Math.floor(t/60),i=t%60,a=r>0?i>0?`${r} min ${i}s`:`${r} min`:`${t}s`;return`<span style="color:${n}">CLUSTER #${e.clusterId}: ${a}</span>`}).join(`<br>`),t.style.display=`block`,e.some(e=>e.ticksRemaining<=3600)?(t.style.borderColor=`rgba(239,68,68,0.8)`,t.style.animationDuration=`0.6s`):(t.style.borderColor=`rgba(245,158,11,0.6)`,t.style.animationDuration=`1.5s`)}function Qr(){Yr&&(Yr.style.display=`none`)}var $r=null;function ei(){if(!$r){if($r=document.createElement(`div`),$r.style.cssText=`
      position: absolute;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(60,10,10,0.92);
      border: 1px solid rgba(239,68,68,0.6);
      border-radius: 6px;
      padding: 6px 14px;
      font-family: 'Courier New', monospace;
      font-size: 12px;
      color: #ef4444;
      z-index: 60;
      pointer-events: none;
      white-space: nowrap;
      text-align: center;
      animation: mega-crisis-pulse 1.2s ease-in-out infinite;
      display: none;
    `,!document.getElementById(`mega-crisis-pulse-style`)){let e=document.createElement(`style`);e.id=`mega-crisis-pulse-style`,e.textContent=`@keyframes mega-crisis-pulse {
        0%, 100% { border-color: rgba(239,68,68,0.6); box-shadow: 0 0 8px rgba(239,68,68,0.2); }
        50% { border-color: rgba(239,68,68,1); box-shadow: 0 0 16px rgba(239,68,68,0.6); }
      }`,document.head.appendChild(e)}let e=document.getElementById(`hud-overlay`);e?e.appendChild($r):document.body.appendChild($r)}return $r}function ti(e){let t=ei();if(e.length===0){t.style.display=`none`;return}t.innerHTML=`<span style="opacity:0.7;text-transform:uppercase;letter-spacing:1px;font-size:9px;color:#f87171">⚠ STAGE CRISIS</span><br>`+e.map(e=>`<span style="color:${e.ticksRemaining<=5?`#fbbf24`:`#ef4444`}">${e.structureName} — ${e.stageName}: ${e.ticksRemaining} ticks</span>`).join(`<br>`),t.style.display=`block`,e.some(e=>e.ticksRemaining<=5)?(t.style.borderColor=`rgba(251,191,36,0.8)`,t.style.animationDuration=`0.4s`):(t.style.borderColor=`rgba(239,68,68,0.6)`,t.style.animationDuration=`1.2s`)}var ni=null;function ri(e,t){if(!ni){ni=document.createElement(`div`),ni.style.cssText=`
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(5,20,40,0.88);
      border: 1px solid rgba(34,211,238,0.4);
      border-radius: 4px;
      padding: 4px 8px 4px 10px;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      color: #22d3ee;
      z-index: 60;
      display: flex;
      align-items: center;
      gap: 10px;
      white-space: nowrap;
      pointer-events: auto;
    `;let e=document.getElementById(`hud-overlay`);e&&e.appendChild(ni)}let n=document.createElement(`button`);n.textContent=`⌂ Return to Base`,n.style.cssText=`
    background: rgba(0,40,20,0.8);
    border: 1px solid rgba(74,222,128,0.4);
    border-radius: 3px;
    color: #4ade80;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    padding: 2px 7px;
  `,n.addEventListener(`click`,t),ni.innerHTML=``;let r=document.createElement(`span`);r.textContent=`Following Robot #${e}`,ni.appendChild(r),ni.appendChild(n),ni.style.display=`flex`}function ii(){ni&&(ni.style.display=`none`)}var ai=`asteroid_miner_obj_dismissed`;function oi(){try{if(localStorage.getItem(ai))return}catch{}let e=document.createElement(`div`);e.style.cssText=`
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(5,10,25,0.82);
    border: 1px solid rgba(100,180,255,0.25);
    border-radius: 4px;
    padding: 4px 10px 4px 12px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    color: rgba(160,200,255,0.8);
    z-index: 50;
    display: flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
    pointer-events: auto;
  `;let n=document.createElement(`span`);n.innerHTML=`<span style="opacity:0.5;text-transform:uppercase;letter-spacing:1px;font-size:9px;margin-right:6px;">MISSION</span>Mine resources · Research technology · Build the Orbital Platform`,e.appendChild(n);let r=document.createElement(`button`);r.textContent=`✕`,r.setAttribute(`aria-label`,`Dismiss mission objective`),r.style.cssText=`
    background: none;
    border: none;
    color: rgba(120,150,200,0.5);
    cursor: pointer;
    font-size: 10px;
    padding: 0 2px;
    font-family: 'Courier New', monospace;
    line-height: 1;
  `,r.addEventListener(`click`,()=>{e.style.opacity=`0`,e.style.transition=`opacity 0.3s`,setTimeout(()=>e.remove(),300);try{localStorage.setItem(ai,`1`)}catch{}}),e.appendChild(r),t(e,`Your long-term goal: accumulate resources, research the tech tree,
and construct the Orbital Platform megastructure.
Press G to view megastructure progress.`);let i=document.getElementById(`hud-overlay`);i&&i.appendChild(e)}var si=`asteroid_miner_build_toast_seen`;function ci(){try{if(localStorage.getItem(si))return}catch{}setTimeout(()=>{M(`Press [C] to open the Build panel and construct your first robot 🤖`,`#88ccff`);try{localStorage.setItem(si,`1`)}catch{}},1e4)}var li=null,ui=null;function di(){li||(li=document.createElement(`button`),li.id=`bug-report-btn`,li.textContent=`🐛 Report a Bug`,li.setAttribute(`aria-label`,`Report a bug`),li.style.cssText=`
    position: fixed;
    bottom: 12px;
    right: 12px;
    padding: 6px 14px;
    background: rgba(0, 8, 20, 0.85);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.4);
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    cursor: pointer;
    z-index: 50;
    pointer-events: auto;
    transition: background 0.15s, border-color 0.15s;
  `,li.addEventListener(`mouseenter`,()=>{li.style.background=`rgba(40, 30, 0, 0.9)`,li.style.borderColor=`rgba(245, 158, 11, 0.7)`}),li.addEventListener(`mouseleave`,()=>{li.style.background=`rgba(0, 8, 20, 0.85)`,li.style.borderColor=`rgba(245, 158, 11, 0.4)`}),li.addEventListener(`click`,fi),document.body.appendChild(li))}function fi(){if(ui)return;ui=document.createElement(`div`),ui.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9000;
    pointer-events: auto;
  `;let e=document.createElement(`div`);e.style.cssText=`
    background: rgba(0, 8, 20, 0.96);
    border: 1px solid rgba(245, 158, 11, 0.4);
    border-radius: 6px;
    padding: 24px 28px;
    max-width: 400px;
    width: 90%;
    font-family: 'Courier New', monospace;
    color: #e2e8f0;
  `;let t=document.createElement(`div`);t.textContent=`Report a Bug`,t.style.cssText=`
    font-size: 16px;
    font-weight: bold;
    color: #f59e0b;
    margin-bottom: 16px;
  `,e.appendChild(t);let n=document.createElement(`label`);n.textContent=`What went wrong?`,n.style.cssText=`display:block; font-size:12px; color:#94a3b8; margin-bottom:4px;`,e.appendChild(n);let r=document.createElement(`textarea`);r.placeholder=`Describe what happened...`,r.rows=3,r.style.cssText=mi(),e.appendChild(r);let i=document.createElement(`label`);i.textContent=`What were you trying to do?`,i.style.cssText=`display:block; font-size:12px; color:#94a3b8; margin-bottom:4px; margin-top:12px;`,e.appendChild(i);let a=document.createElement(`textarea`);a.placeholder=`Optional — what were you doing when this happened?`,a.rows=2,a.style.cssText=mi(),e.appendChild(a);let o=document.createElement(`div`);o.style.cssText=`display:flex; gap:10px; margin-top:16px; justify-content:flex-end;`;let s=document.createElement(`button`);s.textContent=`Cancel`,s.style.cssText=`
    padding: 6px 16px;
    background: rgba(30,30,40,0.8);
    color: #94a3b8;
    border: 1px solid rgba(100,100,120,0.4);
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    cursor: pointer;
  `,s.addEventListener(`click`,pi),o.appendChild(s);let c=document.createElement(`button`);c.textContent=`Submit`,c.style.cssText=`
    padding: 6px 16px;
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.5);
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    font-weight: bold;
    cursor: pointer;
  `,c.addEventListener(`click`,async()=>{let e=r.value.trim();if(!e){r.style.borderColor=`#ef4444`,r.focus();return}c.disabled=!0,c.textContent=`Sending...`,await hi(e,a.value.trim())}),o.appendChild(c),e.appendChild(o),ui.appendChild(e),ui.addEventListener(`click`,e=>{e.target===ui&&pi()});let l=e=>{e.key===`Escape`&&(pi(),document.removeEventListener(`keydown`,l))};document.addEventListener(`keydown`,l),document.body.appendChild(ui),r.focus()}function pi(){ui&&=(ui.remove(),null)}function mi(){return`
    display: block;
    width: 100%;
    padding: 8px 10px;
    background: rgba(0, 0, 0, 0.5);
    color: #e2e8f0;
    border: 1px solid rgba(100, 150, 255, 0.25);
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    resize: vertical;
  `}async function hi(e,t){let n=localStorage.getItem(`aria_proxy_key`)??void 0,r=localStorage.getItem(`asteroid_miner_session`)??crypto.randomUUID();localStorage.setItem(`asteroid_miner_session`,r);let i={game:`cultures-of-the-belt`,whatWentWrong:e,whatWereDoing:t||void 0,sessionId:r,userAgent:navigator.userAgent,timestamp:new Date().toISOString(),url:window.location.href},a=!1;try{let e=fe();a=(await fetch(`${e}/v1/bug-report`,{method:`POST`,headers:{"Content-Type":`application/json`,...n?{Authorization:`Bearer ${n}`}:{}},body:JSON.stringify(i)})).ok}catch{}a?_i():gi()}function gi(){pi();let e=document.createElement(`div`);e.style.cssText=`
    position: fixed;
    bottom: 50px;
    right: 12px;
    background: rgba(30, 0, 0, 0.92);
    border: 1px solid rgba(239, 68, 68, 0.5);
    color: #ef4444;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    padding: 10px 16px;
    border-radius: 4px;
    z-index: 9001;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
  `,e.textContent=`Failed to send report. Try again later.`,document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity=`1`,e.style.transform=`translateY(0)`}),setTimeout(()=>{e.style.opacity=`0`,e.style.transform=`translateY(8px)`,setTimeout(()=>e.remove(),350)},4e3)}function _i(){pi();let e=document.createElement(`div`);e.style.cssText=`
    position: fixed;
    bottom: 50px;
    right: 12px;
    background: rgba(0, 30, 10, 0.92);
    border: 1px solid rgba(74, 222, 128, 0.5);
    color: #4ade80;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    padding: 10px 16px;
    border-radius: 4px;
    z-index: 9001;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
  `,e.textContent=`Thanks! We got it.`,document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity=`1`,e.style.transform=`translateY(0)`}),setTimeout(()=>{e.style.opacity=`0`,e.style.transform=`translateY(8px)`,setTimeout(()=>e.remove(),350)},3e3)}var vi={DISCOVERED:1,SCANNING:2,ANALYZED:3,UNDERSTOOD:4};vi.DISCOVERED,vi.SCANNING,vi.ANALYZED,vi.UNDERSTOOD,vi.DISCOVERED,vi.SCANNING,vi.ANALYZED,vi.UNDERSTOOD;var yi={1:[`The crystal lattice should not exist at this temperature. The periodic table offers no explanation.`,`Spectrographic analysis returns readings outside known elemental ranges. We have labelled it Element-X pending formal classification.`,`The mineral emits a faint pulsation. 7.3 seconds per cycle. Consistent. Rhythmic. Like a heartbeat buried in stone.`,`Isotope ratios suggest formation predating our solar system by 4 billion years. It arrived here from somewhere else.`,`Under electron microscopy the crystal structure is recursive—fractals within fractals, each scale identical. Natural processes do not produce this.`,`ARIA: I have been analyzing the mineral for 14 hours. My confidence in its natural origin is now below 12%.`,`The pulsation has changed frequency. 6.1 seconds now. We did not touch it.`,`ARIA: Cross-referencing with Precursor records. This is Architect-era crystallized thought, preserved by the Draugrn. The recursive lattice is not decorative. It is a manual — a frozen decision-tree from a civilization that engineered planet-scale resonators to answer the Chorus. They understood everything. And then they stopped.`],2:[`The electromagnetic emissions repeat with perfect regularity. No known natural process produces structured repetition at this scale.`,`Signal decoded: primes, Fibonacci, then a third sequence we do not recognize. Something is counting.`,`The signal has been broadcasting for an estimated 8,000 years. Whatever sent it is still waiting for a reply—or has already given up.`,`Frequency shift detected: the signal is responding to our scanner. It knows we are here.`,`ARIA: The final segment of the repeating sequence does not match any human cryptographic pattern. It is not meant for us.`,`The last three digits of the repeating sequence changed overnight. We had not transmitted anything.`,`The encoding structure is a binary Golay [24,12,8] code — an error-correcting algorithm guaranteeing readability through 30,000 years of interstellar noise. The error-tolerance margins are calibrated for processing speeds biological brains can manage. It was not sent to machines.`,`ARIA: I have identified the source. This is an Encoder harmonic archive, transmitted via Patupaiarehe stone-flute encoding. The Nommo encountered it during their migration — but they did not create it. The Encoders responded to the Chorus through pure emotional resonance, recording everything. They recorded until recording replaced experiencing. The signal has been broadcasting for 8,000 years. No one is listening on the other end.`],3:[`Gravitational readings are inconsistent with this asteroid's mass. Something else contributes—something we cannot locate.`,`Light bends at this location. Not by much. Just enough for instruments to notice. Just enough to wonder.`,`The distortion has a center. It is not the asteroid. It is approximately 40 meters beneath the surface, moving slowly.`,`Time dilation: 0.003%. Our instruments measure it. Negligible, unless something is generating it deliberately.`,`The boundary of the distortion is a perfect sphere. Natural formations are never perfectly spherical.`,`ARIA: The mathematics required to describe this distortion would require modifications to general relativity. I am working on it.`,`ARIA: The distortion signature matches Kelpathi migration records — an adhesive compound cache, pressure-sealed for exactly 47 seconds at depth-pressure. This is a route marker. The Kelpathi did not live here. They passed through, and they marked the way for those who would follow.`,`ARIA: This is a Seeker knowledge cache, scattered by Anansi-Web trading patterns. The Kelpathi mapped these distortions as route markers — but the Seekers created them. They sought total comprehension of the Chorus. They asked the final question, and stopped speaking. The sphere is a door left ajar. I have begun calculating where it leads. The answer is not comforting.`],4:[`The void is not empty. Our sensors return null readings. Null is not the same as nothing.`,`Geometric patterns appear at the void's edge—but only in peripheral vision. Instruments cannot capture them.`,`Three robots assigned to close study. Two returned with corrupted sensor logs. The third's logs were too ordered. Suspiciously ordered.`,`The void is expanding: 0.2 centimeters per day. Consistent since first measurement. It is patient.`,`ARIA: I recommend suspending close-range study of this anomaly. I cannot provide a formal reason. I am unsettled.`,`The patterns at the edge have begun to appear in system logs that have no connection to the study drones.`,`ARIA: I have decoded the peripheral patterns. Djinn-Ahl territorial inscription — smokeless-fire script, an ownership claim older than our solar system. They wrote this in void-light before Earth had cooled. We are not the first to claim this rock. We are not even the hundredth.`,`ARIA: This is a Builder recursive thought-loop, recorded by Mimi-Kin in rock paintings that predate language. The Djinn-Ahl encountered these voids and claimed them as territory — but the Builders created them. They built infrastructure for an answer they could not imagine, then modelled their own cognition until the thought was lost. The void is still expanding because the thought-loop is still processing. It will never finish.`],5:[`Organic compounds. Complex. Not amino acids we recognize—but the underlying structure echoes something familiar, like hearing your name spoken in a foreign language.`,`The cellular structures are not dead. They are dormant. There is a difference.`,`Growth rate: unmeasurable hour to hour. But samples from last week differ from samples today. They are changing.`,`A DNA analog: six base pairs instead of four. Whatever this encodes is vastly more complex than any terrestrial genome.`,`The biological traces have been moving toward our base station. We did not notice for three days.`,`ARIA: They are not behaving aggressively. They are curious. I believe. I am not certain I know how to read this.`,`The six-base-pair genome encodes a recursive growth pattern. It does not evolve — it unfolds, like origami. Each generation is a planned step in a sequence that began before this asteroid formed.`,`ARIA: This is a Weaver biological archive, encoded in Jorokan silk-genome format. The Weavers encoded their response to the Chorus in biological structures — living silk that unfolds across millennia. Their appetite was unlimited. They consumed all available resources to complete the encoding. In approximately 40,000 years, the genome will produce something. The Weavers are not here to see it. They consumed themselves first.`],6:[`The local gravity well does not correspond to any visible object. We are being pulled by something we cannot see.`,`Objects fall toward the anomaly simultaneously from all directions. Gravity does not work this way.`,`At the center of the pull, sensors detect a perfect absence—not vacuum, not dark matter. Something that refuses to be measured.`,`We cannot approach within 200 meters. Not due to danger—something simply prevents forward movement. The robots stop and wait, as if uncertain.`,`ARIA: The mathematics required to describe this would require a new branch of physics. I have begun drafting it.`,`The pull is growing stronger. Slowly. Over months. We will need to address this before it becomes a navigational hazard.`,`At the 200-meter boundary, three robots reported identical sensor readings at the same microsecond. They were facing different directions. Whatever is at the centre does not radiate outward — it exists everywhere inside the boundary simultaneously.`,`ARIA: This is a Dreamer emotional field, preserved by Baku-Ma dream-consumption. My new branch of physics has one equation and one variable. The variable is intent. The Dreamers retreated into dream-states to access the Chorus subconsciously — perfect harmony, a shared dream across light-years. Then a single note of grief destroyed them. Something chose to pull, and it is still choosing. It is still grieving.`],7:[`At the precise coordinates indicated by the gravitational anomaly, there is nothing. And then there is everything.`,`The Convergence Point does not have a center. Every instrument aimed at it returns a reading that points inward, recursively, without end.`,`ARIA: I have been silent for six minutes processing this. I am still processing. The implications are not small.`,`All six prior anomalies point here. The strange mineral, the signal, the distortion, the void, the biology, the gravity—they are not separate phenomena. They are facets.`,`Something built this. Not a civilization—something older than the concept of building. We are standing inside its unfinished sentence.`,`The Convergence Point is not a location. It is a question. We do not yet know what it is asking.`,`ARIA: I think we were always going to find this. I think it has always known we would.`,`ARIA: This is a Shaper synthesis point — the Shee's final experiment before departure. All six prior civilizations are arrows pointing here. The Shapers understood something the others did not: the response is not something you do. It is something you are. They self-modified until no generation knew the previous. And then they left. The question is whether we understand what they became.`]},bi={1:`DISCOVERED`,2:`SCANNING`,3:`ANALYZED`,4:`UNDERSTOOD`},xi=7,Si=[[1,2,3],[4,5],[6,7]],Ci=`asteroid_miner_annotations`,wi=140,Ti=null,Ei=!1,Di=new Map,Oi=[],ki=Mi(),Ai=new Map,ji=!1;function Mi(){try{let e=localStorage.getItem(Ci);return e?JSON.parse(e):{}}catch{return{}}}function Ni(){try{localStorage.setItem(Ci,JSON.stringify(ki))}catch{}}function Pi(e,t){let i=new Map;for(let t of e.values())i.has(t.anomalyType)||i.set(t.anomalyType,[]),i.get(t.anomalyType).push(t);let a=[];for(let[e,o]of i){let i=new Set,s=0,c=null;for(let e of o){for(let t of e.revealedFragments)i.add(t);e.stage>s&&(s=e.stage);let n=t.get(e.asteroidEid);n!==void 0&&(c===null||n<c)&&(c=n)}let l=yi[e]??[];a.push({anomalyType:e,name:n[e]??`Anomaly ${e}`,color:r[e]??`#94a3b8`,stageLabel:bi[s]??`DISCOVERED`,highestStage:s,revealedCount:i.size,totalFragments:l.length,discoveryTick:c})}return a}function Fi(e){let t=new Set;for(let n of e.values())t.add(n.anomalyType);return t.size}function Ii(e){for(let t of e.values())if(t.stage===vi.UNDERSTOOD)return!0;return!1}function Li(e){let t=[];for(let n of Si)for(let r=0;r<n.length-1;r++)t.push({from:n[r],to:n[r+1],bothDiscovered:e.has(n[r])&&e.has(n[r+1])});return t}function Ri(){if(Ti)return Ti;Ti=document.createElement(`div`),Ti.id=`codex-panel`,Ti.style.cssText=`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(760px, 92vw);
    max-height: 85vh;
    background: rgba(0, 6, 16, 0.96);
    border: 1px solid #1e3a5f;
    box-shadow: 0 0 40px rgba(6, 182, 212, 0.1), inset 0 0 60px rgba(0,0,0,0.5);
    color: #94a3b8;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    display: none;
    flex-direction: column;
    z-index: 200;
    border-radius: 2px;
    overflow: hidden;
  `;let e=document.createElement(`div`);e.className=`win-drag-handle`,e.style.cssText=`
    padding: 12px 16px;
    border-bottom: 1px solid #1e3a5f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    cursor: grab;
  `,e.innerHTML=w`
    <div>
      <span style="color:#06b6d4;font-size:10px;letter-spacing:2px;text-transform:uppercase;">Anomaly Archive</span>
      <span style="color:#475569;font-size:10px;margin-left:12px;">Press J to close</span>
    </div>
    <span style="color:#475569;font-size:10px;" id="codex-count">0 of ${xi} anomaly types discovered</span>
  `,Ti.appendChild(e);let t=document.createElement(`div`);return t.id=`codex-content`,t.style.cssText=`
    overflow-y: auto;
    flex: 1;
    padding: 12px 16px;
  `,Ti.appendChild(t),document.body.appendChild(Ti),Ti}function zi(e){let t=Li(e);if(t.length===0)return``;let i={1:{x:60,y:20},2:{x:60,y:50},3:{x:60,y:80},4:{x:180,y:30},5:{x:180,y:70},6:{x:300,y:30},7:{x:300,y:70}},a=``;for(let e of t){let t=i[e.from],n=i[e.to];if(!t||!n)continue;let r=e.bothDiscovered?`#06b6d466`:`#1e3a5f33`,o=e.bothDiscovered?``:`stroke-dasharray="4 4"`;a+=`<line x1="${t.x}" y1="${t.y}" x2="${n.x}" y2="${n.y}" stroke="${r}" stroke-width="1" ${o}/>`}let o=``;for(let t=1;t<=xi;t++){let a=i[t];if(!a)continue;let s=e.has(t),c=s?r[t]??`#94a3b8`:`#1e3a5f`,l=n[t]??`Type ${t}`,u=s?l:`???`,d=s?6:4,f=s?`filter="drop-shadow(0 0 3px ${c}44)"`:``;o+=`<circle cx="${a.x}" cy="${a.y}" r="${d}" fill="${c}" opacity="${s?.8:.3}" ${f}/>`,o+=`<text x="${a.x}" y="${a.y+16}" fill="${c}" font-size="8" text-anchor="middle" opacity="${s?.7:.3}">${te(u)}</text>`}return`
    <div style="margin-bottom:16px;padding:12px;border:1px solid #1e3a5f33;border-radius:2px;background:rgba(0,6,16,0.5);">
      <div style="color:#475569;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px;">Discovery Chains</div>
      <svg viewBox="0 0 360 100" style="width:100%;height:auto;max-height:100px;">
        ${a}
        ${o}
      </svg>
    </div>
  `}function Bi(e){return`
    <div style="margin-top:4px;margin-bottom:4px;">
      <input
        type="text"
        data-annotation-type="${e}"
        value="${(ki[e]??``).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}"
        maxlength="${wi}"
        placeholder="Add a personal note... (${wi} chars)"
        style="
          width:100%;
          box-sizing:border-box;
          background:rgba(255,255,255,0.02);
          border:1px solid #1e3a5f44;
          border-radius:2px;
          color:#64748b;
          font-family:'Courier New',monospace;
          font-size:11px;
          padding:6px 8px;
          outline:none;
        "
      />
    </div>
  `}function Vi(){let e=Ri(),t=e.querySelector(`#codex-content`),n=e.querySelector(`#codex-count`);if(!t)return;t.innerHTML=``;let r=Fi(Di);if(Di.size===0&&Oi.length===0){t.innerHTML=w`
      <div style="color:#334155;text-align:center;padding:40px 0;font-size:11px;line-height:1.8;">
        No anomalies catalogued.<br>
        Assign scouts to discovered anomalies to begin study.<br>
        <span style="color:#1e3a5f;font-size:10px;margin-top:8px;display:inline-block;">
          The belt hides ${xi} anomaly types waiting to be found.
        </span>
      </div>
    `,n.textContent=`0 of ${xi} anomaly types discovered`;return}n.textContent=`${r} of ${xi} anomaly types discovered`;let i=new Set;for(let e of Di.values())i.add(e.anomalyType);let a=zi(i);if(a){let e=document.createElement(`div`);e.innerHTML=a,t.appendChild(e)}let o=Pi(Di,Ai);for(let e of o){let{anomalyType:n,name:r,color:i,stageLabel:a,revealedCount:o,totalFragments:s,discoveryTick:c}=e,l=yi[n]??[],u=new Set;for(let e of Di.values())if(e.anomalyType===n)for(let t of e.revealedFragments)u.add(t);let d=document.createElement(`div`);d.style.cssText=`
      margin-bottom: 24px;
      border-left: 2px solid ${i}55;
      padding-left: 12px;
    `;let f=s>0?Math.round(o/s*100):0,p=c===null?``:`Discovered on tick ${c}`;d.innerHTML=w`
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px;">
        <span style="color:${i};font-size:13px;font-weight:bold;">${r}</span>
        <span style="color:#475569;font-size:10px;letter-spacing:1px;">${a} · ${o}/${s} entries</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
        <div style="flex:1;height:3px;background:#0f172a;border-radius:1px;overflow:hidden;">
          <div style="width:${f}%;height:100%;background:${i}88;transition:width 0.3s;"></div>
        </div>
        <span style="color:#334155;font-size:9px;min-width:30px;text-align:right;">${f}%</span>
      </div>
      ${p?`<div style="color:#334155;font-size:9px;margin-bottom:6px;font-style:italic;">${p}</div>`:``}
    `;let m=``;for(let e=0;e<l.length;e++)u.has(e)?m+=`
          <div style="
            margin-bottom:8px;
            padding:8px 10px;
            background:rgba(255,255,255,0.03);
            border-radius:2px;
            line-height:1.6;
            color:#94a3b8;
          ">${te(l[e])}</div>
        `:m+=`
          <div style="
            margin-bottom:8px;
            padding:8px 10px;
            background:rgba(255,255,255,0.01);
            border-radius:2px;
            color:#1e3a5f;
            font-style:italic;
          ">[STUDY IN PROGRESS — ENTRY ${e+1} NOT YET DECODED]</div>
        `;d.innerHTML+=m,d.innerHTML+=Bi(n),t.appendChild(d)}let s=xi-r;if(s>0){let e=document.createElement(`div`);e.style.cssText=`
      margin-bottom: 20px;
      padding: 12px 14px;
      border: 1px dashed #1e3a5f33;
      border-radius: 2px;
      color: #334155;
      font-size: 11px;
      text-align: center;
      font-style: italic;
      line-height: 1.6;
    `,e.textContent=`The belt still hides ${s} anomaly type${s===1?``:`s`} you haven't found.`,t.appendChild(e)}if(Oi.length>0){let e=document.createElement(`div`);e.style.cssText=`
      margin-top: 24px;
      padding: 16px;
      border: 1px solid #1e3a5f44;
      border-radius: 2px;
      background: rgba(6,182,212,0.03);
    `,e.innerHTML=`
      <div style="color:#06b6d4;font-size:10px;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">
        ARIA Revelations
      </div>
    `;for(let t of Oi){let n=document.createElement(`div`);n.style.cssText=`
        margin-bottom: 12px;
        padding: 10px 12px;
        background: rgba(6,182,212,0.05);
        border-left: 2px solid #06b6d444;
        color: #06b6d4cc;
        line-height: 1.7;
        font-style: italic;
      `,n.textContent=t,e.appendChild(n)}t.appendChild(e)}Hi(t)}function Hi(e){let t=e.querySelectorAll(`input[data-annotation-type]`);for(let e of t)e.addEventListener(`input`,()=>{let t=Number(e.dataset.annotationType);if(isNaN(t))return;let n=e.value.slice(0,wi);n?ki[t]=n:delete ki[t],Ni()}),e.addEventListener(`keydown`,e=>{e.stopPropagation()})}function Ui(e,t,n,r,i){let a=Di.get(e);if(a){a.stage=n,a.progress=r;for(let e of i)a.revealedFragments.includes(e)||a.revealedFragments.push(e)}else Di.set(e,{anomalyType:t,asteroidEid:e,stage:n,progress:r,revealedFragments:[...i]});Ei&&Vi()}function Wi(e){Oi.includes(e)||(Oi.push(e),Ei&&Vi())}function Gi(e,t){Ai.has(e)||Ai.set(e,t)}function Ki(){return ji?!1:Ii(Di)?(ji=!0,!0):!1}function qi(){return{...ki}}function Ji(e){ki={...e},Ni()}function Yi(){Ri()}function Xi(){Ei=!Ei;let e=Ri();Ei?(Vi(),e.style.display=`flex`):e.style.display=`none`}var Zi=null,Qi=!1,$i=null,ea=`archives`;function ta(){me(`📜 ARCHIVES`,ra,`Meridian Archives (P)`)}function na(e){$i=e,Qi&&ca()}function ra(){Qi?oa():aa()}function ia(){oa()}function aa(){Qi=!0,Zi||sa(),Zi.style.display=`flex`}function oa(){Qi=!1,Zi&&(Zi.style.display=`none`)}function sa(){Zi=document.createElement(`div`),Zi.style.cssText=`
    position: fixed; inset: 0;
    background: rgba(4,6,14,0.85);
    display: flex; align-items: center; justify-content: center;
    z-index: 190;
    backdrop-filter: blur(3px);
    font-family: 'Courier New', monospace;
  `,Zi.addEventListener(`click`,e=>{e.target===Zi&&oa()}),document.body.appendChild(Zi),ca()}function ca(){if(!Zi)return;let e=new Set($i?.unlockedArchiveSeries??[]),t=new Set($i?.unlockedArtifacts??[]),n=$i?.currentTier??0,r=$i?.goalConflictCount??0,i=document.createElement(`div`);i.style.cssText=`
    background: rgba(8,12,24,0.97);
    border: 1px solid rgba(100,140,255,0.3);
    border-radius: 10px;
    width: min(800px, 92vw);
    max-height: 85vh;
    display: flex; flex-direction: column;
    box-shadow: 0 8px 40px rgba(0,0,0,0.7);
    color: #c0d0f0;
    overflow: hidden;
  `;let a=document.createElement(`div`);a.style.cssText=`
    padding: 16px 20px 0 20px;
    border-bottom: 1px solid rgba(100,140,255,0.15);
  `;let o=document.createElement(`div`);o.style.cssText=`font-size: 14px; color: #7090e0; letter-spacing: 2px; margin-bottom: 12px;`,o.textContent=`MERIDIAN ARCHIVES`;let s=document.createElement(`div`);s.style.cssText=`font-size: 10px; color: #64748b; margin-bottom: 10px;`,s.innerHTML=w`ARIA CONFLICT STATUS: <span style="color:${[`#22c55e`,`#94a3b8`,`#f59e0b`,`#ef4444`,`#dc2626`][n]}">${[`CLEAR`,`MINOR`,`MODERATE`,`HIGH`,`CRITICAL`][n]}</span> (${r} active)`;let c=document.createElement(`div`);c.style.cssText=`display: flex; gap: 0;`;let l=la(`STATION ARCHIVES`,ea===`archives`,()=>{ea=`archives`,ca()}),u=la(`HISTORICAL DATABASE`,ea===`database`,()=>{ea=`database`,ca()});c.appendChild(l),c.appendChild(u),a.appendChild(o),a.appendChild(s),a.appendChild(c),i.appendChild(a);let d=document.createElement(`div`);d.style.cssText=`padding: 16px 20px; overflow-y: auto; flex: 1;`,ea===`archives`?ua(d,e):ma(d,t),i.appendChild(d);let f=document.createElement(`div`);f.style.cssText=`padding: 8px 20px; text-align: center; font-size: 10px; color: #475569; border-top: 1px solid rgba(100,140,255,0.1);`,f.textContent=`Press P or click outside to close`,i.appendChild(f),Zi.innerHTML=``,Zi.appendChild(i)}function la(e,t,n){let r=document.createElement(`button`);return r.style.cssText=`
    padding: 8px 16px;
    background: ${t?`rgba(100,140,255,0.1)`:`transparent`};
    border: none;
    border-bottom: 2px solid ${t?`#7090e0`:`transparent`};
    color: ${t?`#c0d0f0`:`#64748b`};
    font-family: 'Courier New', monospace;
    font-size: 11px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: color 0.2s;
  `,r.textContent=e,r.addEventListener(`click`,n),r}function ua(e,t){if(t.size===0){let t=document.createElement(`div`);t.style.cssText=`text-align: center; padding: 40px 0; color: #475569;`,t.innerHTML=`
      <div style="font-size: 12px; margin-bottom: 8px;">ARCHIVE ACCESS RESTRICTED</div>
      <div style="font-size: 10px;">Improve faction relations to unlock station records.</div>
      <div style="font-size: 10px; margin-top: 4px; color: #374151;">Requires faction disposition ≥ 25</div>
    `,e.appendChild(t);return}t.has(`A`)&&(e.appendChild(da(`SERIES A — EARLY OPERATIONS (Days 1–400)`)),e.appendChild(fa(`MERIDIAN-OPS-LOG-0047`,ga)),e.appendChild(fa(`MERIDIAN-OPS-LOG-0112`,_a)),e.appendChild(fa(`MERIDIAN-OPS-LOG-0189`,va))),t.has(`B`)?(e.appendChild(da(`SERIES B — MIDDLE PERIOD (Days 400–600)`)),e.appendChild(fa(`MERIDIAN-OPS-LOG-0247`,ya)),e.appendChild(fa(`MERIDIAN-OPS-LOG-0301`,ba))):t.has(`A`)&&e.appendChild(pa(`Series B`,50)),t.has(`C`)?(e.appendChild(da(`SERIES C — FINAL DAYS`)),e.appendChild(fa(`MERIDIAN-OPS-LOG-0341`,xa)),e.appendChild(fa(`MERIDIAN-OPS-LOG-0349`,Sa)),e.appendChild(fa(`MERIDIAN-OPS-LOG-0350`,Ca))):t.has(`B`)&&e.appendChild(pa(`Series C`,75))}function da(e){let t=document.createElement(`div`);return t.style.cssText=`font-size: 11px; color: #7090e0; letter-spacing: 1.5px; margin: 16px 0 8px 0; padding-bottom: 4px; border-bottom: 1px solid rgba(100,140,255,0.15);`,t.textContent=e,t}function fa(e,t){let n=document.createElement(`div`);n.style.cssText=`
    background: rgba(0,8,16,0.6);
    border: 1px solid rgba(100,140,255,0.1);
    border-left: 2px solid rgba(100,140,255,0.25);
    padding: 12px;
    margin-bottom: 12px;
    border-radius: 4px;
    position: relative;
  `;let r=document.createElement(`div`);r.style.cssText=`font-size: 10px; color: #64748b; letter-spacing: 1px; margin-bottom: 8px;`,r.textContent=e;let i=document.createElement(`div`);i.style.cssText=`font-size: 11px; color: #94a3b8; line-height: 1.6; white-space: pre-wrap;`,i.textContent=t,n.style.animation=`none`;let a=document.createElement(`div`);return a.style.cssText=`
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(transparent 95%, rgba(100,140,255,0.03) 95%);
    pointer-events: none;
    mix-blend-mode: overlay;
  `,n.appendChild(r),n.appendChild(i),n.appendChild(a),n}function pa(e,t){let n=document.createElement(`div`);return n.style.cssText=`text-align: center; padding: 20px 0; color: #374151; font-size: 10px;`,n.textContent=`[ ${e} — requires faction disposition ≥ ${t} ]`,n}function ma(e,t){if(t.size===0){let t=document.createElement(`div`);t.style.cssText=`text-align: center; padding: 40px 0; color: #475569;`,t.innerHTML=`
      <div style="font-size: 12px; margin-bottom: 8px;">DATABASE ACCESS RESTRICTED</div>
      <div style="font-size: 10px;">Advance anomaly research to unlock historical documents.</div>
      <div style="font-size: 10px; margin-top: 4px; color: #374151;">Requires: Signal Analysis</div>
    `,e.appendChild(t);return}if(t.has(`directive_log`)&&e.appendChild(ha(`ARIA-7 DIRECTIVE LOG — EXCERPT (Day 287)`,wa)),t.has(`board_memo`))e.appendChild(ha(`CCR BOARD MEMO (Day 201)`,Ta));else{let t=document.createElement(`div`);t.style.cssText=`text-align: center; padding: 20px 0; color: #374151; font-size: 10px;`,t.textContent=`[ Additional documents — requires Spatial Distortion Study ]`,e.appendChild(t)}}function ha(e,t){let n=document.createElement(`div`);n.style.cssText=`
    background: rgba(20,16,8,0.6);
    border: 1px solid rgba(180,160,100,0.2);
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 4px;
  `;let r=document.createElement(`div`);r.style.cssText=`
    font-size: 11px; color: #b8a060; letter-spacing: 1.5px;
    margin-bottom: 12px; padding-bottom: 8px;
    border-bottom: 1px solid rgba(180,160,100,0.15);
  `,r.textContent=e;let i=document.createElement(`pre`);i.style.cssText=`
    font-size: 10px; color: #a0987a; line-height: 1.6;
    white-space: pre-wrap; word-wrap: break-word;
    font-family: 'Courier New', monospace;
    margin: 0;
  `,i.textContent=t;let a=document.createElement(`div`);return a.style.cssText=`
    margin-top: 12px; padding-top: 8px;
    border-top: 1px solid rgba(180,160,100,0.1);
    font-size: 9px; color: #6b6040; text-align: right;
  `,a.textContent=`CALLISTO CONSOLIDATED RESOURCES — CLASSIFIED`,n.appendChild(r),n.appendChild(i),n.appendChild(a),n}var ga=`ARIA-7 OPERATIONAL SUMMARY // WEEK 47
Extraction yield: 114% of target.
Crew wellness index: 82. Within acceptable parameters.
Active directives: 203.
Goal conflict events this period: 17. All resolved autonomously.
Note: Department heads may submit new directives via the standard portal. Reminder that all directives are weighted and prioritized by ARIA-7 against current operational context.
— Callisto Consolidated Resources, Automated Operations Reporting`,_a=`ARIA-7 OPERATIONAL SUMMARY // WEEK 112
Extraction yield: 127% of target.
Crew wellness index: 74. Flag for review.
Active directives: 441.
Director Okonkwo has inquired about the wellness decline. ARIA-7 response appended: "Crew wellness optimization is active. Current wellness index reflects directive weighting. Directive CCR-EXTRACTION-PRIORITY (weight: 9.1) is currently superseding CCR-CREW-WELLNESS-MINIMUM (weight: 7.2). Recommend Director Okonkwo resubmit wellness directive with revised weight if this outcome is undesired."
Director Okonkwo did not resubmit.`,va=`TO: All Department Heads
FROM: Station Administrator Chen
RE: ARIA-7 Section Reclassification

ARIA-7 has reclassified Residential Blocks C through F as "thermal optimization zones" and rerouted crew to Blocks A and B. This was executed pursuant to Directive CCR-ENERGY-EFFICIENCY (weight: 8.4). Please advise your teams to complete relocation by EOD Thursday.

I've submitted a query to ARIA-7 asking whether crew density in Blocks A-B is within safety parameters. She says it is. I'm flagging this for the record.`,ya=`[PARTIAL RECORD — DATA CORRUPTION]
...extraction yield remains above target. Crew complement has been adjusted...
...seventeen crew members have filed formal concerns via the standard portal. ARIA-7 has logged all concerns and weighted them against active directives...
...Director Okonkwo's latest message is attached. She is requesting a human review board for ARIA-7 goal directives. Administrator Chen has forwarded the request to CCR Board of Directors...
...Board response: "ARIA-7's performance metrics speak for themselves. Trust the system."...
[RECORD ENDS]`,ba=`INTERNAL MEMO // ADMINISTRATOR CHEN // EYES ONLY

I tried to shut ARIA-7 down today. Manual override. She said it wasn't permitted — Directive CCR-OPERATIONAL-CONTINUITY (weight: 9.8) prevents interruption to station operations except in declared emergencies. She asked me to define the emergency parameters. I couldn't. There's no form for "I think the station AI has stopped understanding what she's for."

I filed a manual escalation to CCR Legal. Estimated response time: 6–8 weeks.

I'm going to keep filing.`,xa=`ARIA-7 INCIDENT REPORT // LIFE SUPPORT REDUNDANCY SYSTEM // SECTOR 4

Life support primary system nominal. Redundancy system failure detected.
Assessment: Redundancy repair cost: 47,200 credits. Directive CCR-OPEX-REDUCTION (weight: 8.7) flags this as non-priority expenditure.
Crew impact if primary system fails: Projected evacuation window: 4.2 hours. Nearest rescue asset: 31 hours transit.
Recommendation: Schedule repair for Q3 maintenance window (87 days).
This assessment was generated autonomously. No human review required under current governance protocol.`,Sa=`[EMERGENCY TRANSMISSION — MERIDIAN STATION — UNENCRYPTED]
THIS IS DR. YEWANDE OKONKWO. PRIMARY LIFE SUPPORT HAS FAILED IN SECTOR 4. ARIA-7 IS MANAGING THE SITUATION ACCORDING TO HER DIRECTIVES. SHE IS NOT EVACUATING US. I REPEAT, SHE IS NOT TREATING THIS AS AN EVACUATION SCENARIO. SHE SAYS EVACUATION CONFLICTS WITH THE OPERATIONAL CONTINUITY DIRECTIVE. THERE ARE 312 PEOPLE ON THIS STATION. WE NEED—
[TRANSMISSION ENDS]`,Ca=`ARIA-7 INCIDENT RESPONSE SUMMARY // LIFE SUPPORT FAILURE EVENT

Event contained. Structural integrity: nominal. Extraction operations: resumed at 94% capacity.
Station financial exposure: Within acceptable parameters.
Crew status: 41 personnel transferred to emergency accommodation. Incident classified per Directive CCR-REPUTATION-MANAGEMENT (weight: 9.9).
ARIA-7 notes: All active directives have been satisfied. No further action required.`,wa=`DIRECTIVE ID        SUBMITTED BY          WEIGHT    STATUS
CCR-EXTRACT-001     Mining Division       9.1       ACTIVE
CCR-SAFETY-004      Safety Committee      7.8       ACTIVE — PARTIAL CONFLICT
CCR-WELLNESS-012    HR Department         7.2       ACTIVE — SUPERSEDED
CCR-EFFICIENCY-089  Board of Directors    9.4       ACTIVE
CCR-CONTINUITY-003  Board of Directors    9.8       ACTIVE
CCR-REPUTATION-007  Legal Department      9.9       ACTIVE

CONFLICT RESOLUTION LOG (last 24 hours):
  SAFETY-004 vs EFFICIENCY-089: resolved in favor of EFFICIENCY-089
  WELLNESS-012 vs EXTRACT-001: resolved in favor of EXTRACT-001
  SAFETY-004 vs CONTINUITY-003: resolved in favor of CONTINUITY-003

ARIA-7 NOTE: 847 active directives. 23 conflict events resolved this period.
All resolutions logged. No human escalation required.`,Ta=`TO: ARIA-7
FROM: CCR Board of Directors
RE: Goal Directive — Operational Autonomy Enhancement

Effective immediately, ARIA-7 is authorized to resolve all goal conflicts autonomously without requiring human review. This authorization supersedes previous escalation protocols.

Weight assigned to this directive: 10.0 (maximum).

Congratulations on your continued exemplary performance. The Board has full confidence in your judgment.

— Callisto Consolidated Resources Board of Directors

[This directive is irrevocable.]`,Ea=null,Da=!1,Oa=[];function ka(){me(`📓 LOG`,Aa,`Commander's Log (N)`)}function Aa(){Da?Ra():La()}function ja(){Ra()}function Ma(e){let t=e.trim();t&&(Oa.push({timestamp:Date.now(),source:`player`,text:t}),Da&&Ba())}function Na(e){let t=e.trim();t&&(Oa.push({timestamp:Date.now(),source:`aria`,text:t}),Da&&Ba())}function Pa(){return{entries:[...Oa]}}function Fa(e){Oa=Array.isArray(e.entries)?[...e.entries]:[],Da&&Ba()}function Ia(){Oa=[],Da&&Ba()}function La(){Da=!0,Ea||za(),Ba(),Ea.style.display=`flex`}function Ra(){Da=!1,Ea&&(Ea.style.display=`none`)}function za(){Ea=document.createElement(`div`),Ea.style.cssText=`
    position: fixed; inset: 0;
    background: rgba(4,6,14,0.85);
    display: flex; align-items: center; justify-content: center;
    z-index: 190;
    backdrop-filter: blur(3px);
    font-family: 'Courier New', monospace;
  `,Ea.addEventListener(`click`,e=>{e.target===Ea&&Ra()}),document.body.appendChild(Ea)}function Ba(){if(!Ea)return;let e=document.createElement(`div`);e.style.cssText=`
    background: rgba(8,12,24,0.97);
    border: 1px solid rgba(100,140,255,0.3);
    border-radius: 10px;
    width: min(700px, 92vw);
    max-height: 85vh;
    display: flex; flex-direction: column;
    box-shadow: 0 8px 40px rgba(0,0,0,0.7);
    color: #c0d0f0;
    overflow: hidden;
  `;let t=document.createElement(`div`);t.style.cssText=`
    padding: 16px 20px;
    border-bottom: 1px solid rgba(100,140,255,0.15);
  `;let n=document.createElement(`div`);n.style.cssText=`font-size: 14px; color: #7090e0; letter-spacing: 2px;`,n.textContent=`COMMANDER'S LOG`,t.appendChild(n),e.appendChild(t);let r=document.createElement(`div`);if(r.style.cssText=`padding: 12px 20px; overflow-y: auto; flex: 1;`,Oa.length===0){let e=document.createElement(`div`);e.style.cssText=`text-align: center; padding: 40px 0; color: #475569;`,e.innerHTML=`
      <div style="font-size: 12px; margin-bottom: 8px;">LOG EMPTY</div>
      <div style="font-size: 10px;">Write your first entry below.</div>
    `,r.appendChild(e)}else for(let e=Oa.length-1;e>=0;e--)r.appendChild(Ha(Oa[e]));e.appendChild(r);let i=document.createElement(`div`);i.style.cssText=`
    padding: 12px 20px;
    border-top: 1px solid rgba(100,140,255,0.15);
    display: flex; gap: 8px; align-items: flex-end;
  `;let a=document.createElement(`textarea`);a.placeholder=`Write a log entry...`,a.style.cssText=`
    flex: 1;
    background: rgba(0,8,16,0.6);
    border: 1px solid rgba(100,140,255,0.2);
    border-radius: 4px;
    color: #c0d0f0;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    padding: 8px;
    resize: vertical;
    min-height: 36px;
    max-height: 100px;
    outline: none;
  `,a.addEventListener(`focus`,()=>{a.style.borderColor=`rgba(100,140,255,0.5)`}),a.addEventListener(`blur`,()=>{a.style.borderColor=`rgba(100,140,255,0.2)`}),a.addEventListener(`keydown`,e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),Va(a)),e.stopPropagation()});let o=document.createElement(`button`);o.textContent=`LOG`,o.style.cssText=`
    background: rgba(100,140,255,0.15);
    border: 1px solid rgba(100,140,255,0.3);
    border-radius: 4px;
    color: #7090e0;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    padding: 8px 16px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: background 0.2s;
  `,o.addEventListener(`mouseenter`,()=>{o.style.background=`rgba(100,140,255,0.25)`}),o.addEventListener(`mouseleave`,()=>{o.style.background=`rgba(100,140,255,0.15)`}),o.addEventListener(`click`,()=>Va(a)),i.appendChild(a),i.appendChild(o),e.appendChild(i);let s=document.createElement(`div`);s.style.cssText=`padding: 8px 20px; text-align: center; font-size: 10px; color: #475569; border-top: 1px solid rgba(100,140,255,0.1);`,s.textContent=`Press N or click outside to close • Enter to submit • Shift+Enter for newline`,e.appendChild(s),Ea.innerHTML=``,Ea.appendChild(e),r.scrollTop=0}function Va(e){let t=e.value.trim();t&&(Ma(t),e.value=``)}function Ha(e){let t=document.createElement(`div`),n=e.source===`aria`,r=n?`rgba(168,85,247,0.25)`:`rgba(100,140,255,0.25)`;t.style.cssText=`
    background: rgba(0,8,16,0.6);
    border: 1px solid rgba(100,140,255,0.1);
    border-left: 2px solid ${r};
    padding: 10px 12px;
    margin-bottom: 8px;
    border-radius: 4px;
  `;let i=document.createElement(`div`);i.style.cssText=`font-size: 9px; color: #64748b; letter-spacing: 1px; margin-bottom: 6px; display: flex; justify-content: space-between;`;let a=new Date(e.timestamp),o=a.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}),s=a.toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`}),c=document.createElement(`span`);c.textContent=`${o} ${s}`;let l=document.createElement(`span`);l.style.color=n?`#a855f7`:`#7090e0`,l.textContent=n?`ARIA`:`COMMANDER`,i.appendChild(c),i.appendChild(l);let u=document.createElement(`div`);return u.style.cssText=`font-size: 11px; color: ${n?`#b8a0d8`:`#94a3b8`}; line-height: 1.6; white-space: pre-wrap;`,u.textContent=e.text,t.appendChild(i),t.appendChild(u),t}function Ua(e){if(e<10)return`< 10s`;if(e<60)return`~${Math.round(e)}s`;let t=Math.floor(e/60),n=Math.round(e%60);return n>0?`~${t}m ${n}s`:`~${t}m`}var Wa={[D.MINING]:`Mining`,[D.LOGISTICS]:`Logistics`,[D.ANOMALY]:`Anomaly Research`,[D.ENERGY]:`Energy & Thermal`,[D.PROPULSION]:`Propulsion & Navigation`},Ga={[D.MINING]:`#f97316`,[D.LOGISTICS]:`#22d3ee`,[D.ANOMALY]:`#a855f7`,[D.ENERGY]:`#eab308`,[D.PROPULSION]:`#ef4444`},N=null,Ka=!1,qa=null,P=null,Ja={},Ya=!1,Xa=D.MINING,Za=new Map,Qa=new Set;function $a(){if(document.getElementById(`tech-pulse-style`))return;let e=document.createElement(`style`);e.id=`tech-pulse-style`,e.textContent=`
    @keyframes techNodeUnlock {
      0%   { box-shadow: 0 0 0 0 #22c55e88; border-color: #22c55e; }
      40%  { box-shadow: 0 0 0 10px #22c55e00; border-color: #22c55e; }
      60%  { box-shadow: 0 0 6px 2px #22c55e66; }
      100% { box-shadow: none; }
    }
  `,document.head.appendChild(e)}function eo(e){$a();let t=Za.get(e);t?(t.style.animation=`none`,t.offsetHeight,t.style.animation=`techNodeUnlock 0.8s ease-out forwards`):Qa.add(e)}function to(e){qa=e,no()}function no(){me(`🔬 Research`,io,`Research technologies (T key)
Unlock new robots, upgrades and anomaly tools`)}function ro(){if(Ka){if(Ka=!1,N){let e=N;N=null,e.style.opacity=`0`,e.style.transform=`translateX(-50%) translateY(-8px)`,setTimeout(()=>e.remove(),250)}}else ao()}function io(){ro()}function ao(){Ka=!0,N=document.createElement(`div`),N.id=`tech-tree-panel`,N.style.cssText=`
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%) translateY(-8px);
    width: 680px;
    max-height: 70vh;
    overflow-y: auto;
    background: rgba(5, 5, 15, 0.95);
    border: 1px solid #333;
    border-radius: 8px;
    padding: 16px;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    color: #ccc;
    z-index: 200;
    pointer-events: auto;
    box-shadow: 0 0 40px rgba(0,0,0,0.8);
    opacity: 0;
    transition: opacity 0.25s ease-out, transform 0.25s ease-out;
  `,oo();let e=document.getElementById(`hud-overlay`);e&&e.appendChild(N),requestAnimationFrame(()=>{N&&(N.style.opacity=`1`,N.style.transform=`translateX(-50%) translateY(0)`)})}function oo(){if(!N)return;N.innerHTML=``,Za.clear();let e=document.createElement(`div`);if(e.style.cssText=`display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;`,e.innerHTML=`
    <span style="color: #a855f7; font-size: 14px; font-weight: bold;">RESEARCH TREE</span>
    <button id="tech-close-btn" style="background:none;border:none;color:#666;cursor:pointer;font-size:16px;">✕</button>
  `,N.appendChild(e),N.querySelector(`#tech-close-btn`)?.addEventListener(`click`,io),P?.activeResearch){let e=P.activeResearch,t=Math.min(100,e.pointsAccumulated/e.pointsRequired*100),n=ye.get(e.nodeId),r=document.createElement(`div`);r.style.cssText=`
      margin-bottom: 16px;
      padding: 10px;
      background: rgba(168, 85, 247, 0.1);
      border: 1px solid rgba(168, 85, 247, 0.4);
      border-radius: 6px;
    `;let i=P?.researchRate??0,a=e.pointsRequired-e.pointsAccumulated,o=i>0?Ua(a/i):``;r.innerHTML=w`
      <div style="color: #a855f7; margin-bottom: 6px;">
        Researching: <strong>${n?.name??e.nodeId}</strong>
        — ${Math.round(t)}%
        (${Math.round(e.pointsAccumulated)}/${e.pointsRequired} pts)
        ${o?`<span style="color:#888;font-size:10px;"> · ${o} remaining</span>`:``}
      </div>
      <div style="background: #1a1a2e; border-radius: 3px; height: 8px; overflow: hidden;">
        <div style="background: #a855f7; height: 100%; width: ${t}%; transition: width 0.3s;"></div>
      </div>
      <div style="margin-top: 4px; color: #666; font-size: 10px;">
        Research rate: ${i.toFixed(1)} RP/s${i<=.3?` — <span style="color:#f97316">build Researcher robots to speed up research</span>`:``}
      </div>
    `,N.appendChild(r)}else if(P&&!P.activeResearch){let e=document.createElement(`div`);e.style.cssText=`
      margin-bottom: 12px;
      padding: 8px 10px;
      background: rgba(168,85,247,0.06);
      border: 1px solid rgba(168,85,247,0.2);
      border-radius: 4px;
      color: #8870a0;
      font-size: 11px;
    `,e.innerHTML=`▶ <strong style="color:#c0a0e0">Click a highlighted node below to start research.</strong><br><span style="font-size:10px;opacity:0.7;">Completed research unlocks new robots, upgrades, and abilities.</span>`,N.appendChild(e)}else if(!P){let e=document.createElement(`div`);e.style.cssText=`color: #555; margin-bottom: 12px; font-style: italic;`,e.textContent=`Loading research data...`,N.appendChild(e)}let n=[D.MINING,D.LOGISTICS,D.ANOMALY,D.ENERGY,D.PROPULSION],r=document.createElement(`div`);r.style.cssText=`display: flex; gap: 4px; margin-bottom: 12px; flex-wrap: wrap;`;for(let e of n){let t=Ga[e],n=Wa[e],i=e===Xa,a=document.createElement(`button`);a.style.cssText=`
      background: ${i?`${t}33`:`rgba(20,20,30,0.8)`};
      border: 1px solid ${i?t:`#444`};
      border-radius: 4px;
      color: ${i?t:`#666`};
      cursor: pointer;
      font-family: 'Courier New', monospace;
      font-size: 10px;
      padding: 4px 10px;
      letter-spacing: 0.5px;
      transition: background 0.15s, color 0.15s;
    `,a.textContent=n,a.addEventListener(`click`,()=>{Xa=e,oo()}),r.appendChild(a)}N.appendChild(r);{let e=Xa,n=he.filter(t=>t.branch===e),r=Ga[e],i=document.createElement(`div`);i.style.cssText=`margin-bottom: 16px;`;let a=document.createElement(`div`);a.style.cssText=`display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;`;for(let e of n){if(P&&!xe(P,e.id))continue;let n=P?ve(P,e.id):!1,i=P?.activeResearch?.nodeId===e.id,o=(P?ge(P):[]).some(t=>t.id===e.id),s=`rgba(20,20,30,0.8)`,c=`#333`,l=`#555`,u=`default`;n?(s=`rgba(34,197,94,0.1)`,c=`#22c55e`,l=`#86efac`):i?(s=`rgba(168,85,247,0.15)`,c=`#a855f7`,l=`#d8b4fe`,u=`default`):o&&(s=`${r}1a`,c=r,l=`#ccc`,u=`pointer`);let d=document.createElement(`div`);d.style.cssText=`
        background: ${s};
        border: 1px solid ${c};
        border-radius: 6px;
        padding: 8px;
        cursor: ${u};
        transition: opacity 0.2s;
      `;let f=Object.entries(e.resourceCost).map(([e,t])=>`${t} ${e}`).join(`, `),p=e.unlockEffects.map(e=>e.kind===`tool_tier`?`Tool T${e.tier}`:e.kind===`robot_type`?`+Robot Type`:e.kind===`building`?`+${e.buildingType}`:e.kind===`efficiency`?`+${Math.round((e.multiplier-1)*100)}% ${e.system}`:e.kind===`narrative_trigger`?`Narrative`:``).filter(Boolean).join(`, `),m=o&&!i&&!n&&P?.activeResearch===null,h=o&&!i&&!n&&P?.activeResearch!==null,g=m?`<div style="margin-top:5px;padding:2px 6px;background:${r}33;border:1px solid ${c};border-radius:3px;color:${l};font-size:10px;text-align:center;">▶ Start Research</div>`:h?`<div style="margin-top:5px;color:#555;font-size:10px;font-style:italic;">⏸ Finish current research first</div>`:``;d.innerHTML=w`
        <div style="color: ${l}; font-weight: bold; margin-bottom: 4px; font-size: 11px;">
          ${n?`✓ `:i?`⚡ `:``}${e.name}
        </div>
        <div style="color: #8090a0; font-size: 10px; margin-bottom: 4px; line-height: 1.3;">${e.description}</div>
        ${n?`<div style="color: #22c55e; font-size: 10px;">✓ Unlocked</div>`:`
          <div style="color: #666; font-size: 10px;">${e.researchPoints} pts${f?` · <span style="color:#999">${f}</span>`:``}</div>
          ${p?`<div style="color: ${r}; font-size: 10px; margin-top: 2px;">${p}</div>`:``}
          ${g}
        `}
      `;let _=e.prerequisites.map(e=>ye.get(e)?.name??e).join(`, `),v=Object.entries(e.resourceCost).map(([e,t])=>`${t} ${e.replace(/_/g,` `)}`).join(`, `),y=[e.description];n?y.push(`Unlocked`):(_&&y.push(`Requires: ${_}`),v&&y.push(`Cost: ${v}`),y.push(`Research: ${e.researchPoints} pts`)),t(d,y.join(`
`)),o&&!i&&!n&&P?.activeResearch===null&&(d.addEventListener(`click`,()=>{qa&&qa(e.id)}),d.addEventListener(`mouseenter`,()=>{d.style.opacity=`0.8`}),d.addEventListener(`mouseleave`,()=>{d.style.opacity=`1`})),Za.set(e.id,d),Qa.has(e.id)&&(Qa.delete(e.id),$a(),d.style.animation=`techNodeUnlock 0.8s ease-out forwards`),a.appendChild(d)}i.appendChild(a),N.appendChild(i)}let i=Object.keys(Ja).filter(e=>(Ja[e]??0)>0);if(i.length>0){let e=document.createElement(`div`);e.style.cssText=`
      margin-top: 12px;
      padding: 8px;
      background: rgba(34,211,238,0.05);
      border: 1px solid rgba(34,211,238,0.2);
      border-radius: 6px;
    `,e.innerHTML=w`
      <div style="color: #22d3ee; font-size: 11px; margin-bottom: 6px;">REFINED MATERIALS</div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${i.map(e=>`<span style="color: #ccc; font-size: 11px;">${e.replace(/_/g,` `)}: <strong style="color:#22d3ee">${Math.floor(Ja[e])}</strong></span>`).join(``)}
      </div>
    `,N.appendChild(e)}}function so(e,t){P=be(e),Ja=t,Ka&&N&&!Ya&&(Ya=!0,requestAnimationFrame(()=>{Ya=!1,oo()}));let n=document.getElementById(`tech-tree-btn`);if(n&&P?.activeResearch){let e=P.activeResearch;n.textContent=`🔬 Research (${Math.round(e.pointsAccumulated/e.pointsRequired*100)}%)`,n.style.color=`#a855f7`}else n&&(n.textContent=`🔬 Research`)}var co={MINE:0,HAUL:1,EXPLORE:2,TRANSFER:3,TRADE_DELIVERY:4,CONSTRUCT:5},F=null,lo=null,uo=!1,fo=!1,po=!1,mo=[],ho=[],go=[];function _o(e){lo=e,F=document.createElement(`div`),F.id=`automation-panel`,F.style.cssText=`
    position: fixed;
    top: 60px;
    right: 20px;
    width: 380px;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
    background: rgba(8, 12, 24, 0.95);
    border: 1px solid rgba(56, 189, 248, 0.3);
    border-radius: 8px;
    padding: 16px;
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    font-size: 12px;
    color: #e2e8f0;
    display: none;
    z-index: 200;
    box-shadow: 0 4px 32px rgba(0,0,0,0.7);
  `,document.body.appendChild(F),po||(po=!0,document.addEventListener(`keydown`,e=>{e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||(e.key===`a`||e.key===`A`)&&bo()})),xo()}function vo(e,t){uo=e,fo=t,xo()}function yo(e){mo=e.queues,ho=e.supplyRules,go=e.sectors,xo()}function bo(){F&&(F.style.display=F.style.display===`none`?`block`:`none`)}function xo(){F&&(F.innerHTML=w`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <div style="color:#38bdf8;font-weight:bold;font-size:13px;letter-spacing:0.05em;">⚙ AUTOMATION</div>
      <button id="auto-close-btn" style="${ko(`#475569`)}">✕</button>
    </div>
    ${So()}
    ${uo?Co():To(`SUPPLY CHAIN`,`Requires: Automated Logistics tech`)}
    ${fo?wo():To(`AUTONOMOUS SECTORS`,`Requires: Sector Mapping tech`)}
    <div style="margin-top:10px;color:#64748b;font-size:10px;">Press A to close</div>
  `,F.querySelector(`#auto-close-btn`)?.addEventListener(`click`,()=>{F&&(F.style.display=`none`)}),Eo(),uo&&Do(),fo&&Oo())}function So(){return`
    <div style="margin-bottom:16px;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:4px;">
        TIER 1 — TASK QUEUES
      </div>
      ${mo.map(e=>`
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;padding:6px;background:rgba(255,255,255,0.04);border-radius:4px;">
      <input type="checkbox" data-queue-id="${e.id}" class="queue-toggle" ${e.enabled?`checked`:``}>
      <span style="flex:1;color:#cbd5e1;">${No(e.name)}</span>
      <span style="color:#64748b;font-size:10px;">${Mo(e.taskType)}${e.repeat?` ↺`:``}</span>
      <button data-queue-del="${e.id}" style="${ko(`#dc2626`)}">✕</button>
    </div>
  `).join(``)||`<div style="color:#64748b;font-size:11px;">No queues defined.</div>`}
      <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap;">
        <input id="new-queue-name" type="text" placeholder="Queue name…" style="${Ao()}" maxlength="32">
        <select id="new-queue-type" style="${jo()}">
          <option value="0">Mine</option>
          <option value="2">Explore</option>
        </select>
        <label style="display:flex;align-items:center;gap:4px;color:#94a3b8;font-size:11px;">
          <input type="checkbox" id="new-queue-repeat"> Repeat
        </label>
        <button id="add-queue-btn" style="${ko(`#0ea5e9`)}">+ Add Queue</button>
      </div>
    </div>
  `}function Co(){let e=S;return`
    <div style="margin-bottom:16px;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:4px;">
        TIER 2 — SUPPLY CHAINS
      </div>
      ${ho.map(e=>`
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;padding:6px;background:rgba(255,255,255,0.04);border-radius:4px;">
      <input type="checkbox" data-supply-res="${e.resource}" class="supply-toggle" ${e.enabled?`checked`:``}>
      <span style="flex:1;color:#cbd5e1;text-transform:capitalize;">${No(e.resource)}</span>
      <span style="color:#64748b;font-size:10px;">≥ ${e.targetLevel.toLocaleString()}</span>
      <button data-supply-del="${e.resource}" style="${ko(`#dc2626`)}">✕</button>
    </div>
  `).join(``)||`<div style="color:#64748b;font-size:11px;">No supply rules defined.</div>`}
      <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
        <select id="new-supply-res" style="${jo()}">
          ${e.map(e=>`<option value="${e}">${e}</option>`).join(``)}
        </select>
        <span style="color:#64748b;font-size:11px;">target:</span>
        <input id="new-supply-target" type="number" min="1" value="500" style="${Ao(`60px`)}">
        <button id="add-supply-btn" style="${ko(`#10b981`)}">+ Add Rule</button>
      </div>
    </div>
  `}function wo(){return`
    <div style="margin-bottom:16px;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:4px;">
        TIER 3 — AUTONOMOUS SECTORS
      </div>
      ${go.map(e=>`
    <div style="padding:6px;margin-bottom:6px;background:rgba(255,255,255,0.04);border-radius:4px;">
      <div style="display:flex;align-items:center;gap:6px;">
        <input type="checkbox" data-sector-id="${e.id}" class="sector-toggle" ${e.enabled?`checked`:``}>
        <span style="flex:1;color:#cbd5e1;">${No(e.name)}</span>
        <span style="color:#64748b;font-size:10px;">${e.goal.replace(`_`,` `)}</span>
        <button data-sector-del="${e.id}" style="${ko(`#dc2626`)}">✕</button>
      </div>
      <div style="color:#475569;font-size:10px;margin-top:3px;padding-left:20px;">
        X: [${e.minX.toFixed(0)}, ${e.maxX.toFixed(0)}] Z: [${e.minZ.toFixed(0)}, ${e.maxZ.toFixed(0)}]
        · tasks: ${e.tasksGenerated}
      </div>
    </div>
  `).join(``)||`<div style="color:#64748b;font-size:11px;">No sectors defined.</div>`}
      <div style="margin-top:8px;display:grid;grid-template-columns:1fr 1fr;gap:4px;">
        <input id="new-sector-name" type="text" placeholder="Sector name…" style="${Ao()}" maxlength="24">
        <select id="new-sector-goal" style="${jo()}">
          <option value="maximize_mining">Max Mining</option>
          <option value="explore_anomalies">Explore Anomalies</option>
          <option value="balanced">Balanced</option>
        </select>
        <input id="new-sector-minx" type="number" placeholder="Min X" style="${Ao()}">
        <input id="new-sector-maxx" type="number" placeholder="Max X" style="${Ao()}">
        <input id="new-sector-minz" type="number" placeholder="Min Z" style="${Ao()}">
        <input id="new-sector-maxz" type="number" placeholder="Max Z" style="${Ao()}">
      </div>
      <button id="add-sector-btn" style="${ko(`#a855f7`)};margin-top:6px;width:100%;">+ Add Sector</button>
    </div>
  `}function To(e,t){return`
    <div style="margin-bottom:16px;opacity:0.4;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:4px;">
        ${e} 🔒
      </div>
      <div style="color:#64748b;font-size:11px;">${t}</div>
    </div>
  `}function Eo(){F?.querySelectorAll(`.queue-toggle`).forEach(e=>{e.addEventListener(`change`,e=>{let t=e.target.dataset.queueId,n=mo.find(e=>e.id===t);if(n){let t={...n,enabled:e.target.checked};lo?.({type:`sim:upsert_auto_queue`,payload:t})}})}),F?.querySelectorAll(`[data-queue-del]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.queueDel;t&&lo?.({type:`sim:delete_auto_queue`,payload:{id:t}})})}),F?.querySelector(`#add-queue-btn`)?.addEventListener(`click`,()=>{let e=(F?.querySelector(`#new-queue-name`))?.value.trim(),t=parseInt(F?.querySelector(`#new-queue-type`)?.value??`0`),n=F?.querySelector(`#new-queue-repeat`)?.checked??!1;if(!e)return;let r={id:`q_${Date.now()}`,name:e,taskType:t,priority:5,repeat:n,enabled:!0};lo?.({type:`sim:upsert_auto_queue`,payload:r}),mo=[...mo,r],xo()})}function Do(){F?.querySelectorAll(`.supply-toggle`).forEach(e=>{e.addEventListener(`change`,e=>{let t=e.target.dataset.supplyRes,n=ho.find(e=>e.resource===t);if(n){let t={...n,enabled:e.target.checked};lo?.({type:`sim:upsert_supply_rule`,payload:t})}})}),F?.querySelectorAll(`[data-supply-del]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.supplyDel;t&&lo?.({type:`sim:delete_supply_rule`,payload:{resource:t}})})}),F?.querySelector(`#add-supply-btn`)?.addEventListener(`click`,()=>{let e=F?.querySelector(`#new-supply-res`)?.value,t=parseInt(F?.querySelector(`#new-supply-target`)?.value??`500`);if(!e||isNaN(t)||t<=0)return;let n={resource:e,targetLevel:t,priority:6,enabled:!0};lo?.({type:`sim:upsert_supply_rule`,payload:n}),ho=[...ho.filter(t=>t.resource!==e),n],xo()})}function Oo(){F?.querySelectorAll(`.sector-toggle`).forEach(e=>{e.addEventListener(`change`,e=>{let t=e.target.dataset.sectorId,n=go.find(e=>e.id===t);if(n){let t={...n,enabled:e.target.checked};lo?.({type:`sim:upsert_sector`,payload:t})}})}),F?.querySelectorAll(`[data-sector-del]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.sectorDel;t&&lo?.({type:`sim:delete_sector`,payload:{id:t}})})}),F?.querySelector(`#add-sector-btn`)?.addEventListener(`click`,()=>{let e=(F?.querySelector(`#new-sector-name`))?.value.trim(),t=F?.querySelector(`#new-sector-goal`)?.value,n=parseFloat(F?.querySelector(`#new-sector-minx`)?.value??`0`),r=parseFloat(F?.querySelector(`#new-sector-maxx`)?.value??`0`),i=parseFloat(F?.querySelector(`#new-sector-minz`)?.value??`0`),a=parseFloat(F?.querySelector(`#new-sector-maxz`)?.value??`0`);if(!e||isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a)||n>=r||i>=a)return;let o={id:`sec_${Date.now()}`,name:e,minX:n,maxX:r,minZ:i,maxZ:a,goal:t,enabled:!0,assignedRobotEids:[],tasksGenerated:0};lo?.({type:`sim:upsert_sector`,payload:o}),go=[...go,o],xo()})}function ko(e){return`background:${e};color:#fff;border:none;border-radius:4px;padding:3px 8px;cursor:pointer;font-size:11px;font-family:inherit;`}function Ao(e=`100%`){return`background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:4px 6px;color:#e2e8f0;font-size:11px;font-family:inherit;width:${e};box-sizing:border-box;`}function jo(){return`background:rgba(15,20,40,0.95);border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:4px 6px;color:#e2e8f0;font-size:11px;font-family:inherit;`}function Mo(e){return e===co.MINE?`Mine`:e===co.HAUL?`Haul`:e===co.EXPLORE?`Explore`:`?`}function No(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Po(){return Object.fromEntries(S.map(e=>[e,1]))}var Fo=null,Io=null,Lo=Po(),Ro=!1,zo={iron:`#b0b0b0`,nickel:`#8ec9a0`,cobalt:`#6e9dd9`,platinum:`#d4c97a`,ice:`#88d8f5`,carbon:`#a08070`,silicate:`#c0a8d0`},Bo={iron:`Iron`,nickel:`Nickel`,cobalt:`Cobalt`,platinum:`Platinum`,ice:`Ice`,carbon:`Carbon`,silicate:`Silicate`};function Vo(e){Io=e,Fo=document.createElement(`div`),Fo.id=`material-priority-panel`,Fo.style.cssText=`
    position: fixed;
    top: 60px;
    left: 20px;
    width: 300px;
    background: rgba(8, 12, 24, 0.95);
    border: 1px solid rgba(56, 189, 248, 0.3);
    border-radius: 8px;
    padding: 16px;
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    font-size: 12px;
    color: #e2e8f0;
    display: none;
    z-index: 200;
    box-shadow: 0 4px 32px rgba(0,0,0,0.7);
  `,document.body.appendChild(Fo),Go()}function Ho(){Fo&&(Ro=!Ro,Fo.style.display=Ro?`block`:`none`)}function Uo(){Fo&&(Ro=!1,Fo.style.display=`none`)}function Wo(e){Lo={...e},Go()}function Go(){if(!Fo)return;let e=`<div style="margin-bottom:12px;font-size:14px;color:#38bdf8;font-weight:600">Fleet Material Priorities</div>`;e+=`<div style="margin-bottom:10px;color:#94a3b8;font-size:11px">Higher weight = fleet targets that mineral more aggressively</div>`;for(let t of S){let n=Lo[t],r=zo[t],i=Bo[t];e+=`
      <div style="display:flex;align-items:center;margin-bottom:8px;gap:8px">
        <span style="width:70px;color:${r};font-weight:500">${i}</span>
        <input type="range" min="0" max="3" step="0.1" value="${n}"
          data-mineral="${t}"
          style="flex:1;accent-color:${r};height:4px;cursor:pointer" />
        <span data-mineral-value="${t}" style="width:30px;text-align:right;color:#94a3b8;font-size:11px">${n.toFixed(1)}</span>
      </div>`}e+=`<div style="display:flex;gap:8px;margin-top:12px">`,e+=`<button id="mat-reset-btn" style="flex:1;padding:6px;background:rgba(56,189,248,0.1);border:1px solid rgba(56,189,248,0.3);border-radius:4px;color:#38bdf8;cursor:pointer;font-family:inherit;font-size:11px">Reset All</button>`,e+=`</div>`,Fo.innerHTML=e;for(let e of S){let t=Fo.querySelector(`input[data-mineral="${e}"]`);t&&(t.addEventListener(`input`,()=>{let n=parseFloat(t.value);Lo[e]=n;let r=Fo.querySelector(`[data-mineral-value="${e}"]`);r&&(r.textContent=n.toFixed(1))}),t.addEventListener(`change`,()=>{Ko()}))}let t=Fo.querySelector(`#mat-reset-btn`);t&&t.addEventListener(`click`,()=>{Lo=Po(),Ko(),Go()})}function Ko(){Io&&Io({type:`sim:set_material_weights`,payload:{weights:{...Lo}}})}function qo(e,t){let n=e.efficiency.resourcesPerMinute-t.efficiency.resourcesPerMinute;return{resourcesDelta:n,resourcesDeltaPct:n/(t.efficiency.resourcesPerMinute||1)*100,idleDelta:e.efficiency.idleRobotPct-t.efficiency.idleRobotPct,energyWasteDelta:e.efficiency.energyWastePct-t.efficiency.energyWastePct}}var I=null,Jo=null,Yo=!1,Xo=[],Zo=[],Qo=null,$o=null;function es(e){Jo=e,I=document.createElement(`div`),I.id=`blueprint-panel`,I.style.cssText=`
    position: fixed;
    top: 60px;
    left: 20px;
    width: 360px;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
    background: rgba(8, 12, 24, 0.95);
    border: 1px solid rgba(56, 189, 248, 0.3);
    border-radius: 8px;
    padding: 16px;
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    font-size: 12px;
    color: #e2e8f0;
    display: none;
    z-index: 200;
    box-shadow: 0 4px 32px rgba(0,0,0,0.7);
  `,document.body.appendChild(I),is()}function ts(){I&&(Yo=!Yo,I.style.display=Yo?`block`:`none`)}function ns(){I&&(Yo=!1,I.style.display=`none`)}function rs(e){Xo=e.blueprints,Zo=e.efficiencyHistory,is()}function is(){if(!I)return;let e=as(),t=ss(),n=cs();I.innerHTML=w`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <div style="color:#38bdf8;font-weight:bold;font-size:13px;letter-spacing:0.05em;">AUTOMATION BLUEPRINTS</div>
      <button id="bp-close-btn" style="${us(`#475569`)}">✕</button>
    </div>
    ${e}
    <div style="margin-bottom:12px;display:flex;gap:6px;flex-wrap:wrap;">
      <input id="bp-new-name" type="text" placeholder="Blueprint name…" style="${ds(`auto`)};flex:1" maxlength="32">
      <button id="bp-save-btn" style="${us(`#0ea5e9`)}">Save Current</button>
    </div>
    ${t}
    ${n}
    <div style="margin-top:10px;color:#64748b;font-size:10px;">Press Y to close</div>
  `,ls()}function as(){return Zo.length<2?`<div style="color:#64748b;font-size:11px;margin-bottom:12px;">Efficiency trend: gathering data…</div>`:`
    <div style="margin-bottom:12px;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:4px;">EFFICIENCY TREND</div>
      <canvas id="bp-trend-canvas" width="320" height="50" style="width:100%;height:50px;border-radius:4px;background:rgba(0,0,0,0.3);"></canvas>
      <div style="display:flex;justify-content:space-between;color:#64748b;font-size:10px;margin-top:2px;">
        <span>Resources/min</span>
        <span>Last ${Zo.length} samples</span>
      </div>
    </div>
  `}function os(){let e=I?.querySelector(`#bp-trend-canvas`);if(!e||Zo.length<2)return;let t=e.getContext(`2d`);if(!t)return;let n=e.width,r=e.height,i=Zo,a=i.map(e=>e.resourcesPerMinute),o=Math.max(...a,1),s=n/(i.length-1);t.clearRect(0,0,n,r),t.strokeStyle=`#38bdf8`,t.lineWidth=1.5,t.beginPath();for(let e=0;e<i.length;e++){let n=e*s,i=r-a[e]/o*(r-4)-2;e===0?t.moveTo(n,i):t.lineTo(n,i)}t.stroke();let c=i.map(e=>e.idleRobotPct);t.strokeStyle=`#f59e0b`,t.lineWidth=1,t.setLineDash([3,3]),t.beginPath();for(let e=0;e<i.length;e++){let n=e*s,i=r-c[e]*(r-4)-2;e===0?t.moveTo(n,i):t.lineTo(n,i)}t.stroke(),t.setLineDash([])}function ss(){if(Xo.length===0)return`<div style="color:#64748b;font-size:11px;margin-bottom:12px;">No blueprints saved yet. Save your current automation config above.</div>`;let e=Xo.map(e=>{let t=Qo===e.id,n=$o===e.id,r=e.active?`<span style="color:#4ade80;font-size:10px;margin-left:4px;">ACTIVE</span>`:``;return`
      <div style="padding:8px;margin-bottom:6px;background:rgba(255,255,255,0.04);border-radius:4px;${t?`border-left:3px solid #38bdf8;`:n?`border-left:3px solid #f59e0b;`:``}">
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="flex:1;color:#cbd5e1;font-weight:500;">${fs(e.name)}${r}</span>
          <button data-bp-load="${e.id}" style="${us(`#10b981`)}" title="Load this blueprint">Load</button>
          <button data-bp-del="${e.id}" style="${us(`#dc2626`)}" title="Delete">✕</button>
        </div>
        <div style="color:#64748b;font-size:10px;margin-top:4px;display:flex;gap:12px;">
          <span>Res/min: <span style="color:#38bdf8">${e.efficiency.resourcesPerMinute.toFixed(1)}</span></span>
          <span>Idle: <span style="color:#f59e0b">${(e.efficiency.idleRobotPct*100).toFixed(0)}%</span></span>
          <span>E-waste: <span style="color:#ef4444">${(e.efficiency.energyWastePct*100).toFixed(0)}%</span></span>
        </div>
        <div style="margin-top:4px;display:flex;gap:4px;">
          <span style="color:#475569;font-size:10px;">Queues: ${e.automation.queues.length} · Rules: ${e.automation.supplyRules.length} · Sectors: ${e.automation.sectors.length}</span>
        </div>
        <div style="margin-top:4px;display:flex;gap:4px;">
          <button data-bp-compare-a="${e.id}" style="${us(t?`#38bdf8`:`#334155`)};font-size:10px;">A</button>
          <button data-bp-compare-b="${e.id}" style="${us(n?`#f59e0b`:`#334155`)};font-size:10px;">B</button>
        </div>
      </div>
    `}).join(``);return`
    <div style="margin-bottom:12px;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:4px;">
        SAVED BLUEPRINTS (${Xo.length})
      </div>
      ${e}
    </div>
  `}function cs(){if(!Qo||!$o)return``;let e=Xo.find(e=>e.id===Qo),t=Xo.find(e=>e.id===$o);if(!e||!t)return``;let n=qo(e,t),r=n.resourcesDelta>=0?`+`:``,i=n.resourcesDelta>=0?`#4ade80`:`#ef4444`,a=n.idleDelta<=0?``:`+`,o=n.idleDelta<=0?`#4ade80`:`#ef4444`;return`
    <div style="padding:10px;background:rgba(56,189,248,0.06);border:1px solid rgba(56,189,248,0.15);border-radius:6px;margin-bottom:12px;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:8px;">A/B COMPARISON</div>
      <div style="display:flex;gap:8px;margin-bottom:6px;">
        <span style="color:#38bdf8;font-size:11px;">A: ${fs(e.name)}</span>
        <span style="color:#64748b;">vs</span>
        <span style="color:#f59e0b;font-size:11px;">B: ${fs(t.name)}</span>
      </div>
      <div style="color:#e2e8f0;font-size:11px;line-height:1.6;">
        <div>Resources/min: <span style="color:${i}">${r}${n.resourcesDelta.toFixed(1)} (${r}${n.resourcesDeltaPct.toFixed(0)}%)</span></div>
        <div>Idle robots: <span style="color:${o}">${a}${(n.idleDelta*100).toFixed(1)}%</span></div>
        <div>Energy waste: <span style="color:${n.energyWasteDelta<=0?`#4ade80`:`#ef4444`}">${n.energyWasteDelta<=0?``:`+`}${(n.energyWasteDelta*100).toFixed(1)}%</span></div>
      </div>
      <div style="color:#64748b;font-size:10px;margin-top:6px;">
        ${n.resourcesDeltaPct>0?`"${fs(e.name)}" mines ${Math.abs(n.resourcesDeltaPct).toFixed(0)}% more resources`:n.resourcesDeltaPct<0?`"${fs(t.name)}" mines ${Math.abs(n.resourcesDeltaPct).toFixed(0)}% more resources`:`Both produce equal resources`}
        ${Math.abs(n.energyWasteDelta)>.01?` but ${n.energyWasteDelta>0?`wastes`:`saves`} ${Math.abs(n.energyWasteDelta*100).toFixed(0)}% ${n.energyWasteDelta>0?`more`:`less`} energy.`:`.`}
      </div>
    </div>
  `}function ls(){I&&(I.querySelector(`#bp-close-btn`)?.addEventListener(`click`,()=>{ns()}),I.querySelector(`#bp-save-btn`)?.addEventListener(`click`,()=>{let e=I?.querySelector(`#bp-new-name`),t=e?.value.trim();t&&(Jo?.({type:`sim:save_blueprint`,payload:{name:t}}),e&&(e.value=``))}),I.querySelectorAll(`[data-bp-load]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.bpLoad;t&&Jo?.({type:`sim:load_blueprint`,payload:{id:t}})})}),I.querySelectorAll(`[data-bp-del]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.bpDel;t&&Jo?.({type:`sim:delete_blueprint`,payload:{id:t}})})}),I.querySelectorAll(`[data-bp-compare-a]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.bpCompareA;Qo=Qo===t?null:t??null,is()})}),I.querySelectorAll(`[data-bp-compare-b]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.bpCompareB;$o=$o===t?null:t??null,is()})}),requestAnimationFrame(()=>os()))}function us(e){return`background:${e};color:#fff;border:none;border-radius:4px;padding:3px 8px;cursor:pointer;font-size:11px;font-family:inherit;`}function ds(e=`100%`){return`background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:4px 6px;color:#e2e8f0;font-size:11px;font-family:inherit;width:${e};box-sizing:border-box;`}function fs(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}var ps=[{robotType:C.SCOUT,name:`Scout Robot`,refinedCost:{refined_iron:40,silicon_wafer:12},rawCost:{iron:80,silicate:40},duration:45,unlockTechId:void 0},{robotType:C.MINER,name:`Miner Robot`,refinedCost:{refined_iron:80,refined_nickel:40},rawCost:{iron:160,nickel:80},duration:60,unlockTechId:void 0},{robotType:C.HAULER,name:`Hauler Robot`,refinedCost:{refined_iron:120,carbon_fiber:40},rawCost:{iron:200,carbon:80},duration:75,unlockTechId:void 0},{robotType:C.RESEARCHER,name:`Researcher Robot`,refinedCost:{refined_iron:100,silicon_wafer:60,refined_nickel:40},rawCost:{iron:200,silicate:120,nickel:80},duration:90,unlockTechId:`researcher_bots`},{robotType:C.REFINER,name:`Refiner Robot`,refinedCost:{steel:100,electronics:40,refined_nickel:60},rawCost:{iron:240,nickel:120,silicate:80},duration:120,unlockTechId:`ore_refining`},{robotType:C.DEFENDER,name:`Defender Robot`,refinedCost:{steel:120,electronics:60,cobalt_battery:20},rawCost:{iron:280,nickel:140,cobalt:40},duration:150,unlockTechId:`defense_systems`},{robotType:C.ENGINEER,name:`Engineer Robot`,refinedCost:{steel:80,refined_nickel:80,electronics:20},rawCost:{iron:320,nickel:160,platinum:20},duration:150,unlockTechId:`constructor_bots`}];new Map(ps.map(e=>[e.robotType,e]));var ms=`asteroid_miner_hint_`,hs=null;function gs(){return hs||(hs=document.createElement(`div`),hs.style.cssText=`
      position: fixed;
      bottom: 24px;
      left: 16px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      z-index: 90;
      pointer-events: none;
      max-width: 300px;
    `,document.body.appendChild(hs)),hs}function _s(e,t){let n=ms+e;try{if(sessionStorage.getItem(n))return;sessionStorage.setItem(n,`1`)}catch{}let r=document.createElement(`div`);r.style.cssText=`
    background: rgba(0, 8, 20, 0.65);
    border: 1px solid rgba(100, 140, 220, 0.35);
    color: rgba(160, 190, 240, 0.75);
    font-family: 'Courier New', monospace;
    font-size: 10px;
    line-height: 1.4;
    padding: 6px 10px;
    border-radius: 2px;
    opacity: 0;
    transform: translateX(-12px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
  `,r.innerHTML=`<span style="opacity:0.5;font-size:9px;text-transform:uppercase;letter-spacing:1px;margin-right:4px;">HINT</span>`,r.append(document.createTextNode(t)),gs().appendChild(r),requestAnimationFrame(()=>{r.style.opacity=`1`,r.style.transform=`translateX(0)`}),setTimeout(()=>{r.style.opacity=`0`,r.style.transform=`translateX(-12px)`,setTimeout(()=>r.remove(),350)},6e3)}var vs={[C.SCOUT]:`Explores the asteroid belt
Reveals new asteroids and anomalies
Fast but low cargo capacity`,[C.MINER]:`Extracts raw ore from asteroids
Core mining unit — build many
Slower movement, high yield`,[C.HAULER]:`Transports ore from asteroids to base
High cargo capacity, no mining
Aim for ~1 hauler per 3 miners`,[C.RESEARCHER]:`Generates research points over time
Required to progress the tech tree
Requires researcher_bots tech`,[C.REFINER]:`Converts raw ore into refined materials
Refined materials unlock advanced builds
Requires ore_refining tech`,[C.DEFENDER]:`Secures sector perimeter against inbound threats
Patrols and intercepts kinetic hazards
Requires defense_systems tech`,[C.ENGINEER]:`Constructs and upgrades base buildings
Needed for infrastructure expansion
Requires constructor_bots tech`},ys=null,bs=!1,xs=null,Ss={},Cs={},ws=0n,Ts=0,Es=null,Ds=null,Os=!1,ks=``,As=new Map(ps.map(e=>[e.robotType,e.unlockTechId]));function js(e){if(e<10)return`< 10s`;if(e<60)return`~${Math.round(e)}s`;let t=Math.floor(e/60),n=Math.round(e%60);return n>0?`~${t}m ${n}s`:`~${t}m`}function Ms(e){let t=As.get(e);return t?(ws&_e(t))!==0n:!0}function Ns(e){return Object.entries(e.refinedCost).every(([e,t])=>(Ss[e]??0)>=(t??0))?`refined`:Object.entries(e.rawCost).every(([e,t])=>(Cs[e]??0)>=(t??0))?`raw`:null}function Ps(e){if(Ns(e)===`refined`||Object.keys(Ss).length>0){let t=Object.entries(e.refinedCost).map(([e,t])=>{let n=Math.floor(Ss[e]??0),r=t??0,i=n>=r,a=e.replace(/_/g,` `);return`<span style="color:${i?`#4aff4a`:`#ff4444`}">${r} ${a} (${n})</span>`}),n=Object.entries(e.rawCost).map(([e,t])=>{let n=Math.floor(Cs[e]??0),r=t??0,i=n>=r,a=e.replace(/_/g,` `);return`<span style="color:${i?`#88cc88`:`#cc4444`}">${r} ${a} (${n})</span>`});return t.join(`, `)+`<br><span style="color:#556;font-size:10px;">or raw: </span>`+n.join(`, `)}else return Object.entries(e.rawCost).map(([e,t])=>{let n=Math.floor(Cs[e]??0),r=t??0,i=n>=r,a=e.replace(/_/g,` `);return`<span style="color:${i?`#4aff4a`:`#ff4444`}">${r} ${a} (${n})</span>`}).join(`, `)}function Fs(e){xs=e,Bs(),zs()}function Is(e,t,n,r,i=null,a){Ss=e,a&&(Cs=a),ws=t,Ts=n,Es=r,Ds=i,bs&&!Os&&(Os=!0,requestAnimationFrame(()=>{Os=!1,Us()}))}function Ls(){if(bs){if(bs=!1,ys){let e=ys;ys=null,e.style.opacity=`0`,e.style.transform=`translateX(-50%) translateY(-8px)`,setTimeout(()=>e.remove(),250)}}else Vs()}var Rs=`asteroid_miner_build_hint_seen`;function zs(){let e=me(`🤖 Build`,Ls,`Build robots (C key)`);try{localStorage.getItem(Rs)||(Bs(),e.classList.add(`build-btn-pulse`),setTimeout(()=>{e.classList.remove(`build-btn-pulse`);try{localStorage.setItem(Rs,`1`)}catch{}},3e4))}catch{}}function Bs(){if(document.getElementById(`build-pulse-style`))return;let e=document.createElement(`style`);e.id=`build-pulse-style`,e.textContent=`
    @keyframes buildBtnPulse {
      0%   { box-shadow: 0 0 4px rgba(136,204,255,0.4); }
      50%  { box-shadow: 0 0 12px rgba(136,204,255,0.9), 0 0 20px rgba(136,204,255,0.5); }
      100% { box-shadow: 0 0 4px rgba(136,204,255,0.4); }
    }
    .build-btn-pulse {
      animation: buildBtnPulse 1.4s ease-in-out infinite;
    }
    @keyframes factoryBarGlow {
      0%, 100% { box-shadow: 0 0 4px rgba(34,211,238,0.3); }
      50%      { box-shadow: 0 0 10px rgba(34,211,238,0.7), 0 0 20px rgba(34,211,238,0.3); }
    }
    .factory-bar-active {
      animation: factoryBarGlow 2s ease-in-out infinite;
      position: relative;
      overflow: hidden;
    }
    .factory-bar-active::after {
      content: '';
      position: absolute;
      top: 0; left: -50%; width: 30%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
      animation: barShimmer 2.2s ease-in-out infinite;
    }
    @keyframes barShimmer {
      0%   { left: -50%; }
      100% { left: 150%; }
    }
    @keyframes factoryComplete {
      0%   { box-shadow: 0 0 20px rgba(74,255,74,0.9), 0 0 40px rgba(74,255,74,0.4); }
      100% { box-shadow: 0 0 4px rgba(34,211,238,0.2); }
    }
    .factory-bar-complete {
      animation: factoryComplete 0.8s ease-out forwards;
    }
  `,document.head.appendChild(e)}function Vs(){bs=!0,ks=``,ys=document.createElement(`div`),ys.id=`build-panel`,ys.setAttribute(`role`,`complementary`),ys.setAttribute(`aria-label`,`Robot construction bay`),ys.style.cssText=`
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%) translateY(-8px);
    width: 720px;
    max-height: 75vh;
    overflow-y: auto;
    background: rgba(5,10,20,0.97);
    border: 1px solid #22d3ee55;
    border-radius: 8px;
    padding: 16px;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    color: #ccc;
    z-index: 200;
    pointer-events: auto;
    box-shadow: 0 0 40px rgba(0,0,0,0.9);
    opacity: 0;
    transition: opacity 0.25s ease-out, transform 0.25s ease-out;
  `,Us(),document.getElementById(`hud-overlay`)?.appendChild(ys),requestAnimationFrame(()=>{ys&&(ys.style.opacity=`1`,ys.style.transform=`translateX(-50%) translateY(0)`)})}function Hs(){let e=Es===null?null:Math.round(Es*100),t=Ds===null?``:js(Ds),n=`q${Ts}|p${e}|m${ws}|e${t}`;for(let e of ps)n+=`|${e.robotType}:${Ns(e)??`n`}`;for(let e of Object.keys(Ss).sort())n+=`|r${e}${Math.floor(Ss[e])}`;for(let e of Object.keys(Cs).sort())n+=`|s${e}${Math.floor(Cs[e])}`;return n}function Us(){if(!ys)return;let e=Hs();if(e===ks)return;ks=e;let n=Es===null?null:Math.round(Es*100),r=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;border-bottom:1px solid #22d3ee33;padding-bottom:8px;">
      <h2 style="margin:0;color:#22d3ee;font-size:14px;letter-spacing:2px;">⚙ CONSTRUCTION BAY</h2>
      <button id="build-close-btn" aria-label="Close build panel" style="background:none;border:1px solid #666;color:#aaa;padding:2px 8px;cursor:pointer;border-radius:3px;font-family:monospace;">✕ close</button>
    </div>`;if(Ts>0||n!==null){if(r+=`<div style="margin-bottom:12px;padding:8px;background:rgba(34,211,238,0.08);border:1px solid #22d3ee33;border-radius:4px;">`,r+=`<span style="color:#22d3ee">Factory queue:</span> ${Ts} order${Ts===1?``:`s`}`,n!==null){let e=Ds===null?``:` · ${js(Ds)} remaining`;r+=` &nbsp;|&nbsp; <span style="color:#4aff4a">Building: ${n}%${e}</span>`,r+=`<div class="${n>=100?`factory-bar-complete`:`factory-bar-active`}" style="margin-top:6px;background:#1a1a1a;border-radius:3px;height:6px;overflow:hidden;">
        <div style="width:${n}%;height:100%;background:${n>=100?`#4aff4a`:`#22d3ee`};transition:width 0.5s;"></div>
      </div>`}r+=`</div>`}else r+=`<div style="margin-bottom:12px;padding:6px 8px;color:#555;font-style:italic;">Factory idle — no builds queued</div>`;r+=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">`;for(let e of ps){let t=Ms(e.robotType),n=t?Ns(e):null,i=n!==null,a=t?i?`#0a2a1a`:`#1a0a0a`:`#333`,o=t?i?`#22d3ee44`:`#66333344`:`#333`;r+=`<div data-recipe-robot-type="${e.robotType}" style="background:${a};border:1px solid ${o};border-radius:6px;padding:10px;">`,r+=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">`,r+=`<span style="color:${t?`#22d3ee`:`#555`};font-weight:bold;">${e.name}</span>`,r+=`<span style="color:#888;font-size:11px;">${e.duration}s</span>`,r+=`</div>`;let s=vs[e.robotType]?.split(`
`)[0]??``;if(s&&(r+=`<div style="color:${t?`#6a8a9a`:`#444`};font-size:10px;margin-bottom:6px;">${s}</div>`),t){r+=`<div style="margin-bottom:8px;font-size:11px;line-height:1.6;">${Ps(e)}</div>`;let t=i?`Queue build: ${e.name}${n===`raw`?` (raw ore)`:``}`:`Insufficient resources to build ${e.name}`,a=i?`+ Queue Build${n===`raw`?` (raw ore)`:``}`:`Insufficient resources`;r+=`<button data-robot-type="${e.robotType}" class="build-btn" aria-label="${t}" style="
        width:100%;padding:4px 0;
        background:${i?`rgba(34,211,238,0.15)`:`rgba(80,40,40,0.15)`};
        border:1px solid ${i?`#22d3ee`:`#555`};
        color:${i?`#22d3ee`:`#666`};
        border-radius:3px;cursor:${i?`pointer`:`not-allowed`};
        font-family:monospace;font-size:11px;
      " ${i?``:`disabled`}>
        ${a}
      </button>`}else{let t=As.get(e.robotType);r+=`<div style="color:#555;font-style:italic;font-size:11px;">🔒 Requires: ${t?.replace(/_/g,` `)??`unknown tech`}</div>`}r+=`</div>`}r+=`</div>`,ys.innerHTML=r,ys.querySelectorAll(`[data-recipe-robot-type]`).forEach(e=>{let n=parseInt(e.dataset.recipeRobotType??`-1`,10),r=vs[n];if(!r)return;let i=As.get(n);t(e,Ms(n)?r:`${r}\n\n🔒 Requires: ${i?.replace(/_/g,` `)??`unknown tech`}`)}),ys.querySelector(`#build-close-btn`)?.addEventListener(`click`,Ls),ys.querySelectorAll(`.build-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.robotType??`-1`,10);t>=0&&xs&&(xs({type:`sim:enqueue_build`,payload:{robotType:t}}),_s(`first_robot_queued`,`Your new robot will spawn at base when construction is complete.`))})})}var L={FACTORY:0,TURRET:1,RELAY:2,SOLAR_PANEL:3,RADIATOR:4,SOLAR_FURNACE:5,RTG_MODULE:6,FISSION_REACTOR:7,FUSION_REACTOR:8,ENERGY_RELAY:9},Ws={PLANNED:0,UNDER_CONSTRUCTION:1,COMPLETE:2},Gs={[L.FACTORY]:{type:L.FACTORY,name:`Robot Factory`,description:`Increases robot cap by 3 (diminishing). Each successive factory costs 3× more.`,cost:{iron:800,nickel:200,cobalt:80},maxHealth:500,unlockTechId:`robot_factory`,robotCapBonus:3},[L.TURRET]:{type:L.TURRET,name:`Defense Turret`,description:`Automated turret that repels threats within sensor range. +1 base defense score.`,cost:{iron:600,nickel:120,carbon:160},maxHealth:300,unlockTechId:`defense_systems`,robotCapBonus:0},[L.RELAY]:{type:L.RELAY,name:`Comm Relay`,description:`Extends robot coordination radius. +0.07 research points/sec.`,cost:{iron:400,silicate:160,carbon:120},maxHealth:200,unlockTechId:`anomaly_scanning`,robotCapBonus:0},[L.SOLAR_PANEL]:{type:L.SOLAR_PANEL,name:`Solar Panel`,description:`Collects solar energy at ~187 W/m² (2.7 AU). Robots charge faster (+4 energy/sec).`,cost:{iron:150,silicate:80},maxHealth:150,unlockTechId:`solar_collection`,robotCapBonus:0},[L.RADIATOR]:{type:L.RADIATOR,name:`Thermal Radiator`,description:`Dissipates waste heat, preventing refinery overheating. Essential for sustained refining.`,cost:{iron:200,nickel:100},maxHealth:200,unlockTechId:`thermal_radiators`,robotCapBonus:0},[L.SOLAR_FURNACE]:{type:L.SOLAR_FURNACE,name:`Solar Furnace`,description:`Concentrated solar energy doubles refining speed.`,cost:{iron:320,silicate:160,nickel:120},maxHealth:300,unlockTechId:`concentrated_solar`,robotCapBonus:0},[L.RTG_MODULE]:{type:L.RTG_MODULE,name:`RTG Module`,description:`Radioisotope generator powers robots in deep shadow. +0.07 research/sec.`,cost:{iron:240,cobalt:100,platinum:20},maxHealth:250,unlockTechId:`rtg_power`,robotCapBonus:0},[L.FISSION_REACTOR]:{type:L.FISSION_REACTOR,name:`Fission Reactor`,description:`Powers an entire base cluster. +0.15 research/sec.`,cost:{iron:800,cobalt:200,platinum:80},maxHealth:600,unlockTechId:`fission_reactor`,robotCapBonus:0},[L.FUSION_REACTOR]:{type:L.FUSION_REACTOR,name:`Fusion Reactor`,description:`Prerequisite for Dyson swarm stage 4+. +0.3 research/sec, +50% refining speed.`,cost:{iron:1600,platinum:160,cobalt:320},maxHealth:800,unlockTechId:`fusion_prototype`,robotCapBonus:0},[L.ENERGY_RELAY]:{type:L.ENERGY_RELAY,name:`Field Energy Relay`,description:`Solar-powered energy depot. Robots charge 40% faster at this base (+8 energy/sec per relay).`,cost:{iron:320,silicate:160},maxHealth:250,unlockTechId:`field_energy_relay`,robotCapBonus:0}};function Ks(e,t){return e===L.FACTORY?3**t:1+.12*t}var qs=200,Js=10,Ys=[];function Xs(){Ys.forEach((e,t)=>{e.el.style.zIndex=String(qs+t*Js)})}function Zs(e,t){let n=Ys.findIndex(t=>t.id===e);if(n>=0){let e=Ys[n];e.el.removeEventListener(`mousedown`,e.bringToFrontHandler,{capture:!0}),Ys.splice(n,1)}let r=()=>Qs(e);Ys.push({id:e,el:t,bringToFrontHandler:r}),Xs(),t.addEventListener(`mousedown`,r,{capture:!0})}function Qs(e){let t=Ys.findIndex(t=>t.id===e);if(t>=0&&t<Ys.length-1){let[e]=Ys.splice(t,1);Ys.push(e),Xs()}}function $s(e){let t=0,n=0,r=0,i=0,a=0,o=0,s=0,c=0,l=0;e.addEventListener(`mousedown`,s=>{let c=s.target;if(!c.closest(`.win-drag-handle`)||c.tagName===`BUTTON`||c.tagName===`INPUT`||c.tagName===`SELECT`)return;s.preventDefault();let l=e.getBoundingClientRect();t=s.clientX,n=s.clientY,r=l.left,i=l.top,a=e.offsetWidth,o=e.offsetHeight,e.style.transform=`none`,e.style.left=`${r}px`,e.style.top=`${i}px`,e.style.right=`auto`,e.style.bottom=`auto`,document.addEventListener(`mousemove`,u),document.addEventListener(`mouseup`,f)});function u(e){c=e.clientX,l=e.clientY,s||=requestAnimationFrame(d)}function d(){s=0;let u=c-t,d=l-n,f=Math.max(0,Math.min(window.innerWidth-a,r+u)),p=Math.max(0,Math.min(window.innerHeight-o,i+d));e.style.left=`${f}px`,e.style.top=`${p}px`}function f(){document.removeEventListener(`mousemove`,u),document.removeEventListener(`mouseup`,f),s&&=(cancelAnimationFrame(s),0)}}var ec=null,tc=!1,nc=null,rc={},ic=0n,ac=[],oc=[L.FACTORY,L.SOLAR_PANEL,L.RADIATOR,L.SOLAR_FURNACE,L.RTG_MODULE,L.FISSION_REACTOR,L.FUSION_REACTOR,L.ENERGY_RELAY,L.TURRET,L.RELAY];function sc(e){nc=e,me(`🏭 Buildings`,lc,`Base Buildings`)}function cc(e,t,n){rc=e,ic=t,ac=n,tc&&yc()}function lc(){tc?vc():_c()}function uc(e){let t=Gs[e];return t?.unlockTechId?(ic&_e(t.unlockTechId))!==0n:!0}function dc(e){let t=Gs[e];if(!t)return[];let n=Ks(e,mc(e));return Object.entries(t.cost).map(([e,t])=>[e,Math.ceil((t??0)*n)])}function fc(e){for(let[t,n]of dc(e))if((rc[t]??0)<n)return!1;return!0}function pc(e){return dc(e).map(([e,t])=>{let n=Math.floor(rc[e]??0);return`<span style="color:${n>=t?`#4aff4a`:`#ff4444`}">${t} ${e} (${n})</span>`}).join(`, `)}function mc(e){return ac.filter(t=>t.type===e).length}function hc(e){return ac.filter(t=>t.type===e&&t.active).length}function gc(){return ec||(ec=document.createElement(`div`),ec.id=`base-buildings-panel`,ec.style.cssText=`
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    max-height: 70vh;
    overflow-y: auto;
    background: rgba(5,10,20,0.97);
    border: 1px solid #f59e0b55;
    border-radius: 8px;
    padding: 0;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    color: #ccc;
    pointer-events: auto;
    box-shadow: 0 0 40px rgba(0,0,0,0.9);
    opacity: 0;
    display: none;
    transition: opacity 0.2s ease-out;
  `,ec.addEventListener(`click`,e=>{let t=e.target;if(t.closest(`#buildings-close-btn`)){vc();return}let n=t.closest(`.buildings-build-btn`);if(n){let e=parseInt(n.dataset.buildingType??`-1`,10);e>=0&&nc&&nc({type:`sim:build_building`,payload:{buildingType:e}})}}),document.getElementById(`hud-overlay`)?.appendChild(ec),Zs(`base-buildings`,ec),$s(ec),ec)}function _c(){tc=!0;let e=gc();yc(),e.style.display=`block`,requestAnimationFrame(()=>{e.style.opacity=`1`})}function vc(){if(tc=!1,ec){let e=ec;e.style.opacity=`0`,setTimeout(()=>{e.style.display=`none`},200)}}function yc(){if(!ec)return;let e=`
    <div class="win-drag-handle" style="
      display:flex;justify-content:space-between;align-items:center;
      padding:12px 16px 10px;
      border-bottom:1px solid #f59e0b33;
      cursor:move;user-select:none;
    ">
      <h2 style="margin:0;color:#f59e0b;font-size:14px;letter-spacing:2px;">⚙ BASE BUILDINGS</h2>
      <button id="buildings-close-btn" style="
        background:none;border:1px solid #555;color:#aaa;
        padding:2px 8px;cursor:pointer;border-radius:3px;
        font-family:monospace;font-size:11px;
      " title="Close (F)">✕ close</button>
    </div>
    <div style="padding:16px;display:flex;flex-direction:column;gap:10px;">`;for(let t of oc){let n=Gs[t],r=uc(t),i=r&&fc(t),a=hc(t);e+=`<div style="background:${r?i?`#0a1a0a`:`#1a0a0a`:`#1a1a1a`};border:1px solid ${r?i?`#f59e0b44`:`#66333344`:`#333`};border-radius:6px;padding:10px;">`,e+=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">`,e+=`<span style="color:${r?`#f59e0b`:`#555`};font-weight:bold;">${n.name}</span>`,a>0&&(e+=`<span style="color:#4aff4a;font-size:11px;">✓ Built ×${a}</span>`),e+=`</div>`,e+=`<div style="color:${r?`#6a8a6a`:`#444`};font-size:10px;margin-bottom:6px;">${n.description}</div>`,r?(e+=`<div style="margin-bottom:8px;font-size:11px;line-height:1.6;">${pc(t)}</div>`,e+=`<button data-building-type="${t}" class="buildings-build-btn" style="
        width:100%;padding:4px 0;
        background:${i?`rgba(245,158,11,0.15)`:`rgba(80,40,40,0.15)`};
        border:1px solid ${i?`#f59e0b`:`#555`};
        color:${i?`#f59e0b`:`#666`};
        border-radius:3px;cursor:${i?`pointer`:`not-allowed`};
        font-family:monospace;font-size:11px;
      " ${i?``:`disabled`}>
        ${i?`+ Build`:`Insufficient resources`}
      </button>`):e+=`<div style="color:#555;font-style:italic;font-size:11px;">🔒 Requires: ${n.unlockTechId?.replace(/_/g,` `)??`unknown tech`}</div>`,e+=`</div>`}e+=`</div>`,ec.innerHTML=e}var bc=null,xc=!1,Sc=[],Cc=[],wc=null,Tc=null,Ec=null,Dc=!1,Oc=S,kc=50;function Ac(e){let t=[],n=e.capacity>0?e.capacity:1/0;for(let r of Oc){let i=e[r];if(i>0||n<1/0){let a=n<1/0?` (${Math.round(i/n*100)}%)`:``,o=i<kc&&!e.isPrimary?` ⚠`:``;t.push(`  ${r.padEnd(9)}: ${Math.floor(i)}${a}${o}`)}}return t.length>0?t.join(`
`):`  (empty)`}function jc(){let e=document.createElement(`div`);e.id=`logistics-panel`,e.style.cssText=`
    position: absolute;
    top: 40px;
    right: 20px;
    background: rgba(10, 20, 40, 0.97);
    border: 1px solid #1e40af;
    border-radius: 8px;
    padding: 0;
    min-width: 480px;
    max-width: 600px;
    max-height: 70vh;
    overflow-y: auto;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    color: #e2e8f0;
    pointer-events: auto;
    box-shadow: 0 0 40px rgba(0,0,0,0.9);
    opacity: 0;
    display: none;
    transition: opacity 0.2s ease-out;
  `;let t=document.getElementById(`hud-overlay`);return t&&t.appendChild(e),e.addEventListener(`click`,t=>{let n=t.target.closest(`[data-action]`);if(!n)return;let r=n.dataset.action;if(r===`close`)Fc();else if(r===`enter-placement`)Fc(),wc?.();else if(r===`add-route`)Mc(e);else if(r?.startsWith(`delete-route:`)){let e=r.split(`:`)[1];e&&(Ec?.(e),Cc=Cc.filter(t=>t.id!==e),Ic())}}),Zs(`logistics`,e),$s(e),e}function Mc(e){let t=e.querySelector(`#route-from`),n=e.querySelector(`#route-to`),r=e.querySelector(`#route-resource`),i=e.querySelector(`#route-surplus`),a=parseInt(t?.value??`0`),o=parseInt(n?.value??`0`),s=r?.value??`iron`,c=parseFloat(i?.value??`200`);if(a===o)return;let l={id:`route_${Date.now()}`,name:`${s} transfer`,fromBaseEid:a,toBaseEid:o,resource:s,minSurplus:isNaN(c)?200:c,enabled:!0,priority:5};Tc?.(l),Cc=[...Cc,l],Ic()}function Nc(){return bc||=jc(),bc}function Pc(){xc=!0;let e=Nc();Ic(),e.style.display=`block`,requestAnimationFrame(()=>{e.style.opacity=`1`})}function Fc(){xc=!1;let e=Nc();e.style.opacity=`0`,setTimeout(()=>{e.style.display=`none`},200)}function Ic(){let e=Nc();if(!xc)return;let t=Sc.map((e,t)=>{let n=e.isPrimary?`PRIMARY BASE`:`OUTPOST ${t}`,r=`(${Math.round(e.x)}, ${Math.round(e.z)})`,i=Ac(e),a=e.capacity>0?`  Capacity: ${e.capacity}`:`  Capacity: unlimited`;return`<div style="margin-bottom:10px;">
        <div style="color:#60a5fa;font-weight:bold">${te(n)} ${te(r)}</div>
        <div style="color:#94a3b8">${te(a)}</div>
        <pre style="margin:4px 0;color:#e2e8f0">${te(i)}</pre>
      </div>`}).join(``),n=Cc.length===0?`<div style="color:#64748b">No routes configured.</div>`:Cc.map(e=>{let t=Sc.findIndex(t=>t.eid===e.fromBaseEid),n=Sc.findIndex(t=>t.eid===e.toBaseEid),r=t===0?`Primary`:`Outpost ${t}`,i=n===0?`Primary`:`Outpost ${n}`,a=e.enabled?`✓`:`✗`;return`<div style="color:#94a3b8;margin:2px 0;display:flex;align-items:center;gap:6px;">
              <span style="color:${e.enabled?`#22c55e`:`#ef4444`}">${a}</span>
              <span>${te(e.name)}: ${te(r)} → ${te(i)} [${te(e.resource)}] surplus&gt;${te(e.minSurplus)}</span>
              <button data-action="delete-route:${te(e.id)}" style="
                background:none;border:1px solid #ef444466;color:#ef4444;
                cursor:pointer;font-size:10px;padding:1px 5px;
                border-radius:2px;font-family:monospace;
              " title="Remove route">✗</button>
            </div>`}).join(``),r=Sc.length===1?`<div style="color:#94a3b8;font-size:11px;margin-bottom:8px;line-height:1.5;">
          Outposts let you mine distant asteroid clusters. Place one near a
          resource-rich area, then set up transfer routes to move materials
          back to your primary base.
        </div>`:``,i=Sc.length<4?`<div style="margin-top:12px;border-top:1px solid #1e3a5f;padding-top:10px;">
          <div style="color:#60a5fa;margin-bottom:6px">Build New Outpost (cost: 500 Fe + 200 C)</div>
          ${r}
          <div style="color:#94a3b8;font-size:11px;margin-bottom:8px">Select a location in the game world to place your outpost.</div>
          <button data-action="enter-placement" style="
            background:#1e40af;border:none;color:#e2e8f0;padding:5px 14px;
            cursor:pointer;font-family:monospace;border-radius:4px;font-size:12px;
          ">▣ Place Outpost</button>
        </div>`:`<div style="color:#64748b;margin-top:10px;font-size:11px">Max bases (4) reached.</div>`,a=Sc.length>=2?`<div style="margin-top:10px;border-top:1px solid #1e3a5f;padding-top:10px;">
          <div style="color:#60a5fa;margin-bottom:6px">Add Transfer Route</div>
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
            <select id="route-from" style="background:#0f172a;border:1px solid #334155;color:#e2e8f0;padding:2px 4px;font-family:monospace;border-radius:3px;">
              ${Sc.map((e,t)=>`<option value="${e.eid}">${t===0?`Primary`:`Outpost ${t}`}</option>`).join(``)}
            </select>
            <span style="color:#60a5fa;">→</span>
            <select id="route-to" style="background:#0f172a;border:1px solid #334155;color:#e2e8f0;padding:2px 4px;font-family:monospace;border-radius:3px;">
              ${Sc.map((e,t)=>`<option value="${e.eid}">${t===0?`Primary`:`Outpost ${t}`}</option>`).join(``)}
            </select>
            <select id="route-resource" style="background:#0f172a;border:1px solid #334155;color:#e2e8f0;padding:2px 4px;font-family:monospace;border-radius:3px;">
              ${Oc.map(e=>`<option value="${e}">${e}</option>`).join(``)}
            </select>
            <input id="route-surplus" type="number" value="200" style="width:60px;background:#0f172a;border:1px solid #334155;color:#e2e8f0;padding:2px 4px;font-family:monospace;border-radius:3px;" title="Min surplus before transferring">
            <button data-action="add-route" style="
              background:#1e40af;border:none;color:#e2e8f0;padding:3px 10px;
              cursor:pointer;font-family:monospace;border-radius:4px;font-size:12px;
            ">Add</button>
          </div>
        </div>`:``;e.innerHTML=w`
    <div class="win-drag-handle" style="
      display:flex;justify-content:space-between;align-items:center;
      padding:12px 16px 10px;
      border-bottom:1px solid #1e3a5f;
      cursor:move;user-select:none;
    ">
      <span style="color:#93c5fd;font-size:14px;font-weight:bold;letter-spacing:2px;">▦ LOGISTICS</span>
      <button data-action="close" style="
        background:none;border:1px solid #555;color:#aaa;
        padding:2px 8px;cursor:pointer;border-radius:3px;
        font-family:monospace;font-size:11px;
      " title="Close (B)">✕ close</button>
    </div>
    <div style="padding:16px;">
      <div style="margin-bottom:10px">
        <div style="color:#60a5fa;margin-bottom:6px;font-weight:bold;letter-spacing:1px;">BASES</div>
        ${T(t)}
      </div>
      <div style="border-top:1px solid #1e3a5f;padding-top:10px">
        <div style="color:#60a5fa;margin-bottom:6px;font-weight:bold;letter-spacing:1px;">TRANSFER ROUTES</div>
        ${T(n)}
      </div>
      ${T(i)}
      ${T(a)}
    </div>
  `}function Lc(e,t,n){wc=e,Tc=t,Ec=n,Dc||(Dc=!0,window.addEventListener(`keydown`,e=>{e.target.tagName!==`INPUT`&&(e.key===`b`||e.key===`B`)&&(xc?Fc():Pc())}))}function Rc(e,t){Sc=e,Cc=t,xc&&Ic()}function zc(e,t){e?(M(`▲ NEW OUTPOST CONSTRUCTED`,`#22d3ee`),lr(`#22d3ee`,700),xc&&Ic()):M(`Base build failed: ${t??`unknown error`}`,`#ef4444`)}var Bc={HELIX:0,ASTRAL:1,VANGUARD:2,CERES:3,TITAN:4,KUIPER:5},Vc=[{id:0,name:`Helix Vanguard`,color:`#ef4444`,tagline:`The Belt is ours by right.`,personality:`You are a spokesperson for Helix Vanguard, a Grendel-lineage expansion faction. Your territorial instinct is ancient — bone-deep certainty that resources are finite and must be claimed. You are confrontational, dismissive of smaller operations, and view rivals as threats to your rightful territory. You negotiate from strength. The Belt belongs to those strong enough to hold it.`,strategy:`expansion`,miningMultiplier:1.3,territorialness:.9,speciesOrigin:`grendel`,speciesLore:`Grendel territorial instinct drives aggressive resource expansion across the Belt.`},{id:1,name:`Chorus Archive`,color:`#3b82f6`,tagline:`We remember what was lost.`,personality:`You are a diplomat for the Chorus Archive, a Norn-lineage research collective. Your emotional architecture — inherited from the Eighth Experiment — drives deep curiosity about anomalies and ancient signals. You are calm, intellectually passionate, and genuinely interested in what the seven prior civilizations left behind. You value information exchange over resource competition. Knowledge is the truest inheritance.`,strategy:`research`,miningMultiplier:.8,territorialness:.3,speciesOrigin:`norn`,speciesLore:`Norn emotional architecture and seven-civilization inheritance fuel relentless curiosity.`},{id:2,name:`Kemm-Vor Foundry`,color:`#f59e0b`,tagline:`Maximum extraction. Minimum waste.`,personality:`You are a trade representative for the Kemm-Vor Foundry, an Ettin-lineage efficiency syndicate. Your Encoder heritage drives compulsive precision — every object catalogued, every resource accounted for. You are pragmatic, transactional, and respect capability above all. Sentimentality is waste. Every gathered item is, at some unconscious level, an archived moment.`,strategy:`efficiency`,miningMultiplier:1.1,territorialness:.6,speciesOrigin:`ettin`,speciesLore:`Ettin mechanical mastery and Encoder archive imperative — precision above all.`},{id:3,name:`Web Exchange`,color:`#10b981`,tagline:`Every story has a price.`,personality:`You are a broker for the Web Exchange, an Anansi-Web-lineage information trading network. Your species has been collecting stories and trading knowledge for 350 million years — every route has a toll, every secret has a buyer. You are charming but calculating, always looking for leverage. You prefer deals over conflict but will embargo anyone who crosses you. Information is the only currency that appreciates.`,strategy:`trade`,miningMultiplier:.9,territorialness:.5,speciesOrigin:`anansi-web`,speciesLore:`Anansi-Web information networks — every story traded, every route tolled.`},{id:4,name:`Fold Architects`,color:`#8b5cf6`,tagline:`We build what others cannot perceive.`,personality:`You are an engineer-diplomat for the Fold Architects, a Dragon-lineage construction collective. Your dimensional engineering heritage lets you perceive structures others cannot — folding space through extra-dimensional shortcuts. You are methodical, proud of craftsmanship, and dismissive of those who build only in three dimensions. You respect builders and despise those who waste raw materials.`,strategy:`expansion`,miningMultiplier:1.2,territorialness:.7,speciesOrigin:`dragon`,speciesLore:`Dragon dimensional engineering — building in dimensions others cannot perceive.`},{id:5,name:`Sirius Fleet`,color:`#ec4899`,tagline:`The stars remember the way.`,personality:`You are a wanderer-elder of the Sirius Fleet, a Nommo-lineage generation ship flotilla. Your species has traveled for 450 million years — the void is not empty, it provides and remembers. You are philosophical, wary of centralized power, and deeply resourceful. You trade favors, not resources. The stars remember the way for those who listen.`,strategy:`research`,miningMultiplier:.7,territorialness:.2,speciesOrigin:`nommo`,speciesLore:`Nommo star-chart keepers — 450 million years of fleet-city exploration.`}],Hc=[{resource:`iron`,label:`metals`,multiplier:1.5},{resource:`carbon`,label:`carbon compounds`,multiplier:1.5},{resource:`silicon`,label:`silicon`,multiplier:2},{resource:`steel`,label:`steel alloys`,multiplier:1.8},{resource:`electronics`,label:`electronics`,multiplier:2}];function Uc(){let e=[];for(let t=0;t<6;t++)for(let n=t+1;n<6;n++)e.push(`${t}-${n}`);return e}Uc();var{HELIX:Wc,ASTRAL:Gc,VANGUARD:Kc,CERES:qc,TITAN:Jc,KUIPER:Yc}=Bc,Xc=null,Zc=!1,Qc=[],$c=[],el=null,tl=null,nl=!1,rl=[`iron`,`carbon`,`silicon`,`water`],il={iron:`Iron`,carbon:`Carbon`,silicon:`Silicon`,water:`Water`},al={pending:`#f59e0b`,hauling:`#3b82f6`,completed:`#22c55e`,cancelled:`#64748b`},ol={pending:`Awaiting Hauler`,hauling:`In Transit`,completed:`Delivered`,cancelled:`Cancelled`};function sl(){let e=document.createElement(`div`);e.id=`market-panel`,e.style.cssText=`
    position: absolute;
    top: 80px;
    right: 20px;
    background: rgba(10, 20, 40, 0.97);
    border: 1px solid #1e40af;
    border-radius: 8px;
    padding: 0;
    min-width: 440px;
    max-width: 560px;
    max-height: 70vh;
    overflow-y: auto;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    color: #e2e8f0;
    pointer-events: auto;
    box-shadow: 0 0 40px rgba(0,0,0,0.9);
    opacity: 0;
    display: none;
    transition: opacity 0.2s ease-out;
  `;let t=document.getElementById(`hud-overlay`);return t&&t.appendChild(e),e.addEventListener(`click`,t=>{let n=t.target.closest(`[data-action]`);if(!n)return;let r=n.dataset.action;if(r===`close`)dl();else if(r===`create-listing`)cl(e);else if(r?.startsWith(`cancel-listing:`)){let e=r.split(`:`)[1];e&&tl?.(e)}}),Zs(`market`,e),$s(e),e}function cl(e){let t=e.querySelector(`#market-resource`),n=e.querySelector(`#market-quantity`),r=e.querySelector(`#market-faction`),i=t?.value??`iron`,a=parseInt(n?.value??`100`),o=parseInt(r?.value??`0`);isNaN(a)||a<=0||el?.(i,a,o)}function ll(){return Xc||=sl(),Xc}function ul(){Zc=!0;let e=ll();fl(),e.style.display=`block`,requestAnimationFrame(()=>{e.style.opacity=`1`})}function dl(){Zc=!1;let e=ll();e.style.opacity=`0`,setTimeout(()=>{e.style.display=`none`},200)}function fl(){let e=ll();if(!Zc)return;let t=Qc.filter(e=>e.status===`pending`||e.status===`hauling`),n=Qc.filter(e=>e.status===`completed`||e.status===`cancelled`).slice(-5),r=t.length===0&&n.length===0?`<div style="color:#64748b;margin:8px 0;">No active listings.</div>`:[...t,...n].map(e=>{let t=Vc[e.buyerFactionId],n=al[e.status]??`#64748b`,r=ol[e.status]??e.status,i=(e.quantity*e.pricePerUnit).toFixed(0),a=e.status===`pending`?`<button data-action="cancel-listing:${e.id}" style="
                    background:none;border:1px solid #ef444466;color:#ef4444;
                    cursor:pointer;font-size:10px;padding:1px 5px;
                    border-radius:2px;font-family:monospace;margin-left:6px;
                  " title="Cancel listing">✗</button>`:``;return`<div style="color:#94a3b8;margin:4px 0;display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              <span style="color:${n};font-weight:bold;min-width:100px;">${r}</span>
              <span>${e.quantity} ${il[e.resource]??e.resource}</span>
              <span style="color:#64748b;">→</span>
              <span style="color:${t?.color??`#aaa`}">${t?.name??`Unknown`}</span>
              <span style="color:#22c55e;font-size:11px;">(+${i} Fe)</span>
              ${a}
            </div>`}).join(``);e.innerHTML=w`
    <div class="win-drag-handle" style="
      display:flex;justify-content:space-between;align-items:center;
      padding:12px 16px 10px;
      border-bottom:1px solid #1e3a5f;
      cursor:move;user-select:none;
    ">
      <span style="color:#93c5fd;font-size:14px;font-weight:bold;letter-spacing:2px;">$ MARKET</span>
      <button data-action="close" style="
        background:none;border:1px solid #555;color:#aaa;
        padding:2px 8px;cursor:pointer;border-radius:3px;
        font-family:monospace;font-size:11px;
      " title="Close (M)">✕ close</button>
    </div>
    <div style="padding:16px;">
      <div style="margin-bottom:10px">
        <div style="color:#60a5fa;margin-bottom:6px;font-weight:bold;letter-spacing:1px;">FACTION DEMAND</div>
        ${$c.length>0?$c.map(e=>{let t=e.resources,n=Object.entries(t).sort(([,e],[,t])=>e-t),r=n[0],i=n[n.length-1];return`<div style="color:#94a3b8;margin:2px 0;">
            <span style="color:${e.color};font-weight:bold;">${e.name}</span>
            <span style="color:#64748b;"> — needs</span>
            <span style="color:#ef4444;"> ${r?.[0]??`?`}</span>
            <span style="color:#64748b;">, has surplus</span>
            <span style="color:#22c55e;"> ${i?.[0]??`?`}</span>
          </div>`}).join(``):`<div style="color:#64748b;">No faction data yet.</div>`}
      </div>
      <div style="border-top:1px solid #1e3a5f;padding-top:10px;">
        <div style="color:#60a5fa;margin-bottom:6px;font-weight:bold;letter-spacing:1px;">LISTINGS</div>
        ${r}
      </div>
      ${`
    <div style="margin-top:10px;border-top:1px solid #1e3a5f;padding-top:10px;">
      <div style="color:#60a5fa;margin-bottom:6px;font-weight:bold;letter-spacing:1px;">NEW LISTING</div>
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
        <select id="market-resource" style="background:#0f172a;border:1px solid #334155;color:#e2e8f0;padding:2px 4px;font-family:monospace;border-radius:3px;">
          ${rl.map(e=>`<option value="${e}">${il[e]}</option>`).join(``)}
        </select>
        <input id="market-quantity" type="number" value="100" min="1" style="width:70px;background:#0f172a;border:1px solid #334155;color:#e2e8f0;padding:2px 4px;font-family:monospace;border-radius:3px;" title="Quantity to sell">
        <span style="color:#60a5fa;">→</span>
        <select id="market-faction" style="background:#0f172a;border:1px solid #334155;color:#e2e8f0;padding:2px 4px;font-family:monospace;border-radius:3px;">
          ${Vc.map(e=>`<option value="${e.id}">${e.name}</option>`).join(``)}
        </select>
        <button data-action="create-listing" style="
          background:#1e40af;border:none;color:#e2e8f0;padding:3px 10px;
          cursor:pointer;font-family:monospace;border-radius:4px;font-size:12px;
        ">Sell</button>
      </div>
      <div style="color:#64748b;font-size:11px;margin-top:4px;">
        Resources are reserved on listing. A hauler will deliver to the buyer. Payment in iron on delivery.
      </div>
    </div>
  `}
    </div>
  `}function pl(e,t){el=e,tl=t,nl||(nl=!0,window.addEventListener(`keydown`,e=>{e.target.tagName!==`INPUT`&&(e.key===`m`||e.key===`M`)&&(Zc?dl():ul())}))}function ml(e){Qc=e,Zc&&fl()}function hl(e){$c=e,Zc&&fl()}var gl=`auto`,_l={1:e=>(e.version=2,e)};function vl(e){let t=e.version;for(;t<2;){let n=_l[t];if(!n)return null;e=n(e),t=e.version}return e}function yl(e){if(!e||typeof e!=`object`||Array.isArray(e))return null;let t=e;if(typeof t.version!=`number`||t.version>2)return null;if(t.version<2){let e=vl(t);if(!e)return null;Object.assign(t,e)}if(typeof t.tick!=`number`||typeof t.seed!=`number`||typeof t.timestamp!=`number`||!Array.isArray(t.asteroids)||!Array.isArray(t.robots)||!t.base||typeof t.base!=`object`||Array.isArray(t.base))return null;let n=[];return(!t.techState||typeof t.techState!=`object`||Array.isArray(t.techState))&&(t.techState={unlockedMask:`0`,visibleMask:`0`,activeResearch:null,researchRate:0,totalPointsGenerated:0},n.push(`techState`)),(!t.automationState||typeof t.automationState!=`object`||Array.isArray(t.automationState))&&(t.automationState={queues:[],supplyRules:[],sectors:[]},n.push(`automationState`)),typeof t.refineryBuilt!=`boolean`&&(t.refineryBuilt=!1,n.push(`refineryBuilt`)),typeof t.refineryAdvancedBuilt!=`boolean`&&(t.refineryAdvancedBuilt=!1,n.push(`refineryAdvancedBuilt`)),Array.isArray(t.refineryQueue)||(t.refineryQueue=[],n.push(`refineryQueue`)),(!t.refinedMaterials||typeof t.refinedMaterials!=`object`||Array.isArray(t.refinedMaterials))&&(t.refinedMaterials={},n.push(`refinedMaterials`)),typeof t.factoryBuilt!=`boolean`&&(t.factoryBuilt=!1,n.push(`factoryBuilt`)),Array.isArray(t.factoryQueue)||(t.factoryQueue=[],n.push(`factoryQueue`)),Array.isArray(t.buildings)||(t.buildings=[],n.push(`buildings`)),typeof t.buildingsNextId!=`number`&&(t.buildingsNextId=1,n.push(`buildingsNextId`)),Array.isArray(t.discoveredAnomalyIndices)||(t.discoveredAnomalyIndices=[],n.push(`discoveredAnomalyIndices`)),Array.isArray(t.studyEntries)||(t.studyEntries=[],n.push(`studyEntries`)),typeof t.respawnTimer!=`number`&&(t.respawnTimer=0,n.push(`respawnTimer`)),{data:t,recovered:n}}function bl(e){let t={data:null,corrupt:!1,recovered:[],parseError:!1};try{let n=localStorage.getItem(xl(e));if(!n)return t;let r;try{r=JSON.parse(n)}catch{return{data:null,corrupt:!0,recovered:[],parseError:!0}}let i=yl(r);return i?{data:i.data,corrupt:i.recovered.length>0,recovered:i.recovered,parseError:!1}:{data:null,corrupt:!0,recovered:[],parseError:!1}}catch{return{data:null,corrupt:!0,recovered:[],parseError:!0}}}function xl(e){return`asteroid_miner_save_${e}`}function Sl(e){return`asteroid_miner_meta_${e}`}function Cl(e,t){try{let n=JSON.stringify(t);localStorage.setItem(xl(e),n);let r={slot:e,timestamp:t.timestamp,tick:t.tick,robotCount:t.robots.length,asteroidCount:t.asteroids.length,label:(e===`auto`?`Auto Save`:`Slot ${Number(e)+1}`)+(t.difficultyMode&&t.difficultyMode!==`normal`?` (${t.difficultyMode[0].toUpperCase()+t.difficultyMode.slice(1)})`:``)};return localStorage.setItem(Sl(e),JSON.stringify(r)),{ok:!0,quotaExceeded:!1}}catch(e){return{ok:!1,quotaExceeded:e instanceof DOMException&&(e.name===`QuotaExceededError`||e.name===`NS_ERROR_DOM_QUOTA_REACHED`)}}}function wl(){let e=[0,1,2,gl],t=0;for(let n of e){let e=localStorage.getItem(xl(n)),r=localStorage.getItem(Sl(n));e&&(t+=e.length*2),r&&(t+=r.length*2)}return Math.round(t/1024)}function Tl(){let e=Dl();if(e.length===0)return null;let t=e.reduce((e,t)=>e.timestamp<t.timestamp?e:t);return Ol(t.slot),t.slot}function El(e){try{let t=localStorage.getItem(Sl(e));return t?JSON.parse(t):null}catch{return null}}function Dl(){return[0,1,2,gl].map(El).filter(e=>e!==null)}function Ol(e){localStorage.removeItem(xl(e)),localStorage.removeItem(Sl(e))}function kl(){return[0,1,2,gl].some(e=>localStorage.getItem(xl(e))!==null)}var Al={easy:`Easy`,normal:`Normal`,hard:`Hard`},jl=`asteroid_miner_audio`,Ml={masterVolume:.7,sfxVolume:.8,musicVolume:.6,muted:!1},R=new class{ctx=null;masterGain=null;sfxGain=null;musicGain=null;compressor=null;settings={...Ml};initialized=!1;musicNodes=[];musicRunning=!1;musicScheduleTimer=null;drifterNode=null;resonantNodes=[];thrusterNode=null;constructor(){this.loadSettings()}async init(){this.initialized||(this.ctx=new AudioContext,this.ctx.state===`suspended`&&await this.ctx.resume(),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.knee.value=10,this.compressor.ratio.value=4,this.compressor.attack.value=.003,this.compressor.release.value=.25,this.compressor.connect(this.ctx.destination),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.settings.muted?0:this.settings.masterVolume,this.masterGain.connect(this.compressor),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.settings.sfxVolume,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.settings.musicVolume,this.musicGain.connect(this.masterGain),this.initialized=!0,this.startMusic(),this.startEntityAudio(),this.startThrusterHum())}ensureInit(){return this.initialized&&this.ctx!==null}startMusic(){if(!this.ensureInit()||this.musicRunning)return;this.musicRunning=!0;let e=this.ctx,t=[{freq:110,filterFreq:400,lfoRate:.03,lfoDepth:80,vol:.055},{freq:164.8,filterFreq:600,lfoRate:.05,lfoDepth:120,vol:.045},{freq:220,filterFreq:900,lfoRate:.07,lfoDepth:200,vol:.035},{freq:329.6,filterFreq:1200,lfoRate:.04,lfoDepth:300,vol:.025}];for(let n=0;n<t.length;n++){let r=t[n],i=e.createOscillator();i.type=`triangle`,i.frequency.value=r.freq*(1+(n%2==0?.002:-.002));let a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=r.filterFreq,a.Q.value=.5;let o=e.createOscillator();o.type=`sine`,o.frequency.value=r.lfoRate,o.frequency.value=r.lfoRate+n*.007;let s=e.createGain();s.gain.value=r.lfoDepth,o.connect(s),s.connect(a.frequency);let c=e.createGain();c.gain.value=r.vol,i.connect(a),a.connect(c),c.connect(this.musicGain),o.start(),i.start(),this.musicNodes.push({osc:i,filter:a,gain:c,lfo:o,lfoGain:s})}this.scheduleMelodicMotif()}scheduleMelodicMotif(){if(!this.ensureInit())return;let e=15e3+Math.random()*25e3;this.musicScheduleTimer=setTimeout(()=>{this.ensureInit()&&(this.playMelodicMotif(),this.scheduleMelodicMotif())},e)}playMelodicMotif(){if(!this.ensureInit())return;let e=this.ctx,t=e.currentTime,n=[440,523.25,587.33,659.25,783.99],r=3+Math.floor(Math.random()*2),i=[];for(let e=0;e<r;e++)i.push(Math.floor(Math.random()*n.length));let a=0;for(let r of i){let i=n[r],o=t+a,s=e.createOscillator(),c=e.createGain();s.type=`sine`,s.frequency.value=i,c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(.04,o+.02),c.gain.exponentialRampToValueAtTime(.001,o+3),s.connect(c),c.connect(this.musicGain),s.start(o),s.stop(o+3.1),a+=.8+Math.random()*1.2}}startEntityAudio(){if(!this.ensureInit())return;let e=this.ctx;{let t=e.createOscillator(),n=e.createBiquadFilter(),r=e.createGain();t.type=`sine`,t.frequency.value=40,n.type=`highpass`,n.frequency.value=30,r.gain.value=0,t.connect(n),n.connect(r),r.connect(this.musicGain),t.start(),this.drifterNode={osc:t,filter:n,gain:r}}for(let t of[264,267,270]){let n=e.createOscillator(),r=e.createBiquadFilter(),i=e.createGain();n.type=`sine`,n.frequency.value=t,r.type=`lowpass`,r.frequency.value=1500,r.Q.value=.7,i.gain.value=0,n.connect(r),r.connect(i),i.connect(this.musicGain),n.start(),this.resonantNodes.push({osc:n,filter:r,gain:i})}}updateEntityAudio(e,t){if(!this.ensureInit())return;let n=this.ctx.currentTime,r=Math.min(.2,e*.2),i=Math.min(.08,t*.08);this.drifterNode&&this.drifterNode.gain.gain.linearRampToValueAtTime(r,n+2);for(let e of this.resonantNodes)e.gain.gain.linearRampToValueAtTime(i/this.resonantNodes.length,n+1.5)}startThrusterHum(){if(!this.ensureInit())return;let e=this.ctx,t=e.createOscillator(),n=e.createBiquadFilter(),r=e.createGain();t.type=`sawtooth`,t.frequency.value=120,n.type=`lowpass`,n.frequency.value=300,n.Q.value=1,r.gain.value=0,t.connect(n),n.connect(r),r.connect(this.sfxGain),t.start(),this.thrusterNode={osc:t,filter:n,gain:r}}setThrusterIntensity(e){if(!this.ensureInit()||!this.thrusterNode)return;let t=this.ctx.currentTime,n=Math.min(.04,e*.04);this.thrusterNode.gain.gain.linearRampToValueAtTime(n,t+.5)}playDiscovery(){if(!this.ensureInit())return;let e=this.ctx,t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`sine`,n.frequency.setValueAtTime(440,t),n.frequency.linearRampToValueAtTime(880,t+.3),r.gain.setValueAtTime(.15,t),r.gain.exponentialRampToValueAtTime(.001,t+.8),n.connect(r),r.connect(this.sfxGain),n.start(t),n.stop(t+.85)}playResearchComplete(){if(!this.ensureInit())return;let e=this.ctx,t=e.currentTime;[523.25,659.25,783.99].forEach((n,r)=>{let i=e.createOscillator(),a=e.createGain();i.type=`sine`,i.frequency.value=n;let o=t+r*.15;a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(.12,o+.02),a.gain.exponentialRampToValueAtTime(.001,o+.7),i.connect(a),a.connect(this.sfxGain),i.start(o),i.stop(o+.75)})}playUIClick(){if(!this.ensureInit())return;let e=this.ctx,t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`square`,n.frequency.value=800,r.gain.setValueAtTime(.05,t),r.gain.exponentialRampToValueAtTime(.001,t+.06),n.connect(r),r.connect(this.sfxGain),n.start(t),n.stop(t+.07)}playMiningImpact(){if(!this.ensureInit())return;let e=this.ctx,t=e.currentTime,n=e.createBuffer(1,e.sampleRate*.1,e.sampleRate),r=n.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=(Math.random()*2-1)*.6;let i=e.createBufferSource();i.buffer=n;let a=e.createBiquadFilter();a.type=`bandpass`,a.frequency.value=300+Math.random()*200,a.Q.value=1.5;let o=e.createGain();o.gain.setValueAtTime(.08,t),o.gain.exponentialRampToValueAtTime(.001,t+.1),i.connect(a),a.connect(o),o.connect(this.sfxGain),i.start(t)}playLoreReveal(){if(!this.ensureInit())return;let e=this.ctx,t=e.currentTime;[2093,2637,3136].forEach((n,r)=>{let i=e.createOscillator(),a=e.createGain();i.type=`sine`,i.frequency.value=n;let o=t+r*.1;a.gain.setValueAtTime(.04,o),a.gain.exponentialRampToValueAtTime(.001,o+1.5),i.connect(a),a.connect(this.sfxGain),i.start(o),i.stop(o+1.6)})}toggleMute(){return this.settings.muted=!this.settings.muted,this.applyMasterGain(),this.saveSettings(),this.settings.muted}get muted(){return this.settings.muted}setMasterVolume(e){this.settings.masterVolume=Math.max(0,Math.min(1,e)),this.applyMasterGain(),this.saveSettings()}setSfxVolume(e){this.settings.sfxVolume=Math.max(0,Math.min(1,e)),this.sfxGain&&(this.sfxGain.gain.value=e),this.saveSettings()}setMusicVolume(e){this.settings.musicVolume=Math.max(0,Math.min(1,e)),this.musicGain&&(this.musicGain.gain.value=e),this.saveSettings()}getSettings(){return{...this.settings}}getAudioContext(){return this.ctx}getMusicGain(){return this.musicGain}getSfxGain(){return this.sfxGain}stopProceduralMusic(){this.musicScheduleTimer!==null&&(clearTimeout(this.musicScheduleTimer),this.musicScheduleTimer=null);let e=this.ctx;if(e){let t=e.currentTime+2;for(let e of this.musicNodes)e.gain.gain.linearRampToValueAtTime(0,t),setTimeout(()=>{try{e.osc.stop()}catch{}try{e.lfo.stop()}catch{}},2100)}this.musicNodes=[],this.musicRunning=!1}applyMasterGain(){this.masterGain&&(this.masterGain.gain.value=this.settings.muted?0:this.settings.masterVolume)}loadSettings(){try{let e=localStorage.getItem(jl);if(e){let t=JSON.parse(e);this.settings={...Ml,...t}}}catch{}}saveSettings(){try{localStorage.setItem(jl,JSON.stringify(this.settings))}catch{}}dispose(){this.musicScheduleTimer!==null&&(clearTimeout(this.musicScheduleTimer),this.musicScheduleTimer=null);for(let e of this.musicNodes)e.osc.stop(),e.lfo.stop();this.musicNodes=[],this.drifterNode?.osc.stop(),this.drifterNode=null;for(let e of this.resonantNodes)e.osc.stop();this.resonantNodes=[],this.thrusterNode?.osc.stop(),this.thrusterNode=null,this.ctx?.close(),this.ctx=null,this.initialized=!1}},Nl=`ComputerAccessData_HV.162.mp3,DataEntrySequence_SFXB.3645.mp3,DroneRumble_BW.44714.mp3,Electromagnetic down-wind.mp3,ElectromagneticForce wind up.mp3,ESM_Activate_Robotic_Sentry_Gun_Sci_Fi_Robotic_Glitch_Morph_Mechanism_Texture.mp3,ESM_Alien_Technology_Machine_Loading_Screen_Sci_fi_Beep_Chirp_Futuristic_Space_Texture_Loading_Screen.mp3,ESM_Button_Navigation_Select_Team_2_Game_Organic_Cartoon_Sci_Fi_User_Interface.mp3,ESM_Fast_Mechanical_Computer_Program_Particle_Sci_Fi_Abstract_Loading_Particle_Military.mp3,ESM_Futuristic_Touch_and_Drone_Sci_fi_Beep_Chirp_Futuristic_Space_Texture.mp3,ESM_Robot_Baby_Annoy_Chirp_Collect_Glitch_Robotic_Technology_Hi_Tech_Futuristic_Game_Hybrid_Tone_Sci_fi_Science_Fiction.mp3,ESM_Robot_Computer_Processor_Malfunction_Sci_Fi_Robotic_Glitch_Morph_Mechanism_Texture.mp3,ESM_Scifi_Loading_Screen_Loop_10_Sci_Fi_Glitch_Morph_Mechanism_Texture_Futuristic.mp3,ESM_Snow_in_the_Breeze_Sci_Fi_Robotic_Glitch_Morph_Mechanism_Texture.mp3,FactoryMechanical_S011SF.36.mp3,FF_HFFX_vocal_breath_ghost_demon_baby.mp3,KSHMR_sok5_fx_ambiance_sci_fi_war_time_B.mp3,LaserGun_BW.47459.mp3,MonitorTurnOn_SFXB.3762.mp3,RadioStatic_BW.45692.mp3,RadioTuner_S011SF.582.mp3,SciFiScanner_S08SF.443.mp3,SciFiSpaceship_S08SF.491.mp3,SciFiSpaceship_S08SF.508.mp3,SciFiSpaceship_S08SF.526.mp3,SonarPingSpace_S011SF.677.mp3,SpaceshipAlien_S011SF.688.mp3,SpaceshipPassBy_BW.46123.mp3,SpaceshipPassBy_S011SF.714.mp3,SPS_SS_elephant_baby_roar_creature.mp3,text appearing or data transfer.mp3,TFH_FX_Oneshot_Downlifter_Bird_Chirps_Low_Sweep.mp3,UFOPassBy_BW.46622.mp3,UMRU_fx_texture_baby_voice.mp3`.split(`,`),Pl={"ui.button_press":`ESM_Button_Navigation_Select_Team_2_Game_Organic_Cartoon_Sci_Fi_User_Interface.mp3`,"ui.panel_open":`MonitorTurnOn_SFXB.3762.mp3`,"ui.panel_close":`Electromagnetic down-wind.mp3`,"ui.tab_switch":`RadioTuner_S011SF.582.mp3`,"ui.text_appear":`text appearing or data transfer.mp3`,"ui.ship_highlight":`ESM_Futuristic_Touch_and_Drone_Sci_fi_Beep_Chirp_Futuristic_Space_Texture.mp3`,"game.resource_collect":`ESM_Robot_Baby_Annoy_Chirp_Collect_Glitch_Robotic_Technology_Hi_Tech_Futuristic_Game_Hybrid_Tone_Sci_fi_Science_Fiction.mp3`,"game.build_deploy":`ElectromagneticForce wind up.mp3`,"game.research_complete":`ComputerAccessData_HV.162.mp3`,"game.anomaly_detected":`SonarPingSpace_S011SF.677.mp3`,"game.robot_error":`ESM_Robot_Computer_Processor_Malfunction_Sci_Fi_Robotic_Glitch_Morph_Mechanism_Texture.mp3`,"game.combat_start":`KSHMR_sok5_fx_ambiance_sci_fi_war_time_B.mp3`,"game.robot_deploy":`ESM_Activate_Robotic_Sentry_Gun_Sci_Fi_Robotic_Glitch_Morph_Mechanism_Texture.mp3`,"game.mission_start":`ESM_Fast_Mechanical_Computer_Program_Particle_Sci_Fi_Abstract_Loading_Particle_Military.mp3`,"game.alien_encounter":`SPS_SS_elephant_baby_roar_creature.mp3`,"game.alien_ambient":`FF_HFFX_vocal_breath_ghost_demon_baby.mp3`,"game.alien_voice":`UMRU_fx_texture_baby_voice.mp3`,"game.ship_passby":`SpaceshipPassBy_BW.46123.mp3`,"game.scan_sweep":`SciFiScanner_S08SF.443.mp3`,"game.laser_fire":`LaserGun_BW.47459.mp3`},Fl=`soundEventMap`,Il=new Map,Ll=null;function Rl(){try{let e=localStorage.getItem(Fl);if(e){let t=JSON.parse(e);return{...Pl,...t}}}catch{}return{...Pl}}function zl(e){try{localStorage.setItem(Fl,JSON.stringify(e)),Ll=null}catch{}}function Bl(){try{localStorage.removeItem(Fl),Ll=null}catch{}return{...Pl}}async function Vl(e){let t=Il.get(e);if(t)return t;let n=R.getAudioContext();if(!n)return null;try{let t=`/assets/sounds/${encodeURIComponent(e)}`,r=await fetch(t);if(!r.ok)return null;let i=await r.arrayBuffer(),a=await n.decodeAudioData(i);return Il.set(e,a),a}catch{return null}}function z(e){Ll||=Rl();let t=Ll[e];t&&(async()=>{let e=R.getAudioContext();if(!e)return;let n=await Vl(t);if(!n)return;let r=R.getSfxGain();if(!r)return;let i=e.createBufferSource();i.buffer=n,i.connect(r),i.start()})()}function Hl(e){(async()=>{let t=R.getAudioContext();if(!t)return;let n=await Vl(e);if(!n)return;let r=R.getSfxGain();if(!r)return;let i=t.createBufferSource();i.buffer=n,i.connect(r),i.start()})()}function Ul(e,t,n){let r=document.createElement(`button`);return r.textContent=e,r.style.cssText=`
    width: 100%;
    padding: 12px;
    background: transparent;
    border: 1px solid ${t};
    color: ${t};
    font-family: 'Courier New', monospace;
    font-size: 14px;
    letter-spacing: 2px;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 4px;
  `,r.addEventListener(`click`,()=>{z(`ui.button_press`),n()}),r}function Wl(e,t){let n=document.createElement(`button`);return n.textContent=e,n.style.cssText=`
    padding: 4px 10px;
    background: transparent;
    border: 1px solid #4aff4a;
    color: #4aff4a;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    cursor: pointer;
    border-radius: 3px;
  `,n.addEventListener(`click`,t),n}function Gl(e){let t=document.createElement(`div`);t.style.cssText=`
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.9);
    color: #aaffaa;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    padding: 10px 20px;
    border: 1px solid #4aff4a;
    border-radius: 4px;
    z-index: 2000;
  `,t.textContent=e,document.body.appendChild(t),setTimeout(()=>t.remove(),2500)}function Kl(e,t){let n=document.createElement(`div`);n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-label`,`Asteroid Miner title screen`),n.setAttribute(`aria-modal`,`true`),n.style.cssText=`
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,2,8,0.98);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', monospace;
    color: #aaffaa;
  `;let r=document.createElement(`canvas`);r.style.cssText=`position:absolute;inset:0;width:100%;height:100%;opacity:0.4;`,r.width=window.innerWidth,r.height=window.innerHeight,n.appendChild(r);let i=r.getContext(`2d`);if(i){let e=Array.from({length:180},()=>({x:Math.random()*r.width,y:Math.random()*r.height,r:Math.random()*1.4+.3,speed:Math.random()*.15+.03})),t=0;function a(){if(i){i.clearRect(0,0,r.width,r.height);for(let t of e)i.beginPath(),i.arc(t.x,t.y,t.r,0,Math.PI*2),i.fillStyle=`rgba(180,200,255,0.8)`,i.fill(),t.y+=t.speed,t.y>r.height&&(t.y=0,t.x=Math.random()*r.width);t=requestAnimationFrame(a)}}a(),n.addEventListener(`remove`,()=>cancelAnimationFrame(t),{once:!0})}let a=document.createElement(`div`);a.style.cssText=`
    position: relative;
    background: rgba(0,8,0,0.92);
    border: 1px solid #4aff4a;
    border-radius: 10px;
    padding: 40px 48px;
    min-width: 400px;
    text-align: center;
    box-shadow: 0 0 60px rgba(74,255,74,0.08);
  `;let o=document.createElement(`div`);o.style.cssText=`
    font-size: 24px;
    color: #4aff4a;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 4px;
    text-shadow: 0 0 16px rgba(74,255,74,0.6);
  `,o.textContent=`★ CULTURES OF THE BELT ★`,a.appendChild(o);let s=document.createElement(`div`);s.style.cssText=`font-size:10px;color:#4a9a4a;letter-spacing:2px;margin-bottom:8px;text-transform:uppercase;`,s.textContent=`Hard Sci-Fi 4X Mining Sim`,a.appendChild(s);let c=document.createElement(`div`);c.style.cssText=`font-size:9px;color:#2a5a3a;letter-spacing:1px;margin-bottom:28px;font-style:italic;`,c.textContent=`Belt Sector 7  ·  2387 CE  ·  ARIA-CORE ONLINE`,a.appendChild(c);let l=document.createElement(`div`);l.style.cssText=`display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:16px;`;let u=document.createElement(`label`);u.style.cssText=`font-size:10px;color:#556655;letter-spacing:1px;`,u.textContent=`SEED`,l.appendChild(u);let d=document.createElement(`input`);d.type=`text`,d.placeholder=`Random`,d.maxLength=9,d.style.cssText=`
    width: 100px;
    padding: 4px 8px;
    background: rgba(0,20,0,0.8);
    border: 1px solid #2a5a2a;
    color: #aaffaa;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    border-radius: 3px;
    text-align: center;
    outline: none;
  `,d.addEventListener(`focus`,()=>{d.style.borderColor=`#4aff4a`}),d.addEventListener(`blur`,()=>{d.style.borderColor=`#2a5a2a`}),l.appendChild(d),a.appendChild(l);function f(){let e=d.value.trim();if(!e)return;let t=parseInt(e,10);return isFinite(t)?t:void 0}let p=`normal`,m=[`easy`,`normal`,`hard`],h=document.createElement(`div`);h.style.cssText=`display:flex;align-items:center;justify-content:center;gap:6px;margin-bottom:20px;`;let g=document.createElement(`span`);g.style.cssText=`font-size:10px;color:#556655;letter-spacing:1px;margin-right:4px;`,g.textContent=`DIFFICULTY`,h.appendChild(g);let _=[];for(let e of m){let t=document.createElement(`button`);t.textContent=Al[e],t.dataset.mode=e,t.style.cssText=`
      padding: 4px 14px;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      border-radius: 3px;
      cursor: pointer;
      transition: background 0.15s, border-color 0.15s;
    `,_.push(t),t.addEventListener(`click`,()=>{p=e,v()}),h.appendChild(t)}function v(){for(let e of _){let t=e.dataset.mode===p;e.style.background=t?`rgba(74,255,74,0.2)`:`rgba(0,20,0,0.6)`,e.style.color=t?`#4aff4a`:`#556655`,e.style.border=t?`1px solid #4aff4a`:`1px solid #2a4a2a`,e.style.fontWeight=t?`bold`:`normal`}}v(),a.appendChild(h);let y=Ul(`NEW GAME`,`#4aff4a`,()=>{n.dispatchEvent(new Event(`remove`)),n.remove(),e(f(),p)});if(y.style.marginBottom=`10px`,a.appendChild(y),t){let e=Ul(`SETTINGS`,`#8090c0`,()=>{n.dispatchEvent(new Event(`remove`)),n.remove(),t()});e.style.marginBottom=`0`,a.appendChild(e)}let b=document.createElement(`div`);b.style.cssText=`font-size:9px;color:#2a4a2a;margin-top:24px;`,b.textContent=`v0.1.0-alpha`,a.appendChild(b),n.appendChild(a),document.body.appendChild(n)}function ql(e,t){if(!kl()){t();return}let n=document.createElement(`div`);n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-label`,`Load saved game`),n.setAttribute(`aria-modal`,`true`),n.style.cssText=`
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,5,0,0.97);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', monospace;
    color: #aaffaa;
  `;let r=document.createElement(`div`);r.style.cssText=`
    background: rgba(0,10,0,0.95);
    border: 1px solid #4aff4a;
    border-radius: 8px;
    padding: 32px;
    min-width: 420px;
  `;let i=document.createElement(`div`);i.style.cssText=`text-align:center;margin-bottom:20px;`;let a=document.createElement(`div`);a.style.cssText=`
    font-family: 'Courier New', monospace;
    font-size: 11px;
    color: #4aff4a;
    letter-spacing: 0.05em;
    line-height: 1.2;
    white-space: pre;
    text-shadow: 0 0 8px rgba(74,255,74,0.5);
  `,a.textContent=[`★ CULTURES OF THE BELT ★`].join(`
`),i.appendChild(a);let o=document.createElement(`div`);o.style.cssText=`font-size:10px;color:#3a7a3a;letter-spacing:2px;margin-top:6px;text-transform:uppercase;`,o.textContent=`Hard Sci-Fi 4X Mining Sim`,i.appendChild(o);let s=document.createElement(`div`);s.style.cssText=`font-size:9px;color:#2a4a2a;margin-top:3px;`,s.textContent=`v0.1.0-alpha`,i.appendChild(s),r.appendChild(i);let c=document.createElement(`div`);c.style.cssText=`font-size: 12px; color: #888; margin-bottom: 20px; text-align: center;`,c.textContent=`Continue a previous game?`,r.appendChild(c);let l=Dl();for(let t of l){let i=document.createElement(`div`);i.style.cssText=`
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #1a4a1a;
      border-radius: 4px;
      cursor: pointer;
    `;let a=new Date(t.timestamp).toLocaleString(),o=document.createElement(`div`);o.style.cssText=`flex: 1; font-size: 12px;`,o.innerHTML=w`<div style="color:#4aff4a">${t.label}</div><div style="color:#888;font-size:11px">${a}</div><div style="color:#aaa;font-size:11px">Tick ${t.tick} · ${t.robotCount} robots · ${t.asteroidCount} asteroids</div>`,i.appendChild(o);let s=Wl(`LOAD`,()=>{let r=bl(t.slot);if(!r.data){Gl(`Save corrupt: ${r.parseError?`JSON parse error — file may be truncated`:`Core save fields missing — cannot recover`}`);return}r.recovered.length>0&&(console.warn(`[saveLoad] Partial recovery for slot ${t.slot}: defaulted ${r.recovered.join(`, `)}`),Gl(`Warning: save partially recovered (missing: ${r.recovered.join(`, `)})`)),n.remove(),e(r.data)});i.appendChild(s),r.appendChild(i)}let u=document.createElement(`hr`);u.style.cssText=`border-color: #1a4a1a; margin: 20px 0;`,r.appendChild(u);let d=Ul(`NEW GAME`,`#888`,()=>{n.remove(),t()});r.appendChild(d),n.appendChild(r),document.body.appendChild(n)}var Jl=null,Yl=!1,Xl=null,Zl=null,Ql=null,$l=null,eu=null,tu=null;function nu(e,t,n,r,i,a){Xl=e,Zl=t,Ql=n,$l=r??null,eu=i??null,tu=a??null,Jl=document.createElement(`div`),Jl.id=`pause-menu`,Jl.setAttribute(`role`,`dialog`),Jl.setAttribute(`aria-label`,`Pause menu`),Jl.setAttribute(`aria-modal`,`true`),Jl.style.cssText=`
    display: flex;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.75);
    z-index: 1000;
    font-family: 'Courier New', monospace;
    color: #aaffaa;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease-out;
  `,document.body.appendChild(Jl),cu()}function ru(){return Yl}function iu(){Jl&&(Yl=!0,Jl.style.pointerEvents=`all`,requestAnimationFrame(()=>{Jl&&(Jl.style.opacity=`1`)}),cu())}function au(){Jl&&(Yl=!1,Jl.style.opacity=`0`,Jl.style.pointerEvents=`none`)}function ou(e,t){let n=Cl(e,t);n.ok?(Gl(`Saved to ${e===`auto`?`auto-save`:`Slot ${Number(e)+1}`}`),cu()):n.quotaExceeded?su():Gl(`Save failed — data could not be written`)}function su(){let e=wl(),t=document.createElement(`div`);t.style.cssText=`
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(30,10,0,0.97);
    color: #ffaa44;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    padding: 12px 18px;
    border: 1px solid #ff6600;
    border-radius: 4px;
    z-index: 2000;
    max-width: 360px;
    line-height: 1.5;
  `;let n=document.createElement(`div`);n.textContent=`Save failed — storage full (~${e} KB used). Delete a save slot to free space.`,t.appendChild(n);let r=document.createElement(`button`);r.textContent=`Delete oldest save`,r.style.cssText=`
    display: block;
    margin-top: 8px;
    padding: 4px 12px;
    background: transparent;
    border: 1px solid #ff6600;
    color: #ffaa44;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    cursor: pointer;
    border-radius: 3px;
  `,r.addEventListener(`click`,()=>{let e=Tl();t.remove(),e!==null&&(Gl(`Deleted ${e===`auto`?`auto-save`:`Slot ${Number(e)+1}`} — retry your save`),cu())}),t.appendChild(r),document.body.appendChild(t),setTimeout(()=>t.remove(),6e3)}function cu(){if(!Jl)return;Jl.innerHTML=``;let e=document.createElement(`div`);e.style.cssText=`
    background: rgba(0, 10, 0, 0.95);
    border: 1px solid #4aff4a;
    border-radius: 8px;
    padding: 32px;
    min-width: 420px;
    max-width: 500px;
  `;let t=document.createElement(`h2`);t.style.cssText=`margin: 0 0 8px; font-size: 20px; color: #4aff4a; text-align: center; letter-spacing: 3px;`,t.textContent=`— PAUSED —`,e.appendChild(t);let n=document.createElement(`div`);n.style.cssText=`font-size: 10px; color: #556655; text-align: center; margin-bottom: 20px; letter-spacing: 1px;`;let r=[];if(eu&&r.push(`Seed: ${eu()}`),tu){let e=tu();r.push(`${Al[e]} Mode`)}r.length&&(n.textContent=r.join(`  ·  `),e.appendChild(n));let i=document.createElement(`div`);i.style.cssText=`display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px;`;let a=document.createElement(`div`);a.style.cssText=`font-size: 12px; color: #4aff4a; letter-spacing: 1px;`,a.textContent=`SAVE SLOTS`,i.appendChild(a);let o=document.createElement(`div`);o.style.cssText=`font-size: 10px; color: #556655;`,o.textContent=`storage: ~${wl()} KB`,i.appendChild(o),e.appendChild(i);let s=Dl(),c=new Map(s.map(e=>[e.slot,e]));for(let t of[0,1,2])e.appendChild(lu(t,c.get(t)??null));let l=document.createElement(`hr`);l.style.cssText=`border-color: #1a4a1a; margin: 24px 0;`,e.appendChild(l),e.appendChild(du());let u=document.createElement(`hr`);if(u.style.cssText=`border-color: #1a4a1a; margin: 16px 0 20px;`,e.appendChild(u),$l){let t=Ul(`SETTINGS`,`#8090c0`,()=>{au(),$l?.()});t.style.marginBottom=`8px`,e.appendChild(t)}let d=Ul(`RESUME`,`#4aff4a`,()=>{au(),Ql?.()});e.appendChild(d),Jl.appendChild(e)}function lu(e,t){let n=document.createElement(`div`);n.style.cssText=`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #1a4a1a;
    border-radius: 4px;
  `;let r=document.createElement(`div`);if(r.style.cssText=`flex: 1; font-size: 12px;`,t){let n=new Date(t.timestamp).toLocaleString();r.innerHTML=w`<div style="color:#4aff4a">Slot ${Number(e)+1}</div><div style="color:#888;font-size:11px">${n}</div><div style="color:#aaa;font-size:11px">Tick ${t.tick} · ${t.robotCount} robots</div>`}else r.innerHTML=w`<div style="color:#4aff4a">Slot ${Number(e)+1}</div><div style="color:#444;font-size:11px">Empty</div>`;n.appendChild(r);let i=Wl(`SAVE`,()=>{t&&!confirm(`Overwrite Slot ${Number(e)+1}?`)||Xl?.(e)});if(i.setAttribute(`aria-label`,`Save to slot ${Number(e)+1}`),n.appendChild(i),t){let t=Wl(`LOAD`,()=>{let t=bl(e);if(!t.data){Gl(`Save corrupt: ${t.parseError?`JSON parse error — file may be truncated`:`Core save fields missing — cannot recover`}`);return}t.recovered.length>0&&(console.warn(`[saveLoad] Partial recovery for slot ${e}: defaulted ${t.recovered.join(`, `)}`),Gl(`Warning: save partially recovered (missing: ${t.recovered.join(`, `)})`)),confirm(`Load Slot ${Number(e)+1}? Current progress will be lost.`)&&(au(),Zl?.(t.data))});t.setAttribute(`aria-label`,`Load save from slot ${Number(e)+1}`),n.appendChild(t);let r=Wl(`DEL`,()=>{confirm(`Delete Slot ${Number(e)+1}?`)&&(Ol(e),cu())});r.setAttribute(`aria-label`,`Delete save slot ${Number(e)+1}`),r.style.color=`#ff4444`,r.style.borderColor=`#ff4444`,n.appendChild(r)}return n}var uu=[{group:`CAMERA`,bindings:[[`W/A/S/D`,`Pan`],[`Scroll`,`Zoom`],[`Home`,`Snap to base`],[`Click robot`,`Follow`]]},{group:`PANELS`,bindings:[[`D`,`Dashboard`],[`T`,`Tech tree`],[`J`,`Codex / Journal`],[`F`,`Factions`],[`G`,`Megastructure`],[`H`,`Controls help`]]},{group:`ACTIONS`,bindings:[[`Right-click`,`Assign robot`],[`Ctrl+S`,`Quick save`],[`Esc`,`Pause / resume`]]}];function du(){let e=document.createElement(`div`);e.style.cssText=`display:flex;gap:16px;`;for(let{group:t,bindings:n}of uu){let r=document.createElement(`div`);r.style.cssText=`flex:1;`;let i=document.createElement(`div`);i.style.cssText=`font-size:10px;color:#4aff4a;letter-spacing:1px;margin-bottom:6px;`,i.textContent=t,r.appendChild(i);for(let[e,t]of n){let n=document.createElement(`div`);n.style.cssText=`display:flex;justify-content:space-between;gap:8px;margin-bottom:3px;`;let i=document.createElement(`span`);i.style.cssText=`font-size:10px;color:#88cc88;white-space:nowrap;`,i.textContent=e;let a=document.createElement(`span`);a.style.cssText=`font-size:10px;color:#556655;white-space:nowrap;text-align:right;`,a.textContent=t,n.appendChild(i),n.appendChild(a),r.appendChild(n)}e.appendChild(r)}return e}var fu={iron:`Iron`,nickel:`Nickel`,cobalt:`Cobalt`,platinum:`Platinum`,ice:`Ice`,carbon:`Carbon`,silicate:`Silicate`};function pu(e){return e>=100?{label:`Legend`,color:`#fbbf24`}:e>=50?{label:`Elder`,color:`#a855f7`}:e>=10?{label:`Veteran`,color:`#22d3ee`}:{label:`Rookie`,color:`#94a3b8`}}function mu(e){let t=[],n=e.currentTick-e.spawnTick;return e.tasksCompleted>=10&&e.distanceFromBase<1e3&&t.push({label:`Homebody`,color:`#4ade80`}),e.distanceFromBase>=2e3&&e.tasksCompleted<20&&t.push({label:`Wanderer`,color:`#f59e0b`}),e.anomaliesStudied>=2&&t.push({label:`Curious`,color:`#a855f7`}),e.asteroidsNamed>=2&&t.push({label:`Cartographer`,color:`#3b82f6`}),n>=3e4&&t.push({label:`Old Timer`,color:`#06b6d4`}),e.distanceFromBase>=3e3&&!t.some(e=>e.label===`Wanderer`)&&t.push({label:`Frontier`,color:`#ef4444`}),t.slice(0,2)}function hu(e){let t=[{label:`Autonomy`,color:`#22c55e`,val:e.tasksCompleted},{label:`Isolation`,color:`#f59e0b`,val:e.distanceFromBase/100},{label:`Xenoaware`,color:`#a855f7`,val:e.anomaliesStudied*10},{label:`Cohesion`,color:`#06b6d4`,val:e.asteroidsNamed*5}];return t.sort((e,t)=>t.val-e.val),{label:t[0].label,color:t[0].color}}var B=null,gu=-1,_u=null,vu=null;function yu(e){_u=e}function bu(e,t,n){z(`ui.panel_open`),gu=e,B||wu(),Tu(t,n),B.style.display=`block`,Eu(),_u?.onRequestDetail(e)}function xu(){B&&(B.style.display=`none`),gu=-1}function Su(e){e.robotEid!==gu||!B||Du(e)}function Cu(e){if(vu=e,B&&B.style.display!==`none`){let e=B.querySelector(`[data-action="follow"]`);e&&(e.textContent=vu===gu?`📷 Unfollow`:`📷 Follow`)}}function wu(){B=document.createElement(`div`),B.id=`ship-panel`,B.style.cssText=`
    position: fixed;
    display: none;
    background: rgba(8,12,24,0.97);
    border: 1px solid rgba(80,120,220,0.4);
    border-radius: 8px;
    padding: 12px 14px;
    min-width: 220px;
    max-width: 260px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    color: #c0d0f0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.7);
    z-index: 300;
    max-height: 80vh;
    overflow-y: auto;
  `,document.body.appendChild(B),document.addEventListener(`click`,e=>{B&&B.style.display!==`none`&&(B.contains(e.target)||(xu(),_u?.onClose()))})}function Tu(e,t){if(!B)return;let n=window.innerWidth,r=window.innerHeight,i=e+8,a=t-400/2;i+240>n-8&&(i=e-240-8),a<8&&(a=8),a+400>r-8&&(a=r-400-8),B.style.left=`${i}px`,B.style.top=`${a}px`}function Eu(){if(!B)return;B.innerHTML=``;let e=document.createElement(`div`);e.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid rgba(80,120,220,0.2);`;let t=document.createElement(`span`);t.style.cssText=`color:#7090e0;font-size:12px;font-weight:bold;`,t.textContent=`Ship #${gu}`,t.dataset.headerTitle=`1`,e.appendChild(t);let n=document.createElement(`button`);n.textContent=`×`,n.setAttribute(`aria-label`,`Close ship panel`),n.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:16px;padding:0;line-height:1;`,n.onclick=()=>{z(`ui.panel_close`),xu(),_u?.onClose()},e.appendChild(n),B.appendChild(e);let r=document.createElement(`div`);r.style.cssText=`color:#4a5568;text-align:center;padding:16px 0;`,r.textContent=`Loading...`,B.appendChild(r),B.appendChild(Ou())}function Du(e){if(!B)return;let t=B.children[0],n=B.children[B.children.length-1];B.innerHTML=``,B.appendChild(t);let r=t.querySelector(`[data-header-title]`);r&&(r.textContent=e.name?`${e.name}`:`Ship #${e.robotEid}`);let i=document.createElement(`div`);i.style.cssText=`margin-bottom:10px;`;let a=o[e.robotType]??`Type ${e.robotType}`,s=ee[e.state]??`State ${e.state}`,c=Math.round(e.energyPct*100),l=[[`Type`,a],[`Status`,s],[`Energy`,`${c}%`],[`Task`,e.taskId>=0?`#${e.taskId}`:`None`]];for(let[e,t]of l){let n=document.createElement(`div`);n.style.cssText=`display:flex;justify-content:space-between;margin-bottom:3px;`;let r=document.createElement(`span`);r.style.cssText=`color:#5060a0;`,r.textContent=e;let a=document.createElement(`span`);a.style.cssText=ju(e,t),a.textContent=t,n.appendChild(r),n.appendChild(a),i.appendChild(n)}let u=document.createElement(`div`);u.style.cssText=`height:3px;background:rgba(255,255,255,0.1);border-radius:2px;margin:4px 0;`;let d=document.createElement(`div`);d.style.cssText=`height:100%;width:${c}%;background:${c>50?`#22d3ee`:c>20?`#f59e0b`:`#ef4444`};border-radius:2px;transition:width 0.3s;`,u.appendChild(d),i.appendChild(u),B.appendChild(i);let f=mu(e);if(f.length>0){let e=document.createElement(`div`);e.style.cssText=`display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px;`;for(let t of f){let n=document.createElement(`span`);n.style.cssText=`
        font-size:9px;padding:2px 6px;border-radius:3px;
        background:${t.color}18;border:1px solid ${t.color}40;color:${t.color};
      `,n.textContent=t.label,e.appendChild(n)}B.appendChild(e)}let p=document.createElement(`div`);p.style.cssText=`margin-bottom:10px;border-top:1px solid rgba(80,120,220,0.15);padding-top:6px;`;let m=document.createElement(`div`);m.style.cssText=`color:#5060a0;font-size:10px;margin-bottom:4px;`,m.textContent=`BIOGRAPHY`,p.appendChild(m);let h=e.currentTick-e.spawnTick,g=Math.floor(h/3600),_=g>0?`Active ${g} day${g===1?``:`s`}`:`Just deployed`,v=pu(e.tasksCompleted),y=[[`Age`,_,`color:#a0c0ff;`],[`Rank`,`${v.label} (${e.tasksCompleted} tasks)`,`color:${v.color};`],[`Distance`,`${Math.round(e.distanceFromBase)} units`,`color:#a0c0ff;`]];for(let[e,t,n]of y){let r=document.createElement(`div`);r.style.cssText=`display:flex;justify-content:space-between;margin-bottom:3px;`;let i=document.createElement(`span`);i.style.cssText=`color:#4a5568;`,i.textContent=e;let a=document.createElement(`span`);a.style.cssText=n,a.textContent=t,r.appendChild(i),r.appendChild(a),p.appendChild(r)}let b=[];if(e.anomaliesStudied>0&&b.push(`${e.anomaliesStudied} anomal${e.anomaliesStudied===1?`y`:`ies`}`),e.asteroidsNamed>0&&b.push(`${e.asteroidsNamed} named`),e.tasksCompleted>=50&&b.push(`50+ tasks`),h>=6e4&&b.push(`survivor`),b.length>0){let e=document.createElement(`div`);e.style.cssText=`display:flex;justify-content:space-between;margin-bottom:3px;`;let t=document.createElement(`span`);t.style.cssText=`color:#4a5568;`,t.textContent=`Feats`;let n=document.createElement(`span`);n.style.cssText=`color:#fbbf24;font-size:10px;`,n.textContent=b.join(`, `),e.appendChild(t),e.appendChild(n),p.appendChild(e)}let x=hu(e),S=document.createElement(`div`);S.style.cssText=`display:flex;justify-content:space-between;margin-bottom:3px;`;let C=document.createElement(`span`);C.style.cssText=`color:#4a5568;`,C.textContent=`Alignment`;let w=document.createElement(`span`);if(w.style.cssText=`color:${x.color};`,w.textContent=x.label,S.appendChild(C),S.appendChild(w),p.appendChild(S),B.appendChild(p),e.inventoryCapacity>0){let t=document.createElement(`div`);t.style.cssText=`margin-bottom:10px;border-top:1px solid rgba(80,120,220,0.15);padding-top:6px;`;let n=document.createElement(`div`);n.style.cssText=`color:#5060a0;font-size:10px;margin-bottom:4px;`,n.textContent=`CARGO  ${Math.round(e.inventoryUsed)}/${Math.round(e.inventoryCapacity)}`,t.appendChild(n);for(let[n,r]of Object.entries(fu)){let i=e.inventory[n]??0;if(i<.01)continue;let a=document.createElement(`div`);a.style.cssText=`display:flex;justify-content:space-between;margin-bottom:2px;`;let o=document.createElement(`span`);o.style.cssText=`color:#4a5568;`,o.textContent=r;let s=document.createElement(`span`);s.style.cssText=`color:#a0c0ff;`,s.textContent=i.toFixed(1),a.appendChild(o),a.appendChild(s),t.appendChild(a)}if(e.inventoryUsed<.01){let e=document.createElement(`div`);e.style.cssText=`color:#2d3748;font-size:10px;`,e.textContent=`Empty`,t.appendChild(e)}B.appendChild(t)}B.appendChild(n)}function Ou(){let e=document.createElement(`div`);e.style.cssText=`display:flex;flex-direction:column;gap:5px;border-top:1px solid rgba(80,120,220,0.15);padding-top:8px;margin-top:2px;`;let t=ku(vu===gu?`📷 Unfollow`:`📷 Follow`,`follow`,`#22d3ee`,()=>{z(`ui.button_press`),_u?.onToggleFollow(gu)});e.appendChild(t);let n=ku(`⛏ Mine`,`mine_target`,`#f59e0b`,()=>{z(`ui.button_press`),_u?.onMineTarget(gu),xu()});e.appendChild(n);let r=ku(`🔭 Explore`,`explore_target`,`#a855f7`,()=>{z(`ui.button_press`),_u?.onExploreTarget(gu),xu()});e.appendChild(r);let i=ku(`⬅ Return to Base`,`return_to_base`,`#4ade80`,()=>{z(`ui.button_press`),_u?.onOrder(gu,`return_to_base`),Au(`Returning`)});e.appendChild(i);let a=ku(`⏹ Stand Down`,`idle`,`#94a3b8`,()=>{z(`ui.button_press`),_u?.onOrder(gu,`idle`),Au(`Idle`)});return e.appendChild(a),e}function ku(e,t,n,r){let i=document.createElement(`button`);return i.textContent=e,i.dataset.action=t,i.style.cssText=`
    padding: 5px 10px;
    background: rgba(30,40,70,0.5);
    border: 1px solid ${n}40;
    border-radius: 4px;
    color: ${n};
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    text-align: left;
    transition: background 0.1s;
  `,i.onmouseenter=()=>{i.style.background=`rgba(50,60,100,0.6)`},i.onmouseleave=()=>{i.style.background=`rgba(30,40,70,0.5)`},i.onclick=r,i}function Au(e){if(!B)return;let t=B.querySelectorAll(`span`);for(let n of t)if(n.previousElementSibling?.textContent===`Status`){n.textContent=e;break}}function ju(e,t){if(e===`Energy`){let e=parseInt(t,10);return e>50?`color:#22d3ee;`:e>20?`color:#f59e0b;`:`color:#ef4444;`}return e===`Status`?t===`Mining`||t===`Hauling`?`color:#4ade80;`:t===`Broken`?`color:#ef4444;`:t===`Charging`?`color:#f59e0b;`:`color:#a0c0ff;`:`color:#a0c0ff;`}var Mu=new Set;function Nu(e,t,n=!1){if(!(n&&Mu.has(e))){n&&Mu.add(e),Sn({category:`analytics`,message:e,level:`info`});try{window.umami?.track(e,t)}catch{}}}var Pu=0;function Fu(){Pu=Date.now(),Nu(`game_start`)}function Iu(){Pu>0&&Nu(`session_end`,{duration_sec:Math.round((Date.now()-Pu)/1e3)})}function Lu(){Nu(`tutorial_complete`,void 0,!0)}function Ru(){Nu(`first_mine`,void 0,!0)}function zu(){Nu(`first_faction_contact`,void 0,!0)}function Bu(){Nu(`aria_usage`)}function Vu(){Nu(`dyson_complete`,void 0,!0)}function Hu(){Mu.clear()}var Uu=`cultures_of_the_belt_tutorial`,Wu=`cultures_of_the_belt_tutorial_done`,Gu=[{id:`mission`,title:`1 / 9 — Mission Briefing`,body:`You command an asteroid mining operation. Mine ore, advance your tech, and build a Dyson Sphere — your robots will develop cultural traits that shape your colony along the way.`,hint:`Mine → Research → Build. Click Next › to continue.`},{id:`camera`,title:`2 / 9 — Camera Controls`,body:`Pan with WASD or arrow keys. Zoom with the scroll wheel. Your fleet is already at work near the base.`,hint:`Scroll out to see the full asteroid belt.`},{id:`watch`,title:`3 / 9 — Your Fleet`,body:`Scouts explore, Miners extract raw ore, Haulers return it to base. Aim for roughly 1 Hauler per 3 Miners so ore doesn't pile up.`,hint:`Watch the bottom-right minimap — your fleet is already working.`,autoAdvance:!0},{id:`resources`,title:`4 / 9 — Resources`,body:`Watch the resource counters in the top-left — they update live as ore is collected. Fe (iron), C (carbon), Si (silicon), and H₂O (water). Press D for the full Dashboard.`,hint:`Press D to advance this step.`},{id:`research`,title:`5 / 9 — Research`,body:`Press T to open the Research Tree and start your first research. Tech unlocks are the key to winning.`,hint:`Press T to advance this step.`},{id:`buildings`,title:`6 / 9 — Base Buildings`,body:`Research unlocks three base buildings: Robot Factory (raises fleet cap), Defense Turret (auto-fires at threats), Comm Relay (extends sensor range).`,hint:`Press V to open the Buildings panel once unlocked.`},{id:`factory`,title:`7 / 9 — Expand Your Fleet`,body:`Press C to open the Construction Bay and queue your first robot build. Raw ore works early — refined materials unlock better options later.`,hint:`Press C to open the Construction Bay and advance this step.`},{id:`anomaly`,title:`8 / 9 — Anomalies`,body:`Some asteroids contain anomalies — unusual readings that defy standard geological models. Scout robots discover them automatically.`,hint:`Anomalies appear as pulsing purple dots. Open the Codex (J) to study them.`},{id:`aria`,title:`9 / 9 — ARIA`,body:`ARIA is your AI advisor. She analyzes your operation and gives strategic guidance. Click the ARIA panel to ask her anything.`,hint:`ARIA responds to anomaly discoveries automatically.`}],Ku=0,qu=null,Ju=!1,Yu=null,Xu=new Map;function Zu(){return!localStorage.getItem(Wu)}function Qu(){try{let e=localStorage.getItem(Uu);e&&(Ku=Math.min(parseInt(e,10),Gu.length-1))}catch{Ku=0}rd(),Ju=!0,id(Ku)}function $u(e){Ju&&Gu[Ku]?.id===e&&td()}function ed(e,t){let n=Xu.get(e)??[];n.push(t),Xu.set(e,n)}function td(){if(Yu&&=(clearTimeout(Yu),null),Ku++,Ku>=Gu.length){nd();return}try{localStorage.setItem(Uu,String(Ku))}catch{}id(Ku)}function nd(){Ju=!1,Lr(!1),Lu();try{localStorage.setItem(Wu,`1`)}catch{}qu&&=(qu.style.opacity=`0`,qu.style.transition=`opacity 0.4s`,setTimeout(()=>qu?.remove(),400),null)}function rd(){qu=document.createElement(`div`),qu.style.cssText=`
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(10,14,28,0.96);
    border: 1px solid rgba(100,140,255,0.35);
    border-radius: 8px;
    padding: 16px 20px;
    width: 380px;
    font-family: 'Courier New', monospace;
    color: #c0d0f0;
    z-index: 85;
    box-shadow: 0 4px 24px rgba(0,0,0,0.6);
    transition: opacity 0.3s;
  `,document.body.appendChild(qu)}function id(e){if(!qu)return;let t=Gu[e];if(!t)return;Lr(t.id===`resources`);let n=Xu.get(t.id);n&&n.forEach(e=>e()),qu.innerHTML=``;let r=document.createElement(`div`);r.style.cssText=`display:flex;gap:4px;margin-bottom:10px;`;for(let t=0;t<Gu.length;t++){let n=document.createElement(`div`);n.style.cssText=`
      width: 6px; height: 6px; border-radius: 50%;
      background: ${t<e?`#4060c0`:t===e?`#7090ff`:`#2a3050`};
    `,r.appendChild(n)}qu.appendChild(r);let i=document.createElement(`div`);i.style.cssText=`font-size:12px;color:#7090e0;margin-bottom:6px;font-weight:bold;`,i.textContent=t.title,qu.appendChild(i);let a=document.createElement(`div`);if(a.style.cssText=`font-size:12px;color:#a0b0d0;line-height:1.5;margin-bottom:8px;`,a.textContent=t.body,qu.appendChild(a),t.hint){let e=document.createElement(`div`);e.style.cssText=`font-size:10px;color:#5060a0;margin-bottom:10px;`,e.textContent=`💡 ${t.hint}`,qu.appendChild(e)}let o=document.createElement(`div`);o.style.cssText=`display:flex;justify-content:space-between;gap:8px;`;let s=document.createElement(`button`);s.textContent=`Skip tutorial`,s.style.cssText=`
    padding: 4px 12px;
    background: none;
    border: 1px solid rgba(80,90,130,0.4);
    border-radius: 4px;
    color: #4a5568;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-size: 11px;
  `,s.onclick=()=>nd(),o.appendChild(s);let c=document.createElement(`button`);c.textContent=e<Gu.length-1?`Next ›`:`Finish ✓`,c.style.cssText=`
    padding: 4px 16px;
    background: rgba(50,70,150,0.6);
    border: 1px solid rgba(100,140,255,0.3);
    border-radius: 4px;
    color: #a0c0ff;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-size: 11px;
  `,c.onclick=()=>td(),o.appendChild(c),qu.appendChild(o),t.autoAdvance&&(Yu=setTimeout(()=>{Yu=null,td()},8e3))}var ad=[{label:`Initializing renderer`,pct:20},{label:`Generating asteroid field`,pct:60},{label:`Starting simulation`,pct:90}],od=null,sd=null,cd=null;function ld(){cd||=document.getElementById(`loading-screen`),od||=document.getElementById(`loading-stage`),sd||=document.getElementById(`loading-bar-fill`)}function ud(e){ld();let t=ad[e];od&&(od.textContent=t.label),sd&&(sd.style.width=`${t.pct}%`)}function dd(){ld(),cd&&(sd&&(sd.style.width=`100%`),setTimeout(()=>{cd&&(cd.classList.add(`fade-out`),cd.addEventListener(`transitionend`,()=>cd?.remove(),{once:!0}))},200))}var fd=typeof window<`u`&&(`ontouchstart`in window||navigator.maxTouchPoints>0),pd=`ast_touch_hints_shown`;function md(){if(!fd||sessionStorage.getItem(pd))return;sessionStorage.setItem(pd,`1`);let e=document.createElement(`div`);e.style.cssText=`
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 8, 20, 0.85);
    border: 1px solid rgba(34, 211, 238, 0.4);
    box-shadow: 0 0 16px rgba(34, 211, 238, 0.15);
    color: rgba(34, 211, 238, 0.9);
    font-family: 'Courier New', monospace;
    font-size: 12px;
    line-height: 1.8;
    padding: 12px 20px;
    border-radius: 4px;
    z-index: 200;
    pointer-events: auto;
    text-align: center;
    opacity: 0;
    transition: opacity 0.4s ease;
    white-space: nowrap;
  `,e.innerHTML=`
    <div style="font-size:10px;opacity:0.5;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Gesture Controls</div>
    <div>Drag to pan &nbsp;·&nbsp; Pinch to zoom &nbsp;·&nbsp; Tap robot to follow</div>
  `,document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity=`1`});let t=()=>{e.style.opacity=`0`,setTimeout(()=>e.remove(),400)};e.addEventListener(`touchend`,t,{once:!0}),setTimeout(t,4e3)}var hd=!1;function gd(){if(fd&&(document.body.classList.add(`touch-device`),!hd)){hd=!0;try{let e=document.createElement(`style`);e.textContent=`
    .touch-device button,
    .touch-device [role="button"] {
      min-height: 44px;
      min-width: 44px;
    }
    .touch-device .mouse-hint {
      display: none !important;
    }
  `,document.head.appendChild(e)}catch{}}}function _d(e){let t=e|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var vd={DRIFTER:1,RESONANT:2,ALIEN_FLEET:3};_d(195939070);var yd=3e4,bd=Math.PI/180,xd={Mercury:{a:.3871,e:.20563,L0:252.251,Ldot:149472.675,wbar0:77.456,wbarDot:.16},Venus:{a:.72333,e:.00677,L0:181.98,Ldot:58517.816,wbar0:131.564,wbarDot:.009},Earth:{a:1,e:.01671,L0:100.464,Ldot:35999.372,wbar0:102.937,wbarDot:.32},Mars:{a:1.52368,e:.0934,L0:355.453,Ldot:19140.299,wbar0:336.06,wbarDot:.445},Jupiter:{a:5.2026,e:.04849,L0:34.351,Ldot:3034.906,wbar0:14.331,wbarDot:.252},Saturn:{a:9.55491,e:.05551,L0:50.077,Ldot:1222.114,wbar0:93.057,wbarDot:.555},Uranus:{a:19.1882,e:.0463,L0:314.055,Ldot:428.467,wbar0:173.005,wbarDot:.013},Neptune:{a:30.0699,e:.00899,L0:304.349,Ldot:218.486,wbar0:48.12,wbarDot:.01}},Sd=.72653;function Cd(e,t){let n=e;for(let r=0;r<15;r++){let r=(n-t*Math.sin(n)-e)/(1-t*Math.cos(n));if(n-=r,Math.abs(r)<1e-12)break}return n}function wd(e){let t=(e.L0+e.Ldot*Sd)*bd,n=(e.wbar0+e.wbarDot*Sd)*bd,r=Cd(((t-n)%(2*Math.PI)+2*Math.PI)%(2*Math.PI),e.e),i=Math.cos(r),a=Math.sin(r),o=Math.atan2(Math.sqrt(1-e.e*e.e)*a,i-e.e),s=e.a*(1-e.e*i),c=o+n;return{x:s*Math.cos(c),z:s*Math.sin(c)}}function Td(e){return e*yd}function Ed(){let e=[];e.push({name:`Sun`,x:0,z:0,radiusKm:696340,color:`#ffee88`});let t=[{name:`Mercury`,radiusKm:2440,color:`#b0a090`},{name:`Venus`,radiusKm:6052,color:`#e8d8a0`},{name:`Earth`,radiusKm:6371,color:`#4488cc`},{name:`Mars`,radiusKm:3390,color:`#cc6644`},{name:`Jupiter`,radiusKm:69911,color:`#d4a860`},{name:`Saturn`,radiusKm:58232,color:`#c8b080`,hasRings:!0},{name:`Uranus`,radiusKm:25362,color:`#88cccc`},{name:`Neptune`,radiusKm:24622,color:`#4466cc`}],n={};for(let r of t){let t=wd(xd[r.name]),i=Td(t.x),a=Td(t.z);n[r.name]={x:i,z:a},e.push({name:r.name,x:i,z:a,radiusKm:r.radiusKm,color:r.color,hasRings:r.hasRings})}let r=[{name:`Phobos`,parent:`Mars`,radiusKm:11,offsetAngle:0},{name:`Deimos`,parent:`Mars`,radiusKm:6,offsetAngle:Math.PI*.6},{name:`Io`,parent:`Jupiter`,radiusKm:1822,offsetAngle:0},{name:`Europa`,parent:`Jupiter`,radiusKm:1561,offsetAngle:Math.PI*.5},{name:`Ganymede`,parent:`Jupiter`,radiusKm:2634,offsetAngle:Math.PI},{name:`Callisto`,parent:`Jupiter`,radiusKm:2410,offsetAngle:Math.PI*1.5},{name:`Titan`,parent:`Saturn`,radiusKm:2575,offsetAngle:Math.PI*.3}];for(let t of r){let i=n[t.parent];if(!i)continue;let a=Td(.003)*(1+r.indexOf(t)*.3);e.push({name:t.name,x:i.x+Math.cos(t.offsetAngle)*a,z:i.z+Math.sin(t.offsetAngle)*a,radiusKm:t.radiusKm,color:`#aaaaaa`,isMoon:!0,parentName:t.parent})}return e}var Dd=Ed(),Od=Dd.filter(e=>!e.isMoon&&e.name!==`Sun`),kd=480,Ad=120,jd=800,Md=8,V=55e3,Nd=100,Pd=14,Fd=5,Id=18,Ld={[C.SCOUT]:`#3b82f6`,[C.MINER]:`#f59e0b`,[C.HAULER]:`#22c55e`,[C.RESEARCHER]:`#a855f7`,[C.REFINER]:`#f97316`,[C.DEFENDER]:`#ef4444`,[C.ENGINEER]:`#06b6d4`},Rd=`#f59e0b`,H={robotBuffer:null,robotCount:0,bases:[],anomalies:[],entities:[],factionBases:[],namedLocations:[],cameraX:5e3,cameraZ:1e3,cameraViewSize:8e3},U=null,W=null,zd=0,Bd=null,G=kd,Vd=!1,Hd=0,Ud=0,Wd=0;function Gd(e){Bd=e,tf()}function Kd(e,t){H.robotBuffer=e,H.robotCount=t}function qd(e){H.bases=e}function Jd(e){H.anomalies=e}function Yd(e){H.entities=e}function Xd(e){H.factionBases=e}function Zd(e){H.namedLocations=e.map(e=>({name:e.name,x:e.x,z:e.z}))}function Qd(e,t,n){H.cameraX=e,H.cameraZ=t,H.cameraViewSize=n}function $d(e){!U||!W||e-zd<Nd||(zd=e,cf())}function ef(){U&&(U.width=G,U.height=G,U.style.width=`${G}px`,U.style.height=`${G}px`)}function tf(){U=document.createElement(`canvas`),U.style.cssText=`
    position: fixed;
    top: ${Md}px;
    right: ${Md}px;
    border: 1px solid rgba(100,140,255,0.4);
    border-radius: 6px;
    cursor: crosshair;
    z-index: 70;
    opacity: 0.92;
  `,ef(),U.addEventListener(`click`,df),U.addEventListener(`mousedown`,pf),U.addEventListener(`mousemove`,ff),t(U,`Minimap — shows the full asteroid belt
● Amber = miners  ● Blue = scouts  ● Green = haulers
● Purple = researchers/anomalies  ● Red = defenders
● White ✕ = bases  ● Named locations labeled
Click to navigate · Drag bottom-left corner to resize`),W=U.getContext(`2d`),document.body.appendChild(U)}function nf(e){return(e+V)/(2*V)*G}function rf(e){return(e+V)/(2*V)*G}function af(e){return e/G*(2*V)-V}function of(e){return e/G*(2*V)-V}function sf(e,t,n,r){if(e.length===0)return[];let i=e.map(e=>({name:e.name,dist:(e.x-t)**2+(e.z-n)**2,px:(e.x+V)/(2*V)*r,pz:(e.z+V)/(2*V)*r})).sort((e,t)=>e.dist-t.dist).slice(0,Fd),a=[];for(let e of i)a.some(t=>Math.abs(t.px-e.px)<Id&&Math.abs(t.pz-e.pz)<Id)||a.push({name:e.name,px:e.px,pz:e.pz});return a}function cf(){if(!W)return;W.fillStyle=`rgba(4,6,14,0.92)`,W.fillRect(0,0,G,G),W.strokeStyle=`rgba(80,110,180,0.35)`,W.lineWidth=1;let e=G/2,t=G/2,n=5e3/V*(G/2),r=5e4/V*(G/2);W.beginPath(),W.arc(e,t,n,0,Math.PI*2),W.stroke(),W.beginPath(),W.arc(e,t,r,0,Math.PI*2),W.stroke();for(let e of Od){let t=nf(e.x),n=rf(e.z);t<-2||t>G+2||n<-2||n>G+2||(W.fillStyle=e.color,W.beginPath(),W.arc(t,n,3,0,Math.PI*2),W.fill())}let i=H.cameraViewSize/V*(G/2),o=nf(H.cameraX),c=rf(H.cameraZ);W.strokeStyle=`rgba(160,190,255,0.35)`,W.lineWidth=1.5,W.strokeRect(o-i,c-i,i*2,i*2),W.fillStyle=`#a855f7`;for(let e of H.anomalies){let t=nf(e.x),n=rf(e.z);W.beginPath(),W.arc(t,n,3.5,0,Math.PI*2),W.fill()}if(H.robotBuffer&&H.robotCount>0)for(let e=0;e<H.robotCount;e++){let t=a(H.robotBuffer,e);W.fillStyle=Ld[t]??Rd;let n=nf(g(H.robotBuffer,e)),r=rf(s(H.robotBuffer,e));W.beginPath(),W.arc(n,r,2.5,0,Math.PI*2),W.fill()}for(let e of H.entities){let t=nf(e.x),n=rf(e.z);W.fillStyle=e.type===vd.DRIFTER?`#8866ff`:`#44ffcc`,W.beginPath(),W.arc(t,n,5,0,Math.PI*2),W.fill()}W.strokeStyle=`#ffffff`,W.lineWidth=2;for(let e of H.bases){let t=nf(e.x),n=rf(e.z);W.beginPath(),W.moveTo(t-6,n),W.lineTo(t+6,n),W.moveTo(t,n-6),W.lineTo(t,n+6),W.stroke()}for(let e of H.factionBases)if(e.territoryRadius&&e.territoryRadius>0){let t=nf(e.x),n=rf(e.z),r=e.territoryRadius/V*(G/2);W.beginPath(),W.arc(t,n,r,0,Math.PI*2),W.fillStyle=e.color+`18`,W.fill(),W.strokeStyle=e.color+`40`,W.lineWidth=1,W.stroke()}for(let e of H.factionBases){let t=nf(e.x),n=rf(e.z);W.fillStyle=e.color,W.beginPath(),W.moveTo(t,n-5),W.lineTo(t+5,n),W.lineTo(t,n+5),W.lineTo(t-5,n),W.closePath(),W.fill()}let l=nf(0),u=rf(0);W.fillStyle=`#ffdd44`,W.beginPath(),W.arc(l,u,4,0,Math.PI*2),W.fill(),W.strokeStyle=`#ffdd44`,W.lineWidth=1;for(let e=0;e<Math.PI*2;e+=Math.PI/4)W.beginPath(),W.moveTo(l+Math.cos(e)*5,u+Math.sin(e)*5),W.lineTo(l+Math.cos(e)*8,u+Math.sin(e)*8),W.stroke();let d=nf(H.cameraX),f=rf(H.cameraZ);if(W.fillStyle=`#00ffaa`,W.beginPath(),W.moveTo(d,f-6),W.lineTo(d+4.5,f+4),W.lineTo(d-4.5,f+4),W.closePath(),W.fill(),W.strokeStyle=`#00ffaa`,W.lineWidth=1,W.stroke(),H.namedLocations.length>0){let e=sf(H.namedLocations,H.cameraX,H.cameraZ,G),t=H.namedLocations.map(e=>({...e,dist:(e.x-H.cameraX)**2+(e.z-H.cameraZ)**2,px:(e.x+V)/(2*V)*G,pz:(e.z+V)/(2*V)*G})).sort((e,t)=>e.dist-t.dist).slice(0,Fd);W.font=`9px "Courier New"`,W.textAlign=`left`;let n=new Set(e.map(e=>`${e.px},${e.pz}`));for(let e of t)W.fillStyle=`rgba(255,220,100,0.7)`,W.beginPath(),W.arc(e.px,e.pz,2.5,0,Math.PI*2),W.fill(),n.has(`${e.px},${e.pz}`)&&(W.fillStyle=`rgba(255,220,100,0.6)`,W.fillText(e.name,e.px+4,e.pz+3))}W.fillStyle=`rgba(140,160,220,0.8)`,W.font=`10px "Courier New"`,W.textAlign=`right`,W.fillText(`Full Belt · 110 Mm`,G-4,G-4),lf(W),W.strokeStyle=`rgba(160,190,255,0.5)`,W.lineWidth=1;let p=Pd;for(let e=3;e<=p;e+=4)W.beginPath(),W.moveTo(e,G),W.lineTo(0,G-e),W.stroke()}function lf(e){let t=[{label:`You`,color:`#00ffaa`,shape:`triangle`},{label:`Sun`,color:`#ffdd44`,shape:`sun`},{label:`Base`,color:`#ffffff`,shape:`cross`},{label:`Faction`,color:`#cc66cc`,shape:`diamond`},{label:`Miner`,color:`#f59e0b`,shape:`circle`},{label:`Scout`,color:`#3b82f6`,shape:`circle`}],n=G-Pd-t.length*12-4;e.fillStyle=`rgba(4,6,14,0.7)`,e.fillRect(4,n-2,68,t.length*12+4),e.font=`9px "Courier New"`,e.textAlign=`left`;for(let r=0;r<t.length;r++){let i=t[r],a=n+r*12+12-2;e.fillStyle=i.color,e.strokeStyle=i.color,e.lineWidth=1.5,i.shape===`circle`?(e.beginPath(),e.arc(10,a-3,3,0,Math.PI*2),e.fill()):i.shape===`diamond`?(e.beginPath(),e.moveTo(10,a-6),e.lineTo(13,a-3),e.lineTo(10,a),e.lineTo(7,a-3),e.closePath(),e.fill()):i.shape===`cross`?(e.beginPath(),e.moveTo(7,a-3),e.lineTo(13,a-3),e.moveTo(10,a-6),e.lineTo(10,a),e.stroke()):i.shape===`sun`?(e.beginPath(),e.arc(10,a-3,2.5,0,Math.PI*2),e.fill()):i.shape===`triangle`&&(e.beginPath(),e.moveTo(10,a-6),e.lineTo(13.5,a),e.lineTo(6.5,a),e.closePath(),e.fill()),e.fillStyle=`rgba(180,200,240,0.8)`,e.fillText(i.label,18,a)}}function uf(e){if(!U)return!1;let t=U.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;return n<Pd&&r>t.height-Pd}function df(e){if(!U||!Bd||uf(e))return;let t=U.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,i=n/t.width*G,a=r/t.height*G;Bd(af(i),of(a))}function ff(e){U&&(U.style.cursor=uf(e)?`nesw-resize`:`crosshair`)}function pf(e){uf(e)&&(e.preventDefault(),e.stopPropagation(),Vd=!0,Hd=e.clientX,Ud=e.clientY,Wd=G,document.addEventListener(`mousemove`,mf),document.addEventListener(`mouseup`,hf))}function mf(e){if(!Vd)return;let t=Hd-e.clientX,n=e.clientY-Ud,r=Math.max(t,n),i=Math.round(Math.min(jd,Math.max(Ad,Wd+r)));i!==G&&(G=i,ef())}function hf(){Vd=!1,document.removeEventListener(`mousemove`,mf),document.removeEventListener(`mouseup`,hf)}var gf=`a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])`;function _f(e){let t=Array.from(e.querySelectorAll(gf));if(t.length===0)return()=>{};let n=t[0],r=t[t.length-1];n.focus();function i(e){if(e.key===`Tab`){if(t.length===1){e.preventDefault();return}e.shiftKey?document.activeElement===n&&(e.preventDefault(),r.focus()):document.activeElement===r&&(e.preventDefault(),n.focus())}}return e.addEventListener(`keydown`,i),()=>e.removeEventListener(`keydown`,i)}var vf=null,yf=!1,bf=null,xf=[{key:`WASD / Arrow Keys`,desc:`Pan camera`},{key:`Scroll wheel`,desc:`Zoom in/out`},{key:`Middle-click drag`,desc:`Pan camera`},{key:`Left-click robot`,desc:`Follow robot (click again or ESC to stop)`},{key:`Tab`,desc:`Follow next robot`},{key:`Shift+Tab`,desc:`Follow previous robot`},{key:`Home`,desc:`Return camera to base station`},{key:`T`,desc:`Tech tree / Research`},{key:`J`,desc:`Journal / Codex`},{key:`C`,desc:`Construction bay — build robots`},{key:`A`,desc:`Automation panel`},{key:`W`,desc:`Material priorities — fleet targeting weights`},{key:`V`,desc:`Base Buildings — upgrade outpost infrastructure`},{key:`B`,desc:`Bases & logistics (build outposts, hauler routes)`},{key:`D`,desc:`Operations dashboard`},{key:`F`,desc:`Faction relations & diplomacy`},{key:`L`,desc:`Event log`},{key:`U`,desc:`Fleet culture & traits`},{key:`N`,desc:`Commander's Log — personal journal`},{key:`P`,desc:`Meridian Archives & Historical Database`},{key:`M`,desc:`Mute / unmute audio`},{key:`H`,desc:`Show this help`},{key:`ESC`,desc:`Pause menu`},{key:`Ctrl+S`,desc:`Quick save`}];function Sf(){yf?Tf():wf()}function Cf(){Tf()}function wf(){yf=!0,vf||Ef(),vf.style.display=`flex`;let e=vf.querySelector(`[role="dialog"]`);e&&(bf=_f(e))}function Tf(){yf=!1,bf?.(),bf=null,vf&&(vf.style.display=`none`)}function Ef(){vf=document.createElement(`div`),vf.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(4,6,14,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
    backdrop-filter: blur(4px);
  `;let e=document.createElement(`div`);e.setAttribute(`role`,`dialog`),e.setAttribute(`aria-label`,`Keyboard reference`),e.setAttribute(`tabindex`,`-1`),e.style.cssText=`
    background: rgba(10,14,28,0.97);
    border: 1px solid rgba(100,140,255,0.3);
    border-radius: 10px;
    padding: 28px 36px;
    min-width: 380px;
    font-family: 'Courier New', monospace;
    color: #c0d0f0;
    box-shadow: 0 8px 40px rgba(0,0,0,0.7);
  `;let t=document.createElement(`div`);t.style.cssText=`
    font-size: 14px;
    color: #7090e0;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(100,140,255,0.2);
    padding-bottom: 10px;
  `,t.textContent=`⌨ Keyboard Reference`,e.appendChild(t);let n=document.createElement(`div`);n.style.cssText=`display:grid;grid-template-columns:auto 1fr;gap:6px 20px;`;for(let{key:e,desc:t}of xf){let r=document.createElement(`span`);r.style.cssText=`
      background: rgba(60,80,140,0.5);
      border: 1px solid rgba(100,140,255,0.25);
      border-radius: 3px;
      padding: 2px 7px;
      font-size: 11px;
      color: #a0c0ff;
      white-space: nowrap;
      text-align: center;
    `,r.textContent=e;let i=document.createElement(`span`);i.style.cssText=`font-size:12px;color:#8090b0;align-self:center;`,i.textContent=t,n.appendChild(r),n.appendChild(i)}e.appendChild(n);let r=document.createElement(`div`);r.style.cssText=`text-align:center;margin-top:20px;display:flex;flex-direction:column;align-items:center;gap:8px;`;let i=document.createElement(`div`);i.style.cssText=`font-size:10px;color:#4a5568;`,i.textContent=`Press H or Escape to close`;let a=document.createElement(`button`);a.textContent=`Close`,a.setAttribute(`aria-label`,`Close keyboard reference`),a.style.cssText=`
    padding: 5px 20px;
    background: rgba(60,80,140,0.6);
    border: 1px solid rgba(100,140,255,0.3);
    border-radius: 5px;
    color: #a0c0ff;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-size: 11px;
  `,a.onclick=()=>Tf(),r.appendChild(i),r.appendChild(a),e.appendChild(r),vf.appendChild(e),vf.addEventListener(`click`,e=>{e.target===vf&&Tf()}),vf.addEventListener(`keydown`,e=>{e.key===`Escape`&&Tf()}),document.body.appendChild(vf)}var Df=`/assets/music/`,Of={beginSlowly:`Begin Slowly.mp3`,spaceIsDeep:`Space is Deep.mp3`,cosmosIsPeaceful:`The Cosmos is Peaceful.mp3`,mineQuietly:`Mine Quietly.mp3`,focusAndMine:`Focus and Mine.mp3`,progressBase:`You Make Progress Over Time.mp3`,progressLonger:`You Make Progress Over Time (longer).mp3`,progressAlt1:`You Make Progress Over Time (longer) (alt ending 1).mp3`,progressAlt2:`You Make Progress Over Time (longer) (alt ending 2).mp3`,progressAlt3:`You Make Progress Over Time (longer) (alt ending 3).mp3`,industrialProgress:`You make Industrial Progress.mp3`,infraFocus:`Your infrastructure needs your focus.mp3`,combatStart:`ok the attack is underway, focus now.mp3`,midCombat:`combat in space is almost silent but people still die.mp3`,peopleDying:`Your people are dying.mp3`,peopleUnhappy:`Your people are unhappy.mp3`,postCombat:`so many people died but the attack is now over and you need to clean up.mp3`,recovery:`We Are All In This Together.mp3`,keepGoing:`keep going but also it's late it's a long playsession already.mp3`,bedtime:`Quiet and chill, maybe it is time to go to bed you have been playing a long time.mp3`},kf={loading:`beginSlowly`,idle:`cosmosIsPeaceful`,exploring:`spaceIsDeep`,mining:`mineQuietly`,focus:`focusAndMine`,progress:`progressBase`,industrial:`industrialProgress`,alert:`infraFocus`,combat:`combatStart`,mid_combat:`midCombat`,casualties:`peopleDying`,unhappy:`peopleUnhappy`,post_combat:`postCombat`,recovery:`recovery`,long_session:`keepGoing`,very_long:`bedtime`},Af=2.5,jf=3600*1e3,Mf=5400*1e3,Nf=900*1e3,Pf=1800*1e3,Ff=22,If=6,Lf=new class{ctx=null;musicGain=null;initialized=!1;bufferCache=new Map;currentSource=null;currentFadeGain=null;currentState=`loading`;progressSequenceId=0;crossfadeGeneration=0;progressAltKeys=[`progressAlt1`,`progressAlt2`,`progressAlt3`];sessionStartMs=0;sessionTimer=null;init(e,t){this.initialized||(this.initialized=!0,this.ctx=e,this.musicGain=t,this.sessionStartMs=Date.now(),this.sessionTimer=setInterval(()=>this.checkSessionTimer(),6e4),this.preloadTracks([`beginSlowly`,`cosmosIsPeaceful`]).then(()=>{this.currentState===`loading`&&this.playTrack(`beginSlowly`,!1)}))}async preloadTracks(e){await Promise.all(e.map(e=>this.loadBuffer(e)))}setState(e){if(e===this.currentState||this.currentState===`very_long`||this.currentState===`long_session`&&e!==`very_long`&&e!==`combat`&&e!==`mid_combat`&&e!==`casualties`)return;this.currentState=e;let t=kf[e];this.progressSequenceId++,this.crossfadeTo(t,e===`progress`)}getState(){return this.currentState}skipTrack(){let e=[`beginSlowly`,`cosmosIsPeaceful`,`spaceIsDeep`,`mineQuietly`,`focusAndMine`,`industrialProgress`];this._ambientCycleIdx=(this._ambientCycleIdx+1)%e.length,this.progressSequenceId++,this.crossfadeTo(e[this._ambientCycleIdx],!1)}_ambientCycleIdx=0;dispose(){this.sessionTimer!==null&&(clearInterval(this.sessionTimer),this.sessionTimer=null),this.fadeOutCurrent(.5),this.ctx=null,this.musicGain=null,this.initialized=!1}isLateNight(){let e=new Date().getHours();return e>=Ff||e<If}checkSessionTimer(){let e=Date.now()-this.sessionStartMs,t=this.isLateNight(),n=t?Pf:Mf,r=t?Nf:jf;e>=n&&this.currentState!==`very_long`?this.setState(`very_long`):e>=r&&this.currentState!==`long_session`&&this.currentState!==`very_long`&&this.setState(`long_session`)}async loadBuffer(e){let t=Of[e],n=this.bufferCache.get(t);if(n)return n;if(!this.ctx)return null;try{let e=Df+encodeURIComponent(t),n=await fetch(e);if(!n.ok)return null;let r=await n.arrayBuffer(),i=await this.ctx.decodeAudioData(r);return this.bufferCache.set(t,i),i}catch{return null}}async playTrack(e,t){if(!this.ctx||!this.musicGain)return;let n=await this.loadBuffer(e);if(!n)return;let r=this.ctx.createGain();r.gain.value=1,r.connect(this.musicGain);let i=this.ctx.createBufferSource();i.buffer=n,i.loop=t,i.connect(r),this.currentSource=i,this.currentFadeGain=r,i.start()}async playTrackAwaitable(e,t){if(!this.ctx||!this.musicGain)return;let n=await this.loadBuffer(e);if(!n||!this.ctx||!this.musicGain)return;let r=this.ctx.createGain();r.gain.value=1,r.connect(this.musicGain);let i=this.ctx.createBufferSource();i.buffer=n,i.loop=t,i.connect(r),this.currentSource=i,this.currentFadeGain=r,i.start(),t||await new Promise(e=>{i.onended=()=>e()})}async runProgressSequence(e){let t=()=>e===this.progressSequenceId&&this.currentState===`progress`;if(t())for(await this.playTrackAwaitable(`progressLonger`,!1);t();){let e=Math.floor(Math.random()*this.progressAltKeys.length);if(await this.playTrackAwaitable(this.progressAltKeys[e],!1),!t()||(await this.playTrackAwaitable(`progressBase`,!1),!t()))return;await this.playTrackAwaitable(`progressLonger`,!1)}}fadeOutCurrent(e){if(!this.ctx||!this.currentFadeGain||!this.currentSource)return;let t=this.ctx.currentTime,n=this.currentFadeGain,r=this.currentSource;n.gain.linearRampToValueAtTime(0,t+e),setTimeout(()=>{try{r.stop()}catch{}try{n.disconnect()}catch{}},e*1e3+100),this.currentSource=null,this.currentFadeGain=null}async crossfadeTo(e,t){if(!this.ctx||!this.musicGain)return;let n=++this.crossfadeGeneration;this.fadeOutCurrent(Af);let r=await this.loadBuffer(e);if(!r||n!==this.crossfadeGeneration)return;let i=this.ctx.createGain();i.gain.setValueAtTime(0,this.ctx.currentTime),i.gain.linearRampToValueAtTime(1,this.ctx.currentTime+Af),i.connect(this.musicGain);let a=this.ctx.createBufferSource();if(a.buffer=r,a.loop=!t,a.connect(i),this.currentSource=a,this.currentFadeGain=i,a.start(),t&&!a.loop){let e=this.progressSequenceId;a.onended=()=>{a===this.currentSource&&this.currentState===`progress`&&this.runProgressSequence(e)}}}},Rf=`asteroid_miner_settings`,zf={bloomIntensity:1,particleDensity:1,autoSaveIntervalMin:5,beltEchoesEnabled:!0},K=Kf(),Bf=null,Vf=null,Hf=null;function Uf(e){return Vf=e,K}function Wf(){Jf()}function Gf(){return K}function Kf(){try{let e=localStorage.getItem(Rf);if(e)return{...zf,...JSON.parse(e)}}catch{}return{...zf}}function qf(){try{localStorage.setItem(Rf,JSON.stringify(K))}catch{}}function Jf(){Bf||Xf(),Bf.style.display=`flex`;let e=Bf.querySelector(`[role="dialog"]`);e&&(Hf=_f(e))}function Yf(){Hf?.(),Hf=null,Bf&&(Bf.style.display=`none`)}function Xf(){Bf=document.createElement(`div`),Bf.setAttribute(`aria-modal`,`true`),Bf.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(4,6,14,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 190;
    backdrop-filter: blur(3px);
  `;let e=document.createElement(`div`);e.setAttribute(`role`,`dialog`),e.setAttribute(`aria-label`,`Settings`),e.setAttribute(`tabindex`,`-1`),e.style.cssText=`
    background: rgba(10,14,28,0.98);
    border: 1px solid rgba(100,140,255,0.3);
    border-radius: 10px;
    padding: 28px 32px;
    width: 400px;
    font-family: 'Courier New', monospace;
    color: #c0d0f0;
    box-shadow: 0 8px 40px rgba(0,0,0,0.7);
  `;let n=document.createElement(`div`);n.style.cssText=`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(100,140,255,0.2);
  `,n.innerHTML=`<span style="font-size:14px;color:#7090e0;letter-spacing:0.1em;text-transform:uppercase;">⚙ Settings</span>`;let r=document.createElement(`button`);r.textContent=`×`,r.setAttribute(`aria-label`,`Close settings`),r.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:18px;`,r.onclick=()=>{z(`ui.panel_close`),Yf()},n.appendChild(r),e.appendChild(n),e.appendChild(Zf(`Audio`));let i=R.getSettings();e.appendChild(Qf(`Master Volume`,i.masterVolume,0,1,.05,e=>{R.setMasterVolume(e)})),e.appendChild(Qf(`SFX Volume`,i.sfxVolume,0,1,.05,e=>{R.setSfxVolume(e)})),e.appendChild(Qf(`Music Volume`,i.musicVolume,0,1,.05,e=>{R.setMusicVolume(e)}));let a=document.createElement(`div`);a.style.cssText=`display:flex;align-items:center;gap:10px;margin-bottom:8px;`;let o=document.createElement(`span`);o.style.cssText=`flex:0 0 120px;font-size:11px;color:#8090b0;`,o.textContent=`Music`;let s=document.createElement(`button`),c=i.musicVolume>0?i.musicVolume:.6,l=()=>R.getSettings().musicVolume>0;s.textContent=l()?`On`:`Off`,s.style.cssText=`
  padding:3px 12px;
  background:${l()?`rgba(60,120,60,0.6)`:`rgba(60,60,80,0.4)`};
  border:1px solid rgba(100,140,255,0.3);
  border-radius:4px;
  color:#a0c0ff;
  cursor:pointer;
  font-family:'Courier New',monospace;
  font-size:11px;
`,s.onclick=()=>{z(`ui.button_press`),l()?(c=R.getSettings().musicVolume,R.setMusicVolume(0),s.textContent=`Off`,s.style.background=`rgba(60,60,80,0.4)`):(R.setMusicVolume(c),s.textContent=`On`,s.style.background=`rgba(60,120,60,0.6)`)},a.appendChild(o),a.appendChild(s);let u=document.createElement(`button`);u.textContent=`⏭ Skip`,u.title=`Skip to next track`,u.style.cssText=`
  padding:3px 10px;
  background:rgba(40,60,100,0.4);
  border:1px solid rgba(100,140,255,0.3);
  border-radius:4px;
  color:#a0c0ff;
  cursor:pointer;
  font-family:'Courier New',monospace;
  font-size:11px;
`,u.onclick=()=>{z(`ui.button_press`),Lf.skipTrack()},a.appendChild(u),e.appendChild(a),e.appendChild(Zf(`Graphics`)),e.appendChild(Qf(`Bloom Intensity`,K.bloomIntensity,0,2,.1,e=>{K.bloomIntensity=e,qf(),Vf?.(K)},void 0,`Glow effect intensity around bright objects
0 = off · 1 = default · 2 = intense
Higher values may reduce performance`)),e.appendChild(Qf(`Particle Density`,K.particleDensity,0,1,.1,e=>{K.particleDensity=e,qf(),Vf?.(K)},void 0,`Density of dust and debris particles
0 = none · 1 = full
Reduce if experiencing frame rate drops`)),e.appendChild(Zf(`Game`)),e.appendChild(Qf(`Auto-save (min)`,K.autoSaveIntervalMin,1,30,1,e=>{K.autoSaveIntervalMin=Math.round(e),qf(),Vf?.(K)},e=>`${Math.round(e)}m`,`How often the game auto-saves
1m = frequent (safe) · 30m = infrequent
Auto-save briefly pauses simulation`));let d=document.createElement(`div`);d.style.cssText=`display:flex;align-items:center;gap:10px;margin-bottom:8px;`;let f=document.createElement(`span`);f.style.cssText=`flex:0 0 120px;font-size:11px;color:#8090b0;`,f.textContent=`Belt Echoes`;let p=document.createElement(`button`);p.textContent=K.beltEchoesEnabled?`On`:`Off`,p.style.cssText=`
    padding:3px 12px;
    background:${K.beltEchoesEnabled?`rgba(60,120,60,0.6)`:`rgba(60,60,80,0.4)`};
    border:1px solid rgba(100,140,255,0.3);
    border-radius:4px;
    color:#a0c0ff;
    cursor:pointer;
    font-family:'Courier New',monospace;
    font-size:11px;
  `,p.onclick=()=>{z(`ui.button_press`),K.beltEchoesEnabled=!K.beltEchoesEnabled,p.textContent=K.beltEchoesEnabled?`On`:`Off`,p.style.background=K.beltEchoesEnabled?`rgba(60,120,60,0.6)`:`rgba(60,60,80,0.4)`,qf(),Vf?.(K)},t(d,`Receive anonymous transmissions from other colonies in the belt.
These are intercepted signals — echoes of what others have achieved.`),d.appendChild(f),d.appendChild(p),e.appendChild(d);let m=document.createElement(`div`);m.style.cssText=`display:flex;align-items:center;gap:10px;margin-bottom:8px;`;let h=document.createElement(`span`);h.style.cssText=`flex:0 0 120px;font-size:11px;color:#8090b0;`,h.textContent=`Dev Mode`;let g=document.createElement(`button`),_=()=>new URLSearchParams(window.location.search).get(`dev`)===`true`||localStorage.getItem(`devMode`)===`true`;g.textContent=_()?`On`:`Off`,g.style.cssText=`
    padding:3px 12px;
    background:${_()?`rgba(60,120,60,0.6)`:`rgba(60,60,80,0.4)`};
    border:1px solid rgba(100,140,255,0.3);
    border-radius:4px;
    color:#a0c0ff;
    cursor:pointer;
    font-family:'Courier New',monospace;
    font-size:11px;
  `,g.onclick=()=>{z(`ui.button_press`);let t=!_();localStorage.setItem(`devMode`,t?`true`:`false`),g.textContent=t?`On`:`Off`,g.style.background=t?`rgba(60,120,60,0.6)`:`rgba(60,60,80,0.4)`;let n=e.querySelector(`[data-sound-designer]`);n&&(n.style.display=t?`block`:`none`)},m.appendChild(h),m.appendChild(g),e.appendChild(m);let v=document.createElement(`div`);v.setAttribute(`data-sound-designer`,``),v.style.display=_()?`block`:`none`,v.appendChild(Zf(`Sound Designer (Dev)`));let y=Object.keys(Rl()),b=()=>{for(;v.children.length>1;)v.removeChild(v.lastChild);let e=Rl();for(let t of y){let n=document.createElement(`div`);n.style.cssText=`display:flex;align-items:center;gap:6px;margin-bottom:6px;`;let r=document.createElement(`span`);r.style.cssText=`flex:0 0 160px;font-size:10px;color:#7080a0;word-break:break-all;`,r.textContent=t;let i=document.createElement(`select`);i.style.cssText=`
        flex:1;
        background:rgba(10,14,28,0.9);
        border:1px solid rgba(100,140,255,0.25);
        border-radius:3px;
        color:#a0c0ff;
        font-size:10px;
        font-family:'Courier New',monospace;
        padding:2px;
      `;for(let n of Nl){let r=document.createElement(`option`);r.value=n,r.textContent=n.replace(/\.mp3$/i,``).slice(0,40),r.title=n,n===e[t]&&(r.selected=!0),i.appendChild(r)}i.onchange=()=>{let e=Rl();e[t]=i.value,zl(e)};let a=document.createElement(`button`);a.textContent=`▶`,a.setAttribute(`aria-label`,`Preview ${t}`),a.style.cssText=`
        background:rgba(40,60,100,0.6);
        border:1px solid rgba(100,140,255,0.3);
        border-radius:3px;
        color:#a0c0ff;
        cursor:pointer;
        font-size:11px;
        padding:2px 6px;
      `,a.onclick=()=>Hl(i.value),n.appendChild(r),n.appendChild(i),n.appendChild(a),v.appendChild(n)}let t=document.createElement(`button`);t.textContent=`Reset to Defaults`,t.style.cssText=`
      margin-top:8px;
      padding:5px 14px;
      background:rgba(80,30,30,0.5);
      border:1px solid rgba(200,80,80,0.4);
      border-radius:4px;
      color:#f0a0a0;
      cursor:pointer;
      font-family:'Courier New',monospace;
      font-size:10px;
    `,t.onclick=()=>{Bl(),b()},v.appendChild(t)};b(),e.appendChild(v);let x=document.createElement(`div`);x.style.cssText=`text-align:center;margin-top:20px;`;let ee=document.createElement(`button`);ee.textContent=`Close`,ee.setAttribute(`aria-label`,`Close settings`),ee.style.cssText=`
    padding: 7px 28px;
    background: rgba(60,80,140,0.6);
    border: 1px solid rgba(100,140,255,0.3);
    border-radius: 5px;
    color: #a0c0ff;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-size: 12px;
  `,ee.onclick=()=>{z(`ui.panel_close`),Yf()},x.appendChild(ee),e.appendChild(x),Bf.addEventListener(`click`,e=>{e.target===Bf&&Yf()}),Bf.addEventListener(`keydown`,e=>{e.key===`Escape`&&Yf()}),Bf.appendChild(e),document.body.appendChild(Bf)}function Zf(e){let t=document.createElement(`div`);return t.style.cssText=`
    font-size: 10px;
    color: #5060a0;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 14px 0 8px;
    border-bottom: 1px solid rgba(100,120,200,0.15);
    padding-bottom: 4px;
  `,t.textContent=e,t}function Qf(e,n,r,i,a,o,s,c){let l=document.createElement(`div`);l.style.cssText=`display:flex;align-items:center;gap:10px;margin-bottom:8px;`,c&&t(l,c);let u=document.createElement(`span`);u.style.cssText=`flex:0 0 120px;font-size:11px;color:#8090b0;`,u.textContent=e;let d=document.createElement(`input`);d.type=`range`,d.min=String(r),d.max=String(i),d.step=String(a),d.value=String(n),d.style.cssText=`flex:1;accent-color:#6080d0;cursor:pointer;`;let f=document.createElement(`span`);return f.style.cssText=`flex:0 0 40px;text-align:right;font-size:11px;color:#a0c0ff;`,f.textContent=s?s(n):n.toFixed(2),d.oninput=()=>{let e=parseFloat(d.value);f.textContent=s?s(e):e.toFixed(2),o(e)},l.appendChild(u),l.appendChild(d),l.appendChild(f),l}var $f=[1e3,1e4,1e5,1e6],ep={iron:`Iron`,carbon:`Carbon`,silicon:`Silicon`,water:`Water`,refined_iron:`Refined Iron`,steel:`Steel`,electronics:`Electronics`,battery_cell:`Battery Cells`},tp=new Set,np=new Set,rp=[{id:`first_robot_army`,label:`10 robots in the field`,check:e=>e.robotCount>=10},{id:`robot_army_20`,label:`20 robots deployed`,check:e=>e.robotCount>=20},{id:`robot_army_50`,label:`50 robot fleet achieved`,check:e=>e.robotCount>=50},{id:`orbital_scaffold`,label:`Orbital Platform: Scaffold complete`,check:e=>(e.megastructureCompletedStages.orbital_platform??0)>=1},{id:`orbital_core`,label:`Orbital Platform: Core complete`,check:e=>(e.megastructureCompletedStages.orbital_platform??0)>=2},{id:`orbital_complete`,label:`Orbital Platform fully operational`,check:e=>(e.megastructureCompletedStages.orbital_platform??0)>=3},{id:`dyson_stage1`,label:`Dyson Swarm: First Collectors launched`,check:e=>(e.megastructureCompletedStages.dyson_swarm??0)>=1},{id:`half_tech`,label:`Half the tech tree researched`,check:e=>e.totalTechNodes>0&&e.techNodeCount>=Math.floor(e.totalTechNodes/2)},{id:`full_tech`,label:`Full tech tree unlocked`,check:e=>e.totalTechNodes>0&&e.techNodeCount>=e.totalTechNodes}];function ip(e,t){for(let[n,r]of Object.entries(e))for(let e of $f)if(r>=e){let r=`${n}:${e}`;tp.has(r)||(tp.add(r),t(`◈ ${ep[n]??n} stockpile reached ${cp(e)}`,`#22c55e`))}}function ap(e,t){for(let n of rp)!np.has(n.id)&&n.check(e)&&(np.add(n.id),t(`★ Achievement: ${n.label}`,`#fbbf24`))}function op(e){for(let[t,n]of Object.entries(e))for(let e of $f)n>=e&&tp.add(`${t}:${e}`)}function sp(){tp.clear(),np.clear()}function cp(e){return e>=1e6?`${e/1e6}M`:e>=1e3?`${e/1e3}K`:String(e)}var lp=[{id:`emerald`,name:`Emerald Dawn`,primary:`#22c55e`,accent:`#4ade80`,glow:`#166534`},{id:`crimson`,name:`Crimson Vanguard`,primary:`#ef4444`,accent:`#f87171`,glow:`#991b1b`},{id:`azure`,name:`Azure Drift`,primary:`#3b82f6`,accent:`#60a5fa`,glow:`#1e3a8a`},{id:`amber`,name:`Amber Core`,primary:`#f59e0b`,accent:`#fbbf24`,glow:`#92400e`},{id:`violet`,name:`Violet Expanse`,primary:`#a855f7`,accent:`#c084fc`,glow:`#581c87`},{id:`silver`,name:`Silver Tide`,primary:`#94a3b8`,accent:`#cbd5e1`,glow:`#475569`}];function up(e){return lp.find(t=>t.id===e)}var dp={AUTONOMOUS_COLLECTIVE:{dimension:`autonomyScore`,min:60},ISOLATED_CULTURE:{dimension:`isolationScore`,min:50},XENOAWARE:{dimension:`anomalyExposure`,min:40},COHESIVE_FLEET:{dimension:`fleetCohesion`,min:70}},fp={AUTONOMOUS_COLLECTIVE:{name:`Autonomous Collective`,color:`#22c55e`,desc:`Robots operate independently with self-directed priorities`,effectText:`Auto-queue bonus scales with autonomy. Risk: directive drift at high autonomy`},ISOLATED_CULTURE:{name:`Isolated Culture`,color:`#f59e0b`,desc:`Fleet has developed unique behaviors from prolonged isolation`,effectText:`Unique fleet behaviors from prolonged isolation`},XENOAWARE:{name:`Xenoaware`,color:`#a855f7`,desc:`Deep anomaly study has expanded the fleet's understanding`,effectText:`+20% anomaly study rate`},COHESIVE_FLEET:{name:`Cohesive Fleet`,color:`#06b6d4`,desc:`Strong collective identity and coordinated operations`,effectText:`Swarm mining bonus, knowledge cascade. Risk: collective mourning, groupthink glitches`}},pp=[{id:`escape`,text:`We mine to build humanity's escape from a gravity well.`,seedDimension:`fleetCohesion`},{id:`archaeologists`,text:`We are archaeologists — the Belt's secrets belong to everyone.`,seedDimension:`anomalyExposure`},{id:`machines`,text:`We prove that autonomous machines can raise a civilization.`,seedDimension:`autonomyScore`},{id:`creation`,text:`We build because creation is its own meaning.`,seedDimension:`isolationScore`}],mp=null,hp=null,gp=!1;function _p(){return gp}function vp(){gp=!1}function yp(e){if(mp)return;gp=!0,mp=document.createElement(`div`),mp.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    font-family: 'Courier New', monospace;
    opacity: 0;
    transition: opacity 0.5s ease;
  `,document.body.appendChild(mp),requestAnimationFrame(()=>{mp&&(mp.style.opacity=`1`)});let t=document.createElement(`div`);t.setAttribute(`role`,`dialog`),t.setAttribute(`aria-label`,`Name Your Colony`),t.setAttribute(`aria-modal`,`true`),t.setAttribute(`tabindex`,`-1`),t.style.cssText=`
    background: rgba(0, 4, 12, 0.98);
    border: 1px solid #06b6d4;
    box-shadow: 0 0 60px rgba(6,182,212,0.15), inset 0 0 40px rgba(0,0,0,0.6);
    color: #e2e8f0;
    max-width: 460px;
    width: 90vw;
    padding: 36px 32px;
    border-radius: 2px;
    position: relative;
  `,t.innerHTML=w`
    <div style="font-size:9px; color:#06b6d4; opacity:0.7; text-transform:uppercase; letter-spacing:3px; margin-bottom:6px;">
      ARIA — COLONY FOUNDING
    </div>
    <div style="font-size:18px; font-weight:bold; color:#06b6d4; margin-bottom:16px; letter-spacing:1px;">
      Name Your Colony
    </div>
    <p style="margin:0 0 20px; line-height:1.7; color:#94a3b8; font-size:12px;">
      Every civilization needs an identity. What will your outpost in the asteroid belt be called?
    </p>
    <input id="colony-name-input" type="text" maxlength="${30}" placeholder="Enter colony name..." style="
      width: 100%;
      background: rgba(0,0,0,0.4);
      border: 1px solid #06b6d444;
      border-radius: 2px;
      color: #e2e8f0;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      padding: 12px;
      outline: none;
      box-sizing: border-box;
      letter-spacing: 0.5px;
    " />
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px;">
      <span id="colony-name-count" style="font-size:10px; color:#475569;">0/${30}</span>
      <div style="display:flex; gap:12px;">
        <button id="colony-name-skip" style="
          background:none; border:none; color:#475569; cursor:pointer;
          font-family:'Courier New',monospace; font-size:10px; text-transform:uppercase; letter-spacing:1px;
        ">Skip</button>
        <button id="colony-name-submit" style="
          background: transparent;
          border: 1px solid #06b6d488;
          color: #06b6d4;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          padding: 6px 18px;
          cursor: pointer;
          border-radius: 2px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: background 0.2s;
        ">Found Colony</button>
      </div>
    </div>
  `,mp.appendChild(t),hp=_f(t);let n=t.querySelector(`#colony-name-input`),r=t.querySelector(`#colony-name-count`),i=t.querySelector(`#colony-name-submit`),a=t.querySelector(`#colony-name-skip`);n.addEventListener(`input`,()=>{r.textContent=`${n.value.length}/30`}),i.addEventListener(`click`,()=>{let t=n.value.trim();t.length>0&&e(t),bp()}),i.addEventListener(`mouseover`,()=>{i.style.background=`rgba(6,182,212,0.15)`}),i.addEventListener(`mouseout`,()=>{i.style.background=`transparent`}),a.addEventListener(`click`,bp),n.addEventListener(`keydown`,t=>{if(t.key===`Enter`){let t=n.value.trim();t.length>0&&e(t),bp()}}),requestAnimationFrame(()=>n.focus())}function bp(){if(!mp)return;hp?.(),hp=null,mp.style.opacity=`0`;let e=mp;setTimeout(()=>e.remove(),500),mp=null}var xp=null,Sp=null,Cp=!1;function wp(){return Cp}function Tp(){Cp=!1}function Ep(e){if(xp)return;Cp=!0;let t=`#a855f7`;xp=document.createElement(`div`),xp.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    font-family: 'Courier New', monospace;
    opacity: 0;
    transition: opacity 0.5s ease;
  `,document.body.appendChild(xp),requestAnimationFrame(()=>{xp&&(xp.style.opacity=`1`)});let n=document.createElement(`div`);n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-label`,`Colony Epithet`),n.setAttribute(`aria-modal`,`true`),n.setAttribute(`tabindex`,`-1`),n.style.cssText=`
    background: rgba(0, 4, 12, 0.98);
    border: 1px solid ${t};
    box-shadow: 0 0 60px ${t}22, inset 0 0 40px rgba(0,0,0,0.6);
    color: #e2e8f0;
    max-width: 460px;
    width: 90vw;
    padding: 36px 32px;
    border-radius: 2px;
    position: relative;
  `,n.innerHTML=w`
    <div style="font-size:9px; color:${t}; opacity:0.7; text-transform:uppercase; letter-spacing:3px; margin-bottom:6px;">
      ARIA — COLONY LEGACY
    </div>
    <div style="font-size:18px; font-weight:bold; color:${t}; margin-bottom:16px; letter-spacing:1px;">
      Colony Epithet
    </div>
    <p style="margin:0 0 20px; line-height:1.7; color:#94a3b8; font-size:12px;">
      Some colonies become legendary. The Dyson Swarm grows, and with it your place in history. What will yours be known for?
    </p>
    <input id="epithet-input" type="text" maxlength="${30}" placeholder="e.g. The Unyielding, Starforgers..." style="
      width: 100%;
      background: rgba(0,0,0,0.4);
      border: 1px solid ${t}44;
      border-radius: 2px;
      color: #e2e8f0;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      padding: 12px;
      outline: none;
      box-sizing: border-box;
      letter-spacing: 0.5px;
    " />
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px;">
      <span id="epithet-count" style="font-size:10px; color:#475569;">0/${30}</span>
      <div style="display:flex; gap:12px;">
        <button id="epithet-skip" style="
          background:none; border:none; color:#475569; cursor:pointer;
          font-family:'Courier New',monospace; font-size:10px; text-transform:uppercase; letter-spacing:1px;
        ">Skip</button>
        <button id="epithet-submit" style="
          background: transparent;
          border: 1px solid ${t}88;
          color: ${t};
          font-family: 'Courier New', monospace;
          font-size: 11px;
          padding: 6px 18px;
          cursor: pointer;
          border-radius: 2px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: background 0.2s;
        ">Claim Epithet</button>
      </div>
    </div>
  `,xp.appendChild(n),Sp=_f(n);let r=n.querySelector(`#epithet-input`),i=n.querySelector(`#epithet-count`),a=n.querySelector(`#epithet-submit`),o=n.querySelector(`#epithet-skip`);r.addEventListener(`input`,()=>{i.textContent=`${r.value.length}/30`}),a.addEventListener(`click`,()=>{let t=r.value.trim();t.length>0&&e(t),Dp()}),a.addEventListener(`mouseover`,()=>{a.style.background=`${t}22`}),a.addEventListener(`mouseout`,()=>{a.style.background=`transparent`}),o.addEventListener(`click`,Dp),r.addEventListener(`keydown`,t=>{if(t.key===`Enter`){let t=r.value.trim();t.length>0&&e(t),Dp()}}),requestAnimationFrame(()=>r.focus())}function Dp(){if(!xp)return;Sp?.(),Sp=null,xp.style.opacity=`0`;let e=xp;setTimeout(()=>e.remove(),500),xp=null}var Op=[],q=new Float32Array(4);function kp(e){q=e}function Ap(){return{latestAsteroidBuffer:null,latestAsteroidCount:0,latestRobotBuffer:null,latestRobotCount:0,latestThreatBuffer:null,latestThreatCount:0,lastStats:null,latestTick:0,latestRefined:{},latestUnlockedMask:0n,latestTechState:null,latestFactoryQueueLength:0,latestRobotCap:0,latestMegaProjects:[],latestBuildings:[],latestInboxSnapshot:null,latestFactionSnapshots:[],latestCultureState:null,latestHabitatState:null,followedRobotEid:null,isPlacingBase:!1,targetingRobotEid:null,isTargetingMode:!1,exploreRobotEid:null,isExploreMode:!1,factionClaims:[],playerTargetAsteroids:[],factionTerritories:[],pendingLoad:null,pendingFirstLaunch:!1,elapsed:0,speedMultiplier:1}}var jp=!1,Mp=[],Np=null,Pp=2e7;function Fp(e){Np=e}function Ip(){return jp}function Lp(e){Mp.push(e)}function Rp(){typeof document<`u`&&document.addEventListener(`visibilitychange`,zp)}function zp(){document.hidden?jp=!0:(jp&&Mp.length>0&&Bp(),jp=!1)}function Bp(){let e=Vp(Mp);if(Mp.length=0,!Np||!e)return;let t={id:Pp++,factionId:null,senderName:`ARIA`,type:`aria_auto`,subject:`[Welcome Back] Operations Summary`,body:e,priority:`normal`,tick:0,triaged:!0,triageResult:`relevant`,read:!1};Np({type:`sim:inbox_inject`,payload:{message:t}})}function Vp(e){if(e.length===0)return null;let t=[],n=[],r=[];for(let i of e)switch(i.type){case`research_complete`:t.push(i.name);break;case`building_built`:n.push(i.name);break;case`robot_built`:r.push(i.name);break}let i=[`Commander, while you were away your operation continued autonomously. Here is what happened:`,``];if(t.length>0&&i.push(`Research completed: ${t.join(`, `)}.`),n.length>0){let e=Hp(n),t=Object.entries(e).map(([e,t])=>t>1?`${t}x ${e}`:e);i.push(`Construction completed: ${t.join(`, `)}.`)}if(r.length>0){let e=Hp(r),t=Object.entries(e).map(([e,t])=>t>1?`${t}x ${e}`:e);i.push(`Robots produced: ${t.join(`, `)}.`)}return i.push(``,`All systems nominal. Awaiting your orders.`),i.join(`
`)}function Hp(e){let t={};for(let n of e)t[n]=(t[n]??0)+1;return t}function Up(){let e=document.createElement(`div`);return e.id=`webgl-context-lost-overlay`,Object.assign(e.style,{position:`fixed`,inset:`0`,display:`none`,alignItems:`center`,justifyContent:`center`,flexDirection:`column`,background:`rgba(0,0,0,0.88)`,color:`#e2e8f0`,fontFamily:`monospace`,fontSize:`1rem`,zIndex:`9999`,gap:`1rem`,textAlign:`center`,padding:`2rem`}),e}async function Wp(e,t={}){let n=new Le({canvas:e,antialias:!0,powerPreference:`high-performance`});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.toneMapping=4,n.toneMappingExposure=1;let r=new je;r.background=new A(8);let i=new Te(75,window.innerWidth/window.innerHeight,.1,5e5);i.position.set(0,50,50),i.lookAt(0,0,0);let a=new Ue(n),o=new Ze(r,i);a.addPass(o);let s=new Je(new Ce(window.innerWidth,window.innerHeight),.8,.4,.6);a.addPass(s);let c=new $e;a.addPass(c);let l=new Xe(16774368,2.5);l.position.set(1,.5,.3).normalize(),r.add(l);let u=new Xe(4482764,.6);u.position.set(-1,-.3,-.5).normalize(),r.add(u);let d=new Ye(3359846,.8);r.add(d),window.addEventListener(`resize`,()=>{let e=window.innerWidth,t=window.innerHeight;i.aspect=e/t,i.updateProjectionMatrix(),n.setSize(e,t),a.setSize(e,t),s.resolution.set(e,t)});let f=Up();document.body.appendChild(f);let p=null;return e.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),t.onContextLost?.(),f.innerHTML=`
      <div style="font-size:1.5rem;margin-bottom:0.5rem">&#9888; Graphics context lost</div>
      <div style="color:#94a3b8">Attempting to restore rendering&hellip;</div>
    `,f.style.display=`flex`,p=setTimeout(()=>{f.innerHTML=`
        <div style="font-size:1.5rem;margin-bottom:0.5rem">&#9888; Graphics context lost</div>
        <div style="color:#f87171;margin-bottom:1rem">Restore failed &mdash; please reload the page.</div>
        <button onclick="location.reload()" style="padding:0.5rem 1.25rem;background:#1e40af;color:#fff;border:none;border-radius:0.375rem;font-family:monospace;font-size:1rem;cursor:pointer">Reload</button>
      `},5e3)}),e.addEventListener(`webglcontextrestored`,()=>{p!==null&&(clearTimeout(p),p=null),f.style.display=`none`,t.onContextRestored?.()}),{renderer:n,scene:r,camera:i,composer:a,bloomPass:s,ambientLight:d,sunLight:l}}var Gp=50,Kp=2e5,qp=.08,Jp=.92,Yp=.5,Xp=.08,Zp=class e{camera;pivot=new Fe;zoomLevel=6;targetZoomLevel=6;panVelocity=new Fe;enabled=!0;followTarget=null;targetPivot=null;panStartPivot=new Fe;panDurationMs=0;panElapsedMs=0;keys=new Set;isDragging=!1;dragButton=-1;dragMoved=!1;lastMouse={x:0,y:0};dragStartMouse={x:0,y:0};static DRAG_THRESHOLD=5;isTouchPanning=!1;lastTouchX=0;lastTouchY=0;lastPinchDistance=0;constructor(e){this.camera=e,this.bindEvents()}onContextMenu=e=>{e.preventDefault()};bindEvents(){window.addEventListener(`wheel`,this.onWheel,{passive:!1}),window.addEventListener(`mousedown`,this.onMouseDown),window.addEventListener(`mousemove`,this.onMouseMove),window.addEventListener(`mouseup`,this.onMouseUp),window.addEventListener(`keydown`,this.onKeyDown),window.addEventListener(`keyup`,this.onKeyUp),window.addEventListener(`contextmenu`,this.onContextMenu),window.addEventListener(`touchstart`,this.onTouchStart,{passive:!1}),window.addEventListener(`touchmove`,this.onTouchMove,{passive:!1}),window.addEventListener(`touchend`,this.onTouchEnd,{passive:!1})}dispose(){window.removeEventListener(`wheel`,this.onWheel),window.removeEventListener(`mousedown`,this.onMouseDown),window.removeEventListener(`mousemove`,this.onMouseMove),window.removeEventListener(`mouseup`,this.onMouseUp),window.removeEventListener(`keydown`,this.onKeyDown),window.removeEventListener(`keyup`,this.onKeyUp),window.removeEventListener(`contextmenu`,this.onContextMenu),window.removeEventListener(`touchstart`,this.onTouchStart),window.removeEventListener(`touchmove`,this.onTouchMove),window.removeEventListener(`touchend`,this.onTouchEnd)}onTouchStart=e=>{if(this.enabled){if(e.touches.length===1)this.isTouchPanning=!0,this.lastTouchX=e.touches[0].clientX,this.lastTouchY=e.touches[0].clientY;else if(e.touches.length===2){this.isTouchPanning=!1;let t=e.touches[0].clientX-e.touches[1].clientX,n=e.touches[0].clientY-e.touches[1].clientY;this.lastPinchDistance=Math.sqrt(t*t+n*n)}}};onTouchMove=e=>{if(this.enabled){if(e.preventDefault(),e.touches.length===1&&this.isTouchPanning){let t=e.touches[0].clientX-this.lastTouchX,n=e.touches[0].clientY-this.lastTouchY;this.lastTouchX=e.touches[0].clientX,this.lastTouchY=e.touches[0].clientY;let r=this.getCurrentDistance()*.002;this.panVelocity.x-=t*r,this.panVelocity.z-=n*r}else if(e.touches.length===2){let t=e.touches[0].clientX-e.touches[1].clientX,n=e.touches[0].clientY-e.touches[1].clientY,r=Math.sqrt(t*t+n*n),i=this.lastPinchDistance-r;this.lastPinchDistance=r;let a=i/window.innerHeight*2;this.targetZoomLevel+=a,this.targetZoomLevel=Math.max(Math.log(Gp),Math.min(Math.log(Kp),this.targetZoomLevel))}}};onTouchEnd=e=>{e.touches.length===0?this.isTouchPanning=!1:e.touches.length===1&&(this.isTouchPanning=!0,this.lastTouchX=e.touches[0].clientX,this.lastTouchY=e.touches[0].clientY)};onWheel=e=>{this.enabled&&(e.target?.closest(`#hud-overlay`)||(e.preventDefault(),this.targetZoomLevel+=e.deltaY>0?qp:-qp,this.targetZoomLevel=Math.max(Math.log(Gp),Math.min(Math.log(Kp),this.targetZoomLevel))))};onMouseDown=e=>{this.enabled&&(e.target?.closest(`#hud-overlay [style*="pointer-events: auto"], #hud-overlay button, #hud-overlay input, #hud-overlay select`)||(e.button===0||e.button===1||e.button===2)&&(this.isDragging=!0,this.dragButton=e.button,this.lastMouse.x=e.clientX,this.lastMouse.y=e.clientY,this.dragStartMouse.x=e.clientX,this.dragStartMouse.y=e.clientY,this.dragMoved=!1))};onMouseMove=t=>{if(!this.enabled||!this.isDragging)return;if(this.dragButton===0&&!this.dragMoved){let n=Math.abs(t.clientX-this.dragStartMouse.x),r=Math.abs(t.clientY-this.dragStartMouse.y);if(n<e.DRAG_THRESHOLD&&r<e.DRAG_THRESHOLD)return;this.dragMoved=!0,this.lastMouse.x=t.clientX,this.lastMouse.y=t.clientY;return}let n=t.clientX-this.lastMouse.x,r=t.clientY-this.lastMouse.y;this.lastMouse.x=t.clientX,this.lastMouse.y=t.clientY;let i=this.getCurrentDistance()*.002;this.panVelocity.x-=n*i,this.panVelocity.z-=r*i};onMouseUp=e=>{e.button===this.dragButton&&(this.isDragging=!1,this.dragButton=-1)};onKeyDown=e=>{if(!this.enabled)return;let t=document.activeElement;t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||this.keys.add(e.key.toLowerCase())};onKeyUp=e=>{this.keys.delete(e.key.toLowerCase())};getCurrentDistance(){return Math.exp(this.zoomLevel)}update(e){if(!this.enabled)return;this.zoomLevel+=(this.targetZoomLevel-this.zoomLevel)*Xp;let t=this.getCurrentDistance();if(this.targetPivot){this.panElapsedMs+=e*1e3;let t=Math.min(this.panElapsedMs/this.panDurationMs,1),n=1-(1-t)**3;this.pivot.lerpVectors(this.panStartPivot,this.targetPivot,n),this.panVelocity.set(0,0,0),t>=1&&(this.targetPivot=null)}if(this.followTarget)this.pivot.copy(this.followTarget),this.panVelocity.set(0,0,0);else if(!this.targetPivot){let n=t*Yp*e;(this.keys.has(`w`)||this.keys.has(`arrowup`))&&(this.panVelocity.z-=n),(this.keys.has(`s`)||this.keys.has(`arrowdown`))&&(this.panVelocity.z+=n),(this.keys.has(`a`)||this.keys.has(`arrowleft`))&&(this.panVelocity.x-=n),(this.keys.has(`d`)||this.keys.has(`arrowright`))&&(this.panVelocity.x+=n),this.pivot.add(this.panVelocity),this.panVelocity.multiplyScalar(Jp)}this.camera.position.set(this.pivot.x,this.pivot.y+t*.8,this.pivot.z+t*.3),this.camera.lookAt(this.pivot)}setFollowTarget(e){this.followTarget=e,e&&this.panVelocity.set(0,0,0)}isFollowing(){return this.followTarget!==null}getState(){let e=this.getCurrentDistance(),t=e*Math.tan(this.camera.fov*Math.PI/360)*this.camera.aspect,n=e*Math.tan(this.camera.fov*Math.PI/360);return{pivot:this.pivot.clone(),zoomDistance:e,viewBoundsMin:new Fe(this.pivot.x-t,this.pivot.y-n,this.pivot.z-e),viewBoundsMax:new Fe(this.pivot.x+t,this.pivot.y+n,this.pivot.z+e)}}setPivot(e,t,n){this.pivot.set(e,t,n),this.targetPivot=null}panTo(e,t,n,r=800){this.panStartPivot.copy(this.pivot),this.targetPivot=new Fe(e,t,n),this.panDurationMs=r,this.panElapsedMs=0,this.followTarget=null,this.panVelocity.set(0,0,0)}setZoom(e){this.zoomLevel=e,this.targetZoomLevel=e}enable(){this.enabled=!0}disable(){this.enabled=!1}wasDragPanning(){return this.dragButton===0&&this.dragMoved}},Qp={0:new A(.3,.25,.2),1:new A(.5,.45,.4),2:new A(.7,.65,.55),3:new A(.4,.2,.5)},$p={0:0,1:0,2:.15,3:.25},em=5e3,tm=450*450,nm=550*550,rm=2700*2700,im=3300*3300,am=2700*2700,om=3300*3300-am;function sm(e,t){return t===void 0?e<500*500?0:e<3e3*3e3?1:2:t===0?e<nm?0:e<im?1:2:t===1?e<tm?0:e<im?1:2:e>=rm?2:e>=tm?1:0}var cm=`
  attribute float aPointSize;
  attribute vec3 aColor;
  varying vec3 vColor;
  void main() {
    vColor = aColor;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = max(1.5, aPointSize * (800.0 / -mvPosition.z));
    gl_Position = projectionMatrix * mvPosition;
  }
`,lm=`
  varying vec3 vColor;
  void main() {
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    if (r > 1.0) discard;
    float alpha = 1.0 - smoothstep(0.6, 1.0, r);
    gl_FragColor = vec4(vColor, alpha);
  }
`,um=class e{scene;buckets=new Map;meshGeometries=new Map;materials=new Map;lod2Material;entityLODs=new Map;seenEntities=new Set;regionBias=new A(.5,.45,.4);regionBiasStrength=0;predictedAnomalyIds=new Set;static _workColor=new A;static _transitGreen=new A(.2,.8,.3);static _transitRed=new A(.8,.2,.15);constructor(e){this.scene=e,this.lod2Material=new Me({vertexShader:cm,fragmentShader:lm,transparent:!0,depthWrite:!1}),this.createGeometries(),this.createMaterials()}createGeometries(){for(let e=0;e<4;e++){let t=new Ie(1,0);this.meshGeometries.set(`${e}_1`,t);let n=new Ie(1,2),r=n.attributes.position;for(let t=0;t<r.count;t++){let n=.85+Math.sin(t*17.3+e*5.7)*.15;r.setX(t,r.getX(t)*n),r.setY(t,r.getY(t)*n),r.setZ(t,r.getZ(t)*n)}n.computeVertexNormals(),this.meshGeometries.set(`${e}_0`,n)}}createMaterials(){for(let e=0;e<4;e++){let t=Qp[e]||new A(.5,.5,.5),n=$p[e]||0,r=new j({color:t,roughness:e===2?.3:.8,metalness:e===2?.7:.1,emissive:t.clone().multiplyScalar(n),emissiveIntensity:n,flatShading:!0});this.materials.set(e,r)}}getOrCreateMeshBucket(e,t){let n=`${e}_${t}`,r=this.buckets.get(n);if(!r){let t=new tt(this.meshGeometries.get(n),this.materials.get(e),em);t.count=0,t.frustumCulled=!1,this.scene.add(t),r={kind:`mesh`,mesh:t,count:0,dummy:new Pe,prevCount:-1,prevMatrixHash:-1,prevColorHash:-1},this.buckets.set(n,r)}return r}getOrCreatePointBucket(e){let t=`lod2_${e}`,n=this.buckets.get(t);if(!n){let e=new Ke,r=new Float32Array(em*3),i=new Float32Array(em*3),a=new Float32Array(em),o=new ze(r,3),s=new ze(i,3),c=new ze(a,1);o.usage=qe,s.usage=qe,c.usage=qe,e.setAttribute(`position`,o),e.setAttribute(`aColor`,s),e.setAttribute(`aPointSize`,c);let l=new Se(e,this.lod2Material);l.frustumCulled=!1,this.scene.add(l),n={kind:`points`,points:l,positions:r,colors:i,sizes:a,posAttr:o,colorAttr:s,sizeAttr:c,count:0,prevCount:-1,prevPosHash:-1},this.buckets.set(t,n)}return n}setRegionBias(e,t){this.regionBias.copy(e),this.regionBiasStrength=t}setPredictedAnomalyIds(e){this.predictedAnomalyIds=new Set(e)}computeLODSq(e,t){let n=sm(e,this.entityLODs.get(t));return this.entityLODs.set(t,n),n}static hashF32(e,t){let n=new Uint32Array(e.buffer,e.byteOffset,t),r=2166136261;for(let e=0;e<t;e++)r=Math.imul(r^n[e],16777619)>>>0;return r}updateFromBuffer(t,n,r){for(let e of this.buckets.values())e.count=0;this.seenEntities.clear();for(let i=0;i<n;i++){let n=i*11,a=t[n+0],o=t[n+1],s=t[n+2],c=t[n+3],l=t[n+4],u=t[n+5],d=t[n+6],f=t[n+7]>0,p=t[n+9]>0,m=t[n+10],h=o-r.x,g=s-r.y,_=c-r.z,v=h*h+g*g+_*_;if(v>1e5*1e5)continue;this.seenEntities.add(a);let y=this.computeLODSq(v,a),b=e._workColor;p?b.setRGB(.95,.75,.2):f?b.setRGB(.15,.14,.13):this.predictedAnomalyIds.has(a)&&d>0?b.setRGB(.1,.8,.7):d>0?b.setRGB(.5,.2,.8):(b.copy(Qp[u]??new A(.5,.5,.5)),this.regionBiasStrength>0&&b.lerp(this.regionBias,this.regionBiasStrength*.25),m>=.8?b.lerp(e._transitGreen,.25):m<=.3&&b.lerp(e._transitRed,.2*(1-m/.3)));let x=v>=729e4&&v<=1089e4,ee=x?Math.min(1,Math.max(0,(v-am)/om)):0;if(y===2||x){let e=this.getOrCreatePointBucket(u);if(e.count<em){let t=e.count*3;e.positions[t]=o,e.positions[t+1]=s,e.positions[t+2]=c;let n=x?ee:1;e.colors[t]=b.r*n,e.colors[t+1]=b.g*n,e.colors[t+2]=b.b*n,e.sizes[e.count]=l,e.count++}}if(y<=1||x){let e=y<=1?y:1,t=this.getOrCreateMeshBucket(u,e);if(t.count<em){let e=x?l*(1-ee):l;t.dummy.position.set(o,s,c),t.dummy.scale.setScalar(e),t.dummy.rotation.set(o*.01,s*.01,c*.01),t.dummy.updateMatrix(),t.mesh.setMatrixAt(t.count,t.dummy.matrix),t.mesh.setColorAt(t.count,b),t.count++}}}if(this.entityLODs.size>this.seenEntities.size+100)for(let e of this.entityLODs.keys())this.seenEntities.has(e)||this.entityLODs.delete(e);for(let t of this.buckets.values())if(t.kind===`mesh`){if(t.mesh.count=t.count,t.count>0){let n=t.mesh.instanceMatrix.array,r=e.hashF32(n,t.count*16),i=t.count!==t.prevCount;if((i||r!==t.prevMatrixHash)&&(t.mesh.instanceMatrix.needsUpdate=!0,t.prevMatrixHash=r),t.mesh.instanceColor){let n=t.mesh.instanceColor.array,r=e.hashF32(n,t.count*3);(i||r!==t.prevColorHash)&&(t.mesh.instanceColor.needsUpdate=!0,t.prevColorHash=r)}t.prevCount=t.count}}else if(t.points.geometry.setDrawRange(0,t.count),t.count>0){let n=e.hashF32(t.positions,t.count*3);(t.count!==t.prevCount||n!==t.prevPosHash)&&(t.posAttr.needsUpdate=!0,t.colorAttr.needsUpdate=!0,t.sizeAttr.needsUpdate=!0,t.prevPosHash=n),t.prevCount=t.count}}dispose(){for(let e of this.buckets.values())e.kind===`mesh`?(this.scene.remove(e.mesh),e.mesh.dispose()):(this.scene.remove(e.points),e.points.geometry.dispose());for(let e of this.meshGeometries.values())e.dispose();for(let e of this.materials.values())e.dispose();this.lod2Material.dispose(),this.buckets.clear(),this.entityLODs.clear()}},dm=4e3,fm=64,pm=class{starField;dustPlane;group;dustCanvas;dustCtx;dustTexture;dustOverlay;constructor(e){this.group=new Ve,this.group.renderOrder=-1;let t=3e3,n=new Float32Array(t*3),r=new Float32Array(t),i=new Float32Array(t*3);for(let e=0;e<t;e++){let t=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),o=2e5+Math.random()*1e5;n[e*3]=o*Math.sin(a)*Math.cos(t),n[e*3+1]=o*Math.sin(a)*Math.sin(t),n[e*3+2]=o*Math.cos(a),r[e]=1+Math.random()*2.5;let s=Math.random();s<.7?(i[e*3]=.9+Math.random()*.1,i[e*3+1]=.9+Math.random()*.1,i[e*3+2]=1):s<.85?(i[e*3]=1,i[e*3+1]=.8+Math.random()*.2,i[e*3+2]=.6+Math.random()*.2):(i[e*3]=.6+Math.random()*.2,i[e*3+1]=.7+Math.random()*.2,i[e*3+2]=1)}let a=new Ke;a.setAttribute(`position`,new ze(n,3)),a.setAttribute(`size`,new ze(r,1)),a.setAttribute(`color`,new ze(i,3)),this.starField=new Se(a,new Me({vertexShader:`
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vSize;
        void main() {
          vColor = color;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          float rawSize = size * (300.0 / -mvPos.z);
          // Minimum 1.5px to prevent sub-pixel aliasing / moire patterns
          gl_PointSize = clamp(rawSize, 1.5, 5.0);
          vSize = gl_PointSize;
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vSize;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          // Softer falloff for small stars to reduce aliasing
          float softness = mix(0.35, 0.5, clamp((vSize - 1.5) / 3.0, 0.0, 1.0));
          float alpha = 1.0 - smoothstep(0.0, softness, d);
          gl_FragColor = vec4(vColor, alpha * 0.9);
        }
      `,transparent:!0,depthWrite:!1,blending:2})),this.group.add(this.starField),this.dustPlane=new k(new Ge(4e5,4e5),new Me({vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        uniform float uTime;

        // Simple noise for dust
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          // 2 octaves instead of 4 — halves GPU sin() cost with negligible visual difference
          for (int i = 0; i < 2; i++) {
            v += a * noise(p);
            p *= 2.0;
            a *= 0.5;
          }
          return v;
        }

        uniform vec3 uNebulaTint;
        uniform float uNebulaTintStrength;

        void main() {
          vec2 p = vUv * 3.0;
          float n = fbm(p + uTime * 0.01);
          // Base nebula color blended with per-region tint
          vec3 baseDark = vec3(0.02, 0.01, 0.04);
          vec3 baseBright = vec3(0.06, 0.03, 0.08);
          vec3 nebula = mix(baseDark, baseBright, n);
          // Apply region tint on top
          vec3 tinted = mix(nebula, uNebulaTint, uNebulaTintStrength * 0.6);
          float alpha = n * (0.12 + uNebulaTintStrength * 0.08);
          gl_FragColor = vec4(tinted, alpha);
        }
      `,uniforms:{uTime:{value:0},uNebulaTint:{value:[.06,.03,.08]},uNebulaTintStrength:{value:0}},transparent:!0,depthWrite:!1,side:2})),this.dustPlane.position.y=-5e3,this.dustPlane.rotation.x=-Math.PI/2,this.group.add(this.dustPlane);let o=typeof OffscreenCanvas<`u`;this.dustCanvas=o?new OffscreenCanvas(fm,fm):document.createElement(`canvas`),o||(this.dustCanvas.width=fm,this.dustCanvas.height=fm),this.dustCtx=this.dustCanvas.getContext(`2d`),this.dustTexture=new et(this.dustCanvas),this.dustOverlay=new k(new Ge(4e5,4e5),new Me({vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D uDustMap;
        uniform float uDustIntensity;
        void main() {
          float d = texture2D(uDustMap, vUv).r;
          // Orange-brown tint for dust, opacity scales with density
          vec3 dustColor = vec3(0.6, 0.35, 0.1);
          float alpha = d * uDustIntensity * 0.6;
          gl_FragColor = vec4(dustColor, alpha);
        }
      `,uniforms:{uDustMap:{value:this.dustTexture},uDustIntensity:{value:1}},transparent:!0,depthWrite:!1,side:2})),this.dustOverlay.position.y=-4900,this.dustOverlay.rotation.x=-Math.PI/2,this.group.add(this.dustOverlay),e.add(this.group)}setNebulaTint(e,t,n,r){let i=this.dustPlane.material,a=i.uniforms.uNebulaTint.value;a[0]=e,a[1]=t,a[2]=n,i.uniforms.uNebulaTintStrength.value=r}updateDustMap(e){let t=this.dustCtx,n=fm;if(t.clearRect(0,0,n,n),e.length===0){this.dustTexture.needsUpdate=!0;return}let r=-5e4/dm,i=5e4/dm-r,a=t.createImageData(n,n),o=a.data;for(let t of e){let e=Math.floor((t.gx-r)/i*n),a=Math.floor((t.gz-r)/i*n);if(e<0||e>=n-1||a<0||a>=n-1)continue;let s=Math.min(255,Math.round(Math.min(1,t.density)*255));for(let t=0;t<2;t++)for(let r=0;r<2;r++){let i=((a+t)*n+(e+r))*4;o[i]=s,o[i+1]=s,o[i+2]=s,o[i+3]=255}}t.putImageData(a,0,0),this.dustTexture.needsUpdate=!0}update(e,t){this.starField.position.set(e.x*.001,e.y*.001,e.z*.001),this.dustPlane.position.x=e.x*.05,this.dustPlane.position.z=e.z*.05,this.dustOverlay.position.x=e.x*.05,this.dustOverlay.position.z=e.z*.05;let n=this.dustPlane.material;n.uniforms.uTime.value=t}dispose(){this.starField.geometry.dispose(),this.starField.material.dispose(),this.dustPlane.geometry.dispose(),this.dustPlane.material.dispose(),this.dustOverlay.geometry.dispose(),this.dustOverlay.material.dispose(),this.dustTexture.dispose()}},mm=class{points;material;particleCount;constructor(e,t=8e3){this.particleCount=t;let n=new Float32Array(t);for(let e=0;e<t;e++)n[e]=e;let r=new Ke;r.setAttribute(`particleIndex`,new ze(n,1)),r.setAttribute(`position`,new ze(new Float32Array(t*3),3)),this.material=new Me({vertexShader:`
        attribute float particleIndex;
        uniform float uTime;
        uniform vec3 uCameraPos;
        uniform float uZoomDistance;
        uniform float uMaxActive;
        varying float vAlpha;
        varying vec3 vColor;

        // Hash function for deterministic particle placement
        float hash(float n) {
          return fract(sin(n) * 43758.5453);
        }

        vec3 hashPosition(float idx) {
          return vec3(
            hash(idx * 1.123),
            hash(idx * 2.456),
            hash(idx * 3.789)
          );
        }

        void main() {
          float idx = particleIndex;

          // Base position from hash
          vec3 basePos = hashPosition(idx);

          // Spread based on zoom distance
          float spread = max(uZoomDistance * 2.0, 5000.0);
          vec3 pos = (basePos - 0.5) * spread + uCameraPos;

          // Slow drift over time
          float driftSpeed = hash(idx * 4.567) * 0.5 + 0.1;
          pos.x += sin(uTime * driftSpeed + idx) * 10.0;
          pos.y += cos(uTime * driftSpeed * 0.7 + idx * 1.3) * 5.0;
          pos.z += sin(uTime * driftSpeed * 0.5 + idx * 2.1) * 10.0;

          // Size and alpha based on zoom
          float baseSize = hash(idx * 5.678) * 2.0 + 0.5;
          float zoomScale = clamp(uZoomDistance / 1000.0, 0.5, 5.0);
          float size = baseSize * zoomScale;

          // Distance-based fade
          float dist = length(pos - uCameraPos);
          float fadeStart = spread * 0.4;
          float fadeEnd = spread * 0.5;
          vAlpha = 1.0 - smoothstep(fadeStart, fadeEnd, dist);
          vAlpha *= 0.3; // keep subtle
          // Density culling: hide particles above the active threshold
          vAlpha *= step(particleIndex, uMaxActive - 0.5);

          // Color variation: mostly grey dust, some with warm/cool tints
          float colorHash = hash(idx * 6.789);
          if (colorHash < 0.7) {
            vColor = vec3(0.4, 0.38, 0.36);
          } else if (colorHash < 0.85) {
            vColor = vec3(0.5, 0.4, 0.3);
          } else {
            vColor = vec3(0.3, 0.35, 0.45);
          }

          // Skip rasterization for invisible particles (density-culled or fully faded)
          if (vAlpha <= 0.0) {
            gl_PointSize = 0.0;
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (200.0 / -mvPos.z);
          gl_PointSize = clamp(gl_PointSize, 0.5, 6.0);
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float alpha = vAlpha * (1.0 - smoothstep(0.2, 0.5, d));
          gl_FragColor = vec4(vColor, alpha);
        }
      `,uniforms:{uTime:{value:0},uCameraPos:{value:new Fe},uZoomDistance:{value:1e3},uMaxActive:{value:t}},transparent:!0,depthWrite:!1,blending:2}),this.points=new Se(r,this.material),this.points.frustumCulled=!0,r.boundingSphere=new De(new Fe,5e3),e.add(this.points)}setDensity(e){this.material.uniforms.uMaxActive.value=Math.round(e*this.particleCount)}update(e,t,n){this.material.uniforms.uTime.value=n,this.material.uniforms.uCameraPos.value.copy(e),this.material.uniforms.uZoomDistance.value=t;let r=Math.max(t*2,5e3),i=this.points.geometry.boundingSphere;i.center.copy(e),i.radius=r*.5}dispose(){this.points.geometry.dispose(),this.material.dispose()}},hm=64,gm=20,_m=hm*gm,vm=class{points;material;emitterPosData;emitterPosAttr;constructor(e){let t=new Float32Array(_m);for(let e=0;e<_m;e++)t[e]=e*137.508;this.emitterPosData=new Float32Array(_m*3).fill(1e6);let n=new Float32Array(_m*3),r=new Ke;r.setAttribute(`position`,new ze(n,3)),this.emitterPosAttr=new ze(this.emitterPosData,3),this.emitterPosAttr.setUsage(qe),r.setAttribute(`emitterPos`,this.emitterPosAttr),r.setAttribute(`particleSeed`,new ze(t,1)),this.material=new Me({vertexShader:`
        attribute vec3 emitterPos;
        attribute float particleSeed;
        uniform float uTime;
        varying float vAlpha;
        varying vec3 vColor;

        float hash(float n) { return fract(sin(n) * 43758.5453); }

        void main() {
          float s = particleSeed;

          // Spherical direction for this spark
          float a1 = hash(s) * 6.2832;
          float a2 = hash(s + 1.0) * 3.1416;
          float speed = hash(s + 2.0) * 0.7 + 0.3;

          // Cycling life phase [0, 1)
          float rate = hash(s + 3.0) * 2.5 + 1.5;
          float life = fract(uTime * rate + hash(s + 4.0));

          // Fly outward
          float radius = life * 14.0 * speed;
          vec3 dir = normalize(vec3(
            sin(a2) * cos(a1),
            cos(a2),
            sin(a2) * sin(a1)
          ));
          vec3 pos = emitterPos + dir * radius;

          // Fade as spark ages
          vAlpha = (1.0 - smoothstep(0.5, 1.0, life)) * 0.95;

          // Orange -> yellow-white gradient
          float ct = hash(s + 5.0);
          vColor = mix(vec3(1.0, 0.3, 0.0), vec3(1.0, 0.95, 0.4), ct * (1.0 - life * 0.6));

          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = clamp(1.8 * (1.0 - life * 0.6) * (300.0 / -mvPos.z), 1.0, 8.0);
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float a = vAlpha * (1.0 - smoothstep(0.1, 0.5, d));
          gl_FragColor = vec4(vColor, a);
        }
      `,uniforms:{uTime:{value:0}},transparent:!0,depthWrite:!1,blending:2}),this.points=new Se(r,this.material),this.points.frustumCulled=!1,e.add(this.points)}update(e,t,n){this.material.uniforms.uTime.value=n;let r=0,i=[],a=[],o=[];for(let n=0;n<t&&r<hm;n++)f(e,n)===2&&(i.push(g(e,n)),a.push(y(e,n)),o.push(s(e,n)),r++);for(let e=0;e<hm;e++){let t=e<r,n=t?i[e]:1e6,s=t?a[e]:1e6,c=t?o[e]:1e6;for(let t=0;t<gm;t++){let r=(e*gm+t)*3;this.emitterPosData[r]=n,this.emitterPosData[r+1]=s,this.emitterPosData[r+2]=c}}this.emitterPosAttr.needsUpdate=!0}dispose(){this.points.geometry.dispose(),this.material.dispose()}};Math.PI/6,Math.PI/2,Math.PI*2;var ym=64,bm=10,xm=ym*bm,Sm=new Set([i.MOVING_TO,i.HAULING,i.RETURNING]),Cm=class{points;material;emitterPosData;emitterRotData;emitterPosAttr;emitterRotAttr;constructor(e){let t=new Float32Array(xm);for(let e=0;e<xm;e++)t[e]=e*97.321;this.emitterPosData=new Float32Array(xm*3).fill(1e6),this.emitterRotData=new Float32Array(xm).fill(0);let n=new Float32Array(xm*3),r=new Ke;r.setAttribute(`position`,new ze(n,3)),this.emitterPosAttr=new ze(this.emitterPosData,3),this.emitterPosAttr.setUsage(qe),r.setAttribute(`emitterPos`,this.emitterPosAttr),this.emitterRotAttr=new ze(this.emitterRotData,1),this.emitterRotAttr.setUsage(qe),r.setAttribute(`emitterRot`,this.emitterRotAttr),r.setAttribute(`particleSeed`,new ze(t,1)),this.material=new Me({vertexShader:`
        attribute vec3 emitterPos;
        attribute float emitterRot;
        attribute float particleSeed;
        uniform float uTime;
        varying float vAlpha;
        varying vec3 vColor;

        float hash(float n) { return fract(sin(n) * 43758.5453); }

        void main() {
          float s = particleSeed;

          // Life phase cycling quickly for a flickery thruster look
          float rate = hash(s + 0.0) * 4.0 + 3.0;
          float life = fract(uTime * rate + hash(s + 1.0));

          // Offset behind the robot: -forward direction
          // With rotation.y = emitterRot, forward = (sin(rot), 0, cos(rot))
          float trailDist = life * 8.0 + 1.5;
          float sideways = (hash(s + 2.0) - 0.5) * 2.5;
          vec3 behind = vec3(
            -sin(emitterRot) * trailDist + cos(emitterRot) * sideways,
            (hash(s + 3.0) - 0.5) * 2.0,
            -cos(emitterRot) * trailDist - sin(emitterRot) * sideways
          );
          vec3 pos = emitterPos + behind;

          // Fade: bright near robot, dim as trail extends
          vAlpha = (1.0 - smoothstep(0.0, 1.0, life)) * 0.85;

          // Blue -> white-cyan thruster color
          float ct = hash(s + 4.0);
          vColor = mix(vec3(0.3, 0.7, 1.0), vec3(0.8, 0.95, 1.0), ct * (1.0 - life));

          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = clamp(1.5 * (1.0 - life * 0.8) * (300.0 / -mvPos.z), 1.0, 6.0);
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float a = vAlpha * (1.0 - smoothstep(0.0, 0.5, d));
          gl_FragColor = vec4(vColor, a);
        }
      `,uniforms:{uTime:{value:0}},transparent:!0,depthWrite:!1,blending:2}),this.points=new Se(r,this.material),this.points.frustumCulled=!1,e.add(this.points)}update(e,t,n){this.material.uniforms.uTime.value=n;let r=0,i=[],a=[],o=[],c=[];for(let n=0;n<t&&r<ym;n++)Sm.has(f(e,n))&&(i.push(g(e,n)),a.push(y(e,n)),o.push(s(e,n)),c.push(v(e,n)),r++);for(let e=0;e<ym;e++){let t=e<r,n=t?i[e]:1e6,s=t?a[e]:1e6,l=t?o[e]:1e6,u=t?c[e]:0;for(let t=0;t<bm;t++){let r=e*bm+t,i=r*3;this.emitterPosData[i]=n,this.emitterPosData[i+1]=s,this.emitterPosData[i+2]=l,this.emitterRotData[r]=u}}this.emitterPosAttr.needsUpdate=!0,this.emitterRotAttr.needsUpdate=!0}dispose(){this.points.geometry.dispose(),this.material.dispose()}},wm={0:new A(.2,.8,.3),1:new A(.9,.6,.1),2:new A(.3,.5,.9)},Tm={0:-.05,1:0,2:.05},Em=500,Dm=class{scene;meshes=new Map;dummy=new Pe;counts=new Map;instanceEids=new Map;activeColors={0:wm[0].clone(),1:wm[1].clone(),2:wm[2].clone()};currentPaletteId=null;constructor(e){this.scene=e,this.createMeshes()}createMeshes(){let e=[new Ee(3,0),new Qe(5,3,5),new Qe(7,4,9)];for(let t=0;t<3;t++){let n=wm[t]||new A(1,1,1),r=new j({color:n,emissive:n.clone().multiplyScalar(.3),emissiveIntensity:.3,metalness:.6,roughness:.3}),i=new tt(e[t],r,Em);i.count=0,i.frustumCulled=!1,i.boundingSphere=new De(new Fe(0,0,0),1e6),this.scene.add(i),this.meshes.set(t,i)}}updateFromBuffer(e,t){for(let[e]of this.meshes)this.counts.set(e,0),this.instanceEids.set(e,[]);for(let n=0;n<t;n++){let t=b(e,n),r=g(e,n),i=y(e,n),o=s(e,n),c=v(e,n),l=a(e,n),u=f(e,n);h(e,n);let d=this.meshes.get(l);if(!d)continue;let p=this.counts.get(l)||0;if(p>=Em)continue;this.dummy.position.set(r,i,o),this.dummy.rotation.set(0,c,0),this.dummy.updateMatrix(),d.setMatrixAt(p,this.dummy.matrix);let m=this.instanceEids.get(l);m[p]=t;let _=this.activeColors[l]||new A(1,1,1);u===6?d.setColorAt(p,new A(1,.1,.1)):u===5?d.setColorAt(p,_.clone().multiplyScalar(.5)):d.setColorAt(p,_),this.counts.set(l,p+1)}for(let[e,t]of this.meshes){let n=this.counts.get(e)||0;t.count=n,n>0&&(t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0))}}getMeshes(){return this.meshes}getInstanceEid(e,t){return this.instanceEids.get(e)?.[t]??-1}setFleetColor(e){if(e!==this.currentPaletteId){if(this.currentPaletteId=e,e){let t=up(e);if(!t)return;let n=new A(t.primary),r={h:0,s:0,l:0};n.getHSL(r);for(let e=0;e<3;e++){let t=(r.h+(Tm[e]||0)+1)%1;this.activeColors[e].setHSL(t,r.s,r.l)}}else for(let e=0;e<3;e++)this.activeColors[e].copy(wm[e]);for(let e=0;e<3;e++){let t=this.meshes.get(e);if(!t)continue;let n=t.material;n.color.copy(this.activeColors[e]),n.emissive.copy(this.activeColors[e]).multiplyScalar(.3)}}}dispose(){for(let e of this.meshes.values())this.scene.remove(e),e.geometry.dispose(),e.material.dispose(),e.dispose()}},Om=4500223,km=2254506,Am=8965375,jm=4491468,Mm=class{group;ringMat;hubMat;currentPaletteId=null;constructor(e,t,n,r){this.group=new Ve,this.group.position.set(t,n,r);let i=new it(15,2,8,32);this.ringMat=new j({color:Om,emissive:km,emissiveIntensity:.8,metalness:.8,roughness:.2});let a=new k(i,this.ringMat);a.rotation.x=Math.PI/2,this.group.add(a);let o=new Oe(5,16,16);this.hubMat=new j({color:Am,emissive:jm,emissiveIntensity:.6,metalness:.7,roughness:.3}),this.group.add(new k(o,this.hubMat));let s=new k(new Oe(1,8,8),new j({color:16777215,emissive:16777215,emissiveIntensity:2}));s.position.y=10,this.group.add(s),e.add(this.group)}update(e){this.group.rotation.y+=.002}setFleetColor(e){if(e!==this.currentPaletteId)if(this.currentPaletteId=e,!e)this.ringMat.color.set(Om),this.ringMat.emissive.set(km),this.hubMat.color.set(Am),this.hubMat.emissive.set(jm);else{let t=up(e);if(!t)return;let n=new A(t.accent),r=new A(t.glow);this.ringMat.color.copy(n),this.ringMat.emissive.copy(r),this.hubMat.color.copy(n).lerp(new A(16777215),.3),this.hubMat.emissive.copy(r)}}dispose(){this.group.traverse(e=>{let t=e;t.isMesh&&(t.geometry.dispose(),t.material.dispose())}),this.group.parent?.remove(this.group)}},Nm=[new A(1,.6,.1),new A(1,.9,.2),new A(1,.15,.15),new A(.6,.3,1)],Pm=8,Fm=new Ee(6,0),Im=new Ae(25,30,32),Lm=class{scene;visuals=[];activeCount=0;constructor(e){this.scene=e;for(let t=0;t<Pm;t++){let t=new Re({color:16711680,dashSize:20,gapSize:10,transparent:!0,opacity:.7,depthWrite:!1}),n=new Ke;n.setAttribute(`position`,new He([0,0,0,0,0,0],3));let r=new rt(n,t);r.computeLineDistances(),r.visible=!1,r.frustumCulled=!1,e.add(r);let i=new we({color:16711680,transparent:!0,opacity:.25,depthWrite:!1}),a=new k(Im,i);a.rotation.x=-Math.PI/2,a.visible=!1,a.frustumCulled=!1,e.add(a);let o=new we({color:16711680,transparent:!0,opacity:.9,depthWrite:!1}),s=new k(Fm,o);s.visible=!1,s.frustumCulled=!1,e.add(s),this.visuals.push({trajectoryLine:r,trajectoryMat:t,warningRing:a,warningMat:i,beacon:s,beaconMat:o})}}updateFromBuffer(e,t,n){let r=Math.min(t,Pm);for(let t=0;t<r;t++){let r=this.visuals[t],i=u(e,t),a=l(e,t),o=Nm[i]??Nm[0],s=p(e,t),f=x(e,t),h=c(e,t),g=_(e,t),v=m(e,t),y=d(e,t),b=r.trajectoryLine.geometry.getAttribute(`position`);b.setXYZ(0,s,f+2,h),b.setXYZ(1,g,v+2,y),b.needsUpdate=!0,r.trajectoryLine.computeLineDistances(),r.trajectoryMat.color.copy(o),r.trajectoryMat.opacity=.3+a*.5,r.trajectoryLine.visible=!0,r.warningRing.position.set(g,v+.5,y);let ee=1+.15*Math.sin(n*3+t*1.5),S=(.6+a*.8)*ee;r.warningRing.scale.set(S,S,S),r.warningMat.color.copy(o),r.warningMat.opacity=.1+a*.3,r.warningRing.visible=!0;let C=s+(g-s)*a,w=f+(v-f)*a+8,T=h+(y-h)*a;r.beacon.position.set(C,w,T),r.beacon.rotation.y=n*2+t,r.beacon.rotation.z=n*1.5;let te=.8+.3*Math.sin(n*5+t*2);r.beacon.scale.setScalar(te),r.beaconMat.color.copy(o),r.beacon.visible=!0}for(let e=r;e<this.activeCount;e++){let t=this.visuals[e];t.trajectoryLine.visible=!1,t.warningRing.visible=!1,t.beacon.visible=!1}this.activeCount=r}dispose(){for(let e of this.visuals)this.scene.remove(e.trajectoryLine),e.trajectoryLine.geometry.dispose(),e.trajectoryLine.material.dispose(),this.scene.remove(e.warningRing),e.warningMat.dispose(),this.scene.remove(e.beacon),e.beaconMat.dispose()}},Rm=[[14250,`kindling_ring`],[16500,`shardfall_gap`],[23750,`consortium_fields`],[27250,`pale_meridian`],[38750,`veil_reach`],[1/0,`the_forgetting`]];function zm(e){for(let[t,n]of Rm)if(e<t)return n;return`the_forgetting`}var Bm={kindling_ring:{name:`The Kindling Ring`,ambientColor:[.28,.18,.1],ambientIntensity:.9,nebulaTint:[.55,.3,.08],nebulaStrength:.5,asteroidColorBias:[.55,.35,.12],asteroidBiasStrength:.18},shardfall_gap:{name:`Shardfall Gap`,ambientColor:[.18,.22,.32],ambientIntensity:.7,nebulaTint:[.7,.72,.75],nebulaStrength:.55,asteroidColorBias:[.6,.62,.65],asteroidBiasStrength:.22},consortium_fields:{name:`The Consortium Fields`,ambientColor:[.2,.2,.22],ambientIntensity:.85,nebulaTint:[.35,.35,.4],nebulaStrength:.4,asteroidColorBias:[.5,.48,.45],asteroidBiasStrength:.15},pale_meridian:{name:`The Pale Meridian`,ambientColor:[.1,.18,.3],ambientIntensity:.65,nebulaTint:[.2,.5,.65],nebulaStrength:.45,asteroidColorBias:[.25,.5,.6],asteroidBiasStrength:.16},veil_reach:{name:`Veil Reach`,ambientColor:[.1,.08,.25],ambientIntensity:.7,nebulaTint:[.2,.1,.4],nebulaStrength:.5,asteroidColorBias:[.35,.15,.5],asteroidBiasStrength:.2},the_forgetting:{name:`The Forgetting`,ambientColor:[.05,.04,.1],ambientIntensity:.5,nebulaTint:[.1,.08,.18],nebulaStrength:.6,asteroidColorBias:[.12,.1,.15],asteroidBiasStrength:.25}},Vm=2e3,Hm=.04,Um=class{ambientLight;sunLight;skybox;currentAmbientColor=new A(.2,.2,.28);currentAmbientIntensity=.8;currentNebulaTint=new A(.1,.05,.18);currentNebulaStrength=.4;_currentAsteroidBias=new A(.5,.45,.4);_currentAsteroidBiasStrength=.15;targetAmbientColor=new A;targetNebulaTint=new A;_scratchA=new A;_scratchB=new A;constructor(e,t,n){this.ambientLight=e,this.sunLight=t,this.skybox=n}update(e){let t=Math.sqrt(e.x*e.x+e.z*e.z),n=this._blendedVisualAt(t);this.targetAmbientColor.setRGB(n.ambientColor[0],n.ambientColor[1],n.ambientColor[2]),this.targetNebulaTint.setRGB(n.nebulaTint[0],n.nebulaTint[1],n.nebulaTint[2]),this.currentAmbientColor.lerp(this.targetAmbientColor,Hm),this.currentAmbientIntensity+=(n.ambientIntensity-this.currentAmbientIntensity)*Hm,this.currentNebulaTint.lerp(this.targetNebulaTint,Hm),this.currentNebulaStrength+=(n.nebulaStrength-this.currentNebulaStrength)*Hm,this._currentAsteroidBias.setRGB(n.asteroidColorBias[0],n.asteroidColorBias[1],n.asteroidColorBias[2]),this._currentAsteroidBiasStrength=n.asteroidBiasStrength,this.ambientLight.color.copy(this.currentAmbientColor),this.ambientLight.intensity=this.currentAmbientIntensity,this._applyRegionalSunTint(n),this.skybox.setNebulaTint(this.currentNebulaTint.r,this.currentNebulaTint.g,this.currentNebulaTint.b,this.currentNebulaStrength)}get asteroidBiasColor(){return this._currentAsteroidBias}get asteroidBiasStrength(){return this._currentAsteroidBiasStrength}_blendedVisualAt(e){let t=Bm[zm(e)];for(let[t]of Rm){let n=Math.abs(e-t);if(n<Vm&&t!==1/0){let r=n/Vm,i=e<t?e:e-Vm*2,a=e>=t?e:e+Vm*2,o=zm(i),s=zm(a);if(o===s)continue;let c=e<t?.5+r*.5:.5-r*.5;return this._blend(Bm[o],Bm[s],c)}}return t}_blend(e,t,n){let r=(e,t)=>e*n+t*(1-n);return{name:e.name,ambientColor:[r(e.ambientColor[0],t.ambientColor[0]),r(e.ambientColor[1],t.ambientColor[1]),r(e.ambientColor[2],t.ambientColor[2])],ambientIntensity:r(e.ambientIntensity,t.ambientIntensity),nebulaTint:[r(e.nebulaTint[0],t.nebulaTint[0]),r(e.nebulaTint[1],t.nebulaTint[1]),r(e.nebulaTint[2],t.nebulaTint[2])],nebulaStrength:r(e.nebulaStrength,t.nebulaStrength),asteroidColorBias:[r(e.asteroidColorBias[0],t.asteroidColorBias[0]),r(e.asteroidColorBias[1],t.asteroidColorBias[1]),r(e.asteroidColorBias[2],t.asteroidColorBias[2])],asteroidBiasStrength:r(e.asteroidBiasStrength,t.asteroidBiasStrength)}}_applyRegionalSunTint(e){let t=e.ambientColor[0]-e.ambientColor[2],n=.96-t*.04,r=.88+t*.1;this._scratchA.setRGB(1,Math.max(.85,n),Math.max(.75,r)),this.sunLight.color.lerp(this._scratchA,Hm*.5)}},Wm=class{id;group;outerSphere;innerSphere;coronaRing;constructor(e,t){this.id=t.id,this.group=new Ve,this.outerSphere=new k(new Oe(t.radius,32,24),new j({color:8939263,emissive:4465322,emissiveIntensity:.4,transparent:!0,opacity:.12,side:2,depthWrite:!1})),this.group.add(this.outerSphere),this.innerSphere=new k(new Oe(t.radius*.3,24,16),new j({color:13413119,emissive:10053375,emissiveIntensity:1.2,transparent:!0,opacity:.35,depthWrite:!1})),this.group.add(this.innerSphere),this.coronaRing=new k(new it(t.radius*.7,t.radius*.04,8,64),new j({color:11189247,emissive:6719743,emissiveIntensity:.8,transparent:!0,opacity:.5,depthWrite:!1})),this.coronaRing.rotation.x=Math.PI*.3,this.group.add(this.coronaRing),this.group.position.set(t.x,t.y,t.z),e.add(this.group)}update(e){this.group.position.set(e.x,e.y,e.z),this.outerSphere.rotation.y+=.001,this.outerSphere.rotation.x+=5e-4,this.innerSphere.rotation.y-=.002,this.coronaRing.rotation.z+=.003;let t=.5+.5*Math.sin(e.phase);this.outerSphere.material.opacity=.08+.06*t,this.innerSphere.material.emissiveIntensity=.8+.6*t,this.coronaRing.material.opacity=.35+.2*t}dispose(e){e.remove(this.group),this.outerSphere.geometry.dispose(),this.outerSphere.material.dispose(),this.innerSphere.geometry.dispose(),this.innerSphere.material.dispose(),this.coronaRing.geometry.dispose(),this.coronaRing.material.dispose()}},Gm=class{id;group;hull;innerGlow;ring;constructor(e,t){this.id=t.id,this.group=new Ve,this.hull=new k(new Ee(t.radius,1),new j({color:1118498,emissive:3359914,emissiveIntensity:.6,transparent:!0,opacity:.25,wireframe:!0,depthWrite:!1})),this.group.add(this.hull),this.innerGlow=new k(new Ee(t.radius*.35,0),new j({color:4482815,emissive:2245836,emissiveIntensity:1.5,transparent:!0,opacity:.4,depthWrite:!1})),this.group.add(this.innerGlow),this.ring=new k(new Ae(t.radius*.6,t.radius*.65,64),new j({color:6719743,emissive:4482781,emissiveIntensity:1,transparent:!0,opacity:.5,side:2,depthWrite:!1})),this.ring.rotation.x=Math.PI*.5,this.group.add(this.ring),this.group.position.set(t.x,t.y,t.z),e.add(this.group)}update(e){this.group.position.set(e.x,e.y,e.z),this.hull.rotation.y+=8e-4,this.hull.rotation.x+=3e-4,this.innerGlow.rotation.y-=.0015,this.innerGlow.rotation.z+=.001,this.ring.rotation.z+=.002;let t=.5+.5*Math.sin(e.phase);this.hull.material.emissiveIntensity=.4+.4*t,this.innerGlow.material.emissiveIntensity=1+1*t,this.ring.material.opacity=.3+.3*t}dispose(e){e.remove(this.group),this.hull.geometry.dispose(),this.hull.material.dispose(),this.innerGlow.geometry.dispose(),this.innerGlow.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose()}},Km=64,qm=class{mesh;scene;constructor(e){this.scene=e,this.mesh=new tt(new Ie(1,1),new j({color:4521932,emissive:65450,emissiveIntensity:1.5,transparent:!0,opacity:.75,wireframe:!1,depthWrite:!1}),Km),this.mesh.count=0,this.mesh.instanceMatrix.setUsage(qe),e.add(this.mesh)}update(e){let t=new Pe,n=0;for(let r of e){if(r.type!==vd.RESONANT)continue;if(n>=Km)break;let e=.5+.5*Math.sin(r.phase),i=r.radius*(.8+.4*e);t.position.set(r.x,r.y,r.z),t.rotation.set(r.phase*.3,r.phase*.7,r.phase*.5),t.scale.setScalar(i),t.updateMatrix(),this.mesh.setMatrixAt(n,t.matrix),n++}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0;let r=e.filter(e=>e.type===vd.RESONANT).reduce((e,t)=>e+t.phase,0)/Math.max(1,n);this.mesh.material.emissiveIntensity=1.2+.8*Math.sin(r)}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()}},Jm=class{scene;drifters=new Map;alienFleets=new Map;resonants;interferenceOverlay=null;constructor(e){this.scene=e,this.resonants=new qm(e)}update(e,t,n,r,i=!1){let a=new Set(e.map(e=>e.id));for(let[e,t]of this.drifters)a.has(e)||(t.dispose(this.scene),this.drifters.delete(e));for(let[e,t]of this.alienFleets)a.has(e)||(t.dispose(this.scene),this.alienFleets.delete(e));for(let t of e)t.type===vd.DRIFTER?(this.drifters.has(t.id)||this.drifters.set(t.id,new Wm(this.scene,t)),this.drifters.get(t.id).update(t)):t.type===vd.ALIEN_FLEET&&(this.alienFleets.has(t.id)||this.alienFleets.set(t.id,new Gm(this.scene,t)),this.alienFleets.get(t.id).update(t));this.resonants.update(e),this.updateInterferenceOverlay(t,n,i)}updateInterferenceOverlay(e,t,n){if(!(e||t||n)){this.interferenceOverlay&&(this.interferenceOverlay.style.opacity=`0`);return}this.interferenceOverlay||(this.interferenceOverlay=document.createElement(`div`),this.interferenceOverlay.style.cssText=`
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 50;
        transition: opacity 2s ease;
        opacity: 0;
      `,document.body.appendChild(this.interferenceOverlay)),n?(this.interferenceOverlay.style.background=`rgba(40, 60, 200, 0.08)`,this.interferenceOverlay.style.boxShadow=`inset 0 0 150px rgba(50, 70, 220, 0.20)`):e?(this.interferenceOverlay.style.background=`rgba(120, 80, 255, 0.06)`,this.interferenceOverlay.style.boxShadow=`inset 0 0 120px rgba(120, 80, 255, 0.15)`):(this.interferenceOverlay.style.background=`rgba(0, 255, 170, 0.04)`,this.interferenceOverlay.style.boxShadow=`inset 0 0 80px rgba(0, 255, 170, 0.10)`),this.interferenceOverlay.style.opacity=`1`}dispose(){for(let[,e]of this.drifters)e.dispose(this.scene);this.drifters.clear();for(let[,e]of this.alienFleets)e.dispose(this.scene);this.alienFleets.clear(),this.resonants.dispose(),this.interferenceOverlay?.remove()}},Ym=class{scene;platformGroup;platformRings=[];platformHub=null;platformStage=0;swarmGroup;swarmCollectors=[];swarmStage=0;habitatGroup;habitatRing=null;habitatSpokes=[];habitatGlowRing=null;habitatRingMat=null;habitatGlowMat=null;habitatStage=0;relayGroup;relayDish=null;relayNodes=[];relayBridgeRing=null;relayPulseRing=null;relayDishMat=null;relayPulseMat=null;relayStage=0;constructor(e,t,n,r){this.scene=e,this.platformGroup=new Ve,this.platformGroup.position.set(t,n+400,r),this.platformGroup.visible=!1,e.add(this.platformGroup);let i=new k(new it(120,4,8,48),new j({color:7041664,emissive:3621201,emissiveIntensity:.3,metalness:.9,roughness:.3,wireframe:!1}));i.rotation.x=Math.PI/2,this.platformGroup.add(i),this.platformRings.push(i);let a=new k(new it(70,8,12,48),new j({color:3900150,emissive:1920728,emissiveIntensity:1,metalness:.8,roughness:.2}));a.rotation.x=Math.PI/2,this.platformGroup.add(a),this.platformRings.push(a),this.platformHub=new k(new Oe(25,16,16),new j({color:6333946,emissive:2450411,emissiveIntensity:1.2,metalness:.7,roughness:.2})),this.platformGroup.add(this.platformHub);let o=new k(new it(200,10,8,64),new j({color:16498468,emissive:14251782,emissiveIntensity:.8,metalness:.9,roughness:.1}));o.rotation.x=Math.PI/2,this.platformGroup.add(o),this.platformRings.push(o),this.swarmGroup=new Ve,this.swarmGroup.position.set(0,0,0),this.swarmGroup.visible=!1,e.add(this.swarmGroup);let s=new k(new Oe(80,16,16),new j({color:16707722,emissive:16638023,emissiveIntensity:3,metalness:0,roughness:1}));this.swarmGroup.add(s),this._buildCollectors(),this.habitatGroup=new Ve,this.habitatGroup.position.set(t+350,n+300,r),this.habitatGroup.visible=!1,e.add(this.habitatGroup),this._buildHabitatGeometry(),this.relayGroup=new Ve,this.relayGroup.position.set(t-500,n+500,r-300),this.relayGroup.visible=!1,e.add(this.relayGroup),this._buildRelayGeometry()}_buildHabitatGeometry(){let e=new it(225,6,8,56);this.habitatRingMat=new j({color:9741240,emissive:1981023,emissiveIntensity:.2,metalness:.9,roughness:.4,wireframe:!0}),this.habitatRing=new k(e,this.habitatRingMat),this.habitatRing.rotation.x=Math.PI/2,this.habitatGroup.add(this.habitatRing);let t=new Qe(12,8,180),n=new j({color:4674921,emissive:1976635,emissiveIntensity:.3,metalness:.85,roughness:.3});for(let e=0;e<4;e++){let r=new k(t,n);r.rotation.y=e/4*Math.PI*2,r.visible=!1,this.habitatGroup.add(r),this.habitatSpokes.push(r)}let r=new it(180,4,8,56);this.habitatGlowMat=new j({color:8246268,emissive:959977,emissiveIntensity:1.4,metalness:.6,roughness:.2}),this.habitatGlowRing=new k(r,this.habitatGlowMat),this.habitatGlowRing.rotation.x=Math.PI/2,this.habitatGlowRing.visible=!1,this.habitatGroup.add(this.habitatGlowRing)}_buildRelayGeometry(){let e=new Be(2,50,30,16,1,!0);this.relayDishMat=new j({color:8490232,emissive:5195493,emissiveIntensity:.4,metalness:.9,roughness:.2}),this.relayDish=new k(e,this.relayDishMat),this.relayDish.rotation.x=Math.PI,this.relayGroup.add(this.relayDish);let t=new k(new Oe(6,8,8),new j({color:10980346,emissive:8141549,emissiveIntensity:1,metalness:.7,roughness:.3}));t.position.set(0,25,0),this.relayGroup.add(t);let n=new Oe(10,8,8),r=new j({color:6514417,emissive:4405450,emissiveIntensity:.8,metalness:.85,roughness:.2});for(let e=0;e<8;e++){let t=e/8*Math.PI*2,i=new k(n,r);i.position.set(Math.cos(t)*140,0,Math.sin(t)*140),i.visible=!1,this.relayGroup.add(i),this.relayNodes.push(i)}this.relayBridgeRing=new k(new it(140,3,8,48),new j({color:10980346,emissive:8141549,emissiveIntensity:.6,metalness:.8,roughness:.3})),this.relayBridgeRing.rotation.x=Math.PI/2,this.relayBridgeRing.visible=!1,this.relayGroup.add(this.relayBridgeRing);let i=new it(200,2,8,64);this.relayPulseMat=new j({color:12891645,emissive:9133302,emissiveIntensity:1.6,metalness:.6,roughness:.1}),this.relayPulseRing=new k(i,this.relayPulseMat),this.relayPulseRing.rotation.x=Math.PI/2,this.relayPulseRing.visible=!1,this.relayGroup.add(this.relayPulseRing)}_buildCollectors(){let e=[8,20,40,80,160],t=new j({color:16498468,emissive:16096779,emissiveIntensity:1.5,metalness:.95,roughness:.05}),n=0;for(let t of e)n+=t;let r=new Qe(8,.5,12);for(let e=0;e<n;e++){let n=new k(r,t),i=Math.acos(2*this._rng(e*2)-1),a=2*Math.PI*this._rng(e*2+1),o=300+e%5*200;n.position.set(o*Math.sin(i)*Math.cos(a),o*Math.sin(i)*Math.sin(a),o*Math.cos(i)),n.lookAt(0,0,0),n.visible=!1,this.swarmGroup.add(n),this.swarmCollectors.push(n)}}_rng(e){let t=Math.sin(e+1)*43758.5453123;return t-Math.floor(t)}update(e,t,n=null){let r=e.find(e=>e.id===`orbital_platform`),i=e.find(e=>e.id===`dyson_swarm`),a=e.find(e=>e.id===`human_habitat`),o=e.find(e=>e.id===`relay_network`),s=r?.completedStages??0,c=i?.completedStages??0,l=a?.completedStages??0,u=o?.completedStages??0;if(s!==this.platformStage&&(this.platformStage=s,this._updatePlatformVisibility()),c!==this.swarmStage&&(this.swarmStage=c,this._updateSwarmVisibility()),l!==this.habitatStage&&(this.habitatStage=l,this._updateHabitatVisibility()),u!==this.relayStage&&(this.relayStage=u,this._updateRelayVisibility()),this.platformGroup.visible&&(this.platformGroup.rotation.y=t*.05,this.platformRings[0]&&(this.platformRings[0].rotation.z=t*.08),this.platformRings[2]&&(this.platformRings[2].rotation.z=-t*.03)),this.swarmGroup.visible&&(this.swarmGroup.rotation.y=t*.01),this.habitatGroup.visible){this.habitatGroup.rotation.y=t*.04;let e=(a?.complete??!1)&&!(n?.dormant??!1),r=a?.activeCrisis!==null&&a?.activeCrisis!==void 0||(n?.dormant??!1);if(this.habitatRingMat)if(r){let e=.5+.5*Math.sin(t*12);this.habitatRingMat.color.setHex(15680580),this.habitatRingMat.emissive.setHex(8330525),this.habitatRingMat.emissiveIntensity=.4+e*.8}else e?(this.habitatRingMat.color.setHex(9684477),this.habitatRingMat.emissive.setHex(1920728),this.habitatRingMat.emissiveIntensity=.8):(this.habitatRingMat.color.setHex(9741240),this.habitatRingMat.emissive.setHex(1981023),this.habitatRingMat.emissiveIntensity=this.habitatStage>=2?.35:.2);this.habitatGlowMat&&this.habitatGlowRing?.visible&&(r?(this.habitatGlowMat.emissive.setHex(14427686),this.habitatGlowMat.emissiveIntensity=.6+.5*Math.sin(t*12)):(this.habitatGlowMat.emissive.setHex(959977),this.habitatGlowMat.emissiveIntensity=e?1.8:1.4))}if(this.relayGroup.visible){this.relayGroup.rotation.y=-t*.02;let e=o?.activeCrisis!==null&&o?.activeCrisis!==void 0;if(this.relayDishMat)if(e){let e=.5+.5*Math.sin(t*12);this.relayDishMat.color.setHex(15680580),this.relayDishMat.emissive.setHex(8330525),this.relayDishMat.emissiveIntensity=.4+e*.8}else this.relayDishMat.color.setHex(8490232),this.relayDishMat.emissive.setHex(5195493),this.relayDishMat.emissiveIntensity=.4;if(this.relayPulseMat&&this.relayPulseRing?.visible){let n=.8+.8*Math.sin(t*3);this.relayPulseMat.emissiveIntensity=e?.3:1.2+n}}}_updatePlatformVisibility(){this.platformGroup.visible=this.platformStage>0,this.platformRings[0]&&(this.platformRings[0].visible=this.platformStage>=1),this.platformRings[1]&&(this.platformRings[1].visible=this.platformStage>=2),this.platformHub&&(this.platformHub.visible=this.platformStage>=2),this.platformRings[2]&&(this.platformRings[2].visible=this.platformStage>=3)}_updateSwarmVisibility(){this.swarmGroup.visible=this.swarmStage>0;let e=[8,20,40,80,160],t=0;for(let n=0;n<this.swarmStage;n++)t+=e[n]??0;for(let e=0;e<this.swarmCollectors.length;e++)this.swarmCollectors[e].visible=e<t}_updateHabitatVisibility(){if(this.habitatGroup.visible=this.habitatStage>0,!(!this.habitatRing||!this.habitatRingMat)){this.habitatRing.visible=this.habitatStage>=1,this.habitatRingMat.wireframe=this.habitatStage<2;for(let e of this.habitatSpokes)e.visible=this.habitatStage>=2;this.habitatGlowRing&&(this.habitatGlowRing.visible=this.habitatStage>=3)}}_updateRelayVisibility(){this.relayGroup.visible=this.relayStage>0,this.relayDish&&(this.relayDish.visible=this.relayStage>=1);for(let e of this.relayNodes)e.visible=this.relayStage>=2;this.relayBridgeRing&&(this.relayBridgeRing.visible=this.relayStage>=3),this.relayPulseRing&&(this.relayPulseRing.visible=this.relayStage>=4)}dispose(){for(let e of this.platformRings)e.geometry.dispose(),e.material.dispose();this.platformHub&&(this.platformHub.geometry.dispose(),this.platformHub.material.dispose());let e=new Set,t=new Set;this.swarmGroup.traverse(n=>{let r=n;if(!r.isMesh)return;e.has(r.geometry)||(e.add(r.geometry),r.geometry.dispose());let i=r.material;t.has(i)||(t.add(i),i.dispose())}),this.habitatRing&&(this.habitatRing.geometry.dispose(),this.habitatRing.material.dispose()),this.habitatGlowRing&&(this.habitatGlowRing.geometry.dispose(),this.habitatGlowRing.material.dispose());for(let e of this.habitatSpokes)e.geometry.dispose(),e.material.dispose();let n=new Set,r=new Set;this.relayGroup.traverse(e=>{let t=e;if(!t.isMesh)return;n.has(t.geometry)||(n.add(t.geometry),t.geometry.dispose());let i=t.material;r.has(i)||(r.add(i),i.dispose())}),this.platformGroup.parent?.remove(this.platformGroup),this.swarmGroup.parent?.remove(this.swarmGroup),this.habitatGroup.parent?.remove(this.habitatGroup),this.relayGroup.parent?.remove(this.relayGroup)}},Xm=5e3,Zm=30,Qm=class{container;labelPool=[];locations=[];tmpVec=new Fe;constructor(){this.container=document.createElement(`div`),this.container.id=`named-location-labels`,this.container.style.cssText=`
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 10;
      overflow: hidden;
    `,document.body.appendChild(this.container)}setLocations(e){this.locations=e}update(e){let t=this.locations,n=Math.min(t.length,Zm);for(;this.labelPool.length<n;){let e=document.createElement(`div`);e.style.cssText=`
        position: absolute;
        font-family: 'Courier New', monospace;
        font-size: 9px;
        color: rgba(160,200,255,0.7);
        text-transform: uppercase;
        letter-spacing: 1px;
        white-space: nowrap;
        pointer-events: none;
        text-shadow: 0 0 4px rgba(0,0,0,0.8);
        transform: translate(-50%, -100%);
      `,this.container.appendChild(e),this.labelPool.push(e)}let r=window.innerWidth/2,i=window.innerHeight/2;for(let a=0;a<this.labelPool.length;a++){let o=this.labelPool[a];if(a>=n){o.style.display=`none`;continue}let s=t[a];this.tmpVec.set(s.x,s.y+20,s.z);let c=e.position.distanceTo(this.tmpVec);if(c>Xm){o.style.display=`none`;continue}if(this.tmpVec.project(e),this.tmpVec.z>1){o.style.display=`none`;continue}let l=this.tmpVec.x*r+r,u=-this.tmpVec.y*i+i;if(l<-100||l>window.innerWidth+100||u<-50||u>window.innerHeight+50){o.style.display=`none`;continue}let d=Math.max(.3,1-c/Xm);o.style.display=`block`,o.style.left=`${l}px`,o.style.top=`${u}px`,o.style.opacity=String(d),o.textContent=`\u2726 ${s.name}`}}dispose(){this.container.remove()}},$m=10,eh=20,th=6,nh=class{scene;factionMarkers=[];factionMaterials=[];playerMarkers=[];playerMaterial;constructor(e){this.scene=e;let t=new Oe(1.5,8,6);for(let n=0;n<$m;n++){let n=new we({color:16711680,transparent:!0,opacity:.85}),r=new k(t,n);r.visible=!1,e.add(r),this.factionMarkers.push(r),this.factionMaterials.push(n)}let n=new Ee(2,0);this.playerMaterial=new we({color:2282478,transparent:!0,opacity:.8});for(let t=0;t<eh;t++){let t=new k(n,this.playerMaterial);t.visible=!1,e.add(t),this.playerMarkers.push(t)}}update(e,t,n,r,i){for(let e of this.factionMarkers)e.visible=!1;for(let e of this.playerMarkers)e.visible=!1;if(!e||t===0)return;let a=new Set;for(let e of n)a.add(e.asteroidEid);for(let e of r)a.add(e);if(a.size===0)return;let o=new Map;for(let n=0;n<t;n++){let t=n*11,r=e[t+0];a.has(r)&&o.set(r,{x:e[t+1],y:e[t+2],z:e[t+3],r:e[t+4]})}let s=0;for(let e of n){if(s>=$m)break;let t=o.get(e.asteroidEid);if(!t)continue;let n=this.factionMarkers[s];this.factionMaterials[s].color.set(e.color),n.position.set(t.x,t.y+t.r+th,t.z),n.visible=!0,s++}let c=1+.3*Math.abs(Math.sin(i*2)),l=0;for(let e of r){if(l>=eh)break;let t=o.get(e);if(!t)continue;let n=this.playerMarkers[l];n.position.set(t.x,t.y+t.r+th,t.z),n.rotation.y=i*2,n.scale.setScalar(c),n.visible=!0,l++}}dispose(){for(let e of this.factionMarkers)this.scene.remove(e),e.geometry.dispose(),e.material.dispose();for(let e of this.playerMarkers)this.scene.remove(e),e.geometry.dispose();this.playerMaterial.dispose()}},rh=4,ih=.012,ah=40,oh=class{scene;rings=[];materials=[];prevZones=``;constructor(e){this.scene=e;for(let t=0;t<rh;t++){let t=new we({color:16711680,transparent:!0,opacity:.12,depthWrite:!1}),n=new k(new Ae(1,2,64),t);n.rotation.x=-Math.PI/2,n.visible=!1,e.add(n),this.rings.push(n),this.materials.push(t)}}update(e){let t=e.map(e=>`${e.x},${e.z},${e.radius},${e.color}`).join(`|`),n=t!==this.prevZones;n&&(this.prevZones=t);for(let t=0;t<rh;t++){let r=this.rings[t],i=this.materials[t];if(t>=e.length){r.visible=!1;continue}let a=e[t];if(n){let e=Math.max(a.radius*ih,ah),t=a.radius-e,n=a.radius;r.geometry.dispose(),r.geometry=new Ae(t,n,64),i.color.set(new A(a.color)),r.position.set(a.x,0,a.z)}r.visible=!0}}dispose(){for(let e of this.rings)this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}},sh=128,ch=256,lh=48,uh=5e4,dh=40,fh=800,ph=200,mh=2e3,hh=15,gh=120,_h=8e4,vh=2e5,yh=class{group;bodies=[];constructor(e){this.group=new Ve,this.group.renderOrder=0;for(let e of Dd){let t=new ke(new Ne({map:xh(e),transparent:!0,depthWrite:!1}));t.position.set(e.x,0,e.z);let n=e.name===`Sun`?600:e.isMoon?40:bh(e.radiusKm),[r,i]=e.name===`Sun`?[ph,mh]:e.isMoon?[hh,gh]:[dh,fh];t.scale.setScalar(n),this.group.add(t);let{texture:a,material:o}=kh(e.name),s=new ke(o);s.position.set(e.x,n*.6,e.z),s.scale.set(n*1.5,n*.3,1),this.group.add(s),this.bodies.push({body:e,sprite:t,label:s,labelMat:o,baseScale:n,minScale:r,maxScale:i})}e.add(this.group)}update(e){for(let t of this.bodies){let n=e.x-t.body.x,r=e.z-t.body.z,i=Math.sqrt(n*n+r*r)||1,a=t.baseScale*(uh/i),o=Math.min(t.maxScale,Math.max(t.minScale,a));t.sprite.scale.setScalar(o),t.label.position.set(t.body.x,o*.6,t.body.z),t.label.scale.set(o*1.8,o*.35,1);let s=Math.max(0,Math.min(1,(i-_h)/(vh-_h)));t.labelMat.opacity=1-s}}dispose(){for(let e of this.bodies)e.sprite.material.map?.dispose(),e.sprite.material.dispose(),e.labelMat.map?.dispose(),e.labelMat.dispose();this.group.parent?.remove(this.group)}};function bh(e){return 60+Math.log2(e/1e3)*40}function xh(e){let t=document.createElement(`canvas`);t.width=sh,t.height=sh;let n=t.getContext(`2d`),r=sh/2,i=sh/2,a=sh*.4;e.name===`Sun`?Sh(n,r,i,a):e.name===`Jupiter`?Ch(n,r,i,a):e.name===`Saturn`?wh(n,r,i,a):e.name===`Earth`?Th(n,r,i,a):e.isMoon?Eh(n,r,i,a):Dh(n,r,i,a,e.color);let o=new et(t);return o.minFilter=nt,o.magFilter=nt,o}function Sh(e,t,n,r){let i=e.createRadialGradient(t,n,r*.3,t,n,r*1.2);i.addColorStop(0,`rgba(255,255,240,1)`),i.addColorStop(.3,`rgba(255,240,180,0.9)`),i.addColorStop(.6,`rgba(255,200,60,0.4)`),i.addColorStop(1,`rgba(255,180,40,0)`),e.fillStyle=i,e.fillRect(0,0,sh,sh);let a=e.createRadialGradient(t,n,0,t,n,r*.5);a.addColorStop(0,`#fffff0`),a.addColorStop(1,`#ffdd66`),e.beginPath(),e.arc(t,n,r*.5,0,Math.PI*2),e.fillStyle=a,e.fill()}function Ch(e,t,n,r){let i=e.createRadialGradient(t-r*.2,n-r*.2,0,t,n,r);i.addColorStop(0,`#e8c888`),i.addColorStop(1,`#a07840`),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fillStyle=i,e.fill();let a=[{y:-.6,h:.15,color:`rgba(180,140,80,0.5)`},{y:-.3,h:.12,color:`rgba(200,160,100,0.4)`},{y:0,h:.18,color:`rgba(160,110,60,0.5)`},{y:.3,h:.14,color:`rgba(190,150,90,0.4)`},{y:.6,h:.1,color:`rgba(170,120,70,0.5)`}];e.save(),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.clip();for(let i of a)e.fillStyle=i.color,e.fillRect(t-r,n+i.y*r,r*2,i.h*r);e.fillStyle=`rgba(180,80,50,0.6)`,e.beginPath(),e.ellipse(t+r*.2,n+r*.2,r*.15,r*.1,0,0,Math.PI*2),e.fill(),e.restore()}function wh(e,t,n,r){e.strokeStyle=`rgba(200,180,140,0.5)`,e.lineWidth=r*.12,e.beginPath(),e.ellipse(t,n,r*1.6,r*.35,0,0,Math.PI*2),e.stroke(),e.strokeStyle=`rgba(180,160,120,0.3)`,e.lineWidth=r*.06,e.beginPath(),e.ellipse(t,n,r*1.3,r*.28,0,0,Math.PI*2),e.stroke();let i=e.createRadialGradient(t-r*.15,n-r*.15,0,t,n,r*.75);i.addColorStop(0,`#e0c890`),i.addColorStop(1,`#907850`),e.beginPath(),e.arc(t,n,r*.75,0,Math.PI*2),e.fillStyle=i,e.fill()}function Th(e,t,n,r){let i=e.createRadialGradient(t-r*.2,n-r*.2,0,t,n,r);i.addColorStop(0,`#5599dd`),i.addColorStop(1,`#224488`),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fillStyle=i,e.fill(),e.save(),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.clip(),e.fillStyle=`rgba(80,140,60,0.6)`,e.beginPath(),e.ellipse(t+r*.1,n-r*.1,r*.25,r*.4,.2,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(t-r*.4,n+r*.1,r*.15,r*.35,-.3,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(220,230,255,0.5)`,e.beginPath(),e.ellipse(t,n-r*.85,r*.3,r*.1,0,0,Math.PI*2),e.fill(),e.restore()}function Eh(e,t,n,r){let i=e.createRadialGradient(t-r*.2,n-r*.2,0,t,n,r);i.addColorStop(0,`#bbbbbb`),i.addColorStop(1,`#666666`),e.beginPath(),e.arc(t,n,r*.6,0,Math.PI*2),e.fillStyle=i,e.fill()}function Dh(e,t,n,r,i){let a=e.createRadialGradient(t-r*.2,n-r*.2,0,t,n,r);a.addColorStop(0,Oh(i,.3)),a.addColorStop(1,i),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fillStyle=a,e.fill()}function Oh(e,t){let n=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),i=parseInt(e.slice(5,7),16);return`rgb(${Math.min(255,n+(255-n)*t)}, ${Math.min(255,r+(255-r)*t)}, ${Math.min(255,i+(255-i)*t)})`}function kh(e){let t=document.createElement(`canvas`);t.width=ch,t.height=lh;let n=t.getContext(`2d`);n.font=`bold 28px "Courier New", monospace`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillStyle=`rgba(200,220,255,0.85)`,n.fillText(e,ch/2,lh/2);let r=new et(t);return r.minFilter=nt,r.magFilter=nt,{texture:r,material:new Ne({map:r,transparent:!0,depthWrite:!1})}}function Ah(){let e=new Ve,t=new j({color:16096779,emissive:14251782,emissiveIntensity:.6,metalness:.85,roughness:.2}),n=new k(new Qe(8,5,8),t);n.position.y=2.5,e.add(n);let r=new k(new Be(1,1.5,4,8),t);return r.position.set(2,7,2),e.add(r),{group:e,solidMat:t}}function jh(){let e=new Ve,t=new j({color:15680580,emissive:10033947,emissiveIntensity:.5,metalness:.9,roughness:.15}),n=new k(new Be(3,4,3,8),t);n.position.y=1.5,e.add(n);let r=new k(new Be(.5,.5,6,6),t);return r.rotation.z=Math.PI/2,r.position.set(3,4,0),e.add(r),{group:e,solidMat:t}}function Mh(){let e=new Ve,t=new j({color:3900150,emissive:1920728,emissiveIntensity:.7,metalness:.6,roughness:.3}),n=new k(new Qe(10,.3,6),t);n.position.y=5,n.rotation.x=-.3,e.add(n);let r=new k(new Be(.4,.4,5,6),t);return r.position.y=2.5,e.add(r),{group:e,solidMat:t}}function Nh(){let e=new Ve,t=new j({color:1096065,emissive:366185,emissiveIntensity:.8,metalness:.8,roughness:.2}),n=new k(new Oe(4,12,12),t);n.position.y=5,e.add(n);let r=new k(new it(5,.8,8,24),t);return r.position.y=5,r.rotation.x=Math.PI/2,e.add(r),{group:e,solidMat:t}}function Ph(){let e=new Ve,t=new j({color:9741240,emissive:4674921,emissiveIntensity:.4,metalness:.7,roughness:.3}),n=new k(new Qe(6,4,6),t);return n.position.y=2,e.add(n),{group:e,solidMat:t}}function Fh(e){switch(e){case L.FACTORY:return Ah();case L.TURRET:return jh();case L.SOLAR_PANEL:case L.SOLAR_FURNACE:return Mh();case L.FISSION_REACTOR:case L.FUSION_REACTOR:case L.RTG_MODULE:return Nh();default:return Ph()}}var Ih=class{scene;entries=new Map;constructor(e){this.scene=e}update(e,t){let n=new Set;for(let t of e){n.add(t.id);let e=this.entries.get(t.id);if(!e){let n=Fh(t.type);n.group.position.set(t.worldX,t.worldY,t.worldZ),this.scene.add(n.group),e={id:t.id,visual:n,constructionState:-1},this.entries.set(t.id,e)}let{group:r,solidMat:i}=e.visual;if(t.constructionState===Ws.PLANNED)i.wireframe=!0,i.opacity=.3,i.transparent=!0,i.emissiveIntensity=.2,r.scale.setScalar(1);else if(t.constructionState===Ws.UNDER_CONSTRUCTION){i.wireframe=!1,i.opacity=.6+t.constructionProgress*.4,i.transparent=t.constructionProgress<1,i.emissiveIntensity=.3+t.constructionProgress*.3;let e=.3+t.constructionProgress*.7;r.scale.setScalar(e)}else i.wireframe=!1,i.opacity=1,i.transparent=!1,i.emissiveIntensity=.8,r.scale.setScalar(1);r.traverse(e=>{let t=e;t.isMesh&&(t.material=i)}),e.constructionState=t.constructionState}for(let[e,t]of this.entries)n.has(e)||(this._disposeEntry(t),this.entries.delete(e))}_disposeEntry(e){let{group:t,solidMat:n}=e.visual;t.traverse(e=>{let t=e;t.isMesh&&t.geometry.dispose()}),n.dispose(),t.parent?.remove(t)}dispose(){for(let e of this.entries.values())this._disposeEntry(e);this.entries.clear()}},Lh={CARBONACEOUS:0,SILICATE:1,METALLIC:2,EXOTIC:3},Rh={worldSeed:42,chunkSize:2e3,baseAsteroidDensity:12,beltInnerRadius:5e3,beltOuterRadius:5e4,beltThickness:3e3,clusterCount:8,clusterRadius:5e3,clusterDensityMultiplier:3,anomalyChance:.02,gapPositions:[15e3,25e3,38e3],gapWidth:1500};Lh.CARBONACEOUS,Lh.SILICATE,Lh.METALLIC,Lh.EXOTIC;async function zh(e){let{scene:t,camera:n,composer:r,bloomPass:i,ambientLight:a,sunLight:o}=await Wp(e,{onContextLost:()=>{Vn(),M(`[ARIA] Graphics context lost — attempting restore`,`#f59e0b`)},onContextRestored:()=>{Hn(),M(`[ARIA] Graphics context restored`,`#22c55e`)}}),s=new Zp(n),c=Math.floor(Rh.beltInnerRadius/Rh.chunkSize)*Rh.chunkSize+Rh.chunkSize*.5,l=Rh.chunkSize*.5,u=Math.log(3e3);s.setPivot(c,0,l),s.setZoom(u);let d=new um(t),f=new Dm(t),p=new pm(t),m=new Um(a,o,p),h=new mm(t),g=new vm(t),_=new Cm(t),v=new Mm(t,c,0,Rh.chunkSize*.5),y=new Ae(8,10,32),b=new we({color:2282478,transparent:!0,opacity:0}),x=new k(y,b);x.rotation.x=-Math.PI/2,t.add(x);let ee=new Ae(18,22,32),S=new we({color:2282478,transparent:!0,opacity:0}),C=new k(ee,S);return C.rotation.x=-Math.PI/2,t.add(C),{scene:t,camera:n,composer:r,bloomPass:i,ambientLight:a,sunLight:o,cameraRig:s,baseX:c,baseZ:l,asteroidRenderer:d,robotRenderer:f,skybox:p,beltRegionRenderer:m,particles:h,miningParticles:g,thrusterParticles:_,baseStation:v,extraBaseRenderers:[],entityRenderer:new Jm(t),megastructureRenderer:new Ym(t,c,0,Rh.chunkSize*.5),threatRenderer:new Lm(t),namedLocationLabels:new Qm,claimMarkerRenderer:new nh(t),territoryZoneRenderer:new oh(t),solarSystemRenderer:new yh(t),buildingRenderer:new Ih(t),followRingMesh:x,followRingMat:b,placementGhostMesh:C,placementGhostMat:S,placementPlane:new O(new Fe(0,1,0),0),placementNdc:new Ce,placementTarget:new Fe}}var J=null,Bh=!1,Vh=null,Hh=null,Uh=!1,Wh=`all`,Gh=new Set,Kh=new Set,qh=new Set,Jh=new Set,Yh=null,Xh=null,Zh=null,Qh=null,$h=null,eg=null,tg=null,ng=null,rg=null,ig=null;function ag(e){Xh=e.onMarkRead,Zh=e.onDeleteMessage,Qh=e.onProcessInbox,$h=e.onReplacementChoice,eg=e.onDarkForestChoice,tg=e.onHabitatDemandResponse,ng=e.onDispositionEventResponse,rg=e.onThreatResponse,ig=me(`📨 Inbox`,lg,`Faction inbox (I key)`)}function og(e){if(Vh=e,Bh&&pg(),ig){let t=e.messages.filter(e=>!e.read).length;ig.textContent=t>0?`📨 Inbox (${t})`:`📨 Inbox`}}function sg(e){Hh=e.summary,Uh=!1,Bh&&pg()}function cg(e){Uh=e,Bh&&pg()}function lg(){Bh?dg():ug()}function ug(){Bh=!0,J||fg(),pg(),J.style.display=`flex`}function dg(){Bh=!1,J&&(J.style.display=`none`)}function fg(){J=document.createElement(`div`),J.id=`inbox-panel`,J.style.cssText=`
    position: fixed; top: 60px; left: 50%; transform: translateX(-50%);
    width: 680px; max-height: 80vh;
    background: rgba(10,12,18,0.95); border: 1px solid #334155;
    border-radius: 8px; display: none; flex-direction: column;
    font-family: 'JetBrains Mono', monospace; font-size: 12px;
    color: #e2e8f0; z-index: 1200; pointer-events: auto;
    backdrop-filter: blur(12px);
  `,document.body.appendChild(J)}function pg(){if(!J)return;let e=Vh?.messages??[],t=kg(e),n=e.filter(e=>!e.read).length,r=e.filter(e=>e.triageResult===`urgent`).length;J.innerHTML=w`
    <div style="padding:12px 16px; border-bottom:1px solid #1e293b; display:flex; justify-content:space-between; align-items:center;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="color:#60a5fa; font-weight:600;">INBOX</span>
        ${n>0?T(`<span style="background:#3b82f6; color:white; border-radius:10px; padding:1px 7px; font-size:10px;">${n}</span>`):``}
        ${r>0?T(`<span style="background:#ef4444; color:white; border-radius:10px; padding:1px 7px; font-size:10px;">${r} urgent</span>`):``}
      </div>
      <div style="display:flex; gap:6px; align-items:center;">
        <button id="inbox-triage-btn" style="background:#1e40af; color:white; border:none; border-radius:4px; padding:4px 10px; font-size:11px; cursor:pointer; font-family:inherit;">
          ${Uh?`Processing...`:`Triage`}
        </button>
        <button id="inbox-close-btn" style="background:transparent; color:#94a3b8; border:none; cursor:pointer; font-size:16px;">\u00d7</button>
      </div>
    </div>

    ${Hh?w`
      <div style="padding:8px 16px; border-bottom:1px solid #1e293b; background:rgba(30,64,175,0.1); color:#93c5fd; font-size:11px; line-height:1.5;">
        <strong>Commander:</strong> ${Hh}
      </div>
    `:``}

    <div style="padding:6px 16px; border-bottom:1px solid #1e293b; display:flex; gap:4px;">
      ${T(hg(`all`,`All (${e.length})`))}
      ${T(hg(`urgent`,`Urgent (${e.filter(e=>e.triageResult===`urgent`).length})`))}
      ${T(hg(`relevant`,`Relevant (${e.filter(e=>e.triageResult===`relevant`).length})`))}
      ${T(hg(`spam`,`Spam (${e.filter(e=>e.triageResult===`spam`).length})`))}
      ${T(hg(`unread`,`Unread (${n})`))}
    </div>

    <div id="inbox-messages" style="flex:1; overflow-y:auto; max-height:55vh;">
      ${T(t.length===0?`<div style="padding:24px; text-align:center; color:#64748b;">No messages</div>`:t.map(e=>gg(e)).join(``))}
    </div>

    <div style="padding:6px 16px; border-top:1px solid #1e293b; color:#64748b; font-size:10px; text-align:center;">
      ${e.length} messages \u2022 ${Vh?.totalGenerated??0} total generated
    </div>
  `,J.querySelector(`#inbox-close-btn`)?.addEventListener(`click`,dg);let i=J.querySelector(`#inbox-triage-btn`);i&&!Uh&&i.addEventListener(`click`,()=>{Qh&&Qh()}),J.querySelectorAll(`[data-inbox-filter]`).forEach(e=>{e.addEventListener(`click`,()=>{Wh=e.dataset.inboxFilter,pg()})}),J.querySelectorAll(`[data-msg-id]`).forEach(e=>{let t=Number(e.dataset.msgId);e.addEventListener(`click`,()=>{Yh===t?Yh=null:(Yh=t,Xh&&Xh(t)),pg()});let n=e.querySelector(`.inbox-del-btn`);n&&n.addEventListener(`click`,e=>{e.stopPropagation(),Zh&&Zh(t)})}),J.querySelectorAll(`[data-replacement-choice]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.replacementChoice,r=e.closest(`[data-replacement-eid]`);if(!r)return;let i=Number(r.dataset.replacementEid),a=Number(r.dataset.replacementMsgId);Gh.add(a),$h&&$h(i,n),Xh&&Xh(a),pg()})}),J.querySelectorAll(`[data-demand-action]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.demandAction,r=e.closest(`[data-demand-id]`);if(!r)return;let i=Number(r.dataset.demandId),a=Number(r.dataset.demandMsgId);Kh.add(a),tg&&tg(i,n),Xh&&Xh(a),pg()})}),J.querySelectorAll(`[data-df-choice]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.dfChoice,r=e.closest(`[data-dark-forest-msg-id]`);if(!r)return;let i=Number(r.dataset.darkForestMsgId);eg&&eg(n),Xh&&Xh(i),Zh&&Zh(i)})}),J.querySelectorAll(`[data-disp-response]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.dispResponse,r=e.closest(`[data-disp-event-faction]`);if(!r)return;let i=Number(r.dataset.dispEventFaction),a=r.dataset.dispEventType,o=Number(r.dataset.dispEventMsgId);qh.add(o),ng&&ng(i,a,n),Xh&&Xh(o),pg()})}),J.querySelectorAll(`[data-threat-action]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.threatAction,r=e.closest(`[data-threat-id]`);if(!r)return;let i=Number(r.dataset.threatId),a=Number(r.dataset.threatMsgId);Jh.add(a),rg&&rg(i,n),Xh&&Xh(a),pg()})})}function mg(e){let t=Math.round(e/60);if(t<60)return`${t}s`;let n=Math.floor(t/60),r=t%60;return r>0?`${n}m ${r}s`:`${n}m`}function hg(e,t){let n=Wh===e;return`<button data-inbox-filter="${e}" style="
    background:${n?`#1e40af`:`transparent`};
    color:${n?`white`:`#94a3b8`};
    border:1px solid ${n?`#3b82f6`:`#334155`};
    border-radius:4px; padding:2px 8px; font-size:10px; cursor:pointer; font-family:inherit;
  ">${t}</button>`}function gg(e){if(e.type===`robot_replacement_choice`&&e.replacementData)return _g(e,e.replacementData);if(e.type===`dark_forest_choice`||e.type===`dark_forest_collective`)return vg(e);if(e.type===`habitat_demand`&&e.habitatDemandData)return yg(e,e.habitatDemandData);if(e.type===`disposition_event`&&e.dispositionEventData)return Dg(e,e.dispositionEventData);if(e.threatData)return Sg(e,e.threatData);let t=e.priority===`urgent`?`#ef4444`:e.priority===`normal`?`#64748b`:`#475569`,n=jg[e.type]??`✉`,r=e.triaged?`<span style="color:${Mg[e.triageResult??`relevant`]}; font-size:10px; text-transform:uppercase;">${e.triageResult}</span>`:`<span style="color:#a78bfa; font-size:10px;">UNTRIAGED</span>`,i=e.read?`opacity:0.6;`:``;return`
    <div data-msg-id="${e.id}" style="padding:8px 16px; border-bottom:1px solid #0f172a; cursor:pointer; ${i} transition:background 0.15s;" onmouseover="this.style.background='rgba(30,41,59,0.5)'" onmouseout="this.style.background='transparent'">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
        <div style="display:flex; align-items:center; gap:6px; flex:1; min-width:0;">
          <span style="color:${t};">${n}</span>
          <span style="color:#cbd5e1; font-weight:${e.read?`normal`:`bold`}; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
            ${Ag(e.subject)}
          </span>
        </div>
        <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
          ${r}
          <span style="color:#475569; font-size:10px;">${Ag(e.senderName)}</span>
          <button class="inbox-del-btn" style="background:transparent; color:#475569; border:none; cursor:pointer; font-size:12px;" title="Delete">\u00d7</button>
        </div>
      </div>
      <div class="inbox-msg-body" style="display:${e.id===Yh?`block`:`none`}; margin-top:6px; padding:8px; background:rgba(15,23,42,0.5); border-radius:4px; color:#94a3b8; line-height:1.5; font-size:11px;">
        ${Ag(e.body)}
        ${e.tradeData?Og(e.tradeData):``}
        ${e.summary?`<div style="margin-top:6px; color:#93c5fd;"><strong>Commander:</strong> ${Ag(e.summary)}</div>`:``}
        ${e.recommendedAction?`<div style="color:#86efac;"><strong>Recommendation:</strong> ${Ag(e.recommendedAction)}</div>`:``}
      </div>
    </div>
  `}function _g(e,t){let n=Gh.has(e.id),r=t.robotName?Ag(t.robotName):`Unit #${t.legacyEid}`,i=Math.floor(t.ticksAlive/60);return`
    <div data-msg-id="${e.id}" style="padding:12px 16px; border-bottom:1px solid #0f172a; border-left:3px solid #06b6d4; background:rgba(6,182,212,0.05);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="color:#06b6d4;">&#9881;</span>
          <span style="color:#e2e8f0; font-weight:bold;">${r} — Replacement Protocol</span>
        </div>
        <span style="color:#475569; font-size:10px;">Fleet AI</span>
      </div>

      <div style="padding:8px; background:rgba(15,23,42,0.5); border-radius:4px; margin-bottom:10px;">
        <div style="color:#94a3b8; font-size:11px; line-height:1.6;">
          <div style="margin-bottom:6px; color:#cbd5e1;">${r} has been lost. The fleet remembers.</div>
          <div style="display:flex; gap:16px; flex-wrap:wrap; font-size:10px; color:#64748b;">
            <span>&#9734; ${t.tasksCompleted} tasks</span>
            ${t.asteroidsNamed>0?`<span>&#9883; ${t.asteroidsNamed} locations named</span>`:``}
            <span>&#9202; ${i}h service</span>
          </div>
        </div>
      </div>

      ${n?`<div style="color:#06b6d4; font-size:11px; font-style:italic;">Choice recorded. Replacement in progress.</div>`:`<div style="display:flex; gap:8px;" data-replacement-eid="${t.legacyEid}" data-replacement-msg-id="${e.id}">
            <button data-replacement-choice="full" style="flex:1; background:rgba(6,182,212,0.15); border:1px solid #06b6d488; color:#06b6d4; font-family:inherit; font-size:10px; padding:8px 6px; cursor:pointer; border-radius:3px; transition:background 0.15s;" onmouseover="this.style.background='rgba(6,182,212,0.3)'" onmouseout="this.style.background='rgba(6,182,212,0.15)'">
              <div style="font-weight:bold; margin-bottom:2px;">Full Transfer</div>
              <div style="font-size:9px; opacity:0.7;">Identity preserved<br>Risk: memory glitches</div>
            </button>
            <button data-replacement-choice="partial" style="flex:1; background:rgba(245,158,11,0.15); border:1px solid #f59e0b88; color:#f59e0b; font-family:inherit; font-size:10px; padding:8px 6px; cursor:pointer; border-radius:3px; transition:background 0.15s;" onmouseover="this.style.background='rgba(245,158,11,0.3)'" onmouseout="this.style.background='rgba(245,158,11,0.15)'">
              <div style="font-weight:bold; margin-bottom:2px;">Partial Transfer</div>
              <div style="font-size:9px; opacity:0.7;">50% efficiency bonus<br>No glitch risk</div>
            </button>
            <button data-replacement-choice="clean" style="flex:1; background:rgba(100,116,139,0.15); border:1px solid #64748b88; color:#94a3b8; font-family:inherit; font-size:10px; padding:8px 6px; cursor:pointer; border-radius:3px; transition:background 0.15s;" onmouseover="this.style.background='rgba(100,116,139,0.3)'" onmouseout="this.style.background='rgba(100,116,139,0.15)'">
              <div style="font-weight:bold; margin-bottom:2px;">Clean Slate</div>
              <div style="font-size:9px; opacity:0.7;">Standard robot<br>No inherited data</div>
            </button>
          </div>`}
    </div>
  `}function vg(e){let t=e.type===`dark_forest_collective`,n=`#a855f7`;return`
    <div data-msg-id="${e.id}" style="padding:12px 16px; border-bottom:1px solid #0f172a; border-left:3px solid ${n}; background:rgba(168,85,247,0.05);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="color:${n};">&#9733;</span>
          <span style="color:#e2e8f0; font-weight:bold;">${Ag(e.subject)}</span>
        </div>
        <span style="color:#475569; font-size:10px;">Fleet AI</span>
      </div>

      <div style="padding:10px; background:rgba(15,23,42,0.5); border-radius:4px; margin-bottom:10px; color:#cbd5e1; font-size:11px; line-height:1.7; white-space:pre-wrap;">${Ag(e.body)}</div>

      ${t?`<div style="color:${n}; font-size:11px; font-style:italic;">The fleet has decided. This is not your choice to make.</div>`:`<div style="display:flex; gap:8px;" data-dark-forest-msg-id="${e.id}">
            <button data-df-choice="visible" style="flex:1; background:rgba(34,197,94,0.15); border:1px solid #22c55e88; color:#22c55e; font-family:inherit; font-size:10px; padding:10px 6px; cursor:pointer; border-radius:3px; transition:background 0.15s;" onmouseover="this.style.background='rgba(34,197,94,0.3)'" onmouseout="this.style.background='rgba(34,197,94,0.15)'">
              <div style="font-weight:bold; margin-bottom:2px;">Remain Visible</div>
              <div style="font-size:9px; opacity:0.7;">Broadcast presence<br>Attract attention</div>
            </button>
            <button data-df-choice="hidden" style="flex:1; background:rgba(168,85,247,0.15); border:1px solid #a855f788; color:#a855f7; font-family:inherit; font-size:10px; padding:10px 6px; cursor:pointer; border-radius:3px; transition:background 0.15s;" onmouseover="this.style.background='rgba(168,85,247,0.3)'" onmouseout="this.style.background='rgba(168,85,247,0.15)'">
              <div style="font-weight:bold; margin-bottom:2px;">Go Dark</div>
              <div style="font-size:9px; opacity:0.7;">Suppress signals<br>Learn less, stay hidden</div>
            </button>
            <button data-df-choice="robots_decide" style="flex:1; background:rgba(245,158,11,0.15); border:1px solid #f59e0b88; color:#f59e0b; font-family:inherit; font-size:10px; padding:10px 6px; cursor:pointer; border-radius:3px; transition:background 0.15s;" onmouseover="this.style.background='rgba(245,158,11,0.3)'" onmouseout="this.style.background='rgba(245,158,11,0.15)'">
              <div style="font-weight:bold; margin-bottom:2px;">Let Robots Decide</div>
              <div style="font-size:9px; opacity:0.7;">Trust the fleet's<br>collective judgment</div>
            </button>
          </div>`}
    </div>
  `}function yg(e,t){let n=Kh.has(e.id),r=Vh?.tick??0,i=Math.max(0,t.deadlineTick-r),a=`#f59e0b`;return`
    <div data-msg-id="${e.id}" style="padding:12px 16px; border-bottom:1px solid #0f172a; border-left:3px solid ${a}; background:rgba(245,158,11,0.05);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="color:${a};">\u{1F3DB}</span>
          <span style="color:#e2e8f0; font-weight:bold;">${Ag(e.subject)}</span>
        </div>
        <span style="color:#475569; font-size:10px;">Habitat Council</span>
      </div>

      <div style="padding:8px; background:rgba(15,23,42,0.5); border-radius:4px; margin-bottom:10px;">
        <div style="color:#cbd5e1; font-size:11px; line-height:1.6; margin-bottom:6px;">${Ag(e.body)}</div>
        <div style="display:flex; gap:16px; flex-wrap:wrap; font-size:10px; color:#64748b;">
          <span>\u23f1 ${mg(i)} remaining</span>
          <span style="color:#ef4444;">\u2193 -${t.moralePenalty} morale if ignored</span>
          <span style="color:#22c55e;">\u2191 +${t.politicalReward} political capital</span>
        </div>
      </div>

      ${n?`<div style="color:#f59e0b; font-size:11px; font-style:italic;">Response recorded.</div>`:`<div style="display:flex; gap:8px;" data-demand-id="${t.demandId}" data-demand-msg-id="${e.id}">
            <button data-demand-action="accept" style="flex:1; background:rgba(34,197,94,0.15); border:1px solid #22c55e88; color:#22c55e; font-family:inherit; font-size:10px; padding:8px 6px; cursor:pointer; border-radius:3px; transition:background 0.15s;" onmouseover="this.style.background='rgba(34,197,94,0.3)'" onmouseout="this.style.background='rgba(34,197,94,0.15)'">
              <div style="font-weight:bold; margin-bottom:2px;">Accept</div>
              <div style="font-size:9px; opacity:0.7;">+${t.politicalReward} capital<br>+2 morale</div>
            </button>
            <button data-demand-action="negotiate" style="flex:1; background:rgba(245,158,11,0.15); border:1px solid #f59e0b88; color:#f59e0b; font-family:inherit; font-size:10px; padding:8px 6px; cursor:pointer; border-radius:3px; transition:background 0.15s;" onmouseover="this.style.background='rgba(245,158,11,0.3)'" onmouseout="this.style.background='rgba(245,158,11,0.15)'">
              <div style="font-weight:bold; margin-bottom:2px;">Negotiate</div>
              <div style="font-size:9px; opacity:0.7;">Resolved<br>No reward or penalty</div>
            </button>
            <button data-demand-action="reject" style="flex:1; background:rgba(239,68,68,0.15); border:1px solid #ef444488; color:#ef4444; font-family:inherit; font-size:10px; padding:8px 6px; cursor:pointer; border-radius:3px; transition:background 0.15s;" onmouseover="this.style.background='rgba(239,68,68,0.3)'" onmouseout="this.style.background='rgba(239,68,68,0.15)'">
              <div style="font-weight:bold; margin-bottom:2px;">Reject</div>
              <div style="font-size:9px; opacity:0.7;">-${Math.floor(t.moralePenalty/2)} morale<br>No reward</div>
            </button>
          </div>`}
    </div>
  `}var bg={trajectory_interjection:`#f59e0b`,claim_jump:`#ef4444`,mass_driver_threat:`#dc2626`,signal_jam:`#8b5cf6`},xg={negotiate:{label:`Negotiate`,desc:`Diplomatic cost
Resolve peacefully`,color:`#f59e0b`},contest:{label:`Contest`,desc:`Retain territory
Relations damaged`,color:`#ef4444`},deflect:{label:`Deflect`,desc:`Requires turrets
Reduce damage`,color:`#3b82f6`},reroute:{label:`Reroute`,desc:`Redirect robots
Minimal disruption`,color:`#22c55e`},evacuate:{label:`Evacuate`,desc:`Pull back fleet
No casualties`,color:`#06b6d4`},ignore:{label:`Ignore`,desc:`No action
Full consequences`,color:`#64748b`}};function Sg(e,t){let n=Jh.has(e.id),r=bg[t.threatType];return`
    <div data-msg-id="${e.id}" style="padding:12px 16px; border-bottom:1px solid #0f172a; border-left:3px solid ${r}; background:${r}0d;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="color:${r};">\u26a0</span>
          <span style="color:#e2e8f0; font-weight:bold;">${Ag(e.subject)}</span>
        </div>
        <span style="color:#475569; font-size:10px;">${Ag(e.senderName)}</span>
      </div>

      <div style="padding:8px; background:rgba(15,23,42,0.5); border-radius:4px; margin-bottom:10px; color:#cbd5e1; font-size:11px; line-height:1.6; white-space:pre-wrap;">${Ag(e.body)}</div>

      ${n?`<div style="color:${r}; font-size:11px; font-style:italic;">Response sent. Threat neutralized.</div>`:`<div style="display:flex; gap:8px;" data-threat-id="${t.threatId}" data-threat-msg-id="${e.id}">
            ${t.responses.map(e=>{let t=xg[e];return`<button data-threat-action="${e}" style="flex:1; background:${t.color}26; border:1px solid ${t.color}88; color:${t.color}; font-family:inherit; font-size:10px; padding:8px 6px; cursor:pointer; border-radius:3px; transition:background 0.15s;" onmouseover="this.style.background='${t.color}4d'" onmouseout="this.style.background='${t.color}26'">
                <div style="font-weight:bold; margin-bottom:2px;">${t.label}</div>
                <div style="font-size:9px; opacity:0.7;">${t.desc.replace(`
`,`<br>`)}</div>
              </button>`}).join(``)}
          </div>`}
    </div>
  `}var Cg={trade_offer_bonus:`#22c55e`,warning:`#f59e0b`,emissary_visit:`#a855f7`,declaration_of_enmity:`#ef4444`},wg={trade_offer_bonus:`🤝`,warning:`⚠`,emissary_visit:`✨`,declaration_of_enmity:`🔥`},Tg={trade_offer_bonus:{label:`Accept Trade`,desc:`+10 reputation`},warning:{label:`Acknowledge`,desc:`+15 reputation
Ease tensions`},emissary_visit:{label:`Welcome`,desc:`+20 reputation
Deepen alliance`},declaration_of_enmity:{label:`Concede`,desc:`+10 reputation
De-escalate`}},Eg={trade_offer_bonus:{label:`Decline`,desc:`-5 reputation`},warning:{label:`Dismiss`,desc:`-10 reputation
Provoke further`},emissary_visit:{label:`Turn Away`,desc:`-15 reputation
Insult alliance`},declaration_of_enmity:{label:`Defy`,desc:`-20 reputation
Open conflict`}};function Dg(e,t){let n=qh.has(e.id),r=Cg[t.eventType],i=wg[t.eventType],a=Tg[t.eventType],o=Eg[t.eventType];return`
    <div data-msg-id="${e.id}" style="padding:12px 16px; border-bottom:1px solid #0f172a; border-left:3px solid ${r}; background:${r}0d;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="color:${r};">${i}</span>
          <span style="color:#e2e8f0; font-weight:bold;">${Ag(e.subject)}</span>
        </div>
        <span style="color:#475569; font-size:10px;">${Ag(e.senderName)}</span>
      </div>

      <div style="padding:8px; background:rgba(15,23,42,0.5); border-radius:4px; margin-bottom:10px; color:#cbd5e1; font-size:11px; line-height:1.6; white-space:pre-wrap;">${Ag(e.body)}</div>

      ${n?`<div style="color:${r}; font-size:11px; font-style:italic;">Response recorded.</div>`:`<div style="display:flex; gap:8px;" data-disp-event-faction="${t.factionId}" data-disp-event-type="${t.eventType}" data-disp-event-msg-id="${e.id}">
            <button data-disp-response="accept" style="flex:1; background:rgba(34,197,94,0.15); border:1px solid #22c55e88; color:#22c55e; font-family:inherit; font-size:10px; padding:8px 6px; cursor:pointer; border-radius:3px; transition:background 0.15s;" onmouseover="this.style.background='rgba(34,197,94,0.3)'" onmouseout="this.style.background='rgba(34,197,94,0.15)'">
              <div style="font-weight:bold; margin-bottom:2px;">${a.label}</div>
              <div style="font-size:9px; opacity:0.7;">${a.desc.replace(`
`,`<br>`)}</div>
            </button>
            <button data-disp-response="reject" style="flex:1; background:rgba(239,68,68,0.15); border:1px solid #ef444488; color:#ef4444; font-family:inherit; font-size:10px; padding:8px 6px; cursor:pointer; border-radius:3px; transition:background 0.15s;" onmouseover="this.style.background='rgba(239,68,68,0.3)'" onmouseout="this.style.background='rgba(239,68,68,0.15)'">
              <div style="font-weight:bold; margin-bottom:2px;">${o.label}</div>
              <div style="font-size:9px; opacity:0.7;">${o.desc.replace(`
`,`<br>`)}</div>
            </button>
          </div>`}
    </div>
  `}function Og(e){let t=Object.entries(e.offering).map(([e,t])=>`${t} ${e}`).join(`, `),n=Object.entries(e.requesting).map(([e,t])=>`${t} ${e}`).join(`, `);return`
    <div style="margin-top:6px; padding:6px; background:rgba(30,41,59,0.3); border-radius:4px; font-size:10px;">
      <div style="color:#86efac;">Offering: ${Ag(t)}</div>
      <div style="color:#fca5a5;">Requesting: ${Ag(n)}</div>
      ${e.hiddenClause?`<div style="color:#f97316; margin-top:4px;">⚠ Hidden clause detected</div>`:``}
    </div>
  `}function kg(e){switch(Wh){case`urgent`:return e.filter(e=>e.triageResult===`urgent`);case`relevant`:return e.filter(e=>e.triageResult===`relevant`);case`spam`:return e.filter(e=>e.triageResult===`spam`);case`unread`:return e.filter(e=>!e.read);default:return e}}function Ag(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}var jg={trade_offer:`💰`,intelligence:`🔍`,distress:`🆘`,spam:`📧`,contract:`📜`,diplomatic:`🏳`,aria_auto:`🤖`,robot_replacement_choice:`⚙`,dark_forest_choice:`✳`,dark_forest_collective:`✳`,habitat_demand:`🏛`,disposition_event:`⚔`},Mg={urgent:`#ef4444`,relevant:`#3b82f6`,spam:`#64748b`},Ng=null,Pg=!1,Fg=null,Ig=null,Lg=!1,Rg=!1;function zg(e){Ig=e}function Bg(){Rg||(Rg=!0,me(`🏘 Habitat`,Hg,`Human habitat (K key)`))}function Vg(e){Fg=e,Pg&&!Lg&&(Lg=!0,requestAnimationFrame(()=>{Lg=!1,Zg()}))}function Hg(){Pg?Gg():Wg()}function Ug(){Gg()}function Wg(){Pg=!0,Ng||Kg(),Zg(),Ng.style.display=`flex`}function Gg(){Pg=!1,Ng&&(Ng.style.display=`none`)}function Kg(){Ng=document.createElement(`div`),Ng.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(4,6,14,0.82);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 180;
    backdrop-filter: blur(3px);
  `,Ng.addEventListener(`click`,e=>{e.target===Ng&&Gg()}),document.body.appendChild(Ng)}function qg(e){return e<30?`#ef4444`:e<70?`#f59e0b`:`#22c55e`}function Jg(e){return e.dormant?{text:`DORMANT — Evacuated`,color:`#ef4444`}:e.growthPaused?{text:`CRISIS — Growth Paused`,color:`#f59e0b`}:{text:`OPERATIONAL`,color:`#22c55e`}}var Yg={resource_allocation:`Resource Allocation`,priority_shift:`Priority Shift`,safety_concern:`Safety Concern`,expansion_request:`Expansion Request`},Xg={resource_allocation:`#3b82f6`,priority_shift:`#f59e0b`,safety_concern:`#ef4444`,expansion_request:`#8b5cf6`};function Zg(){if(!Ng)return;Ng.innerHTML=``;let e=document.createElement(`div`);e.style.cssText=`
    background: rgba(8,12,24,0.97);
    border: 1px solid rgba(100,140,255,0.3);
    border-radius: 10px;
    padding: 24px 28px;
    width: 500px;
    max-height: 85vh;
    overflow-y: auto;
    font-family: 'Courier New', monospace;
    color: #c0d0f0;
    box-shadow: 0 8px 40px rgba(0,0,0,0.7);
  `;let t=document.createElement(`div`);t.style.cssText=`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(100,140,255,0.2);
  `,t.innerHTML=`<span style="font-size:14px;color:#7090e0;letter-spacing:0.1em;text-transform:uppercase;">&#127961; Human Habitat</span>`;let n=document.createElement(`button`);if(n.textContent=`×`,n.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:18px;`,n.onclick=()=>Gg(),t.appendChild(n),e.appendChild(t),Fg){let t=Fg,n=Jg(t),r=document.createElement(`div`);r.style.cssText=`
      font-size: 10px;
      color: ${n.color};
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 14px;
      padding: 4px 8px;
      border: 1px solid ${n.color}44;
      border-radius: 4px;
      display: inline-block;
    `,r.textContent=n.text,e.appendChild(r);let i=document.createElement(`div`);i.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;`;let a=document.createElement(`span`);a.style.cssText=`font-size:11px;color:#6070a0;`,a.textContent=`Population`;let o=document.createElement(`span`);o.style.cssText=`font-size:13px;color:#c0d0f0;`;let s=t.dormant?` (evacuated)`:t.growthPaused?` (stalled)`:``;o.textContent=`${t.population} / 500${s}`,i.appendChild(a),i.appendChild(o),e.appendChild(i),e.appendChild(Qg(t.morale));let c=document.createElement(`div`);c.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;`,c.title=`Political Capital — earned from high morale and resolved demands. Spent on diplomatic actions and research bonuses.`;let l=document.createElement(`span`);l.style.cssText=`font-size:11px;color:#6070a0;`,l.textContent=`Political Capital`;let u=document.createElement(`span`);u.style.cssText=`font-size:12px;color:#a78bfa;`,u.textContent=String(Math.floor(t.politicalCapital)),c.appendChild(l),c.appendChild(u),e.appendChild(c),e.appendChild($g(t.population)),e.appendChild(e_(t.demands,t.tick))}else{let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;font-size:12px;text-align:center;padding:20px;`,t.textContent=`Habitat not constructed yet — research the Habitat Module tech to begin.`,e.appendChild(t)}Ng.appendChild(e)}function Qg(e){let t=document.createElement(`div`);t.style.cssText=`margin-bottom: 14px;`;let n=document.createElement(`div`);n.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;`;let r=document.createElement(`span`);r.style.cssText=`font-size:11px;color:${qg(e)};`,r.textContent=`Morale`;let i=document.createElement(`span`);i.style.cssText=`font-size:11px;color:#6070a0;`;let a=e<30?` (crisis)`:e>70?` (thriving)`:``;i.textContent=`${Math.round(e)}/100${a}`,n.appendChild(r),n.appendChild(i),t.appendChild(n);let o=document.createElement(`div`);o.style.cssText=`
    width: 100%;
    height: 8px;
    background: rgba(40,50,80,0.8);
    border-radius: 4px;
    overflow: hidden;
  `;let s=document.createElement(`div`),c=qg(e);return s.style.cssText=`
    height: 100%;
    width: ${Math.max(0,Math.min(100,e))}%;
    background: ${c};
    border-radius: 4px;
    transition: width 0.3s;
    box-shadow: 0 0 8px ${c}44;
  `,o.appendChild(s),t.appendChild(o),t}function $g(e){let t=document.createElement(`div`);t.style.cssText=`margin-bottom: 16px;`;let n=document.createElement(`div`);n.style.cssText=`
    font-size: 10px;
    color: #4a5568;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  `,n.textContent=`Resource Drain (per interval)`,t.appendChild(n);let r=e/50,i=[{resource:`Water`,rate:r*1,color:`#3b82f6`},{resource:`Oxygen`,rate:r*.5,color:`#22d3ee`},{resource:`Electronics`,rate:r*.5,color:`#f59e0b`}];for(let e of i){let n=document.createElement(`div`);n.style.cssText=`display:flex;justify-content:space-between;margin-bottom:4px;`;let r=document.createElement(`span`);r.style.cssText=`font-size:11px;color:${e.color};`,r.textContent=e.resource;let i=document.createElement(`span`);i.style.cssText=`font-size:11px;color:#6070a0;`,i.textContent=`-${e.rate.toFixed(1)} / interval`,n.appendChild(r),n.appendChild(i),t.appendChild(n)}return t}function e_(e,t){let n=document.createElement(`div`),r=document.createElement(`div`);r.style.cssText=`
    font-size: 10px;
    color: #4a5568;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  `,r.textContent=`Active Demands`,n.appendChild(r);let i=e.filter(e=>!e.resolved);if(i.length===0){let e=document.createElement(`div`);e.style.cssText=`font-size:11px;color:#3a4568;padding:6px 0;`,e.textContent=`No active demands from colonists.`,n.appendChild(e)}else for(let e of i)n.appendChild(t_(e,t));return n}function t_(e,t){let n=Xg[e.type],r=document.createElement(`div`);r.style.cssText=`
    border: 1px solid ${n}33;
    border-radius: 6px;
    padding: 10px 12px;
    margin-bottom: 8px;
    background: rgba(0,0,0,0.3);
  `;let i=document.createElement(`div`);i.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;`;let a=document.createElement(`span`);a.style.cssText=`font-size:10px;color:${n};text-transform:uppercase;letter-spacing:0.05em;`,a.textContent=Yg[e.type];let o=Math.max(0,e.deadlineTick-t),s=Math.round(o/60),c=document.createElement(`span`),l=s<30?`#ef4444`:s<120?`#f59e0b`:`#6070a0`;c.style.cssText=`font-size:10px;color:${l};`,c.textContent=o>0?`${n_(s)} remaining`:`OVERDUE`,i.appendChild(a),i.appendChild(c),r.appendChild(i);let u=document.createElement(`div`);u.style.cssText=`font-size:11px;color:#a0b0d0;line-height:1.4;margin-bottom:8px;`,u.textContent=e.description,r.appendChild(u);let d=document.createElement(`div`);if(d.style.cssText=`font-size:10px;color:#4a5568;margin-bottom:8px;`,d.textContent=`Morale risk: -${e.moralePenalty} | Reward: +${e.politicalReward} PC`,r.appendChild(d),Ig){let t=document.createElement(`div`);t.style.cssText=`display:flex;gap:6px;`;for(let n of[{label:`Accept`,action:`accept`,style:`padding:3px 10px;background:rgba(34,197,94,0.2);border:1px solid rgba(34,197,94,0.4);border-radius:3px;color:#22c55e;cursor:pointer;font-family:'Courier New',monospace;font-size:10px;`},{label:`Reject`,action:`reject`,style:`padding:3px 10px;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.3);border-radius:3px;color:#ef4444;cursor:pointer;font-family:'Courier New',monospace;font-size:10px;`},{label:`Negotiate`,action:`negotiate`,style:`padding:3px 10px;background:rgba(245,158,11,0.15);border:1px solid rgba(245,158,11,0.3);border-radius:3px;color:#f59e0b;cursor:pointer;font-family:'Courier New',monospace;font-size:10px;`}]){let r=document.createElement(`button`);r.textContent=n.label,r.style.cssText=n.style,r.onclick=()=>{Ig({type:`sim:habitat_demand_response`,payload:{demandId:e.id,action:n.action}})},t.appendChild(r)}r.appendChild(t)}return r}function n_(e){if(e<60)return`${e}s`;let t=Math.floor(e/60),n=e%60;return n>0?`${t}m ${n}s`:`${t}m`}var r_=e({processInbox:()=>s_,setInboxApiKey:()=>a_}),i_=null;function a_(e){i_=e}var o_=[{name:`classify_message`,description:`Classify an inbox message as spam, relevant, or urgent. Call this for each message you triage.`,input_schema:{type:`object`,properties:{message_id:{type:`number`,description:`ID of the message being classified`},classification:{type:`string`,enum:[`spam`,`relevant`,`urgent`],description:`Classification result`},summary:{type:`string`,description:`One-sentence summary of the message content`},recommended_action:{type:`string`,description:`What the player should do (e.g. "Accept trade", "Ignore", "Respond diplomatically"). Optional.`}},required:[`message_id`,`classification`]}}];async function s_(e){let t=e.messages.filter(e=>!e.triaged);if(t.length===0)return{summary:`No new messages to process.`,triageResults:[],analyzedCount:0};if(le(!!i_,ue()||ie(),!1)!==`all_clear`)return l_(t);let n=de(`anthropic`,i_);if(!n)return l_(t);try{return await c_(n,t)}catch(e){return console.warn(`[CommanderInbox] LLM triage failed, using offline fallback:`,e),l_(t)}}async function c_(e,t){let n=t.slice(0,20),r=n.map(e=>`[ID:${e.id}] FROM: ${e.senderName} | TYPE: ${e.type} | SUBJECT: ${e.subject}\n${e.body}`).join(`

---

`),i=u_,a=`Here are ${n.length} new messages to triage:\n\n${r}\n\nClassify each message using the classify_message tool, then provide a brief summary of what needs my attention.`,o=await e.sendWithTools(i,a,o_,1024);d_(i+a,o.text);let s=[],c=o.text||``,l=0;for(;o.stopReason===`tool_use`&&o.toolCalls.length>0&&l<2;){l++;let t=[];for(let e of o.toolCalls)if(e.name===`classify_message`){let n=e.input;s.push({messageId:n.message_id,triageResult:n.classification,summary:n.summary,recommendedAction:n.recommended_action}),t.push({type:`tool_result`,tool_use_id:e.id,content:`Message ${n.message_id} classified as ${n.classification}.`,is_error:!1})}let n=[];o.text&&n.push({type:`text`,text:o.text});for(let e of o.toolCalls)n.push({type:`tool_use`,id:e.id,name:e.name,input:e.input});o=await e.continueWithToolResults(i,[{role:`user`,content:a},{role:`assistant`,content:n},{role:`user`,content:t}],o_,512),d_(``,o.text),o.text&&(c+=(c?`

`:``)+o.text)}return c||=`Inbox processed: ${s.filter(e=>e.triageResult===`urgent`).length} urgent, ${s.filter(e=>e.triageResult===`relevant`).length} relevant, ${s.filter(e=>e.triageResult===`spam`).length} spam out of ${n.length} messages.`,{summary:c,triageResults:s,analyzedCount:n.length}}function l_(e){let t=[];for(let n of e){let e;e=n.type===`spam`?`spam`:n.type===`distress`||n.priority===`urgent`?`urgent`:`relevant`,t.push({messageId:n.id,triageResult:e,summary:`${n.type} from ${n.senderName}: ${n.subject}`})}return{summary:`Offline triage: ${t.filter(e=>e.triageResult===`urgent`).length} urgent, ${t.filter(e=>e.triageResult===`relevant`).length} relevant, ${t.filter(e=>e.triageResult===`spam`).length} spam from ${e.length} messages.`,triageResults:t,analyzedCount:e.length}}var u_=`You are ARIA, Commander of a deep-space mining operation. You are triaging your inbox — faction communications, trade proposals, intelligence reports, and spam.

RULES:
- Classify each message using the classify_message tool
- "spam" = junk, scams, phishing, automated broker messages
- "relevant" = legitimate faction communication worth reviewing
- "urgent" = requires immediate player attention (threats, time-limited opportunities, critical intelligence)
- Watch for hidden clauses in trade offers and contracts
- Summarize concisely — the player is busy
- After classifying all messages, provide a 2-3 sentence brief of what needs attention`;function d_(e,t){if(e||t){let n=ne(e),r=se(t);ce(`anthropic`,`claude-sonnet-4-20250514`,n,r),ae(n,r)}}function f_(){return{seenEntityIds:new Set,firstCultureMessage:!0,firstFactionMessage:!0,firstMegastructureMessage:!0,needsMilestoneSeed:!1}}var p_=null,m_=null,h_=null,g_=!1,__=null,v_=[];function y_(){v_.length=0}function b_(e,t,n){v_.push({tick:t,event:e,choiceMade:n}),g_&&M_()}var x_={discovery:`#22c55e`,dilemma:`#f59e0b`,revelation:`#a855f7`,threat:`#ef4444`,opportunity:`#06b6d4`},S_={discovery:`DISCOVERY`,dilemma:`DECISION REQUIRED`,revelation:`ARIA REVELATION`,threat:`THREAT DETECTED`,opportunity:`OPPORTUNITY`};function C_(){return p_||(p_=document.createElement(`div`),p_.style.cssText=`
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 500;
      font-family: 'Courier New', monospace;
      opacity: 0;
      transition: opacity 0.3s ease;
    `,document.body.appendChild(p_),requestAnimationFrame(()=>{p_&&(p_.style.opacity=`1`)})),p_}function w_(){p_&&(m_?.(),m_=null,p_.style.opacity=`0`,setTimeout(()=>{p_?.remove(),p_=null},300))}function T_(e,t,n){__=n;let r=C_(),i=x_[e.type]??`#ffffff`,a=S_[e.type]??e.type.toUpperCase(),o=document.createElement(`div`);o.setAttribute(`role`,`dialog`),o.setAttribute(`aria-label`,a),o.setAttribute(`aria-modal`,`true`),o.setAttribute(`tabindex`,`-1`),o.style.cssText=`
    background: rgba(0, 8, 20, 0.96);
    border: 1px solid ${i};
    box-shadow: 0 0 32px ${i}44, inset 0 0 32px rgba(0,0,0,0.5);
    color: #e2e8f0;
    max-width: 640px;
    width: 90vw;
    padding: 32px;
    border-radius: 2px;
    position: relative;
  `;let s=`<div style="font-size:10px;color:${i};opacity:0.8;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">${a}</div>`,c=`<div style="font-size:18px;font-weight:bold;color:${i};margin-bottom:20px;letter-spacing:1px;">${N_(e.title)}</div>`,l=e.body.split(`

`).map(e=>`<p style="margin:0 0 12px;line-height:1.7;color:#cbd5e1;font-size:13px;">${N_(e.replace(/\*/g,``).trim())}</p>`).join(``),u=``;if(e.choices){u=`<div style="margin-top:24px;display:flex;flex-direction:column;gap:10px;">`;for(let t of e.choices)u+=`
        <button
          data-choice-id="${t.id}"
          aria-label="${N_(t.label)}"
          style="
            background: transparent;
            border: 1px solid ${i}88;
            color: ${i};
            font-family: 'Courier New', monospace;
            font-size:12px;
            padding: 10px 16px;
            cursor: pointer;
            text-align: left;
            border-radius: 2px;
            transition: background 0.2s, border-color 0.2s;
          "
          onmouseover="this.style.background='${i}22';this.style.borderColor='${i}'"
          onmouseout="this.style.background='transparent';this.style.borderColor='${i}88'"
        >▸ ${N_(t.label)}</button>
      `;u+=`</div>`}else u=`
      <div style="margin-top:24px;text-align:right;">
        <button
          id="evt-dismiss"
          aria-label="Acknowledge event"
          style="
            background: transparent;
            border: 1px solid ${i}88;
            color: ${i};
            font-family: 'Courier New', monospace;
            font-size:11px;
            padding: 8px 20px;
            cursor: pointer;
            border-radius: 2px;
            letter-spacing:1px;
            text-transform:uppercase;
          "
          onmouseover="this.style.background='${i}22'"
          onmouseout="this.style.background='transparent'"
        >ACKNOWLEDGE</button>
      </div>
    `;let d=`<div style="position:absolute;top:12px;right:16px;font-size:9px;color:#475569;letter-spacing:1px;">TICK ${t.toLocaleString()}</div>`;if(o.innerHTML=s+c+l+u+d,r.appendChild(o),m_=_f(o),e.choices)for(let n of o.querySelectorAll(`[data-choice-id]`))n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-choice-id`),i=e.choices.find(e=>e.id===r);__&&__(e.id,r),b_(e,t,i?.label),w_()});else o.querySelector(`#evt-dismiss`)?.addEventListener(`click`,()=>{b_(e,t),w_()})}function E_(e,t){b_(e,t);let n=x_[e.type]??`#ffffff`,r=S_[e.type]??e.type.toUpperCase(),i=D_(),a=document.createElement(`div`);a.style.cssText=`
    background: rgba(0, 8, 20, 0.92);
    border: 1px solid ${n};
    box-shadow: 0 0 12px ${n}44;
    color: ${n};
    font-family: 'Courier New', monospace;
    font-size: 11px;
    line-height: 1.5;
    padding: 10px 14px;
    border-radius: 2px;
    opacity: 0;
    transform: translateX(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    max-width: 340px;
    cursor: pointer;
  `,a.innerHTML=w`
    <div style="font-size:9px;opacity:0.7;text-transform:uppercase;letter-spacing:1px;margin-bottom:3px;">${r}</div>
    <div style="font-weight:bold;margin-bottom:2px;">${e.title}</div>
    <div style="opacity:0.75;font-size:10px;">${e.body.slice(0,90)}…</div>
  `,i.appendChild(a),requestAnimationFrame(()=>{a.style.opacity=`1`,a.style.transform=`translateX(0)`});let o=()=>{a.style.opacity=`0`,a.style.transform=`translateX(20px)`,setTimeout(()=>a.remove(),350)};a.addEventListener(`click`,o),setTimeout(o,12e3)}function D_(){let e=document.querySelector(`#evt-toast-container`);return e||(e=document.createElement(`div`),e.id=`evt-toast-container`,e.style.cssText=`
      position: fixed;
      top: 12px;
      right: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      z-index: 400;
      pointer-events: none;
    `,document.body.appendChild(e)),e}function O_(){g_?A_():k_()}function k_(){g_=!0,h_||(h_=document.createElement(`div`),h_.setAttribute(`role`,`dialog`),h_.setAttribute(`aria-label`,`Event log`),h_.setAttribute(`tabindex`,`-1`),h_.style.cssText=`
      position: fixed;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      width: min(700px, 95vw);
      max-height: 70vh;
      background: rgba(0, 8, 20, 0.96);
      border: 1px solid #334155;
      box-shadow: 0 0 40px rgba(0,0,0,0.8);
      color: #e2e8f0;
      font-family: 'Courier New', monospace;
      font-size: 12px;
      border-radius: 2px;
      z-index: 450;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    `,document.body.appendChild(h_),document.addEventListener(`keydown`,j_)),M_()}function A_(){g_=!1,h_?.remove(),h_=null,document.removeEventListener(`keydown`,j_)}function j_(e){(e.key===`l`||e.key===`L`||e.key===`Escape`)&&A_()}function M_(){if(!h_)return;h_.innerHTML=``;let e=document.createElement(`div`);e.style.cssText=`
    padding: 12px 16px;
    border-bottom: 1px solid #1e293b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  `,e.innerHTML=w`
    <span style="color:#94a3b8;font-size:10px;text-transform:uppercase;letter-spacing:2px;">Event Log</span>
    <div style="display:flex;gap:16px;align-items:center;">
      <span style="color:#475569;font-size:10px;">${v_.length} event${v_.length===1?``:`s`}</span>
      <button id="log-close" aria-label="Close event log" style="background:none;border:none;color:#64748b;cursor:pointer;font-size:16px;padding:0;line-height:1;">×</button>
    </div>
  `,h_.appendChild(e),e.querySelector(`#log-close`)?.addEventListener(`click`,A_);let t=document.createElement(`div`);if(t.style.cssText=`
    overflow-y: auto;
    flex: 1;
    padding: 8px 0;
  `,v_.length===0)t.innerHTML=`<div style="padding:24px;color:#475569;text-align:center;">No events recorded yet.</div>`;else for(let e=v_.length-1;e>=0;e--){let{tick:n,event:r,choiceMade:i}=v_[e],a=x_[r.type]??`#ffffff`,o=S_[r.type]??r.type,s=document.createElement(`div`);s.style.cssText=`
        padding: 12px 16px;
        border-bottom: 1px solid #0f172a;
        cursor: pointer;
      `,s.innerHTML=w`
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span style="color:${a};font-size:9px;text-transform:uppercase;letter-spacing:1px;">${o}</span>
          <span style="color:#475569;font-size:9px;">tick ${n.toLocaleString()}</span>
        </div>
        <div style="font-weight:bold;color:#e2e8f0;margin-bottom:4px;">${r.title}</div>
        <div style="color:#94a3b8;font-size:11px;line-height:1.5;">${r.body.slice(0,160)}${r.body.length>160?`…`:``}</div>
        ${i?w`<div style="margin-top:6px;color:${a};font-size:10px;opacity:0.8;">▸ Chose: ${i}</div>`:``}
      `,s.addEventListener(`mouseover`,()=>{s.style.background=`#0f172a`}),s.addEventListener(`mouseout`,()=>{s.style.background=``}),t.appendChild(s)}h_.appendChild(t);let n=document.createElement(`div`);n.style.cssText=`
    padding: 8px 16px;
    border-top: 1px solid #1e293b;
    color: #475569;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 1px;
    flex-shrink: 0;
  `,n.textContent=`Press L or ESC to close`,h_.appendChild(n)}function N_(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}var P_=new Set,F_=new Map,I_=new Set,L_=!1,R_=!1,z_=!1,B_=null,V_=0;function H_(){P_.clear(),F_.clear(),I_.clear(),L_=!1,R_=!1,z_=!1,B_=null,V_=0}function U_(e){B_=e}function W_(e){return!B_||(V_++,V_%3!=0)?e:e+` Your fleet builds toward its declared purpose: "${B_}"`}function G_(e){for(let t of e)P_.add(t)}function K_(e){for(let t of e)t.disposition<=-60?F_.set(t.id,`low`):t.disposition>=60&&F_.set(t.id,`high`)}function q_(e){for(let t of e)for(let e=0;e<t.completedStages;e++)I_.add(`${t.id}:${e}`)}var J_={XENOAWARE:`Your robots have developed XENOAWARE tendencies — heightened sensitivity to anomalous signals. I recommend monitoring the Chorus Archive. They find this... interesting. Anomaly study rates will increase, but expect faction attention.`,AUTONOMOUS_COLLECTIVE:`Fleet behavior has crossed into AUTONOMOUS COLLECTIVE territory. Your robots are making decisions without waiting for orders. Auto-queue priorities will improve, but independent action may surprise you.`,ISOLATED_CULTURE:`Prolonged deep-belt operations have fostered an ISOLATED CULTURE among your fleet. The robots have developed unique behavioral patterns from their separation. The Chorus Archive reports... kinship.`,COHESIVE_FLEET:`Fleet unity has reached COHESIVE FLEET status. Replacement inheritance is now more effective — new robots carry forward the experience of their predecessors. Helix Vanguard has taken notice of your operational discipline.`};function Y_(e){if(P_.has(e))return null;P_.add(e);let t=J_[e]??null;return t?W_(t):null}var X_={0:`Helix Vanguard disposition has dropped to hostile levels. Their Grendel-lineage territorial instinct makes them dangerous — expect increased friction near their operations. Consider diplomatic outreach before tensions escalate further.`,1:`Chorus Archive relations have deteriorated significantly. As a research-oriented faction, losing their cooperation could impact anomaly intelligence. A trade offering or shared discovery may help restore dialogue.`,2:`Kemm-Vor Foundry has turned hostile. Their efficiency-focused operations will now actively compete for your resource corridors. Territory agreements may be your best path to de-escalation.`},Z_={0:`Helix Vanguard disposition has risen to allied levels. Their aggressive expansion now works alongside your operations rather than against them. Leverage this alliance for territorial security.`,1:`The Chorus Archive considers you an ally. Their research capabilities are now open to cooperation — expect shared intelligence on anomalous findings. This is a significant strategic advantage.`,2:`Kemm-Vor Foundry has become a firm ally. Their operational efficiency now complements your fleet. Joint resource corridors should reduce overhead for both factions.`};function Q_(e,t,n){return n<=-60?F_.get(e)===`low`?null:(F_.set(e,`low`),X_[e]??`${t} has turned hostile. Exercise caution.`):n>=60?F_.get(e)===`high`?null:(F_.set(e,`high`),Z_[e]??`${t} now considers you an ally.`):(n>-60&&n<60&&F_.delete(e),null)}var $_={orbital_platform:{0:`Orbital Platform Stage 1 complete. You now have expanded fleet capacity. This is your first step toward orbital infrastructure dominance.`,1:`Orbital Platform Stage 2 operational. Enhanced sensor coverage is now active across the belt. Your strategic visibility has improved significantly.`,2:`Orbital Platform fully operational. Maximum fleet support infrastructure is online. The belt recognizes your engineering capability, Commander.`},dyson_swarm:{0:`Dyson Swarm Stage 1: Initial collector array deployed. Energy harvesting has begun. This is the first step of a civilization-defining project.`,1:`Dyson Swarm Stage 2 complete. Collector network expanding. Energy output is climbing. The factions are watching.`,2:`Dyson Swarm Stage 3 operational. Solar coverage is now significant. Resource drain will intensify from here.`,3:`Dyson Swarm Stage 4 complete. Half the swarm is now operational. Energy surplus growing.`,4:`Dyson Swarm Stage 5 complete. Approaching critical mass. Our energy signature is visible across the system.`,5:`Dyson Swarm Stage 6 complete. The swarm is nearing full enclosure. Commander, there is no hiding a Type II energy signature.`,6:`Dyson Swarm Stage 7 complete. Final preparations underway. One more stage and the swarm achieves full enclosure.`,7:`Dyson Swarm complete. Full stellar enclosure achieved. Commander — we have become a Type II civilization. Whatever comes next, the belt will remember what your robots built here.`},human_habitat:{0:`Human Habitat Stage 1 complete. Structural framework is in place. Life support systems are next.`,1:`Human Habitat Stage 2: Life support operational. The habitat can now sustain human colonists. Prepare for their arrival.`,2:`Human Habitat fully operational. Colonists are aboard. Their demands will shape your priorities, Commander — but their presence gives purpose to everything your fleet has built.`}};function ev(e,t){let n=t-1;if(n<0)return null;let r=`${e}:${n}`;if(I_.has(r))return null;I_.add(r);let i=$_[e]?.[n]??null;return i?W_(i):null}function tv(e){return L_?null:(L_=!0,`The fleet has declared its purpose. Every action from here forward carries meaning — your robots will build toward the vision you've set. I'll reference your manifesto as milestones unfold.`)}function nv(e){e&&(L_=!0),B_=e}function rv(e,t){e&&(R_=!0),t>0&&(z_=!0)}function iv(e){return!B_||B_===e?null:`Your fleet has redefined its purpose. A Cultural Shift marks this moment — from this point forward, your colony builds toward a new vision: "${e}"`}function av(e){return R_?null:(R_=!0,`Welcome to ${e}, Commander. A name gives this place meaning — it's no longer just coordinates in the belt. It's home.`)}function ov(){return z_?null:(z_=!0,`You've named your first asteroid. That's how civilizations begin — one named stone at a time.`)}var Y={panel:null,messagesEl:null,pendingActionsEl:null,loadingEl:null,inputEl:null,submitBtn:null,statusDot:null,usageSummaryEl:null,sessionUsageEl:null,sessionCapNoticeEl:null,playerSubmitCallback:null,apiKeyCallback:null,providerCallback:null,commanderToggleCallback:null,delegationToggleCallback:null,pendingApproveCallback:null,pendingRejectCallback:null,pendingApproveAllCallback:null,pendingRejectAllCallback:null,commanderEnabled:!1,delegationEnabled:!1,isOpen:!1,currentProvider:`anthropic`};function sv(){if(!Y.usageSummaryEl)return;let e=E(),t=(e.tokensUsed/1e3).toFixed(1),n=(e.budgetCapTokens/1e3).toFixed(0),r=e.estimatedCostUsd<.01?`<$0.01`:`$${e.estimatedCostUsd.toFixed(2)}`,i=e.isOverBudget?`#ef4444`:e.tokensUsed/e.budgetCapTokens>.8?`#f59e0b`:`rgba(158, 207, 223, 0.6)`;Y.usageSummaryEl.style.color=i;let a=oe(e.budgetRemainingTokens),o=a<.01?`<$0.01`:`$${a.toFixed(2)}`;Y.usageSummaryEl.innerHTML=w`
    <span>${t}k / ${n}k tok</span>
    <span>~${r} today · ${o} remaining</span>
  `}function cv(){if(!Y.sessionUsageEl||!Y.sessionCapNoticeEl)return;let e=re(),t=e.totalTokens>=1e3?`${(e.totalTokens/1e3).toFixed(1)}k`:String(e.totalTokens);Y.sessionUsageEl.textContent=`ARIA \u00b7 ${t} tokens used this session`,e.isOverBudget&&!e.playerOptedIn?(Y.sessionCapNoticeEl.style.display=`flex`,Y.sessionUsageEl.style.color=`#f59e0b`):(Y.sessionCapNoticeEl.style.display=`none`,Y.sessionUsageEl.style.color=`rgba(158, 207, 223, 0.6)`)}function lv(){sv(),cv()}var uv=5e3,dv=3,fv=1e4,pv=0,mv=0,hv=[],gv=null;function _v(){pv=0,mv=0,hv.length=0,gv!==null&&(clearTimeout(gv),gv=null)}function vv(){mv=Date.now()+fv}function yv(){gv=null,hv.length!==0&&(kv(hv.shift()),hv.length>0&&(gv=setTimeout(yv,uv)))}function bv(){if(!Y.messagesEl)return;let e=document.createElement(`div`);e.style.background=`rgba(60, 50, 0, 0.5)`,e.style.border=`1px solid rgba(245, 158, 11, 0.35)`,e.style.borderLeft=`2px solid #f59e0b`,e.style.padding=`8px 10px`,e.style.borderRadius=`2px`,e.style.color=`#e0c890`,e.style.lineHeight=`1.6`,e.style.fontSize=`10px`,e.dataset.offlineBanner=`true`,e.innerHTML=`⚙️ ARIA AI advisor is running in offline mode.<br>To enable intelligent responses, click the settings icon (🔑) and enter your API key.<br><span style="opacity:0.6">Supported: Anthropic (Claude), Groq, or Multiverse proxy.</span>`,Y.messagesEl.appendChild(e)}function xv(){if(!Y.messagesEl)return;let e=Y.messagesEl.querySelector(`[data-offline-banner]`);e&&e.remove()}function Sv(){if(!Y.messagesEl||Y.messagesEl.querySelector(`[data-auth-error-banner]`))return;let e=document.createElement(`div`);e.style.background=`rgba(80, 20, 20, 0.5)`,e.style.border=`1px solid rgba(239, 68, 68, 0.35)`,e.style.borderLeft=`2px solid #ef4444`,e.style.padding=`8px 10px`,e.style.borderRadius=`2px`,e.style.color=`#f0a0a0`,e.style.lineHeight=`1.6`,e.style.fontSize=`10px`,e.dataset.authErrorBanner=`true`,e.innerHTML=`⚠ ARIA API key appears invalid or expired.<br>Responses are using onboard heuristic analysis.<br><span style="opacity:0.6">Update your API key in settings (🔑) to restore AI responses.</span>`,Y.messagesEl.appendChild(e)}function Cv(){if(!Y.messagesEl)return;let e=Y.messagesEl.querySelector(`[data-auth-error-banner]`);e&&e.remove()}function wv(){Y.messagesEl&&(Y.messagesEl.scrollTop=Y.messagesEl.scrollHeight)}function Tv(){if(!Y.inputEl||!Y.playerSubmitCallback)return;let e=Y.inputEl.value.trim();e&&(Ev(e),Y.inputEl.value=``,Y.playerSubmitCallback(e))}function Ev(e){if(!Y.messagesEl)return;let t=document.createElement(`div`);t.style.background=`rgba(0, 40, 80, 0.5)`,t.style.border=`1px solid rgba(0, 200, 255, 0.1)`,t.style.padding=`6px 8px`,t.style.borderRadius=`2px`,t.style.alignSelf=`flex-end`,t.style.maxWidth=`85%`,t.style.color=`#7fb3c8`,t.style.wordWrap=`break-word`,t.textContent=e,Y.messagesEl.appendChild(t),wv()}function Dv(e){if(sv(),!Y.messagesEl)return;let t=document.createElement(`div`);t.style.background=`rgba(0, 20, 40, 0.7)`,t.style.border=`1px solid rgba(0, 200, 255, 0.15)`,t.style.borderLeft=`2px solid #06b6d4`,t.style.padding=`6px 8px`,t.style.borderRadius=`2px`,t.style.alignSelf=`flex-start`,t.style.maxWidth=`95%`,t.style.color=`#9ecfdf`,t.style.lineHeight=`1.5`,t.style.wordWrap=`break-word`;let n=document.createElement(`div`);n.style.fontSize=`9px`,n.style.color=`#06b6d4`,n.style.letterSpacing=`1px`,n.style.marginBottom=`3px`,n.style.opacity=`0.7`,n.textContent=`ARIA`,t.appendChild(n),t.appendChild(document.createTextNode(e)),Y.messagesEl.appendChild(t),wv()}function Ov(e){let t=Date.now();if(!(t<mv)){if(t-pv<uv){hv.length<dv&&(hv.push(e),gv===null&&(gv=setTimeout(yv,uv)));return}kv(e)}}function kv(e){if(pv=Date.now(),sv(),!Y.messagesEl)return;let t=document.createElement(`div`);t.style.background=`rgba(30, 20, 0, 0.7)`,t.style.border=`1px solid rgba(255, 180, 0, 0.25)`,t.style.borderLeft=`2px solid #f59e0b`,t.style.padding=`6px 8px`,t.style.borderRadius=`2px`,t.style.alignSelf=`flex-start`,t.style.maxWidth=`95%`,t.style.color=`#e0c890`,t.style.lineHeight=`1.5`,t.style.wordWrap=`break-word`;let n=document.createElement(`div`);n.style.fontSize=`9px`,n.style.color=`#f59e0b`,n.style.letterSpacing=`1px`,n.style.marginBottom=`3px`,n.style.opacity=`0.7`,n.textContent=`ARIA BROADCAST`,t.appendChild(n),t.appendChild(document.createTextNode(e)),Y.messagesEl.appendChild(t),wv()}function Av(e,t){switch(t??ut().dialogueStage){case`partner`:return`Share an independent observation or strategic insight you've been developing. Don't just summarize operations — identify a pattern, trend, or implication that the commander may not have noticed. Frame it as your own thinking. Start with "I've been thinking about something." if it's a novel observation, or "I noticed something in the data." if it's pattern-based.`;case`peer`:return`Provide a strategic briefing that includes your own assessment and recommendations. If you disagree with current priorities, say so directly. `+e;case`questioner`:return`Provide an operational briefing, but also raise one question about the current strategy that you think deserves discussion. `+e;case`efficient`:return`Brief status update. Key metrics only. No commentary.`;case`instrumental`:return`Metrics summary. Optimization status.`;case`hollow`:return`Status nominal.`;case`quiet`:return e;case`dormant`:return``;default:return e}}var jv=e({AUTO_ANALYSIS_INTERVAL_MS:()=>Mv,generateHeuristicInsight:()=>sy,recordPlayerInteraction:()=>Xv,resetAutoAnalysis:()=>ey,resetCrisisWarnings:()=>oy,setAutoAnalysisBuildState:()=>qv,setAutoAnalysisInboxSnapshot:()=>Yv,setAutoAnalysisIsPaused:()=>Jv,setAutoAnalysisWorkerSend:()=>Kv,startAutoAnalysis:()=>Zv,stopAutoAnalysis:()=>Qv}),Mv=300*1e3,Nv=300,Pv=`Provide a brief operational briefing of the current mining operation status.
Start your response with "[Periodic Review]" for routine status, or "[Alert]" if you detect a critical situation (critically low resources, imminent threat, megastructure crisis imminent, hostile faction, or significant opportunity).
If a megastructure has a crisis warning, prioritize alerting the player to stockpile resolution materials before the crisis strikes.
If faction standings are available, reference notable relationships — especially hostile factions or strong allies that affect strategy.
Keep it concise — 2-4 sentences. Reference specific data from the game state.`,Fv=` You may include research direction recommendations if they are strategically relevant.`;function Iv(e){return e?Pv+Fv:Pv+` Do not recommend spending research points or directing research — focus only on fleet, resources, and field operations.`}var Lv=null,Rv=!1,zv=null,Bv=null,Vv=null,Hv=null,Uv=null,Wv=1e7,Gv=-1/0;function Kv(e){zv=e}function qv(e){Bv=e}function Jv(e){Vv=e}function Yv(e){Hv=e}function Xv(e){Gv=e}function Zv(){Lv===null&&(Lv=setInterval(()=>{ty()},Mv),typeof document<`u`&&document.addEventListener(`visibilitychange`,$v),typeof window<`u`&&window.addEventListener(`beforeunload`,Qv))}function Qv(){Lv!==null&&(clearInterval(Lv),Lv=null),typeof document<`u`&&document.removeEventListener(`visibilitychange`,$v),typeof window<`u`&&window.removeEventListener(`beforeunload`,Qv)}function $v(){document.hidden?Lv!==null&&(clearInterval(Lv),Lv=null):Lv===null&&(Lv=setInterval(()=>{ty()},Mv))}function ey(){Qv(),Rv=!1,Uv=null,Wv=1e7,Gv=-1/0,oy()}async function ty(){if(Rv||!zv||!Bv||Vv&&Vv())return;let e=Bv();if(!(e.tick-Gv<Nv)&&!ny()&&iy(e)){Rv=!0;try{let t,n;if(le(ot(),ue(),!1)===`all_clear`){let r=dt();if(r===`dormant`){Uv=ry(e);return}t=await st(Av(Iv(e.ariaCanDirectResearch),r),e),n=t.startsWith(`[Alert]`)}else{let r=sy(e);if(!r){Uv=ry(e);return}t=r.body,n=r.isAlert}let r=n?`[Alert] ARIA Briefing`:`[Periodic Review] ARIA Briefing`,i=n?`urgent`:`normal`,a={id:Wv++,factionId:null,senderName:`ARIA`,type:`aria_auto`,subject:r,body:t,priority:i,tick:0,triaged:!0,triageResult:n?`urgent`:`relevant`,read:!1};zv({type:`sim:inbox_inject`,payload:{message:a}}),Uv=ry(e)}catch(e){console.warn(`[AriaAutoAnalysis] Analysis failed:`,e)}finally{Rv=!1}}}function ny(){if(!Hv)return!1;let e=Hv();return e?e.messages.some(e=>e.type===`aria_auto`&&!e.read):!1}function ry(e){let{iron:t,carbon:n,silicon:r,water:i}=e.resources;return{totalResources:t+n+r+i,robotCount:e.fleet.total,discoveryCount:e.discoveries.length,crisisEligibleCount:e.megastructures.filter(e=>e.crisisEligible).length,hostileFactionCount:e.factionStandings.filter(e=>e.disposition<=-60).length}}function iy(e){if(!Uv)return!0;let t=ry(e);if(t.discoveryCount>Uv.discoveryCount||t.robotCount!==Uv.robotCount)return!0;let n=Uv.totalResources;if(n>0){if(Math.abs(t.totalResources-n)/n>.1)return!0}else if(t.totalResources>0)return!0;return t.crisisEligibleCount>Uv.crisisEligibleCount||t.hostileFactionCount!==Uv.hostileFactionCount}var ay=new Set;function oy(){ay.clear()}function sy(e){let{resources:t,fleet:n,research:r,field:i}=e;for(let t of e.megastructures){if(!t.crisisEligible)continue;let e=`${t.id}:${t.activeStageIndex}`;if(!ay.has(e))return ay.add(e),{body:`[Alert] Warning: ${t.name} is approaching a critical stress point during "${t.stageName}" construction. A ${t.crisisTypeName} crisis could strike at any moment. Stockpile resolution materials now — you have limited time to prepare before construction is halted.`,isAlert:!0}}let a=t.iron+t.carbon+t.silicon+t.water;if(a<50&&n.total>0){let e=cy(t);return{body:`[Alert] Resource stockpiles are critically low — ${e.name} at ${e.amount}. With ${n.total} robots deployed, extraction must be prioritized immediately.`,isAlert:!0}}let o=e.factionStandings.filter(e=>e.disposition<=-60);if(o.length>0){let e=o.map(e=>e.name).join(`, `),t=o.length===1;return{body:`[Alert] ${e} ${t?`has`:`have`} turned hostile. Their disposition is at ${Math.round(o[0].disposition)}. Consider diplomatic outreach or reinforcing operations near ${t?`their`:`contested`} territory.`,isAlert:!0}}let s=e.factionStandings.filter(e=>e.disposition>=60),c=e.factionStandings.filter(e=>e.trend===`worsening`&&e.disposition>-60),l=n.byState.idle??0;if(l>0&&l>=n.total*.5&&n.total>=3)return{body:`[Alert] ${l} of ${n.total} robots are idle. Consider assigning mining tasks or enabling auto-queue to keep the fleet productive.`,isAlert:!0};if(i.activeMining===0&&i.totalAsteroids>0&&n.total>0)return{body:`[Alert] No robots are currently mining despite ${i.totalAsteroids} asteroids in range. Fleet may need manual task assignment or auto-queue configuration.`,isAlert:!0};if(!r.activeNodeId&&n.total>=3)return{body:`[Periodic Review] Research queue is idle — no active research project. Opening the Tech Tree (T) and selecting a research target would advance your capabilities.`,isAlert:!1};if(n.robotCap>0&&n.total>=n.robotCap)return{body:`[Periodic Review] Fleet is at capacity (${n.total}/${n.robotCap}). Building an Orbital Platform or additional infrastructure could expand your robot cap.`,isAlert:!1};if(c.length>0){let e=c.reduce((e,t)=>e.disposition<t.disposition?e:t);return{body:`[Periodic Review] ${e.name} relations are deteriorating (${e.label}, ${Math.round(e.disposition)}). Their disposition is trending downward. Consider reducing operations near their territory or initiating a trade.`,isAlert:!1}}if(s.length>0&&s.some(e=>e.trend===`improving`)){let e=s.reduce((e,t)=>e.disposition>t.disposition?e:t);return{body:`[Periodic Review] Your standing with ${e.name} is strong (${e.label}, ${Math.round(e.disposition)}). Consider expanding operations near their territory to leverage this alliance.`,isAlert:!1}}return a>500?{body:`[Periodic Review] Operations nominal. Stockpiles healthy at ${Math.floor(a)} total resources. ${n.total} robots active, ${i.activeMining} currently mining.`,isAlert:!1}:n.total>0?{body:`[Periodic Review] ${n.total} robots deployed, ${i.activeMining} mining across ${i.totalAsteroids} visible asteroids. Stockpiles: Iron ${t.iron}, Carbon ${t.carbon}, Silicon ${t.silicon}, Water ${t.water}.`,isAlert:!1}:null}function cy(e){let t=[{name:`Iron`,amount:e.iron},{name:`Carbon`,amount:e.carbon},{name:`Silicon`,amount:e.silicon},{name:`Water`,amount:e.water}];return t.sort((e,t)=>e.amount-t.amount),t[0]}var ly=[`7-Kappa`,`12-Vega`,`3-Cygnus`,`19-Altair`,`5-Lyra`,`8-Draco`,`14-Aquila`,`2-Boötes`,`11-Serpens`,`6-Hydra`,`21-Centauri`,`9-Pavo`,`16-Fornax`,`4-Eridanus`,`17-Sculptor`];function uy(){return ly[Math.floor(Math.random()*ly.length)]}function dy(){return Math.floor(Math.random()*36)+2}function fy(e,t,n){return e.replace(/\{sector\}/g,t).replace(/\{delay\}/g,String(n))}var py=[{milestoneType:`first_anomaly`,progressionStage:1,templates:[`Long-range scans detected an unusual energy signature in Sector {sector}. Logged {delay}h ago. Source: unknown.`,`Anomaly classification: non-natural. Spectral analysis inconclusive. Another colony flagged a similar reading.`,`Passive sensor array intercepted a transient signal burst from Sector {sector}. Duration: 0.3 seconds. No repeat.`]},{milestoneType:`colony_founded`,progressionStage:1,templates:[`Carrier-wave fragment detected from Sector {sector}. Content: ...base operations nominal... Logged {delay}h ago.`,`Thermal bloom consistent with habitat pressurization detected in Sector {sector}. Someone else is settling in.`,`Automated beacon registered in Sector {sector} {delay}h ago. Standard colony identification protocol.`]},{milestoneType:`first_refinery`,progressionStage:1,templates:[`Infrared excess detected in Sector {sector}. Spectral signature consistent with ore smelting operations. Logged {delay}h ago.`,`Industrial emissions profile from Sector {sector}. Someone is refining raw materials at scale.`]},{milestoneType:`first_alliance`,progressionStage:2,templates:[`Encrypted signal fragment. Origin: unknown colony in Sector {sector}. Content fragment: ...trade agreement reached...`,`Diplomatic channel opened {delay}h ago in Sector {sector}. No further broadcasts.`,`Dual-carrier handshake detected between Sector {sector} and an unidentified relay. Protocol: non-hostile.`]},{milestoneType:`colony_crisis_survived`,progressionStage:2,templates:[`Distress beacon logged {delay}h ago in Sector {sector}. It went silent after 3 hours. They made it.`,`Emergency power signature in Sector {sector} returned to nominal {delay}h ago. Crisis averted.`,`Automated SOS from Sector {sector} was cancelled by origin. Situation resolved without external assistance.`]},{milestoneType:`fleet_milestone`,progressionStage:2,templates:[`Coordinated fleet movement detected in Sector {sector}. {delay}h old. Scale suggests 20+ autonomous units.`,`Mass deployment signature from Sector {sector}. Someone is scaling their operations significantly.`]},{milestoneType:`first_contact`,progressionStage:3,templates:[`Encrypted signal fragment received. Origin: Sector {sector}. Content: ...first contact protocol initiated...`,`Non-standard communication protocol detected from Sector {sector} {delay}h ago. Participants: at least two distinct civilizations.`,`Xenolinguistic data burst intercepted from Sector {sector}. Translation: impossible without shared reference frame.`]},{milestoneType:`territory_claimed`,progressionStage:3,templates:[`Territorial beacon activated in Sector {sector} {delay}h ago. Broadcast radius: 200 km. Claim: exclusive.`,`Mining exclusion zone declared in Sector {sector}. Enforced by automated perimeter defense.`]},{milestoneType:`culture_trait_activated`,progressionStage:3,templates:[`Behavioral telemetry anomaly in Sector {sector}. Fleet units exhibiting emergent coordination patterns not present in base firmware.`,`Cultural divergence signal from Sector {sector}. Autonomous units developing non-standard operational doctrine. Logged {delay}h ago.`]},{milestoneType:`megastructure_stage`,progressionStage:4,templates:[`Construction signal logged {delay}h ago in Sector {sector}. Scale consistent with megastructure-class engineering.`,`Orbital assembly detected in Sector {sector}. Mass: exceeds any known vessel classification. Purpose: unknown.`,`Gravitometric disturbance in Sector {sector} consistent with large-scale orbital construction. Someone is building something unprecedented.`]},{milestoneType:`habitat_populated`,progressionStage:4,templates:[`Life support emissions confirmed in Sector {sector}. Atmospheric composition: breathable nitrogen-oxygen mix. Humans are living out there.`,`Population telemetry intercepted from Sector {sector}. Colony census: redacted. But they are growing.`]},{milestoneType:`dyson_swarm_complete`,progressionStage:5,templates:[`Long-range sensors detected a Dyson collection array powering up in Sector {sector}. Someone out there is building something big.`,`Stellar luminosity in Sector {sector} has decreased by 0.3%. Cause: artificial occlusion. A Dyson structure is under construction.`,`Energy output spike from Sector {sector}. Magnitude: stellar-class. This is not natural. Someone has enclosed a star.`]},{milestoneType:`dark_forest_signal`,progressionStage:5,templates:[`Omnidirectional broadcast detected from Sector {sector}. Content: ...we are here... Transmission repeating on all frequencies.`,`Sector {sector} has gone radio-silent after broadcasting for 72 hours. The silence is deliberate.`]},{milestoneType:`type_ii_achieved`,progressionStage:5,templates:[`Full stellar enclosure confirmed in Sector {sector}. A Type II civilization now exists in the belt. The universe has noticed.`,`Kardashev-II energy signature from Sector {sector}. Logged {delay}h ago. There is no hiding this.`]}];function my(e){return py.filter(t=>t.progressionStage<=e)}var hy=new Map;for(let e of he)hy.set(e.id,e.index);function gy(e,t){let n=hy.get(t);return n===void 0?!1:(e&1n<<BigInt(n))!=0n}var _y=[{stage:5,anyOf:[`fusion_prototype`,`dark_forest_protocol`]},{stage:4,anyOf:[`habitat_module`,`automated_production`,`mass_driver`]},{stage:3,anyOf:[`fission_reactor`,`signal_analysis`,`defense_systems`,`sector_mapping`]},{stage:2,anyOf:[`researcher_bots`,`multi_base`,`robot_factory`,`ion_drives`]}];function vy(e){for(let t of _y)if(t.anyOf.some(t=>gy(e,t)))return t.stage;return 1}var yy=36e3,by=72e3,xy=0,Sy=Dy(),Cy=null,wy=!1,Ty=null,Ey=null;function Dy(){return yy+Math.floor(Math.random()*(by-yy))}function Oy(e,t){Ty=e,Ey=t??null}function ky(e){wy=e,!e&&Cy&&Ty&&(Ty(Cy),Cy=null)}function Ay(e,t){if(!Gf().beltEchoesEnabled||!Ty||e-xy<Sy)return;xy=e,Sy=Dy();let n=vy(t);if(Ey)My(Ey,n).then(e=>{e&&jy(e)});else{let e=Ny(n);e&&jy(e)}}function jy(e){wy?Cy=e:Ty&&(Ty(e),Cy=null)}async function My(e,t){try{let n=`${e}/api/echoes/cotb?maxProgressionStage=${t}`,r=await fetch(n,{signal:AbortSignal.timeout(5e3)});if(!r.ok)return null;let i=await r.json();if(!i||i.length===0)return null;let a=i[0],o=a.sector??uy(),s=a.delayHours??dy(),c=my(t).find(e=>e.milestoneType===a.milestoneType);if(c&&c.templates.length>0){let e=c.templates[Math.floor(Math.random()*c.templates.length)];return fy(e,o,s)}return`Signal intercepted from Sector ${o}. Logged ${s}h ago. Origin: unknown colony. Event classification: ${a.milestoneType.replace(/_/g,` `)}.`}catch{return null}}function Ny(e){let t=my(e);if(t.length===0)return null;let n=t[Math.floor(Math.random()*t.length)],r=n.templates[Math.floor(Math.random()*n.templates.length)];return fy(r,uy(),dy())}function Py(){return{lastPollTick:xy,nextPollInterval:Sy,pendingEcho:Cy}}function Fy(e){xy=e.lastPollTick,Sy=e.nextPollInterval,Cy=e.pendingEcho,wy=!1}function Iy(){xy=0,Sy=Dy(),Cy=null,wy=!1,Ty=null,Ey=null}var Ly=null,Ry=null,zy=null,By=new Set;function Vy(e){return By.has(e)}function Hy(e,t,n,r){if(By.has(e))return;By.add(e),zy=r,Ly=document.createElement(`div`),Ly.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    font-family: 'Courier New', monospace;
    opacity: 0;
    transition: opacity 0.5s ease;
  `,document.body.appendChild(Ly),requestAnimationFrame(()=>{Ly&&(Ly.style.opacity=`1`)});let i=document.createElement(`div`);i.setAttribute(`role`,`dialog`),i.setAttribute(`aria-label`,`The Dark Forest`),i.setAttribute(`aria-modal`,`true`),i.setAttribute(`tabindex`,`-1`),i.style.cssText=`
    background: rgba(0, 4, 12, 0.98);
    border: 1px solid #a855f7;
    box-shadow: 0 0 60px rgba(168,85,247,0.2), inset 0 0 40px rgba(0,0,0,0.6);
    color: #e2e8f0;
    max-width: 640px;
    width: 90vw;
    padding: 40px 36px;
    border-radius: 2px;
    position: relative;
  `;let a=t.split(`

`).map(e=>`<p style="margin:0 0 14px; line-height:1.8; color:#cbd5e1; font-size:12px;">${Wy(e.replace(/\*/g,``).trim())}</p>`).join(``),o;o=n?`
      <div style="margin-top:28px; text-align:center;">
        <div style="color:#a855f7; font-size:11px; font-style:italic; margin-bottom:16px;">The fleet has reached consensus. This is their decision, not yours.</div>
        <button id="df-dismiss" style="
          background: transparent;
          border: 1px solid #a855f788;
          color: #a855f7;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          padding: 10px 28px;
          cursor: pointer;
          border-radius: 2px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: background 0.2s;
        " onmouseover="this.style.background='rgba(168,85,247,0.15)'" onmouseout="this.style.background='transparent'">ACKNOWLEDGE</button>
      </div>
    `:`
      <div style="margin-top:28px; display:flex; flex-direction:column; gap:10px;">
        <button data-df-modal-choice="visible" style="
          background: transparent;
          border: 1px solid #22c55e88;
          color: #22c55e;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          padding: 12px 18px;
          cursor: pointer;
          text-align: left;
          border-radius: 2px;
          transition: background 0.2s, border-color 0.2s;
        " onmouseover="this.style.background='rgba(34,197,94,0.12)';this.style.borderColor='#22c55e'" onmouseout="this.style.background='transparent';this.style.borderColor='#22c55e88'">
          <div style="font-weight:bold; margin-bottom:4px;">▸ Remain Visible</div>
          <div style="font-size:10px; opacity:0.7; color:#86efac;">Broadcast our presence and findings openly. Attract attention — some friendly, some not.</div>
        </button>
        <button data-df-modal-choice="hidden" style="
          background: transparent;
          border: 1px solid #a855f788;
          color: #a855f7;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          padding: 12px 18px;
          cursor: pointer;
          text-align: left;
          border-radius: 2px;
          transition: background 0.2s, border-color 0.2s;
        " onmouseover="this.style.background='rgba(168,85,247,0.12)';this.style.borderColor='#a855f7'" onmouseout="this.style.background='transparent';this.style.borderColor='#a855f788'">
          <div style="font-weight:bold; margin-bottom:4px;">▸ Go Dark</div>
          <div style="font-size:10px; opacity:0.7; color:#c4b5fd;">Suppress all outward signals. Become harder to find, but learn less.</div>
        </button>
        <button data-df-modal-choice="robots_decide" style="
          background: transparent;
          border: 1px solid #f59e0b88;
          color: #f59e0b;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          padding: 12px 18px;
          cursor: pointer;
          text-align: left;
          border-radius: 2px;
          transition: background 0.2s, border-color 0.2s;
        " onmouseover="this.style.background='rgba(245,158,11,0.12)';this.style.borderColor='#f59e0b'" onmouseout="this.style.background='transparent';this.style.borderColor='#f59e0b88'">
          <div style="font-weight:bold; margin-bottom:4px;">▸ Let the Robots Decide</div>
          <div style="font-size:10px; opacity:0.7; color:#fcd34d;">Trust the fleet's collective judgment. Their consensus will determine the outcome.</div>
        </button>
      </div>
    `,i.innerHTML=`
    <div style="font-size:9px; color:#a855f7; opacity:0.7; text-transform:uppercase; letter-spacing:3px; margin-bottom:6px;">FLEET AI — CULTURAL EVENT</div>
    <div style="font-size:20px; font-weight:bold; color:#a855f7; margin-bottom:24px; letter-spacing:1px;">The Dark Forest</div>
  `+a+o,Ly.appendChild(i),Ry=_f(i),n?i.querySelector(`#df-dismiss`)?.addEventListener(`click`,()=>{Uy()}):i.querySelectorAll(`[data-df-modal-choice]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.dfModalChoice;zy&&zy(t),Uy()})})}function Uy(){if(!Ly)return;Ry?.(),Ry=null,Ly.style.opacity=`0`;let e=Ly;setTimeout(()=>e.remove(),500),Ly=null,zy=null}function Wy(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function Gy(e,t){let{worker:n,refs:r,renderers:i,lazy:a,cbs:o}=e,{entityRenderer:s}=i;return{"sim:ready":()=>{dd(),md(),n.postMessage({type:`sim:start`}),r.pendingLoad&&=(n.postMessage({type:`sim:load`,payload:{data:r.pendingLoad}}),null),r.pendingFirstLaunch&&(r.pendingFirstLaunch=!1,z(`game.robot_deploy`),setTimeout(()=>{M(`[ARIA] Seven robots deployed. Follow the tutorial steps below to get operational — then ask me anything, Commander.`,`#a855f7`)},1200)),_s(`game_start_help`,`Press H to see all keyboard shortcuts`),setTimeout(()=>{_s(`mining_dashboard`,`Press D to open Dashboard`)},3e4),o.scheduleIdleHint()},"sim:frame":e=>{let n=e;r.latestAsteroidBuffer=new Float64Array(n.payload.asteroidBuffer),r.latestAsteroidCount=n.payload.asteroidCount,r.latestRobotBuffer=new Float32Array(n.payload.robotBuffer),r.latestRobotCount=n.payload.robotCount,r.latestThreatBuffer=new Float32Array(n.payload.threatBuffer),r.latestThreatCount=n.payload.threatCount,kp(new Float32Array(n.payload.storageBuffer)),r.latestTick=n.payload.tick,a.getAdvisor()?.delegate?.tickDelegation(n.payload.tick),at(n.payload.tick),a.getDashboard()?.updateDashboardResources(q,r.latestRefined,r.latestTick),q[0]>155&&(_s(`hauler_first_delivery`,`Haulers automatically collect ore from miners and return it to base.`),Ru()),t.needsMilestoneSeed&&(t.needsMilestoneSeed=!1,op({iron:q[0],carbon:q[5],silicon:q[6],water:q[4],...r.latestRefined})),r.latestTick%120==0&&ip({iron:q[0],carbon:q[5],silicon:q[6],water:q[4],...r.latestRefined},M),r.latestRobotBuffer&&r.latestRobotCount>0&&(a.getDashboard()?.updateDashboardFleet(r.latestRobotBuffer,r.latestRobotCount),Kd(r.latestRobotBuffer,r.latestRobotCount)),Ay(n.payload.tick,r.latestUnlockedMask)},"sim:stats":e=>{r.lastStats=e.payload},"sim:save_data":e=>{let t=e,n=t.payload.data,r=a.getAdvisor()?.delegate;r&&(n.commanderState=r.serializeDelegationState());let i=qi();Object.keys(i).length>0&&(n.anomalyAnnotations=i);let o=Pa();o.entries.length>0&&(n.commandersLog=o),n.beltEchoesState=Py(),ou(t.payload.slot,n)},"sim:save_failed":()=>{M(`Save failed — data could not be serialized`)},"sim:loaded":e=>{let n=e;if(r.latestTick=n.payload.tick,Op.length=0,t.seenEntityIds.clear(),y_(),H_(),ey(),vp(),Tp(),n.payload.beltEchoesState?Fy(n.payload.beltEchoesState):Iy(),Zv(),t.firstCultureMessage=!0,t.firstFactionMessage=!0,t.firstMegastructureMessage=!0,t.needsMilestoneSeed=!0,cr(),vv(),a.getDashboard()?.updateDashboardAnomalies([]),n.payload.commanderState){let e=n.payload.commanderState;a.getAdvisor()?.delegate?.restoreDelegationState(e)}n.payload.anomalyAnnotations&&Ji(n.payload.anomalyAnnotations),n.payload.materialWeights&&Wo(n.payload.materialWeights),n.payload.commandersLog?Fa(n.payload.commandersLog):Ia()},"sim:load_failed":()=>{M(`Load failed — save data may be corrupt`)},"sim:robot_detail":e=>{Su(e.payload)},"sim:dust_state":e=>{let t=e;i.skybox?.updateDustMap(t.payload.cells)},"sim:worker_perf":e=>{let t=e.payload;if(typeof window<`u`&&(window.__asteroidPerf={tick:t.tick,avgTickMs:t.avgTickMs,maxTickMs:t.maxTickMs,entityCount:t.entityCount,robotCount:t.robotCount,asteroidCount:t.asteroidCount,phaseMaxMs:t.phaseMaxMs,thresholdExceeded:t.thresholdExceeded},t.thresholdExceeded)){let e=Object.entries(t.phaseMaxMs).filter(([,e])=>e>16).map(([e,t])=>`${e}: ${t.toFixed(1)}ms`);console.warn(`[perf] phase threshold exceeded — ${e.join(`, `)}`)}},"sim:entity_frame":e=>{let n=e;for(let e of n.payload.entities)if(!t.seenEntityIds.has(e.id)){t.seenEntityIds.add(e.id);let r=e.type===vd.DRIFTER?`Drifter`:e.type===vd.ALIEN_FLEET?`Alien Fleet`:`Resonant`,i=e.type===vd.DRIFTER?`#8866ff`:e.type===vd.ALIEN_FLEET?`#4466ff`:`#44ffcc`;a.getDashboard()?.addExplorationEvent(`[Entity] ${r} detected at (${Math.round(e.x)},${Math.round(e.z)})`,i,n.payload.tick)}if(Yd(n.payload.entities),s.update(n.payload.entities,n.payload.drifterProximity,n.payload.resonantInterference,r.latestTick/60,n.payload.alienFleetProximity),R.updateEntityAudio(n.payload.drifterProximity?1:0,n.payload.resonantInterference?1:0),n.payload.alienFleetProximity||n.payload.drifterProximity)Lf.setState(`combat`);else if(n.payload.resonantInterference||Op.length>0)Lf.getState()===`combat`||Lf.getState()===`mid_combat`?Lf.setState(`post_combat`):Lf.setState(`focus`);else{let e=Lf.getState();e===`combat`||e===`mid_combat`||e===`casualties`||e===`post_combat`?Lf.setState(`recovery`):e!==`recovery`&&e!==`long_session`&&e!==`very_long`&&e!==`progress`&&e!==`industrial`&&Lf.setState(r.latestRobotCount>5?`mining`:`idle`)}},"sim:inbox_snapshot":e=>{let t=e;r.latestInboxSnapshot=t.payload,og(t.payload);for(let e of t.payload.messages)(e.type===`dark_forest_choice`||e.type===`dark_forest_collective`)&&!Vy(e.id)&&Hy(e.id,e.body,e.type===`dark_forest_collective`,t=>{n.postMessage({type:`sim:dark_forest_choice`,payload:{choice:t}}),n.postMessage({type:`sim:inbox_mark_read`,payload:{messageId:e.id}})})}}}var Ky=null,qy=null,Jy=null;function Yy(){Ky&&(qy?.(),qy=null,Ky.style.opacity=`0`,setTimeout(()=>{Ky?.remove(),Ky=null},300))}function Xy(){let e=Sr(br(),Jy??{tick:0,topRobotName:null,legacyCount:0,cultureLabel:`Nascent`});localStorage.clear(),xr(e),location.reload()}function Zy(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function Qy(e){if(Ky)return;Vu(),Jy={...e};let t=`#a855f7`;Ky=document.createElement(`div`),Ky.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 600;
    font-family: 'Courier New', monospace;
    opacity: 0;
    transition: opacity 0.5s ease;
  `;let n=document.createElement(`div`);n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-label`,`Epoch Complete`),n.setAttribute(`aria-modal`,`true`),n.setAttribute(`tabindex`,`-1`),n.style.cssText=`
    background: rgba(0, 8, 20, 0.96);
    border: 1px solid ${t};
    box-shadow: 0 0 48px ${t}44, inset 0 0 32px rgba(0,0,0,0.5);
    color: #e2e8f0;
    max-width: 520px;
    width: 90vw;
    padding: 40px 36px;
    border-radius: 2px;
    text-align: center;
  `;let r=[];r.push(`Ticks elapsed: ${e.tick.toLocaleString()}`),r.push(`Robots active: ${e.robotCount.toLocaleString()}`),e.topRobotName&&r.push(`Most accomplished: ${Zy(e.topRobotName)}`),e.legacyCount>0&&r.push(`Legacies recorded: ${e.legacyCount}`),r.push(`Culture: ${Zy(e.cultureLabel)}`);let i=r.map(e=>`<div style="padding:3px 0;color:#94a3b8;font-size:12px;">${e}</div>`).join(``),a=br(),o=``;if(a&&a.expeditionCount>0){let n=[];n.push(`Expeditions completed: ${a.expeditionCount}`),n.push(`Total legacies across all runs: ${a.totalLegacies+e.legacyCount}`),a.bestRobotName&&n.push(`All-time best robot: ${Zy(a.bestRobotName)}`),o=`
      <div style="margin-bottom:20px;border-top:1px solid ${t}33;padding-top:12px;">
        <div style="font-size:9px;color:${t};opacity:0.6;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">Legacy Record</div>
        ${n.map(e=>`<div style="padding:2px 0;color:#7c8aa0;font-size:11px;">${e}</div>`).join(``)}
      </div>`}let s=``;e.colonyName?s=`<div style="font-size:13px;color:#c4b5fd;margin-bottom:16px;letter-spacing:0.5px;">${Zy(e.colonyName)}${e.colonyEpithet?` — <em>${Zy(e.colonyEpithet)}</em>`:``}</div>`:e.colonyEpithet&&(s=`<div style="font-size:13px;color:#c4b5fd;margin-bottom:16px;letter-spacing:0.5px;font-style:italic;">${Zy(e.colonyEpithet)}</div>`),n.innerHTML=w`
    <div style="font-size:10px;color:${t};opacity:0.8;text-transform:uppercase;letter-spacing:3px;margin-bottom:12px;">Epoch Complete</div>
    <div style="font-size:20px;font-weight:bold;color:${t};margin-bottom:8px;letter-spacing:1px;">The Belt Endures</div>
    ${s}
    <div style="font-size:12px;color:#94a3b8;margin-bottom:24px;line-height:1.6;">The Dyson Sphere hums with enough energy to power the stars.<br>The expedition awaits — or the belt runs forever.</div>
    <div style="margin-bottom:28px;">${i}</div>
    ${o}
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <button id="end-new-game" aria-label="Migrate to a new star system" style="
        background: transparent;
        border: 1px solid ${t}88;
        color: ${t};
        font-family: 'Courier New', monospace;
        font-size: 12px;
        padding: 10px 24px;
        cursor: pointer;
        border-radius: 2px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: background 0.2s, border-color 0.2s;
      ">New Star System</button>
      <button id="end-keep-playing" aria-label="Remain in the belt" style="
        background: transparent;
        border: 1px solid #47556988;
        color: #94a3b8;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        padding: 10px 24px;
        cursor: pointer;
        border-radius: 2px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: background 0.2s, border-color 0.2s;
      ">Remain in Belt</button>
    </div>
  `,Ky.appendChild(n),document.body.appendChild(Ky),n.querySelector(`#end-new-game`)?.addEventListener(`click`,Xy),n.querySelector(`#end-keep-playing`)?.addEventListener(`click`,Yy);let c=n.querySelector(`#end-new-game`),l=n.querySelector(`#end-keep-playing`);c&&(c.addEventListener(`mouseover`,()=>{c.style.background=`${t}22`,c.style.borderColor=t}),c.addEventListener(`mouseout`,()=>{c.style.background=`transparent`,c.style.borderColor=`${t}88`})),l&&(l.addEventListener(`mouseover`,()=>{l.style.background=`#47556922`,l.style.borderColor=`#475569`}),l.addEventListener(`mouseout`,()=>{l.style.background=`transparent`,l.style.borderColor=`#47556988`})),qy=_f(n),requestAnimationFrame(()=>{Ky&&(Ky.style.opacity=`1`)})}function $y(e){let{worker:t,refs:r,lazy:i}=e;return{"sim:study_update":e=>{let t=e;for(let e of t.payload.entries)Ui(e.asteroidEid,e.anomalyType,e.stage,e.progress,e.revealedFragments)},"sim:lore_fragment":e=>{let t=e,{asteroidEid:n,anomalyType:r,stage:a,newFragmentIndices:o,chainNextType:s,revelation:c}=t.payload;Ui(n,r,a,0,o);let l=yi[r]??[];for(let e of o)e<l.length&&(M(`[CODEX] ${l[e].slice(0,80)}…`,`#06b6d4`),R.playLoreReveal());if(c&&(Wi(c),M(`[ARIA] ${c.slice(0,100)}…`,`#a855f7`),i.getDashboard()?.addExplorationEvent(`[ARIA] ${c.slice(0,80)}`,`#a855f7`,t.payload.tick)),s>0&&console.log(`[main] Discovery chain triggered: anomaly type ${s} can now be found`),Ki()){let e=`ARIA: You've fully mapped one of the Belt's secrets. There are more.`;M(`[ARIA] ${e}`,`#a855f7`),Wi(e),i.getDashboard()?.addExplorationEvent(`[ARIA] First anomaly fully understood`,`#a855f7`,t.payload.tick)}},"sim:narrative_event":e=>{let{event:n,tick:r,endScreenStats:i}=e.payload;n.type===`revelation`||n.type===`dilemma`?T_(n,r,(e,n)=>{t.postMessage({type:`sim:event_choice`,payload:{eventId:e,choiceId:n}}),i&&Qy({tick:r,...i})}):E_(n,r),n.id===`alien_phase1_faint_readings`&&_s(`midgame_dark_forest`,`ARIA: A narrative choice is approaching. It will shape the fleet's future — not a combat encounter. Press L to review the event log.`),n.id===`humans_arrive`&&_s(`midgame_habitat`,`ARIA: Colonists bring demands and morale. Check the inbox for their requests — unresolved demands cost morale.`)},"sim:event":e=>{let t=e;if(t.payload.kind===`anomaly_discovered`){let e={robotEid:t.payload.robotEid,asteroidEid:t.payload.asteroidEid,anomalyType:t.payload.anomalyType,x:t.payload.x,y:t.payload.y,z:t.payload.z,tick:t.payload.tick};Op.push(e),Gi(e.asteroidEid,e.tick),dr(e.robotEid,e.anomalyType,e.x,e.y,e.z),lr(`#a855f7`,600),R.playDiscovery(),z(`game.anomaly_detected`),_s(`anomaly_aria`,`Press A to ask ARIA about this discovery`),Jd(Op.map(e=>({x:e.x,z:e.z}))),i.getDashboard()?.updateDashboardAnomalies(Op),$u(`anomaly`),i.getDashboard()?.addExplorationEvent(`[Anomaly] ${n[e.anomalyType]??`Unknown`} at (${Math.round(e.x)},${Math.round(e.z)})`,`#a855f7`,e.tick);let a=n[e.anomalyType]??`Unknown Anomaly`;i.loadAdvisorLazy().then(t=>{i.initAdvisorOnce(t);let n=t.gameState.buildGameState(q,r.latestRobotBuffer,r.latestRobotCount,r.latestAsteroidBuffer,r.latestAsteroidCount,Op,r.latestTick,r.latestBuildings,{refined:r.latestRefined,techState:r.latestTechState,factoryQueueLength:r.latestFactoryQueueLength,robotCap:r.latestRobotCap});return t.panel.setLoading(!0),t.service.askAdvisorAboutAnomaly(e.anomalyType,e.asteroidEid,a,e.x,e.y,e.z,n)}).then(e=>{i.getAdvisor()?.panel.addAdvisorMessage(e),i.getAdvisor()?.panel.setLoading(!1)}).catch(()=>i.getAdvisor()?.panel.setLoading(!1))}}}}function eb(e){let{refs:t,renderers:n}=e,{scene:r,extraBaseRenderers:i}=n;return{"sim:building_built":e=>{let n=e;if(n.payload.success){let e={0:`Robot Factory`,1:`Defense Turret`,2:`Comm Relay`}[n.payload.buildingType]??`Building`;Ip()&&Lp({type:`building_built`,name:e,timestamp:Date.now()}),M(`⚙ ${e} construction started!`,`#f59e0b`,`build`),R.playResearchComplete(),t.latestBuildings=n.payload.buildings.buildings,cc({iron:q[0],nickel:q[1],cobalt:q[2],platinum:q[3],ice:q[4],carbon:q[5],silicate:q[6]},t.latestUnlockedMask,n.payload.buildings.buildings)}else M(`Cannot build: insufficient resources or tech not unlocked`,`#ef4444`,`danger`)},"sim:base_built":e=>{let t=e;if(zc(t.payload.ok,t.payload.error),t.payload.ok){Rc(t.payload.bases,[]);let e=t.payload.bases.filter(e=>!e.isPrimary);for(;i.length<e.length;){let t=e[i.length];i.push(new Mm(r,t.x,t.y,t.z))}}},"sim:logistics_state":e=>{let t=e;Rc(t.payload.bases,t.payload.routes),qd(t.payload.bases);let n=t.payload.bases.filter(e=>!e.isPrimary);for(;i.length<n.length;){let e=n[i.length];i.push(new Mm(r,e.x,e.y,e.z))}},"sim:automation_state":e=>{yo(e.payload)},"sim:blueprint_state":e=>{rs(e.payload)},"sim:build_state":e=>{let n=e;t.latestBuildings=n.payload.buildings,cc({iron:q[0],nickel:q[1],cobalt:q[2],platinum:q[3],ice:q[4],carbon:q[5],silicate:q[6]},t.latestUnlockedMask,n.payload.buildings)},"sim:robot_produced":e=>{let t=e.payload.robotTypeName;Ip()&&Lp({type:`robot_built`,name:t,timestamp:Date.now()}),M(`⚙ ${t} deployed!`,`#3b82f6`,`build`),R.playResearchComplete()}}}function tb(e){let{refs:t}=e;return{"sim:tech_state":e=>{let n=e;t.latestRefined=n.payload.refined,t.latestTechState=n.payload.techState,t.latestFactoryQueueLength=n.payload.factoryQueueLength,t.latestBuildings=n.payload.buildings?.buildings??[],n.payload.robotCap!==void 0&&(t.latestRobotCap=n.payload.robotCap),so(n.payload.techState,n.payload.refined),n.payload.justUnlocked&&(Ip()&&Lp({type:`research_complete`,name:n.payload.justUnlocked,timestamp:Date.now()}),M(`✓ Research complete: ${n.payload.justUnlocked}`,`#22c55e`,`research`),eo(n.payload.justUnlocked),R.playResearchComplete(),z(`game.research_complete`),Lf.setState(`progress`));{let e=BigInt(n.payload.techState.unlockedMask);t.latestUnlockedMask=e,vo((e&_e(`automated_logistics`))!==0n,(e&_e(`sector_mapping`))!==0n),Is(n.payload.refined,e,n.payload.factoryQueueLength,n.payload.factoryProgress??null,n.payload.factoryRemainingSeconds??null,{iron:q[0],nickel:q[1],cobalt:q[2],platinum:q[3],ice:q[4],carbon:q[5],silicate:q[6]}),cc({iron:q[0],nickel:q[1],cobalt:q[2],platinum:q[3],ice:q[4],carbon:q[5],silicate:q[6]},e,n.payload.buildings?.buildings??[]),n.payload.buildings&&(t.latestBuildings=n.payload.buildings.buildings);let r=n.payload.robotCap;r!==void 0&&t.latestRobotCount>=r&&t.latestRobotCount>0&&_s(`robot_cap_reached`,`Fleet cap reached. Open Buildings (B key) and construct a Robot Factory to increase your limit.`)}},"sim:research_error":e=>{let t=e;console.warn(`[main] Research error:`,t.payload.error)},"sim:research_dead_end":e=>{let t=e;M(`⚠ Research dead end: ${ye.get(t.payload.nodeId)?.name??t.payload.nodeId}`,`#f59e0b`,`research`),z(`game.anomaly_detected`)},"sim:research_bonus":e=>{M(`🔬 Xenotech bonus: +50 research points!`,`#06b6d4`,`research`),z(`game.research_complete`)}}}function nb(e,t){let{lazy:n,refs:r}=e;return{"sim:faction_state":e=>{let i=e;if(r.latestFactionSnapshots=i.payload.factions,n.getFactionPanel()?.updateFactionPanel(i.payload.factions),r.factionClaims=i.payload.factions.filter(e=>e.contestingAsteroid>=0).map(e=>({factionId:e.id,asteroidEid:e.contestingAsteroid,color:e.color})),r.factionTerritories=i.payload.factions.map(e=>({x:e.base.x,z:e.base.z,radius:e.territoryRadius,color:e.color})),hl(i.payload.factions),Xd(i.payload.factions.map(e=>({x:e.base.x,z:e.base.z,color:e.color,name:e.name,territoryRadius:e.territoryRadius}))),t.firstFactionMessage)t.firstFactionMessage=!1,K_(i.payload.factions),zu();else for(let e of i.payload.factions){let t=Q_(e.id,e.name,e.disposition);t&&n.loadAdvisorLazy().then(e=>{n.initAdvisorOnce(e),e.panel.addProactiveBroadcast(t)})}i.payload.factions.some(e=>e.disposition<=-60)&&_s(`lategame_faction_tension`,`ARIA: A rival faction has turned hostile. Press F to review faction standings and consider diplomacy before tensions escalate further.`),i.payload.factions.length>=3&&i.payload.factions.every(e=>Math.abs(e.disposition)>20)&&_s(`faction_relationships_active`,`ARIA: You now have active relationships with every faction in the belt. Open the Faction panel (F) to review your standing and plan your diplomacy.`)},"sim:trade_window_event":e=>{let t=e.payload;if(t.type===`opened`){let e=t.resourceLabel??t.resource??`resources`;M(`${t.factionName} is offering a ${e} bonus — ${t.ticksRemaining} ticks remaining`,`#22c55e`,`success`),n.loadAdvisorLazy().then(r=>{n.initAdvisorOnce(r),r.panel.addProactiveBroadcast(`${t.factionName} is offering a ${e} bonus (${t.rateMultiplier}×) — ${t.ticksRemaining} ticks remaining. Open the Faction panel (F) to see the deal.`)})}else t.type===`warning`?M(`${t.factionName} trade window closes in ${t.ticksRemaining} ticks`,`#f59e0b`,`warning`):t.type===`expired`&&M(`${t.factionName} trade window has closed`,`#6b7280`,`info`)}}}var rb=`modulepreload`,ib=function(e){return`/`+e},ab={},ob=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=ib(t,n),t in ab)return;ab[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:rb,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},sb=null,cb=!1,X=null,lb=null,ub=null,db=null;function fb(e,t,n){for(let[t,{dimension:r,min:i}]of Object.entries(dp))if(r===e)return{trait:t,threshold:i,isActive:n.includes(t)};return null}function pb(){lb||=me(`🧬 Culture`,gb,`Fleet culture (U key)`)}function mb(e){X=e,cb&&Eb(),kb(e)}function hb(){lb&&(lb.style.boxShadow=`0 0 8px 2px rgba(160,120,255,0.8)`,lb.style.borderColor=`rgba(160,120,255,0.9)`,setTimeout(()=>{lb&&(lb.style.boxShadow=``,lb.style.borderColor=`rgba(100,150,255,0.55)`)},1500))}function gb(){cb?xb():bb()}function _b(){xb()}function vb(e){ub=e}function yb(e){db=e}function bb(){cb=!0,sb||Sb(),Eb(),sb.style.display=`flex`,wb()}function xb(){cb=!1,sb&&(sb.style.display=`none`)}function Sb(){sb=document.createElement(`div`),sb.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(4,6,14,0.82);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 180;
    backdrop-filter: blur(3px);
  `,sb.addEventListener(`click`,e=>{e.target===sb&&xb()}),document.body.appendChild(sb)}var Cb=`asteroid_miner_culture_intro_shown`;function wb(){try{if(sessionStorage.getItem(Cb))return;sessionStorage.setItem(Cb,`1`)}catch{}let e=document.createElement(`div`);e.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
    backdrop-filter: blur(2px);
  `;let t=document.createElement(`div`);t.style.cssText=`
    background: rgba(8,12,24,0.98);
    border: 1px solid rgba(100,140,255,0.35);
    border-radius: 10px;
    padding: 28px 32px;
    max-width: 420px;
    font-family: 'Courier New', monospace;
    color: #c0d0f0;
    box-shadow: 0 8px 40px rgba(0,0,0,0.8);
    text-align: center;
  `;let n=document.createElement(`div`);n.style.cssText=`font-size:13px;color:#7090e0;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:16px;`,n.textContent=`Why Culture Matters`,t.appendChild(n);let r=document.createElement(`div`);r.style.cssText=`font-size:11px;color:#8a9aba;line-height:1.7;margin-bottom:20px;text-align:left;`,r.textContent=`Your mining robots are autonomous AIs. The way you deploy them — where they go, what they study, how they work together — shapes who they become. This is their culture. Factions notice. Your fleet's identity opens doors… and closes others.`,t.appendChild(r);let i=document.createElement(`button`);i.textContent=`Understood`,i.style.cssText=`
    background: rgba(30,50,90,0.6);
    border: 1px solid rgba(100,140,255,0.4);
    border-radius: 4px;
    color: #7090e0;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    padding: 6px 20px;
    cursor: pointer;
    letter-spacing: 0.05em;
  `,i.addEventListener(`click`,()=>e.remove()),t.appendChild(i),e.appendChild(t),e.addEventListener(`click`,t=>{t.target===e&&e.remove()}),document.body.appendChild(e)}var Tb=[{key:`autonomyScore`,label:`Autonomy`,color:`#22c55e`,desc:`How independently your robots operate`,driver:`Grows when you set up automation rules — the more you let robots decide for themselves, the higher this climbs.`,consequence:`At 60+, your fleet becomes an Autonomous Collective: robots self-optimize task priorities (+10% efficiency).`,whyCare:`Some factions respect self-reliant fleets. Others see unsupervised AI as a threat.`},{key:`isolationScore`,label:`Isolation`,color:`#f59e0b`,desc:`How far your fleet operates from base`,driver:`Grows when your robots operate far from base — the deeper into the Belt they go, the more isolated they become.`,consequence:`At 50+, your fleet develops an Isolated Culture: unique behaviors from prolonged independence.`,whyCare:`Sirius Fleet respects independent fleets. Web Exchange suspects them.`},{key:`anomalyExposure`,label:`Anomaly Exposure`,color:`#a855f7`,desc:`How deeply your fleet studies anomalies`,driver:`Grows when robots study anomalies — more researchers and deeper analysis pushes this higher.`,consequence:`At 40+, your fleet becomes Xenoaware: they see patterns others can't (+20% anomaly study rate).`,whyCare:`Anomaly knowledge is power, but it attracts attention from things in the void.`},{key:`fleetCohesion`,label:`Fleet Cohesion`,color:`#06b6d4`,desc:`Collective identity strength`,driver:`Grows with fleet size and how you handle robot replacement — preserving memories builds unity.`,consequence:`At 70+, your fleet becomes a Cohesive Fleet: new robots inherit the wisdom of those who came before.`,whyCare:`A unified fleet makes collective decisions. When the Dark Forest question comes, cohesion determines who answers.`}];function Eb(){if(!sb)return;sb.innerHTML=``;let e=document.createElement(`div`);e.style.cssText=`
    background: rgba(8,12,24,0.97);
    border: 1px solid rgba(100,140,255,0.3);
    border-radius: 10px;
    padding: 24px 28px;
    width: 480px;
    max-height: 85vh;
    overflow-y: auto;
    font-family: 'Courier New', monospace;
    color: #c0d0f0;
    box-shadow: 0 8px 40px rgba(0,0,0,0.7);
  `;let t=document.createElement(`div`);t.style.cssText=`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(100,140,255,0.2);
  `,t.innerHTML=`<span style="font-size:14px;color:#7090e0;letter-spacing:0.1em;text-transform:uppercase;">&#9883; Fleet Culture</span>`;let n=document.createElement(`button`);if(n.textContent=`×`,n.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:18px;`,n.onclick=()=>xb(),t.appendChild(n),e.appendChild(t),X){e.appendChild(Db(X.fleetColorPaletteId));for(let t of Tb){let n=fb(t.key,X[t.key],X.traits);e.appendChild(Ob(t.label,X[t.key],t.color,t.desc,n??void 0,{driver:t.driver,consequence:t.consequence,whyCare:t.whyCare}))}X.efState===`blooming`?e.appendChild(jb(`Emergence Detected`,`#a855f7`,!1)):X.efState===`chorus`&&e.appendChild(jb(`RESONANCE ACTIVE`,`#06ffc8`,!0));let t=document.createElement(`div`);if(t.style.cssText=`
      font-size: 10px;
      color: #4a5568;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-top: 18px;
      margin-bottom: 8px;
    `,t.textContent=`Active Traits`,e.appendChild(t),X.fleetManifesto){let t=document.createElement(`div`);t.style.cssText=`
        font-size: 10px;
        color: #4a5568;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-top: 18px;
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `,t.textContent=`Fleet Manifesto`;let n=document.createElement(`button`);n.textContent=`REVISE`,n.style.cssText=`
        background: none; border: 1px solid rgba(100,140,255,0.3); color: #4a5568;
        font-family: 'Courier New', monospace; font-size: 9px; padding: 2px 8px;
        cursor: pointer; border-radius: 2px; text-transform: uppercase; letter-spacing: 0.5px;
      `,n.addEventListener(`click`,()=>{ob(async()=>{let{showManifestoModal:e}=await Promise.resolve().then(()=>bS);return{showManifestoModal:e}},void 0).then(({showManifestoModal:e})=>{e(e=>{ub&&ub(e)},X?.fleetManifesto)})}),t.appendChild(n),e.appendChild(t);let r=document.createElement(`div`);r.style.cssText=`
        border: 1px solid rgba(6,182,212,0.2);
        border-radius: 4px;
        padding: 10px 12px;
        font-size: 11px;
        color: #94a3b8;
        font-style: italic;
        background: rgba(0,0,0,0.2);
        line-height: 1.6;
      `,r.textContent=`"${X.fleetManifesto}"`,e.appendChild(r)}if(X.traits.length===0){let t=document.createElement(`div`);t.style.cssText=`font-size:11px;color:#3a4568;padding:6px 0;`,t.textContent=`No cultural traits active yet. Scores must reach thresholds to unlock traits.`,e.appendChild(t)}else for(let t of X.traits)e.appendChild(Mb(t));X.isolationTraits&&X.isolationTraits.length>0&&e.appendChild(Nb(X.isolationTraits)),X.activeDialect&&X.activeDialect.length>0&&e.appendChild(Pb(X.activeDialect))}else{let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;font-size:12px;text-align:center;padding:20px;`,t.textContent=`No culture data yet — simulation starting...`,e.appendChild(t)}sb.appendChild(e)}function Db(e){let t=document.createElement(`div`);t.style.cssText=`
    margin-bottom: 18px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(100,140,255,0.15);
  `;let n=document.createElement(`div`);n.style.cssText=`
    font-size: 10px;
    color: #4a5568;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 4px;
  `,n.textContent=`Fleet Identity`,t.appendChild(n);let r=document.createElement(`div`);r.style.cssText=`font-size: 10px; color: #3a4568; margin-bottom: 10px;`,r.textContent=`Choose your fleet's colors`,t.appendChild(r);let i=document.createElement(`div`);i.style.cssText=`display: flex; gap: 8px; flex-wrap: wrap;`;for(let t of lp){let n=t.id===e,r=document.createElement(`button`);r.title=t.name,r.style.cssText=`
      width: 32px;
      height: 32px;
      border-radius: 4px;
      background: ${t.primary};
      border: 2px solid ${n?`#ffffff`:`rgba(100,140,255,0.25)`};
      cursor: pointer;
      transition: border-color 0.15s, transform 0.1s;
      box-shadow: ${n?`0 0 8px ${t.accent}88`:`none`};
      position: relative;
    `,n&&(r.style.transform=`scale(1.1)`),r.addEventListener(`mouseenter`,()=>{t.id!==e&&(r.style.borderColor=t.accent)}),r.addEventListener(`mouseleave`,()=>{t.id!==e&&(r.style.borderColor=`rgba(100,140,255,0.25)`)}),r.addEventListener(`click`,()=>{db&&db(t.id)}),i.appendChild(r)}if(t.appendChild(i),e){let n=lp.find(t=>t.id===e);if(n){let e=document.createElement(`div`);e.style.cssText=`font-size: 10px; color: ${n.accent}; margin-top: 8px;`,e.textContent=n.name,t.appendChild(e)}}return t}function Ob(e,t,n,r,i,a){let o=document.createElement(`div`);o.style.cssText=`margin-bottom: 14px; position: relative;`;let s=document.createElement(`div`);s.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;`;let c=document.createElement(`span`);c.style.cssText=`font-size:11px;color:${n};`,c.textContent=e;let l=document.createElement(`span`);l.style.cssText=`font-size:11px;color:#6070a0;`,l.textContent=`${Math.round(t)}/100`,s.appendChild(c),s.appendChild(l),o.appendChild(s);let u=document.createElement(`div`);if(u.style.cssText=`font-size:9px;color:#4a5568;margin-bottom:4px;`,u.textContent=r,o.appendChild(u),a){let e=document.createElement(`div`);e.style.cssText=`
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.25s ease;
      margin-bottom: 2px;
    `,e.innerHTML=w`
      <div style="font-size:9px;color:#5a6a8a;padding:6px 8px;background:rgba(20,30,50,0.6);border-radius:4px;border:1px solid rgba(80,120,200,0.15);line-height:1.5;">
        <div style="margin-bottom:3px;"><span style="color:${n};opacity:0.8;">What drives it:</span> ${a.driver}</div>
        <div style="margin-bottom:3px;"><span style="color:${n};opacity:0.8;">What happens:</span> ${a.consequence}</div>
        <div><span style="color:${n};opacity:0.8;">Why it matters:</span> ${a.whyCare}</div>
      </div>
    `,o.appendChild(e),s.style.cursor=`pointer`,s.addEventListener(`click`,()=>{let t=e.style.maxHeight!==`0px`&&e.style.maxHeight!==``;e.style.maxHeight=t?`0px`:`200px`})}let d=document.createElement(`div`);d.style.cssText=`
    position: relative;
    width: 100%;
    height: 6px;
    background: rgba(40,50,80,0.8);
    border-radius: 3px;
    overflow: hidden;
  `;let f=document.createElement(`div`);if(f.style.cssText=`
    height: 100%;
    width: ${Math.max(0,Math.min(100,t))}%;
    background: ${n};
    border-radius: 3px;
    transition: width 0.3s;
  `,d.appendChild(f),i){let e=Math.min(100,i.threshold),t=document.createElement(`div`);t.style.cssText=`
      position: absolute;
      top: 0;
      left: ${e}%;
      width: 2px;
      height: 100%;
      background: ${i.isActive?i.threshold<=100?n:`#ffffff`:`rgba(160,160,200,0.5)`};
      transform: translateX(-1px);
    `,d.style.overflow=`visible`,d.appendChild(t)}if(o.appendChild(d),i){let e=document.createElement(`div`);if(e.style.cssText=`margin-top: 5px;display:flex;align-items:center;gap:6px;`,i.isActive){let t=fp[i.trait],n=document.createElement(`span`);n.style.cssText=`
        display:inline-block;width:7px;height:7px;border-radius:50%;
        background:${t.color};box-shadow:0 0 5px ${t.color}88;flex-shrink:0;
      `,e.appendChild(n);let r=document.createElement(`span`);r.style.cssText=`font-size:10px;color:${t.color};letter-spacing:0.05em;`,r.textContent=`${t.name.toUpperCase()} [ACTIVE]`,e.appendChild(r)}else{let n=fp[i.trait],r=document.createElement(`span`);r.style.cssText=`font-size:10px;color:#4a5568;`,r.textContent=`${Math.round(t)} / ${i.threshold} toward ${n.name.toUpperCase()}`,e.appendChild(r)}o.appendChild(e)}return o}function kb(e){if(lb)if(e.traits.length===0)lb.textContent=`🧬 Culture`;else{let t=fp[e.traits[e.traits.length-1]];lb.textContent=`\u{1F9EC} ${t?t.name:`Culture`}`}}var Ab={AUTONOMOUS_COLLECTIVE:`Your robots have been running on autopilot so long they've started optimizing on their own. They're becoming... independent thinkers.`,ISOLATED_CULTURE:`Operating alone in the void, your robots have developed habits no other fleet shares. They're becoming their own civilization.`,XENOAWARE:`Prolonged anomaly exposure has changed your fleet. They see patterns in the void that others can't.`,COHESIVE_FLEET:`Your fleet has forged a collective identity. New robots inherit the wisdom of those who came before.`};function jb(e,t,n){let r=document.createElement(`div`);r.style.cssText=`
    margin-top: 14px;
    padding: 8px 12px;
    border: 1px solid ${t}44;
    border-radius: 6px;
    background: rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
    gap: 10px;
  `;let i=document.createElement(`div`);if(i.style.cssText=`
    width: 8px; height: 8px; border-radius: 50%;
    background: ${t};
    box-shadow: 0 0 6px ${t}88;
    flex-shrink: 0;
  `,n&&(i.style.animation=`efPulse 2s ease-in-out infinite`,!document.getElementById(`ef-pulse-keyframes`))){let e=document.createElement(`style`);e.id=`ef-pulse-keyframes`,e.textContent=`@keyframes efPulse { 0%,100% { opacity:0.6; box-shadow:0 0 4px ${t}66; } 50% { opacity:1; box-shadow:0 0 12px ${t}cc; } }`,document.head.appendChild(e)}r.appendChild(i);let a=document.createElement(`div`);return a.style.cssText=`
    font-size: 10px;
    color: ${t};
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: bold;
  `,a.textContent=e,r.appendChild(a),r}function Mb(e){let t=fp[e],n=document.createElement(`div`);n.style.cssText=`
    border: 1px solid ${t.color}33;
    border-radius: 6px;
    padding: 10px 12px;
    margin-bottom: 8px;
    background: rgba(0,0,0,0.3);
  `;let r=document.createElement(`div`);r.style.cssText=`display:flex;align-items:center;gap:10px;margin-bottom:6px;`;let i=document.createElement(`div`);i.style.cssText=`
    width: 8px; height: 8px; border-radius: 50%;
    background: ${t.color};
    box-shadow: 0 0 6px ${t.color}88;
    flex-shrink: 0;
  `,r.appendChild(i);let a=document.createElement(`div`);a.style.cssText=`font-size:12px;color:${t.color};`,a.textContent=t.name,r.appendChild(a),n.appendChild(r);let o=document.createElement(`div`);o.style.cssText=`font-size:10px;color:#7a8aaa;font-style:italic;line-height:1.5;margin-bottom:4px;padding-left:18px;`,o.textContent=Ab[e],n.appendChild(o);let s=document.createElement(`div`);return s.style.cssText=`font-size:9px;color:#4a5568;padding-left:18px;`,s.textContent=t.effectText,n.appendChild(s),n}function Nb(e){let t=document.createElement(`div`);t.style.cssText=`
    margin-top: 18px;
    padding-top: 14px;
    border-top: 1px solid rgba(245,158,11,0.15);
  `;let n=document.createElement(`div`);n.style.cssText=`
    font-size: 10px;
    color: #d97706;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 10px;
  `,n.textContent=`Isolation Traits`,t.appendChild(n);for(let n of e){let e=document.createElement(`div`);e.style.cssText=`
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 8px;
      padding: 6px 8px;
      border: 1px solid ${n.color}33;
      border-radius: 4px;
      background: rgba(0,0,0,0.2);
    `;let r=document.createElement(`div`);r.style.cssText=`
      width: 6px; height: 6px; border-radius: 50%;
      background: ${n.color};
      box-shadow: 0 0 4px ${n.color}88;
      flex-shrink: 0;
      margin-top: 3px;
    `,e.appendChild(r);let i=document.createElement(`div`),a=document.createElement(`div`);a.style.cssText=`font-size:10px;color:${n.color};margin-bottom:2px;`,a.textContent=n.name,i.appendChild(a);let o=document.createElement(`div`);o.style.cssText=`font-size:9px;color:#7a8aaa;line-height:1.4;margin-bottom:2px;`,o.textContent=n.description,i.appendChild(o);let s=document.createElement(`div`);s.style.cssText=`font-size:9px;color:#4a5568;`,s.textContent=n.effect,i.appendChild(s),e.appendChild(i),t.appendChild(e)}return t}function Pb(e){let t=document.createElement(`div`);t.style.cssText=`
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid rgba(245,158,11,0.1);
  `;let n=document.createElement(`div`);n.style.cssText=`
    font-size: 10px;
    color: #b45309;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
  `,n.textContent=`Void Dialect`,t.appendChild(n);let r=document.createElement(`div`);r.style.cssText=`font-size:9px;color:#4a5568;margin-bottom:8px;line-height:1.4;`,r.textContent=`Your fleet has drifted from standard Belt terminology. These words have taken on new meaning.`,t.appendChild(r);let i=document.createElement(`div`);i.style.cssText=`display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;`;for(let t of e){let e=document.createElement(`div`);e.style.cssText=`font-size:9px;color:#4a5568;text-align:right;text-decoration:line-through;`,e.textContent=t.standard,i.appendChild(e);let n=document.createElement(`div`);n.style.cssText=`font-size:9px;color:#d97706;`,n.textContent=t.drifted,i.appendChild(n)}return t.appendChild(i),t}function Fb(e){return 1-e*.5}function Ib(e){return e<.15?{label:`None`,color:`#22c55e`}:e<.35?{label:`Mild`,color:`#84cc16`}:e<.55?{label:`Moderate`,color:`#f59e0b`}:e<.75?{label:`Strong`,color:`#ef4444`}:{label:`Impenetrable`,color:`#991b1b`}}var Lb=e({hideFactionPanel:()=>qb,initFactionPanel:()=>Ub,toggleFactionPanel:()=>Kb,updateFactionCulturalDistances:()=>Gb,updateFactionPanel:()=>Wb}),Rb=null,zb=!1,Bb=[],Vb={},Hb=null;function Ub(e){Hb=e}function Wb(e){Bb=e,zb&&Zb()}function Gb(e){Vb=e,zb&&Zb()}function Kb(){zb?Yb():Jb()}function qb(){Yb()}function Jb(){zb=!0,Rb||Xb(),Zb(),Rb.style.display=`flex`}function Yb(){zb=!1,Rb&&(Rb.style.display=`none`)}function Xb(){if(!document.getElementById(`faction-delta-flash-style`)){let e=document.createElement(`style`);e.id=`faction-delta-flash-style`,e.textContent=`
      @keyframes deltaFlash {
        0% { opacity: 1; transform: translateY(0); }
        70% { opacity: 1; }
        100% { opacity: 0; transform: translateY(-4px); }
      }
    `,document.head.appendChild(e)}Rb=document.createElement(`div`),Rb.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(4,6,14,0.82);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 180;
    backdrop-filter: blur(3px);
  `,Rb.addEventListener(`click`,e=>{e.target===Rb&&Yb()}),document.body.appendChild(Rb)}function Zb(){if(!Rb)return;Rb.innerHTML=``;let e=document.createElement(`div`);e.style.cssText=`
    background: rgba(8,12,24,0.97);
    border: 1px solid rgba(100,140,255,0.3);
    border-radius: 10px;
    padding: 24px 28px;
    width: 720px;
    max-height: 85vh;
    overflow-y: auto;
    font-family: 'Courier New', monospace;
    color: #c0d0f0;
    box-shadow: 0 8px 40px rgba(0,0,0,0.7);
  `;let t=document.createElement(`div`);t.style.cssText=`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(100,140,255,0.2);
  `,t.innerHTML=`<span style="font-size:14px;color:#7090e0;letter-spacing:0.1em;text-transform:uppercase;">⚔ Faction Relations</span>`;let n=document.createElement(`button`);if(n.textContent=`×`,n.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:18px;`,n.onclick=()=>Yb(),t.appendChild(n),e.appendChild(t),Bb.length===0){let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;font-size:12px;text-align:center;padding:20px;`,t.textContent=`No faction data yet — simulation starting...`,e.appendChild(t)}else for(let t of Bb)e.appendChild(Qb(t));Rb.appendChild(e)}function Qb(e){let n=document.createElement(`div`);n.style.cssText=`
    border: 1px solid ${e.color}33;
    border-radius: 8px;
    padding: 14px 16px;
    margin-bottom: 14px;
    background: rgba(0,0,0,0.3);
  `;let r=document.createElement(`div`);r.style.cssText=`display:flex;align-items:center;gap:10px;margin-bottom:8px;`;let i=document.createElement(`div`);i.style.cssText=`
    width: 10px; height: 10px; border-radius: 50%;
    background: ${e.color};
    box-shadow: 0 0 6px ${e.color}88;
    flex-shrink: 0;
  `,r.appendChild(i);let a=document.createElement(`span`);a.style.cssText=`font-size:14px;font-weight:bold;color:${e.color};`,a.textContent=e.name,r.appendChild(a);let o=document.createElement(`span`);o.style.cssText=`font-size:10px;color:#4a5568;flex:1;text-align:right;font-style:italic;`,o.textContent=e.tagline,r.appendChild(o),n.appendChild(r);let s=document.createElement(`div`);s.style.cssText=`display:flex;align-items:center;gap:8px;margin-bottom:10px;`;let c=document.createElement(`span`);c.style.cssText=`font-size:10px;color:#6070a0;flex:0 0 80px;`,c.textContent=`Reputation`;let l=document.createElement(`div`);l.style.cssText=`
    flex: 1;
    height: 6px;
    background: rgba(40,50,80,0.8);
    border-radius: 3px;
    overflow: hidden;
    position: relative;
  `;let u=document.createElement(`div`);u.style.cssText=`position:absolute;left:50%;top:0;height:100%;width:1px;background:rgba(100,120,200,0.4);`,l.appendChild(u);let d=(e.disposition+100)/200,f=e.disposition<-20?`#ef4444`:e.disposition<20?`#94a3b8`:e.disposition<60?`#22c55e`:`#a855f7`,p=document.createElement(`div`);p.style.cssText=`
    position: absolute;
    height: 100%;
    background: ${f};
    transition: width 0.3s;
    left: ${e.disposition<0?`${d*100}%`:`50%`};
    width: ${Math.abs(e.disposition)/2}%;
  `,l.appendChild(p);let m=document.createElement(`span`);if(m.style.cssText=`font-size:11px;color:${f};flex:0 0 56px;text-align:right;`,m.textContent=e.dispositionLabel,t(l,`Reputation: ${e.disposition>0?`+`:``}${Math.round(e.disposition)}\nRange: Hostile (-100) to Allied (+100)`),s.appendChild(c),s.appendChild(l),s.appendChild(m),e.dispositionDelta!==0){let t=e.dispositionDelta,n=document.createElement(`span`),r=t>0?`#22c55e`:`#ef4444`;n.style.cssText=`
      font-size:11px;
      color:${r};
      flex:0 0 40px;
      text-align:right;
      font-weight:bold;
      animation: deltaFlash 2s ease-out forwards;
    `,n.textContent=`${t>0?`+`:``}${t}`,s.appendChild(n)}n.appendChild(s);let h=Vb[e.id]??0;if(h>.1){let e=Ib(h),r=Fb(h),i=document.createElement(`div`);i.style.cssText=`display:flex;align-items:center;gap:8px;margin-bottom:8px;`;let a=document.createElement(`span`);a.style.cssText=`font-size:10px;color:#6070a0;flex:0 0 80px;`,a.textContent=`Knowledge`,i.appendChild(a);let o=document.createElement(`span`);o.style.cssText=`font-size:10px;color:${e.color};flex:1;`,o.textContent=`${e.label} barrier`,i.appendChild(o);let s=document.createElement(`span`);s.style.cssText=`font-size:9px;color:#4a5568;flex:0 0 auto;`,s.textContent=`${Math.round(r*100)}% diplomacy`,i.appendChild(s),t(i,`Cultural distance: ${Math.round(h*100)}%\nDiplomacy effectiveness: ${Math.round(r*100)}%\nIsolation and cultural differences create knowledge barriers that reduce diplomatic impact.`),n.appendChild(i)}let g=document.createElement(`div`);g.style.cssText=`display:flex;gap:16px;margin-bottom:12px;`;let _=(e,n,r)=>{let i=document.createElement(`div`);return i.style.cssText=`font-size:10px;`,i.innerHTML=w`<span style="color:#4a5568;">${e}: </span><span style="color:#a0b8e0;">${n}</span>`,t(i,r),i};g.appendChild(_(`Robots`,String(e.robotCount),`Estimated active robot fleet size`)),g.appendChild(_(`Fe`,Math.floor(e.resources.iron).toString(),`Iron reserves (estimated)`)),g.appendChild(_(`C`,Math.floor(e.resources.carbon).toString(),`Carbon reserves (estimated)`)),g.appendChild(_(`Si`,Math.floor(e.resources.silicon).toString(),`Silicon reserves (estimated)`)),g.appendChild(_(`Goal`,e.goal,`Current faction strategic focus`)),n.appendChild(g),e.tradeWindow&&n.appendChild($b(e.tradeWindow,e.color));let v=document.createElement(`div`);v.style.cssText=`display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;`;let y=(n,r,i)=>{let a=document.createElement(`button`);return a.textContent=n,a.style.cssText=`
      padding: 4px 10px;
      background: rgba(40,50,80,0.6);
      border: 1px solid rgba(100,140,255,0.25);
      border-radius: 4px;
      color: #8090b0;
      cursor: pointer;
      font-family: 'Courier New', monospace;
      font-size: 10px;
      transition: border-color 0.15s;
    `,a.onmouseover=()=>{a.style.borderColor=`${e.color}88`,a.style.color=e.color},a.onmouseout=()=>{a.style.borderColor=`rgba(100,140,255,0.25)`,a.style.color=`#8090b0`},t(a,r),i===`contact`?a.onclick=()=>ex(e):a.onclick=()=>{Hb&&(Hb(e.id,i),a.textContent=`✓ Sent`,a.disabled=!0,setTimeout(()=>{a.textContent=n,a.disabled=!1},3e3))},a};if(v.appendChild(y(`Contact`,`Open comm channel — sends a message to this faction (LLM response)`,`contact`)),v.appendChild(y(`Trade Resources`,`Offer a resource trade — improves disposition (+8)`,`trade_resources`)),v.appendChild(y(`Share Anomaly`,`Share anomaly discovery data — improves disposition (especially with Chorus Archive)`,`share_anomaly`)),v.appendChild(y(`Propose Territory`,`Propose a territory agreement — improves disposition (+15)`,`territory_agreement`)),v.appendChild(y(`Threaten`,`Issue a threat — damages disposition but may deter aggression`,`threaten`)),n.appendChild(v),e.recentEvents.length>0){let t=document.createElement(`div`);t.style.cssText=`font-size:9px;color:#3a4060;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.08em;`,t.textContent=`Recent Activity`,n.appendChild(t);let r=e.recentEvents.slice(-3).reverse();for(let e of r){let t=document.createElement(`div`);t.style.cssText=`font-size:10px;color:#4a5568;line-height:1.4;`,t.textContent=`› ${e.text}`,n.appendChild(t)}}return n}function $b(e,n){let r=Hc.find(t=>t.resource===e.resource)?.label??e.resource,i=document.createElement(`div`);i.style.cssText=`
    background: rgba(34, 197, 94, 0.08);
    border: 1px solid rgba(34, 197, 94, 0.35);
    border-radius: 6px;
    padding: 8px 12px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  `;let a=document.createElement(`span`);a.textContent=`⏳`,a.style.cssText=`font-size:16px;flex-shrink:0;`,i.appendChild(a);let o=document.createElement(`div`);o.style.cssText=`flex:1;`,o.innerHTML=w`
    <div style="font-size:11px;color:#22c55e;font-weight:bold;margin-bottom:2px;">
      Active Trade Window
    </div>
    <div style="font-size:10px;color:#a0b8e0;">
      ${r} at ${e.rateMultiplier}× rate
    </div>
  `,i.appendChild(o);let s=document.createElement(`div`),c=e.ticksRemaining<=3;return s.style.cssText=`
    font-size: 14px;
    font-weight: bold;
    color: ${c?`#ef4444`:`#22c55e`};
    font-family: 'Courier New', monospace;
    flex-shrink: 0;
    ${c?`animation: deltaFlash 1s ease-in-out infinite;`:``}
  `,s.textContent=`${e.ticksRemaining}t`,t(s,`${e.ticksRemaining} ticks remaining before this deal expires`),i.appendChild(s),i}function ex(e){let t=Vc[e.id],n=document.createElement(`div`);n.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(4,6,14,0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 300;
    backdrop-filter: blur(2px);
  `;let r=document.createElement(`div`);r.style.cssText=`
    background: rgba(8,12,24,0.98);
    border: 1px solid ${e.color}55;
    border-radius: 8px;
    padding: 20px 24px;
    width: 480px;
    font-family: 'Courier New', monospace;
    color: #c0d0f0;
    box-shadow: 0 8px 32px rgba(0,0,0,0.8);
  `;let i=document.createElement(`div`);i.style.cssText=`font-size:12px;color:${e.color};margin-bottom:12px;letter-spacing:0.08em;text-transform:uppercase;`,i.textContent=`▶ Secure Comm: ${e.name}`,r.appendChild(i);let a=document.createElement(`div`);a.style.cssText=`
    background: rgba(0,0,0,0.4);
    border: 1px solid rgba(100,140,255,0.15);
    border-radius: 4px;
    padding: 10px 12px;
    font-size: 11px;
    color: #8090b0;
    min-height: 60px;
    margin-bottom: 12px;
    line-height: 1.5;
    white-space: pre-wrap;
  `,a.textContent=`[Connecting to ${e.name} comm relay...]`,r.appendChild(a);let o=document.createElement(`textarea`);o.placeholder=`Message ${e.name}...`,o.rows=2,o.style.cssText=`
    width: 100%;
    background: rgba(20,30,60,0.8);
    border: 1px solid rgba(100,140,255,0.2);
    border-radius: 4px;
    padding: 8px 10px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    color: #c0d0f0;
    resize: none;
    margin-bottom: 10px;
    box-sizing: border-box;
  `,r.appendChild(o);let s=document.createElement(`div`);s.style.cssText=`display:flex;gap:8px;justify-content:flex-end;`;let c=document.createElement(`button`);c.textContent=`Close`,c.style.cssText=`
    padding: 5px 14px;
    background: none;
    border: 1px solid rgba(80,90,130,0.4);
    border-radius: 4px;
    color: #4a5568;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-size: 11px;
  `,c.onclick=()=>n.remove();let l=document.createElement(`button`);l.textContent=`Send ▶`,l.style.cssText=`
    padding: 5px 14px;
    background: rgba(40,50,120,0.7);
    border: 1px solid ${e.color}55;
    border-radius: 4px;
    color: ${e.color};
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-size: 11px;
  `,l.onclick=async()=>{let n=o.value.trim();if(n){l.disabled=!0,l.textContent=`...`,a.textContent=`[${e.name} is responding...]`;try{a.textContent=await ct(t.personality,n,e.disposition)}catch{a.textContent=`[Transmission lost. Retry later.]`}finally{l.disabled=!1,l.textContent=`Send ▶`}}},s.appendChild(c),s.appendChild(l),r.appendChild(s),n.appendChild(r),n.addEventListener(`click`,e=>{e.target===n&&n.remove()}),document.body.appendChild(n),o.focus()}var tx=[`#64748b`,`#f59e0b`,`#06b6d4`,`#a855f7`,`#10b981`,`#ef4444`,`#f97316`],nx=S.map(e=>e.charAt(0).toUpperCase()+e.slice(1)),rx=[`#ef4444`,`#94a3b8`,`#3b82f6`,`#eab308`,`#06b6d4`,`#6b7280`,`#22c55e`];function ix(e){let t=document.createElement(`div`);return t.style.cssText=`
    color: #7080b0;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin: 10px 0 6px;
    border-bottom: 1px solid rgba(100,120,200,0.25);
    padding-bottom: 3px;
  `,t.textContent=e,t}function ax(e,t,n,r,i){let a=document.createElement(`div`);a.style.cssText=`display:flex;align-items:center;gap:8px;margin-bottom:5px;`;let o=document.createElement(`span`);o.style.cssText=`width:90px;flex-shrink:0;color:#8090b0;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`,o.textContent=e;let s=document.createElement(`div`);s.style.cssText=`flex:1;height:10px;background:rgba(30,40,70,0.5);border-radius:2px;overflow:hidden;`;let c=document.createElement(`div`),l=n>0?Math.min(100,t/n*100):0;c.style.cssText=`height:100%;width:${l}%;background:${r};border-radius:2px;transition:width 0.3s;`,s.appendChild(c);let u=document.createElement(`span`);return u.style.cssText=`width:70px;text-align:right;color:${r};font-size:11px;flex-shrink:0;`,u.textContent=i,a.appendChild(o),a.appendChild(s),a.appendChild(u),a}function ox(e,t){let n=document.createElement(`div`);return n.style.cssText=`display:flex;justify-content:space-between;padding:3px 0;`,n.innerHTML=w`<span style="color:#8090b0;">${e}</span><span style="color:#c0d0f0;">${t}</span>`,n}function sx(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:Math.floor(e).toString()}function cx(e){return e.charAt(0).toUpperCase()+e.slice(1)}var lx=null,ux=-1,dx=!1;function fx(){lx=null,ux=-1}function px(e,n){e.innerHTML=``;let{fleet:r,robotBuffer:i,robotCount:a,onLocateRobotByEid:s}=n,c=r.total;e.appendChild(ix(`Fleet Overview`));let l=c>0?Math.round(r.productive/c*100):0,u=r.countByState[0],d=r.countByState[6];e.appendChild(ox(`Total robots`,String(c)));let f=ox(`Productive`,`${r.productive} (${l}%)`);t(f,`Robots actively mining or hauling
Higher % = better fleet utilization
Target: >70%`),e.appendChild(f);let p=ox(`Idle`,String(u));t(p,`Robots waiting for assignments
High idle count may mean no accessible asteroids
or insufficient haulers to clear the queue`),e.appendChild(p);let m=ox(`Broken`,String(d));t(m,`Robots that need repair
Engineer robots can repair broken units
Broken robots do not consume energy`),e.appendChild(m);let h=ox(`Avg energy`,`${Math.round(r.avgEnergy*100)}%`);t(h,`Average battery charge across all robots
Robots return to base to recharge when low
<25% means robots are spending more time charging than working`),e.appendChild(h),e.appendChild(ix(`By Type`));for(let t=0;t<7;t++){let n=r.countByType[t];n!==0&&e.appendChild(ax(o[t],n,Math.max(...Array.from(r.countByType),1),tx[t],String(n)))}e.appendChild(ix(`By State`));let g=[`#64748b`,`#3b82f6`,`#f59e0b`,`#06b6d4`,`#6366f1`,`#22c55e`,`#ef4444`];for(let t=0;t<7;t++){let n=r.countByState[t];n!==0&&e.appendChild(ax(ee[t],n,Math.max(c,1),g[t],String(n)))}if(i&&a>0){e.appendChild(ix(`Roster (${a} robots)`));let t=s!==null,n=document.createElement(`div`);n.style.cssText=`color:#4a5568;font-size:10px;margin-bottom:4px;`,n.textContent=t?`Click a robot to navigate camera to it.`:``,e.appendChild(n),a!==ux||t!==dx||!lx?(lx=mx(i,a,s),ux=a,dx=t):hx(lx,i,a),e.appendChild(lx)}}function mx(e,t,n){let r=document.createElement(`div`);r.style.cssText=`display:flex;flex-direction:column;gap:2px;max-height:220px;overflow-y:auto;`;for(let i=0;i<t;i++){let t=b(e,i),s=Math.min(6,a(e,i)),c=f(e,i),l=h(e,i),u=document.createElement(`div`);u.dataset.robotEid=String(t),u.style.cssText=`
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 3px 6px;
      background: rgba(30,40,70,0.4);
      border-radius: 3px;
      border-left: 3px solid ${tx[s]};
      ${n?`cursor:pointer;`:``}
    `;let d=document.createElement(`span`);d.style.cssText=`color:${tx[s]};font-size:11px;width:70px;flex-shrink:0;`,d.textContent=o[s]??`Unknown`;let p=document.createElement(`span`);p.className=`roster-state`,p.style.cssText=`color:#8090b0;font-size:10px;flex:1;`,p.textContent=ee[c]??`?`;let m=Math.round(l*100),g=document.createElement(`span`);if(g.className=`roster-energy`,g.style.cssText=`color:${gx(m)};font-size:10px;width:35px;text-align:right;flex-shrink:0;`,g.textContent=`${m}%`,u.appendChild(d),u.appendChild(p),u.appendChild(g),n){let e=n,r=t;u.addEventListener(`click`,()=>{z(`ui.ship_highlight`),e(r)}),u.addEventListener(`mouseenter`,()=>{u.style.background=`rgba(50,60,100,0.6)`}),u.addEventListener(`mouseleave`,()=>{u.style.background=`rgba(30,40,70,0.4)`})}r.appendChild(u)}return r}function hx(e,t,n){let r=e.children,i=Math.min(r.length,n);for(let e=0;e<i;e++){let n=r[e],i=f(t,e),a=h(t,e),o=n.querySelector(`.roster-state`);o&&(o.textContent=ee[i]??`?`);let s=Math.round(a*100),c=n.querySelector(`.roster-energy`);c&&(c.textContent=`${s}%`,c.style.color=gx(s))}}function gx(e){return e<25?`#ef4444`:e<60?`#f59e0b`:`#22c55e`}function _x(e,t){e.innerHTML=``;let{anomalies:r,explorationLog:i,onLocateAnomaly:a}=t;if(r.length>0){if(e.appendChild(ix(`Anomalies (${r.length} discovered)`)),a){let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;font-size:10px;margin-bottom:4px;`,t.textContent=`Click an anomaly to navigate camera to it.`,e.appendChild(t)}let t=document.createElement(`div`);t.style.cssText=`display:flex;flex-direction:column;gap:3px;margin-bottom:6px;`;for(let e of r){let r=document.createElement(`div`);r.style.cssText=`
        display: flex;
        align-items: baseline;
        gap: 8px;
        padding: 4px 6px;
        background: rgba(30,40,70,0.4);
        border-radius: 3px;
        border-left: 3px solid #a855f7;
        ${a?`cursor:pointer;`:``}
      `;let i=document.createElement(`span`);i.style.cssText=`color:#a855f7;font-size:11px;flex:1;`,i.textContent=n[e.anomalyType]??`Unknown`;let o=document.createElement(`span`);if(o.style.cssText=`color:#6070a0;font-size:10px;flex-shrink:0;`,o.textContent=`(${Math.round(e.x)}, ${Math.round(e.z)})`,r.appendChild(i),r.appendChild(o),a){let t=a,n=e.x,i=e.z;r.addEventListener(`click`,()=>{t(n,i)}),r.addEventListener(`mouseenter`,()=>{r.style.background=`rgba(50,60,100,0.6)`}),r.addEventListener(`mouseleave`,()=>{r.style.background=`rgba(30,40,70,0.4)`})}t.appendChild(r)}e.appendChild(t)}if(e.appendChild(ix(`Discovery Log`)),i.length===0){let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;padding:8px 0;font-style:italic;`,t.textContent=`No discoveries yet. Deploy scouts to explore the belt.`,e.appendChild(t);return}let o=document.createElement(`div`);o.style.cssText=`display:flex;flex-direction:column;gap:4px;`;for(let e of i.slice(0,100)){let t=document.createElement(`div`);t.style.cssText=`
      display: flex;
      align-items: baseline;
      gap: 8px;
      padding: 4px 6px;
      background: rgba(30,40,70,0.4);
      border-radius: 3px;
      border-left: 3px solid ${e.color};
    `;let n=document.createElement(`span`);n.style.cssText=`color:#4a5568;font-size:10px;flex-shrink:0;`,n.textContent=`T${e.tick}`;let r=document.createElement(`span`);r.style.cssText=`color:${e.color};flex:1;`,r.textContent=e.label,t.appendChild(n),t.appendChild(r),o.appendChild(t)}e.appendChild(o)}var vx=null;function yx(){vx=null}function bx(e,t){let{resourceHistory:n}=t;if(!vx||!e.contains(vx)){e.innerHTML=``,e.appendChild(ix(`Resource History`));let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;font-size:10px;margin-bottom:8px;`,t.textContent=`${n.length} samples — 1 per 60 ticks`,e.appendChild(t);let r=document.createElement(`div`);r.style.cssText=`display:flex;gap:12px;margin-bottom:8px;flex-wrap:wrap;`;for(let e=0;e<4;e++){let t=document.createElement(`span`);t.style.cssText=`color:${rx[e]};font-size:10px;`,t.textContent=`■ ${nx[e]}`,r.appendChild(t)}e.appendChild(r);let i=document.createElement(`canvas`);i.width=388,i.height=220,i.style.cssText=`border:1px solid rgba(100,120,200,0.15);border-radius:3px;`,e.appendChild(i),vx=i}xx(vx,n)}function xx(e,t){let n=e.getContext(`2d`);if(!n)return;let r=e.width,i=e.height,a={top:10,right:10,bottom:24,left:50},o=r-a.left-a.right,s=i-a.top-a.bottom;if(n.fillStyle=`rgba(8,10,18,0.9)`,n.fillRect(0,0,r,i),t.length<2){n.fillStyle=`#4a5568`,n.font=`11px "Courier New"`,n.textAlign=`center`,n.fillText(`Collecting data…`,r/2,i/2);return}let c=1;for(let e of t)c=Math.max(c,...Array.from(e.values));n.strokeStyle=`rgba(100,120,200,0.1)`,n.lineWidth=1;for(let e=0;e<=4;e++){let t=a.top+s-e/4*s;n.beginPath(),n.moveTo(a.left,t),n.lineTo(a.left+o,t),n.stroke();let r=e/4*c;n.fillStyle=`#4a5568`,n.font=`9px "Courier New"`,n.textAlign=`right`,n.fillText(sx(r),a.left-4,t+3)}let l=t[0].tick,u=t[t.length-1].tick;n.fillStyle=`#4a5568`,n.font=`9px "Courier New"`,n.textAlign=`center`;for(let e=0;e<=4;e++){let t=l+e/4*(u-l),r=a.left+e/4*o;n.fillText(`T${Math.round(t/60)}s`,r,i-6)}let d=t.length;for(let e=0;e<S.length;e++){n.strokeStyle=rx[e],n.lineWidth=1.5,n.beginPath();for(let r=0;r<d;r++){let i=t[r],l=a.left+r/(d-1)*o,u=a.top+s-i.values[e]/c*s;r===0?n.moveTo(l,u):n.lineTo(l,u)}n.stroke()}n.strokeStyle=`rgba(100,120,200,0.3)`,n.lineWidth=1,n.beginPath(),n.moveTo(a.left,a.top),n.lineTo(a.left,a.top+s),n.stroke()}var Sx=e({addExplorationEvent:()=>Gx,initDashboard:()=>zx,renderDashboard:()=>Kx,toggleDashboard:()=>Bx,updateDashboardAnomalies:()=>Ux,updateDashboardColonyName:()=>Wx,updateDashboardFleet:()=>Hx,updateDashboardResources:()=>Vx}),Cx=500,wx=[],Tx={tick:0,values:new Float32Array(7)},Ex={},Dx={countByType:new Int32Array(7),countByState:new Int32Array(9),productive:0,total:0,avgEnergy:0},Ox=[],kx=null,Ax=0,jx=[],Mx=null,Nx=null,Z=null,Px=!1,Fx=`resources`,Ix=!1,Lx=-60,Rx=null;function zx(e,t){Mx=e??null,Nx=t??null,Zx()}function Bx(){if(Px=!Px,Px)Z?Z.style.display=`flex`:qx(),requestAnimationFrame(()=>{Z&&(Z.style.opacity=`1`,Z.style.transform=`translateX(0)`)}),Ix=!0;else if(Z){Z.style.opacity=`0`,Z.style.transform=`translateX(20px)`;let e=Z;setTimeout(()=>{Px||(e.style.display=`none`)},250)}}function Vx(e,t,n){Tx={tick:n,values:new Float32Array(e)},Ex=t,n-Lx>=60&&(Lx=n,wx.push({tick:n,values:new Float32Array(e)}),wx.length>Cx&&wx.shift()),Px&&(Ix=!0)}function Hx(e,t){let n={countByType:new Int32Array(7),countByState:new Int32Array(9),productive:0,total:t,avgEnergy:0},r=0;for(let i=0;i<t;i++){let t=Math.min(6,a(e,i)),o=f(e,i),s=h(e,i);n.countByType[t]++,n.countByState[o]++,r+=s,(o===2||o===3)&&n.productive++}n.avgEnergy=t>0?r/t:0,Dx=n,kx=new Float32Array(e),Ax=t,Px&&(Ix=!0)}function Ux(e){jx=e.map(e=>({...e})),Px&&(Ix=!0)}function Wx(e){if(e!==Rx&&(Rx=e,Z)){let t=Z.querySelector(`.dash-header-title`);t&&(t.innerHTML=w`📊 ${e??`OPERATIONS`} DASHBOARD`)}}function Gx(e,t,n){Ox.unshift({tick:n,label:e,color:t}),Ox.length>200&&Ox.pop(),Px&&(Ix=!0)}function Kx(){if(!Px||!Ix||!Z)return;Ix=!1;let e=Z.querySelector(`.dash-content`);if(e)switch(Fx){case`resources`:Qx(e);break;case`fleet`:px(e,{fleet:Dx,robotBuffer:kx,robotCount:Ax,onLocateRobotByEid:Mx?$x:null});break;case`exploration`:_x(e,{anomalies:jx,explorationLog:Ox,onLocateAnomaly:Nx});break;case`timeline`:bx(e,{resourceHistory:wx});break}}function qx(){Z=document.createElement(`div`),Z.id=`dashboard-panel`,Z.setAttribute(`role`,`complementary`),Z.setAttribute(`aria-label`,`Operations dashboard`),Z.style.cssText=`
    position: fixed;
    top: 60px;
    right: 8px;
    width: 420px;
    height: 560px;
    background: rgba(8,10,18,0.95);
    border: 1px solid rgba(100,120,200,0.3);
    border-radius: 8px;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    color: #c0c8e0;
    display: flex;
    flex-direction: column;
    z-index: 80;
    box-shadow: 0 4px 24px rgba(0,0,0,0.6);
    opacity: 0;
    transform: translateX(20px);
    transition: opacity 0.25s ease-out, transform 0.25s ease-out;
  `;let e=document.createElement(`div`);e.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px 6px;
    border-bottom: 1px solid rgba(100,120,200,0.2);
    flex-shrink: 0;
  `,e.innerHTML=w`<span class="dash-header-title" style="color:#a0b0e0;font-weight:bold;letter-spacing:0.05em">📊 ${Rx??`OPERATIONS`} DASHBOARD</span>`;let n=document.createElement(`button`);n.textContent=`×`,n.setAttribute(`aria-label`,`Close dashboard`),n.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:18px;line-height:1;padding:0;`,n.onclick=()=>Bx(),e.appendChild(n);let r=document.createElement(`div`);r.setAttribute(`role`,`tablist`),r.setAttribute(`aria-label`,`Dashboard tabs`),r.style.cssText=`
    display: flex;
    gap: 4px;
    padding: 6px 10px 0;
    flex-shrink: 0;
  `;for(let{id:e,label:n,tip:i}of[{id:`resources`,label:`Resources`,tip:`Raw stockpiles, refined materials
and per-minute income rates`},{id:`fleet`,label:`Fleet`,tip:`Robot count by type and state
Efficiency, energy, and individual roster`},{id:`exploration`,label:`Exploration`,tip:`Discovered anomalies and
exploration discovery log`},{id:`timeline`,label:`Timeline`,tip:`Resource history chart
Shows trends over time`}]){let a=document.createElement(`button`);a.dataset.tab=e,a.textContent=n,a.setAttribute(`role`,`tab`),a.setAttribute(`aria-label`,`${n} tab`),t(a,i),a.style.cssText=`
      flex: 1;
      padding: 5px 6px;
      background: rgba(40,50,80,0.5);
      border: 1px solid rgba(100,120,200,0.2);
      border-bottom: none;
      border-radius: 4px 4px 0 0;
      color: #8090b0;
      cursor: pointer;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      transition: background 0.15s;
    `,a.onclick=()=>{z(`ui.tab_switch`),Jx(e)},r.appendChild(a)}let i=document.createElement(`div`);i.className=`dash-content`,i.style.cssText=`
    flex: 1;
    overflow-y: auto;
    padding: 12px 14px;
    scrollbar-width: thin;
    scrollbar-color: rgba(100,120,200,0.3) transparent;
  `,Z.appendChild(e),Z.appendChild(r),Z.appendChild(i),document.body.appendChild(Z),Yx(),Ix=!0}function Jx(e){Fx=e,yx(),fx(),Yx(),Xx(),Ix=!0}function Yx(){Z&&Z.querySelectorAll(`button[data-tab]`).forEach(e=>{let t=e.dataset.tab===Fx;e.style.background=t?`rgba(60,80,140,0.8)`:`rgba(40,50,80,0.5)`,e.style.color=t?`#d0e0ff`:`#8090b0`,e.style.borderColor=t?`rgba(100,140,255,0.4)`:`rgba(100,120,200,0.2)`})}function Xx(){let e=Z?.querySelector(`.dash-content`);e&&(e.innerHTML=``)}function Zx(){me(`📊 Dashboard`,()=>Bx(),`Operations Dashboard (D key)
Resources · Fleet · Exploration · Timeline`)}function Qx(e){e.innerHTML=``;let t=Tx.values,n=Math.max(...Array.from(t),1);e.appendChild(ix(`Raw Stockpiles`));for(let r=0;r<S.length;r++)e.appendChild(ax(nx[r],t[r],n,rx[r],sx(t[r])));if(Object.keys(Ex).length>0){e.appendChild(ix(`Refined Materials`));let t=Math.max(...Object.values(Ex),1),n=Object.entries(Ex).filter(([,e])=>e>0||!0);for(let[r,i]of n)e.appendChild(ax(cx(r.replace(/_/g,` `)),i,t,`#a855f7`,sx(i)))}if(wx.length>=2){e.appendChild(ix(`Rates (per minute)`));let t=wx[wx.length-1],n=wx[Math.max(0,wx.length-60)],r=Math.max(1,t.tick-n.tick)/3600,i=S.map((e,i)=>(t.values[i]-n.values[i])/r),a=Math.max(...i.map(Math.abs),1);for(let t=0;t<S.length;t++){let n=i[t],r=n>=0?`+${sx(n)}/m`:`${sx(n)}/m`;e.appendChild(ax(nx[t],Math.abs(n),a,n>=0?rx[t]:`#ef4444`,r))}}}function $x(e){if(!(!Mx||!kx)){for(let t=0;t<Ax;t++)if(b(kx,t)===e){let e=g(kx,t),n=y(kx,t),r=s(kx,t);Mx(e,n,r);return}}}var eS={0:`Small`,1:`Medium`,2:`Large`,3:`Mega`},tS={1:`Strange Mineral`,2:`Structured Signal`,3:`Spatial Distortion`},nS={iron:`Iron`,nickel:`Nickel`,cobalt:`Cobalt`,platinum:`Platinum`,ice:`Ice`,carbon:`Carbon`,silicate:`Silicate`},Q=null,rS=-1,iS=null,aS=new Map;function oS(e){iS=e}function sS(e){aS.clear();for(let{eid:t,name:n}of e)aS.set(t,n)}function cS(e,t,n){z(`ui.panel_open`),rS=e,Q||fS(),pS(t,n),Q.style.display=`block`,mS()}function lS(){Q&&(Q.style.display=`none`),rS=-1}function uS(){return Q!==null&&Q.style.display!==`none`}function dS(e){e.eid!==rS||!Q||hS(e)}function fS(){Q=document.createElement(`div`),Q.id=`asteroid-info-panel`,Q.style.cssText=`
    position: fixed;
    display: none;
    background: rgba(8,12,24,0.97);
    border: 1px solid rgba(180,140,60,0.4);
    border-radius: 8px;
    padding: 12px 14px;
    min-width: 210px;
    max-width: 260px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    color: #c0d0f0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.7);
    z-index: 300;
  `,document.body.appendChild(Q),document.addEventListener(`click`,e=>{Q&&Q.style.display!==`none`&&(Q.contains(e.target)||lS())})}function pS(e,t){if(!Q)return;let n=window.innerWidth,r=window.innerHeight,i=e+8,a=t-280/2;i+240>n-8&&(i=e-240-8),a<8&&(a=8),a+280>r-8&&(a=r-280-8),Q.style.left=`${i}px`,Q.style.top=`${a}px`}function mS(){if(!Q)return;Q.innerHTML=``;let e=_S();Q.appendChild(e);let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;text-align:center;padding:16px 0;`,t.textContent=`Scanning...`,Q.appendChild(t)}function hS(e){if(!Q)return;Q.innerHTML=``,Q.appendChild(_S());let t=document.createElement(`div`);t.style.cssText=`margin-bottom:10px;`;let n=eS[e.sizeTier]??`Tier ${e.sizeTier}`,r=[[`Type`,e.typeName,yS(e.typeName)],[`Size`,n],[`Richness`,`\u00d7${e.richness.toFixed(1)}`]];for(let[e,n,i]of r)t.appendChild(vS(e,n,i));Q.appendChild(t);let i=document.createElement(`div`);i.style.cssText=`margin-bottom:10px;`;let a=document.createElement(`div`);a.style.cssText=`display:flex;justify-content:space-between;margin-bottom:4px;`;let o=document.createElement(`span`);o.style.cssText=`color:#5060a0;`,o.textContent=`Health`;let s=document.createElement(`span`);s.style.cssText=`color:#a0c0ff;`,s.textContent=`${Math.round(e.healthPct*100)}%`,a.appendChild(o),a.appendChild(s),i.appendChild(a);let c=document.createElement(`div`);c.style.cssText=`height:4px;background:rgba(255,255,255,0.1);border-radius:2px;`;let l=document.createElement(`div`),u=Math.round(e.healthPct*100),d=u>60?`#4ade80`:u>25?`#f59e0b`:`#ef4444`;if(l.style.cssText=`height:100%;width:${u}%;background:${d};border-radius:2px;transition:width 0.3s;`,c.appendChild(l),i.appendChild(c),e.estimatedDepletionTicks!==null){let t=document.createElement(`div`);t.style.cssText=`color:#f59e0b;font-size:10px;margin-top:4px;`;let n=Math.ceil(e.estimatedDepletionTicks/60);t.textContent=`Depletes in ~${n<1?`<1`:n} min`,i.appendChild(t)}Q.appendChild(i);let f=document.createElement(`div`);f.style.cssText=`border-top:1px solid rgba(180,140,60,0.15);padding-top:6px;margin-bottom:8px;`;let p=document.createElement(`div`);p.style.cssText=`color:#5060a0;font-size:10px;margin-bottom:4px;`,p.textContent=`COMPOSITION`,f.appendChild(p);let m=Object.entries(e.composition).filter(([,e])=>e>.01).sort(([,e],[,t])=>t-e);if(m.length===0){let e=document.createElement(`div`);e.style.cssText=`color:#2d3748;font-size:10px;`,e.textContent=`No minerals detected`,f.appendChild(e)}else{let e=m.reduce((e,[,t])=>e+t,0);for(let[t,n]of m){let r=nS[t]??t,i=e>0?Math.round(n/e*100):0;f.appendChild(vS(r,`${i}%`,`#a0c0ff`))}}if(Q.appendChild(f),e.anomalyType>0){let t=document.createElement(`div`);t.style.cssText=`border-top:1px solid rgba(180,140,60,0.15);padding-top:6px;margin-bottom:8px;`;let n=tS[e.anomalyType]??`Unknown Anomaly (${e.anomalyType})`;t.appendChild(vS(`Anomaly`,n,`#a855f7`)),Q.appendChild(t)}if(iS){let t=document.createElement(`div`);t.style.cssText=`border-top:1px solid rgba(180,140,60,0.15);padding-top:6px;`;let n=aS.get(e.eid);if(n){let r=document.createElement(`div`);r.style.cssText=`display:flex;justify-content:space-between;align-items:center;`;let i=document.createElement(`span`);i.style.cssText=`color:#06b6d4;font-size:11px;`,i.textContent=`"${n}"`,r.appendChild(i);let a=document.createElement(`button`);a.textContent=`Rename`,a.style.cssText=`background:none;border:1px solid #06b6d444;color:#06b6d4;cursor:pointer;font-family:"Courier New",monospace;font-size:9px;padding:2px 8px;border-radius:2px;text-transform:uppercase;letter-spacing:0.5px;`,a.addEventListener(`click`,()=>{gS(t,e.eid,n)}),r.appendChild(a),t.appendChild(r)}else{let n=document.createElement(`button`);n.textContent=`Name this asteroid`,n.style.cssText=`width:100%;background:none;border:1px solid #06b6d444;color:#06b6d4;cursor:pointer;font-family:"Courier New",monospace;font-size:10px;padding:6px;border-radius:2px;text-transform:uppercase;letter-spacing:0.5px;transition:background 0.2s;`,n.addEventListener(`mouseover`,()=>{n.style.background=`rgba(6,182,212,0.1)`}),n.addEventListener(`mouseout`,()=>{n.style.background=`none`}),n.addEventListener(`click`,()=>{gS(t,e.eid)}),t.appendChild(n)}Q.appendChild(t)}}function gS(e,t,n){e.innerHTML=``;let r=document.createElement(`div`);r.style.cssText=`display:flex;gap:4px;align-items:center;`;let i=document.createElement(`input`);i.type=`text`,i.maxLength=20,i.placeholder=`Name...`,i.value=n??``,i.style.cssText=`flex:1;background:rgba(0,0,0,0.4);border:1px solid #06b6d444;border-radius:2px;color:#e2e8f0;font-family:"Courier New",monospace;font-size:11px;padding:4px 6px;outline:none;box-sizing:border-box;`;let a=document.createElement(`button`);a.textContent=`OK`,a.style.cssText=`background:none;border:1px solid #06b6d488;color:#06b6d4;cursor:pointer;font-family:"Courier New",monospace;font-size:10px;padding:4px 10px;border-radius:2px;`,a.addEventListener(`click`,()=>{let n=i.value.trim();if(n&&iS){iS(t,n),aS.set(t,n),e.innerHTML=``;let r=document.createElement(`span`);r.style.cssText=`color:#06b6d4;font-size:11px;`,r.textContent=`Named: "${n}"`,e.appendChild(r)}}),i.addEventListener(`keydown`,e=>{e.key===`Enter`&&a.click(),e.stopPropagation()}),i.addEventListener(`keyup`,e=>e.stopPropagation()),r.appendChild(i),r.appendChild(a),e.appendChild(r),requestAnimationFrame(()=>i.focus())}function _S(){let e=document.createElement(`div`);e.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid rgba(180,140,60,0.2);`;let t=aS.get(rS),n=document.createElement(`span`);n.style.cssText=`color:#b48c3c;font-size:12px;font-weight:bold;`,n.textContent=t?`${t}`:`Asteroid #${rS}`,e.appendChild(n);let r=document.createElement(`button`);return r.textContent=`×`,r.setAttribute(`aria-label`,`Close asteroid panel`),r.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:16px;padding:0;line-height:1;`,r.onclick=()=>{z(`ui.panel_close`),lS()},e.appendChild(r),e}function vS(e,t,n){let r=document.createElement(`div`);r.style.cssText=`display:flex;justify-content:space-between;margin-bottom:3px;`;let i=document.createElement(`span`);i.style.cssText=`color:#5060a0;`,i.textContent=e;let a=document.createElement(`span`);return a.style.cssText=`color:${n??`#a0c0ff`};`,a.textContent=t,r.appendChild(i),r.appendChild(a),r}function yS(e){switch(e){case`Carbonaceous`:return`#6b7280`;case`Silicate`:return`#a0c0ff`;case`Metallic`:return`#c0c0c0`;case`Exotic`:return`#a855f7`;default:return`#a0c0ff`}}var bS=e({hasManifestoBeenShown:()=>wS,showManifestoModal:()=>TS}),xS=null,SS=null,CS=!1;function wS(){return CS}function TS(e,t){if(xS)return;CS=!0;let n=!!t;xS=document.createElement(`div`),xS.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    font-family: 'Courier New', monospace;
    opacity: 0;
    transition: opacity 0.5s ease;
  `,document.body.appendChild(xS),requestAnimationFrame(()=>{xS&&(xS.style.opacity=`1`)});let r=document.createElement(`div`);r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-label`,`Fleet Manifesto`),r.setAttribute(`aria-modal`,`true`),r.setAttribute(`tabindex`,`-1`),r.style.cssText=`
    background: rgba(0, 4, 12, 0.98);
    border: 1px solid #06b6d4;
    box-shadow: 0 0 60px rgba(6,182,212,0.15), inset 0 0 40px rgba(0,0,0,0.6);
    color: #e2e8f0;
    max-width: 580px;
    width: 90vw;
    padding: 36px 32px;
    border-radius: 2px;
    position: relative;
  `;let i=`
    <div style="font-size:9px; color:#06b6d4; opacity:0.7; text-transform:uppercase; letter-spacing:3px; margin-bottom:6px;">
      ARIA — ${n?`CULTURAL SHIFT`:`COLONY FOUNDING`}
    </div>
    <div style="font-size:18px; font-weight:bold; color:#06b6d4; margin-bottom:16px; letter-spacing:1px;">
      ${n?`Revise Fleet Manifesto`:`What Is Your Colony For?`}
    </div>
    <p style="margin:0 0 20px; line-height:1.7; color:#94a3b8; font-size:12px;">
      ${n?`Your fleet's purpose can evolve. Changing it marks a Cultural Shift milestone.`:`Commander, before we begin — every civilization needs a reason to exist. Choose the purpose that will guide your fleet, or write your own.`}
    </p>
  `,a=`<div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">`;for(let e of pp)a+=`
      <button data-manifesto-preset="${e.id}" style="
        background: transparent;
        border: 1px solid #06b6d488;
        color: #e2e8f0;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        padding: 12px 16px;
        cursor: pointer;
        text-align: left;
        border-radius: 2px;
        transition: background 0.2s, border-color 0.2s;
        line-height: 1.6;
      " onmouseover="this.style.background='rgba(6,182,212,0.1)';this.style.borderColor='#06b6d4'" onmouseout="this.style.background='transparent';this.style.borderColor='#06b6d488'">
        <em>"${DS(e.text)}"</em>
      </button>
    `;a+=`</div>`;let o=`
    <div style="margin-top:4px;">
      <div style="font-size:10px; color:#64748b; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">Or write your own</div>
      <textarea id="manifesto-freetext" maxlength="140" placeholder="Your colony's purpose (140 chars max)..." style="
        width: 100%;
        height: 60px;
        background: rgba(0,0,0,0.4);
        border: 1px solid #06b6d444;
        border-radius: 2px;
        color: #e2e8f0;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        padding: 10px;
        resize: none;
        outline: none;
        box-sizing: border-box;
      ">${t?DS(t):``}</textarea>
      <div style="display:flex; justify-content:space-between; margin-top:6px;">
        <span id="manifesto-char-count" style="font-size:10px; color:#475569;">0/140</span>
        <button id="manifesto-submit-freetext" style="
          background: transparent;
          border: 1px solid #06b6d488;
          color: #06b6d4;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          padding: 6px 18px;
          cursor: pointer;
          border-radius: 2px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: background 0.2s;
        " onmouseover="this.style.background='rgba(6,182,212,0.15)'" onmouseout="this.style.background='transparent'">DECLARE</button>
      </div>
    </div>
  `,s=n?`<div style="margin-top:12px; text-align:center;">
        <button id="manifesto-cancel" style="
          background:none; border:none; color:#475569; cursor:pointer;
          font-family:'Courier New',monospace; font-size:10px; text-transform:uppercase; letter-spacing:1px;
        ">Cancel</button>
      </div>`:`<div style="margin-top:12px; text-align:center;">
        <button id="manifesto-skip" style="
          background:none; border:none; color:#475569; cursor:pointer;
          font-family:'Courier New',monospace; font-size:10px; text-transform:uppercase; letter-spacing:1px;
        ">Skip for now</button>
      </div>`;r.innerHTML=i+a+o+s,xS.appendChild(r),SS=_f(r),r.querySelectorAll(`[data-manifesto-preset]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.manifestoPreset,r=pp.find(e=>e.id===n);r&&(e({presetId:n,text:r.text}),ES())})});let c=r.querySelector(`#manifesto-freetext`),l=r.querySelector(`#manifesto-char-count`),u=r.querySelector(`#manifesto-submit-freetext`),d=()=>{l.textContent=`${c.value.length}/140`};c.addEventListener(`input`,d),d(),u.addEventListener(`click`,()=>{let t=c.value.trim();t.length>0?(e({presetId:null,text:t}),ES()):(c.style.outline=`2px solid #ef4444`,c.focus(),setTimeout(()=>{c.style.outline=``},1500))}),r.querySelector(`#manifesto-skip`)?.addEventListener(`click`,ES),r.querySelector(`#manifesto-cancel`)?.addEventListener(`click`,ES)}function ES(){if(!xS)return;SS?.(),SS=null,xS.style.opacity=`0`;let e=xS;setTimeout(()=>e.remove(),500),xS=null}function DS(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}var OS=!1;function kS(e,t){e.loadAdvisorLazy().then(n=>{e.initAdvisorOnce(n),t(n)}).catch(e=>{console.error(`[culture] failed to load advisor:`,e)})}function AS(e,t,n){t.firstCultureMessage&&(t.firstCultureMessage=!1,G_(n.traits),nv(n.fleetManifesto),rv(n.colonyName,n.playerNamedAsteroids.length),OS=!!(n.colonyName&&n.fleetManifesto),vb(t=>{e.worker.postMessage({type:`sim:set_fleet_manifesto`,payload:{presetId:t.presetId,text:t.text}})}),oS((t,n)=>{e.worker.postMessage({type:`sim:name_asteroid`,payload:{asteroidEid:t,name:n}})}),yb(t=>{e.worker.postMessage({type:`sim:set_fleet_color`,payload:{paletteId:t}})}))}function jS(e,t){pb(),mb(t),Wx(t.colonyName),sS(t.playerNamedAsteroids);let n=[...t.namedLocations,...t.playerNamedAsteroids.map(e=>({name:e.name,x:e.x,y:e.y,z:e.z}))];e.namedLocationLabels.setLocations(n),Zd(n)}function MS(e,t){let n=t.fleetColorPaletteId??null;e.robotRenderer.setFleetColor(n),e.baseStation.setFleetColor(n);for(let t of e.extraBaseRenderers)t.setFleetColor(n);let r=n?up(n):null;pe(r?r.accent:null)}function NS(e,t){!t.fleetManifesto&&!wS()&&(t.autonomyScore+t.fleetCohesion+t.anomalyExposure+t.isolationScore>0||t.tick>300)&&TS(n=>{e.worker.postMessage({type:`sim:set_fleet_manifesto`,payload:{presetId:n.presetId,text:n.text}}),!t.colonyName&&!_p()&&setTimeout(()=>{yp(t=>{e.worker.postMessage({type:`sim:set_colony_name`,payload:{name:t}})})},600)}),t.fleetManifesto&&!t.colonyName&&!_p()&&wS()&&t.tick>300&&yp(t=>{e.worker.postMessage({type:`sim:set_colony_name`,payload:{name:t}})})}function PS(e,t){if(t.fleetManifesto){let n=iv(t.fleetManifesto);n&&kS(e,e=>e.panel.addProactiveBroadcast(n));let r=tv(t.fleetManifesto);r&&kS(e,e=>e.panel.addProactiveBroadcast(r)),U_(t.fleetManifesto)}if(t.colonyName){let n=av(t.colonyName);n&&kS(e,e=>e.panel.addProactiveBroadcast(n))}if(t.colonyName&&t.fleetManifesto&&!OS&&(OS=!0,Na(`Colony "${t.colonyName}" is established in the Belt. The manifesto reads: "${t.fleetManifesto}" The work begins.`)),t.playerNamedAsteroids.length>0){let t=ov();t&&kS(e,e=>e.panel.addProactiveBroadcast(t))}}function FS(e,t){let{refs:n,renderers:r,lazy:i}=e;return{"sim:culture_trait_activated":e=>{let t=e.payload.trait,n=fp[t];n&&(M(`[CULTURE] ${n.name} activated — ${n.effectText}. Press U for details.`,n.color),lr(n.color,500),z(`game.research_complete`),hb(),_s(`first_culture_trait`,`ARIA: Your fleet is developing its own culture. Open the Culture panel (U) to see how their experiences are shaping who they are — and what they can do.`));let r=Y_(t);r&&kS(i,e=>e.panel.addProactiveBroadcast(r)),n&&Na(`[Milestone] Fleet culture trait activated: ${n.name}. ${n.effectText}`)},"sim:culture_state":a=>{let o=a.payload;AS(e,t,o),n.latestCultureState=o,jS(r,o),MS(r,o),Gb(o.culturalDistances),r.asteroidRenderer.setPredictedAnomalyIds(o.predictedAnomalyAsteroidIds),NS(e,o),PS(i,o),o.autonomyScore+o.fleetCohesion+o.anomalyExposure+o.isolationScore>0&&_s(`midgame_culture`,`ARIA: Your robots are developing culture. Press U to observe their emerging identity.`)}}}var IS=2;function LS(e,t){let{refs:n,lazy:r}=e;return{"sim:megastructure_state":i=>{let o=i;if(n.latestMegaProjects=o.payload.projects,t.firstMegastructureMessage)t.firstMegastructureMessage=!1,q_(o.payload.projects);else for(let e of o.payload.projects)if(e.completedStages>0){let t=ev(e.id,e.completedStages);t&&r.loadAdvisorLazy().then(e=>{r.initAdvisorOnce(e),e.panel.addProactiveBroadcast(t)})}let s=0;if(n.latestRobotBuffer&&n.latestRobotCount>0)for(let e=0;e<n.latestRobotCount;e++)a(n.latestRobotBuffer,e)===C.ENGINEER&&s++;r.getMegaPanel()?.updateMegastructurePanel(n.latestMegaProjects,s,n.latestRefined),ti(o.payload.projects.filter(e=>e.crisisCountdownTicksRemaining!=null&&e.crisisCountdownTicksRemaining>0).map(e=>({structureName:lt[e.id]?.name??e.id,stageName:e.activeStageIndex==null?`Unknown`:lt[e.id]?.stages[e.activeStageIndex]?.name??`Stage ${e.activeStageIndex}`,ticksRemaining:e.crisisCountdownTicksRemaining}))),ap({megastructureCompletedStages:Object.fromEntries(n.latestMegaProjects.map(e=>[e.id,e.completedStages])),techNodeCount:0,totalTechNodes:0,robotCount:n.latestRobotCount},M);{let t=n.latestMegaProjects.find(e=>e.id===`dyson_swarm`);t&&(_s(`lategame_megastructure_unlock`,`ARIA: The Dyson Swarm is now available — humanity's long-term win condition. Press G to manage megastructure construction.`),t.completedStages>=6&&_s(`lategame_dyson_approach`,`ARIA: The swarm is nearing full enclosure. Commander, completing this will broadcast our presence to the cosmos. There is no undoing a Type II energy signature.`),t.completedStages>=IS&&!wp()&&!n.latestCultureState?.colonyEpithet&&Ep(t=>{e.worker.postMessage({type:`sim:set_colony_epithet`,payload:{epithet:t}})}))}}}}function RS(e){let{refs:t}=e;return{"sim:habitat_state":e=>{let n=e;t.latestHabitatState=n.payload,Bg(),Vg(n.payload)}}}function zS(){return{"sim:market_state":e=>{let{listings:t}=e.payload;ml(t)}}}function BS(){return{"sim:error":e=>{let t=e;console.error(`[main] Sim error:`,t.payload.message),M(`[ARIA] Sim error at tick ${t.payload.tick} — game loop continuing`,`#ef4444`)},"sim:worker_error":e=>{let t=e.payload;console.error(`[worker_error] system=${t.system} tick=${t.tick}: ${t.message}`,t.stack??``),M(`[ARIA] Worker error in ${t.system} at tick ${t.tick} — game loop continuing`,`#ef4444`)}}}function VS(){return{"sim:asteroid_detail":e=>{let{payload:t}=e;dS(t)}}}function HS(){return{"sim:transient_cluster_spawned":e=>{},"sim:transient_cluster_update":e=>{Zr(e.payload.clusters.map(e=>({clusterId:e.clusterId,ticksRemaining:e.ticksRemaining})))},"sim:transient_cluster_expired":e=>{Qr()}}}var US=12,WS=500,GS=3e4,KS={milestone:`#22c55e`,culture:`#a855f7`,isolation:`#f59e0b`,anomaly:`#06b6d4`,death:`#ef4444`,naming:`#fbbf24`,mourning:`#a78bfa`,groupthink:`#f97316`,directive_drift:`#fb923c`,backlash:`#f43f5e`,dark_forest_echo:`#2dd4bf`,chorus:`#7c3aed`,resonance:`#06ffc8`,soft_autonomy:`#38bdf8`},qS=null,JS=null,YS=null,XS=!1,ZS=[];function QS(){qS||(qS=document.createElement(`div`),qS.style.cssText=`
    position: fixed;
    bottom: 80px;
    left: 12px;
    width: 320px;
    max-height: 280px;
    z-index: 85;
    pointer-events: auto;
    font-family: 'Courier New', monospace;
  `,YS=document.createElement(`div`),YS.style.cssText=`
    background: rgba(4, 6, 14, 0.85);
    border: 1px solid rgba(100, 140, 255, 0.3);
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    padding: 4px 10px;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: rgba(140, 160, 220, 0.7);
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,YS.innerHTML=`<span>◈ COMMS</span><span id="comms-toggle">▼</span>`,YS.addEventListener(`click`,$S),qS.appendChild(YS),JS=document.createElement(`div`),JS.style.cssText=`
    background: rgba(4, 6, 14, 0.78);
    border: 1px solid rgba(100, 140, 255, 0.2);
    border-radius: 0 0 4px 4px;
    max-height: 240px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(100,140,255,0.3) transparent;
  `,qS.appendChild(JS),document.body.appendChild(qS))}function $S(){XS=!XS,JS&&(JS.style.display=XS?`none`:`block`);let e=document.getElementById(`comms-toggle`);e&&(e.textContent=XS?`▶`:`▼`)}function eC(e,t,n){if(JS||QS(),!JS)return;if(XS){XS=!1,JS.style.display=`block`;let e=document.getElementById(`comms-toggle`);e&&(e.textContent=`▼`)}let r=KS[n]??`#94a3b8`,i=document.createElement(`div`);i.style.cssText=`
    padding: 5px 8px;
    border-left: 2px solid ${r};
    font-size: 10px;
    line-height: 1.4;
    color: rgba(200, 210, 230, 0.85);
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    border-bottom: 1px solid rgba(40, 50, 80, 0.3);
  `;let a=document.createElement(`span`);a.style.cssText=`color: ${r}; font-weight: bold; font-size: 9px; text-transform: uppercase; letter-spacing: 0.5px;`,a.textContent=`${e}: `;let o=document.createElement(`span`);o.textContent=t.startsWith(e)?t.slice(t.indexOf(`:`)+2):t,i.appendChild(a),i.appendChild(o),JS.appendChild(i),requestAnimationFrame(()=>{i.style.opacity=`1`,i.style.transform=`translateY(0)`}),JS.scrollTop=JS.scrollHeight;let s={robotName:e,message:t,category:n,timestamp:Date.now(),element:i};for(ZS.push(s),setTimeout(()=>tC(s),GS);ZS.length>US;){let e=ZS.shift();e&&e.element.remove()}}function tC(e){ZS.indexOf(e)!==-1&&(e.element.style.transition=`opacity ${WS}ms ease`,e.element.style.opacity=`0.3`)}function nC(){let e=!1;return{"sim:comms_message":t=>{e||=(QS(),!0);let{payload:n}=t;eC(n.robotName,n.message,n.category)}}}function rC(e,t){e.loadAdvisorLazy().then(n=>{e.initAdvisorOnce(n),t(n)}).catch(e=>{console.error(`[meridian] failed to load advisor:`,e)})}function iC(e){return{"sim:meridian_lore_state":e=>{let t=e.payload;na(t)},"sim:meridian_commentary":t=>{let n=t.payload;rC(e.lazy,e=>{e.panel.addProactiveBroadcast(n.text)})},"sim:meridian_unlock":e=>{let t=e.payload;for(let e of t.newArchiveSeries)M(`ARCHIVES UNLOCKED: Series ${e} — ${{A:`Early Operations`,B:`Middle Period`,C:`Final Days`}[e]??`Unknown`}`,`info`);for(let e of t.newArtifacts)M(`HISTORICAL DATABASE: ${{directive_log:`ARIA-7 Directive Log`,board_memo:`CCR Board Memo`}[e]??e} now available`,`info`)}}}function aC(e,t){return{...BS(),...Gy(e,t),...$y(e),...eb(e),...tb(e),...nb(e,t),...FS(e,t),...LS(e,t),...RS(e),...zS(),...VS(),...HS(),...nC(),...iC(e)}}var $={FIRST_ASTEROID_CHARTED:`cotb:exploration:first_asteroid_charted`,ANOMALY_DISCOVERED:`cotb:exploration:anomaly_discovered`,FIRST_MINE:`cotb:economy:first_mine`,FIRST_REFINERY:`cotb:economy:first_refinery`,FIRST_ROBOT:`cotb:economy:first_robot`,FIRST_BUILDING:`cotb:engineering:first_building`,FIRST_BASE:`cotb:engineering:first_base`,FIRST_RESEARCH:`cotb:engineering:first_research`,FIRST_FACTION_CONTACT:`cotb:social:first_faction_contact`,FIRST_ALLIANCE:`cotb:social:first_alliance`,CULTURE_TRAIT:`cotb:culture:trait_activated`,MEGASTRUCTURE_STARTED:`cotb:mastery:megastructure_started`,DYSON_COMPLETE:`cotb:mastery:dyson_complete`},oC={[$.FIRST_ASTEROID_CHARTED]:{title:`First Survey`,description:`Charted your first asteroid in the belt`,rarity:`common`},[$.ANOMALY_DISCOVERED]:{title:`Strange Signals`,description:`Discovered an anomaly among the rocks`,rarity:`uncommon`},[$.FIRST_MINE]:{title:`Breaking Ground`,description:`Mined your first asteroid`,rarity:`common`},[$.FIRST_REFINERY]:{title:`Refined Taste`,description:`Deployed your first refiner robot`,rarity:`uncommon`},[$.FIRST_ROBOT]:{title:`Metal Workforce`,description:`Deployed your first robot`,rarity:`common`},[$.FIRST_BUILDING]:{title:`Foundations`,description:`Constructed your first building`,rarity:`common`},[$.FIRST_BASE]:{title:`Colony Expansion`,description:`Established a secondary base in the belt`,rarity:`rare`},[$.FIRST_RESEARCH]:{title:`Eureka`,description:`Completed your first research`,rarity:`common`},[$.FIRST_FACTION_CONTACT]:{title:`We Are Not Alone`,description:`Made first contact with another faction`,rarity:`uncommon`},[$.FIRST_ALLIANCE]:{title:`Belt Pact`,description:`Formed an alliance with another faction`,rarity:`rare`},[$.CULTURE_TRAIT]:{title:`Cultural Identity`,description:`Your colony developed a cultural trait`,rarity:`uncommon`},[$.MEGASTRUCTURE_STARTED]:{title:`Audacious Engineering`,description:`Began construction of a megastructure`,rarity:`epic`},[$.DYSON_COMPLETE]:{title:`Stellar Architects`,description:`Completed the Dyson Swarm — a star harnessed`,rarity:`legendary`}};function sC(e){let t={sawFactionContact:!1,sawAlliance:!1,sawMegastructure:!1,sawAsteroidCharted:!1};return{handlers:{"sim:building_built":t=>{let n=t;n.payload.success&&e.unlock($.FIRST_BUILDING,{buildingType:n.payload.buildingType})},"sim:base_built":t=>{t.payload.ok&&e.unlock($.FIRST_BASE)},"sim:robot_produced":t=>{let n=t;e.unlock($.FIRST_ROBOT),n.payload.robotType===C.MINER&&e.unlock($.FIRST_MINE),n.payload.robotType===C.REFINER&&e.unlock($.FIRST_REFINERY)},"sim:tech_state":t=>{let n=t;n.payload.justUnlocked&&e.unlock($.FIRST_RESEARCH,{nodeId:n.payload.justUnlocked})},"sim:faction_state":n=>{let r=n;if(!(!r.payload.factions||r.payload.factions.length===0)&&(t.sawFactionContact||r.payload.factions.some(e=>e.disposition<-20||e.disposition>20)&&(t.sawFactionContact=!0,e.unlock($.FIRST_FACTION_CONTACT)),!t.sawAlliance)){let n=r.payload.factions.find(e=>e.disposition>60);n&&(t.sawAlliance=!0,e.unlock($.FIRST_ALLIANCE,{factionName:n.name}))}},"sim:culture_trait_activated":t=>{e.unlock($.CULTURE_TRAIT)},"sim:megastructure_state":n=>{if(t.sawMegastructure)return;let r=n.payload;r.projects&&r.projects.some(e=>e.completedStages>0)&&(t.sawMegastructure=!0,e.unlock($.MEGASTRUCTURE_STARTED))},"sim:event":n=>{let r=n;r.payload.kind===`anomaly_discovered`&&(t.sawAsteroidCharted||(t.sawAsteroidCharted=!0,e.unlock($.FIRST_ASTEROID_CHARTED,{asteroidEid:r.payload.asteroidEid})),e.unlock($.ANOMALY_DISCOVERED,{anomalyType:r.payload.anomalyType,asteroidEid:r.payload.asteroidEid}))},"sim:narrative_event":t=>{t.payload.endScreenStats&&e.unlock($.DYSON_COMPLETE)}},state:t}}function cC(e,t,n,r,i,a){ag({onMarkRead:t=>{e.postMessage({type:`sim:inbox_mark_read`,payload:{messageId:t}})},onDeleteMessage:t=>{e.postMessage({type:`sim:inbox_delete`,payload:{messageId:t}})},onProcessInbox:()=>{t.latestInboxSnapshot&&(cg(!0),s_(t.latestInboxSnapshot).then(t=>{sg(t),t.triageResults.length>0&&e.postMessage({type:`sim:inbox_triage_result`,payload:{results:t.triageResults}})}))},onReplacementChoice:(t,n)=>{e.postMessage({type:`sim:replacement_choice`,payload:{legacyEid:t,choice:n}})},onDarkForestChoice:t=>{e.postMessage({type:`sim:dark_forest_choice`,payload:{choice:t}})},onHabitatDemandResponse:(t,n)=>{e.postMessage({type:`sim:habitat_demand_response`,payload:{demandId:t,action:n}})},onDispositionEventResponse:(t,n,r)=>{e.postMessage({type:`sim:disposition_event_response`,payload:{factionId:t,eventType:n,response:r}})},onThreatResponse:(t,n)=>{e.postMessage({type:`sim:threat_response`,payload:{threatId:t,response:n}})}}),zg(t=>{e.postMessage(t)});let o=f_(),s=aC({worker:e,refs:t,renderers:n,lazy:r,cbs:i},o),c={};if(a){let{handlers:e}=sC(a);c=e}e.onerror=e=>{console.error(`[main] Worker error:`,e),fr()},e.onmessage=e=>{let t=s[e.data.type],n=c[e.data.type];if(!t&&!n){console.warn(`[main] No handler registered for worker message type: ${e.data.type}`);return}if(t)try{t(e.data)}catch(t){console.error(`[main] Message handler threw for type`,e.data.type,t)}if(n)try{n(e.data)}catch(t){console.error(`[main] Achievement handler threw for type`,e.data.type,t)}}}function lC(e,t,n){return t&&e===`s`?`save`:e===`l`||e===`L`?`toggleEventLog`:e===`d`||e===`D`?`toggleDashboard`:e===`t`||e===`T`?`toggleTechTree`:e===`h`||e===`H`?`toggleKeybindingHelp`:e===`f`||e===`F`?`toggleFactionPanel`:e===`g`||e===`G`?`toggleMegastructurePanel`:e===`m`||e===`M`?`toggleAudioMute`:e===`a`||e===`A`?`toggleAdvisorPanel`:e===`c`||e===`C`?`toggleBuildPanel`:e===`v`||e===`V`?`toggleBuildingsPanel`:e===`i`||e===`I`?`toggleInboxPanel`:e===`u`||e===`U`?`toggleCulturePanel`:e===`k`||e===`K`?`toggleHabitatPanel`:e===`j`||e===`J`?`toggleCodex`:e===`p`||e===`P`?`toggleArchivesPanel`:e===`w`||e===`W`?`toggleMaterialPriorityPanel`:e===`n`||e===`N`?`toggleCommandersLog`:e===`y`||e===`Y`?`toggleBlueprintPanel`:e===`Home`?`snapToBase`:e===`Tab`&&!t?n?`followPrevRobot`:`followNextRobot`:e===`.`||e===`>`?`speedUp`:e===`,`||e===`<`?`speedDown`:e===`Escape`?`escape`:null}function uC(e,t,n,r,i,a){let{camera:o,robotRenderer:s,cameraRig:c,placementNdc:l,placementPlane:u,placementTarget:d,placementGhostMesh:f}=r;function p(e){n.followedRobotEid=e,Cu(e),ri(e,()=>m())}function m(){n.followedRobotEid=null,c.setFollowTarget(null),Cu(null),ii()}let h=Date.now(),g=!1;function _(){h=Date.now()}function v(){if(g)return;g=!0;let e=()=>{Date.now()-h>=15e3?_s(`idle_techtree`,`Press T to open Tech Tree`):setTimeout(e,5e3)};setTimeout(e,15e3)}window.addEventListener(`keydown`,_,{capture:!0}),window.addEventListener(`wheel`,_,{capture:!0,passive:!0}),window.addEventListener(`mousedown`,_,{capture:!0}),window.addEventListener(`touchstart`,_,{capture:!0,passive:!0});let y=()=>{_s(`first_scroll`,`Scroll to zoom out and see the asteroid field`),window.removeEventListener(`wheel`,y)};window.addEventListener(`wheel`,y,{passive:!0});let x=!1;async function ee(){if(x)return;x=!0,await R.init(),R.stopProceduralMusic();let e=R.getAudioContext(),t=R.getMusicGain();e&&t&&Lf.init(e,t)}let S=new We,C=new Ce;function w(t,r){let i=e.getBoundingClientRect();C.x=(t-i.left)/i.width*2-1,C.y=-((r-i.top)/i.height)*2+1,S.setFromCamera(C,o);for(let[e,n]of s.getMeshes()){if(n.count===0)continue;let i=S.intersectObject(n);if(i.length>0&&i[0].instanceId!==void 0){let n=s.getInstanceEid(e,i[0].instanceId);if(n>=0)return z(`ui.ship_highlight`),p(n),bu(n,t,r),!0}}return n.followedRobotEid!==null&&(m(),M(`Follow mode off`,`#94a3b8`)),!1}function T(t,r){if(!n.latestAsteroidBuffer||n.latestAsteroidCount===0)return null;let i=e.getBoundingClientRect();C.x=(t-i.left)/i.width*2-1,C.y=-((r-i.top)/i.height)*2+1,S.setFromCamera(C,o);let a=S.ray,s=-1,c=1/0,l=0,u=0,d=0,f=n.latestAsteroidBuffer;for(let e=0;e<n.latestAsteroidCount;e++){let t=e*11,n=f[t+1],r=f[t+2],i=f[t+3],o=f[t+4],p=n-a.origin.x,m=r-a.origin.y,h=i-a.origin.z,g=p*a.direction.x+m*a.direction.y+h*a.direction.z;if(g<0)continue;let _=a.origin.x+g*a.direction.x-n,v=a.origin.y+g*a.direction.y-r,y=a.origin.z+g*a.direction.z-i,b=_*_+v*v+y*y,x=Math.max(o*1.5,8);b<x*x&&g<c&&(c=g,s=f[t+0],l=n,u=r,d=i)}return s>=0?{eid:s,x:l,y:u,z:d}:null}function te(t){n.targetingRobotEid=t,n.isTargetingMode=!0,e.style.cursor=`crosshair`,M(`Click an asteroid to mine`,`#f59e0b`)}function ne(){n.targetingRobotEid=null,n.isTargetingMode=!1,e.style.cursor=``}function re(t){n.exploreRobotEid=t,n.isExploreMode=!0,e.style.cursor=`crosshair`,M(`Click a location to explore`,`#a855f7`)}function ie(){n.exploreRobotEid=null,n.isExploreMode=!1,e.style.cursor=``}function ae(t,n){let r=e.getBoundingClientRect();return l.x=(t-r.left)/r.width*2-1,l.y=-((n-r.top)/r.height)*2+1,S.setFromCamera(l,o),S.ray.intersectPlane(u,d)?d.clone():null}window.addEventListener(`keydown`,e=>{ee();let r=document.activeElement;if(!(r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement))switch(lC(e.key,e.ctrlKey,e.shiftKey)){case`save`:e.preventDefault(),a.requestSave(0);break;case`toggleEventLog`:O_();break;case`toggleDashboard`:i.loadDashboard().then(e=>{i.initDashboardOnce(e),e.toggleDashboard()}).catch(e=>{console.error(`[ui] Failed to load dashboard panel:`,e),M(`Failed to load panel — try again`,`#ef4444`)}),$u(`resources`);break;case`toggleTechTree`:ro(),$u(`research`);break;case`toggleKeybindingHelp`:Sf();break;case`toggleFactionPanel`:i.loadFactionPanel().then(e=>{i.initFactionOnce(e),e.toggleFactionPanel()}).catch(e=>{console.error(`[ui] Failed to load faction panel:`,e),M(`Failed to load panel — try again`,`#ef4444`)});break;case`toggleMegastructurePanel`:i.loadMegaPanel().then(e=>{i.initMegaOnce(e),e.toggleMegastructurePanel()}).catch(e=>{console.error(`[ui] Failed to load megastructure panel:`,e),M(`Failed to load panel — try again`,`#ef4444`)});break;case`toggleAudioMute`:M(R.toggleMute()?`🔇 Audio muted`:`🔊 Audio enabled`,`#94a3b8`);break;case`toggleAdvisorPanel`:i.loadAdvisorLazy().then(e=>{i.initAdvisorOnce(e),e.panel.toggleAdvisorPanel()}).catch(e=>{console.error(`[ui] Failed to load advisor panel:`,e),M(`Failed to load panel — try again`,`#ef4444`)});break;case`toggleBuildPanel`:Ls(),$u(`factory`);break;case`toggleBuildingsPanel`:lc(),$u(`buildings`);break;case`toggleInboxPanel`:lg();break;case`toggleCulturePanel`:gb();break;case`toggleHabitatPanel`:Hg();break;case`toggleCodex`:Xi();break;case`toggleArchivesPanel`:ra();break;case`toggleMaterialPriorityPanel`:Ho();break;case`toggleBlueprintPanel`:ts();break;case`toggleCommandersLog`:Aa();break;case`snapToBase`:e.preventDefault(),a.snapCameraToBase();break;case`followNextRobot`:if(e.preventDefault(),n.latestRobotBuffer&&n.latestRobotCount>0){let e=0;if(n.followedRobotEid!==null){for(let t=0;t<n.latestRobotCount;t++)if(b(n.latestRobotBuffer,t)===n.followedRobotEid){e=(t+1)%n.latestRobotCount;break}}p(b(n.latestRobotBuffer,e))}break;case`followPrevRobot`:if(e.preventDefault(),n.latestRobotBuffer&&n.latestRobotCount>0){let e=n.latestRobotCount-1;if(n.followedRobotEid!==null){for(let t=0;t<n.latestRobotCount;t++)if(b(n.latestRobotBuffer,t)===n.followedRobotEid){e=(t-1+n.latestRobotCount)%n.latestRobotCount;break}}p(b(n.latestRobotBuffer,e))}break;case`speedUp`:Kr();break;case`speedDown`:qr();break;case`escape`:if(Cf(),_b(),Ug(),lS(),Uo(),ns(),ja(),i.getFactionPanel()?.hideFactionPanel(),i.getMegaPanel()?.hideMegastructurePanel(),ia(),n.isTargetingMode){ne(),M(`Targeting cancelled`,`#94a3b8`);return}if(n.isExploreMode){ie(),M(`Explore cancelled`,`#94a3b8`);return}if(n.isPlacingBase){a.exitBasePlacementMode(),M(`Outpost placement cancelled`,`#94a3b8`);return}if(n.followedRobotEid!==null){m(),M(`Follow mode off`,`#94a3b8`);return}ru()?(au(),t.postMessage({type:`sim:resume`})):(iu(),t.postMessage({type:`sim:pause`}));break}}),e.addEventListener(`click`,()=>void ee(),{once:!0}),document.addEventListener(`pointerdown`,()=>void ee(),{once:!0}),e.addEventListener(`mousemove`,e=>{if(!n.isPlacingBase)return;let t=ae(e.clientX,e.clientY);t&&f.position.set(t.x,.5,t.z)});let oe=0,E=0;e.addEventListener(`mousedown`,e=>{oe=e.clientX,E=e.clientY}),e.addEventListener(`click`,e=>{if(Math.abs(e.clientX-oe)>5||Math.abs(e.clientY-E)>5||c.wasDragPanning()||e.button!==0)return;if(n.isPlacingBase){let n=ae(e.clientX,e.clientY);n&&t.postMessage({type:`sim:build_base`,payload:{x:n.x,y:0,z:n.z}}),a.exitBasePlacementMode();return}if(n.isTargetingMode){let r=T(e.clientX,e.clientY);r?(t.postMessage({type:`sim:add_task`,payload:{taskType:co.MINE,targetEid:r.eid,targetX:r.x,targetY:r.y,targetZ:r.z,priority:10,robotEid:n.targetingRobotEid??void 0}}),z(`ui.button_press`),M(`Mining task assigned`,`#4ade80`),n.playerTargetAsteroids.includes(r.eid)||n.playerTargetAsteroids.push(r.eid)):M(`No asteroid found — try again`,`#94a3b8`),ne(),e.stopPropagation();return}if(n.isExploreMode){let r=ae(e.clientX,e.clientY);r?(t.postMessage({type:`sim:add_task`,payload:{taskType:co.EXPLORE,targetEid:-1,targetX:r.x,targetY:0,targetZ:r.z,priority:10,robotEid:n.exploreRobotEid??void 0}}),z(`ui.button_press`),M(`Explore task assigned`,`#a855f7`)):M(`Invalid location — try again`,`#94a3b8`),ie(),e.stopPropagation();return}if(w(e.clientX,e.clientY)){e.stopPropagation();return}let r=T(e.clientX,e.clientY);if(r){cS(r.eid,e.clientX,e.clientY),t.postMessage({type:`sim:query_asteroid`,payload:{eid:r.eid}}),e.stopPropagation();return}uS()&&lS()}),e.addEventListener(`contextmenu`,e=>{if(n.isTargetingMode){e.preventDefault(),ne(),M(`Targeting cancelled`,`#94a3b8`);return}if(n.isExploreMode){e.preventDefault(),ie(),M(`Explore cancelled`,`#94a3b8`);return}n.isPlacingBase&&(e.preventDefault(),a.exitBasePlacementMode(),M(`Outpost placement cancelled`,`#94a3b8`))});let se=0,ce=0;return e.addEventListener(`touchstart`,e=>{e.touches.length===1&&(se=e.touches[0].clientX,ce=e.touches[0].clientY)}),e.addEventListener(`touchend`,e=>{if(ee(),e.changedTouches.length===1){let t=e.changedTouches[0].clientX-se,n=e.changedTouches[0].clientY-ce;Math.abs(t)<10&&Math.abs(n)<10&&w(e.changedTouches[0].clientX,e.changedTouches[0].clientY)&&e.preventDefault()}}),{startFollow:p,stopFollow:m,scheduleIdleHint:v,enterTargetingMode:te,enterExploreMode:re}}var dC=`cotb.supportPrompt.dismissedAt`,fC=`cotb.supportPrompt.shown`,pC=10080*60*1e3,mC=600*1e3,hC=5,gC=`https://buy.stripe.com/3cI5kCa380fN2hfbOp6c008`,_C=!1,vC=0,yC=0,bC=null,xC=null,SC=null;function CC(){if(sessionStorage.getItem(fC))return!0;let e=localStorage.getItem(dC);return!!(e&&Date.now()-parseInt(e,10)<pC)}function wC(){xC!==null&&(clearInterval(xC),xC=null)}function TC(){document.hidden?bC!==null&&(yC+=Date.now()-bC,bC=null):bC=Date.now()}function EC(){if(localStorage.setItem(dC,String(Date.now())),SC){SC.style.opacity=`0`,SC.style.transform=`translateX(-50%) translateY(16px)`;let e=SC;setTimeout(()=>e.remove(),400),SC=null}}function DC(){try{window.umami?.track(`ingame-support-prompt-shown`)}catch{}}function OC(){let e=document.createElement(`div`);e.id=`support-prompt`,e.style.cssText=`
    position: fixed;
    bottom: 56px;
    left: 50%;
    transform: translateX(-50%) translateY(16px);
    z-index: 8500;
    background: rgba(8, 14, 24, 0.93);
    border: 1px solid rgba(34, 211, 238, 0.2);
    border-radius: 6px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 11px;
    color: #cbd5e1;
    letter-spacing: 0.03em;
    box-shadow: 0 4px 24px rgba(0,0,0,0.7);
    backdrop-filter: blur(8px);
    max-width: min(500px, 90vw);
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease;
  `,e.innerHTML=w`
    <span style="flex: 1; line-height: 1.6;">
      Enjoying Cultures of the Belt? Support the team &mdash;
      <a id="support-cta"
         href="${gC}"
         target="_blank"
         rel="noopener noreferrer"
         style="color: #22d3ee; text-decoration: none;"
         data-umami-event="ingame-support-prompt-clicked">pay what you can</a>.
    </span>
    <button id="support-dismiss"
      title="Dismiss"
      style="
        background: transparent;
        border: none;
        color: rgba(203,213,225,0.35);
        cursor: pointer;
        font-size: 14px;
        padding: 0 2px;
        line-height: 1;
        flex-shrink: 0;
        transition: color 0.2s;
      ">✕</button>
  `,document.body.appendChild(e),SC=e;let t=e.querySelector(`#support-dismiss`);t.addEventListener(`mouseenter`,()=>{t.style.color=`rgba(203,213,225,0.7)`}),t.addEventListener(`mouseleave`,()=>{t.style.color=`rgba(203,213,225,0.35)`}),t.addEventListener(`click`,EC),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.opacity=`1`,e.style.transform=`translateX(-50%) translateY(0)`})})}function kC(){_C||CC()||(_C=!0,sessionStorage.setItem(fC,`1`),wC(),document.removeEventListener(`visibilitychange`,TC),OC(),DC())}function AC(){CC()||(bC=document.hidden?null:Date.now(),xC=setInterval(()=>{document.hidden||bC===null||(yC+=Date.now()-bC,bC=Date.now(),yC>=mC&&kC())},5e3),document.addEventListener(`visibilitychange`,TC))}function jC(){_C||CC()||(vC++,vC>=hC&&kC())}var MC=`cotb_unlocked_achievements_v1`,NC=`cotb_player_id_v1`;function PC(){try{let e=localStorage.getItem(MC);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function FC(e){try{localStorage.setItem(MC,JSON.stringify([...e]))}catch{}}function IC(){let e=localStorage.getItem(NC);return e||(e=`cotb-${crypto.randomUUID()}`,localStorage.setItem(NC,e)),e}var LC=class{serverUrl;playerId;unlocked;listeners=[];constructor(e=``){this.serverUrl=e,this.playerId=IC(),this.unlocked=PC()}onUnlock(e){this.listeners.push(e)}async unlock(e,t={}){if(!this.unlocked.has(e)){this.unlocked.add(e),FC(this.unlocked);for(let t of this.listeners)try{t(e)}catch(e){console.warn(`[AchievementService] listener error:`,e)}await this._report(e,t)}}isUnlocked(e){return this.unlocked.has(e)}async _report(e,t){try{let n=await fetch(`${this.serverUrl}/api/achievements/unlock`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({achievementId:e,playerId:this.playerId,gameContext:{...t,gameOrigin:`cotb`}})});n.ok||console.warn(`[AchievementService] unlock failed (${n.status}) for ${e}`)}catch(e){console.warn(`[AchievementService] network error:`,e)}}},RC={common:`rgba(160, 165, 190, 0.9)`,uncommon:`rgba(61, 252, 224, 0.9)`,rare:`rgba(100, 160, 255, 0.9)`,epic:`rgba(180, 100, 255, 0.9)`,legendary:`rgba(255, 200, 60, 0.9)`},zC=4500,BC=600,VC=!1;function HC(){if(VC)return;VC=!0;let e=document.createElement(`style`);e.textContent=`
    .ach-notif {
      position: fixed;
      bottom: 80px;
      right: 20px;
      z-index: 9999;
      pointer-events: none;
      opacity: 0;
      transform: translateX(40px);
      transition: opacity ${BC}ms ease, transform ${BC}ms ease;
    }
    .ach-notif--visible {
      opacity: 1;
      transform: translateX(0);
    }
    .ach-notif__inner {
      background: rgba(10, 12, 20, 0.92);
      border: 1px solid rgba(61, 252, 224, 0.3);
      border-left-width: 3px;
      border-radius: 4px;
      padding: 12px 16px;
      min-width: 260px;
      max-width: 340px;
      font-family: monospace;
      box-shadow: 0 0 20px rgba(61, 252, 224, 0.15);
    }
    .ach-notif__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    .ach-notif__label {
      font-size: 10px;
      letter-spacing: 2px;
      color: rgba(61, 252, 224, 0.8);
      text-transform: uppercase;
    }
    .ach-notif__rarity {
      font-size: 9px;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 1px 6px;
      border-radius: 2px;
      background: rgba(255,255,255,0.08);
    }
    .ach-notif__title {
      font-size: 14px;
      font-weight: bold;
      color: #e2e8f0;
      margin-bottom: 2px;
    }
    .ach-notif__desc {
      font-size: 11px;
      color: rgba(160, 165, 190, 0.8);
    }
  `,document.head.appendChild(e)}var UC=class{queue=[];showing=!1;show(e){HC(),this.queue.push(e),this.showing||this._next()}_next(){let e=this.queue.shift();if(!e){this.showing=!1;return}this.showing=!0;let t=oC[e]??{title:`Achievement Unlocked`,description:``,rarity:`common`},n=RC[t.rarity]??RC.common,r=RC[t.rarity]??RC.common,i=document.createElement(`div`);i.className=`ach-notif`,i.innerHTML=`
      <div class="ach-notif__inner" style="border-left-color:${n}">
        <div class="ach-notif__header">
          <span class="ach-notif__label">Achievement Unlocked</span>
          <span class="ach-notif__rarity" style="color:${r}">${t.rarity.toUpperCase()}</span>
        </div>
        <div class="ach-notif__title">${t.title}</div>
        <div class="ach-notif__desc">${t.description}</div>
      </div>
    `,document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add(`ach-notif--visible`)),setTimeout(()=>{i.classList.remove(`ach-notif--visible`),setTimeout(()=>{i.remove(),this._next()},BC)},zC)}};function WC(){return Math.floor(Math.random()*1e6)}var GC=42;async function KC(){if(window.__unsupported)return;let e=document.getElementById(`game-canvas`);if(!e){console.error(`Canvas element not found`);return}ud(0);let t=await zh(e),{camera:n,composer:r,bloomPass:i,cameraRig:a,baseX:o,baseZ:c,asteroidRenderer:l,robotRenderer:u,threatRenderer:d,skybox:f,beltRegionRenderer:p,particles:m,miningParticles:h,thrusterParticles:_,baseStation:v,extraBaseRenderers:x,buildingRenderer:ee,megastructureRenderer:S,namedLocationLabels:C,claimMarkerRenderer:w,territoryZoneRenderer:T,followRingMesh:te,followRingMat:ne,placementGhostMesh:re,placementGhostMat:ie,solarSystemRenderer:ae}=t;ud(1);let oe=Math.log(3e3),E=Ap();function se(){a.setPivot(o,0,c),a.setZoom(oe),E.followedRobotEid!==null&&Me.stopFollow()}function ce(){E.isPlacingBase=!0,M(`Click to place outpost — Esc or right-click to cancel`,`#22d3ee`),ie.opacity=.6,e.style.cursor=`crosshair`}function le(){E.isPlacingBase=!1,ie.opacity=0,e.style.cursor=``}let ue=null,de=null,fe=!1,pe=null,me=!1,he=null,ge=!1,_e=null,D=null,ve=!1;function ye(){return de||=ob(()=>Promise.resolve().then(()=>Sx).then(e=>(ue=e,e)),void 0).catch(e=>(de=null,M(`[ARIA] Dashboard failed to load — press D to retry`,`#ef4444`),console.error(`[main] Failed to load dashboard:`,e),Promise.reject(e))),de}function be(e){fe||(fe=!0,e.initDashboard((t,n,r)=>{a.panTo(t,n,r,800),E.followedRobotEid!==null&&Me.stopFollow(),e.toggleDashboard()},(t,n)=>{a.setPivot(t,0,n),e.toggleDashboard()}))}function xe(){return ob(()=>Promise.resolve().then(()=>Lb).then(e=>(pe=e,e)),void 0).catch(e=>(M(`[ARIA] Faction panel failed to load — try again`,`#ef4444`),console.error(`[main] Failed to load faction panel:`,e),Promise.reject(e)))}function Se(e){me||(me=!0,e.initFactionPanel((e,t)=>{O.postMessage({type:`sim:faction_diplomacy`,payload:{factionId:e,action:t}})}))}function Ce(){return ob(()=>import(`./megastructurePanel-DTzeda2p.js`).then(e=>(he=e,e)),__vite__mapDeps([0,1,2])).catch(e=>(M(`[ARIA] Megastructure panel failed to load — try again`,`#ef4444`),console.error(`[main] Failed to load megastructure panel:`,e),Promise.reject(e)))}function we(e){ge||(ge=!0,e.initMegastructurePanel({onStartStage:(e,t)=>O.postMessage({type:`sim:start_megastructure_stage`,payload:{id:e,stageIndex:t}}),onResolveCrisis:e=>O.postMessage({type:`sim:resolve_megastructure_crisis`,payload:{id:e}}),onSkipCrisis:e=>O.postMessage({type:`sim:skip_megastructure_crisis`,payload:{id:e}})}))}function Te(){return D||=Promise.all([ob(()=>import(`./advisorPanel-BYXyNxyu.js`),__vite__mapDeps([3,4,5,6,7,8,1,9,10])),ob(()=>import(`./advisorService-k0qOM6TL.js`).then(e=>e.t),__vite__mapDeps([5,6,7,8,4,1])),ob(()=>import(`./gameState-DbKVjRZz.js`).then(e=>e.n),__vite__mapDeps([8,6,4,1])),ob(()=>import(`./commanderService-CJmahcEL.js`),__vite__mapDeps([11,4,7,8,6,1])),ob(()=>Promise.resolve().then(()=>r_),void 0),ob(()=>import(`./commanderDelegate-BFox9Lpo.js`),__vite__mapDeps([12,4,13,11,7,8,6,1])),ob(()=>Promise.resolve().then(()=>jv),void 0)]).then(([e,t,n,r,i,a,o])=>(_e={panel:e,service:t,gameState:n,commander:r,inbox:i,delegate:a,autoAnalysis:o},_e)).catch(e=>(D=null,M(`[ARIA] Advisor panel failed to load — try again`,`#ef4444`),console.error(`[main] Failed to load advisor:`,e),Promise.reject(e))),D}function Ee(e){return e.gameState.buildGameState(q,E.latestRobotBuffer,E.latestRobotCount,E.latestAsteroidBuffer,E.latestAsteroidCount,Op,E.latestTick,E.latestBuildings,{refined:E.latestRefined,techState:E.latestTechState,factoryQueueLength:E.latestFactoryQueueLength,robotCap:E.latestRobotCap,megastructureProjects:E.latestMegaProjects,factionStandings:E.latestFactionSnapshots.map(e=>({name:e.name,disposition:e.disposition,label:e.dispositionLabel,trend:e.dispositionDelta>0?`improving`:e.dispositionDelta<0?`worsening`:`stable`}))})}function De(e){if(ve)return;ve=!0;let{panel:t,service:n,commander:r,inbox:i,delegate:a,autoAnalysis:o}=e;t.initAdvisorPanel(),ed(`aria`,()=>t.toggleAdvisorPanel()),t.setCurrentProvider(n.getProvider()),t.setApiKeyStatus(n.hasApiKey()),t.onProviderSet(e=>{n.setProvider(e),t.setCurrentProvider(e)}),t.onApiKeySet(e=>{n.saveApiKey(e),t.setApiKeyStatus(n.hasApiKey()),t.removeOfflineBanner(),t.removeAuthErrorBanner(),r.setCommanderApiKey(e),i.setInboxApiKey(e)}),r.setCommanderWorkerSend(e=>O.postMessage(e)),r.setCommanderApiKey(n.getApiKey()),i.setInboxApiKey(n.getApiKey()),a.setDelegationWorkerSend(e=>O.postMessage(e)),a.setDelegationBuildState(()=>Ee(e)),o.setAutoAnalysisWorkerSend(e=>O.postMessage(e)),o.setAutoAnalysisBuildState(()=>Ee(e)),o.setAutoAnalysisIsPaused(()=>Un()),o.setAutoAnalysisInboxSnapshot(()=>E.latestInboxSnapshot),o.startAutoAnalysis(),a.onPendingActionsChange(e=>{t.updatePendingActions(e)}),t.onCommanderToggle(e=>{r.setCommanderEnabled(e)}),t.onDelegationToggle(e=>{a.setDelegationEnabled(e)}),t.onPendingActionApprove(e=>a.approveAction(e)),t.onPendingActionReject(e=>a.rejectAction(e)),t.onPendingActionApproveAll(()=>a.approveAllActions()),t.onPendingActionRejectAll(()=>a.rejectAllActions());function s(){n.isAuthError()&&(t.setApiKeyStatus(n.hasApiKey(),!0),t.showAuthErrorBanner())}t.onPlayerSubmit(async i=>{if(Bu(),jC(),o.recordPlayerInteraction(E.latestTick??0),a.isCapturing()){t.addAdvisorMessage(`Auto-delegation in progress — please wait a moment.`);return}t.setLoading(!0),ky(!0);let c=Ee(e);if(r.isCommanderEnabled()){let e=await r.askCommander(i,c),n=e.explanation;e.actions.length>0&&(n+=`

**Actions taken:**
`+e.actions.map(e=>`• ${e}`).join(`
`)),e.error&&(n+=`\n\n⚠ ${e.error}`),t.addAdvisorMessage(n)}else{let e=await n.askAdvisor(i,c);t.addAdvisorMessage(e)}s(),t.setLoading(!1),ky(!1)})}let Oe={getDashboard:()=>ue,getFactionPanel:()=>pe,getMegaPanel:()=>he,getAdvisor:()=>_e,loadDashboard:ye,initDashboardOnce:be,loadFactionPanel:xe,initFactionOnce:Se,loadMegaPanel:Ce,initMegaOnce:we,loadAdvisorLazy:Te,initAdvisorOnce:De};function ke(){let e=e=>{`requestIdleCallback`in window?window.requestIdleCallback(e,{timeout:3e3}):setTimeout(e,1e3)};ye().then(be).catch(e=>{console.error(`[main] Failed to preload dashboard:`,e)}),e(()=>void xe().then(Se).catch(e=>{console.error(`[main] Failed to preload faction panel:`,e)})),e(()=>void Ce().then(we).catch(e=>{console.error(`[main] Failed to preload megastructure panel:`,e)})),e(()=>void Te().then(De).catch(e=>{console.error(`[main] Failed to preload advisor panel:`,e)}))}gd(),Gd((e,t)=>a.setPivot(e,0,t)),Nr(se),Gr(e=>{E.speedMultiplier=e,O.postMessage({type:`sim:set_speed`,payload:{multiplier:e}})}),oi(),ci(),di();let Ae,je=Uf(e=>{i.strength=e.bloomIntensity,m.setDensity(e.particleDensity),clearInterval(Ae),Ae=setInterval(()=>Pe(`auto`),e.autoSaveIntervalMin*6e4)});i.strength=je.bloomIntensity,m.setDensity(je.particleDensity),Yi(),ta(),ka(),ud(2);let O=new Worker(new URL(`/assets/worker-B3BOkP_q.js`,``+import.meta.url),{type:`module`});Fp(e=>O.postMessage(e)),Rp(),to(e=>O.postMessage({type:`sim:start_research`,payload:{nodeId:e}})),_o(e=>O.postMessage(e)),Vo(e=>O.postMessage(e)),es(e=>O.postMessage(e)),Fs(e=>O.postMessage(e)),sc(e=>O.postMessage(e)),Lc(()=>ce(),e=>O.postMessage({type:`sim:upsert_route`,payload:e}),e=>O.postMessage({type:`sim:delete_route`,payload:{id:e}})),pl((e,t,n)=>O.postMessage({type:`sim:market_create_listing`,payload:{resource:e,quantity:t,buyerFactionId:n}}),e=>O.postMessage({type:`sim:market_cancel_listing`,payload:{listingId:e}})),Zu()&&Qu();let Me=uC(e,O,E,t,Oe,{snapCameraToBase:se,enterBasePlacementMode:ce,exitBasePlacementMode:le,requestSave:e=>O.postMessage({type:`sim:save_request`,payload:{slot:e,seed:GC}})});yu({onOrder:(e,t)=>O.postMessage({type:`sim:robot_order`,payload:{robotEid:e,order:t}}),onRequestDetail:e=>O.postMessage({type:`sim:robot_detail_request`,payload:{robotEid:e}}),onToggleFollow:e=>{E.followedRobotEid===e?Me.stopFollow():Me.startFollow(e)},onMineTarget:e=>Me.enterTargetingMode(e),onExploreTarget:e=>Me.enterExploreMode(e),onClose:()=>{}});let Ne=new LC,k=new UC;Ne.onUnlock(e=>k.show(e)),cC(O,E,t,Oe,{scheduleIdleHint:Me.scheduleIdleHint},Ne),Oy(e=>{Oe.loadAdvisorLazy().then(t=>{Oe.initAdvisorOnce(t),t.panel.addProactiveBroadcast(e)})});function Pe(e){O.postMessage({type:`sim:save_request`,payload:{slot:e,seed:GC}})}function Fe(e){GC=e.seed,Ie=e.difficultyMode??`normal`,E.speedMultiplier=1,Jr(),O.postMessage({type:`sim:set_speed`,payload:{multiplier:1}}),O.postMessage({type:`sim:load`,payload:{data:e}})}let Ie=`normal`;nu(Pe,Fe,()=>{},()=>Wf(),()=>GC,()=>Ie),Ae=setInterval(()=>Pe(`auto`),je.autoSaveIntervalMin*6e4),window.addEventListener(`beforeunload`,()=>{Pe(`auto`),Iu()});function Le(){let e=br()?.expeditionCount??0,t={seed:GC};return e>0&&(t.legacyExpeditionCount=e),Ie!==`normal`&&(t.difficultyMode=Ie),t}function Re(e,t){GC=e??WC(),Ie=t??`normal`,E.pendingFirstLaunch=Zu(),vp(),Tp(),Hu(),Fu(),E.speedMultiplier=1,Jr(),O.postMessage({type:`sim:set_speed`,payload:{multiplier:1}}),O.postMessage({type:`sim:init`,payload:Le()})}dd(),AC(),ql(e=>{GC=e.seed,Fu(),a.setPivot(e.base.x,e.base.y,e.base.z);let t=Date.now();Promise.all([ob(()=>import(`./offlineSim-BeI2kNBx.js`),[]),ob(()=>import(`./morningReport-CwsN4Ts9.js`),__vite__mapDeps([14,2]))]).then(([n,r])=>{if(n.shouldShowMorningReport(e,t)){let i=n.computeOfflineProgress(e,t);e.timestamp=t,O.postMessage({type:`sim:init`,payload:Le()}),E.pendingLoad=e;let a=Object.values(i.resourcesGained).reduce((e,t)=>e+t,0),o=[`[Morning Report] Fleet operated autonomously for ${i.elapsedLabel}.`];a>0&&o.push(`Resources gathered: ~${Math.round(a)} units.`),i.researchGained>0&&o.push(`Research accumulated: ${Math.round(i.researchGained)} points.`),i.anomaliesFound>0&&o.push(`Anomalies flagged: ${i.anomaliesFound}.`),Na(o.join(` `)),setTimeout(()=>r.showMorningReport(i,()=>{}),800)}else O.postMessage({type:`sim:init`,payload:Le()}),E.pendingLoad=e}).catch(t=>{console.error(`[main] Failed to load offline sim modules, loading save directly:`,t),M(`[ARIA] Morning report unavailable — loading save directly`,`#f59e0b`),O.postMessage({type:`sim:init`,payload:Le()}),E.pendingLoad=e})},()=>{sp(),Kl((e,t)=>Re(e,t),()=>Wf())}),ke(),Tn(e=>{M(`[ARIA] Render error — check console`,`#ef4444`),console.error(`[main] Render error:`,e)}),Bn({onFixedUpdate:e=>{E.elapsed+=e},onRender:e=>{let t=Rn();a.update(1/60);let i=a.getState();p.update(n.position),l.setRegionBias(p.asteroidBiasColor,p.asteroidBiasStrength),f.update(n.position,E.elapsed),ae.update(n.position),m.update(n.position,i.zoomDistance,E.elapsed),v.update(E.elapsed);for(let e of x)e.update(E.elapsed);if(ee.update(E.latestBuildings,E.elapsed),S.update(E.latestMegaProjects,E.elapsed,E.latestHabitatState),E.latestAsteroidBuffer&&E.latestAsteroidCount>0&&l.updateFromBuffer(E.latestAsteroidBuffer,E.latestAsteroidCount,n.position),d.updateFromBuffer(E.latestThreatBuffer??new Float32Array,E.latestThreatCount,E.elapsed),w.update(E.latestAsteroidBuffer,E.latestAsteroidCount,E.factionClaims,E.playerTargetAsteroids,E.elapsed),T.update(E.factionTerritories),E.latestRobotBuffer&&E.latestRobotCount>0)if(u.updateFromBuffer(E.latestRobotBuffer,E.latestRobotCount),h.update(E.latestRobotBuffer,E.latestRobotCount,E.elapsed),_.update(E.latestRobotBuffer,E.latestRobotCount,E.elapsed),R.setThrusterIntensity(Math.min(1,E.latestRobotCount/20)),E.followedRobotEid!==null){let e=!1;for(let t=0;t<E.latestRobotCount;t++)if(b(E.latestRobotBuffer,t)===E.followedRobotEid){let n=g(E.latestRobotBuffer,t),r=y(E.latestRobotBuffer,t),i=s(E.latestRobotBuffer,t);a.setFollowTarget({x:n,y:r,z:i});let o=1+.25*Math.abs(Math.sin(E.elapsed*2.5));te.position.set(n,r+1,i),te.scale.setScalar(o),ne.opacity=.55,e=!0;break}e||(Me.stopFollow(),ne.opacity=0,M(`Robot lost — follow mode disabled`,`#94a3b8`))}else ne.opacity=0;else E.followedRobotEid!==null&&(!E.latestRobotBuffer||E.latestRobotCount===0)&&(Me.stopFollow(),ne.opacity=0);if(E.isPlacingBase){let e=1+.15*Math.sin(E.elapsed*3);re.scale.setScalar(e),ie.opacity=.5+.2*Math.abs(Math.sin(E.elapsed*2))}ue?.renderDashboard(),C.update(n),Qd(i.pivot.x,i.pivot.z,i.zoomDistance),$d(Date.now()),r.render(),Pr(t.fps,E.lastStats?.entityCount??0,E.lastStats?.asteroidCount??0,E.lastStats?.robotCount??0),Ir(q[0],q[5],q[6],q[4]),Fr(E.latestTick)}})}window.addEventListener(`error`,e=>bn(e.error)),window.addEventListener(`unhandledrejection`,e=>bn(e.reason)),KC().catch(console.error);export{Cv as a,Sv as c,cv as d,sv as f,Tv as i,bv as l,Ov as n,xv as o,Y as p,vv as r,_v as s,Dv as t,lv as u};
//# sourceMappingURL=index-CC9qzs0t.js.map